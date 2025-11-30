import { app as ct } from "../../scripts/app.js";
import { defineComponent as Y, createElementBlock as o, openBlock as s, createCommentVNode as r, createElementVNode as e, renderSlot as we, createBlock as I, resolveDynamicComponent as Zt, normalizeClass as ne, withCtx as i, toDisplayString as a, createVNode as f, createTextVNode as w, computed as B, Fragment as A, renderList as te, normalizeStyle as nt, ref as _, onMounted as Le, watch as Vt, Teleport as Oe, withModifiers as ze, Transition as Vs, createSlots as At, withKeys as ut, reactive as es, onUnmounted as vs, readonly as As, unref as ke, withDirectives as Ue, vModelText as zt, nextTick as Ws, vModelSelect as wt, vModelCheckbox as qt, vModelRadio as Gs, TransitionGroup as js, createApp as ts, h as ss } from "vue";
const Hs = { class: "panel-layout" }, qs = {
  key: 0,
  class: "panel-layout-header"
}, Ks = {
  key: 1,
  class: "panel-layout-search"
}, Js = { class: "panel-layout-content" }, Ys = {
  key: 2,
  class: "panel-layout-footer"
}, Xs = /* @__PURE__ */ Y({
  __name: "PanelLayout",
  setup(t) {
    return (u, n) => (s(), o("div", Hs, [
      u.$slots.header ? (s(), o("div", qs, [
        we(u.$slots, "header", {}, void 0, !0)
      ])) : r("", !0),
      u.$slots.search ? (s(), o("div", Ks, [
        we(u.$slots, "search", {}, void 0, !0)
      ])) : r("", !0),
      e("div", Js, [
        we(u.$slots, "content", {}, void 0, !0)
      ]),
      u.$slots.footer ? (s(), o("div", Ys, [
        we(u.$slots, "footer", {}, void 0, !0)
      ])) : r("", !0)
    ]));
  }
}), X = (t, u) => {
  const n = t.__vccOpts || t;
  for (const [d, g] of u)
    n[d] = g;
  return n;
}, Ve = /* @__PURE__ */ X(Xs, [["__scopeId", "data-v-21565df9"]]), Qs = {
  key: 0,
  class: "panel-title-prefix"
}, Zs = {
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
    return (u, n) => (s(), I(Zt(`h${t.level}`), {
      class: ne(["panel-title", t.variant])
    }, {
      default: i(() => [
        t.showPrefix ? (s(), o("span", Qs, a(t.prefix), 1)) : (s(), o("span", Zs)),
        we(u.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), to = /* @__PURE__ */ X(eo, [["__scopeId", "data-v-c3875efc"]]), so = ["title"], oo = ["width", "height"], no = /* @__PURE__ */ Y({
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
      onClick: n[0] || (n[0] = (d) => u.$emit("click"))
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
      ])], 8, oo))
    ], 8, so));
  }
}), fs = /* @__PURE__ */ X(no, [["__scopeId", "data-v-6fc7f16d"]]), ao = { class: "header-left" }, lo = {
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
    return (u, n) => (s(), o("div", {
      class: ne(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", ao, [
        f(to, { "show-prefix": t.showPrefix }, {
          default: i(() => [
            w(a(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (s(), I(fs, {
          key: 0,
          onClick: n[0] || (n[0] = (d) => u.$emit("info-click"))
        })) : r("", !0)
      ]),
      u.$slots.actions ? (s(), o("div", lo, [
        we(u.$slots, "actions", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), Ae = /* @__PURE__ */ X(io, [["__scopeId", "data-v-55a62cd6"]]), ro = {
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
    return (u, n) => (s(), I(Zt(`h${t.level}`), {
      class: ne(["section-title", { clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (d) => t.clickable && u.$emit("click"))
    }, {
      default: i(() => [
        we(u.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", ro, "(" + a(t.count) + ")", 1)) : r("", !0),
        t.clickable ? (s(), o("span", co, a(t.expanded ? "▼" : "▸"), 1)) : r("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), je = /* @__PURE__ */ X(uo, [["__scopeId", "data-v-559361eb"]]), mo = { class: "status-grid" }, vo = { class: "status-grid__columns" }, fo = { class: "status-grid__column" }, go = { class: "status-grid__title" }, po = { class: "status-grid__column status-grid__column--right" }, ho = { class: "status-grid__title" }, yo = {
  key: 0,
  class: "status-grid__footer"
}, wo = /* @__PURE__ */ Y({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (u, n) => (s(), o("div", mo, [
      e("div", vo, [
        e("div", fo, [
          e("h4", go, a(t.leftTitle), 1),
          we(u.$slots, "left", {}, void 0, !0)
        ]),
        e("div", po, [
          e("h4", ho, a(t.rightTitle), 1),
          we(u.$slots, "right", {}, void 0, !0)
        ])
      ]),
      u.$slots.footer ? (s(), o("div", yo, [
        we(u.$slots, "footer", {}, void 0, !0)
      ])) : r("", !0)
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
    const u = t, n = B(() => `status-item--${u.variant}`);
    return (d, g) => (s(), o("div", {
      class: ne(["status-item", n.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (s(), o("span", bo, a(t.icon), 1)) : r("", !0),
      t.count !== void 0 ? (s(), o("span", _o, a(t.count), 1)) : r("", !0),
      e("span", $o, a(t.label), 1)
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
}, To = {
  key: 2,
  class: "issue-card__actions"
}, Lo = /* @__PURE__ */ Y({
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
    return (d, g) => (s(), o("div", {
      class: ne(["issue-card", n.value])
    }, [
      e("div", xo, [
        e("span", So, a(t.icon), 1),
        e("h4", Io, a(t.title), 1)
      ]),
      d.$slots.default || t.description ? (s(), o("div", Eo, [
        t.description ? (s(), o("p", Mo, a(t.description), 1)) : r("", !0),
        we(d.$slots, "default", {}, void 0, !0)
      ])) : r("", !0),
      t.items && t.items.length ? (s(), o("div", zo, [
        (s(!0), o(A, null, te(t.items, (v, p) => (s(), o("div", {
          key: p,
          class: "issue-card__item"
        }, [
          g[0] || (g[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, a(v), 1)
        ]))), 128))
      ])) : r("", !0),
      d.$slots.actions ? (s(), o("div", To, [
        we(d.$slots, "actions", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), Ze = /* @__PURE__ */ X(Lo, [["__scopeId", "data-v-df6aa348"]]), Do = ["type", "disabled"], Ro = {
  key: 0,
  class: "spinner"
}, No = /* @__PURE__ */ Y({
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
      class: ne(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: n[0] || (n[0] = (d) => u.$emit("click", d))
    }, [
      t.loading ? (s(), o("span", Ro)) : r("", !0),
      t.loading ? r("", !0) : we(u.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, Do));
  }
}), ee = /* @__PURE__ */ X(No, [["__scopeId", "data-v-772abe47"]]), Uo = { class: "empty-state" }, Po = {
  key: 0,
  class: "empty-icon"
}, Oo = { class: "empty-message" }, Bo = /* @__PURE__ */ Y({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (u, n) => (s(), o("div", Uo, [
      t.icon ? (s(), o("div", Po, a(t.icon), 1)) : r("", !0),
      e("p", Oo, a(t.message), 1),
      t.actionLabel ? (s(), I(ee, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (d) => u.$emit("action"))
      }, {
        default: i(() => [
          w(a(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : r("", !0)
    ]));
  }
}), Xe = /* @__PURE__ */ X(Bo, [["__scopeId", "data-v-4466284f"]]), Fo = /* @__PURE__ */ Y({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (u, n) => (s(), o("span", {
      class: ne(["detail-label"]),
      style: nt({ minWidth: t.minWidth })
    }, [
      we(u.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), Kt = /* @__PURE__ */ X(Fo, [["__scopeId", "data-v-75e9eeb8"]]), Vo = /* @__PURE__ */ Y({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (u, n) => (s(), o("span", {
      class: ne(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      we(u.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Jt = /* @__PURE__ */ X(Vo, [["__scopeId", "data-v-2f186e4c"]]), Ao = { class: "detail-row" }, Wo = /* @__PURE__ */ Y({
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
    return (u, n) => (s(), o("div", Ao, [
      f(Kt, { "min-width": t.labelMinWidth }, {
        default: i(() => [
          w(a(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (s(), I(Jt, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: i(() => [
          w(a(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : we(u.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), Se = /* @__PURE__ */ X(Wo, [["__scopeId", "data-v-ef15664a"]]), Go = { class: "modal-header" }, jo = { class: "modal-body" }, Ho = { class: "status-section" }, qo = {
  key: 0,
  class: "status-section"
}, Ko = { class: "section-header-row" }, Jo = {
  key: 0,
  class: "workflow-group"
}, Yo = { class: "workflow-group-header" }, Xo = { class: "workflow-group-title" }, Qo = { class: "workflow-list" }, Zo = { class: "workflow-name" }, en = { class: "workflow-issue" }, tn = {
  key: 1,
  class: "workflow-group"
}, sn = { class: "workflow-group-header" }, on = { class: "workflow-group-title" }, nn = { class: "workflow-list" }, an = { class: "workflow-name" }, ln = { class: "workflow-issue" }, rn = {
  key: 2,
  class: "workflow-group"
}, dn = { class: "workflow-group-header" }, cn = { class: "workflow-group-title" }, un = { class: "workflow-list" }, mn = { class: "workflow-name" }, vn = {
  key: 3,
  class: "workflow-group"
}, fn = { class: "workflow-group-header" }, gn = { class: "workflow-group-title" }, pn = { class: "workflow-list" }, hn = { class: "workflow-name" }, yn = {
  key: 4,
  class: "workflow-group"
}, wn = { class: "workflow-group-header" }, kn = { class: "workflow-group-title" }, bn = { class: "workflow-list" }, _n = { class: "workflow-name" }, $n = {
  key: 5,
  class: "workflow-group"
}, Cn = { class: "workflow-group-title" }, xn = { class: "expand-icon" }, Sn = {
  key: 0,
  class: "workflow-list"
}, In = { class: "workflow-name" }, En = {
  key: 1,
  class: "status-section"
}, Mn = {
  key: 0,
  class: "change-group"
}, zn = { class: "change-group-header" }, Tn = { class: "change-group-title" }, Ln = { class: "change-list" }, Dn = { class: "node-name" }, Rn = {
  key: 0,
  class: "dev-badge"
}, Nn = {
  key: 1,
  class: "change-group"
}, Un = { class: "change-group-header" }, Pn = { class: "change-group-title" }, On = { class: "change-list" }, Bn = { class: "node-name" }, Fn = {
  key: 0,
  class: "dev-badge"
}, Vn = {
  key: 2,
  class: "change-group"
}, An = { class: "change-list" }, Wn = { class: "change-item" }, Gn = { class: "node-name" }, jn = {
  key: 3,
  class: "change-group"
}, Hn = {
  key: 2,
  class: "status-section"
}, qn = { class: "section-header-row" }, Kn = {
  key: 0,
  class: "drift-item"
}, Jn = { class: "drift-list" }, Yn = {
  key: 0,
  class: "drift-list-more"
}, Xn = {
  key: 1,
  class: "drift-item"
}, Qn = { class: "drift-list" }, Zn = {
  key: 0,
  class: "drift-list-more"
}, ea = {
  key: 2,
  class: "drift-item"
}, ta = {
  key: 3,
  class: "drift-item"
}, sa = {
  key: 3,
  class: "status-section"
}, oa = { class: "info-box" }, na = { class: "drift-list" }, aa = {
  key: 0,
  class: "drift-list-more"
}, la = {
  key: 4,
  class: "status-section"
}, ia = { class: "warning-box" }, ra = {
  key: 5,
  class: "empty-state-inline"
}, da = { class: "modal-actions" }, ca = /* @__PURE__ */ Y({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {}
  },
  emits: ["close", "navigate-workflows", "navigate-nodes"],
  setup(t) {
    const u = t, n = _(!1);
    Le(() => {
      console.log("StatusDetailModal mounted, initial show value:", u.show);
    }), Vt(() => u.show, (k, $) => {
      console.log("StatusDetailModal show prop changed from", $, "to", k);
    }, { immediate: !0 });
    const d = B(() => {
      var k, $, D;
      return ((D = ($ = (k = u.status) == null ? void 0 : k.workflows) == null ? void 0 : $.analyzed) == null ? void 0 : D.filter(
        (S) => S.status === "broken" && S.sync_state === "synced"
      )) || [];
    }), g = B(() => {
      var k, $, D;
      return ((D = ($ = (k = u.status) == null ? void 0 : k.workflows) == null ? void 0 : $.analyzed) == null ? void 0 : D.filter(
        (S) => S.status === "broken" && S.sync_state !== "synced"
      )) || [];
    }), v = B(() => {
      var k, $, D;
      return ((D = ($ = (k = u.status) == null ? void 0 : k.workflows) == null ? void 0 : $.synced) == null ? void 0 : D.filter((S) => {
        var M, V, L;
        const h = (L = (V = (M = u.status) == null ? void 0 : M.workflows) == null ? void 0 : V.analyzed) == null ? void 0 : L.find((N) => N.name === S);
        return !h || h.status !== "broken";
      })) || [];
    }), p = B(() => {
      var k, $, D, S, h;
      return (k = u.status) != null && k.workflows ? ((($ = u.status.workflows.new) == null ? void 0 : $.length) ?? 0) > 0 || (((D = u.status.workflows.modified) == null ? void 0 : D.length) ?? 0) > 0 || (((S = u.status.workflows.deleted) == null ? void 0 : S.length) ?? 0) > 0 || (((h = u.status.workflows.synced) == null ? void 0 : h.length) ?? 0) > 0 : !1;
    }), m = B(() => {
      var $, D, S;
      const k = ($ = u.status) == null ? void 0 : $.git_changes;
      return k ? (((D = k.nodes_added) == null ? void 0 : D.length) ?? 0) > 0 || (((S = k.nodes_removed) == null ? void 0 : S.length) ?? 0) > 0 || k.workflow_changes || k.has_other_changes : !1;
    }), l = B(() => {
      var k, $, D, S, h, M;
      return !p.value && !m.value && (($ = (k = u.status) == null ? void 0 : k.comparison) == null ? void 0 : $.is_synced) && (((D = u.status) == null ? void 0 : D.missing_models_count) ?? 0) === 0 && (((M = (h = (S = u.status) == null ? void 0 : S.comparison) == null ? void 0 : h.disabled_nodes) == null ? void 0 : M.length) ?? 0) === 0;
    }), c = B(() => {
      var $, D;
      const k = (D = ($ = u.status) == null ? void 0 : $.git_changes) == null ? void 0 : D.workflow_changes;
      return k ? typeof k == "number" ? k : Object.keys(k).length : 0;
    });
    function b(k) {
      return typeof k == "string" ? k : k.name;
    }
    function y(k) {
      return typeof k == "object" && k.is_development === !0;
    }
    return (k, $) => {
      var D, S, h, M, V, L, N, W, R, T, z, C, x, G, H, Z, ge, ae, se, O, E, oe;
      return s(), I(Oe, { to: "body" }, [
        t.show ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: $[6] || ($[6] = (Q) => k.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: $[5] || ($[5] = ze(() => {
            }, ["stop"]))
          }, [
            e("div", Go, [
              $[7] || ($[7] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: $[0] || ($[0] = (Q) => k.$emit("close"))
              }, "✕")
            ]),
            e("div", jo, [
              e("div", Ho, [
                f(je, { level: "4" }, {
                  default: i(() => [...$[8] || ($[8] = [
                    w("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                f(Se, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              p.value ? (s(), o("div", qo, [
                e("div", Ko, [
                  f(je, { level: "4" }, {
                    default: i(() => [...$[9] || ($[9] = [
                      w("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: $[1] || ($[1] = (Q) => k.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                d.value.length ? (s(), o("div", Jo, [
                  e("div", Yo, [
                    $[10] || ($[10] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Xo, "BROKEN (COMMITTED) (" + a(d.value.length) + ")", 1)
                  ]),
                  e("div", Qo, [
                    (s(!0), o(A, null, te(d.value, (Q) => (s(), o("div", {
                      key: Q.name,
                      class: "workflow-item"
                    }, [
                      e("span", Zo, a(Q.name), 1),
                      e("span", en, a(Q.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                g.value.length ? (s(), o("div", tn, [
                  e("div", sn, [
                    $[11] || ($[11] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", on, "BROKEN (UNCOMMITTED) (" + a(g.value.length) + ")", 1)
                  ]),
                  e("div", nn, [
                    (s(!0), o(A, null, te(g.value, (Q) => (s(), o("div", {
                      key: Q.name,
                      class: "workflow-item"
                    }, [
                      e("span", an, a(Q.name), 1),
                      e("span", ln, a(Q.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (S = (D = t.status.workflows) == null ? void 0 : D.new) != null && S.length ? (s(), o("div", rn, [
                  e("div", dn, [
                    $[12] || ($[12] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", cn, "NEW (" + a(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", un, [
                    (s(!0), o(A, null, te(t.status.workflows.new, (Q) => (s(), o("div", {
                      key: Q,
                      class: "workflow-item"
                    }, [
                      e("span", mn, a(Q), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (M = (h = t.status.workflows) == null ? void 0 : h.modified) != null && M.length ? (s(), o("div", vn, [
                  e("div", fn, [
                    $[13] || ($[13] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", gn, "MODIFIED (" + a(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", pn, [
                    (s(!0), o(A, null, te(t.status.workflows.modified, (Q) => (s(), o("div", {
                      key: Q,
                      class: "workflow-item"
                    }, [
                      e("span", hn, a(Q), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (L = (V = t.status.workflows) == null ? void 0 : V.deleted) != null && L.length ? (s(), o("div", yn, [
                  e("div", wn, [
                    $[14] || ($[14] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", kn, "DELETED (" + a(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", bn, [
                    (s(!0), o(A, null, te(t.status.workflows.deleted, (Q) => (s(), o("div", {
                      key: Q,
                      class: "workflow-item"
                    }, [
                      e("span", _n, a(Q), 1)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                v.value.length ? (s(), o("div", $n, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: $[2] || ($[2] = (Q) => n.value = !n.value)
                  }, [
                    $[15] || ($[15] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", Cn, "SYNCED (" + a(v.value.length) + ")", 1),
                    e("span", xn, a(n.value ? "▼" : "▶"), 1)
                  ]),
                  n.value ? (s(), o("div", Sn, [
                    (s(!0), o(A, null, te(v.value, (Q) => (s(), o("div", {
                      key: Q,
                      class: "workflow-item"
                    }, [
                      e("span", In, a(Q), 1)
                    ]))), 128))
                  ])) : r("", !0)
                ])) : r("", !0)
              ])) : r("", !0),
              m.value ? (s(), o("div", En, [
                f(je, { level: "4" }, {
                  default: i(() => [...$[16] || ($[16] = [
                    w("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (W = (N = t.status.git_changes) == null ? void 0 : N.nodes_added) != null && W.length ? (s(), o("div", Mn, [
                  e("div", zn, [
                    $[17] || ($[17] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", Tn, "NODES ADDED (" + a(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", Ln, [
                    (s(!0), o(A, null, te(t.status.git_changes.nodes_added, (Q) => (s(), o("div", {
                      key: b(Q),
                      class: "change-item"
                    }, [
                      e("span", Dn, a(b(Q)), 1),
                      y(Q) ? (s(), o("span", Rn, "dev")) : r("", !0)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (T = (R = t.status.git_changes) == null ? void 0 : R.nodes_removed) != null && T.length ? (s(), o("div", Nn, [
                  e("div", Un, [
                    $[18] || ($[18] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", Pn, "NODES REMOVED (" + a(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", On, [
                    (s(!0), o(A, null, te(t.status.git_changes.nodes_removed, (Q) => (s(), o("div", {
                      key: b(Q),
                      class: "change-item"
                    }, [
                      e("span", Bn, a(b(Q)), 1),
                      y(Q) ? (s(), o("span", Fn, "dev")) : r("", !0)
                    ]))), 128))
                  ])
                ])) : r("", !0),
                (z = t.status.git_changes) != null && z.workflow_changes ? (s(), o("div", Vn, [
                  $[19] || ($[19] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", An, [
                    e("div", Wn, [
                      e("span", Gn, a(c.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : r("", !0),
                (C = t.status.git_changes) != null && C.has_other_changes ? (s(), o("div", jn, [...$[20] || ($[20] = [
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
              (x = t.status.comparison) != null && x.is_synced ? r("", !0) : (s(), o("div", Hn, [
                e("div", qn, [
                  f(je, { level: "4" }, {
                    default: i(() => [...$[21] || ($[21] = [
                      w("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: $[3] || ($[3] = (Q) => k.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                $[22] || ($[22] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (H = (G = t.status.comparison) == null ? void 0 : G.missing_nodes) != null && H.length ? (s(), o("div", Kn, [
                  f(Se, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", Jn, [
                    (s(!0), o(A, null, te(t.status.comparison.missing_nodes.slice(0, 10), (Q) => (s(), o("div", {
                      key: Q,
                      class: "drift-list-item"
                    }, " - " + a(Q), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (s(), o("div", Yn, " ... and " + a(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : r("", !0)
                  ])
                ])) : r("", !0),
                (ge = (Z = t.status.comparison) == null ? void 0 : Z.extra_nodes) != null && ge.length ? (s(), o("div", Xn, [
                  f(Se, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", Qn, [
                    (s(!0), o(A, null, te(t.status.comparison.extra_nodes.slice(0, 10), (Q) => (s(), o("div", {
                      key: Q,
                      class: "drift-list-item"
                    }, " - " + a(Q), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (s(), o("div", Zn, " ... and " + a(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : r("", !0)
                  ])
                ])) : r("", !0),
                (se = (ae = t.status.comparison) == null ? void 0 : ae.version_mismatches) != null && se.length ? (s(), o("div", ea, [
                  f(Se, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} packages have version conflicts`
                  }, null, 8, ["value"])
                ])) : r("", !0),
                (O = t.status.comparison) != null && O.packages_in_sync ? r("", !0) : (s(), o("div", ta, [
                  f(Se, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ]))
              ])),
              (oe = (E = t.status.comparison) == null ? void 0 : E.disabled_nodes) != null && oe.length ? (s(), o("div", sa, [
                f(je, { level: "4" }, {
                  default: i(() => [...$[23] || ($[23] = [
                    w("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", oa, [
                  $[24] || ($[24] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, a(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", na, [
                  (s(!0), o(A, null, te(t.status.comparison.disabled_nodes.slice(0, 10), (Q) => (s(), o("div", {
                    key: Q,
                    class: "drift-list-item"
                  }, " • " + a(Q), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (s(), o("div", aa, " ... and " + a(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : r("", !0)
                ])
              ])) : r("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (s(), o("div", la, [
                f(je, { level: "4" }, {
                  default: i(() => [...$[25] || ($[25] = [
                    w("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", ia, [
                  $[26] || ($[26] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, a(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                $[27] || ($[27] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : r("", !0),
              l.value ? (s(), o("div", ra, [...$[28] || ($[28] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : r("", !0)
            ]),
            e("div", da, [
              f(ee, {
                variant: "secondary",
                onClick: $[4] || ($[4] = (Q) => k.$emit("close"))
              }, {
                default: i(() => [...$[29] || ($[29] = [
                  w(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : r("", !0)
      ]);
    };
  }
}), ua = /* @__PURE__ */ X(ca, [["__scopeId", "data-v-c67eed17"]]), ma = { class: "health-section-header" }, va = { class: "suggestions-content" }, fa = { class: "suggestions-text" }, ga = {
  key: 4,
  style: { "margin-top": "var(--cg-space-3)" }
}, pa = /* @__PURE__ */ Y({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "start-setup", "view-environments", "create-environment"],
  setup(t, { emit: u }) {
    const n = t, d = _(!1), g = _(!1);
    function v() {
      d.value = !0;
    }
    function p() {
      d.value = !1, l("view-workflows");
    }
    function m() {
      d.value = !1, l("view-nodes");
    }
    const l = u, c = B(() => n.status.workflows.new.length > 0 || n.status.workflows.modified.length > 0 || n.status.workflows.deleted.length > 0), b = B(() => n.status.has_changes), y = B(() => {
      const R = n.status.git_changes;
      return R.nodes_added.length > 0 || R.nodes_removed.length > 0 || R.workflow_changes;
    }), k = B(() => n.status.has_changes || c.value), $ = B(() => Object.keys(n.status.git_changes.workflow_changes_detail).length), D = B(() => n.status.git_changes.has_other_changes), S = B(() => {
      var R;
      return ((R = n.status.workflows.analyzed) == null ? void 0 : R.filter((T) => T.status === "broken")) || [];
    }), h = B(() => {
      var R;
      return ((R = n.status.workflows.analyzed) == null ? void 0 : R.filter(
        (T) => T.has_path_sync_issues && !T.has_issues
      )) || [];
    }), M = B(() => S.value.length > 0), V = B(() => M.value || h.value.length > 0 || n.status.missing_models_count > 0 || !n.status.comparison.is_synced || n.status.has_legacy_manager), L = B(() => {
      const R = [];
      return n.status.workflows.new.length > 0 && R.push(`${n.status.workflows.new.length} new`), n.status.workflows.modified.length > 0 && R.push(`${n.status.workflows.modified.length} modified`), n.status.workflows.deleted.length > 0 && R.push(`${n.status.workflows.deleted.length} deleted`), R.length > 0 ? `${R.join(", ")} workflow${R.length === 1 && !R[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), N = B(() => {
      var z, C;
      const R = [], T = n.status.comparison;
      return (z = T.missing_nodes) != null && z.length && R.push(`${T.missing_nodes.length} missing node${T.missing_nodes.length === 1 ? "" : "s"}`), (C = T.extra_nodes) != null && C.length && R.push(`${T.extra_nodes.length} untracked node${T.extra_nodes.length === 1 ? "" : "s"}`), R.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${R.join(" and ")}.`;
    }), W = B(() => {
      var z, C;
      const R = [], T = n.status.comparison;
      return (z = T.extra_nodes) != null && z.length && (T.extra_nodes.slice(0, 3).forEach((x) => {
        R.push(`Untracked: ${x}`);
      }), T.extra_nodes.length > 3 && R.push(`...and ${T.extra_nodes.length - 3} more untracked`)), (C = T.missing_nodes) != null && C.length && (T.missing_nodes.slice(0, 3).forEach((x) => {
        R.push(`Missing: ${x}`);
      }), T.missing_nodes.length > 3 && R.push(`...and ${T.missing_nodes.length - 3} more missing`)), R;
    });
    return (R, T) => (s(), o(A, null, [
      f(Ve, null, {
        header: i(() => [
          f(Ae, { title: "STATUS" })
        ]),
        content: i(() => [
          n.setupState === "no_workspace" ? (s(), I(Ze, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: i(() => [
              f(ee, {
                variant: "primary",
                size: "sm",
                onClick: T[0] || (T[0] = (z) => R.$emit("start-setup"))
              }, {
                default: i(() => [...T[13] || (T[13] = [
                  w(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : n.setupState === "unmanaged" ? (s(), I(Ze, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: i(() => [
              f(ee, {
                variant: "primary",
                size: "sm",
                onClick: T[1] || (T[1] = (z) => R.$emit("view-environments"))
              }, {
                default: i(() => [...T[14] || (T[14] = [
                  w(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : n.setupState === "empty_workspace" ? (s(), I(Ze, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: i(() => [
              f(ee, {
                variant: "primary",
                size: "sm",
                onClick: T[2] || (T[2] = (z) => R.$emit("create-environment"))
              }, {
                default: i(() => [...T[15] || (T[15] = [
                  w(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : r("", !0),
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: T[4] || (T[4] = (z) => g.value = !0),
            onMouseleave: T[5] || (T[5] = (z) => g.value = !1)
          }, [
            e("div", ma, [
              f(je, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: i(() => [...T[16] || (T[16] = [
                  w(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              f(Vs, { name: "fade" }, {
                default: i(() => [
                  g.value ? (s(), I(ee, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: v
                  }, {
                    default: i(() => [...T[17] || (T[17] = [
                      w(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : r("", !0)
                ]),
                _: 1
              })
            ]),
            f(ko, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, At({
              left: i(() => [
                t.status.workflows.new.length ? (s(), I(Qe, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : r("", !0),
                t.status.workflows.modified.length ? (s(), I(Qe, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : r("", !0),
                t.status.workflows.deleted.length ? (s(), I(Qe, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : r("", !0),
                f(Qe, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: c.value
                }, null, 8, ["count", "separator"])
              ]),
              right: i(() => [
                t.status.git_changes.nodes_added.length ? (s(), I(Qe, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : r("", !0),
                t.status.git_changes.nodes_removed.length ? (s(), I(Qe, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : r("", !0),
                t.status.git_changes.workflow_changes ? (s(), I(Qe, {
                  key: 2,
                  icon: "●",
                  count: $.value,
                  label: $.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : r("", !0),
                D.value ? (s(), I(Qe, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : r("", !0),
                b.value && !y.value && !D.value ? (s(), I(Qe, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : r("", !0),
                b.value ? r("", !0) : (s(), I(Qe, {
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
                  T[19] || (T[19] = e("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  e("div", va, [
                    e("span", fa, a(L.value), 1),
                    f(ee, {
                      variant: "primary",
                      size: "sm",
                      onClick: T[3] || (T[3] = (z) => R.$emit("commit-changes"))
                    }, {
                      default: i(() => [...T[18] || (T[18] = [
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
          t.status.is_detached_head ? (s(), I(Ze, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: i(() => [
              f(ee, {
                variant: "primary",
                size: "sm",
                onClick: T[6] || (T[6] = (z) => R.$emit("create-branch"))
              }, {
                default: i(() => [...T[20] || (T[20] = [
                  w(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : r("", !0),
          V.value ? (s(), o("div", ga, [
            f(je, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: i(() => [...T[21] || (T[21] = [
                w(" ISSUES DETECTED ", -1)
              ])]),
              _: 1
            }),
            S.value.length > 0 ? (s(), I(Ze, {
              key: 0,
              severity: "error",
              icon: "⚠",
              title: `${S.value.length} workflow${S.value.length === 1 ? "" : "s"} can't run`,
              description: "These workflows have missing dependencies that must be resolved before they can run.",
              items: S.value.map((z) => `${z.name} — ${z.issue_summary}`)
            }, {
              actions: i(() => [
                f(ee, {
                  variant: "primary",
                  size: "sm",
                  onClick: T[7] || (T[7] = (z) => R.$emit("view-workflows"))
                }, {
                  default: i(() => [...T[22] || (T[22] = [
                    w(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : r("", !0),
            h.value.length > 0 ? (s(), I(Ze, {
              key: 1,
              severity: "warning",
              icon: "⚠",
              title: `${h.value.length} workflow${h.value.length === 1 ? "" : "s"} with path issues`,
              description: "These workflows can run but have model paths that should be synced.",
              items: h.value.map((z) => `${z.name} — ${z.models_needing_path_sync_count} model path${z.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
            }, {
              actions: i(() => [
                f(ee, {
                  variant: "primary",
                  size: "sm",
                  onClick: T[8] || (T[8] = (z) => R.$emit("view-workflows"))
                }, {
                  default: i(() => [...T[23] || (T[23] = [
                    w(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : r("", !0),
            t.status.missing_models_count > 0 && !M.value ? (s(), I(Ze, {
              key: 2,
              severity: "warning",
              icon: "⚠",
              title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
              description: "Some workflows reference models that are not found in the workspace index."
            }, {
              actions: i(() => [
                f(ee, {
                  variant: "primary",
                  size: "sm",
                  onClick: T[9] || (T[9] = (z) => R.$emit("view-workflows"))
                }, {
                  default: i(() => [...T[24] || (T[24] = [
                    w(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title"])) : r("", !0),
            t.status.comparison.is_synced ? r("", !0) : (s(), I(Ze, {
              key: 3,
              severity: "error",
              icon: "⚠",
              title: "Environment not synced",
              description: N.value,
              items: W.value
            }, {
              actions: i(() => [
                f(ee, {
                  variant: "secondary",
                  size: "sm",
                  onClick: v
                }, {
                  default: i(() => [...T[25] || (T[25] = [
                    w(" View Details ", -1)
                  ])]),
                  _: 1
                }),
                f(ee, {
                  variant: "primary",
                  size: "sm",
                  onClick: T[10] || (T[10] = (z) => R.$emit("view-nodes"))
                }, {
                  default: i(() => [...T[26] || (T[26] = [
                    w(" See Nodes ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["description", "items"])),
            t.status.has_legacy_manager ? (s(), I(Ze, {
              key: 4,
              severity: "warning",
              icon: "⚠",
              title: "Legacy ComfyUI-Manager detected",
              description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
            }, {
              actions: i(() => [
                f(ee, {
                  variant: "primary",
                  size: "sm",
                  onClick: T[11] || (T[11] = (z) => R.$emit("view-nodes"))
                }, {
                  default: i(() => [...T[27] || (T[27] = [
                    w(" See Nodes ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            })) : r("", !0)
          ])) : r("", !0),
          !V.value && !k.value ? (s(), I(Xe, {
            key: 5,
            icon: "✅",
            message: "Everything looks good! No issues detected.",
            style: { "margin-top": "var(--cg-space-4)" }
          })) : r("", !0)
        ]),
        _: 1
      }),
      f(ua, {
        show: d.value,
        status: t.status,
        onClose: T[12] || (T[12] = (z) => d.value = !1),
        onNavigateWorkflows: p,
        onNavigateNodes: m
      }, null, 8, ["show", "status"])
    ], 64));
  }
}), ha = /* @__PURE__ */ X(pa, [["__scopeId", "data-v-1cc2a306"]]), ya = ["type", "value", "placeholder", "disabled"], wa = /* @__PURE__ */ Y({
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
    const d = t, g = n, v = _(null);
    function p(m) {
      const l = m.target.value;
      g("update:modelValue", l);
    }
    return Le(() => {
      d.autoFocus && v.value && v.value.focus();
    }), u({
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
      class: ne(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: p,
      onKeyup: [
        l[0] || (l[0] = ut((c) => m.$emit("enter"), ["enter"])),
        l[1] || (l[1] = ut((c) => m.$emit("escape"), ["escape"]))
      ],
      onFocus: l[2] || (l[2] = (c) => m.$emit("focus")),
      onBlur: l[3] || (l[3] = (c) => m.$emit("blur"))
    }, null, 42, ya));
  }
}), Bt = /* @__PURE__ */ X(wa, [["__scopeId", "data-v-0380d08f"]]), ka = { class: "branch-create-form" }, ba = { class: "form-actions" }, _a = /* @__PURE__ */ Y({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: u }) {
    const n = u, d = _(""), g = B(() => {
      const m = d.value.trim();
      return m.length > 0 && !m.startsWith("-") && !m.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(m);
    });
    function v() {
      g.value && (n("create", d.value.trim()), d.value = "");
    }
    function p() {
      d.value = "", n("cancel");
    }
    return (m, l) => (s(), o("div", ka, [
      f(Bt, {
        modelValue: d.value,
        "onUpdate:modelValue": l[0] || (l[0] = (c) => d.value = c),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: v,
        onEscape: p
      }, null, 8, ["modelValue"]),
      e("div", ba, [
        f(ee, {
          variant: "primary",
          size: "sm",
          disabled: !g.value,
          onClick: v
        }, {
          default: i(() => [...l[1] || (l[1] = [
            w(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        f(ee, {
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
}), $a = /* @__PURE__ */ X(_a, [["__scopeId", "data-v-7c500394"]]), Ca = { class: "branch-list-item__indicator" }, xa = { class: "branch-list-item__name" }, Sa = {
  key: 0,
  class: "branch-list-item__actions"
}, Ia = {
  key: 0,
  class: "branch-list-item__current-label"
}, Ea = /* @__PURE__ */ Y({
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
      class: ne(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (d) => t.clickable && u.$emit("click"))
    }, [
      e("span", Ca, a(t.isCurrent ? "●" : "○"), 1),
      e("span", xa, a(t.branchName), 1),
      u.$slots.actions || t.showCurrentLabel ? (s(), o("div", Sa, [
        we(u.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (s(), o("span", Ia, " current ")) : r("", !0)
      ])) : r("", !0)
    ], 2));
  }
}), Ma = /* @__PURE__ */ X(Ea, [["__scopeId", "data-v-c6581a24"]]), za = {
  key: 2,
  class: "branch-list"
}, Ta = /* @__PURE__ */ Y({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create", "delete"],
  setup(t, { emit: u }) {
    const n = u, d = _(!1);
    function g(p) {
      n("create", p), v();
    }
    function v() {
      d.value = !1;
    }
    return (p, m) => (s(), I(Ve, null, {
      header: i(() => [
        f(Ae, { title: "BRANCHES" }, {
          actions: i(() => [
            d.value ? r("", !0) : (s(), I(ee, {
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
        d.value ? (s(), I($a, {
          key: 0,
          onCreate: g,
          onCancel: v
        })) : r("", !0),
        t.branches.length === 0 ? (s(), I(Xe, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (s(), o("div", za, [
          (s(!0), o(A, null, te(t.branches, (l) => (s(), I(Ma, {
            key: l.name,
            "branch-name": l.name,
            "is-current": l.is_current
          }, {
            actions: i(() => [
              l.is_current ? r("", !0) : (s(), I(ee, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: (c) => p.$emit("delete", l.name)
              }, {
                default: i(() => [...m[2] || (m[2] = [
                  w(" Delete ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])),
              l.is_current ? r("", !0) : (s(), I(ee, {
                key: 1,
                variant: "secondary",
                size: "xs",
                onClick: (c) => p.$emit("switch", l.name)
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
}), La = /* @__PURE__ */ X(Ta, [["__scopeId", "data-v-86784ddd"]]), Da = { class: "commit-list" }, Ra = /* @__PURE__ */ Y({
  __name: "CommitList",
  setup(t) {
    return (u, n) => (s(), o("div", Da, [
      we(u.$slots, "default", {}, void 0, !0)
    ]));
  }
}), Na = /* @__PURE__ */ X(Ra, [["__scopeId", "data-v-8c5ee761"]]), Ua = { class: "commit-hash" }, Pa = /* @__PURE__ */ Y({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const u = t, n = B(() => u.hash.slice(0, u.length));
    return (d, g) => (s(), o("span", Ua, a(n.value), 1));
  }
}), gs = /* @__PURE__ */ X(Pa, [["__scopeId", "data-v-7c333cc6"]]), Oa = { class: "commit-message" }, Ba = { class: "commit-date" }, Fa = /* @__PURE__ */ Y({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t, { emit: u }) {
    const n = t, d = u;
    function g() {
      n.clickable && d("click");
    }
    return (v, p) => (s(), o("div", {
      class: ne(["commit-item", { clickable: t.clickable }]),
      onClick: g
    }, [
      f(gs, { hash: t.hash }, null, 8, ["hash"]),
      e("span", Oa, a(t.message), 1),
      e("span", Ba, a(t.relativeDate), 1),
      v.$slots.actions ? (s(), o("div", {
        key: 0,
        class: "commit-actions",
        onClick: p[0] || (p[0] = ze(() => {
        }, ["stop"]))
      }, [
        we(v.$slots, "actions", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), Va = /* @__PURE__ */ X(Fa, [["__scopeId", "data-v-dd7c621b"]]), Aa = /* @__PURE__ */ Y({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (u, n) => (s(), I(Ve, null, {
      header: i(() => [
        f(Ae, { title: "HISTORY" })
      ]),
      content: i(() => [
        t.commits.length === 0 ? (s(), I(Xe, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (s(), I(Na, { key: 1 }, {
          default: i(() => [
            (s(!0), o(A, null, te(t.commits, (d) => (s(), I(Va, {
              key: d.hash,
              hash: d.short_hash || d.hash,
              message: d.message,
              "relative-date": d.date_relative || d.relative_date,
              onClick: (g) => u.$emit("select", d)
            }, {
              actions: i(() => [
                f(ee, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (g) => u.$emit("checkout", d),
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
}), Wa = /* @__PURE__ */ X(Aa, [["__scopeId", "data-v-981c3c64"]]), r0 = es({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const d0 = [
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
], c0 = {
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
}, Ga = [
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
], u0 = [
  ...Ga,
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
function xt() {
  return !1;
}
function De() {
  const t = _(!1), u = _(null);
  async function n(K, pe) {
    var Ne;
    if (!((Ne = window.app) != null && Ne.api))
      throw new Error("ComfyUI API not available");
    const xe = await window.app.api.fetchApi(K, pe);
    if (!xe.ok) {
      const tt = await xe.json().catch(() => ({}));
      throw new Error(tt.error || tt.message || `Request failed: ${xe.status}`);
    }
    return xe.json();
  }
  async function d(K = !1) {
    return n(K ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function g(K, pe = !1) {
    return n("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: K, allow_issues: pe })
    });
  }
  async function v(K = 10, pe = 0) {
    return n(`/v2/comfygit/log?limit=${K}&offset=${pe}`);
  }
  async function p(K) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: K })
    });
  }
  async function m() {
    return n("/v2/comfygit/branches");
  }
  async function l(K) {
    return n(`/v2/comfygit/commit/${K}`);
  }
  async function c(K, pe = !1) {
    return n("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: K, force: pe })
    });
  }
  async function b(K, pe = "HEAD") {
    return n("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: K, start_point: pe })
    });
  }
  async function y(K, pe = !1) {
    return n("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: K, force: pe })
    });
  }
  async function k(K, pe = !1) {
    return n(`/v2/comfygit/branch/${encodeURIComponent(K)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: pe })
    });
  }
  async function $() {
    try {
      return (await n("/v2/comfygit/environments")).environments;
    } catch {
      try {
        const K = await d();
        return [{
          name: K.environment,
          is_current: !0,
          path: "~/comfygit/environments/" + K.environment,
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          workflow_count: K.workflows.total,
          node_count: 0,
          model_count: 0,
          current_branch: K.branch
        }];
      } catch {
        return [];
      }
    }
  }
  async function D(K) {
    return n("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ target_env: K })
    });
  }
  async function S() {
    try {
      return n("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function h(K) {
    return n("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(K)
    });
  }
  async function M() {
    return n("/v2/workspace/environments/create_status");
  }
  async function V(K = 20) {
    return n(`/v2/workspace/comfyui_releases?limit=${K}`);
  }
  async function L(K) {
    return n(`/v2/workspace/environments/${K}`, {
      method: "DELETE"
    });
  }
  async function N(K = !1) {
    try {
      return n(K ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const pe = await d(K), xe = [];
      return pe.workflows.new.forEach((Ne) => {
        xe.push({ name: Ne, status: "new", missing_nodes: 0, missing_models: 0, path: Ne });
      }), pe.workflows.modified.forEach((Ne) => {
        xe.push({ name: Ne, status: "modified", missing_nodes: 0, missing_models: 0, path: Ne });
      }), pe.workflows.synced.forEach((Ne) => {
        xe.push({ name: Ne, status: "synced", missing_nodes: 0, missing_models: 0, path: Ne });
      }), xe;
    }
  }
  async function W(K) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(K)}/details`);
  }
  async function R(K) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(K)}/resolve`, {
      method: "POST"
    });
  }
  async function T(K, pe, xe) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(K)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: pe, install_models: xe })
    });
  }
  async function z(K, pe, xe) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(K)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: pe, importance: xe })
    });
  }
  async function C() {
    try {
      return n("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function x() {
    try {
      return n("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function G(K) {
    return n(`/v2/workspace/models/details/${encodeURIComponent(K)}`);
  }
  async function H(K) {
    return n("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: K })
    });
  }
  async function Z(K, pe) {
    return n(`/v2/workspace/models/${K}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: pe })
    });
  }
  async function ge(K, pe) {
    return n(`/v2/workspace/models/${K}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: pe })
    });
  }
  async function ae(K) {
    return n(`/v2/workspace/models/${K}`, {
      method: "DELETE"
    });
  }
  async function se(K) {
    return n("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(K)
    });
  }
  async function O() {
    return n("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function E() {
    return n("/v2/workspace/models/directory");
  }
  async function oe(K) {
    return n("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: K })
    });
  }
  async function Q() {
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
  async function Ee(K) {
    return n("/v2/comfygit/config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(K)
    });
  }
  async function le(K, pe) {
    try {
      const xe = new URLSearchParams();
      return K && xe.append("level", K), pe && xe.append("lines", pe.toString()), n(`/v2/comfygit/debug/logs?${xe}`);
    } catch {
      return [];
    }
  }
  async function He(K, pe) {
    try {
      const xe = new URLSearchParams();
      return K && xe.append("level", K), pe && xe.append("lines", pe.toString()), n(`/v2/workspace/debug/logs?${xe}`);
    } catch {
      return [];
    }
  }
  async function $e() {
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
  async function ce(K) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(K)}/track-dev`, {
      method: "POST"
    });
  }
  async function ve(K) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(K)}/install`, {
      method: "POST"
    });
  }
  async function Ke(K) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(K)}/update`, {
      method: "POST"
    });
  }
  async function ye(K) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(K)}`, {
      method: "DELETE"
    });
  }
  async function ie() {
    try {
      return n("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function q(K, pe) {
    return n("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: K, url: pe })
    });
  }
  async function Ce(K) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(K)}`, {
      method: "DELETE"
    });
  }
  async function be(K, pe, xe) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(K)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: pe, push_url: xe })
    });
  }
  async function re(K) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(K)}/fetch`, {
      method: "POST"
    });
  }
  async function me(K) {
    try {
      return n(`/v2/comfygit/remotes/${encodeURIComponent(K)}/status`);
    } catch {
      return null;
    }
  }
  async function mt(K = "skip", pe = !0) {
    return n("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: K,
        remove_extra_nodes: pe
      })
    });
  }
  async function vt() {
    return n("/v2/setup/status");
  }
  async function Re(K) {
    return n("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(K)
    });
  }
  async function $t() {
    return n("/v2/setup/initialize_status");
  }
  async function pt(K) {
    return n("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(K)
    });
  }
  return {
    isLoading: t,
    error: u,
    getStatus: d,
    commit: g,
    getHistory: v,
    exportEnv: p,
    // Git Operations
    getBranches: m,
    getCommitDetail: l,
    checkout: c,
    createBranch: b,
    switchBranch: y,
    deleteBranch: k,
    // Environment Management
    getEnvironments: $,
    switchEnvironment: D,
    getSwitchProgress: S,
    createEnvironment: h,
    getCreateProgress: M,
    getComfyUIReleases: V,
    deleteEnvironment: L,
    // Workflow Management
    getWorkflows: N,
    getWorkflowDetails: W,
    resolveWorkflow: R,
    installWorkflowDeps: T,
    setModelImportance: z,
    // Model Management
    getEnvironmentModels: C,
    getWorkspaceModels: x,
    getModelDetails: G,
    openFileLocation: H,
    addModelSource: Z,
    removeModelSource: ge,
    deleteModel: ae,
    downloadModel: se,
    scanWorkspaceModels: O,
    getModelsDirectory: E,
    setModelsDirectory: oe,
    // Settings
    getConfig: Q,
    updateConfig: Ee,
    // Debug/Logs
    getEnvironmentLogs: le,
    getWorkspaceLogs: He,
    // Node Management
    getNodes: $e,
    trackNodeAsDev: ce,
    installNode: ve,
    updateNode: Ke,
    uninstallNode: ye,
    // Git Remotes
    getRemotes: ie,
    addRemote: q,
    removeRemote: Ce,
    updateRemoteUrl: be,
    fetchRemote: re,
    getRemoteSyncStatus: me,
    // Environment Sync
    syncEnvironmentManually: mt,
    // First-Time Setup
    getSetupStatus: vt,
    initializeWorkspace: Re,
    getInitializeProgress: $t,
    validatePath: pt
  };
}
async function St(t, u = {}, n = 5e3) {
  const d = new AbortController(), g = setTimeout(() => d.abort(), n);
  try {
    const v = await fetch(t, {
      ...u,
      signal: d.signal
    });
    return clearTimeout(g), v;
  } catch (v) {
    throw clearTimeout(g), v.name === "AbortError" ? new Error(`Request timeout after ${n}ms`) : v;
  }
}
function ps() {
  const t = _(null);
  async function u() {
    try {
      const p = await St(
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
  async function n() {
    if (t.value || (t.value = await u()), !t.value)
      return null;
    try {
      const p = await St(
        `http://127.0.0.1:${t.value}/health`,
        {},
        5e3
      );
      if (!p.ok) throw new Error("Health check failed");
      return await p.json();
    } catch {
      return t.value = await u(), null;
    }
  }
  async function d() {
    if (t.value || (t.value = await u()), !t.value)
      return null;
    try {
      const p = await St(
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
  async function g() {
    if (t.value || (t.value = await u()), !t.value)
      throw new Error("Control port not available");
    if (!(await St(
      `http://127.0.0.1:${t.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function v() {
    if (t.value || (t.value = await u()), !t.value)
      throw new Error("Control port not available");
    if (!(await St(
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
    getStatus: d,
    restart: g,
    kill: v
  };
}
const ja = { class: "base-modal-header" }, Ha = {
  key: 0,
  class: "base-modal-title"
}, qa = { class: "base-modal-body" }, Ka = {
  key: 0,
  class: "base-modal-loading"
}, Ja = {
  key: 1,
  class: "base-modal-error"
}, Ya = {
  key: 0,
  class: "base-modal-footer"
}, Xa = /* @__PURE__ */ Y({
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
    const n = t, d = u;
    function g() {
      n.closeOnOverlayClick && d("close");
    }
    function v(p) {
      p.key === "Escape" && n.showCloseButton && d("close");
    }
    return Le(() => {
      document.addEventListener("keydown", v), document.body.style.overflow = "hidden";
    }), vs(() => {
      document.removeEventListener("keydown", v), document.body.style.overflow = "";
    }), (p, m) => (s(), I(Oe, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: g
      }, [
        e("div", {
          class: ne(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: m[1] || (m[1] = ze(() => {
          }, ["stop"]))
        }, [
          e("div", ja, [
            we(p.$slots, "header", {}, () => [
              t.title ? (s(), o("h3", Ha, a(t.title), 1)) : r("", !0)
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
            ])])) : r("", !0)
          ]),
          e("div", qa, [
            t.loading ? (s(), o("div", Ka, "Loading...")) : t.error ? (s(), o("div", Ja, a(t.error), 1)) : we(p.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          p.$slots.footer ? (s(), o("div", Ya, [
            we(p.$slots, "footer", {}, void 0, !0)
          ])) : r("", !0)
        ], 2)
      ])
    ]));
  }
}), at = /* @__PURE__ */ X(Xa, [["__scopeId", "data-v-8dab1081"]]), Qa = ["type", "disabled"], Za = {
  key: 0,
  class: "spinner"
}, el = /* @__PURE__ */ Y({
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
      class: ne(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: n[0] || (n[0] = (d) => u.$emit("click", d))
    }, [
      t.loading ? (s(), o("span", Za)) : r("", !0),
      we(u.$slots, "default", {}, void 0, !0)
    ], 10, Qa));
  }
}), de = /* @__PURE__ */ X(el, [["__scopeId", "data-v-f3452606"]]), tl = {
  key: 0,
  class: "base-title-count"
}, sl = /* @__PURE__ */ Y({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (u, n) => (s(), I(Zt(`h${t.level}`), {
      class: ne(["base-title", t.variant])
    }, {
      default: i(() => [
        we(u.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (s(), o("span", tl, "(" + a(t.count) + ")", 1)) : r("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Tt = /* @__PURE__ */ X(sl, [["__scopeId", "data-v-5a01561d"]]), ol = ["value", "disabled"], nl = {
  key: 0,
  value: "",
  disabled: ""
}, al = ["value"], ll = {
  key: 0,
  class: "base-select-error"
}, il = /* @__PURE__ */ Y({
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
    function u(d) {
      return typeof d == "string" ? d : d.value;
    }
    function n(d) {
      return typeof d == "string" ? d : d.label;
    }
    return (d, g) => (s(), o("div", {
      class: ne(["base-select-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("select", {
        value: t.modelValue,
        disabled: t.disabled,
        class: ne(["base-select", { error: !!t.error }]),
        onChange: g[0] || (g[0] = (v) => d.$emit("update:modelValue", v.target.value))
      }, [
        t.placeholder ? (s(), o("option", nl, a(t.placeholder), 1)) : r("", !0),
        (s(!0), o(A, null, te(t.options, (v) => (s(), o("option", {
          key: u(v),
          value: u(v)
        }, a(n(v)), 9, al))), 128))
      ], 42, ol),
      t.error ? (s(), o("span", ll, a(t.error), 1)) : r("", !0)
    ], 2));
  }
}), rl = /* @__PURE__ */ X(il, [["__scopeId", "data-v-7436d745"]]), dl = { class: "popover-header" }, cl = { class: "popover-title" }, ul = { class: "popover-content" }, ml = {
  key: 0,
  class: "popover-actions"
}, vl = /* @__PURE__ */ Y({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (u, n) => (s(), I(Oe, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "popover-overlay",
        onClick: n[2] || (n[2] = (d) => u.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: nt({ maxWidth: t.maxWidth }),
          onClick: n[1] || (n[1] = ze(() => {
          }, ["stop"]))
        }, [
          e("div", dl, [
            e("h4", cl, a(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: n[0] || (n[0] = (d) => u.$emit("close"))
            }, "✕")
          ]),
          e("div", ul, [
            we(u.$slots, "content", {}, void 0, !0)
          ]),
          u.$slots.actions ? (s(), o("div", ml, [
            we(u.$slots, "actions", {}, void 0, !0)
          ])) : r("", !0)
        ], 4)
      ])) : r("", !0)
    ]));
  }
}), lt = /* @__PURE__ */ X(vl, [["__scopeId", "data-v-42815ace"]]), fl = { class: "detail-section" }, gl = {
  key: 0,
  class: "empty-message"
}, pl = { class: "model-header" }, hl = { class: "model-name" }, yl = { class: "model-details" }, wl = { class: "model-row" }, kl = { class: "model-row" }, bl = { class: "label" }, _l = {
  key: 0,
  class: "model-row model-row-nodes"
}, $l = { class: "node-list" }, Cl = ["onClick"], xl = {
  key: 1,
  class: "model-row"
}, Sl = { class: "value" }, Il = {
  key: 2,
  class: "model-row"
}, El = { class: "value error" }, Ml = {
  key: 0,
  class: "model-actions"
}, zl = { class: "detail-section" }, Tl = {
  key: 0,
  class: "empty-message"
}, Ll = { class: "node-name" }, Dl = {
  key: 0,
  class: "node-version"
}, Rl = /* @__PURE__ */ Y({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(t, { emit: u }) {
    const n = t, d = u, { getWorkflowDetails: g, setModelImportance: v, openFileLocation: p } = De(), m = _(null), l = _(!1), c = _(null), b = _(!1), y = _({}), k = _(!1), $ = _(/* @__PURE__ */ new Set()), D = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function S(z) {
      switch (z) {
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
    function h(z) {
      switch (z) {
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
    function M(z) {
      if (!z.loaded_by || z.loaded_by.length === 0) return [];
      const C = z.hash || z.filename;
      return $.value.has(C) ? z.loaded_by : z.loaded_by.slice(0, 3);
    }
    function V(z) {
      return $.value.has(z);
    }
    function L(z) {
      $.value.has(z) ? $.value.delete(z) : $.value.add(z), $.value = new Set($.value);
    }
    async function N() {
      l.value = !0, c.value = null;
      try {
        m.value = await g(n.workflowName);
      } catch (z) {
        c.value = z instanceof Error ? z.message : "Failed to load workflow details";
      } finally {
        l.value = !1;
      }
    }
    function W(z, C) {
      y.value[z] = C, b.value = !0;
    }
    async function R(z) {
      try {
        await p(z);
      } catch (C) {
        c.value = C instanceof Error ? C.message : "Failed to open file location";
      }
    }
    async function T() {
      if (!b.value) {
        d("close");
        return;
      }
      l.value = !0, c.value = null;
      try {
        for (const [z, C] of Object.entries(y.value))
          await v(n.workflowName, z, C);
        d("refresh"), d("close");
      } catch (z) {
        c.value = z instanceof Error ? z.message : "Failed to save changes";
      } finally {
        l.value = !1;
      }
    }
    return Le(N), (z, C) => (s(), o(A, null, [
      f(at, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: l.value,
        error: c.value || void 0,
        onClose: C[4] || (C[4] = (x) => d("close"))
      }, {
        body: i(() => [
          m.value ? (s(), o(A, { key: 0 }, [
            e("section", fl, [
              f(Tt, { variant: "section" }, {
                default: i(() => [
                  w("MODELS USED (" + a(m.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.models.length === 0 ? (s(), o("div", gl, " No models used in this workflow ")) : r("", !0),
              (s(!0), o(A, null, te(m.value.models, (x) => {
                var G;
                return s(), o("div", {
                  key: x.hash || x.filename,
                  class: "model-card"
                }, [
                  e("div", pl, [
                    C[6] || (C[6] = e("span", { class: "model-icon" }, "📦", -1)),
                    e("span", hl, a(x.filename), 1)
                  ]),
                  e("div", yl, [
                    e("div", wl, [
                      C[7] || (C[7] = e("span", { class: "label" }, "Status:", -1)),
                      e("span", {
                        class: ne(["value", S(x.status)])
                      }, a(h(x.status)), 3)
                    ]),
                    e("div", kl, [
                      e("span", bl, [
                        C[8] || (C[8] = w(" Importance: ", -1)),
                        f(fs, {
                          size: 14,
                          title: "About importance levels",
                          onClick: C[0] || (C[0] = (H) => k.value = !0)
                        })
                      ]),
                      f(rl, {
                        "model-value": y.value[x.filename] || x.importance,
                        options: D,
                        "onUpdate:modelValue": (H) => W(x.filename, H)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    x.loaded_by && x.loaded_by.length > 0 ? (s(), o("div", _l, [
                      C[9] || (C[9] = e("span", { class: "label" }, "Loaded by:", -1)),
                      e("div", $l, [
                        (s(!0), o(A, null, te(M(x), (H, Z) => (s(), o("div", {
                          key: `${H.node_id}-${Z}`,
                          class: "node-reference"
                        }, a(H.node_type) + " (Node #" + a(H.node_id) + ") ", 1))), 128)),
                        x.loaded_by.length > 3 ? (s(), o("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (H) => L(x.hash || x.filename)
                        }, a(V(x.hash || x.filename) ? "▼ Show less" : `▶ View all (${x.loaded_by.length})`), 9, Cl)) : r("", !0)
                      ])
                    ])) : r("", !0),
                    x.size_mb ? (s(), o("div", xl, [
                      C[10] || (C[10] = e("span", { class: "label" }, "Size:", -1)),
                      e("span", Sl, a(x.size_mb) + " MB", 1)
                    ])) : r("", !0),
                    x.has_category_mismatch ? (s(), o("div", Il, [
                      C[13] || (C[13] = e("span", { class: "label" }, "Location issue:", -1)),
                      e("span", El, [
                        C[11] || (C[11] = w(" In ", -1)),
                        e("code", null, a(x.actual_category) + "/", 1),
                        C[12] || (C[12] = w(" but loader needs ", -1)),
                        e("code", null, a((G = x.expected_categories) == null ? void 0 : G[0]) + "/", 1)
                      ])
                    ])) : r("", !0)
                  ]),
                  x.status !== "available" ? (s(), o("div", Ml, [
                    x.status === "downloadable" ? (s(), I(de, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: C[1] || (C[1] = (H) => d("resolve"))
                    }, {
                      default: i(() => [...C[14] || (C[14] = [
                        w(" Download ", -1)
                      ])]),
                      _: 1
                    })) : x.status === "category_mismatch" && x.file_path ? (s(), I(de, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (H) => R(x.file_path)
                    }, {
                      default: i(() => [...C[15] || (C[15] = [
                        w(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : x.status !== "path_mismatch" ? (s(), I(de, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: C[2] || (C[2] = (H) => d("resolve"))
                    }, {
                      default: i(() => [...C[16] || (C[16] = [
                        w(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : r("", !0)
                  ])) : r("", !0)
                ]);
              }), 128))
            ]),
            e("section", zl, [
              f(Tt, { variant: "section" }, {
                default: i(() => [
                  w("NODES USED (" + a(m.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.nodes.length === 0 ? (s(), o("div", Tl, " No custom nodes used in this workflow ")) : r("", !0),
              (s(!0), o(A, null, te(m.value.nodes, (x) => (s(), o("div", {
                key: x.name,
                class: "node-item"
              }, [
                e("span", {
                  class: ne(["node-status", x.status === "installed" ? "installed" : "missing"])
                }, a(x.status === "installed" ? "✓" : "✕"), 3),
                e("span", Ll, a(x.name), 1),
                x.version ? (s(), o("span", Dl, "v" + a(x.version), 1)) : r("", !0)
              ]))), 128))
            ])
          ], 64)) : r("", !0)
        ]),
        footer: i(() => [
          f(de, {
            variant: "secondary",
            onClick: C[3] || (C[3] = (x) => d("close"))
          }, {
            default: i(() => [...C[17] || (C[17] = [
              w(" Close ", -1)
            ])]),
            _: 1
          }),
          b.value ? (s(), I(de, {
            key: 0,
            variant: "primary",
            onClick: T
          }, {
            default: i(() => [...C[18] || (C[18] = [
              w(" Save Changes ", -1)
            ])]),
            _: 1
          })) : r("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      f(lt, {
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
}), Nl = /* @__PURE__ */ X(Rl, [["__scopeId", "data-v-668728e6"]]), _e = es({
  items: [],
  status: "idle"
});
let et = null;
function hs() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function Gt(t) {
  return _e.items.find((u) => u.id === t);
}
async function yt() {
  if (_e.status === "downloading") return;
  const t = _e.items.find((u) => u.status === "queued");
  if (!t) {
    _e.status = "idle";
    return;
  }
  _e.status = "downloading", t.status = "downloading", t.progress = 0, t.downloaded = 0;
  try {
    await Ul(t), t.status = "completed", t.progress = 100;
  } catch (u) {
    t.status = "failed", t.error = u instanceof Error ? u.message : "Download failed", t.retries++;
  } finally {
    _e.status = "idle", yt();
  }
}
async function Ul(t) {
  return new Promise((u, n) => {
    et && (et.close(), et = null);
    const d = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), g = new EventSource(`/v2/comfygit/models/download-stream?${d}`);
    et = g;
    let v = Date.now(), p = 0, m = !1;
    g.onmessage = (l) => {
      try {
        const c = JSON.parse(l.data);
        switch (c.type) {
          case "progress":
            t.downloaded = c.downloaded || 0, t.size = c.total || t.size;
            const b = Date.now(), y = (b - v) / 1e3;
            if (y > 0.5) {
              const k = t.downloaded - p;
              if (t.speed = k / y, v = b, p = t.downloaded, t.speed > 0 && t.size > 0) {
                const $ = t.size - t.downloaded;
                t.eta = $ / t.speed;
              }
            }
            t.size > 0 && (t.progress = Math.round(t.downloaded / t.size * 100));
            break;
          case "complete":
            m = !0, g.close(), et = null, u();
            break;
          case "error":
            m = !0, g.close(), et = null, n(new Error(c.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, g.onerror = () => {
      g.close(), et = null, m || n(new Error("Connection lost"));
    };
  });
}
async function Pl() {
  try {
    const t = await fetch("/v2/comfygit/models/pending-downloads");
    if (!t.ok) return;
    const u = await t.json();
    if (!u.pending_downloads || u.pending_downloads.length === 0) return;
    for (const n of u.pending_downloads) {
      if (_e.items.some((g) => g.url === n.url && g.filename === n.filename))
        continue;
      const d = {
        id: hs(),
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
      _e.items.push(d);
    }
    console.log(`[ComfyGit] Loaded ${u.pending_downloads.length} pending download(s)`);
  } catch (t) {
    console.warn("[ComfyGit] Failed to load pending downloads:", t);
  }
}
function Rt() {
  function t(h) {
    for (const M of h) {
      if (_e.items.some(
        (N) => N.url === M.url && N.targetPath === M.targetPath && ["queued", "downloading", "paused", "completed"].includes(N.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${M.filename}`);
        continue;
      }
      const L = {
        id: hs(),
        workflow: M.workflow,
        filename: M.filename,
        url: M.url,
        targetPath: M.targetPath,
        size: M.size || 0,
        type: M.type || "model",
        status: "queued",
        progress: 0,
        downloaded: 0,
        speed: 0,
        eta: 0,
        retries: 0
      };
      _e.items.push(L);
    }
    _e.status === "idle" && yt();
  }
  async function u(h) {
    const M = Gt(h);
    if (M) {
      if (M.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(M.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        et && (et.close(), et = null), M.status = "failed", M.error = "Cancelled by user", _e.status = "idle", yt();
      } else if (M.status === "queued") {
        const V = _e.items.findIndex((L) => L.id === h);
        V >= 0 && _e.items.splice(V, 1);
      }
    }
  }
  function n(h) {
    const M = Gt(h);
    !M || M.status !== "failed" || (M.status = "queued", M.error = void 0, M.progress = 0, M.downloaded = 0, _e.status === "idle" && yt());
  }
  function d(h) {
    const M = Gt(h);
    !M || M.status !== "paused" || (M.status = "queued", _e.status === "idle" && yt());
  }
  function g() {
    const h = _e.items.filter((M) => M.status === "paused");
    for (const M of h)
      M.status = "queued";
    _e.status === "idle" && yt();
  }
  function v(h) {
    const M = _e.items.findIndex((V) => V.id === h);
    M >= 0 && ["completed", "failed", "paused"].includes(_e.items[M].status) && _e.items.splice(M, 1);
  }
  function p() {
    _e.items = _e.items.filter((h) => h.status !== "completed");
  }
  function m() {
    _e.items = _e.items.filter((h) => h.status !== "failed");
  }
  const l = B(
    () => _e.items.find((h) => h.status === "downloading")
  ), c = B(
    () => _e.items.filter((h) => h.status === "queued")
  ), b = B(
    () => _e.items.filter((h) => h.status === "completed")
  ), y = B(
    () => _e.items.filter((h) => h.status === "failed")
  ), k = B(
    () => _e.items.filter((h) => h.status === "paused")
  ), $ = B(() => _e.items.length > 0), D = B(
    () => _e.items.filter((h) => h.status === "queued" || h.status === "downloading").length
  ), S = B(
    () => _e.items.some((h) => h.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: As(_e),
    // Computed
    currentDownload: l,
    queuedItems: c,
    completedItems: b,
    failedItems: y,
    pausedItems: k,
    hasItems: $,
    activeCount: D,
    hasPaused: S,
    // Actions
    addToQueue: t,
    cancelDownload: u,
    retryDownload: n,
    resumeDownload: d,
    resumeAllPaused: g,
    removeItem: v,
    clearCompleted: p,
    clearFailed: m,
    loadPendingDownloads: Pl
  };
}
function ys() {
  const t = _(null), u = _(null), n = _([]), d = _([]), g = _(!1), v = _(null);
  async function p(V, L) {
    var W;
    if (!((W = window.app) != null && W.api))
      throw new Error("ComfyUI API not available");
    const N = await window.app.api.fetchApi(V, L);
    if (!N.ok) {
      const R = await N.json().catch(() => ({})), T = R.error || R.message || `Request failed: ${N.status}`;
      throw new Error(T);
    }
    return N.json();
  }
  async function m(V) {
    g.value = !0, v.value = null;
    try {
      let L;
      return xt() || (L = await p(
        `/v2/comfygit/workflow/${V}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), t.value = L, L;
    } catch (L) {
      const N = L instanceof Error ? L.message : "Unknown error occurred";
      throw v.value = N, L;
    } finally {
      g.value = !1;
    }
  }
  async function l(V, L, N, W) {
    g.value = !0, v.value = null;
    try {
      let R;
      if (!xt()) {
        const T = Object.fromEntries(L), z = Object.fromEntries(N), C = W ? Array.from(W) : [];
        R = await p(
          `/v2/comfygit/workflow/${V}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: T,
              model_choices: z,
              skipped_packages: C
            })
          }
        );
      }
      return u.value = R, R;
    } catch (R) {
      const T = R instanceof Error ? R.message : "Unknown error occurred";
      throw v.value = T, R;
    } finally {
      g.value = !1;
    }
  }
  async function c(V, L = 10) {
    g.value = !0, v.value = null;
    try {
      let N;
      return xt() || (N = await p(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: V, limit: L })
        }
      )), n.value = N.results, N.results;
    } catch (N) {
      const W = N instanceof Error ? N.message : "Unknown error occurred";
      throw v.value = W, N;
    } finally {
      g.value = !1;
    }
  }
  async function b(V, L = 10) {
    g.value = !0, v.value = null;
    try {
      let N;
      return xt() || (N = await p(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: V, limit: L })
        }
      )), d.value = N.results, N.results;
    } catch (N) {
      const W = N instanceof Error ? N.message : "Unknown error occurred";
      throw v.value = W, N;
    } finally {
      g.value = !1;
    }
  }
  const y = es({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function k() {
    y.phase = "idle", y.currentFile = void 0, y.currentFileIndex = void 0, y.totalFiles = void 0, y.bytesDownloaded = void 0, y.bytesTotal = void 0, y.completedFiles = [], y.nodesToInstall = [], y.nodesInstalled = [], y.installError = void 0, y.needsRestart = void 0, y.error = void 0, y.nodeInstallProgress = void 0;
  }
  async function $(V) {
    y.phase = "installing", y.nodesInstalled = [], y.installError = void 0, y.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return xt(), await D(V);
    } catch (L) {
      const N = L instanceof Error ? L.message : "Failed to install nodes";
      throw y.installError = N, L;
    }
  }
  async function D(V) {
    var N;
    const L = await p(
      `/v2/comfygit/workflow/${V}/install`,
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
      const W = new Map(((N = L.failed) == null ? void 0 : N.map((R) => [R.node_id, R.error])) || []);
      for (let R = 0; R < y.nodesToInstall.length; R++) {
        const T = y.nodesToInstall[R], z = W.get(T);
        y.nodeInstallProgress.completedNodes.push({
          node_id: T,
          success: !z,
          error: z
        });
      }
    }
    return y.nodesInstalled = L.nodes_installed, y.needsRestart = L.nodes_installed.length > 0, L.failed && L.failed.length > 0 && (y.installError = `${L.failed.length} package(s) failed to install`), L;
  }
  async function S(V, L, N) {
    k(), y.phase = "resolving", v.value = null;
    const W = Object.fromEntries(L), R = Object.fromEntries(N);
    try {
      const T = await fetch(`/v2/comfygit/workflow/${V}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: W,
          model_choices: R
        })
      });
      if (!T.ok)
        throw new Error(`Request failed: ${T.status}`);
      if (!T.body)
        throw new Error("No response body");
      const z = T.body.getReader(), C = new TextDecoder();
      let x = "";
      for (; ; ) {
        const { done: G, value: H } = await z.read();
        if (G) break;
        x += C.decode(H, { stream: !0 });
        const Z = x.split(`

`);
        x = Z.pop() || "";
        for (const ge of Z) {
          if (!ge.trim()) continue;
          const ae = ge.split(`
`);
          let se = "", O = "";
          for (const E of ae)
            E.startsWith("event: ") ? se = E.slice(7) : E.startsWith("data: ") && (O = E.slice(6));
          if (O)
            try {
              const E = JSON.parse(O);
              h(se, E);
            } catch (E) {
              console.warn("Failed to parse SSE event:", E);
            }
        }
      }
    } catch (T) {
      const z = T instanceof Error ? T.message : "Unknown error occurred";
      throw v.value = z, y.error = z, y.phase = "error", T;
    }
  }
  function h(V, L) {
    switch (V) {
      case "batch_start":
        y.phase = "downloading", y.totalFiles = L.total;
        break;
      case "file_start":
        y.currentFile = L.filename, y.currentFileIndex = L.index, y.bytesDownloaded = 0, y.bytesTotal = void 0;
        break;
      case "file_progress":
        y.bytesDownloaded = L.downloaded, y.bytesTotal = L.total;
        break;
      case "file_complete":
        y.completedFiles.push({
          filename: L.filename,
          success: L.success,
          error: L.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        y.nodesToInstall = L.nodes_to_install || [], L.download_results && (y.completedFiles = L.download_results), y.phase = "complete";
        break;
      case "error":
        y.error = L.message, y.phase = "error", v.value = L.message;
        break;
    }
  }
  function M(V, L) {
    const { addToQueue: N } = Rt(), W = L.filter((R) => R.url && R.target_path).map((R) => ({
      workflow: V,
      filename: R.filename,
      url: R.url,
      targetPath: R.target_path,
      size: R.size || 0,
      type: "model"
    }));
    return W.length > 0 && N(W), W.length;
  }
  return {
    // State
    result: t,
    appliedResult: u,
    searchResults: n,
    modelSearchResults: d,
    isLoading: g,
    error: v,
    progress: y,
    // Methods
    analyzeWorkflow: m,
    applyResolution: l,
    applyResolutionWithProgress: S,
    installNodes: $,
    searchNodes: c,
    searchModels: b,
    resetProgress: k,
    queueModelDownloads: M
  };
}
const Ol = { class: "resolution-stepper" }, Bl = { class: "stepper-header" }, Fl = ["onClick"], Vl = {
  key: 0,
  class: "step-icon"
}, Al = {
  key: 1,
  class: "step-number"
}, Wl = { class: "step-label" }, Gl = {
  key: 0,
  class: "step-connector"
}, jl = { class: "stepper-content" }, Hl = /* @__PURE__ */ Y({
  __name: "ResolutionStepper",
  props: {
    steps: {},
    currentStep: {},
    completedSteps: {},
    stepStats: {}
  },
  emits: ["step-change"],
  setup(t, { emit: u }) {
    const n = t, d = u;
    function g(c) {
      var b;
      if ((b = n.stepStats) != null && b[c]) {
        const y = n.stepStats[c];
        return y.total > 0 && y.resolved === y.total;
      }
      return n.completedSteps.includes(c);
    }
    function v(c) {
      var b;
      if ((b = n.stepStats) != null && b[c]) {
        const y = n.stepStats[c];
        return y.resolved > 0 && y.resolved < y.total;
      }
      return !1;
    }
    function p(c) {
      return g(c) ? "state-complete" : v(c) ? "state-partial" : "state-pending";
    }
    function m(c) {
      return !1;
    }
    function l(c) {
      d("step-change", c);
    }
    return (c, b) => (s(), o("div", Ol, [
      e("div", Bl, [
        (s(!0), o(A, null, te(t.steps, (y, k) => (s(), o("div", {
          key: y.id,
          class: ne(["step", {
            active: t.currentStep === y.id,
            completed: g(y.id),
            "in-progress": v(y.id),
            disabled: m(y.id)
          }]),
          onClick: ($) => l(y.id)
        }, [
          e("div", {
            class: ne(["step-indicator", p(y.id)])
          }, [
            g(y.id) ? (s(), o("span", Vl, "✓")) : (s(), o("span", Al, a(k + 1), 1))
          ], 2),
          e("div", Wl, a(y.label), 1),
          k < t.steps.length - 1 ? (s(), o("div", Gl)) : r("", !0)
        ], 10, Fl))), 128))
      ]),
      e("div", jl, [
        we(c.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), ql = /* @__PURE__ */ X(Hl, [["__scopeId", "data-v-2a7b3af8"]]), Kl = /* @__PURE__ */ Y({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const u = t, n = B(() => u.confidence >= 0.9 ? "high" : u.confidence >= 0.7 ? "medium" : "low"), d = B(() => `confidence-${n.value}`), g = B(() => u.showPercentage ? `${Math.round(u.confidence * 100)}%` : n.value.charAt(0).toUpperCase() + n.value.slice(1));
    return (v, p) => (s(), o("span", {
      class: ne(["confidence-badge", d.value, t.size])
    }, a(g.value), 3));
  }
}), Ft = /* @__PURE__ */ X(Kl, [["__scopeId", "data-v-17ec4b80"]]), Jl = { class: "node-info" }, Yl = { class: "node-info-text" }, Xl = { class: "item-body" }, Ql = {
  key: 0,
  class: "resolved-state"
}, Zl = {
  key: 1,
  class: "multiple-options"
}, ei = { class: "options-list" }, ti = ["onClick"], si = ["name", "value", "checked", "onChange"], oi = { class: "option-content" }, ni = { class: "option-header" }, ai = { class: "option-package-id" }, li = {
  key: 0,
  class: "option-title"
}, ii = { class: "option-meta" }, ri = {
  key: 0,
  class: "installed-badge"
}, di = { class: "action-buttons" }, ci = {
  key: 2,
  class: "unresolved"
}, ui = {
  key: 0,
  class: "searching-state"
}, mi = { class: "options-list" }, vi = ["onClick"], fi = ["name", "value"], gi = { class: "option-content" }, pi = { class: "option-header" }, hi = { class: "option-package-id" }, yi = {
  key: 0,
  class: "option-description"
}, wi = { class: "option-meta" }, ki = {
  key: 0,
  class: "installed-badge"
}, bi = {
  key: 2,
  class: "unresolved-message"
}, _i = { class: "action-buttons" }, $i = /* @__PURE__ */ Y({
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
    const n = t, d = u;
    function g(l, c = 80) {
      return l.length <= c ? l : l.slice(0, c - 3) + "...";
    }
    const v = B(() => !!n.choice);
    B(() => {
      var l;
      return (l = n.choice) == null ? void 0 : l.action;
    }), B(() => {
      var l;
      return (l = n.choice) == null ? void 0 : l.package_id;
    });
    const p = B(() => {
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
    function m(l) {
      d("option-selected", l);
    }
    return (l, c) => (s(), o("div", {
      class: ne(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: v.value }])
    }, [
      e("div", Jl, [
        e("span", Yl, [
          c[7] || (c[7] = w("Node type: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: ne(["status-badge", p.value])
        }, a(t.statusLabel), 3)) : r("", !0)
      ]),
      e("div", Xl, [
        v.value ? (s(), o("div", Ql, [
          f(de, {
            variant: "ghost",
            size: "sm",
            onClick: c[0] || (c[0] = (b) => d("clear-choice"))
          }, {
            default: i(() => [...c[8] || (c[8] = [
              w(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", Zl, [
          c[12] || (c[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", ei, [
            (s(!0), o(A, null, te(t.options, (b, y) => (s(), o("label", {
              key: b.package_id,
              class: ne(["option-card", { selected: t.selectedOptionIndex === y }]),
              onClick: (k) => m(y)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: y,
                checked: t.selectedOptionIndex === y,
                onChange: (k) => m(y)
              }, null, 40, si),
              e("div", oi, [
                e("div", ni, [
                  e("span", ai, a(b.package_id), 1),
                  f(Ft, {
                    confidence: b.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                b.title && b.title !== b.package_id ? (s(), o("div", li, a(b.title), 1)) : r("", !0),
                e("div", ii, [
                  b.is_installed ? (s(), o("span", ri, "Already Installed")) : r("", !0)
                ])
              ])
            ], 10, ti))), 128))
          ]),
          e("div", di, [
            f(de, {
              variant: "secondary",
              size: "sm",
              onClick: c[1] || (c[1] = (b) => d("search"))
            }, {
              default: i(() => [...c[9] || (c[9] = [
                w(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            f(de, {
              variant: "secondary",
              size: "sm",
              onClick: c[2] || (c[2] = (b) => d("manual-entry"))
            }, {
              default: i(() => [...c[10] || (c[10] = [
                w(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            f(de, {
              variant: "secondary",
              size: "sm",
              onClick: c[3] || (c[3] = (b) => d("mark-optional"))
            }, {
              default: i(() => [...c[11] || (c[11] = [
                w(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", ci, [
          t.isSearching ? (s(), o("div", ui, [...c[13] || (c[13] = [
            e("span", { class: "searching-spinner" }, null, -1),
            e("span", null, "Searching registry...", -1)
          ])])) : t.searchResults && t.searchResults.length > 0 ? (s(), o(A, { key: 1 }, [
            c[14] || (c[14] = e("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            e("div", mi, [
              (s(!0), o(A, null, te(t.searchResults.slice(0, 5), (b, y) => (s(), o("label", {
                key: b.package_id,
                class: "option-card",
                onClick: (k) => d("search-result-selected", b)
              }, [
                e("input", {
                  type: "radio",
                  name: `search-result-${t.nodeType}`,
                  value: y
                }, null, 8, fi),
                e("div", gi, [
                  e("div", pi, [
                    e("span", hi, a(b.package_id), 1),
                    f(Ft, {
                      confidence: b.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  b.description ? (s(), o("div", yi, a(g(b.description)), 1)) : r("", !0),
                  e("div", wi, [
                    b.is_installed ? (s(), o("span", ki, "Already Installed")) : r("", !0)
                  ])
                ])
              ], 8, vi))), 128))
            ])
          ], 64)) : (s(), o("div", bi, [...c[15] || (c[15] = [
            e("span", { class: "warning-icon" }, "⚠", -1),
            e("span", null, "No matching package found in registry", -1)
          ])])),
          e("div", _i, [
            f(de, {
              variant: "secondary",
              size: "sm",
              onClick: c[4] || (c[4] = (b) => d("search"))
            }, {
              default: i(() => {
                var b;
                return [
                  w(a((b = t.searchResults) != null && b.length ? "Refine Search" : "Search Registry"), 1)
                ];
              }),
              _: 1
            }),
            f(de, {
              variant: "secondary",
              size: "sm",
              onClick: c[5] || (c[5] = (b) => d("manual-entry"))
            }, {
              default: i(() => [...c[16] || (c[16] = [
                w(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            f(de, {
              variant: "secondary",
              size: "sm",
              onClick: c[6] || (c[6] = (b) => d("mark-optional"))
            }, {
              default: i(() => [...c[17] || (c[17] = [
                w(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Ci = /* @__PURE__ */ X($i, [["__scopeId", "data-v-c2997d1d"]]), xi = { class: "item-navigator" }, Si = { class: "nav-item-info" }, Ii = ["title"], Ei = { class: "nav-controls" }, Mi = { class: "nav-arrows" }, zi = ["disabled"], Ti = ["disabled"], Li = { class: "nav-position" }, Di = /* @__PURE__ */ Y({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: u }) {
    const n = u;
    return (d, g) => (s(), o("div", xi, [
      e("div", Si, [
        e("code", {
          class: "item-name",
          title: t.itemName
        }, a(t.itemName), 9, Ii)
      ]),
      e("div", Ei, [
        e("div", Mi, [
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === 0,
            onClick: g[0] || (g[0] = (v) => n("prev")),
            title: "Previous item"
          }, " ← ", 8, zi),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: g[1] || (g[1] = (v) => n("next")),
            title: "Next item"
          }, " → ", 8, Ti)
        ]),
        e("span", Li, a(t.currentIndex + 1) + "/" + a(t.totalItems), 1)
      ])
    ]));
  }
}), ws = /* @__PURE__ */ X(Di, [["__scopeId", "data-v-74af7920"]]), Ri = ["type", "value", "placeholder", "disabled"], Ni = {
  key: 0,
  class: "base-input-error"
}, Ui = /* @__PURE__ */ Y({
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
      class: ne(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: ne(["base-input", { error: !!t.error }]),
        onInput: n[0] || (n[0] = (d) => u.$emit("update:modelValue", d.target.value)),
        onKeyup: [
          n[1] || (n[1] = ut((d) => u.$emit("enter"), ["enter"])),
          n[2] || (n[2] = ut((d) => u.$emit("escape"), ["escape"]))
        ]
      }, null, 42, Ri),
      t.error ? (s(), o("span", Ni, a(t.error), 1)) : r("", !0)
    ], 2));
  }
}), Ye = /* @__PURE__ */ X(Ui, [["__scopeId", "data-v-9ba02cdc"]]), Pi = { class: "node-resolution-step" }, Oi = {
  key: 0,
  class: "auto-resolved-section"
}, Bi = { class: "section-header" }, Fi = { class: "stat-badge" }, Vi = { class: "resolved-packages-list" }, Ai = { class: "package-info" }, Wi = { class: "package-id" }, Gi = { class: "node-count" }, ji = { class: "package-actions" }, Hi = {
  key: 0,
  class: "status-badge install"
}, qi = {
  key: 1,
  class: "status-badge skip"
}, Ki = ["onClick"], Ji = {
  key: 1,
  class: "section-divider"
}, Yi = { class: "step-header" }, Xi = { class: "stat-badge" }, Qi = {
  key: 1,
  class: "step-body"
}, Zi = {
  key: 3,
  class: "empty-state"
}, er = { class: "node-modal-body" }, tr = { class: "node-search-results-container" }, sr = {
  key: 0,
  class: "node-search-results"
}, or = ["onClick"], nr = { class: "node-result-header" }, ar = { class: "node-result-package-id" }, lr = {
  key: 0,
  class: "node-result-description"
}, ir = {
  key: 1,
  class: "node-empty-state"
}, rr = {
  key: 2,
  class: "node-empty-state"
}, dr = {
  key: 3,
  class: "node-empty-state"
}, cr = { class: "node-manual-entry-modal" }, ur = { class: "node-modal-body" }, mr = { class: "node-modal-actions" }, vr = /* @__PURE__ */ Y({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(t, { emit: u }) {
    const n = t, d = u, { searchNodes: g } = ys(), v = _(0), p = _(!1), m = _(!1), l = _(""), c = _(""), b = _([]), y = _(!1), k = _(/* @__PURE__ */ new Map()), $ = _(/* @__PURE__ */ new Set()), D = _(!1);
    function S() {
      D.value && O(), D.value = !1;
    }
    const h = B(() => n.nodes[v.value]), M = B(() => n.nodes.filter((ce) => n.nodeChoices.has(ce.node_type)).length), V = B(() => h.value ? k.value.get(h.value.node_type) || [] : []), L = B(() => h.value ? $.value.has(h.value.node_type) : !1);
    Vt(h, async (ce) => {
      var ve;
      ce && ((ve = ce.options) != null && ve.length || k.value.has(ce.node_type) || $.value.has(ce.node_type) || n.nodeChoices.has(ce.node_type) || await N(ce.node_type));
    }, { immediate: !0 });
    async function N(ce) {
      $.value.add(ce);
      try {
        const ve = await g(ce, 5);
        k.value.set(ce, ve);
      } catch {
        k.value.set(ce, []);
      } finally {
        $.value.delete(ce);
      }
    }
    const W = B(() => n.autoResolvedPackages.filter((ce) => !n.skippedPackages.has(ce.package_id)).length);
    function R(ce) {
      return n.skippedPackages.has(ce);
    }
    function T(ce) {
      d("package-skip", ce);
    }
    const z = B(() => {
      var ve;
      if (!h.value) return "not-found";
      const ce = n.nodeChoices.get(h.value.node_type);
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
      const ce = n.nodeChoices.get(h.value.node_type);
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
      ce >= 0 && ce < n.nodes.length && (v.value = ce);
    }
    function G() {
      h.value && d("mark-optional", h.value.node_type);
    }
    function H() {
      h.value && d("skip", h.value.node_type);
    }
    function Z(ce) {
      h.value && d("option-selected", h.value.node_type, ce);
    }
    function ge() {
      h.value && d("clear-choice", h.value.node_type);
    }
    function ae() {
      h.value && (l.value = h.value.node_type, b.value = V.value, p.value = !0, Ee(l.value));
    }
    function se() {
      c.value = "", m.value = !0;
    }
    function O() {
      p.value = !1, l.value = "", b.value = [];
    }
    function E() {
      m.value = !1, c.value = "";
    }
    let oe = null;
    function Q() {
      oe && clearTimeout(oe), oe = setTimeout(() => {
        Ee(l.value);
      }, 300);
    }
    async function Ee(ce) {
      if (!ce.trim()) {
        b.value = [];
        return;
      }
      y.value = !0;
      try {
        b.value = await g(ce, 10);
      } catch {
        b.value = [];
      } finally {
        y.value = !1;
      }
    }
    function le(ce) {
      h.value && (d("manual-entry", h.value.node_type, ce.package_id), O());
    }
    function He(ce) {
      h.value && d("manual-entry", h.value.node_type, ce.package_id);
    }
    function $e() {
      !h.value || !c.value.trim() || (d("manual-entry", h.value.node_type, c.value.trim()), E());
    }
    return (ce, ve) => {
      var Ke, ye;
      return s(), o("div", Pi, [
        t.autoResolvedPackages.length > 0 ? (s(), o("div", Oi, [
          e("div", Bi, [
            ve[6] || (ve[6] = e("div", { class: "section-info" }, [
              e("h4", { class: "section-title" }, "Packages to Install"),
              e("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            e("span", Fi, a(W.value) + "/" + a(t.autoResolvedPackages.length) + " to install", 1)
          ]),
          e("div", Vi, [
            (s(!0), o(A, null, te(t.autoResolvedPackages, (ie) => (s(), o("div", {
              key: ie.package_id,
              class: "resolved-package-item"
            }, [
              e("div", Ai, [
                e("code", Wi, a(ie.package_id), 1),
                e("span", Gi, a(ie.node_types_count) + " node type" + a(ie.node_types_count > 1 ? "s" : ""), 1)
              ]),
              e("div", ji, [
                R(ie.package_id) ? (s(), o("span", qi, " SKIPPED ")) : (s(), o("span", Hi, " WILL INSTALL ")),
                e("button", {
                  class: "toggle-skip-btn",
                  onClick: (q) => T(ie.package_id)
                }, a(R(ie.package_id) ? "Include" : "Skip"), 9, Ki)
              ])
            ]))), 128))
          ])
        ])) : r("", !0),
        t.autoResolvedPackages.length > 0 && t.nodes.length > 0 ? (s(), o("div", Ji)) : r("", !0),
        t.nodes.length > 0 ? (s(), o(A, { key: 2 }, [
          e("div", Yi, [
            ve[7] || (ve[7] = e("div", { class: "step-info" }, [
              e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            e("span", Xi, a(M.value) + "/" + a(t.nodes.length) + " resolved", 1)
          ]),
          h.value ? (s(), I(ws, {
            key: 0,
            "item-name": h.value.node_type,
            "current-index": v.value,
            "total-items": t.nodes.length,
            onPrev: ve[0] || (ve[0] = (ie) => x(v.value - 1)),
            onNext: ve[1] || (ve[1] = (ie) => x(v.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : r("", !0),
          h.value ? (s(), o("div", Qi, [
            f(Ci, {
              "node-type": h.value.node_type,
              "has-multiple-options": !!((Ke = h.value.options) != null && Ke.length),
              options: h.value.options,
              choice: (ye = t.nodeChoices) == null ? void 0 : ye.get(h.value.node_type),
              status: z.value,
              "status-label": C.value,
              "search-results": V.value,
              "is-searching": L.value,
              onMarkOptional: G,
              onSkip: H,
              onManualEntry: se,
              onSearch: ae,
              onOptionSelected: Z,
              onClearChoice: ge,
              onSearchResultSelected: He
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching"])
          ])) : r("", !0)
        ], 64)) : r("", !0),
        t.nodes.length === 0 && t.autoResolvedPackages.length === 0 ? (s(), o("div", Zi, [...ve[8] || (ve[8] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])) : r("", !0),
        (s(), I(Oe, { to: "body" }, [
          p.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: ve[4] || (ve[4] = ze((ie) => D.value = !0, ["self"])),
            onMouseup: ze(S, ["self"])
          }, [
            e("div", {
              class: "node-search-modal",
              onMousedown: ve[3] || (ve[3] = (ie) => D.value = !1)
            }, [
              e("div", { class: "node-modal-header" }, [
                ve[9] || (ve[9] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: O
                }, "✕")
              ]),
              e("div", er, [
                f(Ye, {
                  modelValue: l.value,
                  "onUpdate:modelValue": ve[2] || (ve[2] = (ie) => l.value = ie),
                  placeholder: "Search by node type, package name...",
                  onInput: Q
                }, null, 8, ["modelValue"]),
                e("div", tr, [
                  b.value.length > 0 ? (s(), o("div", sr, [
                    (s(!0), o(A, null, te(b.value, (ie) => (s(), o("div", {
                      key: ie.package_id,
                      class: "node-search-result-item",
                      onClick: (q) => le(ie)
                    }, [
                      e("div", nr, [
                        e("code", ar, a(ie.package_id), 1),
                        ie.match_confidence ? (s(), I(Ft, {
                          key: 0,
                          confidence: ie.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : r("", !0)
                      ]),
                      ie.description ? (s(), o("div", lr, a(ie.description), 1)) : r("", !0)
                    ], 8, or))), 128))
                  ])) : y.value ? (s(), o("div", ir, "Searching...")) : l.value ? (s(), o("div", rr, 'No packages found matching "' + a(l.value) + '"', 1)) : (s(), o("div", dr, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : r("", !0)
        ])),
        (s(), I(Oe, { to: "body" }, [
          m.value ? (s(), o("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: ze(E, ["self"])
          }, [
            e("div", cr, [
              e("div", { class: "node-modal-header" }, [
                ve[10] || (ve[10] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: E
                }, "✕")
              ]),
              e("div", ur, [
                f(Ye, {
                  modelValue: c.value,
                  "onUpdate:modelValue": ve[5] || (ve[5] = (ie) => c.value = ie),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", mr, [
                  f(de, {
                    variant: "secondary",
                    onClick: E
                  }, {
                    default: i(() => [...ve[11] || (ve[11] = [
                      w("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  f(de, {
                    variant: "primary",
                    disabled: !c.value.trim(),
                    onClick: $e
                  }, {
                    default: i(() => [...ve[12] || (ve[12] = [
                      w(" Add Package ", -1)
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
}), fr = /* @__PURE__ */ X(vr, [["__scopeId", "data-v-281581bc"]]), gr = { class: "node-info" }, pr = { class: "node-info-text" }, hr = { class: "item-body" }, yr = {
  key: 0,
  class: "resolved-state"
}, wr = {
  key: 1,
  class: "multiple-options"
}, kr = { class: "options-list" }, br = ["onClick"], _r = ["name", "value", "checked", "onChange"], $r = { class: "option-content" }, Cr = { class: "option-header" }, xr = { class: "option-filename" }, Sr = { class: "option-meta" }, Ir = { class: "option-size" }, Er = { class: "option-category" }, Mr = { class: "option-path" }, zr = { class: "action-buttons" }, Tr = {
  key: 2,
  class: "unresolved"
}, Lr = { class: "action-buttons" }, Dr = /* @__PURE__ */ Y({
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
    const n = t, d = u, g = B(() => !!n.choice);
    B(() => {
      var l;
      return (l = n.choice) == null ? void 0 : l.action;
    }), B(() => {
      var l, c;
      return ((c = (l = n.choice) == null ? void 0 : l.selected_model) == null ? void 0 : c.filename) || "selected";
    });
    const v = B(() => {
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
    function p(l) {
      d("option-selected", l);
    }
    function m(l) {
      if (!l) return "Unknown";
      const c = l / (1024 * 1024 * 1024);
      return c >= 1 ? `${c.toFixed(2)} GB` : `${(l / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (l, c) => (s(), o("div", {
      class: ne(["model-resolution-item", { resolved: g.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", gr, [
        e("span", pr, [
          c[7] || (c[7] = w("Used by: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (s(), o("span", {
          key: 0,
          class: ne(["status-badge", v.value])
        }, a(t.statusLabel), 3)) : r("", !0)
      ]),
      e("div", hr, [
        g.value ? (s(), o("div", yr, [
          f(de, {
            variant: "ghost",
            size: "sm",
            onClick: c[0] || (c[0] = (b) => d("clear-choice"))
          }, {
            default: i(() => [...c[8] || (c[8] = [
              w(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (s(), o("div", wr, [
          c[12] || (c[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", kr, [
            (s(!0), o(A, null, te(t.options, (b, y) => (s(), o("label", {
              key: b.model.hash,
              class: ne(["option-card", { selected: t.selectedOptionIndex === y }]),
              onClick: (k) => p(y)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: y,
                checked: t.selectedOptionIndex === y,
                onChange: (k) => p(y)
              }, null, 40, _r),
              e("div", $r, [
                e("div", Cr, [
                  e("span", xr, a(b.model.filename), 1),
                  f(Ft, {
                    confidence: b.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", Sr, [
                  e("span", Ir, a(m(b.model.size)), 1),
                  e("span", Er, a(b.model.category), 1)
                ]),
                e("div", Mr, a(b.model.relative_path), 1)
              ])
            ], 10, br))), 128))
          ]),
          e("div", zr, [
            f(de, {
              variant: "ghost",
              size: "sm",
              onClick: c[1] || (c[1] = (b) => d("search"))
            }, {
              default: i(() => [...c[9] || (c[9] = [
                w(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            f(de, {
              variant: "ghost",
              size: "sm",
              onClick: c[2] || (c[2] = (b) => d("download-url"))
            }, {
              default: i(() => [...c[10] || (c[10] = [
                w(" Download URL ", -1)
              ])]),
              _: 1
            }),
            f(de, {
              variant: "secondary",
              size: "sm",
              onClick: c[3] || (c[3] = (b) => d("mark-optional"))
            }, {
              default: i(() => [...c[11] || (c[11] = [
                w(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (s(), o("div", Tr, [
          c[16] || (c[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", Lr, [
            f(de, {
              variant: "primary",
              size: "sm",
              onClick: c[4] || (c[4] = (b) => d("search"))
            }, {
              default: i(() => [...c[13] || (c[13] = [
                w(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            f(de, {
              variant: "secondary",
              size: "sm",
              onClick: c[5] || (c[5] = (b) => d("download-url"))
            }, {
              default: i(() => [...c[14] || (c[14] = [
                w(" Download URL ", -1)
              ])]),
              _: 1
            }),
            f(de, {
              variant: "secondary",
              size: "sm",
              onClick: c[6] || (c[6] = (b) => d("mark-optional"))
            }, {
              default: i(() => [...c[15] || (c[15] = [
                w(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Rr = /* @__PURE__ */ X(Dr, [["__scopeId", "data-v-8a82fefa"]]), Nr = { class: "model-resolution-step" }, Ur = { class: "step-header" }, Pr = { class: "step-info" }, Or = { class: "step-title" }, Br = { class: "step-description" }, Fr = { class: "stat-badge" }, Vr = {
  key: 1,
  class: "step-body"
}, Ar = {
  key: 2,
  class: "empty-state"
}, Wr = { class: "model-search-modal" }, Gr = { class: "model-modal-body" }, jr = {
  key: 0,
  class: "model-search-results"
}, Hr = ["onClick"], qr = { class: "model-result-header" }, Kr = { class: "model-result-filename" }, Jr = { class: "model-result-meta" }, Yr = { class: "model-result-category" }, Xr = { class: "model-result-size" }, Qr = {
  key: 0,
  class: "model-result-path"
}, Zr = {
  key: 1,
  class: "model-no-results"
}, ed = {
  key: 2,
  class: "model-searching"
}, td = { class: "model-download-url-modal" }, sd = { class: "model-modal-body" }, od = { class: "model-input-group" }, nd = { class: "model-input-group" }, ad = { class: "model-modal-actions" }, ld = /* @__PURE__ */ Y({
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
    function d(O) {
      var E;
      return O && ((E = n[O]) == null ? void 0 : E[0]) || null;
    }
    const g = t, v = u, p = _(0), m = _(!1), l = _(!1), c = _(""), b = _(""), y = _(""), k = _([]), $ = _(!1), D = B(() => g.models[p.value]), S = B(() => g.models.some((O) => O.is_download_intent)), h = B(() => g.models.filter(
      (O) => g.modelChoices.has(O.filename) || O.is_download_intent
    ).length), M = B(() => {
      var E;
      if (!D.value) return "";
      const O = d((E = D.value.reference) == null ? void 0 : E.node_type);
      return O ? `${O}/${D.value.filename}` : "";
    }), V = B(() => {
      var E;
      if (!D.value) return "not-found";
      const O = g.modelChoices.get(D.value.filename);
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
      return D.value.is_download_intent ? "download" : (E = D.value.options) != null && E.length ? "ambiguous" : "not-found";
    }), L = B(() => {
      var E, oe;
      if (!D.value) return;
      const O = g.modelChoices.get(D.value.filename);
      if (O)
        switch (O.action) {
          case "select":
            return (E = O.selected_model) != null && E.filename ? `→ ${O.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return D.value.is_download_intent ? "Pending Download" : (oe = D.value.options) != null && oe.length ? `${D.value.options.length} matches` : "Not Found";
    });
    function N(O) {
      O >= 0 && O < g.models.length && (p.value = O);
    }
    function W() {
      D.value && v("mark-optional", D.value.filename);
    }
    function R() {
      D.value && v("skip", D.value.filename);
    }
    function T(O) {
      D.value && v("option-selected", D.value.filename, O);
    }
    function z() {
      D.value && v("clear-choice", D.value.filename);
    }
    function C() {
      D.value && (c.value = D.value.filename, m.value = !0);
    }
    function x() {
      D.value && (b.value = D.value.download_source || "", y.value = D.value.target_path || M.value, l.value = !0);
    }
    function G() {
      m.value = !1, c.value = "", k.value = [];
    }
    function H() {
      l.value = !1, b.value = "", y.value = "";
    }
    function Z() {
      $.value = !0, setTimeout(() => {
        $.value = !1;
      }, 300);
    }
    function ge(O) {
      D.value && G();
    }
    function ae() {
      !D.value || !b.value.trim() || (v("download-url", D.value.filename, b.value.trim(), y.value.trim() || void 0), H());
    }
    function se(O) {
      if (!O) return "Unknown";
      const E = O / (1024 * 1024 * 1024);
      return E >= 1 ? `${E.toFixed(2)} GB` : `${(O / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (O, E) => {
      var oe, Q, Ee;
      return s(), o("div", Nr, [
        e("div", Ur, [
          e("div", Pr, [
            e("h3", Or, a(S.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", Br, a(S.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", Fr, a(h.value) + "/" + a(t.models.length) + " resolved", 1)
        ]),
        D.value ? (s(), I(ws, {
          key: 0,
          "item-name": D.value.filename,
          "current-index": p.value,
          "total-items": t.models.length,
          onPrev: E[0] || (E[0] = (le) => N(p.value - 1)),
          onNext: E[1] || (E[1] = (le) => N(p.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : r("", !0),
        D.value ? (s(), o("div", Vr, [
          f(Rr, {
            filename: D.value.filename,
            "node-type": ((oe = D.value.reference) == null ? void 0 : oe.node_type) || "Unknown",
            "has-multiple-options": !!((Q = D.value.options) != null && Q.length),
            options: D.value.options,
            choice: (Ee = t.modelChoices) == null ? void 0 : Ee.get(D.value.filename),
            status: V.value,
            "status-label": L.value,
            onMarkOptional: W,
            onSkip: R,
            onDownloadUrl: x,
            onSearch: C,
            onOptionSelected: T,
            onClearChoice: z
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (s(), o("div", Ar, [...E[5] || (E[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (s(), I(Oe, { to: "body" }, [
          m.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: ze(G, ["self"])
          }, [
            e("div", Wr, [
              e("div", { class: "model-modal-header" }, [
                E[6] || (E[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: G
                }, "✕")
              ]),
              e("div", Gr, [
                f(Ye, {
                  modelValue: c.value,
                  "onUpdate:modelValue": E[2] || (E[2] = (le) => c.value = le),
                  placeholder: "Search by filename, category...",
                  onInput: Z
                }, null, 8, ["modelValue"]),
                k.value.length > 0 ? (s(), o("div", jr, [
                  (s(!0), o(A, null, te(k.value, (le) => (s(), o("div", {
                    key: le.hash,
                    class: "model-search-result-item",
                    onClick: (He) => ge()
                  }, [
                    e("div", qr, [
                      e("code", Kr, a(le.filename), 1)
                    ]),
                    e("div", Jr, [
                      e("span", Yr, a(le.category), 1),
                      e("span", Xr, a(se(le.size)), 1)
                    ]),
                    le.relative_path ? (s(), o("div", Qr, a(le.relative_path), 1)) : r("", !0)
                  ], 8, Hr))), 128))
                ])) : c.value && !$.value ? (s(), o("div", Zr, ' No models found matching "' + a(c.value) + '" ', 1)) : r("", !0),
                $.value ? (s(), o("div", ed, "Searching...")) : r("", !0)
              ])
            ])
          ])) : r("", !0)
        ])),
        (s(), I(Oe, { to: "body" }, [
          l.value ? (s(), o("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: ze(H, ["self"])
          }, [
            e("div", td, [
              e("div", { class: "model-modal-header" }, [
                E[7] || (E[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: H
                }, "✕")
              ]),
              e("div", sd, [
                e("div", od, [
                  E[8] || (E[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  f(Ye, {
                    modelValue: b.value,
                    "onUpdate:modelValue": E[3] || (E[3] = (le) => b.value = le),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", nd, [
                  E[9] || (E[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  f(Ye, {
                    modelValue: y.value,
                    "onUpdate:modelValue": E[4] || (E[4] = (le) => y.value = le),
                    placeholder: M.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", ad, [
                  f(de, {
                    variant: "secondary",
                    onClick: H
                  }, {
                    default: i(() => [...E[10] || (E[10] = [
                      w("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  f(de, {
                    variant: "primary",
                    disabled: !b.value.trim() || !y.value.trim(),
                    onClick: ae
                  }, {
                    default: i(() => [...E[11] || (E[11] = [
                      w(" Queue Download ", -1)
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
}), id = /* @__PURE__ */ X(ld, [["__scopeId", "data-v-c6acbada"]]), rd = { class: "applying-step" }, dd = {
  key: 0,
  class: "phase-content"
}, cd = {
  key: 1,
  class: "phase-content"
}, ud = { class: "phase-description" }, md = { class: "overall-progress" }, vd = { class: "progress-bar" }, fd = { class: "progress-label" }, gd = { class: "install-list" }, pd = { class: "install-icon" }, hd = { key: 0 }, yd = {
  key: 1,
  class: "spinner"
}, wd = { key: 2 }, kd = { key: 3 }, bd = {
  key: 0,
  class: "install-error"
}, _d = {
  key: 2,
  class: "phase-content"
}, $d = { class: "phase-header" }, Cd = { class: "phase-title" }, xd = { class: "completion-summary" }, Sd = {
  key: 0,
  class: "summary-item success"
}, Id = { class: "summary-text" }, Ed = {
  key: 1,
  class: "summary-item error"
}, Md = { class: "summary-text" }, zd = {
  key: 2,
  class: "failed-list"
}, Td = { class: "failed-node-id" }, Ld = { class: "failed-error" }, Dd = {
  key: 4,
  class: "summary-item success"
}, Rd = {
  key: 5,
  class: "restart-prompt"
}, Nd = {
  key: 3,
  class: "phase-content error"
}, Ud = { class: "error-message" }, Pd = /* @__PURE__ */ Y({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(t) {
    const u = t, n = B(() => {
      var c, b;
      const m = ((c = u.progress.nodeInstallProgress) == null ? void 0 : c.totalNodes) || u.progress.nodesToInstall.length;
      if (!m) return 0;
      const l = ((b = u.progress.nodeInstallProgress) == null ? void 0 : b.completedNodes.length) ?? 0;
      return Math.round(l / m * 100);
    }), d = B(() => {
      var m;
      return ((m = u.progress.nodeInstallProgress) == null ? void 0 : m.completedNodes.filter((l) => !l.success)) || [];
    }), g = B(() => d.value.length > 0);
    function v(m, l) {
      var b, y;
      const c = (b = u.progress.nodeInstallProgress) == null ? void 0 : b.completedNodes.find((k) => k.node_id === m);
      return c ? c.success ? "complete" : "failed" : ((y = u.progress.nodeInstallProgress) == null ? void 0 : y.currentIndex) === l ? "installing" : "pending";
    }
    function p(m) {
      var l, c;
      return (c = (l = u.progress.nodeInstallProgress) == null ? void 0 : l.completedNodes.find((b) => b.node_id === m)) == null ? void 0 : c.error;
    }
    return (m, l) => {
      var c, b, y, k;
      return s(), o("div", rd, [
        t.progress.phase === "resolving" ? (s(), o("div", dd, [...l[2] || (l[2] = [
          e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          e("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : t.progress.phase === "installing" ? (s(), o("div", cd, [
          l[3] || (l[3] = e("div", { class: "phase-header" }, [
            e("div", { class: "loading-spinner" }),
            e("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          e("p", ud, " Installing " + a((((c = t.progress.nodeInstallProgress) == null ? void 0 : c.currentIndex) ?? 0) + 1) + " of " + a(((b = t.progress.nodeInstallProgress) == null ? void 0 : b.totalNodes) ?? t.progress.nodesToInstall.length) + " packages... ", 1),
          e("div", md, [
            e("div", vd, [
              e("div", {
                class: "progress-fill",
                style: nt({ width: `${n.value}%` })
              }, null, 4)
            ]),
            e("span", fd, a(((y = t.progress.nodeInstallProgress) == null ? void 0 : y.completedNodes.length) ?? 0) + " / " + a(((k = t.progress.nodeInstallProgress) == null ? void 0 : k.totalNodes) ?? t.progress.nodesToInstall.length), 1)
          ]),
          e("div", gd, [
            (s(!0), o(A, null, te(t.progress.nodesToInstall, ($, D) => (s(), o("div", {
              key: $,
              class: ne(["install-item", v($, D)])
            }, [
              e("span", pd, [
                v($, D) === "pending" ? (s(), o("span", hd, "○")) : v($, D) === "installing" ? (s(), o("span", yd, "◌")) : v($, D) === "complete" ? (s(), o("span", wd, "✓")) : v($, D) === "failed" ? (s(), o("span", kd, "✗")) : r("", !0)
              ]),
              e("code", null, a($), 1),
              p($) ? (s(), o("span", bd, a(p($)), 1)) : r("", !0)
            ], 2))), 128))
          ])
        ])) : t.progress.phase === "complete" ? (s(), o("div", _d, [
          e("div", $d, [
            e("span", {
              class: ne(["phase-icon", g.value ? "warning" : "success"])
            }, a(g.value ? "⚠" : "✓"), 3),
            e("h3", Cd, a(g.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          e("div", xd, [
            t.progress.nodesInstalled.length > 0 ? (s(), o("div", Sd, [
              l[4] || (l[4] = e("span", { class: "summary-icon" }, "✓", -1)),
              e("span", Id, a(t.progress.nodesInstalled.length) + " node package" + a(t.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : r("", !0),
            d.value.length > 0 ? (s(), o("div", Ed, [
              l[5] || (l[5] = e("span", { class: "summary-icon" }, "✗", -1)),
              e("span", Md, a(d.value.length) + " package" + a(d.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : r("", !0),
            d.value.length > 0 ? (s(), o("div", zd, [
              (s(!0), o(A, null, te(d.value, ($) => (s(), o("div", {
                key: $.node_id,
                class: "failed-item"
              }, [
                e("code", Td, a($.node_id), 1),
                e("span", Ld, a($.error), 1)
              ]))), 128))
            ])) : r("", !0),
            d.value.length > 0 ? (s(), o("button", {
              key: 3,
              class: "retry-button",
              onClick: l[0] || (l[0] = ($) => m.$emit("retry-failed"))
            }, " Retry Failed (" + a(d.value.length) + ") ", 1)) : r("", !0),
            g.value ? r("", !0) : (s(), o("div", Dd, [...l[6] || (l[6] = [
              e("span", { class: "summary-icon" }, "✓", -1),
              e("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            l[8] || (l[8] = e("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            t.progress.needsRestart ? (s(), o("div", Rd, [
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
            ])) : r("", !0)
          ])
        ])) : t.progress.phase === "error" ? (s(), o("div", Nd, [
          l[9] || (l[9] = e("div", { class: "phase-header" }, [
            e("span", { class: "phase-icon error" }, "✗"),
            e("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          e("p", Ud, a(t.progress.error), 1)
        ])) : r("", !0)
      ]);
    };
  }
}), Od = /* @__PURE__ */ X(Pd, [["__scopeId", "data-v-5efaae58"]]), Bd = {
  key: 0,
  class: "loading-state"
}, Fd = {
  key: 1,
  class: "wizard-content"
}, Vd = {
  key: 0,
  class: "step-content"
}, Ad = { class: "analysis-summary" }, Wd = { class: "analysis-header" }, Gd = { class: "summary-description" }, jd = { class: "stats-grid" }, Hd = { class: "stat-card" }, qd = { class: "stat-items" }, Kd = {
  key: 0,
  class: "stat-item success"
}, Jd = { class: "stat-count" }, Yd = {
  key: 1,
  class: "stat-item info"
}, Xd = { class: "stat-count" }, Qd = {
  key: 2,
  class: "stat-item warning"
}, Zd = { class: "stat-count" }, ec = {
  key: 3,
  class: "stat-item error"
}, tc = { class: "stat-count" }, sc = { class: "stat-card" }, oc = { class: "stat-items" }, nc = { class: "stat-item success" }, ac = { class: "stat-count" }, lc = {
  key: 0,
  class: "stat-item info"
}, ic = { class: "stat-count" }, rc = {
  key: 1,
  class: "stat-item warning"
}, dc = { class: "stat-count" }, cc = {
  key: 2,
  class: "stat-item warning"
}, uc = { class: "stat-count" }, mc = {
  key: 3,
  class: "stat-item error"
}, vc = { class: "stat-count" }, fc = {
  key: 0,
  class: "status-message warning"
}, gc = { class: "status-text" }, pc = {
  key: 1,
  class: "status-message info"
}, hc = { class: "status-text" }, yc = {
  key: 2,
  class: "status-message info"
}, wc = { class: "status-text" }, kc = {
  key: 3,
  class: "status-message warning"
}, bc = { class: "status-text" }, _c = {
  key: 4,
  class: "status-message success"
}, $c = {
  key: 5,
  class: "category-mismatch-section"
}, Cc = { class: "mismatch-list" }, xc = { class: "mismatch-path" }, Sc = { class: "mismatch-target" }, Ic = {
  key: 3,
  class: "step-content"
}, Ec = { class: "review-summary" }, Mc = { class: "review-stats" }, zc = { class: "review-stat" }, Tc = { class: "stat-value" }, Lc = { class: "review-stat" }, Dc = { class: "stat-value" }, Rc = { class: "review-stat" }, Nc = { class: "stat-value" }, Uc = { class: "review-stat" }, Pc = { class: "stat-value" }, Oc = {
  key: 0,
  class: "review-section"
}, Bc = { class: "section-title" }, Fc = { class: "review-items" }, Vc = { class: "item-name" }, Ac = { class: "item-choice" }, Wc = {
  key: 0,
  class: "choice-badge install"
}, Gc = {
  key: 1,
  class: "choice-badge skip"
}, jc = {
  key: 1,
  class: "review-section"
}, Hc = { class: "section-title" }, qc = { class: "review-items" }, Kc = { class: "item-name" }, Jc = { class: "item-choice" }, Yc = {
  key: 0,
  class: "choice-badge install"
}, Xc = {
  key: 1,
  class: "choice-badge optional"
}, Qc = {
  key: 2,
  class: "choice-badge skip"
}, Zc = {
  key: 1,
  class: "choice-badge pending"
}, eu = {
  key: 2,
  class: "review-section"
}, tu = { class: "section-title" }, su = { class: "review-items" }, ou = { class: "item-name" }, nu = { class: "item-choice" }, au = {
  key: 0,
  class: "choice-badge install"
}, lu = {
  key: 1,
  class: "choice-badge download"
}, iu = {
  key: 2,
  class: "choice-badge optional"
}, ru = {
  key: 3,
  class: "choice-badge skip"
}, du = {
  key: 4,
  class: "choice-badge skip"
}, cu = {
  key: 1,
  class: "choice-badge download"
}, uu = {
  key: 2,
  class: "choice-badge pending"
}, mu = {
  key: 3,
  class: "no-choices"
}, vu = /* @__PURE__ */ Y({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(t, { emit: u }) {
    const n = t, d = u, { analyzeWorkflow: g, applyResolution: v, installNodes: p, queueModelDownloads: m, progress: l, resetProgress: c } = ys(), { loadPendingDownloads: b } = Rt(), { openFileLocation: y } = De(), k = _(null), $ = _(!1), D = _(!1), S = _(null), h = _("analysis"), M = _([]), V = _(/* @__PURE__ */ new Map()), L = _(/* @__PURE__ */ new Map()), N = _(/* @__PURE__ */ new Set()), W = B(() => {
      const j = [
        { id: "analysis", label: "Analysis" }
      ];
      return (T.value || x.value) && j.push({ id: "nodes", label: "Nodes" }), (z.value || C.value) && j.push({ id: "models", label: "Models" }), j.push({ id: "review", label: "Review" }), h.value === "applying" && j.push({ id: "applying", label: "Applying" }), j;
    }), R = B(() => k.value ? k.value.stats.needs_user_input : !1), T = B(() => k.value ? k.value.nodes.unresolved.length > 0 || k.value.nodes.ambiguous.length > 0 : !1), z = B(() => k.value ? k.value.models.unresolved.length > 0 || k.value.models.ambiguous.length > 0 : !1), C = B(() => k.value ? k.value.stats.download_intents > 0 : !1), x = B(() => k.value ? k.value.stats.nodes_needing_installation > 0 : !1), G = B(() => k.value ? k.value.nodes.resolved.length : 0), H = B(() => k.value ? k.value.models.resolved.filter((j) => j.has_category_mismatch) : []), Z = B(() => H.value.length > 0), ge = B(() => {
      if (!k.value) return [];
      const j = k.value.nodes.resolved.filter((J) => !J.is_installed), U = /* @__PURE__ */ new Set();
      return j.filter((J) => U.has(J.package.package_id) ? !1 : (U.add(J.package.package_id), !0));
    }), ae = B(() => {
      if (!k.value) return [];
      const j = k.value.nodes.resolved.filter((J) => !J.is_installed), U = /* @__PURE__ */ new Map();
      for (const J of j) {
        const he = U.get(J.package.package_id);
        he ? he.node_types_count++ : U.set(J.package.package_id, {
          package_id: J.package.package_id,
          title: J.package.title,
          node_types_count: 1
        });
      }
      return Array.from(U.values());
    }), se = B(() => ge.value.filter((j) => !N.value.has(j.package.package_id))), O = B(() => k.value ? k.value.models.resolved.filter((j) => j.match_type === "download_intent").map((j) => ({
      filename: j.reference.widget_value,
      reference: j.reference,
      is_download_intent: !0,
      resolved_model: j.model,
      download_source: j.download_source,
      target_path: j.target_path
    })) : []), E = B(() => {
      if (!k.value) return [];
      const j = k.value.nodes.unresolved.map((J) => ({
        node_type: J.reference.node_type,
        reason: J.reason,
        is_unresolved: !0,
        options: void 0
      })), U = k.value.nodes.ambiguous.map((J) => ({
        node_type: J.reference.node_type,
        has_multiple_options: !0,
        options: J.options.map((he) => ({
          package_id: he.package.package_id,
          title: he.package.title,
          match_confidence: he.match_confidence,
          match_type: he.match_type,
          is_installed: he.is_installed
        }))
      }));
      return [...j, ...U];
    }), oe = B(() => {
      if (!k.value) return [];
      const j = k.value.models.unresolved.map((J) => ({
        filename: J.reference.widget_value,
        reference: J.reference,
        reason: J.reason,
        is_unresolved: !0,
        options: void 0
      })), U = k.value.models.ambiguous.map((J) => ({
        filename: J.reference.widget_value,
        reference: J.reference,
        has_multiple_options: !0,
        options: J.options.map((he) => ({
          model: he.model,
          match_confidence: he.match_confidence,
          match_type: he.match_type,
          has_download_source: he.has_download_source
        }))
      }));
      return [...j, ...U];
    }), Q = B(() => {
      const j = oe.value, U = O.value.map((J) => ({
        filename: J.filename,
        reference: J.reference,
        is_download_intent: !0,
        resolved_model: J.resolved_model,
        download_source: J.download_source,
        target_path: J.target_path,
        options: void 0
      }));
      return [...j, ...U];
    }), Ee = B(() => {
      let j = se.value.length;
      for (const U of V.value.values())
        U.action === "install" && j++;
      for (const U of L.value.values())
        U.action === "select" && j++;
      return j;
    }), le = B(() => {
      let j = 0;
      for (const U of L.value.values())
        U.action === "download" && j++;
      return j;
    }), He = B(() => {
      let j = 0;
      for (const U of V.value.values())
        U.action === "optional" && j++;
      for (const U of L.value.values())
        U.action === "optional" && j++;
      return j;
    }), $e = B(() => {
      let j = N.value.size;
      for (const U of V.value.values())
        U.action === "skip" && j++;
      for (const U of L.value.values())
        U.action === "skip" && j++;
      for (const U of E.value)
        V.value.has(U.node_type) || j++;
      for (const U of oe.value)
        L.value.has(U.filename) || j++;
      return j;
    }), ce = B(() => {
      const j = {};
      if (j.analysis = { resolved: 1, total: 1 }, T.value) {
        const U = E.value.length, J = E.value.filter(
          (he) => V.value.has(he.node_type)
        ).length;
        j.nodes = { resolved: J, total: U };
      }
      if (z.value || C.value) {
        const U = Q.value.length, J = Q.value.filter(
          (he) => L.value.has(he.filename) || he.is_download_intent
        ).length;
        j.models = { resolved: J, total: U };
      }
      if (j.review = { resolved: 1, total: 1 }, h.value === "applying") {
        const U = l.totalFiles || 1, J = l.completedFiles.length;
        j.applying = { resolved: J, total: U };
      }
      return j;
    });
    function ve(j) {
      h.value = j;
    }
    function Ke() {
      const j = W.value.findIndex((U) => U.id === h.value);
      j > 0 && (h.value = W.value[j - 1].id);
    }
    function ye() {
      const j = W.value.findIndex((U) => U.id === h.value);
      j < W.value.length - 1 && (h.value = W.value[j + 1].id);
    }
    async function ie() {
      $.value = !0, S.value = null;
      try {
        k.value = await g(n.workflowName);
      } catch (j) {
        S.value = j instanceof Error ? j.message : "Failed to analyze workflow";
      } finally {
        $.value = !1;
      }
    }
    function q() {
      M.value.includes("analysis") || M.value.push("analysis"), T.value || x.value ? h.value = "nodes" : z.value || C.value ? h.value = "models" : h.value = "review";
    }
    function Ce(j) {
      V.value.set(j, { action: "optional" });
    }
    function be(j) {
      V.value.set(j, { action: "skip" });
    }
    function re(j, U) {
      var he;
      const J = E.value.find((Me) => Me.node_type === j);
      (he = J == null ? void 0 : J.options) != null && he[U] && V.value.set(j, {
        action: "install",
        package_id: J.options[U].package_id
      });
    }
    function me(j, U) {
      V.value.set(j, {
        action: "install",
        package_id: U
      });
    }
    function mt(j) {
      V.value.delete(j);
    }
    function vt(j) {
      N.value.has(j) ? N.value.delete(j) : N.value.add(j);
    }
    function Re(j) {
      L.value.set(j, { action: "optional" });
    }
    function $t(j) {
      L.value.set(j, { action: "skip" });
    }
    function pt(j, U) {
      var he;
      const J = oe.value.find((Me) => Me.filename === j);
      (he = J == null ? void 0 : J.options) != null && he[U] && L.value.set(j, {
        action: "select",
        selected_model: J.options[U].model
      });
    }
    function K(j, U, J) {
      L.value.set(j, {
        action: "download",
        url: U,
        target_path: J
      });
    }
    function pe(j) {
      L.value.delete(j);
    }
    async function xe(j) {
      try {
        await y(j);
      } catch (U) {
        S.value = U instanceof Error ? U.message : "Failed to open file location";
      }
    }
    async function Ne() {
      var j;
      D.value = !0, S.value = null, c(), l.phase = "resolving", h.value = "applying";
      try {
        const U = await v(n.workflowName, V.value, L.value, N.value);
        U.models_to_download && U.models_to_download.length > 0 && m(n.workflowName, U.models_to_download);
        const J = [
          ...U.nodes_to_install || [],
          ...se.value.map((Me) => Me.package.package_id)
        ];
        l.nodesToInstall = [...new Set(J)], l.nodesToInstall.length > 0 && await p(n.workflowName), l.phase = "complete", await b();
        const he = l.installError || ((j = l.nodeInstallProgress) == null ? void 0 : j.completedNodes.some((Me) => !Me.success));
        !l.needsRestart && !he && setTimeout(() => {
          d("refresh"), d("install"), d("close");
        }, 1500);
      } catch (U) {
        S.value = U instanceof Error ? U.message : "Failed to apply resolution", l.error = S.value, l.phase = "error";
      } finally {
        D.value = !1;
      }
    }
    function tt() {
      d("refresh"), d("restart"), d("close");
    }
    async function Wt() {
      var U;
      const j = ((U = l.nodeInstallProgress) == null ? void 0 : U.completedNodes.filter((J) => !J.success).map((J) => J.node_id)) || [];
      if (j.length !== 0) {
        l.phase = "installing", l.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: j.length
        }, l.nodesToInstall = j, l.nodesInstalled = [], l.installError = void 0;
        try {
          await p(n.workflowName), l.phase = "complete";
        } catch (J) {
          l.error = J instanceof Error ? J.message : "Retry failed", l.phase = "error";
        }
      }
    }
    return Le(ie), (j, U) => (s(), I(at, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: $.value,
      error: S.value || void 0,
      "fixed-height": !0,
      onClose: U[1] || (U[1] = (J) => d("close"))
    }, {
      body: i(() => [
        $.value && !k.value ? (s(), o("div", Bd, [...U[2] || (U[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : k.value ? (s(), o("div", Fd, [
          f(ql, {
            steps: W.value,
            "current-step": h.value,
            "completed-steps": M.value,
            "step-stats": ce.value,
            onStepChange: ve
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          h.value === "analysis" ? (s(), o("div", Vd, [
            e("div", Ad, [
              e("div", Wd, [
                U[3] || (U[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", Gd, " Found " + a(k.value.stats.total_nodes) + " nodes and " + a(k.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", jd, [
                e("div", Hd, [
                  U[12] || (U[12] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", qd, [
                    G.value > 0 ? (s(), o("div", Kd, [
                      U[4] || (U[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Jd, a(G.value), 1),
                      U[5] || (U[5] = e("span", { class: "stat-label" }, "resolved", -1))
                    ])) : r("", !0),
                    k.value.stats.packages_needing_installation > 0 ? (s(), o("div", Yd, [
                      U[6] || (U[6] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Xd, a(k.value.stats.packages_needing_installation), 1),
                      U[7] || (U[7] = e("span", { class: "stat-label" }, "to install", -1))
                    ])) : r("", !0),
                    k.value.nodes.ambiguous.length > 0 ? (s(), o("div", Qd, [
                      U[8] || (U[8] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Zd, a(k.value.nodes.ambiguous.length), 1),
                      U[9] || (U[9] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : r("", !0),
                    k.value.nodes.unresolved.length > 0 ? (s(), o("div", ec, [
                      U[10] || (U[10] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", tc, a(k.value.nodes.unresolved.length), 1),
                      U[11] || (U[11] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : r("", !0)
                  ])
                ]),
                e("div", sc, [
                  U[23] || (U[23] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", oc, [
                    e("div", nc, [
                      U[13] || (U[13] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", ac, a(k.value.models.resolved.length - k.value.stats.download_intents - k.value.stats.models_with_category_mismatch), 1),
                      U[14] || (U[14] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    k.value.stats.download_intents > 0 ? (s(), o("div", lc, [
                      U[15] || (U[15] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", ic, a(k.value.stats.download_intents), 1),
                      U[16] || (U[16] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : r("", !0),
                    Z.value ? (s(), o("div", rc, [
                      U[17] || (U[17] = e("span", { class: "stat-icon" }, "⚠", -1)),
                      e("span", dc, a(H.value.length), 1),
                      U[18] || (U[18] = e("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : r("", !0),
                    k.value.models.ambiguous.length > 0 ? (s(), o("div", cc, [
                      U[19] || (U[19] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", uc, a(k.value.models.ambiguous.length), 1),
                      U[20] || (U[20] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : r("", !0),
                    k.value.models.unresolved.length > 0 ? (s(), o("div", mc, [
                      U[21] || (U[21] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", vc, a(k.value.models.unresolved.length), 1),
                      U[22] || (U[22] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : r("", !0)
                  ])
                ])
              ]),
              R.value ? (s(), o("div", fc, [
                U[24] || (U[24] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", gc, a(E.value.length + oe.value.length) + " items need your input", 1)
              ])) : x.value ? (s(), o("div", pc, [
                U[25] || (U[25] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", hc, a(k.value.stats.packages_needing_installation) + " package" + a(k.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + a(k.value.stats.nodes_needing_installation) + " node type" + a(k.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + a(C.value ? `, ${k.value.stats.download_intents} model${k.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : C.value ? (s(), o("div", yc, [
                U[26] || (U[26] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", wc, a(k.value.stats.download_intents) + " model" + a(k.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : Z.value ? (s(), o("div", kc, [
                U[27] || (U[27] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", bc, a(H.value.length) + " model" + a(H.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (s(), o("div", _c, [...U[28] || (U[28] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              Z.value ? (s(), o("div", $c, [
                U[31] || (U[31] = e("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                e("div", Cc, [
                  (s(!0), o(A, null, te(H.value, (J) => {
                    var he, Me;
                    return s(), o("div", {
                      key: J.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      e("code", xc, a(J.actual_category) + "/" + a((he = J.model) == null ? void 0 : he.filename), 1),
                      U[30] || (U[30] = e("span", { class: "mismatch-arrow" }, "→", -1)),
                      e("code", Sc, a((Me = J.expected_categories) == null ? void 0 : Me[0]) + "/", 1),
                      J.file_path ? (s(), I(de, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (dt) => xe(J.file_path)
                      }, {
                        default: i(() => [...U[29] || (U[29] = [
                          w(" Open File Location ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : r("", !0)
                    ]);
                  }), 128))
                ])
              ])) : r("", !0)
            ])
          ])) : r("", !0),
          h.value === "nodes" ? (s(), I(fr, {
            key: 1,
            nodes: E.value,
            "node-choices": V.value,
            "auto-resolved-packages": ae.value,
            "skipped-packages": N.value,
            onMarkOptional: Ce,
            onSkip: be,
            onOptionSelected: re,
            onManualEntry: me,
            onClearChoice: mt,
            onPackageSkip: vt
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : r("", !0),
          h.value === "models" ? (s(), I(id, {
            key: 2,
            models: Q.value,
            "model-choices": L.value,
            onMarkOptional: Re,
            onSkip: $t,
            onOptionSelected: pt,
            onDownloadUrl: K,
            onClearChoice: pe
          }, null, 8, ["models", "model-choices"])) : r("", !0),
          h.value === "review" ? (s(), o("div", Ic, [
            e("div", Ec, [
              U[36] || (U[36] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", Mc, [
                e("div", zc, [
                  e("span", Tc, a(Ee.value), 1),
                  U[32] || (U[32] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", Lc, [
                  e("span", Dc, a(le.value), 1),
                  U[33] || (U[33] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", Rc, [
                  e("span", Nc, a(He.value), 1),
                  U[34] || (U[34] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", Uc, [
                  e("span", Pc, a($e.value), 1),
                  U[35] || (U[35] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              ae.value.length > 0 ? (s(), o("div", Oc, [
                e("h4", Bc, "Node Packages (" + a(ae.value.length) + ")", 1),
                e("div", Fc, [
                  (s(!0), o(A, null, te(ae.value, (J) => (s(), o("div", {
                    key: J.package_id,
                    class: "review-item"
                  }, [
                    e("code", Vc, a(J.package_id), 1),
                    e("div", Ac, [
                      N.value.has(J.package_id) ? (s(), o("span", Gc, "Skipped")) : (s(), o("span", Wc, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : r("", !0),
              E.value.length > 0 ? (s(), o("div", jc, [
                e("h4", Hc, "Node Choices (" + a(E.value.length) + ")", 1),
                e("div", qc, [
                  (s(!0), o(A, null, te(E.value, (J) => {
                    var he, Me, dt, We;
                    return s(), o("div", {
                      key: J.node_type,
                      class: "review-item"
                    }, [
                      e("code", Kc, a(J.node_type), 1),
                      e("div", Jc, [
                        V.value.has(J.node_type) ? (s(), o(A, { key: 0 }, [
                          ((he = V.value.get(J.node_type)) == null ? void 0 : he.action) === "install" ? (s(), o("span", Yc, a((Me = V.value.get(J.node_type)) == null ? void 0 : Me.package_id), 1)) : ((dt = V.value.get(J.node_type)) == null ? void 0 : dt.action) === "optional" ? (s(), o("span", Xc, " Optional ")) : ((We = V.value.get(J.node_type)) == null ? void 0 : We.action) === "skip" ? (s(), o("span", Qc, " Skip ")) : r("", !0)
                        ], 64)) : (s(), o("span", Zc, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : r("", !0),
              Q.value.length > 0 ? (s(), o("div", eu, [
                e("h4", tu, "Models (" + a(Q.value.length) + ")", 1),
                e("div", su, [
                  (s(!0), o(A, null, te(Q.value, (J) => {
                    var he, Me, dt, We, Nt, ht, Ut;
                    return s(), o("div", {
                      key: J.filename,
                      class: "review-item"
                    }, [
                      e("code", ou, a(J.filename), 1),
                      e("div", nu, [
                        L.value.has(J.filename) ? (s(), o(A, { key: 0 }, [
                          ((he = L.value.get(J.filename)) == null ? void 0 : he.action) === "select" ? (s(), o("span", au, a((dt = (Me = L.value.get(J.filename)) == null ? void 0 : Me.selected_model) == null ? void 0 : dt.filename), 1)) : ((We = L.value.get(J.filename)) == null ? void 0 : We.action) === "download" ? (s(), o("span", lu, " Download ")) : ((Nt = L.value.get(J.filename)) == null ? void 0 : Nt.action) === "optional" ? (s(), o("span", iu, " Optional ")) : ((ht = L.value.get(J.filename)) == null ? void 0 : ht.action) === "skip" ? (s(), o("span", ru, " Skip ")) : ((Ut = L.value.get(J.filename)) == null ? void 0 : Ut.action) === "cancel_download" ? (s(), o("span", du, " Cancel Download ")) : r("", !0)
                        ], 64)) : J.is_download_intent ? (s(), o("span", cu, " Pending Download ")) : (s(), o("span", uu, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : r("", !0),
              ge.value.length === 0 && E.value.length === 0 && Q.value.length === 0 ? (s(), o("div", mu, " No dependencies need resolution. ")) : r("", !0)
            ])
          ])) : r("", !0),
          h.value === "applying" ? (s(), I(Od, {
            key: 4,
            progress: ke(l),
            onRestart: tt,
            onRetryFailed: Wt
          }, null, 8, ["progress"])) : r("", !0)
        ])) : r("", !0)
      ]),
      footer: i(() => [
        h.value !== "analysis" && h.value !== "applying" ? (s(), I(de, {
          key: 0,
          variant: "secondary",
          disabled: D.value,
          onClick: Ke
        }, {
          default: i(() => [...U[37] || (U[37] = [
            w(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : r("", !0),
        U[41] || (U[41] = e("div", { class: "footer-spacer" }, null, -1)),
        h.value !== "applying" || ke(l).phase === "complete" || ke(l).phase === "error" ? (s(), I(de, {
          key: 1,
          variant: "secondary",
          onClick: U[0] || (U[0] = (J) => d("close"))
        }, {
          default: i(() => [
            w(a(ke(l).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : r("", !0),
        h.value === "analysis" ? (s(), I(de, {
          key: 2,
          variant: "primary",
          disabled: $.value,
          onClick: q
        }, {
          default: i(() => [...U[38] || (U[38] = [
            w(" Continue ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : r("", !0),
        h.value === "nodes" ? (s(), I(de, {
          key: 3,
          variant: "primary",
          onClick: ye
        }, {
          default: i(() => [
            w(a(z.value || C.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : r("", !0),
        h.value === "models" ? (s(), I(de, {
          key: 4,
          variant: "primary",
          onClick: ye
        }, {
          default: i(() => [...U[39] || (U[39] = [
            w(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : r("", !0),
        h.value === "review" ? (s(), I(de, {
          key: 5,
          variant: "primary",
          disabled: D.value,
          loading: D.value,
          onClick: Ne
        }, {
          default: i(() => [...U[40] || (U[40] = [
            w(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : r("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), fu = /* @__PURE__ */ X(vu, [["__scopeId", "data-v-6276cf1d"]]), gu = { class: "search-input-wrapper" }, pu = ["value", "placeholder"], hu = /* @__PURE__ */ Y({
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
    const n = t, d = u, g = _(null);
    let v;
    function p(l) {
      const c = l.target.value;
      n.debounce > 0 ? (clearTimeout(v), v = window.setTimeout(() => {
        d("update:modelValue", c);
      }, n.debounce)) : d("update:modelValue", c);
    }
    function m() {
      var l;
      d("update:modelValue", ""), d("clear"), (l = g.value) == null || l.focus();
    }
    return Le(() => {
      n.autoFocus && g.value && g.value.focus();
    }), (l, c) => (s(), o("div", gu, [
      e("input", {
        ref_key: "inputRef",
        ref: g,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: p,
        onKeyup: ut(m, ["escape"])
      }, null, 40, pu),
      t.clearable && t.modelValue ? (s(), o("button", {
        key: 0,
        class: "clear-button",
        onClick: m,
        title: "Clear search"
      }, " ✕ ")) : r("", !0)
    ]));
  }
}), yu = /* @__PURE__ */ X(hu, [["__scopeId", "data-v-266f857a"]]), wu = { class: "search-bar" }, ku = /* @__PURE__ */ Y({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (u, n) => (s(), o("div", wu, [
      f(yu, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": n[0] || (n[0] = (d) => u.$emit("update:modelValue", d)),
        onClear: n[1] || (n[1] = (d) => u.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), bt = /* @__PURE__ */ X(ku, [["__scopeId", "data-v-3d51bbfd"]]), bu = { class: "section-group" }, _u = {
  key: 0,
  class: "section-content"
}, $u = /* @__PURE__ */ Y({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: u }) {
    const n = t, d = u, g = _(n.initiallyExpanded);
    function v() {
      n.collapsible && (g.value = !g.value, d("toggle", g.value));
    }
    return (p, m) => (s(), o("section", bu, [
      f(je, {
        count: t.count,
        clickable: t.collapsible,
        expanded: g.value,
        onClick: v
      }, {
        default: i(() => [
          w(a(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || g.value ? (s(), o("div", _u, [
        we(p.$slots, "default", {}, void 0, !0)
      ])) : r("", !0)
    ]));
  }
}), Te = /* @__PURE__ */ X($u, [["__scopeId", "data-v-c48e33ed"]]), Cu = { class: "item-header" }, xu = {
  key: 0,
  class: "item-icon"
}, Su = { class: "item-info" }, Iu = {
  key: 0,
  class: "item-title"
}, Eu = {
  key: 1,
  class: "item-subtitle"
}, Mu = {
  key: 0,
  class: "item-details"
}, zu = {
  key: 1,
  class: "item-actions"
}, Tu = /* @__PURE__ */ Y({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: u }) {
    const n = t, d = B(() => n.status ? `status-${n.status}` : "");
    return (g, v) => (s(), o("div", {
      class: ne(["item-card", { clickable: t.clickable, compact: t.compact }, d.value]),
      onClick: v[0] || (v[0] = (p) => t.clickable && g.$emit("click"))
    }, [
      e("div", Cu, [
        g.$slots.icon ? (s(), o("span", xu, [
          we(g.$slots, "icon", {}, void 0, !0)
        ])) : r("", !0),
        e("div", Su, [
          g.$slots.title ? (s(), o("div", Iu, [
            we(g.$slots, "title", {}, void 0, !0)
          ])) : r("", !0),
          g.$slots.subtitle ? (s(), o("div", Eu, [
            we(g.$slots, "subtitle", {}, void 0, !0)
          ])) : r("", !0)
        ])
      ]),
      g.$slots.details ? (s(), o("div", Mu, [
        we(g.$slots, "details", {}, void 0, !0)
      ])) : r("", !0),
      g.$slots.actions ? (s(), o("div", zu, [
        we(g.$slots, "actions", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), Pe = /* @__PURE__ */ X(Tu, [["__scopeId", "data-v-cc435e0e"]]), Lu = { class: "loading-state" }, Du = { class: "loading-message" }, Ru = /* @__PURE__ */ Y({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (u, n) => (s(), o("div", Lu, [
      n[0] || (n[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", Du, a(t.message), 1)
    ]));
  }
}), it = /* @__PURE__ */ X(Ru, [["__scopeId", "data-v-ad8436c9"]]), Nu = { class: "error-state" }, Uu = { class: "error-message" }, Pu = /* @__PURE__ */ Y({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (u, n) => (s(), o("div", Nu, [
      n[2] || (n[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", Uu, a(t.message), 1),
      t.retry ? (s(), I(ee, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (d) => u.$emit("retry"))
      }, {
        default: i(() => [...n[1] || (n[1] = [
          w(" Retry ", -1)
        ])]),
        _: 1
      })) : r("", !0)
    ]));
  }
}), rt = /* @__PURE__ */ X(Pu, [["__scopeId", "data-v-5397be48"]]), Ou = /* @__PURE__ */ Y({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: u, emit: n }) {
    const d = n, { getWorkflows: g } = De();
    ps();
    const v = _([]), p = _(!1), m = _(null), l = _(""), c = _(!0), b = _(!1), y = _(!1), k = _(!1), $ = _(null), D = B(
      () => v.value.filter((se) => se.status === "broken")
    ), S = B(
      () => v.value.filter((se) => se.status === "new")
    ), h = B(
      () => v.value.filter((se) => se.status === "modified")
    ), M = B(
      () => v.value.filter((se) => se.status === "synced")
    ), V = B(() => {
      if (!l.value.trim()) return v.value;
      const se = l.value.toLowerCase();
      return v.value.filter((O) => O.name.toLowerCase().includes(se));
    }), L = B(
      () => D.value.filter(
        (se) => !l.value.trim() || se.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), N = B(
      () => S.value.filter(
        (se) => !l.value.trim() || se.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), W = B(
      () => h.value.filter(
        (se) => !l.value.trim() || se.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), R = B(
      () => M.value.filter(
        (se) => !l.value.trim() || se.name.toLowerCase().includes(l.value.toLowerCase())
      )
    ), T = B(
      () => b.value ? R.value : R.value.slice(0, 5)
    );
    async function z(se = !1) {
      p.value = !0, m.value = null;
      try {
        v.value = await g(se);
      } catch (O) {
        m.value = O instanceof Error ? O.message : "Failed to load workflows";
      } finally {
        p.value = !1;
      }
    }
    u({ loadWorkflows: z });
    function C(se) {
      $.value = se, y.value = !0;
    }
    function x(se) {
      $.value = se, k.value = !0;
    }
    function G() {
      alert("Bulk resolution not yet implemented");
    }
    function H() {
      d("refresh");
    }
    async function Z() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function ge(se) {
      const O = [];
      return se.missing_nodes > 0 && O.push(`${se.missing_nodes} missing node${se.missing_nodes > 1 ? "s" : ""}`), se.missing_models > 0 && O.push(`${se.missing_models} missing model${se.missing_models > 1 ? "s" : ""}`), se.models_with_category_mismatch && se.models_with_category_mismatch > 0 && O.push(`${se.models_with_category_mismatch} model${se.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), se.pending_downloads && se.pending_downloads > 0 && O.push(`${se.pending_downloads} pending download${se.pending_downloads > 1 ? "s" : ""}`), O.length > 0 ? O.join(", ") : "Has issues";
    }
    function ae(se) {
      const O = se.sync_state === "new" ? "New" : se.sync_state === "modified" ? "Modified" : se.sync_state === "synced" ? "Synced" : se.sync_state;
      return se.has_path_sync_issues && se.models_needing_path_sync && se.models_needing_path_sync > 0 ? `${se.models_needing_path_sync} model path${se.models_needing_path_sync > 1 ? "s" : ""} need${se.models_needing_path_sync === 1 ? "s" : ""} sync` : O || "Unknown";
    }
    return Le(z), (se, O) => (s(), o(A, null, [
      f(Ve, null, {
        header: i(() => [
          f(Ae, { title: "WORKFLOWS" }, {
            actions: i(() => [
              D.value.length > 0 ? (s(), I(ee, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: G
              }, {
                default: i(() => [...O[8] || (O[8] = [
                  w(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : r("", !0)
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          f(bt, {
            modelValue: l.value,
            "onUpdate:modelValue": O[0] || (O[0] = (E) => l.value = E),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          p.value ? (s(), I(it, {
            key: 0,
            message: "Loading workflows..."
          })) : m.value ? (s(), I(rt, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: z
          }, null, 8, ["message"])) : (s(), o(A, { key: 2 }, [
            L.value.length ? (s(), I(Te, {
              key: 0,
              title: "BROKEN",
              count: L.value.length
            }, {
              default: i(() => [
                (s(!0), o(A, null, te(L.value, (E) => (s(), I(Pe, {
                  key: E.name,
                  status: "broken"
                }, {
                  icon: i(() => [...O[9] || (O[9] = [
                    w("⚠", -1)
                  ])]),
                  title: i(() => [
                    w(a(E.name), 1)
                  ]),
                  subtitle: i(() => [
                    w(a(ge(E)), 1)
                  ]),
                  actions: i(() => [
                    f(ee, {
                      variant: "primary",
                      size: "sm",
                      onClick: (oe) => x(E.name)
                    }, {
                      default: i(() => [...O[10] || (O[10] = [
                        w(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    f(ee, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (oe) => C(E.name)
                    }, {
                      default: i(() => [...O[11] || (O[11] = [
                        w(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            N.value.length ? (s(), I(Te, {
              key: 1,
              title: "NEW",
              count: N.value.length
            }, {
              default: i(() => [
                (s(!0), o(A, null, te(N.value, (E) => (s(), I(Pe, {
                  key: E.name,
                  status: E.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: i(() => [
                    w(a(E.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: i(() => [
                    w(a(E.name), 1)
                  ]),
                  subtitle: i(() => [
                    w(a(ae(E)), 1)
                  ]),
                  actions: i(() => [
                    f(ee, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (oe) => C(E.name)
                    }, {
                      default: i(() => [...O[12] || (O[12] = [
                        w(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            W.value.length ? (s(), I(Te, {
              key: 2,
              title: "MODIFIED",
              count: W.value.length
            }, {
              default: i(() => [
                (s(!0), o(A, null, te(W.value, (E) => (s(), I(Pe, {
                  key: E.name,
                  status: E.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: i(() => [...O[13] || (O[13] = [
                    w("⚡", -1)
                  ])]),
                  title: i(() => [
                    w(a(E.name), 1)
                  ]),
                  subtitle: i(() => [
                    w(a(ae(E)), 1)
                  ]),
                  actions: i(() => [
                    f(ee, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (oe) => C(E.name)
                    }, {
                      default: i(() => [...O[14] || (O[14] = [
                        w(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            R.value.length ? (s(), I(Te, {
              key: 3,
              title: "SYNCED",
              count: R.value.length,
              collapsible: !0,
              "initially-expanded": c.value,
              onToggle: O[2] || (O[2] = (E) => c.value = E)
            }, {
              default: i(() => [
                (s(!0), o(A, null, te(T.value, (E) => (s(), I(Pe, {
                  key: E.name,
                  status: E.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: i(() => [
                    w(a(E.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: i(() => [
                    w(a(E.name), 1)
                  ]),
                  subtitle: i(() => [
                    w(a(ae(E)), 1)
                  ]),
                  actions: i(() => [
                    f(ee, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (oe) => C(E.name)
                    }, {
                      default: i(() => [...O[15] || (O[15] = [
                        w(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !b.value && R.value.length > 5 ? (s(), I(ee, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: O[1] || (O[1] = (E) => b.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: i(() => [
                    w(" View all " + a(R.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : r("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : r("", !0),
            V.value.length ? r("", !0) : (s(), I(Xe, {
              key: 4,
              icon: "📭",
              message: l.value ? `No workflows match '${l.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      y.value && $.value ? (s(), I(Nl, {
        key: 0,
        "workflow-name": $.value,
        onClose: O[3] || (O[3] = (E) => y.value = !1),
        onResolve: O[4] || (O[4] = (E) => x($.value)),
        onRefresh: O[5] || (O[5] = (E) => d("refresh"))
      }, null, 8, ["workflow-name"])) : r("", !0),
      k.value && $.value ? (s(), I(fu, {
        key: 1,
        "workflow-name": $.value,
        onClose: O[6] || (O[6] = (E) => k.value = !1),
        onInstall: H,
        onRefresh: O[7] || (O[7] = (E) => d("refresh")),
        onRestart: Z
      }, null, 8, ["workflow-name"])) : r("", !0)
    ], 64));
  }
}), Bu = /* @__PURE__ */ X(Ou, [["__scopeId", "data-v-591d06d5"]]), Fu = /* @__PURE__ */ Y({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (u, n) => (s(), o("div", {
      class: ne(["summary-bar", t.variant])
    }, [
      we(u.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), _t = /* @__PURE__ */ X(Fu, [["__scopeId", "data-v-ccb7816e"]]), Vu = {
  key: 0,
  class: "model-details"
}, Au = { class: "detail-section" }, Wu = { class: "detail-row" }, Gu = { class: "detail-value mono" }, ju = { class: "detail-row" }, Hu = { class: "detail-value mono" }, qu = { class: "detail-row" }, Ku = { class: "detail-value mono" }, Ju = { class: "detail-row" }, Yu = { class: "detail-value" }, Xu = { class: "detail-row" }, Qu = { class: "detail-value" }, Zu = { class: "detail-row" }, em = { class: "detail-value" }, tm = { class: "detail-section" }, sm = { class: "section-header" }, om = {
  key: 0,
  class: "locations-list"
}, nm = { class: "location-path mono" }, am = {
  key: 0,
  class: "location-modified"
}, lm = ["onClick"], im = {
  key: 1,
  class: "empty-state"
}, rm = { class: "detail-section" }, dm = { class: "section-header" }, cm = {
  key: 0,
  class: "sources-list"
}, um = { class: "source-type" }, mm = ["href"], vm = ["disabled", "onClick"], fm = {
  key: 1,
  class: "empty-state"
}, gm = { class: "add-source-form" }, pm = ["disabled"], hm = {
  key: 2,
  class: "source-error"
}, ym = {
  key: 3,
  class: "source-success"
}, wm = /* @__PURE__ */ Y({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(t, { emit: u }) {
    const n = t, { getModelDetails: d, addModelSource: g, removeModelSource: v, openFileLocation: p } = De(), m = _(null), l = _(!0), c = _(null), b = _(""), y = _(!1), k = _(null), $ = _(null), D = _(null), S = _(null);
    let h = null;
    function M(z, C = "success", x = 2e3) {
      h && clearTimeout(h), S.value = { message: z, type: C }, h = setTimeout(() => {
        S.value = null;
      }, x);
    }
    function V(z) {
      if (!z) return "Unknown";
      const C = 1024 * 1024 * 1024, x = 1024 * 1024;
      return z >= C ? `${(z / C).toFixed(1)} GB` : z >= x ? `${(z / x).toFixed(0)} MB` : `${(z / 1024).toFixed(0)} KB`;
    }
    function L(z) {
      navigator.clipboard.writeText(z), M("Copied to clipboard!");
    }
    async function N(z) {
      try {
        await p(z), M("Opening file location...");
      } catch {
        M("Failed to open location", "error");
      }
    }
    async function W() {
      if (!(!b.value.trim() || !m.value)) {
        y.value = !0, $.value = null, D.value = null;
        try {
          await g(m.value.hash, b.value.trim()), D.value = "Source added successfully!", b.value = "", await T();
        } catch (z) {
          $.value = z instanceof Error ? z.message : "Failed to add source";
        } finally {
          y.value = !1;
        }
      }
    }
    async function R(z) {
      if (m.value) {
        k.value = z, $.value = null, D.value = null;
        try {
          await v(m.value.hash, z), M("Source removed"), await T();
        } catch (C) {
          $.value = C instanceof Error ? C.message : "Failed to remove source";
        } finally {
          k.value = null;
        }
      }
    }
    async function T() {
      l.value = !0, c.value = null;
      try {
        m.value = await d(n.identifier);
      } catch (z) {
        c.value = z instanceof Error ? z.message : "Failed to load model details";
      } finally {
        l.value = !1;
      }
    }
    return Le(T), (z, C) => {
      var x;
      return s(), o(A, null, [
        f(at, {
          title: `Model Details: ${((x = m.value) == null ? void 0 : x.filename) || "Loading..."}`,
          size: "lg",
          loading: l.value,
          error: c.value,
          onClose: C[5] || (C[5] = (G) => z.$emit("close"))
        }, {
          body: i(() => {
            var G, H, Z, ge;
            return [
              m.value ? (s(), o("div", Vu, [
                e("section", Au, [
                  e("div", Wu, [
                    C[6] || (C[6] = e("span", { class: "detail-label" }, "Hash:", -1)),
                    e("span", Gu, a(m.value.hash || "Not computed"), 1),
                    m.value.hash ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: C[0] || (C[0] = (ae) => L(m.value.hash))
                    }, "Copy")) : r("", !0)
                  ]),
                  e("div", ju, [
                    C[7] || (C[7] = e("span", { class: "detail-label" }, "Blake3:", -1)),
                    e("span", Hu, a(m.value.blake3 || "Not computed"), 1),
                    m.value.blake3 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: C[1] || (C[1] = (ae) => L(m.value.blake3))
                    }, "Copy")) : r("", !0)
                  ]),
                  e("div", qu, [
                    C[8] || (C[8] = e("span", { class: "detail-label" }, "SHA256:", -1)),
                    e("span", Ku, a(m.value.sha256 || "Not computed"), 1),
                    m.value.sha256 ? (s(), o("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: C[2] || (C[2] = (ae) => L(m.value.sha256))
                    }, "Copy")) : r("", !0)
                  ]),
                  e("div", Ju, [
                    C[9] || (C[9] = e("span", { class: "detail-label" }, "Size:", -1)),
                    e("span", Yu, a(V(m.value.size)), 1)
                  ]),
                  e("div", Xu, [
                    C[10] || (C[10] = e("span", { class: "detail-label" }, "Category:", -1)),
                    e("span", Qu, a(m.value.category), 1)
                  ]),
                  e("div", Zu, [
                    C[11] || (C[11] = e("span", { class: "detail-label" }, "Last Seen:", -1)),
                    e("span", em, a(m.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                e("section", tm, [
                  e("h4", sm, "Locations (" + a(((G = m.value.locations) == null ? void 0 : G.length) || 0) + ")", 1),
                  (H = m.value.locations) != null && H.length ? (s(), o("div", om, [
                    (s(!0), o(A, null, te(m.value.locations, (ae, se) => (s(), o("div", {
                      key: se,
                      class: "location-item"
                    }, [
                      e("span", nm, a(ae.path), 1),
                      ae.modified ? (s(), o("span", am, "Modified: " + a(ae.modified), 1)) : r("", !0),
                      ae.path ? (s(), o("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (O) => N(ae.path)
                      }, " Open File Location ", 8, lm)) : r("", !0)
                    ]))), 128))
                  ])) : (s(), o("div", im, "No locations found"))
                ]),
                e("section", rm, [
                  e("h4", dm, "Download Sources (" + a(((Z = m.value.sources) == null ? void 0 : Z.length) || 0) + ")", 1),
                  (ge = m.value.sources) != null && ge.length ? (s(), o("div", cm, [
                    (s(!0), o(A, null, te(m.value.sources, (ae, se) => (s(), o("div", {
                      key: se,
                      class: "source-item"
                    }, [
                      e("span", um, a(ae.type) + ":", 1),
                      e("a", {
                        href: ae.url,
                        target: "_blank",
                        class: "source-url"
                      }, a(ae.url), 9, mm),
                      e("button", {
                        class: "remove-source-btn",
                        disabled: k.value === ae.url,
                        onClick: (O) => R(ae.url)
                      }, a(k.value === ae.url ? "..." : "×"), 9, vm)
                    ]))), 128))
                  ])) : (s(), o("div", fm, " No download sources configured ")),
                  e("div", gm, [
                    Ue(e("input", {
                      "onUpdate:modelValue": C[3] || (C[3] = (ae) => b.value = ae),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [zt, b.value]
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      disabled: !b.value.trim() || y.value,
                      onClick: W
                    }, a(y.value ? "Adding..." : "Add Source"), 9, pm)
                  ]),
                  $.value ? (s(), o("p", hm, a($.value), 1)) : r("", !0),
                  D.value ? (s(), o("p", ym, a(D.value), 1)) : r("", !0)
                ])
              ])) : r("", !0)
            ];
          }),
          footer: i(() => [
            e("button", {
              class: "btn-secondary",
              onClick: C[4] || (C[4] = (G) => z.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (s(), I(Oe, { to: "body" }, [
          S.value ? (s(), o("div", {
            key: 0,
            class: ne(["toast", S.value.type])
          }, a(S.value.message), 3)) : r("", !0)
        ]))
      ], 64);
    };
  }
}), ks = /* @__PURE__ */ X(wm, [["__scopeId", "data-v-f15cbb56"]]), km = /* @__PURE__ */ Y({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: u }) {
    const n = u, { getEnvironmentModels: d, getStatus: g } = De(), v = _([]), p = _([]), m = _("production"), l = _(!1), c = _(null), b = _(""), y = _(!1), k = _(null);
    function $() {
      y.value = !1, n("navigate", "model-index");
    }
    const D = B(
      () => v.value.reduce((T, z) => T + (z.size || 0), 0)
    ), S = B(() => {
      if (!b.value.trim()) return v.value;
      const T = b.value.toLowerCase();
      return v.value.filter((z) => z.filename.toLowerCase().includes(T));
    }), h = B(() => {
      if (!b.value.trim()) return p.value;
      const T = b.value.toLowerCase();
      return p.value.filter((z) => z.filename.toLowerCase().includes(T));
    }), M = B(() => {
      const T = {};
      for (const C of S.value) {
        const x = C.type || "other";
        T[x] || (T[x] = []), T[x].push(C);
      }
      const z = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(T).sort(([C], [x]) => {
        const G = z.indexOf(C), H = z.indexOf(x);
        return G >= 0 && H >= 0 ? G - H : G >= 0 ? -1 : H >= 0 ? 1 : C.localeCompare(x);
      }).map(([C, x]) => ({ type: C, models: x }));
    });
    function V(T) {
      if (!T) return "Unknown";
      const z = T / (1024 * 1024);
      return z >= 1024 ? `${(z / 1024).toFixed(1)} GB` : `${z.toFixed(0)} MB`;
    }
    function L(T) {
      k.value = T.hash || T.filename;
    }
    function N(T) {
      n("navigate", "model-index");
    }
    function W(T) {
      alert(`Download functionality not yet implemented for ${T}`);
    }
    async function R() {
      l.value = !0, c.value = null;
      try {
        const T = await d();
        v.value = T, p.value = [];
        const z = await g();
        m.value = z.environment || "production";
      } catch (T) {
        c.value = T instanceof Error ? T.message : "Failed to load models";
      } finally {
        l.value = !1;
      }
    }
    return Le(R), (T, z) => (s(), o(A, null, [
      f(Ve, null, {
        header: i(() => [
          f(Ae, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: z[0] || (z[0] = (C) => y.value = !0)
          })
        ]),
        search: i(() => [
          f(bt, {
            modelValue: b.value,
            "onUpdate:modelValue": z[1] || (z[1] = (C) => b.value = C),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          l.value ? (s(), I(it, {
            key: 0,
            message: "Loading environment models..."
          })) : c.value ? (s(), I(rt, {
            key: 1,
            message: c.value,
            retry: !0,
            onRetry: R
          }, null, 8, ["message"])) : (s(), o(A, { key: 2 }, [
            v.value.length ? (s(), I(_t, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                w(" Total: " + a(v.value.length) + " models • " + a(V(D.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : r("", !0),
            (s(!0), o(A, null, te(M.value, (C) => (s(), I(Te, {
              key: C.type,
              title: C.type.toUpperCase(),
              count: C.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: i(() => [
                (s(!0), o(A, null, te(C.models, (x) => (s(), I(Pe, {
                  key: x.hash || x.filename,
                  status: "synced"
                }, {
                  icon: i(() => [...z[4] || (z[4] = [
                    w("📦", -1)
                  ])]),
                  title: i(() => [
                    w(a(x.filename), 1)
                  ]),
                  subtitle: i(() => [
                    w(a(V(x.size)), 1)
                  ]),
                  details: i(() => [
                    f(Se, {
                      label: "Used by:",
                      value: (x.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    f(Se, {
                      label: "Path:",
                      value: x.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    f(ee, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (G) => L(x)
                    }, {
                      default: i(() => [...z[5] || (z[5] = [
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
            h.value.length ? (s(), I(Te, {
              key: 1,
              title: "MISSING",
              count: h.value.length
            }, {
              default: i(() => [
                (s(!0), o(A, null, te(h.value, (C) => (s(), I(Pe, {
                  key: C.filename,
                  status: "broken"
                }, {
                  icon: i(() => [...z[6] || (z[6] = [
                    w("⚠", -1)
                  ])]),
                  title: i(() => [
                    w(a(C.filename), 1)
                  ]),
                  subtitle: i(() => [...z[7] || (z[7] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: i(() => {
                    var x;
                    return [
                      f(Se, {
                        label: "Required by:",
                        value: ((x = C.workflow_names) == null ? void 0 : x.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: i(() => [
                    f(ee, {
                      variant: "primary",
                      size: "sm",
                      onClick: (x) => W(C.filename)
                    }, {
                      default: i(() => [...z[8] || (z[8] = [
                        w(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    f(ee, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (x) => N(C.filename)
                    }, {
                      default: i(() => [...z[9] || (z[9] = [
                        w(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            !S.value.length && !h.value.length ? (s(), I(Xe, {
              key: 2,
              icon: "📭",
              message: b.value ? `No models match '${b.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : r("", !0)
          ], 64))
        ]),
        _: 1
      }),
      f(lt, {
        show: y.value,
        title: "About Environment Models",
        onClose: z[2] || (z[2] = (C) => y.value = !1)
      }, {
        content: i(() => [
          e("p", null, [
            z[10] || (z[10] = w(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + a(m.value) + '"', 1),
            z[11] || (z[11] = w(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: i(() => [
          f(ee, {
            variant: "primary",
            onClick: $
          }, {
            default: i(() => [...z[12] || (z[12] = [
              w(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      k.value ? (s(), I(ks, {
        key: 0,
        identifier: k.value,
        onClose: z[3] || (z[3] = (C) => k.value = null)
      }, null, 8, ["identifier"])) : r("", !0)
    ], 64));
  }
}), bm = /* @__PURE__ */ X(km, [["__scopeId", "data-v-cb4f12b3"]]), _m = {
  key: 0,
  class: "indexing-progress"
}, $m = { class: "progress-info" }, Cm = { class: "progress-label" }, xm = { class: "progress-count" }, Sm = { class: "progress-bar" }, Im = { class: "modal-content" }, Em = { class: "modal-header" }, Mm = { class: "modal-body" }, zm = { class: "input-group" }, Tm = { class: "current-path" }, Lm = { class: "input-group" }, Dm = { class: "modal-footer" }, Rm = { class: "modal-content" }, Nm = { class: "modal-header" }, Um = { class: "modal-body" }, Pm = { class: "input-group" }, Om = { class: "input-group" }, Bm = { class: "modal-footer" }, Fm = /* @__PURE__ */ Y({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(t, { emit: u }) {
    const {
      getWorkspaceModels: n,
      scanWorkspaceModels: d,
      getModelsDirectory: g,
      setModelsDirectory: v
    } = De(), { addToQueue: p } = Rt(), m = u, l = _([]), c = _(!1), b = _(!1), y = _(null), k = _(""), $ = _(!1), D = _(null), S = _(!1), h = _(null), M = _(""), V = _(!1), L = _(!1), N = _(""), W = _(""), R = _(null), T = B(
      () => l.value.reduce((O, E) => O + (E.size || 0), 0)
    ), z = B(() => {
      if (!k.value.trim()) return l.value;
      const O = k.value.toLowerCase();
      return l.value.filter((E) => {
        const oe = E, Q = E.sha256 || oe.sha256_hash || "";
        return E.filename.toLowerCase().includes(O) || Q.toLowerCase().includes(O);
      });
    }), C = B(() => {
      const O = {};
      for (const oe of z.value) {
        const Q = oe.type || "other";
        O[Q] || (O[Q] = []), O[Q].push(oe);
      }
      const E = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(O).sort(([oe], [Q]) => {
        const Ee = E.indexOf(oe), le = E.indexOf(Q);
        return Ee >= 0 && le >= 0 ? Ee - le : Ee >= 0 ? -1 : le >= 0 ? 1 : oe.localeCompare(Q);
      }).map(([oe, Q]) => ({ type: oe, models: Q }));
    });
    function x(O) {
      if (!O) return "Unknown";
      const E = 1024 * 1024 * 1024, oe = 1024 * 1024;
      return O >= E ? `${(O / E).toFixed(1)} GB` : O >= oe ? `${(O / oe).toFixed(0)} MB` : `${(O / 1024).toFixed(0)} KB`;
    }
    function G(O) {
      D.value = O.hash || O.filename;
    }
    async function H() {
      b.value = !0, y.value = null;
      try {
        const O = await d();
        await ae(), O.changes > 0 && console.log(`Scan complete: ${O.changes} changes detected`);
      } catch (O) {
        y.value = O instanceof Error ? O.message : "Failed to scan models";
      } finally {
        b.value = !1;
      }
    }
    async function Z() {
      if (M.value.trim()) {
        V.value = !0, y.value = null;
        try {
          const O = await v(M.value.trim());
          h.value = O.path, S.value = !1, M.value = "", await ae(), console.log(`Directory changed: ${O.models_indexed} models indexed`), m("refresh");
        } catch (O) {
          y.value = O instanceof Error ? O.message : "Failed to change directory";
        } finally {
          V.value = !1;
        }
      }
    }
    function ge() {
      if (!N.value.trim() || !W.value.trim()) return;
      const O = W.value.split("/").pop() || "model.safetensors";
      p([{
        workflow: "__manual__",
        filename: O,
        url: N.value.trim(),
        targetPath: W.value.trim()
      }]), N.value = "", W.value = "", L.value = !1;
    }
    async function ae() {
      c.value = !0, y.value = null;
      try {
        l.value = await n();
      } catch (O) {
        y.value = O instanceof Error ? O.message : "Failed to load workspace models";
      } finally {
        c.value = !1;
      }
    }
    async function se() {
      try {
        const O = await g();
        h.value = O.path;
      } catch {
      }
    }
    return Le(() => {
      ae(), se();
    }), (O, E) => (s(), o(A, null, [
      f(Ve, null, {
        header: i(() => [
          f(Ae, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: E[2] || (E[2] = (oe) => $.value = !0)
          }, {
            actions: i(() => [
              f(ee, {
                variant: "primary",
                size: "sm",
                disabled: b.value,
                onClick: H
              }, {
                default: i(() => [
                  w(a(b.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              f(ee, {
                variant: "primary",
                size: "sm",
                onClick: E[0] || (E[0] = (oe) => S.value = !0)
              }, {
                default: i(() => [...E[15] || (E[15] = [
                  w(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              f(ee, {
                variant: "primary",
                size: "sm",
                onClick: E[1] || (E[1] = (oe) => L.value = !0)
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
          R.value ? (s(), o("div", _m, [
            e("div", $m, [
              e("span", Cm, a(R.value.message), 1),
              e("span", xm, a(R.value.current) + "/" + a(R.value.total), 1)
            ]),
            e("div", Sm, [
              e("div", {
                class: "progress-fill",
                style: nt({ width: `${R.value.current / R.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : r("", !0),
          f(bt, {
            modelValue: k.value,
            "onUpdate:modelValue": E[3] || (E[3] = (oe) => k.value = oe),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          c.value || R.value ? (s(), I(it, {
            key: 0,
            message: R.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : y.value ? (s(), I(rt, {
            key: 1,
            message: y.value,
            retry: !0,
            onRetry: ae
          }, null, 8, ["message"])) : (s(), o(A, { key: 2 }, [
            l.value.length ? (s(), I(_t, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                w(" Total: " + a(l.value.length) + " models • " + a(x(T.value)), 1)
              ]),
              _: 1
            })) : r("", !0),
            (s(!0), o(A, null, te(C.value, (oe) => (s(), I(Te, {
              key: oe.type,
              title: oe.type.toUpperCase(),
              count: oe.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: i(() => [
                (s(!0), o(A, null, te(oe.models, (Q) => (s(), I(Pe, {
                  key: Q.sha256 || Q.filename,
                  status: "synced"
                }, {
                  icon: i(() => [...E[17] || (E[17] = [
                    w("📦", -1)
                  ])]),
                  title: i(() => [
                    w(a(Q.filename), 1)
                  ]),
                  subtitle: i(() => [
                    w(a(x(Q.size)), 1)
                  ]),
                  details: i(() => [
                    f(Se, {
                      label: "Hash:",
                      value: Q.hash ? Q.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    f(ee, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ee) => G(Q)
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
            z.value.length ? r("", !0) : (s(), I(Xe, {
              key: 1,
              icon: "📭",
              message: k.value ? `No models match '${k.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      f(lt, {
        show: $.value,
        title: "About Workspace Model Index",
        onClose: E[4] || (E[4] = (oe) => $.value = !1)
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
      D.value ? (s(), I(ks, {
        key: 0,
        identifier: D.value,
        onClose: E[5] || (E[5] = (oe) => D.value = null)
      }, null, 8, ["identifier"])) : r("", !0),
      (s(), I(Oe, { to: "body" }, [
        S.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: E[9] || (E[9] = ze((oe) => S.value = !1, ["self"]))
        }, [
          e("div", Im, [
            e("div", Em, [
              E[20] || (E[20] = e("h3", null, "Change Models Directory", -1)),
              e("button", {
                class: "modal-close",
                onClick: E[6] || (E[6] = (oe) => S.value = !1)
              }, "✕")
            ]),
            e("div", Mm, [
              e("div", zm, [
                E[21] || (E[21] = e("label", null, "Current Directory", -1)),
                e("code", Tm, a(h.value || "Not set"), 1)
              ]),
              e("div", Lm, [
                E[22] || (E[22] = e("label", null, "New Directory Path", -1)),
                f(Ye, {
                  modelValue: M.value,
                  "onUpdate:modelValue": E[7] || (E[7] = (oe) => M.value = oe),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              E[23] || (E[23] = e("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            e("div", Dm, [
              f(de, {
                variant: "secondary",
                onClick: E[8] || (E[8] = (oe) => S.value = !1)
              }, {
                default: i(() => [...E[24] || (E[24] = [
                  w(" Cancel ", -1)
                ])]),
                _: 1
              }),
              f(de, {
                variant: "primary",
                disabled: !M.value.trim() || V.value,
                loading: V.value,
                onClick: Z
              }, {
                default: i(() => [
                  w(a(V.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : r("", !0)
      ])),
      (s(), I(Oe, { to: "body" }, [
        L.value ? (s(), o("div", {
          key: 0,
          class: "modal-overlay",
          onClick: E[14] || (E[14] = ze((oe) => L.value = !1, ["self"]))
        }, [
          e("div", Rm, [
            e("div", Nm, [
              E[25] || (E[25] = e("h3", null, "Download New Model", -1)),
              e("button", {
                class: "modal-close",
                onClick: E[10] || (E[10] = (oe) => L.value = !1)
              }, "✕")
            ]),
            e("div", Um, [
              e("div", Pm, [
                E[26] || (E[26] = e("label", null, "Download URL", -1)),
                f(Ye, {
                  modelValue: N.value,
                  "onUpdate:modelValue": E[11] || (E[11] = (oe) => N.value = oe),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              e("div", Om, [
                E[27] || (E[27] = e("label", null, "Target Path (relative to models directory)", -1)),
                f(Ye, {
                  modelValue: W.value,
                  "onUpdate:modelValue": E[12] || (E[12] = (oe) => W.value = oe),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              E[28] || (E[28] = e("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            e("div", Bm, [
              f(de, {
                variant: "secondary",
                onClick: E[13] || (E[13] = (oe) => L.value = !1)
              }, {
                default: i(() => [...E[29] || (E[29] = [
                  w(" Cancel ", -1)
                ])]),
                _: 1
              }),
              f(de, {
                variant: "primary",
                disabled: !N.value.trim() || !W.value.trim(),
                onClick: ge
              }, {
                default: i(() => [...E[30] || (E[30] = [
                  w(" Queue Download ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"])
            ])
          ])
        ])) : r("", !0)
      ]))
    ], 64));
  }
}), Vm = /* @__PURE__ */ X(Fm, [["__scopeId", "data-v-73b78d84"]]), Am = { class: "node-details" }, Wm = { class: "status-row" }, Gm = {
  key: 0,
  class: "detail-row"
}, jm = { class: "value" }, Hm = { class: "detail-row" }, qm = { class: "value" }, Km = {
  key: 1,
  class: "detail-row"
}, Jm = { class: "value mono" }, Ym = {
  key: 2,
  class: "detail-row"
}, Xm = ["href"], Qm = {
  key: 3,
  class: "detail-row"
}, Zm = { class: "value mono small" }, ev = { class: "detail-row" }, tv = {
  key: 0,
  class: "value"
}, sv = {
  key: 1,
  class: "workflow-list"
}, ov = /* @__PURE__ */ Y({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(t, { emit: u }) {
    const n = t, d = u, g = B(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), v = B(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), p = B(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[n.node.source] || n.node.source);
    return (m, l) => (s(), I(at, {
      title: `NODE DETAILS: ${t.node.name}`,
      size: "md",
      onClose: l[1] || (l[1] = (c) => d("close"))
    }, {
      body: i(() => [
        e("div", Am, [
          e("div", Wm, [
            l[2] || (l[2] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: ne(["status-badge", g.value])
            }, a(v.value), 3)
          ]),
          t.node.version ? (s(), o("div", Gm, [
            l[3] || (l[3] = e("span", { class: "label" }, "Version:", -1)),
            e("span", jm, a(t.node.source === "development" ? "" : "v") + a(t.node.version), 1)
          ])) : r("", !0),
          e("div", Hm, [
            l[4] || (l[4] = e("span", { class: "label" }, "Source:", -1)),
            e("span", qm, a(p.value), 1)
          ]),
          t.node.registry_id ? (s(), o("div", Km, [
            l[5] || (l[5] = e("span", { class: "label" }, "Registry ID:", -1)),
            e("span", Jm, a(t.node.registry_id), 1)
          ])) : r("", !0),
          t.node.repository ? (s(), o("div", Ym, [
            l[7] || (l[7] = e("span", { class: "label" }, "Repository:", -1)),
            e("a", {
              href: t.node.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "repo-link"
            }, [
              w(a(t.node.repository) + " ", 1),
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
            ], 8, Xm)
          ])) : r("", !0),
          t.node.download_url ? (s(), o("div", Qm, [
            l[8] || (l[8] = e("span", { class: "label" }, "Download URL:", -1)),
            e("span", Zm, a(t.node.download_url), 1)
          ])) : r("", !0),
          l[10] || (l[10] = e("div", { class: "section-divider" }, null, -1)),
          e("div", ev, [
            l[9] || (l[9] = e("span", { class: "label" }, "Used by:", -1)),
            !t.node.used_in_workflows || t.node.used_in_workflows.length === 0 ? (s(), o("span", tv, " Not used in any workflows ")) : (s(), o("div", sv, [
              (s(!0), o(A, null, te(t.node.used_in_workflows, (c) => (s(), o("span", {
                key: c,
                class: "workflow-tag"
              }, a(c), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: i(() => [
        f(de, {
          variant: "secondary",
          onClick: l[0] || (l[0] = (c) => d("close"))
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
}), nv = /* @__PURE__ */ X(ov, [["__scopeId", "data-v-b342f626"]]), av = { key: 0 }, lv = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, iv = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, rv = /* @__PURE__ */ Y({
  __name: "NodesSection",
  emits: ["open-node-manager"],
  setup(t, { emit: u }) {
    const n = u, { getNodes: d, trackNodeAsDev: g, installNode: v, uninstallNode: p } = De(), m = _({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), l = _(!1), c = _(null), b = _(""), y = _(!1), k = _(null), $ = B(() => {
      if (!b.value.trim()) return m.value.nodes;
      const C = b.value.toLowerCase();
      return m.value.nodes.filter(
        (x) => {
          var G, H;
          return x.name.toLowerCase().includes(C) || ((G = x.description) == null ? void 0 : G.toLowerCase().includes(C)) || ((H = x.repository) == null ? void 0 : H.toLowerCase().includes(C));
        }
      );
    }), D = B(
      () => $.value.filter((C) => C.installed && C.tracked)
    ), S = B(
      () => $.value.filter((C) => !C.installed && C.tracked)
    ), h = B(
      () => $.value.filter((C) => C.installed && !C.tracked)
    );
    function M(C) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[C] || C;
    }
    function V(C) {
      return !C.used_in_workflows || C.used_in_workflows.length === 0 ? "Not used in any workflows" : C.used_in_workflows.length === 1 ? C.used_in_workflows[0] : `${C.used_in_workflows.length} workflows`;
    }
    function L(C) {
      k.value = C;
    }
    function N() {
      n("open-node-manager");
    }
    async function W(C) {
      if (confirm(`Track "${C}" as a development node?

This will add it to your environment manifest with source='development'. It won't be version-controlled but will be recognized as intentional.`))
        try {
          l.value = !0;
          const x = await g(C);
          x.status === "success" ? (alert(`Node "${C}" is now tracked as development!`), await z()) : alert(`Failed to track node: ${x.message || "Unknown error"}`);
        } catch (x) {
          alert(`Error tracking node: ${x instanceof Error ? x.message : "Unknown error"}`);
        } finally {
          l.value = !1;
        }
    }
    async function R(C) {
      if (confirm(`Remove untracked node "${C}"?

This will delete the node directory from custom_nodes/.`))
        try {
          l.value = !0;
          const x = await p(C);
          x.status === "success" ? (alert(`Node "${C}" removed!`), await z()) : alert(`Failed to remove node: ${x.message || "Unknown error"}`);
        } catch (x) {
          alert(`Error removing node: ${x instanceof Error ? x.message : "Unknown error"}`);
        } finally {
          l.value = !1;
        }
    }
    async function T(C) {
      if (confirm(`Install node "${C}"?

This will download and install the node.`))
        try {
          l.value = !0;
          const x = await v(C);
          x.status === "success" ? (alert(`Node "${C}" installed successfully!`), await z()) : alert(`Failed to install node: ${x.message || "Unknown error"}`);
        } catch (x) {
          alert(`Error installing node: ${x instanceof Error ? x.message : "Unknown error"}`);
        } finally {
          l.value = !1;
        }
    }
    async function z() {
      l.value = !0, c.value = null;
      try {
        m.value = await d();
      } catch (C) {
        c.value = C instanceof Error ? C.message : "Failed to load nodes";
      } finally {
        l.value = !1;
      }
    }
    return Le(z), (C, x) => (s(), o(A, null, [
      f(Ve, null, {
        header: i(() => [
          f(Ae, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: x[0] || (x[0] = (G) => y.value = !0)
          }, {
            actions: i(() => [
              f(ee, {
                variant: "primary",
                size: "sm",
                onClick: N
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
          f(bt, {
            modelValue: b.value,
            "onUpdate:modelValue": x[1] || (x[1] = (G) => b.value = G),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          l.value ? (s(), I(it, {
            key: 0,
            message: "Loading nodes..."
          })) : c.value ? (s(), I(rt, {
            key: 1,
            message: c.value,
            retry: !0,
            onRetry: z
          }, null, 8, ["message"])) : (s(), o(A, { key: 2 }, [
            m.value.total_count ? (s(), I(_t, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                w(a(m.value.installed_count) + " installed ", 1),
                m.value.missing_count ? (s(), o(A, { key: 0 }, [
                  w(" • " + a(m.value.missing_count) + " missing", 1)
                ], 64)) : r("", !0),
                m.value.untracked_count ? (s(), o(A, { key: 1 }, [
                  w(" • " + a(m.value.untracked_count) + " untracked", 1)
                ], 64)) : r("", !0)
              ]),
              _: 1
            })) : r("", !0),
            h.value.length ? (s(), I(Te, {
              key: 1,
              title: "UNTRACKED",
              count: h.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (s(!0), o(A, null, te(h.value, (G) => (s(), I(Pe, {
                  key: G.name,
                  status: "warning"
                }, {
                  icon: i(() => [...x[6] || (x[6] = [
                    w("?", -1)
                  ])]),
                  title: i(() => [
                    w(a(G.name), 1)
                  ]),
                  subtitle: i(() => [...x[7] || (x[7] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: i(() => [
                    f(Se, {
                      label: "Used by:",
                      value: V(G)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    f(ee, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (H) => L(G)
                    }, {
                      default: i(() => [...x[8] || (x[8] = [
                        w(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    f(ee, {
                      variant: "primary",
                      size: "sm",
                      onClick: (H) => W(G.name)
                    }, {
                      default: i(() => [...x[9] || (x[9] = [
                        w(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    f(ee, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (H) => R(G.name)
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
            }, 8, ["count"])) : r("", !0),
            D.value.length ? (s(), I(Te, {
              key: 2,
              title: "INSTALLED",
              count: D.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (s(!0), o(A, null, te(D.value, (G) => (s(), I(Pe, {
                  key: G.name,
                  status: "synced"
                }, {
                  icon: i(() => [
                    w(a(G.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: i(() => [
                    w(a(G.name), 1)
                  ]),
                  subtitle: i(() => [
                    G.version ? (s(), o("span", av, a(G.source === "development" ? "" : "v") + a(G.version), 1)) : (s(), o("span", lv, "version unknown")),
                    e("span", iv, " • " + a(M(G.source)), 1)
                  ]),
                  details: i(() => [
                    f(Se, {
                      label: "Used by:",
                      value: V(G)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    f(ee, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (H) => L(G)
                    }, {
                      default: i(() => [...x[11] || (x[11] = [
                        w(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    f(ee, {
                      variant: "secondary",
                      size: "xs",
                      onClick: N
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
            }, 8, ["count"])) : r("", !0),
            S.value.length ? (s(), I(Te, {
              key: 3,
              title: "MISSING",
              count: S.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: i(() => [
                (s(!0), o(A, null, te(S.value, (G) => (s(), I(Pe, {
                  key: G.name,
                  status: "missing"
                }, {
                  icon: i(() => [...x[13] || (x[13] = [
                    w("!", -1)
                  ])]),
                  title: i(() => [
                    w(a(G.name), 1)
                  ]),
                  subtitle: i(() => [...x[14] || (x[14] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: i(() => [
                    f(Se, {
                      label: "Required by:",
                      value: V(G)
                    }, null, 8, ["value"])
                  ]),
                  actions: i(() => [
                    f(ee, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (H) => L(G)
                    }, {
                      default: i(() => [...x[15] || (x[15] = [
                        w(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    f(ee, {
                      variant: "primary",
                      size: "sm",
                      onClick: (H) => T(G.name)
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
            }, 8, ["count"])) : r("", !0),
            !D.value.length && !S.value.length && !h.value.length ? (s(), I(Xe, {
              key: 4,
              icon: "📭",
              message: b.value ? `No nodes match '${b.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : r("", !0)
          ], 64))
        ]),
        _: 1
      }),
      f(lt, {
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
          f(ee, {
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
      k.value ? (s(), I(nv, {
        key: 0,
        node: k.value,
        onClose: x[4] || (x[4] = (G) => k.value = null)
      }, null, 8, ["node"])) : r("", !0)
    ], 64));
  }
}), dv = /* @__PURE__ */ X(rv, [["__scopeId", "data-v-4ac1465a"]]), cv = { class: "remote-url-display" }, uv = ["title"], mv = ["title"], vv = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, fv = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, gv = /* @__PURE__ */ Y({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const u = t, n = _(!1), d = B(() => {
      if (u.url.length <= u.maxLength)
        return u.url;
      const v = u.url.slice(0, Math.floor(u.maxLength * 0.6)), p = u.url.slice(-Math.floor(u.maxLength * 0.3));
      return `${v}...${p}`;
    });
    async function g() {
      try {
        await navigator.clipboard.writeText(u.url), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (v) {
        console.error("Failed to copy URL:", v);
      }
    }
    return (v, p) => (s(), o("div", cv, [
      e("span", {
        class: "url-text",
        title: t.url
      }, a(d.value), 9, uv),
      e("button", {
        class: ne(["copy-btn", { copied: n.value }]),
        onClick: g,
        title: n.value ? "Copied!" : "Copy URL"
      }, [
        n.value ? (s(), o("svg", fv, [...p[1] || (p[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (s(), o("svg", vv, [...p[0] || (p[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, mv)
    ]));
  }
}), ds = /* @__PURE__ */ X(gv, [["__scopeId", "data-v-7768a58d"]]), pv = { class: "remote-title" }, hv = {
  key: 0,
  class: "default-badge"
}, yv = {
  key: 1,
  class: "sync-badge"
}, wv = {
  key: 0,
  class: "ahead"
}, kv = {
  key: 1,
  class: "behind"
}, bv = {
  key: 0,
  class: "tracking-info"
}, _v = /* @__PURE__ */ Y({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    trackingBranch: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove"],
  setup(t, { emit: u }) {
    const n = t, d = B(() => n.fetchingRemote === n.remote.name), g = B(() => n.remote.is_default), v = B(() => !!n.trackingBranch);
    function p(m) {
      const l = new Date(m), b = (/* @__PURE__ */ new Date()).getTime() - l.getTime(), y = Math.floor(b / 6e4);
      if (y < 1) return "Just now";
      if (y < 60) return `${y}m ago`;
      const k = Math.floor(y / 60);
      if (k < 24) return `${k}h ago`;
      const $ = Math.floor(k / 24);
      return $ < 7 ? `${$}d ago` : l.toLocaleDateString();
    }
    return (m, l) => (s(), I(Pe, {
      status: g.value ? "synced" : void 0
    }, {
      icon: i(() => [
        w(a(g.value ? "🔗" : "🌐"), 1)
      ]),
      title: i(() => [
        e("div", pv, [
          e("span", null, a(t.remote.name), 1),
          g.value ? (s(), o("span", hv, "DEFAULT")) : r("", !0),
          t.syncStatus ? (s(), o("span", yv, [
            t.syncStatus.ahead > 0 ? (s(), o("span", wv, "↑" + a(t.syncStatus.ahead), 1)) : r("", !0),
            t.syncStatus.behind > 0 ? (s(), o("span", kv, "↓" + a(t.syncStatus.behind), 1)) : r("", !0)
          ])) : r("", !0)
        ])
      ]),
      subtitle: i(() => [
        v.value ? (s(), o("span", bv, " Tracking: " + a(t.trackingBranch), 1)) : r("", !0)
      ]),
      details: i(() => {
        var c;
        return [
          f(Se, { label: "Fetch:" }, {
            default: i(() => [
              f(ds, {
                url: t.remote.fetch_url
              }, null, 8, ["url"])
            ]),
            _: 1
          }),
          t.remote.push_url !== t.remote.fetch_url ? (s(), I(Se, {
            key: 0,
            label: "Push:"
          }, {
            default: i(() => [
              f(ds, {
                url: t.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : r("", !0),
          (c = t.syncStatus) != null && c.last_fetch ? (s(), I(Se, {
            key: 1,
            label: "Last Fetch:"
          }, {
            default: i(() => [
              e("span", null, a(p(t.syncStatus.last_fetch)), 1)
            ]),
            _: 1
          })) : r("", !0)
        ];
      }),
      actions: i(() => [
        f(ee, {
          variant: "primary",
          size: "xs",
          loading: d.value,
          onClick: l[0] || (l[0] = (c) => m.$emit("fetch", t.remote.name))
        }, {
          default: i(() => [...l[3] || (l[3] = [
            w(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        f(ee, {
          variant: "secondary",
          size: "xs",
          onClick: l[1] || (l[1] = (c) => m.$emit("edit", t.remote.name))
        }, {
          default: i(() => [...l[4] || (l[4] = [
            w(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        g.value ? r("", !0) : (s(), I(ee, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: l[2] || (l[2] = (c) => m.$emit("remove", t.remote.name))
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
}), $v = /* @__PURE__ */ X(_v, [["__scopeId", "data-v-17362e45"]]), Cv = ["for"], xv = {
  key: 0,
  class: "base-form-field-required"
}, Sv = { class: "base-form-field-input" }, Iv = {
  key: 1,
  class: "base-form-field-error"
}, Ev = {
  key: 2,
  class: "base-form-field-hint"
}, Mv = /* @__PURE__ */ Y({
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
    return (d, g) => (s(), o("div", {
      class: ne(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (s(), o("label", {
        key: 0,
        for: n.value,
        class: "base-form-field-label"
      }, [
        w(a(t.label) + " ", 1),
        t.required ? (s(), o("span", xv, "*")) : r("", !0)
      ], 8, Cv)) : r("", !0),
      e("div", Sv, [
        we(d.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (s(), o("span", Iv, a(t.error), 1)) : t.hint ? (s(), o("span", Ev, a(t.hint), 1)) : r("", !0)
    ], 2));
  }
}), jt = /* @__PURE__ */ X(Mv, [["__scopeId", "data-v-9a1cf296"]]), zv = { class: "remote-form" }, Tv = { class: "form-header" }, Lv = { class: "form-body" }, Dv = {
  key: 0,
  class: "form-error"
}, Rv = { class: "form-actions" }, Nv = /* @__PURE__ */ Y({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: u }) {
    const n = t, d = u, g = _({
      name: n.remoteName,
      fetchUrl: n.fetchUrl,
      pushUrl: n.pushUrl
    }), v = _(!1), p = _(null);
    Vt(() => [n.remoteName, n.fetchUrl, n.pushUrl], () => {
      g.value = {
        name: n.remoteName,
        fetchUrl: n.fetchUrl,
        pushUrl: n.pushUrl
      };
    });
    const m = B(() => g.value.name.trim() !== "" && g.value.fetchUrl.trim() !== "");
    async function l() {
      if (!(!m.value || v.value)) {
        p.value = null, v.value = !0;
        try {
          d("submit", g.value);
        } catch (c) {
          p.value = c instanceof Error ? c.message : "Failed to submit form";
        } finally {
          v.value = !1;
        }
      }
    }
    return (c, b) => (s(), o("div", zv, [
      e("div", Tv, [
        f(je, null, {
          default: i(() => [
            w(a(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", Lv, [
        f(jt, {
          label: "Remote Name",
          required: ""
        }, {
          default: i(() => [
            f(Ye, {
              modelValue: g.value.name,
              "onUpdate:modelValue": b[0] || (b[0] = (y) => g.value.name = y),
              disabled: t.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        f(jt, {
          label: "Fetch URL",
          required: ""
        }, {
          default: i(() => [
            f(Ye, {
              modelValue: g.value.fetchUrl,
              "onUpdate:modelValue": b[1] || (b[1] = (y) => g.value.fetchUrl = y),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        f(jt, { label: "Push URL (optional)" }, {
          default: i(() => [
            f(Ye, {
              modelValue: g.value.pushUrl,
              "onUpdate:modelValue": b[2] || (b[2] = (y) => g.value.pushUrl = y),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        p.value ? (s(), o("div", Dv, a(p.value), 1)) : r("", !0)
      ]),
      e("div", Rv, [
        f(ee, {
          variant: "primary",
          size: "md",
          disabled: !m.value,
          loading: v.value,
          onClick: l
        }, {
          default: i(() => [
            w(a(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        f(ee, {
          variant: "ghost",
          size: "md",
          onClick: b[3] || (b[3] = (y) => c.$emit("cancel"))
        }, {
          default: i(() => [...b[4] || (b[4] = [
            w(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Uv = /* @__PURE__ */ X(Nv, [["__scopeId", "data-v-56021b18"]]), Pv = { key: 0 }, Ov = /* @__PURE__ */ Y({
  __name: "RemotesSection",
  setup(t) {
    const {
      getRemotes: u,
      addRemote: n,
      removeRemote: d,
      updateRemoteUrl: g,
      fetchRemote: v,
      getRemoteSyncStatus: p
    } = De(), m = _([]), l = _(null), c = _({}), b = _(!1), y = _(null), k = _(""), $ = _(!1), D = _(null), S = _(!1), h = _("add"), M = _({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), V = B(() => {
      if (!k.value.trim()) return m.value;
      const H = k.value.toLowerCase();
      return m.value.filter(
        (Z) => Z.name.toLowerCase().includes(H) || Z.fetch_url.toLowerCase().includes(H) || Z.push_url.toLowerCase().includes(H)
      );
    });
    function L(H) {
      var Z;
      return ((Z = l.value) == null ? void 0 : Z.remote) === H;
    }
    async function N() {
      b.value = !0, y.value = null;
      try {
        const H = await u();
        m.value = H.remotes, l.value = H.current_branch_tracking || null, await Promise.all(
          H.remotes.map(async (Z) => {
            const ge = await p(Z.name);
            ge && (c.value[Z.name] = ge);
          })
        );
      } catch (H) {
        y.value = H instanceof Error ? H.message : "Failed to load remotes";
      } finally {
        b.value = !1;
      }
    }
    function W() {
      h.value = "add", M.value = { name: "", fetchUrl: "", pushUrl: "" }, S.value = !0;
    }
    function R(H) {
      const Z = m.value.find((ge) => ge.name === H);
      Z && (h.value = "edit", M.value = {
        name: Z.name,
        fetchUrl: Z.fetch_url,
        pushUrl: Z.push_url
      }, S.value = !0);
    }
    async function T(H) {
      try {
        h.value === "add" ? await n(H.name, H.fetchUrl) : await g(H.name, H.fetchUrl, H.pushUrl || void 0), S.value = !1, await N();
      } catch (Z) {
        y.value = Z instanceof Error ? Z.message : "Operation failed";
      }
    }
    function z() {
      S.value = !1, M.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function C(H) {
      D.value = H;
      try {
        await v(H);
        const Z = await p(H);
        Z && (c.value[H] = Z);
      } catch (Z) {
        y.value = Z instanceof Error ? Z.message : "Fetch failed";
      } finally {
        D.value = null;
      }
    }
    async function x(H) {
      if (confirm(`Remove remote "${H}"?`))
        try {
          await d(H), await N();
        } catch (Z) {
          y.value = Z instanceof Error ? Z.message : "Failed to remove remote";
        }
    }
    function G() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    return Le(N), (H, Z) => (s(), o(A, null, [
      f(Ve, null, {
        header: i(() => [
          f(Ae, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: Z[0] || (Z[0] = (ge) => $.value = !0)
          }, {
            actions: i(() => [
              S.value ? r("", !0) : (s(), I(ee, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: W
              }, {
                default: i(() => [...Z[3] || (Z[3] = [
                  w(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          S.value ? r("", !0) : (s(), I(bt, {
            key: 0,
            modelValue: k.value,
            "onUpdate:modelValue": Z[1] || (Z[1] = (ge) => k.value = ge),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: i(() => [
          b.value ? (s(), I(it, {
            key: 0,
            message: "Loading remotes..."
          })) : y.value ? (s(), I(rt, {
            key: 1,
            message: y.value,
            retry: !0,
            onRetry: N
          }, null, 8, ["message"])) : (s(), o(A, { key: 2 }, [
            S.value ? (s(), I(Uv, {
              key: 0,
              mode: h.value,
              "remote-name": M.value.name,
              "fetch-url": M.value.fetchUrl,
              "push-url": M.value.pushUrl,
              onSubmit: T,
              onCancel: z
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : r("", !0),
            m.value.length && !S.value ? (s(), I(_t, {
              key: 1,
              variant: "compact"
            }, {
              default: i(() => [
                w(" Total: " + a(m.value.length) + " remote" + a(m.value.length !== 1 ? "s" : "") + " ", 1),
                l.value ? (s(), o("span", Pv, " • Tracking: " + a(l.value.remote) + "/" + a(l.value.branch), 1)) : r("", !0)
              ]),
              _: 1
            })) : r("", !0),
            V.value.length && !S.value ? (s(), I(Te, {
              key: 2,
              title: "REMOTES",
              count: V.value.length
            }, {
              default: i(() => [
                (s(!0), o(A, null, te(V.value, (ge) => {
                  var ae;
                  return s(), I($v, {
                    key: ge.name,
                    remote: ge,
                    "sync-status": c.value[ge.name],
                    "tracking-branch": L(ge.name) ? (ae = l.value) == null ? void 0 : ae.branch : void 0,
                    "fetching-remote": D.value,
                    onFetch: C,
                    onEdit: R,
                    onRemove: x
                  }, null, 8, ["remote", "sync-status", "tracking-branch", "fetching-remote"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            !V.value.length && !S.value ? (s(), I(Xe, {
              key: 3,
              icon: "🌐",
              message: k.value ? `No remotes match '${k.value}'` : "No remotes configured."
            }, {
              actions: i(() => [
                f(ee, {
                  variant: "primary",
                  onClick: W
                }, {
                  default: i(() => [...Z[4] || (Z[4] = [
                    w(" Add Your First Remote ", -1)
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
      f(lt, {
        show: $.value,
        title: "About Git Remotes",
        onClose: Z[2] || (Z[2] = (ge) => $.value = !1)
      }, {
        content: i(() => [...Z[5] || (Z[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            w(" The "),
            e("strong", null, '"origin"'),
            w(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: i(() => [
          f(ee, {
            variant: "link",
            onClick: G
          }, {
            default: i(() => [...Z[6] || (Z[6] = [
              w(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Bv = /* @__PURE__ */ X(Ov, [["__scopeId", "data-v-a75719bb"]]), Fv = { class: "setting-info" }, Vv = { class: "setting-label" }, Av = {
  key: 0,
  class: "required-marker"
}, Wv = {
  key: 0,
  class: "setting-description"
}, Gv = { class: "setting-control" }, jv = /* @__PURE__ */ Y({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (u, n) => (s(), o("div", {
      class: ne(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", Fv, [
        e("div", Vv, [
          w(a(t.label) + " ", 1),
          t.required ? (s(), o("span", Av, "*")) : r("", !0)
        ]),
        t.description ? (s(), o("div", Wv, a(t.description), 1)) : r("", !0)
      ]),
      e("div", Gv, [
        we(u.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), ot = /* @__PURE__ */ X(jv, [["__scopeId", "data-v-cb5d236c"]]), Hv = { class: "toggle" }, qv = ["checked", "disabled"], Kv = /* @__PURE__ */ Y({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (u, n) => (s(), o("label", Hv, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: n[0] || (n[0] = (d) => u.$emit("update:modelValue", d.target.checked)),
        class: "toggle-input"
      }, null, 40, qv),
      n[1] || (n[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), gt = /* @__PURE__ */ X(Kv, [["__scopeId", "data-v-71c0f550"]]), Jv = { class: "settings-section" }, Yv = { class: "path-setting" }, Xv = { class: "path-value" }, Qv = { class: "path-setting" }, Zv = { class: "path-value" }, ef = { class: "settings-section" }, tf = { class: "settings-section" }, sf = { class: "settings-section" }, of = /* @__PURE__ */ Y({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const { getConfig: u, updateConfig: n } = De(), d = _(!1), g = _(null), v = _(null), p = _(null), m = _(null), l = _(""), c = _(""), b = _(!0), y = _(!0), k = _(!1), $ = B(() => m.value ? l.value !== (m.value.civitai_api_key || "") : !1);
    async function D() {
      d.value = !0, g.value = null;
      try {
        p.value = await u(), m.value = { ...p.value }, l.value = p.value.civitai_api_key || "", c.value = p.value.huggingface_token || "", b.value = p.value.auto_sync_models, y.value = p.value.confirm_destructive;
        const V = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        k.value = V === "true";
      } catch (V) {
        g.value = V instanceof Error ? V.message : "Failed to load settings";
      } finally {
        d.value = !1;
      }
    }
    async function S() {
      var V;
      v.value = null;
      try {
        const L = {};
        l.value !== (((V = m.value) == null ? void 0 : V.civitai_api_key) || "") && (L.civitai_api_key = l.value || null), await n(L), await D(), v.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
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
      m.value && (l.value = m.value.civitai_api_key || "", c.value = m.value.huggingface_token || "", b.value = m.value.auto_sync_models, y.value = m.value.confirm_destructive, v.value = null);
    }
    function M(V) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(V)), console.log("[ComfyGit] Auto-refresh setting saved:", V);
    }
    return Le(D), (V, L) => (s(), I(Ve, null, {
      header: i(() => [
        f(Ae, { title: "WORKSPACE SETTINGS" }, {
          actions: i(() => [
            f(ee, {
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
            $.value ? (s(), I(ee, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: h
            }, {
              default: i(() => [...L[6] || (L[6] = [
                w(" Reset ", -1)
              ])]),
              _: 1
            })) : r("", !0)
          ]),
          _: 1
        })
      ]),
      content: i(() => [
        d.value ? (s(), I(it, {
          key: 0,
          message: "Loading workspace settings..."
        })) : g.value ? (s(), I(rt, {
          key: 1,
          message: g.value,
          retry: !0,
          onRetry: D
        }, null, 8, ["message"])) : (s(), o(A, { key: 2 }, [
          f(Te, { title: "WORKSPACE PATHS" }, {
            default: i(() => {
              var N, W;
              return [
                e("div", Jv, [
                  e("div", Yv, [
                    L[7] || (L[7] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                    L[8] || (L[8] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                    e("div", Xv, a(((N = p.value) == null ? void 0 : N.workspace_path) || "Loading..."), 1)
                  ]),
                  e("div", Qv, [
                    L[9] || (L[9] = e("div", { class: "path-label" }, "Models Directory", -1)),
                    L[10] || (L[10] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                    e("div", Zv, a(((W = p.value) == null ? void 0 : W.models_path) || "Not configured"), 1)
                  ])
                ])
              ];
            }),
            _: 1
          }),
          f(Te, { title: "API CREDENTIALS" }, {
            default: i(() => [
              e("div", ef, [
                f(ot, {
                  label: "CivitAI API Key",
                  description: "API key for downloading models from CivitAI"
                }, {
                  default: i(() => [
                    f(Bt, {
                      modelValue: l.value,
                      "onUpdate:modelValue": L[0] || (L[0] = (N) => l.value = N),
                      type: "password",
                      placeholder: "Enter CivitAI API key...",
                      style: { minWidth: "300px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                f(ot, {
                  label: "HuggingFace Token",
                  description: "Token for accessing HuggingFace models (not yet supported)",
                  disabled: !0
                }, {
                  default: i(() => [
                    f(Bt, {
                      modelValue: c.value,
                      "onUpdate:modelValue": L[1] || (L[1] = (N) => c.value = N),
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
          f(Te, { title: "UI SETTINGS" }, {
            default: i(() => [
              e("div", tf, [
                f(ot, {
                  label: "Auto-Refresh After Git Operations",
                  description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
                }, {
                  default: i(() => [
                    f(gt, {
                      modelValue: k.value,
                      "onUpdate:modelValue": [
                        L[2] || (L[2] = (N) => k.value = N),
                        M
                      ]
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          f(Te, { title: "ADDITIONAL SETTINGS (Coming Soon)" }, {
            default: i(() => [
              e("div", sf, [
                f(ot, {
                  label: "Auto-Sync Models",
                  description: "Automatically sync models when switching environments (not yet supported)",
                  disabled: !0
                }, {
                  default: i(() => [
                    f(gt, {
                      modelValue: b.value,
                      "onUpdate:modelValue": L[3] || (L[3] = (N) => b.value = N),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                f(ot, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations (not yet supported)",
                  disabled: !0
                }, {
                  default: i(() => [
                    f(gt, {
                      modelValue: y.value,
                      "onUpdate:modelValue": L[4] || (L[4] = (N) => y.value = N),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          v.value ? (s(), I(_t, {
            key: 0,
            variant: (v.value.type === "success", "compact")
          }, {
            default: i(() => [
              e("span", {
                style: nt({ color: v.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, a(v.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : r("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), nf = /* @__PURE__ */ X(of, [["__scopeId", "data-v-7861bd35"]]), af = /* @__PURE__ */ Y({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: u } = De(), n = _([]), d = _(!1), g = _(null), v = _(!1), p = _(null), m = B(() => n.value.length === 0 ? [] : n.value.map((c) => ({
      text: `${c.timestamp} - ${c.name} - ${c.level} - ${c.func}:${c.line} - ${c.message}`,
      level: c.level
    })));
    async function l() {
      d.value = !0, g.value = null;
      try {
        n.value = await u(void 0, 500);
      } catch (c) {
        g.value = c instanceof Error ? c.message : "Failed to load workspace logs";
      } finally {
        d.value = !1, setTimeout(() => {
          var c;
          (c = p.value) != null && c.parentElement && (p.value.parentElement.scrollTop = p.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return Le(l), (c, b) => (s(), o(A, null, [
      f(Ve, null, {
        header: i(() => [
          f(Ae, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: b[0] || (b[0] = (y) => v.value = !0)
          }, {
            actions: i(() => [
              f(ee, {
                variant: "secondary",
                size: "sm",
                onClick: l,
                disabled: d.value
              }, {
                default: i(() => [
                  w(a(d.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: i(() => [
          d.value ? (s(), I(it, {
            key: 0,
            message: "Loading workspace logs..."
          })) : g.value ? (s(), I(rt, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: l
          }, null, 8, ["message"])) : (s(), o(A, { key: 2 }, [
            n.value.length === 0 ? (s(), I(Xe, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: p,
              class: "log-output"
            }, [
              (s(!0), o(A, null, te(m.value, (y, k) => (s(), o("div", {
                key: k,
                class: ne(`log-line log-level-${y.level.toLowerCase()}`)
              }, a(y.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      f(lt, {
        show: v.value,
        title: "About Workspace Logs",
        onClose: b[2] || (b[2] = (y) => v.value = !1)
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
          f(ee, {
            variant: "primary",
            onClick: b[1] || (b[1] = (y) => v.value = !1)
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
}), lf = /* @__PURE__ */ X(af, [["__scopeId", "data-v-39f6a756"]]), rf = /* @__PURE__ */ Y({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: u, getStatus: n } = De(), d = _([]), g = _(!1), v = _(null), p = _(!1), m = _("production"), l = _(null), c = B(() => d.value.length === 0 ? [] : d.value.map((y) => ({
      text: `${y.timestamp} - ${y.name} - ${y.level} - ${y.func}:${y.line} - ${y.message}`,
      level: y.level
    })));
    async function b() {
      g.value = !0, v.value = null;
      try {
        d.value = await u(void 0, 500);
        try {
          const y = await n();
          m.value = y.environment || "production";
        } catch {
        }
      } catch (y) {
        v.value = y instanceof Error ? y.message : "Failed to load environment logs";
      } finally {
        g.value = !1, setTimeout(() => {
          var y;
          (y = l.value) != null && y.parentElement && (l.value.parentElement.scrollTop = l.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return Le(b), (y, k) => (s(), o(A, null, [
      f(Ve, null, {
        header: i(() => [
          f(Ae, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: k[0] || (k[0] = ($) => p.value = !0)
          }, {
            actions: i(() => [
              f(ee, {
                variant: "secondary",
                size: "sm",
                onClick: b,
                disabled: g.value
              }, {
                default: i(() => [
                  w(a(g.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: i(() => [
          g.value ? (s(), I(it, {
            key: 0,
            message: "Loading environment logs..."
          })) : v.value ? (s(), I(rt, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: b
          }, null, 8, ["message"])) : (s(), o(A, { key: 2 }, [
            d.value.length === 0 ? (s(), I(Xe, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (s(), o("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: l,
              class: "log-output"
            }, [
              (s(!0), o(A, null, te(c.value, ($, D) => (s(), o("div", {
                key: D,
                class: ne(`log-line log-level-${$.level.toLowerCase()}`)
              }, a($.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      f(lt, {
        show: p.value,
        title: "About Environment Logs",
        onClose: k[2] || (k[2] = ($) => p.value = !1)
      }, {
        content: i(() => [
          e("p", null, [
            k[3] || (k[3] = w(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, a(m.value), 1),
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
          f(ee, {
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
}), df = /* @__PURE__ */ X(rf, [["__scopeId", "data-v-4f1e6f72"]]), cf = { class: "env-title" }, uf = {
  key: 0,
  class: "current-badge"
}, mf = {
  key: 0,
  class: "branch-info"
}, vf = /* @__PURE__ */ Y({
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
    return (u, n) => (s(), I(Pe, {
      status: t.isCurrent ? "synced" : void 0
    }, At({
      icon: i(() => [
        w(a(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: i(() => [
        e("div", cf, [
          e("span", null, a(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (s(), o("span", uf, "CURRENT")) : r("", !0)
        ])
      ]),
      subtitle: i(() => [
        t.currentBranch ? (s(), o("span", mf, [
          n[0] || (n[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          w(" " + a(t.currentBranch), 1)
        ])) : r("", !0)
      ]),
      actions: i(() => [
        we(u.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      t.showDetails ? {
        name: "details",
        fn: i(() => [
          f(Se, {
            label: "Workflows:",
            value: String(t.workflowCount)
          }, null, 8, ["value"]),
          f(Se, {
            label: "Nodes:",
            value: String(t.nodeCount)
          }, null, 8, ["value"]),
          f(Se, {
            label: "Models:",
            value: String(t.modelCount)
          }, null, 8, ["value"]),
          t.lastUsed && t.showLastUsed ? (s(), I(Se, {
            key: 0,
            label: "Last used:",
            value: t.lastUsed
          }, null, 8, ["value"])) : r("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), ff = /* @__PURE__ */ X(vf, [["__scopeId", "data-v-9231917a"]]), gf = { class: "env-details" }, pf = { class: "status-row" }, hf = {
  key: 0,
  class: "detail-row"
}, yf = { class: "value mono" }, wf = {
  key: 1,
  class: "detail-row"
}, kf = { class: "value mono small" }, bf = { class: "detail-row" }, _f = { class: "value" }, $f = { class: "detail-row" }, Cf = { class: "value" }, xf = { class: "detail-row" }, Sf = { class: "value" }, If = {
  key: 2,
  class: "section-divider"
}, Ef = {
  key: 3,
  class: "detail-row"
}, Mf = { class: "value" }, zf = {
  key: 4,
  class: "detail-row"
}, Tf = { class: "value" }, Lf = { class: "footer-actions" }, Df = /* @__PURE__ */ Y({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete"],
  setup(t, { emit: u }) {
    const n = u;
    function d(g) {
      if (!g) return "Unknown";
      try {
        const v = new Date(g), m = (/* @__PURE__ */ new Date()).getTime() - v.getTime(), l = Math.floor(m / 6e4), c = Math.floor(m / 36e5), b = Math.floor(m / 864e5);
        return l < 1 ? "just now" : l < 60 ? `${l} ${l === 1 ? "minute" : "minutes"} ago` : c < 24 ? `${c} ${c === 1 ? "hour" : "hours"} ago` : b < 30 ? `${b} ${b === 1 ? "day" : "days"} ago` : v.toLocaleDateString();
      } catch {
        return g;
      }
    }
    return (g, v) => (s(), I(at, {
      title: `ENVIRONMENT DETAILS: ${t.environment.name.toUpperCase()}`,
      size: "md",
      onClose: v[2] || (v[2] = (p) => n("close"))
    }, {
      body: i(() => [
        e("div", gf, [
          e("div", pf, [
            v[3] || (v[3] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: ne(["status-badge", t.environment.is_current ? "current" : "inactive"])
            }, a(t.environment.is_current ? "Current" : "Inactive"), 3)
          ]),
          t.environment.current_branch ? (s(), o("div", hf, [
            v[4] || (v[4] = e("span", { class: "label" }, "Branch:", -1)),
            e("span", yf, a(t.environment.current_branch), 1)
          ])) : r("", !0),
          t.environment.path ? (s(), o("div", wf, [
            v[5] || (v[5] = e("span", { class: "label" }, "Path:", -1)),
            e("span", kf, a(t.environment.path), 1)
          ])) : r("", !0),
          v[11] || (v[11] = e("div", { class: "section-divider" }, null, -1)),
          e("div", bf, [
            v[6] || (v[6] = e("span", { class: "label" }, "Workflows:", -1)),
            e("span", _f, a(t.environment.workflow_count), 1)
          ]),
          e("div", $f, [
            v[7] || (v[7] = e("span", { class: "label" }, "Nodes:", -1)),
            e("span", Cf, a(t.environment.node_count), 1)
          ]),
          e("div", xf, [
            v[8] || (v[8] = e("span", { class: "label" }, "Models:", -1)),
            e("span", Sf, a(t.environment.model_count), 1)
          ]),
          t.environment.created_at || t.environment.last_used ? (s(), o("div", If)) : r("", !0),
          t.environment.created_at ? (s(), o("div", Ef, [
            v[9] || (v[9] = e("span", { class: "label" }, "Created:", -1)),
            e("span", Mf, a(d(t.environment.created_at)), 1)
          ])) : r("", !0),
          t.environment.last_used ? (s(), o("div", zf, [
            v[10] || (v[10] = e("span", { class: "label" }, "Last Used:", -1)),
            e("span", Tf, a(d(t.environment.last_used)), 1)
          ])) : r("", !0)
        ])
      ]),
      footer: i(() => [
        e("div", Lf, [
          t.canDelete ? (s(), I(de, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: v[0] || (v[0] = (p) => n("delete", t.environment.name))
          }, {
            default: i(() => [...v[12] || (v[12] = [
              w(" Delete ", -1)
            ])]),
            _: 1
          })) : r("", !0),
          v[14] || (v[14] = e("div", { class: "footer-spacer" }, null, -1)),
          f(de, {
            variant: "secondary",
            size: "sm",
            onClick: v[1] || (v[1] = (p) => n("close"))
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
}), Rf = /* @__PURE__ */ X(Df, [["__scopeId", "data-v-59855453"]]), bs = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], _s = "3.12", $s = [
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
], Cs = "auto", Nf = { class: "progress-bar" }, Uf = /* @__PURE__ */ Y({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const u = t, n = B(() => `${Math.max(0, Math.min(100, u.progress))}%`);
    return (d, g) => (s(), o("div", Nf, [
      e("div", {
        class: ne(["progress-fill", t.variant]),
        style: nt({ width: n.value })
      }, null, 6)
    ]));
  }
}), xs = /* @__PURE__ */ X(Uf, [["__scopeId", "data-v-1beb0512"]]), Pf = { class: "task-progress" }, Of = { class: "progress-info" }, Bf = { class: "progress-percentage" }, Ff = { class: "progress-message" }, Vf = {
  key: 0,
  class: "progress-steps"
}, Af = { class: "step-icon" }, Wf = { class: "step-label" }, Gf = /* @__PURE__ */ Y({
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
    function n(g) {
      const v = u.steps.find((p) => p.id === g);
      return v ? u.progress >= v.progressThreshold ? "completed" : u.currentPhase === g ? "active" : "pending" : "pending";
    }
    function d(g) {
      const v = n(g);
      return v === "completed" ? "✓" : v === "active" ? "⟳" : "○";
    }
    return (g, v) => (s(), o("div", Pf, [
      f(xs, {
        progress: t.progress,
        variant: t.variant
      }, null, 8, ["progress", "variant"]),
      e("div", Of, [
        e("span", Bf, a(t.progress) + "%", 1),
        e("span", Ff, a(t.message), 1)
      ]),
      t.showSteps && t.steps.length > 0 ? (s(), o("div", Vf, [
        (s(!0), o(A, null, te(t.steps, (p) => (s(), o("div", {
          key: p.id,
          class: ne(["step", n(p.id)])
        }, [
          e("span", Af, a(d(p.id)), 1),
          e("span", Wf, a(p.label), 1)
        ], 2))), 128))
      ])) : r("", !0)
    ]));
  }
}), Yt = /* @__PURE__ */ X(Gf, [["__scopeId", "data-v-9d1de66c"]]), jf = {
  key: 0,
  class: "create-env-form"
}, Hf = { class: "form-field" }, qf = { class: "form-field" }, Kf = ["value"], Jf = { class: "form-field" }, Yf = ["disabled"], Xf = ["value"], Qf = { class: "form-field" }, Zf = ["value"], eg = { class: "form-field form-field--checkbox" }, tg = { class: "form-checkbox" }, sg = {
  key: 1,
  class: "create-env-progress"
}, og = { class: "creating-intro" }, ng = {
  key: 0,
  class: "progress-warning"
}, ag = {
  key: 1,
  class: "create-error"
}, lg = { class: "error-message" }, ig = {
  key: 1,
  class: "footer-status"
}, rg = 10, dg = /* @__PURE__ */ Y({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(t, { emit: u }) {
    const n = u, { getComfyUIReleases: d, createEnvironment: g, getCreateProgress: v } = De(), p = _(""), m = _(_s), l = _("latest"), c = _(Cs), b = _(!1), y = _([{ tag_name: "latest", name: "Latest", published_at: "" }]), k = _(!1), $ = _(!1), D = _({
      progress: 0,
      message: ""
    });
    let S = null, h = 0;
    const M = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], V = _(null);
    function L() {
      $.value || n("close");
    }
    async function N() {
      const C = p.value.trim();
      if (C) {
        $.value = !0, D.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const x = {
            name: C,
            python_version: m.value,
            comfyui_version: l.value,
            torch_backend: c.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, G = await g(x);
          G.status === "started" ? W() : G.status === "error" && (D.value = {
            progress: 0,
            message: G.message || "Failed to start creation",
            error: G.message
          });
        } catch (x) {
          D.value = {
            progress: 0,
            message: x instanceof Error ? x.message : "Unknown error",
            error: x instanceof Error ? x.message : "Unknown error"
          };
        }
      }
    }
    function W() {
      S || (h = 0, S = window.setInterval(async () => {
        try {
          const C = await v();
          h = 0, D.value = {
            progress: C.progress ?? 0,
            message: C.message,
            phase: C.phase,
            error: C.error
          }, C.state === "complete" ? (R(), n("created", C.environment_name || p.value.trim(), b.value)) : C.state === "error" ? (R(), D.value.error = C.error || C.message) : C.state === "idle" && $.value && (R(), D.value.error = "Creation was interrupted. Please try again.");
        } catch {
          h++, h >= rg && (R(), D.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function R() {
      S && (clearInterval(S), S = null);
    }
    function T() {
      $.value = !1, D.value = { progress: 0, message: "" }, n("close");
    }
    async function z() {
      k.value = !0;
      try {
        y.value = await d();
      } catch (C) {
        console.error("Failed to load ComfyUI releases:", C);
      } finally {
        k.value = !1;
      }
    }
    return Le(async () => {
      var C;
      await Ws(), (C = V.value) == null || C.focus(), z();
    }), vs(() => {
      R();
    }), (C, x) => (s(), I(at, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !$.value,
      onClose: L
    }, {
      body: i(() => [
        $.value ? (s(), o("div", sg, [
          e("p", og, [
            x[11] || (x[11] = w(" Creating environment ", -1)),
            e("strong", null, a(p.value), 1),
            x[12] || (x[12] = w("... ", -1))
          ]),
          f(Yt, {
            progress: D.value.progress,
            message: D.value.message,
            "current-phase": D.value.phase,
            variant: D.value.error ? "error" : "default",
            "show-steps": !0,
            steps: M
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          D.value.error ? r("", !0) : (s(), o("p", ng, " This may take several minutes. Please wait... ")),
          D.value.error ? (s(), o("div", ag, [
            e("p", lg, a(D.value.error), 1)
          ])) : r("", !0)
        ])) : (s(), o("div", jf, [
          e("div", Hf, [
            x[6] || (x[6] = e("label", { class: "form-label" }, "Name", -1)),
            Ue(e("input", {
              ref_key: "nameInput",
              ref: V,
              "onUpdate:modelValue": x[0] || (x[0] = (G) => p.value = G),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: ut(N, ["enter"])
            }, null, 544), [
              [zt, p.value]
            ])
          ]),
          e("div", qf, [
            x[7] || (x[7] = e("label", { class: "form-label" }, "Python Version", -1)),
            Ue(e("select", {
              "onUpdate:modelValue": x[1] || (x[1] = (G) => m.value = G),
              class: "form-select"
            }, [
              (s(!0), o(A, null, te(ke(bs), (G) => (s(), o("option", {
                key: G,
                value: G
              }, a(G), 9, Kf))), 128))
            ], 512), [
              [wt, m.value]
            ])
          ]),
          e("div", Jf, [
            x[8] || (x[8] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Ue(e("select", {
              "onUpdate:modelValue": x[2] || (x[2] = (G) => l.value = G),
              class: "form-select",
              disabled: k.value
            }, [
              (s(!0), o(A, null, te(y.value, (G) => (s(), o("option", {
                key: G.tag_name,
                value: G.tag_name
              }, a(G.name), 9, Xf))), 128))
            ], 8, Yf), [
              [wt, l.value]
            ])
          ]),
          e("div", Qf, [
            x[9] || (x[9] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Ue(e("select", {
              "onUpdate:modelValue": x[3] || (x[3] = (G) => c.value = G),
              class: "form-select"
            }, [
              (s(!0), o(A, null, te(ke($s), (G) => (s(), o("option", {
                key: G,
                value: G
              }, a(G) + a(G === "auto" ? " (detect GPU)" : ""), 9, Zf))), 128))
            ], 512), [
              [wt, c.value]
            ])
          ]),
          e("div", eg, [
            e("label", tg, [
              Ue(e("input", {
                type: "checkbox",
                "onUpdate:modelValue": x[4] || (x[4] = (G) => b.value = G)
              }, null, 512), [
                [qt, b.value]
              ]),
              x[10] || (x[10] = e("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: i(() => [
        $.value ? (s(), o(A, { key: 1 }, [
          D.value.error ? (s(), I(de, {
            key: 0,
            variant: "secondary",
            onClick: T
          }, {
            default: i(() => [...x[15] || (x[15] = [
              w(" Close ", -1)
            ])]),
            _: 1
          })) : (s(), o("span", ig, " Creating environment... "))
        ], 64)) : (s(), o(A, { key: 0 }, [
          f(de, {
            variant: "primary",
            disabled: !p.value.trim(),
            onClick: N
          }, {
            default: i(() => [...x[13] || (x[13] = [
              w(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          f(de, {
            variant: "secondary",
            onClick: x[5] || (x[5] = (G) => n("close"))
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
}), cg = /* @__PURE__ */ X(dg, [["__scopeId", "data-v-f37eaa42"]]), ug = /* @__PURE__ */ Y({
  __name: "EnvironmentsSection",
  emits: ["switch", "created", "delete"],
  setup(t, { expose: u, emit: n }) {
    const d = n, { getEnvironments: g } = De(), v = _([]), p = _(!1), m = _(null), l = _(""), c = _(!1), b = _(!1), y = _(null), k = B(
      () => v.value.find((L) => L.is_current)
    ), $ = B(() => {
      if (!l.value.trim()) return v.value;
      const L = l.value.toLowerCase();
      return v.value.filter(
        (N) => {
          var W;
          return N.name.toLowerCase().includes(L) || ((W = N.current_branch) == null ? void 0 : W.toLowerCase().includes(L));
        }
      );
    });
    function D(L, N) {
      b.value = !1, d("created", L, N);
    }
    function S() {
      b.value = !0;
    }
    function h(L) {
      y.value = L;
    }
    function M(L) {
      y.value = null, d("delete", L);
    }
    async function V() {
      p.value = !0, m.value = null;
      try {
        v.value = await g();
      } catch (L) {
        m.value = L instanceof Error ? L.message : "Failed to load environments";
      } finally {
        p.value = !1;
      }
    }
    return Le(V), u({
      loadEnvironments: V,
      openCreateModal: S
    }), (L, N) => (s(), o(A, null, [
      f(Ve, null, {
        header: i(() => [
          f(Ae, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: N[0] || (N[0] = (W) => c.value = !0)
          }, {
            actions: i(() => [
              f(ee, {
                variant: "primary",
                size: "sm",
                onClick: S
              }, {
                default: i(() => [...N[6] || (N[6] = [
                  w(" Create ", -1)
                ])]),
                _: 1
              }),
              f(ee, {
                variant: "secondary",
                size: "sm",
                onClick: V
              }, {
                default: i(() => [...N[7] || (N[7] = [
                  w(" Refresh ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: i(() => [
          f(bt, {
            modelValue: l.value,
            "onUpdate:modelValue": N[1] || (N[1] = (W) => l.value = W),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: i(() => [
          p.value ? (s(), I(it, {
            key: 0,
            message: "Loading environments..."
          })) : m.value ? (s(), I(rt, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: V
          }, null, 8, ["message"])) : (s(), o(A, { key: 2 }, [
            v.value.length ? (s(), I(_t, {
              key: 0,
              variant: "compact"
            }, {
              default: i(() => [
                w(" Total: " + a(v.value.length) + " " + a(v.value.length === 1 ? "environment" : "environments") + " ", 1),
                k.value ? (s(), o(A, { key: 0 }, [
                  N[8] || (N[8] = w(" • Current: ", -1)),
                  e("strong", null, a(k.value.name), 1)
                ], 64)) : r("", !0)
              ]),
              _: 1
            })) : r("", !0),
            $.value.length ? (s(), I(Te, {
              key: 1,
              title: "ENVIRONMENTS",
              count: $.value.length
            }, {
              default: i(() => [
                (s(!0), o(A, null, te($.value, (W) => (s(), I(ff, {
                  key: W.name,
                  "environment-name": W.name,
                  "is-current": W.is_current,
                  "current-branch": W.current_branch,
                  "show-last-used": !1
                }, {
                  actions: i(() => [
                    W.is_current ? r("", !0) : (s(), I(ee, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (R) => L.$emit("switch", W.name)
                    }, {
                      default: i(() => [...N[9] || (N[9] = [
                        w(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    f(ee, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (R) => h(W)
                    }, {
                      default: i(() => [...N[10] || (N[10] = [
                        w(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["environment-name", "is-current", "current-branch"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : r("", !0),
            $.value.length ? r("", !0) : (s(), I(Xe, {
              key: 2,
              icon: "🌍",
              message: l.value ? `No environments match '${l.value}'` : "No environments found. Create one to get started!"
            }, At({ _: 2 }, [
              l.value ? void 0 : {
                name: "actions",
                fn: i(() => [
                  f(ee, {
                    variant: "primary",
                    onClick: S
                  }, {
                    default: i(() => [...N[11] || (N[11] = [
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
      f(lt, {
        show: c.value,
        title: "About Environments",
        onClose: N[3] || (N[3] = (W) => c.value = !1)
      }, {
        content: i(() => [...N[12] || (N[12] = [
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
          f(ee, {
            variant: "secondary",
            onClick: N[2] || (N[2] = (W) => c.value = !1)
          }, {
            default: i(() => [...N[13] || (N[13] = [
              w(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      y.value ? (s(), I(Rf, {
        key: 0,
        environment: y.value,
        "can-delete": v.value.length > 1,
        onClose: N[4] || (N[4] = (W) => y.value = null),
        onDelete: M
      }, null, 8, ["environment", "can-delete"])) : r("", !0),
      b.value ? (s(), I(cg, {
        key: 1,
        onClose: N[5] || (N[5] = (W) => b.value = !1),
        onCreated: D
      })) : r("", !0)
    ], 64));
  }
}), mg = /* @__PURE__ */ X(ug, [["__scopeId", "data-v-d6dc0255"]]), vg = { class: "file-path" }, fg = { class: "file-path-text" }, gg = ["title"], pg = /* @__PURE__ */ Y({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const u = t, n = _(!1);
    async function d() {
      try {
        await navigator.clipboard.writeText(u.path), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (g) {
        console.error("Failed to copy:", g);
      }
    }
    return (g, v) => (s(), o("div", vg, [
      v[0] || (v[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", fg, a(t.path), 1),
      t.copyable ? (s(), o("button", {
        key: 0,
        class: "copy-btn",
        title: n.value ? "Copied!" : "Copy path",
        onClick: d
      }, a(n.value ? "✓" : "📋"), 9, gg)) : r("", !0)
    ]));
  }
}), hg = /* @__PURE__ */ X(pg, [["__scopeId", "data-v-f0982173"]]), yg = { class: "output-path-input" }, wg = { class: "export-actions" }, kg = {
  key: 1,
  class: "export-warning"
}, bg = /* @__PURE__ */ Y({
  __name: "ExportSection",
  setup(t) {
    const { exportEnv: u } = De(), n = _(""), d = _(!1), g = _(null), v = _(!1);
    async function p() {
      d.value = !0, g.value = null;
      try {
        const l = await u(n.value || void 0);
        g.value = l;
      } catch (l) {
        g.value = {
          status: "error",
          message: l instanceof Error ? l.message : "Unknown error occurred"
        };
      } finally {
        d.value = !1;
      }
    }
    async function m() {
      var l;
      if ((l = g.value) != null && l.path)
        try {
          await navigator.clipboard.writeText(g.value.path);
        } catch (c) {
          console.error("Failed to copy path:", c);
        }
    }
    return (l, c) => (s(), o(A, null, [
      f(Ve, null, {
        header: i(() => [
          f(Ae, { title: "EXPORT ENVIRONMENT" }, {
            actions: i(() => [
              f(ee, {
                variant: "ghost",
                size: "sm",
                onClick: c[0] || (c[0] = (b) => v.value = !0),
                title: "About exporting"
              }, {
                default: i(() => [...c[5] || (c[5] = [
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
          f(Te, { title: "WHAT WILL BE EXPORTED" }, {
            default: i(() => [
              f(Pe, { status: "synced" }, {
                icon: i(() => [...c[6] || (c[6] = [
                  w("📦", -1)
                ])]),
                title: i(() => [...c[7] || (c[7] = [
                  w("Environment Snapshot", -1)
                ])]),
                subtitle: i(() => [...c[8] || (c[8] = [
                  w(" Creates a complete snapshot of your current environment including workflows, custom nodes, and model references. ", -1)
                ])]),
                details: i(() => [
                  f(Se, {
                    label: "Workflows",
                    value: "All workflows in this environment"
                  }),
                  f(Se, {
                    label: "Custom Nodes",
                    value: "Node definitions and dependencies"
                  }),
                  f(Se, {
                    label: "Models",
                    value: "Model references (not files)"
                  }),
                  f(Se, {
                    label: "Configuration",
                    value: "Environment settings and metadata"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          f(Te, { title: "EXPORT OPTIONS" }, {
            default: i(() => [
              f(Pe, { status: "synced" }, {
                icon: i(() => [...c[9] || (c[9] = [
                  w("📁", -1)
                ])]),
                title: i(() => [...c[10] || (c[10] = [
                  w("Output Destination", -1)
                ])]),
                subtitle: i(() => [...c[11] || (c[11] = [
                  w(" Specify where the export bundle should be saved, or leave empty for default location. ", -1)
                ])]),
                details: i(() => [
                  e("div", yg, [
                    f(Bt, {
                      modelValue: n.value,
                      "onUpdate:modelValue": c[1] || (c[1] = (b) => n.value = b),
                      placeholder: "/path/to/export/bundle.tar.gz"
                    }, null, 8, ["modelValue"])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          f(Te, { title: "EXPORT" }, {
            default: i(() => [
              e("div", wg, [
                f(ee, {
                  variant: "primary",
                  size: "md",
                  loading: d.value,
                  disabled: d.value,
                  onClick: p
                }, {
                  default: i(() => [
                    c[12] || (c[12] = e("svg", {
                      width: "16",
                      height: "16",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                      e("path", { d: "M14 14H2v-2h12v2z" })
                    ], -1)),
                    w(" " + a(d.value ? "Exporting..." : "Export Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"]),
                n.value ? (s(), I(ee, {
                  key: 0,
                  variant: "secondary",
                  size: "md",
                  disabled: d.value,
                  onClick: c[2] || (c[2] = (b) => n.value = "")
                }, {
                  default: i(() => [...c[13] || (c[13] = [
                    w(" Clear Path ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])) : r("", !0)
              ])
            ]),
            _: 1
          }),
          g.value ? (s(), I(Te, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: i(() => [
              f(Pe, {
                status: g.value.status === "success" ? "synced" : "broken"
              }, At({
                icon: i(() => [
                  w(a(g.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: i(() => [
                  w(a(g.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: i(() => [
                  w(a(g.value.status === "success" ? "Your environment has been exported" : g.value.message), 1)
                ]),
                _: 2
              }, [
                g.value.status === "success" ? {
                  name: "details",
                  fn: i(() => [
                    f(Se, { label: "Saved to:" }, {
                      default: i(() => [
                        f(hg, {
                          path: g.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    g.value.models_without_sources !== void 0 ? (s(), I(Se, {
                      key: 0,
                      label: "Models without sources:",
                      value: g.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : r("", !0),
                    g.value.models_without_sources && g.value.models_without_sources > 0 ? (s(), o("div", kg, [...c[14] || (c[14] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : r("", !0)
                  ]),
                  key: "0"
                } : void 0,
                g.value.status === "success" ? {
                  name: "actions",
                  fn: i(() => [
                    f(ee, {
                      variant: "secondary",
                      size: "sm",
                      onClick: m
                    }, {
                      default: i(() => [...c[15] || (c[15] = [
                        w(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    f(ee, {
                      variant: "ghost",
                      size: "sm",
                      onClick: c[3] || (c[3] = (b) => g.value = null)
                    }, {
                      default: i(() => [...c[16] || (c[16] = [
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
          })) : r("", !0)
        ]),
        _: 1
      }),
      f(lt, {
        show: v.value,
        title: "About Environment Export",
        onClose: c[4] || (c[4] = (b) => v.value = !1)
      }, {
        content: i(() => [...c[17] || (c[17] = [
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
}), _g = /* @__PURE__ */ X(bg, [["__scopeId", "data-v-1777a9d5"]]), $g = { class: "file-input-wrapper" }, Cg = ["accept", "multiple", "disabled"], xg = /* @__PURE__ */ Y({
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
    const d = n, g = _(null);
    function v() {
      var m;
      (m = g.value) == null || m.click();
    }
    function p(m) {
      const l = m.target;
      l.files && l.files.length > 0 && (d("change", l.files), l.value = "");
    }
    return u({
      triggerInput: v
    }), (m, l) => (s(), o("div", $g, [
      e("input", {
        ref_key: "fileInputRef",
        ref: g,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: p
      }, null, 40, Cg),
      f(ee, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: v
      }, {
        default: i(() => [
          we(m.$slots, "default", {}, () => [
            l[0] || (l[0] = e("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              e("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              e("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            w(" " + a(t.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), Sg = /* @__PURE__ */ X(xg, [["__scopeId", "data-v-cd192091"]]), Ig = {
  key: 0,
  class: "drop-zone-empty"
}, Eg = { class: "drop-zone-text" }, Mg = { class: "drop-zone-primary" }, zg = { class: "drop-zone-secondary" }, Tg = { class: "drop-zone-actions" }, Lg = {
  key: 1,
  class: "drop-zone-file"
}, Dg = { class: "file-info" }, Rg = { class: "file-details" }, Ng = { class: "file-name" }, Ug = { class: "file-size" }, Pg = /* @__PURE__ */ Y({
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
    const n = u, d = _(!1), g = _(null), v = _(0), p = B(() => g.value !== null), m = B(() => {
      var h;
      return ((h = g.value) == null ? void 0 : h.name) || "";
    }), l = B(() => {
      if (!g.value) return "";
      const h = g.value.size;
      return h < 1024 ? `${h} B` : h < 1024 * 1024 ? `${(h / 1024).toFixed(1)} KB` : h < 1024 * 1024 * 1024 ? `${(h / (1024 * 1024)).toFixed(1)} MB` : `${(h / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function c(h) {
      var M;
      v.value++, (M = h.dataTransfer) != null && M.types.includes("Files") && (d.value = !0);
    }
    function b(h) {
      h.dataTransfer && (h.dataTransfer.dropEffect = "copy");
    }
    function y() {
      v.value--, v.value === 0 && (d.value = !1);
    }
    function k(h) {
      var V;
      v.value = 0, d.value = !1;
      const M = (V = h.dataTransfer) == null ? void 0 : V.files;
      M && M.length > 0 && D(M[0]);
    }
    function $(h) {
      h.length > 0 && D(h[0]);
    }
    function D(h) {
      g.value = h, n("fileSelected", h);
    }
    function S() {
      g.value = null, n("clear");
    }
    return (h, M) => (s(), o("div", {
      class: ne(["file-drop-zone", { "drop-active": d.value, "has-file": p.value }]),
      onDragenter: ze(c, ["prevent"]),
      onDragover: ze(b, ["prevent"]),
      onDragleave: ze(y, ["prevent"]),
      onDrop: ze(k, ["prevent"])
    }, [
      p.value ? (s(), o("div", Lg, [
        e("div", Dg, [
          M[1] || (M[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", Rg, [
            e("div", Ng, a(m.value), 1),
            e("div", Ug, a(l.value), 1)
          ])
        ]),
        f(ee, {
          variant: "ghost",
          size: "xs",
          onClick: S,
          title: "Remove file"
        }, {
          default: i(() => [...M[2] || (M[2] = [
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
      ])) : (s(), o("div", Ig, [
        M[0] || (M[0] = e("div", { class: "drop-zone-icon" }, [
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
        e("div", Eg, [
          e("p", Mg, a(t.primaryText), 1),
          e("p", zg, a(t.secondaryText), 1)
        ]),
        e("div", Tg, [
          f(Sg, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "md",
            onChange: $
          }, {
            default: i(() => [
              w(a(t.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), Og = /* @__PURE__ */ X(Pg, [["__scopeId", "data-v-e00abbca"]]), Bg = { class: "import-preview" }, Fg = { class: "preview-header" }, Vg = {
  key: 0,
  class: "source-env"
}, Ag = { class: "preview-content" }, Wg = { class: "preview-section" }, Gg = { class: "section-header" }, jg = { class: "section-info" }, Hg = { class: "section-count" }, qg = {
  key: 0,
  class: "item-list"
}, Kg = { class: "item-name" }, Jg = {
  key: 0,
  class: "item-more"
}, Yg = { class: "preview-section" }, Xg = { class: "section-header" }, Qg = { class: "section-info" }, Zg = { class: "section-count" }, ep = {
  key: 0,
  class: "item-list"
}, tp = { class: "item-details" }, sp = { class: "item-name" }, op = { class: "item-meta" }, np = {
  key: 0,
  class: "item-more"
}, ap = { class: "preview-section" }, lp = { class: "section-header" }, ip = { class: "section-info" }, rp = { class: "section-count" }, dp = {
  key: 0,
  class: "item-list"
}, cp = { class: "item-name" }, up = {
  key: 0,
  class: "item-more"
}, mp = {
  key: 0,
  class: "preview-section"
}, vp = { class: "git-info" }, fp = /* @__PURE__ */ Y({
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
    const u = t, n = B(() => u.workflows.length), d = B(() => u.models.length), g = B(() => u.nodes.length);
    function v(p) {
      return p < 1024 ? `${p} B` : p < 1024 * 1024 ? `${(p / 1024).toFixed(1)} KB` : p < 1024 * 1024 * 1024 ? `${(p / (1024 * 1024)).toFixed(1)} MB` : `${(p / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (p, m) => (s(), o("div", Bg, [
      e("div", Fg, [
        f(je, null, {
          default: i(() => [...m[0] || (m[0] = [
            w("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (s(), o("span", Vg, [
          m[1] || (m[1] = w(" From: ", -1)),
          f(Jt, null, {
            default: i(() => [
              w(a(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : r("", !0)
      ]),
      e("div", Ag, [
        e("div", Wg, [
          e("div", Gg, [
            m[3] || (m[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", jg, [
              m[2] || (m[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", Hg, a(n.value) + " file" + a(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (s(), o("div", qg, [
            (s(!0), o(A, null, te(t.workflows.slice(0, t.maxPreviewItems), (l) => (s(), o("div", {
              key: l,
              class: "preview-item"
            }, [
              m[4] || (m[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", Kg, a(l), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (s(), o("div", Jg, " +" + a(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : r("", !0)
          ])) : r("", !0)
        ]),
        e("div", Yg, [
          e("div", Xg, [
            m[6] || (m[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", Qg, [
              m[5] || (m[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", Zg, a(d.value) + " file" + a(d.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (s(), o("div", ep, [
            (s(!0), o(A, null, te(t.models.slice(0, t.maxPreviewItems), (l) => (s(), o("div", {
              key: l.filename,
              class: "preview-item"
            }, [
              m[7] || (m[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", tp, [
                e("span", sp, a(l.filename), 1),
                e("span", op, a(v(l.size)) + " • " + a(l.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (s(), o("div", np, " +" + a(t.models.length - t.maxPreviewItems) + " more ", 1)) : r("", !0)
          ])) : r("", !0)
        ]),
        e("div", ap, [
          e("div", lp, [
            m[9] || (m[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", ip, [
              m[8] || (m[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", rp, a(g.value) + " node" + a(g.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (s(), o("div", dp, [
            (s(!0), o(A, null, te(t.nodes.slice(0, t.maxPreviewItems), (l) => (s(), o("div", {
              key: l,
              class: "preview-item"
            }, [
              m[10] || (m[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", cp, a(l), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (s(), o("div", up, " +" + a(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : r("", !0)
          ])) : r("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (s(), o("div", mp, [
          m[11] || (m[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", vp, [
            t.gitBranch ? (s(), I(Se, {
              key: 0,
              label: "Branch"
            }, {
              default: i(() => [
                f(Jt, null, {
                  default: i(() => [
                    w(a(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : r("", !0),
            t.gitCommit ? (s(), I(Se, {
              key: 1,
              label: "Commit"
            }, {
              default: i(() => [
                f(gs, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : r("", !0)
          ])
        ])) : r("", !0)
      ])
    ]));
  }
}), gp = /* @__PURE__ */ X(fp, [["__scopeId", "data-v-182fe113"]]), pp = { class: "import-options" }, hp = { class: "options-container" }, yp = { class: "option-section" }, wp = { class: "conflict-options" }, kp = ["value", "checked", "onChange"], bp = { class: "conflict-content" }, _p = { class: "conflict-label" }, $p = { class: "conflict-description" }, Cp = { class: "option-section" }, xp = { class: "component-toggles" }, Sp = /* @__PURE__ */ Y({
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
    const n = u, d = [
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
    return (g, v) => (s(), o("div", pp, [
      f(je, null, {
        default: i(() => [...v[4] || (v[4] = [
          w("Import Options", -1)
        ])]),
        _: 1
      }),
      e("div", hp, [
        e("div", yp, [
          f(Kt, null, {
            default: i(() => [...v[5] || (v[5] = [
              w("Conflict Resolution", -1)
            ])]),
            _: 1
          }),
          e("div", wp, [
            (s(), o(A, null, te(d, (p) => e("label", {
              key: p.value,
              class: ne(["conflict-option", { active: t.conflictMode === p.value }])
            }, [
              e("input", {
                type: "radio",
                name: "conflict-mode",
                value: p.value,
                checked: t.conflictMode === p.value,
                onChange: (m) => n("update:conflictMode", p.value)
              }, null, 40, kp),
              e("div", bp, [
                e("span", _p, a(p.label), 1),
                e("span", $p, a(p.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", Cp, [
          f(Kt, null, {
            default: i(() => [...v[6] || (v[6] = [
              w("Components to Import", -1)
            ])]),
            _: 1
          }),
          e("div", xp, [
            f(ot, {
              label: "Workflows",
              description: "Import workflow JSON files"
            }, {
              default: i(() => [
                f(gt, {
                  "model-value": t.includeWorkflows,
                  "onUpdate:modelValue": v[0] || (v[0] = (p) => n("update:includeWorkflows", p))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            f(ot, {
              label: "Models",
              description: "Import model files (may be large)"
            }, {
              default: i(() => [
                f(gt, {
                  "model-value": t.includeModels,
                  "onUpdate:modelValue": v[1] || (v[1] = (p) => n("update:includeModels", p))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            f(ot, {
              label: "Custom Nodes",
              description: "Install custom node dependencies"
            }, {
              default: i(() => [
                f(gt, {
                  "model-value": t.includeNodes,
                  "onUpdate:modelValue": v[2] || (v[2] = (p) => n("update:includeNodes", p))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            f(ot, {
              label: "Git History",
              description: "Import git commits and branches"
            }, {
              default: i(() => [
                f(gt, {
                  "model-value": t.includeGitHistory,
                  "onUpdate:modelValue": v[3] || (v[3] = (p) => n("update:includeGitHistory", p))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            })
          ])
        ])
      ])
    ]));
  }
}), Ip = /* @__PURE__ */ X(Sp, [["__scopeId", "data-v-0ec212b0"]]), Ep = {
  key: 0,
  class: "import-empty"
}, Mp = { class: "import-help" }, zp = {
  key: 1,
  class: "import-configure"
}, Tp = { class: "selected-file-bar" }, Lp = { class: "file-bar-content" }, Dp = { class: "file-bar-info" }, Rp = { class: "file-bar-name" }, Np = { class: "file-bar-size" }, Up = { class: "import-actions" }, Pp = {
  key: 2,
  class: "import-progress"
}, Op = { class: "progress-content" }, Bp = { class: "progress-info" }, Fp = { class: "progress-title" }, Vp = { class: "progress-detail" }, Ap = { class: "progress-bar" }, Wp = { class: "progress-status" }, Gp = {
  key: 3,
  class: "import-complete"
}, jp = { class: "complete-message" }, Hp = { class: "complete-title" }, qp = { class: "complete-details" }, Kp = { class: "complete-actions" }, Jp = /* @__PURE__ */ Y({
  __name: "ImportSection",
  setup(t) {
    const u = _(null), n = _(!1), d = _(!1), g = _(!1), v = _(""), p = _({
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
    }), c = B(() => p.value.includeWorkflows || p.value.includeModels || p.value.includeNodes || p.value.includeGitHistory);
    function b(S) {
      u.value = S;
    }
    function y() {
      u.value = null, d.value = !1, g.value = !1, v.value = "";
    }
    function k() {
      y(), n.value = !1, m.value = {
        message: "Preparing import...",
        detail: "",
        percent: 0
      };
    }
    async function $() {
      if (u.value) {
        n.value = !0, d.value = !1;
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
            m.value = h, await new Promise((M) => setTimeout(M, 800));
          m.value = { message: "Complete!", detail: "", percent: 100 }, await new Promise((h) => setTimeout(h, 500)), g.value = !0, v.value = `Successfully imported ${l.value.workflows.length} workflows, ${l.value.models.length} models, and ${l.value.nodes.length} custom nodes.`;
        } catch (S) {
          g.value = !1, v.value = S instanceof Error ? S.message : "Unknown error occurred during import";
        } finally {
          n.value = !1, d.value = !0;
        }
      }
    }
    function D(S) {
      return S < 1024 ? `${S} B` : S < 1024 * 1024 ? `${(S / 1024).toFixed(1)} KB` : S < 1024 * 1024 * 1024 ? `${(S / (1024 * 1024)).toFixed(1)} MB` : `${(S / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (S, h) => (s(), I(Ve, null, {
      header: i(() => [
        f(Ae, { title: "IMPORT ENVIRONMENT" })
      ]),
      content: i(() => [
        !u.value && !n.value ? (s(), o("div", Ep, [
          f(Og, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: b
          }),
          e("div", Mp, [
            f(je, null, {
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
        ])) : u.value && !n.value && !d.value ? (s(), o("div", zp, [
          e("div", Tp, [
            e("div", Lp, [
              h[7] || (h[7] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", Dp, [
                e("div", Rp, a(u.value.name), 1),
                e("div", Np, a(D(u.value.size)), 1)
              ])
            ]),
            f(ee, {
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
          f(gp, {
            "source-environment": l.value.sourceEnvironment,
            workflows: l.value.workflows,
            models: l.value.models,
            nodes: l.value.nodes,
            "git-branch": l.value.gitBranch,
            "git-commit": l.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"]),
          f(Ip, {
            "conflict-mode": p.value.conflictMode,
            "onUpdate:conflictMode": h[0] || (h[0] = (M) => p.value.conflictMode = M),
            "include-workflows": p.value.includeWorkflows,
            "onUpdate:includeWorkflows": h[1] || (h[1] = (M) => p.value.includeWorkflows = M),
            "include-models": p.value.includeModels,
            "onUpdate:includeModels": h[2] || (h[2] = (M) => p.value.includeModels = M),
            "include-nodes": p.value.includeNodes,
            "onUpdate:includeNodes": h[3] || (h[3] = (M) => p.value.includeNodes = M),
            "include-git-history": p.value.includeGitHistory,
            "onUpdate:includeGitHistory": h[4] || (h[4] = (M) => p.value.includeGitHistory = M)
          }, null, 8, ["conflict-mode", "include-workflows", "include-models", "include-nodes", "include-git-history"]),
          !p.value.includeModels && l.value.models.length > 0 ? (s(), I(Ze, {
            key: 0,
            type: "warning",
            title: "Models Will Not Be Imported",
            details: [
              `${l.value.models.length} model file(s) will be skipped`,
              "Workflows may not function without required models",
              "You can download models manually from the MODEL INDEX"
            ]
          }, null, 8, ["details"])) : r("", !0),
          e("div", Up, [
            f(ee, {
              variant: "primary",
              size: "md",
              disabled: !c.value,
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
            f(ee, {
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
        ])) : n.value ? (s(), o("div", Pp, [
          e("div", Op, [
            h[11] || (h[11] = e("div", { class: "progress-icon" }, [
              e("div", { class: "spinner" })
            ], -1)),
            e("div", Bp, [
              e("div", Fp, a(m.value.message), 1),
              e("div", Vp, a(m.value.detail), 1)
            ])
          ]),
          e("div", Ap, [
            e("div", {
              class: "progress-bar-fill",
              style: nt({ width: `${m.value.percent}%` })
            }, null, 4)
          ]),
          e("div", Wp, a(m.value.percent) + "% complete ", 1)
        ])) : d.value ? (s(), o("div", Gp, [
          e("div", {
            class: ne(["complete-icon", g.value ? "success" : "error"])
          }, a(g.value ? "✓" : "✕"), 3),
          e("div", jp, [
            e("div", Hp, a(g.value ? "Import Successful" : "Import Failed"), 1),
            e("div", qp, a(v.value), 1)
          ]),
          e("div", Kp, [
            f(ee, {
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
        ])) : r("", !0)
      ]),
      _: 1
    }));
  }
}), Yp = /* @__PURE__ */ X(Jp, [["__scopeId", "data-v-18e18eb5"]]), Xp = { class: "header-info" }, Qp = { class: "commit-hash" }, Zp = {
  key: 0,
  class: "commit-refs"
}, eh = { class: "commit-message" }, th = { class: "commit-date" }, sh = {
  key: 0,
  class: "loading"
}, oh = {
  key: 1,
  class: "changes-section"
}, nh = { class: "stats-row" }, ah = { class: "stat" }, lh = { class: "stat insertions" }, ih = { class: "stat deletions" }, rh = {
  key: 0,
  class: "change-group"
}, dh = {
  key: 1,
  class: "change-group"
}, ch = {
  key: 0,
  class: "version"
}, uh = {
  key: 2,
  class: "change-group"
}, mh = { class: "change-item" }, vh = /* @__PURE__ */ Y({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const u = t, { getCommitDetail: n } = De(), d = _(null), g = _(!0), v = B(() => {
      if (!d.value) return !1;
      const m = d.value.changes.workflows;
      return m.added.length > 0 || m.modified.length > 0 || m.deleted.length > 0;
    }), p = B(() => {
      if (!d.value) return !1;
      const m = d.value.changes.nodes;
      return m.added.length > 0 || m.removed.length > 0;
    });
    return Le(async () => {
      try {
        d.value = await n(u.commit.hash);
      } finally {
        g.value = !1;
      }
    }), (m, l) => (s(), I(at, {
      size: "md",
      "show-close-button": !1,
      onClose: l[3] || (l[3] = (c) => m.$emit("close"))
    }, {
      header: i(() => {
        var c, b, y, k;
        return [
          e("div", Xp, [
            l[4] || (l[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", Qp, a(((c = d.value) == null ? void 0 : c.short_hash) || t.commit.short_hash || ((b = t.commit.hash) == null ? void 0 : b.slice(0, 7))), 1),
            (k = (y = d.value) == null ? void 0 : y.refs) != null && k.length ? (s(), o("span", Zp, [
              (s(!0), o(A, null, te(d.value.refs, ($) => (s(), o("span", {
                key: $,
                class: "ref-badge"
              }, a($), 1))), 128))
            ])) : r("", !0)
          ]),
          f(de, {
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
        var c, b;
        return [
          e("div", eh, a(((c = d.value) == null ? void 0 : c.message) || t.commit.message), 1),
          e("div", th, a(((b = d.value) == null ? void 0 : b.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          g.value ? (s(), o("div", sh, "Loading details...")) : d.value ? (s(), o("div", oh, [
            e("div", nh, [
              e("span", ah, a(d.value.stats.files_changed) + " files", 1),
              e("span", lh, "+" + a(d.value.stats.insertions), 1),
              e("span", ih, "-" + a(d.value.stats.deletions), 1)
            ]),
            v.value ? (s(), o("div", rh, [
              f(Tt, { variant: "section" }, {
                default: i(() => [...l[6] || (l[6] = [
                  w("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(A, null, te(d.value.changes.workflows.added, (y) => (s(), o("div", {
                key: "add-" + y,
                class: "change-item added"
              }, [
                l[7] || (l[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(y), 1)
              ]))), 128)),
              (s(!0), o(A, null, te(d.value.changes.workflows.modified, (y) => (s(), o("div", {
                key: "mod-" + y,
                class: "change-item modified"
              }, [
                l[8] || (l[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, a(y), 1)
              ]))), 128)),
              (s(!0), o(A, null, te(d.value.changes.workflows.deleted, (y) => (s(), o("div", {
                key: "del-" + y,
                class: "change-item deleted"
              }, [
                l[9] || (l[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(y), 1)
              ]))), 128))
            ])) : r("", !0),
            p.value ? (s(), o("div", dh, [
              f(Tt, { variant: "section" }, {
                default: i(() => [...l[10] || (l[10] = [
                  w("NODES", -1)
                ])]),
                _: 1
              }),
              (s(!0), o(A, null, te(d.value.changes.nodes.added, (y) => (s(), o("div", {
                key: "add-" + y.name,
                class: "change-item added"
              }, [
                l[11] || (l[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(y.name), 1),
                y.version ? (s(), o("span", ch, "(" + a(y.version) + ")", 1)) : r("", !0)
              ]))), 128)),
              (s(!0), o(A, null, te(d.value.changes.nodes.removed, (y) => (s(), o("div", {
                key: "rem-" + y.name,
                class: "change-item deleted"
              }, [
                l[12] || (l[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(y.name), 1)
              ]))), 128))
            ])) : r("", !0),
            d.value.changes.models.resolved > 0 ? (s(), o("div", uh, [
              f(Tt, { variant: "section" }, {
                default: i(() => [...l[13] || (l[13] = [
                  w("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", mh, [
                l[14] || (l[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, a(d.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : r("", !0)
          ])) : r("", !0)
        ];
      }),
      footer: i(() => [
        f(de, {
          variant: "secondary",
          onClick: l[1] || (l[1] = (c) => m.$emit("createBranch", t.commit))
        }, {
          default: i(() => [...l[15] || (l[15] = [
            w(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        f(de, {
          variant: "primary",
          onClick: l[2] || (l[2] = (c) => m.$emit("checkout", t.commit))
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
}), fh = /* @__PURE__ */ X(vh, [["__scopeId", "data-v-d256ff6d"]]), gh = { class: "dialog-message" }, ph = {
  key: 0,
  class: "dialog-details"
}, hh = {
  key: 1,
  class: "dialog-warning"
}, yh = /* @__PURE__ */ Y({
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
    return (u, n) => (s(), I(at, {
      title: t.title,
      size: "sm",
      onClose: n[3] || (n[3] = (d) => u.$emit("cancel"))
    }, {
      body: i(() => [
        e("p", gh, a(t.message), 1),
        t.details && t.details.length ? (s(), o("div", ph, [
          (s(!0), o(A, null, te(t.details, (d, g) => (s(), o("div", {
            key: g,
            class: "detail-item"
          }, " • " + a(d), 1))), 128))
        ])) : r("", !0),
        t.warning ? (s(), o("p", hh, [
          n[4] || (n[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          w(" " + a(t.warning), 1)
        ])) : r("", !0)
      ]),
      footer: i(() => [
        f(de, {
          variant: "secondary",
          onClick: n[0] || (n[0] = (d) => u.$emit("cancel"))
        }, {
          default: i(() => [
            w(a(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (s(), I(de, {
          key: 0,
          variant: "secondary",
          onClick: n[1] || (n[1] = (d) => u.$emit("secondary"))
        }, {
          default: i(() => [
            w(a(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : r("", !0),
        f(de, {
          variant: t.destructive ? "danger" : "primary",
          onClick: n[2] || (n[2] = (d) => u.$emit("confirm"))
        }, {
          default: i(() => [
            w(a(t.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), wh = /* @__PURE__ */ X(yh, [["__scopeId", "data-v-3670b9f5"]]), kh = { class: "base-textarea-wrapper" }, bh = ["value", "rows", "placeholder", "disabled", "maxlength"], _h = {
  key: 0,
  class: "base-textarea-count"
}, $h = /* @__PURE__ */ Y({
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
    return (u, n) => (s(), o("div", kh, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: n[0] || (n[0] = (d) => u.$emit("update:modelValue", d.target.value)),
        onKeydown: [
          n[1] || (n[1] = ut(ze((d) => u.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          n[2] || (n[2] = ut(ze((d) => u.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, bh),
      t.showCharCount && t.maxLength ? (s(), o("div", _h, a(t.modelValue.length) + " / " + a(t.maxLength), 1)) : r("", !0)
    ]));
  }
}), cs = /* @__PURE__ */ X($h, [["__scopeId", "data-v-5516e6fc"]]), Ch = ["checked", "disabled"], xh = { class: "base-checkbox-box" }, Sh = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, Ih = {
  key: 0,
  class: "base-checkbox-label"
}, Eh = /* @__PURE__ */ Y({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (u, n) => (s(), o("label", {
      class: ne(["base-checkbox", { disabled: t.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        class: "base-checkbox-input",
        onChange: n[0] || (n[0] = (d) => u.$emit("update:modelValue", d.target.checked))
      }, null, 40, Ch),
      e("span", xh, [
        t.modelValue ? (s(), o("svg", Sh, [...n[1] || (n[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : r("", !0)
      ]),
      u.$slots.default ? (s(), o("span", Ih, [
        we(u.$slots, "default", {}, void 0, !0)
      ])) : r("", !0)
    ], 2));
  }
}), us = /* @__PURE__ */ X(Eh, [["__scopeId", "data-v-bf17c831"]]), Mh = { class: "popover-header" }, zh = { class: "popover-body" }, Th = {
  key: 0,
  class: "changes-summary"
}, Lh = {
  key: 0,
  class: "change-item"
}, Dh = {
  key: 1,
  class: "change-item"
}, Rh = {
  key: 2,
  class: "change-item"
}, Nh = {
  key: 3,
  class: "change-item"
}, Uh = {
  key: 4,
  class: "change-item"
}, Ph = {
  key: 1,
  class: "no-changes"
}, Oh = {
  key: 2,
  class: "loading"
}, Bh = {
  key: 3,
  class: "issues-error"
}, Fh = { class: "error-header" }, Vh = { class: "error-title" }, Ah = { class: "issues-list" }, Wh = { class: "message-section" }, Gh = { class: "popover-footer" }, jh = {
  key: 1,
  class: "commit-popover"
}, Hh = { class: "popover-header" }, qh = { class: "popover-body" }, Kh = {
  key: 0,
  class: "changes-summary"
}, Jh = {
  key: 0,
  class: "change-item"
}, Yh = {
  key: 1,
  class: "change-item"
}, Xh = {
  key: 2,
  class: "change-item"
}, Qh = {
  key: 3,
  class: "change-item"
}, Zh = {
  key: 4,
  class: "change-item"
}, e1 = {
  key: 1,
  class: "no-changes"
}, t1 = {
  key: 2,
  class: "loading"
}, s1 = {
  key: 3,
  class: "issues-error"
}, o1 = { class: "error-header" }, n1 = { class: "error-title" }, a1 = { class: "issues-list" }, l1 = { class: "message-section" }, i1 = { class: "popover-footer" }, r1 = /* @__PURE__ */ Y({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: u }) {
    const n = t, d = u, { commit: g } = De(), v = _(""), p = _(!1), m = _(!1), l = _(null), c = B(() => {
      if (!n.status) return !1;
      const D = n.status.workflows;
      return D.new.length > 0 || D.modified.length > 0 || D.deleted.length > 0 || n.status.has_changes;
    }), b = B(() => {
      var D;
      return (D = n.status) != null && D.workflows.analyzed ? n.status.workflows.analyzed.filter(
        (S) => S.has_issues && (S.sync_state === "new" || S.sync_state === "modified")
      ) : [];
    }), y = B(() => b.value.length > 0), k = B(() => y.value && !m.value);
    async function $() {
      var D, S, h;
      if (!(y.value && !m.value) && !(!c.value || !v.value.trim() || p.value)) {
        p.value = !0, l.value = null;
        try {
          const M = await g(v.value.trim(), m.value);
          M.status === "success" ? (l.value = {
            type: "success",
            message: `Committed: ${((D = M.summary) == null ? void 0 : D.new) || 0} new, ${((S = M.summary) == null ? void 0 : S.modified) || 0} modified, ${((h = M.summary) == null ? void 0 : h.deleted) || 0} deleted`
          }, v.value = "", m.value = !1, setTimeout(() => d("committed"), 1e3)) : M.status === "no_changes" ? l.value = { type: "error", message: "No changes to commit" } : M.status === "blocked" ? l.value = {
            type: "error",
            message: 'Commit blocked - enable "Allow issues" to force commit'
          } : l.value = { type: "error", message: M.message || "Commit failed" };
        } catch (M) {
          l.value = { type: "error", message: M instanceof Error ? M.message : "Commit failed" };
        } finally {
          p.value = !1;
        }
      }
    }
    return (D, S) => t.asModal ? (s(), I(Oe, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: S[5] || (S[5] = (h) => d("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: S[4] || (S[4] = ze(() => {
          }, ["stop"]))
        }, [
          e("div", Mh, [
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
          e("div", zh, [
            t.status && c.value ? (s(), o("div", Th, [
              t.status.workflows.new.length ? (s(), o("div", Lh, [
                S[12] || (S[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : r("", !0),
              t.status.workflows.modified.length ? (s(), o("div", Dh, [
                S[13] || (S[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
              ])) : r("", !0),
              t.status.workflows.deleted.length ? (s(), o("div", Rh, [
                S[14] || (S[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : r("", !0),
              t.status.git_changes.nodes_added.length ? (s(), o("div", Nh, [
                S[15] || (S[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : r("", !0),
              t.status.git_changes.nodes_removed.length ? (s(), o("div", Uh, [
                S[16] || (S[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : r("", !0)
            ])) : t.status ? (s(), o("div", Ph, " No changes to commit ")) : (s(), o("div", Oh, " Loading... ")),
            y.value ? (s(), o("div", Bh, [
              e("div", Fh, [
                S[17] || (S[17] = e("span", { class: "error-icon" }, "⚠", -1)),
                e("span", Vh, a(b.value.length) + " workflow(s) can't run", 1)
              ]),
              e("div", Ah, [
                (s(!0), o(A, null, te(b.value, (h) => (s(), o("div", {
                  key: h.name,
                  class: "issue-item"
                }, [
                  e("strong", null, a(h.name), 1),
                  w(": " + a(h.issue_summary), 1)
                ]))), 128))
              ]),
              f(us, {
                modelValue: m.value,
                "onUpdate:modelValue": S[1] || (S[1] = (h) => m.value = h),
                class: "allow-issues-toggle"
              }, {
                default: i(() => [...S[18] || (S[18] = [
                  w(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : r("", !0),
            e("div", Wh, [
              f(cs, {
                modelValue: v.value,
                "onUpdate:modelValue": S[2] || (S[2] = (h) => v.value = h),
                placeholder: k.value ? "Enable 'Allow issues' to commit" : c.value ? "Describe your changes..." : "No changes",
                disabled: !c.value || p.value || k.value,
                rows: 3,
                onCtrlEnter: $
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            l.value ? (s(), o("div", {
              key: 4,
              class: ne(["result", l.value.type])
            }, a(l.value.message), 3)) : r("", !0)
          ]),
          e("div", Gh, [
            f(de, {
              variant: "secondary",
              onClick: S[3] || (S[3] = (h) => d("close"))
            }, {
              default: i(() => [...S[19] || (S[19] = [
                w(" Cancel ", -1)
              ])]),
              _: 1
            }),
            f(de, {
              variant: m.value ? "danger" : "primary",
              disabled: !c.value || !v.value.trim() || p.value || k.value,
              loading: p.value,
              onClick: $
            }, {
              default: i(() => [
                w(a(p.value ? "Committing..." : m.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (s(), o("div", jh, [
      e("div", Hh, [
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
      e("div", qh, [
        t.status && c.value ? (s(), o("div", Kh, [
          t.status.workflows.new.length ? (s(), o("div", Jh, [
            S[22] || (S[22] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : r("", !0),
          t.status.workflows.modified.length ? (s(), o("div", Yh, [
            S[23] || (S[23] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
          ])) : r("", !0),
          t.status.workflows.deleted.length ? (s(), o("div", Xh, [
            S[24] || (S[24] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : r("", !0),
          t.status.git_changes.nodes_added.length ? (s(), o("div", Qh, [
            S[25] || (S[25] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : r("", !0),
          t.status.git_changes.nodes_removed.length ? (s(), o("div", Zh, [
            S[26] || (S[26] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : r("", !0)
        ])) : t.status ? (s(), o("div", e1, " No changes to commit ")) : (s(), o("div", t1, " Loading... ")),
        y.value ? (s(), o("div", s1, [
          e("div", o1, [
            S[27] || (S[27] = e("span", { class: "error-icon" }, "⚠", -1)),
            e("span", n1, a(b.value.length) + " workflow(s) can't run", 1)
          ]),
          e("div", a1, [
            (s(!0), o(A, null, te(b.value, (h) => (s(), o("div", {
              key: h.name,
              class: "issue-item"
            }, [
              e("strong", null, a(h.name), 1),
              w(": " + a(h.issue_summary), 1)
            ]))), 128))
          ]),
          f(us, {
            modelValue: m.value,
            "onUpdate:modelValue": S[7] || (S[7] = (h) => m.value = h),
            class: "allow-issues-toggle"
          }, {
            default: i(() => [...S[28] || (S[28] = [
              w(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : r("", !0),
        e("div", l1, [
          f(cs, {
            modelValue: v.value,
            "onUpdate:modelValue": S[8] || (S[8] = (h) => v.value = h),
            placeholder: k.value ? "Enable 'Allow issues' to commit" : c.value ? "Describe your changes..." : "No changes",
            disabled: !c.value || p.value || k.value,
            rows: 3,
            onCtrlEnter: $
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        l.value ? (s(), o("div", {
          key: 4,
          class: ne(["result", l.value.type])
        }, a(l.value.message), 3)) : r("", !0)
      ]),
      e("div", i1, [
        f(de, {
          variant: "secondary",
          onClick: S[9] || (S[9] = (h) => d("close"))
        }, {
          default: i(() => [...S[29] || (S[29] = [
            w(" Cancel ", -1)
          ])]),
          _: 1
        }),
        f(de, {
          variant: m.value ? "danger" : "primary",
          disabled: !c.value || !v.value.trim() || p.value || k.value,
          loading: p.value,
          onClick: $
        }, {
          default: i(() => [
            w(a(p.value ? "Committing..." : m.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), Ss = /* @__PURE__ */ X(r1, [["__scopeId", "data-v-d92153de"]]), d1 = { class: "modal-header" }, c1 = { class: "modal-body" }, u1 = { class: "switch-message" }, m1 = { class: "switch-details" }, v1 = { class: "modal-actions" }, f1 = /* @__PURE__ */ Y({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (u, n) => (s(), I(Oe, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (d) => u.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = ze(() => {
          }, ["stop"]))
        }, [
          e("div", d1, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (d) => u.$emit("close"))
            }, "✕")
          ]),
          e("div", c1, [
            e("p", u1, [
              n[6] || (n[6] = w(" Switch from ", -1)),
              e("strong", null, a(t.fromEnvironment), 1),
              n[7] || (n[7] = w(" to ", -1)),
              e("strong", null, a(t.toEnvironment), 1),
              n[8] || (n[8] = w("? ", -1))
            ]),
            n[9] || (n[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This will restart ComfyUI")
            ], -1)),
            e("p", m1, ' Your current work will be preserved. You can switch back to "' + a(t.fromEnvironment) + '" anytime. ', 1),
            n[10] || (n[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", v1, [
            f(ee, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (d) => u.$emit("close"))
            }, {
              default: i(() => [...n[11] || (n[11] = [
                w(" Cancel ", -1)
              ])]),
              _: 1
            }),
            f(ee, {
              variant: "primary",
              onClick: n[2] || (n[2] = (d) => u.$emit("confirm"))
            }, {
              default: i(() => [...n[12] || (n[12] = [
                w(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : r("", !0)
    ]));
  }
}), g1 = /* @__PURE__ */ X(f1, [["__scopeId", "data-v-e9c5253e"]]), p1 = {
  key: 0,
  class: "modal-overlay"
}, h1 = { class: "modal-content" }, y1 = { class: "modal-body" }, w1 = { class: "progress-info" }, k1 = { class: "progress-percentage" }, b1 = { class: "progress-state" }, _1 = { class: "switch-steps" }, $1 = { class: "step-icon" }, C1 = { class: "step-label" }, x1 = /* @__PURE__ */ Y({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const u = t, n = B(() => {
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
      return u.message || v[u.state] || u.state;
    }), d = B(() => u.state === "complete" ? "success" : u.state === "critical_failure" || u.state === "rolled_back" ? "error" : "default"), g = B(() => {
      const v = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], p = v.findIndex((m) => m.state === u.state);
      return v.map((m, l) => {
        let c = "pending", b = "○";
        return l < p ? (c = "completed", b = "✓") : l === p && (c = "active", b = "⟳"), {
          ...m,
          status: c,
          icon: b
        };
      });
    });
    return (v, p) => (s(), I(Oe, { to: "body" }, [
      t.show ? (s(), o("div", p1, [
        e("div", h1, [
          p[1] || (p[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", y1, [
            f(xs, {
              progress: t.progress,
              variant: d.value
            }, null, 8, ["progress", "variant"]),
            e("div", w1, [
              e("div", k1, a(t.progress) + "%", 1),
              e("div", b1, a(n.value), 1)
            ]),
            e("div", _1, [
              (s(!0), o(A, null, te(g.value, (m) => (s(), o("div", {
                key: m.state,
                class: ne(["switch-step", m.status])
              }, [
                e("span", $1, a(m.icon), 1),
                e("span", C1, a(m.label), 1)
              ], 2))), 128))
            ]),
            p[0] || (p[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : r("", !0)
    ]));
  }
}), S1 = /* @__PURE__ */ X(x1, [["__scopeId", "data-v-768a5078"]]), I1 = { class: "modal-header" }, E1 = { class: "modal-body" }, M1 = {
  key: 0,
  class: "node-section"
}, z1 = { class: "node-list" }, T1 = {
  key: 1,
  class: "node-section"
}, L1 = { class: "node-list" }, D1 = { class: "modal-actions" }, R1 = /* @__PURE__ */ Y({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (u, n) => (s(), I(Oe, { to: "body" }, [
      t.show ? (s(), o("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (d) => u.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = ze(() => {
          }, ["stop"]))
        }, [
          e("div", I1, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (d) => u.$emit("close"))
            }, "✕")
          ]),
          e("div", E1, [
            n[8] || (n[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (s(), o("div", M1, [
              n[6] || (n[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", z1, [
                (s(!0), o(A, null, te(t.mismatchDetails.missing_nodes, (d) => (s(), o("div", {
                  key: d,
                  class: "node-item add"
                }, " + " + a(d), 1))), 128))
              ])
            ])) : r("", !0),
            t.mismatchDetails.extra_nodes.length ? (s(), o("div", T1, [
              n[7] || (n[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", L1, [
                (s(!0), o(A, null, te(t.mismatchDetails.extra_nodes, (d) => (s(), o("div", {
                  key: d,
                  class: "node-item remove"
                }, " - " + a(d), 1))), 128))
              ])
            ])) : r("", !0),
            n[9] || (n[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This may take several minutes")
            ], -1))
          ]),
          e("div", D1, [
            f(ee, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (d) => u.$emit("close"))
            }, {
              default: i(() => [...n[10] || (n[10] = [
                w(" Cancel ", -1)
              ])]),
              _: 1
            }),
            f(ee, {
              variant: "primary",
              onClick: n[2] || (n[2] = (d) => u.$emit("confirm"))
            }, {
              default: i(() => [...n[11] || (n[11] = [
                w(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : r("", !0)
    ]));
  }
}), N1 = /* @__PURE__ */ X(R1, [["__scopeId", "data-v-7cad7518"]]), U1 = {
  key: 0,
  class: "wizard-steps"
}, P1 = { class: "step-number" }, O1 = {
  key: 1,
  class: "wizard-steps wizard-steps--single"
}, B1 = {
  key: 2,
  class: "wizard-step"
}, F1 = { class: "form-field" }, V1 = ["placeholder"], A1 = {
  key: 0,
  class: "form-error"
}, W1 = { class: "form-field form-field--checkbox" }, G1 = { class: "form-checkbox" }, j1 = {
  key: 0,
  class: "form-field"
}, H1 = ["placeholder"], q1 = {
  key: 0,
  class: "form-info"
}, K1 = {
  key: 1,
  class: "form-suggestion"
}, J1 = {
  key: 2,
  class: "form-error"
}, Y1 = {
  key: 3,
  class: "form-info"
}, X1 = {
  key: 3,
  class: "wizard-step"
}, Q1 = {
  key: 0,
  class: "cli-warning"
}, Z1 = {
  key: 1,
  class: "env-selection"
}, ey = { class: "env-list" }, ty = ["value"], sy = { class: "env-name" }, oy = { class: "env-actions" }, ny = { key: 2 }, ay = { class: "wizard-intro" }, ly = { class: "form-field" }, iy = { class: "form-field" }, ry = ["value"], dy = { class: "form-field" }, cy = ["disabled"], uy = ["value"], my = { class: "form-field" }, vy = ["value"], fy = { class: "form-field form-field--checkbox" }, gy = { class: "form-checkbox" }, py = {
  key: 1,
  class: "form-error"
}, Pt = 10, hy = 600 * 1e3, yy = 1800 * 1e3, wy = /* @__PURE__ */ Y({
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
    const n = t, d = u, {
      initializeWorkspace: g,
      getInitializeProgress: v,
      validatePath: p,
      createEnvironment: m,
      getCreateProgress: l,
      getComfyUIReleases: c
    } = De(), b = _(n.initialStep || 1), y = _(null), k = _(!1), $ = _(n.defaultPath), D = _(!!n.detectedModelsDir), S = _(n.detectedModelsDir || ""), h = _(null), M = _(null), V = _(null), L = _(null), N = _("my-new-env"), W = _(_s), R = _("latest"), T = _(Cs), z = _(!0), C = _(null), x = _([{ tag_name: "latest", name: "Latest", published_at: "" }]), G = _(!1), H = _(!1), Z = _(!1), ge = _({ progress: 0, message: "" }), ae = _({ progress: 0, message: "" }), se = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], O = _(0), E = _(null), oe = _(0), Q = _(null), Ee = B(() => {
      var be, re;
      const ie = (be = $.value) == null ? void 0 : be.trim(), q = !h.value, Ce = !D.value || !M.value && ((re = S.value) == null ? void 0 : re.trim());
      return ie && q && Ce;
    }), le = B(() => {
      var ie;
      return (ie = N.value) == null ? void 0 : ie.trim();
    });
    async function He() {
      var ie;
      if (h.value = null, !!((ie = $.value) != null && ie.trim()))
        try {
          const q = await p({ path: $.value, type: "workspace" });
          q.valid || (h.value = q.error || "Invalid path");
        } catch (q) {
          h.value = q instanceof Error ? q.message : "Validation failed";
        }
    }
    async function $e() {
      var ie;
      if (M.value = null, V.value = null, L.value = null, !!((ie = S.value) != null && ie.trim()))
        try {
          const q = await p({ path: S.value, type: "models" });
          if (q.valid)
            L.value = q.model_count ?? null;
          else if (M.value = q.error || "Invalid path", q.suggestion) {
            V.value = q.suggestion, S.value = q.suggestion, M.value = null;
            const Ce = await p({ path: q.suggestion, type: "models" });
            Ce.valid && (L.value = Ce.model_count ?? null);
          }
        } catch (q) {
          M.value = q instanceof Error ? q.message : "Validation failed";
        }
    }
    async function ce() {
      var ie, q, Ce;
      if (h.value = null, M.value = null, await He(), !h.value && !(D.value && ((ie = S.value) != null && ie.trim()) && (await $e(), M.value))) {
        H.value = !0;
        try {
          await g({
            workspace_path: ((q = $.value) == null ? void 0 : q.trim()) || n.defaultPath,
            models_directory: D.value && ((Ce = S.value) == null ? void 0 : Ce.trim()) || null
          }), O.value = 0, E.value = Date.now();
          const be = setInterval(async () => {
            if (E.value && Date.now() - E.value > hy) {
              clearInterval(be), H.value = !1, h.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const re = await v();
              if (O.value = 0, re.state === "idle" && H.value) {
                clearInterval(be), H.value = !1, h.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              ge.value = { progress: re.progress, message: re.message }, re.state === "complete" ? (clearInterval(be), H.value = !1, b.value = 2, Ke()) : re.state === "error" && (clearInterval(be), H.value = !1, h.value = re.error || "Workspace creation failed");
            } catch (re) {
              O.value++, console.warn(`Polling failure ${O.value}/${Pt}:`, re), O.value >= Pt && (clearInterval(be), H.value = !1, h.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (be) {
          H.value = !1, h.value = be instanceof Error ? be.message : "Failed to create workspace";
        }
      }
    }
    async function ve() {
      Z.value = !0, C.value = null;
      try {
        const ie = {
          name: N.value.trim() || "my-new-env",
          python_version: W.value,
          comfyui_version: R.value,
          torch_backend: T.value,
          switch_after: z.value
        };
        if ((await m(ie)).status === "started") {
          oe.value = 0, Q.value = Date.now();
          const Ce = setInterval(async () => {
            if (Q.value && Date.now() - Q.value > yy) {
              clearInterval(Ce), Z.value = !1, C.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const be = await l();
              if (oe.value = 0, be.state === "idle" && Z.value) {
                clearInterval(Ce), Z.value = !1, C.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (ae.value = {
                progress: be.progress ?? 0,
                message: be.message,
                phase: be.phase
              }, be.state === "complete") {
                clearInterval(Ce), Z.value = !1;
                const re = be.environment_name || ie.name;
                z.value ? d("complete", re) : (k.value = !1, d("environment-created-no-switch", re));
              } else be.state === "error" && (clearInterval(Ce), Z.value = !1, C.value = be.error || "Environment creation failed");
            } catch (be) {
              oe.value++, console.warn(`Polling failure ${oe.value}/${Pt}:`, be), oe.value >= Pt && (clearInterval(Ce), Z.value = !1, C.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (ie) {
        Z.value = !1, C.value = ie instanceof Error ? ie.message : "Unknown error";
      }
    }
    async function Ke() {
      G.value = !0;
      try {
        x.value = await c();
      } catch (ie) {
        console.error("Failed to load ComfyUI releases:", ie);
      } finally {
        G.value = !1;
      }
    }
    function ye() {
      y.value && d("switch-environment", y.value);
    }
    return Le(() => {
      n.detectedModelsDir && (S.value = n.detectedModelsDir), b.value === 2 && Ke();
    }), (ie, q) => (s(), I(at, {
      title: "WELCOME TO COMFYGIT",
      size: "lg",
      "show-close-button": !0,
      "close-on-overlay-click": !1,
      onClose: q[12] || (q[12] = (Ce) => ie.$emit("close"))
    }, {
      body: i(() => {
        var Ce, be, re;
        return [
          n.setupState === "no_workspace" ? (s(), o("div", U1, [
            e("div", {
              class: ne(["step", { active: b.value === 1, complete: b.value > 1 }])
            }, [
              e("span", P1, a(b.value > 1 ? "✓" : "1"), 1),
              q[13] || (q[13] = e("span", { class: "step-label" }, "Workspace", -1))
            ], 2),
            q[15] || (q[15] = e("div", { class: "step-connector" }, null, -1)),
            e("div", {
              class: ne(["step", { active: b.value === 2 }])
            }, [...q[14] || (q[14] = [
              e("span", { class: "step-number" }, "2", -1),
              e("span", { class: "step-label" }, "Environment", -1)
            ])], 2)
          ])) : (s(), o("div", O1, [...q[16] || (q[16] = [
            e("div", { class: "step active" }, [
              e("span", { class: "step-number" }, "1"),
              e("span", { class: "step-label" }, "Environment")
            ], -1)
          ])])),
          b.value === 1 ? (s(), o("div", B1, [
            q[20] || (q[20] = e("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
            e("div", F1, [
              q[17] || (q[17] = e("label", { class: "form-label" }, "Workspace Path", -1)),
              Ue(e("input", {
                "onUpdate:modelValue": q[0] || (q[0] = (me) => $.value = me),
                type: "text",
                class: "form-input",
                placeholder: t.defaultPath,
                onBlur: He
              }, null, 40, V1), [
                [zt, $.value]
              ]),
              h.value ? (s(), o("p", A1, a(h.value), 1)) : r("", !0)
            ]),
            e("div", W1, [
              e("label", G1, [
                Ue(e("input", {
                  type: "checkbox",
                  "onUpdate:modelValue": q[1] || (q[1] = (me) => D.value = me)
                }, null, 512), [
                  [qt, D.value]
                ]),
                q[18] || (q[18] = e("span", null, "I have existing ComfyUI models", -1))
              ])
            ]),
            D.value ? (s(), o("div", j1, [
              q[19] || (q[19] = e("label", { class: "form-label" }, "Models Directory", -1)),
              Ue(e("input", {
                "onUpdate:modelValue": q[2] || (q[2] = (me) => S.value = me),
                type: "text",
                class: "form-input",
                placeholder: t.detectedModelsDir || "/path/to/models",
                onBlur: $e
              }, null, 40, H1), [
                [zt, S.value]
              ]),
              t.detectedModelsDir && !S.value ? (s(), o("p", q1, " Detected: " + a(t.detectedModelsDir), 1)) : r("", !0),
              V.value ? (s(), o("p", K1, " Did you mean: " + a(V.value), 1)) : r("", !0),
              M.value ? (s(), o("p", J1, a(M.value), 1)) : r("", !0),
              L.value !== null && !M.value ? (s(), o("p", Y1, " Found " + a(L.value) + " model files ", 1)) : r("", !0)
            ])) : r("", !0),
            H.value ? (s(), I(Yt, {
              key: 1,
              progress: ge.value.progress,
              message: ge.value.message
            }, null, 8, ["progress", "message"])) : r("", !0)
          ])) : r("", !0),
          b.value === 2 ? (s(), o("div", X1, [
            n.cliInstalled ? r("", !0) : (s(), o("div", Q1, [...q[21] || (q[21] = [
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
            (Ce = n.existingEnvironments) != null && Ce.length && !k.value ? (s(), o("div", Z1, [
              q[23] || (q[23] = e("p", { class: "wizard-intro" }, " You have existing managed environments. Switch to one, or create a new environment: ", -1)),
              e("div", ey, [
                (s(!0), o(A, null, te(n.existingEnvironments, (me) => (s(), o("label", {
                  key: me,
                  class: ne(["env-option", { selected: y.value === me }])
                }, [
                  Ue(e("input", {
                    type: "radio",
                    name: "env-select",
                    value: me,
                    "onUpdate:modelValue": q[3] || (q[3] = (mt) => y.value = mt)
                  }, null, 8, ty), [
                    [Gs, y.value]
                  ]),
                  e("span", sy, a(me), 1)
                ], 2))), 128))
              ]),
              e("div", oy, [
                y.value ? (s(), I(de, {
                  key: 0,
                  variant: "primary",
                  onClick: ye
                }, {
                  default: i(() => [
                    w(" Switch to " + a(y.value), 1)
                  ]),
                  _: 1
                })) : r("", !0),
                f(de, {
                  variant: "secondary",
                  onClick: q[4] || (q[4] = (me) => k.value = !0)
                }, {
                  default: i(() => [...q[22] || (q[22] = [
                    w(" + Create New Environment ", -1)
                  ])]),
                  _: 1
                })
              ])
            ])) : r("", !0),
            k.value || !((be = n.existingEnvironments) != null && be.length) ? (s(), o("div", ny, [
              e("p", ay, a((re = n.existingEnvironments) != null && re.length ? "Create a new managed environment:" : "Now let's create your first managed environment. This will be an isolated ComfyUI installation with its own nodes and workflows."), 1),
              e("div", ly, [
                q[24] || (q[24] = e("label", { class: "form-label" }, "Environment Name", -1)),
                Ue(e("input", {
                  "onUpdate:modelValue": q[5] || (q[5] = (me) => N.value = me),
                  type: "text",
                  class: "form-input",
                  placeholder: "my-new-env"
                }, null, 512), [
                  [zt, N.value]
                ])
              ]),
              e("div", iy, [
                q[25] || (q[25] = e("label", { class: "form-label" }, "Python Version", -1)),
                Ue(e("select", {
                  "onUpdate:modelValue": q[6] || (q[6] = (me) => W.value = me),
                  class: "form-select"
                }, [
                  (s(!0), o(A, null, te(ke(bs), (me) => (s(), o("option", {
                    key: me,
                    value: me
                  }, a(me), 9, ry))), 128))
                ], 512), [
                  [wt, W.value]
                ])
              ]),
              e("div", dy, [
                q[26] || (q[26] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
                Ue(e("select", {
                  "onUpdate:modelValue": q[7] || (q[7] = (me) => R.value = me),
                  class: "form-select",
                  disabled: G.value
                }, [
                  (s(!0), o(A, null, te(x.value, (me) => (s(), o("option", {
                    key: me.tag_name,
                    value: me.tag_name
                  }, a(me.name), 9, uy))), 128))
                ], 8, cy), [
                  [wt, R.value]
                ])
              ]),
              e("div", my, [
                q[27] || (q[27] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
                Ue(e("select", {
                  "onUpdate:modelValue": q[8] || (q[8] = (me) => T.value = me),
                  class: "form-select"
                }, [
                  (s(!0), o(A, null, te(ke($s), (me) => (s(), o("option", {
                    key: me,
                    value: me
                  }, a(me) + a(me === "auto" ? " (detect GPU)" : ""), 9, vy))), 128))
                ], 512), [
                  [wt, T.value]
                ])
              ]),
              e("div", fy, [
                e("label", gy, [
                  Ue(e("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": q[9] || (q[9] = (me) => z.value = me)
                  }, null, 512), [
                    [qt, z.value]
                  ]),
                  q[28] || (q[28] = e("span", null, "Switch to this environment after creation", -1))
                ])
              ]),
              Z.value ? (s(), I(Yt, {
                key: 0,
                progress: ae.value.progress,
                message: ae.value.message,
                "current-phase": ae.value.phase,
                "show-steps": !0,
                steps: se
              }, null, 8, ["progress", "message", "current-phase"])) : r("", !0),
              C.value ? (s(), o("div", py, a(C.value), 1)) : r("", !0)
            ])) : r("", !0)
          ])) : r("", !0)
        ];
      }),
      footer: i(() => {
        var Ce, be;
        return [
          b.value === 1 ? (s(), I(de, {
            key: 0,
            variant: "primary",
            disabled: !Ee.value || H.value,
            onClick: ce
          }, {
            default: i(() => [
              w(a(H.value ? "Creating..." : "Next"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : b.value === 2 ? (s(), o(A, { key: 1 }, [
            n.setupState === "no_workspace" ? (s(), I(de, {
              key: 0,
              variant: "secondary",
              disabled: Z.value,
              onClick: q[10] || (q[10] = (re) => b.value = 1)
            }, {
              default: i(() => [...q[29] || (q[29] = [
                w(" Back ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])) : (Ce = n.existingEnvironments) != null && Ce.length && k.value ? (s(), I(de, {
              key: 1,
              variant: "secondary",
              disabled: Z.value,
              onClick: q[11] || (q[11] = (re) => k.value = !1)
            }, {
              default: i(() => [...q[30] || (q[30] = [
                w(" Back ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])) : r("", !0),
            k.value || !((be = n.existingEnvironments) != null && be.length) ? (s(), I(de, {
              key: 2,
              variant: "primary",
              disabled: !le.value || Z.value,
              onClick: ve
            }, {
              default: i(() => [
                w(a(Z.value ? "Creating..." : z.value ? "Create & Switch" : "Create Environment"), 1)
              ]),
              _: 1
            }, 8, ["disabled"])) : r("", !0)
          ], 64)) : r("", !0)
        ];
      }),
      _: 1
    }));
  }
}), ky = /* @__PURE__ */ X(wy, [["__scopeId", "data-v-b8c35e2d"]]), by = { class: "comfygit-panel" }, _y = { class: "panel-header" }, $y = { class: "header-left" }, Cy = {
  key: 0,
  class: "header-info"
}, xy = { class: "header-actions" }, Sy = { class: "env-switcher" }, Iy = {
  key: 0,
  class: "header-info"
}, Ey = { class: "branch-name" }, My = { class: "panel-main" }, zy = { class: "sidebar" }, Ty = { class: "sidebar-section" }, Ly = { class: "sidebar-section" }, Dy = { class: "sidebar-section" }, Ry = { class: "content-area" }, Ny = {
  key: 0,
  class: "error-message"
}, Uy = {
  key: 1,
  class: "loading"
}, Py = { class: "dialog-content env-selector-dialog" }, Oy = { class: "dialog-header" }, By = { class: "dialog-body" }, Fy = { class: "env-list" }, Vy = { class: "env-info" }, Ay = { class: "env-name-row" }, Wy = { class: "env-indicator" }, Gy = { class: "env-name" }, jy = {
  key: 0,
  class: "env-branch"
}, Hy = {
  key: 1,
  class: "current-label"
}, qy = { class: "env-stats" }, Ky = ["onClick"], Jy = { class: "toast-container" }, Yy = { class: "toast-icon" }, Xy = { class: "toast-message" }, Qy = /* @__PURE__ */ Y({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(t, { emit: u }) {
    const n = u, {
      getStatus: d,
      getHistory: g,
      getBranches: v,
      checkout: p,
      createBranch: m,
      switchBranch: l,
      deleteBranch: c,
      getEnvironments: b,
      switchEnvironment: y,
      getSwitchProgress: k,
      deleteEnvironment: $,
      syncEnvironmentManually: D,
      getSetupStatus: S
    } = De(), h = ps(), M = _(null), V = _([]), L = _([]), N = _([]), W = B(() => N.value.find((F) => F.is_current)), R = _(null), T = _(!1), z = _(1), C = B(() => {
      var F;
      return ((F = R.value) == null ? void 0 : F.state) || "managed";
    }), x = _(!1), G = _(null), H = _(null), Z = _(!1), ge = _(null), ae = _(null), se = _(!1), O = _(!1), E = _(""), oe = _({ state: "idle", progress: 0, message: "" });
    let Q = null, Ee = null;
    const le = _("status"), He = _("this-env");
    function $e(F, P) {
      le.value = F, He.value = P;
    }
    function ce(F) {
      const ue = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[F];
      ue && $e(ue.view, ue.section);
    }
    function ve() {
      $e("branches", "this-env");
    }
    function Ke() {
      n("close"), setTimeout(() => {
        var P;
        const F = document.querySelectorAll("button.comfyui-button");
        for (const ue of F)
          if (((P = ue.textContent) == null ? void 0 : P.trim()) === "Manager") {
            ue.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const ye = _(null), ie = _(!1), q = _(!1), Ce = _([]);
    let be = 0;
    function re(F, P = "info", ue = 3e3) {
      const Ie = ++be;
      return Ce.value.push({ id: Ie, message: F, type: P }), ue > 0 && setTimeout(() => {
        Ce.value = Ce.value.filter((Be) => Be.id !== Ie);
      }, ue), Ie;
    }
    function me(F) {
      Ce.value = Ce.value.filter((P) => P.id !== F);
    }
    function mt(F) {
      switch (F) {
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
    const vt = B(() => {
      if (!M.value) return "neutral";
      const F = M.value.workflows, P = F.new.length > 0 || F.modified.length > 0 || F.deleted.length > 0 || M.value.has_changes;
      return M.value.comparison.is_synced ? P ? "warning" : "success" : "error";
    });
    B(() => M.value ? vt.value === "success" ? "All synced" : vt.value === "warning" ? "Uncommitted changes" : vt.value === "error" ? "Not synced" : "" : "");
    async function Re() {
      x.value = !0, G.value = null;
      try {
        const [F, P, ue, Ie] = await Promise.all([
          d(!0),
          g(),
          v(),
          b()
        ]);
        M.value = F, V.value = P.commits, L.value = ue.branches, N.value = Ie, n("statusUpdate", F), ge.value && await ge.value.loadWorkflows(!0);
      } catch (F) {
        G.value = F instanceof Error ? F.message : "Failed to load status", M.value = null, V.value = [], L.value = [];
      } finally {
        x.value = !1;
      }
    }
    function $t(F) {
      H.value = F;
    }
    async function pt(F) {
      var ue;
      H.value = null;
      const P = M.value && (M.value.workflows.new.length > 0 || M.value.workflows.modified.length > 0 || M.value.workflows.deleted.length > 0 || M.value.has_changes);
      ye.value = {
        title: P ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: P ? "You have uncommitted changes that will be lost." : `Checkout commit ${F.short_hash || ((ue = F.hash) == null ? void 0 : ue.slice(0, 7))}?`,
        details: P ? as() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: P ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: P,
        onConfirm: async () => {
          var Fe;
          ye.value = null, tt();
          const Ie = re(`Checking out ${F.short_hash || ((Fe = F.hash) == null ? void 0 : Fe.slice(0, 7))}...`, "info", 0), Be = await p(F.hash, P);
          me(Ie), Be.status === "success" ? re("Restarting ComfyUI...", "success") : re(Be.message || "Checkout failed", "error");
        }
      };
    }
    async function K(F) {
      const P = M.value && (M.value.workflows.new.length > 0 || M.value.workflows.modified.length > 0 || M.value.workflows.deleted.length > 0 || M.value.has_changes);
      ye.value = {
        title: P ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: P ? "You have uncommitted changes." : `Switch to branch "${F}"?`,
        details: P ? as() : void 0,
        warning: P ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: P ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          ye.value = null, tt();
          const ue = re(`Switching to ${F}...`, "info", 0), Ie = await l(F, P);
          me(ue), Ie.status === "success" ? re("Restarting ComfyUI...", "success") : re(Ie.message || "Branch switch failed", "error");
        }
      };
    }
    async function pe(F) {
      const P = re(`Creating branch ${F}...`, "info", 0), ue = await m(F);
      me(P), ue.status === "success" ? (re(`Branch "${F}" created`, "success"), await Re()) : re(ue.message || "Failed to create branch", "error");
    }
    async function xe(F, P = !1) {
      const ue = async (Ie) => {
        var Fe;
        const Be = re(`Deleting branch ${F}...`, "info", 0);
        try {
          const st = await c(F, Ie);
          me(Be), st.status === "success" ? (re(`Branch "${F}" deleted`, "success"), await Re()) : (Fe = st.message) != null && Fe.includes("not fully merged") ? ye.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${F}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              ye.value = null, await ue(!0);
            }
          } : re(st.message || "Failed to delete branch", "error");
        } catch (st) {
          me(Be);
          const Ct = st instanceof Error ? st.message : "Failed to delete branch";
          Ct.includes("not fully merged") ? ye.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${F}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              ye.value = null, await ue(!0);
            }
          } : re(Ct, "error");
        }
      };
      ye.value = {
        title: "Delete Branch",
        message: `Delete branch "${F}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          ye.value = null, await ue(P);
        }
      };
    }
    async function Ne(F) {
      H.value = null;
      const P = prompt("Enter branch name:");
      if (P) {
        const ue = re(`Creating branch ${P}...`, "info", 0), Ie = await m(P, F.hash);
        me(ue), Ie.status === "success" ? (re(`Branch "${P}" created from ${F.short_hash}`, "success"), await Re()) : re(Ie.message || "Failed to create branch", "error");
      }
    }
    function tt() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function Wt() {
      ye.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var F;
          ye.value = null, tt(), re("Restarting environment...", "info");
          try {
            (F = window.app) != null && F.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function j() {
      ye.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var F;
          ye.value = null, re("Stopping environment...", "info");
          try {
            (F = window.app) != null && F.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function U(F) {
      Z.value = !1, E.value = F, se.value = !0;
    }
    async function J() {
      se.value = !1, O.value = !0, tt(), oe.value = {
        progress: 10,
        state: he(10),
        message: Me(10)
      };
      try {
        await y(E.value), dt(), Nt();
      } catch (F) {
        We(), O.value = !1, re(`Failed to initiate switch: ${F instanceof Error ? F.message : "Unknown error"}`, "error"), oe.value = { state: "idle", progress: 0, message: "" };
      }
    }
    function he(F) {
      return F >= 100 ? "complete" : F >= 80 ? "validating" : F >= 60 ? "starting" : F >= 30 ? "syncing" : "preparing";
    }
    function Me(F) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[he(F)] || "";
    }
    function dt() {
      if (Ee) return;
      let F = 10;
      const P = 60, ue = 5e3, Ie = 100, Be = (P - F) / (ue / Ie);
      Ee = window.setInterval(() => {
        if (F += Be, F >= P && (F = P, We()), oe.value.progress < P) {
          const Fe = Math.floor(F);
          oe.value = {
            progress: Fe,
            state: he(Fe),
            message: Me(Fe)
          };
        }
      }, Ie);
    }
    function We() {
      Ee && (clearInterval(Ee), Ee = null);
    }
    function Nt() {
      Q || (Q = window.setInterval(async () => {
        try {
          let F = await h.getStatus();
          if ((!F || F.state === "idle") && (F = await k()), !F)
            return;
          const P = F.progress || 0;
          P >= 60 && We();
          const ue = Math.max(P, oe.value.progress), Ie = F.state && F.state !== "idle" && F.state !== "unknown", Be = Ie ? F.state : he(ue), Fe = Ie && F.message || Me(ue);
          oe.value = {
            state: Be,
            progress: ue,
            message: Fe
          }, F.state === "complete" ? (We(), ht(), O.value = !1, re(`✓ Switched to ${E.value}`, "success"), await Re(), E.value = "") : F.state === "rolled_back" ? (We(), ht(), O.value = !1, re("Switch failed, restored previous environment", "warning"), E.value = "") : F.state === "critical_failure" && (We(), ht(), O.value = !1, re(`Critical error during switch: ${F.message}`, "error"), E.value = "");
        } catch (F) {
          console.error("Failed to poll switch progress:", F);
        }
      }, 1e3));
    }
    function ht() {
      We(), Q && (clearInterval(Q), Q = null);
    }
    function Ut() {
      var F;
      se.value = !1, E.value = "", (F = R.value) != null && F.state && R.value.state !== "managed" && (z.value = R.value.state === "no_workspace" ? 1 : 2, T.value = !0);
    }
    async function Ls() {
      ie.value = !1, await Re(), re("✓ Changes committed", "success");
    }
    async function Ds() {
      q.value = !1;
      const F = re("Syncing environment...", "info", 0);
      try {
        const P = await D("skip", !0);
        if (me(F), P.status === "success") {
          const ue = [];
          P.nodes_installed.length && ue.push(`${P.nodes_installed.length} installed`), P.nodes_removed.length && ue.push(`${P.nodes_removed.length} removed`);
          const Ie = ue.length ? `: ${ue.join(", ")}` : "";
          re(`✓ Environment synced${Ie}`, "success"), await Re();
        } else {
          const ue = P.errors.length ? P.errors.join("; ") : P.message;
          re(`Sync failed: ${ue}`, "error");
        }
      } catch (P) {
        me(F), re(`Sync error: ${P instanceof Error ? P.message : "Unknown error"}`, "error");
      }
    }
    async function Rs(F, P) {
      re(`Environment '${F}' created`, "success"), await Re(), ae.value && await ae.value.loadEnvironments(), P && await U(F);
    }
    async function Ns(F) {
      var P;
      if (((P = W.value) == null ? void 0 : P.name) === F) {
        re("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      ye.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${F}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          ye.value = null;
          try {
            const ue = await $(F);
            ue.status === "success" ? (re(`Environment "${F}" deleted`, "success"), await Re(), ae.value && await ae.value.loadEnvironments()) : re(ue.message || "Failed to delete environment", "error");
          } catch (ue) {
            re(`Error deleting environment: ${ue instanceof Error ? ue.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function Us(F) {
      T.value = !1;
      try {
        R.value = await S();
      } catch {
      }
      await U(F);
    }
    function Ps() {
      T.value = !1, n("close");
    }
    async function Os(F) {
      await U(F);
    }
    async function Bs(F) {
      R.value = await S(), console.log(`Environment '${F}' created. Available for switching.`);
    }
    function Fs() {
      $e("environments", "all-envs"), setTimeout(() => {
        var F;
        (F = ae.value) == null || F.openCreateModal();
      }, 100);
    }
    function as() {
      if (!M.value) return [];
      const F = [], P = M.value.workflows;
      return P.new.length && F.push(`${P.new.length} new workflow(s)`), P.modified.length && F.push(`${P.modified.length} modified workflow(s)`), P.deleted.length && F.push(`${P.deleted.length} deleted workflow(s)`), F;
    }
    return Le(async () => {
      try {
        if (R.value = await S(), R.value.state === "no_workspace") {
          T.value = !0, z.value = 1;
          return;
        }
        if (R.value.state === "empty_workspace") {
          T.value = !0, z.value = 2;
          return;
        }
        if (R.value.state === "unmanaged") {
          T.value = !0, z.value = 2;
          return;
        }
      } catch (F) {
        console.warn("Setup status check failed, proceeding normally:", F);
      }
      await Re();
    }), (F, P) => {
      var ue, Ie, Be, Fe, st, Ct, ls, is, rs;
      return s(), o("div", by, [
        e("div", _y, [
          e("div", $y, [
            P[29] || (P[29] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            M.value ? (s(), o("div", Cy)) : r("", !0)
          ]),
          e("div", xy, [
            e("button", {
              class: ne(["icon-btn", { spinning: x.value }]),
              onClick: Re,
              title: "Refresh"
            }, [...P[30] || (P[30] = [
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
              onClick: P[0] || (P[0] = (fe) => n("close")),
              title: "Close"
            }, [...P[31] || (P[31] = [
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
        e("div", Sy, [
          e("div", { class: "env-switcher-header" }, [
            P[32] || (P[32] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            e("div", { class: "env-control-buttons" }, [
              e("button", {
                class: "env-control-btn",
                title: "Restart environment",
                onClick: Wt
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
            onClick: P[1] || (P[1] = (fe) => $e("environments", "all-envs"))
          }, [
            M.value ? (s(), o("div", Iy, [
              e("span", null, a(((ue = W.value) == null ? void 0 : ue.name) || ((Ie = M.value) == null ? void 0 : Ie.environment) || "Loading..."), 1),
              e("span", Ey, "(" + a(M.value.branch || "detached") + ")", 1)
            ])) : r("", !0),
            P[33] || (P[33] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", My, [
          e("div", zy, [
            e("div", Ty, [
              P[34] || (P[34] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              e("button", {
                class: ne(["sidebar-item", { active: le.value === "status" && He.value === "this-env" }]),
                onClick: P[2] || (P[2] = (fe) => $e("status", "this-env"))
              }, " STATUS ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: le.value === "workflows" }]),
                onClick: P[3] || (P[3] = (fe) => $e("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: le.value === "models-env" }]),
                onClick: P[4] || (P[4] = (fe) => $e("models-env", "this-env"))
              }, " MODELS ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: le.value === "branches" }]),
                onClick: P[5] || (P[5] = (fe) => $e("branches", "this-env"))
              }, " BRANCHES ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: le.value === "history" }]),
                onClick: P[6] || (P[6] = (fe) => $e("history", "this-env"))
              }, " HISTORY ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: le.value === "nodes" }]),
                onClick: P[7] || (P[7] = (fe) => $e("nodes", "this-env"))
              }, " NODES ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: le.value === "debug-env" }]),
                onClick: P[8] || (P[8] = (fe) => $e("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            P[37] || (P[37] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", Ly, [
              P[35] || (P[35] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              e("button", {
                class: ne(["sidebar-item", { active: le.value === "environments" }]),
                onClick: P[9] || (P[9] = (fe) => $e("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: le.value === "model-index" }]),
                onClick: P[10] || (P[10] = (fe) => $e("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: le.value === "settings" }]),
                onClick: P[11] || (P[11] = (fe) => $e("settings", "all-envs"))
              }, " SETTINGS ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: le.value === "debug-workspace" }]),
                onClick: P[12] || (P[12] = (fe) => $e("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            P[38] || (P[38] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", Dy, [
              P[36] || (P[36] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              e("button", {
                class: ne(["sidebar-item", { active: le.value === "export" }]),
                onClick: P[13] || (P[13] = (fe) => $e("export", "sharing"))
              }, " EXPORT ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: le.value === "import" }]),
                onClick: P[14] || (P[14] = (fe) => $e("import", "sharing"))
              }, " IMPORT ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: le.value === "remotes" }]),
                onClick: P[15] || (P[15] = (fe) => $e("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          e("div", Ry, [
            G.value ? (s(), o("div", Ny, a(G.value), 1)) : !M.value && le.value === "status" ? (s(), o("div", Uy, " Loading status... ")) : (s(), o(A, { key: 2 }, [
              le.value === "status" ? (s(), I(ha, {
                key: 0,
                status: M.value,
                "setup-state": C.value,
                onSwitchBranch: ve,
                onCommitChanges: P[16] || (P[16] = (fe) => ie.value = !0),
                onSyncEnvironment: P[17] || (P[17] = (fe) => q.value = !0),
                onViewWorkflows: P[18] || (P[18] = (fe) => $e("workflows", "this-env")),
                onViewHistory: P[19] || (P[19] = (fe) => $e("history", "this-env")),
                onViewDebug: P[20] || (P[20] = (fe) => $e("debug-env", "this-env")),
                onStartSetup: P[21] || (P[21] = (fe) => T.value = !0),
                onViewEnvironments: P[22] || (P[22] = (fe) => $e("environments", "all-envs")),
                onCreateEnvironment: Fs
              }, null, 8, ["status", "setup-state"])) : le.value === "workflows" ? (s(), I(Bu, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: ge,
                onRefresh: Re
              }, null, 512)) : le.value === "models-env" ? (s(), I(bm, {
                key: 2,
                onNavigate: ce
              })) : le.value === "branches" ? (s(), I(La, {
                key: 3,
                branches: L.value,
                current: ((Be = M.value) == null ? void 0 : Be.branch) || null,
                onSwitch: K,
                onCreate: pe,
                onDelete: xe
              }, null, 8, ["branches", "current"])) : le.value === "history" ? (s(), I(Wa, {
                key: 4,
                commits: V.value,
                onSelect: $t,
                onCheckout: pt
              }, null, 8, ["commits"])) : le.value === "nodes" ? (s(), I(dv, {
                key: 5,
                onOpenNodeManager: Ke
              })) : le.value === "debug-env" ? (s(), I(df, { key: 6 })) : le.value === "environments" ? (s(), I(mg, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: ae,
                onSwitch: U,
                onCreated: Rs,
                onDelete: Ns
              }, null, 512)) : le.value === "model-index" ? (s(), I(Vm, {
                key: 8,
                onRefresh: Re
              })) : le.value === "settings" ? (s(), I(nf, { key: 9 })) : le.value === "debug-workspace" ? (s(), I(lf, { key: 10 })) : le.value === "export" ? (s(), I(_g, { key: 11 })) : le.value === "import" ? (s(), I(Yp, { key: 12 })) : le.value === "remotes" ? (s(), I(Bv, { key: 13 })) : r("", !0)
            ], 64))
          ])
        ]),
        H.value ? (s(), I(fh, {
          key: 0,
          commit: H.value,
          onClose: P[23] || (P[23] = (fe) => H.value = null),
          onCheckout: pt,
          onCreateBranch: Ne
        }, null, 8, ["commit"])) : r("", !0),
        ye.value ? (s(), I(wh, {
          key: 1,
          title: ye.value.title,
          message: ye.value.message,
          details: ye.value.details,
          warning: ye.value.warning,
          confirmLabel: ye.value.confirmLabel,
          cancelLabel: ye.value.cancelLabel,
          secondaryLabel: ye.value.secondaryLabel,
          secondaryAction: ye.value.secondaryAction,
          destructive: ye.value.destructive,
          onConfirm: ye.value.onConfirm,
          onCancel: P[24] || (P[24] = (fe) => ye.value = null),
          onSecondary: ye.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : r("", !0),
        f(g1, {
          show: se.value,
          "from-environment": ((Fe = W.value) == null ? void 0 : Fe.name) || "unknown",
          "to-environment": E.value,
          onConfirm: J,
          onClose: Ut
        }, null, 8, ["show", "from-environment", "to-environment"]),
        ie.value && M.value ? (s(), I(Ss, {
          key: 2,
          status: M.value,
          "as-modal": !0,
          onClose: P[25] || (P[25] = (fe) => ie.value = !1),
          onCommitted: Ls
        }, null, 8, ["status"])) : r("", !0),
        q.value && M.value ? (s(), I(N1, {
          key: 3,
          show: q.value,
          "mismatch-details": {
            missing_nodes: M.value.comparison.missing_nodes,
            extra_nodes: M.value.comparison.extra_nodes
          },
          onConfirm: Ds,
          onClose: P[26] || (P[26] = (fe) => q.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : r("", !0),
        f(S1, {
          show: O.value,
          state: oe.value.state,
          progress: oe.value.progress,
          message: oe.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        Z.value ? (s(), o("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: P[28] || (P[28] = ze((fe) => Z.value = !1, ["self"]))
        }, [
          e("div", Py, [
            e("div", Oy, [
              P[40] || (P[40] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: P[27] || (P[27] = (fe) => Z.value = !1)
              }, [...P[39] || (P[39] = [
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
            e("div", By, [
              P[41] || (P[41] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", Fy, [
                (s(!0), o(A, null, te(N.value, (fe) => (s(), o("div", {
                  key: fe.name,
                  class: ne(["env-item", { current: fe.is_current }])
                }, [
                  e("div", Vy, [
                    e("div", Ay, [
                      e("span", Wy, a(fe.is_current ? "●" : "○"), 1),
                      e("span", Gy, a(fe.name), 1),
                      fe.current_branch ? (s(), o("span", jy, "(" + a(fe.current_branch) + ")", 1)) : r("", !0),
                      fe.is_current ? (s(), o("span", Hy, "CURRENT")) : r("", !0)
                    ]),
                    e("div", qy, a(fe.workflow_count) + " workflows • " + a(fe.node_count) + " nodes ", 1)
                  ]),
                  fe.is_current ? r("", !0) : (s(), o("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (a0) => U(fe.name)
                  }, " SWITCH ", 8, Ky))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : r("", !0),
        T.value ? (s(), I(ky, {
          key: 5,
          "default-path": ((st = R.value) == null ? void 0 : st.default_path) || "~/comfygit",
          "detected-models-dir": ((Ct = R.value) == null ? void 0 : Ct.detected_models_dir) || null,
          "initial-step": z.value,
          "existing-environments": ((ls = R.value) == null ? void 0 : ls.environments) || [],
          "cli-installed": ((is = R.value) == null ? void 0 : is.cli_installed) ?? !0,
          "setup-state": ((rs = R.value) == null ? void 0 : rs.state) || "no_workspace",
          onComplete: Us,
          onClose: Ps,
          onSwitchEnvironment: Os,
          onEnvironmentCreatedNoSwitch: Bs
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state"])) : r("", !0),
        e("div", Jy, [
          f(js, { name: "toast" }, {
            default: i(() => [
              (s(!0), o(A, null, te(Ce.value, (fe) => (s(), o("div", {
                key: fe.id,
                class: ne(["toast", fe.type])
              }, [
                e("span", Yy, a(mt(fe.type)), 1),
                e("span", Xy, a(fe.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), Zy = /* @__PURE__ */ X(Qy, [["__scopeId", "data-v-31ffb334"]]), ew = { class: "item-header" }, tw = { class: "item-info" }, sw = { class: "filename" }, ow = { class: "metadata" }, nw = { class: "size" }, aw = {
  key: 0,
  class: "type"
}, lw = { class: "item-actions" }, iw = {
  key: 0,
  class: "progress-section"
}, rw = { class: "progress-bar" }, dw = { class: "progress-stats" }, cw = { class: "downloaded" }, uw = { class: "speed" }, mw = {
  key: 0,
  class: "eta"
}, vw = {
  key: 1,
  class: "status-msg paused"
}, fw = {
  key: 2,
  class: "status-msg queued"
}, gw = {
  key: 3,
  class: "status-msg completed"
}, pw = {
  key: 4,
  class: "status-msg failed"
}, hw = {
  key: 0,
  class: "retries"
}, yw = /* @__PURE__ */ Y({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(t, { emit: u }) {
    const n = u;
    function d(p) {
      if (p === 0) return "?";
      const m = p / (1024 * 1024 * 1024);
      return m >= 1 ? `${m.toFixed(2)} GB` : `${(p / (1024 * 1024)).toFixed(1)} MB`;
    }
    function g(p) {
      return p === 0 ? "-" : `${(p / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function v(p) {
      if (p < 60) return `${Math.round(p)}s`;
      const m = Math.floor(p / 60);
      return m < 60 ? `${m}m` : `${Math.floor(m / 60)}h ${m % 60}m`;
    }
    return (p, m) => (s(), o("div", {
      class: ne(["download-item", `status-${t.item.status}`])
    }, [
      e("div", ew, [
        e("div", tw, [
          e("div", sw, a(t.item.filename), 1),
          e("div", ow, [
            e("span", nw, a(d(t.item.size)), 1),
            t.item.type ? (s(), o("span", aw, a(t.item.type), 1)) : r("", !0)
          ])
        ]),
        e("div", lw, [
          t.item.status === "queued" || t.item.status === "downloading" ? (s(), o("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: m[0] || (m[0] = (l) => n("cancel")),
            title: "Cancel"
          }, " × ")) : r("", !0),
          t.item.status === "paused" ? (s(), o("button", {
            key: 1,
            class: "action-icon resume",
            onClick: m[1] || (m[1] = (l) => n("resume")),
            title: "Resume"
          }, " ▶ ")) : r("", !0),
          t.item.status === "failed" ? (s(), o("button", {
            key: 2,
            class: "action-icon retry",
            onClick: m[2] || (m[2] = (l) => n("retry")),
            title: "Retry"
          }, " ↻ ")) : r("", !0),
          t.item.status === "completed" || t.item.status === "failed" || t.item.status === "paused" ? (s(), o("button", {
            key: 3,
            class: "action-icon remove",
            onClick: m[3] || (m[3] = (l) => n("remove")),
            title: "Remove"
          }, " × ")) : r("", !0)
        ])
      ]),
      t.item.status === "downloading" ? (s(), o("div", iw, [
        e("div", rw, [
          e("div", {
            class: "progress-fill",
            style: nt({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", dw, [
          e("span", cw, a(d(t.item.downloaded)) + " / " + a(d(t.item.size)), 1),
          e("span", uw, a(g(t.item.speed)), 1),
          t.item.eta > 0 ? (s(), o("span", mw, a(v(t.item.eta)), 1)) : r("", !0)
        ])
      ])) : t.item.status === "paused" ? (s(), o("div", vw, " Paused - click Resume to download ")) : t.item.status === "queued" ? (s(), o("div", fw, " Waiting in queue... ")) : t.item.status === "completed" ? (s(), o("div", gw, " ✓ Downloaded ")) : t.item.status === "failed" ? (s(), o("div", pw, [
        w(" ✗ " + a(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (s(), o("span", hw, "(" + a(t.item.retries) + " retries)", 1)) : r("", !0)
      ])) : r("", !0)
    ], 2));
  }
}), It = /* @__PURE__ */ X(yw, [["__scopeId", "data-v-2110df65"]]), ww = { class: "queue-title" }, kw = { class: "count" }, bw = { class: "queue-actions" }, _w = { class: "action-label" }, $w = {
  key: 0,
  class: "overall-progress"
}, Cw = { class: "progress-bar" }, xw = {
  key: 0,
  class: "current-mini"
}, Sw = { class: "filename" }, Iw = { class: "speed" }, Ew = {
  key: 1,
  class: "queue-content"
}, Mw = {
  key: 0,
  class: "section"
}, zw = {
  key: 1,
  class: "section"
}, Tw = { class: "section-header" }, Lw = { class: "section-label paused" }, Dw = { class: "items-list" }, Rw = {
  key: 2,
  class: "section"
}, Nw = { class: "section-header" }, Uw = { class: "section-label" }, Pw = { class: "items-list" }, Ow = {
  key: 3,
  class: "section"
}, Bw = { class: "section-header" }, Fw = { class: "section-label" }, Vw = { class: "items-list" }, Aw = {
  key: 4,
  class: "section"
}, Ww = { class: "section-header" }, Gw = { class: "section-label failed" }, jw = { class: "items-list" }, Hw = /* @__PURE__ */ Y({
  __name: "ModelDownloadQueue",
  setup(t) {
    const {
      queue: u,
      currentDownload: n,
      queuedItems: d,
      completedItems: g,
      failedItems: v,
      pausedItems: p,
      hasItems: m,
      activeCount: l,
      cancelDownload: c,
      retryDownload: b,
      resumeDownload: y,
      resumeAllPaused: k,
      removeItem: $,
      clearCompleted: D
    } = Rt(), S = _(!1);
    let h = null;
    Vt(
      () => ({
        active: l.value,
        failed: v.value.length,
        paused: p.value.length,
        completed: g.value.length
      }),
      (N, W) => {
        h && (clearTimeout(h), h = null);
        const R = N.active === 0 && N.failed === 0 && N.paused === 0 && N.completed > 0, T = W && (W.active > 0 || W.paused > 0);
        R && T && (h = setTimeout(() => {
          D(), h = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const M = B(() => {
      var R;
      if (u.items.length === 0) return 0;
      const N = g.value.length, W = ((R = n.value) == null ? void 0 : R.progress) || 0;
      return Math.round((N + W / 100) / u.items.length * 100);
    });
    function V(N) {
      c(N);
    }
    function L(N) {
      return N === 0 ? "" : `${(N / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (N, W) => (s(), I(Oe, { to: "body" }, [
      ke(m) ? (s(), o("div", {
        key: 0,
        class: ne(["model-download-queue", { minimized: !S.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: W[0] || (W[0] = (R) => S.value = !S.value)
        }, [
          e("div", ww, [
            W[4] || (W[4] = e("span", { class: "icon" }, "↓", -1)),
            W[5] || (W[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", kw, "(" + a(ke(l)) + "/" + a(ke(u).items.length) + ")", 1)
          ]),
          e("div", bw, [
            e("span", _w, a(S.value ? "minimize" : "expand"), 1)
          ])
        ]),
        S.value ? (s(), o("div", Ew, [
          ke(n) ? (s(), o("div", Mw, [
            W[6] || (W[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            f(It, {
              item: ke(n),
              onCancel: W[1] || (W[1] = (R) => V(ke(n).id))
            }, null, 8, ["item"])
          ])) : r("", !0),
          ke(p).length > 0 ? (s(), o("div", zw, [
            e("div", Tw, [
              e("span", Lw, "Paused (" + a(ke(p).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: W[2] || (W[2] = //@ts-ignore
                (...R) => ke(k) && ke(k)(...R))
              }, "Resume All")
            ]),
            e("div", Dw, [
              (s(!0), o(A, null, te(ke(p), (R) => (s(), I(It, {
                key: R.id,
                item: R,
                onResume: (T) => ke(y)(R.id),
                onRemove: (T) => ke($)(R.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : r("", !0),
          ke(d).length > 0 ? (s(), o("div", Rw, [
            e("div", Nw, [
              e("span", Uw, "Queued (" + a(ke(d).length) + ")", 1)
            ]),
            e("div", Pw, [
              (s(!0), o(A, null, te(ke(d), (R) => (s(), I(It, {
                key: R.id,
                item: R,
                onCancel: (T) => V(R.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : r("", !0),
          ke(g).length > 0 ? (s(), o("div", Ow, [
            e("div", Bw, [
              e("span", Fw, "Completed (" + a(ke(g).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: W[3] || (W[3] = //@ts-ignore
                (...R) => ke(D) && ke(D)(...R))
              }, "Clear")
            ]),
            e("div", Vw, [
              (s(!0), o(A, null, te(ke(g).slice(0, 3), (R) => (s(), I(It, {
                key: R.id,
                item: R,
                onRemove: (T) => ke($)(R.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : r("", !0),
          ke(v).length > 0 ? (s(), o("div", Aw, [
            e("div", Ww, [
              e("span", Gw, "Failed (" + a(ke(v).length) + ")", 1)
            ]),
            e("div", jw, [
              (s(!0), o(A, null, te(ke(v), (R) => (s(), I(It, {
                key: R.id,
                item: R,
                onRetry: (T) => ke(b)(R.id),
                onRemove: (T) => ke($)(R.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : r("", !0)
        ])) : (s(), o("div", $w, [
          e("div", Cw, [
            e("div", {
              class: "progress-fill",
              style: nt({ width: `${M.value}%` })
            }, null, 4)
          ]),
          ke(n) ? (s(), o("div", xw, [
            e("span", Sw, a(ke(n).filename), 1),
            e("span", Iw, a(L(ke(n).speed)), 1)
          ])) : r("", !0)
        ]))
      ], 2)) : r("", !0)
    ]));
  }
}), qw = /* @__PURE__ */ X(Hw, [["__scopeId", "data-v-60751cfa"]]), Kw = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', Jw = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', Yw = {
  comfy: Kw,
  phosphor: Jw
}, os = "comfy", Is = "comfygit-theme";
let ft = null, Es = os;
function Xw() {
  try {
    const t = localStorage.getItem(Is);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return os;
}
function Ms(t = os) {
  ft && ft.remove(), ft = document.createElement("style"), ft.id = "comfygit-theme-styles", ft.setAttribute("data-theme", t), ft.textContent = Yw[t], document.head.appendChild(ft), document.body.setAttribute("data-comfygit-theme", t), Es = t;
  try {
    localStorage.setItem(Is, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function Qw() {
  return Es;
}
function Zw(t) {
  Ms(t);
}
const ns = document.createElement("link");
ns.rel = "stylesheet";
ns.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(ns);
const e0 = Xw();
Ms(e0);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), Zw(t);
  },
  getTheme: () => {
    const t = Qw();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let Je = null, Ge = null, Lt = null, Et = null, ms = null;
const kt = _(null);
let zs = "managed";
async function Ot() {
  var t;
  if (!((t = ct) != null && t.api)) return null;
  try {
    const u = await ct.api.fetchApi("/v2/comfygit/status");
    u.ok && (kt.value = await u.json());
  } catch {
  }
}
async function Xt() {
  var t;
  if ((t = ct) != null && t.api)
    try {
      const u = await ct.api.fetchApi("/v2/setup/status");
      u.ok && (zs = (await u.json()).state);
    } catch {
    }
}
function t0() {
  if (!kt.value) return !1;
  const t = kt.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || kt.value.has_changes;
}
function s0() {
  Je && Je.remove(), Je = document.createElement("div"), Je.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", Je.appendChild(t), Je.addEventListener("click", (d) => {
    d.target === Je && Ht();
  });
  const u = (d) => {
    d.key === "Escape" && (Ht(), document.removeEventListener("keydown", u));
  };
  document.addEventListener("keydown", u), ts({
    render: () => ss(Zy, {
      onClose: Ht,
      onStatusUpdate: async (d) => {
        kt.value = d, Dt(), await Xt(), Qt();
      }
    })
  }).mount(t), document.body.appendChild(Je);
}
function Ht() {
  Je && (Je.remove(), Je = null);
}
function o0(t) {
  Mt(), Ge = document.createElement("div"), Ge.className = "comfygit-commit-popover-container";
  const u = t.getBoundingClientRect();
  Ge.style.position = "fixed", Ge.style.top = `${u.bottom + 8}px`, Ge.style.right = `${window.innerWidth - u.right}px`, Ge.style.zIndex = "10001";
  const n = (g) => {
    Ge && !Ge.contains(g.target) && g.target !== t && (Mt(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const d = (g) => {
    g.key === "Escape" && (Mt(), document.removeEventListener("keydown", d));
  };
  document.addEventListener("keydown", d), Lt = ts({
    render: () => ss(Ss, {
      status: kt.value,
      onClose: Mt,
      onCommitted: () => {
        Mt(), Ot().then(Dt);
      }
    })
  }), Lt.mount(Ge), document.body.appendChild(Ge);
}
function Mt() {
  Lt && (Lt.unmount(), Lt = null), Ge && (Ge.remove(), Ge = null);
}
function n0() {
  Et || (Et = document.createElement("div"), Et.className = "comfygit-download-queue-root", ms = ts({
    render: () => ss(qw)
  }), ms.mount(Et), document.body.appendChild(Et), console.log("[ComfyGit] Model download queue mounted"));
}
let qe = null;
function Dt() {
  if (!qe) return;
  const t = qe.querySelector(".commit-indicator");
  t && (t.style.display = t0() ? "block" : "none");
}
function Qt() {
  if (!qe) return;
  const t = zs !== "managed";
  qe.disabled = t, qe.title = t ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
}
const Ts = document.createElement("style");
Ts.textContent = `
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
document.head.appendChild(Ts);
ct.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var g, v;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const u = document.createElement("button");
    u.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", u.textContent = "ComfyGit", u.title = "ComfyGit Control Panel", u.onclick = s0, qe = document.createElement("button"), qe.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", qe.innerHTML = 'Commit <span class="commit-indicator"></span>', qe.title = "Quick Commit", qe.onclick = () => o0(qe), t.appendChild(u), t.appendChild(qe), (v = (g = ct.menu) == null ? void 0 : g.settingsGroup) != null && v.element && (ct.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), n0();
    const { loadPendingDownloads: n } = Rt();
    n(), await Promise.all([Ot(), Xt()]), Dt(), Qt(), setInterval(async () => {
      await Promise.all([Ot(), Xt()]), Dt(), Qt();
    }, 3e4);
    const d = ct.api;
    if (d) {
      let p = function() {
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
        const b = document.createElement("span");
        b.textContent = "Workflows updated - refresh required", c.appendChild(b);
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
        `, y.onmouseover = () => y.style.background = "var(--comfy-input-bg)", y.onmouseout = () => y.style.background = "var(--comfy-menu-bg)", y.onclick = () => p(), c.appendChild(y);
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
        `, k.onmouseover = () => k.style.opacity = "1", k.onmouseout = () => k.style.opacity = "0.6", k.onclick = () => c.remove(), c.appendChild(k), document.body.appendChild(c), console.log("[ComfyGit] Refresh notification displayed");
      };
      d.addEventListener("comfygit:workflow-changed", async (c) => {
        const { change_type: b, workflow_name: y } = c.detail;
        console.log(`[ComfyGit] Workflow ${b}: ${y}`), await Ot(), Dt();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let l = !1;
      d.addEventListener("status", async (c) => {
        const b = c.detail != null;
        b && !l && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), p()) : m()), l = b;
      }), console.log("[ComfyGit] Refresh notification system initialized");
    }
  }
});
