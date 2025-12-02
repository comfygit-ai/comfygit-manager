import { app as Rt } from "../../scripts/app.js";
import { defineComponent as oe, createElementBlock as o, openBlock as s, createCommentVNode as r, createElementVNode as e, renderSlot as Me, createBlock as M, resolveDynamicComponent as ks, normalizeClass as fe, withCtx as l, toDisplayString as a, createVNode as w, createTextVNode as g, computed as U, Fragment as W, renderList as ne, normalizeStyle as Et, ref as h, onMounted as We, watch as Ct, Teleport as Ye, withModifiers as Be, Transition as co, createSlots as Nt, withKeys as $t, reactive as us, onUnmounted as bs, readonly as uo, unref as Ee, withDirectives as De, vModelText as Dt, vModelRadio as Tt, vModelCheckbox as is, nextTick as mo, vModelSelect as It, vModelDynamic as vo, TransitionGroup as fo, createApp as _s, h as $s } from "vue";
const po = { class: "panel-layout" }, go = {
  key: 0,
  class: "panel-layout-header"
}, ho = {
  key: 1,
  class: "panel-layout-search"
}, yo = { class: "panel-layout-content" }, wo = {
  key: 2,
  class: "panel-layout-footer"
}, ko = /* @__PURE__ */ oe({
  __name: "PanelLayout",
  setup(t) {
    return (c, n) => (s(), o("div", po, [
      c.$slots.header ? (s(), o("div", go, [
        Me(c.$slots, "header", {}, void 0, !0)
      ])) : r("", !0),
      c.$slots.search ? (s(), o("div", ho, [
        Me(c.$slots, "search", {}, void 0, !0)
      ])) : r("", !0),
      e("div", yo, [
        Me(c.$slots, "content", {}, void 0, !0)
      ]),
      c.$slots.footer ? (s(), o("div", wo, [
        Me(c.$slots, "footer", {}, void 0, !0)
      ])) : r("", !0)
    ]));
  }
}), ae = (t, c) => {
  const n = t.__vccOpts || t;
  for (const [i, f] of c)
    n[i] = f;
  return n;
}, tt = /* @__PURE__ */ ae(ko, [["__scopeId", "data-v-21565df9"]]), bo = {
  key: 0,
  class: "panel-title-prefix"
}, _o = {
  key: 1,
  class: "panel-title-prefix-theme"
}, $o = /* @__PURE__ */ oe({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (c, n) => (s(), M(ks(`h${t.level}`), {
      class: fe(["panel-title", t.variant])
    }, {
      default: l(() => [
        t.showPrefix ? (s(), o("span", bo, a(t.prefix), 1)) : (s(), o("span", _o)),
        Me(c.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Co = /* @__PURE__ */ ae($o, [["__scopeId", "data-v-c3875efc"]]), xo = ["title"], So = ["width", "height"], Io = /* @__PURE__ */ oe({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(t) {
    return (c, n) => (s(), o("button", {
      class: "info-button",
      title: t.title,
      onClick: n[0] || (n[0] = (i) => c.$emit("click"))
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
      ])], 8, So))
    ], 8, xo));
  }
}), Vs = /* @__PURE__ */ ae(Io, [["__scopeId", "data-v-6fc7f16d"]]), Eo = { class: "header-left" }, Po = {
  key: 0,
  class: "header-actions"
}, Mo = /* @__PURE__ */ oe({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(t) {
    return (c, n) => (s(), o("div", {
      class: fe(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", Eo, [
        w(Co, { "show-prefix": t.showPrefix }, {
          default: l(() => [
            g(a(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (s(), M(Vs, {
          key: 0,
          onClick: n[0] || (n[0] = (i) => c.$emit("info-click"))
        })) : r("", !0)
      ]),
      c.$slots.actions ? (s(), o("div", Po, [
        Me(c.$slots, "actions", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), st = /* @__PURE__ */ ae(Mo, [["__scopeId", "data-v-55a62cd6"]]), Ro = {
  key: 0,
  class: "section-title-count"
}, To = {
  key: 1,
  class: "section-title-icon"
}, Do = /* @__PURE__ */ oe({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (c, n) => (s(), M(ks(`h${t.level}`), {
      class: fe(["section-title", { clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (i) => t.clickable && c.$emit("click"))
    }, {
      default: l(() => [
        Me(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", Ro, "(" + a(t.count) + ")", 1)) : r("", !0),
        t.clickable ? (s(), o("span", To, a(t.expanded ? "▼" : "▸"), 1)) : r("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), vt = /* @__PURE__ */ ae(Do, [["__scopeId", "data-v-559361eb"]]), Lo = { class: "status-grid" }, zo = { class: "status-grid__columns" }, Uo = { class: "status-grid__column" }, No = { class: "status-grid__title" }, Oo = { class: "status-grid__column status-grid__column--right" }, Ao = { class: "status-grid__title" }, Bo = {
  key: 0,
  class: "status-grid__footer"
}, Fo = /* @__PURE__ */ oe({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (c, n) => (s(), o("div", Lo, [
      e("div", zo, [
        e("div", Uo, [
          e("h4", No, a(t.leftTitle), 1),
          Me(c.$slots, "left", {}, void 0, !0)
        ]),
        e("div", Oo, [
          e("h4", Ao, a(t.rightTitle), 1),
          Me(c.$slots, "right", {}, void 0, !0)
        ])
      ]),
      c.$slots.footer ? (s(), o("div", Bo, [
        Me(c.$slots, "footer", {}, void 0, !0)
      ])) : r("", !0)
    ]));
  }
}), Vo = /* @__PURE__ */ ae(Fo, [["__scopeId", "data-v-73b7ba3f"]]), Wo = {
  key: 0,
  class: "status-item__icon"
}, Go = {
  key: 1,
  class: "status-item__count"
}, jo = { class: "status-item__label" }, Ho = /* @__PURE__ */ oe({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(t) {
    const c = t, n = U(() => `status-item--${c.variant}`);
    return (i, f) => (s(), o("div", {
      class: fe(["status-item", n.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (s(), o("span", Wo, a(t.icon), 1)) : r("", !0),
      t.count !== void 0 ? (s(), o("span", Go, a(t.count), 1)) : r("", !0),
      e("span", jo, a(t.label), 1)
    ], 2));
  }
}), bt = /* @__PURE__ */ ae(Ho, [["__scopeId", "data-v-6f929183"]]), Ko = { class: "issue-card__header" }, qo = { class: "issue-card__icon" }, Yo = { class: "issue-card__title" }, Jo = {
  key: 0,
  class: "issue-card__content"
}, Xo = {
  key: 0,
  class: "issue-card__description"
}, Qo = {
  key: 1,
  class: "issue-card__items"
}, Zo = {
  key: 2,
  class: "issue-card__actions"
}, en = /* @__PURE__ */ oe({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(t) {
    const c = t, n = U(() => `issue-card--${c.severity}`);
    return (i, f) => (s(), o("div", {
      class: fe(["issue-card", n.value])
    }, [
      e("div", Ko, [
        e("span", qo, a(t.icon), 1),
        e("h4", Yo, a(t.title), 1)
      ]),
      i.$slots.default || t.description ? (s(), o("div", Jo, [
        t.description ? (s(), o("p", Xo, a(t.description), 1)) : r("", !0),
        Me(i.$slots, "default", {}, void 0, !0)
      ])) : r("", !0),
      t.items && t.items.length ? (s(), o("div", Qo, [
        (s(!0), o(W, null, ne(t.items, (p, u) => (s(), o("div", {
          key: u,
          class: "issue-card__item"
        }, [
          f[0] || (f[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, a(p), 1)
        ]))), 128))
      ])) : r("", !0),
      i.$slots.actions ? (s(), o("div", Zo, [
        Me(i.$slots, "actions", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), pt = /* @__PURE__ */ ae(en, [["__scopeId", "data-v-df6aa348"]]), tn = ["type", "disabled"], sn = {
  key: 0,
  class: "spinner"
}, on = /* @__PURE__ */ oe({
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
    return (c, n) => (s(), o("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: fe(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: n[0] || (n[0] = (i) => c.$emit("click", i))
    }, [
      t.loading ? (s(), o("span", sn)) : r("", !0),
      t.loading ? r("", !0) : Me(c.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, tn));
  }
}), se = /* @__PURE__ */ ae(on, [["__scopeId", "data-v-772abe47"]]), nn = { class: "empty-state" }, an = {
  key: 0,
  class: "empty-icon"
}, ln = { class: "empty-message" }, rn = /* @__PURE__ */ oe({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (c, n) => (s(), o("div", nn, [
      t.icon ? (s(), o("div", an, a(t.icon), 1)) : r("", !0),
      e("p", ln, a(t.message), 1),
      t.actionLabel ? (s(), M(se, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (i) => c.$emit("action"))
      }, {
        default: l(() => [
          g(a(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : r("", !0)
    ]));
  }
}), yt = /* @__PURE__ */ ae(rn, [["__scopeId", "data-v-4466284f"]]), dn = /* @__PURE__ */ oe({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (c, n) => (s(), o("span", {
      class: fe(["detail-label"]),
      style: Et({ minWidth: t.minWidth })
    }, [
      Me(c.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), as = /* @__PURE__ */ ae(dn, [["__scopeId", "data-v-75e9eeb8"]]), cn = /* @__PURE__ */ oe({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (c, n) => (s(), o("span", {
      class: fe(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      Me(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), gs = /* @__PURE__ */ ae(cn, [["__scopeId", "data-v-2f186e4c"]]), un = { class: "detail-row" }, mn = /* @__PURE__ */ oe({
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
    return (c, n) => (s(), o("div", un, [
      w(as, { "min-width": t.labelMinWidth }, {
        default: l(() => [
          g(a(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (s(), M(gs, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: l(() => [
          g(a(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : Me(c.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), Ve = /* @__PURE__ */ ae(mn, [["__scopeId", "data-v-ef15664a"]]), vn = { class: "modal-header" }, fn = { class: "modal-body" }, pn = { class: "status-section" }, gn = {
  key: 0,
  class: "status-section"
}, hn = { class: "section-header-row" }, yn = {
  key: 0,
  class: "workflow-group"
}, wn = { class: "workflow-group-header" }, kn = { class: "workflow-group-title" }, bn = { class: "workflow-list" }, _n = { class: "workflow-name" }, $n = { class: "workflow-issue" }, Cn = {
  key: 1,
  class: "workflow-group"
}, xn = { class: "workflow-group-header" }, Sn = { class: "workflow-group-title" }, In = { class: "workflow-list" }, En = { class: "workflow-name" }, Pn = { class: "workflow-issue" }, Mn = {
  key: 2,
  class: "workflow-group"
}, Rn = { class: "workflow-group-header" }, Tn = { class: "workflow-group-title" }, Dn = { class: "workflow-list" }, Ln = { class: "workflow-name" }, zn = {
  key: 3,
  class: "workflow-group"
}, Un = { class: "workflow-group-header" }, Nn = { class: "workflow-group-title" }, On = { class: "workflow-list" }, An = { class: "workflow-name" }, Bn = {
  key: 4,
  class: "workflow-group"
}, Fn = { class: "workflow-group-header" }, Vn = { class: "workflow-group-title" }, Wn = { class: "workflow-list" }, Gn = { class: "workflow-name" }, jn = {
  key: 5,
  class: "workflow-group"
}, Hn = { class: "workflow-group-title" }, Kn = { class: "expand-icon" }, qn = {
  key: 0,
  class: "workflow-list"
}, Yn = { class: "workflow-name" }, Jn = {
  key: 1,
  class: "status-section"
}, Xn = {
  key: 0,
  class: "change-group"
}, Qn = { class: "change-group-header" }, Zn = { class: "change-group-title" }, ea = { class: "change-list" }, ta = { class: "node-name" }, sa = {
  key: 0,
  class: "dev-badge"
}, oa = {
  key: 1,
  class: "change-group"
}, na = { class: "change-group-header" }, aa = { class: "change-group-title" }, la = { class: "change-list" }, ia = { class: "node-name" }, ra = {
  key: 0,
  class: "dev-badge"
}, da = {
  key: 2,
  class: "change-group"
}, ca = { class: "change-list" }, ua = { class: "change-item" }, ma = { class: "node-name" }, va = {
  key: 3,
  class: "change-group"
}, fa = {
  key: 2,
  class: "status-section"
}, pa = { class: "section-header-row" }, ga = {
  key: 0,
  class: "drift-item"
}, ha = { class: "drift-list" }, ya = {
  key: 0,
  class: "drift-list-more"
}, wa = {
  key: 1,
  class: "drift-item"
}, ka = { class: "drift-list" }, ba = {
  key: 0,
  class: "drift-list-more"
}, _a = {
  key: 2,
  class: "drift-item"
}, $a = { class: "drift-list" }, Ca = { class: "version-actual" }, xa = { class: "version-expected" }, Sa = {
  key: 0,
  class: "drift-list-more"
}, Ia = {
  key: 3,
  class: "drift-item"
}, Ea = { class: "repair-action" }, Pa = {
  key: 3,
  class: "status-section"
}, Ma = { class: "info-box" }, Ra = { class: "drift-list" }, Ta = {
  key: 0,
  class: "drift-list-more"
}, Da = {
  key: 4,
  class: "status-section"
}, La = { class: "warning-box" }, za = {
  key: 5,
  class: "empty-state-inline"
}, Ua = { class: "modal-actions" }, Na = /* @__PURE__ */ oe({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {},
    isRepairing: { type: Boolean }
  },
  emits: ["close", "navigate-workflows", "navigate-nodes", "repair"],
  setup(t) {
    const c = t, n = h(!1);
    We(() => {
      console.log("StatusDetailModal mounted, initial show value:", c.show);
    }), Ct(() => c.show, (_, b) => {
      console.log("StatusDetailModal show prop changed from", b, "to", _);
    }, { immediate: !0 });
    const i = U(() => {
      var _, b, T;
      return ((T = (b = (_ = c.status) == null ? void 0 : _.workflows) == null ? void 0 : b.analyzed) == null ? void 0 : T.filter(
        (P) => P.status === "broken" && P.sync_state === "synced"
      )) || [];
    }), f = U(() => {
      var _, b, T;
      return ((T = (b = (_ = c.status) == null ? void 0 : _.workflows) == null ? void 0 : b.analyzed) == null ? void 0 : T.filter(
        (P) => P.status === "broken" && P.sync_state !== "synced"
      )) || [];
    }), p = U(() => {
      var _, b, T;
      return ((T = (b = (_ = c.status) == null ? void 0 : _.workflows) == null ? void 0 : b.synced) == null ? void 0 : T.filter((P) => {
        var C, B, x;
        const $ = (x = (B = (C = c.status) == null ? void 0 : C.workflows) == null ? void 0 : B.analyzed) == null ? void 0 : x.find((R) => R.name === P);
        return !$ || $.status !== "broken";
      })) || [];
    }), u = U(() => {
      var _, b, T, P, $;
      return (_ = c.status) != null && _.workflows ? (((b = c.status.workflows.new) == null ? void 0 : b.length) ?? 0) > 0 || (((T = c.status.workflows.modified) == null ? void 0 : T.length) ?? 0) > 0 || (((P = c.status.workflows.deleted) == null ? void 0 : P.length) ?? 0) > 0 || ((($ = c.status.workflows.synced) == null ? void 0 : $.length) ?? 0) > 0 : !1;
    }), m = U(() => {
      var b, T, P;
      const _ = (b = c.status) == null ? void 0 : b.git_changes;
      return _ ? (((T = _.nodes_added) == null ? void 0 : T.length) ?? 0) > 0 || (((P = _.nodes_removed) == null ? void 0 : P.length) ?? 0) > 0 || _.workflow_changes || _.has_other_changes : !1;
    }), d = U(() => {
      var _, b, T, P, $, C;
      return !u.value && !m.value && ((b = (_ = c.status) == null ? void 0 : _.comparison) == null ? void 0 : b.is_synced) && (((T = c.status) == null ? void 0 : T.missing_models_count) ?? 0) === 0 && (((C = ($ = (P = c.status) == null ? void 0 : P.comparison) == null ? void 0 : $.disabled_nodes) == null ? void 0 : C.length) ?? 0) === 0;
    }), v = U(() => {
      var b, T;
      const _ = (T = (b = c.status) == null ? void 0 : b.git_changes) == null ? void 0 : T.workflow_changes;
      return _ ? typeof _ == "number" ? _ : Object.keys(_).length : 0;
    });
    function y(_) {
      return typeof _ == "string" ? _ : _.name;
    }
    function k(_) {
      return typeof _ == "object" && _.is_development === !0;
    }
    return (_, b) => {
      var T, P, $, C, B, x, R, q, A, G, I, D, O, ie, te, J, re, X, z, L, S, de;
      return s(), M(Ye, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: b[7] || (b[7] = (Z) => _.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: b[6] || (b[6] = Be(() => {
            }, ["stop"]))
          }, [
            e("div", vn, [
              b[8] || (b[8] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: b[0] || (b[0] = (Z) => _.$emit("close"))
              }, "✕")
            ]),
            e("div", fn, [
              e("div", pn, [
                w(vt, { level: "4" }, {
                  default: l(() => [...b[9] || (b[9] = [
                    g("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                w(Ve, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              u.value ? (s(), o("div", gn, [
                e("div", hn, [
                  w(vt, { level: "4" }, {
                    default: l(() => [...b[10] || (b[10] = [
                      g("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: b[1] || (b[1] = (Z) => _.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                i.value.length ? (s(), o("div", yn, [
                  e("div", wn, [
                    b[11] || (b[11] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", kn, "BROKEN (COMMITTED) (" + a(i.value.length) + ")", 1)
                  ]),
                  e("div", bn, [
                    (s(!0), o(W, null, ne(i.value, (Z) => (s(), o("div", {
                      key: Z.name,
                      class: "workflow-item"
                    }, [
                      e("span", _n, a(Z.name), 1),
                      e("span", $n, a(Z.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                f.value.length ? (s(), o("div", Cn, [
                  e("div", xn, [
                    b[12] || (b[12] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Sn, "BROKEN (UNCOMMITTED) (" + a(f.value.length) + ")", 1)
                  ]),
                  e("div", In, [
                    (s(!0), o(W, null, ne(f.value, (Z) => (s(), o("div", {
                      key: Z.name,
                      class: "workflow-item"
                    }, [
                      e("span", En, a(Z.name), 1),
                      e("span", Pn, a(Z.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (P = (T = t.status.workflows) == null ? void 0 : T.new) != null && P.length ? (s(), o("div", Mn, [
                  e("div", Rn, [
                    b[13] || (b[13] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", Tn, "NEW (" + a(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", Dn, [
                    (s(!0), o(W, null, ne(t.status.workflows.new, (Z) => (s(), o("div", {
                      key: Z,
                      class: "workflow-item"
                    }, [
                      e("span", Ln, a(Z), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (C = ($ = t.status.workflows) == null ? void 0 : $.modified) != null && C.length ? (s(), o("div", zn, [
                  e("div", Un, [
                    b[14] || (b[14] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", Nn, "MODIFIED (" + a(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", On, [
                    (s(!0), o(W, null, ne(t.status.workflows.modified, (Z) => (s(), o("div", {
                      key: Z,
                      class: "workflow-item"
                    }, [
                      e("span", An, a(Z), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (x = (B = t.status.workflows) == null ? void 0 : B.deleted) != null && x.length ? (s(), o("div", Bn, [
                  e("div", Fn, [
                    b[15] || (b[15] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", Vn, "DELETED (" + a(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", Wn, [
                    (s(!0), o(W, null, ne(t.status.workflows.deleted, (Z) => (s(), o("div", {
                      key: Z,
                      class: "workflow-item"
                    }, [
                      e("span", Gn, a(Z), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                p.value.length ? (s(), o("div", jn, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: b[2] || (b[2] = (Z) => n.value = !n.value)
                  }, [
                    b[16] || (b[16] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", Hn, "SYNCED (" + a(p.value.length) + ")", 1),
                    e("span", Kn, a(n.value ? "▼" : "▶"), 1)
                  ]),
                  n.value ? (s(), o("div", qn, [
                    (s(!0), o(W, null, ne(p.value, (Z) => (s(), o("div", {
                      key: Z,
                      class: "workflow-item"
                    }, [
                      e("span", Yn, a(Z), 1)
                    ]))), 128))
                  ])) : r("", !0)
                ])) : r("", !0)
              ])) : r("", !0),
              m.value ? (s(), o("div", Jn, [
                w(vt, { level: "4" }, {
                  default: l(() => [...b[17] || (b[17] = [
                    g("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (q = (R = t.status.git_changes) == null ? void 0 : R.nodes_added) != null && q.length ? (s(), o("div", Xn, [
                  e("div", Qn, [
                    b[18] || (b[18] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", Zn, "NODES ADDED (" + a(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", ea, [
                    (s(!0), o(W, null, ne(t.status.git_changes.nodes_added, (Z) => (s(), o("div", {
                      key: y(Z),
                      class: "change-item"
                    }, [
                      e("span", ta, a(y(Z)), 1),
                      k(Z) ? (s(), o("span", sa, "dev")) : r("", !0)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (G = (A = t.status.git_changes) == null ? void 0 : A.nodes_removed) != null && G.length ? (s(), o("div", oa, [
                  e("div", na, [
                    b[19] || (b[19] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", aa, "NODES REMOVED (" + a(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", la, [
                    (s(!0), o(W, null, ne(t.status.git_changes.nodes_removed, (Z) => (s(), o("div", {
                      key: y(Z),
                      class: "change-item"
                    }, [
                      e("span", ia, a(y(Z)), 1),
                      k(Z) ? (s(), o("span", ra, "dev")) : r("", !0)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (I = t.status.git_changes) != null && I.workflow_changes ? (s(), o("div", da, [
                  b[20] || (b[20] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", ca, [
                    e("div", ua, [
                      e("span", ma, a(v.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : r("", !0),
                (D = t.status.git_changes) != null && D.has_other_changes ? (s(), o("div", va, [...b[21] || (b[21] = [
                  e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "OTHER CHANGES")
                  ], -1),
                  e("div", { class: "change-list" }, [
                    e("div", { class: "change-item" }, [
                      e("span", { class: "node-name" }, "Configuration or other files modified")
                    ])
                  ], -1)
                ])])) : r("", !0)
              ])) : r("", !0),
              (O = t.status.comparison) != null && O.is_synced ? r("", !0) : (s(), o("div", fa, [
                e("div", pa, [
                  w(vt, { level: "4" }, {
                    default: l(() => [...b[22] || (b[22] = [
                      g("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: b[3] || (b[3] = (Z) => _.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                b[26] || (b[26] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (te = (ie = t.status.comparison) == null ? void 0 : ie.missing_nodes) != null && te.length ? (s(), o("div", ga, [
                  w(Ve, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", ha, [
                    (s(!0), o(W, null, ne(t.status.comparison.missing_nodes.slice(0, 10), (Z) => (s(), o("div", {
                      key: Z,
                      class: "drift-list-item"
                    }, " - " + a(Z), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (s(), o("div", ya, " ... and " + a(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : r("", !0)
                  ])
                ])) : r("", !0),
                (re = (J = t.status.comparison) == null ? void 0 : J.extra_nodes) != null && re.length ? (s(), o("div", wa, [
                  w(Ve, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", ka, [
                    (s(!0), o(W, null, ne(t.status.comparison.extra_nodes.slice(0, 10), (Z) => (s(), o("div", {
                      key: Z,
                      class: "drift-list-item"
                    }, " - " + a(Z), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (s(), o("div", ba, " ... and " + a(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : r("", !0)
                  ])
                ])) : r("", !0),
                (z = (X = t.status.comparison) == null ? void 0 : X.version_mismatches) != null && z.length ? (s(), o("div", _a, [
                  w(Ve, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  e("div", $a, [
                    (s(!0), o(W, null, ne(t.status.comparison.version_mismatches.slice(0, 10), (Z) => (s(), o("div", {
                      key: Z.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      g(a(Z.name) + ": ", 1),
                      e("span", Ca, a(Z.actual), 1),
                      b[23] || (b[23] = g(" → ", -1)),
                      e("span", xa, a(Z.expected), 1)
                    ]))), 128)),
                    t.status.comparison.version_mismatches.length > 10 ? (s(), o("div", Sa, " ... and " + a(t.status.comparison.version_mismatches.length - 10) + " more ", 1)) : r("", !0)
                  ])
                ])) : r("", !0),
                ((L = t.status.comparison) == null ? void 0 : L.packages_in_sync) === !1 ? (s(), o("div", Ia, [
                  w(Ve, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : r("", !0),
                e("div", Ea, [
                  w(se, {
                    variant: "warning",
                    loading: t.isRepairing,
                    onClick: b[4] || (b[4] = (Z) => _.$emit("repair"))
                  }, {
                    default: l(() => [...b[24] || (b[24] = [
                      g(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  b[25] || (b[25] = e("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (de = (S = t.status.comparison) == null ? void 0 : S.disabled_nodes) != null && de.length ? (s(), o("div", Pa, [
                w(vt, { level: "4" }, {
                  default: l(() => [...b[27] || (b[27] = [
                    g("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", Ma, [
                  b[28] || (b[28] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, a(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", Ra, [
                  (s(!0), o(W, null, ne(t.status.comparison.disabled_nodes.slice(0, 10), (Z) => (s(), o("div", {
                    key: Z,
                    class: "drift-list-item"
                  }, " • " + a(Z), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (s(), o("div", Ta, " ... and " + a(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : r("", !0)
                ])
              ])) : r("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (s(), o("div", Da, [
                w(vt, { level: "4" }, {
                  default: l(() => [...b[29] || (b[29] = [
                    g("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", La, [
                  b[30] || (b[30] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, a(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                b[31] || (b[31] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : r("", !0),
              d.value ? (s(), o("div", za, [...b[32] || (b[32] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : r("", !0)
            ]),
            e("div", Ua, [
              w(se, {
                variant: "secondary",
                onClick: b[5] || (b[5] = (Z) => _.$emit("close"))
              }, {
                default: l(() => [...b[33] || (b[33] = [
                  g(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : r("", !0)
      ]);
    };
  }
}), Oa = /* @__PURE__ */ ae(Na, [["__scopeId", "data-v-e2b37122"]]), Aa = { class: "health-section-header" }, Ba = { class: "suggestions-content" }, Fa = { class: "suggestions-text" }, Va = { style: { "margin-top": "var(--cg-space-3)" } }, Wa = {
  key: 1,
  class: "no-issues-text"
}, Ga = /* @__PURE__ */ oe({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models", "repair-environment", "start-setup", "view-environments", "create-environment"],
  setup(t, { expose: c, emit: n }) {
    const i = t, f = h(!1), p = h(!1);
    function u() {
      f.value = !0;
    }
    function m() {
      f.value = !1, v("view-workflows");
    }
    function d() {
      f.value = !1, v("view-nodes");
    }
    const v = n, y = h(!1), k = h(!1);
    function _() {
      k.value = !0, v("repair-environment");
    }
    function b() {
      k.value = !1;
    }
    function T() {
      f.value = !1;
    }
    const P = U(() => {
      const X = i.status.workflows.analyzed || [], z = X.filter(
        (L) => L.unresolved_models_count > 0 || L.ambiguous_models_count > 0
      );
      return z.length === 0 && i.status.missing_models_count > 0 ? X.filter((L) => L.sync_state === "synced") : z;
    });
    function $() {
      const X = P.value;
      X.length !== 0 && (y.value = !0, v("repair-missing-models", X.map((z) => z.name)));
    }
    function C() {
      y.value = !1;
    }
    c({ resetRepairingState: C, resetRepairingEnvironmentState: b, closeDetailModal: T });
    const B = U(() => i.status.workflows.new.length > 0 || i.status.workflows.modified.length > 0 || i.status.workflows.deleted.length > 0), x = U(() => i.status.has_changes), R = U(() => {
      const X = i.status.git_changes;
      return X.nodes_added.length > 0 || X.nodes_removed.length > 0 || X.workflow_changes;
    }), q = U(() => i.status.has_changes || B.value), A = U(() => Object.keys(i.status.git_changes.workflow_changes_detail).length), G = U(() => i.status.git_changes.has_other_changes), I = U(() => {
      var X;
      return ((X = i.status.workflows.analyzed) == null ? void 0 : X.filter((z) => z.status === "broken")) || [];
    }), D = U(() => {
      var X;
      return ((X = i.status.workflows.analyzed) == null ? void 0 : X.filter(
        (z) => z.has_path_sync_issues && !z.has_issues
      )) || [];
    }), O = U(() => I.value.length > 0), ie = U(() => O.value || D.value.length > 0 || i.status.missing_models_count > 0 || !i.status.comparison.is_synced || i.status.has_legacy_manager), te = U(() => {
      const X = [];
      return i.status.workflows.new.length > 0 && X.push(`${i.status.workflows.new.length} new`), i.status.workflows.modified.length > 0 && X.push(`${i.status.workflows.modified.length} modified`), i.status.workflows.deleted.length > 0 && X.push(`${i.status.workflows.deleted.length} deleted`), X.length > 0 ? `${X.join(", ")} workflow${X.length === 1 && !X[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), J = U(() => {
      var L, S;
      const X = [], z = i.status.comparison;
      return (L = z.missing_nodes) != null && L.length && X.push(`${z.missing_nodes.length} missing node${z.missing_nodes.length === 1 ? "" : "s"}`), (S = z.extra_nodes) != null && S.length && X.push(`${z.extra_nodes.length} untracked node${z.extra_nodes.length === 1 ? "" : "s"}`), X.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${X.join(" and ")}.`;
    }), re = U(() => {
      var L, S;
      const X = [], z = i.status.comparison;
      return (L = z.extra_nodes) != null && L.length && (z.extra_nodes.slice(0, 3).forEach((de) => {
        X.push(`Untracked: ${de}`);
      }), z.extra_nodes.length > 3 && X.push(`...and ${z.extra_nodes.length - 3} more untracked`)), (S = z.missing_nodes) != null && S.length && (z.missing_nodes.slice(0, 3).forEach((de) => {
        X.push(`Missing: ${de}`);
      }), z.missing_nodes.length > 3 && X.push(`...and ${z.missing_nodes.length - 3} more missing`)), X;
    });
    return (X, z) => (s(), o(W, null, [
      w(tt, null, {
        header: l(() => [
          w(st, { title: "STATUS" })
        ]),
        content: l(() => [
          i.setupState === "no_workspace" ? (s(), M(pt, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: l(() => [
              w(se, {
                variant: "primary",
                size: "sm",
                onClick: z[0] || (z[0] = (L) => X.$emit("start-setup"))
              }, {
                default: l(() => [...z[13] || (z[13] = [
                  g(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : i.setupState === "unmanaged" ? (s(), M(pt, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: l(() => [
              w(se, {
                variant: "primary",
                size: "sm",
                onClick: z[1] || (z[1] = (L) => X.$emit("view-environments"))
              }, {
                default: l(() => [...z[14] || (z[14] = [
                  g(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : i.setupState === "empty_workspace" ? (s(), M(pt, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: l(() => [
              w(se, {
                variant: "primary",
                size: "sm",
                onClick: z[2] || (z[2] = (L) => X.$emit("create-environment"))
              }, {
                default: l(() => [...z[15] || (z[15] = [
                  g(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : r("", !0),
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: z[4] || (z[4] = (L) => p.value = !0),
            onMouseleave: z[5] || (z[5] = (L) => p.value = !1)
          }, [
            e("div", Aa, [
              w(vt, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: l(() => [...z[16] || (z[16] = [
                  g(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              w(co, { name: "fade" }, {
                default: l(() => [
                  p.value ? (s(), M(se, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: u
                  }, {
                    default: l(() => [...z[17] || (z[17] = [
                      g(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : r("", !0)
                ]),
                _: 1
              })
            ]),
            w(Vo, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, Nt({
              left: l(() => [
                t.status.workflows.new.length ? (s(), M(bt, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : r("", !0),
                t.status.workflows.modified.length ? (s(), M(bt, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : r("", !0),
                t.status.workflows.deleted.length ? (s(), M(bt, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : r("", !0),
                w(bt, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: B.value
                }, null, 8, ["count", "separator"])
              ]),
              right: l(() => [
                t.status.git_changes.nodes_added.length ? (s(), M(bt, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : r("", !0),
                t.status.git_changes.nodes_removed.length ? (s(), M(bt, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : r("", !0),
                t.status.git_changes.workflow_changes ? (s(), M(bt, {
                  key: 2,
                  icon: "●",
                  count: A.value,
                  label: A.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : r("", !0),
                G.value ? (s(), M(bt, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : r("", !0),
                x.value && !R.value && !G.value ? (s(), M(bt, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : r("", !0),
                x.value ? r("", !0) : (s(), M(bt, {
                  key: 5,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 2
            }, [
              q.value ? {
                name: "footer",
                fn: l(() => [
                  z[19] || (z[19] = e("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  e("div", Ba, [
                    e("span", Fa, a(te.value), 1),
                    w(se, {
                      variant: "primary",
                      size: "sm",
                      onClick: z[3] || (z[3] = (L) => X.$emit("commit-changes"))
                    }, {
                      default: l(() => [...z[18] || (z[18] = [
                        g(" Commit ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ]),
                key: "0"
              } : void 0
            ]), 1024)
          ], 32),
          t.status.is_detached_head ? (s(), M(pt, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: l(() => [
              w(se, {
                variant: "primary",
                size: "sm",
                onClick: z[6] || (z[6] = (L) => X.$emit("create-branch"))
              }, {
                default: l(() => [...z[20] || (z[20] = [
                  g(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : r("", !0),
          e("div", Va, [
            w(vt, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: l(() => [...z[21] || (z[21] = [
                g(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            ie.value ? (s(), o(W, { key: 0 }, [
              I.value.length > 0 ? (s(), M(pt, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${I.value.length} workflow${I.value.length === 1 ? "" : "s"} can't run`,
                description: "These workflows have missing dependencies that must be resolved before they can run.",
                items: I.value.map((L) => `${L.name} — ${L.issue_summary}`)
              }, {
                actions: l(() => [
                  w(se, {
                    variant: "primary",
                    size: "sm",
                    onClick: z[7] || (z[7] = (L) => X.$emit("view-workflows"))
                  }, {
                    default: l(() => [...z[22] || (z[22] = [
                      g(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : r("", !0),
              D.value.length > 0 ? (s(), M(pt, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${D.value.length} workflow${D.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: D.value.map((L) => `${L.name} — ${L.models_needing_path_sync_count} model path${L.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: l(() => [
                  w(se, {
                    variant: "primary",
                    size: "sm",
                    onClick: z[8] || (z[8] = (L) => X.$emit("view-workflows"))
                  }, {
                    default: l(() => [...z[23] || (z[23] = [
                      g(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : r("", !0),
              t.status.missing_models_count > 0 && !O.value ? (s(), M(pt, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: l(() => [
                  w(se, {
                    variant: "primary",
                    size: "sm",
                    disabled: y.value,
                    onClick: $
                  }, {
                    default: l(() => [
                      g(a(y.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  w(se, {
                    variant: "secondary",
                    size: "sm",
                    onClick: z[9] || (z[9] = (L) => X.$emit("view-workflows"))
                  }, {
                    default: l(() => [...z[24] || (z[24] = [
                      g(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : r("", !0),
              t.status.comparison.is_synced ? r("", !0) : (s(), M(pt, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: J.value,
                items: re.value
              }, {
                actions: l(() => [
                  w(se, {
                    variant: "secondary",
                    size: "sm",
                    onClick: u
                  }, {
                    default: l(() => [...z[25] || (z[25] = [
                      g(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  w(se, {
                    variant: "primary",
                    size: "sm",
                    onClick: z[10] || (z[10] = (L) => X.$emit("view-nodes"))
                  }, {
                    default: l(() => [...z[26] || (z[26] = [
                      g(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              t.status.has_legacy_manager ? (s(), M(pt, {
                key: 4,
                severity: "warning",
                icon: "⚠",
                title: "Legacy ComfyUI-Manager detected",
                description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
              }, {
                actions: l(() => [
                  w(se, {
                    variant: "primary",
                    size: "sm",
                    onClick: z[11] || (z[11] = (L) => X.$emit("view-nodes"))
                  }, {
                    default: l(() => [...z[27] || (z[27] = [
                      g(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : r("", !0)
            ], 64)) : q.value ? (s(), o("span", Wa, "No issues")) : (s(), M(yt, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      w(Oa, {
        show: f.value,
        status: t.status,
        "is-repairing": k.value,
        onClose: z[12] || (z[12] = (L) => f.value = !1),
        onNavigateWorkflows: m,
        onNavigateNodes: d,
        onRepair: _
      }, null, 8, ["show", "status", "is-repairing"])
    ], 64));
  }
}), ja = /* @__PURE__ */ ae(Ga, [["__scopeId", "data-v-55fcd77f"]]), Ha = ["type", "value", "placeholder", "disabled"], Ka = /* @__PURE__ */ oe({
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
    const i = t, f = n, p = h(null);
    function u(m) {
      const d = m.target.value;
      f("update:modelValue", d);
    }
    return We(() => {
      i.autoFocus && p.value && p.value.focus();
    }), c({
      focus: () => {
        var m;
        return (m = p.value) == null ? void 0 : m.focus();
      },
      blur: () => {
        var m;
        return (m = p.value) == null ? void 0 : m.blur();
      }
    }), (m, d) => (s(), o("input", {
      ref_key: "inputRef",
      ref: p,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: fe(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: u,
      onKeyup: [
        d[0] || (d[0] = $t((v) => m.$emit("enter"), ["enter"])),
        d[1] || (d[1] = $t((v) => m.$emit("escape"), ["escape"]))
      ],
      onFocus: d[2] || (d[2] = (v) => m.$emit("focus")),
      onBlur: d[3] || (d[3] = (v) => m.$emit("blur"))
    }, null, 42, Ha));
  }
}), rs = /* @__PURE__ */ ae(Ka, [["__scopeId", "data-v-0380d08f"]]), qa = { class: "branch-create-form" }, Ya = { class: "form-actions" }, Ja = /* @__PURE__ */ oe({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: c }) {
    const n = c, i = h(""), f = U(() => {
      const m = i.value.trim();
      return m.length > 0 && !m.startsWith("-") && !m.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(m);
    });
    function p() {
      f.value && (n("create", i.value.trim()), i.value = "");
    }
    function u() {
      i.value = "", n("cancel");
    }
    return (m, d) => (s(), o("div", qa, [
      w(rs, {
        modelValue: i.value,
        "onUpdate:modelValue": d[0] || (d[0] = (v) => i.value = v),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: p,
        onEscape: u
      }, null, 8, ["modelValue"]),
      e("div", Ya, [
        w(se, {
          variant: "primary",
          size: "sm",
          disabled: !f.value,
          onClick: p
        }, {
          default: l(() => [...d[1] || (d[1] = [
            g(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        w(se, {
          variant: "secondary",
          size: "sm",
          onClick: u
        }, {
          default: l(() => [...d[2] || (d[2] = [
            g(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Xa = /* @__PURE__ */ ae(Ja, [["__scopeId", "data-v-7c500394"]]), Qa = { class: "branch-list-item__indicator" }, Za = { class: "branch-list-item__name" }, el = {
  key: 0,
  class: "branch-list-item__actions"
}, tl = {
  key: 0,
  class: "branch-list-item__current-label"
}, sl = /* @__PURE__ */ oe({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t) {
    return (c, n) => (s(), o("div", {
      class: fe(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (i) => t.clickable && c.$emit("click"))
    }, [
      e("span", Qa, a(t.isCurrent ? "●" : "○"), 1),
      e("span", Za, a(t.branchName), 1),
      c.$slots.actions || t.showCurrentLabel ? (s(), o("div", el, [
        Me(c.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (s(), o("span", tl, " current ")) : r("", !0)
      ])) : r("", !0)
    ], 2));
  }
}), ol = /* @__PURE__ */ ae(sl, [["__scopeId", "data-v-c6581a24"]]), nl = {
  key: 2,
  class: "branch-list"
}, al = /* @__PURE__ */ oe({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create", "delete"],
  setup(t, { emit: c }) {
    const n = c, i = h(!1);
    function f(u) {
      n("create", u), p();
    }
    function p() {
      i.value = !1;
    }
    return (u, m) => (s(), M(tt, null, {
      header: l(() => [
        w(st, { title: "BRANCHES" }, {
          actions: l(() => [
            i.value ? r("", !0) : (s(), M(se, {
              key: 0,
              variant: "primary",
              size: "sm",
              onClick: m[0] || (m[0] = (d) => i.value = !0)
            }, {
              default: l(() => [...m[1] || (m[1] = [
                g(" + Create Branch ", -1)
              ])]),
              _: 1
            }))
          ]),
          _: 1
        })
      ]),
      content: l(() => [
        i.value ? (s(), M(Xa, {
          key: 0,
          onCreate: f,
          onCancel: p
        })) : r("", !0),
        t.branches.length === 0 ? (s(), M(yt, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (s(), o("div", nl, [
          (s(!0), o(W, null, ne(t.branches, (d) => (s(), M(ol, {
            key: d.name,
            "branch-name": d.name,
            "is-current": d.is_current
          }, {
            actions: l(() => [
              d.is_current ? r("", !0) : (s(), M(se, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: (v) => u.$emit("delete", d.name)
              }, {
                default: l(() => [...m[2] || (m[2] = [
                  g(" Delete ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])),
              d.is_current ? r("", !0) : (s(), M(se, {
                key: 1,
                variant: "secondary",
                size: "xs",
                onClick: (v) => u.$emit("switch", d.name)
              }, {
                default: l(() => [...m[3] || (m[3] = [
                  g(" Switch ", -1)
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
}), ll = /* @__PURE__ */ ae(al, [["__scopeId", "data-v-86784ddd"]]), il = { class: "commit-list" }, rl = /* @__PURE__ */ oe({
  __name: "CommitList",
  setup(t) {
    return (c, n) => (s(), o("div", il, [
      Me(c.$slots, "default", {}, void 0, !0)
    ]));
  }
}), dl = /* @__PURE__ */ ae(rl, [["__scopeId", "data-v-8c5ee761"]]), cl = { class: "commit-hash" }, ul = /* @__PURE__ */ oe({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const c = t, n = U(() => c.hash.slice(0, c.length));
    return (i, f) => (s(), o("span", cl, a(n.value), 1));
  }
}), Ws = /* @__PURE__ */ ae(ul, [["__scopeId", "data-v-7c333cc6"]]), ml = { class: "commit-message" }, vl = { class: "commit-date" }, fl = /* @__PURE__ */ oe({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t, { emit: c }) {
    const n = t, i = c;
    function f() {
      n.clickable && i("click");
    }
    return (p, u) => (s(), o("div", {
      class: fe(["commit-item", { clickable: t.clickable }]),
      onClick: f
    }, [
      w(Ws, { hash: t.hash }, null, 8, ["hash"]),
      e("span", ml, a(t.message), 1),
      e("span", vl, a(t.relativeDate), 1),
      p.$slots.actions ? (s(), o("div", {
        key: 0,
        class: "commit-actions",
        onClick: u[0] || (u[0] = Be(() => {
        }, ["stop"]))
      }, [
        Me(p.$slots, "actions", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), pl = /* @__PURE__ */ ae(fl, [["__scopeId", "data-v-dd7c621b"]]), gl = /* @__PURE__ */ oe({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (c, n) => (s(), M(tt, null, {
      header: l(() => [
        w(st, { title: "HISTORY" })
      ]),
      content: l(() => [
        t.commits.length === 0 ? (s(), M(yt, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (s(), M(dl, { key: 1 }, {
          default: l(() => [
            (s(!0), o(W, null, ne(t.commits, (i) => (s(), M(pl, {
              key: i.hash,
              hash: i.short_hash || i.hash,
              message: i.message,
              "relative-date": i.date_relative || i.relative_date,
              onClick: (f) => c.$emit("select", i)
            }, {
              actions: l(() => [
                w(se, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (f) => c.$emit("checkout", i),
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
}), hl = /* @__PURE__ */ ae(gl, [["__scopeId", "data-v-981c3c64"]]), W$ = us({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const G$ = [
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
], j$ = {
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
}, yl = [
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
], H$ = [
  ...yl,
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
function Yt() {
  return !1;
}
function He() {
  const t = h(!1), c = h(null);
  async function n(j, ue) {
    var Fe;
    if (!((Fe = window.app) != null && Fe.api))
      throw new Error("ComfyUI API not available");
    const Ce = await window.app.api.fetchApi(j, ue);
    if (!Ce.ok) {
      const ut = await Ce.json().catch(() => ({}));
      throw new Error(ut.error || ut.message || `Request failed: ${Ce.status}`);
    }
    return Ce.json();
  }
  async function i(j = !1) {
    return n(j ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function f(j, ue = !1) {
    return n("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: j, allow_issues: ue })
    });
  }
  async function p(j = 10, ue = 0) {
    return n(`/v2/comfygit/log?limit=${j}&offset=${ue}`);
  }
  async function u(j) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: j })
    });
  }
  async function m() {
    return n("/v2/comfygit/export/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function d(j) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: j, force: !0 })
    });
  }
  async function v() {
    return n("/v2/comfygit/branches");
  }
  async function y(j) {
    return n(`/v2/comfygit/commit/${j}`);
  }
  async function k(j, ue = !1) {
    return n("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: j, force: ue })
    });
  }
  async function _(j, ue = "HEAD") {
    return n("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: j, start_point: ue })
    });
  }
  async function b(j, ue = !1) {
    return n("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: j, force: ue })
    });
  }
  async function T(j, ue = !1) {
    return n(`/v2/comfygit/branch/${encodeURIComponent(j)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: ue })
    });
  }
  async function P() {
    try {
      return (await n("/v2/comfygit/environments")).environments;
    } catch {
      try {
        const j = await i();
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
  async function $(j, ue) {
    const Ce = { target_env: j };
    return ue && (Ce.workspace_path = ue), n("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Ce)
    });
  }
  async function C() {
    try {
      return n("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function B(j) {
    return n("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(j)
    });
  }
  async function x() {
    return n("/v2/workspace/environments/create_status");
  }
  async function R(j = 20) {
    return n(`/v2/workspace/comfyui_releases?limit=${j}`);
  }
  async function q(j) {
    return n(`/v2/workspace/environments/${j}`, {
      method: "DELETE"
    });
  }
  async function A(j = !1) {
    try {
      return n(j ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const ue = await i(j), Ce = [];
      return ue.workflows.new.forEach((Fe) => {
        Ce.push({ name: Fe, status: "new", missing_nodes: 0, missing_models: 0, path: Fe });
      }), ue.workflows.modified.forEach((Fe) => {
        Ce.push({ name: Fe, status: "modified", missing_nodes: 0, missing_models: 0, path: Fe });
      }), ue.workflows.synced.forEach((Fe) => {
        Ce.push({ name: Fe, status: "synced", missing_nodes: 0, missing_models: 0, path: Fe });
      }), Ce;
    }
  }
  async function G(j) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(j)}/details`);
  }
  async function I(j) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(j)}/resolve`, {
      method: "POST"
    });
  }
  async function D(j, ue, Ce) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(j)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: ue, install_models: Ce })
    });
  }
  async function O(j, ue, Ce) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(j)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: ue, importance: Ce })
    });
  }
  async function ie() {
    try {
      return n("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function te() {
    try {
      return n("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function J(j) {
    return n(`/v2/workspace/models/details/${encodeURIComponent(j)}`);
  }
  async function re(j) {
    return n("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: j })
    });
  }
  async function X(j, ue) {
    return n(`/v2/workspace/models/${j}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ue })
    });
  }
  async function z(j, ue) {
    return n(`/v2/workspace/models/${j}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ue })
    });
  }
  async function L(j) {
    return n(`/v2/workspace/models/${j}`, {
      method: "DELETE"
    });
  }
  async function S(j) {
    return n("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(j)
    });
  }
  async function de() {
    return n("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function Z() {
    return n("/v2/workspace/models/directory");
  }
  async function be(j) {
    return n("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: j })
    });
  }
  async function xe(j) {
    try {
      const ue = j ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(j)}` : "/v2/comfygit/config";
      return n(ue);
    } catch {
      return {
        workspace_path: "~/comfygit",
        models_path: "~/comfygit/models",
        auto_sync_models: !0,
        confirm_destructive: !0,
        comfyui_extra_args: []
      };
    }
  }
  async function Ie(j, ue) {
    const Ce = ue ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(ue)}` : "/v2/comfygit/config";
    return n(Ce, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(j)
    });
  }
  async function Oe(j, ue) {
    try {
      const Ce = new URLSearchParams();
      return j && Ce.append("level", j), ue && Ce.append("lines", ue.toString()), n(`/v2/comfygit/debug/logs?${Ce}`);
    } catch {
      return [];
    }
  }
  async function me(j, ue) {
    try {
      const Ce = new URLSearchParams();
      return j && Ce.append("level", j), ue && Ce.append("lines", ue.toString()), n(`/v2/workspace/debug/logs?${Ce}`);
    } catch {
      return [];
    }
  }
  async function he() {
    return n("/v2/comfygit/debug/logs/path");
  }
  async function we() {
    return n("/v2/workspace/debug/logs/path");
  }
  async function Q(j) {
    return n("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: j })
    });
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
  async function ke(j) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(j)}/track-dev`, {
      method: "POST"
    });
  }
  async function Ue(j) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(j)}/install`, {
      method: "POST"
    });
  }
  async function nt(j) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(j)}/update`, {
      method: "POST"
    });
  }
  async function Je(j) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(j)}`, {
      method: "DELETE"
    });
  }
  async function Pe() {
    try {
      return n("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function at(j, ue) {
    return n("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: j, url: ue })
    });
  }
  async function Ze(j) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(j)}`, {
      method: "DELETE"
    });
  }
  async function Ke(j, ue, Ce) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(j)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: ue, push_url: Ce })
    });
  }
  async function dt(j) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(j)}/fetch`, {
      method: "POST"
    });
  }
  async function $e(j) {
    try {
      return n(`/v2/comfygit/remotes/${encodeURIComponent(j)}/status`);
    } catch {
      return null;
    }
  }
  async function Ae(j = "skip", ue = !0) {
    return n("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: j,
        remove_extra_nodes: ue
      })
    });
  }
  async function lt(j, ue) {
    const Ce = ue ? `/v2/comfygit/remotes/${encodeURIComponent(j)}/pull-preview?branch=${encodeURIComponent(ue)}` : `/v2/comfygit/remotes/${encodeURIComponent(j)}/pull-preview`;
    return n(Ce);
  }
  async function it(j, ue = {}) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(j)}/pull`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: ue.modelStrategy || "skip",
        force: ue.force || !1,
        resolutions: ue.resolutions
      })
    });
  }
  async function Le(j, ue) {
    const Ce = ue ? `/v2/comfygit/remotes/${encodeURIComponent(j)}/push-preview?branch=${encodeURIComponent(ue)}` : `/v2/comfygit/remotes/${encodeURIComponent(j)}/push-preview`;
    return n(Ce);
  }
  async function ve(j, ue = {}) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(j)}/push`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: ue.force || !1 })
    });
  }
  async function K(j, ue) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(j)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: ue })
    });
  }
  async function Y(j) {
    const ue = {
      success: 0,
      failed: []
    };
    for (const Ce of j)
      try {
        await I(Ce), ue.success++;
      } catch (Fe) {
        ue.failed.push({
          name: Ce,
          error: Fe instanceof Error ? Fe.message : "Unknown error"
        });
      }
    return ue;
  }
  async function E(j) {
    var Fe;
    const ue = new FormData();
    if (ue.append("file", j), !((Fe = window.app) != null && Fe.api))
      throw new Error("ComfyUI API not available");
    const Ce = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: ue
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!Ce.ok) {
      const ut = await Ce.json().catch(() => ({}));
      throw new Error(ut.error || `Preview failed: ${Ce.status}`);
    }
    return Ce.json();
  }
  async function F(j) {
    return n(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(j)}`
    );
  }
  async function ee(j, ue, Ce, Fe) {
    var H;
    const ut = new FormData();
    if (ut.append("file", j), ut.append("name", ue), ut.append("model_strategy", Ce), ut.append("torch_backend", Fe), !((H = window.app) != null && H.api))
      throw new Error("ComfyUI API not available");
    const zt = await window.app.api.fetchApi("/v2/workspace/import", {
      method: "POST",
      body: ut
    });
    if (!zt.ok) {
      const N = await zt.json().catch(() => ({}));
      throw new Error(N.message || N.error || `Import failed: ${zt.status}`);
    }
    return zt.json();
  }
  async function _e() {
    return n("/v2/workspace/import/status");
  }
  async function Ge(j) {
    return n("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: j })
    });
  }
  async function ce(j, ue, Ce, Fe) {
    return n("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: j,
        name: ue,
        model_strategy: Ce,
        torch_backend: Fe
      })
    });
  }
  async function V() {
    return n("/v2/setup/status");
  }
  async function ze(j) {
    return n("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(j)
    });
  }
  async function qe() {
    return n("/v2/setup/initialize_status");
  }
  async function ct(j) {
    return n("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(j)
    });
  }
  async function xt() {
    return n("/v2/comfygit/deploy/summary");
  }
  async function Xe() {
    return n("/v2/comfygit/deploy/runpod/data-centers");
  }
  async function Ot(j, ue) {
    return n("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: j, save_key: ue })
    });
  }
  async function pe() {
    return n("/v2/comfygit/deploy/runpod/volumes");
  }
  async function ft(j) {
    const ue = j ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(j)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return n(ue);
  }
  async function kt(j) {
    return n("/v2/comfygit/deploy/runpod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(j)
    });
  }
  async function At() {
    return n("/v2/comfygit/deploy/runpod/pods");
  }
  async function Bt(j) {
    return n(`/v2/comfygit/deploy/runpod/${encodeURIComponent(j)}`, {
      method: "DELETE"
    });
  }
  async function Lt(j) {
    return n(`/v2/comfygit/deploy/runpod/${encodeURIComponent(j)}/status`);
  }
  async function Ft(j) {
    return n("/v2/comfygit/deploy/package", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: j })
    });
  }
  async function Vt() {
    return n("/v2/comfygit/deploy/runpod/key");
  }
  async function Wt() {
    return n("/v2/comfygit/deploy/runpod/key", {
      method: "DELETE"
    });
  }
  return {
    isLoading: t,
    error: c,
    getStatus: i,
    commit: f,
    getHistory: p,
    exportEnv: u,
    validateExport: m,
    exportEnvWithForce: d,
    // Git Operations
    getBranches: v,
    getCommitDetail: y,
    checkout: k,
    createBranch: _,
    switchBranch: b,
    deleteBranch: T,
    // Environment Management
    getEnvironments: P,
    switchEnvironment: $,
    getSwitchProgress: C,
    createEnvironment: B,
    getCreateProgress: x,
    getComfyUIReleases: R,
    deleteEnvironment: q,
    // Workflow Management
    getWorkflows: A,
    getWorkflowDetails: G,
    resolveWorkflow: I,
    installWorkflowDeps: D,
    setModelImportance: O,
    // Model Management
    getEnvironmentModels: ie,
    getWorkspaceModels: te,
    getModelDetails: J,
    openFileLocation: re,
    addModelSource: X,
    removeModelSource: z,
    deleteModel: L,
    downloadModel: S,
    scanWorkspaceModels: de,
    getModelsDirectory: Z,
    setModelsDirectory: be,
    // Settings
    getConfig: xe,
    updateConfig: Ie,
    // Debug/Logs
    getEnvironmentLogs: Oe,
    getWorkspaceLogs: me,
    getEnvironmentLogPath: he,
    getWorkspaceLogPath: we,
    openFile: Q,
    // Node Management
    getNodes: le,
    trackNodeAsDev: ke,
    installNode: Ue,
    updateNode: nt,
    uninstallNode: Je,
    // Git Remotes
    getRemotes: Pe,
    addRemote: at,
    removeRemote: Ze,
    updateRemoteUrl: Ke,
    fetchRemote: dt,
    getRemoteSyncStatus: $e,
    // Push/Pull
    getPullPreview: lt,
    pullFromRemote: it,
    getPushPreview: Le,
    pushToRemote: ve,
    validateMerge: K,
    // Environment Sync
    syncEnvironmentManually: Ae,
    // Workflow Repair
    repairWorkflowModels: Y,
    // Import Operations
    previewTarballImport: E,
    previewGitImport: Ge,
    validateEnvironmentName: F,
    executeImport: ee,
    executeGitImport: ce,
    getImportProgress: _e,
    // First-Time Setup
    getSetupStatus: V,
    initializeWorkspace: ze,
    getInitializeProgress: qe,
    validatePath: ct,
    // Deploy Operations
    getDeploySummary: xt,
    getDataCenters: Xe,
    testRunPodConnection: Ot,
    getNetworkVolumes: pe,
    getRunPodGpuTypes: ft,
    deployToRunPod: kt,
    getRunPodPods: At,
    terminateRunPodPod: Bt,
    getDeploymentStatus: Lt,
    exportDeployPackage: Ft,
    getStoredRunPodKey: Vt,
    clearRunPodKey: Wt
  };
}
async function Jt(t, c = {}, n = 5e3) {
  const i = new AbortController(), f = setTimeout(() => i.abort(), n);
  try {
    const p = await fetch(t, {
      ...c,
      signal: i.signal
    });
    return clearTimeout(f), p;
  } catch (p) {
    throw clearTimeout(f), p.name === "AbortError" ? new Error(`Request timeout after ${n}ms`) : p;
  }
}
function Gs() {
  const t = h(null);
  async function c() {
    try {
      const u = await Jt(
        "http://127.0.0.1:8188/api/v2/comfygit/orchestrator_port",
        {},
        5e3
      );
      if (u.ok)
        return (await u.json()).port;
    } catch {
    }
    return 8189;
  }
  async function n() {
    if (t.value || (t.value = await c()), !t.value)
      return null;
    try {
      const u = await Jt(
        `http://127.0.0.1:${t.value}/health`,
        {},
        5e3
      );
      if (!u.ok) throw new Error("Health check failed");
      return await u.json();
    } catch {
      return t.value = await c(), null;
    }
  }
  async function i() {
    if (t.value || (t.value = await c()), !t.value)
      return null;
    try {
      const u = await Jt(
        `http://127.0.0.1:${t.value}/status`,
        {},
        5e3
      );
      if (!u.ok) throw new Error("Failed to get status");
      return await u.json();
    } catch {
      return null;
    }
  }
  async function f() {
    if (t.value || (t.value = await c()), !t.value)
      throw new Error("Control port not available");
    if (!(await Jt(
      `http://127.0.0.1:${t.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function p() {
    if (t.value || (t.value = await c()), !t.value)
      throw new Error("Control port not available");
    if (!(await Jt(
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
    getStatus: i,
    restart: f,
    kill: p
  };
}
const wl = { class: "base-modal-header" }, kl = {
  key: 0,
  class: "base-modal-title"
}, bl = { class: "base-modal-body" }, _l = {
  key: 0,
  class: "base-modal-loading"
}, $l = {
  key: 1,
  class: "base-modal-error"
}, Cl = {
  key: 0,
  class: "base-modal-footer"
}, xl = /* @__PURE__ */ oe({
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
    const n = t, i = c;
    function f() {
      n.closeOnOverlayClick && i("close");
    }
    function p(u) {
      u.key === "Escape" && n.showCloseButton && i("close");
    }
    return We(() => {
      document.addEventListener("keydown", p), document.body.style.overflow = "hidden";
    }), bs(() => {
      document.removeEventListener("keydown", p), document.body.style.overflow = "";
    }), (u, m) => (s(), M(Ye, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: f
      }, [
        e("div", {
          class: fe(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: m[1] || (m[1] = Be(() => {
          }, ["stop"]))
        }, [
          e("div", wl, [
            Me(u.$slots, "header", {}, () => [
              t.title ? (s(), o("h3", kl, a(t.title), 1)) : r("", !0)
            ], !0),
            t.showCloseButton ? (s(), o("button", {
              key: 0,
              class: "base-modal-close",
              onClick: m[0] || (m[0] = (d) => u.$emit("close"))
            }, [...m[2] || (m[2] = [
              e("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])) : r("", !0)
          ]),
          e("div", bl, [
            t.loading ? (s(), o("div", _l, "Loading...")) : t.error ? (s(), o("div", $l, a(t.error), 1)) : Me(u.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          u.$slots.footer ? (s(), o("div", Cl, [
            Me(u.$slots, "footer", {}, void 0, !0)
          ])) : r("", !0)
        ], 2)
      ])
    ]));
  }
}), ot = /* @__PURE__ */ ae(xl, [["__scopeId", "data-v-8dab1081"]]), Sl = ["type", "disabled"], Il = {
  key: 0,
  class: "spinner"
}, El = /* @__PURE__ */ oe({
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
    return (c, n) => (s(), o("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: fe(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: n[0] || (n[0] = (i) => c.$emit("click", i))
    }, [
      t.loading ? (s(), o("span", Il)) : r("", !0),
      Me(c.$slots, "default", {}, void 0, !0)
    ], 10, Sl));
  }
}), ge = /* @__PURE__ */ ae(El, [["__scopeId", "data-v-f3452606"]]), Pl = {
  key: 0,
  class: "base-title-count"
}, Ml = /* @__PURE__ */ oe({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (c, n) => (s(), M(ks(`h${t.level}`), {
      class: fe(["base-title", t.variant])
    }, {
      default: l(() => [
        Me(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", Pl, "(" + a(t.count) + ")", 1)) : r("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), es = /* @__PURE__ */ ae(Ml, [["__scopeId", "data-v-5a01561d"]]), Rl = ["value", "disabled"], Tl = {
  key: 0,
  value: "",
  disabled: ""
}, Dl = ["value"], Ll = {
  key: 0,
  class: "base-select-error"
}, zl = /* @__PURE__ */ oe({
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
    function c(i) {
      return typeof i == "string" ? i : i.value;
    }
    function n(i) {
      return typeof i == "string" ? i : i.label;
    }
    return (i, f) => (s(), o("div", {
      class: fe(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: fe(["base-select", { error: !!t.error }]),
        onChange: f[0] || (f[0] = (p) => i.$emit("update:modelValue", p.target.value))
      }, [
        t.placeholder ? (s(), o("option", Tl, a(t.placeholder), 1)) : r("", !0),
        (s(!0), o(W, null, ne(t.options, (p) => (s(), o("option", {
          key: c(p),
          value: c(p)
        }, a(n(p)), 9, Dl))), 128))
      ], 42, Rl),
      t.error ? (s(), o("span", Ll, a(t.error), 1)) : r("", !0)
    ], 2));
  }
}), Ul = /* @__PURE__ */ ae(zl, [["__scopeId", "data-v-7436d745"]]), Nl = { class: "popover-header" }, Ol = { class: "popover-title" }, Al = { class: "popover-content" }, Bl = {
  key: 0,
  class: "popover-actions"
}, Fl = /* @__PURE__ */ oe({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (c, n) => (s(), M(Ye, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "popover-overlay",
        onClick: n[2] || (n[2] = (i) => c.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: Et({ maxWidth: t.maxWidth }),
          onClick: n[1] || (n[1] = Be(() => {
          }, ["stop"]))
        }, [
          e("div", Nl, [
            e("h4", Ol, a(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: n[0] || (n[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", Al, [
            Me(c.$slots, "content", {}, void 0, !0)
          ]),
          c.$slots.actions ? (s(), o("div", Bl, [
            Me(c.$slots, "actions", {}, void 0, !0)
          ])) : r("", !0)
        ], 4)
      ])) : r("", !0)
    ]));
  }
}), wt = /* @__PURE__ */ ae(Fl, [["__scopeId", "data-v-42815ace"]]), Vl = { class: "detail-section" }, Wl = {
  key: 0,
  class: "empty-message"
}, Gl = { class: "model-header" }, jl = { class: "model-name" }, Hl = { class: "model-details" }, Kl = { class: "model-row" }, ql = { class: "model-row" }, Yl = { class: "label" }, Jl = {
  key: 0,
  class: "model-row model-row-nodes"
}, Xl = { class: "node-list" }, Ql = ["onClick"], Zl = {
  key: 1,
  class: "model-row"
}, ei = { class: "value" }, ti = {
  key: 2,
  class: "model-row"
}, si = { class: "value error" }, oi = {
  key: 0,
  class: "model-actions"
}, ni = { class: "detail-section" }, ai = {
  key: 0,
  class: "empty-message"
}, li = { class: "node-name" }, ii = {
  key: 0,
  class: "node-version"
}, ri = /* @__PURE__ */ oe({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(t, { emit: c }) {
    const n = t, i = c, { getWorkflowDetails: f, setModelImportance: p, openFileLocation: u } = He(), m = h(null), d = h(!1), v = h(null), y = h(!1), k = h({}), _ = h(!1), b = h(/* @__PURE__ */ new Set()), T = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function P(I) {
      switch (I) {
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
    function $(I) {
      switch (I) {
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
    function C(I) {
      if (!I.loaded_by || I.loaded_by.length === 0) return [];
      const D = I.hash || I.filename;
      return b.value.has(D) ? I.loaded_by : I.loaded_by.slice(0, 3);
    }
    function B(I) {
      return b.value.has(I);
    }
    function x(I) {
      b.value.has(I) ? b.value.delete(I) : b.value.add(I), b.value = new Set(b.value);
    }
    async function R() {
      d.value = !0, v.value = null;
      try {
        m.value = await f(n.workflowName);
      } catch (I) {
        v.value = I instanceof Error ? I.message : "Failed to load workflow details";
      } finally {
        d.value = !1;
      }
    }
    function q(I, D) {
      k.value[I] = D, y.value = !0;
    }
    async function A(I) {
      try {
        await u(I);
      } catch (D) {
        v.value = D instanceof Error ? D.message : "Failed to open file location";
      }
    }
    async function G() {
      if (!y.value) {
        i("close");
        return;
      }
      d.value = !0, v.value = null;
      try {
        for (const [I, D] of Object.entries(k.value))
          await p(n.workflowName, I, D);
        i("refresh"), i("close");
      } catch (I) {
        v.value = I instanceof Error ? I.message : "Failed to save changes";
      } finally {
        d.value = !1;
      }
    }
    return We(R), (I, D) => (s(), o(W, null, [
      w(ot, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: d.value,
        error: v.value || void 0,
        onClose: D[4] || (D[4] = (O) => i("close"))
      }, {
        body: l(() => [
          m.value ? (s(), o(W, { key: 0 }, [
            e("section", Vl, [
              w(es, { variant: "section" }, {
                default: l(() => [
                  g("MODELS USED (" + a(m.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.models.length === 0 ? (s(), o("div", Wl, " No models used in this workflow ")) : r("", !0),
              (s(!0), o(W, null, ne(m.value.models, (O) => {
                var ie;
                return s(), o("div", {
                  key: O.hash || O.filename,
                  class: "model-card"
                }, [
                  e("div", Gl, [
                    D[6] || (D[6] = e("span", { class: "model-icon" }, "📦", -1)),
                    e("span", jl, a(O.filename), 1)
                  ]),
                  e("div", Hl, [
                    e("div", Kl, [
                      D[7] || (D[7] = e("span", { class: "label" }, "Status:", -1)),
                      e("span", {
                        class: fe(["value", P(O.status)])
                      }, a($(O.status)), 3)
                    ]),
                    e("div", ql, [
                      e("span", Yl, [
                        D[8] || (D[8] = g(" Importance: ", -1)),
                        w(Vs, {
                          size: 14,
                          title: "About importance levels",
                          onClick: D[0] || (D[0] = (te) => _.value = !0)
                        })
                      ]),
                      w(Ul, {
                        "model-value": k.value[O.filename] || O.importance,
                        options: T,
                        "onUpdate:modelValue": (te) => q(O.filename, te)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    O.loaded_by && O.loaded_by.length > 0 ? (s(), o("div", Jl, [
                      D[9] || (D[9] = e("span", { class: "label" }, "Loaded by:", -1)),
                      e("div", Xl, [
                        (s(!0), o(W, null, ne(C(O), (te, J) => (s(), o("div", {
                          key: `${te.node_id}-${J}`,
                          class: "node-reference"
                        }, a(te.node_type) + " (Node #" + a(te.node_id) + ") ", 1))), 128)),
                        O.loaded_by.length > 3 ? (s(), o("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (te) => x(O.hash || O.filename)
                        }, a(B(O.hash || O.filename) ? "▼ Show less" : `▶ View all (${O.loaded_by.length})`), 9, Ql)) : r("", !0)
                      ])
                    ])) : r("", !0),
                    O.size_mb ? (s(), o("div", Zl, [
                      D[10] || (D[10] = e("span", { class: "label" }, "Size:", -1)),
                      e("span", ei, a(O.size_mb) + " MB", 1)
                    ])) : r("", !0),
                    O.has_category_mismatch ? (s(), o("div", ti, [
                      D[13] || (D[13] = e("span", { class: "label" }, "Location issue:", -1)),
                      e("span", si, [
                        D[11] || (D[11] = g(" In ", -1)),
                        e("code", null, a(O.actual_category) + "/", 1),
                        D[12] || (D[12] = g(" but loader needs ", -1)),
                        e("code", null, a((ie = O.expected_categories) == null ? void 0 : ie[0]) + "/", 1)
                      ])
                    ])) : r("", !0)
                  ]),
                  O.status !== "available" ? (s(), o("div", oi, [
                    O.status === "downloadable" ? (s(), M(ge, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: D[1] || (D[1] = (te) => i("resolve"))
                    }, {
                      default: l(() => [...D[14] || (D[14] = [
                        g(" Download ", -1)
                      ])]),
                      _: 1
                    })) : O.status === "category_mismatch" && O.file_path ? (s(), M(ge, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (te) => A(O.file_path)
                    }, {
                      default: l(() => [...D[15] || (D[15] = [
                        g(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : O.status !== "path_mismatch" ? (s(), M(ge, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: D[2] || (D[2] = (te) => i("resolve"))
                    }, {
                      default: l(() => [...D[16] || (D[16] = [
                        g(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : r("", !0)
                  ])) : r("", !0)
                ]);
              }), 128))
            ]),
            e("section", ni, [
              w(es, { variant: "section" }, {
                default: l(() => [
                  g("NODES USED (" + a(m.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.nodes.length === 0 ? (s(), o("div", ai, " No custom nodes used in this workflow ")) : r("", !0),
              (s(!0), o(W, null, ne(m.value.nodes, (O) => (s(), o("div", {
                key: O.name,
                class: "node-item"
              }, [
                e("span", {
                  class: fe(["node-status", O.status === "installed" ? "installed" : "missing"])
                }, a(O.status === "installed" ? "✓" : "✕"), 3),
                e("span", li, a(O.name), 1),
                O.version ? (s(), o("span", ii, "v" + a(O.version), 1)) : r("", !0)
              ]))), 128))
            ])
          ], 64)) : r("", !0)
        ]),
        footer: l(() => [
          w(ge, {
            variant: "secondary",
            onClick: D[3] || (D[3] = (O) => i("close"))
          }, {
            default: l(() => [...D[17] || (D[17] = [
              g(" Close ", -1)
            ])]),
            _: 1
          }),
          y.value ? (s(), M(ge, {
            key: 0,
            variant: "primary",
            onClick: G
          }, {
            default: l(() => [...D[18] || (D[18] = [
              g(" Save Changes ", -1)
            ])]),
            _: 1
          })) : r("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      w(wt, {
        show: _.value,
        title: "Model Importance Levels",
        onClose: D[5] || (D[5] = (O) => _.value = !1)
      }, {
        content: l(() => [...D[19] || (D[19] = [
          e("ul", { class: "importance-info-list" }, [
            e("li", null, [
              e("strong", null, "Required"),
              g(" — Must have for workflow to run")
            ]),
            e("li", null, [
              e("strong", null, "Flexible"),
              g(" — Workflow adapts if missing")
            ]),
            e("li", null, [
              e("strong", null, "Optional"),
              g(" — Nice to have, can be skipped")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), di = /* @__PURE__ */ ae(ri, [["__scopeId", "data-v-668728e6"]]), Te = us({
  items: [],
  status: "idle"
});
let _t = null;
function js() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function ms(t) {
  return Te.items.find((c) => c.id === t);
}
async function jt() {
  if (Te.status === "downloading") return;
  const t = Te.items.find((c) => c.status === "queued");
  if (!t) {
    Te.status = "idle";
    return;
  }
  Te.status = "downloading", t.status = "downloading", t.progress = 0, t.downloaded = 0;
  try {
    await ci(t), t.status = "completed", t.progress = 100;
  } catch (c) {
    t.status = "failed", t.error = c instanceof Error ? c.message : "Download failed", t.retries++;
  } finally {
    Te.status = "idle", jt();
  }
}
async function ci(t) {
  return new Promise((c, n) => {
    _t && (_t.close(), _t = null);
    const i = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), f = new EventSource(`/v2/comfygit/models/download-stream?${i}`);
    _t = f;
    let p = Date.now(), u = 0, m = !1;
    f.onmessage = (d) => {
      try {
        const v = JSON.parse(d.data);
        switch (v.type) {
          case "progress":
            t.downloaded = v.downloaded || 0, t.size = v.total || t.size;
            const y = Date.now(), k = (y - p) / 1e3;
            if (k > 0.5) {
              const _ = t.downloaded - u;
              if (t.speed = _ / k, p = y, u = t.downloaded, t.speed > 0 && t.size > 0) {
                const b = t.size - t.downloaded;
                t.eta = b / t.speed;
              }
            }
            t.size > 0 && (t.progress = Math.round(t.downloaded / t.size * 100));
            break;
          case "complete":
            m = !0, f.close(), _t = null, c();
            break;
          case "error":
            m = !0, f.close(), _t = null, n(new Error(v.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, f.onerror = () => {
      f.close(), _t = null, m || n(new Error("Connection lost"));
    };
  });
}
async function ui() {
  try {
    const t = await fetch("/v2/comfygit/models/pending-downloads");
    if (!t.ok) return;
    const c = await t.json();
    if (!c.pending_downloads || c.pending_downloads.length === 0) return;
    for (const n of c.pending_downloads) {
      if (Te.items.some((f) => f.url === n.url && f.filename === n.filename))
        continue;
      const i = {
        id: js(),
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
      Te.items.push(i);
    }
    console.log(`[ComfyGit] Loaded ${c.pending_downloads.length} pending download(s)`);
  } catch (t) {
    console.warn("[ComfyGit] Failed to load pending downloads:", t);
  }
}
function os() {
  function t($) {
    for (const C of $) {
      if (Te.items.some(
        (R) => R.url === C.url && R.targetPath === C.targetPath && ["queued", "downloading", "paused", "completed"].includes(R.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${C.filename}`);
        continue;
      }
      const x = {
        id: js(),
        workflow: C.workflow,
        filename: C.filename,
        url: C.url,
        targetPath: C.targetPath,
        size: C.size || 0,
        type: C.type || "model",
        status: "queued",
        progress: 0,
        downloaded: 0,
        speed: 0,
        eta: 0,
        retries: 0
      };
      Te.items.push(x);
    }
    Te.status === "idle" && jt();
  }
  async function c($) {
    const C = ms($);
    if (C) {
      if (C.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(C.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        _t && (_t.close(), _t = null), C.status = "failed", C.error = "Cancelled by user", Te.status = "idle", jt();
      } else if (C.status === "queued") {
        const B = Te.items.findIndex((x) => x.id === $);
        B >= 0 && Te.items.splice(B, 1);
      }
    }
  }
  function n($) {
    const C = ms($);
    !C || C.status !== "failed" || (C.status = "queued", C.error = void 0, C.progress = 0, C.downloaded = 0, Te.status === "idle" && jt());
  }
  function i($) {
    const C = ms($);
    !C || C.status !== "paused" || (C.status = "queued", Te.status === "idle" && jt());
  }
  function f() {
    const $ = Te.items.filter((C) => C.status === "paused");
    for (const C of $)
      C.status = "queued";
    Te.status === "idle" && jt();
  }
  function p($) {
    const C = Te.items.findIndex((B) => B.id === $);
    C >= 0 && ["completed", "failed", "paused"].includes(Te.items[C].status) && Te.items.splice(C, 1);
  }
  function u() {
    Te.items = Te.items.filter(($) => $.status !== "completed");
  }
  function m() {
    Te.items = Te.items.filter(($) => $.status !== "failed");
  }
  const d = U(
    () => Te.items.find(($) => $.status === "downloading")
  ), v = U(
    () => Te.items.filter(($) => $.status === "queued")
  ), y = U(
    () => Te.items.filter(($) => $.status === "completed")
  ), k = U(
    () => Te.items.filter(($) => $.status === "failed")
  ), _ = U(
    () => Te.items.filter(($) => $.status === "paused")
  ), b = U(() => Te.items.length > 0), T = U(
    () => Te.items.filter(($) => $.status === "queued" || $.status === "downloading").length
  ), P = U(
    () => Te.items.some(($) => $.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: uo(Te),
    // Computed
    currentDownload: d,
    queuedItems: v,
    completedItems: y,
    failedItems: k,
    pausedItems: _,
    hasItems: b,
    activeCount: T,
    hasPaused: P,
    // Actions
    addToQueue: t,
    cancelDownload: c,
    retryDownload: n,
    resumeDownload: i,
    resumeAllPaused: f,
    removeItem: p,
    clearCompleted: u,
    clearFailed: m,
    loadPendingDownloads: ui
  };
}
function Hs() {
  const t = h(null), c = h(null), n = h([]), i = h([]), f = h(!1), p = h(null);
  async function u(B, x) {
    var q;
    if (!((q = window.app) != null && q.api))
      throw new Error("ComfyUI API not available");
    const R = await window.app.api.fetchApi(B, x);
    if (!R.ok) {
      const A = await R.json().catch(() => ({})), G = A.error || A.message || `Request failed: ${R.status}`;
      throw new Error(G);
    }
    return R.json();
  }
  async function m(B) {
    f.value = !0, p.value = null;
    try {
      let x;
      return Yt() || (x = await u(
        `/v2/comfygit/workflow/${B}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), t.value = x, x;
    } catch (x) {
      const R = x instanceof Error ? x.message : "Unknown error occurred";
      throw p.value = R, x;
    } finally {
      f.value = !1;
    }
  }
  async function d(B, x, R, q) {
    f.value = !0, p.value = null;
    try {
      let A;
      if (!Yt()) {
        const G = Object.fromEntries(x), I = Object.fromEntries(R), D = q ? Array.from(q) : [];
        A = await u(
          `/v2/comfygit/workflow/${B}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: G,
              model_choices: I,
              skipped_packages: D
            })
          }
        );
      }
      return c.value = A, A;
    } catch (A) {
      const G = A instanceof Error ? A.message : "Unknown error occurred";
      throw p.value = G, A;
    } finally {
      f.value = !1;
    }
  }
  async function v(B, x = 10) {
    f.value = !0, p.value = null;
    try {
      let R;
      return Yt() || (R = await u(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: B, limit: x })
        }
      )), n.value = R.results, R.results;
    } catch (R) {
      const q = R instanceof Error ? R.message : "Unknown error occurred";
      throw p.value = q, R;
    } finally {
      f.value = !1;
    }
  }
  async function y(B, x = 10) {
    f.value = !0, p.value = null;
    try {
      let R;
      return Yt() || (R = await u(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: B, limit: x })
        }
      )), i.value = R.results, R.results;
    } catch (R) {
      const q = R instanceof Error ? R.message : "Unknown error occurred";
      throw p.value = q, R;
    } finally {
      f.value = !1;
    }
  }
  const k = us({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function _() {
    k.phase = "idle", k.currentFile = void 0, k.currentFileIndex = void 0, k.totalFiles = void 0, k.bytesDownloaded = void 0, k.bytesTotal = void 0, k.completedFiles = [], k.nodesToInstall = [], k.nodesInstalled = [], k.installError = void 0, k.needsRestart = void 0, k.error = void 0, k.nodeInstallProgress = void 0;
  }
  async function b(B) {
    k.phase = "installing", k.nodesInstalled = [], k.installError = void 0, k.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return Yt(), await T(B);
    } catch (x) {
      const R = x instanceof Error ? x.message : "Failed to install nodes";
      throw k.installError = R, x;
    }
  }
  async function T(B) {
    var R;
    const x = await u(
      `/v2/comfygit/workflow/${B}/install`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          packages: k.nodesToInstall
        })
      }
    );
    if (k.nodeInstallProgress) {
      k.nodeInstallProgress.totalNodes = k.nodesToInstall.length;
      const q = new Map(((R = x.failed) == null ? void 0 : R.map((A) => [A.node_id, A.error])) || []);
      for (let A = 0; A < k.nodesToInstall.length; A++) {
        const G = k.nodesToInstall[A], I = q.get(G);
        k.nodeInstallProgress.completedNodes.push({
          node_id: G,
          success: !I,
          error: I
        });
      }
    }
    return k.nodesInstalled = x.nodes_installed, k.needsRestart = x.nodes_installed.length > 0, x.failed && x.failed.length > 0 && (k.installError = `${x.failed.length} package(s) failed to install`), x;
  }
  async function P(B, x, R) {
    _(), k.phase = "resolving", p.value = null;
    const q = Object.fromEntries(x), A = Object.fromEntries(R);
    try {
      const G = await fetch(`/v2/comfygit/workflow/${B}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: q,
          model_choices: A
        })
      });
      if (!G.ok)
        throw new Error(`Request failed: ${G.status}`);
      if (!G.body)
        throw new Error("No response body");
      const I = G.body.getReader(), D = new TextDecoder();
      let O = "";
      for (; ; ) {
        const { done: ie, value: te } = await I.read();
        if (ie) break;
        O += D.decode(te, { stream: !0 });
        const J = O.split(`

`);
        O = J.pop() || "";
        for (const re of J) {
          if (!re.trim()) continue;
          const X = re.split(`
`);
          let z = "", L = "";
          for (const S of X)
            S.startsWith("event: ") ? z = S.slice(7) : S.startsWith("data: ") && (L = S.slice(6));
          if (L)
            try {
              const S = JSON.parse(L);
              $(z, S);
            } catch (S) {
              console.warn("Failed to parse SSE event:", S);
            }
        }
      }
    } catch (G) {
      const I = G instanceof Error ? G.message : "Unknown error occurred";
      throw p.value = I, k.error = I, k.phase = "error", G;
    }
  }
  function $(B, x) {
    switch (B) {
      case "batch_start":
        k.phase = "downloading", k.totalFiles = x.total;
        break;
      case "file_start":
        k.currentFile = x.filename, k.currentFileIndex = x.index, k.bytesDownloaded = 0, k.bytesTotal = void 0;
        break;
      case "file_progress":
        k.bytesDownloaded = x.downloaded, k.bytesTotal = x.total;
        break;
      case "file_complete":
        k.completedFiles.push({
          filename: x.filename,
          success: x.success,
          error: x.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        k.nodesToInstall = x.nodes_to_install || [], x.download_results && (k.completedFiles = x.download_results), k.phase = "complete";
        break;
      case "error":
        k.error = x.message, k.phase = "error", p.value = x.message;
        break;
    }
  }
  function C(B, x) {
    const { addToQueue: R } = os(), q = x.filter((A) => A.url && A.target_path).map((A) => ({
      workflow: B,
      filename: A.filename,
      url: A.url,
      targetPath: A.target_path,
      size: A.size || 0,
      type: "model"
    }));
    return q.length > 0 && R(q), q.length;
  }
  return {
    // State
    result: t,
    appliedResult: c,
    searchResults: n,
    modelSearchResults: i,
    isLoading: f,
    error: p,
    progress: k,
    // Methods
    analyzeWorkflow: m,
    applyResolution: d,
    applyResolutionWithProgress: P,
    installNodes: b,
    searchNodes: v,
    searchModels: y,
    resetProgress: _,
    queueModelDownloads: C
  };
}
const mi = { class: "resolution-stepper" }, vi = { class: "stepper-header" }, fi = ["onClick"], pi = {
  key: 0,
  class: "step-icon"
}, gi = {
  key: 1,
  class: "step-number"
}, hi = { class: "step-label" }, yi = {
  key: 0,
  class: "step-connector"
}, wi = { class: "stepper-content" }, ki = /* @__PURE__ */ oe({
  __name: "ResolutionStepper",
  props: {
    steps: {},
    currentStep: {},
    completedSteps: {},
    stepStats: {}
  },
  emits: ["step-change"],
  setup(t, { emit: c }) {
    const n = t, i = c;
    function f(v) {
      var y;
      if ((y = n.stepStats) != null && y[v]) {
        const k = n.stepStats[v];
        return k.total > 0 && k.resolved === k.total;
      }
      return n.completedSteps.includes(v);
    }
    function p(v) {
      var y;
      if ((y = n.stepStats) != null && y[v]) {
        const k = n.stepStats[v];
        return k.resolved > 0 && k.resolved < k.total;
      }
      return !1;
    }
    function u(v) {
      return f(v) ? "state-complete" : p(v) ? "state-partial" : "state-pending";
    }
    function m(v) {
      return !1;
    }
    function d(v) {
      i("step-change", v);
    }
    return (v, y) => (s(), o("div", mi, [
      e("div", vi, [
        (s(!0), o(W, null, ne(t.steps, (k, _) => (s(), o("div", {
          key: k.id,
          class: fe(["step", {
            active: t.currentStep === k.id,
            completed: f(k.id),
            "in-progress": p(k.id),
            disabled: m(k.id)
          }]),
          onClick: (b) => d(k.id)
        }, [
          e("div", {
            class: fe(["step-indicator", u(k.id)])
          }, [
            f(k.id) ? (s(), o("span", pi, "✓")) : (s(), o("span", gi, a(_ + 1), 1))
          ], 2),
          e("div", hi, a(k.label), 1),
          _ < t.steps.length - 1 ? (s(), o("div", yi)) : r("", !0)
        ], 10, fi))), 128))
      ]),
      e("div", wi, [
        Me(v.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), bi = /* @__PURE__ */ ae(ki, [["__scopeId", "data-v-2a7b3af8"]]), _i = /* @__PURE__ */ oe({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const c = t, n = U(() => c.confidence >= 0.9 ? "high" : c.confidence >= 0.7 ? "medium" : "low"), i = U(() => `confidence-${n.value}`), f = U(() => c.showPercentage ? `${Math.round(c.confidence * 100)}%` : n.value.charAt(0).toUpperCase() + n.value.slice(1));
    return (p, u) => (s(), o("span", {
      class: fe(["confidence-badge", i.value, t.size])
    }, a(f.value), 3));
  }
}), ds = /* @__PURE__ */ ae(_i, [["__scopeId", "data-v-17ec4b80"]]), $i = { class: "node-info" }, Ci = { class: "node-info-text" }, xi = { class: "item-body" }, Si = {
  key: 0,
  class: "resolved-state"
}, Ii = {
  key: 1,
  class: "multiple-options"
}, Ei = { class: "options-list" }, Pi = ["onClick"], Mi = ["name", "value", "checked", "onChange"], Ri = { class: "option-content" }, Ti = { class: "option-header" }, Di = { class: "option-package-id" }, Li = {
  key: 0,
  class: "option-title"
}, zi = { class: "option-meta" }, Ui = {
  key: 0,
  class: "installed-badge"
}, Ni = { class: "action-buttons" }, Oi = {
  key: 2,
  class: "unresolved"
}, Ai = {
  key: 0,
  class: "searching-state"
}, Bi = { class: "options-list" }, Fi = ["onClick"], Vi = ["name", "value"], Wi = { class: "option-content" }, Gi = { class: "option-header" }, ji = { class: "option-package-id" }, Hi = {
  key: 0,
  class: "option-description"
}, Ki = { class: "option-meta" }, qi = {
  key: 0,
  class: "installed-badge"
}, Yi = {
  key: 2,
  class: "unresolved-message"
}, Ji = { class: "action-buttons" }, Xi = /* @__PURE__ */ oe({
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
  setup(t, { emit: c }) {
    const n = t, i = c;
    function f(d, v = 80) {
      return d.length <= v ? d : d.slice(0, v - 3) + "...";
    }
    const p = U(() => !!n.choice);
    U(() => {
      var d;
      return (d = n.choice) == null ? void 0 : d.action;
    }), U(() => {
      var d;
      return (d = n.choice) == null ? void 0 : d.package_id;
    });
    const u = U(() => {
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
    function m(d) {
      i("option-selected", d);
    }
    return (d, v) => (s(), o("div", {
      class: fe(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: p.value }])
    }, [
      e("div", $i, [
        e("span", Ci, [
          v[7] || (v[7] = g("Node type: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: fe(["status-badge", u.value])
        }, a(t.statusLabel), 3)) : r("", !0)
      ]),
      e("div", xi, [
        p.value ? (s(), o("div", Si, [
          w(ge, {
            variant: "ghost",
            size: "sm",
            onClick: v[0] || (v[0] = (y) => i("clear-choice"))
          }, {
            default: l(() => [...v[8] || (v[8] = [
              g(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", Ii, [
          v[12] || (v[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", Ei, [
            (s(!0), o(W, null, ne(t.options, (y, k) => (s(), o("label", {
              key: y.package_id,
              class: fe(["option-card", { selected: t.selectedOptionIndex === k }]),
              onClick: (_) => m(k)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: k,
                checked: t.selectedOptionIndex === k,
                onChange: (_) => m(k)
              }, null, 40, Mi),
              e("div", Ri, [
                e("div", Ti, [
                  e("span", Di, a(y.package_id), 1),
                  w(ds, {
                    confidence: y.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                y.title && y.title !== y.package_id ? (s(), o("div", Li, a(y.title), 1)) : r("", !0),
                e("div", zi, [
                  y.is_installed ? (s(), o("span", Ui, "Already Installed")) : r("", !0)
                ])
              ])
            ], 10, Pi))), 128))
          ]),
          e("div", Ni, [
            w(ge, {
              variant: "secondary",
              size: "sm",
              onClick: v[1] || (v[1] = (y) => i("search"))
            }, {
              default: l(() => [...v[9] || (v[9] = [
                g(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            w(ge, {
              variant: "secondary",
              size: "sm",
              onClick: v[2] || (v[2] = (y) => i("manual-entry"))
            }, {
              default: l(() => [...v[10] || (v[10] = [
                g(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            w(ge, {
              variant: "secondary",
              size: "sm",
              onClick: v[3] || (v[3] = (y) => i("mark-optional"))
            }, {
              default: l(() => [...v[11] || (v[11] = [
                g(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", Oi, [
          t.isSearching ? (s(), o("div", Ai, [...v[13] || (v[13] = [
            e("span", { class: "searching-spinner" }, null, -1),
            e("span", null, "Searching registry...", -1)
          ])])) : t.searchResults && t.searchResults.length > 0 ? (s(), o(W, { key: 1 }, [
            v[14] || (v[14] = e("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            e("div", Bi, [
              (s(!0), o(W, null, ne(t.searchResults.slice(0, 5), (y, k) => (s(), o("label", {
                key: y.package_id,
                class: "option-card",
                onClick: (_) => i("search-result-selected", y)
              }, [
                e("input", {
                  type: "radio",
                  name: `search-result-${t.nodeType}`,
                  value: k
                }, null, 8, Vi),
                e("div", Wi, [
                  e("div", Gi, [
                    e("span", ji, a(y.package_id), 1),
                    w(ds, {
                      confidence: y.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  y.description ? (s(), o("div", Hi, a(f(y.description)), 1)) : r("", !0),
                  e("div", Ki, [
                    y.is_installed ? (s(), o("span", qi, "Already Installed")) : r("", !0)
                  ])
                ])
              ], 8, Fi))), 128))
            ])
          ], 64)) : (s(), o("div", Yi, [...v[15] || (v[15] = [
            e("span", { class: "warning-icon" }, "⚠", -1),
            e("span", null, "No matching package found in registry", -1)
          ])])),
          e("div", Ji, [
            w(ge, {
              variant: "secondary",
              size: "sm",
              onClick: v[4] || (v[4] = (y) => i("search"))
            }, {
              default: l(() => {
                var y;
                return [
                  g(a((y = t.searchResults) != null && y.length ? "Refine Search" : "Search Registry"), 1)
                ];
              }),
              _: 1
            }),
            w(ge, {
              variant: "secondary",
              size: "sm",
              onClick: v[5] || (v[5] = (y) => i("manual-entry"))
            }, {
              default: l(() => [...v[16] || (v[16] = [
                g(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            w(ge, {
              variant: "secondary",
              size: "sm",
              onClick: v[6] || (v[6] = (y) => i("mark-optional"))
            }, {
              default: l(() => [...v[17] || (v[17] = [
                g(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Qi = /* @__PURE__ */ ae(Xi, [["__scopeId", "data-v-c2997d1d"]]), Zi = { class: "item-navigator" }, er = { class: "nav-item-info" }, tr = ["title"], sr = { class: "nav-controls" }, or = { class: "nav-arrows" }, nr = ["disabled"], ar = ["disabled"], lr = { class: "nav-position" }, ir = /* @__PURE__ */ oe({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: c }) {
    const n = c;
    return (i, f) => (s(), o("div", Zi, [
      e("div", er, [
        e("code", {
          class: "item-name",
          title: t.itemName
        }, a(t.itemName), 9, tr)
      ]),
      e("div", sr, [
        e("div", or, [
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === 0,
            onClick: f[0] || (f[0] = (p) => n("prev")),
            title: "Previous item"
          }, " ← ", 8, nr),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: f[1] || (f[1] = (p) => n("next")),
            title: "Next item"
          }, " → ", 8, ar)
        ]),
        e("span", lr, a(t.currentIndex + 1) + "/" + a(t.totalItems), 1)
      ])
    ]));
  }
}), Ks = /* @__PURE__ */ ae(ir, [["__scopeId", "data-v-74af7920"]]), rr = ["type", "value", "placeholder", "disabled"], dr = {
  key: 0,
  class: "base-input-error"
}, cr = /* @__PURE__ */ oe({
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
    return (c, n) => (s(), o("div", {
      class: fe(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: fe(["base-input", { error: !!t.error }]),
        onInput: n[0] || (n[0] = (i) => c.$emit("update:modelValue", i.target.value)),
        onKeyup: [
          n[1] || (n[1] = $t((i) => c.$emit("enter"), ["enter"])),
          n[2] || (n[2] = $t((i) => c.$emit("escape"), ["escape"]))
        ]
      }, null, 42, rr),
      t.error ? (s(), o("span", dr, a(t.error), 1)) : r("", !0)
    ], 2));
  }
}), ht = /* @__PURE__ */ ae(cr, [["__scopeId", "data-v-9ba02cdc"]]), ur = { class: "node-resolution-step" }, mr = {
  key: 0,
  class: "auto-resolved-section"
}, vr = { class: "section-header" }, fr = { class: "stat-badge" }, pr = { class: "resolved-packages-list" }, gr = { class: "package-info" }, hr = { class: "package-id" }, yr = { class: "node-count" }, wr = { class: "package-actions" }, kr = {
  key: 0,
  class: "status-badge install"
}, br = {
  key: 1,
  class: "status-badge skip"
}, _r = ["onClick"], $r = {
  key: 1,
  class: "section-divider"
}, Cr = { class: "step-header" }, xr = { class: "stat-badge" }, Sr = {
  key: 1,
  class: "step-body"
}, Ir = {
  key: 3,
  class: "empty-state"
}, Er = { class: "node-modal-body" }, Pr = { class: "node-search-results-container" }, Mr = {
  key: 0,
  class: "node-search-results"
}, Rr = ["onClick"], Tr = { class: "node-result-header" }, Dr = { class: "node-result-package-id" }, Lr = {
  key: 0,
  class: "node-result-description"
}, zr = {
  key: 1,
  class: "node-empty-state"
}, Ur = {
  key: 2,
  class: "node-empty-state"
}, Nr = {
  key: 3,
  class: "node-empty-state"
}, Or = { class: "node-manual-entry-modal" }, Ar = { class: "node-modal-body" }, Br = { class: "node-modal-actions" }, Fr = /* @__PURE__ */ oe({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(t, { emit: c }) {
    const n = t, i = c, { searchNodes: f } = Hs(), p = h(0), u = h(!1), m = h(!1), d = h(""), v = h(""), y = h([]), k = h(!1), _ = h(/* @__PURE__ */ new Map()), b = h(/* @__PURE__ */ new Set()), T = h(!1);
    function P() {
      T.value && L(), T.value = !1;
    }
    const $ = U(() => n.nodes[p.value]), C = U(() => n.nodes.filter((me) => n.nodeChoices.has(me.node_type)).length), B = U(() => $.value ? _.value.get($.value.node_type) || [] : []), x = U(() => $.value ? b.value.has($.value.node_type) : !1);
    Ct($, async (me) => {
      var he;
      me && ((he = me.options) != null && he.length || _.value.has(me.node_type) || b.value.has(me.node_type) || n.nodeChoices.has(me.node_type) || await R(me.node_type));
    }, { immediate: !0 });
    async function R(me) {
      b.value.add(me);
      try {
        const he = await f(me, 5);
        _.value.set(me, he);
      } catch {
        _.value.set(me, []);
      } finally {
        b.value.delete(me);
      }
    }
    const q = U(() => n.autoResolvedPackages.filter((me) => !n.skippedPackages.has(me.package_id)).length);
    function A(me) {
      return n.skippedPackages.has(me);
    }
    function G(me) {
      i("package-skip", me);
    }
    const I = U(() => {
      var he;
      if (!$.value) return "not-found";
      const me = n.nodeChoices.get($.value.node_type);
      if (me)
        switch (me.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (he = $.value.options) != null && he.length ? "ambiguous" : "not-found";
    }), D = U(() => {
      var he;
      if (!$.value) return;
      const me = n.nodeChoices.get($.value.node_type);
      if (me)
        switch (me.action) {
          case "install":
            return me.package_id ? `→ ${me.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (he = $.value.options) != null && he.length ? `${$.value.options.length} matches` : "Not Found";
    });
    function O(me) {
      me >= 0 && me < n.nodes.length && (p.value = me);
    }
    function ie() {
      $.value && i("mark-optional", $.value.node_type);
    }
    function te() {
      $.value && i("skip", $.value.node_type);
    }
    function J(me) {
      $.value && i("option-selected", $.value.node_type, me);
    }
    function re() {
      $.value && i("clear-choice", $.value.node_type);
    }
    function X() {
      $.value && (d.value = $.value.node_type, y.value = B.value, u.value = !0, be(d.value));
    }
    function z() {
      v.value = "", m.value = !0;
    }
    function L() {
      u.value = !1, d.value = "", y.value = [];
    }
    function S() {
      m.value = !1, v.value = "";
    }
    let de = null;
    function Z() {
      de && clearTimeout(de), de = setTimeout(() => {
        be(d.value);
      }, 300);
    }
    async function be(me) {
      if (!me.trim()) {
        y.value = [];
        return;
      }
      k.value = !0;
      try {
        y.value = await f(me, 10);
      } catch {
        y.value = [];
      } finally {
        k.value = !1;
      }
    }
    function xe(me) {
      $.value && (i("manual-entry", $.value.node_type, me.package_id), L());
    }
    function Ie(me) {
      $.value && i("manual-entry", $.value.node_type, me.package_id);
    }
    function Oe() {
      !$.value || !v.value.trim() || (i("manual-entry", $.value.node_type, v.value.trim()), S());
    }
    return (me, he) => {
      var we, Q;
      return s(), o("div", ur, [
        t.autoResolvedPackages.length > 0 ? (s(), o("div", mr, [
          e("div", vr, [
            he[6] || (he[6] = e("div", { class: "section-info" }, [
              e("h4", { class: "section-title" }, "Packages to Install"),
              e("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            e("span", fr, a(q.value) + "/" + a(t.autoResolvedPackages.length) + " to install", 1)
          ]),
          e("div", pr, [
            (s(!0), o(W, null, ne(t.autoResolvedPackages, (le) => (s(), o("div", {
              key: le.package_id,
              class: "resolved-package-item"
            }, [
              e("div", gr, [
                e("code", hr, a(le.package_id), 1),
                e("span", yr, a(le.node_types_count) + " node type" + a(le.node_types_count > 1 ? "s" : ""), 1)
              ]),
              e("div", wr, [
                A(le.package_id) ? (s(), o("span", br, " SKIPPED ")) : (s(), o("span", kr, " WILL INSTALL ")),
                e("button", {
                  class: "toggle-skip-btn",
                  onClick: (ke) => G(le.package_id)
                }, a(A(le.package_id) ? "Include" : "Skip"), 9, _r)
              ])
            ]))), 128))
          ])
        ])) : r("", !0),
        t.autoResolvedPackages.length > 0 && t.nodes.length > 0 ? (s(), o("div", $r)) : r("", !0),
        t.nodes.length > 0 ? (s(), o(W, { key: 2 }, [
          e("div", Cr, [
            he[7] || (he[7] = e("div", { class: "step-info" }, [
              e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            e("span", xr, a(C.value) + "/" + a(t.nodes.length) + " resolved", 1)
          ]),
          $.value ? (s(), M(Ks, {
            key: 0,
            "item-name": $.value.node_type,
            "current-index": p.value,
            "total-items": t.nodes.length,
            onPrev: he[0] || (he[0] = (le) => O(p.value - 1)),
            onNext: he[1] || (he[1] = (le) => O(p.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : r("", !0),
          $.value ? (s(), o("div", Sr, [
            w(Qi, {
              "node-type": $.value.node_type,
              "has-multiple-options": !!((we = $.value.options) != null && we.length),
              options: $.value.options,
              choice: (Q = t.nodeChoices) == null ? void 0 : Q.get($.value.node_type),
              status: I.value,
              "status-label": D.value,
              "search-results": B.value,
              "is-searching": x.value,
              onMarkOptional: ie,
              onSkip: te,
              onManualEntry: z,
              onSearch: X,
              onOptionSelected: J,
              onClearChoice: re,
              onSearchResultSelected: Ie
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching"])
          ])) : r("", !0)
        ], 64)) : r("", !0),
        t.nodes.length === 0 && t.autoResolvedPackages.length === 0 ? (s(), o("div", Ir, [...he[8] || (he[8] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])) : r("", !0),
        (s(), M(Ye, { to: "body" }, [
          u.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: he[4] || (he[4] = Be((le) => T.value = !0, ["self"])),
            onMouseup: Be(P, ["self"])
          }, [
            e("div", {
              class: "node-search-modal",
              onMousedown: he[3] || (he[3] = (le) => T.value = !1)
            }, [
              e("div", { class: "node-modal-header" }, [
                he[9] || (he[9] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: L
                }, "✕")
              ]),
              e("div", Er, [
                w(ht, {
                  modelValue: d.value,
                  "onUpdate:modelValue": he[2] || (he[2] = (le) => d.value = le),
                  placeholder: "Search by node type, package name...",
                  onInput: Z
                }, null, 8, ["modelValue"]),
                e("div", Pr, [
                  y.value.length > 0 ? (s(), o("div", Mr, [
                    (s(!0), o(W, null, ne(y.value, (le) => (s(), o("div", {
                      key: le.package_id,
                      class: "node-search-result-item",
                      onClick: (ke) => xe(le)
                    }, [
                      e("div", Tr, [
                        e("code", Dr, a(le.package_id), 1),
                        le.match_confidence ? (s(), M(ds, {
                          key: 0,
                          confidence: le.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : r("", !0)
                      ]),
                      le.description ? (s(), o("div", Lr, a(le.description), 1)) : r("", !0)
                    ], 8, Rr))), 128))
                  ])) : k.value ? (s(), o("div", zr, "Searching...")) : d.value ? (s(), o("div", Ur, 'No packages found matching "' + a(d.value) + '"', 1)) : (s(), o("div", Nr, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : r("", !0)
        ])),
        (s(), M(Ye, { to: "body" }, [
          m.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: Be(S, ["self"])
          }, [
            e("div", Or, [
              e("div", { class: "node-modal-header" }, [
                he[10] || (he[10] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: S
                }, "✕")
              ]),
              e("div", Ar, [
                w(ht, {
                  modelValue: v.value,
                  "onUpdate:modelValue": he[5] || (he[5] = (le) => v.value = le),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", Br, [
                  w(ge, {
                    variant: "secondary",
                    onClick: S
                  }, {
                    default: l(() => [...he[11] || (he[11] = [
                      g("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  w(ge, {
                    variant: "primary",
                    disabled: !v.value.trim(),
                    onClick: Oe
                  }, {
                    default: l(() => [...he[12] || (he[12] = [
                      g(" Add Package ", -1)
                    ])]),
                    _: 1
                  }, 8, ["disabled"])
                ])
              ])
            ])
          ])) : r("", !0)
        ]))
      ]);
    };
  }
}), Vr = /* @__PURE__ */ ae(Fr, [["__scopeId", "data-v-281581bc"]]), Wr = { class: "node-info" }, Gr = { class: "node-info-text" }, jr = { class: "item-body" }, Hr = {
  key: 0,
  class: "resolved-state"
}, Kr = {
  key: 1,
  class: "multiple-options"
}, qr = { class: "options-list" }, Yr = ["onClick"], Jr = ["name", "value", "checked", "onChange"], Xr = { class: "option-content" }, Qr = { class: "option-header" }, Zr = { class: "option-filename" }, ed = { class: "option-meta" }, td = { class: "option-size" }, sd = { class: "option-category" }, od = { class: "option-path" }, nd = { class: "action-buttons" }, ad = {
  key: 2,
  class: "unresolved"
}, ld = { class: "action-buttons" }, id = /* @__PURE__ */ oe({
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
    const n = t, i = c, f = U(() => !!n.choice);
    U(() => {
      var d;
      return (d = n.choice) == null ? void 0 : d.action;
    }), U(() => {
      var d, v;
      return ((v = (d = n.choice) == null ? void 0 : d.selected_model) == null ? void 0 : v.filename) || "selected";
    });
    const p = U(() => {
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
    function u(d) {
      i("option-selected", d);
    }
    function m(d) {
      if (!d) return "Unknown";
      const v = d / (1024 * 1024 * 1024);
      return v >= 1 ? `${v.toFixed(2)} GB` : `${(d / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (d, v) => (s(), o("div", {
      class: fe(["model-resolution-item", { resolved: f.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", Wr, [
        e("span", Gr, [
          v[7] || (v[7] = g("Used by: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: fe(["status-badge", p.value])
        }, a(t.statusLabel), 3)) : r("", !0)
      ]),
      e("div", jr, [
        f.value ? (s(), o("div", Hr, [
          w(ge, {
            variant: "ghost",
            size: "sm",
            onClick: v[0] || (v[0] = (y) => i("clear-choice"))
          }, {
            default: l(() => [...v[8] || (v[8] = [
              g(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", Kr, [
          v[12] || (v[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", qr, [
            (s(!0), o(W, null, ne(t.options, (y, k) => (s(), o("label", {
              key: y.model.hash,
              class: fe(["option-card", { selected: t.selectedOptionIndex === k }]),
              onClick: (_) => u(k)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: k,
                checked: t.selectedOptionIndex === k,
                onChange: (_) => u(k)
              }, null, 40, Jr),
              e("div", Xr, [
                e("div", Qr, [
                  e("span", Zr, a(y.model.filename), 1),
                  w(ds, {
                    confidence: y.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", ed, [
                  e("span", td, a(m(y.model.size)), 1),
                  e("span", sd, a(y.model.category), 1)
                ]),
                e("div", od, a(y.model.relative_path), 1)
              ])
            ], 10, Yr))), 128))
          ]),
          e("div", nd, [
            w(ge, {
              variant: "ghost",
              size: "sm",
              onClick: v[1] || (v[1] = (y) => i("search"))
            }, {
              default: l(() => [...v[9] || (v[9] = [
                g(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            w(ge, {
              variant: "ghost",
              size: "sm",
              onClick: v[2] || (v[2] = (y) => i("download-url"))
            }, {
              default: l(() => [...v[10] || (v[10] = [
                g(" Download URL ", -1)
              ])]),
              _: 1
            }),
            w(ge, {
              variant: "secondary",
              size: "sm",
              onClick: v[3] || (v[3] = (y) => i("mark-optional"))
            }, {
              default: l(() => [...v[11] || (v[11] = [
                g(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", ad, [
          v[16] || (v[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", ld, [
            w(ge, {
              variant: "primary",
              size: "sm",
              onClick: v[4] || (v[4] = (y) => i("search"))
            }, {
              default: l(() => [...v[13] || (v[13] = [
                g(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            w(ge, {
              variant: "secondary",
              size: "sm",
              onClick: v[5] || (v[5] = (y) => i("download-url"))
            }, {
              default: l(() => [...v[14] || (v[14] = [
                g(" Download URL ", -1)
              ])]),
              _: 1
            }),
            w(ge, {
              variant: "secondary",
              size: "sm",
              onClick: v[6] || (v[6] = (y) => i("mark-optional"))
            }, {
              default: l(() => [...v[15] || (v[15] = [
                g(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), rd = /* @__PURE__ */ ae(id, [["__scopeId", "data-v-8a82fefa"]]), dd = { class: "model-resolution-step" }, cd = { class: "step-header" }, ud = { class: "step-info" }, md = { class: "step-title" }, vd = { class: "step-description" }, fd = { class: "stat-badge" }, pd = {
  key: 1,
  class: "step-body"
}, gd = {
  key: 2,
  class: "empty-state"
}, hd = { class: "model-search-modal" }, yd = { class: "model-modal-body" }, wd = {
  key: 0,
  class: "model-search-results"
}, kd = ["onClick"], bd = { class: "model-result-header" }, _d = { class: "model-result-filename" }, $d = { class: "model-result-meta" }, Cd = { class: "model-result-category" }, xd = { class: "model-result-size" }, Sd = {
  key: 0,
  class: "model-result-path"
}, Id = {
  key: 1,
  class: "model-no-results"
}, Ed = {
  key: 2,
  class: "model-searching"
}, Pd = { class: "model-download-url-modal" }, Md = { class: "model-modal-body" }, Rd = { class: "model-input-group" }, Td = { class: "model-input-group" }, Dd = { class: "model-modal-actions" }, Ld = /* @__PURE__ */ oe({
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
    function i(L) {
      var S;
      return L && ((S = n[L]) == null ? void 0 : S[0]) || null;
    }
    const f = t, p = c, u = h(0), m = h(!1), d = h(!1), v = h(""), y = h(""), k = h(""), _ = h([]), b = h(!1), T = U(() => f.models[u.value]), P = U(() => f.models.some((L) => L.is_download_intent)), $ = U(() => f.models.filter(
      (L) => f.modelChoices.has(L.filename) || L.is_download_intent
    ).length), C = U(() => {
      var S;
      if (!T.value) return "";
      const L = i((S = T.value.reference) == null ? void 0 : S.node_type);
      return L ? `${L}/${T.value.filename}` : "";
    }), B = U(() => {
      var S;
      if (!T.value) return "not-found";
      const L = f.modelChoices.get(T.value.filename);
      if (L)
        switch (L.action) {
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
      return T.value.is_download_intent ? "download" : (S = T.value.options) != null && S.length ? "ambiguous" : "not-found";
    }), x = U(() => {
      var S, de;
      if (!T.value) return;
      const L = f.modelChoices.get(T.value.filename);
      if (L)
        switch (L.action) {
          case "select":
            return (S = L.selected_model) != null && S.filename ? `→ ${L.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return T.value.is_download_intent ? "Pending Download" : (de = T.value.options) != null && de.length ? `${T.value.options.length} matches` : "Not Found";
    });
    function R(L) {
      L >= 0 && L < f.models.length && (u.value = L);
    }
    function q() {
      T.value && p("mark-optional", T.value.filename);
    }
    function A() {
      T.value && p("skip", T.value.filename);
    }
    function G(L) {
      T.value && p("option-selected", T.value.filename, L);
    }
    function I() {
      T.value && p("clear-choice", T.value.filename);
    }
    function D() {
      T.value && (v.value = T.value.filename, m.value = !0);
    }
    function O() {
      T.value && (y.value = T.value.download_source || "", k.value = T.value.target_path || C.value, d.value = !0);
    }
    function ie() {
      m.value = !1, v.value = "", _.value = [];
    }
    function te() {
      d.value = !1, y.value = "", k.value = "";
    }
    function J() {
      b.value = !0, setTimeout(() => {
        b.value = !1;
      }, 300);
    }
    function re(L) {
      T.value && ie();
    }
    function X() {
      !T.value || !y.value.trim() || (p("download-url", T.value.filename, y.value.trim(), k.value.trim() || void 0), te());
    }
    function z(L) {
      if (!L) return "Unknown";
      const S = L / (1024 * 1024 * 1024);
      return S >= 1 ? `${S.toFixed(2)} GB` : `${(L / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (L, S) => {
      var de, Z, be;
      return s(), o("div", dd, [
        e("div", cd, [
          e("div", ud, [
            e("h3", md, a(P.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", vd, a(P.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", fd, a($.value) + "/" + a(t.models.length) + " resolved", 1)
        ]),
        T.value ? (s(), M(Ks, {
          key: 0,
          "item-name": T.value.filename,
          "current-index": u.value,
          "total-items": t.models.length,
          onPrev: S[0] || (S[0] = (xe) => R(u.value - 1)),
          onNext: S[1] || (S[1] = (xe) => R(u.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : r("", !0),
        T.value ? (s(), o("div", pd, [
          w(rd, {
            filename: T.value.filename,
            "node-type": ((de = T.value.reference) == null ? void 0 : de.node_type) || "Unknown",
            "has-multiple-options": !!((Z = T.value.options) != null && Z.length),
            options: T.value.options,
            choice: (be = t.modelChoices) == null ? void 0 : be.get(T.value.filename),
            status: B.value,
            "status-label": x.value,
            onMarkOptional: q,
            onSkip: A,
            onDownloadUrl: O,
            onSearch: D,
            onOptionSelected: G,
            onClearChoice: I
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (s(), o("div", gd, [...S[5] || (S[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (s(), M(Ye, { to: "body" }, [
          m.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: Be(ie, ["self"])
          }, [
            e("div", hd, [
              e("div", { class: "model-modal-header" }, [
                S[6] || (S[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: ie
                }, "✕")
              ]),
              e("div", yd, [
                w(ht, {
                  modelValue: v.value,
                  "onUpdate:modelValue": S[2] || (S[2] = (xe) => v.value = xe),
                  placeholder: "Search by filename, category...",
                  onInput: J
                }, null, 8, ["modelValue"]),
                _.value.length > 0 ? (s(), o("div", wd, [
                  (s(!0), o(W, null, ne(_.value, (xe) => (s(), o("div", {
                    key: xe.hash,
                    class: "model-search-result-item",
                    onClick: (Ie) => re()
                  }, [
                    e("div", bd, [
                      e("code", _d, a(xe.filename), 1)
                    ]),
                    e("div", $d, [
                      e("span", Cd, a(xe.category), 1),
                      e("span", xd, a(z(xe.size)), 1)
                    ]),
                    xe.relative_path ? (s(), o("div", Sd, a(xe.relative_path), 1)) : r("", !0)
                  ], 8, kd))), 128))
                ])) : v.value && !b.value ? (s(), o("div", Id, ' No models found matching "' + a(v.value) + '" ', 1)) : r("", !0),
                b.value ? (s(), o("div", Ed, "Searching...")) : r("", !0)
              ])
            ])
          ])) : r("", !0)
        ])),
        (s(), M(Ye, { to: "body" }, [
          d.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: Be(te, ["self"])
          }, [
            e("div", Pd, [
              e("div", { class: "model-modal-header" }, [
                S[7] || (S[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: te
                }, "✕")
              ]),
              e("div", Md, [
                e("div", Rd, [
                  S[8] || (S[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  w(ht, {
                    modelValue: y.value,
                    "onUpdate:modelValue": S[3] || (S[3] = (xe) => y.value = xe),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", Td, [
                  S[9] || (S[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  w(ht, {
                    modelValue: k.value,
                    "onUpdate:modelValue": S[4] || (S[4] = (xe) => k.value = xe),
                    placeholder: C.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", Dd, [
                  w(ge, {
                    variant: "secondary",
                    onClick: te
                  }, {
                    default: l(() => [...S[10] || (S[10] = [
                      g("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  w(ge, {
                    variant: "primary",
                    disabled: !y.value.trim() || !k.value.trim(),
                    onClick: X
                  }, {
                    default: l(() => [...S[11] || (S[11] = [
                      g(" Queue Download ", -1)
                    ])]),
                    _: 1
                  }, 8, ["disabled"])
                ])
              ])
            ])
          ])) : r("", !0)
        ]))
      ]);
    };
  }
}), zd = /* @__PURE__ */ ae(Ld, [["__scopeId", "data-v-c6acbada"]]), Ud = { class: "applying-step" }, Nd = {
  key: 0,
  class: "phase-content"
}, Od = {
  key: 1,
  class: "phase-content"
}, Ad = { class: "phase-description" }, Bd = { class: "overall-progress" }, Fd = { class: "progress-bar" }, Vd = { class: "progress-label" }, Wd = { class: "install-list" }, Gd = { class: "install-icon" }, jd = { key: 0 }, Hd = {
  key: 1,
  class: "spinner"
}, Kd = { key: 2 }, qd = { key: 3 }, Yd = {
  key: 0,
  class: "install-error"
}, Jd = {
  key: 2,
  class: "phase-content"
}, Xd = { class: "phase-header" }, Qd = { class: "phase-title" }, Zd = { class: "completion-summary" }, ec = {
  key: 0,
  class: "summary-item success"
}, tc = { class: "summary-text" }, sc = {
  key: 1,
  class: "summary-item error"
}, oc = { class: "summary-text" }, nc = {
  key: 2,
  class: "failed-list"
}, ac = { class: "failed-node-id" }, lc = { class: "failed-error" }, ic = {
  key: 4,
  class: "summary-item success"
}, rc = {
  key: 5,
  class: "restart-prompt"
}, dc = {
  key: 3,
  class: "phase-content error"
}, cc = { class: "error-message" }, uc = /* @__PURE__ */ oe({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(t) {
    const c = t, n = U(() => {
      var v, y;
      const m = ((v = c.progress.nodeInstallProgress) == null ? void 0 : v.totalNodes) || c.progress.nodesToInstall.length;
      if (!m) return 0;
      const d = ((y = c.progress.nodeInstallProgress) == null ? void 0 : y.completedNodes.length) ?? 0;
      return Math.round(d / m * 100);
    }), i = U(() => {
      var m;
      return ((m = c.progress.nodeInstallProgress) == null ? void 0 : m.completedNodes.filter((d) => !d.success)) || [];
    }), f = U(() => i.value.length > 0);
    function p(m, d) {
      var y, k;
      const v = (y = c.progress.nodeInstallProgress) == null ? void 0 : y.completedNodes.find((_) => _.node_id === m);
      return v ? v.success ? "complete" : "failed" : ((k = c.progress.nodeInstallProgress) == null ? void 0 : k.currentIndex) === d ? "installing" : "pending";
    }
    function u(m) {
      var d, v;
      return (v = (d = c.progress.nodeInstallProgress) == null ? void 0 : d.completedNodes.find((y) => y.node_id === m)) == null ? void 0 : v.error;
    }
    return (m, d) => {
      var v, y, k, _;
      return s(), o("div", Ud, [
        t.progress.phase === "resolving" ? (s(), o("div", Nd, [...d[2] || (d[2] = [
          e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          e("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : t.progress.phase === "installing" ? (s(), o("div", Od, [
          d[3] || (d[3] = e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          e("p", Ad, " Installing " + a((((v = t.progress.nodeInstallProgress) == null ? void 0 : v.currentIndex) ?? 0) + 1) + " of " + a(((y = t.progress.nodeInstallProgress) == null ? void 0 : y.totalNodes) ?? t.progress.nodesToInstall.length) + " packages... ", 1),
          e("div", Bd, [
            e("div", Fd, [
              e("div", {
                class: "progress-fill",
                style: Et({ width: `${n.value}%` })
              }, null, 4)
            ]),
            e("span", Vd, a(((k = t.progress.nodeInstallProgress) == null ? void 0 : k.completedNodes.length) ?? 0) + " / " + a(((_ = t.progress.nodeInstallProgress) == null ? void 0 : _.totalNodes) ?? t.progress.nodesToInstall.length), 1)
          ]),
          e("div", Wd, [
            (s(!0), o(W, null, ne(t.progress.nodesToInstall, (b, T) => (s(), o("div", {
              key: b,
              class: fe(["install-item", p(b, T)])
            }, [
              e("span", Gd, [
                p(b, T) === "pending" ? (s(), o("span", jd, "○")) : p(b, T) === "installing" ? (s(), o("span", Hd, "◌")) : p(b, T) === "complete" ? (s(), o("span", Kd, "✓")) : p(b, T) === "failed" ? (s(), o("span", qd, "✗")) : r("", !0)
              ]),
              e("code", null, a(b), 1),
              u(b) ? (s(), o("span", Yd, a(u(b)), 1)) : r("", !0)
            ], 2))), 128))
          ])
        ])) : t.progress.phase === "complete" ? (s(), o("div", Jd, [
          e("div", Xd, [
            e("span", {
              class: fe(["phase-icon", f.value ? "warning" : "success"])
            }, a(f.value ? "⚠" : "✓"), 3),
            e("h3", Qd, a(f.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          e("div", Zd, [
            t.progress.nodesInstalled.length > 0 ? (s(), o("div", ec, [
              d[4] || (d[4] = e("span", { class: "summary-icon" }, "✓", -1)),
              e("span", tc, a(t.progress.nodesInstalled.length) + " node package" + a(t.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : r("", !0),
            i.value.length > 0 ? (s(), o("div", sc, [
              d[5] || (d[5] = e("span", { class: "summary-icon" }, "✗", -1)),
              e("span", oc, a(i.value.length) + " package" + a(i.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : r("", !0),
            i.value.length > 0 ? (s(), o("div", nc, [
              (s(!0), o(W, null, ne(i.value, (b) => (s(), o("div", {
                key: b.node_id,
                class: "failed-item"
              }, [
                e("code", ac, a(b.node_id), 1),
                e("span", lc, a(b.error), 1)
              ]))), 128))
            ])) : r("", !0),
            i.value.length > 0 ? (s(), o("button", {
              key: 3,
              class: "retry-button",
              onClick: d[0] || (d[0] = (b) => m.$emit("retry-failed"))
            }, " Retry Failed (" + a(i.value.length) + ") ", 1)) : r("", !0),
            f.value ? r("", !0) : (s(), o("div", ic, [...d[6] || (d[6] = [
              e("span", { class: "summary-icon" }, "✓", -1),
              e("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            d[8] || (d[8] = e("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            t.progress.needsRestart ? (s(), o("div", rc, [
              d[7] || (d[7] = e("div", { class: "restart-warning" }, [
                e("span", { class: "warning-icon" }, "⚠"),
                e("div", { class: "warning-content" }, [
                  e("strong", null, "Restart Required"),
                  e("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              e("button", {
                class: "restart-button",
                onClick: d[1] || (d[1] = (b) => m.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : r("", !0)
          ])
        ])) : t.progress.phase === "error" ? (s(), o("div", dc, [
          d[9] || (d[9] = e("div", { class: "phase-header" }, [
            e("span", { class: "phase-icon error" }, "✗"),
            e("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          e("p", cc, a(t.progress.error), 1)
        ])) : r("", !0)
      ]);
    };
  }
}), mc = /* @__PURE__ */ ae(uc, [["__scopeId", "data-v-5efaae58"]]), vc = {
  key: 0,
  class: "loading-state"
}, fc = {
  key: 1,
  class: "wizard-content"
}, pc = {
  key: 0,
  class: "step-content"
}, gc = { class: "analysis-summary" }, hc = { class: "analysis-header" }, yc = { class: "summary-description" }, wc = { class: "stats-grid" }, kc = { class: "stat-card" }, bc = { class: "stat-items" }, _c = {
  key: 0,
  class: "stat-item success"
}, $c = { class: "stat-count" }, Cc = {
  key: 1,
  class: "stat-item info"
}, xc = { class: "stat-count" }, Sc = {
  key: 2,
  class: "stat-item warning"
}, Ic = { class: "stat-count" }, Ec = {
  key: 3,
  class: "stat-item error"
}, Pc = { class: "stat-count" }, Mc = { class: "stat-card" }, Rc = { class: "stat-items" }, Tc = { class: "stat-item success" }, Dc = { class: "stat-count" }, Lc = {
  key: 0,
  class: "stat-item info"
}, zc = { class: "stat-count" }, Uc = {
  key: 1,
  class: "stat-item warning"
}, Nc = { class: "stat-count" }, Oc = {
  key: 2,
  class: "stat-item warning"
}, Ac = { class: "stat-count" }, Bc = {
  key: 3,
  class: "stat-item error"
}, Fc = { class: "stat-count" }, Vc = {
  key: 0,
  class: "status-message warning"
}, Wc = { class: "status-text" }, Gc = {
  key: 1,
  class: "status-message info"
}, jc = { class: "status-text" }, Hc = {
  key: 2,
  class: "status-message info"
}, Kc = { class: "status-text" }, qc = {
  key: 3,
  class: "status-message warning"
}, Yc = { class: "status-text" }, Jc = {
  key: 4,
  class: "status-message success"
}, Xc = {
  key: 5,
  class: "category-mismatch-section"
}, Qc = { class: "mismatch-list" }, Zc = { class: "mismatch-path" }, eu = { class: "mismatch-target" }, tu = {
  key: 3,
  class: "step-content"
}, su = { class: "review-summary" }, ou = { class: "review-stats" }, nu = { class: "review-stat" }, au = { class: "stat-value" }, lu = { class: "review-stat" }, iu = { class: "stat-value" }, ru = { class: "review-stat" }, du = { class: "stat-value" }, cu = { class: "review-stat" }, uu = { class: "stat-value" }, mu = {
  key: 0,
  class: "review-section"
}, vu = { class: "section-title" }, fu = { class: "review-items" }, pu = { class: "item-name" }, gu = { class: "item-choice" }, hu = {
  key: 0,
  class: "choice-badge install"
}, yu = {
  key: 1,
  class: "choice-badge skip"
}, wu = {
  key: 1,
  class: "review-section"
}, ku = { class: "section-title" }, bu = { class: "review-items" }, _u = { class: "item-name" }, $u = { class: "item-choice" }, Cu = {
  key: 0,
  class: "choice-badge install"
}, xu = {
  key: 1,
  class: "choice-badge optional"
}, Su = {
  key: 2,
  class: "choice-badge skip"
}, Iu = {
  key: 1,
  class: "choice-badge pending"
}, Eu = {
  key: 2,
  class: "review-section"
}, Pu = { class: "section-title" }, Mu = { class: "review-items" }, Ru = { class: "item-name" }, Tu = { class: "item-choice" }, Du = {
  key: 0,
  class: "choice-badge install"
}, Lu = {
  key: 1,
  class: "choice-badge download"
}, zu = {
  key: 2,
  class: "choice-badge optional"
}, Uu = {
  key: 3,
  class: "choice-badge skip"
}, Nu = {
  key: 4,
  class: "choice-badge skip"
}, Ou = {
  key: 1,
  class: "choice-badge download"
}, Au = {
  key: 2,
  class: "choice-badge pending"
}, Bu = {
  key: 3,
  class: "no-choices"
}, Fu = /* @__PURE__ */ oe({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(t, { emit: c }) {
    const n = t, i = c, { analyzeWorkflow: f, applyResolution: p, installNodes: u, queueModelDownloads: m, progress: d, resetProgress: v } = Hs(), { loadPendingDownloads: y } = os(), { openFileLocation: k } = He(), _ = h(null), b = h(!1), T = h(!1), P = h(null), $ = h("analysis"), C = h([]), B = h(/* @__PURE__ */ new Map()), x = h(/* @__PURE__ */ new Map()), R = h(/* @__PURE__ */ new Set()), q = U(() => {
      const Y = [
        { id: "analysis", label: "Analysis" }
      ];
      return (G.value || O.value) && Y.push({ id: "nodes", label: "Nodes" }), (I.value || D.value) && Y.push({ id: "models", label: "Models" }), Y.push({ id: "review", label: "Review" }), $.value === "applying" && Y.push({ id: "applying", label: "Applying" }), Y;
    }), A = U(() => _.value ? _.value.stats.needs_user_input : !1), G = U(() => _.value ? _.value.nodes.unresolved.length > 0 || _.value.nodes.ambiguous.length > 0 : !1), I = U(() => _.value ? _.value.models.unresolved.length > 0 || _.value.models.ambiguous.length > 0 : !1), D = U(() => _.value ? _.value.stats.download_intents > 0 : !1), O = U(() => _.value ? _.value.stats.nodes_needing_installation > 0 : !1), ie = U(() => _.value ? _.value.nodes.resolved.length : 0), te = U(() => _.value ? _.value.models.resolved.filter((Y) => Y.has_category_mismatch) : []), J = U(() => te.value.length > 0), re = U(() => {
      if (!_.value) return [];
      const Y = _.value.nodes.resolved.filter((F) => !F.is_installed), E = /* @__PURE__ */ new Set();
      return Y.filter((F) => E.has(F.package.package_id) ? !1 : (E.add(F.package.package_id), !0));
    }), X = U(() => {
      if (!_.value) return [];
      const Y = _.value.nodes.resolved.filter((F) => !F.is_installed), E = /* @__PURE__ */ new Map();
      for (const F of Y) {
        const ee = E.get(F.package.package_id);
        ee ? ee.node_types_count++ : E.set(F.package.package_id, {
          package_id: F.package.package_id,
          title: F.package.title,
          node_types_count: 1
        });
      }
      return Array.from(E.values());
    }), z = U(() => re.value.filter((Y) => !R.value.has(Y.package.package_id))), L = U(() => _.value ? _.value.models.resolved.filter((Y) => Y.match_type === "download_intent").map((Y) => ({
      filename: Y.reference.widget_value,
      reference: Y.reference,
      is_download_intent: !0,
      resolved_model: Y.model,
      download_source: Y.download_source,
      target_path: Y.target_path
    })) : []), S = U(() => {
      if (!_.value) return [];
      const Y = _.value.nodes.unresolved.map((F) => ({
        node_type: F.reference.node_type,
        reason: F.reason,
        is_unresolved: !0,
        options: void 0
      })), E = _.value.nodes.ambiguous.map((F) => ({
        node_type: F.reference.node_type,
        has_multiple_options: !0,
        options: F.options.map((ee) => ({
          package_id: ee.package.package_id,
          title: ee.package.title,
          match_confidence: ee.match_confidence,
          match_type: ee.match_type,
          is_installed: ee.is_installed
        }))
      }));
      return [...Y, ...E];
    }), de = U(() => {
      if (!_.value) return [];
      const Y = _.value.models.unresolved.map((F) => ({
        filename: F.reference.widget_value,
        reference: F.reference,
        reason: F.reason,
        is_unresolved: !0,
        options: void 0
      })), E = _.value.models.ambiguous.map((F) => ({
        filename: F.reference.widget_value,
        reference: F.reference,
        has_multiple_options: !0,
        options: F.options.map((ee) => ({
          model: ee.model,
          match_confidence: ee.match_confidence,
          match_type: ee.match_type,
          has_download_source: ee.has_download_source
        }))
      }));
      return [...Y, ...E];
    }), Z = U(() => {
      const Y = de.value, E = L.value.map((F) => ({
        filename: F.filename,
        reference: F.reference,
        is_download_intent: !0,
        resolved_model: F.resolved_model,
        download_source: F.download_source,
        target_path: F.target_path,
        options: void 0
      }));
      return [...Y, ...E];
    }), be = U(() => {
      let Y = z.value.length;
      for (const E of B.value.values())
        E.action === "install" && Y++;
      for (const E of x.value.values())
        E.action === "select" && Y++;
      return Y;
    }), xe = U(() => {
      let Y = 0;
      for (const E of x.value.values())
        E.action === "download" && Y++;
      return Y;
    }), Ie = U(() => {
      let Y = 0;
      for (const E of B.value.values())
        E.action === "optional" && Y++;
      for (const E of x.value.values())
        E.action === "optional" && Y++;
      return Y;
    }), Oe = U(() => {
      let Y = R.value.size;
      for (const E of B.value.values())
        E.action === "skip" && Y++;
      for (const E of x.value.values())
        E.action === "skip" && Y++;
      for (const E of S.value)
        B.value.has(E.node_type) || Y++;
      for (const E of de.value)
        x.value.has(E.filename) || Y++;
      return Y;
    }), me = U(() => {
      const Y = {};
      if (Y.analysis = { resolved: 1, total: 1 }, G.value) {
        const E = S.value.length, F = S.value.filter(
          (ee) => B.value.has(ee.node_type)
        ).length;
        Y.nodes = { resolved: F, total: E };
      }
      if (I.value || D.value) {
        const E = Z.value.length, F = Z.value.filter(
          (ee) => x.value.has(ee.filename) || ee.is_download_intent
        ).length;
        Y.models = { resolved: F, total: E };
      }
      if (Y.review = { resolved: 1, total: 1 }, $.value === "applying") {
        const E = d.totalFiles || 1, F = d.completedFiles.length;
        Y.applying = { resolved: F, total: E };
      }
      return Y;
    });
    function he(Y) {
      $.value = Y;
    }
    function we() {
      const Y = q.value.findIndex((E) => E.id === $.value);
      Y > 0 && ($.value = q.value[Y - 1].id);
    }
    function Q() {
      const Y = q.value.findIndex((E) => E.id === $.value);
      Y < q.value.length - 1 && ($.value = q.value[Y + 1].id);
    }
    async function le() {
      b.value = !0, P.value = null;
      try {
        _.value = await f(n.workflowName);
      } catch (Y) {
        P.value = Y instanceof Error ? Y.message : "Failed to analyze workflow";
      } finally {
        b.value = !1;
      }
    }
    function ke() {
      C.value.includes("analysis") || C.value.push("analysis"), G.value || O.value ? $.value = "nodes" : I.value || D.value ? $.value = "models" : $.value = "review";
    }
    function Ue(Y) {
      B.value.set(Y, { action: "optional" });
    }
    function nt(Y) {
      B.value.set(Y, { action: "skip" });
    }
    function Je(Y, E) {
      var ee;
      const F = S.value.find((_e) => _e.node_type === Y);
      (ee = F == null ? void 0 : F.options) != null && ee[E] && B.value.set(Y, {
        action: "install",
        package_id: F.options[E].package_id
      });
    }
    function Pe(Y, E) {
      B.value.set(Y, {
        action: "install",
        package_id: E
      });
    }
    function at(Y) {
      B.value.delete(Y);
    }
    function Ze(Y) {
      R.value.has(Y) ? R.value.delete(Y) : R.value.add(Y);
    }
    function Ke(Y) {
      x.value.set(Y, { action: "optional" });
    }
    function dt(Y) {
      x.value.set(Y, { action: "skip" });
    }
    function $e(Y, E) {
      var ee;
      const F = de.value.find((_e) => _e.filename === Y);
      (ee = F == null ? void 0 : F.options) != null && ee[E] && x.value.set(Y, {
        action: "select",
        selected_model: F.options[E].model
      });
    }
    function Ae(Y, E, F) {
      x.value.set(Y, {
        action: "download",
        url: E,
        target_path: F
      });
    }
    function lt(Y) {
      x.value.delete(Y);
    }
    async function it(Y) {
      try {
        await k(Y);
      } catch (E) {
        P.value = E instanceof Error ? E.message : "Failed to open file location";
      }
    }
    async function Le() {
      var Y;
      T.value = !0, P.value = null, v(), d.phase = "resolving", $.value = "applying";
      try {
        const E = await p(n.workflowName, B.value, x.value, R.value);
        E.models_to_download && E.models_to_download.length > 0 && m(n.workflowName, E.models_to_download);
        const F = [
          ...E.nodes_to_install || [],
          ...z.value.map((_e) => _e.package.package_id)
        ];
        d.nodesToInstall = [...new Set(F)], d.nodesToInstall.length > 0 && await u(n.workflowName), d.phase = "complete", await y();
        const ee = d.installError || ((Y = d.nodeInstallProgress) == null ? void 0 : Y.completedNodes.some((_e) => !_e.success));
        !d.needsRestart && !ee && setTimeout(() => {
          i("refresh"), i("install"), i("close");
        }, 1500);
      } catch (E) {
        P.value = E instanceof Error ? E.message : "Failed to apply resolution", d.error = P.value, d.phase = "error";
      } finally {
        T.value = !1;
      }
    }
    function ve() {
      i("refresh"), i("restart"), i("close");
    }
    async function K() {
      var E;
      const Y = ((E = d.nodeInstallProgress) == null ? void 0 : E.completedNodes.filter((F) => !F.success).map((F) => F.node_id)) || [];
      if (Y.length !== 0) {
        d.phase = "installing", d.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: Y.length
        }, d.nodesToInstall = Y, d.nodesInstalled = [], d.installError = void 0;
        try {
          await u(n.workflowName), d.phase = "complete";
        } catch (F) {
          d.error = F instanceof Error ? F.message : "Retry failed", d.phase = "error";
        }
      }
    }
    return We(le), (Y, E) => (s(), M(ot, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: b.value,
      error: P.value || void 0,
      "fixed-height": !0,
      onClose: E[1] || (E[1] = (F) => i("close"))
    }, {
      body: l(() => [
        b.value && !_.value ? (s(), o("div", vc, [...E[2] || (E[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : _.value ? (s(), o("div", fc, [
          w(bi, {
            steps: q.value,
            "current-step": $.value,
            "completed-steps": C.value,
            "step-stats": me.value,
            onStepChange: he
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          $.value === "analysis" ? (s(), o("div", pc, [
            e("div", gc, [
              e("div", hc, [
                E[3] || (E[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", yc, " Found " + a(_.value.stats.total_nodes) + " nodes and " + a(_.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", wc, [
                e("div", kc, [
                  E[12] || (E[12] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", bc, [
                    ie.value > 0 ? (s(), o("div", _c, [
                      E[4] || (E[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", $c, a(ie.value), 1),
                      E[5] || (E[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ])) : r("", !0),
                    _.value.stats.packages_needing_installation > 0 ? (s(), o("div", Cc, [
                      E[6] || (E[6] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", xc, a(_.value.stats.packages_needing_installation), 1),
                      E[7] || (E[7] = e("span", { class: "stat-label" }, "to install", -1))
                    ])) : r("", !0),
                    _.value.nodes.ambiguous.length > 0 ? (s(), o("div", Sc, [
                      E[8] || (E[8] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Ic, a(_.value.nodes.ambiguous.length), 1),
                      E[9] || (E[9] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : r("", !0),
                    _.value.nodes.unresolved.length > 0 ? (s(), o("div", Ec, [
                      E[10] || (E[10] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Pc, a(_.value.nodes.unresolved.length), 1),
                      E[11] || (E[11] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : r("", !0)
                  ])
                ]),
                e("div", Mc, [
                  E[23] || (E[23] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", Rc, [
                    e("div", Tc, [
                      E[13] || (E[13] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Dc, a(_.value.models.resolved.length - _.value.stats.download_intents - _.value.stats.models_with_category_mismatch), 1),
                      E[14] || (E[14] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    _.value.stats.download_intents > 0 ? (s(), o("div", Lc, [
                      E[15] || (E[15] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", zc, a(_.value.stats.download_intents), 1),
                      E[16] || (E[16] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : r("", !0),
                    J.value ? (s(), o("div", Uc, [
                      E[17] || (E[17] = e("span", { class: "stat-icon" }, "⚠", -1)),
                      e("span", Nc, a(te.value.length), 1),
                      E[18] || (E[18] = e("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : r("", !0),
                    _.value.models.ambiguous.length > 0 ? (s(), o("div", Oc, [
                      E[19] || (E[19] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Ac, a(_.value.models.ambiguous.length), 1),
                      E[20] || (E[20] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : r("", !0),
                    _.value.models.unresolved.length > 0 ? (s(), o("div", Bc, [
                      E[21] || (E[21] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Fc, a(_.value.models.unresolved.length), 1),
                      E[22] || (E[22] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : r("", !0)
                  ])
                ])
              ]),
              A.value ? (s(), o("div", Vc, [
                E[24] || (E[24] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Wc, a(S.value.length + de.value.length) + " items need your input", 1)
              ])) : O.value ? (s(), o("div", Gc, [
                E[25] || (E[25] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", jc, a(_.value.stats.packages_needing_installation) + " package" + a(_.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + a(_.value.stats.nodes_needing_installation) + " node type" + a(_.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + a(D.value ? `, ${_.value.stats.download_intents} model${_.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : D.value ? (s(), o("div", Hc, [
                E[26] || (E[26] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Kc, a(_.value.stats.download_intents) + " model" + a(_.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : J.value ? (s(), o("div", qc, [
                E[27] || (E[27] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Yc, a(te.value.length) + " model" + a(te.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (s(), o("div", Jc, [...E[28] || (E[28] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              J.value ? (s(), o("div", Xc, [
                E[31] || (E[31] = e("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                e("div", Qc, [
                  (s(!0), o(W, null, ne(te.value, (F) => {
                    var ee, _e;
                    return s(), o("div", {
                      key: F.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      e("code", Zc, a(F.actual_category) + "/" + a((ee = F.model) == null ? void 0 : ee.filename), 1),
                      E[30] || (E[30] = e("span", { class: "mismatch-arrow" }, "→", -1)),
                      e("code", eu, a((_e = F.expected_categories) == null ? void 0 : _e[0]) + "/", 1),
                      F.file_path ? (s(), M(ge, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (Ge) => it(F.file_path)
                      }, {
                        default: l(() => [...E[29] || (E[29] = [
                          g(" Open File Location ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : r("", !0)
                    ]);
                  }), 128))
                ])
              ])) : r("", !0)
            ])
          ])) : r("", !0),
          $.value === "nodes" ? (s(), M(Vr, {
            key: 1,
            nodes: S.value,
            "node-choices": B.value,
            "auto-resolved-packages": X.value,
            "skipped-packages": R.value,
            onMarkOptional: Ue,
            onSkip: nt,
            onOptionSelected: Je,
            onManualEntry: Pe,
            onClearChoice: at,
            onPackageSkip: Ze
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : r("", !0),
          $.value === "models" ? (s(), M(zd, {
            key: 2,
            models: Z.value,
            "model-choices": x.value,
            onMarkOptional: Ke,
            onSkip: dt,
            onOptionSelected: $e,
            onDownloadUrl: Ae,
            onClearChoice: lt
          }, null, 8, ["models", "model-choices"])) : r("", !0),
          $.value === "review" ? (s(), o("div", tu, [
            e("div", su, [
              E[36] || (E[36] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", ou, [
                e("div", nu, [
                  e("span", au, a(be.value), 1),
                  E[32] || (E[32] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", lu, [
                  e("span", iu, a(xe.value), 1),
                  E[33] || (E[33] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", ru, [
                  e("span", du, a(Ie.value), 1),
                  E[34] || (E[34] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", cu, [
                  e("span", uu, a(Oe.value), 1),
                  E[35] || (E[35] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              X.value.length > 0 ? (s(), o("div", mu, [
                e("h4", vu, "Node Packages (" + a(X.value.length) + ")", 1),
                e("div", fu, [
                  (s(!0), o(W, null, ne(X.value, (F) => (s(), o("div", {
                    key: F.package_id,
                    class: "review-item"
                  }, [
                    e("code", pu, a(F.package_id), 1),
                    e("div", gu, [
                      R.value.has(F.package_id) ? (s(), o("span", yu, "Skipped")) : (s(), o("span", hu, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : r("", !0),
              S.value.length > 0 ? (s(), o("div", wu, [
                e("h4", ku, "Node Choices (" + a(S.value.length) + ")", 1),
                e("div", bu, [
                  (s(!0), o(W, null, ne(S.value, (F) => {
                    var ee, _e, Ge, ce;
                    return s(), o("div", {
                      key: F.node_type,
                      class: "review-item"
                    }, [
                      e("code", _u, a(F.node_type), 1),
                      e("div", $u, [
                        B.value.has(F.node_type) ? (s(), o(W, { key: 0 }, [
                          ((ee = B.value.get(F.node_type)) == null ? void 0 : ee.action) === "install" ? (s(), o("span", Cu, a((_e = B.value.get(F.node_type)) == null ? void 0 : _e.package_id), 1)) : ((Ge = B.value.get(F.node_type)) == null ? void 0 : Ge.action) === "optional" ? (s(), o("span", xu, " Optional ")) : ((ce = B.value.get(F.node_type)) == null ? void 0 : ce.action) === "skip" ? (s(), o("span", Su, " Skip ")) : r("", !0)
                        ], 64)) : (s(), o("span", Iu, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : r("", !0),
              Z.value.length > 0 ? (s(), o("div", Eu, [
                e("h4", Pu, "Models (" + a(Z.value.length) + ")", 1),
                e("div", Mu, [
                  (s(!0), o(W, null, ne(Z.value, (F) => {
                    var ee, _e, Ge, ce, V, ze, qe;
                    return s(), o("div", {
                      key: F.filename,
                      class: "review-item"
                    }, [
                      e("code", Ru, a(F.filename), 1),
                      e("div", Tu, [
                        x.value.has(F.filename) ? (s(), o(W, { key: 0 }, [
                          ((ee = x.value.get(F.filename)) == null ? void 0 : ee.action) === "select" ? (s(), o("span", Du, a((Ge = (_e = x.value.get(F.filename)) == null ? void 0 : _e.selected_model) == null ? void 0 : Ge.filename), 1)) : ((ce = x.value.get(F.filename)) == null ? void 0 : ce.action) === "download" ? (s(), o("span", Lu, " Download ")) : ((V = x.value.get(F.filename)) == null ? void 0 : V.action) === "optional" ? (s(), o("span", zu, " Optional ")) : ((ze = x.value.get(F.filename)) == null ? void 0 : ze.action) === "skip" ? (s(), o("span", Uu, " Skip ")) : ((qe = x.value.get(F.filename)) == null ? void 0 : qe.action) === "cancel_download" ? (s(), o("span", Nu, " Cancel Download ")) : r("", !0)
                        ], 64)) : F.is_download_intent ? (s(), o("span", Ou, " Pending Download ")) : (s(), o("span", Au, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : r("", !0),
              re.value.length === 0 && S.value.length === 0 && Z.value.length === 0 ? (s(), o("div", Bu, " No dependencies need resolution. ")) : r("", !0)
            ])
          ])) : r("", !0),
          $.value === "applying" ? (s(), M(mc, {
            key: 4,
            progress: Ee(d),
            onRestart: ve,
            onRetryFailed: K
          }, null, 8, ["progress"])) : r("", !0)
        ])) : r("", !0)
      ]),
      footer: l(() => [
        $.value !== "analysis" && $.value !== "applying" ? (s(), M(ge, {
          key: 0,
          variant: "secondary",
          disabled: T.value,
          onClick: we
        }, {
          default: l(() => [...E[37] || (E[37] = [
            g(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : r("", !0),
        E[41] || (E[41] = e("div", { class: "footer-spacer" }, null, -1)),
        $.value !== "applying" || Ee(d).phase === "complete" || Ee(d).phase === "error" ? (s(), M(ge, {
          key: 1,
          variant: "secondary",
          onClick: E[0] || (E[0] = (F) => i("close"))
        }, {
          default: l(() => [
            g(a(Ee(d).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : r("", !0),
        $.value === "analysis" ? (s(), M(ge, {
          key: 2,
          variant: "primary",
          disabled: b.value,
          onClick: ke
        }, {
          default: l(() => [...E[38] || (E[38] = [
            g(" Continue ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : r("", !0),
        $.value === "nodes" ? (s(), M(ge, {
          key: 3,
          variant: "primary",
          onClick: Q
        }, {
          default: l(() => [
            g(a(I.value || D.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : r("", !0),
        $.value === "models" ? (s(), M(ge, {
          key: 4,
          variant: "primary",
          onClick: Q
        }, {
          default: l(() => [...E[39] || (E[39] = [
            g(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : r("", !0),
        $.value === "review" ? (s(), M(ge, {
          key: 5,
          variant: "primary",
          disabled: T.value,
          loading: T.value,
          onClick: Le
        }, {
          default: l(() => [...E[40] || (E[40] = [
            g(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : r("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Vu = /* @__PURE__ */ ae(Fu, [["__scopeId", "data-v-6276cf1d"]]), Wu = { class: "search-input-wrapper" }, Gu = ["value", "placeholder"], ju = /* @__PURE__ */ oe({
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
    const n = t, i = c, f = h(null);
    let p;
    function u(d) {
      const v = d.target.value;
      n.debounce > 0 ? (clearTimeout(p), p = window.setTimeout(() => {
        i("update:modelValue", v);
      }, n.debounce)) : i("update:modelValue", v);
    }
    function m() {
      var d;
      i("update:modelValue", ""), i("clear"), (d = f.value) == null || d.focus();
    }
    return We(() => {
      n.autoFocus && f.value && f.value.focus();
    }), (d, v) => (s(), o("div", Wu, [
      e("input", {
        ref_key: "inputRef",
        ref: f,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: u,
        onKeyup: $t(m, ["escape"])
      }, null, 40, Gu),
      t.clearable && t.modelValue ? (s(), o("button", {
        key: 0,
        class: "clear-button",
        onClick: m,
        title: "Clear search"
      }, " ✕ ")) : r("", !0)
    ]));
  }
}), Hu = /* @__PURE__ */ ae(ju, [["__scopeId", "data-v-266f857a"]]), Ku = { class: "search-bar" }, qu = /* @__PURE__ */ oe({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (c, n) => (s(), o("div", Ku, [
      w(Hu, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": n[0] || (n[0] = (i) => c.$emit("update:modelValue", i)),
        onClear: n[1] || (n[1] = (i) => c.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), Kt = /* @__PURE__ */ ae(qu, [["__scopeId", "data-v-3d51bbfd"]]), Yu = { class: "section-group" }, Ju = {
  key: 0,
  class: "section-content"
}, Xu = /* @__PURE__ */ oe({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: c }) {
    const n = t, i = c, f = h(n.initiallyExpanded);
    function p() {
      n.collapsible && (f.value = !f.value, i("toggle", f.value));
    }
    return (u, m) => (s(), o("section", Yu, [
      w(vt, {
        count: t.count,
        clickable: t.collapsible,
        expanded: f.value,
        onClick: p
      }, {
        default: l(() => [
          g(a(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || f.value ? (s(), o("div", Ju, [
        Me(u.$slots, "default", {}, void 0, !0)
      ])) : r("", !0)
    ]));
  }
}), Ne = /* @__PURE__ */ ae(Xu, [["__scopeId", "data-v-c48e33ed"]]), Qu = { class: "item-header" }, Zu = {
  key: 0,
  class: "item-icon"
}, em = { class: "item-info" }, tm = {
  key: 0,
  class: "item-title"
}, sm = {
  key: 1,
  class: "item-subtitle"
}, om = {
  key: 0,
  class: "item-details"
}, nm = {
  key: 1,
  class: "item-actions"
}, am = /* @__PURE__ */ oe({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: c }) {
    const n = t, i = U(() => n.status ? `status-${n.status}` : "");
    return (f, p) => (s(), o("div", {
      class: fe(["item-card", { clickable: t.clickable, compact: t.compact }, i.value]),
      onClick: p[0] || (p[0] = (u) => t.clickable && f.$emit("click"))
    }, [
      e("div", Qu, [
        f.$slots.icon ? (s(), o("span", Zu, [
          Me(f.$slots, "icon", {}, void 0, !0)
        ])) : r("", !0),
        e("div", em, [
          f.$slots.title ? (s(), o("div", tm, [
            Me(f.$slots, "title", {}, void 0, !0)
          ])) : r("", !0),
          f.$slots.subtitle ? (s(), o("div", sm, [
            Me(f.$slots, "subtitle", {}, void 0, !0)
          ])) : r("", !0)
        ])
      ]),
      f.$slots.details ? (s(), o("div", om, [
        Me(f.$slots, "details", {}, void 0, !0)
      ])) : r("", !0),
      f.$slots.actions ? (s(), o("div", nm, [
        Me(f.$slots, "actions", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), et = /* @__PURE__ */ ae(am, [["__scopeId", "data-v-cc435e0e"]]), lm = { class: "loading-state" }, im = { class: "loading-message" }, rm = /* @__PURE__ */ oe({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (c, n) => (s(), o("div", lm, [
      n[0] || (n[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", im, a(t.message), 1)
    ]));
  }
}), Pt = /* @__PURE__ */ ae(rm, [["__scopeId", "data-v-ad8436c9"]]), dm = { class: "error-state" }, cm = { class: "error-message" }, um = /* @__PURE__ */ oe({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (c, n) => (s(), o("div", dm, [
      n[2] || (n[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", cm, a(t.message), 1),
      t.retry ? (s(), M(se, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (i) => c.$emit("retry"))
      }, {
        default: l(() => [...n[1] || (n[1] = [
          g(" Retry ", -1)
        ])]),
        _: 1
      })) : r("", !0)
    ]));
  }
}), Mt = /* @__PURE__ */ ae(um, [["__scopeId", "data-v-5397be48"]]), mm = /* @__PURE__ */ oe({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: c, emit: n }) {
    const i = n, { getWorkflows: f } = He();
    Gs();
    const p = h([]), u = h(!1), m = h(null), d = h(""), v = h(!0), y = h(!1), k = h(!1), _ = h(!1), b = h(null), T = U(
      () => p.value.filter((z) => z.status === "broken")
    ), P = U(
      () => p.value.filter((z) => z.status === "new")
    ), $ = U(
      () => p.value.filter((z) => z.status === "modified")
    ), C = U(
      () => p.value.filter((z) => z.status === "synced")
    ), B = U(() => {
      if (!d.value.trim()) return p.value;
      const z = d.value.toLowerCase();
      return p.value.filter((L) => L.name.toLowerCase().includes(z));
    }), x = U(
      () => T.value.filter(
        (z) => !d.value.trim() || z.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), R = U(
      () => P.value.filter(
        (z) => !d.value.trim() || z.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), q = U(
      () => $.value.filter(
        (z) => !d.value.trim() || z.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), A = U(
      () => C.value.filter(
        (z) => !d.value.trim() || z.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), G = U(
      () => y.value ? A.value : A.value.slice(0, 5)
    );
    async function I(z = !1) {
      u.value = !0, m.value = null;
      try {
        p.value = await f(z);
      } catch (L) {
        m.value = L instanceof Error ? L.message : "Failed to load workflows";
      } finally {
        u.value = !1;
      }
    }
    c({ loadWorkflows: I });
    function D(z) {
      b.value = z, k.value = !0;
    }
    function O(z) {
      b.value = z, _.value = !0;
    }
    function ie() {
      i("refresh");
    }
    async function te() {
      _.value = !1, await I(!0);
    }
    async function J() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function re(z) {
      const L = [];
      return z.missing_nodes > 0 && L.push(`${z.missing_nodes} missing node${z.missing_nodes > 1 ? "s" : ""}`), z.missing_models > 0 && L.push(`${z.missing_models} missing model${z.missing_models > 1 ? "s" : ""}`), z.models_with_category_mismatch && z.models_with_category_mismatch > 0 && L.push(`${z.models_with_category_mismatch} model${z.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), z.pending_downloads && z.pending_downloads > 0 && L.push(`${z.pending_downloads} pending download${z.pending_downloads > 1 ? "s" : ""}`), L.length > 0 ? L.join(", ") : "Has issues";
    }
    function X(z) {
      const L = z.sync_state === "new" ? "New" : z.sync_state === "modified" ? "Modified" : z.sync_state === "synced" ? "Synced" : z.sync_state;
      return z.has_path_sync_issues && z.models_needing_path_sync && z.models_needing_path_sync > 0 ? `${z.models_needing_path_sync} model path${z.models_needing_path_sync > 1 ? "s" : ""} need${z.models_needing_path_sync === 1 ? "s" : ""} sync` : L || "Unknown";
    }
    return We(I), (z, L) => (s(), o(W, null, [
      w(tt, null, {
        header: l(() => [
          w(st, { title: "WORKFLOWS" })
        ]),
        search: l(() => [
          w(Kt, {
            modelValue: d.value,
            "onUpdate:modelValue": L[0] || (L[0] = (S) => d.value = S),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          u.value ? (s(), M(Pt, {
            key: 0,
            message: "Loading workflows..."
          })) : m.value ? (s(), M(Mt, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: I
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            x.value.length ? (s(), M(Ne, {
              key: 0,
              title: "BROKEN",
              count: x.value.length
            }, {
              default: l(() => [
                (s(!0), o(W, null, ne(x.value, (S) => (s(), M(et, {
                  key: S.name,
                  status: "broken"
                }, {
                  icon: l(() => [...L[7] || (L[7] = [
                    g("⚠", -1)
                  ])]),
                  title: l(() => [
                    g(a(S.name), 1)
                  ]),
                  subtitle: l(() => [
                    g(a(re(S)), 1)
                  ]),
                  actions: l(() => [
                    w(se, {
                      variant: "primary",
                      size: "sm",
                      onClick: (de) => O(S.name)
                    }, {
                      default: l(() => [...L[8] || (L[8] = [
                        g(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    w(se, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (de) => D(S.name)
                    }, {
                      default: l(() => [...L[9] || (L[9] = [
                        g(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            R.value.length ? (s(), M(Ne, {
              key: 1,
              title: "NEW",
              count: R.value.length
            }, {
              default: l(() => [
                (s(!0), o(W, null, ne(R.value, (S) => (s(), M(et, {
                  key: S.name,
                  status: S.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: l(() => [
                    g(a(S.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: l(() => [
                    g(a(S.name), 1)
                  ]),
                  subtitle: l(() => [
                    g(a(X(S)), 1)
                  ]),
                  actions: l(() => [
                    w(se, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (de) => D(S.name)
                    }, {
                      default: l(() => [...L[10] || (L[10] = [
                        g(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            q.value.length ? (s(), M(Ne, {
              key: 2,
              title: "MODIFIED",
              count: q.value.length
            }, {
              default: l(() => [
                (s(!0), o(W, null, ne(q.value, (S) => (s(), M(et, {
                  key: S.name,
                  status: S.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: l(() => [...L[11] || (L[11] = [
                    g("⚡", -1)
                  ])]),
                  title: l(() => [
                    g(a(S.name), 1)
                  ]),
                  subtitle: l(() => [
                    g(a(X(S)), 1)
                  ]),
                  actions: l(() => [
                    w(se, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (de) => D(S.name)
                    }, {
                      default: l(() => [...L[12] || (L[12] = [
                        g(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            A.value.length ? (s(), M(Ne, {
              key: 3,
              title: "SYNCED",
              count: A.value.length,
              collapsible: !0,
              "initially-expanded": v.value,
              onToggle: L[2] || (L[2] = (S) => v.value = S)
            }, {
              default: l(() => [
                (s(!0), o(W, null, ne(G.value, (S) => (s(), M(et, {
                  key: S.name,
                  status: S.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: l(() => [
                    g(a(S.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: l(() => [
                    g(a(S.name), 1)
                  ]),
                  subtitle: l(() => [
                    g(a(X(S)), 1)
                  ]),
                  actions: l(() => [
                    w(se, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (de) => D(S.name)
                    }, {
                      default: l(() => [...L[13] || (L[13] = [
                        g(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !y.value && A.value.length > 5 ? (s(), M(se, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: L[1] || (L[1] = (S) => y.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: l(() => [
                    g(" View all " + a(A.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : r("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : r("", !0),
            B.value.length ? r("", !0) : (s(), M(yt, {
              key: 4,
              icon: "📭",
              message: d.value ? `No workflows match '${d.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      k.value && b.value ? (s(), M(di, {
        key: 0,
        "workflow-name": b.value,
        onClose: L[3] || (L[3] = (S) => k.value = !1),
        onResolve: L[4] || (L[4] = (S) => O(b.value)),
        onRefresh: L[5] || (L[5] = (S) => i("refresh"))
      }, null, 8, ["workflow-name"])) : r("", !0),
      _.value && b.value ? (s(), M(Vu, {
        key: 1,
        "workflow-name": b.value,
        onClose: te,
        onInstall: ie,
        onRefresh: L[6] || (L[6] = (S) => i("refresh")),
        onRestart: J
      }, null, 8, ["workflow-name"])) : r("", !0)
    ], 64));
  }
}), vm = /* @__PURE__ */ ae(mm, [["__scopeId", "data-v-fa3f076e"]]), fm = /* @__PURE__ */ oe({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (c, n) => (s(), o("div", {
      class: fe(["summary-bar", t.variant])
    }, [
      Me(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), ns = /* @__PURE__ */ ae(fm, [["__scopeId", "data-v-ccb7816e"]]), pm = {
  key: 0,
  class: "model-details"
}, gm = { class: "detail-section" }, hm = { class: "detail-row" }, ym = { class: "detail-value mono" }, wm = { class: "detail-row" }, km = { class: "detail-value mono" }, bm = { class: "detail-row" }, _m = { class: "detail-value mono" }, $m = { class: "detail-row" }, Cm = { class: "detail-value" }, xm = { class: "detail-row" }, Sm = { class: "detail-value" }, Im = { class: "detail-row" }, Em = { class: "detail-value" }, Pm = { class: "detail-section" }, Mm = { class: "section-header" }, Rm = {
  key: 0,
  class: "locations-list"
}, Tm = { class: "location-path mono" }, Dm = {
  key: 0,
  class: "location-modified"
}, Lm = ["onClick"], zm = {
  key: 1,
  class: "empty-state"
}, Um = { class: "detail-section" }, Nm = { class: "section-header" }, Om = {
  key: 0,
  class: "sources-list"
}, Am = { class: "source-type" }, Bm = ["href"], Fm = ["disabled", "onClick"], Vm = {
  key: 1,
  class: "empty-state"
}, Wm = { class: "add-source-form" }, Gm = ["disabled"], jm = {
  key: 2,
  class: "source-error"
}, Hm = {
  key: 3,
  class: "source-success"
}, Km = /* @__PURE__ */ oe({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = t, { getModelDetails: i, addModelSource: f, removeModelSource: p, openFileLocation: u } = He(), m = h(null), d = h(!0), v = h(null), y = h(""), k = h(!1), _ = h(null), b = h(null), T = h(null), P = h(null);
    let $ = null;
    function C(I, D = "success", O = 2e3) {
      $ && clearTimeout($), P.value = { message: I, type: D }, $ = setTimeout(() => {
        P.value = null;
      }, O);
    }
    function B(I) {
      if (!I) return "Unknown";
      const D = 1024 * 1024 * 1024, O = 1024 * 1024;
      return I >= D ? `${(I / D).toFixed(1)} GB` : I >= O ? `${(I / O).toFixed(0)} MB` : `${(I / 1024).toFixed(0)} KB`;
    }
    function x(I) {
      navigator.clipboard.writeText(I), C("Copied to clipboard!");
    }
    async function R(I) {
      try {
        await u(I), C("Opening file location...");
      } catch {
        C("Failed to open location", "error");
      }
    }
    async function q() {
      if (!(!y.value.trim() || !m.value)) {
        k.value = !0, b.value = null, T.value = null;
        try {
          await f(m.value.hash, y.value.trim()), T.value = "Source added successfully!", y.value = "", await G();
        } catch (I) {
          b.value = I instanceof Error ? I.message : "Failed to add source";
        } finally {
          k.value = !1;
        }
      }
    }
    async function A(I) {
      if (m.value) {
        _.value = I, b.value = null, T.value = null;
        try {
          await p(m.value.hash, I), C("Source removed"), await G();
        } catch (D) {
          b.value = D instanceof Error ? D.message : "Failed to remove source";
        } finally {
          _.value = null;
        }
      }
    }
    async function G() {
      d.value = !0, v.value = null;
      try {
        m.value = await i(n.identifier);
      } catch (I) {
        v.value = I instanceof Error ? I.message : "Failed to load model details";
      } finally {
        d.value = !1;
      }
    }
    return We(G), (I, D) => {
      var O;
      return s(), o(W, null, [
        w(ot, {
          title: `Model Details: ${((O = m.value) == null ? void 0 : O.filename) || "Loading..."}`,
          size: "lg",
          loading: d.value,
          error: v.value,
          onClose: D[5] || (D[5] = (ie) => I.$emit("close"))
        }, {
          body: l(() => {
            var ie, te, J, re;
            return [
              m.value ? (s(), o("div", pm, [
                e("section", gm, [
                  e("div", hm, [
                    D[6] || (D[6] = e("span", { class: "detail-label" }, "Hash:", -1)),
                    e("span", ym, a(m.value.hash || "Not computed"), 1),
                    m.value.hash ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: D[0] || (D[0] = (X) => x(m.value.hash))
                    }, "Copy")) : r("", !0)
                  ]),
                  e("div", wm, [
                    D[7] || (D[7] = e("span", { class: "detail-label" }, "Blake3:", -1)),
                    e("span", km, a(m.value.blake3 || "Not computed"), 1),
                    m.value.blake3 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: D[1] || (D[1] = (X) => x(m.value.blake3))
                    }, "Copy")) : r("", !0)
                  ]),
                  e("div", bm, [
                    D[8] || (D[8] = e("span", { class: "detail-label" }, "SHA256:", -1)),
                    e("span", _m, a(m.value.sha256 || "Not computed"), 1),
                    m.value.sha256 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: D[2] || (D[2] = (X) => x(m.value.sha256))
                    }, "Copy")) : r("", !0)
                  ]),
                  e("div", $m, [
                    D[9] || (D[9] = e("span", { class: "detail-label" }, "Size:", -1)),
                    e("span", Cm, a(B(m.value.size)), 1)
                  ]),
                  e("div", xm, [
                    D[10] || (D[10] = e("span", { class: "detail-label" }, "Category:", -1)),
                    e("span", Sm, a(m.value.category), 1)
                  ]),
                  e("div", Im, [
                    D[11] || (D[11] = e("span", { class: "detail-label" }, "Last Seen:", -1)),
                    e("span", Em, a(m.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                e("section", Pm, [
                  e("h4", Mm, "Locations (" + a(((ie = m.value.locations) == null ? void 0 : ie.length) || 0) + ")", 1),
                  (te = m.value.locations) != null && te.length ? (s(), o("div", Rm, [
                    (s(!0), o(W, null, ne(m.value.locations, (X, z) => (s(), o("div", {
                      key: z,
                      class: "location-item"
                    }, [
                      e("span", Tm, a(X.path), 1),
                      X.modified ? (s(), o("span", Dm, "Modified: " + a(X.modified), 1)) : r("", !0),
                      X.path ? (s(), o("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (L) => R(X.path)
                      }, " Open File Location ", 8, Lm)) : r("", !0)
                    ]))), 128))
                  ])) : (s(), o("div", zm, "No locations found"))
                ]),
                e("section", Um, [
                  e("h4", Nm, "Download Sources (" + a(((J = m.value.sources) == null ? void 0 : J.length) || 0) + ")", 1),
                  (re = m.value.sources) != null && re.length ? (s(), o("div", Om, [
                    (s(!0), o(W, null, ne(m.value.sources, (X, z) => (s(), o("div", {
                      key: z,
                      class: "source-item"
                    }, [
                      e("span", Am, a(X.type) + ":", 1),
                      e("a", {
                        href: X.url,
                        target: "_blank",
                        class: "source-url"
                      }, a(X.url), 9, Bm),
                      e("button", {
                        class: "remove-source-btn",
                        disabled: _.value === X.url,
                        onClick: (L) => A(X.url)
                      }, a(_.value === X.url ? "..." : "×"), 9, Fm)
                    ]))), 128))
                  ])) : (s(), o("div", Vm, " No download sources configured ")),
                  e("div", Wm, [
                    De(e("input", {
                      "onUpdate:modelValue": D[3] || (D[3] = (X) => y.value = X),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [Dt, y.value]
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      disabled: !y.value.trim() || k.value,
                      onClick: q
                    }, a(k.value ? "Adding..." : "Add Source"), 9, Gm)
                  ]),
                  b.value ? (s(), o("p", jm, a(b.value), 1)) : r("", !0),
                  T.value ? (s(), o("p", Hm, a(T.value), 1)) : r("", !0)
                ])
              ])) : r("", !0)
            ];
          }),
          footer: l(() => [
            e("button", {
              class: "btn-secondary",
              onClick: D[4] || (D[4] = (ie) => I.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (s(), M(Ye, { to: "body" }, [
          P.value ? (s(), o("div", {
            key: 0,
            class: fe(["toast", P.value.type])
          }, a(P.value.message), 3)) : r("", !0)
        ]))
      ], 64);
    };
  }
}), Cs = /* @__PURE__ */ ae(Km, [["__scopeId", "data-v-f15cbb56"]]), qm = /* @__PURE__ */ oe({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: c }) {
    const n = c, { getEnvironmentModels: i, getStatus: f } = He(), p = h([]), u = h([]), m = h("production"), d = h(!1), v = h(null), y = h(""), k = h(!1), _ = h(null);
    function b() {
      k.value = !1, n("navigate", "model-index");
    }
    const T = U(
      () => p.value.reduce((G, I) => G + (I.size || 0), 0)
    ), P = U(() => {
      if (!y.value.trim()) return p.value;
      const G = y.value.toLowerCase();
      return p.value.filter((I) => I.filename.toLowerCase().includes(G));
    }), $ = U(() => {
      if (!y.value.trim()) return u.value;
      const G = y.value.toLowerCase();
      return u.value.filter((I) => I.filename.toLowerCase().includes(G));
    }), C = U(() => {
      const G = {};
      for (const D of P.value) {
        const O = D.type || "other";
        G[O] || (G[O] = []), G[O].push(D);
      }
      const I = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(G).sort(([D], [O]) => {
        const ie = I.indexOf(D), te = I.indexOf(O);
        return ie >= 0 && te >= 0 ? ie - te : ie >= 0 ? -1 : te >= 0 ? 1 : D.localeCompare(O);
      }).map(([D, O]) => ({ type: D, models: O }));
    });
    function B(G) {
      if (!G) return "Unknown";
      const I = G / (1024 * 1024);
      return I >= 1024 ? `${(I / 1024).toFixed(1)} GB` : `${I.toFixed(0)} MB`;
    }
    function x(G) {
      _.value = G.hash || G.filename;
    }
    function R(G) {
      n("navigate", "model-index");
    }
    function q(G) {
      alert(`Download functionality not yet implemented for ${G}`);
    }
    async function A() {
      d.value = !0, v.value = null;
      try {
        const G = await i();
        p.value = G, u.value = [];
        const I = await f();
        m.value = I.environment || "production";
      } catch (G) {
        v.value = G instanceof Error ? G.message : "Failed to load models";
      } finally {
        d.value = !1;
      }
    }
    return We(A), (G, I) => (s(), o(W, null, [
      w(tt, null, {
        header: l(() => [
          w(st, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: I[0] || (I[0] = (D) => k.value = !0)
          })
        ]),
        search: l(() => [
          w(Kt, {
            modelValue: y.value,
            "onUpdate:modelValue": I[1] || (I[1] = (D) => y.value = D),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          d.value ? (s(), M(Pt, {
            key: 0,
            message: "Loading environment models..."
          })) : v.value ? (s(), M(Mt, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: A
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            p.value.length ? (s(), M(ns, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                g(" Total: " + a(p.value.length) + " models • " + a(B(T.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : r("", !0),
            (s(!0), o(W, null, ne(C.value, (D) => (s(), M(Ne, {
              key: D.type,
              title: D.type.toUpperCase(),
              count: D.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(W, null, ne(D.models, (O) => (s(), M(et, {
                  key: O.hash || O.filename,
                  status: "synced"
                }, {
                  icon: l(() => [...I[4] || (I[4] = [
                    g("📦", -1)
                  ])]),
                  title: l(() => [
                    g(a(O.filename), 1)
                  ]),
                  subtitle: l(() => [
                    g(a(B(O.size)), 1)
                  ]),
                  details: l(() => [
                    w(Ve, {
                      label: "Used by:",
                      value: (O.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    w(Ve, {
                      label: "Path:",
                      value: O.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    w(se, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ie) => x(O)
                    }, {
                      default: l(() => [...I[5] || (I[5] = [
                        g(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 2
            }, 1032, ["title", "count"]))), 128)),
            $.value.length ? (s(), M(Ne, {
              key: 1,
              title: "MISSING",
              count: $.value.length
            }, {
              default: l(() => [
                (s(!0), o(W, null, ne($.value, (D) => (s(), M(et, {
                  key: D.filename,
                  status: "broken"
                }, {
                  icon: l(() => [...I[6] || (I[6] = [
                    g("⚠", -1)
                  ])]),
                  title: l(() => [
                    g(a(D.filename), 1)
                  ]),
                  subtitle: l(() => [...I[7] || (I[7] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: l(() => {
                    var O;
                    return [
                      w(Ve, {
                        label: "Required by:",
                        value: ((O = D.workflow_names) == null ? void 0 : O.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: l(() => [
                    w(se, {
                      variant: "primary",
                      size: "sm",
                      onClick: (O) => q(D.filename)
                    }, {
                      default: l(() => [...I[8] || (I[8] = [
                        g(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    w(se, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (O) => R(D.filename)
                    }, {
                      default: l(() => [...I[9] || (I[9] = [
                        g(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            !P.value.length && !$.value.length ? (s(), M(yt, {
              key: 2,
              icon: "📭",
              message: y.value ? `No models match '${y.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : r("", !0)
          ], 64))
        ]),
        _: 1
      }),
      w(wt, {
        show: k.value,
        title: "About Environment Models",
        onClose: I[2] || (I[2] = (D) => k.value = !1)
      }, {
        content: l(() => [
          e("p", null, [
            I[10] || (I[10] = g(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + a(m.value) + '"', 1),
            I[11] || (I[11] = g(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: l(() => [
          w(se, {
            variant: "primary",
            onClick: b
          }, {
            default: l(() => [...I[12] || (I[12] = [
              g(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      _.value ? (s(), M(Cs, {
        key: 0,
        identifier: _.value,
        onClose: I[3] || (I[3] = (D) => _.value = null)
      }, null, 8, ["identifier"])) : r("", !0)
    ], 64));
  }
}), Ym = /* @__PURE__ */ ae(qm, [["__scopeId", "data-v-cb4f12b3"]]), Jm = {
  key: 0,
  class: "indexing-progress"
}, Xm = { class: "progress-info" }, Qm = { class: "progress-label" }, Zm = { class: "progress-count" }, ev = { class: "progress-bar" }, tv = { class: "modal-content" }, sv = { class: "modal-header" }, ov = { class: "modal-body" }, nv = { class: "input-group" }, av = { class: "current-path" }, lv = { class: "input-group" }, iv = { class: "modal-footer" }, rv = { class: "modal-content" }, dv = { class: "modal-header" }, cv = { class: "modal-body" }, uv = { class: "input-group" }, mv = { class: "input-group" }, vv = { class: "modal-footer" }, fv = /* @__PURE__ */ oe({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(t, { emit: c }) {
    const {
      getWorkspaceModels: n,
      scanWorkspaceModels: i,
      getModelsDirectory: f,
      setModelsDirectory: p
    } = He(), { addToQueue: u } = os(), m = c, d = h([]), v = h(!1), y = h(!1), k = h(null), _ = h(""), b = h(!1), T = h(null), P = h(!1), $ = h(null), C = h(""), B = h(!1), x = h(!1), R = h(""), q = h(""), A = h(null), G = U(
      () => d.value.reduce((L, S) => L + (S.size || 0), 0)
    ), I = U(() => {
      if (!_.value.trim()) return d.value;
      const L = _.value.toLowerCase();
      return d.value.filter((S) => {
        const de = S, Z = S.sha256 || de.sha256_hash || "";
        return S.filename.toLowerCase().includes(L) || Z.toLowerCase().includes(L);
      });
    }), D = U(() => {
      const L = {};
      for (const de of I.value) {
        const Z = de.type || "other";
        L[Z] || (L[Z] = []), L[Z].push(de);
      }
      const S = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(L).sort(([de], [Z]) => {
        const be = S.indexOf(de), xe = S.indexOf(Z);
        return be >= 0 && xe >= 0 ? be - xe : be >= 0 ? -1 : xe >= 0 ? 1 : de.localeCompare(Z);
      }).map(([de, Z]) => ({ type: de, models: Z }));
    });
    function O(L) {
      if (!L) return "Unknown";
      const S = 1024 * 1024 * 1024, de = 1024 * 1024;
      return L >= S ? `${(L / S).toFixed(1)} GB` : L >= de ? `${(L / de).toFixed(0)} MB` : `${(L / 1024).toFixed(0)} KB`;
    }
    function ie(L) {
      T.value = L.hash || L.filename;
    }
    async function te() {
      y.value = !0, k.value = null;
      try {
        const L = await i();
        await X(), L.changes > 0 && console.log(`Scan complete: ${L.changes} changes detected`);
      } catch (L) {
        k.value = L instanceof Error ? L.message : "Failed to scan models";
      } finally {
        y.value = !1;
      }
    }
    async function J() {
      if (C.value.trim()) {
        B.value = !0, k.value = null;
        try {
          const L = await p(C.value.trim());
          $.value = L.path, P.value = !1, C.value = "", await X(), console.log(`Directory changed: ${L.models_indexed} models indexed`), m("refresh");
        } catch (L) {
          k.value = L instanceof Error ? L.message : "Failed to change directory";
        } finally {
          B.value = !1;
        }
      }
    }
    function re() {
      if (!R.value.trim() || !q.value.trim()) return;
      const L = q.value.split("/").pop() || "model.safetensors";
      u([{
        workflow: "__manual__",
        filename: L,
        url: R.value.trim(),
        targetPath: q.value.trim()
      }]), R.value = "", q.value = "", x.value = !1;
    }
    async function X() {
      v.value = !0, k.value = null;
      try {
        d.value = await n();
      } catch (L) {
        k.value = L instanceof Error ? L.message : "Failed to load workspace models";
      } finally {
        v.value = !1;
      }
    }
    async function z() {
      try {
        const L = await f();
        $.value = L.path;
      } catch {
      }
    }
    return We(() => {
      X(), z();
    }), (L, S) => (s(), o(W, null, [
      w(tt, null, {
        header: l(() => [
          w(st, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: S[2] || (S[2] = (de) => b.value = !0)
          }, {
            actions: l(() => [
              w(se, {
                variant: "primary",
                size: "sm",
                disabled: y.value,
                onClick: te
              }, {
                default: l(() => [
                  g(a(y.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              w(se, {
                variant: "primary",
                size: "sm",
                onClick: S[0] || (S[0] = (de) => P.value = !0)
              }, {
                default: l(() => [...S[15] || (S[15] = [
                  g(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              w(se, {
                variant: "primary",
                size: "sm",
                onClick: S[1] || (S[1] = (de) => x.value = !0)
              }, {
                default: l(() => [...S[16] || (S[16] = [
                  e("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    e("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  g(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          A.value ? (s(), o("div", Jm, [
            e("div", Xm, [
              e("span", Qm, a(A.value.message), 1),
              e("span", Zm, a(A.value.current) + "/" + a(A.value.total), 1)
            ]),
            e("div", ev, [
              e("div", {
                class: "progress-fill",
                style: Et({ width: `${A.value.current / A.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : r("", !0),
          w(Kt, {
            modelValue: _.value,
            "onUpdate:modelValue": S[3] || (S[3] = (de) => _.value = de),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          v.value || A.value ? (s(), M(Pt, {
            key: 0,
            message: A.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : k.value ? (s(), M(Mt, {
            key: 1,
            message: k.value,
            retry: !0,
            onRetry: X
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            d.value.length ? (s(), M(ns, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                g(" Total: " + a(d.value.length) + " models • " + a(O(G.value)), 1)
              ]),
              _: 1
            })) : r("", !0),
            (s(!0), o(W, null, ne(D.value, (de) => (s(), M(Ne, {
              key: de.type,
              title: de.type.toUpperCase(),
              count: de.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: l(() => [
                (s(!0), o(W, null, ne(de.models, (Z) => (s(), M(et, {
                  key: Z.sha256 || Z.filename,
                  status: "synced"
                }, {
                  icon: l(() => [...S[17] || (S[17] = [
                    g("📦", -1)
                  ])]),
                  title: l(() => [
                    g(a(Z.filename), 1)
                  ]),
                  subtitle: l(() => [
                    g(a(O(Z.size)), 1)
                  ]),
                  details: l(() => [
                    w(Ve, {
                      label: "Hash:",
                      value: Z.hash ? Z.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    w(se, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (be) => ie(Z)
                    }, {
                      default: l(() => [...S[18] || (S[18] = [
                        g(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 2
            }, 1032, ["title", "count"]))), 128)),
            I.value.length ? r("", !0) : (s(), M(yt, {
              key: 1,
              icon: "📭",
              message: _.value ? `No models match '${_.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      w(wt, {
        show: b.value,
        title: "About Workspace Model Index",
        onClose: S[4] || (S[4] = (de) => b.value = !1)
      }, {
        content: l(() => [...S[19] || (S[19] = [
          e("p", null, [
            g(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            g(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      T.value ? (s(), M(Cs, {
        key: 0,
        identifier: T.value,
        onClose: S[5] || (S[5] = (de) => T.value = null)
      }, null, 8, ["identifier"])) : r("", !0),
      (s(), M(Ye, { to: "body" }, [
        P.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: S[9] || (S[9] = Be((de) => P.value = !1, ["self"]))
        }, [
          e("div", tv, [
            e("div", sv, [
              S[20] || (S[20] = e("h3", null, "Change Models Directory", -1)),
              e("button", {
                class: "modal-close",
                onClick: S[6] || (S[6] = (de) => P.value = !1)
              }, "✕")
            ]),
            e("div", ov, [
              e("div", nv, [
                S[21] || (S[21] = e("label", null, "Current Directory", -1)),
                e("code", av, a($.value || "Not set"), 1)
              ]),
              e("div", lv, [
                S[22] || (S[22] = e("label", null, "New Directory Path", -1)),
                w(ht, {
                  modelValue: C.value,
                  "onUpdate:modelValue": S[7] || (S[7] = (de) => C.value = de),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              S[23] || (S[23] = e("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            e("div", iv, [
              w(ge, {
                variant: "secondary",
                onClick: S[8] || (S[8] = (de) => P.value = !1)
              }, {
                default: l(() => [...S[24] || (S[24] = [
                  g(" Cancel ", -1)
                ])]),
                _: 1
              }),
              w(ge, {
                variant: "primary",
                disabled: !C.value.trim() || B.value,
                loading: B.value,
                onClick: J
              }, {
                default: l(() => [
                  g(a(B.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : r("", !0)
      ])),
      (s(), M(Ye, { to: "body" }, [
        x.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: S[14] || (S[14] = Be((de) => x.value = !1, ["self"]))
        }, [
          e("div", rv, [
            e("div", dv, [
              S[25] || (S[25] = e("h3", null, "Download New Model", -1)),
              e("button", {
                class: "modal-close",
                onClick: S[10] || (S[10] = (de) => x.value = !1)
              }, "✕")
            ]),
            e("div", cv, [
              e("div", uv, [
                S[26] || (S[26] = e("label", null, "Download URL", -1)),
                w(ht, {
                  modelValue: R.value,
                  "onUpdate:modelValue": S[11] || (S[11] = (de) => R.value = de),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              e("div", mv, [
                S[27] || (S[27] = e("label", null, "Target Path (relative to models directory)", -1)),
                w(ht, {
                  modelValue: q.value,
                  "onUpdate:modelValue": S[12] || (S[12] = (de) => q.value = de),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              S[28] || (S[28] = e("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            e("div", vv, [
              w(ge, {
                variant: "secondary",
                onClick: S[13] || (S[13] = (de) => x.value = !1)
              }, {
                default: l(() => [...S[29] || (S[29] = [
                  g(" Cancel ", -1)
                ])]),
                _: 1
              }),
              w(ge, {
                variant: "primary",
                disabled: !R.value.trim() || !q.value.trim(),
                onClick: re
              }, {
                default: l(() => [...S[30] || (S[30] = [
                  g(" Queue Download ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"])
            ])
          ])
        ])) : r("", !0)
      ]))
    ], 64));
  }
}), pv = /* @__PURE__ */ ae(fv, [["__scopeId", "data-v-73b78d84"]]), gv = { class: "node-details" }, hv = { class: "status-row" }, yv = {
  key: 0,
  class: "detail-row"
}, wv = { class: "value" }, kv = { class: "detail-row" }, bv = { class: "value" }, _v = {
  key: 1,
  class: "detail-row"
}, $v = { class: "value mono" }, Cv = {
  key: 2,
  class: "detail-row"
}, xv = ["href"], Sv = {
  key: 3,
  class: "detail-row"
}, Iv = { class: "value mono small" }, Ev = { class: "detail-row" }, Pv = {
  key: 0,
  class: "value"
}, Mv = {
  key: 1,
  class: "workflow-list"
}, Rv = /* @__PURE__ */ oe({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = t, i = c, f = U(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), p = U(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), u = U(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[n.node.source] || n.node.source);
    return (m, d) => (s(), M(ot, {
      title: `NODE DETAILS: ${t.node.name}`,
      size: "md",
      onClose: d[1] || (d[1] = (v) => i("close"))
    }, {
      body: l(() => [
        e("div", gv, [
          e("div", hv, [
            d[2] || (d[2] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: fe(["status-badge", f.value])
            }, a(p.value), 3)
          ]),
          t.node.version ? (s(), o("div", yv, [
            d[3] || (d[3] = e("span", { class: "label" }, "Version:", -1)),
            e("span", wv, a(t.node.source === "development" ? "" : "v") + a(t.node.version), 1)
          ])) : r("", !0),
          e("div", kv, [
            d[4] || (d[4] = e("span", { class: "label" }, "Source:", -1)),
            e("span", bv, a(u.value), 1)
          ]),
          t.node.registry_id ? (s(), o("div", _v, [
            d[5] || (d[5] = e("span", { class: "label" }, "Registry ID:", -1)),
            e("span", $v, a(t.node.registry_id), 1)
          ])) : r("", !0),
          t.node.repository ? (s(), o("div", Cv, [
            d[7] || (d[7] = e("span", { class: "label" }, "Repository:", -1)),
            e("a", {
              href: t.node.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "repo-link"
            }, [
              g(a(t.node.repository) + " ", 1),
              d[6] || (d[6] = e("svg", {
                class: "external-icon",
                width: "12",
                height: "12",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M3.75 2A1.75 1.75 0 0 0 2 3.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0 0 14 12.25v-3.5a.75.75 0 0 0-1.5 0v3.5a.25.25 0 0 1-.25.25h-8.5a.25.25 0 0 1-.25-.25v-8.5a.25.25 0 0 1 .25-.25h3.5a.75.75 0 0 0 0-1.5h-3.5z" }),
                e("path", { d: "M10 1a.75.75 0 0 0 0 1.5h2.44L7.22 7.72a.75.75 0 1 0 1.06 1.06l5.22-5.22V6a.75.75 0 0 0 1.5 0V1.75a.75.75 0 0 0-.75-.75H10z" })
              ], -1))
            ], 8, xv)
          ])) : r("", !0),
          t.node.download_url ? (s(), o("div", Sv, [
            d[8] || (d[8] = e("span", { class: "label" }, "Download URL:", -1)),
            e("span", Iv, a(t.node.download_url), 1)
          ])) : r("", !0),
          d[10] || (d[10] = e("div", { class: "section-divider" }, null, -1)),
          e("div", Ev, [
            d[9] || (d[9] = e("span", { class: "label" }, "Used by:", -1)),
            !t.node.used_in_workflows || t.node.used_in_workflows.length === 0 ? (s(), o("span", Pv, " Not used in any workflows ")) : (s(), o("div", Mv, [
              (s(!0), o(W, null, ne(t.node.used_in_workflows, (v) => (s(), o("span", {
                key: v,
                class: "workflow-tag"
              }, a(v), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: l(() => [
        w(ge, {
          variant: "secondary",
          onClick: d[0] || (d[0] = (v) => i("close"))
        }, {
          default: l(() => [...d[11] || (d[11] = [
            g(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Tv = /* @__PURE__ */ ae(Rv, [["__scopeId", "data-v-b342f626"]]), Dv = { class: "dialog-message" }, Lv = {
  key: 0,
  class: "dialog-details"
}, zv = {
  key: 1,
  class: "dialog-warning"
}, Uv = /* @__PURE__ */ oe({
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
    return (c, n) => (s(), M(ot, {
      title: t.title,
      size: "sm",
      onClose: n[3] || (n[3] = (i) => c.$emit("cancel"))
    }, {
      body: l(() => [
        e("p", Dv, a(t.message), 1),
        t.details && t.details.length ? (s(), o("div", Lv, [
          (s(!0), o(W, null, ne(t.details, (i, f) => (s(), o("div", {
            key: f,
            class: "detail-item"
          }, " • " + a(i), 1))), 128))
        ])) : r("", !0),
        t.warning ? (s(), o("p", zv, [
          n[4] || (n[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          g(" " + a(t.warning), 1)
        ])) : r("", !0)
      ]),
      footer: l(() => [
        w(ge, {
          variant: "secondary",
          onClick: n[0] || (n[0] = (i) => c.$emit("cancel"))
        }, {
          default: l(() => [
            g(a(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (s(), M(ge, {
          key: 0,
          variant: "secondary",
          onClick: n[1] || (n[1] = (i) => c.$emit("secondary"))
        }, {
          default: l(() => [
            g(a(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : r("", !0),
        w(ge, {
          variant: t.destructive ? "danger" : "primary",
          onClick: n[2] || (n[2] = (i) => c.$emit("confirm"))
        }, {
          default: l(() => [
            g(a(t.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), qs = /* @__PURE__ */ ae(Uv, [["__scopeId", "data-v-3670b9f5"]]), Nv = { class: "mismatch-warning" }, Ov = { class: "version-mismatch" }, Av = { class: "version-actual" }, Bv = { class: "version-expected" }, Fv = { key: 0 }, Vv = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, Wv = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, Gv = /* @__PURE__ */ oe({
  __name: "NodesSection",
  props: {
    versionMismatches: { default: () => [] }
  },
  emits: ["open-node-manager", "repair-environment", "toast"],
  setup(t, { emit: c }) {
    const n = t, i = c, { getNodes: f, trackNodeAsDev: p, installNode: u, uninstallNode: m } = He(), d = h({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), v = h(!1), y = h(null), k = h(""), _ = h(!1), b = h(null), T = h(null), P = U(() => {
      if (!k.value.trim()) return d.value.nodes;
      const te = k.value.toLowerCase();
      return d.value.nodes.filter(
        (J) => {
          var re, X;
          return J.name.toLowerCase().includes(te) || ((re = J.description) == null ? void 0 : re.toLowerCase().includes(te)) || ((X = J.repository) == null ? void 0 : X.toLowerCase().includes(te));
        }
      );
    }), $ = U(
      () => P.value.filter((te) => te.installed && te.tracked)
    ), C = U(
      () => P.value.filter((te) => !te.installed && te.tracked)
    ), B = U(
      () => P.value.filter((te) => te.installed && !te.tracked)
    );
    function x(te) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[te] || te;
    }
    const R = U(() => n.versionMismatches.length > 0);
    function q(te) {
      return !te.used_in_workflows || te.used_in_workflows.length === 0 ? "Not used in any workflows" : te.used_in_workflows.length === 1 ? te.used_in_workflows[0] : `${te.used_in_workflows.length} workflows`;
    }
    function A(te) {
      b.value = te;
    }
    function G() {
      i("open-node-manager");
    }
    function I(te) {
      T.value = {
        title: "Track as Development Node",
        message: `Track "${te}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          T.value = null;
          try {
            v.value = !0;
            const J = await p(te);
            J.status === "success" ? (i("toast", `✓ Node "${te}" tracked as development`, "success"), await ie()) : i("toast", `Failed to track node: ${J.message || "Unknown error"}`, "error");
          } catch (J) {
            i("toast", `Error tracking node: ${J instanceof Error ? J.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    function D(te) {
      T.value = {
        title: "Remove Untracked Node",
        message: `Remove "${te}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          T.value = null;
          try {
            v.value = !0;
            const J = await m(te);
            J.status === "success" ? (i("toast", `✓ Node "${te}" removed`, "success"), await ie()) : i("toast", `Failed to remove node: ${J.message || "Unknown error"}`, "error");
          } catch (J) {
            i("toast", `Error removing node: ${J instanceof Error ? J.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    function O(te) {
      T.value = {
        title: "Install Missing Node",
        message: `Install "${te}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          T.value = null;
          try {
            v.value = !0;
            const J = await u(te);
            J.status === "success" ? (i("toast", `✓ Node "${te}" installed`, "success"), await ie()) : i("toast", `Failed to install node: ${J.message || "Unknown error"}`, "error");
          } catch (J) {
            i("toast", `Error installing node: ${J instanceof Error ? J.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    async function ie() {
      v.value = !0, y.value = null;
      try {
        d.value = await f();
      } catch (te) {
        y.value = te instanceof Error ? te.message : "Failed to load nodes";
      } finally {
        v.value = !1;
      }
    }
    return We(ie), (te, J) => (s(), o(W, null, [
      w(tt, null, {
        header: l(() => [
          w(st, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: J[0] || (J[0] = (re) => _.value = !0)
          }, {
            actions: l(() => [
              w(se, {
                variant: "primary",
                size: "sm",
                onClick: G
              }, {
                default: l(() => [...J[7] || (J[7] = [
                  g(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          w(Kt, {
            modelValue: k.value,
            "onUpdate:modelValue": J[1] || (J[1] = (re) => k.value = re),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          v.value ? (s(), M(Pt, {
            key: 0,
            message: "Loading nodes..."
          })) : y.value ? (s(), M(Mt, {
            key: 1,
            message: y.value,
            retry: !0,
            onRetry: ie
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            d.value.total_count ? (s(), M(ns, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                g(a(d.value.installed_count) + " installed ", 1),
                d.value.missing_count ? (s(), o(W, { key: 0 }, [
                  g(" • " + a(d.value.missing_count) + " missing", 1)
                ], 64)) : r("", !0),
                d.value.untracked_count ? (s(), o(W, { key: 1 }, [
                  g(" • " + a(d.value.untracked_count) + " untracked", 1)
                ], 64)) : r("", !0)
              ]),
              _: 1
            })) : r("", !0),
            R.value ? (s(), M(Ne, {
              key: 1,
              title: "VERSION MISMATCHES",
              count: t.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                e("div", Nv, [
                  J[8] || (J[8] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, a(t.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (s(!0), o(W, null, ne(t.versionMismatches, (re) => (s(), M(et, {
                  key: re.name,
                  status: "warning"
                }, {
                  icon: l(() => [...J[9] || (J[9] = [
                    g("⚠", -1)
                  ])]),
                  title: l(() => [
                    g(a(re.name), 1)
                  ]),
                  subtitle: l(() => [
                    e("span", Ov, [
                      e("span", Av, a(re.actual), 1),
                      J[10] || (J[10] = e("span", { class: "version-arrow" }, "→", -1)),
                      e("span", Bv, a(re.expected), 1)
                    ])
                  ]),
                  actions: l(() => [
                    w(se, {
                      variant: "warning",
                      size: "sm",
                      onClick: J[2] || (J[2] = (X) => i("repair-environment"))
                    }, {
                      default: l(() => [...J[11] || (J[11] = [
                        g(" Repair ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            B.value.length ? (s(), M(Ne, {
              key: 2,
              title: "UNTRACKED",
              count: B.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(W, null, ne(B.value, (re) => (s(), M(et, {
                  key: re.name,
                  status: "warning"
                }, {
                  icon: l(() => [...J[12] || (J[12] = [
                    g("?", -1)
                  ])]),
                  title: l(() => [
                    g(a(re.name), 1)
                  ]),
                  subtitle: l(() => [...J[13] || (J[13] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: l(() => [
                    w(Ve, {
                      label: "Used by:",
                      value: q(re)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    w(se, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (X) => A(re)
                    }, {
                      default: l(() => [...J[14] || (J[14] = [
                        g(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    w(se, {
                      variant: "primary",
                      size: "sm",
                      onClick: (X) => I(re.name)
                    }, {
                      default: l(() => [...J[15] || (J[15] = [
                        g(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    w(se, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (X) => D(re.name)
                    }, {
                      default: l(() => [...J[16] || (J[16] = [
                        g(" Remove ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            $.value.length ? (s(), M(Ne, {
              key: 3,
              title: "INSTALLED",
              count: $.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(W, null, ne($.value, (re) => (s(), M(et, {
                  key: re.name,
                  status: "synced"
                }, {
                  icon: l(() => [
                    g(a(re.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: l(() => [
                    g(a(re.name), 1)
                  ]),
                  subtitle: l(() => [
                    re.version ? (s(), o("span", Fv, a(re.source === "development" ? "" : "v") + a(re.version), 1)) : (s(), o("span", Vv, "version unknown")),
                    e("span", Wv, " • " + a(x(re.source)), 1)
                  ]),
                  details: l(() => [
                    w(Ve, {
                      label: "Used by:",
                      value: q(re)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    w(se, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (X) => A(re)
                    }, {
                      default: l(() => [...J[17] || (J[17] = [
                        g(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    w(se, {
                      variant: "secondary",
                      size: "xs",
                      onClick: G
                    }, {
                      default: l(() => [...J[18] || (J[18] = [
                        g(" Manage ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            C.value.length ? (s(), M(Ne, {
              key: 4,
              title: "MISSING",
              count: C.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(W, null, ne(C.value, (re) => (s(), M(et, {
                  key: re.name,
                  status: "missing"
                }, {
                  icon: l(() => [...J[19] || (J[19] = [
                    g("!", -1)
                  ])]),
                  title: l(() => [
                    g(a(re.name), 1)
                  ]),
                  subtitle: l(() => [...J[20] || (J[20] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: l(() => [
                    w(Ve, {
                      label: "Required by:",
                      value: q(re)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    w(se, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (X) => A(re)
                    }, {
                      default: l(() => [...J[21] || (J[21] = [
                        g(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    w(se, {
                      variant: "primary",
                      size: "sm",
                      onClick: (X) => O(re.name)
                    }, {
                      default: l(() => [...J[22] || (J[22] = [
                        g(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            !$.value.length && !C.value.length && !B.value.length ? (s(), M(yt, {
              key: 5,
              icon: "📭",
              message: k.value ? `No nodes match '${k.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : r("", !0)
          ], 64))
        ]),
        _: 1
      }),
      w(wt, {
        show: _.value,
        title: "About Custom Nodes",
        onClose: J[4] || (J[4] = (re) => _.value = !1)
      }, {
        content: l(() => [...J[23] || (J[23] = [
          e("p", null, " Custom nodes extend ComfyUI's capabilities. ComfyGit tracks nodes in your environment manifest for reproducibility. ", -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Installed:"),
            g(" Tracked nodes available in this environment"),
            e("br"),
            e("strong", null, "Missing:"),
            g(" Tracked nodes that need to be installed"),
            e("br"),
            e("strong", null, "Untracked:"),
            g(" Nodes on filesystem but not in manifest ")
          ], -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)", color: "var(--cg-color-text-muted)" } }, ` Use "Track as Dev" for local development nodes you don't want to version. `, -1)
        ])]),
        actions: l(() => [
          w(se, {
            variant: "primary",
            onClick: J[3] || (J[3] = (re) => _.value = !1)
          }, {
            default: l(() => [...J[24] || (J[24] = [
              g(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      b.value ? (s(), M(Tv, {
        key: 0,
        node: b.value,
        onClose: J[5] || (J[5] = (re) => b.value = null)
      }, null, 8, ["node"])) : r("", !0),
      T.value ? (s(), M(qs, {
        key: 1,
        title: T.value.title,
        message: T.value.message,
        warning: T.value.warning,
        "confirm-label": T.value.confirmLabel,
        destructive: T.value.destructive,
        onConfirm: T.value.onConfirm,
        onCancel: J[6] || (J[6] = (re) => T.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : r("", !0)
    ], 64));
  }
}), jv = /* @__PURE__ */ ae(Gv, [["__scopeId", "data-v-1555a802"]]);
function Ys(t) {
  return "has_conflicts" in t && t.has_conflicts === !0 && Array.isArray(t.workflow_conflicts);
}
const Hv = { class: "remote-url-display" }, Kv = ["title"], qv = ["title"], Yv = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Jv = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Xv = /* @__PURE__ */ oe({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const c = t, n = h(!1), i = U(() => {
      if (c.url.length <= c.maxLength)
        return c.url;
      const p = c.url.slice(0, Math.floor(c.maxLength * 0.6)), u = c.url.slice(-Math.floor(c.maxLength * 0.3));
      return `${p}...${u}`;
    });
    async function f() {
      try {
        await navigator.clipboard.writeText(c.url), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (p) {
        console.error("Failed to copy URL:", p);
      }
    }
    return (p, u) => (s(), o("div", Hv, [
      e("span", {
        class: "url-text",
        title: t.url
      }, a(i.value), 9, Kv),
      e("button", {
        class: fe(["copy-btn", { copied: n.value }]),
        onClick: f,
        title: n.value ? "Copied!" : "Copy URL"
      }, [
        n.value ? (s(), o("svg", Jv, [...u[1] || (u[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (s(), o("svg", Yv, [...u[0] || (u[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, qv)
    ]));
  }
}), Qv = /* @__PURE__ */ ae(Xv, [["__scopeId", "data-v-7768a58d"]]), Zv = { class: "remote-title" }, ef = {
  key: 0,
  class: "default-badge"
}, tf = {
  key: 1,
  class: "sync-badge"
}, sf = {
  key: 0,
  class: "ahead"
}, of = {
  key: 1,
  class: "behind"
}, nf = {
  key: 1,
  class: "synced"
}, af = ["href"], lf = {
  key: 1,
  class: "remote-url-text"
}, rf = /* @__PURE__ */ oe({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(t) {
    const c = t, n = U(() => c.fetchingRemote === c.remote.name), i = U(() => c.remote.is_default), f = U(() => c.syncStatus && c.syncStatus.behind > 0), p = U(() => c.syncStatus && c.syncStatus.ahead > 0), u = U(() => c.remote.push_url !== c.remote.fetch_url), m = U(() => {
      const v = c.remote.fetch_url, y = v.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return y ? `https://${y[1]}/${y[2]}` : v.startsWith("https://") || v.startsWith("http://") ? v.replace(/\.git$/, "") : null;
    }), d = U(() => c.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (v, y) => (s(), M(et, {
      status: i.value ? "synced" : void 0
    }, Nt({
      icon: l(() => [
        g(a(i.value ? "🔗" : "🌐"), 1)
      ]),
      title: l(() => [
        e("div", Zv, [
          e("span", null, a(t.remote.name), 1),
          i.value ? (s(), o("span", ef, "DEFAULT")) : r("", !0),
          t.syncStatus ? (s(), o("span", tf, [
            t.syncStatus.ahead > 0 || t.syncStatus.behind > 0 ? (s(), o(W, { key: 0 }, [
              t.syncStatus.ahead > 0 ? (s(), o("span", sf, "↑" + a(t.syncStatus.ahead), 1)) : r("", !0),
              t.syncStatus.behind > 0 ? (s(), o("span", of, "↓" + a(t.syncStatus.behind), 1)) : r("", !0)
            ], 64)) : (s(), o("span", nf, "✓ synced"))
          ])) : r("", !0)
        ])
      ]),
      subtitle: l(() => [
        m.value ? (s(), o("a", {
          key: 0,
          href: m.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url-link",
          onClick: y[0] || (y[0] = Be(() => {
          }, ["stop"]))
        }, a(d.value), 9, af)) : (s(), o("span", lf, a(d.value), 1))
      ]),
      actions: l(() => [
        w(se, {
          variant: "primary",
          size: "xs",
          loading: n.value,
          onClick: y[1] || (y[1] = (k) => v.$emit("fetch", t.remote.name))
        }, {
          default: l(() => [...y[6] || (y[6] = [
            g(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        w(se, {
          variant: f.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: y[2] || (y[2] = (k) => v.$emit("pull", t.remote.name))
        }, {
          default: l(() => [
            g(" Pull" + a(t.syncStatus && t.syncStatus.behind > 0 ? ` ↓${t.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        w(se, {
          variant: p.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: y[3] || (y[3] = (k) => v.$emit("push", t.remote.name))
        }, {
          default: l(() => [
            g(" Push" + a(t.syncStatus && t.syncStatus.ahead > 0 ? ` ↑${t.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        w(se, {
          variant: "secondary",
          size: "xs",
          onClick: y[4] || (y[4] = (k) => v.$emit("edit", t.remote.name))
        }, {
          default: l(() => [...y[7] || (y[7] = [
            g(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        i.value ? r("", !0) : (s(), M(se, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: y[5] || (y[5] = (k) => v.$emit("remove", t.remote.name))
        }, {
          default: l(() => [...y[8] || (y[8] = [
            g(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 2
    }, [
      u.value ? {
        name: "details",
        fn: l(() => [
          t.remote.push_url !== t.remote.fetch_url ? (s(), M(Ve, {
            key: 0,
            label: "Push URL:"
          }, {
            default: l(() => [
              w(Qv, {
                url: t.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : r("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), df = /* @__PURE__ */ ae(rf, [["__scopeId", "data-v-8310f3a8"]]), cf = ["for"], uf = {
  key: 0,
  class: "base-form-field-required"
}, mf = { class: "base-form-field-input" }, vf = {
  key: 1,
  class: "base-form-field-error"
}, ff = {
  key: 2,
  class: "base-form-field-hint"
}, pf = /* @__PURE__ */ oe({
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
    const c = t, n = U(() => c.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (i, f) => (s(), o("div", {
      class: fe(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (s(), o("label", {
        key: 0,
        for: n.value,
        class: "base-form-field-label"
      }, [
        g(a(t.label) + " ", 1),
        t.required ? (s(), o("span", uf, "*")) : r("", !0)
      ], 8, cf)) : r("", !0),
      e("div", mf, [
        Me(i.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (s(), o("span", vf, a(t.error), 1)) : t.hint ? (s(), o("span", ff, a(t.hint), 1)) : r("", !0)
    ], 2));
  }
}), vs = /* @__PURE__ */ ae(pf, [["__scopeId", "data-v-9a1cf296"]]), gf = { class: "remote-form" }, hf = { class: "form-header" }, yf = { class: "form-body" }, wf = {
  key: 0,
  class: "form-error"
}, kf = { class: "form-actions" }, bf = /* @__PURE__ */ oe({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: c }) {
    const n = t, i = c, f = h({
      name: n.remoteName,
      fetchUrl: n.fetchUrl,
      pushUrl: n.pushUrl
    }), p = h(!1), u = h(null);
    Ct(() => [n.remoteName, n.fetchUrl, n.pushUrl], () => {
      f.value = {
        name: n.remoteName,
        fetchUrl: n.fetchUrl,
        pushUrl: n.pushUrl
      };
    });
    const m = U(() => f.value.name.trim() !== "" && f.value.fetchUrl.trim() !== "");
    async function d() {
      if (!(!m.value || p.value)) {
        u.value = null, p.value = !0;
        try {
          i("submit", f.value);
        } catch (v) {
          u.value = v instanceof Error ? v.message : "Failed to submit form";
        } finally {
          p.value = !1;
        }
      }
    }
    return (v, y) => (s(), o("div", gf, [
      e("div", hf, [
        w(vt, null, {
          default: l(() => [
            g(a(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", yf, [
        w(vs, {
          label: "Remote Name",
          required: ""
        }, {
          default: l(() => [
            w(ht, {
              modelValue: f.value.name,
              "onUpdate:modelValue": y[0] || (y[0] = (k) => f.value.name = k),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        w(vs, {
          label: "Fetch URL",
          required: ""
        }, {
          default: l(() => [
            w(ht, {
              modelValue: f.value.fetchUrl,
              "onUpdate:modelValue": y[1] || (y[1] = (k) => f.value.fetchUrl = k),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        w(vs, { label: "Push URL (optional)" }, {
          default: l(() => [
            w(ht, {
              modelValue: f.value.pushUrl,
              "onUpdate:modelValue": y[2] || (y[2] = (k) => f.value.pushUrl = k),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        u.value ? (s(), o("div", wf, a(u.value), 1)) : r("", !0)
      ]),
      e("div", kf, [
        w(se, {
          variant: "primary",
          size: "md",
          disabled: !m.value,
          loading: p.value,
          onClick: d
        }, {
          default: l(() => [
            g(a(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        w(se, {
          variant: "ghost",
          size: "md",
          onClick: y[3] || (y[3] = (k) => v.$emit("cancel"))
        }, {
          default: l(() => [...y[4] || (y[4] = [
            g(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), _f = /* @__PURE__ */ ae(bf, [["__scopeId", "data-v-56021b18"]]), $f = { class: "conflict-summary-box" }, Cf = { class: "summary-header" }, xf = { class: "summary-text" }, Sf = { key: 0 }, If = {
  key: 1,
  class: "all-resolved"
}, Ef = { class: "summary-progress" }, Pf = { class: "progress-bar" }, Mf = { class: "progress-text" }, Rf = /* @__PURE__ */ oe({
  __name: "ConflictSummaryBox",
  props: {
    conflictCount: {},
    resolvedCount: {},
    operationType: {}
  },
  setup(t) {
    const c = t, n = U(
      () => c.conflictCount > 0 ? c.resolvedCount / c.conflictCount * 100 : 0
    );
    return (i, f) => (s(), o("div", $f, [
      e("div", Cf, [
        f[0] || (f[0] = e("span", { class: "summary-icon" }, "⚠", -1)),
        e("div", xf, [
          e("strong", null, a(t.conflictCount) + " conflict" + a(t.conflictCount !== 1 ? "s" : "") + " detected", 1),
          t.resolvedCount < t.conflictCount ? (s(), o("p", Sf, " Resolve all conflicts before " + a(t.operationType) + "ing ", 1)) : (s(), o("p", If, " All conflicts resolved - ready to " + a(t.operationType), 1))
        ])
      ]),
      e("div", Ef, [
        e("div", Pf, [
          e("div", {
            class: "progress-fill",
            style: Et({ width: n.value + "%" })
          }, null, 4)
        ]),
        e("span", Mf, a(t.resolvedCount) + " / " + a(t.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), Tf = /* @__PURE__ */ ae(Rf, [["__scopeId", "data-v-4e9e6cc9"]]), Df = { class: "modal-header" }, Lf = { class: "modal-title" }, zf = { class: "modal-body" }, Uf = {
  key: 0,
  class: "error-box"
}, Nf = {
  key: 0,
  class: "error-hint"
}, Of = {
  key: 1,
  class: "loading-state"
}, Af = { class: "commit-summary" }, Bf = {
  key: 0,
  class: "changes-section"
}, Ff = {
  key: 0,
  class: "change-group",
  open: ""
}, Vf = { class: "change-count" }, Wf = { class: "change-list" }, Gf = {
  key: 0,
  class: "conflict-badge"
}, jf = {
  key: 1,
  class: "change-group"
}, Hf = { class: "change-count" }, Kf = { class: "change-list" }, qf = {
  key: 2,
  class: "change-group"
}, Yf = { class: "change-count" }, Jf = { class: "change-list" }, Xf = {
  key: 2,
  class: "strategy-section"
}, Qf = { class: "radio-group" }, Zf = { class: "radio-option" }, ep = { class: "radio-option" }, tp = { class: "radio-option" }, sp = {
  key: 3,
  class: "up-to-date"
}, op = { class: "modal-actions" }, Us = "comfygit.pullModelStrategy", np = /* @__PURE__ */ oe({
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
    const n = t, i = c, f = h(localStorage.getItem(Us) || "skip");
    Ct(f, ($) => {
      localStorage.setItem(Us, $);
    });
    const p = U(() => {
      var $;
      return (($ = n.error) == null ? void 0 : $.toLowerCase().includes("unrelated histories")) ?? !1;
    }), u = U(() => {
      if (!n.preview) return 0;
      const $ = n.preview.changes.workflows;
      return $.added.length + $.modified.length + $.deleted.length;
    }), m = U(() => n.preview ? n.preview.changes.nodes.to_install.length : 0), d = U(() => {
      var $;
      return u.value > 0 || m.value > 0 || ((($ = n.preview) == null ? void 0 : $.changes.models.count) || 0) > 0;
    }), v = U(() => n.preview && Ys(n.preview) ? n.preview : null), y = U(() => {
      var $;
      return (($ = v.value) == null ? void 0 : $.workflow_conflicts.length) ?? 0;
    }), k = U(() => {
      var $;
      return (($ = n.conflictResolutions) == null ? void 0 : $.size) ?? 0;
    }), _ = U(
      () => y.value > 0 && k.value === y.value
    ), b = U(() => !(!n.preview || n.preview.has_uncommitted_changes || v.value && !_.value));
    function T($) {
      if (!v.value) return !1;
      const C = $.replace(/\.json$/, "");
      return v.value.workflow_conflicts.some((B) => B.name === C);
    }
    function P($) {
      const C = n.conflictResolutions ? Array.from(n.conflictResolutions.values()) : void 0;
      i("pull", { modelStrategy: f.value, force: $, resolutions: C });
    }
    return ($, C) => {
      var B, x;
      return s(), M(Ye, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: C[11] || (C[11] = (R) => $.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: C[10] || (C[10] = Be(() => {
            }, ["stop"]))
          }, [
            e("div", Df, [
              e("h3", Lf, "PULL FROM " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: C[0] || (C[0] = (R) => $.$emit("close"))
              }, "✕")
            ]),
            e("div", zf, [
              t.error ? (s(), o("div", Uf, [
                C[13] || (C[13] = e("span", { class: "error-icon" }, "✕", -1)),
                e("div", null, [
                  C[12] || (C[12] = e("strong", null, "PULL FAILED", -1)),
                  e("p", null, a(t.error), 1),
                  p.value ? (s(), o("p", Nf, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : r("", !0)
                ])
              ])) : t.loading ? (s(), o("div", Of, [...C[14] || (C[14] = [
                e("span", { class: "spinner" }, "⟳", -1),
                g(" Loading preview... ", -1)
              ])])) : (B = t.preview) != null && B.has_uncommitted_changes ? (s(), o(W, { key: 2 }, [
                C[15] || (C[15] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("div", null, [
                    e("strong", null, "UNCOMMITTED CHANGES"),
                    e("p", null, "You have uncommitted changes that must be committed or discarded before pulling.")
                  ])
                ], -1)),
                C[16] || (C[16] = e("div", { class: "options-section" }, [
                  e("p", null, [
                    e("strong", null, "Options:")
                  ]),
                  e("ul", null, [
                    e("li", null, "Commit your changes first (recommended)"),
                    e("li", null, "Discard changes and force pull")
                  ])
                ], -1))
              ], 64)) : t.preview ? (s(), o(W, { key: 3 }, [
                e("div", Af, [
                  C[17] || (C[17] = e("span", { class: "icon" }, "📥", -1)),
                  g(" " + a(t.preview.commits_behind) + " commit" + a(t.preview.commits_behind !== 1 ? "s" : "") + " from " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                d.value ? (s(), o("div", Bf, [
                  C[21] || (C[21] = e("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  u.value > 0 ? (s(), o("details", Ff, [
                    e("summary", null, [
                      C[18] || (C[18] = e("span", { class: "change-type" }, "Workflows", -1)),
                      e("span", Vf, a(u.value) + " changes", 1)
                    ]),
                    e("div", Wf, [
                      (s(!0), o(W, null, ne(t.preview.changes.workflows.added, (R) => (s(), o("div", {
                        key: "a-" + R,
                        class: "change-item add"
                      }, " + " + a(R), 1))), 128)),
                      (s(!0), o(W, null, ne(t.preview.changes.workflows.modified, (R) => (s(), o("div", {
                        key: "m-" + R,
                        class: "change-item modify"
                      }, [
                        g(" ~ " + a(R) + " ", 1),
                        T(R) ? (s(), o("span", Gf, "CONFLICT")) : r("", !0)
                      ]))), 128)),
                      (s(!0), o(W, null, ne(t.preview.changes.workflows.deleted, (R) => (s(), o("div", {
                        key: "d-" + R,
                        class: "change-item delete"
                      }, " - " + a(R), 1))), 128))
                    ])
                  ])) : r("", !0),
                  m.value > 0 ? (s(), o("details", jf, [
                    e("summary", null, [
                      C[19] || (C[19] = e("span", { class: "change-type" }, "Nodes", -1)),
                      e("span", Hf, a(m.value) + " to install", 1)
                    ]),
                    e("div", Kf, [
                      (s(!0), o(W, null, ne(t.preview.changes.nodes.to_install, (R) => (s(), o("div", {
                        key: R,
                        class: "change-item add"
                      }, " + " + a(R), 1))), 128))
                    ])
                  ])) : r("", !0),
                  t.preview.changes.models.count > 0 ? (s(), o("details", qf, [
                    e("summary", null, [
                      C[20] || (C[20] = e("span", { class: "change-type" }, "Models", -1)),
                      e("span", Yf, a(t.preview.changes.models.count) + " referenced", 1)
                    ]),
                    e("div", Jf, [
                      (s(!0), o(W, null, ne(t.preview.changes.models.referenced, (R) => (s(), o("div", {
                        key: R,
                        class: "change-item"
                      }, a(R), 1))), 128))
                    ])
                  ])) : r("", !0)
                ])) : r("", !0),
                v.value ? (s(), M(Tf, {
                  key: 1,
                  "conflict-count": y.value,
                  "resolved-count": k.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : r("", !0),
                t.preview.changes.models.count > 0 ? (s(), o("div", Xf, [
                  C[26] || (C[26] = e("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  e("div", Qf, [
                    e("label", Zf, [
                      De(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[1] || (C[1] = (R) => f.value = R),
                        value: "all"
                      }, null, 512), [
                        [Tt, f.value]
                      ]),
                      C[22] || (C[22] = e("span", null, "Download all models", -1))
                    ]),
                    e("label", ep, [
                      De(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[2] || (C[2] = (R) => f.value = R),
                        value: "required"
                      }, null, 512), [
                        [Tt, f.value]
                      ]),
                      C[23] || (C[23] = e("span", null, "Download required only", -1))
                    ]),
                    e("label", tp, [
                      De(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[3] || (C[3] = (R) => f.value = R),
                        value: "skip"
                      }, null, 512), [
                        [Tt, f.value]
                      ]),
                      C[24] || (C[24] = e("span", null, "Skip model downloads", -1)),
                      C[25] || (C[25] = e("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  C[27] || (C[27] = e("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : r("", !0),
                t.preview.commits_behind === 0 ? (s(), o("div", sp, [
                  C[28] || (C[28] = e("span", { class: "icon" }, "✓", -1)),
                  g(" Already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ])) : r("", !0)
              ], 64)) : r("", !0)
            ]),
            e("div", op, [
              w(se, {
                variant: "secondary",
                onClick: C[4] || (C[4] = (R) => $.$emit("close"))
              }, {
                default: l(() => [...C[29] || (C[29] = [
                  g(" Cancel ", -1)
                ])]),
                _: 1
              }),
              t.error ? (s(), o(W, { key: 0 }, [
                w(se, {
                  variant: "secondary",
                  loading: t.pulling,
                  onClick: C[5] || (C[5] = (R) => P(!1))
                }, {
                  default: l(() => [...C[30] || (C[30] = [
                    g(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                w(se, {
                  variant: "destructive",
                  loading: t.pulling,
                  onClick: C[6] || (C[6] = (R) => P(!0))
                }, {
                  default: l(() => [...C[31] || (C[31] = [
                    g(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (x = t.preview) != null && x.has_uncommitted_changes ? (s(), M(se, {
                key: 1,
                variant: "destructive",
                loading: t.pulling,
                onClick: C[7] || (C[7] = (R) => P(!0))
              }, {
                default: l(() => [...C[32] || (C[32] = [
                  g(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : t.preview && t.preview.commits_behind > 0 ? (s(), o(W, { key: 2 }, [
                v.value && !_.value ? (s(), M(se, {
                  key: 0,
                  variant: "primary",
                  onClick: C[8] || (C[8] = (R) => i("openConflictResolution"))
                }, {
                  default: l(() => [
                    g(" Resolve Conflicts (" + a(k.value) + "/" + a(y.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (s(), M(se, {
                  key: 1,
                  variant: "primary",
                  loading: t.pulling,
                  disabled: !b.value,
                  onClick: C[9] || (C[9] = (R) => P(!1))
                }, {
                  default: l(() => [...C[33] || (C[33] = [
                    g(" Pull Changes ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading", "disabled"]))
              ], 64)) : r("", !0)
            ])
          ])
        ])) : r("", !0)
      ]);
    };
  }
}), ap = /* @__PURE__ */ ae(np, [["__scopeId", "data-v-300c7b2f"]]), lp = { class: "modal-header" }, ip = { class: "modal-title" }, rp = { class: "modal-body" }, dp = {
  key: 0,
  class: "loading-state"
}, cp = {
  key: 1,
  class: "warning-box"
}, up = {
  key: 0,
  class: "commits-section"
}, mp = { class: "commit-list" }, vp = { class: "commit-hash" }, fp = { class: "commit-message" }, pp = { class: "commit-date" }, gp = { class: "force-option" }, hp = { class: "checkbox-option" }, yp = { class: "commit-summary" }, wp = {
  key: 0,
  class: "commits-section"
}, kp = { class: "commit-list" }, bp = { class: "commit-hash" }, _p = { class: "commit-message" }, $p = { class: "commit-date" }, Cp = {
  key: 1,
  class: "up-to-date"
}, xp = { class: "modal-actions" }, Sp = /* @__PURE__ */ oe({
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
    const n = c, i = h(!1);
    function f(p) {
      n("push", { force: p });
    }
    return (p, u) => {
      var m, d, v;
      return s(), M(Ye, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: u[7] || (u[7] = (y) => p.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: u[6] || (u[6] = Be(() => {
            }, ["stop"]))
          }, [
            e("div", lp, [
              e("h3", ip, "PUSH TO " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: u[0] || (u[0] = (y) => p.$emit("close"))
              }, "✕")
            ]),
            e("div", rp, [
              t.loading ? (s(), o("div", dp, [...u[8] || (u[8] = [
                e("span", { class: "spinner" }, "⟳", -1),
                g(" Loading preview... ", -1)
              ])])) : (m = t.preview) != null && m.has_uncommitted_changes ? (s(), o("div", cp, [...u[9] || (u[9] = [
                e("span", { class: "warning-icon" }, "⚠", -1),
                e("div", null, [
                  e("strong", null, "UNCOMMITTED CHANGES"),
                  e("p", null, "Commit your changes before pushing.")
                ], -1)
              ])])) : (d = t.preview) != null && d.remote_has_new_commits ? (s(), o(W, { key: 2 }, [
                u[13] || (u[13] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("div", null, [
                    e("strong", null, "REMOTE HAS NEW COMMITS"),
                    e("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                  ])
                ], -1)),
                t.preview.commits_ahead > 0 ? (s(), o("div", up, [
                  u[10] || (u[10] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", mp, [
                    (s(!0), o(W, null, ne(t.preview.commits, (y) => (s(), o("div", {
                      key: y.hash,
                      class: "commit-item"
                    }, [
                      e("span", vp, a(y.short_hash || y.hash.slice(0, 7)), 1),
                      e("span", fp, a(y.message), 1),
                      e("span", pp, a(y.date_relative || y.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                e("div", gp, [
                  e("label", hp, [
                    De(e("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": u[1] || (u[1] = (y) => i.value = y)
                    }, null, 512), [
                      [is, i.value]
                    ]),
                    u[11] || (u[11] = e("span", null, "Force push (overwrite remote)", -1))
                  ]),
                  u[12] || (u[12] = e("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                ])
              ], 64)) : t.preview ? (s(), o(W, { key: 3 }, [
                e("div", yp, [
                  u[14] || (u[14] = e("span", { class: "icon" }, "📤", -1)),
                  g(" Pushing " + a(t.preview.commits_ahead) + " commit" + a(t.preview.commits_ahead !== 1 ? "s" : "") + " to " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                t.preview.commits_ahead > 0 ? (s(), o("div", wp, [
                  u[15] || (u[15] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", kp, [
                    (s(!0), o(W, null, ne(t.preview.commits, (y) => (s(), o("div", {
                      key: y.hash,
                      class: "commit-item"
                    }, [
                      e("span", bp, a(y.short_hash || y.hash.slice(0, 7)), 1),
                      e("span", _p, a(y.message), 1),
                      e("span", $p, a(y.date_relative || y.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (s(), o("div", Cp, [
                  u[16] || (u[16] = e("span", { class: "icon" }, "✓", -1)),
                  g(" Nothing to push - already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]))
              ], 64)) : r("", !0)
            ]),
            e("div", xp, [
              w(se, {
                variant: "secondary",
                onClick: u[2] || (u[2] = (y) => p.$emit("close"))
              }, {
                default: l(() => [...u[17] || (u[17] = [
                  g(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (v = t.preview) != null && v.remote_has_new_commits ? (s(), o(W, { key: 0 }, [
                w(se, {
                  variant: "secondary",
                  onClick: u[3] || (u[3] = (y) => p.$emit("pull-first"))
                }, {
                  default: l(() => [...u[18] || (u[18] = [
                    g(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                w(se, {
                  variant: "destructive",
                  disabled: !i.value,
                  loading: t.pushing,
                  onClick: u[4] || (u[4] = (y) => f(!0))
                }, {
                  default: l(() => [...u[19] || (u[19] = [
                    g(" Force Push ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ], 64)) : t.preview && t.preview.commits_ahead > 0 && !t.preview.has_uncommitted_changes ? (s(), M(se, {
                key: 1,
                variant: "primary",
                loading: t.pushing,
                onClick: u[5] || (u[5] = (y) => f(!1))
              }, {
                default: l(() => [...u[20] || (u[20] = [
                  g(" Push ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : r("", !0)
            ])
          ])
        ])) : r("", !0)
      ]);
    };
  }
}), Ip = /* @__PURE__ */ ae(Sp, [["__scopeId", "data-v-bc6ded53"]]), Ep = { class: "resolution-choice-group" }, Pp = ["disabled"], Mp = ["disabled"], Rp = /* @__PURE__ */ oe({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (s(), o("div", Ep, [
      e("button", {
        class: fe(["choice-btn", "mine", { selected: t.modelValue === "take_base" }]),
        onClick: n[0] || (n[0] = (i) => c.$emit("update:modelValue", "take_base")),
        disabled: t.disabled
      }, [...n[2] || (n[2] = [
        e("span", { class: "choice-icon" }, "◀", -1),
        e("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, Pp),
      e("button", {
        class: fe(["choice-btn", "theirs", { selected: t.modelValue === "take_target" }]),
        onClick: n[1] || (n[1] = (i) => c.$emit("update:modelValue", "take_target")),
        disabled: t.disabled
      }, [...n[3] || (n[3] = [
        e("span", { class: "choice-label" }, "Keep Theirs", -1),
        e("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, Mp)
    ]));
  }
}), Tp = /* @__PURE__ */ ae(Rp, [["__scopeId", "data-v-985715ed"]]), Dp = { class: "conflict-header" }, Lp = { class: "conflict-info" }, zp = { class: "workflow-name" }, Up = { class: "conflict-description" }, Np = {
  key: 0,
  class: "resolved-badge"
}, Op = { class: "resolved-text" }, Ap = { class: "conflict-hashes" }, Bp = { class: "hash-item" }, Fp = { class: "hash-item" }, Vp = { class: "conflict-actions" }, Wp = /* @__PURE__ */ oe({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(t, { emit: c }) {
    const n = t, i = c, f = h(n.resolution);
    Ct(() => n.resolution, (d) => {
      f.value = d;
    }), Ct(f, (d) => {
      d && i("resolve", d);
    });
    const p = U(() => f.value !== null), u = U(() => n.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), m = U(() => {
      switch (f.value) {
        case "take_base":
          return "Keep Mine";
        case "take_target":
          return "Keep Theirs";
        default:
          return "";
      }
    });
    return (d, v) => {
      var y, k;
      return s(), o("div", {
        class: fe(["conflict-item", { resolved: p.value }])
      }, [
        e("div", Dp, [
          v[2] || (v[2] = e("span", { class: "conflict-icon" }, "⚠", -1)),
          e("div", Lp, [
            e("code", zp, a(t.conflict.name) + ".json", 1),
            e("div", Up, a(u.value), 1)
          ]),
          p.value ? (s(), o("div", Np, [
            v[1] || (v[1] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", Op, a(m.value), 1)
          ])) : r("", !0)
        ]),
        e("div", Ap, [
          e("span", Bp, [
            v[3] || (v[3] = g("Your: ", -1)),
            e("code", null, a(((y = t.conflict.base_hash) == null ? void 0 : y.slice(0, 8)) || "n/a"), 1)
          ]),
          e("span", Fp, [
            v[4] || (v[4] = g("Theirs: ", -1)),
            e("code", null, a(((k = t.conflict.target_hash) == null ? void 0 : k.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        e("div", Vp, [
          w(Tp, {
            modelValue: f.value,
            "onUpdate:modelValue": v[0] || (v[0] = (_) => f.value = _),
            disabled: t.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), Gp = /* @__PURE__ */ ae(Wp, [["__scopeId", "data-v-506d3bbf"]]), jp = { class: "resolution-content" }, Hp = {
  key: 0,
  class: "error-box"
}, Kp = { class: "resolution-header" }, qp = { class: "header-stats" }, Yp = { class: "stat" }, Jp = { class: "stat-value" }, Xp = { class: "stat resolved" }, Qp = { class: "stat-value" }, Zp = {
  key: 0,
  class: "stat pending"
}, eg = { class: "stat-value" }, tg = { class: "conflicts-list" }, sg = {
  key: 1,
  class: "all-resolved-message"
}, og = /* @__PURE__ */ oe({
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
    const n = t, i = c, f = U(() => n.resolutions.size), p = U(() => n.workflowConflicts.length - f.value), u = U(() => f.value === n.workflowConflicts.length), m = U(
      () => n.operationType === "pull" ? "Validate & Pull" : "Validate & Merge"
    );
    function d(_) {
      const b = n.resolutions.get(_);
      return (b == null ? void 0 : b.resolution) ?? null;
    }
    function v(_, b) {
      i("resolve", _, b);
    }
    function y() {
      i("close");
    }
    function k() {
      i("apply");
    }
    return (_, b) => (s(), M(ot, {
      title: `Resolve Workflow Conflicts: ${t.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: y
    }, {
      body: l(() => [
        e("div", jp, [
          t.error ? (s(), o("div", Hp, [
            b[1] || (b[1] = e("span", { class: "error-icon" }, "✕", -1)),
            e("div", null, [
              b[0] || (b[0] = e("strong", null, "Validation Failed", -1)),
              e("p", null, a(t.error), 1)
            ])
          ])) : r("", !0),
          e("div", Kp, [
            e("div", qp, [
              e("div", Yp, [
                e("span", Jp, a(t.workflowConflicts.length), 1),
                b[2] || (b[2] = e("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              e("div", Xp, [
                e("span", Qp, a(f.value), 1),
                b[3] || (b[3] = e("span", { class: "stat-label" }, "resolved", -1))
              ]),
              p.value > 0 ? (s(), o("div", Zp, [
                e("span", eg, a(p.value), 1),
                b[4] || (b[4] = e("span", { class: "stat-label" }, "pending", -1))
              ])) : r("", !0)
            ]),
            b[5] || (b[5] = e("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          e("div", tg, [
            (s(!0), o(W, null, ne(t.workflowConflicts, (T) => (s(), M(Gp, {
              key: T.name,
              conflict: T,
              resolution: d(T.name),
              onResolve: (P) => v(T.name, P)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          u.value ? (s(), o("div", sg, [
            b[6] || (b[6] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", null, 'All conflicts resolved! Click "' + a(m.value) + '" to continue.', 1)
          ])) : r("", !0)
        ])
      ]),
      footer: l(() => [
        w(ge, {
          variant: "secondary",
          onClick: y
        }, {
          default: l(() => [...b[7] || (b[7] = [
            g(" Cancel ", -1)
          ])]),
          _: 1
        }),
        b[8] || (b[8] = e("div", { class: "footer-spacer" }, null, -1)),
        w(ge, {
          variant: "primary",
          disabled: !u.value || t.validating,
          loading: t.validating,
          onClick: k
        }, {
          default: l(() => [
            g(a(m.value), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), ng = /* @__PURE__ */ ae(og, [["__scopeId", "data-v-c58d150d"]]), ag = { class: "node-conflict-item" }, lg = { class: "node-header" }, ig = { class: "node-name" }, rg = { class: "node-id" }, dg = { class: "version-comparison" }, cg = { class: "version yours" }, ug = { class: "version theirs" }, mg = { class: "chosen-version" }, vg = { class: "chosen" }, fg = { class: "chosen-reason" }, pg = { class: "affected-workflows" }, gg = { class: "wf-source" }, hg = { class: "wf-version" }, yg = /* @__PURE__ */ oe({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(t) {
    return (c, n) => (s(), o("div", ag, [
      e("div", lg, [
        e("code", ig, a(t.conflict.node_name), 1),
        e("span", rg, "(" + a(t.conflict.node_id) + ")", 1)
      ]),
      e("div", dg, [
        e("div", cg, [
          n[0] || (n[0] = e("span", { class: "label" }, "Your version:", -1)),
          e("code", null, a(t.conflict.base_version), 1)
        ]),
        n[2] || (n[2] = e("span", { class: "arrow" }, "→", -1)),
        e("div", ug, [
          n[1] || (n[1] = e("span", { class: "label" }, "Their version:", -1)),
          e("code", null, a(t.conflict.target_version), 1)
        ])
      ]),
      e("div", mg, [
        n[3] || (n[3] = e("span", { class: "label" }, "Will install:", -1)),
        e("code", vg, a(t.conflict.chosen_version), 1),
        e("span", fg, a(t.conflict.chosen_reason), 1)
      ]),
      e("details", pg, [
        e("summary", null, " Affected workflows (" + a(t.conflict.affected_workflows.length) + ") ", 1),
        e("ul", null, [
          (s(!0), o(W, null, ne(t.conflict.affected_workflows, (i) => (s(), o("li", {
            key: i.name
          }, [
            e("code", null, a(i.name), 1),
            e("span", gg, "(" + a(i.source === "base" ? "yours" : "theirs") + ")", 1),
            e("span", hg, "needs v" + a(i.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), wg = /* @__PURE__ */ ae(yg, [["__scopeId", "data-v-8b626725"]]), kg = { class: "validation-content" }, bg = {
  key: 0,
  class: "compatible-message"
}, _g = { class: "conflicts-list" }, $g = {
  key: 2,
  class: "warnings-section"
}, Cg = /* @__PURE__ */ oe({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(t, { emit: c }) {
    const n = t, i = c, f = U(() => n.validation.is_compatible ? n.operationType === "pull" ? "Pull" : "Merge" : n.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (p, u) => (s(), M(ot, {
      title: "Compatibility Check",
      size: "lg",
      onClose: u[3] || (u[3] = (m) => i("cancel"))
    }, {
      body: l(() => [
        e("div", kg, [
          t.validation.is_compatible && t.validation.node_conflicts.length === 0 ? (s(), o("div", bg, [
            u[5] || (u[5] = e("span", { class: "icon" }, "✓", -1)),
            e("div", null, [
              u[4] || (u[4] = e("strong", null, "All clear!", -1)),
              e("p", null, "Your workflow choices are compatible. Ready to " + a(t.operationType) + ".", 1)
            ])
          ])) : t.validation.node_conflicts.length > 0 ? (s(), o(W, { key: 1 }, [
            u[6] || (u[6] = e("div", { class: "warning-header" }, [
              e("span", { class: "icon" }, "⚠"),
              e("div", null, [
                e("strong", null, "Node Version Differences"),
                e("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            e("div", _g, [
              (s(!0), o(W, null, ne(t.validation.node_conflicts, (m) => (s(), M(wg, {
                key: m.node_id,
                conflict: m
              }, null, 8, ["conflict"]))), 128))
            ]),
            u[7] || (u[7] = e("div", { class: "info-box" }, [
              e("strong", null, "What happens if you proceed?"),
              e("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : r("", !0),
          t.validation.warnings.length > 0 ? (s(), o("div", $g, [
            u[8] || (u[8] = e("h4", null, "Warnings", -1)),
            e("ul", null, [
              (s(!0), o(W, null, ne(t.validation.warnings, (m, d) => (s(), o("li", { key: d }, a(m), 1))), 128))
            ])
          ])) : r("", !0)
        ])
      ]),
      footer: l(() => [
        w(ge, {
          variant: "secondary",
          onClick: u[0] || (u[0] = (m) => i("cancel"))
        }, {
          default: l(() => [...u[9] || (u[9] = [
            g(" Cancel ", -1)
          ])]),
          _: 1
        }),
        u[11] || (u[11] = e("div", { class: "footer-spacer" }, null, -1)),
        w(ge, {
          variant: "secondary",
          onClick: u[1] || (u[1] = (m) => i("goBack"))
        }, {
          default: l(() => [...u[10] || (u[10] = [
            g(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        w(ge, {
          variant: "primary",
          loading: t.executing,
          onClick: u[2] || (u[2] = (m) => i("proceed"))
        }, {
          default: l(() => [
            g(a(f.value), 1)
          ]),
          _: 1
        }, 8, ["loading"])
      ]),
      _: 1
    }));
  }
}), xg = /* @__PURE__ */ ae(Cg, [["__scopeId", "data-v-fefd26ed"]]), Sg = { key: 0 }, Ig = /* @__PURE__ */ oe({
  __name: "RemotesSection",
  emits: ["toast"],
  setup(t, { emit: c }) {
    const n = c, {
      getRemotes: i,
      addRemote: f,
      removeRemote: p,
      updateRemoteUrl: u,
      fetchRemote: m,
      getRemoteSyncStatus: d,
      getPullPreview: v,
      pullFromRemote: y,
      getPushPreview: k,
      pushToRemote: _,
      validateMerge: b
    } = He(), T = h([]), P = h(null), $ = h({}), C = h(!1), B = h(null), x = h(""), R = h(!1), q = h(null), A = h(!1), G = h("add"), I = h({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), D = U(() => {
      if (!x.value.trim()) return T.value;
      const F = x.value.toLowerCase();
      return T.value.filter(
        (ee) => ee.name.toLowerCase().includes(F) || ee.fetch_url.toLowerCase().includes(F) || ee.push_url.toLowerCase().includes(F)
      );
    });
    async function O() {
      C.value = !0, B.value = null;
      try {
        const F = await i();
        T.value = F.remotes, P.value = F.current_branch_tracking || null, await Promise.all(
          F.remotes.map(async (ee) => {
            const _e = await d(ee.name);
            _e && ($.value[ee.name] = _e);
          })
        );
      } catch (F) {
        B.value = F instanceof Error ? F.message : "Failed to load remotes";
      } finally {
        C.value = !1;
      }
    }
    function ie() {
      G.value = "add", I.value = { name: "", fetchUrl: "", pushUrl: "" }, A.value = !0;
    }
    function te(F) {
      const ee = T.value.find((_e) => _e.name === F);
      ee && (G.value = "edit", I.value = {
        name: ee.name,
        fetchUrl: ee.fetch_url,
        pushUrl: ee.push_url
      }, A.value = !0);
    }
    async function J(F) {
      try {
        G.value === "add" ? await f(F.name, F.fetchUrl) : await u(F.name, F.fetchUrl, F.pushUrl || void 0), A.value = !1, await O();
      } catch (ee) {
        B.value = ee instanceof Error ? ee.message : "Operation failed";
      }
    }
    function re() {
      A.value = !1, I.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function X(F) {
      q.value = F;
      try {
        await m(F);
        const ee = await d(F);
        ee && ($.value[F] = ee), n("toast", `✓ Fetched from ${F}`, "success");
      } catch (ee) {
        n("toast", ee instanceof Error ? ee.message : "Fetch failed", "error");
      } finally {
        q.value = null;
      }
    }
    async function z(F) {
      if (confirm(`Remove remote "${F}"?`))
        try {
          await p(F), await O();
        } catch (ee) {
          B.value = ee instanceof Error ? ee.message : "Failed to remove remote";
        }
    }
    function L() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const S = h("idle"), de = U(() => S.value === "pull_preview"), Z = U(
      () => S.value === "resolving" || S.value === "validating"
    ), be = U(
      () => S.value === "validation_review" || S.value === "executing"
    ), xe = h(!1), Ie = h(null), Oe = h(!1), me = h(null), he = h(!1), we = h(null), Q = h(null), le = h(/* @__PURE__ */ new Map()), ke = h(null), Ue = h(null), nt = U(() => we.value && Ys(we.value) ? we.value : null);
    async function Je(F) {
      me.value = F, S.value = "pull_preview", he.value = !0, we.value = null, Q.value = null;
      try {
        we.value = await v(F);
      } catch (ee) {
        Q.value = ee instanceof Error ? ee.message : "Failed to load pull preview";
      } finally {
        he.value = !1;
      }
    }
    function Pe() {
      S.value = "idle", we.value = null, Q.value = null, me.value = null;
    }
    async function at(F) {
      if (!me.value) return;
      S.value = "executing", Q.value = null;
      const ee = me.value;
      try {
        const _e = await y(ee, F);
        if (_e.rolled_back) {
          Q.value = `Pull failed and was rolled back: ${_e.error || "Unknown error"}`, S.value = "pull_preview";
          return;
        }
        Le(), S.value = "idle", n("toast", `✓ Pulled from ${ee}`, "success"), await O();
      } catch (_e) {
        Q.value = _e instanceof Error ? _e.message : "Pull failed", S.value = "pull_preview";
      }
    }
    function Ze() {
      nt.value && (S.value = "resolving", Ue.value = null);
    }
    function Ke(F, ee) {
      le.value.set(F, { name: F, resolution: ee });
    }
    function dt() {
      S.value = "pull_preview";
    }
    async function $e() {
      S.value = "validating", Ue.value = null;
      try {
        const F = Array.from(le.value.values());
        ke.value = await b(me.value, F), S.value = "validation_review";
      } catch (F) {
        Ue.value = F instanceof Error ? F.message : "Validation failed", S.value = "resolving";
      }
    }
    async function Ae() {
      S.value = "executing";
      const F = me.value;
      try {
        const ee = Array.from(le.value.values()), _e = await y(F, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: ee
        });
        if (_e.rolled_back) {
          Q.value = `Pull failed and was rolled back: ${_e.error || "Unknown error"}`, S.value = "pull_preview";
          return;
        }
        Le(), S.value = "idle", n("toast", `✓ Pulled from ${F}`, "success"), await O();
      } catch (ee) {
        Q.value = ee instanceof Error ? ee.message : "Pull failed", S.value = "validation_review";
      }
    }
    function lt() {
      S.value = "resolving";
    }
    function it() {
      Le(), S.value = "idle";
    }
    function Le() {
      le.value.clear(), ke.value = null, Ue.value = null, Q.value = null, we.value = null, me.value = null;
    }
    async function ve(F) {
      me.value = F, xe.value = !0, he.value = !0, Ie.value = null;
      try {
        Ie.value = await k(F);
      } catch (ee) {
        B.value = ee instanceof Error ? ee.message : "Failed to load push preview";
      } finally {
        he.value = !1;
      }
    }
    function K() {
      xe.value = !1, Ie.value = null, me.value = null;
    }
    async function Y(F) {
      if (!me.value) return;
      Oe.value = !0;
      const ee = me.value;
      try {
        await _(ee, F), K(), n("toast", `✓ Pushed to ${ee}`, "success"), await O();
      } catch (_e) {
        n("toast", _e instanceof Error ? _e.message : "Push failed", "error");
      } finally {
        Oe.value = !1;
      }
    }
    function E() {
      const F = me.value;
      K(), F && Je(F);
    }
    return We(O), (F, ee) => (s(), o(W, null, [
      w(tt, null, {
        header: l(() => [
          w(st, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: ee[0] || (ee[0] = (_e) => R.value = !0)
          }, {
            actions: l(() => [
              A.value ? r("", !0) : (s(), M(se, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: ie
              }, {
                default: l(() => [...ee[3] || (ee[3] = [
                  g(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          A.value ? r("", !0) : (s(), M(Kt, {
            key: 0,
            modelValue: x.value,
            "onUpdate:modelValue": ee[1] || (ee[1] = (_e) => x.value = _e),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: l(() => [
          C.value ? (s(), M(Pt, {
            key: 0,
            message: "Loading remotes..."
          })) : B.value ? (s(), M(Mt, {
            key: 1,
            message: B.value,
            retry: !0,
            onRetry: O
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            A.value ? (s(), M(_f, {
              key: 0,
              mode: G.value,
              "remote-name": I.value.name,
              "fetch-url": I.value.fetchUrl,
              "push-url": I.value.pushUrl,
              onSubmit: J,
              onCancel: re
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : r("", !0),
            T.value.length && !A.value ? (s(), M(ns, {
              key: 1,
              variant: "compact"
            }, {
              default: l(() => [
                g(" Total: " + a(T.value.length) + " remote" + a(T.value.length !== 1 ? "s" : "") + " ", 1),
                P.value ? (s(), o("span", Sg, " • Tracking: " + a(P.value.remote) + "/" + a(P.value.branch), 1)) : r("", !0)
              ]),
              _: 1
            })) : r("", !0),
            D.value.length && !A.value ? (s(), M(Ne, {
              key: 2,
              title: "REMOTES",
              count: D.value.length
            }, {
              default: l(() => [
                (s(!0), o(W, null, ne(D.value, (_e) => (s(), M(df, {
                  key: _e.name,
                  remote: _e,
                  "sync-status": $.value[_e.name],
                  "fetching-remote": q.value,
                  onFetch: X,
                  onEdit: te,
                  onRemove: z,
                  onPull: Je,
                  onPush: ve
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            !D.value.length && !A.value ? (s(), M(yt, {
              key: 3,
              icon: "🌐",
              message: x.value ? `No remotes match '${x.value}'` : "No remotes configured."
            }, {
              actions: l(() => [
                w(se, {
                  variant: "primary",
                  onClick: ie
                }, {
                  default: l(() => [...ee[4] || (ee[4] = [
                    g(" Add Your First Remote ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["message"])) : r("", !0)
          ], 64))
        ]),
        _: 1
      }),
      w(wt, {
        show: R.value,
        title: "About Git Remotes",
        onClose: ee[2] || (ee[2] = (_e) => R.value = !1)
      }, {
        content: l(() => [...ee[5] || (ee[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            g(" The "),
            e("strong", null, '"origin"'),
            g(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: l(() => [
          w(se, {
            variant: "link",
            onClick: L
          }, {
            default: l(() => [...ee[6] || (ee[6] = [
              g(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w(ap, {
        show: de.value,
        "remote-name": me.value || "",
        preview: we.value,
        loading: he.value,
        pulling: S.value === "executing",
        error: Q.value,
        "conflict-resolutions": le.value,
        onClose: Pe,
        onPull: at,
        onOpenConflictResolution: Ze
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      w(Ip, {
        show: xe.value,
        "remote-name": me.value || "",
        preview: Ie.value,
        loading: he.value,
        pushing: Oe.value,
        onClose: K,
        onPush: Y,
        onPullFirst: E
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      Z.value && nt.value ? (s(), M(ng, {
        key: 0,
        "workflow-conflicts": nt.value.workflow_conflicts,
        resolutions: le.value,
        "operation-type": "pull",
        validating: S.value === "validating",
        error: Ue.value,
        onClose: dt,
        onResolve: Ke,
        onApply: $e
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : r("", !0),
      be.value && ke.value ? (s(), M(xg, {
        key: 1,
        validation: ke.value,
        "operation-type": "pull",
        executing: S.value === "executing",
        onProceed: Ae,
        onGoBack: lt,
        onCancel: it
      }, null, 8, ["validation", "executing"])) : r("", !0)
    ], 64));
  }
}), Eg = /* @__PURE__ */ ae(Ig, [["__scopeId", "data-v-9ae3b76d"]]), Pg = { class: "setting-info" }, Mg = { class: "setting-label" }, Rg = {
  key: 0,
  class: "required-marker"
}, Tg = {
  key: 0,
  class: "setting-description"
}, Dg = { class: "setting-control" }, Lg = /* @__PURE__ */ oe({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (c, n) => (s(), o("div", {
      class: fe(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", Pg, [
        e("div", Mg, [
          g(a(t.label) + " ", 1),
          t.required ? (s(), o("span", Rg, "*")) : r("", !0)
        ]),
        t.description ? (s(), o("div", Tg, a(t.description), 1)) : r("", !0)
      ]),
      e("div", Dg, [
        Me(c.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), fs = /* @__PURE__ */ ae(Lg, [["__scopeId", "data-v-cb5d236c"]]), zg = { class: "toggle" }, Ug = ["checked", "disabled"], Ng = /* @__PURE__ */ oe({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (s(), o("label", zg, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: n[0] || (n[0] = (i) => c.$emit("update:modelValue", i.target.checked)),
        class: "toggle-input"
      }, null, 40, Ug),
      n[1] || (n[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), Og = /* @__PURE__ */ ae(Ng, [["__scopeId", "data-v-71c0f550"]]), Ag = { class: "workspace-settings-content" }, Bg = { class: "settings-section" }, Fg = { class: "path-setting" }, Vg = { class: "path-value" }, Wg = { class: "path-setting" }, Gg = { class: "path-value" }, jg = { class: "settings-section" }, Hg = { class: "settings-section" }, Kg = { class: "settings-section" }, qg = /* @__PURE__ */ oe({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(t, { expose: c, emit: n }) {
    const i = t, f = n, { getConfig: p, updateConfig: u } = He(), m = h(!1), d = h(null), v = h(null), y = h(null), k = h(null), _ = h(""), b = h(""), T = h(!1);
    function P(A) {
      return A.join(" ");
    }
    function $(A) {
      return A.trim() ? A.trim().split(/\s+/) : [];
    }
    const C = U(() => {
      if (!k.value) return !1;
      const A = _.value !== (k.value.civitai_api_key || ""), G = b.value !== P(k.value.comfyui_extra_args || []);
      return A || G;
    });
    async function B() {
      m.value = !0, d.value = null;
      try {
        y.value = await p(i.workspacePath || void 0), k.value = { ...y.value }, _.value = y.value.civitai_api_key || "", b.value = P(y.value.comfyui_extra_args || []);
        const A = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        T.value = A === "true";
      } catch (A) {
        d.value = A instanceof Error ? A.message : "Failed to load settings";
      } finally {
        m.value = !1;
      }
    }
    async function x() {
      var A, G;
      v.value = null;
      try {
        const I = {};
        _.value !== (((A = k.value) == null ? void 0 : A.civitai_api_key) || "") && (I.civitai_api_key = _.value || null), b.value !== P(((G = k.value) == null ? void 0 : G.comfyui_extra_args) || []) && (I.comfyui_extra_args = $(b.value)), await u(I, i.workspacePath || void 0), await B(), v.value = { type: "success", message: "Settings saved successfully" }, f("saved"), setTimeout(() => {
          v.value = null;
        }, 3e3);
      } catch (I) {
        const D = I instanceof Error ? I.message : "Failed to save settings";
        v.value = { type: "error", message: D }, f("error", D);
      }
    }
    function R() {
      k.value && (_.value = k.value.civitai_api_key || "", b.value = P(k.value.comfyui_extra_args || []), v.value = null);
    }
    function q(A) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(A)), console.log("[ComfyGit] Auto-refresh setting saved:", A);
    }
    return c({
      saveSettings: x,
      resetSettings: R,
      hasChanges: C,
      loadSettings: B
    }), We(B), (A, G) => (s(), o("div", Ag, [
      m.value ? (s(), M(Pt, {
        key: 0,
        message: "Loading workspace settings..."
      })) : d.value ? (s(), M(Mt, {
        key: 1,
        message: d.value,
        retry: !0,
        onRetry: B
      }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
        w(Ne, { title: "WORKSPACE PATHS" }, {
          default: l(() => {
            var I, D;
            return [
              e("div", Bg, [
                e("div", Fg, [
                  G[3] || (G[3] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                  G[4] || (G[4] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  e("div", Vg, a(((I = y.value) == null ? void 0 : I.workspace_path) || "Loading..."), 1)
                ]),
                e("div", Wg, [
                  G[5] || (G[5] = e("div", { class: "path-label" }, "Models Directory", -1)),
                  G[6] || (G[6] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  e("div", Gg, a(((D = y.value) == null ? void 0 : D.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        w(Ne, { title: "API CREDENTIALS" }, {
          default: l(() => [
            e("div", jg, [
              w(fs, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: l(() => [
                  w(rs, {
                    modelValue: _.value,
                    "onUpdate:modelValue": G[0] || (G[0] = (I) => _.value = I),
                    type: "password",
                    placeholder: "Enter CivitAI API key...",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        w(Ne, { title: "COMFYUI SETTINGS" }, {
          default: l(() => [
            e("div", Hg, [
              w(fs, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: l(() => [
                  w(rs, {
                    modelValue: b.value,
                    "onUpdate:modelValue": G[1] || (G[1] = (I) => b.value = I),
                    placeholder: "--lowvram --listen 0.0.0.0",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              G[7] || (G[7] = e("div", { class: "setting-hint" }, [
                g(" Common flags: "),
                e("code", null, "--lowvram"),
                g(", "),
                e("code", null, "--highvram"),
                g(", "),
                e("code", null, "--listen 0.0.0.0"),
                g(", "),
                e("code", null, "--cuda-device 1")
              ], -1))
            ])
          ]),
          _: 1
        }),
        w(Ne, { title: "UI SETTINGS" }, {
          default: l(() => [
            e("div", Kg, [
              w(fs, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: l(() => [
                  w(Og, {
                    modelValue: T.value,
                    "onUpdate:modelValue": [
                      G[2] || (G[2] = (I) => T.value = I),
                      q
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        v.value ? (s(), M(ns, {
          key: 0,
          variant: (v.value.type === "success", "compact")
        }, {
          default: l(() => [
            e("span", {
              style: Et({ color: v.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
            }, a(v.value.message), 5)
          ]),
          _: 1
        }, 8, ["variant"])) : r("", !0)
      ], 64))
    ]));
  }
}), Js = /* @__PURE__ */ ae(qg, [["__scopeId", "data-v-9f44552d"]]), Yg = /* @__PURE__ */ oe({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const c = h(null);
    function n() {
      console.log("[ComfyGit] Settings saved");
    }
    return (i, f) => (s(), M(tt, null, {
      header: l(() => [
        w(st, { title: "WORKSPACE SETTINGS" }, {
          actions: l(() => {
            var p, u;
            return [
              w(se, {
                variant: "primary",
                size: "sm",
                disabled: !((p = c.value) != null && p.hasChanges),
                onClick: f[0] || (f[0] = (m) => {
                  var d;
                  return (d = c.value) == null ? void 0 : d.saveSettings();
                })
              }, {
                default: l(() => [...f[2] || (f[2] = [
                  g(" Save Changes ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"]),
              (u = c.value) != null && u.hasChanges ? (s(), M(se, {
                key: 0,
                variant: "ghost",
                size: "sm",
                onClick: f[1] || (f[1] = (m) => {
                  var d;
                  return (d = c.value) == null ? void 0 : d.resetSettings();
                })
              }, {
                default: l(() => [...f[3] || (f[3] = [
                  g(" Reset ", -1)
                ])]),
                _: 1
              })) : r("", !0)
            ];
          }),
          _: 1
        })
      ]),
      content: l(() => [
        w(Js, {
          ref_key: "contentRef",
          ref: c,
          onSaved: n
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), Jg = /* @__PURE__ */ oe({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: c, getWorkspaceLogPath: n, openFile: i } = He(), f = h([]), p = h(!1), u = h(null), m = h(!1), d = h(null), v = h(null), y = h(!1), k = U(() => f.value.length === 0 ? [] : f.value.map((P) => ({
      text: `${P.timestamp} - ${P.name} - ${P.level} - ${P.func}:${P.line} - ${P.message}`,
      level: P.level
    })));
    async function _() {
      p.value = !0, u.value = null;
      try {
        f.value = await c(void 0, 500);
      } catch (P) {
        u.value = P instanceof Error ? P.message : "Failed to load workspace logs";
      } finally {
        p.value = !1, setTimeout(() => {
          var P;
          (P = d.value) != null && P.parentElement && (d.value.parentElement.scrollTop = d.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    async function b() {
      try {
        const P = await n();
        P.exists && (v.value = P.path);
      } catch {
      }
    }
    async function T() {
      if (v.value) {
        y.value = !0;
        try {
          await i(v.value);
        } catch (P) {
          console.error("Failed to open log file:", P);
        } finally {
          y.value = !1;
        }
      }
    }
    return We(() => {
      _(), b();
    }), (P, $) => (s(), o(W, null, [
      w(tt, null, {
        header: l(() => [
          w(st, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: $[0] || ($[0] = (C) => m.value = !0)
          }, {
            actions: l(() => [
              w(se, {
                variant: "secondary",
                size: "sm",
                onClick: T,
                disabled: !v.value || y.value,
                title: "Open log file in default editor"
              }, {
                default: l(() => [
                  g(a(y.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              w(se, {
                variant: "secondary",
                size: "sm",
                onClick: _,
                disabled: p.value
              }, {
                default: l(() => [
                  g(a(p.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: l(() => [
          p.value ? (s(), M(Pt, {
            key: 0,
            message: "Loading workspace logs..."
          })) : u.value ? (s(), M(Mt, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: _
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            f.value.length === 0 ? (s(), M(yt, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: d,
              class: "log-output"
            }, [
              (s(!0), o(W, null, ne(k.value, (C, B) => (s(), o("div", {
                key: B,
                class: fe(`log-line log-level-${C.level.toLowerCase()}`)
              }, a(C.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      w(wt, {
        show: m.value,
        title: "About Workspace Logs",
        onClose: $[2] || ($[2] = (C) => m.value = !1)
      }, {
        content: l(() => [...$[3] || ($[3] = [
          e("p", null, " Workspace logs show system-level events and operations for the entire ComfyGit workspace, including operations that affect multiple environments. ", -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Log Levels:"),
            e("br"),
            e("strong", null, "ERROR:"),
            g(" Critical failures requiring attention"),
            e("br"),
            e("strong", null, "WARNING:"),
            g(" Potential issues or deprecated features"),
            e("br"),
            e("strong", null, "INFO:"),
            g(" General operational information"),
            e("br"),
            e("strong", null, "DEBUG:"),
            g(" Detailed debugging information ")
          ], -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1)
        ])]),
        actions: l(() => [
          w(se, {
            variant: "primary",
            onClick: $[1] || ($[1] = (C) => m.value = !1)
          }, {
            default: l(() => [...$[4] || ($[4] = [
              g(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Xg = /* @__PURE__ */ ae(Jg, [["__scopeId", "data-v-7f05352a"]]), Qg = /* @__PURE__ */ oe({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: c, getStatus: n, getEnvironmentLogPath: i, openFile: f } = He(), p = h([]), u = h(!1), m = h(null), d = h(!1), v = h("production"), y = h(null), k = h(null), _ = h(!1), b = U(() => p.value.length === 0 ? [] : p.value.map((C) => ({
      text: `${C.timestamp} - ${C.name} - ${C.level} - ${C.func}:${C.line} - ${C.message}`,
      level: C.level
    })));
    async function T() {
      u.value = !0, m.value = null;
      try {
        p.value = await c(void 0, 500);
        try {
          const C = await n();
          v.value = C.environment || "production";
        } catch {
        }
      } catch (C) {
        m.value = C instanceof Error ? C.message : "Failed to load environment logs";
      } finally {
        u.value = !1, setTimeout(() => {
          var C;
          (C = y.value) != null && C.parentElement && (y.value.parentElement.scrollTop = y.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    async function P() {
      try {
        const C = await i();
        C.exists && (k.value = C.path);
      } catch {
      }
    }
    async function $() {
      if (k.value) {
        _.value = !0;
        try {
          await f(k.value);
        } catch (C) {
          console.error("Failed to open log file:", C);
        } finally {
          _.value = !1;
        }
      }
    }
    return We(() => {
      T(), P();
    }), (C, B) => (s(), o(W, null, [
      w(tt, null, {
        header: l(() => [
          w(st, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: B[0] || (B[0] = (x) => d.value = !0)
          }, {
            actions: l(() => [
              w(se, {
                variant: "secondary",
                size: "sm",
                onClick: $,
                disabled: !k.value || _.value,
                title: "Open log file in default editor"
              }, {
                default: l(() => [
                  g(a(_.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              w(se, {
                variant: "secondary",
                size: "sm",
                onClick: T,
                disabled: u.value
              }, {
                default: l(() => [
                  g(a(u.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: l(() => [
          u.value ? (s(), M(Pt, {
            key: 0,
            message: "Loading environment logs..."
          })) : m.value ? (s(), M(Mt, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: T
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            p.value.length === 0 ? (s(), M(yt, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: y,
              class: "log-output"
            }, [
              (s(!0), o(W, null, ne(b.value, (x, R) => (s(), o("div", {
                key: R,
                class: fe(`log-line log-level-${x.level.toLowerCase()}`)
              }, a(x.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      w(wt, {
        show: d.value,
        title: "About Environment Logs",
        onClose: B[2] || (B[2] = (x) => d.value = !1)
      }, {
        content: l(() => [
          e("p", null, [
            B[3] || (B[3] = g(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, a(v.value), 1),
            B[4] || (B[4] = g(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          B[5] || (B[5] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Log Levels:"),
            e("br"),
            e("strong", null, "ERROR:"),
            g(" Critical failures requiring attention"),
            e("br"),
            e("strong", null, "WARNING:"),
            g(" Potential issues or important notices"),
            e("br"),
            e("strong", null, "INFO:"),
            g(" General operational information"),
            e("br"),
            e("strong", null, "DEBUG:"),
            g(" Detailed debugging information ")
          ], -1)),
          B[6] || (B[6] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: l(() => [
          w(se, {
            variant: "primary",
            onClick: B[1] || (B[1] = (x) => d.value = !1)
          }, {
            default: l(() => [...B[7] || (B[7] = [
              g(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Zg = /* @__PURE__ */ ae(Qg, [["__scopeId", "data-v-6f8db7ce"]]), eh = { class: "env-title" }, th = {
  key: 0,
  class: "current-badge"
}, sh = {
  key: 0,
  class: "branch-info"
}, oh = /* @__PURE__ */ oe({
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
    return (c, n) => (s(), M(et, {
      status: t.isCurrent ? "synced" : void 0
    }, Nt({
      icon: l(() => [
        g(a(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: l(() => [
        e("div", eh, [
          e("span", null, a(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (s(), o("span", th, "CURRENT")) : r("", !0)
        ])
      ]),
      subtitle: l(() => [
        t.currentBranch ? (s(), o("span", sh, [
          n[0] || (n[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          g(" " + a(t.currentBranch), 1)
        ])) : r("", !0)
      ]),
      actions: l(() => [
        Me(c.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      t.showDetails ? {
        name: "details",
        fn: l(() => [
          w(Ve, {
            label: "Workflows:",
            value: String(t.workflowCount)
          }, null, 8, ["value"]),
          w(Ve, {
            label: "Nodes:",
            value: String(t.nodeCount)
          }, null, 8, ["value"]),
          w(Ve, {
            label: "Models:",
            value: String(t.modelCount)
          }, null, 8, ["value"]),
          t.lastUsed && t.showLastUsed ? (s(), M(Ve, {
            key: 0,
            label: "Last used:",
            value: t.lastUsed
          }, null, 8, ["value"])) : r("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), nh = /* @__PURE__ */ ae(oh, [["__scopeId", "data-v-9231917a"]]), ah = { class: "env-details" }, lh = { class: "status-row" }, ih = {
  key: 0,
  class: "detail-row"
}, rh = { class: "value mono" }, dh = {
  key: 1,
  class: "detail-row"
}, ch = { class: "value mono small" }, uh = { class: "detail-row" }, mh = { class: "value" }, vh = { class: "detail-row" }, fh = { class: "value" }, ph = { class: "detail-row" }, gh = { class: "value" }, hh = {
  key: 2,
  class: "section-divider"
}, yh = {
  key: 3,
  class: "detail-row"
}, wh = { class: "value" }, kh = {
  key: 4,
  class: "detail-row"
}, bh = { class: "value" }, _h = { class: "footer-actions" }, $h = /* @__PURE__ */ oe({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete"],
  setup(t, { emit: c }) {
    const n = c;
    function i(f) {
      if (!f) return "Unknown";
      try {
        const p = new Date(f), m = (/* @__PURE__ */ new Date()).getTime() - p.getTime(), d = Math.floor(m / 6e4), v = Math.floor(m / 36e5), y = Math.floor(m / 864e5);
        return d < 1 ? "just now" : d < 60 ? `${d} ${d === 1 ? "minute" : "minutes"} ago` : v < 24 ? `${v} ${v === 1 ? "hour" : "hours"} ago` : y < 30 ? `${y} ${y === 1 ? "day" : "days"} ago` : p.toLocaleDateString();
      } catch {
        return f;
      }
    }
    return (f, p) => (s(), M(ot, {
      title: `ENVIRONMENT DETAILS: ${t.environment.name.toUpperCase()}`,
      size: "md",
      onClose: p[2] || (p[2] = (u) => n("close"))
    }, {
      body: l(() => [
        e("div", ah, [
          e("div", lh, [
            p[3] || (p[3] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: fe(["status-badge", t.environment.is_current ? "current" : "inactive"])
            }, a(t.environment.is_current ? "Current" : "Inactive"), 3)
          ]),
          t.environment.current_branch ? (s(), o("div", ih, [
            p[4] || (p[4] = e("span", { class: "label" }, "Branch:", -1)),
            e("span", rh, a(t.environment.current_branch), 1)
          ])) : r("", !0),
          t.environment.path ? (s(), o("div", dh, [
            p[5] || (p[5] = e("span", { class: "label" }, "Path:", -1)),
            e("span", ch, a(t.environment.path), 1)
          ])) : r("", !0),
          p[11] || (p[11] = e("div", { class: "section-divider" }, null, -1)),
          e("div", uh, [
            p[6] || (p[6] = e("span", { class: "label" }, "Workflows:", -1)),
            e("span", mh, a(t.environment.workflow_count), 1)
          ]),
          e("div", vh, [
            p[7] || (p[7] = e("span", { class: "label" }, "Nodes:", -1)),
            e("span", fh, a(t.environment.node_count), 1)
          ]),
          e("div", ph, [
            p[8] || (p[8] = e("span", { class: "label" }, "Models:", -1)),
            e("span", gh, a(t.environment.model_count), 1)
          ]),
          t.environment.created_at || t.environment.last_used ? (s(), o("div", hh)) : r("", !0),
          t.environment.created_at ? (s(), o("div", yh, [
            p[9] || (p[9] = e("span", { class: "label" }, "Created:", -1)),
            e("span", wh, a(i(t.environment.created_at)), 1)
          ])) : r("", !0),
          t.environment.last_used ? (s(), o("div", kh, [
            p[10] || (p[10] = e("span", { class: "label" }, "Last Used:", -1)),
            e("span", bh, a(i(t.environment.last_used)), 1)
          ])) : r("", !0)
        ])
      ]),
      footer: l(() => [
        e("div", _h, [
          t.canDelete ? (s(), M(ge, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: p[0] || (p[0] = (u) => n("delete", t.environment.name))
          }, {
            default: l(() => [...p[12] || (p[12] = [
              g(" Delete ", -1)
            ])]),
            _: 1
          })) : r("", !0),
          p[14] || (p[14] = e("div", { class: "footer-spacer" }, null, -1)),
          w(ge, {
            variant: "secondary",
            size: "sm",
            onClick: p[1] || (p[1] = (u) => n("close"))
          }, {
            default: l(() => [...p[13] || (p[13] = [
              g(" Close ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Ch = /* @__PURE__ */ ae($h, [["__scopeId", "data-v-59855453"]]), Xs = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], Qs = "3.12", xs = [
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
], Zs = "auto", xh = { class: "progress-bar" }, Sh = /* @__PURE__ */ oe({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const c = t, n = U(() => `${Math.max(0, Math.min(100, c.progress))}%`);
    return (i, f) => (s(), o("div", xh, [
      e("div", {
        class: fe(["progress-fill", t.variant]),
        style: Et({ width: n.value })
      }, null, 6)
    ]));
  }
}), Ss = /* @__PURE__ */ ae(Sh, [["__scopeId", "data-v-1beb0512"]]), Ih = { class: "task-progress" }, Eh = { class: "progress-info" }, Ph = { class: "progress-percentage" }, Mh = { class: "progress-message" }, Rh = {
  key: 0,
  class: "progress-steps"
}, Th = { class: "step-icon" }, Dh = { class: "step-label" }, Lh = /* @__PURE__ */ oe({
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
    const c = t;
    function n(f) {
      const p = c.steps.find((u) => u.id === f);
      return p ? c.progress >= p.progressThreshold ? "completed" : c.currentPhase === f ? "active" : "pending" : "pending";
    }
    function i(f) {
      const p = n(f);
      return p === "completed" ? "✓" : p === "active" ? "⟳" : "○";
    }
    return (f, p) => (s(), o("div", Ih, [
      w(Ss, {
        progress: t.progress,
        variant: t.variant
      }, null, 8, ["progress", "variant"]),
      e("div", Eh, [
        e("span", Ph, a(t.progress) + "%", 1),
        e("span", Mh, a(t.message), 1)
      ]),
      t.showSteps && t.steps.length > 0 ? (s(), o("div", Rh, [
        (s(!0), o(W, null, ne(t.steps, (u) => (s(), o("div", {
          key: u.id,
          class: fe(["step", n(u.id)])
        }, [
          e("span", Th, a(i(u.id)), 1),
          e("span", Dh, a(u.label), 1)
        ], 2))), 128))
      ])) : r("", !0)
    ]));
  }
}), cs = /* @__PURE__ */ ae(Lh, [["__scopeId", "data-v-9d1de66c"]]), zh = {
  key: 0,
  class: "create-env-form"
}, Uh = { class: "form-field" }, Nh = { class: "form-field" }, Oh = ["value"], Ah = { class: "form-field" }, Bh = ["disabled"], Fh = ["value"], Vh = { class: "form-field" }, Wh = ["value"], Gh = { class: "form-field form-field--checkbox" }, jh = { class: "form-checkbox" }, Hh = {
  key: 1,
  class: "create-env-progress"
}, Kh = { class: "creating-intro" }, qh = {
  key: 0,
  class: "progress-warning"
}, Yh = {
  key: 1,
  class: "create-error"
}, Jh = { class: "error-message" }, Xh = {
  key: 1,
  class: "footer-status"
}, Qh = 10, Zh = /* @__PURE__ */ oe({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(t, { emit: c }) {
    const n = c, { getComfyUIReleases: i, createEnvironment: f, getCreateProgress: p } = He(), u = h(""), m = h(Qs), d = h("latest"), v = h(Zs), y = h(!1), k = h([{ tag_name: "latest", name: "Latest", published_at: "" }]), _ = h(!1), b = h(!1), T = h({
      progress: 0,
      message: ""
    });
    let P = null, $ = 0;
    const C = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], B = h(null);
    function x() {
      b.value || n("close");
    }
    async function R() {
      const D = u.value.trim();
      if (D) {
        b.value = !0, T.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const O = {
            name: D,
            python_version: m.value,
            comfyui_version: d.value,
            torch_backend: v.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, ie = await f(O);
          ie.status === "started" ? q() : ie.status === "error" && (T.value = {
            progress: 0,
            message: ie.message || "Failed to start creation",
            error: ie.message
          });
        } catch (O) {
          T.value = {
            progress: 0,
            message: O instanceof Error ? O.message : "Unknown error",
            error: O instanceof Error ? O.message : "Unknown error"
          };
        }
      }
    }
    function q() {
      P || ($ = 0, P = window.setInterval(async () => {
        try {
          const D = await p();
          $ = 0, T.value = {
            progress: D.progress ?? 0,
            message: D.message,
            phase: D.phase,
            error: D.error
          }, D.state === "complete" ? (A(), n("created", D.environment_name || u.value.trim(), y.value)) : D.state === "error" ? (A(), T.value.error = D.error || D.message) : D.state === "idle" && b.value && (A(), T.value.error = "Creation was interrupted. Please try again.");
        } catch {
          $++, $ >= Qh && (A(), T.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function A() {
      P && (clearInterval(P), P = null);
    }
    function G() {
      b.value = !1, T.value = { progress: 0, message: "" }, n("close");
    }
    async function I() {
      _.value = !0;
      try {
        k.value = await i();
      } catch (D) {
        console.error("Failed to load ComfyUI releases:", D);
      } finally {
        _.value = !1;
      }
    }
    return We(async () => {
      var D;
      await mo(), (D = B.value) == null || D.focus(), I();
    }), bs(() => {
      A();
    }), (D, O) => (s(), M(ot, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !b.value,
      onClose: x
    }, {
      body: l(() => [
        b.value ? (s(), o("div", Hh, [
          e("p", Kh, [
            O[11] || (O[11] = g(" Creating environment ", -1)),
            e("strong", null, a(u.value), 1),
            O[12] || (O[12] = g("... ", -1))
          ]),
          w(cs, {
            progress: T.value.progress,
            message: T.value.message,
            "current-phase": T.value.phase,
            variant: T.value.error ? "error" : "default",
            "show-steps": !0,
            steps: C
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          T.value.error ? r("", !0) : (s(), o("p", qh, " This may take several minutes. Please wait... ")),
          T.value.error ? (s(), o("div", Yh, [
            e("p", Jh, a(T.value.error), 1)
          ])) : r("", !0)
        ])) : (s(), o("div", zh, [
          e("div", Uh, [
            O[6] || (O[6] = e("label", { class: "form-label" }, "Name", -1)),
            De(e("input", {
              ref_key: "nameInput",
              ref: B,
              "onUpdate:modelValue": O[0] || (O[0] = (ie) => u.value = ie),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: $t(R, ["enter"])
            }, null, 544), [
              [Dt, u.value]
            ])
          ]),
          e("div", Nh, [
            O[7] || (O[7] = e("label", { class: "form-label" }, "Python Version", -1)),
            De(e("select", {
              "onUpdate:modelValue": O[1] || (O[1] = (ie) => m.value = ie),
              class: "form-select"
            }, [
              (s(!0), o(W, null, ne(Ee(Xs), (ie) => (s(), o("option", {
                key: ie,
                value: ie
              }, a(ie), 9, Oh))), 128))
            ], 512), [
              [It, m.value]
            ])
          ]),
          e("div", Ah, [
            O[8] || (O[8] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
            De(e("select", {
              "onUpdate:modelValue": O[2] || (O[2] = (ie) => d.value = ie),
              class: "form-select",
              disabled: _.value
            }, [
              (s(!0), o(W, null, ne(k.value, (ie) => (s(), o("option", {
                key: ie.tag_name,
                value: ie.tag_name
              }, a(ie.name), 9, Fh))), 128))
            ], 8, Bh), [
              [It, d.value]
            ])
          ]),
          e("div", Vh, [
            O[9] || (O[9] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
            De(e("select", {
              "onUpdate:modelValue": O[3] || (O[3] = (ie) => v.value = ie),
              class: "form-select"
            }, [
              (s(!0), o(W, null, ne(Ee(xs), (ie) => (s(), o("option", {
                key: ie,
                value: ie
              }, a(ie) + a(ie === "auto" ? " (detect GPU)" : ""), 9, Wh))), 128))
            ], 512), [
              [It, v.value]
            ])
          ]),
          e("div", Gh, [
            e("label", jh, [
              De(e("input", {
                type: "checkbox",
                "onUpdate:modelValue": O[4] || (O[4] = (ie) => y.value = ie)
              }, null, 512), [
                [is, y.value]
              ]),
              O[10] || (O[10] = e("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: l(() => [
        b.value ? (s(), o(W, { key: 1 }, [
          T.value.error ? (s(), M(ge, {
            key: 0,
            variant: "secondary",
            onClick: G
          }, {
            default: l(() => [...O[15] || (O[15] = [
              g(" Close ", -1)
            ])]),
            _: 1
          })) : (s(), o("span", Xh, " Creating environment... "))
        ], 64)) : (s(), o(W, { key: 0 }, [
          w(ge, {
            variant: "primary",
            disabled: !u.value.trim(),
            onClick: R
          }, {
            default: l(() => [...O[13] || (O[13] = [
              g(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          w(ge, {
            variant: "secondary",
            onClick: O[5] || (O[5] = (ie) => n("close"))
          }, {
            default: l(() => [...O[14] || (O[14] = [
              g(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), e1 = /* @__PURE__ */ ae(Zh, [["__scopeId", "data-v-f37eaa42"]]), t1 = /* @__PURE__ */ oe({
  __name: "EnvironmentsSection",
  emits: ["switch", "created", "delete"],
  setup(t, { expose: c, emit: n }) {
    const i = n, { getEnvironments: f } = He(), p = h([]), u = h(!1), m = h(null), d = h(""), v = h(!1), y = h(!1), k = h(null), _ = U(() => {
      if (!d.value.trim()) return p.value;
      const B = d.value.toLowerCase();
      return p.value.filter(
        (x) => {
          var R;
          return x.name.toLowerCase().includes(B) || ((R = x.current_branch) == null ? void 0 : R.toLowerCase().includes(B));
        }
      );
    });
    function b(B, x) {
      y.value = !1, i("created", B, x);
    }
    function T() {
      y.value = !0;
    }
    function P(B) {
      k.value = B;
    }
    function $(B) {
      k.value = null, i("delete", B);
    }
    async function C() {
      u.value = !0, m.value = null;
      try {
        p.value = await f();
      } catch (B) {
        m.value = B instanceof Error ? B.message : "Failed to load environments";
      } finally {
        u.value = !1;
      }
    }
    return We(C), c({
      loadEnvironments: C,
      openCreateModal: T
    }), (B, x) => (s(), o(W, null, [
      w(tt, null, {
        header: l(() => [
          w(st, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: x[0] || (x[0] = (R) => v.value = !0)
          }, {
            actions: l(() => [
              w(se, {
                variant: "primary",
                size: "sm",
                onClick: T
              }, {
                default: l(() => [...x[6] || (x[6] = [
                  g(" Create ", -1)
                ])]),
                _: 1
              }),
              w(se, {
                variant: "secondary",
                size: "sm",
                onClick: C
              }, {
                default: l(() => [...x[7] || (x[7] = [
                  g(" Refresh ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          w(Kt, {
            modelValue: d.value,
            "onUpdate:modelValue": x[1] || (x[1] = (R) => d.value = R),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          u.value ? (s(), M(Pt, {
            key: 0,
            message: "Loading environments..."
          })) : m.value ? (s(), M(Mt, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: C
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            _.value.length ? (s(), M(Ne, {
              key: 0,
              title: "ENVIRONMENTS",
              count: _.value.length
            }, {
              default: l(() => [
                (s(!0), o(W, null, ne(_.value, (R) => (s(), M(nh, {
                  key: R.name,
                  "environment-name": R.name,
                  "is-current": R.is_current,
                  "current-branch": R.current_branch,
                  "show-last-used": !1
                }, {
                  actions: l(() => [
                    R.is_current ? r("", !0) : (s(), M(se, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (q) => B.$emit("switch", R.name)
                    }, {
                      default: l(() => [...x[8] || (x[8] = [
                        g(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    w(se, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (q) => P(R)
                    }, {
                      default: l(() => [...x[9] || (x[9] = [
                        g(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["environment-name", "is-current", "current-branch"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            _.value.length ? r("", !0) : (s(), M(yt, {
              key: 1,
              icon: "🌍",
              message: d.value ? `No environments match '${d.value}'` : "No environments found. Create one to get started!"
            }, Nt({ _: 2 }, [
              d.value ? void 0 : {
                name: "actions",
                fn: l(() => [
                  w(se, {
                    variant: "primary",
                    onClick: T
                  }, {
                    default: l(() => [...x[10] || (x[10] = [
                      g(" Create Environment ", -1)
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
      w(wt, {
        show: v.value,
        title: "About Environments",
        onClose: x[3] || (x[3] = (R) => v.value = !1)
      }, {
        content: l(() => [...x[11] || (x[11] = [
          e("p", null, [
            e("strong", null, "Environments"),
            g(" are isolated workspaces that contain their own workflows, nodes, and models. Each environment can track different branches and maintain separate state. ")
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
          w(se, {
            variant: "secondary",
            onClick: x[2] || (x[2] = (R) => v.value = !1)
          }, {
            default: l(() => [...x[12] || (x[12] = [
              g(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      k.value ? (s(), M(Ch, {
        key: 0,
        environment: k.value,
        "can-delete": p.value.length > 1,
        onClose: x[4] || (x[4] = (R) => k.value = null),
        onDelete: $
      }, null, 8, ["environment", "can-delete"])) : r("", !0),
      y.value ? (s(), M(e1, {
        key: 1,
        onClose: x[5] || (x[5] = (R) => y.value = !1),
        onCreated: b
      })) : r("", !0)
    ], 64));
  }
}), s1 = /* @__PURE__ */ ae(t1, [["__scopeId", "data-v-f95999f4"]]), o1 = { class: "file-path" }, n1 = { class: "file-path-text" }, a1 = ["title"], l1 = /* @__PURE__ */ oe({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const c = t, n = h(!1);
    async function i() {
      try {
        await navigator.clipboard.writeText(c.path), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (f) {
        console.error("Failed to copy:", f);
      }
    }
    return (f, p) => (s(), o("div", o1, [
      p[0] || (p[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", n1, a(t.path), 1),
      t.copyable ? (s(), o("button", {
        key: 0,
        class: "copy-btn",
        title: n.value ? "Copied!" : "Copy path",
        onClick: i
      }, a(n.value ? "✓" : "📋"), 9, a1)) : r("", !0)
    ]));
  }
}), i1 = /* @__PURE__ */ ae(l1, [["__scopeId", "data-v-f0982173"]]), r1 = { class: "export-blocked" }, d1 = { class: "issues-list" }, c1 = { class: "issue-message" }, u1 = {
  key: 0,
  class: "issue-details"
}, m1 = ["onClick"], v1 = { class: "issue-fix" }, f1 = /* @__PURE__ */ oe({
  __name: "ExportBlockedModal",
  props: {
    issues: {}
  },
  emits: ["close"],
  setup(t) {
    const c = t, n = us({});
    function i(f) {
      const p = c.issues[f];
      return n[f] || p.details.length <= 3 ? p.details : p.details.slice(0, 3);
    }
    return (f, p) => (s(), M(ot, {
      title: "Cannot Export",
      size: "md",
      onClose: p[1] || (p[1] = (u) => f.$emit("close"))
    }, {
      body: l(() => [
        e("div", r1, [
          p[2] || (p[2] = e("div", { class: "error-header" }, [
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
          e("div", d1, [
            (s(!0), o(W, null, ne(t.issues, (u, m) => (s(), o("div", {
              key: m,
              class: "issue-item"
            }, [
              e("div", c1, a(u.message), 1),
              u.details.length ? (s(), o("div", u1, [
                (s(!0), o(W, null, ne(i(m), (d, v) => (s(), o("div", {
                  key: v,
                  class: "issue-detail"
                }, a(d), 1))), 128)),
                u.details.length > 3 && !n[m] ? (s(), o("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (d) => n[m] = !0
                }, " +" + a(u.details.length - 3) + " more ", 9, m1)) : r("", !0)
              ])) : r("", !0),
              e("div", v1, [
                u.type === "uncommitted_workflows" ? (s(), o(W, { key: 0 }, [
                  g(" Commit your workflow changes before exporting. ")
                ], 64)) : u.type === "uncommitted_git_changes" ? (s(), o(W, { key: 1 }, [
                  g(" Commit your changes before exporting. ")
                ], 64)) : u.type === "unresolved_issues" ? (s(), o(W, { key: 2 }, [
                  g(" Resolve all workflow issues before exporting. ")
                ], 64)) : r("", !0)
              ])
            ]))), 128))
          ])
        ])
      ]),
      footer: l(() => [
        w(ge, {
          variant: "primary",
          onClick: p[0] || (p[0] = (u) => f.$emit("close"))
        }, {
          default: l(() => [...p[3] || (p[3] = [
            g(" Understood ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), p1 = /* @__PURE__ */ ae(f1, [["__scopeId", "data-v-b52f5e32"]]), g1 = { class: "export-warnings" }, h1 = {
  key: 0,
  class: "success-header"
}, y1 = { class: "warning-header" }, w1 = { class: "warning-summary" }, k1 = { class: "warning-title" }, b1 = { class: "models-section" }, _1 = { class: "models-list" }, $1 = { class: "model-info" }, C1 = { class: "model-filename" }, x1 = { class: "model-workflows" }, S1 = ["onClick"], I1 = /* @__PURE__ */ oe({
  __name: "ExportWarningsModal",
  props: {
    models: {}
  },
  emits: ["confirm", "cancel", "revalidate"],
  setup(t, { emit: c }) {
    const n = t, i = c, f = h(!1), p = h(null), u = U(() => f.value || n.models.length <= 3 ? n.models : n.models.slice(0, 3));
    function m() {
      p.value = null, i("revalidate");
    }
    return (d, v) => (s(), o(W, null, [
      w(ot, {
        title: "Export Warnings",
        size: "md",
        onClose: v[3] || (v[3] = (y) => d.$emit("cancel"))
      }, {
        body: l(() => [
          e("div", g1, [
            t.models.length === 0 ? (s(), o("div", h1, [...v[4] || (v[4] = [
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
            ])])) : (s(), o(W, { key: 1 }, [
              e("div", y1, [
                v[6] || (v[6] = e("span", { class: "warning-icon" }, [
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
                e("div", w1, [
                  e("h3", k1, a(t.models.length) + " model" + a(t.models.length !== 1 ? "s" : "") + " missing source URLs ", 1),
                  v[5] || (v[5] = e("p", { class: "warning-description" }, ` Recipients won't be able to download these models automatically. Click "Add Source" to fix, or export anyway. `, -1))
                ])
              ]),
              e("div", b1, [
                e("div", _1, [
                  (s(!0), o(W, null, ne(u.value, (y) => (s(), o("div", {
                    key: y.hash,
                    class: "model-item"
                  }, [
                    e("div", $1, [
                      e("div", C1, a(y.filename), 1),
                      e("div", x1, " Used by: " + a(y.workflows.join(", ")), 1)
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      onClick: (k) => p.value = y.hash
                    }, " Add Source ", 8, S1)
                  ]))), 128))
                ]),
                t.models.length > 3 && !f.value ? (s(), o("button", {
                  key: 0,
                  class: "show-more-btn",
                  onClick: v[0] || (v[0] = (y) => f.value = !0)
                }, " Show " + a(t.models.length - 3) + " more model" + a(t.models.length - 3 !== 1 ? "s" : "") + "... ", 1)) : r("", !0)
              ])
            ], 64))
          ])
        ]),
        footer: l(() => [
          w(ge, {
            variant: "secondary",
            onClick: v[1] || (v[1] = (y) => d.$emit("cancel"))
          }, {
            default: l(() => [...v[7] || (v[7] = [
              g(" Cancel Export ", -1)
            ])]),
            _: 1
          }),
          w(ge, {
            variant: "primary",
            onClick: v[2] || (v[2] = (y) => d.$emit("confirm"))
          }, {
            default: l(() => [
              g(a(t.models.length === 0 ? "Export" : "Export Anyway"), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      p.value ? (s(), M(Cs, {
        key: 0,
        identifier: p.value,
        onClose: m
      }, null, 8, ["identifier"])) : r("", !0)
    ], 64));
  }
}), E1 = /* @__PURE__ */ ae(I1, [["__scopeId", "data-v-b698d882"]]), P1 = { class: "export-card" }, M1 = { class: "export-path-row" }, R1 = { class: "export-actions" }, T1 = {
  key: 1,
  class: "export-warning"
}, D1 = /* @__PURE__ */ oe({
  __name: "ExportSection",
  setup(t) {
    const { validateExport: c, exportEnvWithForce: n } = He(), i = h(""), f = h(!1), p = h(!1), u = h(!1), m = h(null), d = h(!1), v = h(null), y = h(!1), k = h(!1), _ = U(() => f.value ? "Validating..." : p.value ? "Exporting..." : "Export Environment");
    async function b() {
      f.value = !0, m.value = null;
      try {
        const x = await c();
        v.value = x, x.can_export ? x.warnings.models_without_sources.length > 0 ? k.value = !0 : await $() : y.value = !0;
      } catch (x) {
        m.value = {
          status: "error",
          message: x instanceof Error ? x.message : "Validation failed"
        };
      } finally {
        f.value = !1;
      }
    }
    async function T() {
      k.value = !1, await $();
    }
    async function P() {
      try {
        const x = await c();
        v.value = x;
      } catch (x) {
        console.error("Re-validation failed:", x);
      }
    }
    async function $() {
      p.value = !0;
      try {
        const x = await n(i.value || void 0);
        m.value = x;
      } catch (x) {
        m.value = {
          status: "error",
          message: x instanceof Error ? x.message : "Export failed"
        };
      } finally {
        p.value = !1;
      }
    }
    async function C() {
      var x;
      if ((x = m.value) != null && x.path)
        try {
          await navigator.clipboard.writeText(m.value.path);
        } catch (R) {
          console.error("Failed to copy path:", R);
        }
    }
    async function B() {
      var x;
      if ((x = m.value) != null && x.path) {
        u.value = !0;
        try {
          const R = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(m.value.path)}`);
          if (!R.ok)
            throw new Error(`Download failed: ${R.statusText}`);
          const q = await R.blob(), A = URL.createObjectURL(q), G = m.value.path.split("/").pop() || "environment-export.tar.gz", I = document.createElement("a");
          I.href = A, I.download = G, document.body.appendChild(I), I.click(), document.body.removeChild(I), URL.revokeObjectURL(A);
        } catch (R) {
          console.error("Failed to download:", R), alert(`Download failed: ${R instanceof Error ? R.message : "Unknown error"}`);
        } finally {
          u.value = !1;
        }
      }
    }
    return (x, R) => (s(), o(W, null, [
      w(tt, null, {
        header: l(() => [
          w(st, {
            title: "EXPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: R[0] || (R[0] = (q) => d.value = !0)
          })
        ]),
        content: l(() => [
          w(Ne, { title: "EXPORT OPTIONS" }, {
            default: l(() => [
              e("div", P1, [
                R[7] || (R[7] = e("div", { class: "export-card-header" }, [
                  e("span", { class: "export-icon" }, "📁"),
                  e("div", { class: "export-header-text" }, [
                    e("div", { class: "export-title" }, "Output Destination"),
                    e("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                e("div", M1, [
                  w(rs, {
                    modelValue: i.value,
                    "onUpdate:modelValue": R[1] || (R[1] = (q) => i.value = q),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                e("div", R1, [
                  w(se, {
                    variant: "primary",
                    size: "md",
                    loading: f.value || p.value,
                    disabled: f.value || p.value,
                    onClick: b
                  }, {
                    default: l(() => [
                      R[6] || (R[6] = e("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "currentColor"
                      }, [
                        e("path", { d: "M8 4L3 9h3v6h4V9h3L8 4z" }),
                        e("path", { d: "M14 2H2v2h12V2z" })
                      ], -1)),
                      g(" " + a(_.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled"])
                ])
              ])
            ]),
            _: 1
          }),
          m.value ? (s(), M(Ne, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: l(() => [
              w(et, {
                status: m.value.status === "success" ? "synced" : "broken"
              }, Nt({
                icon: l(() => [
                  g(a(m.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: l(() => [
                  g(a(m.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: l(() => [
                  g(a(m.value.status === "success" ? "Your environment has been exported" : m.value.message), 1)
                ]),
                _: 2
              }, [
                m.value.status === "success" ? {
                  name: "details",
                  fn: l(() => [
                    w(Ve, { label: "Saved to:" }, {
                      default: l(() => [
                        w(i1, {
                          path: m.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    m.value.models_without_sources !== void 0 ? (s(), M(Ve, {
                      key: 0,
                      label: "Models without sources:",
                      value: m.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : r("", !0),
                    m.value.models_without_sources && m.value.models_without_sources > 0 ? (s(), o("div", T1, [...R[8] || (R[8] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : r("", !0)
                  ]),
                  key: "0"
                } : void 0,
                m.value.status === "success" ? {
                  name: "actions",
                  fn: l(() => [
                    w(se, {
                      variant: "primary",
                      size: "sm",
                      loading: u.value,
                      onClick: B
                    }, {
                      default: l(() => [...R[9] || (R[9] = [
                        e("svg", {
                          width: "14",
                          height: "14",
                          viewBox: "0 0 16 16",
                          fill: "currentColor"
                        }, [
                          e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                          e("path", { d: "M14 14H2v2h12v-2z" })
                        ], -1),
                        g(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["loading"]),
                    w(se, {
                      variant: "secondary",
                      size: "sm",
                      onClick: C
                    }, {
                      default: l(() => [...R[10] || (R[10] = [
                        g(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    w(se, {
                      variant: "ghost",
                      size: "sm",
                      onClick: R[2] || (R[2] = (q) => m.value = null)
                    }, {
                      default: l(() => [...R[11] || (R[11] = [
                        g(" Dismiss ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  key: "1"
                } : void 0
              ]), 1032, ["status"])
            ]),
            _: 1
          })) : r("", !0)
        ]),
        _: 1
      }),
      w(wt, {
        show: d.value,
        title: "What Gets Exported",
        onClose: R[3] || (R[3] = (q) => d.value = !1)
      }, {
        content: l(() => [...R[12] || (R[12] = [
          e("div", { class: "export-info" }, [
            e("div", { class: "info-section" }, [
              e("strong", null, "Included in Export:"),
              e("ul", null, [
                e("li", null, [
                  e("strong", null, "Workflows"),
                  g(" — All workflows in this environment")
                ]),
                e("li", null, [
                  e("strong", null, "Custom Nodes"),
                  g(" — Node definitions and dependencies")
                ]),
                e("li", null, [
                  e("strong", null, "Models"),
                  g(" — References and source URLs (not the files)")
                ]),
                e("li", null, [
                  e("strong", null, "Configuration"),
                  g(" — Environment settings and metadata")
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
              g(" Model files are not included to keep exports small. Models can be re-downloaded on import using their source information. ")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      y.value && v.value ? (s(), M(p1, {
        key: 0,
        issues: v.value.blocking_issues,
        onClose: R[4] || (R[4] = (q) => y.value = !1)
      }, null, 8, ["issues"])) : r("", !0),
      k.value && v.value ? (s(), M(E1, {
        key: 1,
        models: v.value.warnings.models_without_sources,
        onConfirm: T,
        onCancel: R[5] || (R[5] = (q) => k.value = !1),
        onRevalidate: P
      }, null, 8, ["models"])) : r("", !0)
    ], 64));
  }
}), L1 = /* @__PURE__ */ ae(D1, [["__scopeId", "data-v-f4d120f2"]]), z1 = { class: "file-input-wrapper" }, U1 = ["accept", "multiple", "disabled"], N1 = /* @__PURE__ */ oe({
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
    const i = n, f = h(null);
    function p() {
      var m;
      (m = f.value) == null || m.click();
    }
    function u(m) {
      const d = m.target;
      d.files && d.files.length > 0 && (i("change", d.files), d.value = "");
    }
    return c({
      triggerInput: p
    }), (m, d) => (s(), o("div", z1, [
      e("input", {
        ref_key: "fileInputRef",
        ref: f,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: u
      }, null, 40, U1),
      w(se, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: p
      }, {
        default: l(() => [
          Me(m.$slots, "default", {}, () => [
            d[0] || (d[0] = e("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              e("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              e("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            g(" " + a(t.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), O1 = /* @__PURE__ */ ae(N1, [["__scopeId", "data-v-cd192091"]]), A1 = {
  key: 0,
  class: "drop-zone-empty"
}, B1 = { class: "drop-zone-text" }, F1 = { class: "drop-zone-primary" }, V1 = { class: "drop-zone-secondary" }, W1 = { class: "drop-zone-actions" }, G1 = {
  key: 1,
  class: "drop-zone-file"
}, j1 = { class: "file-info" }, H1 = { class: "file-details" }, K1 = { class: "file-name" }, q1 = { class: "file-size" }, Y1 = /* @__PURE__ */ oe({
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
    const n = c, i = h(!1), f = h(null), p = h(0), u = U(() => f.value !== null), m = U(() => {
      var $;
      return (($ = f.value) == null ? void 0 : $.name) || "";
    }), d = U(() => {
      if (!f.value) return "";
      const $ = f.value.size;
      return $ < 1024 ? `${$} B` : $ < 1024 * 1024 ? `${($ / 1024).toFixed(1)} KB` : $ < 1024 * 1024 * 1024 ? `${($ / (1024 * 1024)).toFixed(1)} MB` : `${($ / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function v($) {
      var C;
      $.stopPropagation(), p.value++, (C = $.dataTransfer) != null && C.types.includes("Files") && (i.value = !0);
    }
    function y($) {
      $.stopPropagation(), $.dataTransfer && ($.dataTransfer.dropEffect = "copy");
    }
    function k($) {
      $.stopPropagation(), p.value--, p.value === 0 && (i.value = !1);
    }
    function _($) {
      var B;
      $.stopPropagation(), p.value = 0, i.value = !1;
      const C = (B = $.dataTransfer) == null ? void 0 : B.files;
      C && C.length > 0 && T(C[0]);
    }
    function b($) {
      $.length > 0 && T($[0]);
    }
    function T($) {
      f.value = $, n("fileSelected", $);
    }
    function P() {
      f.value = null, n("clear");
    }
    return ($, C) => (s(), o("div", {
      class: fe(["file-drop-zone", { "drop-active": i.value, "has-file": u.value }]),
      onDragenter: Be(v, ["prevent"]),
      onDragover: Be(y, ["prevent"]),
      onDragleave: Be(k, ["prevent"]),
      onDrop: Be(_, ["prevent"])
    }, [
      u.value ? (s(), o("div", G1, [
        e("div", j1, [
          C[1] || (C[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", H1, [
            e("div", K1, a(m.value), 1),
            e("div", q1, a(d.value), 1)
          ])
        ]),
        w(se, {
          variant: "ghost",
          size: "xs",
          onClick: P,
          title: "Remove file"
        }, {
          default: l(() => [...C[2] || (C[2] = [
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
      ])) : (s(), o("div", A1, [
        C[0] || (C[0] = e("div", { class: "drop-zone-icon" }, [
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
        e("div", B1, [
          e("p", F1, a(t.primaryText), 1),
          e("p", V1, a(t.secondaryText), 1)
        ]),
        e("div", W1, [
          w(O1, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "sm",
            onChange: b
          }, {
            default: l(() => [
              g(a(t.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), J1 = /* @__PURE__ */ ae(Y1, [["__scopeId", "data-v-0f79cb86"]]), X1 = { class: "import-preview" }, Q1 = { class: "preview-header" }, Z1 = {
  key: 0,
  class: "source-env"
}, ey = { class: "preview-content" }, ty = { class: "preview-section" }, sy = { class: "section-header" }, oy = { class: "section-info" }, ny = { class: "section-count" }, ay = {
  key: 0,
  class: "item-list"
}, ly = { class: "item-name" }, iy = {
  key: 0,
  class: "item-more"
}, ry = { class: "preview-section" }, dy = { class: "section-header" }, cy = { class: "section-info" }, uy = { class: "section-count" }, my = {
  key: 0,
  class: "item-list"
}, vy = { class: "item-details" }, fy = { class: "item-name" }, py = { class: "item-meta" }, gy = {
  key: 0,
  class: "item-more"
}, hy = { class: "preview-section" }, yy = { class: "section-header" }, wy = { class: "section-info" }, ky = { class: "section-count" }, by = {
  key: 0,
  class: "item-list"
}, _y = { class: "item-name" }, $y = {
  key: 0,
  class: "item-more"
}, Cy = {
  key: 0,
  class: "preview-section"
}, xy = { class: "git-info" }, Sy = /* @__PURE__ */ oe({
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
    const c = t, n = U(() => c.workflows.length), i = U(() => c.models.length), f = U(() => c.nodes.length);
    function p(u) {
      return u < 1024 ? `${u} B` : u < 1024 * 1024 ? `${(u / 1024).toFixed(1)} KB` : u < 1024 * 1024 * 1024 ? `${(u / (1024 * 1024)).toFixed(1)} MB` : `${(u / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (u, m) => (s(), o("div", X1, [
      e("div", Q1, [
        w(vt, null, {
          default: l(() => [...m[0] || (m[0] = [
            g("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (s(), o("span", Z1, [
          m[1] || (m[1] = g(" From: ", -1)),
          w(gs, null, {
            default: l(() => [
              g(a(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : r("", !0)
      ]),
      e("div", ey, [
        e("div", ty, [
          e("div", sy, [
            m[3] || (m[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", oy, [
              m[2] || (m[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", ny, a(n.value) + " file" + a(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (s(), o("div", ay, [
            (s(!0), o(W, null, ne(t.workflows.slice(0, t.maxPreviewItems), (d) => (s(), o("div", {
              key: d,
              class: "preview-item"
            }, [
              m[4] || (m[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", ly, a(d), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (s(), o("div", iy, " +" + a(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : r("", !0)
          ])) : r("", !0)
        ]),
        e("div", ry, [
          e("div", dy, [
            m[6] || (m[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", cy, [
              m[5] || (m[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", uy, a(i.value) + " file" + a(i.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (s(), o("div", my, [
            (s(!0), o(W, null, ne(t.models.slice(0, t.maxPreviewItems), (d) => (s(), o("div", {
              key: d.filename,
              class: "preview-item"
            }, [
              m[7] || (m[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", vy, [
                e("span", fy, a(d.filename), 1),
                e("span", py, a(p(d.size)) + " • " + a(d.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (s(), o("div", gy, " +" + a(t.models.length - t.maxPreviewItems) + " more ", 1)) : r("", !0)
          ])) : r("", !0)
        ]),
        e("div", hy, [
          e("div", yy, [
            m[9] || (m[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", wy, [
              m[8] || (m[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", ky, a(f.value) + " node" + a(f.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (s(), o("div", by, [
            (s(!0), o(W, null, ne(t.nodes.slice(0, t.maxPreviewItems), (d) => (s(), o("div", {
              key: d,
              class: "preview-item"
            }, [
              m[10] || (m[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", _y, a(d), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (s(), o("div", $y, " +" + a(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : r("", !0)
          ])) : r("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (s(), o("div", Cy, [
          m[11] || (m[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", xy, [
            t.gitBranch ? (s(), M(Ve, {
              key: 0,
              label: "Branch"
            }, {
              default: l(() => [
                w(gs, null, {
                  default: l(() => [
                    g(a(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : r("", !0),
            t.gitCommit ? (s(), M(Ve, {
              key: 1,
              label: "Commit"
            }, {
              default: l(() => [
                w(Ws, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : r("", !0)
          ])
        ])) : r("", !0)
      ])
    ]));
  }
}), Iy = /* @__PURE__ */ ae(Sy, [["__scopeId", "data-v-182fe113"]]), Ey = { class: "import-config" }, Py = { class: "config-container" }, My = { class: "config-field" }, Ry = { class: "input-wrapper" }, Ty = ["value"], Dy = {
  key: 0,
  class: "validating-indicator"
}, Ly = {
  key: 1,
  class: "valid-indicator"
}, zy = {
  key: 0,
  class: "field-error"
}, Uy = { class: "config-field" }, Ny = { class: "strategy-options" }, Oy = ["value", "checked", "onChange"], Ay = { class: "strategy-content" }, By = { class: "strategy-label" }, Fy = { class: "strategy-description" }, Vy = { class: "config-field switch-field" }, Wy = { class: "switch-label" }, Gy = ["checked"], jy = { class: "advanced-section" }, Hy = { class: "advanced-content" }, Ky = { class: "config-field" }, qy = ["value"], Yy = ["value"], Jy = /* @__PURE__ */ oe({
  __name: "ImportConfigForm",
  props: {
    name: {},
    modelStrategy: {},
    torchBackend: {},
    switchAfterImport: { type: Boolean },
    nameError: {}
  },
  emits: ["update:name", "update:modelStrategy", "update:torchBackend", "update:switchAfterImport", "validate-name"],
  setup(t, { emit: c }) {
    const n = t, i = c, f = h(!1), p = h(!1);
    Ct(() => n.nameError, (y) => {
      f.value = !1, p.value = !y && n.name.length > 0;
    });
    const u = [
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
    function d(y) {
      const k = y.target.value;
      i("update:name", k), p.value = !1, m && clearTimeout(m), k.length > 0 ? (f.value = !0, m = setTimeout(() => {
        i("validate-name", k);
      }, 400)) : f.value = !1;
    }
    function v() {
      n.name.length > 0 && i("validate-name", n.name);
    }
    return (y, k) => (s(), o("div", Ey, [
      w(vt, null, {
        default: l(() => [...k[2] || (k[2] = [
          g("Configuration", -1)
        ])]),
        _: 1
      }),
      e("div", Py, [
        e("div", My, [
          w(as, { required: "" }, {
            default: l(() => [...k[3] || (k[3] = [
              g("Environment Name", -1)
            ])]),
            _: 1
          }),
          e("div", Ry, [
            e("input", {
              type: "text",
              class: fe(["name-input", { error: t.nameError || t.name.length === 0, valid: p.value }]),
              value: t.name,
              placeholder: "my-imported-env",
              onInput: d,
              onBlur: v
            }, null, 42, Ty),
            f.value ? (s(), o("span", Dy, "...")) : p.value ? (s(), o("span", Ly, "✓")) : r("", !0)
          ]),
          t.nameError ? (s(), o("div", zy, a(t.nameError), 1)) : r("", !0),
          k[4] || (k[4] = e("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        e("div", Uy, [
          w(as, null, {
            default: l(() => [...k[5] || (k[5] = [
              g("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          e("div", Ny, [
            (s(), o(W, null, ne(u, (_) => e("label", {
              key: _.value,
              class: fe(["strategy-option", { active: t.modelStrategy === _.value }])
            }, [
              e("input", {
                type: "radio",
                name: "model-strategy",
                value: _.value,
                checked: t.modelStrategy === _.value,
                onChange: (b) => i("update:modelStrategy", _.value)
              }, null, 40, Oy),
              e("div", Ay, [
                e("span", By, a(_.label), 1),
                e("span", Fy, a(_.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", Vy, [
          e("label", Wy, [
            e("input", {
              type: "checkbox",
              checked: t.switchAfterImport,
              onChange: k[0] || (k[0] = (_) => i("update:switchAfterImport", _.target.checked))
            }, null, 40, Gy),
            k[6] || (k[6] = e("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        e("details", jy, [
          k[8] || (k[8] = e("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          e("div", Hy, [
            e("div", Ky, [
              w(as, null, {
                default: l(() => [...k[7] || (k[7] = [
                  g("PyTorch Backend", -1)
                ])]),
                _: 1
              }),
              e("select", {
                class: "backend-select",
                value: t.torchBackend,
                onChange: k[1] || (k[1] = (_) => i("update:torchBackend", _.target.value))
              }, [
                (s(!0), o(W, null, ne(Ee(xs), (_) => (s(), o("option", {
                  key: _,
                  value: _
                }, a(_) + a(_ === "auto" ? " (detect GPU)" : ""), 9, Yy))), 128))
              ], 40, qy)
            ])
          ])
        ])
      ])
    ]));
  }
}), Xy = /* @__PURE__ */ ae(Jy, [["__scopeId", "data-v-89ea06a1"]]), Qy = { class: "import-flow" }, Zy = {
  key: 0,
  class: "import-empty"
}, e0 = { class: "git-import-section" }, t0 = { class: "git-url-input-row" }, s0 = ["disabled"], o0 = {
  key: 0,
  class: "git-error"
}, n0 = {
  key: 1,
  class: "import-configure"
}, a0 = { class: "selected-file-bar" }, l0 = {
  key: 0,
  class: "file-bar-content"
}, i0 = { class: "file-bar-info" }, r0 = { class: "file-bar-name" }, d0 = { class: "file-bar-size" }, c0 = {
  key: 1,
  class: "file-bar-content"
}, u0 = { class: "file-bar-info" }, m0 = { class: "file-bar-name" }, v0 = {
  key: 0,
  class: "preview-loading"
}, f0 = { class: "import-actions" }, p0 = {
  key: 2,
  class: "import-progress"
}, g0 = { class: "creating-intro" }, h0 = {
  key: 0,
  class: "progress-warning"
}, y0 = {
  key: 1,
  class: "import-error"
}, w0 = { class: "error-message" }, k0 = {
  key: 3,
  class: "import-complete"
}, b0 = { class: "complete-message" }, _0 = { class: "complete-title" }, $0 = { class: "complete-details" }, C0 = { class: "complete-actions" }, x0 = /* @__PURE__ */ oe({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(t, { expose: c, emit: n }) {
    var Oe, me, he, we;
    const i = t, f = n, { previewTarballImport: p, previewGitImport: u, validateEnvironmentName: m, executeImport: d, executeGitImport: v, getImportProgress: y } = He();
    let k = null;
    const _ = h(null), b = h(i.resumeImport ?? !1), T = h(!1), P = h(!1), $ = h(""), C = h(!1), B = h(null), x = h(""), R = h(null), q = h(!1), A = h(null), G = h(null), I = h({
      name: ((Oe = i.initialProgress) == null ? void 0 : Oe.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), D = h(null), O = h({
      message: ((me = i.initialProgress) == null ? void 0 : me.message) ?? "Preparing import...",
      phase: ((he = i.initialProgress) == null ? void 0 : he.phase) ?? "",
      progress: ((we = i.initialProgress) == null ? void 0 : we.progress) ?? 0,
      error: null
    }), ie = [
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 15 },
      { id: "extract_builtins", label: "Extract builtin nodes", progressThreshold: 20 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 35 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 60 },
      { id: "sync_nodes", label: "Sync custom nodes", progressThreshold: 70 },
      { id: "copy_workflows", label: "Copy workflows", progressThreshold: 80 },
      { id: "resolve_models", label: "Resolve models", progressThreshold: 85 },
      { id: "download_models", label: "Download models", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], te = U(() => {
      if (!G.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const Q = G.value;
      return {
        sourceEnvironment: Q.comfyui_version ? `ComfyUI ${Q.comfyui_version}` : "Unknown",
        workflows: Q.workflows.map((le) => le.name),
        models: Q.models.map((le) => ({
          filename: le.filename,
          size: 0,
          type: le.relative_path.split("/")[0] || "model"
        })),
        nodes: Q.nodes.map((le) => le.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), J = U(() => !C.value && !B.value && G.value && I.value.name.length > 0 && !D.value && (_.value || R.value));
    async function re(Q) {
      _.value = Q, C.value = !0, B.value = null, G.value = null;
      try {
        const le = await p(Q);
        G.value = le;
      } catch (le) {
        B.value = le instanceof Error ? le.message : "Failed to analyze file", console.error("Preview error:", le);
      } finally {
        C.value = !1;
      }
    }
    function X() {
      _.value = null, R.value = null, x.value = "", A.value = null, T.value = !1, P.value = !1, $.value = "", G.value = null, B.value = null, I.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, D.value = null, f("source-cleared");
    }
    function z() {
      xe(), X(), b.value = !1, C.value = !1, q.value = !1, O.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function L() {
      if (x.value.trim()) {
        q.value = !0, A.value = null;
        try {
          const Q = await u(x.value.trim());
          R.value = x.value.trim(), G.value = Q;
        } catch (Q) {
          A.value = Q instanceof Error ? Q.message : "Failed to analyze repository";
        } finally {
          q.value = !1;
        }
      }
    }
    function S(Q) {
      try {
        const le = new URL(Q);
        return le.host + le.pathname.replace(/\.git$/, "");
      } catch {
        return Q;
      }
    }
    async function de(Q) {
      if (!Q) {
        D.value = "Environment name is required";
        return;
      }
      try {
        const le = await m(Q);
        D.value = le.valid ? null : le.error || "Invalid name";
      } catch {
        D.value = "Failed to validate name";
      }
    }
    async function Z() {
      if (I.value.name && !(!_.value && !R.value)) {
        b.value = !0, T.value = !1, O.value = { message: `Creating environment '${I.value.name}'...`, phase: "", progress: 0, error: null }, f("import-started");
        try {
          let Q;
          if (_.value)
            Q = await d(
              _.value,
              I.value.name,
              I.value.modelStrategy,
              I.value.torchBackend
            );
          else if (R.value)
            Q = await v(
              R.value,
              I.value.name,
              I.value.modelStrategy,
              I.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          Q.status === "started" ? be() : (P.value = !1, $.value = Q.message, b.value = !1, T.value = !0);
        } catch (Q) {
          P.value = !1, $.value = Q instanceof Error ? Q.message : "Unknown error occurred during import", b.value = !1, T.value = !0;
        }
      }
    }
    async function be() {
      if (k) return;
      const Q = async () => {
        try {
          const ke = await y();
          return O.value = {
            message: ke.message,
            phase: ke.phase || "",
            progress: ke.progress ?? (ke.state === "importing" ? 50 : 0),
            error: ke.error || null
          }, ke.state === "complete" ? (xe(), P.value = !0, $.value = `Environment '${ke.environment_name}' created successfully`, b.value = !1, T.value = !0, ke.environment_name && f("import-complete", ke.environment_name, I.value.switchAfterImport), !1) : ke.state === "error" ? (xe(), P.value = !1, $.value = ke.error || ke.message, b.value = !1, T.value = !0, !1) : !0;
        } catch (ke) {
          return console.error("Failed to poll import progress:", ke), !0;
        }
      };
      await Q() && (k = setInterval(async () => {
        await Q() || xe();
      }, 2e3));
    }
    function xe() {
      k && (clearInterval(k), k = null);
    }
    function Ie(Q) {
      return Q < 1024 ? `${Q} B` : Q < 1024 * 1024 ? `${(Q / 1024).toFixed(1)} KB` : Q < 1024 * 1024 * 1024 ? `${(Q / (1024 * 1024)).toFixed(1)} MB` : `${(Q / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return We(async () => {
      try {
        const Q = await y();
        console.log("[ComfyGit ImportFlow] Import progress check:", Q.state, Q), Q.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", Q.environment_name), b.value = !0, I.value.name = Q.environment_name || I.value.name || "", O.value = {
          progress: Q.progress ?? 0,
          message: Q.message || "Importing...",
          phase: Q.phase || "",
          error: null
        }, be());
      } catch (Q) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", Q);
      }
    }), c({
      handleReset: z,
      isImporting: b,
      canImport: J
    }), (Q, le) => {
      var ke;
      return s(), o("div", Qy, [
        !_.value && !R.value && !b.value ? (s(), o("div", Zy, [
          w(J1, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: re
          }),
          le[7] || (le[7] = e("div", { class: "import-divider" }, [
            e("span", null, "or")
          ], -1)),
          e("div", e0, [
            le[5] || (le[5] = e("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            e("div", t0, [
              De(e("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": le[0] || (le[0] = (Ue) => x.value = Ue),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: $t(L, ["enter"]),
                disabled: q.value
              }, null, 40, s0), [
                [Dt, x.value]
              ]),
              w(se, {
                variant: "primary",
                size: "sm",
                disabled: !x.value.trim() || q.value,
                onClick: L
              }, {
                default: l(() => [
                  g(a(q.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            A.value ? (s(), o("div", o0, a(A.value), 1)) : r("", !0),
            le[6] || (le[6] = e("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (_.value || R.value) && !b.value && !T.value ? (s(), o("div", n0, [
          e("div", a0, [
            _.value ? (s(), o("div", l0, [
              le[8] || (le[8] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", i0, [
                e("div", r0, a(_.value.name), 1),
                e("div", d0, a(Ie(_.value.size)), 1)
              ])
            ])) : R.value ? (s(), o("div", c0, [
              le[10] || (le[10] = e("div", { class: "file-bar-icon" }, "🔗", -1)),
              e("div", u0, [
                e("div", m0, a(S(R.value)), 1),
                le[9] || (le[9] = e("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : r("", !0),
            w(se, {
              variant: "ghost",
              size: "sm",
              onClick: X
            }, {
              default: l(() => [...le[11] || (le[11] = [
                g(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          C.value ? (s(), o("div", v0, [...le[12] || (le[12] = [
            e("div", { class: "loading-spinner" }, null, -1),
            e("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : B.value ? (s(), M(pt, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [B.value]
          }, null, 8, ["details"])) : G.value ? (s(), M(Iy, {
            key: 2,
            "source-environment": te.value.sourceEnvironment,
            workflows: te.value.workflows,
            models: te.value.models,
            nodes: te.value.nodes,
            "git-branch": te.value.gitBranch,
            "git-commit": te.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : r("", !0),
          G.value ? (s(), M(Xy, {
            key: 3,
            name: I.value.name,
            "onUpdate:name": le[1] || (le[1] = (Ue) => I.value.name = Ue),
            "model-strategy": I.value.modelStrategy,
            "onUpdate:modelStrategy": le[2] || (le[2] = (Ue) => I.value.modelStrategy = Ue),
            "torch-backend": I.value.torchBackend,
            "onUpdate:torchBackend": le[3] || (le[3] = (Ue) => I.value.torchBackend = Ue),
            "switch-after-import": I.value.switchAfterImport,
            "onUpdate:switchAfterImport": le[4] || (le[4] = (Ue) => I.value.switchAfterImport = Ue),
            "name-error": D.value,
            onValidateName: de
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : r("", !0),
          I.value.modelStrategy === "skip" && ((ke = G.value) != null && ke.models_needing_download) ? (s(), M(pt, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${G.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : r("", !0),
          e("div", f0, [
            w(se, {
              variant: "secondary",
              size: "md",
              onClick: X
            }, {
              default: l(() => [...le[13] || (le[13] = [
                g(" Cancel ", -1)
              ])]),
              _: 1
            }),
            w(se, {
              variant: "primary",
              size: "md",
              disabled: !J.value,
              onClick: Z
            }, {
              default: l(() => [...le[14] || (le[14] = [
                g(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : b.value ? (s(), o("div", p0, [
          e("p", g0, [
            le[15] || (le[15] = g(" Importing environment ", -1)),
            e("strong", null, a(I.value.name), 1),
            le[16] || (le[16] = g("... ", -1))
          ]),
          w(cs, {
            progress: O.value.progress,
            message: O.value.message,
            "current-phase": O.value.phase,
            variant: O.value.error ? "error" : "default",
            "show-steps": !0,
            steps: ie
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          O.value.error ? r("", !0) : (s(), o("p", h0, " This may take several minutes. Please wait... ")),
          O.value.error ? (s(), o("div", y0, [
            e("p", w0, a(O.value.error), 1)
          ])) : r("", !0)
        ])) : T.value ? (s(), o("div", k0, [
          e("div", {
            class: fe(["complete-icon", P.value ? "success" : "error"])
          }, a(P.value ? "✓" : "✕"), 3),
          e("div", b0, [
            e("div", _0, a(P.value ? "Import Successful" : "Import Failed"), 1),
            e("div", $0, a($.value), 1)
          ]),
          e("div", C0, [
            w(se, {
              variant: "primary",
              size: "md",
              onClick: z
            }, {
              default: l(() => [...le[17] || (le[17] = [
                g(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : r("", !0)
      ]);
    };
  }
}), eo = /* @__PURE__ */ ae(x0, [["__scopeId", "data-v-72cbc04e"]]), S0 = /* @__PURE__ */ oe({
  __name: "ImportSection",
  emits: ["import-complete-switch"],
  setup(t, { emit: c }) {
    const n = c, i = h(!1);
    function f(p, u) {
      u && n("import-complete-switch", p);
    }
    return (p, u) => (s(), o(W, null, [
      w(tt, null, {
        header: l(() => [
          w(st, {
            title: "IMPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: u[0] || (u[0] = (m) => i.value = !0)
          })
        ]),
        content: l(() => [
          w(eo, { onImportComplete: f })
        ]),
        _: 1
      }),
      w(wt, {
        show: i.value,
        title: "How Import Works",
        onClose: u[1] || (u[1] = (m) => i.value = !1)
      }, {
        content: l(() => [...u[2] || (u[2] = [
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
}), I0 = /* @__PURE__ */ ae(S0, [["__scopeId", "data-v-e13bfe76"]]), E0 = { class: "api-key-card" }, P0 = { class: "api-key-row" }, M0 = { class: "api-key-input-wrapper" }, R0 = ["type", "disabled"], T0 = ["title"], D0 = { class: "status-icon" }, L0 = { class: "status-text" }, z0 = {
  key: 0,
  class: "credit-balance"
}, U0 = { class: "config-card" }, N0 = { class: "config-row" }, O0 = ["disabled"], A0 = {
  key: 0,
  value: ""
}, B0 = ["value", "disabled"], F0 = { class: "config-row" }, V0 = {
  key: 0,
  class: "loading-inline"
}, W0 = { class: "no-volumes-state" }, G0 = { class: "no-volumes-text" }, j0 = ["value"], H0 = { class: "config-row" }, K0 = ["disabled"], q0 = {
  key: 0,
  value: ""
}, Y0 = {
  key: 1,
  value: ""
}, J0 = {
  key: 2,
  value: ""
}, X0 = ["value", "disabled"], Q0 = { class: "config-row" }, Z0 = { class: "radio-group" }, ew = { class: "radio-option" }, tw = { class: "radio-label" }, sw = { class: "radio-option" }, ow = { class: "radio-label" }, nw = { class: "config-row" }, aw = { class: "radio-group" }, lw = { class: "radio-option" }, iw = { class: "radio-option" }, rw = { class: "config-row" }, dw = { class: "config-row" }, cw = { class: "summary-card" }, uw = {
  key: 0,
  class: "loading-text"
}, mw = { class: "summary-row" }, vw = { class: "summary-value" }, fw = { class: "summary-row" }, pw = { class: "summary-value" }, gw = { class: "summary-row" }, hw = { class: "summary-value" }, yw = {
  key: 0,
  class: "summary-sub-row"
}, ww = { class: "summary-sub-label" }, kw = {
  key: 1,
  class: "summary-sub-row warning"
}, bw = { class: "summary-sub-label" }, _w = { class: "summary-row" }, $w = { class: "summary-value" }, Cw = { class: "summary-row" }, xw = { class: "summary-value" }, Sw = { class: "deployment-summary" }, Iw = { class: "summary-columns" }, Ew = { class: "summary-column" }, Pw = { class: "pricing-row" }, Mw = { class: "pricing-value" }, Rw = { class: "pricing-row" }, Tw = { class: "pricing-value" }, Dw = { class: "pricing-row" }, Lw = { class: "pricing-value" }, zw = { class: "pricing-row total" }, Uw = { class: "pricing-value" }, Nw = { class: "summary-column" }, Ow = { class: "spec-row" }, Aw = { class: "spec-row" }, Bw = {
  key: 0,
  class: "spec-row"
}, Fw = {
  key: 1,
  class: "spec-row spot-warning"
}, Vw = {
  key: 3,
  class: "deploy-actions"
}, Ww = { class: "pods-header" }, Gw = {
  key: 0,
  class: "loading-text"
}, jw = {
  key: 1,
  class: "empty-state"
}, Hw = {
  key: 2,
  class: "pods-list"
}, Kw = { class: "pod-header" }, qw = { class: "pod-name" }, Yw = { class: "pod-details" }, Jw = { class: "pod-gpu" }, Xw = { class: "pod-uptime" }, Qw = { class: "pod-cost" }, Zw = { class: "pod-actions" }, ek = { class: "progress-content" }, tk = { class: "phase-indicator" }, sk = { key: 0 }, ok = { key: 1 }, nk = { key: 2 }, ak = {
  key: 3,
  class: "spinner"
}, lk = { class: "phase-text" }, ik = { class: "phase-name" }, rk = { class: "phase-detail" }, dk = {
  key: 0,
  class: "ready-actions"
}, ck = { class: "console-link" }, uk = ["href"], mk = /* @__PURE__ */ oe({
  __name: "DeploySection",
  emits: ["toast"],
  setup(t, { emit: c }) {
    const n = c, {
      getDeploySummary: i,
      getDataCenters: f,
      testRunPodConnection: p,
      getNetworkVolumes: u,
      getRunPodGpuTypes: m,
      deployToRunPod: d,
      getRunPodPods: v,
      terminateRunPodPod: y,
      getDeploymentStatus: k,
      getStoredRunPodKey: _,
      clearRunPodKey: b
    } = He(), T = h(!1), P = h(!1), $ = h(""), C = h(!1), B = h(!1), x = h(null), R = h(null), q = h(""), A = h(""), G = h(""), I = h("SECURE"), D = h("ON_DEMAND"), O = h("my-comfyui-deploy"), ie = h(""), te = h([]), J = h(!1), re = h([]), X = h(!1), z = h([]), L = h(!1), S = h(null), de = h(!1), Z = h([]), be = h(!1), xe = h(!1), Ie = h(null), Oe = h(null), me = h(!1), he = h(null), we = h(null), Q = h(null), le = U(() => re.value.find((ce) => ce.id === A.value) || null), ke = U(() => q.value ? re.value.filter((ce) => ce.data_center_id === q.value) : re.value), Ue = U(() => C.value && A.value && G.value && ie.value && !xe.value), nt = (ce) => {
      const V = z.value.find((ze) => ze.id === G.value);
      return V ? ce === "SECURE" ? V.securePrice.toFixed(2) : V.communityPrice.toFixed(2) : "0.00";
    }, Je = U(() => {
      const ce = z.value.find((Xe) => Xe.id === G.value), V = re.value.find((Xe) => Xe.id === A.value);
      if (!ce) return null;
      const ze = I.value === "SECURE" ? ce.securePrice : ce.communityPrice, qe = D.value === "SPOT" ? ze * 0.5 : ze, ct = V ? V.size_gb * 14e-5 : 0, xt = 4e-3;
      return {
        gpu: qe,
        volume: ct,
        container: xt,
        total: qe + ct + xt
      };
    });
    async function Pe() {
      if ($.value) {
        B.value = !0, x.value = null;
        try {
          const ce = await p($.value, !0);
          ce.status === "success" ? (C.value = !0, R.value = ce.credit_balance ?? null, x.value = { type: "success", message: ce.message }, await Promise.all([
            Ze(),
            Ke(),
            $e(),
            Ae()
          ])) : x.value = { type: "error", message: ce.message };
        } catch (ce) {
          x.value = {
            type: "error",
            message: ce instanceof Error ? ce.message : "Connection test failed"
          };
        } finally {
          B.value = !1;
        }
      }
    }
    async function at() {
      try {
        await b(), $.value = "", C.value = !1, x.value = null, R.value = null, te.value = [], q.value = "", re.value = [], A.value = "", z.value = [], G.value = "", S.value = null, Z.value = [], n("toast", "API key cleared", "info");
      } catch {
        n("toast", "Failed to clear key", "error");
      }
    }
    async function Ze() {
      J.value = !0;
      try {
        const ce = await f();
        te.value = ce.data_centers;
        const V = te.value.find((ze) => ze.available);
        V && (q.value = V.id);
      } catch {
        n("toast", "Failed to load data centers", "error");
      } finally {
        J.value = !1;
      }
    }
    async function Ke() {
      X.value = !0;
      try {
        const ce = await u();
        re.value = ce.volumes, re.value.length > 0 && (A.value = re.value[0].id);
      } catch {
        n("toast", "Failed to load network volumes", "error");
      } finally {
        X.value = !1;
      }
    }
    async function dt(ce) {
      L.value = !0;
      try {
        const V = await m(ce);
        z.value = V.gpu_types;
        const ze = z.value.find((qe) => qe.available);
        ze ? G.value = ze.id : G.value = "";
      } catch {
        n("toast", "Failed to load GPU types", "error");
      } finally {
        L.value = !1;
      }
    }
    Ct(q, async (ce) => {
      if (!ce) return;
      const V = re.value.find((ze) => ze.id === A.value);
      V && V.data_center_id !== ce && (A.value = ""), await dt(ce);
    }), Ct(A, async (ce) => {
      if (!ce) {
        z.value = [], G.value = "";
        return;
      }
      const V = re.value.find((ze) => ze.id === ce);
      V && V.data_center_id !== q.value ? q.value = V.data_center_id : V && await dt(V.data_center_id);
    });
    async function $e() {
      de.value = !0;
      try {
        S.value = await i();
      } catch {
        n("toast", "Failed to load environment summary", "error");
      } finally {
        de.value = !1;
      }
    }
    async function Ae() {
      be.value = !0;
      try {
        const ce = await v();
        Z.value = ce.pods;
      } catch {
        n("toast", "Failed to load pods", "error");
      } finally {
        be.value = !1;
      }
    }
    async function lt() {
      if (!(!G.value || !A.value || !ie.value)) {
        xe.value = !0, Ie.value = null;
        try {
          const ce = await d({
            gpu_type_id: G.value,
            pod_name: O.value || "my-comfyui-deploy",
            network_volume_id: A.value,
            cloud_type: I.value,
            pricing_type: D.value,
            import_source: ie.value
          });
          Ie.value = ce, ce.status === "success" && ce.pod_id ? (he.value = ce.pod_id, me.value = !0, it(ce.pod_id), await Ae()) : n("toast", ce.message, "error");
        } catch (ce) {
          Ie.value = {
            status: "error",
            message: ce instanceof Error ? ce.message : "Deployment failed"
          }, n("toast", "Deployment failed", "error");
        } finally {
          xe.value = !1;
        }
      }
    }
    function it(ce) {
      ve(ce), Q.value = window.setInterval(() => ve(ce), 3e3);
    }
    function Le() {
      Q.value && (clearInterval(Q.value), Q.value = null);
    }
    async function ve(ce) {
      try {
        const V = await k(ce);
        we.value = V, (V.phase === "READY" || V.phase === "ERROR" || V.phase === "STOPPED") && (Le(), V.phase === "READY" && n("toast", "ComfyUI is ready!", "success"), await Ae());
      } catch (V) {
        console.error("Failed to poll deployment status:", V);
      }
    }
    function K() {
      me.value = !1, Le(), he.value = null, we.value = null;
    }
    function Y() {
      var ce;
      (ce = we.value) != null && ce.comfyui_url && window.open(we.value.comfyui_url, "_blank", "noopener,noreferrer");
    }
    function E(ce) {
      return {
        STARTING_POD: "Starting Pod",
        SETTING_UP: "Setting Up Environment",
        READY: "Ready",
        STOPPED: "Stopped",
        ERROR: "Error"
      }[ce || ""] || "Initializing...";
    }
    function F(ce) {
      return {
        STARTING_POD: 25,
        SETTING_UP: 60,
        READY: 100,
        STOPPED: 0,
        ERROR: 0
      }[ce || ""] ?? 10;
    }
    async function ee(ce) {
      Oe.value = ce;
      try {
        const V = await y(ce);
        V.status === "success" ? (n("toast", "Pod terminated", "success"), await Ae()) : n("toast", V.message, "error");
      } catch {
        n("toast", "Failed to terminate pod", "error");
      } finally {
        Oe.value = null;
      }
    }
    function _e(ce) {
      window.open(ce, "_blank", "noopener,noreferrer");
    }
    function Ge(ce) {
      const V = Math.floor(ce / 3600), ze = Math.floor(ce % 3600 / 60);
      return V > 0 ? `${V}h ${ze}m` : `${ze}m`;
    }
    return We(async () => {
      try {
        const ce = await _();
        ce.has_key && ce.key_preview && ($.value = ce.key_preview, await Pe());
      } catch {
      }
    }), bs(() => {
      Le();
    }), (ce, V) => {
      var ze, qe, ct, xt, Xe, Ot;
      return s(), o(W, null, [
        w(tt, null, {
          header: l(() => [
            w(st, {
              title: "DEPLOY TO CLOUD",
              "show-info": !0,
              onInfoClick: V[0] || (V[0] = (pe) => T.value = !0)
            })
          ]),
          content: l(() => [
            w(Ne, { title: "RUNPOD API KEY" }, {
              default: l(() => [
                e("div", E0, [
                  e("div", P0, [
                    e("div", M0, [
                      De(e("input", {
                        "onUpdate:modelValue": V[1] || (V[1] = (pe) => $.value = pe),
                        type: P.value ? "text" : "password",
                        class: "api-key-input",
                        placeholder: "Enter your RunPod API key (rp_...)",
                        disabled: C.value
                      }, null, 8, R0), [
                        [vo, $.value]
                      ]),
                      e("button", {
                        class: "toggle-visibility-btn",
                        onClick: V[2] || (V[2] = (pe) => P.value = !P.value),
                        title: P.value ? "Hide key" : "Show key"
                      }, a(P.value ? "👁" : "👁‍🗨"), 9, T0)
                    ]),
                    C.value ? r("", !0) : (s(), M(se, {
                      key: 0,
                      variant: "secondary",
                      size: "sm",
                      loading: B.value,
                      disabled: !$.value || B.value,
                      onClick: Pe
                    }, {
                      default: l(() => [...V[14] || (V[14] = [
                        g(" Test ", -1)
                      ])]),
                      _: 1
                    }, 8, ["loading", "disabled"])),
                    C.value ? (s(), M(se, {
                      key: 1,
                      variant: "ghost",
                      size: "sm",
                      onClick: at
                    }, {
                      default: l(() => [...V[15] || (V[15] = [
                        g(" Clear ", -1)
                      ])]),
                      _: 1
                    })) : r("", !0)
                  ]),
                  x.value ? (s(), o("div", {
                    key: 0,
                    class: fe(["connection-status", x.value.type])
                  }, [
                    e("span", D0, a(x.value.type === "success" ? "✓" : "✕"), 1),
                    e("span", L0, a(x.value.message), 1),
                    R.value !== null ? (s(), o("span", z0, " $" + a(R.value.toFixed(2)) + " credit ", 1)) : r("", !0)
                  ], 2)) : r("", !0),
                  V[16] || (V[16] = e("div", { class: "api-key-help" }, [
                    e("span", { class: "help-icon" }, "i"),
                    e("span", { class: "help-text" }, [
                      g(" Get your API key at "),
                      e("a", {
                        href: "https://runpod.io/console/user/settings",
                        target: "_blank",
                        rel: "noopener"
                      }, "runpod.io/console/user/settings"),
                      g(". Key stored locally, never sent to ComfyGit servers. ")
                    ])
                  ], -1))
                ])
              ]),
              _: 1
            }),
            C.value ? (s(), M(Ne, {
              key: 0,
              title: "CONFIGURATION"
            }, {
              default: l(() => [
                e("div", U0, [
                  e("div", N0, [
                    V[17] || (V[17] = e("label", { class: "config-label" }, "Region", -1)),
                    De(e("select", {
                      "onUpdate:modelValue": V[3] || (V[3] = (pe) => q.value = pe),
                      class: "config-select",
                      disabled: J.value
                    }, [
                      J.value ? (s(), o("option", A0, "Loading...")) : r("", !0),
                      (s(!0), o(W, null, ne(te.value, (pe) => (s(), o("option", {
                        key: pe.id,
                        value: pe.id,
                        disabled: !pe.available
                      }, a(pe.id) + " (" + a(pe.name) + ")" + a(pe.available ? "" : " [Unavailable]"), 9, B0))), 128))
                    ], 8, O0), [
                      [It, q.value]
                    ])
                  ]),
                  e("div", F0, [
                    V[22] || (V[22] = e("label", { class: "config-label" }, "Network Volume", -1)),
                    X.value ? (s(), o("div", V0, "Loading volumes...")) : ke.value.length === 0 ? (s(), o(W, { key: 1 }, [
                      e("div", W0, [
                        V[18] || (V[18] = e("span", { class: "no-volumes-icon" }, "⚠", -1)),
                        e("span", G0, "No volumes in " + a(q.value || "this region"), 1)
                      ]),
                      V[19] || (V[19] = e("p", { class: "volume-help" }, " Network volumes provide persistent storage that survives pod termination. Create one on RunPod first: ", -1)),
                      V[20] || (V[20] = e("a", {
                        href: "https://www.runpod.io/console/user/storage",
                        target: "_blank",
                        rel: "noopener",
                        class: "create-volume-link"
                      }, " Create Volume on RunPod → ", -1))
                    ], 64)) : (s(), o(W, { key: 2 }, [
                      De(e("select", {
                        "onUpdate:modelValue": V[4] || (V[4] = (pe) => A.value = pe),
                        class: "config-select"
                      }, [
                        (s(!0), o(W, null, ne(ke.value, (pe) => (s(), o("option", {
                          key: pe.id,
                          value: pe.id
                        }, a(pe.name) + " (" + a(pe.size_gb) + "GB) ", 9, j0))), 128))
                      ], 512), [
                        [It, A.value]
                      ]),
                      V[21] || (V[21] = e("a", {
                        href: "https://www.runpod.io/console/user/storage",
                        target: "_blank",
                        rel: "noopener",
                        class: "create-volume-inline-link"
                      }, " + Create new volume ", -1))
                    ], 64))
                  ]),
                  e("div", H0, [
                    V[23] || (V[23] = e("label", { class: "config-label" }, "GPU Type", -1)),
                    De(e("select", {
                      "onUpdate:modelValue": V[5] || (V[5] = (pe) => G.value = pe),
                      class: "config-select",
                      disabled: L.value || !A.value
                    }, [
                      A.value ? L.value ? (s(), o("option", Y0, "Loading GPUs...")) : z.value.length === 0 ? (s(), o("option", J0, "No GPUs available in this region")) : r("", !0) : (s(), o("option", q0, "Select a volume first")),
                      (s(!0), o(W, null, ne(z.value, (pe) => (s(), o("option", {
                        key: pe.id,
                        value: pe.id,
                        disabled: !pe.available
                      }, a(pe.displayName) + " (" + a(pe.memoryInGb) + "GB) - $" + a(I.value === "SECURE" ? pe.securePrice.toFixed(2) : pe.communityPrice.toFixed(2)) + "/hr " + a(pe.available ? "" : " [Unavailable]"), 9, X0))), 128))
                    ], 8, K0), [
                      [It, G.value]
                    ])
                  ]),
                  e("div", Q0, [
                    V[24] || (V[24] = e("label", { class: "config-label" }, "Cloud Type", -1)),
                    e("div", Z0, [
                      e("label", ew, [
                        De(e("input", {
                          type: "radio",
                          "onUpdate:modelValue": V[6] || (V[6] = (pe) => I.value = pe),
                          value: "SECURE"
                        }, null, 512), [
                          [Tt, I.value]
                        ]),
                        e("span", tw, "Secure ($" + a(nt("SECURE")) + "/hr)", 1)
                      ]),
                      e("label", sw, [
                        De(e("input", {
                          type: "radio",
                          "onUpdate:modelValue": V[7] || (V[7] = (pe) => I.value = pe),
                          value: "COMMUNITY"
                        }, null, 512), [
                          [Tt, I.value]
                        ]),
                        e("span", ow, "Community ($" + a(nt("COMMUNITY")) + "/hr)", 1)
                      ])
                    ])
                  ]),
                  e("div", nw, [
                    V[27] || (V[27] = e("label", { class: "config-label" }, [
                      g(" Pricing "),
                      e("span", {
                        class: "info-tooltip",
                        title: "On-Demand pods run until you stop them. Spot pods are ~50% cheaper but may be interrupted if capacity is needed. Good for experimentation."
                      }, "ⓘ")
                    ], -1)),
                    e("div", aw, [
                      e("label", lw, [
                        De(e("input", {
                          type: "radio",
                          "onUpdate:modelValue": V[8] || (V[8] = (pe) => D.value = pe),
                          value: "ON_DEMAND"
                        }, null, 512), [
                          [Tt, D.value]
                        ]),
                        V[25] || (V[25] = e("span", { class: "radio-label" }, "On-Demand", -1))
                      ]),
                      e("label", iw, [
                        De(e("input", {
                          type: "radio",
                          "onUpdate:modelValue": V[9] || (V[9] = (pe) => D.value = pe),
                          value: "SPOT"
                        }, null, 512), [
                          [Tt, D.value]
                        ]),
                        V[26] || (V[26] = e("span", { class: "radio-label" }, "Spot (~50% cheaper)", -1))
                      ])
                    ])
                  ]),
                  e("div", rw, [
                    V[28] || (V[28] = e("label", { class: "config-label" }, "Pod Name", -1)),
                    De(e("input", {
                      "onUpdate:modelValue": V[10] || (V[10] = (pe) => O.value = pe),
                      type: "text",
                      class: "config-input",
                      placeholder: "my-comfyui-deploy"
                    }, null, 512), [
                      [Dt, O.value]
                    ])
                  ]),
                  e("div", dw, [
                    V[29] || (V[29] = e("label", { class: "config-label" }, [
                      g(" Environment Source "),
                      e("span", {
                        class: "info-tooltip",
                        title: "Git repository URL containing a ComfyGit environment (pyproject.toml with comfyui dependency)"
                      }, "ⓘ")
                    ], -1)),
                    De(e("input", {
                      "onUpdate:modelValue": V[11] || (V[11] = (pe) => ie.value = pe),
                      type: "text",
                      class: "config-input",
                      placeholder: "https://github.com/user/comfyui-env.git"
                    }, null, 512), [
                      [Dt, ie.value]
                    ]),
                    V[30] || (V[30] = e("span", { class: "field-help" }, "Git URL of your ComfyGit environment repository", -1))
                  ])
                ])
              ]),
              _: 1
            })) : r("", !0),
            C.value ? (s(), M(Ne, {
              key: 1,
              title: "ENVIRONMENT SUMMARY"
            }, {
              default: l(() => [
                e("div", cw, [
                  de.value ? (s(), o("div", uw, "Loading environment summary...")) : S.value ? (s(), o(W, { key: 1 }, [
                    e("div", mw, [
                      V[31] || (V[31] = e("span", { class: "summary-label" }, "ComfyUI", -1)),
                      e("span", vw, a(S.value.comfyui_version), 1)
                    ]),
                    e("div", fw, [
                      V[32] || (V[32] = e("span", { class: "summary-label" }, "Nodes", -1)),
                      e("span", pw, a(S.value.node_count) + " custom nodes", 1)
                    ]),
                    e("div", gw, [
                      V[33] || (V[33] = e("span", { class: "summary-label" }, "Models", -1)),
                      e("span", hw, a(S.value.model_count) + " models", 1)
                    ]),
                    S.value.models_with_sources > 0 ? (s(), o("div", yw, [
                      e("span", ww, "└─ " + a(S.value.models_with_sources) + " with sources (auto-download)", 1)
                    ])) : r("", !0),
                    S.value.models_without_sources > 0 ? (s(), o("div", kw, [
                      e("span", bw, "└─ " + a(S.value.models_without_sources) + " without sources (manual upload)", 1)
                    ])) : r("", !0),
                    e("div", _w, [
                      V[34] || (V[34] = e("span", { class: "summary-label" }, "Workflows", -1)),
                      e("span", $w, a(S.value.workflow_count) + " committed", 1)
                    ]),
                    e("div", Cw, [
                      V[35] || (V[35] = e("span", { class: "summary-label" }, "Package", -1)),
                      e("span", xw, "~" + a(S.value.estimated_package_size_mb) + " MB", 1)
                    ])
                  ], 64)) : r("", !0)
                ])
              ]),
              _: 1
            })) : r("", !0),
            C.value && Je.value ? (s(), M(Ne, {
              key: 2,
              title: "DEPLOYMENT SUMMARY"
            }, {
              default: l(() => {
                var pe, ft;
                return [
                  e("div", Sw, [
                    e("div", Iw, [
                      e("div", Ew, [
                        V[40] || (V[40] = e("div", { class: "column-header" }, "Pricing", -1)),
                        e("div", Pw, [
                          V[36] || (V[36] = e("span", { class: "pricing-label" }, "GPU:", -1)),
                          e("span", Mw, "$" + a(Je.value.gpu.toFixed(2)) + "/hr", 1)
                        ]),
                        e("div", Rw, [
                          V[37] || (V[37] = e("span", { class: "pricing-label" }, "Volume:", -1)),
                          e("span", Tw, "$" + a(Je.value.volume.toFixed(3)) + "/hr", 1)
                        ]),
                        e("div", Dw, [
                          V[38] || (V[38] = e("span", { class: "pricing-label" }, "Disk:", -1)),
                          e("span", Lw, "$" + a(Je.value.container.toFixed(3)) + "/hr", 1)
                        ]),
                        V[41] || (V[41] = e("div", { class: "pricing-divider" }, null, -1)),
                        e("div", zw, [
                          V[39] || (V[39] = e("span", { class: "pricing-label" }, "Total:", -1)),
                          e("span", Uw, "~$" + a(Je.value.total.toFixed(2)) + "/hr", 1)
                        ])
                      ]),
                      e("div", Nw, [
                        V[43] || (V[43] = e("div", { class: "column-header" }, "Pod Specs", -1)),
                        e("div", Ow, [
                          e("span", null, a(((pe = z.value.find((kt) => kt.id === G.value)) == null ? void 0 : pe.displayName) || "GPU") + " (" + a(((ft = z.value.find((kt) => kt.id === G.value)) == null ? void 0 : ft.memoryInGb) || 0) + "GB VRAM)", 1)
                        ]),
                        e("div", Aw, [
                          e("span", null, "Region: " + a(q.value), 1)
                        ]),
                        le.value ? (s(), o("div", Bw, [
                          e("span", null, "Volume: " + a(le.value.name), 1)
                        ])) : r("", !0),
                        D.value === "SPOT" ? (s(), o("div", Fw, [...V[42] || (V[42] = [
                          e("span", null, "⚠ Spot instance - may be interrupted", -1)
                        ])])) : r("", !0)
                      ])
                    ])
                  ])
                ];
              }),
              _: 1
            })) : r("", !0),
            C.value ? (s(), o("div", Vw, [
              w(se, {
                variant: "primary",
                size: "md",
                loading: xe.value,
                disabled: !Ue.value,
                onClick: lt
              }, {
                default: l(() => [...V[44] || (V[44] = [
                  e("svg", {
                    width: "16",
                    height: "16",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    e("path", { d: "M8 1L3 6h3v5h4V6h3L8 1z" }),
                    e("path", { d: "M14 12v2H2v-2H0v4h16v-4h-2z" })
                  ], -1),
                  g(" Deploy to RunPod ", -1)
                ])]),
                _: 1
              }, 8, ["loading", "disabled"])
            ])) : r("", !0),
            Ie.value ? (s(), M(Ne, {
              key: 4,
              title: "DEPLOY STATUS"
            }, {
              default: l(() => [
                w(et, {
                  status: Ie.value.status === "success" ? "synced" : "broken"
                }, Nt({
                  icon: l(() => [
                    g(a(Ie.value.status === "success" ? "✓" : "✕"), 1)
                  ]),
                  title: l(() => [
                    g(a(Ie.value.status === "success" ? "Deployment Started" : "Deployment Failed"), 1)
                  ]),
                  subtitle: l(() => [
                    g(a(Ie.value.message), 1)
                  ]),
                  actions: l(() => [
                    w(se, {
                      variant: "ghost",
                      size: "sm",
                      onClick: V[12] || (V[12] = (pe) => Ie.value = null)
                    }, {
                      default: l(() => [...V[45] || (V[45] = [
                        g(" Dismiss ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, [
                  Ie.value.pod_id ? {
                    name: "details",
                    fn: l(() => [
                      w(Ve, {
                        label: "Pod ID:",
                        value: Ie.value.pod_id
                      }, null, 8, ["value"])
                    ]),
                    key: "0"
                  } : void 0
                ]), 1032, ["status"])
              ]),
              _: 1
            })) : r("", !0),
            C.value ? (s(), M(Ne, {
              key: 5,
              title: "ACTIVE PODS"
            }, {
              default: l(() => [
                e("div", Ww, [
                  w(se, {
                    variant: "ghost",
                    size: "sm",
                    loading: be.value,
                    onClick: Ae
                  }, {
                    default: l(() => [...V[46] || (V[46] = [
                      g(" Refresh ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"])
                ]),
                be.value && Z.value.length === 0 ? (s(), o("div", Gw, " Loading pods... ")) : Z.value.length === 0 ? (s(), o("div", jw, [...V[47] || (V[47] = [
                  e("span", { class: "empty-icon" }, "○", -1),
                  e("span", { class: "empty-text" }, "No active pods", -1)
                ])])) : (s(), o("div", Hw, [
                  (s(!0), o(W, null, ne(Z.value, (pe) => (s(), o("div", {
                    key: pe.id,
                    class: "pod-card"
                  }, [
                    e("div", Kw, [
                      e("span", qw, a(pe.name), 1),
                      e("span", {
                        class: fe(["pod-status", pe.status.toLowerCase()])
                      }, a(pe.status === "RUNNING" ? "●" : "○") + " " + a(pe.status), 3)
                    ]),
                    e("div", Yw, [
                      e("span", Jw, a(pe.gpu_type), 1),
                      V[48] || (V[48] = e("span", { class: "pod-separator" }, "•", -1)),
                      e("span", Xw, a(Ge(pe.uptime_seconds)), 1),
                      V[49] || (V[49] = e("span", { class: "pod-separator" }, "•", -1)),
                      e("span", Qw, "$" + a(pe.total_cost.toFixed(2)), 1)
                    ]),
                    e("div", Zw, [
                      pe.comfyui_url && pe.status === "RUNNING" ? (s(), M(se, {
                        key: 0,
                        variant: "primary",
                        size: "sm",
                        onClick: (ft) => _e(pe.comfyui_url)
                      }, {
                        default: l(() => [...V[50] || (V[50] = [
                          g(" Open ComfyUI ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : r("", !0),
                      w(se, {
                        variant: "ghost",
                        size: "sm",
                        loading: Oe.value === pe.id,
                        onClick: (ft) => ee(pe.id)
                      }, {
                        default: l(() => [...V[51] || (V[51] = [
                          g(" Terminate ", -1)
                        ])]),
                        _: 1
                      }, 8, ["loading", "onClick"])
                    ])
                  ]))), 128))
                ]))
              ]),
              _: 1
            })) : r("", !0)
          ]),
          _: 1
        }),
        w(wt, {
          show: T.value,
          title: "Deploy to Cloud",
          onClose: V[13] || (V[13] = (pe) => T.value = !1)
        }, {
          content: l(() => [...V[52] || (V[52] = [
            e("div", { class: "deploy-info" }, [
              e("div", { class: "info-section" }, [
                e("strong", null, "What is Deploy?"),
                e("p", null, "Deploy lets you run your ComfyUI environment on cloud GPU instances using your own RunPod account (BYOK - Bring Your Own Key).")
              ]),
              e("div", { class: "info-section" }, [
                e("strong", null, "What gets deployed:"),
                e("ul", null, [
                  e("li", null, [
                    e("strong", null, "Workflows"),
                    g(" - All committed workflows")
                  ]),
                  e("li", null, [
                    e("strong", null, "Custom Nodes"),
                    g(" - Installed automatically")
                  ]),
                  e("li", null, [
                    e("strong", null, "Models"),
                    g(" - Downloaded from sources (when available)")
                  ]),
                  e("li", null, [
                    e("strong", null, "Configuration"),
                    g(" - Environment settings")
                  ])
                ])
              ]),
              e("div", { class: "info-section" }, [
                e("strong", null, "Cost Information:"),
                e("p", null, "You pay RunPod directly for GPU time. Costs vary by GPU type and cloud tier. Monitor your spend at runpod.io.")
              ])
            ], -1)
          ])]),
          _: 1
        }, 8, ["show"]),
        me.value ? (s(), M(ot, {
          key: 0,
          title: "Deploying to RunPod",
          size: "sm",
          "show-close-button": ((ze = we.value) == null ? void 0 : ze.phase) === "READY" || ((qe = we.value) == null ? void 0 : qe.phase) === "ERROR" || ((ct = we.value) == null ? void 0 : ct.phase) === "STOPPED",
          "close-on-overlay-click": !1,
          onClose: K
        }, Nt({
          body: l(() => {
            var pe, ft, kt, At, Bt, Lt, Ft, Vt, Wt, j, ue, Ce;
            return [
              e("div", ek, [
                e("div", tk, [
                  e("div", {
                    class: fe(["phase-icon", (ft = (pe = we.value) == null ? void 0 : pe.phase) == null ? void 0 : ft.toLowerCase()])
                  }, [
                    ((kt = we.value) == null ? void 0 : kt.phase) === "READY" ? (s(), o("span", sk, "✓")) : ((At = we.value) == null ? void 0 : At.phase) === "ERROR" ? (s(), o("span", ok, "✕")) : ((Bt = we.value) == null ? void 0 : Bt.phase) === "STOPPED" ? (s(), o("span", nk, "○")) : (s(), o("span", ak, "⟳"))
                  ], 2),
                  e("div", lk, [
                    e("div", ik, a(E((Lt = we.value) == null ? void 0 : Lt.phase)), 1),
                    e("div", rk, a(((Ft = we.value) == null ? void 0 : Ft.phase_detail) || "Starting..."), 1)
                  ])
                ]),
                w(Ss, {
                  progress: F((Vt = we.value) == null ? void 0 : Vt.phase),
                  variant: ((Wt = we.value) == null ? void 0 : Wt.phase) === "ERROR" ? "error" : ((j = we.value) == null ? void 0 : j.phase) === "READY" ? "success" : "default"
                }, null, 8, ["progress", "variant"]),
                ((ue = we.value) == null ? void 0 : ue.phase) === "READY" ? (s(), o("div", dk, [
                  w(se, {
                    variant: "primary",
                    size: "md",
                    onClick: Y
                  }, {
                    default: l(() => [...V[53] || (V[53] = [
                      g(" Open ComfyUI ", -1)
                    ])]),
                    _: 1
                  })
                ])) : r("", !0),
                e("div", ck, [
                  (Ce = we.value) != null && Ce.console_url ? (s(), o("a", {
                    key: 0,
                    href: we.value.console_url,
                    target: "_blank",
                    rel: "noopener"
                  }, " View in RunPod Console → ", 8, uk)) : r("", !0)
                ])
              ])
            ];
          }),
          _: 2
        }, [
          ((xt = we.value) == null ? void 0 : xt.phase) === "READY" || ((Xe = we.value) == null ? void 0 : Xe.phase) === "ERROR" || ((Ot = we.value) == null ? void 0 : Ot.phase) === "STOPPED" ? {
            name: "footer",
            fn: l(() => [
              w(se, {
                variant: "ghost",
                size: "sm",
                onClick: K
              }, {
                default: l(() => [...V[54] || (V[54] = [
                  g(" Close ", -1)
                ])]),
                _: 1
              })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["show-close-button"])) : r("", !0)
      ], 64);
    };
  }
}), vk = /* @__PURE__ */ ae(mk, [["__scopeId", "data-v-254fe31c"]]), fk = { class: "header-info" }, pk = { class: "commit-hash" }, gk = {
  key: 0,
  class: "commit-refs"
}, hk = { class: "commit-message" }, yk = { class: "commit-date" }, wk = {
  key: 0,
  class: "loading"
}, kk = {
  key: 1,
  class: "changes-section"
}, bk = { class: "stats-row" }, _k = { class: "stat" }, $k = { class: "stat insertions" }, Ck = { class: "stat deletions" }, xk = {
  key: 0,
  class: "change-group"
}, Sk = {
  key: 1,
  class: "change-group"
}, Ik = {
  key: 0,
  class: "version"
}, Ek = {
  key: 2,
  class: "change-group"
}, Pk = { class: "change-item" }, Mk = /* @__PURE__ */ oe({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const c = t, { getCommitDetail: n } = He(), i = h(null), f = h(!0), p = U(() => {
      if (!i.value) return !1;
      const m = i.value.changes.workflows;
      return m.added.length > 0 || m.modified.length > 0 || m.deleted.length > 0;
    }), u = U(() => {
      if (!i.value) return !1;
      const m = i.value.changes.nodes;
      return m.added.length > 0 || m.removed.length > 0;
    });
    return We(async () => {
      try {
        i.value = await n(c.commit.hash);
      } finally {
        f.value = !1;
      }
    }), (m, d) => (s(), M(ot, {
      size: "md",
      "show-close-button": !1,
      onClose: d[3] || (d[3] = (v) => m.$emit("close"))
    }, {
      header: l(() => {
        var v, y, k, _;
        return [
          e("div", fk, [
            d[4] || (d[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", pk, a(((v = i.value) == null ? void 0 : v.short_hash) || t.commit.short_hash || ((y = t.commit.hash) == null ? void 0 : y.slice(0, 7))), 1),
            (_ = (k = i.value) == null ? void 0 : k.refs) != null && _.length ? (s(), o("span", gk, [
              (s(!0), o(W, null, ne(i.value.refs, (b) => (s(), o("span", {
                key: b,
                class: "ref-badge"
              }, a(b), 1))), 128))
            ])) : r("", !0)
          ]),
          w(ge, {
            variant: "ghost",
            size: "sm",
            onClick: d[0] || (d[0] = (b) => m.$emit("close"))
          }, {
            default: l(() => [...d[5] || (d[5] = [
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
        var v, y;
        return [
          e("div", hk, a(((v = i.value) == null ? void 0 : v.message) || t.commit.message), 1),
          e("div", yk, a(((y = i.value) == null ? void 0 : y.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          f.value ? (s(), o("div", wk, "Loading details...")) : i.value ? (s(), o("div", kk, [
            e("div", bk, [
              e("span", _k, a(i.value.stats.files_changed) + " files", 1),
              e("span", $k, "+" + a(i.value.stats.insertions), 1),
              e("span", Ck, "-" + a(i.value.stats.deletions), 1)
            ]),
            p.value ? (s(), o("div", xk, [
              w(es, { variant: "section" }, {
                default: l(() => [...d[6] || (d[6] = [
                  g("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(W, null, ne(i.value.changes.workflows.added, (k) => (s(), o("div", {
                key: "add-" + k,
                class: "change-item added"
              }, [
                d[7] || (d[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(k), 1)
              ]))), 128)),
              (s(!0), o(W, null, ne(i.value.changes.workflows.modified, (k) => (s(), o("div", {
                key: "mod-" + k,
                class: "change-item modified"
              }, [
                d[8] || (d[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, a(k), 1)
              ]))), 128)),
              (s(!0), o(W, null, ne(i.value.changes.workflows.deleted, (k) => (s(), o("div", {
                key: "del-" + k,
                class: "change-item deleted"
              }, [
                d[9] || (d[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(k), 1)
              ]))), 128))
            ])) : r("", !0),
            u.value ? (s(), o("div", Sk, [
              w(es, { variant: "section" }, {
                default: l(() => [...d[10] || (d[10] = [
                  g("NODES", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(W, null, ne(i.value.changes.nodes.added, (k) => (s(), o("div", {
                key: "add-" + k.name,
                class: "change-item added"
              }, [
                d[11] || (d[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(k.name), 1),
                k.version ? (s(), o("span", Ik, "(" + a(k.version) + ")", 1)) : r("", !0)
              ]))), 128)),
              (s(!0), o(W, null, ne(i.value.changes.nodes.removed, (k) => (s(), o("div", {
                key: "rem-" + k.name,
                class: "change-item deleted"
              }, [
                d[12] || (d[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(k.name), 1)
              ]))), 128))
            ])) : r("", !0),
            i.value.changes.models.resolved > 0 ? (s(), o("div", Ek, [
              w(es, { variant: "section" }, {
                default: l(() => [...d[13] || (d[13] = [
                  g("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", Pk, [
                d[14] || (d[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, a(i.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : r("", !0)
          ])) : r("", !0)
        ];
      }),
      footer: l(() => [
        w(ge, {
          variant: "secondary",
          onClick: d[1] || (d[1] = (v) => m.$emit("createBranch", t.commit))
        }, {
          default: l(() => [...d[15] || (d[15] = [
            g(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        w(ge, {
          variant: "primary",
          onClick: d[2] || (d[2] = (v) => m.$emit("checkout", t.commit))
        }, {
          default: l(() => [...d[16] || (d[16] = [
            g(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Rk = /* @__PURE__ */ ae(Mk, [["__scopeId", "data-v-d256ff6d"]]), Tk = { class: "base-textarea-wrapper" }, Dk = ["value", "rows", "placeholder", "disabled", "maxlength"], Lk = {
  key: 0,
  class: "base-textarea-count"
}, zk = /* @__PURE__ */ oe({
  __name: "BaseTextarea",
  props: {
    modelValue: {},
    rows: { default: 3 },
    placeholder: {},
    disabled: { type: Boolean, default: !1 },
    maxLength: {},
    showCharCount: { type: Boolean, default: !1 },
    submitOnEnter: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "ctrlEnter", "submit"],
  setup(t, { emit: c }) {
    const n = t, i = c;
    function f(p) {
      p.shiftKey || p.ctrlKey || p.metaKey || n.submitOnEnter && (p.preventDefault(), i("submit"));
    }
    return (p, u) => (s(), o("div", Tk, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: u[0] || (u[0] = (m) => p.$emit("update:modelValue", m.target.value)),
        onKeydown: [
          u[1] || (u[1] = $t(Be((m) => p.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          u[2] || (u[2] = $t(Be((m) => p.$emit("ctrlEnter"), ["meta"]), ["enter"])),
          $t(f, ["enter"])
        ]
      }, null, 40, Dk),
      t.showCharCount && t.maxLength ? (s(), o("div", Lk, a(t.modelValue.length) + " / " + a(t.maxLength), 1)) : r("", !0)
    ]));
  }
}), Ns = /* @__PURE__ */ ae(zk, [["__scopeId", "data-v-c6d16c93"]]), Uk = ["checked", "disabled"], Nk = { class: "base-checkbox-box" }, Ok = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, Ak = {
  key: 0,
  class: "base-checkbox-label"
}, Bk = /* @__PURE__ */ oe({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (s(), o("label", {
      class: fe(["base-checkbox", { disabled: t.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        class: "base-checkbox-input",
        onChange: n[0] || (n[0] = (i) => c.$emit("update:modelValue", i.target.checked))
      }, null, 40, Uk),
      e("span", Nk, [
        t.modelValue ? (s(), o("svg", Ok, [...n[1] || (n[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : r("", !0)
      ]),
      c.$slots.default ? (s(), o("span", Ak, [
        Me(c.$slots, "default", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), Os = /* @__PURE__ */ ae(Bk, [["__scopeId", "data-v-bf17c831"]]), Fk = { class: "popover-header" }, Vk = { class: "popover-body" }, Wk = {
  key: 0,
  class: "changes-summary"
}, Gk = {
  key: 0,
  class: "change-item"
}, jk = {
  key: 1,
  class: "change-item"
}, Hk = {
  key: 2,
  class: "change-item"
}, Kk = {
  key: 3,
  class: "change-item"
}, qk = {
  key: 4,
  class: "change-item"
}, Yk = {
  key: 5,
  class: "change-item"
}, Jk = {
  key: 1,
  class: "no-changes"
}, Xk = {
  key: 2,
  class: "loading"
}, Qk = {
  key: 3,
  class: "issues-error"
}, Zk = { class: "error-header" }, eb = { class: "error-title" }, tb = { class: "issues-list" }, sb = { class: "message-section" }, ob = { class: "popover-footer" }, nb = {
  key: 1,
  class: "commit-popover"
}, ab = { class: "popover-header" }, lb = { class: "popover-body" }, ib = {
  key: 0,
  class: "changes-summary"
}, rb = {
  key: 0,
  class: "change-item"
}, db = {
  key: 1,
  class: "change-item"
}, cb = {
  key: 2,
  class: "change-item"
}, ub = {
  key: 3,
  class: "change-item"
}, mb = {
  key: 4,
  class: "change-item"
}, vb = {
  key: 5,
  class: "change-item"
}, fb = {
  key: 1,
  class: "no-changes"
}, pb = {
  key: 2,
  class: "loading"
}, gb = {
  key: 3,
  class: "issues-error"
}, hb = { class: "error-header" }, yb = { class: "error-title" }, wb = { class: "issues-list" }, kb = { class: "message-section" }, bb = { class: "popover-footer" }, _b = /* @__PURE__ */ oe({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: c }) {
    const n = t, i = c, { commit: f } = He(), p = h(""), u = h(!1), m = h(!1), d = U(() => {
      if (!n.status) return !1;
      const T = n.status.workflows;
      return T.new.length > 0 || T.modified.length > 0 || T.deleted.length > 0 || n.status.has_changes;
    }), v = U(() => {
      if (!n.status) return !1;
      const T = n.status.workflows, P = n.status.git_changes;
      return T.new.length > 0 || T.modified.length > 0 || T.deleted.length > 0 || P.nodes_added.length > 0 || P.nodes_removed.length > 0;
    }), y = U(() => {
      var T;
      return (T = n.status) != null && T.workflows.analyzed ? n.status.workflows.analyzed.filter(
        (P) => P.has_issues && (P.sync_state === "new" || P.sync_state === "modified")
      ) : [];
    }), k = U(() => y.value.length > 0), _ = U(() => k.value && !m.value);
    async function b() {
      var T, P, $;
      if (!(k.value && !m.value) && !(!d.value || !p.value.trim() || u.value)) {
        u.value = !0;
        try {
          const C = await f(p.value.trim(), m.value);
          if (C.status === "success") {
            const B = `Committed: ${((T = C.summary) == null ? void 0 : T.new) || 0} new, ${((P = C.summary) == null ? void 0 : P.modified) || 0} modified, ${(($ = C.summary) == null ? void 0 : $.deleted) || 0} deleted`;
            i("committed", { success: !0, message: B });
          } else C.status === "no_changes" ? i("committed", { success: !1, message: "No changes to commit" }) : C.status === "blocked" ? i("committed", { success: !1, message: 'Commit blocked - enable "Allow issues" to force commit' }) : i("committed", { success: !1, message: C.message || "Commit failed" });
        } catch (C) {
          i("committed", { success: !1, message: C instanceof Error ? C.message : "Commit failed" });
        } finally {
          u.value = !1;
        }
      }
    }
    return (T, P) => t.asModal ? (s(), M(Ye, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: P[5] || (P[5] = ($) => i("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: P[4] || (P[4] = Be(() => {
          }, ["stop"]))
        }, [
          e("div", Fk, [
            P[11] || (P[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: P[0] || (P[0] = ($) => i("close"))
            }, [...P[10] || (P[10] = [
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
          e("div", Vk, [
            t.status && d.value ? (s(), o("div", Wk, [
              t.status.workflows.new.length ? (s(), o("div", Gk, [
                P[12] || (P[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : r("", !0),
              t.status.workflows.modified.length ? (s(), o("div", jk, [
                P[13] || (P[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
              ])) : r("", !0),
              t.status.workflows.deleted.length ? (s(), o("div", Hk, [
                P[14] || (P[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : r("", !0),
              t.status.git_changes.nodes_added.length ? (s(), o("div", Kk, [
                P[15] || (P[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : r("", !0),
              t.status.git_changes.nodes_removed.length ? (s(), o("div", qk, [
                P[16] || (P[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : r("", !0),
              v.value ? r("", !0) : (s(), o("div", Yk, [...P[17] || (P[17] = [
                e("span", { class: "change-icon modified" }, "~", -1),
                e("span", null, "Configuration updated", -1)
              ])]))
            ])) : t.status ? (s(), o("div", Jk, " No changes to commit ")) : (s(), o("div", Xk, " Loading... ")),
            k.value ? (s(), o("div", Qk, [
              e("div", Zk, [
                P[18] || (P[18] = e("span", { class: "error-icon" }, "⚠", -1)),
                e("span", eb, a(y.value.length) + " workflow(s) can't run", 1)
              ]),
              e("div", tb, [
                (s(!0), o(W, null, ne(y.value, ($) => (s(), o("div", {
                  key: $.name,
                  class: "issue-item"
                }, [
                  e("strong", null, a($.name), 1),
                  g(": " + a($.issue_summary), 1)
                ]))), 128))
              ]),
              w(Os, {
                modelValue: m.value,
                "onUpdate:modelValue": P[1] || (P[1] = ($) => m.value = $),
                class: "allow-issues-toggle"
              }, {
                default: l(() => [...P[19] || (P[19] = [
                  g(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : r("", !0),
            e("div", sb, [
              w(Ns, {
                modelValue: p.value,
                "onUpdate:modelValue": P[2] || (P[2] = ($) => p.value = $),
                placeholder: _.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
                disabled: !d.value || u.value || _.value,
                rows: 3,
                "submit-on-enter": !0,
                onCtrlEnter: b,
                onSubmit: b
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ])
          ]),
          e("div", ob, [
            w(ge, {
              variant: "secondary",
              onClick: P[3] || (P[3] = ($) => i("close"))
            }, {
              default: l(() => [...P[20] || (P[20] = [
                g(" Cancel ", -1)
              ])]),
              _: 1
            }),
            w(ge, {
              variant: m.value ? "danger" : "primary",
              disabled: !d.value || !p.value.trim() || u.value || _.value,
              loading: u.value,
              onClick: b
            }, {
              default: l(() => [
                g(a(u.value ? "Committing..." : m.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (s(), o("div", nb, [
      e("div", ab, [
        P[22] || (P[22] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: P[6] || (P[6] = ($) => i("close"))
        }, [...P[21] || (P[21] = [
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
      e("div", lb, [
        t.status && d.value ? (s(), o("div", ib, [
          t.status.workflows.new.length ? (s(), o("div", rb, [
            P[23] || (P[23] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : r("", !0),
          t.status.workflows.modified.length ? (s(), o("div", db, [
            P[24] || (P[24] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
          ])) : r("", !0),
          t.status.workflows.deleted.length ? (s(), o("div", cb, [
            P[25] || (P[25] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : r("", !0),
          t.status.git_changes.nodes_added.length ? (s(), o("div", ub, [
            P[26] || (P[26] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : r("", !0),
          t.status.git_changes.nodes_removed.length ? (s(), o("div", mb, [
            P[27] || (P[27] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : r("", !0),
          v.value ? r("", !0) : (s(), o("div", vb, [...P[28] || (P[28] = [
            e("span", { class: "change-icon modified" }, "~", -1),
            e("span", null, "Configuration updated", -1)
          ])]))
        ])) : t.status ? (s(), o("div", fb, " No changes to commit ")) : (s(), o("div", pb, " Loading... ")),
        k.value ? (s(), o("div", gb, [
          e("div", hb, [
            P[29] || (P[29] = e("span", { class: "error-icon" }, "⚠", -1)),
            e("span", yb, a(y.value.length) + " workflow(s) can't run", 1)
          ]),
          e("div", wb, [
            (s(!0), o(W, null, ne(y.value, ($) => (s(), o("div", {
              key: $.name,
              class: "issue-item"
            }, [
              e("strong", null, a($.name), 1),
              g(": " + a($.issue_summary), 1)
            ]))), 128))
          ]),
          w(Os, {
            modelValue: m.value,
            "onUpdate:modelValue": P[7] || (P[7] = ($) => m.value = $),
            class: "allow-issues-toggle"
          }, {
            default: l(() => [...P[30] || (P[30] = [
              g(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : r("", !0),
        e("div", kb, [
          w(Ns, {
            modelValue: p.value,
            "onUpdate:modelValue": P[8] || (P[8] = ($) => p.value = $),
            placeholder: _.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
            disabled: !d.value || u.value || _.value,
            rows: 3,
            "submit-on-enter": !0,
            onCtrlEnter: b,
            onSubmit: b
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ])
      ]),
      e("div", bb, [
        w(ge, {
          variant: "secondary",
          onClick: P[9] || (P[9] = ($) => i("close"))
        }, {
          default: l(() => [...P[31] || (P[31] = [
            g(" Cancel ", -1)
          ])]),
          _: 1
        }),
        w(ge, {
          variant: m.value ? "danger" : "primary",
          disabled: !d.value || !p.value.trim() || u.value || _.value,
          loading: u.value,
          onClick: b
        }, {
          default: l(() => [
            g(a(u.value ? "Committing..." : m.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), to = /* @__PURE__ */ ae(_b, [["__scopeId", "data-v-d0fe6172"]]), $b = { class: "modal-header" }, Cb = { class: "modal-body" }, xb = { class: "switch-message" }, Sb = { class: "switch-details" }, Ib = { class: "modal-actions" }, Eb = /* @__PURE__ */ oe({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, n) => (s(), M(Ye, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (i) => c.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = Be(() => {
          }, ["stop"]))
        }, [
          e("div", $b, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", Cb, [
            e("p", xb, [
              n[6] || (n[6] = g(" Switch from ", -1)),
              e("strong", null, a(t.fromEnvironment), 1),
              n[7] || (n[7] = g(" to ", -1)),
              e("strong", null, a(t.toEnvironment), 1),
              n[8] || (n[8] = g("? ", -1))
            ]),
            n[9] || (n[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This will restart ComfyUI")
            ], -1)),
            e("p", Sb, ' Your current work will be preserved. You can switch back to "' + a(t.fromEnvironment) + '" anytime. ', 1),
            n[10] || (n[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", Ib, [
            w(se, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (i) => c.$emit("close"))
            }, {
              default: l(() => [...n[11] || (n[11] = [
                g(" Cancel ", -1)
              ])]),
              _: 1
            }),
            w(se, {
              variant: "primary",
              onClick: n[2] || (n[2] = (i) => c.$emit("confirm"))
            }, {
              default: l(() => [...n[12] || (n[12] = [
                g(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : r("", !0)
    ]));
  }
}), Pb = /* @__PURE__ */ ae(Eb, [["__scopeId", "data-v-e9c5253e"]]), Mb = {
  key: 0,
  class: "modal-overlay"
}, Rb = { class: "modal-content" }, Tb = { class: "modal-body" }, Db = { class: "progress-info" }, Lb = { class: "progress-percentage" }, zb = { class: "progress-state" }, Ub = { class: "switch-steps" }, Nb = { class: "step-icon" }, Ob = { class: "step-label" }, Ab = /* @__PURE__ */ oe({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const c = t, n = U(() => {
      const p = {
        idle: "Idle",
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!",
        rolled_back: "Switch failed, restored previous environment",
        critical_failure: "Critical error occurred"
      };
      return c.message || p[c.state] || c.state;
    }), i = U(() => c.state === "complete" ? "success" : c.state === "critical_failure" || c.state === "rolled_back" ? "error" : "default"), f = U(() => {
      const p = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], u = p.findIndex((m) => m.state === c.state);
      return p.map((m, d) => {
        let v = "pending", y = "○";
        return d < u ? (v = "completed", y = "✓") : d === u && (v = "active", y = "⟳"), {
          ...m,
          status: v,
          icon: y
        };
      });
    });
    return (p, u) => (s(), M(Ye, { to: "body" }, [
      t.show ? (s(), o("div", Mb, [
        e("div", Rb, [
          u[1] || (u[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", Tb, [
            w(Ss, {
              progress: t.progress,
              variant: i.value
            }, null, 8, ["progress", "variant"]),
            e("div", Db, [
              e("div", Lb, a(t.progress) + "%", 1),
              e("div", zb, a(n.value), 1)
            ]),
            e("div", Ub, [
              (s(!0), o(W, null, ne(f.value, (m) => (s(), o("div", {
                key: m.state,
                class: fe(["switch-step", m.status])
              }, [
                e("span", Nb, a(m.icon), 1),
                e("span", Ob, a(m.label), 1)
              ], 2))), 128))
            ]),
            u[0] || (u[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : r("", !0)
    ]));
  }
}), Bb = /* @__PURE__ */ ae(Ab, [["__scopeId", "data-v-768a5078"]]), Fb = { class: "modal-header" }, Vb = { class: "modal-body" }, Wb = {
  key: 0,
  class: "node-section"
}, Gb = { class: "node-list" }, jb = {
  key: 1,
  class: "node-section"
}, Hb = { class: "node-list" }, Kb = { class: "modal-actions" }, qb = /* @__PURE__ */ oe({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, n) => (s(), M(Ye, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (i) => c.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = Be(() => {
          }, ["stop"]))
        }, [
          e("div", Fb, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", Vb, [
            n[8] || (n[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (s(), o("div", Wb, [
              n[6] || (n[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", Gb, [
                (s(!0), o(W, null, ne(t.mismatchDetails.missing_nodes, (i) => (s(), o("div", {
                  key: i,
                  class: "node-item add"
                }, " + " + a(i), 1))), 128))
              ])
            ])) : r("", !0),
            t.mismatchDetails.extra_nodes.length ? (s(), o("div", jb, [
              n[7] || (n[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", Hb, [
                (s(!0), o(W, null, ne(t.mismatchDetails.extra_nodes, (i) => (s(), o("div", {
                  key: i,
                  class: "node-item remove"
                }, " - " + a(i), 1))), 128))
              ])
            ])) : r("", !0),
            n[9] || (n[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This may take several minutes")
            ], -1))
          ]),
          e("div", Kb, [
            w(se, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (i) => c.$emit("close"))
            }, {
              default: l(() => [...n[10] || (n[10] = [
                g(" Cancel ", -1)
              ])]),
              _: 1
            }),
            w(se, {
              variant: "primary",
              onClick: n[2] || (n[2] = (i) => c.$emit("confirm"))
            }, {
              default: l(() => [...n[11] || (n[11] = [
                g(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : r("", !0)
    ]));
  }
}), Yb = /* @__PURE__ */ ae(qb, [["__scopeId", "data-v-7cad7518"]]), Jb = [
  {
    id: "sponsor",
    url: "https://github.com/sponsors/comfyhub-org",
    title: "Sponsor ComfyHub",
    ariaLabel: "Sponsor ComfyHub on GitHub",
    iconPath: "M8 14s-5.5-3.5-5.5-7A3.5 3.5 0 0 1 6 3.5c1.1 0 2 .5 2 .5s.9-.5 2-.5a3.5 3.5 0 0 1 3.5 3.5c0 3.5-5.5 7-5.5 7z",
    label: "Sponsor"
  },
  {
    id: "discord",
    url: "https://discord.gg/2h5rSTeh6Y",
    title: "Join Discord",
    ariaLabel: "Join ComfyHub Discord",
    iconPath: "M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.027-.07 8.735 8.735 0 0 1-1.248-.595.05.05 0 0 1-.005-.083c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085c-.399.233-.813.44-1.249.594a.05.05 0 0 0-.027.07c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019zM5.347 10.64c-.79 0-1.44-.724-1.44-1.612 0-.889.637-1.613 1.44-1.613.807 0 1.451.733 1.44 1.613 0 .888-.637 1.612-1.44 1.612zm5.316 0c-.788 0-1.44-.724-1.44-1.612 0-.889.637-1.613 1.44-1.613.808 0 1.451.733 1.44 1.613 0 .888-.632 1.612-1.44 1.612z"
  },
  {
    id: "x",
    url: "https://x.com/akatz_ai",
    title: "Follow on X",
    ariaLabel: "Follow on X",
    iconPath: "M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633z"
  },
  {
    id: "github",
    url: "https://github.com/comfyhub-org/comfygit",
    title: "View on GitHub",
    ariaLabel: "View ComfyGit on GitHub",
    iconPath: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
  },
  {
    id: "docs",
    url: "https://docs.comfyhub.org/comfygit/",
    title: "Documentation",
    ariaLabel: "View ComfyGit Documentation",
    iconPath: "M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"
  }
], Xb = "v0.0.4", Qb = "Akatz", Zb = { class: "social-buttons" }, e_ = ["title", "aria-label", "onClick"], t_ = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, s_ = ["d"], o_ = ["title", "aria-label", "onClick"], n_ = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, a_ = ["d"], l_ = /* @__PURE__ */ oe({
  __name: "SocialButtons",
  setup(t) {
    function c(n) {
      window.open(n, "_blank", "noopener,noreferrer");
    }
    return (n, i) => (s(), o("div", Zb, [
      (s(!0), o(W, null, ne(Ee(Jb), (f) => (s(), o(W, {
        key: f.id
      }, [
        f.label ? (s(), o("button", {
          key: 0,
          class: "icon-btn sponsor-btn",
          title: f.title,
          "aria-label": f.ariaLabel,
          onClick: (p) => c(f.url)
        }, [
          g(a(f.label) + " ", 1),
          (s(), o("svg", t_, [
            e("path", {
              d: f.iconPath
            }, null, 8, s_)
          ]))
        ], 8, e_)) : (s(), o("button", {
          key: 1,
          class: "icon-btn social-link",
          title: f.title,
          "aria-label": f.ariaLabel,
          onClick: (p) => c(f.url)
        }, [
          (s(), o("svg", n_, [
            e("path", {
              d: f.iconPath
            }, null, 8, a_)
          ]))
        ], 8, o_))
      ], 64))), 128))
    ]));
  }
}), so = /* @__PURE__ */ ae(l_, [["__scopeId", "data-v-4f846342"]]), i_ = { class: "footer-info" }, r_ = { class: "version" }, d_ = { class: "made-by" }, c_ = /* @__PURE__ */ oe({
  __name: "FooterInfo",
  setup(t) {
    return (c, n) => (s(), o("div", i_, [
      e("span", r_, a(Ee(Xb)), 1),
      e("span", d_, [
        n[0] || (n[0] = g(" made with ", -1)),
        n[1] || (n[1] = e("svg", {
          class: "heart-icon",
          width: "10",
          height: "10",
          viewBox: "0 0 16 16",
          fill: "currentColor"
        }, [
          e("path", { d: "M8 14s-5.5-3.5-5.5-7A3.5 3.5 0 0 1 6 3.5c1.1 0 2 .5 2 .5s.9-.5 2-.5a3.5 3.5 0 0 1 3.5 3.5c0 3.5-5.5 7-5.5 7z" })
        ], -1)),
        g(" by " + a(Ee(Qb)), 1)
      ])
    ]));
  }
}), oo = /* @__PURE__ */ ae(c_, [["__scopeId", "data-v-8bc3db0a"]]), u_ = /* @__PURE__ */ oe({
  __name: "WorkspaceSettingsModal",
  props: {
    workspacePath: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = h(null);
    async function i() {
      var p;
      await ((p = n.value) == null ? void 0 : p.saveSettings());
    }
    function f() {
      console.log("[ComfyGit] Settings saved from modal");
    }
    return (p, u) => (s(), M(ot, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: u[1] || (u[1] = (m) => p.$emit("close"))
    }, {
      body: l(() => [
        w(Js, {
          ref_key: "contentRef",
          ref: n,
          "workspace-path": t.workspacePath,
          onSaved: f
        }, null, 8, ["workspace-path"])
      ]),
      footer: l(() => {
        var m;
        return [
          w(ge, {
            variant: "primary",
            disabled: !((m = n.value) != null && m.hasChanges),
            onClick: i
          }, {
            default: l(() => [...u[2] || (u[2] = [
              g(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          w(ge, {
            variant: "secondary",
            onClick: u[0] || (u[0] = (d) => p.$emit("close"))
          }, {
            default: l(() => [...u[3] || (u[3] = [
              g(" Close ", -1)
            ])]),
            _: 1
          })
        ];
      }),
      _: 1
    }));
  }
}), m_ = /* @__PURE__ */ ae(u_, [["__scopeId", "data-v-fac00ae7"]]), v_ = { class: "header-actions" }, f_ = {
  key: 0,
  class: "wizard-step"
}, p_ = { class: "form-field" }, g_ = ["placeholder"], h_ = {
  key: 0,
  class: "form-error"
}, y_ = { class: "form-field form-field--checkbox" }, w_ = { class: "form-checkbox" }, k_ = {
  key: 0,
  class: "form-field"
}, b_ = ["placeholder"], __ = {
  key: 0,
  class: "form-info"
}, $_ = {
  key: 1,
  class: "form-suggestion"
}, C_ = {
  key: 2,
  class: "form-error"
}, x_ = {
  key: 3,
  class: "form-info"
}, S_ = {
  key: 1,
  class: "wizard-step"
}, I_ = {
  key: 0,
  class: "progress-check-loading"
}, E_ = {
  key: 0,
  class: "cli-warning"
}, P_ = { class: "cli-warning-header" }, M_ = {
  key: 1,
  class: "env-landing"
}, R_ = { class: "env-list" }, T_ = ["value"], D_ = { class: "env-name" }, L_ = {
  key: 2,
  class: "env-create"
}, z_ = { class: "form-field" }, U_ = { class: "form-field" }, N_ = ["value"], O_ = { class: "form-field" }, A_ = ["disabled"], B_ = ["value"], F_ = { class: "form-field" }, V_ = ["value"], W_ = { class: "form-field form-field--checkbox" }, G_ = { class: "form-checkbox" }, j_ = {
  key: 0,
  class: "form-error"
}, H_ = {
  key: 1,
  class: "env-creating"
}, K_ = { class: "creating-intro" }, q_ = {
  key: 3,
  class: "env-import"
}, Y_ = { class: "wizard-footer" }, J_ = { class: "wizard-footer-actions" }, Gt = 10, X_ = 600 * 1e3, As = 1800 * 1e3, Q_ = /* @__PURE__ */ oe({
  __name: "FirstTimeSetupWizard",
  props: {
    defaultPath: {},
    detectedModelsDir: {},
    initialStep: {},
    existingEnvironments: {},
    cliInstalled: { type: Boolean },
    setupState: {},
    workspacePath: {}
  },
  emits: ["complete", "close", "switch-environment", "environment-created-no-switch"],
  setup(t, { emit: c }) {
    const n = t, i = c, {
      initializeWorkspace: f,
      getInitializeProgress: p,
      validatePath: u,
      createEnvironment: m,
      getCreateProgress: d,
      getImportProgress: v,
      getComfyUIReleases: y
    } = He(), k = h(n.initialStep || 1), _ = h(null), b = h("landing"), T = h(!1), P = h(!1), $ = h(!1), C = h(!1), B = h(null), x = h(n.initialStep === 2), R = h(n.defaultPath), q = h(!!n.detectedModelsDir), A = h(n.detectedModelsDir || ""), G = h(null), I = h(null), D = h(null), O = h(null), ie = h("my-new-env"), te = h(Qs), J = h("latest"), re = h(Zs), X = h(!0), z = h(null), L = h(null), S = h([{ tag_name: "latest", name: "Latest", published_at: "" }]), de = h(!1), Z = h(!1), be = h(!1), xe = h({ progress: 0, message: "" }), Ie = h({ progress: 0, message: "" }), Oe = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], me = h(0), he = h(null), we = h(0), Q = h(null), le = U(() => {
      var E, F;
      const ve = (E = R.value) == null ? void 0 : E.trim(), K = !G.value, Y = !q.value || !I.value && ((F = A.value) == null ? void 0 : F.trim());
      return ve && K && Y;
    }), ke = U(() => {
      var ve;
      return (ve = ie.value) == null ? void 0 : ve.trim();
    }), Ue = U(() => !!(k.value === 2 || L.value || n.setupState === "empty_workspace" || n.setupState === "unmanaged")), nt = U(() => L.value || n.workspacePath || null);
    async function Je() {
      var ve;
      if (G.value = null, !!((ve = R.value) != null && ve.trim()))
        try {
          const K = await u({ path: R.value, type: "workspace" });
          K.valid || (G.value = K.error || "Invalid path");
        } catch (K) {
          G.value = K instanceof Error ? K.message : "Validation failed";
        }
    }
    async function Pe() {
      var ve;
      if (I.value = null, D.value = null, O.value = null, !!((ve = A.value) != null && ve.trim()))
        try {
          const K = await u({ path: A.value, type: "models" });
          if (K.valid)
            O.value = K.model_count ?? null;
          else if (I.value = K.error || "Invalid path", K.suggestion) {
            D.value = K.suggestion, A.value = K.suggestion, I.value = null;
            const Y = await u({ path: K.suggestion, type: "models" });
            Y.valid && (O.value = Y.model_count ?? null);
          }
        } catch (K) {
          I.value = K instanceof Error ? K.message : "Validation failed";
        }
    }
    async function at() {
      var ve, K, Y, E, F;
      if (G.value = null, I.value = null, await Je(), (ve = G.value) != null && ve.includes("already exists")) {
        G.value = null, L.value = ((K = R.value) == null ? void 0 : K.trim()) || n.defaultPath, k.value = 2, Ke();
        return;
      }
      if (!G.value && !(q.value && ((Y = A.value) != null && Y.trim()) && (await Pe(), I.value))) {
        Z.value = !0;
        try {
          await f({
            workspace_path: ((E = R.value) == null ? void 0 : E.trim()) || n.defaultPath,
            models_directory: q.value && ((F = A.value) == null ? void 0 : F.trim()) || null
          }), me.value = 0, he.value = Date.now();
          const ee = setInterval(async () => {
            var _e;
            if (he.value && Date.now() - he.value > X_) {
              clearInterval(ee), Z.value = !1, G.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const Ge = await p();
              if (me.value = 0, Ge.state === "idle" && Z.value) {
                clearInterval(ee), Z.value = !1, G.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              xe.value = { progress: Ge.progress, message: Ge.message }, Ge.state === "complete" ? (clearInterval(ee), Z.value = !1, L.value = ((_e = R.value) == null ? void 0 : _e.trim()) || n.defaultPath, k.value = 2, Ke()) : Ge.state === "error" && (clearInterval(ee), Z.value = !1, G.value = Ge.error || "Workspace creation failed");
            } catch (Ge) {
              me.value++, console.warn(`Polling failure ${me.value}/${Gt}:`, Ge), me.value >= Gt && (clearInterval(ee), Z.value = !1, G.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (ee) {
          Z.value = !1, G.value = ee instanceof Error ? ee.message : "Failed to create workspace";
        }
      }
    }
    async function Ze() {
      be.value = !0, z.value = null;
      try {
        const ve = {
          name: ie.value.trim() || "my-new-env",
          python_version: te.value,
          comfyui_version: J.value,
          torch_backend: re.value,
          switch_after: X.value,
          workspace_path: L.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await m(ve)).status === "started") {
          we.value = 0, Q.value = Date.now();
          const Y = setInterval(async () => {
            if (Q.value && Date.now() - Q.value > As) {
              clearInterval(Y), be.value = !1, z.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const E = await d();
              if (we.value = 0, E.state === "idle" && be.value) {
                clearInterval(Y), be.value = !1, z.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (Ie.value = {
                progress: E.progress ?? 0,
                message: E.message,
                phase: E.phase
              }, E.state === "complete") {
                clearInterval(Y), be.value = !1;
                const F = E.environment_name || ve.name;
                X.value ? i("complete", F, L.value) : (b.value = "landing", i("environment-created-no-switch", F));
              } else E.state === "error" && (clearInterval(Y), be.value = !1, z.value = E.error || "Environment creation failed");
            } catch (E) {
              we.value++, console.warn(`Polling failure ${we.value}/${Gt}:`, E), we.value >= Gt && (clearInterval(Y), be.value = !1, z.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (ve) {
        be.value = !1, z.value = ve instanceof Error ? ve.message : "Unknown error";
      }
    }
    async function Ke() {
      de.value = !0;
      try {
        S.value = await y();
      } catch (ve) {
        console.error("Failed to load ComfyUI releases:", ve);
      } finally {
        de.value = !1;
      }
    }
    function dt() {
      _.value && i("switch-environment", _.value, L.value);
    }
    function $e() {
      b.value === "create" || b.value === "import" ? b.value = "landing" : k.value === 2 && n.setupState === "no_workspace" && (k.value = 1);
    }
    function Ae(ve, K) {
      P.value = !1, K ? i("complete", ve, L.value) : (i("environment-created-no-switch", ve), b.value = "landing");
    }
    function lt() {
    }
    We(async () => {
      if (n.detectedModelsDir && (A.value = n.detectedModelsDir), n.workspacePath && (L.value = n.workspacePath), k.value === 2) {
        Ke();
        const ve = setTimeout(() => {
          x.value = !1;
        }, 3e3);
        await it(), clearTimeout(ve), x.value = !1;
      }
    });
    async function it() {
      try {
        const ve = await d();
        if (console.log("[ComfyGit] Create progress check:", ve.state, ve), ve.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", ve.environment_name), b.value = "create", be.value = !0, ie.value = ve.environment_name || "my-new-env", Ie.value = {
            progress: ve.progress ?? 0,
            message: ve.message,
            phase: ve.phase
          }, Le();
          return;
        }
      } catch (ve) {
        console.log("[ComfyGit] Create progress check failed:", ve);
      }
      try {
        const ve = await v();
        console.log("[ComfyGit] Import progress check:", ve.state, ve), ve.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", ve.environment_name), B.value = {
          message: ve.message || "Importing...",
          phase: ve.phase || "",
          progress: ve.progress ?? 0,
          environmentName: ve.environment_name || ""
        }, C.value = !0, b.value = "import", P.value = !0);
      } catch (ve) {
        console.log("[ComfyGit] Import progress check failed:", ve);
      }
    }
    async function Le() {
      we.value = 0, Q.value = Date.now();
      let ve = null;
      const K = async () => {
        if (Q.value && Date.now() - Q.value > As)
          return ve && clearInterval(ve), be.value = !1, z.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const E = await d();
          if (we.value = 0, E.state === "idle" && be.value)
            return ve && clearInterval(ve), be.value = !1, z.value = "Environment creation was interrupted. Please try again.", !1;
          if (Ie.value = {
            progress: E.progress ?? 0,
            message: E.message,
            phase: E.phase
          }, E.state === "complete") {
            ve && clearInterval(ve), be.value = !1;
            const F = E.environment_name || ie.value;
            return i("complete", F, L.value), !1;
          } else if (E.state === "error")
            return ve && clearInterval(ve), be.value = !1, z.value = E.error || "Environment creation failed", !1;
          return !0;
        } catch (E) {
          return we.value++, console.warn(`Polling failure ${we.value}/${Gt}:`, E), we.value >= Gt ? (ve && clearInterval(ve), be.value = !1, z.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await K() && (ve = setInterval(async () => {
        !await K() && ve && clearInterval(ve);
      }, 2e3));
    }
    return (ve, K) => (s(), o(W, null, [
      w(ot, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: K[15] || (K[15] = (Y) => ve.$emit("close"))
      }, {
        header: l(() => [
          K[20] || (K[20] = e("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          e("div", v_, [
            w(so),
            K[19] || (K[19] = e("span", { class: "header-divider" }, null, -1)),
            Ue.value ? (s(), o("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: K[0] || (K[0] = (Y) => T.value = !0)
            }, [...K[17] || (K[17] = [
              e("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2"
              }, [
                e("circle", {
                  cx: "12",
                  cy: "12",
                  r: "3"
                }),
                e("path", { d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" })
              ], -1)
            ])])) : r("", !0),
            e("button", {
              class: "icon-btn",
              onClick: K[1] || (K[1] = (Y) => ve.$emit("close")),
              title: "Close"
            }, [...K[18] || (K[18] = [
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
        body: l(() => {
          var Y;
          return [
            k.value === 1 ? (s(), o("div", f_, [
              K[24] || (K[24] = e("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              e("div", p_, [
                K[21] || (K[21] = e("label", { class: "form-label" }, "Workspace Path", -1)),
                De(e("input", {
                  "onUpdate:modelValue": K[2] || (K[2] = (E) => R.value = E),
                  type: "text",
                  class: "form-input",
                  placeholder: t.defaultPath
                }, null, 8, g_), [
                  [Dt, R.value]
                ]),
                G.value ? (s(), o("p", h_, a(G.value), 1)) : r("", !0)
              ]),
              e("div", y_, [
                e("label", w_, [
                  De(e("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": K[3] || (K[3] = (E) => q.value = E)
                  }, null, 512), [
                    [is, q.value]
                  ]),
                  K[22] || (K[22] = e("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              q.value ? (s(), o("div", k_, [
                K[23] || (K[23] = e("label", { class: "form-label" }, "Models Directory", -1)),
                De(e("input", {
                  "onUpdate:modelValue": K[4] || (K[4] = (E) => A.value = E),
                  type: "text",
                  class: "form-input",
                  placeholder: t.detectedModelsDir || "/path/to/models"
                }, null, 8, b_), [
                  [Dt, A.value]
                ]),
                t.detectedModelsDir && !A.value ? (s(), o("p", __, " Detected: " + a(t.detectedModelsDir), 1)) : r("", !0),
                D.value ? (s(), o("p", $_, " Did you mean: " + a(D.value), 1)) : r("", !0),
                I.value ? (s(), o("p", C_, a(I.value), 1)) : r("", !0),
                O.value !== null && !I.value ? (s(), o("p", x_, " Found " + a(O.value) + " model files ", 1)) : r("", !0)
              ])) : r("", !0),
              Z.value ? (s(), M(cs, {
                key: 1,
                progress: xe.value.progress,
                message: xe.value.message
              }, null, 8, ["progress", "message"])) : r("", !0)
            ])) : r("", !0),
            k.value === 2 ? (s(), o("div", S_, [
              x.value ? (s(), o("div", I_, [...K[25] || (K[25] = [
                e("div", { class: "loading-spinner" }, null, -1),
                e("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (s(), o(W, { key: 1 }, [
                !n.cliInstalled && !$.value ? (s(), o("div", E_, [
                  e("div", P_, [
                    K[27] || (K[27] = e("span", { class: "cli-warning-icon" }, "!", -1)),
                    K[28] || (K[28] = e("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    e("button", {
                      class: "cli-warning-close",
                      onClick: K[5] || (K[5] = (E) => $.value = !0),
                      title: "Dismiss"
                    }, [...K[26] || (K[26] = [
                      e("svg", {
                        width: "14",
                        height: "14",
                        viewBox: "0 0 16 16",
                        fill: "currentColor"
                      }, [
                        e("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
                      ], -1)
                    ])])
                  ]),
                  K[29] || (K[29] = e("p", { class: "cli-warning-text" }, " To start managed environments from the command line, you'll need the ComfyGit CLI. This is required to restart ComfyUI in managed mode after switching environments. ", -1)),
                  K[30] || (K[30] = e("div", { class: "cli-warning-commands" }, [
                    e("code", null, "pipx install comfygit"),
                    e("span", { class: "cli-warning-or" }, "or"),
                    e("code", null, "uv tool install comfygit")
                  ], -1))
                ])) : r("", !0),
                b.value === "landing" ? (s(), o("div", M_, [
                  K[34] || (K[34] = e("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  e("button", {
                    class: "landing-option",
                    onClick: K[6] || (K[6] = (E) => b.value = "create")
                  }, [...K[31] || (K[31] = [
                    e("span", { class: "option-icon" }, "➕", -1),
                    e("div", { class: "option-content" }, [
                      e("span", { class: "option-title" }, "Create New Environment"),
                      e("span", { class: "option-description" }, "Start fresh with a new ComfyUI installation")
                    ], -1),
                    e("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  e("button", {
                    class: "landing-option",
                    onClick: K[7] || (K[7] = (E) => {
                      C.value = !1, b.value = "import";
                    })
                  }, [...K[32] || (K[32] = [
                    e("span", { class: "option-icon" }, "📦", -1),
                    e("div", { class: "option-content" }, [
                      e("span", { class: "option-title" }, "Import Environment"),
                      e("span", { class: "option-description" }, "From exported bundle (.tar.gz) or git repository")
                    ], -1),
                    e("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  (Y = n.existingEnvironments) != null && Y.length ? (s(), o(W, { key: 0 }, [
                    K[33] || (K[33] = e("div", { class: "landing-divider" }, [
                      e("span", null, "or switch to existing")
                    ], -1)),
                    e("div", R_, [
                      (s(!0), o(W, null, ne(n.existingEnvironments, (E) => (s(), o("label", {
                        key: E,
                        class: fe(["env-option", { selected: _.value === E }])
                      }, [
                        De(e("input", {
                          type: "radio",
                          name: "env-select",
                          value: E,
                          "onUpdate:modelValue": K[8] || (K[8] = (F) => _.value = F)
                        }, null, 8, T_), [
                          [Tt, _.value]
                        ]),
                        e("span", D_, a(E), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : r("", !0)
                ])) : b.value === "create" ? (s(), o("div", L_, [
                  be.value ? (s(), o("div", H_, [
                    e("p", K_, [
                      K[41] || (K[41] = g(" Creating environment ", -1)),
                      e("strong", null, a(ie.value), 1),
                      K[42] || (K[42] = g("... ", -1))
                    ]),
                    w(cs, {
                      progress: Ie.value.progress,
                      message: Ie.value.message,
                      "current-phase": Ie.value.phase,
                      "show-steps": !0,
                      steps: Oe
                    }, null, 8, ["progress", "message", "current-phase"]),
                    K[43] || (K[43] = e("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (s(), o(W, { key: 0 }, [
                    K[40] || (K[40] = e("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    e("div", z_, [
                      K[35] || (K[35] = e("label", { class: "form-label" }, "Environment Name", -1)),
                      De(e("input", {
                        "onUpdate:modelValue": K[9] || (K[9] = (E) => ie.value = E),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [Dt, ie.value]
                      ])
                    ]),
                    e("div", U_, [
                      K[36] || (K[36] = e("label", { class: "form-label" }, "Python Version", -1)),
                      De(e("select", {
                        "onUpdate:modelValue": K[10] || (K[10] = (E) => te.value = E),
                        class: "form-select"
                      }, [
                        (s(!0), o(W, null, ne(Ee(Xs), (E) => (s(), o("option", {
                          key: E,
                          value: E
                        }, a(E), 9, N_))), 128))
                      ], 512), [
                        [It, te.value]
                      ])
                    ]),
                    e("div", O_, [
                      K[37] || (K[37] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      De(e("select", {
                        "onUpdate:modelValue": K[11] || (K[11] = (E) => J.value = E),
                        class: "form-select",
                        disabled: de.value
                      }, [
                        (s(!0), o(W, null, ne(S.value, (E) => (s(), o("option", {
                          key: E.tag_name,
                          value: E.tag_name
                        }, a(E.name), 9, B_))), 128))
                      ], 8, A_), [
                        [It, J.value]
                      ])
                    ]),
                    e("div", F_, [
                      K[38] || (K[38] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      De(e("select", {
                        "onUpdate:modelValue": K[12] || (K[12] = (E) => re.value = E),
                        class: "form-select"
                      }, [
                        (s(!0), o(W, null, ne(Ee(xs), (E) => (s(), o("option", {
                          key: E,
                          value: E
                        }, a(E) + a(E === "auto" ? " (detect GPU)" : ""), 9, V_))), 128))
                      ], 512), [
                        [It, re.value]
                      ])
                    ]),
                    e("div", W_, [
                      e("label", G_, [
                        De(e("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": K[13] || (K[13] = (E) => X.value = E)
                        }, null, 512), [
                          [is, X.value]
                        ]),
                        K[39] || (K[39] = e("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    z.value ? (s(), o("div", j_, a(z.value), 1)) : r("", !0)
                  ], 64))
                ])) : b.value === "import" ? (s(), o("div", q_, [
                  w(eo, {
                    "workspace-path": L.value,
                    "resume-import": C.value,
                    "initial-progress": B.value ?? void 0,
                    onImportComplete: Ae,
                    onImportStarted: K[14] || (K[14] = (E) => P.value = !0),
                    onSourceCleared: lt
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : r("", !0)
              ], 64))
            ])) : r("", !0)
          ];
        }),
        footer: l(() => [
          e("div", Y_, [
            w(oo),
            e("div", J_, [
              k.value === 1 ? (s(), M(ge, {
                key: 0,
                variant: "primary",
                disabled: !le.value || Z.value,
                onClick: at
              }, {
                default: l(() => [
                  g(a(Z.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : k.value === 2 ? (s(), o(W, { key: 1 }, [
                !be.value && !P.value && (b.value !== "landing" || n.setupState === "no_workspace" && !L.value) ? (s(), M(ge, {
                  key: 0,
                  variant: "secondary",
                  onClick: $e
                }, {
                  default: l(() => [...K[44] || (K[44] = [
                    g(" Back ", -1)
                  ])]),
                  _: 1
                })) : r("", !0),
                b.value === "create" ? (s(), M(ge, {
                  key: 1,
                  variant: "primary",
                  disabled: !ke.value || be.value,
                  onClick: Ze
                }, {
                  default: l(() => [
                    g(a(be.value ? "Creating..." : X.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : r("", !0),
                b.value === "landing" && _.value ? (s(), M(ge, {
                  key: 2,
                  variant: "primary",
                  onClick: dt
                }, {
                  default: l(() => [
                    g(" Switch to " + a(_.value), 1)
                  ]),
                  _: 1
                })) : r("", !0)
              ], 64)) : r("", !0)
            ])
          ])
        ]),
        _: 1
      }),
      T.value ? (s(), M(m_, {
        key: 0,
        "workspace-path": nt.value,
        onClose: K[16] || (K[16] = (Y) => T.value = !1)
      }, null, 8, ["workspace-path"])) : r("", !0)
    ], 64));
  }
}), Z_ = /* @__PURE__ */ ae(Q_, [["__scopeId", "data-v-9a9aadc0"]]), e2 = { class: "comfygit-panel" }, t2 = { class: "panel-header" }, s2 = { class: "header-left" }, o2 = {
  key: 0,
  class: "header-info"
}, n2 = { class: "header-actions" }, a2 = { class: "env-switcher" }, l2 = {
  key: 0,
  class: "header-info"
}, i2 = { class: "branch-name" }, r2 = { class: "panel-main" }, d2 = { class: "sidebar" }, c2 = { class: "sidebar-content" }, u2 = { class: "sidebar-section" }, m2 = { class: "sidebar-section" }, v2 = { class: "sidebar-section" }, f2 = { class: "sidebar-footer" }, p2 = { class: "content-area" }, g2 = {
  key: 0,
  class: "error-message"
}, h2 = {
  key: 1,
  class: "loading"
}, y2 = { class: "dialog-content env-selector-dialog" }, w2 = { class: "dialog-header" }, k2 = { class: "dialog-body" }, b2 = { class: "env-list" }, _2 = { class: "env-info" }, $2 = { class: "env-name-row" }, C2 = { class: "env-indicator" }, x2 = { class: "env-name" }, S2 = {
  key: 0,
  class: "env-branch"
}, I2 = {
  key: 1,
  class: "current-label"
}, E2 = { class: "env-stats" }, P2 = ["onClick"], M2 = { class: "toast-container" }, R2 = { class: "toast-message" }, T2 = /* @__PURE__ */ oe({
  __name: "ComfyGitPanel",
  props: {
    initialView: {}
  },
  emits: ["close", "statusUpdate"],
  setup(t, { emit: c }) {
    const n = t, i = c, {
      getStatus: f,
      getHistory: p,
      getBranches: u,
      checkout: m,
      createBranch: d,
      switchBranch: v,
      deleteBranch: y,
      getEnvironments: k,
      switchEnvironment: _,
      getSwitchProgress: b,
      deleteEnvironment: T,
      syncEnvironmentManually: P,
      repairWorkflowModels: $,
      getSetupStatus: C
    } = He(), B = Gs(), x = h(null), R = h([]), q = h([]), A = h([]), G = U(() => A.value.find((H) => H.is_current)), I = h(null), D = h(!1), O = h(1), ie = U(() => {
      var H;
      return ((H = I.value) == null ? void 0 : H.state) || "managed";
    }), te = h(!1), J = h(null), re = h(null), X = h(!1), z = h(null), L = h(null), S = h(null), de = h(!1), Z = h(!1), be = h(""), xe = h(null), Ie = h({ state: "idle", progress: 0, message: "" });
    let Oe = null, me = null;
    const he = {
      "debug-env": { view: "debug-env", section: "this-env" },
      "debug-workspace": { view: "debug-workspace", section: "all-envs" },
      status: { view: "status", section: "this-env" }
    }, we = n.initialView ? he[n.initialView] : null, Q = h((we == null ? void 0 : we.view) ?? "status"), le = h((we == null ? void 0 : we.section) ?? "this-env");
    function ke(H, N) {
      Q.value = H, le.value = N;
    }
    function Ue(H) {
      const ye = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[H];
      ye && ke(ye.view, ye.section);
    }
    function nt() {
      ke("branches", "this-env");
    }
    function Je() {
      i("close"), setTimeout(() => {
        var N;
        const H = document.querySelectorAll("button.comfyui-button");
        for (const ye of H)
          if (((N = ye.textContent) == null ? void 0 : N.trim()) === "Manager") {
            ye.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const Pe = h(null), at = h(!1), Ze = h(!1), Ke = h([]);
    let dt = 0;
    function $e(H, N = "info", ye = 3e3) {
      const Re = ++dt;
      return Ke.value.push({ id: Re, message: H, type: N }), ye > 0 && setTimeout(() => {
        Ke.value = Ke.value.filter((je) => je.id !== Re);
      }, ye), Re;
    }
    function Ae(H) {
      Ke.value = Ke.value.filter((N) => N.id !== H);
    }
    function lt(H, N) {
      $e(H, N);
    }
    const it = U(() => {
      if (!x.value) return "neutral";
      const H = x.value.workflows, N = H.new.length > 0 || H.modified.length > 0 || H.deleted.length > 0 || x.value.has_changes;
      return x.value.comparison.is_synced ? N ? "warning" : "success" : "error";
    });
    U(() => x.value ? it.value === "success" ? "All synced" : it.value === "warning" ? "Uncommitted changes" : it.value === "error" ? "Not synced" : "" : "");
    async function Le() {
      te.value = !0, J.value = null;
      try {
        const [H, N, ye, Re] = await Promise.all([
          f(!0),
          p(),
          u(),
          k()
        ]);
        x.value = H, R.value = N.commits, q.value = ye.branches, A.value = Re, i("statusUpdate", H), z.value && await z.value.loadWorkflows(!0);
      } catch (H) {
        J.value = H instanceof Error ? H.message : "Failed to load status", x.value = null, R.value = [], q.value = [];
      } finally {
        te.value = !1;
      }
    }
    function ve(H) {
      re.value = H;
    }
    async function K(H) {
      var ye;
      re.value = null;
      const N = x.value && (x.value.workflows.new.length > 0 || x.value.workflows.modified.length > 0 || x.value.workflows.deleted.length > 0 || x.value.has_changes);
      Pe.value = {
        title: N ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: N ? "You have uncommitted changes that will be lost." : `Checkout commit ${H.short_hash || ((ye = H.hash) == null ? void 0 : ye.slice(0, 7))}?`,
        details: N ? zt() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: N ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: N,
        onConfirm: async () => {
          var Qe;
          Pe.value = null, _e();
          const Re = $e(`Checking out ${H.short_hash || ((Qe = H.hash) == null ? void 0 : Qe.slice(0, 7))}...`, "info", 0), je = await m(H.hash, N);
          Ae(Re), je.status === "success" ? $e("Restarting ComfyUI...", "success") : $e(je.message || "Checkout failed", "error");
        }
      };
    }
    async function Y(H) {
      const N = x.value && (x.value.workflows.new.length > 0 || x.value.workflows.modified.length > 0 || x.value.workflows.deleted.length > 0 || x.value.has_changes);
      Pe.value = {
        title: N ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: N ? "You have uncommitted changes." : `Switch to branch "${H}"?`,
        details: N ? zt() : void 0,
        warning: N ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: N ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          Pe.value = null, _e();
          const ye = $e(`Switching to ${H}...`, "info", 0), Re = await v(H, N);
          Ae(ye), Re.status === "success" ? $e("Restarting ComfyUI...", "success") : $e(Re.message || "Branch switch failed", "error");
        }
      };
    }
    async function E(H) {
      const N = $e(`Creating branch ${H}...`, "info", 0), ye = await d(H);
      Ae(N), ye.status === "success" ? ($e(`Branch "${H}" created`, "success"), await Le()) : $e(ye.message || "Failed to create branch", "error");
    }
    async function F(H, N = !1) {
      const ye = async (Re) => {
        var Qe;
        const je = $e(`Deleting branch ${H}...`, "info", 0);
        try {
          const St = await y(H, Re);
          Ae(je), St.status === "success" ? ($e(`Branch "${H}" deleted`, "success"), await Le()) : (Qe = St.message) != null && Qe.includes("not fully merged") ? Pe.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${H}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              Pe.value = null, await ye(!0);
            }
          } : $e(St.message || "Failed to delete branch", "error");
        } catch (St) {
          Ae(je);
          const qt = St instanceof Error ? St.message : "Failed to delete branch";
          qt.includes("not fully merged") ? Pe.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${H}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              Pe.value = null, await ye(!0);
            }
          } : $e(qt, "error");
        }
      };
      Pe.value = {
        title: "Delete Branch",
        message: `Delete branch "${H}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          Pe.value = null, await ye(N);
        }
      };
    }
    async function ee(H) {
      re.value = null;
      const N = prompt("Enter branch name:");
      if (N) {
        const ye = $e(`Creating branch ${N}...`, "info", 0), Re = await d(N, H.hash);
        Ae(ye), Re.status === "success" ? ($e(`Branch "${N}" created from ${H.short_hash}`, "success"), await Le()) : $e(Re.message || "Failed to create branch", "error");
      }
    }
    function _e() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function Ge() {
      Pe.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var H;
          Pe.value = null, _e(), $e("Restarting environment...", "info");
          try {
            (H = window.app) != null && H.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function ce() {
      Pe.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var H;
          Pe.value = null, $e("Stopping environment...", "info");
          try {
            (H = window.app) != null && H.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function V(H, N) {
      X.value = !1, be.value = H, xe.value = N || null, de.value = !0;
    }
    async function ze() {
      de.value = !1, Z.value = !0, _e(), Ie.value = {
        progress: 10,
        state: qe(10),
        message: ct(10)
      };
      try {
        await _(be.value, xe.value || void 0), xt(), Ot();
      } catch (H) {
        Xe(), Z.value = !1, $e(`Failed to initiate switch: ${H instanceof Error ? H.message : "Unknown error"}`, "error"), Ie.value = { state: "idle", progress: 0, message: "" }, xe.value = null;
      }
    }
    function qe(H) {
      return H >= 100 ? "complete" : H >= 80 ? "validating" : H >= 60 ? "starting" : H >= 30 ? "syncing" : "preparing";
    }
    function ct(H) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[qe(H)] || "";
    }
    function xt() {
      if (me) return;
      let H = 10;
      const N = 60, ye = 5e3, Re = 100, je = (N - H) / (ye / Re);
      me = window.setInterval(() => {
        if (H += je, H >= N && (H = N, Xe()), Ie.value.progress < N) {
          const Qe = Math.floor(H);
          Ie.value = {
            progress: Qe,
            state: qe(Qe),
            message: ct(Qe)
          };
        }
      }, Re);
    }
    function Xe() {
      me && (clearInterval(me), me = null);
    }
    function Ot() {
      Oe || (Oe = window.setInterval(async () => {
        try {
          let H = await B.getStatus();
          if ((!H || H.state === "idle") && (H = await b()), !H)
            return;
          const N = H.progress || 0;
          N >= 60 && Xe();
          const ye = Math.max(N, Ie.value.progress), Re = H.state && H.state !== "idle" && H.state !== "unknown", je = Re ? H.state : qe(ye), Qe = Re && H.message || ct(ye);
          Ie.value = {
            state: je,
            progress: ye,
            message: Qe
          }, H.state === "complete" ? (Xe(), pe(), Z.value = !1, $e(`✓ Switched to ${be.value}`, "success"), await Le(), be.value = "") : H.state === "rolled_back" ? (Xe(), pe(), Z.value = !1, $e("Switch failed, restored previous environment", "warning"), be.value = "") : H.state === "critical_failure" && (Xe(), pe(), Z.value = !1, $e(`Critical error during switch: ${H.message}`, "error"), be.value = "");
        } catch (H) {
          console.error("Failed to poll switch progress:", H);
        }
      }, 1e3));
    }
    function pe() {
      Xe(), Oe && (clearInterval(Oe), Oe = null);
    }
    function ft() {
      var H;
      de.value = !1, be.value = "", (H = I.value) != null && H.state && I.value.state !== "managed" && (O.value = I.value.state === "no_workspace" ? 1 : 2, D.value = !0);
    }
    async function kt(H) {
      at.value = !1, await Le(), $e(H.message, H.success ? "success" : "error");
    }
    async function At() {
      Ze.value = !1;
      const H = $e("Syncing environment...", "info", 0);
      try {
        const N = await P("skip", !0);
        if (Ae(H), N.status === "success") {
          const ye = [];
          N.nodes_installed.length && ye.push(`${N.nodes_installed.length} installed`), N.nodes_removed.length && ye.push(`${N.nodes_removed.length} removed`);
          const Re = ye.length ? `: ${ye.join(", ")}` : "";
          $e(`✓ Environment synced${Re}`, "success"), await Le();
        } else {
          const ye = N.errors.length ? N.errors.join("; ") : N.message;
          $e(`Sync failed: ${ye}`, "error");
        }
      } catch (N) {
        Ae(H), $e(`Sync error: ${N instanceof Error ? N.message : "Unknown error"}`, "error");
      }
    }
    async function Bt(H) {
      var N;
      try {
        const ye = await $(H);
        ye.failed.length === 0 ? $e(`✓ Repaired ${ye.success} workflow${ye.success === 1 ? "" : "s"}`, "success") : $e(`Repaired ${ye.success}, failed: ${ye.failed.length}`, "warning"), await Le();
      } catch (ye) {
        $e(`Repair failed: ${ye instanceof Error ? ye.message : "Unknown error"}`, "error");
      } finally {
        (N = S.value) == null || N.resetRepairingState();
      }
    }
    async function Lt() {
      var N, ye;
      const H = $e("Repairing environment...", "info", 0);
      try {
        const Re = await P("skip", !0);
        if (Ae(H), Re.status === "success") {
          const je = [];
          Re.nodes_installed.length && je.push(`${Re.nodes_installed.length} installed`), Re.nodes_removed.length && je.push(`${Re.nodes_removed.length} removed`);
          const Qe = je.length ? `: ${je.join(", ")}` : "";
          $e(`✓ Environment repaired${Qe}`, "success"), (N = S.value) == null || N.closeDetailModal(), await Le();
        } else {
          const je = Re.errors.length ? Re.errors.join(", ") : Re.message || "Unknown error";
          $e(`Repair failed: ${je}`, "error");
        }
      } catch (Re) {
        Ae(H), $e(`Repair error: ${Re instanceof Error ? Re.message : "Unknown error"}`, "error");
      } finally {
        (ye = S.value) == null || ye.resetRepairingEnvironmentState();
      }
    }
    async function Ft(H, N) {
      $e(`Environment '${H}' created`, "success"), await Le(), L.value && await L.value.loadEnvironments(), N && await V(H);
    }
    async function Vt(H) {
      var N;
      if (((N = G.value) == null ? void 0 : N.name) === H) {
        $e("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      Pe.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${H}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          Pe.value = null;
          try {
            const ye = await T(H);
            ye.status === "success" ? ($e(`Environment "${H}" deleted`, "success"), await Le(), L.value && await L.value.loadEnvironments()) : $e(ye.message || "Failed to delete environment", "error");
          } catch (ye) {
            $e(`Error deleting environment: ${ye instanceof Error ? ye.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function Wt(H, N) {
      D.value = !1;
      try {
        I.value = await C();
      } catch {
      }
      await V(H, N);
    }
    function j() {
      D.value = !1, i("close");
    }
    async function ue(H, N) {
      await V(H, N);
    }
    async function Ce(H) {
      await Le(), await V(H);
    }
    async function Fe(H) {
      I.value = await C(), console.log(`Environment '${H}' created. Available for switching.`);
    }
    function ut() {
      ke("environments", "all-envs"), setTimeout(() => {
        var H;
        (H = L.value) == null || H.openCreateModal();
      }, 100);
    }
    function zt() {
      if (!x.value) return [];
      const H = [], N = x.value.workflows;
      return N.new.length && H.push(`${N.new.length} new workflow(s)`), N.modified.length && H.push(`${N.modified.length} modified workflow(s)`), N.deleted.length && H.push(`${N.deleted.length} deleted workflow(s)`), H;
    }
    return We(async () => {
      try {
        if (I.value = await C(), I.value.state === "no_workspace") {
          D.value = !0, O.value = 1;
          return;
        }
        if (I.value.state === "empty_workspace") {
          D.value = !0, O.value = 2;
          return;
        }
        if (I.value.state === "unmanaged") {
          D.value = !0, O.value = 2;
          return;
        }
      } catch (H) {
        console.warn("Setup status check failed, proceeding normally:", H);
      }
      await Le();
    }), (H, N) => {
      var ye, Re, je, Qe, St, qt, Ms, Rs, Ts, Ds, Ls, zs;
      return s(), o("div", e2, [
        e("div", t2, [
          e("div", s2, [
            N[31] || (N[31] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            x.value ? (s(), o("div", o2)) : r("", !0)
          ]),
          e("div", n2, [
            w(so),
            N[34] || (N[34] = e("span", { class: "header-divider" }, null, -1)),
            e("button", {
              class: fe(["icon-btn", { spinning: te.value }]),
              onClick: Le,
              title: "Refresh"
            }, [...N[32] || (N[32] = [
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
              onClick: N[0] || (N[0] = (Se) => i("close")),
              title: "Close"
            }, [...N[33] || (N[33] = [
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
        e("div", a2, [
          e("div", { class: "env-switcher-header" }, [
            N[35] || (N[35] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            e("div", { class: "env-control-buttons" }, [
              e("button", {
                class: "env-control-btn",
                title: "Restart environment",
                onClick: Ge
              }, " Restart "),
              e("button", {
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: ce
              }, " Stop ")
            ])
          ]),
          e("button", {
            class: "env-switcher-btn",
            onClick: N[1] || (N[1] = (Se) => ke("environments", "all-envs"))
          }, [
            x.value ? (s(), o("div", l2, [
              e("span", null, a(((ye = G.value) == null ? void 0 : ye.name) || ((Re = x.value) == null ? void 0 : Re.environment) || "Loading..."), 1),
              e("span", i2, "(" + a(x.value.branch || "detached") + ")", 1)
            ])) : r("", !0),
            N[36] || (N[36] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", r2, [
          e("div", d2, [
            e("div", c2, [
              e("div", u2, [
                N[37] || (N[37] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                e("button", {
                  class: fe(["sidebar-item", { active: Q.value === "status" && le.value === "this-env" }]),
                  onClick: N[2] || (N[2] = (Se) => ke("status", "this-env"))
                }, " STATUS ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: Q.value === "workflows" }]),
                  onClick: N[3] || (N[3] = (Se) => ke("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: Q.value === "models-env" }]),
                  onClick: N[4] || (N[4] = (Se) => ke("models-env", "this-env"))
                }, " MODELS ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: Q.value === "branches" }]),
                  onClick: N[5] || (N[5] = (Se) => ke("branches", "this-env"))
                }, " BRANCHES ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: Q.value === "history" }]),
                  onClick: N[6] || (N[6] = (Se) => ke("history", "this-env"))
                }, " HISTORY ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: Q.value === "nodes" }]),
                  onClick: N[7] || (N[7] = (Se) => ke("nodes", "this-env"))
                }, " NODES ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: Q.value === "debug-env" }]),
                  onClick: N[8] || (N[8] = (Se) => ke("debug-env", "this-env"))
                }, " DEBUG ", 2)
              ]),
              N[40] || (N[40] = e("div", { class: "sidebar-divider" }, null, -1)),
              e("div", m2, [
                N[38] || (N[38] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
                e("button", {
                  class: fe(["sidebar-item", { active: Q.value === "environments" }]),
                  onClick: N[9] || (N[9] = (Se) => ke("environments", "all-envs"))
                }, " ENVIRONMENTS ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: Q.value === "model-index" }]),
                  onClick: N[10] || (N[10] = (Se) => ke("model-index", "all-envs"))
                }, " MODEL INDEX ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: Q.value === "settings" }]),
                  onClick: N[11] || (N[11] = (Se) => ke("settings", "all-envs"))
                }, " SETTINGS ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: Q.value === "debug-workspace" }]),
                  onClick: N[12] || (N[12] = (Se) => ke("debug-workspace", "all-envs"))
                }, " DEBUG ", 2)
              ]),
              N[41] || (N[41] = e("div", { class: "sidebar-divider" }, null, -1)),
              e("div", v2, [
                N[39] || (N[39] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
                e("button", {
                  class: fe(["sidebar-item", { active: Q.value === "deploy" }]),
                  onClick: N[13] || (N[13] = (Se) => ke("deploy", "sharing"))
                }, " DEPLOY ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: Q.value === "export" }]),
                  onClick: N[14] || (N[14] = (Se) => ke("export", "sharing"))
                }, " EXPORT ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: Q.value === "import" }]),
                  onClick: N[15] || (N[15] = (Se) => ke("import", "sharing"))
                }, " IMPORT ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: Q.value === "remotes" }]),
                  onClick: N[16] || (N[16] = (Se) => ke("remotes", "sharing"))
                }, " REMOTES ", 2)
              ])
            ]),
            e("div", f2, [
              w(oo)
            ])
          ]),
          e("div", p2, [
            J.value ? (s(), o("div", g2, a(J.value), 1)) : !x.value && Q.value === "status" ? (s(), o("div", h2, " Loading status... ")) : (s(), o(W, { key: 2 }, [
              Q.value === "status" ? (s(), M(ja, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: S,
                status: x.value,
                "setup-state": ie.value,
                onSwitchBranch: nt,
                onCommitChanges: N[17] || (N[17] = (Se) => at.value = !0),
                onSyncEnvironment: N[18] || (N[18] = (Se) => Ze.value = !0),
                onViewWorkflows: N[19] || (N[19] = (Se) => ke("workflows", "this-env")),
                onViewHistory: N[20] || (N[20] = (Se) => ke("history", "this-env")),
                onViewDebug: N[21] || (N[21] = (Se) => ke("debug-env", "this-env")),
                onViewNodes: N[22] || (N[22] = (Se) => ke("nodes", "this-env")),
                onRepairMissingModels: Bt,
                onRepairEnvironment: Lt,
                onStartSetup: N[23] || (N[23] = (Se) => D.value = !0),
                onViewEnvironments: N[24] || (N[24] = (Se) => ke("environments", "all-envs")),
                onCreateEnvironment: ut
              }, null, 8, ["status", "setup-state"])) : Q.value === "workflows" ? (s(), M(vm, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: z,
                onRefresh: Le
              }, null, 512)) : Q.value === "models-env" ? (s(), M(Ym, {
                key: 2,
                onNavigate: Ue
              })) : Q.value === "branches" ? (s(), M(ll, {
                key: 3,
                branches: q.value,
                current: ((je = x.value) == null ? void 0 : je.branch) || null,
                onSwitch: Y,
                onCreate: E,
                onDelete: F
              }, null, 8, ["branches", "current"])) : Q.value === "history" ? (s(), M(hl, {
                key: 4,
                commits: R.value,
                onSelect: ve,
                onCheckout: K
              }, null, 8, ["commits"])) : Q.value === "nodes" ? (s(), M(jv, {
                key: 5,
                "version-mismatches": ((St = (Qe = x.value) == null ? void 0 : Qe.comparison) == null ? void 0 : St.version_mismatches) || [],
                onOpenNodeManager: Je,
                onRepairEnvironment: Lt,
                onToast: lt
              }, null, 8, ["version-mismatches"])) : Q.value === "debug-env" ? (s(), M(Zg, { key: 6 })) : Q.value === "environments" ? (s(), M(s1, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: L,
                onSwitch: V,
                onCreated: Ft,
                onDelete: Vt
              }, null, 512)) : Q.value === "model-index" ? (s(), M(pv, {
                key: 8,
                onRefresh: Le
              })) : Q.value === "settings" ? (s(), M(Yg, { key: 9 })) : Q.value === "debug-workspace" ? (s(), M(Xg, { key: 10 })) : Q.value === "deploy" ? (s(), M(vk, {
                key: 11,
                onToast: lt
              })) : Q.value === "export" ? (s(), M(L1, { key: 12 })) : Q.value === "import" ? (s(), M(I0, {
                key: 13,
                onImportCompleteSwitch: Ce
              })) : Q.value === "remotes" ? (s(), M(Eg, {
                key: 14,
                onToast: lt
              })) : r("", !0)
            ], 64))
          ])
        ]),
        re.value ? (s(), M(Rk, {
          key: 0,
          commit: re.value,
          onClose: N[25] || (N[25] = (Se) => re.value = null),
          onCheckout: K,
          onCreateBranch: ee
        }, null, 8, ["commit"])) : r("", !0),
        Pe.value ? (s(), M(qs, {
          key: 1,
          title: Pe.value.title,
          message: Pe.value.message,
          details: Pe.value.details,
          warning: Pe.value.warning,
          confirmLabel: Pe.value.confirmLabel,
          cancelLabel: Pe.value.cancelLabel,
          secondaryLabel: Pe.value.secondaryLabel,
          secondaryAction: Pe.value.secondaryAction,
          destructive: Pe.value.destructive,
          onConfirm: Pe.value.onConfirm,
          onCancel: N[26] || (N[26] = (Se) => Pe.value = null),
          onSecondary: Pe.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : r("", !0),
        w(Pb, {
          show: de.value,
          "from-environment": ((qt = G.value) == null ? void 0 : qt.name) || "unknown",
          "to-environment": be.value,
          onConfirm: ze,
          onClose: ft
        }, null, 8, ["show", "from-environment", "to-environment"]),
        at.value && x.value ? (s(), M(to, {
          key: 2,
          status: x.value,
          "as-modal": !0,
          onClose: N[27] || (N[27] = (Se) => at.value = !1),
          onCommitted: kt
        }, null, 8, ["status"])) : r("", !0),
        Ze.value && x.value ? (s(), M(Yb, {
          key: 3,
          show: Ze.value,
          "mismatch-details": {
            missing_nodes: x.value.comparison.missing_nodes,
            extra_nodes: x.value.comparison.extra_nodes
          },
          onConfirm: At,
          onClose: N[28] || (N[28] = (Se) => Ze.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : r("", !0),
        w(Bb, {
          show: Z.value,
          state: Ie.value.state,
          progress: Ie.value.progress,
          message: Ie.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        X.value ? (s(), o("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: N[30] || (N[30] = Be((Se) => X.value = !1, ["self"]))
        }, [
          e("div", y2, [
            e("div", w2, [
              N[43] || (N[43] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: N[29] || (N[29] = (Se) => X.value = !1)
              }, [...N[42] || (N[42] = [
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
            e("div", k2, [
              N[44] || (N[44] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", b2, [
                (s(!0), o(W, null, ne(A.value, (Se) => (s(), o("div", {
                  key: Se.name,
                  class: fe(["env-item", { current: Se.is_current }])
                }, [
                  e("div", _2, [
                    e("div", $2, [
                      e("span", C2, a(Se.is_current ? "●" : "○"), 1),
                      e("span", x2, a(Se.name), 1),
                      Se.current_branch ? (s(), o("span", S2, "(" + a(Se.current_branch) + ")", 1)) : r("", !0),
                      Se.is_current ? (s(), o("span", I2, "CURRENT")) : r("", !0)
                    ]),
                    e("div", E2, a(Se.workflow_count) + " workflows • " + a(Se.node_count) + " nodes ", 1)
                  ]),
                  Se.is_current ? r("", !0) : (s(), o("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (B$) => V(Se.name)
                  }, " SWITCH ", 8, P2))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : r("", !0),
        D.value ? (s(), M(Z_, {
          key: 5,
          "default-path": ((Ms = I.value) == null ? void 0 : Ms.default_path) || "~/comfygit",
          "detected-models-dir": ((Rs = I.value) == null ? void 0 : Rs.detected_models_dir) || null,
          "initial-step": O.value,
          "existing-environments": ((Ts = I.value) == null ? void 0 : Ts.environments) || [],
          "cli-installed": ((Ds = I.value) == null ? void 0 : Ds.cli_installed) ?? !0,
          "setup-state": ((Ls = I.value) == null ? void 0 : Ls.state) || "no_workspace",
          "workspace-path": ((zs = I.value) == null ? void 0 : zs.workspace_path) || null,
          onComplete: Wt,
          onClose: j,
          onSwitchEnvironment: ue,
          onEnvironmentCreatedNoSwitch: Fe
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : r("", !0),
        e("div", M2, [
          w(fo, { name: "toast" }, {
            default: l(() => [
              (s(!0), o(W, null, ne(Ke.value, (Se) => (s(), o("div", {
                key: Se.id,
                class: fe(["toast", Se.type])
              }, [
                e("span", R2, a(Se.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), D2 = /* @__PURE__ */ ae(T2, [["__scopeId", "data-v-70f0bf8a"]]), L2 = { class: "item-header" }, z2 = { class: "item-info" }, U2 = { class: "filename" }, N2 = { class: "metadata" }, O2 = { class: "size" }, A2 = {
  key: 0,
  class: "type"
}, B2 = { class: "item-actions" }, F2 = {
  key: 0,
  class: "progress-section"
}, V2 = { class: "progress-bar" }, W2 = { class: "progress-stats" }, G2 = { class: "downloaded" }, j2 = { class: "speed" }, H2 = {
  key: 0,
  class: "eta"
}, K2 = {
  key: 1,
  class: "status-msg paused"
}, q2 = {
  key: 2,
  class: "status-msg queued"
}, Y2 = {
  key: 3,
  class: "status-msg completed"
}, J2 = {
  key: 4,
  class: "status-msg failed"
}, X2 = {
  key: 0,
  class: "retries"
}, Q2 = /* @__PURE__ */ oe({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(t, { emit: c }) {
    const n = c;
    function i(u) {
      if (u === 0) return "?";
      const m = u / (1024 * 1024 * 1024);
      return m >= 1 ? `${m.toFixed(2)} GB` : `${(u / (1024 * 1024)).toFixed(1)} MB`;
    }
    function f(u) {
      return u === 0 ? "-" : `${(u / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function p(u) {
      if (u < 60) return `${Math.round(u)}s`;
      const m = Math.floor(u / 60);
      return m < 60 ? `${m}m` : `${Math.floor(m / 60)}h ${m % 60}m`;
    }
    return (u, m) => (s(), o("div", {
      class: fe(["download-item", `status-${t.item.status}`])
    }, [
      e("div", L2, [
        e("div", z2, [
          e("div", U2, a(t.item.filename), 1),
          e("div", N2, [
            e("span", O2, a(i(t.item.size)), 1),
            t.item.type ? (s(), o("span", A2, a(t.item.type), 1)) : r("", !0)
          ])
        ]),
        e("div", B2, [
          t.item.status === "queued" || t.item.status === "downloading" ? (s(), o("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: m[0] || (m[0] = (d) => n("cancel")),
            title: "Cancel"
          }, " × ")) : r("", !0),
          t.item.status === "paused" ? (s(), o("button", {
            key: 1,
            class: "action-icon resume",
            onClick: m[1] || (m[1] = (d) => n("resume")),
            title: "Resume"
          }, " ▶ ")) : r("", !0),
          t.item.status === "failed" ? (s(), o("button", {
            key: 2,
            class: "action-icon retry",
            onClick: m[2] || (m[2] = (d) => n("retry")),
            title: "Retry"
          }, " ↻ ")) : r("", !0),
          t.item.status === "completed" || t.item.status === "failed" || t.item.status === "paused" ? (s(), o("button", {
            key: 3,
            class: "action-icon remove",
            onClick: m[3] || (m[3] = (d) => n("remove")),
            title: "Remove"
          }, " × ")) : r("", !0)
        ])
      ]),
      t.item.status === "downloading" ? (s(), o("div", F2, [
        e("div", V2, [
          e("div", {
            class: "progress-fill",
            style: Et({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", W2, [
          e("span", G2, a(i(t.item.downloaded)) + " / " + a(i(t.item.size)), 1),
          e("span", j2, a(f(t.item.speed)), 1),
          t.item.eta > 0 ? (s(), o("span", H2, a(p(t.item.eta)), 1)) : r("", !0)
        ])
      ])) : t.item.status === "paused" ? (s(), o("div", K2, " Paused - click Resume to download ")) : t.item.status === "queued" ? (s(), o("div", q2, " Waiting in queue... ")) : t.item.status === "completed" ? (s(), o("div", Y2, " ✓ Downloaded ")) : t.item.status === "failed" ? (s(), o("div", J2, [
        g(" ✗ " + a(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (s(), o("span", X2, "(" + a(t.item.retries) + " retries)", 1)) : r("", !0)
      ])) : r("", !0)
    ], 2));
  }
}), Xt = /* @__PURE__ */ ae(Q2, [["__scopeId", "data-v-2110df65"]]), Z2 = { class: "queue-title" }, e$ = { class: "count" }, t$ = { class: "queue-actions" }, s$ = { class: "action-label" }, o$ = {
  key: 0,
  class: "overall-progress"
}, n$ = { class: "progress-bar" }, a$ = {
  key: 0,
  class: "current-mini"
}, l$ = { class: "filename" }, i$ = { class: "speed" }, r$ = {
  key: 1,
  class: "queue-content"
}, d$ = {
  key: 0,
  class: "section"
}, c$ = {
  key: 1,
  class: "section"
}, u$ = { class: "section-header" }, m$ = { class: "section-label paused" }, v$ = { class: "items-list" }, f$ = {
  key: 2,
  class: "section"
}, p$ = { class: "section-header" }, g$ = { class: "section-label" }, h$ = { class: "items-list" }, y$ = {
  key: 3,
  class: "section"
}, w$ = { class: "section-header" }, k$ = { class: "section-label" }, b$ = { class: "items-list" }, _$ = {
  key: 4,
  class: "section"
}, $$ = { class: "section-header" }, C$ = { class: "section-label failed" }, x$ = { class: "items-list" }, S$ = /* @__PURE__ */ oe({
  __name: "ModelDownloadQueue",
  setup(t) {
    const {
      queue: c,
      currentDownload: n,
      queuedItems: i,
      completedItems: f,
      failedItems: p,
      pausedItems: u,
      hasItems: m,
      activeCount: d,
      cancelDownload: v,
      retryDownload: y,
      resumeDownload: k,
      resumeAllPaused: _,
      removeItem: b,
      clearCompleted: T
    } = os(), P = h(!1);
    let $ = null;
    Ct(
      () => ({
        active: d.value,
        failed: p.value.length,
        paused: u.value.length,
        completed: f.value.length
      }),
      (R, q) => {
        $ && (clearTimeout($), $ = null);
        const A = R.active === 0 && R.failed === 0 && R.paused === 0 && R.completed > 0, G = q && (q.active > 0 || q.paused > 0);
        A && G && ($ = setTimeout(() => {
          T(), $ = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const C = U(() => {
      var A;
      if (c.items.length === 0) return 0;
      const R = f.value.length, q = ((A = n.value) == null ? void 0 : A.progress) || 0;
      return Math.round((R + q / 100) / c.items.length * 100);
    });
    function B(R) {
      v(R);
    }
    function x(R) {
      return R === 0 ? "" : `${(R / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (R, q) => (s(), M(Ye, { to: "body" }, [
      Ee(m) ? (s(), o("div", {
        key: 0,
        class: fe(["model-download-queue", { minimized: !P.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: q[0] || (q[0] = (A) => P.value = !P.value)
        }, [
          e("div", Z2, [
            q[4] || (q[4] = e("span", { class: "icon" }, "↓", -1)),
            q[5] || (q[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", e$, "(" + a(Ee(d)) + "/" + a(Ee(c).items.length) + ")", 1)
          ]),
          e("div", t$, [
            e("span", s$, a(P.value ? "minimize" : "expand"), 1)
          ])
        ]),
        P.value ? (s(), o("div", r$, [
          Ee(n) ? (s(), o("div", d$, [
            q[6] || (q[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            w(Xt, {
              item: Ee(n),
              onCancel: q[1] || (q[1] = (A) => B(Ee(n).id))
            }, null, 8, ["item"])
          ])) : r("", !0),
          Ee(u).length > 0 ? (s(), o("div", c$, [
            e("div", u$, [
              e("span", m$, "Paused (" + a(Ee(u).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: q[2] || (q[2] = //@ts-ignore
                (...A) => Ee(_) && Ee(_)(...A))
              }, "Resume All")
            ]),
            e("div", v$, [
              (s(!0), o(W, null, ne(Ee(u), (A) => (s(), M(Xt, {
                key: A.id,
                item: A,
                onResume: (G) => Ee(k)(A.id),
                onRemove: (G) => Ee(b)(A.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : r("", !0),
          Ee(i).length > 0 ? (s(), o("div", f$, [
            e("div", p$, [
              e("span", g$, "Queued (" + a(Ee(i).length) + ")", 1)
            ]),
            e("div", h$, [
              (s(!0), o(W, null, ne(Ee(i), (A) => (s(), M(Xt, {
                key: A.id,
                item: A,
                onCancel: (G) => B(A.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : r("", !0),
          Ee(f).length > 0 ? (s(), o("div", y$, [
            e("div", w$, [
              e("span", k$, "Completed (" + a(Ee(f).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: q[3] || (q[3] = //@ts-ignore
                (...A) => Ee(T) && Ee(T)(...A))
              }, "Clear")
            ]),
            e("div", b$, [
              (s(!0), o(W, null, ne(Ee(f).slice(0, 3), (A) => (s(), M(Xt, {
                key: A.id,
                item: A,
                onRemove: (G) => Ee(b)(A.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : r("", !0),
          Ee(p).length > 0 ? (s(), o("div", _$, [
            e("div", $$, [
              e("span", C$, "Failed (" + a(Ee(p).length) + ")", 1)
            ]),
            e("div", x$, [
              (s(!0), o(W, null, ne(Ee(p), (A) => (s(), M(Xt, {
                key: A.id,
                item: A,
                onRetry: (G) => Ee(y)(A.id),
                onRemove: (G) => Ee(b)(A.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : r("", !0)
        ])) : (s(), o("div", o$, [
          e("div", n$, [
            e("div", {
              class: "progress-fill",
              style: Et({ width: `${C.value}%` })
            }, null, 4)
          ]),
          Ee(n) ? (s(), o("div", a$, [
            e("span", l$, a(Ee(n).filename), 1),
            e("span", i$, a(x(Ee(n).speed)), 1)
          ])) : r("", !0)
        ]))
      ], 2)) : r("", !0)
    ]));
  }
}), I$ = /* @__PURE__ */ ae(S$, [["__scopeId", "data-v-60751cfa"]]), E$ = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', P$ = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', M$ = {
  comfy: E$,
  phosphor: P$
}, Is = "comfy", no = "comfygit-theme";
let Ut = null, ao = Is;
function R$() {
  try {
    const t = localStorage.getItem(no);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return Is;
}
function lo(t = Is) {
  Ut && Ut.remove(), Ut = document.createElement("style"), Ut.id = "comfygit-theme-styles", Ut.setAttribute("data-theme", t), Ut.textContent = M$[t], document.head.appendChild(Ut), document.body.setAttribute("data-comfygit-theme", t), ao = t;
  try {
    localStorage.setItem(no, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function T$() {
  return ao;
}
function D$(t) {
  lo(t);
}
function L$(t) {
  var p;
  const { ui_id: c, state: n } = t || {}, i = (n == null ? void 0 : n.history) || {};
  if (!c)
    return null;
  const f = i[c];
  return f && f.result === "error" && ((p = f.status) == null ? void 0 : p.status_str) === "error" ? (f.status.messages || [])[0] || "Unknown error" : null;
}
const Es = document.createElement("link");
Es.rel = "stylesheet";
Es.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(Es);
const z$ = R$();
lo(z$);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), D$(t);
  },
  getTheme: () => {
    const t = T$();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let gt = null, rt = null, ts = null, Qt = null, Bs = null;
const Ht = h(null);
let Ps = "managed", io = !1;
async function ls() {
  var t;
  if (!((t = Rt) != null && t.api)) return null;
  try {
    const c = await Rt.api.fetchApi("/v2/comfygit/status");
    c.ok && (Ht.value = await c.json());
  } catch {
  }
}
async function hs() {
  var t;
  if ((t = Rt) != null && t.api)
    try {
      const c = await Rt.api.fetchApi("/v2/setup/status");
      if (c.ok) {
        const n = await c.json();
        Ps = n.state, io = n.has_comfyui_manager ?? !1;
      }
    } catch {
    }
}
function ys() {
  var c;
  if (Ps === "managed" || !io) return;
  const t = document.querySelectorAll("button.comfyui-button");
  for (const n of t)
    if (((c = n.textContent) == null ? void 0 : c.trim()) === "Manager" && !n.querySelector("svg, i, img")) {
      n.style.display = "none", console.log("[ComfyGit] Hiding built-in Manager button (ComfyUI-Manager present)");
      return;
    }
}
function U$() {
  if (!Ht.value) return !1;
  const t = Ht.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || Ht.value.has_changes;
}
function Fs(t) {
  gt && gt.remove(), gt = document.createElement("div"), gt.className = "comfygit-panel-overlay";
  const c = document.createElement("div");
  c.className = "comfygit-panel-container", gt.appendChild(c), gt.addEventListener("click", (f) => {
    f.target === gt && ps();
  });
  const n = (f) => {
    f.key === "Escape" && (ps(), document.removeEventListener("keydown", n));
  };
  document.addEventListener("keydown", n), _s({
    render: () => $s(D2, {
      initialView: t,
      onClose: ps,
      onStatusUpdate: async (f) => {
        Ht.value = f, ss(), await hs(), ws(), ys();
      }
    })
  }).mount(c), document.body.appendChild(gt);
}
function ps() {
  gt && (gt.remove(), gt = null);
}
function N$(t) {
  Zt(), rt = document.createElement("div"), rt.className = "comfygit-commit-popover-container";
  const c = t.getBoundingClientRect();
  rt.style.position = "fixed", rt.style.top = `${c.bottom + 8}px`, rt.style.right = `${window.innerWidth - c.right}px`, rt.style.zIndex = "10001";
  const n = (f) => {
    rt && !rt.contains(f.target) && f.target !== t && (Zt(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const i = (f) => {
    f.key === "Escape" && (Zt(), document.removeEventListener("keydown", i));
  };
  document.addEventListener("keydown", i), ts = _s({
    render: () => $s(to, {
      status: Ht.value,
      onClose: Zt,
      onCommitted: (f) => {
        Zt(), O$(f.success, f.message), ls().then(ss);
      }
    })
  }), ts.mount(rt), document.body.appendChild(rt);
}
function Zt() {
  ts && (ts.unmount(), ts = null), rt && (rt.remove(), rt = null);
}
function O$(t, c) {
  const n = document.createElement("div"), i = t ? "#22c55e" : "#ef4444";
  n.style.cssText = `
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--bg-color, #1a1a1a);
    border: 1px solid ${i};
    border-radius: 8px;
    padding: 12px 16px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    z-index: 10002;
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: sans-serif;
    font-size: 13px;
    color: var(--fg-color, #fff);
    animation: toastSlideUp 0.2s ease;
  `;
  const f = document.createElement("span");
  f.textContent = t ? "✓" : "✕", f.style.cssText = `
    color: ${i};
    font-weight: bold;
    font-size: 14px;
  `, n.appendChild(f);
  const p = document.createElement("span");
  p.textContent = c, n.appendChild(p), document.body.appendChild(n), setTimeout(() => {
    n.style.opacity = "0", n.style.transition = "opacity 0.2s ease", setTimeout(() => n.remove(), 200);
  }, 3e3);
}
function A$() {
  Qt || (Qt = document.createElement("div"), Qt.className = "comfygit-download-queue-root", Bs = _s({
    render: () => $s(I$)
  }), Bs.mount(Qt), document.body.appendChild(Qt), console.log("[ComfyGit] Model download queue mounted"));
}
let mt = null;
function ss() {
  if (!mt) return;
  const t = mt.querySelector(".commit-indicator");
  t && (t.style.display = U$() ? "block" : "none");
}
function ws() {
  if (!mt) return;
  const t = Ps !== "managed";
  mt.disabled = t, mt.title = t ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
}
const ro = document.createElement("style");
ro.textContent = `
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
document.head.appendChild(ro);
Rt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var f, p;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const c = document.createElement("button");
    c.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", c.textContent = "ComfyGit", c.title = "ComfyGit Control Panel", c.onclick = Fs, mt = document.createElement("button"), mt.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", mt.innerHTML = 'Commit <span class="commit-indicator"></span>', mt.title = "Quick Commit", mt.onclick = () => N$(mt), t.appendChild(c), t.appendChild(mt), (p = (f = Rt.menu) == null ? void 0 : f.settingsGroup) != null && p.element && (Rt.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), A$();
    const { loadPendingDownloads: n } = os();
    n(), await Promise.all([ls(), hs()]), ss(), ws(), ys(), setTimeout(ys, 100), setInterval(async () => {
      await Promise.all([ls(), hs()]), ss(), ws();
    }, 3e4);
    const i = Rt.api;
    if (i) {
      let u = function() {
        localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.OpenWorkflowsPaths"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((y) => {
          (y.startsWith("workflow:") || y.startsWith("Comfy.OpenWorkflowsPaths:") || y.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(y);
        }), window.location.reload();
      }, m = function() {
        const y = document.createElement("div");
        y.style.cssText = `
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
        k.textContent = "Workflows updated - refresh required", y.appendChild(k);
        const _ = document.createElement("button");
        _.textContent = "Refresh", _.style.cssText = `
          background: var(--comfy-menu-bg);
          color: var(--fg-color);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 6px 16px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
        `, _.onmouseover = () => _.style.background = "var(--comfy-input-bg)", _.onmouseout = () => _.style.background = "var(--comfy-menu-bg)", _.onclick = () => u(), y.appendChild(_);
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
        `, b.onmouseover = () => b.style.opacity = "1", b.onmouseout = () => b.style.opacity = "0.6", b.onclick = () => y.remove(), y.appendChild(b), document.body.appendChild(y), console.log("[ComfyGit] Refresh notification displayed");
      }, d = function(y) {
        const k = document.getElementById("comfygit-error-toast");
        k && k.remove();
        const _ = document.createElement("div");
        _.id = "comfygit-error-toast", _.style.cssText = `
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          background: #1a1a1a;
          border: 2px solid #e53935;
          border-radius: 8px;
          padding: 16px 20px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.5);
          z-index: 999999;
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: sans-serif;
          font-size: 14px;
          color: #fff;
          max-width: 600px;
        `;
        const b = document.createElement("span");
        b.textContent = "⚠️", b.style.fontSize = "20px", _.appendChild(b);
        const T = document.createElement("div");
        T.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 4px;";
        const P = document.createElement("div");
        P.textContent = "Node installation failed", P.style.cssText = "font-weight: 600; color: #e53935;", T.appendChild(P);
        const $ = document.createElement("div");
        $.textContent = "Dependency conflict detected", $.style.cssText = "font-size: 12px; opacity: 0.8;", T.appendChild($), _.appendChild(T);
        const C = document.createElement("button");
        C.textContent = "View Logs", C.style.cssText = `
          background: #e53935;
          color: #fff;
          border: none;
          border-radius: 4px;
          padding: 6px 12px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 500;
          white-space: nowrap;
        `, C.onmouseover = () => C.style.background = "#c62828", C.onmouseout = () => C.style.background = "#e53935", C.onclick = () => {
          _.remove(), Fs("debug-env");
        }, _.appendChild(C);
        const B = document.createElement("button");
        B.textContent = "×", B.style.cssText = `
          background: transparent;
          border: none;
          color: #fff;
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, B.onmouseover = () => B.style.opacity = "1", B.onmouseout = () => B.style.opacity = "0.6", B.onclick = () => _.remove(), _.appendChild(B), document.body.appendChild(_), console.log("[ComfyGit] Manager error toast displayed:", y), setTimeout(() => {
          document.getElementById("comfygit-error-toast") && _.remove();
        }, 1e4);
      };
      i.addEventListener("comfygit:workflow-changed", async (y) => {
        const { change_type: k, workflow_name: _ } = y.detail;
        console.log(`[ComfyGit] Workflow ${k}: ${_}`), await ls(), ss();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let v = !1;
      i.addEventListener("status", async (y) => {
        const k = y.detail != null;
        k && !v && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), u()) : m()), v = k;
      }), console.log("[ComfyGit] Refresh notification system initialized"), i.addEventListener("cm-task-completed", (y) => {
        const k = L$(y.detail);
        k && d(k);
      }), console.log("[ComfyGit] Manager error notification system initialized");
    }
  }
});
