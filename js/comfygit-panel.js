import { app as Ut } from "../../scripts/app.js";
import { defineComponent as oe, createElementBlock as o, openBlock as s, createCommentVNode as r, createElementVNode as e, renderSlot as Re, createBlock as M, resolveDynamicComponent as ks, normalizeClass as pe, withCtx as l, toDisplayString as a, createVNode as w, createTextVNode as g, computed as B, Fragment as W, renderList as ne, normalizeStyle as Rt, ref as h, onMounted as Ve, watch as St, Teleport as Xe, withModifiers as Be, Transition as co, createSlots as Bt, withKeys as xt, reactive as us, onUnmounted as bs, readonly as uo, unref as Ie, withDirectives as Ue, vModelText as Ot, vModelRadio as Nt, vModelCheckbox as is, nextTick as mo, vModelSelect as Mt, vModelDynamic as vo, TransitionGroup as fo, createApp as _s, h as $s } from "vue";
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
        Re(c.$slots, "header", {}, void 0, !0)
      ])) : r("", !0),
      c.$slots.search ? (s(), o("div", ho, [
        Re(c.$slots, "search", {}, void 0, !0)
      ])) : r("", !0),
      e("div", yo, [
        Re(c.$slots, "content", {}, void 0, !0)
      ]),
      c.$slots.footer ? (s(), o("div", wo, [
        Re(c.$slots, "footer", {}, void 0, !0)
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
      class: pe(["panel-title", t.variant])
    }, {
      default: l(() => [
        t.showPrefix ? (s(), o("span", bo, a(t.prefix), 1)) : (s(), o("span", _o)),
        Re(c.$slots, "default", {}, void 0, !0)
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
      class: pe(["panel-header", { stacked: t.stacked }])
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
        Re(c.$slots, "actions", {}, void 0, !0)
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
      class: pe(["section-title", { clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (i) => t.clickable && c.$emit("click"))
    }, {
      default: l(() => [
        Re(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", Ro, "(" + a(t.count) + ")", 1)) : r("", !0),
        t.clickable ? (s(), o("span", To, a(t.expanded ? "▼" : "▸"), 1)) : r("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ut = /* @__PURE__ */ ae(Do, [["__scopeId", "data-v-559361eb"]]), Lo = { class: "status-grid" }, zo = { class: "status-grid__columns" }, Uo = { class: "status-grid__column" }, No = { class: "status-grid__title" }, Oo = { class: "status-grid__column status-grid__column--right" }, Ao = { class: "status-grid__title" }, Bo = {
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
          Re(c.$slots, "left", {}, void 0, !0)
        ]),
        e("div", Oo, [
          e("h4", Ao, a(t.rightTitle), 1),
          Re(c.$slots, "right", {}, void 0, !0)
        ])
      ]),
      c.$slots.footer ? (s(), o("div", Bo, [
        Re(c.$slots, "footer", {}, void 0, !0)
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
    const c = t, n = B(() => `status-item--${c.variant}`);
    return (i, f) => (s(), o("div", {
      class: pe(["status-item", n.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (s(), o("span", Wo, a(t.icon), 1)) : r("", !0),
      t.count !== void 0 ? (s(), o("span", Go, a(t.count), 1)) : r("", !0),
      e("span", jo, a(t.label), 1)
    ], 2));
  }
}), $t = /* @__PURE__ */ ae(Ho, [["__scopeId", "data-v-6f929183"]]), Ko = { class: "issue-card__header" }, qo = { class: "issue-card__icon" }, Yo = { class: "issue-card__title" }, Jo = {
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
    const c = t, n = B(() => `issue-card--${c.severity}`);
    return (i, f) => (s(), o("div", {
      class: pe(["issue-card", n.value])
    }, [
      e("div", Ko, [
        e("span", qo, a(t.icon), 1),
        e("h4", Yo, a(t.title), 1)
      ]),
      i.$slots.default || t.description ? (s(), o("div", Jo, [
        t.description ? (s(), o("p", Xo, a(t.description), 1)) : r("", !0),
        Re(i.$slots, "default", {}, void 0, !0)
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
        Re(i.$slots, "actions", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), gt = /* @__PURE__ */ ae(en, [["__scopeId", "data-v-df6aa348"]]), tn = ["type", "disabled"], sn = {
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
      class: pe(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: n[0] || (n[0] = (i) => c.$emit("click", i))
    }, [
      t.loading ? (s(), o("span", sn)) : r("", !0),
      t.loading ? r("", !0) : Re(c.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, tn));
  }
}), te = /* @__PURE__ */ ae(on, [["__scopeId", "data-v-772abe47"]]), nn = { class: "empty-state" }, an = {
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
      t.actionLabel ? (s(), M(te, {
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
}), wt = /* @__PURE__ */ ae(rn, [["__scopeId", "data-v-4466284f"]]), dn = /* @__PURE__ */ oe({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (c, n) => (s(), o("span", {
      class: pe(["detail-label"]),
      style: Rt({ minWidth: t.minWidth })
    }, [
      Re(c.$slots, "default", {}, void 0, !0)
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
      class: pe(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      Re(c.$slots, "default", {}, void 0, !0)
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
      }, 8, ["mono", "variant", "truncate"])) : Re(c.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), Fe = /* @__PURE__ */ ae(mn, [["__scopeId", "data-v-ef15664a"]]), vn = { class: "modal-header" }, fn = { class: "modal-body" }, pn = { class: "status-section" }, gn = {
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
    Ve(() => {
      console.log("StatusDetailModal mounted, initial show value:", c.show);
    }), St(() => c.show, (_, b) => {
      console.log("StatusDetailModal show prop changed from", b, "to", _);
    }, { immediate: !0 });
    const i = B(() => {
      var _, b, T;
      return ((T = (b = (_ = c.status) == null ? void 0 : _.workflows) == null ? void 0 : b.analyzed) == null ? void 0 : T.filter(
        (R) => R.status === "broken" && R.sync_state === "synced"
      )) || [];
    }), f = B(() => {
      var _, b, T;
      return ((T = (b = (_ = c.status) == null ? void 0 : _.workflows) == null ? void 0 : b.analyzed) == null ? void 0 : T.filter(
        (R) => R.status === "broken" && R.sync_state !== "synced"
      )) || [];
    }), p = B(() => {
      var _, b, T;
      return ((T = (b = (_ = c.status) == null ? void 0 : _.workflows) == null ? void 0 : b.synced) == null ? void 0 : T.filter((R) => {
        var C, A, S;
        const $ = (S = (A = (C = c.status) == null ? void 0 : C.workflows) == null ? void 0 : A.analyzed) == null ? void 0 : S.find((P) => P.name === R);
        return !$ || $.status !== "broken";
      })) || [];
    }), u = B(() => {
      var _, b, T, R, $;
      return (_ = c.status) != null && _.workflows ? (((b = c.status.workflows.new) == null ? void 0 : b.length) ?? 0) > 0 || (((T = c.status.workflows.modified) == null ? void 0 : T.length) ?? 0) > 0 || (((R = c.status.workflows.deleted) == null ? void 0 : R.length) ?? 0) > 0 || ((($ = c.status.workflows.synced) == null ? void 0 : $.length) ?? 0) > 0 : !1;
    }), m = B(() => {
      var b, T, R;
      const _ = (b = c.status) == null ? void 0 : b.git_changes;
      return _ ? (((T = _.nodes_added) == null ? void 0 : T.length) ?? 0) > 0 || (((R = _.nodes_removed) == null ? void 0 : R.length) ?? 0) > 0 || _.workflow_changes || _.has_other_changes : !1;
    }), d = B(() => {
      var _, b, T, R, $, C;
      return !u.value && !m.value && ((b = (_ = c.status) == null ? void 0 : _.comparison) == null ? void 0 : b.is_synced) && (((T = c.status) == null ? void 0 : T.missing_models_count) ?? 0) === 0 && (((C = ($ = (R = c.status) == null ? void 0 : R.comparison) == null ? void 0 : $.disabled_nodes) == null ? void 0 : C.length) ?? 0) === 0;
    }), v = B(() => {
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
      var T, R, $, C, A, S, P, J, F, G, x, D, O, re, se, X, ue, Y, z, L, I, ie;
      return s(), M(Xe, { to: "body" }, [
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
                w(ut, { level: "4" }, {
                  default: l(() => [...b[9] || (b[9] = [
                    g("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                w(Fe, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              u.value ? (s(), o("div", gn, [
                e("div", hn, [
                  w(ut, { level: "4" }, {
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
                (R = (T = t.status.workflows) == null ? void 0 : T.new) != null && R.length ? (s(), o("div", Mn, [
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
                (S = (A = t.status.workflows) == null ? void 0 : A.deleted) != null && S.length ? (s(), o("div", Bn, [
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
                w(ut, { level: "4" }, {
                  default: l(() => [...b[17] || (b[17] = [
                    g("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (J = (P = t.status.git_changes) == null ? void 0 : P.nodes_added) != null && J.length ? (s(), o("div", Xn, [
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
                (G = (F = t.status.git_changes) == null ? void 0 : F.nodes_removed) != null && G.length ? (s(), o("div", oa, [
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
                (x = t.status.git_changes) != null && x.workflow_changes ? (s(), o("div", da, [
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
                  w(ut, { level: "4" }, {
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
                (se = (re = t.status.comparison) == null ? void 0 : re.missing_nodes) != null && se.length ? (s(), o("div", ga, [
                  w(Fe, {
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
                (ue = (X = t.status.comparison) == null ? void 0 : X.extra_nodes) != null && ue.length ? (s(), o("div", wa, [
                  w(Fe, {
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
                (z = (Y = t.status.comparison) == null ? void 0 : Y.version_mismatches) != null && z.length ? (s(), o("div", _a, [
                  w(Fe, {
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
                  w(Fe, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : r("", !0),
                e("div", Ea, [
                  w(te, {
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
              (ie = (I = t.status.comparison) == null ? void 0 : I.disabled_nodes) != null && ie.length ? (s(), o("div", Pa, [
                w(ut, { level: "4" }, {
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
                w(ut, { level: "4" }, {
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
              w(te, {
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
    const R = B(() => {
      const Y = i.status.workflows.analyzed || [], z = Y.filter(
        (L) => L.unresolved_models_count > 0 || L.ambiguous_models_count > 0
      );
      return z.length === 0 && i.status.missing_models_count > 0 ? Y.filter((L) => L.sync_state === "synced") : z;
    });
    function $() {
      const Y = R.value;
      Y.length !== 0 && (y.value = !0, v("repair-missing-models", Y.map((z) => z.name)));
    }
    function C() {
      y.value = !1;
    }
    c({ resetRepairingState: C, resetRepairingEnvironmentState: b, closeDetailModal: T });
    const A = B(() => i.status.workflows.new.length > 0 || i.status.workflows.modified.length > 0 || i.status.workflows.deleted.length > 0), S = B(() => i.status.has_changes), P = B(() => {
      const Y = i.status.git_changes;
      return Y.nodes_added.length > 0 || Y.nodes_removed.length > 0 || Y.workflow_changes;
    }), J = B(() => i.status.has_changes || A.value), F = B(() => Object.keys(i.status.git_changes.workflow_changes_detail).length), G = B(() => i.status.git_changes.has_other_changes), x = B(() => {
      var Y;
      return ((Y = i.status.workflows.analyzed) == null ? void 0 : Y.filter((z) => z.status === "broken")) || [];
    }), D = B(() => {
      var Y;
      return ((Y = i.status.workflows.analyzed) == null ? void 0 : Y.filter(
        (z) => z.has_path_sync_issues && !z.has_issues
      )) || [];
    }), O = B(() => x.value.length > 0), re = B(() => O.value || D.value.length > 0 || i.status.missing_models_count > 0 || !i.status.comparison.is_synced || i.status.has_legacy_manager), se = B(() => {
      const Y = [];
      return i.status.workflows.new.length > 0 && Y.push(`${i.status.workflows.new.length} new`), i.status.workflows.modified.length > 0 && Y.push(`${i.status.workflows.modified.length} modified`), i.status.workflows.deleted.length > 0 && Y.push(`${i.status.workflows.deleted.length} deleted`), Y.length > 0 ? `${Y.join(", ")} workflow${Y.length === 1 && !Y[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), X = B(() => {
      var L, I;
      const Y = [], z = i.status.comparison;
      return (L = z.missing_nodes) != null && L.length && Y.push(`${z.missing_nodes.length} missing node${z.missing_nodes.length === 1 ? "" : "s"}`), (I = z.extra_nodes) != null && I.length && Y.push(`${z.extra_nodes.length} untracked node${z.extra_nodes.length === 1 ? "" : "s"}`), Y.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${Y.join(" and ")}.`;
    }), ue = B(() => {
      var L, I;
      const Y = [], z = i.status.comparison;
      return (L = z.extra_nodes) != null && L.length && (z.extra_nodes.slice(0, 3).forEach((ie) => {
        Y.push(`Untracked: ${ie}`);
      }), z.extra_nodes.length > 3 && Y.push(`...and ${z.extra_nodes.length - 3} more untracked`)), (I = z.missing_nodes) != null && I.length && (z.missing_nodes.slice(0, 3).forEach((ie) => {
        Y.push(`Missing: ${ie}`);
      }), z.missing_nodes.length > 3 && Y.push(`...and ${z.missing_nodes.length - 3} more missing`)), Y;
    });
    return (Y, z) => (s(), o(W, null, [
      w(tt, null, {
        header: l(() => [
          w(st, { title: "STATUS" })
        ]),
        content: l(() => [
          i.setupState === "no_workspace" ? (s(), M(gt, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: l(() => [
              w(te, {
                variant: "primary",
                size: "sm",
                onClick: z[0] || (z[0] = (L) => Y.$emit("start-setup"))
              }, {
                default: l(() => [...z[13] || (z[13] = [
                  g(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : i.setupState === "unmanaged" ? (s(), M(gt, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: l(() => [
              w(te, {
                variant: "primary",
                size: "sm",
                onClick: z[1] || (z[1] = (L) => Y.$emit("view-environments"))
              }, {
                default: l(() => [...z[14] || (z[14] = [
                  g(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : i.setupState === "empty_workspace" ? (s(), M(gt, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: l(() => [
              w(te, {
                variant: "primary",
                size: "sm",
                onClick: z[2] || (z[2] = (L) => Y.$emit("create-environment"))
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
              w(ut, {
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
                  p.value ? (s(), M(te, {
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
            }, Bt({
              left: l(() => [
                t.status.workflows.new.length ? (s(), M($t, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : r("", !0),
                t.status.workflows.modified.length ? (s(), M($t, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : r("", !0),
                t.status.workflows.deleted.length ? (s(), M($t, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : r("", !0),
                w($t, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: A.value
                }, null, 8, ["count", "separator"])
              ]),
              right: l(() => [
                t.status.git_changes.nodes_added.length ? (s(), M($t, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : r("", !0),
                t.status.git_changes.nodes_removed.length ? (s(), M($t, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : r("", !0),
                t.status.git_changes.workflow_changes ? (s(), M($t, {
                  key: 2,
                  icon: "●",
                  count: F.value,
                  label: F.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : r("", !0),
                G.value ? (s(), M($t, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : r("", !0),
                S.value && !P.value && !G.value ? (s(), M($t, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : r("", !0),
                S.value ? r("", !0) : (s(), M($t, {
                  key: 5,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 2
            }, [
              J.value ? {
                name: "footer",
                fn: l(() => [
                  z[19] || (z[19] = e("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  e("div", Ba, [
                    e("span", Fa, a(se.value), 1),
                    w(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: z[3] || (z[3] = (L) => Y.$emit("commit-changes"))
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
          t.status.is_detached_head ? (s(), M(gt, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: l(() => [
              w(te, {
                variant: "primary",
                size: "sm",
                onClick: z[6] || (z[6] = (L) => Y.$emit("create-branch"))
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
            w(ut, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: l(() => [...z[21] || (z[21] = [
                g(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            re.value ? (s(), o(W, { key: 0 }, [
              x.value.length > 0 ? (s(), M(gt, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${x.value.length} workflow${x.value.length === 1 ? "" : "s"} can't run`,
                description: "These workflows have missing dependencies that must be resolved before they can run.",
                items: x.value.map((L) => `${L.name} — ${L.issue_summary}`)
              }, {
                actions: l(() => [
                  w(te, {
                    variant: "primary",
                    size: "sm",
                    onClick: z[7] || (z[7] = (L) => Y.$emit("view-workflows"))
                  }, {
                    default: l(() => [...z[22] || (z[22] = [
                      g(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : r("", !0),
              D.value.length > 0 ? (s(), M(gt, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${D.value.length} workflow${D.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: D.value.map((L) => `${L.name} — ${L.models_needing_path_sync_count} model path${L.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: l(() => [
                  w(te, {
                    variant: "primary",
                    size: "sm",
                    onClick: z[8] || (z[8] = (L) => Y.$emit("view-workflows"))
                  }, {
                    default: l(() => [...z[23] || (z[23] = [
                      g(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : r("", !0),
              t.status.missing_models_count > 0 && !O.value ? (s(), M(gt, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: l(() => [
                  w(te, {
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
                  w(te, {
                    variant: "secondary",
                    size: "sm",
                    onClick: z[9] || (z[9] = (L) => Y.$emit("view-workflows"))
                  }, {
                    default: l(() => [...z[24] || (z[24] = [
                      g(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : r("", !0),
              t.status.comparison.is_synced ? r("", !0) : (s(), M(gt, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: X.value,
                items: ue.value
              }, {
                actions: l(() => [
                  w(te, {
                    variant: "secondary",
                    size: "sm",
                    onClick: u
                  }, {
                    default: l(() => [...z[25] || (z[25] = [
                      g(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  w(te, {
                    variant: "primary",
                    size: "sm",
                    onClick: z[10] || (z[10] = (L) => Y.$emit("view-nodes"))
                  }, {
                    default: l(() => [...z[26] || (z[26] = [
                      g(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              t.status.has_legacy_manager ? (s(), M(gt, {
                key: 4,
                severity: "warning",
                icon: "⚠",
                title: "Legacy ComfyUI-Manager detected",
                description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
              }, {
                actions: l(() => [
                  w(te, {
                    variant: "primary",
                    size: "sm",
                    onClick: z[11] || (z[11] = (L) => Y.$emit("view-nodes"))
                  }, {
                    default: l(() => [...z[27] || (z[27] = [
                      g(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : r("", !0)
            ], 64)) : J.value ? (s(), o("span", Wa, "No issues")) : (s(), M(wt, {
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
    return Ve(() => {
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
        d[0] || (d[0] = xt((v) => m.$emit("enter"), ["enter"])),
        d[1] || (d[1] = xt((v) => m.$emit("escape"), ["escape"]))
      ],
      onFocus: d[2] || (d[2] = (v) => m.$emit("focus")),
      onBlur: d[3] || (d[3] = (v) => m.$emit("blur"))
    }, null, 42, Ha));
  }
}), rs = /* @__PURE__ */ ae(Ka, [["__scopeId", "data-v-0380d08f"]]), qa = { class: "branch-create-form" }, Ya = { class: "form-actions" }, Ja = /* @__PURE__ */ oe({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: c }) {
    const n = c, i = h(""), f = B(() => {
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
        w(te, {
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
        w(te, {
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
      class: pe(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (i) => t.clickable && c.$emit("click"))
    }, [
      e("span", Qa, a(t.isCurrent ? "●" : "○"), 1),
      e("span", Za, a(t.branchName), 1),
      c.$slots.actions || t.showCurrentLabel ? (s(), o("div", el, [
        Re(c.$slots, "actions", {}, void 0, !0),
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
            i.value ? r("", !0) : (s(), M(te, {
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
        t.branches.length === 0 ? (s(), M(wt, {
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
              d.is_current ? r("", !0) : (s(), M(te, {
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
              d.is_current ? r("", !0) : (s(), M(te, {
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
      Re(c.$slots, "default", {}, void 0, !0)
    ]));
  }
}), dl = /* @__PURE__ */ ae(rl, [["__scopeId", "data-v-8c5ee761"]]), cl = { class: "commit-hash" }, ul = /* @__PURE__ */ oe({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const c = t, n = B(() => c.hash.slice(0, c.length));
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
      class: pe(["commit-item", { clickable: t.clickable }]),
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
        Re(p.$slots, "actions", {}, void 0, !0)
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
        t.commits.length === 0 ? (s(), M(wt, {
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
                w(te, {
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
}), hl = /* @__PURE__ */ ae(gl, [["__scopeId", "data-v-981c3c64"]]), H$ = us({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const K$ = [
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
], q$ = {
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
], Y$ = [
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
  async function n(H, ce) {
    var Oe;
    if (!((Oe = window.app) != null && Oe.api))
      throw new Error("ComfyUI API not available");
    const $e = await window.app.api.fetchApi(H, ce);
    if (!$e.ok) {
      const j = await $e.json().catch(() => ({}));
      throw new Error(j.error || j.message || `Request failed: ${$e.status}`);
    }
    return $e.json();
  }
  async function i(H = !1) {
    return n(H ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function f(H, ce = !1) {
    return n("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: H, allow_issues: ce })
    });
  }
  async function p(H = 10, ce = 0) {
    return n(`/v2/comfygit/log?limit=${H}&offset=${ce}`);
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
  async function y(H) {
    return n(`/v2/comfygit/commit/${H}`);
  }
  async function k(H, ce = !1) {
    return n("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: H, force: ce })
    });
  }
  async function _(H, ce = "HEAD") {
    return n("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: H, start_point: ce })
    });
  }
  async function b(H, ce = !1) {
    return n("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: H, force: ce })
    });
  }
  async function T(H, ce = !1) {
    return n(`/v2/comfygit/branch/${encodeURIComponent(H)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: ce })
    });
  }
  async function R() {
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
  async function $(H, ce) {
    const $e = { target_env: H };
    return ce && ($e.workspace_path = ce), n("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify($e)
    });
  }
  async function C() {
    try {
      return n("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function A(H) {
    return n("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(H)
    });
  }
  async function S() {
    return n("/v2/workspace/environments/create_status");
  }
  async function P(H = 20) {
    return n(`/v2/workspace/comfyui_releases?limit=${H}`);
  }
  async function J(H) {
    return n(`/v2/workspace/environments/${H}`, {
      method: "DELETE"
    });
  }
  async function F(H = !1) {
    try {
      return n(H ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const ce = await i(H), $e = [];
      return ce.workflows.new.forEach((Oe) => {
        $e.push({ name: Oe, status: "new", missing_nodes: 0, missing_models: 0, path: Oe });
      }), ce.workflows.modified.forEach((Oe) => {
        $e.push({ name: Oe, status: "modified", missing_nodes: 0, missing_models: 0, path: Oe });
      }), ce.workflows.synced.forEach((Oe) => {
        $e.push({ name: Oe, status: "synced", missing_nodes: 0, missing_models: 0, path: Oe });
      }), $e;
    }
  }
  async function G(H) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(H)}/details`);
  }
  async function x(H) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(H)}/resolve`, {
      method: "POST"
    });
  }
  async function D(H, ce, $e) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(H)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: ce, install_models: $e })
    });
  }
  async function O(H, ce, $e) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(H)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: ce, importance: $e })
    });
  }
  async function re() {
    try {
      return n("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function se() {
    try {
      return n("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function X(H) {
    return n(`/v2/workspace/models/details/${encodeURIComponent(H)}`);
  }
  async function ue(H) {
    return n("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: H })
    });
  }
  async function Y(H, ce) {
    return n(`/v2/workspace/models/${H}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ce })
    });
  }
  async function z(H, ce) {
    return n(`/v2/workspace/models/${H}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ce })
    });
  }
  async function L(H) {
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
  async function ie() {
    return n("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function Z() {
    return n("/v2/workspace/models/directory");
  }
  async function ke(H) {
    return n("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: H })
    });
  }
  async function Ce(H) {
    try {
      const ce = H ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(H)}` : "/v2/comfygit/config";
      return n(ce);
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
  async function Te(H, ce) {
    const $e = ce ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(ce)}` : "/v2/comfygit/config";
    return n($e, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(H)
    });
  }
  async function ze(H, ce) {
    try {
      const $e = new URLSearchParams();
      return H && $e.append("level", H), ce && $e.append("lines", ce.toString()), n(`/v2/comfygit/debug/logs?${$e}`);
    } catch {
      return [];
    }
  }
  async function me(H, ce) {
    try {
      const $e = new URLSearchParams();
      return H && $e.append("level", H), ce && $e.append("lines", ce.toString()), n(`/v2/workspace/debug/logs?${$e}`);
    } catch {
      return [];
    }
  }
  async function we() {
    return n("/v2/comfygit/debug/logs/path");
  }
  async function Pe() {
    return n("/v2/workspace/debug/logs/path");
  }
  async function Q(H) {
    return n("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: H })
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
  async function ve(H) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(H)}/track-dev`, {
      method: "POST"
    });
  }
  async function Ne(H) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(H)}/install`, {
      method: "POST"
    });
  }
  async function nt(H) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(H)}/update`, {
      method: "POST"
    });
  }
  async function at(H) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(H)}`, {
      method: "DELETE"
    });
  }
  async function Me() {
    try {
      return n("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function Je(H, ce) {
    return n("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: H, url: ce })
    });
  }
  async function Ke(H) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}`, {
      method: "DELETE"
    });
  }
  async function qe(H, ce, $e) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: ce, push_url: $e })
    });
  }
  async function mt(H) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}/fetch`, {
      method: "POST"
    });
  }
  async function _e(H) {
    try {
      return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}/status`);
    } catch {
      return null;
    }
  }
  async function je(H = "skip", ce = !0) {
    return n("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: H,
        remove_extra_nodes: ce
      })
    });
  }
  async function Ze(H, ce) {
    const $e = ce ? `/v2/comfygit/remotes/${encodeURIComponent(H)}/pull-preview?branch=${encodeURIComponent(ce)}` : `/v2/comfygit/remotes/${encodeURIComponent(H)}/pull-preview`;
    return n($e);
  }
  async function lt(H, ce = {}) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}/pull`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: ce.modelStrategy || "skip",
        force: ce.force || !1,
        resolutions: ce.resolutions
      })
    });
  }
  async function Le(H, ce) {
    const $e = ce ? `/v2/comfygit/remotes/${encodeURIComponent(H)}/push-preview?branch=${encodeURIComponent(ce)}` : `/v2/comfygit/remotes/${encodeURIComponent(H)}/push-preview`;
    return n($e);
  }
  async function ge(H, ce = {}) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}/push`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: ce.force || !1 })
    });
  }
  async function K(H, ce) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: ce })
    });
  }
  async function q(H) {
    const ce = {
      success: 0,
      failed: []
    };
    for (const $e of H)
      try {
        await x($e), ce.success++;
      } catch (Oe) {
        ce.failed.push({
          name: $e,
          error: Oe instanceof Error ? Oe.message : "Unknown error"
        });
      }
    return ce;
  }
  async function E(H) {
    var Oe;
    const ce = new FormData();
    if (ce.append("file", H), !((Oe = window.app) != null && Oe.api))
      throw new Error("ComfyUI API not available");
    const $e = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: ce
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!$e.ok) {
      const j = await $e.json().catch(() => ({}));
      throw new Error(j.error || `Preview failed: ${$e.status}`);
    }
    return $e.json();
  }
  async function V(H) {
    return n(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(H)}`
    );
  }
  async function ee(H, ce, $e, Oe) {
    var ye;
    const j = new FormData();
    if (j.append("file", H), j.append("name", ce), j.append("model_strategy", $e), j.append("torch_backend", Oe), !((ye = window.app) != null && ye.api))
      throw new Error("ComfyUI API not available");
    const U = await window.app.api.fetchApi("/v2/workspace/import", {
      method: "POST",
      body: j
    });
    if (!U.ok) {
      const Ee = await U.json().catch(() => ({}));
      throw new Error(Ee.message || Ee.error || `Import failed: ${U.status}`);
    }
    return U.json();
  }
  async function be() {
    return n("/v2/workspace/import/status");
  }
  async function We(H) {
    return n("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: H })
    });
  }
  async function vt(H, ce, $e, Oe) {
    return n("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: H,
        name: ce,
        model_strategy: $e,
        torch_backend: Oe
      })
    });
  }
  async function it() {
    return n("/v2/setup/status");
  }
  async function Lt(H) {
    return n("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(H)
    });
  }
  async function ft() {
    return n("/v2/setup/initialize_status");
  }
  async function zt(H) {
    return n("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(H)
    });
  }
  async function de() {
    return n("/v2/comfygit/deploy/summary");
  }
  async function N() {
    return n("/v2/comfygit/deploy/runpod/data-centers");
  }
  async function Se(H, ce) {
    return n("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: H, save_key: ce })
    });
  }
  async function Ye() {
    return n("/v2/comfygit/deploy/runpod/volumes");
  }
  async function pt(H) {
    const ce = H ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(H)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return n(ce);
  }
  async function It(H) {
    return n("/v2/comfygit/deploy/runpod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(H)
    });
  }
  async function Et() {
    return n("/v2/comfygit/deploy/runpod/pods");
  }
  async function bt(H) {
    return n(`/v2/comfygit/deploy/runpod/${encodeURIComponent(H)}`, {
      method: "DELETE"
    });
  }
  async function fe(H) {
    return n(`/v2/comfygit/deploy/runpod/${encodeURIComponent(H)}/stop`, {
      method: "POST"
    });
  }
  async function rt(H) {
    return n(`/v2/comfygit/deploy/runpod/${encodeURIComponent(H)}/start`, {
      method: "POST"
    });
  }
  async function _t(H) {
    return n(`/v2/comfygit/deploy/runpod/${encodeURIComponent(H)}/status`);
  }
  async function Ft(H) {
    return n("/v2/comfygit/deploy/package", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: H })
    });
  }
  async function Vt(H = !1) {
    return n(H ? "/v2/comfygit/deploy/runpod/key?verify=true" : "/v2/comfygit/deploy/runpod/key");
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
    getEnvironments: R,
    switchEnvironment: $,
    getSwitchProgress: C,
    createEnvironment: A,
    getCreateProgress: S,
    getComfyUIReleases: P,
    deleteEnvironment: J,
    // Workflow Management
    getWorkflows: F,
    getWorkflowDetails: G,
    resolveWorkflow: x,
    installWorkflowDeps: D,
    setModelImportance: O,
    // Model Management
    getEnvironmentModels: re,
    getWorkspaceModels: se,
    getModelDetails: X,
    openFileLocation: ue,
    addModelSource: Y,
    removeModelSource: z,
    deleteModel: L,
    downloadModel: I,
    scanWorkspaceModels: ie,
    getModelsDirectory: Z,
    setModelsDirectory: ke,
    // Settings
    getConfig: Ce,
    updateConfig: Te,
    // Debug/Logs
    getEnvironmentLogs: ze,
    getWorkspaceLogs: me,
    getEnvironmentLogPath: we,
    getWorkspaceLogPath: Pe,
    openFile: Q,
    // Node Management
    getNodes: le,
    trackNodeAsDev: ve,
    installNode: Ne,
    updateNode: nt,
    uninstallNode: at,
    // Git Remotes
    getRemotes: Me,
    addRemote: Je,
    removeRemote: Ke,
    updateRemoteUrl: qe,
    fetchRemote: mt,
    getRemoteSyncStatus: _e,
    // Push/Pull
    getPullPreview: Ze,
    pullFromRemote: lt,
    getPushPreview: Le,
    pushToRemote: ge,
    validateMerge: K,
    // Environment Sync
    syncEnvironmentManually: je,
    // Workflow Repair
    repairWorkflowModels: q,
    // Import Operations
    previewTarballImport: E,
    previewGitImport: We,
    validateEnvironmentName: V,
    executeImport: ee,
    executeGitImport: vt,
    getImportProgress: be,
    // First-Time Setup
    getSetupStatus: it,
    initializeWorkspace: Lt,
    getInitializeProgress: ft,
    validatePath: zt,
    // Deploy Operations
    getDeploySummary: de,
    getDataCenters: N,
    testRunPodConnection: Se,
    getNetworkVolumes: Ye,
    getRunPodGpuTypes: pt,
    deployToRunPod: It,
    getRunPodPods: Et,
    terminateRunPodPod: bt,
    stopRunPodPod: fe,
    startRunPodPod: rt,
    getDeploymentStatus: _t,
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
    return Ve(() => {
      document.addEventListener("keydown", p), document.body.style.overflow = "hidden";
    }), bs(() => {
      document.removeEventListener("keydown", p), document.body.style.overflow = "";
    }), (u, m) => (s(), M(Xe, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: f
      }, [
        e("div", {
          class: pe(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: m[1] || (m[1] = Be(() => {
          }, ["stop"]))
        }, [
          e("div", wl, [
            Re(u.$slots, "header", {}, () => [
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
            t.loading ? (s(), o("div", _l, "Loading...")) : t.error ? (s(), o("div", $l, a(t.error), 1)) : Re(u.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          u.$slots.footer ? (s(), o("div", Cl, [
            Re(u.$slots, "footer", {}, void 0, !0)
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
      class: pe(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: n[0] || (n[0] = (i) => c.$emit("click", i))
    }, [
      t.loading ? (s(), o("span", Il)) : r("", !0),
      Re(c.$slots, "default", {}, void 0, !0)
    ], 10, Sl));
  }
}), he = /* @__PURE__ */ ae(El, [["__scopeId", "data-v-f3452606"]]), Pl = {
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
      class: pe(["base-title", t.variant])
    }, {
      default: l(() => [
        Re(c.$slots, "default", {}, void 0, !0),
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
      class: pe(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: pe(["base-select", { error: !!t.error }]),
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
    return (c, n) => (s(), M(Xe, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "popover-overlay",
        onClick: n[2] || (n[2] = (i) => c.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: Rt({ maxWidth: t.maxWidth }),
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
            Re(c.$slots, "content", {}, void 0, !0)
          ]),
          c.$slots.actions ? (s(), o("div", Bl, [
            Re(c.$slots, "actions", {}, void 0, !0)
          ])) : r("", !0)
        ], 4)
      ])) : r("", !0)
    ]));
  }
}), kt = /* @__PURE__ */ ae(Fl, [["__scopeId", "data-v-42815ace"]]), Vl = { class: "detail-section" }, Wl = {
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
    function R(x) {
      switch (x) {
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
    function $(x) {
      switch (x) {
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
    function C(x) {
      if (!x.loaded_by || x.loaded_by.length === 0) return [];
      const D = x.hash || x.filename;
      return b.value.has(D) ? x.loaded_by : x.loaded_by.slice(0, 3);
    }
    function A(x) {
      return b.value.has(x);
    }
    function S(x) {
      b.value.has(x) ? b.value.delete(x) : b.value.add(x), b.value = new Set(b.value);
    }
    async function P() {
      d.value = !0, v.value = null;
      try {
        m.value = await f(n.workflowName);
      } catch (x) {
        v.value = x instanceof Error ? x.message : "Failed to load workflow details";
      } finally {
        d.value = !1;
      }
    }
    function J(x, D) {
      k.value[x] = D, y.value = !0;
    }
    async function F(x) {
      try {
        await u(x);
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
        for (const [x, D] of Object.entries(k.value))
          await p(n.workflowName, x, D);
        i("refresh"), i("close");
      } catch (x) {
        v.value = x instanceof Error ? x.message : "Failed to save changes";
      } finally {
        d.value = !1;
      }
    }
    return Ve(P), (x, D) => (s(), o(W, null, [
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
                var re;
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
                        class: pe(["value", R(O.status)])
                      }, a($(O.status)), 3)
                    ]),
                    e("div", ql, [
                      e("span", Yl, [
                        D[8] || (D[8] = g(" Importance: ", -1)),
                        w(Vs, {
                          size: 14,
                          title: "About importance levels",
                          onClick: D[0] || (D[0] = (se) => _.value = !0)
                        })
                      ]),
                      w(Ul, {
                        "model-value": k.value[O.filename] || O.importance,
                        options: T,
                        "onUpdate:modelValue": (se) => J(O.filename, se)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    O.loaded_by && O.loaded_by.length > 0 ? (s(), o("div", Jl, [
                      D[9] || (D[9] = e("span", { class: "label" }, "Loaded by:", -1)),
                      e("div", Xl, [
                        (s(!0), o(W, null, ne(C(O), (se, X) => (s(), o("div", {
                          key: `${se.node_id}-${X}`,
                          class: "node-reference"
                        }, a(se.node_type) + " (Node #" + a(se.node_id) + ") ", 1))), 128)),
                        O.loaded_by.length > 3 ? (s(), o("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (se) => S(O.hash || O.filename)
                        }, a(A(O.hash || O.filename) ? "▼ Show less" : `▶ View all (${O.loaded_by.length})`), 9, Ql)) : r("", !0)
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
                        e("code", null, a((re = O.expected_categories) == null ? void 0 : re[0]) + "/", 1)
                      ])
                    ])) : r("", !0)
                  ]),
                  O.status !== "available" ? (s(), o("div", oi, [
                    O.status === "downloadable" ? (s(), M(he, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: D[1] || (D[1] = (se) => i("resolve"))
                    }, {
                      default: l(() => [...D[14] || (D[14] = [
                        g(" Download ", -1)
                      ])]),
                      _: 1
                    })) : O.status === "category_mismatch" && O.file_path ? (s(), M(he, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => F(O.file_path)
                    }, {
                      default: l(() => [...D[15] || (D[15] = [
                        g(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : O.status !== "path_mismatch" ? (s(), M(he, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: D[2] || (D[2] = (se) => i("resolve"))
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
                  class: pe(["node-status", O.status === "installed" ? "installed" : "missing"])
                }, a(O.status === "installed" ? "✓" : "✕"), 3),
                e("span", li, a(O.name), 1),
                O.version ? (s(), o("span", ii, "v" + a(O.version), 1)) : r("", !0)
              ]))), 128))
            ])
          ], 64)) : r("", !0)
        ]),
        footer: l(() => [
          w(he, {
            variant: "secondary",
            onClick: D[3] || (D[3] = (O) => i("close"))
          }, {
            default: l(() => [...D[17] || (D[17] = [
              g(" Close ", -1)
            ])]),
            _: 1
          }),
          y.value ? (s(), M(he, {
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
      w(kt, {
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
}), di = /* @__PURE__ */ ae(ri, [["__scopeId", "data-v-668728e6"]]), De = us({
  items: [],
  status: "idle"
});
let Ct = null;
function js() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function ms(t) {
  return De.items.find((c) => c.id === t);
}
async function jt() {
  if (De.status === "downloading") return;
  const t = De.items.find((c) => c.status === "queued");
  if (!t) {
    De.status = "idle";
    return;
  }
  De.status = "downloading", t.status = "downloading", t.progress = 0, t.downloaded = 0;
  try {
    await ci(t), t.status = "completed", t.progress = 100;
  } catch (c) {
    t.status = "failed", t.error = c instanceof Error ? c.message : "Download failed", t.retries++;
  } finally {
    De.status = "idle", jt();
  }
}
async function ci(t) {
  return new Promise((c, n) => {
    Ct && (Ct.close(), Ct = null);
    const i = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), f = new EventSource(`/v2/comfygit/models/download-stream?${i}`);
    Ct = f;
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
            m = !0, f.close(), Ct = null, c();
            break;
          case "error":
            m = !0, f.close(), Ct = null, n(new Error(v.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, f.onerror = () => {
      f.close(), Ct = null, m || n(new Error("Connection lost"));
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
      if (De.items.some((f) => f.url === n.url && f.filename === n.filename))
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
      De.items.push(i);
    }
    console.log(`[ComfyGit] Loaded ${c.pending_downloads.length} pending download(s)`);
  } catch (t) {
    console.warn("[ComfyGit] Failed to load pending downloads:", t);
  }
}
function os() {
  function t($) {
    for (const C of $) {
      if (De.items.some(
        (P) => P.url === C.url && P.targetPath === C.targetPath && ["queued", "downloading", "paused", "completed"].includes(P.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${C.filename}`);
        continue;
      }
      const S = {
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
      De.items.push(S);
    }
    De.status === "idle" && jt();
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
        Ct && (Ct.close(), Ct = null), C.status = "failed", C.error = "Cancelled by user", De.status = "idle", jt();
      } else if (C.status === "queued") {
        const A = De.items.findIndex((S) => S.id === $);
        A >= 0 && De.items.splice(A, 1);
      }
    }
  }
  function n($) {
    const C = ms($);
    !C || C.status !== "failed" || (C.status = "queued", C.error = void 0, C.progress = 0, C.downloaded = 0, De.status === "idle" && jt());
  }
  function i($) {
    const C = ms($);
    !C || C.status !== "paused" || (C.status = "queued", De.status === "idle" && jt());
  }
  function f() {
    const $ = De.items.filter((C) => C.status === "paused");
    for (const C of $)
      C.status = "queued";
    De.status === "idle" && jt();
  }
  function p($) {
    const C = De.items.findIndex((A) => A.id === $);
    C >= 0 && ["completed", "failed", "paused"].includes(De.items[C].status) && De.items.splice(C, 1);
  }
  function u() {
    De.items = De.items.filter(($) => $.status !== "completed");
  }
  function m() {
    De.items = De.items.filter(($) => $.status !== "failed");
  }
  const d = B(
    () => De.items.find(($) => $.status === "downloading")
  ), v = B(
    () => De.items.filter(($) => $.status === "queued")
  ), y = B(
    () => De.items.filter(($) => $.status === "completed")
  ), k = B(
    () => De.items.filter(($) => $.status === "failed")
  ), _ = B(
    () => De.items.filter(($) => $.status === "paused")
  ), b = B(() => De.items.length > 0), T = B(
    () => De.items.filter(($) => $.status === "queued" || $.status === "downloading").length
  ), R = B(
    () => De.items.some(($) => $.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: uo(De),
    // Computed
    currentDownload: d,
    queuedItems: v,
    completedItems: y,
    failedItems: k,
    pausedItems: _,
    hasItems: b,
    activeCount: T,
    hasPaused: R,
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
  async function u(A, S) {
    var J;
    if (!((J = window.app) != null && J.api))
      throw new Error("ComfyUI API not available");
    const P = await window.app.api.fetchApi(A, S);
    if (!P.ok) {
      const F = await P.json().catch(() => ({})), G = F.error || F.message || `Request failed: ${P.status}`;
      throw new Error(G);
    }
    return P.json();
  }
  async function m(A) {
    f.value = !0, p.value = null;
    try {
      let S;
      return Yt() || (S = await u(
        `/v2/comfygit/workflow/${A}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), t.value = S, S;
    } catch (S) {
      const P = S instanceof Error ? S.message : "Unknown error occurred";
      throw p.value = P, S;
    } finally {
      f.value = !1;
    }
  }
  async function d(A, S, P, J) {
    f.value = !0, p.value = null;
    try {
      let F;
      if (!Yt()) {
        const G = Object.fromEntries(S), x = Object.fromEntries(P), D = J ? Array.from(J) : [];
        F = await u(
          `/v2/comfygit/workflow/${A}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: G,
              model_choices: x,
              skipped_packages: D
            })
          }
        );
      }
      return c.value = F, F;
    } catch (F) {
      const G = F instanceof Error ? F.message : "Unknown error occurred";
      throw p.value = G, F;
    } finally {
      f.value = !1;
    }
  }
  async function v(A, S = 10) {
    f.value = !0, p.value = null;
    try {
      let P;
      return Yt() || (P = await u(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: A, limit: S })
        }
      )), n.value = P.results, P.results;
    } catch (P) {
      const J = P instanceof Error ? P.message : "Unknown error occurred";
      throw p.value = J, P;
    } finally {
      f.value = !1;
    }
  }
  async function y(A, S = 10) {
    f.value = !0, p.value = null;
    try {
      let P;
      return Yt() || (P = await u(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: A, limit: S })
        }
      )), i.value = P.results, P.results;
    } catch (P) {
      const J = P instanceof Error ? P.message : "Unknown error occurred";
      throw p.value = J, P;
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
  async function b(A) {
    k.phase = "installing", k.nodesInstalled = [], k.installError = void 0, k.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return Yt(), await T(A);
    } catch (S) {
      const P = S instanceof Error ? S.message : "Failed to install nodes";
      throw k.installError = P, S;
    }
  }
  async function T(A) {
    var P;
    const S = await u(
      `/v2/comfygit/workflow/${A}/install`,
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
      const J = new Map(((P = S.failed) == null ? void 0 : P.map((F) => [F.node_id, F.error])) || []);
      for (let F = 0; F < k.nodesToInstall.length; F++) {
        const G = k.nodesToInstall[F], x = J.get(G);
        k.nodeInstallProgress.completedNodes.push({
          node_id: G,
          success: !x,
          error: x
        });
      }
    }
    return k.nodesInstalled = S.nodes_installed, k.needsRestart = S.nodes_installed.length > 0, S.failed && S.failed.length > 0 && (k.installError = `${S.failed.length} package(s) failed to install`), S;
  }
  async function R(A, S, P) {
    _(), k.phase = "resolving", p.value = null;
    const J = Object.fromEntries(S), F = Object.fromEntries(P);
    try {
      const G = await fetch(`/v2/comfygit/workflow/${A}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: J,
          model_choices: F
        })
      });
      if (!G.ok)
        throw new Error(`Request failed: ${G.status}`);
      if (!G.body)
        throw new Error("No response body");
      const x = G.body.getReader(), D = new TextDecoder();
      let O = "";
      for (; ; ) {
        const { done: re, value: se } = await x.read();
        if (re) break;
        O += D.decode(se, { stream: !0 });
        const X = O.split(`

`);
        O = X.pop() || "";
        for (const ue of X) {
          if (!ue.trim()) continue;
          const Y = ue.split(`
`);
          let z = "", L = "";
          for (const I of Y)
            I.startsWith("event: ") ? z = I.slice(7) : I.startsWith("data: ") && (L = I.slice(6));
          if (L)
            try {
              const I = JSON.parse(L);
              $(z, I);
            } catch (I) {
              console.warn("Failed to parse SSE event:", I);
            }
        }
      }
    } catch (G) {
      const x = G instanceof Error ? G.message : "Unknown error occurred";
      throw p.value = x, k.error = x, k.phase = "error", G;
    }
  }
  function $(A, S) {
    switch (A) {
      case "batch_start":
        k.phase = "downloading", k.totalFiles = S.total;
        break;
      case "file_start":
        k.currentFile = S.filename, k.currentFileIndex = S.index, k.bytesDownloaded = 0, k.bytesTotal = void 0;
        break;
      case "file_progress":
        k.bytesDownloaded = S.downloaded, k.bytesTotal = S.total;
        break;
      case "file_complete":
        k.completedFiles.push({
          filename: S.filename,
          success: S.success,
          error: S.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        k.nodesToInstall = S.nodes_to_install || [], S.download_results && (k.completedFiles = S.download_results), k.phase = "complete";
        break;
      case "error":
        k.error = S.message, k.phase = "error", p.value = S.message;
        break;
    }
  }
  function C(A, S) {
    const { addToQueue: P } = os(), J = S.filter((F) => F.url && F.target_path).map((F) => ({
      workflow: A,
      filename: F.filename,
      url: F.url,
      targetPath: F.target_path,
      size: F.size || 0,
      type: "model"
    }));
    return J.length > 0 && P(J), J.length;
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
    applyResolutionWithProgress: R,
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
        Re(v.$slots, "default", {}, void 0, !0)
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
    const c = t, n = B(() => c.confidence >= 0.9 ? "high" : c.confidence >= 0.7 ? "medium" : "low"), i = B(() => `confidence-${n.value}`), f = B(() => c.showPercentage ? `${Math.round(c.confidence * 100)}%` : n.value.charAt(0).toUpperCase() + n.value.slice(1));
    return (p, u) => (s(), o("span", {
      class: pe(["confidence-badge", i.value, t.size])
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
    const p = B(() => !!n.choice);
    B(() => {
      var d;
      return (d = n.choice) == null ? void 0 : d.action;
    }), B(() => {
      var d;
      return (d = n.choice) == null ? void 0 : d.package_id;
    });
    const u = B(() => {
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
          w(he, {
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
              class: pe(["option-card", { selected: t.selectedOptionIndex === k }]),
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
            w(he, {
              variant: "secondary",
              size: "sm",
              onClick: v[1] || (v[1] = (y) => i("search"))
            }, {
              default: l(() => [...v[9] || (v[9] = [
                g(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            w(he, {
              variant: "secondary",
              size: "sm",
              onClick: v[2] || (v[2] = (y) => i("manual-entry"))
            }, {
              default: l(() => [...v[10] || (v[10] = [
                g(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            w(he, {
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
            w(he, {
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
            w(he, {
              variant: "secondary",
              size: "sm",
              onClick: v[5] || (v[5] = (y) => i("manual-entry"))
            }, {
              default: l(() => [...v[16] || (v[16] = [
                g(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            w(he, {
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
          n[1] || (n[1] = xt((i) => c.$emit("enter"), ["enter"])),
          n[2] || (n[2] = xt((i) => c.$emit("escape"), ["escape"]))
        ]
      }, null, 42, rr),
      t.error ? (s(), o("span", dr, a(t.error), 1)) : r("", !0)
    ], 2));
  }
}), yt = /* @__PURE__ */ ae(cr, [["__scopeId", "data-v-9ba02cdc"]]), ur = { class: "node-resolution-step" }, mr = {
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
    function R() {
      T.value && L(), T.value = !1;
    }
    const $ = B(() => n.nodes[p.value]), C = B(() => n.nodes.filter((me) => n.nodeChoices.has(me.node_type)).length), A = B(() => $.value ? _.value.get($.value.node_type) || [] : []), S = B(() => $.value ? b.value.has($.value.node_type) : !1);
    St($, async (me) => {
      var we;
      me && ((we = me.options) != null && we.length || _.value.has(me.node_type) || b.value.has(me.node_type) || n.nodeChoices.has(me.node_type) || await P(me.node_type));
    }, { immediate: !0 });
    async function P(me) {
      b.value.add(me);
      try {
        const we = await f(me, 5);
        _.value.set(me, we);
      } catch {
        _.value.set(me, []);
      } finally {
        b.value.delete(me);
      }
    }
    const J = B(() => n.autoResolvedPackages.filter((me) => !n.skippedPackages.has(me.package_id)).length);
    function F(me) {
      return n.skippedPackages.has(me);
    }
    function G(me) {
      i("package-skip", me);
    }
    const x = B(() => {
      var we;
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
      return (we = $.value.options) != null && we.length ? "ambiguous" : "not-found";
    }), D = B(() => {
      var we;
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
      return (we = $.value.options) != null && we.length ? `${$.value.options.length} matches` : "Not Found";
    });
    function O(me) {
      me >= 0 && me < n.nodes.length && (p.value = me);
    }
    function re() {
      $.value && i("mark-optional", $.value.node_type);
    }
    function se() {
      $.value && i("skip", $.value.node_type);
    }
    function X(me) {
      $.value && i("option-selected", $.value.node_type, me);
    }
    function ue() {
      $.value && i("clear-choice", $.value.node_type);
    }
    function Y() {
      $.value && (d.value = $.value.node_type, y.value = A.value, u.value = !0, ke(d.value));
    }
    function z() {
      v.value = "", m.value = !0;
    }
    function L() {
      u.value = !1, d.value = "", y.value = [];
    }
    function I() {
      m.value = !1, v.value = "";
    }
    let ie = null;
    function Z() {
      ie && clearTimeout(ie), ie = setTimeout(() => {
        ke(d.value);
      }, 300);
    }
    async function ke(me) {
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
    function Ce(me) {
      $.value && (i("manual-entry", $.value.node_type, me.package_id), L());
    }
    function Te(me) {
      $.value && i("manual-entry", $.value.node_type, me.package_id);
    }
    function ze() {
      !$.value || !v.value.trim() || (i("manual-entry", $.value.node_type, v.value.trim()), I());
    }
    return (me, we) => {
      var Pe, Q;
      return s(), o("div", ur, [
        t.autoResolvedPackages.length > 0 ? (s(), o("div", mr, [
          e("div", vr, [
            we[6] || (we[6] = e("div", { class: "section-info" }, [
              e("h4", { class: "section-title" }, "Packages to Install"),
              e("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            e("span", fr, a(J.value) + "/" + a(t.autoResolvedPackages.length) + " to install", 1)
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
                F(le.package_id) ? (s(), o("span", br, " SKIPPED ")) : (s(), o("span", kr, " WILL INSTALL ")),
                e("button", {
                  class: "toggle-skip-btn",
                  onClick: (ve) => G(le.package_id)
                }, a(F(le.package_id) ? "Include" : "Skip"), 9, _r)
              ])
            ]))), 128))
          ])
        ])) : r("", !0),
        t.autoResolvedPackages.length > 0 && t.nodes.length > 0 ? (s(), o("div", $r)) : r("", !0),
        t.nodes.length > 0 ? (s(), o(W, { key: 2 }, [
          e("div", Cr, [
            we[7] || (we[7] = e("div", { class: "step-info" }, [
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
            onPrev: we[0] || (we[0] = (le) => O(p.value - 1)),
            onNext: we[1] || (we[1] = (le) => O(p.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : r("", !0),
          $.value ? (s(), o("div", Sr, [
            w(Qi, {
              "node-type": $.value.node_type,
              "has-multiple-options": !!((Pe = $.value.options) != null && Pe.length),
              options: $.value.options,
              choice: (Q = t.nodeChoices) == null ? void 0 : Q.get($.value.node_type),
              status: x.value,
              "status-label": D.value,
              "search-results": A.value,
              "is-searching": S.value,
              onMarkOptional: re,
              onSkip: se,
              onManualEntry: z,
              onSearch: Y,
              onOptionSelected: X,
              onClearChoice: ue,
              onSearchResultSelected: Te
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching"])
          ])) : r("", !0)
        ], 64)) : r("", !0),
        t.nodes.length === 0 && t.autoResolvedPackages.length === 0 ? (s(), o("div", Ir, [...we[8] || (we[8] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])) : r("", !0),
        (s(), M(Xe, { to: "body" }, [
          u.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: we[4] || (we[4] = Be((le) => T.value = !0, ["self"])),
            onMouseup: Be(R, ["self"])
          }, [
            e("div", {
              class: "node-search-modal",
              onMousedown: we[3] || (we[3] = (le) => T.value = !1)
            }, [
              e("div", { class: "node-modal-header" }, [
                we[9] || (we[9] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: L
                }, "✕")
              ]),
              e("div", Er, [
                w(yt, {
                  modelValue: d.value,
                  "onUpdate:modelValue": we[2] || (we[2] = (le) => d.value = le),
                  placeholder: "Search by node type, package name...",
                  onInput: Z
                }, null, 8, ["modelValue"]),
                e("div", Pr, [
                  y.value.length > 0 ? (s(), o("div", Mr, [
                    (s(!0), o(W, null, ne(y.value, (le) => (s(), o("div", {
                      key: le.package_id,
                      class: "node-search-result-item",
                      onClick: (ve) => Ce(le)
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
        (s(), M(Xe, { to: "body" }, [
          m.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: Be(I, ["self"])
          }, [
            e("div", Or, [
              e("div", { class: "node-modal-header" }, [
                we[10] || (we[10] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: I
                }, "✕")
              ]),
              e("div", Ar, [
                w(yt, {
                  modelValue: v.value,
                  "onUpdate:modelValue": we[5] || (we[5] = (le) => v.value = le),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", Br, [
                  w(he, {
                    variant: "secondary",
                    onClick: I
                  }, {
                    default: l(() => [...we[11] || (we[11] = [
                      g("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  w(he, {
                    variant: "primary",
                    disabled: !v.value.trim(),
                    onClick: ze
                  }, {
                    default: l(() => [...we[12] || (we[12] = [
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
    const n = t, i = c, f = B(() => !!n.choice);
    B(() => {
      var d;
      return (d = n.choice) == null ? void 0 : d.action;
    }), B(() => {
      var d, v;
      return ((v = (d = n.choice) == null ? void 0 : d.selected_model) == null ? void 0 : v.filename) || "selected";
    });
    const p = B(() => {
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
          w(he, {
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
            w(he, {
              variant: "ghost",
              size: "sm",
              onClick: v[1] || (v[1] = (y) => i("search"))
            }, {
              default: l(() => [...v[9] || (v[9] = [
                g(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            w(he, {
              variant: "ghost",
              size: "sm",
              onClick: v[2] || (v[2] = (y) => i("download-url"))
            }, {
              default: l(() => [...v[10] || (v[10] = [
                g(" Download URL ", -1)
              ])]),
              _: 1
            }),
            w(he, {
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
            w(he, {
              variant: "primary",
              size: "sm",
              onClick: v[4] || (v[4] = (y) => i("search"))
            }, {
              default: l(() => [...v[13] || (v[13] = [
                g(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            w(he, {
              variant: "secondary",
              size: "sm",
              onClick: v[5] || (v[5] = (y) => i("download-url"))
            }, {
              default: l(() => [...v[14] || (v[14] = [
                g(" Download URL ", -1)
              ])]),
              _: 1
            }),
            w(he, {
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
      var I;
      return L && ((I = n[L]) == null ? void 0 : I[0]) || null;
    }
    const f = t, p = c, u = h(0), m = h(!1), d = h(!1), v = h(""), y = h(""), k = h(""), _ = h([]), b = h(!1), T = B(() => f.models[u.value]), R = B(() => f.models.some((L) => L.is_download_intent)), $ = B(() => f.models.filter(
      (L) => f.modelChoices.has(L.filename) || L.is_download_intent
    ).length), C = B(() => {
      var I;
      if (!T.value) return "";
      const L = i((I = T.value.reference) == null ? void 0 : I.node_type);
      return L ? `${L}/${T.value.filename}` : "";
    }), A = B(() => {
      var I;
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
      return T.value.is_download_intent ? "download" : (I = T.value.options) != null && I.length ? "ambiguous" : "not-found";
    }), S = B(() => {
      var I, ie;
      if (!T.value) return;
      const L = f.modelChoices.get(T.value.filename);
      if (L)
        switch (L.action) {
          case "select":
            return (I = L.selected_model) != null && I.filename ? `→ ${L.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return T.value.is_download_intent ? "Pending Download" : (ie = T.value.options) != null && ie.length ? `${T.value.options.length} matches` : "Not Found";
    });
    function P(L) {
      L >= 0 && L < f.models.length && (u.value = L);
    }
    function J() {
      T.value && p("mark-optional", T.value.filename);
    }
    function F() {
      T.value && p("skip", T.value.filename);
    }
    function G(L) {
      T.value && p("option-selected", T.value.filename, L);
    }
    function x() {
      T.value && p("clear-choice", T.value.filename);
    }
    function D() {
      T.value && (v.value = T.value.filename, m.value = !0);
    }
    function O() {
      T.value && (y.value = T.value.download_source || "", k.value = T.value.target_path || C.value, d.value = !0);
    }
    function re() {
      m.value = !1, v.value = "", _.value = [];
    }
    function se() {
      d.value = !1, y.value = "", k.value = "";
    }
    function X() {
      b.value = !0, setTimeout(() => {
        b.value = !1;
      }, 300);
    }
    function ue(L) {
      T.value && re();
    }
    function Y() {
      !T.value || !y.value.trim() || (p("download-url", T.value.filename, y.value.trim(), k.value.trim() || void 0), se());
    }
    function z(L) {
      if (!L) return "Unknown";
      const I = L / (1024 * 1024 * 1024);
      return I >= 1 ? `${I.toFixed(2)} GB` : `${(L / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (L, I) => {
      var ie, Z, ke;
      return s(), o("div", dd, [
        e("div", cd, [
          e("div", ud, [
            e("h3", md, a(R.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", vd, a(R.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", fd, a($.value) + "/" + a(t.models.length) + " resolved", 1)
        ]),
        T.value ? (s(), M(Ks, {
          key: 0,
          "item-name": T.value.filename,
          "current-index": u.value,
          "total-items": t.models.length,
          onPrev: I[0] || (I[0] = (Ce) => P(u.value - 1)),
          onNext: I[1] || (I[1] = (Ce) => P(u.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : r("", !0),
        T.value ? (s(), o("div", pd, [
          w(rd, {
            filename: T.value.filename,
            "node-type": ((ie = T.value.reference) == null ? void 0 : ie.node_type) || "Unknown",
            "has-multiple-options": !!((Z = T.value.options) != null && Z.length),
            options: T.value.options,
            choice: (ke = t.modelChoices) == null ? void 0 : ke.get(T.value.filename),
            status: A.value,
            "status-label": S.value,
            onMarkOptional: J,
            onSkip: F,
            onDownloadUrl: O,
            onSearch: D,
            onOptionSelected: G,
            onClearChoice: x
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (s(), o("div", gd, [...I[5] || (I[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (s(), M(Xe, { to: "body" }, [
          m.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: Be(re, ["self"])
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
                w(yt, {
                  modelValue: v.value,
                  "onUpdate:modelValue": I[2] || (I[2] = (Ce) => v.value = Ce),
                  placeholder: "Search by filename, category...",
                  onInput: X
                }, null, 8, ["modelValue"]),
                _.value.length > 0 ? (s(), o("div", wd, [
                  (s(!0), o(W, null, ne(_.value, (Ce) => (s(), o("div", {
                    key: Ce.hash,
                    class: "model-search-result-item",
                    onClick: (Te) => ue()
                  }, [
                    e("div", bd, [
                      e("code", _d, a(Ce.filename), 1)
                    ]),
                    e("div", $d, [
                      e("span", Cd, a(Ce.category), 1),
                      e("span", xd, a(z(Ce.size)), 1)
                    ]),
                    Ce.relative_path ? (s(), o("div", Sd, a(Ce.relative_path), 1)) : r("", !0)
                  ], 8, kd))), 128))
                ])) : v.value && !b.value ? (s(), o("div", Id, ' No models found matching "' + a(v.value) + '" ', 1)) : r("", !0),
                b.value ? (s(), o("div", Ed, "Searching...")) : r("", !0)
              ])
            ])
          ])) : r("", !0)
        ])),
        (s(), M(Xe, { to: "body" }, [
          d.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: Be(se, ["self"])
          }, [
            e("div", Pd, [
              e("div", { class: "model-modal-header" }, [
                I[7] || (I[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: se
                }, "✕")
              ]),
              e("div", Md, [
                e("div", Rd, [
                  I[8] || (I[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  w(yt, {
                    modelValue: y.value,
                    "onUpdate:modelValue": I[3] || (I[3] = (Ce) => y.value = Ce),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", Td, [
                  I[9] || (I[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  w(yt, {
                    modelValue: k.value,
                    "onUpdate:modelValue": I[4] || (I[4] = (Ce) => k.value = Ce),
                    placeholder: C.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", Dd, [
                  w(he, {
                    variant: "secondary",
                    onClick: se
                  }, {
                    default: l(() => [...I[10] || (I[10] = [
                      g("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  w(he, {
                    variant: "primary",
                    disabled: !y.value.trim() || !k.value.trim(),
                    onClick: Y
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
    const c = t, n = B(() => {
      var v, y;
      const m = ((v = c.progress.nodeInstallProgress) == null ? void 0 : v.totalNodes) || c.progress.nodesToInstall.length;
      if (!m) return 0;
      const d = ((y = c.progress.nodeInstallProgress) == null ? void 0 : y.completedNodes.length) ?? 0;
      return Math.round(d / m * 100);
    }), i = B(() => {
      var m;
      return ((m = c.progress.nodeInstallProgress) == null ? void 0 : m.completedNodes.filter((d) => !d.success)) || [];
    }), f = B(() => i.value.length > 0);
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
                style: Rt({ width: `${n.value}%` })
              }, null, 4)
            ]),
            e("span", Vd, a(((k = t.progress.nodeInstallProgress) == null ? void 0 : k.completedNodes.length) ?? 0) + " / " + a(((_ = t.progress.nodeInstallProgress) == null ? void 0 : _.totalNodes) ?? t.progress.nodesToInstall.length), 1)
          ]),
          e("div", Wd, [
            (s(!0), o(W, null, ne(t.progress.nodesToInstall, (b, T) => (s(), o("div", {
              key: b,
              class: pe(["install-item", p(b, T)])
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
    const n = t, i = c, { analyzeWorkflow: f, applyResolution: p, installNodes: u, queueModelDownloads: m, progress: d, resetProgress: v } = Hs(), { loadPendingDownloads: y } = os(), { openFileLocation: k } = He(), _ = h(null), b = h(!1), T = h(!1), R = h(null), $ = h("analysis"), C = h([]), A = h(/* @__PURE__ */ new Map()), S = h(/* @__PURE__ */ new Map()), P = h(/* @__PURE__ */ new Set()), J = B(() => {
      const q = [
        { id: "analysis", label: "Analysis" }
      ];
      return (G.value || O.value) && q.push({ id: "nodes", label: "Nodes" }), (x.value || D.value) && q.push({ id: "models", label: "Models" }), q.push({ id: "review", label: "Review" }), $.value === "applying" && q.push({ id: "applying", label: "Applying" }), q;
    }), F = B(() => _.value ? _.value.stats.needs_user_input : !1), G = B(() => _.value ? _.value.nodes.unresolved.length > 0 || _.value.nodes.ambiguous.length > 0 : !1), x = B(() => _.value ? _.value.models.unresolved.length > 0 || _.value.models.ambiguous.length > 0 : !1), D = B(() => _.value ? _.value.stats.download_intents > 0 : !1), O = B(() => _.value ? _.value.stats.nodes_needing_installation > 0 : !1), re = B(() => _.value ? _.value.nodes.resolved.length : 0), se = B(() => _.value ? _.value.models.resolved.filter((q) => q.has_category_mismatch) : []), X = B(() => se.value.length > 0), ue = B(() => {
      if (!_.value) return [];
      const q = _.value.nodes.resolved.filter((V) => !V.is_installed), E = /* @__PURE__ */ new Set();
      return q.filter((V) => E.has(V.package.package_id) ? !1 : (E.add(V.package.package_id), !0));
    }), Y = B(() => {
      if (!_.value) return [];
      const q = _.value.nodes.resolved.filter((V) => !V.is_installed), E = /* @__PURE__ */ new Map();
      for (const V of q) {
        const ee = E.get(V.package.package_id);
        ee ? ee.node_types_count++ : E.set(V.package.package_id, {
          package_id: V.package.package_id,
          title: V.package.title,
          node_types_count: 1
        });
      }
      return Array.from(E.values());
    }), z = B(() => ue.value.filter((q) => !P.value.has(q.package.package_id))), L = B(() => _.value ? _.value.models.resolved.filter((q) => q.match_type === "download_intent").map((q) => ({
      filename: q.reference.widget_value,
      reference: q.reference,
      is_download_intent: !0,
      resolved_model: q.model,
      download_source: q.download_source,
      target_path: q.target_path
    })) : []), I = B(() => {
      if (!_.value) return [];
      const q = _.value.nodes.unresolved.map((V) => ({
        node_type: V.reference.node_type,
        reason: V.reason,
        is_unresolved: !0,
        options: void 0
      })), E = _.value.nodes.ambiguous.map((V) => ({
        node_type: V.reference.node_type,
        has_multiple_options: !0,
        options: V.options.map((ee) => ({
          package_id: ee.package.package_id,
          title: ee.package.title,
          match_confidence: ee.match_confidence,
          match_type: ee.match_type,
          is_installed: ee.is_installed
        }))
      }));
      return [...q, ...E];
    }), ie = B(() => {
      if (!_.value) return [];
      const q = _.value.models.unresolved.map((V) => ({
        filename: V.reference.widget_value,
        reference: V.reference,
        reason: V.reason,
        is_unresolved: !0,
        options: void 0
      })), E = _.value.models.ambiguous.map((V) => ({
        filename: V.reference.widget_value,
        reference: V.reference,
        has_multiple_options: !0,
        options: V.options.map((ee) => ({
          model: ee.model,
          match_confidence: ee.match_confidence,
          match_type: ee.match_type,
          has_download_source: ee.has_download_source
        }))
      }));
      return [...q, ...E];
    }), Z = B(() => {
      const q = ie.value, E = L.value.map((V) => ({
        filename: V.filename,
        reference: V.reference,
        is_download_intent: !0,
        resolved_model: V.resolved_model,
        download_source: V.download_source,
        target_path: V.target_path,
        options: void 0
      }));
      return [...q, ...E];
    }), ke = B(() => {
      let q = z.value.length;
      for (const E of A.value.values())
        E.action === "install" && q++;
      for (const E of S.value.values())
        E.action === "select" && q++;
      return q;
    }), Ce = B(() => {
      let q = 0;
      for (const E of S.value.values())
        E.action === "download" && q++;
      return q;
    }), Te = B(() => {
      let q = 0;
      for (const E of A.value.values())
        E.action === "optional" && q++;
      for (const E of S.value.values())
        E.action === "optional" && q++;
      return q;
    }), ze = B(() => {
      let q = P.value.size;
      for (const E of A.value.values())
        E.action === "skip" && q++;
      for (const E of S.value.values())
        E.action === "skip" && q++;
      for (const E of I.value)
        A.value.has(E.node_type) || q++;
      for (const E of ie.value)
        S.value.has(E.filename) || q++;
      return q;
    }), me = B(() => {
      const q = {};
      if (q.analysis = { resolved: 1, total: 1 }, G.value) {
        const E = I.value.length, V = I.value.filter(
          (ee) => A.value.has(ee.node_type)
        ).length;
        q.nodes = { resolved: V, total: E };
      }
      if (x.value || D.value) {
        const E = Z.value.length, V = Z.value.filter(
          (ee) => S.value.has(ee.filename) || ee.is_download_intent
        ).length;
        q.models = { resolved: V, total: E };
      }
      if (q.review = { resolved: 1, total: 1 }, $.value === "applying") {
        const E = d.totalFiles || 1, V = d.completedFiles.length;
        q.applying = { resolved: V, total: E };
      }
      return q;
    });
    function we(q) {
      $.value = q;
    }
    function Pe() {
      const q = J.value.findIndex((E) => E.id === $.value);
      q > 0 && ($.value = J.value[q - 1].id);
    }
    function Q() {
      const q = J.value.findIndex((E) => E.id === $.value);
      q < J.value.length - 1 && ($.value = J.value[q + 1].id);
    }
    async function le() {
      b.value = !0, R.value = null;
      try {
        _.value = await f(n.workflowName);
      } catch (q) {
        R.value = q instanceof Error ? q.message : "Failed to analyze workflow";
      } finally {
        b.value = !1;
      }
    }
    function ve() {
      C.value.includes("analysis") || C.value.push("analysis"), G.value || O.value ? $.value = "nodes" : x.value || D.value ? $.value = "models" : $.value = "review";
    }
    function Ne(q) {
      A.value.set(q, { action: "optional" });
    }
    function nt(q) {
      A.value.set(q, { action: "skip" });
    }
    function at(q, E) {
      var ee;
      const V = I.value.find((be) => be.node_type === q);
      (ee = V == null ? void 0 : V.options) != null && ee[E] && A.value.set(q, {
        action: "install",
        package_id: V.options[E].package_id
      });
    }
    function Me(q, E) {
      A.value.set(q, {
        action: "install",
        package_id: E
      });
    }
    function Je(q) {
      A.value.delete(q);
    }
    function Ke(q) {
      P.value.has(q) ? P.value.delete(q) : P.value.add(q);
    }
    function qe(q) {
      S.value.set(q, { action: "optional" });
    }
    function mt(q) {
      S.value.set(q, { action: "skip" });
    }
    function _e(q, E) {
      var ee;
      const V = ie.value.find((be) => be.filename === q);
      (ee = V == null ? void 0 : V.options) != null && ee[E] && S.value.set(q, {
        action: "select",
        selected_model: V.options[E].model
      });
    }
    function je(q, E, V) {
      S.value.set(q, {
        action: "download",
        url: E,
        target_path: V
      });
    }
    function Ze(q) {
      S.value.delete(q);
    }
    async function lt(q) {
      try {
        await k(q);
      } catch (E) {
        R.value = E instanceof Error ? E.message : "Failed to open file location";
      }
    }
    async function Le() {
      var q;
      T.value = !0, R.value = null, v(), d.phase = "resolving", $.value = "applying";
      try {
        const E = await p(n.workflowName, A.value, S.value, P.value);
        E.models_to_download && E.models_to_download.length > 0 && m(n.workflowName, E.models_to_download);
        const V = [
          ...E.nodes_to_install || [],
          ...z.value.map((be) => be.package.package_id)
        ];
        d.nodesToInstall = [...new Set(V)], d.nodesToInstall.length > 0 && await u(n.workflowName), d.phase = "complete", await y();
        const ee = d.installError || ((q = d.nodeInstallProgress) == null ? void 0 : q.completedNodes.some((be) => !be.success));
        !d.needsRestart && !ee && setTimeout(() => {
          i("refresh"), i("install"), i("close");
        }, 1500);
      } catch (E) {
        R.value = E instanceof Error ? E.message : "Failed to apply resolution", d.error = R.value, d.phase = "error";
      } finally {
        T.value = !1;
      }
    }
    function ge() {
      i("refresh"), i("restart"), i("close");
    }
    async function K() {
      var E;
      const q = ((E = d.nodeInstallProgress) == null ? void 0 : E.completedNodes.filter((V) => !V.success).map((V) => V.node_id)) || [];
      if (q.length !== 0) {
        d.phase = "installing", d.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: q.length
        }, d.nodesToInstall = q, d.nodesInstalled = [], d.installError = void 0;
        try {
          await u(n.workflowName), d.phase = "complete";
        } catch (V) {
          d.error = V instanceof Error ? V.message : "Retry failed", d.phase = "error";
        }
      }
    }
    return Ve(le), (q, E) => (s(), M(ot, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: b.value,
      error: R.value || void 0,
      "fixed-height": !0,
      onClose: E[1] || (E[1] = (V) => i("close"))
    }, {
      body: l(() => [
        b.value && !_.value ? (s(), o("div", vc, [...E[2] || (E[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : _.value ? (s(), o("div", fc, [
          w(bi, {
            steps: J.value,
            "current-step": $.value,
            "completed-steps": C.value,
            "step-stats": me.value,
            onStepChange: we
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
                    re.value > 0 ? (s(), o("div", _c, [
                      E[4] || (E[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", $c, a(re.value), 1),
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
                    X.value ? (s(), o("div", Uc, [
                      E[17] || (E[17] = e("span", { class: "stat-icon" }, "⚠", -1)),
                      e("span", Nc, a(se.value.length), 1),
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
              F.value ? (s(), o("div", Vc, [
                E[24] || (E[24] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Wc, a(I.value.length + ie.value.length) + " items need your input", 1)
              ])) : O.value ? (s(), o("div", Gc, [
                E[25] || (E[25] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", jc, a(_.value.stats.packages_needing_installation) + " package" + a(_.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + a(_.value.stats.nodes_needing_installation) + " node type" + a(_.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + a(D.value ? `, ${_.value.stats.download_intents} model${_.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : D.value ? (s(), o("div", Hc, [
                E[26] || (E[26] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Kc, a(_.value.stats.download_intents) + " model" + a(_.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : X.value ? (s(), o("div", qc, [
                E[27] || (E[27] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Yc, a(se.value.length) + " model" + a(se.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (s(), o("div", Jc, [...E[28] || (E[28] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              X.value ? (s(), o("div", Xc, [
                E[31] || (E[31] = e("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                e("div", Qc, [
                  (s(!0), o(W, null, ne(se.value, (V) => {
                    var ee, be;
                    return s(), o("div", {
                      key: V.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      e("code", Zc, a(V.actual_category) + "/" + a((ee = V.model) == null ? void 0 : ee.filename), 1),
                      E[30] || (E[30] = e("span", { class: "mismatch-arrow" }, "→", -1)),
                      e("code", eu, a((be = V.expected_categories) == null ? void 0 : be[0]) + "/", 1),
                      V.file_path ? (s(), M(he, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (We) => lt(V.file_path)
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
            nodes: I.value,
            "node-choices": A.value,
            "auto-resolved-packages": Y.value,
            "skipped-packages": P.value,
            onMarkOptional: Ne,
            onSkip: nt,
            onOptionSelected: at,
            onManualEntry: Me,
            onClearChoice: Je,
            onPackageSkip: Ke
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : r("", !0),
          $.value === "models" ? (s(), M(zd, {
            key: 2,
            models: Z.value,
            "model-choices": S.value,
            onMarkOptional: qe,
            onSkip: mt,
            onOptionSelected: _e,
            onDownloadUrl: je,
            onClearChoice: Ze
          }, null, 8, ["models", "model-choices"])) : r("", !0),
          $.value === "review" ? (s(), o("div", tu, [
            e("div", su, [
              E[36] || (E[36] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", ou, [
                e("div", nu, [
                  e("span", au, a(ke.value), 1),
                  E[32] || (E[32] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", lu, [
                  e("span", iu, a(Ce.value), 1),
                  E[33] || (E[33] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", ru, [
                  e("span", du, a(Te.value), 1),
                  E[34] || (E[34] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", cu, [
                  e("span", uu, a(ze.value), 1),
                  E[35] || (E[35] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              Y.value.length > 0 ? (s(), o("div", mu, [
                e("h4", vu, "Node Packages (" + a(Y.value.length) + ")", 1),
                e("div", fu, [
                  (s(!0), o(W, null, ne(Y.value, (V) => (s(), o("div", {
                    key: V.package_id,
                    class: "review-item"
                  }, [
                    e("code", pu, a(V.package_id), 1),
                    e("div", gu, [
                      P.value.has(V.package_id) ? (s(), o("span", yu, "Skipped")) : (s(), o("span", hu, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : r("", !0),
              I.value.length > 0 ? (s(), o("div", wu, [
                e("h4", ku, "Node Choices (" + a(I.value.length) + ")", 1),
                e("div", bu, [
                  (s(!0), o(W, null, ne(I.value, (V) => {
                    var ee, be, We, vt;
                    return s(), o("div", {
                      key: V.node_type,
                      class: "review-item"
                    }, [
                      e("code", _u, a(V.node_type), 1),
                      e("div", $u, [
                        A.value.has(V.node_type) ? (s(), o(W, { key: 0 }, [
                          ((ee = A.value.get(V.node_type)) == null ? void 0 : ee.action) === "install" ? (s(), o("span", Cu, a((be = A.value.get(V.node_type)) == null ? void 0 : be.package_id), 1)) : ((We = A.value.get(V.node_type)) == null ? void 0 : We.action) === "optional" ? (s(), o("span", xu, " Optional ")) : ((vt = A.value.get(V.node_type)) == null ? void 0 : vt.action) === "skip" ? (s(), o("span", Su, " Skip ")) : r("", !0)
                        ], 64)) : (s(), o("span", Iu, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : r("", !0),
              Z.value.length > 0 ? (s(), o("div", Eu, [
                e("h4", Pu, "Models (" + a(Z.value.length) + ")", 1),
                e("div", Mu, [
                  (s(!0), o(W, null, ne(Z.value, (V) => {
                    var ee, be, We, vt, it, Lt, ft;
                    return s(), o("div", {
                      key: V.filename,
                      class: "review-item"
                    }, [
                      e("code", Ru, a(V.filename), 1),
                      e("div", Tu, [
                        S.value.has(V.filename) ? (s(), o(W, { key: 0 }, [
                          ((ee = S.value.get(V.filename)) == null ? void 0 : ee.action) === "select" ? (s(), o("span", Du, a((We = (be = S.value.get(V.filename)) == null ? void 0 : be.selected_model) == null ? void 0 : We.filename), 1)) : ((vt = S.value.get(V.filename)) == null ? void 0 : vt.action) === "download" ? (s(), o("span", Lu, " Download ")) : ((it = S.value.get(V.filename)) == null ? void 0 : it.action) === "optional" ? (s(), o("span", zu, " Optional ")) : ((Lt = S.value.get(V.filename)) == null ? void 0 : Lt.action) === "skip" ? (s(), o("span", Uu, " Skip ")) : ((ft = S.value.get(V.filename)) == null ? void 0 : ft.action) === "cancel_download" ? (s(), o("span", Nu, " Cancel Download ")) : r("", !0)
                        ], 64)) : V.is_download_intent ? (s(), o("span", Ou, " Pending Download ")) : (s(), o("span", Au, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : r("", !0),
              ue.value.length === 0 && I.value.length === 0 && Z.value.length === 0 ? (s(), o("div", Bu, " No dependencies need resolution. ")) : r("", !0)
            ])
          ])) : r("", !0),
          $.value === "applying" ? (s(), M(mc, {
            key: 4,
            progress: Ie(d),
            onRestart: ge,
            onRetryFailed: K
          }, null, 8, ["progress"])) : r("", !0)
        ])) : r("", !0)
      ]),
      footer: l(() => [
        $.value !== "analysis" && $.value !== "applying" ? (s(), M(he, {
          key: 0,
          variant: "secondary",
          disabled: T.value,
          onClick: Pe
        }, {
          default: l(() => [...E[37] || (E[37] = [
            g(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : r("", !0),
        E[41] || (E[41] = e("div", { class: "footer-spacer" }, null, -1)),
        $.value !== "applying" || Ie(d).phase === "complete" || Ie(d).phase === "error" ? (s(), M(he, {
          key: 1,
          variant: "secondary",
          onClick: E[0] || (E[0] = (V) => i("close"))
        }, {
          default: l(() => [
            g(a(Ie(d).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : r("", !0),
        $.value === "analysis" ? (s(), M(he, {
          key: 2,
          variant: "primary",
          disabled: b.value,
          onClick: ve
        }, {
          default: l(() => [...E[38] || (E[38] = [
            g(" Continue ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : r("", !0),
        $.value === "nodes" ? (s(), M(he, {
          key: 3,
          variant: "primary",
          onClick: Q
        }, {
          default: l(() => [
            g(a(x.value || D.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : r("", !0),
        $.value === "models" ? (s(), M(he, {
          key: 4,
          variant: "primary",
          onClick: Q
        }, {
          default: l(() => [...E[39] || (E[39] = [
            g(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : r("", !0),
        $.value === "review" ? (s(), M(he, {
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
    return Ve(() => {
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
        onKeyup: xt(m, ["escape"])
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
      w(ut, {
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
        Re(u.$slots, "default", {}, void 0, !0)
      ])) : r("", !0)
    ]));
  }
}), Ae = /* @__PURE__ */ ae(Xu, [["__scopeId", "data-v-c48e33ed"]]), Qu = { class: "item-header" }, Zu = {
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
    const n = t, i = B(() => n.status ? `status-${n.status}` : "");
    return (f, p) => (s(), o("div", {
      class: pe(["item-card", { clickable: t.clickable, compact: t.compact }, i.value]),
      onClick: p[0] || (p[0] = (u) => t.clickable && f.$emit("click"))
    }, [
      e("div", Qu, [
        f.$slots.icon ? (s(), o("span", Zu, [
          Re(f.$slots, "icon", {}, void 0, !0)
        ])) : r("", !0),
        e("div", em, [
          f.$slots.title ? (s(), o("div", tm, [
            Re(f.$slots, "title", {}, void 0, !0)
          ])) : r("", !0),
          f.$slots.subtitle ? (s(), o("div", sm, [
            Re(f.$slots, "subtitle", {}, void 0, !0)
          ])) : r("", !0)
        ])
      ]),
      f.$slots.details ? (s(), o("div", om, [
        Re(f.$slots, "details", {}, void 0, !0)
      ])) : r("", !0),
      f.$slots.actions ? (s(), o("div", nm, [
        Re(f.$slots, "actions", {}, void 0, !0)
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
}), Tt = /* @__PURE__ */ ae(rm, [["__scopeId", "data-v-ad8436c9"]]), dm = { class: "error-state" }, cm = { class: "error-message" }, um = /* @__PURE__ */ oe({
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
      t.retry ? (s(), M(te, {
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
}), Dt = /* @__PURE__ */ ae(um, [["__scopeId", "data-v-5397be48"]]), mm = /* @__PURE__ */ oe({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: c, emit: n }) {
    const i = n, { getWorkflows: f } = He();
    Gs();
    const p = h([]), u = h(!1), m = h(null), d = h(""), v = h(!0), y = h(!1), k = h(!1), _ = h(!1), b = h(null), T = B(
      () => p.value.filter((z) => z.status === "broken")
    ), R = B(
      () => p.value.filter((z) => z.status === "new")
    ), $ = B(
      () => p.value.filter((z) => z.status === "modified")
    ), C = B(
      () => p.value.filter((z) => z.status === "synced")
    ), A = B(() => {
      if (!d.value.trim()) return p.value;
      const z = d.value.toLowerCase();
      return p.value.filter((L) => L.name.toLowerCase().includes(z));
    }), S = B(
      () => T.value.filter(
        (z) => !d.value.trim() || z.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), P = B(
      () => R.value.filter(
        (z) => !d.value.trim() || z.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), J = B(
      () => $.value.filter(
        (z) => !d.value.trim() || z.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), F = B(
      () => C.value.filter(
        (z) => !d.value.trim() || z.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), G = B(
      () => y.value ? F.value : F.value.slice(0, 5)
    );
    async function x(z = !1) {
      u.value = !0, m.value = null;
      try {
        p.value = await f(z);
      } catch (L) {
        m.value = L instanceof Error ? L.message : "Failed to load workflows";
      } finally {
        u.value = !1;
      }
    }
    c({ loadWorkflows: x });
    function D(z) {
      b.value = z, k.value = !0;
    }
    function O(z) {
      b.value = z, _.value = !0;
    }
    function re() {
      i("refresh");
    }
    async function se() {
      _.value = !1, await x(!0);
    }
    async function X() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function ue(z) {
      const L = [];
      return z.missing_nodes > 0 && L.push(`${z.missing_nodes} missing node${z.missing_nodes > 1 ? "s" : ""}`), z.missing_models > 0 && L.push(`${z.missing_models} missing model${z.missing_models > 1 ? "s" : ""}`), z.models_with_category_mismatch && z.models_with_category_mismatch > 0 && L.push(`${z.models_with_category_mismatch} model${z.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), z.pending_downloads && z.pending_downloads > 0 && L.push(`${z.pending_downloads} pending download${z.pending_downloads > 1 ? "s" : ""}`), L.length > 0 ? L.join(", ") : "Has issues";
    }
    function Y(z) {
      const L = z.sync_state === "new" ? "New" : z.sync_state === "modified" ? "Modified" : z.sync_state === "synced" ? "Synced" : z.sync_state;
      return z.has_path_sync_issues && z.models_needing_path_sync && z.models_needing_path_sync > 0 ? `${z.models_needing_path_sync} model path${z.models_needing_path_sync > 1 ? "s" : ""} need${z.models_needing_path_sync === 1 ? "s" : ""} sync` : L || "Unknown";
    }
    return Ve(x), (z, L) => (s(), o(W, null, [
      w(tt, null, {
        header: l(() => [
          w(st, { title: "WORKFLOWS" })
        ]),
        search: l(() => [
          w(Kt, {
            modelValue: d.value,
            "onUpdate:modelValue": L[0] || (L[0] = (I) => d.value = I),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          u.value ? (s(), M(Tt, {
            key: 0,
            message: "Loading workflows..."
          })) : m.value ? (s(), M(Dt, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: x
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            S.value.length ? (s(), M(Ae, {
              key: 0,
              title: "BROKEN",
              count: S.value.length
            }, {
              default: l(() => [
                (s(!0), o(W, null, ne(S.value, (I) => (s(), M(et, {
                  key: I.name,
                  status: "broken"
                }, {
                  icon: l(() => [...L[7] || (L[7] = [
                    g("⚠", -1)
                  ])]),
                  title: l(() => [
                    g(a(I.name), 1)
                  ]),
                  subtitle: l(() => [
                    g(a(ue(I)), 1)
                  ]),
                  actions: l(() => [
                    w(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ie) => O(I.name)
                    }, {
                      default: l(() => [...L[8] || (L[8] = [
                        g(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    w(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ie) => D(I.name)
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
            P.value.length ? (s(), M(Ae, {
              key: 1,
              title: "NEW",
              count: P.value.length
            }, {
              default: l(() => [
                (s(!0), o(W, null, ne(P.value, (I) => (s(), M(et, {
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
                    g(a(Y(I)), 1)
                  ]),
                  actions: l(() => [
                    w(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ie) => D(I.name)
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
            J.value.length ? (s(), M(Ae, {
              key: 2,
              title: "MODIFIED",
              count: J.value.length
            }, {
              default: l(() => [
                (s(!0), o(W, null, ne(J.value, (I) => (s(), M(et, {
                  key: I.name,
                  status: I.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: l(() => [...L[11] || (L[11] = [
                    g("⚡", -1)
                  ])]),
                  title: l(() => [
                    g(a(I.name), 1)
                  ]),
                  subtitle: l(() => [
                    g(a(Y(I)), 1)
                  ]),
                  actions: l(() => [
                    w(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ie) => D(I.name)
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
            F.value.length ? (s(), M(Ae, {
              key: 3,
              title: "SYNCED",
              count: F.value.length,
              collapsible: !0,
              "initially-expanded": v.value,
              onToggle: L[2] || (L[2] = (I) => v.value = I)
            }, {
              default: l(() => [
                (s(!0), o(W, null, ne(G.value, (I) => (s(), M(et, {
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
                    g(a(Y(I)), 1)
                  ]),
                  actions: l(() => [
                    w(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ie) => D(I.name)
                    }, {
                      default: l(() => [...L[13] || (L[13] = [
                        g(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !y.value && F.value.length > 5 ? (s(), M(te, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: L[1] || (L[1] = (I) => y.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: l(() => [
                    g(" View all " + a(F.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : r("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : r("", !0),
            A.value.length ? r("", !0) : (s(), M(wt, {
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
        onClose: L[3] || (L[3] = (I) => k.value = !1),
        onResolve: L[4] || (L[4] = (I) => O(b.value)),
        onRefresh: L[5] || (L[5] = (I) => i("refresh"))
      }, null, 8, ["workflow-name"])) : r("", !0),
      _.value && b.value ? (s(), M(Vu, {
        key: 1,
        "workflow-name": b.value,
        onClose: se,
        onInstall: re,
        onRefresh: L[6] || (L[6] = (I) => i("refresh")),
        onRestart: X
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
      class: pe(["summary-bar", t.variant])
    }, [
      Re(c.$slots, "default", {}, void 0, !0)
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
    const n = t, { getModelDetails: i, addModelSource: f, removeModelSource: p, openFileLocation: u } = He(), m = h(null), d = h(!0), v = h(null), y = h(""), k = h(!1), _ = h(null), b = h(null), T = h(null), R = h(null);
    let $ = null;
    function C(x, D = "success", O = 2e3) {
      $ && clearTimeout($), R.value = { message: x, type: D }, $ = setTimeout(() => {
        R.value = null;
      }, O);
    }
    function A(x) {
      if (!x) return "Unknown";
      const D = 1024 * 1024 * 1024, O = 1024 * 1024;
      return x >= D ? `${(x / D).toFixed(1)} GB` : x >= O ? `${(x / O).toFixed(0)} MB` : `${(x / 1024).toFixed(0)} KB`;
    }
    function S(x) {
      navigator.clipboard.writeText(x), C("Copied to clipboard!");
    }
    async function P(x) {
      try {
        await u(x), C("Opening file location...");
      } catch {
        C("Failed to open location", "error");
      }
    }
    async function J() {
      if (!(!y.value.trim() || !m.value)) {
        k.value = !0, b.value = null, T.value = null;
        try {
          await f(m.value.hash, y.value.trim()), T.value = "Source added successfully!", y.value = "", await G();
        } catch (x) {
          b.value = x instanceof Error ? x.message : "Failed to add source";
        } finally {
          k.value = !1;
        }
      }
    }
    async function F(x) {
      if (m.value) {
        _.value = x, b.value = null, T.value = null;
        try {
          await p(m.value.hash, x), C("Source removed"), await G();
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
      } catch (x) {
        v.value = x instanceof Error ? x.message : "Failed to load model details";
      } finally {
        d.value = !1;
      }
    }
    return Ve(G), (x, D) => {
      var O;
      return s(), o(W, null, [
        w(ot, {
          title: `Model Details: ${((O = m.value) == null ? void 0 : O.filename) || "Loading..."}`,
          size: "lg",
          loading: d.value,
          error: v.value,
          onClose: D[5] || (D[5] = (re) => x.$emit("close"))
        }, {
          body: l(() => {
            var re, se, X, ue;
            return [
              m.value ? (s(), o("div", pm, [
                e("section", gm, [
                  e("div", hm, [
                    D[6] || (D[6] = e("span", { class: "detail-label" }, "Hash:", -1)),
                    e("span", ym, a(m.value.hash || "Not computed"), 1),
                    m.value.hash ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: D[0] || (D[0] = (Y) => S(m.value.hash))
                    }, "Copy")) : r("", !0)
                  ]),
                  e("div", wm, [
                    D[7] || (D[7] = e("span", { class: "detail-label" }, "Blake3:", -1)),
                    e("span", km, a(m.value.blake3 || "Not computed"), 1),
                    m.value.blake3 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: D[1] || (D[1] = (Y) => S(m.value.blake3))
                    }, "Copy")) : r("", !0)
                  ]),
                  e("div", bm, [
                    D[8] || (D[8] = e("span", { class: "detail-label" }, "SHA256:", -1)),
                    e("span", _m, a(m.value.sha256 || "Not computed"), 1),
                    m.value.sha256 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: D[2] || (D[2] = (Y) => S(m.value.sha256))
                    }, "Copy")) : r("", !0)
                  ]),
                  e("div", $m, [
                    D[9] || (D[9] = e("span", { class: "detail-label" }, "Size:", -1)),
                    e("span", Cm, a(A(m.value.size)), 1)
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
                  e("h4", Mm, "Locations (" + a(((re = m.value.locations) == null ? void 0 : re.length) || 0) + ")", 1),
                  (se = m.value.locations) != null && se.length ? (s(), o("div", Rm, [
                    (s(!0), o(W, null, ne(m.value.locations, (Y, z) => (s(), o("div", {
                      key: z,
                      class: "location-item"
                    }, [
                      e("span", Tm, a(Y.path), 1),
                      Y.modified ? (s(), o("span", Dm, "Modified: " + a(Y.modified), 1)) : r("", !0),
                      Y.path ? (s(), o("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (L) => P(Y.path)
                      }, " Open File Location ", 8, Lm)) : r("", !0)
                    ]))), 128))
                  ])) : (s(), o("div", zm, "No locations found"))
                ]),
                e("section", Um, [
                  e("h4", Nm, "Download Sources (" + a(((X = m.value.sources) == null ? void 0 : X.length) || 0) + ")", 1),
                  (ue = m.value.sources) != null && ue.length ? (s(), o("div", Om, [
                    (s(!0), o(W, null, ne(m.value.sources, (Y, z) => (s(), o("div", {
                      key: z,
                      class: "source-item"
                    }, [
                      e("span", Am, a(Y.type) + ":", 1),
                      e("a", {
                        href: Y.url,
                        target: "_blank",
                        class: "source-url"
                      }, a(Y.url), 9, Bm),
                      e("button", {
                        class: "remove-source-btn",
                        disabled: _.value === Y.url,
                        onClick: (L) => F(Y.url)
                      }, a(_.value === Y.url ? "..." : "×"), 9, Fm)
                    ]))), 128))
                  ])) : (s(), o("div", Vm, " No download sources configured ")),
                  e("div", Wm, [
                    Ue(e("input", {
                      "onUpdate:modelValue": D[3] || (D[3] = (Y) => y.value = Y),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [Ot, y.value]
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      disabled: !y.value.trim() || k.value,
                      onClick: J
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
              onClick: D[4] || (D[4] = (re) => x.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (s(), M(Xe, { to: "body" }, [
          R.value ? (s(), o("div", {
            key: 0,
            class: pe(["toast", R.value.type])
          }, a(R.value.message), 3)) : r("", !0)
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
    const T = B(
      () => p.value.reduce((G, x) => G + (x.size || 0), 0)
    ), R = B(() => {
      if (!y.value.trim()) return p.value;
      const G = y.value.toLowerCase();
      return p.value.filter((x) => x.filename.toLowerCase().includes(G));
    }), $ = B(() => {
      if (!y.value.trim()) return u.value;
      const G = y.value.toLowerCase();
      return u.value.filter((x) => x.filename.toLowerCase().includes(G));
    }), C = B(() => {
      const G = {};
      for (const D of R.value) {
        const O = D.type || "other";
        G[O] || (G[O] = []), G[O].push(D);
      }
      const x = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(G).sort(([D], [O]) => {
        const re = x.indexOf(D), se = x.indexOf(O);
        return re >= 0 && se >= 0 ? re - se : re >= 0 ? -1 : se >= 0 ? 1 : D.localeCompare(O);
      }).map(([D, O]) => ({ type: D, models: O }));
    });
    function A(G) {
      if (!G) return "Unknown";
      const x = G / (1024 * 1024);
      return x >= 1024 ? `${(x / 1024).toFixed(1)} GB` : `${x.toFixed(0)} MB`;
    }
    function S(G) {
      _.value = G.hash || G.filename;
    }
    function P(G) {
      n("navigate", "model-index");
    }
    function J(G) {
      alert(`Download functionality not yet implemented for ${G}`);
    }
    async function F() {
      d.value = !0, v.value = null;
      try {
        const G = await i();
        p.value = G, u.value = [];
        const x = await f();
        m.value = x.environment || "production";
      } catch (G) {
        v.value = G instanceof Error ? G.message : "Failed to load models";
      } finally {
        d.value = !1;
      }
    }
    return Ve(F), (G, x) => (s(), o(W, null, [
      w(tt, null, {
        header: l(() => [
          w(st, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: x[0] || (x[0] = (D) => k.value = !0)
          })
        ]),
        search: l(() => [
          w(Kt, {
            modelValue: y.value,
            "onUpdate:modelValue": x[1] || (x[1] = (D) => y.value = D),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          d.value ? (s(), M(Tt, {
            key: 0,
            message: "Loading environment models..."
          })) : v.value ? (s(), M(Dt, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: F
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            p.value.length ? (s(), M(ns, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                g(" Total: " + a(p.value.length) + " models • " + a(A(T.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : r("", !0),
            (s(!0), o(W, null, ne(C.value, (D) => (s(), M(Ae, {
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
                  icon: l(() => [...x[4] || (x[4] = [
                    g("📦", -1)
                  ])]),
                  title: l(() => [
                    g(a(O.filename), 1)
                  ]),
                  subtitle: l(() => [
                    g(a(A(O.size)), 1)
                  ]),
                  details: l(() => [
                    w(Fe, {
                      label: "Used by:",
                      value: (O.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    w(Fe, {
                      label: "Path:",
                      value: O.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    w(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (re) => S(O)
                    }, {
                      default: l(() => [...x[5] || (x[5] = [
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
            $.value.length ? (s(), M(Ae, {
              key: 1,
              title: "MISSING",
              count: $.value.length
            }, {
              default: l(() => [
                (s(!0), o(W, null, ne($.value, (D) => (s(), M(et, {
                  key: D.filename,
                  status: "broken"
                }, {
                  icon: l(() => [...x[6] || (x[6] = [
                    g("⚠", -1)
                  ])]),
                  title: l(() => [
                    g(a(D.filename), 1)
                  ]),
                  subtitle: l(() => [...x[7] || (x[7] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: l(() => {
                    var O;
                    return [
                      w(Fe, {
                        label: "Required by:",
                        value: ((O = D.workflow_names) == null ? void 0 : O.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: l(() => [
                    w(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (O) => J(D.filename)
                    }, {
                      default: l(() => [...x[8] || (x[8] = [
                        g(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    w(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (O) => P(D.filename)
                    }, {
                      default: l(() => [...x[9] || (x[9] = [
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
            !R.value.length && !$.value.length ? (s(), M(wt, {
              key: 2,
              icon: "📭",
              message: y.value ? `No models match '${y.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : r("", !0)
          ], 64))
        ]),
        _: 1
      }),
      w(kt, {
        show: k.value,
        title: "About Environment Models",
        onClose: x[2] || (x[2] = (D) => k.value = !1)
      }, {
        content: l(() => [
          e("p", null, [
            x[10] || (x[10] = g(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + a(m.value) + '"', 1),
            x[11] || (x[11] = g(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: l(() => [
          w(te, {
            variant: "primary",
            onClick: b
          }, {
            default: l(() => [...x[12] || (x[12] = [
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
        onClose: x[3] || (x[3] = (D) => _.value = null)
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
    } = He(), { addToQueue: u } = os(), m = c, d = h([]), v = h(!1), y = h(!1), k = h(null), _ = h(""), b = h(!1), T = h(null), R = h(!1), $ = h(null), C = h(""), A = h(!1), S = h(!1), P = h(""), J = h(""), F = h(null), G = B(
      () => d.value.reduce((L, I) => L + (I.size || 0), 0)
    ), x = B(() => {
      if (!_.value.trim()) return d.value;
      const L = _.value.toLowerCase();
      return d.value.filter((I) => {
        const ie = I, Z = I.sha256 || ie.sha256_hash || "";
        return I.filename.toLowerCase().includes(L) || Z.toLowerCase().includes(L);
      });
    }), D = B(() => {
      const L = {};
      for (const ie of x.value) {
        const Z = ie.type || "other";
        L[Z] || (L[Z] = []), L[Z].push(ie);
      }
      const I = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(L).sort(([ie], [Z]) => {
        const ke = I.indexOf(ie), Ce = I.indexOf(Z);
        return ke >= 0 && Ce >= 0 ? ke - Ce : ke >= 0 ? -1 : Ce >= 0 ? 1 : ie.localeCompare(Z);
      }).map(([ie, Z]) => ({ type: ie, models: Z }));
    });
    function O(L) {
      if (!L) return "Unknown";
      const I = 1024 * 1024 * 1024, ie = 1024 * 1024;
      return L >= I ? `${(L / I).toFixed(1)} GB` : L >= ie ? `${(L / ie).toFixed(0)} MB` : `${(L / 1024).toFixed(0)} KB`;
    }
    function re(L) {
      T.value = L.hash || L.filename;
    }
    async function se() {
      y.value = !0, k.value = null;
      try {
        const L = await i();
        await Y(), L.changes > 0 && console.log(`Scan complete: ${L.changes} changes detected`);
      } catch (L) {
        k.value = L instanceof Error ? L.message : "Failed to scan models";
      } finally {
        y.value = !1;
      }
    }
    async function X() {
      if (C.value.trim()) {
        A.value = !0, k.value = null;
        try {
          const L = await p(C.value.trim());
          $.value = L.path, R.value = !1, C.value = "", await Y(), console.log(`Directory changed: ${L.models_indexed} models indexed`), m("refresh");
        } catch (L) {
          k.value = L instanceof Error ? L.message : "Failed to change directory";
        } finally {
          A.value = !1;
        }
      }
    }
    function ue() {
      if (!P.value.trim() || !J.value.trim()) return;
      const L = J.value.split("/").pop() || "model.safetensors";
      u([{
        workflow: "__manual__",
        filename: L,
        url: P.value.trim(),
        targetPath: J.value.trim()
      }]), P.value = "", J.value = "", S.value = !1;
    }
    async function Y() {
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
    return Ve(() => {
      Y(), z();
    }), (L, I) => (s(), o(W, null, [
      w(tt, null, {
        header: l(() => [
          w(st, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: I[2] || (I[2] = (ie) => b.value = !0)
          }, {
            actions: l(() => [
              w(te, {
                variant: "primary",
                size: "sm",
                disabled: y.value,
                onClick: se
              }, {
                default: l(() => [
                  g(a(y.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              w(te, {
                variant: "primary",
                size: "sm",
                onClick: I[0] || (I[0] = (ie) => R.value = !0)
              }, {
                default: l(() => [...I[15] || (I[15] = [
                  g(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              w(te, {
                variant: "primary",
                size: "sm",
                onClick: I[1] || (I[1] = (ie) => S.value = !0)
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
          F.value ? (s(), o("div", Jm, [
            e("div", Xm, [
              e("span", Qm, a(F.value.message), 1),
              e("span", Zm, a(F.value.current) + "/" + a(F.value.total), 1)
            ]),
            e("div", ev, [
              e("div", {
                class: "progress-fill",
                style: Rt({ width: `${F.value.current / F.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : r("", !0),
          w(Kt, {
            modelValue: _.value,
            "onUpdate:modelValue": I[3] || (I[3] = (ie) => _.value = ie),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          v.value || F.value ? (s(), M(Tt, {
            key: 0,
            message: F.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : k.value ? (s(), M(Dt, {
            key: 1,
            message: k.value,
            retry: !0,
            onRetry: Y
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
            (s(!0), o(W, null, ne(D.value, (ie) => (s(), M(Ae, {
              key: ie.type,
              title: ie.type.toUpperCase(),
              count: ie.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: l(() => [
                (s(!0), o(W, null, ne(ie.models, (Z) => (s(), M(et, {
                  key: Z.sha256 || Z.filename,
                  status: "synced"
                }, {
                  icon: l(() => [...I[17] || (I[17] = [
                    g("📦", -1)
                  ])]),
                  title: l(() => [
                    g(a(Z.filename), 1)
                  ]),
                  subtitle: l(() => [
                    g(a(O(Z.size)), 1)
                  ]),
                  details: l(() => [
                    w(Fe, {
                      label: "Hash:",
                      value: Z.hash ? Z.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    w(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ke) => re(Z)
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
            x.value.length ? r("", !0) : (s(), M(wt, {
              key: 1,
              icon: "📭",
              message: _.value ? `No models match '${_.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      w(kt, {
        show: b.value,
        title: "About Workspace Model Index",
        onClose: I[4] || (I[4] = (ie) => b.value = !1)
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
      T.value ? (s(), M(Cs, {
        key: 0,
        identifier: T.value,
        onClose: I[5] || (I[5] = (ie) => T.value = null)
      }, null, 8, ["identifier"])) : r("", !0),
      (s(), M(Xe, { to: "body" }, [
        R.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: I[9] || (I[9] = Be((ie) => R.value = !1, ["self"]))
        }, [
          e("div", tv, [
            e("div", sv, [
              I[20] || (I[20] = e("h3", null, "Change Models Directory", -1)),
              e("button", {
                class: "modal-close",
                onClick: I[6] || (I[6] = (ie) => R.value = !1)
              }, "✕")
            ]),
            e("div", ov, [
              e("div", nv, [
                I[21] || (I[21] = e("label", null, "Current Directory", -1)),
                e("code", av, a($.value || "Not set"), 1)
              ]),
              e("div", lv, [
                I[22] || (I[22] = e("label", null, "New Directory Path", -1)),
                w(yt, {
                  modelValue: C.value,
                  "onUpdate:modelValue": I[7] || (I[7] = (ie) => C.value = ie),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              I[23] || (I[23] = e("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            e("div", iv, [
              w(he, {
                variant: "secondary",
                onClick: I[8] || (I[8] = (ie) => R.value = !1)
              }, {
                default: l(() => [...I[24] || (I[24] = [
                  g(" Cancel ", -1)
                ])]),
                _: 1
              }),
              w(he, {
                variant: "primary",
                disabled: !C.value.trim() || A.value,
                loading: A.value,
                onClick: X
              }, {
                default: l(() => [
                  g(a(A.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : r("", !0)
      ])),
      (s(), M(Xe, { to: "body" }, [
        S.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: I[14] || (I[14] = Be((ie) => S.value = !1, ["self"]))
        }, [
          e("div", rv, [
            e("div", dv, [
              I[25] || (I[25] = e("h3", null, "Download New Model", -1)),
              e("button", {
                class: "modal-close",
                onClick: I[10] || (I[10] = (ie) => S.value = !1)
              }, "✕")
            ]),
            e("div", cv, [
              e("div", uv, [
                I[26] || (I[26] = e("label", null, "Download URL", -1)),
                w(yt, {
                  modelValue: P.value,
                  "onUpdate:modelValue": I[11] || (I[11] = (ie) => P.value = ie),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              e("div", mv, [
                I[27] || (I[27] = e("label", null, "Target Path (relative to models directory)", -1)),
                w(yt, {
                  modelValue: J.value,
                  "onUpdate:modelValue": I[12] || (I[12] = (ie) => J.value = ie),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              I[28] || (I[28] = e("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            e("div", vv, [
              w(he, {
                variant: "secondary",
                onClick: I[13] || (I[13] = (ie) => S.value = !1)
              }, {
                default: l(() => [...I[29] || (I[29] = [
                  g(" Cancel ", -1)
                ])]),
                _: 1
              }),
              w(he, {
                variant: "primary",
                disabled: !P.value.trim() || !J.value.trim(),
                onClick: ue
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
    const n = t, i = c, f = B(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), p = B(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), u = B(() => ({
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
        w(he, {
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
        w(he, {
          variant: "secondary",
          onClick: n[0] || (n[0] = (i) => c.$emit("cancel"))
        }, {
          default: l(() => [
            g(a(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (s(), M(he, {
          key: 0,
          variant: "secondary",
          onClick: n[1] || (n[1] = (i) => c.$emit("secondary"))
        }, {
          default: l(() => [
            g(a(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : r("", !0),
        w(he, {
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
    }), v = h(!1), y = h(null), k = h(""), _ = h(!1), b = h(null), T = h(null), R = B(() => {
      if (!k.value.trim()) return d.value.nodes;
      const se = k.value.toLowerCase();
      return d.value.nodes.filter(
        (X) => {
          var ue, Y;
          return X.name.toLowerCase().includes(se) || ((ue = X.description) == null ? void 0 : ue.toLowerCase().includes(se)) || ((Y = X.repository) == null ? void 0 : Y.toLowerCase().includes(se));
        }
      );
    }), $ = B(
      () => R.value.filter((se) => se.installed && se.tracked)
    ), C = B(
      () => R.value.filter((se) => !se.installed && se.tracked)
    ), A = B(
      () => R.value.filter((se) => se.installed && !se.tracked)
    );
    function S(se) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[se] || se;
    }
    const P = B(() => n.versionMismatches.length > 0);
    function J(se) {
      return !se.used_in_workflows || se.used_in_workflows.length === 0 ? "Not used in any workflows" : se.used_in_workflows.length === 1 ? se.used_in_workflows[0] : `${se.used_in_workflows.length} workflows`;
    }
    function F(se) {
      b.value = se;
    }
    function G() {
      i("open-node-manager");
    }
    function x(se) {
      T.value = {
        title: "Track as Development Node",
        message: `Track "${se}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          T.value = null;
          try {
            v.value = !0;
            const X = await p(se);
            X.status === "success" ? (i("toast", `✓ Node "${se}" tracked as development`, "success"), await re()) : i("toast", `Failed to track node: ${X.message || "Unknown error"}`, "error");
          } catch (X) {
            i("toast", `Error tracking node: ${X instanceof Error ? X.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    function D(se) {
      T.value = {
        title: "Remove Untracked Node",
        message: `Remove "${se}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          T.value = null;
          try {
            v.value = !0;
            const X = await m(se);
            X.status === "success" ? (i("toast", `✓ Node "${se}" removed`, "success"), await re()) : i("toast", `Failed to remove node: ${X.message || "Unknown error"}`, "error");
          } catch (X) {
            i("toast", `Error removing node: ${X instanceof Error ? X.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    function O(se) {
      T.value = {
        title: "Install Missing Node",
        message: `Install "${se}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          T.value = null;
          try {
            v.value = !0;
            const X = await u(se);
            X.status === "success" ? (i("toast", `✓ Node "${se}" installed`, "success"), await re()) : i("toast", `Failed to install node: ${X.message || "Unknown error"}`, "error");
          } catch (X) {
            i("toast", `Error installing node: ${X instanceof Error ? X.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    async function re() {
      v.value = !0, y.value = null;
      try {
        d.value = await f();
      } catch (se) {
        y.value = se instanceof Error ? se.message : "Failed to load nodes";
      } finally {
        v.value = !1;
      }
    }
    return Ve(re), (se, X) => (s(), o(W, null, [
      w(tt, null, {
        header: l(() => [
          w(st, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: X[0] || (X[0] = (ue) => _.value = !0)
          }, {
            actions: l(() => [
              w(te, {
                variant: "primary",
                size: "sm",
                onClick: G
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
          w(Kt, {
            modelValue: k.value,
            "onUpdate:modelValue": X[1] || (X[1] = (ue) => k.value = ue),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          v.value ? (s(), M(Tt, {
            key: 0,
            message: "Loading nodes..."
          })) : y.value ? (s(), M(Dt, {
            key: 1,
            message: y.value,
            retry: !0,
            onRetry: re
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
            P.value ? (s(), M(Ae, {
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
                (s(!0), o(W, null, ne(t.versionMismatches, (ue) => (s(), M(et, {
                  key: ue.name,
                  status: "warning"
                }, {
                  icon: l(() => [...X[9] || (X[9] = [
                    g("⚠", -1)
                  ])]),
                  title: l(() => [
                    g(a(ue.name), 1)
                  ]),
                  subtitle: l(() => [
                    e("span", Ov, [
                      e("span", Av, a(ue.actual), 1),
                      X[10] || (X[10] = e("span", { class: "version-arrow" }, "→", -1)),
                      e("span", Bv, a(ue.expected), 1)
                    ])
                  ]),
                  actions: l(() => [
                    w(te, {
                      variant: "warning",
                      size: "sm",
                      onClick: X[2] || (X[2] = (Y) => i("repair-environment"))
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
            A.value.length ? (s(), M(Ae, {
              key: 2,
              title: "UNTRACKED",
              count: A.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(W, null, ne(A.value, (ue) => (s(), M(et, {
                  key: ue.name,
                  status: "warning"
                }, {
                  icon: l(() => [...X[12] || (X[12] = [
                    g("?", -1)
                  ])]),
                  title: l(() => [
                    g(a(ue.name), 1)
                  ]),
                  subtitle: l(() => [...X[13] || (X[13] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: l(() => [
                    w(Fe, {
                      label: "Used by:",
                      value: J(ue)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    w(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Y) => F(ue)
                    }, {
                      default: l(() => [...X[14] || (X[14] = [
                        g(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    w(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Y) => x(ue.name)
                    }, {
                      default: l(() => [...X[15] || (X[15] = [
                        g(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    w(te, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (Y) => D(ue.name)
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
            $.value.length ? (s(), M(Ae, {
              key: 3,
              title: "INSTALLED",
              count: $.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(W, null, ne($.value, (ue) => (s(), M(et, {
                  key: ue.name,
                  status: "synced"
                }, {
                  icon: l(() => [
                    g(a(ue.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: l(() => [
                    g(a(ue.name), 1)
                  ]),
                  subtitle: l(() => [
                    ue.version ? (s(), o("span", Fv, a(ue.source === "development" ? "" : "v") + a(ue.version), 1)) : (s(), o("span", Vv, "version unknown")),
                    e("span", Wv, " • " + a(S(ue.source)), 1)
                  ]),
                  details: l(() => [
                    w(Fe, {
                      label: "Used by:",
                      value: J(ue)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    w(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Y) => F(ue)
                    }, {
                      default: l(() => [...X[17] || (X[17] = [
                        g(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    w(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: G
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
            C.value.length ? (s(), M(Ae, {
              key: 4,
              title: "MISSING",
              count: C.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(W, null, ne(C.value, (ue) => (s(), M(et, {
                  key: ue.name,
                  status: "missing"
                }, {
                  icon: l(() => [...X[19] || (X[19] = [
                    g("!", -1)
                  ])]),
                  title: l(() => [
                    g(a(ue.name), 1)
                  ]),
                  subtitle: l(() => [...X[20] || (X[20] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: l(() => [
                    w(Fe, {
                      label: "Required by:",
                      value: J(ue)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    w(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Y) => F(ue)
                    }, {
                      default: l(() => [...X[21] || (X[21] = [
                        g(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    w(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Y) => O(ue.name)
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
            !$.value.length && !C.value.length && !A.value.length ? (s(), M(wt, {
              key: 5,
              icon: "📭",
              message: k.value ? `No nodes match '${k.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : r("", !0)
          ], 64))
        ]),
        _: 1
      }),
      w(kt, {
        show: _.value,
        title: "About Custom Nodes",
        onClose: X[4] || (X[4] = (ue) => _.value = !1)
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
          w(te, {
            variant: "primary",
            onClick: X[3] || (X[3] = (ue) => _.value = !1)
          }, {
            default: l(() => [...X[24] || (X[24] = [
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
        onClose: X[5] || (X[5] = (ue) => b.value = null)
      }, null, 8, ["node"])) : r("", !0),
      T.value ? (s(), M(qs, {
        key: 1,
        title: T.value.title,
        message: T.value.message,
        warning: T.value.warning,
        "confirm-label": T.value.confirmLabel,
        destructive: T.value.destructive,
        onConfirm: T.value.onConfirm,
        onCancel: X[6] || (X[6] = (ue) => T.value = null)
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
    const c = t, n = h(!1), i = B(() => {
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
    const c = t, n = B(() => c.fetchingRemote === c.remote.name), i = B(() => c.remote.is_default), f = B(() => c.syncStatus && c.syncStatus.behind > 0), p = B(() => c.syncStatus && c.syncStatus.ahead > 0), u = B(() => c.remote.push_url !== c.remote.fetch_url), m = B(() => {
      const v = c.remote.fetch_url, y = v.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return y ? `https://${y[1]}/${y[2]}` : v.startsWith("https://") || v.startsWith("http://") ? v.replace(/\.git$/, "") : null;
    }), d = B(() => c.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (v, y) => (s(), M(et, {
      status: i.value ? "synced" : void 0
    }, Bt({
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
        w(te, {
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
        w(te, {
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
        w(te, {
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
        w(te, {
          variant: "secondary",
          size: "xs",
          onClick: y[4] || (y[4] = (k) => v.$emit("edit", t.remote.name))
        }, {
          default: l(() => [...y[7] || (y[7] = [
            g(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        i.value ? r("", !0) : (s(), M(te, {
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
          t.remote.push_url !== t.remote.fetch_url ? (s(), M(Fe, {
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
    const c = t, n = B(() => c.id || `field-${Math.random().toString(36).substr(2, 9)}`);
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
        Re(i.$slots, "default", {}, void 0, !0)
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
    St(() => [n.remoteName, n.fetchUrl, n.pushUrl], () => {
      f.value = {
        name: n.remoteName,
        fetchUrl: n.fetchUrl,
        pushUrl: n.pushUrl
      };
    });
    const m = B(() => f.value.name.trim() !== "" && f.value.fetchUrl.trim() !== "");
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
        w(ut, null, {
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
            w(yt, {
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
            w(yt, {
              modelValue: f.value.fetchUrl,
              "onUpdate:modelValue": y[1] || (y[1] = (k) => f.value.fetchUrl = k),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        w(vs, { label: "Push URL (optional)" }, {
          default: l(() => [
            w(yt, {
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
        w(te, {
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
        w(te, {
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
    const c = t, n = B(
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
            style: Rt({ width: n.value + "%" })
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
    St(f, ($) => {
      localStorage.setItem(Us, $);
    });
    const p = B(() => {
      var $;
      return (($ = n.error) == null ? void 0 : $.toLowerCase().includes("unrelated histories")) ?? !1;
    }), u = B(() => {
      if (!n.preview) return 0;
      const $ = n.preview.changes.workflows;
      return $.added.length + $.modified.length + $.deleted.length;
    }), m = B(() => n.preview ? n.preview.changes.nodes.to_install.length : 0), d = B(() => {
      var $;
      return u.value > 0 || m.value > 0 || ((($ = n.preview) == null ? void 0 : $.changes.models.count) || 0) > 0;
    }), v = B(() => n.preview && Ys(n.preview) ? n.preview : null), y = B(() => {
      var $;
      return (($ = v.value) == null ? void 0 : $.workflow_conflicts.length) ?? 0;
    }), k = B(() => {
      var $;
      return (($ = n.conflictResolutions) == null ? void 0 : $.size) ?? 0;
    }), _ = B(
      () => y.value > 0 && k.value === y.value
    ), b = B(() => !(!n.preview || n.preview.has_uncommitted_changes || v.value && !_.value));
    function T($) {
      if (!v.value) return !1;
      const C = $.replace(/\.json$/, "");
      return v.value.workflow_conflicts.some((A) => A.name === C);
    }
    function R($) {
      const C = n.conflictResolutions ? Array.from(n.conflictResolutions.values()) : void 0;
      i("pull", { modelStrategy: f.value, force: $, resolutions: C });
    }
    return ($, C) => {
      var A, S;
      return s(), M(Xe, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: C[11] || (C[11] = (P) => $.$emit("close"))
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
                onClick: C[0] || (C[0] = (P) => $.$emit("close"))
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
              ])])) : (A = t.preview) != null && A.has_uncommitted_changes ? (s(), o(W, { key: 2 }, [
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
                      (s(!0), o(W, null, ne(t.preview.changes.workflows.added, (P) => (s(), o("div", {
                        key: "a-" + P,
                        class: "change-item add"
                      }, " + " + a(P), 1))), 128)),
                      (s(!0), o(W, null, ne(t.preview.changes.workflows.modified, (P) => (s(), o("div", {
                        key: "m-" + P,
                        class: "change-item modify"
                      }, [
                        g(" ~ " + a(P) + " ", 1),
                        T(P) ? (s(), o("span", Gf, "CONFLICT")) : r("", !0)
                      ]))), 128)),
                      (s(!0), o(W, null, ne(t.preview.changes.workflows.deleted, (P) => (s(), o("div", {
                        key: "d-" + P,
                        class: "change-item delete"
                      }, " - " + a(P), 1))), 128))
                    ])
                  ])) : r("", !0),
                  m.value > 0 ? (s(), o("details", jf, [
                    e("summary", null, [
                      C[19] || (C[19] = e("span", { class: "change-type" }, "Nodes", -1)),
                      e("span", Hf, a(m.value) + " to install", 1)
                    ]),
                    e("div", Kf, [
                      (s(!0), o(W, null, ne(t.preview.changes.nodes.to_install, (P) => (s(), o("div", {
                        key: P,
                        class: "change-item add"
                      }, " + " + a(P), 1))), 128))
                    ])
                  ])) : r("", !0),
                  t.preview.changes.models.count > 0 ? (s(), o("details", qf, [
                    e("summary", null, [
                      C[20] || (C[20] = e("span", { class: "change-type" }, "Models", -1)),
                      e("span", Yf, a(t.preview.changes.models.count) + " referenced", 1)
                    ]),
                    e("div", Jf, [
                      (s(!0), o(W, null, ne(t.preview.changes.models.referenced, (P) => (s(), o("div", {
                        key: P,
                        class: "change-item"
                      }, a(P), 1))), 128))
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
                      Ue(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[1] || (C[1] = (P) => f.value = P),
                        value: "all"
                      }, null, 512), [
                        [Nt, f.value]
                      ]),
                      C[22] || (C[22] = e("span", null, "Download all models", -1))
                    ]),
                    e("label", ep, [
                      Ue(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[2] || (C[2] = (P) => f.value = P),
                        value: "required"
                      }, null, 512), [
                        [Nt, f.value]
                      ]),
                      C[23] || (C[23] = e("span", null, "Download required only", -1))
                    ]),
                    e("label", tp, [
                      Ue(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[3] || (C[3] = (P) => f.value = P),
                        value: "skip"
                      }, null, 512), [
                        [Nt, f.value]
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
              w(te, {
                variant: "secondary",
                onClick: C[4] || (C[4] = (P) => $.$emit("close"))
              }, {
                default: l(() => [...C[29] || (C[29] = [
                  g(" Cancel ", -1)
                ])]),
                _: 1
              }),
              t.error ? (s(), o(W, { key: 0 }, [
                w(te, {
                  variant: "secondary",
                  loading: t.pulling,
                  onClick: C[5] || (C[5] = (P) => R(!1))
                }, {
                  default: l(() => [...C[30] || (C[30] = [
                    g(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                w(te, {
                  variant: "destructive",
                  loading: t.pulling,
                  onClick: C[6] || (C[6] = (P) => R(!0))
                }, {
                  default: l(() => [...C[31] || (C[31] = [
                    g(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (S = t.preview) != null && S.has_uncommitted_changes ? (s(), M(te, {
                key: 1,
                variant: "destructive",
                loading: t.pulling,
                onClick: C[7] || (C[7] = (P) => R(!0))
              }, {
                default: l(() => [...C[32] || (C[32] = [
                  g(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : t.preview && t.preview.commits_behind > 0 ? (s(), o(W, { key: 2 }, [
                v.value && !_.value ? (s(), M(te, {
                  key: 0,
                  variant: "primary",
                  onClick: C[8] || (C[8] = (P) => i("openConflictResolution"))
                }, {
                  default: l(() => [
                    g(" Resolve Conflicts (" + a(k.value) + "/" + a(y.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (s(), M(te, {
                  key: 1,
                  variant: "primary",
                  loading: t.pulling,
                  disabled: !b.value,
                  onClick: C[9] || (C[9] = (P) => R(!1))
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
      return s(), M(Xe, { to: "body" }, [
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
                    Ue(e("input", {
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
              w(te, {
                variant: "secondary",
                onClick: u[2] || (u[2] = (y) => p.$emit("close"))
              }, {
                default: l(() => [...u[17] || (u[17] = [
                  g(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (v = t.preview) != null && v.remote_has_new_commits ? (s(), o(W, { key: 0 }, [
                w(te, {
                  variant: "secondary",
                  onClick: u[3] || (u[3] = (y) => p.$emit("pull-first"))
                }, {
                  default: l(() => [...u[18] || (u[18] = [
                    g(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                w(te, {
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
              ], 64)) : t.preview && t.preview.commits_ahead > 0 && !t.preview.has_uncommitted_changes ? (s(), M(te, {
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
        class: pe(["choice-btn", "mine", { selected: t.modelValue === "take_base" }]),
        onClick: n[0] || (n[0] = (i) => c.$emit("update:modelValue", "take_base")),
        disabled: t.disabled
      }, [...n[2] || (n[2] = [
        e("span", { class: "choice-icon" }, "◀", -1),
        e("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, Pp),
      e("button", {
        class: pe(["choice-btn", "theirs", { selected: t.modelValue === "take_target" }]),
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
    St(() => n.resolution, (d) => {
      f.value = d;
    }), St(f, (d) => {
      d && i("resolve", d);
    });
    const p = B(() => f.value !== null), u = B(() => n.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), m = B(() => {
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
        class: pe(["conflict-item", { resolved: p.value }])
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
    const n = t, i = c, f = B(() => n.resolutions.size), p = B(() => n.workflowConflicts.length - f.value), u = B(() => f.value === n.workflowConflicts.length), m = B(
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
              onResolve: (R) => v(T.name, R)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          u.value ? (s(), o("div", sg, [
            b[6] || (b[6] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", null, 'All conflicts resolved! Click "' + a(m.value) + '" to continue.', 1)
          ])) : r("", !0)
        ])
      ]),
      footer: l(() => [
        w(he, {
          variant: "secondary",
          onClick: y
        }, {
          default: l(() => [...b[7] || (b[7] = [
            g(" Cancel ", -1)
          ])]),
          _: 1
        }),
        b[8] || (b[8] = e("div", { class: "footer-spacer" }, null, -1)),
        w(he, {
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
    const n = t, i = c, f = B(() => n.validation.is_compatible ? n.operationType === "pull" ? "Pull" : "Merge" : n.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
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
        w(he, {
          variant: "secondary",
          onClick: u[0] || (u[0] = (m) => i("cancel"))
        }, {
          default: l(() => [...u[9] || (u[9] = [
            g(" Cancel ", -1)
          ])]),
          _: 1
        }),
        u[11] || (u[11] = e("div", { class: "footer-spacer" }, null, -1)),
        w(he, {
          variant: "secondary",
          onClick: u[1] || (u[1] = (m) => i("goBack"))
        }, {
          default: l(() => [...u[10] || (u[10] = [
            g(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        w(he, {
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
    } = He(), T = h([]), R = h(null), $ = h({}), C = h(!1), A = h(null), S = h(""), P = h(!1), J = h(null), F = h(!1), G = h("add"), x = h({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), D = B(() => {
      if (!S.value.trim()) return T.value;
      const V = S.value.toLowerCase();
      return T.value.filter(
        (ee) => ee.name.toLowerCase().includes(V) || ee.fetch_url.toLowerCase().includes(V) || ee.push_url.toLowerCase().includes(V)
      );
    });
    async function O() {
      C.value = !0, A.value = null;
      try {
        const V = await i();
        T.value = V.remotes, R.value = V.current_branch_tracking || null, await Promise.all(
          V.remotes.map(async (ee) => {
            const be = await d(ee.name);
            be && ($.value[ee.name] = be);
          })
        );
      } catch (V) {
        A.value = V instanceof Error ? V.message : "Failed to load remotes";
      } finally {
        C.value = !1;
      }
    }
    function re() {
      G.value = "add", x.value = { name: "", fetchUrl: "", pushUrl: "" }, F.value = !0;
    }
    function se(V) {
      const ee = T.value.find((be) => be.name === V);
      ee && (G.value = "edit", x.value = {
        name: ee.name,
        fetchUrl: ee.fetch_url,
        pushUrl: ee.push_url
      }, F.value = !0);
    }
    async function X(V) {
      try {
        G.value === "add" ? await f(V.name, V.fetchUrl) : await u(V.name, V.fetchUrl, V.pushUrl || void 0), F.value = !1, await O();
      } catch (ee) {
        A.value = ee instanceof Error ? ee.message : "Operation failed";
      }
    }
    function ue() {
      F.value = !1, x.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function Y(V) {
      J.value = V;
      try {
        await m(V);
        const ee = await d(V);
        ee && ($.value[V] = ee), n("toast", `✓ Fetched from ${V}`, "success");
      } catch (ee) {
        n("toast", ee instanceof Error ? ee.message : "Fetch failed", "error");
      } finally {
        J.value = null;
      }
    }
    async function z(V) {
      if (confirm(`Remove remote "${V}"?`))
        try {
          await p(V), await O();
        } catch (ee) {
          A.value = ee instanceof Error ? ee.message : "Failed to remove remote";
        }
    }
    function L() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const I = h("idle"), ie = B(() => I.value === "pull_preview"), Z = B(
      () => I.value === "resolving" || I.value === "validating"
    ), ke = B(
      () => I.value === "validation_review" || I.value === "executing"
    ), Ce = h(!1), Te = h(null), ze = h(!1), me = h(null), we = h(!1), Pe = h(null), Q = h(null), le = h(/* @__PURE__ */ new Map()), ve = h(null), Ne = h(null), nt = B(() => Pe.value && Ys(Pe.value) ? Pe.value : null);
    async function at(V) {
      me.value = V, I.value = "pull_preview", we.value = !0, Pe.value = null, Q.value = null;
      try {
        Pe.value = await v(V);
      } catch (ee) {
        Q.value = ee instanceof Error ? ee.message : "Failed to load pull preview";
      } finally {
        we.value = !1;
      }
    }
    function Me() {
      I.value = "idle", Pe.value = null, Q.value = null, me.value = null;
    }
    async function Je(V) {
      if (!me.value) return;
      I.value = "executing", Q.value = null;
      const ee = me.value;
      try {
        const be = await y(ee, V);
        if (be.rolled_back) {
          Q.value = `Pull failed and was rolled back: ${be.error || "Unknown error"}`, I.value = "pull_preview";
          return;
        }
        Le(), I.value = "idle", n("toast", `✓ Pulled from ${ee}`, "success"), await O();
      } catch (be) {
        Q.value = be instanceof Error ? be.message : "Pull failed", I.value = "pull_preview";
      }
    }
    function Ke() {
      nt.value && (I.value = "resolving", Ne.value = null);
    }
    function qe(V, ee) {
      le.value.set(V, { name: V, resolution: ee });
    }
    function mt() {
      I.value = "pull_preview";
    }
    async function _e() {
      I.value = "validating", Ne.value = null;
      try {
        const V = Array.from(le.value.values());
        ve.value = await b(me.value, V), I.value = "validation_review";
      } catch (V) {
        Ne.value = V instanceof Error ? V.message : "Validation failed", I.value = "resolving";
      }
    }
    async function je() {
      I.value = "executing";
      const V = me.value;
      try {
        const ee = Array.from(le.value.values()), be = await y(V, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: ee
        });
        if (be.rolled_back) {
          Q.value = `Pull failed and was rolled back: ${be.error || "Unknown error"}`, I.value = "pull_preview";
          return;
        }
        Le(), I.value = "idle", n("toast", `✓ Pulled from ${V}`, "success"), await O();
      } catch (ee) {
        Q.value = ee instanceof Error ? ee.message : "Pull failed", I.value = "validation_review";
      }
    }
    function Ze() {
      I.value = "resolving";
    }
    function lt() {
      Le(), I.value = "idle";
    }
    function Le() {
      le.value.clear(), ve.value = null, Ne.value = null, Q.value = null, Pe.value = null, me.value = null;
    }
    async function ge(V) {
      me.value = V, Ce.value = !0, we.value = !0, Te.value = null;
      try {
        Te.value = await k(V);
      } catch (ee) {
        A.value = ee instanceof Error ? ee.message : "Failed to load push preview";
      } finally {
        we.value = !1;
      }
    }
    function K() {
      Ce.value = !1, Te.value = null, me.value = null;
    }
    async function q(V) {
      if (!me.value) return;
      ze.value = !0;
      const ee = me.value;
      try {
        await _(ee, V), K(), n("toast", `✓ Pushed to ${ee}`, "success"), await O();
      } catch (be) {
        n("toast", be instanceof Error ? be.message : "Push failed", "error");
      } finally {
        ze.value = !1;
      }
    }
    function E() {
      const V = me.value;
      K(), V && at(V);
    }
    return Ve(O), (V, ee) => (s(), o(W, null, [
      w(tt, null, {
        header: l(() => [
          w(st, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: ee[0] || (ee[0] = (be) => P.value = !0)
          }, {
            actions: l(() => [
              F.value ? r("", !0) : (s(), M(te, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: re
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
          F.value ? r("", !0) : (s(), M(Kt, {
            key: 0,
            modelValue: S.value,
            "onUpdate:modelValue": ee[1] || (ee[1] = (be) => S.value = be),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: l(() => [
          C.value ? (s(), M(Tt, {
            key: 0,
            message: "Loading remotes..."
          })) : A.value ? (s(), M(Dt, {
            key: 1,
            message: A.value,
            retry: !0,
            onRetry: O
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            F.value ? (s(), M(_f, {
              key: 0,
              mode: G.value,
              "remote-name": x.value.name,
              "fetch-url": x.value.fetchUrl,
              "push-url": x.value.pushUrl,
              onSubmit: X,
              onCancel: ue
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : r("", !0),
            T.value.length && !F.value ? (s(), M(ns, {
              key: 1,
              variant: "compact"
            }, {
              default: l(() => [
                g(" Total: " + a(T.value.length) + " remote" + a(T.value.length !== 1 ? "s" : "") + " ", 1),
                R.value ? (s(), o("span", Sg, " • Tracking: " + a(R.value.remote) + "/" + a(R.value.branch), 1)) : r("", !0)
              ]),
              _: 1
            })) : r("", !0),
            D.value.length && !F.value ? (s(), M(Ae, {
              key: 2,
              title: "REMOTES",
              count: D.value.length
            }, {
              default: l(() => [
                (s(!0), o(W, null, ne(D.value, (be) => (s(), M(df, {
                  key: be.name,
                  remote: be,
                  "sync-status": $.value[be.name],
                  "fetching-remote": J.value,
                  onFetch: Y,
                  onEdit: se,
                  onRemove: z,
                  onPull: at,
                  onPush: ge
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            !D.value.length && !F.value ? (s(), M(wt, {
              key: 3,
              icon: "🌐",
              message: S.value ? `No remotes match '${S.value}'` : "No remotes configured."
            }, {
              actions: l(() => [
                w(te, {
                  variant: "primary",
                  onClick: re
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
      w(kt, {
        show: P.value,
        title: "About Git Remotes",
        onClose: ee[2] || (ee[2] = (be) => P.value = !1)
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
          w(te, {
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
        show: ie.value,
        "remote-name": me.value || "",
        preview: Pe.value,
        loading: we.value,
        pulling: I.value === "executing",
        error: Q.value,
        "conflict-resolutions": le.value,
        onClose: Me,
        onPull: Je,
        onOpenConflictResolution: Ke
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      w(Ip, {
        show: Ce.value,
        "remote-name": me.value || "",
        preview: Te.value,
        loading: we.value,
        pushing: ze.value,
        onClose: K,
        onPush: q,
        onPullFirst: E
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      Z.value && nt.value ? (s(), M(ng, {
        key: 0,
        "workflow-conflicts": nt.value.workflow_conflicts,
        resolutions: le.value,
        "operation-type": "pull",
        validating: I.value === "validating",
        error: Ne.value,
        onClose: mt,
        onResolve: qe,
        onApply: _e
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : r("", !0),
      ke.value && ve.value ? (s(), M(xg, {
        key: 1,
        validation: ve.value,
        "operation-type": "pull",
        executing: I.value === "executing",
        onProceed: je,
        onGoBack: Ze,
        onCancel: lt
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
      class: pe(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", Pg, [
        e("div", Mg, [
          g(a(t.label) + " ", 1),
          t.required ? (s(), o("span", Rg, "*")) : r("", !0)
        ]),
        t.description ? (s(), o("div", Tg, a(t.description), 1)) : r("", !0)
      ]),
      e("div", Dg, [
        Re(c.$slots, "default", {}, void 0, !0)
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
    function R(F) {
      return F.join(" ");
    }
    function $(F) {
      return F.trim() ? F.trim().split(/\s+/) : [];
    }
    const C = B(() => {
      if (!k.value) return !1;
      const F = _.value !== (k.value.civitai_api_key || ""), G = b.value !== R(k.value.comfyui_extra_args || []);
      return F || G;
    });
    async function A() {
      m.value = !0, d.value = null;
      try {
        y.value = await p(i.workspacePath || void 0), k.value = { ...y.value }, _.value = y.value.civitai_api_key || "", b.value = R(y.value.comfyui_extra_args || []);
        const F = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        T.value = F === "true";
      } catch (F) {
        d.value = F instanceof Error ? F.message : "Failed to load settings";
      } finally {
        m.value = !1;
      }
    }
    async function S() {
      var F, G;
      v.value = null;
      try {
        const x = {};
        _.value !== (((F = k.value) == null ? void 0 : F.civitai_api_key) || "") && (x.civitai_api_key = _.value || null), b.value !== R(((G = k.value) == null ? void 0 : G.comfyui_extra_args) || []) && (x.comfyui_extra_args = $(b.value)), await u(x, i.workspacePath || void 0), await A(), v.value = { type: "success", message: "Settings saved successfully" }, f("saved"), setTimeout(() => {
          v.value = null;
        }, 3e3);
      } catch (x) {
        const D = x instanceof Error ? x.message : "Failed to save settings";
        v.value = { type: "error", message: D }, f("error", D);
      }
    }
    function P() {
      k.value && (_.value = k.value.civitai_api_key || "", b.value = R(k.value.comfyui_extra_args || []), v.value = null);
    }
    function J(F) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(F)), console.log("[ComfyGit] Auto-refresh setting saved:", F);
    }
    return c({
      saveSettings: S,
      resetSettings: P,
      hasChanges: C,
      loadSettings: A
    }), Ve(A), (F, G) => (s(), o("div", Ag, [
      m.value ? (s(), M(Tt, {
        key: 0,
        message: "Loading workspace settings..."
      })) : d.value ? (s(), M(Dt, {
        key: 1,
        message: d.value,
        retry: !0,
        onRetry: A
      }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
        w(Ae, { title: "WORKSPACE PATHS" }, {
          default: l(() => {
            var x, D;
            return [
              e("div", Bg, [
                e("div", Fg, [
                  G[3] || (G[3] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                  G[4] || (G[4] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  e("div", Vg, a(((x = y.value) == null ? void 0 : x.workspace_path) || "Loading..."), 1)
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
        w(Ae, { title: "API CREDENTIALS" }, {
          default: l(() => [
            e("div", jg, [
              w(fs, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: l(() => [
                  w(rs, {
                    modelValue: _.value,
                    "onUpdate:modelValue": G[0] || (G[0] = (x) => _.value = x),
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
        w(Ae, { title: "COMFYUI SETTINGS" }, {
          default: l(() => [
            e("div", Hg, [
              w(fs, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: l(() => [
                  w(rs, {
                    modelValue: b.value,
                    "onUpdate:modelValue": G[1] || (G[1] = (x) => b.value = x),
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
        w(Ae, { title: "UI SETTINGS" }, {
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
                      G[2] || (G[2] = (x) => T.value = x),
                      J
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
              style: Rt({ color: v.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
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
              w(te, {
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
              (u = c.value) != null && u.hasChanges ? (s(), M(te, {
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
    const { getWorkspaceLogs: c, getWorkspaceLogPath: n, openFile: i } = He(), f = h([]), p = h(!1), u = h(null), m = h(!1), d = h(null), v = h(null), y = h(!1), k = B(() => f.value.length === 0 ? [] : f.value.map((R) => ({
      text: `${R.timestamp} - ${R.name} - ${R.level} - ${R.func}:${R.line} - ${R.message}`,
      level: R.level
    })));
    async function _() {
      p.value = !0, u.value = null;
      try {
        f.value = await c(void 0, 500);
      } catch (R) {
        u.value = R instanceof Error ? R.message : "Failed to load workspace logs";
      } finally {
        p.value = !1, setTimeout(() => {
          var R;
          (R = d.value) != null && R.parentElement && (d.value.parentElement.scrollTop = d.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    async function b() {
      try {
        const R = await n();
        R.exists && (v.value = R.path);
      } catch {
      }
    }
    async function T() {
      if (v.value) {
        y.value = !0;
        try {
          await i(v.value);
        } catch (R) {
          console.error("Failed to open log file:", R);
        } finally {
          y.value = !1;
        }
      }
    }
    return Ve(() => {
      _(), b();
    }), (R, $) => (s(), o(W, null, [
      w(tt, null, {
        header: l(() => [
          w(st, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: $[0] || ($[0] = (C) => m.value = !0)
          }, {
            actions: l(() => [
              w(te, {
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
              w(te, {
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
          p.value ? (s(), M(Tt, {
            key: 0,
            message: "Loading workspace logs..."
          })) : u.value ? (s(), M(Dt, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: _
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            f.value.length === 0 ? (s(), M(wt, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: d,
              class: "log-output"
            }, [
              (s(!0), o(W, null, ne(k.value, (C, A) => (s(), o("div", {
                key: A,
                class: pe(`log-line log-level-${C.level.toLowerCase()}`)
              }, a(C.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      w(kt, {
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
          w(te, {
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
    const { getEnvironmentLogs: c, getStatus: n, getEnvironmentLogPath: i, openFile: f } = He(), p = h([]), u = h(!1), m = h(null), d = h(!1), v = h("production"), y = h(null), k = h(null), _ = h(!1), b = B(() => p.value.length === 0 ? [] : p.value.map((C) => ({
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
    async function R() {
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
    return Ve(() => {
      T(), R();
    }), (C, A) => (s(), o(W, null, [
      w(tt, null, {
        header: l(() => [
          w(st, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: A[0] || (A[0] = (S) => d.value = !0)
          }, {
            actions: l(() => [
              w(te, {
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
              w(te, {
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
          u.value ? (s(), M(Tt, {
            key: 0,
            message: "Loading environment logs..."
          })) : m.value ? (s(), M(Dt, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: T
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            p.value.length === 0 ? (s(), M(wt, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: y,
              class: "log-output"
            }, [
              (s(!0), o(W, null, ne(b.value, (S, P) => (s(), o("div", {
                key: P,
                class: pe(`log-line log-level-${S.level.toLowerCase()}`)
              }, a(S.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      w(kt, {
        show: d.value,
        title: "About Environment Logs",
        onClose: A[2] || (A[2] = (S) => d.value = !1)
      }, {
        content: l(() => [
          e("p", null, [
            A[3] || (A[3] = g(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, a(v.value), 1),
            A[4] || (A[4] = g(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          A[5] || (A[5] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
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
          A[6] || (A[6] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: l(() => [
          w(te, {
            variant: "primary",
            onClick: A[1] || (A[1] = (S) => d.value = !1)
          }, {
            default: l(() => [...A[7] || (A[7] = [
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
    }, Bt({
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
        Re(c.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      t.showDetails ? {
        name: "details",
        fn: l(() => [
          w(Fe, {
            label: "Workflows:",
            value: String(t.workflowCount)
          }, null, 8, ["value"]),
          w(Fe, {
            label: "Nodes:",
            value: String(t.nodeCount)
          }, null, 8, ["value"]),
          w(Fe, {
            label: "Models:",
            value: String(t.modelCount)
          }, null, 8, ["value"]),
          t.lastUsed && t.showLastUsed ? (s(), M(Fe, {
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
          t.canDelete ? (s(), M(he, {
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
          w(he, {
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
    const c = t, n = B(() => `${Math.max(0, Math.min(100, c.progress))}%`);
    return (i, f) => (s(), o("div", xh, [
      e("div", {
        class: pe(["progress-fill", t.variant]),
        style: Rt({ width: n.value })
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
          class: pe(["step", n(u.id)])
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
    let R = null, $ = 0;
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
    ], A = h(null);
    function S() {
      b.value || n("close");
    }
    async function P() {
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
          }, re = await f(O);
          re.status === "started" ? J() : re.status === "error" && (T.value = {
            progress: 0,
            message: re.message || "Failed to start creation",
            error: re.message
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
    function J() {
      R || ($ = 0, R = window.setInterval(async () => {
        try {
          const D = await p();
          $ = 0, T.value = {
            progress: D.progress ?? 0,
            message: D.message,
            phase: D.phase,
            error: D.error
          }, D.state === "complete" ? (F(), n("created", D.environment_name || u.value.trim(), y.value)) : D.state === "error" ? (F(), T.value.error = D.error || D.message) : D.state === "idle" && b.value && (F(), T.value.error = "Creation was interrupted. Please try again.");
        } catch {
          $++, $ >= Qh && (F(), T.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function F() {
      R && (clearInterval(R), R = null);
    }
    function G() {
      b.value = !1, T.value = { progress: 0, message: "" }, n("close");
    }
    async function x() {
      _.value = !0;
      try {
        k.value = await i();
      } catch (D) {
        console.error("Failed to load ComfyUI releases:", D);
      } finally {
        _.value = !1;
      }
    }
    return Ve(async () => {
      var D;
      await mo(), (D = A.value) == null || D.focus(), x();
    }), bs(() => {
      F();
    }), (D, O) => (s(), M(ot, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !b.value,
      onClose: S
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
            Ue(e("input", {
              ref_key: "nameInput",
              ref: A,
              "onUpdate:modelValue": O[0] || (O[0] = (re) => u.value = re),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: xt(P, ["enter"])
            }, null, 544), [
              [Ot, u.value]
            ])
          ]),
          e("div", Nh, [
            O[7] || (O[7] = e("label", { class: "form-label" }, "Python Version", -1)),
            Ue(e("select", {
              "onUpdate:modelValue": O[1] || (O[1] = (re) => m.value = re),
              class: "form-select"
            }, [
              (s(!0), o(W, null, ne(Ie(Xs), (re) => (s(), o("option", {
                key: re,
                value: re
              }, a(re), 9, Oh))), 128))
            ], 512), [
              [Mt, m.value]
            ])
          ]),
          e("div", Ah, [
            O[8] || (O[8] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Ue(e("select", {
              "onUpdate:modelValue": O[2] || (O[2] = (re) => d.value = re),
              class: "form-select",
              disabled: _.value
            }, [
              (s(!0), o(W, null, ne(k.value, (re) => (s(), o("option", {
                key: re.tag_name,
                value: re.tag_name
              }, a(re.name), 9, Fh))), 128))
            ], 8, Bh), [
              [Mt, d.value]
            ])
          ]),
          e("div", Vh, [
            O[9] || (O[9] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Ue(e("select", {
              "onUpdate:modelValue": O[3] || (O[3] = (re) => v.value = re),
              class: "form-select"
            }, [
              (s(!0), o(W, null, ne(Ie(xs), (re) => (s(), o("option", {
                key: re,
                value: re
              }, a(re) + a(re === "auto" ? " (detect GPU)" : ""), 9, Wh))), 128))
            ], 512), [
              [Mt, v.value]
            ])
          ]),
          e("div", Gh, [
            e("label", jh, [
              Ue(e("input", {
                type: "checkbox",
                "onUpdate:modelValue": O[4] || (O[4] = (re) => y.value = re)
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
          T.value.error ? (s(), M(he, {
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
          w(he, {
            variant: "primary",
            disabled: !u.value.trim(),
            onClick: P
          }, {
            default: l(() => [...O[13] || (O[13] = [
              g(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          w(he, {
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
}), e1 = /* @__PURE__ */ ae(Zh, [["__scopeId", "data-v-f37eaa42"]]), t1 = /* @__PURE__ */ oe({
  __name: "EnvironmentsSection",
  emits: ["switch", "created", "delete"],
  setup(t, { expose: c, emit: n }) {
    const i = n, { getEnvironments: f } = He(), p = h([]), u = h(!1), m = h(null), d = h(""), v = h(!1), y = h(!1), k = h(null), _ = B(() => {
      if (!d.value.trim()) return p.value;
      const A = d.value.toLowerCase();
      return p.value.filter(
        (S) => {
          var P;
          return S.name.toLowerCase().includes(A) || ((P = S.current_branch) == null ? void 0 : P.toLowerCase().includes(A));
        }
      );
    });
    function b(A, S) {
      y.value = !1, i("created", A, S);
    }
    function T() {
      y.value = !0;
    }
    function R(A) {
      k.value = A;
    }
    function $(A) {
      k.value = null, i("delete", A);
    }
    async function C() {
      u.value = !0, m.value = null;
      try {
        p.value = await f();
      } catch (A) {
        m.value = A instanceof Error ? A.message : "Failed to load environments";
      } finally {
        u.value = !1;
      }
    }
    return Ve(C), c({
      loadEnvironments: C,
      openCreateModal: T
    }), (A, S) => (s(), o(W, null, [
      w(tt, null, {
        header: l(() => [
          w(st, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: S[0] || (S[0] = (P) => v.value = !0)
          }, {
            actions: l(() => [
              w(te, {
                variant: "primary",
                size: "sm",
                onClick: T
              }, {
                default: l(() => [...S[6] || (S[6] = [
                  g(" Create ", -1)
                ])]),
                _: 1
              }),
              w(te, {
                variant: "secondary",
                size: "sm",
                onClick: C
              }, {
                default: l(() => [...S[7] || (S[7] = [
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
            "onUpdate:modelValue": S[1] || (S[1] = (P) => d.value = P),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          u.value ? (s(), M(Tt, {
            key: 0,
            message: "Loading environments..."
          })) : m.value ? (s(), M(Dt, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: C
          }, null, 8, ["message"])) : (s(), o(W, { key: 2 }, [
            _.value.length ? (s(), M(Ae, {
              key: 0,
              title: "ENVIRONMENTS",
              count: _.value.length
            }, {
              default: l(() => [
                (s(!0), o(W, null, ne(_.value, (P) => (s(), M(nh, {
                  key: P.name,
                  "environment-name": P.name,
                  "is-current": P.is_current,
                  "current-branch": P.current_branch,
                  "show-last-used": !1
                }, {
                  actions: l(() => [
                    P.is_current ? r("", !0) : (s(), M(te, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (J) => A.$emit("switch", P.name)
                    }, {
                      default: l(() => [...S[8] || (S[8] = [
                        g(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    w(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (J) => R(P)
                    }, {
                      default: l(() => [...S[9] || (S[9] = [
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
            _.value.length ? r("", !0) : (s(), M(wt, {
              key: 1,
              icon: "🌍",
              message: d.value ? `No environments match '${d.value}'` : "No environments found. Create one to get started!"
            }, Bt({ _: 2 }, [
              d.value ? void 0 : {
                name: "actions",
                fn: l(() => [
                  w(te, {
                    variant: "primary",
                    onClick: T
                  }, {
                    default: l(() => [...S[10] || (S[10] = [
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
      w(kt, {
        show: v.value,
        title: "About Environments",
        onClose: S[3] || (S[3] = (P) => v.value = !1)
      }, {
        content: l(() => [...S[11] || (S[11] = [
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
          w(te, {
            variant: "secondary",
            onClick: S[2] || (S[2] = (P) => v.value = !1)
          }, {
            default: l(() => [...S[12] || (S[12] = [
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
        onClose: S[4] || (S[4] = (P) => k.value = null),
        onDelete: $
      }, null, 8, ["environment", "can-delete"])) : r("", !0),
      y.value ? (s(), M(e1, {
        key: 1,
        onClose: S[5] || (S[5] = (P) => y.value = !1),
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
        w(he, {
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
    const n = t, i = c, f = h(!1), p = h(null), u = B(() => f.value || n.models.length <= 3 ? n.models : n.models.slice(0, 3));
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
          w(he, {
            variant: "secondary",
            onClick: v[1] || (v[1] = (y) => d.$emit("cancel"))
          }, {
            default: l(() => [...v[7] || (v[7] = [
              g(" Cancel Export ", -1)
            ])]),
            _: 1
          }),
          w(he, {
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
    const { validateExport: c, exportEnvWithForce: n } = He(), i = h(""), f = h(!1), p = h(!1), u = h(!1), m = h(null), d = h(!1), v = h(null), y = h(!1), k = h(!1), _ = B(() => f.value ? "Validating..." : p.value ? "Exporting..." : "Export Environment");
    async function b() {
      f.value = !0, m.value = null;
      try {
        const S = await c();
        v.value = S, S.can_export ? S.warnings.models_without_sources.length > 0 ? k.value = !0 : await $() : y.value = !0;
      } catch (S) {
        m.value = {
          status: "error",
          message: S instanceof Error ? S.message : "Validation failed"
        };
      } finally {
        f.value = !1;
      }
    }
    async function T() {
      k.value = !1, await $();
    }
    async function R() {
      try {
        const S = await c();
        v.value = S;
      } catch (S) {
        console.error("Re-validation failed:", S);
      }
    }
    async function $() {
      p.value = !0;
      try {
        const S = await n(i.value || void 0);
        m.value = S;
      } catch (S) {
        m.value = {
          status: "error",
          message: S instanceof Error ? S.message : "Export failed"
        };
      } finally {
        p.value = !1;
      }
    }
    async function C() {
      var S;
      if ((S = m.value) != null && S.path)
        try {
          await navigator.clipboard.writeText(m.value.path);
        } catch (P) {
          console.error("Failed to copy path:", P);
        }
    }
    async function A() {
      var S;
      if ((S = m.value) != null && S.path) {
        u.value = !0;
        try {
          const P = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(m.value.path)}`);
          if (!P.ok)
            throw new Error(`Download failed: ${P.statusText}`);
          const J = await P.blob(), F = URL.createObjectURL(J), G = m.value.path.split("/").pop() || "environment-export.tar.gz", x = document.createElement("a");
          x.href = F, x.download = G, document.body.appendChild(x), x.click(), document.body.removeChild(x), URL.revokeObjectURL(F);
        } catch (P) {
          console.error("Failed to download:", P), alert(`Download failed: ${P instanceof Error ? P.message : "Unknown error"}`);
        } finally {
          u.value = !1;
        }
      }
    }
    return (S, P) => (s(), o(W, null, [
      w(tt, null, {
        header: l(() => [
          w(st, {
            title: "EXPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: P[0] || (P[0] = (J) => d.value = !0)
          })
        ]),
        content: l(() => [
          w(Ae, { title: "EXPORT OPTIONS" }, {
            default: l(() => [
              e("div", P1, [
                P[7] || (P[7] = e("div", { class: "export-card-header" }, [
                  e("span", { class: "export-icon" }, "📁"),
                  e("div", { class: "export-header-text" }, [
                    e("div", { class: "export-title" }, "Output Destination"),
                    e("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                e("div", M1, [
                  w(rs, {
                    modelValue: i.value,
                    "onUpdate:modelValue": P[1] || (P[1] = (J) => i.value = J),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                e("div", R1, [
                  w(te, {
                    variant: "primary",
                    size: "md",
                    loading: f.value || p.value,
                    disabled: f.value || p.value,
                    onClick: b
                  }, {
                    default: l(() => [
                      P[6] || (P[6] = e("svg", {
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
          m.value ? (s(), M(Ae, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: l(() => [
              w(et, {
                status: m.value.status === "success" ? "synced" : "broken"
              }, Bt({
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
                    w(Fe, { label: "Saved to:" }, {
                      default: l(() => [
                        w(i1, {
                          path: m.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    m.value.models_without_sources !== void 0 ? (s(), M(Fe, {
                      key: 0,
                      label: "Models without sources:",
                      value: m.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : r("", !0),
                    m.value.models_without_sources && m.value.models_without_sources > 0 ? (s(), o("div", T1, [...P[8] || (P[8] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : r("", !0)
                  ]),
                  key: "0"
                } : void 0,
                m.value.status === "success" ? {
                  name: "actions",
                  fn: l(() => [
                    w(te, {
                      variant: "primary",
                      size: "sm",
                      loading: u.value,
                      onClick: A
                    }, {
                      default: l(() => [...P[9] || (P[9] = [
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
                    w(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: C
                    }, {
                      default: l(() => [...P[10] || (P[10] = [
                        g(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    w(te, {
                      variant: "ghost",
                      size: "sm",
                      onClick: P[2] || (P[2] = (J) => m.value = null)
                    }, {
                      default: l(() => [...P[11] || (P[11] = [
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
      w(kt, {
        show: d.value,
        title: "What Gets Exported",
        onClose: P[3] || (P[3] = (J) => d.value = !1)
      }, {
        content: l(() => [...P[12] || (P[12] = [
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
        onClose: P[4] || (P[4] = (J) => y.value = !1)
      }, null, 8, ["issues"])) : r("", !0),
      k.value && v.value ? (s(), M(E1, {
        key: 1,
        models: v.value.warnings.models_without_sources,
        onConfirm: T,
        onCancel: P[5] || (P[5] = (J) => k.value = !1),
        onRevalidate: R
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
      w(te, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: p
      }, {
        default: l(() => [
          Re(m.$slots, "default", {}, () => [
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
    const n = c, i = h(!1), f = h(null), p = h(0), u = B(() => f.value !== null), m = B(() => {
      var $;
      return (($ = f.value) == null ? void 0 : $.name) || "";
    }), d = B(() => {
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
      var A;
      $.stopPropagation(), p.value = 0, i.value = !1;
      const C = (A = $.dataTransfer) == null ? void 0 : A.files;
      C && C.length > 0 && T(C[0]);
    }
    function b($) {
      $.length > 0 && T($[0]);
    }
    function T($) {
      f.value = $, n("fileSelected", $);
    }
    function R() {
      f.value = null, n("clear");
    }
    return ($, C) => (s(), o("div", {
      class: pe(["file-drop-zone", { "drop-active": i.value, "has-file": u.value }]),
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
        w(te, {
          variant: "ghost",
          size: "xs",
          onClick: R,
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
    const c = t, n = B(() => c.workflows.length), i = B(() => c.models.length), f = B(() => c.nodes.length);
    function p(u) {
      return u < 1024 ? `${u} B` : u < 1024 * 1024 ? `${(u / 1024).toFixed(1)} KB` : u < 1024 * 1024 * 1024 ? `${(u / (1024 * 1024)).toFixed(1)} MB` : `${(u / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (u, m) => (s(), o("div", X1, [
      e("div", Q1, [
        w(ut, null, {
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
            t.gitBranch ? (s(), M(Fe, {
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
            t.gitCommit ? (s(), M(Fe, {
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
    St(() => n.nameError, (y) => {
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
      w(ut, null, {
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
              class: pe(["name-input", { error: t.nameError || t.name.length === 0, valid: p.value }]),
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
              class: pe(["strategy-option", { active: t.modelStrategy === _.value }])
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
                (s(!0), o(W, null, ne(Ie(xs), (_) => (s(), o("option", {
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
    var ze, me, we, Pe;
    const i = t, f = n, { previewTarballImport: p, previewGitImport: u, validateEnvironmentName: m, executeImport: d, executeGitImport: v, getImportProgress: y } = He();
    let k = null;
    const _ = h(null), b = h(i.resumeImport ?? !1), T = h(!1), R = h(!1), $ = h(""), C = h(!1), A = h(null), S = h(""), P = h(null), J = h(!1), F = h(null), G = h(null), x = h({
      name: ((ze = i.initialProgress) == null ? void 0 : ze.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), D = h(null), O = h({
      message: ((me = i.initialProgress) == null ? void 0 : me.message) ?? "Preparing import...",
      phase: ((we = i.initialProgress) == null ? void 0 : we.phase) ?? "",
      progress: ((Pe = i.initialProgress) == null ? void 0 : Pe.progress) ?? 0,
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
    ], se = B(() => {
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
    }), X = B(() => !C.value && !A.value && G.value && x.value.name.length > 0 && !D.value && (_.value || P.value));
    async function ue(Q) {
      _.value = Q, C.value = !0, A.value = null, G.value = null;
      try {
        const le = await p(Q);
        G.value = le;
      } catch (le) {
        A.value = le instanceof Error ? le.message : "Failed to analyze file", console.error("Preview error:", le);
      } finally {
        C.value = !1;
      }
    }
    function Y() {
      _.value = null, P.value = null, S.value = "", F.value = null, T.value = !1, R.value = !1, $.value = "", G.value = null, A.value = null, x.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, D.value = null, f("source-cleared");
    }
    function z() {
      Ce(), Y(), b.value = !1, C.value = !1, J.value = !1, O.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function L() {
      if (S.value.trim()) {
        J.value = !0, F.value = null;
        try {
          const Q = await u(S.value.trim());
          P.value = S.value.trim(), G.value = Q;
        } catch (Q) {
          F.value = Q instanceof Error ? Q.message : "Failed to analyze repository";
        } finally {
          J.value = !1;
        }
      }
    }
    function I(Q) {
      try {
        const le = new URL(Q);
        return le.host + le.pathname.replace(/\.git$/, "");
      } catch {
        return Q;
      }
    }
    async function ie(Q) {
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
      if (x.value.name && !(!_.value && !P.value)) {
        b.value = !0, T.value = !1, O.value = { message: `Creating environment '${x.value.name}'...`, phase: "", progress: 0, error: null }, f("import-started");
        try {
          let Q;
          if (_.value)
            Q = await d(
              _.value,
              x.value.name,
              x.value.modelStrategy,
              x.value.torchBackend
            );
          else if (P.value)
            Q = await v(
              P.value,
              x.value.name,
              x.value.modelStrategy,
              x.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          Q.status === "started" ? ke() : (R.value = !1, $.value = Q.message, b.value = !1, T.value = !0);
        } catch (Q) {
          R.value = !1, $.value = Q instanceof Error ? Q.message : "Unknown error occurred during import", b.value = !1, T.value = !0;
        }
      }
    }
    async function ke() {
      if (k) return;
      const Q = async () => {
        try {
          const ve = await y();
          return O.value = {
            message: ve.message,
            phase: ve.phase || "",
            progress: ve.progress ?? (ve.state === "importing" ? 50 : 0),
            error: ve.error || null
          }, ve.state === "complete" ? (Ce(), R.value = !0, $.value = `Environment '${ve.environment_name}' created successfully`, b.value = !1, T.value = !0, ve.environment_name && f("import-complete", ve.environment_name, x.value.switchAfterImport), !1) : ve.state === "error" ? (Ce(), R.value = !1, $.value = ve.error || ve.message, b.value = !1, T.value = !0, !1) : !0;
        } catch (ve) {
          return console.error("Failed to poll import progress:", ve), !0;
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
    return Ve(async () => {
      try {
        const Q = await y();
        console.log("[ComfyGit ImportFlow] Import progress check:", Q.state, Q), Q.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", Q.environment_name), b.value = !0, x.value.name = Q.environment_name || x.value.name || "", O.value = {
          progress: Q.progress ?? 0,
          message: Q.message || "Importing...",
          phase: Q.phase || "",
          error: null
        }, ke());
      } catch (Q) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", Q);
      }
    }), c({
      handleReset: z,
      isImporting: b,
      canImport: X
    }), (Q, le) => {
      var ve;
      return s(), o("div", Qy, [
        !_.value && !P.value && !b.value ? (s(), o("div", Zy, [
          w(J1, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: ue
          }),
          le[7] || (le[7] = e("div", { class: "import-divider" }, [
            e("span", null, "or")
          ], -1)),
          e("div", e0, [
            le[5] || (le[5] = e("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            e("div", t0, [
              Ue(e("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": le[0] || (le[0] = (Ne) => S.value = Ne),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: xt(L, ["enter"]),
                disabled: J.value
              }, null, 40, s0), [
                [Ot, S.value]
              ]),
              w(te, {
                variant: "primary",
                size: "sm",
                disabled: !S.value.trim() || J.value,
                onClick: L
              }, {
                default: l(() => [
                  g(a(J.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            F.value ? (s(), o("div", o0, a(F.value), 1)) : r("", !0),
            le[6] || (le[6] = e("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (_.value || P.value) && !b.value && !T.value ? (s(), o("div", n0, [
          e("div", a0, [
            _.value ? (s(), o("div", l0, [
              le[8] || (le[8] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", i0, [
                e("div", r0, a(_.value.name), 1),
                e("div", d0, a(Te(_.value.size)), 1)
              ])
            ])) : P.value ? (s(), o("div", c0, [
              le[10] || (le[10] = e("div", { class: "file-bar-icon" }, "🔗", -1)),
              e("div", u0, [
                e("div", m0, a(I(P.value)), 1),
                le[9] || (le[9] = e("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : r("", !0),
            w(te, {
              variant: "ghost",
              size: "sm",
              onClick: Y
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
          ])])) : A.value ? (s(), M(gt, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [A.value]
          }, null, 8, ["details"])) : G.value ? (s(), M(Iy, {
            key: 2,
            "source-environment": se.value.sourceEnvironment,
            workflows: se.value.workflows,
            models: se.value.models,
            nodes: se.value.nodes,
            "git-branch": se.value.gitBranch,
            "git-commit": se.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : r("", !0),
          G.value ? (s(), M(Xy, {
            key: 3,
            name: x.value.name,
            "onUpdate:name": le[1] || (le[1] = (Ne) => x.value.name = Ne),
            "model-strategy": x.value.modelStrategy,
            "onUpdate:modelStrategy": le[2] || (le[2] = (Ne) => x.value.modelStrategy = Ne),
            "torch-backend": x.value.torchBackend,
            "onUpdate:torchBackend": le[3] || (le[3] = (Ne) => x.value.torchBackend = Ne),
            "switch-after-import": x.value.switchAfterImport,
            "onUpdate:switchAfterImport": le[4] || (le[4] = (Ne) => x.value.switchAfterImport = Ne),
            "name-error": D.value,
            onValidateName: ie
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : r("", !0),
          x.value.modelStrategy === "skip" && ((ve = G.value) != null && ve.models_needing_download) ? (s(), M(gt, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${G.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : r("", !0),
          e("div", f0, [
            w(te, {
              variant: "secondary",
              size: "md",
              onClick: Y
            }, {
              default: l(() => [...le[13] || (le[13] = [
                g(" Cancel ", -1)
              ])]),
              _: 1
            }),
            w(te, {
              variant: "primary",
              size: "md",
              disabled: !X.value,
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
            e("strong", null, a(x.value.name), 1),
            le[16] || (le[16] = g("... ", -1))
          ]),
          w(cs, {
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
        ])) : T.value ? (s(), o("div", k0, [
          e("div", {
            class: pe(["complete-icon", R.value ? "success" : "error"])
          }, a(R.value ? "✓" : "✕"), 3),
          e("div", b0, [
            e("div", _0, a(R.value ? "Import Successful" : "Import Failed"), 1),
            e("div", $0, a($.value), 1)
          ]),
          e("div", C0, [
            w(te, {
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
      w(kt, {
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
}, B0 = {
  key: 1,
  value: "",
  disabled: ""
}, F0 = ["value", "disabled"], V0 = { class: "config-row" }, W0 = {
  key: 0,
  class: "loading-inline"
}, G0 = { class: "no-volumes-state" }, j0 = { class: "no-volumes-text" }, H0 = ["value"], K0 = { class: "config-row" }, q0 = ["disabled"], Y0 = {
  key: 0,
  value: ""
}, J0 = {
  key: 1,
  value: ""
}, X0 = {
  key: 2,
  value: ""
}, Q0 = ["value", "disabled"], Z0 = { class: "config-row" }, ew = { class: "radio-group" }, tw = { class: "radio-option" }, sw = { class: "radio-label" }, ow = { class: "radio-option" }, nw = { class: "radio-label" }, aw = { class: "config-row" }, lw = { class: "radio-group" }, iw = { class: "radio-option" }, rw = { class: "radio-label" }, dw = { class: "radio-option" }, cw = { class: "radio-label" }, uw = { class: "config-row" }, mw = { class: "config-row" }, vw = { class: "summary-card" }, fw = {
  key: 0,
  class: "loading-text"
}, pw = { class: "summary-row" }, gw = { class: "summary-value" }, hw = { class: "summary-row" }, yw = { class: "summary-value" }, ww = { class: "summary-row" }, kw = { class: "summary-value" }, bw = {
  key: 0,
  class: "summary-sub-row"
}, _w = { class: "summary-sub-label" }, $w = {
  key: 1,
  class: "summary-sub-row warning"
}, Cw = { class: "summary-sub-label" }, xw = { class: "summary-row" }, Sw = { class: "summary-value" }, Iw = { class: "summary-row" }, Ew = { class: "summary-value" }, Pw = { class: "deployment-summary" }, Mw = { class: "summary-columns" }, Rw = { class: "summary-column" }, Tw = { class: "pricing-row" }, Dw = { class: "pricing-value" }, Lw = { class: "pricing-row" }, zw = { class: "pricing-value" }, Uw = { class: "pricing-row" }, Nw = { class: "pricing-value" }, Ow = { class: "pricing-row total" }, Aw = { class: "pricing-value" }, Bw = { class: "summary-column" }, Fw = { class: "spec-row" }, Vw = { class: "spec-row" }, Ww = {
  key: 0,
  class: "spec-row"
}, Gw = {
  key: 1,
  class: "spec-row spot-warning"
}, jw = {
  key: 3,
  class: "deploy-actions"
}, Hw = { class: "pods-header" }, Kw = {
  key: 0,
  class: "loading-text"
}, qw = {
  key: 1,
  class: "empty-state"
}, Yw = {
  key: 2,
  class: "pods-list"
}, Jw = { class: "pod-header" }, Xw = { class: "pod-name" }, Qw = { class: "pod-details" }, Zw = { class: "pod-gpu" }, ek = { class: "pod-uptime" }, tk = { class: "pod-cost" }, sk = { class: "pod-actions" }, ok = { class: "progress-content" }, nk = { class: "phase-indicator" }, ak = { key: 0 }, lk = { key: 1 }, ik = { key: 2 }, rk = {
  key: 3,
  class: "spinner"
}, dk = { class: "phase-text" }, ck = { class: "phase-name" }, uk = { class: "phase-detail" }, mk = {
  key: 0,
  class: "ready-actions"
}, vk = { class: "console-link" }, fk = ["href"], pk = /* @__PURE__ */ oe({
  __name: "DeploySection",
  emits: ["toast"],
  setup(t, { emit: c }) {
    const n = c, {
      getDeploySummary: i,
      testRunPodConnection: f,
      getNetworkVolumes: p,
      getRunPodGpuTypes: u,
      deployToRunPod: m,
      getRunPodPods: d,
      terminateRunPodPod: v,
      stopRunPodPod: y,
      startRunPodPod: k,
      getDeploymentStatus: _,
      getStoredRunPodKey: b,
      clearRunPodKey: T
    } = He(), R = h(!1), $ = h(!1), C = h(""), A = h(!1), S = h(!1), P = h(null), J = h(null), F = h(""), G = h(""), x = h(""), D = h("SECURE"), O = h("ON_DEMAND"), re = h("my-comfyui-deploy"), se = h(""), X = h([]), ue = h(!1), Y = h([]), z = h(!1), L = h([]), I = h(!1), ie = h(null), Z = h(!1), ke = h([]), Ce = h(!1), Te = h(!1), ze = h(null), me = h(null), we = h(null), Pe = h(null), Q = h(!1), le = h(null), ve = h(null), Ne = h(null), nt = B(() => Y.value.find((de) => de.id === G.value) || null), at = B(() => F.value ? Y.value.filter((de) => de.data_center_id === F.value) : Y.value), Me = B(() => A.value && G.value && x.value && se.value && !Te.value), Je = (de) => {
      const N = L.value.find((Ye) => Ye.id === x.value);
      if (!N) return "0.00";
      if (de === "SECURE") return N.securePrice.toFixed(2);
      if (de === "COMMUNITY") return N.communityPrice.toFixed(2);
      const Se = D.value === "SECURE";
      return de === "ON_DEMAND" ? Se ? N.securePrice.toFixed(2) : N.communityPrice.toFixed(2) : Se ? N.secureSpotPrice.toFixed(2) : N.communitySpotPrice.toFixed(2);
    }, Ke = B(() => {
      const de = L.value.find((bt) => bt.id === x.value), N = Y.value.find((bt) => bt.id === G.value);
      if (!de) return null;
      const Se = D.value === "SECURE", Ye = O.value === "SPOT";
      let pt;
      Ye ? pt = Se ? de.secureSpotPrice : de.communitySpotPrice : pt = Se ? de.securePrice : de.communityPrice;
      const It = N ? N.size_gb * 14e-5 : 0, Et = 4e-3;
      return {
        gpu: pt,
        volume: It,
        container: Et,
        total: pt + It + Et
      };
    });
    async function qe() {
      console.log("[Deploy] Loading deploy data..."), await je(), console.log("[Deploy] Volumes loaded, region:", F.value, "GPUs:", L.value.length), await Promise.all([lt(), Le()]);
    }
    async function mt() {
      if (C.value) {
        S.value = !0, P.value = null;
        try {
          const de = await f(C.value, !0);
          de.status === "success" ? (A.value = !0, J.value = de.credit_balance ?? null, P.value = { type: "success", message: de.message }, await qe()) : P.value = { type: "error", message: de.message };
        } catch (de) {
          P.value = {
            type: "error",
            message: de instanceof Error ? de.message : "Connection test failed"
          };
        } finally {
          S.value = !1;
        }
      }
    }
    async function _e() {
      try {
        await T(), C.value = "", A.value = !1, P.value = null, J.value = null, X.value = [], F.value = "", Y.value = [], G.value = "", L.value = [], x.value = "", ie.value = null, ke.value = [], n("toast", "API key cleared", "info");
      } catch {
        n("toast", "Failed to clear key", "error");
      }
    }
    async function je() {
      z.value = !0, ue.value = !0;
      try {
        const de = await p();
        Y.value = de.volumes, console.log("[Deploy] Network volumes:", de.volumes.map((Se) => ({ id: Se.id, name: Se.name, dc: Se.data_center_id })));
        const N = /* @__PURE__ */ new Map();
        for (const Se of de.volumes)
          Se.data_center_id && !N.has(Se.data_center_id) && N.set(Se.data_center_id, {
            id: Se.data_center_id,
            name: Se.data_center_name || Se.data_center_id,
            available: !0
          });
        if (X.value = Array.from(N.values()), console.log("[Deploy] Data centers from volumes:", X.value), Y.value.length > 0) {
          const Se = Y.value[0];
          G.value = Se.id, console.log("[Deploy] Auto-selected volume:", Se.name, "data_center_id:", Se.data_center_id), Se.data_center_id ? (F.value = Se.data_center_id, console.log("[Deploy] Set region to:", F.value), await Ze(Se.data_center_id)) : console.warn("[Deploy] Volume has no data_center_id!");
        }
      } catch {
        n("toast", "Failed to load network volumes", "error");
      } finally {
        z.value = !1, ue.value = !1;
      }
    }
    async function Ze(de) {
      console.log("[Deploy] loadGpuTypes called with dataCenterId:", de), I.value = !0;
      try {
        const N = await u(de);
        L.value = N.gpu_types, console.log(
          "[Deploy] GPU types loaded:",
          N.gpu_types.length,
          "GPUs,",
          N.gpu_types.filter((Ye) => Ye.available).length,
          "available"
        );
        const Se = L.value.find((Ye) => Ye.available);
        Se ? (x.value = Se.id, console.log("[Deploy] Auto-selected GPU:", Se.displayName)) : (x.value = "", console.log("[Deploy] No available GPUs in this region"));
      } catch {
        n("toast", "Failed to load GPU types", "error");
      } finally {
        I.value = !1;
      }
    }
    St(F, async (de) => {
      if (console.log("[Deploy] Region watcher fired:", de, "(loading volumes:", z.value, ")"), !de) return;
      if (z.value) {
        console.log("[Deploy] Skipping GPU load - volumes still loading");
        return;
      }
      const N = Y.value.find((Se) => Se.id === G.value);
      N && N.data_center_id !== de && (G.value = ""), await Ze(de);
    }), St(G, async (de) => {
      if (console.log("[Deploy] Volume watcher fired:", de, "(loading volumes:", z.value, ")"), !de) {
        L.value = [], x.value = "";
        return;
      }
      if (z.value) {
        console.log("[Deploy] Skipping - volumes still loading");
        return;
      }
      const N = Y.value.find((Se) => Se.id === de);
      N && N.data_center_id !== F.value ? F.value = N.data_center_id : N && await Ze(N.data_center_id);
    });
    async function lt() {
      Z.value = !0;
      try {
        ie.value = await i();
      } catch {
        n("toast", "Failed to load environment summary", "error");
      } finally {
        Z.value = !1;
      }
    }
    async function Le() {
      Ce.value = !0;
      try {
        const de = await d();
        ke.value = de.pods;
      } catch {
        n("toast", "Failed to load pods", "error");
      } finally {
        Ce.value = !1;
      }
    }
    async function ge() {
      if (!(!x.value || !G.value || !se.value)) {
        Te.value = !0, ze.value = null;
        try {
          let de;
          if (O.value === "SPOT") {
            const Se = L.value.find((Ye) => Ye.id === x.value);
            Se && (de = D.value === "SECURE" ? Se.secureSpotPrice : Se.communitySpotPrice);
          }
          const N = await m({
            gpu_type_id: x.value,
            pod_name: re.value || "my-comfyui-deploy",
            network_volume_id: G.value,
            cloud_type: D.value,
            pricing_type: O.value,
            spot_bid: de,
            import_source: se.value
          });
          ze.value = N, N.status === "success" && N.pod_id ? (le.value = N.pod_id, Q.value = !0, K(N.pod_id), await Le()) : n("toast", N.message, "error");
        } catch (de) {
          ze.value = {
            status: "error",
            message: de instanceof Error ? de.message : "Deployment failed"
          }, n("toast", "Deployment failed", "error");
        } finally {
          Te.value = !1;
        }
      }
    }
    function K(de) {
      E(de), Ne.value = window.setInterval(() => E(de), 3e3);
    }
    function q() {
      Ne.value && (clearInterval(Ne.value), Ne.value = null);
    }
    async function E(de) {
      try {
        const N = await _(de);
        ve.value = N, (N.phase === "READY" || N.phase === "ERROR" || N.phase === "STOPPED") && (q(), N.phase === "READY" && n("toast", "ComfyUI is ready!", "success"), await Le());
      } catch (N) {
        console.error("Failed to poll deployment status:", N);
      }
    }
    function V() {
      Q.value = !1, q(), le.value = null, ve.value = null;
    }
    function ee() {
      var de;
      (de = ve.value) != null && de.comfyui_url && window.open(ve.value.comfyui_url, "_blank", "noopener,noreferrer");
    }
    function be(de) {
      return {
        STARTING_POD: "Starting Pod",
        SETTING_UP: "Setting Up Environment",
        READY: "Ready",
        STOPPED: "Stopped",
        ERROR: "Error"
      }[de || ""] || "Initializing...";
    }
    function We(de) {
      return {
        STARTING_POD: 25,
        SETTING_UP: 60,
        READY: 100,
        STOPPED: 0,
        ERROR: 0
      }[de || ""] ?? 10;
    }
    async function vt(de) {
      me.value = de;
      try {
        const N = await v(de);
        N.status === "success" ? (n("toast", "Pod terminated", "success"), await Le()) : n("toast", N.message, "error");
      } catch {
        n("toast", "Failed to terminate pod", "error");
      } finally {
        me.value = null;
      }
    }
    async function it(de) {
      we.value = de;
      try {
        const N = await y(de);
        N.status === "success" ? (n("toast", "Pod stopped", "success"), await Le()) : n("toast", N.message, "error");
      } catch {
        n("toast", "Failed to stop pod", "error");
      } finally {
        we.value = null;
      }
    }
    async function Lt(de) {
      Pe.value = de;
      try {
        const N = await k(de);
        N.status === "success" ? (n("toast", "Pod starting...", "success"), await Le()) : n("toast", N.message, "error");
      } catch {
        n("toast", "Failed to start pod", "error");
      } finally {
        Pe.value = null;
      }
    }
    function ft(de) {
      window.open(de, "_blank", "noopener,noreferrer");
    }
    function zt(de) {
      const N = Math.floor(de / 3600), Se = Math.floor(de % 3600 / 60);
      return N > 0 ? `${N}h ${Se}m` : `${Se}m`;
    }
    return Ve(async () => {
      try {
        const de = await b(!0);
        de.has_key && de.key_preview && (C.value = `****${de.key_preview}`, de.valid ? (A.value = !0, J.value = de.credit_balance ?? null, P.value = { type: "success", message: "Connected to RunPod" }, await qe()) : de.error && (P.value = { type: "error", message: de.error }));
      } catch {
      }
    }), bs(() => {
      q();
    }), (de, N) => {
      var Se, Ye, pt, It, Et, bt;
      return s(), o(W, null, [
        w(tt, null, {
          header: l(() => [
            w(st, {
              title: "DEPLOY TO CLOUD",
              "show-info": !0,
              onInfoClick: N[0] || (N[0] = (fe) => R.value = !0)
            })
          ]),
          content: l(() => [
            w(Ae, { title: "RUNPOD API KEY" }, {
              default: l(() => [
                e("div", E0, [
                  e("div", P0, [
                    e("div", M0, [
                      Ue(e("input", {
                        "onUpdate:modelValue": N[1] || (N[1] = (fe) => C.value = fe),
                        type: $.value ? "text" : "password",
                        class: "api-key-input",
                        placeholder: "Enter your RunPod API key (rp_...)",
                        disabled: A.value
                      }, null, 8, R0), [
                        [vo, C.value]
                      ]),
                      e("button", {
                        class: "toggle-visibility-btn",
                        onClick: N[2] || (N[2] = (fe) => $.value = !$.value),
                        title: $.value ? "Hide key" : "Show key"
                      }, a($.value ? "👁" : "👁‍🗨"), 9, T0)
                    ]),
                    A.value ? r("", !0) : (s(), M(te, {
                      key: 0,
                      variant: "secondary",
                      size: "sm",
                      loading: S.value,
                      disabled: !C.value || S.value,
                      onClick: mt
                    }, {
                      default: l(() => [...N[14] || (N[14] = [
                        g(" Test ", -1)
                      ])]),
                      _: 1
                    }, 8, ["loading", "disabled"])),
                    A.value ? (s(), M(te, {
                      key: 1,
                      variant: "ghost",
                      size: "sm",
                      onClick: _e
                    }, {
                      default: l(() => [...N[15] || (N[15] = [
                        g(" Clear ", -1)
                      ])]),
                      _: 1
                    })) : r("", !0)
                  ]),
                  P.value ? (s(), o("div", {
                    key: 0,
                    class: pe(["connection-status", P.value.type])
                  }, [
                    e("span", D0, a(P.value.type === "success" ? "✓" : "✕"), 1),
                    e("span", L0, a(P.value.message), 1),
                    J.value !== null ? (s(), o("span", z0, " $" + a(J.value.toFixed(2)) + " credit ", 1)) : r("", !0)
                  ], 2)) : r("", !0),
                  N[16] || (N[16] = e("div", { class: "api-key-help" }, [
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
            A.value ? (s(), M(Ae, {
              key: 0,
              title: "CONFIGURATION"
            }, {
              default: l(() => [
                e("div", U0, [
                  e("div", N0, [
                    N[17] || (N[17] = e("label", { class: "config-label" }, "Region", -1)),
                    Ue(e("select", {
                      "onUpdate:modelValue": N[3] || (N[3] = (fe) => F.value = fe),
                      class: "config-select",
                      disabled: ue.value
                    }, [
                      ue.value ? (s(), o("option", A0, "Loading...")) : F.value ? r("", !0) : (s(), o("option", B0, "Select a region")),
                      (s(!0), o(W, null, ne(X.value, (fe) => (s(), o("option", {
                        key: fe.id,
                        value: fe.id,
                        disabled: !fe.available
                      }, a(fe.id) + " (" + a(fe.name) + ")" + a(fe.available ? "" : " [Unavailable]"), 9, F0))), 128))
                    ], 8, O0), [
                      [Mt, F.value]
                    ])
                  ]),
                  e("div", V0, [
                    N[22] || (N[22] = e("label", { class: "config-label" }, "Network Volume", -1)),
                    z.value ? (s(), o("div", W0, "Loading volumes...")) : at.value.length === 0 ? (s(), o(W, { key: 1 }, [
                      e("div", G0, [
                        N[18] || (N[18] = e("span", { class: "no-volumes-icon" }, "⚠", -1)),
                        e("span", j0, "No volumes in " + a(F.value || "this region"), 1)
                      ]),
                      N[19] || (N[19] = e("p", { class: "volume-help" }, " Network volumes provide persistent storage that survives pod termination. Create one on RunPod first: ", -1)),
                      N[20] || (N[20] = e("a", {
                        href: "https://www.runpod.io/console/user/storage",
                        target: "_blank",
                        rel: "noopener",
                        class: "create-volume-link"
                      }, " Create Volume on RunPod → ", -1))
                    ], 64)) : (s(), o(W, { key: 2 }, [
                      Ue(e("select", {
                        "onUpdate:modelValue": N[4] || (N[4] = (fe) => G.value = fe),
                        class: "config-select"
                      }, [
                        (s(!0), o(W, null, ne(at.value, (fe) => (s(), o("option", {
                          key: fe.id,
                          value: fe.id
                        }, a(fe.name) + " (" + a(fe.size_gb) + "GB) ", 9, H0))), 128))
                      ], 512), [
                        [Mt, G.value]
                      ]),
                      N[21] || (N[21] = e("a", {
                        href: "https://www.runpod.io/console/user/storage",
                        target: "_blank",
                        rel: "noopener",
                        class: "create-volume-inline-link"
                      }, " + Create new volume ", -1))
                    ], 64))
                  ]),
                  e("div", K0, [
                    N[23] || (N[23] = e("label", { class: "config-label" }, "GPU Type", -1)),
                    Ue(e("select", {
                      "onUpdate:modelValue": N[5] || (N[5] = (fe) => x.value = fe),
                      class: "config-select",
                      disabled: I.value || !G.value
                    }, [
                      G.value ? I.value ? (s(), o("option", J0, "Loading GPUs...")) : L.value.length === 0 ? (s(), o("option", X0, "No GPUs available in this region")) : r("", !0) : (s(), o("option", Y0, "Select a volume first")),
                      (s(!0), o(W, null, ne(L.value, (fe) => (s(), o("option", {
                        key: fe.id,
                        value: fe.id,
                        disabled: !fe.available
                      }, a(fe.displayName) + " (" + a(fe.memoryInGb) + "GB) - $" + a(D.value === "SECURE" ? fe.securePrice.toFixed(2) : fe.communityPrice.toFixed(2)) + "/hr " + a(fe.stockStatus ? `[${fe.stockStatus}]` : "") + a(fe.available ? "" : " [Unavailable]"), 9, Q0))), 128))
                    ], 8, q0), [
                      [Mt, x.value]
                    ])
                  ]),
                  e("div", Z0, [
                    N[24] || (N[24] = e("label", { class: "config-label" }, "Cloud Type", -1)),
                    e("div", ew, [
                      e("label", tw, [
                        Ue(e("input", {
                          type: "radio",
                          "onUpdate:modelValue": N[6] || (N[6] = (fe) => D.value = fe),
                          value: "SECURE"
                        }, null, 512), [
                          [Nt, D.value]
                        ]),
                        e("span", sw, "Secure ($" + a(Je("SECURE")) + "/hr)", 1)
                      ]),
                      e("label", ow, [
                        Ue(e("input", {
                          type: "radio",
                          "onUpdate:modelValue": N[7] || (N[7] = (fe) => D.value = fe),
                          value: "COMMUNITY"
                        }, null, 512), [
                          [Nt, D.value]
                        ]),
                        e("span", nw, "Community ($" + a(Je("COMMUNITY")) + "/hr)", 1)
                      ])
                    ])
                  ]),
                  e("div", aw, [
                    N[25] || (N[25] = e("label", { class: "config-label" }, [
                      g(" Pricing "),
                      e("span", {
                        class: "info-tooltip",
                        title: "On-Demand pods run until you stop them. Spot pods are cheaper but may be interrupted if capacity is needed. Good for experimentation."
                      }, "ⓘ")
                    ], -1)),
                    e("div", lw, [
                      e("label", iw, [
                        Ue(e("input", {
                          type: "radio",
                          "onUpdate:modelValue": N[8] || (N[8] = (fe) => O.value = fe),
                          value: "ON_DEMAND"
                        }, null, 512), [
                          [Nt, O.value]
                        ]),
                        e("span", rw, "On-Demand ($" + a(Je("ON_DEMAND")) + "/hr)", 1)
                      ]),
                      e("label", dw, [
                        Ue(e("input", {
                          type: "radio",
                          "onUpdate:modelValue": N[9] || (N[9] = (fe) => O.value = fe),
                          value: "SPOT"
                        }, null, 512), [
                          [Nt, O.value]
                        ]),
                        e("span", cw, "Spot ($" + a(Je("SPOT")) + "/hr)", 1)
                      ])
                    ])
                  ]),
                  e("div", uw, [
                    N[26] || (N[26] = e("label", { class: "config-label" }, "Pod Name", -1)),
                    Ue(e("input", {
                      "onUpdate:modelValue": N[10] || (N[10] = (fe) => re.value = fe),
                      type: "text",
                      class: "config-input",
                      placeholder: "my-comfyui-deploy"
                    }, null, 512), [
                      [Ot, re.value]
                    ])
                  ]),
                  e("div", mw, [
                    N[27] || (N[27] = e("label", { class: "config-label" }, [
                      g(" Environment Source "),
                      e("span", {
                        class: "info-tooltip",
                        title: "Git repository URL containing a ComfyGit environment (pyproject.toml with comfyui dependency)"
                      }, "ⓘ")
                    ], -1)),
                    Ue(e("input", {
                      "onUpdate:modelValue": N[11] || (N[11] = (fe) => se.value = fe),
                      type: "text",
                      class: "config-input",
                      placeholder: "https://github.com/user/comfyui-env.git"
                    }, null, 512), [
                      [Ot, se.value]
                    ]),
                    N[28] || (N[28] = e("span", { class: "field-help" }, "Git URL of your ComfyGit environment repository", -1))
                  ])
                ])
              ]),
              _: 1
            })) : r("", !0),
            A.value ? (s(), M(Ae, {
              key: 1,
              title: "ENVIRONMENT SUMMARY"
            }, {
              default: l(() => [
                e("div", vw, [
                  Z.value ? (s(), o("div", fw, "Loading environment summary...")) : ie.value ? (s(), o(W, { key: 1 }, [
                    e("div", pw, [
                      N[29] || (N[29] = e("span", { class: "summary-label" }, "ComfyUI", -1)),
                      e("span", gw, a(ie.value.comfyui_version), 1)
                    ]),
                    e("div", hw, [
                      N[30] || (N[30] = e("span", { class: "summary-label" }, "Nodes", -1)),
                      e("span", yw, a(ie.value.node_count) + " custom nodes", 1)
                    ]),
                    e("div", ww, [
                      N[31] || (N[31] = e("span", { class: "summary-label" }, "Models", -1)),
                      e("span", kw, a(ie.value.model_count) + " models", 1)
                    ]),
                    ie.value.models_with_sources > 0 ? (s(), o("div", bw, [
                      e("span", _w, "└─ " + a(ie.value.models_with_sources) + " with sources (auto-download)", 1)
                    ])) : r("", !0),
                    ie.value.models_without_sources > 0 ? (s(), o("div", $w, [
                      e("span", Cw, "└─ " + a(ie.value.models_without_sources) + " without sources (manual upload)", 1)
                    ])) : r("", !0),
                    e("div", xw, [
                      N[32] || (N[32] = e("span", { class: "summary-label" }, "Workflows", -1)),
                      e("span", Sw, a(ie.value.workflow_count) + " committed", 1)
                    ]),
                    e("div", Iw, [
                      N[33] || (N[33] = e("span", { class: "summary-label" }, "Package", -1)),
                      e("span", Ew, "~" + a(ie.value.estimated_package_size_mb) + " MB", 1)
                    ])
                  ], 64)) : r("", !0)
                ])
              ]),
              _: 1
            })) : r("", !0),
            A.value && Ke.value ? (s(), M(Ae, {
              key: 2,
              title: "DEPLOYMENT SUMMARY"
            }, {
              default: l(() => {
                var fe, rt;
                return [
                  e("div", Pw, [
                    e("div", Mw, [
                      e("div", Rw, [
                        N[38] || (N[38] = e("div", { class: "column-header" }, "Pricing", -1)),
                        e("div", Tw, [
                          N[34] || (N[34] = e("span", { class: "pricing-label" }, "GPU:", -1)),
                          e("span", Dw, "$" + a(Ke.value.gpu.toFixed(2)) + "/hr", 1)
                        ]),
                        e("div", Lw, [
                          N[35] || (N[35] = e("span", { class: "pricing-label" }, "Volume:", -1)),
                          e("span", zw, "$" + a(Ke.value.volume.toFixed(3)) + "/hr", 1)
                        ]),
                        e("div", Uw, [
                          N[36] || (N[36] = e("span", { class: "pricing-label" }, "Disk:", -1)),
                          e("span", Nw, "$" + a(Ke.value.container.toFixed(3)) + "/hr", 1)
                        ]),
                        N[39] || (N[39] = e("div", { class: "pricing-divider" }, null, -1)),
                        e("div", Ow, [
                          N[37] || (N[37] = e("span", { class: "pricing-label" }, "Total:", -1)),
                          e("span", Aw, "~$" + a(Ke.value.total.toFixed(2)) + "/hr", 1)
                        ])
                      ]),
                      e("div", Bw, [
                        N[41] || (N[41] = e("div", { class: "column-header" }, "Pod Specs", -1)),
                        e("div", Fw, [
                          e("span", null, a(((fe = L.value.find((_t) => _t.id === x.value)) == null ? void 0 : fe.displayName) || "GPU") + " (" + a(((rt = L.value.find((_t) => _t.id === x.value)) == null ? void 0 : rt.memoryInGb) || 0) + "GB VRAM)", 1)
                        ]),
                        e("div", Vw, [
                          e("span", null, "Region: " + a(F.value), 1)
                        ]),
                        nt.value ? (s(), o("div", Ww, [
                          e("span", null, "Volume: " + a(nt.value.name), 1)
                        ])) : r("", !0),
                        O.value === "SPOT" ? (s(), o("div", Gw, [...N[40] || (N[40] = [
                          e("span", null, "⚠ Spot instance - may be interrupted", -1)
                        ])])) : r("", !0)
                      ])
                    ])
                  ])
                ];
              }),
              _: 1
            })) : r("", !0),
            A.value ? (s(), o("div", jw, [
              w(te, {
                variant: "primary",
                size: "md",
                loading: Te.value,
                disabled: !Me.value,
                onClick: ge
              }, {
                default: l(() => [...N[42] || (N[42] = [
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
            ze.value ? (s(), M(Ae, {
              key: 4,
              title: "DEPLOY STATUS"
            }, {
              default: l(() => [
                w(et, {
                  status: ze.value.status === "success" ? "synced" : "broken"
                }, Bt({
                  icon: l(() => [
                    g(a(ze.value.status === "success" ? "✓" : "✕"), 1)
                  ]),
                  title: l(() => [
                    g(a(ze.value.status === "success" ? "Deployment Started" : "Deployment Failed"), 1)
                  ]),
                  subtitle: l(() => [
                    g(a(ze.value.message), 1)
                  ]),
                  actions: l(() => [
                    w(te, {
                      variant: "ghost",
                      size: "sm",
                      onClick: N[12] || (N[12] = (fe) => ze.value = null)
                    }, {
                      default: l(() => [...N[43] || (N[43] = [
                        g(" Dismiss ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, [
                  ze.value.pod_id ? {
                    name: "details",
                    fn: l(() => [
                      w(Fe, {
                        label: "Pod ID:",
                        value: ze.value.pod_id
                      }, null, 8, ["value"])
                    ]),
                    key: "0"
                  } : void 0
                ]), 1032, ["status"])
              ]),
              _: 1
            })) : r("", !0),
            A.value ? (s(), M(Ae, {
              key: 5,
              title: "ACTIVE PODS"
            }, {
              default: l(() => [
                e("div", Hw, [
                  w(te, {
                    variant: "ghost",
                    size: "sm",
                    loading: Ce.value,
                    onClick: Le
                  }, {
                    default: l(() => [...N[44] || (N[44] = [
                      g(" Refresh ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"])
                ]),
                Ce.value && ke.value.length === 0 ? (s(), o("div", Kw, " Loading pods... ")) : ke.value.length === 0 ? (s(), o("div", qw, [...N[45] || (N[45] = [
                  e("span", { class: "empty-icon" }, "○", -1),
                  e("span", { class: "empty-text" }, "No active pods", -1)
                ])])) : (s(), o("div", Yw, [
                  (s(!0), o(W, null, ne(ke.value, (fe) => (s(), o("div", {
                    key: fe.id,
                    class: "pod-card"
                  }, [
                    e("div", Jw, [
                      e("span", Xw, a(fe.name), 1),
                      e("span", {
                        class: pe(["pod-status", fe.status.toLowerCase()])
                      }, a(fe.status === "RUNNING" ? "●" : "○") + " " + a(fe.status), 3)
                    ]),
                    e("div", Qw, [
                      e("span", Zw, a(fe.gpu_type), 1),
                      N[46] || (N[46] = e("span", { class: "pod-separator" }, "•", -1)),
                      e("span", ek, a(zt(fe.uptime_seconds)), 1),
                      N[47] || (N[47] = e("span", { class: "pod-separator" }, "•", -1)),
                      e("span", tk, "$" + a(fe.total_cost.toFixed(2)), 1)
                    ]),
                    e("div", sk, [
                      fe.comfyui_url && fe.status === "RUNNING" ? (s(), M(te, {
                        key: 0,
                        variant: "primary",
                        size: "sm",
                        onClick: (rt) => ft(fe.comfyui_url)
                      }, {
                        default: l(() => [...N[48] || (N[48] = [
                          g(" Open ComfyUI ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : r("", !0),
                      fe.status === "RUNNING" ? (s(), M(te, {
                        key: 1,
                        variant: "secondary",
                        size: "sm",
                        loading: we.value === fe.id,
                        onClick: (rt) => it(fe.id),
                        title: "Stop pod (saves money, keeps storage)"
                      }, {
                        default: l(() => [...N[49] || (N[49] = [
                          g(" Stop ", -1)
                        ])]),
                        _: 1
                      }, 8, ["loading", "onClick"])) : r("", !0),
                      fe.status === "EXITED" || fe.status === "STOPPED" ? (s(), M(te, {
                        key: 2,
                        variant: "secondary",
                        size: "sm",
                        loading: Pe.value === fe.id,
                        onClick: (rt) => Lt(fe.id),
                        title: "Start stopped pod"
                      }, {
                        default: l(() => [...N[50] || (N[50] = [
                          g(" Start ", -1)
                        ])]),
                        _: 1
                      }, 8, ["loading", "onClick"])) : r("", !0),
                      w(te, {
                        variant: "ghost",
                        size: "sm",
                        loading: me.value === fe.id,
                        onClick: (rt) => vt(fe.id)
                      }, {
                        default: l(() => [...N[51] || (N[51] = [
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
        w(kt, {
          show: R.value,
          title: "Deploy to Cloud",
          onClose: N[13] || (N[13] = (fe) => R.value = !1)
        }, {
          content: l(() => [...N[52] || (N[52] = [
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
        Q.value ? (s(), M(ot, {
          key: 0,
          title: "Deploying to RunPod",
          size: "sm",
          "show-close-button": ((Se = ve.value) == null ? void 0 : Se.phase) === "READY" || ((Ye = ve.value) == null ? void 0 : Ye.phase) === "ERROR" || ((pt = ve.value) == null ? void 0 : pt.phase) === "STOPPED",
          "close-on-overlay-click": !1,
          onClose: V
        }, Bt({
          body: l(() => {
            var fe, rt, _t, Ft, Vt, Wt, H, ce, $e, Oe, j, U;
            return [
              e("div", ok, [
                e("div", nk, [
                  e("div", {
                    class: pe(["phase-icon", (rt = (fe = ve.value) == null ? void 0 : fe.phase) == null ? void 0 : rt.toLowerCase()])
                  }, [
                    ((_t = ve.value) == null ? void 0 : _t.phase) === "READY" ? (s(), o("span", ak, "✓")) : ((Ft = ve.value) == null ? void 0 : Ft.phase) === "ERROR" ? (s(), o("span", lk, "✕")) : ((Vt = ve.value) == null ? void 0 : Vt.phase) === "STOPPED" ? (s(), o("span", ik, "○")) : (s(), o("span", rk, "⟳"))
                  ], 2),
                  e("div", dk, [
                    e("div", ck, a(be((Wt = ve.value) == null ? void 0 : Wt.phase)), 1),
                    e("div", uk, a(((H = ve.value) == null ? void 0 : H.phase_detail) || "Starting..."), 1)
                  ])
                ]),
                w(Ss, {
                  progress: We((ce = ve.value) == null ? void 0 : ce.phase),
                  variant: (($e = ve.value) == null ? void 0 : $e.phase) === "ERROR" ? "error" : ((Oe = ve.value) == null ? void 0 : Oe.phase) === "READY" ? "success" : "default"
                }, null, 8, ["progress", "variant"]),
                ((j = ve.value) == null ? void 0 : j.phase) === "READY" ? (s(), o("div", mk, [
                  w(te, {
                    variant: "primary",
                    size: "md",
                    onClick: ee
                  }, {
                    default: l(() => [...N[53] || (N[53] = [
                      g(" Open ComfyUI ", -1)
                    ])]),
                    _: 1
                  })
                ])) : r("", !0),
                e("div", vk, [
                  (U = ve.value) != null && U.console_url ? (s(), o("a", {
                    key: 0,
                    href: ve.value.console_url,
                    target: "_blank",
                    rel: "noopener"
                  }, " View in RunPod Console → ", 8, fk)) : r("", !0)
                ])
              ])
            ];
          }),
          _: 2
        }, [
          ((It = ve.value) == null ? void 0 : It.phase) === "READY" || ((Et = ve.value) == null ? void 0 : Et.phase) === "ERROR" || ((bt = ve.value) == null ? void 0 : bt.phase) === "STOPPED" ? {
            name: "footer",
            fn: l(() => [
              w(te, {
                variant: "ghost",
                size: "sm",
                onClick: V
              }, {
                default: l(() => [...N[54] || (N[54] = [
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
}), gk = /* @__PURE__ */ ae(pk, [["__scopeId", "data-v-e79df006"]]), hk = { class: "header-info" }, yk = { class: "commit-hash" }, wk = {
  key: 0,
  class: "commit-refs"
}, kk = { class: "commit-message" }, bk = { class: "commit-date" }, _k = {
  key: 0,
  class: "loading"
}, $k = {
  key: 1,
  class: "changes-section"
}, Ck = { class: "stats-row" }, xk = { class: "stat" }, Sk = { class: "stat insertions" }, Ik = { class: "stat deletions" }, Ek = {
  key: 0,
  class: "change-group"
}, Pk = {
  key: 1,
  class: "change-group"
}, Mk = {
  key: 0,
  class: "version"
}, Rk = {
  key: 2,
  class: "change-group"
}, Tk = { class: "change-item" }, Dk = /* @__PURE__ */ oe({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const c = t, { getCommitDetail: n } = He(), i = h(null), f = h(!0), p = B(() => {
      if (!i.value) return !1;
      const m = i.value.changes.workflows;
      return m.added.length > 0 || m.modified.length > 0 || m.deleted.length > 0;
    }), u = B(() => {
      if (!i.value) return !1;
      const m = i.value.changes.nodes;
      return m.added.length > 0 || m.removed.length > 0;
    });
    return Ve(async () => {
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
          e("div", hk, [
            d[4] || (d[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", yk, a(((v = i.value) == null ? void 0 : v.short_hash) || t.commit.short_hash || ((y = t.commit.hash) == null ? void 0 : y.slice(0, 7))), 1),
            (_ = (k = i.value) == null ? void 0 : k.refs) != null && _.length ? (s(), o("span", wk, [
              (s(!0), o(W, null, ne(i.value.refs, (b) => (s(), o("span", {
                key: b,
                class: "ref-badge"
              }, a(b), 1))), 128))
            ])) : r("", !0)
          ]),
          w(he, {
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
          e("div", kk, a(((v = i.value) == null ? void 0 : v.message) || t.commit.message), 1),
          e("div", bk, a(((y = i.value) == null ? void 0 : y.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          f.value ? (s(), o("div", _k, "Loading details...")) : i.value ? (s(), o("div", $k, [
            e("div", Ck, [
              e("span", xk, a(i.value.stats.files_changed) + " files", 1),
              e("span", Sk, "+" + a(i.value.stats.insertions), 1),
              e("span", Ik, "-" + a(i.value.stats.deletions), 1)
            ]),
            p.value ? (s(), o("div", Ek, [
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
            u.value ? (s(), o("div", Pk, [
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
                k.version ? (s(), o("span", Mk, "(" + a(k.version) + ")", 1)) : r("", !0)
              ]))), 128)),
              (s(!0), o(W, null, ne(i.value.changes.nodes.removed, (k) => (s(), o("div", {
                key: "rem-" + k.name,
                class: "change-item deleted"
              }, [
                d[12] || (d[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(k.name), 1)
              ]))), 128))
            ])) : r("", !0),
            i.value.changes.models.resolved > 0 ? (s(), o("div", Rk, [
              w(es, { variant: "section" }, {
                default: l(() => [...d[13] || (d[13] = [
                  g("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", Tk, [
                d[14] || (d[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, a(i.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : r("", !0)
          ])) : r("", !0)
        ];
      }),
      footer: l(() => [
        w(he, {
          variant: "secondary",
          onClick: d[1] || (d[1] = (v) => m.$emit("createBranch", t.commit))
        }, {
          default: l(() => [...d[15] || (d[15] = [
            g(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        w(he, {
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
}), Lk = /* @__PURE__ */ ae(Dk, [["__scopeId", "data-v-d256ff6d"]]), zk = { class: "base-textarea-wrapper" }, Uk = ["value", "rows", "placeholder", "disabled", "maxlength"], Nk = {
  key: 0,
  class: "base-textarea-count"
}, Ok = /* @__PURE__ */ oe({
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
    return (p, u) => (s(), o("div", zk, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: u[0] || (u[0] = (m) => p.$emit("update:modelValue", m.target.value)),
        onKeydown: [
          u[1] || (u[1] = xt(Be((m) => p.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          u[2] || (u[2] = xt(Be((m) => p.$emit("ctrlEnter"), ["meta"]), ["enter"])),
          xt(f, ["enter"])
        ]
      }, null, 40, Uk),
      t.showCharCount && t.maxLength ? (s(), o("div", Nk, a(t.modelValue.length) + " / " + a(t.maxLength), 1)) : r("", !0)
    ]));
  }
}), Ns = /* @__PURE__ */ ae(Ok, [["__scopeId", "data-v-c6d16c93"]]), Ak = ["checked", "disabled"], Bk = { class: "base-checkbox-box" }, Fk = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, Vk = {
  key: 0,
  class: "base-checkbox-label"
}, Wk = /* @__PURE__ */ oe({
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
      }, null, 40, Ak),
      e("span", Bk, [
        t.modelValue ? (s(), o("svg", Fk, [...n[1] || (n[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : r("", !0)
      ]),
      c.$slots.default ? (s(), o("span", Vk, [
        Re(c.$slots, "default", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), Os = /* @__PURE__ */ ae(Wk, [["__scopeId", "data-v-bf17c831"]]), Gk = { class: "popover-header" }, jk = { class: "popover-body" }, Hk = {
  key: 0,
  class: "changes-summary"
}, Kk = {
  key: 0,
  class: "change-item"
}, qk = {
  key: 1,
  class: "change-item"
}, Yk = {
  key: 2,
  class: "change-item"
}, Jk = {
  key: 3,
  class: "change-item"
}, Xk = {
  key: 4,
  class: "change-item"
}, Qk = {
  key: 5,
  class: "change-item"
}, Zk = {
  key: 1,
  class: "no-changes"
}, eb = {
  key: 2,
  class: "loading"
}, tb = {
  key: 3,
  class: "issues-error"
}, sb = { class: "error-header" }, ob = { class: "error-title" }, nb = { class: "issues-list" }, ab = { class: "message-section" }, lb = { class: "popover-footer" }, ib = {
  key: 1,
  class: "commit-popover"
}, rb = { class: "popover-header" }, db = { class: "popover-body" }, cb = {
  key: 0,
  class: "changes-summary"
}, ub = {
  key: 0,
  class: "change-item"
}, mb = {
  key: 1,
  class: "change-item"
}, vb = {
  key: 2,
  class: "change-item"
}, fb = {
  key: 3,
  class: "change-item"
}, pb = {
  key: 4,
  class: "change-item"
}, gb = {
  key: 5,
  class: "change-item"
}, hb = {
  key: 1,
  class: "no-changes"
}, yb = {
  key: 2,
  class: "loading"
}, wb = {
  key: 3,
  class: "issues-error"
}, kb = { class: "error-header" }, bb = { class: "error-title" }, _b = { class: "issues-list" }, $b = { class: "message-section" }, Cb = { class: "popover-footer" }, xb = /* @__PURE__ */ oe({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: c }) {
    const n = t, i = c, { commit: f } = He(), p = h(""), u = h(!1), m = h(!1), d = B(() => {
      if (!n.status) return !1;
      const T = n.status.workflows;
      return T.new.length > 0 || T.modified.length > 0 || T.deleted.length > 0 || n.status.has_changes;
    }), v = B(() => {
      if (!n.status) return !1;
      const T = n.status.workflows, R = n.status.git_changes;
      return T.new.length > 0 || T.modified.length > 0 || T.deleted.length > 0 || R.nodes_added.length > 0 || R.nodes_removed.length > 0;
    }), y = B(() => {
      var T;
      return (T = n.status) != null && T.workflows.analyzed ? n.status.workflows.analyzed.filter(
        (R) => R.has_issues && (R.sync_state === "new" || R.sync_state === "modified")
      ) : [];
    }), k = B(() => y.value.length > 0), _ = B(() => k.value && !m.value);
    async function b() {
      var T, R, $;
      if (!(k.value && !m.value) && !(!d.value || !p.value.trim() || u.value)) {
        u.value = !0;
        try {
          const C = await f(p.value.trim(), m.value);
          if (C.status === "success") {
            const A = `Committed: ${((T = C.summary) == null ? void 0 : T.new) || 0} new, ${((R = C.summary) == null ? void 0 : R.modified) || 0} modified, ${(($ = C.summary) == null ? void 0 : $.deleted) || 0} deleted`;
            i("committed", { success: !0, message: A });
          } else C.status === "no_changes" ? i("committed", { success: !1, message: "No changes to commit" }) : C.status === "blocked" ? i("committed", { success: !1, message: 'Commit blocked - enable "Allow issues" to force commit' }) : i("committed", { success: !1, message: C.message || "Commit failed" });
        } catch (C) {
          i("committed", { success: !1, message: C instanceof Error ? C.message : "Commit failed" });
        } finally {
          u.value = !1;
        }
      }
    }
    return (T, R) => t.asModal ? (s(), M(Xe, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: R[5] || (R[5] = ($) => i("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: R[4] || (R[4] = Be(() => {
          }, ["stop"]))
        }, [
          e("div", Gk, [
            R[11] || (R[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: R[0] || (R[0] = ($) => i("close"))
            }, [...R[10] || (R[10] = [
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
          e("div", jk, [
            t.status && d.value ? (s(), o("div", Hk, [
              t.status.workflows.new.length ? (s(), o("div", Kk, [
                R[12] || (R[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : r("", !0),
              t.status.workflows.modified.length ? (s(), o("div", qk, [
                R[13] || (R[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
              ])) : r("", !0),
              t.status.workflows.deleted.length ? (s(), o("div", Yk, [
                R[14] || (R[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : r("", !0),
              t.status.git_changes.nodes_added.length ? (s(), o("div", Jk, [
                R[15] || (R[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : r("", !0),
              t.status.git_changes.nodes_removed.length ? (s(), o("div", Xk, [
                R[16] || (R[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : r("", !0),
              v.value ? r("", !0) : (s(), o("div", Qk, [...R[17] || (R[17] = [
                e("span", { class: "change-icon modified" }, "~", -1),
                e("span", null, "Configuration updated", -1)
              ])]))
            ])) : t.status ? (s(), o("div", Zk, " No changes to commit ")) : (s(), o("div", eb, " Loading... ")),
            k.value ? (s(), o("div", tb, [
              e("div", sb, [
                R[18] || (R[18] = e("span", { class: "error-icon" }, "⚠", -1)),
                e("span", ob, a(y.value.length) + " workflow(s) can't run", 1)
              ]),
              e("div", nb, [
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
                "onUpdate:modelValue": R[1] || (R[1] = ($) => m.value = $),
                class: "allow-issues-toggle"
              }, {
                default: l(() => [...R[19] || (R[19] = [
                  g(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : r("", !0),
            e("div", ab, [
              w(Ns, {
                modelValue: p.value,
                "onUpdate:modelValue": R[2] || (R[2] = ($) => p.value = $),
                placeholder: _.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
                disabled: !d.value || u.value || _.value,
                rows: 3,
                "submit-on-enter": !0,
                onCtrlEnter: b,
                onSubmit: b
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ])
          ]),
          e("div", lb, [
            w(he, {
              variant: "secondary",
              onClick: R[3] || (R[3] = ($) => i("close"))
            }, {
              default: l(() => [...R[20] || (R[20] = [
                g(" Cancel ", -1)
              ])]),
              _: 1
            }),
            w(he, {
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
    ])) : (s(), o("div", ib, [
      e("div", rb, [
        R[22] || (R[22] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: R[6] || (R[6] = ($) => i("close"))
        }, [...R[21] || (R[21] = [
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
      e("div", db, [
        t.status && d.value ? (s(), o("div", cb, [
          t.status.workflows.new.length ? (s(), o("div", ub, [
            R[23] || (R[23] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : r("", !0),
          t.status.workflows.modified.length ? (s(), o("div", mb, [
            R[24] || (R[24] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
          ])) : r("", !0),
          t.status.workflows.deleted.length ? (s(), o("div", vb, [
            R[25] || (R[25] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : r("", !0),
          t.status.git_changes.nodes_added.length ? (s(), o("div", fb, [
            R[26] || (R[26] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : r("", !0),
          t.status.git_changes.nodes_removed.length ? (s(), o("div", pb, [
            R[27] || (R[27] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : r("", !0),
          v.value ? r("", !0) : (s(), o("div", gb, [...R[28] || (R[28] = [
            e("span", { class: "change-icon modified" }, "~", -1),
            e("span", null, "Configuration updated", -1)
          ])]))
        ])) : t.status ? (s(), o("div", hb, " No changes to commit ")) : (s(), o("div", yb, " Loading... ")),
        k.value ? (s(), o("div", wb, [
          e("div", kb, [
            R[29] || (R[29] = e("span", { class: "error-icon" }, "⚠", -1)),
            e("span", bb, a(y.value.length) + " workflow(s) can't run", 1)
          ]),
          e("div", _b, [
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
            "onUpdate:modelValue": R[7] || (R[7] = ($) => m.value = $),
            class: "allow-issues-toggle"
          }, {
            default: l(() => [...R[30] || (R[30] = [
              g(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : r("", !0),
        e("div", $b, [
          w(Ns, {
            modelValue: p.value,
            "onUpdate:modelValue": R[8] || (R[8] = ($) => p.value = $),
            placeholder: _.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
            disabled: !d.value || u.value || _.value,
            rows: 3,
            "submit-on-enter": !0,
            onCtrlEnter: b,
            onSubmit: b
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ])
      ]),
      e("div", Cb, [
        w(he, {
          variant: "secondary",
          onClick: R[9] || (R[9] = ($) => i("close"))
        }, {
          default: l(() => [...R[31] || (R[31] = [
            g(" Cancel ", -1)
          ])]),
          _: 1
        }),
        w(he, {
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
}), to = /* @__PURE__ */ ae(xb, [["__scopeId", "data-v-d0fe6172"]]), Sb = { class: "modal-header" }, Ib = { class: "modal-body" }, Eb = { class: "switch-message" }, Pb = { class: "switch-details" }, Mb = { class: "modal-actions" }, Rb = /* @__PURE__ */ oe({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, n) => (s(), M(Xe, { to: "body" }, [
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
          e("div", Sb, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", Ib, [
            e("p", Eb, [
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
            e("p", Pb, ' Your current work will be preserved. You can switch back to "' + a(t.fromEnvironment) + '" anytime. ', 1),
            n[10] || (n[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", Mb, [
            w(te, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (i) => c.$emit("close"))
            }, {
              default: l(() => [...n[11] || (n[11] = [
                g(" Cancel ", -1)
              ])]),
              _: 1
            }),
            w(te, {
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
}), Tb = /* @__PURE__ */ ae(Rb, [["__scopeId", "data-v-e9c5253e"]]), Db = {
  key: 0,
  class: "modal-overlay"
}, Lb = { class: "modal-content" }, zb = { class: "modal-body" }, Ub = { class: "progress-info" }, Nb = { class: "progress-percentage" }, Ob = { class: "progress-state" }, Ab = { class: "switch-steps" }, Bb = { class: "step-icon" }, Fb = { class: "step-label" }, Vb = /* @__PURE__ */ oe({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const c = t, n = B(() => {
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
    }), i = B(() => c.state === "complete" ? "success" : c.state === "critical_failure" || c.state === "rolled_back" ? "error" : "default"), f = B(() => {
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
    return (p, u) => (s(), M(Xe, { to: "body" }, [
      t.show ? (s(), o("div", Db, [
        e("div", Lb, [
          u[1] || (u[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", zb, [
            w(Ss, {
              progress: t.progress,
              variant: i.value
            }, null, 8, ["progress", "variant"]),
            e("div", Ub, [
              e("div", Nb, a(t.progress) + "%", 1),
              e("div", Ob, a(n.value), 1)
            ]),
            e("div", Ab, [
              (s(!0), o(W, null, ne(f.value, (m) => (s(), o("div", {
                key: m.state,
                class: pe(["switch-step", m.status])
              }, [
                e("span", Bb, a(m.icon), 1),
                e("span", Fb, a(m.label), 1)
              ], 2))), 128))
            ]),
            u[0] || (u[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : r("", !0)
    ]));
  }
}), Wb = /* @__PURE__ */ ae(Vb, [["__scopeId", "data-v-768a5078"]]), Gb = { class: "modal-header" }, jb = { class: "modal-body" }, Hb = {
  key: 0,
  class: "node-section"
}, Kb = { class: "node-list" }, qb = {
  key: 1,
  class: "node-section"
}, Yb = { class: "node-list" }, Jb = { class: "modal-actions" }, Xb = /* @__PURE__ */ oe({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, n) => (s(), M(Xe, { to: "body" }, [
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
          e("div", Gb, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", jb, [
            n[8] || (n[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (s(), o("div", Hb, [
              n[6] || (n[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", Kb, [
                (s(!0), o(W, null, ne(t.mismatchDetails.missing_nodes, (i) => (s(), o("div", {
                  key: i,
                  class: "node-item add"
                }, " + " + a(i), 1))), 128))
              ])
            ])) : r("", !0),
            t.mismatchDetails.extra_nodes.length ? (s(), o("div", qb, [
              n[7] || (n[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", Yb, [
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
          e("div", Jb, [
            w(te, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (i) => c.$emit("close"))
            }, {
              default: l(() => [...n[10] || (n[10] = [
                g(" Cancel ", -1)
              ])]),
              _: 1
            }),
            w(te, {
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
}), Qb = /* @__PURE__ */ ae(Xb, [["__scopeId", "data-v-7cad7518"]]), Zb = [
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
], e_ = "v0.0.4", t_ = "Akatz", s_ = { class: "social-buttons" }, o_ = ["title", "aria-label", "onClick"], n_ = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, a_ = ["d"], l_ = ["title", "aria-label", "onClick"], i_ = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, r_ = ["d"], d_ = /* @__PURE__ */ oe({
  __name: "SocialButtons",
  setup(t) {
    function c(n) {
      window.open(n, "_blank", "noopener,noreferrer");
    }
    return (n, i) => (s(), o("div", s_, [
      (s(!0), o(W, null, ne(Ie(Zb), (f) => (s(), o(W, {
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
          (s(), o("svg", n_, [
            e("path", {
              d: f.iconPath
            }, null, 8, a_)
          ]))
        ], 8, o_)) : (s(), o("button", {
          key: 1,
          class: "icon-btn social-link",
          title: f.title,
          "aria-label": f.ariaLabel,
          onClick: (p) => c(f.url)
        }, [
          (s(), o("svg", i_, [
            e("path", {
              d: f.iconPath
            }, null, 8, r_)
          ]))
        ], 8, l_))
      ], 64))), 128))
    ]));
  }
}), so = /* @__PURE__ */ ae(d_, [["__scopeId", "data-v-4f846342"]]), c_ = { class: "footer-info" }, u_ = { class: "version" }, m_ = { class: "made-by" }, v_ = /* @__PURE__ */ oe({
  __name: "FooterInfo",
  setup(t) {
    return (c, n) => (s(), o("div", c_, [
      e("span", u_, a(Ie(e_)), 1),
      e("span", m_, [
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
        g(" by " + a(Ie(t_)), 1)
      ])
    ]));
  }
}), oo = /* @__PURE__ */ ae(v_, [["__scopeId", "data-v-8bc3db0a"]]), f_ = /* @__PURE__ */ oe({
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
          w(he, {
            variant: "primary",
            disabled: !((m = n.value) != null && m.hasChanges),
            onClick: i
          }, {
            default: l(() => [...u[2] || (u[2] = [
              g(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          w(he, {
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
}), p_ = /* @__PURE__ */ ae(f_, [["__scopeId", "data-v-fac00ae7"]]), g_ = { class: "header-actions" }, h_ = {
  key: 0,
  class: "wizard-step"
}, y_ = { class: "form-field" }, w_ = ["placeholder"], k_ = {
  key: 0,
  class: "form-error"
}, b_ = { class: "form-field form-field--checkbox" }, __ = { class: "form-checkbox" }, $_ = {
  key: 0,
  class: "form-field"
}, C_ = ["placeholder"], x_ = {
  key: 0,
  class: "form-info"
}, S_ = {
  key: 1,
  class: "form-suggestion"
}, I_ = {
  key: 2,
  class: "form-error"
}, E_ = {
  key: 3,
  class: "form-info"
}, P_ = {
  key: 1,
  class: "wizard-step"
}, M_ = {
  key: 0,
  class: "progress-check-loading"
}, R_ = {
  key: 0,
  class: "cli-warning"
}, T_ = { class: "cli-warning-header" }, D_ = {
  key: 1,
  class: "env-landing"
}, L_ = { class: "env-list" }, z_ = ["value"], U_ = { class: "env-name" }, N_ = {
  key: 2,
  class: "env-create"
}, O_ = { class: "form-field" }, A_ = { class: "form-field" }, B_ = ["value"], F_ = { class: "form-field" }, V_ = ["disabled"], W_ = ["value"], G_ = { class: "form-field" }, j_ = ["value"], H_ = { class: "form-field form-field--checkbox" }, K_ = { class: "form-checkbox" }, q_ = {
  key: 0,
  class: "form-error"
}, Y_ = {
  key: 1,
  class: "env-creating"
}, J_ = { class: "creating-intro" }, X_ = {
  key: 3,
  class: "env-import"
}, Q_ = { class: "wizard-footer" }, Z_ = { class: "wizard-footer-actions" }, Gt = 10, e2 = 600 * 1e3, As = 1800 * 1e3, t2 = /* @__PURE__ */ oe({
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
    } = He(), k = h(n.initialStep || 1), _ = h(null), b = h("landing"), T = h(!1), R = h(!1), $ = h(!1), C = h(!1), A = h(null), S = h(n.initialStep === 2), P = h(n.defaultPath), J = h(!!n.detectedModelsDir), F = h(n.detectedModelsDir || ""), G = h(null), x = h(null), D = h(null), O = h(null), re = h("my-new-env"), se = h(Qs), X = h("latest"), ue = h(Zs), Y = h(!0), z = h(null), L = h(null), I = h([{ tag_name: "latest", name: "Latest", published_at: "" }]), ie = h(!1), Z = h(!1), ke = h(!1), Ce = h({ progress: 0, message: "" }), Te = h({ progress: 0, message: "" }), ze = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], me = h(0), we = h(null), Pe = h(0), Q = h(null), le = B(() => {
      var E, V;
      const ge = (E = P.value) == null ? void 0 : E.trim(), K = !G.value, q = !J.value || !x.value && ((V = F.value) == null ? void 0 : V.trim());
      return ge && K && q;
    }), ve = B(() => {
      var ge;
      return (ge = re.value) == null ? void 0 : ge.trim();
    }), Ne = B(() => !!(k.value === 2 || L.value || n.setupState === "empty_workspace" || n.setupState === "unmanaged")), nt = B(() => L.value || n.workspacePath || null);
    async function at() {
      var ge;
      if (G.value = null, !!((ge = P.value) != null && ge.trim()))
        try {
          const K = await u({ path: P.value, type: "workspace" });
          K.valid || (G.value = K.error || "Invalid path");
        } catch (K) {
          G.value = K instanceof Error ? K.message : "Validation failed";
        }
    }
    async function Me() {
      var ge;
      if (x.value = null, D.value = null, O.value = null, !!((ge = F.value) != null && ge.trim()))
        try {
          const K = await u({ path: F.value, type: "models" });
          if (K.valid)
            O.value = K.model_count ?? null;
          else if (x.value = K.error || "Invalid path", K.suggestion) {
            D.value = K.suggestion, F.value = K.suggestion, x.value = null;
            const q = await u({ path: K.suggestion, type: "models" });
            q.valid && (O.value = q.model_count ?? null);
          }
        } catch (K) {
          x.value = K instanceof Error ? K.message : "Validation failed";
        }
    }
    async function Je() {
      var ge, K, q, E, V;
      if (G.value = null, x.value = null, await at(), (ge = G.value) != null && ge.includes("already exists")) {
        G.value = null, L.value = ((K = P.value) == null ? void 0 : K.trim()) || n.defaultPath, k.value = 2, qe();
        return;
      }
      if (!G.value && !(J.value && ((q = F.value) != null && q.trim()) && (await Me(), x.value))) {
        Z.value = !0;
        try {
          await f({
            workspace_path: ((E = P.value) == null ? void 0 : E.trim()) || n.defaultPath,
            models_directory: J.value && ((V = F.value) == null ? void 0 : V.trim()) || null
          }), me.value = 0, we.value = Date.now();
          const ee = setInterval(async () => {
            var be;
            if (we.value && Date.now() - we.value > e2) {
              clearInterval(ee), Z.value = !1, G.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const We = await p();
              if (me.value = 0, We.state === "idle" && Z.value) {
                clearInterval(ee), Z.value = !1, G.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              Ce.value = { progress: We.progress, message: We.message }, We.state === "complete" ? (clearInterval(ee), Z.value = !1, L.value = ((be = P.value) == null ? void 0 : be.trim()) || n.defaultPath, k.value = 2, qe()) : We.state === "error" && (clearInterval(ee), Z.value = !1, G.value = We.error || "Workspace creation failed");
            } catch (We) {
              me.value++, console.warn(`Polling failure ${me.value}/${Gt}:`, We), me.value >= Gt && (clearInterval(ee), Z.value = !1, G.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (ee) {
          Z.value = !1, G.value = ee instanceof Error ? ee.message : "Failed to create workspace";
        }
      }
    }
    async function Ke() {
      ke.value = !0, z.value = null;
      try {
        const ge = {
          name: re.value.trim() || "my-new-env",
          python_version: se.value,
          comfyui_version: X.value,
          torch_backend: ue.value,
          switch_after: Y.value,
          workspace_path: L.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await m(ge)).status === "started") {
          Pe.value = 0, Q.value = Date.now();
          const q = setInterval(async () => {
            if (Q.value && Date.now() - Q.value > As) {
              clearInterval(q), ke.value = !1, z.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const E = await d();
              if (Pe.value = 0, E.state === "idle" && ke.value) {
                clearInterval(q), ke.value = !1, z.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (Te.value = {
                progress: E.progress ?? 0,
                message: E.message,
                phase: E.phase
              }, E.state === "complete") {
                clearInterval(q), ke.value = !1;
                const V = E.environment_name || ge.name;
                Y.value ? i("complete", V, L.value) : (b.value = "landing", i("environment-created-no-switch", V));
              } else E.state === "error" && (clearInterval(q), ke.value = !1, z.value = E.error || "Environment creation failed");
            } catch (E) {
              Pe.value++, console.warn(`Polling failure ${Pe.value}/${Gt}:`, E), Pe.value >= Gt && (clearInterval(q), ke.value = !1, z.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (ge) {
        ke.value = !1, z.value = ge instanceof Error ? ge.message : "Unknown error";
      }
    }
    async function qe() {
      ie.value = !0;
      try {
        I.value = await y();
      } catch (ge) {
        console.error("Failed to load ComfyUI releases:", ge);
      } finally {
        ie.value = !1;
      }
    }
    function mt() {
      _.value && i("switch-environment", _.value, L.value);
    }
    function _e() {
      b.value === "create" || b.value === "import" ? b.value = "landing" : k.value === 2 && n.setupState === "no_workspace" && (k.value = 1);
    }
    function je(ge, K) {
      R.value = !1, K ? i("complete", ge, L.value) : (i("environment-created-no-switch", ge), b.value = "landing");
    }
    function Ze() {
    }
    Ve(async () => {
      if (n.detectedModelsDir && (F.value = n.detectedModelsDir), n.workspacePath && (L.value = n.workspacePath), k.value === 2) {
        qe();
        const ge = setTimeout(() => {
          S.value = !1;
        }, 3e3);
        await lt(), clearTimeout(ge), S.value = !1;
      }
    });
    async function lt() {
      try {
        const ge = await d();
        if (console.log("[ComfyGit] Create progress check:", ge.state, ge), ge.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", ge.environment_name), b.value = "create", ke.value = !0, re.value = ge.environment_name || "my-new-env", Te.value = {
            progress: ge.progress ?? 0,
            message: ge.message,
            phase: ge.phase
          }, Le();
          return;
        }
      } catch (ge) {
        console.log("[ComfyGit] Create progress check failed:", ge);
      }
      try {
        const ge = await v();
        console.log("[ComfyGit] Import progress check:", ge.state, ge), ge.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", ge.environment_name), A.value = {
          message: ge.message || "Importing...",
          phase: ge.phase || "",
          progress: ge.progress ?? 0,
          environmentName: ge.environment_name || ""
        }, C.value = !0, b.value = "import", R.value = !0);
      } catch (ge) {
        console.log("[ComfyGit] Import progress check failed:", ge);
      }
    }
    async function Le() {
      Pe.value = 0, Q.value = Date.now();
      let ge = null;
      const K = async () => {
        if (Q.value && Date.now() - Q.value > As)
          return ge && clearInterval(ge), ke.value = !1, z.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const E = await d();
          if (Pe.value = 0, E.state === "idle" && ke.value)
            return ge && clearInterval(ge), ke.value = !1, z.value = "Environment creation was interrupted. Please try again.", !1;
          if (Te.value = {
            progress: E.progress ?? 0,
            message: E.message,
            phase: E.phase
          }, E.state === "complete") {
            ge && clearInterval(ge), ke.value = !1;
            const V = E.environment_name || re.value;
            return i("complete", V, L.value), !1;
          } else if (E.state === "error")
            return ge && clearInterval(ge), ke.value = !1, z.value = E.error || "Environment creation failed", !1;
          return !0;
        } catch (E) {
          return Pe.value++, console.warn(`Polling failure ${Pe.value}/${Gt}:`, E), Pe.value >= Gt ? (ge && clearInterval(ge), ke.value = !1, z.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await K() && (ge = setInterval(async () => {
        !await K() && ge && clearInterval(ge);
      }, 2e3));
    }
    return (ge, K) => (s(), o(W, null, [
      w(ot, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: K[15] || (K[15] = (q) => ge.$emit("close"))
      }, {
        header: l(() => [
          K[20] || (K[20] = e("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          e("div", g_, [
            w(so),
            K[19] || (K[19] = e("span", { class: "header-divider" }, null, -1)),
            Ne.value ? (s(), o("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: K[0] || (K[0] = (q) => T.value = !0)
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
              onClick: K[1] || (K[1] = (q) => ge.$emit("close")),
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
          var q;
          return [
            k.value === 1 ? (s(), o("div", h_, [
              K[24] || (K[24] = e("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              e("div", y_, [
                K[21] || (K[21] = e("label", { class: "form-label" }, "Workspace Path", -1)),
                Ue(e("input", {
                  "onUpdate:modelValue": K[2] || (K[2] = (E) => P.value = E),
                  type: "text",
                  class: "form-input",
                  placeholder: t.defaultPath
                }, null, 8, w_), [
                  [Ot, P.value]
                ]),
                G.value ? (s(), o("p", k_, a(G.value), 1)) : r("", !0)
              ]),
              e("div", b_, [
                e("label", __, [
                  Ue(e("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": K[3] || (K[3] = (E) => J.value = E)
                  }, null, 512), [
                    [is, J.value]
                  ]),
                  K[22] || (K[22] = e("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              J.value ? (s(), o("div", $_, [
                K[23] || (K[23] = e("label", { class: "form-label" }, "Models Directory", -1)),
                Ue(e("input", {
                  "onUpdate:modelValue": K[4] || (K[4] = (E) => F.value = E),
                  type: "text",
                  class: "form-input",
                  placeholder: t.detectedModelsDir || "/path/to/models"
                }, null, 8, C_), [
                  [Ot, F.value]
                ]),
                t.detectedModelsDir && !F.value ? (s(), o("p", x_, " Detected: " + a(t.detectedModelsDir), 1)) : r("", !0),
                D.value ? (s(), o("p", S_, " Did you mean: " + a(D.value), 1)) : r("", !0),
                x.value ? (s(), o("p", I_, a(x.value), 1)) : r("", !0),
                O.value !== null && !x.value ? (s(), o("p", E_, " Found " + a(O.value) + " model files ", 1)) : r("", !0)
              ])) : r("", !0),
              Z.value ? (s(), M(cs, {
                key: 1,
                progress: Ce.value.progress,
                message: Ce.value.message
              }, null, 8, ["progress", "message"])) : r("", !0)
            ])) : r("", !0),
            k.value === 2 ? (s(), o("div", P_, [
              S.value ? (s(), o("div", M_, [...K[25] || (K[25] = [
                e("div", { class: "loading-spinner" }, null, -1),
                e("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (s(), o(W, { key: 1 }, [
                !n.cliInstalled && !$.value ? (s(), o("div", R_, [
                  e("div", T_, [
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
                b.value === "landing" ? (s(), o("div", D_, [
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
                  (q = n.existingEnvironments) != null && q.length ? (s(), o(W, { key: 0 }, [
                    K[33] || (K[33] = e("div", { class: "landing-divider" }, [
                      e("span", null, "or switch to existing")
                    ], -1)),
                    e("div", L_, [
                      (s(!0), o(W, null, ne(n.existingEnvironments, (E) => (s(), o("label", {
                        key: E,
                        class: pe(["env-option", { selected: _.value === E }])
                      }, [
                        Ue(e("input", {
                          type: "radio",
                          name: "env-select",
                          value: E,
                          "onUpdate:modelValue": K[8] || (K[8] = (V) => _.value = V)
                        }, null, 8, z_), [
                          [Nt, _.value]
                        ]),
                        e("span", U_, a(E), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : r("", !0)
                ])) : b.value === "create" ? (s(), o("div", N_, [
                  ke.value ? (s(), o("div", Y_, [
                    e("p", J_, [
                      K[41] || (K[41] = g(" Creating environment ", -1)),
                      e("strong", null, a(re.value), 1),
                      K[42] || (K[42] = g("... ", -1))
                    ]),
                    w(cs, {
                      progress: Te.value.progress,
                      message: Te.value.message,
                      "current-phase": Te.value.phase,
                      "show-steps": !0,
                      steps: ze
                    }, null, 8, ["progress", "message", "current-phase"]),
                    K[43] || (K[43] = e("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (s(), o(W, { key: 0 }, [
                    K[40] || (K[40] = e("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    e("div", O_, [
                      K[35] || (K[35] = e("label", { class: "form-label" }, "Environment Name", -1)),
                      Ue(e("input", {
                        "onUpdate:modelValue": K[9] || (K[9] = (E) => re.value = E),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [Ot, re.value]
                      ])
                    ]),
                    e("div", A_, [
                      K[36] || (K[36] = e("label", { class: "form-label" }, "Python Version", -1)),
                      Ue(e("select", {
                        "onUpdate:modelValue": K[10] || (K[10] = (E) => se.value = E),
                        class: "form-select"
                      }, [
                        (s(!0), o(W, null, ne(Ie(Xs), (E) => (s(), o("option", {
                          key: E,
                          value: E
                        }, a(E), 9, B_))), 128))
                      ], 512), [
                        [Mt, se.value]
                      ])
                    ]),
                    e("div", F_, [
                      K[37] || (K[37] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      Ue(e("select", {
                        "onUpdate:modelValue": K[11] || (K[11] = (E) => X.value = E),
                        class: "form-select",
                        disabled: ie.value
                      }, [
                        (s(!0), o(W, null, ne(I.value, (E) => (s(), o("option", {
                          key: E.tag_name,
                          value: E.tag_name
                        }, a(E.name), 9, W_))), 128))
                      ], 8, V_), [
                        [Mt, X.value]
                      ])
                    ]),
                    e("div", G_, [
                      K[38] || (K[38] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      Ue(e("select", {
                        "onUpdate:modelValue": K[12] || (K[12] = (E) => ue.value = E),
                        class: "form-select"
                      }, [
                        (s(!0), o(W, null, ne(Ie(xs), (E) => (s(), o("option", {
                          key: E,
                          value: E
                        }, a(E) + a(E === "auto" ? " (detect GPU)" : ""), 9, j_))), 128))
                      ], 512), [
                        [Mt, ue.value]
                      ])
                    ]),
                    e("div", H_, [
                      e("label", K_, [
                        Ue(e("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": K[13] || (K[13] = (E) => Y.value = E)
                        }, null, 512), [
                          [is, Y.value]
                        ]),
                        K[39] || (K[39] = e("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    z.value ? (s(), o("div", q_, a(z.value), 1)) : r("", !0)
                  ], 64))
                ])) : b.value === "import" ? (s(), o("div", X_, [
                  w(eo, {
                    "workspace-path": L.value,
                    "resume-import": C.value,
                    "initial-progress": A.value ?? void 0,
                    onImportComplete: je,
                    onImportStarted: K[14] || (K[14] = (E) => R.value = !0),
                    onSourceCleared: Ze
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : r("", !0)
              ], 64))
            ])) : r("", !0)
          ];
        }),
        footer: l(() => [
          e("div", Q_, [
            w(oo),
            e("div", Z_, [
              k.value === 1 ? (s(), M(he, {
                key: 0,
                variant: "primary",
                disabled: !le.value || Z.value,
                onClick: Je
              }, {
                default: l(() => [
                  g(a(Z.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : k.value === 2 ? (s(), o(W, { key: 1 }, [
                !ke.value && !R.value && (b.value !== "landing" || n.setupState === "no_workspace" && !L.value) ? (s(), M(he, {
                  key: 0,
                  variant: "secondary",
                  onClick: _e
                }, {
                  default: l(() => [...K[44] || (K[44] = [
                    g(" Back ", -1)
                  ])]),
                  _: 1
                })) : r("", !0),
                b.value === "create" ? (s(), M(he, {
                  key: 1,
                  variant: "primary",
                  disabled: !ve.value || ke.value,
                  onClick: Ke
                }, {
                  default: l(() => [
                    g(a(ke.value ? "Creating..." : Y.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : r("", !0),
                b.value === "landing" && _.value ? (s(), M(he, {
                  key: 2,
                  variant: "primary",
                  onClick: mt
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
      T.value ? (s(), M(p_, {
        key: 0,
        "workspace-path": nt.value,
        onClose: K[16] || (K[16] = (q) => T.value = !1)
      }, null, 8, ["workspace-path"])) : r("", !0)
    ], 64));
  }
}), s2 = /* @__PURE__ */ ae(t2, [["__scopeId", "data-v-9a9aadc0"]]), o2 = { class: "comfygit-panel" }, n2 = { class: "panel-header" }, a2 = { class: "header-left" }, l2 = {
  key: 0,
  class: "header-info"
}, i2 = { class: "header-actions" }, r2 = { class: "env-switcher" }, d2 = {
  key: 0,
  class: "header-info"
}, c2 = { class: "branch-name" }, u2 = { class: "panel-main" }, m2 = { class: "sidebar" }, v2 = { class: "sidebar-content" }, f2 = { class: "sidebar-section" }, p2 = { class: "sidebar-section" }, g2 = { class: "sidebar-section" }, h2 = { class: "sidebar-footer" }, y2 = { class: "content-area" }, w2 = {
  key: 0,
  class: "error-message"
}, k2 = {
  key: 1,
  class: "loading"
}, b2 = { class: "dialog-content env-selector-dialog" }, _2 = { class: "dialog-header" }, $2 = { class: "dialog-body" }, C2 = { class: "env-list" }, x2 = { class: "env-info" }, S2 = { class: "env-name-row" }, I2 = { class: "env-indicator" }, E2 = { class: "env-name" }, P2 = {
  key: 0,
  class: "env-branch"
}, M2 = {
  key: 1,
  class: "current-label"
}, R2 = { class: "env-stats" }, T2 = ["onClick"], D2 = { class: "toast-container" }, L2 = { class: "toast-message" }, z2 = /* @__PURE__ */ oe({
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
      syncEnvironmentManually: R,
      repairWorkflowModels: $,
      getSetupStatus: C
    } = He(), A = Gs(), S = h(null), P = h([]), J = h([]), F = h([]), G = B(() => F.value.find((j) => j.is_current)), x = h(null), D = h(!1), O = h(1), re = B(() => {
      var j;
      return ((j = x.value) == null ? void 0 : j.state) || "managed";
    }), se = h(!1), X = h(null), ue = h(null), Y = h(!1), z = h(null), L = h(null), I = h(null), ie = h(!1), Z = h(!1), ke = h(""), Ce = h(null), Te = h({ state: "idle", progress: 0, message: "" });
    let ze = null, me = null;
    const we = {
      "debug-env": { view: "debug-env", section: "this-env" },
      "debug-workspace": { view: "debug-workspace", section: "all-envs" },
      status: { view: "status", section: "this-env" }
    }, Pe = n.initialView ? we[n.initialView] : null, Q = h((Pe == null ? void 0 : Pe.view) ?? "status"), le = h((Pe == null ? void 0 : Pe.section) ?? "this-env");
    function ve(j, U) {
      Q.value = j, le.value = U;
    }
    function Ne(j) {
      const ye = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[j];
      ye && ve(ye.view, ye.section);
    }
    function nt() {
      ve("branches", "this-env");
    }
    function at() {
      i("close"), setTimeout(() => {
        var U;
        const j = document.querySelectorAll("button.comfyui-button");
        for (const ye of j)
          if (((U = ye.textContent) == null ? void 0 : U.trim()) === "Manager") {
            ye.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const Me = h(null), Je = h(!1), Ke = h(!1), qe = h([]);
    let mt = 0;
    function _e(j, U = "info", ye = 3e3) {
      const Ee = ++mt;
      return qe.value.push({ id: Ee, message: j, type: U }), ye > 0 && setTimeout(() => {
        qe.value = qe.value.filter((Ge) => Ge.id !== Ee);
      }, ye), Ee;
    }
    function je(j) {
      qe.value = qe.value.filter((U) => U.id !== j);
    }
    function Ze(j, U) {
      _e(j, U);
    }
    const lt = B(() => {
      if (!S.value) return "neutral";
      const j = S.value.workflows, U = j.new.length > 0 || j.modified.length > 0 || j.deleted.length > 0 || S.value.has_changes;
      return S.value.comparison.is_synced ? U ? "warning" : "success" : "error";
    });
    B(() => S.value ? lt.value === "success" ? "All synced" : lt.value === "warning" ? "Uncommitted changes" : lt.value === "error" ? "Not synced" : "" : "");
    async function Le() {
      se.value = !0, X.value = null;
      try {
        const [j, U, ye, Ee] = await Promise.all([
          f(!0),
          p(),
          u(),
          k()
        ]);
        S.value = j, P.value = U.commits, J.value = ye.branches, F.value = Ee, i("statusUpdate", j), z.value && await z.value.loadWorkflows(!0);
      } catch (j) {
        X.value = j instanceof Error ? j.message : "Failed to load status", S.value = null, P.value = [], J.value = [];
      } finally {
        se.value = !1;
      }
    }
    function ge(j) {
      ue.value = j;
    }
    async function K(j) {
      var ye;
      ue.value = null;
      const U = S.value && (S.value.workflows.new.length > 0 || S.value.workflows.modified.length > 0 || S.value.workflows.deleted.length > 0 || S.value.has_changes);
      Me.value = {
        title: U ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: U ? "You have uncommitted changes that will be lost." : `Checkout commit ${j.short_hash || ((ye = j.hash) == null ? void 0 : ye.slice(0, 7))}?`,
        details: U ? Oe() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: U ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: U,
        onConfirm: async () => {
          var Qe;
          Me.value = null, be();
          const Ee = _e(`Checking out ${j.short_hash || ((Qe = j.hash) == null ? void 0 : Qe.slice(0, 7))}...`, "info", 0), Ge = await m(j.hash, U);
          je(Ee), Ge.status === "success" ? _e("Restarting ComfyUI...", "success") : _e(Ge.message || "Checkout failed", "error");
        }
      };
    }
    async function q(j) {
      const U = S.value && (S.value.workflows.new.length > 0 || S.value.workflows.modified.length > 0 || S.value.workflows.deleted.length > 0 || S.value.has_changes);
      Me.value = {
        title: U ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: U ? "You have uncommitted changes." : `Switch to branch "${j}"?`,
        details: U ? Oe() : void 0,
        warning: U ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: U ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          Me.value = null, be();
          const ye = _e(`Switching to ${j}...`, "info", 0), Ee = await v(j, U);
          je(ye), Ee.status === "success" ? _e("Restarting ComfyUI...", "success") : _e(Ee.message || "Branch switch failed", "error");
        }
      };
    }
    async function E(j) {
      const U = _e(`Creating branch ${j}...`, "info", 0), ye = await d(j);
      je(U), ye.status === "success" ? (_e(`Branch "${j}" created`, "success"), await Le()) : _e(ye.message || "Failed to create branch", "error");
    }
    async function V(j, U = !1) {
      const ye = async (Ee) => {
        var Qe;
        const Ge = _e(`Deleting branch ${j}...`, "info", 0);
        try {
          const Pt = await y(j, Ee);
          je(Ge), Pt.status === "success" ? (_e(`Branch "${j}" deleted`, "success"), await Le()) : (Qe = Pt.message) != null && Qe.includes("not fully merged") ? Me.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${j}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              Me.value = null, await ye(!0);
            }
          } : _e(Pt.message || "Failed to delete branch", "error");
        } catch (Pt) {
          je(Ge);
          const qt = Pt instanceof Error ? Pt.message : "Failed to delete branch";
          qt.includes("not fully merged") ? Me.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${j}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              Me.value = null, await ye(!0);
            }
          } : _e(qt, "error");
        }
      };
      Me.value = {
        title: "Delete Branch",
        message: `Delete branch "${j}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          Me.value = null, await ye(U);
        }
      };
    }
    async function ee(j) {
      ue.value = null;
      const U = prompt("Enter branch name:");
      if (U) {
        const ye = _e(`Creating branch ${U}...`, "info", 0), Ee = await d(U, j.hash);
        je(ye), Ee.status === "success" ? (_e(`Branch "${U}" created from ${j.short_hash}`, "success"), await Le()) : _e(Ee.message || "Failed to create branch", "error");
      }
    }
    function be() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function We() {
      Me.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var j;
          Me.value = null, be(), _e("Restarting environment...", "info");
          try {
            (j = window.app) != null && j.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function vt() {
      Me.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var j;
          Me.value = null, _e("Stopping environment...", "info");
          try {
            (j = window.app) != null && j.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function it(j, U) {
      Y.value = !1, ke.value = j, Ce.value = U || null, ie.value = !0;
    }
    async function Lt() {
      ie.value = !1, Z.value = !0, be(), Te.value = {
        progress: 10,
        state: ft(10),
        message: zt(10)
      };
      try {
        await _(ke.value, Ce.value || void 0), de(), Se();
      } catch (j) {
        N(), Z.value = !1, _e(`Failed to initiate switch: ${j instanceof Error ? j.message : "Unknown error"}`, "error"), Te.value = { state: "idle", progress: 0, message: "" }, Ce.value = null;
      }
    }
    function ft(j) {
      return j >= 100 ? "complete" : j >= 80 ? "validating" : j >= 60 ? "starting" : j >= 30 ? "syncing" : "preparing";
    }
    function zt(j) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[ft(j)] || "";
    }
    function de() {
      if (me) return;
      let j = 10;
      const U = 60, ye = 5e3, Ee = 100, Ge = (U - j) / (ye / Ee);
      me = window.setInterval(() => {
        if (j += Ge, j >= U && (j = U, N()), Te.value.progress < U) {
          const Qe = Math.floor(j);
          Te.value = {
            progress: Qe,
            state: ft(Qe),
            message: zt(Qe)
          };
        }
      }, Ee);
    }
    function N() {
      me && (clearInterval(me), me = null);
    }
    function Se() {
      ze || (ze = window.setInterval(async () => {
        try {
          let j = await A.getStatus();
          if ((!j || j.state === "idle") && (j = await b()), !j)
            return;
          const U = j.progress || 0;
          U >= 60 && N();
          const ye = Math.max(U, Te.value.progress), Ee = j.state && j.state !== "idle" && j.state !== "unknown", Ge = Ee ? j.state : ft(ye), Qe = Ee && j.message || zt(ye);
          Te.value = {
            state: Ge,
            progress: ye,
            message: Qe
          }, j.state === "complete" ? (N(), Ye(), Z.value = !1, _e(`✓ Switched to ${ke.value}`, "success"), await Le(), ke.value = "") : j.state === "rolled_back" ? (N(), Ye(), Z.value = !1, _e("Switch failed, restored previous environment", "warning"), ke.value = "") : j.state === "critical_failure" && (N(), Ye(), Z.value = !1, _e(`Critical error during switch: ${j.message}`, "error"), ke.value = "");
        } catch (j) {
          console.error("Failed to poll switch progress:", j);
        }
      }, 1e3));
    }
    function Ye() {
      N(), ze && (clearInterval(ze), ze = null);
    }
    function pt() {
      var j;
      ie.value = !1, ke.value = "", (j = x.value) != null && j.state && x.value.state !== "managed" && (O.value = x.value.state === "no_workspace" ? 1 : 2, D.value = !0);
    }
    async function It(j) {
      Je.value = !1, await Le(), _e(j.message, j.success ? "success" : "error");
    }
    async function Et() {
      Ke.value = !1;
      const j = _e("Syncing environment...", "info", 0);
      try {
        const U = await R("skip", !0);
        if (je(j), U.status === "success") {
          const ye = [];
          U.nodes_installed.length && ye.push(`${U.nodes_installed.length} installed`), U.nodes_removed.length && ye.push(`${U.nodes_removed.length} removed`);
          const Ee = ye.length ? `: ${ye.join(", ")}` : "";
          _e(`✓ Environment synced${Ee}`, "success"), await Le();
        } else {
          const ye = U.errors.length ? U.errors.join("; ") : U.message;
          _e(`Sync failed: ${ye}`, "error");
        }
      } catch (U) {
        je(j), _e(`Sync error: ${U instanceof Error ? U.message : "Unknown error"}`, "error");
      }
    }
    async function bt(j) {
      var U;
      try {
        const ye = await $(j);
        ye.failed.length === 0 ? _e(`✓ Repaired ${ye.success} workflow${ye.success === 1 ? "" : "s"}`, "success") : _e(`Repaired ${ye.success}, failed: ${ye.failed.length}`, "warning"), await Le();
      } catch (ye) {
        _e(`Repair failed: ${ye instanceof Error ? ye.message : "Unknown error"}`, "error");
      } finally {
        (U = I.value) == null || U.resetRepairingState();
      }
    }
    async function fe() {
      var U, ye;
      const j = _e("Repairing environment...", "info", 0);
      try {
        const Ee = await R("skip", !0);
        if (je(j), Ee.status === "success") {
          const Ge = [];
          Ee.nodes_installed.length && Ge.push(`${Ee.nodes_installed.length} installed`), Ee.nodes_removed.length && Ge.push(`${Ee.nodes_removed.length} removed`);
          const Qe = Ge.length ? `: ${Ge.join(", ")}` : "";
          _e(`✓ Environment repaired${Qe}`, "success"), (U = I.value) == null || U.closeDetailModal(), await Le();
        } else {
          const Ge = Ee.errors.length ? Ee.errors.join(", ") : Ee.message || "Unknown error";
          _e(`Repair failed: ${Ge}`, "error");
        }
      } catch (Ee) {
        je(j), _e(`Repair error: ${Ee instanceof Error ? Ee.message : "Unknown error"}`, "error");
      } finally {
        (ye = I.value) == null || ye.resetRepairingEnvironmentState();
      }
    }
    async function rt(j, U) {
      _e(`Environment '${j}' created`, "success"), await Le(), L.value && await L.value.loadEnvironments(), U && await it(j);
    }
    async function _t(j) {
      var U;
      if (((U = G.value) == null ? void 0 : U.name) === j) {
        _e("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      Me.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${j}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          Me.value = null;
          try {
            const ye = await T(j);
            ye.status === "success" ? (_e(`Environment "${j}" deleted`, "success"), await Le(), L.value && await L.value.loadEnvironments()) : _e(ye.message || "Failed to delete environment", "error");
          } catch (ye) {
            _e(`Error deleting environment: ${ye instanceof Error ? ye.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function Ft(j, U) {
      D.value = !1;
      try {
        x.value = await C();
      } catch {
      }
      await it(j, U);
    }
    function Vt() {
      D.value = !1, i("close");
    }
    async function Wt(j, U) {
      await it(j, U);
    }
    async function H(j) {
      await Le(), await it(j);
    }
    async function ce(j) {
      x.value = await C(), console.log(`Environment '${j}' created. Available for switching.`);
    }
    function $e() {
      ve("environments", "all-envs"), setTimeout(() => {
        var j;
        (j = L.value) == null || j.openCreateModal();
      }, 100);
    }
    function Oe() {
      if (!S.value) return [];
      const j = [], U = S.value.workflows;
      return U.new.length && j.push(`${U.new.length} new workflow(s)`), U.modified.length && j.push(`${U.modified.length} modified workflow(s)`), U.deleted.length && j.push(`${U.deleted.length} deleted workflow(s)`), j;
    }
    return Ve(async () => {
      try {
        if (x.value = await C(), x.value.state === "no_workspace") {
          D.value = !0, O.value = 1;
          return;
        }
        if (x.value.state === "empty_workspace") {
          D.value = !0, O.value = 2;
          return;
        }
        if (x.value.state === "unmanaged") {
          D.value = !0, O.value = 2;
          return;
        }
      } catch (j) {
        console.warn("Setup status check failed, proceeding normally:", j);
      }
      await Le();
    }), (j, U) => {
      var ye, Ee, Ge, Qe, Pt, qt, Ms, Rs, Ts, Ds, Ls, zs;
      return s(), o("div", o2, [
        e("div", n2, [
          e("div", a2, [
            U[31] || (U[31] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            S.value ? (s(), o("div", l2)) : r("", !0)
          ]),
          e("div", i2, [
            w(so),
            U[34] || (U[34] = e("span", { class: "header-divider" }, null, -1)),
            e("button", {
              class: pe(["icon-btn", { spinning: se.value }]),
              onClick: Le,
              title: "Refresh"
            }, [...U[32] || (U[32] = [
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
              onClick: U[0] || (U[0] = (xe) => i("close")),
              title: "Close"
            }, [...U[33] || (U[33] = [
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
        e("div", r2, [
          e("div", { class: "env-switcher-header" }, [
            U[35] || (U[35] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            e("div", { class: "env-control-buttons" }, [
              e("button", {
                class: "env-control-btn",
                title: "Restart environment",
                onClick: We
              }, " Restart "),
              e("button", {
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: vt
              }, " Stop ")
            ])
          ]),
          e("button", {
            class: "env-switcher-btn",
            onClick: U[1] || (U[1] = (xe) => ve("environments", "all-envs"))
          }, [
            S.value ? (s(), o("div", d2, [
              e("span", null, a(((ye = G.value) == null ? void 0 : ye.name) || ((Ee = S.value) == null ? void 0 : Ee.environment) || "Loading..."), 1),
              e("span", c2, "(" + a(S.value.branch || "detached") + ")", 1)
            ])) : r("", !0),
            U[36] || (U[36] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", u2, [
          e("div", m2, [
            e("div", v2, [
              e("div", f2, [
                U[37] || (U[37] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                e("button", {
                  class: pe(["sidebar-item", { active: Q.value === "status" && le.value === "this-env" }]),
                  onClick: U[2] || (U[2] = (xe) => ve("status", "this-env"))
                }, " STATUS ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: Q.value === "workflows" }]),
                  onClick: U[3] || (U[3] = (xe) => ve("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: Q.value === "models-env" }]),
                  onClick: U[4] || (U[4] = (xe) => ve("models-env", "this-env"))
                }, " MODELS ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: Q.value === "branches" }]),
                  onClick: U[5] || (U[5] = (xe) => ve("branches", "this-env"))
                }, " BRANCHES ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: Q.value === "history" }]),
                  onClick: U[6] || (U[6] = (xe) => ve("history", "this-env"))
                }, " HISTORY ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: Q.value === "nodes" }]),
                  onClick: U[7] || (U[7] = (xe) => ve("nodes", "this-env"))
                }, " NODES ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: Q.value === "debug-env" }]),
                  onClick: U[8] || (U[8] = (xe) => ve("debug-env", "this-env"))
                }, " DEBUG ", 2)
              ]),
              U[40] || (U[40] = e("div", { class: "sidebar-divider" }, null, -1)),
              e("div", p2, [
                U[38] || (U[38] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
                e("button", {
                  class: pe(["sidebar-item", { active: Q.value === "environments" }]),
                  onClick: U[9] || (U[9] = (xe) => ve("environments", "all-envs"))
                }, " ENVIRONMENTS ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: Q.value === "model-index" }]),
                  onClick: U[10] || (U[10] = (xe) => ve("model-index", "all-envs"))
                }, " MODEL INDEX ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: Q.value === "settings" }]),
                  onClick: U[11] || (U[11] = (xe) => ve("settings", "all-envs"))
                }, " SETTINGS ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: Q.value === "debug-workspace" }]),
                  onClick: U[12] || (U[12] = (xe) => ve("debug-workspace", "all-envs"))
                }, " DEBUG ", 2)
              ]),
              U[41] || (U[41] = e("div", { class: "sidebar-divider" }, null, -1)),
              e("div", g2, [
                U[39] || (U[39] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
                e("button", {
                  class: pe(["sidebar-item", { active: Q.value === "deploy" }]),
                  onClick: U[13] || (U[13] = (xe) => ve("deploy", "sharing"))
                }, " DEPLOY ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: Q.value === "export" }]),
                  onClick: U[14] || (U[14] = (xe) => ve("export", "sharing"))
                }, " EXPORT ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: Q.value === "import" }]),
                  onClick: U[15] || (U[15] = (xe) => ve("import", "sharing"))
                }, " IMPORT ", 2),
                e("button", {
                  class: pe(["sidebar-item", { active: Q.value === "remotes" }]),
                  onClick: U[16] || (U[16] = (xe) => ve("remotes", "sharing"))
                }, " REMOTES ", 2)
              ])
            ]),
            e("div", h2, [
              w(oo)
            ])
          ]),
          e("div", y2, [
            X.value ? (s(), o("div", w2, a(X.value), 1)) : !S.value && Q.value === "status" ? (s(), o("div", k2, " Loading status... ")) : (s(), o(W, { key: 2 }, [
              Q.value === "status" ? (s(), M(ja, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: I,
                status: S.value,
                "setup-state": re.value,
                onSwitchBranch: nt,
                onCommitChanges: U[17] || (U[17] = (xe) => Je.value = !0),
                onSyncEnvironment: U[18] || (U[18] = (xe) => Ke.value = !0),
                onViewWorkflows: U[19] || (U[19] = (xe) => ve("workflows", "this-env")),
                onViewHistory: U[20] || (U[20] = (xe) => ve("history", "this-env")),
                onViewDebug: U[21] || (U[21] = (xe) => ve("debug-env", "this-env")),
                onViewNodes: U[22] || (U[22] = (xe) => ve("nodes", "this-env")),
                onRepairMissingModels: bt,
                onRepairEnvironment: fe,
                onStartSetup: U[23] || (U[23] = (xe) => D.value = !0),
                onViewEnvironments: U[24] || (U[24] = (xe) => ve("environments", "all-envs")),
                onCreateEnvironment: $e
              }, null, 8, ["status", "setup-state"])) : Q.value === "workflows" ? (s(), M(vm, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: z,
                onRefresh: Le
              }, null, 512)) : Q.value === "models-env" ? (s(), M(Ym, {
                key: 2,
                onNavigate: Ne
              })) : Q.value === "branches" ? (s(), M(ll, {
                key: 3,
                branches: J.value,
                current: ((Ge = S.value) == null ? void 0 : Ge.branch) || null,
                onSwitch: q,
                onCreate: E,
                onDelete: V
              }, null, 8, ["branches", "current"])) : Q.value === "history" ? (s(), M(hl, {
                key: 4,
                commits: P.value,
                onSelect: ge,
                onCheckout: K
              }, null, 8, ["commits"])) : Q.value === "nodes" ? (s(), M(jv, {
                key: 5,
                "version-mismatches": ((Pt = (Qe = S.value) == null ? void 0 : Qe.comparison) == null ? void 0 : Pt.version_mismatches) || [],
                onOpenNodeManager: at,
                onRepairEnvironment: fe,
                onToast: Ze
              }, null, 8, ["version-mismatches"])) : Q.value === "debug-env" ? (s(), M(Zg, { key: 6 })) : Q.value === "environments" ? (s(), M(s1, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: L,
                onSwitch: it,
                onCreated: rt,
                onDelete: _t
              }, null, 512)) : Q.value === "model-index" ? (s(), M(pv, {
                key: 8,
                onRefresh: Le
              })) : Q.value === "settings" ? (s(), M(Yg, { key: 9 })) : Q.value === "debug-workspace" ? (s(), M(Xg, { key: 10 })) : Q.value === "deploy" ? (s(), M(gk, {
                key: 11,
                onToast: Ze
              })) : Q.value === "export" ? (s(), M(L1, { key: 12 })) : Q.value === "import" ? (s(), M(I0, {
                key: 13,
                onImportCompleteSwitch: H
              })) : Q.value === "remotes" ? (s(), M(Eg, {
                key: 14,
                onToast: Ze
              })) : r("", !0)
            ], 64))
          ])
        ]),
        ue.value ? (s(), M(Lk, {
          key: 0,
          commit: ue.value,
          onClose: U[25] || (U[25] = (xe) => ue.value = null),
          onCheckout: K,
          onCreateBranch: ee
        }, null, 8, ["commit"])) : r("", !0),
        Me.value ? (s(), M(qs, {
          key: 1,
          title: Me.value.title,
          message: Me.value.message,
          details: Me.value.details,
          warning: Me.value.warning,
          confirmLabel: Me.value.confirmLabel,
          cancelLabel: Me.value.cancelLabel,
          secondaryLabel: Me.value.secondaryLabel,
          secondaryAction: Me.value.secondaryAction,
          destructive: Me.value.destructive,
          onConfirm: Me.value.onConfirm,
          onCancel: U[26] || (U[26] = (xe) => Me.value = null),
          onSecondary: Me.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : r("", !0),
        w(Tb, {
          show: ie.value,
          "from-environment": ((qt = G.value) == null ? void 0 : qt.name) || "unknown",
          "to-environment": ke.value,
          onConfirm: Lt,
          onClose: pt
        }, null, 8, ["show", "from-environment", "to-environment"]),
        Je.value && S.value ? (s(), M(to, {
          key: 2,
          status: S.value,
          "as-modal": !0,
          onClose: U[27] || (U[27] = (xe) => Je.value = !1),
          onCommitted: It
        }, null, 8, ["status"])) : r("", !0),
        Ke.value && S.value ? (s(), M(Qb, {
          key: 3,
          show: Ke.value,
          "mismatch-details": {
            missing_nodes: S.value.comparison.missing_nodes,
            extra_nodes: S.value.comparison.extra_nodes
          },
          onConfirm: Et,
          onClose: U[28] || (U[28] = (xe) => Ke.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : r("", !0),
        w(Wb, {
          show: Z.value,
          state: Te.value.state,
          progress: Te.value.progress,
          message: Te.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        Y.value ? (s(), o("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: U[30] || (U[30] = Be((xe) => Y.value = !1, ["self"]))
        }, [
          e("div", b2, [
            e("div", _2, [
              U[43] || (U[43] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: U[29] || (U[29] = (xe) => Y.value = !1)
              }, [...U[42] || (U[42] = [
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
            e("div", $2, [
              U[44] || (U[44] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", C2, [
                (s(!0), o(W, null, ne(F.value, (xe) => (s(), o("div", {
                  key: xe.name,
                  class: pe(["env-item", { current: xe.is_current }])
                }, [
                  e("div", x2, [
                    e("div", S2, [
                      e("span", I2, a(xe.is_current ? "●" : "○"), 1),
                      e("span", E2, a(xe.name), 1),
                      xe.current_branch ? (s(), o("span", P2, "(" + a(xe.current_branch) + ")", 1)) : r("", !0),
                      xe.is_current ? (s(), o("span", M2, "CURRENT")) : r("", !0)
                    ]),
                    e("div", R2, a(xe.workflow_count) + " workflows • " + a(xe.node_count) + " nodes ", 1)
                  ]),
                  xe.is_current ? r("", !0) : (s(), o("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (W$) => it(xe.name)
                  }, " SWITCH ", 8, T2))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : r("", !0),
        D.value ? (s(), M(s2, {
          key: 5,
          "default-path": ((Ms = x.value) == null ? void 0 : Ms.default_path) || "~/comfygit",
          "detected-models-dir": ((Rs = x.value) == null ? void 0 : Rs.detected_models_dir) || null,
          "initial-step": O.value,
          "existing-environments": ((Ts = x.value) == null ? void 0 : Ts.environments) || [],
          "cli-installed": ((Ds = x.value) == null ? void 0 : Ds.cli_installed) ?? !0,
          "setup-state": ((Ls = x.value) == null ? void 0 : Ls.state) || "no_workspace",
          "workspace-path": ((zs = x.value) == null ? void 0 : zs.workspace_path) || null,
          onComplete: Ft,
          onClose: Vt,
          onSwitchEnvironment: Wt,
          onEnvironmentCreatedNoSwitch: ce
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : r("", !0),
        e("div", D2, [
          w(fo, { name: "toast" }, {
            default: l(() => [
              (s(!0), o(W, null, ne(qe.value, (xe) => (s(), o("div", {
                key: xe.id,
                class: pe(["toast", xe.type])
              }, [
                e("span", L2, a(xe.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), U2 = /* @__PURE__ */ ae(z2, [["__scopeId", "data-v-70f0bf8a"]]), N2 = { class: "item-header" }, O2 = { class: "item-info" }, A2 = { class: "filename" }, B2 = { class: "metadata" }, F2 = { class: "size" }, V2 = {
  key: 0,
  class: "type"
}, W2 = { class: "item-actions" }, G2 = {
  key: 0,
  class: "progress-section"
}, j2 = { class: "progress-bar" }, H2 = { class: "progress-stats" }, K2 = { class: "downloaded" }, q2 = { class: "speed" }, Y2 = {
  key: 0,
  class: "eta"
}, J2 = {
  key: 1,
  class: "status-msg paused"
}, X2 = {
  key: 2,
  class: "status-msg queued"
}, Q2 = {
  key: 3,
  class: "status-msg completed"
}, Z2 = {
  key: 4,
  class: "status-msg failed"
}, e$ = {
  key: 0,
  class: "retries"
}, t$ = /* @__PURE__ */ oe({
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
      e("div", N2, [
        e("div", O2, [
          e("div", A2, a(t.item.filename), 1),
          e("div", B2, [
            e("span", F2, a(i(t.item.size)), 1),
            t.item.type ? (s(), o("span", V2, a(t.item.type), 1)) : r("", !0)
          ])
        ]),
        e("div", W2, [
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
      t.item.status === "downloading" ? (s(), o("div", G2, [
        e("div", j2, [
          e("div", {
            class: "progress-fill",
            style: Rt({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", H2, [
          e("span", K2, a(i(t.item.downloaded)) + " / " + a(i(t.item.size)), 1),
          e("span", q2, a(f(t.item.speed)), 1),
          t.item.eta > 0 ? (s(), o("span", Y2, a(p(t.item.eta)), 1)) : r("", !0)
        ])
      ])) : t.item.status === "paused" ? (s(), o("div", J2, " Paused - click Resume to download ")) : t.item.status === "queued" ? (s(), o("div", X2, " Waiting in queue... ")) : t.item.status === "completed" ? (s(), o("div", Q2, " ✓ Downloaded ")) : t.item.status === "failed" ? (s(), o("div", Z2, [
        g(" ✗ " + a(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (s(), o("span", e$, "(" + a(t.item.retries) + " retries)", 1)) : r("", !0)
      ])) : r("", !0)
    ], 2));
  }
}), Xt = /* @__PURE__ */ ae(t$, [["__scopeId", "data-v-2110df65"]]), s$ = { class: "queue-title" }, o$ = { class: "count" }, n$ = { class: "queue-actions" }, a$ = { class: "action-label" }, l$ = {
  key: 0,
  class: "overall-progress"
}, i$ = { class: "progress-bar" }, r$ = {
  key: 0,
  class: "current-mini"
}, d$ = { class: "filename" }, c$ = { class: "speed" }, u$ = {
  key: 1,
  class: "queue-content"
}, m$ = {
  key: 0,
  class: "section"
}, v$ = {
  key: 1,
  class: "section"
}, f$ = { class: "section-header" }, p$ = { class: "section-label paused" }, g$ = { class: "items-list" }, h$ = {
  key: 2,
  class: "section"
}, y$ = { class: "section-header" }, w$ = { class: "section-label" }, k$ = { class: "items-list" }, b$ = {
  key: 3,
  class: "section"
}, _$ = { class: "section-header" }, $$ = { class: "section-label" }, C$ = { class: "items-list" }, x$ = {
  key: 4,
  class: "section"
}, S$ = { class: "section-header" }, I$ = { class: "section-label failed" }, E$ = { class: "items-list" }, P$ = /* @__PURE__ */ oe({
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
    } = os(), R = h(!1);
    let $ = null;
    St(
      () => ({
        active: d.value,
        failed: p.value.length,
        paused: u.value.length,
        completed: f.value.length
      }),
      (P, J) => {
        $ && (clearTimeout($), $ = null);
        const F = P.active === 0 && P.failed === 0 && P.paused === 0 && P.completed > 0, G = J && (J.active > 0 || J.paused > 0);
        F && G && ($ = setTimeout(() => {
          T(), $ = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const C = B(() => {
      var F;
      if (c.items.length === 0) return 0;
      const P = f.value.length, J = ((F = n.value) == null ? void 0 : F.progress) || 0;
      return Math.round((P + J / 100) / c.items.length * 100);
    });
    function A(P) {
      v(P);
    }
    function S(P) {
      return P === 0 ? "" : `${(P / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (P, J) => (s(), M(Xe, { to: "body" }, [
      Ie(m) ? (s(), o("div", {
        key: 0,
        class: pe(["model-download-queue", { minimized: !R.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: J[0] || (J[0] = (F) => R.value = !R.value)
        }, [
          e("div", s$, [
            J[4] || (J[4] = e("span", { class: "icon" }, "↓", -1)),
            J[5] || (J[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", o$, "(" + a(Ie(d)) + "/" + a(Ie(c).items.length) + ")", 1)
          ]),
          e("div", n$, [
            e("span", a$, a(R.value ? "minimize" : "expand"), 1)
          ])
        ]),
        R.value ? (s(), o("div", u$, [
          Ie(n) ? (s(), o("div", m$, [
            J[6] || (J[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            w(Xt, {
              item: Ie(n),
              onCancel: J[1] || (J[1] = (F) => A(Ie(n).id))
            }, null, 8, ["item"])
          ])) : r("", !0),
          Ie(u).length > 0 ? (s(), o("div", v$, [
            e("div", f$, [
              e("span", p$, "Paused (" + a(Ie(u).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: J[2] || (J[2] = //@ts-ignore
                (...F) => Ie(_) && Ie(_)(...F))
              }, "Resume All")
            ]),
            e("div", g$, [
              (s(!0), o(W, null, ne(Ie(u), (F) => (s(), M(Xt, {
                key: F.id,
                item: F,
                onResume: (G) => Ie(k)(F.id),
                onRemove: (G) => Ie(b)(F.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : r("", !0),
          Ie(i).length > 0 ? (s(), o("div", h$, [
            e("div", y$, [
              e("span", w$, "Queued (" + a(Ie(i).length) + ")", 1)
            ]),
            e("div", k$, [
              (s(!0), o(W, null, ne(Ie(i), (F) => (s(), M(Xt, {
                key: F.id,
                item: F,
                onCancel: (G) => A(F.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : r("", !0),
          Ie(f).length > 0 ? (s(), o("div", b$, [
            e("div", _$, [
              e("span", $$, "Completed (" + a(Ie(f).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: J[3] || (J[3] = //@ts-ignore
                (...F) => Ie(T) && Ie(T)(...F))
              }, "Clear")
            ]),
            e("div", C$, [
              (s(!0), o(W, null, ne(Ie(f).slice(0, 3), (F) => (s(), M(Xt, {
                key: F.id,
                item: F,
                onRemove: (G) => Ie(b)(F.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : r("", !0),
          Ie(p).length > 0 ? (s(), o("div", x$, [
            e("div", S$, [
              e("span", I$, "Failed (" + a(Ie(p).length) + ")", 1)
            ]),
            e("div", E$, [
              (s(!0), o(W, null, ne(Ie(p), (F) => (s(), M(Xt, {
                key: F.id,
                item: F,
                onRetry: (G) => Ie(y)(F.id),
                onRemove: (G) => Ie(b)(F.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : r("", !0)
        ])) : (s(), o("div", l$, [
          e("div", i$, [
            e("div", {
              class: "progress-fill",
              style: Rt({ width: `${C.value}%` })
            }, null, 4)
          ]),
          Ie(n) ? (s(), o("div", r$, [
            e("span", d$, a(Ie(n).filename), 1),
            e("span", c$, a(S(Ie(n).speed)), 1)
          ])) : r("", !0)
        ]))
      ], 2)) : r("", !0)
    ]));
  }
}), M$ = /* @__PURE__ */ ae(P$, [["__scopeId", "data-v-60751cfa"]]), R$ = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', T$ = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', D$ = {
  comfy: R$,
  phosphor: T$
}, Is = "comfy", no = "comfygit-theme";
let At = null, ao = Is;
function L$() {
  try {
    const t = localStorage.getItem(no);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return Is;
}
function lo(t = Is) {
  At && At.remove(), At = document.createElement("style"), At.id = "comfygit-theme-styles", At.setAttribute("data-theme", t), At.textContent = D$[t], document.head.appendChild(At), document.body.setAttribute("data-comfygit-theme", t), ao = t;
  try {
    localStorage.setItem(no, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function z$() {
  return ao;
}
function U$(t) {
  lo(t);
}
function N$(t) {
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
const O$ = L$();
lo(O$);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), U$(t);
  },
  getTheme: () => {
    const t = z$();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let ht = null, dt = null, ts = null, Qt = null, Bs = null;
const Ht = h(null);
let Ps = "managed", io = !1;
async function ls() {
  var t;
  if (!((t = Ut) != null && t.api)) return null;
  try {
    const c = await Ut.api.fetchApi("/v2/comfygit/status");
    c.ok && (Ht.value = await c.json());
  } catch {
  }
}
async function hs() {
  var t;
  if ((t = Ut) != null && t.api)
    try {
      const c = await Ut.api.fetchApi("/v2/setup/status");
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
function A$() {
  if (!Ht.value) return !1;
  const t = Ht.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || Ht.value.has_changes;
}
function Fs(t) {
  ht && ht.remove(), ht = document.createElement("div"), ht.className = "comfygit-panel-overlay";
  const c = document.createElement("div");
  c.className = "comfygit-panel-container", ht.appendChild(c), ht.addEventListener("click", (f) => {
    f.target === ht && ps();
  });
  const n = (f) => {
    f.key === "Escape" && (ps(), document.removeEventListener("keydown", n));
  };
  document.addEventListener("keydown", n), _s({
    render: () => $s(U2, {
      initialView: t,
      onClose: ps,
      onStatusUpdate: async (f) => {
        Ht.value = f, ss(), await hs(), ws(), ys();
      }
    })
  }).mount(c), document.body.appendChild(ht);
}
function ps() {
  ht && (ht.remove(), ht = null);
}
function B$(t) {
  Zt(), dt = document.createElement("div"), dt.className = "comfygit-commit-popover-container";
  const c = t.getBoundingClientRect();
  dt.style.position = "fixed", dt.style.top = `${c.bottom + 8}px`, dt.style.right = `${window.innerWidth - c.right}px`, dt.style.zIndex = "10001";
  const n = (f) => {
    dt && !dt.contains(f.target) && f.target !== t && (Zt(), document.removeEventListener("mousedown", n));
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
        Zt(), F$(f.success, f.message), ls().then(ss);
      }
    })
  }), ts.mount(dt), document.body.appendChild(dt);
}
function Zt() {
  ts && (ts.unmount(), ts = null), dt && (dt.remove(), dt = null);
}
function F$(t, c) {
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
function V$() {
  Qt || (Qt = document.createElement("div"), Qt.className = "comfygit-download-queue-root", Bs = _s({
    render: () => $s(M$)
  }), Bs.mount(Qt), document.body.appendChild(Qt), console.log("[ComfyGit] Model download queue mounted"));
}
let ct = null;
function ss() {
  if (!ct) return;
  const t = ct.querySelector(".commit-indicator");
  t && (t.style.display = A$() ? "block" : "none");
}
function ws() {
  if (!ct) return;
  const t = Ps !== "managed";
  ct.disabled = t, ct.title = t ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
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
Ut.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var f, p;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const c = document.createElement("button");
    c.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", c.textContent = "ComfyGit", c.title = "ComfyGit Control Panel", c.onclick = Fs, ct = document.createElement("button"), ct.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", ct.innerHTML = 'Commit <span class="commit-indicator"></span>', ct.title = "Quick Commit", ct.onclick = () => B$(ct), t.appendChild(c), t.appendChild(ct), (p = (f = Ut.menu) == null ? void 0 : f.settingsGroup) != null && p.element && (Ut.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), V$();
    const { loadPendingDownloads: n } = os();
    n(), await Promise.all([ls(), hs()]), ss(), ws(), ys(), setTimeout(ys, 100), setInterval(async () => {
      await Promise.all([ls(), hs()]), ss(), ws();
    }, 3e4);
    const i = Ut.api;
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
        const R = document.createElement("div");
        R.textContent = "Node installation failed", R.style.cssText = "font-weight: 600; color: #e53935;", T.appendChild(R);
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
        const A = document.createElement("button");
        A.textContent = "×", A.style.cssText = `
          background: transparent;
          border: none;
          color: #fff;
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, A.onmouseover = () => A.style.opacity = "1", A.onmouseout = () => A.style.opacity = "0.6", A.onclick = () => _.remove(), _.appendChild(A), document.body.appendChild(_), console.log("[ComfyGit] Manager error toast displayed:", y), setTimeout(() => {
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
        const k = N$(y.detail);
        k && d(k);
      }), console.log("[ComfyGit] Manager error notification system initialized");
    }
  }
});
