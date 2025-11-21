import { app as qe } from "../../scripts/app.js";
import { defineComponent as O, createElementBlock as n, openBlock as t, createCommentVNode as i, createElementVNode as o, renderSlot as q, createBlock as p, resolveDynamicComponent as et, normalizeClass as G, withCtx as a, toDisplayString as u, createVNode as d, createTextVNode as g, computed as B, Fragment as W, renderList as J, ref as L, onMounted as re, withKeys as $e, withModifiers as Se, onUnmounted as gt, Teleport as lt, normalizeStyle as tt, watch as vt, TransitionGroup as ht, createApp as rt, h as it } from "vue";
const pt = { class: "panel-layout" }, yt = {
  key: 0,
  class: "panel-layout-header"
}, bt = {
  key: 1,
  class: "panel-layout-search"
}, wt = { class: "panel-layout-content" }, kt = {
  key: 2,
  class: "panel-layout-footer"
}, _t = /* @__PURE__ */ O({
  __name: "PanelLayout",
  setup(e) {
    return (l, s) => (t(), n("div", pt, [
      l.$slots.header ? (t(), n("div", yt, [
        q(l.$slots, "header", {}, void 0, !0)
      ])) : i("", !0),
      l.$slots.search ? (t(), n("div", bt, [
        q(l.$slots, "search", {}, void 0, !0)
      ])) : i("", !0),
      o("div", wt, [
        q(l.$slots, "content", {}, void 0, !0)
      ]),
      l.$slots.footer ? (t(), n("div", kt, [
        q(l.$slots, "footer", {}, void 0, !0)
      ])) : i("", !0)
    ]));
  }
}), T = (e, l) => {
  const s = e.__vccOpts || e;
  for (const [r, c] of l)
    s[r] = c;
  return s;
}, ve = /* @__PURE__ */ T(_t, [["__scopeId", "data-v-21565df9"]]), $t = {
  key: 0,
  class: "panel-title-prefix"
}, xt = {
  key: 1,
  class: "panel-title-prefix-theme"
}, Ct = /* @__PURE__ */ O({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (l, s) => (t(), p(et(`h${e.level}`), {
      class: G(["panel-title", e.variant])
    }, {
      default: a(() => [
        e.showPrefix ? (t(), n("span", $t, u(e.prefix), 1)) : (t(), n("span", xt)),
        q(l.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), It = /* @__PURE__ */ T(Ct, [["__scopeId", "data-v-c3875efc"]]), St = ["title"], Et = ["width", "height"], Lt = /* @__PURE__ */ O({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(e) {
    return (l, s) => (t(), n("button", {
      class: "info-button",
      title: e.title,
      onClick: s[0] || (s[0] = (r) => l.$emit("click"))
    }, [
      (t(), n("svg", {
        width: e.size,
        height: e.size,
        viewBox: "0 0 16 16",
        fill: "currentColor"
      }, [...s[1] || (s[1] = [
        o("circle", {
          cx: "8",
          cy: "8",
          r: "7",
          stroke: "currentColor",
          "stroke-width": "1.5",
          fill: "none"
        }, null, -1),
        o("text", {
          x: "8",
          y: "11",
          "text-anchor": "middle",
          "font-size": "10",
          "font-weight": "bold",
          fill: "currentColor"
        }, "i", -1)
      ])], 8, Et))
    ], 8, St));
  }
}), zt = /* @__PURE__ */ T(Lt, [["__scopeId", "data-v-6fc7f16d"]]), Rt = { class: "header-left" }, Ut = {
  key: 0,
  class: "header-actions"
}, Mt = /* @__PURE__ */ O({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(e) {
    return (l, s) => (t(), n("div", {
      class: G(["panel-header", { stacked: e.stacked }])
    }, [
      o("div", Rt, [
        d(It, { "show-prefix": e.showPrefix }, {
          default: a(() => [
            g(u(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (t(), p(zt, {
          key: 0,
          onClick: s[0] || (s[0] = (r) => l.$emit("info-click"))
        })) : i("", !0)
      ]),
      l.$slots.actions ? (t(), n("div", Ut, [
        q(l.$slots, "actions", {}, void 0, !0)
      ])) : i("", !0)
    ], 2));
  }
}), he = /* @__PURE__ */ T(Mt, [["__scopeId", "data-v-55a62cd6"]]), Nt = {
  key: 0,
  class: "section-title-count"
}, Dt = {
  key: 1,
  class: "section-title-icon"
}, Vt = /* @__PURE__ */ O({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (l, s) => (t(), p(et(`h${e.level}`), {
      class: G(["section-title", { clickable: e.clickable }]),
      onClick: s[0] || (s[0] = (r) => e.clickable && l.$emit("click"))
    }, {
      default: a(() => [
        q(l.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (t(), n("span", Nt, "(" + u(e.count) + ")", 1)) : i("", !0),
        e.clickable ? (t(), n("span", Dt, u(e.expanded ? "▼" : "▸"), 1)) : i("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Te = /* @__PURE__ */ T(Vt, [["__scopeId", "data-v-559361eb"]]), Bt = { class: "status-grid" }, Ot = { class: "status-grid__column" }, Tt = { class: "status-grid__title" }, At = { class: "status-grid__column status-grid__column--right" }, Wt = { class: "status-grid__title" }, Ft = /* @__PURE__ */ O({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (l, s) => (t(), n("div", Bt, [
      o("div", Ot, [
        o("h4", Tt, u(e.leftTitle), 1),
        q(l.$slots, "left", {}, void 0, !0)
      ]),
      o("div", At, [
        o("h4", Wt, u(e.rightTitle), 1),
        q(l.$slots, "right", {}, void 0, !0)
      ])
    ]));
  }
}), Pt = /* @__PURE__ */ T(Ft, [["__scopeId", "data-v-fe556068"]]), Gt = {
  key: 0,
  class: "status-item__icon"
}, Ht = {
  key: 1,
  class: "status-item__count"
}, Kt = { class: "status-item__label" }, jt = /* @__PURE__ */ O({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(e) {
    const l = e, s = B(() => `status-item--${l.variant}`);
    return (r, c) => (t(), n("div", {
      class: G(["status-item", s.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (t(), n("span", Gt, u(e.icon), 1)) : i("", !0),
      e.count !== void 0 ? (t(), n("span", Ht, u(e.count), 1)) : i("", !0),
      o("span", Kt, u(e.label), 1)
    ], 2));
  }
}), ye = /* @__PURE__ */ T(jt, [["__scopeId", "data-v-6f929183"]]), qt = { class: "issue-card__header" }, Jt = { class: "issue-card__icon" }, Yt = { class: "issue-card__title" }, Xt = {
  key: 0,
  class: "issue-card__content"
}, Zt = {
  key: 0,
  class: "issue-card__description"
}, Qt = {
  key: 1,
  class: "issue-card__items"
}, eo = {
  key: 2,
  class: "issue-card__actions"
}, to = /* @__PURE__ */ O({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(e) {
    const l = e, s = B(() => `issue-card--${l.severity}`);
    return (r, c) => (t(), n("div", {
      class: G(["issue-card", s.value])
    }, [
      o("div", qt, [
        o("span", Jt, u(e.icon), 1),
        o("h4", Yt, u(e.title), 1)
      ]),
      r.$slots.default || e.description ? (t(), n("div", Xt, [
        e.description ? (t(), n("p", Zt, u(e.description), 1)) : i("", !0),
        q(r.$slots, "default", {}, void 0, !0)
      ])) : i("", !0),
      e.items && e.items.length ? (t(), n("div", Qt, [
        (t(!0), n(W, null, J(e.items, (x, h) => (t(), n("div", {
          key: h,
          class: "issue-card__item"
        }, [
          c[0] || (c[0] = o("span", { class: "issue-card__bullet" }, "•", -1)),
          o("span", null, u(x), 1)
        ]))), 128))
      ])) : i("", !0),
      r.$slots.actions ? (t(), n("div", eo, [
        q(r.$slots, "actions", {}, void 0, !0)
      ])) : i("", !0)
    ], 2));
  }
}), Je = /* @__PURE__ */ T(to, [["__scopeId", "data-v-df6aa348"]]), oo = ["type", "disabled"], ao = {
  key: 0,
  class: "spinner"
}, so = /* @__PURE__ */ O({
  __name: "ActionButton",
  props: {
    variant: { default: "primary" },
    size: { default: "sm" },
    loading: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    type: { default: "button" }
  },
  emits: ["click"],
  setup(e) {
    return (l, s) => (t(), n("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: G(["action-btn", e.variant, e.size, { loading: e.loading }]),
      onClick: s[0] || (s[0] = (r) => l.$emit("click", r))
    }, [
      e.loading ? (t(), n("span", ao)) : i("", !0),
      e.loading ? i("", !0) : q(l.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, oo));
  }
}), A = /* @__PURE__ */ T(so, [["__scopeId", "data-v-772abe47"]]), no = { class: "empty-state" }, lo = {
  key: 0,
  class: "empty-icon"
}, ro = { class: "empty-message" }, io = /* @__PURE__ */ O({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (l, s) => (t(), n("div", no, [
      e.icon ? (t(), n("div", lo, u(e.icon), 1)) : i("", !0),
      o("p", ro, u(e.message), 1),
      e.actionLabel ? (t(), p(A, {
        key: 1,
        variant: e.actionVariant || "secondary",
        size: "sm",
        onClick: s[0] || (s[0] = (r) => l.$emit("action"))
      }, {
        default: a(() => [
          g(u(e.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : i("", !0)
    ]));
  }
}), ge = /* @__PURE__ */ T(io, [["__scopeId", "data-v-4466284f"]]), co = { class: "branch-indicator" }, uo = { class: "branch-indicator__info" }, mo = { class: "branch-indicator__label" }, fo = { class: "branch-indicator__name" }, go = {
  key: 0,
  class: "branch-indicator__remote"
}, vo = {
  key: 0,
  class: "branch-indicator__status"
}, ho = {
  key: 0,
  class: "branch-indicator__ahead"
}, po = {
  key: 1,
  class: "branch-indicator__behind"
}, yo = {
  key: 1,
  class: "branch-indicator__actions"
}, bo = /* @__PURE__ */ O({
  __name: "BranchIndicator",
  props: {
    label: { default: "Current Branch" },
    branchName: {},
    remote: {},
    commitsAhead: {},
    commitsBehind: {},
    showStatus: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (l, s) => (t(), n("div", co, [
      o("div", uo, [
        o("span", mo, u(e.label), 1),
        o("span", fo, u(e.branchName), 1),
        e.remote ? (t(), n("span", go, "@" + u(e.remote), 1)) : i("", !0)
      ]),
      e.showStatus && (e.commitsAhead || e.commitsBehind) ? (t(), n("div", vo, [
        e.commitsAhead ? (t(), n("span", ho, " ↑ " + u(e.commitsAhead) + " ahead ", 1)) : i("", !0),
        e.commitsBehind ? (t(), n("span", po, " ↓ " + u(e.commitsBehind) + " behind ", 1)) : i("", !0)
      ])) : i("", !0),
      l.$slots.actions ? (t(), n("div", yo, [
        q(l.$slots, "actions", {}, void 0, !0)
      ])) : i("", !0)
    ]));
  }
}), wo = /* @__PURE__ */ T(bo, [["__scopeId", "data-v-cb8dd50e"]]), ko = { style: { "margin-top": "var(--cg-space-1)" } }, _o = {
  key: 0,
  style: { "margin-top": "var(--cg-space-4)" }
}, $o = /* @__PURE__ */ O({
  __name: "StatusSection",
  props: {
    status: {}
  },
  emits: ["view-workflows", "resolve-models", "view-history", "commit-changes", "view-debug", "sync-environment", "switch-branch"],
  setup(e, { emit: l }) {
    const s = e, r = B(() => s.status.workflows.new.length > 0 || s.status.workflows.modified.length > 0 || s.status.workflows.deleted.length > 0), c = B(() => {
      const m = s.status.git_changes;
      return m.nodes_added.length > 0 || m.nodes_removed.length > 0 || m.workflow_changes || m.has_other_changes;
    }), x = B(() => {
      const m = s.status.git_changes, w = s.status.workflows;
      return (m.workflow_changes || m.has_other_changes) && w.new.length === 0 && w.modified.length === 0 && w.deleted.length === 0;
    }), h = B(() => s.status.missing_models_count > 0 || c.value || !s.status.comparison.is_synced), y = B(() => {
      const m = [];
      return s.status.workflows.new.length > 0 && m.push(`${s.status.workflows.new.length} new workflow${s.status.workflows.new.length === 1 ? "" : "s"}`), s.status.workflows.modified.length > 0 && m.push(`${s.status.workflows.modified.length} modified workflow${s.status.workflows.modified.length === 1 ? "" : "s"}`), s.status.workflows.deleted.length > 0 && m.push(`${s.status.workflows.deleted.length} deleted workflow${s.status.workflows.deleted.length === 1 ? "" : "s"}`), s.status.git_changes.nodes_added.length > 0 && m.push(`${s.status.git_changes.nodes_added.length} node${s.status.git_changes.nodes_added.length === 1 ? "" : "s"} added`), s.status.git_changes.nodes_removed.length > 0 && m.push(`${s.status.git_changes.nodes_removed.length} node${s.status.git_changes.nodes_removed.length === 1 ? "" : "s"} removed`), `${m.length > 0 ? m.join(", ") + "." : "You have uncommitted changes."} Your work could be lost if you switch branches without committing.`;
    });
    return (m, w) => (t(), p(ve, null, {
      header: a(() => [
        d(he, { title: "STATUS" })
      ]),
      content: a(() => [
        d(Te, {
          level: "4",
          style: { "margin-bottom": "var(--cg-space-2)" }
        }, {
          default: a(() => [...w[7] || (w[7] = [
            g(" ENVIRONMENT HEALTH ", -1)
          ])]),
          _: 1
        }),
        d(Pt, {
          "left-title": "WORKFLOWS",
          "right-title": "GIT CHANGES"
        }, {
          left: a(() => [
            e.status.workflows.new.length ? (t(), p(ye, {
              key: 0,
              icon: "●",
              count: e.status.workflows.new.length,
              label: "new",
              variant: "new"
            }, null, 8, ["count"])) : i("", !0),
            e.status.workflows.modified.length ? (t(), p(ye, {
              key: 1,
              icon: "●",
              count: e.status.workflows.modified.length,
              label: "modified",
              variant: "modified"
            }, null, 8, ["count"])) : i("", !0),
            e.status.workflows.deleted.length ? (t(), p(ye, {
              key: 2,
              icon: "●",
              count: e.status.workflows.deleted.length,
              label: "deleted",
              variant: "deleted"
            }, null, 8, ["count"])) : i("", !0),
            d(ye, {
              icon: "✓",
              count: e.status.workflows.synced.length,
              label: "synced",
              variant: "synced",
              separator: r.value
            }, null, 8, ["count", "separator"])
          ]),
          right: a(() => [
            e.status.git_changes.nodes_added.length ? (t(), p(ye, {
              key: 0,
              icon: "●",
              count: e.status.git_changes.nodes_added.length,
              label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
              variant: "new"
            }, null, 8, ["count", "label"])) : i("", !0),
            e.status.git_changes.nodes_removed.length ? (t(), p(ye, {
              key: 1,
              icon: "●",
              count: e.status.git_changes.nodes_removed.length,
              label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
              variant: "deleted"
            }, null, 8, ["count", "label"])) : i("", !0),
            x.value ? (t(), p(ye, {
              key: 2,
              icon: "●",
              label: "other changes",
              variant: "modified"
            })) : i("", !0),
            c.value ? i("", !0) : (t(), p(ye, {
              key: 3,
              icon: "✓",
              label: "No uncommitted changes",
              variant: "ok"
            }))
          ]),
          _: 1
        }),
        o("div", ko, [
          d(wo, {
            "branch-name": e.status.current_branch || "main"
          }, {
            actions: a(() => [
              d(A, {
                variant: "secondary",
                size: "sm",
                onClick: w[0] || (w[0] = (U) => m.$emit("switch-branch"))
              }, {
                default: a(() => [...w[8] || (w[8] = [
                  g(" Switch Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["branch-name"])
        ]),
        h.value ? (t(), n("div", _o, [
          d(Te, {
            level: "4",
            style: { "margin-bottom": "var(--cg-space-2)" }
          }, {
            default: a(() => [...w[9] || (w[9] = [
              g(" ISSUES DETECTED ", -1)
            ])]),
            _: 1
          }),
          e.status.missing_models_count > 0 ? (t(), p(Je, {
            key: 0,
            severity: "warning",
            icon: "⚠",
            title: `${e.status.missing_models_count} missing model${e.status.missing_models_count === 1 ? "" : "s"}`,
            description: "Some workflows reference models that are not found in the workspace index."
          }, {
            actions: a(() => [
              d(A, {
                variant: "secondary",
                size: "sm",
                onClick: w[1] || (w[1] = (U) => m.$emit("view-workflows"))
              }, {
                default: a(() => [...w[10] || (w[10] = [
                  g(" View Details ", -1)
                ])]),
                _: 1
              }),
              d(A, {
                variant: "primary",
                size: "sm",
                onClick: w[2] || (w[2] = (U) => m.$emit("resolve-models"))
              }, {
                default: a(() => [...w[11] || (w[11] = [
                  g(" Resolve ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["title"])) : i("", !0),
          c.value ? (t(), p(Je, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "You have unsaved changes",
            description: y.value
          }, {
            actions: a(() => [
              d(A, {
                variant: "secondary",
                size: "sm",
                onClick: w[3] || (w[3] = (U) => m.$emit("view-history"))
              }, {
                default: a(() => [...w[12] || (w[12] = [
                  g(" View Changes ", -1)
                ])]),
                _: 1
              }),
              d(A, {
                variant: "primary",
                size: "sm",
                onClick: w[4] || (w[4] = (U) => m.$emit("commit-changes"))
              }, {
                default: a(() => [...w[13] || (w[13] = [
                  g(" Commit Changes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["description"])) : i("", !0),
          e.status.comparison.is_synced ? i("", !0) : (t(), p(Je, {
            key: 2,
            severity: "error",
            icon: "⚠",
            title: "Environment not synced",
            description: "Your environment state does not match the git repository. This may indicate missing installations or configuration issues."
          }, {
            actions: a(() => [
              d(A, {
                variant: "secondary",
                size: "sm",
                onClick: w[5] || (w[5] = (U) => m.$emit("view-debug"))
              }, {
                default: a(() => [...w[14] || (w[14] = [
                  g(" View Logs ", -1)
                ])]),
                _: 1
              }),
              d(A, {
                variant: "primary",
                size: "sm",
                onClick: w[6] || (w[6] = (U) => m.$emit("sync-environment"))
              }, {
                default: a(() => [...w[15] || (w[15] = [
                  g(" Sync Now ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }))
        ])) : i("", !0),
        !h.value && !c.value ? (t(), p(ge, {
          key: 1,
          icon: "✅",
          message: "Everything looks good! No issues detected.",
          style: { "margin-top": "var(--cg-space-4)" }
        })) : i("", !0)
      ]),
      _: 1
    }));
  }
}), xo = /* @__PURE__ */ T($o, [["__scopeId", "data-v-2045da26"]]), Co = ["type", "value", "placeholder", "disabled"], Io = /* @__PURE__ */ O({
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
  setup(e, { expose: l, emit: s }) {
    const r = e, c = s, x = L(null);
    function h(y) {
      const m = y.target.value;
      c("update:modelValue", m);
    }
    return re(() => {
      r.autoFocus && x.value && x.value.focus();
    }), l({
      focus: () => {
        var y;
        return (y = x.value) == null ? void 0 : y.focus();
      },
      blur: () => {
        var y;
        return (y = x.value) == null ? void 0 : y.blur();
      }
    }), (y, m) => (t(), n("input", {
      ref_key: "inputRef",
      ref: x,
      type: e.type,
      value: e.modelValue,
      placeholder: e.placeholder,
      disabled: e.disabled,
      class: G(["text-input", { error: e.hasError, monospace: e.monospace }]),
      onInput: h,
      onKeyup: [
        m[0] || (m[0] = $e((w) => y.$emit("enter"), ["enter"])),
        m[1] || (m[1] = $e((w) => y.$emit("escape"), ["escape"]))
      ],
      onFocus: m[2] || (m[2] = (w) => y.$emit("focus")),
      onBlur: m[3] || (m[3] = (w) => y.$emit("blur"))
    }, null, 42, Co));
  }
}), Be = /* @__PURE__ */ T(Io, [["__scopeId", "data-v-0380d08f"]]), So = { class: "branch-create-form" }, Eo = { class: "form-actions" }, Lo = /* @__PURE__ */ O({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(e, { emit: l }) {
    const s = l, r = L(""), c = B(() => {
      const y = r.value.trim();
      return y.length > 0 && !y.startsWith("-") && !y.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(y);
    });
    function x() {
      c.value && (s("create", r.value.trim()), r.value = "");
    }
    function h() {
      r.value = "", s("cancel");
    }
    return (y, m) => (t(), n("div", So, [
      d(Be, {
        modelValue: r.value,
        "onUpdate:modelValue": m[0] || (m[0] = (w) => r.value = w),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: x,
        onEscape: h
      }, null, 8, ["modelValue"]),
      o("div", Eo, [
        d(A, {
          variant: "primary",
          size: "sm",
          disabled: !c.value,
          onClick: x
        }, {
          default: a(() => [...m[1] || (m[1] = [
            g(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        d(A, {
          variant: "secondary",
          size: "sm",
          onClick: h
        }, {
          default: a(() => [...m[2] || (m[2] = [
            g(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), zo = /* @__PURE__ */ T(Lo, [["__scopeId", "data-v-7c500394"]]), Ro = { class: "branch-list-item__indicator" }, Uo = { class: "branch-list-item__name" }, Mo = {
  key: 0,
  class: "branch-list-item__actions"
}, No = {
  key: 0,
  class: "branch-list-item__current-label"
}, Do = /* @__PURE__ */ O({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(e) {
    return (l, s) => (t(), n("div", {
      class: G(["branch-list-item", { current: e.isCurrent, clickable: e.clickable }]),
      onClick: s[0] || (s[0] = (r) => e.clickable && l.$emit("click"))
    }, [
      o("span", Ro, u(e.isCurrent ? "●" : "○"), 1),
      o("span", Uo, u(e.branchName), 1),
      l.$slots.actions || e.showCurrentLabel ? (t(), n("div", Mo, [
        q(l.$slots, "actions", {}, void 0, !0),
        e.isCurrent && e.showCurrentLabel ? (t(), n("span", No, " current ")) : i("", !0)
      ])) : i("", !0)
    ], 2));
  }
}), Vo = /* @__PURE__ */ T(Do, [["__scopeId", "data-v-c6581a24"]]), Bo = {
  key: 2,
  class: "branch-list"
}, Oo = /* @__PURE__ */ O({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create"],
  setup(e, { emit: l }) {
    const s = l, r = L(!1);
    function c(h) {
      s("create", h), x();
    }
    function x() {
      r.value = !1;
    }
    return (h, y) => (t(), p(ve, null, {
      header: a(() => [
        d(he, { title: "BRANCHES" }, {
          actions: a(() => [
            d(A, {
              variant: "ghost",
              size: "sm",
              onClick: y[0] || (y[0] = (m) => r.value = !0),
              title: "Create new branch"
            }, {
              default: a(() => [...y[1] || (y[1] = [
                o("svg", {
                  width: "14",
                  height: "14",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  o("path", {
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
      content: a(() => [
        r.value ? (t(), p(zo, {
          key: 0,
          onCreate: c,
          onCancel: x
        })) : i("", !0),
        e.branches.length === 0 ? (t(), p(ge, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (t(), n("div", Bo, [
          (t(!0), n(W, null, J(e.branches, (m) => (t(), p(Vo, {
            key: m.name,
            "branch-name": m.name,
            "is-current": m.is_current
          }, {
            actions: a(() => [
              m.is_current ? i("", !0) : (t(), p(A, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: (w) => h.$emit("switch", m.name)
              }, {
                default: a(() => [...y[2] || (y[2] = [
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
}), To = /* @__PURE__ */ T(Oo, [["__scopeId", "data-v-763d6ec4"]]), Ao = { class: "commit-list" }, Wo = /* @__PURE__ */ O({
  __name: "CommitList",
  setup(e) {
    return (l, s) => (t(), n("div", Ao, [
      q(l.$slots, "default", {}, void 0, !0)
    ]));
  }
}), Fo = /* @__PURE__ */ T(Wo, [["__scopeId", "data-v-8c5ee761"]]), Po = { class: "commit-hash" }, Go = /* @__PURE__ */ O({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const l = e, s = B(() => l.hash.slice(0, l.length));
    return (r, c) => (t(), n("span", Po, u(s.value), 1));
  }
}), Ho = /* @__PURE__ */ T(Go, [["__scopeId", "data-v-7c333cc6"]]), Ko = { class: "commit-message" }, jo = { class: "commit-date" }, qo = /* @__PURE__ */ O({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const s = e, r = l;
    function c() {
      s.clickable && r("click");
    }
    return (x, h) => (t(), n("div", {
      class: G(["commit-item", { clickable: e.clickable }]),
      onClick: c
    }, [
      d(Ho, { hash: e.hash }, null, 8, ["hash"]),
      o("span", Ko, u(e.message), 1),
      o("span", jo, u(e.relativeDate), 1),
      x.$slots.actions ? (t(), n("div", {
        key: 0,
        class: "commit-actions",
        onClick: h[0] || (h[0] = Se(() => {
        }, ["stop"]))
      }, [
        q(x.$slots, "actions", {}, void 0, !0)
      ])) : i("", !0)
    ], 2));
  }
}), Jo = /* @__PURE__ */ T(qo, [["__scopeId", "data-v-dd7c621b"]]), Yo = /* @__PURE__ */ O({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(e) {
    return (l, s) => (t(), p(ve, null, {
      header: a(() => [
        d(he, { title: "HISTORY" })
      ]),
      content: a(() => [
        e.commits.length === 0 ? (t(), p(ge, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (t(), p(Fo, { key: 1 }, {
          default: a(() => [
            (t(!0), n(W, null, J(e.commits, (r) => (t(), p(Jo, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (c) => l.$emit("select", r)
            }, {
              actions: a(() => [
                d(A, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (c) => l.$emit("checkout", r),
                  title: "Checkout this commit"
                }, {
                  default: a(() => [...s[0] || (s[0] = [
                    o("svg", {
                      width: "12",
                      height: "12",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      o("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" })
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
}), Xo = /* @__PURE__ */ T(Yo, [["__scopeId", "data-v-981c3c64"]]), st = [
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
  ...Array(12).fill(null).map((e, l) => ({
    name: `synced-workflow-${l + 1}.json`,
    status: "synced",
    missing_nodes: 0,
    missing_models: 0,
    node_count: 5 + l,
    model_count: 1 + l % 3,
    sync_state: "synced"
  }))
], Zo = {
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
}, ct = [
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
], Qo = [
  ...ct,
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
], De = [
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
], ea = [
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
], Ve = [
  {
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: "info",
    message: "Environment synced successfully",
    context: { duration_ms: 2340 }
  },
  {
    timestamp: new Date(Date.now() - 6e4).toISOString(),
    level: "warning",
    message: "Model not found in index: flux_vae.safetensors",
    context: { workflow: "flux-dev-img2img.json" }
  },
  {
    timestamp: new Date(Date.now() - 12e4).toISOString(),
    level: "error",
    message: "Failed to install node: rgthree-comfy",
    context: { error: "Connection timeout" }
  },
  {
    timestamp: new Date(Date.now() - 18e4).toISOString(),
    level: "debug",
    message: "Resolving workflow dependencies",
    context: { workflow: "sdxl-lightning.json", node_count: 8 }
  }
], Z = {
  // Environment Management
  getEnvironments: async () => (await Q(300), [
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
  switchEnvironment: async (e) => {
    await Q(500), console.log(`[MOCK] Switching to environment: ${e}`);
  },
  createEnvironment: async (e, l, s) => {
    await Q(1e3), console.log(`[MOCK] Creating environment: ${e} with backend ${l}`, s ? `cloned from ${s}` : "");
  },
  deleteEnvironment: async (e) => {
    await Q(500), console.log(`[MOCK] Deleting environment: ${e}`);
  },
  // Workflow Management
  getWorkflows: async () => (await Q(400), st),
  getWorkflowDetails: async (e) => (await Q(300), Zo[e] || {
    name: e,
    status: "synced",
    nodes: [],
    models: []
  }),
  /**
   * Resolve Workflow - Return resolution plan
   * Based on ResolutionResult structure (lines 1763-1788)
   */
  resolveWorkflow: async (e) => (await Q(800), {
    workflow_name: e,
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
        workflow: e,
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
        workflow: e,
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
        workflow: e,
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
  installWorkflowDeps: async (e, l, s) => {
    await Q(2e3), console.log(`[MOCK] Installing deps for ${e}: nodes=${l}, models=${s}`);
  },
  setModelImportance: async (e, l, s) => {
    await Q(200), console.log(`[MOCK] Setting ${l} importance to ${s} in ${e}`);
  },
  // Model Management
  getEnvironmentModels: async () => (await Q(350), ct),
  getWorkspaceModels: async () => (await Q(400), Qo),
  updateModelSource: async (e, l) => {
    await Q(300), console.log(`[MOCK] Updating source for ${e}: ${l}`);
  },
  deleteModel: async (e) => {
    await Q(500), console.log(`[MOCK] Deleting model: ${e}`);
  },
  downloadModel: async (e) => {
    await Q(3e3), console.log("[MOCK] Downloading model:", e);
  },
  // Node Management
  getNodes: async () => {
    await Q(350);
    const e = De.filter((s) => s.installed), l = De.filter((s) => !s.installed);
    return {
      nodes: De,
      total_count: De.length,
      installed_count: e.length,
      missing_count: l.length
    };
  },
  installNode: async (e) => {
    await Q(2500), console.log(`[MOCK] Installing node: ${e}`);
  },
  updateNode: async (e) => {
    await Q(2e3), console.log(`[MOCK] Updating node: ${e}`);
  },
  uninstallNode: async (e) => {
    await Q(1e3), console.log(`[MOCK] Uninstalling node: ${e}`);
  },
  // Settings & Debug
  getConfig: async () => (await Q(200), {
    civitai_api_key: "",
    huggingface_token: "",
    models_path: "/workspace/models",
    auto_sync_models: !0
  }),
  updateConfig: async (e) => {
    await Q(300), console.log("[MOCK] Updating config:", e);
  },
  getEnvironmentLogs: async (e, l) => (await Q(250), (e ? Ve.filter((r) => r.level === e) : Ve).slice(0, l || 100)),
  getWorkspaceLogs: async (e, l) => {
    await Q(300);
    const s = [...Ve, ...Ve.map((c) => ({
      ...c,
      context: { ...c.context, environment: "testing" }
    }))];
    return (e ? s.filter((c) => c.level === e) : s).slice(0, l || 100);
  },
  // Existing endpoints (from original implementation)
  /**
   * Get Environment Status - Matching ComfyGitStatus type
   * See frontend/src/types/comfygit.ts lines 22-32
   */
  getStatus: async () => (await Q(400), {
    environment: "production",
    branch: "main",
    is_detached_head: !1,
    is_synced: !1,
    has_changes: !1,
    workflows: {
      new: ["img2img-basic.json", "controlnet-pose.json"],
      modified: ["flux-schnell.json"],
      deleted: [],
      synced: st.filter((e) => e.status === "synced").map((e) => e.name),
      total: 18
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
  getCommitHistory: async (e = 10) => (await Q(300), ea.slice(0, e)),
  getBranches: async () => (await Q(250), {
    branches: [
      { name: "main", is_current: !0 },
      { name: "develop", is_current: !1 },
      { name: "feature/new-nodes", is_current: !1 }
    ],
    current: "main"
  }),
  // Git Remotes Management
  getRemotes: async () => (await Q(300), {
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
  addRemote: async (e, l) => {
    await Q(400), console.log(`[MOCK] Adding remote: ${e} -> ${l}`);
  },
  removeRemote: async (e) => {
    await Q(350), console.log(`[MOCK] Removing remote: ${e}`);
  },
  updateRemoteUrl: async (e, l, s) => {
    await Q(400), console.log(`[MOCK] Updating remote ${e}: ${l}${s ? ` (push: ${s})` : ""}`);
  },
  fetchRemote: async (e) => {
    await Q(1500), console.log(`[MOCK] Fetching from remote: ${e}`);
  },
  getRemoteSyncStatus: async (e) => (await Q(300), {
    remote: e,
    branch: "main",
    ahead: 2,
    behind: 1,
    last_fetch: new Date(Date.now() - 36e5).toISOString()
  })
};
function Q(e) {
  return new Promise((l) => setTimeout(l, e));
}
function ue() {
  const e = L(!1), l = L(null);
  async function s($, f) {
    var ae;
    if (!((ae = window.app) != null && ae.api))
      throw new Error("ComfyUI API not available");
    const j = await window.app.api.fetchApi($, f);
    if (!j.ok) {
      const me = await j.json().catch(() => ({}));
      throw new Error(me.error || me.message || `Request failed: ${j.status}`);
    }
    return j.json();
  }
  async function r() {
    return Z.getStatus();
  }
  async function c($, f = !1) {
    return s("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: $, allow_issues: f })
    });
  }
  async function x($ = 10, f = 0) {
    {
      const j = await Z.getCommitHistory($);
      return {
        commits: j,
        total: j.length,
        offset: f
      };
    }
  }
  async function h($) {
    return s("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: $ })
    });
  }
  async function y() {
    return Z.getBranches();
  }
  async function m($) {
    return s(`/v2/comfygit/commit/${$}`);
  }
  async function w($, f = !1) {
    return s("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: $, force: f })
    });
  }
  async function U($, f = "HEAD") {
    return s("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: $, start_point: f })
    });
  }
  async function k($, f = !1) {
    return s("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: $, force: f })
    });
  }
  async function V() {
    return Z.getEnvironments();
  }
  async function F($) {
    return Z.switchEnvironment($);
  }
  async function Y() {
    return null;
  }
  async function P($, f, j) {
    return await Z.createEnvironment($, f, j), { status: "success" };
  }
  async function N($) {
    return await Z.deleteEnvironment($), { status: "success" };
  }
  async function S() {
    return Z.getWorkflows();
  }
  async function M($) {
    return Z.getWorkflowDetails($);
  }
  async function X($) {
    return Z.resolveWorkflow($);
  }
  async function I($, f, j) {
    return await Z.installWorkflowDeps($, f, j), { status: "success" };
  }
  async function _($, f, j) {
    return Z.setModelImportance($, f, j);
  }
  async function v() {
    return Z.getEnvironmentModels();
  }
  async function C() {
    return Z.getWorkspaceModels();
  }
  async function b($, f) {
    return Z.updateModelSource($, f);
  }
  async function z($) {
    return Z.deleteModel($);
  }
  async function D($) {
    return await Z.downloadModel($), { status: "success" };
  }
  async function se() {
    return Z.getConfig();
  }
  async function R($) {
    return Z.updateConfig($);
  }
  async function E($, f) {
    return Z.getEnvironmentLogs($, f);
  }
  async function H($, f) {
    return Z.getWorkspaceLogs($, f);
  }
  async function ie() {
    return Z.getNodes();
  }
  async function we($) {
    return await Z.installNode($), { status: "success" };
  }
  async function Fe($) {
    return await Z.updateNode($), { status: "success" };
  }
  async function Me($) {
    return await Z.uninstallNode($), { status: "success" };
  }
  async function Pe() {
    return Z.getRemotes();
  }
  async function Ge($, f) {
    return await Z.addRemote($, f), { status: "success", remote_name: $ };
  }
  async function He($) {
    return await Z.removeRemote($), { status: "success", remote_name: $ };
  }
  async function Ke($, f, j) {
    return await Z.updateRemoteUrl($, f, j), { status: "success", remote_name: $ };
  }
  async function Ne($) {
    return await Z.fetchRemote($), { status: "success", remote_name: $ };
  }
  async function je($) {
    return Z.getRemoteSyncStatus($);
  }
  return {
    isLoading: e,
    error: l,
    getStatus: r,
    commit: c,
    getHistory: x,
    exportEnv: h,
    // Git Operations
    getBranches: y,
    getCommitDetail: m,
    checkout: w,
    createBranch: U,
    switchBranch: k,
    // Environment Management
    getEnvironments: V,
    switchEnvironment: F,
    getSwitchProgress: Y,
    createEnvironment: P,
    deleteEnvironment: N,
    // Workflow Management
    getWorkflows: S,
    getWorkflowDetails: M,
    resolveWorkflow: X,
    installWorkflowDeps: I,
    setModelImportance: _,
    // Model Management
    getEnvironmentModels: v,
    getWorkspaceModels: C,
    updateModelSource: b,
    deleteModel: z,
    downloadModel: D,
    // Settings
    getConfig: se,
    updateConfig: R,
    // Debug/Logs
    getEnvironmentLogs: E,
    getWorkspaceLogs: H,
    // Node Management
    getNodes: ie,
    installNode: we,
    updateNode: Fe,
    uninstallNode: Me,
    // Git Remotes
    getRemotes: Pe,
    addRemote: Ge,
    removeRemote: He,
    updateRemoteUrl: Ke,
    fetchRemote: Ne,
    getRemoteSyncStatus: je
  };
}
const ta = { class: "base-modal-header" }, oa = {
  key: 0,
  class: "base-modal-title"
}, aa = { class: "base-modal-body" }, sa = {
  key: 0,
  class: "base-modal-loading"
}, na = {
  key: 1,
  class: "base-modal-error"
}, la = {
  key: 0,
  class: "base-modal-footer"
}, ra = /* @__PURE__ */ O({
  __name: "BaseModal",
  props: {
    title: {},
    size: { default: "md" },
    showCloseButton: { type: Boolean, default: !0 },
    closeOnOverlayClick: { type: Boolean, default: !0 },
    loading: { type: Boolean, default: !1 },
    error: {}
  },
  emits: ["close"],
  setup(e, { emit: l }) {
    const s = e, r = l;
    function c() {
      s.closeOnOverlayClick && r("close");
    }
    function x(h) {
      h.key === "Escape" && r("close");
    }
    return re(() => {
      document.addEventListener("keydown", x), document.body.style.overflow = "hidden";
    }), gt(() => {
      document.removeEventListener("keydown", x), document.body.style.overflow = "";
    }), (h, y) => (t(), p(lt, { to: "body" }, [
      o("div", {
        class: "base-modal-overlay",
        onClick: c
      }, [
        o("div", {
          class: G(["base-modal-content", e.size]),
          onClick: y[1] || (y[1] = Se(() => {
          }, ["stop"]))
        }, [
          o("div", ta, [
            q(h.$slots, "header", {}, () => [
              e.title ? (t(), n("h3", oa, u(e.title), 1)) : i("", !0)
            ], !0),
            e.showCloseButton ? (t(), n("button", {
              key: 0,
              class: "base-modal-close",
              onClick: y[0] || (y[0] = (m) => h.$emit("close"))
            }, [...y[2] || (y[2] = [
              o("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                o("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])) : i("", !0)
          ]),
          o("div", aa, [
            e.loading ? (t(), n("div", sa, "Loading...")) : e.error ? (t(), n("div", na, u(e.error), 1)) : q(h.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          h.$slots.footer ? (t(), n("div", la, [
            q(h.$slots, "footer", {}, void 0, !0)
          ])) : i("", !0)
        ], 2)
      ])
    ]));
  }
}), We = /* @__PURE__ */ T(ra, [["__scopeId", "data-v-700d367b"]]), ia = ["type", "disabled"], ca = {
  key: 0,
  class: "spinner"
}, da = /* @__PURE__ */ O({
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
  setup(e) {
    return (l, s) => (t(), n("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: G(["base-btn", e.variant, e.size, { "full-width": e.fullWidth, loading: e.loading }]),
      onClick: s[0] || (s[0] = (r) => l.$emit("click", r))
    }, [
      e.loading ? (t(), n("span", ca)) : i("", !0),
      q(l.$slots, "default", {}, void 0, !0)
    ], 10, ia));
  }
}), le = /* @__PURE__ */ T(da, [["__scopeId", "data-v-f3452606"]]), ua = {
  key: 0,
  class: "base-title-count"
}, ma = /* @__PURE__ */ O({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (l, s) => (t(), p(et(`h${e.level}`), {
      class: G(["base-title", e.variant])
    }, {
      default: a(() => [
        q(l.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (t(), n("span", ua, "(" + u(e.count) + ")", 1)) : i("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), be = /* @__PURE__ */ T(ma, [["__scopeId", "data-v-5a01561d"]]), fa = ["value", "disabled"], ga = {
  key: 0,
  value: "",
  disabled: ""
}, va = ["value"], ha = {
  key: 0,
  class: "base-select-error"
}, pa = /* @__PURE__ */ O({
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
  setup(e) {
    function l(r) {
      return typeof r == "string" ? r : r.value;
    }
    function s(r) {
      return typeof r == "string" ? r : r.label;
    }
    return (r, c) => (t(), n("div", {
      class: G(["base-select-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      o("select", {
        value: e.modelValue,
        disabled: e.disabled,
        class: G(["base-select", { error: !!e.error }]),
        onChange: c[0] || (c[0] = (x) => r.$emit("update:modelValue", x.target.value))
      }, [
        e.placeholder ? (t(), n("option", ga, u(e.placeholder), 1)) : i("", !0),
        (t(!0), n(W, null, J(e.options, (x) => (t(), n("option", {
          key: l(x),
          value: l(x)
        }, u(s(x)), 9, va))), 128))
      ], 42, fa),
      e.error ? (t(), n("span", ha, u(e.error), 1)) : i("", !0)
    ], 2));
  }
}), _e = /* @__PURE__ */ T(pa, [["__scopeId", "data-v-7436d745"]]), ya = { class: "detail-section" }, ba = {
  key: 0,
  class: "empty-message"
}, wa = { class: "model-header" }, ka = { class: "model-name" }, _a = { class: "model-details" }, $a = { class: "model-row" }, xa = { class: "model-row" }, Ca = {
  key: 0,
  class: "model-row"
}, Ia = { class: "value" }, Sa = {
  key: 1,
  class: "model-row"
}, Ea = { class: "value" }, La = {
  key: 0,
  class: "model-actions"
}, za = { class: "detail-section" }, Ra = {
  key: 0,
  class: "empty-message"
}, Ua = { class: "node-name" }, Ma = {
  key: 0,
  class: "node-version"
}, Na = /* @__PURE__ */ O({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve"],
  setup(e, { emit: l }) {
    const s = e, r = l, { getWorkflowDetails: c, setModelImportance: x } = ue(), h = L(null), y = L(!1), m = L(null), w = L(!1), U = L({}), k = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    async function V() {
      y.value = !0, m.value = null;
      try {
        h.value = await c(s.workflowName);
      } catch (P) {
        m.value = P instanceof Error ? P.message : "Failed to load workflow details";
      } finally {
        y.value = !1;
      }
    }
    function F(P, N) {
      U.value[P] = N, w.value = !0;
    }
    async function Y() {
      if (!w.value) {
        r("close");
        return;
      }
      y.value = !0, m.value = null;
      try {
        for (const [P, N] of Object.entries(U.value))
          await x(s.workflowName, P, N);
        r("close");
      } catch (P) {
        m.value = P instanceof Error ? P.message : "Failed to save changes";
      } finally {
        y.value = !1;
      }
    }
    return re(V), (P, N) => (t(), p(We, {
      title: `WORKFLOW DETAILS: ${e.workflowName}`,
      size: "lg",
      loading: y.value,
      error: m.value || void 0,
      onClose: N[2] || (N[2] = (S) => r("close"))
    }, {
      body: a(() => [
        h.value ? (t(), n(W, { key: 0 }, [
          o("section", ya, [
            d(be, { variant: "section" }, {
              default: a(() => [
                g("MODELS USED (" + u(h.value.models.length) + ")", 1)
              ]),
              _: 1
            }),
            h.value.models.length === 0 ? (t(), n("div", ba, " No models used in this workflow ")) : i("", !0),
            (t(!0), n(W, null, J(h.value.models, (S) => (t(), n("div", {
              key: S.hash,
              class: "model-card"
            }, [
              o("div", wa, [
                N[3] || (N[3] = o("span", { class: "model-icon" }, "📦", -1)),
                o("span", ka, u(S.filename), 1)
              ]),
              o("div", _a, [
                o("div", $a, [
                  N[4] || (N[4] = o("span", { class: "label" }, "Status:", -1)),
                  o("span", {
                    class: G(["value", S.status === "available" ? "success" : "error"])
                  }, u(S.status === "available" ? "✓ Available" : "⚠ Missing"), 3)
                ]),
                o("div", xa, [
                  N[5] || (N[5] = o("span", { class: "label" }, "Importance:", -1)),
                  d(_e, {
                    "model-value": U.value[S.hash] || S.importance,
                    options: k,
                    "onUpdate:modelValue": (M) => F(S.hash, M)
                  }, null, 8, ["model-value", "onUpdate:modelValue"])
                ]),
                S.node_type ? (t(), n("div", Ca, [
                  N[6] || (N[6] = o("span", { class: "label" }, "Used in:", -1)),
                  o("span", Ia, u(S.node_type) + " (Node " + u(S.node_id) + ")", 1)
                ])) : i("", !0),
                S.size_mb ? (t(), n("div", Sa, [
                  N[7] || (N[7] = o("span", { class: "label" }, "Size:", -1)),
                  o("span", Ea, u(S.size_mb) + " MB", 1)
                ])) : i("", !0)
              ]),
              S.status === "missing" ? (t(), n("div", La, [
                d(le, {
                  variant: "secondary",
                  size: "sm",
                  onClick: N[0] || (N[0] = (M) => r("resolve"))
                }, {
                  default: a(() => [...N[8] || (N[8] = [
                    g(" Resolve ", -1)
                  ])]),
                  _: 1
                })
              ])) : i("", !0)
            ]))), 128))
          ]),
          N[9] || (N[9] = o("div", { class: "info-box" }, [
            o("div", { class: "info-title" }, "Importance options:"),
            o("ul", { class: "info-list" }, [
              o("li", null, [
                o("strong", null, "Required"),
                g(" — Must have for workflow to run")
              ]),
              o("li", null, [
                o("strong", null, "Flexible"),
                g(" — Workflow adapts if missing")
              ]),
              o("li", null, [
                o("strong", null, "Optional"),
                g(" — Nice to have, can be skipped")
              ])
            ])
          ], -1)),
          o("section", za, [
            d(be, { variant: "section" }, {
              default: a(() => [
                g("NODES USED (" + u(h.value.nodes.length) + ")", 1)
              ]),
              _: 1
            }),
            h.value.nodes.length === 0 ? (t(), n("div", Ra, " No custom nodes used in this workflow ")) : i("", !0),
            (t(!0), n(W, null, J(h.value.nodes, (S) => (t(), n("div", {
              key: S.name,
              class: "node-item"
            }, [
              o("span", {
                class: G(["node-status", S.installed ? "installed" : "missing"])
              }, u(S.installed ? "✓" : "✕"), 3),
              o("span", Ua, u(S.name), 1),
              S.version ? (t(), n("span", Ma, "v" + u(S.version), 1)) : i("", !0)
            ]))), 128))
          ])
        ], 64)) : i("", !0)
      ]),
      footer: a(() => [
        d(le, {
          variant: "secondary",
          onClick: N[1] || (N[1] = (S) => r("close"))
        }, {
          default: a(() => [...N[10] || (N[10] = [
            g(" Close ", -1)
          ])]),
          _: 1
        }),
        w.value ? (t(), p(le, {
          key: 0,
          variant: "primary",
          onClick: Y
        }, {
          default: a(() => [...N[11] || (N[11] = [
            g(" Save Changes ", -1)
          ])]),
          _: 1
        })) : i("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Da = /* @__PURE__ */ T(Na, [["__scopeId", "data-v-6ce9a41c"]]), Va = {
  key: 0,
  class: "resolve-section"
}, Ba = { class: "resolve-card success-card" }, Oa = { class: "items-list" }, Ta = { class: "item-info" }, Aa = { class: "item-name" }, Wa = {
  key: 0,
  class: "item-meta"
}, Fa = { class: "match-type" }, Pa = { class: "source" }, Ga = {
  key: 1,
  class: "resolve-section"
}, Ha = { class: "resolve-card warning-card" }, Ka = { class: "items-list" }, ja = { class: "item-info" }, qa = { class: "item-name" }, Ja = { class: "item-meta" }, Ya = { key: 0 }, Xa = { key: 1 }, Za = {
  key: 0,
  class: "item-warning"
}, Qa = {
  key: 0,
  class: "item-action"
}, es = ["onClick"], ts = {
  key: 2,
  class: "resolve-section"
}, os = { class: "info-text" }, as = { class: "actions-summary" }, ss = { class: "summary-list" }, ns = { key: 0 }, ls = { key: 1 }, rs = { key: 2 }, is = {
  key: 0,
  class: "estimated-size"
}, cs = /* @__PURE__ */ O({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh"],
  setup(e, { emit: l }) {
    const s = e, r = l, { resolveWorkflow: c, installWorkflowDeps: x } = ue(), h = L(null), y = L(!1), m = L(!1), w = L(null), U = B(() => {
      var _;
      return h.value ? ((_ = h.value.download_results) == null ? void 0 : _.every((v) => v.can_download)) ?? !1 : !1;
    });
    async function k() {
      y.value = !0, w.value = null;
      try {
        h.value = await c(s.workflowName);
      } catch (_) {
        w.value = _ instanceof Error ? _.message : "Failed to analyze workflow";
      } finally {
        y.value = !1;
      }
    }
    function V(_) {
      return !_.possible_matches || _.possible_matches.length === 0 ? null : _.possible_matches.reduce(
        (v, C) => C.match_confidence > v.match_confidence ? C : v
      );
    }
    function F(_) {
      return _ >= 0.9 ? "high" : _ >= 0.7 ? "medium" : "low";
    }
    function Y(_) {
      const v = V(_);
      return v ? v.package_id.startsWith("http") ? "GitHub" : "ComfyUI Registry" : "Unknown";
    }
    function P(_) {
      var v, C;
      return (C = (v = h.value) == null ? void 0 : v.download_results) == null ? void 0 : C.find((b) => b.model === _);
    }
    function N(_) {
      const v = P(_);
      return (v == null ? void 0 : v.can_download) ?? !1;
    }
    function S(_) {
      const v = P(_);
      return (v == null ? void 0 : v.source_url) || null;
    }
    function M(_) {
      window.open(_, "_blank");
    }
    async function X() {
      if (!(!h.value || m.value)) {
        m.value = !0, w.value = null;
        try {
          await x(
            s.workflowName,
            h.value.nodes_to_install,
            []
          ), r("install"), r("refresh"), r("close");
        } catch (_) {
          w.value = _ instanceof Error ? _.message : "Installation failed";
        } finally {
          m.value = !1;
        }
      }
    }
    async function I() {
      if (!(!h.value || m.value)) {
        m.value = !0, w.value = null;
        try {
          await x(
            s.workflowName,
            h.value.nodes_to_install,
            h.value.models_to_download
          ), r("install"), r("refresh"), r("close");
        } catch (_) {
          w.value = _ instanceof Error ? _.message : "Installation failed";
        } finally {
          m.value = !1;
        }
      }
    }
    return re(k), (_, v) => (t(), p(We, {
      title: `RESOLVE DEPENDENCIES: ${e.workflowName}`,
      size: "lg",
      loading: y.value,
      error: w.value || void 0,
      onClose: v[1] || (v[1] = (C) => r("close"))
    }, {
      body: a(() => [
        h.value ? (t(), n(W, { key: 0 }, [
          v[5] || (v[5] = o("div", { class: "intro-message" }, " This workflow needs the following to work: ", -1)),
          h.value.nodes_unresolved.length > 0 ? (t(), n("section", Va, [
            d(be, { variant: "section" }, {
              default: a(() => [
                g("NODES (" + u(h.value.nodes_unresolved.length) + ")", 1)
              ]),
              _: 1
            }),
            o("div", Ba, [
              v[2] || (v[2] = o("div", { class: "card-header" }, [
                o("span", { class: "status-icon" }, "✓"),
                o("span", { class: "card-title" }, "Can install automatically")
              ], -1)),
              o("div", Oa, [
                (t(!0), n(W, null, J(h.value.nodes_unresolved, (C) => {
                  var b;
                  return t(), n("div", {
                    key: C.node_type,
                    class: "item"
                  }, [
                    o("div", Ta, [
                      o("div", Aa, u(((b = V(C)) == null ? void 0 : b.package_id) || C.node_type), 1),
                      V(C) ? (t(), n("div", Wa, [
                        o("span", {
                          class: G(["confidence-badge", F(V(C).match_confidence)])
                        }, u(Math.round(V(C).match_confidence * 100)) + "% match ", 3),
                        o("span", Fa, u(V(C).match_type), 1),
                        o("span", Pa, "Source: " + u(Y(C)), 1)
                      ])) : i("", !0)
                    ])
                  ]);
                }), 128))
              ])
            ])
          ])) : i("", !0),
          h.value.models_unresolved.length > 0 ? (t(), n("section", Ga, [
            d(be, { variant: "section" }, {
              default: a(() => [
                g("MODELS (" + u(h.value.models_unresolved.length) + ")", 1)
              ]),
              _: 1
            }),
            o("div", Ha, [
              v[3] || (v[3] = o("div", { class: "card-header" }, [
                o("span", { class: "status-icon" }, "⚠"),
                o("span", { class: "card-title" }, "Manual download required")
              ], -1)),
              o("div", Ka, [
                (t(!0), n(W, null, J(h.value.models_unresolved, (C) => (t(), n("div", {
                  key: C.filename,
                  class: "item"
                }, [
                  o("div", ja, [
                    o("div", qa, u(C.filename), 1),
                    o("div", Ja, [
                      C.expected_category ? (t(), n("span", Ya, "Type: " + u(C.expected_category), 1)) : i("", !0),
                      P(C.filename) ? (t(), n("span", Xa, " Size: ~" + u(P(C.filename).estimated_size_mb) + " MB ", 1)) : i("", !0)
                    ]),
                    N(C.filename) ? i("", !0) : (t(), n("div", Za, " No auto-download source configured "))
                  ]),
                  S(C.filename) ? (t(), n("div", Qa, [
                    o("button", {
                      class: "link-btn",
                      onClick: (b) => M(S(C.filename))
                    }, " Open Source ↗ ", 8, es)
                  ])) : i("", !0)
                ]))), 128))
              ])
            ])
          ])) : i("", !0),
          h.value.nodes_resolved.length > 0 || h.value.models_resolved.length > 0 ? (t(), n("section", ts, [
            d(be, { variant: "section" }, {
              default: a(() => [
                g(" ALREADY AVAILABLE (" + u(h.value.nodes_resolved.length + h.value.models_resolved.length) + ") ", 1)
              ]),
              _: 1
            }),
            o("div", os, u(h.value.nodes_resolved.length) + " nodes and " + u(h.value.models_resolved.length) + " models are already installed ", 1)
          ])) : i("", !0),
          o("div", as, [
            v[4] || (v[4] = o("div", { class: "summary-title" }, "This will:", -1)),
            o("ol", ss, [
              h.value.nodes_to_install.length ? (t(), n("li", ns, " Install " + u(h.value.nodes_to_install.length) + " nodes (~" + u(h.value.estimated_time_seconds) + "s) ", 1)) : i("", !0),
              h.value.nodes_to_install.length ? (t(), n("li", ls, " Restart ComfyUI to load new nodes ")) : i("", !0),
              h.value.models_to_download.length ? (t(), n("li", rs, " You'll still need to download " + u(h.value.models_to_download.length) + " model(s) manually ", 1)) : i("", !0)
            ]),
            h.value.estimated_size_mb ? (t(), n("div", is, " Estimated download: " + u(h.value.estimated_size_mb) + " MB ", 1)) : i("", !0)
          ])
        ], 64)) : i("", !0)
      ]),
      footer: a(() => [
        d(le, {
          variant: "secondary",
          onClick: v[0] || (v[0] = (C) => r("close"))
        }, {
          default: a(() => [...v[6] || (v[6] = [
            g(" Cancel ", -1)
          ])]),
          _: 1
        }),
        h.value && h.value.nodes_to_install.length && h.value.models_to_download.length ? (t(), p(le, {
          key: 0,
          variant: "secondary",
          disabled: m.value,
          loading: m.value,
          onClick: X
        }, {
          default: a(() => [...v[7] || (v[7] = [
            g(" Install Nodes Only ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : i("", !0),
        h.value && (h.value.nodes_to_install.length || h.value.models_to_download.length) ? (t(), p(le, {
          key: 1,
          variant: "primary",
          disabled: m.value || h.value.models_to_download.length > 0 && !U.value,
          loading: m.value,
          onClick: I
        }, {
          default: a(() => [...v[8] || (v[8] = [
            g(" Install All ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : i("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), ds = /* @__PURE__ */ T(cs, [["__scopeId", "data-v-d68efb14"]]), us = { class: "search-input-wrapper" }, ms = ["value", "placeholder"], fs = /* @__PURE__ */ O({
  __name: "SearchInput",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 },
    autoFocus: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e, { emit: l }) {
    const s = e, r = l, c = L(null);
    let x;
    function h(m) {
      const w = m.target.value;
      s.debounce > 0 ? (clearTimeout(x), x = window.setTimeout(() => {
        r("update:modelValue", w);
      }, s.debounce)) : r("update:modelValue", w);
    }
    function y() {
      var m;
      r("update:modelValue", ""), r("clear"), (m = c.value) == null || m.focus();
    }
    return re(() => {
      s.autoFocus && c.value && c.value.focus();
    }), (m, w) => (t(), n("div", us, [
      o("input", {
        ref_key: "inputRef",
        ref: c,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: h,
        onKeyup: $e(y, ["escape"])
      }, null, 40, ms),
      e.clearable && e.modelValue ? (t(), n("button", {
        key: 0,
        class: "clear-button",
        onClick: y,
        title: "Clear search"
      }, " ✕ ")) : i("", !0)
    ]));
  }
}), gs = /* @__PURE__ */ T(fs, [["__scopeId", "data-v-266f857a"]]), vs = { class: "search-bar" }, hs = /* @__PURE__ */ O({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (l, s) => (t(), n("div", vs, [
      d(gs, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": s[0] || (s[0] = (r) => l.$emit("update:modelValue", r)),
        onClear: s[1] || (s[1] = (r) => l.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), Re = /* @__PURE__ */ T(hs, [["__scopeId", "data-v-3d51bbfd"]]), ps = { class: "section-group" }, ys = {
  key: 0,
  class: "section-content"
}, bs = /* @__PURE__ */ O({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(e, { emit: l }) {
    const s = e, r = l, c = L(s.initiallyExpanded);
    function x() {
      s.collapsible && (c.value = !c.value, r("toggle", c.value));
    }
    return (h, y) => (t(), n("section", ps, [
      d(Te, {
        count: e.count,
        clickable: e.collapsible,
        expanded: c.value,
        onClick: x
      }, {
        default: a(() => [
          g(u(e.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !e.collapsible || c.value ? (t(), n("div", ys, [
        q(h.$slots, "default", {}, void 0, !0)
      ])) : i("", !0)
    ]));
  }
}), oe = /* @__PURE__ */ T(bs, [["__scopeId", "data-v-c48e33ed"]]), ws = { class: "item-header" }, ks = {
  key: 0,
  class: "item-icon"
}, _s = { class: "item-info" }, $s = {
  key: 0,
  class: "item-title"
}, xs = {
  key: 1,
  class: "item-subtitle"
}, Cs = {
  key: 0,
  class: "item-details"
}, Is = {
  key: 1,
  class: "item-actions"
}, Ss = /* @__PURE__ */ O({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const s = e, r = B(() => s.status ? `status-${s.status}` : "");
    return (c, x) => (t(), n("div", {
      class: G(["item-card", { clickable: e.clickable, compact: e.compact }, r.value]),
      onClick: x[0] || (x[0] = (h) => e.clickable && c.$emit("click"))
    }, [
      o("div", ws, [
        c.$slots.icon ? (t(), n("span", ks, [
          q(c.$slots, "icon", {}, void 0, !0)
        ])) : i("", !0),
        o("div", _s, [
          c.$slots.title ? (t(), n("div", $s, [
            q(c.$slots, "title", {}, void 0, !0)
          ])) : i("", !0),
          c.$slots.subtitle ? (t(), n("div", xs, [
            q(c.$slots, "subtitle", {}, void 0, !0)
          ])) : i("", !0)
        ])
      ]),
      c.$slots.details ? (t(), n("div", Cs, [
        q(c.$slots, "details", {}, void 0, !0)
      ])) : i("", !0),
      c.$slots.actions ? (t(), n("div", Is, [
        q(c.$slots, "actions", {}, void 0, !0)
      ])) : i("", !0)
    ], 2));
  }
}), ne = /* @__PURE__ */ T(Ss, [["__scopeId", "data-v-cc435e0e"]]), Es = { class: "loading-state" }, Ls = { class: "loading-message" }, zs = /* @__PURE__ */ O({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (l, s) => (t(), n("div", Es, [
      s[0] || (s[0] = o("div", { class: "spinner" }, null, -1)),
      o("p", Ls, u(e.message), 1)
    ]));
  }
}), xe = /* @__PURE__ */ T(zs, [["__scopeId", "data-v-ad8436c9"]]), Rs = { class: "error-state" }, Us = { class: "error-message" }, Ms = /* @__PURE__ */ O({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (l, s) => (t(), n("div", Rs, [
      s[2] || (s[2] = o("span", { class: "error-icon" }, "⚠", -1)),
      o("p", Us, u(e.message), 1),
      e.retry ? (t(), p(A, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: s[0] || (s[0] = (r) => l.$emit("retry"))
      }, {
        default: a(() => [...s[1] || (s[1] = [
          g(" Retry ", -1)
        ])]),
        _: 1
      })) : i("", !0)
    ]));
  }
}), Ce = /* @__PURE__ */ T(Ms, [["__scopeId", "data-v-5397be48"]]), Ns = /* @__PURE__ */ O({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { emit: l }) {
    const s = l, { getWorkflows: r } = ue(), c = L([]), x = L(!1), h = L(null), y = L(""), m = L(!1), w = L(!1), U = L(!1), k = L(!1), V = L(null), F = B(
      () => c.value.filter((R) => R.status === "broken")
    ), Y = B(
      () => c.value.filter((R) => R.status === "new")
    ), P = B(
      () => c.value.filter((R) => R.status === "modified")
    ), N = B(
      () => c.value.filter((R) => R.status === "synced")
    ), S = B(() => {
      if (!y.value.trim()) return c.value;
      const R = y.value.toLowerCase();
      return c.value.filter((E) => E.name.toLowerCase().includes(R));
    }), M = B(
      () => F.value.filter(
        (R) => !y.value.trim() || R.name.toLowerCase().includes(y.value.toLowerCase())
      )
    ), X = B(
      () => Y.value.filter(
        (R) => !y.value.trim() || R.name.toLowerCase().includes(y.value.toLowerCase())
      )
    ), I = B(
      () => P.value.filter(
        (R) => !y.value.trim() || R.name.toLowerCase().includes(y.value.toLowerCase())
      )
    ), _ = B(
      () => N.value.filter(
        (R) => !y.value.trim() || R.name.toLowerCase().includes(y.value.toLowerCase())
      )
    ), v = B(
      () => w.value ? _.value : _.value.slice(0, 5)
    );
    async function C() {
      x.value = !0, h.value = null;
      try {
        c.value = await r();
      } catch (R) {
        h.value = R instanceof Error ? R.message : "Failed to load workflows";
      } finally {
        x.value = !1;
      }
    }
    function b(R) {
      V.value = R, U.value = !0;
    }
    function z(R) {
      V.value = R, k.value = !0;
    }
    function D() {
      alert("Bulk resolution not yet implemented");
    }
    function se() {
      s("refresh");
    }
    return re(C), (R, E) => (t(), n(W, null, [
      d(ve, null, {
        header: a(() => [
          d(he, { title: "WORKFLOWS" }, {
            actions: a(() => [
              F.value.length > 0 ? (t(), p(A, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: D
              }, {
                default: a(() => [...E[7] || (E[7] = [
                  g(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : i("", !0)
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          d(Re, {
            modelValue: y.value,
            "onUpdate:modelValue": E[0] || (E[0] = (H) => y.value = H),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          x.value ? (t(), p(xe, {
            key: 0,
            message: "Loading workflows..."
          })) : h.value ? (t(), p(Ce, {
            key: 1,
            message: h.value,
            retry: !0,
            onRetry: C
          }, null, 8, ["message"])) : (t(), n(W, { key: 2 }, [
            M.value.length ? (t(), p(oe, {
              key: 0,
              title: "BROKEN",
              count: M.value.length
            }, {
              default: a(() => [
                (t(!0), n(W, null, J(M.value, (H) => (t(), p(ne, {
                  key: H.name,
                  status: "broken"
                }, {
                  icon: a(() => [...E[8] || (E[8] = [
                    g("⚠", -1)
                  ])]),
                  title: a(() => [
                    g(u(H.name), 1)
                  ]),
                  subtitle: a(() => [
                    g(" Missing: " + u(H.missing_nodes) + " nodes, " + u(H.missing_models) + " models ", 1)
                  ]),
                  actions: a(() => [
                    d(A, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ie) => z(H.name)
                    }, {
                      default: a(() => [...E[9] || (E[9] = [
                        g(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    d(A, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ie) => b(H.name)
                    }, {
                      default: a(() => [...E[10] || (E[10] = [
                        g(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : i("", !0),
            X.value.length ? (t(), p(oe, {
              key: 1,
              title: "NEW",
              count: X.value.length
            }, {
              default: a(() => [
                (t(!0), n(W, null, J(X.value, (H) => (t(), p(ne, {
                  key: H.name,
                  status: "new"
                }, {
                  icon: a(() => [...E[11] || (E[11] = [
                    g("●", -1)
                  ])]),
                  title: a(() => [
                    g(u(H.name), 1)
                  ]),
                  subtitle: a(() => [...E[12] || (E[12] = [
                    g("✓ Ready", -1)
                  ])]),
                  actions: a(() => [
                    d(A, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ie) => b(H.name)
                    }, {
                      default: a(() => [...E[13] || (E[13] = [
                        g(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : i("", !0),
            I.value.length ? (t(), p(oe, {
              key: 2,
              title: "MODIFIED",
              count: I.value.length
            }, {
              default: a(() => [
                (t(!0), n(W, null, J(I.value, (H) => (t(), p(ne, {
                  key: H.name,
                  status: "modified"
                }, {
                  icon: a(() => [...E[14] || (E[14] = [
                    g("⚡", -1)
                  ])]),
                  title: a(() => [
                    g(u(H.name), 1)
                  ]),
                  subtitle: a(() => [...E[15] || (E[15] = [
                    g("✓ Ready", -1)
                  ])]),
                  actions: a(() => [
                    d(A, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ie) => b(H.name)
                    }, {
                      default: a(() => [...E[16] || (E[16] = [
                        g(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : i("", !0),
            _.value.length ? (t(), p(oe, {
              key: 3,
              title: "SYNCED",
              count: _.value.length,
              collapsible: !0,
              "initially-expanded": m.value,
              onToggle: E[2] || (E[2] = (H) => m.value = H)
            }, {
              default: a(() => [
                (t(!0), n(W, null, J(v.value, (H) => (t(), p(ne, {
                  key: H.name,
                  status: "synced"
                }, {
                  icon: a(() => [...E[17] || (E[17] = [
                    g("✓", -1)
                  ])]),
                  title: a(() => [
                    g(u(H.name), 1)
                  ]),
                  subtitle: a(() => [...E[18] || (E[18] = [
                    g("✓ Ready", -1)
                  ])]),
                  actions: a(() => [
                    d(A, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ie) => b(H.name)
                    }, {
                      default: a(() => [...E[19] || (E[19] = [
                        g(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128)),
                !w.value && _.value.length > 5 ? (t(), p(A, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: E[1] || (E[1] = (H) => w.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: a(() => [
                    g(" View all " + u(_.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : i("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : i("", !0),
            S.value.length ? i("", !0) : (t(), p(ge, {
              key: 4,
              icon: "📭",
              message: y.value ? `No workflows match '${y.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      U.value && V.value ? (t(), p(Da, {
        key: 0,
        "workflow-name": V.value,
        onClose: E[3] || (E[3] = (H) => U.value = !1),
        onResolve: E[4] || (E[4] = (H) => z(V.value))
      }, null, 8, ["workflow-name"])) : i("", !0),
      k.value && V.value ? (t(), p(ds, {
        key: 1,
        "workflow-name": V.value,
        onClose: E[5] || (E[5] = (H) => k.value = !1),
        onInstall: se,
        onRefresh: E[6] || (E[6] = (H) => s("refresh"))
      }, null, 8, ["workflow-name"])) : i("", !0)
    ], 64));
  }
}), Ds = /* @__PURE__ */ T(Ns, [["__scopeId", "data-v-2251d776"]]), Vs = /* @__PURE__ */ O({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (l, s) => (t(), n("span", {
      class: G(["detail-label"]),
      style: tt({ minWidth: e.minWidth })
    }, [
      q(l.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), Bs = /* @__PURE__ */ T(Vs, [["__scopeId", "data-v-75e9eeb8"]]), Os = /* @__PURE__ */ O({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (l, s) => (t(), n("span", {
      class: G(["detail-value", e.variant, { mono: e.mono, truncate: e.truncate }])
    }, [
      q(l.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Oe = /* @__PURE__ */ T(Os, [["__scopeId", "data-v-2f186e4c"]]), Ts = { class: "detail-row" }, As = /* @__PURE__ */ O({
  __name: "DetailRow",
  props: {
    label: {},
    value: {},
    mono: { type: Boolean, default: !1 },
    valueVariant: { default: "default" },
    truncate: { type: Boolean, default: !1 },
    labelMinWidth: { default: "70px" }
  },
  setup(e) {
    return (l, s) => (t(), n("div", Ts, [
      d(Bs, { "min-width": e.labelMinWidth }, {
        default: a(() => [
          g(u(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (t(), p(Oe, {
        key: 0,
        mono: e.mono,
        variant: e.valueVariant,
        truncate: e.truncate
      }, {
        default: a(() => [
          g(u(e.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : q(l.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), ee = /* @__PURE__ */ T(As, [["__scopeId", "data-v-ef15664a"]]), Ws = /* @__PURE__ */ O({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(e) {
    return (l, s) => (t(), n("div", {
      class: G(["summary-bar", e.variant])
    }, [
      q(l.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Ee = /* @__PURE__ */ T(Ws, [["__scopeId", "data-v-ccb7816e"]]), Fs = { class: "popover-header" }, Ps = { class: "popover-title" }, Gs = { class: "popover-content" }, Hs = {
  key: 0,
  class: "popover-actions"
}, Ks = /* @__PURE__ */ O({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(e) {
    return (l, s) => (t(), p(lt, { to: "body" }, [
      e.show ? (t(), n("div", {
        key: 0,
        class: "popover-overlay",
        onClick: s[2] || (s[2] = (r) => l.$emit("close"))
      }, [
        o("div", {
          class: "popover",
          style: tt({ maxWidth: e.maxWidth }),
          onClick: s[1] || (s[1] = Se(() => {
          }, ["stop"]))
        }, [
          o("div", Fs, [
            o("h4", Ps, u(e.title), 1),
            o("button", {
              class: "popover-close",
              onClick: s[0] || (s[0] = (r) => l.$emit("close"))
            }, "✕")
          ]),
          o("div", Gs, [
            q(l.$slots, "content", {}, void 0, !0)
          ]),
          l.$slots.actions ? (t(), n("div", Hs, [
            q(l.$slots, "actions", {}, void 0, !0)
          ])) : i("", !0)
        ], 4)
      ])) : i("", !0)
    ]));
  }
}), Ue = /* @__PURE__ */ T(Ks, [["__scopeId", "data-v-057df510"]]), js = /* @__PURE__ */ O({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: l }) {
    const s = l, { getEnvironmentModels: r, getStatus: c } = ue(), x = L([]), h = L([]), y = L("production"), m = L(!1), w = L(null), U = L(""), k = L(!1);
    function V() {
      k.value = !1, s("navigate", "model-index");
    }
    const F = B(
      () => x.value.reduce((b, z) => b + (z.size_mb || z.size || 0), 0)
    ), Y = B(() => {
      if (!U.value.trim()) return x.value;
      const b = U.value.toLowerCase();
      return x.value.filter((z) => z.filename.toLowerCase().includes(b));
    }), P = B(() => {
      if (!U.value.trim()) return h.value;
      const b = U.value.toLowerCase();
      return h.value.filter((z) => z.filename.toLowerCase().includes(b));
    }), N = B(
      () => Y.value.filter((b) => b.type === "checkpoints" || b.category === "checkpoints")
    ), S = B(
      () => Y.value.filter((b) => b.type === "loras" || b.category === "loras")
    ), M = B(
      () => Y.value.filter(
        (b) => b.type !== "checkpoints" && b.category !== "checkpoints" && b.type !== "loras" && b.category !== "loras"
      )
    );
    function X(b) {
      return b ? b >= 1024 ? `${(b / 1024).toFixed(1)} GB` : `${b.toFixed(0)} MB` : "Unknown";
    }
    function I(b) {
      s("navigate", "model-index");
    }
    function _(b) {
      s("navigate", "model-index");
    }
    function v(b) {
      alert(`Download functionality not yet implemented for ${b}`);
    }
    async function C() {
      m.value = !0, w.value = null;
      try {
        const b = await r();
        x.value = b, h.value = [];
        const z = await c();
        y.value = z.environment || "production";
      } catch (b) {
        w.value = b instanceof Error ? b.message : "Failed to load models";
      } finally {
        m.value = !1;
      }
    }
    return re(C), (b, z) => (t(), n(W, null, [
      d(ve, null, {
        header: a(() => [
          d(he, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: z[0] || (z[0] = (D) => k.value = !0)
          })
        ]),
        search: a(() => [
          d(Re, {
            modelValue: U.value,
            "onUpdate:modelValue": z[1] || (z[1] = (D) => U.value = D),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          m.value ? (t(), p(xe, {
            key: 0,
            message: "Loading environment models..."
          })) : w.value ? (t(), p(Ce, {
            key: 1,
            message: w.value,
            retry: !0,
            onRetry: C
          }, null, 8, ["message"])) : (t(), n(W, { key: 2 }, [
            x.value.length ? (t(), p(Ee, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                g(" Total: " + u(x.value.length) + " models • " + u(X(F.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : i("", !0),
            N.value.length ? (t(), p(oe, {
              key: 1,
              title: "CHECKPOINTS",
              count: N.value.length
            }, {
              default: a(() => [
                (t(!0), n(W, null, J(N.value, (D) => (t(), p(ne, {
                  key: D.sha256 || D.hash || D.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...z[3] || (z[3] = [
                    g("📦", -1)
                  ])]),
                  title: a(() => [
                    g(u(D.filename), 1)
                  ]),
                  subtitle: a(() => [
                    g(u(X(D.size_mb || D.size)), 1)
                  ]),
                  details: a(() => [
                    d(ee, {
                      label: "Used by:",
                      value: (D.used_by || D.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    d(ee, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: a(() => [
                    d(A, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (se) => I(D.sha256 || D.sha256_hash || D.hash || "")
                    }, {
                      default: a(() => [...z[4] || (z[4] = [
                        g(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : i("", !0),
            S.value.length ? (t(), p(oe, {
              key: 2,
              title: "LORAS",
              count: S.value.length
            }, {
              default: a(() => [
                (t(!0), n(W, null, J(S.value, (D) => (t(), p(ne, {
                  key: D.sha256 || D.hash || D.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...z[5] || (z[5] = [
                    g("📦", -1)
                  ])]),
                  title: a(() => [
                    g(u(D.filename), 1)
                  ]),
                  subtitle: a(() => [
                    g(u(X(D.size_mb || D.size)), 1)
                  ]),
                  details: a(() => [
                    d(ee, {
                      label: "Used by:",
                      value: (D.used_by || D.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    d(ee, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: a(() => [
                    d(A, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (se) => I(D.sha256 || D.sha256_hash || D.hash || "")
                    }, {
                      default: a(() => [...z[6] || (z[6] = [
                        g(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : i("", !0),
            M.value.length ? (t(), p(oe, {
              key: 3,
              title: "OTHER",
              count: M.value.length
            }, {
              default: a(() => [
                (t(!0), n(W, null, J(M.value, (D) => (t(), p(ne, {
                  key: D.sha256 || D.hash || D.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...z[7] || (z[7] = [
                    g("📦", -1)
                  ])]),
                  title: a(() => [
                    g(u(D.filename), 1)
                  ]),
                  subtitle: a(() => [
                    g(u(X(D.size_mb || D.size)), 1)
                  ]),
                  details: a(() => [
                    d(ee, {
                      label: "Type:",
                      value: D.type
                    }, null, 8, ["value"]),
                    d(ee, {
                      label: "Used by:",
                      value: (D.used_by || D.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    d(A, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (se) => I(D.sha256 || D.sha256_hash || D.hash || "")
                    }, {
                      default: a(() => [...z[8] || (z[8] = [
                        g(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : i("", !0),
            P.value.length ? (t(), p(oe, {
              key: 4,
              title: "MISSING",
              count: P.value.length
            }, {
              default: a(() => [
                (t(!0), n(W, null, J(P.value, (D) => (t(), p(ne, {
                  key: D.filename,
                  status: "broken"
                }, {
                  icon: a(() => [...z[9] || (z[9] = [
                    g("⚠", -1)
                  ])]),
                  title: a(() => [
                    g(u(D.filename), 1)
                  ]),
                  subtitle: a(() => [...z[10] || (z[10] = [
                    o("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: a(() => {
                    var se;
                    return [
                      d(ee, {
                        label: "Required by:",
                        value: ((se = D.workflow_names) == null ? void 0 : se.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: a(() => [
                    d(A, {
                      variant: "primary",
                      size: "sm",
                      onClick: (se) => v(D.filename)
                    }, {
                      default: a(() => [...z[11] || (z[11] = [
                        g(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    d(A, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => _(D.filename)
                    }, {
                      default: a(() => [...z[12] || (z[12] = [
                        g(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : i("", !0),
            !Y.value.length && !P.value.length ? (t(), p(ge, {
              key: 5,
              icon: "📭",
              message: U.value ? `No models match '${U.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : i("", !0)
          ], 64))
        ]),
        _: 1
      }),
      d(Ue, {
        show: k.value,
        title: "About Environment Models",
        onClose: z[2] || (z[2] = (D) => k.value = !1)
      }, {
        content: a(() => [
          o("p", null, [
            z[13] || (z[13] = g(" These are models currently used by workflows in ", -1)),
            o("strong", null, '"' + u(y.value) + '"', 1),
            z[14] || (z[14] = g(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: a(() => [
          d(A, {
            variant: "primary",
            onClick: V
          }, {
            default: a(() => [...z[15] || (z[15] = [
              g(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), qs = /* @__PURE__ */ T(js, [["__scopeId", "data-v-865641a4"]]), Js = /* @__PURE__ */ O({
  __name: "ModelIndexSection",
  setup(e) {
    const { getWorkspaceModels: l } = ue(), s = L([]), r = L(!1), c = L(null), x = L(""), h = L(!1), y = B(
      () => s.value.reduce((v, C) => v + (C.size_mb || C.size || 0), 0)
    ), m = B(() => {
      const v = /* @__PURE__ */ new Set();
      return s.value.forEach((C) => {
        C.used_in_environments && C.used_in_environments.length > 0 && C.used_in_environments.forEach((b) => v.add(b.env_name));
      }), v.size;
    }), w = B(() => {
      if (!x.value.trim()) return s.value;
      const v = x.value.toLowerCase();
      return s.value.filter((C) => {
        const b = C, z = C.sha256 || b.sha256_hash || "";
        return C.filename.toLowerCase().includes(v) || z.toLowerCase().includes(v);
      });
    }), U = B(
      () => w.value.filter((v) => v.type === "checkpoints")
    ), k = B(
      () => w.value.filter((v) => v.type === "loras")
    ), V = B(
      () => w.value.filter((v) => v.type !== "checkpoints" && v.type !== "loras")
    );
    function F(v) {
      return v ? v >= 1024 ? `${(v / 1024).toFixed(1)} GB` : `${v.toFixed(0)} MB` : "Unknown";
    }
    function Y(v) {
      const C = v, b = v.used_in_workflows || C.used_by || [];
      return !b || b.length === 0 ? "Not used" : `${b.length} workflow(s)`;
    }
    function P(v) {
      navigator.clipboard.writeText(v), alert("Hash copied to clipboard");
    }
    function N(v) {
      prompt("Enter model source URL:", v.source_url || "") !== null && alert("URL update not yet implemented");
    }
    function S(v) {
      const C = v, b = v.used_in_workflows || C.used_by || [], z = b && b.length > 0 ? `

⚠ WARNING: This model is used by ${b.length} workflow(s):
${b.join(", ")}

Deleting will break these workflows!` : "";
      confirm(
        `Delete ${v.filename}?${z}

This will free ${F(C.size_mb || v.size)} of space.`
      ) && alert("Model deletion not yet implemented");
    }
    function M() {
      alert("Scan for models not yet implemented");
    }
    function X() {
      alert("Change directory not yet implemented");
    }
    function I() {
      alert("Download new model not yet implemented");
    }
    async function _() {
      r.value = !0, c.value = null;
      try {
        s.value = await l(), console.log("Loaded models:", s.value), console.log("Filtered checkpoints:", U.value), console.log("Filtered loras:", k.value), console.log("Filtered other:", V.value);
      } catch (v) {
        c.value = v instanceof Error ? v.message : "Failed to load workspace models";
      } finally {
        r.value = !1;
      }
    }
    return re(_), (v, C) => (t(), n(W, null, [
      d(ve, null, {
        header: a(() => [
          d(he, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: C[0] || (C[0] = (b) => h.value = !0)
          }, {
            actions: a(() => [
              d(A, {
                variant: "primary",
                size: "sm",
                onClick: M
              }, {
                default: a(() => [...C[3] || (C[3] = [
                  g(" Scan for Models ", -1)
                ])]),
                _: 1
              }),
              d(A, {
                variant: "primary",
                size: "sm",
                onClick: X
              }, {
                default: a(() => [...C[4] || (C[4] = [
                  g(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              d(A, {
                variant: "primary",
                size: "sm",
                onClick: I
              }, {
                default: a(() => [...C[5] || (C[5] = [
                  o("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    o("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    o("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  g(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          d(Re, {
            modelValue: x.value,
            "onUpdate:modelValue": C[1] || (C[1] = (b) => x.value = b),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          r.value ? (t(), p(xe, {
            key: 0,
            message: "Loading workspace models..."
          })) : c.value ? (t(), p(Ce, {
            key: 1,
            message: c.value,
            retry: !0,
            onRetry: _
          }, null, 8, ["message"])) : (t(), n(W, { key: 2 }, [
            s.value.length ? (t(), p(Ee, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                g(" Total: " + u(s.value.length) + " models • " + u(F(y.value)) + " • Used in " + u(m.value) + " environments ", 1)
              ]),
              _: 1
            })) : i("", !0),
            U.value.length ? (t(), p(oe, {
              key: 1,
              title: "CHECKPOINTS",
              count: U.value.length
            }, {
              default: a(() => [
                (t(!0), n(W, null, J(U.value, (b) => (t(), p(ne, {
                  key: b.sha256 || b.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...C[6] || (C[6] = [
                    g("📦", -1)
                  ])]),
                  title: a(() => [
                    g(u(b.filename), 1)
                  ]),
                  subtitle: a(() => [
                    g(u(F(b.size_mb || b.size)), 1)
                  ]),
                  details: a(() => {
                    var z, D;
                    return [
                      b.sha256 || b.sha256_hash ? (t(), p(ee, {
                        key: 0,
                        label: "SHA256:",
                        value: (b.sha256 || b.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : i("", !0),
                      d(ee, {
                        label: "Used in:",
                        value: Y(b)
                      }, null, 8, ["value"]),
                      b.source_url || (z = b.sources) != null && z[0] ? (t(), p(ee, {
                        key: 1,
                        label: "Source URL:",
                        value: b.source_url || ((D = b.sources) == null ? void 0 : D[0])
                      }, null, 8, ["value"])) : (t(), p(ee, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: a(() => [...C[7] || (C[7] = [
                          g("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: a(() => [
                    d(A, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (z) => N(b)
                    }, {
                      default: a(() => [...C[8] || (C[8] = [
                        g(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b.sha256 || b.sha256_hash ? (t(), p(A, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (z) => P(b.sha256 || b.sha256_hash)
                    }, {
                      default: a(() => [...C[9] || (C[9] = [
                        g(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : i("", !0),
                    d(A, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (z) => S(b)
                    }, {
                      default: a(() => [...C[10] || (C[10] = [
                        g(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : i("", !0),
            k.value.length ? (t(), p(oe, {
              key: 2,
              title: "LORAS",
              count: k.value.length
            }, {
              default: a(() => [
                (t(!0), n(W, null, J(k.value, (b) => (t(), p(ne, {
                  key: b.sha256 || b.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...C[11] || (C[11] = [
                    g("📦", -1)
                  ])]),
                  title: a(() => [
                    g(u(b.filename), 1)
                  ]),
                  subtitle: a(() => [
                    g(u(F(b.size_mb || b.size)), 1)
                  ]),
                  details: a(() => {
                    var z, D;
                    return [
                      b.sha256 || b.sha256_hash ? (t(), p(ee, {
                        key: 0,
                        label: "SHA256:",
                        value: (b.sha256 || b.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : i("", !0),
                      d(ee, {
                        label: "Used in:",
                        value: Y(b)
                      }, null, 8, ["value"]),
                      b.source_url || (z = b.sources) != null && z[0] ? (t(), p(ee, {
                        key: 1,
                        label: "Source URL:",
                        value: b.source_url || ((D = b.sources) == null ? void 0 : D[0])
                      }, null, 8, ["value"])) : (t(), p(ee, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: a(() => [...C[12] || (C[12] = [
                          g("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: a(() => [
                    d(A, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (z) => N(b)
                    }, {
                      default: a(() => [...C[13] || (C[13] = [
                        g(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b.sha256 || b.sha256_hash ? (t(), p(A, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (z) => P(b.sha256 || b.sha256_hash)
                    }, {
                      default: a(() => [...C[14] || (C[14] = [
                        g(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : i("", !0),
                    d(A, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (z) => S(b)
                    }, {
                      default: a(() => [...C[15] || (C[15] = [
                        g(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : i("", !0),
            V.value.length ? (t(), p(oe, {
              key: 3,
              title: "OTHER",
              count: V.value.length
            }, {
              default: a(() => [
                (t(!0), n(W, null, J(V.value, (b) => (t(), p(ne, {
                  key: b.sha256 || b.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...C[16] || (C[16] = [
                    g("📦", -1)
                  ])]),
                  title: a(() => [
                    g(u(b.filename), 1)
                  ]),
                  subtitle: a(() => [
                    g(u(F(b.size_mb || b.size)), 1)
                  ]),
                  details: a(() => [
                    d(ee, {
                      label: "Type:",
                      value: b.type
                    }, null, 8, ["value"]),
                    b.sha256 || b.sha256_hash ? (t(), p(ee, {
                      key: 0,
                      label: "SHA256:",
                      value: (b.sha256 || b.sha256_hash).substring(0, 16) + "...",
                      mono: !0,
                      "value-variant": "hash"
                    }, null, 8, ["value"])) : i("", !0),
                    d(ee, {
                      label: "Used in:",
                      value: Y(b)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    d(A, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (z) => N(b)
                    }, {
                      default: a(() => [...C[17] || (C[17] = [
                        g(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b.sha256 || b.sha256_hash ? (t(), p(A, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (z) => P(b.sha256 || b.sha256_hash)
                    }, {
                      default: a(() => [...C[18] || (C[18] = [
                        g(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : i("", !0),
                    d(A, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (z) => S(b)
                    }, {
                      default: a(() => [...C[19] || (C[19] = [
                        g(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : i("", !0),
            w.value.length ? i("", !0) : (t(), p(ge, {
              key: 4,
              icon: "📭",
              message: x.value ? `No models match '${x.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      d(Ue, {
        show: h.value,
        title: "About Workspace Model Index",
        onClose: C[2] || (C[2] = (b) => h.value = !1)
      }, {
        content: a(() => [...C[20] || (C[20] = [
          o("p", null, [
            g(" Content-addressable model storage shared across "),
            o("strong", null, "all environments"),
            g(". Models are deduplicated by SHA256 hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Ys = /* @__PURE__ */ T(Js, [["__scopeId", "data-v-5a24af01"]]), Xs = { key: 0 }, Zs = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, Qs = {
  key: 2,
  style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" }
}, en = /* @__PURE__ */ O({
  __name: "NodesSection",
  setup(e) {
    const { getNodes: l, installNode: s, updateNode: r, uninstallNode: c } = ue(), x = L({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0
    }), h = L(!1), y = L(null), m = L(""), w = L(!1), U = B(() => {
      if (!m.value.trim()) return x.value.nodes;
      const I = m.value.toLowerCase();
      return x.value.nodes.filter(
        (_) => {
          var v, C;
          return _.name.toLowerCase().includes(I) || ((v = _.description) == null ? void 0 : v.toLowerCase().includes(I)) || ((C = _.repository) == null ? void 0 : C.toLowerCase().includes(I));
        }
      );
    }), k = B(
      () => U.value.filter((I) => I.installed)
    ), V = B(
      () => U.value.filter((I) => !I.installed)
    );
    function F(I) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown"
      }[I] || I;
    }
    function Y(I) {
      return !I.used_in_workflows || I.used_in_workflows.length === 0 ? "Not used in any workflows" : I.used_in_workflows.length === 1 ? I.used_in_workflows[0] : `${I.used_in_workflows.length} workflows`;
    }
    function P(I) {
      window.open(I, "_blank");
    }
    async function N(I) {
      if (confirm(`Install node "${I}"?

This will download and install the node from its repository.`))
        try {
          h.value = !0;
          const _ = await s(I);
          _.status === "success" ? (alert(`Node "${I}" installed successfully!`), await X()) : alert(`Failed to install node: ${_.message || "Unknown error"}`);
        } catch (_) {
          alert(`Error installing node: ${_ instanceof Error ? _.message : "Unknown error"}`);
        } finally {
          h.value = !1;
        }
    }
    async function S(I) {
      if (confirm(`Check for updates for "${I}"?`))
        try {
          h.value = !0;
          const _ = await r(I);
          _.status === "success" ? (alert(`Node "${I}" is up to date or has been updated!`), await X()) : alert(`Update check failed: ${_.message || "Unknown error"}`);
        } catch (_) {
          alert(`Error checking for updates: ${_ instanceof Error ? _.message : "Unknown error"}`);
        } finally {
          h.value = !1;
        }
    }
    async function M(I) {
      if (confirm(`Uninstall node "${I}"?

This will remove the node from this environment.`))
        try {
          h.value = !0;
          const _ = await c(I);
          _.status === "success" ? (alert(`Node "${I}" uninstalled successfully!`), await X()) : alert(`Failed to uninstall node: ${_.message || "Unknown error"}`);
        } catch (_) {
          alert(`Error uninstalling node: ${_ instanceof Error ? _.message : "Unknown error"}`);
        } finally {
          h.value = !1;
        }
    }
    async function X() {
      h.value = !0, y.value = null;
      try {
        x.value = await l();
      } catch (I) {
        y.value = I instanceof Error ? I.message : "Failed to load nodes";
      } finally {
        h.value = !1;
      }
    }
    return re(X), (I, _) => (t(), n(W, null, [
      d(ve, null, {
        header: a(() => [
          d(he, {
            title: "NODES (GIT-TRACKED)",
            "show-info": !0,
            onInfoClick: _[0] || (_[0] = (v) => w.value = !0)
          })
        ]),
        search: a(() => [
          d(Re, {
            modelValue: m.value,
            "onUpdate:modelValue": _[1] || (_[1] = (v) => m.value = v),
            placeholder: "🔍 Search git-tracked custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          h.value ? (t(), p(xe, {
            key: 0,
            message: "Loading git-tracked nodes..."
          })) : y.value ? (t(), p(Ce, {
            key: 1,
            message: y.value,
            retry: !0,
            onRetry: X
          }, null, 8, ["message"])) : (t(), n(W, { key: 2 }, [
            x.value.total_count ? (t(), p(Ee, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                g(" Total: " + u(x.value.total_count) + " nodes • " + u(x.value.installed_count) + " installed • " + u(x.value.missing_count) + " missing ", 1)
              ]),
              _: 1
            })) : i("", !0),
            k.value.length ? (t(), p(oe, {
              key: 1,
              title: "INSTALLED",
              count: k.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: a(() => [
                (t(!0), n(W, null, J(k.value, (v) => (t(), p(ne, {
                  key: v.name,
                  status: "synced"
                }, {
                  icon: a(() => [..._[4] || (_[4] = [
                    g("📦", -1)
                  ])]),
                  title: a(() => [
                    g(u(v.name), 1)
                  ]),
                  subtitle: a(() => [
                    v.version ? (t(), n("span", Xs, "v" + u(v.version), 1)) : (t(), n("span", Zs, "version unknown")),
                    v.source ? (t(), n("span", Qs, " • " + u(F(v.source)), 1)) : i("", !0)
                  ]),
                  details: a(() => [
                    v.description ? (t(), p(ee, {
                      key: 0,
                      label: "Description:",
                      value: v.description
                    }, null, 8, ["value"])) : i("", !0),
                    v.repository ? (t(), p(ee, {
                      key: 1,
                      label: "Repository:",
                      value: v.repository
                    }, null, 8, ["value"])) : i("", !0),
                    d(ee, {
                      label: "Used by:",
                      value: Y(v)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    v.repository ? (t(), p(A, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (C) => P(v.repository)
                    }, {
                      default: a(() => [..._[5] || (_[5] = [
                        g(" View Repository ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : i("", !0),
                    v.source === "registry" ? (t(), p(A, {
                      key: 1,
                      variant: "secondary",
                      size: "xs",
                      onClick: (C) => S(v.name)
                    }, {
                      default: a(() => [..._[6] || (_[6] = [
                        g(" Check for Updates ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : i("", !0),
                    v.source !== "unknown" ? (t(), p(A, {
                      key: 2,
                      variant: "destructive",
                      size: "xs",
                      onClick: (C) => M(v.name)
                    }, {
                      default: a(() => [..._[7] || (_[7] = [
                        g(" Uninstall ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : i("", !0)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : i("", !0),
            V.value.length ? (t(), p(oe, {
              key: 2,
              title: "MISSING",
              count: V.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: a(() => [
                (t(!0), n(W, null, J(V.value, (v) => (t(), p(ne, {
                  key: v.name,
                  status: "missing"
                }, {
                  icon: a(() => [..._[8] || (_[8] = [
                    g("⚠", -1)
                  ])]),
                  title: a(() => [
                    g(u(v.name), 1)
                  ]),
                  subtitle: a(() => [..._[9] || (_[9] = [
                    o("span", { style: { color: "var(--cg-color-warning)" } }, "Not installed", -1)
                  ])]),
                  details: a(() => [
                    v.description ? (t(), p(ee, {
                      key: 0,
                      label: "Description:",
                      value: v.description
                    }, null, 8, ["value"])) : i("", !0),
                    v.repository ? (t(), p(ee, {
                      key: 1,
                      label: "Repository:",
                      value: v.repository
                    }, null, 8, ["value"])) : i("", !0),
                    d(ee, {
                      label: "Required by:",
                      value: Y(v)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    v.download_url ? (t(), p(A, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (C) => N(v.name)
                    }, {
                      default: a(() => [..._[10] || (_[10] = [
                        g(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : i("", !0),
                    v.repository ? (t(), p(A, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (C) => P(v.repository)
                    }, {
                      default: a(() => [..._[11] || (_[11] = [
                        g(" View Repository ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : i("", !0)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : i("", !0),
            !k.value.length && !V.value.length ? (t(), p(ge, {
              key: 3,
              icon: "📭",
              message: m.value ? `No nodes match '${m.value}'` : "No git-tracked nodes found."
            }, null, 8, ["message"])) : i("", !0)
          ], 64))
        ]),
        _: 1
      }),
      d(Ue, {
        show: w.value,
        title: "About Git-Tracked Nodes",
        onClose: _[3] || (_[3] = (v) => w.value = !1)
      }, {
        content: a(() => [..._[12] || (_[12] = [
          o("p", null, " These are custom nodes tracked in your git repository. They are version-controlled and synced across environments. ", -1),
          o("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            o("strong", null, "Installed:"),
            g(" Nodes currently available in this environment"),
            o("br"),
            o("strong", null, "Missing:"),
            g(" Nodes referenced in workflows but not yet installed ")
          ], -1)
        ])]),
        actions: a(() => [
          d(A, {
            variant: "primary",
            onClick: _[2] || (_[2] = (v) => w.value = !1)
          }, {
            default: a(() => [..._[13] || (_[13] = [
              g(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), tn = /* @__PURE__ */ T(en, [["__scopeId", "data-v-c480e2c1"]]), on = { class: "remote-url-display" }, an = ["title"], sn = ["title"], nn = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, ln = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, rn = /* @__PURE__ */ O({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(e) {
    const l = e, s = L(!1), r = B(() => {
      if (l.url.length <= l.maxLength)
        return l.url;
      const x = l.url.slice(0, Math.floor(l.maxLength * 0.6)), h = l.url.slice(-Math.floor(l.maxLength * 0.3));
      return `${x}...${h}`;
    });
    async function c() {
      try {
        await navigator.clipboard.writeText(l.url), s.value = !0, setTimeout(() => {
          s.value = !1;
        }, 2e3);
      } catch (x) {
        console.error("Failed to copy URL:", x);
      }
    }
    return (x, h) => (t(), n("div", on, [
      o("span", {
        class: "url-text",
        title: e.url
      }, u(r.value), 9, an),
      o("button", {
        class: G(["copy-btn", { copied: s.value }]),
        onClick: c,
        title: s.value ? "Copied!" : "Copy URL"
      }, [
        s.value ? (t(), n("svg", ln, [...h[1] || (h[1] = [
          o("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (t(), n("svg", nn, [...h[0] || (h[0] = [
          o("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          o("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, sn)
    ]));
  }
}), nt = /* @__PURE__ */ T(rn, [["__scopeId", "data-v-7768a58d"]]), cn = { class: "remote-title" }, dn = {
  key: 0,
  class: "default-badge"
}, un = {
  key: 1,
  class: "sync-badge"
}, mn = {
  key: 0,
  class: "ahead"
}, fn = {
  key: 1,
  class: "behind"
}, gn = {
  key: 0,
  class: "tracking-info"
}, vn = /* @__PURE__ */ O({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    trackingBranch: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove"],
  setup(e, { emit: l }) {
    const s = e, r = B(() => s.fetchingRemote === s.remote.name), c = B(() => s.remote.is_default), x = B(() => !!s.trackingBranch);
    function h(y) {
      const m = new Date(y), U = (/* @__PURE__ */ new Date()).getTime() - m.getTime(), k = Math.floor(U / 6e4);
      if (k < 1) return "Just now";
      if (k < 60) return `${k}m ago`;
      const V = Math.floor(k / 60);
      if (V < 24) return `${V}h ago`;
      const F = Math.floor(V / 24);
      return F < 7 ? `${F}d ago` : m.toLocaleDateString();
    }
    return (y, m) => (t(), p(ne, {
      status: c.value ? "synced" : void 0
    }, {
      icon: a(() => [
        g(u(c.value ? "🔗" : "🌐"), 1)
      ]),
      title: a(() => [
        o("div", cn, [
          o("span", null, u(e.remote.name), 1),
          c.value ? (t(), n("span", dn, "DEFAULT")) : i("", !0),
          e.syncStatus ? (t(), n("span", un, [
            e.syncStatus.ahead > 0 ? (t(), n("span", mn, "↑" + u(e.syncStatus.ahead), 1)) : i("", !0),
            e.syncStatus.behind > 0 ? (t(), n("span", fn, "↓" + u(e.syncStatus.behind), 1)) : i("", !0)
          ])) : i("", !0)
        ])
      ]),
      subtitle: a(() => [
        x.value ? (t(), n("span", gn, " Tracking: " + u(e.trackingBranch), 1)) : i("", !0)
      ]),
      details: a(() => {
        var w;
        return [
          d(ee, { label: "Fetch:" }, {
            default: a(() => [
              d(nt, {
                url: e.remote.fetch_url
              }, null, 8, ["url"])
            ]),
            _: 1
          }),
          e.remote.push_url !== e.remote.fetch_url ? (t(), p(ee, {
            key: 0,
            label: "Push:"
          }, {
            default: a(() => [
              d(nt, {
                url: e.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : i("", !0),
          (w = e.syncStatus) != null && w.last_fetch ? (t(), p(ee, {
            key: 1,
            label: "Last Fetch:"
          }, {
            default: a(() => [
              o("span", null, u(h(e.syncStatus.last_fetch)), 1)
            ]),
            _: 1
          })) : i("", !0)
        ];
      }),
      actions: a(() => [
        d(A, {
          variant: "primary",
          size: "xs",
          loading: r.value,
          onClick: m[0] || (m[0] = (w) => y.$emit("fetch", e.remote.name))
        }, {
          default: a(() => [...m[3] || (m[3] = [
            g(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        d(A, {
          variant: "secondary",
          size: "xs",
          onClick: m[1] || (m[1] = (w) => y.$emit("edit", e.remote.name))
        }, {
          default: a(() => [...m[4] || (m[4] = [
            g(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        c.value ? i("", !0) : (t(), p(A, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: m[2] || (m[2] = (w) => y.$emit("remove", e.remote.name))
        }, {
          default: a(() => [...m[5] || (m[5] = [
            g(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["status"]));
  }
}), hn = /* @__PURE__ */ T(vn, [["__scopeId", "data-v-17362e45"]]), pn = ["for"], yn = {
  key: 0,
  class: "base-form-field-required"
}, bn = { class: "base-form-field-input" }, wn = {
  key: 1,
  class: "base-form-field-error"
}, kn = {
  key: 2,
  class: "base-form-field-hint"
}, _n = /* @__PURE__ */ O({
  __name: "BaseFormField",
  props: {
    label: {},
    error: {},
    hint: {},
    required: { type: Boolean, default: !1 },
    fullWidth: { type: Boolean, default: !0 },
    id: {}
  },
  setup(e) {
    const l = e, s = B(() => l.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (r, c) => (t(), n("div", {
      class: G(["base-form-field", { "full-width": e.fullWidth }])
    }, [
      e.label ? (t(), n("label", {
        key: 0,
        for: s.value,
        class: "base-form-field-label"
      }, [
        g(u(e.label) + " ", 1),
        e.required ? (t(), n("span", yn, "*")) : i("", !0)
      ], 8, pn)) : i("", !0),
      o("div", bn, [
        q(r.$slots, "default", {}, void 0, !0)
      ]),
      e.error ? (t(), n("span", wn, u(e.error), 1)) : e.hint ? (t(), n("span", kn, u(e.hint), 1)) : i("", !0)
    ], 2));
  }
}), Ye = /* @__PURE__ */ T(_n, [["__scopeId", "data-v-9a1cf296"]]), $n = ["type", "value", "placeholder", "disabled"], xn = {
  key: 0,
  class: "base-input-error"
}, Cn = /* @__PURE__ */ O({
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
  setup(e) {
    return (l, s) => (t(), n("div", {
      class: G(["base-input-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      o("input", {
        type: e.type,
        value: e.modelValue,
        placeholder: e.placeholder,
        disabled: e.disabled,
        class: G(["base-input", { error: !!e.error }]),
        onInput: s[0] || (s[0] = (r) => l.$emit("update:modelValue", r.target.value)),
        onKeyup: [
          s[1] || (s[1] = $e((r) => l.$emit("enter"), ["enter"])),
          s[2] || (s[2] = $e((r) => l.$emit("escape"), ["escape"]))
        ]
      }, null, 42, $n),
      e.error ? (t(), n("span", xn, u(e.error), 1)) : i("", !0)
    ], 2));
  }
}), Xe = /* @__PURE__ */ T(Cn, [["__scopeId", "data-v-9ba02cdc"]]), In = { class: "remote-form" }, Sn = { class: "form-header" }, En = { class: "form-body" }, Ln = {
  key: 0,
  class: "form-error"
}, zn = { class: "form-actions" }, Rn = /* @__PURE__ */ O({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(e, { emit: l }) {
    const s = e, r = l, c = L({
      name: s.remoteName,
      fetchUrl: s.fetchUrl,
      pushUrl: s.pushUrl
    }), x = L(!1), h = L(null);
    vt(() => [s.remoteName, s.fetchUrl, s.pushUrl], () => {
      c.value = {
        name: s.remoteName,
        fetchUrl: s.fetchUrl,
        pushUrl: s.pushUrl
      };
    });
    const y = B(() => c.value.name.trim() !== "" && c.value.fetchUrl.trim() !== "");
    async function m() {
      if (!(!y.value || x.value)) {
        h.value = null, x.value = !0;
        try {
          r("submit", c.value);
        } catch (w) {
          h.value = w instanceof Error ? w.message : "Failed to submit form";
        } finally {
          x.value = !1;
        }
      }
    }
    return (w, U) => (t(), n("div", In, [
      o("div", Sn, [
        d(Te, null, {
          default: a(() => [
            g(u(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      o("div", En, [
        d(Ye, {
          label: "Remote Name",
          required: ""
        }, {
          default: a(() => [
            d(Xe, {
              modelValue: c.value.name,
              "onUpdate:modelValue": U[0] || (U[0] = (k) => c.value.name = k),
              disabled: e.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        d(Ye, {
          label: "Fetch URL",
          required: ""
        }, {
          default: a(() => [
            d(Xe, {
              modelValue: c.value.fetchUrl,
              "onUpdate:modelValue": U[1] || (U[1] = (k) => c.value.fetchUrl = k),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        d(Ye, { label: "Push URL (optional)" }, {
          default: a(() => [
            d(Xe, {
              modelValue: c.value.pushUrl,
              "onUpdate:modelValue": U[2] || (U[2] = (k) => c.value.pushUrl = k),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        h.value ? (t(), n("div", Ln, u(h.value), 1)) : i("", !0)
      ]),
      o("div", zn, [
        d(A, {
          variant: "primary",
          size: "md",
          disabled: !y.value,
          loading: x.value,
          onClick: m
        }, {
          default: a(() => [
            g(u(e.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        d(A, {
          variant: "ghost",
          size: "md",
          onClick: U[3] || (U[3] = (k) => w.$emit("cancel"))
        }, {
          default: a(() => [...U[4] || (U[4] = [
            g(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Un = /* @__PURE__ */ T(Rn, [["__scopeId", "data-v-56021b18"]]), Mn = { key: 0 }, Nn = /* @__PURE__ */ O({
  __name: "RemotesSection",
  setup(e) {
    const {
      getRemotes: l,
      addRemote: s,
      removeRemote: r,
      updateRemoteUrl: c,
      fetchRemote: x,
      getRemoteSyncStatus: h
    } = ue(), y = L([]), m = L(null), w = L({}), U = L(!1), k = L(null), V = L(""), F = L(!1), Y = L(null), P = L(!1), N = L("add"), S = L({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), M = B(() => {
      if (!V.value.trim()) return y.value;
      const R = V.value.toLowerCase();
      return y.value.filter(
        (E) => E.name.toLowerCase().includes(R) || E.fetch_url.toLowerCase().includes(R) || E.push_url.toLowerCase().includes(R)
      );
    });
    function X(R) {
      var E;
      return ((E = m.value) == null ? void 0 : E.remote) === R;
    }
    async function I() {
      U.value = !0, k.value = null;
      try {
        const R = await l();
        y.value = R.remotes, m.value = R.current_branch_tracking || null, await Promise.all(
          R.remotes.map(async (E) => {
            const H = await h(E.name);
            H && (w.value[E.name] = H);
          })
        );
      } catch (R) {
        k.value = R instanceof Error ? R.message : "Failed to load remotes";
      } finally {
        U.value = !1;
      }
    }
    function _() {
      N.value = "add", S.value = { name: "", fetchUrl: "", pushUrl: "" }, P.value = !0;
    }
    function v(R) {
      const E = y.value.find((H) => H.name === R);
      E && (N.value = "edit", S.value = {
        name: E.name,
        fetchUrl: E.fetch_url,
        pushUrl: E.push_url
      }, P.value = !0);
    }
    async function C(R) {
      try {
        N.value === "add" ? await s(R.name, R.fetchUrl) : await c(R.name, R.fetchUrl, R.pushUrl || void 0), P.value = !1, await I();
      } catch (E) {
        k.value = E instanceof Error ? E.message : "Operation failed";
      }
    }
    function b() {
      P.value = !1, S.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function z(R) {
      Y.value = R;
      try {
        await x(R);
        const E = await h(R);
        E && (w.value[R] = E);
      } catch (E) {
        k.value = E instanceof Error ? E.message : "Fetch failed";
      } finally {
        Y.value = null;
      }
    }
    async function D(R) {
      if (confirm(`Remove remote "${R}"?`))
        try {
          await r(R), await I();
        } catch (E) {
          k.value = E instanceof Error ? E.message : "Failed to remove remote";
        }
    }
    function se() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    return re(I), (R, E) => (t(), n(W, null, [
      d(ve, null, {
        header: a(() => [
          d(he, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: E[0] || (E[0] = (H) => F.value = !0)
          }, {
            actions: a(() => [
              P.value ? i("", !0) : (t(), p(A, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: _
              }, {
                default: a(() => [...E[3] || (E[3] = [
                  g(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          P.value ? i("", !0) : (t(), p(Re, {
            key: 0,
            modelValue: V.value,
            "onUpdate:modelValue": E[1] || (E[1] = (H) => V.value = H),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: a(() => [
          U.value ? (t(), p(xe, {
            key: 0,
            message: "Loading remotes..."
          })) : k.value ? (t(), p(Ce, {
            key: 1,
            message: k.value,
            retry: !0,
            onRetry: I
          }, null, 8, ["message"])) : (t(), n(W, { key: 2 }, [
            P.value ? (t(), p(Un, {
              key: 0,
              mode: N.value,
              "remote-name": S.value.name,
              "fetch-url": S.value.fetchUrl,
              "push-url": S.value.pushUrl,
              onSubmit: C,
              onCancel: b
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : i("", !0),
            y.value.length && !P.value ? (t(), p(Ee, {
              key: 1,
              variant: "compact"
            }, {
              default: a(() => [
                g(" Total: " + u(y.value.length) + " remote" + u(y.value.length !== 1 ? "s" : "") + " ", 1),
                m.value ? (t(), n("span", Mn, " • Tracking: " + u(m.value.remote) + "/" + u(m.value.branch), 1)) : i("", !0)
              ]),
              _: 1
            })) : i("", !0),
            M.value.length && !P.value ? (t(), p(oe, {
              key: 2,
              title: "REMOTES",
              count: M.value.length
            }, {
              default: a(() => [
                (t(!0), n(W, null, J(M.value, (H) => {
                  var ie;
                  return t(), p(hn, {
                    key: H.name,
                    remote: H,
                    "sync-status": w.value[H.name],
                    "tracking-branch": X(H.name) ? (ie = m.value) == null ? void 0 : ie.branch : void 0,
                    "fetching-remote": Y.value,
                    onFetch: z,
                    onEdit: v,
                    onRemove: D
                  }, null, 8, ["remote", "sync-status", "tracking-branch", "fetching-remote"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["count"])) : i("", !0),
            !M.value.length && !P.value ? (t(), p(ge, {
              key: 3,
              icon: "🌐",
              message: V.value ? `No remotes match '${V.value}'` : "No remotes configured."
            }, {
              actions: a(() => [
                d(A, {
                  variant: "primary",
                  onClick: _
                }, {
                  default: a(() => [...E[4] || (E[4] = [
                    g(" Add Your First Remote ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["message"])) : i("", !0)
          ], 64))
        ]),
        _: 1
      }),
      d(Ue, {
        show: F.value,
        title: "About Git Remotes",
        onClose: E[2] || (E[2] = (H) => F.value = !1)
      }, {
        content: a(() => [...E[5] || (E[5] = [
          o("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          o("p", null, [
            g(" The "),
            o("strong", null, '"origin"'),
            g(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: a(() => [
          d(A, {
            variant: "link",
            onClick: se
          }, {
            default: a(() => [...E[6] || (E[6] = [
              g(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Dn = /* @__PURE__ */ T(Nn, [["__scopeId", "data-v-a75719bb"]]), Vn = { class: "setting-info" }, Bn = { class: "setting-label" }, On = {
  key: 0,
  class: "required-marker"
}, Tn = {
  key: 0,
  class: "setting-description"
}, An = { class: "setting-control" }, Wn = /* @__PURE__ */ O({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (l, s) => (t(), n("div", {
      class: G(["setting-row", { disabled: e.disabled }])
    }, [
      o("div", Vn, [
        o("div", Bn, [
          g(u(e.label) + " ", 1),
          e.required ? (t(), n("span", On, "*")) : i("", !0)
        ]),
        e.description ? (t(), n("div", Tn, u(e.description), 1)) : i("", !0)
      ]),
      o("div", An, [
        q(l.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), te = /* @__PURE__ */ T(Wn, [["__scopeId", "data-v-cb5d236c"]]), Fn = { class: "toggle" }, Pn = ["checked", "disabled"], Gn = /* @__PURE__ */ O({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (l, s) => (t(), n("label", Fn, [
      o("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: s[0] || (s[0] = (r) => l.$emit("update:modelValue", r.target.checked)),
        class: "toggle-input"
      }, null, 40, Pn),
      s[1] || (s[1] = o("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), fe = /* @__PURE__ */ T(Gn, [["__scopeId", "data-v-71c0f550"]]), Hn = { class: "settings-section" }, Kn = { class: "settings-section" }, jn = { class: "settings-section" }, qn = { class: "settings-section" }, Jn = { class: "settings-section" }, Yn = { class: "settings-section" }, Xn = /* @__PURE__ */ O({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const l = L(!1), s = L(null), r = L(null), c = L({
      git: {
        userName: "",
        userEmail: "",
        defaultBranch: "main",
        autoCommit: !1
      },
      paths: {
        workspaceRoot: "/path/to/workspace",
        environmentsDir: "environments",
        modelsDir: "models"
      },
      modelIndex: {
        autoIndex: !0,
        indexOnStartup: !0,
        scanInterval: 30,
        deepScan: !1
      },
      environment: {
        defaultComfyUIVersion: "latest",
        pythonVersion: "3.11",
        autoCreateVenv: !0,
        autoInstallDeps: !0
      },
      ui: {
        theme: "comfy",
        compactMode: !1,
        showFileExtensions: !0,
        confirmDestructive: !0
      },
      advanced: {
        debugMode: !1,
        maxHistoryItems: 50,
        cacheDuration: 300
      }
    }), x = L(null), h = B(() => x.value ? JSON.stringify(c.value) !== JSON.stringify(x.value) : !1), y = [
      { label: "15 minutes", value: 15 },
      { label: "30 minutes", value: 30 },
      { label: "1 hour", value: 60 },
      { label: "2 hours", value: 120 },
      { label: "Manual only", value: 0 }
    ], m = [
      { label: "Latest", value: "latest" },
      { label: "Stable", value: "stable" },
      { label: "v0.2.0", value: "v0.2.0" },
      { label: "v0.1.0", value: "v0.1.0" }
    ], w = [
      { label: "Python 3.11", value: "3.11" },
      { label: "Python 3.10", value: "3.10" },
      { label: "Python 3.9", value: "3.9" }
    ], U = [
      { label: "Comfy (Default)", value: "comfy" },
      { label: "Terminal", value: "terminal" },
      { label: "Dark", value: "dark" }
    ], k = [
      { label: "25", value: 25 },
      { label: "50", value: 50 },
      { label: "100", value: 100 },
      { label: "200", value: 200 }
    ], V = [
      { label: "1 minute", value: 60 },
      { label: "5 minutes", value: 300 },
      { label: "10 minutes", value: 600 },
      { label: "No cache", value: 0 }
    ];
    async function F() {
      l.value = !0, s.value = null;
      try {
        await new Promise((N) => setTimeout(N, 500)), x.value = JSON.parse(JSON.stringify(c.value));
      } catch (N) {
        s.value = N instanceof Error ? N.message : "Failed to load settings";
      } finally {
        l.value = !1;
      }
    }
    async function Y() {
      r.value = null;
      try {
        await new Promise((N) => setTimeout(N, 300)), x.value = JSON.parse(JSON.stringify(c.value)), r.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          r.value = null;
        }, 3e3);
      } catch (N) {
        r.value = {
          type: "error",
          message: N instanceof Error ? N.message : "Failed to save settings"
        };
      }
    }
    function P() {
      x.value && (c.value = JSON.parse(JSON.stringify(x.value)), r.value = null);
    }
    return re(F), (N, S) => (t(), p(ve, null, {
      header: a(() => [
        d(he, { title: "WORKSPACE SETTINGS" }, {
          actions: a(() => [
            d(A, {
              variant: "primary",
              size: "sm",
              disabled: !h.value,
              onClick: Y
            }, {
              default: a(() => [...S[19] || (S[19] = [
                g(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            h.value ? (t(), p(A, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: P
            }, {
              default: a(() => [...S[20] || (S[20] = [
                g(" Reset ", -1)
              ])]),
              _: 1
            })) : i("", !0)
          ]),
          _: 1
        })
      ]),
      content: a(() => [
        l.value ? (t(), p(xe, {
          key: 0,
          message: "Loading workspace settings..."
        })) : s.value ? (t(), p(Ce, {
          key: 1,
          message: s.value,
          retry: !0,
          onRetry: F
        }, null, 8, ["message"])) : (t(), n(W, { key: 2 }, [
          d(oe, { title: "GIT CONFIGURATION" }, {
            default: a(() => [
              o("div", Hn, [
                d(te, {
                  label: "User Name",
                  description: "Your name for git commits",
                  required: ""
                }, {
                  default: a(() => [
                    d(Be, {
                      modelValue: c.value.git.userName,
                      "onUpdate:modelValue": S[0] || (S[0] = (M) => c.value.git.userName = M),
                      placeholder: "John Doe",
                      style: { minWidth: "250px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                d(te, {
                  label: "User Email",
                  description: "Your email for git commits",
                  required: ""
                }, {
                  default: a(() => [
                    d(Be, {
                      modelValue: c.value.git.userEmail,
                      "onUpdate:modelValue": S[1] || (S[1] = (M) => c.value.git.userEmail = M),
                      placeholder: "john@example.com",
                      style: { minWidth: "250px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                d(te, {
                  label: "Default Branch",
                  description: "Default branch name for new environments"
                }, {
                  default: a(() => [
                    d(Be, {
                      modelValue: c.value.git.defaultBranch,
                      "onUpdate:modelValue": S[2] || (S[2] = (M) => c.value.git.defaultBranch = M),
                      placeholder: "main",
                      style: { minWidth: "150px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                d(te, {
                  label: "Auto Commit",
                  description: "Automatically commit workflow changes"
                }, {
                  default: a(() => [
                    d(fe, {
                      modelValue: c.value.git.autoCommit,
                      "onUpdate:modelValue": S[3] || (S[3] = (M) => c.value.git.autoCommit = M)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          d(oe, { title: "WORKSPACE PATHS" }, {
            default: a(() => [
              o("div", Kn, [
                d(te, {
                  label: "Workspace Root",
                  description: "Root directory of this workspace (read-only)"
                }, {
                  default: a(() => [
                    d(Oe, {
                      mono: "",
                      truncate: ""
                    }, {
                      default: a(() => [
                        g(u(c.value.paths.workspaceRoot), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                d(te, {
                  label: "Environments Directory",
                  description: "Where environment folders are stored"
                }, {
                  default: a(() => [
                    d(Oe, {
                      mono: "",
                      truncate: ""
                    }, {
                      default: a(() => [
                        g(u(c.value.paths.environmentsDir), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                d(te, {
                  label: "Models Directory",
                  description: "Where model files are indexed"
                }, {
                  default: a(() => [
                    d(Oe, {
                      mono: "",
                      truncate: ""
                    }, {
                      default: a(() => [
                        g(u(c.value.paths.modelsDir), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          d(oe, { title: "MODEL INDEX" }, {
            default: a(() => [
              o("div", jn, [
                d(te, {
                  label: "Auto-Index Models",
                  description: "Automatically scan and index model files"
                }, {
                  default: a(() => [
                    d(fe, {
                      modelValue: c.value.modelIndex.autoIndex,
                      "onUpdate:modelValue": S[4] || (S[4] = (M) => c.value.modelIndex.autoIndex = M)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                d(te, {
                  label: "Index on Startup",
                  description: "Run model indexing when ComfyUI starts",
                  disabled: !c.value.modelIndex.autoIndex
                }, {
                  default: a(() => [
                    d(fe, {
                      modelValue: c.value.modelIndex.indexOnStartup,
                      "onUpdate:modelValue": S[5] || (S[5] = (M) => c.value.modelIndex.indexOnStartup = M),
                      disabled: !c.value.modelIndex.autoIndex
                    }, null, 8, ["modelValue", "disabled"])
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                d(te, {
                  label: "Scan Interval",
                  description: "How often to check for new models (minutes)",
                  disabled: !c.value.modelIndex.autoIndex
                }, {
                  default: a(() => [
                    d(_e, {
                      modelValue: c.value.modelIndex.scanInterval,
                      "onUpdate:modelValue": S[6] || (S[6] = (M) => c.value.modelIndex.scanInterval = M),
                      options: y,
                      disabled: !c.value.modelIndex.autoIndex,
                      style: { minWidth: "120px" }
                    }, null, 8, ["modelValue", "disabled"])
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                d(te, {
                  label: "Deep Scan",
                  description: "Use SHA256 hashing for model verification (slower)"
                }, {
                  default: a(() => [
                    d(fe, {
                      modelValue: c.value.modelIndex.deepScan,
                      "onUpdate:modelValue": S[7] || (S[7] = (M) => c.value.modelIndex.deepScan = M)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          d(oe, { title: "ENVIRONMENT DEFAULTS" }, {
            default: a(() => [
              o("div", qn, [
                d(te, {
                  label: "ComfyUI Version",
                  description: "Default ComfyUI version for new environments"
                }, {
                  default: a(() => [
                    d(_e, {
                      modelValue: c.value.environment.defaultComfyUIVersion,
                      "onUpdate:modelValue": S[8] || (S[8] = (M) => c.value.environment.defaultComfyUIVersion = M),
                      options: m,
                      placeholder: "Select version...",
                      style: { minWidth: "150px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                d(te, {
                  label: "Python Version",
                  description: "Python version for new virtual environments"
                }, {
                  default: a(() => [
                    d(_e, {
                      modelValue: c.value.environment.pythonVersion,
                      "onUpdate:modelValue": S[9] || (S[9] = (M) => c.value.environment.pythonVersion = M),
                      options: w,
                      style: { minWidth: "120px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                d(te, {
                  label: "Auto Create Virtualenv",
                  description: "Automatically create Python virtual environment"
                }, {
                  default: a(() => [
                    d(fe, {
                      modelValue: c.value.environment.autoCreateVenv,
                      "onUpdate:modelValue": S[10] || (S[10] = (M) => c.value.environment.autoCreateVenv = M)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                d(te, {
                  label: "Install Dependencies",
                  description: "Auto-install requirements.txt on environment creation"
                }, {
                  default: a(() => [
                    d(fe, {
                      modelValue: c.value.environment.autoInstallDeps,
                      "onUpdate:modelValue": S[11] || (S[11] = (M) => c.value.environment.autoInstallDeps = M)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          d(oe, { title: "UI PREFERENCES" }, {
            default: a(() => [
              o("div", Jn, [
                d(te, {
                  label: "Theme",
                  description: "Visual theme for the ComfyGit panel"
                }, {
                  default: a(() => [
                    d(_e, {
                      modelValue: c.value.ui.theme,
                      "onUpdate:modelValue": S[12] || (S[12] = (M) => c.value.ui.theme = M),
                      options: U,
                      style: { minWidth: "150px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                d(te, {
                  label: "Compact Mode",
                  description: "Use smaller spacing and fonts"
                }, {
                  default: a(() => [
                    d(fe, {
                      modelValue: c.value.ui.compactMode,
                      "onUpdate:modelValue": S[13] || (S[13] = (M) => c.value.ui.compactMode = M)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                d(te, {
                  label: "Show File Extensions",
                  description: "Display file extensions in workflow lists"
                }, {
                  default: a(() => [
                    d(fe, {
                      modelValue: c.value.ui.showFileExtensions,
                      "onUpdate:modelValue": S[14] || (S[14] = (M) => c.value.ui.showFileExtensions = M)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                d(te, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations"
                }, {
                  default: a(() => [
                    d(fe, {
                      modelValue: c.value.ui.confirmDestructive,
                      "onUpdate:modelValue": S[15] || (S[15] = (M) => c.value.ui.confirmDestructive = M)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          d(oe, { title: "ADVANCED" }, {
            default: a(() => [
              o("div", Yn, [
                d(te, {
                  label: "Debug Mode",
                  description: "Enable debug logging and verbose output"
                }, {
                  default: a(() => [
                    d(fe, {
                      modelValue: c.value.advanced.debugMode,
                      "onUpdate:modelValue": S[16] || (S[16] = (M) => c.value.advanced.debugMode = M)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                d(te, {
                  label: "Max History Items",
                  description: "Maximum number of commits to show in history"
                }, {
                  default: a(() => [
                    d(_e, {
                      modelValue: c.value.advanced.maxHistoryItems,
                      "onUpdate:modelValue": S[17] || (S[17] = (M) => c.value.advanced.maxHistoryItems = M),
                      options: k,
                      style: { minWidth: "100px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                d(te, {
                  label: "Cache Duration",
                  description: "How long to cache API responses (seconds)"
                }, {
                  default: a(() => [
                    d(_e, {
                      modelValue: c.value.advanced.cacheDuration,
                      "onUpdate:modelValue": S[18] || (S[18] = (M) => c.value.advanced.cacheDuration = M),
                      options: V,
                      style: { minWidth: "120px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          r.value ? (t(), p(Ee, {
            key: 0,
            variant: (r.value.type === "success", "compact")
          }, {
            default: a(() => [
              o("span", {
                style: tt({ color: r.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, u(r.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : i("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), Zn = /* @__PURE__ */ T(Xn, [["__scopeId", "data-v-74f65bd5"]]), Qn = { class: "log-filter-bar" }, el = { class: "log-filter-bar__options" }, tl = ["onClick"], ol = /* @__PURE__ */ O({
  __name: "LogFilterBar",
  props: {
    activeLevels: {}
  },
  emits: ["toggle", "clear"],
  setup(e, { emit: l }) {
    const s = e, r = l, c = ["ERROR", "WARNING", "INFO", "DEBUG"];
    function x(y) {
      return s.activeLevels.includes(y);
    }
    function h(y) {
      r("toggle", y);
    }
    return (y, m) => (t(), n("div", Qn, [
      m[1] || (m[1] = o("div", { class: "log-filter-bar__label" }, "FILTER:", -1)),
      o("div", el, [
        (t(), n(W, null, J(c, (w) => o("button", {
          key: w,
          class: G(["filter-option", { active: x(w) }]),
          onClick: (U) => h(w)
        }, u(w), 11, tl)), 64)),
        o("button", {
          class: "filter-option filter-option--clear",
          onClick: m[0] || (m[0] = (w) => y.$emit("clear"))
        }, " CLEAR ")
      ])
    ]));
  }
}), al = /* @__PURE__ */ T(ol, [["__scopeId", "data-v-9052edf8"]]), sl = { class: "log-list" }, nl = /* @__PURE__ */ O({
  __name: "LogList",
  setup(e) {
    return (l, s) => (t(), n("div", sl, [
      q(l.$slots, "default", {}, void 0, !0)
    ]));
  }
}), ll = /* @__PURE__ */ T(nl, [["__scopeId", "data-v-0061c330"]]), rl = { class: "log-level__icon" }, il = { class: "log-level__text" }, cl = /* @__PURE__ */ O({
  __name: "LogLevel",
  props: {
    level: {}
  },
  setup(e) {
    const l = e, s = B(() => `log-level--${l.level.toLowerCase()}`), r = B(() => {
      switch (l.level) {
        case "ERROR":
          return "✕";
        case "WARNING":
          return "!";
        case "INFO":
          return "→";
        case "DEBUG":
          return "·";
        default:
          return "·";
      }
    });
    return (c, x) => (t(), n("span", {
      class: G(["log-level", s.value])
    }, [
      o("span", rl, u(r.value), 1),
      o("span", il, u(e.level), 1)
    ], 2));
  }
}), dl = /* @__PURE__ */ T(cl, [["__scopeId", "data-v-8547c115"]]), ul = { class: "log-item__header" }, ml = { class: "log-item__timestamp" }, fl = {
  key: 0,
  class: "log-item__context"
}, gl = { class: "log-item__message" }, vl = /* @__PURE__ */ O({
  __name: "LogItem",
  props: {
    level: {},
    timestamp: {},
    message: {},
    context: {},
    clickable: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const s = e, r = B(() => `log-item--${s.level.toLowerCase()}`);
    return (c, x) => (t(), n("div", {
      class: G(["log-item", r.value, { clickable: e.clickable }]),
      onClick: x[0] || (x[0] = (h) => e.clickable && c.$emit("click"))
    }, [
      o("div", ul, [
        d(dl, { level: e.level }, null, 8, ["level"]),
        o("span", ml, u(e.timestamp), 1),
        e.context ? (t(), n("span", fl, u(e.context), 1)) : i("", !0)
      ]),
      o("div", gl, u(e.message), 1)
    ], 2));
  }
}), hl = /* @__PURE__ */ T(vl, [["__scopeId", "data-v-adb291b1"]]), pl = {
  key: 2,
  class: "load-more"
}, yl = /* @__PURE__ */ O({
  __name: "WorkspaceDebugSection",
  setup(e) {
    const { getWorkspaceLogs: l } = ue(), s = L([]), r = L(!1), c = L(null), x = L(!1), h = L(["ERROR", "WARNING", "INFO", "DEBUG"]), y = L(100), m = B(() => s.value.filter((I) => I.level === "ERROR").length), w = B(() => s.value.filter((I) => I.level === "WARNING").length), U = B(() => s.value.filter((I) => I.level === "INFO").length), k = B(() => s.value.filter((I) => I.level === "DEBUG").length), V = B(() => s.value.filter((I) => h.value.includes(I.level))), F = B(() => V.value.slice(0, y.value)), Y = B(() => V.value.length > y.value);
    function P(I) {
      const _ = h.value.indexOf(I);
      _ >= 0 ? h.value.splice(_, 1) : h.value.push(I);
    }
    function N() {
      h.value = ["ERROR", "WARNING", "INFO", "DEBUG"];
    }
    function S() {
      y.value += 100;
    }
    function M(I) {
      try {
        return new Date(I).toLocaleString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: !1
        });
      } catch {
        return I;
      }
    }
    async function X() {
      r.value = !0, c.value = null;
      try {
        s.value = await l(void 0, 500);
      } catch (I) {
        c.value = I instanceof Error ? I.message : "Failed to load workspace logs";
      } finally {
        r.value = !1;
      }
    }
    return re(X), (I, _) => (t(), n(W, null, [
      d(ve, null, {
        header: a(() => [
          d(he, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: _[0] || (_[0] = (v) => x.value = !0)
          })
        ]),
        content: a(() => [
          r.value ? (t(), p(xe, {
            key: 0,
            message: "Loading workspace logs..."
          })) : c.value ? (t(), p(Ce, {
            key: 1,
            message: c.value,
            retry: !0,
            onRetry: X
          }, null, 8, ["message"])) : (t(), n(W, { key: 2 }, [
            s.value.length > 0 ? (t(), p(Ee, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                g(" Total: " + u(s.value.length) + " entries • " + u(m.value) + " errors • " + u(w.value) + " warnings • " + u(U.value) + " info • " + u(k.value) + " debug ", 1)
              ]),
              _: 1
            })) : i("", !0),
            d(al, {
              "active-levels": h.value,
              onToggle: P,
              onClear: N
            }, null, 8, ["active-levels"]),
            V.value.length > 0 ? (t(), p(ll, { key: 1 }, {
              default: a(() => [
                (t(!0), n(W, null, J(F.value, (v, C) => (t(), p(hl, {
                  key: `${v.timestamp}-${C}`,
                  level: v.level,
                  timestamp: M(v.timestamp),
                  message: v.message,
                  context: v.context
                }, null, 8, ["level", "timestamp", "message", "context"]))), 128))
              ]),
              _: 1
            })) : i("", !0),
            Y.value ? (t(), n("div", pl, [
              d(A, {
                variant: "secondary",
                onClick: S
              }, {
                default: a(() => [
                  g(" Load More (" + u(V.value.length - y.value) + " remaining) ", 1)
                ]),
                _: 1
              })
            ])) : i("", !0),
            s.value.length > 0 && V.value.length === 0 ? (t(), p(ge, {
              key: 3,
              icon: "🔍",
              message: "No logs match the current filters"
            })) : i("", !0),
            s.value.length === 0 ? (t(), p(ge, {
              key: 4,
              icon: "📝",
              message: "No workspace logs available"
            })) : i("", !0)
          ], 64))
        ]),
        _: 1
      }),
      d(Ue, {
        show: x.value,
        title: "About Workspace Logs",
        onClose: _[2] || (_[2] = (v) => x.value = !1)
      }, {
        content: a(() => [..._[3] || (_[3] = [
          o("p", null, " Workspace logs show system-level events and operations for the entire ComfyGit workspace, including operations that affect multiple environments. ", -1),
          o("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            o("strong", null, "Log Levels:"),
            o("br"),
            o("strong", null, "ERROR:"),
            g(" Critical failures requiring attention"),
            o("br"),
            o("strong", null, "WARNING:"),
            g(" Potential issues or deprecated features"),
            o("br"),
            o("strong", null, "INFO:"),
            g(" General operational information"),
            o("br"),
            o("strong", null, "DEBUG:"),
            g(" Detailed debugging information ")
          ], -1),
          o("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1)
        ])]),
        actions: a(() => [
          d(A, {
            variant: "primary",
            onClick: _[1] || (_[1] = (v) => x.value = !1)
          }, {
            default: a(() => [..._[4] || (_[4] = [
              g(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), bl = /* @__PURE__ */ T(yl, [["__scopeId", "data-v-55d656f1"]]), wl = { class: "header-info" }, kl = { class: "commit-hash" }, _l = {
  key: 0,
  class: "commit-refs"
}, $l = { class: "commit-message" }, xl = { class: "commit-date" }, Cl = {
  key: 0,
  class: "loading"
}, Il = {
  key: 1,
  class: "changes-section"
}, Sl = { class: "stats-row" }, El = { class: "stat" }, Ll = { class: "stat insertions" }, zl = { class: "stat deletions" }, Rl = {
  key: 0,
  class: "change-group"
}, Ul = {
  key: 1,
  class: "change-group"
}, Ml = {
  key: 0,
  class: "version"
}, Nl = {
  key: 2,
  class: "change-group"
}, Dl = { class: "change-item" }, Vl = /* @__PURE__ */ O({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const l = e, { getCommitDetail: s } = ue(), r = L(null), c = L(!0), x = B(() => {
      if (!r.value) return !1;
      const y = r.value.changes.workflows;
      return y.added.length > 0 || y.modified.length > 0 || y.deleted.length > 0;
    }), h = B(() => {
      if (!r.value) return !1;
      const y = r.value.changes.nodes;
      return y.added.length > 0 || y.removed.length > 0;
    });
    return re(async () => {
      try {
        r.value = await s(l.commit.hash);
      } finally {
        c.value = !1;
      }
    }), (y, m) => (t(), p(We, {
      size: "md",
      "show-close-button": !1,
      onClose: m[3] || (m[3] = (w) => y.$emit("close"))
    }, {
      header: a(() => {
        var w, U, k, V;
        return [
          o("div", wl, [
            m[4] || (m[4] = o("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            o("span", kl, u(((w = r.value) == null ? void 0 : w.short_hash) || e.commit.short_hash || ((U = e.commit.hash) == null ? void 0 : U.slice(0, 7))), 1),
            (V = (k = r.value) == null ? void 0 : k.refs) != null && V.length ? (t(), n("span", _l, [
              (t(!0), n(W, null, J(r.value.refs, (F) => (t(), n("span", {
                key: F,
                class: "ref-badge"
              }, u(F), 1))), 128))
            ])) : i("", !0)
          ]),
          d(le, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (F) => y.$emit("close"))
          }, {
            default: a(() => [...m[5] || (m[5] = [
              o("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                o("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])]),
            _: 1
          })
        ];
      }),
      body: a(() => {
        var w, U;
        return [
          o("div", $l, u(((w = r.value) == null ? void 0 : w.message) || e.commit.message), 1),
          o("div", xl, u(((U = r.value) == null ? void 0 : U.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          c.value ? (t(), n("div", Cl, "Loading details...")) : r.value ? (t(), n("div", Il, [
            o("div", Sl, [
              o("span", El, u(r.value.stats.files_changed) + " files", 1),
              o("span", Ll, "+" + u(r.value.stats.insertions), 1),
              o("span", zl, "-" + u(r.value.stats.deletions), 1)
            ]),
            x.value ? (t(), n("div", Rl, [
              d(be, { variant: "section" }, {
                default: a(() => [...m[6] || (m[6] = [
                  g("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (t(!0), n(W, null, J(r.value.changes.workflows.added, (k) => (t(), n("div", {
                key: "add-" + k,
                class: "change-item added"
              }, [
                m[7] || (m[7] = o("span", { class: "change-icon" }, "+", -1)),
                o("span", null, u(k), 1)
              ]))), 128)),
              (t(!0), n(W, null, J(r.value.changes.workflows.modified, (k) => (t(), n("div", {
                key: "mod-" + k,
                class: "change-item modified"
              }, [
                m[8] || (m[8] = o("span", { class: "change-icon" }, "~", -1)),
                o("span", null, u(k), 1)
              ]))), 128)),
              (t(!0), n(W, null, J(r.value.changes.workflows.deleted, (k) => (t(), n("div", {
                key: "del-" + k,
                class: "change-item deleted"
              }, [
                m[9] || (m[9] = o("span", { class: "change-icon" }, "-", -1)),
                o("span", null, u(k), 1)
              ]))), 128))
            ])) : i("", !0),
            h.value ? (t(), n("div", Ul, [
              d(be, { variant: "section" }, {
                default: a(() => [...m[10] || (m[10] = [
                  g("NODES", -1)
                ])]),
                _: 1
              }),
              (t(!0), n(W, null, J(r.value.changes.nodes.added, (k) => (t(), n("div", {
                key: "add-" + k.name,
                class: "change-item added"
              }, [
                m[11] || (m[11] = o("span", { class: "change-icon" }, "+", -1)),
                o("span", null, u(k.name), 1),
                k.version ? (t(), n("span", Ml, "(" + u(k.version) + ")", 1)) : i("", !0)
              ]))), 128)),
              (t(!0), n(W, null, J(r.value.changes.nodes.removed, (k) => (t(), n("div", {
                key: "rem-" + k.name,
                class: "change-item deleted"
              }, [
                m[12] || (m[12] = o("span", { class: "change-icon" }, "-", -1)),
                o("span", null, u(k.name), 1)
              ]))), 128))
            ])) : i("", !0),
            r.value.changes.models.resolved > 0 ? (t(), n("div", Nl, [
              d(be, { variant: "section" }, {
                default: a(() => [...m[13] || (m[13] = [
                  g("MODELS", -1)
                ])]),
                _: 1
              }),
              o("div", Dl, [
                m[14] || (m[14] = o("span", { class: "change-icon" }, "●", -1)),
                o("span", null, u(r.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : i("", !0)
          ])) : i("", !0)
        ];
      }),
      footer: a(() => [
        d(le, {
          variant: "secondary",
          onClick: m[1] || (m[1] = (w) => y.$emit("createBranch", e.commit))
        }, {
          default: a(() => [...m[15] || (m[15] = [
            g(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        d(le, {
          variant: "primary",
          onClick: m[2] || (m[2] = (w) => y.$emit("checkout", e.commit))
        }, {
          default: a(() => [...m[16] || (m[16] = [
            g(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Bl = /* @__PURE__ */ T(Vl, [["__scopeId", "data-v-d256ff6d"]]), Ol = { class: "dialog-message" }, Tl = {
  key: 0,
  class: "dialog-details"
}, Al = {
  key: 1,
  class: "dialog-warning"
}, Wl = /* @__PURE__ */ O({
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
  setup(e) {
    return (l, s) => (t(), p(We, {
      title: e.title,
      size: "sm",
      onClose: s[3] || (s[3] = (r) => l.$emit("cancel"))
    }, {
      body: a(() => [
        o("p", Ol, u(e.message), 1),
        e.details && e.details.length ? (t(), n("div", Tl, [
          (t(!0), n(W, null, J(e.details, (r, c) => (t(), n("div", {
            key: c,
            class: "detail-item"
          }, " • " + u(r), 1))), 128))
        ])) : i("", !0),
        e.warning ? (t(), n("p", Al, [
          s[4] || (s[4] = o("span", { class: "warning-icon" }, "⚠", -1)),
          g(" " + u(e.warning), 1)
        ])) : i("", !0)
      ]),
      footer: a(() => [
        d(le, {
          variant: "secondary",
          onClick: s[0] || (s[0] = (r) => l.$emit("cancel"))
        }, {
          default: a(() => [
            g(u(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (t(), p(le, {
          key: 0,
          variant: "secondary",
          onClick: s[1] || (s[1] = (r) => l.$emit("secondary"))
        }, {
          default: a(() => [
            g(u(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : i("", !0),
        d(le, {
          variant: e.destructive ? "danger" : "primary",
          onClick: s[2] || (s[2] = (r) => l.$emit("confirm"))
        }, {
          default: a(() => [
            g(u(e.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Fl = /* @__PURE__ */ T(Wl, [["__scopeId", "data-v-3670b9f5"]]), Pl = { class: "comfygit-panel" }, Gl = { class: "panel-header" }, Hl = { class: "header-left" }, Kl = {
  key: 0,
  class: "header-info"
}, jl = { class: "header-actions" }, ql = { class: "env-switcher" }, Jl = {
  key: 0,
  class: "header-info"
}, Yl = { class: "branch-name" }, Xl = { class: "panel-main" }, Zl = { class: "sidebar" }, Ql = { class: "sidebar-section" }, er = { class: "sidebar-section" }, tr = { class: "sidebar-section" }, or = { class: "content-area" }, ar = {
  key: 0,
  class: "error-message"
}, sr = {
  key: 1,
  class: "loading"
}, nr = {
  key: 6,
  class: "view-placeholder"
}, lr = {
  key: 7,
  class: "view-placeholder"
}, rr = {
  key: 11,
  class: "view-placeholder"
}, ir = {
  key: 12,
  class: "view-placeholder"
}, cr = { class: "dialog-content env-selector-dialog" }, dr = { class: "dialog-header" }, ur = { class: "dialog-body" }, mr = { class: "env-list" }, fr = { class: "env-info" }, gr = { class: "env-name-row" }, vr = { class: "env-indicator" }, hr = { class: "env-name" }, pr = {
  key: 0,
  class: "env-branch"
}, yr = {
  key: 1,
  class: "current-label"
}, br = { class: "env-stats" }, wr = ["onClick"], kr = { class: "toast-container" }, _r = { class: "toast-icon" }, $r = { class: "toast-message" }, xr = /* @__PURE__ */ O({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(e, { emit: l }) {
    const s = l, {
      getStatus: r,
      getHistory: c,
      exportEnv: x,
      getBranches: h,
      checkout: y,
      createBranch: m,
      switchBranch: w,
      getEnvironments: U
    } = ue(), k = L(null), V = L([]), F = L([]), Y = L([]), P = B(() => Y.value.find(($) => $.is_current)), N = L(!1), S = L(null), M = L(null), X = L(!1), I = L("status"), _ = L("this-env");
    function v($, f) {
      I.value = $, _.value = f;
    }
    function C($) {
      const j = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[$];
      j && v(j.view, j.section);
    }
    function b() {
      v("branches", "this-env");
    }
    const z = L(null), D = L([]);
    let se = 0;
    function R($, f = "info", j = 3e3) {
      const ae = ++se;
      return D.value.push({ id: ae, message: $, type: f }), j > 0 && setTimeout(() => {
        D.value = D.value.filter((me) => me.id !== ae);
      }, j), ae;
    }
    function E($) {
      D.value = D.value.filter((f) => f.id !== $);
    }
    function H($) {
      switch ($) {
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
    const ie = B(() => {
      if (!k.value) return "neutral";
      const $ = k.value.workflows, f = $.new.length > 0 || $.modified.length > 0 || $.deleted.length > 0 || k.value.has_changes;
      return k.value.comparison.is_synced ? f ? "warning" : "success" : "error";
    });
    B(() => k.value ? ie.value === "success" ? "All synced" : ie.value === "warning" ? "Uncommitted changes" : ie.value === "error" ? "Not synced" : "" : "");
    async function we() {
      N.value = !0, S.value = null;
      try {
        const [$, f, j, ae] = await Promise.all([
          r(),
          c(),
          h(),
          U()
        ]);
        k.value = $, V.value = f.commits, F.value = j.branches, Y.value = ae, s("statusUpdate", $);
      } catch ($) {
        S.value = $ instanceof Error ? $.message : "Failed to load status", k.value = null, V.value = [], F.value = [];
      } finally {
        N.value = !1;
      }
    }
    function Fe($) {
      M.value = $;
    }
    async function Me($) {
      var j;
      M.value = null;
      const f = k.value && (k.value.workflows.new.length > 0 || k.value.workflows.modified.length > 0 || k.value.workflows.deleted.length > 0 || k.value.has_changes);
      z.value = {
        title: f ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: f ? "You have uncommitted changes that will be lost." : `Checkout commit ${$.short_hash || ((j = $.hash) == null ? void 0 : j.slice(0, 7))}?`,
        details: f ? Ne() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: f ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: f,
        onConfirm: async () => {
          var K;
          z.value = null;
          const ae = R(`Checking out ${$.short_hash || ((K = $.hash) == null ? void 0 : K.slice(0, 7))}...`, "info", 0), me = await y($.hash, f);
          E(ae), me.status === "success" ? R("Restarting ComfyUI...", "success") : R(me.message || "Checkout failed", "error");
        }
      };
    }
    async function Pe($) {
      const f = k.value && (k.value.workflows.new.length > 0 || k.value.workflows.modified.length > 0 || k.value.workflows.deleted.length > 0 || k.value.has_changes);
      z.value = {
        title: f ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: f ? "You have uncommitted changes." : `Switch to branch "${$}"?`,
        details: f ? Ne() : void 0,
        warning: f ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: f ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          z.value = null;
          const j = R(`Switching to ${$}...`, "info", 0), ae = await w($, f);
          E(j), ae.status === "success" ? R("Restarting ComfyUI...", "success") : R(ae.message || "Branch switch failed", "error");
        }
      };
    }
    async function Ge($) {
      const f = R(`Creating branch ${$}...`, "info", 0), j = await m($);
      E(f), j.status === "success" ? (R(`Branch "${$}" created`, "success"), await we()) : R(j.message || "Failed to create branch", "error");
    }
    async function He($) {
      M.value = null;
      const f = prompt("Enter branch name:");
      if (f) {
        const j = R(`Creating branch ${f}...`, "info", 0), ae = await m(f, $.hash);
        E(j), ae.status === "success" ? (R(`Branch "${f}" created from ${$.short_hash}`, "success"), await we()) : R(ae.message || "Failed to create branch", "error");
      }
    }
    async function Ke($) {
      X.value = !1, R("Environment switching not yet implemented", "warning");
    }
    function Ne() {
      if (!k.value) return [];
      const $ = [], f = k.value.workflows;
      return f.new.length && $.push(`${f.new.length} new workflow(s)`), f.modified.length && $.push(`${f.modified.length} modified workflow(s)`), f.deleted.length && $.push(`${f.deleted.length} deleted workflow(s)`), $;
    }
    async function je() {
      const $ = R("Exporting environment...", "info", 0);
      try {
        const f = await x();
        E($), f.status === "success" ? (R("Export complete", "success"), alert(`Export successful!

Saved to: ${f.path}

Models without sources: ${f.models_without_sources}`)) : (R("Export failed", "error"), alert(`Export failed: ${f.message}`));
      } catch (f) {
        E($), R("Export error", "error"), alert(`Export error: ${f instanceof Error ? f.message : "Unknown error"}`);
      }
    }
    return re(we), ($, f) => {
      var j, ae, me;
      return t(), n("div", Pl, [
        o("div", Gl, [
          o("div", Hl, [
            f[20] || (f[20] = o("h2", { class: "panel-title" }, "ComfyGit", -1)),
            k.value ? (t(), n("div", Kl)) : i("", !0)
          ]),
          o("div", jl, [
            o("button", {
              class: G(["icon-btn", { spinning: N.value }]),
              onClick: we,
              title: "Refresh"
            }, [...f[21] || (f[21] = [
              o("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                o("path", { d: "M13.65 2.35a8 8 0 1 0 1.4 9.65h-2.25a5.75 5.75 0 1 1-1-6.45L9.5 8H16V1.5l-2.35 2.35z" })
              ], -1)
            ])], 2),
            o("button", {
              class: "icon-btn",
              onClick: f[0] || (f[0] = (K) => s("close")),
              title: "Close"
            }, [...f[22] || (f[22] = [
              o("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                o("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])
          ])
        ]),
        o("div", ql, [
          f[24] || (f[24] = o("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
          o("button", {
            class: "env-switcher-btn",
            onClick: f[1] || (f[1] = (K) => X.value = !0)
          }, [
            k.value ? (t(), n("div", Jl, [
              o("span", null, u(((j = P.value) == null ? void 0 : j.name) || ((ae = k.value) == null ? void 0 : ae.environment) || "Loading..."), 1),
              o("span", Yl, "(" + u(k.value.branch || "detached") + ")", 1)
            ])) : i("", !0),
            f[23] || (f[23] = o("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        o("div", Xl, [
          o("div", Zl, [
            o("div", Ql, [
              f[25] || (f[25] = o("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              o("button", {
                class: G(["sidebar-item", { active: I.value === "status" && _.value === "this-env" }]),
                onClick: f[2] || (f[2] = (K) => v("status", "this-env"))
              }, " STATUS ", 2),
              o("button", {
                class: G(["sidebar-item", { active: I.value === "workflows" }]),
                onClick: f[3] || (f[3] = (K) => v("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              o("button", {
                class: G(["sidebar-item", { active: I.value === "models-env" }]),
                onClick: f[4] || (f[4] = (K) => v("models-env", "this-env"))
              }, " MODELS ", 2),
              o("button", {
                class: G(["sidebar-item", { active: I.value === "branches" }]),
                onClick: f[5] || (f[5] = (K) => v("branches", "this-env"))
              }, " BRANCHES ", 2),
              o("button", {
                class: G(["sidebar-item", { active: I.value === "history" }]),
                onClick: f[6] || (f[6] = (K) => v("history", "this-env"))
              }, " HISTORY ", 2),
              o("button", {
                class: G(["sidebar-item", { active: I.value === "nodes" }]),
                onClick: f[7] || (f[7] = (K) => v("nodes", "this-env"))
              }, " NODES ", 2),
              o("button", {
                class: G(["sidebar-item", { active: I.value === "debug-env" }]),
                onClick: f[8] || (f[8] = (K) => v("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            f[28] || (f[28] = o("div", { class: "sidebar-divider" }, null, -1)),
            o("div", er, [
              f[26] || (f[26] = o("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              o("button", {
                class: G(["sidebar-item", { active: I.value === "environments" }]),
                onClick: f[9] || (f[9] = (K) => v("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              o("button", {
                class: G(["sidebar-item", { active: I.value === "model-index" }]),
                onClick: f[10] || (f[10] = (K) => v("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              o("button", {
                class: G(["sidebar-item", { active: I.value === "settings" }]),
                onClick: f[11] || (f[11] = (K) => v("settings", "all-envs"))
              }, " SETTINGS ", 2),
              o("button", {
                class: G(["sidebar-item", { active: I.value === "debug-workspace" }]),
                onClick: f[12] || (f[12] = (K) => v("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            f[29] || (f[29] = o("div", { class: "sidebar-divider" }, null, -1)),
            o("div", tr, [
              f[27] || (f[27] = o("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              o("button", {
                class: G(["sidebar-item", { active: I.value === "export" }]),
                onClick: f[13] || (f[13] = (K) => v("export", "sharing"))
              }, " EXPORT ", 2),
              o("button", {
                class: G(["sidebar-item", { active: I.value === "import" }]),
                onClick: f[14] || (f[14] = (K) => v("import", "sharing"))
              }, " IMPORT ", 2),
              o("button", {
                class: G(["sidebar-item", { active: I.value === "remotes" }]),
                onClick: f[15] || (f[15] = (K) => v("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          o("div", or, [
            S.value ? (t(), n("div", ar, u(S.value), 1)) : !k.value && I.value === "status" ? (t(), n("div", sr, " Loading status... ")) : (t(), n(W, { key: 2 }, [
              I.value === "status" ? (t(), p(xo, {
                key: 0,
                status: k.value,
                onSwitchBranch: b
              }, null, 8, ["status"])) : I.value === "workflows" ? (t(), p(Ds, {
                key: 1,
                onRefresh: we
              })) : I.value === "models-env" ? (t(), p(qs, {
                key: 2,
                onNavigate: C
              })) : I.value === "branches" ? (t(), p(To, {
                key: 3,
                branches: F.value,
                current: ((me = k.value) == null ? void 0 : me.branch) || null,
                onSwitch: Pe,
                onCreate: Ge
              }, null, 8, ["branches", "current"])) : I.value === "history" ? (t(), p(Xo, {
                key: 4,
                commits: V.value,
                onSelect: Fe,
                onCheckout: Me
              }, null, 8, ["commits"])) : I.value === "nodes" ? (t(), p(tn, { key: 5 })) : I.value === "debug-env" ? (t(), n("div", nr, [...f[30] || (f[30] = [
                o("h3", { class: "view-title" }, "DEBUG (ENVIRONMENT LOGS)", -1),
                o("p", null, "Environment logs view coming soon...", -1)
              ])])) : I.value === "environments" ? (t(), n("div", lr, [...f[31] || (f[31] = [
                o("h3", { class: "view-title" }, "ENVIRONMENTS", -1),
                o("p", null, "Environment management UI coming soon...", -1)
              ])])) : I.value === "model-index" ? (t(), p(Ys, { key: 8 })) : I.value === "settings" ? (t(), p(Zn, { key: 9 })) : I.value === "debug-workspace" ? (t(), p(bl, { key: 10 })) : I.value === "export" ? (t(), n("div", rr, [
                f[33] || (f[33] = o("h3", { class: "view-title" }, "EXPORT", -1)),
                o("button", {
                  class: "export-btn",
                  onClick: je
                }, [...f[32] || (f[32] = [
                  o("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    o("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    o("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  g(" EXPORT ENVIRONMENT ", -1)
                ])])
              ])) : I.value === "import" ? (t(), n("div", ir, [...f[34] || (f[34] = [
                o("h3", { class: "view-title" }, "IMPORT", -1),
                o("p", null, "Import UI coming soon...", -1)
              ])])) : I.value === "remotes" ? (t(), p(Dn, { key: 13 })) : i("", !0)
            ], 64))
          ])
        ]),
        M.value ? (t(), p(Bl, {
          key: 0,
          commit: M.value,
          onClose: f[16] || (f[16] = (K) => M.value = null),
          onCheckout: Me,
          onCreateBranch: He
        }, null, 8, ["commit"])) : i("", !0),
        z.value ? (t(), p(Fl, {
          key: 1,
          title: z.value.title,
          message: z.value.message,
          details: z.value.details,
          warning: z.value.warning,
          confirmLabel: z.value.confirmLabel,
          cancelLabel: z.value.cancelLabel,
          secondaryLabel: z.value.secondaryLabel,
          secondaryAction: z.value.secondaryAction,
          destructive: z.value.destructive,
          onConfirm: z.value.onConfirm,
          onCancel: f[17] || (f[17] = (K) => z.value = null),
          onSecondary: z.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : i("", !0),
        X.value ? (t(), n("div", {
          key: 2,
          class: "dialog-overlay",
          onClick: f[19] || (f[19] = Se((K) => X.value = !1, ["self"]))
        }, [
          o("div", cr, [
            o("div", dr, [
              f[36] || (f[36] = o("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              o("button", {
                class: "icon-btn",
                onClick: f[18] || (f[18] = (K) => X.value = !1)
              }, [...f[35] || (f[35] = [
                o("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  o("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
                ], -1)
              ])])
            ]),
            o("div", ur, [
              f[37] || (f[37] = o("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              o("div", mr, [
                (t(!0), n(W, null, J(Y.value, (K) => (t(), n("div", {
                  key: K.name,
                  class: G(["env-item", { current: K.is_current }])
                }, [
                  o("div", fr, [
                    o("div", gr, [
                      o("span", vr, u(K.is_current ? "●" : "○"), 1),
                      o("span", hr, u(K.name), 1),
                      K.current_branch ? (t(), n("span", pr, "(" + u(K.current_branch) + ")", 1)) : i("", !0),
                      K.is_current ? (t(), n("span", yr, "CURRENT")) : i("", !0)
                    ]),
                    o("div", br, u(K.workflow_count) + " workflows • " + u(K.node_count) + " nodes ", 1)
                  ]),
                  K.is_current ? i("", !0) : (t(), n("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (oi) => Ke(K.name)
                  }, " SWITCH ", 8, wr))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : i("", !0),
        o("div", kr, [
          d(ht, { name: "toast" }, {
            default: a(() => [
              (t(!0), n(W, null, J(D.value, (K) => (t(), n("div", {
                key: K.id,
                class: G(["toast", K.type])
              }, [
                o("span", _r, u(H(K.type)), 1),
                o("span", $r, u(K.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), Cr = /* @__PURE__ */ T(xr, [["__scopeId", "data-v-3d9cd4a4"]]), Ir = { class: "base-textarea-wrapper" }, Sr = ["value", "rows", "placeholder", "disabled", "maxlength"], Er = {
  key: 0,
  class: "base-textarea-count"
}, Lr = /* @__PURE__ */ O({
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
  setup(e) {
    return (l, s) => (t(), n("div", Ir, [
      o("textarea", {
        value: e.modelValue,
        rows: e.rows,
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxlength: e.maxLength,
        class: "base-textarea",
        onInput: s[0] || (s[0] = (r) => l.$emit("update:modelValue", r.target.value)),
        onKeydown: [
          s[1] || (s[1] = $e(Se((r) => l.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          s[2] || (s[2] = $e(Se((r) => l.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, Sr),
      e.showCharCount && e.maxLength ? (t(), n("div", Er, u(e.modelValue.length) + " / " + u(e.maxLength), 1)) : i("", !0)
    ]));
  }
}), zr = /* @__PURE__ */ T(Lr, [["__scopeId", "data-v-5516e6fc"]]), Rr = { class: "commit-popover" }, Ur = { class: "popover-header" }, Mr = { class: "popover-body" }, Nr = {
  key: 0,
  class: "changes-summary"
}, Dr = {
  key: 0,
  class: "change-item"
}, Vr = {
  key: 1,
  class: "change-item"
}, Br = {
  key: 2,
  class: "change-item"
}, Or = {
  key: 3,
  class: "change-item"
}, Tr = {
  key: 4,
  class: "change-item"
}, Ar = {
  key: 1,
  class: "no-changes"
}, Wr = {
  key: 2,
  class: "loading"
}, Fr = { class: "message-section" }, Pr = { class: "popover-footer" }, Gr = /* @__PURE__ */ O({
  __name: "CommitPopover",
  props: {
    status: {}
  },
  emits: ["close", "committed"],
  setup(e, { emit: l }) {
    const s = e, r = l, { commit: c } = ue(), x = L(""), h = L(!1), y = L(null), m = B(() => {
      if (!s.status) return !1;
      const U = s.status.workflows;
      return U.new.length > 0 || U.modified.length > 0 || U.deleted.length > 0 || s.status.has_changes;
    });
    async function w() {
      var U, k, V;
      if (!(!m.value || !x.value.trim() || h.value)) {
        h.value = !0, y.value = null;
        try {
          const F = await c(x.value.trim());
          F.status === "success" ? (y.value = {
            type: "success",
            message: `Committed: ${((U = F.summary) == null ? void 0 : U.new) || 0} new, ${((k = F.summary) == null ? void 0 : k.modified) || 0} modified, ${((V = F.summary) == null ? void 0 : V.deleted) || 0} deleted`
          }, x.value = "", setTimeout(() => r("committed"), 1e3)) : F.status === "no_changes" ? y.value = { type: "error", message: "No changes to commit" } : y.value = { type: "error", message: F.message || "Commit failed" };
        } catch (F) {
          y.value = { type: "error", message: F instanceof Error ? F.message : "Commit failed" };
        } finally {
          h.value = !1;
        }
      }
    }
    return (U, k) => (t(), n("div", Rr, [
      o("div", Ur, [
        k[4] || (k[4] = o("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        o("button", {
          class: "close-btn",
          onClick: k[0] || (k[0] = (V) => r("close"))
        }, [...k[3] || (k[3] = [
          o("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "currentColor"
          }, [
            o("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
          ], -1)
        ])])
      ]),
      o("div", Mr, [
        e.status && m.value ? (t(), n("div", Nr, [
          e.status.workflows.new.length ? (t(), n("div", Dr, [
            k[5] || (k[5] = o("span", { class: "change-icon new" }, "+", -1)),
            o("span", null, u(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : i("", !0),
          e.status.workflows.modified.length ? (t(), n("div", Vr, [
            k[6] || (k[6] = o("span", { class: "change-icon modified" }, "~", -1)),
            o("span", null, u(e.status.workflows.modified.length) + " modified", 1)
          ])) : i("", !0),
          e.status.workflows.deleted.length ? (t(), n("div", Br, [
            k[7] || (k[7] = o("span", { class: "change-icon deleted" }, "-", -1)),
            o("span", null, u(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : i("", !0),
          e.status.git_changes.nodes_added.length ? (t(), n("div", Or, [
            k[8] || (k[8] = o("span", { class: "change-icon new" }, "+", -1)),
            o("span", null, u(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : i("", !0),
          e.status.git_changes.nodes_removed.length ? (t(), n("div", Tr, [
            k[9] || (k[9] = o("span", { class: "change-icon deleted" }, "-", -1)),
            o("span", null, u(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : i("", !0)
        ])) : e.status ? (t(), n("div", Ar, " No changes to commit ")) : (t(), n("div", Wr, " Loading... ")),
        o("div", Fr, [
          d(zr, {
            modelValue: x.value,
            "onUpdate:modelValue": k[1] || (k[1] = (V) => x.value = V),
            placeholder: m.value ? "Describe your changes..." : "No changes",
            disabled: !m.value || h.value,
            rows: 3,
            onCtrlEnter: w
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        y.value ? (t(), n("div", {
          key: 3,
          class: G(["result", y.value.type])
        }, u(y.value.message), 3)) : i("", !0)
      ]),
      o("div", Pr, [
        d(le, {
          variant: "secondary",
          onClick: k[2] || (k[2] = (V) => r("close"))
        }, {
          default: a(() => [...k[10] || (k[10] = [
            g(" Cancel ", -1)
          ])]),
          _: 1
        }),
        d(le, {
          variant: "primary",
          disabled: !m.value || !x.value.trim() || h.value,
          loading: h.value,
          onClick: w
        }, {
          default: a(() => [
            g(u(h.value ? "Committing..." : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ])
    ]));
  }
}), Hr = /* @__PURE__ */ T(Gr, [["__scopeId", "data-v-4f587977"]]), Kr = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}', jr = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', qr = {
  comfy: Kr,
  phosphor: jr
}, ot = "comfy", dt = "comfygit-theme";
let ke = null, ut = ot;
function Jr() {
  try {
    const e = localStorage.getItem(dt);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return ot;
}
function mt(e = ot) {
  ke && ke.remove(), ke = document.createElement("style"), ke.id = "comfygit-theme-styles", ke.setAttribute("data-theme", e), ke.textContent = qr[e], document.head.appendChild(ke), document.body.setAttribute("data-comfygit-theme", e), ut = e;
  try {
    localStorage.setItem(dt, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function Yr() {
  return ut;
}
function Xr(e) {
  mt(e);
}
const at = document.createElement("link");
at.rel = "stylesheet";
at.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(at);
const Zr = Jr();
mt(Zr);
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), Xr(e);
  },
  getTheme: () => {
    const e = Yr();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
let de = null, ce = null, ze = null;
const Ie = L(null);
async function Qe() {
  var e;
  if (!((e = window.app) != null && e.api)) return null;
  try {
    const l = await window.app.api.fetchApi("/v2/comfygit/status");
    l.ok && (Ie.value = await l.json());
  } catch {
  }
}
function Qr() {
  if (!Ie.value) return !1;
  const e = Ie.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || Ie.value.has_changes;
}
function ei() {
  de && de.remove(), de = document.createElement("div"), de.className = "comfygit-panel-overlay";
  const e = document.createElement("div");
  e.className = "comfygit-panel-container", de.appendChild(e), de.addEventListener("click", (r) => {
    r.target === de && Ze();
  });
  const l = (r) => {
    r.key === "Escape" && (Ze(), document.removeEventListener("keydown", l));
  };
  document.addEventListener("keydown", l), rt({
    render: () => it(Cr, {
      onClose: Ze,
      onStatusUpdate: (r) => {
        Ie.value = r, Ae();
      }
    })
  }).mount(e), document.body.appendChild(de);
}
function Ze() {
  de && (de.remove(), de = null);
}
function ti(e) {
  Le(), ce = document.createElement("div"), ce.className = "comfygit-commit-popover-container";
  const l = e.getBoundingClientRect();
  ce.style.position = "fixed", ce.style.top = `${l.bottom + 8}px`, ce.style.right = `${window.innerWidth - l.right}px`, ce.style.zIndex = "10001";
  const s = (c) => {
    ce && !ce.contains(c.target) && c.target !== e && (Le(), document.removeEventListener("mousedown", s));
  };
  setTimeout(() => document.addEventListener("mousedown", s), 0);
  const r = (c) => {
    c.key === "Escape" && (Le(), document.removeEventListener("keydown", r));
  };
  document.addEventListener("keydown", r), ze = rt({
    render: () => it(Hr, {
      status: Ie.value,
      onClose: Le,
      onCommitted: () => {
        Le(), Qe().then(Ae);
      }
    })
  }), ze.mount(ce), document.body.appendChild(ce);
}
function Le() {
  ze && (ze.unmount(), ze = null), ce && (ce.remove(), ce = null);
}
let pe = null;
function Ae() {
  if (!pe) return;
  const e = pe.querySelector(".commit-indicator");
  e && (e.style.display = Qr() ? "block" : "none");
}
const ft = document.createElement("style");
ft.textContent = `
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
document.head.appendChild(ft);
qe.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var s, r;
    const e = document.createElement("div");
    e.className = "comfygit-btn-group";
    const l = document.createElement("button");
    l.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", l.textContent = "ComfyGit", l.title = "ComfyGit Control Panel", l.onclick = ei, pe = document.createElement("button"), pe.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", pe.innerHTML = 'Commit <span class="commit-indicator"></span>', pe.title = "Quick Commit", pe.onclick = () => ti(pe), e.appendChild(l), e.appendChild(pe), (r = (s = qe.menu) == null ? void 0 : s.settingsGroup) != null && r.element && (qe.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), await Qe(), Ae(), setInterval(async () => {
      await Qe(), Ae();
    }, 3e4);
  }
});
