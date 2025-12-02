import { app as Tt } from "../../scripts/app.js";
import { defineComponent as oe, createElementBlock as o, openBlock as t, createCommentVNode as r, createElementVNode as e, renderSlot as Te, createBlock as P, resolveDynamicComponent as $s, normalizeClass as fe, withCtx as l, toDisplayString as a, createVNode as w, createTextVNode as g, computed as A, Fragment as W, renderList as ne, normalizeStyle as It, ref as h, onMounted as Ve, watch as Ct, Teleport as Je, withModifiers as Be, Transition as mo, createSlots as Nt, withKeys as $t, reactive as fs, onUnmounted as Cs, readonly as vo, unref as Me, withDirectives as ze, vModelText as Lt, vModelRadio as Dt, vModelCheckbox as cs, nextTick as fo, vModelSelect as St, vModelDynamic as po, TransitionGroup as go, createApp as xs, h as Ss } from "vue";
const ho = { class: "panel-layout" }, yo = {
  key: 0,
  class: "panel-layout-header"
}, wo = {
  key: 1,
  class: "panel-layout-search"
}, ko = { class: "panel-layout-content" }, bo = {
  key: 2,
  class: "panel-layout-footer"
}, _o = /* @__PURE__ */ oe({
  __name: "PanelLayout",
  setup(s) {
    return (c, n) => (t(), o("div", ho, [
      c.$slots.header ? (t(), o("div", yo, [
        Te(c.$slots, "header", {}, void 0, !0)
      ])) : r("", !0),
      c.$slots.search ? (t(), o("div", wo, [
        Te(c.$slots, "search", {}, void 0, !0)
      ])) : r("", !0),
      e("div", ko, [
        Te(c.$slots, "content", {}, void 0, !0)
      ]),
      c.$slots.footer ? (t(), o("div", bo, [
        Te(c.$slots, "footer", {}, void 0, !0)
      ])) : r("", !0)
    ]));
  }
}), ae = (s, c) => {
  const n = s.__vccOpts || s;
  for (const [i, f] of c)
    n[i] = f;
  return n;
}, ot = /* @__PURE__ */ ae(_o, [["__scopeId", "data-v-21565df9"]]), $o = {
  key: 0,
  class: "panel-title-prefix"
}, Co = {
  key: 1,
  class: "panel-title-prefix-theme"
}, xo = /* @__PURE__ */ oe({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(s) {
    return (c, n) => (t(), P($s(`h${s.level}`), {
      class: fe(["panel-title", s.variant])
    }, {
      default: l(() => [
        s.showPrefix ? (t(), o("span", $o, a(s.prefix), 1)) : (t(), o("span", Co)),
        Te(c.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), So = /* @__PURE__ */ ae(xo, [["__scopeId", "data-v-c3875efc"]]), Io = ["title"], Eo = ["width", "height"], Po = /* @__PURE__ */ oe({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(s) {
    return (c, n) => (t(), o("button", {
      class: "info-button",
      title: s.title,
      onClick: n[0] || (n[0] = (i) => c.$emit("click"))
    }, [
      (t(), o("svg", {
        width: s.size,
        height: s.size,
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
      ])], 8, Eo))
    ], 8, Io));
  }
}), Vs = /* @__PURE__ */ ae(Po, [["__scopeId", "data-v-6fc7f16d"]]), Mo = { class: "header-left" }, Ro = {
  key: 0,
  class: "header-actions"
}, To = /* @__PURE__ */ oe({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(s) {
    return (c, n) => (t(), o("div", {
      class: fe(["panel-header", { stacked: s.stacked }])
    }, [
      e("div", Mo, [
        w(So, { "show-prefix": s.showPrefix }, {
          default: l(() => [
            g(a(s.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        s.showInfo ? (t(), P(Vs, {
          key: 0,
          onClick: n[0] || (n[0] = (i) => c.$emit("info-click"))
        })) : r("", !0)
      ]),
      c.$slots.actions ? (t(), o("div", Ro, [
        Te(c.$slots, "actions", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), nt = /* @__PURE__ */ ae(To, [["__scopeId", "data-v-55a62cd6"]]), Do = {
  key: 0,
  class: "section-title-count"
}, Lo = {
  key: 1,
  class: "section-title-icon"
}, zo = /* @__PURE__ */ oe({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(s) {
    return (c, n) => (t(), P($s(`h${s.level}`), {
      class: fe(["section-title", { clickable: s.clickable }]),
      onClick: n[0] || (n[0] = (i) => s.clickable && c.$emit("click"))
    }, {
      default: l(() => [
        Te(c.$slots, "default", {}, void 0, !0),
        s.count !== void 0 ? (t(), o("span", Do, "(" + a(s.count) + ")", 1)) : r("", !0),
        s.clickable ? (t(), o("span", Lo, a(s.expanded ? "▼" : "▸"), 1)) : r("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), mt = /* @__PURE__ */ ae(zo, [["__scopeId", "data-v-559361eb"]]), Uo = { class: "status-grid" }, No = { class: "status-grid__columns" }, Oo = { class: "status-grid__column" }, Ao = { class: "status-grid__title" }, Bo = { class: "status-grid__column status-grid__column--right" }, Fo = { class: "status-grid__title" }, Vo = {
  key: 0,
  class: "status-grid__footer"
}, Wo = /* @__PURE__ */ oe({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(s) {
    return (c, n) => (t(), o("div", Uo, [
      e("div", No, [
        e("div", Oo, [
          e("h4", Ao, a(s.leftTitle), 1),
          Te(c.$slots, "left", {}, void 0, !0)
        ]),
        e("div", Bo, [
          e("h4", Fo, a(s.rightTitle), 1),
          Te(c.$slots, "right", {}, void 0, !0)
        ])
      ]),
      c.$slots.footer ? (t(), o("div", Vo, [
        Te(c.$slots, "footer", {}, void 0, !0)
      ])) : r("", !0)
    ]));
  }
}), Go = /* @__PURE__ */ ae(Wo, [["__scopeId", "data-v-73b7ba3f"]]), jo = {
  key: 0,
  class: "status-item__icon"
}, Ho = {
  key: 1,
  class: "status-item__count"
}, Ko = { class: "status-item__label" }, qo = /* @__PURE__ */ oe({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(s) {
    const c = s, n = A(() => `status-item--${c.variant}`);
    return (i, f) => (t(), o("div", {
      class: fe(["status-item", n.value, { "is-separator": s.separator }])
    }, [
      s.icon ? (t(), o("span", jo, a(s.icon), 1)) : r("", !0),
      s.count !== void 0 ? (t(), o("span", Ho, a(s.count), 1)) : r("", !0),
      e("span", Ko, a(s.label), 1)
    ], 2));
  }
}), bt = /* @__PURE__ */ ae(qo, [["__scopeId", "data-v-6f929183"]]), Yo = { class: "issue-card__header" }, Jo = { class: "issue-card__icon" }, Xo = { class: "issue-card__title" }, Qo = {
  key: 0,
  class: "issue-card__content"
}, Zo = {
  key: 0,
  class: "issue-card__description"
}, en = {
  key: 1,
  class: "issue-card__items"
}, tn = {
  key: 2,
  class: "issue-card__actions"
}, sn = /* @__PURE__ */ oe({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(s) {
    const c = s, n = A(() => `issue-card--${c.severity}`);
    return (i, f) => (t(), o("div", {
      class: fe(["issue-card", n.value])
    }, [
      e("div", Yo, [
        e("span", Jo, a(s.icon), 1),
        e("h4", Xo, a(s.title), 1)
      ]),
      i.$slots.default || s.description ? (t(), o("div", Qo, [
        s.description ? (t(), o("p", Zo, a(s.description), 1)) : r("", !0),
        Te(i.$slots, "default", {}, void 0, !0)
      ])) : r("", !0),
      s.items && s.items.length ? (t(), o("div", en, [
        (t(!0), o(W, null, ne(s.items, (p, u) => (t(), o("div", {
          key: u,
          class: "issue-card__item"
        }, [
          f[0] || (f[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, a(p), 1)
        ]))), 128))
      ])) : r("", !0),
      i.$slots.actions ? (t(), o("div", tn, [
        Te(i.$slots, "actions", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), gt = /* @__PURE__ */ ae(sn, [["__scopeId", "data-v-df6aa348"]]), on = ["type", "disabled"], nn = {
  key: 0,
  class: "spinner"
}, an = /* @__PURE__ */ oe({
  __name: "ActionButton",
  props: {
    variant: { default: "primary" },
    size: { default: "sm" },
    loading: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    type: { default: "button" }
  },
  emits: ["click"],
  setup(s) {
    return (c, n) => (t(), o("button", {
      type: s.type,
      disabled: s.disabled || s.loading,
      class: fe(["action-btn", s.variant, s.size, { loading: s.loading }]),
      onClick: n[0] || (n[0] = (i) => c.$emit("click", i))
    }, [
      s.loading ? (t(), o("span", nn)) : r("", !0),
      s.loading ? r("", !0) : Te(c.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, on));
  }
}), te = /* @__PURE__ */ ae(an, [["__scopeId", "data-v-772abe47"]]), ln = { class: "empty-state" }, rn = {
  key: 0,
  class: "empty-icon"
}, dn = { class: "empty-message" }, cn = /* @__PURE__ */ oe({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(s) {
    return (c, n) => (t(), o("div", ln, [
      s.icon ? (t(), o("div", rn, a(s.icon), 1)) : r("", !0),
      e("p", dn, a(s.message), 1),
      s.actionLabel ? (t(), P(te, {
        key: 1,
        variant: s.actionVariant || "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (i) => c.$emit("action"))
      }, {
        default: l(() => [
          g(a(s.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : r("", !0)
    ]));
  }
}), wt = /* @__PURE__ */ ae(cn, [["__scopeId", "data-v-4466284f"]]), un = /* @__PURE__ */ oe({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(s) {
    return (c, n) => (t(), o("span", {
      class: fe(["detail-label"]),
      style: It({ minWidth: s.minWidth })
    }, [
      Te(c.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), rs = /* @__PURE__ */ ae(un, [["__scopeId", "data-v-75e9eeb8"]]), mn = /* @__PURE__ */ oe({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(s) {
    return (c, n) => (t(), o("span", {
      class: fe(["detail-value", s.variant, { mono: s.mono, truncate: s.truncate }])
    }, [
      Te(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), ws = /* @__PURE__ */ ae(mn, [["__scopeId", "data-v-2f186e4c"]]), vn = { class: "detail-row" }, fn = /* @__PURE__ */ oe({
  __name: "DetailRow",
  props: {
    label: {},
    value: {},
    mono: { type: Boolean, default: !1 },
    valueVariant: { default: "default" },
    truncate: { type: Boolean, default: !1 },
    labelMinWidth: { default: "70px" }
  },
  setup(s) {
    return (c, n) => (t(), o("div", vn, [
      w(rs, { "min-width": s.labelMinWidth }, {
        default: l(() => [
          g(a(s.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      s.value ? (t(), P(ws, {
        key: 0,
        mono: s.mono,
        variant: s.valueVariant,
        truncate: s.truncate
      }, {
        default: l(() => [
          g(a(s.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : Te(c.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), Fe = /* @__PURE__ */ ae(fn, [["__scopeId", "data-v-ef15664a"]]), pn = { class: "modal-header" }, gn = { class: "modal-body" }, hn = { class: "status-section" }, yn = {
  key: 0,
  class: "status-section"
}, wn = { class: "section-header-row" }, kn = {
  key: 0,
  class: "workflow-group"
}, bn = { class: "workflow-group-header" }, _n = { class: "workflow-group-title" }, $n = { class: "workflow-list" }, Cn = { class: "workflow-name" }, xn = { class: "workflow-issue" }, Sn = {
  key: 1,
  class: "workflow-group"
}, In = { class: "workflow-group-header" }, En = { class: "workflow-group-title" }, Pn = { class: "workflow-list" }, Mn = { class: "workflow-name" }, Rn = { class: "workflow-issue" }, Tn = {
  key: 2,
  class: "workflow-group"
}, Dn = { class: "workflow-group-header" }, Ln = { class: "workflow-group-title" }, zn = { class: "workflow-list" }, Un = { class: "workflow-name" }, Nn = {
  key: 3,
  class: "workflow-group"
}, On = { class: "workflow-group-header" }, An = { class: "workflow-group-title" }, Bn = { class: "workflow-list" }, Fn = { class: "workflow-name" }, Vn = {
  key: 4,
  class: "workflow-group"
}, Wn = { class: "workflow-group-header" }, Gn = { class: "workflow-group-title" }, jn = { class: "workflow-list" }, Hn = { class: "workflow-name" }, Kn = {
  key: 5,
  class: "workflow-group"
}, qn = { class: "workflow-group-title" }, Yn = { class: "expand-icon" }, Jn = {
  key: 0,
  class: "workflow-list"
}, Xn = { class: "workflow-name" }, Qn = {
  key: 1,
  class: "status-section"
}, Zn = {
  key: 0,
  class: "change-group"
}, ea = { class: "change-group-header" }, ta = { class: "change-group-title" }, sa = { class: "change-list" }, oa = { class: "node-name" }, na = {
  key: 0,
  class: "dev-badge"
}, aa = {
  key: 1,
  class: "change-group"
}, la = { class: "change-group-header" }, ia = { class: "change-group-title" }, ra = { class: "change-list" }, da = { class: "node-name" }, ca = {
  key: 0,
  class: "dev-badge"
}, ua = {
  key: 2,
  class: "change-group"
}, ma = { class: "change-list" }, va = { class: "change-item" }, fa = { class: "node-name" }, pa = {
  key: 3,
  class: "change-group"
}, ga = {
  key: 2,
  class: "status-section"
}, ha = { class: "section-header-row" }, ya = {
  key: 0,
  class: "drift-item"
}, wa = { class: "drift-list" }, ka = {
  key: 0,
  class: "drift-list-more"
}, ba = {
  key: 1,
  class: "drift-item"
}, _a = { class: "drift-list" }, $a = {
  key: 0,
  class: "drift-list-more"
}, Ca = {
  key: 2,
  class: "drift-item"
}, xa = { class: "drift-list" }, Sa = { class: "version-actual" }, Ia = { class: "version-expected" }, Ea = {
  key: 0,
  class: "drift-list-more"
}, Pa = {
  key: 3,
  class: "drift-item"
}, Ma = { class: "repair-action" }, Ra = {
  key: 3,
  class: "status-section"
}, Ta = { class: "info-box" }, Da = { class: "drift-list" }, La = {
  key: 0,
  class: "drift-list-more"
}, za = {
  key: 4,
  class: "status-section"
}, Ua = { class: "warning-box" }, Na = {
  key: 5,
  class: "empty-state-inline"
}, Oa = { class: "modal-actions" }, Aa = /* @__PURE__ */ oe({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {},
    isRepairing: { type: Boolean }
  },
  emits: ["close", "navigate-workflows", "navigate-nodes", "repair"],
  setup(s) {
    const c = s, n = h(!1);
    Ve(() => {
      console.log("StatusDetailModal mounted, initial show value:", c.show);
    }), Ct(() => c.show, (_, b) => {
      console.log("StatusDetailModal show prop changed from", b, "to", _);
    }, { immediate: !0 });
    const i = A(() => {
      var _, b, D;
      return ((D = (b = (_ = c.status) == null ? void 0 : _.workflows) == null ? void 0 : b.analyzed) == null ? void 0 : D.filter(
        (M) => M.status === "broken" && M.sync_state === "synced"
      )) || [];
    }), f = A(() => {
      var _, b, D;
      return ((D = (b = (_ = c.status) == null ? void 0 : _.workflows) == null ? void 0 : b.analyzed) == null ? void 0 : D.filter(
        (M) => M.status === "broken" && M.sync_state !== "synced"
      )) || [];
    }), p = A(() => {
      var _, b, D;
      return ((D = (b = (_ = c.status) == null ? void 0 : _.workflows) == null ? void 0 : b.synced) == null ? void 0 : D.filter((M) => {
        var C, B, x;
        const $ = (x = (B = (C = c.status) == null ? void 0 : C.workflows) == null ? void 0 : B.analyzed) == null ? void 0 : x.find((R) => R.name === M);
        return !$ || $.status !== "broken";
      })) || [];
    }), u = A(() => {
      var _, b, D, M, $;
      return (_ = c.status) != null && _.workflows ? (((b = c.status.workflows.new) == null ? void 0 : b.length) ?? 0) > 0 || (((D = c.status.workflows.modified) == null ? void 0 : D.length) ?? 0) > 0 || (((M = c.status.workflows.deleted) == null ? void 0 : M.length) ?? 0) > 0 || ((($ = c.status.workflows.synced) == null ? void 0 : $.length) ?? 0) > 0 : !1;
    }), m = A(() => {
      var b, D, M;
      const _ = (b = c.status) == null ? void 0 : b.git_changes;
      return _ ? (((D = _.nodes_added) == null ? void 0 : D.length) ?? 0) > 0 || (((M = _.nodes_removed) == null ? void 0 : M.length) ?? 0) > 0 || _.workflow_changes || _.has_other_changes : !1;
    }), d = A(() => {
      var _, b, D, M, $, C;
      return !u.value && !m.value && ((b = (_ = c.status) == null ? void 0 : _.comparison) == null ? void 0 : b.is_synced) && (((D = c.status) == null ? void 0 : D.missing_models_count) ?? 0) === 0 && (((C = ($ = (M = c.status) == null ? void 0 : M.comparison) == null ? void 0 : $.disabled_nodes) == null ? void 0 : C.length) ?? 0) === 0;
    }), v = A(() => {
      var b, D;
      const _ = (D = (b = c.status) == null ? void 0 : b.git_changes) == null ? void 0 : D.workflow_changes;
      return _ ? typeof _ == "number" ? _ : Object.keys(_).length : 0;
    });
    function y(_) {
      return typeof _ == "string" ? _ : _.name;
    }
    function k(_) {
      return typeof _ == "object" && _.is_development === !0;
    }
    return (_, b) => {
      var D, M, $, C, B, x, R, q, F, G, S, T, N, de, se, X, ve, J, z, L, I, me;
      return t(), P(Je, { to: "body" }, [
        s.show ? (t(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: b[7] || (b[7] = (Q) => _.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: b[6] || (b[6] = Be(() => {
            }, ["stop"]))
          }, [
            e("div", pn, [
              b[8] || (b[8] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: b[0] || (b[0] = (Q) => _.$emit("close"))
              }, "✕")
            ]),
            e("div", gn, [
              e("div", hn, [
                w(mt, { level: "4" }, {
                  default: l(() => [...b[9] || (b[9] = [
                    g("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                w(Fe, {
                  label: "Current Branch:",
                  value: s.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              u.value ? (t(), o("div", yn, [
                e("div", wn, [
                  w(mt, { level: "4" }, {
                    default: l(() => [...b[10] || (b[10] = [
                      g("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: b[1] || (b[1] = (Q) => _.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                i.value.length ? (t(), o("div", kn, [
                  e("div", bn, [
                    b[11] || (b[11] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", _n, "BROKEN (COMMITTED) (" + a(i.value.length) + ")", 1)
                  ]),
                  e("div", $n, [
                    (t(!0), o(W, null, ne(i.value, (Q) => (t(), o("div", {
                      key: Q.name,
                      class: "workflow-item"
                    }, [
                      e("span", Cn, a(Q.name), 1),
                      e("span", xn, a(Q.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                f.value.length ? (t(), o("div", Sn, [
                  e("div", In, [
                    b[12] || (b[12] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", En, "BROKEN (UNCOMMITTED) (" + a(f.value.length) + ")", 1)
                  ]),
                  e("div", Pn, [
                    (t(!0), o(W, null, ne(f.value, (Q) => (t(), o("div", {
                      key: Q.name,
                      class: "workflow-item"
                    }, [
                      e("span", Mn, a(Q.name), 1),
                      e("span", Rn, a(Q.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (M = (D = s.status.workflows) == null ? void 0 : D.new) != null && M.length ? (t(), o("div", Tn, [
                  e("div", Dn, [
                    b[13] || (b[13] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", Ln, "NEW (" + a(s.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", zn, [
                    (t(!0), o(W, null, ne(s.status.workflows.new, (Q) => (t(), o("div", {
                      key: Q,
                      class: "workflow-item"
                    }, [
                      e("span", Un, a(Q), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (C = ($ = s.status.workflows) == null ? void 0 : $.modified) != null && C.length ? (t(), o("div", Nn, [
                  e("div", On, [
                    b[14] || (b[14] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", An, "MODIFIED (" + a(s.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", Bn, [
                    (t(!0), o(W, null, ne(s.status.workflows.modified, (Q) => (t(), o("div", {
                      key: Q,
                      class: "workflow-item"
                    }, [
                      e("span", Fn, a(Q), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (x = (B = s.status.workflows) == null ? void 0 : B.deleted) != null && x.length ? (t(), o("div", Vn, [
                  e("div", Wn, [
                    b[15] || (b[15] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", Gn, "DELETED (" + a(s.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", jn, [
                    (t(!0), o(W, null, ne(s.status.workflows.deleted, (Q) => (t(), o("div", {
                      key: Q,
                      class: "workflow-item"
                    }, [
                      e("span", Hn, a(Q), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                p.value.length ? (t(), o("div", Kn, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: b[2] || (b[2] = (Q) => n.value = !n.value)
                  }, [
                    b[16] || (b[16] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", qn, "SYNCED (" + a(p.value.length) + ")", 1),
                    e("span", Yn, a(n.value ? "▼" : "▶"), 1)
                  ]),
                  n.value ? (t(), o("div", Jn, [
                    (t(!0), o(W, null, ne(p.value, (Q) => (t(), o("div", {
                      key: Q,
                      class: "workflow-item"
                    }, [
                      e("span", Xn, a(Q), 1)
                    ]))), 128))
                  ])) : r("", !0)
                ])) : r("", !0)
              ])) : r("", !0),
              m.value ? (t(), o("div", Qn, [
                w(mt, { level: "4" }, {
                  default: l(() => [...b[17] || (b[17] = [
                    g("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (q = (R = s.status.git_changes) == null ? void 0 : R.nodes_added) != null && q.length ? (t(), o("div", Zn, [
                  e("div", ea, [
                    b[18] || (b[18] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", ta, "NODES ADDED (" + a(s.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", sa, [
                    (t(!0), o(W, null, ne(s.status.git_changes.nodes_added, (Q) => (t(), o("div", {
                      key: y(Q),
                      class: "change-item"
                    }, [
                      e("span", oa, a(y(Q)), 1),
                      k(Q) ? (t(), o("span", na, "dev")) : r("", !0)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (G = (F = s.status.git_changes) == null ? void 0 : F.nodes_removed) != null && G.length ? (t(), o("div", aa, [
                  e("div", la, [
                    b[19] || (b[19] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", ia, "NODES REMOVED (" + a(s.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", ra, [
                    (t(!0), o(W, null, ne(s.status.git_changes.nodes_removed, (Q) => (t(), o("div", {
                      key: y(Q),
                      class: "change-item"
                    }, [
                      e("span", da, a(y(Q)), 1),
                      k(Q) ? (t(), o("span", ca, "dev")) : r("", !0)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (S = s.status.git_changes) != null && S.workflow_changes ? (t(), o("div", ua, [
                  b[20] || (b[20] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", ma, [
                    e("div", va, [
                      e("span", fa, a(v.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : r("", !0),
                (T = s.status.git_changes) != null && T.has_other_changes ? (t(), o("div", pa, [...b[21] || (b[21] = [
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
              (N = s.status.comparison) != null && N.is_synced ? r("", !0) : (t(), o("div", ga, [
                e("div", ha, [
                  w(mt, { level: "4" }, {
                    default: l(() => [...b[22] || (b[22] = [
                      g("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: b[3] || (b[3] = (Q) => _.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                b[26] || (b[26] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (se = (de = s.status.comparison) == null ? void 0 : de.missing_nodes) != null && se.length ? (t(), o("div", ya, [
                  w(Fe, {
                    label: "Missing Nodes:",
                    value: `${s.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", wa, [
                    (t(!0), o(W, null, ne(s.status.comparison.missing_nodes.slice(0, 10), (Q) => (t(), o("div", {
                      key: Q,
                      class: "drift-list-item"
                    }, " - " + a(Q), 1))), 128)),
                    s.status.comparison.missing_nodes.length > 10 ? (t(), o("div", ka, " ... and " + a(s.status.comparison.missing_nodes.length - 10) + " more ", 1)) : r("", !0)
                  ])
                ])) : r("", !0),
                (ve = (X = s.status.comparison) == null ? void 0 : X.extra_nodes) != null && ve.length ? (t(), o("div", ba, [
                  w(Fe, {
                    label: "Extra Nodes:",
                    value: `${s.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", _a, [
                    (t(!0), o(W, null, ne(s.status.comparison.extra_nodes.slice(0, 10), (Q) => (t(), o("div", {
                      key: Q,
                      class: "drift-list-item"
                    }, " - " + a(Q), 1))), 128)),
                    s.status.comparison.extra_nodes.length > 10 ? (t(), o("div", $a, " ... and " + a(s.status.comparison.extra_nodes.length - 10) + " more ", 1)) : r("", !0)
                  ])
                ])) : r("", !0),
                (z = (J = s.status.comparison) == null ? void 0 : J.version_mismatches) != null && z.length ? (t(), o("div", Ca, [
                  w(Fe, {
                    label: "Version Mismatches:",
                    value: `${s.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  e("div", xa, [
                    (t(!0), o(W, null, ne(s.status.comparison.version_mismatches.slice(0, 10), (Q) => (t(), o("div", {
                      key: Q.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      g(a(Q.name) + ": ", 1),
                      e("span", Sa, a(Q.actual), 1),
                      b[23] || (b[23] = g(" → ", -1)),
                      e("span", Ia, a(Q.expected), 1)
                    ]))), 128)),
                    s.status.comparison.version_mismatches.length > 10 ? (t(), o("div", Ea, " ... and " + a(s.status.comparison.version_mismatches.length - 10) + " more ", 1)) : r("", !0)
                  ])
                ])) : r("", !0),
                ((L = s.status.comparison) == null ? void 0 : L.packages_in_sync) === !1 ? (t(), o("div", Pa, [
                  w(Fe, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : r("", !0),
                e("div", Ma, [
                  w(te, {
                    variant: "warning",
                    loading: s.isRepairing,
                    onClick: b[4] || (b[4] = (Q) => _.$emit("repair"))
                  }, {
                    default: l(() => [...b[24] || (b[24] = [
                      g(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  b[25] || (b[25] = e("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (me = (I = s.status.comparison) == null ? void 0 : I.disabled_nodes) != null && me.length ? (t(), o("div", Ra, [
                w(mt, { level: "4" }, {
                  default: l(() => [...b[27] || (b[27] = [
                    g("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", Ta, [
                  b[28] || (b[28] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, a(s.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", Da, [
                  (t(!0), o(W, null, ne(s.status.comparison.disabled_nodes.slice(0, 10), (Q) => (t(), o("div", {
                    key: Q,
                    class: "drift-list-item"
                  }, " • " + a(Q), 1))), 128)),
                  s.status.comparison.disabled_nodes.length > 10 ? (t(), o("div", La, " ... and " + a(s.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : r("", !0)
                ])
              ])) : r("", !0),
              (s.status.missing_models_count ?? 0) > 0 ? (t(), o("div", za, [
                w(mt, { level: "4" }, {
                  default: l(() => [...b[29] || (b[29] = [
                    g("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", Ua, [
                  b[30] || (b[30] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, a(s.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                b[31] || (b[31] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : r("", !0),
              d.value ? (t(), o("div", Na, [...b[32] || (b[32] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : r("", !0)
            ]),
            e("div", Oa, [
              w(te, {
                variant: "secondary",
                onClick: b[5] || (b[5] = (Q) => _.$emit("close"))
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
}), Ba = /* @__PURE__ */ ae(Aa, [["__scopeId", "data-v-e2b37122"]]), Fa = { class: "health-section-header" }, Va = { class: "suggestions-content" }, Wa = { class: "suggestions-text" }, Ga = { style: { "margin-top": "var(--cg-space-3)" } }, ja = {
  key: 1,
  class: "no-issues-text"
}, Ha = /* @__PURE__ */ oe({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models", "repair-environment", "start-setup", "view-environments", "create-environment"],
  setup(s, { expose: c, emit: n }) {
    const i = s, f = h(!1), p = h(!1);
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
    function D() {
      f.value = !1;
    }
    const M = A(() => {
      const J = i.status.workflows.analyzed || [], z = J.filter(
        (L) => L.unresolved_models_count > 0 || L.ambiguous_models_count > 0
      );
      return z.length === 0 && i.status.missing_models_count > 0 ? J.filter((L) => L.sync_state === "synced") : z;
    });
    function $() {
      const J = M.value;
      J.length !== 0 && (y.value = !0, v("repair-missing-models", J.map((z) => z.name)));
    }
    function C() {
      y.value = !1;
    }
    c({ resetRepairingState: C, resetRepairingEnvironmentState: b, closeDetailModal: D });
    const B = A(() => i.status.workflows.new.length > 0 || i.status.workflows.modified.length > 0 || i.status.workflows.deleted.length > 0), x = A(() => i.status.has_changes), R = A(() => {
      const J = i.status.git_changes;
      return J.nodes_added.length > 0 || J.nodes_removed.length > 0 || J.workflow_changes;
    }), q = A(() => i.status.has_changes || B.value), F = A(() => Object.keys(i.status.git_changes.workflow_changes_detail).length), G = A(() => i.status.git_changes.has_other_changes), S = A(() => {
      var J;
      return ((J = i.status.workflows.analyzed) == null ? void 0 : J.filter((z) => z.status === "broken")) || [];
    }), T = A(() => {
      var J;
      return ((J = i.status.workflows.analyzed) == null ? void 0 : J.filter(
        (z) => z.has_path_sync_issues && !z.has_issues
      )) || [];
    }), N = A(() => S.value.length > 0), de = A(() => N.value || T.value.length > 0 || i.status.missing_models_count > 0 || !i.status.comparison.is_synced || i.status.has_legacy_manager), se = A(() => {
      const J = [];
      return i.status.workflows.new.length > 0 && J.push(`${i.status.workflows.new.length} new`), i.status.workflows.modified.length > 0 && J.push(`${i.status.workflows.modified.length} modified`), i.status.workflows.deleted.length > 0 && J.push(`${i.status.workflows.deleted.length} deleted`), J.length > 0 ? `${J.join(", ")} workflow${J.length === 1 && !J[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), X = A(() => {
      var L, I;
      const J = [], z = i.status.comparison;
      return (L = z.missing_nodes) != null && L.length && J.push(`${z.missing_nodes.length} missing node${z.missing_nodes.length === 1 ? "" : "s"}`), (I = z.extra_nodes) != null && I.length && J.push(`${z.extra_nodes.length} untracked node${z.extra_nodes.length === 1 ? "" : "s"}`), J.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${J.join(" and ")}.`;
    }), ve = A(() => {
      var L, I;
      const J = [], z = i.status.comparison;
      return (L = z.extra_nodes) != null && L.length && (z.extra_nodes.slice(0, 3).forEach((me) => {
        J.push(`Untracked: ${me}`);
      }), z.extra_nodes.length > 3 && J.push(`...and ${z.extra_nodes.length - 3} more untracked`)), (I = z.missing_nodes) != null && I.length && (z.missing_nodes.slice(0, 3).forEach((me) => {
        J.push(`Missing: ${me}`);
      }), z.missing_nodes.length > 3 && J.push(`...and ${z.missing_nodes.length - 3} more missing`)), J;
    });
    return (J, z) => (t(), o(W, null, [
      w(ot, null, {
        header: l(() => [
          w(nt, { title: "STATUS" })
        ]),
        content: l(() => [
          i.setupState === "no_workspace" ? (t(), P(gt, {
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
                onClick: z[0] || (z[0] = (L) => J.$emit("start-setup"))
              }, {
                default: l(() => [...z[13] || (z[13] = [
                  g(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : i.setupState === "unmanaged" ? (t(), P(gt, {
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
                onClick: z[1] || (z[1] = (L) => J.$emit("view-environments"))
              }, {
                default: l(() => [...z[14] || (z[14] = [
                  g(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : i.setupState === "empty_workspace" ? (t(), P(gt, {
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
                onClick: z[2] || (z[2] = (L) => J.$emit("create-environment"))
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
            e("div", Fa, [
              w(mt, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: l(() => [...z[16] || (z[16] = [
                  g(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              w(mo, { name: "fade" }, {
                default: l(() => [
                  p.value ? (t(), P(te, {
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
            w(Go, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, Nt({
              left: l(() => [
                s.status.workflows.new.length ? (t(), P(bt, {
                  key: 0,
                  icon: "●",
                  count: s.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : r("", !0),
                s.status.workflows.modified.length ? (t(), P(bt, {
                  key: 1,
                  icon: "●",
                  count: s.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : r("", !0),
                s.status.workflows.deleted.length ? (t(), P(bt, {
                  key: 2,
                  icon: "●",
                  count: s.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : r("", !0),
                w(bt, {
                  icon: "✓",
                  count: s.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: B.value
                }, null, 8, ["count", "separator"])
              ]),
              right: l(() => [
                s.status.git_changes.nodes_added.length ? (t(), P(bt, {
                  key: 0,
                  icon: "●",
                  count: s.status.git_changes.nodes_added.length,
                  label: s.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : r("", !0),
                s.status.git_changes.nodes_removed.length ? (t(), P(bt, {
                  key: 1,
                  icon: "●",
                  count: s.status.git_changes.nodes_removed.length,
                  label: s.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : r("", !0),
                s.status.git_changes.workflow_changes ? (t(), P(bt, {
                  key: 2,
                  icon: "●",
                  count: F.value,
                  label: F.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : r("", !0),
                G.value ? (t(), P(bt, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : r("", !0),
                x.value && !R.value && !G.value ? (t(), P(bt, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : r("", !0),
                x.value ? r("", !0) : (t(), P(bt, {
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
                  e("div", Va, [
                    e("span", Wa, a(se.value), 1),
                    w(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: z[3] || (z[3] = (L) => J.$emit("commit-changes"))
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
          s.status.is_detached_head ? (t(), P(gt, {
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
                onClick: z[6] || (z[6] = (L) => J.$emit("create-branch"))
              }, {
                default: l(() => [...z[20] || (z[20] = [
                  g(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : r("", !0),
          e("div", Ga, [
            w(mt, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: l(() => [...z[21] || (z[21] = [
                g(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            de.value ? (t(), o(W, { key: 0 }, [
              S.value.length > 0 ? (t(), P(gt, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${S.value.length} workflow${S.value.length === 1 ? "" : "s"} can't run`,
                description: "These workflows have missing dependencies that must be resolved before they can run.",
                items: S.value.map((L) => `${L.name} — ${L.issue_summary}`)
              }, {
                actions: l(() => [
                  w(te, {
                    variant: "primary",
                    size: "sm",
                    onClick: z[7] || (z[7] = (L) => J.$emit("view-workflows"))
                  }, {
                    default: l(() => [...z[22] || (z[22] = [
                      g(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : r("", !0),
              T.value.length > 0 ? (t(), P(gt, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${T.value.length} workflow${T.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: T.value.map((L) => `${L.name} — ${L.models_needing_path_sync_count} model path${L.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: l(() => [
                  w(te, {
                    variant: "primary",
                    size: "sm",
                    onClick: z[8] || (z[8] = (L) => J.$emit("view-workflows"))
                  }, {
                    default: l(() => [...z[23] || (z[23] = [
                      g(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : r("", !0),
              s.status.missing_models_count > 0 && !N.value ? (t(), P(gt, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${s.status.missing_models_count} missing model${s.status.missing_models_count === 1 ? "" : "s"}`,
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
                    onClick: z[9] || (z[9] = (L) => J.$emit("view-workflows"))
                  }, {
                    default: l(() => [...z[24] || (z[24] = [
                      g(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : r("", !0),
              s.status.comparison.is_synced ? r("", !0) : (t(), P(gt, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: X.value,
                items: ve.value
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
                    onClick: z[10] || (z[10] = (L) => J.$emit("view-nodes"))
                  }, {
                    default: l(() => [...z[26] || (z[26] = [
                      g(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              s.status.has_legacy_manager ? (t(), P(gt, {
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
                    onClick: z[11] || (z[11] = (L) => J.$emit("view-nodes"))
                  }, {
                    default: l(() => [...z[27] || (z[27] = [
                      g(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : r("", !0)
            ], 64)) : q.value ? (t(), o("span", ja, "No issues")) : (t(), P(wt, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      w(Ba, {
        show: f.value,
        status: s.status,
        "is-repairing": k.value,
        onClose: z[12] || (z[12] = (L) => f.value = !1),
        onNavigateWorkflows: m,
        onNavigateNodes: d,
        onRepair: _
      }, null, 8, ["show", "status", "is-repairing"])
    ], 64));
  }
}), Ka = /* @__PURE__ */ ae(Ha, [["__scopeId", "data-v-55fcd77f"]]), qa = ["type", "value", "placeholder", "disabled"], Ya = /* @__PURE__ */ oe({
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
  setup(s, { expose: c, emit: n }) {
    const i = s, f = n, p = h(null);
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
    }), (m, d) => (t(), o("input", {
      ref_key: "inputRef",
      ref: p,
      type: s.type,
      value: s.modelValue,
      placeholder: s.placeholder,
      disabled: s.disabled,
      class: fe(["text-input", { error: s.hasError, monospace: s.monospace }]),
      onInput: u,
      onKeyup: [
        d[0] || (d[0] = $t((v) => m.$emit("enter"), ["enter"])),
        d[1] || (d[1] = $t((v) => m.$emit("escape"), ["escape"]))
      ],
      onFocus: d[2] || (d[2] = (v) => m.$emit("focus")),
      onBlur: d[3] || (d[3] = (v) => m.$emit("blur"))
    }, null, 42, qa));
  }
}), us = /* @__PURE__ */ ae(Ya, [["__scopeId", "data-v-0380d08f"]]), Ja = { class: "branch-create-form" }, Xa = { class: "form-actions" }, Qa = /* @__PURE__ */ oe({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(s, { emit: c }) {
    const n = c, i = h(""), f = A(() => {
      const m = i.value.trim();
      return m.length > 0 && !m.startsWith("-") && !m.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(m);
    });
    function p() {
      f.value && (n("create", i.value.trim()), i.value = "");
    }
    function u() {
      i.value = "", n("cancel");
    }
    return (m, d) => (t(), o("div", Ja, [
      w(us, {
        modelValue: i.value,
        "onUpdate:modelValue": d[0] || (d[0] = (v) => i.value = v),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: p,
        onEscape: u
      }, null, 8, ["modelValue"]),
      e("div", Xa, [
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
}), Za = /* @__PURE__ */ ae(Qa, [["__scopeId", "data-v-7c500394"]]), el = { class: "branch-list-item__indicator" }, tl = { class: "branch-list-item__name" }, sl = {
  key: 0,
  class: "branch-list-item__actions"
}, ol = {
  key: 0,
  class: "branch-list-item__current-label"
}, nl = /* @__PURE__ */ oe({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(s) {
    return (c, n) => (t(), o("div", {
      class: fe(["branch-list-item", { current: s.isCurrent, clickable: s.clickable }]),
      onClick: n[0] || (n[0] = (i) => s.clickable && c.$emit("click"))
    }, [
      e("span", el, a(s.isCurrent ? "●" : "○"), 1),
      e("span", tl, a(s.branchName), 1),
      c.$slots.actions || s.showCurrentLabel ? (t(), o("div", sl, [
        Te(c.$slots, "actions", {}, void 0, !0),
        s.isCurrent && s.showCurrentLabel ? (t(), o("span", ol, " current ")) : r("", !0)
      ])) : r("", !0)
    ], 2));
  }
}), al = /* @__PURE__ */ ae(nl, [["__scopeId", "data-v-c6581a24"]]), ll = {
  key: 2,
  class: "branch-list"
}, il = /* @__PURE__ */ oe({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create", "delete"],
  setup(s, { emit: c }) {
    const n = c, i = h(!1);
    function f(u) {
      n("create", u), p();
    }
    function p() {
      i.value = !1;
    }
    return (u, m) => (t(), P(ot, null, {
      header: l(() => [
        w(nt, { title: "BRANCHES" }, {
          actions: l(() => [
            i.value ? r("", !0) : (t(), P(te, {
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
        i.value ? (t(), P(Za, {
          key: 0,
          onCreate: f,
          onCancel: p
        })) : r("", !0),
        s.branches.length === 0 ? (t(), P(wt, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (t(), o("div", ll, [
          (t(!0), o(W, null, ne(s.branches, (d) => (t(), P(al, {
            key: d.name,
            "branch-name": d.name,
            "is-current": d.is_current
          }, {
            actions: l(() => [
              d.is_current ? r("", !0) : (t(), P(te, {
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
              d.is_current ? r("", !0) : (t(), P(te, {
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
}), rl = /* @__PURE__ */ ae(il, [["__scopeId", "data-v-86784ddd"]]), dl = { class: "commit-list" }, cl = /* @__PURE__ */ oe({
  __name: "CommitList",
  setup(s) {
    return (c, n) => (t(), o("div", dl, [
      Te(c.$slots, "default", {}, void 0, !0)
    ]));
  }
}), ul = /* @__PURE__ */ ae(cl, [["__scopeId", "data-v-8c5ee761"]]), ml = { class: "commit-hash" }, vl = /* @__PURE__ */ oe({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(s) {
    const c = s, n = A(() => c.hash.slice(0, c.length));
    return (i, f) => (t(), o("span", ml, a(n.value), 1));
  }
}), Ws = /* @__PURE__ */ ae(vl, [["__scopeId", "data-v-7c333cc6"]]), fl = { class: "commit-message" }, pl = { class: "commit-date" }, gl = /* @__PURE__ */ oe({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(s, { emit: c }) {
    const n = s, i = c;
    function f() {
      n.clickable && i("click");
    }
    return (p, u) => (t(), o("div", {
      class: fe(["commit-item", { clickable: s.clickable }]),
      onClick: f
    }, [
      w(Ws, { hash: s.hash }, null, 8, ["hash"]),
      e("span", fl, a(s.message), 1),
      e("span", pl, a(s.relativeDate), 1),
      p.$slots.actions ? (t(), o("div", {
        key: 0,
        class: "commit-actions",
        onClick: u[0] || (u[0] = Be(() => {
        }, ["stop"]))
      }, [
        Te(p.$slots, "actions", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), hl = /* @__PURE__ */ ae(gl, [["__scopeId", "data-v-dd7c621b"]]), yl = /* @__PURE__ */ oe({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(s) {
    return (c, n) => (t(), P(ot, null, {
      header: l(() => [
        w(nt, { title: "HISTORY" })
      ]),
      content: l(() => [
        s.commits.length === 0 ? (t(), P(wt, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (t(), P(ul, { key: 1 }, {
          default: l(() => [
            (t(!0), o(W, null, ne(s.commits, (i) => (t(), P(hl, {
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
}), wl = /* @__PURE__ */ ae(yl, [["__scopeId", "data-v-981c3c64"]]), H$ = fs({
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
  ...Array(12).fill(null).map((s, c) => ({
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
}, kl = [
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
  ...kl,
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
function Qt() {
  return !1;
}
function je() {
  const s = h(!1), c = h(null);
  async function n(H, ue) {
    var re;
    if (!((re = window.app) != null && re.api))
      throw new Error("ComfyUI API not available");
    const be = await window.app.api.fetchApi(H, ue);
    if (!be.ok) {
      const j = await be.json().catch(() => ({}));
      throw new Error(j.error || j.message || `Request failed: ${be.status}`);
    }
    return be.json();
  }
  async function i(H = !1) {
    return n(H ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function f(H, ue = !1) {
    return n("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: H, allow_issues: ue })
    });
  }
  async function p(H = 10, ue = 0) {
    return n(`/v2/comfygit/log?limit=${H}&offset=${ue}`);
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
  async function k(H, ue = !1) {
    return n("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: H, force: ue })
    });
  }
  async function _(H, ue = "HEAD") {
    return n("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: H, start_point: ue })
    });
  }
  async function b(H, ue = !1) {
    return n("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: H, force: ue })
    });
  }
  async function D(H, ue = !1) {
    return n(`/v2/comfygit/branch/${encodeURIComponent(H)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: ue })
    });
  }
  async function M() {
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
  async function $(H, ue) {
    const be = { target_env: H };
    return ue && (be.workspace_path = ue), n("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(be)
    });
  }
  async function C() {
    try {
      return n("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function B(H) {
    return n("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(H)
    });
  }
  async function x() {
    return n("/v2/workspace/environments/create_status");
  }
  async function R(H = 20) {
    return n(`/v2/workspace/comfyui_releases?limit=${H}`);
  }
  async function q(H) {
    return n(`/v2/workspace/environments/${H}`, {
      method: "DELETE"
    });
  }
  async function F(H = !1) {
    try {
      return n(H ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const ue = await i(H), be = [];
      return ue.workflows.new.forEach((re) => {
        be.push({ name: re, status: "new", missing_nodes: 0, missing_models: 0, path: re });
      }), ue.workflows.modified.forEach((re) => {
        be.push({ name: re, status: "modified", missing_nodes: 0, missing_models: 0, path: re });
      }), ue.workflows.synced.forEach((re) => {
        be.push({ name: re, status: "synced", missing_nodes: 0, missing_models: 0, path: re });
      }), be;
    }
  }
  async function G(H) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(H)}/details`);
  }
  async function S(H) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(H)}/resolve`, {
      method: "POST"
    });
  }
  async function T(H, ue, be) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(H)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: ue, install_models: be })
    });
  }
  async function N(H, ue, be) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(H)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: ue, importance: be })
    });
  }
  async function de() {
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
  async function ve(H) {
    return n("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: H })
    });
  }
  async function J(H, ue) {
    return n(`/v2/workspace/models/${H}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ue })
    });
  }
  async function z(H, ue) {
    return n(`/v2/workspace/models/${H}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ue })
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
  async function me() {
    return n("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function Q() {
    return n("/v2/workspace/models/directory");
  }
  async function _e(H) {
    return n("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: H })
    });
  }
  async function Ce(H) {
    try {
      const ue = H ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(H)}` : "/v2/comfygit/config";
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
  async function De(H, ue) {
    const be = ue ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(ue)}` : "/v2/comfygit/config";
    return n(be, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(H)
    });
  }
  async function Ne(H, ue) {
    try {
      const be = new URLSearchParams();
      return H && be.append("level", H), ue && be.append("lines", ue.toString()), n(`/v2/comfygit/debug/logs?${be}`);
    } catch {
      return [];
    }
  }
  async function ce(H, ue) {
    try {
      const be = new URLSearchParams();
      return H && be.append("level", H), ue && be.append("lines", ue.toString()), n(`/v2/workspace/debug/logs?${be}`);
    } catch {
      return [];
    }
  }
  async function ye() {
    return n("/v2/comfygit/debug/logs/path");
  }
  async function Re() {
    return n("/v2/workspace/debug/logs/path");
  }
  async function ee(H) {
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
  async function we(H) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(H)}/track-dev`, {
      method: "POST"
    });
  }
  async function xe(H) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(H)}/install`, {
      method: "POST"
    });
  }
  async function Xe(H) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(H)}/update`, {
      method: "POST"
    });
  }
  async function tt(H) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(H)}`, {
      method: "DELETE"
    });
  }
  async function Ee() {
    try {
      return n("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function Qe(H, ue) {
    return n("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: H, url: ue })
    });
  }
  async function qe(H) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}`, {
      method: "DELETE"
    });
  }
  async function He(H, ue, be) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: ue, push_url: be })
    });
  }
  async function dt(H) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}/fetch`, {
      method: "POST"
    });
  }
  async function $e(H) {
    try {
      return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}/status`);
    } catch {
      return null;
    }
  }
  async function Ge(H = "skip", ue = !0) {
    return n("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: H,
        remove_extra_nodes: ue
      })
    });
  }
  async function Ze(H, ue) {
    const be = ue ? `/v2/comfygit/remotes/${encodeURIComponent(H)}/pull-preview?branch=${encodeURIComponent(ue)}` : `/v2/comfygit/remotes/${encodeURIComponent(H)}/pull-preview`;
    return n(be);
  }
  async function Ye(H, ue = {}) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}/pull`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: ue.modelStrategy || "skip",
        force: ue.force || !1,
        resolutions: ue.resolutions
      })
    });
  }
  async function Ue(H, ue) {
    const be = ue ? `/v2/comfygit/remotes/${encodeURIComponent(H)}/push-preview?branch=${encodeURIComponent(ue)}` : `/v2/comfygit/remotes/${encodeURIComponent(H)}/push-preview`;
    return n(be);
  }
  async function pe(H, ue = {}) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}/push`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: ue.force || !1 })
    });
  }
  async function K(H, ue) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(H)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: ue })
    });
  }
  async function Y(H) {
    const ue = {
      success: 0,
      failed: []
    };
    for (const be of H)
      try {
        await S(be), ue.success++;
      } catch (re) {
        ue.failed.push({
          name: be,
          error: re instanceof Error ? re.message : "Unknown error"
        });
      }
    return ue;
  }
  async function E(H) {
    var re;
    const ue = new FormData();
    if (ue.append("file", H), !((re = window.app) != null && re.api))
      throw new Error("ComfyUI API not available");
    const be = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: ue
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!be.ok) {
      const j = await be.json().catch(() => ({}));
      throw new Error(j.error || `Preview failed: ${be.status}`);
    }
    return be.json();
  }
  async function V(H) {
    return n(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(H)}`
    );
  }
  async function Z(H, ue, be, re) {
    var ge;
    const j = new FormData();
    if (j.append("file", H), j.append("name", ue), j.append("model_strategy", be), j.append("torch_backend", re), !((ge = window.app) != null && ge.api))
      throw new Error("ComfyUI API not available");
    const U = await window.app.api.fetchApi("/v2/workspace/import", {
      method: "POST",
      body: j
    });
    if (!U.ok) {
      const Pe = await U.json().catch(() => ({}));
      throw new Error(Pe.message || Pe.error || `Import failed: ${U.status}`);
    }
    return U.json();
  }
  async function ke() {
    return n("/v2/workspace/import/status");
  }
  async function We(H) {
    return n("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: H })
    });
  }
  async function vt(H, ue, be, re) {
    return n("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: H,
        name: ue,
        model_strategy: be,
        torch_backend: re
      })
    });
  }
  async function lt() {
    return n("/v2/setup/status");
  }
  async function Mt(H) {
    return n("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(H)
    });
  }
  async function it() {
    return n("/v2/setup/initialize_status");
  }
  async function xt(H) {
    return n("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(H)
    });
  }
  async function Ot() {
    return n("/v2/comfygit/deploy/summary");
  }
  async function ft() {
    return n("/v2/comfygit/deploy/runpod/data-centers");
  }
  async function Gt(H, ue) {
    return n("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: H, save_key: ue })
    });
  }
  async function zt() {
    return n("/v2/comfygit/deploy/runpod/volumes");
  }
  async function jt(H) {
    const ue = H ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(H)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return n(ue);
  }
  async function Ht(H) {
    return n("/v2/comfygit/deploy/runpod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(H)
    });
  }
  async function Kt() {
    return n("/v2/comfygit/deploy/runpod/pods");
  }
  async function qt(H) {
    return n(`/v2/comfygit/deploy/runpod/${encodeURIComponent(H)}`, {
      method: "DELETE"
    });
  }
  async function At(H) {
    return n(`/v2/comfygit/deploy/runpod/${encodeURIComponent(H)}/stop`, {
      method: "POST"
    });
  }
  async function le(H) {
    return n(`/v2/comfygit/deploy/runpod/${encodeURIComponent(H)}/start`, {
      method: "POST"
    });
  }
  async function O(H) {
    return n(`/v2/comfygit/deploy/runpod/${encodeURIComponent(H)}/status`);
  }
  async function Ie(H) {
    return n("/v2/comfygit/deploy/package", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: H })
    });
  }
  async function et(H = !1) {
    return n(H ? "/v2/comfygit/deploy/runpod/key?verify=true" : "/v2/comfygit/deploy/runpod/key");
  }
  async function pt() {
    return n("/v2/comfygit/deploy/runpod/key", {
      method: "DELETE"
    });
  }
  return {
    isLoading: s,
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
    deleteBranch: D,
    // Environment Management
    getEnvironments: M,
    switchEnvironment: $,
    getSwitchProgress: C,
    createEnvironment: B,
    getCreateProgress: x,
    getComfyUIReleases: R,
    deleteEnvironment: q,
    // Workflow Management
    getWorkflows: F,
    getWorkflowDetails: G,
    resolveWorkflow: S,
    installWorkflowDeps: T,
    setModelImportance: N,
    // Model Management
    getEnvironmentModels: de,
    getWorkspaceModels: se,
    getModelDetails: X,
    openFileLocation: ve,
    addModelSource: J,
    removeModelSource: z,
    deleteModel: L,
    downloadModel: I,
    scanWorkspaceModels: me,
    getModelsDirectory: Q,
    setModelsDirectory: _e,
    // Settings
    getConfig: Ce,
    updateConfig: De,
    // Debug/Logs
    getEnvironmentLogs: Ne,
    getWorkspaceLogs: ce,
    getEnvironmentLogPath: ye,
    getWorkspaceLogPath: Re,
    openFile: ee,
    // Node Management
    getNodes: ie,
    trackNodeAsDev: we,
    installNode: xe,
    updateNode: Xe,
    uninstallNode: tt,
    // Git Remotes
    getRemotes: Ee,
    addRemote: Qe,
    removeRemote: qe,
    updateRemoteUrl: He,
    fetchRemote: dt,
    getRemoteSyncStatus: $e,
    // Push/Pull
    getPullPreview: Ze,
    pullFromRemote: Ye,
    getPushPreview: Ue,
    pushToRemote: pe,
    validateMerge: K,
    // Environment Sync
    syncEnvironmentManually: Ge,
    // Workflow Repair
    repairWorkflowModels: Y,
    // Import Operations
    previewTarballImport: E,
    previewGitImport: We,
    validateEnvironmentName: V,
    executeImport: Z,
    executeGitImport: vt,
    getImportProgress: ke,
    // First-Time Setup
    getSetupStatus: lt,
    initializeWorkspace: Mt,
    getInitializeProgress: it,
    validatePath: xt,
    // Deploy Operations
    getDeploySummary: Ot,
    getDataCenters: ft,
    testRunPodConnection: Gt,
    getNetworkVolumes: zt,
    getRunPodGpuTypes: jt,
    deployToRunPod: Ht,
    getRunPodPods: Kt,
    terminateRunPodPod: qt,
    stopRunPodPod: At,
    startRunPodPod: le,
    getDeploymentStatus: O,
    exportDeployPackage: Ie,
    getStoredRunPodKey: et,
    clearRunPodKey: pt
  };
}
async function Zt(s, c = {}, n = 5e3) {
  const i = new AbortController(), f = setTimeout(() => i.abort(), n);
  try {
    const p = await fetch(s, {
      ...c,
      signal: i.signal
    });
    return clearTimeout(f), p;
  } catch (p) {
    throw clearTimeout(f), p.name === "AbortError" ? new Error(`Request timeout after ${n}ms`) : p;
  }
}
function Gs() {
  const s = h(null);
  async function c() {
    try {
      const u = await Zt(
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
    if (s.value || (s.value = await c()), !s.value)
      return null;
    try {
      const u = await Zt(
        `http://127.0.0.1:${s.value}/health`,
        {},
        5e3
      );
      if (!u.ok) throw new Error("Health check failed");
      return await u.json();
    } catch {
      return s.value = await c(), null;
    }
  }
  async function i() {
    if (s.value || (s.value = await c()), !s.value)
      return null;
    try {
      const u = await Zt(
        `http://127.0.0.1:${s.value}/status`,
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
    if (s.value || (s.value = await c()), !s.value)
      throw new Error("Control port not available");
    if (!(await Zt(
      `http://127.0.0.1:${s.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function p() {
    if (s.value || (s.value = await c()), !s.value)
      throw new Error("Control port not available");
    if (!(await Zt(
      `http://127.0.0.1:${s.value}/kill`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to kill orchestrator");
  }
  return {
    controlPort: s,
    discoverControlPort: c,
    checkHealth: n,
    getStatus: i,
    restart: f,
    kill: p
  };
}
const bl = { class: "base-modal-header" }, _l = {
  key: 0,
  class: "base-modal-title"
}, $l = { class: "base-modal-body" }, Cl = {
  key: 0,
  class: "base-modal-loading"
}, xl = {
  key: 1,
  class: "base-modal-error"
}, Sl = {
  key: 0,
  class: "base-modal-footer"
}, Il = /* @__PURE__ */ oe({
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
  setup(s, { emit: c }) {
    const n = s, i = c;
    function f() {
      n.closeOnOverlayClick && i("close");
    }
    function p(u) {
      u.key === "Escape" && n.showCloseButton && i("close");
    }
    return Ve(() => {
      document.addEventListener("keydown", p), document.body.style.overflow = "hidden";
    }), Cs(() => {
      document.removeEventListener("keydown", p), document.body.style.overflow = "";
    }), (u, m) => (t(), P(Je, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: f
      }, [
        e("div", {
          class: fe(["base-modal-content", s.size, { "fixed-height": s.fixedHeight }]),
          onClick: m[1] || (m[1] = Be(() => {
          }, ["stop"]))
        }, [
          e("div", bl, [
            Te(u.$slots, "header", {}, () => [
              s.title ? (t(), o("h3", _l, a(s.title), 1)) : r("", !0)
            ], !0),
            s.showCloseButton ? (t(), o("button", {
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
          e("div", $l, [
            s.loading ? (t(), o("div", Cl, "Loading...")) : s.error ? (t(), o("div", xl, a(s.error), 1)) : Te(u.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          u.$slots.footer ? (t(), o("div", Sl, [
            Te(u.$slots, "footer", {}, void 0, !0)
          ])) : r("", !0)
        ], 2)
      ])
    ]));
  }
}), at = /* @__PURE__ */ ae(Il, [["__scopeId", "data-v-8dab1081"]]), El = ["type", "disabled"], Pl = {
  key: 0,
  class: "spinner"
}, Ml = /* @__PURE__ */ oe({
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
  setup(s) {
    return (c, n) => (t(), o("button", {
      type: s.type,
      disabled: s.disabled || s.loading,
      class: fe(["base-btn", s.variant, s.size, { "full-width": s.fullWidth, loading: s.loading }]),
      onClick: n[0] || (n[0] = (i) => c.$emit("click", i))
    }, [
      s.loading ? (t(), o("span", Pl)) : r("", !0),
      Te(c.$slots, "default", {}, void 0, !0)
    ], 10, El));
  }
}), he = /* @__PURE__ */ ae(Ml, [["__scopeId", "data-v-f3452606"]]), Rl = {
  key: 0,
  class: "base-title-count"
}, Tl = /* @__PURE__ */ oe({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(s) {
    return (c, n) => (t(), P($s(`h${s.level}`), {
      class: fe(["base-title", s.variant])
    }, {
      default: l(() => [
        Te(c.$slots, "default", {}, void 0, !0),
        s.count !== void 0 ? (t(), o("span", Rl, "(" + a(s.count) + ")", 1)) : r("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), os = /* @__PURE__ */ ae(Tl, [["__scopeId", "data-v-5a01561d"]]), Dl = ["value", "disabled"], Ll = {
  key: 0,
  value: "",
  disabled: ""
}, zl = ["value"], Ul = {
  key: 0,
  class: "base-select-error"
}, Nl = /* @__PURE__ */ oe({
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
  setup(s) {
    function c(i) {
      return typeof i == "string" ? i : i.value;
    }
    function n(i) {
      return typeof i == "string" ? i : i.label;
    }
    return (i, f) => (t(), o("div", {
      class: fe(["base-select-wrapper", { "full-width": s.fullWidth, error: !!s.error }])
    }, [
      e("select", {
        value: s.modelValue,
        disabled: s.disabled,
        class: fe(["base-select", { error: !!s.error }]),
        onChange: f[0] || (f[0] = (p) => i.$emit("update:modelValue", p.target.value))
      }, [
        s.placeholder ? (t(), o("option", Ll, a(s.placeholder), 1)) : r("", !0),
        (t(!0), o(W, null, ne(s.options, (p) => (t(), o("option", {
          key: c(p),
          value: c(p)
        }, a(n(p)), 9, zl))), 128))
      ], 42, Dl),
      s.error ? (t(), o("span", Ul, a(s.error), 1)) : r("", !0)
    ], 2));
  }
}), Ol = /* @__PURE__ */ ae(Nl, [["__scopeId", "data-v-7436d745"]]), Al = { class: "popover-header" }, Bl = { class: "popover-title" }, Fl = { class: "popover-content" }, Vl = {
  key: 0,
  class: "popover-actions"
}, Wl = /* @__PURE__ */ oe({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(s) {
    return (c, n) => (t(), P(Je, { to: "body" }, [
      s.show ? (t(), o("div", {
        key: 0,
        class: "popover-overlay",
        onClick: n[2] || (n[2] = (i) => c.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: It({ maxWidth: s.maxWidth }),
          onClick: n[1] || (n[1] = Be(() => {
          }, ["stop"]))
        }, [
          e("div", Al, [
            e("h4", Bl, a(s.title), 1),
            e("button", {
              class: "popover-close",
              onClick: n[0] || (n[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", Fl, [
            Te(c.$slots, "content", {}, void 0, !0)
          ]),
          c.$slots.actions ? (t(), o("div", Vl, [
            Te(c.$slots, "actions", {}, void 0, !0)
          ])) : r("", !0)
        ], 4)
      ])) : r("", !0)
    ]));
  }
}), kt = /* @__PURE__ */ ae(Wl, [["__scopeId", "data-v-42815ace"]]), Gl = { class: "detail-section" }, jl = {
  key: 0,
  class: "empty-message"
}, Hl = { class: "model-header" }, Kl = { class: "model-name" }, ql = { class: "model-details" }, Yl = { class: "model-row" }, Jl = { class: "model-row" }, Xl = { class: "label" }, Ql = {
  key: 0,
  class: "model-row model-row-nodes"
}, Zl = { class: "node-list" }, ei = ["onClick"], ti = {
  key: 1,
  class: "model-row"
}, si = { class: "value" }, oi = {
  key: 2,
  class: "model-row"
}, ni = { class: "value error" }, ai = {
  key: 0,
  class: "model-actions"
}, li = { class: "detail-section" }, ii = {
  key: 0,
  class: "empty-message"
}, ri = { class: "node-name" }, di = {
  key: 0,
  class: "node-version"
}, ci = /* @__PURE__ */ oe({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(s, { emit: c }) {
    const n = s, i = c, { getWorkflowDetails: f, setModelImportance: p, openFileLocation: u } = je(), m = h(null), d = h(!1), v = h(null), y = h(!1), k = h({}), _ = h(!1), b = h(/* @__PURE__ */ new Set()), D = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function M(S) {
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
      const T = S.hash || S.filename;
      return b.value.has(T) ? S.loaded_by : S.loaded_by.slice(0, 3);
    }
    function B(S) {
      return b.value.has(S);
    }
    function x(S) {
      b.value.has(S) ? b.value.delete(S) : b.value.add(S), b.value = new Set(b.value);
    }
    async function R() {
      d.value = !0, v.value = null;
      try {
        m.value = await f(n.workflowName);
      } catch (S) {
        v.value = S instanceof Error ? S.message : "Failed to load workflow details";
      } finally {
        d.value = !1;
      }
    }
    function q(S, T) {
      k.value[S] = T, y.value = !0;
    }
    async function F(S) {
      try {
        await u(S);
      } catch (T) {
        v.value = T instanceof Error ? T.message : "Failed to open file location";
      }
    }
    async function G() {
      if (!y.value) {
        i("close");
        return;
      }
      d.value = !0, v.value = null;
      try {
        for (const [S, T] of Object.entries(k.value))
          await p(n.workflowName, S, T);
        i("refresh"), i("close");
      } catch (S) {
        v.value = S instanceof Error ? S.message : "Failed to save changes";
      } finally {
        d.value = !1;
      }
    }
    return Ve(R), (S, T) => (t(), o(W, null, [
      w(at, {
        title: `WORKFLOW DETAILS: ${s.workflowName}`,
        size: "lg",
        loading: d.value,
        error: v.value || void 0,
        onClose: T[4] || (T[4] = (N) => i("close"))
      }, {
        body: l(() => [
          m.value ? (t(), o(W, { key: 0 }, [
            e("section", Gl, [
              w(os, { variant: "section" }, {
                default: l(() => [
                  g("MODELS USED (" + a(m.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.models.length === 0 ? (t(), o("div", jl, " No models used in this workflow ")) : r("", !0),
              (t(!0), o(W, null, ne(m.value.models, (N) => {
                var de;
                return t(), o("div", {
                  key: N.hash || N.filename,
                  class: "model-card"
                }, [
                  e("div", Hl, [
                    T[6] || (T[6] = e("span", { class: "model-icon" }, "📦", -1)),
                    e("span", Kl, a(N.filename), 1)
                  ]),
                  e("div", ql, [
                    e("div", Yl, [
                      T[7] || (T[7] = e("span", { class: "label" }, "Status:", -1)),
                      e("span", {
                        class: fe(["value", M(N.status)])
                      }, a($(N.status)), 3)
                    ]),
                    e("div", Jl, [
                      e("span", Xl, [
                        T[8] || (T[8] = g(" Importance: ", -1)),
                        w(Vs, {
                          size: 14,
                          title: "About importance levels",
                          onClick: T[0] || (T[0] = (se) => _.value = !0)
                        })
                      ]),
                      w(Ol, {
                        "model-value": k.value[N.filename] || N.importance,
                        options: D,
                        "onUpdate:modelValue": (se) => q(N.filename, se)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    N.loaded_by && N.loaded_by.length > 0 ? (t(), o("div", Ql, [
                      T[9] || (T[9] = e("span", { class: "label" }, "Loaded by:", -1)),
                      e("div", Zl, [
                        (t(!0), o(W, null, ne(C(N), (se, X) => (t(), o("div", {
                          key: `${se.node_id}-${X}`,
                          class: "node-reference"
                        }, a(se.node_type) + " (Node #" + a(se.node_id) + ") ", 1))), 128)),
                        N.loaded_by.length > 3 ? (t(), o("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (se) => x(N.hash || N.filename)
                        }, a(B(N.hash || N.filename) ? "▼ Show less" : `▶ View all (${N.loaded_by.length})`), 9, ei)) : r("", !0)
                      ])
                    ])) : r("", !0),
                    N.size_mb ? (t(), o("div", ti, [
                      T[10] || (T[10] = e("span", { class: "label" }, "Size:", -1)),
                      e("span", si, a(N.size_mb) + " MB", 1)
                    ])) : r("", !0),
                    N.has_category_mismatch ? (t(), o("div", oi, [
                      T[13] || (T[13] = e("span", { class: "label" }, "Location issue:", -1)),
                      e("span", ni, [
                        T[11] || (T[11] = g(" In ", -1)),
                        e("code", null, a(N.actual_category) + "/", 1),
                        T[12] || (T[12] = g(" but loader needs ", -1)),
                        e("code", null, a((de = N.expected_categories) == null ? void 0 : de[0]) + "/", 1)
                      ])
                    ])) : r("", !0)
                  ]),
                  N.status !== "available" ? (t(), o("div", ai, [
                    N.status === "downloadable" ? (t(), P(he, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: T[1] || (T[1] = (se) => i("resolve"))
                    }, {
                      default: l(() => [...T[14] || (T[14] = [
                        g(" Download ", -1)
                      ])]),
                      _: 1
                    })) : N.status === "category_mismatch" && N.file_path ? (t(), P(he, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => F(N.file_path)
                    }, {
                      default: l(() => [...T[15] || (T[15] = [
                        g(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : N.status !== "path_mismatch" ? (t(), P(he, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: T[2] || (T[2] = (se) => i("resolve"))
                    }, {
                      default: l(() => [...T[16] || (T[16] = [
                        g(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : r("", !0)
                  ])) : r("", !0)
                ]);
              }), 128))
            ]),
            e("section", li, [
              w(os, { variant: "section" }, {
                default: l(() => [
                  g("NODES USED (" + a(m.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.nodes.length === 0 ? (t(), o("div", ii, " No custom nodes used in this workflow ")) : r("", !0),
              (t(!0), o(W, null, ne(m.value.nodes, (N) => (t(), o("div", {
                key: N.name,
                class: "node-item"
              }, [
                e("span", {
                  class: fe(["node-status", N.status === "installed" ? "installed" : "missing"])
                }, a(N.status === "installed" ? "✓" : "✕"), 3),
                e("span", ri, a(N.name), 1),
                N.version ? (t(), o("span", di, "v" + a(N.version), 1)) : r("", !0)
              ]))), 128))
            ])
          ], 64)) : r("", !0)
        ]),
        footer: l(() => [
          w(he, {
            variant: "secondary",
            onClick: T[3] || (T[3] = (N) => i("close"))
          }, {
            default: l(() => [...T[17] || (T[17] = [
              g(" Close ", -1)
            ])]),
            _: 1
          }),
          y.value ? (t(), P(he, {
            key: 0,
            variant: "primary",
            onClick: G
          }, {
            default: l(() => [...T[18] || (T[18] = [
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
        onClose: T[5] || (T[5] = (N) => _.value = !1)
      }, {
        content: l(() => [...T[19] || (T[19] = [
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
}), ui = /* @__PURE__ */ ae(ci, [["__scopeId", "data-v-668728e6"]]), Le = fs({
  items: [],
  status: "idle"
});
let _t = null;
function js() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function ps(s) {
  return Le.items.find((c) => c.id === s);
}
async function Ft() {
  if (Le.status === "downloading") return;
  const s = Le.items.find((c) => c.status === "queued");
  if (!s) {
    Le.status = "idle";
    return;
  }
  Le.status = "downloading", s.status = "downloading", s.progress = 0, s.downloaded = 0;
  try {
    await mi(s), s.status = "completed", s.progress = 100;
  } catch (c) {
    s.status = "failed", s.error = c instanceof Error ? c.message : "Download failed", s.retries++;
  } finally {
    Le.status = "idle", Ft();
  }
}
async function mi(s) {
  return new Promise((c, n) => {
    _t && (_t.close(), _t = null);
    const i = new URLSearchParams({
      url: s.url,
      target_path: s.targetPath,
      filename: s.filename,
      workflow: s.workflow
    }), f = new EventSource(`/v2/comfygit/models/download-stream?${i}`);
    _t = f;
    let p = Date.now(), u = 0, m = !1;
    f.onmessage = (d) => {
      try {
        const v = JSON.parse(d.data);
        switch (v.type) {
          case "progress":
            s.downloaded = v.downloaded || 0, s.size = v.total || s.size;
            const y = Date.now(), k = (y - p) / 1e3;
            if (k > 0.5) {
              const _ = s.downloaded - u;
              if (s.speed = _ / k, p = y, u = s.downloaded, s.speed > 0 && s.size > 0) {
                const b = s.size - s.downloaded;
                s.eta = b / s.speed;
              }
            }
            s.size > 0 && (s.progress = Math.round(s.downloaded / s.size * 100));
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
async function vi() {
  try {
    const s = await fetch("/v2/comfygit/models/pending-downloads");
    if (!s.ok) return;
    const c = await s.json();
    if (!c.pending_downloads || c.pending_downloads.length === 0) return;
    for (const n of c.pending_downloads) {
      if (Le.items.some((f) => f.url === n.url && f.filename === n.filename))
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
      Le.items.push(i);
    }
    console.log(`[ComfyGit] Loaded ${c.pending_downloads.length} pending download(s)`);
  } catch (s) {
    console.warn("[ComfyGit] Failed to load pending downloads:", s);
  }
}
function ls() {
  function s($) {
    for (const C of $) {
      if (Le.items.some(
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
      Le.items.push(x);
    }
    Le.status === "idle" && Ft();
  }
  async function c($) {
    const C = ps($);
    if (C) {
      if (C.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(C.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        _t && (_t.close(), _t = null), C.status = "failed", C.error = "Cancelled by user", Le.status = "idle", Ft();
      } else if (C.status === "queued") {
        const B = Le.items.findIndex((x) => x.id === $);
        B >= 0 && Le.items.splice(B, 1);
      }
    }
  }
  function n($) {
    const C = ps($);
    !C || C.status !== "failed" || (C.status = "queued", C.error = void 0, C.progress = 0, C.downloaded = 0, Le.status === "idle" && Ft());
  }
  function i($) {
    const C = ps($);
    !C || C.status !== "paused" || (C.status = "queued", Le.status === "idle" && Ft());
  }
  function f() {
    const $ = Le.items.filter((C) => C.status === "paused");
    for (const C of $)
      C.status = "queued";
    Le.status === "idle" && Ft();
  }
  function p($) {
    const C = Le.items.findIndex((B) => B.id === $);
    C >= 0 && ["completed", "failed", "paused"].includes(Le.items[C].status) && Le.items.splice(C, 1);
  }
  function u() {
    Le.items = Le.items.filter(($) => $.status !== "completed");
  }
  function m() {
    Le.items = Le.items.filter(($) => $.status !== "failed");
  }
  const d = A(
    () => Le.items.find(($) => $.status === "downloading")
  ), v = A(
    () => Le.items.filter(($) => $.status === "queued")
  ), y = A(
    () => Le.items.filter(($) => $.status === "completed")
  ), k = A(
    () => Le.items.filter(($) => $.status === "failed")
  ), _ = A(
    () => Le.items.filter(($) => $.status === "paused")
  ), b = A(() => Le.items.length > 0), D = A(
    () => Le.items.filter(($) => $.status === "queued" || $.status === "downloading").length
  ), M = A(
    () => Le.items.some(($) => $.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: vo(Le),
    // Computed
    currentDownload: d,
    queuedItems: v,
    completedItems: y,
    failedItems: k,
    pausedItems: _,
    hasItems: b,
    activeCount: D,
    hasPaused: M,
    // Actions
    addToQueue: s,
    cancelDownload: c,
    retryDownload: n,
    resumeDownload: i,
    resumeAllPaused: f,
    removeItem: p,
    clearCompleted: u,
    clearFailed: m,
    loadPendingDownloads: vi
  };
}
function Hs() {
  const s = h(null), c = h(null), n = h([]), i = h([]), f = h(!1), p = h(null);
  async function u(B, x) {
    var q;
    if (!((q = window.app) != null && q.api))
      throw new Error("ComfyUI API not available");
    const R = await window.app.api.fetchApi(B, x);
    if (!R.ok) {
      const F = await R.json().catch(() => ({})), G = F.error || F.message || `Request failed: ${R.status}`;
      throw new Error(G);
    }
    return R.json();
  }
  async function m(B) {
    f.value = !0, p.value = null;
    try {
      let x;
      return Qt() || (x = await u(
        `/v2/comfygit/workflow/${B}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), s.value = x, x;
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
      let F;
      if (!Qt()) {
        const G = Object.fromEntries(x), S = Object.fromEntries(R), T = q ? Array.from(q) : [];
        F = await u(
          `/v2/comfygit/workflow/${B}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: G,
              model_choices: S,
              skipped_packages: T
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
  async function v(B, x = 10) {
    f.value = !0, p.value = null;
    try {
      let R;
      return Qt() || (R = await u(
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
      return Qt() || (R = await u(
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
  const k = fs({
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
      return Qt(), await D(B);
    } catch (x) {
      const R = x instanceof Error ? x.message : "Failed to install nodes";
      throw k.installError = R, x;
    }
  }
  async function D(B) {
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
      const q = new Map(((R = x.failed) == null ? void 0 : R.map((F) => [F.node_id, F.error])) || []);
      for (let F = 0; F < k.nodesToInstall.length; F++) {
        const G = k.nodesToInstall[F], S = q.get(G);
        k.nodeInstallProgress.completedNodes.push({
          node_id: G,
          success: !S,
          error: S
        });
      }
    }
    return k.nodesInstalled = x.nodes_installed, k.needsRestart = x.nodes_installed.length > 0, x.failed && x.failed.length > 0 && (k.installError = `${x.failed.length} package(s) failed to install`), x;
  }
  async function M(B, x, R) {
    _(), k.phase = "resolving", p.value = null;
    const q = Object.fromEntries(x), F = Object.fromEntries(R);
    try {
      const G = await fetch(`/v2/comfygit/workflow/${B}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: q,
          model_choices: F
        })
      });
      if (!G.ok)
        throw new Error(`Request failed: ${G.status}`);
      if (!G.body)
        throw new Error("No response body");
      const S = G.body.getReader(), T = new TextDecoder();
      let N = "";
      for (; ; ) {
        const { done: de, value: se } = await S.read();
        if (de) break;
        N += T.decode(se, { stream: !0 });
        const X = N.split(`

`);
        N = X.pop() || "";
        for (const ve of X) {
          if (!ve.trim()) continue;
          const J = ve.split(`
`);
          let z = "", L = "";
          for (const I of J)
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
      const S = G instanceof Error ? G.message : "Unknown error occurred";
      throw p.value = S, k.error = S, k.phase = "error", G;
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
    const { addToQueue: R } = ls(), q = x.filter((F) => F.url && F.target_path).map((F) => ({
      workflow: B,
      filename: F.filename,
      url: F.url,
      targetPath: F.target_path,
      size: F.size || 0,
      type: "model"
    }));
    return q.length > 0 && R(q), q.length;
  }
  return {
    // State
    result: s,
    appliedResult: c,
    searchResults: n,
    modelSearchResults: i,
    isLoading: f,
    error: p,
    progress: k,
    // Methods
    analyzeWorkflow: m,
    applyResolution: d,
    applyResolutionWithProgress: M,
    installNodes: b,
    searchNodes: v,
    searchModels: y,
    resetProgress: _,
    queueModelDownloads: C
  };
}
const fi = { class: "resolution-stepper" }, pi = { class: "stepper-header" }, gi = ["onClick"], hi = {
  key: 0,
  class: "step-icon"
}, yi = {
  key: 1,
  class: "step-number"
}, wi = { class: "step-label" }, ki = {
  key: 0,
  class: "step-connector"
}, bi = { class: "stepper-content" }, _i = /* @__PURE__ */ oe({
  __name: "ResolutionStepper",
  props: {
    steps: {},
    currentStep: {},
    completedSteps: {},
    stepStats: {}
  },
  emits: ["step-change"],
  setup(s, { emit: c }) {
    const n = s, i = c;
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
    return (v, y) => (t(), o("div", fi, [
      e("div", pi, [
        (t(!0), o(W, null, ne(s.steps, (k, _) => (t(), o("div", {
          key: k.id,
          class: fe(["step", {
            active: s.currentStep === k.id,
            completed: f(k.id),
            "in-progress": p(k.id),
            disabled: m(k.id)
          }]),
          onClick: (b) => d(k.id)
        }, [
          e("div", {
            class: fe(["step-indicator", u(k.id)])
          }, [
            f(k.id) ? (t(), o("span", hi, "✓")) : (t(), o("span", yi, a(_ + 1), 1))
          ], 2),
          e("div", wi, a(k.label), 1),
          _ < s.steps.length - 1 ? (t(), o("div", ki)) : r("", !0)
        ], 10, gi))), 128))
      ]),
      e("div", bi, [
        Te(v.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), $i = /* @__PURE__ */ ae(_i, [["__scopeId", "data-v-2a7b3af8"]]), Ci = /* @__PURE__ */ oe({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(s) {
    const c = s, n = A(() => c.confidence >= 0.9 ? "high" : c.confidence >= 0.7 ? "medium" : "low"), i = A(() => `confidence-${n.value}`), f = A(() => c.showPercentage ? `${Math.round(c.confidence * 100)}%` : n.value.charAt(0).toUpperCase() + n.value.slice(1));
    return (p, u) => (t(), o("span", {
      class: fe(["confidence-badge", i.value, s.size])
    }, a(f.value), 3));
  }
}), ms = /* @__PURE__ */ ae(Ci, [["__scopeId", "data-v-17ec4b80"]]), xi = { class: "node-info" }, Si = { class: "node-info-text" }, Ii = { class: "item-body" }, Ei = {
  key: 0,
  class: "resolved-state"
}, Pi = {
  key: 1,
  class: "multiple-options"
}, Mi = { class: "options-list" }, Ri = ["onClick"], Ti = ["name", "value", "checked", "onChange"], Di = { class: "option-content" }, Li = { class: "option-header" }, zi = { class: "option-package-id" }, Ui = {
  key: 0,
  class: "option-title"
}, Ni = { class: "option-meta" }, Oi = {
  key: 0,
  class: "installed-badge"
}, Ai = { class: "action-buttons" }, Bi = {
  key: 2,
  class: "unresolved"
}, Fi = {
  key: 0,
  class: "searching-state"
}, Vi = { class: "options-list" }, Wi = ["onClick"], Gi = ["name", "value"], ji = { class: "option-content" }, Hi = { class: "option-header" }, Ki = { class: "option-package-id" }, qi = {
  key: 0,
  class: "option-description"
}, Yi = { class: "option-meta" }, Ji = {
  key: 0,
  class: "installed-badge"
}, Xi = {
  key: 2,
  class: "unresolved-message"
}, Qi = { class: "action-buttons" }, Zi = /* @__PURE__ */ oe({
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
  setup(s, { emit: c }) {
    const n = s, i = c;
    function f(d, v = 80) {
      return d.length <= v ? d : d.slice(0, v - 3) + "...";
    }
    const p = A(() => !!n.choice);
    A(() => {
      var d;
      return (d = n.choice) == null ? void 0 : d.action;
    }), A(() => {
      var d;
      return (d = n.choice) == null ? void 0 : d.package_id;
    });
    const u = A(() => {
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
    return (d, v) => (t(), o("div", {
      class: fe(["node-resolution-item", { selected: s.isSelected, ambiguous: s.hasMultipleOptions, resolved: p.value }])
    }, [
      e("div", xi, [
        e("span", Si, [
          v[7] || (v[7] = g("Node type: ", -1)),
          e("code", null, a(s.nodeType), 1)
        ]),
        s.statusLabel ? (t(), o("span", {
          key: 0,
          class: fe(["status-badge", u.value])
        }, a(s.statusLabel), 3)) : r("", !0)
      ]),
      e("div", Ii, [
        p.value ? (t(), o("div", Ei, [
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
        ])) : s.hasMultipleOptions && s.options ? (t(), o("div", Pi, [
          v[12] || (v[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", Mi, [
            (t(!0), o(W, null, ne(s.options, (y, k) => (t(), o("label", {
              key: y.package_id,
              class: fe(["option-card", { selected: s.selectedOptionIndex === k }]),
              onClick: (_) => m(k)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${s.nodeType}`,
                value: k,
                checked: s.selectedOptionIndex === k,
                onChange: (_) => m(k)
              }, null, 40, Ti),
              e("div", Di, [
                e("div", Li, [
                  e("span", zi, a(y.package_id), 1),
                  w(ms, {
                    confidence: y.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                y.title && y.title !== y.package_id ? (t(), o("div", Ui, a(y.title), 1)) : r("", !0),
                e("div", Ni, [
                  y.is_installed ? (t(), o("span", Oi, "Already Installed")) : r("", !0)
                ])
              ])
            ], 10, Ri))), 128))
          ]),
          e("div", Ai, [
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
        ])) : (t(), o("div", Bi, [
          s.isSearching ? (t(), o("div", Fi, [...v[13] || (v[13] = [
            e("span", { class: "searching-spinner" }, null, -1),
            e("span", null, "Searching registry...", -1)
          ])])) : s.searchResults && s.searchResults.length > 0 ? (t(), o(W, { key: 1 }, [
            v[14] || (v[14] = e("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            e("div", Vi, [
              (t(!0), o(W, null, ne(s.searchResults.slice(0, 5), (y, k) => (t(), o("label", {
                key: y.package_id,
                class: "option-card",
                onClick: (_) => i("search-result-selected", y)
              }, [
                e("input", {
                  type: "radio",
                  name: `search-result-${s.nodeType}`,
                  value: k
                }, null, 8, Gi),
                e("div", ji, [
                  e("div", Hi, [
                    e("span", Ki, a(y.package_id), 1),
                    w(ms, {
                      confidence: y.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  y.description ? (t(), o("div", qi, a(f(y.description)), 1)) : r("", !0),
                  e("div", Yi, [
                    y.is_installed ? (t(), o("span", Ji, "Already Installed")) : r("", !0)
                  ])
                ])
              ], 8, Wi))), 128))
            ])
          ], 64)) : (t(), o("div", Xi, [...v[15] || (v[15] = [
            e("span", { class: "warning-icon" }, "⚠", -1),
            e("span", null, "No matching package found in registry", -1)
          ])])),
          e("div", Qi, [
            w(he, {
              variant: "secondary",
              size: "sm",
              onClick: v[4] || (v[4] = (y) => i("search"))
            }, {
              default: l(() => {
                var y;
                return [
                  g(a((y = s.searchResults) != null && y.length ? "Refine Search" : "Search Registry"), 1)
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
}), er = /* @__PURE__ */ ae(Zi, [["__scopeId", "data-v-c2997d1d"]]), tr = { class: "item-navigator" }, sr = { class: "nav-item-info" }, or = ["title"], nr = { class: "nav-controls" }, ar = { class: "nav-arrows" }, lr = ["disabled"], ir = ["disabled"], rr = { class: "nav-position" }, dr = /* @__PURE__ */ oe({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(s, { emit: c }) {
    const n = c;
    return (i, f) => (t(), o("div", tr, [
      e("div", sr, [
        e("code", {
          class: "item-name",
          title: s.itemName
        }, a(s.itemName), 9, or)
      ]),
      e("div", nr, [
        e("div", ar, [
          e("button", {
            class: "nav-arrow",
            disabled: s.currentIndex === 0,
            onClick: f[0] || (f[0] = (p) => n("prev")),
            title: "Previous item"
          }, " ← ", 8, lr),
          e("button", {
            class: "nav-arrow",
            disabled: s.currentIndex === s.totalItems - 1,
            onClick: f[1] || (f[1] = (p) => n("next")),
            title: "Next item"
          }, " → ", 8, ir)
        ]),
        e("span", rr, a(s.currentIndex + 1) + "/" + a(s.totalItems), 1)
      ])
    ]));
  }
}), Ks = /* @__PURE__ */ ae(dr, [["__scopeId", "data-v-74af7920"]]), cr = ["type", "value", "placeholder", "disabled"], ur = {
  key: 0,
  class: "base-input-error"
}, mr = /* @__PURE__ */ oe({
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
  setup(s) {
    return (c, n) => (t(), o("div", {
      class: fe(["base-input-wrapper", { "full-width": s.fullWidth, error: !!s.error }])
    }, [
      e("input", {
        type: s.type,
        value: s.modelValue,
        placeholder: s.placeholder,
        disabled: s.disabled,
        class: fe(["base-input", { error: !!s.error }]),
        onInput: n[0] || (n[0] = (i) => c.$emit("update:modelValue", i.target.value)),
        onKeyup: [
          n[1] || (n[1] = $t((i) => c.$emit("enter"), ["enter"])),
          n[2] || (n[2] = $t((i) => c.$emit("escape"), ["escape"]))
        ]
      }, null, 42, cr),
      s.error ? (t(), o("span", ur, a(s.error), 1)) : r("", !0)
    ], 2));
  }
}), yt = /* @__PURE__ */ ae(mr, [["__scopeId", "data-v-9ba02cdc"]]), vr = { class: "node-resolution-step" }, fr = {
  key: 0,
  class: "auto-resolved-section"
}, pr = { class: "section-header" }, gr = { class: "stat-badge" }, hr = { class: "resolved-packages-list" }, yr = { class: "package-info" }, wr = { class: "package-id" }, kr = { class: "node-count" }, br = { class: "package-actions" }, _r = {
  key: 0,
  class: "status-badge install"
}, $r = {
  key: 1,
  class: "status-badge skip"
}, Cr = ["onClick"], xr = {
  key: 1,
  class: "section-divider"
}, Sr = { class: "step-header" }, Ir = { class: "stat-badge" }, Er = {
  key: 1,
  class: "step-body"
}, Pr = {
  key: 3,
  class: "empty-state"
}, Mr = { class: "node-modal-body" }, Rr = { class: "node-search-results-container" }, Tr = {
  key: 0,
  class: "node-search-results"
}, Dr = ["onClick"], Lr = { class: "node-result-header" }, zr = { class: "node-result-package-id" }, Ur = {
  key: 0,
  class: "node-result-description"
}, Nr = {
  key: 1,
  class: "node-empty-state"
}, Or = {
  key: 2,
  class: "node-empty-state"
}, Ar = {
  key: 3,
  class: "node-empty-state"
}, Br = { class: "node-manual-entry-modal" }, Fr = { class: "node-modal-body" }, Vr = { class: "node-modal-actions" }, Wr = /* @__PURE__ */ oe({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(s, { emit: c }) {
    const n = s, i = c, { searchNodes: f } = Hs(), p = h(0), u = h(!1), m = h(!1), d = h(""), v = h(""), y = h([]), k = h(!1), _ = h(/* @__PURE__ */ new Map()), b = h(/* @__PURE__ */ new Set()), D = h(!1);
    function M() {
      D.value && L(), D.value = !1;
    }
    const $ = A(() => n.nodes[p.value]), C = A(() => n.nodes.filter((ce) => n.nodeChoices.has(ce.node_type)).length), B = A(() => $.value ? _.value.get($.value.node_type) || [] : []), x = A(() => $.value ? b.value.has($.value.node_type) : !1);
    Ct($, async (ce) => {
      var ye;
      ce && ((ye = ce.options) != null && ye.length || _.value.has(ce.node_type) || b.value.has(ce.node_type) || n.nodeChoices.has(ce.node_type) || await R(ce.node_type));
    }, { immediate: !0 });
    async function R(ce) {
      b.value.add(ce);
      try {
        const ye = await f(ce, 5);
        _.value.set(ce, ye);
      } catch {
        _.value.set(ce, []);
      } finally {
        b.value.delete(ce);
      }
    }
    const q = A(() => n.autoResolvedPackages.filter((ce) => !n.skippedPackages.has(ce.package_id)).length);
    function F(ce) {
      return n.skippedPackages.has(ce);
    }
    function G(ce) {
      i("package-skip", ce);
    }
    const S = A(() => {
      var ye;
      if (!$.value) return "not-found";
      const ce = n.nodeChoices.get($.value.node_type);
      if (ce)
        switch (ce.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (ye = $.value.options) != null && ye.length ? "ambiguous" : "not-found";
    }), T = A(() => {
      var ye;
      if (!$.value) return;
      const ce = n.nodeChoices.get($.value.node_type);
      if (ce)
        switch (ce.action) {
          case "install":
            return ce.package_id ? `→ ${ce.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (ye = $.value.options) != null && ye.length ? `${$.value.options.length} matches` : "Not Found";
    });
    function N(ce) {
      ce >= 0 && ce < n.nodes.length && (p.value = ce);
    }
    function de() {
      $.value && i("mark-optional", $.value.node_type);
    }
    function se() {
      $.value && i("skip", $.value.node_type);
    }
    function X(ce) {
      $.value && i("option-selected", $.value.node_type, ce);
    }
    function ve() {
      $.value && i("clear-choice", $.value.node_type);
    }
    function J() {
      $.value && (d.value = $.value.node_type, y.value = B.value, u.value = !0, _e(d.value));
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
    let me = null;
    function Q() {
      me && clearTimeout(me), me = setTimeout(() => {
        _e(d.value);
      }, 300);
    }
    async function _e(ce) {
      if (!ce.trim()) {
        y.value = [];
        return;
      }
      k.value = !0;
      try {
        y.value = await f(ce, 10);
      } catch {
        y.value = [];
      } finally {
        k.value = !1;
      }
    }
    function Ce(ce) {
      $.value && (i("manual-entry", $.value.node_type, ce.package_id), L());
    }
    function De(ce) {
      $.value && i("manual-entry", $.value.node_type, ce.package_id);
    }
    function Ne() {
      !$.value || !v.value.trim() || (i("manual-entry", $.value.node_type, v.value.trim()), I());
    }
    return (ce, ye) => {
      var Re, ee;
      return t(), o("div", vr, [
        s.autoResolvedPackages.length > 0 ? (t(), o("div", fr, [
          e("div", pr, [
            ye[6] || (ye[6] = e("div", { class: "section-info" }, [
              e("h4", { class: "section-title" }, "Packages to Install"),
              e("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            e("span", gr, a(q.value) + "/" + a(s.autoResolvedPackages.length) + " to install", 1)
          ]),
          e("div", hr, [
            (t(!0), o(W, null, ne(s.autoResolvedPackages, (ie) => (t(), o("div", {
              key: ie.package_id,
              class: "resolved-package-item"
            }, [
              e("div", yr, [
                e("code", wr, a(ie.package_id), 1),
                e("span", kr, a(ie.node_types_count) + " node type" + a(ie.node_types_count > 1 ? "s" : ""), 1)
              ]),
              e("div", br, [
                F(ie.package_id) ? (t(), o("span", $r, " SKIPPED ")) : (t(), o("span", _r, " WILL INSTALL ")),
                e("button", {
                  class: "toggle-skip-btn",
                  onClick: (we) => G(ie.package_id)
                }, a(F(ie.package_id) ? "Include" : "Skip"), 9, Cr)
              ])
            ]))), 128))
          ])
        ])) : r("", !0),
        s.autoResolvedPackages.length > 0 && s.nodes.length > 0 ? (t(), o("div", xr)) : r("", !0),
        s.nodes.length > 0 ? (t(), o(W, { key: 2 }, [
          e("div", Sr, [
            ye[7] || (ye[7] = e("div", { class: "step-info" }, [
              e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            e("span", Ir, a(C.value) + "/" + a(s.nodes.length) + " resolved", 1)
          ]),
          $.value ? (t(), P(Ks, {
            key: 0,
            "item-name": $.value.node_type,
            "current-index": p.value,
            "total-items": s.nodes.length,
            onPrev: ye[0] || (ye[0] = (ie) => N(p.value - 1)),
            onNext: ye[1] || (ye[1] = (ie) => N(p.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : r("", !0),
          $.value ? (t(), o("div", Er, [
            w(er, {
              "node-type": $.value.node_type,
              "has-multiple-options": !!((Re = $.value.options) != null && Re.length),
              options: $.value.options,
              choice: (ee = s.nodeChoices) == null ? void 0 : ee.get($.value.node_type),
              status: S.value,
              "status-label": T.value,
              "search-results": B.value,
              "is-searching": x.value,
              onMarkOptional: de,
              onSkip: se,
              onManualEntry: z,
              onSearch: J,
              onOptionSelected: X,
              onClearChoice: ve,
              onSearchResultSelected: De
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching"])
          ])) : r("", !0)
        ], 64)) : r("", !0),
        s.nodes.length === 0 && s.autoResolvedPackages.length === 0 ? (t(), o("div", Pr, [...ye[8] || (ye[8] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])) : r("", !0),
        (t(), P(Je, { to: "body" }, [
          u.value ? (t(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: ye[4] || (ye[4] = Be((ie) => D.value = !0, ["self"])),
            onMouseup: Be(M, ["self"])
          }, [
            e("div", {
              class: "node-search-modal",
              onMousedown: ye[3] || (ye[3] = (ie) => D.value = !1)
            }, [
              e("div", { class: "node-modal-header" }, [
                ye[9] || (ye[9] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: L
                }, "✕")
              ]),
              e("div", Mr, [
                w(yt, {
                  modelValue: d.value,
                  "onUpdate:modelValue": ye[2] || (ye[2] = (ie) => d.value = ie),
                  placeholder: "Search by node type, package name...",
                  onInput: Q
                }, null, 8, ["modelValue"]),
                e("div", Rr, [
                  y.value.length > 0 ? (t(), o("div", Tr, [
                    (t(!0), o(W, null, ne(y.value, (ie) => (t(), o("div", {
                      key: ie.package_id,
                      class: "node-search-result-item",
                      onClick: (we) => Ce(ie)
                    }, [
                      e("div", Lr, [
                        e("code", zr, a(ie.package_id), 1),
                        ie.match_confidence ? (t(), P(ms, {
                          key: 0,
                          confidence: ie.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : r("", !0)
                      ]),
                      ie.description ? (t(), o("div", Ur, a(ie.description), 1)) : r("", !0)
                    ], 8, Dr))), 128))
                  ])) : k.value ? (t(), o("div", Nr, "Searching...")) : d.value ? (t(), o("div", Or, 'No packages found matching "' + a(d.value) + '"', 1)) : (t(), o("div", Ar, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : r("", !0)
        ])),
        (t(), P(Je, { to: "body" }, [
          m.value ? (t(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: Be(I, ["self"])
          }, [
            e("div", Br, [
              e("div", { class: "node-modal-header" }, [
                ye[10] || (ye[10] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: I
                }, "✕")
              ]),
              e("div", Fr, [
                w(yt, {
                  modelValue: v.value,
                  "onUpdate:modelValue": ye[5] || (ye[5] = (ie) => v.value = ie),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", Vr, [
                  w(he, {
                    variant: "secondary",
                    onClick: I
                  }, {
                    default: l(() => [...ye[11] || (ye[11] = [
                      g("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  w(he, {
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
}), Gr = /* @__PURE__ */ ae(Wr, [["__scopeId", "data-v-281581bc"]]), jr = { class: "node-info" }, Hr = { class: "node-info-text" }, Kr = { class: "item-body" }, qr = {
  key: 0,
  class: "resolved-state"
}, Yr = {
  key: 1,
  class: "multiple-options"
}, Jr = { class: "options-list" }, Xr = ["onClick"], Qr = ["name", "value", "checked", "onChange"], Zr = { class: "option-content" }, ed = { class: "option-header" }, td = { class: "option-filename" }, sd = { class: "option-meta" }, od = { class: "option-size" }, nd = { class: "option-category" }, ad = { class: "option-path" }, ld = { class: "action-buttons" }, id = {
  key: 2,
  class: "unresolved"
}, rd = { class: "action-buttons" }, dd = /* @__PURE__ */ oe({
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
  setup(s, { emit: c }) {
    const n = s, i = c, f = A(() => !!n.choice);
    A(() => {
      var d;
      return (d = n.choice) == null ? void 0 : d.action;
    }), A(() => {
      var d, v;
      return ((v = (d = n.choice) == null ? void 0 : d.selected_model) == null ? void 0 : v.filename) || "selected";
    });
    const p = A(() => {
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
    return (d, v) => (t(), o("div", {
      class: fe(["model-resolution-item", { resolved: f.value, ambiguous: s.hasMultipleOptions }])
    }, [
      e("div", jr, [
        e("span", Hr, [
          v[7] || (v[7] = g("Used by: ", -1)),
          e("code", null, a(s.nodeType), 1)
        ]),
        s.statusLabel ? (t(), o("span", {
          key: 0,
          class: fe(["status-badge", p.value])
        }, a(s.statusLabel), 3)) : r("", !0)
      ]),
      e("div", Kr, [
        f.value ? (t(), o("div", qr, [
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
        ])) : s.hasMultipleOptions && s.options ? (t(), o("div", Yr, [
          v[12] || (v[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", Jr, [
            (t(!0), o(W, null, ne(s.options, (y, k) => (t(), o("label", {
              key: y.model.hash,
              class: fe(["option-card", { selected: s.selectedOptionIndex === k }]),
              onClick: (_) => u(k)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${s.filename}`,
                value: k,
                checked: s.selectedOptionIndex === k,
                onChange: (_) => u(k)
              }, null, 40, Qr),
              e("div", Zr, [
                e("div", ed, [
                  e("span", td, a(y.model.filename), 1),
                  w(ms, {
                    confidence: y.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", sd, [
                  e("span", od, a(m(y.model.size)), 1),
                  e("span", nd, a(y.model.category), 1)
                ]),
                e("div", ad, a(y.model.relative_path), 1)
              ])
            ], 10, Xr))), 128))
          ]),
          e("div", ld, [
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
        ])) : (t(), o("div", id, [
          v[16] || (v[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", rd, [
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
}), cd = /* @__PURE__ */ ae(dd, [["__scopeId", "data-v-8a82fefa"]]), ud = { class: "model-resolution-step" }, md = { class: "step-header" }, vd = { class: "step-info" }, fd = { class: "step-title" }, pd = { class: "step-description" }, gd = { class: "stat-badge" }, hd = {
  key: 1,
  class: "step-body"
}, yd = {
  key: 2,
  class: "empty-state"
}, wd = { class: "model-search-modal" }, kd = { class: "model-modal-body" }, bd = {
  key: 0,
  class: "model-search-results"
}, _d = ["onClick"], $d = { class: "model-result-header" }, Cd = { class: "model-result-filename" }, xd = { class: "model-result-meta" }, Sd = { class: "model-result-category" }, Id = { class: "model-result-size" }, Ed = {
  key: 0,
  class: "model-result-path"
}, Pd = {
  key: 1,
  class: "model-no-results"
}, Md = {
  key: 2,
  class: "model-searching"
}, Rd = { class: "model-download-url-modal" }, Td = { class: "model-modal-body" }, Dd = { class: "model-input-group" }, Ld = { class: "model-input-group" }, zd = { class: "model-modal-actions" }, Ud = /* @__PURE__ */ oe({
  __name: "ModelResolutionStep",
  props: {
    models: {},
    modelChoices: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "download-url", "clear-choice"],
  setup(s, { emit: c }) {
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
    const f = s, p = c, u = h(0), m = h(!1), d = h(!1), v = h(""), y = h(""), k = h(""), _ = h([]), b = h(!1), D = A(() => f.models[u.value]), M = A(() => f.models.some((L) => L.is_download_intent)), $ = A(() => f.models.filter(
      (L) => f.modelChoices.has(L.filename) || L.is_download_intent
    ).length), C = A(() => {
      var I;
      if (!D.value) return "";
      const L = i((I = D.value.reference) == null ? void 0 : I.node_type);
      return L ? `${L}/${D.value.filename}` : "";
    }), B = A(() => {
      var I;
      if (!D.value) return "not-found";
      const L = f.modelChoices.get(D.value.filename);
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
      return D.value.is_download_intent ? "download" : (I = D.value.options) != null && I.length ? "ambiguous" : "not-found";
    }), x = A(() => {
      var I, me;
      if (!D.value) return;
      const L = f.modelChoices.get(D.value.filename);
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
      return D.value.is_download_intent ? "Pending Download" : (me = D.value.options) != null && me.length ? `${D.value.options.length} matches` : "Not Found";
    });
    function R(L) {
      L >= 0 && L < f.models.length && (u.value = L);
    }
    function q() {
      D.value && p("mark-optional", D.value.filename);
    }
    function F() {
      D.value && p("skip", D.value.filename);
    }
    function G(L) {
      D.value && p("option-selected", D.value.filename, L);
    }
    function S() {
      D.value && p("clear-choice", D.value.filename);
    }
    function T() {
      D.value && (v.value = D.value.filename, m.value = !0);
    }
    function N() {
      D.value && (y.value = D.value.download_source || "", k.value = D.value.target_path || C.value, d.value = !0);
    }
    function de() {
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
    function ve(L) {
      D.value && de();
    }
    function J() {
      !D.value || !y.value.trim() || (p("download-url", D.value.filename, y.value.trim(), k.value.trim() || void 0), se());
    }
    function z(L) {
      if (!L) return "Unknown";
      const I = L / (1024 * 1024 * 1024);
      return I >= 1 ? `${I.toFixed(2)} GB` : `${(L / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (L, I) => {
      var me, Q, _e;
      return t(), o("div", ud, [
        e("div", md, [
          e("div", vd, [
            e("h3", fd, a(M.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", pd, a(M.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", gd, a($.value) + "/" + a(s.models.length) + " resolved", 1)
        ]),
        D.value ? (t(), P(Ks, {
          key: 0,
          "item-name": D.value.filename,
          "current-index": u.value,
          "total-items": s.models.length,
          onPrev: I[0] || (I[0] = (Ce) => R(u.value - 1)),
          onNext: I[1] || (I[1] = (Ce) => R(u.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : r("", !0),
        D.value ? (t(), o("div", hd, [
          w(cd, {
            filename: D.value.filename,
            "node-type": ((me = D.value.reference) == null ? void 0 : me.node_type) || "Unknown",
            "has-multiple-options": !!((Q = D.value.options) != null && Q.length),
            options: D.value.options,
            choice: (_e = s.modelChoices) == null ? void 0 : _e.get(D.value.filename),
            status: B.value,
            "status-label": x.value,
            onMarkOptional: q,
            onSkip: F,
            onDownloadUrl: N,
            onSearch: T,
            onOptionSelected: G,
            onClearChoice: S
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (t(), o("div", yd, [...I[5] || (I[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (t(), P(Je, { to: "body" }, [
          m.value ? (t(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: Be(de, ["self"])
          }, [
            e("div", wd, [
              e("div", { class: "model-modal-header" }, [
                I[6] || (I[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: de
                }, "✕")
              ]),
              e("div", kd, [
                w(yt, {
                  modelValue: v.value,
                  "onUpdate:modelValue": I[2] || (I[2] = (Ce) => v.value = Ce),
                  placeholder: "Search by filename, category...",
                  onInput: X
                }, null, 8, ["modelValue"]),
                _.value.length > 0 ? (t(), o("div", bd, [
                  (t(!0), o(W, null, ne(_.value, (Ce) => (t(), o("div", {
                    key: Ce.hash,
                    class: "model-search-result-item",
                    onClick: (De) => ve()
                  }, [
                    e("div", $d, [
                      e("code", Cd, a(Ce.filename), 1)
                    ]),
                    e("div", xd, [
                      e("span", Sd, a(Ce.category), 1),
                      e("span", Id, a(z(Ce.size)), 1)
                    ]),
                    Ce.relative_path ? (t(), o("div", Ed, a(Ce.relative_path), 1)) : r("", !0)
                  ], 8, _d))), 128))
                ])) : v.value && !b.value ? (t(), o("div", Pd, ' No models found matching "' + a(v.value) + '" ', 1)) : r("", !0),
                b.value ? (t(), o("div", Md, "Searching...")) : r("", !0)
              ])
            ])
          ])) : r("", !0)
        ])),
        (t(), P(Je, { to: "body" }, [
          d.value ? (t(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: Be(se, ["self"])
          }, [
            e("div", Rd, [
              e("div", { class: "model-modal-header" }, [
                I[7] || (I[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: se
                }, "✕")
              ]),
              e("div", Td, [
                e("div", Dd, [
                  I[8] || (I[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  w(yt, {
                    modelValue: y.value,
                    "onUpdate:modelValue": I[3] || (I[3] = (Ce) => y.value = Ce),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", Ld, [
                  I[9] || (I[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  w(yt, {
                    modelValue: k.value,
                    "onUpdate:modelValue": I[4] || (I[4] = (Ce) => k.value = Ce),
                    placeholder: C.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", zd, [
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
}), Nd = /* @__PURE__ */ ae(Ud, [["__scopeId", "data-v-c6acbada"]]), Od = { class: "applying-step" }, Ad = {
  key: 0,
  class: "phase-content"
}, Bd = {
  key: 1,
  class: "phase-content"
}, Fd = { class: "phase-description" }, Vd = { class: "overall-progress" }, Wd = { class: "progress-bar" }, Gd = { class: "progress-label" }, jd = { class: "install-list" }, Hd = { class: "install-icon" }, Kd = { key: 0 }, qd = {
  key: 1,
  class: "spinner"
}, Yd = { key: 2 }, Jd = { key: 3 }, Xd = {
  key: 0,
  class: "install-error"
}, Qd = {
  key: 2,
  class: "phase-content"
}, Zd = { class: "phase-header" }, ec = { class: "phase-title" }, tc = { class: "completion-summary" }, sc = {
  key: 0,
  class: "summary-item success"
}, oc = { class: "summary-text" }, nc = {
  key: 1,
  class: "summary-item error"
}, ac = { class: "summary-text" }, lc = {
  key: 2,
  class: "failed-list"
}, ic = { class: "failed-node-id" }, rc = { class: "failed-error" }, dc = {
  key: 4,
  class: "summary-item success"
}, cc = {
  key: 5,
  class: "restart-prompt"
}, uc = {
  key: 3,
  class: "phase-content error"
}, mc = { class: "error-message" }, vc = /* @__PURE__ */ oe({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(s) {
    const c = s, n = A(() => {
      var v, y;
      const m = ((v = c.progress.nodeInstallProgress) == null ? void 0 : v.totalNodes) || c.progress.nodesToInstall.length;
      if (!m) return 0;
      const d = ((y = c.progress.nodeInstallProgress) == null ? void 0 : y.completedNodes.length) ?? 0;
      return Math.round(d / m * 100);
    }), i = A(() => {
      var m;
      return ((m = c.progress.nodeInstallProgress) == null ? void 0 : m.completedNodes.filter((d) => !d.success)) || [];
    }), f = A(() => i.value.length > 0);
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
      return t(), o("div", Od, [
        s.progress.phase === "resolving" ? (t(), o("div", Ad, [...d[2] || (d[2] = [
          e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          e("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : s.progress.phase === "installing" ? (t(), o("div", Bd, [
          d[3] || (d[3] = e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          e("p", Fd, " Installing " + a((((v = s.progress.nodeInstallProgress) == null ? void 0 : v.currentIndex) ?? 0) + 1) + " of " + a(((y = s.progress.nodeInstallProgress) == null ? void 0 : y.totalNodes) ?? s.progress.nodesToInstall.length) + " packages... ", 1),
          e("div", Vd, [
            e("div", Wd, [
              e("div", {
                class: "progress-fill",
                style: It({ width: `${n.value}%` })
              }, null, 4)
            ]),
            e("span", Gd, a(((k = s.progress.nodeInstallProgress) == null ? void 0 : k.completedNodes.length) ?? 0) + " / " + a(((_ = s.progress.nodeInstallProgress) == null ? void 0 : _.totalNodes) ?? s.progress.nodesToInstall.length), 1)
          ]),
          e("div", jd, [
            (t(!0), o(W, null, ne(s.progress.nodesToInstall, (b, D) => (t(), o("div", {
              key: b,
              class: fe(["install-item", p(b, D)])
            }, [
              e("span", Hd, [
                p(b, D) === "pending" ? (t(), o("span", Kd, "○")) : p(b, D) === "installing" ? (t(), o("span", qd, "◌")) : p(b, D) === "complete" ? (t(), o("span", Yd, "✓")) : p(b, D) === "failed" ? (t(), o("span", Jd, "✗")) : r("", !0)
              ]),
              e("code", null, a(b), 1),
              u(b) ? (t(), o("span", Xd, a(u(b)), 1)) : r("", !0)
            ], 2))), 128))
          ])
        ])) : s.progress.phase === "complete" ? (t(), o("div", Qd, [
          e("div", Zd, [
            e("span", {
              class: fe(["phase-icon", f.value ? "warning" : "success"])
            }, a(f.value ? "⚠" : "✓"), 3),
            e("h3", ec, a(f.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          e("div", tc, [
            s.progress.nodesInstalled.length > 0 ? (t(), o("div", sc, [
              d[4] || (d[4] = e("span", { class: "summary-icon" }, "✓", -1)),
              e("span", oc, a(s.progress.nodesInstalled.length) + " node package" + a(s.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : r("", !0),
            i.value.length > 0 ? (t(), o("div", nc, [
              d[5] || (d[5] = e("span", { class: "summary-icon" }, "✗", -1)),
              e("span", ac, a(i.value.length) + " package" + a(i.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : r("", !0),
            i.value.length > 0 ? (t(), o("div", lc, [
              (t(!0), o(W, null, ne(i.value, (b) => (t(), o("div", {
                key: b.node_id,
                class: "failed-item"
              }, [
                e("code", ic, a(b.node_id), 1),
                e("span", rc, a(b.error), 1)
              ]))), 128))
            ])) : r("", !0),
            i.value.length > 0 ? (t(), o("button", {
              key: 3,
              class: "retry-button",
              onClick: d[0] || (d[0] = (b) => m.$emit("retry-failed"))
            }, " Retry Failed (" + a(i.value.length) + ") ", 1)) : r("", !0),
            f.value ? r("", !0) : (t(), o("div", dc, [...d[6] || (d[6] = [
              e("span", { class: "summary-icon" }, "✓", -1),
              e("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            d[8] || (d[8] = e("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            s.progress.needsRestart ? (t(), o("div", cc, [
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
        ])) : s.progress.phase === "error" ? (t(), o("div", uc, [
          d[9] || (d[9] = e("div", { class: "phase-header" }, [
            e("span", { class: "phase-icon error" }, "✗"),
            e("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          e("p", mc, a(s.progress.error), 1)
        ])) : r("", !0)
      ]);
    };
  }
}), fc = /* @__PURE__ */ ae(vc, [["__scopeId", "data-v-5efaae58"]]), pc = {
  key: 0,
  class: "loading-state"
}, gc = {
  key: 1,
  class: "wizard-content"
}, hc = {
  key: 0,
  class: "step-content"
}, yc = { class: "analysis-summary" }, wc = { class: "analysis-header" }, kc = { class: "summary-description" }, bc = { class: "stats-grid" }, _c = { class: "stat-card" }, $c = { class: "stat-items" }, Cc = {
  key: 0,
  class: "stat-item success"
}, xc = { class: "stat-count" }, Sc = {
  key: 1,
  class: "stat-item info"
}, Ic = { class: "stat-count" }, Ec = {
  key: 2,
  class: "stat-item warning"
}, Pc = { class: "stat-count" }, Mc = {
  key: 3,
  class: "stat-item error"
}, Rc = { class: "stat-count" }, Tc = { class: "stat-card" }, Dc = { class: "stat-items" }, Lc = { class: "stat-item success" }, zc = { class: "stat-count" }, Uc = {
  key: 0,
  class: "stat-item info"
}, Nc = { class: "stat-count" }, Oc = {
  key: 1,
  class: "stat-item warning"
}, Ac = { class: "stat-count" }, Bc = {
  key: 2,
  class: "stat-item warning"
}, Fc = { class: "stat-count" }, Vc = {
  key: 3,
  class: "stat-item error"
}, Wc = { class: "stat-count" }, Gc = {
  key: 0,
  class: "status-message warning"
}, jc = { class: "status-text" }, Hc = {
  key: 1,
  class: "status-message info"
}, Kc = { class: "status-text" }, qc = {
  key: 2,
  class: "status-message info"
}, Yc = { class: "status-text" }, Jc = {
  key: 3,
  class: "status-message warning"
}, Xc = { class: "status-text" }, Qc = {
  key: 4,
  class: "status-message success"
}, Zc = {
  key: 5,
  class: "category-mismatch-section"
}, eu = { class: "mismatch-list" }, tu = { class: "mismatch-path" }, su = { class: "mismatch-target" }, ou = {
  key: 3,
  class: "step-content"
}, nu = { class: "review-summary" }, au = { class: "review-stats" }, lu = { class: "review-stat" }, iu = { class: "stat-value" }, ru = { class: "review-stat" }, du = { class: "stat-value" }, cu = { class: "review-stat" }, uu = { class: "stat-value" }, mu = { class: "review-stat" }, vu = { class: "stat-value" }, fu = {
  key: 0,
  class: "review-section"
}, pu = { class: "section-title" }, gu = { class: "review-items" }, hu = { class: "item-name" }, yu = { class: "item-choice" }, wu = {
  key: 0,
  class: "choice-badge install"
}, ku = {
  key: 1,
  class: "choice-badge skip"
}, bu = {
  key: 1,
  class: "review-section"
}, _u = { class: "section-title" }, $u = { class: "review-items" }, Cu = { class: "item-name" }, xu = { class: "item-choice" }, Su = {
  key: 0,
  class: "choice-badge install"
}, Iu = {
  key: 1,
  class: "choice-badge optional"
}, Eu = {
  key: 2,
  class: "choice-badge skip"
}, Pu = {
  key: 1,
  class: "choice-badge pending"
}, Mu = {
  key: 2,
  class: "review-section"
}, Ru = { class: "section-title" }, Tu = { class: "review-items" }, Du = { class: "item-name" }, Lu = { class: "item-choice" }, zu = {
  key: 0,
  class: "choice-badge install"
}, Uu = {
  key: 1,
  class: "choice-badge download"
}, Nu = {
  key: 2,
  class: "choice-badge optional"
}, Ou = {
  key: 3,
  class: "choice-badge skip"
}, Au = {
  key: 4,
  class: "choice-badge skip"
}, Bu = {
  key: 1,
  class: "choice-badge download"
}, Fu = {
  key: 2,
  class: "choice-badge pending"
}, Vu = {
  key: 3,
  class: "no-choices"
}, Wu = /* @__PURE__ */ oe({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(s, { emit: c }) {
    const n = s, i = c, { analyzeWorkflow: f, applyResolution: p, installNodes: u, queueModelDownloads: m, progress: d, resetProgress: v } = Hs(), { loadPendingDownloads: y } = ls(), { openFileLocation: k } = je(), _ = h(null), b = h(!1), D = h(!1), M = h(null), $ = h("analysis"), C = h([]), B = h(/* @__PURE__ */ new Map()), x = h(/* @__PURE__ */ new Map()), R = h(/* @__PURE__ */ new Set()), q = A(() => {
      const Y = [
        { id: "analysis", label: "Analysis" }
      ];
      return (G.value || N.value) && Y.push({ id: "nodes", label: "Nodes" }), (S.value || T.value) && Y.push({ id: "models", label: "Models" }), Y.push({ id: "review", label: "Review" }), $.value === "applying" && Y.push({ id: "applying", label: "Applying" }), Y;
    }), F = A(() => _.value ? _.value.stats.needs_user_input : !1), G = A(() => _.value ? _.value.nodes.unresolved.length > 0 || _.value.nodes.ambiguous.length > 0 : !1), S = A(() => _.value ? _.value.models.unresolved.length > 0 || _.value.models.ambiguous.length > 0 : !1), T = A(() => _.value ? _.value.stats.download_intents > 0 : !1), N = A(() => _.value ? _.value.stats.nodes_needing_installation > 0 : !1), de = A(() => _.value ? _.value.nodes.resolved.length : 0), se = A(() => _.value ? _.value.models.resolved.filter((Y) => Y.has_category_mismatch) : []), X = A(() => se.value.length > 0), ve = A(() => {
      if (!_.value) return [];
      const Y = _.value.nodes.resolved.filter((V) => !V.is_installed), E = /* @__PURE__ */ new Set();
      return Y.filter((V) => E.has(V.package.package_id) ? !1 : (E.add(V.package.package_id), !0));
    }), J = A(() => {
      if (!_.value) return [];
      const Y = _.value.nodes.resolved.filter((V) => !V.is_installed), E = /* @__PURE__ */ new Map();
      for (const V of Y) {
        const Z = E.get(V.package.package_id);
        Z ? Z.node_types_count++ : E.set(V.package.package_id, {
          package_id: V.package.package_id,
          title: V.package.title,
          node_types_count: 1
        });
      }
      return Array.from(E.values());
    }), z = A(() => ve.value.filter((Y) => !R.value.has(Y.package.package_id))), L = A(() => _.value ? _.value.models.resolved.filter((Y) => Y.match_type === "download_intent").map((Y) => ({
      filename: Y.reference.widget_value,
      reference: Y.reference,
      is_download_intent: !0,
      resolved_model: Y.model,
      download_source: Y.download_source,
      target_path: Y.target_path
    })) : []), I = A(() => {
      if (!_.value) return [];
      const Y = _.value.nodes.unresolved.map((V) => ({
        node_type: V.reference.node_type,
        reason: V.reason,
        is_unresolved: !0,
        options: void 0
      })), E = _.value.nodes.ambiguous.map((V) => ({
        node_type: V.reference.node_type,
        has_multiple_options: !0,
        options: V.options.map((Z) => ({
          package_id: Z.package.package_id,
          title: Z.package.title,
          match_confidence: Z.match_confidence,
          match_type: Z.match_type,
          is_installed: Z.is_installed
        }))
      }));
      return [...Y, ...E];
    }), me = A(() => {
      if (!_.value) return [];
      const Y = _.value.models.unresolved.map((V) => ({
        filename: V.reference.widget_value,
        reference: V.reference,
        reason: V.reason,
        is_unresolved: !0,
        options: void 0
      })), E = _.value.models.ambiguous.map((V) => ({
        filename: V.reference.widget_value,
        reference: V.reference,
        has_multiple_options: !0,
        options: V.options.map((Z) => ({
          model: Z.model,
          match_confidence: Z.match_confidence,
          match_type: Z.match_type,
          has_download_source: Z.has_download_source
        }))
      }));
      return [...Y, ...E];
    }), Q = A(() => {
      const Y = me.value, E = L.value.map((V) => ({
        filename: V.filename,
        reference: V.reference,
        is_download_intent: !0,
        resolved_model: V.resolved_model,
        download_source: V.download_source,
        target_path: V.target_path,
        options: void 0
      }));
      return [...Y, ...E];
    }), _e = A(() => {
      let Y = z.value.length;
      for (const E of B.value.values())
        E.action === "install" && Y++;
      for (const E of x.value.values())
        E.action === "select" && Y++;
      return Y;
    }), Ce = A(() => {
      let Y = 0;
      for (const E of x.value.values())
        E.action === "download" && Y++;
      return Y;
    }), De = A(() => {
      let Y = 0;
      for (const E of B.value.values())
        E.action === "optional" && Y++;
      for (const E of x.value.values())
        E.action === "optional" && Y++;
      return Y;
    }), Ne = A(() => {
      let Y = R.value.size;
      for (const E of B.value.values())
        E.action === "skip" && Y++;
      for (const E of x.value.values())
        E.action === "skip" && Y++;
      for (const E of I.value)
        B.value.has(E.node_type) || Y++;
      for (const E of me.value)
        x.value.has(E.filename) || Y++;
      return Y;
    }), ce = A(() => {
      const Y = {};
      if (Y.analysis = { resolved: 1, total: 1 }, G.value) {
        const E = I.value.length, V = I.value.filter(
          (Z) => B.value.has(Z.node_type)
        ).length;
        Y.nodes = { resolved: V, total: E };
      }
      if (S.value || T.value) {
        const E = Q.value.length, V = Q.value.filter(
          (Z) => x.value.has(Z.filename) || Z.is_download_intent
        ).length;
        Y.models = { resolved: V, total: E };
      }
      if (Y.review = { resolved: 1, total: 1 }, $.value === "applying") {
        const E = d.totalFiles || 1, V = d.completedFiles.length;
        Y.applying = { resolved: V, total: E };
      }
      return Y;
    });
    function ye(Y) {
      $.value = Y;
    }
    function Re() {
      const Y = q.value.findIndex((E) => E.id === $.value);
      Y > 0 && ($.value = q.value[Y - 1].id);
    }
    function ee() {
      const Y = q.value.findIndex((E) => E.id === $.value);
      Y < q.value.length - 1 && ($.value = q.value[Y + 1].id);
    }
    async function ie() {
      b.value = !0, M.value = null;
      try {
        _.value = await f(n.workflowName);
      } catch (Y) {
        M.value = Y instanceof Error ? Y.message : "Failed to analyze workflow";
      } finally {
        b.value = !1;
      }
    }
    function we() {
      C.value.includes("analysis") || C.value.push("analysis"), G.value || N.value ? $.value = "nodes" : S.value || T.value ? $.value = "models" : $.value = "review";
    }
    function xe(Y) {
      B.value.set(Y, { action: "optional" });
    }
    function Xe(Y) {
      B.value.set(Y, { action: "skip" });
    }
    function tt(Y, E) {
      var Z;
      const V = I.value.find((ke) => ke.node_type === Y);
      (Z = V == null ? void 0 : V.options) != null && Z[E] && B.value.set(Y, {
        action: "install",
        package_id: V.options[E].package_id
      });
    }
    function Ee(Y, E) {
      B.value.set(Y, {
        action: "install",
        package_id: E
      });
    }
    function Qe(Y) {
      B.value.delete(Y);
    }
    function qe(Y) {
      R.value.has(Y) ? R.value.delete(Y) : R.value.add(Y);
    }
    function He(Y) {
      x.value.set(Y, { action: "optional" });
    }
    function dt(Y) {
      x.value.set(Y, { action: "skip" });
    }
    function $e(Y, E) {
      var Z;
      const V = me.value.find((ke) => ke.filename === Y);
      (Z = V == null ? void 0 : V.options) != null && Z[E] && x.value.set(Y, {
        action: "select",
        selected_model: V.options[E].model
      });
    }
    function Ge(Y, E, V) {
      x.value.set(Y, {
        action: "download",
        url: E,
        target_path: V
      });
    }
    function Ze(Y) {
      x.value.delete(Y);
    }
    async function Ye(Y) {
      try {
        await k(Y);
      } catch (E) {
        M.value = E instanceof Error ? E.message : "Failed to open file location";
      }
    }
    async function Ue() {
      var Y;
      D.value = !0, M.value = null, v(), d.phase = "resolving", $.value = "applying";
      try {
        const E = await p(n.workflowName, B.value, x.value, R.value);
        E.models_to_download && E.models_to_download.length > 0 && m(n.workflowName, E.models_to_download);
        const V = [
          ...E.nodes_to_install || [],
          ...z.value.map((ke) => ke.package.package_id)
        ];
        d.nodesToInstall = [...new Set(V)], d.nodesToInstall.length > 0 && await u(n.workflowName), d.phase = "complete", await y();
        const Z = d.installError || ((Y = d.nodeInstallProgress) == null ? void 0 : Y.completedNodes.some((ke) => !ke.success));
        !d.needsRestart && !Z && setTimeout(() => {
          i("refresh"), i("install"), i("close");
        }, 1500);
      } catch (E) {
        M.value = E instanceof Error ? E.message : "Failed to apply resolution", d.error = M.value, d.phase = "error";
      } finally {
        D.value = !1;
      }
    }
    function pe() {
      i("refresh"), i("restart"), i("close");
    }
    async function K() {
      var E;
      const Y = ((E = d.nodeInstallProgress) == null ? void 0 : E.completedNodes.filter((V) => !V.success).map((V) => V.node_id)) || [];
      if (Y.length !== 0) {
        d.phase = "installing", d.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: Y.length
        }, d.nodesToInstall = Y, d.nodesInstalled = [], d.installError = void 0;
        try {
          await u(n.workflowName), d.phase = "complete";
        } catch (V) {
          d.error = V instanceof Error ? V.message : "Retry failed", d.phase = "error";
        }
      }
    }
    return Ve(ie), (Y, E) => (t(), P(at, {
      title: `Resolve Dependencies: ${s.workflowName}`,
      size: "lg",
      loading: b.value,
      error: M.value || void 0,
      "fixed-height": !0,
      onClose: E[1] || (E[1] = (V) => i("close"))
    }, {
      body: l(() => [
        b.value && !_.value ? (t(), o("div", pc, [...E[2] || (E[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : _.value ? (t(), o("div", gc, [
          w($i, {
            steps: q.value,
            "current-step": $.value,
            "completed-steps": C.value,
            "step-stats": ce.value,
            onStepChange: ye
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          $.value === "analysis" ? (t(), o("div", hc, [
            e("div", yc, [
              e("div", wc, [
                E[3] || (E[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", kc, " Found " + a(_.value.stats.total_nodes) + " nodes and " + a(_.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", bc, [
                e("div", _c, [
                  E[12] || (E[12] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", $c, [
                    de.value > 0 ? (t(), o("div", Cc, [
                      E[4] || (E[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", xc, a(de.value), 1),
                      E[5] || (E[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ])) : r("", !0),
                    _.value.stats.packages_needing_installation > 0 ? (t(), o("div", Sc, [
                      E[6] || (E[6] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Ic, a(_.value.stats.packages_needing_installation), 1),
                      E[7] || (E[7] = e("span", { class: "stat-label" }, "to install", -1))
                    ])) : r("", !0),
                    _.value.nodes.ambiguous.length > 0 ? (t(), o("div", Ec, [
                      E[8] || (E[8] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Pc, a(_.value.nodes.ambiguous.length), 1),
                      E[9] || (E[9] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : r("", !0),
                    _.value.nodes.unresolved.length > 0 ? (t(), o("div", Mc, [
                      E[10] || (E[10] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Rc, a(_.value.nodes.unresolved.length), 1),
                      E[11] || (E[11] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : r("", !0)
                  ])
                ]),
                e("div", Tc, [
                  E[23] || (E[23] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", Dc, [
                    e("div", Lc, [
                      E[13] || (E[13] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", zc, a(_.value.models.resolved.length - _.value.stats.download_intents - _.value.stats.models_with_category_mismatch), 1),
                      E[14] || (E[14] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    _.value.stats.download_intents > 0 ? (t(), o("div", Uc, [
                      E[15] || (E[15] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Nc, a(_.value.stats.download_intents), 1),
                      E[16] || (E[16] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : r("", !0),
                    X.value ? (t(), o("div", Oc, [
                      E[17] || (E[17] = e("span", { class: "stat-icon" }, "⚠", -1)),
                      e("span", Ac, a(se.value.length), 1),
                      E[18] || (E[18] = e("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : r("", !0),
                    _.value.models.ambiguous.length > 0 ? (t(), o("div", Bc, [
                      E[19] || (E[19] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Fc, a(_.value.models.ambiguous.length), 1),
                      E[20] || (E[20] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : r("", !0),
                    _.value.models.unresolved.length > 0 ? (t(), o("div", Vc, [
                      E[21] || (E[21] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Wc, a(_.value.models.unresolved.length), 1),
                      E[22] || (E[22] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : r("", !0)
                  ])
                ])
              ]),
              F.value ? (t(), o("div", Gc, [
                E[24] || (E[24] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", jc, a(I.value.length + me.value.length) + " items need your input", 1)
              ])) : N.value ? (t(), o("div", Hc, [
                E[25] || (E[25] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Kc, a(_.value.stats.packages_needing_installation) + " package" + a(_.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + a(_.value.stats.nodes_needing_installation) + " node type" + a(_.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + a(T.value ? `, ${_.value.stats.download_intents} model${_.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : T.value ? (t(), o("div", qc, [
                E[26] || (E[26] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Yc, a(_.value.stats.download_intents) + " model" + a(_.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : X.value ? (t(), o("div", Jc, [
                E[27] || (E[27] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Xc, a(se.value.length) + " model" + a(se.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (t(), o("div", Qc, [...E[28] || (E[28] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              X.value ? (t(), o("div", Zc, [
                E[31] || (E[31] = e("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                e("div", eu, [
                  (t(!0), o(W, null, ne(se.value, (V) => {
                    var Z, ke;
                    return t(), o("div", {
                      key: V.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      e("code", tu, a(V.actual_category) + "/" + a((Z = V.model) == null ? void 0 : Z.filename), 1),
                      E[30] || (E[30] = e("span", { class: "mismatch-arrow" }, "→", -1)),
                      e("code", su, a((ke = V.expected_categories) == null ? void 0 : ke[0]) + "/", 1),
                      V.file_path ? (t(), P(he, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (We) => Ye(V.file_path)
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
          $.value === "nodes" ? (t(), P(Gr, {
            key: 1,
            nodes: I.value,
            "node-choices": B.value,
            "auto-resolved-packages": J.value,
            "skipped-packages": R.value,
            onMarkOptional: xe,
            onSkip: Xe,
            onOptionSelected: tt,
            onManualEntry: Ee,
            onClearChoice: Qe,
            onPackageSkip: qe
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : r("", !0),
          $.value === "models" ? (t(), P(Nd, {
            key: 2,
            models: Q.value,
            "model-choices": x.value,
            onMarkOptional: He,
            onSkip: dt,
            onOptionSelected: $e,
            onDownloadUrl: Ge,
            onClearChoice: Ze
          }, null, 8, ["models", "model-choices"])) : r("", !0),
          $.value === "review" ? (t(), o("div", ou, [
            e("div", nu, [
              E[36] || (E[36] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", au, [
                e("div", lu, [
                  e("span", iu, a(_e.value), 1),
                  E[32] || (E[32] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", ru, [
                  e("span", du, a(Ce.value), 1),
                  E[33] || (E[33] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", cu, [
                  e("span", uu, a(De.value), 1),
                  E[34] || (E[34] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", mu, [
                  e("span", vu, a(Ne.value), 1),
                  E[35] || (E[35] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              J.value.length > 0 ? (t(), o("div", fu, [
                e("h4", pu, "Node Packages (" + a(J.value.length) + ")", 1),
                e("div", gu, [
                  (t(!0), o(W, null, ne(J.value, (V) => (t(), o("div", {
                    key: V.package_id,
                    class: "review-item"
                  }, [
                    e("code", hu, a(V.package_id), 1),
                    e("div", yu, [
                      R.value.has(V.package_id) ? (t(), o("span", ku, "Skipped")) : (t(), o("span", wu, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : r("", !0),
              I.value.length > 0 ? (t(), o("div", bu, [
                e("h4", _u, "Node Choices (" + a(I.value.length) + ")", 1),
                e("div", $u, [
                  (t(!0), o(W, null, ne(I.value, (V) => {
                    var Z, ke, We, vt;
                    return t(), o("div", {
                      key: V.node_type,
                      class: "review-item"
                    }, [
                      e("code", Cu, a(V.node_type), 1),
                      e("div", xu, [
                        B.value.has(V.node_type) ? (t(), o(W, { key: 0 }, [
                          ((Z = B.value.get(V.node_type)) == null ? void 0 : Z.action) === "install" ? (t(), o("span", Su, a((ke = B.value.get(V.node_type)) == null ? void 0 : ke.package_id), 1)) : ((We = B.value.get(V.node_type)) == null ? void 0 : We.action) === "optional" ? (t(), o("span", Iu, " Optional ")) : ((vt = B.value.get(V.node_type)) == null ? void 0 : vt.action) === "skip" ? (t(), o("span", Eu, " Skip ")) : r("", !0)
                        ], 64)) : (t(), o("span", Pu, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : r("", !0),
              Q.value.length > 0 ? (t(), o("div", Mu, [
                e("h4", Ru, "Models (" + a(Q.value.length) + ")", 1),
                e("div", Tu, [
                  (t(!0), o(W, null, ne(Q.value, (V) => {
                    var Z, ke, We, vt, lt, Mt, it;
                    return t(), o("div", {
                      key: V.filename,
                      class: "review-item"
                    }, [
                      e("code", Du, a(V.filename), 1),
                      e("div", Lu, [
                        x.value.has(V.filename) ? (t(), o(W, { key: 0 }, [
                          ((Z = x.value.get(V.filename)) == null ? void 0 : Z.action) === "select" ? (t(), o("span", zu, a((We = (ke = x.value.get(V.filename)) == null ? void 0 : ke.selected_model) == null ? void 0 : We.filename), 1)) : ((vt = x.value.get(V.filename)) == null ? void 0 : vt.action) === "download" ? (t(), o("span", Uu, " Download ")) : ((lt = x.value.get(V.filename)) == null ? void 0 : lt.action) === "optional" ? (t(), o("span", Nu, " Optional ")) : ((Mt = x.value.get(V.filename)) == null ? void 0 : Mt.action) === "skip" ? (t(), o("span", Ou, " Skip ")) : ((it = x.value.get(V.filename)) == null ? void 0 : it.action) === "cancel_download" ? (t(), o("span", Au, " Cancel Download ")) : r("", !0)
                        ], 64)) : V.is_download_intent ? (t(), o("span", Bu, " Pending Download ")) : (t(), o("span", Fu, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : r("", !0),
              ve.value.length === 0 && I.value.length === 0 && Q.value.length === 0 ? (t(), o("div", Vu, " No dependencies need resolution. ")) : r("", !0)
            ])
          ])) : r("", !0),
          $.value === "applying" ? (t(), P(fc, {
            key: 4,
            progress: Me(d),
            onRestart: pe,
            onRetryFailed: K
          }, null, 8, ["progress"])) : r("", !0)
        ])) : r("", !0)
      ]),
      footer: l(() => [
        $.value !== "analysis" && $.value !== "applying" ? (t(), P(he, {
          key: 0,
          variant: "secondary",
          disabled: D.value,
          onClick: Re
        }, {
          default: l(() => [...E[37] || (E[37] = [
            g(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : r("", !0),
        E[41] || (E[41] = e("div", { class: "footer-spacer" }, null, -1)),
        $.value !== "applying" || Me(d).phase === "complete" || Me(d).phase === "error" ? (t(), P(he, {
          key: 1,
          variant: "secondary",
          onClick: E[0] || (E[0] = (V) => i("close"))
        }, {
          default: l(() => [
            g(a(Me(d).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : r("", !0),
        $.value === "analysis" ? (t(), P(he, {
          key: 2,
          variant: "primary",
          disabled: b.value,
          onClick: we
        }, {
          default: l(() => [...E[38] || (E[38] = [
            g(" Continue ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : r("", !0),
        $.value === "nodes" ? (t(), P(he, {
          key: 3,
          variant: "primary",
          onClick: ee
        }, {
          default: l(() => [
            g(a(S.value || T.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : r("", !0),
        $.value === "models" ? (t(), P(he, {
          key: 4,
          variant: "primary",
          onClick: ee
        }, {
          default: l(() => [...E[39] || (E[39] = [
            g(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : r("", !0),
        $.value === "review" ? (t(), P(he, {
          key: 5,
          variant: "primary",
          disabled: D.value,
          loading: D.value,
          onClick: Ue
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
}), Gu = /* @__PURE__ */ ae(Wu, [["__scopeId", "data-v-6276cf1d"]]), ju = { class: "search-input-wrapper" }, Hu = ["value", "placeholder"], Ku = /* @__PURE__ */ oe({
  __name: "SearchInput",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 },
    autoFocus: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "clear"],
  setup(s, { emit: c }) {
    const n = s, i = c, f = h(null);
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
    }), (d, v) => (t(), o("div", ju, [
      e("input", {
        ref_key: "inputRef",
        ref: f,
        value: s.modelValue,
        type: "text",
        placeholder: s.placeholder,
        class: "search-input",
        onInput: u,
        onKeyup: $t(m, ["escape"])
      }, null, 40, Hu),
      s.clearable && s.modelValue ? (t(), o("button", {
        key: 0,
        class: "clear-button",
        onClick: m,
        title: "Clear search"
      }, " ✕ ")) : r("", !0)
    ]));
  }
}), qu = /* @__PURE__ */ ae(Ku, [["__scopeId", "data-v-266f857a"]]), Yu = { class: "search-bar" }, Ju = /* @__PURE__ */ oe({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(s) {
    return (c, n) => (t(), o("div", Yu, [
      w(qu, {
        "model-value": s.modelValue,
        placeholder: s.placeholder,
        debounce: s.debounce,
        clearable: s.clearable,
        "onUpdate:modelValue": n[0] || (n[0] = (i) => c.$emit("update:modelValue", i)),
        onClear: n[1] || (n[1] = (i) => c.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), Wt = /* @__PURE__ */ ae(Ju, [["__scopeId", "data-v-3d51bbfd"]]), Xu = { class: "section-group" }, Qu = {
  key: 0,
  class: "section-content"
}, Zu = /* @__PURE__ */ oe({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(s, { emit: c }) {
    const n = s, i = c, f = h(n.initiallyExpanded);
    function p() {
      n.collapsible && (f.value = !f.value, i("toggle", f.value));
    }
    return (u, m) => (t(), o("section", Xu, [
      w(mt, {
        count: s.count,
        clickable: s.collapsible,
        expanded: f.value,
        onClick: p
      }, {
        default: l(() => [
          g(a(s.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !s.collapsible || f.value ? (t(), o("div", Qu, [
        Te(u.$slots, "default", {}, void 0, !0)
      ])) : r("", !0)
    ]));
  }
}), Oe = /* @__PURE__ */ ae(Zu, [["__scopeId", "data-v-c48e33ed"]]), em = { class: "item-header" }, tm = {
  key: 0,
  class: "item-icon"
}, sm = { class: "item-info" }, om = {
  key: 0,
  class: "item-title"
}, nm = {
  key: 1,
  class: "item-subtitle"
}, am = {
  key: 0,
  class: "item-details"
}, lm = {
  key: 1,
  class: "item-actions"
}, im = /* @__PURE__ */ oe({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(s, { emit: c }) {
    const n = s, i = A(() => n.status ? `status-${n.status}` : "");
    return (f, p) => (t(), o("div", {
      class: fe(["item-card", { clickable: s.clickable, compact: s.compact }, i.value]),
      onClick: p[0] || (p[0] = (u) => s.clickable && f.$emit("click"))
    }, [
      e("div", em, [
        f.$slots.icon ? (t(), o("span", tm, [
          Te(f.$slots, "icon", {}, void 0, !0)
        ])) : r("", !0),
        e("div", sm, [
          f.$slots.title ? (t(), o("div", om, [
            Te(f.$slots, "title", {}, void 0, !0)
          ])) : r("", !0),
          f.$slots.subtitle ? (t(), o("div", nm, [
            Te(f.$slots, "subtitle", {}, void 0, !0)
          ])) : r("", !0)
        ])
      ]),
      f.$slots.details ? (t(), o("div", am, [
        Te(f.$slots, "details", {}, void 0, !0)
      ])) : r("", !0),
      f.$slots.actions ? (t(), o("div", lm, [
        Te(f.$slots, "actions", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), st = /* @__PURE__ */ ae(im, [["__scopeId", "data-v-cc435e0e"]]), rm = { class: "loading-state" }, dm = { class: "loading-message" }, cm = /* @__PURE__ */ oe({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(s) {
    return (c, n) => (t(), o("div", rm, [
      n[0] || (n[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", dm, a(s.message), 1)
    ]));
  }
}), Et = /* @__PURE__ */ ae(cm, [["__scopeId", "data-v-ad8436c9"]]), um = { class: "error-state" }, mm = { class: "error-message" }, vm = /* @__PURE__ */ oe({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(s) {
    return (c, n) => (t(), o("div", um, [
      n[2] || (n[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", mm, a(s.message), 1),
      s.retry ? (t(), P(te, {
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
}), Pt = /* @__PURE__ */ ae(vm, [["__scopeId", "data-v-5397be48"]]), fm = /* @__PURE__ */ oe({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(s, { expose: c, emit: n }) {
    const i = n, { getWorkflows: f } = je();
    Gs();
    const p = h([]), u = h(!1), m = h(null), d = h(""), v = h(!0), y = h(!1), k = h(!1), _ = h(!1), b = h(null), D = A(
      () => p.value.filter((z) => z.status === "broken")
    ), M = A(
      () => p.value.filter((z) => z.status === "new")
    ), $ = A(
      () => p.value.filter((z) => z.status === "modified")
    ), C = A(
      () => p.value.filter((z) => z.status === "synced")
    ), B = A(() => {
      if (!d.value.trim()) return p.value;
      const z = d.value.toLowerCase();
      return p.value.filter((L) => L.name.toLowerCase().includes(z));
    }), x = A(
      () => D.value.filter(
        (z) => !d.value.trim() || z.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), R = A(
      () => M.value.filter(
        (z) => !d.value.trim() || z.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), q = A(
      () => $.value.filter(
        (z) => !d.value.trim() || z.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), F = A(
      () => C.value.filter(
        (z) => !d.value.trim() || z.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), G = A(
      () => y.value ? F.value : F.value.slice(0, 5)
    );
    async function S(z = !1) {
      u.value = !0, m.value = null;
      try {
        p.value = await f(z);
      } catch (L) {
        m.value = L instanceof Error ? L.message : "Failed to load workflows";
      } finally {
        u.value = !1;
      }
    }
    c({ loadWorkflows: S });
    function T(z) {
      b.value = z, k.value = !0;
    }
    function N(z) {
      b.value = z, _.value = !0;
    }
    function de() {
      i("refresh");
    }
    async function se() {
      _.value = !1, await S(!0);
    }
    async function X() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function ve(z) {
      const L = [];
      return z.missing_nodes > 0 && L.push(`${z.missing_nodes} missing node${z.missing_nodes > 1 ? "s" : ""}`), z.missing_models > 0 && L.push(`${z.missing_models} missing model${z.missing_models > 1 ? "s" : ""}`), z.models_with_category_mismatch && z.models_with_category_mismatch > 0 && L.push(`${z.models_with_category_mismatch} model${z.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), z.pending_downloads && z.pending_downloads > 0 && L.push(`${z.pending_downloads} pending download${z.pending_downloads > 1 ? "s" : ""}`), L.length > 0 ? L.join(", ") : "Has issues";
    }
    function J(z) {
      const L = z.sync_state === "new" ? "New" : z.sync_state === "modified" ? "Modified" : z.sync_state === "synced" ? "Synced" : z.sync_state;
      return z.has_path_sync_issues && z.models_needing_path_sync && z.models_needing_path_sync > 0 ? `${z.models_needing_path_sync} model path${z.models_needing_path_sync > 1 ? "s" : ""} need${z.models_needing_path_sync === 1 ? "s" : ""} sync` : L || "Unknown";
    }
    return Ve(S), (z, L) => (t(), o(W, null, [
      w(ot, null, {
        header: l(() => [
          w(nt, { title: "WORKFLOWS" })
        ]),
        search: l(() => [
          w(Wt, {
            modelValue: d.value,
            "onUpdate:modelValue": L[0] || (L[0] = (I) => d.value = I),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          u.value ? (t(), P(Et, {
            key: 0,
            message: "Loading workflows..."
          })) : m.value ? (t(), P(Pt, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: S
          }, null, 8, ["message"])) : (t(), o(W, { key: 2 }, [
            x.value.length ? (t(), P(Oe, {
              key: 0,
              title: "BROKEN",
              count: x.value.length
            }, {
              default: l(() => [
                (t(!0), o(W, null, ne(x.value, (I) => (t(), P(st, {
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
                    g(a(ve(I)), 1)
                  ]),
                  actions: l(() => [
                    w(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (me) => N(I.name)
                    }, {
                      default: l(() => [...L[8] || (L[8] = [
                        g(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    w(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (me) => T(I.name)
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
            R.value.length ? (t(), P(Oe, {
              key: 1,
              title: "NEW",
              count: R.value.length
            }, {
              default: l(() => [
                (t(!0), o(W, null, ne(R.value, (I) => (t(), P(st, {
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
                    w(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (me) => T(I.name)
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
            q.value.length ? (t(), P(Oe, {
              key: 2,
              title: "MODIFIED",
              count: q.value.length
            }, {
              default: l(() => [
                (t(!0), o(W, null, ne(q.value, (I) => (t(), P(st, {
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
                    g(a(J(I)), 1)
                  ]),
                  actions: l(() => [
                    w(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (me) => T(I.name)
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
            F.value.length ? (t(), P(Oe, {
              key: 3,
              title: "SYNCED",
              count: F.value.length,
              collapsible: !0,
              "initially-expanded": v.value,
              onToggle: L[2] || (L[2] = (I) => v.value = I)
            }, {
              default: l(() => [
                (t(!0), o(W, null, ne(G.value, (I) => (t(), P(st, {
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
                    w(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (me) => T(I.name)
                    }, {
                      default: l(() => [...L[13] || (L[13] = [
                        g(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !y.value && F.value.length > 5 ? (t(), P(te, {
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
            B.value.length ? r("", !0) : (t(), P(wt, {
              key: 4,
              icon: "📭",
              message: d.value ? `No workflows match '${d.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      k.value && b.value ? (t(), P(ui, {
        key: 0,
        "workflow-name": b.value,
        onClose: L[3] || (L[3] = (I) => k.value = !1),
        onResolve: L[4] || (L[4] = (I) => N(b.value)),
        onRefresh: L[5] || (L[5] = (I) => i("refresh"))
      }, null, 8, ["workflow-name"])) : r("", !0),
      _.value && b.value ? (t(), P(Gu, {
        key: 1,
        "workflow-name": b.value,
        onClose: se,
        onInstall: de,
        onRefresh: L[6] || (L[6] = (I) => i("refresh")),
        onRestart: X
      }, null, 8, ["workflow-name"])) : r("", !0)
    ], 64));
  }
}), pm = /* @__PURE__ */ ae(fm, [["__scopeId", "data-v-fa3f076e"]]), gm = /* @__PURE__ */ oe({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(s) {
    return (c, n) => (t(), o("div", {
      class: fe(["summary-bar", s.variant])
    }, [
      Te(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), is = /* @__PURE__ */ ae(gm, [["__scopeId", "data-v-ccb7816e"]]), hm = {
  key: 0,
  class: "model-details"
}, ym = { class: "detail-section" }, wm = { class: "detail-row" }, km = { class: "detail-value mono" }, bm = { class: "detail-row" }, _m = { class: "detail-value mono" }, $m = { class: "detail-row" }, Cm = { class: "detail-value mono" }, xm = { class: "detail-row" }, Sm = { class: "detail-value" }, Im = { class: "detail-row" }, Em = { class: "detail-value" }, Pm = { class: "detail-row" }, Mm = { class: "detail-value" }, Rm = { class: "detail-section" }, Tm = { class: "section-header" }, Dm = {
  key: 0,
  class: "locations-list"
}, Lm = { class: "location-path mono" }, zm = {
  key: 0,
  class: "location-modified"
}, Um = ["onClick"], Nm = {
  key: 1,
  class: "empty-state"
}, Om = { class: "detail-section" }, Am = { class: "section-header" }, Bm = {
  key: 0,
  class: "sources-list"
}, Fm = { class: "source-type" }, Vm = ["href"], Wm = ["disabled", "onClick"], Gm = {
  key: 1,
  class: "empty-state"
}, jm = { class: "add-source-form" }, Hm = ["disabled"], Km = {
  key: 2,
  class: "source-error"
}, qm = {
  key: 3,
  class: "source-success"
}, Ym = /* @__PURE__ */ oe({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(s, { emit: c }) {
    const n = s, { getModelDetails: i, addModelSource: f, removeModelSource: p, openFileLocation: u } = je(), m = h(null), d = h(!0), v = h(null), y = h(""), k = h(!1), _ = h(null), b = h(null), D = h(null), M = h(null);
    let $ = null;
    function C(S, T = "success", N = 2e3) {
      $ && clearTimeout($), M.value = { message: S, type: T }, $ = setTimeout(() => {
        M.value = null;
      }, N);
    }
    function B(S) {
      if (!S) return "Unknown";
      const T = 1024 * 1024 * 1024, N = 1024 * 1024;
      return S >= T ? `${(S / T).toFixed(1)} GB` : S >= N ? `${(S / N).toFixed(0)} MB` : `${(S / 1024).toFixed(0)} KB`;
    }
    function x(S) {
      navigator.clipboard.writeText(S), C("Copied to clipboard!");
    }
    async function R(S) {
      try {
        await u(S), C("Opening file location...");
      } catch {
        C("Failed to open location", "error");
      }
    }
    async function q() {
      if (!(!y.value.trim() || !m.value)) {
        k.value = !0, b.value = null, D.value = null;
        try {
          await f(m.value.hash, y.value.trim()), D.value = "Source added successfully!", y.value = "", await G();
        } catch (S) {
          b.value = S instanceof Error ? S.message : "Failed to add source";
        } finally {
          k.value = !1;
        }
      }
    }
    async function F(S) {
      if (m.value) {
        _.value = S, b.value = null, D.value = null;
        try {
          await p(m.value.hash, S), C("Source removed"), await G();
        } catch (T) {
          b.value = T instanceof Error ? T.message : "Failed to remove source";
        } finally {
          _.value = null;
        }
      }
    }
    async function G() {
      d.value = !0, v.value = null;
      try {
        m.value = await i(n.identifier);
      } catch (S) {
        v.value = S instanceof Error ? S.message : "Failed to load model details";
      } finally {
        d.value = !1;
      }
    }
    return Ve(G), (S, T) => {
      var N;
      return t(), o(W, null, [
        w(at, {
          title: `Model Details: ${((N = m.value) == null ? void 0 : N.filename) || "Loading..."}`,
          size: "lg",
          loading: d.value,
          error: v.value,
          onClose: T[5] || (T[5] = (de) => S.$emit("close"))
        }, {
          body: l(() => {
            var de, se, X, ve;
            return [
              m.value ? (t(), o("div", hm, [
                e("section", ym, [
                  e("div", wm, [
                    T[6] || (T[6] = e("span", { class: "detail-label" }, "Hash:", -1)),
                    e("span", km, a(m.value.hash || "Not computed"), 1),
                    m.value.hash ? (t(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: T[0] || (T[0] = (J) => x(m.value.hash))
                    }, "Copy")) : r("", !0)
                  ]),
                  e("div", bm, [
                    T[7] || (T[7] = e("span", { class: "detail-label" }, "Blake3:", -1)),
                    e("span", _m, a(m.value.blake3 || "Not computed"), 1),
                    m.value.blake3 ? (t(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: T[1] || (T[1] = (J) => x(m.value.blake3))
                    }, "Copy")) : r("", !0)
                  ]),
                  e("div", $m, [
                    T[8] || (T[8] = e("span", { class: "detail-label" }, "SHA256:", -1)),
                    e("span", Cm, a(m.value.sha256 || "Not computed"), 1),
                    m.value.sha256 ? (t(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: T[2] || (T[2] = (J) => x(m.value.sha256))
                    }, "Copy")) : r("", !0)
                  ]),
                  e("div", xm, [
                    T[9] || (T[9] = e("span", { class: "detail-label" }, "Size:", -1)),
                    e("span", Sm, a(B(m.value.size)), 1)
                  ]),
                  e("div", Im, [
                    T[10] || (T[10] = e("span", { class: "detail-label" }, "Category:", -1)),
                    e("span", Em, a(m.value.category), 1)
                  ]),
                  e("div", Pm, [
                    T[11] || (T[11] = e("span", { class: "detail-label" }, "Last Seen:", -1)),
                    e("span", Mm, a(m.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                e("section", Rm, [
                  e("h4", Tm, "Locations (" + a(((de = m.value.locations) == null ? void 0 : de.length) || 0) + ")", 1),
                  (se = m.value.locations) != null && se.length ? (t(), o("div", Dm, [
                    (t(!0), o(W, null, ne(m.value.locations, (J, z) => (t(), o("div", {
                      key: z,
                      class: "location-item"
                    }, [
                      e("span", Lm, a(J.path), 1),
                      J.modified ? (t(), o("span", zm, "Modified: " + a(J.modified), 1)) : r("", !0),
                      J.path ? (t(), o("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (L) => R(J.path)
                      }, " Open File Location ", 8, Um)) : r("", !0)
                    ]))), 128))
                  ])) : (t(), o("div", Nm, "No locations found"))
                ]),
                e("section", Om, [
                  e("h4", Am, "Download Sources (" + a(((X = m.value.sources) == null ? void 0 : X.length) || 0) + ")", 1),
                  (ve = m.value.sources) != null && ve.length ? (t(), o("div", Bm, [
                    (t(!0), o(W, null, ne(m.value.sources, (J, z) => (t(), o("div", {
                      key: z,
                      class: "source-item"
                    }, [
                      e("span", Fm, a(J.type) + ":", 1),
                      e("a", {
                        href: J.url,
                        target: "_blank",
                        class: "source-url"
                      }, a(J.url), 9, Vm),
                      e("button", {
                        class: "remove-source-btn",
                        disabled: _.value === J.url,
                        onClick: (L) => F(J.url)
                      }, a(_.value === J.url ? "..." : "×"), 9, Wm)
                    ]))), 128))
                  ])) : (t(), o("div", Gm, " No download sources configured ")),
                  e("div", jm, [
                    ze(e("input", {
                      "onUpdate:modelValue": T[3] || (T[3] = (J) => y.value = J),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [Lt, y.value]
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      disabled: !y.value.trim() || k.value,
                      onClick: q
                    }, a(k.value ? "Adding..." : "Add Source"), 9, Hm)
                  ]),
                  b.value ? (t(), o("p", Km, a(b.value), 1)) : r("", !0),
                  D.value ? (t(), o("p", qm, a(D.value), 1)) : r("", !0)
                ])
              ])) : r("", !0)
            ];
          }),
          footer: l(() => [
            e("button", {
              class: "btn-secondary",
              onClick: T[4] || (T[4] = (de) => S.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (t(), P(Je, { to: "body" }, [
          M.value ? (t(), o("div", {
            key: 0,
            class: fe(["toast", M.value.type])
          }, a(M.value.message), 3)) : r("", !0)
        ]))
      ], 64);
    };
  }
}), Is = /* @__PURE__ */ ae(Ym, [["__scopeId", "data-v-f15cbb56"]]), Jm = /* @__PURE__ */ oe({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(s, { emit: c }) {
    const n = c, { getEnvironmentModels: i, getStatus: f } = je(), p = h([]), u = h([]), m = h("production"), d = h(!1), v = h(null), y = h(""), k = h(!1), _ = h(null);
    function b() {
      k.value = !1, n("navigate", "model-index");
    }
    const D = A(
      () => p.value.reduce((G, S) => G + (S.size || 0), 0)
    ), M = A(() => {
      if (!y.value.trim()) return p.value;
      const G = y.value.toLowerCase();
      return p.value.filter((S) => S.filename.toLowerCase().includes(G));
    }), $ = A(() => {
      if (!y.value.trim()) return u.value;
      const G = y.value.toLowerCase();
      return u.value.filter((S) => S.filename.toLowerCase().includes(G));
    }), C = A(() => {
      const G = {};
      for (const T of M.value) {
        const N = T.type || "other";
        G[N] || (G[N] = []), G[N].push(T);
      }
      const S = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(G).sort(([T], [N]) => {
        const de = S.indexOf(T), se = S.indexOf(N);
        return de >= 0 && se >= 0 ? de - se : de >= 0 ? -1 : se >= 0 ? 1 : T.localeCompare(N);
      }).map(([T, N]) => ({ type: T, models: N }));
    });
    function B(G) {
      if (!G) return "Unknown";
      const S = G / (1024 * 1024);
      return S >= 1024 ? `${(S / 1024).toFixed(1)} GB` : `${S.toFixed(0)} MB`;
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
    async function F() {
      d.value = !0, v.value = null;
      try {
        const G = await i();
        p.value = G, u.value = [];
        const S = await f();
        m.value = S.environment || "production";
      } catch (G) {
        v.value = G instanceof Error ? G.message : "Failed to load models";
      } finally {
        d.value = !1;
      }
    }
    return Ve(F), (G, S) => (t(), o(W, null, [
      w(ot, null, {
        header: l(() => [
          w(nt, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: S[0] || (S[0] = (T) => k.value = !0)
          })
        ]),
        search: l(() => [
          w(Wt, {
            modelValue: y.value,
            "onUpdate:modelValue": S[1] || (S[1] = (T) => y.value = T),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          d.value ? (t(), P(Et, {
            key: 0,
            message: "Loading environment models..."
          })) : v.value ? (t(), P(Pt, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: F
          }, null, 8, ["message"])) : (t(), o(W, { key: 2 }, [
            p.value.length ? (t(), P(is, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                g(" Total: " + a(p.value.length) + " models • " + a(B(D.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : r("", !0),
            (t(!0), o(W, null, ne(C.value, (T) => (t(), P(Oe, {
              key: T.type,
              title: T.type.toUpperCase(),
              count: T.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: l(() => [
                (t(!0), o(W, null, ne(T.models, (N) => (t(), P(st, {
                  key: N.hash || N.filename,
                  status: "synced"
                }, {
                  icon: l(() => [...S[4] || (S[4] = [
                    g("📦", -1)
                  ])]),
                  title: l(() => [
                    g(a(N.filename), 1)
                  ]),
                  subtitle: l(() => [
                    g(a(B(N.size)), 1)
                  ]),
                  details: l(() => [
                    w(Fe, {
                      label: "Used by:",
                      value: (N.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    w(Fe, {
                      label: "Path:",
                      value: N.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    w(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (de) => x(N)
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
            $.value.length ? (t(), P(Oe, {
              key: 1,
              title: "MISSING",
              count: $.value.length
            }, {
              default: l(() => [
                (t(!0), o(W, null, ne($.value, (T) => (t(), P(st, {
                  key: T.filename,
                  status: "broken"
                }, {
                  icon: l(() => [...S[6] || (S[6] = [
                    g("⚠", -1)
                  ])]),
                  title: l(() => [
                    g(a(T.filename), 1)
                  ]),
                  subtitle: l(() => [...S[7] || (S[7] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: l(() => {
                    var N;
                    return [
                      w(Fe, {
                        label: "Required by:",
                        value: ((N = T.workflow_names) == null ? void 0 : N.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: l(() => [
                    w(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (N) => q(T.filename)
                    }, {
                      default: l(() => [...S[8] || (S[8] = [
                        g(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    w(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (N) => R(T.filename)
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
            !M.value.length && !$.value.length ? (t(), P(wt, {
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
        onClose: S[2] || (S[2] = (T) => k.value = !1)
      }, {
        content: l(() => [
          e("p", null, [
            S[10] || (S[10] = g(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + a(m.value) + '"', 1),
            S[11] || (S[11] = g(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: l(() => [
          w(te, {
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
      _.value ? (t(), P(Is, {
        key: 0,
        identifier: _.value,
        onClose: S[3] || (S[3] = (T) => _.value = null)
      }, null, 8, ["identifier"])) : r("", !0)
    ], 64));
  }
}), Xm = /* @__PURE__ */ ae(Jm, [["__scopeId", "data-v-cb4f12b3"]]), Qm = {
  key: 0,
  class: "indexing-progress"
}, Zm = { class: "progress-info" }, ev = { class: "progress-label" }, tv = { class: "progress-count" }, sv = { class: "progress-bar" }, ov = { class: "modal-content" }, nv = { class: "modal-header" }, av = { class: "modal-body" }, lv = { class: "input-group" }, iv = { class: "current-path" }, rv = { class: "input-group" }, dv = { class: "modal-footer" }, cv = { class: "modal-content" }, uv = { class: "modal-header" }, mv = { class: "modal-body" }, vv = { class: "input-group" }, fv = { class: "input-group" }, pv = { class: "modal-footer" }, gv = /* @__PURE__ */ oe({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(s, { emit: c }) {
    const {
      getWorkspaceModels: n,
      scanWorkspaceModels: i,
      getModelsDirectory: f,
      setModelsDirectory: p
    } = je(), { addToQueue: u } = ls(), m = c, d = h([]), v = h(!1), y = h(!1), k = h(null), _ = h(""), b = h(!1), D = h(null), M = h(!1), $ = h(null), C = h(""), B = h(!1), x = h(!1), R = h(""), q = h(""), F = h(null), G = A(
      () => d.value.reduce((L, I) => L + (I.size || 0), 0)
    ), S = A(() => {
      if (!_.value.trim()) return d.value;
      const L = _.value.toLowerCase();
      return d.value.filter((I) => {
        const me = I, Q = I.sha256 || me.sha256_hash || "";
        return I.filename.toLowerCase().includes(L) || Q.toLowerCase().includes(L);
      });
    }), T = A(() => {
      const L = {};
      for (const me of S.value) {
        const Q = me.type || "other";
        L[Q] || (L[Q] = []), L[Q].push(me);
      }
      const I = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(L).sort(([me], [Q]) => {
        const _e = I.indexOf(me), Ce = I.indexOf(Q);
        return _e >= 0 && Ce >= 0 ? _e - Ce : _e >= 0 ? -1 : Ce >= 0 ? 1 : me.localeCompare(Q);
      }).map(([me, Q]) => ({ type: me, models: Q }));
    });
    function N(L) {
      if (!L) return "Unknown";
      const I = 1024 * 1024 * 1024, me = 1024 * 1024;
      return L >= I ? `${(L / I).toFixed(1)} GB` : L >= me ? `${(L / me).toFixed(0)} MB` : `${(L / 1024).toFixed(0)} KB`;
    }
    function de(L) {
      D.value = L.hash || L.filename;
    }
    async function se() {
      y.value = !0, k.value = null;
      try {
        const L = await i();
        await J(), L.changes > 0 && console.log(`Scan complete: ${L.changes} changes detected`);
      } catch (L) {
        k.value = L instanceof Error ? L.message : "Failed to scan models";
      } finally {
        y.value = !1;
      }
    }
    async function X() {
      if (C.value.trim()) {
        B.value = !0, k.value = null;
        try {
          const L = await p(C.value.trim());
          $.value = L.path, M.value = !1, C.value = "", await J(), console.log(`Directory changed: ${L.models_indexed} models indexed`), m("refresh");
        } catch (L) {
          k.value = L instanceof Error ? L.message : "Failed to change directory";
        } finally {
          B.value = !1;
        }
      }
    }
    function ve() {
      if (!R.value.trim() || !q.value.trim()) return;
      const L = q.value.split("/").pop() || "model.safetensors";
      u([{
        workflow: "__manual__",
        filename: L,
        url: R.value.trim(),
        targetPath: q.value.trim()
      }]), R.value = "", q.value = "", x.value = !1;
    }
    async function J() {
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
      J(), z();
    }), (L, I) => (t(), o(W, null, [
      w(ot, null, {
        header: l(() => [
          w(nt, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: I[2] || (I[2] = (me) => b.value = !0)
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
                onClick: I[0] || (I[0] = (me) => M.value = !0)
              }, {
                default: l(() => [...I[15] || (I[15] = [
                  g(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              w(te, {
                variant: "primary",
                size: "sm",
                onClick: I[1] || (I[1] = (me) => x.value = !0)
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
          F.value ? (t(), o("div", Qm, [
            e("div", Zm, [
              e("span", ev, a(F.value.message), 1),
              e("span", tv, a(F.value.current) + "/" + a(F.value.total), 1)
            ]),
            e("div", sv, [
              e("div", {
                class: "progress-fill",
                style: It({ width: `${F.value.current / F.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : r("", !0),
          w(Wt, {
            modelValue: _.value,
            "onUpdate:modelValue": I[3] || (I[3] = (me) => _.value = me),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          v.value || F.value ? (t(), P(Et, {
            key: 0,
            message: F.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : k.value ? (t(), P(Pt, {
            key: 1,
            message: k.value,
            retry: !0,
            onRetry: J
          }, null, 8, ["message"])) : (t(), o(W, { key: 2 }, [
            d.value.length ? (t(), P(is, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                g(" Total: " + a(d.value.length) + " models • " + a(N(G.value)), 1)
              ]),
              _: 1
            })) : r("", !0),
            (t(!0), o(W, null, ne(T.value, (me) => (t(), P(Oe, {
              key: me.type,
              title: me.type.toUpperCase(),
              count: me.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: l(() => [
                (t(!0), o(W, null, ne(me.models, (Q) => (t(), P(st, {
                  key: Q.sha256 || Q.filename,
                  status: "synced"
                }, {
                  icon: l(() => [...I[17] || (I[17] = [
                    g("📦", -1)
                  ])]),
                  title: l(() => [
                    g(a(Q.filename), 1)
                  ]),
                  subtitle: l(() => [
                    g(a(N(Q.size)), 1)
                  ]),
                  details: l(() => [
                    w(Fe, {
                      label: "Hash:",
                      value: Q.hash ? Q.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    w(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (_e) => de(Q)
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
            S.value.length ? r("", !0) : (t(), P(wt, {
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
        onClose: I[4] || (I[4] = (me) => b.value = !1)
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
      D.value ? (t(), P(Is, {
        key: 0,
        identifier: D.value,
        onClose: I[5] || (I[5] = (me) => D.value = null)
      }, null, 8, ["identifier"])) : r("", !0),
      (t(), P(Je, { to: "body" }, [
        M.value ? (t(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: I[9] || (I[9] = Be((me) => M.value = !1, ["self"]))
        }, [
          e("div", ov, [
            e("div", nv, [
              I[20] || (I[20] = e("h3", null, "Change Models Directory", -1)),
              e("button", {
                class: "modal-close",
                onClick: I[6] || (I[6] = (me) => M.value = !1)
              }, "✕")
            ]),
            e("div", av, [
              e("div", lv, [
                I[21] || (I[21] = e("label", null, "Current Directory", -1)),
                e("code", iv, a($.value || "Not set"), 1)
              ]),
              e("div", rv, [
                I[22] || (I[22] = e("label", null, "New Directory Path", -1)),
                w(yt, {
                  modelValue: C.value,
                  "onUpdate:modelValue": I[7] || (I[7] = (me) => C.value = me),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              I[23] || (I[23] = e("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            e("div", dv, [
              w(he, {
                variant: "secondary",
                onClick: I[8] || (I[8] = (me) => M.value = !1)
              }, {
                default: l(() => [...I[24] || (I[24] = [
                  g(" Cancel ", -1)
                ])]),
                _: 1
              }),
              w(he, {
                variant: "primary",
                disabled: !C.value.trim() || B.value,
                loading: B.value,
                onClick: X
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
      (t(), P(Je, { to: "body" }, [
        x.value ? (t(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: I[14] || (I[14] = Be((me) => x.value = !1, ["self"]))
        }, [
          e("div", cv, [
            e("div", uv, [
              I[25] || (I[25] = e("h3", null, "Download New Model", -1)),
              e("button", {
                class: "modal-close",
                onClick: I[10] || (I[10] = (me) => x.value = !1)
              }, "✕")
            ]),
            e("div", mv, [
              e("div", vv, [
                I[26] || (I[26] = e("label", null, "Download URL", -1)),
                w(yt, {
                  modelValue: R.value,
                  "onUpdate:modelValue": I[11] || (I[11] = (me) => R.value = me),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              e("div", fv, [
                I[27] || (I[27] = e("label", null, "Target Path (relative to models directory)", -1)),
                w(yt, {
                  modelValue: q.value,
                  "onUpdate:modelValue": I[12] || (I[12] = (me) => q.value = me),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              I[28] || (I[28] = e("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            e("div", pv, [
              w(he, {
                variant: "secondary",
                onClick: I[13] || (I[13] = (me) => x.value = !1)
              }, {
                default: l(() => [...I[29] || (I[29] = [
                  g(" Cancel ", -1)
                ])]),
                _: 1
              }),
              w(he, {
                variant: "primary",
                disabled: !R.value.trim() || !q.value.trim(),
                onClick: ve
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
}), hv = /* @__PURE__ */ ae(gv, [["__scopeId", "data-v-73b78d84"]]), yv = { class: "node-details" }, wv = { class: "status-row" }, kv = {
  key: 0,
  class: "detail-row"
}, bv = { class: "value" }, _v = { class: "detail-row" }, $v = { class: "value" }, Cv = {
  key: 1,
  class: "detail-row"
}, xv = { class: "value mono" }, Sv = {
  key: 2,
  class: "detail-row"
}, Iv = ["href"], Ev = {
  key: 3,
  class: "detail-row"
}, Pv = { class: "value mono small" }, Mv = { class: "detail-row" }, Rv = {
  key: 0,
  class: "value"
}, Tv = {
  key: 1,
  class: "workflow-list"
}, Dv = /* @__PURE__ */ oe({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(s, { emit: c }) {
    const n = s, i = c, f = A(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), p = A(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), u = A(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[n.node.source] || n.node.source);
    return (m, d) => (t(), P(at, {
      title: `NODE DETAILS: ${s.node.name}`,
      size: "md",
      onClose: d[1] || (d[1] = (v) => i("close"))
    }, {
      body: l(() => [
        e("div", yv, [
          e("div", wv, [
            d[2] || (d[2] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: fe(["status-badge", f.value])
            }, a(p.value), 3)
          ]),
          s.node.version ? (t(), o("div", kv, [
            d[3] || (d[3] = e("span", { class: "label" }, "Version:", -1)),
            e("span", bv, a(s.node.source === "development" ? "" : "v") + a(s.node.version), 1)
          ])) : r("", !0),
          e("div", _v, [
            d[4] || (d[4] = e("span", { class: "label" }, "Source:", -1)),
            e("span", $v, a(u.value), 1)
          ]),
          s.node.registry_id ? (t(), o("div", Cv, [
            d[5] || (d[5] = e("span", { class: "label" }, "Registry ID:", -1)),
            e("span", xv, a(s.node.registry_id), 1)
          ])) : r("", !0),
          s.node.repository ? (t(), o("div", Sv, [
            d[7] || (d[7] = e("span", { class: "label" }, "Repository:", -1)),
            e("a", {
              href: s.node.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "repo-link"
            }, [
              g(a(s.node.repository) + " ", 1),
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
            ], 8, Iv)
          ])) : r("", !0),
          s.node.download_url ? (t(), o("div", Ev, [
            d[8] || (d[8] = e("span", { class: "label" }, "Download URL:", -1)),
            e("span", Pv, a(s.node.download_url), 1)
          ])) : r("", !0),
          d[10] || (d[10] = e("div", { class: "section-divider" }, null, -1)),
          e("div", Mv, [
            d[9] || (d[9] = e("span", { class: "label" }, "Used by:", -1)),
            !s.node.used_in_workflows || s.node.used_in_workflows.length === 0 ? (t(), o("span", Rv, " Not used in any workflows ")) : (t(), o("div", Tv, [
              (t(!0), o(W, null, ne(s.node.used_in_workflows, (v) => (t(), o("span", {
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
}), Lv = /* @__PURE__ */ ae(Dv, [["__scopeId", "data-v-b342f626"]]), zv = { class: "dialog-message" }, Uv = {
  key: 0,
  class: "dialog-details"
}, Nv = {
  key: 1,
  class: "dialog-warning"
}, Ov = /* @__PURE__ */ oe({
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
  setup(s) {
    return (c, n) => (t(), P(at, {
      title: s.title,
      size: "sm",
      onClose: n[3] || (n[3] = (i) => c.$emit("cancel"))
    }, {
      body: l(() => [
        e("p", zv, a(s.message), 1),
        s.details && s.details.length ? (t(), o("div", Uv, [
          (t(!0), o(W, null, ne(s.details, (i, f) => (t(), o("div", {
            key: f,
            class: "detail-item"
          }, " • " + a(i), 1))), 128))
        ])) : r("", !0),
        s.warning ? (t(), o("p", Nv, [
          n[4] || (n[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          g(" " + a(s.warning), 1)
        ])) : r("", !0)
      ]),
      footer: l(() => [
        w(he, {
          variant: "secondary",
          onClick: n[0] || (n[0] = (i) => c.$emit("cancel"))
        }, {
          default: l(() => [
            g(a(s.cancelLabel), 1)
          ]),
          _: 1
        }),
        s.secondaryAction ? (t(), P(he, {
          key: 0,
          variant: "secondary",
          onClick: n[1] || (n[1] = (i) => c.$emit("secondary"))
        }, {
          default: l(() => [
            g(a(s.secondaryLabel), 1)
          ]),
          _: 1
        })) : r("", !0),
        w(he, {
          variant: s.destructive ? "danger" : "primary",
          onClick: n[2] || (n[2] = (i) => c.$emit("confirm"))
        }, {
          default: l(() => [
            g(a(s.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), qs = /* @__PURE__ */ ae(Ov, [["__scopeId", "data-v-3670b9f5"]]), Av = { class: "mismatch-warning" }, Bv = { class: "version-mismatch" }, Fv = { class: "version-actual" }, Vv = { class: "version-expected" }, Wv = { key: 0 }, Gv = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, jv = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, Hv = /* @__PURE__ */ oe({
  __name: "NodesSection",
  props: {
    versionMismatches: { default: () => [] }
  },
  emits: ["open-node-manager", "repair-environment", "toast"],
  setup(s, { emit: c }) {
    const n = s, i = c, { getNodes: f, trackNodeAsDev: p, installNode: u, uninstallNode: m } = je(), d = h({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), v = h(!1), y = h(null), k = h(""), _ = h(!1), b = h(null), D = h(null), M = A(() => {
      if (!k.value.trim()) return d.value.nodes;
      const se = k.value.toLowerCase();
      return d.value.nodes.filter(
        (X) => {
          var ve, J;
          return X.name.toLowerCase().includes(se) || ((ve = X.description) == null ? void 0 : ve.toLowerCase().includes(se)) || ((J = X.repository) == null ? void 0 : J.toLowerCase().includes(se));
        }
      );
    }), $ = A(
      () => M.value.filter((se) => se.installed && se.tracked)
    ), C = A(
      () => M.value.filter((se) => !se.installed && se.tracked)
    ), B = A(
      () => M.value.filter((se) => se.installed && !se.tracked)
    );
    function x(se) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[se] || se;
    }
    const R = A(() => n.versionMismatches.length > 0);
    function q(se) {
      return !se.used_in_workflows || se.used_in_workflows.length === 0 ? "Not used in any workflows" : se.used_in_workflows.length === 1 ? se.used_in_workflows[0] : `${se.used_in_workflows.length} workflows`;
    }
    function F(se) {
      b.value = se;
    }
    function G() {
      i("open-node-manager");
    }
    function S(se) {
      D.value = {
        title: "Track as Development Node",
        message: `Track "${se}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          D.value = null;
          try {
            v.value = !0;
            const X = await p(se);
            X.status === "success" ? (i("toast", `✓ Node "${se}" tracked as development`, "success"), await de()) : i("toast", `Failed to track node: ${X.message || "Unknown error"}`, "error");
          } catch (X) {
            i("toast", `Error tracking node: ${X instanceof Error ? X.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    function T(se) {
      D.value = {
        title: "Remove Untracked Node",
        message: `Remove "${se}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          D.value = null;
          try {
            v.value = !0;
            const X = await m(se);
            X.status === "success" ? (i("toast", `✓ Node "${se}" removed`, "success"), await de()) : i("toast", `Failed to remove node: ${X.message || "Unknown error"}`, "error");
          } catch (X) {
            i("toast", `Error removing node: ${X instanceof Error ? X.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    function N(se) {
      D.value = {
        title: "Install Missing Node",
        message: `Install "${se}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          D.value = null;
          try {
            v.value = !0;
            const X = await u(se);
            X.status === "success" ? (i("toast", `✓ Node "${se}" installed`, "success"), await de()) : i("toast", `Failed to install node: ${X.message || "Unknown error"}`, "error");
          } catch (X) {
            i("toast", `Error installing node: ${X instanceof Error ? X.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    async function de() {
      v.value = !0, y.value = null;
      try {
        d.value = await f();
      } catch (se) {
        y.value = se instanceof Error ? se.message : "Failed to load nodes";
      } finally {
        v.value = !1;
      }
    }
    return Ve(de), (se, X) => (t(), o(W, null, [
      w(ot, null, {
        header: l(() => [
          w(nt, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: X[0] || (X[0] = (ve) => _.value = !0)
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
          w(Wt, {
            modelValue: k.value,
            "onUpdate:modelValue": X[1] || (X[1] = (ve) => k.value = ve),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          v.value ? (t(), P(Et, {
            key: 0,
            message: "Loading nodes..."
          })) : y.value ? (t(), P(Pt, {
            key: 1,
            message: y.value,
            retry: !0,
            onRetry: de
          }, null, 8, ["message"])) : (t(), o(W, { key: 2 }, [
            d.value.total_count ? (t(), P(is, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                g(a(d.value.installed_count) + " installed ", 1),
                d.value.missing_count ? (t(), o(W, { key: 0 }, [
                  g(" • " + a(d.value.missing_count) + " missing", 1)
                ], 64)) : r("", !0),
                d.value.untracked_count ? (t(), o(W, { key: 1 }, [
                  g(" • " + a(d.value.untracked_count) + " untracked", 1)
                ], 64)) : r("", !0)
              ]),
              _: 1
            })) : r("", !0),
            R.value ? (t(), P(Oe, {
              key: 1,
              title: "VERSION MISMATCHES",
              count: s.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                e("div", Av, [
                  X[8] || (X[8] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, a(s.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (t(!0), o(W, null, ne(s.versionMismatches, (ve) => (t(), P(st, {
                  key: ve.name,
                  status: "warning"
                }, {
                  icon: l(() => [...X[9] || (X[9] = [
                    g("⚠", -1)
                  ])]),
                  title: l(() => [
                    g(a(ve.name), 1)
                  ]),
                  subtitle: l(() => [
                    e("span", Bv, [
                      e("span", Fv, a(ve.actual), 1),
                      X[10] || (X[10] = e("span", { class: "version-arrow" }, "→", -1)),
                      e("span", Vv, a(ve.expected), 1)
                    ])
                  ]),
                  actions: l(() => [
                    w(te, {
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
            B.value.length ? (t(), P(Oe, {
              key: 2,
              title: "UNTRACKED",
              count: B.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (t(!0), o(W, null, ne(B.value, (ve) => (t(), P(st, {
                  key: ve.name,
                  status: "warning"
                }, {
                  icon: l(() => [...X[12] || (X[12] = [
                    g("?", -1)
                  ])]),
                  title: l(() => [
                    g(a(ve.name), 1)
                  ]),
                  subtitle: l(() => [...X[13] || (X[13] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: l(() => [
                    w(Fe, {
                      label: "Used by:",
                      value: q(ve)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    w(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (J) => F(ve)
                    }, {
                      default: l(() => [...X[14] || (X[14] = [
                        g(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    w(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (J) => S(ve.name)
                    }, {
                      default: l(() => [...X[15] || (X[15] = [
                        g(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    w(te, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (J) => T(ve.name)
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
            $.value.length ? (t(), P(Oe, {
              key: 3,
              title: "INSTALLED",
              count: $.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (t(!0), o(W, null, ne($.value, (ve) => (t(), P(st, {
                  key: ve.name,
                  status: "synced"
                }, {
                  icon: l(() => [
                    g(a(ve.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: l(() => [
                    g(a(ve.name), 1)
                  ]),
                  subtitle: l(() => [
                    ve.version ? (t(), o("span", Wv, a(ve.source === "development" ? "" : "v") + a(ve.version), 1)) : (t(), o("span", Gv, "version unknown")),
                    e("span", jv, " • " + a(x(ve.source)), 1)
                  ]),
                  details: l(() => [
                    w(Fe, {
                      label: "Used by:",
                      value: q(ve)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    w(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (J) => F(ve)
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
            C.value.length ? (t(), P(Oe, {
              key: 4,
              title: "MISSING",
              count: C.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (t(!0), o(W, null, ne(C.value, (ve) => (t(), P(st, {
                  key: ve.name,
                  status: "missing"
                }, {
                  icon: l(() => [...X[19] || (X[19] = [
                    g("!", -1)
                  ])]),
                  title: l(() => [
                    g(a(ve.name), 1)
                  ]),
                  subtitle: l(() => [...X[20] || (X[20] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: l(() => [
                    w(Fe, {
                      label: "Required by:",
                      value: q(ve)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    w(te, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (J) => F(ve)
                    }, {
                      default: l(() => [...X[21] || (X[21] = [
                        g(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    w(te, {
                      variant: "primary",
                      size: "sm",
                      onClick: (J) => N(ve.name)
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
            !$.value.length && !C.value.length && !B.value.length ? (t(), P(wt, {
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
        onClose: X[4] || (X[4] = (ve) => _.value = !1)
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
            onClick: X[3] || (X[3] = (ve) => _.value = !1)
          }, {
            default: l(() => [...X[24] || (X[24] = [
              g(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      b.value ? (t(), P(Lv, {
        key: 0,
        node: b.value,
        onClose: X[5] || (X[5] = (ve) => b.value = null)
      }, null, 8, ["node"])) : r("", !0),
      D.value ? (t(), P(qs, {
        key: 1,
        title: D.value.title,
        message: D.value.message,
        warning: D.value.warning,
        "confirm-label": D.value.confirmLabel,
        destructive: D.value.destructive,
        onConfirm: D.value.onConfirm,
        onCancel: X[6] || (X[6] = (ve) => D.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : r("", !0)
    ], 64));
  }
}), Kv = /* @__PURE__ */ ae(Hv, [["__scopeId", "data-v-1555a802"]]);
function Ys(s) {
  return "has_conflicts" in s && s.has_conflicts === !0 && Array.isArray(s.workflow_conflicts);
}
const qv = { class: "remote-url-display" }, Yv = ["title"], Jv = ["title"], Xv = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Qv = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Zv = /* @__PURE__ */ oe({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(s) {
    const c = s, n = h(!1), i = A(() => {
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
    return (p, u) => (t(), o("div", qv, [
      e("span", {
        class: "url-text",
        title: s.url
      }, a(i.value), 9, Yv),
      e("button", {
        class: fe(["copy-btn", { copied: n.value }]),
        onClick: f,
        title: n.value ? "Copied!" : "Copy URL"
      }, [
        n.value ? (t(), o("svg", Qv, [...u[1] || (u[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (t(), o("svg", Xv, [...u[0] || (u[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, Jv)
    ]));
  }
}), ef = /* @__PURE__ */ ae(Zv, [["__scopeId", "data-v-7768a58d"]]), tf = { class: "remote-title" }, sf = {
  key: 0,
  class: "default-badge"
}, of = {
  key: 1,
  class: "sync-badge"
}, nf = {
  key: 0,
  class: "ahead"
}, af = {
  key: 1,
  class: "behind"
}, lf = {
  key: 1,
  class: "synced"
}, rf = ["href"], df = {
  key: 1,
  class: "remote-url-text"
}, cf = /* @__PURE__ */ oe({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(s) {
    const c = s, n = A(() => c.fetchingRemote === c.remote.name), i = A(() => c.remote.is_default), f = A(() => c.syncStatus && c.syncStatus.behind > 0), p = A(() => c.syncStatus && c.syncStatus.ahead > 0), u = A(() => c.remote.push_url !== c.remote.fetch_url), m = A(() => {
      const v = c.remote.fetch_url, y = v.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return y ? `https://${y[1]}/${y[2]}` : v.startsWith("https://") || v.startsWith("http://") ? v.replace(/\.git$/, "") : null;
    }), d = A(() => c.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (v, y) => (t(), P(st, {
      status: i.value ? "synced" : void 0
    }, Nt({
      icon: l(() => [
        g(a(i.value ? "🔗" : "🌐"), 1)
      ]),
      title: l(() => [
        e("div", tf, [
          e("span", null, a(s.remote.name), 1),
          i.value ? (t(), o("span", sf, "DEFAULT")) : r("", !0),
          s.syncStatus ? (t(), o("span", of, [
            s.syncStatus.ahead > 0 || s.syncStatus.behind > 0 ? (t(), o(W, { key: 0 }, [
              s.syncStatus.ahead > 0 ? (t(), o("span", nf, "↑" + a(s.syncStatus.ahead), 1)) : r("", !0),
              s.syncStatus.behind > 0 ? (t(), o("span", af, "↓" + a(s.syncStatus.behind), 1)) : r("", !0)
            ], 64)) : (t(), o("span", lf, "✓ synced"))
          ])) : r("", !0)
        ])
      ]),
      subtitle: l(() => [
        m.value ? (t(), o("a", {
          key: 0,
          href: m.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url-link",
          onClick: y[0] || (y[0] = Be(() => {
          }, ["stop"]))
        }, a(d.value), 9, rf)) : (t(), o("span", df, a(d.value), 1))
      ]),
      actions: l(() => [
        w(te, {
          variant: "primary",
          size: "xs",
          loading: n.value,
          onClick: y[1] || (y[1] = (k) => v.$emit("fetch", s.remote.name))
        }, {
          default: l(() => [...y[6] || (y[6] = [
            g(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        w(te, {
          variant: f.value ? "primary" : "secondary",
          size: "xs",
          disabled: !s.syncStatus,
          onClick: y[2] || (y[2] = (k) => v.$emit("pull", s.remote.name))
        }, {
          default: l(() => [
            g(" Pull" + a(s.syncStatus && s.syncStatus.behind > 0 ? ` ↓${s.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        w(te, {
          variant: p.value ? "primary" : "secondary",
          size: "xs",
          disabled: !s.syncStatus,
          onClick: y[3] || (y[3] = (k) => v.$emit("push", s.remote.name))
        }, {
          default: l(() => [
            g(" Push" + a(s.syncStatus && s.syncStatus.ahead > 0 ? ` ↑${s.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        w(te, {
          variant: "secondary",
          size: "xs",
          onClick: y[4] || (y[4] = (k) => v.$emit("edit", s.remote.name))
        }, {
          default: l(() => [...y[7] || (y[7] = [
            g(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        i.value ? r("", !0) : (t(), P(te, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: y[5] || (y[5] = (k) => v.$emit("remove", s.remote.name))
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
          s.remote.push_url !== s.remote.fetch_url ? (t(), P(Fe, {
            key: 0,
            label: "Push URL:"
          }, {
            default: l(() => [
              w(ef, {
                url: s.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : r("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), uf = /* @__PURE__ */ ae(cf, [["__scopeId", "data-v-8310f3a8"]]), mf = ["for"], vf = {
  key: 0,
  class: "base-form-field-required"
}, ff = { class: "base-form-field-input" }, pf = {
  key: 1,
  class: "base-form-field-error"
}, gf = {
  key: 2,
  class: "base-form-field-hint"
}, hf = /* @__PURE__ */ oe({
  __name: "BaseFormField",
  props: {
    label: {},
    error: {},
    hint: {},
    required: { type: Boolean, default: !1 },
    fullWidth: { type: Boolean, default: !0 },
    id: {}
  },
  setup(s) {
    const c = s, n = A(() => c.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (i, f) => (t(), o("div", {
      class: fe(["base-form-field", { "full-width": s.fullWidth }])
    }, [
      s.label ? (t(), o("label", {
        key: 0,
        for: n.value,
        class: "base-form-field-label"
      }, [
        g(a(s.label) + " ", 1),
        s.required ? (t(), o("span", vf, "*")) : r("", !0)
      ], 8, mf)) : r("", !0),
      e("div", ff, [
        Te(i.$slots, "default", {}, void 0, !0)
      ]),
      s.error ? (t(), o("span", pf, a(s.error), 1)) : s.hint ? (t(), o("span", gf, a(s.hint), 1)) : r("", !0)
    ], 2));
  }
}), gs = /* @__PURE__ */ ae(hf, [["__scopeId", "data-v-9a1cf296"]]), yf = { class: "remote-form" }, wf = { class: "form-header" }, kf = { class: "form-body" }, bf = {
  key: 0,
  class: "form-error"
}, _f = { class: "form-actions" }, $f = /* @__PURE__ */ oe({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(s, { emit: c }) {
    const n = s, i = c, f = h({
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
    const m = A(() => f.value.name.trim() !== "" && f.value.fetchUrl.trim() !== "");
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
    return (v, y) => (t(), o("div", yf, [
      e("div", wf, [
        w(mt, null, {
          default: l(() => [
            g(a(s.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", kf, [
        w(gs, {
          label: "Remote Name",
          required: ""
        }, {
          default: l(() => [
            w(yt, {
              modelValue: f.value.name,
              "onUpdate:modelValue": y[0] || (y[0] = (k) => f.value.name = k),
              disabled: s.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        w(gs, {
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
        w(gs, { label: "Push URL (optional)" }, {
          default: l(() => [
            w(yt, {
              modelValue: f.value.pushUrl,
              "onUpdate:modelValue": y[2] || (y[2] = (k) => f.value.pushUrl = k),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        u.value ? (t(), o("div", bf, a(u.value), 1)) : r("", !0)
      ]),
      e("div", _f, [
        w(te, {
          variant: "primary",
          size: "md",
          disabled: !m.value,
          loading: p.value,
          onClick: d
        }, {
          default: l(() => [
            g(a(s.mode === "add" ? "Add Remote" : "Update URL"), 1)
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
}), Cf = /* @__PURE__ */ ae($f, [["__scopeId", "data-v-56021b18"]]), xf = { class: "conflict-summary-box" }, Sf = { class: "summary-header" }, If = { class: "summary-text" }, Ef = { key: 0 }, Pf = {
  key: 1,
  class: "all-resolved"
}, Mf = { class: "summary-progress" }, Rf = { class: "progress-bar" }, Tf = { class: "progress-text" }, Df = /* @__PURE__ */ oe({
  __name: "ConflictSummaryBox",
  props: {
    conflictCount: {},
    resolvedCount: {},
    operationType: {}
  },
  setup(s) {
    const c = s, n = A(
      () => c.conflictCount > 0 ? c.resolvedCount / c.conflictCount * 100 : 0
    );
    return (i, f) => (t(), o("div", xf, [
      e("div", Sf, [
        f[0] || (f[0] = e("span", { class: "summary-icon" }, "⚠", -1)),
        e("div", If, [
          e("strong", null, a(s.conflictCount) + " conflict" + a(s.conflictCount !== 1 ? "s" : "") + " detected", 1),
          s.resolvedCount < s.conflictCount ? (t(), o("p", Ef, " Resolve all conflicts before " + a(s.operationType) + "ing ", 1)) : (t(), o("p", Pf, " All conflicts resolved - ready to " + a(s.operationType), 1))
        ])
      ]),
      e("div", Mf, [
        e("div", Rf, [
          e("div", {
            class: "progress-fill",
            style: It({ width: n.value + "%" })
          }, null, 4)
        ]),
        e("span", Tf, a(s.resolvedCount) + " / " + a(s.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), Lf = /* @__PURE__ */ ae(Df, [["__scopeId", "data-v-4e9e6cc9"]]), zf = { class: "modal-header" }, Uf = { class: "modal-title" }, Nf = { class: "modal-body" }, Of = {
  key: 0,
  class: "error-box"
}, Af = {
  key: 0,
  class: "error-hint"
}, Bf = {
  key: 1,
  class: "loading-state"
}, Ff = { class: "commit-summary" }, Vf = {
  key: 0,
  class: "changes-section"
}, Wf = {
  key: 0,
  class: "change-group",
  open: ""
}, Gf = { class: "change-count" }, jf = { class: "change-list" }, Hf = {
  key: 0,
  class: "conflict-badge"
}, Kf = {
  key: 1,
  class: "change-group"
}, qf = { class: "change-count" }, Yf = { class: "change-list" }, Jf = {
  key: 2,
  class: "change-group"
}, Xf = { class: "change-count" }, Qf = { class: "change-list" }, Zf = {
  key: 2,
  class: "strategy-section"
}, ep = { class: "radio-group" }, tp = { class: "radio-option" }, sp = { class: "radio-option" }, op = { class: "radio-option" }, np = {
  key: 3,
  class: "up-to-date"
}, ap = { class: "modal-actions" }, Us = "comfygit.pullModelStrategy", lp = /* @__PURE__ */ oe({
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
  setup(s, { emit: c }) {
    const n = s, i = c, f = h(localStorage.getItem(Us) || "skip");
    Ct(f, ($) => {
      localStorage.setItem(Us, $);
    });
    const p = A(() => {
      var $;
      return (($ = n.error) == null ? void 0 : $.toLowerCase().includes("unrelated histories")) ?? !1;
    }), u = A(() => {
      if (!n.preview) return 0;
      const $ = n.preview.changes.workflows;
      return $.added.length + $.modified.length + $.deleted.length;
    }), m = A(() => n.preview ? n.preview.changes.nodes.to_install.length : 0), d = A(() => {
      var $;
      return u.value > 0 || m.value > 0 || ((($ = n.preview) == null ? void 0 : $.changes.models.count) || 0) > 0;
    }), v = A(() => n.preview && Ys(n.preview) ? n.preview : null), y = A(() => {
      var $;
      return (($ = v.value) == null ? void 0 : $.workflow_conflicts.length) ?? 0;
    }), k = A(() => {
      var $;
      return (($ = n.conflictResolutions) == null ? void 0 : $.size) ?? 0;
    }), _ = A(
      () => y.value > 0 && k.value === y.value
    ), b = A(() => !(!n.preview || n.preview.has_uncommitted_changes || v.value && !_.value));
    function D($) {
      if (!v.value) return !1;
      const C = $.replace(/\.json$/, "");
      return v.value.workflow_conflicts.some((B) => B.name === C);
    }
    function M($) {
      const C = n.conflictResolutions ? Array.from(n.conflictResolutions.values()) : void 0;
      i("pull", { modelStrategy: f.value, force: $, resolutions: C });
    }
    return ($, C) => {
      var B, x;
      return t(), P(Je, { to: "body" }, [
        s.show ? (t(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: C[11] || (C[11] = (R) => $.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: C[10] || (C[10] = Be(() => {
            }, ["stop"]))
          }, [
            e("div", zf, [
              e("h3", Uf, "PULL FROM " + a(s.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: C[0] || (C[0] = (R) => $.$emit("close"))
              }, "✕")
            ]),
            e("div", Nf, [
              s.error ? (t(), o("div", Of, [
                C[13] || (C[13] = e("span", { class: "error-icon" }, "✕", -1)),
                e("div", null, [
                  C[12] || (C[12] = e("strong", null, "PULL FAILED", -1)),
                  e("p", null, a(s.error), 1),
                  p.value ? (t(), o("p", Af, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : r("", !0)
                ])
              ])) : s.loading ? (t(), o("div", Bf, [...C[14] || (C[14] = [
                e("span", { class: "spinner" }, "⟳", -1),
                g(" Loading preview... ", -1)
              ])])) : (B = s.preview) != null && B.has_uncommitted_changes ? (t(), o(W, { key: 2 }, [
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
              ], 64)) : s.preview ? (t(), o(W, { key: 3 }, [
                e("div", Ff, [
                  C[17] || (C[17] = e("span", { class: "icon" }, "📥", -1)),
                  g(" " + a(s.preview.commits_behind) + " commit" + a(s.preview.commits_behind !== 1 ? "s" : "") + " from " + a(s.preview.remote) + "/" + a(s.preview.branch), 1)
                ]),
                d.value ? (t(), o("div", Vf, [
                  C[21] || (C[21] = e("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  u.value > 0 ? (t(), o("details", Wf, [
                    e("summary", null, [
                      C[18] || (C[18] = e("span", { class: "change-type" }, "Workflows", -1)),
                      e("span", Gf, a(u.value) + " changes", 1)
                    ]),
                    e("div", jf, [
                      (t(!0), o(W, null, ne(s.preview.changes.workflows.added, (R) => (t(), o("div", {
                        key: "a-" + R,
                        class: "change-item add"
                      }, " + " + a(R), 1))), 128)),
                      (t(!0), o(W, null, ne(s.preview.changes.workflows.modified, (R) => (t(), o("div", {
                        key: "m-" + R,
                        class: "change-item modify"
                      }, [
                        g(" ~ " + a(R) + " ", 1),
                        D(R) ? (t(), o("span", Hf, "CONFLICT")) : r("", !0)
                      ]))), 128)),
                      (t(!0), o(W, null, ne(s.preview.changes.workflows.deleted, (R) => (t(), o("div", {
                        key: "d-" + R,
                        class: "change-item delete"
                      }, " - " + a(R), 1))), 128))
                    ])
                  ])) : r("", !0),
                  m.value > 0 ? (t(), o("details", Kf, [
                    e("summary", null, [
                      C[19] || (C[19] = e("span", { class: "change-type" }, "Nodes", -1)),
                      e("span", qf, a(m.value) + " to install", 1)
                    ]),
                    e("div", Yf, [
                      (t(!0), o(W, null, ne(s.preview.changes.nodes.to_install, (R) => (t(), o("div", {
                        key: R,
                        class: "change-item add"
                      }, " + " + a(R), 1))), 128))
                    ])
                  ])) : r("", !0),
                  s.preview.changes.models.count > 0 ? (t(), o("details", Jf, [
                    e("summary", null, [
                      C[20] || (C[20] = e("span", { class: "change-type" }, "Models", -1)),
                      e("span", Xf, a(s.preview.changes.models.count) + " referenced", 1)
                    ]),
                    e("div", Qf, [
                      (t(!0), o(W, null, ne(s.preview.changes.models.referenced, (R) => (t(), o("div", {
                        key: R,
                        class: "change-item"
                      }, a(R), 1))), 128))
                    ])
                  ])) : r("", !0)
                ])) : r("", !0),
                v.value ? (t(), P(Lf, {
                  key: 1,
                  "conflict-count": y.value,
                  "resolved-count": k.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : r("", !0),
                s.preview.changes.models.count > 0 ? (t(), o("div", Zf, [
                  C[26] || (C[26] = e("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  e("div", ep, [
                    e("label", tp, [
                      ze(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[1] || (C[1] = (R) => f.value = R),
                        value: "all"
                      }, null, 512), [
                        [Dt, f.value]
                      ]),
                      C[22] || (C[22] = e("span", null, "Download all models", -1))
                    ]),
                    e("label", sp, [
                      ze(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[2] || (C[2] = (R) => f.value = R),
                        value: "required"
                      }, null, 512), [
                        [Dt, f.value]
                      ]),
                      C[23] || (C[23] = e("span", null, "Download required only", -1))
                    ]),
                    e("label", op, [
                      ze(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[3] || (C[3] = (R) => f.value = R),
                        value: "skip"
                      }, null, 512), [
                        [Dt, f.value]
                      ]),
                      C[24] || (C[24] = e("span", null, "Skip model downloads", -1)),
                      C[25] || (C[25] = e("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  C[27] || (C[27] = e("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : r("", !0),
                s.preview.commits_behind === 0 ? (t(), o("div", np, [
                  C[28] || (C[28] = e("span", { class: "icon" }, "✓", -1)),
                  g(" Already up to date with " + a(s.preview.remote) + "/" + a(s.preview.branch), 1)
                ])) : r("", !0)
              ], 64)) : r("", !0)
            ]),
            e("div", ap, [
              w(te, {
                variant: "secondary",
                onClick: C[4] || (C[4] = (R) => $.$emit("close"))
              }, {
                default: l(() => [...C[29] || (C[29] = [
                  g(" Cancel ", -1)
                ])]),
                _: 1
              }),
              s.error ? (t(), o(W, { key: 0 }, [
                w(te, {
                  variant: "secondary",
                  loading: s.pulling,
                  onClick: C[5] || (C[5] = (R) => M(!1))
                }, {
                  default: l(() => [...C[30] || (C[30] = [
                    g(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                w(te, {
                  variant: "destructive",
                  loading: s.pulling,
                  onClick: C[6] || (C[6] = (R) => M(!0))
                }, {
                  default: l(() => [...C[31] || (C[31] = [
                    g(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (x = s.preview) != null && x.has_uncommitted_changes ? (t(), P(te, {
                key: 1,
                variant: "destructive",
                loading: s.pulling,
                onClick: C[7] || (C[7] = (R) => M(!0))
              }, {
                default: l(() => [...C[32] || (C[32] = [
                  g(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : s.preview && s.preview.commits_behind > 0 ? (t(), o(W, { key: 2 }, [
                v.value && !_.value ? (t(), P(te, {
                  key: 0,
                  variant: "primary",
                  onClick: C[8] || (C[8] = (R) => i("openConflictResolution"))
                }, {
                  default: l(() => [
                    g(" Resolve Conflicts (" + a(k.value) + "/" + a(y.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (t(), P(te, {
                  key: 1,
                  variant: "primary",
                  loading: s.pulling,
                  disabled: !b.value,
                  onClick: C[9] || (C[9] = (R) => M(!1))
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
}), ip = /* @__PURE__ */ ae(lp, [["__scopeId", "data-v-300c7b2f"]]), rp = { class: "modal-header" }, dp = { class: "modal-title" }, cp = { class: "modal-body" }, up = {
  key: 0,
  class: "loading-state"
}, mp = {
  key: 1,
  class: "warning-box"
}, vp = {
  key: 0,
  class: "commits-section"
}, fp = { class: "commit-list" }, pp = { class: "commit-hash" }, gp = { class: "commit-message" }, hp = { class: "commit-date" }, yp = { class: "force-option" }, wp = { class: "checkbox-option" }, kp = { class: "commit-summary" }, bp = {
  key: 0,
  class: "commits-section"
}, _p = { class: "commit-list" }, $p = { class: "commit-hash" }, Cp = { class: "commit-message" }, xp = { class: "commit-date" }, Sp = {
  key: 1,
  class: "up-to-date"
}, Ip = { class: "modal-actions" }, Ep = /* @__PURE__ */ oe({
  __name: "PushModal",
  props: {
    show: { type: Boolean },
    remoteName: {},
    preview: {},
    loading: { type: Boolean },
    pushing: { type: Boolean }
  },
  emits: ["close", "push", "pull-first"],
  setup(s, { emit: c }) {
    const n = c, i = h(!1);
    function f(p) {
      n("push", { force: p });
    }
    return (p, u) => {
      var m, d, v;
      return t(), P(Je, { to: "body" }, [
        s.show ? (t(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: u[7] || (u[7] = (y) => p.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: u[6] || (u[6] = Be(() => {
            }, ["stop"]))
          }, [
            e("div", rp, [
              e("h3", dp, "PUSH TO " + a(s.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: u[0] || (u[0] = (y) => p.$emit("close"))
              }, "✕")
            ]),
            e("div", cp, [
              s.loading ? (t(), o("div", up, [...u[8] || (u[8] = [
                e("span", { class: "spinner" }, "⟳", -1),
                g(" Loading preview... ", -1)
              ])])) : (m = s.preview) != null && m.has_uncommitted_changes ? (t(), o("div", mp, [...u[9] || (u[9] = [
                e("span", { class: "warning-icon" }, "⚠", -1),
                e("div", null, [
                  e("strong", null, "UNCOMMITTED CHANGES"),
                  e("p", null, "Commit your changes before pushing.")
                ], -1)
              ])])) : (d = s.preview) != null && d.remote_has_new_commits ? (t(), o(W, { key: 2 }, [
                u[13] || (u[13] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("div", null, [
                    e("strong", null, "REMOTE HAS NEW COMMITS"),
                    e("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                  ])
                ], -1)),
                s.preview.commits_ahead > 0 ? (t(), o("div", vp, [
                  u[10] || (u[10] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", fp, [
                    (t(!0), o(W, null, ne(s.preview.commits, (y) => (t(), o("div", {
                      key: y.hash,
                      class: "commit-item"
                    }, [
                      e("span", pp, a(y.short_hash || y.hash.slice(0, 7)), 1),
                      e("span", gp, a(y.message), 1),
                      e("span", hp, a(y.date_relative || y.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                e("div", yp, [
                  e("label", wp, [
                    ze(e("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": u[1] || (u[1] = (y) => i.value = y)
                    }, null, 512), [
                      [cs, i.value]
                    ]),
                    u[11] || (u[11] = e("span", null, "Force push (overwrite remote)", -1))
                  ]),
                  u[12] || (u[12] = e("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                ])
              ], 64)) : s.preview ? (t(), o(W, { key: 3 }, [
                e("div", kp, [
                  u[14] || (u[14] = e("span", { class: "icon" }, "📤", -1)),
                  g(" Pushing " + a(s.preview.commits_ahead) + " commit" + a(s.preview.commits_ahead !== 1 ? "s" : "") + " to " + a(s.preview.remote) + "/" + a(s.preview.branch), 1)
                ]),
                s.preview.commits_ahead > 0 ? (t(), o("div", bp, [
                  u[15] || (u[15] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", _p, [
                    (t(!0), o(W, null, ne(s.preview.commits, (y) => (t(), o("div", {
                      key: y.hash,
                      class: "commit-item"
                    }, [
                      e("span", $p, a(y.short_hash || y.hash.slice(0, 7)), 1),
                      e("span", Cp, a(y.message), 1),
                      e("span", xp, a(y.date_relative || y.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (t(), o("div", Sp, [
                  u[16] || (u[16] = e("span", { class: "icon" }, "✓", -1)),
                  g(" Nothing to push - already up to date with " + a(s.preview.remote) + "/" + a(s.preview.branch), 1)
                ]))
              ], 64)) : r("", !0)
            ]),
            e("div", Ip, [
              w(te, {
                variant: "secondary",
                onClick: u[2] || (u[2] = (y) => p.$emit("close"))
              }, {
                default: l(() => [...u[17] || (u[17] = [
                  g(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (v = s.preview) != null && v.remote_has_new_commits ? (t(), o(W, { key: 0 }, [
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
                  loading: s.pushing,
                  onClick: u[4] || (u[4] = (y) => f(!0))
                }, {
                  default: l(() => [...u[19] || (u[19] = [
                    g(" Force Push ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ], 64)) : s.preview && s.preview.commits_ahead > 0 && !s.preview.has_uncommitted_changes ? (t(), P(te, {
                key: 1,
                variant: "primary",
                loading: s.pushing,
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
}), Pp = /* @__PURE__ */ ae(Ep, [["__scopeId", "data-v-bc6ded53"]]), Mp = { class: "resolution-choice-group" }, Rp = ["disabled"], Tp = ["disabled"], Dp = /* @__PURE__ */ oe({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(s) {
    return (c, n) => (t(), o("div", Mp, [
      e("button", {
        class: fe(["choice-btn", "mine", { selected: s.modelValue === "take_base" }]),
        onClick: n[0] || (n[0] = (i) => c.$emit("update:modelValue", "take_base")),
        disabled: s.disabled
      }, [...n[2] || (n[2] = [
        e("span", { class: "choice-icon" }, "◀", -1),
        e("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, Rp),
      e("button", {
        class: fe(["choice-btn", "theirs", { selected: s.modelValue === "take_target" }]),
        onClick: n[1] || (n[1] = (i) => c.$emit("update:modelValue", "take_target")),
        disabled: s.disabled
      }, [...n[3] || (n[3] = [
        e("span", { class: "choice-label" }, "Keep Theirs", -1),
        e("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, Tp)
    ]));
  }
}), Lp = /* @__PURE__ */ ae(Dp, [["__scopeId", "data-v-985715ed"]]), zp = { class: "conflict-header" }, Up = { class: "conflict-info" }, Np = { class: "workflow-name" }, Op = { class: "conflict-description" }, Ap = {
  key: 0,
  class: "resolved-badge"
}, Bp = { class: "resolved-text" }, Fp = { class: "conflict-hashes" }, Vp = { class: "hash-item" }, Wp = { class: "hash-item" }, Gp = { class: "conflict-actions" }, jp = /* @__PURE__ */ oe({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(s, { emit: c }) {
    const n = s, i = c, f = h(n.resolution);
    Ct(() => n.resolution, (d) => {
      f.value = d;
    }), Ct(f, (d) => {
      d && i("resolve", d);
    });
    const p = A(() => f.value !== null), u = A(() => n.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), m = A(() => {
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
      return t(), o("div", {
        class: fe(["conflict-item", { resolved: p.value }])
      }, [
        e("div", zp, [
          v[2] || (v[2] = e("span", { class: "conflict-icon" }, "⚠", -1)),
          e("div", Up, [
            e("code", Np, a(s.conflict.name) + ".json", 1),
            e("div", Op, a(u.value), 1)
          ]),
          p.value ? (t(), o("div", Ap, [
            v[1] || (v[1] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", Bp, a(m.value), 1)
          ])) : r("", !0)
        ]),
        e("div", Fp, [
          e("span", Vp, [
            v[3] || (v[3] = g("Your: ", -1)),
            e("code", null, a(((y = s.conflict.base_hash) == null ? void 0 : y.slice(0, 8)) || "n/a"), 1)
          ]),
          e("span", Wp, [
            v[4] || (v[4] = g("Theirs: ", -1)),
            e("code", null, a(((k = s.conflict.target_hash) == null ? void 0 : k.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        e("div", Gp, [
          w(Lp, {
            modelValue: f.value,
            "onUpdate:modelValue": v[0] || (v[0] = (_) => f.value = _),
            disabled: s.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), Hp = /* @__PURE__ */ ae(jp, [["__scopeId", "data-v-506d3bbf"]]), Kp = { class: "resolution-content" }, qp = {
  key: 0,
  class: "error-box"
}, Yp = { class: "resolution-header" }, Jp = { class: "header-stats" }, Xp = { class: "stat" }, Qp = { class: "stat-value" }, Zp = { class: "stat resolved" }, eg = { class: "stat-value" }, tg = {
  key: 0,
  class: "stat pending"
}, sg = { class: "stat-value" }, og = { class: "conflicts-list" }, ng = {
  key: 1,
  class: "all-resolved-message"
}, ag = /* @__PURE__ */ oe({
  __name: "WorkflowResolutionModal",
  props: {
    workflowConflicts: {},
    resolutions: {},
    operationType: {},
    validating: { type: Boolean },
    error: {}
  },
  emits: ["close", "resolve", "apply"],
  setup(s, { emit: c }) {
    const n = s, i = c, f = A(() => n.resolutions.size), p = A(() => n.workflowConflicts.length - f.value), u = A(() => f.value === n.workflowConflicts.length), m = A(
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
    return (_, b) => (t(), P(at, {
      title: `Resolve Workflow Conflicts: ${s.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: y
    }, {
      body: l(() => [
        e("div", Kp, [
          s.error ? (t(), o("div", qp, [
            b[1] || (b[1] = e("span", { class: "error-icon" }, "✕", -1)),
            e("div", null, [
              b[0] || (b[0] = e("strong", null, "Validation Failed", -1)),
              e("p", null, a(s.error), 1)
            ])
          ])) : r("", !0),
          e("div", Yp, [
            e("div", Jp, [
              e("div", Xp, [
                e("span", Qp, a(s.workflowConflicts.length), 1),
                b[2] || (b[2] = e("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              e("div", Zp, [
                e("span", eg, a(f.value), 1),
                b[3] || (b[3] = e("span", { class: "stat-label" }, "resolved", -1))
              ]),
              p.value > 0 ? (t(), o("div", tg, [
                e("span", sg, a(p.value), 1),
                b[4] || (b[4] = e("span", { class: "stat-label" }, "pending", -1))
              ])) : r("", !0)
            ]),
            b[5] || (b[5] = e("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          e("div", og, [
            (t(!0), o(W, null, ne(s.workflowConflicts, (D) => (t(), P(Hp, {
              key: D.name,
              conflict: D,
              resolution: d(D.name),
              onResolve: (M) => v(D.name, M)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          u.value ? (t(), o("div", ng, [
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
          disabled: !u.value || s.validating,
          loading: s.validating,
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
}), lg = /* @__PURE__ */ ae(ag, [["__scopeId", "data-v-c58d150d"]]), ig = { class: "node-conflict-item" }, rg = { class: "node-header" }, dg = { class: "node-name" }, cg = { class: "node-id" }, ug = { class: "version-comparison" }, mg = { class: "version yours" }, vg = { class: "version theirs" }, fg = { class: "chosen-version" }, pg = { class: "chosen" }, gg = { class: "chosen-reason" }, hg = { class: "affected-workflows" }, yg = { class: "wf-source" }, wg = { class: "wf-version" }, kg = /* @__PURE__ */ oe({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(s) {
    return (c, n) => (t(), o("div", ig, [
      e("div", rg, [
        e("code", dg, a(s.conflict.node_name), 1),
        e("span", cg, "(" + a(s.conflict.node_id) + ")", 1)
      ]),
      e("div", ug, [
        e("div", mg, [
          n[0] || (n[0] = e("span", { class: "label" }, "Your version:", -1)),
          e("code", null, a(s.conflict.base_version), 1)
        ]),
        n[2] || (n[2] = e("span", { class: "arrow" }, "→", -1)),
        e("div", vg, [
          n[1] || (n[1] = e("span", { class: "label" }, "Their version:", -1)),
          e("code", null, a(s.conflict.target_version), 1)
        ])
      ]),
      e("div", fg, [
        n[3] || (n[3] = e("span", { class: "label" }, "Will install:", -1)),
        e("code", pg, a(s.conflict.chosen_version), 1),
        e("span", gg, a(s.conflict.chosen_reason), 1)
      ]),
      e("details", hg, [
        e("summary", null, " Affected workflows (" + a(s.conflict.affected_workflows.length) + ") ", 1),
        e("ul", null, [
          (t(!0), o(W, null, ne(s.conflict.affected_workflows, (i) => (t(), o("li", {
            key: i.name
          }, [
            e("code", null, a(i.name), 1),
            e("span", yg, "(" + a(i.source === "base" ? "yours" : "theirs") + ")", 1),
            e("span", wg, "needs v" + a(i.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), bg = /* @__PURE__ */ ae(kg, [["__scopeId", "data-v-8b626725"]]), _g = { class: "validation-content" }, $g = {
  key: 0,
  class: "compatible-message"
}, Cg = { class: "conflicts-list" }, xg = {
  key: 2,
  class: "warnings-section"
}, Sg = /* @__PURE__ */ oe({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(s, { emit: c }) {
    const n = s, i = c, f = A(() => n.validation.is_compatible ? n.operationType === "pull" ? "Pull" : "Merge" : n.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (p, u) => (t(), P(at, {
      title: "Compatibility Check",
      size: "lg",
      onClose: u[3] || (u[3] = (m) => i("cancel"))
    }, {
      body: l(() => [
        e("div", _g, [
          s.validation.is_compatible && s.validation.node_conflicts.length === 0 ? (t(), o("div", $g, [
            u[5] || (u[5] = e("span", { class: "icon" }, "✓", -1)),
            e("div", null, [
              u[4] || (u[4] = e("strong", null, "All clear!", -1)),
              e("p", null, "Your workflow choices are compatible. Ready to " + a(s.operationType) + ".", 1)
            ])
          ])) : s.validation.node_conflicts.length > 0 ? (t(), o(W, { key: 1 }, [
            u[6] || (u[6] = e("div", { class: "warning-header" }, [
              e("span", { class: "icon" }, "⚠"),
              e("div", null, [
                e("strong", null, "Node Version Differences"),
                e("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            e("div", Cg, [
              (t(!0), o(W, null, ne(s.validation.node_conflicts, (m) => (t(), P(bg, {
                key: m.node_id,
                conflict: m
              }, null, 8, ["conflict"]))), 128))
            ]),
            u[7] || (u[7] = e("div", { class: "info-box" }, [
              e("strong", null, "What happens if you proceed?"),
              e("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : r("", !0),
          s.validation.warnings.length > 0 ? (t(), o("div", xg, [
            u[8] || (u[8] = e("h4", null, "Warnings", -1)),
            e("ul", null, [
              (t(!0), o(W, null, ne(s.validation.warnings, (m, d) => (t(), o("li", { key: d }, a(m), 1))), 128))
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
          loading: s.executing,
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
}), Ig = /* @__PURE__ */ ae(Sg, [["__scopeId", "data-v-fefd26ed"]]), Eg = { key: 0 }, Pg = /* @__PURE__ */ oe({
  __name: "RemotesSection",
  emits: ["toast"],
  setup(s, { emit: c }) {
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
    } = je(), D = h([]), M = h(null), $ = h({}), C = h(!1), B = h(null), x = h(""), R = h(!1), q = h(null), F = h(!1), G = h("add"), S = h({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), T = A(() => {
      if (!x.value.trim()) return D.value;
      const V = x.value.toLowerCase();
      return D.value.filter(
        (Z) => Z.name.toLowerCase().includes(V) || Z.fetch_url.toLowerCase().includes(V) || Z.push_url.toLowerCase().includes(V)
      );
    });
    async function N() {
      C.value = !0, B.value = null;
      try {
        const V = await i();
        D.value = V.remotes, M.value = V.current_branch_tracking || null, await Promise.all(
          V.remotes.map(async (Z) => {
            const ke = await d(Z.name);
            ke && ($.value[Z.name] = ke);
          })
        );
      } catch (V) {
        B.value = V instanceof Error ? V.message : "Failed to load remotes";
      } finally {
        C.value = !1;
      }
    }
    function de() {
      G.value = "add", S.value = { name: "", fetchUrl: "", pushUrl: "" }, F.value = !0;
    }
    function se(V) {
      const Z = D.value.find((ke) => ke.name === V);
      Z && (G.value = "edit", S.value = {
        name: Z.name,
        fetchUrl: Z.fetch_url,
        pushUrl: Z.push_url
      }, F.value = !0);
    }
    async function X(V) {
      try {
        G.value === "add" ? await f(V.name, V.fetchUrl) : await u(V.name, V.fetchUrl, V.pushUrl || void 0), F.value = !1, await N();
      } catch (Z) {
        B.value = Z instanceof Error ? Z.message : "Operation failed";
      }
    }
    function ve() {
      F.value = !1, S.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function J(V) {
      q.value = V;
      try {
        await m(V);
        const Z = await d(V);
        Z && ($.value[V] = Z), n("toast", `✓ Fetched from ${V}`, "success");
      } catch (Z) {
        n("toast", Z instanceof Error ? Z.message : "Fetch failed", "error");
      } finally {
        q.value = null;
      }
    }
    async function z(V) {
      if (confirm(`Remove remote "${V}"?`))
        try {
          await p(V), await N();
        } catch (Z) {
          B.value = Z instanceof Error ? Z.message : "Failed to remove remote";
        }
    }
    function L() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const I = h("idle"), me = A(() => I.value === "pull_preview"), Q = A(
      () => I.value === "resolving" || I.value === "validating"
    ), _e = A(
      () => I.value === "validation_review" || I.value === "executing"
    ), Ce = h(!1), De = h(null), Ne = h(!1), ce = h(null), ye = h(!1), Re = h(null), ee = h(null), ie = h(/* @__PURE__ */ new Map()), we = h(null), xe = h(null), Xe = A(() => Re.value && Ys(Re.value) ? Re.value : null);
    async function tt(V) {
      ce.value = V, I.value = "pull_preview", ye.value = !0, Re.value = null, ee.value = null;
      try {
        Re.value = await v(V);
      } catch (Z) {
        ee.value = Z instanceof Error ? Z.message : "Failed to load pull preview";
      } finally {
        ye.value = !1;
      }
    }
    function Ee() {
      I.value = "idle", Re.value = null, ee.value = null, ce.value = null;
    }
    async function Qe(V) {
      if (!ce.value) return;
      I.value = "executing", ee.value = null;
      const Z = ce.value;
      try {
        const ke = await y(Z, V);
        if (ke.rolled_back) {
          ee.value = `Pull failed and was rolled back: ${ke.error || "Unknown error"}`, I.value = "pull_preview";
          return;
        }
        Ue(), I.value = "idle", n("toast", `✓ Pulled from ${Z}`, "success"), await N();
      } catch (ke) {
        ee.value = ke instanceof Error ? ke.message : "Pull failed", I.value = "pull_preview";
      }
    }
    function qe() {
      Xe.value && (I.value = "resolving", xe.value = null);
    }
    function He(V, Z) {
      ie.value.set(V, { name: V, resolution: Z });
    }
    function dt() {
      I.value = "pull_preview";
    }
    async function $e() {
      I.value = "validating", xe.value = null;
      try {
        const V = Array.from(ie.value.values());
        we.value = await b(ce.value, V), I.value = "validation_review";
      } catch (V) {
        xe.value = V instanceof Error ? V.message : "Validation failed", I.value = "resolving";
      }
    }
    async function Ge() {
      I.value = "executing";
      const V = ce.value;
      try {
        const Z = Array.from(ie.value.values()), ke = await y(V, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: Z
        });
        if (ke.rolled_back) {
          ee.value = `Pull failed and was rolled back: ${ke.error || "Unknown error"}`, I.value = "pull_preview";
          return;
        }
        Ue(), I.value = "idle", n("toast", `✓ Pulled from ${V}`, "success"), await N();
      } catch (Z) {
        ee.value = Z instanceof Error ? Z.message : "Pull failed", I.value = "validation_review";
      }
    }
    function Ze() {
      I.value = "resolving";
    }
    function Ye() {
      Ue(), I.value = "idle";
    }
    function Ue() {
      ie.value.clear(), we.value = null, xe.value = null, ee.value = null, Re.value = null, ce.value = null;
    }
    async function pe(V) {
      ce.value = V, Ce.value = !0, ye.value = !0, De.value = null;
      try {
        De.value = await k(V);
      } catch (Z) {
        B.value = Z instanceof Error ? Z.message : "Failed to load push preview";
      } finally {
        ye.value = !1;
      }
    }
    function K() {
      Ce.value = !1, De.value = null, ce.value = null;
    }
    async function Y(V) {
      if (!ce.value) return;
      Ne.value = !0;
      const Z = ce.value;
      try {
        await _(Z, V), K(), n("toast", `✓ Pushed to ${Z}`, "success"), await N();
      } catch (ke) {
        n("toast", ke instanceof Error ? ke.message : "Push failed", "error");
      } finally {
        Ne.value = !1;
      }
    }
    function E() {
      const V = ce.value;
      K(), V && tt(V);
    }
    return Ve(N), (V, Z) => (t(), o(W, null, [
      w(ot, null, {
        header: l(() => [
          w(nt, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: Z[0] || (Z[0] = (ke) => R.value = !0)
          }, {
            actions: l(() => [
              F.value ? r("", !0) : (t(), P(te, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: de
              }, {
                default: l(() => [...Z[3] || (Z[3] = [
                  g(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          F.value ? r("", !0) : (t(), P(Wt, {
            key: 0,
            modelValue: x.value,
            "onUpdate:modelValue": Z[1] || (Z[1] = (ke) => x.value = ke),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: l(() => [
          C.value ? (t(), P(Et, {
            key: 0,
            message: "Loading remotes..."
          })) : B.value ? (t(), P(Pt, {
            key: 1,
            message: B.value,
            retry: !0,
            onRetry: N
          }, null, 8, ["message"])) : (t(), o(W, { key: 2 }, [
            F.value ? (t(), P(Cf, {
              key: 0,
              mode: G.value,
              "remote-name": S.value.name,
              "fetch-url": S.value.fetchUrl,
              "push-url": S.value.pushUrl,
              onSubmit: X,
              onCancel: ve
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : r("", !0),
            D.value.length && !F.value ? (t(), P(is, {
              key: 1,
              variant: "compact"
            }, {
              default: l(() => [
                g(" Total: " + a(D.value.length) + " remote" + a(D.value.length !== 1 ? "s" : "") + " ", 1),
                M.value ? (t(), o("span", Eg, " • Tracking: " + a(M.value.remote) + "/" + a(M.value.branch), 1)) : r("", !0)
              ]),
              _: 1
            })) : r("", !0),
            T.value.length && !F.value ? (t(), P(Oe, {
              key: 2,
              title: "REMOTES",
              count: T.value.length
            }, {
              default: l(() => [
                (t(!0), o(W, null, ne(T.value, (ke) => (t(), P(uf, {
                  key: ke.name,
                  remote: ke,
                  "sync-status": $.value[ke.name],
                  "fetching-remote": q.value,
                  onFetch: J,
                  onEdit: se,
                  onRemove: z,
                  onPull: tt,
                  onPush: pe
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            !T.value.length && !F.value ? (t(), P(wt, {
              key: 3,
              icon: "🌐",
              message: x.value ? `No remotes match '${x.value}'` : "No remotes configured."
            }, {
              actions: l(() => [
                w(te, {
                  variant: "primary",
                  onClick: de
                }, {
                  default: l(() => [...Z[4] || (Z[4] = [
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
        show: R.value,
        title: "About Git Remotes",
        onClose: Z[2] || (Z[2] = (ke) => R.value = !1)
      }, {
        content: l(() => [...Z[5] || (Z[5] = [
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
            default: l(() => [...Z[6] || (Z[6] = [
              g(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w(ip, {
        show: me.value,
        "remote-name": ce.value || "",
        preview: Re.value,
        loading: ye.value,
        pulling: I.value === "executing",
        error: ee.value,
        "conflict-resolutions": ie.value,
        onClose: Ee,
        onPull: Qe,
        onOpenConflictResolution: qe
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      w(Pp, {
        show: Ce.value,
        "remote-name": ce.value || "",
        preview: De.value,
        loading: ye.value,
        pushing: Ne.value,
        onClose: K,
        onPush: Y,
        onPullFirst: E
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      Q.value && Xe.value ? (t(), P(lg, {
        key: 0,
        "workflow-conflicts": Xe.value.workflow_conflicts,
        resolutions: ie.value,
        "operation-type": "pull",
        validating: I.value === "validating",
        error: xe.value,
        onClose: dt,
        onResolve: He,
        onApply: $e
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : r("", !0),
      _e.value && we.value ? (t(), P(Ig, {
        key: 1,
        validation: we.value,
        "operation-type": "pull",
        executing: I.value === "executing",
        onProceed: Ge,
        onGoBack: Ze,
        onCancel: Ye
      }, null, 8, ["validation", "executing"])) : r("", !0)
    ], 64));
  }
}), Mg = /* @__PURE__ */ ae(Pg, [["__scopeId", "data-v-9ae3b76d"]]), Rg = { class: "setting-info" }, Tg = { class: "setting-label" }, Dg = {
  key: 0,
  class: "required-marker"
}, Lg = {
  key: 0,
  class: "setting-description"
}, zg = { class: "setting-control" }, Ug = /* @__PURE__ */ oe({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(s) {
    return (c, n) => (t(), o("div", {
      class: fe(["setting-row", { disabled: s.disabled }])
    }, [
      e("div", Rg, [
        e("div", Tg, [
          g(a(s.label) + " ", 1),
          s.required ? (t(), o("span", Dg, "*")) : r("", !0)
        ]),
        s.description ? (t(), o("div", Lg, a(s.description), 1)) : r("", !0)
      ]),
      e("div", zg, [
        Te(c.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), hs = /* @__PURE__ */ ae(Ug, [["__scopeId", "data-v-cb5d236c"]]), Ng = { class: "toggle" }, Og = ["checked", "disabled"], Ag = /* @__PURE__ */ oe({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(s) {
    return (c, n) => (t(), o("label", Ng, [
      e("input", {
        type: "checkbox",
        checked: s.modelValue,
        disabled: s.disabled,
        onChange: n[0] || (n[0] = (i) => c.$emit("update:modelValue", i.target.checked)),
        class: "toggle-input"
      }, null, 40, Og),
      n[1] || (n[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), Bg = /* @__PURE__ */ ae(Ag, [["__scopeId", "data-v-71c0f550"]]), Fg = { class: "workspace-settings-content" }, Vg = { class: "settings-section" }, Wg = { class: "path-setting" }, Gg = { class: "path-value" }, jg = { class: "path-setting" }, Hg = { class: "path-value" }, Kg = { class: "settings-section" }, qg = { class: "settings-section" }, Yg = { class: "settings-section" }, Jg = /* @__PURE__ */ oe({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(s, { expose: c, emit: n }) {
    const i = s, f = n, { getConfig: p, updateConfig: u } = je(), m = h(!1), d = h(null), v = h(null), y = h(null), k = h(null), _ = h(""), b = h(""), D = h(!1);
    function M(F) {
      return F.join(" ");
    }
    function $(F) {
      return F.trim() ? F.trim().split(/\s+/) : [];
    }
    const C = A(() => {
      if (!k.value) return !1;
      const F = _.value !== (k.value.civitai_api_key || ""), G = b.value !== M(k.value.comfyui_extra_args || []);
      return F || G;
    });
    async function B() {
      m.value = !0, d.value = null;
      try {
        y.value = await p(i.workspacePath || void 0), k.value = { ...y.value }, _.value = y.value.civitai_api_key || "", b.value = M(y.value.comfyui_extra_args || []);
        const F = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        D.value = F === "true";
      } catch (F) {
        d.value = F instanceof Error ? F.message : "Failed to load settings";
      } finally {
        m.value = !1;
      }
    }
    async function x() {
      var F, G;
      v.value = null;
      try {
        const S = {};
        _.value !== (((F = k.value) == null ? void 0 : F.civitai_api_key) || "") && (S.civitai_api_key = _.value || null), b.value !== M(((G = k.value) == null ? void 0 : G.comfyui_extra_args) || []) && (S.comfyui_extra_args = $(b.value)), await u(S, i.workspacePath || void 0), await B(), v.value = { type: "success", message: "Settings saved successfully" }, f("saved"), setTimeout(() => {
          v.value = null;
        }, 3e3);
      } catch (S) {
        const T = S instanceof Error ? S.message : "Failed to save settings";
        v.value = { type: "error", message: T }, f("error", T);
      }
    }
    function R() {
      k.value && (_.value = k.value.civitai_api_key || "", b.value = M(k.value.comfyui_extra_args || []), v.value = null);
    }
    function q(F) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(F)), console.log("[ComfyGit] Auto-refresh setting saved:", F);
    }
    return c({
      saveSettings: x,
      resetSettings: R,
      hasChanges: C,
      loadSettings: B
    }), Ve(B), (F, G) => (t(), o("div", Fg, [
      m.value ? (t(), P(Et, {
        key: 0,
        message: "Loading workspace settings..."
      })) : d.value ? (t(), P(Pt, {
        key: 1,
        message: d.value,
        retry: !0,
        onRetry: B
      }, null, 8, ["message"])) : (t(), o(W, { key: 2 }, [
        w(Oe, { title: "WORKSPACE PATHS" }, {
          default: l(() => {
            var S, T;
            return [
              e("div", Vg, [
                e("div", Wg, [
                  G[3] || (G[3] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                  G[4] || (G[4] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  e("div", Gg, a(((S = y.value) == null ? void 0 : S.workspace_path) || "Loading..."), 1)
                ]),
                e("div", jg, [
                  G[5] || (G[5] = e("div", { class: "path-label" }, "Models Directory", -1)),
                  G[6] || (G[6] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  e("div", Hg, a(((T = y.value) == null ? void 0 : T.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        w(Oe, { title: "API CREDENTIALS" }, {
          default: l(() => [
            e("div", Kg, [
              w(hs, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: l(() => [
                  w(us, {
                    modelValue: _.value,
                    "onUpdate:modelValue": G[0] || (G[0] = (S) => _.value = S),
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
        w(Oe, { title: "COMFYUI SETTINGS" }, {
          default: l(() => [
            e("div", qg, [
              w(hs, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: l(() => [
                  w(us, {
                    modelValue: b.value,
                    "onUpdate:modelValue": G[1] || (G[1] = (S) => b.value = S),
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
        w(Oe, { title: "UI SETTINGS" }, {
          default: l(() => [
            e("div", Yg, [
              w(hs, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: l(() => [
                  w(Bg, {
                    modelValue: D.value,
                    "onUpdate:modelValue": [
                      G[2] || (G[2] = (S) => D.value = S),
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
        v.value ? (t(), P(is, {
          key: 0,
          variant: (v.value.type === "success", "compact")
        }, {
          default: l(() => [
            e("span", {
              style: It({ color: v.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
            }, a(v.value.message), 5)
          ]),
          _: 1
        }, 8, ["variant"])) : r("", !0)
      ], 64))
    ]));
  }
}), Js = /* @__PURE__ */ ae(Jg, [["__scopeId", "data-v-9f44552d"]]), Xg = /* @__PURE__ */ oe({
  __name: "WorkspaceSettingsSection",
  setup(s) {
    const c = h(null);
    function n() {
      console.log("[ComfyGit] Settings saved");
    }
    return (i, f) => (t(), P(ot, null, {
      header: l(() => [
        w(nt, { title: "WORKSPACE SETTINGS" }, {
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
              (u = c.value) != null && u.hasChanges ? (t(), P(te, {
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
}), Qg = /* @__PURE__ */ oe({
  __name: "WorkspaceDebugSection",
  setup(s) {
    const { getWorkspaceLogs: c, getWorkspaceLogPath: n, openFile: i } = je(), f = h([]), p = h(!1), u = h(null), m = h(!1), d = h(null), v = h(null), y = h(!1), k = A(() => f.value.length === 0 ? [] : f.value.map((M) => ({
      text: `${M.timestamp} - ${M.name} - ${M.level} - ${M.func}:${M.line} - ${M.message}`,
      level: M.level
    })));
    async function _() {
      p.value = !0, u.value = null;
      try {
        f.value = await c(void 0, 500);
      } catch (M) {
        u.value = M instanceof Error ? M.message : "Failed to load workspace logs";
      } finally {
        p.value = !1, setTimeout(() => {
          var M;
          (M = d.value) != null && M.parentElement && (d.value.parentElement.scrollTop = d.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    async function b() {
      try {
        const M = await n();
        M.exists && (v.value = M.path);
      } catch {
      }
    }
    async function D() {
      if (v.value) {
        y.value = !0;
        try {
          await i(v.value);
        } catch (M) {
          console.error("Failed to open log file:", M);
        } finally {
          y.value = !1;
        }
      }
    }
    return Ve(() => {
      _(), b();
    }), (M, $) => (t(), o(W, null, [
      w(ot, null, {
        header: l(() => [
          w(nt, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: $[0] || ($[0] = (C) => m.value = !0)
          }, {
            actions: l(() => [
              w(te, {
                variant: "secondary",
                size: "sm",
                onClick: D,
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
          p.value ? (t(), P(Et, {
            key: 0,
            message: "Loading workspace logs..."
          })) : u.value ? (t(), P(Pt, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: _
          }, null, 8, ["message"])) : (t(), o(W, { key: 2 }, [
            f.value.length === 0 ? (t(), P(wt, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (t(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: d,
              class: "log-output"
            }, [
              (t(!0), o(W, null, ne(k.value, (C, B) => (t(), o("div", {
                key: B,
                class: fe(`log-line log-level-${C.level.toLowerCase()}`)
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
}), Zg = /* @__PURE__ */ ae(Qg, [["__scopeId", "data-v-7f05352a"]]), eh = /* @__PURE__ */ oe({
  __name: "DebugEnvSection",
  setup(s) {
    const { getEnvironmentLogs: c, getStatus: n, getEnvironmentLogPath: i, openFile: f } = je(), p = h([]), u = h(!1), m = h(null), d = h(!1), v = h("production"), y = h(null), k = h(null), _ = h(!1), b = A(() => p.value.length === 0 ? [] : p.value.map((C) => ({
      text: `${C.timestamp} - ${C.name} - ${C.level} - ${C.func}:${C.line} - ${C.message}`,
      level: C.level
    })));
    async function D() {
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
    async function M() {
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
      D(), M();
    }), (C, B) => (t(), o(W, null, [
      w(ot, null, {
        header: l(() => [
          w(nt, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: B[0] || (B[0] = (x) => d.value = !0)
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
                onClick: D,
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
          u.value ? (t(), P(Et, {
            key: 0,
            message: "Loading environment logs..."
          })) : m.value ? (t(), P(Pt, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: D
          }, null, 8, ["message"])) : (t(), o(W, { key: 2 }, [
            p.value.length === 0 ? (t(), P(wt, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (t(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: y,
              class: "log-output"
            }, [
              (t(!0), o(W, null, ne(b.value, (x, R) => (t(), o("div", {
                key: R,
                class: fe(`log-line log-level-${x.level.toLowerCase()}`)
              }, a(x.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      w(kt, {
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
          w(te, {
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
}), th = /* @__PURE__ */ ae(eh, [["__scopeId", "data-v-6f8db7ce"]]), sh = { class: "env-title" }, oh = {
  key: 0,
  class: "current-badge"
}, nh = {
  key: 0,
  class: "branch-info"
}, ah = /* @__PURE__ */ oe({
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
  setup(s) {
    return (c, n) => (t(), P(st, {
      status: s.isCurrent ? "synced" : void 0
    }, Nt({
      icon: l(() => [
        g(a(s.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: l(() => [
        e("div", sh, [
          e("span", null, a(s.environmentName), 1),
          s.isCurrent && s.showCurrentLabel ? (t(), o("span", oh, "CURRENT")) : r("", !0)
        ])
      ]),
      subtitle: l(() => [
        s.currentBranch ? (t(), o("span", nh, [
          n[0] || (n[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          g(" " + a(s.currentBranch), 1)
        ])) : r("", !0)
      ]),
      actions: l(() => [
        Te(c.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      s.showDetails ? {
        name: "details",
        fn: l(() => [
          w(Fe, {
            label: "Workflows:",
            value: String(s.workflowCount)
          }, null, 8, ["value"]),
          w(Fe, {
            label: "Nodes:",
            value: String(s.nodeCount)
          }, null, 8, ["value"]),
          w(Fe, {
            label: "Models:",
            value: String(s.modelCount)
          }, null, 8, ["value"]),
          s.lastUsed && s.showLastUsed ? (t(), P(Fe, {
            key: 0,
            label: "Last used:",
            value: s.lastUsed
          }, null, 8, ["value"])) : r("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), lh = /* @__PURE__ */ ae(ah, [["__scopeId", "data-v-9231917a"]]), ih = { class: "env-details" }, rh = { class: "status-row" }, dh = {
  key: 0,
  class: "detail-row"
}, ch = { class: "value mono" }, uh = {
  key: 1,
  class: "detail-row"
}, mh = { class: "value mono small" }, vh = { class: "detail-row" }, fh = { class: "value" }, ph = { class: "detail-row" }, gh = { class: "value" }, hh = { class: "detail-row" }, yh = { class: "value" }, wh = {
  key: 2,
  class: "section-divider"
}, kh = {
  key: 3,
  class: "detail-row"
}, bh = { class: "value" }, _h = {
  key: 4,
  class: "detail-row"
}, $h = { class: "value" }, Ch = { class: "footer-actions" }, xh = /* @__PURE__ */ oe({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete"],
  setup(s, { emit: c }) {
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
    return (f, p) => (t(), P(at, {
      title: `ENVIRONMENT DETAILS: ${s.environment.name.toUpperCase()}`,
      size: "md",
      onClose: p[2] || (p[2] = (u) => n("close"))
    }, {
      body: l(() => [
        e("div", ih, [
          e("div", rh, [
            p[3] || (p[3] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: fe(["status-badge", s.environment.is_current ? "current" : "inactive"])
            }, a(s.environment.is_current ? "Current" : "Inactive"), 3)
          ]),
          s.environment.current_branch ? (t(), o("div", dh, [
            p[4] || (p[4] = e("span", { class: "label" }, "Branch:", -1)),
            e("span", ch, a(s.environment.current_branch), 1)
          ])) : r("", !0),
          s.environment.path ? (t(), o("div", uh, [
            p[5] || (p[5] = e("span", { class: "label" }, "Path:", -1)),
            e("span", mh, a(s.environment.path), 1)
          ])) : r("", !0),
          p[11] || (p[11] = e("div", { class: "section-divider" }, null, -1)),
          e("div", vh, [
            p[6] || (p[6] = e("span", { class: "label" }, "Workflows:", -1)),
            e("span", fh, a(s.environment.workflow_count), 1)
          ]),
          e("div", ph, [
            p[7] || (p[7] = e("span", { class: "label" }, "Nodes:", -1)),
            e("span", gh, a(s.environment.node_count), 1)
          ]),
          e("div", hh, [
            p[8] || (p[8] = e("span", { class: "label" }, "Models:", -1)),
            e("span", yh, a(s.environment.model_count), 1)
          ]),
          s.environment.created_at || s.environment.last_used ? (t(), o("div", wh)) : r("", !0),
          s.environment.created_at ? (t(), o("div", kh, [
            p[9] || (p[9] = e("span", { class: "label" }, "Created:", -1)),
            e("span", bh, a(i(s.environment.created_at)), 1)
          ])) : r("", !0),
          s.environment.last_used ? (t(), o("div", _h, [
            p[10] || (p[10] = e("span", { class: "label" }, "Last Used:", -1)),
            e("span", $h, a(i(s.environment.last_used)), 1)
          ])) : r("", !0)
        ])
      ]),
      footer: l(() => [
        e("div", Ch, [
          s.canDelete ? (t(), P(he, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: p[0] || (p[0] = (u) => n("delete", s.environment.name))
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
}), Sh = /* @__PURE__ */ ae(xh, [["__scopeId", "data-v-59855453"]]), Xs = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], Qs = "3.12", Es = [
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
], Zs = "auto", Ih = { class: "progress-bar" }, Eh = /* @__PURE__ */ oe({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(s) {
    const c = s, n = A(() => `${Math.max(0, Math.min(100, c.progress))}%`);
    return (i, f) => (t(), o("div", Ih, [
      e("div", {
        class: fe(["progress-fill", s.variant]),
        style: It({ width: n.value })
      }, null, 6)
    ]));
  }
}), Ps = /* @__PURE__ */ ae(Eh, [["__scopeId", "data-v-1beb0512"]]), Ph = { class: "task-progress" }, Mh = { class: "progress-info" }, Rh = { class: "progress-percentage" }, Th = { class: "progress-message" }, Dh = {
  key: 0,
  class: "progress-steps"
}, Lh = { class: "step-icon" }, zh = { class: "step-label" }, Uh = /* @__PURE__ */ oe({
  __name: "TaskProgressDisplay",
  props: {
    progress: {},
    message: {},
    currentPhase: {},
    variant: { default: "default" },
    showSteps: { type: Boolean, default: !1 },
    steps: { default: () => [] }
  },
  setup(s) {
    const c = s;
    function n(f) {
      const p = c.steps.find((u) => u.id === f);
      return p ? c.progress >= p.progressThreshold ? "completed" : c.currentPhase === f ? "active" : "pending" : "pending";
    }
    function i(f) {
      const p = n(f);
      return p === "completed" ? "✓" : p === "active" ? "⟳" : "○";
    }
    return (f, p) => (t(), o("div", Ph, [
      w(Ps, {
        progress: s.progress,
        variant: s.variant
      }, null, 8, ["progress", "variant"]),
      e("div", Mh, [
        e("span", Rh, a(s.progress) + "%", 1),
        e("span", Th, a(s.message), 1)
      ]),
      s.showSteps && s.steps.length > 0 ? (t(), o("div", Dh, [
        (t(!0), o(W, null, ne(s.steps, (u) => (t(), o("div", {
          key: u.id,
          class: fe(["step", n(u.id)])
        }, [
          e("span", Lh, a(i(u.id)), 1),
          e("span", zh, a(u.label), 1)
        ], 2))), 128))
      ])) : r("", !0)
    ]));
  }
}), vs = /* @__PURE__ */ ae(Uh, [["__scopeId", "data-v-9d1de66c"]]), Nh = {
  key: 0,
  class: "create-env-form"
}, Oh = { class: "form-field" }, Ah = { class: "form-field" }, Bh = ["value"], Fh = { class: "form-field" }, Vh = ["disabled"], Wh = ["value"], Gh = { class: "form-field" }, jh = ["value"], Hh = { class: "form-field form-field--checkbox" }, Kh = { class: "form-checkbox" }, qh = {
  key: 1,
  class: "create-env-progress"
}, Yh = { class: "creating-intro" }, Jh = {
  key: 0,
  class: "progress-warning"
}, Xh = {
  key: 1,
  class: "create-error"
}, Qh = { class: "error-message" }, Zh = {
  key: 1,
  class: "footer-status"
}, e1 = 10, t1 = /* @__PURE__ */ oe({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(s, { emit: c }) {
    const n = c, { getComfyUIReleases: i, createEnvironment: f, getCreateProgress: p } = je(), u = h(""), m = h(Qs), d = h("latest"), v = h(Zs), y = h(!1), k = h([{ tag_name: "latest", name: "Latest", published_at: "" }]), _ = h(!1), b = h(!1), D = h({
      progress: 0,
      message: ""
    });
    let M = null, $ = 0;
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
      const T = u.value.trim();
      if (T) {
        b.value = !0, D.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const N = {
            name: T,
            python_version: m.value,
            comfyui_version: d.value,
            torch_backend: v.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, de = await f(N);
          de.status === "started" ? q() : de.status === "error" && (D.value = {
            progress: 0,
            message: de.message || "Failed to start creation",
            error: de.message
          });
        } catch (N) {
          D.value = {
            progress: 0,
            message: N instanceof Error ? N.message : "Unknown error",
            error: N instanceof Error ? N.message : "Unknown error"
          };
        }
      }
    }
    function q() {
      M || ($ = 0, M = window.setInterval(async () => {
        try {
          const T = await p();
          $ = 0, D.value = {
            progress: T.progress ?? 0,
            message: T.message,
            phase: T.phase,
            error: T.error
          }, T.state === "complete" ? (F(), n("created", T.environment_name || u.value.trim(), y.value)) : T.state === "error" ? (F(), D.value.error = T.error || T.message) : T.state === "idle" && b.value && (F(), D.value.error = "Creation was interrupted. Please try again.");
        } catch {
          $++, $ >= e1 && (F(), D.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function F() {
      M && (clearInterval(M), M = null);
    }
    function G() {
      b.value = !1, D.value = { progress: 0, message: "" }, n("close");
    }
    async function S() {
      _.value = !0;
      try {
        k.value = await i();
      } catch (T) {
        console.error("Failed to load ComfyUI releases:", T);
      } finally {
        _.value = !1;
      }
    }
    return Ve(async () => {
      var T;
      await fo(), (T = B.value) == null || T.focus(), S();
    }), Cs(() => {
      F();
    }), (T, N) => (t(), P(at, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !b.value,
      onClose: x
    }, {
      body: l(() => [
        b.value ? (t(), o("div", qh, [
          e("p", Yh, [
            N[11] || (N[11] = g(" Creating environment ", -1)),
            e("strong", null, a(u.value), 1),
            N[12] || (N[12] = g("... ", -1))
          ]),
          w(vs, {
            progress: D.value.progress,
            message: D.value.message,
            "current-phase": D.value.phase,
            variant: D.value.error ? "error" : "default",
            "show-steps": !0,
            steps: C
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          D.value.error ? r("", !0) : (t(), o("p", Jh, " This may take several minutes. Please wait... ")),
          D.value.error ? (t(), o("div", Xh, [
            e("p", Qh, a(D.value.error), 1)
          ])) : r("", !0)
        ])) : (t(), o("div", Nh, [
          e("div", Oh, [
            N[6] || (N[6] = e("label", { class: "form-label" }, "Name", -1)),
            ze(e("input", {
              ref_key: "nameInput",
              ref: B,
              "onUpdate:modelValue": N[0] || (N[0] = (de) => u.value = de),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: $t(R, ["enter"])
            }, null, 544), [
              [Lt, u.value]
            ])
          ]),
          e("div", Ah, [
            N[7] || (N[7] = e("label", { class: "form-label" }, "Python Version", -1)),
            ze(e("select", {
              "onUpdate:modelValue": N[1] || (N[1] = (de) => m.value = de),
              class: "form-select"
            }, [
              (t(!0), o(W, null, ne(Me(Xs), (de) => (t(), o("option", {
                key: de,
                value: de
              }, a(de), 9, Bh))), 128))
            ], 512), [
              [St, m.value]
            ])
          ]),
          e("div", Fh, [
            N[8] || (N[8] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
            ze(e("select", {
              "onUpdate:modelValue": N[2] || (N[2] = (de) => d.value = de),
              class: "form-select",
              disabled: _.value
            }, [
              (t(!0), o(W, null, ne(k.value, (de) => (t(), o("option", {
                key: de.tag_name,
                value: de.tag_name
              }, a(de.name), 9, Wh))), 128))
            ], 8, Vh), [
              [St, d.value]
            ])
          ]),
          e("div", Gh, [
            N[9] || (N[9] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
            ze(e("select", {
              "onUpdate:modelValue": N[3] || (N[3] = (de) => v.value = de),
              class: "form-select"
            }, [
              (t(!0), o(W, null, ne(Me(Es), (de) => (t(), o("option", {
                key: de,
                value: de
              }, a(de) + a(de === "auto" ? " (detect GPU)" : ""), 9, jh))), 128))
            ], 512), [
              [St, v.value]
            ])
          ]),
          e("div", Hh, [
            e("label", Kh, [
              ze(e("input", {
                type: "checkbox",
                "onUpdate:modelValue": N[4] || (N[4] = (de) => y.value = de)
              }, null, 512), [
                [cs, y.value]
              ]),
              N[10] || (N[10] = e("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: l(() => [
        b.value ? (t(), o(W, { key: 1 }, [
          D.value.error ? (t(), P(he, {
            key: 0,
            variant: "secondary",
            onClick: G
          }, {
            default: l(() => [...N[15] || (N[15] = [
              g(" Close ", -1)
            ])]),
            _: 1
          })) : (t(), o("span", Zh, " Creating environment... "))
        ], 64)) : (t(), o(W, { key: 0 }, [
          w(he, {
            variant: "primary",
            disabled: !u.value.trim(),
            onClick: R
          }, {
            default: l(() => [...N[13] || (N[13] = [
              g(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          w(he, {
            variant: "secondary",
            onClick: N[5] || (N[5] = (de) => n("close"))
          }, {
            default: l(() => [...N[14] || (N[14] = [
              g(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), s1 = /* @__PURE__ */ ae(t1, [["__scopeId", "data-v-f37eaa42"]]), o1 = /* @__PURE__ */ oe({
  __name: "EnvironmentsSection",
  emits: ["switch", "created", "delete"],
  setup(s, { expose: c, emit: n }) {
    const i = n, { getEnvironments: f } = je(), p = h([]), u = h(!1), m = h(null), d = h(""), v = h(!1), y = h(!1), k = h(null), _ = A(() => {
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
    function D() {
      y.value = !0;
    }
    function M(B) {
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
    return Ve(C), c({
      loadEnvironments: C,
      openCreateModal: D
    }), (B, x) => (t(), o(W, null, [
      w(ot, null, {
        header: l(() => [
          w(nt, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: x[0] || (x[0] = (R) => v.value = !0)
          }, {
            actions: l(() => [
              w(te, {
                variant: "primary",
                size: "sm",
                onClick: D
              }, {
                default: l(() => [...x[6] || (x[6] = [
                  g(" Create ", -1)
                ])]),
                _: 1
              }),
              w(te, {
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
          w(Wt, {
            modelValue: d.value,
            "onUpdate:modelValue": x[1] || (x[1] = (R) => d.value = R),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          u.value ? (t(), P(Et, {
            key: 0,
            message: "Loading environments..."
          })) : m.value ? (t(), P(Pt, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: C
          }, null, 8, ["message"])) : (t(), o(W, { key: 2 }, [
            _.value.length ? (t(), P(Oe, {
              key: 0,
              title: "ENVIRONMENTS",
              count: _.value.length
            }, {
              default: l(() => [
                (t(!0), o(W, null, ne(_.value, (R) => (t(), P(lh, {
                  key: R.name,
                  "environment-name": R.name,
                  "is-current": R.is_current,
                  "current-branch": R.current_branch,
                  "show-last-used": !1
                }, {
                  actions: l(() => [
                    R.is_current ? r("", !0) : (t(), P(te, {
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
                    w(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (q) => M(R)
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
            _.value.length ? r("", !0) : (t(), P(wt, {
              key: 1,
              icon: "🌍",
              message: d.value ? `No environments match '${d.value}'` : "No environments found. Create one to get started!"
            }, Nt({ _: 2 }, [
              d.value ? void 0 : {
                name: "actions",
                fn: l(() => [
                  w(te, {
                    variant: "primary",
                    onClick: D
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
      w(kt, {
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
          w(te, {
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
      k.value ? (t(), P(Sh, {
        key: 0,
        environment: k.value,
        "can-delete": p.value.length > 1,
        onClose: x[4] || (x[4] = (R) => k.value = null),
        onDelete: $
      }, null, 8, ["environment", "can-delete"])) : r("", !0),
      y.value ? (t(), P(s1, {
        key: 1,
        onClose: x[5] || (x[5] = (R) => y.value = !1),
        onCreated: b
      })) : r("", !0)
    ], 64));
  }
}), n1 = /* @__PURE__ */ ae(o1, [["__scopeId", "data-v-f95999f4"]]), a1 = { class: "file-path" }, l1 = { class: "file-path-text" }, i1 = ["title"], r1 = /* @__PURE__ */ oe({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(s) {
    const c = s, n = h(!1);
    async function i() {
      try {
        await navigator.clipboard.writeText(c.path), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (f) {
        console.error("Failed to copy:", f);
      }
    }
    return (f, p) => (t(), o("div", a1, [
      p[0] || (p[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", l1, a(s.path), 1),
      s.copyable ? (t(), o("button", {
        key: 0,
        class: "copy-btn",
        title: n.value ? "Copied!" : "Copy path",
        onClick: i
      }, a(n.value ? "✓" : "📋"), 9, i1)) : r("", !0)
    ]));
  }
}), d1 = /* @__PURE__ */ ae(r1, [["__scopeId", "data-v-f0982173"]]), c1 = { class: "export-blocked" }, u1 = { class: "issues-list" }, m1 = { class: "issue-message" }, v1 = {
  key: 0,
  class: "issue-details"
}, f1 = ["onClick"], p1 = { class: "issue-fix" }, g1 = /* @__PURE__ */ oe({
  __name: "ExportBlockedModal",
  props: {
    issues: {}
  },
  emits: ["close"],
  setup(s) {
    const c = s, n = fs({});
    function i(f) {
      const p = c.issues[f];
      return n[f] || p.details.length <= 3 ? p.details : p.details.slice(0, 3);
    }
    return (f, p) => (t(), P(at, {
      title: "Cannot Export",
      size: "md",
      onClose: p[1] || (p[1] = (u) => f.$emit("close"))
    }, {
      body: l(() => [
        e("div", c1, [
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
          e("div", u1, [
            (t(!0), o(W, null, ne(s.issues, (u, m) => (t(), o("div", {
              key: m,
              class: "issue-item"
            }, [
              e("div", m1, a(u.message), 1),
              u.details.length ? (t(), o("div", v1, [
                (t(!0), o(W, null, ne(i(m), (d, v) => (t(), o("div", {
                  key: v,
                  class: "issue-detail"
                }, a(d), 1))), 128)),
                u.details.length > 3 && !n[m] ? (t(), o("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (d) => n[m] = !0
                }, " +" + a(u.details.length - 3) + " more ", 9, f1)) : r("", !0)
              ])) : r("", !0),
              e("div", p1, [
                u.type === "uncommitted_workflows" ? (t(), o(W, { key: 0 }, [
                  g(" Commit your workflow changes before exporting. ")
                ], 64)) : u.type === "uncommitted_git_changes" ? (t(), o(W, { key: 1 }, [
                  g(" Commit your changes before exporting. ")
                ], 64)) : u.type === "unresolved_issues" ? (t(), o(W, { key: 2 }, [
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
}), eo = /* @__PURE__ */ ae(g1, [["__scopeId", "data-v-b52f5e32"]]), h1 = { class: "export-warnings" }, y1 = {
  key: 0,
  class: "success-header"
}, w1 = { class: "warning-header" }, k1 = { class: "warning-summary" }, b1 = { class: "warning-title" }, _1 = { class: "models-section" }, $1 = { class: "models-list" }, C1 = { class: "model-info" }, x1 = { class: "model-filename" }, S1 = { class: "model-workflows" }, I1 = ["onClick"], E1 = /* @__PURE__ */ oe({
  __name: "ExportWarningsModal",
  props: {
    models: {}
  },
  emits: ["confirm", "cancel", "revalidate"],
  setup(s, { emit: c }) {
    const n = s, i = c, f = h(!1), p = h(null), u = A(() => f.value || n.models.length <= 3 ? n.models : n.models.slice(0, 3));
    function m() {
      p.value = null, i("revalidate");
    }
    return (d, v) => (t(), o(W, null, [
      w(at, {
        title: "Export Warnings",
        size: "md",
        onClose: v[3] || (v[3] = (y) => d.$emit("cancel"))
      }, {
        body: l(() => [
          e("div", h1, [
            s.models.length === 0 ? (t(), o("div", y1, [...v[4] || (v[4] = [
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
            ])])) : (t(), o(W, { key: 1 }, [
              e("div", w1, [
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
                e("div", k1, [
                  e("h3", b1, a(s.models.length) + " model" + a(s.models.length !== 1 ? "s" : "") + " missing source URLs ", 1),
                  v[5] || (v[5] = e("p", { class: "warning-description" }, ` Recipients won't be able to download these models automatically. Click "Add Source" to fix, or export anyway. `, -1))
                ])
              ]),
              e("div", _1, [
                e("div", $1, [
                  (t(!0), o(W, null, ne(u.value, (y) => (t(), o("div", {
                    key: y.hash,
                    class: "model-item"
                  }, [
                    e("div", C1, [
                      e("div", x1, a(y.filename), 1),
                      e("div", S1, " Used by: " + a(y.workflows.join(", ")), 1)
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      onClick: (k) => p.value = y.hash
                    }, " Add Source ", 8, I1)
                  ]))), 128))
                ]),
                s.models.length > 3 && !f.value ? (t(), o("button", {
                  key: 0,
                  class: "show-more-btn",
                  onClick: v[0] || (v[0] = (y) => f.value = !0)
                }, " Show " + a(s.models.length - 3) + " more model" + a(s.models.length - 3 !== 1 ? "s" : "") + "... ", 1)) : r("", !0)
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
              g(a(s.models.length === 0 ? "Export" : "Export Anyway"), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      p.value ? (t(), P(Is, {
        key: 0,
        identifier: p.value,
        onClose: m
      }, null, 8, ["identifier"])) : r("", !0)
    ], 64));
  }
}), to = /* @__PURE__ */ ae(E1, [["__scopeId", "data-v-b698d882"]]), P1 = { class: "export-card" }, M1 = { class: "export-path-row" }, R1 = { class: "export-actions" }, T1 = {
  key: 1,
  class: "export-warning"
}, D1 = /* @__PURE__ */ oe({
  __name: "ExportSection",
  setup(s) {
    const { validateExport: c, exportEnvWithForce: n } = je(), i = h(""), f = h(!1), p = h(!1), u = h(!1), m = h(null), d = h(!1), v = h(null), y = h(!1), k = h(!1), _ = A(() => f.value ? "Validating..." : p.value ? "Exporting..." : "Export Environment");
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
    async function D() {
      k.value = !1, await $();
    }
    async function M() {
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
          const q = await R.blob(), F = URL.createObjectURL(q), G = m.value.path.split("/").pop() || "environment-export.tar.gz", S = document.createElement("a");
          S.href = F, S.download = G, document.body.appendChild(S), S.click(), document.body.removeChild(S), URL.revokeObjectURL(F);
        } catch (R) {
          console.error("Failed to download:", R), alert(`Download failed: ${R instanceof Error ? R.message : "Unknown error"}`);
        } finally {
          u.value = !1;
        }
      }
    }
    return (x, R) => (t(), o(W, null, [
      w(ot, null, {
        header: l(() => [
          w(nt, {
            title: "EXPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: R[0] || (R[0] = (q) => d.value = !0)
          })
        ]),
        content: l(() => [
          w(Oe, { title: "EXPORT OPTIONS" }, {
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
                  w(us, {
                    modelValue: i.value,
                    "onUpdate:modelValue": R[1] || (R[1] = (q) => i.value = q),
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
          m.value ? (t(), P(Oe, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: l(() => [
              w(st, {
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
                    w(Fe, { label: "Saved to:" }, {
                      default: l(() => [
                        w(d1, {
                          path: m.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    m.value.models_without_sources !== void 0 ? (t(), P(Fe, {
                      key: 0,
                      label: "Models without sources:",
                      value: m.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : r("", !0),
                    m.value.models_without_sources && m.value.models_without_sources > 0 ? (t(), o("div", T1, [...R[8] || (R[8] = [
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
                    w(te, {
                      variant: "secondary",
                      size: "sm",
                      onClick: C
                    }, {
                      default: l(() => [...R[10] || (R[10] = [
                        g(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    w(te, {
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
      w(kt, {
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
      y.value && v.value ? (t(), P(eo, {
        key: 0,
        issues: v.value.blocking_issues,
        onClose: R[4] || (R[4] = (q) => y.value = !1)
      }, null, 8, ["issues"])) : r("", !0),
      k.value && v.value ? (t(), P(to, {
        key: 1,
        models: v.value.warnings.models_without_sources,
        onConfirm: D,
        onCancel: R[5] || (R[5] = (q) => k.value = !1),
        onRevalidate: M
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
  setup(s, { expose: c, emit: n }) {
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
    }), (m, d) => (t(), o("div", z1, [
      e("input", {
        ref_key: "fileInputRef",
        ref: f,
        type: "file",
        accept: s.accept,
        multiple: s.multiple,
        disabled: s.disabled,
        class: "file-input-hidden",
        onChange: u
      }, null, 40, U1),
      w(te, {
        variant: s.variant,
        size: s.size,
        disabled: s.disabled,
        onClick: p
      }, {
        default: l(() => [
          Te(m.$slots, "default", {}, () => [
            d[0] || (d[0] = e("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              e("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              e("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            g(" " + a(s.label), 1)
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
  setup(s, { emit: c }) {
    const n = c, i = h(!1), f = h(null), p = h(0), u = A(() => f.value !== null), m = A(() => {
      var $;
      return (($ = f.value) == null ? void 0 : $.name) || "";
    }), d = A(() => {
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
      C && C.length > 0 && D(C[0]);
    }
    function b($) {
      $.length > 0 && D($[0]);
    }
    function D($) {
      f.value = $, n("fileSelected", $);
    }
    function M() {
      f.value = null, n("clear");
    }
    return ($, C) => (t(), o("div", {
      class: fe(["file-drop-zone", { "drop-active": i.value, "has-file": u.value }]),
      onDragenter: Be(v, ["prevent"]),
      onDragover: Be(y, ["prevent"]),
      onDragleave: Be(k, ["prevent"]),
      onDrop: Be(_, ["prevent"])
    }, [
      u.value ? (t(), o("div", G1, [
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
          onClick: M,
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
      ])) : (t(), o("div", A1, [
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
          e("p", F1, a(s.primaryText), 1),
          e("p", V1, a(s.secondaryText), 1)
        ]),
        e("div", W1, [
          w(O1, {
            accept: s.accept,
            multiple: s.multiple,
            variant: "primary",
            size: "sm",
            onChange: b
          }, {
            default: l(() => [
              g(a(s.buttonText), 1)
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
  setup(s) {
    const c = s, n = A(() => c.workflows.length), i = A(() => c.models.length), f = A(() => c.nodes.length);
    function p(u) {
      return u < 1024 ? `${u} B` : u < 1024 * 1024 ? `${(u / 1024).toFixed(1)} KB` : u < 1024 * 1024 * 1024 ? `${(u / (1024 * 1024)).toFixed(1)} MB` : `${(u / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (u, m) => (t(), o("div", X1, [
      e("div", Q1, [
        w(mt, null, {
          default: l(() => [...m[0] || (m[0] = [
            g("Import Preview", -1)
          ])]),
          _: 1
        }),
        s.sourceEnvironment ? (t(), o("span", Z1, [
          m[1] || (m[1] = g(" From: ", -1)),
          w(ws, null, {
            default: l(() => [
              g(a(s.sourceEnvironment), 1)
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
          s.workflows.length > 0 ? (t(), o("div", ay, [
            (t(!0), o(W, null, ne(s.workflows.slice(0, s.maxPreviewItems), (d) => (t(), o("div", {
              key: d,
              class: "preview-item"
            }, [
              m[4] || (m[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", ly, a(d), 1)
            ]))), 128)),
            s.workflows.length > s.maxPreviewItems ? (t(), o("div", iy, " +" + a(s.workflows.length - s.maxPreviewItems) + " more ", 1)) : r("", !0)
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
          s.models.length > 0 ? (t(), o("div", my, [
            (t(!0), o(W, null, ne(s.models.slice(0, s.maxPreviewItems), (d) => (t(), o("div", {
              key: d.filename,
              class: "preview-item"
            }, [
              m[7] || (m[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", vy, [
                e("span", fy, a(d.filename), 1),
                e("span", py, a(p(d.size)) + " • " + a(d.type), 1)
              ])
            ]))), 128)),
            s.models.length > s.maxPreviewItems ? (t(), o("div", gy, " +" + a(s.models.length - s.maxPreviewItems) + " more ", 1)) : r("", !0)
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
          s.nodes.length > 0 ? (t(), o("div", by, [
            (t(!0), o(W, null, ne(s.nodes.slice(0, s.maxPreviewItems), (d) => (t(), o("div", {
              key: d,
              class: "preview-item"
            }, [
              m[10] || (m[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", _y, a(d), 1)
            ]))), 128)),
            s.nodes.length > s.maxPreviewItems ? (t(), o("div", $y, " +" + a(s.nodes.length - s.maxPreviewItems) + " more ", 1)) : r("", !0)
          ])) : r("", !0)
        ]),
        s.gitBranch || s.gitCommit ? (t(), o("div", Cy, [
          m[11] || (m[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", xy, [
            s.gitBranch ? (t(), P(Fe, {
              key: 0,
              label: "Branch"
            }, {
              default: l(() => [
                w(ws, null, {
                  default: l(() => [
                    g(a(s.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : r("", !0),
            s.gitCommit ? (t(), P(Fe, {
              key: 1,
              label: "Commit"
            }, {
              default: l(() => [
                w(Ws, { hash: s.gitCommit }, null, 8, ["hash"])
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
  setup(s, { emit: c }) {
    const n = s, i = c, f = h(!1), p = h(!1);
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
    return (y, k) => (t(), o("div", Ey, [
      w(mt, null, {
        default: l(() => [...k[2] || (k[2] = [
          g("Configuration", -1)
        ])]),
        _: 1
      }),
      e("div", Py, [
        e("div", My, [
          w(rs, { required: "" }, {
            default: l(() => [...k[3] || (k[3] = [
              g("Environment Name", -1)
            ])]),
            _: 1
          }),
          e("div", Ry, [
            e("input", {
              type: "text",
              class: fe(["name-input", { error: s.nameError || s.name.length === 0, valid: p.value }]),
              value: s.name,
              placeholder: "my-imported-env",
              onInput: d,
              onBlur: v
            }, null, 42, Ty),
            f.value ? (t(), o("span", Dy, "...")) : p.value ? (t(), o("span", Ly, "✓")) : r("", !0)
          ]),
          s.nameError ? (t(), o("div", zy, a(s.nameError), 1)) : r("", !0),
          k[4] || (k[4] = e("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        e("div", Uy, [
          w(rs, null, {
            default: l(() => [...k[5] || (k[5] = [
              g("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          e("div", Ny, [
            (t(), o(W, null, ne(u, (_) => e("label", {
              key: _.value,
              class: fe(["strategy-option", { active: s.modelStrategy === _.value }])
            }, [
              e("input", {
                type: "radio",
                name: "model-strategy",
                value: _.value,
                checked: s.modelStrategy === _.value,
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
              checked: s.switchAfterImport,
              onChange: k[0] || (k[0] = (_) => i("update:switchAfterImport", _.target.checked))
            }, null, 40, Gy),
            k[6] || (k[6] = e("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        e("details", jy, [
          k[8] || (k[8] = e("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          e("div", Hy, [
            e("div", Ky, [
              w(rs, null, {
                default: l(() => [...k[7] || (k[7] = [
                  g("PyTorch Backend", -1)
                ])]),
                _: 1
              }),
              e("select", {
                class: "backend-select",
                value: s.torchBackend,
                onChange: k[1] || (k[1] = (_) => i("update:torchBackend", _.target.value))
              }, [
                (t(!0), o(W, null, ne(Me(Es), (_) => (t(), o("option", {
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
  setup(s, { expose: c, emit: n }) {
    var Ne, ce, ye, Re;
    const i = s, f = n, { previewTarballImport: p, previewGitImport: u, validateEnvironmentName: m, executeImport: d, executeGitImport: v, getImportProgress: y } = je();
    let k = null;
    const _ = h(null), b = h(i.resumeImport ?? !1), D = h(!1), M = h(!1), $ = h(""), C = h(!1), B = h(null), x = h(""), R = h(null), q = h(!1), F = h(null), G = h(null), S = h({
      name: ((Ne = i.initialProgress) == null ? void 0 : Ne.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), T = h(null), N = h({
      message: ((ce = i.initialProgress) == null ? void 0 : ce.message) ?? "Preparing import...",
      phase: ((ye = i.initialProgress) == null ? void 0 : ye.phase) ?? "",
      progress: ((Re = i.initialProgress) == null ? void 0 : Re.progress) ?? 0,
      error: null
    }), de = [
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 15 },
      { id: "extract_builtins", label: "Extract builtin nodes", progressThreshold: 20 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 35 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 60 },
      { id: "sync_nodes", label: "Sync custom nodes", progressThreshold: 70 },
      { id: "copy_workflows", label: "Copy workflows", progressThreshold: 80 },
      { id: "resolve_models", label: "Resolve models", progressThreshold: 85 },
      { id: "download_models", label: "Download models", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], se = A(() => {
      if (!G.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const ee = G.value;
      return {
        sourceEnvironment: ee.comfyui_version ? `ComfyUI ${ee.comfyui_version}` : "Unknown",
        workflows: ee.workflows.map((ie) => ie.name),
        models: ee.models.map((ie) => ({
          filename: ie.filename,
          size: 0,
          type: ie.relative_path.split("/")[0] || "model"
        })),
        nodes: ee.nodes.map((ie) => ie.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), X = A(() => !C.value && !B.value && G.value && S.value.name.length > 0 && !T.value && (_.value || R.value));
    async function ve(ee) {
      _.value = ee, C.value = !0, B.value = null, G.value = null;
      try {
        const ie = await p(ee);
        G.value = ie;
      } catch (ie) {
        B.value = ie instanceof Error ? ie.message : "Failed to analyze file", console.error("Preview error:", ie);
      } finally {
        C.value = !1;
      }
    }
    function J() {
      _.value = null, R.value = null, x.value = "", F.value = null, D.value = !1, M.value = !1, $.value = "", G.value = null, B.value = null, S.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, T.value = null, f("source-cleared");
    }
    function z() {
      Ce(), J(), b.value = !1, C.value = !1, q.value = !1, N.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function L() {
      if (x.value.trim()) {
        q.value = !0, F.value = null;
        try {
          const ee = await u(x.value.trim());
          R.value = x.value.trim(), G.value = ee;
        } catch (ee) {
          F.value = ee instanceof Error ? ee.message : "Failed to analyze repository";
        } finally {
          q.value = !1;
        }
      }
    }
    function I(ee) {
      try {
        const ie = new URL(ee);
        return ie.host + ie.pathname.replace(/\.git$/, "");
      } catch {
        return ee;
      }
    }
    async function me(ee) {
      if (!ee) {
        T.value = "Environment name is required";
        return;
      }
      try {
        const ie = await m(ee);
        T.value = ie.valid ? null : ie.error || "Invalid name";
      } catch {
        T.value = "Failed to validate name";
      }
    }
    async function Q() {
      if (S.value.name && !(!_.value && !R.value)) {
        b.value = !0, D.value = !1, N.value = { message: `Creating environment '${S.value.name}'...`, phase: "", progress: 0, error: null }, f("import-started");
        try {
          let ee;
          if (_.value)
            ee = await d(
              _.value,
              S.value.name,
              S.value.modelStrategy,
              S.value.torchBackend
            );
          else if (R.value)
            ee = await v(
              R.value,
              S.value.name,
              S.value.modelStrategy,
              S.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          ee.status === "started" ? _e() : (M.value = !1, $.value = ee.message, b.value = !1, D.value = !0);
        } catch (ee) {
          M.value = !1, $.value = ee instanceof Error ? ee.message : "Unknown error occurred during import", b.value = !1, D.value = !0;
        }
      }
    }
    async function _e() {
      if (k) return;
      const ee = async () => {
        try {
          const we = await y();
          return N.value = {
            message: we.message,
            phase: we.phase || "",
            progress: we.progress ?? (we.state === "importing" ? 50 : 0),
            error: we.error || null
          }, we.state === "complete" ? (Ce(), M.value = !0, $.value = `Environment '${we.environment_name}' created successfully`, b.value = !1, D.value = !0, we.environment_name && f("import-complete", we.environment_name, S.value.switchAfterImport), !1) : we.state === "error" ? (Ce(), M.value = !1, $.value = we.error || we.message, b.value = !1, D.value = !0, !1) : !0;
        } catch (we) {
          return console.error("Failed to poll import progress:", we), !0;
        }
      };
      await ee() && (k = setInterval(async () => {
        await ee() || Ce();
      }, 2e3));
    }
    function Ce() {
      k && (clearInterval(k), k = null);
    }
    function De(ee) {
      return ee < 1024 ? `${ee} B` : ee < 1024 * 1024 ? `${(ee / 1024).toFixed(1)} KB` : ee < 1024 * 1024 * 1024 ? `${(ee / (1024 * 1024)).toFixed(1)} MB` : `${(ee / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return Ve(async () => {
      try {
        const ee = await y();
        console.log("[ComfyGit ImportFlow] Import progress check:", ee.state, ee), ee.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", ee.environment_name), b.value = !0, S.value.name = ee.environment_name || S.value.name || "", N.value = {
          progress: ee.progress ?? 0,
          message: ee.message || "Importing...",
          phase: ee.phase || "",
          error: null
        }, _e());
      } catch (ee) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", ee);
      }
    }), c({
      handleReset: z,
      isImporting: b,
      canImport: X
    }), (ee, ie) => {
      var we;
      return t(), o("div", Qy, [
        !_.value && !R.value && !b.value ? (t(), o("div", Zy, [
          w(J1, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: ve
          }),
          ie[7] || (ie[7] = e("div", { class: "import-divider" }, [
            e("span", null, "or")
          ], -1)),
          e("div", e0, [
            ie[5] || (ie[5] = e("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            e("div", t0, [
              ze(e("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": ie[0] || (ie[0] = (xe) => x.value = xe),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: $t(L, ["enter"]),
                disabled: q.value
              }, null, 40, s0), [
                [Lt, x.value]
              ]),
              w(te, {
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
            F.value ? (t(), o("div", o0, a(F.value), 1)) : r("", !0),
            ie[6] || (ie[6] = e("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (_.value || R.value) && !b.value && !D.value ? (t(), o("div", n0, [
          e("div", a0, [
            _.value ? (t(), o("div", l0, [
              ie[8] || (ie[8] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", i0, [
                e("div", r0, a(_.value.name), 1),
                e("div", d0, a(De(_.value.size)), 1)
              ])
            ])) : R.value ? (t(), o("div", c0, [
              ie[10] || (ie[10] = e("div", { class: "file-bar-icon" }, "🔗", -1)),
              e("div", u0, [
                e("div", m0, a(I(R.value)), 1),
                ie[9] || (ie[9] = e("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : r("", !0),
            w(te, {
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
          C.value ? (t(), o("div", v0, [...ie[12] || (ie[12] = [
            e("div", { class: "loading-spinner" }, null, -1),
            e("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : B.value ? (t(), P(gt, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [B.value]
          }, null, 8, ["details"])) : G.value ? (t(), P(Iy, {
            key: 2,
            "source-environment": se.value.sourceEnvironment,
            workflows: se.value.workflows,
            models: se.value.models,
            nodes: se.value.nodes,
            "git-branch": se.value.gitBranch,
            "git-commit": se.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : r("", !0),
          G.value ? (t(), P(Xy, {
            key: 3,
            name: S.value.name,
            "onUpdate:name": ie[1] || (ie[1] = (xe) => S.value.name = xe),
            "model-strategy": S.value.modelStrategy,
            "onUpdate:modelStrategy": ie[2] || (ie[2] = (xe) => S.value.modelStrategy = xe),
            "torch-backend": S.value.torchBackend,
            "onUpdate:torchBackend": ie[3] || (ie[3] = (xe) => S.value.torchBackend = xe),
            "switch-after-import": S.value.switchAfterImport,
            "onUpdate:switchAfterImport": ie[4] || (ie[4] = (xe) => S.value.switchAfterImport = xe),
            "name-error": T.value,
            onValidateName: me
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : r("", !0),
          S.value.modelStrategy === "skip" && ((we = G.value) != null && we.models_needing_download) ? (t(), P(gt, {
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
              onClick: J
            }, {
              default: l(() => [...ie[13] || (ie[13] = [
                g(" Cancel ", -1)
              ])]),
              _: 1
            }),
            w(te, {
              variant: "primary",
              size: "md",
              disabled: !X.value,
              onClick: Q
            }, {
              default: l(() => [...ie[14] || (ie[14] = [
                g(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : b.value ? (t(), o("div", p0, [
          e("p", g0, [
            ie[15] || (ie[15] = g(" Importing environment ", -1)),
            e("strong", null, a(S.value.name), 1),
            ie[16] || (ie[16] = g("... ", -1))
          ]),
          w(vs, {
            progress: N.value.progress,
            message: N.value.message,
            "current-phase": N.value.phase,
            variant: N.value.error ? "error" : "default",
            "show-steps": !0,
            steps: de
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          N.value.error ? r("", !0) : (t(), o("p", h0, " This may take several minutes. Please wait... ")),
          N.value.error ? (t(), o("div", y0, [
            e("p", w0, a(N.value.error), 1)
          ])) : r("", !0)
        ])) : D.value ? (t(), o("div", k0, [
          e("div", {
            class: fe(["complete-icon", M.value ? "success" : "error"])
          }, a(M.value ? "✓" : "✕"), 3),
          e("div", b0, [
            e("div", _0, a(M.value ? "Import Successful" : "Import Failed"), 1),
            e("div", $0, a($.value), 1)
          ]),
          e("div", C0, [
            w(te, {
              variant: "primary",
              size: "md",
              onClick: z
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
}), so = /* @__PURE__ */ ae(x0, [["__scopeId", "data-v-72cbc04e"]]), S0 = /* @__PURE__ */ oe({
  __name: "ImportSection",
  emits: ["import-complete-switch"],
  setup(s, { emit: c }) {
    const n = c, i = h(!1);
    function f(p, u) {
      u && n("import-complete-switch", p);
    }
    return (p, u) => (t(), o(W, null, [
      w(ot, null, {
        header: l(() => [
          w(nt, {
            title: "IMPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: u[0] || (u[0] = (m) => i.value = !0)
          })
        ]),
        content: l(() => [
          w(so, { onImportComplete: f })
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
}, Q0 = ["value"], Z0 = { class: "config-row" }, ew = { class: "radio-group" }, tw = { class: "radio-option" }, sw = { class: "radio-label" }, ow = { class: "radio-option" }, nw = { class: "radio-label" }, aw = { class: "config-row" }, lw = { class: "radio-group" }, iw = { class: "radio-option" }, rw = { class: "radio-label" }, dw = { class: "radio-option" }, cw = { class: "radio-label" }, uw = { class: "config-row" }, mw = { class: "config-row" }, vw = { class: "summary-card" }, fw = {
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
  setup(s, { emit: c }) {
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
      clearRunPodKey: D,
      validateExport: M
    } = je(), $ = h(!1), C = h(!1), B = h(""), x = h(!1), R = h(!1), q = h(null), F = h(null), G = h(""), S = h(""), T = h(""), N = h("SECURE"), de = h("ON_DEMAND"), se = h("my-comfyui-deploy"), X = h(""), ve = h([]), J = h(!1), z = h([]), L = h(!1), I = h([]), me = h(!1), Q = h(null), _e = h(!1), Ce = h([]), De = h(!1), Ne = h(!1), ce = h(null), ye = h(null), Re = h(null), ee = h(null), ie = h(!1), we = h(null), xe = h(null), Xe = h(null), tt = h(!1), Ee = h(null), Qe = h(!1), qe = h(!1), He = A(() => z.value.find((le) => le.id === S.value) || null), dt = A(() => G.value ? z.value.filter((le) => le.data_center_id === G.value) : z.value), $e = A(() => I.value.filter((le) => le.available)), Ge = A(() => x.value && S.value && T.value && !Ne.value), Ze = (le) => {
      const O = I.value.find((et) => et.id === T.value);
      if (!O) return "0.00";
      if (le === "SECURE") return O.securePrice.toFixed(2);
      if (le === "COMMUNITY") return O.communityPrice.toFixed(2);
      const Ie = N.value === "SECURE";
      return le === "ON_DEMAND" ? Ie ? O.securePrice.toFixed(2) : O.communityPrice.toFixed(2) : Ie ? O.secureSpotPrice.toFixed(2) : O.communitySpotPrice.toFixed(2);
    }, Ye = A(() => {
      const le = I.value.find((be) => be.id === T.value), O = z.value.find((be) => be.id === S.value);
      if (!le) return null;
      const Ie = N.value === "SECURE", et = de.value === "SPOT";
      let pt;
      et ? pt = Ie ? le.secureSpotPrice : le.communitySpotPrice : pt = Ie ? le.securePrice : le.communityPrice;
      const H = O ? O.size_gb * 14e-5 : 0, ue = 4e-3;
      return {
        gpu: pt,
        volume: H,
        container: ue,
        total: pt + H + ue
      };
    });
    async function Ue() {
      console.log("[Deploy] Loading deploy data..."), await Y(), console.log("[Deploy] Volumes loaded, region:", G.value, "GPUs:", I.value.length), await Promise.all([V(), Z()]);
    }
    async function pe() {
      if (B.value) {
        R.value = !0, q.value = null;
        try {
          const le = await f(B.value, !0);
          le.status === "success" ? (x.value = !0, F.value = le.credit_balance ?? null, q.value = { type: "success", message: le.message }, await Ue()) : q.value = { type: "error", message: le.message };
        } catch (le) {
          q.value = {
            type: "error",
            message: le instanceof Error ? le.message : "Connection test failed"
          };
        } finally {
          R.value = !1;
        }
      }
    }
    async function K() {
      try {
        await D(), B.value = "", x.value = !1, q.value = null, F.value = null, ve.value = [], G.value = "", z.value = [], S.value = "", I.value = [], T.value = "", Q.value = null, Ce.value = [], n("toast", "API key cleared", "info");
      } catch {
        n("toast", "Failed to clear key", "error");
      }
    }
    async function Y() {
      L.value = !0, J.value = !0;
      try {
        const le = await p();
        z.value = le.volumes, console.log("[Deploy] Network volumes:", le.volumes.map((Ie) => ({ id: Ie.id, name: Ie.name, dc: Ie.data_center_id })));
        const O = /* @__PURE__ */ new Map();
        for (const Ie of le.volumes)
          Ie.data_center_id && !O.has(Ie.data_center_id) && O.set(Ie.data_center_id, {
            id: Ie.data_center_id,
            name: Ie.data_center_name || Ie.data_center_id,
            available: !0
          });
        if (ve.value = Array.from(O.values()), console.log("[Deploy] Data centers from volumes:", ve.value), z.value.length > 0) {
          const Ie = z.value[0];
          S.value = Ie.id, console.log("[Deploy] Auto-selected volume:", Ie.name, "data_center_id:", Ie.data_center_id), Ie.data_center_id ? (G.value = Ie.data_center_id, console.log("[Deploy] Set region to:", G.value), await E(Ie.data_center_id)) : console.warn("[Deploy] Volume has no data_center_id!");
        }
      } catch {
        n("toast", "Failed to load network volumes", "error");
      } finally {
        L.value = !1, J.value = !1;
      }
    }
    async function E(le) {
      console.log("[Deploy] loadGpuTypes called with dataCenterId:", le), me.value = !0;
      try {
        const O = await u(le);
        I.value = O.gpu_types, console.log(
          "[Deploy] GPU types loaded:",
          O.gpu_types.length,
          "GPUs,",
          O.gpu_types.filter((et) => et.available).length,
          "available"
        );
        const Ie = I.value.find((et) => et.available);
        Ie ? (T.value = Ie.id, console.log("[Deploy] Auto-selected GPU:", Ie.displayName)) : (T.value = "", console.log("[Deploy] No available GPUs in this region"));
      } catch {
        n("toast", "Failed to load GPU types", "error");
      } finally {
        me.value = !1;
      }
    }
    Ct(G, async (le) => {
      if (console.log("[Deploy] Region watcher fired:", le, "(loading volumes:", L.value, ")"), !le) return;
      if (L.value) {
        console.log("[Deploy] Skipping GPU load - volumes still loading");
        return;
      }
      const O = z.value.find((Ie) => Ie.id === S.value);
      O && O.data_center_id !== le && (S.value = ""), await E(le);
    }), Ct(S, async (le) => {
      if (console.log("[Deploy] Volume watcher fired:", le, "(loading volumes:", L.value, ")"), !le) {
        I.value = [], T.value = "";
        return;
      }
      if (L.value) {
        console.log("[Deploy] Skipping - volumes still loading");
        return;
      }
      const O = z.value.find((Ie) => Ie.id === le);
      O && O.data_center_id !== G.value ? G.value = O.data_center_id : O && await E(O.data_center_id);
    });
    async function V() {
      _e.value = !0;
      try {
        Q.value = await i();
      } catch {
        n("toast", "Failed to load environment summary", "error");
      } finally {
        _e.value = !1;
      }
    }
    async function Z() {
      De.value = !0;
      try {
        const le = await d();
        Ce.value = le.pods;
      } catch {
        n("toast", "Failed to load pods", "error");
      } finally {
        De.value = !1;
      }
    }
    async function ke() {
      if (!(!T.value || !S.value)) {
        tt.value = !0, ce.value = null;
        try {
          const le = await M();
          Ee.value = le, le.can_export ? le.warnings.models_without_sources.length > 0 ? qe.value = !0 : await lt() : Qe.value = !0;
        } catch (le) {
          ce.value = {
            status: "error",
            message: le instanceof Error ? le.message : "Validation failed"
          }, n("toast", "Validation failed", "error");
        } finally {
          tt.value = !1;
        }
      }
    }
    async function We() {
      qe.value = !1, await lt();
    }
    async function vt() {
      try {
        const le = await M();
        Ee.value = le;
      } catch (le) {
        console.error("Re-validation failed:", le);
      }
    }
    async function lt() {
      Ne.value = !0;
      try {
        let le;
        if (de.value === "SPOT") {
          const Ie = I.value.find((et) => et.id === T.value);
          Ie && (le = N.value === "SECURE" ? Ie.secureSpotPrice : Ie.communitySpotPrice);
        }
        const O = await m({
          gpu_type_id: T.value,
          pod_name: se.value || "my-comfyui-deploy",
          network_volume_id: S.value,
          cloud_type: N.value,
          pricing_type: de.value,
          spot_bid: le,
          ...X.value && { import_source: X.value }
        });
        ce.value = O, O.status === "success" && O.pod_id ? (we.value = O.pod_id, ie.value = !0, Mt(O.pod_id), await Z()) : n("toast", O.message, "error");
      } catch (le) {
        ce.value = {
          status: "error",
          message: le instanceof Error ? le.message : "Deployment failed"
        }, n("toast", "Deployment failed", "error");
      } finally {
        Ne.value = !1;
      }
    }
    function Mt(le) {
      xt(le), Xe.value = window.setInterval(() => xt(le), 3e3);
    }
    function it() {
      Xe.value && (clearInterval(Xe.value), Xe.value = null);
    }
    async function xt(le) {
      try {
        const O = await _(le);
        xe.value = O, (O.phase === "READY" || O.phase === "ERROR" || O.phase === "STOPPED") && (it(), O.phase === "READY" && n("toast", "ComfyUI is ready!", "success"), await Z());
      } catch (O) {
        console.error("Failed to poll deployment status:", O);
      }
    }
    function Ot() {
      ie.value = !1, it(), we.value = null, xe.value = null;
    }
    function ft() {
      var le;
      (le = xe.value) != null && le.comfyui_url && window.open(xe.value.comfyui_url, "_blank", "noopener,noreferrer");
    }
    function Gt(le) {
      return {
        STARTING_POD: "Starting Pod",
        SETTING_UP: "Setting Up Environment",
        READY: "Ready",
        STOPPED: "Stopped",
        ERROR: "Error"
      }[le || ""] || "Initializing...";
    }
    function zt(le) {
      return {
        STARTING_POD: 25,
        SETTING_UP: 60,
        READY: 100,
        STOPPED: 0,
        ERROR: 0
      }[le || ""] ?? 10;
    }
    async function jt(le) {
      ye.value = le;
      try {
        const O = await v(le);
        O.status === "success" ? (n("toast", "Pod terminated", "success"), await Z()) : n("toast", O.message, "error");
      } catch {
        n("toast", "Failed to terminate pod", "error");
      } finally {
        ye.value = null;
      }
    }
    async function Ht(le) {
      Re.value = le;
      try {
        const O = await y(le);
        O.status === "success" ? (n("toast", "Pod stopped", "success"), await Z()) : n("toast", O.message, "error");
      } catch {
        n("toast", "Failed to stop pod", "error");
      } finally {
        Re.value = null;
      }
    }
    async function Kt(le) {
      ee.value = le;
      try {
        const O = await k(le);
        O.status === "success" ? (n("toast", "Pod starting...", "success"), await Z()) : n("toast", O.message, "error");
      } catch {
        n("toast", "Failed to start pod", "error");
      } finally {
        ee.value = null;
      }
    }
    function qt(le) {
      window.open(le, "_blank", "noopener,noreferrer");
    }
    function At(le) {
      const O = Math.floor(le / 3600), Ie = Math.floor(le % 3600 / 60);
      return O > 0 ? `${O}h ${Ie}m` : `${Ie}m`;
    }
    return Ve(async () => {
      try {
        const le = await b(!0);
        le.has_key && le.key_preview && (B.value = `****${le.key_preview}`, le.valid ? (x.value = !0, F.value = le.credit_balance ?? null, q.value = { type: "success", message: "Connected to RunPod" }, await Ue()) : le.error && (q.value = { type: "error", message: le.error }));
      } catch {
      }
    }), Cs(() => {
      it();
    }), (le, O) => {
      var Ie, et, pt, H, ue, be;
      return t(), o(W, null, [
        w(ot, null, {
          header: l(() => [
            w(nt, {
              title: "DEPLOY TO CLOUD",
              "show-info": !0,
              onInfoClick: O[0] || (O[0] = (re) => $.value = !0)
            })
          ]),
          content: l(() => [
            w(Oe, { title: "RUNPOD API KEY" }, {
              default: l(() => [
                e("div", E0, [
                  e("div", P0, [
                    e("div", M0, [
                      ze(e("input", {
                        "onUpdate:modelValue": O[1] || (O[1] = (re) => B.value = re),
                        type: C.value ? "text" : "password",
                        class: "api-key-input",
                        placeholder: "Enter your RunPod API key (rp_...)",
                        disabled: x.value
                      }, null, 8, R0), [
                        [po, B.value]
                      ]),
                      e("button", {
                        class: "toggle-visibility-btn",
                        onClick: O[2] || (O[2] = (re) => C.value = !C.value),
                        title: C.value ? "Hide key" : "Show key"
                      }, a(C.value ? "👁" : "👁‍🗨"), 9, T0)
                    ]),
                    x.value ? r("", !0) : (t(), P(te, {
                      key: 0,
                      variant: "secondary",
                      size: "sm",
                      loading: R.value,
                      disabled: !B.value || R.value,
                      onClick: pe
                    }, {
                      default: l(() => [...O[16] || (O[16] = [
                        g(" Test ", -1)
                      ])]),
                      _: 1
                    }, 8, ["loading", "disabled"])),
                    x.value ? (t(), P(te, {
                      key: 1,
                      variant: "ghost",
                      size: "sm",
                      onClick: K
                    }, {
                      default: l(() => [...O[17] || (O[17] = [
                        g(" Clear ", -1)
                      ])]),
                      _: 1
                    })) : r("", !0)
                  ]),
                  q.value ? (t(), o("div", {
                    key: 0,
                    class: fe(["connection-status", q.value.type])
                  }, [
                    e("span", D0, a(q.value.type === "success" ? "✓" : "✕"), 1),
                    e("span", L0, a(q.value.message), 1),
                    F.value !== null ? (t(), o("span", z0, " $" + a(F.value.toFixed(2)) + " credit ", 1)) : r("", !0)
                  ], 2)) : r("", !0),
                  O[18] || (O[18] = e("div", { class: "api-key-help" }, [
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
            x.value ? (t(), P(Oe, {
              key: 0,
              title: "CONFIGURATION"
            }, {
              default: l(() => [
                e("div", U0, [
                  e("div", N0, [
                    O[19] || (O[19] = e("label", { class: "config-label" }, "Region", -1)),
                    ze(e("select", {
                      "onUpdate:modelValue": O[3] || (O[3] = (re) => G.value = re),
                      class: "config-select",
                      disabled: J.value
                    }, [
                      J.value ? (t(), o("option", A0, "Loading...")) : G.value ? r("", !0) : (t(), o("option", B0, "Select a region")),
                      (t(!0), o(W, null, ne(ve.value, (re) => (t(), o("option", {
                        key: re.id,
                        value: re.id,
                        disabled: !re.available
                      }, a(re.id) + " (" + a(re.name) + ")" + a(re.available ? "" : " [Unavailable]"), 9, F0))), 128))
                    ], 8, O0), [
                      [St, G.value]
                    ])
                  ]),
                  e("div", V0, [
                    O[24] || (O[24] = e("label", { class: "config-label" }, "Network Volume", -1)),
                    L.value ? (t(), o("div", W0, "Loading volumes...")) : dt.value.length === 0 ? (t(), o(W, { key: 1 }, [
                      e("div", G0, [
                        O[20] || (O[20] = e("span", { class: "no-volumes-icon" }, "⚠", -1)),
                        e("span", j0, "No volumes in " + a(G.value || "this region"), 1)
                      ]),
                      O[21] || (O[21] = e("p", { class: "volume-help" }, " Network volumes provide persistent storage that survives pod termination. Create one on RunPod first: ", -1)),
                      O[22] || (O[22] = e("a", {
                        href: "https://www.runpod.io/console/user/storage",
                        target: "_blank",
                        rel: "noopener",
                        class: "create-volume-link"
                      }, " Create Volume on RunPod → ", -1))
                    ], 64)) : (t(), o(W, { key: 2 }, [
                      ze(e("select", {
                        "onUpdate:modelValue": O[4] || (O[4] = (re) => S.value = re),
                        class: "config-select"
                      }, [
                        (t(!0), o(W, null, ne(dt.value, (re) => (t(), o("option", {
                          key: re.id,
                          value: re.id
                        }, a(re.name) + " (" + a(re.size_gb) + "GB) ", 9, H0))), 128))
                      ], 512), [
                        [St, S.value]
                      ]),
                      O[23] || (O[23] = e("a", {
                        href: "https://www.runpod.io/console/user/storage",
                        target: "_blank",
                        rel: "noopener",
                        class: "create-volume-inline-link"
                      }, " + Create new volume ", -1))
                    ], 64))
                  ]),
                  e("div", K0, [
                    O[25] || (O[25] = e("label", { class: "config-label" }, "GPU Type", -1)),
                    ze(e("select", {
                      "onUpdate:modelValue": O[5] || (O[5] = (re) => T.value = re),
                      class: "config-select",
                      disabled: me.value || !S.value
                    }, [
                      S.value ? me.value ? (t(), o("option", J0, "Loading GPUs...")) : $e.value.length === 0 ? (t(), o("option", X0, "No GPUs available in this region")) : r("", !0) : (t(), o("option", Y0, "Select a volume first")),
                      (t(!0), o(W, null, ne($e.value, (re) => (t(), o("option", {
                        key: re.id,
                        value: re.id
                      }, a(re.displayName) + " (" + a(re.memoryInGb) + "GB) - $" + a(N.value === "SECURE" ? re.securePrice.toFixed(2) : re.communityPrice.toFixed(2)) + "/hr " + a(re.stockStatus ? `[${re.stockStatus}]` : ""), 9, Q0))), 128))
                    ], 8, q0), [
                      [St, T.value]
                    ])
                  ]),
                  e("div", Z0, [
                    O[26] || (O[26] = e("label", { class: "config-label" }, "Cloud Type", -1)),
                    e("div", ew, [
                      e("label", tw, [
                        ze(e("input", {
                          type: "radio",
                          "onUpdate:modelValue": O[6] || (O[6] = (re) => N.value = re),
                          value: "SECURE"
                        }, null, 512), [
                          [Dt, N.value]
                        ]),
                        e("span", sw, "Secure ($" + a(Ze("SECURE")) + "/hr)", 1)
                      ]),
                      e("label", ow, [
                        ze(e("input", {
                          type: "radio",
                          "onUpdate:modelValue": O[7] || (O[7] = (re) => N.value = re),
                          value: "COMMUNITY"
                        }, null, 512), [
                          [Dt, N.value]
                        ]),
                        e("span", nw, "Community ($" + a(Ze("COMMUNITY")) + "/hr)", 1)
                      ])
                    ])
                  ]),
                  e("div", aw, [
                    O[27] || (O[27] = e("label", { class: "config-label" }, [
                      g(" Pricing "),
                      e("span", {
                        class: "info-tooltip",
                        title: "On-Demand pods run until you stop them. Spot pods are cheaper but may be interrupted if capacity is needed. Good for experimentation."
                      }, "ⓘ")
                    ], -1)),
                    e("div", lw, [
                      e("label", iw, [
                        ze(e("input", {
                          type: "radio",
                          "onUpdate:modelValue": O[8] || (O[8] = (re) => de.value = re),
                          value: "ON_DEMAND"
                        }, null, 512), [
                          [Dt, de.value]
                        ]),
                        e("span", rw, "On-Demand ($" + a(Ze("ON_DEMAND")) + "/hr)", 1)
                      ]),
                      e("label", dw, [
                        ze(e("input", {
                          type: "radio",
                          "onUpdate:modelValue": O[9] || (O[9] = (re) => de.value = re),
                          value: "SPOT"
                        }, null, 512), [
                          [Dt, de.value]
                        ]),
                        e("span", cw, "Spot ($" + a(Ze("SPOT")) + "/hr)", 1)
                      ])
                    ])
                  ]),
                  e("div", uw, [
                    O[28] || (O[28] = e("label", { class: "config-label" }, "Pod Name", -1)),
                    ze(e("input", {
                      "onUpdate:modelValue": O[10] || (O[10] = (re) => se.value = re),
                      type: "text",
                      class: "config-input",
                      placeholder: "my-comfyui-deploy"
                    }, null, 512), [
                      [Lt, se.value]
                    ])
                  ]),
                  e("div", mw, [
                    O[29] || (O[29] = e("label", { class: "config-label" }, [
                      g(" Environment Source "),
                      e("span", {
                        class: "info-tooltip",
                        title: "Git repository URL containing a ComfyGit environment (pyproject.toml with comfyui dependency)"
                      }, "ⓘ")
                    ], -1)),
                    ze(e("input", {
                      "onUpdate:modelValue": O[11] || (O[11] = (re) => X.value = re),
                      type: "text",
                      class: "config-input",
                      placeholder: "https://github.com/user/comfyui-env.git"
                    }, null, 512), [
                      [Lt, X.value]
                    ]),
                    O[30] || (O[30] = e("span", { class: "field-help" }, "Git URL of your ComfyGit environment repository", -1))
                  ])
                ])
              ]),
              _: 1
            })) : r("", !0),
            x.value ? (t(), P(Oe, {
              key: 1,
              title: "ENVIRONMENT SUMMARY"
            }, {
              default: l(() => [
                e("div", vw, [
                  _e.value ? (t(), o("div", fw, "Loading environment summary...")) : Q.value ? (t(), o(W, { key: 1 }, [
                    e("div", pw, [
                      O[31] || (O[31] = e("span", { class: "summary-label" }, "ComfyUI", -1)),
                      e("span", gw, a(Q.value.comfyui_version), 1)
                    ]),
                    e("div", hw, [
                      O[32] || (O[32] = e("span", { class: "summary-label" }, "Nodes", -1)),
                      e("span", yw, a(Q.value.node_count) + " custom nodes", 1)
                    ]),
                    e("div", ww, [
                      O[33] || (O[33] = e("span", { class: "summary-label" }, "Models", -1)),
                      e("span", kw, a(Q.value.model_count) + " models", 1)
                    ]),
                    Q.value.models_with_sources > 0 ? (t(), o("div", bw, [
                      e("span", _w, "└─ " + a(Q.value.models_with_sources) + " with sources (auto-download)", 1)
                    ])) : r("", !0),
                    Q.value.models_without_sources > 0 ? (t(), o("div", $w, [
                      e("span", Cw, "└─ " + a(Q.value.models_without_sources) + " without sources (manual upload)", 1)
                    ])) : r("", !0),
                    e("div", xw, [
                      O[34] || (O[34] = e("span", { class: "summary-label" }, "Workflows", -1)),
                      e("span", Sw, a(Q.value.workflow_count) + " committed", 1)
                    ]),
                    e("div", Iw, [
                      O[35] || (O[35] = e("span", { class: "summary-label" }, "Package", -1)),
                      e("span", Ew, "~" + a(Q.value.estimated_package_size_mb) + " MB", 1)
                    ])
                  ], 64)) : r("", !0)
                ])
              ]),
              _: 1
            })) : r("", !0),
            x.value && Ye.value ? (t(), P(Oe, {
              key: 2,
              title: "DEPLOYMENT SUMMARY"
            }, {
              default: l(() => {
                var re, j;
                return [
                  e("div", Pw, [
                    e("div", Mw, [
                      e("div", Rw, [
                        O[40] || (O[40] = e("div", { class: "column-header" }, "Pricing", -1)),
                        e("div", Tw, [
                          O[36] || (O[36] = e("span", { class: "pricing-label" }, "GPU:", -1)),
                          e("span", Dw, "$" + a(Ye.value.gpu.toFixed(2)) + "/hr", 1)
                        ]),
                        e("div", Lw, [
                          O[37] || (O[37] = e("span", { class: "pricing-label" }, "Volume:", -1)),
                          e("span", zw, "$" + a(Ye.value.volume.toFixed(3)) + "/hr", 1)
                        ]),
                        e("div", Uw, [
                          O[38] || (O[38] = e("span", { class: "pricing-label" }, "Disk:", -1)),
                          e("span", Nw, "$" + a(Ye.value.container.toFixed(3)) + "/hr", 1)
                        ]),
                        O[41] || (O[41] = e("div", { class: "pricing-divider" }, null, -1)),
                        e("div", Ow, [
                          O[39] || (O[39] = e("span", { class: "pricing-label" }, "Total:", -1)),
                          e("span", Aw, "~$" + a(Ye.value.total.toFixed(2)) + "/hr", 1)
                        ])
                      ]),
                      e("div", Bw, [
                        O[43] || (O[43] = e("div", { class: "column-header" }, "Pod Specs", -1)),
                        e("div", Fw, [
                          e("span", null, a(((re = I.value.find((U) => U.id === T.value)) == null ? void 0 : re.displayName) || "GPU") + " (" + a(((j = I.value.find((U) => U.id === T.value)) == null ? void 0 : j.memoryInGb) || 0) + "GB VRAM)", 1)
                        ]),
                        e("div", Vw, [
                          e("span", null, "Region: " + a(G.value), 1)
                        ]),
                        He.value ? (t(), o("div", Ww, [
                          e("span", null, "Volume: " + a(He.value.name), 1)
                        ])) : r("", !0),
                        de.value === "SPOT" ? (t(), o("div", Gw, [...O[42] || (O[42] = [
                          e("span", null, "⚠ Spot instance - may be interrupted", -1)
                        ])])) : r("", !0)
                      ])
                    ])
                  ])
                ];
              }),
              _: 1
            })) : r("", !0),
            x.value ? (t(), o("div", jw, [
              w(te, {
                variant: "primary",
                size: "md",
                loading: tt.value || Ne.value,
                disabled: !Ge.value,
                onClick: ke
              }, {
                default: l(() => [
                  O[44] || (O[44] = e("svg", {
                    width: "16",
                    height: "16",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    e("path", { d: "M8 1L3 6h3v5h4V6h3L8 1z" }),
                    e("path", { d: "M14 12v2H2v-2H0v4h16v-4h-2z" })
                  ], -1)),
                  g(" " + a(tt.value ? "Validating..." : Ne.value ? "Deploying..." : "Deploy to RunPod"), 1)
                ]),
                _: 1
              }, 8, ["loading", "disabled"])
            ])) : r("", !0),
            ce.value ? (t(), P(Oe, {
              key: 4,
              title: "DEPLOY STATUS"
            }, {
              default: l(() => [
                w(st, {
                  status: ce.value.status === "success" ? "synced" : "broken"
                }, Nt({
                  icon: l(() => [
                    g(a(ce.value.status === "success" ? "✓" : "✕"), 1)
                  ]),
                  title: l(() => [
                    g(a(ce.value.status === "success" ? "Deployment Started" : "Deployment Failed"), 1)
                  ]),
                  subtitle: l(() => [
                    g(a(ce.value.message), 1)
                  ]),
                  actions: l(() => [
                    w(te, {
                      variant: "ghost",
                      size: "sm",
                      onClick: O[12] || (O[12] = (re) => ce.value = null)
                    }, {
                      default: l(() => [...O[45] || (O[45] = [
                        g(" Dismiss ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, [
                  ce.value.pod_id ? {
                    name: "details",
                    fn: l(() => [
                      w(Fe, {
                        label: "Pod ID:",
                        value: ce.value.pod_id
                      }, null, 8, ["value"])
                    ]),
                    key: "0"
                  } : void 0
                ]), 1032, ["status"])
              ]),
              _: 1
            })) : r("", !0),
            x.value ? (t(), P(Oe, {
              key: 5,
              title: "ACTIVE PODS"
            }, {
              default: l(() => [
                e("div", Hw, [
                  w(te, {
                    variant: "ghost",
                    size: "sm",
                    loading: De.value,
                    onClick: Z
                  }, {
                    default: l(() => [...O[46] || (O[46] = [
                      g(" Refresh ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"])
                ]),
                De.value && Ce.value.length === 0 ? (t(), o("div", Kw, " Loading pods... ")) : Ce.value.length === 0 ? (t(), o("div", qw, [...O[47] || (O[47] = [
                  e("span", { class: "empty-icon" }, "○", -1),
                  e("span", { class: "empty-text" }, "No active pods", -1)
                ])])) : (t(), o("div", Yw, [
                  (t(!0), o(W, null, ne(Ce.value, (re) => (t(), o("div", {
                    key: re.id,
                    class: "pod-card"
                  }, [
                    e("div", Jw, [
                      e("span", Xw, a(re.name), 1),
                      e("span", {
                        class: fe(["pod-status", re.status.toLowerCase()])
                      }, a(re.status === "RUNNING" ? "●" : "○") + " " + a(re.status), 3)
                    ]),
                    e("div", Qw, [
                      e("span", Zw, a(re.gpu_type), 1),
                      O[48] || (O[48] = e("span", { class: "pod-separator" }, "•", -1)),
                      e("span", ek, a(At(re.uptime_seconds)), 1),
                      O[49] || (O[49] = e("span", { class: "pod-separator" }, "•", -1)),
                      e("span", tk, "$" + a(re.total_cost.toFixed(2)), 1)
                    ]),
                    e("div", sk, [
                      re.comfyui_url && re.status === "RUNNING" ? (t(), P(te, {
                        key: 0,
                        variant: "primary",
                        size: "sm",
                        onClick: (j) => qt(re.comfyui_url)
                      }, {
                        default: l(() => [...O[50] || (O[50] = [
                          g(" Open ComfyUI ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : r("", !0),
                      re.status === "RUNNING" ? (t(), P(te, {
                        key: 1,
                        variant: "secondary",
                        size: "sm",
                        loading: Re.value === re.id,
                        onClick: (j) => Ht(re.id),
                        title: "Stop pod (saves money, keeps storage)"
                      }, {
                        default: l(() => [...O[51] || (O[51] = [
                          g(" Stop ", -1)
                        ])]),
                        _: 1
                      }, 8, ["loading", "onClick"])) : r("", !0),
                      re.status === "EXITED" || re.status === "STOPPED" ? (t(), P(te, {
                        key: 2,
                        variant: "secondary",
                        size: "sm",
                        loading: ee.value === re.id,
                        onClick: (j) => Kt(re.id),
                        title: "Start stopped pod"
                      }, {
                        default: l(() => [...O[52] || (O[52] = [
                          g(" Start ", -1)
                        ])]),
                        _: 1
                      }, 8, ["loading", "onClick"])) : r("", !0),
                      w(te, {
                        variant: "ghost",
                        size: "sm",
                        loading: ye.value === re.id,
                        onClick: (j) => jt(re.id)
                      }, {
                        default: l(() => [...O[53] || (O[53] = [
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
          show: $.value,
          title: "Deploy to Cloud",
          onClose: O[13] || (O[13] = (re) => $.value = !1)
        }, {
          content: l(() => [...O[54] || (O[54] = [
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
        ie.value ? (t(), P(at, {
          key: 0,
          title: "Deploying to RunPod",
          size: "sm",
          "show-close-button": ((Ie = xe.value) == null ? void 0 : Ie.phase) === "READY" || ((et = xe.value) == null ? void 0 : et.phase) === "ERROR" || ((pt = xe.value) == null ? void 0 : pt.phase) === "STOPPED",
          "close-on-overlay-click": !1,
          onClose: Ot
        }, Nt({
          body: l(() => {
            var re, j, U, ge, Pe, Ae, Ke, ct, Rt, Yt, Jt, Xt;
            return [
              e("div", ok, [
                e("div", nk, [
                  e("div", {
                    class: fe(["phase-icon", (j = (re = xe.value) == null ? void 0 : re.phase) == null ? void 0 : j.toLowerCase()])
                  }, [
                    ((U = xe.value) == null ? void 0 : U.phase) === "READY" ? (t(), o("span", ak, "✓")) : ((ge = xe.value) == null ? void 0 : ge.phase) === "ERROR" ? (t(), o("span", lk, "✕")) : ((Pe = xe.value) == null ? void 0 : Pe.phase) === "STOPPED" ? (t(), o("span", ik, "○")) : (t(), o("span", rk, "⟳"))
                  ], 2),
                  e("div", dk, [
                    e("div", ck, a(Gt((Ae = xe.value) == null ? void 0 : Ae.phase)), 1),
                    e("div", uk, a(((Ke = xe.value) == null ? void 0 : Ke.phase_detail) || "Starting..."), 1)
                  ])
                ]),
                w(Ps, {
                  progress: zt((ct = xe.value) == null ? void 0 : ct.phase),
                  variant: ((Rt = xe.value) == null ? void 0 : Rt.phase) === "ERROR" ? "error" : ((Yt = xe.value) == null ? void 0 : Yt.phase) === "READY" ? "success" : "default"
                }, null, 8, ["progress", "variant"]),
                ((Jt = xe.value) == null ? void 0 : Jt.phase) === "READY" ? (t(), o("div", mk, [
                  w(te, {
                    variant: "primary",
                    size: "md",
                    onClick: ft
                  }, {
                    default: l(() => [...O[55] || (O[55] = [
                      g(" Open ComfyUI ", -1)
                    ])]),
                    _: 1
                  })
                ])) : r("", !0),
                e("div", vk, [
                  (Xt = xe.value) != null && Xt.console_url ? (t(), o("a", {
                    key: 0,
                    href: xe.value.console_url,
                    target: "_blank",
                    rel: "noopener"
                  }, " View in RunPod Console → ", 8, fk)) : r("", !0)
                ])
              ])
            ];
          }),
          _: 2
        }, [
          ((H = xe.value) == null ? void 0 : H.phase) === "READY" || ((ue = xe.value) == null ? void 0 : ue.phase) === "ERROR" || ((be = xe.value) == null ? void 0 : be.phase) === "STOPPED" ? {
            name: "footer",
            fn: l(() => [
              w(te, {
                variant: "ghost",
                size: "sm",
                onClick: Ot
              }, {
                default: l(() => [...O[56] || (O[56] = [
                  g(" Close ", -1)
                ])]),
                _: 1
              })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["show-close-button"])) : r("", !0),
        Qe.value && Ee.value ? (t(), P(eo, {
          key: 1,
          issues: Ee.value.blocking_issues,
          onClose: O[14] || (O[14] = (re) => Qe.value = !1)
        }, null, 8, ["issues"])) : r("", !0),
        qe.value && Ee.value ? (t(), P(to, {
          key: 2,
          models: Ee.value.warnings.models_without_sources,
          onConfirm: We,
          onCancel: O[15] || (O[15] = (re) => qe.value = !1),
          onRevalidate: vt
        }, null, 8, ["models"])) : r("", !0)
      ], 64);
    };
  }
}), gk = /* @__PURE__ */ ae(pk, [["__scopeId", "data-v-c0489890"]]), hk = { class: "header-info" }, yk = { class: "commit-hash" }, wk = {
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
  setup(s) {
    const c = s, { getCommitDetail: n } = je(), i = h(null), f = h(!0), p = A(() => {
      if (!i.value) return !1;
      const m = i.value.changes.workflows;
      return m.added.length > 0 || m.modified.length > 0 || m.deleted.length > 0;
    }), u = A(() => {
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
    }), (m, d) => (t(), P(at, {
      size: "md",
      "show-close-button": !1,
      onClose: d[3] || (d[3] = (v) => m.$emit("close"))
    }, {
      header: l(() => {
        var v, y, k, _;
        return [
          e("div", hk, [
            d[4] || (d[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", yk, a(((v = i.value) == null ? void 0 : v.short_hash) || s.commit.short_hash || ((y = s.commit.hash) == null ? void 0 : y.slice(0, 7))), 1),
            (_ = (k = i.value) == null ? void 0 : k.refs) != null && _.length ? (t(), o("span", wk, [
              (t(!0), o(W, null, ne(i.value.refs, (b) => (t(), o("span", {
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
          e("div", kk, a(((v = i.value) == null ? void 0 : v.message) || s.commit.message), 1),
          e("div", bk, a(((y = i.value) == null ? void 0 : y.date_relative) || s.commit.date_relative || s.commit.relative_date), 1),
          f.value ? (t(), o("div", _k, "Loading details...")) : i.value ? (t(), o("div", $k, [
            e("div", Ck, [
              e("span", xk, a(i.value.stats.files_changed) + " files", 1),
              e("span", Sk, "+" + a(i.value.stats.insertions), 1),
              e("span", Ik, "-" + a(i.value.stats.deletions), 1)
            ]),
            p.value ? (t(), o("div", Ek, [
              w(os, { variant: "section" }, {
                default: l(() => [...d[6] || (d[6] = [
                  g("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (t(!0), o(W, null, ne(i.value.changes.workflows.added, (k) => (t(), o("div", {
                key: "add-" + k,
                class: "change-item added"
              }, [
                d[7] || (d[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(k), 1)
              ]))), 128)),
              (t(!0), o(W, null, ne(i.value.changes.workflows.modified, (k) => (t(), o("div", {
                key: "mod-" + k,
                class: "change-item modified"
              }, [
                d[8] || (d[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, a(k), 1)
              ]))), 128)),
              (t(!0), o(W, null, ne(i.value.changes.workflows.deleted, (k) => (t(), o("div", {
                key: "del-" + k,
                class: "change-item deleted"
              }, [
                d[9] || (d[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(k), 1)
              ]))), 128))
            ])) : r("", !0),
            u.value ? (t(), o("div", Pk, [
              w(os, { variant: "section" }, {
                default: l(() => [...d[10] || (d[10] = [
                  g("NODES", -1)
                ])]),
                _: 1
              }),
              (t(!0), o(W, null, ne(i.value.changes.nodes.added, (k) => (t(), o("div", {
                key: "add-" + k.name,
                class: "change-item added"
              }, [
                d[11] || (d[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(k.name), 1),
                k.version ? (t(), o("span", Mk, "(" + a(k.version) + ")", 1)) : r("", !0)
              ]))), 128)),
              (t(!0), o(W, null, ne(i.value.changes.nodes.removed, (k) => (t(), o("div", {
                key: "rem-" + k.name,
                class: "change-item deleted"
              }, [
                d[12] || (d[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(k.name), 1)
              ]))), 128))
            ])) : r("", !0),
            i.value.changes.models.resolved > 0 ? (t(), o("div", Rk, [
              w(os, { variant: "section" }, {
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
          onClick: d[1] || (d[1] = (v) => m.$emit("createBranch", s.commit))
        }, {
          default: l(() => [...d[15] || (d[15] = [
            g(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        w(he, {
          variant: "primary",
          onClick: d[2] || (d[2] = (v) => m.$emit("checkout", s.commit))
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
  setup(s, { emit: c }) {
    const n = s, i = c;
    function f(p) {
      p.shiftKey || p.ctrlKey || p.metaKey || n.submitOnEnter && (p.preventDefault(), i("submit"));
    }
    return (p, u) => (t(), o("div", zk, [
      e("textarea", {
        value: s.modelValue,
        rows: s.rows,
        placeholder: s.placeholder,
        disabled: s.disabled,
        maxlength: s.maxLength,
        class: "base-textarea",
        onInput: u[0] || (u[0] = (m) => p.$emit("update:modelValue", m.target.value)),
        onKeydown: [
          u[1] || (u[1] = $t(Be((m) => p.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          u[2] || (u[2] = $t(Be((m) => p.$emit("ctrlEnter"), ["meta"]), ["enter"])),
          $t(f, ["enter"])
        ]
      }, null, 40, Uk),
      s.showCharCount && s.maxLength ? (t(), o("div", Nk, a(s.modelValue.length) + " / " + a(s.maxLength), 1)) : r("", !0)
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
  setup(s) {
    return (c, n) => (t(), o("label", {
      class: fe(["base-checkbox", { disabled: s.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: s.modelValue,
        disabled: s.disabled,
        class: "base-checkbox-input",
        onChange: n[0] || (n[0] = (i) => c.$emit("update:modelValue", i.target.checked))
      }, null, 40, Ak),
      e("span", Bk, [
        s.modelValue ? (t(), o("svg", Fk, [...n[1] || (n[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : r("", !0)
      ]),
      c.$slots.default ? (t(), o("span", Vk, [
        Te(c.$slots, "default", {}, void 0, !0)
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
  setup(s, { emit: c }) {
    const n = s, i = c, { commit: f } = je(), p = h(""), u = h(!1), m = h(!1), d = A(() => {
      if (!n.status) return !1;
      const D = n.status.workflows;
      return D.new.length > 0 || D.modified.length > 0 || D.deleted.length > 0 || n.status.has_changes;
    }), v = A(() => {
      if (!n.status) return !1;
      const D = n.status.workflows, M = n.status.git_changes;
      return D.new.length > 0 || D.modified.length > 0 || D.deleted.length > 0 || M.nodes_added.length > 0 || M.nodes_removed.length > 0;
    }), y = A(() => {
      var D;
      return (D = n.status) != null && D.workflows.analyzed ? n.status.workflows.analyzed.filter(
        (M) => M.has_issues && (M.sync_state === "new" || M.sync_state === "modified")
      ) : [];
    }), k = A(() => y.value.length > 0), _ = A(() => k.value && !m.value);
    async function b() {
      var D, M, $;
      if (!(k.value && !m.value) && !(!d.value || !p.value.trim() || u.value)) {
        u.value = !0;
        try {
          const C = await f(p.value.trim(), m.value);
          if (C.status === "success") {
            const B = `Committed: ${((D = C.summary) == null ? void 0 : D.new) || 0} new, ${((M = C.summary) == null ? void 0 : M.modified) || 0} modified, ${(($ = C.summary) == null ? void 0 : $.deleted) || 0} deleted`;
            i("committed", { success: !0, message: B });
          } else C.status === "no_changes" ? i("committed", { success: !1, message: "No changes to commit" }) : C.status === "blocked" ? i("committed", { success: !1, message: 'Commit blocked - enable "Allow issues" to force commit' }) : i("committed", { success: !1, message: C.message || "Commit failed" });
        } catch (C) {
          i("committed", { success: !1, message: C instanceof Error ? C.message : "Commit failed" });
        } finally {
          u.value = !1;
        }
      }
    }
    return (D, M) => s.asModal ? (t(), P(Je, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: M[5] || (M[5] = ($) => i("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: M[4] || (M[4] = Be(() => {
          }, ["stop"]))
        }, [
          e("div", Gk, [
            M[11] || (M[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: M[0] || (M[0] = ($) => i("close"))
            }, [...M[10] || (M[10] = [
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
            s.status && d.value ? (t(), o("div", Hk, [
              s.status.workflows.new.length ? (t(), o("div", Kk, [
                M[12] || (M[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(s.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : r("", !0),
              s.status.workflows.modified.length ? (t(), o("div", qk, [
                M[13] || (M[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, a(s.status.workflows.modified.length) + " modified", 1)
              ])) : r("", !0),
              s.status.workflows.deleted.length ? (t(), o("div", Yk, [
                M[14] || (M[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(s.status.workflows.deleted.length) + " deleted", 1)
              ])) : r("", !0),
              s.status.git_changes.nodes_added.length ? (t(), o("div", Jk, [
                M[15] || (M[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(s.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : r("", !0),
              s.status.git_changes.nodes_removed.length ? (t(), o("div", Xk, [
                M[16] || (M[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(s.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : r("", !0),
              v.value ? r("", !0) : (t(), o("div", Qk, [...M[17] || (M[17] = [
                e("span", { class: "change-icon modified" }, "~", -1),
                e("span", null, "Configuration updated", -1)
              ])]))
            ])) : s.status ? (t(), o("div", Zk, " No changes to commit ")) : (t(), o("div", eb, " Loading... ")),
            k.value ? (t(), o("div", tb, [
              e("div", sb, [
                M[18] || (M[18] = e("span", { class: "error-icon" }, "⚠", -1)),
                e("span", ob, a(y.value.length) + " workflow(s) can't run", 1)
              ]),
              e("div", nb, [
                (t(!0), o(W, null, ne(y.value, ($) => (t(), o("div", {
                  key: $.name,
                  class: "issue-item"
                }, [
                  e("strong", null, a($.name), 1),
                  g(": " + a($.issue_summary), 1)
                ]))), 128))
              ]),
              w(Os, {
                modelValue: m.value,
                "onUpdate:modelValue": M[1] || (M[1] = ($) => m.value = $),
                class: "allow-issues-toggle"
              }, {
                default: l(() => [...M[19] || (M[19] = [
                  g(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : r("", !0),
            e("div", ab, [
              w(Ns, {
                modelValue: p.value,
                "onUpdate:modelValue": M[2] || (M[2] = ($) => p.value = $),
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
              onClick: M[3] || (M[3] = ($) => i("close"))
            }, {
              default: l(() => [...M[20] || (M[20] = [
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
    ])) : (t(), o("div", ib, [
      e("div", rb, [
        M[22] || (M[22] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: M[6] || (M[6] = ($) => i("close"))
        }, [...M[21] || (M[21] = [
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
        s.status && d.value ? (t(), o("div", cb, [
          s.status.workflows.new.length ? (t(), o("div", ub, [
            M[23] || (M[23] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(s.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : r("", !0),
          s.status.workflows.modified.length ? (t(), o("div", mb, [
            M[24] || (M[24] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, a(s.status.workflows.modified.length) + " modified", 1)
          ])) : r("", !0),
          s.status.workflows.deleted.length ? (t(), o("div", vb, [
            M[25] || (M[25] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(s.status.workflows.deleted.length) + " deleted", 1)
          ])) : r("", !0),
          s.status.git_changes.nodes_added.length ? (t(), o("div", fb, [
            M[26] || (M[26] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(s.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : r("", !0),
          s.status.git_changes.nodes_removed.length ? (t(), o("div", pb, [
            M[27] || (M[27] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(s.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : r("", !0),
          v.value ? r("", !0) : (t(), o("div", gb, [...M[28] || (M[28] = [
            e("span", { class: "change-icon modified" }, "~", -1),
            e("span", null, "Configuration updated", -1)
          ])]))
        ])) : s.status ? (t(), o("div", hb, " No changes to commit ")) : (t(), o("div", yb, " Loading... ")),
        k.value ? (t(), o("div", wb, [
          e("div", kb, [
            M[29] || (M[29] = e("span", { class: "error-icon" }, "⚠", -1)),
            e("span", bb, a(y.value.length) + " workflow(s) can't run", 1)
          ]),
          e("div", _b, [
            (t(!0), o(W, null, ne(y.value, ($) => (t(), o("div", {
              key: $.name,
              class: "issue-item"
            }, [
              e("strong", null, a($.name), 1),
              g(": " + a($.issue_summary), 1)
            ]))), 128))
          ]),
          w(Os, {
            modelValue: m.value,
            "onUpdate:modelValue": M[7] || (M[7] = ($) => m.value = $),
            class: "allow-issues-toggle"
          }, {
            default: l(() => [...M[30] || (M[30] = [
              g(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : r("", !0),
        e("div", $b, [
          w(Ns, {
            modelValue: p.value,
            "onUpdate:modelValue": M[8] || (M[8] = ($) => p.value = $),
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
          onClick: M[9] || (M[9] = ($) => i("close"))
        }, {
          default: l(() => [...M[31] || (M[31] = [
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
}), oo = /* @__PURE__ */ ae(xb, [["__scopeId", "data-v-d0fe6172"]]), Sb = { class: "modal-header" }, Ib = { class: "modal-body" }, Eb = { class: "switch-message" }, Pb = { class: "switch-details" }, Mb = { class: "modal-actions" }, Rb = /* @__PURE__ */ oe({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(s) {
    return (c, n) => (t(), P(Je, { to: "body" }, [
      s.show ? (t(), o("div", {
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
              e("strong", null, a(s.fromEnvironment), 1),
              n[7] || (n[7] = g(" to ", -1)),
              e("strong", null, a(s.toEnvironment), 1),
              n[8] || (n[8] = g("? ", -1))
            ]),
            n[9] || (n[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This will restart ComfyUI")
            ], -1)),
            e("p", Pb, ' Your current work will be preserved. You can switch back to "' + a(s.fromEnvironment) + '" anytime. ', 1),
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
  setup(s) {
    const c = s, n = A(() => {
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
    }), i = A(() => c.state === "complete" ? "success" : c.state === "critical_failure" || c.state === "rolled_back" ? "error" : "default"), f = A(() => {
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
    return (p, u) => (t(), P(Je, { to: "body" }, [
      s.show ? (t(), o("div", Db, [
        e("div", Lb, [
          u[1] || (u[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", zb, [
            w(Ps, {
              progress: s.progress,
              variant: i.value
            }, null, 8, ["progress", "variant"]),
            e("div", Ub, [
              e("div", Nb, a(s.progress) + "%", 1),
              e("div", Ob, a(n.value), 1)
            ]),
            e("div", Ab, [
              (t(!0), o(W, null, ne(f.value, (m) => (t(), o("div", {
                key: m.state,
                class: fe(["switch-step", m.status])
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
  setup(s) {
    return (c, n) => (t(), P(Je, { to: "body" }, [
      s.show ? (t(), o("div", {
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
            s.mismatchDetails.missing_nodes.length ? (t(), o("div", Hb, [
              n[6] || (n[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", Kb, [
                (t(!0), o(W, null, ne(s.mismatchDetails.missing_nodes, (i) => (t(), o("div", {
                  key: i,
                  class: "node-item add"
                }, " + " + a(i), 1))), 128))
              ])
            ])) : r("", !0),
            s.mismatchDetails.extra_nodes.length ? (t(), o("div", qb, [
              n[7] || (n[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", Yb, [
                (t(!0), o(W, null, ne(s.mismatchDetails.extra_nodes, (i) => (t(), o("div", {
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
  setup(s) {
    function c(n) {
      window.open(n, "_blank", "noopener,noreferrer");
    }
    return (n, i) => (t(), o("div", s_, [
      (t(!0), o(W, null, ne(Me(Zb), (f) => (t(), o(W, {
        key: f.id
      }, [
        f.label ? (t(), o("button", {
          key: 0,
          class: "icon-btn sponsor-btn",
          title: f.title,
          "aria-label": f.ariaLabel,
          onClick: (p) => c(f.url)
        }, [
          g(a(f.label) + " ", 1),
          (t(), o("svg", n_, [
            e("path", {
              d: f.iconPath
            }, null, 8, a_)
          ]))
        ], 8, o_)) : (t(), o("button", {
          key: 1,
          class: "icon-btn social-link",
          title: f.title,
          "aria-label": f.ariaLabel,
          onClick: (p) => c(f.url)
        }, [
          (t(), o("svg", i_, [
            e("path", {
              d: f.iconPath
            }, null, 8, r_)
          ]))
        ], 8, l_))
      ], 64))), 128))
    ]));
  }
}), no = /* @__PURE__ */ ae(d_, [["__scopeId", "data-v-4f846342"]]), c_ = { class: "footer-info" }, u_ = { class: "version" }, m_ = { class: "made-by" }, v_ = /* @__PURE__ */ oe({
  __name: "FooterInfo",
  setup(s) {
    return (c, n) => (t(), o("div", c_, [
      e("span", u_, a(Me(e_)), 1),
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
        g(" by " + a(Me(t_)), 1)
      ])
    ]));
  }
}), ao = /* @__PURE__ */ ae(v_, [["__scopeId", "data-v-8bc3db0a"]]), f_ = /* @__PURE__ */ oe({
  __name: "WorkspaceSettingsModal",
  props: {
    workspacePath: {}
  },
  emits: ["close"],
  setup(s, { emit: c }) {
    const n = h(null);
    async function i() {
      var p;
      await ((p = n.value) == null ? void 0 : p.saveSettings());
    }
    function f() {
      console.log("[ComfyGit] Settings saved from modal");
    }
    return (p, u) => (t(), P(at, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: u[1] || (u[1] = (m) => p.$emit("close"))
    }, {
      body: l(() => [
        w(Js, {
          ref_key: "contentRef",
          ref: n,
          "workspace-path": s.workspacePath,
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
}, Q_ = { class: "wizard-footer" }, Z_ = { class: "wizard-footer-actions" }, Bt = 10, e2 = 600 * 1e3, As = 1800 * 1e3, t2 = /* @__PURE__ */ oe({
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
  setup(s, { emit: c }) {
    const n = s, i = c, {
      initializeWorkspace: f,
      getInitializeProgress: p,
      validatePath: u,
      createEnvironment: m,
      getCreateProgress: d,
      getImportProgress: v,
      getComfyUIReleases: y
    } = je(), k = h(n.initialStep || 1), _ = h(null), b = h("landing"), D = h(!1), M = h(!1), $ = h(!1), C = h(!1), B = h(null), x = h(n.initialStep === 2), R = h(n.defaultPath), q = h(!!n.detectedModelsDir), F = h(n.detectedModelsDir || ""), G = h(null), S = h(null), T = h(null), N = h(null), de = h("my-new-env"), se = h(Qs), X = h("latest"), ve = h(Zs), J = h(!0), z = h(null), L = h(null), I = h([{ tag_name: "latest", name: "Latest", published_at: "" }]), me = h(!1), Q = h(!1), _e = h(!1), Ce = h({ progress: 0, message: "" }), De = h({ progress: 0, message: "" }), Ne = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], ce = h(0), ye = h(null), Re = h(0), ee = h(null), ie = A(() => {
      var E, V;
      const pe = (E = R.value) == null ? void 0 : E.trim(), K = !G.value, Y = !q.value || !S.value && ((V = F.value) == null ? void 0 : V.trim());
      return pe && K && Y;
    }), we = A(() => {
      var pe;
      return (pe = de.value) == null ? void 0 : pe.trim();
    }), xe = A(() => !!(k.value === 2 || L.value || n.setupState === "empty_workspace" || n.setupState === "unmanaged")), Xe = A(() => L.value || n.workspacePath || null);
    async function tt() {
      var pe;
      if (G.value = null, !!((pe = R.value) != null && pe.trim()))
        try {
          const K = await u({ path: R.value, type: "workspace" });
          K.valid || (G.value = K.error || "Invalid path");
        } catch (K) {
          G.value = K instanceof Error ? K.message : "Validation failed";
        }
    }
    async function Ee() {
      var pe;
      if (S.value = null, T.value = null, N.value = null, !!((pe = F.value) != null && pe.trim()))
        try {
          const K = await u({ path: F.value, type: "models" });
          if (K.valid)
            N.value = K.model_count ?? null;
          else if (S.value = K.error || "Invalid path", K.suggestion) {
            T.value = K.suggestion, F.value = K.suggestion, S.value = null;
            const Y = await u({ path: K.suggestion, type: "models" });
            Y.valid && (N.value = Y.model_count ?? null);
          }
        } catch (K) {
          S.value = K instanceof Error ? K.message : "Validation failed";
        }
    }
    async function Qe() {
      var pe, K, Y, E, V;
      if (G.value = null, S.value = null, await tt(), (pe = G.value) != null && pe.includes("already exists")) {
        G.value = null, L.value = ((K = R.value) == null ? void 0 : K.trim()) || n.defaultPath, k.value = 2, He();
        return;
      }
      if (!G.value && !(q.value && ((Y = F.value) != null && Y.trim()) && (await Ee(), S.value))) {
        Q.value = !0;
        try {
          await f({
            workspace_path: ((E = R.value) == null ? void 0 : E.trim()) || n.defaultPath,
            models_directory: q.value && ((V = F.value) == null ? void 0 : V.trim()) || null
          }), ce.value = 0, ye.value = Date.now();
          const Z = setInterval(async () => {
            var ke;
            if (ye.value && Date.now() - ye.value > e2) {
              clearInterval(Z), Q.value = !1, G.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const We = await p();
              if (ce.value = 0, We.state === "idle" && Q.value) {
                clearInterval(Z), Q.value = !1, G.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              Ce.value = { progress: We.progress, message: We.message }, We.state === "complete" ? (clearInterval(Z), Q.value = !1, L.value = ((ke = R.value) == null ? void 0 : ke.trim()) || n.defaultPath, k.value = 2, He()) : We.state === "error" && (clearInterval(Z), Q.value = !1, G.value = We.error || "Workspace creation failed");
            } catch (We) {
              ce.value++, console.warn(`Polling failure ${ce.value}/${Bt}:`, We), ce.value >= Bt && (clearInterval(Z), Q.value = !1, G.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (Z) {
          Q.value = !1, G.value = Z instanceof Error ? Z.message : "Failed to create workspace";
        }
      }
    }
    async function qe() {
      _e.value = !0, z.value = null;
      try {
        const pe = {
          name: de.value.trim() || "my-new-env",
          python_version: se.value,
          comfyui_version: X.value,
          torch_backend: ve.value,
          switch_after: J.value,
          workspace_path: L.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await m(pe)).status === "started") {
          Re.value = 0, ee.value = Date.now();
          const Y = setInterval(async () => {
            if (ee.value && Date.now() - ee.value > As) {
              clearInterval(Y), _e.value = !1, z.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const E = await d();
              if (Re.value = 0, E.state === "idle" && _e.value) {
                clearInterval(Y), _e.value = !1, z.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (De.value = {
                progress: E.progress ?? 0,
                message: E.message,
                phase: E.phase
              }, E.state === "complete") {
                clearInterval(Y), _e.value = !1;
                const V = E.environment_name || pe.name;
                J.value ? i("complete", V, L.value) : (b.value = "landing", i("environment-created-no-switch", V));
              } else E.state === "error" && (clearInterval(Y), _e.value = !1, z.value = E.error || "Environment creation failed");
            } catch (E) {
              Re.value++, console.warn(`Polling failure ${Re.value}/${Bt}:`, E), Re.value >= Bt && (clearInterval(Y), _e.value = !1, z.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (pe) {
        _e.value = !1, z.value = pe instanceof Error ? pe.message : "Unknown error";
      }
    }
    async function He() {
      me.value = !0;
      try {
        I.value = await y();
      } catch (pe) {
        console.error("Failed to load ComfyUI releases:", pe);
      } finally {
        me.value = !1;
      }
    }
    function dt() {
      _.value && i("switch-environment", _.value, L.value);
    }
    function $e() {
      b.value === "create" || b.value === "import" ? b.value = "landing" : k.value === 2 && n.setupState === "no_workspace" && (k.value = 1);
    }
    function Ge(pe, K) {
      M.value = !1, K ? i("complete", pe, L.value) : (i("environment-created-no-switch", pe), b.value = "landing");
    }
    function Ze() {
    }
    Ve(async () => {
      if (n.detectedModelsDir && (F.value = n.detectedModelsDir), n.workspacePath && (L.value = n.workspacePath), k.value === 2) {
        He();
        const pe = setTimeout(() => {
          x.value = !1;
        }, 3e3);
        await Ye(), clearTimeout(pe), x.value = !1;
      }
    });
    async function Ye() {
      try {
        const pe = await d();
        if (console.log("[ComfyGit] Create progress check:", pe.state, pe), pe.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", pe.environment_name), b.value = "create", _e.value = !0, de.value = pe.environment_name || "my-new-env", De.value = {
            progress: pe.progress ?? 0,
            message: pe.message,
            phase: pe.phase
          }, Ue();
          return;
        }
      } catch (pe) {
        console.log("[ComfyGit] Create progress check failed:", pe);
      }
      try {
        const pe = await v();
        console.log("[ComfyGit] Import progress check:", pe.state, pe), pe.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", pe.environment_name), B.value = {
          message: pe.message || "Importing...",
          phase: pe.phase || "",
          progress: pe.progress ?? 0,
          environmentName: pe.environment_name || ""
        }, C.value = !0, b.value = "import", M.value = !0);
      } catch (pe) {
        console.log("[ComfyGit] Import progress check failed:", pe);
      }
    }
    async function Ue() {
      Re.value = 0, ee.value = Date.now();
      let pe = null;
      const K = async () => {
        if (ee.value && Date.now() - ee.value > As)
          return pe && clearInterval(pe), _e.value = !1, z.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const E = await d();
          if (Re.value = 0, E.state === "idle" && _e.value)
            return pe && clearInterval(pe), _e.value = !1, z.value = "Environment creation was interrupted. Please try again.", !1;
          if (De.value = {
            progress: E.progress ?? 0,
            message: E.message,
            phase: E.phase
          }, E.state === "complete") {
            pe && clearInterval(pe), _e.value = !1;
            const V = E.environment_name || de.value;
            return i("complete", V, L.value), !1;
          } else if (E.state === "error")
            return pe && clearInterval(pe), _e.value = !1, z.value = E.error || "Environment creation failed", !1;
          return !0;
        } catch (E) {
          return Re.value++, console.warn(`Polling failure ${Re.value}/${Bt}:`, E), Re.value >= Bt ? (pe && clearInterval(pe), _e.value = !1, z.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await K() && (pe = setInterval(async () => {
        !await K() && pe && clearInterval(pe);
      }, 2e3));
    }
    return (pe, K) => (t(), o(W, null, [
      w(at, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: K[15] || (K[15] = (Y) => pe.$emit("close"))
      }, {
        header: l(() => [
          K[20] || (K[20] = e("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          e("div", g_, [
            w(no),
            K[19] || (K[19] = e("span", { class: "header-divider" }, null, -1)),
            xe.value ? (t(), o("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: K[0] || (K[0] = (Y) => D.value = !0)
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
              onClick: K[1] || (K[1] = (Y) => pe.$emit("close")),
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
            k.value === 1 ? (t(), o("div", h_, [
              K[24] || (K[24] = e("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              e("div", y_, [
                K[21] || (K[21] = e("label", { class: "form-label" }, "Workspace Path", -1)),
                ze(e("input", {
                  "onUpdate:modelValue": K[2] || (K[2] = (E) => R.value = E),
                  type: "text",
                  class: "form-input",
                  placeholder: s.defaultPath
                }, null, 8, w_), [
                  [Lt, R.value]
                ]),
                G.value ? (t(), o("p", k_, a(G.value), 1)) : r("", !0)
              ]),
              e("div", b_, [
                e("label", __, [
                  ze(e("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": K[3] || (K[3] = (E) => q.value = E)
                  }, null, 512), [
                    [cs, q.value]
                  ]),
                  K[22] || (K[22] = e("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              q.value ? (t(), o("div", $_, [
                K[23] || (K[23] = e("label", { class: "form-label" }, "Models Directory", -1)),
                ze(e("input", {
                  "onUpdate:modelValue": K[4] || (K[4] = (E) => F.value = E),
                  type: "text",
                  class: "form-input",
                  placeholder: s.detectedModelsDir || "/path/to/models"
                }, null, 8, C_), [
                  [Lt, F.value]
                ]),
                s.detectedModelsDir && !F.value ? (t(), o("p", x_, " Detected: " + a(s.detectedModelsDir), 1)) : r("", !0),
                T.value ? (t(), o("p", S_, " Did you mean: " + a(T.value), 1)) : r("", !0),
                S.value ? (t(), o("p", I_, a(S.value), 1)) : r("", !0),
                N.value !== null && !S.value ? (t(), o("p", E_, " Found " + a(N.value) + " model files ", 1)) : r("", !0)
              ])) : r("", !0),
              Q.value ? (t(), P(vs, {
                key: 1,
                progress: Ce.value.progress,
                message: Ce.value.message
              }, null, 8, ["progress", "message"])) : r("", !0)
            ])) : r("", !0),
            k.value === 2 ? (t(), o("div", P_, [
              x.value ? (t(), o("div", M_, [...K[25] || (K[25] = [
                e("div", { class: "loading-spinner" }, null, -1),
                e("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (t(), o(W, { key: 1 }, [
                !n.cliInstalled && !$.value ? (t(), o("div", R_, [
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
                b.value === "landing" ? (t(), o("div", D_, [
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
                  (Y = n.existingEnvironments) != null && Y.length ? (t(), o(W, { key: 0 }, [
                    K[33] || (K[33] = e("div", { class: "landing-divider" }, [
                      e("span", null, "or switch to existing")
                    ], -1)),
                    e("div", L_, [
                      (t(!0), o(W, null, ne(n.existingEnvironments, (E) => (t(), o("label", {
                        key: E,
                        class: fe(["env-option", { selected: _.value === E }])
                      }, [
                        ze(e("input", {
                          type: "radio",
                          name: "env-select",
                          value: E,
                          "onUpdate:modelValue": K[8] || (K[8] = (V) => _.value = V)
                        }, null, 8, z_), [
                          [Dt, _.value]
                        ]),
                        e("span", U_, a(E), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : r("", !0)
                ])) : b.value === "create" ? (t(), o("div", N_, [
                  _e.value ? (t(), o("div", Y_, [
                    e("p", J_, [
                      K[41] || (K[41] = g(" Creating environment ", -1)),
                      e("strong", null, a(de.value), 1),
                      K[42] || (K[42] = g("... ", -1))
                    ]),
                    w(vs, {
                      progress: De.value.progress,
                      message: De.value.message,
                      "current-phase": De.value.phase,
                      "show-steps": !0,
                      steps: Ne
                    }, null, 8, ["progress", "message", "current-phase"]),
                    K[43] || (K[43] = e("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (t(), o(W, { key: 0 }, [
                    K[40] || (K[40] = e("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    e("div", O_, [
                      K[35] || (K[35] = e("label", { class: "form-label" }, "Environment Name", -1)),
                      ze(e("input", {
                        "onUpdate:modelValue": K[9] || (K[9] = (E) => de.value = E),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [Lt, de.value]
                      ])
                    ]),
                    e("div", A_, [
                      K[36] || (K[36] = e("label", { class: "form-label" }, "Python Version", -1)),
                      ze(e("select", {
                        "onUpdate:modelValue": K[10] || (K[10] = (E) => se.value = E),
                        class: "form-select"
                      }, [
                        (t(!0), o(W, null, ne(Me(Xs), (E) => (t(), o("option", {
                          key: E,
                          value: E
                        }, a(E), 9, B_))), 128))
                      ], 512), [
                        [St, se.value]
                      ])
                    ]),
                    e("div", F_, [
                      K[37] || (K[37] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      ze(e("select", {
                        "onUpdate:modelValue": K[11] || (K[11] = (E) => X.value = E),
                        class: "form-select",
                        disabled: me.value
                      }, [
                        (t(!0), o(W, null, ne(I.value, (E) => (t(), o("option", {
                          key: E.tag_name,
                          value: E.tag_name
                        }, a(E.name), 9, W_))), 128))
                      ], 8, V_), [
                        [St, X.value]
                      ])
                    ]),
                    e("div", G_, [
                      K[38] || (K[38] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      ze(e("select", {
                        "onUpdate:modelValue": K[12] || (K[12] = (E) => ve.value = E),
                        class: "form-select"
                      }, [
                        (t(!0), o(W, null, ne(Me(Es), (E) => (t(), o("option", {
                          key: E,
                          value: E
                        }, a(E) + a(E === "auto" ? " (detect GPU)" : ""), 9, j_))), 128))
                      ], 512), [
                        [St, ve.value]
                      ])
                    ]),
                    e("div", H_, [
                      e("label", K_, [
                        ze(e("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": K[13] || (K[13] = (E) => J.value = E)
                        }, null, 512), [
                          [cs, J.value]
                        ]),
                        K[39] || (K[39] = e("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    z.value ? (t(), o("div", q_, a(z.value), 1)) : r("", !0)
                  ], 64))
                ])) : b.value === "import" ? (t(), o("div", X_, [
                  w(so, {
                    "workspace-path": L.value,
                    "resume-import": C.value,
                    "initial-progress": B.value ?? void 0,
                    onImportComplete: Ge,
                    onImportStarted: K[14] || (K[14] = (E) => M.value = !0),
                    onSourceCleared: Ze
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : r("", !0)
              ], 64))
            ])) : r("", !0)
          ];
        }),
        footer: l(() => [
          e("div", Q_, [
            w(ao),
            e("div", Z_, [
              k.value === 1 ? (t(), P(he, {
                key: 0,
                variant: "primary",
                disabled: !ie.value || Q.value,
                onClick: Qe
              }, {
                default: l(() => [
                  g(a(Q.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : k.value === 2 ? (t(), o(W, { key: 1 }, [
                !_e.value && !M.value && (b.value !== "landing" || n.setupState === "no_workspace" && !L.value) ? (t(), P(he, {
                  key: 0,
                  variant: "secondary",
                  onClick: $e
                }, {
                  default: l(() => [...K[44] || (K[44] = [
                    g(" Back ", -1)
                  ])]),
                  _: 1
                })) : r("", !0),
                b.value === "create" ? (t(), P(he, {
                  key: 1,
                  variant: "primary",
                  disabled: !we.value || _e.value,
                  onClick: qe
                }, {
                  default: l(() => [
                    g(a(_e.value ? "Creating..." : J.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : r("", !0),
                b.value === "landing" && _.value ? (t(), P(he, {
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
      D.value ? (t(), P(p_, {
        key: 0,
        "workspace-path": Xe.value,
        onClose: K[16] || (K[16] = (Y) => D.value = !1)
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
  setup(s, { emit: c }) {
    const n = s, i = c, {
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
      deleteEnvironment: D,
      syncEnvironmentManually: M,
      repairWorkflowModels: $,
      getSetupStatus: C
    } = je(), B = Gs(), x = h(null), R = h([]), q = h([]), F = h([]), G = A(() => F.value.find((j) => j.is_current)), S = h(null), T = h(!1), N = h(1), de = A(() => {
      var j;
      return ((j = S.value) == null ? void 0 : j.state) || "managed";
    }), se = h(!1), X = h(null), ve = h(null), J = h(!1), z = h(null), L = h(null), I = h(null), me = h(!1), Q = h(!1), _e = h(""), Ce = h(null), De = h({ state: "idle", progress: 0, message: "" });
    let Ne = null, ce = null;
    const ye = {
      "debug-env": { view: "debug-env", section: "this-env" },
      "debug-workspace": { view: "debug-workspace", section: "all-envs" },
      status: { view: "status", section: "this-env" }
    }, Re = n.initialView ? ye[n.initialView] : null, ee = h((Re == null ? void 0 : Re.view) ?? "status"), ie = h((Re == null ? void 0 : Re.section) ?? "this-env");
    function we(j, U) {
      ee.value = j, ie.value = U;
    }
    function xe(j) {
      const ge = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[j];
      ge && we(ge.view, ge.section);
    }
    function Xe() {
      we("branches", "this-env");
    }
    function tt() {
      i("close"), setTimeout(() => {
        var U;
        const j = document.querySelectorAll("button.comfyui-button");
        for (const ge of j)
          if (((U = ge.textContent) == null ? void 0 : U.trim()) === "Manager") {
            ge.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const Ee = h(null), Qe = h(!1), qe = h(!1), He = h([]);
    let dt = 0;
    function $e(j, U = "info", ge = 3e3) {
      const Pe = ++dt;
      return He.value.push({ id: Pe, message: j, type: U }), ge > 0 && setTimeout(() => {
        He.value = He.value.filter((Ae) => Ae.id !== Pe);
      }, ge), Pe;
    }
    function Ge(j) {
      He.value = He.value.filter((U) => U.id !== j);
    }
    function Ze(j, U) {
      $e(j, U);
    }
    const Ye = A(() => {
      if (!x.value) return "neutral";
      const j = x.value.workflows, U = j.new.length > 0 || j.modified.length > 0 || j.deleted.length > 0 || x.value.has_changes;
      return x.value.comparison.is_synced ? U ? "warning" : "success" : "error";
    });
    A(() => x.value ? Ye.value === "success" ? "All synced" : Ye.value === "warning" ? "Uncommitted changes" : Ye.value === "error" ? "Not synced" : "" : "");
    async function Ue() {
      se.value = !0, X.value = null;
      try {
        const [j, U, ge, Pe] = await Promise.all([
          f(!0),
          p(),
          u(),
          k()
        ]);
        x.value = j, R.value = U.commits, q.value = ge.branches, F.value = Pe, i("statusUpdate", j), z.value && await z.value.loadWorkflows(!0);
      } catch (j) {
        X.value = j instanceof Error ? j.message : "Failed to load status", x.value = null, R.value = [], q.value = [];
      } finally {
        se.value = !1;
      }
    }
    function pe(j) {
      ve.value = j;
    }
    async function K(j) {
      var ge;
      ve.value = null;
      const U = x.value && (x.value.workflows.new.length > 0 || x.value.workflows.modified.length > 0 || x.value.workflows.deleted.length > 0 || x.value.has_changes);
      Ee.value = {
        title: U ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: U ? "You have uncommitted changes that will be lost." : `Checkout commit ${j.short_hash || ((ge = j.hash) == null ? void 0 : ge.slice(0, 7))}?`,
        details: U ? re() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: U ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: U,
        onConfirm: async () => {
          var Ke;
          Ee.value = null, ke();
          const Pe = $e(`Checking out ${j.short_hash || ((Ke = j.hash) == null ? void 0 : Ke.slice(0, 7))}...`, "info", 0), Ae = await m(j.hash, U);
          Ge(Pe), Ae.status === "success" ? $e("Restarting ComfyUI...", "success") : $e(Ae.message || "Checkout failed", "error");
        }
      };
    }
    async function Y(j) {
      const U = x.value && (x.value.workflows.new.length > 0 || x.value.workflows.modified.length > 0 || x.value.workflows.deleted.length > 0 || x.value.has_changes);
      Ee.value = {
        title: U ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: U ? "You have uncommitted changes." : `Switch to branch "${j}"?`,
        details: U ? re() : void 0,
        warning: U ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: U ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          Ee.value = null, ke();
          const ge = $e(`Switching to ${j}...`, "info", 0), Pe = await v(j, U);
          Ge(ge), Pe.status === "success" ? $e("Restarting ComfyUI...", "success") : $e(Pe.message || "Branch switch failed", "error");
        }
      };
    }
    async function E(j) {
      const U = $e(`Creating branch ${j}...`, "info", 0), ge = await d(j);
      Ge(U), ge.status === "success" ? ($e(`Branch "${j}" created`, "success"), await Ue()) : $e(ge.message || "Failed to create branch", "error");
    }
    async function V(j, U = !1) {
      const ge = async (Pe) => {
        var Ke;
        const Ae = $e(`Deleting branch ${j}...`, "info", 0);
        try {
          const ct = await y(j, Pe);
          Ge(Ae), ct.status === "success" ? ($e(`Branch "${j}" deleted`, "success"), await Ue()) : (Ke = ct.message) != null && Ke.includes("not fully merged") ? Ee.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${j}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              Ee.value = null, await ge(!0);
            }
          } : $e(ct.message || "Failed to delete branch", "error");
        } catch (ct) {
          Ge(Ae);
          const Rt = ct instanceof Error ? ct.message : "Failed to delete branch";
          Rt.includes("not fully merged") ? Ee.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${j}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              Ee.value = null, await ge(!0);
            }
          } : $e(Rt, "error");
        }
      };
      Ee.value = {
        title: "Delete Branch",
        message: `Delete branch "${j}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          Ee.value = null, await ge(U);
        }
      };
    }
    async function Z(j) {
      ve.value = null;
      const U = prompt("Enter branch name:");
      if (U) {
        const ge = $e(`Creating branch ${U}...`, "info", 0), Pe = await d(U, j.hash);
        Ge(ge), Pe.status === "success" ? ($e(`Branch "${U}" created from ${j.short_hash}`, "success"), await Ue()) : $e(Pe.message || "Failed to create branch", "error");
      }
    }
    function ke() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function We() {
      Ee.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var j;
          Ee.value = null, ke(), $e("Restarting environment...", "info");
          try {
            (j = window.app) != null && j.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function vt() {
      Ee.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var j;
          Ee.value = null, $e("Stopping environment...", "info");
          try {
            (j = window.app) != null && j.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function lt(j, U) {
      J.value = !1, _e.value = j, Ce.value = U || null, me.value = !0;
    }
    async function Mt() {
      me.value = !1, Q.value = !0, ke(), De.value = {
        progress: 10,
        state: it(10),
        message: xt(10)
      };
      try {
        await _(_e.value, Ce.value || void 0), Ot(), Gt();
      } catch (j) {
        ft(), Q.value = !1, $e(`Failed to initiate switch: ${j instanceof Error ? j.message : "Unknown error"}`, "error"), De.value = { state: "idle", progress: 0, message: "" }, Ce.value = null;
      }
    }
    function it(j) {
      return j >= 100 ? "complete" : j >= 80 ? "validating" : j >= 60 ? "starting" : j >= 30 ? "syncing" : "preparing";
    }
    function xt(j) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[it(j)] || "";
    }
    function Ot() {
      if (ce) return;
      let j = 10;
      const U = 60, ge = 5e3, Pe = 100, Ae = (U - j) / (ge / Pe);
      ce = window.setInterval(() => {
        if (j += Ae, j >= U && (j = U, ft()), De.value.progress < U) {
          const Ke = Math.floor(j);
          De.value = {
            progress: Ke,
            state: it(Ke),
            message: xt(Ke)
          };
        }
      }, Pe);
    }
    function ft() {
      ce && (clearInterval(ce), ce = null);
    }
    function Gt() {
      Ne || (Ne = window.setInterval(async () => {
        try {
          let j = await B.getStatus();
          if ((!j || j.state === "idle") && (j = await b()), !j)
            return;
          const U = j.progress || 0;
          U >= 60 && ft();
          const ge = Math.max(U, De.value.progress), Pe = j.state && j.state !== "idle" && j.state !== "unknown", Ae = Pe ? j.state : it(ge), Ke = Pe && j.message || xt(ge);
          De.value = {
            state: Ae,
            progress: ge,
            message: Ke
          }, j.state === "complete" ? (ft(), zt(), Q.value = !1, $e(`✓ Switched to ${_e.value}`, "success"), await Ue(), _e.value = "") : j.state === "rolled_back" ? (ft(), zt(), Q.value = !1, $e("Switch failed, restored previous environment", "warning"), _e.value = "") : j.state === "critical_failure" && (ft(), zt(), Q.value = !1, $e(`Critical error during switch: ${j.message}`, "error"), _e.value = "");
        } catch (j) {
          console.error("Failed to poll switch progress:", j);
        }
      }, 1e3));
    }
    function zt() {
      ft(), Ne && (clearInterval(Ne), Ne = null);
    }
    function jt() {
      var j;
      me.value = !1, _e.value = "", (j = S.value) != null && j.state && S.value.state !== "managed" && (N.value = S.value.state === "no_workspace" ? 1 : 2, T.value = !0);
    }
    async function Ht(j) {
      Qe.value = !1, await Ue(), $e(j.message, j.success ? "success" : "error");
    }
    async function Kt() {
      qe.value = !1;
      const j = $e("Syncing environment...", "info", 0);
      try {
        const U = await M("skip", !0);
        if (Ge(j), U.status === "success") {
          const ge = [];
          U.nodes_installed.length && ge.push(`${U.nodes_installed.length} installed`), U.nodes_removed.length && ge.push(`${U.nodes_removed.length} removed`);
          const Pe = ge.length ? `: ${ge.join(", ")}` : "";
          $e(`✓ Environment synced${Pe}`, "success"), await Ue();
        } else {
          const ge = U.errors.length ? U.errors.join("; ") : U.message;
          $e(`Sync failed: ${ge}`, "error");
        }
      } catch (U) {
        Ge(j), $e(`Sync error: ${U instanceof Error ? U.message : "Unknown error"}`, "error");
      }
    }
    async function qt(j) {
      var U;
      try {
        const ge = await $(j);
        ge.failed.length === 0 ? $e(`✓ Repaired ${ge.success} workflow${ge.success === 1 ? "" : "s"}`, "success") : $e(`Repaired ${ge.success}, failed: ${ge.failed.length}`, "warning"), await Ue();
      } catch (ge) {
        $e(`Repair failed: ${ge instanceof Error ? ge.message : "Unknown error"}`, "error");
      } finally {
        (U = I.value) == null || U.resetRepairingState();
      }
    }
    async function At() {
      var U, ge;
      const j = $e("Repairing environment...", "info", 0);
      try {
        const Pe = await M("skip", !0);
        if (Ge(j), Pe.status === "success") {
          const Ae = [];
          Pe.nodes_installed.length && Ae.push(`${Pe.nodes_installed.length} installed`), Pe.nodes_removed.length && Ae.push(`${Pe.nodes_removed.length} removed`);
          const Ke = Ae.length ? `: ${Ae.join(", ")}` : "";
          $e(`✓ Environment repaired${Ke}`, "success"), (U = I.value) == null || U.closeDetailModal(), await Ue();
        } else {
          const Ae = Pe.errors.length ? Pe.errors.join(", ") : Pe.message || "Unknown error";
          $e(`Repair failed: ${Ae}`, "error");
        }
      } catch (Pe) {
        Ge(j), $e(`Repair error: ${Pe instanceof Error ? Pe.message : "Unknown error"}`, "error");
      } finally {
        (ge = I.value) == null || ge.resetRepairingEnvironmentState();
      }
    }
    async function le(j, U) {
      $e(`Environment '${j}' created`, "success"), await Ue(), L.value && await L.value.loadEnvironments(), U && await lt(j);
    }
    async function O(j) {
      var U;
      if (((U = G.value) == null ? void 0 : U.name) === j) {
        $e("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      Ee.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${j}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          Ee.value = null;
          try {
            const ge = await D(j);
            ge.status === "success" ? ($e(`Environment "${j}" deleted`, "success"), await Ue(), L.value && await L.value.loadEnvironments()) : $e(ge.message || "Failed to delete environment", "error");
          } catch (ge) {
            $e(`Error deleting environment: ${ge instanceof Error ? ge.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function Ie(j, U) {
      T.value = !1;
      try {
        S.value = await C();
      } catch {
      }
      await lt(j, U);
    }
    function et() {
      T.value = !1, i("close");
    }
    async function pt(j, U) {
      await lt(j, U);
    }
    async function H(j) {
      await Ue(), await lt(j);
    }
    async function ue(j) {
      S.value = await C(), console.log(`Environment '${j}' created. Available for switching.`);
    }
    function be() {
      we("environments", "all-envs"), setTimeout(() => {
        var j;
        (j = L.value) == null || j.openCreateModal();
      }, 100);
    }
    function re() {
      if (!x.value) return [];
      const j = [], U = x.value.workflows;
      return U.new.length && j.push(`${U.new.length} new workflow(s)`), U.modified.length && j.push(`${U.modified.length} modified workflow(s)`), U.deleted.length && j.push(`${U.deleted.length} deleted workflow(s)`), j;
    }
    return Ve(async () => {
      try {
        if (S.value = await C(), S.value.state === "no_workspace") {
          T.value = !0, N.value = 1;
          return;
        }
        if (S.value.state === "empty_workspace") {
          T.value = !0, N.value = 2;
          return;
        }
        if (S.value.state === "unmanaged") {
          T.value = !0, N.value = 2;
          return;
        }
      } catch (j) {
        console.warn("Setup status check failed, proceeding normally:", j);
      }
      await Ue();
    }), (j, U) => {
      var ge, Pe, Ae, Ke, ct, Rt, Yt, Jt, Xt, Ds, Ls, zs;
      return t(), o("div", o2, [
        e("div", n2, [
          e("div", a2, [
            U[31] || (U[31] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            x.value ? (t(), o("div", l2)) : r("", !0)
          ]),
          e("div", i2, [
            w(no),
            U[34] || (U[34] = e("span", { class: "header-divider" }, null, -1)),
            e("button", {
              class: fe(["icon-btn", { spinning: se.value }]),
              onClick: Ue,
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
              onClick: U[0] || (U[0] = (Se) => i("close")),
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
            onClick: U[1] || (U[1] = (Se) => we("environments", "all-envs"))
          }, [
            x.value ? (t(), o("div", d2, [
              e("span", null, a(((ge = G.value) == null ? void 0 : ge.name) || ((Pe = x.value) == null ? void 0 : Pe.environment) || "Loading..."), 1),
              e("span", c2, "(" + a(x.value.branch || "detached") + ")", 1)
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
                  class: fe(["sidebar-item", { active: ee.value === "status" && ie.value === "this-env" }]),
                  onClick: U[2] || (U[2] = (Se) => we("status", "this-env"))
                }, " STATUS ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: ee.value === "workflows" }]),
                  onClick: U[3] || (U[3] = (Se) => we("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: ee.value === "models-env" }]),
                  onClick: U[4] || (U[4] = (Se) => we("models-env", "this-env"))
                }, " MODELS ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: ee.value === "branches" }]),
                  onClick: U[5] || (U[5] = (Se) => we("branches", "this-env"))
                }, " BRANCHES ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: ee.value === "history" }]),
                  onClick: U[6] || (U[6] = (Se) => we("history", "this-env"))
                }, " HISTORY ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: ee.value === "nodes" }]),
                  onClick: U[7] || (U[7] = (Se) => we("nodes", "this-env"))
                }, " NODES ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: ee.value === "debug-env" }]),
                  onClick: U[8] || (U[8] = (Se) => we("debug-env", "this-env"))
                }, " DEBUG ", 2)
              ]),
              U[40] || (U[40] = e("div", { class: "sidebar-divider" }, null, -1)),
              e("div", p2, [
                U[38] || (U[38] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
                e("button", {
                  class: fe(["sidebar-item", { active: ee.value === "environments" }]),
                  onClick: U[9] || (U[9] = (Se) => we("environments", "all-envs"))
                }, " ENVIRONMENTS ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: ee.value === "model-index" }]),
                  onClick: U[10] || (U[10] = (Se) => we("model-index", "all-envs"))
                }, " MODEL INDEX ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: ee.value === "settings" }]),
                  onClick: U[11] || (U[11] = (Se) => we("settings", "all-envs"))
                }, " SETTINGS ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: ee.value === "debug-workspace" }]),
                  onClick: U[12] || (U[12] = (Se) => we("debug-workspace", "all-envs"))
                }, " DEBUG ", 2)
              ]),
              U[41] || (U[41] = e("div", { class: "sidebar-divider" }, null, -1)),
              e("div", g2, [
                U[39] || (U[39] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
                e("button", {
                  class: fe(["sidebar-item", { active: ee.value === "deploy" }]),
                  onClick: U[13] || (U[13] = (Se) => we("deploy", "sharing"))
                }, " DEPLOY ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: ee.value === "export" }]),
                  onClick: U[14] || (U[14] = (Se) => we("export", "sharing"))
                }, " EXPORT ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: ee.value === "import" }]),
                  onClick: U[15] || (U[15] = (Se) => we("import", "sharing"))
                }, " IMPORT ", 2),
                e("button", {
                  class: fe(["sidebar-item", { active: ee.value === "remotes" }]),
                  onClick: U[16] || (U[16] = (Se) => we("remotes", "sharing"))
                }, " REMOTES ", 2)
              ])
            ]),
            e("div", h2, [
              w(ao)
            ])
          ]),
          e("div", y2, [
            X.value ? (t(), o("div", w2, a(X.value), 1)) : !x.value && ee.value === "status" ? (t(), o("div", k2, " Loading status... ")) : (t(), o(W, { key: 2 }, [
              ee.value === "status" ? (t(), P(Ka, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: I,
                status: x.value,
                "setup-state": de.value,
                onSwitchBranch: Xe,
                onCommitChanges: U[17] || (U[17] = (Se) => Qe.value = !0),
                onSyncEnvironment: U[18] || (U[18] = (Se) => qe.value = !0),
                onViewWorkflows: U[19] || (U[19] = (Se) => we("workflows", "this-env")),
                onViewHistory: U[20] || (U[20] = (Se) => we("history", "this-env")),
                onViewDebug: U[21] || (U[21] = (Se) => we("debug-env", "this-env")),
                onViewNodes: U[22] || (U[22] = (Se) => we("nodes", "this-env")),
                onRepairMissingModels: qt,
                onRepairEnvironment: At,
                onStartSetup: U[23] || (U[23] = (Se) => T.value = !0),
                onViewEnvironments: U[24] || (U[24] = (Se) => we("environments", "all-envs")),
                onCreateEnvironment: be
              }, null, 8, ["status", "setup-state"])) : ee.value === "workflows" ? (t(), P(pm, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: z,
                onRefresh: Ue
              }, null, 512)) : ee.value === "models-env" ? (t(), P(Xm, {
                key: 2,
                onNavigate: xe
              })) : ee.value === "branches" ? (t(), P(rl, {
                key: 3,
                branches: q.value,
                current: ((Ae = x.value) == null ? void 0 : Ae.branch) || null,
                onSwitch: Y,
                onCreate: E,
                onDelete: V
              }, null, 8, ["branches", "current"])) : ee.value === "history" ? (t(), P(wl, {
                key: 4,
                commits: R.value,
                onSelect: pe,
                onCheckout: K
              }, null, 8, ["commits"])) : ee.value === "nodes" ? (t(), P(Kv, {
                key: 5,
                "version-mismatches": ((ct = (Ke = x.value) == null ? void 0 : Ke.comparison) == null ? void 0 : ct.version_mismatches) || [],
                onOpenNodeManager: tt,
                onRepairEnvironment: At,
                onToast: Ze
              }, null, 8, ["version-mismatches"])) : ee.value === "debug-env" ? (t(), P(th, { key: 6 })) : ee.value === "environments" ? (t(), P(n1, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: L,
                onSwitch: lt,
                onCreated: le,
                onDelete: O
              }, null, 512)) : ee.value === "model-index" ? (t(), P(hv, {
                key: 8,
                onRefresh: Ue
              })) : ee.value === "settings" ? (t(), P(Xg, { key: 9 })) : ee.value === "debug-workspace" ? (t(), P(Zg, { key: 10 })) : ee.value === "deploy" ? (t(), P(gk, {
                key: 11,
                onToast: Ze
              })) : ee.value === "export" ? (t(), P(L1, { key: 12 })) : ee.value === "import" ? (t(), P(I0, {
                key: 13,
                onImportCompleteSwitch: H
              })) : ee.value === "remotes" ? (t(), P(Mg, {
                key: 14,
                onToast: Ze
              })) : r("", !0)
            ], 64))
          ])
        ]),
        ve.value ? (t(), P(Lk, {
          key: 0,
          commit: ve.value,
          onClose: U[25] || (U[25] = (Se) => ve.value = null),
          onCheckout: K,
          onCreateBranch: Z
        }, null, 8, ["commit"])) : r("", !0),
        Ee.value ? (t(), P(qs, {
          key: 1,
          title: Ee.value.title,
          message: Ee.value.message,
          details: Ee.value.details,
          warning: Ee.value.warning,
          confirmLabel: Ee.value.confirmLabel,
          cancelLabel: Ee.value.cancelLabel,
          secondaryLabel: Ee.value.secondaryLabel,
          secondaryAction: Ee.value.secondaryAction,
          destructive: Ee.value.destructive,
          onConfirm: Ee.value.onConfirm,
          onCancel: U[26] || (U[26] = (Se) => Ee.value = null),
          onSecondary: Ee.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : r("", !0),
        w(Tb, {
          show: me.value,
          "from-environment": ((Rt = G.value) == null ? void 0 : Rt.name) || "unknown",
          "to-environment": _e.value,
          onConfirm: Mt,
          onClose: jt
        }, null, 8, ["show", "from-environment", "to-environment"]),
        Qe.value && x.value ? (t(), P(oo, {
          key: 2,
          status: x.value,
          "as-modal": !0,
          onClose: U[27] || (U[27] = (Se) => Qe.value = !1),
          onCommitted: Ht
        }, null, 8, ["status"])) : r("", !0),
        qe.value && x.value ? (t(), P(Qb, {
          key: 3,
          show: qe.value,
          "mismatch-details": {
            missing_nodes: x.value.comparison.missing_nodes,
            extra_nodes: x.value.comparison.extra_nodes
          },
          onConfirm: Kt,
          onClose: U[28] || (U[28] = (Se) => qe.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : r("", !0),
        w(Wb, {
          show: Q.value,
          state: De.value.state,
          progress: De.value.progress,
          message: De.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        J.value ? (t(), o("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: U[30] || (U[30] = Be((Se) => J.value = !1, ["self"]))
        }, [
          e("div", b2, [
            e("div", _2, [
              U[43] || (U[43] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: U[29] || (U[29] = (Se) => J.value = !1)
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
                (t(!0), o(W, null, ne(F.value, (Se) => (t(), o("div", {
                  key: Se.name,
                  class: fe(["env-item", { current: Se.is_current }])
                }, [
                  e("div", x2, [
                    e("div", S2, [
                      e("span", I2, a(Se.is_current ? "●" : "○"), 1),
                      e("span", E2, a(Se.name), 1),
                      Se.current_branch ? (t(), o("span", P2, "(" + a(Se.current_branch) + ")", 1)) : r("", !0),
                      Se.is_current ? (t(), o("span", M2, "CURRENT")) : r("", !0)
                    ]),
                    e("div", R2, a(Se.workflow_count) + " workflows • " + a(Se.node_count) + " nodes ", 1)
                  ]),
                  Se.is_current ? r("", !0) : (t(), o("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (W$) => lt(Se.name)
                  }, " SWITCH ", 8, T2))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : r("", !0),
        T.value ? (t(), P(s2, {
          key: 5,
          "default-path": ((Yt = S.value) == null ? void 0 : Yt.default_path) || "~/comfygit",
          "detected-models-dir": ((Jt = S.value) == null ? void 0 : Jt.detected_models_dir) || null,
          "initial-step": N.value,
          "existing-environments": ((Xt = S.value) == null ? void 0 : Xt.environments) || [],
          "cli-installed": ((Ds = S.value) == null ? void 0 : Ds.cli_installed) ?? !0,
          "setup-state": ((Ls = S.value) == null ? void 0 : Ls.state) || "no_workspace",
          "workspace-path": ((zs = S.value) == null ? void 0 : zs.workspace_path) || null,
          onComplete: Ie,
          onClose: et,
          onSwitchEnvironment: pt,
          onEnvironmentCreatedNoSwitch: ue
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : r("", !0),
        e("div", D2, [
          w(go, { name: "toast" }, {
            default: l(() => [
              (t(!0), o(W, null, ne(He.value, (Se) => (t(), o("div", {
                key: Se.id,
                class: fe(["toast", Se.type])
              }, [
                e("span", L2, a(Se.message), 1)
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
  setup(s, { emit: c }) {
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
    return (u, m) => (t(), o("div", {
      class: fe(["download-item", `status-${s.item.status}`])
    }, [
      e("div", N2, [
        e("div", O2, [
          e("div", A2, a(s.item.filename), 1),
          e("div", B2, [
            e("span", F2, a(i(s.item.size)), 1),
            s.item.type ? (t(), o("span", V2, a(s.item.type), 1)) : r("", !0)
          ])
        ]),
        e("div", W2, [
          s.item.status === "queued" || s.item.status === "downloading" ? (t(), o("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: m[0] || (m[0] = (d) => n("cancel")),
            title: "Cancel"
          }, " × ")) : r("", !0),
          s.item.status === "paused" ? (t(), o("button", {
            key: 1,
            class: "action-icon resume",
            onClick: m[1] || (m[1] = (d) => n("resume")),
            title: "Resume"
          }, " ▶ ")) : r("", !0),
          s.item.status === "failed" ? (t(), o("button", {
            key: 2,
            class: "action-icon retry",
            onClick: m[2] || (m[2] = (d) => n("retry")),
            title: "Retry"
          }, " ↻ ")) : r("", !0),
          s.item.status === "completed" || s.item.status === "failed" || s.item.status === "paused" ? (t(), o("button", {
            key: 3,
            class: "action-icon remove",
            onClick: m[3] || (m[3] = (d) => n("remove")),
            title: "Remove"
          }, " × ")) : r("", !0)
        ])
      ]),
      s.item.status === "downloading" ? (t(), o("div", G2, [
        e("div", j2, [
          e("div", {
            class: "progress-fill",
            style: It({ width: `${s.item.progress}%` })
          }, null, 4)
        ]),
        e("div", H2, [
          e("span", K2, a(i(s.item.downloaded)) + " / " + a(i(s.item.size)), 1),
          e("span", q2, a(f(s.item.speed)), 1),
          s.item.eta > 0 ? (t(), o("span", Y2, a(p(s.item.eta)), 1)) : r("", !0)
        ])
      ])) : s.item.status === "paused" ? (t(), o("div", J2, " Paused - click Resume to download ")) : s.item.status === "queued" ? (t(), o("div", X2, " Waiting in queue... ")) : s.item.status === "completed" ? (t(), o("div", Q2, " ✓ Downloaded ")) : s.item.status === "failed" ? (t(), o("div", Z2, [
        g(" ✗ " + a(s.item.error || "Failed") + " ", 1),
        s.item.retries > 0 ? (t(), o("span", e$, "(" + a(s.item.retries) + " retries)", 1)) : r("", !0)
      ])) : r("", !0)
    ], 2));
  }
}), es = /* @__PURE__ */ ae(t$, [["__scopeId", "data-v-2110df65"]]), s$ = { class: "queue-title" }, o$ = { class: "count" }, n$ = { class: "queue-actions" }, a$ = { class: "action-label" }, l$ = {
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
  setup(s) {
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
      clearCompleted: D
    } = ls(), M = h(!1);
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
        const F = R.active === 0 && R.failed === 0 && R.paused === 0 && R.completed > 0, G = q && (q.active > 0 || q.paused > 0);
        F && G && ($ = setTimeout(() => {
          D(), $ = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const C = A(() => {
      var F;
      if (c.items.length === 0) return 0;
      const R = f.value.length, q = ((F = n.value) == null ? void 0 : F.progress) || 0;
      return Math.round((R + q / 100) / c.items.length * 100);
    });
    function B(R) {
      v(R);
    }
    function x(R) {
      return R === 0 ? "" : `${(R / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (R, q) => (t(), P(Je, { to: "body" }, [
      Me(m) ? (t(), o("div", {
        key: 0,
        class: fe(["model-download-queue", { minimized: !M.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: q[0] || (q[0] = (F) => M.value = !M.value)
        }, [
          e("div", s$, [
            q[4] || (q[4] = e("span", { class: "icon" }, "↓", -1)),
            q[5] || (q[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", o$, "(" + a(Me(d)) + "/" + a(Me(c).items.length) + ")", 1)
          ]),
          e("div", n$, [
            e("span", a$, a(M.value ? "minimize" : "expand"), 1)
          ])
        ]),
        M.value ? (t(), o("div", u$, [
          Me(n) ? (t(), o("div", m$, [
            q[6] || (q[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            w(es, {
              item: Me(n),
              onCancel: q[1] || (q[1] = (F) => B(Me(n).id))
            }, null, 8, ["item"])
          ])) : r("", !0),
          Me(u).length > 0 ? (t(), o("div", v$, [
            e("div", f$, [
              e("span", p$, "Paused (" + a(Me(u).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: q[2] || (q[2] = //@ts-ignore
                (...F) => Me(_) && Me(_)(...F))
              }, "Resume All")
            ]),
            e("div", g$, [
              (t(!0), o(W, null, ne(Me(u), (F) => (t(), P(es, {
                key: F.id,
                item: F,
                onResume: (G) => Me(k)(F.id),
                onRemove: (G) => Me(b)(F.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : r("", !0),
          Me(i).length > 0 ? (t(), o("div", h$, [
            e("div", y$, [
              e("span", w$, "Queued (" + a(Me(i).length) + ")", 1)
            ]),
            e("div", k$, [
              (t(!0), o(W, null, ne(Me(i), (F) => (t(), P(es, {
                key: F.id,
                item: F,
                onCancel: (G) => B(F.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : r("", !0),
          Me(f).length > 0 ? (t(), o("div", b$, [
            e("div", _$, [
              e("span", $$, "Completed (" + a(Me(f).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: q[3] || (q[3] = //@ts-ignore
                (...F) => Me(D) && Me(D)(...F))
              }, "Clear")
            ]),
            e("div", C$, [
              (t(!0), o(W, null, ne(Me(f).slice(0, 3), (F) => (t(), P(es, {
                key: F.id,
                item: F,
                onRemove: (G) => Me(b)(F.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : r("", !0),
          Me(p).length > 0 ? (t(), o("div", x$, [
            e("div", S$, [
              e("span", I$, "Failed (" + a(Me(p).length) + ")", 1)
            ]),
            e("div", E$, [
              (t(!0), o(W, null, ne(Me(p), (F) => (t(), P(es, {
                key: F.id,
                item: F,
                onRetry: (G) => Me(y)(F.id),
                onRemove: (G) => Me(b)(F.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : r("", !0)
        ])) : (t(), o("div", l$, [
          e("div", i$, [
            e("div", {
              class: "progress-fill",
              style: It({ width: `${C.value}%` })
            }, null, 4)
          ]),
          Me(n) ? (t(), o("div", r$, [
            e("span", d$, a(Me(n).filename), 1),
            e("span", c$, a(x(Me(n).speed)), 1)
          ])) : r("", !0)
        ]))
      ], 2)) : r("", !0)
    ]));
  }
}), M$ = /* @__PURE__ */ ae(P$, [["__scopeId", "data-v-60751cfa"]]), R$ = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', T$ = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', D$ = {
  comfy: R$,
  phosphor: T$
}, Ms = "comfy", lo = "comfygit-theme";
let Ut = null, io = Ms;
function L$() {
  try {
    const s = localStorage.getItem(lo);
    if (s && (s === "comfy" || s === "phosphor"))
      return s;
  } catch {
  }
  return Ms;
}
function ro(s = Ms) {
  Ut && Ut.remove(), Ut = document.createElement("style"), Ut.id = "comfygit-theme-styles", Ut.setAttribute("data-theme", s), Ut.textContent = D$[s], document.head.appendChild(Ut), document.body.setAttribute("data-comfygit-theme", s), io = s;
  try {
    localStorage.setItem(lo, s);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${s}`);
}
function z$() {
  return io;
}
function U$(s) {
  ro(s);
}
function N$(s) {
  var p;
  const { ui_id: c, state: n } = s || {}, i = (n == null ? void 0 : n.history) || {};
  if (!c)
    return null;
  const f = i[c];
  return f && f.result === "error" && ((p = f.status) == null ? void 0 : p.status_str) === "error" ? (f.status.messages || [])[0] || "Unknown error" : null;
}
const Rs = document.createElement("link");
Rs.rel = "stylesheet";
Rs.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(Rs);
const O$ = L$();
ro(O$);
window.ComfyGit = {
  setTheme: (s) => {
    console.log(`[ComfyGit] Switching to theme: ${s}`), U$(s);
  },
  getTheme: () => {
    const s = z$();
    return console.log(`[ComfyGit] Current theme: ${s}`), s;
  }
};
let ht = null, rt = null, ns = null, ts = null, Bs = null;
const Vt = h(null);
let Ts = "managed", co = !1;
async function ds() {
  var s;
  if (!((s = Tt) != null && s.api)) return null;
  try {
    const c = await Tt.api.fetchApi("/v2/comfygit/status");
    c.ok && (Vt.value = await c.json());
  } catch {
  }
}
async function ks() {
  var s;
  if ((s = Tt) != null && s.api)
    try {
      const c = await Tt.api.fetchApi("/v2/setup/status");
      if (c.ok) {
        const n = await c.json();
        Ts = n.state, co = n.has_comfyui_manager ?? !1;
      }
    } catch {
    }
}
function bs() {
  var c;
  if (Ts === "managed" || !co) return;
  const s = document.querySelectorAll("button.comfyui-button");
  for (const n of s)
    if (((c = n.textContent) == null ? void 0 : c.trim()) === "Manager" && !n.querySelector("svg, i, img")) {
      n.style.display = "none", console.log("[ComfyGit] Hiding built-in Manager button (ComfyUI-Manager present)");
      return;
    }
}
function A$() {
  if (!Vt.value) return !1;
  const s = Vt.value.workflows;
  return s.new.length > 0 || s.modified.length > 0 || s.deleted.length > 0 || Vt.value.has_changes;
}
function Fs(s) {
  ht && ht.remove(), ht = document.createElement("div"), ht.className = "comfygit-panel-overlay";
  const c = document.createElement("div");
  c.className = "comfygit-panel-container", ht.appendChild(c), ht.addEventListener("click", (f) => {
    f.target === ht && ys();
  });
  const n = (f) => {
    f.key === "Escape" && (ys(), document.removeEventListener("keydown", n));
  };
  document.addEventListener("keydown", n), xs({
    render: () => Ss(U2, {
      initialView: s,
      onClose: ys,
      onStatusUpdate: async (f) => {
        Vt.value = f, as(), await ks(), _s(), bs();
      }
    })
  }).mount(c), document.body.appendChild(ht);
}
function ys() {
  ht && (ht.remove(), ht = null);
}
function B$(s) {
  ss(), rt = document.createElement("div"), rt.className = "comfygit-commit-popover-container";
  const c = s.getBoundingClientRect();
  rt.style.position = "fixed", rt.style.top = `${c.bottom + 8}px`, rt.style.right = `${window.innerWidth - c.right}px`, rt.style.zIndex = "10001";
  const n = (f) => {
    rt && !rt.contains(f.target) && f.target !== s && (ss(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const i = (f) => {
    f.key === "Escape" && (ss(), document.removeEventListener("keydown", i));
  };
  document.addEventListener("keydown", i), ns = xs({
    render: () => Ss(oo, {
      status: Vt.value,
      onClose: ss,
      onCommitted: (f) => {
        ss(), F$(f.success, f.message), ds().then(as);
      }
    })
  }), ns.mount(rt), document.body.appendChild(rt);
}
function ss() {
  ns && (ns.unmount(), ns = null), rt && (rt.remove(), rt = null);
}
function F$(s, c) {
  const n = document.createElement("div"), i = s ? "#22c55e" : "#ef4444";
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
  f.textContent = s ? "✓" : "✕", f.style.cssText = `
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
  ts || (ts = document.createElement("div"), ts.className = "comfygit-download-queue-root", Bs = xs({
    render: () => Ss(M$)
  }), Bs.mount(ts), document.body.appendChild(ts), console.log("[ComfyGit] Model download queue mounted"));
}
let ut = null;
function as() {
  if (!ut) return;
  const s = ut.querySelector(".commit-indicator");
  s && (s.style.display = A$() ? "block" : "none");
}
function _s() {
  if (!ut) return;
  const s = Ts !== "managed";
  ut.disabled = s, ut.title = s ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
}
const uo = document.createElement("style");
uo.textContent = `
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
document.head.appendChild(uo);
Tt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var f, p;
    const s = document.createElement("div");
    s.className = "comfygit-btn-group";
    const c = document.createElement("button");
    c.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", c.textContent = "ComfyGit", c.title = "ComfyGit Control Panel", c.onclick = Fs, ut = document.createElement("button"), ut.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", ut.innerHTML = 'Commit <span class="commit-indicator"></span>', ut.title = "Quick Commit", ut.onclick = () => B$(ut), s.appendChild(c), s.appendChild(ut), (p = (f = Tt.menu) == null ? void 0 : f.settingsGroup) != null && p.element && (Tt.menu.settingsGroup.element.before(s), console.log("[ComfyGit] Control Panel buttons added to toolbar")), V$();
    const { loadPendingDownloads: n } = ls();
    n(), await Promise.all([ds(), ks()]), as(), _s(), bs(), setTimeout(bs, 100), setInterval(async () => {
      await Promise.all([ds(), ks()]), as(), _s();
    }, 3e4);
    const i = Tt.api;
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
        const D = document.createElement("div");
        D.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 4px;";
        const M = document.createElement("div");
        M.textContent = "Node installation failed", M.style.cssText = "font-weight: 600; color: #e53935;", D.appendChild(M);
        const $ = document.createElement("div");
        $.textContent = "Dependency conflict detected", $.style.cssText = "font-size: 12px; opacity: 0.8;", D.appendChild($), _.appendChild(D);
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
        console.log(`[ComfyGit] Workflow ${k}: ${_}`), await ds(), as();
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
