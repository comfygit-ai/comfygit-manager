import { app as xt } from "../../scripts/app.js";
import { defineComponent as ne, createElementBlock as o, openBlock as s, createCommentVNode as r, createElementVNode as e, renderSlot as Ee, createBlock as T, resolveDynamicComponent as ks, normalizeClass as pe, withCtx as l, toDisplayString as a, createVNode as w, createTextVNode as g, computed as U, Fragment as V, renderList as ae, normalizeStyle as _t, ref as y, onMounted as Ae, watch as gt, Teleport as He, withModifiers as Ue, Transition as co, createSlots as Dt, withKeys as pt, reactive as os, onUnmounted as As, readonly as uo, unref as Ie, withDirectives as Le, vModelText as Et, vModelRadio as St, vModelCheckbox as Zt, nextTick as mo, vModelSelect as bt, vModelDynamic as vo, TransitionGroup as fo, createApp as bs, h as _s } from "vue";
const po = { class: "panel-layout" }, go = {
  key: 0,
  class: "panel-layout-header"
}, ho = {
  key: 1,
  class: "panel-layout-search"
}, yo = { class: "panel-layout-content" }, wo = {
  key: 2,
  class: "panel-layout-footer"
}, ko = /* @__PURE__ */ ne({
  __name: "PanelLayout",
  setup(t) {
    return (c, n) => (s(), o("div", po, [
      c.$slots.header ? (s(), o("div", go, [
        Ee(c.$slots, "header", {}, void 0, !0)
      ])) : r("", !0),
      c.$slots.search ? (s(), o("div", ho, [
        Ee(c.$slots, "search", {}, void 0, !0)
      ])) : r("", !0),
      e("div", yo, [
        Ee(c.$slots, "content", {}, void 0, !0)
      ]),
      c.$slots.footer ? (s(), o("div", wo, [
        Ee(c.$slots, "footer", {}, void 0, !0)
      ])) : r("", !0)
    ]));
  }
}), le = (t, c) => {
  const n = t.__vccOpts || t;
  for (const [i, f] of c)
    n[i] = f;
  return n;
}, Je = /* @__PURE__ */ le(ko, [["__scopeId", "data-v-21565df9"]]), bo = {
  key: 0,
  class: "panel-title-prefix"
}, _o = {
  key: 1,
  class: "panel-title-prefix-theme"
}, $o = /* @__PURE__ */ ne({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (c, n) => (s(), T(ks(`h${t.level}`), {
      class: pe(["panel-title", t.variant])
    }, {
      default: l(() => [
        t.showPrefix ? (s(), o("span", bo, a(t.prefix), 1)) : (s(), o("span", _o)),
        Ee(c.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Co = /* @__PURE__ */ le($o, [["__scopeId", "data-v-c3875efc"]]), xo = ["title"], So = ["width", "height"], Io = /* @__PURE__ */ ne({
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
}), Fs = /* @__PURE__ */ le(Io, [["__scopeId", "data-v-6fc7f16d"]]), Eo = { class: "header-left" }, Mo = {
  key: 0,
  class: "header-actions"
}, Po = /* @__PURE__ */ ne({
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
      class: pe(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", Eo, [
        w(Co, { "show-prefix": t.showPrefix }, {
          default: l(() => [
            g(a(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (s(), T(Fs, {
          key: 0,
          onClick: n[0] || (n[0] = (i) => c.$emit("info-click"))
        })) : r("", !0)
      ]),
      c.$slots.actions ? (s(), o("div", Mo, [
        Ee(c.$slots, "actions", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), Xe = /* @__PURE__ */ le(Po, [["__scopeId", "data-v-55a62cd6"]]), To = {
  key: 0,
  class: "section-title-count"
}, Ro = {
  key: 1,
  class: "section-title-icon"
}, Lo = /* @__PURE__ */ ne({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (c, n) => (s(), T(ks(`h${t.level}`), {
      class: pe(["section-title", { clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (i) => t.clickable && c.$emit("click"))
    }, {
      default: l(() => [
        Ee(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", To, "(" + a(t.count) + ")", 1)) : r("", !0),
        t.clickable ? (s(), o("span", Ro, a(t.expanded ? "▼" : "▸"), 1)) : r("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), at = /* @__PURE__ */ le(Lo, [["__scopeId", "data-v-559361eb"]]), zo = { class: "status-grid" }, Do = { class: "status-grid__columns" }, Uo = { class: "status-grid__column" }, No = { class: "status-grid__title" }, Oo = { class: "status-grid__column status-grid__column--right" }, Bo = { class: "status-grid__title" }, Ao = {
  key: 0,
  class: "status-grid__footer"
}, Fo = /* @__PURE__ */ ne({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (c, n) => (s(), o("div", zo, [
      e("div", Do, [
        e("div", Uo, [
          e("h4", No, a(t.leftTitle), 1),
          Ee(c.$slots, "left", {}, void 0, !0)
        ]),
        e("div", Oo, [
          e("h4", Bo, a(t.rightTitle), 1),
          Ee(c.$slots, "right", {}, void 0, !0)
        ])
      ]),
      c.$slots.footer ? (s(), o("div", Ao, [
        Ee(c.$slots, "footer", {}, void 0, !0)
      ])) : r("", !0)
    ]));
  }
}), Vo = /* @__PURE__ */ le(Fo, [["__scopeId", "data-v-73b7ba3f"]]), Wo = {
  key: 0,
  class: "status-item__icon"
}, Go = {
  key: 1,
  class: "status-item__count"
}, jo = { class: "status-item__label" }, Ho = /* @__PURE__ */ ne({
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
      class: pe(["status-item", n.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (s(), o("span", Wo, a(t.icon), 1)) : r("", !0),
      t.count !== void 0 ? (s(), o("span", Go, a(t.count), 1)) : r("", !0),
      e("span", jo, a(t.label), 1)
    ], 2));
  }
}), vt = /* @__PURE__ */ le(Ho, [["__scopeId", "data-v-6f929183"]]), Ko = { class: "issue-card__header" }, qo = { class: "issue-card__icon" }, Yo = { class: "issue-card__title" }, Jo = {
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
}, en = /* @__PURE__ */ ne({
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
      class: pe(["issue-card", n.value])
    }, [
      e("div", Ko, [
        e("span", qo, a(t.icon), 1),
        e("h4", Yo, a(t.title), 1)
      ]),
      i.$slots.default || t.description ? (s(), o("div", Jo, [
        t.description ? (s(), o("p", Xo, a(t.description), 1)) : r("", !0),
        Ee(i.$slots, "default", {}, void 0, !0)
      ])) : r("", !0),
      t.items && t.items.length ? (s(), o("div", Qo, [
        (s(!0), o(V, null, ae(t.items, (p, u) => (s(), o("div", {
          key: u,
          class: "issue-card__item"
        }, [
          f[0] || (f[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, a(p), 1)
        ]))), 128))
      ])) : r("", !0),
      i.$slots.actions ? (s(), o("div", Zo, [
        Ee(i.$slots, "actions", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), rt = /* @__PURE__ */ le(en, [["__scopeId", "data-v-df6aa348"]]), tn = ["type", "disabled"], sn = {
  key: 0,
  class: "spinner"
}, on = /* @__PURE__ */ ne({
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
      class: pe(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: n[0] || (n[0] = (i) => c.$emit("click", i))
    }, [
      t.loading ? (s(), o("span", sn)) : r("", !0),
      t.loading ? r("", !0) : Ee(c.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, tn));
  }
}), oe = /* @__PURE__ */ le(on, [["__scopeId", "data-v-772abe47"]]), nn = { class: "empty-state" }, an = {
  key: 0,
  class: "empty-icon"
}, ln = { class: "empty-message" }, rn = /* @__PURE__ */ ne({
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
      t.actionLabel ? (s(), T(oe, {
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
}), ut = /* @__PURE__ */ le(rn, [["__scopeId", "data-v-4466284f"]]), dn = /* @__PURE__ */ ne({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (c, n) => (s(), o("span", {
      class: pe(["detail-label"]),
      style: _t({ minWidth: t.minWidth })
    }, [
      Ee(c.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), Xt = /* @__PURE__ */ le(dn, [["__scopeId", "data-v-75e9eeb8"]]), cn = /* @__PURE__ */ ne({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (c, n) => (s(), o("span", {
      class: pe(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      Ee(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), gs = /* @__PURE__ */ le(cn, [["__scopeId", "data-v-2f186e4c"]]), un = { class: "detail-row" }, mn = /* @__PURE__ */ ne({
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
      w(Xt, { "min-width": t.labelMinWidth }, {
        default: l(() => [
          g(a(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (s(), T(gs, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: l(() => [
          g(a(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : Ee(c.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), Be = /* @__PURE__ */ le(mn, [["__scopeId", "data-v-ef15664a"]]), vn = { class: "modal-header" }, fn = { class: "modal-body" }, pn = { class: "status-section" }, gn = {
  key: 0,
  class: "status-section"
}, hn = { class: "section-header-row" }, yn = {
  key: 0,
  class: "workflow-group"
}, wn = { class: "workflow-group-header" }, kn = { class: "workflow-group-title" }, bn = { class: "workflow-list" }, _n = { class: "workflow-name" }, $n = { class: "workflow-issue" }, Cn = {
  key: 1,
  class: "workflow-group"
}, xn = { class: "workflow-group-header" }, Sn = { class: "workflow-group-title" }, In = { class: "workflow-list" }, En = { class: "workflow-name" }, Mn = { class: "workflow-issue" }, Pn = {
  key: 2,
  class: "workflow-group"
}, Tn = { class: "workflow-group-header" }, Rn = { class: "workflow-group-title" }, Ln = { class: "workflow-list" }, zn = { class: "workflow-name" }, Dn = {
  key: 3,
  class: "workflow-group"
}, Un = { class: "workflow-group-header" }, Nn = { class: "workflow-group-title" }, On = { class: "workflow-list" }, Bn = { class: "workflow-name" }, An = {
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
}, Ea = { class: "repair-action" }, Ma = {
  key: 3,
  class: "status-section"
}, Pa = { class: "info-box" }, Ta = { class: "drift-list" }, Ra = {
  key: 0,
  class: "drift-list-more"
}, La = {
  key: 4,
  class: "status-section"
}, za = { class: "warning-box" }, Da = {
  key: 5,
  class: "empty-state-inline"
}, Ua = { class: "modal-actions" }, Na = /* @__PURE__ */ ne({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {},
    isRepairing: { type: Boolean }
  },
  emits: ["close", "navigate-workflows", "navigate-nodes", "repair"],
  setup(t) {
    const c = t, n = y(!1);
    Ae(() => {
      console.log("StatusDetailModal mounted, initial show value:", c.show);
    }), gt(() => c.show, (_, b) => {
      console.log("StatusDetailModal show prop changed from", b, "to", _);
    }, { immediate: !0 });
    const i = U(() => {
      var _, b, R;
      return ((R = (b = (_ = c.status) == null ? void 0 : _.workflows) == null ? void 0 : b.analyzed) == null ? void 0 : R.filter(
        (E) => E.status === "broken" && E.sync_state === "synced"
      )) || [];
    }), f = U(() => {
      var _, b, R;
      return ((R = (b = (_ = c.status) == null ? void 0 : _.workflows) == null ? void 0 : b.analyzed) == null ? void 0 : R.filter(
        (E) => E.status === "broken" && E.sync_state !== "synced"
      )) || [];
    }), p = U(() => {
      var _, b, R;
      return ((R = (b = (_ = c.status) == null ? void 0 : _.workflows) == null ? void 0 : b.synced) == null ? void 0 : R.filter((E) => {
        var C, N, x;
        const $ = (x = (N = (C = c.status) == null ? void 0 : C.workflows) == null ? void 0 : N.analyzed) == null ? void 0 : x.find((M) => M.name === E);
        return !$ || $.status !== "broken";
      })) || [];
    }), u = U(() => {
      var _, b, R, E, $;
      return (_ = c.status) != null && _.workflows ? (((b = c.status.workflows.new) == null ? void 0 : b.length) ?? 0) > 0 || (((R = c.status.workflows.modified) == null ? void 0 : R.length) ?? 0) > 0 || (((E = c.status.workflows.deleted) == null ? void 0 : E.length) ?? 0) > 0 || ((($ = c.status.workflows.synced) == null ? void 0 : $.length) ?? 0) > 0 : !1;
    }), m = U(() => {
      var b, R, E;
      const _ = (b = c.status) == null ? void 0 : b.git_changes;
      return _ ? (((R = _.nodes_added) == null ? void 0 : R.length) ?? 0) > 0 || (((E = _.nodes_removed) == null ? void 0 : E.length) ?? 0) > 0 || _.workflow_changes || _.has_other_changes : !1;
    }), d = U(() => {
      var _, b, R, E, $, C;
      return !u.value && !m.value && ((b = (_ = c.status) == null ? void 0 : _.comparison) == null ? void 0 : b.is_synced) && (((R = c.status) == null ? void 0 : R.missing_models_count) ?? 0) === 0 && (((C = ($ = (E = c.status) == null ? void 0 : E.comparison) == null ? void 0 : $.disabled_nodes) == null ? void 0 : C.length) ?? 0) === 0;
    }), v = U(() => {
      var b, R;
      const _ = (R = (b = c.status) == null ? void 0 : b.git_changes) == null ? void 0 : R.workflow_changes;
      return _ ? typeof _ == "number" ? _ : Object.keys(_).length : 0;
    });
    function h(_) {
      return typeof _ == "string" ? _ : _.name;
    }
    function k(_) {
      return typeof _ == "object" && _.is_development === !0;
    }
    return (_, b) => {
      var R, E, $, C, N, x, M, q, A, W, S, L, O, re, Z, X, ce, J, D, z, I, ue;
      return s(), T(He, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: b[7] || (b[7] = (ee) => _.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: b[6] || (b[6] = Ue(() => {
            }, ["stop"]))
          }, [
            e("div", vn, [
              b[8] || (b[8] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: b[0] || (b[0] = (ee) => _.$emit("close"))
              }, "✕")
            ]),
            e("div", fn, [
              e("div", pn, [
                w(at, { level: "4" }, {
                  default: l(() => [...b[9] || (b[9] = [
                    g("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                w(Be, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              u.value ? (s(), o("div", gn, [
                e("div", hn, [
                  w(at, { level: "4" }, {
                    default: l(() => [...b[10] || (b[10] = [
                      g("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: b[1] || (b[1] = (ee) => _.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                i.value.length ? (s(), o("div", yn, [
                  e("div", wn, [
                    b[11] || (b[11] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", kn, "BROKEN (COMMITTED) (" + a(i.value.length) + ")", 1)
                  ]),
                  e("div", bn, [
                    (s(!0), o(V, null, ae(i.value, (ee) => (s(), o("div", {
                      key: ee.name,
                      class: "workflow-item"
                    }, [
                      e("span", _n, a(ee.name), 1),
                      e("span", $n, a(ee.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                f.value.length ? (s(), o("div", Cn, [
                  e("div", xn, [
                    b[12] || (b[12] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Sn, "BROKEN (UNCOMMITTED) (" + a(f.value.length) + ")", 1)
                  ]),
                  e("div", In, [
                    (s(!0), o(V, null, ae(f.value, (ee) => (s(), o("div", {
                      key: ee.name,
                      class: "workflow-item"
                    }, [
                      e("span", En, a(ee.name), 1),
                      e("span", Mn, a(ee.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (E = (R = t.status.workflows) == null ? void 0 : R.new) != null && E.length ? (s(), o("div", Pn, [
                  e("div", Tn, [
                    b[13] || (b[13] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", Rn, "NEW (" + a(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", Ln, [
                    (s(!0), o(V, null, ae(t.status.workflows.new, (ee) => (s(), o("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", zn, a(ee), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (C = ($ = t.status.workflows) == null ? void 0 : $.modified) != null && C.length ? (s(), o("div", Dn, [
                  e("div", Un, [
                    b[14] || (b[14] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", Nn, "MODIFIED (" + a(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", On, [
                    (s(!0), o(V, null, ae(t.status.workflows.modified, (ee) => (s(), o("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", Bn, a(ee), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (x = (N = t.status.workflows) == null ? void 0 : N.deleted) != null && x.length ? (s(), o("div", An, [
                  e("div", Fn, [
                    b[15] || (b[15] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", Vn, "DELETED (" + a(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", Wn, [
                    (s(!0), o(V, null, ae(t.status.workflows.deleted, (ee) => (s(), o("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", Gn, a(ee), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                p.value.length ? (s(), o("div", jn, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: b[2] || (b[2] = (ee) => n.value = !n.value)
                  }, [
                    b[16] || (b[16] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", Hn, "SYNCED (" + a(p.value.length) + ")", 1),
                    e("span", Kn, a(n.value ? "▼" : "▶"), 1)
                  ]),
                  n.value ? (s(), o("div", qn, [
                    (s(!0), o(V, null, ae(p.value, (ee) => (s(), o("div", {
                      key: ee,
                      class: "workflow-item"
                    }, [
                      e("span", Yn, a(ee), 1)
                    ]))), 128))
                  ])) : r("", !0)
                ])) : r("", !0)
              ])) : r("", !0),
              m.value ? (s(), o("div", Jn, [
                w(at, { level: "4" }, {
                  default: l(() => [...b[17] || (b[17] = [
                    g("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (q = (M = t.status.git_changes) == null ? void 0 : M.nodes_added) != null && q.length ? (s(), o("div", Xn, [
                  e("div", Qn, [
                    b[18] || (b[18] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", Zn, "NODES ADDED (" + a(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", ea, [
                    (s(!0), o(V, null, ae(t.status.git_changes.nodes_added, (ee) => (s(), o("div", {
                      key: h(ee),
                      class: "change-item"
                    }, [
                      e("span", ta, a(h(ee)), 1),
                      k(ee) ? (s(), o("span", sa, "dev")) : r("", !0)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (W = (A = t.status.git_changes) == null ? void 0 : A.nodes_removed) != null && W.length ? (s(), o("div", oa, [
                  e("div", na, [
                    b[19] || (b[19] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", aa, "NODES REMOVED (" + a(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", la, [
                    (s(!0), o(V, null, ae(t.status.git_changes.nodes_removed, (ee) => (s(), o("div", {
                      key: h(ee),
                      class: "change-item"
                    }, [
                      e("span", ia, a(h(ee)), 1),
                      k(ee) ? (s(), o("span", ra, "dev")) : r("", !0)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (S = t.status.git_changes) != null && S.workflow_changes ? (s(), o("div", da, [
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
                (L = t.status.git_changes) != null && L.has_other_changes ? (s(), o("div", va, [...b[21] || (b[21] = [
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
                  w(at, { level: "4" }, {
                    default: l(() => [...b[22] || (b[22] = [
                      g("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: b[3] || (b[3] = (ee) => _.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                b[26] || (b[26] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (Z = (re = t.status.comparison) == null ? void 0 : re.missing_nodes) != null && Z.length ? (s(), o("div", ga, [
                  w(Be, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", ha, [
                    (s(!0), o(V, null, ae(t.status.comparison.missing_nodes.slice(0, 10), (ee) => (s(), o("div", {
                      key: ee,
                      class: "drift-list-item"
                    }, " - " + a(ee), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (s(), o("div", ya, " ... and " + a(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : r("", !0)
                  ])
                ])) : r("", !0),
                (ce = (X = t.status.comparison) == null ? void 0 : X.extra_nodes) != null && ce.length ? (s(), o("div", wa, [
                  w(Be, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", ka, [
                    (s(!0), o(V, null, ae(t.status.comparison.extra_nodes.slice(0, 10), (ee) => (s(), o("div", {
                      key: ee,
                      class: "drift-list-item"
                    }, " - " + a(ee), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (s(), o("div", ba, " ... and " + a(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : r("", !0)
                  ])
                ])) : r("", !0),
                (D = (J = t.status.comparison) == null ? void 0 : J.version_mismatches) != null && D.length ? (s(), o("div", _a, [
                  w(Be, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  e("div", $a, [
                    (s(!0), o(V, null, ae(t.status.comparison.version_mismatches.slice(0, 10), (ee) => (s(), o("div", {
                      key: ee.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      g(a(ee.name) + ": ", 1),
                      e("span", Ca, a(ee.actual), 1),
                      b[23] || (b[23] = g(" → ", -1)),
                      e("span", xa, a(ee.expected), 1)
                    ]))), 128)),
                    t.status.comparison.version_mismatches.length > 10 ? (s(), o("div", Sa, " ... and " + a(t.status.comparison.version_mismatches.length - 10) + " more ", 1)) : r("", !0)
                  ])
                ])) : r("", !0),
                ((z = t.status.comparison) == null ? void 0 : z.packages_in_sync) === !1 ? (s(), o("div", Ia, [
                  w(Be, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : r("", !0),
                e("div", Ea, [
                  w(oe, {
                    variant: "warning",
                    loading: t.isRepairing,
                    onClick: b[4] || (b[4] = (ee) => _.$emit("repair"))
                  }, {
                    default: l(() => [...b[24] || (b[24] = [
                      g(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  b[25] || (b[25] = e("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (ue = (I = t.status.comparison) == null ? void 0 : I.disabled_nodes) != null && ue.length ? (s(), o("div", Ma, [
                w(at, { level: "4" }, {
                  default: l(() => [...b[27] || (b[27] = [
                    g("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", Pa, [
                  b[28] || (b[28] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, a(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", Ta, [
                  (s(!0), o(V, null, ae(t.status.comparison.disabled_nodes.slice(0, 10), (ee) => (s(), o("div", {
                    key: ee,
                    class: "drift-list-item"
                  }, " • " + a(ee), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (s(), o("div", Ra, " ... and " + a(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : r("", !0)
                ])
              ])) : r("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (s(), o("div", La, [
                w(at, { level: "4" }, {
                  default: l(() => [...b[29] || (b[29] = [
                    g("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", za, [
                  b[30] || (b[30] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, a(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                b[31] || (b[31] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : r("", !0),
              d.value ? (s(), o("div", Da, [...b[32] || (b[32] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : r("", !0)
            ]),
            e("div", Ua, [
              w(oe, {
                variant: "secondary",
                onClick: b[5] || (b[5] = (ee) => _.$emit("close"))
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
}), Oa = /* @__PURE__ */ le(Na, [["__scopeId", "data-v-e2b37122"]]), Ba = { class: "health-section-header" }, Aa = { class: "suggestions-content" }, Fa = { class: "suggestions-text" }, Va = { style: { "margin-top": "var(--cg-space-3)" } }, Wa = {
  key: 1,
  class: "no-issues-text"
}, Ga = /* @__PURE__ */ ne({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models", "repair-environment", "start-setup", "view-environments", "create-environment"],
  setup(t, { expose: c, emit: n }) {
    const i = t, f = y(!1), p = y(!1);
    function u() {
      f.value = !0;
    }
    function m() {
      f.value = !1, v("view-workflows");
    }
    function d() {
      f.value = !1, v("view-nodes");
    }
    const v = n, h = y(!1), k = y(!1);
    function _() {
      k.value = !0, v("repair-environment");
    }
    function b() {
      k.value = !1;
    }
    function R() {
      f.value = !1;
    }
    const E = U(() => {
      const J = i.status.workflows.analyzed || [], D = J.filter(
        (z) => z.unresolved_models_count > 0 || z.ambiguous_models_count > 0
      );
      return D.length === 0 && i.status.missing_models_count > 0 ? J.filter((z) => z.sync_state === "synced") : D;
    });
    function $() {
      const J = E.value;
      J.length !== 0 && (h.value = !0, v("repair-missing-models", J.map((D) => D.name)));
    }
    function C() {
      h.value = !1;
    }
    c({ resetRepairingState: C, resetRepairingEnvironmentState: b, closeDetailModal: R });
    const N = U(() => i.status.workflows.new.length > 0 || i.status.workflows.modified.length > 0 || i.status.workflows.deleted.length > 0), x = U(() => i.status.has_changes), M = U(() => {
      const J = i.status.git_changes;
      return J.nodes_added.length > 0 || J.nodes_removed.length > 0 || J.workflow_changes;
    }), q = U(() => i.status.has_changes || N.value), A = U(() => Object.keys(i.status.git_changes.workflow_changes_detail).length), W = U(() => i.status.git_changes.has_other_changes), S = U(() => {
      var J;
      return ((J = i.status.workflows.analyzed) == null ? void 0 : J.filter((D) => D.status === "broken")) || [];
    }), L = U(() => {
      var J;
      return ((J = i.status.workflows.analyzed) == null ? void 0 : J.filter(
        (D) => D.has_path_sync_issues && !D.has_issues
      )) || [];
    }), O = U(() => S.value.length > 0), re = U(() => O.value || L.value.length > 0 || i.status.missing_models_count > 0 || !i.status.comparison.is_synced || i.status.has_legacy_manager), Z = U(() => {
      const J = [];
      return i.status.workflows.new.length > 0 && J.push(`${i.status.workflows.new.length} new`), i.status.workflows.modified.length > 0 && J.push(`${i.status.workflows.modified.length} modified`), i.status.workflows.deleted.length > 0 && J.push(`${i.status.workflows.deleted.length} deleted`), J.length > 0 ? `${J.join(", ")} workflow${J.length === 1 && !J[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), X = U(() => {
      var z, I;
      const J = [], D = i.status.comparison;
      return (z = D.missing_nodes) != null && z.length && J.push(`${D.missing_nodes.length} missing node${D.missing_nodes.length === 1 ? "" : "s"}`), (I = D.extra_nodes) != null && I.length && J.push(`${D.extra_nodes.length} untracked node${D.extra_nodes.length === 1 ? "" : "s"}`), J.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${J.join(" and ")}.`;
    }), ce = U(() => {
      var z, I;
      const J = [], D = i.status.comparison;
      return (z = D.extra_nodes) != null && z.length && (D.extra_nodes.slice(0, 3).forEach((ue) => {
        J.push(`Untracked: ${ue}`);
      }), D.extra_nodes.length > 3 && J.push(`...and ${D.extra_nodes.length - 3} more untracked`)), (I = D.missing_nodes) != null && I.length && (D.missing_nodes.slice(0, 3).forEach((ue) => {
        J.push(`Missing: ${ue}`);
      }), D.missing_nodes.length > 3 && J.push(`...and ${D.missing_nodes.length - 3} more missing`)), J;
    });
    return (J, D) => (s(), o(V, null, [
      w(Je, null, {
        header: l(() => [
          w(Xe, { title: "STATUS" })
        ]),
        content: l(() => [
          i.setupState === "no_workspace" ? (s(), T(rt, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: l(() => [
              w(oe, {
                variant: "primary",
                size: "sm",
                onClick: D[0] || (D[0] = (z) => J.$emit("start-setup"))
              }, {
                default: l(() => [...D[13] || (D[13] = [
                  g(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : i.setupState === "unmanaged" ? (s(), T(rt, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: l(() => [
              w(oe, {
                variant: "primary",
                size: "sm",
                onClick: D[1] || (D[1] = (z) => J.$emit("view-environments"))
              }, {
                default: l(() => [...D[14] || (D[14] = [
                  g(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : i.setupState === "empty_workspace" ? (s(), T(rt, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: l(() => [
              w(oe, {
                variant: "primary",
                size: "sm",
                onClick: D[2] || (D[2] = (z) => J.$emit("create-environment"))
              }, {
                default: l(() => [...D[15] || (D[15] = [
                  g(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : r("", !0),
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: D[4] || (D[4] = (z) => p.value = !0),
            onMouseleave: D[5] || (D[5] = (z) => p.value = !1)
          }, [
            e("div", Ba, [
              w(at, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: l(() => [...D[16] || (D[16] = [
                  g(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              w(co, { name: "fade" }, {
                default: l(() => [
                  p.value ? (s(), T(oe, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: u
                  }, {
                    default: l(() => [...D[17] || (D[17] = [
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
            }, Dt({
              left: l(() => [
                t.status.workflows.new.length ? (s(), T(vt, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : r("", !0),
                t.status.workflows.modified.length ? (s(), T(vt, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : r("", !0),
                t.status.workflows.deleted.length ? (s(), T(vt, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : r("", !0),
                w(vt, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: N.value
                }, null, 8, ["count", "separator"])
              ]),
              right: l(() => [
                t.status.git_changes.nodes_added.length ? (s(), T(vt, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : r("", !0),
                t.status.git_changes.nodes_removed.length ? (s(), T(vt, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : r("", !0),
                t.status.git_changes.workflow_changes ? (s(), T(vt, {
                  key: 2,
                  icon: "●",
                  count: A.value,
                  label: A.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : r("", !0),
                W.value ? (s(), T(vt, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : r("", !0),
                x.value && !M.value && !W.value ? (s(), T(vt, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : r("", !0),
                x.value ? r("", !0) : (s(), T(vt, {
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
                  D[19] || (D[19] = e("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  e("div", Aa, [
                    e("span", Fa, a(Z.value), 1),
                    w(oe, {
                      variant: "primary",
                      size: "sm",
                      onClick: D[3] || (D[3] = (z) => J.$emit("commit-changes"))
                    }, {
                      default: l(() => [...D[18] || (D[18] = [
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
          t.status.is_detached_head ? (s(), T(rt, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: l(() => [
              w(oe, {
                variant: "primary",
                size: "sm",
                onClick: D[6] || (D[6] = (z) => J.$emit("create-branch"))
              }, {
                default: l(() => [...D[20] || (D[20] = [
                  g(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : r("", !0),
          e("div", Va, [
            w(at, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: l(() => [...D[21] || (D[21] = [
                g(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            re.value ? (s(), o(V, { key: 0 }, [
              S.value.length > 0 ? (s(), T(rt, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${S.value.length} workflow${S.value.length === 1 ? "" : "s"} can't run`,
                description: "These workflows have missing dependencies that must be resolved before they can run.",
                items: S.value.map((z) => `${z.name} — ${z.issue_summary}`)
              }, {
                actions: l(() => [
                  w(oe, {
                    variant: "primary",
                    size: "sm",
                    onClick: D[7] || (D[7] = (z) => J.$emit("view-workflows"))
                  }, {
                    default: l(() => [...D[22] || (D[22] = [
                      g(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : r("", !0),
              L.value.length > 0 ? (s(), T(rt, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${L.value.length} workflow${L.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: L.value.map((z) => `${z.name} — ${z.models_needing_path_sync_count} model path${z.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: l(() => [
                  w(oe, {
                    variant: "primary",
                    size: "sm",
                    onClick: D[8] || (D[8] = (z) => J.$emit("view-workflows"))
                  }, {
                    default: l(() => [...D[23] || (D[23] = [
                      g(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : r("", !0),
              t.status.missing_models_count > 0 && !O.value ? (s(), T(rt, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: l(() => [
                  w(oe, {
                    variant: "primary",
                    size: "sm",
                    disabled: h.value,
                    onClick: $
                  }, {
                    default: l(() => [
                      g(a(h.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  w(oe, {
                    variant: "secondary",
                    size: "sm",
                    onClick: D[9] || (D[9] = (z) => J.$emit("view-workflows"))
                  }, {
                    default: l(() => [...D[24] || (D[24] = [
                      g(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : r("", !0),
              t.status.comparison.is_synced ? r("", !0) : (s(), T(rt, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: X.value,
                items: ce.value
              }, {
                actions: l(() => [
                  w(oe, {
                    variant: "secondary",
                    size: "sm",
                    onClick: u
                  }, {
                    default: l(() => [...D[25] || (D[25] = [
                      g(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  w(oe, {
                    variant: "primary",
                    size: "sm",
                    onClick: D[10] || (D[10] = (z) => J.$emit("view-nodes"))
                  }, {
                    default: l(() => [...D[26] || (D[26] = [
                      g(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              t.status.has_legacy_manager ? (s(), T(rt, {
                key: 4,
                severity: "warning",
                icon: "⚠",
                title: "Legacy ComfyUI-Manager detected",
                description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
              }, {
                actions: l(() => [
                  w(oe, {
                    variant: "primary",
                    size: "sm",
                    onClick: D[11] || (D[11] = (z) => J.$emit("view-nodes"))
                  }, {
                    default: l(() => [...D[27] || (D[27] = [
                      g(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : r("", !0)
            ], 64)) : q.value ? (s(), o("span", Wa, "No issues")) : (s(), T(ut, {
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
        onClose: D[12] || (D[12] = (z) => f.value = !1),
        onNavigateWorkflows: m,
        onNavigateNodes: d,
        onRepair: _
      }, null, 8, ["show", "status", "is-repairing"])
    ], 64));
  }
}), ja = /* @__PURE__ */ le(Ga, [["__scopeId", "data-v-55fcd77f"]]), Ha = ["type", "value", "placeholder", "disabled"], Ka = /* @__PURE__ */ ne({
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
    const i = t, f = n, p = y(null);
    function u(m) {
      const d = m.target.value;
      f("update:modelValue", d);
    }
    return Ae(() => {
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
      class: pe(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: u,
      onKeyup: [
        d[0] || (d[0] = pt((v) => m.$emit("enter"), ["enter"])),
        d[1] || (d[1] = pt((v) => m.$emit("escape"), ["escape"]))
      ],
      onFocus: d[2] || (d[2] = (v) => m.$emit("focus")),
      onBlur: d[3] || (d[3] = (v) => m.$emit("blur"))
    }, null, 42, Ha));
  }
}), es = /* @__PURE__ */ le(Ka, [["__scopeId", "data-v-0380d08f"]]), qa = { class: "branch-create-form" }, Ya = { class: "form-actions" }, Ja = /* @__PURE__ */ ne({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: c }) {
    const n = c, i = y(""), f = U(() => {
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
      w(es, {
        modelValue: i.value,
        "onUpdate:modelValue": d[0] || (d[0] = (v) => i.value = v),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: p,
        onEscape: u
      }, null, 8, ["modelValue"]),
      e("div", Ya, [
        w(oe, {
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
        w(oe, {
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
}), Xa = /* @__PURE__ */ le(Ja, [["__scopeId", "data-v-7c500394"]]), Qa = { class: "branch-list-item__indicator" }, Za = { class: "branch-list-item__name" }, el = {
  key: 0,
  class: "branch-list-item__actions"
}, tl = {
  key: 0,
  class: "branch-list-item__current-label"
}, sl = /* @__PURE__ */ ne({
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
      class: pe(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (i) => t.clickable && c.$emit("click"))
    }, [
      e("span", Qa, a(t.isCurrent ? "●" : "○"), 1),
      e("span", Za, a(t.branchName), 1),
      c.$slots.actions || t.showCurrentLabel ? (s(), o("div", el, [
        Ee(c.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (s(), o("span", tl, " current ")) : r("", !0)
      ])) : r("", !0)
    ], 2));
  }
}), ol = /* @__PURE__ */ le(sl, [["__scopeId", "data-v-c6581a24"]]), nl = {
  key: 2,
  class: "branch-list"
}, al = /* @__PURE__ */ ne({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create", "delete"],
  setup(t, { emit: c }) {
    const n = c, i = y(!1);
    function f(u) {
      n("create", u), p();
    }
    function p() {
      i.value = !1;
    }
    return (u, m) => (s(), T(Je, null, {
      header: l(() => [
        w(Xe, { title: "BRANCHES" }, {
          actions: l(() => [
            i.value ? r("", !0) : (s(), T(oe, {
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
        i.value ? (s(), T(Xa, {
          key: 0,
          onCreate: f,
          onCancel: p
        })) : r("", !0),
        t.branches.length === 0 ? (s(), T(ut, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (s(), o("div", nl, [
          (s(!0), o(V, null, ae(t.branches, (d) => (s(), T(ol, {
            key: d.name,
            "branch-name": d.name,
            "is-current": d.is_current
          }, {
            actions: l(() => [
              d.is_current ? r("", !0) : (s(), T(oe, {
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
              d.is_current ? r("", !0) : (s(), T(oe, {
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
}), ll = /* @__PURE__ */ le(al, [["__scopeId", "data-v-86784ddd"]]), il = { class: "commit-list" }, rl = /* @__PURE__ */ ne({
  __name: "CommitList",
  setup(t) {
    return (c, n) => (s(), o("div", il, [
      Ee(c.$slots, "default", {}, void 0, !0)
    ]));
  }
}), dl = /* @__PURE__ */ le(rl, [["__scopeId", "data-v-8c5ee761"]]), cl = { class: "commit-hash" }, ul = /* @__PURE__ */ ne({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const c = t, n = U(() => c.hash.slice(0, c.length));
    return (i, f) => (s(), o("span", cl, a(n.value), 1));
  }
}), Vs = /* @__PURE__ */ le(ul, [["__scopeId", "data-v-7c333cc6"]]), ml = { class: "commit-message" }, vl = { class: "commit-date" }, fl = /* @__PURE__ */ ne({
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
      class: pe(["commit-item", { clickable: t.clickable }]),
      onClick: f
    }, [
      w(Vs, { hash: t.hash }, null, 8, ["hash"]),
      e("span", ml, a(t.message), 1),
      e("span", vl, a(t.relativeDate), 1),
      p.$slots.actions ? (s(), o("div", {
        key: 0,
        class: "commit-actions",
        onClick: u[0] || (u[0] = Ue(() => {
        }, ["stop"]))
      }, [
        Ee(p.$slots, "actions", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), pl = /* @__PURE__ */ le(fl, [["__scopeId", "data-v-dd7c621b"]]), gl = /* @__PURE__ */ ne({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (c, n) => (s(), T(Je, null, {
      header: l(() => [
        w(Xe, { title: "HISTORY" })
      ]),
      content: l(() => [
        t.commits.length === 0 ? (s(), T(ut, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (s(), T(dl, { key: 1 }, {
          default: l(() => [
            (s(!0), o(V, null, ae(t.commits, (i) => (s(), T(pl, {
              key: i.hash,
              hash: i.short_hash || i.hash,
              message: i.message,
              "relative-date": i.date_relative || i.relative_date,
              onClick: (f) => c.$emit("select", i)
            }, {
              actions: l(() => [
                w(oe, {
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
}), hl = /* @__PURE__ */ le(gl, [["__scopeId", "data-v-981c3c64"]]), P$ = os({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const T$ = [
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
], R$ = {
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
], L$ = [
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
function At() {
  return !1;
}
function We() {
  const t = y(!1), c = y(null);
  async function n(H, ve) {
    var Oe;
    if (!((Oe = window.app) != null && Oe.api))
      throw new Error("ComfyUI API not available");
    const _e = await window.app.api.fetchApi(H, ve);
    if (!_e.ok) {
      const ot = await _e.json().catch(() => ({}));
      throw new Error(ot.error || ot.message || `Request failed: ${_e.status}`);
    }
    return _e.json();
  }
  async function i(H = !1) {
    return n(H ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function f(H, ve = !1) {
    return n("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: H, allow_issues: ve })
    });
  }
  async function p(H = 10, ve = 0) {
    return n(`/v2/comfygit/log?limit=${H}&offset=${ve}`);
  }
  async function u(H) {
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
  async function d(H) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: H, force: !0 })
    });
  }
  async function v() {
    return n("/v2/comfygit/branches");
  }
  async function h(H) {
    return n(`/v2/comfygit/commit/${H}`);
  }
  async function k(H, ve = !1) {
    return n("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: H, force: ve })
    });
  }
  async function _(H, ve = "HEAD") {
    return n("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: H, start_point: ve })
    });
  }
  async function b(H, ve = !1) {
    return n("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: H, force: ve })
    });
  }
  async function R(H, ve = !1) {
    return n(`/v2/comfygit/branch/${encodeURIComponent(H)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: ve })
    });
  }
  async function E() {
    try {
      return (await n("/v2/comfygit/environments")).environments;
    } catch {
      try {
        const H = await i();
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
  async function $(H, ve) {
    const _e = { target_env: H };
    return ve && (_e.workspace_path = ve), n("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(_e)
    });
  }
  async function C() {
    try {
      return n("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function N(H) {
    return n("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(H)
    });
  }
  async function x() {
    return n("/v2/workspace/environments/create_status");
  }
  async function M(H = 20) {
    return n(`/v2/workspace/comfyui_releases?limit=${H}`);
  }
  async function q(H) {
    return n(`/v2/workspace/environments/${H}`, {
      method: "DELETE"
    });
  }
  async function A(H = !1) {
    try {
      return n(H ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const ve = await i(H), _e = [];
      return ve.workflows.new.forEach((Oe) => {
        _e.push({ name: Oe, status: "new", missing_nodes: 0, missing_models: 0, path: Oe });
      }), ve.workflows.modified.forEach((Oe) => {
        _e.push({ name: Oe, status: "modified", missing_nodes: 0, missing_models: 0, path: Oe });
      }), ve.workflows.synced.forEach((Oe) => {
        _e.push({ name: Oe, status: "synced", missing_nodes: 0, missing_models: 0, path: Oe });
      }), _e;
    }
  }
  async function W(H) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(H)}/details`);
  }
  async function S(H) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(H)}/resolve`, {
      method: "POST"
    });
  }
  async function L(H, ve, _e) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(H)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: ve, install_models: _e })
    });
  }
  async function O(H, ve, _e) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(H)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: ve, importance: _e })
    });
  }
  async function re() {
    try {
      return n("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function Z() {
    try {
      return n("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function X(H) {
    return n(`/v2/workspace/models/details/${encodeURIComponent(H)}`);
  }
  async function ce(H) {
    return n("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: H })
    });
  }
  async function J(H, ve) {
    return n(`/v2/workspace/models/${H}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ve })
    });
  }
  async function D(H, ve) {
    return n(`/v2/workspace/models/${H}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ve })
    });
  }
  async function z(H) {
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
  async function ue() {
    return n("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function ee() {
    return n("/v2/workspace/models/directory");
  }
  async function he(H) {
    return n("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: H })
    });
  }
  async function Ce(H) {
    try {
      const ve = H ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(H)}` : "/v2/comfygit/config";
      return n(ve);
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
  async function Te(H, ve) {
    const _e = ve ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(ve)}` : "/v2/comfygit/config";
    return n(_e, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(H)
    });
  }
  async function Ne(H, ve) {
    try {
      const _e = new URLSearchParams();
      return H && _e.append("level", H), ve && _e.append("lines", ve.toString()), n(`/v2/comfygit/debug/logs?${_e}`);
    } catch {
      return [];
    }
  }
  async function me(H, ve) {
    try {
      const _e = new URLSearchParams();
      return H && _e.append("level", H), ve && _e.append("lines", ve.toString()), n(`/v2/workspace/debug/logs?${_e}`);
    } catch {
      return [];
    }
  }
  async function ye() {
    return n("/v2/comfygit/debug/logs/path");
  }
  async function xe() {
    return n("/v2/workspace/debug/logs/path");
  }
  async function Q(H) {
    return n("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: H })
    });
  }
  async function ie() {
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
  async function ke(H) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(H)}/track-dev`, {
      method: "POST"
    });
  }
  async function ze(H) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(H)}/install`, {
      method: "POST"
    });
  }
  async function Qe(H) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(H)}/update`, {
      method: "POST"
    });
  }
  async function st(H) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(H)}`, {
      method: "DELETE"
    });
  }
  async function Se() {
    try {
      return n("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function Ze(H, ve) {
    return n("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: H, url: ve })
    });
  }
  async function qe(H) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}`, {
      method: "DELETE"
    });
  }
  async function je(H, ve, _e) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: ve, push_url: _e })
    });
  }
  async function lt(H) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}/fetch`, {
      method: "POST"
    });
  }
  async function te(H) {
    try {
      return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}/status`);
    } catch {
      return null;
    }
  }
  async function G(H = "skip", ve = !0) {
    return n("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: H,
        remove_extra_nodes: ve
      })
    });
  }
  async function de(H, ve) {
    const _e = ve ? `/v2/comfygit/remotes/${encodeURIComponent(H)}/pull-preview?branch=${encodeURIComponent(ve)}` : `/v2/comfygit/remotes/${encodeURIComponent(H)}/pull-preview`;
    return n(_e);
  }
  async function Fe(H, ve = {}) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}/pull`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: ve.modelStrategy || "skip",
        force: ve.force || !1,
        resolutions: ve.resolutions
      })
    });
  }
  async function Re(H, ve) {
    const _e = ve ? `/v2/comfygit/remotes/${encodeURIComponent(H)}/push-preview?branch=${encodeURIComponent(ve)}` : `/v2/comfygit/remotes/${encodeURIComponent(H)}/push-preview`;
    return n(_e);
  }
  async function fe(H, ve = {}) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}/push`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: ve.force || !1 })
    });
  }
  async function K(H, ve) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: ve })
    });
  }
  async function Y(H) {
    const ve = {
      success: 0,
      failed: []
    };
    for (const _e of H)
      try {
        await S(_e), ve.success++;
      } catch (Oe) {
        ve.failed.push({
          name: _e,
          error: Oe instanceof Error ? Oe.message : "Unknown error"
        });
      }
    return ve;
  }
  async function P(H) {
    var Oe;
    const ve = new FormData();
    if (ve.append("file", H), !((Oe = window.app) != null && Oe.api))
      throw new Error("ComfyUI API not available");
    const _e = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: ve
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!_e.ok) {
      const ot = await _e.json().catch(() => ({}));
      throw new Error(ot.error || `Preview failed: ${_e.status}`);
    }
    return _e.json();
  }
  async function F(H) {
    return n(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(H)}`
    );
  }
  async function se(H, ve, _e, Oe) {
    var Ot;
    const ot = new FormData();
    if (ot.append("file", H), ot.append("name", ve), ot.append("model_strategy", _e), ot.append("torch_backend", Oe), !((Ot = window.app) != null && Ot.api))
      throw new Error("ComfyUI API not available");
    const Tt = await window.app.api.fetchApi("/v2/workspace/import", {
      method: "POST",
      body: ot
    });
    if (!Tt.ok) {
      const j = await Tt.json().catch(() => ({}));
      throw new Error(j.message || j.error || `Import failed: ${Tt.status}`);
    }
    return Tt.json();
  }
  async function be() {
    return n("/v2/workspace/import/status");
  }
  async function Ge(H) {
    return n("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: H })
    });
  }
  async function ht(H, ve, _e, Oe) {
    return n("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: H,
        name: ve,
        model_strategy: _e,
        torch_backend: Oe
      })
    });
  }
  async function it() {
    return n("/v2/setup/status");
  }
  async function Mt(H) {
    return n("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(H)
    });
  }
  async function yt() {
    return n("/v2/setup/initialize_status");
  }
  async function Pt(H) {
    return n("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(H)
    });
  }
  async function ns() {
    return n("/v2/comfygit/deploy/summary");
  }
  async function wt() {
    return n("/v2/comfygit/deploy/runpod/data-centers");
  }
  async function as(H, ve) {
    return n("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: H, save_key: ve })
    });
  }
  async function Nt() {
    return n("/v2/comfygit/deploy/runpod/volumes");
  }
  async function ls(H) {
    const ve = H ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(H)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return n(ve);
  }
  async function is(H) {
    return n("/v2/comfygit/deploy/runpod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(H)
    });
  }
  async function rs() {
    return n("/v2/comfygit/deploy/runpod/pods");
  }
  async function ds(H) {
    return n(`/v2/comfygit/deploy/runpod/${encodeURIComponent(H)}`, {
      method: "DELETE"
    });
  }
  async function Jt(H) {
    return n("/v2/comfygit/deploy/package", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: H })
    });
  }
  async function cs() {
    return n("/v2/comfygit/deploy/runpod/key");
  }
  async function us() {
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
    getCommitDetail: h,
    checkout: k,
    createBranch: _,
    switchBranch: b,
    deleteBranch: R,
    // Environment Management
    getEnvironments: E,
    switchEnvironment: $,
    getSwitchProgress: C,
    createEnvironment: N,
    getCreateProgress: x,
    getComfyUIReleases: M,
    deleteEnvironment: q,
    // Workflow Management
    getWorkflows: A,
    getWorkflowDetails: W,
    resolveWorkflow: S,
    installWorkflowDeps: L,
    setModelImportance: O,
    // Model Management
    getEnvironmentModels: re,
    getWorkspaceModels: Z,
    getModelDetails: X,
    openFileLocation: ce,
    addModelSource: J,
    removeModelSource: D,
    deleteModel: z,
    downloadModel: I,
    scanWorkspaceModels: ue,
    getModelsDirectory: ee,
    setModelsDirectory: he,
    // Settings
    getConfig: Ce,
    updateConfig: Te,
    // Debug/Logs
    getEnvironmentLogs: Ne,
    getWorkspaceLogs: me,
    getEnvironmentLogPath: ye,
    getWorkspaceLogPath: xe,
    openFile: Q,
    // Node Management
    getNodes: ie,
    trackNodeAsDev: ke,
    installNode: ze,
    updateNode: Qe,
    uninstallNode: st,
    // Git Remotes
    getRemotes: Se,
    addRemote: Ze,
    removeRemote: qe,
    updateRemoteUrl: je,
    fetchRemote: lt,
    getRemoteSyncStatus: te,
    // Push/Pull
    getPullPreview: de,
    pullFromRemote: Fe,
    getPushPreview: Re,
    pushToRemote: fe,
    validateMerge: K,
    // Environment Sync
    syncEnvironmentManually: G,
    // Workflow Repair
    repairWorkflowModels: Y,
    // Import Operations
    previewTarballImport: P,
    previewGitImport: Ge,
    validateEnvironmentName: F,
    executeImport: se,
    executeGitImport: ht,
    getImportProgress: be,
    // First-Time Setup
    getSetupStatus: it,
    initializeWorkspace: Mt,
    getInitializeProgress: yt,
    validatePath: Pt,
    // Deploy Operations
    getDeploySummary: ns,
    getDataCenters: wt,
    testRunPodConnection: as,
    getNetworkVolumes: Nt,
    getRunPodGpuTypes: ls,
    deployToRunPod: is,
    getRunPodPods: rs,
    terminateRunPodPod: ds,
    exportDeployPackage: Jt,
    getStoredRunPodKey: cs,
    clearRunPodKey: us
  };
}
async function Ft(t, c = {}, n = 5e3) {
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
function Ws() {
  const t = y(null);
  async function c() {
    try {
      const u = await Ft(
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
      const u = await Ft(
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
      const u = await Ft(
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
    if (!(await Ft(
      `http://127.0.0.1:${t.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function p() {
    if (t.value || (t.value = await c()), !t.value)
      throw new Error("Control port not available");
    if (!(await Ft(
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
}, xl = /* @__PURE__ */ ne({
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
    return Ae(() => {
      document.addEventListener("keydown", p), document.body.style.overflow = "hidden";
    }), As(() => {
      document.removeEventListener("keydown", p), document.body.style.overflow = "";
    }), (u, m) => (s(), T(He, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: f
      }, [
        e("div", {
          class: pe(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: m[1] || (m[1] = Ue(() => {
          }, ["stop"]))
        }, [
          e("div", wl, [
            Ee(u.$slots, "header", {}, () => [
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
            t.loading ? (s(), o("div", _l, "Loading...")) : t.error ? (s(), o("div", $l, a(t.error), 1)) : Ee(u.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          u.$slots.footer ? (s(), o("div", Cl, [
            Ee(u.$slots, "footer", {}, void 0, !0)
          ])) : r("", !0)
        ], 2)
      ])
    ]));
  }
}), et = /* @__PURE__ */ le(xl, [["__scopeId", "data-v-8dab1081"]]), Sl = ["type", "disabled"], Il = {
  key: 0,
  class: "spinner"
}, El = /* @__PURE__ */ ne({
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
      class: pe(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: n[0] || (n[0] = (i) => c.$emit("click", i))
    }, [
      t.loading ? (s(), o("span", Il)) : r("", !0),
      Ee(c.$slots, "default", {}, void 0, !0)
    ], 10, Sl));
  }
}), ge = /* @__PURE__ */ le(El, [["__scopeId", "data-v-f3452606"]]), Ml = {
  key: 0,
  class: "base-title-count"
}, Pl = /* @__PURE__ */ ne({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (c, n) => (s(), T(ks(`h${t.level}`), {
      class: pe(["base-title", t.variant])
    }, {
      default: l(() => [
        Ee(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", Ml, "(" + a(t.count) + ")", 1)) : r("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), jt = /* @__PURE__ */ le(Pl, [["__scopeId", "data-v-5a01561d"]]), Tl = ["value", "disabled"], Rl = {
  key: 0,
  value: "",
  disabled: ""
}, Ll = ["value"], zl = {
  key: 0,
  class: "base-select-error"
}, Dl = /* @__PURE__ */ ne({
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
      class: pe(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: pe(["base-select", { error: !!t.error }]),
        onChange: f[0] || (f[0] = (p) => i.$emit("update:modelValue", p.target.value))
      }, [
        t.placeholder ? (s(), o("option", Rl, a(t.placeholder), 1)) : r("", !0),
        (s(!0), o(V, null, ae(t.options, (p) => (s(), o("option", {
          key: c(p),
          value: c(p)
        }, a(n(p)), 9, Ll))), 128))
      ], 42, Tl),
      t.error ? (s(), o("span", zl, a(t.error), 1)) : r("", !0)
    ], 2));
  }
}), Ul = /* @__PURE__ */ le(Dl, [["__scopeId", "data-v-7436d745"]]), Nl = { class: "popover-header" }, Ol = { class: "popover-title" }, Bl = { class: "popover-content" }, Al = {
  key: 0,
  class: "popover-actions"
}, Fl = /* @__PURE__ */ ne({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (c, n) => (s(), T(He, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "popover-overlay",
        onClick: n[2] || (n[2] = (i) => c.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: _t({ maxWidth: t.maxWidth }),
          onClick: n[1] || (n[1] = Ue(() => {
          }, ["stop"]))
        }, [
          e("div", Nl, [
            e("h4", Ol, a(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: n[0] || (n[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", Bl, [
            Ee(c.$slots, "content", {}, void 0, !0)
          ]),
          c.$slots.actions ? (s(), o("div", Al, [
            Ee(c.$slots, "actions", {}, void 0, !0)
          ])) : r("", !0)
        ], 4)
      ])) : r("", !0)
    ]));
  }
}), mt = /* @__PURE__ */ le(Fl, [["__scopeId", "data-v-42815ace"]]), Vl = { class: "detail-section" }, Wl = {
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
}, ri = /* @__PURE__ */ ne({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(t, { emit: c }) {
    const n = t, i = c, { getWorkflowDetails: f, setModelImportance: p, openFileLocation: u } = We(), m = y(null), d = y(!1), v = y(null), h = y(!1), k = y({}), _ = y(!1), b = y(/* @__PURE__ */ new Set()), R = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function E(S) {
      switch (S) {
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
    function $(S) {
      switch (S) {
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
    function C(S) {
      if (!S.loaded_by || S.loaded_by.length === 0) return [];
      const L = S.hash || S.filename;
      return b.value.has(L) ? S.loaded_by : S.loaded_by.slice(0, 3);
    }
    function N(S) {
      return b.value.has(S);
    }
    function x(S) {
      b.value.has(S) ? b.value.delete(S) : b.value.add(S), b.value = new Set(b.value);
    }
    async function M() {
      d.value = !0, v.value = null;
      try {
        m.value = await f(n.workflowName);
      } catch (S) {
        v.value = S instanceof Error ? S.message : "Failed to load workflow details";
      } finally {
        d.value = !1;
      }
    }
    function q(S, L) {
      k.value[S] = L, h.value = !0;
    }
    async function A(S) {
      try {
        await u(S);
      } catch (L) {
        v.value = L instanceof Error ? L.message : "Failed to open file location";
      }
    }
    async function W() {
      if (!h.value) {
        i("close");
        return;
      }
      d.value = !0, v.value = null;
      try {
        for (const [S, L] of Object.entries(k.value))
          await p(n.workflowName, S, L);
        i("refresh"), i("close");
      } catch (S) {
        v.value = S instanceof Error ? S.message : "Failed to save changes";
      } finally {
        d.value = !1;
      }
    }
    return Ae(M), (S, L) => (s(), o(V, null, [
      w(et, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: d.value,
        error: v.value || void 0,
        onClose: L[4] || (L[4] = (O) => i("close"))
      }, {
        body: l(() => [
          m.value ? (s(), o(V, { key: 0 }, [
            e("section", Vl, [
              w(jt, { variant: "section" }, {
                default: l(() => [
                  g("MODELS USED (" + a(m.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.models.length === 0 ? (s(), o("div", Wl, " No models used in this workflow ")) : r("", !0),
              (s(!0), o(V, null, ae(m.value.models, (O) => {
                var re;
                return s(), o("div", {
                  key: O.hash || O.filename,
                  class: "model-card"
                }, [
                  e("div", Gl, [
                    L[6] || (L[6] = e("span", { class: "model-icon" }, "📦", -1)),
                    e("span", jl, a(O.filename), 1)
                  ]),
                  e("div", Hl, [
                    e("div", Kl, [
                      L[7] || (L[7] = e("span", { class: "label" }, "Status:", -1)),
                      e("span", {
                        class: pe(["value", E(O.status)])
                      }, a($(O.status)), 3)
                    ]),
                    e("div", ql, [
                      e("span", Yl, [
                        L[8] || (L[8] = g(" Importance: ", -1)),
                        w(Fs, {
                          size: 14,
                          title: "About importance levels",
                          onClick: L[0] || (L[0] = (Z) => _.value = !0)
                        })
                      ]),
                      w(Ul, {
                        "model-value": k.value[O.filename] || O.importance,
                        options: R,
                        "onUpdate:modelValue": (Z) => q(O.filename, Z)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    O.loaded_by && O.loaded_by.length > 0 ? (s(), o("div", Jl, [
                      L[9] || (L[9] = e("span", { class: "label" }, "Loaded by:", -1)),
                      e("div", Xl, [
                        (s(!0), o(V, null, ae(C(O), (Z, X) => (s(), o("div", {
                          key: `${Z.node_id}-${X}`,
                          class: "node-reference"
                        }, a(Z.node_type) + " (Node #" + a(Z.node_id) + ") ", 1))), 128)),
                        O.loaded_by.length > 3 ? (s(), o("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (Z) => x(O.hash || O.filename)
                        }, a(N(O.hash || O.filename) ? "▼ Show less" : `▶ View all (${O.loaded_by.length})`), 9, Ql)) : r("", !0)
                      ])
                    ])) : r("", !0),
                    O.size_mb ? (s(), o("div", Zl, [
                      L[10] || (L[10] = e("span", { class: "label" }, "Size:", -1)),
                      e("span", ei, a(O.size_mb) + " MB", 1)
                    ])) : r("", !0),
                    O.has_category_mismatch ? (s(), o("div", ti, [
                      L[13] || (L[13] = e("span", { class: "label" }, "Location issue:", -1)),
                      e("span", si, [
                        L[11] || (L[11] = g(" In ", -1)),
                        e("code", null, a(O.actual_category) + "/", 1),
                        L[12] || (L[12] = g(" but loader needs ", -1)),
                        e("code", null, a((re = O.expected_categories) == null ? void 0 : re[0]) + "/", 1)
                      ])
                    ])) : r("", !0)
                  ]),
                  O.status !== "available" ? (s(), o("div", oi, [
                    O.status === "downloadable" ? (s(), T(ge, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: L[1] || (L[1] = (Z) => i("resolve"))
                    }, {
                      default: l(() => [...L[14] || (L[14] = [
                        g(" Download ", -1)
                      ])]),
                      _: 1
                    })) : O.status === "category_mismatch" && O.file_path ? (s(), T(ge, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (Z) => A(O.file_path)
                    }, {
                      default: l(() => [...L[15] || (L[15] = [
                        g(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : O.status !== "path_mismatch" ? (s(), T(ge, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: L[2] || (L[2] = (Z) => i("resolve"))
                    }, {
                      default: l(() => [...L[16] || (L[16] = [
                        g(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : r("", !0)
                  ])) : r("", !0)
                ]);
              }), 128))
            ]),
            e("section", ni, [
              w(jt, { variant: "section" }, {
                default: l(() => [
                  g("NODES USED (" + a(m.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.nodes.length === 0 ? (s(), o("div", ai, " No custom nodes used in this workflow ")) : r("", !0),
              (s(!0), o(V, null, ae(m.value.nodes, (O) => (s(), o("div", {
                key: O.name,
                class: "node-item"
              }, [
                e("span", {
                  class: pe(["node-status", O.status === "installed" ? "installed" : "missing"])
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
            onClick: L[3] || (L[3] = (O) => i("close"))
          }, {
            default: l(() => [...L[17] || (L[17] = [
              g(" Close ", -1)
            ])]),
            _: 1
          }),
          h.value ? (s(), T(ge, {
            key: 0,
            variant: "primary",
            onClick: W
          }, {
            default: l(() => [...L[18] || (L[18] = [
              g(" Save Changes ", -1)
            ])]),
            _: 1
          })) : r("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      w(mt, {
        show: _.value,
        title: "Model Importance Levels",
        onClose: L[5] || (L[5] = (O) => _.value = !1)
      }, {
        content: l(() => [...L[19] || (L[19] = [
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
}), di = /* @__PURE__ */ le(ri, [["__scopeId", "data-v-668728e6"]]), Pe = os({
  items: [],
  status: "idle"
});
let ft = null;
function Gs() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function ms(t) {
  return Pe.items.find((c) => c.id === t);
}
async function Lt() {
  if (Pe.status === "downloading") return;
  const t = Pe.items.find((c) => c.status === "queued");
  if (!t) {
    Pe.status = "idle";
    return;
  }
  Pe.status = "downloading", t.status = "downloading", t.progress = 0, t.downloaded = 0;
  try {
    await ci(t), t.status = "completed", t.progress = 100;
  } catch (c) {
    t.status = "failed", t.error = c instanceof Error ? c.message : "Download failed", t.retries++;
  } finally {
    Pe.status = "idle", Lt();
  }
}
async function ci(t) {
  return new Promise((c, n) => {
    ft && (ft.close(), ft = null);
    const i = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), f = new EventSource(`/v2/comfygit/models/download-stream?${i}`);
    ft = f;
    let p = Date.now(), u = 0, m = !1;
    f.onmessage = (d) => {
      try {
        const v = JSON.parse(d.data);
        switch (v.type) {
          case "progress":
            t.downloaded = v.downloaded || 0, t.size = v.total || t.size;
            const h = Date.now(), k = (h - p) / 1e3;
            if (k > 0.5) {
              const _ = t.downloaded - u;
              if (t.speed = _ / k, p = h, u = t.downloaded, t.speed > 0 && t.size > 0) {
                const b = t.size - t.downloaded;
                t.eta = b / t.speed;
              }
            }
            t.size > 0 && (t.progress = Math.round(t.downloaded / t.size * 100));
            break;
          case "complete":
            m = !0, f.close(), ft = null, c();
            break;
          case "error":
            m = !0, f.close(), ft = null, n(new Error(v.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, f.onerror = () => {
      f.close(), ft = null, m || n(new Error("Connection lost"));
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
      if (Pe.items.some((f) => f.url === n.url && f.filename === n.filename))
        continue;
      const i = {
        id: Gs(),
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
      Pe.items.push(i);
    }
    console.log(`[ComfyGit] Loaded ${c.pending_downloads.length} pending download(s)`);
  } catch (t) {
    console.warn("[ComfyGit] Failed to load pending downloads:", t);
  }
}
function qt() {
  function t($) {
    for (const C of $) {
      if (Pe.items.some(
        (M) => M.url === C.url && M.targetPath === C.targetPath && ["queued", "downloading", "paused", "completed"].includes(M.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${C.filename}`);
        continue;
      }
      const x = {
        id: Gs(),
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
      Pe.items.push(x);
    }
    Pe.status === "idle" && Lt();
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
        ft && (ft.close(), ft = null), C.status = "failed", C.error = "Cancelled by user", Pe.status = "idle", Lt();
      } else if (C.status === "queued") {
        const N = Pe.items.findIndex((x) => x.id === $);
        N >= 0 && Pe.items.splice(N, 1);
      }
    }
  }
  function n($) {
    const C = ms($);
    !C || C.status !== "failed" || (C.status = "queued", C.error = void 0, C.progress = 0, C.downloaded = 0, Pe.status === "idle" && Lt());
  }
  function i($) {
    const C = ms($);
    !C || C.status !== "paused" || (C.status = "queued", Pe.status === "idle" && Lt());
  }
  function f() {
    const $ = Pe.items.filter((C) => C.status === "paused");
    for (const C of $)
      C.status = "queued";
    Pe.status === "idle" && Lt();
  }
  function p($) {
    const C = Pe.items.findIndex((N) => N.id === $);
    C >= 0 && ["completed", "failed", "paused"].includes(Pe.items[C].status) && Pe.items.splice(C, 1);
  }
  function u() {
    Pe.items = Pe.items.filter(($) => $.status !== "completed");
  }
  function m() {
    Pe.items = Pe.items.filter(($) => $.status !== "failed");
  }
  const d = U(
    () => Pe.items.find(($) => $.status === "downloading")
  ), v = U(
    () => Pe.items.filter(($) => $.status === "queued")
  ), h = U(
    () => Pe.items.filter(($) => $.status === "completed")
  ), k = U(
    () => Pe.items.filter(($) => $.status === "failed")
  ), _ = U(
    () => Pe.items.filter(($) => $.status === "paused")
  ), b = U(() => Pe.items.length > 0), R = U(
    () => Pe.items.filter(($) => $.status === "queued" || $.status === "downloading").length
  ), E = U(
    () => Pe.items.some(($) => $.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: uo(Pe),
    // Computed
    currentDownload: d,
    queuedItems: v,
    completedItems: h,
    failedItems: k,
    pausedItems: _,
    hasItems: b,
    activeCount: R,
    hasPaused: E,
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
function js() {
  const t = y(null), c = y(null), n = y([]), i = y([]), f = y(!1), p = y(null);
  async function u(N, x) {
    var q;
    if (!((q = window.app) != null && q.api))
      throw new Error("ComfyUI API not available");
    const M = await window.app.api.fetchApi(N, x);
    if (!M.ok) {
      const A = await M.json().catch(() => ({})), W = A.error || A.message || `Request failed: ${M.status}`;
      throw new Error(W);
    }
    return M.json();
  }
  async function m(N) {
    f.value = !0, p.value = null;
    try {
      let x;
      return At() || (x = await u(
        `/v2/comfygit/workflow/${N}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), t.value = x, x;
    } catch (x) {
      const M = x instanceof Error ? x.message : "Unknown error occurred";
      throw p.value = M, x;
    } finally {
      f.value = !1;
    }
  }
  async function d(N, x, M, q) {
    f.value = !0, p.value = null;
    try {
      let A;
      if (!At()) {
        const W = Object.fromEntries(x), S = Object.fromEntries(M), L = q ? Array.from(q) : [];
        A = await u(
          `/v2/comfygit/workflow/${N}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: W,
              model_choices: S,
              skipped_packages: L
            })
          }
        );
      }
      return c.value = A, A;
    } catch (A) {
      const W = A instanceof Error ? A.message : "Unknown error occurred";
      throw p.value = W, A;
    } finally {
      f.value = !1;
    }
  }
  async function v(N, x = 10) {
    f.value = !0, p.value = null;
    try {
      let M;
      return At() || (M = await u(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: N, limit: x })
        }
      )), n.value = M.results, M.results;
    } catch (M) {
      const q = M instanceof Error ? M.message : "Unknown error occurred";
      throw p.value = q, M;
    } finally {
      f.value = !1;
    }
  }
  async function h(N, x = 10) {
    f.value = !0, p.value = null;
    try {
      let M;
      return At() || (M = await u(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: N, limit: x })
        }
      )), i.value = M.results, M.results;
    } catch (M) {
      const q = M instanceof Error ? M.message : "Unknown error occurred";
      throw p.value = q, M;
    } finally {
      f.value = !1;
    }
  }
  const k = os({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function _() {
    k.phase = "idle", k.currentFile = void 0, k.currentFileIndex = void 0, k.totalFiles = void 0, k.bytesDownloaded = void 0, k.bytesTotal = void 0, k.completedFiles = [], k.nodesToInstall = [], k.nodesInstalled = [], k.installError = void 0, k.needsRestart = void 0, k.error = void 0, k.nodeInstallProgress = void 0;
  }
  async function b(N) {
    k.phase = "installing", k.nodesInstalled = [], k.installError = void 0, k.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return At(), await R(N);
    } catch (x) {
      const M = x instanceof Error ? x.message : "Failed to install nodes";
      throw k.installError = M, x;
    }
  }
  async function R(N) {
    var M;
    const x = await u(
      `/v2/comfygit/workflow/${N}/install`,
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
      const q = new Map(((M = x.failed) == null ? void 0 : M.map((A) => [A.node_id, A.error])) || []);
      for (let A = 0; A < k.nodesToInstall.length; A++) {
        const W = k.nodesToInstall[A], S = q.get(W);
        k.nodeInstallProgress.completedNodes.push({
          node_id: W,
          success: !S,
          error: S
        });
      }
    }
    return k.nodesInstalled = x.nodes_installed, k.needsRestart = x.nodes_installed.length > 0, x.failed && x.failed.length > 0 && (k.installError = `${x.failed.length} package(s) failed to install`), x;
  }
  async function E(N, x, M) {
    _(), k.phase = "resolving", p.value = null;
    const q = Object.fromEntries(x), A = Object.fromEntries(M);
    try {
      const W = await fetch(`/v2/comfygit/workflow/${N}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: q,
          model_choices: A
        })
      });
      if (!W.ok)
        throw new Error(`Request failed: ${W.status}`);
      if (!W.body)
        throw new Error("No response body");
      const S = W.body.getReader(), L = new TextDecoder();
      let O = "";
      for (; ; ) {
        const { done: re, value: Z } = await S.read();
        if (re) break;
        O += L.decode(Z, { stream: !0 });
        const X = O.split(`

`);
        O = X.pop() || "";
        for (const ce of X) {
          if (!ce.trim()) continue;
          const J = ce.split(`
`);
          let D = "", z = "";
          for (const I of J)
            I.startsWith("event: ") ? D = I.slice(7) : I.startsWith("data: ") && (z = I.slice(6));
          if (z)
            try {
              const I = JSON.parse(z);
              $(D, I);
            } catch (I) {
              console.warn("Failed to parse SSE event:", I);
            }
        }
      }
    } catch (W) {
      const S = W instanceof Error ? W.message : "Unknown error occurred";
      throw p.value = S, k.error = S, k.phase = "error", W;
    }
  }
  function $(N, x) {
    switch (N) {
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
  function C(N, x) {
    const { addToQueue: M } = qt(), q = x.filter((A) => A.url && A.target_path).map((A) => ({
      workflow: N,
      filename: A.filename,
      url: A.url,
      targetPath: A.target_path,
      size: A.size || 0,
      type: "model"
    }));
    return q.length > 0 && M(q), q.length;
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
    applyResolutionWithProgress: E,
    installNodes: b,
    searchNodes: v,
    searchModels: h,
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
}, wi = { class: "stepper-content" }, ki = /* @__PURE__ */ ne({
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
      var h;
      if ((h = n.stepStats) != null && h[v]) {
        const k = n.stepStats[v];
        return k.total > 0 && k.resolved === k.total;
      }
      return n.completedSteps.includes(v);
    }
    function p(v) {
      var h;
      if ((h = n.stepStats) != null && h[v]) {
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
    return (v, h) => (s(), o("div", mi, [
      e("div", vi, [
        (s(!0), o(V, null, ae(t.steps, (k, _) => (s(), o("div", {
          key: k.id,
          class: pe(["step", {
            active: t.currentStep === k.id,
            completed: f(k.id),
            "in-progress": p(k.id),
            disabled: m(k.id)
          }]),
          onClick: (b) => d(k.id)
        }, [
          e("div", {
            class: pe(["step-indicator", u(k.id)])
          }, [
            f(k.id) ? (s(), o("span", pi, "✓")) : (s(), o("span", gi, a(_ + 1), 1))
          ], 2),
          e("div", hi, a(k.label), 1),
          _ < t.steps.length - 1 ? (s(), o("div", yi)) : r("", !0)
        ], 10, fi))), 128))
      ]),
      e("div", wi, [
        Ee(v.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), bi = /* @__PURE__ */ le(ki, [["__scopeId", "data-v-2a7b3af8"]]), _i = /* @__PURE__ */ ne({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const c = t, n = U(() => c.confidence >= 0.9 ? "high" : c.confidence >= 0.7 ? "medium" : "low"), i = U(() => `confidence-${n.value}`), f = U(() => c.showPercentage ? `${Math.round(c.confidence * 100)}%` : n.value.charAt(0).toUpperCase() + n.value.slice(1));
    return (p, u) => (s(), o("span", {
      class: pe(["confidence-badge", i.value, t.size])
    }, a(f.value), 3));
  }
}), ts = /* @__PURE__ */ le(_i, [["__scopeId", "data-v-17ec4b80"]]), $i = { class: "node-info" }, Ci = { class: "node-info-text" }, xi = { class: "item-body" }, Si = {
  key: 0,
  class: "resolved-state"
}, Ii = {
  key: 1,
  class: "multiple-options"
}, Ei = { class: "options-list" }, Mi = ["onClick"], Pi = ["name", "value", "checked", "onChange"], Ti = { class: "option-content" }, Ri = { class: "option-header" }, Li = { class: "option-package-id" }, zi = {
  key: 0,
  class: "option-title"
}, Di = { class: "option-meta" }, Ui = {
  key: 0,
  class: "installed-badge"
}, Ni = { class: "action-buttons" }, Oi = {
  key: 2,
  class: "unresolved"
}, Bi = {
  key: 0,
  class: "searching-state"
}, Ai = { class: "options-list" }, Fi = ["onClick"], Vi = ["name", "value"], Wi = { class: "option-content" }, Gi = { class: "option-header" }, ji = { class: "option-package-id" }, Hi = {
  key: 0,
  class: "option-description"
}, Ki = { class: "option-meta" }, qi = {
  key: 0,
  class: "installed-badge"
}, Yi = {
  key: 2,
  class: "unresolved-message"
}, Ji = { class: "action-buttons" }, Xi = /* @__PURE__ */ ne({
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
      class: pe(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: p.value }])
    }, [
      e("div", $i, [
        e("span", Ci, [
          v[7] || (v[7] = g("Node type: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: pe(["status-badge", u.value])
        }, a(t.statusLabel), 3)) : r("", !0)
      ]),
      e("div", xi, [
        p.value ? (s(), o("div", Si, [
          w(ge, {
            variant: "ghost",
            size: "sm",
            onClick: v[0] || (v[0] = (h) => i("clear-choice"))
          }, {
            default: l(() => [...v[8] || (v[8] = [
              g(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", Ii, [
          v[12] || (v[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", Ei, [
            (s(!0), o(V, null, ae(t.options, (h, k) => (s(), o("label", {
              key: h.package_id,
              class: pe(["option-card", { selected: t.selectedOptionIndex === k }]),
              onClick: (_) => m(k)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: k,
                checked: t.selectedOptionIndex === k,
                onChange: (_) => m(k)
              }, null, 40, Pi),
              e("div", Ti, [
                e("div", Ri, [
                  e("span", Li, a(h.package_id), 1),
                  w(ts, {
                    confidence: h.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                h.title && h.title !== h.package_id ? (s(), o("div", zi, a(h.title), 1)) : r("", !0),
                e("div", Di, [
                  h.is_installed ? (s(), o("span", Ui, "Already Installed")) : r("", !0)
                ])
              ])
            ], 10, Mi))), 128))
          ]),
          e("div", Ni, [
            w(ge, {
              variant: "secondary",
              size: "sm",
              onClick: v[1] || (v[1] = (h) => i("search"))
            }, {
              default: l(() => [...v[9] || (v[9] = [
                g(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            w(ge, {
              variant: "secondary",
              size: "sm",
              onClick: v[2] || (v[2] = (h) => i("manual-entry"))
            }, {
              default: l(() => [...v[10] || (v[10] = [
                g(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            w(ge, {
              variant: "secondary",
              size: "sm",
              onClick: v[3] || (v[3] = (h) => i("mark-optional"))
            }, {
              default: l(() => [...v[11] || (v[11] = [
                g(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", Oi, [
          t.isSearching ? (s(), o("div", Bi, [...v[13] || (v[13] = [
            e("span", { class: "searching-spinner" }, null, -1),
            e("span", null, "Searching registry...", -1)
          ])])) : t.searchResults && t.searchResults.length > 0 ? (s(), o(V, { key: 1 }, [
            v[14] || (v[14] = e("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            e("div", Ai, [
              (s(!0), o(V, null, ae(t.searchResults.slice(0, 5), (h, k) => (s(), o("label", {
                key: h.package_id,
                class: "option-card",
                onClick: (_) => i("search-result-selected", h)
              }, [
                e("input", {
                  type: "radio",
                  name: `search-result-${t.nodeType}`,
                  value: k
                }, null, 8, Vi),
                e("div", Wi, [
                  e("div", Gi, [
                    e("span", ji, a(h.package_id), 1),
                    w(ts, {
                      confidence: h.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  h.description ? (s(), o("div", Hi, a(f(h.description)), 1)) : r("", !0),
                  e("div", Ki, [
                    h.is_installed ? (s(), o("span", qi, "Already Installed")) : r("", !0)
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
              onClick: v[4] || (v[4] = (h) => i("search"))
            }, {
              default: l(() => {
                var h;
                return [
                  g(a((h = t.searchResults) != null && h.length ? "Refine Search" : "Search Registry"), 1)
                ];
              }),
              _: 1
            }),
            w(ge, {
              variant: "secondary",
              size: "sm",
              onClick: v[5] || (v[5] = (h) => i("manual-entry"))
            }, {
              default: l(() => [...v[16] || (v[16] = [
                g(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            w(ge, {
              variant: "secondary",
              size: "sm",
              onClick: v[6] || (v[6] = (h) => i("mark-optional"))
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
}), Qi = /* @__PURE__ */ le(Xi, [["__scopeId", "data-v-c2997d1d"]]), Zi = { class: "item-navigator" }, er = { class: "nav-item-info" }, tr = ["title"], sr = { class: "nav-controls" }, or = { class: "nav-arrows" }, nr = ["disabled"], ar = ["disabled"], lr = { class: "nav-position" }, ir = /* @__PURE__ */ ne({
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
}), Hs = /* @__PURE__ */ le(ir, [["__scopeId", "data-v-74af7920"]]), rr = ["type", "value", "placeholder", "disabled"], dr = {
  key: 0,
  class: "base-input-error"
}, cr = /* @__PURE__ */ ne({
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
      class: pe(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: pe(["base-input", { error: !!t.error }]),
        onInput: n[0] || (n[0] = (i) => c.$emit("update:modelValue", i.target.value)),
        onKeyup: [
          n[1] || (n[1] = pt((i) => c.$emit("enter"), ["enter"])),
          n[2] || (n[2] = pt((i) => c.$emit("escape"), ["escape"]))
        ]
      }, null, 42, rr),
      t.error ? (s(), o("span", dr, a(t.error), 1)) : r("", !0)
    ], 2));
  }
}), ct = /* @__PURE__ */ le(cr, [["__scopeId", "data-v-9ba02cdc"]]), ur = { class: "node-resolution-step" }, mr = {
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
}, Er = { class: "node-modal-body" }, Mr = { class: "node-search-results-container" }, Pr = {
  key: 0,
  class: "node-search-results"
}, Tr = ["onClick"], Rr = { class: "node-result-header" }, Lr = { class: "node-result-package-id" }, zr = {
  key: 0,
  class: "node-result-description"
}, Dr = {
  key: 1,
  class: "node-empty-state"
}, Ur = {
  key: 2,
  class: "node-empty-state"
}, Nr = {
  key: 3,
  class: "node-empty-state"
}, Or = { class: "node-manual-entry-modal" }, Br = { class: "node-modal-body" }, Ar = { class: "node-modal-actions" }, Fr = /* @__PURE__ */ ne({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(t, { emit: c }) {
    const n = t, i = c, { searchNodes: f } = js(), p = y(0), u = y(!1), m = y(!1), d = y(""), v = y(""), h = y([]), k = y(!1), _ = y(/* @__PURE__ */ new Map()), b = y(/* @__PURE__ */ new Set()), R = y(!1);
    function E() {
      R.value && z(), R.value = !1;
    }
    const $ = U(() => n.nodes[p.value]), C = U(() => n.nodes.filter((me) => n.nodeChoices.has(me.node_type)).length), N = U(() => $.value ? _.value.get($.value.node_type) || [] : []), x = U(() => $.value ? b.value.has($.value.node_type) : !1);
    gt($, async (me) => {
      var ye;
      me && ((ye = me.options) != null && ye.length || _.value.has(me.node_type) || b.value.has(me.node_type) || n.nodeChoices.has(me.node_type) || await M(me.node_type));
    }, { immediate: !0 });
    async function M(me) {
      b.value.add(me);
      try {
        const ye = await f(me, 5);
        _.value.set(me, ye);
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
    function W(me) {
      i("package-skip", me);
    }
    const S = U(() => {
      var ye;
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
      return (ye = $.value.options) != null && ye.length ? "ambiguous" : "not-found";
    }), L = U(() => {
      var ye;
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
      return (ye = $.value.options) != null && ye.length ? `${$.value.options.length} matches` : "Not Found";
    });
    function O(me) {
      me >= 0 && me < n.nodes.length && (p.value = me);
    }
    function re() {
      $.value && i("mark-optional", $.value.node_type);
    }
    function Z() {
      $.value && i("skip", $.value.node_type);
    }
    function X(me) {
      $.value && i("option-selected", $.value.node_type, me);
    }
    function ce() {
      $.value && i("clear-choice", $.value.node_type);
    }
    function J() {
      $.value && (d.value = $.value.node_type, h.value = N.value, u.value = !0, he(d.value));
    }
    function D() {
      v.value = "", m.value = !0;
    }
    function z() {
      u.value = !1, d.value = "", h.value = [];
    }
    function I() {
      m.value = !1, v.value = "";
    }
    let ue = null;
    function ee() {
      ue && clearTimeout(ue), ue = setTimeout(() => {
        he(d.value);
      }, 300);
    }
    async function he(me) {
      if (!me.trim()) {
        h.value = [];
        return;
      }
      k.value = !0;
      try {
        h.value = await f(me, 10);
      } catch {
        h.value = [];
      } finally {
        k.value = !1;
      }
    }
    function Ce(me) {
      $.value && (i("manual-entry", $.value.node_type, me.package_id), z());
    }
    function Te(me) {
      $.value && i("manual-entry", $.value.node_type, me.package_id);
    }
    function Ne() {
      !$.value || !v.value.trim() || (i("manual-entry", $.value.node_type, v.value.trim()), I());
    }
    return (me, ye) => {
      var xe, Q;
      return s(), o("div", ur, [
        t.autoResolvedPackages.length > 0 ? (s(), o("div", mr, [
          e("div", vr, [
            ye[6] || (ye[6] = e("div", { class: "section-info" }, [
              e("h4", { class: "section-title" }, "Packages to Install"),
              e("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            e("span", fr, a(q.value) + "/" + a(t.autoResolvedPackages.length) + " to install", 1)
          ]),
          e("div", pr, [
            (s(!0), o(V, null, ae(t.autoResolvedPackages, (ie) => (s(), o("div", {
              key: ie.package_id,
              class: "resolved-package-item"
            }, [
              e("div", gr, [
                e("code", hr, a(ie.package_id), 1),
                e("span", yr, a(ie.node_types_count) + " node type" + a(ie.node_types_count > 1 ? "s" : ""), 1)
              ]),
              e("div", wr, [
                A(ie.package_id) ? (s(), o("span", br, " SKIPPED ")) : (s(), o("span", kr, " WILL INSTALL ")),
                e("button", {
                  class: "toggle-skip-btn",
                  onClick: (ke) => W(ie.package_id)
                }, a(A(ie.package_id) ? "Include" : "Skip"), 9, _r)
              ])
            ]))), 128))
          ])
        ])) : r("", !0),
        t.autoResolvedPackages.length > 0 && t.nodes.length > 0 ? (s(), o("div", $r)) : r("", !0),
        t.nodes.length > 0 ? (s(), o(V, { key: 2 }, [
          e("div", Cr, [
            ye[7] || (ye[7] = e("div", { class: "step-info" }, [
              e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            e("span", xr, a(C.value) + "/" + a(t.nodes.length) + " resolved", 1)
          ]),
          $.value ? (s(), T(Hs, {
            key: 0,
            "item-name": $.value.node_type,
            "current-index": p.value,
            "total-items": t.nodes.length,
            onPrev: ye[0] || (ye[0] = (ie) => O(p.value - 1)),
            onNext: ye[1] || (ye[1] = (ie) => O(p.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : r("", !0),
          $.value ? (s(), o("div", Sr, [
            w(Qi, {
              "node-type": $.value.node_type,
              "has-multiple-options": !!((xe = $.value.options) != null && xe.length),
              options: $.value.options,
              choice: (Q = t.nodeChoices) == null ? void 0 : Q.get($.value.node_type),
              status: S.value,
              "status-label": L.value,
              "search-results": N.value,
              "is-searching": x.value,
              onMarkOptional: re,
              onSkip: Z,
              onManualEntry: D,
              onSearch: J,
              onOptionSelected: X,
              onClearChoice: ce,
              onSearchResultSelected: Te
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching"])
          ])) : r("", !0)
        ], 64)) : r("", !0),
        t.nodes.length === 0 && t.autoResolvedPackages.length === 0 ? (s(), o("div", Ir, [...ye[8] || (ye[8] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])) : r("", !0),
        (s(), T(He, { to: "body" }, [
          u.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: ye[4] || (ye[4] = Ue((ie) => R.value = !0, ["self"])),
            onMouseup: Ue(E, ["self"])
          }, [
            e("div", {
              class: "node-search-modal",
              onMousedown: ye[3] || (ye[3] = (ie) => R.value = !1)
            }, [
              e("div", { class: "node-modal-header" }, [
                ye[9] || (ye[9] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: z
                }, "✕")
              ]),
              e("div", Er, [
                w(ct, {
                  modelValue: d.value,
                  "onUpdate:modelValue": ye[2] || (ye[2] = (ie) => d.value = ie),
                  placeholder: "Search by node type, package name...",
                  onInput: ee
                }, null, 8, ["modelValue"]),
                e("div", Mr, [
                  h.value.length > 0 ? (s(), o("div", Pr, [
                    (s(!0), o(V, null, ae(h.value, (ie) => (s(), o("div", {
                      key: ie.package_id,
                      class: "node-search-result-item",
                      onClick: (ke) => Ce(ie)
                    }, [
                      e("div", Rr, [
                        e("code", Lr, a(ie.package_id), 1),
                        ie.match_confidence ? (s(), T(ts, {
                          key: 0,
                          confidence: ie.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : r("", !0)
                      ]),
                      ie.description ? (s(), o("div", zr, a(ie.description), 1)) : r("", !0)
                    ], 8, Tr))), 128))
                  ])) : k.value ? (s(), o("div", Dr, "Searching...")) : d.value ? (s(), o("div", Ur, 'No packages found matching "' + a(d.value) + '"', 1)) : (s(), o("div", Nr, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : r("", !0)
        ])),
        (s(), T(He, { to: "body" }, [
          m.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: Ue(I, ["self"])
          }, [
            e("div", Or, [
              e("div", { class: "node-modal-header" }, [
                ye[10] || (ye[10] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: I
                }, "✕")
              ]),
              e("div", Br, [
                w(ct, {
                  modelValue: v.value,
                  "onUpdate:modelValue": ye[5] || (ye[5] = (ie) => v.value = ie),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", Ar, [
                  w(ge, {
                    variant: "secondary",
                    onClick: I
                  }, {
                    default: l(() => [...ye[11] || (ye[11] = [
                      g("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  w(ge, {
                    variant: "primary",
                    disabled: !v.value.trim(),
                    onClick: Ne
                  }, {
                    default: l(() => [...ye[12] || (ye[12] = [
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
}), Vr = /* @__PURE__ */ le(Fr, [["__scopeId", "data-v-281581bc"]]), Wr = { class: "node-info" }, Gr = { class: "node-info-text" }, jr = { class: "item-body" }, Hr = {
  key: 0,
  class: "resolved-state"
}, Kr = {
  key: 1,
  class: "multiple-options"
}, qr = { class: "options-list" }, Yr = ["onClick"], Jr = ["name", "value", "checked", "onChange"], Xr = { class: "option-content" }, Qr = { class: "option-header" }, Zr = { class: "option-filename" }, ed = { class: "option-meta" }, td = { class: "option-size" }, sd = { class: "option-category" }, od = { class: "option-path" }, nd = { class: "action-buttons" }, ad = {
  key: 2,
  class: "unresolved"
}, ld = { class: "action-buttons" }, id = /* @__PURE__ */ ne({
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
      class: pe(["model-resolution-item", { resolved: f.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", Wr, [
        e("span", Gr, [
          v[7] || (v[7] = g("Used by: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: pe(["status-badge", p.value])
        }, a(t.statusLabel), 3)) : r("", !0)
      ]),
      e("div", jr, [
        f.value ? (s(), o("div", Hr, [
          w(ge, {
            variant: "ghost",
            size: "sm",
            onClick: v[0] || (v[0] = (h) => i("clear-choice"))
          }, {
            default: l(() => [...v[8] || (v[8] = [
              g(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", Kr, [
          v[12] || (v[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", qr, [
            (s(!0), o(V, null, ae(t.options, (h, k) => (s(), o("label", {
              key: h.model.hash,
              class: pe(["option-card", { selected: t.selectedOptionIndex === k }]),
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
                  e("span", Zr, a(h.model.filename), 1),
                  w(ts, {
                    confidence: h.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", ed, [
                  e("span", td, a(m(h.model.size)), 1),
                  e("span", sd, a(h.model.category), 1)
                ]),
                e("div", od, a(h.model.relative_path), 1)
              ])
            ], 10, Yr))), 128))
          ]),
          e("div", nd, [
            w(ge, {
              variant: "ghost",
              size: "sm",
              onClick: v[1] || (v[1] = (h) => i("search"))
            }, {
              default: l(() => [...v[9] || (v[9] = [
                g(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            w(ge, {
              variant: "ghost",
              size: "sm",
              onClick: v[2] || (v[2] = (h) => i("download-url"))
            }, {
              default: l(() => [...v[10] || (v[10] = [
                g(" Download URL ", -1)
              ])]),
              _: 1
            }),
            w(ge, {
              variant: "secondary",
              size: "sm",
              onClick: v[3] || (v[3] = (h) => i("mark-optional"))
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
              onClick: v[4] || (v[4] = (h) => i("search"))
            }, {
              default: l(() => [...v[13] || (v[13] = [
                g(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            w(ge, {
              variant: "secondary",
              size: "sm",
              onClick: v[5] || (v[5] = (h) => i("download-url"))
            }, {
              default: l(() => [...v[14] || (v[14] = [
                g(" Download URL ", -1)
              ])]),
              _: 1
            }),
            w(ge, {
              variant: "secondary",
              size: "sm",
              onClick: v[6] || (v[6] = (h) => i("mark-optional"))
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
}), rd = /* @__PURE__ */ le(id, [["__scopeId", "data-v-8a82fefa"]]), dd = { class: "model-resolution-step" }, cd = { class: "step-header" }, ud = { class: "step-info" }, md = { class: "step-title" }, vd = { class: "step-description" }, fd = { class: "stat-badge" }, pd = {
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
}, Md = { class: "model-download-url-modal" }, Pd = { class: "model-modal-body" }, Td = { class: "model-input-group" }, Rd = { class: "model-input-group" }, Ld = { class: "model-modal-actions" }, zd = /* @__PURE__ */ ne({
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
    function i(z) {
      var I;
      return z && ((I = n[z]) == null ? void 0 : I[0]) || null;
    }
    const f = t, p = c, u = y(0), m = y(!1), d = y(!1), v = y(""), h = y(""), k = y(""), _ = y([]), b = y(!1), R = U(() => f.models[u.value]), E = U(() => f.models.some((z) => z.is_download_intent)), $ = U(() => f.models.filter(
      (z) => f.modelChoices.has(z.filename) || z.is_download_intent
    ).length), C = U(() => {
      var I;
      if (!R.value) return "";
      const z = i((I = R.value.reference) == null ? void 0 : I.node_type);
      return z ? `${z}/${R.value.filename}` : "";
    }), N = U(() => {
      var I;
      if (!R.value) return "not-found";
      const z = f.modelChoices.get(R.value.filename);
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
      return R.value.is_download_intent ? "download" : (I = R.value.options) != null && I.length ? "ambiguous" : "not-found";
    }), x = U(() => {
      var I, ue;
      if (!R.value) return;
      const z = f.modelChoices.get(R.value.filename);
      if (z)
        switch (z.action) {
          case "select":
            return (I = z.selected_model) != null && I.filename ? `→ ${z.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return R.value.is_download_intent ? "Pending Download" : (ue = R.value.options) != null && ue.length ? `${R.value.options.length} matches` : "Not Found";
    });
    function M(z) {
      z >= 0 && z < f.models.length && (u.value = z);
    }
    function q() {
      R.value && p("mark-optional", R.value.filename);
    }
    function A() {
      R.value && p("skip", R.value.filename);
    }
    function W(z) {
      R.value && p("option-selected", R.value.filename, z);
    }
    function S() {
      R.value && p("clear-choice", R.value.filename);
    }
    function L() {
      R.value && (v.value = R.value.filename, m.value = !0);
    }
    function O() {
      R.value && (h.value = R.value.download_source || "", k.value = R.value.target_path || C.value, d.value = !0);
    }
    function re() {
      m.value = !1, v.value = "", _.value = [];
    }
    function Z() {
      d.value = !1, h.value = "", k.value = "";
    }
    function X() {
      b.value = !0, setTimeout(() => {
        b.value = !1;
      }, 300);
    }
    function ce(z) {
      R.value && re();
    }
    function J() {
      !R.value || !h.value.trim() || (p("download-url", R.value.filename, h.value.trim(), k.value.trim() || void 0), Z());
    }
    function D(z) {
      if (!z) return "Unknown";
      const I = z / (1024 * 1024 * 1024);
      return I >= 1 ? `${I.toFixed(2)} GB` : `${(z / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (z, I) => {
      var ue, ee, he;
      return s(), o("div", dd, [
        e("div", cd, [
          e("div", ud, [
            e("h3", md, a(E.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", vd, a(E.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", fd, a($.value) + "/" + a(t.models.length) + " resolved", 1)
        ]),
        R.value ? (s(), T(Hs, {
          key: 0,
          "item-name": R.value.filename,
          "current-index": u.value,
          "total-items": t.models.length,
          onPrev: I[0] || (I[0] = (Ce) => M(u.value - 1)),
          onNext: I[1] || (I[1] = (Ce) => M(u.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : r("", !0),
        R.value ? (s(), o("div", pd, [
          w(rd, {
            filename: R.value.filename,
            "node-type": ((ue = R.value.reference) == null ? void 0 : ue.node_type) || "Unknown",
            "has-multiple-options": !!((ee = R.value.options) != null && ee.length),
            options: R.value.options,
            choice: (he = t.modelChoices) == null ? void 0 : he.get(R.value.filename),
            status: N.value,
            "status-label": x.value,
            onMarkOptional: q,
            onSkip: A,
            onDownloadUrl: O,
            onSearch: L,
            onOptionSelected: W,
            onClearChoice: S
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (s(), o("div", gd, [...I[5] || (I[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (s(), T(He, { to: "body" }, [
          m.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: Ue(re, ["self"])
          }, [
            e("div", hd, [
              e("div", { class: "model-modal-header" }, [
                I[6] || (I[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: re
                }, "✕")
              ]),
              e("div", yd, [
                w(ct, {
                  modelValue: v.value,
                  "onUpdate:modelValue": I[2] || (I[2] = (Ce) => v.value = Ce),
                  placeholder: "Search by filename, category...",
                  onInput: X
                }, null, 8, ["modelValue"]),
                _.value.length > 0 ? (s(), o("div", wd, [
                  (s(!0), o(V, null, ae(_.value, (Ce) => (s(), o("div", {
                    key: Ce.hash,
                    class: "model-search-result-item",
                    onClick: (Te) => ce()
                  }, [
                    e("div", bd, [
                      e("code", _d, a(Ce.filename), 1)
                    ]),
                    e("div", $d, [
                      e("span", Cd, a(Ce.category), 1),
                      e("span", xd, a(D(Ce.size)), 1)
                    ]),
                    Ce.relative_path ? (s(), o("div", Sd, a(Ce.relative_path), 1)) : r("", !0)
                  ], 8, kd))), 128))
                ])) : v.value && !b.value ? (s(), o("div", Id, ' No models found matching "' + a(v.value) + '" ', 1)) : r("", !0),
                b.value ? (s(), o("div", Ed, "Searching...")) : r("", !0)
              ])
            ])
          ])) : r("", !0)
        ])),
        (s(), T(He, { to: "body" }, [
          d.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: Ue(Z, ["self"])
          }, [
            e("div", Md, [
              e("div", { class: "model-modal-header" }, [
                I[7] || (I[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: Z
                }, "✕")
              ]),
              e("div", Pd, [
                e("div", Td, [
                  I[8] || (I[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  w(ct, {
                    modelValue: h.value,
                    "onUpdate:modelValue": I[3] || (I[3] = (Ce) => h.value = Ce),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", Rd, [
                  I[9] || (I[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  w(ct, {
                    modelValue: k.value,
                    "onUpdate:modelValue": I[4] || (I[4] = (Ce) => k.value = Ce),
                    placeholder: C.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", Ld, [
                  w(ge, {
                    variant: "secondary",
                    onClick: Z
                  }, {
                    default: l(() => [...I[10] || (I[10] = [
                      g("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  w(ge, {
                    variant: "primary",
                    disabled: !h.value.trim() || !k.value.trim(),
                    onClick: J
                  }, {
                    default: l(() => [...I[11] || (I[11] = [
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
}), Dd = /* @__PURE__ */ le(zd, [["__scopeId", "data-v-c6acbada"]]), Ud = { class: "applying-step" }, Nd = {
  key: 0,
  class: "phase-content"
}, Od = {
  key: 1,
  class: "phase-content"
}, Bd = { class: "phase-description" }, Ad = { class: "overall-progress" }, Fd = { class: "progress-bar" }, Vd = { class: "progress-label" }, Wd = { class: "install-list" }, Gd = { class: "install-icon" }, jd = { key: 0 }, Hd = {
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
}, cc = { class: "error-message" }, uc = /* @__PURE__ */ ne({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(t) {
    const c = t, n = U(() => {
      var v, h;
      const m = ((v = c.progress.nodeInstallProgress) == null ? void 0 : v.totalNodes) || c.progress.nodesToInstall.length;
      if (!m) return 0;
      const d = ((h = c.progress.nodeInstallProgress) == null ? void 0 : h.completedNodes.length) ?? 0;
      return Math.round(d / m * 100);
    }), i = U(() => {
      var m;
      return ((m = c.progress.nodeInstallProgress) == null ? void 0 : m.completedNodes.filter((d) => !d.success)) || [];
    }), f = U(() => i.value.length > 0);
    function p(m, d) {
      var h, k;
      const v = (h = c.progress.nodeInstallProgress) == null ? void 0 : h.completedNodes.find((_) => _.node_id === m);
      return v ? v.success ? "complete" : "failed" : ((k = c.progress.nodeInstallProgress) == null ? void 0 : k.currentIndex) === d ? "installing" : "pending";
    }
    function u(m) {
      var d, v;
      return (v = (d = c.progress.nodeInstallProgress) == null ? void 0 : d.completedNodes.find((h) => h.node_id === m)) == null ? void 0 : v.error;
    }
    return (m, d) => {
      var v, h, k, _;
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
          e("p", Bd, " Installing " + a((((v = t.progress.nodeInstallProgress) == null ? void 0 : v.currentIndex) ?? 0) + 1) + " of " + a(((h = t.progress.nodeInstallProgress) == null ? void 0 : h.totalNodes) ?? t.progress.nodesToInstall.length) + " packages... ", 1),
          e("div", Ad, [
            e("div", Fd, [
              e("div", {
                class: "progress-fill",
                style: _t({ width: `${n.value}%` })
              }, null, 4)
            ]),
            e("span", Vd, a(((k = t.progress.nodeInstallProgress) == null ? void 0 : k.completedNodes.length) ?? 0) + " / " + a(((_ = t.progress.nodeInstallProgress) == null ? void 0 : _.totalNodes) ?? t.progress.nodesToInstall.length), 1)
          ]),
          e("div", Wd, [
            (s(!0), o(V, null, ae(t.progress.nodesToInstall, (b, R) => (s(), o("div", {
              key: b,
              class: pe(["install-item", p(b, R)])
            }, [
              e("span", Gd, [
                p(b, R) === "pending" ? (s(), o("span", jd, "○")) : p(b, R) === "installing" ? (s(), o("span", Hd, "◌")) : p(b, R) === "complete" ? (s(), o("span", Kd, "✓")) : p(b, R) === "failed" ? (s(), o("span", qd, "✗")) : r("", !0)
              ]),
              e("code", null, a(b), 1),
              u(b) ? (s(), o("span", Yd, a(u(b)), 1)) : r("", !0)
            ], 2))), 128))
          ])
        ])) : t.progress.phase === "complete" ? (s(), o("div", Jd, [
          e("div", Xd, [
            e("span", {
              class: pe(["phase-icon", f.value ? "warning" : "success"])
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
              (s(!0), o(V, null, ae(i.value, (b) => (s(), o("div", {
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
}), mc = /* @__PURE__ */ le(uc, [["__scopeId", "data-v-5efaae58"]]), vc = {
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
}, Mc = { class: "stat-count" }, Pc = { class: "stat-card" }, Tc = { class: "stat-items" }, Rc = { class: "stat-item success" }, Lc = { class: "stat-count" }, zc = {
  key: 0,
  class: "stat-item info"
}, Dc = { class: "stat-count" }, Uc = {
  key: 1,
  class: "stat-item warning"
}, Nc = { class: "stat-count" }, Oc = {
  key: 2,
  class: "stat-item warning"
}, Bc = { class: "stat-count" }, Ac = {
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
}, Mu = { class: "section-title" }, Pu = { class: "review-items" }, Tu = { class: "item-name" }, Ru = { class: "item-choice" }, Lu = {
  key: 0,
  class: "choice-badge install"
}, zu = {
  key: 1,
  class: "choice-badge download"
}, Du = {
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
}, Bu = {
  key: 2,
  class: "choice-badge pending"
}, Au = {
  key: 3,
  class: "no-choices"
}, Fu = /* @__PURE__ */ ne({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(t, { emit: c }) {
    const n = t, i = c, { analyzeWorkflow: f, applyResolution: p, installNodes: u, queueModelDownloads: m, progress: d, resetProgress: v } = js(), { loadPendingDownloads: h } = qt(), { openFileLocation: k } = We(), _ = y(null), b = y(!1), R = y(!1), E = y(null), $ = y("analysis"), C = y([]), N = y(/* @__PURE__ */ new Map()), x = y(/* @__PURE__ */ new Map()), M = y(/* @__PURE__ */ new Set()), q = U(() => {
      const Y = [
        { id: "analysis", label: "Analysis" }
      ];
      return (W.value || O.value) && Y.push({ id: "nodes", label: "Nodes" }), (S.value || L.value) && Y.push({ id: "models", label: "Models" }), Y.push({ id: "review", label: "Review" }), $.value === "applying" && Y.push({ id: "applying", label: "Applying" }), Y;
    }), A = U(() => _.value ? _.value.stats.needs_user_input : !1), W = U(() => _.value ? _.value.nodes.unresolved.length > 0 || _.value.nodes.ambiguous.length > 0 : !1), S = U(() => _.value ? _.value.models.unresolved.length > 0 || _.value.models.ambiguous.length > 0 : !1), L = U(() => _.value ? _.value.stats.download_intents > 0 : !1), O = U(() => _.value ? _.value.stats.nodes_needing_installation > 0 : !1), re = U(() => _.value ? _.value.nodes.resolved.length : 0), Z = U(() => _.value ? _.value.models.resolved.filter((Y) => Y.has_category_mismatch) : []), X = U(() => Z.value.length > 0), ce = U(() => {
      if (!_.value) return [];
      const Y = _.value.nodes.resolved.filter((F) => !F.is_installed), P = /* @__PURE__ */ new Set();
      return Y.filter((F) => P.has(F.package.package_id) ? !1 : (P.add(F.package.package_id), !0));
    }), J = U(() => {
      if (!_.value) return [];
      const Y = _.value.nodes.resolved.filter((F) => !F.is_installed), P = /* @__PURE__ */ new Map();
      for (const F of Y) {
        const se = P.get(F.package.package_id);
        se ? se.node_types_count++ : P.set(F.package.package_id, {
          package_id: F.package.package_id,
          title: F.package.title,
          node_types_count: 1
        });
      }
      return Array.from(P.values());
    }), D = U(() => ce.value.filter((Y) => !M.value.has(Y.package.package_id))), z = U(() => _.value ? _.value.models.resolved.filter((Y) => Y.match_type === "download_intent").map((Y) => ({
      filename: Y.reference.widget_value,
      reference: Y.reference,
      is_download_intent: !0,
      resolved_model: Y.model,
      download_source: Y.download_source,
      target_path: Y.target_path
    })) : []), I = U(() => {
      if (!_.value) return [];
      const Y = _.value.nodes.unresolved.map((F) => ({
        node_type: F.reference.node_type,
        reason: F.reason,
        is_unresolved: !0,
        options: void 0
      })), P = _.value.nodes.ambiguous.map((F) => ({
        node_type: F.reference.node_type,
        has_multiple_options: !0,
        options: F.options.map((se) => ({
          package_id: se.package.package_id,
          title: se.package.title,
          match_confidence: se.match_confidence,
          match_type: se.match_type,
          is_installed: se.is_installed
        }))
      }));
      return [...Y, ...P];
    }), ue = U(() => {
      if (!_.value) return [];
      const Y = _.value.models.unresolved.map((F) => ({
        filename: F.reference.widget_value,
        reference: F.reference,
        reason: F.reason,
        is_unresolved: !0,
        options: void 0
      })), P = _.value.models.ambiguous.map((F) => ({
        filename: F.reference.widget_value,
        reference: F.reference,
        has_multiple_options: !0,
        options: F.options.map((se) => ({
          model: se.model,
          match_confidence: se.match_confidence,
          match_type: se.match_type,
          has_download_source: se.has_download_source
        }))
      }));
      return [...Y, ...P];
    }), ee = U(() => {
      const Y = ue.value, P = z.value.map((F) => ({
        filename: F.filename,
        reference: F.reference,
        is_download_intent: !0,
        resolved_model: F.resolved_model,
        download_source: F.download_source,
        target_path: F.target_path,
        options: void 0
      }));
      return [...Y, ...P];
    }), he = U(() => {
      let Y = D.value.length;
      for (const P of N.value.values())
        P.action === "install" && Y++;
      for (const P of x.value.values())
        P.action === "select" && Y++;
      return Y;
    }), Ce = U(() => {
      let Y = 0;
      for (const P of x.value.values())
        P.action === "download" && Y++;
      return Y;
    }), Te = U(() => {
      let Y = 0;
      for (const P of N.value.values())
        P.action === "optional" && Y++;
      for (const P of x.value.values())
        P.action === "optional" && Y++;
      return Y;
    }), Ne = U(() => {
      let Y = M.value.size;
      for (const P of N.value.values())
        P.action === "skip" && Y++;
      for (const P of x.value.values())
        P.action === "skip" && Y++;
      for (const P of I.value)
        N.value.has(P.node_type) || Y++;
      for (const P of ue.value)
        x.value.has(P.filename) || Y++;
      return Y;
    }), me = U(() => {
      const Y = {};
      if (Y.analysis = { resolved: 1, total: 1 }, W.value) {
        const P = I.value.length, F = I.value.filter(
          (se) => N.value.has(se.node_type)
        ).length;
        Y.nodes = { resolved: F, total: P };
      }
      if (S.value || L.value) {
        const P = ee.value.length, F = ee.value.filter(
          (se) => x.value.has(se.filename) || se.is_download_intent
        ).length;
        Y.models = { resolved: F, total: P };
      }
      if (Y.review = { resolved: 1, total: 1 }, $.value === "applying") {
        const P = d.totalFiles || 1, F = d.completedFiles.length;
        Y.applying = { resolved: F, total: P };
      }
      return Y;
    });
    function ye(Y) {
      $.value = Y;
    }
    function xe() {
      const Y = q.value.findIndex((P) => P.id === $.value);
      Y > 0 && ($.value = q.value[Y - 1].id);
    }
    function Q() {
      const Y = q.value.findIndex((P) => P.id === $.value);
      Y < q.value.length - 1 && ($.value = q.value[Y + 1].id);
    }
    async function ie() {
      b.value = !0, E.value = null;
      try {
        _.value = await f(n.workflowName);
      } catch (Y) {
        E.value = Y instanceof Error ? Y.message : "Failed to analyze workflow";
      } finally {
        b.value = !1;
      }
    }
    function ke() {
      C.value.includes("analysis") || C.value.push("analysis"), W.value || O.value ? $.value = "nodes" : S.value || L.value ? $.value = "models" : $.value = "review";
    }
    function ze(Y) {
      N.value.set(Y, { action: "optional" });
    }
    function Qe(Y) {
      N.value.set(Y, { action: "skip" });
    }
    function st(Y, P) {
      var se;
      const F = I.value.find((be) => be.node_type === Y);
      (se = F == null ? void 0 : F.options) != null && se[P] && N.value.set(Y, {
        action: "install",
        package_id: F.options[P].package_id
      });
    }
    function Se(Y, P) {
      N.value.set(Y, {
        action: "install",
        package_id: P
      });
    }
    function Ze(Y) {
      N.value.delete(Y);
    }
    function qe(Y) {
      M.value.has(Y) ? M.value.delete(Y) : M.value.add(Y);
    }
    function je(Y) {
      x.value.set(Y, { action: "optional" });
    }
    function lt(Y) {
      x.value.set(Y, { action: "skip" });
    }
    function te(Y, P) {
      var se;
      const F = ue.value.find((be) => be.filename === Y);
      (se = F == null ? void 0 : F.options) != null && se[P] && x.value.set(Y, {
        action: "select",
        selected_model: F.options[P].model
      });
    }
    function G(Y, P, F) {
      x.value.set(Y, {
        action: "download",
        url: P,
        target_path: F
      });
    }
    function de(Y) {
      x.value.delete(Y);
    }
    async function Fe(Y) {
      try {
        await k(Y);
      } catch (P) {
        E.value = P instanceof Error ? P.message : "Failed to open file location";
      }
    }
    async function Re() {
      var Y;
      R.value = !0, E.value = null, v(), d.phase = "resolving", $.value = "applying";
      try {
        const P = await p(n.workflowName, N.value, x.value, M.value);
        P.models_to_download && P.models_to_download.length > 0 && m(n.workflowName, P.models_to_download);
        const F = [
          ...P.nodes_to_install || [],
          ...D.value.map((be) => be.package.package_id)
        ];
        d.nodesToInstall = [...new Set(F)], d.nodesToInstall.length > 0 && await u(n.workflowName), d.phase = "complete", await h();
        const se = d.installError || ((Y = d.nodeInstallProgress) == null ? void 0 : Y.completedNodes.some((be) => !be.success));
        !d.needsRestart && !se && setTimeout(() => {
          i("refresh"), i("install"), i("close");
        }, 1500);
      } catch (P) {
        E.value = P instanceof Error ? P.message : "Failed to apply resolution", d.error = E.value, d.phase = "error";
      } finally {
        R.value = !1;
      }
    }
    function fe() {
      i("refresh"), i("restart"), i("close");
    }
    async function K() {
      var P;
      const Y = ((P = d.nodeInstallProgress) == null ? void 0 : P.completedNodes.filter((F) => !F.success).map((F) => F.node_id)) || [];
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
    return Ae(ie), (Y, P) => (s(), T(et, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: b.value,
      error: E.value || void 0,
      "fixed-height": !0,
      onClose: P[1] || (P[1] = (F) => i("close"))
    }, {
      body: l(() => [
        b.value && !_.value ? (s(), o("div", vc, [...P[2] || (P[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : _.value ? (s(), o("div", fc, [
          w(bi, {
            steps: q.value,
            "current-step": $.value,
            "completed-steps": C.value,
            "step-stats": me.value,
            onStepChange: ye
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          $.value === "analysis" ? (s(), o("div", pc, [
            e("div", gc, [
              e("div", hc, [
                P[3] || (P[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", yc, " Found " + a(_.value.stats.total_nodes) + " nodes and " + a(_.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", wc, [
                e("div", kc, [
                  P[12] || (P[12] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", bc, [
                    re.value > 0 ? (s(), o("div", _c, [
                      P[4] || (P[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", $c, a(re.value), 1),
                      P[5] || (P[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ])) : r("", !0),
                    _.value.stats.packages_needing_installation > 0 ? (s(), o("div", Cc, [
                      P[6] || (P[6] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", xc, a(_.value.stats.packages_needing_installation), 1),
                      P[7] || (P[7] = e("span", { class: "stat-label" }, "to install", -1))
                    ])) : r("", !0),
                    _.value.nodes.ambiguous.length > 0 ? (s(), o("div", Sc, [
                      P[8] || (P[8] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Ic, a(_.value.nodes.ambiguous.length), 1),
                      P[9] || (P[9] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : r("", !0),
                    _.value.nodes.unresolved.length > 0 ? (s(), o("div", Ec, [
                      P[10] || (P[10] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Mc, a(_.value.nodes.unresolved.length), 1),
                      P[11] || (P[11] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : r("", !0)
                  ])
                ]),
                e("div", Pc, [
                  P[23] || (P[23] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", Tc, [
                    e("div", Rc, [
                      P[13] || (P[13] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Lc, a(_.value.models.resolved.length - _.value.stats.download_intents - _.value.stats.models_with_category_mismatch), 1),
                      P[14] || (P[14] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    _.value.stats.download_intents > 0 ? (s(), o("div", zc, [
                      P[15] || (P[15] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Dc, a(_.value.stats.download_intents), 1),
                      P[16] || (P[16] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : r("", !0),
                    X.value ? (s(), o("div", Uc, [
                      P[17] || (P[17] = e("span", { class: "stat-icon" }, "⚠", -1)),
                      e("span", Nc, a(Z.value.length), 1),
                      P[18] || (P[18] = e("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : r("", !0),
                    _.value.models.ambiguous.length > 0 ? (s(), o("div", Oc, [
                      P[19] || (P[19] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Bc, a(_.value.models.ambiguous.length), 1),
                      P[20] || (P[20] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : r("", !0),
                    _.value.models.unresolved.length > 0 ? (s(), o("div", Ac, [
                      P[21] || (P[21] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Fc, a(_.value.models.unresolved.length), 1),
                      P[22] || (P[22] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : r("", !0)
                  ])
                ])
              ]),
              A.value ? (s(), o("div", Vc, [
                P[24] || (P[24] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Wc, a(I.value.length + ue.value.length) + " items need your input", 1)
              ])) : O.value ? (s(), o("div", Gc, [
                P[25] || (P[25] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", jc, a(_.value.stats.packages_needing_installation) + " package" + a(_.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + a(_.value.stats.nodes_needing_installation) + " node type" + a(_.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + a(L.value ? `, ${_.value.stats.download_intents} model${_.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : L.value ? (s(), o("div", Hc, [
                P[26] || (P[26] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Kc, a(_.value.stats.download_intents) + " model" + a(_.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : X.value ? (s(), o("div", qc, [
                P[27] || (P[27] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Yc, a(Z.value.length) + " model" + a(Z.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (s(), o("div", Jc, [...P[28] || (P[28] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              X.value ? (s(), o("div", Xc, [
                P[31] || (P[31] = e("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                e("div", Qc, [
                  (s(!0), o(V, null, ae(Z.value, (F) => {
                    var se, be;
                    return s(), o("div", {
                      key: F.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      e("code", Zc, a(F.actual_category) + "/" + a((se = F.model) == null ? void 0 : se.filename), 1),
                      P[30] || (P[30] = e("span", { class: "mismatch-arrow" }, "→", -1)),
                      e("code", eu, a((be = F.expected_categories) == null ? void 0 : be[0]) + "/", 1),
                      F.file_path ? (s(), T(ge, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (Ge) => Fe(F.file_path)
                      }, {
                        default: l(() => [...P[29] || (P[29] = [
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
          $.value === "nodes" ? (s(), T(Vr, {
            key: 1,
            nodes: I.value,
            "node-choices": N.value,
            "auto-resolved-packages": J.value,
            "skipped-packages": M.value,
            onMarkOptional: ze,
            onSkip: Qe,
            onOptionSelected: st,
            onManualEntry: Se,
            onClearChoice: Ze,
            onPackageSkip: qe
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : r("", !0),
          $.value === "models" ? (s(), T(Dd, {
            key: 2,
            models: ee.value,
            "model-choices": x.value,
            onMarkOptional: je,
            onSkip: lt,
            onOptionSelected: te,
            onDownloadUrl: G,
            onClearChoice: de
          }, null, 8, ["models", "model-choices"])) : r("", !0),
          $.value === "review" ? (s(), o("div", tu, [
            e("div", su, [
              P[36] || (P[36] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", ou, [
                e("div", nu, [
                  e("span", au, a(he.value), 1),
                  P[32] || (P[32] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", lu, [
                  e("span", iu, a(Ce.value), 1),
                  P[33] || (P[33] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", ru, [
                  e("span", du, a(Te.value), 1),
                  P[34] || (P[34] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", cu, [
                  e("span", uu, a(Ne.value), 1),
                  P[35] || (P[35] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              J.value.length > 0 ? (s(), o("div", mu, [
                e("h4", vu, "Node Packages (" + a(J.value.length) + ")", 1),
                e("div", fu, [
                  (s(!0), o(V, null, ae(J.value, (F) => (s(), o("div", {
                    key: F.package_id,
                    class: "review-item"
                  }, [
                    e("code", pu, a(F.package_id), 1),
                    e("div", gu, [
                      M.value.has(F.package_id) ? (s(), o("span", yu, "Skipped")) : (s(), o("span", hu, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : r("", !0),
              I.value.length > 0 ? (s(), o("div", wu, [
                e("h4", ku, "Node Choices (" + a(I.value.length) + ")", 1),
                e("div", bu, [
                  (s(!0), o(V, null, ae(I.value, (F) => {
                    var se, be, Ge, ht;
                    return s(), o("div", {
                      key: F.node_type,
                      class: "review-item"
                    }, [
                      e("code", _u, a(F.node_type), 1),
                      e("div", $u, [
                        N.value.has(F.node_type) ? (s(), o(V, { key: 0 }, [
                          ((se = N.value.get(F.node_type)) == null ? void 0 : se.action) === "install" ? (s(), o("span", Cu, a((be = N.value.get(F.node_type)) == null ? void 0 : be.package_id), 1)) : ((Ge = N.value.get(F.node_type)) == null ? void 0 : Ge.action) === "optional" ? (s(), o("span", xu, " Optional ")) : ((ht = N.value.get(F.node_type)) == null ? void 0 : ht.action) === "skip" ? (s(), o("span", Su, " Skip ")) : r("", !0)
                        ], 64)) : (s(), o("span", Iu, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : r("", !0),
              ee.value.length > 0 ? (s(), o("div", Eu, [
                e("h4", Mu, "Models (" + a(ee.value.length) + ")", 1),
                e("div", Pu, [
                  (s(!0), o(V, null, ae(ee.value, (F) => {
                    var se, be, Ge, ht, it, Mt, yt;
                    return s(), o("div", {
                      key: F.filename,
                      class: "review-item"
                    }, [
                      e("code", Tu, a(F.filename), 1),
                      e("div", Ru, [
                        x.value.has(F.filename) ? (s(), o(V, { key: 0 }, [
                          ((se = x.value.get(F.filename)) == null ? void 0 : se.action) === "select" ? (s(), o("span", Lu, a((Ge = (be = x.value.get(F.filename)) == null ? void 0 : be.selected_model) == null ? void 0 : Ge.filename), 1)) : ((ht = x.value.get(F.filename)) == null ? void 0 : ht.action) === "download" ? (s(), o("span", zu, " Download ")) : ((it = x.value.get(F.filename)) == null ? void 0 : it.action) === "optional" ? (s(), o("span", Du, " Optional ")) : ((Mt = x.value.get(F.filename)) == null ? void 0 : Mt.action) === "skip" ? (s(), o("span", Uu, " Skip ")) : ((yt = x.value.get(F.filename)) == null ? void 0 : yt.action) === "cancel_download" ? (s(), o("span", Nu, " Cancel Download ")) : r("", !0)
                        ], 64)) : F.is_download_intent ? (s(), o("span", Ou, " Pending Download ")) : (s(), o("span", Bu, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : r("", !0),
              ce.value.length === 0 && I.value.length === 0 && ee.value.length === 0 ? (s(), o("div", Au, " No dependencies need resolution. ")) : r("", !0)
            ])
          ])) : r("", !0),
          $.value === "applying" ? (s(), T(mc, {
            key: 4,
            progress: Ie(d),
            onRestart: fe,
            onRetryFailed: K
          }, null, 8, ["progress"])) : r("", !0)
        ])) : r("", !0)
      ]),
      footer: l(() => [
        $.value !== "analysis" && $.value !== "applying" ? (s(), T(ge, {
          key: 0,
          variant: "secondary",
          disabled: R.value,
          onClick: xe
        }, {
          default: l(() => [...P[37] || (P[37] = [
            g(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : r("", !0),
        P[41] || (P[41] = e("div", { class: "footer-spacer" }, null, -1)),
        $.value !== "applying" || Ie(d).phase === "complete" || Ie(d).phase === "error" ? (s(), T(ge, {
          key: 1,
          variant: "secondary",
          onClick: P[0] || (P[0] = (F) => i("close"))
        }, {
          default: l(() => [
            g(a(Ie(d).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : r("", !0),
        $.value === "analysis" ? (s(), T(ge, {
          key: 2,
          variant: "primary",
          disabled: b.value,
          onClick: ke
        }, {
          default: l(() => [...P[38] || (P[38] = [
            g(" Continue ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : r("", !0),
        $.value === "nodes" ? (s(), T(ge, {
          key: 3,
          variant: "primary",
          onClick: Q
        }, {
          default: l(() => [
            g(a(S.value || L.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : r("", !0),
        $.value === "models" ? (s(), T(ge, {
          key: 4,
          variant: "primary",
          onClick: Q
        }, {
          default: l(() => [...P[39] || (P[39] = [
            g(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : r("", !0),
        $.value === "review" ? (s(), T(ge, {
          key: 5,
          variant: "primary",
          disabled: R.value,
          loading: R.value,
          onClick: Re
        }, {
          default: l(() => [...P[40] || (P[40] = [
            g(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : r("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Vu = /* @__PURE__ */ le(Fu, [["__scopeId", "data-v-6276cf1d"]]), Wu = { class: "search-input-wrapper" }, Gu = ["value", "placeholder"], ju = /* @__PURE__ */ ne({
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
    const n = t, i = c, f = y(null);
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
    return Ae(() => {
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
        onKeyup: pt(m, ["escape"])
      }, null, 40, Gu),
      t.clearable && t.modelValue ? (s(), o("button", {
        key: 0,
        class: "clear-button",
        onClick: m,
        title: "Clear search"
      }, " ✕ ")) : r("", !0)
    ]));
  }
}), Hu = /* @__PURE__ */ le(ju, [["__scopeId", "data-v-266f857a"]]), Ku = { class: "search-bar" }, qu = /* @__PURE__ */ ne({
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
}), Ut = /* @__PURE__ */ le(qu, [["__scopeId", "data-v-3d51bbfd"]]), Yu = { class: "section-group" }, Ju = {
  key: 0,
  class: "section-content"
}, Xu = /* @__PURE__ */ ne({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: c }) {
    const n = t, i = c, f = y(n.initiallyExpanded);
    function p() {
      n.collapsible && (f.value = !f.value, i("toggle", f.value));
    }
    return (u, m) => (s(), o("section", Yu, [
      w(at, {
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
        Ee(u.$slots, "default", {}, void 0, !0)
      ])) : r("", !0)
    ]));
  }
}), De = /* @__PURE__ */ le(Xu, [["__scopeId", "data-v-c48e33ed"]]), Qu = { class: "item-header" }, Zu = {
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
}, am = /* @__PURE__ */ ne({
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
      class: pe(["item-card", { clickable: t.clickable, compact: t.compact }, i.value]),
      onClick: p[0] || (p[0] = (u) => t.clickable && f.$emit("click"))
    }, [
      e("div", Qu, [
        f.$slots.icon ? (s(), o("span", Zu, [
          Ee(f.$slots, "icon", {}, void 0, !0)
        ])) : r("", !0),
        e("div", em, [
          f.$slots.title ? (s(), o("div", tm, [
            Ee(f.$slots, "title", {}, void 0, !0)
          ])) : r("", !0),
          f.$slots.subtitle ? (s(), o("div", sm, [
            Ee(f.$slots, "subtitle", {}, void 0, !0)
          ])) : r("", !0)
        ])
      ]),
      f.$slots.details ? (s(), o("div", om, [
        Ee(f.$slots, "details", {}, void 0, !0)
      ])) : r("", !0),
      f.$slots.actions ? (s(), o("div", nm, [
        Ee(f.$slots, "actions", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), Ye = /* @__PURE__ */ le(am, [["__scopeId", "data-v-cc435e0e"]]), lm = { class: "loading-state" }, im = { class: "loading-message" }, rm = /* @__PURE__ */ ne({
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
}), $t = /* @__PURE__ */ le(rm, [["__scopeId", "data-v-ad8436c9"]]), dm = { class: "error-state" }, cm = { class: "error-message" }, um = /* @__PURE__ */ ne({
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
      t.retry ? (s(), T(oe, {
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
}), Ct = /* @__PURE__ */ le(um, [["__scopeId", "data-v-5397be48"]]), mm = /* @__PURE__ */ ne({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: c, emit: n }) {
    const i = n, { getWorkflows: f } = We();
    Ws();
    const p = y([]), u = y(!1), m = y(null), d = y(""), v = y(!0), h = y(!1), k = y(!1), _ = y(!1), b = y(null), R = U(
      () => p.value.filter((D) => D.status === "broken")
    ), E = U(
      () => p.value.filter((D) => D.status === "new")
    ), $ = U(
      () => p.value.filter((D) => D.status === "modified")
    ), C = U(
      () => p.value.filter((D) => D.status === "synced")
    ), N = U(() => {
      if (!d.value.trim()) return p.value;
      const D = d.value.toLowerCase();
      return p.value.filter((z) => z.name.toLowerCase().includes(D));
    }), x = U(
      () => R.value.filter(
        (D) => !d.value.trim() || D.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), M = U(
      () => E.value.filter(
        (D) => !d.value.trim() || D.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), q = U(
      () => $.value.filter(
        (D) => !d.value.trim() || D.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), A = U(
      () => C.value.filter(
        (D) => !d.value.trim() || D.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), W = U(
      () => h.value ? A.value : A.value.slice(0, 5)
    );
    async function S(D = !1) {
      u.value = !0, m.value = null;
      try {
        p.value = await f(D);
      } catch (z) {
        m.value = z instanceof Error ? z.message : "Failed to load workflows";
      } finally {
        u.value = !1;
      }
    }
    c({ loadWorkflows: S });
    function L(D) {
      b.value = D, k.value = !0;
    }
    function O(D) {
      b.value = D, _.value = !0;
    }
    function re() {
      i("refresh");
    }
    async function Z() {
      _.value = !1, await S(!0);
    }
    async function X() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function ce(D) {
      const z = [];
      return D.missing_nodes > 0 && z.push(`${D.missing_nodes} missing node${D.missing_nodes > 1 ? "s" : ""}`), D.missing_models > 0 && z.push(`${D.missing_models} missing model${D.missing_models > 1 ? "s" : ""}`), D.models_with_category_mismatch && D.models_with_category_mismatch > 0 && z.push(`${D.models_with_category_mismatch} model${D.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), D.pending_downloads && D.pending_downloads > 0 && z.push(`${D.pending_downloads} pending download${D.pending_downloads > 1 ? "s" : ""}`), z.length > 0 ? z.join(", ") : "Has issues";
    }
    function J(D) {
      const z = D.sync_state === "new" ? "New" : D.sync_state === "modified" ? "Modified" : D.sync_state === "synced" ? "Synced" : D.sync_state;
      return D.has_path_sync_issues && D.models_needing_path_sync && D.models_needing_path_sync > 0 ? `${D.models_needing_path_sync} model path${D.models_needing_path_sync > 1 ? "s" : ""} need${D.models_needing_path_sync === 1 ? "s" : ""} sync` : z || "Unknown";
    }
    return Ae(S), (D, z) => (s(), o(V, null, [
      w(Je, null, {
        header: l(() => [
          w(Xe, { title: "WORKFLOWS" })
        ]),
        search: l(() => [
          w(Ut, {
            modelValue: d.value,
            "onUpdate:modelValue": z[0] || (z[0] = (I) => d.value = I),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          u.value ? (s(), T($t, {
            key: 0,
            message: "Loading workflows..."
          })) : m.value ? (s(), T(Ct, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: S
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            x.value.length ? (s(), T(De, {
              key: 0,
              title: "BROKEN",
              count: x.value.length
            }, {
              default: l(() => [
                (s(!0), o(V, null, ae(x.value, (I) => (s(), T(Ye, {
                  key: I.name,
                  status: "broken"
                }, {
                  icon: l(() => [...z[7] || (z[7] = [
                    g("⚠", -1)
                  ])]),
                  title: l(() => [
                    g(a(I.name), 1)
                  ]),
                  subtitle: l(() => [
                    g(a(ce(I)), 1)
                  ]),
                  actions: l(() => [
                    w(oe, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ue) => O(I.name)
                    }, {
                      default: l(() => [...z[8] || (z[8] = [
                        g(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    w(oe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ue) => L(I.name)
                    }, {
                      default: l(() => [...z[9] || (z[9] = [
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
            M.value.length ? (s(), T(De, {
              key: 1,
              title: "NEW",
              count: M.value.length
            }, {
              default: l(() => [
                (s(!0), o(V, null, ae(M.value, (I) => (s(), T(Ye, {
                  key: I.name,
                  status: I.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: l(() => [
                    g(a(I.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: l(() => [
                    g(a(I.name), 1)
                  ]),
                  subtitle: l(() => [
                    g(a(J(I)), 1)
                  ]),
                  actions: l(() => [
                    w(oe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ue) => L(I.name)
                    }, {
                      default: l(() => [...z[10] || (z[10] = [
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
            q.value.length ? (s(), T(De, {
              key: 2,
              title: "MODIFIED",
              count: q.value.length
            }, {
              default: l(() => [
                (s(!0), o(V, null, ae(q.value, (I) => (s(), T(Ye, {
                  key: I.name,
                  status: I.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: l(() => [...z[11] || (z[11] = [
                    g("⚡", -1)
                  ])]),
                  title: l(() => [
                    g(a(I.name), 1)
                  ]),
                  subtitle: l(() => [
                    g(a(J(I)), 1)
                  ]),
                  actions: l(() => [
                    w(oe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ue) => L(I.name)
                    }, {
                      default: l(() => [...z[12] || (z[12] = [
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
            A.value.length ? (s(), T(De, {
              key: 3,
              title: "SYNCED",
              count: A.value.length,
              collapsible: !0,
              "initially-expanded": v.value,
              onToggle: z[2] || (z[2] = (I) => v.value = I)
            }, {
              default: l(() => [
                (s(!0), o(V, null, ae(W.value, (I) => (s(), T(Ye, {
                  key: I.name,
                  status: I.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: l(() => [
                    g(a(I.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: l(() => [
                    g(a(I.name), 1)
                  ]),
                  subtitle: l(() => [
                    g(a(J(I)), 1)
                  ]),
                  actions: l(() => [
                    w(oe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ue) => L(I.name)
                    }, {
                      default: l(() => [...z[13] || (z[13] = [
                        g(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !h.value && A.value.length > 5 ? (s(), T(oe, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: z[1] || (z[1] = (I) => h.value = !0),
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
            N.value.length ? r("", !0) : (s(), T(ut, {
              key: 4,
              icon: "📭",
              message: d.value ? `No workflows match '${d.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      k.value && b.value ? (s(), T(di, {
        key: 0,
        "workflow-name": b.value,
        onClose: z[3] || (z[3] = (I) => k.value = !1),
        onResolve: z[4] || (z[4] = (I) => O(b.value)),
        onRefresh: z[5] || (z[5] = (I) => i("refresh"))
      }, null, 8, ["workflow-name"])) : r("", !0),
      _.value && b.value ? (s(), T(Vu, {
        key: 1,
        "workflow-name": b.value,
        onClose: Z,
        onInstall: re,
        onRefresh: z[6] || (z[6] = (I) => i("refresh")),
        onRestart: X
      }, null, 8, ["workflow-name"])) : r("", !0)
    ], 64));
  }
}), vm = /* @__PURE__ */ le(mm, [["__scopeId", "data-v-fa3f076e"]]), fm = /* @__PURE__ */ ne({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (c, n) => (s(), o("div", {
      class: pe(["summary-bar", t.variant])
    }, [
      Ee(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Yt = /* @__PURE__ */ le(fm, [["__scopeId", "data-v-ccb7816e"]]), pm = {
  key: 0,
  class: "model-details"
}, gm = { class: "detail-section" }, hm = { class: "detail-row" }, ym = { class: "detail-value mono" }, wm = { class: "detail-row" }, km = { class: "detail-value mono" }, bm = { class: "detail-row" }, _m = { class: "detail-value mono" }, $m = { class: "detail-row" }, Cm = { class: "detail-value" }, xm = { class: "detail-row" }, Sm = { class: "detail-value" }, Im = { class: "detail-row" }, Em = { class: "detail-value" }, Mm = { class: "detail-section" }, Pm = { class: "section-header" }, Tm = {
  key: 0,
  class: "locations-list"
}, Rm = { class: "location-path mono" }, Lm = {
  key: 0,
  class: "location-modified"
}, zm = ["onClick"], Dm = {
  key: 1,
  class: "empty-state"
}, Um = { class: "detail-section" }, Nm = { class: "section-header" }, Om = {
  key: 0,
  class: "sources-list"
}, Bm = { class: "source-type" }, Am = ["href"], Fm = ["disabled", "onClick"], Vm = {
  key: 1,
  class: "empty-state"
}, Wm = { class: "add-source-form" }, Gm = ["disabled"], jm = {
  key: 2,
  class: "source-error"
}, Hm = {
  key: 3,
  class: "source-success"
}, Km = /* @__PURE__ */ ne({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = t, { getModelDetails: i, addModelSource: f, removeModelSource: p, openFileLocation: u } = We(), m = y(null), d = y(!0), v = y(null), h = y(""), k = y(!1), _ = y(null), b = y(null), R = y(null), E = y(null);
    let $ = null;
    function C(S, L = "success", O = 2e3) {
      $ && clearTimeout($), E.value = { message: S, type: L }, $ = setTimeout(() => {
        E.value = null;
      }, O);
    }
    function N(S) {
      if (!S) return "Unknown";
      const L = 1024 * 1024 * 1024, O = 1024 * 1024;
      return S >= L ? `${(S / L).toFixed(1)} GB` : S >= O ? `${(S / O).toFixed(0)} MB` : `${(S / 1024).toFixed(0)} KB`;
    }
    function x(S) {
      navigator.clipboard.writeText(S), C("Copied to clipboard!");
    }
    async function M(S) {
      try {
        await u(S), C("Opening file location...");
      } catch {
        C("Failed to open location", "error");
      }
    }
    async function q() {
      if (!(!h.value.trim() || !m.value)) {
        k.value = !0, b.value = null, R.value = null;
        try {
          await f(m.value.hash, h.value.trim()), R.value = "Source added successfully!", h.value = "", await W();
        } catch (S) {
          b.value = S instanceof Error ? S.message : "Failed to add source";
        } finally {
          k.value = !1;
        }
      }
    }
    async function A(S) {
      if (m.value) {
        _.value = S, b.value = null, R.value = null;
        try {
          await p(m.value.hash, S), C("Source removed"), await W();
        } catch (L) {
          b.value = L instanceof Error ? L.message : "Failed to remove source";
        } finally {
          _.value = null;
        }
      }
    }
    async function W() {
      d.value = !0, v.value = null;
      try {
        m.value = await i(n.identifier);
      } catch (S) {
        v.value = S instanceof Error ? S.message : "Failed to load model details";
      } finally {
        d.value = !1;
      }
    }
    return Ae(W), (S, L) => {
      var O;
      return s(), o(V, null, [
        w(et, {
          title: `Model Details: ${((O = m.value) == null ? void 0 : O.filename) || "Loading..."}`,
          size: "lg",
          loading: d.value,
          error: v.value,
          onClose: L[5] || (L[5] = (re) => S.$emit("close"))
        }, {
          body: l(() => {
            var re, Z, X, ce;
            return [
              m.value ? (s(), o("div", pm, [
                e("section", gm, [
                  e("div", hm, [
                    L[6] || (L[6] = e("span", { class: "detail-label" }, "Hash:", -1)),
                    e("span", ym, a(m.value.hash || "Not computed"), 1),
                    m.value.hash ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: L[0] || (L[0] = (J) => x(m.value.hash))
                    }, "Copy")) : r("", !0)
                  ]),
                  e("div", wm, [
                    L[7] || (L[7] = e("span", { class: "detail-label" }, "Blake3:", -1)),
                    e("span", km, a(m.value.blake3 || "Not computed"), 1),
                    m.value.blake3 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: L[1] || (L[1] = (J) => x(m.value.blake3))
                    }, "Copy")) : r("", !0)
                  ]),
                  e("div", bm, [
                    L[8] || (L[8] = e("span", { class: "detail-label" }, "SHA256:", -1)),
                    e("span", _m, a(m.value.sha256 || "Not computed"), 1),
                    m.value.sha256 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: L[2] || (L[2] = (J) => x(m.value.sha256))
                    }, "Copy")) : r("", !0)
                  ]),
                  e("div", $m, [
                    L[9] || (L[9] = e("span", { class: "detail-label" }, "Size:", -1)),
                    e("span", Cm, a(N(m.value.size)), 1)
                  ]),
                  e("div", xm, [
                    L[10] || (L[10] = e("span", { class: "detail-label" }, "Category:", -1)),
                    e("span", Sm, a(m.value.category), 1)
                  ]),
                  e("div", Im, [
                    L[11] || (L[11] = e("span", { class: "detail-label" }, "Last Seen:", -1)),
                    e("span", Em, a(m.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                e("section", Mm, [
                  e("h4", Pm, "Locations (" + a(((re = m.value.locations) == null ? void 0 : re.length) || 0) + ")", 1),
                  (Z = m.value.locations) != null && Z.length ? (s(), o("div", Tm, [
                    (s(!0), o(V, null, ae(m.value.locations, (J, D) => (s(), o("div", {
                      key: D,
                      class: "location-item"
                    }, [
                      e("span", Rm, a(J.path), 1),
                      J.modified ? (s(), o("span", Lm, "Modified: " + a(J.modified), 1)) : r("", !0),
                      J.path ? (s(), o("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (z) => M(J.path)
                      }, " Open File Location ", 8, zm)) : r("", !0)
                    ]))), 128))
                  ])) : (s(), o("div", Dm, "No locations found"))
                ]),
                e("section", Um, [
                  e("h4", Nm, "Download Sources (" + a(((X = m.value.sources) == null ? void 0 : X.length) || 0) + ")", 1),
                  (ce = m.value.sources) != null && ce.length ? (s(), o("div", Om, [
                    (s(!0), o(V, null, ae(m.value.sources, (J, D) => (s(), o("div", {
                      key: D,
                      class: "source-item"
                    }, [
                      e("span", Bm, a(J.type) + ":", 1),
                      e("a", {
                        href: J.url,
                        target: "_blank",
                        class: "source-url"
                      }, a(J.url), 9, Am),
                      e("button", {
                        class: "remove-source-btn",
                        disabled: _.value === J.url,
                        onClick: (z) => A(J.url)
                      }, a(_.value === J.url ? "..." : "×"), 9, Fm)
                    ]))), 128))
                  ])) : (s(), o("div", Vm, " No download sources configured ")),
                  e("div", Wm, [
                    Le(e("input", {
                      "onUpdate:modelValue": L[3] || (L[3] = (J) => h.value = J),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [Et, h.value]
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      disabled: !h.value.trim() || k.value,
                      onClick: q
                    }, a(k.value ? "Adding..." : "Add Source"), 9, Gm)
                  ]),
                  b.value ? (s(), o("p", jm, a(b.value), 1)) : r("", !0),
                  R.value ? (s(), o("p", Hm, a(R.value), 1)) : r("", !0)
                ])
              ])) : r("", !0)
            ];
          }),
          footer: l(() => [
            e("button", {
              class: "btn-secondary",
              onClick: L[4] || (L[4] = (re) => S.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (s(), T(He, { to: "body" }, [
          E.value ? (s(), o("div", {
            key: 0,
            class: pe(["toast", E.value.type])
          }, a(E.value.message), 3)) : r("", !0)
        ]))
      ], 64);
    };
  }
}), $s = /* @__PURE__ */ le(Km, [["__scopeId", "data-v-f15cbb56"]]), qm = /* @__PURE__ */ ne({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: c }) {
    const n = c, { getEnvironmentModels: i, getStatus: f } = We(), p = y([]), u = y([]), m = y("production"), d = y(!1), v = y(null), h = y(""), k = y(!1), _ = y(null);
    function b() {
      k.value = !1, n("navigate", "model-index");
    }
    const R = U(
      () => p.value.reduce((W, S) => W + (S.size || 0), 0)
    ), E = U(() => {
      if (!h.value.trim()) return p.value;
      const W = h.value.toLowerCase();
      return p.value.filter((S) => S.filename.toLowerCase().includes(W));
    }), $ = U(() => {
      if (!h.value.trim()) return u.value;
      const W = h.value.toLowerCase();
      return u.value.filter((S) => S.filename.toLowerCase().includes(W));
    }), C = U(() => {
      const W = {};
      for (const L of E.value) {
        const O = L.type || "other";
        W[O] || (W[O] = []), W[O].push(L);
      }
      const S = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(W).sort(([L], [O]) => {
        const re = S.indexOf(L), Z = S.indexOf(O);
        return re >= 0 && Z >= 0 ? re - Z : re >= 0 ? -1 : Z >= 0 ? 1 : L.localeCompare(O);
      }).map(([L, O]) => ({ type: L, models: O }));
    });
    function N(W) {
      if (!W) return "Unknown";
      const S = W / (1024 * 1024);
      return S >= 1024 ? `${(S / 1024).toFixed(1)} GB` : `${S.toFixed(0)} MB`;
    }
    function x(W) {
      _.value = W.hash || W.filename;
    }
    function M(W) {
      n("navigate", "model-index");
    }
    function q(W) {
      alert(`Download functionality not yet implemented for ${W}`);
    }
    async function A() {
      d.value = !0, v.value = null;
      try {
        const W = await i();
        p.value = W, u.value = [];
        const S = await f();
        m.value = S.environment || "production";
      } catch (W) {
        v.value = W instanceof Error ? W.message : "Failed to load models";
      } finally {
        d.value = !1;
      }
    }
    return Ae(A), (W, S) => (s(), o(V, null, [
      w(Je, null, {
        header: l(() => [
          w(Xe, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: S[0] || (S[0] = (L) => k.value = !0)
          })
        ]),
        search: l(() => [
          w(Ut, {
            modelValue: h.value,
            "onUpdate:modelValue": S[1] || (S[1] = (L) => h.value = L),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          d.value ? (s(), T($t, {
            key: 0,
            message: "Loading environment models..."
          })) : v.value ? (s(), T(Ct, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: A
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            p.value.length ? (s(), T(Yt, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                g(" Total: " + a(p.value.length) + " models • " + a(N(R.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : r("", !0),
            (s(!0), o(V, null, ae(C.value, (L) => (s(), T(De, {
              key: L.type,
              title: L.type.toUpperCase(),
              count: L.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(V, null, ae(L.models, (O) => (s(), T(Ye, {
                  key: O.hash || O.filename,
                  status: "synced"
                }, {
                  icon: l(() => [...S[4] || (S[4] = [
                    g("📦", -1)
                  ])]),
                  title: l(() => [
                    g(a(O.filename), 1)
                  ]),
                  subtitle: l(() => [
                    g(a(N(O.size)), 1)
                  ]),
                  details: l(() => [
                    w(Be, {
                      label: "Used by:",
                      value: (O.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    w(Be, {
                      label: "Path:",
                      value: O.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    w(oe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (re) => x(O)
                    }, {
                      default: l(() => [...S[5] || (S[5] = [
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
            $.value.length ? (s(), T(De, {
              key: 1,
              title: "MISSING",
              count: $.value.length
            }, {
              default: l(() => [
                (s(!0), o(V, null, ae($.value, (L) => (s(), T(Ye, {
                  key: L.filename,
                  status: "broken"
                }, {
                  icon: l(() => [...S[6] || (S[6] = [
                    g("⚠", -1)
                  ])]),
                  title: l(() => [
                    g(a(L.filename), 1)
                  ]),
                  subtitle: l(() => [...S[7] || (S[7] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: l(() => {
                    var O;
                    return [
                      w(Be, {
                        label: "Required by:",
                        value: ((O = L.workflow_names) == null ? void 0 : O.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: l(() => [
                    w(oe, {
                      variant: "primary",
                      size: "sm",
                      onClick: (O) => q(L.filename)
                    }, {
                      default: l(() => [...S[8] || (S[8] = [
                        g(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    w(oe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (O) => M(L.filename)
                    }, {
                      default: l(() => [...S[9] || (S[9] = [
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
            !E.value.length && !$.value.length ? (s(), T(ut, {
              key: 2,
              icon: "📭",
              message: h.value ? `No models match '${h.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : r("", !0)
          ], 64))
        ]),
        _: 1
      }),
      w(mt, {
        show: k.value,
        title: "About Environment Models",
        onClose: S[2] || (S[2] = (L) => k.value = !1)
      }, {
        content: l(() => [
          e("p", null, [
            S[10] || (S[10] = g(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + a(m.value) + '"', 1),
            S[11] || (S[11] = g(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: l(() => [
          w(oe, {
            variant: "primary",
            onClick: b
          }, {
            default: l(() => [...S[12] || (S[12] = [
              g(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      _.value ? (s(), T($s, {
        key: 0,
        identifier: _.value,
        onClose: S[3] || (S[3] = (L) => _.value = null)
      }, null, 8, ["identifier"])) : r("", !0)
    ], 64));
  }
}), Ym = /* @__PURE__ */ le(qm, [["__scopeId", "data-v-cb4f12b3"]]), Jm = {
  key: 0,
  class: "indexing-progress"
}, Xm = { class: "progress-info" }, Qm = { class: "progress-label" }, Zm = { class: "progress-count" }, ev = { class: "progress-bar" }, tv = { class: "modal-content" }, sv = { class: "modal-header" }, ov = { class: "modal-body" }, nv = { class: "input-group" }, av = { class: "current-path" }, lv = { class: "input-group" }, iv = { class: "modal-footer" }, rv = { class: "modal-content" }, dv = { class: "modal-header" }, cv = { class: "modal-body" }, uv = { class: "input-group" }, mv = { class: "input-group" }, vv = { class: "modal-footer" }, fv = /* @__PURE__ */ ne({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(t, { emit: c }) {
    const {
      getWorkspaceModels: n,
      scanWorkspaceModels: i,
      getModelsDirectory: f,
      setModelsDirectory: p
    } = We(), { addToQueue: u } = qt(), m = c, d = y([]), v = y(!1), h = y(!1), k = y(null), _ = y(""), b = y(!1), R = y(null), E = y(!1), $ = y(null), C = y(""), N = y(!1), x = y(!1), M = y(""), q = y(""), A = y(null), W = U(
      () => d.value.reduce((z, I) => z + (I.size || 0), 0)
    ), S = U(() => {
      if (!_.value.trim()) return d.value;
      const z = _.value.toLowerCase();
      return d.value.filter((I) => {
        const ue = I, ee = I.sha256 || ue.sha256_hash || "";
        return I.filename.toLowerCase().includes(z) || ee.toLowerCase().includes(z);
      });
    }), L = U(() => {
      const z = {};
      for (const ue of S.value) {
        const ee = ue.type || "other";
        z[ee] || (z[ee] = []), z[ee].push(ue);
      }
      const I = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(z).sort(([ue], [ee]) => {
        const he = I.indexOf(ue), Ce = I.indexOf(ee);
        return he >= 0 && Ce >= 0 ? he - Ce : he >= 0 ? -1 : Ce >= 0 ? 1 : ue.localeCompare(ee);
      }).map(([ue, ee]) => ({ type: ue, models: ee }));
    });
    function O(z) {
      if (!z) return "Unknown";
      const I = 1024 * 1024 * 1024, ue = 1024 * 1024;
      return z >= I ? `${(z / I).toFixed(1)} GB` : z >= ue ? `${(z / ue).toFixed(0)} MB` : `${(z / 1024).toFixed(0)} KB`;
    }
    function re(z) {
      R.value = z.hash || z.filename;
    }
    async function Z() {
      h.value = !0, k.value = null;
      try {
        const z = await i();
        await J(), z.changes > 0 && console.log(`Scan complete: ${z.changes} changes detected`);
      } catch (z) {
        k.value = z instanceof Error ? z.message : "Failed to scan models";
      } finally {
        h.value = !1;
      }
    }
    async function X() {
      if (C.value.trim()) {
        N.value = !0, k.value = null;
        try {
          const z = await p(C.value.trim());
          $.value = z.path, E.value = !1, C.value = "", await J(), console.log(`Directory changed: ${z.models_indexed} models indexed`), m("refresh");
        } catch (z) {
          k.value = z instanceof Error ? z.message : "Failed to change directory";
        } finally {
          N.value = !1;
        }
      }
    }
    function ce() {
      if (!M.value.trim() || !q.value.trim()) return;
      const z = q.value.split("/").pop() || "model.safetensors";
      u([{
        workflow: "__manual__",
        filename: z,
        url: M.value.trim(),
        targetPath: q.value.trim()
      }]), M.value = "", q.value = "", x.value = !1;
    }
    async function J() {
      v.value = !0, k.value = null;
      try {
        d.value = await n();
      } catch (z) {
        k.value = z instanceof Error ? z.message : "Failed to load workspace models";
      } finally {
        v.value = !1;
      }
    }
    async function D() {
      try {
        const z = await f();
        $.value = z.path;
      } catch {
      }
    }
    return Ae(() => {
      J(), D();
    }), (z, I) => (s(), o(V, null, [
      w(Je, null, {
        header: l(() => [
          w(Xe, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: I[2] || (I[2] = (ue) => b.value = !0)
          }, {
            actions: l(() => [
              w(oe, {
                variant: "primary",
                size: "sm",
                disabled: h.value,
                onClick: Z
              }, {
                default: l(() => [
                  g(a(h.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              w(oe, {
                variant: "primary",
                size: "sm",
                onClick: I[0] || (I[0] = (ue) => E.value = !0)
              }, {
                default: l(() => [...I[15] || (I[15] = [
                  g(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              w(oe, {
                variant: "primary",
                size: "sm",
                onClick: I[1] || (I[1] = (ue) => x.value = !0)
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
                style: _t({ width: `${A.value.current / A.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : r("", !0),
          w(Ut, {
            modelValue: _.value,
            "onUpdate:modelValue": I[3] || (I[3] = (ue) => _.value = ue),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          v.value || A.value ? (s(), T($t, {
            key: 0,
            message: A.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : k.value ? (s(), T(Ct, {
            key: 1,
            message: k.value,
            retry: !0,
            onRetry: J
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            d.value.length ? (s(), T(Yt, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                g(" Total: " + a(d.value.length) + " models • " + a(O(W.value)), 1)
              ]),
              _: 1
            })) : r("", !0),
            (s(!0), o(V, null, ae(L.value, (ue) => (s(), T(De, {
              key: ue.type,
              title: ue.type.toUpperCase(),
              count: ue.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: l(() => [
                (s(!0), o(V, null, ae(ue.models, (ee) => (s(), T(Ye, {
                  key: ee.sha256 || ee.filename,
                  status: "synced"
                }, {
                  icon: l(() => [...I[17] || (I[17] = [
                    g("📦", -1)
                  ])]),
                  title: l(() => [
                    g(a(ee.filename), 1)
                  ]),
                  subtitle: l(() => [
                    g(a(O(ee.size)), 1)
                  ]),
                  details: l(() => [
                    w(Be, {
                      label: "Hash:",
                      value: ee.hash ? ee.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    w(oe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (he) => re(ee)
                    }, {
                      default: l(() => [...I[18] || (I[18] = [
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
            S.value.length ? r("", !0) : (s(), T(ut, {
              key: 1,
              icon: "📭",
              message: _.value ? `No models match '${_.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      w(mt, {
        show: b.value,
        title: "About Workspace Model Index",
        onClose: I[4] || (I[4] = (ue) => b.value = !1)
      }, {
        content: l(() => [...I[19] || (I[19] = [
          e("p", null, [
            g(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            g(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      R.value ? (s(), T($s, {
        key: 0,
        identifier: R.value,
        onClose: I[5] || (I[5] = (ue) => R.value = null)
      }, null, 8, ["identifier"])) : r("", !0),
      (s(), T(He, { to: "body" }, [
        E.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: I[9] || (I[9] = Ue((ue) => E.value = !1, ["self"]))
        }, [
          e("div", tv, [
            e("div", sv, [
              I[20] || (I[20] = e("h3", null, "Change Models Directory", -1)),
              e("button", {
                class: "modal-close",
                onClick: I[6] || (I[6] = (ue) => E.value = !1)
              }, "✕")
            ]),
            e("div", ov, [
              e("div", nv, [
                I[21] || (I[21] = e("label", null, "Current Directory", -1)),
                e("code", av, a($.value || "Not set"), 1)
              ]),
              e("div", lv, [
                I[22] || (I[22] = e("label", null, "New Directory Path", -1)),
                w(ct, {
                  modelValue: C.value,
                  "onUpdate:modelValue": I[7] || (I[7] = (ue) => C.value = ue),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              I[23] || (I[23] = e("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            e("div", iv, [
              w(ge, {
                variant: "secondary",
                onClick: I[8] || (I[8] = (ue) => E.value = !1)
              }, {
                default: l(() => [...I[24] || (I[24] = [
                  g(" Cancel ", -1)
                ])]),
                _: 1
              }),
              w(ge, {
                variant: "primary",
                disabled: !C.value.trim() || N.value,
                loading: N.value,
                onClick: X
              }, {
                default: l(() => [
                  g(a(N.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : r("", !0)
      ])),
      (s(), T(He, { to: "body" }, [
        x.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: I[14] || (I[14] = Ue((ue) => x.value = !1, ["self"]))
        }, [
          e("div", rv, [
            e("div", dv, [
              I[25] || (I[25] = e("h3", null, "Download New Model", -1)),
              e("button", {
                class: "modal-close",
                onClick: I[10] || (I[10] = (ue) => x.value = !1)
              }, "✕")
            ]),
            e("div", cv, [
              e("div", uv, [
                I[26] || (I[26] = e("label", null, "Download URL", -1)),
                w(ct, {
                  modelValue: M.value,
                  "onUpdate:modelValue": I[11] || (I[11] = (ue) => M.value = ue),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              e("div", mv, [
                I[27] || (I[27] = e("label", null, "Target Path (relative to models directory)", -1)),
                w(ct, {
                  modelValue: q.value,
                  "onUpdate:modelValue": I[12] || (I[12] = (ue) => q.value = ue),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              I[28] || (I[28] = e("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            e("div", vv, [
              w(ge, {
                variant: "secondary",
                onClick: I[13] || (I[13] = (ue) => x.value = !1)
              }, {
                default: l(() => [...I[29] || (I[29] = [
                  g(" Cancel ", -1)
                ])]),
                _: 1
              }),
              w(ge, {
                variant: "primary",
                disabled: !M.value.trim() || !q.value.trim(),
                onClick: ce
              }, {
                default: l(() => [...I[30] || (I[30] = [
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
}), pv = /* @__PURE__ */ le(fv, [["__scopeId", "data-v-73b78d84"]]), gv = { class: "node-details" }, hv = { class: "status-row" }, yv = {
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
}, Iv = { class: "value mono small" }, Ev = { class: "detail-row" }, Mv = {
  key: 0,
  class: "value"
}, Pv = {
  key: 1,
  class: "workflow-list"
}, Tv = /* @__PURE__ */ ne({
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
    return (m, d) => (s(), T(et, {
      title: `NODE DETAILS: ${t.node.name}`,
      size: "md",
      onClose: d[1] || (d[1] = (v) => i("close"))
    }, {
      body: l(() => [
        e("div", gv, [
          e("div", hv, [
            d[2] || (d[2] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: pe(["status-badge", f.value])
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
            !t.node.used_in_workflows || t.node.used_in_workflows.length === 0 ? (s(), o("span", Mv, " Not used in any workflows ")) : (s(), o("div", Pv, [
              (s(!0), o(V, null, ae(t.node.used_in_workflows, (v) => (s(), o("span", {
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
}), Rv = /* @__PURE__ */ le(Tv, [["__scopeId", "data-v-b342f626"]]), Lv = { class: "dialog-message" }, zv = {
  key: 0,
  class: "dialog-details"
}, Dv = {
  key: 1,
  class: "dialog-warning"
}, Uv = /* @__PURE__ */ ne({
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
    return (c, n) => (s(), T(et, {
      title: t.title,
      size: "sm",
      onClose: n[3] || (n[3] = (i) => c.$emit("cancel"))
    }, {
      body: l(() => [
        e("p", Lv, a(t.message), 1),
        t.details && t.details.length ? (s(), o("div", zv, [
          (s(!0), o(V, null, ae(t.details, (i, f) => (s(), o("div", {
            key: f,
            class: "detail-item"
          }, " • " + a(i), 1))), 128))
        ])) : r("", !0),
        t.warning ? (s(), o("p", Dv, [
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
        t.secondaryAction ? (s(), T(ge, {
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
}), Ks = /* @__PURE__ */ le(Uv, [["__scopeId", "data-v-3670b9f5"]]), Nv = { class: "mismatch-warning" }, Ov = { class: "version-mismatch" }, Bv = { class: "version-actual" }, Av = { class: "version-expected" }, Fv = { key: 0 }, Vv = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, Wv = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, Gv = /* @__PURE__ */ ne({
  __name: "NodesSection",
  props: {
    versionMismatches: { default: () => [] }
  },
  emits: ["open-node-manager", "repair-environment", "toast"],
  setup(t, { emit: c }) {
    const n = t, i = c, { getNodes: f, trackNodeAsDev: p, installNode: u, uninstallNode: m } = We(), d = y({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), v = y(!1), h = y(null), k = y(""), _ = y(!1), b = y(null), R = y(null), E = U(() => {
      if (!k.value.trim()) return d.value.nodes;
      const Z = k.value.toLowerCase();
      return d.value.nodes.filter(
        (X) => {
          var ce, J;
          return X.name.toLowerCase().includes(Z) || ((ce = X.description) == null ? void 0 : ce.toLowerCase().includes(Z)) || ((J = X.repository) == null ? void 0 : J.toLowerCase().includes(Z));
        }
      );
    }), $ = U(
      () => E.value.filter((Z) => Z.installed && Z.tracked)
    ), C = U(
      () => E.value.filter((Z) => !Z.installed && Z.tracked)
    ), N = U(
      () => E.value.filter((Z) => Z.installed && !Z.tracked)
    );
    function x(Z) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[Z] || Z;
    }
    const M = U(() => n.versionMismatches.length > 0);
    function q(Z) {
      return !Z.used_in_workflows || Z.used_in_workflows.length === 0 ? "Not used in any workflows" : Z.used_in_workflows.length === 1 ? Z.used_in_workflows[0] : `${Z.used_in_workflows.length} workflows`;
    }
    function A(Z) {
      b.value = Z;
    }
    function W() {
      i("open-node-manager");
    }
    function S(Z) {
      R.value = {
        title: "Track as Development Node",
        message: `Track "${Z}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          R.value = null;
          try {
            v.value = !0;
            const X = await p(Z);
            X.status === "success" ? (i("toast", `✓ Node "${Z}" tracked as development`, "success"), await re()) : i("toast", `Failed to track node: ${X.message || "Unknown error"}`, "error");
          } catch (X) {
            i("toast", `Error tracking node: ${X instanceof Error ? X.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    function L(Z) {
      R.value = {
        title: "Remove Untracked Node",
        message: `Remove "${Z}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          R.value = null;
          try {
            v.value = !0;
            const X = await m(Z);
            X.status === "success" ? (i("toast", `✓ Node "${Z}" removed`, "success"), await re()) : i("toast", `Failed to remove node: ${X.message || "Unknown error"}`, "error");
          } catch (X) {
            i("toast", `Error removing node: ${X instanceof Error ? X.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    function O(Z) {
      R.value = {
        title: "Install Missing Node",
        message: `Install "${Z}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          R.value = null;
          try {
            v.value = !0;
            const X = await u(Z);
            X.status === "success" ? (i("toast", `✓ Node "${Z}" installed`, "success"), await re()) : i("toast", `Failed to install node: ${X.message || "Unknown error"}`, "error");
          } catch (X) {
            i("toast", `Error installing node: ${X instanceof Error ? X.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    async function re() {
      v.value = !0, h.value = null;
      try {
        d.value = await f();
      } catch (Z) {
        h.value = Z instanceof Error ? Z.message : "Failed to load nodes";
      } finally {
        v.value = !1;
      }
    }
    return Ae(re), (Z, X) => (s(), o(V, null, [
      w(Je, null, {
        header: l(() => [
          w(Xe, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: X[0] || (X[0] = (ce) => _.value = !0)
          }, {
            actions: l(() => [
              w(oe, {
                variant: "primary",
                size: "sm",
                onClick: W
              }, {
                default: l(() => [...X[7] || (X[7] = [
                  g(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          w(Ut, {
            modelValue: k.value,
            "onUpdate:modelValue": X[1] || (X[1] = (ce) => k.value = ce),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          v.value ? (s(), T($t, {
            key: 0,
            message: "Loading nodes..."
          })) : h.value ? (s(), T(Ct, {
            key: 1,
            message: h.value,
            retry: !0,
            onRetry: re
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            d.value.total_count ? (s(), T(Yt, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                g(a(d.value.installed_count) + " installed ", 1),
                d.value.missing_count ? (s(), o(V, { key: 0 }, [
                  g(" • " + a(d.value.missing_count) + " missing", 1)
                ], 64)) : r("", !0),
                d.value.untracked_count ? (s(), o(V, { key: 1 }, [
                  g(" • " + a(d.value.untracked_count) + " untracked", 1)
                ], 64)) : r("", !0)
              ]),
              _: 1
            })) : r("", !0),
            M.value ? (s(), T(De, {
              key: 1,
              title: "VERSION MISMATCHES",
              count: t.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                e("div", Nv, [
                  X[8] || (X[8] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, a(t.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (s(!0), o(V, null, ae(t.versionMismatches, (ce) => (s(), T(Ye, {
                  key: ce.name,
                  status: "warning"
                }, {
                  icon: l(() => [...X[9] || (X[9] = [
                    g("⚠", -1)
                  ])]),
                  title: l(() => [
                    g(a(ce.name), 1)
                  ]),
                  subtitle: l(() => [
                    e("span", Ov, [
                      e("span", Bv, a(ce.actual), 1),
                      X[10] || (X[10] = e("span", { class: "version-arrow" }, "→", -1)),
                      e("span", Av, a(ce.expected), 1)
                    ])
                  ]),
                  actions: l(() => [
                    w(oe, {
                      variant: "warning",
                      size: "sm",
                      onClick: X[2] || (X[2] = (J) => i("repair-environment"))
                    }, {
                      default: l(() => [...X[11] || (X[11] = [
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
            N.value.length ? (s(), T(De, {
              key: 2,
              title: "UNTRACKED",
              count: N.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(V, null, ae(N.value, (ce) => (s(), T(Ye, {
                  key: ce.name,
                  status: "warning"
                }, {
                  icon: l(() => [...X[12] || (X[12] = [
                    g("?", -1)
                  ])]),
                  title: l(() => [
                    g(a(ce.name), 1)
                  ]),
                  subtitle: l(() => [...X[13] || (X[13] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: l(() => [
                    w(Be, {
                      label: "Used by:",
                      value: q(ce)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    w(oe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (J) => A(ce)
                    }, {
                      default: l(() => [...X[14] || (X[14] = [
                        g(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    w(oe, {
                      variant: "primary",
                      size: "sm",
                      onClick: (J) => S(ce.name)
                    }, {
                      default: l(() => [...X[15] || (X[15] = [
                        g(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    w(oe, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (J) => L(ce.name)
                    }, {
                      default: l(() => [...X[16] || (X[16] = [
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
            $.value.length ? (s(), T(De, {
              key: 3,
              title: "INSTALLED",
              count: $.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(V, null, ae($.value, (ce) => (s(), T(Ye, {
                  key: ce.name,
                  status: "synced"
                }, {
                  icon: l(() => [
                    g(a(ce.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: l(() => [
                    g(a(ce.name), 1)
                  ]),
                  subtitle: l(() => [
                    ce.version ? (s(), o("span", Fv, a(ce.source === "development" ? "" : "v") + a(ce.version), 1)) : (s(), o("span", Vv, "version unknown")),
                    e("span", Wv, " • " + a(x(ce.source)), 1)
                  ]),
                  details: l(() => [
                    w(Be, {
                      label: "Used by:",
                      value: q(ce)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    w(oe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (J) => A(ce)
                    }, {
                      default: l(() => [...X[17] || (X[17] = [
                        g(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    w(oe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: W
                    }, {
                      default: l(() => [...X[18] || (X[18] = [
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
            C.value.length ? (s(), T(De, {
              key: 4,
              title: "MISSING",
              count: C.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(V, null, ae(C.value, (ce) => (s(), T(Ye, {
                  key: ce.name,
                  status: "missing"
                }, {
                  icon: l(() => [...X[19] || (X[19] = [
                    g("!", -1)
                  ])]),
                  title: l(() => [
                    g(a(ce.name), 1)
                  ]),
                  subtitle: l(() => [...X[20] || (X[20] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: l(() => [
                    w(Be, {
                      label: "Required by:",
                      value: q(ce)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    w(oe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (J) => A(ce)
                    }, {
                      default: l(() => [...X[21] || (X[21] = [
                        g(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    w(oe, {
                      variant: "primary",
                      size: "sm",
                      onClick: (J) => O(ce.name)
                    }, {
                      default: l(() => [...X[22] || (X[22] = [
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
            !$.value.length && !C.value.length && !N.value.length ? (s(), T(ut, {
              key: 5,
              icon: "📭",
              message: k.value ? `No nodes match '${k.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : r("", !0)
          ], 64))
        ]),
        _: 1
      }),
      w(mt, {
        show: _.value,
        title: "About Custom Nodes",
        onClose: X[4] || (X[4] = (ce) => _.value = !1)
      }, {
        content: l(() => [...X[23] || (X[23] = [
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
          w(oe, {
            variant: "primary",
            onClick: X[3] || (X[3] = (ce) => _.value = !1)
          }, {
            default: l(() => [...X[24] || (X[24] = [
              g(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      b.value ? (s(), T(Rv, {
        key: 0,
        node: b.value,
        onClose: X[5] || (X[5] = (ce) => b.value = null)
      }, null, 8, ["node"])) : r("", !0),
      R.value ? (s(), T(Ks, {
        key: 1,
        title: R.value.title,
        message: R.value.message,
        warning: R.value.warning,
        "confirm-label": R.value.confirmLabel,
        destructive: R.value.destructive,
        onConfirm: R.value.onConfirm,
        onCancel: X[6] || (X[6] = (ce) => R.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : r("", !0)
    ], 64));
  }
}), jv = /* @__PURE__ */ le(Gv, [["__scopeId", "data-v-1555a802"]]);
function qs(t) {
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
}, Xv = /* @__PURE__ */ ne({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const c = t, n = y(!1), i = U(() => {
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
        class: pe(["copy-btn", { copied: n.value }]),
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
}), Qv = /* @__PURE__ */ le(Xv, [["__scopeId", "data-v-7768a58d"]]), Zv = { class: "remote-title" }, ef = {
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
}, rf = /* @__PURE__ */ ne({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(t) {
    const c = t, n = U(() => c.fetchingRemote === c.remote.name), i = U(() => c.remote.is_default), f = U(() => c.syncStatus && c.syncStatus.behind > 0), p = U(() => c.syncStatus && c.syncStatus.ahead > 0), u = U(() => c.remote.push_url !== c.remote.fetch_url), m = U(() => {
      const v = c.remote.fetch_url, h = v.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return h ? `https://${h[1]}/${h[2]}` : v.startsWith("https://") || v.startsWith("http://") ? v.replace(/\.git$/, "") : null;
    }), d = U(() => c.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (v, h) => (s(), T(Ye, {
      status: i.value ? "synced" : void 0
    }, Dt({
      icon: l(() => [
        g(a(i.value ? "🔗" : "🌐"), 1)
      ]),
      title: l(() => [
        e("div", Zv, [
          e("span", null, a(t.remote.name), 1),
          i.value ? (s(), o("span", ef, "DEFAULT")) : r("", !0),
          t.syncStatus ? (s(), o("span", tf, [
            t.syncStatus.ahead > 0 || t.syncStatus.behind > 0 ? (s(), o(V, { key: 0 }, [
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
          onClick: h[0] || (h[0] = Ue(() => {
          }, ["stop"]))
        }, a(d.value), 9, af)) : (s(), o("span", lf, a(d.value), 1))
      ]),
      actions: l(() => [
        w(oe, {
          variant: "primary",
          size: "xs",
          loading: n.value,
          onClick: h[1] || (h[1] = (k) => v.$emit("fetch", t.remote.name))
        }, {
          default: l(() => [...h[6] || (h[6] = [
            g(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        w(oe, {
          variant: f.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: h[2] || (h[2] = (k) => v.$emit("pull", t.remote.name))
        }, {
          default: l(() => [
            g(" Pull" + a(t.syncStatus && t.syncStatus.behind > 0 ? ` ↓${t.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        w(oe, {
          variant: p.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: h[3] || (h[3] = (k) => v.$emit("push", t.remote.name))
        }, {
          default: l(() => [
            g(" Push" + a(t.syncStatus && t.syncStatus.ahead > 0 ? ` ↑${t.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        w(oe, {
          variant: "secondary",
          size: "xs",
          onClick: h[4] || (h[4] = (k) => v.$emit("edit", t.remote.name))
        }, {
          default: l(() => [...h[7] || (h[7] = [
            g(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        i.value ? r("", !0) : (s(), T(oe, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: h[5] || (h[5] = (k) => v.$emit("remove", t.remote.name))
        }, {
          default: l(() => [...h[8] || (h[8] = [
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
          t.remote.push_url !== t.remote.fetch_url ? (s(), T(Be, {
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
}), df = /* @__PURE__ */ le(rf, [["__scopeId", "data-v-8310f3a8"]]), cf = ["for"], uf = {
  key: 0,
  class: "base-form-field-required"
}, mf = { class: "base-form-field-input" }, vf = {
  key: 1,
  class: "base-form-field-error"
}, ff = {
  key: 2,
  class: "base-form-field-hint"
}, pf = /* @__PURE__ */ ne({
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
      class: pe(["base-form-field", { "full-width": t.fullWidth }])
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
        Ee(i.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (s(), o("span", vf, a(t.error), 1)) : t.hint ? (s(), o("span", ff, a(t.hint), 1)) : r("", !0)
    ], 2));
  }
}), vs = /* @__PURE__ */ le(pf, [["__scopeId", "data-v-9a1cf296"]]), gf = { class: "remote-form" }, hf = { class: "form-header" }, yf = { class: "form-body" }, wf = {
  key: 0,
  class: "form-error"
}, kf = { class: "form-actions" }, bf = /* @__PURE__ */ ne({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: c }) {
    const n = t, i = c, f = y({
      name: n.remoteName,
      fetchUrl: n.fetchUrl,
      pushUrl: n.pushUrl
    }), p = y(!1), u = y(null);
    gt(() => [n.remoteName, n.fetchUrl, n.pushUrl], () => {
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
    return (v, h) => (s(), o("div", gf, [
      e("div", hf, [
        w(at, null, {
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
            w(ct, {
              modelValue: f.value.name,
              "onUpdate:modelValue": h[0] || (h[0] = (k) => f.value.name = k),
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
            w(ct, {
              modelValue: f.value.fetchUrl,
              "onUpdate:modelValue": h[1] || (h[1] = (k) => f.value.fetchUrl = k),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        w(vs, { label: "Push URL (optional)" }, {
          default: l(() => [
            w(ct, {
              modelValue: f.value.pushUrl,
              "onUpdate:modelValue": h[2] || (h[2] = (k) => f.value.pushUrl = k),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        u.value ? (s(), o("div", wf, a(u.value), 1)) : r("", !0)
      ]),
      e("div", kf, [
        w(oe, {
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
        w(oe, {
          variant: "ghost",
          size: "md",
          onClick: h[3] || (h[3] = (k) => v.$emit("cancel"))
        }, {
          default: l(() => [...h[4] || (h[4] = [
            g(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), _f = /* @__PURE__ */ le(bf, [["__scopeId", "data-v-56021b18"]]), $f = { class: "conflict-summary-box" }, Cf = { class: "summary-header" }, xf = { class: "summary-text" }, Sf = { key: 0 }, If = {
  key: 1,
  class: "all-resolved"
}, Ef = { class: "summary-progress" }, Mf = { class: "progress-bar" }, Pf = { class: "progress-text" }, Tf = /* @__PURE__ */ ne({
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
        e("div", Mf, [
          e("div", {
            class: "progress-fill",
            style: _t({ width: n.value + "%" })
          }, null, 4)
        ]),
        e("span", Pf, a(t.resolvedCount) + " / " + a(t.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), Rf = /* @__PURE__ */ le(Tf, [["__scopeId", "data-v-4e9e6cc9"]]), Lf = { class: "modal-header" }, zf = { class: "modal-title" }, Df = { class: "modal-body" }, Uf = {
  key: 0,
  class: "error-box"
}, Nf = {
  key: 0,
  class: "error-hint"
}, Of = {
  key: 1,
  class: "loading-state"
}, Bf = { class: "commit-summary" }, Af = {
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
}, op = { class: "modal-actions" }, zs = "comfygit.pullModelStrategy", np = /* @__PURE__ */ ne({
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
    const n = t, i = c, f = y(localStorage.getItem(zs) || "skip");
    gt(f, ($) => {
      localStorage.setItem(zs, $);
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
    }), v = U(() => n.preview && qs(n.preview) ? n.preview : null), h = U(() => {
      var $;
      return (($ = v.value) == null ? void 0 : $.workflow_conflicts.length) ?? 0;
    }), k = U(() => {
      var $;
      return (($ = n.conflictResolutions) == null ? void 0 : $.size) ?? 0;
    }), _ = U(
      () => h.value > 0 && k.value === h.value
    ), b = U(() => !(!n.preview || n.preview.has_uncommitted_changes || v.value && !_.value));
    function R($) {
      if (!v.value) return !1;
      const C = $.replace(/\.json$/, "");
      return v.value.workflow_conflicts.some((N) => N.name === C);
    }
    function E($) {
      const C = n.conflictResolutions ? Array.from(n.conflictResolutions.values()) : void 0;
      i("pull", { modelStrategy: f.value, force: $, resolutions: C });
    }
    return ($, C) => {
      var N, x;
      return s(), T(He, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: C[11] || (C[11] = (M) => $.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: C[10] || (C[10] = Ue(() => {
            }, ["stop"]))
          }, [
            e("div", Lf, [
              e("h3", zf, "PULL FROM " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: C[0] || (C[0] = (M) => $.$emit("close"))
              }, "✕")
            ]),
            e("div", Df, [
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
              ])])) : (N = t.preview) != null && N.has_uncommitted_changes ? (s(), o(V, { key: 2 }, [
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
              ], 64)) : t.preview ? (s(), o(V, { key: 3 }, [
                e("div", Bf, [
                  C[17] || (C[17] = e("span", { class: "icon" }, "📥", -1)),
                  g(" " + a(t.preview.commits_behind) + " commit" + a(t.preview.commits_behind !== 1 ? "s" : "") + " from " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                d.value ? (s(), o("div", Af, [
                  C[21] || (C[21] = e("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  u.value > 0 ? (s(), o("details", Ff, [
                    e("summary", null, [
                      C[18] || (C[18] = e("span", { class: "change-type" }, "Workflows", -1)),
                      e("span", Vf, a(u.value) + " changes", 1)
                    ]),
                    e("div", Wf, [
                      (s(!0), o(V, null, ae(t.preview.changes.workflows.added, (M) => (s(), o("div", {
                        key: "a-" + M,
                        class: "change-item add"
                      }, " + " + a(M), 1))), 128)),
                      (s(!0), o(V, null, ae(t.preview.changes.workflows.modified, (M) => (s(), o("div", {
                        key: "m-" + M,
                        class: "change-item modify"
                      }, [
                        g(" ~ " + a(M) + " ", 1),
                        R(M) ? (s(), o("span", Gf, "CONFLICT")) : r("", !0)
                      ]))), 128)),
                      (s(!0), o(V, null, ae(t.preview.changes.workflows.deleted, (M) => (s(), o("div", {
                        key: "d-" + M,
                        class: "change-item delete"
                      }, " - " + a(M), 1))), 128))
                    ])
                  ])) : r("", !0),
                  m.value > 0 ? (s(), o("details", jf, [
                    e("summary", null, [
                      C[19] || (C[19] = e("span", { class: "change-type" }, "Nodes", -1)),
                      e("span", Hf, a(m.value) + " to install", 1)
                    ]),
                    e("div", Kf, [
                      (s(!0), o(V, null, ae(t.preview.changes.nodes.to_install, (M) => (s(), o("div", {
                        key: M,
                        class: "change-item add"
                      }, " + " + a(M), 1))), 128))
                    ])
                  ])) : r("", !0),
                  t.preview.changes.models.count > 0 ? (s(), o("details", qf, [
                    e("summary", null, [
                      C[20] || (C[20] = e("span", { class: "change-type" }, "Models", -1)),
                      e("span", Yf, a(t.preview.changes.models.count) + " referenced", 1)
                    ]),
                    e("div", Jf, [
                      (s(!0), o(V, null, ae(t.preview.changes.models.referenced, (M) => (s(), o("div", {
                        key: M,
                        class: "change-item"
                      }, a(M), 1))), 128))
                    ])
                  ])) : r("", !0)
                ])) : r("", !0),
                v.value ? (s(), T(Rf, {
                  key: 1,
                  "conflict-count": h.value,
                  "resolved-count": k.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : r("", !0),
                t.preview.changes.models.count > 0 ? (s(), o("div", Xf, [
                  C[26] || (C[26] = e("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  e("div", Qf, [
                    e("label", Zf, [
                      Le(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[1] || (C[1] = (M) => f.value = M),
                        value: "all"
                      }, null, 512), [
                        [St, f.value]
                      ]),
                      C[22] || (C[22] = e("span", null, "Download all models", -1))
                    ]),
                    e("label", ep, [
                      Le(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[2] || (C[2] = (M) => f.value = M),
                        value: "required"
                      }, null, 512), [
                        [St, f.value]
                      ]),
                      C[23] || (C[23] = e("span", null, "Download required only", -1))
                    ]),
                    e("label", tp, [
                      Le(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[3] || (C[3] = (M) => f.value = M),
                        value: "skip"
                      }, null, 512), [
                        [St, f.value]
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
              w(oe, {
                variant: "secondary",
                onClick: C[4] || (C[4] = (M) => $.$emit("close"))
              }, {
                default: l(() => [...C[29] || (C[29] = [
                  g(" Cancel ", -1)
                ])]),
                _: 1
              }),
              t.error ? (s(), o(V, { key: 0 }, [
                w(oe, {
                  variant: "secondary",
                  loading: t.pulling,
                  onClick: C[5] || (C[5] = (M) => E(!1))
                }, {
                  default: l(() => [...C[30] || (C[30] = [
                    g(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                w(oe, {
                  variant: "destructive",
                  loading: t.pulling,
                  onClick: C[6] || (C[6] = (M) => E(!0))
                }, {
                  default: l(() => [...C[31] || (C[31] = [
                    g(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (x = t.preview) != null && x.has_uncommitted_changes ? (s(), T(oe, {
                key: 1,
                variant: "destructive",
                loading: t.pulling,
                onClick: C[7] || (C[7] = (M) => E(!0))
              }, {
                default: l(() => [...C[32] || (C[32] = [
                  g(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : t.preview && t.preview.commits_behind > 0 ? (s(), o(V, { key: 2 }, [
                v.value && !_.value ? (s(), T(oe, {
                  key: 0,
                  variant: "primary",
                  onClick: C[8] || (C[8] = (M) => i("openConflictResolution"))
                }, {
                  default: l(() => [
                    g(" Resolve Conflicts (" + a(k.value) + "/" + a(h.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (s(), T(oe, {
                  key: 1,
                  variant: "primary",
                  loading: t.pulling,
                  disabled: !b.value,
                  onClick: C[9] || (C[9] = (M) => E(!1))
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
}), ap = /* @__PURE__ */ le(np, [["__scopeId", "data-v-300c7b2f"]]), lp = { class: "modal-header" }, ip = { class: "modal-title" }, rp = { class: "modal-body" }, dp = {
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
}, xp = { class: "modal-actions" }, Sp = /* @__PURE__ */ ne({
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
    const n = c, i = y(!1);
    function f(p) {
      n("push", { force: p });
    }
    return (p, u) => {
      var m, d, v;
      return s(), T(He, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: u[7] || (u[7] = (h) => p.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: u[6] || (u[6] = Ue(() => {
            }, ["stop"]))
          }, [
            e("div", lp, [
              e("h3", ip, "PUSH TO " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: u[0] || (u[0] = (h) => p.$emit("close"))
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
              ])])) : (d = t.preview) != null && d.remote_has_new_commits ? (s(), o(V, { key: 2 }, [
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
                    (s(!0), o(V, null, ae(t.preview.commits, (h) => (s(), o("div", {
                      key: h.hash,
                      class: "commit-item"
                    }, [
                      e("span", vp, a(h.short_hash || h.hash.slice(0, 7)), 1),
                      e("span", fp, a(h.message), 1),
                      e("span", pp, a(h.date_relative || h.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                e("div", gp, [
                  e("label", hp, [
                    Le(e("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": u[1] || (u[1] = (h) => i.value = h)
                    }, null, 512), [
                      [Zt, i.value]
                    ]),
                    u[11] || (u[11] = e("span", null, "Force push (overwrite remote)", -1))
                  ]),
                  u[12] || (u[12] = e("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                ])
              ], 64)) : t.preview ? (s(), o(V, { key: 3 }, [
                e("div", yp, [
                  u[14] || (u[14] = e("span", { class: "icon" }, "📤", -1)),
                  g(" Pushing " + a(t.preview.commits_ahead) + " commit" + a(t.preview.commits_ahead !== 1 ? "s" : "") + " to " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                t.preview.commits_ahead > 0 ? (s(), o("div", wp, [
                  u[15] || (u[15] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", kp, [
                    (s(!0), o(V, null, ae(t.preview.commits, (h) => (s(), o("div", {
                      key: h.hash,
                      class: "commit-item"
                    }, [
                      e("span", bp, a(h.short_hash || h.hash.slice(0, 7)), 1),
                      e("span", _p, a(h.message), 1),
                      e("span", $p, a(h.date_relative || h.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (s(), o("div", Cp, [
                  u[16] || (u[16] = e("span", { class: "icon" }, "✓", -1)),
                  g(" Nothing to push - already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]))
              ], 64)) : r("", !0)
            ]),
            e("div", xp, [
              w(oe, {
                variant: "secondary",
                onClick: u[2] || (u[2] = (h) => p.$emit("close"))
              }, {
                default: l(() => [...u[17] || (u[17] = [
                  g(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (v = t.preview) != null && v.remote_has_new_commits ? (s(), o(V, { key: 0 }, [
                w(oe, {
                  variant: "secondary",
                  onClick: u[3] || (u[3] = (h) => p.$emit("pull-first"))
                }, {
                  default: l(() => [...u[18] || (u[18] = [
                    g(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                w(oe, {
                  variant: "destructive",
                  disabled: !i.value,
                  loading: t.pushing,
                  onClick: u[4] || (u[4] = (h) => f(!0))
                }, {
                  default: l(() => [...u[19] || (u[19] = [
                    g(" Force Push ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ], 64)) : t.preview && t.preview.commits_ahead > 0 && !t.preview.has_uncommitted_changes ? (s(), T(oe, {
                key: 1,
                variant: "primary",
                loading: t.pushing,
                onClick: u[5] || (u[5] = (h) => f(!1))
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
}), Ip = /* @__PURE__ */ le(Sp, [["__scopeId", "data-v-bc6ded53"]]), Ep = { class: "resolution-choice-group" }, Mp = ["disabled"], Pp = ["disabled"], Tp = /* @__PURE__ */ ne({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (s(), o("div", Ep, [
      e("button", {
        class: pe(["choice-btn", "mine", { selected: t.modelValue === "take_base" }]),
        onClick: n[0] || (n[0] = (i) => c.$emit("update:modelValue", "take_base")),
        disabled: t.disabled
      }, [...n[2] || (n[2] = [
        e("span", { class: "choice-icon" }, "◀", -1),
        e("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, Mp),
      e("button", {
        class: pe(["choice-btn", "theirs", { selected: t.modelValue === "take_target" }]),
        onClick: n[1] || (n[1] = (i) => c.$emit("update:modelValue", "take_target")),
        disabled: t.disabled
      }, [...n[3] || (n[3] = [
        e("span", { class: "choice-label" }, "Keep Theirs", -1),
        e("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, Pp)
    ]));
  }
}), Rp = /* @__PURE__ */ le(Tp, [["__scopeId", "data-v-985715ed"]]), Lp = { class: "conflict-header" }, zp = { class: "conflict-info" }, Dp = { class: "workflow-name" }, Up = { class: "conflict-description" }, Np = {
  key: 0,
  class: "resolved-badge"
}, Op = { class: "resolved-text" }, Bp = { class: "conflict-hashes" }, Ap = { class: "hash-item" }, Fp = { class: "hash-item" }, Vp = { class: "conflict-actions" }, Wp = /* @__PURE__ */ ne({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(t, { emit: c }) {
    const n = t, i = c, f = y(n.resolution);
    gt(() => n.resolution, (d) => {
      f.value = d;
    }), gt(f, (d) => {
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
      var h, k;
      return s(), o("div", {
        class: pe(["conflict-item", { resolved: p.value }])
      }, [
        e("div", Lp, [
          v[2] || (v[2] = e("span", { class: "conflict-icon" }, "⚠", -1)),
          e("div", zp, [
            e("code", Dp, a(t.conflict.name) + ".json", 1),
            e("div", Up, a(u.value), 1)
          ]),
          p.value ? (s(), o("div", Np, [
            v[1] || (v[1] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", Op, a(m.value), 1)
          ])) : r("", !0)
        ]),
        e("div", Bp, [
          e("span", Ap, [
            v[3] || (v[3] = g("Your: ", -1)),
            e("code", null, a(((h = t.conflict.base_hash) == null ? void 0 : h.slice(0, 8)) || "n/a"), 1)
          ]),
          e("span", Fp, [
            v[4] || (v[4] = g("Theirs: ", -1)),
            e("code", null, a(((k = t.conflict.target_hash) == null ? void 0 : k.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        e("div", Vp, [
          w(Rp, {
            modelValue: f.value,
            "onUpdate:modelValue": v[0] || (v[0] = (_) => f.value = _),
            disabled: t.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), Gp = /* @__PURE__ */ le(Wp, [["__scopeId", "data-v-506d3bbf"]]), jp = { class: "resolution-content" }, Hp = {
  key: 0,
  class: "error-box"
}, Kp = { class: "resolution-header" }, qp = { class: "header-stats" }, Yp = { class: "stat" }, Jp = { class: "stat-value" }, Xp = { class: "stat resolved" }, Qp = { class: "stat-value" }, Zp = {
  key: 0,
  class: "stat pending"
}, eg = { class: "stat-value" }, tg = { class: "conflicts-list" }, sg = {
  key: 1,
  class: "all-resolved-message"
}, og = /* @__PURE__ */ ne({
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
    function h() {
      i("close");
    }
    function k() {
      i("apply");
    }
    return (_, b) => (s(), T(et, {
      title: `Resolve Workflow Conflicts: ${t.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: h
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
            (s(!0), o(V, null, ae(t.workflowConflicts, (R) => (s(), T(Gp, {
              key: R.name,
              conflict: R,
              resolution: d(R.name),
              onResolve: (E) => v(R.name, E)
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
          onClick: h
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
}), ng = /* @__PURE__ */ le(og, [["__scopeId", "data-v-c58d150d"]]), ag = { class: "node-conflict-item" }, lg = { class: "node-header" }, ig = { class: "node-name" }, rg = { class: "node-id" }, dg = { class: "version-comparison" }, cg = { class: "version yours" }, ug = { class: "version theirs" }, mg = { class: "chosen-version" }, vg = { class: "chosen" }, fg = { class: "chosen-reason" }, pg = { class: "affected-workflows" }, gg = { class: "wf-source" }, hg = { class: "wf-version" }, yg = /* @__PURE__ */ ne({
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
          (s(!0), o(V, null, ae(t.conflict.affected_workflows, (i) => (s(), o("li", {
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
}), wg = /* @__PURE__ */ le(yg, [["__scopeId", "data-v-8b626725"]]), kg = { class: "validation-content" }, bg = {
  key: 0,
  class: "compatible-message"
}, _g = { class: "conflicts-list" }, $g = {
  key: 2,
  class: "warnings-section"
}, Cg = /* @__PURE__ */ ne({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(t, { emit: c }) {
    const n = t, i = c, f = U(() => n.validation.is_compatible ? n.operationType === "pull" ? "Pull" : "Merge" : n.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (p, u) => (s(), T(et, {
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
          ])) : t.validation.node_conflicts.length > 0 ? (s(), o(V, { key: 1 }, [
            u[6] || (u[6] = e("div", { class: "warning-header" }, [
              e("span", { class: "icon" }, "⚠"),
              e("div", null, [
                e("strong", null, "Node Version Differences"),
                e("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            e("div", _g, [
              (s(!0), o(V, null, ae(t.validation.node_conflicts, (m) => (s(), T(wg, {
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
              (s(!0), o(V, null, ae(t.validation.warnings, (m, d) => (s(), o("li", { key: d }, a(m), 1))), 128))
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
}), xg = /* @__PURE__ */ le(Cg, [["__scopeId", "data-v-fefd26ed"]]), Sg = { key: 0 }, Ig = /* @__PURE__ */ ne({
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
      pullFromRemote: h,
      getPushPreview: k,
      pushToRemote: _,
      validateMerge: b
    } = We(), R = y([]), E = y(null), $ = y({}), C = y(!1), N = y(null), x = y(""), M = y(!1), q = y(null), A = y(!1), W = y("add"), S = y({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), L = U(() => {
      if (!x.value.trim()) return R.value;
      const F = x.value.toLowerCase();
      return R.value.filter(
        (se) => se.name.toLowerCase().includes(F) || se.fetch_url.toLowerCase().includes(F) || se.push_url.toLowerCase().includes(F)
      );
    });
    async function O() {
      C.value = !0, N.value = null;
      try {
        const F = await i();
        R.value = F.remotes, E.value = F.current_branch_tracking || null, await Promise.all(
          F.remotes.map(async (se) => {
            const be = await d(se.name);
            be && ($.value[se.name] = be);
          })
        );
      } catch (F) {
        N.value = F instanceof Error ? F.message : "Failed to load remotes";
      } finally {
        C.value = !1;
      }
    }
    function re() {
      W.value = "add", S.value = { name: "", fetchUrl: "", pushUrl: "" }, A.value = !0;
    }
    function Z(F) {
      const se = R.value.find((be) => be.name === F);
      se && (W.value = "edit", S.value = {
        name: se.name,
        fetchUrl: se.fetch_url,
        pushUrl: se.push_url
      }, A.value = !0);
    }
    async function X(F) {
      try {
        W.value === "add" ? await f(F.name, F.fetchUrl) : await u(F.name, F.fetchUrl, F.pushUrl || void 0), A.value = !1, await O();
      } catch (se) {
        N.value = se instanceof Error ? se.message : "Operation failed";
      }
    }
    function ce() {
      A.value = !1, S.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function J(F) {
      q.value = F;
      try {
        await m(F);
        const se = await d(F);
        se && ($.value[F] = se), n("toast", `✓ Fetched from ${F}`, "success");
      } catch (se) {
        n("toast", se instanceof Error ? se.message : "Fetch failed", "error");
      } finally {
        q.value = null;
      }
    }
    async function D(F) {
      if (confirm(`Remove remote "${F}"?`))
        try {
          await p(F), await O();
        } catch (se) {
          N.value = se instanceof Error ? se.message : "Failed to remove remote";
        }
    }
    function z() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const I = y("idle"), ue = U(() => I.value === "pull_preview"), ee = U(
      () => I.value === "resolving" || I.value === "validating"
    ), he = U(
      () => I.value === "validation_review" || I.value === "executing"
    ), Ce = y(!1), Te = y(null), Ne = y(!1), me = y(null), ye = y(!1), xe = y(null), Q = y(null), ie = y(/* @__PURE__ */ new Map()), ke = y(null), ze = y(null), Qe = U(() => xe.value && qs(xe.value) ? xe.value : null);
    async function st(F) {
      me.value = F, I.value = "pull_preview", ye.value = !0, xe.value = null, Q.value = null;
      try {
        xe.value = await v(F);
      } catch (se) {
        Q.value = se instanceof Error ? se.message : "Failed to load pull preview";
      } finally {
        ye.value = !1;
      }
    }
    function Se() {
      I.value = "idle", xe.value = null, Q.value = null, me.value = null;
    }
    async function Ze(F) {
      if (!me.value) return;
      I.value = "executing", Q.value = null;
      const se = me.value;
      try {
        const be = await h(se, F);
        if (be.rolled_back) {
          Q.value = `Pull failed and was rolled back: ${be.error || "Unknown error"}`, I.value = "pull_preview";
          return;
        }
        Re(), I.value = "idle", n("toast", `✓ Pulled from ${se}`, "success"), await O();
      } catch (be) {
        Q.value = be instanceof Error ? be.message : "Pull failed", I.value = "pull_preview";
      }
    }
    function qe() {
      Qe.value && (I.value = "resolving", ze.value = null);
    }
    function je(F, se) {
      ie.value.set(F, { name: F, resolution: se });
    }
    function lt() {
      I.value = "pull_preview";
    }
    async function te() {
      I.value = "validating", ze.value = null;
      try {
        const F = Array.from(ie.value.values());
        ke.value = await b(me.value, F), I.value = "validation_review";
      } catch (F) {
        ze.value = F instanceof Error ? F.message : "Validation failed", I.value = "resolving";
      }
    }
    async function G() {
      I.value = "executing";
      const F = me.value;
      try {
        const se = Array.from(ie.value.values()), be = await h(F, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: se
        });
        if (be.rolled_back) {
          Q.value = `Pull failed and was rolled back: ${be.error || "Unknown error"}`, I.value = "pull_preview";
          return;
        }
        Re(), I.value = "idle", n("toast", `✓ Pulled from ${F}`, "success"), await O();
      } catch (se) {
        Q.value = se instanceof Error ? se.message : "Pull failed", I.value = "validation_review";
      }
    }
    function de() {
      I.value = "resolving";
    }
    function Fe() {
      Re(), I.value = "idle";
    }
    function Re() {
      ie.value.clear(), ke.value = null, ze.value = null, Q.value = null, xe.value = null, me.value = null;
    }
    async function fe(F) {
      me.value = F, Ce.value = !0, ye.value = !0, Te.value = null;
      try {
        Te.value = await k(F);
      } catch (se) {
        N.value = se instanceof Error ? se.message : "Failed to load push preview";
      } finally {
        ye.value = !1;
      }
    }
    function K() {
      Ce.value = !1, Te.value = null, me.value = null;
    }
    async function Y(F) {
      if (!me.value) return;
      Ne.value = !0;
      const se = me.value;
      try {
        await _(se, F), K(), n("toast", `✓ Pushed to ${se}`, "success"), await O();
      } catch (be) {
        n("toast", be instanceof Error ? be.message : "Push failed", "error");
      } finally {
        Ne.value = !1;
      }
    }
    function P() {
      const F = me.value;
      K(), F && st(F);
    }
    return Ae(O), (F, se) => (s(), o(V, null, [
      w(Je, null, {
        header: l(() => [
          w(Xe, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: se[0] || (se[0] = (be) => M.value = !0)
          }, {
            actions: l(() => [
              A.value ? r("", !0) : (s(), T(oe, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: re
              }, {
                default: l(() => [...se[3] || (se[3] = [
                  g(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          A.value ? r("", !0) : (s(), T(Ut, {
            key: 0,
            modelValue: x.value,
            "onUpdate:modelValue": se[1] || (se[1] = (be) => x.value = be),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: l(() => [
          C.value ? (s(), T($t, {
            key: 0,
            message: "Loading remotes..."
          })) : N.value ? (s(), T(Ct, {
            key: 1,
            message: N.value,
            retry: !0,
            onRetry: O
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            A.value ? (s(), T(_f, {
              key: 0,
              mode: W.value,
              "remote-name": S.value.name,
              "fetch-url": S.value.fetchUrl,
              "push-url": S.value.pushUrl,
              onSubmit: X,
              onCancel: ce
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : r("", !0),
            R.value.length && !A.value ? (s(), T(Yt, {
              key: 1,
              variant: "compact"
            }, {
              default: l(() => [
                g(" Total: " + a(R.value.length) + " remote" + a(R.value.length !== 1 ? "s" : "") + " ", 1),
                E.value ? (s(), o("span", Sg, " • Tracking: " + a(E.value.remote) + "/" + a(E.value.branch), 1)) : r("", !0)
              ]),
              _: 1
            })) : r("", !0),
            L.value.length && !A.value ? (s(), T(De, {
              key: 2,
              title: "REMOTES",
              count: L.value.length
            }, {
              default: l(() => [
                (s(!0), o(V, null, ae(L.value, (be) => (s(), T(df, {
                  key: be.name,
                  remote: be,
                  "sync-status": $.value[be.name],
                  "fetching-remote": q.value,
                  onFetch: J,
                  onEdit: Z,
                  onRemove: D,
                  onPull: st,
                  onPush: fe
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            !L.value.length && !A.value ? (s(), T(ut, {
              key: 3,
              icon: "🌐",
              message: x.value ? `No remotes match '${x.value}'` : "No remotes configured."
            }, {
              actions: l(() => [
                w(oe, {
                  variant: "primary",
                  onClick: re
                }, {
                  default: l(() => [...se[4] || (se[4] = [
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
      w(mt, {
        show: M.value,
        title: "About Git Remotes",
        onClose: se[2] || (se[2] = (be) => M.value = !1)
      }, {
        content: l(() => [...se[5] || (se[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            g(" The "),
            e("strong", null, '"origin"'),
            g(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: l(() => [
          w(oe, {
            variant: "link",
            onClick: z
          }, {
            default: l(() => [...se[6] || (se[6] = [
              g(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w(ap, {
        show: ue.value,
        "remote-name": me.value || "",
        preview: xe.value,
        loading: ye.value,
        pulling: I.value === "executing",
        error: Q.value,
        "conflict-resolutions": ie.value,
        onClose: Se,
        onPull: Ze,
        onOpenConflictResolution: qe
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      w(Ip, {
        show: Ce.value,
        "remote-name": me.value || "",
        preview: Te.value,
        loading: ye.value,
        pushing: Ne.value,
        onClose: K,
        onPush: Y,
        onPullFirst: P
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      ee.value && Qe.value ? (s(), T(ng, {
        key: 0,
        "workflow-conflicts": Qe.value.workflow_conflicts,
        resolutions: ie.value,
        "operation-type": "pull",
        validating: I.value === "validating",
        error: ze.value,
        onClose: lt,
        onResolve: je,
        onApply: te
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : r("", !0),
      he.value && ke.value ? (s(), T(xg, {
        key: 1,
        validation: ke.value,
        "operation-type": "pull",
        executing: I.value === "executing",
        onProceed: G,
        onGoBack: de,
        onCancel: Fe
      }, null, 8, ["validation", "executing"])) : r("", !0)
    ], 64));
  }
}), Eg = /* @__PURE__ */ le(Ig, [["__scopeId", "data-v-9ae3b76d"]]), Mg = { class: "setting-info" }, Pg = { class: "setting-label" }, Tg = {
  key: 0,
  class: "required-marker"
}, Rg = {
  key: 0,
  class: "setting-description"
}, Lg = { class: "setting-control" }, zg = /* @__PURE__ */ ne({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (c, n) => (s(), o("div", {
      class: pe(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", Mg, [
        e("div", Pg, [
          g(a(t.label) + " ", 1),
          t.required ? (s(), o("span", Tg, "*")) : r("", !0)
        ]),
        t.description ? (s(), o("div", Rg, a(t.description), 1)) : r("", !0)
      ]),
      e("div", Lg, [
        Ee(c.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), fs = /* @__PURE__ */ le(zg, [["__scopeId", "data-v-cb5d236c"]]), Dg = { class: "toggle" }, Ug = ["checked", "disabled"], Ng = /* @__PURE__ */ ne({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (s(), o("label", Dg, [
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
}), Og = /* @__PURE__ */ le(Ng, [["__scopeId", "data-v-71c0f550"]]), Bg = { class: "workspace-settings-content" }, Ag = { class: "settings-section" }, Fg = { class: "path-setting" }, Vg = { class: "path-value" }, Wg = { class: "path-setting" }, Gg = { class: "path-value" }, jg = { class: "settings-section" }, Hg = { class: "settings-section" }, Kg = { class: "settings-section" }, qg = /* @__PURE__ */ ne({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(t, { expose: c, emit: n }) {
    const i = t, f = n, { getConfig: p, updateConfig: u } = We(), m = y(!1), d = y(null), v = y(null), h = y(null), k = y(null), _ = y(""), b = y(""), R = y(!1);
    function E(A) {
      return A.join(" ");
    }
    function $(A) {
      return A.trim() ? A.trim().split(/\s+/) : [];
    }
    const C = U(() => {
      if (!k.value) return !1;
      const A = _.value !== (k.value.civitai_api_key || ""), W = b.value !== E(k.value.comfyui_extra_args || []);
      return A || W;
    });
    async function N() {
      m.value = !0, d.value = null;
      try {
        h.value = await p(i.workspacePath || void 0), k.value = { ...h.value }, _.value = h.value.civitai_api_key || "", b.value = E(h.value.comfyui_extra_args || []);
        const A = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        R.value = A === "true";
      } catch (A) {
        d.value = A instanceof Error ? A.message : "Failed to load settings";
      } finally {
        m.value = !1;
      }
    }
    async function x() {
      var A, W;
      v.value = null;
      try {
        const S = {};
        _.value !== (((A = k.value) == null ? void 0 : A.civitai_api_key) || "") && (S.civitai_api_key = _.value || null), b.value !== E(((W = k.value) == null ? void 0 : W.comfyui_extra_args) || []) && (S.comfyui_extra_args = $(b.value)), await u(S, i.workspacePath || void 0), await N(), v.value = { type: "success", message: "Settings saved successfully" }, f("saved"), setTimeout(() => {
          v.value = null;
        }, 3e3);
      } catch (S) {
        const L = S instanceof Error ? S.message : "Failed to save settings";
        v.value = { type: "error", message: L }, f("error", L);
      }
    }
    function M() {
      k.value && (_.value = k.value.civitai_api_key || "", b.value = E(k.value.comfyui_extra_args || []), v.value = null);
    }
    function q(A) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(A)), console.log("[ComfyGit] Auto-refresh setting saved:", A);
    }
    return c({
      saveSettings: x,
      resetSettings: M,
      hasChanges: C,
      loadSettings: N
    }), Ae(N), (A, W) => (s(), o("div", Bg, [
      m.value ? (s(), T($t, {
        key: 0,
        message: "Loading workspace settings..."
      })) : d.value ? (s(), T(Ct, {
        key: 1,
        message: d.value,
        retry: !0,
        onRetry: N
      }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
        w(De, { title: "WORKSPACE PATHS" }, {
          default: l(() => {
            var S, L;
            return [
              e("div", Ag, [
                e("div", Fg, [
                  W[3] || (W[3] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                  W[4] || (W[4] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  e("div", Vg, a(((S = h.value) == null ? void 0 : S.workspace_path) || "Loading..."), 1)
                ]),
                e("div", Wg, [
                  W[5] || (W[5] = e("div", { class: "path-label" }, "Models Directory", -1)),
                  W[6] || (W[6] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  e("div", Gg, a(((L = h.value) == null ? void 0 : L.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        w(De, { title: "API CREDENTIALS" }, {
          default: l(() => [
            e("div", jg, [
              w(fs, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: l(() => [
                  w(es, {
                    modelValue: _.value,
                    "onUpdate:modelValue": W[0] || (W[0] = (S) => _.value = S),
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
        w(De, { title: "COMFYUI SETTINGS" }, {
          default: l(() => [
            e("div", Hg, [
              w(fs, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: l(() => [
                  w(es, {
                    modelValue: b.value,
                    "onUpdate:modelValue": W[1] || (W[1] = (S) => b.value = S),
                    placeholder: "--lowvram --listen 0.0.0.0",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              W[7] || (W[7] = e("div", { class: "setting-hint" }, [
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
        w(De, { title: "UI SETTINGS" }, {
          default: l(() => [
            e("div", Kg, [
              w(fs, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: l(() => [
                  w(Og, {
                    modelValue: R.value,
                    "onUpdate:modelValue": [
                      W[2] || (W[2] = (S) => R.value = S),
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
        v.value ? (s(), T(Yt, {
          key: 0,
          variant: (v.value.type === "success", "compact")
        }, {
          default: l(() => [
            e("span", {
              style: _t({ color: v.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
            }, a(v.value.message), 5)
          ]),
          _: 1
        }, 8, ["variant"])) : r("", !0)
      ], 64))
    ]));
  }
}), Ys = /* @__PURE__ */ le(qg, [["__scopeId", "data-v-9f44552d"]]), Yg = /* @__PURE__ */ ne({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const c = y(null);
    function n() {
      console.log("[ComfyGit] Settings saved");
    }
    return (i, f) => (s(), T(Je, null, {
      header: l(() => [
        w(Xe, { title: "WORKSPACE SETTINGS" }, {
          actions: l(() => {
            var p, u;
            return [
              w(oe, {
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
              (u = c.value) != null && u.hasChanges ? (s(), T(oe, {
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
        w(Ys, {
          ref_key: "contentRef",
          ref: c,
          onSaved: n
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), Jg = /* @__PURE__ */ ne({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: c, getWorkspaceLogPath: n, openFile: i } = We(), f = y([]), p = y(!1), u = y(null), m = y(!1), d = y(null), v = y(null), h = y(!1), k = U(() => f.value.length === 0 ? [] : f.value.map((E) => ({
      text: `${E.timestamp} - ${E.name} - ${E.level} - ${E.func}:${E.line} - ${E.message}`,
      level: E.level
    })));
    async function _() {
      p.value = !0, u.value = null;
      try {
        f.value = await c(void 0, 500);
      } catch (E) {
        u.value = E instanceof Error ? E.message : "Failed to load workspace logs";
      } finally {
        p.value = !1, setTimeout(() => {
          var E;
          (E = d.value) != null && E.parentElement && (d.value.parentElement.scrollTop = d.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    async function b() {
      try {
        const E = await n();
        E.exists && (v.value = E.path);
      } catch {
      }
    }
    async function R() {
      if (v.value) {
        h.value = !0;
        try {
          await i(v.value);
        } catch (E) {
          console.error("Failed to open log file:", E);
        } finally {
          h.value = !1;
        }
      }
    }
    return Ae(() => {
      _(), b();
    }), (E, $) => (s(), o(V, null, [
      w(Je, null, {
        header: l(() => [
          w(Xe, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: $[0] || ($[0] = (C) => m.value = !0)
          }, {
            actions: l(() => [
              w(oe, {
                variant: "secondary",
                size: "sm",
                onClick: R,
                disabled: !v.value || h.value,
                title: "Open log file in default editor"
              }, {
                default: l(() => [
                  g(a(h.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              w(oe, {
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
          p.value ? (s(), T($t, {
            key: 0,
            message: "Loading workspace logs..."
          })) : u.value ? (s(), T(Ct, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: _
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            f.value.length === 0 ? (s(), T(ut, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: d,
              class: "log-output"
            }, [
              (s(!0), o(V, null, ae(k.value, (C, N) => (s(), o("div", {
                key: N,
                class: pe(`log-line log-level-${C.level.toLowerCase()}`)
              }, a(C.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      w(mt, {
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
          w(oe, {
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
}), Xg = /* @__PURE__ */ le(Jg, [["__scopeId", "data-v-7f05352a"]]), Qg = /* @__PURE__ */ ne({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: c, getStatus: n, getEnvironmentLogPath: i, openFile: f } = We(), p = y([]), u = y(!1), m = y(null), d = y(!1), v = y("production"), h = y(null), k = y(null), _ = y(!1), b = U(() => p.value.length === 0 ? [] : p.value.map((C) => ({
      text: `${C.timestamp} - ${C.name} - ${C.level} - ${C.func}:${C.line} - ${C.message}`,
      level: C.level
    })));
    async function R() {
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
          (C = h.value) != null && C.parentElement && (h.value.parentElement.scrollTop = h.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    async function E() {
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
    return Ae(() => {
      R(), E();
    }), (C, N) => (s(), o(V, null, [
      w(Je, null, {
        header: l(() => [
          w(Xe, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: N[0] || (N[0] = (x) => d.value = !0)
          }, {
            actions: l(() => [
              w(oe, {
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
              w(oe, {
                variant: "secondary",
                size: "sm",
                onClick: R,
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
          u.value ? (s(), T($t, {
            key: 0,
            message: "Loading environment logs..."
          })) : m.value ? (s(), T(Ct, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: R
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            p.value.length === 0 ? (s(), T(ut, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: h,
              class: "log-output"
            }, [
              (s(!0), o(V, null, ae(b.value, (x, M) => (s(), o("div", {
                key: M,
                class: pe(`log-line log-level-${x.level.toLowerCase()}`)
              }, a(x.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      w(mt, {
        show: d.value,
        title: "About Environment Logs",
        onClose: N[2] || (N[2] = (x) => d.value = !1)
      }, {
        content: l(() => [
          e("p", null, [
            N[3] || (N[3] = g(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, a(v.value), 1),
            N[4] || (N[4] = g(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          N[5] || (N[5] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
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
          N[6] || (N[6] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: l(() => [
          w(oe, {
            variant: "primary",
            onClick: N[1] || (N[1] = (x) => d.value = !1)
          }, {
            default: l(() => [...N[7] || (N[7] = [
              g(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Zg = /* @__PURE__ */ le(Qg, [["__scopeId", "data-v-6f8db7ce"]]), eh = { class: "env-title" }, th = {
  key: 0,
  class: "current-badge"
}, sh = {
  key: 0,
  class: "branch-info"
}, oh = /* @__PURE__ */ ne({
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
    return (c, n) => (s(), T(Ye, {
      status: t.isCurrent ? "synced" : void 0
    }, Dt({
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
        Ee(c.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      t.showDetails ? {
        name: "details",
        fn: l(() => [
          w(Be, {
            label: "Workflows:",
            value: String(t.workflowCount)
          }, null, 8, ["value"]),
          w(Be, {
            label: "Nodes:",
            value: String(t.nodeCount)
          }, null, 8, ["value"]),
          w(Be, {
            label: "Models:",
            value: String(t.modelCount)
          }, null, 8, ["value"]),
          t.lastUsed && t.showLastUsed ? (s(), T(Be, {
            key: 0,
            label: "Last used:",
            value: t.lastUsed
          }, null, 8, ["value"])) : r("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), nh = /* @__PURE__ */ le(oh, [["__scopeId", "data-v-9231917a"]]), ah = { class: "env-details" }, lh = { class: "status-row" }, ih = {
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
}, bh = { class: "value" }, _h = { class: "footer-actions" }, $h = /* @__PURE__ */ ne({
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
        const p = new Date(f), m = (/* @__PURE__ */ new Date()).getTime() - p.getTime(), d = Math.floor(m / 6e4), v = Math.floor(m / 36e5), h = Math.floor(m / 864e5);
        return d < 1 ? "just now" : d < 60 ? `${d} ${d === 1 ? "minute" : "minutes"} ago` : v < 24 ? `${v} ${v === 1 ? "hour" : "hours"} ago` : h < 30 ? `${h} ${h === 1 ? "day" : "days"} ago` : p.toLocaleDateString();
      } catch {
        return f;
      }
    }
    return (f, p) => (s(), T(et, {
      title: `ENVIRONMENT DETAILS: ${t.environment.name.toUpperCase()}`,
      size: "md",
      onClose: p[2] || (p[2] = (u) => n("close"))
    }, {
      body: l(() => [
        e("div", ah, [
          e("div", lh, [
            p[3] || (p[3] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: pe(["status-badge", t.environment.is_current ? "current" : "inactive"])
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
          t.canDelete ? (s(), T(ge, {
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
}), Ch = /* @__PURE__ */ le($h, [["__scopeId", "data-v-59855453"]]), Js = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], Xs = "3.12", Cs = [
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
], Qs = "auto", xh = { class: "progress-bar" }, Sh = /* @__PURE__ */ ne({
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
        class: pe(["progress-fill", t.variant]),
        style: _t({ width: n.value })
      }, null, 6)
    ]));
  }
}), Zs = /* @__PURE__ */ le(Sh, [["__scopeId", "data-v-1beb0512"]]), Ih = { class: "task-progress" }, Eh = { class: "progress-info" }, Mh = { class: "progress-percentage" }, Ph = { class: "progress-message" }, Th = {
  key: 0,
  class: "progress-steps"
}, Rh = { class: "step-icon" }, Lh = { class: "step-label" }, zh = /* @__PURE__ */ ne({
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
      w(Zs, {
        progress: t.progress,
        variant: t.variant
      }, null, 8, ["progress", "variant"]),
      e("div", Eh, [
        e("span", Mh, a(t.progress) + "%", 1),
        e("span", Ph, a(t.message), 1)
      ]),
      t.showSteps && t.steps.length > 0 ? (s(), o("div", Th, [
        (s(!0), o(V, null, ae(t.steps, (u) => (s(), o("div", {
          key: u.id,
          class: pe(["step", n(u.id)])
        }, [
          e("span", Rh, a(i(u.id)), 1),
          e("span", Lh, a(u.label), 1)
        ], 2))), 128))
      ])) : r("", !0)
    ]));
  }
}), ss = /* @__PURE__ */ le(zh, [["__scopeId", "data-v-9d1de66c"]]), Dh = {
  key: 0,
  class: "create-env-form"
}, Uh = { class: "form-field" }, Nh = { class: "form-field" }, Oh = ["value"], Bh = { class: "form-field" }, Ah = ["disabled"], Fh = ["value"], Vh = { class: "form-field" }, Wh = ["value"], Gh = { class: "form-field form-field--checkbox" }, jh = { class: "form-checkbox" }, Hh = {
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
}, Qh = 10, Zh = /* @__PURE__ */ ne({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(t, { emit: c }) {
    const n = c, { getComfyUIReleases: i, createEnvironment: f, getCreateProgress: p } = We(), u = y(""), m = y(Xs), d = y("latest"), v = y(Qs), h = y(!1), k = y([{ tag_name: "latest", name: "Latest", published_at: "" }]), _ = y(!1), b = y(!1), R = y({
      progress: 0,
      message: ""
    });
    let E = null, $ = 0;
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
    ], N = y(null);
    function x() {
      b.value || n("close");
    }
    async function M() {
      const L = u.value.trim();
      if (L) {
        b.value = !0, R.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const O = {
            name: L,
            python_version: m.value,
            comfyui_version: d.value,
            torch_backend: v.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, re = await f(O);
          re.status === "started" ? q() : re.status === "error" && (R.value = {
            progress: 0,
            message: re.message || "Failed to start creation",
            error: re.message
          });
        } catch (O) {
          R.value = {
            progress: 0,
            message: O instanceof Error ? O.message : "Unknown error",
            error: O instanceof Error ? O.message : "Unknown error"
          };
        }
      }
    }
    function q() {
      E || ($ = 0, E = window.setInterval(async () => {
        try {
          const L = await p();
          $ = 0, R.value = {
            progress: L.progress ?? 0,
            message: L.message,
            phase: L.phase,
            error: L.error
          }, L.state === "complete" ? (A(), n("created", L.environment_name || u.value.trim(), h.value)) : L.state === "error" ? (A(), R.value.error = L.error || L.message) : L.state === "idle" && b.value && (A(), R.value.error = "Creation was interrupted. Please try again.");
        } catch {
          $++, $ >= Qh && (A(), R.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function A() {
      E && (clearInterval(E), E = null);
    }
    function W() {
      b.value = !1, R.value = { progress: 0, message: "" }, n("close");
    }
    async function S() {
      _.value = !0;
      try {
        k.value = await i();
      } catch (L) {
        console.error("Failed to load ComfyUI releases:", L);
      } finally {
        _.value = !1;
      }
    }
    return Ae(async () => {
      var L;
      await mo(), (L = N.value) == null || L.focus(), S();
    }), As(() => {
      A();
    }), (L, O) => (s(), T(et, {
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
          w(ss, {
            progress: R.value.progress,
            message: R.value.message,
            "current-phase": R.value.phase,
            variant: R.value.error ? "error" : "default",
            "show-steps": !0,
            steps: C
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          R.value.error ? r("", !0) : (s(), o("p", qh, " This may take several minutes. Please wait... ")),
          R.value.error ? (s(), o("div", Yh, [
            e("p", Jh, a(R.value.error), 1)
          ])) : r("", !0)
        ])) : (s(), o("div", Dh, [
          e("div", Uh, [
            O[6] || (O[6] = e("label", { class: "form-label" }, "Name", -1)),
            Le(e("input", {
              ref_key: "nameInput",
              ref: N,
              "onUpdate:modelValue": O[0] || (O[0] = (re) => u.value = re),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: pt(M, ["enter"])
            }, null, 544), [
              [Et, u.value]
            ])
          ]),
          e("div", Nh, [
            O[7] || (O[7] = e("label", { class: "form-label" }, "Python Version", -1)),
            Le(e("select", {
              "onUpdate:modelValue": O[1] || (O[1] = (re) => m.value = re),
              class: "form-select"
            }, [
              (s(!0), o(V, null, ae(Ie(Js), (re) => (s(), o("option", {
                key: re,
                value: re
              }, a(re), 9, Oh))), 128))
            ], 512), [
              [bt, m.value]
            ])
          ]),
          e("div", Bh, [
            O[8] || (O[8] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Le(e("select", {
              "onUpdate:modelValue": O[2] || (O[2] = (re) => d.value = re),
              class: "form-select",
              disabled: _.value
            }, [
              (s(!0), o(V, null, ae(k.value, (re) => (s(), o("option", {
                key: re.tag_name,
                value: re.tag_name
              }, a(re.name), 9, Fh))), 128))
            ], 8, Ah), [
              [bt, d.value]
            ])
          ]),
          e("div", Vh, [
            O[9] || (O[9] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Le(e("select", {
              "onUpdate:modelValue": O[3] || (O[3] = (re) => v.value = re),
              class: "form-select"
            }, [
              (s(!0), o(V, null, ae(Ie(Cs), (re) => (s(), o("option", {
                key: re,
                value: re
              }, a(re) + a(re === "auto" ? " (detect GPU)" : ""), 9, Wh))), 128))
            ], 512), [
              [bt, v.value]
            ])
          ]),
          e("div", Gh, [
            e("label", jh, [
              Le(e("input", {
                type: "checkbox",
                "onUpdate:modelValue": O[4] || (O[4] = (re) => h.value = re)
              }, null, 512), [
                [Zt, h.value]
              ]),
              O[10] || (O[10] = e("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: l(() => [
        b.value ? (s(), o(V, { key: 1 }, [
          R.value.error ? (s(), T(ge, {
            key: 0,
            variant: "secondary",
            onClick: W
          }, {
            default: l(() => [...O[15] || (O[15] = [
              g(" Close ", -1)
            ])]),
            _: 1
          })) : (s(), o("span", Xh, " Creating environment... "))
        ], 64)) : (s(), o(V, { key: 0 }, [
          w(ge, {
            variant: "primary",
            disabled: !u.value.trim(),
            onClick: M
          }, {
            default: l(() => [...O[13] || (O[13] = [
              g(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          w(ge, {
            variant: "secondary",
            onClick: O[5] || (O[5] = (re) => n("close"))
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
}), e1 = /* @__PURE__ */ le(Zh, [["__scopeId", "data-v-f37eaa42"]]), t1 = /* @__PURE__ */ ne({
  __name: "EnvironmentsSection",
  emits: ["switch", "created", "delete"],
  setup(t, { expose: c, emit: n }) {
    const i = n, { getEnvironments: f } = We(), p = y([]), u = y(!1), m = y(null), d = y(""), v = y(!1), h = y(!1), k = y(null), _ = U(() => {
      if (!d.value.trim()) return p.value;
      const N = d.value.toLowerCase();
      return p.value.filter(
        (x) => {
          var M;
          return x.name.toLowerCase().includes(N) || ((M = x.current_branch) == null ? void 0 : M.toLowerCase().includes(N));
        }
      );
    });
    function b(N, x) {
      h.value = !1, i("created", N, x);
    }
    function R() {
      h.value = !0;
    }
    function E(N) {
      k.value = N;
    }
    function $(N) {
      k.value = null, i("delete", N);
    }
    async function C() {
      u.value = !0, m.value = null;
      try {
        p.value = await f();
      } catch (N) {
        m.value = N instanceof Error ? N.message : "Failed to load environments";
      } finally {
        u.value = !1;
      }
    }
    return Ae(C), c({
      loadEnvironments: C,
      openCreateModal: R
    }), (N, x) => (s(), o(V, null, [
      w(Je, null, {
        header: l(() => [
          w(Xe, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: x[0] || (x[0] = (M) => v.value = !0)
          }, {
            actions: l(() => [
              w(oe, {
                variant: "primary",
                size: "sm",
                onClick: R
              }, {
                default: l(() => [...x[6] || (x[6] = [
                  g(" Create ", -1)
                ])]),
                _: 1
              }),
              w(oe, {
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
          w(Ut, {
            modelValue: d.value,
            "onUpdate:modelValue": x[1] || (x[1] = (M) => d.value = M),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          u.value ? (s(), T($t, {
            key: 0,
            message: "Loading environments..."
          })) : m.value ? (s(), T(Ct, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: C
          }, null, 8, ["message"])) : (s(), o(V, { key: 2 }, [
            _.value.length ? (s(), T(De, {
              key: 0,
              title: "ENVIRONMENTS",
              count: _.value.length
            }, {
              default: l(() => [
                (s(!0), o(V, null, ae(_.value, (M) => (s(), T(nh, {
                  key: M.name,
                  "environment-name": M.name,
                  "is-current": M.is_current,
                  "current-branch": M.current_branch,
                  "show-last-used": !1
                }, {
                  actions: l(() => [
                    M.is_current ? r("", !0) : (s(), T(oe, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (q) => N.$emit("switch", M.name)
                    }, {
                      default: l(() => [...x[8] || (x[8] = [
                        g(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    w(oe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (q) => E(M)
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
            _.value.length ? r("", !0) : (s(), T(ut, {
              key: 1,
              icon: "🌍",
              message: d.value ? `No environments match '${d.value}'` : "No environments found. Create one to get started!"
            }, Dt({ _: 2 }, [
              d.value ? void 0 : {
                name: "actions",
                fn: l(() => [
                  w(oe, {
                    variant: "primary",
                    onClick: R
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
      w(mt, {
        show: v.value,
        title: "About Environments",
        onClose: x[3] || (x[3] = (M) => v.value = !1)
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
          w(oe, {
            variant: "secondary",
            onClick: x[2] || (x[2] = (M) => v.value = !1)
          }, {
            default: l(() => [...x[12] || (x[12] = [
              g(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      k.value ? (s(), T(Ch, {
        key: 0,
        environment: k.value,
        "can-delete": p.value.length > 1,
        onClose: x[4] || (x[4] = (M) => k.value = null),
        onDelete: $
      }, null, 8, ["environment", "can-delete"])) : r("", !0),
      h.value ? (s(), T(e1, {
        key: 1,
        onClose: x[5] || (x[5] = (M) => h.value = !1),
        onCreated: b
      })) : r("", !0)
    ], 64));
  }
}), s1 = /* @__PURE__ */ le(t1, [["__scopeId", "data-v-f95999f4"]]), o1 = { class: "file-path" }, n1 = { class: "file-path-text" }, a1 = ["title"], l1 = /* @__PURE__ */ ne({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const c = t, n = y(!1);
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
}), i1 = /* @__PURE__ */ le(l1, [["__scopeId", "data-v-f0982173"]]), r1 = { class: "export-blocked" }, d1 = { class: "issues-list" }, c1 = { class: "issue-message" }, u1 = {
  key: 0,
  class: "issue-details"
}, m1 = ["onClick"], v1 = { class: "issue-fix" }, f1 = /* @__PURE__ */ ne({
  __name: "ExportBlockedModal",
  props: {
    issues: {}
  },
  emits: ["close"],
  setup(t) {
    const c = t, n = os({});
    function i(f) {
      const p = c.issues[f];
      return n[f] || p.details.length <= 3 ? p.details : p.details.slice(0, 3);
    }
    return (f, p) => (s(), T(et, {
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
            (s(!0), o(V, null, ae(t.issues, (u, m) => (s(), o("div", {
              key: m,
              class: "issue-item"
            }, [
              e("div", c1, a(u.message), 1),
              u.details.length ? (s(), o("div", u1, [
                (s(!0), o(V, null, ae(i(m), (d, v) => (s(), o("div", {
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
                u.type === "uncommitted_workflows" ? (s(), o(V, { key: 0 }, [
                  g(" Commit your workflow changes before exporting. ")
                ], 64)) : u.type === "uncommitted_git_changes" ? (s(), o(V, { key: 1 }, [
                  g(" Commit your changes before exporting. ")
                ], 64)) : u.type === "unresolved_issues" ? (s(), o(V, { key: 2 }, [
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
}), p1 = /* @__PURE__ */ le(f1, [["__scopeId", "data-v-b52f5e32"]]), g1 = { class: "export-warnings" }, h1 = {
  key: 0,
  class: "success-header"
}, y1 = { class: "warning-header" }, w1 = { class: "warning-summary" }, k1 = { class: "warning-title" }, b1 = { class: "models-section" }, _1 = { class: "models-list" }, $1 = { class: "model-info" }, C1 = { class: "model-filename" }, x1 = { class: "model-workflows" }, S1 = ["onClick"], I1 = /* @__PURE__ */ ne({
  __name: "ExportWarningsModal",
  props: {
    models: {}
  },
  emits: ["confirm", "cancel", "revalidate"],
  setup(t, { emit: c }) {
    const n = t, i = c, f = y(!1), p = y(null), u = U(() => f.value || n.models.length <= 3 ? n.models : n.models.slice(0, 3));
    function m() {
      p.value = null, i("revalidate");
    }
    return (d, v) => (s(), o(V, null, [
      w(et, {
        title: "Export Warnings",
        size: "md",
        onClose: v[3] || (v[3] = (h) => d.$emit("cancel"))
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
            ])])) : (s(), o(V, { key: 1 }, [
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
                  (s(!0), o(V, null, ae(u.value, (h) => (s(), o("div", {
                    key: h.hash,
                    class: "model-item"
                  }, [
                    e("div", $1, [
                      e("div", C1, a(h.filename), 1),
                      e("div", x1, " Used by: " + a(h.workflows.join(", ")), 1)
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      onClick: (k) => p.value = h.hash
                    }, " Add Source ", 8, S1)
                  ]))), 128))
                ]),
                t.models.length > 3 && !f.value ? (s(), o("button", {
                  key: 0,
                  class: "show-more-btn",
                  onClick: v[0] || (v[0] = (h) => f.value = !0)
                }, " Show " + a(t.models.length - 3) + " more model" + a(t.models.length - 3 !== 1 ? "s" : "") + "... ", 1)) : r("", !0)
              ])
            ], 64))
          ])
        ]),
        footer: l(() => [
          w(ge, {
            variant: "secondary",
            onClick: v[1] || (v[1] = (h) => d.$emit("cancel"))
          }, {
            default: l(() => [...v[7] || (v[7] = [
              g(" Cancel Export ", -1)
            ])]),
            _: 1
          }),
          w(ge, {
            variant: "primary",
            onClick: v[2] || (v[2] = (h) => d.$emit("confirm"))
          }, {
            default: l(() => [
              g(a(t.models.length === 0 ? "Export" : "Export Anyway"), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      p.value ? (s(), T($s, {
        key: 0,
        identifier: p.value,
        onClose: m
      }, null, 8, ["identifier"])) : r("", !0)
    ], 64));
  }
}), E1 = /* @__PURE__ */ le(I1, [["__scopeId", "data-v-b698d882"]]), M1 = { class: "export-card" }, P1 = { class: "export-path-row" }, T1 = { class: "export-actions" }, R1 = {
  key: 1,
  class: "export-warning"
}, L1 = /* @__PURE__ */ ne({
  __name: "ExportSection",
  setup(t) {
    const { validateExport: c, exportEnvWithForce: n } = We(), i = y(""), f = y(!1), p = y(!1), u = y(!1), m = y(null), d = y(!1), v = y(null), h = y(!1), k = y(!1), _ = U(() => f.value ? "Validating..." : p.value ? "Exporting..." : "Export Environment");
    async function b() {
      f.value = !0, m.value = null;
      try {
        const x = await c();
        v.value = x, x.can_export ? x.warnings.models_without_sources.length > 0 ? k.value = !0 : await $() : h.value = !0;
      } catch (x) {
        m.value = {
          status: "error",
          message: x instanceof Error ? x.message : "Validation failed"
        };
      } finally {
        f.value = !1;
      }
    }
    async function R() {
      k.value = !1, await $();
    }
    async function E() {
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
        } catch (M) {
          console.error("Failed to copy path:", M);
        }
    }
    async function N() {
      var x;
      if ((x = m.value) != null && x.path) {
        u.value = !0;
        try {
          const M = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(m.value.path)}`);
          if (!M.ok)
            throw new Error(`Download failed: ${M.statusText}`);
          const q = await M.blob(), A = URL.createObjectURL(q), W = m.value.path.split("/").pop() || "environment-export.tar.gz", S = document.createElement("a");
          S.href = A, S.download = W, document.body.appendChild(S), S.click(), document.body.removeChild(S), URL.revokeObjectURL(A);
        } catch (M) {
          console.error("Failed to download:", M), alert(`Download failed: ${M instanceof Error ? M.message : "Unknown error"}`);
        } finally {
          u.value = !1;
        }
      }
    }
    return (x, M) => (s(), o(V, null, [
      w(Je, null, {
        header: l(() => [
          w(Xe, {
            title: "EXPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: M[0] || (M[0] = (q) => d.value = !0)
          })
        ]),
        content: l(() => [
          w(De, { title: "EXPORT OPTIONS" }, {
            default: l(() => [
              e("div", M1, [
                M[7] || (M[7] = e("div", { class: "export-card-header" }, [
                  e("span", { class: "export-icon" }, "📁"),
                  e("div", { class: "export-header-text" }, [
                    e("div", { class: "export-title" }, "Output Destination"),
                    e("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                e("div", P1, [
                  w(es, {
                    modelValue: i.value,
                    "onUpdate:modelValue": M[1] || (M[1] = (q) => i.value = q),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                e("div", T1, [
                  w(oe, {
                    variant: "primary",
                    size: "md",
                    loading: f.value || p.value,
                    disabled: f.value || p.value,
                    onClick: b
                  }, {
                    default: l(() => [
                      M[6] || (M[6] = e("svg", {
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
          m.value ? (s(), T(De, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: l(() => [
              w(Ye, {
                status: m.value.status === "success" ? "synced" : "broken"
              }, Dt({
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
                    w(Be, { label: "Saved to:" }, {
                      default: l(() => [
                        w(i1, {
                          path: m.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    m.value.models_without_sources !== void 0 ? (s(), T(Be, {
                      key: 0,
                      label: "Models without sources:",
                      value: m.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : r("", !0),
                    m.value.models_without_sources && m.value.models_without_sources > 0 ? (s(), o("div", R1, [...M[8] || (M[8] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : r("", !0)
                  ]),
                  key: "0"
                } : void 0,
                m.value.status === "success" ? {
                  name: "actions",
                  fn: l(() => [
                    w(oe, {
                      variant: "primary",
                      size: "sm",
                      loading: u.value,
                      onClick: N
                    }, {
                      default: l(() => [...M[9] || (M[9] = [
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
                    w(oe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: C
                    }, {
                      default: l(() => [...M[10] || (M[10] = [
                        g(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    w(oe, {
                      variant: "ghost",
                      size: "sm",
                      onClick: M[2] || (M[2] = (q) => m.value = null)
                    }, {
                      default: l(() => [...M[11] || (M[11] = [
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
      w(mt, {
        show: d.value,
        title: "What Gets Exported",
        onClose: M[3] || (M[3] = (q) => d.value = !1)
      }, {
        content: l(() => [...M[12] || (M[12] = [
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
      h.value && v.value ? (s(), T(p1, {
        key: 0,
        issues: v.value.blocking_issues,
        onClose: M[4] || (M[4] = (q) => h.value = !1)
      }, null, 8, ["issues"])) : r("", !0),
      k.value && v.value ? (s(), T(E1, {
        key: 1,
        models: v.value.warnings.models_without_sources,
        onConfirm: R,
        onCancel: M[5] || (M[5] = (q) => k.value = !1),
        onRevalidate: E
      }, null, 8, ["models"])) : r("", !0)
    ], 64));
  }
}), z1 = /* @__PURE__ */ le(L1, [["__scopeId", "data-v-f4d120f2"]]), D1 = { class: "file-input-wrapper" }, U1 = ["accept", "multiple", "disabled"], N1 = /* @__PURE__ */ ne({
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
    const i = n, f = y(null);
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
    }), (m, d) => (s(), o("div", D1, [
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
      w(oe, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: p
      }, {
        default: l(() => [
          Ee(m.$slots, "default", {}, () => [
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
}), O1 = /* @__PURE__ */ le(N1, [["__scopeId", "data-v-cd192091"]]), B1 = {
  key: 0,
  class: "drop-zone-empty"
}, A1 = { class: "drop-zone-text" }, F1 = { class: "drop-zone-primary" }, V1 = { class: "drop-zone-secondary" }, W1 = { class: "drop-zone-actions" }, G1 = {
  key: 1,
  class: "drop-zone-file"
}, j1 = { class: "file-info" }, H1 = { class: "file-details" }, K1 = { class: "file-name" }, q1 = { class: "file-size" }, Y1 = /* @__PURE__ */ ne({
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
    const n = c, i = y(!1), f = y(null), p = y(0), u = U(() => f.value !== null), m = U(() => {
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
    function h($) {
      $.stopPropagation(), $.dataTransfer && ($.dataTransfer.dropEffect = "copy");
    }
    function k($) {
      $.stopPropagation(), p.value--, p.value === 0 && (i.value = !1);
    }
    function _($) {
      var N;
      $.stopPropagation(), p.value = 0, i.value = !1;
      const C = (N = $.dataTransfer) == null ? void 0 : N.files;
      C && C.length > 0 && R(C[0]);
    }
    function b($) {
      $.length > 0 && R($[0]);
    }
    function R($) {
      f.value = $, n("fileSelected", $);
    }
    function E() {
      f.value = null, n("clear");
    }
    return ($, C) => (s(), o("div", {
      class: pe(["file-drop-zone", { "drop-active": i.value, "has-file": u.value }]),
      onDragenter: Ue(v, ["prevent"]),
      onDragover: Ue(h, ["prevent"]),
      onDragleave: Ue(k, ["prevent"]),
      onDrop: Ue(_, ["prevent"])
    }, [
      u.value ? (s(), o("div", G1, [
        e("div", j1, [
          C[1] || (C[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", H1, [
            e("div", K1, a(m.value), 1),
            e("div", q1, a(d.value), 1)
          ])
        ]),
        w(oe, {
          variant: "ghost",
          size: "xs",
          onClick: E,
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
      ])) : (s(), o("div", B1, [
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
        e("div", A1, [
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
}), J1 = /* @__PURE__ */ le(Y1, [["__scopeId", "data-v-0f79cb86"]]), X1 = { class: "import-preview" }, Q1 = { class: "preview-header" }, Z1 = {
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
}, xy = { class: "git-info" }, Sy = /* @__PURE__ */ ne({
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
        w(at, null, {
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
            (s(!0), o(V, null, ae(t.workflows.slice(0, t.maxPreviewItems), (d) => (s(), o("div", {
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
            (s(!0), o(V, null, ae(t.models.slice(0, t.maxPreviewItems), (d) => (s(), o("div", {
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
            (s(!0), o(V, null, ae(t.nodes.slice(0, t.maxPreviewItems), (d) => (s(), o("div", {
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
            t.gitBranch ? (s(), T(Be, {
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
            t.gitCommit ? (s(), T(Be, {
              key: 1,
              label: "Commit"
            }, {
              default: l(() => [
                w(Vs, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : r("", !0)
          ])
        ])) : r("", !0)
      ])
    ]));
  }
}), Iy = /* @__PURE__ */ le(Sy, [["__scopeId", "data-v-182fe113"]]), Ey = { class: "import-config" }, My = { class: "config-container" }, Py = { class: "config-field" }, Ty = { class: "input-wrapper" }, Ry = ["value"], Ly = {
  key: 0,
  class: "validating-indicator"
}, zy = {
  key: 1,
  class: "valid-indicator"
}, Dy = {
  key: 0,
  class: "field-error"
}, Uy = { class: "config-field" }, Ny = { class: "strategy-options" }, Oy = ["value", "checked", "onChange"], By = { class: "strategy-content" }, Ay = { class: "strategy-label" }, Fy = { class: "strategy-description" }, Vy = { class: "config-field switch-field" }, Wy = { class: "switch-label" }, Gy = ["checked"], jy = { class: "advanced-section" }, Hy = { class: "advanced-content" }, Ky = { class: "config-field" }, qy = ["value"], Yy = ["value"], Jy = /* @__PURE__ */ ne({
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
    const n = t, i = c, f = y(!1), p = y(!1);
    gt(() => n.nameError, (h) => {
      f.value = !1, p.value = !h && n.name.length > 0;
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
    function d(h) {
      const k = h.target.value;
      i("update:name", k), p.value = !1, m && clearTimeout(m), k.length > 0 ? (f.value = !0, m = setTimeout(() => {
        i("validate-name", k);
      }, 400)) : f.value = !1;
    }
    function v() {
      n.name.length > 0 && i("validate-name", n.name);
    }
    return (h, k) => (s(), o("div", Ey, [
      w(at, null, {
        default: l(() => [...k[2] || (k[2] = [
          g("Configuration", -1)
        ])]),
        _: 1
      }),
      e("div", My, [
        e("div", Py, [
          w(Xt, { required: "" }, {
            default: l(() => [...k[3] || (k[3] = [
              g("Environment Name", -1)
            ])]),
            _: 1
          }),
          e("div", Ty, [
            e("input", {
              type: "text",
              class: pe(["name-input", { error: t.nameError || t.name.length === 0, valid: p.value }]),
              value: t.name,
              placeholder: "my-imported-env",
              onInput: d,
              onBlur: v
            }, null, 42, Ry),
            f.value ? (s(), o("span", Ly, "...")) : p.value ? (s(), o("span", zy, "✓")) : r("", !0)
          ]),
          t.nameError ? (s(), o("div", Dy, a(t.nameError), 1)) : r("", !0),
          k[4] || (k[4] = e("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        e("div", Uy, [
          w(Xt, null, {
            default: l(() => [...k[5] || (k[5] = [
              g("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          e("div", Ny, [
            (s(), o(V, null, ae(u, (_) => e("label", {
              key: _.value,
              class: pe(["strategy-option", { active: t.modelStrategy === _.value }])
            }, [
              e("input", {
                type: "radio",
                name: "model-strategy",
                value: _.value,
                checked: t.modelStrategy === _.value,
                onChange: (b) => i("update:modelStrategy", _.value)
              }, null, 40, Oy),
              e("div", By, [
                e("span", Ay, a(_.label), 1),
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
              w(Xt, null, {
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
                (s(!0), o(V, null, ae(Ie(Cs), (_) => (s(), o("option", {
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
}), Xy = /* @__PURE__ */ le(Jy, [["__scopeId", "data-v-89ea06a1"]]), Qy = { class: "import-flow" }, Zy = {
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
}, b0 = { class: "complete-message" }, _0 = { class: "complete-title" }, $0 = { class: "complete-details" }, C0 = { class: "complete-actions" }, x0 = /* @__PURE__ */ ne({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(t, { expose: c, emit: n }) {
    var Ne, me, ye, xe;
    const i = t, f = n, { previewTarballImport: p, previewGitImport: u, validateEnvironmentName: m, executeImport: d, executeGitImport: v, getImportProgress: h } = We();
    let k = null;
    const _ = y(null), b = y(i.resumeImport ?? !1), R = y(!1), E = y(!1), $ = y(""), C = y(!1), N = y(null), x = y(""), M = y(null), q = y(!1), A = y(null), W = y(null), S = y({
      name: ((Ne = i.initialProgress) == null ? void 0 : Ne.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), L = y(null), O = y({
      message: ((me = i.initialProgress) == null ? void 0 : me.message) ?? "Preparing import...",
      phase: ((ye = i.initialProgress) == null ? void 0 : ye.phase) ?? "",
      progress: ((xe = i.initialProgress) == null ? void 0 : xe.progress) ?? 0,
      error: null
    }), re = [
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 15 },
      { id: "extract_builtins", label: "Extract builtin nodes", progressThreshold: 20 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 35 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 60 },
      { id: "sync_nodes", label: "Sync custom nodes", progressThreshold: 70 },
      { id: "copy_workflows", label: "Copy workflows", progressThreshold: 80 },
      { id: "resolve_models", label: "Resolve models", progressThreshold: 85 },
      { id: "download_models", label: "Download models", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], Z = U(() => {
      if (!W.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const Q = W.value;
      return {
        sourceEnvironment: Q.comfyui_version ? `ComfyUI ${Q.comfyui_version}` : "Unknown",
        workflows: Q.workflows.map((ie) => ie.name),
        models: Q.models.map((ie) => ({
          filename: ie.filename,
          size: 0,
          type: ie.relative_path.split("/")[0] || "model"
        })),
        nodes: Q.nodes.map((ie) => ie.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), X = U(() => !C.value && !N.value && W.value && S.value.name.length > 0 && !L.value && (_.value || M.value));
    async function ce(Q) {
      _.value = Q, C.value = !0, N.value = null, W.value = null;
      try {
        const ie = await p(Q);
        W.value = ie;
      } catch (ie) {
        N.value = ie instanceof Error ? ie.message : "Failed to analyze file", console.error("Preview error:", ie);
      } finally {
        C.value = !1;
      }
    }
    function J() {
      _.value = null, M.value = null, x.value = "", A.value = null, R.value = !1, E.value = !1, $.value = "", W.value = null, N.value = null, S.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, L.value = null, f("source-cleared");
    }
    function D() {
      Ce(), J(), b.value = !1, C.value = !1, q.value = !1, O.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function z() {
      if (x.value.trim()) {
        q.value = !0, A.value = null;
        try {
          const Q = await u(x.value.trim());
          M.value = x.value.trim(), W.value = Q;
        } catch (Q) {
          A.value = Q instanceof Error ? Q.message : "Failed to analyze repository";
        } finally {
          q.value = !1;
        }
      }
    }
    function I(Q) {
      try {
        const ie = new URL(Q);
        return ie.host + ie.pathname.replace(/\.git$/, "");
      } catch {
        return Q;
      }
    }
    async function ue(Q) {
      if (!Q) {
        L.value = "Environment name is required";
        return;
      }
      try {
        const ie = await m(Q);
        L.value = ie.valid ? null : ie.error || "Invalid name";
      } catch {
        L.value = "Failed to validate name";
      }
    }
    async function ee() {
      if (S.value.name && !(!_.value && !M.value)) {
        b.value = !0, R.value = !1, O.value = { message: `Creating environment '${S.value.name}'...`, phase: "", progress: 0, error: null }, f("import-started");
        try {
          let Q;
          if (_.value)
            Q = await d(
              _.value,
              S.value.name,
              S.value.modelStrategy,
              S.value.torchBackend
            );
          else if (M.value)
            Q = await v(
              M.value,
              S.value.name,
              S.value.modelStrategy,
              S.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          Q.status === "started" ? he() : (E.value = !1, $.value = Q.message, b.value = !1, R.value = !0);
        } catch (Q) {
          E.value = !1, $.value = Q instanceof Error ? Q.message : "Unknown error occurred during import", b.value = !1, R.value = !0;
        }
      }
    }
    async function he() {
      if (k) return;
      const Q = async () => {
        try {
          const ke = await h();
          return O.value = {
            message: ke.message,
            phase: ke.phase || "",
            progress: ke.progress ?? (ke.state === "importing" ? 50 : 0),
            error: ke.error || null
          }, ke.state === "complete" ? (Ce(), E.value = !0, $.value = `Environment '${ke.environment_name}' created successfully`, b.value = !1, R.value = !0, ke.environment_name && f("import-complete", ke.environment_name, S.value.switchAfterImport), !1) : ke.state === "error" ? (Ce(), E.value = !1, $.value = ke.error || ke.message, b.value = !1, R.value = !0, !1) : !0;
        } catch (ke) {
          return console.error("Failed to poll import progress:", ke), !0;
        }
      };
      await Q() && (k = setInterval(async () => {
        await Q() || Ce();
      }, 2e3));
    }
    function Ce() {
      k && (clearInterval(k), k = null);
    }
    function Te(Q) {
      return Q < 1024 ? `${Q} B` : Q < 1024 * 1024 ? `${(Q / 1024).toFixed(1)} KB` : Q < 1024 * 1024 * 1024 ? `${(Q / (1024 * 1024)).toFixed(1)} MB` : `${(Q / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return Ae(async () => {
      try {
        const Q = await h();
        console.log("[ComfyGit ImportFlow] Import progress check:", Q.state, Q), Q.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", Q.environment_name), b.value = !0, S.value.name = Q.environment_name || S.value.name || "", O.value = {
          progress: Q.progress ?? 0,
          message: Q.message || "Importing...",
          phase: Q.phase || "",
          error: null
        }, he());
      } catch (Q) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", Q);
      }
    }), c({
      handleReset: D,
      isImporting: b,
      canImport: X
    }), (Q, ie) => {
      var ke;
      return s(), o("div", Qy, [
        !_.value && !M.value && !b.value ? (s(), o("div", Zy, [
          w(J1, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: ce
          }),
          ie[7] || (ie[7] = e("div", { class: "import-divider" }, [
            e("span", null, "or")
          ], -1)),
          e("div", e0, [
            ie[5] || (ie[5] = e("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            e("div", t0, [
              Le(e("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": ie[0] || (ie[0] = (ze) => x.value = ze),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: pt(z, ["enter"]),
                disabled: q.value
              }, null, 40, s0), [
                [Et, x.value]
              ]),
              w(oe, {
                variant: "primary",
                size: "sm",
                disabled: !x.value.trim() || q.value,
                onClick: z
              }, {
                default: l(() => [
                  g(a(q.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            A.value ? (s(), o("div", o0, a(A.value), 1)) : r("", !0),
            ie[6] || (ie[6] = e("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (_.value || M.value) && !b.value && !R.value ? (s(), o("div", n0, [
          e("div", a0, [
            _.value ? (s(), o("div", l0, [
              ie[8] || (ie[8] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", i0, [
                e("div", r0, a(_.value.name), 1),
                e("div", d0, a(Te(_.value.size)), 1)
              ])
            ])) : M.value ? (s(), o("div", c0, [
              ie[10] || (ie[10] = e("div", { class: "file-bar-icon" }, "🔗", -1)),
              e("div", u0, [
                e("div", m0, a(I(M.value)), 1),
                ie[9] || (ie[9] = e("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : r("", !0),
            w(oe, {
              variant: "ghost",
              size: "sm",
              onClick: J
            }, {
              default: l(() => [...ie[11] || (ie[11] = [
                g(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          C.value ? (s(), o("div", v0, [...ie[12] || (ie[12] = [
            e("div", { class: "loading-spinner" }, null, -1),
            e("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : N.value ? (s(), T(rt, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [N.value]
          }, null, 8, ["details"])) : W.value ? (s(), T(Iy, {
            key: 2,
            "source-environment": Z.value.sourceEnvironment,
            workflows: Z.value.workflows,
            models: Z.value.models,
            nodes: Z.value.nodes,
            "git-branch": Z.value.gitBranch,
            "git-commit": Z.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : r("", !0),
          W.value ? (s(), T(Xy, {
            key: 3,
            name: S.value.name,
            "onUpdate:name": ie[1] || (ie[1] = (ze) => S.value.name = ze),
            "model-strategy": S.value.modelStrategy,
            "onUpdate:modelStrategy": ie[2] || (ie[2] = (ze) => S.value.modelStrategy = ze),
            "torch-backend": S.value.torchBackend,
            "onUpdate:torchBackend": ie[3] || (ie[3] = (ze) => S.value.torchBackend = ze),
            "switch-after-import": S.value.switchAfterImport,
            "onUpdate:switchAfterImport": ie[4] || (ie[4] = (ze) => S.value.switchAfterImport = ze),
            "name-error": L.value,
            onValidateName: ue
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : r("", !0),
          S.value.modelStrategy === "skip" && ((ke = W.value) != null && ke.models_needing_download) ? (s(), T(rt, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${W.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : r("", !0),
          e("div", f0, [
            w(oe, {
              variant: "secondary",
              size: "md",
              onClick: J
            }, {
              default: l(() => [...ie[13] || (ie[13] = [
                g(" Cancel ", -1)
              ])]),
              _: 1
            }),
            w(oe, {
              variant: "primary",
              size: "md",
              disabled: !X.value,
              onClick: ee
            }, {
              default: l(() => [...ie[14] || (ie[14] = [
                g(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : b.value ? (s(), o("div", p0, [
          e("p", g0, [
            ie[15] || (ie[15] = g(" Importing environment ", -1)),
            e("strong", null, a(S.value.name), 1),
            ie[16] || (ie[16] = g("... ", -1))
          ]),
          w(ss, {
            progress: O.value.progress,
            message: O.value.message,
            "current-phase": O.value.phase,
            variant: O.value.error ? "error" : "default",
            "show-steps": !0,
            steps: re
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          O.value.error ? r("", !0) : (s(), o("p", h0, " This may take several minutes. Please wait... ")),
          O.value.error ? (s(), o("div", y0, [
            e("p", w0, a(O.value.error), 1)
          ])) : r("", !0)
        ])) : R.value ? (s(), o("div", k0, [
          e("div", {
            class: pe(["complete-icon", E.value ? "success" : "error"])
          }, a(E.value ? "✓" : "✕"), 3),
          e("div", b0, [
            e("div", _0, a(E.value ? "Import Successful" : "Import Failed"), 1),
            e("div", $0, a($.value), 1)
          ]),
          e("div", C0, [
            w(oe, {
              variant: "primary",
              size: "md",
              onClick: D
            }, {
              default: l(() => [...ie[17] || (ie[17] = [
                g(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : r("", !0)
      ]);
    };
  }
}), eo = /* @__PURE__ */ le(x0, [["__scopeId", "data-v-72cbc04e"]]), S0 = /* @__PURE__ */ ne({
  __name: "ImportSection",
  emits: ["import-complete-switch"],
  setup(t, { emit: c }) {
    const n = c, i = y(!1);
    function f(p, u) {
      u && n("import-complete-switch", p);
    }
    return (p, u) => (s(), o(V, null, [
      w(Je, null, {
        header: l(() => [
          w(Xe, {
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
      w(mt, {
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
}), I0 = /* @__PURE__ */ le(S0, [["__scopeId", "data-v-e13bfe76"]]), E0 = { class: "api-key-card" }, M0 = { class: "api-key-row" }, P0 = { class: "api-key-input-wrapper" }, T0 = ["type", "disabled"], R0 = ["title"], L0 = { class: "status-icon" }, z0 = { class: "status-text" }, D0 = {
  key: 0,
  class: "credit-balance"
}, U0 = { class: "config-card" }, N0 = { class: "config-row" }, O0 = ["disabled"], B0 = {
  key: 0,
  value: ""
}, A0 = ["value", "disabled"], F0 = { class: "config-row" }, V0 = {
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
}, X0 = ["value", "disabled"], Q0 = { class: "config-row" }, Z0 = { class: "radio-group" }, ew = { class: "radio-option" }, tw = { class: "radio-label" }, sw = { class: "radio-option" }, ow = { class: "radio-label" }, nw = { class: "config-row" }, aw = { class: "radio-group" }, lw = { class: "radio-option" }, iw = { class: "radio-option" }, rw = { class: "config-row" }, dw = { class: "summary-card" }, cw = {
  key: 0,
  class: "loading-text"
}, uw = { class: "summary-row" }, mw = { class: "summary-value" }, vw = { class: "summary-row" }, fw = { class: "summary-value" }, pw = { class: "summary-row" }, gw = { class: "summary-value" }, hw = {
  key: 0,
  class: "summary-sub-row"
}, yw = { class: "summary-sub-label" }, ww = {
  key: 1,
  class: "summary-sub-row warning"
}, kw = { class: "summary-sub-label" }, bw = { class: "summary-row" }, _w = { class: "summary-value" }, $w = { class: "summary-row" }, Cw = { class: "summary-value" }, xw = { class: "deployment-summary" }, Sw = { class: "summary-columns" }, Iw = { class: "summary-column" }, Ew = { class: "pricing-row" }, Mw = { class: "pricing-value" }, Pw = { class: "pricing-row" }, Tw = { class: "pricing-value" }, Rw = { class: "pricing-row" }, Lw = { class: "pricing-value" }, zw = { class: "pricing-row total" }, Dw = { class: "pricing-value" }, Uw = { class: "summary-column" }, Nw = { class: "spec-row" }, Ow = { class: "spec-row" }, Bw = {
  key: 0,
  class: "spec-row"
}, Aw = {
  key: 1,
  class: "spec-row spot-warning"
}, Fw = {
  key: 3,
  class: "deploy-actions"
}, Vw = { class: "pods-header" }, Ww = {
  key: 0,
  class: "loading-text"
}, Gw = {
  key: 1,
  class: "empty-state"
}, jw = {
  key: 2,
  class: "pods-list"
}, Hw = { class: "pod-header" }, Kw = { class: "pod-name" }, qw = { class: "pod-details" }, Yw = { class: "pod-gpu" }, Jw = { class: "pod-uptime" }, Xw = { class: "pod-cost" }, Qw = { class: "pod-actions" }, Zw = /* @__PURE__ */ ne({
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
      terminateRunPodPod: h,
      getStoredRunPodKey: k,
      clearRunPodKey: _
    } = We(), b = y(!1), R = y(!1), E = y(""), $ = y(!1), C = y(!1), N = y(null), x = y(null), M = y(""), q = y(""), A = y(""), W = y("SECURE"), S = y("ON_DEMAND"), L = y("my-comfyui-deploy"), O = y([]), re = y(!1), Z = y([]), X = y(!1), ce = y([]), J = y(!1), D = y(null), z = y(!1), I = y([]), ue = y(!1), ee = y(!1), he = y(null), Ce = y(null), Te = U(() => Z.value.find((te) => te.id === q.value) || null), Ne = U(() => M.value ? Z.value.filter((te) => te.data_center_id === M.value) : Z.value), me = U(() => $.value && q.value && A.value && !ee.value), ye = (te) => {
      const G = ce.value.find((de) => de.id === A.value);
      return G ? te === "SECURE" ? G.securePrice.toFixed(2) : G.communityPrice.toFixed(2) : "0.00";
    }, xe = U(() => {
      const te = ce.value.find((K) => K.id === A.value), G = Z.value.find((K) => K.id === q.value);
      if (!te) return null;
      const de = W.value === "SECURE" ? te.securePrice : te.communityPrice, Fe = S.value === "SPOT" ? de * 0.5 : de, Re = G ? G.size_gb * 14e-5 : 0, fe = 4e-3;
      return {
        gpu: Fe,
        volume: Re,
        container: fe,
        total: Fe + Re + fe
      };
    });
    async function Q() {
      if (E.value) {
        C.value = !0, N.value = null;
        try {
          const te = await p(E.value, !0);
          te.status === "success" ? ($.value = !0, x.value = te.credit_balance ?? null, N.value = { type: "success", message: te.message }, await Promise.all([
            ke(),
            ze(),
            st(),
            Se()
          ])) : N.value = { type: "error", message: te.message };
        } catch (te) {
          N.value = {
            type: "error",
            message: te instanceof Error ? te.message : "Connection test failed"
          };
        } finally {
          C.value = !1;
        }
      }
    }
    async function ie() {
      try {
        await _(), E.value = "", $.value = !1, N.value = null, x.value = null, O.value = [], M.value = "", Z.value = [], q.value = "", ce.value = [], A.value = "", D.value = null, I.value = [], n("toast", "API key cleared", "info");
      } catch {
        n("toast", "Failed to clear key", "error");
      }
    }
    async function ke() {
      re.value = !0;
      try {
        const te = await f();
        O.value = te.data_centers;
        const G = O.value.find((de) => de.available);
        G && (M.value = G.id);
      } catch {
        n("toast", "Failed to load data centers", "error");
      } finally {
        re.value = !1;
      }
    }
    async function ze() {
      X.value = !0;
      try {
        const te = await u();
        Z.value = te.volumes, Z.value.length > 0 && (q.value = Z.value[0].id);
      } catch {
        n("toast", "Failed to load network volumes", "error");
      } finally {
        X.value = !1;
      }
    }
    async function Qe(te) {
      J.value = !0;
      try {
        const G = await m(te);
        ce.value = G.gpu_types;
        const de = ce.value.find((Fe) => Fe.available);
        de ? A.value = de.id : A.value = "";
      } catch {
        n("toast", "Failed to load GPU types", "error");
      } finally {
        J.value = !1;
      }
    }
    gt(M, async (te) => {
      if (!te) return;
      const G = Z.value.find((de) => de.id === q.value);
      G && G.data_center_id !== te && (q.value = ""), await Qe(te);
    }), gt(q, async (te) => {
      if (!te) {
        ce.value = [], A.value = "";
        return;
      }
      const G = Z.value.find((de) => de.id === te);
      G && G.data_center_id !== M.value ? M.value = G.data_center_id : G && await Qe(G.data_center_id);
    });
    async function st() {
      z.value = !0;
      try {
        D.value = await i();
      } catch {
        n("toast", "Failed to load environment summary", "error");
      } finally {
        z.value = !1;
      }
    }
    async function Se() {
      ue.value = !0;
      try {
        const te = await v();
        I.value = te.pods;
      } catch {
        n("toast", "Failed to load pods", "error");
      } finally {
        ue.value = !1;
      }
    }
    async function Ze() {
      if (!(!A.value || !q.value)) {
        ee.value = !0, he.value = null;
        try {
          const te = await d({
            gpu_type_id: A.value,
            pod_name: L.value || "my-comfyui-deploy",
            network_volume_id: q.value,
            cloud_type: W.value,
            pricing_type: S.value
          });
          he.value = te, te.status === "success" ? (n("toast", "Deployment started!", "success"), await Se()) : n("toast", te.message, "error");
        } catch (te) {
          he.value = {
            status: "error",
            message: te instanceof Error ? te.message : "Deployment failed"
          }, n("toast", "Deployment failed", "error");
        } finally {
          ee.value = !1;
        }
      }
    }
    async function qe(te) {
      Ce.value = te;
      try {
        const G = await h(te);
        G.status === "success" ? (n("toast", "Pod terminated", "success"), await Se()) : n("toast", G.message, "error");
      } catch {
        n("toast", "Failed to terminate pod", "error");
      } finally {
        Ce.value = null;
      }
    }
    function je(te) {
      window.open(te, "_blank", "noopener,noreferrer");
    }
    function lt(te) {
      const G = Math.floor(te / 3600), de = Math.floor(te % 3600 / 60);
      return G > 0 ? `${G}h ${de}m` : `${de}m`;
    }
    return Ae(async () => {
      try {
        const te = await k();
        te.has_key && te.key_preview && (E.value = te.key_preview, await Q());
      } catch {
      }
    }), (te, G) => (s(), o(V, null, [
      w(Je, null, {
        header: l(() => [
          w(Xe, {
            title: "DEPLOY TO CLOUD",
            "show-info": !0,
            onInfoClick: G[0] || (G[0] = (de) => b.value = !0)
          })
        ]),
        content: l(() => [
          w(De, { title: "RUNPOD API KEY" }, {
            default: l(() => [
              e("div", E0, [
                e("div", M0, [
                  e("div", P0, [
                    Le(e("input", {
                      "onUpdate:modelValue": G[1] || (G[1] = (de) => E.value = de),
                      type: R.value ? "text" : "password",
                      class: "api-key-input",
                      placeholder: "Enter your RunPod API key (rp_...)",
                      disabled: $.value
                    }, null, 8, T0), [
                      [vo, E.value]
                    ]),
                    e("button", {
                      class: "toggle-visibility-btn",
                      onClick: G[2] || (G[2] = (de) => R.value = !R.value),
                      title: R.value ? "Hide key" : "Show key"
                    }, a(R.value ? "👁" : "👁‍🗨"), 9, R0)
                  ]),
                  $.value ? r("", !0) : (s(), T(oe, {
                    key: 0,
                    variant: "secondary",
                    size: "sm",
                    loading: C.value,
                    disabled: !E.value || C.value,
                    onClick: Q
                  }, {
                    default: l(() => [...G[13] || (G[13] = [
                      g(" Test ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading", "disabled"])),
                  $.value ? (s(), T(oe, {
                    key: 1,
                    variant: "ghost",
                    size: "sm",
                    onClick: ie
                  }, {
                    default: l(() => [...G[14] || (G[14] = [
                      g(" Clear ", -1)
                    ])]),
                    _: 1
                  })) : r("", !0)
                ]),
                N.value ? (s(), o("div", {
                  key: 0,
                  class: pe(["connection-status", N.value.type])
                }, [
                  e("span", L0, a(N.value.type === "success" ? "✓" : "✕"), 1),
                  e("span", z0, a(N.value.message), 1),
                  x.value !== null ? (s(), o("span", D0, " $" + a(x.value.toFixed(2)) + " credit ", 1)) : r("", !0)
                ], 2)) : r("", !0),
                G[15] || (G[15] = e("div", { class: "api-key-help" }, [
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
          $.value ? (s(), T(De, {
            key: 0,
            title: "CONFIGURATION"
          }, {
            default: l(() => [
              e("div", U0, [
                e("div", N0, [
                  G[16] || (G[16] = e("label", { class: "config-label" }, "Region", -1)),
                  Le(e("select", {
                    "onUpdate:modelValue": G[3] || (G[3] = (de) => M.value = de),
                    class: "config-select",
                    disabled: re.value
                  }, [
                    re.value ? (s(), o("option", B0, "Loading...")) : r("", !0),
                    (s(!0), o(V, null, ae(O.value, (de) => (s(), o("option", {
                      key: de.id,
                      value: de.id,
                      disabled: !de.available
                    }, a(de.id) + " (" + a(de.name) + ")" + a(de.available ? "" : " [Unavailable]"), 9, A0))), 128))
                  ], 8, O0), [
                    [bt, M.value]
                  ])
                ]),
                e("div", F0, [
                  G[21] || (G[21] = e("label", { class: "config-label" }, "Network Volume", -1)),
                  X.value ? (s(), o("div", V0, "Loading volumes...")) : Ne.value.length === 0 ? (s(), o(V, { key: 1 }, [
                    e("div", W0, [
                      G[17] || (G[17] = e("span", { class: "no-volumes-icon" }, "⚠", -1)),
                      e("span", G0, "No volumes in " + a(M.value || "this region"), 1)
                    ]),
                    G[18] || (G[18] = e("p", { class: "volume-help" }, " Network volumes provide persistent storage that survives pod termination. Create one on RunPod first: ", -1)),
                    G[19] || (G[19] = e("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-link"
                    }, " Create Volume on RunPod → ", -1))
                  ], 64)) : (s(), o(V, { key: 2 }, [
                    Le(e("select", {
                      "onUpdate:modelValue": G[4] || (G[4] = (de) => q.value = de),
                      class: "config-select"
                    }, [
                      (s(!0), o(V, null, ae(Ne.value, (de) => (s(), o("option", {
                        key: de.id,
                        value: de.id
                      }, a(de.name) + " (" + a(de.size_gb) + "GB) ", 9, j0))), 128))
                    ], 512), [
                      [bt, q.value]
                    ]),
                    G[20] || (G[20] = e("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-inline-link"
                    }, " + Create new volume ", -1))
                  ], 64))
                ]),
                e("div", H0, [
                  G[22] || (G[22] = e("label", { class: "config-label" }, "GPU Type", -1)),
                  Le(e("select", {
                    "onUpdate:modelValue": G[5] || (G[5] = (de) => A.value = de),
                    class: "config-select",
                    disabled: J.value || !q.value
                  }, [
                    q.value ? J.value ? (s(), o("option", Y0, "Loading GPUs...")) : ce.value.length === 0 ? (s(), o("option", J0, "No GPUs available in this region")) : r("", !0) : (s(), o("option", q0, "Select a volume first")),
                    (s(!0), o(V, null, ae(ce.value, (de) => (s(), o("option", {
                      key: de.id,
                      value: de.id,
                      disabled: !de.available
                    }, a(de.displayName) + " (" + a(de.memoryInGb) + "GB) - $" + a(W.value === "SECURE" ? de.securePrice.toFixed(2) : de.communityPrice.toFixed(2)) + "/hr " + a(de.available ? "" : " [Unavailable]"), 9, X0))), 128))
                  ], 8, K0), [
                    [bt, A.value]
                  ])
                ]),
                e("div", Q0, [
                  G[23] || (G[23] = e("label", { class: "config-label" }, "Cloud Type", -1)),
                  e("div", Z0, [
                    e("label", ew, [
                      Le(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": G[6] || (G[6] = (de) => W.value = de),
                        value: "SECURE"
                      }, null, 512), [
                        [St, W.value]
                      ]),
                      e("span", tw, "Secure ($" + a(ye("SECURE")) + "/hr)", 1)
                    ]),
                    e("label", sw, [
                      Le(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": G[7] || (G[7] = (de) => W.value = de),
                        value: "COMMUNITY"
                      }, null, 512), [
                        [St, W.value]
                      ]),
                      e("span", ow, "Community ($" + a(ye("COMMUNITY")) + "/hr)", 1)
                    ])
                  ])
                ]),
                e("div", nw, [
                  G[26] || (G[26] = e("label", { class: "config-label" }, [
                    g(" Pricing "),
                    e("span", {
                      class: "info-tooltip",
                      title: "On-Demand pods run until you stop them. Spot pods are ~50% cheaper but may be interrupted if capacity is needed. Good for experimentation."
                    }, "ⓘ")
                  ], -1)),
                  e("div", aw, [
                    e("label", lw, [
                      Le(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": G[8] || (G[8] = (de) => S.value = de),
                        value: "ON_DEMAND"
                      }, null, 512), [
                        [St, S.value]
                      ]),
                      G[24] || (G[24] = e("span", { class: "radio-label" }, "On-Demand", -1))
                    ]),
                    e("label", iw, [
                      Le(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": G[9] || (G[9] = (de) => S.value = de),
                        value: "SPOT"
                      }, null, 512), [
                        [St, S.value]
                      ]),
                      G[25] || (G[25] = e("span", { class: "radio-label" }, "Spot (~50% cheaper)", -1))
                    ])
                  ])
                ]),
                e("div", rw, [
                  G[27] || (G[27] = e("label", { class: "config-label" }, "Pod Name", -1)),
                  Le(e("input", {
                    "onUpdate:modelValue": G[10] || (G[10] = (de) => L.value = de),
                    type: "text",
                    class: "config-input",
                    placeholder: "my-comfyui-deploy"
                  }, null, 512), [
                    [Et, L.value]
                  ])
                ])
              ])
            ]),
            _: 1
          })) : r("", !0),
          $.value ? (s(), T(De, {
            key: 1,
            title: "ENVIRONMENT SUMMARY"
          }, {
            default: l(() => [
              e("div", dw, [
                z.value ? (s(), o("div", cw, "Loading environment summary...")) : D.value ? (s(), o(V, { key: 1 }, [
                  e("div", uw, [
                    G[28] || (G[28] = e("span", { class: "summary-label" }, "ComfyUI", -1)),
                    e("span", mw, a(D.value.comfyui_version), 1)
                  ]),
                  e("div", vw, [
                    G[29] || (G[29] = e("span", { class: "summary-label" }, "Nodes", -1)),
                    e("span", fw, a(D.value.node_count) + " custom nodes", 1)
                  ]),
                  e("div", pw, [
                    G[30] || (G[30] = e("span", { class: "summary-label" }, "Models", -1)),
                    e("span", gw, a(D.value.model_count) + " models", 1)
                  ]),
                  D.value.models_with_sources > 0 ? (s(), o("div", hw, [
                    e("span", yw, "└─ " + a(D.value.models_with_sources) + " with sources (auto-download)", 1)
                  ])) : r("", !0),
                  D.value.models_without_sources > 0 ? (s(), o("div", ww, [
                    e("span", kw, "└─ " + a(D.value.models_without_sources) + " without sources (manual upload)", 1)
                  ])) : r("", !0),
                  e("div", bw, [
                    G[31] || (G[31] = e("span", { class: "summary-label" }, "Workflows", -1)),
                    e("span", _w, a(D.value.workflow_count) + " committed", 1)
                  ]),
                  e("div", $w, [
                    G[32] || (G[32] = e("span", { class: "summary-label" }, "Package", -1)),
                    e("span", Cw, "~" + a(D.value.estimated_package_size_mb) + " MB", 1)
                  ])
                ], 64)) : r("", !0)
              ])
            ]),
            _: 1
          })) : r("", !0),
          $.value && xe.value ? (s(), T(De, {
            key: 2,
            title: "DEPLOYMENT SUMMARY"
          }, {
            default: l(() => {
              var de, Fe;
              return [
                e("div", xw, [
                  e("div", Sw, [
                    e("div", Iw, [
                      G[37] || (G[37] = e("div", { class: "column-header" }, "Pricing", -1)),
                      e("div", Ew, [
                        G[33] || (G[33] = e("span", { class: "pricing-label" }, "GPU:", -1)),
                        e("span", Mw, "$" + a(xe.value.gpu.toFixed(2)) + "/hr", 1)
                      ]),
                      e("div", Pw, [
                        G[34] || (G[34] = e("span", { class: "pricing-label" }, "Volume:", -1)),
                        e("span", Tw, "$" + a(xe.value.volume.toFixed(3)) + "/hr", 1)
                      ]),
                      e("div", Rw, [
                        G[35] || (G[35] = e("span", { class: "pricing-label" }, "Disk:", -1)),
                        e("span", Lw, "$" + a(xe.value.container.toFixed(3)) + "/hr", 1)
                      ]),
                      G[38] || (G[38] = e("div", { class: "pricing-divider" }, null, -1)),
                      e("div", zw, [
                        G[36] || (G[36] = e("span", { class: "pricing-label" }, "Total:", -1)),
                        e("span", Dw, "~$" + a(xe.value.total.toFixed(2)) + "/hr", 1)
                      ])
                    ]),
                    e("div", Uw, [
                      G[40] || (G[40] = e("div", { class: "column-header" }, "Pod Specs", -1)),
                      e("div", Nw, [
                        e("span", null, a(((de = ce.value.find((Re) => Re.id === A.value)) == null ? void 0 : de.displayName) || "GPU") + " (" + a(((Fe = ce.value.find((Re) => Re.id === A.value)) == null ? void 0 : Fe.memoryInGb) || 0) + "GB VRAM)", 1)
                      ]),
                      e("div", Ow, [
                        e("span", null, "Region: " + a(M.value), 1)
                      ]),
                      Te.value ? (s(), o("div", Bw, [
                        e("span", null, "Volume: " + a(Te.value.name), 1)
                      ])) : r("", !0),
                      S.value === "SPOT" ? (s(), o("div", Aw, [...G[39] || (G[39] = [
                        e("span", null, "⚠ Spot instance - may be interrupted", -1)
                      ])])) : r("", !0)
                    ])
                  ])
                ])
              ];
            }),
            _: 1
          })) : r("", !0),
          $.value ? (s(), o("div", Fw, [
            w(oe, {
              variant: "primary",
              size: "md",
              loading: ee.value,
              disabled: !me.value,
              onClick: Ze
            }, {
              default: l(() => [...G[41] || (G[41] = [
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
          he.value ? (s(), T(De, {
            key: 4,
            title: "DEPLOY STATUS"
          }, {
            default: l(() => [
              w(Ye, {
                status: he.value.status === "success" ? "synced" : "broken"
              }, Dt({
                icon: l(() => [
                  g(a(he.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: l(() => [
                  g(a(he.value.status === "success" ? "Deployment Started" : "Deployment Failed"), 1)
                ]),
                subtitle: l(() => [
                  g(a(he.value.message), 1)
                ]),
                actions: l(() => [
                  w(oe, {
                    variant: "ghost",
                    size: "sm",
                    onClick: G[11] || (G[11] = (de) => he.value = null)
                  }, {
                    default: l(() => [...G[42] || (G[42] = [
                      g(" Dismiss ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 2
              }, [
                he.value.pod_id ? {
                  name: "details",
                  fn: l(() => [
                    w(Be, {
                      label: "Pod ID:",
                      value: he.value.pod_id
                    }, null, 8, ["value"])
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["status"])
            ]),
            _: 1
          })) : r("", !0),
          $.value ? (s(), T(De, {
            key: 5,
            title: "ACTIVE PODS"
          }, {
            default: l(() => [
              e("div", Vw, [
                w(oe, {
                  variant: "ghost",
                  size: "sm",
                  loading: ue.value,
                  onClick: Se
                }, {
                  default: l(() => [...G[43] || (G[43] = [
                    g(" Refresh ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ]),
              ue.value && I.value.length === 0 ? (s(), o("div", Ww, " Loading pods... ")) : I.value.length === 0 ? (s(), o("div", Gw, [...G[44] || (G[44] = [
                e("span", { class: "empty-icon" }, "○", -1),
                e("span", { class: "empty-text" }, "No active pods", -1)
              ])])) : (s(), o("div", jw, [
                (s(!0), o(V, null, ae(I.value, (de) => (s(), o("div", {
                  key: de.id,
                  class: "pod-card"
                }, [
                  e("div", Hw, [
                    e("span", Kw, a(de.name), 1),
                    e("span", {
                      class: pe(["pod-status", de.status.toLowerCase()])
                    }, a(de.status === "RUNNING" ? "●" : "○") + " " + a(de.status), 3)
                  ]),
                  e("div", qw, [
                    e("span", Yw, a(de.gpu_type), 1),
                    G[45] || (G[45] = e("span", { class: "pod-separator" }, "•", -1)),
                    e("span", Jw, a(lt(de.uptime_seconds)), 1),
                    G[46] || (G[46] = e("span", { class: "pod-separator" }, "•", -1)),
                    e("span", Xw, "$" + a(de.total_cost.toFixed(2)), 1)
                  ]),
                  e("div", Qw, [
                    de.comfyui_url && de.status === "RUNNING" ? (s(), T(oe, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (Fe) => je(de.comfyui_url)
                    }, {
                      default: l(() => [...G[47] || (G[47] = [
                        g(" Open ComfyUI ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : r("", !0),
                    w(oe, {
                      variant: "ghost",
                      size: "sm",
                      loading: Ce.value === de.id,
                      onClick: (Fe) => qe(de.id)
                    }, {
                      default: l(() => [...G[48] || (G[48] = [
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
      w(mt, {
        show: b.value,
        title: "Deploy to Cloud",
        onClose: G[12] || (G[12] = (de) => b.value = !1)
      }, {
        content: l(() => [...G[49] || (G[49] = [
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
      }, 8, ["show"])
    ], 64));
  }
}), ek = /* @__PURE__ */ le(Zw, [["__scopeId", "data-v-65514060"]]), tk = { class: "header-info" }, sk = { class: "commit-hash" }, ok = {
  key: 0,
  class: "commit-refs"
}, nk = { class: "commit-message" }, ak = { class: "commit-date" }, lk = {
  key: 0,
  class: "loading"
}, ik = {
  key: 1,
  class: "changes-section"
}, rk = { class: "stats-row" }, dk = { class: "stat" }, ck = { class: "stat insertions" }, uk = { class: "stat deletions" }, mk = {
  key: 0,
  class: "change-group"
}, vk = {
  key: 1,
  class: "change-group"
}, fk = {
  key: 0,
  class: "version"
}, pk = {
  key: 2,
  class: "change-group"
}, gk = { class: "change-item" }, hk = /* @__PURE__ */ ne({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const c = t, { getCommitDetail: n } = We(), i = y(null), f = y(!0), p = U(() => {
      if (!i.value) return !1;
      const m = i.value.changes.workflows;
      return m.added.length > 0 || m.modified.length > 0 || m.deleted.length > 0;
    }), u = U(() => {
      if (!i.value) return !1;
      const m = i.value.changes.nodes;
      return m.added.length > 0 || m.removed.length > 0;
    });
    return Ae(async () => {
      try {
        i.value = await n(c.commit.hash);
      } finally {
        f.value = !1;
      }
    }), (m, d) => (s(), T(et, {
      size: "md",
      "show-close-button": !1,
      onClose: d[3] || (d[3] = (v) => m.$emit("close"))
    }, {
      header: l(() => {
        var v, h, k, _;
        return [
          e("div", tk, [
            d[4] || (d[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", sk, a(((v = i.value) == null ? void 0 : v.short_hash) || t.commit.short_hash || ((h = t.commit.hash) == null ? void 0 : h.slice(0, 7))), 1),
            (_ = (k = i.value) == null ? void 0 : k.refs) != null && _.length ? (s(), o("span", ok, [
              (s(!0), o(V, null, ae(i.value.refs, (b) => (s(), o("span", {
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
        var v, h;
        return [
          e("div", nk, a(((v = i.value) == null ? void 0 : v.message) || t.commit.message), 1),
          e("div", ak, a(((h = i.value) == null ? void 0 : h.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          f.value ? (s(), o("div", lk, "Loading details...")) : i.value ? (s(), o("div", ik, [
            e("div", rk, [
              e("span", dk, a(i.value.stats.files_changed) + " files", 1),
              e("span", ck, "+" + a(i.value.stats.insertions), 1),
              e("span", uk, "-" + a(i.value.stats.deletions), 1)
            ]),
            p.value ? (s(), o("div", mk, [
              w(jt, { variant: "section" }, {
                default: l(() => [...d[6] || (d[6] = [
                  g("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(V, null, ae(i.value.changes.workflows.added, (k) => (s(), o("div", {
                key: "add-" + k,
                class: "change-item added"
              }, [
                d[7] || (d[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(k), 1)
              ]))), 128)),
              (s(!0), o(V, null, ae(i.value.changes.workflows.modified, (k) => (s(), o("div", {
                key: "mod-" + k,
                class: "change-item modified"
              }, [
                d[8] || (d[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, a(k), 1)
              ]))), 128)),
              (s(!0), o(V, null, ae(i.value.changes.workflows.deleted, (k) => (s(), o("div", {
                key: "del-" + k,
                class: "change-item deleted"
              }, [
                d[9] || (d[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(k), 1)
              ]))), 128))
            ])) : r("", !0),
            u.value ? (s(), o("div", vk, [
              w(jt, { variant: "section" }, {
                default: l(() => [...d[10] || (d[10] = [
                  g("NODES", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(V, null, ae(i.value.changes.nodes.added, (k) => (s(), o("div", {
                key: "add-" + k.name,
                class: "change-item added"
              }, [
                d[11] || (d[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(k.name), 1),
                k.version ? (s(), o("span", fk, "(" + a(k.version) + ")", 1)) : r("", !0)
              ]))), 128)),
              (s(!0), o(V, null, ae(i.value.changes.nodes.removed, (k) => (s(), o("div", {
                key: "rem-" + k.name,
                class: "change-item deleted"
              }, [
                d[12] || (d[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(k.name), 1)
              ]))), 128))
            ])) : r("", !0),
            i.value.changes.models.resolved > 0 ? (s(), o("div", pk, [
              w(jt, { variant: "section" }, {
                default: l(() => [...d[13] || (d[13] = [
                  g("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", gk, [
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
}), yk = /* @__PURE__ */ le(hk, [["__scopeId", "data-v-d256ff6d"]]), wk = { class: "base-textarea-wrapper" }, kk = ["value", "rows", "placeholder", "disabled", "maxlength"], bk = {
  key: 0,
  class: "base-textarea-count"
}, _k = /* @__PURE__ */ ne({
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
    return (p, u) => (s(), o("div", wk, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: u[0] || (u[0] = (m) => p.$emit("update:modelValue", m.target.value)),
        onKeydown: [
          u[1] || (u[1] = pt(Ue((m) => p.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          u[2] || (u[2] = pt(Ue((m) => p.$emit("ctrlEnter"), ["meta"]), ["enter"])),
          pt(f, ["enter"])
        ]
      }, null, 40, kk),
      t.showCharCount && t.maxLength ? (s(), o("div", bk, a(t.modelValue.length) + " / " + a(t.maxLength), 1)) : r("", !0)
    ]));
  }
}), Ds = /* @__PURE__ */ le(_k, [["__scopeId", "data-v-c6d16c93"]]), $k = ["checked", "disabled"], Ck = { class: "base-checkbox-box" }, xk = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, Sk = {
  key: 0,
  class: "base-checkbox-label"
}, Ik = /* @__PURE__ */ ne({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (s(), o("label", {
      class: pe(["base-checkbox", { disabled: t.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        class: "base-checkbox-input",
        onChange: n[0] || (n[0] = (i) => c.$emit("update:modelValue", i.target.checked))
      }, null, 40, $k),
      e("span", Ck, [
        t.modelValue ? (s(), o("svg", xk, [...n[1] || (n[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : r("", !0)
      ]),
      c.$slots.default ? (s(), o("span", Sk, [
        Ee(c.$slots, "default", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), Us = /* @__PURE__ */ le(Ik, [["__scopeId", "data-v-bf17c831"]]), Ek = { class: "popover-header" }, Mk = { class: "popover-body" }, Pk = {
  key: 0,
  class: "changes-summary"
}, Tk = {
  key: 0,
  class: "change-item"
}, Rk = {
  key: 1,
  class: "change-item"
}, Lk = {
  key: 2,
  class: "change-item"
}, zk = {
  key: 3,
  class: "change-item"
}, Dk = {
  key: 4,
  class: "change-item"
}, Uk = {
  key: 5,
  class: "change-item"
}, Nk = {
  key: 1,
  class: "no-changes"
}, Ok = {
  key: 2,
  class: "loading"
}, Bk = {
  key: 3,
  class: "issues-error"
}, Ak = { class: "error-header" }, Fk = { class: "error-title" }, Vk = { class: "issues-list" }, Wk = { class: "message-section" }, Gk = { class: "popover-footer" }, jk = {
  key: 1,
  class: "commit-popover"
}, Hk = { class: "popover-header" }, Kk = { class: "popover-body" }, qk = {
  key: 0,
  class: "changes-summary"
}, Yk = {
  key: 0,
  class: "change-item"
}, Jk = {
  key: 1,
  class: "change-item"
}, Xk = {
  key: 2,
  class: "change-item"
}, Qk = {
  key: 3,
  class: "change-item"
}, Zk = {
  key: 4,
  class: "change-item"
}, eb = {
  key: 5,
  class: "change-item"
}, tb = {
  key: 1,
  class: "no-changes"
}, sb = {
  key: 2,
  class: "loading"
}, ob = {
  key: 3,
  class: "issues-error"
}, nb = { class: "error-header" }, ab = { class: "error-title" }, lb = { class: "issues-list" }, ib = { class: "message-section" }, rb = { class: "popover-footer" }, db = /* @__PURE__ */ ne({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: c }) {
    const n = t, i = c, { commit: f } = We(), p = y(""), u = y(!1), m = y(!1), d = U(() => {
      if (!n.status) return !1;
      const R = n.status.workflows;
      return R.new.length > 0 || R.modified.length > 0 || R.deleted.length > 0 || n.status.has_changes;
    }), v = U(() => {
      if (!n.status) return !1;
      const R = n.status.workflows, E = n.status.git_changes;
      return R.new.length > 0 || R.modified.length > 0 || R.deleted.length > 0 || E.nodes_added.length > 0 || E.nodes_removed.length > 0;
    }), h = U(() => {
      var R;
      return (R = n.status) != null && R.workflows.analyzed ? n.status.workflows.analyzed.filter(
        (E) => E.has_issues && (E.sync_state === "new" || E.sync_state === "modified")
      ) : [];
    }), k = U(() => h.value.length > 0), _ = U(() => k.value && !m.value);
    async function b() {
      var R, E, $;
      if (!(k.value && !m.value) && !(!d.value || !p.value.trim() || u.value)) {
        u.value = !0;
        try {
          const C = await f(p.value.trim(), m.value);
          if (C.status === "success") {
            const N = `Committed: ${((R = C.summary) == null ? void 0 : R.new) || 0} new, ${((E = C.summary) == null ? void 0 : E.modified) || 0} modified, ${(($ = C.summary) == null ? void 0 : $.deleted) || 0} deleted`;
            i("committed", { success: !0, message: N });
          } else C.status === "no_changes" ? i("committed", { success: !1, message: "No changes to commit" }) : C.status === "blocked" ? i("committed", { success: !1, message: 'Commit blocked - enable "Allow issues" to force commit' }) : i("committed", { success: !1, message: C.message || "Commit failed" });
        } catch (C) {
          i("committed", { success: !1, message: C instanceof Error ? C.message : "Commit failed" });
        } finally {
          u.value = !1;
        }
      }
    }
    return (R, E) => t.asModal ? (s(), T(He, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: E[5] || (E[5] = ($) => i("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: E[4] || (E[4] = Ue(() => {
          }, ["stop"]))
        }, [
          e("div", Ek, [
            E[11] || (E[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: E[0] || (E[0] = ($) => i("close"))
            }, [...E[10] || (E[10] = [
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
            t.status && d.value ? (s(), o("div", Pk, [
              t.status.workflows.new.length ? (s(), o("div", Tk, [
                E[12] || (E[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : r("", !0),
              t.status.workflows.modified.length ? (s(), o("div", Rk, [
                E[13] || (E[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
              ])) : r("", !0),
              t.status.workflows.deleted.length ? (s(), o("div", Lk, [
                E[14] || (E[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : r("", !0),
              t.status.git_changes.nodes_added.length ? (s(), o("div", zk, [
                E[15] || (E[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : r("", !0),
              t.status.git_changes.nodes_removed.length ? (s(), o("div", Dk, [
                E[16] || (E[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : r("", !0),
              v.value ? r("", !0) : (s(), o("div", Uk, [...E[17] || (E[17] = [
                e("span", { class: "change-icon modified" }, "~", -1),
                e("span", null, "Configuration updated", -1)
              ])]))
            ])) : t.status ? (s(), o("div", Nk, " No changes to commit ")) : (s(), o("div", Ok, " Loading... ")),
            k.value ? (s(), o("div", Bk, [
              e("div", Ak, [
                E[18] || (E[18] = e("span", { class: "error-icon" }, "⚠", -1)),
                e("span", Fk, a(h.value.length) + " workflow(s) can't run", 1)
              ]),
              e("div", Vk, [
                (s(!0), o(V, null, ae(h.value, ($) => (s(), o("div", {
                  key: $.name,
                  class: "issue-item"
                }, [
                  e("strong", null, a($.name), 1),
                  g(": " + a($.issue_summary), 1)
                ]))), 128))
              ]),
              w(Us, {
                modelValue: m.value,
                "onUpdate:modelValue": E[1] || (E[1] = ($) => m.value = $),
                class: "allow-issues-toggle"
              }, {
                default: l(() => [...E[19] || (E[19] = [
                  g(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : r("", !0),
            e("div", Wk, [
              w(Ds, {
                modelValue: p.value,
                "onUpdate:modelValue": E[2] || (E[2] = ($) => p.value = $),
                placeholder: _.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
                disabled: !d.value || u.value || _.value,
                rows: 3,
                "submit-on-enter": !0,
                onCtrlEnter: b,
                onSubmit: b
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ])
          ]),
          e("div", Gk, [
            w(ge, {
              variant: "secondary",
              onClick: E[3] || (E[3] = ($) => i("close"))
            }, {
              default: l(() => [...E[20] || (E[20] = [
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
    ])) : (s(), o("div", jk, [
      e("div", Hk, [
        E[22] || (E[22] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: E[6] || (E[6] = ($) => i("close"))
        }, [...E[21] || (E[21] = [
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
      e("div", Kk, [
        t.status && d.value ? (s(), o("div", qk, [
          t.status.workflows.new.length ? (s(), o("div", Yk, [
            E[23] || (E[23] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : r("", !0),
          t.status.workflows.modified.length ? (s(), o("div", Jk, [
            E[24] || (E[24] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
          ])) : r("", !0),
          t.status.workflows.deleted.length ? (s(), o("div", Xk, [
            E[25] || (E[25] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : r("", !0),
          t.status.git_changes.nodes_added.length ? (s(), o("div", Qk, [
            E[26] || (E[26] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : r("", !0),
          t.status.git_changes.nodes_removed.length ? (s(), o("div", Zk, [
            E[27] || (E[27] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : r("", !0),
          v.value ? r("", !0) : (s(), o("div", eb, [...E[28] || (E[28] = [
            e("span", { class: "change-icon modified" }, "~", -1),
            e("span", null, "Configuration updated", -1)
          ])]))
        ])) : t.status ? (s(), o("div", tb, " No changes to commit ")) : (s(), o("div", sb, " Loading... ")),
        k.value ? (s(), o("div", ob, [
          e("div", nb, [
            E[29] || (E[29] = e("span", { class: "error-icon" }, "⚠", -1)),
            e("span", ab, a(h.value.length) + " workflow(s) can't run", 1)
          ]),
          e("div", lb, [
            (s(!0), o(V, null, ae(h.value, ($) => (s(), o("div", {
              key: $.name,
              class: "issue-item"
            }, [
              e("strong", null, a($.name), 1),
              g(": " + a($.issue_summary), 1)
            ]))), 128))
          ]),
          w(Us, {
            modelValue: m.value,
            "onUpdate:modelValue": E[7] || (E[7] = ($) => m.value = $),
            class: "allow-issues-toggle"
          }, {
            default: l(() => [...E[30] || (E[30] = [
              g(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : r("", !0),
        e("div", ib, [
          w(Ds, {
            modelValue: p.value,
            "onUpdate:modelValue": E[8] || (E[8] = ($) => p.value = $),
            placeholder: _.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
            disabled: !d.value || u.value || _.value,
            rows: 3,
            "submit-on-enter": !0,
            onCtrlEnter: b,
            onSubmit: b
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ])
      ]),
      e("div", rb, [
        w(ge, {
          variant: "secondary",
          onClick: E[9] || (E[9] = ($) => i("close"))
        }, {
          default: l(() => [...E[31] || (E[31] = [
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
}), to = /* @__PURE__ */ le(db, [["__scopeId", "data-v-d0fe6172"]]), cb = { class: "modal-header" }, ub = { class: "modal-body" }, mb = { class: "switch-message" }, vb = { class: "switch-details" }, fb = { class: "modal-actions" }, pb = /* @__PURE__ */ ne({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, n) => (s(), T(He, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (i) => c.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = Ue(() => {
          }, ["stop"]))
        }, [
          e("div", cb, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", ub, [
            e("p", mb, [
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
            e("p", vb, ' Your current work will be preserved. You can switch back to "' + a(t.fromEnvironment) + '" anytime. ', 1),
            n[10] || (n[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", fb, [
            w(oe, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (i) => c.$emit("close"))
            }, {
              default: l(() => [...n[11] || (n[11] = [
                g(" Cancel ", -1)
              ])]),
              _: 1
            }),
            w(oe, {
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
}), gb = /* @__PURE__ */ le(pb, [["__scopeId", "data-v-e9c5253e"]]), hb = {
  key: 0,
  class: "modal-overlay"
}, yb = { class: "modal-content" }, wb = { class: "modal-body" }, kb = { class: "progress-info" }, bb = { class: "progress-percentage" }, _b = { class: "progress-state" }, $b = { class: "switch-steps" }, Cb = { class: "step-icon" }, xb = { class: "step-label" }, Sb = /* @__PURE__ */ ne({
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
        let v = "pending", h = "○";
        return d < u ? (v = "completed", h = "✓") : d === u && (v = "active", h = "⟳"), {
          ...m,
          status: v,
          icon: h
        };
      });
    });
    return (p, u) => (s(), T(He, { to: "body" }, [
      t.show ? (s(), o("div", hb, [
        e("div", yb, [
          u[1] || (u[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", wb, [
            w(Zs, {
              progress: t.progress,
              variant: i.value
            }, null, 8, ["progress", "variant"]),
            e("div", kb, [
              e("div", bb, a(t.progress) + "%", 1),
              e("div", _b, a(n.value), 1)
            ]),
            e("div", $b, [
              (s(!0), o(V, null, ae(f.value, (m) => (s(), o("div", {
                key: m.state,
                class: pe(["switch-step", m.status])
              }, [
                e("span", Cb, a(m.icon), 1),
                e("span", xb, a(m.label), 1)
              ], 2))), 128))
            ]),
            u[0] || (u[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : r("", !0)
    ]));
  }
}), Ib = /* @__PURE__ */ le(Sb, [["__scopeId", "data-v-768a5078"]]), Eb = { class: "modal-header" }, Mb = { class: "modal-body" }, Pb = {
  key: 0,
  class: "node-section"
}, Tb = { class: "node-list" }, Rb = {
  key: 1,
  class: "node-section"
}, Lb = { class: "node-list" }, zb = { class: "modal-actions" }, Db = /* @__PURE__ */ ne({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, n) => (s(), T(He, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (i) => c.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = Ue(() => {
          }, ["stop"]))
        }, [
          e("div", Eb, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", Mb, [
            n[8] || (n[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (s(), o("div", Pb, [
              n[6] || (n[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", Tb, [
                (s(!0), o(V, null, ae(t.mismatchDetails.missing_nodes, (i) => (s(), o("div", {
                  key: i,
                  class: "node-item add"
                }, " + " + a(i), 1))), 128))
              ])
            ])) : r("", !0),
            t.mismatchDetails.extra_nodes.length ? (s(), o("div", Rb, [
              n[7] || (n[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", Lb, [
                (s(!0), o(V, null, ae(t.mismatchDetails.extra_nodes, (i) => (s(), o("div", {
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
          e("div", zb, [
            w(oe, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (i) => c.$emit("close"))
            }, {
              default: l(() => [...n[10] || (n[10] = [
                g(" Cancel ", -1)
              ])]),
              _: 1
            }),
            w(oe, {
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
}), Ub = /* @__PURE__ */ le(Db, [["__scopeId", "data-v-7cad7518"]]), Nb = [
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
], Ob = "v0.0.4", Bb = "Akatz", Ab = { class: "social-buttons" }, Fb = ["title", "aria-label", "onClick"], Vb = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Wb = ["d"], Gb = ["title", "aria-label", "onClick"], jb = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Hb = ["d"], Kb = /* @__PURE__ */ ne({
  __name: "SocialButtons",
  setup(t) {
    function c(n) {
      window.open(n, "_blank", "noopener,noreferrer");
    }
    return (n, i) => (s(), o("div", Ab, [
      (s(!0), o(V, null, ae(Ie(Nb), (f) => (s(), o(V, {
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
          (s(), o("svg", Vb, [
            e("path", {
              d: f.iconPath
            }, null, 8, Wb)
          ]))
        ], 8, Fb)) : (s(), o("button", {
          key: 1,
          class: "icon-btn social-link",
          title: f.title,
          "aria-label": f.ariaLabel,
          onClick: (p) => c(f.url)
        }, [
          (s(), o("svg", jb, [
            e("path", {
              d: f.iconPath
            }, null, 8, Hb)
          ]))
        ], 8, Gb))
      ], 64))), 128))
    ]));
  }
}), so = /* @__PURE__ */ le(Kb, [["__scopeId", "data-v-4f846342"]]), qb = { class: "footer-info" }, Yb = { class: "version" }, Jb = { class: "made-by" }, Xb = /* @__PURE__ */ ne({
  __name: "FooterInfo",
  setup(t) {
    return (c, n) => (s(), o("div", qb, [
      e("span", Yb, a(Ie(Ob)), 1),
      e("span", Jb, [
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
        g(" by " + a(Ie(Bb)), 1)
      ])
    ]));
  }
}), oo = /* @__PURE__ */ le(Xb, [["__scopeId", "data-v-8bc3db0a"]]), Qb = /* @__PURE__ */ ne({
  __name: "WorkspaceSettingsModal",
  props: {
    workspacePath: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = y(null);
    async function i() {
      var p;
      await ((p = n.value) == null ? void 0 : p.saveSettings());
    }
    function f() {
      console.log("[ComfyGit] Settings saved from modal");
    }
    return (p, u) => (s(), T(et, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: u[1] || (u[1] = (m) => p.$emit("close"))
    }, {
      body: l(() => [
        w(Ys, {
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
}), Zb = /* @__PURE__ */ le(Qb, [["__scopeId", "data-v-fac00ae7"]]), e_ = { class: "header-actions" }, t_ = {
  key: 0,
  class: "wizard-step"
}, s_ = { class: "form-field" }, o_ = ["placeholder"], n_ = {
  key: 0,
  class: "form-error"
}, a_ = { class: "form-field form-field--checkbox" }, l_ = { class: "form-checkbox" }, i_ = {
  key: 0,
  class: "form-field"
}, r_ = ["placeholder"], d_ = {
  key: 0,
  class: "form-info"
}, c_ = {
  key: 1,
  class: "form-suggestion"
}, u_ = {
  key: 2,
  class: "form-error"
}, m_ = {
  key: 3,
  class: "form-info"
}, v_ = {
  key: 1,
  class: "wizard-step"
}, f_ = {
  key: 0,
  class: "progress-check-loading"
}, p_ = {
  key: 0,
  class: "cli-warning"
}, g_ = { class: "cli-warning-header" }, h_ = {
  key: 1,
  class: "env-landing"
}, y_ = { class: "env-list" }, w_ = ["value"], k_ = { class: "env-name" }, b_ = {
  key: 2,
  class: "env-create"
}, __ = { class: "form-field" }, $_ = { class: "form-field" }, C_ = ["value"], x_ = { class: "form-field" }, S_ = ["disabled"], I_ = ["value"], E_ = { class: "form-field" }, M_ = ["value"], P_ = { class: "form-field form-field--checkbox" }, T_ = { class: "form-checkbox" }, R_ = {
  key: 0,
  class: "form-error"
}, L_ = {
  key: 1,
  class: "env-creating"
}, z_ = { class: "creating-intro" }, D_ = {
  key: 3,
  class: "env-import"
}, U_ = { class: "wizard-footer" }, N_ = { class: "wizard-footer-actions" }, Rt = 10, O_ = 600 * 1e3, Ns = 1800 * 1e3, B_ = /* @__PURE__ */ ne({
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
      getComfyUIReleases: h
    } = We(), k = y(n.initialStep || 1), _ = y(null), b = y("landing"), R = y(!1), E = y(!1), $ = y(!1), C = y(!1), N = y(null), x = y(n.initialStep === 2), M = y(n.defaultPath), q = y(!!n.detectedModelsDir), A = y(n.detectedModelsDir || ""), W = y(null), S = y(null), L = y(null), O = y(null), re = y("my-new-env"), Z = y(Xs), X = y("latest"), ce = y(Qs), J = y(!0), D = y(null), z = y(null), I = y([{ tag_name: "latest", name: "Latest", published_at: "" }]), ue = y(!1), ee = y(!1), he = y(!1), Ce = y({ progress: 0, message: "" }), Te = y({ progress: 0, message: "" }), Ne = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], me = y(0), ye = y(null), xe = y(0), Q = y(null), ie = U(() => {
      var P, F;
      const fe = (P = M.value) == null ? void 0 : P.trim(), K = !W.value, Y = !q.value || !S.value && ((F = A.value) == null ? void 0 : F.trim());
      return fe && K && Y;
    }), ke = U(() => {
      var fe;
      return (fe = re.value) == null ? void 0 : fe.trim();
    }), ze = U(() => !!(k.value === 2 || z.value || n.setupState === "empty_workspace" || n.setupState === "unmanaged")), Qe = U(() => z.value || n.workspacePath || null);
    async function st() {
      var fe;
      if (W.value = null, !!((fe = M.value) != null && fe.trim()))
        try {
          const K = await u({ path: M.value, type: "workspace" });
          K.valid || (W.value = K.error || "Invalid path");
        } catch (K) {
          W.value = K instanceof Error ? K.message : "Validation failed";
        }
    }
    async function Se() {
      var fe;
      if (S.value = null, L.value = null, O.value = null, !!((fe = A.value) != null && fe.trim()))
        try {
          const K = await u({ path: A.value, type: "models" });
          if (K.valid)
            O.value = K.model_count ?? null;
          else if (S.value = K.error || "Invalid path", K.suggestion) {
            L.value = K.suggestion, A.value = K.suggestion, S.value = null;
            const Y = await u({ path: K.suggestion, type: "models" });
            Y.valid && (O.value = Y.model_count ?? null);
          }
        } catch (K) {
          S.value = K instanceof Error ? K.message : "Validation failed";
        }
    }
    async function Ze() {
      var fe, K, Y, P, F;
      if (W.value = null, S.value = null, await st(), (fe = W.value) != null && fe.includes("already exists")) {
        W.value = null, z.value = ((K = M.value) == null ? void 0 : K.trim()) || n.defaultPath, k.value = 2, je();
        return;
      }
      if (!W.value && !(q.value && ((Y = A.value) != null && Y.trim()) && (await Se(), S.value))) {
        ee.value = !0;
        try {
          await f({
            workspace_path: ((P = M.value) == null ? void 0 : P.trim()) || n.defaultPath,
            models_directory: q.value && ((F = A.value) == null ? void 0 : F.trim()) || null
          }), me.value = 0, ye.value = Date.now();
          const se = setInterval(async () => {
            var be;
            if (ye.value && Date.now() - ye.value > O_) {
              clearInterval(se), ee.value = !1, W.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const Ge = await p();
              if (me.value = 0, Ge.state === "idle" && ee.value) {
                clearInterval(se), ee.value = !1, W.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              Ce.value = { progress: Ge.progress, message: Ge.message }, Ge.state === "complete" ? (clearInterval(se), ee.value = !1, z.value = ((be = M.value) == null ? void 0 : be.trim()) || n.defaultPath, k.value = 2, je()) : Ge.state === "error" && (clearInterval(se), ee.value = !1, W.value = Ge.error || "Workspace creation failed");
            } catch (Ge) {
              me.value++, console.warn(`Polling failure ${me.value}/${Rt}:`, Ge), me.value >= Rt && (clearInterval(se), ee.value = !1, W.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (se) {
          ee.value = !1, W.value = se instanceof Error ? se.message : "Failed to create workspace";
        }
      }
    }
    async function qe() {
      he.value = !0, D.value = null;
      try {
        const fe = {
          name: re.value.trim() || "my-new-env",
          python_version: Z.value,
          comfyui_version: X.value,
          torch_backend: ce.value,
          switch_after: J.value,
          workspace_path: z.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await m(fe)).status === "started") {
          xe.value = 0, Q.value = Date.now();
          const Y = setInterval(async () => {
            if (Q.value && Date.now() - Q.value > Ns) {
              clearInterval(Y), he.value = !1, D.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const P = await d();
              if (xe.value = 0, P.state === "idle" && he.value) {
                clearInterval(Y), he.value = !1, D.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (Te.value = {
                progress: P.progress ?? 0,
                message: P.message,
                phase: P.phase
              }, P.state === "complete") {
                clearInterval(Y), he.value = !1;
                const F = P.environment_name || fe.name;
                J.value ? i("complete", F, z.value) : (b.value = "landing", i("environment-created-no-switch", F));
              } else P.state === "error" && (clearInterval(Y), he.value = !1, D.value = P.error || "Environment creation failed");
            } catch (P) {
              xe.value++, console.warn(`Polling failure ${xe.value}/${Rt}:`, P), xe.value >= Rt && (clearInterval(Y), he.value = !1, D.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (fe) {
        he.value = !1, D.value = fe instanceof Error ? fe.message : "Unknown error";
      }
    }
    async function je() {
      ue.value = !0;
      try {
        I.value = await h();
      } catch (fe) {
        console.error("Failed to load ComfyUI releases:", fe);
      } finally {
        ue.value = !1;
      }
    }
    function lt() {
      _.value && i("switch-environment", _.value, z.value);
    }
    function te() {
      b.value === "create" || b.value === "import" ? b.value = "landing" : k.value === 2 && n.setupState === "no_workspace" && (k.value = 1);
    }
    function G(fe, K) {
      E.value = !1, K ? i("complete", fe, z.value) : (i("environment-created-no-switch", fe), b.value = "landing");
    }
    function de() {
    }
    Ae(async () => {
      if (n.detectedModelsDir && (A.value = n.detectedModelsDir), n.workspacePath && (z.value = n.workspacePath), k.value === 2) {
        je();
        const fe = setTimeout(() => {
          x.value = !1;
        }, 3e3);
        await Fe(), clearTimeout(fe), x.value = !1;
      }
    });
    async function Fe() {
      try {
        const fe = await d();
        if (console.log("[ComfyGit] Create progress check:", fe.state, fe), fe.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", fe.environment_name), b.value = "create", he.value = !0, re.value = fe.environment_name || "my-new-env", Te.value = {
            progress: fe.progress ?? 0,
            message: fe.message,
            phase: fe.phase
          }, Re();
          return;
        }
      } catch (fe) {
        console.log("[ComfyGit] Create progress check failed:", fe);
      }
      try {
        const fe = await v();
        console.log("[ComfyGit] Import progress check:", fe.state, fe), fe.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", fe.environment_name), N.value = {
          message: fe.message || "Importing...",
          phase: fe.phase || "",
          progress: fe.progress ?? 0,
          environmentName: fe.environment_name || ""
        }, C.value = !0, b.value = "import", E.value = !0);
      } catch (fe) {
        console.log("[ComfyGit] Import progress check failed:", fe);
      }
    }
    async function Re() {
      xe.value = 0, Q.value = Date.now();
      let fe = null;
      const K = async () => {
        if (Q.value && Date.now() - Q.value > Ns)
          return fe && clearInterval(fe), he.value = !1, D.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const P = await d();
          if (xe.value = 0, P.state === "idle" && he.value)
            return fe && clearInterval(fe), he.value = !1, D.value = "Environment creation was interrupted. Please try again.", !1;
          if (Te.value = {
            progress: P.progress ?? 0,
            message: P.message,
            phase: P.phase
          }, P.state === "complete") {
            fe && clearInterval(fe), he.value = !1;
            const F = P.environment_name || re.value;
            return i("complete", F, z.value), !1;
          } else if (P.state === "error")
            return fe && clearInterval(fe), he.value = !1, D.value = P.error || "Environment creation failed", !1;
          return !0;
        } catch (P) {
          return xe.value++, console.warn(`Polling failure ${xe.value}/${Rt}:`, P), xe.value >= Rt ? (fe && clearInterval(fe), he.value = !1, D.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await K() && (fe = setInterval(async () => {
        !await K() && fe && clearInterval(fe);
      }, 2e3));
    }
    return (fe, K) => (s(), o(V, null, [
      w(et, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: K[15] || (K[15] = (Y) => fe.$emit("close"))
      }, {
        header: l(() => [
          K[20] || (K[20] = e("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          e("div", e_, [
            w(so),
            K[19] || (K[19] = e("span", { class: "header-divider" }, null, -1)),
            ze.value ? (s(), o("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: K[0] || (K[0] = (Y) => R.value = !0)
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
              onClick: K[1] || (K[1] = (Y) => fe.$emit("close")),
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
            k.value === 1 ? (s(), o("div", t_, [
              K[24] || (K[24] = e("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              e("div", s_, [
                K[21] || (K[21] = e("label", { class: "form-label" }, "Workspace Path", -1)),
                Le(e("input", {
                  "onUpdate:modelValue": K[2] || (K[2] = (P) => M.value = P),
                  type: "text",
                  class: "form-input",
                  placeholder: t.defaultPath
                }, null, 8, o_), [
                  [Et, M.value]
                ]),
                W.value ? (s(), o("p", n_, a(W.value), 1)) : r("", !0)
              ]),
              e("div", a_, [
                e("label", l_, [
                  Le(e("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": K[3] || (K[3] = (P) => q.value = P)
                  }, null, 512), [
                    [Zt, q.value]
                  ]),
                  K[22] || (K[22] = e("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              q.value ? (s(), o("div", i_, [
                K[23] || (K[23] = e("label", { class: "form-label" }, "Models Directory", -1)),
                Le(e("input", {
                  "onUpdate:modelValue": K[4] || (K[4] = (P) => A.value = P),
                  type: "text",
                  class: "form-input",
                  placeholder: t.detectedModelsDir || "/path/to/models"
                }, null, 8, r_), [
                  [Et, A.value]
                ]),
                t.detectedModelsDir && !A.value ? (s(), o("p", d_, " Detected: " + a(t.detectedModelsDir), 1)) : r("", !0),
                L.value ? (s(), o("p", c_, " Did you mean: " + a(L.value), 1)) : r("", !0),
                S.value ? (s(), o("p", u_, a(S.value), 1)) : r("", !0),
                O.value !== null && !S.value ? (s(), o("p", m_, " Found " + a(O.value) + " model files ", 1)) : r("", !0)
              ])) : r("", !0),
              ee.value ? (s(), T(ss, {
                key: 1,
                progress: Ce.value.progress,
                message: Ce.value.message
              }, null, 8, ["progress", "message"])) : r("", !0)
            ])) : r("", !0),
            k.value === 2 ? (s(), o("div", v_, [
              x.value ? (s(), o("div", f_, [...K[25] || (K[25] = [
                e("div", { class: "loading-spinner" }, null, -1),
                e("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (s(), o(V, { key: 1 }, [
                !n.cliInstalled && !$.value ? (s(), o("div", p_, [
                  e("div", g_, [
                    K[27] || (K[27] = e("span", { class: "cli-warning-icon" }, "!", -1)),
                    K[28] || (K[28] = e("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    e("button", {
                      class: "cli-warning-close",
                      onClick: K[5] || (K[5] = (P) => $.value = !0),
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
                b.value === "landing" ? (s(), o("div", h_, [
                  K[34] || (K[34] = e("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  e("button", {
                    class: "landing-option",
                    onClick: K[6] || (K[6] = (P) => b.value = "create")
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
                    onClick: K[7] || (K[7] = (P) => {
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
                  (Y = n.existingEnvironments) != null && Y.length ? (s(), o(V, { key: 0 }, [
                    K[33] || (K[33] = e("div", { class: "landing-divider" }, [
                      e("span", null, "or switch to existing")
                    ], -1)),
                    e("div", y_, [
                      (s(!0), o(V, null, ae(n.existingEnvironments, (P) => (s(), o("label", {
                        key: P,
                        class: pe(["env-option", { selected: _.value === P }])
                      }, [
                        Le(e("input", {
                          type: "radio",
                          name: "env-select",
                          value: P,
                          "onUpdate:modelValue": K[8] || (K[8] = (F) => _.value = F)
                        }, null, 8, w_), [
                          [St, _.value]
                        ]),
                        e("span", k_, a(P), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : r("", !0)
                ])) : b.value === "create" ? (s(), o("div", b_, [
                  he.value ? (s(), o("div", L_, [
                    e("p", z_, [
                      K[41] || (K[41] = g(" Creating environment ", -1)),
                      e("strong", null, a(re.value), 1),
                      K[42] || (K[42] = g("... ", -1))
                    ]),
                    w(ss, {
                      progress: Te.value.progress,
                      message: Te.value.message,
                      "current-phase": Te.value.phase,
                      "show-steps": !0,
                      steps: Ne
                    }, null, 8, ["progress", "message", "current-phase"]),
                    K[43] || (K[43] = e("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (s(), o(V, { key: 0 }, [
                    K[40] || (K[40] = e("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    e("div", __, [
                      K[35] || (K[35] = e("label", { class: "form-label" }, "Environment Name", -1)),
                      Le(e("input", {
                        "onUpdate:modelValue": K[9] || (K[9] = (P) => re.value = P),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [Et, re.value]
                      ])
                    ]),
                    e("div", $_, [
                      K[36] || (K[36] = e("label", { class: "form-label" }, "Python Version", -1)),
                      Le(e("select", {
                        "onUpdate:modelValue": K[10] || (K[10] = (P) => Z.value = P),
                        class: "form-select"
                      }, [
                        (s(!0), o(V, null, ae(Ie(Js), (P) => (s(), o("option", {
                          key: P,
                          value: P
                        }, a(P), 9, C_))), 128))
                      ], 512), [
                        [bt, Z.value]
                      ])
                    ]),
                    e("div", x_, [
                      K[37] || (K[37] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      Le(e("select", {
                        "onUpdate:modelValue": K[11] || (K[11] = (P) => X.value = P),
                        class: "form-select",
                        disabled: ue.value
                      }, [
                        (s(!0), o(V, null, ae(I.value, (P) => (s(), o("option", {
                          key: P.tag_name,
                          value: P.tag_name
                        }, a(P.name), 9, I_))), 128))
                      ], 8, S_), [
                        [bt, X.value]
                      ])
                    ]),
                    e("div", E_, [
                      K[38] || (K[38] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      Le(e("select", {
                        "onUpdate:modelValue": K[12] || (K[12] = (P) => ce.value = P),
                        class: "form-select"
                      }, [
                        (s(!0), o(V, null, ae(Ie(Cs), (P) => (s(), o("option", {
                          key: P,
                          value: P
                        }, a(P) + a(P === "auto" ? " (detect GPU)" : ""), 9, M_))), 128))
                      ], 512), [
                        [bt, ce.value]
                      ])
                    ]),
                    e("div", P_, [
                      e("label", T_, [
                        Le(e("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": K[13] || (K[13] = (P) => J.value = P)
                        }, null, 512), [
                          [Zt, J.value]
                        ]),
                        K[39] || (K[39] = e("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    D.value ? (s(), o("div", R_, a(D.value), 1)) : r("", !0)
                  ], 64))
                ])) : b.value === "import" ? (s(), o("div", D_, [
                  w(eo, {
                    "workspace-path": z.value,
                    "resume-import": C.value,
                    "initial-progress": N.value ?? void 0,
                    onImportComplete: G,
                    onImportStarted: K[14] || (K[14] = (P) => E.value = !0),
                    onSourceCleared: de
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : r("", !0)
              ], 64))
            ])) : r("", !0)
          ];
        }),
        footer: l(() => [
          e("div", U_, [
            w(oo),
            e("div", N_, [
              k.value === 1 ? (s(), T(ge, {
                key: 0,
                variant: "primary",
                disabled: !ie.value || ee.value,
                onClick: Ze
              }, {
                default: l(() => [
                  g(a(ee.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : k.value === 2 ? (s(), o(V, { key: 1 }, [
                !he.value && !E.value && (b.value !== "landing" || n.setupState === "no_workspace" && !z.value) ? (s(), T(ge, {
                  key: 0,
                  variant: "secondary",
                  onClick: te
                }, {
                  default: l(() => [...K[44] || (K[44] = [
                    g(" Back ", -1)
                  ])]),
                  _: 1
                })) : r("", !0),
                b.value === "create" ? (s(), T(ge, {
                  key: 1,
                  variant: "primary",
                  disabled: !ke.value || he.value,
                  onClick: qe
                }, {
                  default: l(() => [
                    g(a(he.value ? "Creating..." : J.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : r("", !0),
                b.value === "landing" && _.value ? (s(), T(ge, {
                  key: 2,
                  variant: "primary",
                  onClick: lt
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
      R.value ? (s(), T(Zb, {
        key: 0,
        "workspace-path": Qe.value,
        onClose: K[16] || (K[16] = (Y) => R.value = !1)
      }, null, 8, ["workspace-path"])) : r("", !0)
    ], 64));
  }
}), A_ = /* @__PURE__ */ le(B_, [["__scopeId", "data-v-9a9aadc0"]]), F_ = { class: "comfygit-panel" }, V_ = { class: "panel-header" }, W_ = { class: "header-left" }, G_ = {
  key: 0,
  class: "header-info"
}, j_ = { class: "header-actions" }, H_ = { class: "env-switcher" }, K_ = {
  key: 0,
  class: "header-info"
}, q_ = { class: "branch-name" }, Y_ = { class: "panel-main" }, J_ = { class: "sidebar" }, X_ = { class: "sidebar-content" }, Q_ = { class: "sidebar-section" }, Z_ = { class: "sidebar-section" }, e2 = { class: "sidebar-section" }, t2 = { class: "sidebar-footer" }, s2 = { class: "content-area" }, o2 = {
  key: 0,
  class: "error-message"
}, n2 = {
  key: 1,
  class: "loading"
}, a2 = { class: "dialog-content env-selector-dialog" }, l2 = { class: "dialog-header" }, i2 = { class: "dialog-body" }, r2 = { class: "env-list" }, d2 = { class: "env-info" }, c2 = { class: "env-name-row" }, u2 = { class: "env-indicator" }, m2 = { class: "env-name" }, v2 = {
  key: 0,
  class: "env-branch"
}, f2 = {
  key: 1,
  class: "current-label"
}, p2 = { class: "env-stats" }, g2 = ["onClick"], h2 = { class: "toast-container" }, y2 = { class: "toast-message" }, w2 = /* @__PURE__ */ ne({
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
      deleteBranch: h,
      getEnvironments: k,
      switchEnvironment: _,
      getSwitchProgress: b,
      deleteEnvironment: R,
      syncEnvironmentManually: E,
      repairWorkflowModels: $,
      getSetupStatus: C
    } = We(), N = Ws(), x = y(null), M = y([]), q = y([]), A = y([]), W = U(() => A.value.find((j) => j.is_current)), S = y(null), L = y(!1), O = y(1), re = U(() => {
      var j;
      return ((j = S.value) == null ? void 0 : j.state) || "managed";
    }), Z = y(!1), X = y(null), ce = y(null), J = y(!1), D = y(null), z = y(null), I = y(null), ue = y(!1), ee = y(!1), he = y(""), Ce = y(null), Te = y({ state: "idle", progress: 0, message: "" });
    let Ne = null, me = null;
    const ye = {
      "debug-env": { view: "debug-env", section: "this-env" },
      "debug-workspace": { view: "debug-workspace", section: "all-envs" },
      status: { view: "status", section: "this-env" }
    }, xe = n.initialView ? ye[n.initialView] : null, Q = y((xe == null ? void 0 : xe.view) ?? "status"), ie = y((xe == null ? void 0 : xe.section) ?? "this-env");
    function ke(j, B) {
      Q.value = j, ie.value = B;
    }
    function ze(j) {
      const we = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[j];
      we && ke(we.view, we.section);
    }
    function Qe() {
      ke("branches", "this-env");
    }
    function st() {
      i("close"), setTimeout(() => {
        var B;
        const j = document.querySelectorAll("button.comfyui-button");
        for (const we of j)
          if (((B = we.textContent) == null ? void 0 : B.trim()) === "Manager") {
            we.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const Se = y(null), Ze = y(!1), qe = y(!1), je = y([]);
    let lt = 0;
    function te(j, B = "info", we = 3e3) {
      const Me = ++lt;
      return je.value.push({ id: Me, message: j, type: B }), we > 0 && setTimeout(() => {
        je.value = je.value.filter((Ve) => Ve.id !== Me);
      }, we), Me;
    }
    function G(j) {
      je.value = je.value.filter((B) => B.id !== j);
    }
    function de(j, B) {
      te(j, B);
    }
    const Fe = U(() => {
      if (!x.value) return "neutral";
      const j = x.value.workflows, B = j.new.length > 0 || j.modified.length > 0 || j.deleted.length > 0 || x.value.has_changes;
      return x.value.comparison.is_synced ? B ? "warning" : "success" : "error";
    });
    U(() => x.value ? Fe.value === "success" ? "All synced" : Fe.value === "warning" ? "Uncommitted changes" : Fe.value === "error" ? "Not synced" : "" : "");
    async function Re() {
      Z.value = !0, X.value = null;
      try {
        const [j, B, we, Me] = await Promise.all([
          f(!0),
          p(),
          u(),
          k()
        ]);
        x.value = j, M.value = B.commits, q.value = we.branches, A.value = Me, i("statusUpdate", j), D.value && await D.value.loadWorkflows(!0);
      } catch (j) {
        X.value = j instanceof Error ? j.message : "Failed to load status", x.value = null, M.value = [], q.value = [];
      } finally {
        Z.value = !1;
      }
    }
    function fe(j) {
      ce.value = j;
    }
    async function K(j) {
      var we;
      ce.value = null;
      const B = x.value && (x.value.workflows.new.length > 0 || x.value.workflows.modified.length > 0 || x.value.workflows.deleted.length > 0 || x.value.has_changes);
      Se.value = {
        title: B ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: B ? "You have uncommitted changes that will be lost." : `Checkout commit ${j.short_hash || ((we = j.hash) == null ? void 0 : we.slice(0, 7))}?`,
        details: B ? Ot() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: B ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: B,
        onConfirm: async () => {
          var Ke;
          Se.value = null, be();
          const Me = te(`Checking out ${j.short_hash || ((Ke = j.hash) == null ? void 0 : Ke.slice(0, 7))}...`, "info", 0), Ve = await m(j.hash, B);
          G(Me), Ve.status === "success" ? te("Restarting ComfyUI...", "success") : te(Ve.message || "Checkout failed", "error");
        }
      };
    }
    async function Y(j) {
      const B = x.value && (x.value.workflows.new.length > 0 || x.value.workflows.modified.length > 0 || x.value.workflows.deleted.length > 0 || x.value.has_changes);
      Se.value = {
        title: B ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: B ? "You have uncommitted changes." : `Switch to branch "${j}"?`,
        details: B ? Ot() : void 0,
        warning: B ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: B ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          Se.value = null, be();
          const we = te(`Switching to ${j}...`, "info", 0), Me = await v(j, B);
          G(we), Me.status === "success" ? te("Restarting ComfyUI...", "success") : te(Me.message || "Branch switch failed", "error");
        }
      };
    }
    async function P(j) {
      const B = te(`Creating branch ${j}...`, "info", 0), we = await d(j);
      G(B), we.status === "success" ? (te(`Branch "${j}" created`, "success"), await Re()) : te(we.message || "Failed to create branch", "error");
    }
    async function F(j, B = !1) {
      const we = async (Me) => {
        var Ke;
        const Ve = te(`Deleting branch ${j}...`, "info", 0);
        try {
          const kt = await h(j, Me);
          G(Ve), kt.status === "success" ? (te(`Branch "${j}" deleted`, "success"), await Re()) : (Ke = kt.message) != null && Ke.includes("not fully merged") ? Se.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${j}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              Se.value = null, await we(!0);
            }
          } : te(kt.message || "Failed to delete branch", "error");
        } catch (kt) {
          G(Ve);
          const Bt = kt instanceof Error ? kt.message : "Failed to delete branch";
          Bt.includes("not fully merged") ? Se.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${j}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              Se.value = null, await we(!0);
            }
          } : te(Bt, "error");
        }
      };
      Se.value = {
        title: "Delete Branch",
        message: `Delete branch "${j}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          Se.value = null, await we(B);
        }
      };
    }
    async function se(j) {
      ce.value = null;
      const B = prompt("Enter branch name:");
      if (B) {
        const we = te(`Creating branch ${B}...`, "info", 0), Me = await d(B, j.hash);
        G(we), Me.status === "success" ? (te(`Branch "${B}" created from ${j.short_hash}`, "success"), await Re()) : te(Me.message || "Failed to create branch", "error");
      }
    }
    function be() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function Ge() {
      Se.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var j;
          Se.value = null, be(), te("Restarting environment...", "info");
          try {
            (j = window.app) != null && j.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function ht() {
      Se.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var j;
          Se.value = null, te("Stopping environment...", "info");
          try {
            (j = window.app) != null && j.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function it(j, B) {
      J.value = !1, he.value = j, Ce.value = B || null, ue.value = !0;
    }
    async function Mt() {
      ue.value = !1, ee.value = !0, be(), Te.value = {
        progress: 10,
        state: yt(10),
        message: Pt(10)
      };
      try {
        await _(he.value, Ce.value || void 0), ns(), as();
      } catch (j) {
        wt(), ee.value = !1, te(`Failed to initiate switch: ${j instanceof Error ? j.message : "Unknown error"}`, "error"), Te.value = { state: "idle", progress: 0, message: "" }, Ce.value = null;
      }
    }
    function yt(j) {
      return j >= 100 ? "complete" : j >= 80 ? "validating" : j >= 60 ? "starting" : j >= 30 ? "syncing" : "preparing";
    }
    function Pt(j) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[yt(j)] || "";
    }
    function ns() {
      if (me) return;
      let j = 10;
      const B = 60, we = 5e3, Me = 100, Ve = (B - j) / (we / Me);
      me = window.setInterval(() => {
        if (j += Ve, j >= B && (j = B, wt()), Te.value.progress < B) {
          const Ke = Math.floor(j);
          Te.value = {
            progress: Ke,
            state: yt(Ke),
            message: Pt(Ke)
          };
        }
      }, Me);
    }
    function wt() {
      me && (clearInterval(me), me = null);
    }
    function as() {
      Ne || (Ne = window.setInterval(async () => {
        try {
          let j = await N.getStatus();
          if ((!j || j.state === "idle") && (j = await b()), !j)
            return;
          const B = j.progress || 0;
          B >= 60 && wt();
          const we = Math.max(B, Te.value.progress), Me = j.state && j.state !== "idle" && j.state !== "unknown", Ve = Me ? j.state : yt(we), Ke = Me && j.message || Pt(we);
          Te.value = {
            state: Ve,
            progress: we,
            message: Ke
          }, j.state === "complete" ? (wt(), Nt(), ee.value = !1, te(`✓ Switched to ${he.value}`, "success"), await Re(), he.value = "") : j.state === "rolled_back" ? (wt(), Nt(), ee.value = !1, te("Switch failed, restored previous environment", "warning"), he.value = "") : j.state === "critical_failure" && (wt(), Nt(), ee.value = !1, te(`Critical error during switch: ${j.message}`, "error"), he.value = "");
        } catch (j) {
          console.error("Failed to poll switch progress:", j);
        }
      }, 1e3));
    }
    function Nt() {
      wt(), Ne && (clearInterval(Ne), Ne = null);
    }
    function ls() {
      var j;
      ue.value = !1, he.value = "", (j = S.value) != null && j.state && S.value.state !== "managed" && (O.value = S.value.state === "no_workspace" ? 1 : 2, L.value = !0);
    }
    async function is(j) {
      Ze.value = !1, await Re(), te(j.message, j.success ? "success" : "error");
    }
    async function rs() {
      qe.value = !1;
      const j = te("Syncing environment...", "info", 0);
      try {
        const B = await E("skip", !0);
        if (G(j), B.status === "success") {
          const we = [];
          B.nodes_installed.length && we.push(`${B.nodes_installed.length} installed`), B.nodes_removed.length && we.push(`${B.nodes_removed.length} removed`);
          const Me = we.length ? `: ${we.join(", ")}` : "";
          te(`✓ Environment synced${Me}`, "success"), await Re();
        } else {
          const we = B.errors.length ? B.errors.join("; ") : B.message;
          te(`Sync failed: ${we}`, "error");
        }
      } catch (B) {
        G(j), te(`Sync error: ${B instanceof Error ? B.message : "Unknown error"}`, "error");
      }
    }
    async function ds(j) {
      var B;
      try {
        const we = await $(j);
        we.failed.length === 0 ? te(`✓ Repaired ${we.success} workflow${we.success === 1 ? "" : "s"}`, "success") : te(`Repaired ${we.success}, failed: ${we.failed.length}`, "warning"), await Re();
      } catch (we) {
        te(`Repair failed: ${we instanceof Error ? we.message : "Unknown error"}`, "error");
      } finally {
        (B = I.value) == null || B.resetRepairingState();
      }
    }
    async function Jt() {
      var B, we;
      const j = te("Repairing environment...", "info", 0);
      try {
        const Me = await E("skip", !0);
        if (G(j), Me.status === "success") {
          const Ve = [];
          Me.nodes_installed.length && Ve.push(`${Me.nodes_installed.length} installed`), Me.nodes_removed.length && Ve.push(`${Me.nodes_removed.length} removed`);
          const Ke = Ve.length ? `: ${Ve.join(", ")}` : "";
          te(`✓ Environment repaired${Ke}`, "success"), (B = I.value) == null || B.closeDetailModal(), await Re();
        } else {
          const Ve = Me.errors.length ? Me.errors.join(", ") : Me.message || "Unknown error";
          te(`Repair failed: ${Ve}`, "error");
        }
      } catch (Me) {
        G(j), te(`Repair error: ${Me instanceof Error ? Me.message : "Unknown error"}`, "error");
      } finally {
        (we = I.value) == null || we.resetRepairingEnvironmentState();
      }
    }
    async function cs(j, B) {
      te(`Environment '${j}' created`, "success"), await Re(), z.value && await z.value.loadEnvironments(), B && await it(j);
    }
    async function us(j) {
      var B;
      if (((B = W.value) == null ? void 0 : B.name) === j) {
        te("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      Se.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${j}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          Se.value = null;
          try {
            const we = await R(j);
            we.status === "success" ? (te(`Environment "${j}" deleted`, "success"), await Re(), z.value && await z.value.loadEnvironments()) : te(we.message || "Failed to delete environment", "error");
          } catch (we) {
            te(`Error deleting environment: ${we instanceof Error ? we.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function H(j, B) {
      L.value = !1;
      try {
        S.value = await C();
      } catch {
      }
      await it(j, B);
    }
    function ve() {
      L.value = !1, i("close");
    }
    async function _e(j, B) {
      await it(j, B);
    }
    async function Oe(j) {
      await Re(), await it(j);
    }
    async function ot(j) {
      S.value = await C(), console.log(`Environment '${j}' created. Available for switching.`);
    }
    function Tt() {
      ke("environments", "all-envs"), setTimeout(() => {
        var j;
        (j = z.value) == null || j.openCreateModal();
      }, 100);
    }
    function Ot() {
      if (!x.value) return [];
      const j = [], B = x.value.workflows;
      return B.new.length && j.push(`${B.new.length} new workflow(s)`), B.modified.length && j.push(`${B.modified.length} modified workflow(s)`), B.deleted.length && j.push(`${B.deleted.length} deleted workflow(s)`), j;
    }
    return Ae(async () => {
      try {
        if (S.value = await C(), S.value.state === "no_workspace") {
          L.value = !0, O.value = 1;
          return;
        }
        if (S.value.state === "empty_workspace") {
          L.value = !0, O.value = 2;
          return;
        }
        if (S.value.state === "unmanaged") {
          L.value = !0, O.value = 2;
          return;
        }
      } catch (j) {
        console.warn("Setup status check failed, proceeding normally:", j);
      }
      await Re();
    }), (j, B) => {
      var we, Me, Ve, Ke, kt, Bt, Es, Ms, Ps, Ts, Rs, Ls;
      return s(), o("div", F_, [
        e("div", V_, [
          e("div", W_, [
            B[31] || (B[31] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            x.value ? (s(), o("div", G_)) : r("", !0)
          ]),
          e("div", j_, [
            w(so),
            B[34] || (B[34] = e("span", { class: "header-divider" }, null, -1)),
            e("button", {
              class: pe(["icon-btn", { spinning: Z.value }]),
              onClick: Re,
              title: "Refresh"
            }, [...B[32] || (B[32] = [
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
              onClick: B[0] || (B[0] = ($e) => i("close")),
              title: "Close"
            }, [...B[33] || (B[33] = [
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
        e("div", H_, [
          e("div", { class: "env-switcher-header" }, [
            B[35] || (B[35] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            e("div", { class: "env-control-buttons" }, [
              e("button", {
                class: "env-control-btn",
                title: "Restart environment",
                onClick: Ge
              }, " Restart "),
              e("button", {
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: ht
              }, " Stop ")
            ])
          ]),
          e("button", {
            class: "env-switcher-btn",
            onClick: B[1] || (B[1] = ($e) => ke("environments", "all-envs"))
          }, [
            x.value ? (s(), o("div", K_, [
              e("span", null, a(((we = W.value) == null ? void 0 : we.name) || ((Me = x.value) == null ? void 0 : Me.environment) || "Loading..."), 1),
              e("span", q_, "(" + a(x.value.branch || "detached") + ")", 1)
            ])) : r("", !0),
            B[36] || (B[36] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", Y_, [
          e("div", J_, [
            e("div", X_, [
              e("div", Q_, [
                B[37] || (B[37] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                e("button", {
                  class: pe(["sidebar-item", { active: Q.value === "status" && ie.value === "this-env" }]),
                  onClick: B[2] || (B[2] = ($e) => ke("status", "this-env"))
                }, " STATUS ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: Q.value === "workflows" }]),
                  onClick: B[3] || (B[3] = ($e) => ke("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: Q.value === "models-env" }]),
                  onClick: B[4] || (B[4] = ($e) => ke("models-env", "this-env"))
                }, " MODELS ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: Q.value === "branches" }]),
                  onClick: B[5] || (B[5] = ($e) => ke("branches", "this-env"))
                }, " BRANCHES ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: Q.value === "history" }]),
                  onClick: B[6] || (B[6] = ($e) => ke("history", "this-env"))
                }, " HISTORY ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: Q.value === "nodes" }]),
                  onClick: B[7] || (B[7] = ($e) => ke("nodes", "this-env"))
                }, " NODES ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: Q.value === "debug-env" }]),
                  onClick: B[8] || (B[8] = ($e) => ke("debug-env", "this-env"))
                }, " DEBUG ", 2)
              ]),
              B[40] || (B[40] = e("div", { class: "sidebar-divider" }, null, -1)),
              e("div", Z_, [
                B[38] || (B[38] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
                e("button", {
                  class: pe(["sidebar-item", { active: Q.value === "environments" }]),
                  onClick: B[9] || (B[9] = ($e) => ke("environments", "all-envs"))
                }, " ENVIRONMENTS ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: Q.value === "model-index" }]),
                  onClick: B[10] || (B[10] = ($e) => ke("model-index", "all-envs"))
                }, " MODEL INDEX ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: Q.value === "settings" }]),
                  onClick: B[11] || (B[11] = ($e) => ke("settings", "all-envs"))
                }, " SETTINGS ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: Q.value === "debug-workspace" }]),
                  onClick: B[12] || (B[12] = ($e) => ke("debug-workspace", "all-envs"))
                }, " DEBUG ", 2)
              ]),
              B[41] || (B[41] = e("div", { class: "sidebar-divider" }, null, -1)),
              e("div", e2, [
                B[39] || (B[39] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
                e("button", {
                  class: pe(["sidebar-item", { active: Q.value === "deploy" }]),
                  onClick: B[13] || (B[13] = ($e) => ke("deploy", "sharing"))
                }, " DEPLOY ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: Q.value === "export" }]),
                  onClick: B[14] || (B[14] = ($e) => ke("export", "sharing"))
                }, " EXPORT ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: Q.value === "import" }]),
                  onClick: B[15] || (B[15] = ($e) => ke("import", "sharing"))
                }, " IMPORT ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: Q.value === "remotes" }]),
                  onClick: B[16] || (B[16] = ($e) => ke("remotes", "sharing"))
                }, " REMOTES ", 2)
              ])
            ]),
            e("div", t2, [
              w(oo)
            ])
          ]),
          e("div", s2, [
            X.value ? (s(), o("div", o2, a(X.value), 1)) : !x.value && Q.value === "status" ? (s(), o("div", n2, " Loading status... ")) : (s(), o(V, { key: 2 }, [
              Q.value === "status" ? (s(), T(ja, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: I,
                status: x.value,
                "setup-state": re.value,
                onSwitchBranch: Qe,
                onCommitChanges: B[17] || (B[17] = ($e) => Ze.value = !0),
                onSyncEnvironment: B[18] || (B[18] = ($e) => qe.value = !0),
                onViewWorkflows: B[19] || (B[19] = ($e) => ke("workflows", "this-env")),
                onViewHistory: B[20] || (B[20] = ($e) => ke("history", "this-env")),
                onViewDebug: B[21] || (B[21] = ($e) => ke("debug-env", "this-env")),
                onViewNodes: B[22] || (B[22] = ($e) => ke("nodes", "this-env")),
                onRepairMissingModels: ds,
                onRepairEnvironment: Jt,
                onStartSetup: B[23] || (B[23] = ($e) => L.value = !0),
                onViewEnvironments: B[24] || (B[24] = ($e) => ke("environments", "all-envs")),
                onCreateEnvironment: Tt
              }, null, 8, ["status", "setup-state"])) : Q.value === "workflows" ? (s(), T(vm, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: D,
                onRefresh: Re
              }, null, 512)) : Q.value === "models-env" ? (s(), T(Ym, {
                key: 2,
                onNavigate: ze
              })) : Q.value === "branches" ? (s(), T(ll, {
                key: 3,
                branches: q.value,
                current: ((Ve = x.value) == null ? void 0 : Ve.branch) || null,
                onSwitch: Y,
                onCreate: P,
                onDelete: F
              }, null, 8, ["branches", "current"])) : Q.value === "history" ? (s(), T(hl, {
                key: 4,
                commits: M.value,
                onSelect: fe,
                onCheckout: K
              }, null, 8, ["commits"])) : Q.value === "nodes" ? (s(), T(jv, {
                key: 5,
                "version-mismatches": ((kt = (Ke = x.value) == null ? void 0 : Ke.comparison) == null ? void 0 : kt.version_mismatches) || [],
                onOpenNodeManager: st,
                onRepairEnvironment: Jt,
                onToast: de
              }, null, 8, ["version-mismatches"])) : Q.value === "debug-env" ? (s(), T(Zg, { key: 6 })) : Q.value === "environments" ? (s(), T(s1, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: z,
                onSwitch: it,
                onCreated: cs,
                onDelete: us
              }, null, 512)) : Q.value === "model-index" ? (s(), T(pv, {
                key: 8,
                onRefresh: Re
              })) : Q.value === "settings" ? (s(), T(Yg, { key: 9 })) : Q.value === "debug-workspace" ? (s(), T(Xg, { key: 10 })) : Q.value === "deploy" ? (s(), T(ek, {
                key: 11,
                onToast: de
              })) : Q.value === "export" ? (s(), T(z1, { key: 12 })) : Q.value === "import" ? (s(), T(I0, {
                key: 13,
                onImportCompleteSwitch: Oe
              })) : Q.value === "remotes" ? (s(), T(Eg, {
                key: 14,
                onToast: de
              })) : r("", !0)
            ], 64))
          ])
        ]),
        ce.value ? (s(), T(yk, {
          key: 0,
          commit: ce.value,
          onClose: B[25] || (B[25] = ($e) => ce.value = null),
          onCheckout: K,
          onCreateBranch: se
        }, null, 8, ["commit"])) : r("", !0),
        Se.value ? (s(), T(Ks, {
          key: 1,
          title: Se.value.title,
          message: Se.value.message,
          details: Se.value.details,
          warning: Se.value.warning,
          confirmLabel: Se.value.confirmLabel,
          cancelLabel: Se.value.cancelLabel,
          secondaryLabel: Se.value.secondaryLabel,
          secondaryAction: Se.value.secondaryAction,
          destructive: Se.value.destructive,
          onConfirm: Se.value.onConfirm,
          onCancel: B[26] || (B[26] = ($e) => Se.value = null),
          onSecondary: Se.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : r("", !0),
        w(gb, {
          show: ue.value,
          "from-environment": ((Bt = W.value) == null ? void 0 : Bt.name) || "unknown",
          "to-environment": he.value,
          onConfirm: Mt,
          onClose: ls
        }, null, 8, ["show", "from-environment", "to-environment"]),
        Ze.value && x.value ? (s(), T(to, {
          key: 2,
          status: x.value,
          "as-modal": !0,
          onClose: B[27] || (B[27] = ($e) => Ze.value = !1),
          onCommitted: is
        }, null, 8, ["status"])) : r("", !0),
        qe.value && x.value ? (s(), T(Ub, {
          key: 3,
          show: qe.value,
          "mismatch-details": {
            missing_nodes: x.value.comparison.missing_nodes,
            extra_nodes: x.value.comparison.extra_nodes
          },
          onConfirm: rs,
          onClose: B[28] || (B[28] = ($e) => qe.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : r("", !0),
        w(Ib, {
          show: ee.value,
          state: Te.value.state,
          progress: Te.value.progress,
          message: Te.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        J.value ? (s(), o("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: B[30] || (B[30] = Ue(($e) => J.value = !1, ["self"]))
        }, [
          e("div", a2, [
            e("div", l2, [
              B[43] || (B[43] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: B[29] || (B[29] = ($e) => J.value = !1)
              }, [...B[42] || (B[42] = [
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
            e("div", i2, [
              B[44] || (B[44] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", r2, [
                (s(!0), o(V, null, ae(A.value, ($e) => (s(), o("div", {
                  key: $e.name,
                  class: pe(["env-item", { current: $e.is_current }])
                }, [
                  e("div", d2, [
                    e("div", c2, [
                      e("span", u2, a($e.is_current ? "●" : "○"), 1),
                      e("span", m2, a($e.name), 1),
                      $e.current_branch ? (s(), o("span", v2, "(" + a($e.current_branch) + ")", 1)) : r("", !0),
                      $e.is_current ? (s(), o("span", f2, "CURRENT")) : r("", !0)
                    ]),
                    e("div", p2, a($e.workflow_count) + " workflows • " + a($e.node_count) + " nodes ", 1)
                  ]),
                  $e.is_current ? r("", !0) : (s(), o("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (I$) => it($e.name)
                  }, " SWITCH ", 8, g2))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : r("", !0),
        L.value ? (s(), T(A_, {
          key: 5,
          "default-path": ((Es = S.value) == null ? void 0 : Es.default_path) || "~/comfygit",
          "detected-models-dir": ((Ms = S.value) == null ? void 0 : Ms.detected_models_dir) || null,
          "initial-step": O.value,
          "existing-environments": ((Ps = S.value) == null ? void 0 : Ps.environments) || [],
          "cli-installed": ((Ts = S.value) == null ? void 0 : Ts.cli_installed) ?? !0,
          "setup-state": ((Rs = S.value) == null ? void 0 : Rs.state) || "no_workspace",
          "workspace-path": ((Ls = S.value) == null ? void 0 : Ls.workspace_path) || null,
          onComplete: H,
          onClose: ve,
          onSwitchEnvironment: _e,
          onEnvironmentCreatedNoSwitch: ot
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : r("", !0),
        e("div", h2, [
          w(fo, { name: "toast" }, {
            default: l(() => [
              (s(!0), o(V, null, ae(je.value, ($e) => (s(), o("div", {
                key: $e.id,
                class: pe(["toast", $e.type])
              }, [
                e("span", y2, a($e.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), k2 = /* @__PURE__ */ le(w2, [["__scopeId", "data-v-70f0bf8a"]]), b2 = { class: "item-header" }, _2 = { class: "item-info" }, $2 = { class: "filename" }, C2 = { class: "metadata" }, x2 = { class: "size" }, S2 = {
  key: 0,
  class: "type"
}, I2 = { class: "item-actions" }, E2 = {
  key: 0,
  class: "progress-section"
}, M2 = { class: "progress-bar" }, P2 = { class: "progress-stats" }, T2 = { class: "downloaded" }, R2 = { class: "speed" }, L2 = {
  key: 0,
  class: "eta"
}, z2 = {
  key: 1,
  class: "status-msg paused"
}, D2 = {
  key: 2,
  class: "status-msg queued"
}, U2 = {
  key: 3,
  class: "status-msg completed"
}, N2 = {
  key: 4,
  class: "status-msg failed"
}, O2 = {
  key: 0,
  class: "retries"
}, B2 = /* @__PURE__ */ ne({
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
      class: pe(["download-item", `status-${t.item.status}`])
    }, [
      e("div", b2, [
        e("div", _2, [
          e("div", $2, a(t.item.filename), 1),
          e("div", C2, [
            e("span", x2, a(i(t.item.size)), 1),
            t.item.type ? (s(), o("span", S2, a(t.item.type), 1)) : r("", !0)
          ])
        ]),
        e("div", I2, [
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
      t.item.status === "downloading" ? (s(), o("div", E2, [
        e("div", M2, [
          e("div", {
            class: "progress-fill",
            style: _t({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", P2, [
          e("span", T2, a(i(t.item.downloaded)) + " / " + a(i(t.item.size)), 1),
          e("span", R2, a(f(t.item.speed)), 1),
          t.item.eta > 0 ? (s(), o("span", L2, a(p(t.item.eta)), 1)) : r("", !0)
        ])
      ])) : t.item.status === "paused" ? (s(), o("div", z2, " Paused - click Resume to download ")) : t.item.status === "queued" ? (s(), o("div", D2, " Waiting in queue... ")) : t.item.status === "completed" ? (s(), o("div", U2, " ✓ Downloaded ")) : t.item.status === "failed" ? (s(), o("div", N2, [
        g(" ✗ " + a(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (s(), o("span", O2, "(" + a(t.item.retries) + " retries)", 1)) : r("", !0)
      ])) : r("", !0)
    ], 2));
  }
}), Vt = /* @__PURE__ */ le(B2, [["__scopeId", "data-v-2110df65"]]), A2 = { class: "queue-title" }, F2 = { class: "count" }, V2 = { class: "queue-actions" }, W2 = { class: "action-label" }, G2 = {
  key: 0,
  class: "overall-progress"
}, j2 = { class: "progress-bar" }, H2 = {
  key: 0,
  class: "current-mini"
}, K2 = { class: "filename" }, q2 = { class: "speed" }, Y2 = {
  key: 1,
  class: "queue-content"
}, J2 = {
  key: 0,
  class: "section"
}, X2 = {
  key: 1,
  class: "section"
}, Q2 = { class: "section-header" }, Z2 = { class: "section-label paused" }, e$ = { class: "items-list" }, t$ = {
  key: 2,
  class: "section"
}, s$ = { class: "section-header" }, o$ = { class: "section-label" }, n$ = { class: "items-list" }, a$ = {
  key: 3,
  class: "section"
}, l$ = { class: "section-header" }, i$ = { class: "section-label" }, r$ = { class: "items-list" }, d$ = {
  key: 4,
  class: "section"
}, c$ = { class: "section-header" }, u$ = { class: "section-label failed" }, m$ = { class: "items-list" }, v$ = /* @__PURE__ */ ne({
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
      retryDownload: h,
      resumeDownload: k,
      resumeAllPaused: _,
      removeItem: b,
      clearCompleted: R
    } = qt(), E = y(!1);
    let $ = null;
    gt(
      () => ({
        active: d.value,
        failed: p.value.length,
        paused: u.value.length,
        completed: f.value.length
      }),
      (M, q) => {
        $ && (clearTimeout($), $ = null);
        const A = M.active === 0 && M.failed === 0 && M.paused === 0 && M.completed > 0, W = q && (q.active > 0 || q.paused > 0);
        A && W && ($ = setTimeout(() => {
          R(), $ = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const C = U(() => {
      var A;
      if (c.items.length === 0) return 0;
      const M = f.value.length, q = ((A = n.value) == null ? void 0 : A.progress) || 0;
      return Math.round((M + q / 100) / c.items.length * 100);
    });
    function N(M) {
      v(M);
    }
    function x(M) {
      return M === 0 ? "" : `${(M / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (M, q) => (s(), T(He, { to: "body" }, [
      Ie(m) ? (s(), o("div", {
        key: 0,
        class: pe(["model-download-queue", { minimized: !E.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: q[0] || (q[0] = (A) => E.value = !E.value)
        }, [
          e("div", A2, [
            q[4] || (q[4] = e("span", { class: "icon" }, "↓", -1)),
            q[5] || (q[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", F2, "(" + a(Ie(d)) + "/" + a(Ie(c).items.length) + ")", 1)
          ]),
          e("div", V2, [
            e("span", W2, a(E.value ? "minimize" : "expand"), 1)
          ])
        ]),
        E.value ? (s(), o("div", Y2, [
          Ie(n) ? (s(), o("div", J2, [
            q[6] || (q[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            w(Vt, {
              item: Ie(n),
              onCancel: q[1] || (q[1] = (A) => N(Ie(n).id))
            }, null, 8, ["item"])
          ])) : r("", !0),
          Ie(u).length > 0 ? (s(), o("div", X2, [
            e("div", Q2, [
              e("span", Z2, "Paused (" + a(Ie(u).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: q[2] || (q[2] = //@ts-ignore
                (...A) => Ie(_) && Ie(_)(...A))
              }, "Resume All")
            ]),
            e("div", e$, [
              (s(!0), o(V, null, ae(Ie(u), (A) => (s(), T(Vt, {
                key: A.id,
                item: A,
                onResume: (W) => Ie(k)(A.id),
                onRemove: (W) => Ie(b)(A.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : r("", !0),
          Ie(i).length > 0 ? (s(), o("div", t$, [
            e("div", s$, [
              e("span", o$, "Queued (" + a(Ie(i).length) + ")", 1)
            ]),
            e("div", n$, [
              (s(!0), o(V, null, ae(Ie(i), (A) => (s(), T(Vt, {
                key: A.id,
                item: A,
                onCancel: (W) => N(A.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : r("", !0),
          Ie(f).length > 0 ? (s(), o("div", a$, [
            e("div", l$, [
              e("span", i$, "Completed (" + a(Ie(f).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: q[3] || (q[3] = //@ts-ignore
                (...A) => Ie(R) && Ie(R)(...A))
              }, "Clear")
            ]),
            e("div", r$, [
              (s(!0), o(V, null, ae(Ie(f).slice(0, 3), (A) => (s(), T(Vt, {
                key: A.id,
                item: A,
                onRemove: (W) => Ie(b)(A.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : r("", !0),
          Ie(p).length > 0 ? (s(), o("div", d$, [
            e("div", c$, [
              e("span", u$, "Failed (" + a(Ie(p).length) + ")", 1)
            ]),
            e("div", m$, [
              (s(!0), o(V, null, ae(Ie(p), (A) => (s(), T(Vt, {
                key: A.id,
                item: A,
                onRetry: (W) => Ie(h)(A.id),
                onRemove: (W) => Ie(b)(A.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : r("", !0)
        ])) : (s(), o("div", G2, [
          e("div", j2, [
            e("div", {
              class: "progress-fill",
              style: _t({ width: `${C.value}%` })
            }, null, 4)
          ]),
          Ie(n) ? (s(), o("div", H2, [
            e("span", K2, a(Ie(n).filename), 1),
            e("span", q2, a(x(Ie(n).speed)), 1)
          ])) : r("", !0)
        ]))
      ], 2)) : r("", !0)
    ]));
  }
}), f$ = /* @__PURE__ */ le(v$, [["__scopeId", "data-v-60751cfa"]]), p$ = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', g$ = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', h$ = {
  comfy: p$,
  phosphor: g$
}, xs = "comfy", no = "comfygit-theme";
let It = null, ao = xs;
function y$() {
  try {
    const t = localStorage.getItem(no);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return xs;
}
function lo(t = xs) {
  It && It.remove(), It = document.createElement("style"), It.id = "comfygit-theme-styles", It.setAttribute("data-theme", t), It.textContent = h$[t], document.head.appendChild(It), document.body.setAttribute("data-comfygit-theme", t), ao = t;
  try {
    localStorage.setItem(no, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function w$() {
  return ao;
}
function k$(t) {
  lo(t);
}
function b$(t) {
  var p;
  const { ui_id: c, state: n } = t || {}, i = (n == null ? void 0 : n.history) || {};
  if (!c)
    return null;
  const f = i[c];
  return f && f.result === "error" && ((p = f.status) == null ? void 0 : p.status_str) === "error" ? (f.status.messages || [])[0] || "Unknown error" : null;
}
const Ss = document.createElement("link");
Ss.rel = "stylesheet";
Ss.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(Ss);
const _$ = y$();
lo(_$);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), k$(t);
  },
  getTheme: () => {
    const t = w$();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let dt = null, tt = null, Ht = null, Wt = null, Os = null;
const zt = y(null);
let Is = "managed", io = !1;
async function Qt() {
  var t;
  if (!((t = xt) != null && t.api)) return null;
  try {
    const c = await xt.api.fetchApi("/v2/comfygit/status");
    c.ok && (zt.value = await c.json());
  } catch {
  }
}
async function hs() {
  var t;
  if ((t = xt) != null && t.api)
    try {
      const c = await xt.api.fetchApi("/v2/setup/status");
      if (c.ok) {
        const n = await c.json();
        Is = n.state, io = n.has_comfyui_manager ?? !1;
      }
    } catch {
    }
}
function ys() {
  var c;
  if (Is === "managed" || !io) return;
  const t = document.querySelectorAll("button.comfyui-button");
  for (const n of t)
    if (((c = n.textContent) == null ? void 0 : c.trim()) === "Manager" && !n.querySelector("svg, i, img")) {
      n.style.display = "none", console.log("[ComfyGit] Hiding built-in Manager button (ComfyUI-Manager present)");
      return;
    }
}
function $$() {
  if (!zt.value) return !1;
  const t = zt.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || zt.value.has_changes;
}
function Bs(t) {
  dt && dt.remove(), dt = document.createElement("div"), dt.className = "comfygit-panel-overlay";
  const c = document.createElement("div");
  c.className = "comfygit-panel-container", dt.appendChild(c), dt.addEventListener("click", (f) => {
    f.target === dt && ps();
  });
  const n = (f) => {
    f.key === "Escape" && (ps(), document.removeEventListener("keydown", n));
  };
  document.addEventListener("keydown", n), bs({
    render: () => _s(k2, {
      initialView: t,
      onClose: ps,
      onStatusUpdate: async (f) => {
        zt.value = f, Kt(), await hs(), ws(), ys();
      }
    })
  }).mount(c), document.body.appendChild(dt);
}
function ps() {
  dt && (dt.remove(), dt = null);
}
function C$(t) {
  Gt(), tt = document.createElement("div"), tt.className = "comfygit-commit-popover-container";
  const c = t.getBoundingClientRect();
  tt.style.position = "fixed", tt.style.top = `${c.bottom + 8}px`, tt.style.right = `${window.innerWidth - c.right}px`, tt.style.zIndex = "10001";
  const n = (f) => {
    tt && !tt.contains(f.target) && f.target !== t && (Gt(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const i = (f) => {
    f.key === "Escape" && (Gt(), document.removeEventListener("keydown", i));
  };
  document.addEventListener("keydown", i), Ht = bs({
    render: () => _s(to, {
      status: zt.value,
      onClose: Gt,
      onCommitted: (f) => {
        Gt(), x$(f.success, f.message), Qt().then(Kt);
      }
    })
  }), Ht.mount(tt), document.body.appendChild(tt);
}
function Gt() {
  Ht && (Ht.unmount(), Ht = null), tt && (tt.remove(), tt = null);
}
function x$(t, c) {
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
function S$() {
  Wt || (Wt = document.createElement("div"), Wt.className = "comfygit-download-queue-root", Os = bs({
    render: () => _s(f$)
  }), Os.mount(Wt), document.body.appendChild(Wt), console.log("[ComfyGit] Model download queue mounted"));
}
let nt = null;
function Kt() {
  if (!nt) return;
  const t = nt.querySelector(".commit-indicator");
  t && (t.style.display = $$() ? "block" : "none");
}
function ws() {
  if (!nt) return;
  const t = Is !== "managed";
  nt.disabled = t, nt.title = t ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
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
xt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var f, p;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const c = document.createElement("button");
    c.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", c.textContent = "ComfyGit", c.title = "ComfyGit Control Panel", c.onclick = Bs, nt = document.createElement("button"), nt.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", nt.innerHTML = 'Commit <span class="commit-indicator"></span>', nt.title = "Quick Commit", nt.onclick = () => C$(nt), t.appendChild(c), t.appendChild(nt), (p = (f = xt.menu) == null ? void 0 : f.settingsGroup) != null && p.element && (xt.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), S$();
    const { loadPendingDownloads: n } = qt();
    n(), await Promise.all([Qt(), hs()]), Kt(), ws(), ys(), setTimeout(ys, 100), setInterval(async () => {
      await Promise.all([Qt(), hs()]), Kt(), ws();
    }, 3e4);
    const i = xt.api;
    if (i) {
      let u = function() {
        localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.OpenWorkflowsPaths"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((h) => {
          (h.startsWith("workflow:") || h.startsWith("Comfy.OpenWorkflowsPaths:") || h.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(h);
        }), window.location.reload();
      }, m = function() {
        const h = document.createElement("div");
        h.style.cssText = `
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
        k.textContent = "Workflows updated - refresh required", h.appendChild(k);
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
        `, _.onmouseover = () => _.style.background = "var(--comfy-input-bg)", _.onmouseout = () => _.style.background = "var(--comfy-menu-bg)", _.onclick = () => u(), h.appendChild(_);
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
        `, b.onmouseover = () => b.style.opacity = "1", b.onmouseout = () => b.style.opacity = "0.6", b.onclick = () => h.remove(), h.appendChild(b), document.body.appendChild(h), console.log("[ComfyGit] Refresh notification displayed");
      }, d = function(h) {
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
        const R = document.createElement("div");
        R.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 4px;";
        const E = document.createElement("div");
        E.textContent = "Node installation failed", E.style.cssText = "font-weight: 600; color: #e53935;", R.appendChild(E);
        const $ = document.createElement("div");
        $.textContent = "Dependency conflict detected", $.style.cssText = "font-size: 12px; opacity: 0.8;", R.appendChild($), _.appendChild(R);
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
          _.remove(), Bs("debug-env");
        }, _.appendChild(C);
        const N = document.createElement("button");
        N.textContent = "×", N.style.cssText = `
          background: transparent;
          border: none;
          color: #fff;
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, N.onmouseover = () => N.style.opacity = "1", N.onmouseout = () => N.style.opacity = "0.6", N.onclick = () => _.remove(), _.appendChild(N), document.body.appendChild(_), console.log("[ComfyGit] Manager error toast displayed:", h), setTimeout(() => {
          document.getElementById("comfygit-error-toast") && _.remove();
        }, 1e4);
      };
      i.addEventListener("comfygit:workflow-changed", async (h) => {
        const { change_type: k, workflow_name: _ } = h.detail;
        console.log(`[ComfyGit] Workflow ${k}: ${_}`), await Qt(), Kt();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let v = !1;
      i.addEventListener("status", async (h) => {
        const k = h.detail != null;
        k && !v && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), u()) : m()), v = k;
      }), console.log("[ComfyGit] Refresh notification system initialized"), i.addEventListener("cm-task-completed", (h) => {
        const k = b$(h.detail);
        k && d(k);
      }), console.log("[ComfyGit] Manager error notification system initialized");
    }
  }
});
