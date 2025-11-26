import { app as at } from "../../scripts/app.js";
import { defineComponent as Y, createElementBlock as s, openBlock as o, createCommentVNode as u, createElementVNode as e, renderSlot as ce, createBlock as x, resolveDynamicComponent as Nt, normalizeClass as ne, withCtx as l, toDisplayString as a, createVNode as f, createTextVNode as p, computed as U, Fragment as q, renderList as se, normalizeStyle as Ye, ref as b, onMounted as $e, watch as Ot, Teleport as xe, withModifiers as be, Transition as yo, createSlots as Ut, withKeys as Qe, onUnmounted as wo, reactive as Yt, readonly as ko, unref as me, withDirectives as kt, vModelText as bo, vModelSelect as Mt, vModelCheckbox as _o, TransitionGroup as $o, createApp as Bt, h as Pt } from "vue";
const Co = { class: "panel-layout" }, xo = {
  key: 0,
  class: "panel-layout-header"
}, So = {
  key: 1,
  class: "panel-layout-search"
}, Io = { class: "panel-layout-content" }, Eo = {
  key: 2,
  class: "panel-layout-footer"
}, Mo = /* @__PURE__ */ Y({
  __name: "PanelLayout",
  setup(t) {
    return (c, n) => (o(), s("div", Co, [
      c.$slots.header ? (o(), s("div", xo, [
        ce(c.$slots, "header", {}, void 0, !0)
      ])) : u("", !0),
      c.$slots.search ? (o(), s("div", So, [
        ce(c.$slots, "search", {}, void 0, !0)
      ])) : u("", !0),
      e("div", Io, [
        ce(c.$slots, "content", {}, void 0, !0)
      ]),
      c.$slots.footer ? (o(), s("div", Eo, [
        ce(c.$slots, "footer", {}, void 0, !0)
      ])) : u("", !0)
    ]));
  }
}), X = (t, c) => {
  const n = t.__vccOpts || t;
  for (const [r, g] of c)
    n[r] = g;
  return n;
}, Ie = /* @__PURE__ */ X(Mo, [["__scopeId", "data-v-21565df9"]]), zo = {
  key: 0,
  class: "panel-title-prefix"
}, Lo = {
  key: 1,
  class: "panel-title-prefix-theme"
}, To = /* @__PURE__ */ Y({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(t) {
    return (c, n) => (o(), x(Nt(`h${t.level}`), {
      class: ne(["panel-title", t.variant])
    }, {
      default: l(() => [
        t.showPrefix ? (o(), s("span", zo, a(t.prefix), 1)) : (o(), s("span", Lo)),
        ce(c.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ro = /* @__PURE__ */ X(To, [["__scopeId", "data-v-c3875efc"]]), Do = ["title"], No = ["width", "height"], Oo = /* @__PURE__ */ Y({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(t) {
    return (c, n) => (o(), s("button", {
      class: "info-button",
      title: t.title,
      onClick: n[0] || (n[0] = (r) => c.$emit("click"))
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
      ])], 8, No))
    ], 8, Do));
  }
}), Xt = /* @__PURE__ */ X(Oo, [["__scopeId", "data-v-6fc7f16d"]]), Uo = { class: "header-left" }, Bo = {
  key: 0,
  class: "header-actions"
}, Po = /* @__PURE__ */ Y({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(t) {
    return (c, n) => (o(), s("div", {
      class: ne(["panel-header", { stacked: t.stacked }])
    }, [
      e("div", Uo, [
        f(Ro, { "show-prefix": t.showPrefix }, {
          default: l(() => [
            p(a(t.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        t.showInfo ? (o(), x(Xt, {
          key: 0,
          onClick: n[0] || (n[0] = (r) => c.$emit("info-click"))
        })) : u("", !0)
      ]),
      c.$slots.actions ? (o(), s("div", Bo, [
        ce(c.$slots, "actions", {}, void 0, !0)
      ])) : u("", !0)
    ], 2));
  }
}), Ee = /* @__PURE__ */ X(Po, [["__scopeId", "data-v-55a62cd6"]]), Vo = {
  key: 0,
  class: "section-title-count"
}, Fo = {
  key: 1,
  class: "section-title-icon"
}, Ao = /* @__PURE__ */ Y({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t) {
    return (c, n) => (o(), x(Nt(`h${t.level}`), {
      class: ne(["section-title", { clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (r) => t.clickable && c.$emit("click"))
    }, {
      default: l(() => [
        ce(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), s("span", Vo, "(" + a(t.count) + ")", 1)) : u("", !0),
        t.clickable ? (o(), s("span", Fo, a(t.expanded ? "▼" : "▸"), 1)) : u("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ze = /* @__PURE__ */ X(Ao, [["__scopeId", "data-v-559361eb"]]), Wo = { class: "status-grid" }, Go = { class: "status-grid__columns" }, jo = { class: "status-grid__column" }, Ho = { class: "status-grid__title" }, qo = { class: "status-grid__column status-grid__column--right" }, Ko = { class: "status-grid__title" }, Jo = {
  key: 0,
  class: "status-grid__footer"
}, Qo = /* @__PURE__ */ Y({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(t) {
    return (c, n) => (o(), s("div", Wo, [
      e("div", Go, [
        e("div", jo, [
          e("h4", Ho, a(t.leftTitle), 1),
          ce(c.$slots, "left", {}, void 0, !0)
        ]),
        e("div", qo, [
          e("h4", Ko, a(t.rightTitle), 1),
          ce(c.$slots, "right", {}, void 0, !0)
        ])
      ]),
      c.$slots.footer ? (o(), s("div", Jo, [
        ce(c.$slots, "footer", {}, void 0, !0)
      ])) : u("", !0)
    ]));
  }
}), Yo = /* @__PURE__ */ X(Qo, [["__scopeId", "data-v-73b7ba3f"]]), Xo = {
  key: 0,
  class: "status-item__icon"
}, Zo = {
  key: 1,
  class: "status-item__count"
}, es = { class: "status-item__label" }, ts = /* @__PURE__ */ Y({
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
    return (r, g) => (o(), s("div", {
      class: ne(["status-item", n.value, { "is-separator": t.separator }])
    }, [
      t.icon ? (o(), s("span", Xo, a(t.icon), 1)) : u("", !0),
      t.count !== void 0 ? (o(), s("span", Zo, a(t.count), 1)) : u("", !0),
      e("span", es, a(t.label), 1)
    ], 2));
  }
}), Pe = /* @__PURE__ */ X(ts, [["__scopeId", "data-v-6f929183"]]), os = { class: "issue-card__header" }, ss = { class: "issue-card__icon" }, ns = { class: "issue-card__title" }, as = {
  key: 0,
  class: "issue-card__content"
}, ls = {
  key: 0,
  class: "issue-card__description"
}, is = {
  key: 1,
  class: "issue-card__items"
}, rs = {
  key: 2,
  class: "issue-card__actions"
}, ds = /* @__PURE__ */ Y({
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
    return (r, g) => (o(), s("div", {
      class: ne(["issue-card", n.value])
    }, [
      e("div", os, [
        e("span", ss, a(t.icon), 1),
        e("h4", ns, a(t.title), 1)
      ]),
      r.$slots.default || t.description ? (o(), s("div", as, [
        t.description ? (o(), s("p", ls, a(t.description), 1)) : u("", !0),
        ce(r.$slots, "default", {}, void 0, !0)
      ])) : u("", !0),
      t.items && t.items.length ? (o(), s("div", is, [
        (o(!0), s(q, null, se(t.items, (y, h) => (o(), s("div", {
          key: h,
          class: "issue-card__item"
        }, [
          g[0] || (g[0] = e("span", { class: "issue-card__bullet" }, "•", -1)),
          e("span", null, a(y), 1)
        ]))), 128))
      ])) : u("", !0),
      r.$slots.actions ? (o(), s("div", rs, [
        ce(r.$slots, "actions", {}, void 0, !0)
      ])) : u("", !0)
    ], 2));
  }
}), st = /* @__PURE__ */ X(ds, [["__scopeId", "data-v-df6aa348"]]), cs = ["type", "disabled"], us = {
  key: 0,
  class: "spinner"
}, ms = /* @__PURE__ */ Y({
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
    return (c, n) => (o(), s("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: ne(["action-btn", t.variant, t.size, { loading: t.loading }]),
      onClick: n[0] || (n[0] = (r) => c.$emit("click", r))
    }, [
      t.loading ? (o(), s("span", us)) : u("", !0),
      t.loading ? u("", !0) : ce(c.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, cs));
  }
}), Z = /* @__PURE__ */ X(ms, [["__scopeId", "data-v-772abe47"]]), vs = { class: "empty-state" }, fs = {
  key: 0,
  class: "empty-icon"
}, gs = { class: "empty-message" }, hs = /* @__PURE__ */ Y({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(t) {
    return (c, n) => (o(), s("div", vs, [
      t.icon ? (o(), s("div", fs, a(t.icon), 1)) : u("", !0),
      e("p", gs, a(t.message), 1),
      t.actionLabel ? (o(), x(Z, {
        key: 1,
        variant: t.actionVariant || "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (r) => c.$emit("action"))
      }, {
        default: l(() => [
          p(a(t.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : u("", !0)
    ]));
  }
}), Ue = /* @__PURE__ */ X(hs, [["__scopeId", "data-v-4466284f"]]), ps = /* @__PURE__ */ Y({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(t) {
    return (c, n) => (o(), s("span", {
      class: ne(["detail-label"]),
      style: Ye({ minWidth: t.minWidth })
    }, [
      ce(c.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), Rt = /* @__PURE__ */ X(ps, [["__scopeId", "data-v-75e9eeb8"]]), ys = /* @__PURE__ */ Y({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (c, n) => (o(), s("span", {
      class: ne(["detail-value", t.variant, { mono: t.mono, truncate: t.truncate }])
    }, [
      ce(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Dt = /* @__PURE__ */ X(ys, [["__scopeId", "data-v-2f186e4c"]]), ws = { class: "detail-row" }, ks = /* @__PURE__ */ Y({
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
    return (c, n) => (o(), s("div", ws, [
      f(Rt, { "min-width": t.labelMinWidth }, {
        default: l(() => [
          p(a(t.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      t.value ? (o(), x(Dt, {
        key: 0,
        mono: t.mono,
        variant: t.valueVariant,
        truncate: t.truncate
      }, {
        default: l(() => [
          p(a(t.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : ce(c.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), he = /* @__PURE__ */ X(ks, [["__scopeId", "data-v-ef15664a"]]), bs = { class: "modal-header" }, _s = { class: "modal-body" }, $s = { class: "status-section" }, Cs = {
  key: 0,
  class: "status-section"
}, xs = { class: "section-header-row" }, Ss = {
  key: 0,
  class: "workflow-group"
}, Is = { class: "workflow-group-header" }, Es = { class: "workflow-group-title" }, Ms = { class: "workflow-list" }, zs = { class: "workflow-name" }, Ls = { class: "workflow-issue" }, Ts = {
  key: 1,
  class: "workflow-group"
}, Rs = { class: "workflow-group-header" }, Ds = { class: "workflow-group-title" }, Ns = { class: "workflow-list" }, Os = { class: "workflow-name" }, Us = { class: "workflow-issue" }, Bs = {
  key: 2,
  class: "workflow-group"
}, Ps = { class: "workflow-group-header" }, Vs = { class: "workflow-group-title" }, Fs = { class: "workflow-list" }, As = { class: "workflow-name" }, Ws = {
  key: 3,
  class: "workflow-group"
}, Gs = { class: "workflow-group-header" }, js = { class: "workflow-group-title" }, Hs = { class: "workflow-list" }, qs = { class: "workflow-name" }, Ks = {
  key: 4,
  class: "workflow-group"
}, Js = { class: "workflow-group-header" }, Qs = { class: "workflow-group-title" }, Ys = { class: "workflow-list" }, Xs = { class: "workflow-name" }, Zs = {
  key: 5,
  class: "workflow-group"
}, en = { class: "workflow-group-title" }, tn = { class: "expand-icon" }, on = {
  key: 0,
  class: "workflow-list"
}, sn = { class: "workflow-name" }, nn = {
  key: 1,
  class: "status-section"
}, an = {
  key: 0,
  class: "change-group"
}, ln = { class: "change-group-header" }, rn = { class: "change-group-title" }, dn = { class: "change-list" }, cn = { class: "node-name" }, un = {
  key: 0,
  class: "dev-badge"
}, mn = {
  key: 1,
  class: "change-group"
}, vn = { class: "change-group-header" }, fn = { class: "change-group-title" }, gn = { class: "change-list" }, hn = { class: "node-name" }, pn = {
  key: 0,
  class: "dev-badge"
}, yn = {
  key: 2,
  class: "change-group"
}, wn = { class: "change-list" }, kn = { class: "change-item" }, bn = { class: "node-name" }, _n = {
  key: 3,
  class: "change-group"
}, $n = {
  key: 2,
  class: "status-section"
}, Cn = { class: "section-header-row" }, xn = {
  key: 0,
  class: "drift-item"
}, Sn = { class: "drift-list" }, In = {
  key: 0,
  class: "drift-list-more"
}, En = {
  key: 1,
  class: "drift-item"
}, Mn = { class: "drift-list" }, zn = {
  key: 0,
  class: "drift-list-more"
}, Ln = {
  key: 2,
  class: "drift-item"
}, Tn = {
  key: 3,
  class: "drift-item"
}, Rn = {
  key: 3,
  class: "status-section"
}, Dn = { class: "info-box" }, Nn = { class: "drift-list" }, On = {
  key: 0,
  class: "drift-list-more"
}, Un = {
  key: 4,
  class: "status-section"
}, Bn = { class: "warning-box" }, Pn = {
  key: 5,
  class: "empty-state-inline"
}, Vn = { class: "modal-actions" }, Fn = /* @__PURE__ */ Y({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {}
  },
  emits: ["close", "navigate-workflows", "navigate-nodes"],
  setup(t) {
    const c = t, n = b(!1);
    $e(() => {
      console.log("StatusDetailModal mounted, initial show value:", c.show);
    }), Ot(() => c.show, (I, _) => {
      console.log("StatusDetailModal show prop changed from", _, "to", I);
    }, { immediate: !0 });
    const r = U(() => {
      var I, _, T;
      return ((T = (_ = (I = c.status) == null ? void 0 : I.workflows) == null ? void 0 : _.analyzed) == null ? void 0 : T.filter(
        (k) => k.status === "broken" && k.sync_state === "synced"
      )) || [];
    }), g = U(() => {
      var I, _, T;
      return ((T = (_ = (I = c.status) == null ? void 0 : I.workflows) == null ? void 0 : _.analyzed) == null ? void 0 : T.filter(
        (k) => k.status === "broken" && k.sync_state !== "synced"
      )) || [];
    }), y = U(() => {
      var I, _, T;
      return ((T = (_ = (I = c.status) == null ? void 0 : I.workflows) == null ? void 0 : _.synced) == null ? void 0 : T.filter((k) => {
        var E, N, A;
        const w = (A = (N = (E = c.status) == null ? void 0 : E.workflows) == null ? void 0 : N.analyzed) == null ? void 0 : A.find((H) => H.name === k);
        return !w || w.status !== "broken";
      })) || [];
    }), h = U(() => {
      var I, _, T, k, w;
      return (I = c.status) != null && I.workflows ? (((_ = c.status.workflows.new) == null ? void 0 : _.length) ?? 0) > 0 || (((T = c.status.workflows.modified) == null ? void 0 : T.length) ?? 0) > 0 || (((k = c.status.workflows.deleted) == null ? void 0 : k.length) ?? 0) > 0 || (((w = c.status.workflows.synced) == null ? void 0 : w.length) ?? 0) > 0 : !1;
    }), v = U(() => {
      var _, T, k;
      const I = (_ = c.status) == null ? void 0 : _.git_changes;
      return I ? (((T = I.nodes_added) == null ? void 0 : T.length) ?? 0) > 0 || (((k = I.nodes_removed) == null ? void 0 : k.length) ?? 0) > 0 || I.workflow_changes || I.has_other_changes : !1;
    }), i = U(() => {
      var I, _, T, k, w, E;
      return !h.value && !v.value && ((_ = (I = c.status) == null ? void 0 : I.comparison) == null ? void 0 : _.is_synced) && (((T = c.status) == null ? void 0 : T.missing_models_count) ?? 0) === 0 && (((E = (w = (k = c.status) == null ? void 0 : k.comparison) == null ? void 0 : w.disabled_nodes) == null ? void 0 : E.length) ?? 0) === 0;
    }), m = U(() => {
      var _, T;
      const I = (T = (_ = c.status) == null ? void 0 : _.git_changes) == null ? void 0 : T.workflow_changes;
      return I ? typeof I == "number" ? I : Object.keys(I).length : 0;
    });
    function $(I) {
      return typeof I == "string" ? I : I.name;
    }
    function d(I) {
      return typeof I == "object" && I.is_development === !0;
    }
    return (I, _) => {
      var T, k, w, E, N, A, H, Q, B, L, P, M, C, F, V, j, W, z, ee, R, O, ae;
      return o(), x(xe, { to: "body" }, [
        t.show ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: _[6] || (_[6] = (te) => I.$emit("close"))
        }, [
          e("div", {
            class: "modal-content",
            onClick: _[5] || (_[5] = be(() => {
            }, ["stop"]))
          }, [
            e("div", bs, [
              _[7] || (_[7] = e("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              e("button", {
                class: "modal-close",
                onClick: _[0] || (_[0] = (te) => I.$emit("close"))
              }, "✕")
            ]),
            e("div", _s, [
              e("div", $s, [
                f(ze, { level: "4" }, {
                  default: l(() => [..._[8] || (_[8] = [
                    p("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                f(he, {
                  label: "Current Branch:",
                  value: t.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              h.value ? (o(), s("div", Cs, [
                e("div", xs, [
                  f(ze, { level: "4" }, {
                    default: l(() => [..._[9] || (_[9] = [
                      p("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: _[1] || (_[1] = (te) => I.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                r.value.length ? (o(), s("div", Ss, [
                  e("div", Is, [
                    _[10] || (_[10] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Es, "BROKEN (COMMITTED) (" + a(r.value.length) + ")", 1)
                  ]),
                  e("div", Ms, [
                    (o(!0), s(q, null, se(r.value, (te) => (o(), s("div", {
                      key: te.name,
                      class: "workflow-item"
                    }, [
                      e("span", zs, a(te.name), 1),
                      e("span", Ls, a(te.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                g.value.length ? (o(), s("div", Ts, [
                  e("div", Rs, [
                    _[11] || (_[11] = e("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    e("span", Ds, "BROKEN (UNCOMMITTED) (" + a(g.value.length) + ")", 1)
                  ]),
                  e("div", Ns, [
                    (o(!0), s(q, null, se(g.value, (te) => (o(), s("div", {
                      key: te.name,
                      class: "workflow-item"
                    }, [
                      e("span", Os, a(te.name), 1),
                      e("span", Us, a(te.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                (k = (T = t.status.workflows) == null ? void 0 : T.new) != null && k.length ? (o(), s("div", Bs, [
                  e("div", Ps, [
                    _[12] || (_[12] = e("span", { class: "workflow-status-icon new" }, "●", -1)),
                    e("span", Vs, "NEW (" + a(t.status.workflows.new.length) + ")", 1)
                  ]),
                  e("div", Fs, [
                    (o(!0), s(q, null, se(t.status.workflows.new, (te) => (o(), s("div", {
                      key: te,
                      class: "workflow-item"
                    }, [
                      e("span", As, a(te), 1)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                (E = (w = t.status.workflows) == null ? void 0 : w.modified) != null && E.length ? (o(), s("div", Ws, [
                  e("div", Gs, [
                    _[13] || (_[13] = e("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    e("span", js, "MODIFIED (" + a(t.status.workflows.modified.length) + ")", 1)
                  ]),
                  e("div", Hs, [
                    (o(!0), s(q, null, se(t.status.workflows.modified, (te) => (o(), s("div", {
                      key: te,
                      class: "workflow-item"
                    }, [
                      e("span", qs, a(te), 1)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                (A = (N = t.status.workflows) == null ? void 0 : N.deleted) != null && A.length ? (o(), s("div", Ks, [
                  e("div", Js, [
                    _[14] || (_[14] = e("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    e("span", Qs, "DELETED (" + a(t.status.workflows.deleted.length) + ")", 1)
                  ]),
                  e("div", Ys, [
                    (o(!0), s(q, null, se(t.status.workflows.deleted, (te) => (o(), s("div", {
                      key: te,
                      class: "workflow-item"
                    }, [
                      e("span", Xs, a(te), 1)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                y.value.length ? (o(), s("div", Zs, [
                  e("div", {
                    class: "workflow-group-header clickable",
                    onClick: _[2] || (_[2] = (te) => n.value = !n.value)
                  }, [
                    _[15] || (_[15] = e("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    e("span", en, "SYNCED (" + a(y.value.length) + ")", 1),
                    e("span", tn, a(n.value ? "▼" : "▶"), 1)
                  ]),
                  n.value ? (o(), s("div", on, [
                    (o(!0), s(q, null, se(y.value, (te) => (o(), s("div", {
                      key: te,
                      class: "workflow-item"
                    }, [
                      e("span", sn, a(te), 1)
                    ]))), 128))
                  ])) : u("", !0)
                ])) : u("", !0)
              ])) : u("", !0),
              v.value ? (o(), s("div", nn, [
                f(ze, { level: "4" }, {
                  default: l(() => [..._[16] || (_[16] = [
                    p("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (Q = (H = t.status.git_changes) == null ? void 0 : H.nodes_added) != null && Q.length ? (o(), s("div", an, [
                  e("div", ln, [
                    _[17] || (_[17] = e("span", { class: "change-icon add" }, "+", -1)),
                    e("span", rn, "NODES ADDED (" + a(t.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  e("div", dn, [
                    (o(!0), s(q, null, se(t.status.git_changes.nodes_added, (te) => (o(), s("div", {
                      key: $(te),
                      class: "change-item"
                    }, [
                      e("span", cn, a($(te)), 1),
                      d(te) ? (o(), s("span", un, "dev")) : u("", !0)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                (L = (B = t.status.git_changes) == null ? void 0 : B.nodes_removed) != null && L.length ? (o(), s("div", mn, [
                  e("div", vn, [
                    _[18] || (_[18] = e("span", { class: "change-icon remove" }, "-", -1)),
                    e("span", fn, "NODES REMOVED (" + a(t.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  e("div", gn, [
                    (o(!0), s(q, null, se(t.status.git_changes.nodes_removed, (te) => (o(), s("div", {
                      key: $(te),
                      class: "change-item"
                    }, [
                      e("span", hn, a($(te)), 1),
                      d(te) ? (o(), s("span", pn, "dev")) : u("", !0)
                    ]))), 128))
                  ])
                ])) : u("", !0),
                (P = t.status.git_changes) != null && P.workflow_changes ? (o(), s("div", yn, [
                  _[19] || (_[19] = e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  e("div", wn, [
                    e("div", kn, [
                      e("span", bn, a(m.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : u("", !0),
                (M = t.status.git_changes) != null && M.has_other_changes ? (o(), s("div", _n, [..._[20] || (_[20] = [
                  e("div", { class: "change-group-header" }, [
                    e("span", { class: "change-icon modified" }, "~"),
                    e("span", { class: "change-group-title" }, "OTHER CHANGES")
                  ], -1),
                  e("div", { class: "change-list" }, [
                    e("div", { class: "change-item" }, [
                      e("span", { class: "node-name" }, "Configuration or other files modified")
                    ])
                  ], -1)
                ])])) : u("", !0)
              ])) : u("", !0),
              (C = t.status.comparison) != null && C.is_synced ? u("", !0) : (o(), s("div", $n, [
                e("div", Cn, [
                  f(ze, { level: "4" }, {
                    default: l(() => [..._[21] || (_[21] = [
                      p("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  e("button", {
                    class: "link-btn",
                    onClick: _[3] || (_[3] = (te) => I.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                _[22] || (_[22] = e("div", { class: "warning-box" }, [
                  e("span", { class: "warning-icon" }, "⚠"),
                  e("span", null, "Environment needs repair")
                ], -1)),
                (V = (F = t.status.comparison) == null ? void 0 : F.missing_nodes) != null && V.length ? (o(), s("div", xn, [
                  f(he, {
                    label: "Missing Nodes:",
                    value: `${t.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  e("div", Sn, [
                    (o(!0), s(q, null, se(t.status.comparison.missing_nodes.slice(0, 10), (te) => (o(), s("div", {
                      key: te,
                      class: "drift-list-item"
                    }, " - " + a(te), 1))), 128)),
                    t.status.comparison.missing_nodes.length > 10 ? (o(), s("div", In, " ... and " + a(t.status.comparison.missing_nodes.length - 10) + " more ", 1)) : u("", !0)
                  ])
                ])) : u("", !0),
                (W = (j = t.status.comparison) == null ? void 0 : j.extra_nodes) != null && W.length ? (o(), s("div", En, [
                  f(he, {
                    label: "Extra Nodes:",
                    value: `${t.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  e("div", Mn, [
                    (o(!0), s(q, null, se(t.status.comparison.extra_nodes.slice(0, 10), (te) => (o(), s("div", {
                      key: te,
                      class: "drift-list-item"
                    }, " - " + a(te), 1))), 128)),
                    t.status.comparison.extra_nodes.length > 10 ? (o(), s("div", zn, " ... and " + a(t.status.comparison.extra_nodes.length - 10) + " more ", 1)) : u("", !0)
                  ])
                ])) : u("", !0),
                (ee = (z = t.status.comparison) == null ? void 0 : z.version_mismatches) != null && ee.length ? (o(), s("div", Ln, [
                  f(he, {
                    label: "Version Mismatches:",
                    value: `${t.status.comparison.version_mismatches.length} packages have version conflicts`
                  }, null, 8, ["value"])
                ])) : u("", !0),
                (R = t.status.comparison) != null && R.packages_in_sync ? u("", !0) : (o(), s("div", Tn, [
                  f(he, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ]))
              ])),
              (ae = (O = t.status.comparison) == null ? void 0 : O.disabled_nodes) != null && ae.length ? (o(), s("div", Rn, [
                f(ze, { level: "4" }, {
                  default: l(() => [..._[23] || (_[23] = [
                    p("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                e("div", Dn, [
                  _[24] || (_[24] = e("span", { class: "info-icon" }, "ℹ", -1)),
                  e("span", null, a(t.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                e("div", Nn, [
                  (o(!0), s(q, null, se(t.status.comparison.disabled_nodes.slice(0, 10), (te) => (o(), s("div", {
                    key: te,
                    class: "drift-list-item"
                  }, " • " + a(te), 1))), 128)),
                  t.status.comparison.disabled_nodes.length > 10 ? (o(), s("div", On, " ... and " + a(t.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : u("", !0)
                ])
              ])) : u("", !0),
              (t.status.missing_models_count ?? 0) > 0 ? (o(), s("div", Un, [
                f(ze, { level: "4" }, {
                  default: l(() => [..._[25] || (_[25] = [
                    p("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                e("div", Bn, [
                  _[26] || (_[26] = e("span", { class: "warning-icon" }, "⚠", -1)),
                  e("span", null, a(t.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                _[27] || (_[27] = e("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : u("", !0),
              i.value ? (o(), s("div", Pn, [..._[28] || (_[28] = [
                e("div", { class: "empty-icon" }, "✅", -1),
                e("div", { class: "empty-message" }, [
                  e("strong", null, "Environment is clean!"),
                  e("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : u("", !0)
            ]),
            e("div", Vn, [
              f(Z, {
                variant: "secondary",
                onClick: _[4] || (_[4] = (te) => I.$emit("close"))
              }, {
                default: l(() => [..._[29] || (_[29] = [
                  p(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : u("", !0)
      ]);
    };
  }
}), An = /* @__PURE__ */ X(Fn, [["__scopeId", "data-v-c67eed17"]]), Wn = { class: "health-section-header" }, Gn = { class: "suggestions-content" }, jn = { class: "suggestions-text" }, Hn = {
  key: 1,
  style: { "margin-top": "var(--cg-space-3)" }
}, qn = /* @__PURE__ */ Y({
  __name: "StatusSection",
  props: {
    status: {}
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes"],
  setup(t, { emit: c }) {
    const n = t, r = b(!1), g = b(!1);
    function y() {
      r.value = !0;
    }
    function h() {
      r.value = !1, i("view-workflows");
    }
    function v() {
      r.value = !1, i("view-nodes");
    }
    const i = c, m = U(() => n.status.workflows.new.length > 0 || n.status.workflows.modified.length > 0 || n.status.workflows.deleted.length > 0), $ = U(() => n.status.has_changes), d = U(() => {
      const B = n.status.git_changes;
      return B.nodes_added.length > 0 || B.nodes_removed.length > 0 || B.workflow_changes;
    }), I = U(() => n.status.has_changes || m.value), _ = U(() => Object.keys(n.status.git_changes.workflow_changes_detail).length), T = U(() => n.status.git_changes.has_other_changes), k = U(() => {
      var B;
      return ((B = n.status.workflows.analyzed) == null ? void 0 : B.filter((L) => L.status === "broken")) || [];
    }), w = U(() => {
      var B;
      return ((B = n.status.workflows.analyzed) == null ? void 0 : B.filter(
        (L) => L.has_path_sync_issues && !L.has_issues
      )) || [];
    }), E = U(() => k.value.length > 0), N = U(() => E.value || w.value.length > 0 || n.status.missing_models_count > 0 || !n.status.comparison.is_synced), A = U(() => {
      const B = [];
      return n.status.workflows.new.length > 0 && B.push(`${n.status.workflows.new.length} new`), n.status.workflows.modified.length > 0 && B.push(`${n.status.workflows.modified.length} modified`), n.status.workflows.deleted.length > 0 && B.push(`${n.status.workflows.deleted.length} deleted`), B.length > 0 ? `${B.join(", ")} workflow${B.length === 1 && !B[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), H = U(() => {
      var P, M;
      const B = [], L = n.status.comparison;
      return (P = L.missing_nodes) != null && P.length && B.push(`${L.missing_nodes.length} missing node${L.missing_nodes.length === 1 ? "" : "s"}`), (M = L.extra_nodes) != null && M.length && B.push(`${L.extra_nodes.length} untracked node${L.extra_nodes.length === 1 ? "" : "s"}`), B.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${B.join(" and ")}.`;
    }), Q = U(() => {
      var P, M;
      const B = [], L = n.status.comparison;
      return (P = L.extra_nodes) != null && P.length && (L.extra_nodes.slice(0, 3).forEach((C) => {
        B.push(`Untracked: ${C}`);
      }), L.extra_nodes.length > 3 && B.push(`...and ${L.extra_nodes.length - 3} more untracked`)), (M = L.missing_nodes) != null && M.length && (L.missing_nodes.slice(0, 3).forEach((C) => {
        B.push(`Missing: ${C}`);
      }), L.missing_nodes.length > 3 && B.push(`...and ${L.missing_nodes.length - 3} more missing`)), B;
    });
    return (B, L) => (o(), s(q, null, [
      f(Ie, null, {
        header: l(() => [
          f(Ee, { title: "STATUS" })
        ]),
        content: l(() => [
          e("div", {
            class: "health-section-wrapper",
            onMouseenter: L[1] || (L[1] = (P) => g.value = !0),
            onMouseleave: L[2] || (L[2] = (P) => g.value = !1)
          }, [
            e("div", Wn, [
              f(ze, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: l(() => [...L[9] || (L[9] = [
                  p(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              f(yo, { name: "fade" }, {
                default: l(() => [
                  g.value ? (o(), x(Z, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: y
                  }, {
                    default: l(() => [...L[10] || (L[10] = [
                      p(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : u("", !0)
                ]),
                _: 1
              })
            ]),
            f(Yo, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, Ut({
              left: l(() => [
                t.status.workflows.new.length ? (o(), x(Pe, {
                  key: 0,
                  icon: "●",
                  count: t.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : u("", !0),
                t.status.workflows.modified.length ? (o(), x(Pe, {
                  key: 1,
                  icon: "●",
                  count: t.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : u("", !0),
                t.status.workflows.deleted.length ? (o(), x(Pe, {
                  key: 2,
                  icon: "●",
                  count: t.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : u("", !0),
                f(Pe, {
                  icon: "✓",
                  count: t.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: m.value
                }, null, 8, ["count", "separator"])
              ]),
              right: l(() => [
                t.status.git_changes.nodes_added.length ? (o(), x(Pe, {
                  key: 0,
                  icon: "●",
                  count: t.status.git_changes.nodes_added.length,
                  label: t.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : u("", !0),
                t.status.git_changes.nodes_removed.length ? (o(), x(Pe, {
                  key: 1,
                  icon: "●",
                  count: t.status.git_changes.nodes_removed.length,
                  label: t.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : u("", !0),
                t.status.git_changes.workflow_changes ? (o(), x(Pe, {
                  key: 2,
                  icon: "●",
                  count: _.value,
                  label: _.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : u("", !0),
                T.value ? (o(), x(Pe, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : u("", !0),
                $.value && !d.value && !T.value ? (o(), x(Pe, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : u("", !0),
                $.value ? u("", !0) : (o(), x(Pe, {
                  key: 5,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 2
            }, [
              I.value ? {
                name: "footer",
                fn: l(() => [
                  L[12] || (L[12] = e("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  e("div", Gn, [
                    e("span", jn, a(A.value), 1),
                    f(Z, {
                      variant: "primary",
                      size: "sm",
                      onClick: L[0] || (L[0] = (P) => B.$emit("commit-changes"))
                    }, {
                      default: l(() => [...L[11] || (L[11] = [
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
          t.status.is_detached_head ? (o(), x(st, {
            key: 0,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: l(() => [
              f(Z, {
                variant: "primary",
                size: "sm",
                onClick: L[3] || (L[3] = (P) => B.$emit("create-branch"))
              }, {
                default: l(() => [...L[13] || (L[13] = [
                  p(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : u("", !0),
          N.value ? (o(), s("div", Hn, [
            f(ze, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: l(() => [...L[14] || (L[14] = [
                p(" ISSUES DETECTED ", -1)
              ])]),
              _: 1
            }),
            k.value.length > 0 ? (o(), x(st, {
              key: 0,
              severity: "error",
              icon: "⚠",
              title: `${k.value.length} workflow${k.value.length === 1 ? "" : "s"} can't run`,
              description: "These workflows have missing dependencies that must be resolved before they can run.",
              items: k.value.map((P) => `${P.name} — ${P.issue_summary}`)
            }, {
              actions: l(() => [
                f(Z, {
                  variant: "primary",
                  size: "sm",
                  onClick: L[4] || (L[4] = (P) => B.$emit("view-workflows"))
                }, {
                  default: l(() => [...L[15] || (L[15] = [
                    p(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : u("", !0),
            w.value.length > 0 ? (o(), x(st, {
              key: 1,
              severity: "warning",
              icon: "⚠",
              title: `${w.value.length} workflow${w.value.length === 1 ? "" : "s"} with path issues`,
              description: "These workflows can run but have model paths that should be synced.",
              items: w.value.map((P) => `${P.name} — ${P.models_needing_path_sync_count} model path${P.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
            }, {
              actions: l(() => [
                f(Z, {
                  variant: "primary",
                  size: "sm",
                  onClick: L[5] || (L[5] = (P) => B.$emit("view-workflows"))
                }, {
                  default: l(() => [...L[16] || (L[16] = [
                    p(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title", "items"])) : u("", !0),
            t.status.missing_models_count > 0 && !E.value ? (o(), x(st, {
              key: 2,
              severity: "warning",
              icon: "⚠",
              title: `${t.status.missing_models_count} missing model${t.status.missing_models_count === 1 ? "" : "s"}`,
              description: "Some workflows reference models that are not found in the workspace index."
            }, {
              actions: l(() => [
                f(Z, {
                  variant: "primary",
                  size: "sm",
                  onClick: L[6] || (L[6] = (P) => B.$emit("view-workflows"))
                }, {
                  default: l(() => [...L[17] || (L[17] = [
                    p(" See Workflows ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["title"])) : u("", !0),
            t.status.comparison.is_synced ? u("", !0) : (o(), x(st, {
              key: 3,
              severity: "error",
              icon: "⚠",
              title: "Environment not synced",
              description: H.value,
              items: Q.value
            }, {
              actions: l(() => [
                f(Z, {
                  variant: "secondary",
                  size: "sm",
                  onClick: y
                }, {
                  default: l(() => [...L[18] || (L[18] = [
                    p(" View Details ", -1)
                  ])]),
                  _: 1
                }),
                f(Z, {
                  variant: "primary",
                  size: "sm",
                  onClick: L[7] || (L[7] = (P) => B.$emit("view-nodes"))
                }, {
                  default: l(() => [...L[19] || (L[19] = [
                    p(" See Nodes ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["description", "items"]))
          ])) : u("", !0),
          !N.value && !I.value ? (o(), x(Ue, {
            key: 2,
            icon: "✅",
            message: "Everything looks good! No issues detected.",
            style: { "margin-top": "var(--cg-space-4)" }
          })) : u("", !0)
        ]),
        _: 1
      }),
      f(An, {
        show: r.value,
        status: t.status,
        onClose: L[8] || (L[8] = (P) => r.value = !1),
        onNavigateWorkflows: h,
        onNavigateNodes: v
      }, null, 8, ["show", "status"])
    ], 64));
  }
}), Kn = /* @__PURE__ */ X(qn, [["__scopeId", "data-v-698b3f43"]]), Jn = ["type", "value", "placeholder", "disabled"], Qn = /* @__PURE__ */ Y({
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
    const r = t, g = n, y = b(null);
    function h(v) {
      const i = v.target.value;
      g("update:modelValue", i);
    }
    return $e(() => {
      r.autoFocus && y.value && y.value.focus();
    }), c({
      focus: () => {
        var v;
        return (v = y.value) == null ? void 0 : v.focus();
      },
      blur: () => {
        var v;
        return (v = y.value) == null ? void 0 : v.blur();
      }
    }), (v, i) => (o(), s("input", {
      ref_key: "inputRef",
      ref: y,
      type: t.type,
      value: t.modelValue,
      placeholder: t.placeholder,
      disabled: t.disabled,
      class: ne(["text-input", { error: t.hasError, monospace: t.monospace }]),
      onInput: h,
      onKeyup: [
        i[0] || (i[0] = Qe((m) => v.$emit("enter"), ["enter"])),
        i[1] || (i[1] = Qe((m) => v.$emit("escape"), ["escape"]))
      ],
      onFocus: i[2] || (i[2] = (m) => v.$emit("focus")),
      onBlur: i[3] || (i[3] = (m) => v.$emit("blur"))
    }, null, 42, Jn));
  }
}), Ct = /* @__PURE__ */ X(Qn, [["__scopeId", "data-v-0380d08f"]]), Yn = { class: "branch-create-form" }, Xn = { class: "form-actions" }, Zn = /* @__PURE__ */ Y({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(t, { emit: c }) {
    const n = c, r = b(""), g = U(() => {
      const v = r.value.trim();
      return v.length > 0 && !v.startsWith("-") && !v.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(v);
    });
    function y() {
      g.value && (n("create", r.value.trim()), r.value = "");
    }
    function h() {
      r.value = "", n("cancel");
    }
    return (v, i) => (o(), s("div", Yn, [
      f(Ct, {
        modelValue: r.value,
        "onUpdate:modelValue": i[0] || (i[0] = (m) => r.value = m),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: y,
        onEscape: h
      }, null, 8, ["modelValue"]),
      e("div", Xn, [
        f(Z, {
          variant: "primary",
          size: "sm",
          disabled: !g.value,
          onClick: y
        }, {
          default: l(() => [...i[1] || (i[1] = [
            p(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        f(Z, {
          variant: "secondary",
          size: "sm",
          onClick: h
        }, {
          default: l(() => [...i[2] || (i[2] = [
            p(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), ea = /* @__PURE__ */ X(Zn, [["__scopeId", "data-v-7c500394"]]), ta = { class: "branch-list-item__indicator" }, oa = { class: "branch-list-item__name" }, sa = {
  key: 0,
  class: "branch-list-item__actions"
}, na = {
  key: 0,
  class: "branch-list-item__current-label"
}, aa = /* @__PURE__ */ Y({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t) {
    return (c, n) => (o(), s("div", {
      class: ne(["branch-list-item", { current: t.isCurrent, clickable: t.clickable }]),
      onClick: n[0] || (n[0] = (r) => t.clickable && c.$emit("click"))
    }, [
      e("span", ta, a(t.isCurrent ? "●" : "○"), 1),
      e("span", oa, a(t.branchName), 1),
      c.$slots.actions || t.showCurrentLabel ? (o(), s("div", sa, [
        ce(c.$slots, "actions", {}, void 0, !0),
        t.isCurrent && t.showCurrentLabel ? (o(), s("span", na, " current ")) : u("", !0)
      ])) : u("", !0)
    ], 2));
  }
}), la = /* @__PURE__ */ X(aa, [["__scopeId", "data-v-c6581a24"]]), ia = {
  key: 2,
  class: "branch-list"
}, ra = /* @__PURE__ */ Y({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create"],
  setup(t, { emit: c }) {
    const n = c, r = b(!1);
    function g(h) {
      n("create", h), y();
    }
    function y() {
      r.value = !1;
    }
    return (h, v) => (o(), x(Ie, null, {
      header: l(() => [
        f(Ee, { title: "BRANCHES" }, {
          actions: l(() => [
            f(Z, {
              variant: "ghost",
              size: "sm",
              onClick: v[0] || (v[0] = (i) => r.value = !0),
              title: "Create new branch"
            }, {
              default: l(() => [...v[1] || (v[1] = [
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
      content: l(() => [
        r.value ? (o(), x(ea, {
          key: 0,
          onCreate: g,
          onCancel: y
        })) : u("", !0),
        t.branches.length === 0 ? (o(), x(Ue, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (o(), s("div", ia, [
          (o(!0), s(q, null, se(t.branches, (i) => (o(), x(la, {
            key: i.name,
            "branch-name": i.name,
            "is-current": i.is_current
          }, {
            actions: l(() => [
              i.is_current ? u("", !0) : (o(), x(Z, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: (m) => h.$emit("switch", i.name)
              }, {
                default: l(() => [...v[2] || (v[2] = [
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
}), da = /* @__PURE__ */ X(ra, [["__scopeId", "data-v-763d6ec4"]]), ca = { class: "commit-list" }, ua = /* @__PURE__ */ Y({
  __name: "CommitList",
  setup(t) {
    return (c, n) => (o(), s("div", ca, [
      ce(c.$slots, "default", {}, void 0, !0)
    ]));
  }
}), ma = /* @__PURE__ */ X(ua, [["__scopeId", "data-v-8c5ee761"]]), va = { class: "commit-hash" }, fa = /* @__PURE__ */ Y({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(t) {
    const c = t, n = U(() => c.hash.slice(0, c.length));
    return (r, g) => (o(), s("span", va, a(n.value), 1));
  }
}), Zt = /* @__PURE__ */ X(fa, [["__scopeId", "data-v-7c333cc6"]]), ga = { class: "commit-message" }, ha = { class: "commit-date" }, pa = /* @__PURE__ */ Y({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(t, { emit: c }) {
    const n = t, r = c;
    function g() {
      n.clickable && r("click");
    }
    return (y, h) => (o(), s("div", {
      class: ne(["commit-item", { clickable: t.clickable }]),
      onClick: g
    }, [
      f(Zt, { hash: t.hash }, null, 8, ["hash"]),
      e("span", ga, a(t.message), 1),
      e("span", ha, a(t.relativeDate), 1),
      y.$slots.actions ? (o(), s("div", {
        key: 0,
        class: "commit-actions",
        onClick: h[0] || (h[0] = be(() => {
        }, ["stop"]))
      }, [
        ce(y.$slots, "actions", {}, void 0, !0)
      ])) : u("", !0)
    ], 2));
  }
}), ya = /* @__PURE__ */ X(pa, [["__scopeId", "data-v-dd7c621b"]]), wa = /* @__PURE__ */ Y({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(t) {
    return (c, n) => (o(), x(Ie, null, {
      header: l(() => [
        f(Ee, { title: "HISTORY" })
      ]),
      content: l(() => [
        t.commits.length === 0 ? (o(), x(Ue, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (o(), x(ma, { key: 1 }, {
          default: l(() => [
            (o(!0), s(q, null, se(t.commits, (r) => (o(), x(ya, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (g) => c.$emit("select", r)
            }, {
              actions: l(() => [
                f(Z, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (g) => c.$emit("checkout", r),
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
}), ka = /* @__PURE__ */ X(wa, [["__scopeId", "data-v-981c3c64"]]), T1 = [
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
  ...Array(12).fill(null).map((t, c) => ({
    name: `synced-workflow-${c + 1}.json`,
    status: "synced",
    missing_nodes: 0,
    missing_models: 0,
    node_count: 5 + c,
    model_count: 1 + c % 3,
    sync_state: "synced"
  }))
], R1 = {
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
}, ba = [
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
], D1 = [
  ...ba,
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
function gt() {
  return !1;
}
function Se() {
  const t = b(!1), c = b(null);
  async function n(J, le) {
    var D;
    if (!((D = window.app) != null && D.api))
      throw new Error("ComfyUI API not available");
    const G = await window.app.api.fetchApi(J, le);
    if (!G.ok) {
      const oe = await G.json().catch(() => ({}));
      throw new Error(oe.error || oe.message || `Request failed: ${G.status}`);
    }
    return G.json();
  }
  async function r(J = !1) {
    return n(J ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function g(J, le = !1) {
    return n("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: J, allow_issues: le })
    });
  }
  async function y(J = 10, le = 0) {
    return n(`/v2/comfygit/log?limit=${J}&offset=${le}`);
  }
  async function h(J) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: J })
    });
  }
  async function v() {
    return n("/v2/comfygit/branches");
  }
  async function i(J) {
    return n(`/v2/comfygit/commit/${J}`);
  }
  async function m(J, le = !1) {
    return n("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: J, force: le })
    });
  }
  async function $(J, le = "HEAD") {
    return n("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: J, start_point: le })
    });
  }
  async function d(J, le = !1) {
    return n("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: J, force: le })
    });
  }
  async function I() {
    try {
      return (await n("/v2/comfygit/environments")).environments;
    } catch {
      try {
        const J = await r();
        return [{
          name: J.environment,
          is_current: !0,
          path: "~/comfygit/environments/" + J.environment,
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          workflow_count: J.workflows.total,
          node_count: 0,
          model_count: 0,
          current_branch: J.branch
        }];
      } catch {
        return [];
      }
    }
  }
  async function _(J) {
    return n("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ target_env: J })
    });
  }
  async function T() {
    try {
      return n("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function k(J) {
    return n("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(J)
    });
  }
  async function w() {
    return n("/v2/workspace/environments/create_status");
  }
  async function E(J = 20) {
    return n(`/v2/workspace/comfyui_releases?limit=${J}`);
  }
  async function N(J) {
    return n(`/v2/workspace/environments/${J}`, {
      method: "DELETE"
    });
  }
  async function A(J = !1) {
    try {
      return n(J ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const le = await r(J), G = [];
      return le.workflows.new.forEach((D) => {
        G.push({ name: D, status: "new", missing_nodes: 0, missing_models: 0, path: D });
      }), le.workflows.modified.forEach((D) => {
        G.push({ name: D, status: "modified", missing_nodes: 0, missing_models: 0, path: D });
      }), le.workflows.synced.forEach((D) => {
        G.push({ name: D, status: "synced", missing_nodes: 0, missing_models: 0, path: D });
      }), G;
    }
  }
  async function H(J) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(J)}/details`);
  }
  async function Q(J) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(J)}/resolve`, {
      method: "POST"
    });
  }
  async function B(J, le, G) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(J)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: le, install_models: G })
    });
  }
  async function L(J, le, G) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(J)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: le, importance: G })
    });
  }
  async function P() {
    try {
      return n("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function M() {
    try {
      return n("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function C(J) {
    return n(`/v2/workspace/models/details/${encodeURIComponent(J)}`);
  }
  async function F(J) {
    return n("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: J })
    });
  }
  async function V(J, le) {
    return n(`/v2/workspace/models/${J}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: le })
    });
  }
  async function j(J, le) {
    return n(`/v2/workspace/models/${J}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: le })
    });
  }
  async function W(J) {
    return n(`/v2/workspace/models/${J}`, {
      method: "DELETE"
    });
  }
  async function z(J) {
    return n("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(J)
    });
  }
  async function ee() {
    return n("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function R() {
    return n("/v2/workspace/models/directory");
  }
  async function O(J) {
    return n("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: J })
    });
  }
  async function ae() {
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
  async function te(J) {
    return n("/v2/comfygit/config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(J)
    });
  }
  async function de(J, le) {
    try {
      const G = new URLSearchParams();
      return J && G.append("level", J), le && G.append("lines", le.toString()), n(`/v2/comfygit/debug/logs?${G}`);
    } catch {
      return [];
    }
  }
  async function pe(J, le) {
    try {
      const G = new URLSearchParams();
      return J && G.append("level", J), le && G.append("lines", le.toString()), n(`/v2/workspace/debug/logs?${G}`);
    } catch {
      return [];
    }
  }
  async function ye() {
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
  async function ct(J) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(J)}/track-dev`, {
      method: "POST"
    });
  }
  async function ut(J) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(J)}/install`, {
      method: "POST"
    });
  }
  async function mt(J) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(J)}/update`, {
      method: "POST"
    });
  }
  async function ke(J) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(J)}`, {
      method: "DELETE"
    });
  }
  async function Je() {
    try {
      return n("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function Fe(J, le) {
    return n("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: J, url: le })
    });
  }
  async function Be(J) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(J)}`, {
      method: "DELETE"
    });
  }
  async function vt(J, le, G) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(J)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: le, push_url: G })
    });
  }
  async function fe(J) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(J)}/fetch`, {
      method: "POST"
    });
  }
  async function Le(J) {
    try {
      return n(`/v2/comfygit/remotes/${encodeURIComponent(J)}/status`);
    } catch {
      return null;
    }
  }
  async function ft(J = "skip", le = !0) {
    return n("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: J,
        remove_extra_nodes: le
      })
    });
  }
  return {
    isLoading: t,
    error: c,
    getStatus: r,
    commit: g,
    getHistory: y,
    exportEnv: h,
    // Git Operations
    getBranches: v,
    getCommitDetail: i,
    checkout: m,
    createBranch: $,
    switchBranch: d,
    // Environment Management
    getEnvironments: I,
    switchEnvironment: _,
    getSwitchProgress: T,
    createEnvironment: k,
    getCreateProgress: w,
    getComfyUIReleases: E,
    deleteEnvironment: N,
    // Workflow Management
    getWorkflows: A,
    getWorkflowDetails: H,
    resolveWorkflow: Q,
    installWorkflowDeps: B,
    setModelImportance: L,
    // Model Management
    getEnvironmentModels: P,
    getWorkspaceModels: M,
    getModelDetails: C,
    openFileLocation: F,
    addModelSource: V,
    removeModelSource: j,
    deleteModel: W,
    downloadModel: z,
    scanWorkspaceModels: ee,
    getModelsDirectory: R,
    setModelsDirectory: O,
    // Settings
    getConfig: ae,
    updateConfig: te,
    // Debug/Logs
    getEnvironmentLogs: de,
    getWorkspaceLogs: pe,
    // Node Management
    getNodes: ye,
    trackNodeAsDev: ct,
    installNode: ut,
    updateNode: mt,
    uninstallNode: ke,
    // Git Remotes
    getRemotes: Je,
    addRemote: Fe,
    removeRemote: Be,
    updateRemoteUrl: vt,
    fetchRemote: fe,
    getRemoteSyncStatus: Le,
    // Environment Sync
    syncEnvironmentManually: ft
  };
}
const _a = { class: "base-modal-header" }, $a = {
  key: 0,
  class: "base-modal-title"
}, Ca = { class: "base-modal-body" }, xa = {
  key: 0,
  class: "base-modal-loading"
}, Sa = {
  key: 1,
  class: "base-modal-error"
}, Ia = {
  key: 0,
  class: "base-modal-footer"
}, Ea = /* @__PURE__ */ Y({
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
    const n = t, r = c;
    function g() {
      n.closeOnOverlayClick && r("close");
    }
    function y(h) {
      h.key === "Escape" && r("close");
    }
    return $e(() => {
      document.addEventListener("keydown", y), document.body.style.overflow = "hidden";
    }), wo(() => {
      document.removeEventListener("keydown", y), document.body.style.overflow = "";
    }), (h, v) => (o(), x(xe, { to: "body" }, [
      e("div", {
        class: "base-modal-overlay",
        onClick: g
      }, [
        e("div", {
          class: ne(["base-modal-content", t.size, { "fixed-height": t.fixedHeight }]),
          onClick: v[1] || (v[1] = be(() => {
          }, ["stop"]))
        }, [
          e("div", _a, [
            ce(h.$slots, "header", {}, () => [
              t.title ? (o(), s("h3", $a, a(t.title), 1)) : u("", !0)
            ], !0),
            t.showCloseButton ? (o(), s("button", {
              key: 0,
              class: "base-modal-close",
              onClick: v[0] || (v[0] = (i) => h.$emit("close"))
            }, [...v[2] || (v[2] = [
              e("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])) : u("", !0)
          ]),
          e("div", Ca, [
            t.loading ? (o(), s("div", xa, "Loading...")) : t.error ? (o(), s("div", Sa, a(t.error), 1)) : ce(h.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          h.$slots.footer ? (o(), s("div", Ia, [
            ce(h.$slots, "footer", {}, void 0, !0)
          ])) : u("", !0)
        ], 2)
      ])
    ]));
  }
}), it = /* @__PURE__ */ X(Ea, [["__scopeId", "data-v-2125a0e6"]]), Ma = ["type", "disabled"], za = {
  key: 0,
  class: "spinner"
}, La = /* @__PURE__ */ Y({
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
    return (c, n) => (o(), s("button", {
      type: t.type,
      disabled: t.disabled || t.loading,
      class: ne(["base-btn", t.variant, t.size, { "full-width": t.fullWidth, loading: t.loading }]),
      onClick: n[0] || (n[0] = (r) => c.$emit("click", r))
    }, [
      t.loading ? (o(), s("span", za)) : u("", !0),
      ce(c.$slots, "default", {}, void 0, !0)
    ], 10, Ma));
  }
}), ie = /* @__PURE__ */ X(La, [["__scopeId", "data-v-f3452606"]]), Ta = {
  key: 0,
  class: "base-title-count"
}, Ra = /* @__PURE__ */ Y({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(t) {
    return (c, n) => (o(), x(Nt(`h${t.level}`), {
      class: ne(["base-title", t.variant])
    }, {
      default: l(() => [
        ce(c.$slots, "default", {}, void 0, !0),
        t.count !== void 0 ? (o(), s("span", Ta, "(" + a(t.count) + ")", 1)) : u("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), bt = /* @__PURE__ */ X(Ra, [["__scopeId", "data-v-5a01561d"]]), Da = ["value", "disabled"], Na = {
  key: 0,
  value: "",
  disabled: ""
}, Oa = ["value"], Ua = {
  key: 0,
  class: "base-select-error"
}, Ba = /* @__PURE__ */ Y({
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
    function c(r) {
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
        t.placeholder ? (o(), s("option", Na, a(t.placeholder), 1)) : u("", !0),
        (o(!0), s(q, null, se(t.options, (y) => (o(), s("option", {
          key: c(y),
          value: c(y)
        }, a(n(y)), 9, Oa))), 128))
      ], 42, Da),
      t.error ? (o(), s("span", Ua, a(t.error), 1)) : u("", !0)
    ], 2));
  }
}), Pa = /* @__PURE__ */ X(Ba, [["__scopeId", "data-v-7436d745"]]), Va = { class: "popover-header" }, Fa = { class: "popover-title" }, Aa = { class: "popover-content" }, Wa = {
  key: 0,
  class: "popover-actions"
}, Ga = /* @__PURE__ */ Y({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(t) {
    return (c, n) => (o(), x(xe, { to: "body" }, [
      t.show ? (o(), s("div", {
        key: 0,
        class: "popover-overlay",
        onClick: n[2] || (n[2] = (r) => c.$emit("close"))
      }, [
        e("div", {
          class: "popover",
          style: Ye({ maxWidth: t.maxWidth }),
          onClick: n[1] || (n[1] = be(() => {
          }, ["stop"]))
        }, [
          e("div", Va, [
            e("h4", Fa, a(t.title), 1),
            e("button", {
              class: "popover-close",
              onClick: n[0] || (n[0] = (r) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", Aa, [
            ce(c.$slots, "content", {}, void 0, !0)
          ]),
          c.$slots.actions ? (o(), s("div", Wa, [
            ce(c.$slots, "actions", {}, void 0, !0)
          ])) : u("", !0)
        ], 4)
      ])) : u("", !0)
    ]));
  }
}), He = /* @__PURE__ */ X(Ga, [["__scopeId", "data-v-42815ace"]]), ja = { class: "detail-section" }, Ha = {
  key: 0,
  class: "empty-message"
}, qa = { class: "model-header" }, Ka = { class: "model-name" }, Ja = { class: "model-details" }, Qa = { class: "model-row" }, Ya = { class: "model-row" }, Xa = { class: "label" }, Za = {
  key: 0,
  class: "model-row model-row-nodes"
}, el = { class: "node-list" }, tl = ["onClick"], ol = {
  key: 1,
  class: "model-row"
}, sl = { class: "value" }, nl = {
  key: 0,
  class: "model-actions"
}, al = { class: "detail-section" }, ll = {
  key: 0,
  class: "empty-message"
}, il = { class: "node-name" }, rl = {
  key: 0,
  class: "node-version"
}, dl = /* @__PURE__ */ Y({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(t, { emit: c }) {
    const n = t, r = c, { getWorkflowDetails: g, setModelImportance: y, installWorkflowDeps: h } = Se(), v = b(null), i = b(!1), m = b(null), $ = b(!1), d = b({}), I = b({}), _ = b(!1), T = b(/* @__PURE__ */ new Set()), k = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function w(M) {
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
    function E(M) {
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
    function N(M) {
      if (!M.loaded_by || M.loaded_by.length === 0) return [];
      const C = M.hash || M.filename;
      return T.value.has(C) ? M.loaded_by : M.loaded_by.slice(0, 3);
    }
    function A(M) {
      return T.value.has(M);
    }
    function H(M) {
      T.value.has(M) ? T.value.delete(M) : T.value.add(M), T.value = new Set(T.value);
    }
    async function Q() {
      i.value = !0, m.value = null;
      try {
        v.value = await g(n.workflowName);
      } catch (M) {
        m.value = M instanceof Error ? M.message : "Failed to load workflow details";
      } finally {
        i.value = !1;
      }
    }
    function B(M, C) {
      d.value[M] = C, $.value = !0;
    }
    async function L() {
      if (!$.value) {
        r("close");
        return;
      }
      i.value = !0, m.value = null;
      try {
        for (const [M, C] of Object.entries(d.value))
          await y(n.workflowName, M, C);
        r("refresh"), r("close");
      } catch (M) {
        m.value = M instanceof Error ? M.message : "Failed to save changes";
      } finally {
        i.value = !1;
      }
    }
    async function P(M) {
      I.value[M] = !0, m.value = null;
      try {
        await h(n.workflowName, !0, !1), await Q();
      } catch (C) {
        m.value = C instanceof Error ? C.message : "Failed to install node";
      } finally {
        I.value[M] = !1;
      }
    }
    return $e(Q), (M, C) => (o(), s(q, null, [
      f(it, {
        title: `WORKFLOW DETAILS: ${t.workflowName}`,
        size: "lg",
        loading: i.value,
        error: m.value || void 0,
        onClose: C[5] || (C[5] = (F) => r("close"))
      }, {
        body: l(() => [
          v.value ? (o(), s(q, { key: 0 }, [
            e("section", ja, [
              f(bt, { variant: "section" }, {
                default: l(() => [
                  p("MODELS USED (" + a(v.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              v.value.models.length === 0 ? (o(), s("div", Ha, " No models used in this workflow ")) : u("", !0),
              (o(!0), s(q, null, se(v.value.models, (F) => (o(), s("div", {
                key: F.hash || F.filename,
                class: "model-card"
              }, [
                e("div", qa, [
                  C[7] || (C[7] = e("span", { class: "model-icon" }, "📦", -1)),
                  e("span", Ka, a(F.filename), 1)
                ]),
                e("div", Ja, [
                  e("div", Qa, [
                    C[8] || (C[8] = e("span", { class: "label" }, "Status:", -1)),
                    e("span", {
                      class: ne(["value", w(F.status)])
                    }, a(E(F.status)), 3)
                  ]),
                  e("div", Ya, [
                    e("span", Xa, [
                      C[9] || (C[9] = p(" Importance: ", -1)),
                      f(Xt, {
                        size: 14,
                        title: "About importance levels",
                        onClick: C[0] || (C[0] = (V) => _.value = !0)
                      })
                    ]),
                    f(Pa, {
                      "model-value": d.value[F.filename] || F.importance,
                      options: k,
                      "onUpdate:modelValue": (V) => B(F.filename, V)
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  F.loaded_by && F.loaded_by.length > 0 ? (o(), s("div", Za, [
                    C[10] || (C[10] = e("span", { class: "label" }, "Loaded by:", -1)),
                    e("div", el, [
                      (o(!0), s(q, null, se(N(F), (V, j) => (o(), s("div", {
                        key: `${V.node_id}-${j}`,
                        class: "node-reference"
                      }, a(V.node_type) + " (Node #" + a(V.node_id) + ") ", 1))), 128)),
                      F.loaded_by.length > 3 ? (o(), s("button", {
                        key: 0,
                        class: "expand-toggle",
                        onClick: (V) => H(F.hash || F.filename)
                      }, a(A(F.hash || F.filename) ? "▼ Show less" : `▶ View all (${F.loaded_by.length})`), 9, tl)) : u("", !0)
                    ])
                  ])) : u("", !0),
                  F.size_mb ? (o(), s("div", ol, [
                    C[11] || (C[11] = e("span", { class: "label" }, "Size:", -1)),
                    e("span", sl, a(F.size_mb) + " MB", 1)
                  ])) : u("", !0)
                ]),
                F.status !== "available" ? (o(), s("div", nl, [
                  F.status === "downloadable" ? (o(), x(ie, {
                    key: 0,
                    variant: "primary",
                    size: "sm",
                    onClick: C[1] || (C[1] = (V) => r("resolve"))
                  }, {
                    default: l(() => [...C[12] || (C[12] = [
                      p(" Download ", -1)
                    ])]),
                    _: 1
                  })) : F.status === "path_mismatch" ? (o(), x(ie, {
                    key: 1,
                    variant: "secondary",
                    size: "sm",
                    onClick: C[2] || (C[2] = (V) => r("resolve"))
                  }, {
                    default: l(() => [...C[13] || (C[13] = [
                      p(" Sync Path ", -1)
                    ])]),
                    _: 1
                  })) : (o(), x(ie, {
                    key: 2,
                    variant: "secondary",
                    size: "sm",
                    onClick: C[3] || (C[3] = (V) => r("resolve"))
                  }, {
                    default: l(() => [...C[14] || (C[14] = [
                      p(" Resolve ", -1)
                    ])]),
                    _: 1
                  }))
                ])) : u("", !0)
              ]))), 128))
            ]),
            e("section", al, [
              f(bt, { variant: "section" }, {
                default: l(() => [
                  p("NODES USED (" + a(v.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              v.value.nodes.length === 0 ? (o(), s("div", ll, " No custom nodes used in this workflow ")) : u("", !0),
              (o(!0), s(q, null, se(v.value.nodes, (F) => (o(), s("div", {
                key: F.name,
                class: "node-item"
              }, [
                e("span", {
                  class: ne(["node-status", F.status === "installed" ? "installed" : "missing"])
                }, a(F.status === "installed" ? "✓" : "✕"), 3),
                e("span", il, a(F.name), 1),
                F.version ? (o(), s("span", rl, "v" + a(F.version), 1)) : u("", !0),
                F.status === "missing" ? (o(), x(ie, {
                  key: 1,
                  variant: "primary",
                  size: "sm",
                  loading: I.value[F.name],
                  onClick: (V) => P(F.name),
                  class: "node-install-btn"
                }, {
                  default: l(() => [...C[15] || (C[15] = [
                    p(" Install ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading", "onClick"])) : u("", !0)
              ]))), 128))
            ])
          ], 64)) : u("", !0)
        ]),
        footer: l(() => [
          f(ie, {
            variant: "secondary",
            onClick: C[4] || (C[4] = (F) => r("close"))
          }, {
            default: l(() => [...C[16] || (C[16] = [
              p(" Close ", -1)
            ])]),
            _: 1
          }),
          $.value ? (o(), x(ie, {
            key: 0,
            variant: "primary",
            onClick: L
          }, {
            default: l(() => [...C[17] || (C[17] = [
              p(" Save Changes ", -1)
            ])]),
            _: 1
          })) : u("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      f(He, {
        show: _.value,
        title: "Model Importance Levels",
        onClose: C[6] || (C[6] = (F) => _.value = !1)
      }, {
        content: l(() => [...C[18] || (C[18] = [
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
}), cl = /* @__PURE__ */ X(dl, [["__scopeId", "data-v-0b14d32e"]]), ve = Yt({
  items: [],
  status: "idle"
});
let Ve = null;
function eo() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function zt(t) {
  return ve.items.find((c) => c.id === t);
}
async function nt() {
  if (ve.status === "downloading") return;
  const t = ve.items.find((c) => c.status === "queued");
  if (!t) {
    ve.status = "idle";
    return;
  }
  ve.status = "downloading", t.status = "downloading", t.progress = 0, t.downloaded = 0;
  try {
    await ul(t), t.status = "completed", t.progress = 100;
  } catch (c) {
    t.status = "failed", t.error = c instanceof Error ? c.message : "Download failed", t.retries++;
  } finally {
    ve.status = "idle", nt();
  }
}
async function ul(t) {
  return new Promise((c, n) => {
    Ve && (Ve.close(), Ve = null);
    const r = new URLSearchParams({
      url: t.url,
      target_path: t.targetPath,
      filename: t.filename,
      workflow: t.workflow
    }), g = new EventSource(`/v2/comfygit/models/download-stream?${r}`);
    Ve = g;
    let y = Date.now(), h = 0, v = !1;
    g.onmessage = (i) => {
      try {
        const m = JSON.parse(i.data);
        switch (m.type) {
          case "progress":
            t.downloaded = m.downloaded || 0, t.size = m.total || t.size;
            const $ = Date.now(), d = ($ - y) / 1e3;
            if (d > 0.5) {
              const I = t.downloaded - h;
              if (t.speed = I / d, y = $, h = t.downloaded, t.speed > 0 && t.size > 0) {
                const _ = t.size - t.downloaded;
                t.eta = _ / t.speed;
              }
            }
            t.size > 0 && (t.progress = Math.round(t.downloaded / t.size * 100));
            break;
          case "complete":
            v = !0, g.close(), Ve = null, c();
            break;
          case "error":
            v = !0, g.close(), Ve = null, n(new Error(m.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, g.onerror = () => {
      g.close(), Ve = null, v || n(new Error("Connection lost"));
    };
  });
}
async function ml() {
  try {
    const t = await fetch("/v2/comfygit/models/pending-downloads");
    if (!t.ok) return;
    const c = await t.json();
    if (!c.pending_downloads || c.pending_downloads.length === 0) return;
    for (const n of c.pending_downloads) {
      if (ve.items.some((g) => g.url === n.url && g.filename === n.filename))
        continue;
      const r = {
        id: eo(),
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
    console.log(`[ComfyGit] Loaded ${c.pending_downloads.length} pending download(s)`);
  } catch (t) {
    console.warn("[ComfyGit] Failed to load pending downloads:", t);
  }
}
function xt() {
  function t(w) {
    for (const E of w) {
      if (ve.items.some(
        (H) => H.url === E.url && H.targetPath === E.targetPath && ["queued", "downloading", "paused", "completed"].includes(H.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${E.filename}`);
        continue;
      }
      const A = {
        id: eo(),
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
      ve.items.push(A);
    }
    ve.status === "idle" && nt();
  }
  async function c(w) {
    const E = zt(w);
    if (E) {
      if (E.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(E.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        Ve && (Ve.close(), Ve = null), E.status = "failed", E.error = "Cancelled by user", ve.status = "idle", nt();
      } else if (E.status === "queued") {
        const N = ve.items.findIndex((A) => A.id === w);
        N >= 0 && ve.items.splice(N, 1);
      }
    }
  }
  function n(w) {
    const E = zt(w);
    !E || E.status !== "failed" || (E.status = "queued", E.error = void 0, E.progress = 0, E.downloaded = 0, ve.status === "idle" && nt());
  }
  function r(w) {
    const E = zt(w);
    !E || E.status !== "paused" || (E.status = "queued", ve.status === "idle" && nt());
  }
  function g() {
    const w = ve.items.filter((E) => E.status === "paused");
    for (const E of w)
      E.status = "queued";
    ve.status === "idle" && nt();
  }
  function y(w) {
    const E = ve.items.findIndex((N) => N.id === w);
    E >= 0 && ["completed", "failed", "paused"].includes(ve.items[E].status) && ve.items.splice(E, 1);
  }
  function h() {
    ve.items = ve.items.filter((w) => w.status !== "completed");
  }
  function v() {
    ve.items = ve.items.filter((w) => w.status !== "failed");
  }
  const i = U(
    () => ve.items.find((w) => w.status === "downloading")
  ), m = U(
    () => ve.items.filter((w) => w.status === "queued")
  ), $ = U(
    () => ve.items.filter((w) => w.status === "completed")
  ), d = U(
    () => ve.items.filter((w) => w.status === "failed")
  ), I = U(
    () => ve.items.filter((w) => w.status === "paused")
  ), _ = U(() => ve.items.length > 0), T = U(
    () => ve.items.filter((w) => w.status === "queued" || w.status === "downloading").length
  ), k = U(
    () => ve.items.some((w) => w.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: ko(ve),
    // Computed
    currentDownload: i,
    queuedItems: m,
    completedItems: $,
    failedItems: d,
    pausedItems: I,
    hasItems: _,
    activeCount: T,
    hasPaused: k,
    // Actions
    addToQueue: t,
    cancelDownload: c,
    retryDownload: n,
    resumeDownload: r,
    resumeAllPaused: g,
    removeItem: y,
    clearCompleted: h,
    clearFailed: v,
    loadPendingDownloads: ml
  };
}
function vl() {
  const t = b(null), c = b(null), n = b([]), r = b([]), g = b(!1), y = b(null);
  async function h(E, N) {
    var H;
    if (!((H = window.app) != null && H.api))
      throw new Error("ComfyUI API not available");
    const A = await window.app.api.fetchApi(E, N);
    if (!A.ok) {
      const Q = await A.json().catch(() => ({})), B = Q.error || Q.message || `Request failed: ${A.status}`;
      throw new Error(B);
    }
    return A.json();
  }
  async function v(E) {
    g.value = !0, y.value = null;
    try {
      let N;
      return gt() || (N = await h(
        `/v2/comfygit/workflow/${E}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), t.value = N, N;
    } catch (N) {
      const A = N instanceof Error ? N.message : "Unknown error occurred";
      throw y.value = A, N;
    } finally {
      g.value = !1;
    }
  }
  async function i(E, N, A) {
    g.value = !0, y.value = null;
    try {
      let H;
      if (!gt()) {
        const Q = Object.fromEntries(N), B = Object.fromEntries(A);
        H = await h(
          `/v2/comfygit/workflow/${E}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: Q,
              model_choices: B
            })
          }
        );
      }
      return c.value = H, H;
    } catch (H) {
      const Q = H instanceof Error ? H.message : "Unknown error occurred";
      throw y.value = Q, H;
    } finally {
      g.value = !1;
    }
  }
  async function m(E, N = 10) {
    g.value = !0, y.value = null;
    try {
      let A;
      return gt() || (A = await h(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: E, limit: N })
        }
      )), n.value = A.results, A.results;
    } catch (A) {
      const H = A instanceof Error ? A.message : "Unknown error occurred";
      throw y.value = H, A;
    } finally {
      g.value = !1;
    }
  }
  async function $(E, N = 10) {
    g.value = !0, y.value = null;
    try {
      let A;
      return gt() || (A = await h(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: E, limit: N })
        }
      )), r.value = A.results, A.results;
    } catch (A) {
      const H = A instanceof Error ? A.message : "Unknown error occurred";
      throw y.value = H, A;
    } finally {
      g.value = !1;
    }
  }
  const d = Yt({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function I() {
    d.phase = "idle", d.currentFile = void 0, d.currentFileIndex = void 0, d.totalFiles = void 0, d.bytesDownloaded = void 0, d.bytesTotal = void 0, d.completedFiles = [], d.nodesToInstall = [], d.nodesInstalled = [], d.installError = void 0, d.needsRestart = void 0, d.error = void 0;
  }
  async function _(E) {
    d.phase = "installing", d.nodesInstalled = [], d.installError = void 0;
    try {
      let N;
      return gt() || (N = await h(
        `/v2/comfygit/workflow/${E}/install`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), d.nodesInstalled = N.nodes_installed, d.needsRestart = N.nodes_installed.length > 0, N;
    } catch (N) {
      const A = N instanceof Error ? N.message : "Failed to install nodes";
      throw d.installError = A, N;
    }
  }
  async function T(E, N, A) {
    I(), d.phase = "resolving", y.value = null;
    const H = Object.fromEntries(N), Q = Object.fromEntries(A);
    try {
      const B = await fetch(`/v2/comfygit/workflow/${E}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: H,
          model_choices: Q
        })
      });
      if (!B.ok)
        throw new Error(`Request failed: ${B.status}`);
      if (!B.body)
        throw new Error("No response body");
      const L = B.body.getReader(), P = new TextDecoder();
      let M = "";
      for (; ; ) {
        const { done: C, value: F } = await L.read();
        if (C) break;
        M += P.decode(F, { stream: !0 });
        const V = M.split(`

`);
        M = V.pop() || "";
        for (const j of V) {
          if (!j.trim()) continue;
          const W = j.split(`
`);
          let z = "", ee = "";
          for (const R of W)
            R.startsWith("event: ") ? z = R.slice(7) : R.startsWith("data: ") && (ee = R.slice(6));
          if (ee)
            try {
              const R = JSON.parse(ee);
              k(z, R);
            } catch (R) {
              console.warn("Failed to parse SSE event:", R);
            }
        }
      }
    } catch (B) {
      const L = B instanceof Error ? B.message : "Unknown error occurred";
      throw y.value = L, d.error = L, d.phase = "error", B;
    }
  }
  function k(E, N) {
    switch (E) {
      case "batch_start":
        d.phase = "downloading", d.totalFiles = N.total;
        break;
      case "file_start":
        d.currentFile = N.filename, d.currentFileIndex = N.index, d.bytesDownloaded = 0, d.bytesTotal = void 0;
        break;
      case "file_progress":
        d.bytesDownloaded = N.downloaded, d.bytesTotal = N.total;
        break;
      case "file_complete":
        d.completedFiles.push({
          filename: N.filename,
          success: N.success,
          error: N.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        d.nodesToInstall = N.nodes_to_install || [], N.download_results && (d.completedFiles = N.download_results), d.phase = "complete";
        break;
      case "error":
        d.error = N.message, d.phase = "error", y.value = N.message;
        break;
    }
  }
  function w(E, N) {
    const { addToQueue: A } = xt(), H = N.filter((Q) => Q.url && Q.target_path).map((Q) => ({
      workflow: E,
      filename: Q.filename,
      url: Q.url,
      targetPath: Q.target_path,
      size: Q.size || 0,
      type: "model"
    }));
    return H.length > 0 && A(H), H.length;
  }
  return {
    // State
    result: t,
    appliedResult: c,
    searchResults: n,
    modelSearchResults: r,
    isLoading: g,
    error: y,
    progress: d,
    // Methods
    analyzeWorkflow: v,
    applyResolution: i,
    applyResolutionWithProgress: T,
    installNodes: _,
    searchNodes: m,
    searchModels: $,
    resetProgress: I,
    queueModelDownloads: w
  };
}
const fl = { class: "resolution-stepper" }, gl = { class: "stepper-header" }, hl = ["onClick"], pl = {
  key: 0,
  class: "step-icon"
}, yl = {
  key: 1,
  class: "step-number"
}, wl = { class: "step-label" }, kl = {
  key: 0,
  class: "step-connector"
}, bl = { class: "stepper-content" }, _l = /* @__PURE__ */ Y({
  __name: "ResolutionStepper",
  props: {
    steps: {},
    currentStep: {},
    completedSteps: {},
    stepStats: {}
  },
  emits: ["step-change"],
  setup(t, { emit: c }) {
    const n = t, r = c;
    function g(m) {
      var $;
      if (($ = n.stepStats) != null && $[m]) {
        const d = n.stepStats[m];
        return d.total > 0 && d.resolved === d.total;
      }
      return n.completedSteps.includes(m);
    }
    function y(m) {
      var $;
      if (($ = n.stepStats) != null && $[m]) {
        const d = n.stepStats[m];
        return d.resolved > 0 && d.resolved < d.total;
      }
      return !1;
    }
    function h(m) {
      return g(m) ? "state-complete" : y(m) ? "state-partial" : "state-pending";
    }
    function v(m) {
      return !1;
    }
    function i(m) {
      r("step-change", m);
    }
    return (m, $) => (o(), s("div", fl, [
      e("div", gl, [
        (o(!0), s(q, null, se(t.steps, (d, I) => (o(), s("div", {
          key: d.id,
          class: ne(["step", {
            active: t.currentStep === d.id,
            completed: g(d.id),
            "in-progress": y(d.id),
            disabled: v(d.id)
          }]),
          onClick: (_) => i(d.id)
        }, [
          e("div", {
            class: ne(["step-indicator", h(d.id)])
          }, [
            g(d.id) ? (o(), s("span", pl, "✓")) : (o(), s("span", yl, a(I + 1), 1))
          ], 2),
          e("div", wl, a(d.label), 1),
          I < t.steps.length - 1 ? (o(), s("div", kl)) : u("", !0)
        ], 10, hl))), 128))
      ]),
      e("div", bl, [
        ce(m.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), $l = /* @__PURE__ */ X(_l, [["__scopeId", "data-v-2a7b3af8"]]), Cl = /* @__PURE__ */ Y({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(t) {
    const c = t, n = U(() => c.confidence >= 0.9 ? "high" : c.confidence >= 0.7 ? "medium" : "low"), r = U(() => `confidence-${n.value}`), g = U(() => c.showPercentage ? `${Math.round(c.confidence * 100)}%` : n.value.charAt(0).toUpperCase() + n.value.slice(1));
    return (y, h) => (o(), s("span", {
      class: ne(["confidence-badge", r.value, t.size])
    }, a(g.value), 3));
  }
}), Vt = /* @__PURE__ */ X(Cl, [["__scopeId", "data-v-17ec4b80"]]), xl = { class: "node-info" }, Sl = { class: "node-info-text" }, Il = { class: "item-body" }, El = {
  key: 0,
  class: "resolved-state"
}, Ml = {
  key: 1,
  class: "multiple-options"
}, zl = { class: "options-list" }, Ll = ["onClick"], Tl = ["name", "value", "checked", "onChange"], Rl = { class: "option-content" }, Dl = { class: "option-header" }, Nl = { class: "option-package-id" }, Ol = {
  key: 0,
  class: "option-title"
}, Ul = { class: "option-meta" }, Bl = {
  key: 0,
  class: "installed-badge"
}, Pl = { class: "action-buttons" }, Vl = {
  key: 2,
  class: "unresolved"
}, Fl = { class: "action-buttons" }, Al = /* @__PURE__ */ Y({
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
  setup(t, { emit: c }) {
    const n = t, r = c, g = U(() => !!n.choice);
    U(() => {
      var v;
      return (v = n.choice) == null ? void 0 : v.action;
    }), U(() => {
      var v;
      return (v = n.choice) == null ? void 0 : v.package_id;
    });
    const y = U(() => {
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
    function h(v) {
      r("option-selected", v);
    }
    return (v, i) => (o(), s("div", {
      class: ne(["node-resolution-item", { selected: t.isSelected, ambiguous: t.hasMultipleOptions, resolved: g.value }])
    }, [
      e("div", xl, [
        e("span", Sl, [
          i[7] || (i[7] = p("Node type: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (o(), s("span", {
          key: 0,
          class: ne(["status-badge", y.value])
        }, a(t.statusLabel), 3)) : u("", !0)
      ]),
      e("div", Il, [
        g.value ? (o(), s("div", El, [
          f(ie, {
            variant: "ghost",
            size: "sm",
            onClick: i[0] || (i[0] = (m) => r("clear-choice"))
          }, {
            default: l(() => [...i[8] || (i[8] = [
              p(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (o(), s("div", Ml, [
          i[12] || (i[12] = e("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          e("div", zl, [
            (o(!0), s(q, null, se(t.options, (m, $) => (o(), s("label", {
              key: m.package_id,
              class: ne(["option-card", { selected: t.selectedOptionIndex === $ }]),
              onClick: (d) => h($)
            }, [
              e("input", {
                type: "radio",
                name: `node-option-${t.nodeType}`,
                value: $,
                checked: t.selectedOptionIndex === $,
                onChange: (d) => h($)
              }, null, 40, Tl),
              e("div", Rl, [
                e("div", Dl, [
                  e("span", Nl, a(m.package_id), 1),
                  f(Vt, {
                    confidence: m.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                m.title && m.title !== m.package_id ? (o(), s("div", Ol, a(m.title), 1)) : u("", !0),
                e("div", Ul, [
                  m.is_installed ? (o(), s("span", Bl, "Already Installed")) : u("", !0)
                ])
              ])
            ], 10, Ll))), 128))
          ]),
          e("div", Pl, [
            f(ie, {
              variant: "ghost",
              size: "sm",
              onClick: i[1] || (i[1] = (m) => r("search"))
            }, {
              default: l(() => [...i[9] || (i[9] = [
                p(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            f(ie, {
              variant: "ghost",
              size: "sm",
              onClick: i[2] || (i[2] = (m) => r("manual-entry"))
            }, {
              default: l(() => [...i[10] || (i[10] = [
                p(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            f(ie, {
              variant: "secondary",
              size: "sm",
              onClick: i[3] || (i[3] = (m) => r("mark-optional"))
            }, {
              default: l(() => [...i[11] || (i[11] = [
                p(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (o(), s("div", Vl, [
          i[16] || (i[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "No matching package found in registry")
          ], -1)),
          e("div", Fl, [
            f(ie, {
              variant: "primary",
              size: "sm",
              onClick: i[4] || (i[4] = (m) => r("search"))
            }, {
              default: l(() => [...i[13] || (i[13] = [
                p(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            f(ie, {
              variant: "secondary",
              size: "sm",
              onClick: i[5] || (i[5] = (m) => r("manual-entry"))
            }, {
              default: l(() => [...i[14] || (i[14] = [
                p(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            f(ie, {
              variant: "secondary",
              size: "sm",
              onClick: i[6] || (i[6] = (m) => r("mark-optional"))
            }, {
              default: l(() => [...i[15] || (i[15] = [
                p(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Wl = /* @__PURE__ */ X(Al, [["__scopeId", "data-v-e02629e7"]]), Gl = { class: "item-navigator" }, jl = { class: "nav-item-info" }, Hl = ["title"], ql = { class: "nav-controls" }, Kl = { class: "nav-arrows" }, Jl = ["disabled"], Ql = ["disabled"], Yl = { class: "nav-position" }, Xl = /* @__PURE__ */ Y({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(t, { emit: c }) {
    const n = c;
    return (r, g) => (o(), s("div", Gl, [
      e("div", jl, [
        e("code", {
          class: "item-name",
          title: t.itemName
        }, a(t.itemName), 9, Hl)
      ]),
      e("div", ql, [
        e("div", Kl, [
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === 0,
            onClick: g[0] || (g[0] = (y) => n("prev")),
            title: "Previous item"
          }, " ← ", 8, Jl),
          e("button", {
            class: "nav-arrow",
            disabled: t.currentIndex === t.totalItems - 1,
            onClick: g[1] || (g[1] = (y) => n("next")),
            title: "Next item"
          }, " → ", 8, Ql)
        ]),
        e("span", Yl, a(t.currentIndex + 1) + "/" + a(t.totalItems), 1)
      ])
    ]));
  }
}), to = /* @__PURE__ */ X(Xl, [["__scopeId", "data-v-74af7920"]]), Zl = ["type", "value", "placeholder", "disabled"], ei = {
  key: 0,
  class: "base-input-error"
}, ti = /* @__PURE__ */ Y({
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
    return (c, n) => (o(), s("div", {
      class: ne(["base-input-wrapper", { "full-width": t.fullWidth, error: !!t.error }])
    }, [
      e("input", {
        type: t.type,
        value: t.modelValue,
        placeholder: t.placeholder,
        disabled: t.disabled,
        class: ne(["base-input", { error: !!t.error }]),
        onInput: n[0] || (n[0] = (r) => c.$emit("update:modelValue", r.target.value)),
        onKeyup: [
          n[1] || (n[1] = Qe((r) => c.$emit("enter"), ["enter"])),
          n[2] || (n[2] = Qe((r) => c.$emit("escape"), ["escape"]))
        ]
      }, null, 42, Zl),
      t.error ? (o(), s("span", ei, a(t.error), 1)) : u("", !0)
    ], 2));
  }
}), Oe = /* @__PURE__ */ X(ti, [["__scopeId", "data-v-9ba02cdc"]]), oi = { class: "node-resolution-step" }, si = { class: "step-header" }, ni = { class: "stat-badge" }, ai = {
  key: 1,
  class: "step-body"
}, li = {
  key: 2,
  class: "empty-state"
}, ii = { class: "node-search-modal" }, ri = { class: "node-modal-body" }, di = {
  key: 0,
  class: "node-search-results"
}, ci = ["onClick"], ui = { class: "node-result-header" }, mi = { class: "node-result-package-id" }, vi = {
  key: 0,
  class: "node-result-description"
}, fi = {
  key: 1,
  class: "node-no-results"
}, gi = {
  key: 2,
  class: "node-searching"
}, hi = { class: "node-manual-entry-modal" }, pi = { class: "node-modal-body" }, yi = { class: "node-modal-actions" }, wi = /* @__PURE__ */ Y({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice"],
  setup(t, { emit: c }) {
    const n = t, r = c, g = b(0), y = b(!1), h = b(!1), v = b(""), i = b(""), m = b([]), $ = b(!1), d = U(() => n.nodes[g.value]), I = U(() => n.nodes.filter((F) => n.nodeChoices.has(F.node_type)).length), _ = U(() => {
      var V;
      if (!d.value) return "not-found";
      const F = n.nodeChoices.get(d.value.node_type);
      if (F)
        switch (F.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (V = d.value.options) != null && V.length ? "ambiguous" : "not-found";
    }), T = U(() => {
      var V;
      if (!d.value) return;
      const F = n.nodeChoices.get(d.value.node_type);
      if (F)
        switch (F.action) {
          case "install":
            return F.package_id ? `→ ${F.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (V = d.value.options) != null && V.length ? `${d.value.options.length} matches` : "Not Found";
    });
    function k(F) {
      F >= 0 && F < n.nodes.length && (g.value = F);
    }
    function w() {
      d.value && r("mark-optional", d.value.node_type);
    }
    function E() {
      d.value && r("skip", d.value.node_type);
    }
    function N(F) {
      d.value && r("option-selected", d.value.node_type, F);
    }
    function A() {
      d.value && r("clear-choice", d.value.node_type);
    }
    function H() {
      d.value && (v.value = d.value.node_type, y.value = !0);
    }
    function Q() {
      i.value = "", h.value = !0;
    }
    function B() {
      y.value = !1, v.value = "", m.value = [];
    }
    function L() {
      h.value = !1, i.value = "";
    }
    function P() {
      $.value = !0, setTimeout(() => {
        $.value = !1;
      }, 300);
    }
    function M(F) {
      d.value && (r("manual-entry", d.value.node_type, F.package_id), B());
    }
    function C() {
      !d.value || !i.value.trim() || (r("manual-entry", d.value.node_type, i.value.trim()), L());
    }
    return (F, V) => {
      var j, W;
      return o(), s("div", oi, [
        e("div", si, [
          V[4] || (V[4] = e("div", { class: "step-info" }, [
            e("h3", { class: "step-title" }, "Resolve Missing Nodes"),
            e("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
          ], -1)),
          e("span", ni, a(I.value) + "/" + a(t.nodes.length) + " resolved", 1)
        ]),
        d.value ? (o(), x(to, {
          key: 0,
          "item-name": d.value.node_type,
          "current-index": g.value,
          "total-items": t.nodes.length,
          onPrev: V[0] || (V[0] = (z) => k(g.value - 1)),
          onNext: V[1] || (V[1] = (z) => k(g.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : u("", !0),
        d.value ? (o(), s("div", ai, [
          f(Wl, {
            "node-type": d.value.node_type,
            "has-multiple-options": !!((j = d.value.options) != null && j.length),
            options: d.value.options,
            choice: (W = t.nodeChoices) == null ? void 0 : W.get(d.value.node_type),
            status: _.value,
            "status-label": T.value,
            onMarkOptional: w,
            onSkip: E,
            onManualEntry: Q,
            onSearch: H,
            onOptionSelected: N,
            onClearChoice: A
          }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (o(), s("div", li, [...V[5] || (V[5] = [
          e("p", null, "No nodes need resolution.", -1)
        ])])),
        (o(), x(xe, { to: "body" }, [
          y.value ? (o(), s("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: be(B, ["self"])
          }, [
            e("div", ii, [
              e("div", { class: "node-modal-header" }, [
                V[6] || (V[6] = e("h4", null, "Search Node Packages", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: B
                }, "✕")
              ]),
              e("div", ri, [
                f(Oe, {
                  modelValue: v.value,
                  "onUpdate:modelValue": V[2] || (V[2] = (z) => v.value = z),
                  placeholder: "Search by node type, package name...",
                  onInput: P
                }, null, 8, ["modelValue"]),
                m.value.length > 0 ? (o(), s("div", di, [
                  (o(!0), s(q, null, se(m.value, (z) => (o(), s("div", {
                    key: z.package_id,
                    class: "node-search-result-item",
                    onClick: (ee) => M(z)
                  }, [
                    e("div", ui, [
                      e("code", mi, a(z.package_id), 1),
                      z.match_confidence ? (o(), x(Vt, {
                        key: 0,
                        confidence: z.match_confidence,
                        size: "sm"
                      }, null, 8, ["confidence"])) : u("", !0)
                    ]),
                    z.description ? (o(), s("div", vi, a(z.description), 1)) : u("", !0)
                  ], 8, ci))), 128))
                ])) : v.value && !$.value ? (o(), s("div", fi, ' No packages found matching "' + a(v.value) + '" ', 1)) : u("", !0),
                $.value ? (o(), s("div", gi, "Searching...")) : u("", !0)
              ])
            ])
          ])) : u("", !0)
        ])),
        (o(), x(xe, { to: "body" }, [
          h.value ? (o(), s("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: be(L, ["self"])
          }, [
            e("div", hi, [
              e("div", { class: "node-modal-header" }, [
                V[7] || (V[7] = e("h4", null, "Enter Package Manually", -1)),
                e("button", {
                  class: "node-modal-close-btn",
                  onClick: L
                }, "✕")
              ]),
              e("div", pi, [
                f(Oe, {
                  modelValue: i.value,
                  "onUpdate:modelValue": V[3] || (V[3] = (z) => i.value = z),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                e("div", yi, [
                  f(ie, {
                    variant: "secondary",
                    onClick: L
                  }, {
                    default: l(() => [...V[8] || (V[8] = [
                      p("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  f(ie, {
                    variant: "primary",
                    disabled: !i.value.trim(),
                    onClick: C
                  }, {
                    default: l(() => [...V[9] || (V[9] = [
                      p(" Add Package ", -1)
                    ])]),
                    _: 1
                  }, 8, ["disabled"])
                ])
              ])
            ])
          ])) : u("", !0)
        ]))
      ]);
    };
  }
}), ki = /* @__PURE__ */ X(wi, [["__scopeId", "data-v-4fb196b1"]]), bi = { class: "node-info" }, _i = { class: "node-info-text" }, $i = { class: "item-body" }, Ci = {
  key: 0,
  class: "resolved-state"
}, xi = {
  key: 1,
  class: "multiple-options"
}, Si = { class: "options-list" }, Ii = ["onClick"], Ei = ["name", "value", "checked", "onChange"], Mi = { class: "option-content" }, zi = { class: "option-header" }, Li = { class: "option-filename" }, Ti = { class: "option-meta" }, Ri = { class: "option-size" }, Di = { class: "option-category" }, Ni = { class: "option-path" }, Oi = { class: "action-buttons" }, Ui = {
  key: 2,
  class: "unresolved"
}, Bi = { class: "action-buttons" }, Pi = /* @__PURE__ */ Y({
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
    const n = t, r = c, g = U(() => !!n.choice);
    U(() => {
      var i;
      return (i = n.choice) == null ? void 0 : i.action;
    }), U(() => {
      var i, m;
      return ((m = (i = n.choice) == null ? void 0 : i.selected_model) == null ? void 0 : m.filename) || "selected";
    });
    const y = U(() => {
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
    function h(i) {
      r("option-selected", i);
    }
    function v(i) {
      if (!i) return "Unknown";
      const m = i / (1024 * 1024 * 1024);
      return m >= 1 ? `${m.toFixed(2)} GB` : `${(i / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (i, m) => (o(), s("div", {
      class: ne(["model-resolution-item", { resolved: g.value, ambiguous: t.hasMultipleOptions }])
    }, [
      e("div", bi, [
        e("span", _i, [
          m[7] || (m[7] = p("Used by: ", -1)),
          e("code", null, a(t.nodeType), 1)
        ]),
        t.statusLabel ? (o(), s("span", {
          key: 0,
          class: ne(["status-badge", y.value])
        }, a(t.statusLabel), 3)) : u("", !0)
      ]),
      e("div", $i, [
        g.value ? (o(), s("div", Ci, [
          f(ie, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = ($) => r("clear-choice"))
          }, {
            default: l(() => [...m[8] || (m[8] = [
              p(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : t.hasMultipleOptions && t.options ? (o(), s("div", xi, [
          m[12] || (m[12] = e("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          e("div", Si, [
            (o(!0), s(q, null, se(t.options, ($, d) => (o(), s("label", {
              key: $.model.hash,
              class: ne(["option-card", { selected: t.selectedOptionIndex === d }]),
              onClick: (I) => h(d)
            }, [
              e("input", {
                type: "radio",
                name: `model-option-${t.filename}`,
                value: d,
                checked: t.selectedOptionIndex === d,
                onChange: (I) => h(d)
              }, null, 40, Ei),
              e("div", Mi, [
                e("div", zi, [
                  e("span", Li, a($.model.filename), 1),
                  f(Vt, {
                    confidence: $.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                e("div", Ti, [
                  e("span", Ri, a(v($.model.size)), 1),
                  e("span", Di, a($.model.category), 1)
                ]),
                e("div", Ni, a($.model.relative_path), 1)
              ])
            ], 10, Ii))), 128))
          ]),
          e("div", Oi, [
            f(ie, {
              variant: "ghost",
              size: "sm",
              onClick: m[1] || (m[1] = ($) => r("search"))
            }, {
              default: l(() => [...m[9] || (m[9] = [
                p(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            f(ie, {
              variant: "ghost",
              size: "sm",
              onClick: m[2] || (m[2] = ($) => r("download-url"))
            }, {
              default: l(() => [...m[10] || (m[10] = [
                p(" Download URL ", -1)
              ])]),
              _: 1
            }),
            f(ie, {
              variant: "secondary",
              size: "sm",
              onClick: m[3] || (m[3] = ($) => r("mark-optional"))
            }, {
              default: l(() => [...m[11] || (m[11] = [
                p(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (o(), s("div", Ui, [
          m[16] || (m[16] = e("div", { class: "unresolved-message" }, [
            e("span", { class: "warning-icon" }, "⚠"),
            e("span", null, "Model not found in workspace")
          ], -1)),
          e("div", Bi, [
            f(ie, {
              variant: "primary",
              size: "sm",
              onClick: m[4] || (m[4] = ($) => r("search"))
            }, {
              default: l(() => [...m[13] || (m[13] = [
                p(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            f(ie, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = ($) => r("download-url"))
            }, {
              default: l(() => [...m[14] || (m[14] = [
                p(" Download URL ", -1)
              ])]),
              _: 1
            }),
            f(ie, {
              variant: "secondary",
              size: "sm",
              onClick: m[6] || (m[6] = ($) => r("mark-optional"))
            }, {
              default: l(() => [...m[15] || (m[15] = [
                p(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Vi = /* @__PURE__ */ X(Pi, [["__scopeId", "data-v-8a82fefa"]]), Fi = { class: "model-resolution-step" }, Ai = { class: "step-header" }, Wi = { class: "step-info" }, Gi = { class: "step-title" }, ji = { class: "step-description" }, Hi = { class: "stat-badge" }, qi = {
  key: 1,
  class: "step-body"
}, Ki = {
  key: 2,
  class: "empty-state"
}, Ji = { class: "model-search-modal" }, Qi = { class: "model-modal-body" }, Yi = {
  key: 0,
  class: "model-search-results"
}, Xi = ["onClick"], Zi = { class: "model-result-header" }, er = { class: "model-result-filename" }, tr = { class: "model-result-meta" }, or = { class: "model-result-category" }, sr = { class: "model-result-size" }, nr = {
  key: 0,
  class: "model-result-path"
}, ar = {
  key: 1,
  class: "model-no-results"
}, lr = {
  key: 2,
  class: "model-searching"
}, ir = { class: "model-download-url-modal" }, rr = { class: "model-modal-body" }, dr = { class: "model-input-group" }, cr = { class: "model-input-group" }, ur = { class: "model-modal-actions" }, mr = /* @__PURE__ */ Y({
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
    function r(R) {
      var O;
      return R && ((O = n[R]) == null ? void 0 : O[0]) || null;
    }
    const g = t, y = c, h = b(0), v = b(!1), i = b(!1), m = b(""), $ = b(""), d = b(""), I = b([]), _ = b(!1), T = U(() => g.models[h.value]), k = U(() => g.models.some((R) => R.is_download_intent)), w = U(() => g.models.filter(
      (R) => g.modelChoices.has(R.filename) || R.is_download_intent
    ).length), E = U(() => {
      var O;
      if (!T.value) return "";
      const R = r((O = T.value.reference) == null ? void 0 : O.node_type);
      return R ? `${R}/${T.value.filename}` : "";
    }), N = U(() => {
      var O;
      if (!T.value) return "not-found";
      const R = g.modelChoices.get(T.value.filename);
      if (R)
        switch (R.action) {
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
      return T.value.is_download_intent ? "download" : (O = T.value.options) != null && O.length ? "ambiguous" : "not-found";
    }), A = U(() => {
      var O, ae;
      if (!T.value) return;
      const R = g.modelChoices.get(T.value.filename);
      if (R)
        switch (R.action) {
          case "select":
            return (O = R.selected_model) != null && O.filename ? `→ ${R.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return T.value.is_download_intent ? "Pending Download" : (ae = T.value.options) != null && ae.length ? `${T.value.options.length} matches` : "Not Found";
    });
    function H(R) {
      R >= 0 && R < g.models.length && (h.value = R);
    }
    function Q() {
      T.value && y("mark-optional", T.value.filename);
    }
    function B() {
      T.value && y("skip", T.value.filename);
    }
    function L(R) {
      T.value && y("option-selected", T.value.filename, R);
    }
    function P() {
      T.value && y("clear-choice", T.value.filename);
    }
    function M() {
      T.value && (m.value = T.value.filename, v.value = !0);
    }
    function C() {
      T.value && ($.value = T.value.download_source || "", d.value = T.value.target_path || E.value, i.value = !0);
    }
    function F() {
      v.value = !1, m.value = "", I.value = [];
    }
    function V() {
      i.value = !1, $.value = "", d.value = "";
    }
    function j() {
      _.value = !0, setTimeout(() => {
        _.value = !1;
      }, 300);
    }
    function W(R) {
      T.value && F();
    }
    function z() {
      !T.value || !$.value.trim() || (y("download-url", T.value.filename, $.value.trim(), d.value.trim() || void 0), V());
    }
    function ee(R) {
      if (!R) return "Unknown";
      const O = R / (1024 * 1024 * 1024);
      return O >= 1 ? `${O.toFixed(2)} GB` : `${(R / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (R, O) => {
      var ae, te, de;
      return o(), s("div", Fi, [
        e("div", Ai, [
          e("div", Wi, [
            e("h3", Gi, a(k.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            e("p", ji, a(k.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          e("span", Hi, a(w.value) + "/" + a(t.models.length) + " resolved", 1)
        ]),
        T.value ? (o(), x(to, {
          key: 0,
          "item-name": T.value.filename,
          "current-index": h.value,
          "total-items": t.models.length,
          onPrev: O[0] || (O[0] = (pe) => H(h.value - 1)),
          onNext: O[1] || (O[1] = (pe) => H(h.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : u("", !0),
        T.value ? (o(), s("div", qi, [
          f(Vi, {
            filename: T.value.filename,
            "node-type": ((ae = T.value.reference) == null ? void 0 : ae.node_type) || "Unknown",
            "has-multiple-options": !!((te = T.value.options) != null && te.length),
            options: T.value.options,
            choice: (de = t.modelChoices) == null ? void 0 : de.get(T.value.filename),
            status: N.value,
            "status-label": A.value,
            onMarkOptional: Q,
            onSkip: B,
            onDownloadUrl: C,
            onSearch: M,
            onOptionSelected: L,
            onClearChoice: P
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (o(), s("div", Ki, [...O[5] || (O[5] = [
          e("p", null, "No models need resolution.", -1)
        ])])),
        (o(), x(xe, { to: "body" }, [
          v.value ? (o(), s("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: be(F, ["self"])
          }, [
            e("div", Ji, [
              e("div", { class: "model-modal-header" }, [
                O[6] || (O[6] = e("h4", null, "Search Workspace Models", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: F
                }, "✕")
              ]),
              e("div", Qi, [
                f(Oe, {
                  modelValue: m.value,
                  "onUpdate:modelValue": O[2] || (O[2] = (pe) => m.value = pe),
                  placeholder: "Search by filename, category...",
                  onInput: j
                }, null, 8, ["modelValue"]),
                I.value.length > 0 ? (o(), s("div", Yi, [
                  (o(!0), s(q, null, se(I.value, (pe) => (o(), s("div", {
                    key: pe.hash,
                    class: "model-search-result-item",
                    onClick: (ye) => W()
                  }, [
                    e("div", Zi, [
                      e("code", er, a(pe.filename), 1)
                    ]),
                    e("div", tr, [
                      e("span", or, a(pe.category), 1),
                      e("span", sr, a(ee(pe.size)), 1)
                    ]),
                    pe.relative_path ? (o(), s("div", nr, a(pe.relative_path), 1)) : u("", !0)
                  ], 8, Xi))), 128))
                ])) : m.value && !_.value ? (o(), s("div", ar, ' No models found matching "' + a(m.value) + '" ', 1)) : u("", !0),
                _.value ? (o(), s("div", lr, "Searching...")) : u("", !0)
              ])
            ])
          ])) : u("", !0)
        ])),
        (o(), x(xe, { to: "body" }, [
          i.value ? (o(), s("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: be(V, ["self"])
          }, [
            e("div", ir, [
              e("div", { class: "model-modal-header" }, [
                O[7] || (O[7] = e("h4", null, "Enter Download URL", -1)),
                e("button", {
                  class: "model-modal-close-btn",
                  onClick: V
                }, "✕")
              ]),
              e("div", rr, [
                e("div", dr, [
                  O[8] || (O[8] = e("label", { class: "model-input-label" }, "Download URL", -1)),
                  f(Oe, {
                    modelValue: $.value,
                    "onUpdate:modelValue": O[3] || (O[3] = (pe) => $.value = pe),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                e("div", cr, [
                  O[9] || (O[9] = e("label", { class: "model-input-label" }, "Host Path", -1)),
                  f(Oe, {
                    modelValue: d.value,
                    "onUpdate:modelValue": O[4] || (O[4] = (pe) => d.value = pe),
                    placeholder: E.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                e("div", ur, [
                  f(ie, {
                    variant: "secondary",
                    onClick: V
                  }, {
                    default: l(() => [...O[10] || (O[10] = [
                      p("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  f(ie, {
                    variant: "primary",
                    disabled: !$.value.trim() || !d.value.trim(),
                    onClick: z
                  }, {
                    default: l(() => [...O[11] || (O[11] = [
                      p(" Queue Download ", -1)
                    ])]),
                    _: 1
                  }, 8, ["disabled"])
                ])
              ])
            ])
          ])) : u("", !0)
        ]))
      ]);
    };
  }
}), vr = /* @__PURE__ */ X(mr, [["__scopeId", "data-v-c6acbada"]]), fr = { class: "applying-step" }, gr = {
  key: 0,
  class: "phase-content"
}, hr = {
  key: 1,
  class: "phase-content"
}, pr = { class: "phase-description" }, yr = { class: "install-list" }, wr = {
  key: 2,
  class: "phase-content"
}, kr = { class: "completion-summary" }, br = {
  key: 0,
  class: "summary-item success"
}, _r = { class: "summary-text" }, $r = {
  key: 1,
  class: "summary-item error"
}, Cr = { class: "summary-text" }, xr = {
  key: 2,
  class: "restart-prompt"
}, Sr = {
  key: 3,
  class: "phase-content error"
}, Ir = { class: "error-message" }, Er = /* @__PURE__ */ Y({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart"],
  setup(t) {
    return (c, n) => (o(), s("div", fr, [
      t.progress.phase === "resolving" ? (o(), s("div", gr, [...n[1] || (n[1] = [
        e("div", { class: "phase-header" }, [
          e("div", { class: "loading-spinner" }),
          e("h3", { class: "phase-title" }, "Applying Resolution")
        ], -1),
        e("p", { class: "phase-description" }, "Processing your choices...", -1)
      ])])) : t.progress.phase === "installing" ? (o(), s("div", hr, [
        n[3] || (n[3] = e("div", { class: "phase-header" }, [
          e("div", { class: "loading-spinner" }),
          e("h3", { class: "phase-title" }, "Installing Node Packages")
        ], -1)),
        e("p", pr, "Installing " + a(t.progress.nodesToInstall.length) + " package" + a(t.progress.nodesToInstall.length > 1 ? "s" : "") + "...", 1),
        e("div", yr, [
          (o(!0), s(q, null, se(t.progress.nodesToInstall, (r) => (o(), s("div", {
            key: r,
            class: "install-item"
          }, [
            n[2] || (n[2] = e("span", { class: "install-icon" }, "⬇", -1)),
            e("code", null, a(r), 1)
          ]))), 128))
        ])
      ])) : t.progress.phase === "complete" ? (o(), s("div", wr, [
        n[9] || (n[9] = e("div", { class: "phase-header" }, [
          e("span", { class: "phase-icon success" }, "✓"),
          e("h3", { class: "phase-title" }, "Resolution Complete")
        ], -1)),
        e("div", kr, [
          t.progress.nodesInstalled.length > 0 ? (o(), s("div", br, [
            n[4] || (n[4] = e("span", { class: "summary-icon" }, "✓", -1)),
            e("span", _r, a(t.progress.nodesInstalled.length) + " node package" + a(t.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
          ])) : u("", !0),
          t.progress.installError ? (o(), s("div", $r, [
            n[5] || (n[5] = e("span", { class: "summary-icon" }, "✗", -1)),
            e("span", Cr, "Installation error: " + a(t.progress.installError), 1)
          ])) : u("", !0),
          n[7] || (n[7] = e("div", { class: "summary-item success" }, [
            e("span", { class: "summary-icon" }, "✓"),
            e("span", { class: "summary-text" }, "Workflow dependencies resolved")
          ], -1)),
          n[8] || (n[8] = e("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
          t.progress.needsRestart ? (o(), s("div", xr, [
            n[6] || (n[6] = e("div", { class: "restart-warning" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("div", { class: "warning-content" }, [
                e("strong", null, "Restart Required"),
                e("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
              ])
            ], -1)),
            e("button", {
              class: "restart-button",
              onClick: n[0] || (n[0] = (r) => c.$emit("restart"))
            }, " Restart ComfyUI ")
          ])) : u("", !0)
        ])
      ])) : t.progress.phase === "error" ? (o(), s("div", Sr, [
        n[10] || (n[10] = e("div", { class: "phase-header" }, [
          e("span", { class: "phase-icon error" }, "✗"),
          e("h3", { class: "phase-title" }, "Resolution Failed")
        ], -1)),
        e("p", Ir, a(t.progress.error), 1)
      ])) : u("", !0)
    ]));
  }
}), Mr = /* @__PURE__ */ X(Er, [["__scopeId", "data-v-eb46c564"]]), zr = {
  key: 0,
  class: "loading-state"
}, Lr = {
  key: 1,
  class: "wizard-content"
}, Tr = {
  key: 0,
  class: "step-content"
}, Rr = { class: "analysis-summary" }, Dr = { class: "analysis-header" }, Nr = { class: "summary-description" }, Or = { class: "stats-grid" }, Ur = { class: "stat-card" }, Br = { class: "stat-items" }, Pr = {
  key: 0,
  class: "stat-item success"
}, Vr = { class: "stat-count" }, Fr = {
  key: 1,
  class: "stat-item info"
}, Ar = { class: "stat-count" }, Wr = {
  key: 2,
  class: "stat-item warning"
}, Gr = { class: "stat-count" }, jr = {
  key: 3,
  class: "stat-item error"
}, Hr = { class: "stat-count" }, qr = { class: "stat-card" }, Kr = { class: "stat-items" }, Jr = { class: "stat-item success" }, Qr = { class: "stat-count" }, Yr = {
  key: 0,
  class: "stat-item info"
}, Xr = { class: "stat-count" }, Zr = {
  key: 1,
  class: "stat-item warning"
}, ed = { class: "stat-count" }, td = {
  key: 2,
  class: "stat-item error"
}, od = { class: "stat-count" }, sd = {
  key: 0,
  class: "status-message warning"
}, nd = { class: "status-text" }, ad = {
  key: 1,
  class: "status-message info"
}, ld = { class: "status-text" }, id = {
  key: 2,
  class: "status-message info"
}, rd = { class: "status-text" }, dd = {
  key: 3,
  class: "status-message success"
}, cd = {
  key: 3,
  class: "step-content"
}, ud = { class: "review-summary" }, md = { class: "review-stats" }, vd = { class: "review-stat" }, fd = { class: "stat-value" }, gd = { class: "review-stat" }, hd = { class: "stat-value" }, pd = { class: "review-stat" }, yd = { class: "stat-value" }, wd = { class: "review-stat" }, kd = { class: "stat-value" }, bd = {
  key: 0,
  class: "review-section"
}, _d = { class: "section-title" }, $d = { class: "review-items" }, Cd = { class: "item-name" }, xd = {
  key: 1,
  class: "review-section"
}, Sd = { class: "section-title" }, Id = { class: "review-items" }, Ed = { class: "item-name" }, Md = { class: "item-choice" }, zd = {
  key: 0,
  class: "choice-badge install"
}, Ld = {
  key: 1,
  class: "choice-badge optional"
}, Td = {
  key: 2,
  class: "choice-badge skip"
}, Rd = {
  key: 1,
  class: "choice-badge pending"
}, Dd = {
  key: 2,
  class: "review-section"
}, Nd = { class: "section-title" }, Od = { class: "review-items" }, Ud = { class: "item-name" }, Bd = { class: "item-choice" }, Pd = {
  key: 0,
  class: "choice-badge install"
}, Vd = {
  key: 1,
  class: "choice-badge download"
}, Fd = {
  key: 2,
  class: "choice-badge optional"
}, Ad = {
  key: 3,
  class: "choice-badge skip"
}, Wd = {
  key: 4,
  class: "choice-badge skip"
}, Gd = {
  key: 1,
  class: "choice-badge download"
}, jd = {
  key: 2,
  class: "choice-badge pending"
}, Hd = {
  key: 3,
  class: "no-choices"
}, qd = /* @__PURE__ */ Y({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(t, { emit: c }) {
    const n = t, r = c, { analyzeWorkflow: g, applyResolution: y, installNodes: h, queueModelDownloads: v, progress: i, resetProgress: m } = vl(), { loadPendingDownloads: $ } = xt(), d = b(null), I = b(!1), _ = b(!1), T = b(null), k = b("analysis"), w = b([]), E = b(/* @__PURE__ */ new Map()), N = b(/* @__PURE__ */ new Map()), A = U(() => {
      const G = [
        { id: "analysis", label: "Analysis" }
      ];
      return Q.value && G.push({ id: "nodes", label: "Nodes" }), (B.value || L.value) && G.push({ id: "models", label: "Models" }), G.push({ id: "review", label: "Review" }), k.value === "applying" && G.push({ id: "applying", label: "Applying" }), G;
    }), H = U(() => d.value ? d.value.stats.needs_user_input : !1), Q = U(() => d.value ? d.value.nodes.unresolved.length > 0 || d.value.nodes.ambiguous.length > 0 : !1), B = U(() => d.value ? d.value.models.unresolved.length > 0 || d.value.models.ambiguous.length > 0 : !1), L = U(() => d.value ? d.value.stats.download_intents > 0 : !1), P = U(() => d.value ? d.value.stats.nodes_needing_installation > 0 : !1), M = U(() => d.value ? d.value.nodes.resolved.length - d.value.stats.nodes_needing_installation : 0), C = U(() => {
      if (!d.value) return [];
      const G = d.value.nodes.resolved.filter((oe) => !oe.is_installed), D = /* @__PURE__ */ new Set();
      return G.filter((oe) => D.has(oe.package.package_id) ? !1 : (D.add(oe.package.package_id), !0));
    }), F = U(() => d.value ? d.value.models.resolved.filter((G) => G.match_type === "download_intent").map((G) => ({
      filename: G.reference.widget_value,
      reference: G.reference,
      is_download_intent: !0,
      resolved_model: G.model,
      download_source: G.download_source,
      target_path: G.target_path
    })) : []), V = U(() => {
      if (!d.value) return [];
      const G = d.value.nodes.unresolved.map((oe) => ({
        node_type: oe.reference.node_type,
        reason: oe.reason,
        is_unresolved: !0,
        options: void 0
      })), D = d.value.nodes.ambiguous.map((oe) => ({
        node_type: oe.reference.node_type,
        has_multiple_options: !0,
        options: oe.options.map((ge) => ({
          package_id: ge.package.package_id,
          title: ge.package.title,
          match_confidence: ge.match_confidence,
          match_type: ge.match_type,
          is_installed: ge.is_installed
        }))
      }));
      return [...G, ...D];
    }), j = U(() => {
      if (!d.value) return [];
      const G = d.value.models.unresolved.map((oe) => ({
        filename: oe.reference.widget_value,
        reference: oe.reference,
        reason: oe.reason,
        is_unresolved: !0,
        options: void 0
      })), D = d.value.models.ambiguous.map((oe) => ({
        filename: oe.reference.widget_value,
        reference: oe.reference,
        has_multiple_options: !0,
        options: oe.options.map((ge) => ({
          model: ge.model,
          match_confidence: ge.match_confidence,
          match_type: ge.match_type,
          has_download_source: ge.has_download_source
        }))
      }));
      return [...G, ...D];
    }), W = U(() => {
      const G = j.value, D = F.value.map((oe) => ({
        filename: oe.filename,
        reference: oe.reference,
        is_download_intent: !0,
        resolved_model: oe.resolved_model,
        download_source: oe.download_source,
        target_path: oe.target_path,
        options: void 0
      }));
      return [...G, ...D];
    }), z = U(() => {
      let G = C.value.length;
      for (const D of E.value.values())
        D.action === "install" && G++;
      for (const D of N.value.values())
        D.action === "select" && G++;
      return G;
    }), ee = U(() => {
      let G = 0;
      for (const D of N.value.values())
        D.action === "download" && G++;
      return G;
    }), R = U(() => {
      let G = 0;
      for (const D of E.value.values())
        D.action === "optional" && G++;
      for (const D of N.value.values())
        D.action === "optional" && G++;
      return G;
    }), O = U(() => {
      let G = 0;
      for (const D of E.value.values())
        D.action === "skip" && G++;
      for (const D of N.value.values())
        D.action === "skip" && G++;
      for (const D of V.value)
        E.value.has(D.node_type) || G++;
      for (const D of j.value)
        N.value.has(D.filename) || G++;
      return G;
    }), ae = U(() => {
      const G = {};
      if (G.analysis = { resolved: 1, total: 1 }, Q.value) {
        const D = V.value.length, oe = V.value.filter(
          (ge) => E.value.has(ge.node_type)
        ).length;
        G.nodes = { resolved: oe, total: D };
      }
      if (B.value || L.value) {
        const D = W.value.length, oe = W.value.filter(
          (ge) => N.value.has(ge.filename) || ge.is_download_intent
        ).length;
        G.models = { resolved: oe, total: D };
      }
      if (G.review = { resolved: 1, total: 1 }, k.value === "applying") {
        const D = i.totalFiles || 1, oe = i.completedFiles.length;
        G.applying = { resolved: oe, total: D };
      }
      return G;
    });
    function te(G) {
      k.value = G;
    }
    function de() {
      const G = A.value.findIndex((D) => D.id === k.value);
      G > 0 && (k.value = A.value[G - 1].id);
    }
    function pe() {
      const G = A.value.findIndex((D) => D.id === k.value);
      G < A.value.length - 1 && (k.value = A.value[G + 1].id);
    }
    async function ye() {
      I.value = !0, T.value = null;
      try {
        d.value = await g(n.workflowName);
      } catch (G) {
        T.value = G instanceof Error ? G.message : "Failed to analyze workflow";
      } finally {
        I.value = !1;
      }
    }
    function ct() {
      w.value.includes("analysis") || w.value.push("analysis"), Q.value ? k.value = "nodes" : B.value || L.value ? k.value = "models" : k.value = "review";
    }
    function ut(G) {
      E.value.set(G, { action: "optional" });
    }
    function mt(G) {
      E.value.set(G, { action: "skip" });
    }
    function ke(G, D) {
      var ge;
      const oe = V.value.find((Te) => Te.node_type === G);
      (ge = oe == null ? void 0 : oe.options) != null && ge[D] && E.value.set(G, {
        action: "install",
        package_id: oe.options[D].package_id
      });
    }
    function Je(G, D) {
      E.value.set(G, {
        action: "install",
        package_id: D
      });
    }
    function Fe(G) {
      E.value.delete(G);
    }
    function Be(G) {
      N.value.set(G, { action: "optional" });
    }
    function vt(G) {
      N.value.set(G, { action: "skip" });
    }
    function fe(G, D) {
      var ge;
      const oe = j.value.find((Te) => Te.filename === G);
      (ge = oe == null ? void 0 : oe.options) != null && ge[D] && N.value.set(G, {
        action: "select",
        selected_model: oe.options[D].model
      });
    }
    function Le(G, D, oe) {
      N.value.set(G, {
        action: "download",
        url: D,
        target_path: oe
      });
    }
    function ft(G) {
      N.value.delete(G);
    }
    async function J() {
      _.value = !0, T.value = null, m(), i.phase = "resolving", k.value = "applying";
      try {
        const G = await y(n.workflowName, E.value, N.value);
        G.models_to_download && G.models_to_download.length > 0 && v(n.workflowName, G.models_to_download);
        const D = [
          ...G.nodes_to_install || [],
          ...C.value.map((oe) => oe.package.package_id)
        ];
        i.nodesToInstall = [...new Set(D)], i.nodesToInstall.length > 0 && await h(n.workflowName), i.phase = "complete", await $(), i.needsRestart || setTimeout(() => {
          r("refresh"), r("install"), r("close");
        }, 1e3);
      } catch (G) {
        T.value = G instanceof Error ? G.message : "Failed to apply resolution", i.error = T.value, i.phase = "error";
      } finally {
        _.value = !1;
      }
    }
    function le() {
      r("refresh"), r("restart"), r("close");
    }
    return $e(ye), (G, D) => (o(), x(it, {
      title: `Resolve Dependencies: ${t.workflowName}`,
      size: "lg",
      loading: I.value,
      error: T.value || void 0,
      "fixed-height": !0,
      onClose: D[1] || (D[1] = (oe) => r("close"))
    }, {
      body: l(() => [
        I.value && !d.value ? (o(), s("div", zr, [...D[2] || (D[2] = [
          e("div", { class: "loading-spinner" }, null, -1),
          e("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : d.value ? (o(), s("div", Lr, [
          f($l, {
            steps: A.value,
            "current-step": k.value,
            "completed-steps": w.value,
            "step-stats": ae.value,
            onStepChange: te
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          k.value === "analysis" ? (o(), s("div", Tr, [
            e("div", Rr, [
              e("div", Dr, [
                D[3] || (D[3] = e("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                e("p", Nr, " Found " + a(d.value.stats.total_nodes) + " nodes and " + a(d.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              e("div", Or, [
                e("div", Ur, [
                  D[12] || (D[12] = e("div", { class: "stat-header" }, "Nodes", -1)),
                  e("div", Br, [
                    M.value > 0 ? (o(), s("div", Pr, [
                      D[4] || (D[4] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Vr, a(M.value), 1),
                      D[5] || (D[5] = e("span", { class: "stat-label" }, "installed", -1))
                    ])) : u("", !0),
                    d.value.stats.nodes_needing_installation > 0 ? (o(), s("div", Fr, [
                      D[6] || (D[6] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Ar, a(d.value.stats.nodes_needing_installation), 1),
                      D[7] || (D[7] = e("span", { class: "stat-label" }, "to install", -1))
                    ])) : u("", !0),
                    d.value.nodes.ambiguous.length > 0 ? (o(), s("div", Wr, [
                      D[8] || (D[8] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", Gr, a(d.value.nodes.ambiguous.length), 1),
                      D[9] || (D[9] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : u("", !0),
                    d.value.nodes.unresolved.length > 0 ? (o(), s("div", jr, [
                      D[10] || (D[10] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", Hr, a(d.value.nodes.unresolved.length), 1),
                      D[11] || (D[11] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : u("", !0)
                  ])
                ]),
                e("div", qr, [
                  D[21] || (D[21] = e("div", { class: "stat-header" }, "Models", -1)),
                  e("div", Kr, [
                    e("div", Jr, [
                      D[13] || (D[13] = e("span", { class: "stat-icon" }, "✓", -1)),
                      e("span", Qr, a(d.value.models.resolved.length - d.value.stats.download_intents), 1),
                      D[14] || (D[14] = e("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    d.value.stats.download_intents > 0 ? (o(), s("div", Yr, [
                      D[15] || (D[15] = e("span", { class: "stat-icon" }, "⬇", -1)),
                      e("span", Xr, a(d.value.stats.download_intents), 1),
                      D[16] || (D[16] = e("span", { class: "stat-label" }, "pending download", -1))
                    ])) : u("", !0),
                    d.value.models.ambiguous.length > 0 ? (o(), s("div", Zr, [
                      D[17] || (D[17] = e("span", { class: "stat-icon" }, "?", -1)),
                      e("span", ed, a(d.value.models.ambiguous.length), 1),
                      D[18] || (D[18] = e("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : u("", !0),
                    d.value.models.unresolved.length > 0 ? (o(), s("div", td, [
                      D[19] || (D[19] = e("span", { class: "stat-icon" }, "✗", -1)),
                      e("span", od, a(d.value.models.unresolved.length), 1),
                      D[20] || (D[20] = e("span", { class: "stat-label" }, "missing", -1))
                    ])) : u("", !0)
                  ])
                ])
              ]),
              H.value ? (o(), s("div", sd, [
                D[22] || (D[22] = e("span", { class: "status-icon" }, "⚠", -1)),
                e("span", nd, a(V.value.length + j.value.length) + " items need your input", 1)
              ])) : P.value ? (o(), s("div", ad, [
                D[23] || (D[23] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", ld, a(d.value.stats.packages_needing_installation) + " package" + a(d.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + a(d.value.stats.nodes_needing_installation) + " node type" + a(d.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + a(L.value ? `, ${d.value.stats.download_intents} model${d.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : L.value ? (o(), s("div", id, [
                D[24] || (D[24] = e("span", { class: "status-icon" }, "⬇", -1)),
                e("span", rd, a(d.value.stats.download_intents) + " model" + a(d.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : (o(), s("div", dd, [...D[25] || (D[25] = [
                e("span", { class: "status-icon" }, "✓", -1),
                e("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])]))
            ])
          ])) : u("", !0),
          k.value === "nodes" ? (o(), x(ki, {
            key: 1,
            nodes: V.value,
            "node-choices": E.value,
            onMarkOptional: ut,
            onSkip: mt,
            onOptionSelected: ke,
            onManualEntry: Je,
            onClearChoice: Fe
          }, null, 8, ["nodes", "node-choices"])) : u("", !0),
          k.value === "models" ? (o(), x(vr, {
            key: 2,
            models: W.value,
            "model-choices": N.value,
            onMarkOptional: Be,
            onSkip: vt,
            onOptionSelected: fe,
            onDownloadUrl: Le,
            onClearChoice: ft
          }, null, 8, ["models", "model-choices"])) : u("", !0),
          k.value === "review" ? (o(), s("div", cd, [
            e("div", ud, [
              D[31] || (D[31] = e("div", { class: "review-header" }, [
                e("h3", { class: "summary-title" }, "Review Your Choices"),
                e("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              e("div", md, [
                e("div", vd, [
                  e("span", fd, a(z.value), 1),
                  D[26] || (D[26] = e("span", { class: "stat-label" }, "to install", -1))
                ]),
                e("div", gd, [
                  e("span", hd, a(ee.value), 1),
                  D[27] || (D[27] = e("span", { class: "stat-label" }, "to download", -1))
                ]),
                e("div", pd, [
                  e("span", yd, a(R.value), 1),
                  D[28] || (D[28] = e("span", { class: "stat-label" }, "optional", -1))
                ]),
                e("div", wd, [
                  e("span", kd, a(O.value), 1),
                  D[29] || (D[29] = e("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              C.value.length > 0 ? (o(), s("div", bd, [
                e("h4", _d, "Node Packages to Install (" + a(C.value.length) + ")", 1),
                e("div", $d, [
                  (o(!0), s(q, null, se(C.value, (oe) => (o(), s("div", {
                    key: oe.package.package_id,
                    class: "review-item"
                  }, [
                    e("code", Cd, a(oe.package.package_id), 1),
                    D[30] || (D[30] = e("div", { class: "item-choice" }, [
                      e("span", { class: "choice-badge install" }, "Will Install")
                    ], -1))
                  ]))), 128))
                ])
              ])) : u("", !0),
              V.value.length > 0 ? (o(), s("div", xd, [
                e("h4", Sd, "Node Choices (" + a(V.value.length) + ")", 1),
                e("div", Id, [
                  (o(!0), s(q, null, se(V.value, (oe) => {
                    var ge, Te, Ae, We;
                    return o(), s("div", {
                      key: oe.node_type,
                      class: "review-item"
                    }, [
                      e("code", Ed, a(oe.node_type), 1),
                      e("div", Md, [
                        E.value.has(oe.node_type) ? (o(), s(q, { key: 0 }, [
                          ((ge = E.value.get(oe.node_type)) == null ? void 0 : ge.action) === "install" ? (o(), s("span", zd, a((Te = E.value.get(oe.node_type)) == null ? void 0 : Te.package_id), 1)) : ((Ae = E.value.get(oe.node_type)) == null ? void 0 : Ae.action) === "optional" ? (o(), s("span", Ld, " Optional ")) : ((We = E.value.get(oe.node_type)) == null ? void 0 : We.action) === "skip" ? (o(), s("span", Td, " Skip ")) : u("", !0)
                        ], 64)) : (o(), s("span", Rd, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : u("", !0),
              W.value.length > 0 ? (o(), s("div", Dd, [
                e("h4", Nd, "Models (" + a(W.value.length) + ")", 1),
                e("div", Od, [
                  (o(!0), s(q, null, se(W.value, (oe) => {
                    var ge, Te, Ae, We, St, Xe, Ze;
                    return o(), s("div", {
                      key: oe.filename,
                      class: "review-item"
                    }, [
                      e("code", Ud, a(oe.filename), 1),
                      e("div", Bd, [
                        N.value.has(oe.filename) ? (o(), s(q, { key: 0 }, [
                          ((ge = N.value.get(oe.filename)) == null ? void 0 : ge.action) === "select" ? (o(), s("span", Pd, a((Ae = (Te = N.value.get(oe.filename)) == null ? void 0 : Te.selected_model) == null ? void 0 : Ae.filename), 1)) : ((We = N.value.get(oe.filename)) == null ? void 0 : We.action) === "download" ? (o(), s("span", Vd, " Download ")) : ((St = N.value.get(oe.filename)) == null ? void 0 : St.action) === "optional" ? (o(), s("span", Fd, " Optional ")) : ((Xe = N.value.get(oe.filename)) == null ? void 0 : Xe.action) === "skip" ? (o(), s("span", Ad, " Skip ")) : ((Ze = N.value.get(oe.filename)) == null ? void 0 : Ze.action) === "cancel_download" ? (o(), s("span", Wd, " Cancel Download ")) : u("", !0)
                        ], 64)) : oe.is_download_intent ? (o(), s("span", Gd, " Pending Download ")) : (o(), s("span", jd, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : u("", !0),
              C.value.length === 0 && V.value.length === 0 && W.value.length === 0 ? (o(), s("div", Hd, " No dependencies need resolution. ")) : u("", !0)
            ])
          ])) : u("", !0),
          k.value === "applying" ? (o(), x(Mr, {
            key: 4,
            progress: me(i),
            onRestart: le
          }, null, 8, ["progress"])) : u("", !0)
        ])) : u("", !0)
      ]),
      footer: l(() => [
        k.value !== "analysis" && k.value !== "applying" ? (o(), x(ie, {
          key: 0,
          variant: "secondary",
          disabled: _.value,
          onClick: de
        }, {
          default: l(() => [...D[32] || (D[32] = [
            p(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : u("", !0),
        D[35] || (D[35] = e("div", { class: "footer-spacer" }, null, -1)),
        k.value !== "applying" || me(i).phase === "complete" || me(i).phase === "error" ? (o(), x(ie, {
          key: 1,
          variant: "secondary",
          onClick: D[0] || (D[0] = (oe) => r("close"))
        }, {
          default: l(() => [
            p(a(me(i).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : u("", !0),
        k.value === "analysis" ? (o(), x(ie, {
          key: 2,
          variant: "primary",
          disabled: I.value,
          onClick: ct
        }, {
          default: l(() => [
            p(a(H.value || L.value ? "Continue" : "Apply"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : u("", !0),
        k.value === "nodes" ? (o(), x(ie, {
          key: 3,
          variant: "primary",
          onClick: pe
        }, {
          default: l(() => [
            p(a(B.value || L.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : u("", !0),
        k.value === "models" ? (o(), x(ie, {
          key: 4,
          variant: "primary",
          onClick: pe
        }, {
          default: l(() => [...D[33] || (D[33] = [
            p(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : u("", !0),
        k.value === "review" ? (o(), x(ie, {
          key: 5,
          variant: "primary",
          disabled: _.value,
          loading: _.value,
          onClick: J
        }, {
          default: l(() => [...D[34] || (D[34] = [
            p(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : u("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Kd = /* @__PURE__ */ X(qd, [["__scopeId", "data-v-85146f4c"]]), Jd = { class: "search-input-wrapper" }, Qd = ["value", "placeholder"], Yd = /* @__PURE__ */ Y({
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
    const n = t, r = c, g = b(null);
    let y;
    function h(i) {
      const m = i.target.value;
      n.debounce > 0 ? (clearTimeout(y), y = window.setTimeout(() => {
        r("update:modelValue", m);
      }, n.debounce)) : r("update:modelValue", m);
    }
    function v() {
      var i;
      r("update:modelValue", ""), r("clear"), (i = g.value) == null || i.focus();
    }
    return $e(() => {
      n.autoFocus && g.value && g.value.focus();
    }), (i, m) => (o(), s("div", Jd, [
      e("input", {
        ref_key: "inputRef",
        ref: g,
        value: t.modelValue,
        type: "text",
        placeholder: t.placeholder,
        class: "search-input",
        onInput: h,
        onKeyup: Qe(v, ["escape"])
      }, null, 40, Qd),
      t.clearable && t.modelValue ? (o(), s("button", {
        key: 0,
        class: "clear-button",
        onClick: v,
        title: "Clear search"
      }, " ✕ ")) : u("", !0)
    ]));
  }
}), Xd = /* @__PURE__ */ X(Yd, [["__scopeId", "data-v-266f857a"]]), Zd = { class: "search-bar" }, ec = /* @__PURE__ */ Y({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(t) {
    return (c, n) => (o(), s("div", Zd, [
      f(Xd, {
        "model-value": t.modelValue,
        placeholder: t.placeholder,
        debounce: t.debounce,
        clearable: t.clearable,
        "onUpdate:modelValue": n[0] || (n[0] = (r) => c.$emit("update:modelValue", r)),
        onClear: n[1] || (n[1] = (r) => c.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), rt = /* @__PURE__ */ X(ec, [["__scopeId", "data-v-3d51bbfd"]]), tc = { class: "section-group" }, oc = {
  key: 0,
  class: "section-content"
}, sc = /* @__PURE__ */ Y({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(t, { emit: c }) {
    const n = t, r = c, g = b(n.initiallyExpanded);
    function y() {
      n.collapsible && (g.value = !g.value, r("toggle", g.value));
    }
    return (h, v) => (o(), s("section", tc, [
      f(ze, {
        count: t.count,
        clickable: t.collapsible,
        expanded: g.value,
        onClick: y
      }, {
        default: l(() => [
          p(a(t.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !t.collapsible || g.value ? (o(), s("div", oc, [
        ce(h.$slots, "default", {}, void 0, !0)
      ])) : u("", !0)
    ]));
  }
}), _e = /* @__PURE__ */ X(sc, [["__scopeId", "data-v-c48e33ed"]]), nc = { class: "item-header" }, ac = {
  key: 0,
  class: "item-icon"
}, lc = { class: "item-info" }, ic = {
  key: 0,
  class: "item-title"
}, rc = {
  key: 1,
  class: "item-subtitle"
}, dc = {
  key: 0,
  class: "item-details"
}, cc = {
  key: 1,
  class: "item-actions"
}, uc = /* @__PURE__ */ Y({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: c }) {
    const n = t, r = U(() => n.status ? `status-${n.status}` : "");
    return (g, y) => (o(), s("div", {
      class: ne(["item-card", { clickable: t.clickable, compact: t.compact }, r.value]),
      onClick: y[0] || (y[0] = (h) => t.clickable && g.$emit("click"))
    }, [
      e("div", nc, [
        g.$slots.icon ? (o(), s("span", ac, [
          ce(g.$slots, "icon", {}, void 0, !0)
        ])) : u("", !0),
        e("div", lc, [
          g.$slots.title ? (o(), s("div", ic, [
            ce(g.$slots, "title", {}, void 0, !0)
          ])) : u("", !0),
          g.$slots.subtitle ? (o(), s("div", rc, [
            ce(g.$slots, "subtitle", {}, void 0, !0)
          ])) : u("", !0)
        ])
      ]),
      g.$slots.details ? (o(), s("div", dc, [
        ce(g.$slots, "details", {}, void 0, !0)
      ])) : u("", !0),
      g.$slots.actions ? (o(), s("div", cc, [
        ce(g.$slots, "actions", {}, void 0, !0)
      ])) : u("", !0)
    ], 2));
  }
}), Ce = /* @__PURE__ */ X(uc, [["__scopeId", "data-v-cc435e0e"]]), mc = { class: "loading-state" }, vc = { class: "loading-message" }, fc = /* @__PURE__ */ Y({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(t) {
    return (c, n) => (o(), s("div", mc, [
      n[0] || (n[0] = e("div", { class: "spinner" }, null, -1)),
      e("p", vc, a(t.message), 1)
    ]));
  }
}), qe = /* @__PURE__ */ X(fc, [["__scopeId", "data-v-ad8436c9"]]), gc = { class: "error-state" }, hc = { class: "error-message" }, pc = /* @__PURE__ */ Y({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(t) {
    return (c, n) => (o(), s("div", gc, [
      n[2] || (n[2] = e("span", { class: "error-icon" }, "⚠", -1)),
      e("p", hc, a(t.message), 1),
      t.retry ? (o(), x(Z, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (r) => c.$emit("retry"))
      }, {
        default: l(() => [...n[1] || (n[1] = [
          p(" Retry ", -1)
        ])]),
        _: 1
      })) : u("", !0)
    ]));
  }
}), Ke = /* @__PURE__ */ X(pc, [["__scopeId", "data-v-5397be48"]]), yc = /* @__PURE__ */ Y({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(t, { expose: c, emit: n }) {
    const r = n, { getWorkflows: g } = Se(), y = b([]), h = b(!1), v = b(null), i = b(""), m = b(!0), $ = b(!1), d = b(!1), I = b(!1), _ = b(null), T = U(
      () => y.value.filter((z) => z.status === "broken")
    ), k = U(
      () => y.value.filter((z) => z.status === "new")
    ), w = U(
      () => y.value.filter((z) => z.status === "modified")
    ), E = U(
      () => y.value.filter((z) => z.status === "synced")
    ), N = U(() => {
      if (!i.value.trim()) return y.value;
      const z = i.value.toLowerCase();
      return y.value.filter((ee) => ee.name.toLowerCase().includes(z));
    }), A = U(
      () => T.value.filter(
        (z) => !i.value.trim() || z.name.toLowerCase().includes(i.value.toLowerCase())
      )
    ), H = U(
      () => k.value.filter(
        (z) => !i.value.trim() || z.name.toLowerCase().includes(i.value.toLowerCase())
      )
    ), Q = U(
      () => w.value.filter(
        (z) => !i.value.trim() || z.name.toLowerCase().includes(i.value.toLowerCase())
      )
    ), B = U(
      () => E.value.filter(
        (z) => !i.value.trim() || z.name.toLowerCase().includes(i.value.toLowerCase())
      )
    ), L = U(
      () => $.value ? B.value : B.value.slice(0, 5)
    );
    async function P(z = !1) {
      h.value = !0, v.value = null;
      try {
        y.value = await g(z);
      } catch (ee) {
        v.value = ee instanceof Error ? ee.message : "Failed to load workflows";
      } finally {
        h.value = !1;
      }
    }
    c({ loadWorkflows: P });
    function M(z) {
      _.value = z, d.value = !0;
    }
    function C(z) {
      _.value = z, I.value = !0;
    }
    function F() {
      alert("Bulk resolution not yet implemented");
    }
    function V() {
      r("refresh");
    }
    function j(z) {
      const ee = [];
      return z.missing_nodes > 0 && ee.push(`${z.missing_nodes} missing node${z.missing_nodes > 1 ? "s" : ""}`), z.missing_models > 0 && ee.push(`${z.missing_models} missing model${z.missing_models > 1 ? "s" : ""}`), z.pending_downloads && z.pending_downloads > 0 && ee.push(`${z.pending_downloads} pending download${z.pending_downloads > 1 ? "s" : ""}`), ee.length > 0 ? ee.join(", ") : "Has issues";
    }
    function W(z) {
      const ee = z.sync_state === "new" ? "New" : z.sync_state === "modified" ? "Modified" : z.sync_state === "synced" ? "Synced" : z.sync_state;
      return z.has_path_sync_issues && z.models_needing_path_sync && z.models_needing_path_sync > 0 ? `${z.models_needing_path_sync} model path${z.models_needing_path_sync > 1 ? "s" : ""} need${z.models_needing_path_sync === 1 ? "s" : ""} sync` : ee || "Unknown";
    }
    return $e(P), (z, ee) => (o(), s(q, null, [
      f(Ie, null, {
        header: l(() => [
          f(Ee, { title: "WORKFLOWS" }, {
            actions: l(() => [
              T.value.length > 0 ? (o(), x(Z, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: F
              }, {
                default: l(() => [...ee[8] || (ee[8] = [
                  p(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : u("", !0)
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          f(rt, {
            modelValue: i.value,
            "onUpdate:modelValue": ee[0] || (ee[0] = (R) => i.value = R),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          h.value ? (o(), x(qe, {
            key: 0,
            message: "Loading workflows..."
          })) : v.value ? (o(), x(Ke, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: P
          }, null, 8, ["message"])) : (o(), s(q, { key: 2 }, [
            A.value.length ? (o(), x(_e, {
              key: 0,
              title: "BROKEN",
              count: A.value.length
            }, {
              default: l(() => [
                (o(!0), s(q, null, se(A.value, (R) => (o(), x(Ce, {
                  key: R.name,
                  status: "broken"
                }, {
                  icon: l(() => [...ee[9] || (ee[9] = [
                    p("⚠", -1)
                  ])]),
                  title: l(() => [
                    p(a(R.name), 1)
                  ]),
                  subtitle: l(() => [
                    p(a(j(R)), 1)
                  ]),
                  actions: l(() => [
                    f(Z, {
                      variant: "primary",
                      size: "sm",
                      onClick: (O) => C(R.name)
                    }, {
                      default: l(() => [...ee[10] || (ee[10] = [
                        p(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    f(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (O) => M(R.name)
                    }, {
                      default: l(() => [...ee[11] || (ee[11] = [
                        p(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            H.value.length ? (o(), x(_e, {
              key: 1,
              title: "NEW",
              count: H.value.length
            }, {
              default: l(() => [
                (o(!0), s(q, null, se(H.value, (R) => (o(), x(Ce, {
                  key: R.name,
                  status: R.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: l(() => [
                    p(a(R.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: l(() => [
                    p(a(R.name), 1)
                  ]),
                  subtitle: l(() => [
                    p(a(W(R)), 1)
                  ]),
                  actions: l(() => [
                    f(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (O) => M(R.name)
                    }, {
                      default: l(() => [...ee[12] || (ee[12] = [
                        p(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            Q.value.length ? (o(), x(_e, {
              key: 2,
              title: "MODIFIED",
              count: Q.value.length
            }, {
              default: l(() => [
                (o(!0), s(q, null, se(Q.value, (R) => (o(), x(Ce, {
                  key: R.name,
                  status: R.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: l(() => [...ee[13] || (ee[13] = [
                    p("⚡", -1)
                  ])]),
                  title: l(() => [
                    p(a(R.name), 1)
                  ]),
                  subtitle: l(() => [
                    p(a(W(R)), 1)
                  ]),
                  actions: l(() => [
                    f(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (O) => M(R.name)
                    }, {
                      default: l(() => [...ee[14] || (ee[14] = [
                        p(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            B.value.length ? (o(), x(_e, {
              key: 3,
              title: "SYNCED",
              count: B.value.length,
              collapsible: !0,
              "initially-expanded": m.value,
              onToggle: ee[2] || (ee[2] = (R) => m.value = R)
            }, {
              default: l(() => [
                (o(!0), s(q, null, se(L.value, (R) => (o(), x(Ce, {
                  key: R.name,
                  status: R.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: l(() => [
                    p(a(R.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: l(() => [
                    p(a(R.name), 1)
                  ]),
                  subtitle: l(() => [
                    p(a(W(R)), 1)
                  ]),
                  actions: l(() => [
                    f(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (O) => M(R.name)
                    }, {
                      default: l(() => [...ee[15] || (ee[15] = [
                        p(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !$.value && B.value.length > 5 ? (o(), x(Z, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: ee[1] || (ee[1] = (R) => $.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: l(() => [
                    p(" View all " + a(B.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : u("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : u("", !0),
            N.value.length ? u("", !0) : (o(), x(Ue, {
              key: 4,
              icon: "📭",
              message: i.value ? `No workflows match '${i.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      d.value && _.value ? (o(), x(cl, {
        key: 0,
        "workflow-name": _.value,
        onClose: ee[3] || (ee[3] = (R) => d.value = !1),
        onResolve: ee[4] || (ee[4] = (R) => C(_.value)),
        onRefresh: ee[5] || (ee[5] = (R) => r("refresh"))
      }, null, 8, ["workflow-name"])) : u("", !0),
      I.value && _.value ? (o(), x(Kd, {
        key: 1,
        "workflow-name": _.value,
        onClose: ee[6] || (ee[6] = (R) => I.value = !1),
        onInstall: V,
        onRefresh: ee[7] || (ee[7] = (R) => r("refresh"))
      }, null, 8, ["workflow-name"])) : u("", !0)
    ], 64));
  }
}), wc = /* @__PURE__ */ X(yc, [["__scopeId", "data-v-080576c0"]]), kc = /* @__PURE__ */ Y({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (c, n) => (o(), s("div", {
      class: ne(["summary-bar", t.variant])
    }, [
      ce(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), dt = /* @__PURE__ */ X(kc, [["__scopeId", "data-v-ccb7816e"]]), bc = {
  key: 0,
  class: "model-details"
}, _c = { class: "detail-section" }, $c = { class: "detail-row" }, Cc = { class: "detail-value mono" }, xc = { class: "detail-row" }, Sc = { class: "detail-value mono" }, Ic = { class: "detail-row" }, Ec = { class: "detail-value mono" }, Mc = { class: "detail-row" }, zc = { class: "detail-value" }, Lc = { class: "detail-row" }, Tc = { class: "detail-value" }, Rc = { class: "detail-row" }, Dc = { class: "detail-value" }, Nc = { class: "detail-section" }, Oc = { class: "section-header" }, Uc = {
  key: 0,
  class: "locations-list"
}, Bc = { class: "location-path mono" }, Pc = {
  key: 0,
  class: "location-modified"
}, Vc = ["onClick"], Fc = {
  key: 1,
  class: "empty-state"
}, Ac = { class: "detail-section" }, Wc = { class: "section-header" }, Gc = {
  key: 0,
  class: "sources-list"
}, jc = { class: "source-type" }, Hc = ["href"], qc = ["disabled", "onClick"], Kc = {
  key: 1,
  class: "empty-state"
}, Jc = { class: "add-source-form" }, Qc = ["disabled"], Yc = {
  key: 2,
  class: "source-error"
}, Xc = {
  key: 3,
  class: "source-success"
}, Zc = /* @__PURE__ */ Y({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = t, { getModelDetails: r, addModelSource: g, removeModelSource: y, openFileLocation: h } = Se(), v = b(null), i = b(!0), m = b(null), $ = b(""), d = b(!1), I = b(null), _ = b(null), T = b(null), k = b(null);
    let w = null;
    function E(P, M = "success", C = 2e3) {
      w && clearTimeout(w), k.value = { message: P, type: M }, w = setTimeout(() => {
        k.value = null;
      }, C);
    }
    function N(P) {
      if (!P) return "Unknown";
      const M = 1024 * 1024 * 1024, C = 1024 * 1024;
      return P >= M ? `${(P / M).toFixed(1)} GB` : P >= C ? `${(P / C).toFixed(0)} MB` : `${(P / 1024).toFixed(0)} KB`;
    }
    function A(P) {
      navigator.clipboard.writeText(P), E("Copied to clipboard!");
    }
    async function H(P) {
      try {
        await h(P), E("Opening file location...");
      } catch {
        E("Failed to open location", "error");
      }
    }
    async function Q() {
      if (!(!$.value.trim() || !v.value)) {
        d.value = !0, _.value = null, T.value = null;
        try {
          await g(v.value.hash, $.value.trim()), T.value = "Source added successfully!", $.value = "", await L();
        } catch (P) {
          _.value = P instanceof Error ? P.message : "Failed to add source";
        } finally {
          d.value = !1;
        }
      }
    }
    async function B(P) {
      if (v.value) {
        I.value = P, _.value = null, T.value = null;
        try {
          await y(v.value.hash, P), E("Source removed"), await L();
        } catch (M) {
          _.value = M instanceof Error ? M.message : "Failed to remove source";
        } finally {
          I.value = null;
        }
      }
    }
    async function L() {
      i.value = !0, m.value = null;
      try {
        v.value = await r(n.identifier);
      } catch (P) {
        m.value = P instanceof Error ? P.message : "Failed to load model details";
      } finally {
        i.value = !1;
      }
    }
    return $e(L), (P, M) => {
      var C;
      return o(), s(q, null, [
        f(it, {
          title: `Model Details: ${((C = v.value) == null ? void 0 : C.filename) || "Loading..."}`,
          size: "lg",
          loading: i.value,
          error: m.value,
          onClose: M[5] || (M[5] = (F) => P.$emit("close"))
        }, {
          body: l(() => {
            var F, V, j, W;
            return [
              v.value ? (o(), s("div", bc, [
                e("section", _c, [
                  e("div", $c, [
                    M[6] || (M[6] = e("span", { class: "detail-label" }, "Hash:", -1)),
                    e("span", Cc, a(v.value.hash || "Not computed"), 1),
                    v.value.hash ? (o(), s("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: M[0] || (M[0] = (z) => A(v.value.hash))
                    }, "Copy")) : u("", !0)
                  ]),
                  e("div", xc, [
                    M[7] || (M[7] = e("span", { class: "detail-label" }, "Blake3:", -1)),
                    e("span", Sc, a(v.value.blake3 || "Not computed"), 1),
                    v.value.blake3 ? (o(), s("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: M[1] || (M[1] = (z) => A(v.value.blake3))
                    }, "Copy")) : u("", !0)
                  ]),
                  e("div", Ic, [
                    M[8] || (M[8] = e("span", { class: "detail-label" }, "SHA256:", -1)),
                    e("span", Ec, a(v.value.sha256 || "Not computed"), 1),
                    v.value.sha256 ? (o(), s("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: M[2] || (M[2] = (z) => A(v.value.sha256))
                    }, "Copy")) : u("", !0)
                  ]),
                  e("div", Mc, [
                    M[9] || (M[9] = e("span", { class: "detail-label" }, "Size:", -1)),
                    e("span", zc, a(N(v.value.size)), 1)
                  ]),
                  e("div", Lc, [
                    M[10] || (M[10] = e("span", { class: "detail-label" }, "Category:", -1)),
                    e("span", Tc, a(v.value.category), 1)
                  ]),
                  e("div", Rc, [
                    M[11] || (M[11] = e("span", { class: "detail-label" }, "Last Seen:", -1)),
                    e("span", Dc, a(v.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                e("section", Nc, [
                  e("h4", Oc, "Locations (" + a(((F = v.value.locations) == null ? void 0 : F.length) || 0) + ")", 1),
                  (V = v.value.locations) != null && V.length ? (o(), s("div", Uc, [
                    (o(!0), s(q, null, se(v.value.locations, (z, ee) => (o(), s("div", {
                      key: ee,
                      class: "location-item"
                    }, [
                      e("span", Bc, a(z.path), 1),
                      z.modified ? (o(), s("span", Pc, "Modified: " + a(z.modified), 1)) : u("", !0),
                      z.path ? (o(), s("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (R) => H(z.path)
                      }, " Open File Location ", 8, Vc)) : u("", !0)
                    ]))), 128))
                  ])) : (o(), s("div", Fc, "No locations found"))
                ]),
                e("section", Ac, [
                  e("h4", Wc, "Download Sources (" + a(((j = v.value.sources) == null ? void 0 : j.length) || 0) + ")", 1),
                  (W = v.value.sources) != null && W.length ? (o(), s("div", Gc, [
                    (o(!0), s(q, null, se(v.value.sources, (z, ee) => (o(), s("div", {
                      key: ee,
                      class: "source-item"
                    }, [
                      e("span", jc, a(z.type) + ":", 1),
                      e("a", {
                        href: z.url,
                        target: "_blank",
                        class: "source-url"
                      }, a(z.url), 9, Hc),
                      e("button", {
                        class: "remove-source-btn",
                        disabled: I.value === z.url,
                        onClick: (R) => B(z.url)
                      }, a(I.value === z.url ? "..." : "×"), 9, qc)
                    ]))), 128))
                  ])) : (o(), s("div", Kc, " No download sources configured ")),
                  e("div", Jc, [
                    kt(e("input", {
                      "onUpdate:modelValue": M[3] || (M[3] = (z) => $.value = z),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [bo, $.value]
                    ]),
                    e("button", {
                      class: "add-source-btn",
                      disabled: !$.value.trim() || d.value,
                      onClick: Q
                    }, a(d.value ? "Adding..." : "Add Source"), 9, Qc)
                  ]),
                  _.value ? (o(), s("p", Yc, a(_.value), 1)) : u("", !0),
                  T.value ? (o(), s("p", Xc, a(T.value), 1)) : u("", !0)
                ])
              ])) : u("", !0)
            ];
          }),
          footer: l(() => [
            e("button", {
              class: "btn-secondary",
              onClick: M[4] || (M[4] = (F) => P.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (o(), x(xe, { to: "body" }, [
          k.value ? (o(), s("div", {
            key: 0,
            class: ne(["toast", k.value.type])
          }, a(k.value.message), 3)) : u("", !0)
        ]))
      ], 64);
    };
  }
}), oo = /* @__PURE__ */ X(Zc, [["__scopeId", "data-v-f15cbb56"]]), eu = /* @__PURE__ */ Y({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(t, { emit: c }) {
    const n = c, { getEnvironmentModels: r, getStatus: g } = Se(), y = b([]), h = b([]), v = b("production"), i = b(!1), m = b(null), $ = b(""), d = b(!1), I = b(null);
    function _() {
      d.value = !1, n("navigate", "model-index");
    }
    const T = U(
      () => y.value.reduce((L, P) => L + (P.size || 0), 0)
    ), k = U(() => {
      if (!$.value.trim()) return y.value;
      const L = $.value.toLowerCase();
      return y.value.filter((P) => P.filename.toLowerCase().includes(L));
    }), w = U(() => {
      if (!$.value.trim()) return h.value;
      const L = $.value.toLowerCase();
      return h.value.filter((P) => P.filename.toLowerCase().includes(L));
    }), E = U(() => {
      const L = {};
      for (const M of k.value) {
        const C = M.type || "other";
        L[C] || (L[C] = []), L[C].push(M);
      }
      const P = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(L).sort(([M], [C]) => {
        const F = P.indexOf(M), V = P.indexOf(C);
        return F >= 0 && V >= 0 ? F - V : F >= 0 ? -1 : V >= 0 ? 1 : M.localeCompare(C);
      }).map(([M, C]) => ({ type: M, models: C }));
    });
    function N(L) {
      if (!L) return "Unknown";
      const P = L / (1024 * 1024);
      return P >= 1024 ? `${(P / 1024).toFixed(1)} GB` : `${P.toFixed(0)} MB`;
    }
    function A(L) {
      I.value = L.hash || L.filename;
    }
    function H(L) {
      n("navigate", "model-index");
    }
    function Q(L) {
      alert(`Download functionality not yet implemented for ${L}`);
    }
    async function B() {
      i.value = !0, m.value = null;
      try {
        const L = await r();
        y.value = L, h.value = [];
        const P = await g();
        v.value = P.environment || "production";
      } catch (L) {
        m.value = L instanceof Error ? L.message : "Failed to load models";
      } finally {
        i.value = !1;
      }
    }
    return $e(B), (L, P) => (o(), s(q, null, [
      f(Ie, null, {
        header: l(() => [
          f(Ee, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: P[0] || (P[0] = (M) => d.value = !0)
          })
        ]),
        search: l(() => [
          f(rt, {
            modelValue: $.value,
            "onUpdate:modelValue": P[1] || (P[1] = (M) => $.value = M),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          i.value ? (o(), x(qe, {
            key: 0,
            message: "Loading environment models..."
          })) : m.value ? (o(), x(Ke, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: B
          }, null, 8, ["message"])) : (o(), s(q, { key: 2 }, [
            y.value.length ? (o(), x(dt, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                p(" Total: " + a(y.value.length) + " models • " + a(N(T.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : u("", !0),
            (o(!0), s(q, null, se(E.value, (M) => (o(), x(_e, {
              key: M.type,
              title: M.type.toUpperCase(),
              count: M.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: l(() => [
                (o(!0), s(q, null, se(M.models, (C) => (o(), x(Ce, {
                  key: C.hash || C.filename,
                  status: "synced"
                }, {
                  icon: l(() => [...P[4] || (P[4] = [
                    p("📦", -1)
                  ])]),
                  title: l(() => [
                    p(a(C.filename), 1)
                  ]),
                  subtitle: l(() => [
                    p(a(N(C.size)), 1)
                  ]),
                  details: l(() => [
                    f(he, {
                      label: "Used by:",
                      value: (C.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    f(he, {
                      label: "Path:",
                      value: C.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    f(Z, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (F) => A(C)
                    }, {
                      default: l(() => [...P[5] || (P[5] = [
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
            w.value.length ? (o(), x(_e, {
              key: 1,
              title: "MISSING",
              count: w.value.length
            }, {
              default: l(() => [
                (o(!0), s(q, null, se(w.value, (M) => (o(), x(Ce, {
                  key: M.filename,
                  status: "broken"
                }, {
                  icon: l(() => [...P[6] || (P[6] = [
                    p("⚠", -1)
                  ])]),
                  title: l(() => [
                    p(a(M.filename), 1)
                  ]),
                  subtitle: l(() => [...P[7] || (P[7] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: l(() => {
                    var C;
                    return [
                      f(he, {
                        label: "Required by:",
                        value: ((C = M.workflow_names) == null ? void 0 : C.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: l(() => [
                    f(Z, {
                      variant: "primary",
                      size: "sm",
                      onClick: (C) => Q(M.filename)
                    }, {
                      default: l(() => [...P[8] || (P[8] = [
                        p(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    f(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (C) => H(M.filename)
                    }, {
                      default: l(() => [...P[9] || (P[9] = [
                        p(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            !k.value.length && !w.value.length ? (o(), x(Ue, {
              key: 2,
              icon: "📭",
              message: $.value ? `No models match '${$.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : u("", !0)
          ], 64))
        ]),
        _: 1
      }),
      f(He, {
        show: d.value,
        title: "About Environment Models",
        onClose: P[2] || (P[2] = (M) => d.value = !1)
      }, {
        content: l(() => [
          e("p", null, [
            P[10] || (P[10] = p(" These are models currently used by workflows in ", -1)),
            e("strong", null, '"' + a(v.value) + '"', 1),
            P[11] || (P[11] = p(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: l(() => [
          f(Z, {
            variant: "primary",
            onClick: _
          }, {
            default: l(() => [...P[12] || (P[12] = [
              p(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      I.value ? (o(), x(oo, {
        key: 0,
        identifier: I.value,
        onClose: P[3] || (P[3] = (M) => I.value = null)
      }, null, 8, ["identifier"])) : u("", !0)
    ], 64));
  }
}), tu = /* @__PURE__ */ X(eu, [["__scopeId", "data-v-cb4f12b3"]]), ou = {
  key: 0,
  class: "indexing-progress"
}, su = { class: "progress-info" }, nu = { class: "progress-label" }, au = { class: "progress-count" }, lu = { class: "progress-bar" }, iu = { class: "modal-content" }, ru = { class: "modal-header" }, du = { class: "modal-body" }, cu = { class: "input-group" }, uu = { class: "current-path" }, mu = { class: "input-group" }, vu = { class: "modal-footer" }, fu = { class: "modal-content" }, gu = { class: "modal-header" }, hu = { class: "modal-body" }, pu = { class: "input-group" }, yu = { class: "input-group" }, wu = { class: "modal-footer" }, ku = /* @__PURE__ */ Y({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(t, { emit: c }) {
    const {
      getWorkspaceModels: n,
      scanWorkspaceModels: r,
      getModelsDirectory: g,
      setModelsDirectory: y
    } = Se(), { addToQueue: h } = xt(), v = c, i = b([]), m = b(!1), $ = b(!1), d = b(null), I = b(""), _ = b(!1), T = b(null), k = b(!1), w = b(null), E = b(""), N = b(!1), A = b(!1), H = b(""), Q = b(""), B = b(null), L = U(
      () => i.value.reduce((R, O) => R + (O.size || 0), 0)
    ), P = U(() => {
      if (!I.value.trim()) return i.value;
      const R = I.value.toLowerCase();
      return i.value.filter((O) => {
        const ae = O, te = O.sha256 || ae.sha256_hash || "";
        return O.filename.toLowerCase().includes(R) || te.toLowerCase().includes(R);
      });
    }), M = U(() => {
      const R = {};
      for (const ae of P.value) {
        const te = ae.type || "other";
        R[te] || (R[te] = []), R[te].push(ae);
      }
      const O = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(R).sort(([ae], [te]) => {
        const de = O.indexOf(ae), pe = O.indexOf(te);
        return de >= 0 && pe >= 0 ? de - pe : de >= 0 ? -1 : pe >= 0 ? 1 : ae.localeCompare(te);
      }).map(([ae, te]) => ({ type: ae, models: te }));
    });
    function C(R) {
      if (!R) return "Unknown";
      const O = 1024 * 1024 * 1024, ae = 1024 * 1024;
      return R >= O ? `${(R / O).toFixed(1)} GB` : R >= ae ? `${(R / ae).toFixed(0)} MB` : `${(R / 1024).toFixed(0)} KB`;
    }
    function F(R) {
      T.value = R.hash || R.filename;
    }
    async function V() {
      $.value = !0, d.value = null;
      try {
        const R = await r();
        await z(), R.changes > 0 && console.log(`Scan complete: ${R.changes} changes detected`);
      } catch (R) {
        d.value = R instanceof Error ? R.message : "Failed to scan models";
      } finally {
        $.value = !1;
      }
    }
    async function j() {
      if (E.value.trim()) {
        N.value = !0, d.value = null;
        try {
          const R = await y(E.value.trim());
          w.value = R.path, k.value = !1, E.value = "", await z(), console.log(`Directory changed: ${R.models_indexed} models indexed`), v("refresh");
        } catch (R) {
          d.value = R instanceof Error ? R.message : "Failed to change directory";
        } finally {
          N.value = !1;
        }
      }
    }
    function W() {
      if (!H.value.trim() || !Q.value.trim()) return;
      const R = Q.value.split("/").pop() || "model.safetensors";
      h([{
        workflow: "__manual__",
        filename: R,
        url: H.value.trim(),
        targetPath: Q.value.trim()
      }]), H.value = "", Q.value = "", A.value = !1;
    }
    async function z() {
      m.value = !0, d.value = null;
      try {
        i.value = await n();
      } catch (R) {
        d.value = R instanceof Error ? R.message : "Failed to load workspace models";
      } finally {
        m.value = !1;
      }
    }
    async function ee() {
      try {
        const R = await g();
        w.value = R.path;
      } catch {
      }
    }
    return $e(() => {
      z(), ee();
    }), (R, O) => (o(), s(q, null, [
      f(Ie, null, {
        header: l(() => [
          f(Ee, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: O[2] || (O[2] = (ae) => _.value = !0)
          }, {
            actions: l(() => [
              f(Z, {
                variant: "primary",
                size: "sm",
                disabled: $.value,
                onClick: V
              }, {
                default: l(() => [
                  p(a($.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              f(Z, {
                variant: "primary",
                size: "sm",
                onClick: O[0] || (O[0] = (ae) => k.value = !0)
              }, {
                default: l(() => [...O[15] || (O[15] = [
                  p(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              f(Z, {
                variant: "primary",
                size: "sm",
                onClick: O[1] || (O[1] = (ae) => A.value = !0)
              }, {
                default: l(() => [...O[16] || (O[16] = [
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
        search: l(() => [
          B.value ? (o(), s("div", ou, [
            e("div", su, [
              e("span", nu, a(B.value.message), 1),
              e("span", au, a(B.value.current) + "/" + a(B.value.total), 1)
            ]),
            e("div", lu, [
              e("div", {
                class: "progress-fill",
                style: Ye({ width: `${B.value.current / B.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : u("", !0),
          f(rt, {
            modelValue: I.value,
            "onUpdate:modelValue": O[3] || (O[3] = (ae) => I.value = ae),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          m.value || B.value ? (o(), x(qe, {
            key: 0,
            message: B.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : d.value ? (o(), x(Ke, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: z
          }, null, 8, ["message"])) : (o(), s(q, { key: 2 }, [
            i.value.length ? (o(), x(dt, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                p(" Total: " + a(i.value.length) + " models • " + a(C(L.value)), 1)
              ]),
              _: 1
            })) : u("", !0),
            (o(!0), s(q, null, se(M.value, (ae) => (o(), x(_e, {
              key: ae.type,
              title: ae.type.toUpperCase(),
              count: ae.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: l(() => [
                (o(!0), s(q, null, se(ae.models, (te) => (o(), x(Ce, {
                  key: te.sha256 || te.filename,
                  status: "synced"
                }, {
                  icon: l(() => [...O[17] || (O[17] = [
                    p("📦", -1)
                  ])]),
                  title: l(() => [
                    p(a(te.filename), 1)
                  ]),
                  subtitle: l(() => [
                    p(a(C(te.size)), 1)
                  ]),
                  details: l(() => [
                    f(he, {
                      label: "Hash:",
                      value: te.hash ? te.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    f(Z, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (de) => F(te)
                    }, {
                      default: l(() => [...O[18] || (O[18] = [
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
            P.value.length ? u("", !0) : (o(), x(Ue, {
              key: 1,
              icon: "📭",
              message: I.value ? `No models match '${I.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      f(He, {
        show: _.value,
        title: "About Workspace Model Index",
        onClose: O[4] || (O[4] = (ae) => _.value = !1)
      }, {
        content: l(() => [...O[19] || (O[19] = [
          e("p", null, [
            p(" Content-addressable model storage shared across "),
            e("strong", null, "all environments"),
            p(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      T.value ? (o(), x(oo, {
        key: 0,
        identifier: T.value,
        onClose: O[5] || (O[5] = (ae) => T.value = null)
      }, null, 8, ["identifier"])) : u("", !0),
      (o(), x(xe, { to: "body" }, [
        k.value ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: O[9] || (O[9] = be((ae) => k.value = !1, ["self"]))
        }, [
          e("div", iu, [
            e("div", ru, [
              O[20] || (O[20] = e("h3", null, "Change Models Directory", -1)),
              e("button", {
                class: "modal-close",
                onClick: O[6] || (O[6] = (ae) => k.value = !1)
              }, "✕")
            ]),
            e("div", du, [
              e("div", cu, [
                O[21] || (O[21] = e("label", null, "Current Directory", -1)),
                e("code", uu, a(w.value || "Not set"), 1)
              ]),
              e("div", mu, [
                O[22] || (O[22] = e("label", null, "New Directory Path", -1)),
                f(Oe, {
                  modelValue: E.value,
                  "onUpdate:modelValue": O[7] || (O[7] = (ae) => E.value = ae),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              O[23] || (O[23] = e("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            e("div", vu, [
              f(ie, {
                variant: "secondary",
                onClick: O[8] || (O[8] = (ae) => k.value = !1)
              }, {
                default: l(() => [...O[24] || (O[24] = [
                  p(" Cancel ", -1)
                ])]),
                _: 1
              }),
              f(ie, {
                variant: "primary",
                disabled: !E.value.trim() || N.value,
                loading: N.value,
                onClick: j
              }, {
                default: l(() => [
                  p(a(N.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : u("", !0)
      ])),
      (o(), x(xe, { to: "body" }, [
        A.value ? (o(), s("div", {
          key: 0,
          class: "modal-overlay",
          onClick: O[14] || (O[14] = be((ae) => A.value = !1, ["self"]))
        }, [
          e("div", fu, [
            e("div", gu, [
              O[25] || (O[25] = e("h3", null, "Download New Model", -1)),
              e("button", {
                class: "modal-close",
                onClick: O[10] || (O[10] = (ae) => A.value = !1)
              }, "✕")
            ]),
            e("div", hu, [
              e("div", pu, [
                O[26] || (O[26] = e("label", null, "Download URL", -1)),
                f(Oe, {
                  modelValue: H.value,
                  "onUpdate:modelValue": O[11] || (O[11] = (ae) => H.value = ae),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              e("div", yu, [
                O[27] || (O[27] = e("label", null, "Target Path (relative to models directory)", -1)),
                f(Oe, {
                  modelValue: Q.value,
                  "onUpdate:modelValue": O[12] || (O[12] = (ae) => Q.value = ae),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              O[28] || (O[28] = e("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            e("div", wu, [
              f(ie, {
                variant: "secondary",
                onClick: O[13] || (O[13] = (ae) => A.value = !1)
              }, {
                default: l(() => [...O[29] || (O[29] = [
                  p(" Cancel ", -1)
                ])]),
                _: 1
              }),
              f(ie, {
                variant: "primary",
                disabled: !H.value.trim() || !Q.value.trim(),
                onClick: W
              }, {
                default: l(() => [...O[30] || (O[30] = [
                  p(" Queue Download ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"])
            ])
          ])
        ])) : u("", !0)
      ]))
    ], 64));
  }
}), bu = /* @__PURE__ */ X(ku, [["__scopeId", "data-v-73b78d84"]]), _u = { class: "node-details" }, $u = { class: "status-row" }, Cu = {
  key: 0,
  class: "detail-row"
}, xu = { class: "value" }, Su = { class: "detail-row" }, Iu = { class: "value" }, Eu = {
  key: 1,
  class: "detail-row"
}, Mu = { class: "value mono" }, zu = {
  key: 2,
  class: "detail-row"
}, Lu = ["href"], Tu = {
  key: 3,
  class: "detail-row"
}, Ru = { class: "value mono small" }, Du = { class: "detail-row" }, Nu = {
  key: 0,
  class: "value"
}, Ou = {
  key: 1,
  class: "workflow-list"
}, Uu = /* @__PURE__ */ Y({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(t, { emit: c }) {
    const n = t, r = c, g = U(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), y = U(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), h = U(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[n.node.source] || n.node.source);
    return (v, i) => (o(), x(it, {
      title: `NODE DETAILS: ${t.node.name}`,
      size: "md",
      onClose: i[1] || (i[1] = (m) => r("close"))
    }, {
      body: l(() => [
        e("div", _u, [
          e("div", $u, [
            i[2] || (i[2] = e("span", { class: "label" }, "Status:", -1)),
            e("span", {
              class: ne(["status-badge", g.value])
            }, a(y.value), 3)
          ]),
          t.node.version ? (o(), s("div", Cu, [
            i[3] || (i[3] = e("span", { class: "label" }, "Version:", -1)),
            e("span", xu, a(t.node.source === "development" ? "" : "v") + a(t.node.version), 1)
          ])) : u("", !0),
          e("div", Su, [
            i[4] || (i[4] = e("span", { class: "label" }, "Source:", -1)),
            e("span", Iu, a(h.value), 1)
          ]),
          t.node.registry_id ? (o(), s("div", Eu, [
            i[5] || (i[5] = e("span", { class: "label" }, "Registry ID:", -1)),
            e("span", Mu, a(t.node.registry_id), 1)
          ])) : u("", !0),
          t.node.repository ? (o(), s("div", zu, [
            i[7] || (i[7] = e("span", { class: "label" }, "Repository:", -1)),
            e("a", {
              href: t.node.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "repo-link"
            }, [
              p(a(t.node.repository) + " ", 1),
              i[6] || (i[6] = e("svg", {
                class: "external-icon",
                width: "12",
                height: "12",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M3.75 2A1.75 1.75 0 0 0 2 3.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0 0 14 12.25v-3.5a.75.75 0 0 0-1.5 0v3.5a.25.25 0 0 1-.25.25h-8.5a.25.25 0 0 1-.25-.25v-8.5a.25.25 0 0 1 .25-.25h3.5a.75.75 0 0 0 0-1.5h-3.5z" }),
                e("path", { d: "M10 1a.75.75 0 0 0 0 1.5h2.44L7.22 7.72a.75.75 0 1 0 1.06 1.06l5.22-5.22V6a.75.75 0 0 0 1.5 0V1.75a.75.75 0 0 0-.75-.75H10z" })
              ], -1))
            ], 8, Lu)
          ])) : u("", !0),
          t.node.download_url ? (o(), s("div", Tu, [
            i[8] || (i[8] = e("span", { class: "label" }, "Download URL:", -1)),
            e("span", Ru, a(t.node.download_url), 1)
          ])) : u("", !0),
          i[10] || (i[10] = e("div", { class: "section-divider" }, null, -1)),
          e("div", Du, [
            i[9] || (i[9] = e("span", { class: "label" }, "Used by:", -1)),
            !t.node.used_in_workflows || t.node.used_in_workflows.length === 0 ? (o(), s("span", Nu, " Not used in any workflows ")) : (o(), s("div", Ou, [
              (o(!0), s(q, null, se(t.node.used_in_workflows, (m) => (o(), s("span", {
                key: m,
                class: "workflow-tag"
              }, a(m), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: l(() => [
        f(ie, {
          variant: "secondary",
          onClick: i[0] || (i[0] = (m) => r("close"))
        }, {
          default: l(() => [...i[11] || (i[11] = [
            p(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Bu = /* @__PURE__ */ X(Uu, [["__scopeId", "data-v-b342f626"]]), Pu = { key: 0 }, Vu = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, Fu = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, Au = /* @__PURE__ */ Y({
  __name: "NodesSection",
  emits: ["open-node-manager"],
  setup(t, { emit: c }) {
    const n = c, { getNodes: r, trackNodeAsDev: g, installNode: y, uninstallNode: h } = Se(), v = b({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), i = b(!1), m = b(null), $ = b(""), d = b(!1), I = b(null), _ = U(() => {
      if (!$.value.trim()) return v.value.nodes;
      const M = $.value.toLowerCase();
      return v.value.nodes.filter(
        (C) => {
          var F, V;
          return C.name.toLowerCase().includes(M) || ((F = C.description) == null ? void 0 : F.toLowerCase().includes(M)) || ((V = C.repository) == null ? void 0 : V.toLowerCase().includes(M));
        }
      );
    }), T = U(
      () => _.value.filter((M) => M.installed && M.tracked)
    ), k = U(
      () => _.value.filter((M) => !M.installed && M.tracked)
    ), w = U(
      () => _.value.filter((M) => M.installed && !M.tracked)
    );
    function E(M) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[M] || M;
    }
    function N(M) {
      return !M.used_in_workflows || M.used_in_workflows.length === 0 ? "Not used in any workflows" : M.used_in_workflows.length === 1 ? M.used_in_workflows[0] : `${M.used_in_workflows.length} workflows`;
    }
    function A(M) {
      I.value = M;
    }
    function H() {
      n("open-node-manager");
    }
    async function Q(M) {
      if (confirm(`Track "${M}" as a development node?

This will add it to your environment manifest with source='development'. It won't be version-controlled but will be recognized as intentional.`))
        try {
          i.value = !0;
          const C = await g(M);
          C.status === "success" ? (alert(`Node "${M}" is now tracked as development!`), await P()) : alert(`Failed to track node: ${C.message || "Unknown error"}`);
        } catch (C) {
          alert(`Error tracking node: ${C instanceof Error ? C.message : "Unknown error"}`);
        } finally {
          i.value = !1;
        }
    }
    async function B(M) {
      if (confirm(`Remove untracked node "${M}"?

This will delete the node directory from custom_nodes/.`))
        try {
          i.value = !0;
          const C = await h(M);
          C.status === "success" ? (alert(`Node "${M}" removed!`), await P()) : alert(`Failed to remove node: ${C.message || "Unknown error"}`);
        } catch (C) {
          alert(`Error removing node: ${C instanceof Error ? C.message : "Unknown error"}`);
        } finally {
          i.value = !1;
        }
    }
    async function L(M) {
      if (confirm(`Install node "${M}"?

This will download and install the node.`))
        try {
          i.value = !0;
          const C = await y(M);
          C.status === "success" ? (alert(`Node "${M}" installed successfully!`), await P()) : alert(`Failed to install node: ${C.message || "Unknown error"}`);
        } catch (C) {
          alert(`Error installing node: ${C instanceof Error ? C.message : "Unknown error"}`);
        } finally {
          i.value = !1;
        }
    }
    async function P() {
      i.value = !0, m.value = null;
      try {
        v.value = await r();
      } catch (M) {
        m.value = M instanceof Error ? M.message : "Failed to load nodes";
      } finally {
        i.value = !1;
      }
    }
    return $e(P), (M, C) => (o(), s(q, null, [
      f(Ie, null, {
        header: l(() => [
          f(Ee, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: C[0] || (C[0] = (F) => d.value = !0)
          }, {
            actions: l(() => [
              f(Z, {
                variant: "primary",
                size: "sm",
                onClick: H
              }, {
                default: l(() => [...C[5] || (C[5] = [
                  p(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          f(rt, {
            modelValue: $.value,
            "onUpdate:modelValue": C[1] || (C[1] = (F) => $.value = F),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          i.value ? (o(), x(qe, {
            key: 0,
            message: "Loading nodes..."
          })) : m.value ? (o(), x(Ke, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: P
          }, null, 8, ["message"])) : (o(), s(q, { key: 2 }, [
            v.value.total_count ? (o(), x(dt, {
              key: 0,
              variant: "compact"
            }, {
              default: l(() => [
                p(a(v.value.installed_count) + " installed ", 1),
                v.value.missing_count ? (o(), s(q, { key: 0 }, [
                  p(" • " + a(v.value.missing_count) + " missing", 1)
                ], 64)) : u("", !0),
                v.value.untracked_count ? (o(), s(q, { key: 1 }, [
                  p(" • " + a(v.value.untracked_count) + " untracked", 1)
                ], 64)) : u("", !0)
              ]),
              _: 1
            })) : u("", !0),
            w.value.length ? (o(), x(_e, {
              key: 1,
              title: "UNTRACKED",
              count: w.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (o(!0), s(q, null, se(w.value, (F) => (o(), x(Ce, {
                  key: F.name,
                  status: "warning"
                }, {
                  icon: l(() => [...C[6] || (C[6] = [
                    p("?", -1)
                  ])]),
                  title: l(() => [
                    p(a(F.name), 1)
                  ]),
                  subtitle: l(() => [...C[7] || (C[7] = [
                    e("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: l(() => [
                    f(he, {
                      label: "Used by:",
                      value: N(F)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    f(Z, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (V) => A(F)
                    }, {
                      default: l(() => [...C[8] || (C[8] = [
                        p(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    f(Z, {
                      variant: "primary",
                      size: "sm",
                      onClick: (V) => Q(F.name)
                    }, {
                      default: l(() => [...C[9] || (C[9] = [
                        p(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    f(Z, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (V) => B(F.name)
                    }, {
                      default: l(() => [...C[10] || (C[10] = [
                        p(" Remove ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            T.value.length ? (o(), x(_e, {
              key: 2,
              title: "INSTALLED",
              count: T.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (o(!0), s(q, null, se(T.value, (F) => (o(), x(Ce, {
                  key: F.name,
                  status: "synced"
                }, {
                  icon: l(() => [
                    p(a(F.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: l(() => [
                    p(a(F.name), 1)
                  ]),
                  subtitle: l(() => [
                    F.version ? (o(), s("span", Pu, a(F.source === "development" ? "" : "v") + a(F.version), 1)) : (o(), s("span", Vu, "version unknown")),
                    e("span", Fu, " • " + a(E(F.source)), 1)
                  ]),
                  details: l(() => [
                    f(he, {
                      label: "Used by:",
                      value: N(F)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    f(Z, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (V) => A(F)
                    }, {
                      default: l(() => [...C[11] || (C[11] = [
                        p(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    f(Z, {
                      variant: "secondary",
                      size: "xs",
                      onClick: H
                    }, {
                      default: l(() => [...C[12] || (C[12] = [
                        p(" Manage ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            k.value.length ? (o(), x(_e, {
              key: 3,
              title: "MISSING",
              count: k.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: l(() => [
                (o(!0), s(q, null, se(k.value, (F) => (o(), x(Ce, {
                  key: F.name,
                  status: "missing"
                }, {
                  icon: l(() => [...C[13] || (C[13] = [
                    p("!", -1)
                  ])]),
                  title: l(() => [
                    p(a(F.name), 1)
                  ]),
                  subtitle: l(() => [...C[14] || (C[14] = [
                    e("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: l(() => [
                    f(he, {
                      label: "Required by:",
                      value: N(F)
                    }, null, 8, ["value"])
                  ]),
                  actions: l(() => [
                    f(Z, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (V) => A(F)
                    }, {
                      default: l(() => [...C[15] || (C[15] = [
                        p(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    f(Z, {
                      variant: "primary",
                      size: "sm",
                      onClick: (V) => L(F.name)
                    }, {
                      default: l(() => [...C[16] || (C[16] = [
                        p(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            !T.value.length && !k.value.length && !w.value.length ? (o(), x(Ue, {
              key: 4,
              icon: "📭",
              message: $.value ? `No nodes match '${$.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : u("", !0)
          ], 64))
        ]),
        _: 1
      }),
      f(He, {
        show: d.value,
        title: "About Custom Nodes",
        onClose: C[3] || (C[3] = (F) => d.value = !1)
      }, {
        content: l(() => [...C[17] || (C[17] = [
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
        actions: l(() => [
          f(Z, {
            variant: "primary",
            onClick: C[2] || (C[2] = (F) => d.value = !1)
          }, {
            default: l(() => [...C[18] || (C[18] = [
              p(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      I.value ? (o(), x(Bu, {
        key: 0,
        node: I.value,
        onClose: C[4] || (C[4] = (F) => I.value = null)
      }, null, 8, ["node"])) : u("", !0)
    ], 64));
  }
}), Wu = /* @__PURE__ */ X(Au, [["__scopeId", "data-v-4ac1465a"]]), Gu = { class: "remote-url-display" }, ju = ["title"], Hu = ["title"], qu = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Ku = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Ju = /* @__PURE__ */ Y({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(t) {
    const c = t, n = b(!1), r = U(() => {
      if (c.url.length <= c.maxLength)
        return c.url;
      const y = c.url.slice(0, Math.floor(c.maxLength * 0.6)), h = c.url.slice(-Math.floor(c.maxLength * 0.3));
      return `${y}...${h}`;
    });
    async function g() {
      try {
        await navigator.clipboard.writeText(c.url), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (y) {
        console.error("Failed to copy URL:", y);
      }
    }
    return (y, h) => (o(), s("div", Gu, [
      e("span", {
        class: "url-text",
        title: t.url
      }, a(r.value), 9, ju),
      e("button", {
        class: ne(["copy-btn", { copied: n.value }]),
        onClick: g,
        title: n.value ? "Copied!" : "Copy URL"
      }, [
        n.value ? (o(), s("svg", Ku, [...h[1] || (h[1] = [
          e("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (o(), s("svg", qu, [...h[0] || (h[0] = [
          e("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          e("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, Hu)
    ]));
  }
}), jt = /* @__PURE__ */ X(Ju, [["__scopeId", "data-v-7768a58d"]]), Qu = { class: "remote-title" }, Yu = {
  key: 0,
  class: "default-badge"
}, Xu = {
  key: 1,
  class: "sync-badge"
}, Zu = {
  key: 0,
  class: "ahead"
}, em = {
  key: 1,
  class: "behind"
}, tm = {
  key: 0,
  class: "tracking-info"
}, om = /* @__PURE__ */ Y({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    trackingBranch: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove"],
  setup(t, { emit: c }) {
    const n = t, r = U(() => n.fetchingRemote === n.remote.name), g = U(() => n.remote.is_default), y = U(() => !!n.trackingBranch);
    function h(v) {
      const i = new Date(v), $ = (/* @__PURE__ */ new Date()).getTime() - i.getTime(), d = Math.floor($ / 6e4);
      if (d < 1) return "Just now";
      if (d < 60) return `${d}m ago`;
      const I = Math.floor(d / 60);
      if (I < 24) return `${I}h ago`;
      const _ = Math.floor(I / 24);
      return _ < 7 ? `${_}d ago` : i.toLocaleDateString();
    }
    return (v, i) => (o(), x(Ce, {
      status: g.value ? "synced" : void 0
    }, {
      icon: l(() => [
        p(a(g.value ? "🔗" : "🌐"), 1)
      ]),
      title: l(() => [
        e("div", Qu, [
          e("span", null, a(t.remote.name), 1),
          g.value ? (o(), s("span", Yu, "DEFAULT")) : u("", !0),
          t.syncStatus ? (o(), s("span", Xu, [
            t.syncStatus.ahead > 0 ? (o(), s("span", Zu, "↑" + a(t.syncStatus.ahead), 1)) : u("", !0),
            t.syncStatus.behind > 0 ? (o(), s("span", em, "↓" + a(t.syncStatus.behind), 1)) : u("", !0)
          ])) : u("", !0)
        ])
      ]),
      subtitle: l(() => [
        y.value ? (o(), s("span", tm, " Tracking: " + a(t.trackingBranch), 1)) : u("", !0)
      ]),
      details: l(() => {
        var m;
        return [
          f(he, { label: "Fetch:" }, {
            default: l(() => [
              f(jt, {
                url: t.remote.fetch_url
              }, null, 8, ["url"])
            ]),
            _: 1
          }),
          t.remote.push_url !== t.remote.fetch_url ? (o(), x(he, {
            key: 0,
            label: "Push:"
          }, {
            default: l(() => [
              f(jt, {
                url: t.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : u("", !0),
          (m = t.syncStatus) != null && m.last_fetch ? (o(), x(he, {
            key: 1,
            label: "Last Fetch:"
          }, {
            default: l(() => [
              e("span", null, a(h(t.syncStatus.last_fetch)), 1)
            ]),
            _: 1
          })) : u("", !0)
        ];
      }),
      actions: l(() => [
        f(Z, {
          variant: "primary",
          size: "xs",
          loading: r.value,
          onClick: i[0] || (i[0] = (m) => v.$emit("fetch", t.remote.name))
        }, {
          default: l(() => [...i[3] || (i[3] = [
            p(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        f(Z, {
          variant: "secondary",
          size: "xs",
          onClick: i[1] || (i[1] = (m) => v.$emit("edit", t.remote.name))
        }, {
          default: l(() => [...i[4] || (i[4] = [
            p(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        g.value ? u("", !0) : (o(), x(Z, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: i[2] || (i[2] = (m) => v.$emit("remove", t.remote.name))
        }, {
          default: l(() => [...i[5] || (i[5] = [
            p(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["status"]));
  }
}), sm = /* @__PURE__ */ X(om, [["__scopeId", "data-v-17362e45"]]), nm = ["for"], am = {
  key: 0,
  class: "base-form-field-required"
}, lm = { class: "base-form-field-input" }, im = {
  key: 1,
  class: "base-form-field-error"
}, rm = {
  key: 2,
  class: "base-form-field-hint"
}, dm = /* @__PURE__ */ Y({
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
    return (r, g) => (o(), s("div", {
      class: ne(["base-form-field", { "full-width": t.fullWidth }])
    }, [
      t.label ? (o(), s("label", {
        key: 0,
        for: n.value,
        class: "base-form-field-label"
      }, [
        p(a(t.label) + " ", 1),
        t.required ? (o(), s("span", am, "*")) : u("", !0)
      ], 8, nm)) : u("", !0),
      e("div", lm, [
        ce(r.$slots, "default", {}, void 0, !0)
      ]),
      t.error ? (o(), s("span", im, a(t.error), 1)) : t.hint ? (o(), s("span", rm, a(t.hint), 1)) : u("", !0)
    ], 2));
  }
}), Lt = /* @__PURE__ */ X(dm, [["__scopeId", "data-v-9a1cf296"]]), cm = { class: "remote-form" }, um = { class: "form-header" }, mm = { class: "form-body" }, vm = {
  key: 0,
  class: "form-error"
}, fm = { class: "form-actions" }, gm = /* @__PURE__ */ Y({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(t, { emit: c }) {
    const n = t, r = c, g = b({
      name: n.remoteName,
      fetchUrl: n.fetchUrl,
      pushUrl: n.pushUrl
    }), y = b(!1), h = b(null);
    Ot(() => [n.remoteName, n.fetchUrl, n.pushUrl], () => {
      g.value = {
        name: n.remoteName,
        fetchUrl: n.fetchUrl,
        pushUrl: n.pushUrl
      };
    });
    const v = U(() => g.value.name.trim() !== "" && g.value.fetchUrl.trim() !== "");
    async function i() {
      if (!(!v.value || y.value)) {
        h.value = null, y.value = !0;
        try {
          r("submit", g.value);
        } catch (m) {
          h.value = m instanceof Error ? m.message : "Failed to submit form";
        } finally {
          y.value = !1;
        }
      }
    }
    return (m, $) => (o(), s("div", cm, [
      e("div", um, [
        f(ze, null, {
          default: l(() => [
            p(a(t.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      e("div", mm, [
        f(Lt, {
          label: "Remote Name",
          required: ""
        }, {
          default: l(() => [
            f(Oe, {
              modelValue: g.value.name,
              "onUpdate:modelValue": $[0] || ($[0] = (d) => g.value.name = d),
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
          default: l(() => [
            f(Oe, {
              modelValue: g.value.fetchUrl,
              "onUpdate:modelValue": $[1] || ($[1] = (d) => g.value.fetchUrl = d),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        f(Lt, { label: "Push URL (optional)" }, {
          default: l(() => [
            f(Oe, {
              modelValue: g.value.pushUrl,
              "onUpdate:modelValue": $[2] || ($[2] = (d) => g.value.pushUrl = d),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        h.value ? (o(), s("div", vm, a(h.value), 1)) : u("", !0)
      ]),
      e("div", fm, [
        f(Z, {
          variant: "primary",
          size: "md",
          disabled: !v.value,
          loading: y.value,
          onClick: i
        }, {
          default: l(() => [
            p(a(t.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        f(Z, {
          variant: "ghost",
          size: "md",
          onClick: $[3] || ($[3] = (d) => m.$emit("cancel"))
        }, {
          default: l(() => [...$[4] || ($[4] = [
            p(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), hm = /* @__PURE__ */ X(gm, [["__scopeId", "data-v-56021b18"]]), pm = { key: 0 }, ym = /* @__PURE__ */ Y({
  __name: "RemotesSection",
  setup(t) {
    const {
      getRemotes: c,
      addRemote: n,
      removeRemote: r,
      updateRemoteUrl: g,
      fetchRemote: y,
      getRemoteSyncStatus: h
    } = Se(), v = b([]), i = b(null), m = b({}), $ = b(!1), d = b(null), I = b(""), _ = b(!1), T = b(null), k = b(!1), w = b("add"), E = b({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), N = U(() => {
      if (!I.value.trim()) return v.value;
      const V = I.value.toLowerCase();
      return v.value.filter(
        (j) => j.name.toLowerCase().includes(V) || j.fetch_url.toLowerCase().includes(V) || j.push_url.toLowerCase().includes(V)
      );
    });
    function A(V) {
      var j;
      return ((j = i.value) == null ? void 0 : j.remote) === V;
    }
    async function H() {
      $.value = !0, d.value = null;
      try {
        const V = await c();
        v.value = V.remotes, i.value = V.current_branch_tracking || null, await Promise.all(
          V.remotes.map(async (j) => {
            const W = await h(j.name);
            W && (m.value[j.name] = W);
          })
        );
      } catch (V) {
        d.value = V instanceof Error ? V.message : "Failed to load remotes";
      } finally {
        $.value = !1;
      }
    }
    function Q() {
      w.value = "add", E.value = { name: "", fetchUrl: "", pushUrl: "" }, k.value = !0;
    }
    function B(V) {
      const j = v.value.find((W) => W.name === V);
      j && (w.value = "edit", E.value = {
        name: j.name,
        fetchUrl: j.fetch_url,
        pushUrl: j.push_url
      }, k.value = !0);
    }
    async function L(V) {
      try {
        w.value === "add" ? await n(V.name, V.fetchUrl) : await g(V.name, V.fetchUrl, V.pushUrl || void 0), k.value = !1, await H();
      } catch (j) {
        d.value = j instanceof Error ? j.message : "Operation failed";
      }
    }
    function P() {
      k.value = !1, E.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function M(V) {
      T.value = V;
      try {
        await y(V);
        const j = await h(V);
        j && (m.value[V] = j);
      } catch (j) {
        d.value = j instanceof Error ? j.message : "Fetch failed";
      } finally {
        T.value = null;
      }
    }
    async function C(V) {
      if (confirm(`Remove remote "${V}"?`))
        try {
          await r(V), await H();
        } catch (j) {
          d.value = j instanceof Error ? j.message : "Failed to remove remote";
        }
    }
    function F() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    return $e(H), (V, j) => (o(), s(q, null, [
      f(Ie, null, {
        header: l(() => [
          f(Ee, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: j[0] || (j[0] = (W) => _.value = !0)
          }, {
            actions: l(() => [
              k.value ? u("", !0) : (o(), x(Z, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: Q
              }, {
                default: l(() => [...j[3] || (j[3] = [
                  p(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: l(() => [
          k.value ? u("", !0) : (o(), x(rt, {
            key: 0,
            modelValue: I.value,
            "onUpdate:modelValue": j[1] || (j[1] = (W) => I.value = W),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: l(() => [
          $.value ? (o(), x(qe, {
            key: 0,
            message: "Loading remotes..."
          })) : d.value ? (o(), x(Ke, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: H
          }, null, 8, ["message"])) : (o(), s(q, { key: 2 }, [
            k.value ? (o(), x(hm, {
              key: 0,
              mode: w.value,
              "remote-name": E.value.name,
              "fetch-url": E.value.fetchUrl,
              "push-url": E.value.pushUrl,
              onSubmit: L,
              onCancel: P
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : u("", !0),
            v.value.length && !k.value ? (o(), x(dt, {
              key: 1,
              variant: "compact"
            }, {
              default: l(() => [
                p(" Total: " + a(v.value.length) + " remote" + a(v.value.length !== 1 ? "s" : "") + " ", 1),
                i.value ? (o(), s("span", pm, " • Tracking: " + a(i.value.remote) + "/" + a(i.value.branch), 1)) : u("", !0)
              ]),
              _: 1
            })) : u("", !0),
            N.value.length && !k.value ? (o(), x(_e, {
              key: 2,
              title: "REMOTES",
              count: N.value.length
            }, {
              default: l(() => [
                (o(!0), s(q, null, se(N.value, (W) => {
                  var z;
                  return o(), x(sm, {
                    key: W.name,
                    remote: W,
                    "sync-status": m.value[W.name],
                    "tracking-branch": A(W.name) ? (z = i.value) == null ? void 0 : z.branch : void 0,
                    "fetching-remote": T.value,
                    onFetch: M,
                    onEdit: B,
                    onRemove: C
                  }, null, 8, ["remote", "sync-status", "tracking-branch", "fetching-remote"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            !N.value.length && !k.value ? (o(), x(Ue, {
              key: 3,
              icon: "🌐",
              message: I.value ? `No remotes match '${I.value}'` : "No remotes configured."
            }, {
              actions: l(() => [
                f(Z, {
                  variant: "primary",
                  onClick: Q
                }, {
                  default: l(() => [...j[4] || (j[4] = [
                    p(" Add Your First Remote ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["message"])) : u("", !0)
          ], 64))
        ]),
        _: 1
      }),
      f(He, {
        show: _.value,
        title: "About Git Remotes",
        onClose: j[2] || (j[2] = (W) => _.value = !1)
      }, {
        content: l(() => [...j[5] || (j[5] = [
          e("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          e("p", null, [
            p(" The "),
            e("strong", null, '"origin"'),
            p(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: l(() => [
          f(Z, {
            variant: "link",
            onClick: F
          }, {
            default: l(() => [...j[6] || (j[6] = [
              p(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), wm = /* @__PURE__ */ X(ym, [["__scopeId", "data-v-a75719bb"]]), km = { class: "setting-info" }, bm = { class: "setting-label" }, _m = {
  key: 0,
  class: "required-marker"
}, $m = {
  key: 0,
  class: "setting-description"
}, Cm = { class: "setting-control" }, xm = /* @__PURE__ */ Y({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (c, n) => (o(), s("div", {
      class: ne(["setting-row", { disabled: t.disabled }])
    }, [
      e("div", km, [
        e("div", bm, [
          p(a(t.label) + " ", 1),
          t.required ? (o(), s("span", _m, "*")) : u("", !0)
        ]),
        t.description ? (o(), s("div", $m, a(t.description), 1)) : u("", !0)
      ]),
      e("div", Cm, [
        ce(c.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), je = /* @__PURE__ */ X(xm, [["__scopeId", "data-v-cb5d236c"]]), Sm = { class: "toggle" }, Im = ["checked", "disabled"], Em = /* @__PURE__ */ Y({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (o(), s("label", Sm, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        onChange: n[0] || (n[0] = (r) => c.$emit("update:modelValue", r.target.checked)),
        class: "toggle-input"
      }, null, 40, Im),
      n[1] || (n[1] = e("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), ot = /* @__PURE__ */ X(Em, [["__scopeId", "data-v-71c0f550"]]), Mm = { class: "settings-section" }, zm = { class: "path-setting" }, Lm = { class: "path-value" }, Tm = { class: "path-setting" }, Rm = { class: "path-value" }, Dm = { class: "settings-section" }, Nm = { class: "settings-section" }, Om = { class: "settings-section" }, Um = /* @__PURE__ */ Y({
  __name: "WorkspaceSettingsSection",
  setup(t) {
    const { getConfig: c, updateConfig: n } = Se(), r = b(!1), g = b(null), y = b(null), h = b(null), v = b(null), i = b(""), m = b(""), $ = b(!0), d = b(!0), I = b(!1), _ = U(() => v.value ? i.value !== (v.value.civitai_api_key || "") : !1);
    async function T() {
      r.value = !0, g.value = null;
      try {
        h.value = await c(), v.value = { ...h.value }, i.value = h.value.civitai_api_key || "", m.value = h.value.huggingface_token || "", $.value = h.value.auto_sync_models, d.value = h.value.confirm_destructive;
        const N = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        I.value = N === "true";
      } catch (N) {
        g.value = N instanceof Error ? N.message : "Failed to load settings";
      } finally {
        r.value = !1;
      }
    }
    async function k() {
      var N;
      y.value = null;
      try {
        const A = {};
        i.value !== (((N = v.value) == null ? void 0 : N.civitai_api_key) || "") && (A.civitai_api_key = i.value || null), await n(A), await T(), y.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          y.value = null;
        }, 3e3);
      } catch (A) {
        y.value = {
          type: "error",
          message: A instanceof Error ? A.message : "Failed to save settings"
        };
      }
    }
    function w() {
      v.value && (i.value = v.value.civitai_api_key || "", m.value = v.value.huggingface_token || "", $.value = v.value.auto_sync_models, d.value = v.value.confirm_destructive, y.value = null);
    }
    function E(N) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(N)), console.log("[ComfyGit] Auto-refresh setting saved:", N);
    }
    return $e(T), (N, A) => (o(), x(Ie, null, {
      header: l(() => [
        f(Ee, { title: "WORKSPACE SETTINGS" }, {
          actions: l(() => [
            f(Z, {
              variant: "primary",
              size: "sm",
              disabled: !_.value,
              onClick: k
            }, {
              default: l(() => [...A[5] || (A[5] = [
                p(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            _.value ? (o(), x(Z, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: w
            }, {
              default: l(() => [...A[6] || (A[6] = [
                p(" Reset ", -1)
              ])]),
              _: 1
            })) : u("", !0)
          ]),
          _: 1
        })
      ]),
      content: l(() => [
        r.value ? (o(), x(qe, {
          key: 0,
          message: "Loading workspace settings..."
        })) : g.value ? (o(), x(Ke, {
          key: 1,
          message: g.value,
          retry: !0,
          onRetry: T
        }, null, 8, ["message"])) : (o(), s(q, { key: 2 }, [
          f(_e, { title: "WORKSPACE PATHS" }, {
            default: l(() => {
              var H, Q;
              return [
                e("div", Mm, [
                  e("div", zm, [
                    A[7] || (A[7] = e("div", { class: "path-label" }, "Workspace Root", -1)),
                    A[8] || (A[8] = e("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                    e("div", Lm, a(((H = h.value) == null ? void 0 : H.workspace_path) || "Loading..."), 1)
                  ]),
                  e("div", Tm, [
                    A[9] || (A[9] = e("div", { class: "path-label" }, "Models Directory", -1)),
                    A[10] || (A[10] = e("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                    e("div", Rm, a(((Q = h.value) == null ? void 0 : Q.models_path) || "Not configured"), 1)
                  ])
                ])
              ];
            }),
            _: 1
          }),
          f(_e, { title: "API CREDENTIALS" }, {
            default: l(() => [
              e("div", Dm, [
                f(je, {
                  label: "CivitAI API Key",
                  description: "API key for downloading models from CivitAI"
                }, {
                  default: l(() => [
                    f(Ct, {
                      modelValue: i.value,
                      "onUpdate:modelValue": A[0] || (A[0] = (H) => i.value = H),
                      type: "password",
                      placeholder: "Enter CivitAI API key...",
                      style: { minWidth: "300px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                f(je, {
                  label: "HuggingFace Token",
                  description: "Token for accessing HuggingFace models (not yet supported)",
                  disabled: !0
                }, {
                  default: l(() => [
                    f(Ct, {
                      modelValue: m.value,
                      "onUpdate:modelValue": A[1] || (A[1] = (H) => m.value = H),
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
          f(_e, { title: "UI SETTINGS" }, {
            default: l(() => [
              e("div", Nm, [
                f(je, {
                  label: "Auto-Refresh After Git Operations",
                  description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
                }, {
                  default: l(() => [
                    f(ot, {
                      modelValue: I.value,
                      "onUpdate:modelValue": [
                        A[2] || (A[2] = (H) => I.value = H),
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
          f(_e, { title: "ADDITIONAL SETTINGS (Coming Soon)" }, {
            default: l(() => [
              e("div", Om, [
                f(je, {
                  label: "Auto-Sync Models",
                  description: "Automatically sync models when switching environments (not yet supported)",
                  disabled: !0
                }, {
                  default: l(() => [
                    f(ot, {
                      modelValue: $.value,
                      "onUpdate:modelValue": A[3] || (A[3] = (H) => $.value = H),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                f(je, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations (not yet supported)",
                  disabled: !0
                }, {
                  default: l(() => [
                    f(ot, {
                      modelValue: d.value,
                      "onUpdate:modelValue": A[4] || (A[4] = (H) => d.value = H),
                      disabled: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          y.value ? (o(), x(dt, {
            key: 0,
            variant: (y.value.type === "success", "compact")
          }, {
            default: l(() => [
              e("span", {
                style: Ye({ color: y.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, a(y.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : u("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), Bm = /* @__PURE__ */ X(Um, [["__scopeId", "data-v-7861bd35"]]), Pm = /* @__PURE__ */ Y({
  __name: "WorkspaceDebugSection",
  setup(t) {
    const { getWorkspaceLogs: c } = Se(), n = b([]), r = b(!1), g = b(null), y = b(!1), h = b(null), v = U(() => n.value.length === 0 ? [] : n.value.map((m) => ({
      text: `${m.timestamp} - ${m.name} - ${m.level} - ${m.func}:${m.line} - ${m.message}`,
      level: m.level
    })));
    async function i() {
      r.value = !0, g.value = null;
      try {
        n.value = await c(void 0, 500);
      } catch (m) {
        g.value = m instanceof Error ? m.message : "Failed to load workspace logs";
      } finally {
        r.value = !1, setTimeout(() => {
          var m;
          (m = h.value) != null && m.parentElement && (h.value.parentElement.scrollTop = h.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return $e(i), (m, $) => (o(), s(q, null, [
      f(Ie, null, {
        header: l(() => [
          f(Ee, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: $[0] || ($[0] = (d) => y.value = !0)
          }, {
            actions: l(() => [
              f(Z, {
                variant: "secondary",
                size: "sm",
                onClick: i,
                disabled: r.value
              }, {
                default: l(() => [
                  p(a(r.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: l(() => [
          r.value ? (o(), x(qe, {
            key: 0,
            message: "Loading workspace logs..."
          })) : g.value ? (o(), x(Ke, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: i
          }, null, 8, ["message"])) : (o(), s(q, { key: 2 }, [
            n.value.length === 0 ? (o(), x(Ue, {
              key: 0,
              icon: "📝",
              message: "No workspace logs available"
            })) : (o(), s("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: h,
              class: "log-output"
            }, [
              (o(!0), s(q, null, se(v.value, (d, I) => (o(), s("div", {
                key: I,
                class: ne(`log-line log-level-${d.level.toLowerCase()}`)
              }, a(d.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      f(He, {
        show: y.value,
        title: "About Workspace Logs",
        onClose: $[2] || ($[2] = (d) => y.value = !1)
      }, {
        content: l(() => [...$[3] || ($[3] = [
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
        actions: l(() => [
          f(Z, {
            variant: "primary",
            onClick: $[1] || ($[1] = (d) => y.value = !1)
          }, {
            default: l(() => [...$[4] || ($[4] = [
              p(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Vm = /* @__PURE__ */ X(Pm, [["__scopeId", "data-v-39f6a756"]]), Fm = /* @__PURE__ */ Y({
  __name: "DebugEnvSection",
  setup(t) {
    const { getEnvironmentLogs: c, getStatus: n } = Se(), r = b([]), g = b(!1), y = b(null), h = b(!1), v = b("production"), i = b(null), m = U(() => r.value.length === 0 ? [] : r.value.map((d) => ({
      text: `${d.timestamp} - ${d.name} - ${d.level} - ${d.func}:${d.line} - ${d.message}`,
      level: d.level
    })));
    async function $() {
      g.value = !0, y.value = null;
      try {
        r.value = await c(void 0, 500);
        try {
          const d = await n();
          v.value = d.environment || "production";
        } catch {
        }
      } catch (d) {
        y.value = d instanceof Error ? d.message : "Failed to load environment logs";
      } finally {
        g.value = !1, setTimeout(() => {
          var d;
          (d = i.value) != null && d.parentElement && (i.value.parentElement.scrollTop = i.value.parentElement.scrollHeight);
        }, 0);
      }
    }
    return $e($), (d, I) => (o(), s(q, null, [
      f(Ie, null, {
        header: l(() => [
          f(Ee, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: I[0] || (I[0] = (_) => h.value = !0)
          }, {
            actions: l(() => [
              f(Z, {
                variant: "secondary",
                size: "sm",
                onClick: $,
                disabled: g.value
              }, {
                default: l(() => [
                  p(a(g.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: l(() => [
          g.value ? (o(), x(qe, {
            key: 0,
            message: "Loading environment logs..."
          })) : y.value ? (o(), x(Ke, {
            key: 1,
            message: y.value,
            retry: !0,
            onRetry: $
          }, null, 8, ["message"])) : (o(), s(q, { key: 2 }, [
            r.value.length === 0 ? (o(), x(Ue, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (o(), s("div", {
              key: 1,
              ref_key: "logOutputElement",
              ref: i,
              class: "log-output"
            }, [
              (o(!0), s(q, null, se(m.value, (_, T) => (o(), s("div", {
                key: T,
                class: ne(`log-line log-level-${_.level.toLowerCase()}`)
              }, a(_.text), 3))), 128))
            ], 512))
          ], 64))
        ]),
        _: 1
      }),
      f(He, {
        show: h.value,
        title: "About Environment Logs",
        onClose: I[2] || (I[2] = (_) => h.value = !1)
      }, {
        content: l(() => [
          e("p", null, [
            I[3] || (I[3] = p(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            e("strong", null, a(v.value), 1),
            I[4] || (I[4] = p(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          I[5] || (I[5] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
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
          I[6] || (I[6] = e("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: l(() => [
          f(Z, {
            variant: "primary",
            onClick: I[1] || (I[1] = (_) => h.value = !1)
          }, {
            default: l(() => [...I[7] || (I[7] = [
              p(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Am = /* @__PURE__ */ X(Fm, [["__scopeId", "data-v-4f1e6f72"]]), Wm = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], Ht = "3.12", Gm = [
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
], qt = "auto", jm = { class: "env-title" }, Hm = {
  key: 0,
  class: "current-badge"
}, qm = {
  key: 0,
  class: "branch-info"
}, Km = /* @__PURE__ */ Y({
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
    return (c, n) => (o(), x(Ce, {
      status: t.isCurrent ? "synced" : void 0
    }, {
      icon: l(() => [
        p(a(t.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: l(() => [
        e("div", jm, [
          e("span", null, a(t.environmentName), 1),
          t.isCurrent && t.showCurrentLabel ? (o(), s("span", Hm, "CURRENT")) : u("", !0)
        ])
      ]),
      subtitle: l(() => [
        t.currentBranch ? (o(), s("span", qm, [
          n[0] || (n[0] = e("span", { class: "branch-icon" }, "⎇", -1)),
          p(" " + a(t.currentBranch), 1)
        ])) : u("", !0)
      ]),
      details: l(() => [
        f(he, {
          label: "Workflows:",
          value: String(t.workflowCount)
        }, null, 8, ["value"]),
        f(he, {
          label: "Nodes:",
          value: String(t.nodeCount)
        }, null, 8, ["value"]),
        f(he, {
          label: "Models:",
          value: String(t.modelCount)
        }, null, 8, ["value"]),
        t.lastUsed && t.showLastUsed ? (o(), x(he, {
          key: 0,
          label: "Last used:",
          value: t.lastUsed
        }, null, 8, ["value"])) : u("", !0)
      ]),
      actions: l(() => [
        ce(c.$slots, "actions", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["status"]));
  }
}), Jm = /* @__PURE__ */ X(Km, [["__scopeId", "data-v-5238e57c"]]), Qm = {
  key: 0,
  class: "create-form"
}, Ym = { class: "create-form__header" }, Xm = { class: "create-form__body" }, Zm = { class: "form-field" }, ev = { class: "form-field" }, tv = ["value"], ov = { class: "form-field" }, sv = ["disabled"], nv = ["value"], av = { class: "form-field" }, lv = ["value"], iv = { class: "form-field form-field--checkbox" }, rv = { class: "form-checkbox" }, dv = { class: "create-form__actions" }, cv = {
  width: "12",
  height: "12",
  viewBox: "0 0 16 16",
  fill: "currentColor",
  style: { color: "var(--cg-color-error)" }
}, uv = /* @__PURE__ */ Y({
  __name: "EnvironmentsSection",
  emits: ["switch", "create", "delete", "viewDetails"],
  setup(t, { expose: c, emit: n }) {
    const r = n, { getEnvironments: g, getComfyUIReleases: y } = Se(), h = b([]), v = b(!1), i = b(null), m = b(""), $ = b(!1), d = b(!1), I = b(""), _ = b(Ht), T = b("latest"), k = b(qt), w = b(!1), E = b([{ tag_name: "latest", name: "Latest", published_at: "" }]), N = b(!1), A = U(
      () => h.value.find((j) => j.is_current)
    ), H = U(() => {
      if (!m.value.trim()) return h.value;
      const j = m.value.toLowerCase();
      return h.value.filter(
        (W) => {
          var z;
          return W.name.toLowerCase().includes(j) || ((z = W.current_branch) == null ? void 0 : z.toLowerCase().includes(j));
        }
      );
    });
    function Q(j) {
      if (!j) return "";
      try {
        const W = new Date(j), ee = (/* @__PURE__ */ new Date()).getTime() - W.getTime(), R = Math.floor(ee / 6e4), O = Math.floor(ee / 36e5), ae = Math.floor(ee / 864e5);
        return R < 1 ? "just now" : R < 60 ? `${R} ${R === 1 ? "minute" : "minutes"} ago` : O < 24 ? `${O} ${O === 1 ? "hour" : "hours"} ago` : ae < 30 ? `${ae} ${ae === 1 ? "day" : "days"} ago` : W.toLocaleDateString();
      } catch {
        return j;
      }
    }
    function B() {
      const j = I.value.trim();
      if (!j) return;
      const W = {
        name: j,
        python_version: _.value,
        comfyui_version: T.value,
        torch_backend: k.value,
        switch_after: w.value
      };
      r("create", W), P();
    }
    function L() {
      P();
    }
    function P() {
      I.value = "", _.value = Ht, T.value = "latest", k.value = qt, w.value = !1, d.value = !1;
    }
    async function M() {
      if (d.value = !0, E.value.length <= 1) {
        N.value = !0;
        try {
          E.value = await y();
        } catch (j) {
          console.error("Failed to load ComfyUI releases:", j);
        } finally {
          N.value = !1;
        }
      }
    }
    function C(j) {
      r("viewDetails", j);
    }
    function F(j) {
      confirm(`Delete environment "${j}"?

This action cannot be undone.`) && r("delete", j);
    }
    async function V() {
      v.value = !0, i.value = null;
      try {
        h.value = await g();
      } catch (j) {
        i.value = j instanceof Error ? j.message : "Failed to load environments";
      } finally {
        v.value = !1;
      }
    }
    return $e(V), c({
      loadEnvironments: V
    }), (j, W) => (o(), s(q, null, [
      f(Ie, null, {
        header: l(() => [
          f(Ee, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: W[0] || (W[0] = (z) => $.value = !0)
          }, {
            actions: l(() => [
              f(Z, {
                variant: "ghost",
                size: "sm",
                onClick: M,
                title: "Create new environment"
              }, {
                default: l(() => [...W[9] || (W[9] = [
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
              f(Z, {
                variant: "ghost",
                size: "sm",
                onClick: V,
                title: "Refresh environments"
              }, {
                default: l(() => [...W[10] || (W[10] = [
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
        search: l(() => [
          f(rt, {
            modelValue: m.value,
            "onUpdate:modelValue": W[1] || (W[1] = (z) => m.value = z),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: l(() => [
          v.value ? (o(), x(qe, {
            key: 0,
            message: "Loading environments..."
          })) : i.value ? (o(), x(Ke, {
            key: 1,
            message: i.value,
            retry: !0,
            onRetry: V
          }, null, 8, ["message"])) : (o(), s(q, { key: 2 }, [
            d.value ? (o(), s("div", Qm, [
              e("div", Ym, [
                W[12] || (W[12] = e("span", { class: "create-form__title" }, "Create New Environment", -1)),
                f(Z, {
                  variant: "ghost",
                  size: "xs",
                  onClick: L
                }, {
                  default: l(() => [...W[11] || (W[11] = [
                    p(" ✕ ", -1)
                  ])]),
                  _: 1
                })
              ]),
              e("div", Xm, [
                e("div", Zm, [
                  W[13] || (W[13] = e("label", { class: "form-label" }, "Name", -1)),
                  f(Ct, {
                    modelValue: I.value,
                    "onUpdate:modelValue": W[2] || (W[2] = (z) => I.value = z),
                    placeholder: "my-environment",
                    onKeyup: Qe(L, ["esc"])
                  }, null, 8, ["modelValue"])
                ]),
                e("div", ev, [
                  W[14] || (W[14] = e("label", { class: "form-label" }, "Python Version", -1)),
                  kt(e("select", {
                    "onUpdate:modelValue": W[3] || (W[3] = (z) => _.value = z),
                    class: "form-select"
                  }, [
                    (o(!0), s(q, null, se(me(Wm), (z) => (o(), s("option", {
                      key: z,
                      value: z
                    }, a(z), 9, tv))), 128))
                  ], 512), [
                    [Mt, _.value]
                  ])
                ]),
                e("div", ov, [
                  W[15] || (W[15] = e("label", { class: "form-label" }, "ComfyUI Version", -1)),
                  kt(e("select", {
                    "onUpdate:modelValue": W[4] || (W[4] = (z) => T.value = z),
                    class: "form-select",
                    disabled: N.value
                  }, [
                    (o(!0), s(q, null, se(E.value, (z) => (o(), s("option", {
                      key: z.tag_name,
                      value: z.tag_name
                    }, a(z.name), 9, nv))), 128))
                  ], 8, sv), [
                    [Mt, T.value]
                  ])
                ]),
                e("div", av, [
                  W[16] || (W[16] = e("label", { class: "form-label" }, "PyTorch Backend", -1)),
                  kt(e("select", {
                    "onUpdate:modelValue": W[5] || (W[5] = (z) => k.value = z),
                    class: "form-select"
                  }, [
                    (o(!0), s(q, null, se(me(Gm), (z) => (o(), s("option", {
                      key: z,
                      value: z
                    }, a(z) + a(z === "auto" ? " (detect GPU)" : ""), 9, lv))), 128))
                  ], 512), [
                    [Mt, k.value]
                  ])
                ]),
                e("div", iv, [
                  e("label", rv, [
                    kt(e("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": W[6] || (W[6] = (z) => w.value = z)
                    }, null, 512), [
                      [_o, w.value]
                    ]),
                    W[17] || (W[17] = e("span", null, "Switch to this environment after creation", -1))
                  ])
                ]),
                e("div", dv, [
                  f(Z, {
                    variant: "primary",
                    size: "sm",
                    onClick: B,
                    disabled: !I.value.trim()
                  }, {
                    default: l(() => [...W[18] || (W[18] = [
                      p(" Create ", -1)
                    ])]),
                    _: 1
                  }, 8, ["disabled"]),
                  f(Z, {
                    variant: "secondary",
                    size: "sm",
                    onClick: L
                  }, {
                    default: l(() => [...W[19] || (W[19] = [
                      p(" Cancel ", -1)
                    ])]),
                    _: 1
                  })
                ])
              ])
            ])) : u("", !0),
            h.value.length ? (o(), x(dt, {
              key: 1,
              variant: "compact"
            }, {
              default: l(() => [
                p(" Total: " + a(h.value.length) + " " + a(h.value.length === 1 ? "environment" : "environments") + " ", 1),
                A.value ? (o(), s(q, { key: 0 }, [
                  W[20] || (W[20] = p(" • Current: ", -1)),
                  e("strong", null, a(A.value.name), 1)
                ], 64)) : u("", !0)
              ]),
              _: 1
            })) : u("", !0),
            H.value.length ? (o(), x(_e, {
              key: 2,
              title: "ENVIRONMENTS",
              count: H.value.length
            }, {
              default: l(() => [
                (o(!0), s(q, null, se(H.value, (z) => (o(), x(Jm, {
                  key: z.name,
                  "environment-name": z.name,
                  "is-current": z.is_current,
                  "current-branch": z.current_branch,
                  "workflow-count": z.workflow_count,
                  "node-count": z.node_count,
                  "model-count": z.model_count,
                  "last-used": Q(z.last_used),
                  "show-last-used": !!z.last_used
                }, {
                  actions: l(() => [
                    z.is_current ? u("", !0) : (o(), x(Z, {
                      key: 0,
                      variant: "secondary",
                      size: "sm",
                      onClick: (ee) => j.$emit("switch", z.name)
                    }, {
                      default: l(() => [...W[21] || (W[21] = [
                        p(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    f(Z, {
                      variant: "ghost",
                      size: "sm",
                      onClick: (ee) => C(z.name),
                      title: "View environment details"
                    }, {
                      default: l(() => [...W[22] || (W[22] = [
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
                    !z.is_current && h.value.length > 1 ? (o(), x(Z, {
                      key: 1,
                      variant: "ghost",
                      size: "sm",
                      onClick: (ee) => F(z.name),
                      title: "Delete environment"
                    }, {
                      default: l(() => [
                        (o(), s("svg", cv, [...W[23] || (W[23] = [
                          e("path", { d: "M3 4h10l-1 10H4L3 4zm4-2h2v1H7V2zM5 6v6h1V6H5zm3 0v6h1V6H8zm3 0v6h1V6h-1z" }, null, -1)
                        ])]))
                      ]),
                      _: 1
                    }, 8, ["onClick"])) : u("", !0)
                  ]),
                  _: 2
                }, 1032, ["environment-name", "is-current", "current-branch", "workflow-count", "node-count", "model-count", "last-used", "show-last-used"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : u("", !0),
            H.value.length ? u("", !0) : (o(), x(Ue, {
              key: 3,
              icon: "🌍",
              message: m.value ? `No environments match '${m.value}'` : "No environments found. Create one to get started!"
            }, Ut({ _: 2 }, [
              m.value ? void 0 : {
                name: "actions",
                fn: l(() => [
                  f(Z, {
                    variant: "primary",
                    onClick: M
                  }, {
                    default: l(() => [...W[24] || (W[24] = [
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
      f(He, {
        show: $.value,
        title: "About Environments",
        onClose: W[8] || (W[8] = (z) => $.value = !1)
      }, {
        content: l(() => [...W[25] || (W[25] = [
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
        actions: l(() => [
          f(Z, {
            variant: "secondary",
            onClick: W[7] || (W[7] = (z) => $.value = !1)
          }, {
            default: l(() => [...W[26] || (W[26] = [
              p(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), mv = /* @__PURE__ */ X(uv, [["__scopeId", "data-v-292627be"]]), vv = { class: "file-path" }, fv = { class: "file-path-text" }, gv = ["title"], hv = /* @__PURE__ */ Y({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(t) {
    const c = t, n = b(!1);
    async function r() {
      try {
        await navigator.clipboard.writeText(c.path), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (g) {
        console.error("Failed to copy:", g);
      }
    }
    return (g, y) => (o(), s("div", vv, [
      y[0] || (y[0] = e("span", { class: "file-path-icon" }, "📄", -1)),
      e("code", fv, a(t.path), 1),
      t.copyable ? (o(), s("button", {
        key: 0,
        class: "copy-btn",
        title: n.value ? "Copied!" : "Copy path",
        onClick: r
      }, a(n.value ? "✓" : "📋"), 9, gv)) : u("", !0)
    ]));
  }
}), pv = /* @__PURE__ */ X(hv, [["__scopeId", "data-v-f0982173"]]), yv = { class: "output-path-input" }, wv = { class: "export-actions" }, kv = {
  key: 1,
  class: "export-warning"
}, bv = /* @__PURE__ */ Y({
  __name: "ExportSection",
  setup(t) {
    const { exportEnv: c } = Se(), n = b(""), r = b(!1), g = b(null), y = b(!1);
    async function h() {
      r.value = !0, g.value = null;
      try {
        const i = await c(n.value || void 0);
        g.value = i;
      } catch (i) {
        g.value = {
          status: "error",
          message: i instanceof Error ? i.message : "Unknown error occurred"
        };
      } finally {
        r.value = !1;
      }
    }
    async function v() {
      var i;
      if ((i = g.value) != null && i.path)
        try {
          await navigator.clipboard.writeText(g.value.path);
        } catch (m) {
          console.error("Failed to copy path:", m);
        }
    }
    return (i, m) => (o(), s(q, null, [
      f(Ie, null, {
        header: l(() => [
          f(Ee, { title: "EXPORT ENVIRONMENT" }, {
            actions: l(() => [
              f(Z, {
                variant: "ghost",
                size: "sm",
                onClick: m[0] || (m[0] = ($) => y.value = !0),
                title: "About exporting"
              }, {
                default: l(() => [...m[5] || (m[5] = [
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
        content: l(() => [
          f(_e, { title: "WHAT WILL BE EXPORTED" }, {
            default: l(() => [
              f(Ce, { status: "synced" }, {
                icon: l(() => [...m[6] || (m[6] = [
                  p("📦", -1)
                ])]),
                title: l(() => [...m[7] || (m[7] = [
                  p("Environment Snapshot", -1)
                ])]),
                subtitle: l(() => [...m[8] || (m[8] = [
                  p(" Creates a complete snapshot of your current environment including workflows, custom nodes, and model references. ", -1)
                ])]),
                details: l(() => [
                  f(he, {
                    label: "Workflows",
                    value: "All workflows in this environment"
                  }),
                  f(he, {
                    label: "Custom Nodes",
                    value: "Node definitions and dependencies"
                  }),
                  f(he, {
                    label: "Models",
                    value: "Model references (not files)"
                  }),
                  f(he, {
                    label: "Configuration",
                    value: "Environment settings and metadata"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          f(_e, { title: "EXPORT OPTIONS" }, {
            default: l(() => [
              f(Ce, { status: "synced" }, {
                icon: l(() => [...m[9] || (m[9] = [
                  p("📁", -1)
                ])]),
                title: l(() => [...m[10] || (m[10] = [
                  p("Output Destination", -1)
                ])]),
                subtitle: l(() => [...m[11] || (m[11] = [
                  p(" Specify where the export bundle should be saved, or leave empty for default location. ", -1)
                ])]),
                details: l(() => [
                  e("div", yv, [
                    f(Ct, {
                      modelValue: n.value,
                      "onUpdate:modelValue": m[1] || (m[1] = ($) => n.value = $),
                      placeholder: "/path/to/export/bundle.tar.gz"
                    }, null, 8, ["modelValue"])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          f(_e, { title: "EXPORT" }, {
            default: l(() => [
              e("div", wv, [
                f(Z, {
                  variant: "primary",
                  size: "md",
                  loading: r.value,
                  disabled: r.value,
                  onClick: h
                }, {
                  default: l(() => [
                    m[12] || (m[12] = e("svg", {
                      width: "16",
                      height: "16",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                      e("path", { d: "M14 14H2v-2h12v2z" })
                    ], -1)),
                    p(" " + a(r.value ? "Exporting..." : "Export Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"]),
                n.value ? (o(), x(Z, {
                  key: 0,
                  variant: "secondary",
                  size: "md",
                  disabled: r.value,
                  onClick: m[2] || (m[2] = ($) => n.value = "")
                }, {
                  default: l(() => [...m[13] || (m[13] = [
                    p(" Clear Path ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])) : u("", !0)
              ])
            ]),
            _: 1
          }),
          g.value ? (o(), x(_e, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: l(() => [
              f(Ce, {
                status: g.value.status === "success" ? "synced" : "broken"
              }, Ut({
                icon: l(() => [
                  p(a(g.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: l(() => [
                  p(a(g.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: l(() => [
                  p(a(g.value.status === "success" ? "Your environment has been exported" : g.value.message), 1)
                ]),
                _: 2
              }, [
                g.value.status === "success" ? {
                  name: "details",
                  fn: l(() => [
                    f(he, { label: "Saved to:" }, {
                      default: l(() => [
                        f(pv, {
                          path: g.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    g.value.models_without_sources !== void 0 ? (o(), x(he, {
                      key: 0,
                      label: "Models without sources:",
                      value: g.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : u("", !0),
                    g.value.models_without_sources && g.value.models_without_sources > 0 ? (o(), s("div", kv, [...m[14] || (m[14] = [
                      e("span", { class: "warning-icon" }, "!", -1),
                      e("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : u("", !0)
                  ]),
                  key: "0"
                } : void 0,
                g.value.status === "success" ? {
                  name: "actions",
                  fn: l(() => [
                    f(Z, {
                      variant: "secondary",
                      size: "sm",
                      onClick: v
                    }, {
                      default: l(() => [...m[15] || (m[15] = [
                        p(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    f(Z, {
                      variant: "ghost",
                      size: "sm",
                      onClick: m[3] || (m[3] = ($) => g.value = null)
                    }, {
                      default: l(() => [...m[16] || (m[16] = [
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
          })) : u("", !0)
        ]),
        _: 1
      }),
      f(He, {
        show: y.value,
        title: "About Environment Export",
        onClose: m[4] || (m[4] = ($) => y.value = !1)
      }, {
        content: l(() => [...m[17] || (m[17] = [
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
}), _v = /* @__PURE__ */ X(bv, [["__scopeId", "data-v-1777a9d5"]]), $v = { class: "file-input-wrapper" }, Cv = ["accept", "multiple", "disabled"], xv = /* @__PURE__ */ Y({
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
    const r = n, g = b(null);
    function y() {
      var v;
      (v = g.value) == null || v.click();
    }
    function h(v) {
      const i = v.target;
      i.files && i.files.length > 0 && (r("change", i.files), i.value = "");
    }
    return c({
      triggerInput: y
    }), (v, i) => (o(), s("div", $v, [
      e("input", {
        ref_key: "fileInputRef",
        ref: g,
        type: "file",
        accept: t.accept,
        multiple: t.multiple,
        disabled: t.disabled,
        class: "file-input-hidden",
        onChange: h
      }, null, 40, Cv),
      f(Z, {
        variant: t.variant,
        size: t.size,
        disabled: t.disabled,
        onClick: y
      }, {
        default: l(() => [
          ce(v.$slots, "default", {}, () => [
            i[0] || (i[0] = e("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              e("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              e("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            p(" " + a(t.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), Sv = /* @__PURE__ */ X(xv, [["__scopeId", "data-v-cd192091"]]), Iv = {
  key: 0,
  class: "drop-zone-empty"
}, Ev = { class: "drop-zone-text" }, Mv = { class: "drop-zone-primary" }, zv = { class: "drop-zone-secondary" }, Lv = { class: "drop-zone-actions" }, Tv = {
  key: 1,
  class: "drop-zone-file"
}, Rv = { class: "file-info" }, Dv = { class: "file-details" }, Nv = { class: "file-name" }, Ov = { class: "file-size" }, Uv = /* @__PURE__ */ Y({
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
    const n = c, r = b(!1), g = b(null), y = b(0), h = U(() => g.value !== null), v = U(() => {
      var w;
      return ((w = g.value) == null ? void 0 : w.name) || "";
    }), i = U(() => {
      if (!g.value) return "";
      const w = g.value.size;
      return w < 1024 ? `${w} B` : w < 1024 * 1024 ? `${(w / 1024).toFixed(1)} KB` : w < 1024 * 1024 * 1024 ? `${(w / (1024 * 1024)).toFixed(1)} MB` : `${(w / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function m(w) {
      var E;
      y.value++, (E = w.dataTransfer) != null && E.types.includes("Files") && (r.value = !0);
    }
    function $(w) {
      w.dataTransfer && (w.dataTransfer.dropEffect = "copy");
    }
    function d() {
      y.value--, y.value === 0 && (r.value = !1);
    }
    function I(w) {
      var N;
      y.value = 0, r.value = !1;
      const E = (N = w.dataTransfer) == null ? void 0 : N.files;
      E && E.length > 0 && T(E[0]);
    }
    function _(w) {
      w.length > 0 && T(w[0]);
    }
    function T(w) {
      g.value = w, n("fileSelected", w);
    }
    function k() {
      g.value = null, n("clear");
    }
    return (w, E) => (o(), s("div", {
      class: ne(["file-drop-zone", { "drop-active": r.value, "has-file": h.value }]),
      onDragenter: be(m, ["prevent"]),
      onDragover: be($, ["prevent"]),
      onDragleave: be(d, ["prevent"]),
      onDrop: be(I, ["prevent"])
    }, [
      h.value ? (o(), s("div", Tv, [
        e("div", Rv, [
          E[1] || (E[1] = e("div", { class: "file-icon" }, "📦", -1)),
          e("div", Dv, [
            e("div", Nv, a(v.value), 1),
            e("div", Ov, a(i.value), 1)
          ])
        ]),
        f(Z, {
          variant: "ghost",
          size: "xs",
          onClick: k,
          title: "Remove file"
        }, {
          default: l(() => [...E[2] || (E[2] = [
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
      ])) : (o(), s("div", Iv, [
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
        e("div", Ev, [
          e("p", Mv, a(t.primaryText), 1),
          e("p", zv, a(t.secondaryText), 1)
        ]),
        e("div", Lv, [
          f(Sv, {
            accept: t.accept,
            multiple: t.multiple,
            variant: "primary",
            size: "md",
            onChange: _
          }, {
            default: l(() => [
              p(a(t.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), Bv = /* @__PURE__ */ X(Uv, [["__scopeId", "data-v-e00abbca"]]), Pv = { class: "import-preview" }, Vv = { class: "preview-header" }, Fv = {
  key: 0,
  class: "source-env"
}, Av = { class: "preview-content" }, Wv = { class: "preview-section" }, Gv = { class: "section-header" }, jv = { class: "section-info" }, Hv = { class: "section-count" }, qv = {
  key: 0,
  class: "item-list"
}, Kv = { class: "item-name" }, Jv = {
  key: 0,
  class: "item-more"
}, Qv = { class: "preview-section" }, Yv = { class: "section-header" }, Xv = { class: "section-info" }, Zv = { class: "section-count" }, ef = {
  key: 0,
  class: "item-list"
}, tf = { class: "item-details" }, of = { class: "item-name" }, sf = { class: "item-meta" }, nf = {
  key: 0,
  class: "item-more"
}, af = { class: "preview-section" }, lf = { class: "section-header" }, rf = { class: "section-info" }, df = { class: "section-count" }, cf = {
  key: 0,
  class: "item-list"
}, uf = { class: "item-name" }, mf = {
  key: 0,
  class: "item-more"
}, vf = {
  key: 0,
  class: "preview-section"
}, ff = { class: "git-info" }, gf = /* @__PURE__ */ Y({
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
    const c = t, n = U(() => c.workflows.length), r = U(() => c.models.length), g = U(() => c.nodes.length);
    function y(h) {
      return h < 1024 ? `${h} B` : h < 1024 * 1024 ? `${(h / 1024).toFixed(1)} KB` : h < 1024 * 1024 * 1024 ? `${(h / (1024 * 1024)).toFixed(1)} MB` : `${(h / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (h, v) => (o(), s("div", Pv, [
      e("div", Vv, [
        f(ze, null, {
          default: l(() => [...v[0] || (v[0] = [
            p("Import Preview", -1)
          ])]),
          _: 1
        }),
        t.sourceEnvironment ? (o(), s("span", Fv, [
          v[1] || (v[1] = p(" From: ", -1)),
          f(Dt, null, {
            default: l(() => [
              p(a(t.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : u("", !0)
      ]),
      e("div", Av, [
        e("div", Wv, [
          e("div", Gv, [
            v[3] || (v[3] = e("div", { class: "section-icon" }, "📄", -1)),
            e("div", jv, [
              v[2] || (v[2] = e("div", { class: "section-title" }, "Workflows", -1)),
              e("div", Hv, a(n.value) + " file" + a(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.workflows.length > 0 ? (o(), s("div", qv, [
            (o(!0), s(q, null, se(t.workflows.slice(0, t.maxPreviewItems), (i) => (o(), s("div", {
              key: i,
              class: "preview-item"
            }, [
              v[4] || (v[4] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", Kv, a(i), 1)
            ]))), 128)),
            t.workflows.length > t.maxPreviewItems ? (o(), s("div", Jv, " +" + a(t.workflows.length - t.maxPreviewItems) + " more ", 1)) : u("", !0)
          ])) : u("", !0)
        ]),
        e("div", Qv, [
          e("div", Yv, [
            v[6] || (v[6] = e("div", { class: "section-icon" }, "🎨", -1)),
            e("div", Xv, [
              v[5] || (v[5] = e("div", { class: "section-title" }, "Models", -1)),
              e("div", Zv, a(r.value) + " file" + a(r.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.models.length > 0 ? (o(), s("div", ef, [
            (o(!0), s(q, null, se(t.models.slice(0, t.maxPreviewItems), (i) => (o(), s("div", {
              key: i.filename,
              class: "preview-item"
            }, [
              v[7] || (v[7] = e("span", { class: "item-bullet" }, "•", -1)),
              e("div", tf, [
                e("span", of, a(i.filename), 1),
                e("span", sf, a(y(i.size)) + " • " + a(i.type), 1)
              ])
            ]))), 128)),
            t.models.length > t.maxPreviewItems ? (o(), s("div", nf, " +" + a(t.models.length - t.maxPreviewItems) + " more ", 1)) : u("", !0)
          ])) : u("", !0)
        ]),
        e("div", af, [
          e("div", lf, [
            v[9] || (v[9] = e("div", { class: "section-icon" }, "🔌", -1)),
            e("div", rf, [
              v[8] || (v[8] = e("div", { class: "section-title" }, "Custom Nodes", -1)),
              e("div", df, a(g.value) + " node" + a(g.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          t.nodes.length > 0 ? (o(), s("div", cf, [
            (o(!0), s(q, null, se(t.nodes.slice(0, t.maxPreviewItems), (i) => (o(), s("div", {
              key: i,
              class: "preview-item"
            }, [
              v[10] || (v[10] = e("span", { class: "item-bullet" }, "•", -1)),
              e("span", uf, a(i), 1)
            ]))), 128)),
            t.nodes.length > t.maxPreviewItems ? (o(), s("div", mf, " +" + a(t.nodes.length - t.maxPreviewItems) + " more ", 1)) : u("", !0)
          ])) : u("", !0)
        ]),
        t.gitBranch || t.gitCommit ? (o(), s("div", vf, [
          v[11] || (v[11] = e("div", { class: "section-header" }, [
            e("div", { class: "section-icon" }, "🌿"),
            e("div", { class: "section-info" }, [
              e("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          e("div", ff, [
            t.gitBranch ? (o(), x(he, {
              key: 0,
              label: "Branch"
            }, {
              default: l(() => [
                f(Dt, null, {
                  default: l(() => [
                    p(a(t.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : u("", !0),
            t.gitCommit ? (o(), x(he, {
              key: 1,
              label: "Commit"
            }, {
              default: l(() => [
                f(Zt, { hash: t.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : u("", !0)
          ])
        ])) : u("", !0)
      ])
    ]));
  }
}), hf = /* @__PURE__ */ X(gf, [["__scopeId", "data-v-182fe113"]]), pf = { class: "import-options" }, yf = { class: "options-container" }, wf = { class: "option-section" }, kf = { class: "conflict-options" }, bf = ["value", "checked", "onChange"], _f = { class: "conflict-content" }, $f = { class: "conflict-label" }, Cf = { class: "conflict-description" }, xf = { class: "option-section" }, Sf = { class: "component-toggles" }, If = /* @__PURE__ */ Y({
  __name: "ImportOptions",
  props: {
    conflictMode: {},
    includeWorkflows: { type: Boolean },
    includeModels: { type: Boolean },
    includeNodes: { type: Boolean },
    includeGitHistory: { type: Boolean }
  },
  emits: ["update:conflictMode", "update:includeWorkflows", "update:includeModels", "update:includeNodes", "update:includeGitHistory"],
  setup(t, { emit: c }) {
    const n = c, r = [
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
    return (g, y) => (o(), s("div", pf, [
      f(ze, null, {
        default: l(() => [...y[4] || (y[4] = [
          p("Import Options", -1)
        ])]),
        _: 1
      }),
      e("div", yf, [
        e("div", wf, [
          f(Rt, null, {
            default: l(() => [...y[5] || (y[5] = [
              p("Conflict Resolution", -1)
            ])]),
            _: 1
          }),
          e("div", kf, [
            (o(), s(q, null, se(r, (h) => e("label", {
              key: h.value,
              class: ne(["conflict-option", { active: t.conflictMode === h.value }])
            }, [
              e("input", {
                type: "radio",
                name: "conflict-mode",
                value: h.value,
                checked: t.conflictMode === h.value,
                onChange: (v) => n("update:conflictMode", h.value)
              }, null, 40, bf),
              e("div", _f, [
                e("span", $f, a(h.label), 1),
                e("span", Cf, a(h.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        e("div", xf, [
          f(Rt, null, {
            default: l(() => [...y[6] || (y[6] = [
              p("Components to Import", -1)
            ])]),
            _: 1
          }),
          e("div", Sf, [
            f(je, {
              label: "Workflows",
              description: "Import workflow JSON files"
            }, {
              default: l(() => [
                f(ot, {
                  "model-value": t.includeWorkflows,
                  "onUpdate:modelValue": y[0] || (y[0] = (h) => n("update:includeWorkflows", h))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            f(je, {
              label: "Models",
              description: "Import model files (may be large)"
            }, {
              default: l(() => [
                f(ot, {
                  "model-value": t.includeModels,
                  "onUpdate:modelValue": y[1] || (y[1] = (h) => n("update:includeModels", h))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            f(je, {
              label: "Custom Nodes",
              description: "Install custom node dependencies"
            }, {
              default: l(() => [
                f(ot, {
                  "model-value": t.includeNodes,
                  "onUpdate:modelValue": y[2] || (y[2] = (h) => n("update:includeNodes", h))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            f(je, {
              label: "Git History",
              description: "Import git commits and branches"
            }, {
              default: l(() => [
                f(ot, {
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
}), Ef = /* @__PURE__ */ X(If, [["__scopeId", "data-v-0ec212b0"]]), Mf = {
  key: 0,
  class: "import-empty"
}, zf = { class: "import-help" }, Lf = {
  key: 1,
  class: "import-configure"
}, Tf = { class: "selected-file-bar" }, Rf = { class: "file-bar-content" }, Df = { class: "file-bar-info" }, Nf = { class: "file-bar-name" }, Of = { class: "file-bar-size" }, Uf = { class: "import-actions" }, Bf = {
  key: 2,
  class: "import-progress"
}, Pf = { class: "progress-content" }, Vf = { class: "progress-info" }, Ff = { class: "progress-title" }, Af = { class: "progress-detail" }, Wf = { class: "progress-bar" }, Gf = { class: "progress-status" }, jf = {
  key: 3,
  class: "import-complete"
}, Hf = { class: "complete-message" }, qf = { class: "complete-title" }, Kf = { class: "complete-details" }, Jf = { class: "complete-actions" }, Qf = /* @__PURE__ */ Y({
  __name: "ImportSection",
  setup(t) {
    const c = b(null), n = b(!1), r = b(!1), g = b(!1), y = b(""), h = b({
      conflictMode: "overwrite",
      includeWorkflows: !0,
      includeModels: !0,
      includeNodes: !0,
      includeGitHistory: !0
    }), v = b({
      message: "Preparing import...",
      detail: "",
      percent: 0
    }), i = b({
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
    }), m = U(() => h.value.includeWorkflows || h.value.includeModels || h.value.includeNodes || h.value.includeGitHistory);
    function $(k) {
      c.value = k;
    }
    function d() {
      c.value = null, r.value = !1, g.value = !1, y.value = "";
    }
    function I() {
      d(), n.value = !1, v.value = {
        message: "Preparing import...",
        detail: "",
        percent: 0
      };
    }
    async function _() {
      if (c.value) {
        n.value = !0, r.value = !1;
        try {
          const k = [
            { message: "Extracting archive...", detail: "Unpacking export file", percent: 10 },
            { message: "Validating contents...", detail: "Checking file integrity", percent: 25 },
            { message: "Importing workflows...", detail: `Processing ${i.value.workflows.length} workflows`, percent: 40 },
            { message: "Importing models...", detail: `Copying ${i.value.models.length} model files`, percent: 60 },
            { message: "Installing nodes...", detail: `Setting up ${i.value.nodes.length} custom nodes`, percent: 80 },
            { message: "Finalizing...", detail: "Applying git history and configuration", percent: 95 }
          ];
          for (const w of k)
            v.value = w, await new Promise((E) => setTimeout(E, 800));
          v.value = { message: "Complete!", detail: "", percent: 100 }, await new Promise((w) => setTimeout(w, 500)), g.value = !0, y.value = `Successfully imported ${i.value.workflows.length} workflows, ${i.value.models.length} models, and ${i.value.nodes.length} custom nodes.`;
        } catch (k) {
          g.value = !1, y.value = k instanceof Error ? k.message : "Unknown error occurred during import";
        } finally {
          n.value = !1, r.value = !0;
        }
      }
    }
    function T(k) {
      return k < 1024 ? `${k} B` : k < 1024 * 1024 ? `${(k / 1024).toFixed(1)} KB` : k < 1024 * 1024 * 1024 ? `${(k / (1024 * 1024)).toFixed(1)} MB` : `${(k / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (k, w) => (o(), x(Ie, null, {
      header: l(() => [
        f(Ee, { title: "IMPORT ENVIRONMENT" })
      ]),
      content: l(() => [
        !c.value && !n.value ? (o(), s("div", Mf, [
          f(Bv, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: $
          }),
          e("div", zf, [
            f(ze, null, {
              default: l(() => [...w[5] || (w[5] = [
                p("How to Import", -1)
              ])]),
              _: 1
            }),
            w[6] || (w[6] = e("div", { class: "help-content" }, [
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
        ])) : c.value && !n.value && !r.value ? (o(), s("div", Lf, [
          e("div", Tf, [
            e("div", Rf, [
              w[7] || (w[7] = e("div", { class: "file-bar-icon" }, "📦", -1)),
              e("div", Df, [
                e("div", Nf, a(c.value.name), 1),
                e("div", Of, a(T(c.value.size)), 1)
              ])
            ]),
            f(Z, {
              variant: "ghost",
              size: "sm",
              onClick: d
            }, {
              default: l(() => [...w[8] || (w[8] = [
                p(" Change File ", -1)
              ])]),
              _: 1
            })
          ]),
          f(hf, {
            "source-environment": i.value.sourceEnvironment,
            workflows: i.value.workflows,
            models: i.value.models,
            nodes: i.value.nodes,
            "git-branch": i.value.gitBranch,
            "git-commit": i.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"]),
          f(Ef, {
            "conflict-mode": h.value.conflictMode,
            "onUpdate:conflictMode": w[0] || (w[0] = (E) => h.value.conflictMode = E),
            "include-workflows": h.value.includeWorkflows,
            "onUpdate:includeWorkflows": w[1] || (w[1] = (E) => h.value.includeWorkflows = E),
            "include-models": h.value.includeModels,
            "onUpdate:includeModels": w[2] || (w[2] = (E) => h.value.includeModels = E),
            "include-nodes": h.value.includeNodes,
            "onUpdate:includeNodes": w[3] || (w[3] = (E) => h.value.includeNodes = E),
            "include-git-history": h.value.includeGitHistory,
            "onUpdate:includeGitHistory": w[4] || (w[4] = (E) => h.value.includeGitHistory = E)
          }, null, 8, ["conflict-mode", "include-workflows", "include-models", "include-nodes", "include-git-history"]),
          !h.value.includeModels && i.value.models.length > 0 ? (o(), x(st, {
            key: 0,
            type: "warning",
            title: "Models Will Not Be Imported",
            details: [
              `${i.value.models.length} model file(s) will be skipped`,
              "Workflows may not function without required models",
              "You can download models manually from the MODEL INDEX"
            ]
          }, null, 8, ["details"])) : u("", !0),
          e("div", Uf, [
            f(Z, {
              variant: "primary",
              size: "md",
              disabled: !m.value,
              onClick: _
            }, {
              default: l(() => [...w[9] || (w[9] = [
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
            f(Z, {
              variant: "secondary",
              size: "md",
              onClick: d
            }, {
              default: l(() => [...w[10] || (w[10] = [
                p(" Cancel ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : n.value ? (o(), s("div", Bf, [
          e("div", Pf, [
            w[11] || (w[11] = e("div", { class: "progress-icon" }, [
              e("div", { class: "spinner" })
            ], -1)),
            e("div", Vf, [
              e("div", Ff, a(v.value.message), 1),
              e("div", Af, a(v.value.detail), 1)
            ])
          ]),
          e("div", Wf, [
            e("div", {
              class: "progress-bar-fill",
              style: Ye({ width: `${v.value.percent}%` })
            }, null, 4)
          ]),
          e("div", Gf, a(v.value.percent) + "% complete ", 1)
        ])) : r.value ? (o(), s("div", jf, [
          e("div", {
            class: ne(["complete-icon", g.value ? "success" : "error"])
          }, a(g.value ? "✓" : "✕"), 3),
          e("div", Hf, [
            e("div", qf, a(g.value ? "Import Successful" : "Import Failed"), 1),
            e("div", Kf, a(y.value), 1)
          ]),
          e("div", Jf, [
            f(Z, {
              variant: "primary",
              size: "md",
              onClick: I
            }, {
              default: l(() => [...w[12] || (w[12] = [
                p(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : u("", !0)
      ]),
      _: 1
    }));
  }
}), Yf = /* @__PURE__ */ X(Qf, [["__scopeId", "data-v-18e18eb5"]]), Xf = { class: "header-info" }, Zf = { class: "commit-hash" }, eg = {
  key: 0,
  class: "commit-refs"
}, tg = { class: "commit-message" }, og = { class: "commit-date" }, sg = {
  key: 0,
  class: "loading"
}, ng = {
  key: 1,
  class: "changes-section"
}, ag = { class: "stats-row" }, lg = { class: "stat" }, ig = { class: "stat insertions" }, rg = { class: "stat deletions" }, dg = {
  key: 0,
  class: "change-group"
}, cg = {
  key: 1,
  class: "change-group"
}, ug = {
  key: 0,
  class: "version"
}, mg = {
  key: 2,
  class: "change-group"
}, vg = { class: "change-item" }, fg = /* @__PURE__ */ Y({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(t) {
    const c = t, { getCommitDetail: n } = Se(), r = b(null), g = b(!0), y = U(() => {
      if (!r.value) return !1;
      const v = r.value.changes.workflows;
      return v.added.length > 0 || v.modified.length > 0 || v.deleted.length > 0;
    }), h = U(() => {
      if (!r.value) return !1;
      const v = r.value.changes.nodes;
      return v.added.length > 0 || v.removed.length > 0;
    });
    return $e(async () => {
      try {
        r.value = await n(c.commit.hash);
      } finally {
        g.value = !1;
      }
    }), (v, i) => (o(), x(it, {
      size: "md",
      "show-close-button": !1,
      onClose: i[3] || (i[3] = (m) => v.$emit("close"))
    }, {
      header: l(() => {
        var m, $, d, I;
        return [
          e("div", Xf, [
            i[4] || (i[4] = e("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            e("span", Zf, a(((m = r.value) == null ? void 0 : m.short_hash) || t.commit.short_hash || (($ = t.commit.hash) == null ? void 0 : $.slice(0, 7))), 1),
            (I = (d = r.value) == null ? void 0 : d.refs) != null && I.length ? (o(), s("span", eg, [
              (o(!0), s(q, null, se(r.value.refs, (_) => (o(), s("span", {
                key: _,
                class: "ref-badge"
              }, a(_), 1))), 128))
            ])) : u("", !0)
          ]),
          f(ie, {
            variant: "ghost",
            size: "sm",
            onClick: i[0] || (i[0] = (_) => v.$emit("close"))
          }, {
            default: l(() => [...i[5] || (i[5] = [
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
        var m, $;
        return [
          e("div", tg, a(((m = r.value) == null ? void 0 : m.message) || t.commit.message), 1),
          e("div", og, a((($ = r.value) == null ? void 0 : $.date_relative) || t.commit.date_relative || t.commit.relative_date), 1),
          g.value ? (o(), s("div", sg, "Loading details...")) : r.value ? (o(), s("div", ng, [
            e("div", ag, [
              e("span", lg, a(r.value.stats.files_changed) + " files", 1),
              e("span", ig, "+" + a(r.value.stats.insertions), 1),
              e("span", rg, "-" + a(r.value.stats.deletions), 1)
            ]),
            y.value ? (o(), s("div", dg, [
              f(bt, { variant: "section" }, {
                default: l(() => [...i[6] || (i[6] = [
                  p("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (o(!0), s(q, null, se(r.value.changes.workflows.added, (d) => (o(), s("div", {
                key: "add-" + d,
                class: "change-item added"
              }, [
                i[7] || (i[7] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(d), 1)
              ]))), 128)),
              (o(!0), s(q, null, se(r.value.changes.workflows.modified, (d) => (o(), s("div", {
                key: "mod-" + d,
                class: "change-item modified"
              }, [
                i[8] || (i[8] = e("span", { class: "change-icon" }, "~", -1)),
                e("span", null, a(d), 1)
              ]))), 128)),
              (o(!0), s(q, null, se(r.value.changes.workflows.deleted, (d) => (o(), s("div", {
                key: "del-" + d,
                class: "change-item deleted"
              }, [
                i[9] || (i[9] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(d), 1)
              ]))), 128))
            ])) : u("", !0),
            h.value ? (o(), s("div", cg, [
              f(bt, { variant: "section" }, {
                default: l(() => [...i[10] || (i[10] = [
                  p("NODES", -1)
                ])]),
                _: 1
              }),
              (o(!0), s(q, null, se(r.value.changes.nodes.added, (d) => (o(), s("div", {
                key: "add-" + d.name,
                class: "change-item added"
              }, [
                i[11] || (i[11] = e("span", { class: "change-icon" }, "+", -1)),
                e("span", null, a(d.name), 1),
                d.version ? (o(), s("span", ug, "(" + a(d.version) + ")", 1)) : u("", !0)
              ]))), 128)),
              (o(!0), s(q, null, se(r.value.changes.nodes.removed, (d) => (o(), s("div", {
                key: "rem-" + d.name,
                class: "change-item deleted"
              }, [
                i[12] || (i[12] = e("span", { class: "change-icon" }, "-", -1)),
                e("span", null, a(d.name), 1)
              ]))), 128))
            ])) : u("", !0),
            r.value.changes.models.resolved > 0 ? (o(), s("div", mg, [
              f(bt, { variant: "section" }, {
                default: l(() => [...i[13] || (i[13] = [
                  p("MODELS", -1)
                ])]),
                _: 1
              }),
              e("div", vg, [
                i[14] || (i[14] = e("span", { class: "change-icon" }, "●", -1)),
                e("span", null, a(r.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : u("", !0)
          ])) : u("", !0)
        ];
      }),
      footer: l(() => [
        f(ie, {
          variant: "secondary",
          onClick: i[1] || (i[1] = (m) => v.$emit("createBranch", t.commit))
        }, {
          default: l(() => [...i[15] || (i[15] = [
            p(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        f(ie, {
          variant: "primary",
          onClick: i[2] || (i[2] = (m) => v.$emit("checkout", t.commit))
        }, {
          default: l(() => [...i[16] || (i[16] = [
            p(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), gg = /* @__PURE__ */ X(fg, [["__scopeId", "data-v-d256ff6d"]]), hg = { class: "dialog-message" }, pg = {
  key: 0,
  class: "dialog-details"
}, yg = {
  key: 1,
  class: "dialog-warning"
}, wg = /* @__PURE__ */ Y({
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
    return (c, n) => (o(), x(it, {
      title: t.title,
      size: "sm",
      onClose: n[3] || (n[3] = (r) => c.$emit("cancel"))
    }, {
      body: l(() => [
        e("p", hg, a(t.message), 1),
        t.details && t.details.length ? (o(), s("div", pg, [
          (o(!0), s(q, null, se(t.details, (r, g) => (o(), s("div", {
            key: g,
            class: "detail-item"
          }, " • " + a(r), 1))), 128))
        ])) : u("", !0),
        t.warning ? (o(), s("p", yg, [
          n[4] || (n[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
          p(" " + a(t.warning), 1)
        ])) : u("", !0)
      ]),
      footer: l(() => [
        f(ie, {
          variant: "secondary",
          onClick: n[0] || (n[0] = (r) => c.$emit("cancel"))
        }, {
          default: l(() => [
            p(a(t.cancelLabel), 1)
          ]),
          _: 1
        }),
        t.secondaryAction ? (o(), x(ie, {
          key: 0,
          variant: "secondary",
          onClick: n[1] || (n[1] = (r) => c.$emit("secondary"))
        }, {
          default: l(() => [
            p(a(t.secondaryLabel), 1)
          ]),
          _: 1
        })) : u("", !0),
        f(ie, {
          variant: t.destructive ? "danger" : "primary",
          onClick: n[2] || (n[2] = (r) => c.$emit("confirm"))
        }, {
          default: l(() => [
            p(a(t.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), kg = /* @__PURE__ */ X(wg, [["__scopeId", "data-v-3670b9f5"]]), bg = { class: "base-textarea-wrapper" }, _g = ["value", "rows", "placeholder", "disabled", "maxlength"], $g = {
  key: 0,
  class: "base-textarea-count"
}, Cg = /* @__PURE__ */ Y({
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
    return (c, n) => (o(), s("div", bg, [
      e("textarea", {
        value: t.modelValue,
        rows: t.rows,
        placeholder: t.placeholder,
        disabled: t.disabled,
        maxlength: t.maxLength,
        class: "base-textarea",
        onInput: n[0] || (n[0] = (r) => c.$emit("update:modelValue", r.target.value)),
        onKeydown: [
          n[1] || (n[1] = Qe(be((r) => c.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          n[2] || (n[2] = Qe(be((r) => c.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, _g),
      t.showCharCount && t.maxLength ? (o(), s("div", $g, a(t.modelValue.length) + " / " + a(t.maxLength), 1)) : u("", !0)
    ]));
  }
}), Kt = /* @__PURE__ */ X(Cg, [["__scopeId", "data-v-5516e6fc"]]), xg = ["checked", "disabled"], Sg = { class: "base-checkbox-box" }, Ig = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, Eg = {
  key: 0,
  class: "base-checkbox-label"
}, Mg = /* @__PURE__ */ Y({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (c, n) => (o(), s("label", {
      class: ne(["base-checkbox", { disabled: t.disabled }])
    }, [
      e("input", {
        type: "checkbox",
        checked: t.modelValue,
        disabled: t.disabled,
        class: "base-checkbox-input",
        onChange: n[0] || (n[0] = (r) => c.$emit("update:modelValue", r.target.checked))
      }, null, 40, xg),
      e("span", Sg, [
        t.modelValue ? (o(), s("svg", Ig, [...n[1] || (n[1] = [
          e("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : u("", !0)
      ]),
      c.$slots.default ? (o(), s("span", Eg, [
        ce(c.$slots, "default", {}, void 0, !0)
      ])) : u("", !0)
    ], 2));
  }
}), Jt = /* @__PURE__ */ X(Mg, [["__scopeId", "data-v-bf17c831"]]), zg = { class: "popover-header" }, Lg = { class: "popover-body" }, Tg = {
  key: 0,
  class: "changes-summary"
}, Rg = {
  key: 0,
  class: "change-item"
}, Dg = {
  key: 1,
  class: "change-item"
}, Ng = {
  key: 2,
  class: "change-item"
}, Og = {
  key: 3,
  class: "change-item"
}, Ug = {
  key: 4,
  class: "change-item"
}, Bg = {
  key: 1,
  class: "no-changes"
}, Pg = {
  key: 2,
  class: "loading"
}, Vg = {
  key: 3,
  class: "issues-error"
}, Fg = { class: "error-header" }, Ag = { class: "error-title" }, Wg = { class: "issues-list" }, Gg = { class: "message-section" }, jg = { class: "popover-footer" }, Hg = {
  key: 1,
  class: "commit-popover"
}, qg = { class: "popover-header" }, Kg = { class: "popover-body" }, Jg = {
  key: 0,
  class: "changes-summary"
}, Qg = {
  key: 0,
  class: "change-item"
}, Yg = {
  key: 1,
  class: "change-item"
}, Xg = {
  key: 2,
  class: "change-item"
}, Zg = {
  key: 3,
  class: "change-item"
}, eh = {
  key: 4,
  class: "change-item"
}, th = {
  key: 1,
  class: "no-changes"
}, oh = {
  key: 2,
  class: "loading"
}, sh = {
  key: 3,
  class: "issues-error"
}, nh = { class: "error-header" }, ah = { class: "error-title" }, lh = { class: "issues-list" }, ih = { class: "message-section" }, rh = { class: "popover-footer" }, dh = /* @__PURE__ */ Y({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(t, { emit: c }) {
    const n = t, r = c, { commit: g } = Se(), y = b(""), h = b(!1), v = b(!1), i = b(null), m = U(() => {
      if (!n.status) return !1;
      const T = n.status.workflows;
      return T.new.length > 0 || T.modified.length > 0 || T.deleted.length > 0 || n.status.has_changes;
    }), $ = U(() => {
      var T;
      return (T = n.status) != null && T.workflows.analyzed ? n.status.workflows.analyzed.filter(
        (k) => k.has_issues && (k.sync_state === "new" || k.sync_state === "modified")
      ) : [];
    }), d = U(() => $.value.length > 0), I = U(() => d.value && !v.value);
    async function _() {
      var T, k, w;
      if (!(d.value && !v.value) && !(!m.value || !y.value.trim() || h.value)) {
        h.value = !0, i.value = null;
        try {
          const E = await g(y.value.trim(), v.value);
          E.status === "success" ? (i.value = {
            type: "success",
            message: `Committed: ${((T = E.summary) == null ? void 0 : T.new) || 0} new, ${((k = E.summary) == null ? void 0 : k.modified) || 0} modified, ${((w = E.summary) == null ? void 0 : w.deleted) || 0} deleted`
          }, y.value = "", v.value = !1, setTimeout(() => r("committed"), 1e3)) : E.status === "no_changes" ? i.value = { type: "error", message: "No changes to commit" } : E.status === "blocked" ? i.value = {
            type: "error",
            message: 'Commit blocked - enable "Allow issues" to force commit'
          } : i.value = { type: "error", message: E.message || "Commit failed" };
        } catch (E) {
          i.value = { type: "error", message: E instanceof Error ? E.message : "Commit failed" };
        } finally {
          h.value = !1;
        }
      }
    }
    return (T, k) => t.asModal ? (o(), x(xe, {
      key: 0,
      to: "body"
    }, [
      e("div", {
        class: "modal-overlay",
        onClick: k[5] || (k[5] = (w) => r("close"))
      }, [
        e("div", {
          class: "commit-popover modal",
          onClick: k[4] || (k[4] = be(() => {
          }, ["stop"]))
        }, [
          e("div", zg, [
            k[11] || (k[11] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            e("button", {
              class: "close-btn",
              onClick: k[0] || (k[0] = (w) => r("close"))
            }, [...k[10] || (k[10] = [
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
          e("div", Lg, [
            t.status && m.value ? (o(), s("div", Tg, [
              t.status.workflows.new.length ? (o(), s("div", Rg, [
                k[12] || (k[12] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : u("", !0),
              t.status.workflows.modified.length ? (o(), s("div", Dg, [
                k[13] || (k[13] = e("span", { class: "change-icon modified" }, "~", -1)),
                e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
              ])) : u("", !0),
              t.status.workflows.deleted.length ? (o(), s("div", Ng, [
                k[14] || (k[14] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
              ])) : u("", !0),
              t.status.git_changes.nodes_added.length ? (o(), s("div", Og, [
                k[15] || (k[15] = e("span", { class: "change-icon new" }, "+", -1)),
                e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : u("", !0),
              t.status.git_changes.nodes_removed.length ? (o(), s("div", Ug, [
                k[16] || (k[16] = e("span", { class: "change-icon deleted" }, "-", -1)),
                e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : u("", !0)
            ])) : t.status ? (o(), s("div", Bg, " No changes to commit ")) : (o(), s("div", Pg, " Loading... ")),
            d.value ? (o(), s("div", Vg, [
              e("div", Fg, [
                k[17] || (k[17] = e("span", { class: "error-icon" }, "⚠", -1)),
                e("span", Ag, a($.value.length) + " workflow(s) can't run", 1)
              ]),
              e("div", Wg, [
                (o(!0), s(q, null, se($.value, (w) => (o(), s("div", {
                  key: w.name,
                  class: "issue-item"
                }, [
                  e("strong", null, a(w.name), 1),
                  p(": " + a(w.issue_summary), 1)
                ]))), 128))
              ]),
              f(Jt, {
                modelValue: v.value,
                "onUpdate:modelValue": k[1] || (k[1] = (w) => v.value = w),
                class: "allow-issues-toggle"
              }, {
                default: l(() => [...k[18] || (k[18] = [
                  p(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : u("", !0),
            e("div", Gg, [
              f(Kt, {
                modelValue: y.value,
                "onUpdate:modelValue": k[2] || (k[2] = (w) => y.value = w),
                placeholder: I.value ? "Enable 'Allow issues' to commit" : m.value ? "Describe your changes..." : "No changes",
                disabled: !m.value || h.value || I.value,
                rows: 3,
                onCtrlEnter: _
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ]),
            i.value ? (o(), s("div", {
              key: 4,
              class: ne(["result", i.value.type])
            }, a(i.value.message), 3)) : u("", !0)
          ]),
          e("div", jg, [
            f(ie, {
              variant: "secondary",
              onClick: k[3] || (k[3] = (w) => r("close"))
            }, {
              default: l(() => [...k[19] || (k[19] = [
                p(" Cancel ", -1)
              ])]),
              _: 1
            }),
            f(ie, {
              variant: v.value ? "danger" : "primary",
              disabled: !m.value || !y.value.trim() || h.value || I.value,
              loading: h.value,
              onClick: _
            }, {
              default: l(() => [
                p(a(h.value ? "Committing..." : v.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (o(), s("div", Hg, [
      e("div", qg, [
        k[21] || (k[21] = e("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        e("button", {
          class: "close-btn",
          onClick: k[6] || (k[6] = (w) => r("close"))
        }, [...k[20] || (k[20] = [
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
      e("div", Kg, [
        t.status && m.value ? (o(), s("div", Jg, [
          t.status.workflows.new.length ? (o(), s("div", Qg, [
            k[22] || (k[22] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : u("", !0),
          t.status.workflows.modified.length ? (o(), s("div", Yg, [
            k[23] || (k[23] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, a(t.status.workflows.modified.length) + " modified", 1)
          ])) : u("", !0),
          t.status.workflows.deleted.length ? (o(), s("div", Xg, [
            k[24] || (k[24] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.workflows.deleted.length) + " deleted", 1)
          ])) : u("", !0),
          t.status.git_changes.nodes_added.length ? (o(), s("div", Zg, [
            k[25] || (k[25] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, a(t.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : u("", !0),
          t.status.git_changes.nodes_removed.length ? (o(), s("div", eh, [
            k[26] || (k[26] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, a(t.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : u("", !0)
        ])) : t.status ? (o(), s("div", th, " No changes to commit ")) : (o(), s("div", oh, " Loading... ")),
        d.value ? (o(), s("div", sh, [
          e("div", nh, [
            k[27] || (k[27] = e("span", { class: "error-icon" }, "⚠", -1)),
            e("span", ah, a($.value.length) + " workflow(s) can't run", 1)
          ]),
          e("div", lh, [
            (o(!0), s(q, null, se($.value, (w) => (o(), s("div", {
              key: w.name,
              class: "issue-item"
            }, [
              e("strong", null, a(w.name), 1),
              p(": " + a(w.issue_summary), 1)
            ]))), 128))
          ]),
          f(Jt, {
            modelValue: v.value,
            "onUpdate:modelValue": k[7] || (k[7] = (w) => v.value = w),
            class: "allow-issues-toggle"
          }, {
            default: l(() => [...k[28] || (k[28] = [
              p(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : u("", !0),
        e("div", ih, [
          f(Kt, {
            modelValue: y.value,
            "onUpdate:modelValue": k[8] || (k[8] = (w) => y.value = w),
            placeholder: I.value ? "Enable 'Allow issues' to commit" : m.value ? "Describe your changes..." : "No changes",
            disabled: !m.value || h.value || I.value,
            rows: 3,
            onCtrlEnter: _
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        i.value ? (o(), s("div", {
          key: 4,
          class: ne(["result", i.value.type])
        }, a(i.value.message), 3)) : u("", !0)
      ]),
      e("div", rh, [
        f(ie, {
          variant: "secondary",
          onClick: k[9] || (k[9] = (w) => r("close"))
        }, {
          default: l(() => [...k[29] || (k[29] = [
            p(" Cancel ", -1)
          ])]),
          _: 1
        }),
        f(ie, {
          variant: v.value ? "danger" : "primary",
          disabled: !m.value || !y.value.trim() || h.value || I.value,
          loading: h.value,
          onClick: _
        }, {
          default: l(() => [
            p(a(h.value ? "Committing..." : v.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), so = /* @__PURE__ */ X(dh, [["__scopeId", "data-v-d92153de"]]), ch = { class: "modal-header" }, uh = { class: "modal-body" }, mh = { class: "switch-message" }, vh = { class: "switch-details" }, fh = { class: "modal-actions" }, gh = /* @__PURE__ */ Y({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, n) => (o(), x(xe, { to: "body" }, [
      t.show ? (o(), s("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (r) => c.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = be(() => {
          }, ["stop"]))
        }, [
          e("div", ch, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (r) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", uh, [
            e("p", mh, [
              n[6] || (n[6] = p(" Switch from ", -1)),
              e("strong", null, a(t.fromEnvironment), 1),
              n[7] || (n[7] = p(" to ", -1)),
              e("strong", null, a(t.toEnvironment), 1),
              n[8] || (n[8] = p("? ", -1))
            ]),
            n[9] || (n[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This will restart ComfyUI")
            ], -1)),
            e("p", vh, ' Your current work will be preserved. You can switch back to "' + a(t.fromEnvironment) + '" anytime. ', 1),
            n[10] || (n[10] = e("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          e("div", fh, [
            f(Z, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (r) => c.$emit("close"))
            }, {
              default: l(() => [...n[11] || (n[11] = [
                p(" Cancel ", -1)
              ])]),
              _: 1
            }),
            f(Z, {
              variant: "primary",
              onClick: n[2] || (n[2] = (r) => c.$emit("confirm"))
            }, {
              default: l(() => [...n[12] || (n[12] = [
                p(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : u("", !0)
    ]));
  }
}), hh = /* @__PURE__ */ X(gh, [["__scopeId", "data-v-e9c5253e"]]), ph = { class: "progress-bar" }, yh = /* @__PURE__ */ Y({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(t) {
    const c = t, n = U(() => `${Math.max(0, Math.min(100, c.progress))}%`);
    return (r, g) => (o(), s("div", ph, [
      e("div", {
        class: ne(["progress-fill", t.variant]),
        style: Ye({ width: n.value })
      }, null, 6)
    ]));
  }
}), wh = /* @__PURE__ */ X(yh, [["__scopeId", "data-v-1beb0512"]]), kh = {
  key: 0,
  class: "modal-overlay"
}, bh = { class: "modal-content" }, _h = { class: "modal-body" }, $h = { class: "progress-info" }, Ch = { class: "progress-percentage" }, xh = { class: "progress-state" }, Sh = { class: "switch-steps" }, Ih = { class: "step-icon" }, Eh = { class: "step-label" }, Mh = /* @__PURE__ */ Y({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(t) {
    const c = t, n = U(() => {
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
      return c.message || y[c.state] || c.state;
    }), r = U(() => c.state === "complete" ? "success" : c.state === "critical_failure" || c.state === "rolled_back" ? "error" : "default"), g = U(() => {
      const y = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], h = y.findIndex((v) => v.state === c.state);
      return y.map((v, i) => {
        let m = "pending", $ = "○";
        return i < h ? (m = "completed", $ = "✓") : i === h && (m = "active", $ = "⟳"), {
          ...v,
          status: m,
          icon: $
        };
      });
    });
    return (y, h) => (o(), x(xe, { to: "body" }, [
      t.show ? (o(), s("div", kh, [
        e("div", bh, [
          h[1] || (h[1] = e("div", { class: "modal-header" }, [
            e("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          e("div", _h, [
            f(wh, {
              progress: t.progress,
              variant: r.value
            }, null, 8, ["progress", "variant"]),
            e("div", $h, [
              e("div", Ch, a(t.progress) + "%", 1),
              e("div", xh, a(n.value), 1)
            ]),
            e("div", Sh, [
              (o(!0), s(q, null, se(g.value, (v) => (o(), s("div", {
                key: v.state,
                class: ne(["switch-step", v.status])
              }, [
                e("span", Ih, a(v.icon), 1),
                e("span", Eh, a(v.label), 1)
              ], 2))), 128))
            ]),
            h[0] || (h[0] = e("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : u("", !0)
    ]));
  }
}), zh = /* @__PURE__ */ X(Mh, [["__scopeId", "data-v-768a5078"]]), Lh = { class: "modal-header" }, Th = { class: "modal-body" }, Rh = {
  key: 0,
  class: "node-section"
}, Dh = { class: "node-list" }, Nh = {
  key: 1,
  class: "node-section"
}, Oh = { class: "node-list" }, Uh = { class: "modal-actions" }, Bh = /* @__PURE__ */ Y({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(t) {
    return (c, n) => (o(), x(xe, { to: "body" }, [
      t.show ? (o(), s("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (r) => c.$emit("close"))
      }, [
        e("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = be(() => {
          }, ["stop"]))
        }, [
          e("div", Lh, [
            n[5] || (n[5] = e("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            e("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (r) => c.$emit("close"))
            }, "✕")
          ]),
          e("div", Th, [
            n[8] || (n[8] = e("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            t.mismatchDetails.missing_nodes.length ? (o(), s("div", Rh, [
              n[6] || (n[6] = e("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              e("div", Dh, [
                (o(!0), s(q, null, se(t.mismatchDetails.missing_nodes, (r) => (o(), s("div", {
                  key: r,
                  class: "node-item add"
                }, " + " + a(r), 1))), 128))
              ])
            ])) : u("", !0),
            t.mismatchDetails.extra_nodes.length ? (o(), s("div", Nh, [
              n[7] || (n[7] = e("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              e("div", Oh, [
                (o(!0), s(q, null, se(t.mismatchDetails.extra_nodes, (r) => (o(), s("div", {
                  key: r,
                  class: "node-item remove"
                }, " - " + a(r), 1))), 128))
              ])
            ])) : u("", !0),
            n[9] || (n[9] = e("div", { class: "warning-box" }, [
              e("span", { class: "warning-icon" }, "⚠"),
              e("span", null, "This may take several minutes")
            ], -1))
          ]),
          e("div", Uh, [
            f(Z, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (r) => c.$emit("close"))
            }, {
              default: l(() => [...n[10] || (n[10] = [
                p(" Cancel ", -1)
              ])]),
              _: 1
            }),
            f(Z, {
              variant: "primary",
              onClick: n[2] || (n[2] = (r) => c.$emit("confirm"))
            }, {
              default: l(() => [...n[11] || (n[11] = [
                p(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : u("", !0)
    ]));
  }
}), Ph = /* @__PURE__ */ X(Bh, [["__scopeId", "data-v-7cad7518"]]);
async function ht(t, c = {}, n = 5e3) {
  const r = new AbortController(), g = setTimeout(() => r.abort(), n);
  try {
    const y = await fetch(t, {
      ...c,
      signal: r.signal
    });
    return clearTimeout(g), y;
  } catch (y) {
    throw clearTimeout(g), y.name === "AbortError" ? new Error(`Request timeout after ${n}ms`) : y;
  }
}
function Vh() {
  const t = b(null);
  async function c() {
    try {
      const h = await ht(
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
    if (t.value || (t.value = await c()), !t.value)
      return null;
    try {
      const h = await ht(
        `http://127.0.0.1:${t.value}/health`,
        {},
        5e3
      );
      if (!h.ok) throw new Error("Health check failed");
      return await h.json();
    } catch {
      return t.value = await c(), null;
    }
  }
  async function r() {
    if (t.value || (t.value = await c()), !t.value)
      return null;
    try {
      const h = await ht(
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
    if (t.value || (t.value = await c()), !t.value)
      throw new Error("Control port not available");
    if (!(await ht(
      `http://127.0.0.1:${t.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function y() {
    if (t.value || (t.value = await c()), !t.value)
      throw new Error("Control port not available");
    if (!(await ht(
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
    getStatus: r,
    restart: g,
    kill: y
  };
}
const Fh = { class: "comfygit-panel" }, Ah = { class: "panel-header" }, Wh = { class: "header-left" }, Gh = {
  key: 0,
  class: "header-info"
}, jh = { class: "header-actions" }, Hh = { class: "env-switcher" }, qh = {
  key: 0,
  class: "header-info"
}, Kh = { class: "branch-name" }, Jh = { class: "panel-main" }, Qh = { class: "sidebar" }, Yh = { class: "sidebar-section" }, Xh = { class: "sidebar-section" }, Zh = { class: "sidebar-section" }, ep = { class: "content-area" }, tp = {
  key: 0,
  class: "error-message"
}, op = {
  key: 1,
  class: "loading"
}, sp = {
  key: 4,
  class: "dialog-overlay"
}, np = { class: "dialog-content create-progress-dialog" }, ap = { class: "dialog-body create-progress-body" }, lp = { class: "create-progress-message" }, ip = { class: "dialog-content env-selector-dialog" }, rp = { class: "dialog-header" }, dp = { class: "dialog-body" }, cp = { class: "env-list" }, up = { class: "env-info" }, mp = { class: "env-name-row" }, vp = { class: "env-indicator" }, fp = { class: "env-name" }, gp = {
  key: 0,
  class: "env-branch"
}, hp = {
  key: 1,
  class: "current-label"
}, pp = { class: "env-stats" }, yp = ["onClick"], wp = { class: "toast-container" }, kp = { class: "toast-icon" }, bp = { class: "toast-message" }, _p = /* @__PURE__ */ Y({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(t, { emit: c }) {
    const n = c, {
      getStatus: r,
      getHistory: g,
      getBranches: y,
      checkout: h,
      createBranch: v,
      switchBranch: i,
      getEnvironments: m,
      switchEnvironment: $,
      getSwitchProgress: d,
      createEnvironment: I,
      getCreateProgress: _,
      syncEnvironmentManually: T
    } = Se(), k = Vh(), w = b(null), E = b([]), N = b([]), A = b([]), H = U(() => A.value.find((K) => K.is_current)), Q = b(!1), B = b(null), L = b(null), P = b(!1), M = b(null), C = b(null), F = b(!1), V = b(!1), j = b(""), W = b({ state: "idle", progress: 0, message: "" });
    let z = null, ee = null;
    const R = b(!1), O = b({ state: "idle", message: "" }), ae = b(null);
    let te = null;
    const de = b("status"), pe = b("this-env");
    function ye(K, S) {
      de.value = K, pe.value = S;
    }
    function ct(K) {
      const ue = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[K];
      ue && ye(ue.view, ue.section);
    }
    function ut() {
      ye("branches", "this-env");
    }
    function mt() {
      n("close"), setTimeout(() => {
        var S;
        const K = document.querySelectorAll("button.comfyui-button");
        for (const ue of K)
          if (((S = ue.textContent) == null ? void 0 : S.trim()) === "Manager") {
            ue.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const ke = b(null), Je = b(!1), Fe = b(!1), Be = b([]);
    let vt = 0;
    function fe(K, S = "info", ue = 3e3) {
      const we = ++vt;
      return Be.value.push({ id: we, message: K, type: S }), ue > 0 && setTimeout(() => {
        Be.value = Be.value.filter((Re) => Re.id !== we);
      }, ue), we;
    }
    function Le(K) {
      Be.value = Be.value.filter((S) => S.id !== K);
    }
    function ft(K) {
      switch (K) {
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
    const J = U(() => {
      if (!w.value) return "neutral";
      const K = w.value.workflows, S = K.new.length > 0 || K.modified.length > 0 || K.deleted.length > 0 || w.value.has_changes;
      return w.value.comparison.is_synced ? S ? "warning" : "success" : "error";
    });
    U(() => w.value ? J.value === "success" ? "All synced" : J.value === "warning" ? "Uncommitted changes" : J.value === "error" ? "Not synced" : "" : "");
    async function le() {
      Q.value = !0, B.value = null;
      try {
        const [K, S, ue, we] = await Promise.all([
          r(!0),
          g(),
          y(),
          m()
        ]);
        w.value = K, E.value = S.commits, N.value = ue.branches, A.value = we, n("statusUpdate", K), M.value && await M.value.loadWorkflows(!0);
      } catch (K) {
        B.value = K instanceof Error ? K.message : "Failed to load status", w.value = null, E.value = [], N.value = [];
      } finally {
        Q.value = !1;
      }
    }
    function G(K) {
      L.value = K;
    }
    async function D(K) {
      var ue;
      L.value = null;
      const S = w.value && (w.value.workflows.new.length > 0 || w.value.workflows.modified.length > 0 || w.value.workflows.deleted.length > 0 || w.value.has_changes);
      ke.value = {
        title: S ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: S ? "You have uncommitted changes that will be lost." : `Checkout commit ${K.short_hash || ((ue = K.hash) == null ? void 0 : ue.slice(0, 7))}?`,
        details: S ? Gt() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: S ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: S,
        onConfirm: async () => {
          var De;
          ke.value = null, Ae();
          const we = fe(`Checking out ${K.short_hash || ((De = K.hash) == null ? void 0 : De.slice(0, 7))}...`, "info", 0), Re = await h(K.hash, S);
          Le(we), Re.status === "success" ? fe("Restarting ComfyUI...", "success") : fe(Re.message || "Checkout failed", "error");
        }
      };
    }
    async function oe(K) {
      const S = w.value && (w.value.workflows.new.length > 0 || w.value.workflows.modified.length > 0 || w.value.workflows.deleted.length > 0 || w.value.has_changes);
      ke.value = {
        title: S ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: S ? "You have uncommitted changes." : `Switch to branch "${K}"?`,
        details: S ? Gt() : void 0,
        warning: S ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: S ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          ke.value = null, Ae();
          const ue = fe(`Switching to ${K}...`, "info", 0), we = await i(K, S);
          Le(ue), we.status === "success" ? fe("Restarting ComfyUI...", "success") : fe(we.message || "Branch switch failed", "error");
        }
      };
    }
    async function ge(K) {
      const S = fe(`Creating branch ${K}...`, "info", 0), ue = await v(K);
      Le(S), ue.status === "success" ? (fe(`Branch "${K}" created`, "success"), await le()) : fe(ue.message || "Failed to create branch", "error");
    }
    async function Te(K) {
      L.value = null;
      const S = prompt("Enter branch name:");
      if (S) {
        const ue = fe(`Creating branch ${S}...`, "info", 0), we = await v(S, K.hash);
        Le(ue), we.status === "success" ? (fe(`Branch "${S}" created from ${K.short_hash}`, "success"), await le()) : fe(we.message || "Failed to create branch", "error");
      }
    }
    function Ae() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function We(K) {
      P.value = !1, j.value = K, F.value = !0;
    }
    async function St() {
      F.value = !1, V.value = !0, Ae(), W.value = {
        progress: 10,
        state: Xe(10),
        message: Ze(10)
      };
      try {
        await $(j.value), ro(), co();
      } catch (K) {
        et(), V.value = !1, fe(`Failed to initiate switch: ${K instanceof Error ? K.message : "Unknown error"}`, "error"), W.value = { state: "idle", progress: 0, message: "" };
      }
    }
    function Xe(K) {
      return K >= 100 ? "complete" : K >= 80 ? "validating" : K >= 60 ? "starting" : K >= 30 ? "syncing" : "preparing";
    }
    function Ze(K) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[Xe(K)] || "";
    }
    function ro() {
      if (ee) return;
      let K = 10;
      const S = 60, ue = 5e3, we = 100, Re = (S - K) / (ue / we);
      ee = window.setInterval(() => {
        if (K += Re, K >= S && (K = S, et()), W.value.progress < S) {
          const De = Math.floor(K);
          W.value = {
            progress: De,
            state: Xe(De),
            message: Ze(De)
          };
        }
      }, we);
    }
    function et() {
      ee && (clearInterval(ee), ee = null);
    }
    function co() {
      z || (z = window.setInterval(async () => {
        try {
          let K = await k.getStatus();
          if ((!K || K.state === "idle") && (K = await d()), !K)
            return;
          const S = K.progress || 0;
          S >= 60 && et();
          const ue = Math.max(S, W.value.progress), we = K.state && K.state !== "idle" && K.state !== "unknown", Re = we ? K.state : Xe(ue), De = we && K.message || Ze(ue);
          W.value = {
            state: Re,
            progress: ue,
            message: De
          }, K.state === "complete" ? (et(), Et(), V.value = !1, fe(`✓ Switched to ${j.value}`, "success"), await le(), j.value = "") : K.state === "rolled_back" ? (et(), Et(), V.value = !1, fe("Switch failed, restored previous environment", "warning"), j.value = "") : K.state === "critical_failure" && (et(), Et(), V.value = !1, fe(`Critical error during switch: ${K.message}`, "error"), j.value = "");
        } catch (K) {
          console.error("Failed to poll switch progress:", K);
        }
      }, 1e3));
    }
    function Et() {
      et(), z && (clearInterval(z), z = null);
    }
    function uo() {
      F.value = !1, j.value = "";
    }
    async function mo() {
      Je.value = !1, await le(), fe("✓ Changes committed", "success");
    }
    async function vo() {
      Fe.value = !1;
      const K = fe("Syncing environment...", "info", 0);
      try {
        const S = await T("skip", !0);
        if (Le(K), S.status === "success") {
          const ue = [];
          S.nodes_installed.length && ue.push(`${S.nodes_installed.length} installed`), S.nodes_removed.length && ue.push(`${S.nodes_removed.length} removed`);
          const we = ue.length ? `: ${ue.join(", ")}` : "";
          fe(`✓ Environment synced${we}`, "success"), await le();
        } else {
          const ue = S.errors.length ? S.errors.join("; ") : S.message;
          fe(`Sync failed: ${ue}`, "error");
        }
      } catch (S) {
        Le(K), fe(`Sync error: ${S instanceof Error ? S.message : "Unknown error"}`, "error");
      }
    }
    async function fo(K) {
      ae.value = K, R.value = !0, O.value = { state: "creating", message: `Creating environment '${K.name}'...` };
      try {
        const S = await I(K);
        S.status === "started" ? go() : S.status === "error" && (R.value = !1, fe(`Failed to create environment: ${S.message}. Check debug logs for details.`, "error"), ae.value = null);
      } catch (S) {
        R.value = !1, fe(`Error creating environment: ${S instanceof Error ? S.message : "Unknown error"}. Check debug logs.`, "error"), ae.value = null;
      }
    }
    function go() {
      te || (te = window.setInterval(async () => {
        var K;
        try {
          const S = await _();
          O.value = { state: S.state, message: S.message }, S.state === "complete" ? (Wt(), R.value = !1, fe(`✓ Environment '${S.environment_name}' created`, "success"), await le(), C.value && await C.value.loadEnvironments(), (K = ae.value) != null && K.switch_after && S.environment_name && await We(S.environment_name), ae.value = null) : S.state === "error" && (Wt(), R.value = !1, fe(`Failed to create environment: ${S.error || S.message}. Check debug logs.`, "error"), ae.value = null);
        } catch (S) {
          console.error("Failed to poll create progress:", S);
        }
      }, 2e3));
    }
    function Wt() {
      te && (clearInterval(te), te = null);
    }
    async function ho(K) {
      const S = fe(`Deleting environment "${K}"...`, "info", 0);
      Le(S), fe("Environment deletion not yet implemented", "warning");
    }
    function po(K) {
      fe(`Viewing details for "${K}"`, "info"), ye("models-env", "this-env");
    }
    function Gt() {
      if (!w.value) return [];
      const K = [], S = w.value.workflows;
      return S.new.length && K.push(`${S.new.length} new workflow(s)`), S.modified.length && K.push(`${S.modified.length} modified workflow(s)`), S.deleted.length && K.push(`${S.deleted.length} deleted workflow(s)`), K;
    }
    return $e(le), (K, S) => {
      var ue, we, Re, De;
      return o(), s("div", Fh, [
        e("div", Ah, [
          e("div", Wh, [
            S[27] || (S[27] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            w.value ? (o(), s("div", Gh)) : u("", !0)
          ]),
          e("div", jh, [
            e("button", {
              class: ne(["icon-btn", { spinning: Q.value }]),
              onClick: le,
              title: "Refresh"
            }, [...S[28] || (S[28] = [
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
              onClick: S[0] || (S[0] = (re) => n("close")),
              title: "Close"
            }, [...S[29] || (S[29] = [
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
        e("div", Hh, [
          S[31] || (S[31] = e("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
          e("button", {
            class: "env-switcher-btn",
            onClick: S[1] || (S[1] = (re) => ye("environments", "all-envs"))
          }, [
            w.value ? (o(), s("div", qh, [
              e("span", null, a(((ue = H.value) == null ? void 0 : ue.name) || ((we = w.value) == null ? void 0 : we.environment) || "Loading..."), 1),
              e("span", Kh, "(" + a(w.value.branch || "detached") + ")", 1)
            ])) : u("", !0),
            S[30] || (S[30] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", Jh, [
          e("div", Qh, [
            e("div", Yh, [
              S[32] || (S[32] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              e("button", {
                class: ne(["sidebar-item", { active: de.value === "status" && pe.value === "this-env" }]),
                onClick: S[2] || (S[2] = (re) => ye("status", "this-env"))
              }, " STATUS ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: de.value === "workflows" }]),
                onClick: S[3] || (S[3] = (re) => ye("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: de.value === "models-env" }]),
                onClick: S[4] || (S[4] = (re) => ye("models-env", "this-env"))
              }, " MODELS ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: de.value === "branches" }]),
                onClick: S[5] || (S[5] = (re) => ye("branches", "this-env"))
              }, " BRANCHES ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: de.value === "history" }]),
                onClick: S[6] || (S[6] = (re) => ye("history", "this-env"))
              }, " HISTORY ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: de.value === "nodes" }]),
                onClick: S[7] || (S[7] = (re) => ye("nodes", "this-env"))
              }, " NODES ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: de.value === "debug-env" }]),
                onClick: S[8] || (S[8] = (re) => ye("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            S[35] || (S[35] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", Xh, [
              S[33] || (S[33] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              e("button", {
                class: ne(["sidebar-item", { active: de.value === "environments" }]),
                onClick: S[9] || (S[9] = (re) => ye("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: de.value === "model-index" }]),
                onClick: S[10] || (S[10] = (re) => ye("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: de.value === "settings" }]),
                onClick: S[11] || (S[11] = (re) => ye("settings", "all-envs"))
              }, " SETTINGS ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: de.value === "debug-workspace" }]),
                onClick: S[12] || (S[12] = (re) => ye("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            S[36] || (S[36] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", Zh, [
              S[34] || (S[34] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              e("button", {
                class: ne(["sidebar-item", { active: de.value === "export" }]),
                onClick: S[13] || (S[13] = (re) => ye("export", "sharing"))
              }, " EXPORT ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: de.value === "import" }]),
                onClick: S[14] || (S[14] = (re) => ye("import", "sharing"))
              }, " IMPORT ", 2),
              e("button", {
                class: ne(["sidebar-item", { active: de.value === "remotes" }]),
                onClick: S[15] || (S[15] = (re) => ye("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          e("div", ep, [
            B.value ? (o(), s("div", tp, a(B.value), 1)) : !w.value && de.value === "status" ? (o(), s("div", op, " Loading status... ")) : (o(), s(q, { key: 2 }, [
              de.value === "status" ? (o(), x(Kn, {
                key: 0,
                status: w.value,
                onSwitchBranch: ut,
                onCommitChanges: S[16] || (S[16] = (re) => Je.value = !0),
                onSyncEnvironment: S[17] || (S[17] = (re) => Fe.value = !0),
                onViewWorkflows: S[18] || (S[18] = (re) => ye("workflows", "this-env")),
                onViewHistory: S[19] || (S[19] = (re) => ye("history", "this-env")),
                onViewDebug: S[20] || (S[20] = (re) => ye("debug-env", "this-env"))
              }, null, 8, ["status"])) : de.value === "workflows" ? (o(), x(wc, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: M,
                onRefresh: le
              }, null, 512)) : de.value === "models-env" ? (o(), x(tu, {
                key: 2,
                onNavigate: ct
              })) : de.value === "branches" ? (o(), x(da, {
                key: 3,
                branches: N.value,
                current: ((Re = w.value) == null ? void 0 : Re.branch) || null,
                onSwitch: oe,
                onCreate: ge
              }, null, 8, ["branches", "current"])) : de.value === "history" ? (o(), x(ka, {
                key: 4,
                commits: E.value,
                onSelect: G,
                onCheckout: D
              }, null, 8, ["commits"])) : de.value === "nodes" ? (o(), x(Wu, {
                key: 5,
                onOpenNodeManager: mt
              })) : de.value === "debug-env" ? (o(), x(Am, { key: 6 })) : de.value === "environments" ? (o(), x(mv, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: C,
                onSwitch: We,
                onCreate: fo,
                onDelete: ho,
                onViewDetails: po
              }, null, 512)) : de.value === "model-index" ? (o(), x(bu, {
                key: 8,
                onRefresh: le
              })) : de.value === "settings" ? (o(), x(Bm, { key: 9 })) : de.value === "debug-workspace" ? (o(), x(Vm, { key: 10 })) : de.value === "export" ? (o(), x(_v, { key: 11 })) : de.value === "import" ? (o(), x(Yf, { key: 12 })) : de.value === "remotes" ? (o(), x(wm, { key: 13 })) : u("", !0)
            ], 64))
          ])
        ]),
        L.value ? (o(), x(gg, {
          key: 0,
          commit: L.value,
          onClose: S[21] || (S[21] = (re) => L.value = null),
          onCheckout: D,
          onCreateBranch: Te
        }, null, 8, ["commit"])) : u("", !0),
        ke.value ? (o(), x(kg, {
          key: 1,
          title: ke.value.title,
          message: ke.value.message,
          details: ke.value.details,
          warning: ke.value.warning,
          confirmLabel: ke.value.confirmLabel,
          cancelLabel: ke.value.cancelLabel,
          secondaryLabel: ke.value.secondaryLabel,
          secondaryAction: ke.value.secondaryAction,
          destructive: ke.value.destructive,
          onConfirm: ke.value.onConfirm,
          onCancel: S[22] || (S[22] = (re) => ke.value = null),
          onSecondary: ke.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : u("", !0),
        f(hh, {
          show: F.value,
          "from-environment": ((De = H.value) == null ? void 0 : De.name) || "unknown",
          "to-environment": j.value,
          onConfirm: St,
          onClose: uo
        }, null, 8, ["show", "from-environment", "to-environment"]),
        Je.value && w.value ? (o(), x(so, {
          key: 2,
          status: w.value,
          "as-modal": !0,
          onClose: S[23] || (S[23] = (re) => Je.value = !1),
          onCommitted: mo
        }, null, 8, ["status"])) : u("", !0),
        Fe.value && w.value ? (o(), x(Ph, {
          key: 3,
          show: Fe.value,
          "mismatch-details": {
            missing_nodes: w.value.comparison.missing_nodes,
            extra_nodes: w.value.comparison.extra_nodes
          },
          onConfirm: vo,
          onClose: S[24] || (S[24] = (re) => Fe.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : u("", !0),
        f(zh, {
          show: V.value,
          state: W.value.state,
          progress: W.value.progress,
          message: W.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        R.value ? (o(), s("div", sp, [
          e("div", np, [
            S[39] || (S[39] = e("div", { class: "dialog-header" }, [
              e("h3", { class: "dialog-title" }, "CREATING ENVIRONMENT")
            ], -1)),
            e("div", ap, [
              S[37] || (S[37] = e("div", { class: "create-progress-spinner" }, null, -1)),
              e("p", lp, a(O.value.message), 1),
              S[38] || (S[38] = e("p", { class: "create-progress-hint" }, "This may take several minutes...", -1))
            ])
          ])
        ])) : u("", !0),
        P.value ? (o(), s("div", {
          key: 5,
          class: "dialog-overlay",
          onClick: S[26] || (S[26] = be((re) => P.value = !1, ["self"]))
        }, [
          e("div", ip, [
            e("div", rp, [
              S[41] || (S[41] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: S[25] || (S[25] = (re) => P.value = !1)
              }, [...S[40] || (S[40] = [
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
            e("div", dp, [
              S[42] || (S[42] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", cp, [
                (o(!0), s(q, null, se(A.value, (re) => (o(), s("div", {
                  key: re.name,
                  class: ne(["env-item", { current: re.is_current }])
                }, [
                  e("div", up, [
                    e("div", mp, [
                      e("span", vp, a(re.is_current ? "●" : "○"), 1),
                      e("span", fp, a(re.name), 1),
                      re.current_branch ? (o(), s("span", gp, "(" + a(re.current_branch) + ")", 1)) : u("", !0),
                      re.is_current ? (o(), s("span", hp, "CURRENT")) : u("", !0)
                    ]),
                    e("div", pp, a(re.workflow_count) + " workflows • " + a(re.node_count) + " nodes ", 1)
                  ]),
                  re.is_current ? u("", !0) : (o(), s("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (M1) => We(re.name)
                  }, " SWITCH ", 8, yp))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : u("", !0),
        e("div", wp, [
          f($o, { name: "toast" }, {
            default: l(() => [
              (o(!0), s(q, null, se(Be.value, (re) => (o(), s("div", {
                key: re.id,
                class: ne(["toast", re.type])
              }, [
                e("span", kp, a(ft(re.type)), 1),
                e("span", bp, a(re.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), $p = /* @__PURE__ */ X(_p, [["__scopeId", "data-v-9ea3d341"]]), Cp = { class: "item-header" }, xp = { class: "item-info" }, Sp = { class: "filename" }, Ip = { class: "metadata" }, Ep = { class: "size" }, Mp = {
  key: 0,
  class: "type"
}, zp = { class: "item-actions" }, Lp = {
  key: 0,
  class: "progress-section"
}, Tp = { class: "progress-bar" }, Rp = { class: "progress-stats" }, Dp = { class: "downloaded" }, Np = { class: "speed" }, Op = {
  key: 0,
  class: "eta"
}, Up = {
  key: 1,
  class: "status-msg paused"
}, Bp = {
  key: 2,
  class: "status-msg queued"
}, Pp = {
  key: 3,
  class: "status-msg completed"
}, Vp = {
  key: 4,
  class: "status-msg failed"
}, Fp = {
  key: 0,
  class: "retries"
}, Ap = /* @__PURE__ */ Y({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(t, { emit: c }) {
    const n = c;
    function r(h) {
      if (h === 0) return "?";
      const v = h / (1024 * 1024 * 1024);
      return v >= 1 ? `${v.toFixed(2)} GB` : `${(h / (1024 * 1024)).toFixed(1)} MB`;
    }
    function g(h) {
      return h === 0 ? "-" : `${(h / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function y(h) {
      if (h < 60) return `${Math.round(h)}s`;
      const v = Math.floor(h / 60);
      return v < 60 ? `${v}m` : `${Math.floor(v / 60)}h ${v % 60}m`;
    }
    return (h, v) => (o(), s("div", {
      class: ne(["download-item", `status-${t.item.status}`])
    }, [
      e("div", Cp, [
        e("div", xp, [
          e("div", Sp, a(t.item.filename), 1),
          e("div", Ip, [
            e("span", Ep, a(r(t.item.size)), 1),
            t.item.type ? (o(), s("span", Mp, a(t.item.type), 1)) : u("", !0)
          ])
        ]),
        e("div", zp, [
          t.item.status === "queued" || t.item.status === "downloading" ? (o(), s("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: v[0] || (v[0] = (i) => n("cancel")),
            title: "Cancel"
          }, " × ")) : u("", !0),
          t.item.status === "paused" ? (o(), s("button", {
            key: 1,
            class: "action-icon resume",
            onClick: v[1] || (v[1] = (i) => n("resume")),
            title: "Resume"
          }, " ▶ ")) : u("", !0),
          t.item.status === "failed" ? (o(), s("button", {
            key: 2,
            class: "action-icon retry",
            onClick: v[2] || (v[2] = (i) => n("retry")),
            title: "Retry"
          }, " ↻ ")) : u("", !0),
          t.item.status === "completed" || t.item.status === "failed" || t.item.status === "paused" ? (o(), s("button", {
            key: 3,
            class: "action-icon remove",
            onClick: v[3] || (v[3] = (i) => n("remove")),
            title: "Remove"
          }, " × ")) : u("", !0)
        ])
      ]),
      t.item.status === "downloading" ? (o(), s("div", Lp, [
        e("div", Tp, [
          e("div", {
            class: "progress-fill",
            style: Ye({ width: `${t.item.progress}%` })
          }, null, 4)
        ]),
        e("div", Rp, [
          e("span", Dp, a(r(t.item.downloaded)) + " / " + a(r(t.item.size)), 1),
          e("span", Np, a(g(t.item.speed)), 1),
          t.item.eta > 0 ? (o(), s("span", Op, a(y(t.item.eta)), 1)) : u("", !0)
        ])
      ])) : t.item.status === "paused" ? (o(), s("div", Up, " Paused - click Resume to download ")) : t.item.status === "queued" ? (o(), s("div", Bp, " Waiting in queue... ")) : t.item.status === "completed" ? (o(), s("div", Pp, " ✓ Downloaded ")) : t.item.status === "failed" ? (o(), s("div", Vp, [
        p(" ✗ " + a(t.item.error || "Failed") + " ", 1),
        t.item.retries > 0 ? (o(), s("span", Fp, "(" + a(t.item.retries) + " retries)", 1)) : u("", !0)
      ])) : u("", !0)
    ], 2));
  }
}), pt = /* @__PURE__ */ X(Ap, [["__scopeId", "data-v-2110df65"]]), Wp = { class: "queue-title" }, Gp = { class: "count" }, jp = { class: "queue-actions" }, Hp = { class: "action-label" }, qp = {
  key: 0,
  class: "overall-progress"
}, Kp = { class: "progress-bar" }, Jp = {
  key: 0,
  class: "current-mini"
}, Qp = { class: "filename" }, Yp = { class: "speed" }, Xp = {
  key: 1,
  class: "queue-content"
}, Zp = {
  key: 0,
  class: "section"
}, e1 = {
  key: 1,
  class: "section"
}, t1 = { class: "section-header" }, o1 = { class: "section-label paused" }, s1 = { class: "items-list" }, n1 = {
  key: 2,
  class: "section"
}, a1 = { class: "section-header" }, l1 = { class: "section-label" }, i1 = { class: "items-list" }, r1 = {
  key: 3,
  class: "section"
}, d1 = { class: "section-header" }, c1 = { class: "section-label" }, u1 = { class: "items-list" }, m1 = {
  key: 4,
  class: "section"
}, v1 = { class: "section-header" }, f1 = { class: "section-label failed" }, g1 = { class: "items-list" }, h1 = /* @__PURE__ */ Y({
  __name: "ModelDownloadQueue",
  setup(t) {
    const {
      queue: c,
      currentDownload: n,
      queuedItems: r,
      completedItems: g,
      failedItems: y,
      pausedItems: h,
      hasItems: v,
      activeCount: i,
      cancelDownload: m,
      retryDownload: $,
      resumeDownload: d,
      resumeAllPaused: I,
      removeItem: _,
      clearCompleted: T
    } = xt(), k = b(!1);
    let w = null;
    Ot(
      () => ({
        active: i.value,
        failed: y.value.length,
        paused: h.value.length,
        completed: g.value.length
      }),
      (H, Q) => {
        w && (clearTimeout(w), w = null);
        const B = H.active === 0 && H.failed === 0 && H.paused === 0 && H.completed > 0, L = Q && (Q.active > 0 || Q.paused > 0);
        B && L && (w = setTimeout(() => {
          T(), w = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const E = U(() => {
      var B;
      if (c.items.length === 0) return 0;
      const H = g.value.length, Q = ((B = n.value) == null ? void 0 : B.progress) || 0;
      return Math.round((H + Q / 100) / c.items.length * 100);
    });
    function N(H) {
      m(H);
    }
    function A(H) {
      return H === 0 ? "" : `${(H / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (H, Q) => (o(), x(xe, { to: "body" }, [
      me(v) ? (o(), s("div", {
        key: 0,
        class: ne(["model-download-queue", { minimized: !k.value }])
      }, [
        e("div", {
          class: "queue-header",
          onClick: Q[0] || (Q[0] = (B) => k.value = !k.value)
        }, [
          e("div", Wp, [
            Q[4] || (Q[4] = e("span", { class: "icon" }, "↓", -1)),
            Q[5] || (Q[5] = e("span", { class: "title" }, "Downloads", -1)),
            e("span", Gp, "(" + a(me(i)) + "/" + a(me(c).items.length) + ")", 1)
          ]),
          e("div", jp, [
            e("span", Hp, a(k.value ? "minimize" : "expand"), 1)
          ])
        ]),
        k.value ? (o(), s("div", Xp, [
          me(n) ? (o(), s("div", Zp, [
            Q[6] || (Q[6] = e("div", { class: "section-label" }, "Downloading", -1)),
            f(pt, {
              item: me(n),
              onCancel: Q[1] || (Q[1] = (B) => N(me(n).id))
            }, null, 8, ["item"])
          ])) : u("", !0),
          me(h).length > 0 ? (o(), s("div", e1, [
            e("div", t1, [
              e("span", o1, "Paused (" + a(me(h).length) + ")", 1),
              e("button", {
                class: "resume-all-btn",
                onClick: Q[2] || (Q[2] = //@ts-ignore
                (...B) => me(I) && me(I)(...B))
              }, "Resume All")
            ]),
            e("div", s1, [
              (o(!0), s(q, null, se(me(h), (B) => (o(), x(pt, {
                key: B.id,
                item: B,
                onResume: (L) => me(d)(B.id),
                onRemove: (L) => me(_)(B.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : u("", !0),
          me(r).length > 0 ? (o(), s("div", n1, [
            e("div", a1, [
              e("span", l1, "Queued (" + a(me(r).length) + ")", 1)
            ]),
            e("div", i1, [
              (o(!0), s(q, null, se(me(r), (B) => (o(), x(pt, {
                key: B.id,
                item: B,
                onCancel: (L) => N(B.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : u("", !0),
          me(g).length > 0 ? (o(), s("div", r1, [
            e("div", d1, [
              e("span", c1, "Completed (" + a(me(g).length) + ")", 1),
              e("button", {
                class: "clear-btn",
                onClick: Q[3] || (Q[3] = //@ts-ignore
                (...B) => me(T) && me(T)(...B))
              }, "Clear")
            ]),
            e("div", u1, [
              (o(!0), s(q, null, se(me(g).slice(0, 3), (B) => (o(), x(pt, {
                key: B.id,
                item: B,
                onRemove: (L) => me(_)(B.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : u("", !0),
          me(y).length > 0 ? (o(), s("div", m1, [
            e("div", v1, [
              e("span", f1, "Failed (" + a(me(y).length) + ")", 1)
            ]),
            e("div", g1, [
              (o(!0), s(q, null, se(me(y), (B) => (o(), x(pt, {
                key: B.id,
                item: B,
                onRetry: (L) => me($)(B.id),
                onRemove: (L) => me(_)(B.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : u("", !0)
        ])) : (o(), s("div", qp, [
          e("div", Kp, [
            e("div", {
              class: "progress-fill",
              style: Ye({ width: `${E.value}%` })
            }, null, 4)
          ]),
          me(n) ? (o(), s("div", Jp, [
            e("span", Qp, a(me(n).filename), 1),
            e("span", Yp, a(A(me(n).speed)), 1)
          ])) : u("", !0)
        ]))
      ], 2)) : u("", !0)
    ]));
  }
}), p1 = /* @__PURE__ */ X(h1, [["__scopeId", "data-v-60751cfa"]]), y1 = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', w1 = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', k1 = {
  comfy: y1,
  phosphor: w1
}, Ft = "comfy", no = "comfygit-theme";
let tt = null, ao = Ft;
function b1() {
  try {
    const t = localStorage.getItem(no);
    if (t && (t === "comfy" || t === "phosphor"))
      return t;
  } catch {
  }
  return Ft;
}
function lo(t = Ft) {
  tt && tt.remove(), tt = document.createElement("style"), tt.id = "comfygit-theme-styles", tt.setAttribute("data-theme", t), tt.textContent = k1[t], document.head.appendChild(tt), document.body.setAttribute("data-comfygit-theme", t), ao = t;
  try {
    localStorage.setItem(no, t);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${t}`);
}
function _1() {
  return ao;
}
function $1(t) {
  lo(t);
}
const At = document.createElement("link");
At.rel = "stylesheet";
At.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(At);
const C1 = b1();
lo(C1);
window.ComfyGit = {
  setTheme: (t) => {
    console.log(`[ComfyGit] Switching to theme: ${t}`), $1(t);
  },
  getTheme: () => {
    const t = _1();
    return console.log(`[ComfyGit] Current theme: ${t}`), t;
  }
};
let Ne = null, Me = null, _t = null, yt = null, Qt = null;
const lt = b(null);
async function It() {
  var t;
  if (!((t = at) != null && t.api)) return null;
  try {
    const c = await at.api.fetchApi("/v2/comfygit/status");
    c.ok && (lt.value = await c.json());
  } catch {
  }
}
function x1() {
  if (!lt.value) return !1;
  const t = lt.value.workflows;
  return t.new.length > 0 || t.modified.length > 0 || t.deleted.length > 0 || lt.value.has_changes;
}
function S1() {
  Ne && Ne.remove(), Ne = document.createElement("div"), Ne.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", Ne.appendChild(t), Ne.addEventListener("click", (r) => {
    r.target === Ne && Tt();
  });
  const c = (r) => {
    r.key === "Escape" && (Tt(), document.removeEventListener("keydown", c));
  };
  document.addEventListener("keydown", c), Bt({
    render: () => Pt($p, {
      onClose: Tt,
      onStatusUpdate: (r) => {
        lt.value = r, $t();
      }
    })
  }).mount(t), document.body.appendChild(Ne);
}
function Tt() {
  Ne && (Ne.remove(), Ne = null);
}
function I1(t) {
  wt(), Me = document.createElement("div"), Me.className = "comfygit-commit-popover-container";
  const c = t.getBoundingClientRect();
  Me.style.position = "fixed", Me.style.top = `${c.bottom + 8}px`, Me.style.right = `${window.innerWidth - c.right}px`, Me.style.zIndex = "10001";
  const n = (g) => {
    Me && !Me.contains(g.target) && g.target !== t && (wt(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const r = (g) => {
    g.key === "Escape" && (wt(), document.removeEventListener("keydown", r));
  };
  document.addEventListener("keydown", r), _t = Bt({
    render: () => Pt(so, {
      status: lt.value,
      onClose: wt,
      onCommitted: () => {
        wt(), It().then($t);
      }
    })
  }), _t.mount(Me), document.body.appendChild(Me);
}
function wt() {
  _t && (_t.unmount(), _t = null), Me && (Me.remove(), Me = null);
}
function E1() {
  yt || (yt = document.createElement("div"), yt.className = "comfygit-download-queue-root", Qt = Bt({
    render: () => Pt(p1)
  }), Qt.mount(yt), document.body.appendChild(yt), console.log("[ComfyGit] Model download queue mounted"));
}
let Ge = null;
function $t() {
  if (!Ge) return;
  const t = Ge.querySelector(".commit-indicator");
  t && (t.style.display = x1() ? "block" : "none");
}
const io = document.createElement("style");
io.textContent = `
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
document.head.appendChild(io);
at.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var g, y;
    const t = document.createElement("div");
    t.className = "comfygit-btn-group";
    const c = document.createElement("button");
    c.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", c.textContent = "ComfyGit", c.title = "ComfyGit Control Panel", c.onclick = S1, Ge = document.createElement("button"), Ge.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Ge.innerHTML = 'Commit <span class="commit-indicator"></span>', Ge.title = "Quick Commit", Ge.onclick = () => I1(Ge), t.appendChild(c), t.appendChild(Ge), (y = (g = at.menu) == null ? void 0 : g.settingsGroup) != null && y.element && (at.menu.settingsGroup.element.before(t), console.log("[ComfyGit] Control Panel buttons added to toolbar")), E1();
    const { loadPendingDownloads: n } = xt();
    n(), await It(), $t(), setInterval(async () => {
      await It(), $t();
    }, 3e4);
    const r = at.api;
    if (r) {
      let h = function() {
        localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.OpenWorkflowsPaths"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((m) => {
          (m.startsWith("workflow:") || m.startsWith("Comfy.OpenWorkflowsPaths:") || m.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(m);
        }), window.location.reload();
      }, v = function() {
        const m = document.createElement("div");
        m.style.cssText = `
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
        const $ = document.createElement("span");
        $.textContent = "Workflows updated - refresh required", m.appendChild($);
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
        `, d.onmouseover = () => d.style.background = "var(--comfy-input-bg)", d.onmouseout = () => d.style.background = "var(--comfy-menu-bg)", d.onclick = () => h(), m.appendChild(d);
        const I = document.createElement("button");
        I.textContent = "×", I.style.cssText = `
          background: transparent;
          border: none;
          color: var(--fg-color);
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, I.onmouseover = () => I.style.opacity = "1", I.onmouseout = () => I.style.opacity = "0.6", I.onclick = () => m.remove(), m.appendChild(I), document.body.appendChild(m), console.log("[ComfyGit] Refresh notification displayed");
      };
      r.addEventListener("comfygit:workflow-changed", async (m) => {
        const { change_type: $, workflow_name: d } = m.detail;
        console.log(`[ComfyGit] Workflow ${$}: ${d}`), await It(), $t();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let i = !1;
      r.addEventListener("status", async (m) => {
        const $ = m.detail != null;
        $ && !i && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), h()) : v()), i = $;
      }), console.log("[ComfyGit] Refresh notification system initialized");
    }
  }
});
