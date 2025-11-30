import { app as kt } from "../../scripts/app.js";
import { defineComponent as ee, createElementBlock as o, openBlock as s, createCommentVNode as d, createElementVNode as e, renderSlot as Se, createBlock as E, resolveDynamicComponent as us, normalizeClass as re, withCtx as l, toDisplayString as a, createVNode as k, createTextVNode as h, computed as L, Fragment as A, renderList as Z, normalizeStyle as pt, ref as C, onMounted as Be, watch as bt, Teleport as Ve, withModifiers as Pe, Transition as ao, createSlots as Wt, withKeys as gt, reactive as os, onUnmounted as zs, readonly as lo, unref as xe, withDirectives as Oe, vModelText as Mt, vModelRadio as Jt, vModelCheckbox as Zt, nextTick as io, vModelSelect as Tt, createStaticVNode as ro, TransitionGroup as co, createApp as ms, h as vs } from "vue";
const uo = { class: "panel-layout" }, mo = {
  key: 0,
  class: "panel-layout-header"
}, vo = {
  key: 1,
  class: "panel-layout-search"
}, fo = { class: "panel-layout-content" }, go = {
  key: 2,
  class: "panel-layout-footer"
}, po = /* @__PURE__ */ ee({
  __name: "PanelLayout",
  setup(t) {
    return (c, n) => (s(), o("div", uo, [
      c.$slots.header ? (s(), o("div", mo, [
        Se(c.$slots, "header", {}, void 0, !0)
      ])) : d("", !0),
      c.$slots.search ? (s(), o("div", vo, [
        Se(c.$slots, "search", {}, void 0, !0)
      ])) : d("", !0),
      e("div", fo, [
        Se(c.$slots, "content", {}, void 0, !0)
      ]),
      c.$slots.footer ? (s(), o("div", go, [
        Se(c.$slots, "footer", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), te = (t, c) => {
  const n = t.__vccOpts || t;
  for (const [i, y] of c)
    n[i] = y;
  return n;
}, qe = /* @__PURE__ */ te(po, [["__scopeId", "data-v-21565df9"]]), ho = {
  key: 0,
  class: "panel-title-prefix"
}, yo = {
  key: 1,
  class: "panel-title-prefix-theme"
}, wo = /* @__PURE__ */ ee({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (c, n) => (s(), E(us(`h${t.level}`), {
      class: re(["panel-title", t.variant])
    }, {
      default: l(() => [
        t.showPrefix ? (s(), o("span", ho, a(t.prefix), 1)) : (s(), o("span", yo)),
        Se(c.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ko = /* @__PURE__ */ te(wo, [["__scopeId", "data-v-c3875efc"]]), bo = ["title"], _o = ["width", "height"], $o = /* @__PURE__ */ ee({
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
      ])], 8, _o))
    ], 8, bo));
  }
}), Ls = /* @__PURE__ */ te($o, [["__scopeId", "data-v-6fc7f16d"]]), Co = { class: "header-left" }, xo = {
  key: 0,
  class: "header-actions"
}, So = /* @__PURE__ */ ee({
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
      class: re(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", Co, [
        k(ko, { "show-prefix": t.showPrefix }, {
          default: l(() => [
            h(a(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (s(), E(Ls, {
          key: 0,
          onClick: n[0] || (n[0] = (i) => c.$emit("info-click"))
        })) : d("", !0)
      ]),
      c.$slots.actions ? (s(), o("div", xo, [
        Se(c.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), He = /* @__PURE__ */ te(So, [["__scopeId", "data-v-55a62cd6"]]), Io = {
  key: 0,
  class: "section-title-count"
}, Eo = {
  key: 1,
  class: "section-title-icon"
}, Mo = /* @__PURE__ */ ee({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (c, n) => (s(), E(us(`h${t.level}`), {
      class: re(["section-title", { clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (i) => t.clickable && c.$emit("click"))
    }, {
      default: l(() => [
        Se(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", Io, "(" + a(t.count) + ")", 1)) : d("", !0),
        t.clickable ? (s(), o("span", Eo, a(t.expanded ? "▼" : "▸"), 1)) : d("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), et = /* @__PURE__ */ te(Mo, [["__scopeId", "data-v-559361eb"]]), To = { class: "status-grid" }, Ro = { class: "status-grid__columns" }, zo = { class: "status-grid__column" }, Lo = { class: "status-grid__title" }, Po = { class: "status-grid__column status-grid__column--right" }, Do = { class: "status-grid__title" }, No = {
  key: 0,
  class: "status-grid__footer"
}, Uo = /* @__PURE__ */ ee({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (c, n) => (s(), o("div", To, [
      e("div", Ro, [
        e("div", zo, [
          e("h4", Lo, a(t.leftTitle), 1),
          Se(c.$slots, "left", {}, void 0, !0)
        ]),
        e("div", Po, [
          e("h4", Do, a(t.rightTitle), 1),
          Se(c.$slots, "right", {}, void 0, !0)
        ])
      ]),
      c.$slots.footer ? (s(), o("div", No, [
        Se(c.$slots, "footer", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), Oo = /* @__PURE__ */ te(Uo, [["__scopeId", "data-v-73b7ba3f"]]), Bo = {
  key: 0,
  class: "status-item__icon"
}, Fo = {
  key: 1,
  class: "status-item__count"
}, Ao = { class: "status-item__label" }, Vo = /* @__PURE__ */ ee({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(t) {
    const c = t, n = L(() => `status-item--${c.variant}`);
    return (i, y) => (s(), o("div", {
      class: re(["status-item", n.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (s(), o("span", Bo, a(t.icon), 1)) : d("", !0),
      t.count !== void 0 ? (s(), o("span", Fo, a(t.count), 1)) : d("", !0),
      e("span", Ao, a(t.label), 1)
    ], 2));
  }
}), rt = /* @__PURE__ */ te(Vo, [["__scopeId", "data-v-6f929183"]]), Wo = { class: "issue-card__header" }, jo = { class: "issue-card__icon" }, Go = { class: "issue-card__title" }, qo = {
  key: 0,
  class: "issue-card__content"
}, Ho = {
  key: 0,
  class: "issue-card__description"
}, Ko = {
  key: 1,
  class: "issue-card__items"
}, Jo = {
  key: 2,
  class: "issue-card__actions"
}, Yo = /* @__PURE__ */ ee({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(t) {
    const c = t, n = L(() => `issue-card--${c.severity}`);
    return (i, y) => (s(), o("div", {
      class: re(["issue-card", n.value])
    }, [
      e("div", Wo, [
        e("span", jo, a(t.icon), 1),
        e("h4", Go, a(t.title), 1)
      ]),
      i.$slots.default || t.description ? (s(), o("div", qo, [
        t.description ? (s(), o("p", Ho, a(t.description), 1)) : d("", !0),
        Se(i.$slots, "default", {}, void 0, !0)
      ])) : d("", !0),
      t.items && t.items.length ? (s(), o("div", Ko, [
        (s(!0), o(A, null, Z(t.items, (g, f) => (s(), o("div", {
          key: f,
          class: "issue-card__item"
        }, [
          y[0] || (y[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, a(g), 1)
        ]))), 128))
      ])) : d("", !0),
      i.$slots.actions ? (s(), o("div", Jo, [
        Se(i.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), st = /* @__PURE__ */ te(Yo, [["__scopeId", "data-v-df6aa348"]]), Xo = ["type", "disabled"], Qo = {
  key: 0,
  class: "spinner"
}, Zo = /* @__PURE__ */ ee({
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
      class: re(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: n[0] || (n[0] = (i) => c.$emit("click", i))
    }, [
      t.loading ? (s(), o("span", Qo)) : d("", !0),
      t.loading ? d("", !0) : Se(c.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, Xo));
  }
}), se = /* @__PURE__ */ te(Zo, [["__scopeId", "data-v-772abe47"]]), en = { class: "empty-state" }, tn = {
  key: 0,
  class: "empty-icon"
}, sn = { class: "empty-message" }, on = /* @__PURE__ */ ee({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (c, n) => (s(), o("div", en, [
      t.icon ? (s(), o("div", tn, a(t.icon), 1)) : d("", !0),
      e("p", sn, a(t.message), 1),
      t.actionLabel ? (s(), E(se, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (i) => c.$emit("action"))
      }, {
        default: l(() => [
          h(a(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : d("", !0)
    ]));
  }
}), at = /* @__PURE__ */ te(on, [["__scopeId", "data-v-4466284f"]]), nn = /* @__PURE__ */ ee({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (c, n) => (s(), o("span", {
      class: re(["detail-label"]),
      style: pt({ minWidth: t.minWidth })
    }, [
      Se(c.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), Yt = /* @__PURE__ */ te(nn, [["__scopeId", "data-v-75e9eeb8"]]), an = /* @__PURE__ */ ee({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (c, n) => (s(), o("span", {
      class: re(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      Se(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), rs = /* @__PURE__ */ te(an, [["__scopeId", "data-v-2f186e4c"]]), ln = { class: "detail-row" }, rn = /* @__PURE__ */ ee({
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
    return (c, n) => (s(), o("div", ln, [
      k(Yt, { "min-width": t.labelMinWidth }, {
        default: l(() => [
          h(a(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (s(), E(rs, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: l(() => [
          h(a(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : Se(c.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), Ue = /* @__PURE__ */ te(rn, [["__scopeId", "data-v-ef15664a"]]), dn = { class: "modal-header" }, cn = { class: "modal-body" }, un = { class: "status-section" }, mn = {
  key: 0,
  class: "status-section"
}, vn = { class: "section-header-row" }, fn = {
  key: 0,
  class: "workflow-group"
}, gn = { class: "workflow-group-header" }, pn = { class: "workflow-group-title" }, hn = { class: "workflow-list" }, yn = { class: "workflow-name" }, wn = { class: "workflow-issue" }, kn = {
  key: 1,
  class: "workflow-group"
}, bn = { class: "workflow-group-header" }, _n = { class: "workflow-group-title" }, $n = { class: "workflow-list" }, Cn = { class: "workflow-name" }, xn = { class: "workflow-issue" }, Sn = {
  key: 2,
  class: "workflow-group"
}, In = { class: "workflow-group-header" }, En = { class: "workflow-group-title" }, Mn = { class: "workflow-list" }, Tn = { class: "workflow-name" }, Rn = {
  key: 3,
  class: "workflow-group"
}, zn = { class: "workflow-group-header" }, Ln = { class: "workflow-group-title" }, Pn = { class: "workflow-list" }, Dn = { class: "workflow-name" }, Nn = {
  key: 4,
  class: "workflow-group"
}, Un = { class: "workflow-group-header" }, On = { class: "workflow-group-title" }, Bn = { class: "workflow-list" }, Fn = { class: "workflow-name" }, An = {
  key: 5,
  class: "workflow-group"
}, Vn = { class: "workflow-group-title" }, Wn = { class: "expand-icon" }, jn = {
  key: 0,
  class: "workflow-list"
}, Gn = { class: "workflow-name" }, qn = {
  key: 1,
  class: "status-section"
}, Hn = {
  key: 0,
  class: "change-group"
}, Kn = { class: "change-group-header" }, Jn = { class: "change-group-title" }, Yn = { class: "change-list" }, Xn = { class: "node-name" }, Qn = {
  key: 0,
  class: "dev-badge"
}, Zn = {
  key: 1,
  class: "change-group"
}, ea = { class: "change-group-header" }, ta = { class: "change-group-title" }, sa = { class: "change-list" }, oa = { class: "node-name" }, na = {
  key: 0,
  class: "dev-badge"
}, aa = {
  key: 2,
  class: "change-group"
}, la = { class: "change-list" }, ia = { class: "change-item" }, ra = { class: "node-name" }, da = {
  key: 3,
  class: "change-group"
}, ca = {
  key: 2,
  class: "status-section"
}, ua = { class: "section-header-row" }, ma = {
  key: 0,
  class: "drift-item"
}, va = { class: "drift-list" }, fa = {
  key: 0,
  class: "drift-list-more"
}, ga = {
  key: 1,
  class: "drift-item"
}, pa = { class: "drift-list" }, ha = {
  key: 0,
  class: "drift-list-more"
}, ya = {
  key: 2,
  class: "drift-item"
}, wa = { class: "drift-list" }, ka = { class: "version-actual" }, ba = { class: "version-expected" }, _a = {
  key: 0,
  class: "drift-list-more"
}, $a = {
  key: 3,
  class: "drift-item"
}, Ca = { class: "repair-action" }, xa = {
  key: 3,
  class: "status-section"
}, Sa = { class: "info-box" }, Ia = { class: "drift-list" }, Ea = {
  key: 0,
  class: "drift-list-more"
}, Ma = {
  key: 4,
  class: "status-section"
}, Ta = { class: "warning-box" }, Ra = {
  key: 5,
  class: "empty-state-inline"
}, za = { class: "modal-actions" }, La = /* @__PURE__ */ ee({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {},
    isRepairing: { type: Boolean }
  },
  emits: ["close", "navigate-workflows", "navigate-nodes", "repair"],
  setup(t) {
    const c = t, n = C(!1);
    Be(() => {
      console.log("StatusDetailModal mounted, initial show value:", c.show);
    }), bt(() => c.show, (b, $) => {
      console.log("StatusDetailModal show prop changed from", $, "to", b);
    }, { immediate: !0 });
    const i = L(() => {
      var b, $, T;
      return ((T = ($ = (b = c.status) == null ? void 0 : b.workflows) == null ? void 0 : $.analyzed) == null ? void 0 : T.filter(
        (O) => O.status === "broken" && O.sync_state === "synced"
      )) || [];
    }), y = L(() => {
      var b, $, T;
      return ((T = ($ = (b = c.status) == null ? void 0 : b.workflows) == null ? void 0 : $.analyzed) == null ? void 0 : T.filter(
        (O) => O.status === "broken" && O.sync_state !== "synced"
      )) || [];
    }), g = L(() => {
      var b, $, T;
      return ((T = ($ = (b = c.status) == null ? void 0 : b.workflows) == null ? void 0 : $.synced) == null ? void 0 : T.filter((O) => {
        var _, z, S;
        const m = (S = (z = (_ = c.status) == null ? void 0 : _.workflows) == null ? void 0 : z.analyzed) == null ? void 0 : S.find((x) => x.name === O);
        return !m || m.status !== "broken";
      })) || [];
    }), f = L(() => {
      var b, $, T, O, m;
      return (b = c.status) != null && b.workflows ? ((($ = c.status.workflows.new) == null ? void 0 : $.length) ?? 0) > 0 || (((T = c.status.workflows.modified) == null ? void 0 : T.length) ?? 0) > 0 || (((O = c.status.workflows.deleted) == null ? void 0 : O.length) ?? 0) > 0 || (((m = c.status.workflows.synced) == null ? void 0 : m.length) ?? 0) > 0 : !1;
    }), v = L(() => {
      var $, T, O;
      const b = ($ = c.status) == null ? void 0 : $.git_changes;
      return b ? (((T = b.nodes_added) == null ? void 0 : T.length) ?? 0) > 0 || (((O = b.nodes_removed) == null ? void 0 : O.length) ?? 0) > 0 || b.workflow_changes || b.has_other_changes : !1;
    }), r = L(() => {
      var b, $, T, O, m, _;
      return !f.value && !v.value && (($ = (b = c.status) == null ? void 0 : b.comparison) == null ? void 0 : $.is_synced) && (((T = c.status) == null ? void 0 : T.missing_models_count) ?? 0) === 0 && (((_ = (m = (O = c.status) == null ? void 0 : O.comparison) == null ? void 0 : m.disabled_nodes) == null ? void 0 : _.length) ?? 0) === 0;
    }), u = L(() => {
      var $, T;
      const b = (T = ($ = c.status) == null ? void 0 : $.git_changes) == null ? void 0 : T.workflow_changes;
      return b ? typeof b == "number" ? b : Object.keys(b).length : 0;
    });
    function p(b) {
      return typeof b == "string" ? b : b.name;
    }
    function w(b) {
      return typeof b == "object" && b.is_development === !0;
    }
    return (b, $) => {
      var T, O, m, _, z, S, x, H, V, q, D, M, U, ne, oe, j, ae, K, N, P, I, ie;
      return s(), E(Ve, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: $[7] || ($[7] = (Y) => b.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: $[6] || ($[6] = Pe(() => {
            }, ["stop"]))
          }, [
            e("div", dn, [
              $[8] || ($[8] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: $[0] || ($[0] = (Y) => b.$emit("close"))
              }, "✕")
            ]),
            e("div", cn, [
              e("div", un, [
                k(et, { level: "4" }, {
                  default: l(() => [...$[9] || ($[9] = [
                    h("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                k(Ue, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              f.value ? (s(), o("div", mn, [
                e("div", vn, [
                  k(et, { level: "4" }, {
                    default: l(() => [...$[10] || ($[10] = [
                      h("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: $[1] || ($[1] = (Y) => b.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                i.value.length ? (s(), o("div", fn, [
                  e("div", gn, [
                    $[11] || ($[11] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", pn, "BROKEN (COMMITTED) (" + a(i.value.length) + ")", 1)
                  ]),
                  e("div", hn, [
                    (s(!0), o(A, null, Z(i.value, (Y) => (s(), o("div", {
                      key: Y.name,
                      class: "workflow-item"
                    }, [
                      e("span", yn, a(Y.name), 1),
                      e("span", wn, a(Y.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                y.value.length ? (s(), o("div", kn, [
                  e("div", bn, [
                    $[12] || ($[12] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", _n, "BROKEN (UNCOMMITTED) (" + a(y.value.length) + ")", 1)
                  ]),
                  e("div", $n, [
                    (s(!0), o(A, null, Z(y.value, (Y) => (s(), o("div", {
                      key: Y.name,
                      class: "workflow-item"
                    }, [
                      e("span", Cn, a(Y.name), 1),
                      e("span", xn, a(Y.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (O = (T = t.status.workflows) == null ? void 0 : T.new) != null && O.length ? (s(), o("div", Sn, [
                  e("div", In, [
                    $[13] || ($[13] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", En, "NEW (" + a(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", Mn, [
                    (s(!0), o(A, null, Z(t.status.workflows.new, (Y) => (s(), o("div", {
                      key: Y,
                      class: "workflow-item"
                    }, [
                      e("span", Tn, a(Y), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (_ = (m = t.status.workflows) == null ? void 0 : m.modified) != null && _.length ? (s(), o("div", Rn, [
                  e("div", zn, [
                    $[14] || ($[14] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", Ln, "MODIFIED (" + a(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", Pn, [
                    (s(!0), o(A, null, Z(t.status.workflows.modified, (Y) => (s(), o("div", {
                      key: Y,
                      class: "workflow-item"
                    }, [
                      e("span", Dn, a(Y), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (S = (z = t.status.workflows) == null ? void 0 : z.deleted) != null && S.length ? (s(), o("div", Nn, [
                  e("div", Un, [
                    $[15] || ($[15] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", On, "DELETED (" + a(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", Bn, [
                    (s(!0), o(A, null, Z(t.status.workflows.deleted, (Y) => (s(), o("div", {
                      key: Y,
                      class: "workflow-item"
                    }, [
                      e("span", Fn, a(Y), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                g.value.length ? (s(), o("div", An, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: $[2] || ($[2] = (Y) => n.value = !n.value)
                  }, [
                    $[16] || ($[16] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", Vn, "SYNCED (" + a(g.value.length) + ")", 1),
                    e("span", Wn, a(n.value ? "▼" : "▶"), 1)
                  ]),
                  n.value ? (s(), o("div", jn, [
                    (s(!0), o(A, null, Z(g.value, (Y) => (s(), o("div", {
                      key: Y,
                      class: "workflow-item"
                    }, [
                      e("span", Gn, a(Y), 1)
                    ]))), 128))
                  ])) : d("", !0)
                ])) : d("", !0)
              ])) : d("", !0),
              v.value ? (s(), o("div", qn, [
                k(et, { level: "4" }, {
                  default: l(() => [...$[17] || ($[17] = [
                    h("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (H = (x = t.status.git_changes) == null ? void 0 : x.nodes_added) != null && H.length ? (s(), o("div", Hn, [
                  e("div", Kn, [
                    $[18] || ($[18] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", Jn, "NODES ADDED (" + a(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", Yn, [
                    (s(!0), o(A, null, Z(t.status.git_changes.nodes_added, (Y) => (s(), o("div", {
                      key: p(Y),
                      class: "change-item"
                    }, [
                      e("span", Xn, a(p(Y)), 1),
                      w(Y) ? (s(), o("span", Qn, "dev")) : d("", !0)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (q = (V = t.status.git_changes) == null ? void 0 : V.nodes_removed) != null && q.length ? (s(), o("div", Zn, [
                  e("div", ea, [
                    $[19] || ($[19] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", ta, "NODES REMOVED (" + a(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", sa, [
                    (s(!0), o(A, null, Z(t.status.git_changes.nodes_removed, (Y) => (s(), o("div", {
                      key: p(Y),
                      class: "change-item"
                    }, [
                      e("span", oa, a(p(Y)), 1),
                      w(Y) ? (s(), o("span", na, "dev")) : d("", !0)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                (D = t.status.git_changes) != null && D.workflow_changes ? (s(), o("div", aa, [
                  $[20] || ($[20] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", la, [
                    e("div", ia, [
                      e("span", ra, a(u.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : d("", !0),
                (M = t.status.git_changes) != null && M.has_other_changes ? (s(), o("div", da, [...$[21] || ($[21] = [
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
              (U = t.status.comparison) != null && U.is_synced ? d("", !0) : (s(), o("div", ca, [
                e("div", ua, [
                  k(et, { level: "4" }, {
                    default: l(() => [...$[22] || ($[22] = [
                      h("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: $[3] || ($[3] = (Y) => b.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                $[26] || ($[26] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (oe = (ne = t.status.comparison) == null ? void 0 : ne.missing_nodes) != null && oe.length ? (s(), o("div", ma, [
                  k(Ue, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", va, [
                    (s(!0), o(A, null, Z(t.status.comparison.missing_nodes.slice(0, 10), (Y) => (s(), o("div", {
                      key: Y,
                      class: "drift-list-item"
                    }, " - " + a(Y), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (s(), o("div", fa, " ... and " + a(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : d("", !0)
                  ])
                ])) : d("", !0),
                (ae = (j = t.status.comparison) == null ? void 0 : j.extra_nodes) != null && ae.length ? (s(), o("div", ga, [
                  k(Ue, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", pa, [
                    (s(!0), o(A, null, Z(t.status.comparison.extra_nodes.slice(0, 10), (Y) => (s(), o("div", {
                      key: Y,
                      class: "drift-list-item"
                    }, " - " + a(Y), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (s(), o("div", ha, " ... and " + a(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : d("", !0)
                  ])
                ])) : d("", !0),
                (N = (K = t.status.comparison) == null ? void 0 : K.version_mismatches) != null && N.length ? (s(), o("div", ya, [
                  k(Ue, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  e("div", wa, [
                    (s(!0), o(A, null, Z(t.status.comparison.version_mismatches.slice(0, 10), (Y) => (s(), o("div", {
                      key: Y.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      h(a(Y.name) + ": ", 1),
                      e("span", ka, a(Y.actual), 1),
                      $[23] || ($[23] = h(" → ", -1)),
                      e("span", ba, a(Y.expected), 1)
                    ]))), 128)),
                    t.status.comparison.version_mismatches.length > 10 ? (s(), o("div", _a, " ... and " + a(t.status.comparison.version_mismatches.length - 10) + " more ", 1)) : d("", !0)
                  ])
                ])) : d("", !0),
                ((P = t.status.comparison) == null ? void 0 : P.packages_in_sync) === !1 ? (s(), o("div", $a, [
                  k(Ue, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : d("", !0),
                e("div", Ca, [
                  k(se, {
                    variant: "warning",
                    loading: t.isRepairing,
                    onClick: $[4] || ($[4] = (Y) => b.$emit("repair"))
                  }, {
                    default: l(() => [...$[24] || ($[24] = [
                      h(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  $[25] || ($[25] = e("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (ie = (I = t.status.comparison) == null ? void 0 : I.disabled_nodes) != null && ie.length ? (s(), o("div", xa, [
                k(et, { level: "4" }, {
                  default: l(() => [...$[27] || ($[27] = [
                    h("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", Sa, [
                  $[28] || ($[28] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, a(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", Ia, [
                  (s(!0), o(A, null, Z(t.status.comparison.disabled_nodes.slice(0, 10), (Y) => (s(), o("div", {
                    key: Y,
                    class: "drift-list-item"
                  }, " • " + a(Y), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (s(), o("div", Ea, " ... and " + a(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : d("", !0)
                ])
              ])) : d("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (s(), o("div", Ma, [
                k(et, { level: "4" }, {
                  default: l(() => [...$[29] || ($[29] = [
                    h("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", Ta, [
                  $[30] || ($[30] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, a(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                $[31] || ($[31] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : d("", !0),
              r.value ? (s(), o("div", Ra, [...$[32] || ($[32] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : d("", !0)
            ]),
            e("div", za, [
              k(se, {
                variant: "secondary",
                onClick: $[5] || ($[5] = (Y) => b.$emit("close"))
              }, {
                default: l(() => [...$[33] || ($[33] = [
                  h(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : d("", !0)
      ]);
    };
  }
}), Pa = /* @__PURE__ */ te(La, [["__scopeId", "data-v-e2b37122"]]), Da = { class: "health-section-header" }, Na = { class: "suggestions-content" }, Ua = { class: "suggestions-text" }, Oa = { style: { "margin-top": "var(--cg-space-3)" } }, Ba = {
  key: 1,
  class: "no-issues-text"
}, Fa = /* @__PURE__ */ ee({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models", "repair-environment", "start-setup", "view-environments", "create-environment"],
  setup(t, { expose: c, emit: n }) {
    const i = t, y = C(!1), g = C(!1);
    function f() {
      y.value = !0;
    }
    function v() {
      y.value = !1, u("view-workflows");
    }
    function r() {
      y.value = !1, u("view-nodes");
    }
    const u = n, p = C(!1), w = C(!1);
    function b() {
      w.value = !0, u("repair-environment");
    }
    function $() {
      w.value = !1;
    }
    function T() {
      y.value = !1;
    }
    const O = L(() => {
      const K = i.status.workflows.analyzed || [], N = K.filter(
        (P) => P.unresolved_models_count > 0 || P.ambiguous_models_count > 0
      );
      return N.length === 0 && i.status.missing_models_count > 0 ? K.filter((P) => P.sync_state === "synced") : N;
    });
    function m() {
      const K = O.value;
      K.length !== 0 && (p.value = !0, u("repair-missing-models", K.map((N) => N.name)));
    }
    function _() {
      p.value = !1;
    }
    c({ resetRepairingState: _, resetRepairingEnvironmentState: $, closeDetailModal: T });
    const z = L(() => i.status.workflows.new.length > 0 || i.status.workflows.modified.length > 0 || i.status.workflows.deleted.length > 0), S = L(() => i.status.has_changes), x = L(() => {
      const K = i.status.git_changes;
      return K.nodes_added.length > 0 || K.nodes_removed.length > 0 || K.workflow_changes;
    }), H = L(() => i.status.has_changes || z.value), V = L(() => Object.keys(i.status.git_changes.workflow_changes_detail).length), q = L(() => i.status.git_changes.has_other_changes), D = L(() => {
      var K;
      return ((K = i.status.workflows.analyzed) == null ? void 0 : K.filter((N) => N.status === "broken")) || [];
    }), M = L(() => {
      var K;
      return ((K = i.status.workflows.analyzed) == null ? void 0 : K.filter(
        (N) => N.has_path_sync_issues && !N.has_issues
      )) || [];
    }), U = L(() => D.value.length > 0), ne = L(() => U.value || M.value.length > 0 || i.status.missing_models_count > 0 || !i.status.comparison.is_synced || i.status.has_legacy_manager), oe = L(() => {
      const K = [];
      return i.status.workflows.new.length > 0 && K.push(`${i.status.workflows.new.length} new`), i.status.workflows.modified.length > 0 && K.push(`${i.status.workflows.modified.length} modified`), i.status.workflows.deleted.length > 0 && K.push(`${i.status.workflows.deleted.length} deleted`), K.length > 0 ? `${K.join(", ")} workflow${K.length === 1 && !K[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), j = L(() => {
      var P, I;
      const K = [], N = i.status.comparison;
      return (P = N.missing_nodes) != null && P.length && K.push(`${N.missing_nodes.length} missing node${N.missing_nodes.length === 1 ? "" : "s"}`), (I = N.extra_nodes) != null && I.length && K.push(`${N.extra_nodes.length} untracked node${N.extra_nodes.length === 1 ? "" : "s"}`), K.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${K.join(" and ")}.`;
    }), ae = L(() => {
      var P, I;
      const K = [], N = i.status.comparison;
      return (P = N.extra_nodes) != null && P.length && (N.extra_nodes.slice(0, 3).forEach((ie) => {
        K.push(`Untracked: ${ie}`);
      }), N.extra_nodes.length > 3 && K.push(`...and ${N.extra_nodes.length - 3} more untracked`)), (I = N.missing_nodes) != null && I.length && (N.missing_nodes.slice(0, 3).forEach((ie) => {
        K.push(`Missing: ${ie}`);
      }), N.missing_nodes.length > 3 && K.push(`...and ${N.missing_nodes.length - 3} more missing`)), K;
    });
    return (K, N) => (s(), o(A, null, [
      k(qe, null, {
        header: l(() => [
          k(He, { title: "STATUS" })
        ]),
        content: l(() => [
          i.setupState === "no_workspace" ? (s(), E(st, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: l(() => [
              k(se, {
                variant: "primary",
                size: "sm",
                onClick: N[0] || (N[0] = (P) => K.$emit("start-setup"))
              }, {
                default: l(() => [...N[13] || (N[13] = [
                  h(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : i.setupState === "unmanaged" ? (s(), E(st, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: l(() => [
              k(se, {
                variant: "primary",
                size: "sm",
                onClick: N[1] || (N[1] = (P) => K.$emit("view-environments"))
              }, {
                default: l(() => [...N[14] || (N[14] = [
                  h(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : i.setupState === "empty_workspace" ? (s(), E(st, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: l(() => [
              k(se, {
                variant: "primary",
                size: "sm",
                onClick: N[2] || (N[2] = (P) => K.$emit("create-environment"))
              }, {
                default: l(() => [...N[15] || (N[15] = [
                  h(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : d("", !0),
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: N[4] || (N[4] = (P) => g.value = !0),
            onMouseleave: N[5] || (N[5] = (P) => g.value = !1)
          }, [
            e("div", Da, [
              k(et, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: l(() => [...N[16] || (N[16] = [
                  h(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              k(ao, { name: "fade" }, {
                default: l(() => [
                  g.value ? (s(), E(se, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: f
                  }, {
                    default: l(() => [...N[17] || (N[17] = [
                      h(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : d("", !0)
                ]),
                _: 1
              })
            ]),
            k(Oo, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, Wt({
              left: l(() => [
                t.status.workflows.new.length ? (s(), E(rt, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : d("", !0),
                t.status.workflows.modified.length ? (s(), E(rt, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : d("", !0),
                t.status.workflows.deleted.length ? (s(), E(rt, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : d("", !0),
                k(rt, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: z.value
                }, null, 8, ["count", "separator"])
              ]),
              right: l(() => [
                t.status.git_changes.nodes_added.length ? (s(), E(rt, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : d("", !0),
                t.status.git_changes.nodes_removed.length ? (s(), E(rt, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : d("", !0),
                t.status.git_changes.workflow_changes ? (s(), E(rt, {
                  key: 2,
                  icon: "●",
                  count: V.value,
                  label: V.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : d("", !0),
                q.value ? (s(), E(rt, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : d("", !0),
                S.value && !x.value && !q.value ? (s(), E(rt, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : d("", !0),
                S.value ? d("", !0) : (s(), E(rt, {
                  key: 5,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 2
            }, [
              H.value ? {
                name: "footer",
                fn: l(() => [
                  N[19] || (N[19] = e("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  e("div", Na, [
                    e("span", Ua, a(oe.value), 1),
                    k(se, {
                      variant: "primary",
                      size: "sm",
                      onClick: N[3] || (N[3] = (P) => K.$emit("commit-changes"))
                    }, {
                      default: l(() => [...N[18] || (N[18] = [
                        h(" Commit ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ]),
                key: "0"
              } : void 0
            ]), 1024)
          ], 32),
          t.status.is_detached_head ? (s(), E(st, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: l(() => [
              k(se, {
                variant: "primary",
                size: "sm",
                onClick: N[6] || (N[6] = (P) => K.$emit("create-branch"))
              }, {
                default: l(() => [...N[20] || (N[20] = [
                  h(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : d("", !0),
          e("div", Oa, [
            k(et, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: l(() => [...N[21] || (N[21] = [
                h(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            ne.value ? (s(), o(A, { key: 0 }, [
              D.value.length > 0 ? (s(), E(st, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${D.value.length} workflow${D.value.length === 1 ? "" : "s"} can't run`,
                description: "These workflows have missing dependencies that must be resolved before they can run.",
                items: D.value.map((P) => `${P.name} — ${P.issue_summary}`)
              }, {
                actions: l(() => [
                  k(se, {
                    variant: "primary",
                    size: "sm",
                    onClick: N[7] || (N[7] = (P) => K.$emit("view-workflows"))
                  }, {
                    default: l(() => [...N[22] || (N[22] = [
                      h(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : d("", !0),
              M.value.length > 0 ? (s(), E(st, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${M.value.length} workflow${M.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: M.value.map((P) => `${P.name} — ${P.models_needing_path_sync_count} model path${P.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: l(() => [
                  k(se, {
                    variant: "primary",
                    size: "sm",
                    onClick: N[8] || (N[8] = (P) => K.$emit("view-workflows"))
                  }, {
                    default: l(() => [...N[23] || (N[23] = [
                      h(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : d("", !0),
              t.status.missing_models_count > 0 && !U.value ? (s(), E(st, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: l(() => [
                  k(se, {
                    variant: "primary",
                    size: "sm",
                    disabled: p.value,
                    onClick: m
                  }, {
                    default: l(() => [
                      h(a(p.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  k(se, {
                    variant: "secondary",
                    size: "sm",
                    onClick: N[9] || (N[9] = (P) => K.$emit("view-workflows"))
                  }, {
                    default: l(() => [...N[24] || (N[24] = [
                      h(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : d("", !0),
              t.status.comparison.is_synced ? d("", !0) : (s(), E(st, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: j.value,
                items: ae.value
              }, {
                actions: l(() => [
                  k(se, {
                    variant: "secondary",
                    size: "sm",
                    onClick: f
                  }, {
                    default: l(() => [...N[25] || (N[25] = [
                      h(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  k(se, {
                    variant: "primary",
                    size: "sm",
                    onClick: N[10] || (N[10] = (P) => K.$emit("view-nodes"))
                  }, {
                    default: l(() => [...N[26] || (N[26] = [
                      h(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              t.status.has_legacy_manager ? (s(), E(st, {
                key: 4,
                severity: "warning",
                icon: "⚠",
                title: "Legacy ComfyUI-Manager detected",
                description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
              }, {
                actions: l(() => [
                  k(se, {
                    variant: "primary",
                    size: "sm",
                    onClick: N[11] || (N[11] = (P) => K.$emit("view-nodes"))
                  }, {
                    default: l(() => [...N[27] || (N[27] = [
                      h(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : d("", !0)
            ], 64)) : H.value ? (s(), o("span", Ba, "No issues")) : (s(), E(at, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      k(Pa, {
        show: y.value,
        status: t.status,
        "is-repairing": w.value,
        onClose: N[12] || (N[12] = (P) => y.value = !1),
        onNavigateWorkflows: v,
        onNavigateNodes: r,
        onRepair: b
      }, null, 8, ["show", "status", "is-repairing"])
    ], 64));
  }
}), Aa = /* @__PURE__ */ te(Fa, [["__scopeId", "data-v-55fcd77f"]]), Va = ["type", "value", "placeholder", "disabled"], Wa = /* @__PURE__ */ ee({
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
    const i = t, y = n, g = C(null);
    function f(v) {
      const r = v.target.value;
      y("update:modelValue", r);
    }
    return Be(() => {
      i.autoFocus && g.value && g.value.focus();
    }), c({
      focus: () => {
        var v;
        return (v = g.value) == null ? void 0 : v.focus();
      },
      blur: () => {
        var v;
        return (v = g.value) == null ? void 0 : v.blur();
      }
    }), (v, r) => (s(), o("input", {
      ref_key: "inputRef",
      ref: g,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: re(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: f,
      onKeyup: [
        r[0] || (r[0] = gt((u) => v.$emit("enter"), ["enter"])),
        r[1] || (r[1] = gt((u) => v.$emit("escape"), ["escape"]))
      ],
      onFocus: r[2] || (r[2] = (u) => v.$emit("focus")),
      onBlur: r[3] || (r[3] = (u) => v.$emit("blur"))
    }, null, 42, Va));
  }
}), es = /* @__PURE__ */ te(Wa, [["__scopeId", "data-v-0380d08f"]]), ja = { class: "branch-create-form" }, Ga = { class: "form-actions" }, qa = /* @__PURE__ */ ee({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: c }) {
    const n = c, i = C(""), y = L(() => {
      const v = i.value.trim();
      return v.length > 0 && !v.startsWith("-") && !v.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(v);
    });
    function g() {
      y.value && (n("create", i.value.trim()), i.value = "");
    }
    function f() {
      i.value = "", n("cancel");
    }
    return (v, r) => (s(), o("div", ja, [
      k(es, {
        modelValue: i.value,
        "onUpdate:modelValue": r[0] || (r[0] = (u) => i.value = u),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: g,
        onEscape: f
      }, null, 8, ["modelValue"]),
      e("div", Ga, [
        k(se, {
          variant: "primary",
          size: "sm",
          disabled: !y.value,
          onClick: g
        }, {
          default: l(() => [...r[1] || (r[1] = [
            h(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        k(se, {
          variant: "secondary",
          size: "sm",
          onClick: f
        }, {
          default: l(() => [...r[2] || (r[2] = [
            h(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Ha = /* @__PURE__ */ te(qa, [["__scopeId", "data-v-7c500394"]]), Ka = { class: "branch-list-item__indicator" }, Ja = { class: "branch-list-item__name" }, Ya = {
  key: 0,
  class: "branch-list-item__actions"
}, Xa = {
  key: 0,
  class: "branch-list-item__current-label"
}, Qa = /* @__PURE__ */ ee({
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
      class: re(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (i) => t.clickable && c.$emit("click"))
    }, [
      e("span", Ka, a(t.isCurrent ? "●" : "○"), 1),
      e("span", Ja, a(t.branchName), 1),
      c.$slots.actions || t.showCurrentLabel ? (s(), o("div", Ya, [
        Se(c.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (s(), o("span", Xa, " current ")) : d("", !0)
      ])) : d("", !0)
    ], 2));
  }
}), Za = /* @__PURE__ */ te(Qa, [["__scopeId", "data-v-c6581a24"]]), el = {
  key: 2,
  class: "branch-list"
}, tl = /* @__PURE__ */ ee({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create", "delete"],
  setup(t, { emit: c }) {
    const n = c, i = C(!1);
    function y(f) {
      n("create", f), g();
    }
    function g() {
      i.value = !1;
    }
    return (f, v) => (s(), E(qe, null, {
      header: l(() => [
        k(He, { title: "BRANCHES" }, {
          actions: l(() => [
            i.value ? d("", !0) : (s(), E(se, {
              key: 0,
              variant: "primary",
              size: "sm",
              onClick: v[0] || (v[0] = (r) => i.value = !0)
            }, {
              default: l(() => [...v[1] || (v[1] = [
                h(" + Create Branch ", -1)
              ])]),
              _: 1
            }))
          ]),
          _: 1
        })
      ]),
      content: l(() => [
        i.value ? (s(), E(Ha, {
          key: 0,
          onCreate: y,
          onCancel: g
        })) : d("", !0),
        t.branches.length === 0 ? (s(), E(at, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (s(), o("div", el, [
          (s(!0), o(A, null, Z(t.branches, (r) => (s(), E(Za, {
            key: r.name,
            "branch-name": r.name,
            "is-current": r.is_current
          }, {
            actions: l(() => [
              r.is_current ? d("", !0) : (s(), E(se, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: (u) => f.$emit("delete", r.name)
              }, {
                default: l(() => [...v[2] || (v[2] = [
                  h(" Delete ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])),
              r.is_current ? d("", !0) : (s(), E(se, {
                key: 1,
                variant: "secondary",
                size: "xs",
                onClick: (u) => f.$emit("switch", r.name)
              }, {
                default: l(() => [...v[3] || (v[3] = [
                  h(" Switch ", -1)
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
}), sl = /* @__PURE__ */ te(tl, [["__scopeId", "data-v-86784ddd"]]), ol = { class: "commit-list" }, nl = /* @__PURE__ */ ee({
  __name: "CommitList",
  setup(t) {
    return (c, n) => (s(), o("div", ol, [
      Se(c.$slots, "default", {}, void 0, !0)
    ]));
  }
}), al = /* @__PURE__ */ te(nl, [["__scopeId", "data-v-8c5ee761"]]), ll = { class: "commit-hash" }, il = /* @__PURE__ */ ee({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const c = t, n = L(() => c.hash.slice(0, c.length));
    return (i, y) => (s(), o("span", ll, a(n.value), 1));
  }
}), Ps = /* @__PURE__ */ te(il, [["__scopeId", "data-v-7c333cc6"]]), rl = { class: "commit-message" }, dl = { class: "commit-date" }, cl = /* @__PURE__ */ ee({
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
    function y() {
      n.clickable && i("click");
    }
    return (g, f) => (s(), o("div", {
      class: re(["commit-item", { clickable: t.clickable }]),
      onClick: y
    }, [
      k(Ps, { hash: t.hash }, null, 8, ["hash"]),
      e("span", rl, a(t.message), 1),
      e("span", dl, a(t.relativeDate), 1),
      g.$slots.actions ? (s(), o("div", {
        key: 0,
        class: "commit-actions",
        onClick: f[0] || (f[0] = Pe(() => {
        }, ["stop"]))
      }, [
        Se(g.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), ul = /* @__PURE__ */ te(cl, [["__scopeId", "data-v-dd7c621b"]]), ml = /* @__PURE__ */ ee({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (c, n) => (s(), E(qe, null, {
      header: l(() => [
        k(He, { title: "HISTORY" })
      ]),
      content: l(() => [
        t.commits.length === 0 ? (s(), E(at, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (s(), E(al, { key: 1 }, {
          default: l(() => [
            (s(!0), o(A, null, Z(t.commits, (i) => (s(), E(ul, {
              key: i.hash,
              hash: i.short_hash || i.hash,
              message: i.message,
              "relative-date": i.date_relative || i.relative_date,
              onClick: (y) => c.$emit("select", i)
            }, {
              actions: l(() => [
                k(se, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (y) => c.$emit("checkout", i),
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
}), vl = /* @__PURE__ */ te(ml, [["__scopeId", "data-v-981c3c64"]]), M_ = os({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const T_ = [
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
], R_ = {
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
}, fl = [
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
], z_ = [
  ...fl,
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
function Pt() {
  return !1;
}
function Ae() {
  const t = C(!1), c = C(null);
  async function n(G, ue) {
    var ze;
    if (!((ze = window.app) != null && ze.api))
      throw new Error("ComfyUI API not available");
    const $e = await window.app.api.fetchApi(G, ue);
    if (!$e.ok) {
      const Qe = await $e.json().catch(() => ({}));
      throw new Error(Qe.error || Qe.message || `Request failed: ${$e.status}`);
    }
    return $e.json();
  }
  async function i(G = !1) {
    return n(G ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function y(G, ue = !1) {
    return n("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: G, allow_issues: ue })
    });
  }
  async function g(G = 10, ue = 0) {
    return n(`/v2/comfygit/log?limit=${G}&offset=${ue}`);
  }
  async function f(G) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: G })
    });
  }
  async function v() {
    return n("/v2/comfygit/export/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function r(G) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: G, force: !0 })
    });
  }
  async function u() {
    return n("/v2/comfygit/branches");
  }
  async function p(G) {
    return n(`/v2/comfygit/commit/${G}`);
  }
  async function w(G, ue = !1) {
    return n("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: G, force: ue })
    });
  }
  async function b(G, ue = "HEAD") {
    return n("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: G, start_point: ue })
    });
  }
  async function $(G, ue = !1) {
    return n("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: G, force: ue })
    });
  }
  async function T(G, ue = !1) {
    return n(`/v2/comfygit/branch/${encodeURIComponent(G)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: ue })
    });
  }
  async function O() {
    try {
      return (await n("/v2/comfygit/environments")).environments;
    } catch {
      try {
        const G = await i();
        return [{
          name: G.environment,
          is_current: !0,
          path: "~/comfygit/environments/" + G.environment,
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          workflow_count: G.workflows.total,
          node_count: 0,
          model_count: 0,
          current_branch: G.branch
        }];
      } catch {
        return [];
      }
    }
  }
  async function m(G) {
    return n("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ target_env: G })
    });
  }
  async function _() {
    try {
      return n("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function z(G) {
    return n("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(G)
    });
  }
  async function S() {
    return n("/v2/workspace/environments/create_status");
  }
  async function x(G = 20) {
    return n(`/v2/workspace/comfyui_releases?limit=${G}`);
  }
  async function H(G) {
    return n(`/v2/workspace/environments/${G}`, {
      method: "DELETE"
    });
  }
  async function V(G = !1) {
    try {
      return n(G ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const ue = await i(G), $e = [];
      return ue.workflows.new.forEach((ze) => {
        $e.push({ name: ze, status: "new", missing_nodes: 0, missing_models: 0, path: ze });
      }), ue.workflows.modified.forEach((ze) => {
        $e.push({ name: ze, status: "modified", missing_nodes: 0, missing_models: 0, path: ze });
      }), ue.workflows.synced.forEach((ze) => {
        $e.push({ name: ze, status: "synced", missing_nodes: 0, missing_models: 0, path: ze });
      }), $e;
    }
  }
  async function q(G) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(G)}/details`);
  }
  async function D(G) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(G)}/resolve`, {
      method: "POST"
    });
  }
  async function M(G, ue, $e) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(G)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: ue, install_models: $e })
    });
  }
  async function U(G, ue, $e) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(G)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: ue, importance: $e })
    });
  }
  async function ne() {
    try {
      return n("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function oe() {
    try {
      return n("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function j(G) {
    return n(`/v2/workspace/models/details/${encodeURIComponent(G)}`);
  }
  async function ae(G) {
    return n("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: G })
    });
  }
  async function K(G, ue) {
    return n(`/v2/workspace/models/${G}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ue })
    });
  }
  async function N(G, ue) {
    return n(`/v2/workspace/models/${G}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ue })
    });
  }
  async function P(G) {
    return n(`/v2/workspace/models/${G}`, {
      method: "DELETE"
    });
  }
  async function I(G) {
    return n("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(G)
    });
  }
  async function ie() {
    return n("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function Y() {
    return n("/v2/workspace/models/directory");
  }
  async function Te(G) {
    return n("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: G })
    });
  }
  async function _e() {
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
  async function de(G) {
    return n("/v2/comfygit/config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(G)
    });
  }
  async function le(G, ue) {
    try {
      const $e = new URLSearchParams();
      return G && $e.append("level", G), ue && $e.append("lines", ue.toString()), n(`/v2/comfygit/debug/logs?${$e}`);
    } catch {
      return [];
    }
  }
  async function ce(G, ue) {
    try {
      const $e = new URLSearchParams();
      return G && $e.append("level", G), ue && $e.append("lines", ue.toString()), n(`/v2/workspace/debug/logs?${$e}`);
    } catch {
      return [];
    }
  }
  async function ve() {
    return n("/v2/comfygit/debug/logs/path");
  }
  async function Le() {
    return n("/v2/workspace/debug/logs/path");
  }
  async function he(G) {
    return n("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: G })
    });
  }
  async function Ce() {
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
  async function ge(G) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(G)}/track-dev`, {
      method: "POST"
    });
  }
  async function X(G) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(G)}/install`, {
      method: "POST"
    });
  }
  async function Re(G) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(G)}/update`, {
      method: "POST"
    });
  }
  async function Ee(G) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(G)}`, {
      method: "DELETE"
    });
  }
  async function we() {
    try {
      return n("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function pe(G, ue) {
    return n("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: G, url: ue })
    });
  }
  async function Ke(G) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(G)}`, {
      method: "DELETE"
    });
  }
  async function Xe(G, ue, $e) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(G)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: ue, push_url: $e })
    });
  }
  async function _t(G) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(G)}/fetch`, {
      method: "POST"
    });
  }
  async function be(G) {
    try {
      return n(`/v2/comfygit/remotes/${encodeURIComponent(G)}/status`);
    } catch {
      return null;
    }
  }
  async function We(G = "skip", ue = !0) {
    return n("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: G,
        remove_extra_nodes: ue
      })
    });
  }
  async function wt(G, ue) {
    const $e = ue ? `/v2/comfygit/remotes/${encodeURIComponent(G)}/pull-preview?branch=${encodeURIComponent(ue)}` : `/v2/comfygit/remotes/${encodeURIComponent(G)}/pull-preview`;
    return n($e);
  }
  async function ut(G, ue = {}) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(G)}/pull`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: ue.modelStrategy || "skip",
        force: ue.force || !1,
        resolutions: ue.resolutions
      })
    });
  }
  async function De(G, ue) {
    const $e = ue ? `/v2/comfygit/remotes/${encodeURIComponent(G)}/push-preview?branch=${encodeURIComponent(ue)}` : `/v2/comfygit/remotes/${encodeURIComponent(G)}/push-preview`;
    return n($e);
  }
  async function $t(G, ue = {}) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(G)}/push`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: ue.force || !1 })
    });
  }
  async function lt(G, ue) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(G)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: ue })
    });
  }
  async function J(G) {
    const ue = {
      success: 0,
      failed: []
    };
    for (const $e of G)
      try {
        await D($e), ue.success++;
      } catch (ze) {
        ue.failed.push({
          name: $e,
          error: ze instanceof Error ? ze.message : "Unknown error"
        });
      }
    return ue;
  }
  async function B(G) {
    var ze;
    const ue = new FormData();
    if (ue.append("file", G), !((ze = window.app) != null && ze.api))
      throw new Error("ComfyUI API not available");
    const $e = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: ue
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!$e.ok) {
      const Qe = await $e.json().catch(() => ({}));
      throw new Error(Qe.error || `Preview failed: ${$e.status}`);
    }
    return $e.json();
  }
  async function F(G) {
    return n(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(G)}`
    );
  }
  async function Q(G, ue, $e, ze) {
    var qt;
    const Qe = new FormData();
    if (Qe.append("file", G), Qe.append("name", ue), Qe.append("model_strategy", $e), Qe.append("torch_backend", ze), !((qt = window.app) != null && qt.api))
      throw new Error("ComfyUI API not available");
    const It = await window.app.api.fetchApi("/v2/workspace/import", {
      method: "POST",
      body: Qe
    });
    if (!It.ok) {
      const Ht = await It.json().catch(() => ({}));
      throw new Error(Ht.message || Ht.error || `Import failed: ${It.status}`);
    }
    return It.json();
  }
  async function ke() {
    return n("/v2/workspace/import/status");
  }
  async function it(G) {
    return n("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: G })
    });
  }
  async function mt(G, ue, $e, ze) {
    return n("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: G,
        name: ue,
        model_strategy: $e,
        torch_backend: ze
      })
    });
  }
  async function tt() {
    return n("/v2/setup/status");
  }
  async function xt(G) {
    return n("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(G)
    });
  }
  async function vt() {
    return n("/v2/setup/initialize_status");
  }
  async function St(G) {
    return n("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(G)
    });
  }
  return {
    isLoading: t,
    error: c,
    getStatus: i,
    commit: y,
    getHistory: g,
    exportEnv: f,
    validateExport: v,
    exportEnvWithForce: r,
    // Git Operations
    getBranches: u,
    getCommitDetail: p,
    checkout: w,
    createBranch: b,
    switchBranch: $,
    deleteBranch: T,
    // Environment Management
    getEnvironments: O,
    switchEnvironment: m,
    getSwitchProgress: _,
    createEnvironment: z,
    getCreateProgress: S,
    getComfyUIReleases: x,
    deleteEnvironment: H,
    // Workflow Management
    getWorkflows: V,
    getWorkflowDetails: q,
    resolveWorkflow: D,
    installWorkflowDeps: M,
    setModelImportance: U,
    // Model Management
    getEnvironmentModels: ne,
    getWorkspaceModels: oe,
    getModelDetails: j,
    openFileLocation: ae,
    addModelSource: K,
    removeModelSource: N,
    deleteModel: P,
    downloadModel: I,
    scanWorkspaceModels: ie,
    getModelsDirectory: Y,
    setModelsDirectory: Te,
    // Settings
    getConfig: _e,
    updateConfig: de,
    // Debug/Logs
    getEnvironmentLogs: le,
    getWorkspaceLogs: ce,
    getEnvironmentLogPath: ve,
    getWorkspaceLogPath: Le,
    openFile: he,
    // Node Management
    getNodes: Ce,
    trackNodeAsDev: ge,
    installNode: X,
    updateNode: Re,
    uninstallNode: Ee,
    // Git Remotes
    getRemotes: we,
    addRemote: pe,
    removeRemote: Ke,
    updateRemoteUrl: Xe,
    fetchRemote: _t,
    getRemoteSyncStatus: be,
    // Push/Pull
    getPullPreview: wt,
    pullFromRemote: ut,
    getPushPreview: De,
    pushToRemote: $t,
    validateMerge: lt,
    // Environment Sync
    syncEnvironmentManually: We,
    // Workflow Repair
    repairWorkflowModels: J,
    // Import Operations
    previewTarballImport: B,
    previewGitImport: it,
    validateEnvironmentName: F,
    executeImport: Q,
    executeGitImport: mt,
    getImportProgress: ke,
    // First-Time Setup
    getSetupStatus: tt,
    initializeWorkspace: xt,
    getInitializeProgress: vt,
    validatePath: St
  };
}
async function Dt(t, c = {}, n = 5e3) {
  const i = new AbortController(), y = setTimeout(() => i.abort(), n);
  try {
    const g = await fetch(t, {
      ...c,
      signal: i.signal
    });
    return clearTimeout(y), g;
  } catch (g) {
    throw clearTimeout(y), g.name === "AbortError" ? new Error(`Request timeout after ${n}ms`) : g;
  }
}
function Ds() {
  const t = C(null);
  async function c() {
    try {
      const f = await Dt(
        "http://127.0.0.1:8188/api/v2/comfygit/orchestrator_port",
        {},
        5e3
      );
      if (f.ok)
        return (await f.json()).port;
    } catch {
    }
    return 8189;
  }
  async function n() {
    if (t.value || (t.value = await c()), !t.value)
      return null;
    try {
      const f = await Dt(
        `http://127.0.0.1:${t.value}/health`,
        {},
        5e3
      );
      if (!f.ok) throw new Error("Health check failed");
      return await f.json();
    } catch {
      return t.value = await c(), null;
    }
  }
  async function i() {
    if (t.value || (t.value = await c()), !t.value)
      return null;
    try {
      const f = await Dt(
        `http://127.0.0.1:${t.value}/status`,
        {},
        5e3
      );
      if (!f.ok) throw new Error("Failed to get status");
      return await f.json();
    } catch {
      return null;
    }
  }
  async function y() {
    if (t.value || (t.value = await c()), !t.value)
      throw new Error("Control port not available");
    if (!(await Dt(
      `http://127.0.0.1:${t.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function g() {
    if (t.value || (t.value = await c()), !t.value)
      throw new Error("Control port not available");
    if (!(await Dt(
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
    restart: y,
    kill: g
  };
}
const gl = { class: "base-modal-header" }, pl = {
  key: 0,
  class: "base-modal-title"
}, hl = { class: "base-modal-body" }, yl = {
  key: 0,
  class: "base-modal-loading"
}, wl = {
  key: 1,
  class: "base-modal-error"
}, kl = {
  key: 0,
  class: "base-modal-footer"
}, bl = /* @__PURE__ */ ee({
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
    function y() {
      n.closeOnOverlayClick && i("close");
    }
    function g(f) {
      f.key === "Escape" && n.showCloseButton && i("close");
    }
    return Be(() => {
      document.addEventListener("keydown", g), document.body.style.overflow = "hidden";
    }), zs(() => {
      document.removeEventListener("keydown", g), document.body.style.overflow = "";
    }), (f, v) => (s(), E(Ve, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: y
      }, [
        e("div", {
          class: re(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: v[1] || (v[1] = Pe(() => {
          }, ["stop"]))
        }, [
          e("div", gl, [
            Se(f.$slots, "header", {}, () => [
              t.title ? (s(), o("h3", pl, a(t.title), 1)) : d("", !0)
            ], !0),
            t.showCloseButton ? (s(), o("button", {
              key: 0,
              class: "base-modal-close",
              onClick: v[0] || (v[0] = (r) => f.$emit("close"))
            }, [...v[2] || (v[2] = [
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
          e("div", hl, [
            t.loading ? (s(), o("div", yl, "Loading...")) : t.error ? (s(), o("div", wl, a(t.error), 1)) : Se(f.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          f.$slots.footer ? (s(), o("div", kl, [
            Se(f.$slots, "footer", {}, void 0, !0)
          ])) : d("", !0)
        ], 2)
      ])
    ]));
  }
}), Ye = /* @__PURE__ */ te(bl, [["__scopeId", "data-v-8dab1081"]]), _l = ["type", "disabled"], $l = {
  key: 0,
  class: "spinner"
}, Cl = /* @__PURE__ */ ee({
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
      class: re(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: n[0] || (n[0] = (i) => c.$emit("click", i))
    }, [
      t.loading ? (s(), o("span", $l)) : d("", !0),
      Se(c.$slots, "default", {}, void 0, !0)
    ], 10, _l));
  }
}), me = /* @__PURE__ */ te(Cl, [["__scopeId", "data-v-f3452606"]]), xl = {
  key: 0,
  class: "base-title-count"
}, Sl = /* @__PURE__ */ ee({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (c, n) => (s(), E(us(`h${t.level}`), {
      class: re(["base-title", t.variant])
    }, {
      default: l(() => [
        Se(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", xl, "(" + a(t.count) + ")", 1)) : d("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ft = /* @__PURE__ */ te(Sl, [["__scopeId", "data-v-5a01561d"]]), Il = ["value", "disabled"], El = {
  key: 0,
  value: "",
  disabled: ""
}, Ml = ["value"], Tl = {
  key: 0,
  class: "base-select-error"
}, Rl = /* @__PURE__ */ ee({
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
    return (i, y) => (s(), o("div", {
      class: re(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: re(["base-select", { error: !!t.error }]),
        onChange: y[0] || (y[0] = (g) => i.$emit("update:modelValue", g.target.value))
      }, [
        t.placeholder ? (s(), o("option", El, a(t.placeholder), 1)) : d("", !0),
        (s(!0), o(A, null, Z(t.options, (g) => (s(), o("option", {
          key: c(g),
          value: c(g)
        }, a(n(g)), 9, Ml))), 128))
      ], 42, Il),
      t.error ? (s(), o("span", Tl, a(t.error), 1)) : d("", !0)
    ], 2));
  }
}), zl = /* @__PURE__ */ te(Rl, [["__scopeId", "data-v-7436d745"]]), Ll = { class: "popover-header" }, Pl = { class: "popover-title" }, Dl = { class: "popover-content" }, Nl = {
  key: 0,
  class: "popover-actions"
}, Ul = /* @__PURE__ */ ee({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (c, n) => (s(), E(Ve, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "popover-overlay",
        onClick: n[2] || (n[2] = (i) => c.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: pt({ maxWidth: t.maxWidth }),
          onClick: n[1] || (n[1] = Pe(() => {
          }, ["stop"]))
        }, [
          e("div", Ll, [
            e("h4", Pl, a(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: n[0] || (n[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", Dl, [
            Se(c.$slots, "content", {}, void 0, !0)
          ]),
          c.$slots.actions ? (s(), o("div", Nl, [
            Se(c.$slots, "actions", {}, void 0, !0)
          ])) : d("", !0)
        ], 4)
      ])) : d("", !0)
    ]));
  }
}), ct = /* @__PURE__ */ te(Ul, [["__scopeId", "data-v-42815ace"]]), Ol = { class: "detail-section" }, Bl = {
  key: 0,
  class: "empty-message"
}, Fl = { class: "model-header" }, Al = { class: "model-name" }, Vl = { class: "model-details" }, Wl = { class: "model-row" }, jl = { class: "model-row" }, Gl = { class: "label" }, ql = {
  key: 0,
  class: "model-row model-row-nodes"
}, Hl = { class: "node-list" }, Kl = ["onClick"], Jl = {
  key: 1,
  class: "model-row"
}, Yl = { class: "value" }, Xl = {
  key: 2,
  class: "model-row"
}, Ql = { class: "value error" }, Zl = {
  key: 0,
  class: "model-actions"
}, ei = { class: "detail-section" }, ti = {
  key: 0,
  class: "empty-message"
}, si = { class: "node-name" }, oi = {
  key: 0,
  class: "node-version"
}, ni = /* @__PURE__ */ ee({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(t, { emit: c }) {
    const n = t, i = c, { getWorkflowDetails: y, setModelImportance: g, openFileLocation: f } = Ae(), v = C(null), r = C(!1), u = C(null), p = C(!1), w = C({}), b = C(!1), $ = C(/* @__PURE__ */ new Set()), T = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function O(D) {
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
    function m(D) {
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
    function _(D) {
      if (!D.loaded_by || D.loaded_by.length === 0) return [];
      const M = D.hash || D.filename;
      return $.value.has(M) ? D.loaded_by : D.loaded_by.slice(0, 3);
    }
    function z(D) {
      return $.value.has(D);
    }
    function S(D) {
      $.value.has(D) ? $.value.delete(D) : $.value.add(D), $.value = new Set($.value);
    }
    async function x() {
      r.value = !0, u.value = null;
      try {
        v.value = await y(n.workflowName);
      } catch (D) {
        u.value = D instanceof Error ? D.message : "Failed to load workflow details";
      } finally {
        r.value = !1;
      }
    }
    function H(D, M) {
      w.value[D] = M, p.value = !0;
    }
    async function V(D) {
      try {
        await f(D);
      } catch (M) {
        u.value = M instanceof Error ? M.message : "Failed to open file location";
      }
    }
    async function q() {
      if (!p.value) {
        i("close");
        return;
      }
      r.value = !0, u.value = null;
      try {
        for (const [D, M] of Object.entries(w.value))
          await g(n.workflowName, D, M);
        i("refresh"), i("close");
      } catch (D) {
        u.value = D instanceof Error ? D.message : "Failed to save changes";
      } finally {
        r.value = !1;
      }
    }
    return Be(x), (D, M) => (s(), o(A, null, [
      k(Ye, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: r.value,
        error: u.value || void 0,
        onClose: M[4] || (M[4] = (U) => i("close"))
      }, {
        body: l(() => [
          v.value ? (s(), o(A, { key: 0 }, [
            e("section", Ol, [
              k(Ft, { variant: "section" }, {
                default: l(() => [
                  h("MODELS USED (" + a(v.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              v.value.models.length === 0 ? (s(), o("div", Bl, " No models used in this workflow ")) : d("", !0),
              (s(!0), o(A, null, Z(v.value.models, (U) => {
                var ne;
                return s(), o("div", {
                  key: U.hash || U.filename,
                  class: "model-card"
                }, [
                  e("div", Fl, [
                    M[6] || (M[6] = e("span", { class: "model-icon" }, "📦", -1)),
                    e("span", Al, a(U.filename), 1)
                  ]),
                  e("div", Vl, [
                    e("div", Wl, [
                      M[7] || (M[7] = e("span", { class: "label" }, "Status:", -1)),
                      e("span", {
                        class: re(["value", O(U.status)])
                      }, a(m(U.status)), 3)
                    ]),
                    e("div", jl, [
                      e("span", Gl, [
                        M[8] || (M[8] = h(" Importance: ", -1)),
                        k(Ls, {
                          size: 14,
                          title: "About importance levels",
                          onClick: M[0] || (M[0] = (oe) => b.value = !0)
                        })
                      ]),
                      k(zl, {
                        "model-value": w.value[U.filename] || U.importance,
                        options: T,
                        "onUpdate:modelValue": (oe) => H(U.filename, oe)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    U.loaded_by && U.loaded_by.length > 0 ? (s(), o("div", ql, [
                      M[9] || (M[9] = e("span", { class: "label" }, "Loaded by:", -1)),
                      e("div", Hl, [
                        (s(!0), o(A, null, Z(_(U), (oe, j) => (s(), o("div", {
                          key: `${oe.node_id}-${j}`,
                          class: "node-reference"
                        }, a(oe.node_type) + " (Node #" + a(oe.node_id) + ") ", 1))), 128)),
                        U.loaded_by.length > 3 ? (s(), o("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (oe) => S(U.hash || U.filename)
                        }, a(z(U.hash || U.filename) ? "▼ Show less" : `▶ View all (${U.loaded_by.length})`), 9, Kl)) : d("", !0)
                      ])
                    ])) : d("", !0),
                    U.size_mb ? (s(), o("div", Jl, [
                      M[10] || (M[10] = e("span", { class: "label" }, "Size:", -1)),
                      e("span", Yl, a(U.size_mb) + " MB", 1)
                    ])) : d("", !0),
                    U.has_category_mismatch ? (s(), o("div", Xl, [
                      M[13] || (M[13] = e("span", { class: "label" }, "Location issue:", -1)),
                      e("span", Ql, [
                        M[11] || (M[11] = h(" In ", -1)),
                        e("code", null, a(U.actual_category) + "/", 1),
                        M[12] || (M[12] = h(" but loader needs ", -1)),
                        e("code", null, a((ne = U.expected_categories) == null ? void 0 : ne[0]) + "/", 1)
                      ])
                    ])) : d("", !0)
                  ]),
                  U.status !== "available" ? (s(), o("div", Zl, [
                    U.status === "downloadable" ? (s(), E(me, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: M[1] || (M[1] = (oe) => i("resolve"))
                    }, {
                      default: l(() => [...M[14] || (M[14] = [
                        h(" Download ", -1)
                      ])]),
                      _: 1
                    })) : U.status === "category_mismatch" && U.file_path ? (s(), E(me, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (oe) => V(U.file_path)
                    }, {
                      default: l(() => [...M[15] || (M[15] = [
                        h(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : U.status !== "path_mismatch" ? (s(), E(me, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: M[2] || (M[2] = (oe) => i("resolve"))
                    }, {
                      default: l(() => [...M[16] || (M[16] = [
                        h(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : d("", !0)
                  ])) : d("", !0)
                ]);
              }), 128))
            ]),
            e("section", ei, [
              k(Ft, { variant: "section" }, {
                default: l(() => [
                  h("NODES USED (" + a(v.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              v.value.nodes.length === 0 ? (s(), o("div", ti, " No custom nodes used in this workflow ")) : d("", !0),
              (s(!0), o(A, null, Z(v.value.nodes, (U) => (s(), o("div", {
                key: U.name,
                class: "node-item"
              }, [
                e("span", {
                  class: re(["node-status", U.status === "installed" ? "installed" : "missing"])
                }, a(U.status === "installed" ? "✓" : "✕"), 3),
                e("span", si, a(U.name), 1),
                U.version ? (s(), o("span", oi, "v" + a(U.version), 1)) : d("", !0)
              ]))), 128))
            ])
          ], 64)) : d("", !0)
        ]),
        footer: l(() => [
          k(me, {
            variant: "secondary",
            onClick: M[3] || (M[3] = (U) => i("close"))
          }, {
            default: l(() => [...M[17] || (M[17] = [
              h(" Close ", -1)
            ])]),
            _: 1
          }),
          p.value ? (s(), E(me, {
            key: 0,
            variant: "primary",
            onClick: q
          }, {
            default: l(() => [...M[18] || (M[18] = [
              h(" Save Changes ", -1)
            ])]),
            _: 1
          })) : d("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      k(ct, {
        show: b.value,
        title: "Model Importance Levels",
        onClose: M[5] || (M[5] = (U) => b.value = !1)
      }, {
        content: l(() => [...M[19] || (M[19] = [
          e("ul", { class: "importance-info-list" }, [
            e("li", null, [
              e("strong", null, "Required"),
              h(" — Must have for workflow to run")
            ]),
            e("li", null, [
              e("strong", null, "Flexible"),
              h(" — Workflow adapts if missing")
            ]),
            e("li", null, [
              e("strong", null, "Optional"),
              h(" — Nice to have, can be skipped")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), ai = /* @__PURE__ */ te(ni, [["__scopeId", "data-v-668728e6"]]), Me = os({
  items: [],
  status: "idle"
});
let dt = null;
function Ns() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function ns(t) {
  return Me.items.find((c) => c.id === t);
}
async function Et() {
  if (Me.status === "downloading") return;
  const t = Me.items.find((c) => c.status === "queued");
  if (!t) {
    Me.status = "idle";
    return;
  }
  Me.status = "downloading", t.status = "downloading", t.progress = 0, t.downloaded = 0;
  try {
    await li(t), t.status = "completed", t.progress = 100;
  } catch (c) {
    t.status = "failed", t.error = c instanceof Error ? c.message : "Download failed", t.retries++;
  } finally {
    Me.status = "idle", Et();
  }
}
async function li(t) {
  return new Promise((c, n) => {
    dt && (dt.close(), dt = null);
    const i = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), y = new EventSource(`/v2/comfygit/models/download-stream?${i}`);
    dt = y;
    let g = Date.now(), f = 0, v = !1;
    y.onmessage = (r) => {
      try {
        const u = JSON.parse(r.data);
        switch (u.type) {
          case "progress":
            t.downloaded = u.downloaded || 0, t.size = u.total || t.size;
            const p = Date.now(), w = (p - g) / 1e3;
            if (w > 0.5) {
              const b = t.downloaded - f;
              if (t.speed = b / w, g = p, f = t.downloaded, t.speed > 0 && t.size > 0) {
                const $ = t.size - t.downloaded;
                t.eta = $ / t.speed;
              }
            }
            t.size > 0 && (t.progress = Math.round(t.downloaded / t.size * 100));
            break;
          case "complete":
            v = !0, y.close(), dt = null, c();
            break;
          case "error":
            v = !0, y.close(), dt = null, n(new Error(u.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, y.onerror = () => {
      y.close(), dt = null, v || n(new Error("Connection lost"));
    };
  });
}
async function ii() {
  try {
    const t = await fetch("/v2/comfygit/models/pending-downloads");
    if (!t.ok) return;
    const c = await t.json();
    if (!c.pending_downloads || c.pending_downloads.length === 0) return;
    for (const n of c.pending_downloads) {
      if (Me.items.some((y) => y.url === n.url && y.filename === n.filename))
        continue;
      const i = {
        id: Ns(),
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
      Me.items.push(i);
    }
    console.log(`[ComfyGit] Loaded ${c.pending_downloads.length} pending download(s)`);
  } catch (t) {
    console.warn("[ComfyGit] Failed to load pending downloads:", t);
  }
}
function jt() {
  function t(m) {
    for (const _ of m) {
      if (Me.items.some(
        (x) => x.url === _.url && x.targetPath === _.targetPath && ["queued", "downloading", "paused", "completed"].includes(x.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${_.filename}`);
        continue;
      }
      const S = {
        id: Ns(),
        workflow: _.workflow,
        filename: _.filename,
        url: _.url,
        targetPath: _.targetPath,
        size: _.size || 0,
        type: _.type || "model",
        status: "queued",
        progress: 0,
        downloaded: 0,
        speed: 0,
        eta: 0,
        retries: 0
      };
      Me.items.push(S);
    }
    Me.status === "idle" && Et();
  }
  async function c(m) {
    const _ = ns(m);
    if (_) {
      if (_.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(_.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        dt && (dt.close(), dt = null), _.status = "failed", _.error = "Cancelled by user", Me.status = "idle", Et();
      } else if (_.status === "queued") {
        const z = Me.items.findIndex((S) => S.id === m);
        z >= 0 && Me.items.splice(z, 1);
      }
    }
  }
  function n(m) {
    const _ = ns(m);
    !_ || _.status !== "failed" || (_.status = "queued", _.error = void 0, _.progress = 0, _.downloaded = 0, Me.status === "idle" && Et());
  }
  function i(m) {
    const _ = ns(m);
    !_ || _.status !== "paused" || (_.status = "queued", Me.status === "idle" && Et());
  }
  function y() {
    const m = Me.items.filter((_) => _.status === "paused");
    for (const _ of m)
      _.status = "queued";
    Me.status === "idle" && Et();
  }
  function g(m) {
    const _ = Me.items.findIndex((z) => z.id === m);
    _ >= 0 && ["completed", "failed", "paused"].includes(Me.items[_].status) && Me.items.splice(_, 1);
  }
  function f() {
    Me.items = Me.items.filter((m) => m.status !== "completed");
  }
  function v() {
    Me.items = Me.items.filter((m) => m.status !== "failed");
  }
  const r = L(
    () => Me.items.find((m) => m.status === "downloading")
  ), u = L(
    () => Me.items.filter((m) => m.status === "queued")
  ), p = L(
    () => Me.items.filter((m) => m.status === "completed")
  ), w = L(
    () => Me.items.filter((m) => m.status === "failed")
  ), b = L(
    () => Me.items.filter((m) => m.status === "paused")
  ), $ = L(() => Me.items.length > 0), T = L(
    () => Me.items.filter((m) => m.status === "queued" || m.status === "downloading").length
  ), O = L(
    () => Me.items.some((m) => m.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: lo(Me),
    // Computed
    currentDownload: r,
    queuedItems: u,
    completedItems: p,
    failedItems: w,
    pausedItems: b,
    hasItems: $,
    activeCount: T,
    hasPaused: O,
    // Actions
    addToQueue: t,
    cancelDownload: c,
    retryDownload: n,
    resumeDownload: i,
    resumeAllPaused: y,
    removeItem: g,
    clearCompleted: f,
    clearFailed: v,
    loadPendingDownloads: ii
  };
}
function Us() {
  const t = C(null), c = C(null), n = C([]), i = C([]), y = C(!1), g = C(null);
  async function f(z, S) {
    var H;
    if (!((H = window.app) != null && H.api))
      throw new Error("ComfyUI API not available");
    const x = await window.app.api.fetchApi(z, S);
    if (!x.ok) {
      const V = await x.json().catch(() => ({})), q = V.error || V.message || `Request failed: ${x.status}`;
      throw new Error(q);
    }
    return x.json();
  }
  async function v(z) {
    y.value = !0, g.value = null;
    try {
      let S;
      return Pt() || (S = await f(
        `/v2/comfygit/workflow/${z}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), t.value = S, S;
    } catch (S) {
      const x = S instanceof Error ? S.message : "Unknown error occurred";
      throw g.value = x, S;
    } finally {
      y.value = !1;
    }
  }
  async function r(z, S, x, H) {
    y.value = !0, g.value = null;
    try {
      let V;
      if (!Pt()) {
        const q = Object.fromEntries(S), D = Object.fromEntries(x), M = H ? Array.from(H) : [];
        V = await f(
          `/v2/comfygit/workflow/${z}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: q,
              model_choices: D,
              skipped_packages: M
            })
          }
        );
      }
      return c.value = V, V;
    } catch (V) {
      const q = V instanceof Error ? V.message : "Unknown error occurred";
      throw g.value = q, V;
    } finally {
      y.value = !1;
    }
  }
  async function u(z, S = 10) {
    y.value = !0, g.value = null;
    try {
      let x;
      return Pt() || (x = await f(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: z, limit: S })
        }
      )), n.value = x.results, x.results;
    } catch (x) {
      const H = x instanceof Error ? x.message : "Unknown error occurred";
      throw g.value = H, x;
    } finally {
      y.value = !1;
    }
  }
  async function p(z, S = 10) {
    y.value = !0, g.value = null;
    try {
      let x;
      return Pt() || (x = await f(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: z, limit: S })
        }
      )), i.value = x.results, x.results;
    } catch (x) {
      const H = x instanceof Error ? x.message : "Unknown error occurred";
      throw g.value = H, x;
    } finally {
      y.value = !1;
    }
  }
  const w = os({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function b() {
    w.phase = "idle", w.currentFile = void 0, w.currentFileIndex = void 0, w.totalFiles = void 0, w.bytesDownloaded = void 0, w.bytesTotal = void 0, w.completedFiles = [], w.nodesToInstall = [], w.nodesInstalled = [], w.installError = void 0, w.needsRestart = void 0, w.error = void 0, w.nodeInstallProgress = void 0;
  }
  async function $(z) {
    w.phase = "installing", w.nodesInstalled = [], w.installError = void 0, w.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return Pt(), await T(z);
    } catch (S) {
      const x = S instanceof Error ? S.message : "Failed to install nodes";
      throw w.installError = x, S;
    }
  }
  async function T(z) {
    var x;
    const S = await f(
      `/v2/comfygit/workflow/${z}/install`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          packages: w.nodesToInstall
        })
      }
    );
    if (w.nodeInstallProgress) {
      w.nodeInstallProgress.totalNodes = w.nodesToInstall.length;
      const H = new Map(((x = S.failed) == null ? void 0 : x.map((V) => [V.node_id, V.error])) || []);
      for (let V = 0; V < w.nodesToInstall.length; V++) {
        const q = w.nodesToInstall[V], D = H.get(q);
        w.nodeInstallProgress.completedNodes.push({
          node_id: q,
          success: !D,
          error: D
        });
      }
    }
    return w.nodesInstalled = S.nodes_installed, w.needsRestart = S.nodes_installed.length > 0, S.failed && S.failed.length > 0 && (w.installError = `${S.failed.length} package(s) failed to install`), S;
  }
  async function O(z, S, x) {
    b(), w.phase = "resolving", g.value = null;
    const H = Object.fromEntries(S), V = Object.fromEntries(x);
    try {
      const q = await fetch(`/v2/comfygit/workflow/${z}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: H,
          model_choices: V
        })
      });
      if (!q.ok)
        throw new Error(`Request failed: ${q.status}`);
      if (!q.body)
        throw new Error("No response body");
      const D = q.body.getReader(), M = new TextDecoder();
      let U = "";
      for (; ; ) {
        const { done: ne, value: oe } = await D.read();
        if (ne) break;
        U += M.decode(oe, { stream: !0 });
        const j = U.split(`

`);
        U = j.pop() || "";
        for (const ae of j) {
          if (!ae.trim()) continue;
          const K = ae.split(`
`);
          let N = "", P = "";
          for (const I of K)
            I.startsWith("event: ") ? N = I.slice(7) : I.startsWith("data: ") && (P = I.slice(6));
          if (P)
            try {
              const I = JSON.parse(P);
              m(N, I);
            } catch (I) {
              console.warn("Failed to parse SSE event:", I);
            }
        }
      }
    } catch (q) {
      const D = q instanceof Error ? q.message : "Unknown error occurred";
      throw g.value = D, w.error = D, w.phase = "error", q;
    }
  }
  function m(z, S) {
    switch (z) {
      case "batch_start":
        w.phase = "downloading", w.totalFiles = S.total;
        break;
      case "file_start":
        w.currentFile = S.filename, w.currentFileIndex = S.index, w.bytesDownloaded = 0, w.bytesTotal = void 0;
        break;
      case "file_progress":
        w.bytesDownloaded = S.downloaded, w.bytesTotal = S.total;
        break;
      case "file_complete":
        w.completedFiles.push({
          filename: S.filename,
          success: S.success,
          error: S.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        w.nodesToInstall = S.nodes_to_install || [], S.download_results && (w.completedFiles = S.download_results), w.phase = "complete";
        break;
      case "error":
        w.error = S.message, w.phase = "error", g.value = S.message;
        break;
    }
  }
  function _(z, S) {
    const { addToQueue: x } = jt(), H = S.filter((V) => V.url && V.target_path).map((V) => ({
      workflow: z,
      filename: V.filename,
      url: V.url,
      targetPath: V.target_path,
      size: V.size || 0,
      type: "model"
    }));
    return H.length > 0 && x(H), H.length;
  }
  return {
    // State
    result: t,
    appliedResult: c,
    searchResults: n,
    modelSearchResults: i,
    isLoading: y,
    error: g,
    progress: w,
    // Methods
    analyzeWorkflow: v,
    applyResolution: r,
    applyResolutionWithProgress: O,
    installNodes: $,
    searchNodes: u,
    searchModels: p,
    resetProgress: b,
    queueModelDownloads: _
  };
}
const ri = { class: "resolution-stepper" }, di = { class: "stepper-header" }, ci = ["onClick"], ui = {
  key: 0,
  class: "step-icon"
}, mi = {
  key: 1,
  class: "step-number"
}, vi = { class: "step-label" }, fi = {
  key: 0,
  class: "step-connector"
}, gi = { class: "stepper-content" }, pi = /* @__PURE__ */ ee({
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
    function y(u) {
      var p;
      if ((p = n.stepStats) != null && p[u]) {
        const w = n.stepStats[u];
        return w.total > 0 && w.resolved === w.total;
      }
      return n.completedSteps.includes(u);
    }
    function g(u) {
      var p;
      if ((p = n.stepStats) != null && p[u]) {
        const w = n.stepStats[u];
        return w.resolved > 0 && w.resolved < w.total;
      }
      return !1;
    }
    function f(u) {
      return y(u) ? "state-complete" : g(u) ? "state-partial" : "state-pending";
    }
    function v(u) {
      return !1;
    }
    function r(u) {
      i("step-change", u);
    }
    return (u, p) => (s(), o("div", ri, [
      e("div", di, [
        (s(!0), o(A, null, Z(t.steps, (w, b) => (s(), o("div", {
          key: w.id,
          class: re(["step", {
            active: t.currentStep === w.id,
            completed: y(w.id),
            "in-progress": g(w.id),
            disabled: v(w.id)
          }]),
          onClick: ($) => r(w.id)
        }, [
          e("div", {
            class: re(["step-indicator", f(w.id)])
          }, [
            y(w.id) ? (s(), o("span", ui, "✓")) : (s(), o("span", mi, a(b + 1), 1))
          ], 2),
          e("div", vi, a(w.label), 1),
          b < t.steps.length - 1 ? (s(), o("div", fi)) : d("", !0)
        ], 10, ci))), 128))
      ]),
      e("div", gi, [
        Se(u.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), hi = /* @__PURE__ */ te(pi, [["__scopeId", "data-v-2a7b3af8"]]), yi = /* @__PURE__ */ ee({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const c = t, n = L(() => c.confidence >= 0.9 ? "high" : c.confidence >= 0.7 ? "medium" : "low"), i = L(() => `confidence-${n.value}`), y = L(() => c.showPercentage ? `${Math.round(c.confidence * 100)}%` : n.value.charAt(0).toUpperCase() + n.value.slice(1));
    return (g, f) => (s(), o("span", {
      class: re(["confidence-badge", i.value, t.size])
    }, a(y.value), 3));
  }
}), ts = /* @__PURE__ */ te(yi, [["__scopeId", "data-v-17ec4b80"]]), wi = { class: "node-info" }, ki = { class: "node-info-text" }, bi = { class: "item-body" }, _i = {
  key: 0,
  class: "resolved-state"
}, $i = {
  key: 1,
  class: "multiple-options"
}, Ci = { class: "options-list" }, xi = ["onClick"], Si = ["name", "value", "checked", "onChange"], Ii = { class: "option-content" }, Ei = { class: "option-header" }, Mi = { class: "option-package-id" }, Ti = {
  key: 0,
  class: "option-title"
}, Ri = { class: "option-meta" }, zi = {
  key: 0,
  class: "installed-badge"
}, Li = { class: "action-buttons" }, Pi = {
  key: 2,
  class: "unresolved"
}, Di = {
  key: 0,
  class: "searching-state"
}, Ni = { class: "options-list" }, Ui = ["onClick"], Oi = ["name", "value"], Bi = { class: "option-content" }, Fi = { class: "option-header" }, Ai = { class: "option-package-id" }, Vi = {
  key: 0,
  class: "option-description"
}, Wi = { class: "option-meta" }, ji = {
  key: 0,
  class: "installed-badge"
}, Gi = {
  key: 2,
  class: "unresolved-message"
}, qi = { class: "action-buttons" }, Hi = /* @__PURE__ */ ee({
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
    function y(r, u = 80) {
      return r.length <= u ? r : r.slice(0, u - 3) + "...";
    }
    const g = L(() => !!n.choice);
    L(() => {
      var r;
      return (r = n.choice) == null ? void 0 : r.action;
    }), L(() => {
      var r;
      return (r = n.choice) == null ? void 0 : r.package_id;
    });
    const f = L(() => {
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
    function v(r) {
      i("option-selected", r);
    }
    return (r, u) => (s(), o("div", {
      class: re(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: g.value }])
    }, [
      e("div", wi, [
        e("span", ki, [
          u[7] || (u[7] = h("Node type: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: re(["status-badge", f.value])
        }, a(t.statusLabel), 3)) : d("", !0)
      ]),
      e("div", bi, [
        g.value ? (s(), o("div", _i, [
          k(me, {
            variant: "ghost",
            size: "sm",
            onClick: u[0] || (u[0] = (p) => i("clear-choice"))
          }, {
            default: l(() => [...u[8] || (u[8] = [
              h(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", $i, [
          u[12] || (u[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", Ci, [
            (s(!0), o(A, null, Z(t.options, (p, w) => (s(), o("label", {
              key: p.package_id,
              class: re(["option-card", { selected: t.selectedOptionIndex === w }]),
              onClick: (b) => v(w)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: w,
                checked: t.selectedOptionIndex === w,
                onChange: (b) => v(w)
              }, null, 40, Si),
              e("div", Ii, [
                e("div", Ei, [
                  e("span", Mi, a(p.package_id), 1),
                  k(ts, {
                    confidence: p.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                p.title && p.title !== p.package_id ? (s(), o("div", Ti, a(p.title), 1)) : d("", !0),
                e("div", Ri, [
                  p.is_installed ? (s(), o("span", zi, "Already Installed")) : d("", !0)
                ])
              ])
            ], 10, xi))), 128))
          ]),
          e("div", Li, [
            k(me, {
              variant: "secondary",
              size: "sm",
              onClick: u[1] || (u[1] = (p) => i("search"))
            }, {
              default: l(() => [...u[9] || (u[9] = [
                h(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            k(me, {
              variant: "secondary",
              size: "sm",
              onClick: u[2] || (u[2] = (p) => i("manual-entry"))
            }, {
              default: l(() => [...u[10] || (u[10] = [
                h(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            k(me, {
              variant: "secondary",
              size: "sm",
              onClick: u[3] || (u[3] = (p) => i("mark-optional"))
            }, {
              default: l(() => [...u[11] || (u[11] = [
                h(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", Pi, [
          t.isSearching ? (s(), o("div", Di, [...u[13] || (u[13] = [
            e("span", { class: "searching-spinner" }, null, -1),
            e("span", null, "Searching registry...", -1)
          ])])) : t.searchResults && t.searchResults.length > 0 ? (s(), o(A, { key: 1 }, [
            u[14] || (u[14] = e("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            e("div", Ni, [
              (s(!0), o(A, null, Z(t.searchResults.slice(0, 5), (p, w) => (s(), o("label", {
                key: p.package_id,
                class: "option-card",
                onClick: (b) => i("search-result-selected", p)
              }, [
                e("input", {
                  type: "radio",
                  name: `search-result-${t.nodeType}`,
                  value: w
                }, null, 8, Oi),
                e("div", Bi, [
                  e("div", Fi, [
                    e("span", Ai, a(p.package_id), 1),
                    k(ts, {
                      confidence: p.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  p.description ? (s(), o("div", Vi, a(y(p.description)), 1)) : d("", !0),
                  e("div", Wi, [
                    p.is_installed ? (s(), o("span", ji, "Already Installed")) : d("", !0)
                  ])
                ])
              ], 8, Ui))), 128))
            ])
          ], 64)) : (s(), o("div", Gi, [...u[15] || (u[15] = [
            e("span", { class: "warning-icon" }, "⚠", -1),
            e("span", null, "No matching package found in registry", -1)
          ])])),
          e("div", qi, [
            k(me, {
              variant: "secondary",
              size: "sm",
              onClick: u[4] || (u[4] = (p) => i("search"))
            }, {
              default: l(() => {
                var p;
                return [
                  h(a((p = t.searchResults) != null && p.length ? "Refine Search" : "Search Registry"), 1)
                ];
              }),
              _: 1
            }),
            k(me, {
              variant: "secondary",
              size: "sm",
              onClick: u[5] || (u[5] = (p) => i("manual-entry"))
            }, {
              default: l(() => [...u[16] || (u[16] = [
                h(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            k(me, {
              variant: "secondary",
              size: "sm",
              onClick: u[6] || (u[6] = (p) => i("mark-optional"))
            }, {
              default: l(() => [...u[17] || (u[17] = [
                h(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Ki = /* @__PURE__ */ te(Hi, [["__scopeId", "data-v-c2997d1d"]]), Ji = { class: "item-navigator" }, Yi = { class: "nav-item-info" }, Xi = ["title"], Qi = { class: "nav-controls" }, Zi = { class: "nav-arrows" }, er = ["disabled"], tr = ["disabled"], sr = { class: "nav-position" }, or = /* @__PURE__ */ ee({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: c }) {
    const n = c;
    return (i, y) => (s(), o("div", Ji, [
      e("div", Yi, [
        e("code", {
          class: "item-name",
          title: t.itemName
        }, a(t.itemName), 9, Xi)
      ]),
      e("div", Qi, [
        e("div", Zi, [
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === 0,
            onClick: y[0] || (y[0] = (g) => n("prev")),
            title: "Previous item"
          }, " ← ", 8, er),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: y[1] || (y[1] = (g) => n("next")),
            title: "Next item"
          }, " → ", 8, tr)
        ]),
        e("span", sr, a(t.currentIndex + 1) + "/" + a(t.totalItems), 1)
      ])
    ]));
  }
}), Os = /* @__PURE__ */ te(or, [["__scopeId", "data-v-74af7920"]]), nr = ["type", "value", "placeholder", "disabled"], ar = {
  key: 0,
  class: "base-input-error"
}, lr = /* @__PURE__ */ ee({
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
      class: re(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: re(["base-input", { error: !!t.error }]),
        onInput: n[0] || (n[0] = (i) => c.$emit("update:modelValue", i.target.value)),
        onKeyup: [
          n[1] || (n[1] = gt((i) => c.$emit("enter"), ["enter"])),
          n[2] || (n[2] = gt((i) => c.$emit("escape"), ["escape"]))
        ]
      }, null, 42, nr),
      t.error ? (s(), o("span", ar, a(t.error), 1)) : d("", !0)
    ], 2));
  }
}), nt = /* @__PURE__ */ te(lr, [["__scopeId", "data-v-9ba02cdc"]]), ir = { class: "node-resolution-step" }, rr = {
  key: 0,
  class: "auto-resolved-section"
}, dr = { class: "section-header" }, cr = { class: "stat-badge" }, ur = { class: "resolved-packages-list" }, mr = { class: "package-info" }, vr = { class: "package-id" }, fr = { class: "node-count" }, gr = { class: "package-actions" }, pr = {
  key: 0,
  class: "status-badge install"
}, hr = {
  key: 1,
  class: "status-badge skip"
}, yr = ["onClick"], wr = {
  key: 1,
  class: "section-divider"
}, kr = { class: "step-header" }, br = { class: "stat-badge" }, _r = {
  key: 1,
  class: "step-body"
}, $r = {
  key: 3,
  class: "empty-state"
}, Cr = { class: "node-modal-body" }, xr = { class: "node-search-results-container" }, Sr = {
  key: 0,
  class: "node-search-results"
}, Ir = ["onClick"], Er = { class: "node-result-header" }, Mr = { class: "node-result-package-id" }, Tr = {
  key: 0,
  class: "node-result-description"
}, Rr = {
  key: 1,
  class: "node-empty-state"
}, zr = {
  key: 2,
  class: "node-empty-state"
}, Lr = {
  key: 3,
  class: "node-empty-state"
}, Pr = { class: "node-manual-entry-modal" }, Dr = { class: "node-modal-body" }, Nr = { class: "node-modal-actions" }, Ur = /* @__PURE__ */ ee({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(t, { emit: c }) {
    const n = t, i = c, { searchNodes: y } = Us(), g = C(0), f = C(!1), v = C(!1), r = C(""), u = C(""), p = C([]), w = C(!1), b = C(/* @__PURE__ */ new Map()), $ = C(/* @__PURE__ */ new Set()), T = C(!1);
    function O() {
      T.value && P(), T.value = !1;
    }
    const m = L(() => n.nodes[g.value]), _ = L(() => n.nodes.filter((ce) => n.nodeChoices.has(ce.node_type)).length), z = L(() => m.value ? b.value.get(m.value.node_type) || [] : []), S = L(() => m.value ? $.value.has(m.value.node_type) : !1);
    bt(m, async (ce) => {
      var ve;
      ce && ((ve = ce.options) != null && ve.length || b.value.has(ce.node_type) || $.value.has(ce.node_type) || n.nodeChoices.has(ce.node_type) || await x(ce.node_type));
    }, { immediate: !0 });
    async function x(ce) {
      $.value.add(ce);
      try {
        const ve = await y(ce, 5);
        b.value.set(ce, ve);
      } catch {
        b.value.set(ce, []);
      } finally {
        $.value.delete(ce);
      }
    }
    const H = L(() => n.autoResolvedPackages.filter((ce) => !n.skippedPackages.has(ce.package_id)).length);
    function V(ce) {
      return n.skippedPackages.has(ce);
    }
    function q(ce) {
      i("package-skip", ce);
    }
    const D = L(() => {
      var ve;
      if (!m.value) return "not-found";
      const ce = n.nodeChoices.get(m.value.node_type);
      if (ce)
        switch (ce.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (ve = m.value.options) != null && ve.length ? "ambiguous" : "not-found";
    }), M = L(() => {
      var ve;
      if (!m.value) return;
      const ce = n.nodeChoices.get(m.value.node_type);
      if (ce)
        switch (ce.action) {
          case "install":
            return ce.package_id ? `→ ${ce.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (ve = m.value.options) != null && ve.length ? `${m.value.options.length} matches` : "Not Found";
    });
    function U(ce) {
      ce >= 0 && ce < n.nodes.length && (g.value = ce);
    }
    function ne() {
      m.value && i("mark-optional", m.value.node_type);
    }
    function oe() {
      m.value && i("skip", m.value.node_type);
    }
    function j(ce) {
      m.value && i("option-selected", m.value.node_type, ce);
    }
    function ae() {
      m.value && i("clear-choice", m.value.node_type);
    }
    function K() {
      m.value && (r.value = m.value.node_type, p.value = z.value, f.value = !0, Te(r.value));
    }
    function N() {
      u.value = "", v.value = !0;
    }
    function P() {
      f.value = !1, r.value = "", p.value = [];
    }
    function I() {
      v.value = !1, u.value = "";
    }
    let ie = null;
    function Y() {
      ie && clearTimeout(ie), ie = setTimeout(() => {
        Te(r.value);
      }, 300);
    }
    async function Te(ce) {
      if (!ce.trim()) {
        p.value = [];
        return;
      }
      w.value = !0;
      try {
        p.value = await y(ce, 10);
      } catch {
        p.value = [];
      } finally {
        w.value = !1;
      }
    }
    function _e(ce) {
      m.value && (i("manual-entry", m.value.node_type, ce.package_id), P());
    }
    function de(ce) {
      m.value && i("manual-entry", m.value.node_type, ce.package_id);
    }
    function le() {
      !m.value || !u.value.trim() || (i("manual-entry", m.value.node_type, u.value.trim()), I());
    }
    return (ce, ve) => {
      var Le, he;
      return s(), o("div", ir, [
        t.autoResolvedPackages.length > 0 ? (s(), o("div", rr, [
          e("div", dr, [
            ve[6] || (ve[6] = e("div", { class: "section-info" }, [
              e("h4", { class: "section-title" }, "Packages to Install"),
              e("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            e("span", cr, a(H.value) + "/" + a(t.autoResolvedPackages.length) + " to install", 1)
          ]),
          e("div", ur, [
            (s(!0), o(A, null, Z(t.autoResolvedPackages, (Ce) => (s(), o("div", {
              key: Ce.package_id,
              class: "resolved-package-item"
            }, [
              e("div", mr, [
                e("code", vr, a(Ce.package_id), 1),
                e("span", fr, a(Ce.node_types_count) + " node type" + a(Ce.node_types_count > 1 ? "s" : ""), 1)
              ]),
              e("div", gr, [
                V(Ce.package_id) ? (s(), o("span", hr, " SKIPPED ")) : (s(), o("span", pr, " WILL INSTALL ")),
                e("button", {
                  class: "toggle-skip-btn",
                  onClick: (ge) => q(Ce.package_id)
                }, a(V(Ce.package_id) ? "Include" : "Skip"), 9, yr)
              ])
            ]))), 128))
          ])
        ])) : d("", !0),
        t.autoResolvedPackages.length > 0 && t.nodes.length > 0 ? (s(), o("div", wr)) : d("", !0),
        t.nodes.length > 0 ? (s(), o(A, { key: 2 }, [
          e("div", kr, [
            ve[7] || (ve[7] = e("div", { class: "step-info" }, [
              e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            e("span", br, a(_.value) + "/" + a(t.nodes.length) + " resolved", 1)
          ]),
          m.value ? (s(), E(Os, {
            key: 0,
            "item-name": m.value.node_type,
            "current-index": g.value,
            "total-items": t.nodes.length,
            onPrev: ve[0] || (ve[0] = (Ce) => U(g.value - 1)),
            onNext: ve[1] || (ve[1] = (Ce) => U(g.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : d("", !0),
          m.value ? (s(), o("div", _r, [
            k(Ki, {
              "node-type": m.value.node_type,
              "has-multiple-options": !!((Le = m.value.options) != null && Le.length),
              options: m.value.options,
              choice: (he = t.nodeChoices) == null ? void 0 : he.get(m.value.node_type),
              status: D.value,
              "status-label": M.value,
              "search-results": z.value,
              "is-searching": S.value,
              onMarkOptional: ne,
              onSkip: oe,
              onManualEntry: N,
              onSearch: K,
              onOptionSelected: j,
              onClearChoice: ae,
              onSearchResultSelected: de
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching"])
          ])) : d("", !0)
        ], 64)) : d("", !0),
        t.nodes.length === 0 && t.autoResolvedPackages.length === 0 ? (s(), o("div", $r, [...ve[8] || (ve[8] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])) : d("", !0),
        (s(), E(Ve, { to: "body" }, [
          f.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: ve[4] || (ve[4] = Pe((Ce) => T.value = !0, ["self"])),
            onMouseup: Pe(O, ["self"])
          }, [
            e("div", {
              class: "node-search-modal",
              onMousedown: ve[3] || (ve[3] = (Ce) => T.value = !1)
            }, [
              e("div", { class: "node-modal-header" }, [
                ve[9] || (ve[9] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: P
                }, "✕")
              ]),
              e("div", Cr, [
                k(nt, {
                  modelValue: r.value,
                  "onUpdate:modelValue": ve[2] || (ve[2] = (Ce) => r.value = Ce),
                  placeholder: "Search by node type, package name...",
                  onInput: Y
                }, null, 8, ["modelValue"]),
                e("div", xr, [
                  p.value.length > 0 ? (s(), o("div", Sr, [
                    (s(!0), o(A, null, Z(p.value, (Ce) => (s(), o("div", {
                      key: Ce.package_id,
                      class: "node-search-result-item",
                      onClick: (ge) => _e(Ce)
                    }, [
                      e("div", Er, [
                        e("code", Mr, a(Ce.package_id), 1),
                        Ce.match_confidence ? (s(), E(ts, {
                          key: 0,
                          confidence: Ce.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : d("", !0)
                      ]),
                      Ce.description ? (s(), o("div", Tr, a(Ce.description), 1)) : d("", !0)
                    ], 8, Ir))), 128))
                  ])) : w.value ? (s(), o("div", Rr, "Searching...")) : r.value ? (s(), o("div", zr, 'No packages found matching "' + a(r.value) + '"', 1)) : (s(), o("div", Lr, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : d("", !0)
        ])),
        (s(), E(Ve, { to: "body" }, [
          v.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: Pe(I, ["self"])
          }, [
            e("div", Pr, [
              e("div", { class: "node-modal-header" }, [
                ve[10] || (ve[10] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: I
                }, "✕")
              ]),
              e("div", Dr, [
                k(nt, {
                  modelValue: u.value,
                  "onUpdate:modelValue": ve[5] || (ve[5] = (Ce) => u.value = Ce),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", Nr, [
                  k(me, {
                    variant: "secondary",
                    onClick: I
                  }, {
                    default: l(() => [...ve[11] || (ve[11] = [
                      h("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  k(me, {
                    variant: "primary",
                    disabled: !u.value.trim(),
                    onClick: le
                  }, {
                    default: l(() => [...ve[12] || (ve[12] = [
                      h(" Add Package ", -1)
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
}), Or = /* @__PURE__ */ te(Ur, [["__scopeId", "data-v-281581bc"]]), Br = { class: "node-info" }, Fr = { class: "node-info-text" }, Ar = { class: "item-body" }, Vr = {
  key: 0,
  class: "resolved-state"
}, Wr = {
  key: 1,
  class: "multiple-options"
}, jr = { class: "options-list" }, Gr = ["onClick"], qr = ["name", "value", "checked", "onChange"], Hr = { class: "option-content" }, Kr = { class: "option-header" }, Jr = { class: "option-filename" }, Yr = { class: "option-meta" }, Xr = { class: "option-size" }, Qr = { class: "option-category" }, Zr = { class: "option-path" }, ed = { class: "action-buttons" }, td = {
  key: 2,
  class: "unresolved"
}, sd = { class: "action-buttons" }, od = /* @__PURE__ */ ee({
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
    const n = t, i = c, y = L(() => !!n.choice);
    L(() => {
      var r;
      return (r = n.choice) == null ? void 0 : r.action;
    }), L(() => {
      var r, u;
      return ((u = (r = n.choice) == null ? void 0 : r.selected_model) == null ? void 0 : u.filename) || "selected";
    });
    const g = L(() => {
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
    function f(r) {
      i("option-selected", r);
    }
    function v(r) {
      if (!r) return "Unknown";
      const u = r / (1024 * 1024 * 1024);
      return u >= 1 ? `${u.toFixed(2)} GB` : `${(r / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (r, u) => (s(), o("div", {
      class: re(["model-resolution-item", { resolved: y.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", Br, [
        e("span", Fr, [
          u[7] || (u[7] = h("Used by: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: re(["status-badge", g.value])
        }, a(t.statusLabel), 3)) : d("", !0)
      ]),
      e("div", Ar, [
        y.value ? (s(), o("div", Vr, [
          k(me, {
            variant: "ghost",
            size: "sm",
            onClick: u[0] || (u[0] = (p) => i("clear-choice"))
          }, {
            default: l(() => [...u[8] || (u[8] = [
              h(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", Wr, [
          u[12] || (u[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", jr, [
            (s(!0), o(A, null, Z(t.options, (p, w) => (s(), o("label", {
              key: p.model.hash,
              class: re(["option-card", { selected: t.selectedOptionIndex === w }]),
              onClick: (b) => f(w)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: w,
                checked: t.selectedOptionIndex === w,
                onChange: (b) => f(w)
              }, null, 40, qr),
              e("div", Hr, [
                e("div", Kr, [
                  e("span", Jr, a(p.model.filename), 1),
                  k(ts, {
                    confidence: p.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", Yr, [
                  e("span", Xr, a(v(p.model.size)), 1),
                  e("span", Qr, a(p.model.category), 1)
                ]),
                e("div", Zr, a(p.model.relative_path), 1)
              ])
            ], 10, Gr))), 128))
          ]),
          e("div", ed, [
            k(me, {
              variant: "ghost",
              size: "sm",
              onClick: u[1] || (u[1] = (p) => i("search"))
            }, {
              default: l(() => [...u[9] || (u[9] = [
                h(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            k(me, {
              variant: "ghost",
              size: "sm",
              onClick: u[2] || (u[2] = (p) => i("download-url"))
            }, {
              default: l(() => [...u[10] || (u[10] = [
                h(" Download URL ", -1)
              ])]),
              _: 1
            }),
            k(me, {
              variant: "secondary",
              size: "sm",
              onClick: u[3] || (u[3] = (p) => i("mark-optional"))
            }, {
              default: l(() => [...u[11] || (u[11] = [
                h(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", td, [
          u[16] || (u[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", sd, [
            k(me, {
              variant: "primary",
              size: "sm",
              onClick: u[4] || (u[4] = (p) => i("search"))
            }, {
              default: l(() => [...u[13] || (u[13] = [
                h(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            k(me, {
              variant: "secondary",
              size: "sm",
              onClick: u[5] || (u[5] = (p) => i("download-url"))
            }, {
              default: l(() => [...u[14] || (u[14] = [
                h(" Download URL ", -1)
              ])]),
              _: 1
            }),
            k(me, {
              variant: "secondary",
              size: "sm",
              onClick: u[6] || (u[6] = (p) => i("mark-optional"))
            }, {
              default: l(() => [...u[15] || (u[15] = [
                h(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), nd = /* @__PURE__ */ te(od, [["__scopeId", "data-v-8a82fefa"]]), ad = { class: "model-resolution-step" }, ld = { class: "step-header" }, id = { class: "step-info" }, rd = { class: "step-title" }, dd = { class: "step-description" }, cd = { class: "stat-badge" }, ud = {
  key: 1,
  class: "step-body"
}, md = {
  key: 2,
  class: "empty-state"
}, vd = { class: "model-search-modal" }, fd = { class: "model-modal-body" }, gd = {
  key: 0,
  class: "model-search-results"
}, pd = ["onClick"], hd = { class: "model-result-header" }, yd = { class: "model-result-filename" }, wd = { class: "model-result-meta" }, kd = { class: "model-result-category" }, bd = { class: "model-result-size" }, _d = {
  key: 0,
  class: "model-result-path"
}, $d = {
  key: 1,
  class: "model-no-results"
}, Cd = {
  key: 2,
  class: "model-searching"
}, xd = { class: "model-download-url-modal" }, Sd = { class: "model-modal-body" }, Id = { class: "model-input-group" }, Ed = { class: "model-input-group" }, Md = { class: "model-modal-actions" }, Td = /* @__PURE__ */ ee({
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
    function i(P) {
      var I;
      return P && ((I = n[P]) == null ? void 0 : I[0]) || null;
    }
    const y = t, g = c, f = C(0), v = C(!1), r = C(!1), u = C(""), p = C(""), w = C(""), b = C([]), $ = C(!1), T = L(() => y.models[f.value]), O = L(() => y.models.some((P) => P.is_download_intent)), m = L(() => y.models.filter(
      (P) => y.modelChoices.has(P.filename) || P.is_download_intent
    ).length), _ = L(() => {
      var I;
      if (!T.value) return "";
      const P = i((I = T.value.reference) == null ? void 0 : I.node_type);
      return P ? `${P}/${T.value.filename}` : "";
    }), z = L(() => {
      var I;
      if (!T.value) return "not-found";
      const P = y.modelChoices.get(T.value.filename);
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
      return T.value.is_download_intent ? "download" : (I = T.value.options) != null && I.length ? "ambiguous" : "not-found";
    }), S = L(() => {
      var I, ie;
      if (!T.value) return;
      const P = y.modelChoices.get(T.value.filename);
      if (P)
        switch (P.action) {
          case "select":
            return (I = P.selected_model) != null && I.filename ? `→ ${P.selected_model.filename}` : "Selected";
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
    function x(P) {
      P >= 0 && P < y.models.length && (f.value = P);
    }
    function H() {
      T.value && g("mark-optional", T.value.filename);
    }
    function V() {
      T.value && g("skip", T.value.filename);
    }
    function q(P) {
      T.value && g("option-selected", T.value.filename, P);
    }
    function D() {
      T.value && g("clear-choice", T.value.filename);
    }
    function M() {
      T.value && (u.value = T.value.filename, v.value = !0);
    }
    function U() {
      T.value && (p.value = T.value.download_source || "", w.value = T.value.target_path || _.value, r.value = !0);
    }
    function ne() {
      v.value = !1, u.value = "", b.value = [];
    }
    function oe() {
      r.value = !1, p.value = "", w.value = "";
    }
    function j() {
      $.value = !0, setTimeout(() => {
        $.value = !1;
      }, 300);
    }
    function ae(P) {
      T.value && ne();
    }
    function K() {
      !T.value || !p.value.trim() || (g("download-url", T.value.filename, p.value.trim(), w.value.trim() || void 0), oe());
    }
    function N(P) {
      if (!P) return "Unknown";
      const I = P / (1024 * 1024 * 1024);
      return I >= 1 ? `${I.toFixed(2)} GB` : `${(P / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (P, I) => {
      var ie, Y, Te;
      return s(), o("div", ad, [
        e("div", ld, [
          e("div", id, [
            e("h3", rd, a(O.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", dd, a(O.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", cd, a(m.value) + "/" + a(t.models.length) + " resolved", 1)
        ]),
        T.value ? (s(), E(Os, {
          key: 0,
          "item-name": T.value.filename,
          "current-index": f.value,
          "total-items": t.models.length,
          onPrev: I[0] || (I[0] = (_e) => x(f.value - 1)),
          onNext: I[1] || (I[1] = (_e) => x(f.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : d("", !0),
        T.value ? (s(), o("div", ud, [
          k(nd, {
            filename: T.value.filename,
            "node-type": ((ie = T.value.reference) == null ? void 0 : ie.node_type) || "Unknown",
            "has-multiple-options": !!((Y = T.value.options) != null && Y.length),
            options: T.value.options,
            choice: (Te = t.modelChoices) == null ? void 0 : Te.get(T.value.filename),
            status: z.value,
            "status-label": S.value,
            onMarkOptional: H,
            onSkip: V,
            onDownloadUrl: U,
            onSearch: M,
            onOptionSelected: q,
            onClearChoice: D
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (s(), o("div", md, [...I[5] || (I[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (s(), E(Ve, { to: "body" }, [
          v.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: Pe(ne, ["self"])
          }, [
            e("div", vd, [
              e("div", { class: "model-modal-header" }, [
                I[6] || (I[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: ne
                }, "✕")
              ]),
              e("div", fd, [
                k(nt, {
                  modelValue: u.value,
                  "onUpdate:modelValue": I[2] || (I[2] = (_e) => u.value = _e),
                  placeholder: "Search by filename, category...",
                  onInput: j
                }, null, 8, ["modelValue"]),
                b.value.length > 0 ? (s(), o("div", gd, [
                  (s(!0), o(A, null, Z(b.value, (_e) => (s(), o("div", {
                    key: _e.hash,
                    class: "model-search-result-item",
                    onClick: (de) => ae()
                  }, [
                    e("div", hd, [
                      e("code", yd, a(_e.filename), 1)
                    ]),
                    e("div", wd, [
                      e("span", kd, a(_e.category), 1),
                      e("span", bd, a(N(_e.size)), 1)
                    ]),
                    _e.relative_path ? (s(), o("div", _d, a(_e.relative_path), 1)) : d("", !0)
                  ], 8, pd))), 128))
                ])) : u.value && !$.value ? (s(), o("div", $d, ' No models found matching "' + a(u.value) + '" ', 1)) : d("", !0),
                $.value ? (s(), o("div", Cd, "Searching...")) : d("", !0)
              ])
            ])
          ])) : d("", !0)
        ])),
        (s(), E(Ve, { to: "body" }, [
          r.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: Pe(oe, ["self"])
          }, [
            e("div", xd, [
              e("div", { class: "model-modal-header" }, [
                I[7] || (I[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: oe
                }, "✕")
              ]),
              e("div", Sd, [
                e("div", Id, [
                  I[8] || (I[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  k(nt, {
                    modelValue: p.value,
                    "onUpdate:modelValue": I[3] || (I[3] = (_e) => p.value = _e),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", Ed, [
                  I[9] || (I[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  k(nt, {
                    modelValue: w.value,
                    "onUpdate:modelValue": I[4] || (I[4] = (_e) => w.value = _e),
                    placeholder: _.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", Md, [
                  k(me, {
                    variant: "secondary",
                    onClick: oe
                  }, {
                    default: l(() => [...I[10] || (I[10] = [
                      h("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  k(me, {
                    variant: "primary",
                    disabled: !p.value.trim() || !w.value.trim(),
                    onClick: K
                  }, {
                    default: l(() => [...I[11] || (I[11] = [
                      h(" Queue Download ", -1)
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
}), Rd = /* @__PURE__ */ te(Td, [["__scopeId", "data-v-c6acbada"]]), zd = { class: "applying-step" }, Ld = {
  key: 0,
  class: "phase-content"
}, Pd = {
  key: 1,
  class: "phase-content"
}, Dd = { class: "phase-description" }, Nd = { class: "overall-progress" }, Ud = { class: "progress-bar" }, Od = { class: "progress-label" }, Bd = { class: "install-list" }, Fd = { class: "install-icon" }, Ad = { key: 0 }, Vd = {
  key: 1,
  class: "spinner"
}, Wd = { key: 2 }, jd = { key: 3 }, Gd = {
  key: 0,
  class: "install-error"
}, qd = {
  key: 2,
  class: "phase-content"
}, Hd = { class: "phase-header" }, Kd = { class: "phase-title" }, Jd = { class: "completion-summary" }, Yd = {
  key: 0,
  class: "summary-item success"
}, Xd = { class: "summary-text" }, Qd = {
  key: 1,
  class: "summary-item error"
}, Zd = { class: "summary-text" }, ec = {
  key: 2,
  class: "failed-list"
}, tc = { class: "failed-node-id" }, sc = { class: "failed-error" }, oc = {
  key: 4,
  class: "summary-item success"
}, nc = {
  key: 5,
  class: "restart-prompt"
}, ac = {
  key: 3,
  class: "phase-content error"
}, lc = { class: "error-message" }, ic = /* @__PURE__ */ ee({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(t) {
    const c = t, n = L(() => {
      var u, p;
      const v = ((u = c.progress.nodeInstallProgress) == null ? void 0 : u.totalNodes) || c.progress.nodesToInstall.length;
      if (!v) return 0;
      const r = ((p = c.progress.nodeInstallProgress) == null ? void 0 : p.completedNodes.length) ?? 0;
      return Math.round(r / v * 100);
    }), i = L(() => {
      var v;
      return ((v = c.progress.nodeInstallProgress) == null ? void 0 : v.completedNodes.filter((r) => !r.success)) || [];
    }), y = L(() => i.value.length > 0);
    function g(v, r) {
      var p, w;
      const u = (p = c.progress.nodeInstallProgress) == null ? void 0 : p.completedNodes.find((b) => b.node_id === v);
      return u ? u.success ? "complete" : "failed" : ((w = c.progress.nodeInstallProgress) == null ? void 0 : w.currentIndex) === r ? "installing" : "pending";
    }
    function f(v) {
      var r, u;
      return (u = (r = c.progress.nodeInstallProgress) == null ? void 0 : r.completedNodes.find((p) => p.node_id === v)) == null ? void 0 : u.error;
    }
    return (v, r) => {
      var u, p, w, b;
      return s(), o("div", zd, [
        t.progress.phase === "resolving" ? (s(), o("div", Ld, [...r[2] || (r[2] = [
          e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          e("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : t.progress.phase === "installing" ? (s(), o("div", Pd, [
          r[3] || (r[3] = e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          e("p", Dd, " Installing " + a((((u = t.progress.nodeInstallProgress) == null ? void 0 : u.currentIndex) ?? 0) + 1) + " of " + a(((p = t.progress.nodeInstallProgress) == null ? void 0 : p.totalNodes) ?? t.progress.nodesToInstall.length) + " packages... ", 1),
          e("div", Nd, [
            e("div", Ud, [
              e("div", {
                class: "progress-fill",
                style: pt({ width: `${n.value}%` })
              }, null, 4)
            ]),
            e("span", Od, a(((w = t.progress.nodeInstallProgress) == null ? void 0 : w.completedNodes.length) ?? 0) + " / " + a(((b = t.progress.nodeInstallProgress) == null ? void 0 : b.totalNodes) ?? t.progress.nodesToInstall.length), 1)
          ]),
          e("div", Bd, [
            (s(!0), o(A, null, Z(t.progress.nodesToInstall, ($, T) => (s(), o("div", {
              key: $,
              class: re(["install-item", g($, T)])
            }, [
              e("span", Fd, [
                g($, T) === "pending" ? (s(), o("span", Ad, "○")) : g($, T) === "installing" ? (s(), o("span", Vd, "◌")) : g($, T) === "complete" ? (s(), o("span", Wd, "✓")) : g($, T) === "failed" ? (s(), o("span", jd, "✗")) : d("", !0)
              ]),
              e("code", null, a($), 1),
              f($) ? (s(), o("span", Gd, a(f($)), 1)) : d("", !0)
            ], 2))), 128))
          ])
        ])) : t.progress.phase === "complete" ? (s(), o("div", qd, [
          e("div", Hd, [
            e("span", {
              class: re(["phase-icon", y.value ? "warning" : "success"])
            }, a(y.value ? "⚠" : "✓"), 3),
            e("h3", Kd, a(y.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          e("div", Jd, [
            t.progress.nodesInstalled.length > 0 ? (s(), o("div", Yd, [
              r[4] || (r[4] = e("span", { class: "summary-icon" }, "✓", -1)),
              e("span", Xd, a(t.progress.nodesInstalled.length) + " node package" + a(t.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : d("", !0),
            i.value.length > 0 ? (s(), o("div", Qd, [
              r[5] || (r[5] = e("span", { class: "summary-icon" }, "✗", -1)),
              e("span", Zd, a(i.value.length) + " package" + a(i.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : d("", !0),
            i.value.length > 0 ? (s(), o("div", ec, [
              (s(!0), o(A, null, Z(i.value, ($) => (s(), o("div", {
                key: $.node_id,
                class: "failed-item"
              }, [
                e("code", tc, a($.node_id), 1),
                e("span", sc, a($.error), 1)
              ]))), 128))
            ])) : d("", !0),
            i.value.length > 0 ? (s(), o("button", {
              key: 3,
              class: "retry-button",
              onClick: r[0] || (r[0] = ($) => v.$emit("retry-failed"))
            }, " Retry Failed (" + a(i.value.length) + ") ", 1)) : d("", !0),
            y.value ? d("", !0) : (s(), o("div", oc, [...r[6] || (r[6] = [
              e("span", { class: "summary-icon" }, "✓", -1),
              e("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            r[8] || (r[8] = e("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            t.progress.needsRestart ? (s(), o("div", nc, [
              r[7] || (r[7] = e("div", { class: "restart-warning" }, [
                e("span", { class: "warning-icon" }, "⚠"),
                e("div", { class: "warning-content" }, [
                  e("strong", null, "Restart Required"),
                  e("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              e("button", {
                class: "restart-button",
                onClick: r[1] || (r[1] = ($) => v.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : d("", !0)
          ])
        ])) : t.progress.phase === "error" ? (s(), o("div", ac, [
          r[9] || (r[9] = e("div", { class: "phase-header" }, [
            e("span", { class: "phase-icon error" }, "✗"),
            e("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          e("p", lc, a(t.progress.error), 1)
        ])) : d("", !0)
      ]);
    };
  }
}), rc = /* @__PURE__ */ te(ic, [["__scopeId", "data-v-5efaae58"]]), dc = {
  key: 0,
  class: "loading-state"
}, cc = {
  key: 1,
  class: "wizard-content"
}, uc = {
  key: 0,
  class: "step-content"
}, mc = { class: "analysis-summary" }, vc = { class: "analysis-header" }, fc = { class: "summary-description" }, gc = { class: "stats-grid" }, pc = { class: "stat-card" }, hc = { class: "stat-items" }, yc = {
  key: 0,
  class: "stat-item success"
}, wc = { class: "stat-count" }, kc = {
  key: 1,
  class: "stat-item info"
}, bc = { class: "stat-count" }, _c = {
  key: 2,
  class: "stat-item warning"
}, $c = { class: "stat-count" }, Cc = {
  key: 3,
  class: "stat-item error"
}, xc = { class: "stat-count" }, Sc = { class: "stat-card" }, Ic = { class: "stat-items" }, Ec = { class: "stat-item success" }, Mc = { class: "stat-count" }, Tc = {
  key: 0,
  class: "stat-item info"
}, Rc = { class: "stat-count" }, zc = {
  key: 1,
  class: "stat-item warning"
}, Lc = { class: "stat-count" }, Pc = {
  key: 2,
  class: "stat-item warning"
}, Dc = { class: "stat-count" }, Nc = {
  key: 3,
  class: "stat-item error"
}, Uc = { class: "stat-count" }, Oc = {
  key: 0,
  class: "status-message warning"
}, Bc = { class: "status-text" }, Fc = {
  key: 1,
  class: "status-message info"
}, Ac = { class: "status-text" }, Vc = {
  key: 2,
  class: "status-message info"
}, Wc = { class: "status-text" }, jc = {
  key: 3,
  class: "status-message warning"
}, Gc = { class: "status-text" }, qc = {
  key: 4,
  class: "status-message success"
}, Hc = {
  key: 5,
  class: "category-mismatch-section"
}, Kc = { class: "mismatch-list" }, Jc = { class: "mismatch-path" }, Yc = { class: "mismatch-target" }, Xc = {
  key: 3,
  class: "step-content"
}, Qc = { class: "review-summary" }, Zc = { class: "review-stats" }, eu = { class: "review-stat" }, tu = { class: "stat-value" }, su = { class: "review-stat" }, ou = { class: "stat-value" }, nu = { class: "review-stat" }, au = { class: "stat-value" }, lu = { class: "review-stat" }, iu = { class: "stat-value" }, ru = {
  key: 0,
  class: "review-section"
}, du = { class: "section-title" }, cu = { class: "review-items" }, uu = { class: "item-name" }, mu = { class: "item-choice" }, vu = {
  key: 0,
  class: "choice-badge install"
}, fu = {
  key: 1,
  class: "choice-badge skip"
}, gu = {
  key: 1,
  class: "review-section"
}, pu = { class: "section-title" }, hu = { class: "review-items" }, yu = { class: "item-name" }, wu = { class: "item-choice" }, ku = {
  key: 0,
  class: "choice-badge install"
}, bu = {
  key: 1,
  class: "choice-badge optional"
}, _u = {
  key: 2,
  class: "choice-badge skip"
}, $u = {
  key: 1,
  class: "choice-badge pending"
}, Cu = {
  key: 2,
  class: "review-section"
}, xu = { class: "section-title" }, Su = { class: "review-items" }, Iu = { class: "item-name" }, Eu = { class: "item-choice" }, Mu = {
  key: 0,
  class: "choice-badge install"
}, Tu = {
  key: 1,
  class: "choice-badge download"
}, Ru = {
  key: 2,
  class: "choice-badge optional"
}, zu = {
  key: 3,
  class: "choice-badge skip"
}, Lu = {
  key: 4,
  class: "choice-badge skip"
}, Pu = {
  key: 1,
  class: "choice-badge download"
}, Du = {
  key: 2,
  class: "choice-badge pending"
}, Nu = {
  key: 3,
  class: "no-choices"
}, Uu = /* @__PURE__ */ ee({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(t, { emit: c }) {
    const n = t, i = c, { analyzeWorkflow: y, applyResolution: g, installNodes: f, queueModelDownloads: v, progress: r, resetProgress: u } = Us(), { loadPendingDownloads: p } = jt(), { openFileLocation: w } = Ae(), b = C(null), $ = C(!1), T = C(!1), O = C(null), m = C("analysis"), _ = C([]), z = C(/* @__PURE__ */ new Map()), S = C(/* @__PURE__ */ new Map()), x = C(/* @__PURE__ */ new Set()), H = L(() => {
      const J = [
        { id: "analysis", label: "Analysis" }
      ];
      return (q.value || U.value) && J.push({ id: "nodes", label: "Nodes" }), (D.value || M.value) && J.push({ id: "models", label: "Models" }), J.push({ id: "review", label: "Review" }), m.value === "applying" && J.push({ id: "applying", label: "Applying" }), J;
    }), V = L(() => b.value ? b.value.stats.needs_user_input : !1), q = L(() => b.value ? b.value.nodes.unresolved.length > 0 || b.value.nodes.ambiguous.length > 0 : !1), D = L(() => b.value ? b.value.models.unresolved.length > 0 || b.value.models.ambiguous.length > 0 : !1), M = L(() => b.value ? b.value.stats.download_intents > 0 : !1), U = L(() => b.value ? b.value.stats.nodes_needing_installation > 0 : !1), ne = L(() => b.value ? b.value.nodes.resolved.length : 0), oe = L(() => b.value ? b.value.models.resolved.filter((J) => J.has_category_mismatch) : []), j = L(() => oe.value.length > 0), ae = L(() => {
      if (!b.value) return [];
      const J = b.value.nodes.resolved.filter((F) => !F.is_installed), B = /* @__PURE__ */ new Set();
      return J.filter((F) => B.has(F.package.package_id) ? !1 : (B.add(F.package.package_id), !0));
    }), K = L(() => {
      if (!b.value) return [];
      const J = b.value.nodes.resolved.filter((F) => !F.is_installed), B = /* @__PURE__ */ new Map();
      for (const F of J) {
        const Q = B.get(F.package.package_id);
        Q ? Q.node_types_count++ : B.set(F.package.package_id, {
          package_id: F.package.package_id,
          title: F.package.title,
          node_types_count: 1
        });
      }
      return Array.from(B.values());
    }), N = L(() => ae.value.filter((J) => !x.value.has(J.package.package_id))), P = L(() => b.value ? b.value.models.resolved.filter((J) => J.match_type === "download_intent").map((J) => ({
      filename: J.reference.widget_value,
      reference: J.reference,
      is_download_intent: !0,
      resolved_model: J.model,
      download_source: J.download_source,
      target_path: J.target_path
    })) : []), I = L(() => {
      if (!b.value) return [];
      const J = b.value.nodes.unresolved.map((F) => ({
        node_type: F.reference.node_type,
        reason: F.reason,
        is_unresolved: !0,
        options: void 0
      })), B = b.value.nodes.ambiguous.map((F) => ({
        node_type: F.reference.node_type,
        has_multiple_options: !0,
        options: F.options.map((Q) => ({
          package_id: Q.package.package_id,
          title: Q.package.title,
          match_confidence: Q.match_confidence,
          match_type: Q.match_type,
          is_installed: Q.is_installed
        }))
      }));
      return [...J, ...B];
    }), ie = L(() => {
      if (!b.value) return [];
      const J = b.value.models.unresolved.map((F) => ({
        filename: F.reference.widget_value,
        reference: F.reference,
        reason: F.reason,
        is_unresolved: !0,
        options: void 0
      })), B = b.value.models.ambiguous.map((F) => ({
        filename: F.reference.widget_value,
        reference: F.reference,
        has_multiple_options: !0,
        options: F.options.map((Q) => ({
          model: Q.model,
          match_confidence: Q.match_confidence,
          match_type: Q.match_type,
          has_download_source: Q.has_download_source
        }))
      }));
      return [...J, ...B];
    }), Y = L(() => {
      const J = ie.value, B = P.value.map((F) => ({
        filename: F.filename,
        reference: F.reference,
        is_download_intent: !0,
        resolved_model: F.resolved_model,
        download_source: F.download_source,
        target_path: F.target_path,
        options: void 0
      }));
      return [...J, ...B];
    }), Te = L(() => {
      let J = N.value.length;
      for (const B of z.value.values())
        B.action === "install" && J++;
      for (const B of S.value.values())
        B.action === "select" && J++;
      return J;
    }), _e = L(() => {
      let J = 0;
      for (const B of S.value.values())
        B.action === "download" && J++;
      return J;
    }), de = L(() => {
      let J = 0;
      for (const B of z.value.values())
        B.action === "optional" && J++;
      for (const B of S.value.values())
        B.action === "optional" && J++;
      return J;
    }), le = L(() => {
      let J = x.value.size;
      for (const B of z.value.values())
        B.action === "skip" && J++;
      for (const B of S.value.values())
        B.action === "skip" && J++;
      for (const B of I.value)
        z.value.has(B.node_type) || J++;
      for (const B of ie.value)
        S.value.has(B.filename) || J++;
      return J;
    }), ce = L(() => {
      const J = {};
      if (J.analysis = { resolved: 1, total: 1 }, q.value) {
        const B = I.value.length, F = I.value.filter(
          (Q) => z.value.has(Q.node_type)
        ).length;
        J.nodes = { resolved: F, total: B };
      }
      if (D.value || M.value) {
        const B = Y.value.length, F = Y.value.filter(
          (Q) => S.value.has(Q.filename) || Q.is_download_intent
        ).length;
        J.models = { resolved: F, total: B };
      }
      if (J.review = { resolved: 1, total: 1 }, m.value === "applying") {
        const B = r.totalFiles || 1, F = r.completedFiles.length;
        J.applying = { resolved: F, total: B };
      }
      return J;
    });
    function ve(J) {
      m.value = J;
    }
    function Le() {
      const J = H.value.findIndex((B) => B.id === m.value);
      J > 0 && (m.value = H.value[J - 1].id);
    }
    function he() {
      const J = H.value.findIndex((B) => B.id === m.value);
      J < H.value.length - 1 && (m.value = H.value[J + 1].id);
    }
    async function Ce() {
      $.value = !0, O.value = null;
      try {
        b.value = await y(n.workflowName);
      } catch (J) {
        O.value = J instanceof Error ? J.message : "Failed to analyze workflow";
      } finally {
        $.value = !1;
      }
    }
    function ge() {
      _.value.includes("analysis") || _.value.push("analysis"), q.value || U.value ? m.value = "nodes" : D.value || M.value ? m.value = "models" : m.value = "review";
    }
    function X(J) {
      z.value.set(J, { action: "optional" });
    }
    function Re(J) {
      z.value.set(J, { action: "skip" });
    }
    function Ee(J, B) {
      var Q;
      const F = I.value.find((ke) => ke.node_type === J);
      (Q = F == null ? void 0 : F.options) != null && Q[B] && z.value.set(J, {
        action: "install",
        package_id: F.options[B].package_id
      });
    }
    function we(J, B) {
      z.value.set(J, {
        action: "install",
        package_id: B
      });
    }
    function pe(J) {
      z.value.delete(J);
    }
    function Ke(J) {
      x.value.has(J) ? x.value.delete(J) : x.value.add(J);
    }
    function Xe(J) {
      S.value.set(J, { action: "optional" });
    }
    function _t(J) {
      S.value.set(J, { action: "skip" });
    }
    function be(J, B) {
      var Q;
      const F = ie.value.find((ke) => ke.filename === J);
      (Q = F == null ? void 0 : F.options) != null && Q[B] && S.value.set(J, {
        action: "select",
        selected_model: F.options[B].model
      });
    }
    function We(J, B, F) {
      S.value.set(J, {
        action: "download",
        url: B,
        target_path: F
      });
    }
    function wt(J) {
      S.value.delete(J);
    }
    async function ut(J) {
      try {
        await w(J);
      } catch (B) {
        O.value = B instanceof Error ? B.message : "Failed to open file location";
      }
    }
    async function De() {
      var J;
      T.value = !0, O.value = null, u(), r.phase = "resolving", m.value = "applying";
      try {
        const B = await g(n.workflowName, z.value, S.value, x.value);
        B.models_to_download && B.models_to_download.length > 0 && v(n.workflowName, B.models_to_download);
        const F = [
          ...B.nodes_to_install || [],
          ...N.value.map((ke) => ke.package.package_id)
        ];
        r.nodesToInstall = [...new Set(F)], r.nodesToInstall.length > 0 && await f(n.workflowName), r.phase = "complete", await p();
        const Q = r.installError || ((J = r.nodeInstallProgress) == null ? void 0 : J.completedNodes.some((ke) => !ke.success));
        !r.needsRestart && !Q && setTimeout(() => {
          i("refresh"), i("install"), i("close");
        }, 1500);
      } catch (B) {
        O.value = B instanceof Error ? B.message : "Failed to apply resolution", r.error = O.value, r.phase = "error";
      } finally {
        T.value = !1;
      }
    }
    function $t() {
      i("refresh"), i("restart"), i("close");
    }
    async function lt() {
      var B;
      const J = ((B = r.nodeInstallProgress) == null ? void 0 : B.completedNodes.filter((F) => !F.success).map((F) => F.node_id)) || [];
      if (J.length !== 0) {
        r.phase = "installing", r.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: J.length
        }, r.nodesToInstall = J, r.nodesInstalled = [], r.installError = void 0;
        try {
          await f(n.workflowName), r.phase = "complete";
        } catch (F) {
          r.error = F instanceof Error ? F.message : "Retry failed", r.phase = "error";
        }
      }
    }
    return Be(Ce), (J, B) => (s(), E(Ye, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: $.value,
      error: O.value || void 0,
      "fixed-height": !0,
      onClose: B[1] || (B[1] = (F) => i("close"))
    }, {
      body: l(() => [
        $.value && !b.value ? (s(), o("div", dc, [...B[2] || (B[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : b.value ? (s(), o("div", cc, [
          k(hi, {
            steps: H.value,
            "current-step": m.value,
            "completed-steps": _.value,
            "step-stats": ce.value,
            onStepChange: ve
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          m.value === "analysis" ? (s(), o("div", uc, [
            e("div", mc, [
              e("div", vc, [
                B[3] || (B[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", fc, " Found " + a(b.value.stats.total_nodes) + " nodes and " + a(b.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", gc, [
                e("div", pc, [
                  B[12] || (B[12] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", hc, [
                    ne.value > 0 ? (s(), o("div", yc, [
                      B[4] || (B[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", wc, a(ne.value), 1),
                      B[5] || (B[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ])) : d("", !0),
                    b.value.stats.packages_needing_installation > 0 ? (s(), o("div", kc, [
                      B[6] || (B[6] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", bc, a(b.value.stats.packages_needing_installation), 1),
                      B[7] || (B[7] = e("span", { class: "stat-label" }, "to install", -1))
                    ])) : d("", !0),
                    b.value.nodes.ambiguous.length > 0 ? (s(), o("div", _c, [
                      B[8] || (B[8] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", $c, a(b.value.nodes.ambiguous.length), 1),
                      B[9] || (B[9] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : d("", !0),
                    b.value.nodes.unresolved.length > 0 ? (s(), o("div", Cc, [
                      B[10] || (B[10] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", xc, a(b.value.nodes.unresolved.length), 1),
                      B[11] || (B[11] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : d("", !0)
                  ])
                ]),
                e("div", Sc, [
                  B[23] || (B[23] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", Ic, [
                    e("div", Ec, [
                      B[13] || (B[13] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Mc, a(b.value.models.resolved.length - b.value.stats.download_intents - b.value.stats.models_with_category_mismatch), 1),
                      B[14] || (B[14] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    b.value.stats.download_intents > 0 ? (s(), o("div", Tc, [
                      B[15] || (B[15] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Rc, a(b.value.stats.download_intents), 1),
                      B[16] || (B[16] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : d("", !0),
                    j.value ? (s(), o("div", zc, [
                      B[17] || (B[17] = e("span", { class: "stat-icon" }, "⚠", -1)),
                      e("span", Lc, a(oe.value.length), 1),
                      B[18] || (B[18] = e("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : d("", !0),
                    b.value.models.ambiguous.length > 0 ? (s(), o("div", Pc, [
                      B[19] || (B[19] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Dc, a(b.value.models.ambiguous.length), 1),
                      B[20] || (B[20] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : d("", !0),
                    b.value.models.unresolved.length > 0 ? (s(), o("div", Nc, [
                      B[21] || (B[21] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Uc, a(b.value.models.unresolved.length), 1),
                      B[22] || (B[22] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : d("", !0)
                  ])
                ])
              ]),
              V.value ? (s(), o("div", Oc, [
                B[24] || (B[24] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Bc, a(I.value.length + ie.value.length) + " items need your input", 1)
              ])) : U.value ? (s(), o("div", Fc, [
                B[25] || (B[25] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Ac, a(b.value.stats.packages_needing_installation) + " package" + a(b.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + a(b.value.stats.nodes_needing_installation) + " node type" + a(b.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + a(M.value ? `, ${b.value.stats.download_intents} model${b.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : M.value ? (s(), o("div", Vc, [
                B[26] || (B[26] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", Wc, a(b.value.stats.download_intents) + " model" + a(b.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : j.value ? (s(), o("div", jc, [
                B[27] || (B[27] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", Gc, a(oe.value.length) + " model" + a(oe.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (s(), o("div", qc, [...B[28] || (B[28] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              j.value ? (s(), o("div", Hc, [
                B[31] || (B[31] = e("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                e("div", Kc, [
                  (s(!0), o(A, null, Z(oe.value, (F) => {
                    var Q, ke;
                    return s(), o("div", {
                      key: F.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      e("code", Jc, a(F.actual_category) + "/" + a((Q = F.model) == null ? void 0 : Q.filename), 1),
                      B[30] || (B[30] = e("span", { class: "mismatch-arrow" }, "→", -1)),
                      e("code", Yc, a((ke = F.expected_categories) == null ? void 0 : ke[0]) + "/", 1),
                      F.file_path ? (s(), E(me, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (it) => ut(F.file_path)
                      }, {
                        default: l(() => [...B[29] || (B[29] = [
                          h(" Open File Location ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : d("", !0)
                    ]);
                  }), 128))
                ])
              ])) : d("", !0)
            ])
          ])) : d("", !0),
          m.value === "nodes" ? (s(), E(Or, {
            key: 1,
            nodes: I.value,
            "node-choices": z.value,
            "auto-resolved-packages": K.value,
            "skipped-packages": x.value,
            onMarkOptional: X,
            onSkip: Re,
            onOptionSelected: Ee,
            onManualEntry: we,
            onClearChoice: pe,
            onPackageSkip: Ke
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : d("", !0),
          m.value === "models" ? (s(), E(Rd, {
            key: 2,
            models: Y.value,
            "model-choices": S.value,
            onMarkOptional: Xe,
            onSkip: _t,
            onOptionSelected: be,
            onDownloadUrl: We,
            onClearChoice: wt
          }, null, 8, ["models", "model-choices"])) : d("", !0),
          m.value === "review" ? (s(), o("div", Xc, [
            e("div", Qc, [
              B[36] || (B[36] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", Zc, [
                e("div", eu, [
                  e("span", tu, a(Te.value), 1),
                  B[32] || (B[32] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", su, [
                  e("span", ou, a(_e.value), 1),
                  B[33] || (B[33] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", nu, [
                  e("span", au, a(de.value), 1),
                  B[34] || (B[34] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", lu, [
                  e("span", iu, a(le.value), 1),
                  B[35] || (B[35] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              K.value.length > 0 ? (s(), o("div", ru, [
                e("h4", du, "Node Packages (" + a(K.value.length) + ")", 1),
                e("div", cu, [
                  (s(!0), o(A, null, Z(K.value, (F) => (s(), o("div", {
                    key: F.package_id,
                    class: "review-item"
                  }, [
                    e("code", uu, a(F.package_id), 1),
                    e("div", mu, [
                      x.value.has(F.package_id) ? (s(), o("span", fu, "Skipped")) : (s(), o("span", vu, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : d("", !0),
              I.value.length > 0 ? (s(), o("div", gu, [
                e("h4", pu, "Node Choices (" + a(I.value.length) + ")", 1),
                e("div", hu, [
                  (s(!0), o(A, null, Z(I.value, (F) => {
                    var Q, ke, it, mt;
                    return s(), o("div", {
                      key: F.node_type,
                      class: "review-item"
                    }, [
                      e("code", yu, a(F.node_type), 1),
                      e("div", wu, [
                        z.value.has(F.node_type) ? (s(), o(A, { key: 0 }, [
                          ((Q = z.value.get(F.node_type)) == null ? void 0 : Q.action) === "install" ? (s(), o("span", ku, a((ke = z.value.get(F.node_type)) == null ? void 0 : ke.package_id), 1)) : ((it = z.value.get(F.node_type)) == null ? void 0 : it.action) === "optional" ? (s(), o("span", bu, " Optional ")) : ((mt = z.value.get(F.node_type)) == null ? void 0 : mt.action) === "skip" ? (s(), o("span", _u, " Skip ")) : d("", !0)
                        ], 64)) : (s(), o("span", $u, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : d("", !0),
              Y.value.length > 0 ? (s(), o("div", Cu, [
                e("h4", xu, "Models (" + a(Y.value.length) + ")", 1),
                e("div", Su, [
                  (s(!0), o(A, null, Z(Y.value, (F) => {
                    var Q, ke, it, mt, tt, xt, vt;
                    return s(), o("div", {
                      key: F.filename,
                      class: "review-item"
                    }, [
                      e("code", Iu, a(F.filename), 1),
                      e("div", Eu, [
                        S.value.has(F.filename) ? (s(), o(A, { key: 0 }, [
                          ((Q = S.value.get(F.filename)) == null ? void 0 : Q.action) === "select" ? (s(), o("span", Mu, a((it = (ke = S.value.get(F.filename)) == null ? void 0 : ke.selected_model) == null ? void 0 : it.filename), 1)) : ((mt = S.value.get(F.filename)) == null ? void 0 : mt.action) === "download" ? (s(), o("span", Tu, " Download ")) : ((tt = S.value.get(F.filename)) == null ? void 0 : tt.action) === "optional" ? (s(), o("span", Ru, " Optional ")) : ((xt = S.value.get(F.filename)) == null ? void 0 : xt.action) === "skip" ? (s(), o("span", zu, " Skip ")) : ((vt = S.value.get(F.filename)) == null ? void 0 : vt.action) === "cancel_download" ? (s(), o("span", Lu, " Cancel Download ")) : d("", !0)
                        ], 64)) : F.is_download_intent ? (s(), o("span", Pu, " Pending Download ")) : (s(), o("span", Du, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : d("", !0),
              ae.value.length === 0 && I.value.length === 0 && Y.value.length === 0 ? (s(), o("div", Nu, " No dependencies need resolution. ")) : d("", !0)
            ])
          ])) : d("", !0),
          m.value === "applying" ? (s(), E(rc, {
            key: 4,
            progress: xe(r),
            onRestart: $t,
            onRetryFailed: lt
          }, null, 8, ["progress"])) : d("", !0)
        ])) : d("", !0)
      ]),
      footer: l(() => [
        m.value !== "analysis" && m.value !== "applying" ? (s(), E(me, {
          key: 0,
          variant: "secondary",
          disabled: T.value,
          onClick: Le
        }, {
          default: l(() => [...B[37] || (B[37] = [
            h(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : d("", !0),
        B[41] || (B[41] = e("div", { class: "footer-spacer" }, null, -1)),
        m.value !== "applying" || xe(r).phase === "complete" || xe(r).phase === "error" ? (s(), E(me, {
          key: 1,
          variant: "secondary",
          onClick: B[0] || (B[0] = (F) => i("close"))
        }, {
          default: l(() => [
            h(a(xe(r).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : d("", !0),
        m.value === "analysis" ? (s(), E(me, {
          key: 2,
          variant: "primary",
          disabled: $.value,
          onClick: ge
        }, {
          default: l(() => [...B[38] || (B[38] = [
            h(" Continue ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : d("", !0),
        m.value === "nodes" ? (s(), E(me, {
          key: 3,
          variant: "primary",
          onClick: he
        }, {
          default: l(() => [
            h(a(D.value || M.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : d("", !0),
        m.value === "models" ? (s(), E(me, {
          key: 4,
          variant: "primary",
          onClick: he
        }, {
          default: l(() => [...B[39] || (B[39] = [
            h(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : d("", !0),
        m.value === "review" ? (s(), E(me, {
          key: 5,
          variant: "primary",
          disabled: T.value,
          loading: T.value,
          onClick: De
        }, {
          default: l(() => [...B[40] || (B[40] = [
            h(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : d("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Ou = /* @__PURE__ */ te(Uu, [["__scopeId", "data-v-6276cf1d"]]), Bu = { class: "search-input-wrapper" }, Fu = ["value", "placeholder"], Au = /* @__PURE__ */ ee({
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
    const n = t, i = c, y = C(null);
    let g;
    function f(r) {
      const u = r.target.value;
      n.debounce > 0 ? (clearTimeout(g), g = window.setTimeout(() => {
        i("update:modelValue", u);
      }, n.debounce)) : i("update:modelValue", u);
    }
    function v() {
      var r;
      i("update:modelValue", ""), i("clear"), (r = y.value) == null || r.focus();
    }
    return Be(() => {
      n.autoFocus && y.value && y.value.focus();
    }), (r, u) => (s(), o("div", Bu, [
      e("input", {
        ref_key: "inputRef",
        ref: y,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: f,
        onKeyup: gt(v, ["escape"])
      }, null, 40, Fu),
      t.clearable && t.modelValue ? (s(), o("button", {
        key: 0,
        class: "clear-button",
        onClick: v,
        title: "Clear search"
      }, " ✕ ")) : d("", !0)
    ]));
  }
}), Vu = /* @__PURE__ */ te(Au, [["__scopeId", "data-v-266f857a"]]), Wu = { class: "search-bar" }, ju = /* @__PURE__ */ ee({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (c, n) => (s(), o("div", Wu, [
      k(Vu, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": n[0] || (n[0] = (i) => c.$emit("update:modelValue", i)),
        onClear: n[1] || (n[1] = (i) => c.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), zt = /* @__PURE__ */ te(ju, [["__scopeId", "data-v-3d51bbfd"]]), Gu = { class: "section-group" }, qu = {
  key: 0,
  class: "section-content"
}, Hu = /* @__PURE__ */ ee({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: c }) {
    const n = t, i = c, y = C(n.initiallyExpanded);
    function g() {
      n.collapsible && (y.value = !y.value, i("toggle", y.value));
    }
    return (f, v) => (s(), o("section", Gu, [
      k(et, {
        count: t.count,
        clickable: t.collapsible,
        expanded: y.value,
        onClick: g
      }, {
        default: l(() => [
          h(a(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || y.value ? (s(), o("div", qu, [
        Se(f.$slots, "default", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), Fe = /* @__PURE__ */ te(Hu, [["__scopeId", "data-v-c48e33ed"]]), Ku = { class: "item-header" }, Ju = {
  key: 0,
  class: "item-icon"
}, Yu = { class: "item-info" }, Xu = {
  key: 0,
  class: "item-title"
}, Qu = {
  key: 1,
  class: "item-subtitle"
}, Zu = {
  key: 0,
  class: "item-details"
}, em = {
  key: 1,
  class: "item-actions"
}, tm = /* @__PURE__ */ ee({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: c }) {
    const n = t, i = L(() => n.status ? `status-${n.status}` : "");
    return (y, g) => (s(), o("div", {
      class: re(["item-card", { clickable: t.clickable, compact: t.compact }, i.value]),
      onClick: g[0] || (g[0] = (f) => t.clickable && y.$emit("click"))
    }, [
      e("div", Ku, [
        y.$slots.icon ? (s(), o("span", Ju, [
          Se(y.$slots, "icon", {}, void 0, !0)
        ])) : d("", !0),
        e("div", Yu, [
          y.$slots.title ? (s(), o("div", Xu, [
            Se(y.$slots, "title", {}, void 0, !0)
          ])) : d("", !0),
          y.$slots.subtitle ? (s(), o("div", Qu, [
            Se(y.$slots, "subtitle", {}, void 0, !0)
          ])) : d("", !0)
        ])
      ]),
      y.$slots.details ? (s(), o("div", Zu, [
        Se(y.$slots, "details", {}, void 0, !0)
      ])) : d("", !0),
      y.$slots.actions ? (s(), o("div", em, [
        Se(y.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), Ge = /* @__PURE__ */ te(tm, [["__scopeId", "data-v-cc435e0e"]]), sm = { class: "loading-state" }, om = { class: "loading-message" }, nm = /* @__PURE__ */ ee({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (c, n) => (s(), o("div", sm, [
      n[0] || (n[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", om, a(t.message), 1)
    ]));
  }
}), ht = /* @__PURE__ */ te(nm, [["__scopeId", "data-v-ad8436c9"]]), am = { class: "error-state" }, lm = { class: "error-message" }, im = /* @__PURE__ */ ee({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (c, n) => (s(), o("div", am, [
      n[2] || (n[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", lm, a(t.message), 1),
      t.retry ? (s(), E(se, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (i) => c.$emit("retry"))
      }, {
        default: l(() => [...n[1] || (n[1] = [
          h(" Retry ", -1)
        ])]),
        _: 1
      })) : d("", !0)
    ]));
  }
}), yt = /* @__PURE__ */ te(im, [["__scopeId", "data-v-5397be48"]]), rm = /* @__PURE__ */ ee({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: c, emit: n }) {
    const i = n, { getWorkflows: y } = Ae();
    Ds();
    const g = C([]), f = C(!1), v = C(null), r = C(""), u = C(!0), p = C(!1), w = C(!1), b = C(!1), $ = C(null), T = L(
      () => g.value.filter((N) => N.status === "broken")
    ), O = L(
      () => g.value.filter((N) => N.status === "new")
    ), m = L(
      () => g.value.filter((N) => N.status === "modified")
    ), _ = L(
      () => g.value.filter((N) => N.status === "synced")
    ), z = L(() => {
      if (!r.value.trim()) return g.value;
      const N = r.value.toLowerCase();
      return g.value.filter((P) => P.name.toLowerCase().includes(N));
    }), S = L(
      () => T.value.filter(
        (N) => !r.value.trim() || N.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), x = L(
      () => O.value.filter(
        (N) => !r.value.trim() || N.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), H = L(
      () => m.value.filter(
        (N) => !r.value.trim() || N.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), V = L(
      () => _.value.filter(
        (N) => !r.value.trim() || N.name.toLowerCase().includes(r.value.toLowerCase())
      )
    ), q = L(
      () => p.value ? V.value : V.value.slice(0, 5)
    );
    async function D(N = !1) {
      f.value = !0, v.value = null;
      try {
        g.value = await y(N);
      } catch (P) {
        v.value = P instanceof Error ? P.message : "Failed to load workflows";
      } finally {
        f.value = !1;
      }
    }
    c({ loadWorkflows: D });
    function M(N) {
      $.value = N, w.value = !0;
    }
    function U(N) {
      $.value = N, b.value = !0;
    }
    function ne() {
      i("refresh");
    }
    async function oe() {
      b.value = !1, await D(!0);
    }
    async function j() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function ae(N) {
      const P = [];
      return N.missing_nodes > 0 && P.push(`${N.missing_nodes} missing node${N.missing_nodes > 1 ? "s" : ""}`), N.missing_models > 0 && P.push(`${N.missing_models} missing model${N.missing_models > 1 ? "s" : ""}`), N.models_with_category_mismatch && N.models_with_category_mismatch > 0 && P.push(`${N.models_with_category_mismatch} model${N.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), N.pending_downloads && N.pending_downloads > 0 && P.push(`${N.pending_downloads} pending download${N.pending_downloads > 1 ? "s" : ""}`), P.length > 0 ? P.join(", ") : "Has issues";
    }
    function K(N) {
      const P = N.sync_state === "new" ? "New" : N.sync_state === "modified" ? "Modified" : N.sync_state === "synced" ? "Synced" : N.sync_state;
      return N.has_path_sync_issues && N.models_needing_path_sync && N.models_needing_path_sync > 0 ? `${N.models_needing_path_sync} model path${N.models_needing_path_sync > 1 ? "s" : ""} need${N.models_needing_path_sync === 1 ? "s" : ""} sync` : P || "Unknown";
    }
    return Be(D), (N, P) => (s(), o(A, null, [
      k(qe, null, {
        header: l(() => [
          k(He, { title: "WORKFLOWS" })
        ]),
        search: l(() => [
          k(zt, {
            modelValue: r.value,
            "onUpdate:modelValue": P[0] || (P[0] = (I) => r.value = I),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          f.value ? (s(), E(ht, {
            key: 0,
            message: "Loading workflows..."
          })) : v.value ? (s(), E(yt, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: D
          }, null, 8, ["message"])) : (s(), o(A, { key: 2 }, [
            S.value.length ? (s(), E(Fe, {
              key: 0,
              title: "BROKEN",
              count: S.value.length
            }, {
              default: l(() => [
                (s(!0), o(A, null, Z(S.value, (I) => (s(), E(Ge, {
                  key: I.name,
                  status: "broken"
                }, {
                  icon: l(() => [...P[7] || (P[7] = [
                    h("⚠", -1)
                  ])]),
                  title: l(() => [
                    h(a(I.name), 1)
                  ]),
                  subtitle: l(() => [
                    h(a(ae(I)), 1)
                  ]),
                  actions: l(() => [
                    k(se, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ie) => U(I.name)
                    }, {
                      default: l(() => [...P[8] || (P[8] = [
                        h(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(se, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ie) => M(I.name)
                    }, {
                      default: l(() => [...P[9] || (P[9] = [
                        h(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            x.value.length ? (s(), E(Fe, {
              key: 1,
              title: "NEW",
              count: x.value.length
            }, {
              default: l(() => [
                (s(!0), o(A, null, Z(x.value, (I) => (s(), E(Ge, {
                  key: I.name,
                  status: I.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: l(() => [
                    h(a(I.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: l(() => [
                    h(a(I.name), 1)
                  ]),
                  subtitle: l(() => [
                    h(a(K(I)), 1)
                  ]),
                  actions: l(() => [
                    k(se, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ie) => M(I.name)
                    }, {
                      default: l(() => [...P[10] || (P[10] = [
                        h(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            H.value.length ? (s(), E(Fe, {
              key: 2,
              title: "MODIFIED",
              count: H.value.length
            }, {
              default: l(() => [
                (s(!0), o(A, null, Z(H.value, (I) => (s(), E(Ge, {
                  key: I.name,
                  status: I.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: l(() => [...P[11] || (P[11] = [
                    h("⚡", -1)
                  ])]),
                  title: l(() => [
                    h(a(I.name), 1)
                  ]),
                  subtitle: l(() => [
                    h(a(K(I)), 1)
                  ]),
                  actions: l(() => [
                    k(se, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ie) => M(I.name)
                    }, {
                      default: l(() => [...P[12] || (P[12] = [
                        h(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            V.value.length ? (s(), E(Fe, {
              key: 3,
              title: "SYNCED",
              count: V.value.length,
              collapsible: !0,
              "initially-expanded": u.value,
              onToggle: P[2] || (P[2] = (I) => u.value = I)
            }, {
              default: l(() => [
                (s(!0), o(A, null, Z(q.value, (I) => (s(), E(Ge, {
                  key: I.name,
                  status: I.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: l(() => [
                    h(a(I.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: l(() => [
                    h(a(I.name), 1)
                  ]),
                  subtitle: l(() => [
                    h(a(K(I)), 1)
                  ]),
                  actions: l(() => [
                    k(se, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ie) => M(I.name)
                    }, {
                      default: l(() => [...P[13] || (P[13] = [
                        h(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !p.value && V.value.length > 5 ? (s(), E(se, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: P[1] || (P[1] = (I) => p.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: l(() => [
                    h(" View all " + a(V.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : d("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : d("", !0),
            z.value.length ? d("", !0) : (s(), E(at, {
              key: 4,
              icon: "📭",
              message: r.value ? `No workflows match '${r.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      w.value && $.value ? (s(), E(ai, {
        key: 0,
        "workflow-name": $.value,
        onClose: P[3] || (P[3] = (I) => w.value = !1),
        onResolve: P[4] || (P[4] = (I) => U($.value)),
        onRefresh: P[5] || (P[5] = (I) => i("refresh"))
      }, null, 8, ["workflow-name"])) : d("", !0),
      b.value && $.value ? (s(), E(Ou, {
        key: 1,
        "workflow-name": $.value,
        onClose: oe,
        onInstall: ne,
        onRefresh: P[6] || (P[6] = (I) => i("refresh")),
        onRestart: j
      }, null, 8, ["workflow-name"])) : d("", !0)
    ], 64));
  }
}), dm = /* @__PURE__ */ te(rm, [["__scopeId", "data-v-fa3f076e"]]), cm = /* @__PURE__ */ ee({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (c, n) => (s(), o("div", {
      class: re(["summary-bar", t.variant])
    }, [
      Se(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Gt = /* @__PURE__ */ te(cm, [["__scopeId", "data-v-ccb7816e"]]), um = {
  key: 0,
  class: "model-details"
}, mm = { class: "detail-section" }, vm = { class: "detail-row" }, fm = { class: "detail-value mono" }, gm = { class: "detail-row" }, pm = { class: "detail-value mono" }, hm = { class: "detail-row" }, ym = { class: "detail-value mono" }, wm = { class: "detail-row" }, km = { class: "detail-value" }, bm = { class: "detail-row" }, _m = { class: "detail-value" }, $m = { class: "detail-row" }, Cm = { class: "detail-value" }, xm = { class: "detail-section" }, Sm = { class: "section-header" }, Im = {
  key: 0,
  class: "locations-list"
}, Em = { class: "location-path mono" }, Mm = {
  key: 0,
  class: "location-modified"
}, Tm = ["onClick"], Rm = {
  key: 1,
  class: "empty-state"
}, zm = { class: "detail-section" }, Lm = { class: "section-header" }, Pm = {
  key: 0,
  class: "sources-list"
}, Dm = { class: "source-type" }, Nm = ["href"], Um = ["disabled", "onClick"], Om = {
  key: 1,
  class: "empty-state"
}, Bm = { class: "add-source-form" }, Fm = ["disabled"], Am = {
  key: 2,
  class: "source-error"
}, Vm = {
  key: 3,
  class: "source-success"
}, Wm = /* @__PURE__ */ ee({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = t, { getModelDetails: i, addModelSource: y, removeModelSource: g, openFileLocation: f } = Ae(), v = C(null), r = C(!0), u = C(null), p = C(""), w = C(!1), b = C(null), $ = C(null), T = C(null), O = C(null);
    let m = null;
    function _(D, M = "success", U = 2e3) {
      m && clearTimeout(m), O.value = { message: D, type: M }, m = setTimeout(() => {
        O.value = null;
      }, U);
    }
    function z(D) {
      if (!D) return "Unknown";
      const M = 1024 * 1024 * 1024, U = 1024 * 1024;
      return D >= M ? `${(D / M).toFixed(1)} GB` : D >= U ? `${(D / U).toFixed(0)} MB` : `${(D / 1024).toFixed(0)} KB`;
    }
    function S(D) {
      navigator.clipboard.writeText(D), _("Copied to clipboard!");
    }
    async function x(D) {
      try {
        await f(D), _("Opening file location...");
      } catch {
        _("Failed to open location", "error");
      }
    }
    async function H() {
      if (!(!p.value.trim() || !v.value)) {
        w.value = !0, $.value = null, T.value = null;
        try {
          await y(v.value.hash, p.value.trim()), T.value = "Source added successfully!", p.value = "", await q();
        } catch (D) {
          $.value = D instanceof Error ? D.message : "Failed to add source";
        } finally {
          w.value = !1;
        }
      }
    }
    async function V(D) {
      if (v.value) {
        b.value = D, $.value = null, T.value = null;
        try {
          await g(v.value.hash, D), _("Source removed"), await q();
        } catch (M) {
          $.value = M instanceof Error ? M.message : "Failed to remove source";
        } finally {
          b.value = null;
        }
      }
    }
    async function q() {
      r.value = !0, u.value = null;
      try {
        v.value = await i(n.identifier);
      } catch (D) {
        u.value = D instanceof Error ? D.message : "Failed to load model details";
      } finally {
        r.value = !1;
      }
    }
    return Be(q), (D, M) => {
      var U;
      return s(), o(A, null, [
        k(Ye, {
          title: `Model Details: ${((U = v.value) == null ? void 0 : U.filename) || "Loading..."}`,
          size: "lg",
          loading: r.value,
          error: u.value,
          onClose: M[5] || (M[5] = (ne) => D.$emit("close"))
        }, {
          body: l(() => {
            var ne, oe, j, ae;
            return [
              v.value ? (s(), o("div", um, [
                e("section", mm, [
                  e("div", vm, [
                    M[6] || (M[6] = e("span", { class: "detail-label" }, "Hash:", -1)),
                    e("span", fm, a(v.value.hash || "Not computed"), 1),
                    v.value.hash ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: M[0] || (M[0] = (K) => S(v.value.hash))
                    }, "Copy")) : d("", !0)
                  ]),
                  e("div", gm, [
                    M[7] || (M[7] = e("span", { class: "detail-label" }, "Blake3:", -1)),
                    e("span", pm, a(v.value.blake3 || "Not computed"), 1),
                    v.value.blake3 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: M[1] || (M[1] = (K) => S(v.value.blake3))
                    }, "Copy")) : d("", !0)
                  ]),
                  e("div", hm, [
                    M[8] || (M[8] = e("span", { class: "detail-label" }, "SHA256:", -1)),
                    e("span", ym, a(v.value.sha256 || "Not computed"), 1),
                    v.value.sha256 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: M[2] || (M[2] = (K) => S(v.value.sha256))
                    }, "Copy")) : d("", !0)
                  ]),
                  e("div", wm, [
                    M[9] || (M[9] = e("span", { class: "detail-label" }, "Size:", -1)),
                    e("span", km, a(z(v.value.size)), 1)
                  ]),
                  e("div", bm, [
                    M[10] || (M[10] = e("span", { class: "detail-label" }, "Category:", -1)),
                    e("span", _m, a(v.value.category), 1)
                  ]),
                  e("div", $m, [
                    M[11] || (M[11] = e("span", { class: "detail-label" }, "Last Seen:", -1)),
                    e("span", Cm, a(v.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                e("section", xm, [
                  e("h4", Sm, "Locations (" + a(((ne = v.value.locations) == null ? void 0 : ne.length) || 0) + ")", 1),
                  (oe = v.value.locations) != null && oe.length ? (s(), o("div", Im, [
                    (s(!0), o(A, null, Z(v.value.locations, (K, N) => (s(), o("div", {
                      key: N,
                      class: "location-item"
                    }, [
                      e("span", Em, a(K.path), 1),
                      K.modified ? (s(), o("span", Mm, "Modified: " + a(K.modified), 1)) : d("", !0),
                      K.path ? (s(), o("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (P) => x(K.path)
                      }, " Open File Location ", 8, Tm)) : d("", !0)
                    ]))), 128))
                  ])) : (s(), o("div", Rm, "No locations found"))
                ]),
                e("section", zm, [
                  e("h4", Lm, "Download Sources (" + a(((j = v.value.sources) == null ? void 0 : j.length) || 0) + ")", 1),
                  (ae = v.value.sources) != null && ae.length ? (s(), o("div", Pm, [
                    (s(!0), o(A, null, Z(v.value.sources, (K, N) => (s(), o("div", {
                      key: N,
                      class: "source-item"
                    }, [
                      e("span", Dm, a(K.type) + ":", 1),
                      e("a", {
                        href: K.url,
                        target: "_blank",
                        class: "source-url"
                      }, a(K.url), 9, Nm),
                      e("button", {
                        class: "remove-source-btn",
                        disabled: b.value === K.url,
                        onClick: (P) => V(K.url)
                      }, a(b.value === K.url ? "..." : "×"), 9, Um)
                    ]))), 128))
                  ])) : (s(), o("div", Om, " No download sources configured ")),
                  e("div", Bm, [
                    Oe(e("input", {
                      "onUpdate:modelValue": M[3] || (M[3] = (K) => p.value = K),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [Mt, p.value]
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      disabled: !p.value.trim() || w.value,
                      onClick: H
                    }, a(w.value ? "Adding..." : "Add Source"), 9, Fm)
                  ]),
                  $.value ? (s(), o("p", Am, a($.value), 1)) : d("", !0),
                  T.value ? (s(), o("p", Vm, a(T.value), 1)) : d("", !0)
                ])
              ])) : d("", !0)
            ];
          }),
          footer: l(() => [
            e("button", {
              class: "btn-secondary",
              onClick: M[4] || (M[4] = (ne) => D.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (s(), E(Ve, { to: "body" }, [
          O.value ? (s(), o("div", {
            key: 0,
            class: re(["toast", O.value.type])
          }, a(O.value.message), 3)) : d("", !0)
        ]))
      ], 64);
    };
  }
}), fs = /* @__PURE__ */ te(Wm, [["__scopeId", "data-v-f15cbb56"]]), jm = /* @__PURE__ */ ee({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: c }) {
    const n = c, { getEnvironmentModels: i, getStatus: y } = Ae(), g = C([]), f = C([]), v = C("production"), r = C(!1), u = C(null), p = C(""), w = C(!1), b = C(null);
    function $() {
      w.value = !1, n("navigate", "model-index");
    }
    const T = L(
      () => g.value.reduce((q, D) => q + (D.size || 0), 0)
    ), O = L(() => {
      if (!p.value.trim()) return g.value;
      const q = p.value.toLowerCase();
      return g.value.filter((D) => D.filename.toLowerCase().includes(q));
    }), m = L(() => {
      if (!p.value.trim()) return f.value;
      const q = p.value.toLowerCase();
      return f.value.filter((D) => D.filename.toLowerCase().includes(q));
    }), _ = L(() => {
      const q = {};
      for (const M of O.value) {
        const U = M.type || "other";
        q[U] || (q[U] = []), q[U].push(M);
      }
      const D = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(q).sort(([M], [U]) => {
        const ne = D.indexOf(M), oe = D.indexOf(U);
        return ne >= 0 && oe >= 0 ? ne - oe : ne >= 0 ? -1 : oe >= 0 ? 1 : M.localeCompare(U);
      }).map(([M, U]) => ({ type: M, models: U }));
    });
    function z(q) {
      if (!q) return "Unknown";
      const D = q / (1024 * 1024);
      return D >= 1024 ? `${(D / 1024).toFixed(1)} GB` : `${D.toFixed(0)} MB`;
    }
    function S(q) {
      b.value = q.hash || q.filename;
    }
    function x(q) {
      n("navigate", "model-index");
    }
    function H(q) {
      alert(`Download functionality not yet implemented for ${q}`);
    }
    async function V() {
      r.value = !0, u.value = null;
      try {
        const q = await i();
        g.value = q, f.value = [];
        const D = await y();
        v.value = D.environment || "production";
      } catch (q) {
        u.value = q instanceof Error ? q.message : "Failed to load models";
      } finally {
        r.value = !1;
      }
    }
    return Be(V), (q, D) => (s(), o(A, null, [
      k(qe, null, {
        header: l(() => [
          k(He, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: D[0] || (D[0] = (M) => w.value = !0)
          })
        ]),
        search: l(() => [
          k(zt, {
            modelValue: p.value,
            "onUpdate:modelValue": D[1] || (D[1] = (M) => p.value = M),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          r.value ? (s(), E(ht, {
            key: 0,
            message: "Loading environment models..."
          })) : u.value ? (s(), E(yt, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: V
          }, null, 8, ["message"])) : (s(), o(A, { key: 2 }, [
            g.value.length ? (s(), E(Gt, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                h(" Total: " + a(g.value.length) + " models • " + a(z(T.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : d("", !0),
            (s(!0), o(A, null, Z(_.value, (M) => (s(), E(Fe, {
              key: M.type,
              title: M.type.toUpperCase(),
              count: M.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(A, null, Z(M.models, (U) => (s(), E(Ge, {
                  key: U.hash || U.filename,
                  status: "synced"
                }, {
                  icon: l(() => [...D[4] || (D[4] = [
                    h("📦", -1)
                  ])]),
                  title: l(() => [
                    h(a(U.filename), 1)
                  ]),
                  subtitle: l(() => [
                    h(a(z(U.size)), 1)
                  ]),
                  details: l(() => [
                    k(Ue, {
                      label: "Used by:",
                      value: (U.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    k(Ue, {
                      label: "Path:",
                      value: U.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    k(se, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ne) => S(U)
                    }, {
                      default: l(() => [...D[5] || (D[5] = [
                        h(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 2
            }, 1032, ["title", "count"]))), 128)),
            m.value.length ? (s(), E(Fe, {
              key: 1,
              title: "MISSING",
              count: m.value.length
            }, {
              default: l(() => [
                (s(!0), o(A, null, Z(m.value, (M) => (s(), E(Ge, {
                  key: M.filename,
                  status: "broken"
                }, {
                  icon: l(() => [...D[6] || (D[6] = [
                    h("⚠", -1)
                  ])]),
                  title: l(() => [
                    h(a(M.filename), 1)
                  ]),
                  subtitle: l(() => [...D[7] || (D[7] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: l(() => {
                    var U;
                    return [
                      k(Ue, {
                        label: "Required by:",
                        value: ((U = M.workflow_names) == null ? void 0 : U.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: l(() => [
                    k(se, {
                      variant: "primary",
                      size: "sm",
                      onClick: (U) => H(M.filename)
                    }, {
                      default: l(() => [...D[8] || (D[8] = [
                        h(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(se, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (U) => x(M.filename)
                    }, {
                      default: l(() => [...D[9] || (D[9] = [
                        h(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            !O.value.length && !m.value.length ? (s(), E(at, {
              key: 2,
              icon: "📭",
              message: p.value ? `No models match '${p.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : d("", !0)
          ], 64))
        ]),
        _: 1
      }),
      k(ct, {
        show: w.value,
        title: "About Environment Models",
        onClose: D[2] || (D[2] = (M) => w.value = !1)
      }, {
        content: l(() => [
          e("p", null, [
            D[10] || (D[10] = h(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + a(v.value) + '"', 1),
            D[11] || (D[11] = h(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: l(() => [
          k(se, {
            variant: "primary",
            onClick: $
          }, {
            default: l(() => [...D[12] || (D[12] = [
              h(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      b.value ? (s(), E(fs, {
        key: 0,
        identifier: b.value,
        onClose: D[3] || (D[3] = (M) => b.value = null)
      }, null, 8, ["identifier"])) : d("", !0)
    ], 64));
  }
}), Gm = /* @__PURE__ */ te(jm, [["__scopeId", "data-v-cb4f12b3"]]), qm = {
  key: 0,
  class: "indexing-progress"
}, Hm = { class: "progress-info" }, Km = { class: "progress-label" }, Jm = { class: "progress-count" }, Ym = { class: "progress-bar" }, Xm = { class: "modal-content" }, Qm = { class: "modal-header" }, Zm = { class: "modal-body" }, ev = { class: "input-group" }, tv = { class: "current-path" }, sv = { class: "input-group" }, ov = { class: "modal-footer" }, nv = { class: "modal-content" }, av = { class: "modal-header" }, lv = { class: "modal-body" }, iv = { class: "input-group" }, rv = { class: "input-group" }, dv = { class: "modal-footer" }, cv = /* @__PURE__ */ ee({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(t, { emit: c }) {
    const {
      getWorkspaceModels: n,
      scanWorkspaceModels: i,
      getModelsDirectory: y,
      setModelsDirectory: g
    } = Ae(), { addToQueue: f } = jt(), v = c, r = C([]), u = C(!1), p = C(!1), w = C(null), b = C(""), $ = C(!1), T = C(null), O = C(!1), m = C(null), _ = C(""), z = C(!1), S = C(!1), x = C(""), H = C(""), V = C(null), q = L(
      () => r.value.reduce((P, I) => P + (I.size || 0), 0)
    ), D = L(() => {
      if (!b.value.trim()) return r.value;
      const P = b.value.toLowerCase();
      return r.value.filter((I) => {
        const ie = I, Y = I.sha256 || ie.sha256_hash || "";
        return I.filename.toLowerCase().includes(P) || Y.toLowerCase().includes(P);
      });
    }), M = L(() => {
      const P = {};
      for (const ie of D.value) {
        const Y = ie.type || "other";
        P[Y] || (P[Y] = []), P[Y].push(ie);
      }
      const I = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(P).sort(([ie], [Y]) => {
        const Te = I.indexOf(ie), _e = I.indexOf(Y);
        return Te >= 0 && _e >= 0 ? Te - _e : Te >= 0 ? -1 : _e >= 0 ? 1 : ie.localeCompare(Y);
      }).map(([ie, Y]) => ({ type: ie, models: Y }));
    });
    function U(P) {
      if (!P) return "Unknown";
      const I = 1024 * 1024 * 1024, ie = 1024 * 1024;
      return P >= I ? `${(P / I).toFixed(1)} GB` : P >= ie ? `${(P / ie).toFixed(0)} MB` : `${(P / 1024).toFixed(0)} KB`;
    }
    function ne(P) {
      T.value = P.hash || P.filename;
    }
    async function oe() {
      p.value = !0, w.value = null;
      try {
        const P = await i();
        await K(), P.changes > 0 && console.log(`Scan complete: ${P.changes} changes detected`);
      } catch (P) {
        w.value = P instanceof Error ? P.message : "Failed to scan models";
      } finally {
        p.value = !1;
      }
    }
    async function j() {
      if (_.value.trim()) {
        z.value = !0, w.value = null;
        try {
          const P = await g(_.value.trim());
          m.value = P.path, O.value = !1, _.value = "", await K(), console.log(`Directory changed: ${P.models_indexed} models indexed`), v("refresh");
        } catch (P) {
          w.value = P instanceof Error ? P.message : "Failed to change directory";
        } finally {
          z.value = !1;
        }
      }
    }
    function ae() {
      if (!x.value.trim() || !H.value.trim()) return;
      const P = H.value.split("/").pop() || "model.safetensors";
      f([{
        workflow: "__manual__",
        filename: P,
        url: x.value.trim(),
        targetPath: H.value.trim()
      }]), x.value = "", H.value = "", S.value = !1;
    }
    async function K() {
      u.value = !0, w.value = null;
      try {
        r.value = await n();
      } catch (P) {
        w.value = P instanceof Error ? P.message : "Failed to load workspace models";
      } finally {
        u.value = !1;
      }
    }
    async function N() {
      try {
        const P = await y();
        m.value = P.path;
      } catch {
      }
    }
    return Be(() => {
      K(), N();
    }), (P, I) => (s(), o(A, null, [
      k(qe, null, {
        header: l(() => [
          k(He, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: I[2] || (I[2] = (ie) => $.value = !0)
          }, {
            actions: l(() => [
              k(se, {
                variant: "primary",
                size: "sm",
                disabled: p.value,
                onClick: oe
              }, {
                default: l(() => [
                  h(a(p.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              k(se, {
                variant: "primary",
                size: "sm",
                onClick: I[0] || (I[0] = (ie) => O.value = !0)
              }, {
                default: l(() => [...I[15] || (I[15] = [
                  h(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              k(se, {
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
                  h(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          V.value ? (s(), o("div", qm, [
            e("div", Hm, [
              e("span", Km, a(V.value.message), 1),
              e("span", Jm, a(V.value.current) + "/" + a(V.value.total), 1)
            ]),
            e("div", Ym, [
              e("div", {
                class: "progress-fill",
                style: pt({ width: `${V.value.current / V.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : d("", !0),
          k(zt, {
            modelValue: b.value,
            "onUpdate:modelValue": I[3] || (I[3] = (ie) => b.value = ie),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          u.value || V.value ? (s(), E(ht, {
            key: 0,
            message: V.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : w.value ? (s(), E(yt, {
            key: 1,
            message: w.value,
            retry: !0,
            onRetry: K
          }, null, 8, ["message"])) : (s(), o(A, { key: 2 }, [
            r.value.length ? (s(), E(Gt, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                h(" Total: " + a(r.value.length) + " models • " + a(U(q.value)), 1)
              ]),
              _: 1
            })) : d("", !0),
            (s(!0), o(A, null, Z(M.value, (ie) => (s(), E(Fe, {
              key: ie.type,
              title: ie.type.toUpperCase(),
              count: ie.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: l(() => [
                (s(!0), o(A, null, Z(ie.models, (Y) => (s(), E(Ge, {
                  key: Y.sha256 || Y.filename,
                  status: "synced"
                }, {
                  icon: l(() => [...I[17] || (I[17] = [
                    h("📦", -1)
                  ])]),
                  title: l(() => [
                    h(a(Y.filename), 1)
                  ]),
                  subtitle: l(() => [
                    h(a(U(Y.size)), 1)
                  ]),
                  details: l(() => [
                    k(Ue, {
                      label: "Hash:",
                      value: Y.hash ? Y.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    k(se, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Te) => ne(Y)
                    }, {
                      default: l(() => [...I[18] || (I[18] = [
                        h(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 2
            }, 1032, ["title", "count"]))), 128)),
            D.value.length ? d("", !0) : (s(), E(at, {
              key: 1,
              icon: "📭",
              message: b.value ? `No models match '${b.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      k(ct, {
        show: $.value,
        title: "About Workspace Model Index",
        onClose: I[4] || (I[4] = (ie) => $.value = !1)
      }, {
        content: l(() => [...I[19] || (I[19] = [
          e("p", null, [
            h(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            h(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      T.value ? (s(), E(fs, {
        key: 0,
        identifier: T.value,
        onClose: I[5] || (I[5] = (ie) => T.value = null)
      }, null, 8, ["identifier"])) : d("", !0),
      (s(), E(Ve, { to: "body" }, [
        O.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: I[9] || (I[9] = Pe((ie) => O.value = !1, ["self"]))
        }, [
          e("div", Xm, [
            e("div", Qm, [
              I[20] || (I[20] = e("h3", null, "Change Models Directory", -1)),
              e("button", {
                class: "modal-close",
                onClick: I[6] || (I[6] = (ie) => O.value = !1)
              }, "✕")
            ]),
            e("div", Zm, [
              e("div", ev, [
                I[21] || (I[21] = e("label", null, "Current Directory", -1)),
                e("code", tv, a(m.value || "Not set"), 1)
              ]),
              e("div", sv, [
                I[22] || (I[22] = e("label", null, "New Directory Path", -1)),
                k(nt, {
                  modelValue: _.value,
                  "onUpdate:modelValue": I[7] || (I[7] = (ie) => _.value = ie),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              I[23] || (I[23] = e("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            e("div", ov, [
              k(me, {
                variant: "secondary",
                onClick: I[8] || (I[8] = (ie) => O.value = !1)
              }, {
                default: l(() => [...I[24] || (I[24] = [
                  h(" Cancel ", -1)
                ])]),
                _: 1
              }),
              k(me, {
                variant: "primary",
                disabled: !_.value.trim() || z.value,
                loading: z.value,
                onClick: j
              }, {
                default: l(() => [
                  h(a(z.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : d("", !0)
      ])),
      (s(), E(Ve, { to: "body" }, [
        S.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: I[14] || (I[14] = Pe((ie) => S.value = !1, ["self"]))
        }, [
          e("div", nv, [
            e("div", av, [
              I[25] || (I[25] = e("h3", null, "Download New Model", -1)),
              e("button", {
                class: "modal-close",
                onClick: I[10] || (I[10] = (ie) => S.value = !1)
              }, "✕")
            ]),
            e("div", lv, [
              e("div", iv, [
                I[26] || (I[26] = e("label", null, "Download URL", -1)),
                k(nt, {
                  modelValue: x.value,
                  "onUpdate:modelValue": I[11] || (I[11] = (ie) => x.value = ie),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              e("div", rv, [
                I[27] || (I[27] = e("label", null, "Target Path (relative to models directory)", -1)),
                k(nt, {
                  modelValue: H.value,
                  "onUpdate:modelValue": I[12] || (I[12] = (ie) => H.value = ie),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              I[28] || (I[28] = e("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            e("div", dv, [
              k(me, {
                variant: "secondary",
                onClick: I[13] || (I[13] = (ie) => S.value = !1)
              }, {
                default: l(() => [...I[29] || (I[29] = [
                  h(" Cancel ", -1)
                ])]),
                _: 1
              }),
              k(me, {
                variant: "primary",
                disabled: !x.value.trim() || !H.value.trim(),
                onClick: ae
              }, {
                default: l(() => [...I[30] || (I[30] = [
                  h(" Queue Download ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"])
            ])
          ])
        ])) : d("", !0)
      ]))
    ], 64));
  }
}), uv = /* @__PURE__ */ te(cv, [["__scopeId", "data-v-73b78d84"]]), mv = { class: "node-details" }, vv = { class: "status-row" }, fv = {
  key: 0,
  class: "detail-row"
}, gv = { class: "value" }, pv = { class: "detail-row" }, hv = { class: "value" }, yv = {
  key: 1,
  class: "detail-row"
}, wv = { class: "value mono" }, kv = {
  key: 2,
  class: "detail-row"
}, bv = ["href"], _v = {
  key: 3,
  class: "detail-row"
}, $v = { class: "value mono small" }, Cv = { class: "detail-row" }, xv = {
  key: 0,
  class: "value"
}, Sv = {
  key: 1,
  class: "workflow-list"
}, Iv = /* @__PURE__ */ ee({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = t, i = c, y = L(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), g = L(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), f = L(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[n.node.source] || n.node.source);
    return (v, r) => (s(), E(Ye, {
      title: `NODE DETAILS: ${t.node.name}`,
      size: "md",
      onClose: r[1] || (r[1] = (u) => i("close"))
    }, {
      body: l(() => [
        e("div", mv, [
          e("div", vv, [
            r[2] || (r[2] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: re(["status-badge", y.value])
            }, a(g.value), 3)
          ]),
          t.node.version ? (s(), o("div", fv, [
            r[3] || (r[3] = e("span", { class: "label" }, "Version:", -1)),
            e("span", gv, a(t.node.source === "development" ? "" : "v") + a(t.node.version), 1)
          ])) : d("", !0),
          e("div", pv, [
            r[4] || (r[4] = e("span", { class: "label" }, "Source:", -1)),
            e("span", hv, a(f.value), 1)
          ]),
          t.node.registry_id ? (s(), o("div", yv, [
            r[5] || (r[5] = e("span", { class: "label" }, "Registry ID:", -1)),
            e("span", wv, a(t.node.registry_id), 1)
          ])) : d("", !0),
          t.node.repository ? (s(), o("div", kv, [
            r[7] || (r[7] = e("span", { class: "label" }, "Repository:", -1)),
            e("a", {
              href: t.node.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "repo-link"
            }, [
              h(a(t.node.repository) + " ", 1),
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
            ], 8, bv)
          ])) : d("", !0),
          t.node.download_url ? (s(), o("div", _v, [
            r[8] || (r[8] = e("span", { class: "label" }, "Download URL:", -1)),
            e("span", $v, a(t.node.download_url), 1)
          ])) : d("", !0),
          r[10] || (r[10] = e("div", { class: "section-divider" }, null, -1)),
          e("div", Cv, [
            r[9] || (r[9] = e("span", { class: "label" }, "Used by:", -1)),
            !t.node.used_in_workflows || t.node.used_in_workflows.length === 0 ? (s(), o("span", xv, " Not used in any workflows ")) : (s(), o("div", Sv, [
              (s(!0), o(A, null, Z(t.node.used_in_workflows, (u) => (s(), o("span", {
                key: u,
                class: "workflow-tag"
              }, a(u), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: l(() => [
        k(me, {
          variant: "secondary",
          onClick: r[0] || (r[0] = (u) => i("close"))
        }, {
          default: l(() => [...r[11] || (r[11] = [
            h(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Ev = /* @__PURE__ */ te(Iv, [["__scopeId", "data-v-b342f626"]]), Mv = { class: "dialog-message" }, Tv = {
  key: 0,
  class: "dialog-details"
}, Rv = {
  key: 1,
  class: "dialog-warning"
}, zv = /* @__PURE__ */ ee({
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
    return (c, n) => (s(), E(Ye, {
      title: t.title,
      size: "sm",
      onClose: n[3] || (n[3] = (i) => c.$emit("cancel"))
    }, {
      body: l(() => [
        e("p", Mv, a(t.message), 1),
        t.details && t.details.length ? (s(), o("div", Tv, [
          (s(!0), o(A, null, Z(t.details, (i, y) => (s(), o("div", {
            key: y,
            class: "detail-item"
          }, " • " + a(i), 1))), 128))
        ])) : d("", !0),
        t.warning ? (s(), o("p", Rv, [
          n[4] || (n[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          h(" " + a(t.warning), 1)
        ])) : d("", !0)
      ]),
      footer: l(() => [
        k(me, {
          variant: "secondary",
          onClick: n[0] || (n[0] = (i) => c.$emit("cancel"))
        }, {
          default: l(() => [
            h(a(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (s(), E(me, {
          key: 0,
          variant: "secondary",
          onClick: n[1] || (n[1] = (i) => c.$emit("secondary"))
        }, {
          default: l(() => [
            h(a(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : d("", !0),
        k(me, {
          variant: t.destructive ? "danger" : "primary",
          onClick: n[2] || (n[2] = (i) => c.$emit("confirm"))
        }, {
          default: l(() => [
            h(a(t.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Bs = /* @__PURE__ */ te(zv, [["__scopeId", "data-v-3670b9f5"]]), Lv = { class: "mismatch-warning" }, Pv = { class: "version-mismatch" }, Dv = { class: "version-actual" }, Nv = { class: "version-expected" }, Uv = { key: 0 }, Ov = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, Bv = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, Fv = /* @__PURE__ */ ee({
  __name: "NodesSection",
  props: {
    versionMismatches: { default: () => [] }
  },
  emits: ["open-node-manager", "repair-environment", "toast"],
  setup(t, { emit: c }) {
    const n = t, i = c, { getNodes: y, trackNodeAsDev: g, installNode: f, uninstallNode: v } = Ae(), r = C({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), u = C(!1), p = C(null), w = C(""), b = C(!1), $ = C(null), T = C(null), O = L(() => {
      if (!w.value.trim()) return r.value.nodes;
      const oe = w.value.toLowerCase();
      return r.value.nodes.filter(
        (j) => {
          var ae, K;
          return j.name.toLowerCase().includes(oe) || ((ae = j.description) == null ? void 0 : ae.toLowerCase().includes(oe)) || ((K = j.repository) == null ? void 0 : K.toLowerCase().includes(oe));
        }
      );
    }), m = L(
      () => O.value.filter((oe) => oe.installed && oe.tracked)
    ), _ = L(
      () => O.value.filter((oe) => !oe.installed && oe.tracked)
    ), z = L(
      () => O.value.filter((oe) => oe.installed && !oe.tracked)
    );
    function S(oe) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[oe] || oe;
    }
    const x = L(() => n.versionMismatches.length > 0);
    function H(oe) {
      return !oe.used_in_workflows || oe.used_in_workflows.length === 0 ? "Not used in any workflows" : oe.used_in_workflows.length === 1 ? oe.used_in_workflows[0] : `${oe.used_in_workflows.length} workflows`;
    }
    function V(oe) {
      $.value = oe;
    }
    function q() {
      i("open-node-manager");
    }
    function D(oe) {
      T.value = {
        title: "Track as Development Node",
        message: `Track "${oe}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          T.value = null;
          try {
            u.value = !0;
            const j = await g(oe);
            j.status === "success" ? (i("toast", `✓ Node "${oe}" tracked as development`, "success"), await ne()) : i("toast", `Failed to track node: ${j.message || "Unknown error"}`, "error");
          } catch (j) {
            i("toast", `Error tracking node: ${j instanceof Error ? j.message : "Unknown error"}`, "error");
          } finally {
            u.value = !1;
          }
        }
      };
    }
    function M(oe) {
      T.value = {
        title: "Remove Untracked Node",
        message: `Remove "${oe}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          T.value = null;
          try {
            u.value = !0;
            const j = await v(oe);
            j.status === "success" ? (i("toast", `✓ Node "${oe}" removed`, "success"), await ne()) : i("toast", `Failed to remove node: ${j.message || "Unknown error"}`, "error");
          } catch (j) {
            i("toast", `Error removing node: ${j instanceof Error ? j.message : "Unknown error"}`, "error");
          } finally {
            u.value = !1;
          }
        }
      };
    }
    function U(oe) {
      T.value = {
        title: "Install Missing Node",
        message: `Install "${oe}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          T.value = null;
          try {
            u.value = !0;
            const j = await f(oe);
            j.status === "success" ? (i("toast", `✓ Node "${oe}" installed`, "success"), await ne()) : i("toast", `Failed to install node: ${j.message || "Unknown error"}`, "error");
          } catch (j) {
            i("toast", `Error installing node: ${j instanceof Error ? j.message : "Unknown error"}`, "error");
          } finally {
            u.value = !1;
          }
        }
      };
    }
    async function ne() {
      u.value = !0, p.value = null;
      try {
        r.value = await y();
      } catch (oe) {
        p.value = oe instanceof Error ? oe.message : "Failed to load nodes";
      } finally {
        u.value = !1;
      }
    }
    return Be(ne), (oe, j) => (s(), o(A, null, [
      k(qe, null, {
        header: l(() => [
          k(He, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: j[0] || (j[0] = (ae) => b.value = !0)
          }, {
            actions: l(() => [
              k(se, {
                variant: "primary",
                size: "sm",
                onClick: q
              }, {
                default: l(() => [...j[7] || (j[7] = [
                  h(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          k(zt, {
            modelValue: w.value,
            "onUpdate:modelValue": j[1] || (j[1] = (ae) => w.value = ae),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          u.value ? (s(), E(ht, {
            key: 0,
            message: "Loading nodes..."
          })) : p.value ? (s(), E(yt, {
            key: 1,
            message: p.value,
            retry: !0,
            onRetry: ne
          }, null, 8, ["message"])) : (s(), o(A, { key: 2 }, [
            r.value.total_count ? (s(), E(Gt, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                h(a(r.value.installed_count) + " installed ", 1),
                r.value.missing_count ? (s(), o(A, { key: 0 }, [
                  h(" • " + a(r.value.missing_count) + " missing", 1)
                ], 64)) : d("", !0),
                r.value.untracked_count ? (s(), o(A, { key: 1 }, [
                  h(" • " + a(r.value.untracked_count) + " untracked", 1)
                ], 64)) : d("", !0)
              ]),
              _: 1
            })) : d("", !0),
            x.value ? (s(), E(Fe, {
              key: 1,
              title: "VERSION MISMATCHES",
              count: t.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                e("div", Lv, [
                  j[8] || (j[8] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, a(t.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (s(!0), o(A, null, Z(t.versionMismatches, (ae) => (s(), E(Ge, {
                  key: ae.name,
                  status: "warning"
                }, {
                  icon: l(() => [...j[9] || (j[9] = [
                    h("⚠", -1)
                  ])]),
                  title: l(() => [
                    h(a(ae.name), 1)
                  ]),
                  subtitle: l(() => [
                    e("span", Pv, [
                      e("span", Dv, a(ae.actual), 1),
                      j[10] || (j[10] = e("span", { class: "version-arrow" }, "→", -1)),
                      e("span", Nv, a(ae.expected), 1)
                    ])
                  ]),
                  actions: l(() => [
                    k(se, {
                      variant: "warning",
                      size: "sm",
                      onClick: j[2] || (j[2] = (K) => i("repair-environment"))
                    }, {
                      default: l(() => [...j[11] || (j[11] = [
                        h(" Repair ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            z.value.length ? (s(), E(Fe, {
              key: 2,
              title: "UNTRACKED",
              count: z.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(A, null, Z(z.value, (ae) => (s(), E(Ge, {
                  key: ae.name,
                  status: "warning"
                }, {
                  icon: l(() => [...j[12] || (j[12] = [
                    h("?", -1)
                  ])]),
                  title: l(() => [
                    h(a(ae.name), 1)
                  ]),
                  subtitle: l(() => [...j[13] || (j[13] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: l(() => [
                    k(Ue, {
                      label: "Used by:",
                      value: H(ae)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    k(se, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (K) => V(ae)
                    }, {
                      default: l(() => [...j[14] || (j[14] = [
                        h(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(se, {
                      variant: "primary",
                      size: "sm",
                      onClick: (K) => D(ae.name)
                    }, {
                      default: l(() => [...j[15] || (j[15] = [
                        h(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(se, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (K) => M(ae.name)
                    }, {
                      default: l(() => [...j[16] || (j[16] = [
                        h(" Remove ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            m.value.length ? (s(), E(Fe, {
              key: 3,
              title: "INSTALLED",
              count: m.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(A, null, Z(m.value, (ae) => (s(), E(Ge, {
                  key: ae.name,
                  status: "synced"
                }, {
                  icon: l(() => [
                    h(a(ae.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: l(() => [
                    h(a(ae.name), 1)
                  ]),
                  subtitle: l(() => [
                    ae.version ? (s(), o("span", Uv, a(ae.source === "development" ? "" : "v") + a(ae.version), 1)) : (s(), o("span", Ov, "version unknown")),
                    e("span", Bv, " • " + a(S(ae.source)), 1)
                  ]),
                  details: l(() => [
                    k(Ue, {
                      label: "Used by:",
                      value: H(ae)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    k(se, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (K) => V(ae)
                    }, {
                      default: l(() => [...j[17] || (j[17] = [
                        h(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(se, {
                      variant: "secondary",
                      size: "xs",
                      onClick: q
                    }, {
                      default: l(() => [...j[18] || (j[18] = [
                        h(" Manage ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            _.value.length ? (s(), E(Fe, {
              key: 4,
              title: "MISSING",
              count: _.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (s(!0), o(A, null, Z(_.value, (ae) => (s(), E(Ge, {
                  key: ae.name,
                  status: "missing"
                }, {
                  icon: l(() => [...j[19] || (j[19] = [
                    h("!", -1)
                  ])]),
                  title: l(() => [
                    h(a(ae.name), 1)
                  ]),
                  subtitle: l(() => [...j[20] || (j[20] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: l(() => [
                    k(Ue, {
                      label: "Required by:",
                      value: H(ae)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    k(se, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (K) => V(ae)
                    }, {
                      default: l(() => [...j[21] || (j[21] = [
                        h(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(se, {
                      variant: "primary",
                      size: "sm",
                      onClick: (K) => U(ae.name)
                    }, {
                      default: l(() => [...j[22] || (j[22] = [
                        h(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            !m.value.length && !_.value.length && !z.value.length ? (s(), E(at, {
              key: 5,
              icon: "📭",
              message: w.value ? `No nodes match '${w.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : d("", !0)
          ], 64))
        ]),
        _: 1
      }),
      k(ct, {
        show: b.value,
        title: "About Custom Nodes",
        onClose: j[4] || (j[4] = (ae) => b.value = !1)
      }, {
        content: l(() => [...j[23] || (j[23] = [
          e("p", null, " Custom nodes extend ComfyUI's capabilities. ComfyGit tracks nodes in your environment manifest for reproducibility. ", -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Installed:"),
            h(" Tracked nodes available in this environment"),
            e("br"),
            e("strong", null, "Missing:"),
            h(" Tracked nodes that need to be installed"),
            e("br"),
            e("strong", null, "Untracked:"),
            h(" Nodes on filesystem but not in manifest ")
          ], -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)", color: "var(--cg-color-text-muted)" } }, ` Use "Track as Dev" for local development nodes you don't want to version. `, -1)
        ])]),
        actions: l(() => [
          k(se, {
            variant: "primary",
            onClick: j[3] || (j[3] = (ae) => b.value = !1)
          }, {
            default: l(() => [...j[24] || (j[24] = [
              h(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      $.value ? (s(), E(Ev, {
        key: 0,
        node: $.value,
        onClose: j[5] || (j[5] = (ae) => $.value = null)
      }, null, 8, ["node"])) : d("", !0),
      T.value ? (s(), E(Bs, {
        key: 1,
        title: T.value.title,
        message: T.value.message,
        warning: T.value.warning,
        "confirm-label": T.value.confirmLabel,
        destructive: T.value.destructive,
        onConfirm: T.value.onConfirm,
        onCancel: j[6] || (j[6] = (ae) => T.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : d("", !0)
    ], 64));
  }
}), Av = /* @__PURE__ */ te(Fv, [["__scopeId", "data-v-1555a802"]]);
function Fs(t) {
  return "has_conflicts" in t && t.has_conflicts === !0 && Array.isArray(t.workflow_conflicts);
}
const Vv = { class: "remote-url-display" }, Wv = ["title"], jv = ["title"], Gv = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, qv = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Hv = /* @__PURE__ */ ee({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const c = t, n = C(!1), i = L(() => {
      if (c.url.length <= c.maxLength)
        return c.url;
      const g = c.url.slice(0, Math.floor(c.maxLength * 0.6)), f = c.url.slice(-Math.floor(c.maxLength * 0.3));
      return `${g}...${f}`;
    });
    async function y() {
      try {
        await navigator.clipboard.writeText(c.url), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (g) {
        console.error("Failed to copy URL:", g);
      }
    }
    return (g, f) => (s(), o("div", Vv, [
      e("span", {
        class: "url-text",
        title: t.url
      }, a(i.value), 9, Wv),
      e("button", {
        class: re(["copy-btn", { copied: n.value }]),
        onClick: y,
        title: n.value ? "Copied!" : "Copy URL"
      }, [
        n.value ? (s(), o("svg", qv, [...f[1] || (f[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (s(), o("svg", Gv, [...f[0] || (f[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, jv)
    ]));
  }
}), Kv = /* @__PURE__ */ te(Hv, [["__scopeId", "data-v-7768a58d"]]), Jv = { class: "remote-title" }, Yv = {
  key: 0,
  class: "default-badge"
}, Xv = {
  key: 1,
  class: "sync-badge"
}, Qv = {
  key: 0,
  class: "ahead"
}, Zv = {
  key: 1,
  class: "behind"
}, ef = {
  key: 1,
  class: "synced"
}, tf = ["href"], sf = {
  key: 1,
  class: "remote-url-text"
}, of = /* @__PURE__ */ ee({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(t) {
    const c = t, n = L(() => c.fetchingRemote === c.remote.name), i = L(() => c.remote.is_default), y = L(() => c.syncStatus && c.syncStatus.behind > 0), g = L(() => c.syncStatus && c.syncStatus.ahead > 0), f = L(() => c.remote.push_url !== c.remote.fetch_url), v = L(() => {
      const u = c.remote.fetch_url, p = u.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return p ? `https://${p[1]}/${p[2]}` : u.startsWith("https://") || u.startsWith("http://") ? u.replace(/\.git$/, "") : null;
    }), r = L(() => c.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (u, p) => (s(), E(Ge, {
      status: i.value ? "synced" : void 0
    }, Wt({
      icon: l(() => [
        h(a(i.value ? "🔗" : "🌐"), 1)
      ]),
      title: l(() => [
        e("div", Jv, [
          e("span", null, a(t.remote.name), 1),
          i.value ? (s(), o("span", Yv, "DEFAULT")) : d("", !0),
          t.syncStatus ? (s(), o("span", Xv, [
            t.syncStatus.ahead > 0 || t.syncStatus.behind > 0 ? (s(), o(A, { key: 0 }, [
              t.syncStatus.ahead > 0 ? (s(), o("span", Qv, "↑" + a(t.syncStatus.ahead), 1)) : d("", !0),
              t.syncStatus.behind > 0 ? (s(), o("span", Zv, "↓" + a(t.syncStatus.behind), 1)) : d("", !0)
            ], 64)) : (s(), o("span", ef, "✓ synced"))
          ])) : d("", !0)
        ])
      ]),
      subtitle: l(() => [
        v.value ? (s(), o("a", {
          key: 0,
          href: v.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url-link",
          onClick: p[0] || (p[0] = Pe(() => {
          }, ["stop"]))
        }, a(r.value), 9, tf)) : (s(), o("span", sf, a(r.value), 1))
      ]),
      actions: l(() => [
        k(se, {
          variant: "primary",
          size: "xs",
          loading: n.value,
          onClick: p[1] || (p[1] = (w) => u.$emit("fetch", t.remote.name))
        }, {
          default: l(() => [...p[6] || (p[6] = [
            h(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        k(se, {
          variant: y.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: p[2] || (p[2] = (w) => u.$emit("pull", t.remote.name))
        }, {
          default: l(() => [
            h(" Pull" + a(t.syncStatus && t.syncStatus.behind > 0 ? ` ↓${t.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        k(se, {
          variant: g.value ? "primary" : "secondary",
          size: "xs",
          disabled: !t.syncStatus,
          onClick: p[3] || (p[3] = (w) => u.$emit("push", t.remote.name))
        }, {
          default: l(() => [
            h(" Push" + a(t.syncStatus && t.syncStatus.ahead > 0 ? ` ↑${t.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        k(se, {
          variant: "secondary",
          size: "xs",
          onClick: p[4] || (p[4] = (w) => u.$emit("edit", t.remote.name))
        }, {
          default: l(() => [...p[7] || (p[7] = [
            h(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        i.value ? d("", !0) : (s(), E(se, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: p[5] || (p[5] = (w) => u.$emit("remove", t.remote.name))
        }, {
          default: l(() => [...p[8] || (p[8] = [
            h(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 2
    }, [
      f.value ? {
        name: "details",
        fn: l(() => [
          t.remote.push_url !== t.remote.fetch_url ? (s(), E(Ue, {
            key: 0,
            label: "Push URL:"
          }, {
            default: l(() => [
              k(Kv, {
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
}), nf = /* @__PURE__ */ te(of, [["__scopeId", "data-v-8310f3a8"]]), af = ["for"], lf = {
  key: 0,
  class: "base-form-field-required"
}, rf = { class: "base-form-field-input" }, df = {
  key: 1,
  class: "base-form-field-error"
}, cf = {
  key: 2,
  class: "base-form-field-hint"
}, uf = /* @__PURE__ */ ee({
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
    const c = t, n = L(() => c.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (i, y) => (s(), o("div", {
      class: re(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (s(), o("label", {
        key: 0,
        for: n.value,
        class: "base-form-field-label"
      }, [
        h(a(t.label) + " ", 1),
        t.required ? (s(), o("span", lf, "*")) : d("", !0)
      ], 8, af)) : d("", !0),
      e("div", rf, [
        Se(i.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (s(), o("span", df, a(t.error), 1)) : t.hint ? (s(), o("span", cf, a(t.hint), 1)) : d("", !0)
    ], 2));
  }
}), as = /* @__PURE__ */ te(uf, [["__scopeId", "data-v-9a1cf296"]]), mf = { class: "remote-form" }, vf = { class: "form-header" }, ff = { class: "form-body" }, gf = {
  key: 0,
  class: "form-error"
}, pf = { class: "form-actions" }, hf = /* @__PURE__ */ ee({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: c }) {
    const n = t, i = c, y = C({
      name: n.remoteName,
      fetchUrl: n.fetchUrl,
      pushUrl: n.pushUrl
    }), g = C(!1), f = C(null);
    bt(() => [n.remoteName, n.fetchUrl, n.pushUrl], () => {
      y.value = {
        name: n.remoteName,
        fetchUrl: n.fetchUrl,
        pushUrl: n.pushUrl
      };
    });
    const v = L(() => y.value.name.trim() !== "" && y.value.fetchUrl.trim() !== "");
    async function r() {
      if (!(!v.value || g.value)) {
        f.value = null, g.value = !0;
        try {
          i("submit", y.value);
        } catch (u) {
          f.value = u instanceof Error ? u.message : "Failed to submit form";
        } finally {
          g.value = !1;
        }
      }
    }
    return (u, p) => (s(), o("div", mf, [
      e("div", vf, [
        k(et, null, {
          default: l(() => [
            h(a(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", ff, [
        k(as, {
          label: "Remote Name",
          required: ""
        }, {
          default: l(() => [
            k(nt, {
              modelValue: y.value.name,
              "onUpdate:modelValue": p[0] || (p[0] = (w) => y.value.name = w),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        k(as, {
          label: "Fetch URL",
          required: ""
        }, {
          default: l(() => [
            k(nt, {
              modelValue: y.value.fetchUrl,
              "onUpdate:modelValue": p[1] || (p[1] = (w) => y.value.fetchUrl = w),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        k(as, { label: "Push URL (optional)" }, {
          default: l(() => [
            k(nt, {
              modelValue: y.value.pushUrl,
              "onUpdate:modelValue": p[2] || (p[2] = (w) => y.value.pushUrl = w),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        f.value ? (s(), o("div", gf, a(f.value), 1)) : d("", !0)
      ]),
      e("div", pf, [
        k(se, {
          variant: "primary",
          size: "md",
          disabled: !v.value,
          loading: g.value,
          onClick: r
        }, {
          default: l(() => [
            h(a(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        k(se, {
          variant: "ghost",
          size: "md",
          onClick: p[3] || (p[3] = (w) => u.$emit("cancel"))
        }, {
          default: l(() => [...p[4] || (p[4] = [
            h(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), yf = /* @__PURE__ */ te(hf, [["__scopeId", "data-v-56021b18"]]), wf = { class: "conflict-summary-box" }, kf = { class: "summary-header" }, bf = { class: "summary-text" }, _f = { key: 0 }, $f = {
  key: 1,
  class: "all-resolved"
}, Cf = { class: "summary-progress" }, xf = { class: "progress-bar" }, Sf = { class: "progress-text" }, If = /* @__PURE__ */ ee({
  __name: "ConflictSummaryBox",
  props: {
    conflictCount: {},
    resolvedCount: {},
    operationType: {}
  },
  setup(t) {
    const c = t, n = L(
      () => c.conflictCount > 0 ? c.resolvedCount / c.conflictCount * 100 : 0
    );
    return (i, y) => (s(), o("div", wf, [
      e("div", kf, [
        y[0] || (y[0] = e("span", { class: "summary-icon" }, "⚠", -1)),
        e("div", bf, [
          e("strong", null, a(t.conflictCount) + " conflict" + a(t.conflictCount !== 1 ? "s" : "") + " detected", 1),
          t.resolvedCount < t.conflictCount ? (s(), o("p", _f, " Resolve all conflicts before " + a(t.operationType) + "ing ", 1)) : (s(), o("p", $f, " All conflicts resolved - ready to " + a(t.operationType), 1))
        ])
      ]),
      e("div", Cf, [
        e("div", xf, [
          e("div", {
            class: "progress-fill",
            style: pt({ width: n.value + "%" })
          }, null, 4)
        ]),
        e("span", Sf, a(t.resolvedCount) + " / " + a(t.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), Ef = /* @__PURE__ */ te(If, [["__scopeId", "data-v-4e9e6cc9"]]), Mf = { class: "modal-header" }, Tf = { class: "modal-title" }, Rf = { class: "modal-body" }, zf = {
  key: 0,
  class: "error-box"
}, Lf = {
  key: 0,
  class: "error-hint"
}, Pf = {
  key: 1,
  class: "loading-state"
}, Df = { class: "commit-summary" }, Nf = {
  key: 0,
  class: "changes-section"
}, Uf = {
  key: 0,
  class: "change-group",
  open: ""
}, Of = { class: "change-count" }, Bf = { class: "change-list" }, Ff = {
  key: 0,
  class: "conflict-badge"
}, Af = {
  key: 1,
  class: "change-group"
}, Vf = { class: "change-count" }, Wf = { class: "change-list" }, jf = {
  key: 2,
  class: "change-group"
}, Gf = { class: "change-count" }, qf = { class: "change-list" }, Hf = {
  key: 2,
  class: "strategy-section"
}, Kf = { class: "radio-group" }, Jf = { class: "radio-option" }, Yf = { class: "radio-option" }, Xf = { class: "radio-option" }, Qf = {
  key: 3,
  class: "up-to-date"
}, Zf = { class: "modal-actions" }, Is = "comfygit.pullModelStrategy", eg = /* @__PURE__ */ ee({
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
    const n = t, i = c, y = C(localStorage.getItem(Is) || "skip");
    bt(y, (m) => {
      localStorage.setItem(Is, m);
    });
    const g = L(() => {
      var m;
      return ((m = n.error) == null ? void 0 : m.toLowerCase().includes("unrelated histories")) ?? !1;
    }), f = L(() => {
      if (!n.preview) return 0;
      const m = n.preview.changes.workflows;
      return m.added.length + m.modified.length + m.deleted.length;
    }), v = L(() => n.preview ? n.preview.changes.nodes.to_install.length : 0), r = L(() => {
      var m;
      return f.value > 0 || v.value > 0 || (((m = n.preview) == null ? void 0 : m.changes.models.count) || 0) > 0;
    }), u = L(() => n.preview && Fs(n.preview) ? n.preview : null), p = L(() => {
      var m;
      return ((m = u.value) == null ? void 0 : m.workflow_conflicts.length) ?? 0;
    }), w = L(() => {
      var m;
      return ((m = n.conflictResolutions) == null ? void 0 : m.size) ?? 0;
    }), b = L(
      () => p.value > 0 && w.value === p.value
    ), $ = L(() => !(!n.preview || n.preview.has_uncommitted_changes || u.value && !b.value));
    function T(m) {
      if (!u.value) return !1;
      const _ = m.replace(/\.json$/, "");
      return u.value.workflow_conflicts.some((z) => z.name === _);
    }
    function O(m) {
      const _ = n.conflictResolutions ? Array.from(n.conflictResolutions.values()) : void 0;
      i("pull", { modelStrategy: y.value, force: m, resolutions: _ });
    }
    return (m, _) => {
      var z, S;
      return s(), E(Ve, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: _[11] || (_[11] = (x) => m.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: _[10] || (_[10] = Pe(() => {
            }, ["stop"]))
          }, [
            e("div", Mf, [
              e("h3", Tf, "PULL FROM " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: _[0] || (_[0] = (x) => m.$emit("close"))
              }, "✕")
            ]),
            e("div", Rf, [
              t.error ? (s(), o("div", zf, [
                _[13] || (_[13] = e("span", { class: "error-icon" }, "✕", -1)),
                e("div", null, [
                  _[12] || (_[12] = e("strong", null, "PULL FAILED", -1)),
                  e("p", null, a(t.error), 1),
                  g.value ? (s(), o("p", Lf, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : d("", !0)
                ])
              ])) : t.loading ? (s(), o("div", Pf, [..._[14] || (_[14] = [
                e("span", { class: "spinner" }, "⟳", -1),
                h(" Loading preview... ", -1)
              ])])) : (z = t.preview) != null && z.has_uncommitted_changes ? (s(), o(A, { key: 2 }, [
                _[15] || (_[15] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("div", null, [
                    e("strong", null, "UNCOMMITTED CHANGES"),
                    e("p", null, "You have uncommitted changes that must be committed or discarded before pulling.")
                  ])
                ], -1)),
                _[16] || (_[16] = e("div", { class: "options-section" }, [
                  e("p", null, [
                    e("strong", null, "Options:")
                  ]),
                  e("ul", null, [
                    e("li", null, "Commit your changes first (recommended)"),
                    e("li", null, "Discard changes and force pull")
                  ])
                ], -1))
              ], 64)) : t.preview ? (s(), o(A, { key: 3 }, [
                e("div", Df, [
                  _[17] || (_[17] = e("span", { class: "icon" }, "📥", -1)),
                  h(" " + a(t.preview.commits_behind) + " commit" + a(t.preview.commits_behind !== 1 ? "s" : "") + " from " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                r.value ? (s(), o("div", Nf, [
                  _[21] || (_[21] = e("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  f.value > 0 ? (s(), o("details", Uf, [
                    e("summary", null, [
                      _[18] || (_[18] = e("span", { class: "change-type" }, "Workflows", -1)),
                      e("span", Of, a(f.value) + " changes", 1)
                    ]),
                    e("div", Bf, [
                      (s(!0), o(A, null, Z(t.preview.changes.workflows.added, (x) => (s(), o("div", {
                        key: "a-" + x,
                        class: "change-item add"
                      }, " + " + a(x), 1))), 128)),
                      (s(!0), o(A, null, Z(t.preview.changes.workflows.modified, (x) => (s(), o("div", {
                        key: "m-" + x,
                        class: "change-item modify"
                      }, [
                        h(" ~ " + a(x) + " ", 1),
                        T(x) ? (s(), o("span", Ff, "CONFLICT")) : d("", !0)
                      ]))), 128)),
                      (s(!0), o(A, null, Z(t.preview.changes.workflows.deleted, (x) => (s(), o("div", {
                        key: "d-" + x,
                        class: "change-item delete"
                      }, " - " + a(x), 1))), 128))
                    ])
                  ])) : d("", !0),
                  v.value > 0 ? (s(), o("details", Af, [
                    e("summary", null, [
                      _[19] || (_[19] = e("span", { class: "change-type" }, "Nodes", -1)),
                      e("span", Vf, a(v.value) + " to install", 1)
                    ]),
                    e("div", Wf, [
                      (s(!0), o(A, null, Z(t.preview.changes.nodes.to_install, (x) => (s(), o("div", {
                        key: x,
                        class: "change-item add"
                      }, " + " + a(x), 1))), 128))
                    ])
                  ])) : d("", !0),
                  t.preview.changes.models.count > 0 ? (s(), o("details", jf, [
                    e("summary", null, [
                      _[20] || (_[20] = e("span", { class: "change-type" }, "Models", -1)),
                      e("span", Gf, a(t.preview.changes.models.count) + " referenced", 1)
                    ]),
                    e("div", qf, [
                      (s(!0), o(A, null, Z(t.preview.changes.models.referenced, (x) => (s(), o("div", {
                        key: x,
                        class: "change-item"
                      }, a(x), 1))), 128))
                    ])
                  ])) : d("", !0)
                ])) : d("", !0),
                u.value ? (s(), E(Ef, {
                  key: 1,
                  "conflict-count": p.value,
                  "resolved-count": w.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : d("", !0),
                t.preview.changes.models.count > 0 ? (s(), o("div", Hf, [
                  _[26] || (_[26] = e("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  e("div", Kf, [
                    e("label", Jf, [
                      Oe(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": _[1] || (_[1] = (x) => y.value = x),
                        value: "all"
                      }, null, 512), [
                        [Jt, y.value]
                      ]),
                      _[22] || (_[22] = e("span", null, "Download all models", -1))
                    ]),
                    e("label", Yf, [
                      Oe(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": _[2] || (_[2] = (x) => y.value = x),
                        value: "required"
                      }, null, 512), [
                        [Jt, y.value]
                      ]),
                      _[23] || (_[23] = e("span", null, "Download required only", -1))
                    ]),
                    e("label", Xf, [
                      Oe(e("input", {
                        type: "radio",
                        "onUpdate:modelValue": _[3] || (_[3] = (x) => y.value = x),
                        value: "skip"
                      }, null, 512), [
                        [Jt, y.value]
                      ]),
                      _[24] || (_[24] = e("span", null, "Skip model downloads", -1)),
                      _[25] || (_[25] = e("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  _[27] || (_[27] = e("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : d("", !0),
                t.preview.commits_behind === 0 ? (s(), o("div", Qf, [
                  _[28] || (_[28] = e("span", { class: "icon" }, "✓", -1)),
                  h(" Already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ])) : d("", !0)
              ], 64)) : d("", !0)
            ]),
            e("div", Zf, [
              k(se, {
                variant: "secondary",
                onClick: _[4] || (_[4] = (x) => m.$emit("close"))
              }, {
                default: l(() => [..._[29] || (_[29] = [
                  h(" Cancel ", -1)
                ])]),
                _: 1
              }),
              t.error ? (s(), o(A, { key: 0 }, [
                k(se, {
                  variant: "secondary",
                  loading: t.pulling,
                  onClick: _[5] || (_[5] = (x) => O(!1))
                }, {
                  default: l(() => [..._[30] || (_[30] = [
                    h(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                k(se, {
                  variant: "destructive",
                  loading: t.pulling,
                  onClick: _[6] || (_[6] = (x) => O(!0))
                }, {
                  default: l(() => [..._[31] || (_[31] = [
                    h(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (S = t.preview) != null && S.has_uncommitted_changes ? (s(), E(se, {
                key: 1,
                variant: "destructive",
                loading: t.pulling,
                onClick: _[7] || (_[7] = (x) => O(!0))
              }, {
                default: l(() => [..._[32] || (_[32] = [
                  h(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : t.preview && t.preview.commits_behind > 0 ? (s(), o(A, { key: 2 }, [
                u.value && !b.value ? (s(), E(se, {
                  key: 0,
                  variant: "primary",
                  onClick: _[8] || (_[8] = (x) => i("openConflictResolution"))
                }, {
                  default: l(() => [
                    h(" Resolve Conflicts (" + a(w.value) + "/" + a(p.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (s(), E(se, {
                  key: 1,
                  variant: "primary",
                  loading: t.pulling,
                  disabled: !$.value,
                  onClick: _[9] || (_[9] = (x) => O(!1))
                }, {
                  default: l(() => [..._[33] || (_[33] = [
                    h(" Pull Changes ", -1)
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
}), tg = /* @__PURE__ */ te(eg, [["__scopeId", "data-v-300c7b2f"]]), sg = { class: "modal-header" }, og = { class: "modal-title" }, ng = { class: "modal-body" }, ag = {
  key: 0,
  class: "loading-state"
}, lg = {
  key: 1,
  class: "warning-box"
}, ig = {
  key: 0,
  class: "commits-section"
}, rg = { class: "commit-list" }, dg = { class: "commit-hash" }, cg = { class: "commit-message" }, ug = { class: "commit-date" }, mg = { class: "force-option" }, vg = { class: "checkbox-option" }, fg = { class: "commit-summary" }, gg = {
  key: 0,
  class: "commits-section"
}, pg = { class: "commit-list" }, hg = { class: "commit-hash" }, yg = { class: "commit-message" }, wg = { class: "commit-date" }, kg = {
  key: 1,
  class: "up-to-date"
}, bg = { class: "modal-actions" }, _g = /* @__PURE__ */ ee({
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
    const n = c, i = C(!1);
    function y(g) {
      n("push", { force: g });
    }
    return (g, f) => {
      var v, r, u;
      return s(), E(Ve, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: f[7] || (f[7] = (p) => g.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: f[6] || (f[6] = Pe(() => {
            }, ["stop"]))
          }, [
            e("div", sg, [
              e("h3", og, "PUSH TO " + a(t.remoteName.toUpperCase()), 1),
              e("button", {
                class: "modal-close",
                onClick: f[0] || (f[0] = (p) => g.$emit("close"))
              }, "✕")
            ]),
            e("div", ng, [
              t.loading ? (s(), o("div", ag, [...f[8] || (f[8] = [
                e("span", { class: "spinner" }, "⟳", -1),
                h(" Loading preview... ", -1)
              ])])) : (v = t.preview) != null && v.has_uncommitted_changes ? (s(), o("div", lg, [...f[9] || (f[9] = [
                e("span", { class: "warning-icon" }, "⚠", -1),
                e("div", null, [
                  e("strong", null, "UNCOMMITTED CHANGES"),
                  e("p", null, "Commit your changes before pushing.")
                ], -1)
              ])])) : (r = t.preview) != null && r.remote_has_new_commits ? (s(), o(A, { key: 2 }, [
                f[13] || (f[13] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("div", null, [
                    e("strong", null, "REMOTE HAS NEW COMMITS"),
                    e("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                  ])
                ], -1)),
                t.preview.commits_ahead > 0 ? (s(), o("div", ig, [
                  f[10] || (f[10] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", rg, [
                    (s(!0), o(A, null, Z(t.preview.commits, (p) => (s(), o("div", {
                      key: p.hash,
                      class: "commit-item"
                    }, [
                      e("span", dg, a(p.short_hash || p.hash.slice(0, 7)), 1),
                      e("span", cg, a(p.message), 1),
                      e("span", ug, a(p.date_relative || p.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : d("", !0),
                e("div", mg, [
                  e("label", vg, [
                    Oe(e("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": f[1] || (f[1] = (p) => i.value = p)
                    }, null, 512), [
                      [Zt, i.value]
                    ]),
                    f[11] || (f[11] = e("span", null, "Force push (overwrite remote)", -1))
                  ]),
                  f[12] || (f[12] = e("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                ])
              ], 64)) : t.preview ? (s(), o(A, { key: 3 }, [
                e("div", fg, [
                  f[14] || (f[14] = e("span", { class: "icon" }, "📤", -1)),
                  h(" Pushing " + a(t.preview.commits_ahead) + " commit" + a(t.preview.commits_ahead !== 1 ? "s" : "") + " to " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]),
                t.preview.commits_ahead > 0 ? (s(), o("div", gg, [
                  f[15] || (f[15] = e("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  e("div", pg, [
                    (s(!0), o(A, null, Z(t.preview.commits, (p) => (s(), o("div", {
                      key: p.hash,
                      class: "commit-item"
                    }, [
                      e("span", hg, a(p.short_hash || p.hash.slice(0, 7)), 1),
                      e("span", yg, a(p.message), 1),
                      e("span", wg, a(p.date_relative || p.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (s(), o("div", kg, [
                  f[16] || (f[16] = e("span", { class: "icon" }, "✓", -1)),
                  h(" Nothing to push - already up to date with " + a(t.preview.remote) + "/" + a(t.preview.branch), 1)
                ]))
              ], 64)) : d("", !0)
            ]),
            e("div", bg, [
              k(se, {
                variant: "secondary",
                onClick: f[2] || (f[2] = (p) => g.$emit("close"))
              }, {
                default: l(() => [...f[17] || (f[17] = [
                  h(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (u = t.preview) != null && u.remote_has_new_commits ? (s(), o(A, { key: 0 }, [
                k(se, {
                  variant: "secondary",
                  onClick: f[3] || (f[3] = (p) => g.$emit("pull-first"))
                }, {
                  default: l(() => [...f[18] || (f[18] = [
                    h(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                k(se, {
                  variant: "destructive",
                  disabled: !i.value,
                  loading: t.pushing,
                  onClick: f[4] || (f[4] = (p) => y(!0))
                }, {
                  default: l(() => [...f[19] || (f[19] = [
                    h(" Force Push ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ], 64)) : t.preview && t.preview.commits_ahead > 0 && !t.preview.has_uncommitted_changes ? (s(), E(se, {
                key: 1,
                variant: "primary",
                loading: t.pushing,
                onClick: f[5] || (f[5] = (p) => y(!1))
              }, {
                default: l(() => [...f[20] || (f[20] = [
                  h(" Push ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : d("", !0)
            ])
          ])
        ])) : d("", !0)
      ]);
    };
  }
}), $g = /* @__PURE__ */ te(_g, [["__scopeId", "data-v-bc6ded53"]]), Cg = { class: "resolution-choice-group" }, xg = ["disabled"], Sg = ["disabled"], Ig = /* @__PURE__ */ ee({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (s(), o("div", Cg, [
      e("button", {
        class: re(["choice-btn", "mine", { selected: t.modelValue === "take_base" }]),
        onClick: n[0] || (n[0] = (i) => c.$emit("update:modelValue", "take_base")),
        disabled: t.disabled
      }, [...n[2] || (n[2] = [
        e("span", { class: "choice-icon" }, "◀", -1),
        e("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, xg),
      e("button", {
        class: re(["choice-btn", "theirs", { selected: t.modelValue === "take_target" }]),
        onClick: n[1] || (n[1] = (i) => c.$emit("update:modelValue", "take_target")),
        disabled: t.disabled
      }, [...n[3] || (n[3] = [
        e("span", { class: "choice-label" }, "Keep Theirs", -1),
        e("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, Sg)
    ]));
  }
}), Eg = /* @__PURE__ */ te(Ig, [["__scopeId", "data-v-985715ed"]]), Mg = { class: "conflict-header" }, Tg = { class: "conflict-info" }, Rg = { class: "workflow-name" }, zg = { class: "conflict-description" }, Lg = {
  key: 0,
  class: "resolved-badge"
}, Pg = { class: "resolved-text" }, Dg = { class: "conflict-hashes" }, Ng = { class: "hash-item" }, Ug = { class: "hash-item" }, Og = { class: "conflict-actions" }, Bg = /* @__PURE__ */ ee({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(t, { emit: c }) {
    const n = t, i = c, y = C(n.resolution);
    bt(() => n.resolution, (r) => {
      y.value = r;
    }), bt(y, (r) => {
      r && i("resolve", r);
    });
    const g = L(() => y.value !== null), f = L(() => n.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), v = L(() => {
      switch (y.value) {
        case "take_base":
          return "Keep Mine";
        case "take_target":
          return "Keep Theirs";
        default:
          return "";
      }
    });
    return (r, u) => {
      var p, w;
      return s(), o("div", {
        class: re(["conflict-item", { resolved: g.value }])
      }, [
        e("div", Mg, [
          u[2] || (u[2] = e("span", { class: "conflict-icon" }, "⚠", -1)),
          e("div", Tg, [
            e("code", Rg, a(t.conflict.name) + ".json", 1),
            e("div", zg, a(f.value), 1)
          ]),
          g.value ? (s(), o("div", Lg, [
            u[1] || (u[1] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", Pg, a(v.value), 1)
          ])) : d("", !0)
        ]),
        e("div", Dg, [
          e("span", Ng, [
            u[3] || (u[3] = h("Your: ", -1)),
            e("code", null, a(((p = t.conflict.base_hash) == null ? void 0 : p.slice(0, 8)) || "n/a"), 1)
          ]),
          e("span", Ug, [
            u[4] || (u[4] = h("Theirs: ", -1)),
            e("code", null, a(((w = t.conflict.target_hash) == null ? void 0 : w.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        e("div", Og, [
          k(Eg, {
            modelValue: y.value,
            "onUpdate:modelValue": u[0] || (u[0] = (b) => y.value = b),
            disabled: t.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), Fg = /* @__PURE__ */ te(Bg, [["__scopeId", "data-v-506d3bbf"]]), Ag = { class: "resolution-content" }, Vg = {
  key: 0,
  class: "error-box"
}, Wg = { class: "resolution-header" }, jg = { class: "header-stats" }, Gg = { class: "stat" }, qg = { class: "stat-value" }, Hg = { class: "stat resolved" }, Kg = { class: "stat-value" }, Jg = {
  key: 0,
  class: "stat pending"
}, Yg = { class: "stat-value" }, Xg = { class: "conflicts-list" }, Qg = {
  key: 1,
  class: "all-resolved-message"
}, Zg = /* @__PURE__ */ ee({
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
    const n = t, i = c, y = L(() => n.resolutions.size), g = L(() => n.workflowConflicts.length - y.value), f = L(() => y.value === n.workflowConflicts.length), v = L(
      () => n.operationType === "pull" ? "Validate & Pull" : "Validate & Merge"
    );
    function r(b) {
      const $ = n.resolutions.get(b);
      return ($ == null ? void 0 : $.resolution) ?? null;
    }
    function u(b, $) {
      i("resolve", b, $);
    }
    function p() {
      i("close");
    }
    function w() {
      i("apply");
    }
    return (b, $) => (s(), E(Ye, {
      title: `Resolve Workflow Conflicts: ${t.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: p
    }, {
      body: l(() => [
        e("div", Ag, [
          t.error ? (s(), o("div", Vg, [
            $[1] || ($[1] = e("span", { class: "error-icon" }, "✕", -1)),
            e("div", null, [
              $[0] || ($[0] = e("strong", null, "Validation Failed", -1)),
              e("p", null, a(t.error), 1)
            ])
          ])) : d("", !0),
          e("div", Wg, [
            e("div", jg, [
              e("div", Gg, [
                e("span", qg, a(t.workflowConflicts.length), 1),
                $[2] || ($[2] = e("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              e("div", Hg, [
                e("span", Kg, a(y.value), 1),
                $[3] || ($[3] = e("span", { class: "stat-label" }, "resolved", -1))
              ]),
              g.value > 0 ? (s(), o("div", Jg, [
                e("span", Yg, a(g.value), 1),
                $[4] || ($[4] = e("span", { class: "stat-label" }, "pending", -1))
              ])) : d("", !0)
            ]),
            $[5] || ($[5] = e("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          e("div", Xg, [
            (s(!0), o(A, null, Z(t.workflowConflicts, (T) => (s(), E(Fg, {
              key: T.name,
              conflict: T,
              resolution: r(T.name),
              onResolve: (O) => u(T.name, O)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          f.value ? (s(), o("div", Qg, [
            $[6] || ($[6] = e("span", { class: "resolved-icon" }, "✓", -1)),
            e("span", null, 'All conflicts resolved! Click "' + a(v.value) + '" to continue.', 1)
          ])) : d("", !0)
        ])
      ]),
      footer: l(() => [
        k(me, {
          variant: "secondary",
          onClick: p
        }, {
          default: l(() => [...$[7] || ($[7] = [
            h(" Cancel ", -1)
          ])]),
          _: 1
        }),
        $[8] || ($[8] = e("div", { class: "footer-spacer" }, null, -1)),
        k(me, {
          variant: "primary",
          disabled: !f.value || t.validating,
          loading: t.validating,
          onClick: w
        }, {
          default: l(() => [
            h(a(v.value), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), ep = /* @__PURE__ */ te(Zg, [["__scopeId", "data-v-c58d150d"]]), tp = { class: "node-conflict-item" }, sp = { class: "node-header" }, op = { class: "node-name" }, np = { class: "node-id" }, ap = { class: "version-comparison" }, lp = { class: "version yours" }, ip = { class: "version theirs" }, rp = { class: "chosen-version" }, dp = { class: "chosen" }, cp = { class: "chosen-reason" }, up = { class: "affected-workflows" }, mp = { class: "wf-source" }, vp = { class: "wf-version" }, fp = /* @__PURE__ */ ee({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(t) {
    return (c, n) => (s(), o("div", tp, [
      e("div", sp, [
        e("code", op, a(t.conflict.node_name), 1),
        e("span", np, "(" + a(t.conflict.node_id) + ")", 1)
      ]),
      e("div", ap, [
        e("div", lp, [
          n[0] || (n[0] = e("span", { class: "label" }, "Your version:", -1)),
          e("code", null, a(t.conflict.base_version), 1)
        ]),
        n[2] || (n[2] = e("span", { class: "arrow" }, "→", -1)),
        e("div", ip, [
          n[1] || (n[1] = e("span", { class: "label" }, "Their version:", -1)),
          e("code", null, a(t.conflict.target_version), 1)
        ])
      ]),
      e("div", rp, [
        n[3] || (n[3] = e("span", { class: "label" }, "Will install:", -1)),
        e("code", dp, a(t.conflict.chosen_version), 1),
        e("span", cp, a(t.conflict.chosen_reason), 1)
      ]),
      e("details", up, [
        e("summary", null, " Affected workflows (" + a(t.conflict.affected_workflows.length) + ") ", 1),
        e("ul", null, [
          (s(!0), o(A, null, Z(t.conflict.affected_workflows, (i) => (s(), o("li", {
            key: i.name
          }, [
            e("code", null, a(i.name), 1),
            e("span", mp, "(" + a(i.source === "base" ? "yours" : "theirs") + ")", 1),
            e("span", vp, "needs v" + a(i.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), gp = /* @__PURE__ */ te(fp, [["__scopeId", "data-v-8b626725"]]), pp = { class: "validation-content" }, hp = {
  key: 0,
  class: "compatible-message"
}, yp = { class: "conflicts-list" }, wp = {
  key: 2,
  class: "warnings-section"
}, kp = /* @__PURE__ */ ee({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(t, { emit: c }) {
    const n = t, i = c, y = L(() => n.validation.is_compatible ? n.operationType === "pull" ? "Pull" : "Merge" : n.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (g, f) => (s(), E(Ye, {
      title: "Compatibility Check",
      size: "lg",
      onClose: f[3] || (f[3] = (v) => i("cancel"))
    }, {
      body: l(() => [
        e("div", pp, [
          t.validation.is_compatible && t.validation.node_conflicts.length === 0 ? (s(), o("div", hp, [
            f[5] || (f[5] = e("span", { class: "icon" }, "✓", -1)),
            e("div", null, [
              f[4] || (f[4] = e("strong", null, "All clear!", -1)),
              e("p", null, "Your workflow choices are compatible. Ready to " + a(t.operationType) + ".", 1)
            ])
          ])) : t.validation.node_conflicts.length > 0 ? (s(), o(A, { key: 1 }, [
            f[6] || (f[6] = e("div", { class: "warning-header" }, [
              e("span", { class: "icon" }, "⚠"),
              e("div", null, [
                e("strong", null, "Node Version Differences"),
                e("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            e("div", yp, [
              (s(!0), o(A, null, Z(t.validation.node_conflicts, (v) => (s(), E(gp, {
                key: v.node_id,
                conflict: v
              }, null, 8, ["conflict"]))), 128))
            ]),
            f[7] || (f[7] = e("div", { class: "info-box" }, [
              e("strong", null, "What happens if you proceed?"),
              e("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : d("", !0),
          t.validation.warnings.length > 0 ? (s(), o("div", wp, [
            f[8] || (f[8] = e("h4", null, "Warnings", -1)),
            e("ul", null, [
              (s(!0), o(A, null, Z(t.validation.warnings, (v, r) => (s(), o("li", { key: r }, a(v), 1))), 128))
            ])
          ])) : d("", !0)
        ])
      ]),
      footer: l(() => [
        k(me, {
          variant: "secondary",
          onClick: f[0] || (f[0] = (v) => i("cancel"))
        }, {
          default: l(() => [...f[9] || (f[9] = [
            h(" Cancel ", -1)
          ])]),
          _: 1
        }),
        f[11] || (f[11] = e("div", { class: "footer-spacer" }, null, -1)),
        k(me, {
          variant: "secondary",
          onClick: f[1] || (f[1] = (v) => i("goBack"))
        }, {
          default: l(() => [...f[10] || (f[10] = [
            h(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        k(me, {
          variant: "primary",
          loading: t.executing,
          onClick: f[2] || (f[2] = (v) => i("proceed"))
        }, {
          default: l(() => [
            h(a(y.value), 1)
          ]),
          _: 1
        }, 8, ["loading"])
      ]),
      _: 1
    }));
  }
}), bp = /* @__PURE__ */ te(kp, [["__scopeId", "data-v-fefd26ed"]]), _p = { key: 0 }, $p = /* @__PURE__ */ ee({
  __name: "RemotesSection",
  emits: ["toast"],
  setup(t, { emit: c }) {
    const n = c, {
      getRemotes: i,
      addRemote: y,
      removeRemote: g,
      updateRemoteUrl: f,
      fetchRemote: v,
      getRemoteSyncStatus: r,
      getPullPreview: u,
      pullFromRemote: p,
      getPushPreview: w,
      pushToRemote: b,
      validateMerge: $
    } = Ae(), T = C([]), O = C(null), m = C({}), _ = C(!1), z = C(null), S = C(""), x = C(!1), H = C(null), V = C(!1), q = C("add"), D = C({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), M = L(() => {
      if (!S.value.trim()) return T.value;
      const F = S.value.toLowerCase();
      return T.value.filter(
        (Q) => Q.name.toLowerCase().includes(F) || Q.fetch_url.toLowerCase().includes(F) || Q.push_url.toLowerCase().includes(F)
      );
    });
    async function U() {
      _.value = !0, z.value = null;
      try {
        const F = await i();
        T.value = F.remotes, O.value = F.current_branch_tracking || null, await Promise.all(
          F.remotes.map(async (Q) => {
            const ke = await r(Q.name);
            ke && (m.value[Q.name] = ke);
          })
        );
      } catch (F) {
        z.value = F instanceof Error ? F.message : "Failed to load remotes";
      } finally {
        _.value = !1;
      }
    }
    function ne() {
      q.value = "add", D.value = { name: "", fetchUrl: "", pushUrl: "" }, V.value = !0;
    }
    function oe(F) {
      const Q = T.value.find((ke) => ke.name === F);
      Q && (q.value = "edit", D.value = {
        name: Q.name,
        fetchUrl: Q.fetch_url,
        pushUrl: Q.push_url
      }, V.value = !0);
    }
    async function j(F) {
      try {
        q.value === "add" ? await y(F.name, F.fetchUrl) : await f(F.name, F.fetchUrl, F.pushUrl || void 0), V.value = !1, await U();
      } catch (Q) {
        z.value = Q instanceof Error ? Q.message : "Operation failed";
      }
    }
    function ae() {
      V.value = !1, D.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function K(F) {
      H.value = F;
      try {
        await v(F);
        const Q = await r(F);
        Q && (m.value[F] = Q), n("toast", `✓ Fetched from ${F}`, "success");
      } catch (Q) {
        n("toast", Q instanceof Error ? Q.message : "Fetch failed", "error");
      } finally {
        H.value = null;
      }
    }
    async function N(F) {
      if (confirm(`Remove remote "${F}"?`))
        try {
          await g(F), await U();
        } catch (Q) {
          z.value = Q instanceof Error ? Q.message : "Failed to remove remote";
        }
    }
    function P() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const I = C("idle"), ie = L(() => I.value === "pull_preview"), Y = L(
      () => I.value === "resolving" || I.value === "validating"
    ), Te = L(
      () => I.value === "validation_review" || I.value === "executing"
    ), _e = C(!1), de = C(null), le = C(!1), ce = C(null), ve = C(!1), Le = C(null), he = C(null), Ce = C(/* @__PURE__ */ new Map()), ge = C(null), X = C(null), Re = L(() => Le.value && Fs(Le.value) ? Le.value : null);
    async function Ee(F) {
      ce.value = F, I.value = "pull_preview", ve.value = !0, Le.value = null, he.value = null;
      try {
        Le.value = await u(F);
      } catch (Q) {
        he.value = Q instanceof Error ? Q.message : "Failed to load pull preview";
      } finally {
        ve.value = !1;
      }
    }
    function we() {
      I.value = "idle", Le.value = null, he.value = null, ce.value = null;
    }
    async function pe(F) {
      if (!ce.value) return;
      I.value = "executing", he.value = null;
      const Q = ce.value;
      try {
        const ke = await p(Q, F);
        if (ke.rolled_back) {
          he.value = `Pull failed and was rolled back: ${ke.error || "Unknown error"}`, I.value = "pull_preview";
          return;
        }
        De(), I.value = "idle", n("toast", `✓ Pulled from ${Q}`, "success"), await U();
      } catch (ke) {
        he.value = ke instanceof Error ? ke.message : "Pull failed", I.value = "pull_preview";
      }
    }
    function Ke() {
      Re.value && (I.value = "resolving", X.value = null);
    }
    function Xe(F, Q) {
      Ce.value.set(F, { name: F, resolution: Q });
    }
    function _t() {
      I.value = "pull_preview";
    }
    async function be() {
      I.value = "validating", X.value = null;
      try {
        const F = Array.from(Ce.value.values());
        ge.value = await $(ce.value, F), I.value = "validation_review";
      } catch (F) {
        X.value = F instanceof Error ? F.message : "Validation failed", I.value = "resolving";
      }
    }
    async function We() {
      I.value = "executing";
      const F = ce.value;
      try {
        const Q = Array.from(Ce.value.values()), ke = await p(F, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: Q
        });
        if (ke.rolled_back) {
          he.value = `Pull failed and was rolled back: ${ke.error || "Unknown error"}`, I.value = "pull_preview";
          return;
        }
        De(), I.value = "idle", n("toast", `✓ Pulled from ${F}`, "success"), await U();
      } catch (Q) {
        he.value = Q instanceof Error ? Q.message : "Pull failed", I.value = "validation_review";
      }
    }
    function wt() {
      I.value = "resolving";
    }
    function ut() {
      De(), I.value = "idle";
    }
    function De() {
      Ce.value.clear(), ge.value = null, X.value = null, he.value = null, Le.value = null, ce.value = null;
    }
    async function $t(F) {
      ce.value = F, _e.value = !0, ve.value = !0, de.value = null;
      try {
        de.value = await w(F);
      } catch (Q) {
        z.value = Q instanceof Error ? Q.message : "Failed to load push preview";
      } finally {
        ve.value = !1;
      }
    }
    function lt() {
      _e.value = !1, de.value = null, ce.value = null;
    }
    async function J(F) {
      if (!ce.value) return;
      le.value = !0;
      const Q = ce.value;
      try {
        await b(Q, F), lt(), n("toast", `✓ Pushed to ${Q}`, "success"), await U();
      } catch (ke) {
        n("toast", ke instanceof Error ? ke.message : "Push failed", "error");
      } finally {
        le.value = !1;
      }
    }
    function B() {
      const F = ce.value;
      lt(), F && Ee(F);
    }
    return Be(U), (F, Q) => (s(), o(A, null, [
      k(qe, null, {
        header: l(() => [
          k(He, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: Q[0] || (Q[0] = (ke) => x.value = !0)
          }, {
            actions: l(() => [
              V.value ? d("", !0) : (s(), E(se, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: ne
              }, {
                default: l(() => [...Q[3] || (Q[3] = [
                  h(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          V.value ? d("", !0) : (s(), E(zt, {
            key: 0,
            modelValue: S.value,
            "onUpdate:modelValue": Q[1] || (Q[1] = (ke) => S.value = ke),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: l(() => [
          _.value ? (s(), E(ht, {
            key: 0,
            message: "Loading remotes..."
          })) : z.value ? (s(), E(yt, {
            key: 1,
            message: z.value,
            retry: !0,
            onRetry: U
          }, null, 8, ["message"])) : (s(), o(A, { key: 2 }, [
            V.value ? (s(), E(yf, {
              key: 0,
              mode: q.value,
              "remote-name": D.value.name,
              "fetch-url": D.value.fetchUrl,
              "push-url": D.value.pushUrl,
              onSubmit: j,
              onCancel: ae
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : d("", !0),
            T.value.length && !V.value ? (s(), E(Gt, {
              key: 1,
              variant: "compact"
            }, {
              default: l(() => [
                h(" Total: " + a(T.value.length) + " remote" + a(T.value.length !== 1 ? "s" : "") + " ", 1),
                O.value ? (s(), o("span", _p, " • Tracking: " + a(O.value.remote) + "/" + a(O.value.branch), 1)) : d("", !0)
              ]),
              _: 1
            })) : d("", !0),
            M.value.length && !V.value ? (s(), E(Fe, {
              key: 2,
              title: "REMOTES",
              count: M.value.length
            }, {
              default: l(() => [
                (s(!0), o(A, null, Z(M.value, (ke) => (s(), E(nf, {
                  key: ke.name,
                  remote: ke,
                  "sync-status": m.value[ke.name],
                  "fetching-remote": H.value,
                  onFetch: K,
                  onEdit: oe,
                  onRemove: N,
                  onPull: Ee,
                  onPush: $t
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            !M.value.length && !V.value ? (s(), E(at, {
              key: 3,
              icon: "🌐",
              message: S.value ? `No remotes match '${S.value}'` : "No remotes configured."
            }, {
              actions: l(() => [
                k(se, {
                  variant: "primary",
                  onClick: ne
                }, {
                  default: l(() => [...Q[4] || (Q[4] = [
                    h(" Add Your First Remote ", -1)
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
      k(ct, {
        show: x.value,
        title: "About Git Remotes",
        onClose: Q[2] || (Q[2] = (ke) => x.value = !1)
      }, {
        content: l(() => [...Q[5] || (Q[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            h(" The "),
            e("strong", null, '"origin"'),
            h(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: l(() => [
          k(se, {
            variant: "link",
            onClick: P
          }, {
            default: l(() => [...Q[6] || (Q[6] = [
              h(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      k(tg, {
        show: ie.value,
        "remote-name": ce.value || "",
        preview: Le.value,
        loading: ve.value,
        pulling: I.value === "executing",
        error: he.value,
        "conflict-resolutions": Ce.value,
        onClose: we,
        onPull: pe,
        onOpenConflictResolution: Ke
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      k($g, {
        show: _e.value,
        "remote-name": ce.value || "",
        preview: de.value,
        loading: ve.value,
        pushing: le.value,
        onClose: lt,
        onPush: J,
        onPullFirst: B
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      Y.value && Re.value ? (s(), E(ep, {
        key: 0,
        "workflow-conflicts": Re.value.workflow_conflicts,
        resolutions: Ce.value,
        "operation-type": "pull",
        validating: I.value === "validating",
        error: X.value,
        onClose: _t,
        onResolve: Xe,
        onApply: be
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : d("", !0),
      Te.value && ge.value ? (s(), E(bp, {
        key: 1,
        validation: ge.value,
        "operation-type": "pull",
        executing: I.value === "executing",
        onProceed: We,
        onGoBack: wt,
        onCancel: ut
      }, null, 8, ["validation", "executing"])) : d("", !0)
    ], 64));
  }
}), Cp = /* @__PURE__ */ te($p, [["__scopeId", "data-v-9ae3b76d"]]), xp = { class: "setting-info" }, Sp = { class: "setting-label" }, Ip = {
  key: 0,
  class: "required-marker"
}, Ep = {
  key: 0,
  class: "setting-description"
}, Mp = { class: "setting-control" }, Tp = /* @__PURE__ */ ee({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (c, n) => (s(), o("div", {
      class: re(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", xp, [
        e("div", Sp, [
          h(a(t.label) + " ", 1),
          t.required ? (s(), o("span", Ip, "*")) : d("", !0)
        ]),
        t.description ? (s(), o("div", Ep, a(t.description), 1)) : d("", !0)
      ]),
      e("div", Mp, [
        Se(c.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), Nt = /* @__PURE__ */ te(Tp, [["__scopeId", "data-v-cb5d236c"]]), Rp = { class: "toggle" }, zp = ["checked", "disabled"], Lp = /* @__PURE__ */ ee({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (s(), o("label", Rp, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: n[0] || (n[0] = (i) => c.$emit("update:modelValue", i.target.checked)),
        class: "toggle-input"
      }, null, 40, zp),
      n[1] || (n[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), ls = /* @__PURE__ */ te(Lp, [["__scopeId", "data-v-71c0f550"]]), Pp = { class: "settings-section" }, Dp = { class: "path-setting" }, Np = { class: "path-value" }, Up = { class: "path-setting" }, Op = { class: "path-value" }, Bp = { class: "settings-section" }, Fp = { class: "settings-section" }, Ap = { class: "settings-section" }, Vp = /* @__PURE__ */ ee({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const { getConfig: c, updateConfig: n } = Ae(), i = C(!1), y = C(null), g = C(null), f = C(null), v = C(null), r = C(""), u = C(""), p = C(!0), w = C(!0), b = C(!1), $ = L(() => v.value ? r.value !== (v.value.civitai_api_key || "") : !1);
    async function T() {
      i.value = !0, y.value = null;
      try {
        f.value = await c(), v.value = { ...f.value }, r.value = f.value.civitai_api_key || "", u.value = f.value.huggingface_token || "", p.value = f.value.auto_sync_models, w.value = f.value.confirm_destructive;
        const z = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        b.value = z === "true";
      } catch (z) {
        y.value = z instanceof Error ? z.message : "Failed to load settings";
      } finally {
        i.value = !1;
      }
    }
    async function O() {
      var z;
      g.value = null;
      try {
        const S = {};
        r.value !== (((z = v.value) == null ? void 0 : z.civitai_api_key) || "") && (S.civitai_api_key = r.value || null), await n(S), await T(), g.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          g.value = null;
        }, 3e3);
      } catch (S) {
        g.value = {
          type: "error",
          message: S instanceof Error ? S.message : "Failed to save settings"
        };
      }
    }
    function m() {
      v.value && (r.value = v.value.civitai_api_key || "", u.value = v.value.huggingface_token || "", p.value = v.value.auto_sync_models, w.value = v.value.confirm_destructive, g.value = null);
    }
    function _(z) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(z)), console.log("[ComfyGit] Auto-refresh setting saved:", z);
    }
    return Be(T), (z, S) => (s(), E(qe, null, {
      header: l(() => [
        k(He, { title: "WORKSPACE SETTINGS" }, {
          actions: l(() => [
            k(se, {
              variant: "primary",
              size: "sm",
              disabled: !$.value,
              onClick: O
            }, {
              default: l(() => [...S[5] || (S[5] = [
                h(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            $.value ? (s(), E(se, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: m
            }, {
              default: l(() => [...S[6] || (S[6] = [
                h(" Reset ", -1)
              ])]),
              _: 1
            })) : d("", !0)
          ]),
          _: 1
        })
      ]),
      content: l(() => [
        i.value ? (s(), E(ht, {
          key: 0,
          message: "Loading workspace settings..."
        })) : y.value ? (s(), E(yt, {
          key: 1,
          message: y.value,
          retry: !0,
          onRetry: T
        }, null, 8, ["message"])) : (s(), o(A, { key: 2 }, [
          k(Fe, { title: "WORKSPACE PATHS" }, {
            default: l(() => {
              var x, H;
              return [
                e("div", Pp, [
                  e("div", Dp, [
                    S[7] || (S[7] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                    S[8] || (S[8] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                    e("div", Np, a(((x = f.value) == null ? void 0 : x.workspace_path) || "Loading..."), 1)
                  ]),
                  e("div", Up, [
                    S[9] || (S[9] = e("div", { class: "path-label" }, "Models Directory", -1)),
                    S[10] || (S[10] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                    e("div", Op, a(((H = f.value) == null ? void 0 : H.models_path) || "Not configured"), 1)
                  ])
                ])
              ];
            }),
            _: 1
          }),
          k(Fe, { title: "API CREDENTIALS" }, {
            default: l(() => [
              e("div", Bp, [
                k(Nt, {
                  label: "CivitAI API Key",
                  description: "API key for downloading models from CivitAI"
                }, {
                  default: l(() => [
                    k(es, {
                      modelValue: r.value,
                      "onUpdate:modelValue": S[0] || (S[0] = (x) => r.value = x),
                      type: "password",
                      placeholder: "Enter CivitAI API key...",
                      style: { minWidth: "300px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                k(Nt, {
                  label: "HuggingFace Token",
                  description: "Token for accessing HuggingFace models (not yet supported)",
                  disabled: !0
                }, {
                  default: l(() => [
                    k(es, {
                      modelValue: u.value,
                      "onUpdate:modelValue": S[1] || (S[1] = (x) => u.value = x),
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
          k(Fe, { title: "UI SETTINGS" }, {
            default: l(() => [
              e("div", Fp, [
                k(Nt, {
                  label: "Auto-Refresh After Git Operations",
                  description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
                }, {
                  default: l(() => [
                    k(ls, {
                      modelValue: b.value,
                      "onUpdate:modelValue": [
                        S[2] || (S[2] = (x) => b.value = x),
                        _
                      ]
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          k(Fe, { title: "ADDITIONAL SETTINGS (Coming Soon)" }, {
            default: l(() => [
              e("div", Ap, [
                k(Nt, {
                  label: "Auto-Sync Models",
                  description: "Automatically sync models when switching environments (not yet supported)",
                  disabled: !0
                }, {
                  default: l(() => [
                    k(ls, {
                      modelValue: p.value,
                      "onUpdate:modelValue": S[3] || (S[3] = (x) => p.value = x),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                k(Nt, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations (not yet supported)",
                  disabled: !0
                }, {
                  default: l(() => [
                    k(ls, {
                      modelValue: w.value,
                      "onUpdate:modelValue": S[4] || (S[4] = (x) => w.value = x),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          g.value ? (s(), E(Gt, {
            key: 0,
            variant: (g.value.type === "success", "compact")
          }, {
            default: l(() => [
              e("span", {
                style: pt({ color: g.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, a(g.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : d("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), Wp = /* @__PURE__ */ te(Vp, [["__scopeId", "data-v-7861bd35"]]), jp = /* @__PURE__ */ ee({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: c, getWorkspaceLogPath: n, openFile: i } = Ae(), y = C([]), g = C(!1), f = C(null), v = C(!1), r = C(null), u = C(null), p = C(!1), w = L(() => y.value.length === 0 ? [] : y.value.map((O) => ({
      text: `${O.timestamp} - ${O.name} - ${O.level} - ${O.func}:${O.line} - ${O.message}`,
      level: O.level
    })));
    async function b() {
      g.value = !0, f.value = null;
      try {
        y.value = await c(void 0, 500);
      } catch (O) {
        f.value = O instanceof Error ? O.message : "Failed to load workspace logs";
      } finally {
        g.value = !1, setTimeout(() => {
          var O;
          (O = r.value) != null && O.parentElement && (r.value.parentElement.scrollTop = r.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    async function $() {
      try {
        const O = await n();
        O.exists && (u.value = O.path);
      } catch {
      }
    }
    async function T() {
      if (u.value) {
        p.value = !0;
        try {
          await i(u.value);
        } catch (O) {
          console.error("Failed to open log file:", O);
        } finally {
          p.value = !1;
        }
      }
    }
    return Be(() => {
      b(), $();
    }), (O, m) => (s(), o(A, null, [
      k(qe, null, {
        header: l(() => [
          k(He, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: m[0] || (m[0] = (_) => v.value = !0)
          }, {
            actions: l(() => [
              k(se, {
                variant: "secondary",
                size: "sm",
                onClick: T,
                disabled: !u.value || p.value,
                title: "Open log file in default editor"
              }, {
                default: l(() => [
                  h(a(p.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              k(se, {
                variant: "secondary",
                size: "sm",
                onClick: b,
                disabled: g.value
              }, {
                default: l(() => [
                  h(a(g.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: l(() => [
          g.value ? (s(), E(ht, {
            key: 0,
            message: "Loading workspace logs..."
          })) : f.value ? (s(), E(yt, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: b
          }, null, 8, ["message"])) : (s(), o(A, { key: 2 }, [
            y.value.length === 0 ? (s(), E(at, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: r,
              class: "log-output"
            }, [
              (s(!0), o(A, null, Z(w.value, (_, z) => (s(), o("div", {
                key: z,
                class: re(`log-line log-level-${_.level.toLowerCase()}`)
              }, a(_.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      k(ct, {
        show: v.value,
        title: "About Workspace Logs",
        onClose: m[2] || (m[2] = (_) => v.value = !1)
      }, {
        content: l(() => [...m[3] || (m[3] = [
          e("p", null, " Workspace logs show system-level events and operations for the entire ComfyGit workspace, including operations that affect multiple environments. ", -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Log Levels:"),
            e("br"),
            e("strong", null, "ERROR:"),
            h(" Critical failures requiring attention"),
            e("br"),
            e("strong", null, "WARNING:"),
            h(" Potential issues or deprecated features"),
            e("br"),
            e("strong", null, "INFO:"),
            h(" General operational information"),
            e("br"),
            e("strong", null, "DEBUG:"),
            h(" Detailed debugging information ")
          ], -1),
          e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1)
        ])]),
        actions: l(() => [
          k(se, {
            variant: "primary",
            onClick: m[1] || (m[1] = (_) => v.value = !1)
          }, {
            default: l(() => [...m[4] || (m[4] = [
              h(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Gp = /* @__PURE__ */ te(jp, [["__scopeId", "data-v-7f05352a"]]), qp = /* @__PURE__ */ ee({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: c, getStatus: n, getEnvironmentLogPath: i, openFile: y } = Ae(), g = C([]), f = C(!1), v = C(null), r = C(!1), u = C("production"), p = C(null), w = C(null), b = C(!1), $ = L(() => g.value.length === 0 ? [] : g.value.map((_) => ({
      text: `${_.timestamp} - ${_.name} - ${_.level} - ${_.func}:${_.line} - ${_.message}`,
      level: _.level
    })));
    async function T() {
      f.value = !0, v.value = null;
      try {
        g.value = await c(void 0, 500);
        try {
          const _ = await n();
          u.value = _.environment || "production";
        } catch {
        }
      } catch (_) {
        v.value = _ instanceof Error ? _.message : "Failed to load environment logs";
      } finally {
        f.value = !1, setTimeout(() => {
          var _;
          (_ = p.value) != null && _.parentElement && (p.value.parentElement.scrollTop = p.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    async function O() {
      try {
        const _ = await i();
        _.exists && (w.value = _.path);
      } catch {
      }
    }
    async function m() {
      if (w.value) {
        b.value = !0;
        try {
          await y(w.value);
        } catch (_) {
          console.error("Failed to open log file:", _);
        } finally {
          b.value = !1;
        }
      }
    }
    return Be(() => {
      T(), O();
    }), (_, z) => (s(), o(A, null, [
      k(qe, null, {
        header: l(() => [
          k(He, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: z[0] || (z[0] = (S) => r.value = !0)
          }, {
            actions: l(() => [
              k(se, {
                variant: "secondary",
                size: "sm",
                onClick: m,
                disabled: !w.value || b.value,
                title: "Open log file in default editor"
              }, {
                default: l(() => [
                  h(a(b.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              k(se, {
                variant: "secondary",
                size: "sm",
                onClick: T,
                disabled: f.value
              }, {
                default: l(() => [
                  h(a(f.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: l(() => [
          f.value ? (s(), E(ht, {
            key: 0,
            message: "Loading environment logs..."
          })) : v.value ? (s(), E(yt, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: T
          }, null, 8, ["message"])) : (s(), o(A, { key: 2 }, [
            g.value.length === 0 ? (s(), E(at, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: p,
              class: "log-output"
            }, [
              (s(!0), o(A, null, Z($.value, (S, x) => (s(), o("div", {
                key: x,
                class: re(`log-line log-level-${S.level.toLowerCase()}`)
              }, a(S.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      k(ct, {
        show: r.value,
        title: "About Environment Logs",
        onClose: z[2] || (z[2] = (S) => r.value = !1)
      }, {
        content: l(() => [
          e("p", null, [
            z[3] || (z[3] = h(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, a(u.value), 1),
            z[4] || (z[4] = h(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          z[5] || (z[5] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            e("strong", null, "Log Levels:"),
            e("br"),
            e("strong", null, "ERROR:"),
            h(" Critical failures requiring attention"),
            e("br"),
            e("strong", null, "WARNING:"),
            h(" Potential issues or important notices"),
            e("br"),
            e("strong", null, "INFO:"),
            h(" General operational information"),
            e("br"),
            e("strong", null, "DEBUG:"),
            h(" Detailed debugging information ")
          ], -1)),
          z[6] || (z[6] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: l(() => [
          k(se, {
            variant: "primary",
            onClick: z[1] || (z[1] = (S) => r.value = !1)
          }, {
            default: l(() => [...z[7] || (z[7] = [
              h(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Hp = /* @__PURE__ */ te(qp, [["__scopeId", "data-v-6f8db7ce"]]), Kp = { class: "env-title" }, Jp = {
  key: 0,
  class: "current-badge"
}, Yp = {
  key: 0,
  class: "branch-info"
}, Xp = /* @__PURE__ */ ee({
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
    return (c, n) => (s(), E(Ge, {
      status: t.isCurrent ? "synced" : void 0
    }, Wt({
      icon: l(() => [
        h(a(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: l(() => [
        e("div", Kp, [
          e("span", null, a(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (s(), o("span", Jp, "CURRENT")) : d("", !0)
        ])
      ]),
      subtitle: l(() => [
        t.currentBranch ? (s(), o("span", Yp, [
          n[0] || (n[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          h(" " + a(t.currentBranch), 1)
        ])) : d("", !0)
      ]),
      actions: l(() => [
        Se(c.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      t.showDetails ? {
        name: "details",
        fn: l(() => [
          k(Ue, {
            label: "Workflows:",
            value: String(t.workflowCount)
          }, null, 8, ["value"]),
          k(Ue, {
            label: "Nodes:",
            value: String(t.nodeCount)
          }, null, 8, ["value"]),
          k(Ue, {
            label: "Models:",
            value: String(t.modelCount)
          }, null, 8, ["value"]),
          t.lastUsed && t.showLastUsed ? (s(), E(Ue, {
            key: 0,
            label: "Last used:",
            value: t.lastUsed
          }, null, 8, ["value"])) : d("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), Qp = /* @__PURE__ */ te(Xp, [["__scopeId", "data-v-9231917a"]]), Zp = { class: "env-details" }, eh = { class: "status-row" }, th = {
  key: 0,
  class: "detail-row"
}, sh = { class: "value mono" }, oh = {
  key: 1,
  class: "detail-row"
}, nh = { class: "value mono small" }, ah = { class: "detail-row" }, lh = { class: "value" }, ih = { class: "detail-row" }, rh = { class: "value" }, dh = { class: "detail-row" }, ch = { class: "value" }, uh = {
  key: 2,
  class: "section-divider"
}, mh = {
  key: 3,
  class: "detail-row"
}, vh = { class: "value" }, fh = {
  key: 4,
  class: "detail-row"
}, gh = { class: "value" }, ph = { class: "footer-actions" }, hh = /* @__PURE__ */ ee({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete"],
  setup(t, { emit: c }) {
    const n = c;
    function i(y) {
      if (!y) return "Unknown";
      try {
        const g = new Date(y), v = (/* @__PURE__ */ new Date()).getTime() - g.getTime(), r = Math.floor(v / 6e4), u = Math.floor(v / 36e5), p = Math.floor(v / 864e5);
        return r < 1 ? "just now" : r < 60 ? `${r} ${r === 1 ? "minute" : "minutes"} ago` : u < 24 ? `${u} ${u === 1 ? "hour" : "hours"} ago` : p < 30 ? `${p} ${p === 1 ? "day" : "days"} ago` : g.toLocaleDateString();
      } catch {
        return y;
      }
    }
    return (y, g) => (s(), E(Ye, {
      title: `ENVIRONMENT DETAILS: ${t.environment.name.toUpperCase()}`,
      size: "md",
      onClose: g[2] || (g[2] = (f) => n("close"))
    }, {
      body: l(() => [
        e("div", Zp, [
          e("div", eh, [
            g[3] || (g[3] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: re(["status-badge", t.environment.is_current ? "current" : "inactive"])
            }, a(t.environment.is_current ? "Current" : "Inactive"), 3)
          ]),
          t.environment.current_branch ? (s(), o("div", th, [
            g[4] || (g[4] = e("span", { class: "label" }, "Branch:", -1)),
            e("span", sh, a(t.environment.current_branch), 1)
          ])) : d("", !0),
          t.environment.path ? (s(), o("div", oh, [
            g[5] || (g[5] = e("span", { class: "label" }, "Path:", -1)),
            e("span", nh, a(t.environment.path), 1)
          ])) : d("", !0),
          g[11] || (g[11] = e("div", { class: "section-divider" }, null, -1)),
          e("div", ah, [
            g[6] || (g[6] = e("span", { class: "label" }, "Workflows:", -1)),
            e("span", lh, a(t.environment.workflow_count), 1)
          ]),
          e("div", ih, [
            g[7] || (g[7] = e("span", { class: "label" }, "Nodes:", -1)),
            e("span", rh, a(t.environment.node_count), 1)
          ]),
          e("div", dh, [
            g[8] || (g[8] = e("span", { class: "label" }, "Models:", -1)),
            e("span", ch, a(t.environment.model_count), 1)
          ]),
          t.environment.created_at || t.environment.last_used ? (s(), o("div", uh)) : d("", !0),
          t.environment.created_at ? (s(), o("div", mh, [
            g[9] || (g[9] = e("span", { class: "label" }, "Created:", -1)),
            e("span", vh, a(i(t.environment.created_at)), 1)
          ])) : d("", !0),
          t.environment.last_used ? (s(), o("div", fh, [
            g[10] || (g[10] = e("span", { class: "label" }, "Last Used:", -1)),
            e("span", gh, a(i(t.environment.last_used)), 1)
          ])) : d("", !0)
        ])
      ]),
      footer: l(() => [
        e("div", ph, [
          t.canDelete ? (s(), E(me, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: g[0] || (g[0] = (f) => n("delete", t.environment.name))
          }, {
            default: l(() => [...g[12] || (g[12] = [
              h(" Delete ", -1)
            ])]),
            _: 1
          })) : d("", !0),
          g[14] || (g[14] = e("div", { class: "footer-spacer" }, null, -1)),
          k(me, {
            variant: "secondary",
            size: "sm",
            onClick: g[1] || (g[1] = (f) => n("close"))
          }, {
            default: l(() => [...g[13] || (g[13] = [
              h(" Close ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), yh = /* @__PURE__ */ te(hh, [["__scopeId", "data-v-59855453"]]), As = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], Vs = "3.12", gs = [
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
], Ws = "auto", wh = { class: "progress-bar" }, kh = /* @__PURE__ */ ee({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const c = t, n = L(() => `${Math.max(0, Math.min(100, c.progress))}%`);
    return (i, y) => (s(), o("div", wh, [
      e("div", {
        class: re(["progress-fill", t.variant]),
        style: pt({ width: n.value })
      }, null, 6)
    ]));
  }
}), js = /* @__PURE__ */ te(kh, [["__scopeId", "data-v-1beb0512"]]), bh = { class: "task-progress" }, _h = { class: "progress-info" }, $h = { class: "progress-percentage" }, Ch = { class: "progress-message" }, xh = {
  key: 0,
  class: "progress-steps"
}, Sh = { class: "step-icon" }, Ih = { class: "step-label" }, Eh = /* @__PURE__ */ ee({
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
    function n(y) {
      const g = c.steps.find((f) => f.id === y);
      return g ? c.progress >= g.progressThreshold ? "completed" : c.currentPhase === y ? "active" : "pending" : "pending";
    }
    function i(y) {
      const g = n(y);
      return g === "completed" ? "✓" : g === "active" ? "⟳" : "○";
    }
    return (y, g) => (s(), o("div", bh, [
      k(js, {
        progress: t.progress,
        variant: t.variant
      }, null, 8, ["progress", "variant"]),
      e("div", _h, [
        e("span", $h, a(t.progress) + "%", 1),
        e("span", Ch, a(t.message), 1)
      ]),
      t.showSteps && t.steps.length > 0 ? (s(), o("div", xh, [
        (s(!0), o(A, null, Z(t.steps, (f) => (s(), o("div", {
          key: f.id,
          class: re(["step", n(f.id)])
        }, [
          e("span", Sh, a(i(f.id)), 1),
          e("span", Ih, a(f.label), 1)
        ], 2))), 128))
      ])) : d("", !0)
    ]));
  }
}), ss = /* @__PURE__ */ te(Eh, [["__scopeId", "data-v-9d1de66c"]]), Mh = {
  key: 0,
  class: "create-env-form"
}, Th = { class: "form-field" }, Rh = { class: "form-field" }, zh = ["value"], Lh = { class: "form-field" }, Ph = ["disabled"], Dh = ["value"], Nh = { class: "form-field" }, Uh = ["value"], Oh = { class: "form-field form-field--checkbox" }, Bh = { class: "form-checkbox" }, Fh = {
  key: 1,
  class: "create-env-progress"
}, Ah = { class: "creating-intro" }, Vh = {
  key: 0,
  class: "progress-warning"
}, Wh = {
  key: 1,
  class: "create-error"
}, jh = { class: "error-message" }, Gh = {
  key: 1,
  class: "footer-status"
}, qh = 10, Hh = /* @__PURE__ */ ee({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(t, { emit: c }) {
    const n = c, { getComfyUIReleases: i, createEnvironment: y, getCreateProgress: g } = Ae(), f = C(""), v = C(Vs), r = C("latest"), u = C(Ws), p = C(!1), w = C([{ tag_name: "latest", name: "Latest", published_at: "" }]), b = C(!1), $ = C(!1), T = C({
      progress: 0,
      message: ""
    });
    let O = null, m = 0;
    const _ = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], z = C(null);
    function S() {
      $.value || n("close");
    }
    async function x() {
      const M = f.value.trim();
      if (M) {
        $.value = !0, T.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const U = {
            name: M,
            python_version: v.value,
            comfyui_version: r.value,
            torch_backend: u.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, ne = await y(U);
          ne.status === "started" ? H() : ne.status === "error" && (T.value = {
            progress: 0,
            message: ne.message || "Failed to start creation",
            error: ne.message
          });
        } catch (U) {
          T.value = {
            progress: 0,
            message: U instanceof Error ? U.message : "Unknown error",
            error: U instanceof Error ? U.message : "Unknown error"
          };
        }
      }
    }
    function H() {
      O || (m = 0, O = window.setInterval(async () => {
        try {
          const M = await g();
          m = 0, T.value = {
            progress: M.progress ?? 0,
            message: M.message,
            phase: M.phase,
            error: M.error
          }, M.state === "complete" ? (V(), n("created", M.environment_name || f.value.trim(), p.value)) : M.state === "error" ? (V(), T.value.error = M.error || M.message) : M.state === "idle" && $.value && (V(), T.value.error = "Creation was interrupted. Please try again.");
        } catch {
          m++, m >= qh && (V(), T.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function V() {
      O && (clearInterval(O), O = null);
    }
    function q() {
      $.value = !1, T.value = { progress: 0, message: "" }, n("close");
    }
    async function D() {
      b.value = !0;
      try {
        w.value = await i();
      } catch (M) {
        console.error("Failed to load ComfyUI releases:", M);
      } finally {
        b.value = !1;
      }
    }
    return Be(async () => {
      var M;
      await io(), (M = z.value) == null || M.focus(), D();
    }), zs(() => {
      V();
    }), (M, U) => (s(), E(Ye, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !$.value,
      onClose: S
    }, {
      body: l(() => [
        $.value ? (s(), o("div", Fh, [
          e("p", Ah, [
            U[11] || (U[11] = h(" Creating environment ", -1)),
            e("strong", null, a(f.value), 1),
            U[12] || (U[12] = h("... ", -1))
          ]),
          k(ss, {
            progress: T.value.progress,
            message: T.value.message,
            "current-phase": T.value.phase,
            variant: T.value.error ? "error" : "default",
            "show-steps": !0,
            steps: _
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          T.value.error ? d("", !0) : (s(), o("p", Vh, " This may take several minutes. Please wait... ")),
          T.value.error ? (s(), o("div", Wh, [
            e("p", jh, a(T.value.error), 1)
          ])) : d("", !0)
        ])) : (s(), o("div", Mh, [
          e("div", Th, [
            U[6] || (U[6] = e("label", { class: "form-label" }, "Name", -1)),
            Oe(e("input", {
              ref_key: "nameInput",
              ref: z,
              "onUpdate:modelValue": U[0] || (U[0] = (ne) => f.value = ne),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: gt(x, ["enter"])
            }, null, 544), [
              [Mt, f.value]
            ])
          ]),
          e("div", Rh, [
            U[7] || (U[7] = e("label", { class: "form-label" }, "Python Version", -1)),
            Oe(e("select", {
              "onUpdate:modelValue": U[1] || (U[1] = (ne) => v.value = ne),
              class: "form-select"
            }, [
              (s(!0), o(A, null, Z(xe(As), (ne) => (s(), o("option", {
                key: ne,
                value: ne
              }, a(ne), 9, zh))), 128))
            ], 512), [
              [Tt, v.value]
            ])
          ]),
          e("div", Lh, [
            U[8] || (U[8] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Oe(e("select", {
              "onUpdate:modelValue": U[2] || (U[2] = (ne) => r.value = ne),
              class: "form-select",
              disabled: b.value
            }, [
              (s(!0), o(A, null, Z(w.value, (ne) => (s(), o("option", {
                key: ne.tag_name,
                value: ne.tag_name
              }, a(ne.name), 9, Dh))), 128))
            ], 8, Ph), [
              [Tt, r.value]
            ])
          ]),
          e("div", Nh, [
            U[9] || (U[9] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Oe(e("select", {
              "onUpdate:modelValue": U[3] || (U[3] = (ne) => u.value = ne),
              class: "form-select"
            }, [
              (s(!0), o(A, null, Z(xe(gs), (ne) => (s(), o("option", {
                key: ne,
                value: ne
              }, a(ne) + a(ne === "auto" ? " (detect GPU)" : ""), 9, Uh))), 128))
            ], 512), [
              [Tt, u.value]
            ])
          ]),
          e("div", Oh, [
            e("label", Bh, [
              Oe(e("input", {
                type: "checkbox",
                "onUpdate:modelValue": U[4] || (U[4] = (ne) => p.value = ne)
              }, null, 512), [
                [Zt, p.value]
              ]),
              U[10] || (U[10] = e("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: l(() => [
        $.value ? (s(), o(A, { key: 1 }, [
          T.value.error ? (s(), E(me, {
            key: 0,
            variant: "secondary",
            onClick: q
          }, {
            default: l(() => [...U[15] || (U[15] = [
              h(" Close ", -1)
            ])]),
            _: 1
          })) : (s(), o("span", Gh, " Creating environment... "))
        ], 64)) : (s(), o(A, { key: 0 }, [
          k(me, {
            variant: "primary",
            disabled: !f.value.trim(),
            onClick: x
          }, {
            default: l(() => [...U[13] || (U[13] = [
              h(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          k(me, {
            variant: "secondary",
            onClick: U[5] || (U[5] = (ne) => n("close"))
          }, {
            default: l(() => [...U[14] || (U[14] = [
              h(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), Kh = /* @__PURE__ */ te(Hh, [["__scopeId", "data-v-f37eaa42"]]), Jh = /* @__PURE__ */ ee({
  __name: "EnvironmentsSection",
  emits: ["switch", "created", "delete"],
  setup(t, { expose: c, emit: n }) {
    const i = n, { getEnvironments: y } = Ae(), g = C([]), f = C(!1), v = C(null), r = C(""), u = C(!1), p = C(!1), w = C(null), b = L(() => {
      if (!r.value.trim()) return g.value;
      const z = r.value.toLowerCase();
      return g.value.filter(
        (S) => {
          var x;
          return S.name.toLowerCase().includes(z) || ((x = S.current_branch) == null ? void 0 : x.toLowerCase().includes(z));
        }
      );
    });
    function $(z, S) {
      p.value = !1, i("created", z, S);
    }
    function T() {
      p.value = !0;
    }
    function O(z) {
      w.value = z;
    }
    function m(z) {
      w.value = null, i("delete", z);
    }
    async function _() {
      f.value = !0, v.value = null;
      try {
        g.value = await y();
      } catch (z) {
        v.value = z instanceof Error ? z.message : "Failed to load environments";
      } finally {
        f.value = !1;
      }
    }
    return Be(_), c({
      loadEnvironments: _,
      openCreateModal: T
    }), (z, S) => (s(), o(A, null, [
      k(qe, null, {
        header: l(() => [
          k(He, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: S[0] || (S[0] = (x) => u.value = !0)
          }, {
            actions: l(() => [
              k(se, {
                variant: "primary",
                size: "sm",
                onClick: T
              }, {
                default: l(() => [...S[6] || (S[6] = [
                  h(" Create ", -1)
                ])]),
                _: 1
              }),
              k(se, {
                variant: "secondary",
                size: "sm",
                onClick: _
              }, {
                default: l(() => [...S[7] || (S[7] = [
                  h(" Refresh ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          k(zt, {
            modelValue: r.value,
            "onUpdate:modelValue": S[1] || (S[1] = (x) => r.value = x),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          f.value ? (s(), E(ht, {
            key: 0,
            message: "Loading environments..."
          })) : v.value ? (s(), E(yt, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: _
          }, null, 8, ["message"])) : (s(), o(A, { key: 2 }, [
            b.value.length ? (s(), E(Fe, {
              key: 0,
              title: "ENVIRONMENTS",
              count: b.value.length
            }, {
              default: l(() => [
                (s(!0), o(A, null, Z(b.value, (x) => (s(), E(Qp, {
                  key: x.name,
                  "environment-name": x.name,
                  "is-current": x.is_current,
                  "current-branch": x.current_branch,
                  "show-last-used": !1
                }, {
                  actions: l(() => [
                    x.is_current ? d("", !0) : (s(), E(se, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (H) => z.$emit("switch", x.name)
                    }, {
                      default: l(() => [...S[8] || (S[8] = [
                        h(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    k(se, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (H) => O(x)
                    }, {
                      default: l(() => [...S[9] || (S[9] = [
                        h(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["environment-name", "is-current", "current-branch"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            b.value.length ? d("", !0) : (s(), E(at, {
              key: 1,
              icon: "🌍",
              message: r.value ? `No environments match '${r.value}'` : "No environments found. Create one to get started!"
            }, Wt({ _: 2 }, [
              r.value ? void 0 : {
                name: "actions",
                fn: l(() => [
                  k(se, {
                    variant: "primary",
                    onClick: T
                  }, {
                    default: l(() => [...S[10] || (S[10] = [
                      h(" Create Environment ", -1)
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
      k(ct, {
        show: u.value,
        title: "About Environments",
        onClose: S[3] || (S[3] = (x) => u.value = !1)
      }, {
        content: l(() => [...S[11] || (S[11] = [
          e("p", null, [
            e("strong", null, "Environments"),
            h(" are isolated workspaces that contain their own workflows, nodes, and models. Each environment can track different branches and maintain separate state. ")
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
          k(se, {
            variant: "secondary",
            onClick: S[2] || (S[2] = (x) => u.value = !1)
          }, {
            default: l(() => [...S[12] || (S[12] = [
              h(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (s(), E(yh, {
        key: 0,
        environment: w.value,
        "can-delete": g.value.length > 1,
        onClose: S[4] || (S[4] = (x) => w.value = null),
        onDelete: m
      }, null, 8, ["environment", "can-delete"])) : d("", !0),
      p.value ? (s(), E(Kh, {
        key: 1,
        onClose: S[5] || (S[5] = (x) => p.value = !1),
        onCreated: $
      })) : d("", !0)
    ], 64));
  }
}), Yh = /* @__PURE__ */ te(Jh, [["__scopeId", "data-v-f95999f4"]]), Xh = { class: "file-path" }, Qh = { class: "file-path-text" }, Zh = ["title"], e1 = /* @__PURE__ */ ee({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const c = t, n = C(!1);
    async function i() {
      try {
        await navigator.clipboard.writeText(c.path), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (y) {
        console.error("Failed to copy:", y);
      }
    }
    return (y, g) => (s(), o("div", Xh, [
      g[0] || (g[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", Qh, a(t.path), 1),
      t.copyable ? (s(), o("button", {
        key: 0,
        class: "copy-btn",
        title: n.value ? "Copied!" : "Copy path",
        onClick: i
      }, a(n.value ? "✓" : "📋"), 9, Zh)) : d("", !0)
    ]));
  }
}), t1 = /* @__PURE__ */ te(e1, [["__scopeId", "data-v-f0982173"]]), s1 = { class: "export-blocked" }, o1 = { class: "issues-list" }, n1 = { class: "issue-message" }, a1 = {
  key: 0,
  class: "issue-details"
}, l1 = ["onClick"], i1 = { class: "issue-fix" }, r1 = /* @__PURE__ */ ee({
  __name: "ExportBlockedModal",
  props: {
    issues: {}
  },
  emits: ["close"],
  setup(t) {
    const c = t, n = os({});
    function i(y) {
      const g = c.issues[y];
      return n[y] || g.details.length <= 3 ? g.details : g.details.slice(0, 3);
    }
    return (y, g) => (s(), E(Ye, {
      title: "Cannot Export",
      size: "md",
      onClose: g[1] || (g[1] = (f) => y.$emit("close"))
    }, {
      body: l(() => [
        e("div", s1, [
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
          e("div", o1, [
            (s(!0), o(A, null, Z(t.issues, (f, v) => (s(), o("div", {
              key: v,
              class: "issue-item"
            }, [
              e("div", n1, a(f.message), 1),
              f.details.length ? (s(), o("div", a1, [
                (s(!0), o(A, null, Z(i(v), (r, u) => (s(), o("div", {
                  key: u,
                  class: "issue-detail"
                }, a(r), 1))), 128)),
                f.details.length > 3 && !n[v] ? (s(), o("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (r) => n[v] = !0
                }, " +" + a(f.details.length - 3) + " more ", 9, l1)) : d("", !0)
              ])) : d("", !0),
              e("div", i1, [
                f.type === "uncommitted_workflows" ? (s(), o(A, { key: 0 }, [
                  h(" Commit your workflow changes before exporting. ")
                ], 64)) : f.type === "uncommitted_git_changes" ? (s(), o(A, { key: 1 }, [
                  h(" Commit your changes before exporting. ")
                ], 64)) : f.type === "unresolved_issues" ? (s(), o(A, { key: 2 }, [
                  h(" Resolve all workflow issues before exporting. ")
                ], 64)) : d("", !0)
              ])
            ]))), 128))
          ])
        ])
      ]),
      footer: l(() => [
        k(me, {
          variant: "primary",
          onClick: g[0] || (g[0] = (f) => y.$emit("close"))
        }, {
          default: l(() => [...g[3] || (g[3] = [
            h(" Understood ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), d1 = /* @__PURE__ */ te(r1, [["__scopeId", "data-v-b52f5e32"]]), c1 = { class: "export-warnings" }, u1 = {
  key: 0,
  class: "success-header"
}, m1 = { class: "warning-header" }, v1 = { class: "warning-summary" }, f1 = { class: "warning-title" }, g1 = { class: "models-section" }, p1 = { class: "models-list" }, h1 = { class: "model-info" }, y1 = { class: "model-filename" }, w1 = { class: "model-workflows" }, k1 = ["onClick"], b1 = /* @__PURE__ */ ee({
  __name: "ExportWarningsModal",
  props: {
    models: {}
  },
  emits: ["confirm", "cancel", "revalidate"],
  setup(t, { emit: c }) {
    const n = t, i = c, y = C(!1), g = C(null), f = L(() => y.value || n.models.length <= 3 ? n.models : n.models.slice(0, 3));
    function v() {
      g.value = null, i("revalidate");
    }
    return (r, u) => (s(), o(A, null, [
      k(Ye, {
        title: "Export Warnings",
        size: "md",
        onClose: u[3] || (u[3] = (p) => r.$emit("cancel"))
      }, {
        body: l(() => [
          e("div", c1, [
            t.models.length === 0 ? (s(), o("div", u1, [...u[4] || (u[4] = [
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
              e("div", m1, [
                u[6] || (u[6] = e("span", { class: "warning-icon" }, [
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
                e("div", v1, [
                  e("h3", f1, a(t.models.length) + " model" + a(t.models.length !== 1 ? "s" : "") + " missing source URLs ", 1),
                  u[5] || (u[5] = e("p", { class: "warning-description" }, ` Recipients won't be able to download these models automatically. Click "Add Source" to fix, or export anyway. `, -1))
                ])
              ]),
              e("div", g1, [
                e("div", p1, [
                  (s(!0), o(A, null, Z(f.value, (p) => (s(), o("div", {
                    key: p.hash,
                    class: "model-item"
                  }, [
                    e("div", h1, [
                      e("div", y1, a(p.filename), 1),
                      e("div", w1, " Used by: " + a(p.workflows.join(", ")), 1)
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      onClick: (w) => g.value = p.hash
                    }, " Add Source ", 8, k1)
                  ]))), 128))
                ]),
                t.models.length > 3 && !y.value ? (s(), o("button", {
                  key: 0,
                  class: "show-more-btn",
                  onClick: u[0] || (u[0] = (p) => y.value = !0)
                }, " Show " + a(t.models.length - 3) + " more model" + a(t.models.length - 3 !== 1 ? "s" : "") + "... ", 1)) : d("", !0)
              ])
            ], 64))
          ])
        ]),
        footer: l(() => [
          k(me, {
            variant: "secondary",
            onClick: u[1] || (u[1] = (p) => r.$emit("cancel"))
          }, {
            default: l(() => [...u[7] || (u[7] = [
              h(" Cancel Export ", -1)
            ])]),
            _: 1
          }),
          k(me, {
            variant: "primary",
            onClick: u[2] || (u[2] = (p) => r.$emit("confirm"))
          }, {
            default: l(() => [
              h(a(t.models.length === 0 ? "Export" : "Export Anyway"), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      g.value ? (s(), E(fs, {
        key: 0,
        identifier: g.value,
        onClose: v
      }, null, 8, ["identifier"])) : d("", !0)
    ], 64));
  }
}), _1 = /* @__PURE__ */ te(b1, [["__scopeId", "data-v-b698d882"]]), $1 = { class: "export-card" }, C1 = { class: "export-path-row" }, x1 = { class: "export-actions" }, S1 = {
  key: 1,
  class: "export-warning"
}, I1 = /* @__PURE__ */ ee({
  __name: "ExportSection",
  setup(t) {
    const { validateExport: c, exportEnvWithForce: n } = Ae(), i = C(""), y = C(!1), g = C(!1), f = C(!1), v = C(null), r = C(!1), u = C(null), p = C(!1), w = C(!1), b = L(() => y.value ? "Validating..." : g.value ? "Exporting..." : "Export Environment");
    async function $() {
      y.value = !0, v.value = null;
      try {
        const S = await c();
        u.value = S, S.can_export ? S.warnings.models_without_sources.length > 0 ? w.value = !0 : await m() : p.value = !0;
      } catch (S) {
        v.value = {
          status: "error",
          message: S instanceof Error ? S.message : "Validation failed"
        };
      } finally {
        y.value = !1;
      }
    }
    async function T() {
      w.value = !1, await m();
    }
    async function O() {
      try {
        const S = await c();
        u.value = S;
      } catch (S) {
        console.error("Re-validation failed:", S);
      }
    }
    async function m() {
      g.value = !0;
      try {
        const S = await n(i.value || void 0);
        v.value = S;
      } catch (S) {
        v.value = {
          status: "error",
          message: S instanceof Error ? S.message : "Export failed"
        };
      } finally {
        g.value = !1;
      }
    }
    async function _() {
      var S;
      if ((S = v.value) != null && S.path)
        try {
          await navigator.clipboard.writeText(v.value.path);
        } catch (x) {
          console.error("Failed to copy path:", x);
        }
    }
    async function z() {
      var S;
      if ((S = v.value) != null && S.path) {
        f.value = !0;
        try {
          const x = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(v.value.path)}`);
          if (!x.ok)
            throw new Error(`Download failed: ${x.statusText}`);
          const H = await x.blob(), V = URL.createObjectURL(H), q = v.value.path.split("/").pop() || "environment-export.tar.gz", D = document.createElement("a");
          D.href = V, D.download = q, document.body.appendChild(D), D.click(), document.body.removeChild(D), URL.revokeObjectURL(V);
        } catch (x) {
          console.error("Failed to download:", x), alert(`Download failed: ${x instanceof Error ? x.message : "Unknown error"}`);
        } finally {
          f.value = !1;
        }
      }
    }
    return (S, x) => (s(), o(A, null, [
      k(qe, null, {
        header: l(() => [
          k(He, {
            title: "EXPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: x[0] || (x[0] = (H) => r.value = !0)
          })
        ]),
        content: l(() => [
          k(Fe, { title: "EXPORT OPTIONS" }, {
            default: l(() => [
              e("div", $1, [
                x[7] || (x[7] = e("div", { class: "export-card-header" }, [
                  e("span", { class: "export-icon" }, "📁"),
                  e("div", { class: "export-header-text" }, [
                    e("div", { class: "export-title" }, "Output Destination"),
                    e("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                e("div", C1, [
                  k(es, {
                    modelValue: i.value,
                    "onUpdate:modelValue": x[1] || (x[1] = (H) => i.value = H),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                e("div", x1, [
                  k(se, {
                    variant: "primary",
                    size: "md",
                    loading: y.value || g.value,
                    disabled: y.value || g.value,
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
                      h(" " + a(b.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled"])
                ])
              ])
            ]),
            _: 1
          }),
          v.value ? (s(), E(Fe, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: l(() => [
              k(Ge, {
                status: v.value.status === "success" ? "synced" : "broken"
              }, Wt({
                icon: l(() => [
                  h(a(v.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: l(() => [
                  h(a(v.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: l(() => [
                  h(a(v.value.status === "success" ? "Your environment has been exported" : v.value.message), 1)
                ]),
                _: 2
              }, [
                v.value.status === "success" ? {
                  name: "details",
                  fn: l(() => [
                    k(Ue, { label: "Saved to:" }, {
                      default: l(() => [
                        k(t1, {
                          path: v.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    v.value.models_without_sources !== void 0 ? (s(), E(Ue, {
                      key: 0,
                      label: "Models without sources:",
                      value: v.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : d("", !0),
                    v.value.models_without_sources && v.value.models_without_sources > 0 ? (s(), o("div", S1, [...x[8] || (x[8] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : d("", !0)
                  ]),
                  key: "0"
                } : void 0,
                v.value.status === "success" ? {
                  name: "actions",
                  fn: l(() => [
                    k(se, {
                      variant: "primary",
                      size: "sm",
                      loading: f.value,
                      onClick: z
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
                        h(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["loading"]),
                    k(se, {
                      variant: "secondary",
                      size: "sm",
                      onClick: _
                    }, {
                      default: l(() => [...x[10] || (x[10] = [
                        h(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    k(se, {
                      variant: "ghost",
                      size: "sm",
                      onClick: x[2] || (x[2] = (H) => v.value = null)
                    }, {
                      default: l(() => [...x[11] || (x[11] = [
                        h(" Dismiss ", -1)
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
      k(ct, {
        show: r.value,
        title: "What Gets Exported",
        onClose: x[3] || (x[3] = (H) => r.value = !1)
      }, {
        content: l(() => [...x[12] || (x[12] = [
          e("div", { class: "export-info" }, [
            e("div", { class: "info-section" }, [
              e("strong", null, "Included in Export:"),
              e("ul", null, [
                e("li", null, [
                  e("strong", null, "Workflows"),
                  h(" — All workflows in this environment")
                ]),
                e("li", null, [
                  e("strong", null, "Custom Nodes"),
                  h(" — Node definitions and dependencies")
                ]),
                e("li", null, [
                  e("strong", null, "Models"),
                  h(" — References and source URLs (not the files)")
                ]),
                e("li", null, [
                  e("strong", null, "Configuration"),
                  h(" — Environment settings and metadata")
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
              h(" Model files are not included to keep exports small. Models can be re-downloaded on import using their source information. ")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      p.value && u.value ? (s(), E(d1, {
        key: 0,
        issues: u.value.blocking_issues,
        onClose: x[4] || (x[4] = (H) => p.value = !1)
      }, null, 8, ["issues"])) : d("", !0),
      w.value && u.value ? (s(), E(_1, {
        key: 1,
        models: u.value.warnings.models_without_sources,
        onConfirm: T,
        onCancel: x[5] || (x[5] = (H) => w.value = !1),
        onRevalidate: O
      }, null, 8, ["models"])) : d("", !0)
    ], 64));
  }
}), E1 = /* @__PURE__ */ te(I1, [["__scopeId", "data-v-f4d120f2"]]), M1 = { class: "file-input-wrapper" }, T1 = ["accept", "multiple", "disabled"], R1 = /* @__PURE__ */ ee({
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
    const i = n, y = C(null);
    function g() {
      var v;
      (v = y.value) == null || v.click();
    }
    function f(v) {
      const r = v.target;
      r.files && r.files.length > 0 && (i("change", r.files), r.value = "");
    }
    return c({
      triggerInput: g
    }), (v, r) => (s(), o("div", M1, [
      e("input", {
        ref_key: "fileInputRef",
        ref: y,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: f
      }, null, 40, T1),
      k(se, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: g
      }, {
        default: l(() => [
          Se(v.$slots, "default", {}, () => [
            r[0] || (r[0] = e("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              e("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              e("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            h(" " + a(t.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), z1 = /* @__PURE__ */ te(R1, [["__scopeId", "data-v-cd192091"]]), L1 = {
  key: 0,
  class: "drop-zone-empty"
}, P1 = { class: "drop-zone-text" }, D1 = { class: "drop-zone-primary" }, N1 = { class: "drop-zone-secondary" }, U1 = { class: "drop-zone-actions" }, O1 = {
  key: 1,
  class: "drop-zone-file"
}, B1 = { class: "file-info" }, F1 = { class: "file-details" }, A1 = { class: "file-name" }, V1 = { class: "file-size" }, W1 = /* @__PURE__ */ ee({
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
    const n = c, i = C(!1), y = C(null), g = C(0), f = L(() => y.value !== null), v = L(() => {
      var m;
      return ((m = y.value) == null ? void 0 : m.name) || "";
    }), r = L(() => {
      if (!y.value) return "";
      const m = y.value.size;
      return m < 1024 ? `${m} B` : m < 1024 * 1024 ? `${(m / 1024).toFixed(1)} KB` : m < 1024 * 1024 * 1024 ? `${(m / (1024 * 1024)).toFixed(1)} MB` : `${(m / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function u(m) {
      var _;
      m.stopPropagation(), g.value++, (_ = m.dataTransfer) != null && _.types.includes("Files") && (i.value = !0);
    }
    function p(m) {
      m.stopPropagation(), m.dataTransfer && (m.dataTransfer.dropEffect = "copy");
    }
    function w(m) {
      m.stopPropagation(), g.value--, g.value === 0 && (i.value = !1);
    }
    function b(m) {
      var z;
      m.stopPropagation(), g.value = 0, i.value = !1;
      const _ = (z = m.dataTransfer) == null ? void 0 : z.files;
      _ && _.length > 0 && T(_[0]);
    }
    function $(m) {
      m.length > 0 && T(m[0]);
    }
    function T(m) {
      y.value = m, n("fileSelected", m);
    }
    function O() {
      y.value = null, n("clear");
    }
    return (m, _) => (s(), o("div", {
      class: re(["file-drop-zone", { "drop-active": i.value, "has-file": f.value }]),
      onDragenter: Pe(u, ["prevent"]),
      onDragover: Pe(p, ["prevent"]),
      onDragleave: Pe(w, ["prevent"]),
      onDrop: Pe(b, ["prevent"])
    }, [
      f.value ? (s(), o("div", O1, [
        e("div", B1, [
          _[1] || (_[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", F1, [
            e("div", A1, a(v.value), 1),
            e("div", V1, a(r.value), 1)
          ])
        ]),
        k(se, {
          variant: "ghost",
          size: "xs",
          onClick: O,
          title: "Remove file"
        }, {
          default: l(() => [..._[2] || (_[2] = [
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
      ])) : (s(), o("div", L1, [
        _[0] || (_[0] = e("div", { class: "drop-zone-icon" }, [
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
        e("div", P1, [
          e("p", D1, a(t.primaryText), 1),
          e("p", N1, a(t.secondaryText), 1)
        ]),
        e("div", U1, [
          k(z1, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "sm",
            onChange: $
          }, {
            default: l(() => [
              h(a(t.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), j1 = /* @__PURE__ */ te(W1, [["__scopeId", "data-v-0f79cb86"]]), G1 = { class: "import-preview" }, q1 = { class: "preview-header" }, H1 = {
  key: 0,
  class: "source-env"
}, K1 = { class: "preview-content" }, J1 = { class: "preview-section" }, Y1 = { class: "section-header" }, X1 = { class: "section-info" }, Q1 = { class: "section-count" }, Z1 = {
  key: 0,
  class: "item-list"
}, ey = { class: "item-name" }, ty = {
  key: 0,
  class: "item-more"
}, sy = { class: "preview-section" }, oy = { class: "section-header" }, ny = { class: "section-info" }, ay = { class: "section-count" }, ly = {
  key: 0,
  class: "item-list"
}, iy = { class: "item-details" }, ry = { class: "item-name" }, dy = { class: "item-meta" }, cy = {
  key: 0,
  class: "item-more"
}, uy = { class: "preview-section" }, my = { class: "section-header" }, vy = { class: "section-info" }, fy = { class: "section-count" }, gy = {
  key: 0,
  class: "item-list"
}, py = { class: "item-name" }, hy = {
  key: 0,
  class: "item-more"
}, yy = {
  key: 0,
  class: "preview-section"
}, wy = { class: "git-info" }, ky = /* @__PURE__ */ ee({
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
    const c = t, n = L(() => c.workflows.length), i = L(() => c.models.length), y = L(() => c.nodes.length);
    function g(f) {
      return f < 1024 ? `${f} B` : f < 1024 * 1024 ? `${(f / 1024).toFixed(1)} KB` : f < 1024 * 1024 * 1024 ? `${(f / (1024 * 1024)).toFixed(1)} MB` : `${(f / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (f, v) => (s(), o("div", G1, [
      e("div", q1, [
        k(et, null, {
          default: l(() => [...v[0] || (v[0] = [
            h("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (s(), o("span", H1, [
          v[1] || (v[1] = h(" From: ", -1)),
          k(rs, null, {
            default: l(() => [
              h(a(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : d("", !0)
      ]),
      e("div", K1, [
        e("div", J1, [
          e("div", Y1, [
            v[3] || (v[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", X1, [
              v[2] || (v[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", Q1, a(n.value) + " file" + a(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (s(), o("div", Z1, [
            (s(!0), o(A, null, Z(t.workflows.slice(0, t.maxPreviewItems), (r) => (s(), o("div", {
              key: r,
              class: "preview-item"
            }, [
              v[4] || (v[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", ey, a(r), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (s(), o("div", ty, " +" + a(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        e("div", sy, [
          e("div", oy, [
            v[6] || (v[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", ny, [
              v[5] || (v[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", ay, a(i.value) + " file" + a(i.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (s(), o("div", ly, [
            (s(!0), o(A, null, Z(t.models.slice(0, t.maxPreviewItems), (r) => (s(), o("div", {
              key: r.filename,
              class: "preview-item"
            }, [
              v[7] || (v[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", iy, [
                e("span", ry, a(r.filename), 1),
                e("span", dy, a(g(r.size)) + " • " + a(r.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (s(), o("div", cy, " +" + a(t.models.length - t.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        e("div", uy, [
          e("div", my, [
            v[9] || (v[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", vy, [
              v[8] || (v[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", fy, a(y.value) + " node" + a(y.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (s(), o("div", gy, [
            (s(!0), o(A, null, Z(t.nodes.slice(0, t.maxPreviewItems), (r) => (s(), o("div", {
              key: r,
              class: "preview-item"
            }, [
              v[10] || (v[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", py, a(r), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (s(), o("div", hy, " +" + a(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : d("", !0)
          ])) : d("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (s(), o("div", yy, [
          v[11] || (v[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", wy, [
            t.gitBranch ? (s(), E(Ue, {
              key: 0,
              label: "Branch"
            }, {
              default: l(() => [
                k(rs, null, {
                  default: l(() => [
                    h(a(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : d("", !0),
            t.gitCommit ? (s(), E(Ue, {
              key: 1,
              label: "Commit"
            }, {
              default: l(() => [
                k(Ps, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : d("", !0)
          ])
        ])) : d("", !0)
      ])
    ]));
  }
}), by = /* @__PURE__ */ te(ky, [["__scopeId", "data-v-182fe113"]]), _y = { class: "import-config" }, $y = { class: "config-container" }, Cy = { class: "config-field" }, xy = { class: "input-wrapper" }, Sy = ["value"], Iy = {
  key: 0,
  class: "validating-indicator"
}, Ey = {
  key: 1,
  class: "valid-indicator"
}, My = {
  key: 0,
  class: "field-error"
}, Ty = { class: "config-field" }, Ry = { class: "strategy-options" }, zy = ["value", "checked", "onChange"], Ly = { class: "strategy-content" }, Py = { class: "strategy-label" }, Dy = { class: "strategy-description" }, Ny = { class: "config-field switch-field" }, Uy = { class: "switch-label" }, Oy = ["checked"], By = { class: "advanced-section" }, Fy = { class: "advanced-content" }, Ay = { class: "config-field" }, Vy = ["value"], Wy = ["value"], jy = /* @__PURE__ */ ee({
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
    const n = t, i = c, y = C(!1), g = C(!1);
    bt(() => n.nameError, (p) => {
      y.value = !1, g.value = !p && n.name.length > 0;
    });
    const f = [
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
    let v = null;
    function r(p) {
      const w = p.target.value;
      i("update:name", w), g.value = !1, v && clearTimeout(v), w.length > 0 ? (y.value = !0, v = setTimeout(() => {
        i("validate-name", w);
      }, 400)) : y.value = !1;
    }
    function u() {
      n.name.length > 0 && i("validate-name", n.name);
    }
    return (p, w) => (s(), o("div", _y, [
      k(et, null, {
        default: l(() => [...w[2] || (w[2] = [
          h("Configuration", -1)
        ])]),
        _: 1
      }),
      e("div", $y, [
        e("div", Cy, [
          k(Yt, { required: "" }, {
            default: l(() => [...w[3] || (w[3] = [
              h("Environment Name", -1)
            ])]),
            _: 1
          }),
          e("div", xy, [
            e("input", {
              type: "text",
              class: re(["name-input", { error: t.nameError || t.name.length === 0, valid: g.value }]),
              value: t.name,
              placeholder: "my-imported-env",
              onInput: r,
              onBlur: u
            }, null, 42, Sy),
            y.value ? (s(), o("span", Iy, "...")) : g.value ? (s(), o("span", Ey, "✓")) : d("", !0)
          ]),
          t.nameError ? (s(), o("div", My, a(t.nameError), 1)) : d("", !0),
          w[4] || (w[4] = e("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        e("div", Ty, [
          k(Yt, null, {
            default: l(() => [...w[5] || (w[5] = [
              h("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          e("div", Ry, [
            (s(), o(A, null, Z(f, (b) => e("label", {
              key: b.value,
              class: re(["strategy-option", { active: t.modelStrategy === b.value }])
            }, [
              e("input", {
                type: "radio",
                name: "model-strategy",
                value: b.value,
                checked: t.modelStrategy === b.value,
                onChange: ($) => i("update:modelStrategy", b.value)
              }, null, 40, zy),
              e("div", Ly, [
                e("span", Py, a(b.label), 1),
                e("span", Dy, a(b.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", Ny, [
          e("label", Uy, [
            e("input", {
              type: "checkbox",
              checked: t.switchAfterImport,
              onChange: w[0] || (w[0] = (b) => i("update:switchAfterImport", b.target.checked))
            }, null, 40, Oy),
            w[6] || (w[6] = e("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        e("details", By, [
          w[8] || (w[8] = e("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          e("div", Fy, [
            e("div", Ay, [
              k(Yt, null, {
                default: l(() => [...w[7] || (w[7] = [
                  h("PyTorch Backend", -1)
                ])]),
                _: 1
              }),
              e("select", {
                class: "backend-select",
                value: t.torchBackend,
                onChange: w[1] || (w[1] = (b) => i("update:torchBackend", b.target.value))
              }, [
                (s(!0), o(A, null, Z(xe(gs), (b) => (s(), o("option", {
                  key: b,
                  value: b
                }, a(b) + a(b === "auto" ? " (detect GPU)" : ""), 9, Wy))), 128))
              ], 40, Vy)
            ])
          ])
        ])
      ])
    ]));
  }
}), Gy = /* @__PURE__ */ te(jy, [["__scopeId", "data-v-89ea06a1"]]), qy = {
  key: 0,
  class: "import-empty"
}, Hy = { class: "git-import-section" }, Ky = { class: "git-url-input-row" }, Jy = ["disabled"], Yy = {
  key: 0,
  class: "git-error"
}, Xy = {
  key: 1,
  class: "import-configure"
}, Qy = { class: "selected-file-bar" }, Zy = {
  key: 0,
  class: "file-bar-content"
}, ew = { class: "file-bar-info" }, tw = { class: "file-bar-name" }, sw = { class: "file-bar-size" }, ow = {
  key: 1,
  class: "file-bar-content"
}, nw = { class: "file-bar-info" }, aw = { class: "file-bar-name" }, lw = {
  key: 0,
  class: "preview-loading"
}, iw = { class: "import-actions" }, rw = {
  key: 2,
  class: "import-progress"
}, dw = { class: "creating-intro" }, cw = {
  key: 0,
  class: "progress-warning"
}, uw = {
  key: 1,
  class: "import-error"
}, mw = { class: "error-message" }, vw = {
  key: 3,
  class: "import-complete"
}, fw = { class: "complete-message" }, gw = { class: "complete-title" }, pw = { class: "complete-details" }, hw = { class: "complete-actions" }, yw = /* @__PURE__ */ ee({
  __name: "ImportSection",
  emits: ["import-complete-switch"],
  setup(t, { emit: c }) {
    const { previewTarballImport: n, previewGitImport: i, validateEnvironmentName: y, executeImport: g, executeGitImport: f, getImportProgress: v } = Ae(), r = c;
    let u = null;
    const p = C(!1), w = C(null), b = C(!1), $ = C(!1), T = C(!1), O = C(""), m = C(!1), _ = C(null), z = C(""), S = C(null), x = C(!1), H = C(null), V = C(null), q = C({
      name: "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), D = C(null), M = C({
      message: "Preparing import...",
      phase: "",
      progress: 0,
      error: null
    }), U = [
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 15 },
      { id: "extract_builtins", label: "Extract builtin nodes", progressThreshold: 20 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 35 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 60 },
      { id: "sync_nodes", label: "Sync custom nodes", progressThreshold: 70 },
      { id: "copy_workflows", label: "Copy workflows", progressThreshold: 80 },
      { id: "resolve_models", label: "Resolve models", progressThreshold: 85 },
      { id: "download_models", label: "Download models", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], ne = L(() => {
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
        workflows: de.workflows.map((le) => le.name),
        models: de.models.map((le) => ({
          filename: le.filename,
          size: 0,
          type: le.relative_path.split("/")[0] || "model"
        })),
        nodes: de.nodes.map((le) => le.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), oe = L(() => !m.value && !_.value && V.value && q.value.name.length > 0 && !D.value && (w.value || S.value));
    async function j(de) {
      w.value = de, m.value = !0, _.value = null, V.value = null;
      try {
        const le = await n(de);
        V.value = le;
      } catch (le) {
        _.value = le instanceof Error ? le.message : "Failed to analyze file", console.error("Preview error:", le);
      } finally {
        m.value = !1;
      }
    }
    function ae() {
      w.value = null, S.value = null, z.value = "", H.value = null, $.value = !1, T.value = !1, O.value = "", V.value = null, _.value = null, q.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, D.value = null;
    }
    function K() {
      Te(), ae(), b.value = !1, m.value = !1, x.value = !1, M.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function N() {
      if (z.value.trim()) {
        x.value = !0, H.value = null;
        try {
          const de = await i(z.value.trim());
          S.value = z.value.trim(), V.value = de;
        } catch (de) {
          H.value = de instanceof Error ? de.message : "Failed to analyze repository";
        } finally {
          x.value = !1;
        }
      }
    }
    function P(de) {
      try {
        const le = new URL(de);
        return le.host + le.pathname.replace(/\.git$/, "");
      } catch {
        return de;
      }
    }
    async function I(de) {
      if (!de) {
        D.value = "Environment name is required";
        return;
      }
      try {
        const le = await y(de);
        D.value = le.valid ? null : le.error || "Invalid name";
      } catch {
        D.value = "Failed to validate name";
      }
    }
    async function ie() {
      if (q.value.name && !(!w.value && !S.value)) {
        b.value = !0, $.value = !1, M.value = { message: `Creating environment '${q.value.name}'...`, phase: "", progress: 0, error: null };
        try {
          let de;
          if (w.value)
            de = await g(
              w.value,
              q.value.name,
              q.value.modelStrategy,
              q.value.torchBackend
            );
          else if (S.value)
            de = await f(
              S.value,
              q.value.name,
              q.value.modelStrategy,
              q.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          de.status === "started" ? Y() : (T.value = !1, O.value = de.message, b.value = !1, $.value = !0);
        } catch (de) {
          T.value = !1, O.value = de instanceof Error ? de.message : "Unknown error occurred during import", b.value = !1, $.value = !0;
        }
      }
    }
    function Y() {
      u || (u = setInterval(async () => {
        try {
          const de = await v();
          M.value = {
            message: de.message,
            phase: de.phase || "",
            progress: de.progress ?? (de.state === "importing" ? 50 : 0),
            error: de.error || null
          }, de.state === "complete" ? (Te(), T.value = !0, O.value = `Environment '${de.environment_name}' created successfully`, b.value = !1, $.value = !0, q.value.switchAfterImport && de.environment_name && r("import-complete-switch", de.environment_name)) : de.state === "error" && (Te(), T.value = !1, O.value = de.error || de.message, b.value = !1, $.value = !0);
        } catch (de) {
          console.error("Failed to poll import progress:", de);
        }
      }, 2e3));
    }
    function Te() {
      u && (clearInterval(u), u = null);
    }
    function _e(de) {
      return de < 1024 ? `${de} B` : de < 1024 * 1024 ? `${(de / 1024).toFixed(1)} KB` : de < 1024 * 1024 * 1024 ? `${(de / (1024 * 1024)).toFixed(1)} MB` : `${(de / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (de, le) => (s(), o(A, null, [
      k(qe, null, {
        header: l(() => [
          k(He, {
            title: "IMPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: le[0] || (le[0] = (ce) => p.value = !0)
          })
        ]),
        content: l(() => {
          var ce;
          return [
            !w.value && !S.value && !b.value ? (s(), o("div", qy, [
              k(j1, {
                accept: ".tar.gz,.tgz,.zip",
                "primary-text": "Drag & drop environment export here",
                "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
                "button-text": "Select Export File",
                onFileSelected: j
              }),
              le[9] || (le[9] = e("div", { class: "import-divider" }, [
                e("span", null, "or")
              ], -1)),
              e("div", Hy, [
                le[7] || (le[7] = e("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
                e("div", Ky, [
                  Oe(e("input", {
                    type: "text",
                    class: "git-url-input",
                    "onUpdate:modelValue": le[1] || (le[1] = (ve) => z.value = ve),
                    placeholder: "https://github.com/user/repo.git",
                    onKeyup: gt(N, ["enter"]),
                    disabled: x.value
                  }, null, 40, Jy), [
                    [Mt, z.value]
                  ]),
                  k(se, {
                    variant: "primary",
                    size: "sm",
                    disabled: !z.value.trim() || x.value,
                    onClick: N
                  }, {
                    default: l(() => [
                      h(a(x.value ? "Analyzing..." : "ANALYZE"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ]),
                H.value ? (s(), o("div", Yy, a(H.value), 1)) : d("", !0),
                le[8] || (le[8] = e("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
              ])
            ])) : (w.value || S.value) && !b.value && !$.value ? (s(), o("div", Xy, [
              e("div", Qy, [
                w.value ? (s(), o("div", Zy, [
                  le[10] || (le[10] = e("div", { class: "file-bar-icon" }, "📦", -1)),
                  e("div", ew, [
                    e("div", tw, a(w.value.name), 1),
                    e("div", sw, a(_e(w.value.size)), 1)
                  ])
                ])) : S.value ? (s(), o("div", ow, [
                  le[12] || (le[12] = e("div", { class: "file-bar-icon" }, "🔗", -1)),
                  e("div", nw, [
                    e("div", aw, a(P(S.value)), 1),
                    le[11] || (le[11] = e("div", { class: "file-bar-size" }, "Git Repository", -1))
                  ])
                ])) : d("", !0),
                k(se, {
                  variant: "ghost",
                  size: "sm",
                  onClick: ae
                }, {
                  default: l(() => [...le[13] || (le[13] = [
                    h(" Change Source ", -1)
                  ])]),
                  _: 1
                })
              ]),
              m.value ? (s(), o("div", lw, [...le[14] || (le[14] = [
                e("div", { class: "loading-spinner" }, null, -1),
                e("div", { class: "loading-text" }, "Analyzing import file...", -1)
              ])])) : _.value ? (s(), E(st, {
                key: 1,
                type: "error",
                title: "Failed to Analyze File",
                details: [_.value]
              }, null, 8, ["details"])) : V.value ? (s(), E(by, {
                key: 2,
                "source-environment": ne.value.sourceEnvironment,
                workflows: ne.value.workflows,
                models: ne.value.models,
                nodes: ne.value.nodes,
                "git-branch": ne.value.gitBranch,
                "git-commit": ne.value.gitCommit
              }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : d("", !0),
              V.value ? (s(), E(Gy, {
                key: 3,
                name: q.value.name,
                "onUpdate:name": le[2] || (le[2] = (ve) => q.value.name = ve),
                "model-strategy": q.value.modelStrategy,
                "onUpdate:modelStrategy": le[3] || (le[3] = (ve) => q.value.modelStrategy = ve),
                "torch-backend": q.value.torchBackend,
                "onUpdate:torchBackend": le[4] || (le[4] = (ve) => q.value.torchBackend = ve),
                "switch-after-import": q.value.switchAfterImport,
                "onUpdate:switchAfterImport": le[5] || (le[5] = (ve) => q.value.switchAfterImport = ve),
                "name-error": D.value,
                onValidateName: I
              }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : d("", !0),
              q.value.modelStrategy === "skip" && ((ce = V.value) != null && ce.models_needing_download) ? (s(), E(st, {
                key: 4,
                type: "warning",
                title: "Models Will Not Be Downloaded",
                details: [
                  `${V.value.models_needing_download} model(s) will need to be downloaded later`,
                  "You can resolve missing models from the STATUS page after import"
                ]
              }, null, 8, ["details"])) : d("", !0),
              e("div", iw, [
                k(se, {
                  variant: "secondary",
                  size: "md",
                  onClick: ae
                }, {
                  default: l(() => [...le[15] || (le[15] = [
                    h(" Cancel ", -1)
                  ])]),
                  _: 1
                }),
                k(se, {
                  variant: "primary",
                  size: "md",
                  disabled: !oe.value,
                  onClick: ie
                }, {
                  default: l(() => [...le[16] || (le[16] = [
                    h(" Create Environment ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])
              ])
            ])) : b.value ? (s(), o("div", rw, [
              e("p", dw, [
                le[17] || (le[17] = h(" Importing environment ", -1)),
                e("strong", null, a(q.value.name), 1),
                le[18] || (le[18] = h("... ", -1))
              ]),
              k(ss, {
                progress: M.value.progress,
                message: M.value.message,
                "current-phase": M.value.phase,
                variant: M.value.error ? "error" : "default",
                "show-steps": !0,
                steps: U
              }, null, 8, ["progress", "message", "current-phase", "variant"]),
              M.value.error ? d("", !0) : (s(), o("p", cw, " This may take several minutes. Please wait... ")),
              M.value.error ? (s(), o("div", uw, [
                e("p", mw, a(M.value.error), 1)
              ])) : d("", !0)
            ])) : $.value ? (s(), o("div", vw, [
              e("div", {
                class: re(["complete-icon", T.value ? "success" : "error"])
              }, a(T.value ? "✓" : "✕"), 3),
              e("div", fw, [
                e("div", gw, a(T.value ? "Import Successful" : "Import Failed"), 1),
                e("div", pw, a(O.value), 1)
              ]),
              e("div", hw, [
                k(se, {
                  variant: "primary",
                  size: "md",
                  onClick: K
                }, {
                  default: l(() => [...le[19] || (le[19] = [
                    h(" Import Another ", -1)
                  ])]),
                  _: 1
                })
              ])
            ])) : d("", !0)
          ];
        }),
        _: 1
      }),
      k(ct, {
        show: p.value,
        title: "How Import Works",
        onClose: le[6] || (le[6] = (ce) => p.value = !1)
      }, {
        content: l(() => [...le[20] || (le[20] = [
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
}), ww = /* @__PURE__ */ te(yw, [["__scopeId", "data-v-e3c47581"]]), kw = { class: "header-info" }, bw = { class: "commit-hash" }, _w = {
  key: 0,
  class: "commit-refs"
}, $w = { class: "commit-message" }, Cw = { class: "commit-date" }, xw = {
  key: 0,
  class: "loading"
}, Sw = {
  key: 1,
  class: "changes-section"
}, Iw = { class: "stats-row" }, Ew = { class: "stat" }, Mw = { class: "stat insertions" }, Tw = { class: "stat deletions" }, Rw = {
  key: 0,
  class: "change-group"
}, zw = {
  key: 1,
  class: "change-group"
}, Lw = {
  key: 0,
  class: "version"
}, Pw = {
  key: 2,
  class: "change-group"
}, Dw = { class: "change-item" }, Nw = /* @__PURE__ */ ee({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const c = t, { getCommitDetail: n } = Ae(), i = C(null), y = C(!0), g = L(() => {
      if (!i.value) return !1;
      const v = i.value.changes.workflows;
      return v.added.length > 0 || v.modified.length > 0 || v.deleted.length > 0;
    }), f = L(() => {
      if (!i.value) return !1;
      const v = i.value.changes.nodes;
      return v.added.length > 0 || v.removed.length > 0;
    });
    return Be(async () => {
      try {
        i.value = await n(c.commit.hash);
      } finally {
        y.value = !1;
      }
    }), (v, r) => (s(), E(Ye, {
      size: "md",
      "show-close-button": !1,
      onClose: r[3] || (r[3] = (u) => v.$emit("close"))
    }, {
      header: l(() => {
        var u, p, w, b;
        return [
          e("div", kw, [
            r[4] || (r[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", bw, a(((u = i.value) == null ? void 0 : u.short_hash) || t.commit.short_hash || ((p = t.commit.hash) == null ? void 0 : p.slice(0, 7))), 1),
            (b = (w = i.value) == null ? void 0 : w.refs) != null && b.length ? (s(), o("span", _w, [
              (s(!0), o(A, null, Z(i.value.refs, ($) => (s(), o("span", {
                key: $,
                class: "ref-badge"
              }, a($), 1))), 128))
            ])) : d("", !0)
          ]),
          k(me, {
            variant: "ghost",
            size: "sm",
            onClick: r[0] || (r[0] = ($) => v.$emit("close"))
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
        var u, p;
        return [
          e("div", $w, a(((u = i.value) == null ? void 0 : u.message) || t.commit.message), 1),
          e("div", Cw, a(((p = i.value) == null ? void 0 : p.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          y.value ? (s(), o("div", xw, "Loading details...")) : i.value ? (s(), o("div", Sw, [
            e("div", Iw, [
              e("span", Ew, a(i.value.stats.files_changed) + " files", 1),
              e("span", Mw, "+" + a(i.value.stats.insertions), 1),
              e("span", Tw, "-" + a(i.value.stats.deletions), 1)
            ]),
            g.value ? (s(), o("div", Rw, [
              k(Ft, { variant: "section" }, {
                default: l(() => [...r[6] || (r[6] = [
                  h("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(A, null, Z(i.value.changes.workflows.added, (w) => (s(), o("div", {
                key: "add-" + w,
                class: "change-item added"
              }, [
                r[7] || (r[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(w), 1)
              ]))), 128)),
              (s(!0), o(A, null, Z(i.value.changes.workflows.modified, (w) => (s(), o("div", {
                key: "mod-" + w,
                class: "change-item modified"
              }, [
                r[8] || (r[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, a(w), 1)
              ]))), 128)),
              (s(!0), o(A, null, Z(i.value.changes.workflows.deleted, (w) => (s(), o("div", {
                key: "del-" + w,
                class: "change-item deleted"
              }, [
                r[9] || (r[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(w), 1)
              ]))), 128))
            ])) : d("", !0),
            f.value ? (s(), o("div", zw, [
              k(Ft, { variant: "section" }, {
                default: l(() => [...r[10] || (r[10] = [
                  h("NODES", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(A, null, Z(i.value.changes.nodes.added, (w) => (s(), o("div", {
                key: "add-" + w.name,
                class: "change-item added"
              }, [
                r[11] || (r[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(w.name), 1),
                w.version ? (s(), o("span", Lw, "(" + a(w.version) + ")", 1)) : d("", !0)
              ]))), 128)),
              (s(!0), o(A, null, Z(i.value.changes.nodes.removed, (w) => (s(), o("div", {
                key: "rem-" + w.name,
                class: "change-item deleted"
              }, [
                r[12] || (r[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(w.name), 1)
              ]))), 128))
            ])) : d("", !0),
            i.value.changes.models.resolved > 0 ? (s(), o("div", Pw, [
              k(Ft, { variant: "section" }, {
                default: l(() => [...r[13] || (r[13] = [
                  h("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", Dw, [
                r[14] || (r[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, a(i.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : d("", !0)
          ])) : d("", !0)
        ];
      }),
      footer: l(() => [
        k(me, {
          variant: "secondary",
          onClick: r[1] || (r[1] = (u) => v.$emit("createBranch", t.commit))
        }, {
          default: l(() => [...r[15] || (r[15] = [
            h(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        k(me, {
          variant: "primary",
          onClick: r[2] || (r[2] = (u) => v.$emit("checkout", t.commit))
        }, {
          default: l(() => [...r[16] || (r[16] = [
            h(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Uw = /* @__PURE__ */ te(Nw, [["__scopeId", "data-v-d256ff6d"]]), Ow = { class: "base-textarea-wrapper" }, Bw = ["value", "rows", "placeholder", "disabled", "maxlength"], Fw = {
  key: 0,
  class: "base-textarea-count"
}, Aw = /* @__PURE__ */ ee({
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
    return (c, n) => (s(), o("div", Ow, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: n[0] || (n[0] = (i) => c.$emit("update:modelValue", i.target.value)),
        onKeydown: [
          n[1] || (n[1] = gt(Pe((i) => c.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          n[2] || (n[2] = gt(Pe((i) => c.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, Bw),
      t.showCharCount && t.maxLength ? (s(), o("div", Fw, a(t.modelValue.length) + " / " + a(t.maxLength), 1)) : d("", !0)
    ]));
  }
}), Es = /* @__PURE__ */ te(Aw, [["__scopeId", "data-v-5516e6fc"]]), Vw = ["checked", "disabled"], Ww = { class: "base-checkbox-box" }, jw = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, Gw = {
  key: 0,
  class: "base-checkbox-label"
}, qw = /* @__PURE__ */ ee({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (s(), o("label", {
      class: re(["base-checkbox", { disabled: t.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        class: "base-checkbox-input",
        onChange: n[0] || (n[0] = (i) => c.$emit("update:modelValue", i.target.checked))
      }, null, 40, Vw),
      e("span", Ww, [
        t.modelValue ? (s(), o("svg", jw, [...n[1] || (n[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : d("", !0)
      ]),
      c.$slots.default ? (s(), o("span", Gw, [
        Se(c.$slots, "default", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), Ms = /* @__PURE__ */ te(qw, [["__scopeId", "data-v-bf17c831"]]), Hw = { class: "popover-header" }, Kw = { class: "popover-body" }, Jw = {
  key: 0,
  class: "changes-summary"
}, Yw = {
  key: 0,
  class: "change-item"
}, Xw = {
  key: 1,
  class: "change-item"
}, Qw = {
  key: 2,
  class: "change-item"
}, Zw = {
  key: 3,
  class: "change-item"
}, e0 = {
  key: 4,
  class: "change-item"
}, t0 = {
  key: 5,
  class: "change-item"
}, s0 = {
  key: 1,
  class: "no-changes"
}, o0 = {
  key: 2,
  class: "loading"
}, n0 = {
  key: 3,
  class: "issues-error"
}, a0 = { class: "error-header" }, l0 = { class: "error-title" }, i0 = { class: "issues-list" }, r0 = { class: "message-section" }, d0 = { class: "popover-footer" }, c0 = {
  key: 1,
  class: "commit-popover"
}, u0 = { class: "popover-header" }, m0 = { class: "popover-body" }, v0 = {
  key: 0,
  class: "changes-summary"
}, f0 = {
  key: 0,
  class: "change-item"
}, g0 = {
  key: 1,
  class: "change-item"
}, p0 = {
  key: 2,
  class: "change-item"
}, h0 = {
  key: 3,
  class: "change-item"
}, y0 = {
  key: 4,
  class: "change-item"
}, w0 = {
  key: 5,
  class: "change-item"
}, k0 = {
  key: 1,
  class: "no-changes"
}, b0 = {
  key: 2,
  class: "loading"
}, _0 = {
  key: 3,
  class: "issues-error"
}, $0 = { class: "error-header" }, C0 = { class: "error-title" }, x0 = { class: "issues-list" }, S0 = { class: "message-section" }, I0 = { class: "popover-footer" }, E0 = /* @__PURE__ */ ee({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: c }) {
    const n = t, i = c, { commit: y } = Ae(), g = C(""), f = C(!1), v = C(!1), r = C(null), u = L(() => {
      if (!n.status) return !1;
      const O = n.status.workflows;
      return O.new.length > 0 || O.modified.length > 0 || O.deleted.length > 0 || n.status.has_changes;
    }), p = L(() => {
      if (!n.status) return !1;
      const O = n.status.workflows, m = n.status.git_changes;
      return O.new.length > 0 || O.modified.length > 0 || O.deleted.length > 0 || m.nodes_added.length > 0 || m.nodes_removed.length > 0;
    }), w = L(() => {
      var O;
      return (O = n.status) != null && O.workflows.analyzed ? n.status.workflows.analyzed.filter(
        (m) => m.has_issues && (m.sync_state === "new" || m.sync_state === "modified")
      ) : [];
    }), b = L(() => w.value.length > 0), $ = L(() => b.value && !v.value);
    async function T() {
      var O, m, _;
      if (!(b.value && !v.value) && !(!u.value || !g.value.trim() || f.value)) {
        f.value = !0, r.value = null;
        try {
          const z = await y(g.value.trim(), v.value);
          z.status === "success" ? (r.value = {
            type: "success",
            message: `Committed: ${((O = z.summary) == null ? void 0 : O.new) || 0} new, ${((m = z.summary) == null ? void 0 : m.modified) || 0} modified, ${((_ = z.summary) == null ? void 0 : _.deleted) || 0} deleted`
          }, g.value = "", v.value = !1, setTimeout(() => i("committed"), 1e3)) : z.status === "no_changes" ? r.value = { type: "error", message: "No changes to commit" } : z.status === "blocked" ? r.value = {
            type: "error",
            message: 'Commit blocked - enable "Allow issues" to force commit'
          } : r.value = { type: "error", message: z.message || "Commit failed" };
        } catch (z) {
          r.value = { type: "error", message: z instanceof Error ? z.message : "Commit failed" };
        } finally {
          f.value = !1;
        }
      }
    }
    return (O, m) => t.asModal ? (s(), E(Ve, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: m[5] || (m[5] = (_) => i("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: m[4] || (m[4] = Pe(() => {
          }, ["stop"]))
        }, [
          e("div", Hw, [
            m[11] || (m[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: m[0] || (m[0] = (_) => i("close"))
            }, [...m[10] || (m[10] = [
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
          e("div", Kw, [
            t.status && u.value ? (s(), o("div", Jw, [
              t.status.workflows.new.length ? (s(), o("div", Yw, [
                m[12] || (m[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : d("", !0),
              t.status.workflows.modified.length ? (s(), o("div", Xw, [
                m[13] || (m[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
              ])) : d("", !0),
              t.status.workflows.deleted.length ? (s(), o("div", Qw, [
                m[14] || (m[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : d("", !0),
              t.status.git_changes.nodes_added.length ? (s(), o("div", Zw, [
                m[15] || (m[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : d("", !0),
              t.status.git_changes.nodes_removed.length ? (s(), o("div", e0, [
                m[16] || (m[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : d("", !0),
              p.value ? d("", !0) : (s(), o("div", t0, [...m[17] || (m[17] = [
                e("span", { class: "change-icon modified" }, "~", -1),
                e("span", null, "Configuration updated", -1)
              ])]))
            ])) : t.status ? (s(), o("div", s0, " No changes to commit ")) : (s(), o("div", o0, " Loading... ")),
            b.value ? (s(), o("div", n0, [
              e("div", a0, [
                m[18] || (m[18] = e("span", { class: "error-icon" }, "⚠", -1)),
                e("span", l0, a(w.value.length) + " workflow(s) can't run", 1)
              ]),
              e("div", i0, [
                (s(!0), o(A, null, Z(w.value, (_) => (s(), o("div", {
                  key: _.name,
                  class: "issue-item"
                }, [
                  e("strong", null, a(_.name), 1),
                  h(": " + a(_.issue_summary), 1)
                ]))), 128))
              ]),
              k(Ms, {
                modelValue: v.value,
                "onUpdate:modelValue": m[1] || (m[1] = (_) => v.value = _),
                class: "allow-issues-toggle"
              }, {
                default: l(() => [...m[19] || (m[19] = [
                  h(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : d("", !0),
            e("div", r0, [
              k(Es, {
                modelValue: g.value,
                "onUpdate:modelValue": m[2] || (m[2] = (_) => g.value = _),
                placeholder: $.value ? "Enable 'Allow issues' to commit" : u.value ? "Describe your changes..." : "No changes",
                disabled: !u.value || f.value || $.value,
                rows: 3,
                onCtrlEnter: T
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            r.value ? (s(), o("div", {
              key: 4,
              class: re(["result", r.value.type])
            }, a(r.value.message), 3)) : d("", !0)
          ]),
          e("div", d0, [
            k(me, {
              variant: "secondary",
              onClick: m[3] || (m[3] = (_) => i("close"))
            }, {
              default: l(() => [...m[20] || (m[20] = [
                h(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(me, {
              variant: v.value ? "danger" : "primary",
              disabled: !u.value || !g.value.trim() || f.value || $.value,
              loading: f.value,
              onClick: T
            }, {
              default: l(() => [
                h(a(f.value ? "Committing..." : v.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (s(), o("div", c0, [
      e("div", u0, [
        m[22] || (m[22] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: m[6] || (m[6] = (_) => i("close"))
        }, [...m[21] || (m[21] = [
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
      e("div", m0, [
        t.status && u.value ? (s(), o("div", v0, [
          t.status.workflows.new.length ? (s(), o("div", f0, [
            m[23] || (m[23] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : d("", !0),
          t.status.workflows.modified.length ? (s(), o("div", g0, [
            m[24] || (m[24] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
          ])) : d("", !0),
          t.status.workflows.deleted.length ? (s(), o("div", p0, [
            m[25] || (m[25] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : d("", !0),
          t.status.git_changes.nodes_added.length ? (s(), o("div", h0, [
            m[26] || (m[26] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : d("", !0),
          t.status.git_changes.nodes_removed.length ? (s(), o("div", y0, [
            m[27] || (m[27] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : d("", !0),
          p.value ? d("", !0) : (s(), o("div", w0, [...m[28] || (m[28] = [
            e("span", { class: "change-icon modified" }, "~", -1),
            e("span", null, "Configuration updated", -1)
          ])]))
        ])) : t.status ? (s(), o("div", k0, " No changes to commit ")) : (s(), o("div", b0, " Loading... ")),
        b.value ? (s(), o("div", _0, [
          e("div", $0, [
            m[29] || (m[29] = e("span", { class: "error-icon" }, "⚠", -1)),
            e("span", C0, a(w.value.length) + " workflow(s) can't run", 1)
          ]),
          e("div", x0, [
            (s(!0), o(A, null, Z(w.value, (_) => (s(), o("div", {
              key: _.name,
              class: "issue-item"
            }, [
              e("strong", null, a(_.name), 1),
              h(": " + a(_.issue_summary), 1)
            ]))), 128))
          ]),
          k(Ms, {
            modelValue: v.value,
            "onUpdate:modelValue": m[7] || (m[7] = (_) => v.value = _),
            class: "allow-issues-toggle"
          }, {
            default: l(() => [...m[30] || (m[30] = [
              h(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : d("", !0),
        e("div", S0, [
          k(Es, {
            modelValue: g.value,
            "onUpdate:modelValue": m[8] || (m[8] = (_) => g.value = _),
            placeholder: $.value ? "Enable 'Allow issues' to commit" : u.value ? "Describe your changes..." : "No changes",
            disabled: !u.value || f.value || $.value,
            rows: 3,
            onCtrlEnter: T
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        r.value ? (s(), o("div", {
          key: 4,
          class: re(["result", r.value.type])
        }, a(r.value.message), 3)) : d("", !0)
      ]),
      e("div", I0, [
        k(me, {
          variant: "secondary",
          onClick: m[9] || (m[9] = (_) => i("close"))
        }, {
          default: l(() => [...m[31] || (m[31] = [
            h(" Cancel ", -1)
          ])]),
          _: 1
        }),
        k(me, {
          variant: v.value ? "danger" : "primary",
          disabled: !u.value || !g.value.trim() || f.value || $.value,
          loading: f.value,
          onClick: T
        }, {
          default: l(() => [
            h(a(f.value ? "Committing..." : v.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), Gs = /* @__PURE__ */ te(E0, [["__scopeId", "data-v-aa2a9bdf"]]), M0 = { class: "modal-header" }, T0 = { class: "modal-body" }, R0 = { class: "switch-message" }, z0 = { class: "switch-details" }, L0 = { class: "modal-actions" }, P0 = /* @__PURE__ */ ee({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, n) => (s(), E(Ve, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (i) => c.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = Pe(() => {
          }, ["stop"]))
        }, [
          e("div", M0, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", T0, [
            e("p", R0, [
              n[6] || (n[6] = h(" Switch from ", -1)),
              e("strong", null, a(t.fromEnvironment), 1),
              n[7] || (n[7] = h(" to ", -1)),
              e("strong", null, a(t.toEnvironment), 1),
              n[8] || (n[8] = h("? ", -1))
            ]),
            n[9] || (n[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This will restart ComfyUI")
            ], -1)),
            e("p", z0, ' Your current work will be preserved. You can switch back to "' + a(t.fromEnvironment) + '" anytime. ', 1),
            n[10] || (n[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", L0, [
            k(se, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (i) => c.$emit("close"))
            }, {
              default: l(() => [...n[11] || (n[11] = [
                h(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(se, {
              variant: "primary",
              onClick: n[2] || (n[2] = (i) => c.$emit("confirm"))
            }, {
              default: l(() => [...n[12] || (n[12] = [
                h(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : d("", !0)
    ]));
  }
}), D0 = /* @__PURE__ */ te(P0, [["__scopeId", "data-v-e9c5253e"]]), N0 = {
  key: 0,
  class: "modal-overlay"
}, U0 = { class: "modal-content" }, O0 = { class: "modal-body" }, B0 = { class: "progress-info" }, F0 = { class: "progress-percentage" }, A0 = { class: "progress-state" }, V0 = { class: "switch-steps" }, W0 = { class: "step-icon" }, j0 = { class: "step-label" }, G0 = /* @__PURE__ */ ee({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const c = t, n = L(() => {
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
      return c.message || g[c.state] || c.state;
    }), i = L(() => c.state === "complete" ? "success" : c.state === "critical_failure" || c.state === "rolled_back" ? "error" : "default"), y = L(() => {
      const g = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], f = g.findIndex((v) => v.state === c.state);
      return g.map((v, r) => {
        let u = "pending", p = "○";
        return r < f ? (u = "completed", p = "✓") : r === f && (u = "active", p = "⟳"), {
          ...v,
          status: u,
          icon: p
        };
      });
    });
    return (g, f) => (s(), E(Ve, { to: "body" }, [
      t.show ? (s(), o("div", N0, [
        e("div", U0, [
          f[1] || (f[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", O0, [
            k(js, {
              progress: t.progress,
              variant: i.value
            }, null, 8, ["progress", "variant"]),
            e("div", B0, [
              e("div", F0, a(t.progress) + "%", 1),
              e("div", A0, a(n.value), 1)
            ]),
            e("div", V0, [
              (s(!0), o(A, null, Z(y.value, (v) => (s(), o("div", {
                key: v.state,
                class: re(["switch-step", v.status])
              }, [
                e("span", W0, a(v.icon), 1),
                e("span", j0, a(v.label), 1)
              ], 2))), 128))
            ]),
            f[0] || (f[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : d("", !0)
    ]));
  }
}), q0 = /* @__PURE__ */ te(G0, [["__scopeId", "data-v-768a5078"]]), H0 = { class: "modal-header" }, K0 = { class: "modal-body" }, J0 = {
  key: 0,
  class: "node-section"
}, Y0 = { class: "node-list" }, X0 = {
  key: 1,
  class: "node-section"
}, Q0 = { class: "node-list" }, Z0 = { class: "modal-actions" }, ek = /* @__PURE__ */ ee({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, n) => (s(), E(Ve, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (i) => c.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = Pe(() => {
          }, ["stop"]))
        }, [
          e("div", H0, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (i) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", K0, [
            n[8] || (n[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (s(), o("div", J0, [
              n[6] || (n[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", Y0, [
                (s(!0), o(A, null, Z(t.mismatchDetails.missing_nodes, (i) => (s(), o("div", {
                  key: i,
                  class: "node-item add"
                }, " + " + a(i), 1))), 128))
              ])
            ])) : d("", !0),
            t.mismatchDetails.extra_nodes.length ? (s(), o("div", X0, [
              n[7] || (n[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", Q0, [
                (s(!0), o(A, null, Z(t.mismatchDetails.extra_nodes, (i) => (s(), o("div", {
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
          e("div", Z0, [
            k(se, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (i) => c.$emit("close"))
            }, {
              default: l(() => [...n[10] || (n[10] = [
                h(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(se, {
              variant: "primary",
              onClick: n[2] || (n[2] = (i) => c.$emit("confirm"))
            }, {
              default: l(() => [...n[11] || (n[11] = [
                h(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : d("", !0)
    ]));
  }
}), tk = /* @__PURE__ */ te(ek, [["__scopeId", "data-v-7cad7518"]]), sk = {
  key: 0,
  class: "wizard-steps"
}, ok = { class: "step-number" }, nk = {
  key: 1,
  class: "wizard-steps wizard-steps--single"
}, ak = {
  key: 2,
  class: "wizard-step"
}, lk = { class: "form-field" }, ik = ["placeholder"], rk = {
  key: 0,
  class: "form-error"
}, dk = { class: "form-field form-field--checkbox" }, ck = { class: "form-checkbox" }, uk = {
  key: 0,
  class: "form-field"
}, mk = ["placeholder"], vk = {
  key: 0,
  class: "form-info"
}, fk = {
  key: 1,
  class: "form-suggestion"
}, gk = {
  key: 2,
  class: "form-error"
}, pk = {
  key: 3,
  class: "form-info"
}, hk = {
  key: 3,
  class: "wizard-step"
}, yk = {
  key: 0,
  class: "cli-warning"
}, wk = {
  key: 1,
  class: "env-selection"
}, kk = { class: "env-list" }, bk = ["value"], _k = { class: "env-name" }, $k = { class: "env-actions" }, Ck = { key: 2 }, xk = { class: "wizard-intro" }, Sk = { class: "form-field" }, Ik = { class: "form-field" }, Ek = ["value"], Mk = { class: "form-field" }, Tk = ["disabled"], Rk = ["value"], zk = { class: "form-field" }, Lk = ["value"], Pk = { class: "form-field form-field--checkbox" }, Dk = { class: "form-checkbox" }, Nk = {
  key: 1,
  class: "form-error"
}, Kt = 10, Uk = 600 * 1e3, Ok = 1800 * 1e3, Bk = /* @__PURE__ */ ee({
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
      initializeWorkspace: y,
      getInitializeProgress: g,
      validatePath: f,
      createEnvironment: v,
      getCreateProgress: r,
      getComfyUIReleases: u
    } = Ae(), p = C(n.initialStep || 1), w = C(null), b = C(!1), $ = C(n.defaultPath), T = C(!!n.detectedModelsDir), O = C(n.detectedModelsDir || ""), m = C(null), _ = C(null), z = C(null), S = C(null), x = C("my-new-env"), H = C(Vs), V = C("latest"), q = C(Ws), D = C(!0), M = C(null), U = C(null), ne = C([{ tag_name: "latest", name: "Latest", published_at: "" }]), oe = C(!1), j = C(!1), ae = C(!1), K = C({ progress: 0, message: "" }), N = C({ progress: 0, message: "" }), P = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], I = C(0), ie = C(null), Y = C(0), Te = C(null), _e = L(() => {
      var Ee, we;
      const ge = (Ee = $.value) == null ? void 0 : Ee.trim(), X = !m.value, Re = !T.value || !_.value && ((we = O.value) == null ? void 0 : we.trim());
      return ge && X && Re;
    }), de = L(() => {
      var ge;
      return (ge = x.value) == null ? void 0 : ge.trim();
    });
    async function le() {
      var ge;
      if (m.value = null, !!((ge = $.value) != null && ge.trim()))
        try {
          const X = await f({ path: $.value, type: "workspace" });
          X.valid || (m.value = X.error || "Invalid path");
        } catch (X) {
          m.value = X instanceof Error ? X.message : "Validation failed";
        }
    }
    async function ce() {
      var ge;
      if (_.value = null, z.value = null, S.value = null, !!((ge = O.value) != null && ge.trim()))
        try {
          const X = await f({ path: O.value, type: "models" });
          if (X.valid)
            S.value = X.model_count ?? null;
          else if (_.value = X.error || "Invalid path", X.suggestion) {
            z.value = X.suggestion, O.value = X.suggestion, _.value = null;
            const Re = await f({ path: X.suggestion, type: "models" });
            Re.valid && (S.value = Re.model_count ?? null);
          }
        } catch (X) {
          _.value = X instanceof Error ? X.message : "Validation failed";
        }
    }
    async function ve() {
      var ge, X, Re;
      if (m.value = null, _.value = null, await le(), !m.value && !(T.value && ((ge = O.value) != null && ge.trim()) && (await ce(), _.value))) {
        j.value = !0;
        try {
          await y({
            workspace_path: ((X = $.value) == null ? void 0 : X.trim()) || n.defaultPath,
            models_directory: T.value && ((Re = O.value) == null ? void 0 : Re.trim()) || null
          }), I.value = 0, ie.value = Date.now();
          const Ee = setInterval(async () => {
            var we;
            if (ie.value && Date.now() - ie.value > Uk) {
              clearInterval(Ee), j.value = !1, m.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const pe = await g();
              if (I.value = 0, pe.state === "idle" && j.value) {
                clearInterval(Ee), j.value = !1, m.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              K.value = { progress: pe.progress, message: pe.message }, pe.state === "complete" ? (clearInterval(Ee), j.value = !1, U.value = ((we = $.value) == null ? void 0 : we.trim()) || n.defaultPath, p.value = 2, he()) : pe.state === "error" && (clearInterval(Ee), j.value = !1, m.value = pe.error || "Workspace creation failed");
            } catch (pe) {
              I.value++, console.warn(`Polling failure ${I.value}/${Kt}:`, pe), I.value >= Kt && (clearInterval(Ee), j.value = !1, m.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (Ee) {
          j.value = !1, m.value = Ee instanceof Error ? Ee.message : "Failed to create workspace";
        }
      }
    }
    async function Le() {
      ae.value = !0, M.value = null;
      try {
        const ge = {
          name: x.value.trim() || "my-new-env",
          python_version: H.value,
          comfyui_version: V.value,
          torch_backend: q.value,
          switch_after: D.value,
          workspace_path: U.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await v(ge)).status === "started") {
          Y.value = 0, Te.value = Date.now();
          const Re = setInterval(async () => {
            if (Te.value && Date.now() - Te.value > Ok) {
              clearInterval(Re), ae.value = !1, M.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const Ee = await r();
              if (Y.value = 0, Ee.state === "idle" && ae.value) {
                clearInterval(Re), ae.value = !1, M.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (N.value = {
                progress: Ee.progress ?? 0,
                message: Ee.message,
                phase: Ee.phase
              }, Ee.state === "complete") {
                clearInterval(Re), ae.value = !1;
                const we = Ee.environment_name || ge.name;
                D.value ? i("complete", we) : (b.value = !1, i("environment-created-no-switch", we));
              } else Ee.state === "error" && (clearInterval(Re), ae.value = !1, M.value = Ee.error || "Environment creation failed");
            } catch (Ee) {
              Y.value++, console.warn(`Polling failure ${Y.value}/${Kt}:`, Ee), Y.value >= Kt && (clearInterval(Re), ae.value = !1, M.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (ge) {
        ae.value = !1, M.value = ge instanceof Error ? ge.message : "Unknown error";
      }
    }
    async function he() {
      oe.value = !0;
      try {
        ne.value = await u();
      } catch (ge) {
        console.error("Failed to load ComfyUI releases:", ge);
      } finally {
        oe.value = !1;
      }
    }
    function Ce() {
      w.value && i("switch-environment", w.value);
    }
    return Be(() => {
      n.detectedModelsDir && (O.value = n.detectedModelsDir), n.workspacePath && (U.value = n.workspacePath), p.value === 2 && he();
    }), (ge, X) => (s(), E(Ye, {
      title: "WELCOME TO COMFYGIT",
      size: "lg",
      "show-close-button": !0,
      "close-on-overlay-click": !1,
      onClose: X[12] || (X[12] = (Re) => ge.$emit("close"))
    }, {
      body: l(() => {
        var Re, Ee, we;
        return [
          n.setupState === "no_workspace" ? (s(), o("div", sk, [
            e("div", {
              class: re(["step", { active: p.value === 1, complete: p.value > 1 }])
            }, [
              e("span", ok, a(p.value > 1 ? "✓" : "1"), 1),
              X[13] || (X[13] = e("span", { class: "step-label" }, "Workspace", -1))
            ], 2),
            X[15] || (X[15] = e("div", { class: "step-connector" }, null, -1)),
            e("div", {
              class: re(["step", { active: p.value === 2 }])
            }, [...X[14] || (X[14] = [
              e("span", { class: "step-number" }, "2", -1),
              e("span", { class: "step-label" }, "Environment", -1)
            ])], 2)
          ])) : (s(), o("div", nk, [...X[16] || (X[16] = [
            e("div", { class: "step active" }, [
              e("span", { class: "step-number" }, "1"),
              e("span", { class: "step-label" }, "Environment")
            ], -1)
          ])])),
          p.value === 1 ? (s(), o("div", ak, [
            X[20] || (X[20] = e("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
            e("div", lk, [
              X[17] || (X[17] = e("label", { class: "form-label" }, "Workspace Path", -1)),
              Oe(e("input", {
                "onUpdate:modelValue": X[0] || (X[0] = (pe) => $.value = pe),
                type: "text",
                class: "form-input",
                placeholder: t.defaultPath,
                onBlur: le
              }, null, 40, ik), [
                [Mt, $.value]
              ]),
              m.value ? (s(), o("p", rk, a(m.value), 1)) : d("", !0)
            ]),
            e("div", dk, [
              e("label", ck, [
                Oe(e("input", {
                  type: "checkbox",
                  "onUpdate:modelValue": X[1] || (X[1] = (pe) => T.value = pe)
                }, null, 512), [
                  [Zt, T.value]
                ]),
                X[18] || (X[18] = e("span", null, "I have existing ComfyUI models", -1))
              ])
            ]),
            T.value ? (s(), o("div", uk, [
              X[19] || (X[19] = e("label", { class: "form-label" }, "Models Directory", -1)),
              Oe(e("input", {
                "onUpdate:modelValue": X[2] || (X[2] = (pe) => O.value = pe),
                type: "text",
                class: "form-input",
                placeholder: t.detectedModelsDir || "/path/to/models",
                onBlur: ce
              }, null, 40, mk), [
                [Mt, O.value]
              ]),
              t.detectedModelsDir && !O.value ? (s(), o("p", vk, " Detected: " + a(t.detectedModelsDir), 1)) : d("", !0),
              z.value ? (s(), o("p", fk, " Did you mean: " + a(z.value), 1)) : d("", !0),
              _.value ? (s(), o("p", gk, a(_.value), 1)) : d("", !0),
              S.value !== null && !_.value ? (s(), o("p", pk, " Found " + a(S.value) + " model files ", 1)) : d("", !0)
            ])) : d("", !0),
            j.value ? (s(), E(ss, {
              key: 1,
              progress: K.value.progress,
              message: K.value.message
            }, null, 8, ["progress", "message"])) : d("", !0)
          ])) : d("", !0),
          p.value === 2 ? (s(), o("div", hk, [
            n.cliInstalled ? d("", !0) : (s(), o("div", yk, [...X[21] || (X[21] = [
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
            (Re = n.existingEnvironments) != null && Re.length && !b.value ? (s(), o("div", wk, [
              X[23] || (X[23] = e("p", { class: "wizard-intro" }, " You have existing managed environments. Switch to one, or create a new environment: ", -1)),
              e("div", kk, [
                (s(!0), o(A, null, Z(n.existingEnvironments, (pe) => (s(), o("label", {
                  key: pe,
                  class: re(["env-option", { selected: w.value === pe }])
                }, [
                  Oe(e("input", {
                    type: "radio",
                    name: "env-select",
                    value: pe,
                    "onUpdate:modelValue": X[3] || (X[3] = (Ke) => w.value = Ke)
                  }, null, 8, bk), [
                    [Jt, w.value]
                  ]),
                  e("span", _k, a(pe), 1)
                ], 2))), 128))
              ]),
              e("div", $k, [
                w.value ? (s(), E(me, {
                  key: 0,
                  variant: "primary",
                  onClick: Ce
                }, {
                  default: l(() => [
                    h(" Switch to " + a(w.value), 1)
                  ]),
                  _: 1
                })) : d("", !0),
                k(me, {
                  variant: "secondary",
                  onClick: X[4] || (X[4] = (pe) => b.value = !0)
                }, {
                  default: l(() => [...X[22] || (X[22] = [
                    h(" + Create New Environment ", -1)
                  ])]),
                  _: 1
                })
              ])
            ])) : d("", !0),
            b.value || !((Ee = n.existingEnvironments) != null && Ee.length) ? (s(), o("div", Ck, [
              e("p", xk, a((we = n.existingEnvironments) != null && we.length ? "Create a new managed environment:" : "Now let's create your first managed environment. This will be an isolated ComfyUI installation with its own nodes and workflows."), 1),
              e("div", Sk, [
                X[24] || (X[24] = e("label", { class: "form-label" }, "Environment Name", -1)),
                Oe(e("input", {
                  "onUpdate:modelValue": X[5] || (X[5] = (pe) => x.value = pe),
                  type: "text",
                  class: "form-input",
                  placeholder: "my-new-env"
                }, null, 512), [
                  [Mt, x.value]
                ])
              ]),
              e("div", Ik, [
                X[25] || (X[25] = e("label", { class: "form-label" }, "Python Version", -1)),
                Oe(e("select", {
                  "onUpdate:modelValue": X[6] || (X[6] = (pe) => H.value = pe),
                  class: "form-select"
                }, [
                  (s(!0), o(A, null, Z(xe(As), (pe) => (s(), o("option", {
                    key: pe,
                    value: pe
                  }, a(pe), 9, Ek))), 128))
                ], 512), [
                  [Tt, H.value]
                ])
              ]),
              e("div", Mk, [
                X[26] || (X[26] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
                Oe(e("select", {
                  "onUpdate:modelValue": X[7] || (X[7] = (pe) => V.value = pe),
                  class: "form-select",
                  disabled: oe.value
                }, [
                  (s(!0), o(A, null, Z(ne.value, (pe) => (s(), o("option", {
                    key: pe.tag_name,
                    value: pe.tag_name
                  }, a(pe.name), 9, Rk))), 128))
                ], 8, Tk), [
                  [Tt, V.value]
                ])
              ]),
              e("div", zk, [
                X[27] || (X[27] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
                Oe(e("select", {
                  "onUpdate:modelValue": X[8] || (X[8] = (pe) => q.value = pe),
                  class: "form-select"
                }, [
                  (s(!0), o(A, null, Z(xe(gs), (pe) => (s(), o("option", {
                    key: pe,
                    value: pe
                  }, a(pe) + a(pe === "auto" ? " (detect GPU)" : ""), 9, Lk))), 128))
                ], 512), [
                  [Tt, q.value]
                ])
              ]),
              e("div", Pk, [
                e("label", Dk, [
                  Oe(e("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": X[9] || (X[9] = (pe) => D.value = pe)
                  }, null, 512), [
                    [Zt, D.value]
                  ]),
                  X[28] || (X[28] = e("span", null, "Switch to this environment after creation", -1))
                ])
              ]),
              ae.value ? (s(), E(ss, {
                key: 0,
                progress: N.value.progress,
                message: N.value.message,
                "current-phase": N.value.phase,
                "show-steps": !0,
                steps: P
              }, null, 8, ["progress", "message", "current-phase"])) : d("", !0),
              M.value ? (s(), o("div", Nk, a(M.value), 1)) : d("", !0)
            ])) : d("", !0)
          ])) : d("", !0)
        ];
      }),
      footer: l(() => {
        var Re, Ee;
        return [
          p.value === 1 ? (s(), E(me, {
            key: 0,
            variant: "primary",
            disabled: !_e.value || j.value,
            onClick: ve
          }, {
            default: l(() => [
              h(a(j.value ? "Creating..." : "Next"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : p.value === 2 ? (s(), o(A, { key: 1 }, [
            n.setupState === "no_workspace" ? (s(), E(me, {
              key: 0,
              variant: "secondary",
              disabled: ae.value,
              onClick: X[10] || (X[10] = (we) => p.value = 1)
            }, {
              default: l(() => [...X[29] || (X[29] = [
                h(" Back ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])) : (Re = n.existingEnvironments) != null && Re.length && b.value ? (s(), E(me, {
              key: 1,
              variant: "secondary",
              disabled: ae.value,
              onClick: X[11] || (X[11] = (we) => b.value = !1)
            }, {
              default: l(() => [...X[30] || (X[30] = [
                h(" Back ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])) : d("", !0),
            b.value || !((Ee = n.existingEnvironments) != null && Ee.length) ? (s(), E(me, {
              key: 2,
              variant: "primary",
              disabled: !de.value || ae.value,
              onClick: Le
            }, {
              default: l(() => [
                h(a(ae.value ? "Creating..." : D.value ? "Create & Switch" : "Create Environment"), 1)
              ]),
              _: 1
            }, 8, ["disabled"])) : d("", !0)
          ], 64)) : d("", !0)
        ];
      }),
      _: 1
    }));
  }
}), Fk = /* @__PURE__ */ te(Bk, [["__scopeId", "data-v-a900a075"]]), Ak = { class: "comfygit-panel" }, Vk = { class: "panel-header" }, Wk = { class: "header-left" }, jk = {
  key: 0,
  class: "header-info"
}, Gk = { class: "header-actions" }, qk = { class: "env-switcher" }, Hk = {
  key: 0,
  class: "header-info"
}, Kk = { class: "branch-name" }, Jk = { class: "panel-main" }, Yk = { class: "sidebar" }, Xk = { class: "sidebar-content" }, Qk = { class: "sidebar-section" }, Zk = { class: "sidebar-section" }, eb = { class: "sidebar-section" }, tb = { class: "content-area" }, sb = {
  key: 0,
  class: "error-message"
}, ob = {
  key: 1,
  class: "loading"
}, nb = { class: "dialog-content env-selector-dialog" }, ab = { class: "dialog-header" }, lb = { class: "dialog-body" }, ib = { class: "env-list" }, rb = { class: "env-info" }, db = { class: "env-name-row" }, cb = { class: "env-indicator" }, ub = { class: "env-name" }, mb = {
  key: 0,
  class: "env-branch"
}, vb = {
  key: 1,
  class: "current-label"
}, fb = { class: "env-stats" }, gb = ["onClick"], pb = { class: "toast-container" }, hb = { class: "toast-message" }, yb = /* @__PURE__ */ ee({
  __name: "ComfyGitPanel",
  props: {
    initialView: {}
  },
  emits: ["close", "statusUpdate"],
  setup(t, { emit: c }) {
    const n = t, i = c, {
      getStatus: y,
      getHistory: g,
      getBranches: f,
      checkout: v,
      createBranch: r,
      switchBranch: u,
      deleteBranch: p,
      getEnvironments: w,
      switchEnvironment: b,
      getSwitchProgress: $,
      deleteEnvironment: T,
      syncEnvironmentManually: O,
      repairWorkflowModels: m,
      getSetupStatus: _
    } = Ae(), z = Ds();
    function S(W) {
      window.open(W, "_blank", "noopener,noreferrer");
    }
    const x = C(null), H = C([]), V = C([]), q = C([]), D = L(() => q.value.find((W) => W.is_current)), M = C(null), U = C(!1), ne = C(1), oe = L(() => {
      var W;
      return ((W = M.value) == null ? void 0 : W.state) || "managed";
    }), j = C(!1), ae = C(null), K = C(null), N = C(!1), P = C(null), I = C(null), ie = C(null), Y = C(!1), Te = C(!1), _e = C(""), de = C({ state: "idle", progress: 0, message: "" });
    let le = null, ce = null;
    const ve = {
      "debug-env": { view: "debug-env", section: "this-env" },
      "debug-workspace": { view: "debug-workspace", section: "all-envs" },
      status: { view: "status", section: "this-env" }
    }, Le = n.initialView ? ve[n.initialView] : null, he = C((Le == null ? void 0 : Le.view) ?? "status"), Ce = C((Le == null ? void 0 : Le.section) ?? "this-env");
    function ge(W, R) {
      he.value = W, Ce.value = R;
    }
    function X(W) {
      const fe = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[W];
      fe && ge(fe.view, fe.section);
    }
    function Re() {
      ge("branches", "this-env");
    }
    function Ee() {
      i("close"), setTimeout(() => {
        var R;
        const W = document.querySelectorAll("button.comfyui-button");
        for (const fe of W)
          if (((R = fe.textContent) == null ? void 0 : R.trim()) === "Manager") {
            fe.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const we = C(null), pe = C(!1), Ke = C(!1), Xe = C([]);
    let _t = 0;
    function be(W, R = "info", fe = 3e3) {
      const Ie = ++_t;
      return Xe.value.push({ id: Ie, message: W, type: R }), fe > 0 && setTimeout(() => {
        Xe.value = Xe.value.filter((Ne) => Ne.id !== Ie);
      }, fe), Ie;
    }
    function We(W) {
      Xe.value = Xe.value.filter((R) => R.id !== W);
    }
    function wt(W, R) {
      be(W, R);
    }
    const ut = L(() => {
      if (!x.value) return "neutral";
      const W = x.value.workflows, R = W.new.length > 0 || W.modified.length > 0 || W.deleted.length > 0 || x.value.has_changes;
      return x.value.comparison.is_synced ? R ? "warning" : "success" : "error";
    });
    L(() => x.value ? ut.value === "success" ? "All synced" : ut.value === "warning" ? "Uncommitted changes" : ut.value === "error" ? "Not synced" : "" : "");
    async function De() {
      j.value = !0, ae.value = null;
      try {
        const [W, R, fe, Ie] = await Promise.all([
          y(!0),
          g(),
          f(),
          w()
        ]);
        x.value = W, H.value = R.commits, V.value = fe.branches, q.value = Ie, i("statusUpdate", W), P.value && await P.value.loadWorkflows(!0);
      } catch (W) {
        ae.value = W instanceof Error ? W.message : "Failed to load status", x.value = null, H.value = [], V.value = [];
      } finally {
        j.value = !1;
      }
    }
    function $t(W) {
      K.value = W;
    }
    async function lt(W) {
      var fe;
      K.value = null;
      const R = x.value && (x.value.workflows.new.length > 0 || x.value.workflows.modified.length > 0 || x.value.workflows.deleted.length > 0 || x.value.has_changes);
      we.value = {
        title: R ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: R ? "You have uncommitted changes that will be lost." : `Checkout commit ${W.short_hash || ((fe = W.hash) == null ? void 0 : fe.slice(0, 7))}?`,
        details: R ? ks() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: R ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: R,
        onConfirm: async () => {
          var je;
          we.value = null, ke();
          const Ie = be(`Checking out ${W.short_hash || ((je = W.hash) == null ? void 0 : je.slice(0, 7))}...`, "info", 0), Ne = await v(W.hash, R);
          We(Ie), Ne.status === "success" ? be("Restarting ComfyUI...", "success") : be(Ne.message || "Checkout failed", "error");
        }
      };
    }
    async function J(W) {
      const R = x.value && (x.value.workflows.new.length > 0 || x.value.workflows.modified.length > 0 || x.value.workflows.deleted.length > 0 || x.value.has_changes);
      we.value = {
        title: R ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: R ? "You have uncommitted changes." : `Switch to branch "${W}"?`,
        details: R ? ks() : void 0,
        warning: R ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: R ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          we.value = null, ke();
          const fe = be(`Switching to ${W}...`, "info", 0), Ie = await u(W, R);
          We(fe), Ie.status === "success" ? be("Restarting ComfyUI...", "success") : be(Ie.message || "Branch switch failed", "error");
        }
      };
    }
    async function B(W) {
      const R = be(`Creating branch ${W}...`, "info", 0), fe = await r(W);
      We(R), fe.status === "success" ? (be(`Branch "${W}" created`, "success"), await De()) : be(fe.message || "Failed to create branch", "error");
    }
    async function F(W, R = !1) {
      const fe = async (Ie) => {
        var je;
        const Ne = be(`Deleting branch ${W}...`, "info", 0);
        try {
          const ft = await p(W, Ie);
          We(Ne), ft.status === "success" ? (be(`Branch "${W}" deleted`, "success"), await De()) : (je = ft.message) != null && je.includes("not fully merged") ? we.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${W}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              we.value = null, await fe(!0);
            }
          } : be(ft.message || "Failed to delete branch", "error");
        } catch (ft) {
          We(Ne);
          const Lt = ft instanceof Error ? ft.message : "Failed to delete branch";
          Lt.includes("not fully merged") ? we.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${W}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              we.value = null, await fe(!0);
            }
          } : be(Lt, "error");
        }
      };
      we.value = {
        title: "Delete Branch",
        message: `Delete branch "${W}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          we.value = null, await fe(R);
        }
      };
    }
    async function Q(W) {
      K.value = null;
      const R = prompt("Enter branch name:");
      if (R) {
        const fe = be(`Creating branch ${R}...`, "info", 0), Ie = await r(R, W.hash);
        We(fe), Ie.status === "success" ? (be(`Branch "${R}" created from ${W.short_hash}`, "success"), await De()) : be(Ie.message || "Failed to create branch", "error");
      }
    }
    function ke() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function it() {
      we.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var W;
          we.value = null, ke(), be("Restarting environment...", "info");
          try {
            (W = window.app) != null && W.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function mt() {
      we.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var W;
          we.value = null, be("Stopping environment...", "info");
          try {
            (W = window.app) != null && W.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function tt(W) {
      N.value = !1, _e.value = W, Y.value = !0;
    }
    async function xt() {
      Y.value = !1, Te.value = !0, ke(), de.value = {
        progress: 10,
        state: vt(10),
        message: St(10)
      };
      try {
        await b(_e.value), G(), $e();
      } catch (W) {
        ue(), Te.value = !1, be(`Failed to initiate switch: ${W instanceof Error ? W.message : "Unknown error"}`, "error"), de.value = { state: "idle", progress: 0, message: "" };
      }
    }
    function vt(W) {
      return W >= 100 ? "complete" : W >= 80 ? "validating" : W >= 60 ? "starting" : W >= 30 ? "syncing" : "preparing";
    }
    function St(W) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[vt(W)] || "";
    }
    function G() {
      if (ce) return;
      let W = 10;
      const R = 60, fe = 5e3, Ie = 100, Ne = (R - W) / (fe / Ie);
      ce = window.setInterval(() => {
        if (W += Ne, W >= R && (W = R, ue()), de.value.progress < R) {
          const je = Math.floor(W);
          de.value = {
            progress: je,
            state: vt(je),
            message: St(je)
          };
        }
      }, Ie);
    }
    function ue() {
      ce && (clearInterval(ce), ce = null);
    }
    function $e() {
      le || (le = window.setInterval(async () => {
        try {
          let W = await z.getStatus();
          if ((!W || W.state === "idle") && (W = await $()), !W)
            return;
          const R = W.progress || 0;
          R >= 60 && ue();
          const fe = Math.max(R, de.value.progress), Ie = W.state && W.state !== "idle" && W.state !== "unknown", Ne = Ie ? W.state : vt(fe), je = Ie && W.message || St(fe);
          de.value = {
            state: Ne,
            progress: fe,
            message: je
          }, W.state === "complete" ? (ue(), ze(), Te.value = !1, be(`✓ Switched to ${_e.value}`, "success"), await De(), _e.value = "") : W.state === "rolled_back" ? (ue(), ze(), Te.value = !1, be("Switch failed, restored previous environment", "warning"), _e.value = "") : W.state === "critical_failure" && (ue(), ze(), Te.value = !1, be(`Critical error during switch: ${W.message}`, "error"), _e.value = "");
        } catch (W) {
          console.error("Failed to poll switch progress:", W);
        }
      }, 1e3));
    }
    function ze() {
      ue(), le && (clearInterval(le), le = null);
    }
    function Qe() {
      var W;
      Y.value = !1, _e.value = "", (W = M.value) != null && W.state && M.value.state !== "managed" && (ne.value = M.value.state === "no_workspace" ? 1 : 2, U.value = !0);
    }
    async function It() {
      pe.value = !1, await De(), be("✓ Changes committed", "success");
    }
    async function qt() {
      Ke.value = !1;
      const W = be("Syncing environment...", "info", 0);
      try {
        const R = await O("skip", !0);
        if (We(W), R.status === "success") {
          const fe = [];
          R.nodes_installed.length && fe.push(`${R.nodes_installed.length} installed`), R.nodes_removed.length && fe.push(`${R.nodes_removed.length} removed`);
          const Ie = fe.length ? `: ${fe.join(", ")}` : "";
          be(`✓ Environment synced${Ie}`, "success"), await De();
        } else {
          const fe = R.errors.length ? R.errors.join("; ") : R.message;
          be(`Sync failed: ${fe}`, "error");
        }
      } catch (R) {
        We(W), be(`Sync error: ${R instanceof Error ? R.message : "Unknown error"}`, "error");
      }
    }
    async function Ht(W) {
      var R;
      try {
        const fe = await m(W);
        fe.failed.length === 0 ? be(`✓ Repaired ${fe.success} workflow${fe.success === 1 ? "" : "s"}`, "success") : be(`Repaired ${fe.success}, failed: ${fe.failed.length}`, "warning"), await De();
      } catch (fe) {
        be(`Repair failed: ${fe instanceof Error ? fe.message : "Unknown error"}`, "error");
      } finally {
        (R = ie.value) == null || R.resetRepairingState();
      }
    }
    async function ws() {
      var R, fe;
      const W = be("Repairing environment...", "info", 0);
      try {
        const Ie = await O("skip", !0);
        if (We(W), Ie.status === "success") {
          const Ne = [];
          Ie.nodes_installed.length && Ne.push(`${Ie.nodes_installed.length} installed`), Ie.nodes_removed.length && Ne.push(`${Ie.nodes_removed.length} removed`);
          const je = Ne.length ? `: ${Ne.join(", ")}` : "";
          be(`✓ Environment repaired${je}`, "success"), (R = ie.value) == null || R.closeDetailModal(), await De();
        } else {
          const Ne = Ie.errors.length ? Ie.errors.join(", ") : Ie.message || "Unknown error";
          be(`Repair failed: ${Ne}`, "error");
        }
      } catch (Ie) {
        We(W), be(`Repair error: ${Ie instanceof Error ? Ie.message : "Unknown error"}`, "error");
      } finally {
        (fe = ie.value) == null || fe.resetRepairingEnvironmentState();
      }
    }
    async function Xs(W, R) {
      be(`Environment '${W}' created`, "success"), await De(), I.value && await I.value.loadEnvironments(), R && await tt(W);
    }
    async function Qs(W) {
      var R;
      if (((R = D.value) == null ? void 0 : R.name) === W) {
        be("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      we.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${W}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          we.value = null;
          try {
            const fe = await T(W);
            fe.status === "success" ? (be(`Environment "${W}" deleted`, "success"), await De(), I.value && await I.value.loadEnvironments()) : be(fe.message || "Failed to delete environment", "error");
          } catch (fe) {
            be(`Error deleting environment: ${fe instanceof Error ? fe.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function Zs(W) {
      U.value = !1;
      try {
        M.value = await _();
      } catch {
      }
      await tt(W);
    }
    function eo() {
      U.value = !1, i("close");
    }
    async function to(W) {
      await tt(W);
    }
    async function so(W) {
      await De(), await tt(W);
    }
    async function oo(W) {
      M.value = await _(), console.log(`Environment '${W}' created. Available for switching.`);
    }
    function no() {
      ge("environments", "all-envs"), setTimeout(() => {
        var W;
        (W = I.value) == null || W.openCreateModal();
      }, 100);
    }
    function ks() {
      if (!x.value) return [];
      const W = [], R = x.value.workflows;
      return R.new.length && W.push(`${R.new.length} new workflow(s)`), R.modified.length && W.push(`${R.modified.length} modified workflow(s)`), R.deleted.length && W.push(`${R.deleted.length} deleted workflow(s)`), W;
    }
    return Be(async () => {
      try {
        if (M.value = await _(), M.value.state === "no_workspace") {
          U.value = !0, ne.value = 1;
          return;
        }
        if (M.value.state === "empty_workspace") {
          U.value = !0, ne.value = 2;
          return;
        }
        if (M.value.state === "unmanaged") {
          U.value = !0, ne.value = 2;
          return;
        }
      } catch (W) {
        console.warn("Setup status check failed, proceeding normally:", W);
      }
      await De();
    }), (W, R) => {
      var fe, Ie, Ne, je, ft, Lt, bs, _s, $s, Cs, xs, Ss;
      return s(), o("div", Ak, [
        e("div", Vk, [
          e("div", Wk, [
            R[35] || (R[35] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            x.value ? (s(), o("div", jk)) : d("", !0)
          ]),
          e("div", Gk, [
            e("button", {
              class: "sponsor-btn",
              onClick: R[0] || (R[0] = (ye) => S("https://github.com/sponsors/comfyhub-org")),
              title: "Sponsor ComfyHub",
              "aria-label": "Sponsor ComfyHub on GitHub"
            }, [...R[36] || (R[36] = [
              h(" Sponsor ", -1),
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
              onClick: R[1] || (R[1] = (ye) => S("https://discord.gg/2h5rSTeh6Y")),
              title: "Join Discord",
              "aria-label": "Join ComfyHub Discord"
            }, [...R[37] || (R[37] = [
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
              onClick: R[2] || (R[2] = (ye) => S("https://x.com/akatz_ai")),
              title: "Follow on X",
              "aria-label": "Follow on X"
            }, [...R[38] || (R[38] = [
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
              onClick: R[3] || (R[3] = (ye) => S("https://github.com/comfyhub-org/comfygit")),
              title: "View on GitHub",
              "aria-label": "View ComfyGit on GitHub"
            }, [...R[39] || (R[39] = [
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
              onClick: R[4] || (R[4] = (ye) => S("https://docs.comfyhub.org/comfygit/")),
              title: "Documentation",
              "aria-label": "View ComfyGit Documentation"
            }, [...R[40] || (R[40] = [
              e("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" })
              ], -1)
            ])]),
            R[43] || (R[43] = e("span", { class: "header-divider" }, null, -1)),
            e("button", {
              class: re(["icon-btn", { spinning: j.value }]),
              onClick: De,
              title: "Refresh"
            }, [...R[41] || (R[41] = [
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
              onClick: R[5] || (R[5] = (ye) => i("close")),
              title: "Close"
            }, [...R[42] || (R[42] = [
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
        e("div", qk, [
          e("div", { class: "env-switcher-header" }, [
            R[44] || (R[44] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            e("div", { class: "env-control-buttons" }, [
              e("button", {
                class: "env-control-btn",
                title: "Restart environment",
                onClick: it
              }, " Restart "),
              e("button", {
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: mt
              }, " Stop ")
            ])
          ]),
          e("button", {
            class: "env-switcher-btn",
            onClick: R[6] || (R[6] = (ye) => ge("environments", "all-envs"))
          }, [
            x.value ? (s(), o("div", Hk, [
              e("span", null, a(((fe = D.value) == null ? void 0 : fe.name) || ((Ie = x.value) == null ? void 0 : Ie.environment) || "Loading..."), 1),
              e("span", Kk, "(" + a(x.value.branch || "detached") + ")", 1)
            ])) : d("", !0),
            R[45] || (R[45] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", Jk, [
          e("div", Yk, [
            e("div", Xk, [
              e("div", Qk, [
                R[46] || (R[46] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                e("button", {
                  class: re(["sidebar-item", { active: he.value === "status" && Ce.value === "this-env" }]),
                  onClick: R[7] || (R[7] = (ye) => ge("status", "this-env"))
                }, " STATUS ", 2),
                e("button", {
                  class: re(["sidebar-item", { active: he.value === "workflows" }]),
                  onClick: R[8] || (R[8] = (ye) => ge("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                e("button", {
                  class: re(["sidebar-item", { active: he.value === "models-env" }]),
                  onClick: R[9] || (R[9] = (ye) => ge("models-env", "this-env"))
                }, " MODELS ", 2),
                e("button", {
                  class: re(["sidebar-item", { active: he.value === "branches" }]),
                  onClick: R[10] || (R[10] = (ye) => ge("branches", "this-env"))
                }, " BRANCHES ", 2),
                e("button", {
                  class: re(["sidebar-item", { active: he.value === "history" }]),
                  onClick: R[11] || (R[11] = (ye) => ge("history", "this-env"))
                }, " HISTORY ", 2),
                e("button", {
                  class: re(["sidebar-item", { active: he.value === "nodes" }]),
                  onClick: R[12] || (R[12] = (ye) => ge("nodes", "this-env"))
                }, " NODES ", 2),
                e("button", {
                  class: re(["sidebar-item", { active: he.value === "debug-env" }]),
                  onClick: R[13] || (R[13] = (ye) => ge("debug-env", "this-env"))
                }, " DEBUG ", 2)
              ]),
              R[49] || (R[49] = e("div", { class: "sidebar-divider" }, null, -1)),
              e("div", Zk, [
                R[47] || (R[47] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
                e("button", {
                  class: re(["sidebar-item", { active: he.value === "environments" }]),
                  onClick: R[14] || (R[14] = (ye) => ge("environments", "all-envs"))
                }, " ENVIRONMENTS ", 2),
                e("button", {
                  class: re(["sidebar-item", { active: he.value === "model-index" }]),
                  onClick: R[15] || (R[15] = (ye) => ge("model-index", "all-envs"))
                }, " MODEL INDEX ", 2),
                e("button", {
                  class: re(["sidebar-item", { active: he.value === "settings" }]),
                  onClick: R[16] || (R[16] = (ye) => ge("settings", "all-envs"))
                }, " SETTINGS ", 2),
                e("button", {
                  class: re(["sidebar-item", { active: he.value === "debug-workspace" }]),
                  onClick: R[17] || (R[17] = (ye) => ge("debug-workspace", "all-envs"))
                }, " DEBUG ", 2)
              ]),
              R[50] || (R[50] = e("div", { class: "sidebar-divider" }, null, -1)),
              e("div", eb, [
                R[48] || (R[48] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
                e("button", {
                  class: re(["sidebar-item", { active: he.value === "export" }]),
                  onClick: R[18] || (R[18] = (ye) => ge("export", "sharing"))
                }, " EXPORT ", 2),
                e("button", {
                  class: re(["sidebar-item", { active: he.value === "import" }]),
                  onClick: R[19] || (R[19] = (ye) => ge("import", "sharing"))
                }, " IMPORT ", 2),
                e("button", {
                  class: re(["sidebar-item", { active: he.value === "remotes" }]),
                  onClick: R[20] || (R[20] = (ye) => ge("remotes", "sharing"))
                }, " REMOTES ", 2)
              ])
            ]),
            R[51] || (R[51] = ro('<div class="sidebar-footer" data-v-83a00738><span class="version" data-v-83a00738>v0.0.1</span><span class="made-by" data-v-83a00738>made with <svg class="heart-icon" width="10" height="10" viewBox="0 0 16 16" fill="currentColor" data-v-83a00738><path d="M8 14s-5.5-3.5-5.5-7A3.5 3.5 0 0 1 6 3.5c1.1 0 2 .5 2 .5s.9-.5 2-.5a3.5 3.5 0 0 1 3.5 3.5c0 3.5-5.5 7-5.5 7z" data-v-83a00738></path></svg> by Akatz</span></div>', 1))
          ]),
          e("div", tb, [
            ae.value ? (s(), o("div", sb, a(ae.value), 1)) : !x.value && he.value === "status" ? (s(), o("div", ob, " Loading status... ")) : (s(), o(A, { key: 2 }, [
              he.value === "status" ? (s(), E(Aa, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: ie,
                status: x.value,
                "setup-state": oe.value,
                onSwitchBranch: Re,
                onCommitChanges: R[21] || (R[21] = (ye) => pe.value = !0),
                onSyncEnvironment: R[22] || (R[22] = (ye) => Ke.value = !0),
                onViewWorkflows: R[23] || (R[23] = (ye) => ge("workflows", "this-env")),
                onViewHistory: R[24] || (R[24] = (ye) => ge("history", "this-env")),
                onViewDebug: R[25] || (R[25] = (ye) => ge("debug-env", "this-env")),
                onViewNodes: R[26] || (R[26] = (ye) => ge("nodes", "this-env")),
                onRepairMissingModels: Ht,
                onRepairEnvironment: ws,
                onStartSetup: R[27] || (R[27] = (ye) => U.value = !0),
                onViewEnvironments: R[28] || (R[28] = (ye) => ge("environments", "all-envs")),
                onCreateEnvironment: no
              }, null, 8, ["status", "setup-state"])) : he.value === "workflows" ? (s(), E(dm, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: P,
                onRefresh: De
              }, null, 512)) : he.value === "models-env" ? (s(), E(Gm, {
                key: 2,
                onNavigate: X
              })) : he.value === "branches" ? (s(), E(sl, {
                key: 3,
                branches: V.value,
                current: ((Ne = x.value) == null ? void 0 : Ne.branch) || null,
                onSwitch: J,
                onCreate: B,
                onDelete: F
              }, null, 8, ["branches", "current"])) : he.value === "history" ? (s(), E(vl, {
                key: 4,
                commits: H.value,
                onSelect: $t,
                onCheckout: lt
              }, null, 8, ["commits"])) : he.value === "nodes" ? (s(), E(Av, {
                key: 5,
                "version-mismatches": ((ft = (je = x.value) == null ? void 0 : je.comparison) == null ? void 0 : ft.version_mismatches) || [],
                onOpenNodeManager: Ee,
                onRepairEnvironment: ws,
                onToast: wt
              }, null, 8, ["version-mismatches"])) : he.value === "debug-env" ? (s(), E(Hp, { key: 6 })) : he.value === "environments" ? (s(), E(Yh, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: I,
                onSwitch: tt,
                onCreated: Xs,
                onDelete: Qs
              }, null, 512)) : he.value === "model-index" ? (s(), E(uv, {
                key: 8,
                onRefresh: De
              })) : he.value === "settings" ? (s(), E(Wp, { key: 9 })) : he.value === "debug-workspace" ? (s(), E(Gp, { key: 10 })) : he.value === "export" ? (s(), E(E1, { key: 11 })) : he.value === "import" ? (s(), E(ww, {
                key: 12,
                onImportCompleteSwitch: so
              })) : he.value === "remotes" ? (s(), E(Cp, {
                key: 13,
                onToast: wt
              })) : d("", !0)
            ], 64))
          ])
        ]),
        K.value ? (s(), E(Uw, {
          key: 0,
          commit: K.value,
          onClose: R[29] || (R[29] = (ye) => K.value = null),
          onCheckout: lt,
          onCreateBranch: Q
        }, null, 8, ["commit"])) : d("", !0),
        we.value ? (s(), E(Bs, {
          key: 1,
          title: we.value.title,
          message: we.value.message,
          details: we.value.details,
          warning: we.value.warning,
          confirmLabel: we.value.confirmLabel,
          cancelLabel: we.value.cancelLabel,
          secondaryLabel: we.value.secondaryLabel,
          secondaryAction: we.value.secondaryAction,
          destructive: we.value.destructive,
          onConfirm: we.value.onConfirm,
          onCancel: R[30] || (R[30] = (ye) => we.value = null),
          onSecondary: we.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : d("", !0),
        k(D0, {
          show: Y.value,
          "from-environment": ((Lt = D.value) == null ? void 0 : Lt.name) || "unknown",
          "to-environment": _e.value,
          onConfirm: xt,
          onClose: Qe
        }, null, 8, ["show", "from-environment", "to-environment"]),
        pe.value && x.value ? (s(), E(Gs, {
          key: 2,
          status: x.value,
          "as-modal": !0,
          onClose: R[31] || (R[31] = (ye) => pe.value = !1),
          onCommitted: It
        }, null, 8, ["status"])) : d("", !0),
        Ke.value && x.value ? (s(), E(tk, {
          key: 3,
          show: Ke.value,
          "mismatch-details": {
            missing_nodes: x.value.comparison.missing_nodes,
            extra_nodes: x.value.comparison.extra_nodes
          },
          onConfirm: qt,
          onClose: R[32] || (R[32] = (ye) => Ke.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : d("", !0),
        k(q0, {
          show: Te.value,
          state: de.value.state,
          progress: de.value.progress,
          message: de.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        N.value ? (s(), o("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: R[34] || (R[34] = Pe((ye) => N.value = !1, ["self"]))
        }, [
          e("div", nb, [
            e("div", ab, [
              R[53] || (R[53] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: R[33] || (R[33] = (ye) => N.value = !1)
              }, [...R[52] || (R[52] = [
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
              R[54] || (R[54] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", ib, [
                (s(!0), o(A, null, Z(q.value, (ye) => (s(), o("div", {
                  key: ye.name,
                  class: re(["env-item", { current: ye.is_current }])
                }, [
                  e("div", rb, [
                    e("div", db, [
                      e("span", cb, a(ye.is_current ? "●" : "○"), 1),
                      e("span", ub, a(ye.name), 1),
                      ye.current_branch ? (s(), o("span", mb, "(" + a(ye.current_branch) + ")", 1)) : d("", !0),
                      ye.is_current ? (s(), o("span", vb, "CURRENT")) : d("", !0)
                    ]),
                    e("div", fb, a(ye.workflow_count) + " workflows • " + a(ye.node_count) + " nodes ", 1)
                  ]),
                  ye.is_current ? d("", !0) : (s(), o("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (S_) => tt(ye.name)
                  }, " SWITCH ", 8, gb))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : d("", !0),
        U.value ? (s(), E(Fk, {
          key: 5,
          "default-path": ((bs = M.value) == null ? void 0 : bs.default_path) || "~/comfygit",
          "detected-models-dir": ((_s = M.value) == null ? void 0 : _s.detected_models_dir) || null,
          "initial-step": ne.value,
          "existing-environments": (($s = M.value) == null ? void 0 : $s.environments) || [],
          "cli-installed": ((Cs = M.value) == null ? void 0 : Cs.cli_installed) ?? !0,
          "setup-state": ((xs = M.value) == null ? void 0 : xs.state) || "no_workspace",
          "workspace-path": ((Ss = M.value) == null ? void 0 : Ss.workspace_path) || null,
          onComplete: Zs,
          onClose: eo,
          onSwitchEnvironment: to,
          onEnvironmentCreatedNoSwitch: oo
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : d("", !0),
        e("div", pb, [
          k(co, { name: "toast" }, {
            default: l(() => [
              (s(!0), o(A, null, Z(Xe.value, (ye) => (s(), o("div", {
                key: ye.id,
                class: re(["toast", ye.type])
              }, [
                e("span", hb, a(ye.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), wb = /* @__PURE__ */ te(yb, [["__scopeId", "data-v-83a00738"]]), kb = { class: "item-header" }, bb = { class: "item-info" }, _b = { class: "filename" }, $b = { class: "metadata" }, Cb = { class: "size" }, xb = {
  key: 0,
  class: "type"
}, Sb = { class: "item-actions" }, Ib = {
  key: 0,
  class: "progress-section"
}, Eb = { class: "progress-bar" }, Mb = { class: "progress-stats" }, Tb = { class: "downloaded" }, Rb = { class: "speed" }, zb = {
  key: 0,
  class: "eta"
}, Lb = {
  key: 1,
  class: "status-msg paused"
}, Pb = {
  key: 2,
  class: "status-msg queued"
}, Db = {
  key: 3,
  class: "status-msg completed"
}, Nb = {
  key: 4,
  class: "status-msg failed"
}, Ub = {
  key: 0,
  class: "retries"
}, Ob = /* @__PURE__ */ ee({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(t, { emit: c }) {
    const n = c;
    function i(f) {
      if (f === 0) return "?";
      const v = f / (1024 * 1024 * 1024);
      return v >= 1 ? `${v.toFixed(2)} GB` : `${(f / (1024 * 1024)).toFixed(1)} MB`;
    }
    function y(f) {
      return f === 0 ? "-" : `${(f / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function g(f) {
      if (f < 60) return `${Math.round(f)}s`;
      const v = Math.floor(f / 60);
      return v < 60 ? `${v}m` : `${Math.floor(v / 60)}h ${v % 60}m`;
    }
    return (f, v) => (s(), o("div", {
      class: re(["download-item", `status-${t.item.status}`])
    }, [
      e("div", kb, [
        e("div", bb, [
          e("div", _b, a(t.item.filename), 1),
          e("div", $b, [
            e("span", Cb, a(i(t.item.size)), 1),
            t.item.type ? (s(), o("span", xb, a(t.item.type), 1)) : d("", !0)
          ])
        ]),
        e("div", Sb, [
          t.item.status === "queued" || t.item.status === "downloading" ? (s(), o("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: v[0] || (v[0] = (r) => n("cancel")),
            title: "Cancel"
          }, " × ")) : d("", !0),
          t.item.status === "paused" ? (s(), o("button", {
            key: 1,
            class: "action-icon resume",
            onClick: v[1] || (v[1] = (r) => n("resume")),
            title: "Resume"
          }, " ▶ ")) : d("", !0),
          t.item.status === "failed" ? (s(), o("button", {
            key: 2,
            class: "action-icon retry",
            onClick: v[2] || (v[2] = (r) => n("retry")),
            title: "Retry"
          }, " ↻ ")) : d("", !0),
          t.item.status === "completed" || t.item.status === "failed" || t.item.status === "paused" ? (s(), o("button", {
            key: 3,
            class: "action-icon remove",
            onClick: v[3] || (v[3] = (r) => n("remove")),
            title: "Remove"
          }, " × ")) : d("", !0)
        ])
      ]),
      t.item.status === "downloading" ? (s(), o("div", Ib, [
        e("div", Eb, [
          e("div", {
            class: "progress-fill",
            style: pt({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", Mb, [
          e("span", Tb, a(i(t.item.downloaded)) + " / " + a(i(t.item.size)), 1),
          e("span", Rb, a(y(t.item.speed)), 1),
          t.item.eta > 0 ? (s(), o("span", zb, a(g(t.item.eta)), 1)) : d("", !0)
        ])
      ])) : t.item.status === "paused" ? (s(), o("div", Lb, " Paused - click Resume to download ")) : t.item.status === "queued" ? (s(), o("div", Pb, " Waiting in queue... ")) : t.item.status === "completed" ? (s(), o("div", Db, " ✓ Downloaded ")) : t.item.status === "failed" ? (s(), o("div", Nb, [
        h(" ✗ " + a(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (s(), o("span", Ub, "(" + a(t.item.retries) + " retries)", 1)) : d("", !0)
      ])) : d("", !0)
    ], 2));
  }
}), Ut = /* @__PURE__ */ te(Ob, [["__scopeId", "data-v-2110df65"]]), Bb = { class: "queue-title" }, Fb = { class: "count" }, Ab = { class: "queue-actions" }, Vb = { class: "action-label" }, Wb = {
  key: 0,
  class: "overall-progress"
}, jb = { class: "progress-bar" }, Gb = {
  key: 0,
  class: "current-mini"
}, qb = { class: "filename" }, Hb = { class: "speed" }, Kb = {
  key: 1,
  class: "queue-content"
}, Jb = {
  key: 0,
  class: "section"
}, Yb = {
  key: 1,
  class: "section"
}, Xb = { class: "section-header" }, Qb = { class: "section-label paused" }, Zb = { class: "items-list" }, e_ = {
  key: 2,
  class: "section"
}, t_ = { class: "section-header" }, s_ = { class: "section-label" }, o_ = { class: "items-list" }, n_ = {
  key: 3,
  class: "section"
}, a_ = { class: "section-header" }, l_ = { class: "section-label" }, i_ = { class: "items-list" }, r_ = {
  key: 4,
  class: "section"
}, d_ = { class: "section-header" }, c_ = { class: "section-label failed" }, u_ = { class: "items-list" }, m_ = /* @__PURE__ */ ee({
  __name: "ModelDownloadQueue",
  setup(t) {
    const {
      queue: c,
      currentDownload: n,
      queuedItems: i,
      completedItems: y,
      failedItems: g,
      pausedItems: f,
      hasItems: v,
      activeCount: r,
      cancelDownload: u,
      retryDownload: p,
      resumeDownload: w,
      resumeAllPaused: b,
      removeItem: $,
      clearCompleted: T
    } = jt(), O = C(!1);
    let m = null;
    bt(
      () => ({
        active: r.value,
        failed: g.value.length,
        paused: f.value.length,
        completed: y.value.length
      }),
      (x, H) => {
        m && (clearTimeout(m), m = null);
        const V = x.active === 0 && x.failed === 0 && x.paused === 0 && x.completed > 0, q = H && (H.active > 0 || H.paused > 0);
        V && q && (m = setTimeout(() => {
          T(), m = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const _ = L(() => {
      var V;
      if (c.items.length === 0) return 0;
      const x = y.value.length, H = ((V = n.value) == null ? void 0 : V.progress) || 0;
      return Math.round((x + H / 100) / c.items.length * 100);
    });
    function z(x) {
      u(x);
    }
    function S(x) {
      return x === 0 ? "" : `${(x / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (x, H) => (s(), E(Ve, { to: "body" }, [
      xe(v) ? (s(), o("div", {
        key: 0,
        class: re(["model-download-queue", { minimized: !O.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: H[0] || (H[0] = (V) => O.value = !O.value)
        }, [
          e("div", Bb, [
            H[4] || (H[4] = e("span", { class: "icon" }, "↓", -1)),
            H[5] || (H[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", Fb, "(" + a(xe(r)) + "/" + a(xe(c).items.length) + ")", 1)
          ]),
          e("div", Ab, [
            e("span", Vb, a(O.value ? "minimize" : "expand"), 1)
          ])
        ]),
        O.value ? (s(), o("div", Kb, [
          xe(n) ? (s(), o("div", Jb, [
            H[6] || (H[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            k(Ut, {
              item: xe(n),
              onCancel: H[1] || (H[1] = (V) => z(xe(n).id))
            }, null, 8, ["item"])
          ])) : d("", !0),
          xe(f).length > 0 ? (s(), o("div", Yb, [
            e("div", Xb, [
              e("span", Qb, "Paused (" + a(xe(f).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: H[2] || (H[2] = //@ts-ignore
                (...V) => xe(b) && xe(b)(...V))
              }, "Resume All")
            ]),
            e("div", Zb, [
              (s(!0), o(A, null, Z(xe(f), (V) => (s(), E(Ut, {
                key: V.id,
                item: V,
                onResume: (q) => xe(w)(V.id),
                onRemove: (q) => xe($)(V.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : d("", !0),
          xe(i).length > 0 ? (s(), o("div", e_, [
            e("div", t_, [
              e("span", s_, "Queued (" + a(xe(i).length) + ")", 1)
            ]),
            e("div", o_, [
              (s(!0), o(A, null, Z(xe(i), (V) => (s(), E(Ut, {
                key: V.id,
                item: V,
                onCancel: (q) => z(V.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : d("", !0),
          xe(y).length > 0 ? (s(), o("div", n_, [
            e("div", a_, [
              e("span", l_, "Completed (" + a(xe(y).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: H[3] || (H[3] = //@ts-ignore
                (...V) => xe(T) && xe(T)(...V))
              }, "Clear")
            ]),
            e("div", i_, [
              (s(!0), o(A, null, Z(xe(y).slice(0, 3), (V) => (s(), E(Ut, {
                key: V.id,
                item: V,
                onRemove: (q) => xe($)(V.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : d("", !0),
          xe(g).length > 0 ? (s(), o("div", r_, [
            e("div", d_, [
              e("span", c_, "Failed (" + a(xe(g).length) + ")", 1)
            ]),
            e("div", u_, [
              (s(!0), o(A, null, Z(xe(g), (V) => (s(), E(Ut, {
                key: V.id,
                item: V,
                onRetry: (q) => xe(p)(V.id),
                onRemove: (q) => xe($)(V.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : d("", !0)
        ])) : (s(), o("div", Wb, [
          e("div", jb, [
            e("div", {
              class: "progress-fill",
              style: pt({ width: `${_.value}%` })
            }, null, 4)
          ]),
          xe(n) ? (s(), o("div", Gb, [
            e("span", qb, a(xe(n).filename), 1),
            e("span", Hb, a(S(xe(n).speed)), 1)
          ])) : d("", !0)
        ]))
      ], 2)) : d("", !0)
    ]));
  }
}), v_ = /* @__PURE__ */ te(m_, [["__scopeId", "data-v-60751cfa"]]), f_ = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', g_ = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', p_ = {
  comfy: f_,
  phosphor: g_
}, ps = "comfy", qs = "comfygit-theme";
let Ct = null, Hs = ps;
function h_() {
  try {
    const t = localStorage.getItem(qs);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return ps;
}
function Ks(t = ps) {
  Ct && Ct.remove(), Ct = document.createElement("style"), Ct.id = "comfygit-theme-styles", Ct.setAttribute("data-theme", t), Ct.textContent = p_[t], document.head.appendChild(Ct), document.body.setAttribute("data-comfygit-theme", t), Hs = t;
  try {
    localStorage.setItem(qs, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function y_() {
  return Hs;
}
function w_(t) {
  Ks(t);
}
function k_(t) {
  var g;
  const { ui_id: c, state: n } = t || {}, i = (n == null ? void 0 : n.history) || {};
  if (!c)
    return null;
  const y = i[c];
  return y && y.result === "error" && ((g = y.status) == null ? void 0 : g.status_str) === "error" ? (y.status.messages || [])[0] || "Unknown error" : null;
}
const hs = document.createElement("link");
hs.rel = "stylesheet";
hs.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(hs);
const b_ = h_();
Ks(b_);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), w_(t);
  },
  getTheme: () => {
    const t = y_();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let ot = null, Je = null, At = null, Ot = null, Ts = null;
const Rt = C(null);
let ys = "managed", Xt = null;
async function Qt() {
  var t;
  if (!((t = kt) != null && t.api)) return null;
  try {
    const c = await kt.api.fetchApi("/v2/comfygit/status");
    c.ok && (Rt.value = await c.json());
  } catch {
  }
}
async function ds() {
  var t;
  if ((t = kt) != null && t.api)
    try {
      const c = await kt.api.fetchApi("/v2/setup/status");
      c.ok && (ys = (await c.json()).state);
    } catch {
    }
}
function __() {
  var c;
  const t = document.querySelectorAll("button.comfyui-button");
  for (const n of t)
    if ((c = n.textContent) != null && c.includes("Manager") && !n.classList.contains("comfygit-panel-btn"))
      return !0;
  return window.comfyManager !== void 0;
}
function Js() {
  Xt && (ys === "unmanaged" && __() ? (Xt.style.display = "none", console.log("[ComfyGit] Hiding buttons - unmanaged environment with ComfyUI-Manager present")) : Xt.style.display = "");
}
function $_() {
  if (!Rt.value) return !1;
  const t = Rt.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || Rt.value.has_changes;
}
function Rs(t) {
  ot && ot.remove(), ot = document.createElement("div"), ot.className = "comfygit-panel-overlay";
  const c = document.createElement("div");
  c.className = "comfygit-panel-container", ot.appendChild(c), ot.addEventListener("click", (y) => {
    y.target === ot && is();
  });
  const n = (y) => {
    y.key === "Escape" && (is(), document.removeEventListener("keydown", n));
  };
  document.addEventListener("keydown", n), ms({
    render: () => vs(wb, {
      initialView: t,
      onClose: is,
      onStatusUpdate: async (y) => {
        Rt.value = y, Vt(), await ds(), cs(), Js();
      }
    })
  }).mount(c), document.body.appendChild(ot);
}
function is() {
  ot && (ot.remove(), ot = null);
}
function C_(t) {
  Bt(), Je = document.createElement("div"), Je.className = "comfygit-commit-popover-container";
  const c = t.getBoundingClientRect();
  Je.style.position = "fixed", Je.style.top = `${c.bottom + 8}px`, Je.style.right = `${window.innerWidth - c.right}px`, Je.style.zIndex = "10001";
  const n = (y) => {
    Je && !Je.contains(y.target) && y.target !== t && (Bt(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const i = (y) => {
    y.key === "Escape" && (Bt(), document.removeEventListener("keydown", i));
  };
  document.addEventListener("keydown", i), At = ms({
    render: () => vs(Gs, {
      status: Rt.value,
      onClose: Bt,
      onCommitted: () => {
        Bt(), Qt().then(Vt);
      }
    })
  }), At.mount(Je), document.body.appendChild(Je);
}
function Bt() {
  At && (At.unmount(), At = null), Je && (Je.remove(), Je = null);
}
function x_() {
  Ot || (Ot = document.createElement("div"), Ot.className = "comfygit-download-queue-root", Ts = ms({
    render: () => vs(v_)
  }), Ts.mount(Ot), document.body.appendChild(Ot), console.log("[ComfyGit] Model download queue mounted"));
}
let Ze = null;
function Vt() {
  if (!Ze) return;
  const t = Ze.querySelector(".commit-indicator");
  t && (t.style.display = $_() ? "block" : "none");
}
function cs() {
  if (!Ze) return;
  const t = ys !== "managed";
  Ze.disabled = t, Ze.title = t ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
}
const Ys = document.createElement("style");
Ys.textContent = `
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
document.head.appendChild(Ys);
kt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var y, g;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const c = document.createElement("button");
    c.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", c.textContent = "ComfyGit", c.title = "ComfyGit Control Panel", c.onclick = Rs, Ze = document.createElement("button"), Ze.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Ze.innerHTML = 'Commit <span class="commit-indicator"></span>', Ze.title = "Quick Commit", Ze.onclick = () => C_(Ze), t.appendChild(c), t.appendChild(Ze), (g = (y = kt.menu) == null ? void 0 : y.settingsGroup) != null && g.element && (kt.menu.settingsGroup.element.before(t), Xt = t, console.log("[ComfyGit] Control Panel buttons added to toolbar")), x_();
    const { loadPendingDownloads: n } = jt();
    n(), await Promise.all([Qt(), ds()]), Vt(), Js(), cs(), setInterval(async () => {
      await Promise.all([Qt(), ds()]), Vt(), cs();
    }, 3e4);
    const i = kt.api;
    if (i) {
      let f = function() {
        localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.OpenWorkflowsPaths"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((p) => {
          (p.startsWith("workflow:") || p.startsWith("Comfy.OpenWorkflowsPaths:") || p.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(p);
        }), window.location.reload();
      }, v = function() {
        const p = document.createElement("div");
        p.style.cssText = `
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
        const w = document.createElement("span");
        w.textContent = "Workflows updated - refresh required", p.appendChild(w);
        const b = document.createElement("button");
        b.textContent = "Refresh", b.style.cssText = `
          background: var(--comfy-menu-bg);
          color: var(--fg-color);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 6px 16px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
        `, b.onmouseover = () => b.style.background = "var(--comfy-input-bg)", b.onmouseout = () => b.style.background = "var(--comfy-menu-bg)", b.onclick = () => f(), p.appendChild(b);
        const $ = document.createElement("button");
        $.textContent = "×", $.style.cssText = `
          background: transparent;
          border: none;
          color: var(--fg-color);
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, $.onmouseover = () => $.style.opacity = "1", $.onmouseout = () => $.style.opacity = "0.6", $.onclick = () => p.remove(), p.appendChild($), document.body.appendChild(p), console.log("[ComfyGit] Refresh notification displayed");
      }, r = function(p) {
        const w = document.getElementById("comfygit-error-toast");
        w && w.remove();
        const b = document.createElement("div");
        b.id = "comfygit-error-toast", b.style.cssText = `
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
        const $ = document.createElement("span");
        $.textContent = "⚠️", $.style.fontSize = "20px", b.appendChild($);
        const T = document.createElement("div");
        T.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 4px;";
        const O = document.createElement("div");
        O.textContent = "Node installation failed", O.style.cssText = "font-weight: 600; color: #e53935;", T.appendChild(O);
        const m = document.createElement("div");
        m.textContent = "Dependency conflict detected", m.style.cssText = "font-size: 12px; opacity: 0.8;", T.appendChild(m), b.appendChild(T);
        const _ = document.createElement("button");
        _.textContent = "View Logs", _.style.cssText = `
          background: #e53935;
          color: #fff;
          border: none;
          border-radius: 4px;
          padding: 6px 12px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 500;
          white-space: nowrap;
        `, _.onmouseover = () => _.style.background = "#c62828", _.onmouseout = () => _.style.background = "#e53935", _.onclick = () => {
          b.remove(), Rs("debug-env");
        }, b.appendChild(_);
        const z = document.createElement("button");
        z.textContent = "×", z.style.cssText = `
          background: transparent;
          border: none;
          color: #fff;
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, z.onmouseover = () => z.style.opacity = "1", z.onmouseout = () => z.style.opacity = "0.6", z.onclick = () => b.remove(), b.appendChild(z), document.body.appendChild(b), console.log("[ComfyGit] Manager error toast displayed:", p), setTimeout(() => {
          document.getElementById("comfygit-error-toast") && b.remove();
        }, 1e4);
      };
      i.addEventListener("comfygit:workflow-changed", async (p) => {
        const { change_type: w, workflow_name: b } = p.detail;
        console.log(`[ComfyGit] Workflow ${w}: ${b}`), await Qt(), Vt();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let u = !1;
      i.addEventListener("status", async (p) => {
        const w = p.detail != null;
        w && !u && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), f()) : v()), u = w;
      }), console.log("[ComfyGit] Refresh notification system initialized"), i.addEventListener("cm-task-completed", (p) => {
        const w = k_(p.detail);
        w && r(w);
      }), console.log("[ComfyGit] Manager error notification system initialized");
    }
  }
});
