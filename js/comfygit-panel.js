import { app as Ae } from "../../scripts/app.js";
import { defineComponent as M, createElementBlock as n, openBlock as t, createCommentVNode as i, createElementVNode as o, renderSlot as q, createBlock as p, resolveDynamicComponent as He, normalizeClass as P, withCtx as s, toDisplayString as c, createVNode as k, createTextVNode as f, computed as z, Fragment as V, renderList as K, ref as S, onMounted as de, withKeys as Ee, withModifiers as xe, onUnmounted as lt, Teleport as Ze, normalizeStyle as Je, TransitionGroup as rt, createApp as Xe, h as Qe } from "vue";
const it = { class: "panel-layout" }, ct = {
  key: 0,
  class: "panel-layout-header"
}, dt = {
  key: 1,
  class: "panel-layout-search"
}, ut = { class: "panel-layout-content" }, mt = {
  key: 2,
  class: "panel-layout-footer"
}, gt = /* @__PURE__ */ M({
  __name: "PanelLayout",
  setup(e) {
    return (l, a) => (t(), n("div", it, [
      l.$slots.header ? (t(), n("div", ct, [
        q(l.$slots, "header", {}, void 0, !0)
      ])) : i("", !0),
      l.$slots.search ? (t(), n("div", dt, [
        q(l.$slots, "search", {}, void 0, !0)
      ])) : i("", !0),
      o("div", ut, [
        q(l.$slots, "content", {}, void 0, !0)
      ]),
      l.$slots.footer ? (t(), n("div", mt, [
        q(l.$slots, "footer", {}, void 0, !0)
      ])) : i("", !0)
    ]));
  }
}), B = (e, l) => {
  const a = e.__vccOpts || e;
  for (const [r, b] of l)
    a[r] = b;
  return a;
}, pe = /* @__PURE__ */ B(gt, [["__scopeId", "data-v-21565df9"]]), ft = {
  key: 0,
  class: "panel-title-prefix"
}, vt = {
  key: 1,
  class: "panel-title-prefix-theme"
}, ht = /* @__PURE__ */ M({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (l, a) => (t(), p(He(`h${e.level}`), {
      class: P(["panel-title", e.variant])
    }, {
      default: s(() => [
        e.showPrefix ? (t(), n("span", ft, c(e.prefix), 1)) : (t(), n("span", vt)),
        q(l.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), pt = /* @__PURE__ */ B(ht, [["__scopeId", "data-v-c3875efc"]]), yt = ["title"], bt = ["width", "height"], wt = /* @__PURE__ */ M({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(e) {
    return (l, a) => (t(), n("button", {
      class: "info-button",
      title: e.title,
      onClick: a[0] || (a[0] = (r) => l.$emit("click"))
    }, [
      (t(), n("svg", {
        width: e.size,
        height: e.size,
        viewBox: "0 0 16 16",
        fill: "currentColor"
      }, [...a[1] || (a[1] = [
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
      ])], 8, bt))
    ], 8, yt));
  }
}), kt = /* @__PURE__ */ B(wt, [["__scopeId", "data-v-6fc7f16d"]]), _t = { class: "header-left" }, $t = {
  key: 0,
  class: "header-actions"
}, xt = /* @__PURE__ */ M({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(e) {
    return (l, a) => (t(), n("div", {
      class: P(["panel-header", { stacked: e.stacked }])
    }, [
      o("div", _t, [
        k(pt, { "show-prefix": e.showPrefix }, {
          default: s(() => [
            f(c(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (t(), p(kt, {
          key: 0,
          onClick: a[0] || (a[0] = (r) => l.$emit("info-click"))
        })) : i("", !0)
      ]),
      l.$slots.actions ? (t(), n("div", $t, [
        q(l.$slots, "actions", {}, void 0, !0)
      ])) : i("", !0)
    ], 2));
  }
}), ye = /* @__PURE__ */ B(xt, [["__scopeId", "data-v-55a62cd6"]]), Ct = {
  key: 0,
  class: "section-title-count"
}, It = {
  key: 1,
  class: "section-title-icon"
}, St = /* @__PURE__ */ M({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (l, a) => (t(), p(He(`h${e.level}`), {
      class: P(["section-title", { clickable: e.clickable }]),
      onClick: a[0] || (a[0] = (r) => e.clickable && l.$emit("click"))
    }, {
      default: s(() => [
        q(l.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (t(), n("span", Ct, "(" + c(e.count) + ")", 1)) : i("", !0),
        e.clickable ? (t(), n("span", It, c(e.expanded ? "▼" : "▸"), 1)) : i("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Pe = /* @__PURE__ */ B(St, [["__scopeId", "data-v-559361eb"]]), Et = { class: "status-grid" }, Lt = { class: "status-grid__column" }, zt = { class: "status-grid__title" }, Nt = { class: "status-grid__column status-grid__column--right" }, Mt = { class: "status-grid__title" }, Bt = /* @__PURE__ */ M({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (l, a) => (t(), n("div", Et, [
      o("div", Lt, [
        o("h4", zt, c(e.leftTitle), 1),
        q(l.$slots, "left", {}, void 0, !0)
      ]),
      o("div", Nt, [
        o("h4", Mt, c(e.rightTitle), 1),
        q(l.$slots, "right", {}, void 0, !0)
      ])
    ]));
  }
}), Rt = /* @__PURE__ */ B(Bt, [["__scopeId", "data-v-fe556068"]]), Tt = {
  key: 0,
  class: "status-item__icon"
}, Ot = {
  key: 1,
  class: "status-item__count"
}, Dt = { class: "status-item__label" }, Ut = /* @__PURE__ */ M({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(e) {
    const l = e, a = z(() => `status-item--${l.variant}`);
    return (r, b) => (t(), n("div", {
      class: P(["status-item", a.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (t(), n("span", Tt, c(e.icon), 1)) : i("", !0),
      e.count !== void 0 ? (t(), n("span", Ot, c(e.count), 1)) : i("", !0),
      o("span", Dt, c(e.label), 1)
    ], 2));
  }
}), ve = /* @__PURE__ */ B(Ut, [["__scopeId", "data-v-6f929183"]]), Wt = { class: "issue-card__header" }, Vt = { class: "issue-card__icon" }, At = { class: "issue-card__title" }, Ft = {
  key: 0,
  class: "issue-card__content"
}, Gt = {
  key: 0,
  class: "issue-card__description"
}, Pt = {
  key: 1,
  class: "issue-card__items"
}, jt = {
  key: 2,
  class: "issue-card__actions"
}, Ht = /* @__PURE__ */ M({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(e) {
    const l = e, a = z(() => `issue-card--${l.severity}`);
    return (r, b) => (t(), n("div", {
      class: P(["issue-card", a.value])
    }, [
      o("div", Wt, [
        o("span", Vt, c(e.icon), 1),
        o("h4", At, c(e.title), 1)
      ]),
      r.$slots.default || e.description ? (t(), n("div", Ft, [
        e.description ? (t(), n("p", Gt, c(e.description), 1)) : i("", !0),
        q(r.$slots, "default", {}, void 0, !0)
      ])) : i("", !0),
      e.items && e.items.length ? (t(), n("div", Pt, [
        (t(!0), n(V, null, K(e.items, (x, u) => (t(), n("div", {
          key: u,
          class: "issue-card__item"
        }, [
          b[0] || (b[0] = o("span", { class: "issue-card__bullet" }, "•", -1)),
          o("span", null, c(x), 1)
        ]))), 128))
      ])) : i("", !0),
      r.$slots.actions ? (t(), n("div", jt, [
        q(r.$slots, "actions", {}, void 0, !0)
      ])) : i("", !0)
    ], 2));
  }
}), Fe = /* @__PURE__ */ B(Ht, [["__scopeId", "data-v-df6aa348"]]), Kt = ["type", "disabled"], qt = {
  key: 0,
  class: "spinner"
}, Yt = /* @__PURE__ */ M({
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
    return (l, a) => (t(), n("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: P(["action-btn", e.variant, e.size, { loading: e.loading }]),
      onClick: a[0] || (a[0] = (r) => l.$emit("click", r))
    }, [
      e.loading ? (t(), n("span", qt)) : i("", !0),
      e.loading ? i("", !0) : q(l.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, Kt));
  }
}), W = /* @__PURE__ */ B(Yt, [["__scopeId", "data-v-772abe47"]]), Zt = { class: "empty-state" }, Jt = {
  key: 0,
  class: "empty-icon"
}, Xt = { class: "empty-message" }, Qt = /* @__PURE__ */ M({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (l, a) => (t(), n("div", Zt, [
      e.icon ? (t(), n("div", Jt, c(e.icon), 1)) : i("", !0),
      o("p", Xt, c(e.message), 1),
      e.actionLabel ? (t(), p(W, {
        key: 1,
        variant: e.actionVariant || "secondary",
        size: "sm",
        onClick: a[0] || (a[0] = (r) => l.$emit("action"))
      }, {
        default: s(() => [
          f(c(e.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : i("", !0)
    ]));
  }
}), be = /* @__PURE__ */ B(Qt, [["__scopeId", "data-v-4466284f"]]), eo = { class: "branch-indicator" }, to = { class: "branch-indicator__info" }, oo = { class: "branch-indicator__label" }, ao = { class: "branch-indicator__name" }, so = {
  key: 0,
  class: "branch-indicator__remote"
}, no = {
  key: 0,
  class: "branch-indicator__status"
}, lo = {
  key: 0,
  class: "branch-indicator__ahead"
}, ro = {
  key: 1,
  class: "branch-indicator__behind"
}, io = {
  key: 1,
  class: "branch-indicator__actions"
}, co = /* @__PURE__ */ M({
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
    return (l, a) => (t(), n("div", eo, [
      o("div", to, [
        o("span", oo, c(e.label), 1),
        o("span", ao, c(e.branchName), 1),
        e.remote ? (t(), n("span", so, "@" + c(e.remote), 1)) : i("", !0)
      ]),
      e.showStatus && (e.commitsAhead || e.commitsBehind) ? (t(), n("div", no, [
        e.commitsAhead ? (t(), n("span", lo, " ↑ " + c(e.commitsAhead) + " ahead ", 1)) : i("", !0),
        e.commitsBehind ? (t(), n("span", ro, " ↓ " + c(e.commitsBehind) + " behind ", 1)) : i("", !0)
      ])) : i("", !0),
      l.$slots.actions ? (t(), n("div", io, [
        q(l.$slots, "actions", {}, void 0, !0)
      ])) : i("", !0)
    ]));
  }
}), uo = /* @__PURE__ */ B(co, [["__scopeId", "data-v-cb8dd50e"]]), mo = { style: { "margin-top": "var(--cg-space-1)" } }, go = {
  key: 0,
  style: { "margin-top": "var(--cg-space-4)" }
}, fo = /* @__PURE__ */ M({
  __name: "StatusSection",
  props: {
    status: {}
  },
  emits: ["view-workflows", "resolve-models", "view-history", "commit-changes", "view-debug", "sync-environment", "switch-branch"],
  setup(e, { emit: l }) {
    const a = e, r = z(() => a.status.workflows.new.length > 0 || a.status.workflows.modified.length > 0 || a.status.workflows.deleted.length > 0), b = z(() => {
      const d = a.status.git_changes;
      return d.nodes_added.length > 0 || d.nodes_removed.length > 0 || d.workflow_changes || d.has_other_changes;
    }), x = z(() => {
      const d = a.status.git_changes, y = a.status.workflows;
      return (d.workflow_changes || d.has_other_changes) && y.new.length === 0 && y.modified.length === 0 && y.deleted.length === 0;
    }), u = z(() => a.status.missing_models_count > 0 || b.value || !a.status.comparison.is_synced), g = z(() => {
      const d = [];
      return a.status.workflows.new.length > 0 && d.push(`${a.status.workflows.new.length} new workflow${a.status.workflows.new.length === 1 ? "" : "s"}`), a.status.workflows.modified.length > 0 && d.push(`${a.status.workflows.modified.length} modified workflow${a.status.workflows.modified.length === 1 ? "" : "s"}`), a.status.workflows.deleted.length > 0 && d.push(`${a.status.workflows.deleted.length} deleted workflow${a.status.workflows.deleted.length === 1 ? "" : "s"}`), a.status.git_changes.nodes_added.length > 0 && d.push(`${a.status.git_changes.nodes_added.length} node${a.status.git_changes.nodes_added.length === 1 ? "" : "s"} added`), a.status.git_changes.nodes_removed.length > 0 && d.push(`${a.status.git_changes.nodes_removed.length} node${a.status.git_changes.nodes_removed.length === 1 ? "" : "s"} removed`), `${d.length > 0 ? d.join(", ") + "." : "You have uncommitted changes."} Your work could be lost if you switch branches without committing.`;
    });
    return (d, y) => (t(), p(pe, null, {
      header: s(() => [
        k(ye, { title: "STATUS" })
      ]),
      content: s(() => [
        k(Pe, {
          level: "4",
          style: { "margin-bottom": "var(--cg-space-2)" }
        }, {
          default: s(() => [...y[7] || (y[7] = [
            f(" ENVIRONMENT HEALTH ", -1)
          ])]),
          _: 1
        }),
        k(Rt, {
          "left-title": "WORKFLOWS",
          "right-title": "GIT CHANGES"
        }, {
          left: s(() => [
            e.status.workflows.new.length ? (t(), p(ve, {
              key: 0,
              icon: "●",
              count: e.status.workflows.new.length,
              label: "new",
              variant: "new"
            }, null, 8, ["count"])) : i("", !0),
            e.status.workflows.modified.length ? (t(), p(ve, {
              key: 1,
              icon: "●",
              count: e.status.workflows.modified.length,
              label: "modified",
              variant: "modified"
            }, null, 8, ["count"])) : i("", !0),
            e.status.workflows.deleted.length ? (t(), p(ve, {
              key: 2,
              icon: "●",
              count: e.status.workflows.deleted.length,
              label: "deleted",
              variant: "deleted"
            }, null, 8, ["count"])) : i("", !0),
            k(ve, {
              icon: "✓",
              count: e.status.workflows.synced.length,
              label: "synced",
              variant: "synced",
              separator: r.value
            }, null, 8, ["count", "separator"])
          ]),
          right: s(() => [
            e.status.git_changes.nodes_added.length ? (t(), p(ve, {
              key: 0,
              icon: "●",
              count: e.status.git_changes.nodes_added.length,
              label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
              variant: "new"
            }, null, 8, ["count", "label"])) : i("", !0),
            e.status.git_changes.nodes_removed.length ? (t(), p(ve, {
              key: 1,
              icon: "●",
              count: e.status.git_changes.nodes_removed.length,
              label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
              variant: "deleted"
            }, null, 8, ["count", "label"])) : i("", !0),
            x.value ? (t(), p(ve, {
              key: 2,
              icon: "●",
              label: "other changes",
              variant: "modified"
            })) : i("", !0),
            b.value ? i("", !0) : (t(), p(ve, {
              key: 3,
              icon: "✓",
              label: "No uncommitted changes",
              variant: "ok"
            }))
          ]),
          _: 1
        }),
        o("div", mo, [
          k(uo, {
            "branch-name": e.status.current_branch || "main"
          }, {
            actions: s(() => [
              k(W, {
                variant: "secondary",
                size: "sm",
                onClick: y[0] || (y[0] = (L) => d.$emit("switch-branch"))
              }, {
                default: s(() => [...y[8] || (y[8] = [
                  f(" Switch Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["branch-name"])
        ]),
        u.value ? (t(), n("div", go, [
          k(Pe, {
            level: "4",
            style: { "margin-bottom": "var(--cg-space-2)" }
          }, {
            default: s(() => [...y[9] || (y[9] = [
              f(" ISSUES DETECTED ", -1)
            ])]),
            _: 1
          }),
          e.status.missing_models_count > 0 ? (t(), p(Fe, {
            key: 0,
            severity: "warning",
            icon: "⚠",
            title: `${e.status.missing_models_count} missing model${e.status.missing_models_count === 1 ? "" : "s"}`,
            description: "Some workflows reference models that are not found in the workspace index."
          }, {
            actions: s(() => [
              k(W, {
                variant: "secondary",
                size: "sm",
                onClick: y[1] || (y[1] = (L) => d.$emit("view-workflows"))
              }, {
                default: s(() => [...y[10] || (y[10] = [
                  f(" View Details ", -1)
                ])]),
                _: 1
              }),
              k(W, {
                variant: "primary",
                size: "sm",
                onClick: y[2] || (y[2] = (L) => d.$emit("resolve-models"))
              }, {
                default: s(() => [...y[11] || (y[11] = [
                  f(" Resolve ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["title"])) : i("", !0),
          b.value ? (t(), p(Fe, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "You have unsaved changes",
            description: g.value
          }, {
            actions: s(() => [
              k(W, {
                variant: "secondary",
                size: "sm",
                onClick: y[3] || (y[3] = (L) => d.$emit("view-history"))
              }, {
                default: s(() => [...y[12] || (y[12] = [
                  f(" View Changes ", -1)
                ])]),
                _: 1
              }),
              k(W, {
                variant: "primary",
                size: "sm",
                onClick: y[4] || (y[4] = (L) => d.$emit("commit-changes"))
              }, {
                default: s(() => [...y[13] || (y[13] = [
                  f(" Commit Changes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["description"])) : i("", !0),
          e.status.comparison.is_synced ? i("", !0) : (t(), p(Fe, {
            key: 2,
            severity: "error",
            icon: "⚠",
            title: "Environment not synced",
            description: "Your environment state does not match the git repository. This may indicate missing installations or configuration issues."
          }, {
            actions: s(() => [
              k(W, {
                variant: "secondary",
                size: "sm",
                onClick: y[5] || (y[5] = (L) => d.$emit("view-debug"))
              }, {
                default: s(() => [...y[14] || (y[14] = [
                  f(" View Logs ", -1)
                ])]),
                _: 1
              }),
              k(W, {
                variant: "primary",
                size: "sm",
                onClick: y[6] || (y[6] = (L) => d.$emit("sync-environment"))
              }, {
                default: s(() => [...y[15] || (y[15] = [
                  f(" Sync Now ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }))
        ])) : i("", !0),
        !u.value && !b.value ? (t(), p(be, {
          key: 1,
          icon: "✅",
          message: "Everything looks good! No issues detected.",
          style: { "margin-top": "var(--cg-space-4)" }
        })) : i("", !0)
      ]),
      _: 1
    }));
  }
}), vo = /* @__PURE__ */ B(fo, [["__scopeId", "data-v-2045da26"]]), ho = ["type", "value", "placeholder", "disabled"], po = /* @__PURE__ */ M({
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
  setup(e, { expose: l, emit: a }) {
    const r = e, b = a, x = S(null);
    function u(g) {
      const d = g.target.value;
      b("update:modelValue", d);
    }
    return de(() => {
      r.autoFocus && x.value && x.value.focus();
    }), l({
      focus: () => {
        var g;
        return (g = x.value) == null ? void 0 : g.focus();
      },
      blur: () => {
        var g;
        return (g = x.value) == null ? void 0 : g.blur();
      }
    }), (g, d) => (t(), n("input", {
      ref_key: "inputRef",
      ref: x,
      type: e.type,
      value: e.modelValue,
      placeholder: e.placeholder,
      disabled: e.disabled,
      class: P(["text-input", { error: e.hasError, monospace: e.monospace }]),
      onInput: u,
      onKeyup: [
        d[0] || (d[0] = Ee((y) => g.$emit("enter"), ["enter"])),
        d[1] || (d[1] = Ee((y) => g.$emit("escape"), ["escape"]))
      ],
      onFocus: d[2] || (d[2] = (y) => g.$emit("focus")),
      onBlur: d[3] || (d[3] = (y) => g.$emit("blur"))
    }, null, 42, ho));
  }
}), yo = /* @__PURE__ */ B(po, [["__scopeId", "data-v-0380d08f"]]), bo = { class: "branch-create-form" }, wo = { class: "form-actions" }, ko = /* @__PURE__ */ M({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(e, { emit: l }) {
    const a = l, r = S(""), b = z(() => {
      const g = r.value.trim();
      return g.length > 0 && !g.startsWith("-") && !g.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(g);
    });
    function x() {
      b.value && (a("create", r.value.trim()), r.value = "");
    }
    function u() {
      r.value = "", a("cancel");
    }
    return (g, d) => (t(), n("div", bo, [
      k(yo, {
        modelValue: r.value,
        "onUpdate:modelValue": d[0] || (d[0] = (y) => r.value = y),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: x,
        onEscape: u
      }, null, 8, ["modelValue"]),
      o("div", wo, [
        k(W, {
          variant: "primary",
          size: "sm",
          disabled: !b.value,
          onClick: x
        }, {
          default: s(() => [...d[1] || (d[1] = [
            f(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        k(W, {
          variant: "secondary",
          size: "sm",
          onClick: u
        }, {
          default: s(() => [...d[2] || (d[2] = [
            f(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), _o = /* @__PURE__ */ B(ko, [["__scopeId", "data-v-7c500394"]]), $o = { class: "branch-list-item__indicator" }, xo = { class: "branch-list-item__name" }, Co = {
  key: 0,
  class: "branch-list-item__actions"
}, Io = {
  key: 0,
  class: "branch-list-item__current-label"
}, So = /* @__PURE__ */ M({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(e) {
    return (l, a) => (t(), n("div", {
      class: P(["branch-list-item", { current: e.isCurrent, clickable: e.clickable }]),
      onClick: a[0] || (a[0] = (r) => e.clickable && l.$emit("click"))
    }, [
      o("span", $o, c(e.isCurrent ? "●" : "○"), 1),
      o("span", xo, c(e.branchName), 1),
      l.$slots.actions || e.showCurrentLabel ? (t(), n("div", Co, [
        q(l.$slots, "actions", {}, void 0, !0),
        e.isCurrent && e.showCurrentLabel ? (t(), n("span", Io, " current ")) : i("", !0)
      ])) : i("", !0)
    ], 2));
  }
}), Eo = /* @__PURE__ */ B(So, [["__scopeId", "data-v-c6581a24"]]), Lo = {
  key: 2,
  class: "branch-list"
}, zo = /* @__PURE__ */ M({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create"],
  setup(e, { emit: l }) {
    const a = l, r = S(!1);
    function b(u) {
      a("create", u), x();
    }
    function x() {
      r.value = !1;
    }
    return (u, g) => (t(), p(pe, null, {
      header: s(() => [
        k(ye, { title: "BRANCHES" }, {
          actions: s(() => [
            k(W, {
              variant: "ghost",
              size: "sm",
              onClick: g[0] || (g[0] = (d) => r.value = !0),
              title: "Create new branch"
            }, {
              default: s(() => [...g[1] || (g[1] = [
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
      content: s(() => [
        r.value ? (t(), p(_o, {
          key: 0,
          onCreate: b,
          onCancel: x
        })) : i("", !0),
        e.branches.length === 0 ? (t(), p(be, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (t(), n("div", Lo, [
          (t(!0), n(V, null, K(e.branches, (d) => (t(), p(Eo, {
            key: d.name,
            "branch-name": d.name,
            "is-current": d.is_current
          }, {
            actions: s(() => [
              d.is_current ? i("", !0) : (t(), p(W, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: (y) => u.$emit("switch", d.name)
              }, {
                default: s(() => [...g[2] || (g[2] = [
                  f(" Switch ", -1)
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
}), No = /* @__PURE__ */ B(zo, [["__scopeId", "data-v-763d6ec4"]]), Mo = { class: "commit-list" }, Bo = /* @__PURE__ */ M({
  __name: "CommitList",
  setup(e) {
    return (l, a) => (t(), n("div", Mo, [
      q(l.$slots, "default", {}, void 0, !0)
    ]));
  }
}), Ro = /* @__PURE__ */ B(Bo, [["__scopeId", "data-v-8c5ee761"]]), To = { class: "commit-hash" }, Oo = /* @__PURE__ */ M({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const l = e, a = z(() => l.hash.slice(0, l.length));
    return (r, b) => (t(), n("span", To, c(a.value), 1));
  }
}), Do = /* @__PURE__ */ B(Oo, [["__scopeId", "data-v-7c333cc6"]]), Uo = { class: "commit-message" }, Wo = { class: "commit-date" }, Vo = /* @__PURE__ */ M({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const a = e, r = l;
    function b() {
      a.clickable && r("click");
    }
    return (x, u) => (t(), n("div", {
      class: P(["commit-item", { clickable: e.clickable }]),
      onClick: b
    }, [
      k(Do, { hash: e.hash }, null, 8, ["hash"]),
      o("span", Uo, c(e.message), 1),
      o("span", Wo, c(e.relativeDate), 1),
      x.$slots.actions ? (t(), n("div", {
        key: 0,
        class: "commit-actions",
        onClick: u[0] || (u[0] = xe(() => {
        }, ["stop"]))
      }, [
        q(x.$slots, "actions", {}, void 0, !0)
      ])) : i("", !0)
    ], 2));
  }
}), Ao = /* @__PURE__ */ B(Vo, [["__scopeId", "data-v-dd7c621b"]]), Fo = /* @__PURE__ */ M({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(e) {
    return (l, a) => (t(), p(pe, null, {
      header: s(() => [
        k(ye, { title: "HISTORY" })
      ]),
      content: s(() => [
        e.commits.length === 0 ? (t(), p(be, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (t(), p(Ro, { key: 1 }, {
          default: s(() => [
            (t(!0), n(V, null, K(e.commits, (r) => (t(), p(Ao, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (b) => l.$emit("select", r)
            }, {
              actions: s(() => [
                k(W, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (b) => l.$emit("checkout", r),
                  title: "Checkout this commit"
                }, {
                  default: s(() => [...a[0] || (a[0] = [
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
}), Go = /* @__PURE__ */ B(Fo, [["__scopeId", "data-v-981c3c64"]]), Ye = [
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
], Po = {
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
}, et = [
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
], jo = [
  ...et,
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
], Be = [
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
], Ho = [
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
], Re = [
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
], Q = {
  // Environment Management
  getEnvironments: async () => (await ee(300), [
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
    await ee(500), console.log(`[MOCK] Switching to environment: ${e}`);
  },
  createEnvironment: async (e, l, a) => {
    await ee(1e3), console.log(`[MOCK] Creating environment: ${e} with backend ${l}`, a ? `cloned from ${a}` : "");
  },
  deleteEnvironment: async (e) => {
    await ee(500), console.log(`[MOCK] Deleting environment: ${e}`);
  },
  // Workflow Management
  getWorkflows: async () => (await ee(400), Ye),
  getWorkflowDetails: async (e) => (await ee(300), Po[e] || {
    name: e,
    status: "synced",
    nodes: [],
    models: []
  }),
  /**
   * Resolve Workflow - Return resolution plan
   * Based on ResolutionResult structure (lines 1763-1788)
   */
  resolveWorkflow: async (e) => (await ee(800), {
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
  installWorkflowDeps: async (e, l, a) => {
    await ee(2e3), console.log(`[MOCK] Installing deps for ${e}: nodes=${l}, models=${a}`);
  },
  setModelImportance: async (e, l, a) => {
    await ee(200), console.log(`[MOCK] Setting ${l} importance to ${a} in ${e}`);
  },
  // Model Management
  getEnvironmentModels: async () => (await ee(350), et),
  getWorkspaceModels: async () => (await ee(400), jo),
  updateModelSource: async (e, l) => {
    await ee(300), console.log(`[MOCK] Updating source for ${e}: ${l}`);
  },
  deleteModel: async (e) => {
    await ee(500), console.log(`[MOCK] Deleting model: ${e}`);
  },
  downloadModel: async (e) => {
    await ee(3e3), console.log("[MOCK] Downloading model:", e);
  },
  // Node Management
  getNodes: async () => {
    await ee(350);
    const e = Be.filter((a) => a.installed), l = Be.filter((a) => !a.installed);
    return {
      nodes: Be,
      total_count: Be.length,
      installed_count: e.length,
      missing_count: l.length
    };
  },
  installNode: async (e) => {
    await ee(2500), console.log(`[MOCK] Installing node: ${e}`);
  },
  updateNode: async (e) => {
    await ee(2e3), console.log(`[MOCK] Updating node: ${e}`);
  },
  uninstallNode: async (e) => {
    await ee(1e3), console.log(`[MOCK] Uninstalling node: ${e}`);
  },
  // Settings & Debug
  getConfig: async () => (await ee(200), {
    civitai_api_key: "",
    huggingface_token: "",
    models_path: "/workspace/models",
    auto_sync_models: !0
  }),
  updateConfig: async (e) => {
    await ee(300), console.log("[MOCK] Updating config:", e);
  },
  getEnvironmentLogs: async (e, l) => (await ee(250), (e ? Re.filter((r) => r.level === e) : Re).slice(0, l || 100)),
  getWorkspaceLogs: async (e, l) => {
    await ee(300);
    const a = [...Re, ...Re.map((b) => ({
      ...b,
      context: { ...b.context, environment: "testing" }
    }))];
    return (e ? a.filter((b) => b.level === e) : a).slice(0, l || 100);
  },
  // Existing endpoints (from original implementation)
  /**
   * Get Environment Status - Matching ComfyGitStatus type
   * See frontend/src/types/comfygit.ts lines 22-32
   */
  getStatus: async () => (await ee(400), {
    environment: "production",
    branch: "main",
    is_detached_head: !1,
    is_synced: !1,
    has_changes: !1,
    workflows: {
      new: ["img2img-basic.json", "controlnet-pose.json"],
      modified: ["flux-schnell.json"],
      deleted: [],
      synced: Ye.filter((e) => e.status === "synced").map((e) => e.name),
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
  getCommitHistory: async (e = 10) => (await ee(300), Ho.slice(0, e)),
  getBranches: async () => (await ee(250), {
    branches: [
      { name: "main", is_current: !0 },
      { name: "develop", is_current: !1 },
      { name: "feature/new-nodes", is_current: !1 }
    ],
    current: "main"
  })
};
function ee(e) {
  return new Promise((l) => setTimeout(l, e));
}
function ge() {
  const e = S(!1), l = S(null);
  async function a(D, X) {
    var Me;
    if (!((Me = window.app) != null && Me.api))
      throw new Error("ComfyUI API not available");
    const se = await window.app.api.fetchApi(D, X);
    if (!se.ok) {
      const Ce = await se.json().catch(() => ({}));
      throw new Error(Ce.error || Ce.message || `Request failed: ${se.status}`);
    }
    return se.json();
  }
  async function r() {
    return Q.getStatus();
  }
  async function b(D, X = !1) {
    return a("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: D, allow_issues: X })
    });
  }
  async function x(D = 10, X = 0) {
    {
      const se = await Q.getCommitHistory(D);
      return {
        commits: se,
        total: se.length,
        offset: X
      };
    }
  }
  async function u(D) {
    return a("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: D })
    });
  }
  async function g() {
    return Q.getBranches();
  }
  async function d(D) {
    return a(`/v2/comfygit/commit/${D}`);
  }
  async function y(D, X = !1) {
    return a("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: D, force: X })
    });
  }
  async function L(D, X = "HEAD") {
    return a("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: D, start_point: X })
    });
  }
  async function _(D, X = !1) {
    return a("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: D, force: X })
    });
  }
  async function A() {
    return Q.getEnvironments();
  }
  async function R(D) {
    return Q.switchEnvironment(D);
  }
  async function j() {
    return null;
  }
  async function U(D, X, se) {
    return await Q.createEnvironment(D, X, se), { status: "success" };
  }
  async function T(D) {
    return await Q.deleteEnvironment(D), { status: "success" };
  }
  async function G() {
    return Q.getWorkflows();
  }
  async function J(D) {
    return Q.getWorkflowDetails(D);
  }
  async function Z(D) {
    return Q.resolveWorkflow(D);
  }
  async function I(D, X, se) {
    return await Q.installWorkflowDeps(D, X, se), { status: "success" };
  }
  async function $(D, X, se) {
    return Q.setModelImportance(D, X, se);
  }
  async function m() {
    return Q.getEnvironmentModels();
  }
  async function w() {
    return Q.getWorkspaceModels();
  }
  async function h(D, X) {
    return Q.updateModelSource(D, X);
  }
  async function C(D) {
    return Q.deleteModel(D);
  }
  async function E(D) {
    return await Q.downloadModel(D), { status: "success" };
  }
  async function le() {
    return Q.getConfig();
  }
  async function F(D) {
    return Q.updateConfig(D);
  }
  async function N(D, X) {
    return Q.getEnvironmentLogs(D, X);
  }
  async function Y(D, X) {
    return Q.getWorkspaceLogs(D, X);
  }
  async function me() {
    return Q.getNodes();
  }
  async function we(D) {
    return await Q.installNode(D), { status: "success" };
  }
  async function Ve(D) {
    return await Q.updateNode(D), { status: "success" };
  }
  async function Ne(D) {
    return await Q.uninstallNode(D), { status: "success" };
  }
  return {
    isLoading: e,
    error: l,
    getStatus: r,
    commit: b,
    getHistory: x,
    exportEnv: u,
    // Git Operations
    getBranches: g,
    getCommitDetail: d,
    checkout: y,
    createBranch: L,
    switchBranch: _,
    // Environment Management
    getEnvironments: A,
    switchEnvironment: R,
    getSwitchProgress: j,
    createEnvironment: U,
    deleteEnvironment: T,
    // Workflow Management
    getWorkflows: G,
    getWorkflowDetails: J,
    resolveWorkflow: Z,
    installWorkflowDeps: I,
    setModelImportance: $,
    // Model Management
    getEnvironmentModels: m,
    getWorkspaceModels: w,
    updateModelSource: h,
    deleteModel: C,
    downloadModel: E,
    // Settings
    getConfig: le,
    updateConfig: F,
    // Debug/Logs
    getEnvironmentLogs: N,
    getWorkspaceLogs: Y,
    // Node Management
    getNodes: me,
    installNode: we,
    updateNode: Ve,
    uninstallNode: Ne
  };
}
const Ko = { class: "base-modal-header" }, qo = {
  key: 0,
  class: "base-modal-title"
}, Yo = { class: "base-modal-body" }, Zo = {
  key: 0,
  class: "base-modal-loading"
}, Jo = {
  key: 1,
  class: "base-modal-error"
}, Xo = {
  key: 0,
  class: "base-modal-footer"
}, Qo = /* @__PURE__ */ M({
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
    const a = e, r = l;
    function b() {
      a.closeOnOverlayClick && r("close");
    }
    function x(u) {
      u.key === "Escape" && r("close");
    }
    return de(() => {
      document.addEventListener("keydown", x), document.body.style.overflow = "hidden";
    }), lt(() => {
      document.removeEventListener("keydown", x), document.body.style.overflow = "";
    }), (u, g) => (t(), p(Ze, { to: "body" }, [
      o("div", {
        class: "base-modal-overlay",
        onClick: b
      }, [
        o("div", {
          class: P(["base-modal-content", e.size]),
          onClick: g[1] || (g[1] = xe(() => {
          }, ["stop"]))
        }, [
          o("div", Ko, [
            q(u.$slots, "header", {}, () => [
              e.title ? (t(), n("h3", qo, c(e.title), 1)) : i("", !0)
            ], !0),
            e.showCloseButton ? (t(), n("button", {
              key: 0,
              class: "base-modal-close",
              onClick: g[0] || (g[0] = (d) => u.$emit("close"))
            }, [...g[2] || (g[2] = [
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
          o("div", Yo, [
            e.loading ? (t(), n("div", Zo, "Loading...")) : e.error ? (t(), n("div", Jo, c(e.error), 1)) : q(u.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          u.$slots.footer ? (t(), n("div", Xo, [
            q(u.$slots, "footer", {}, void 0, !0)
          ])) : i("", !0)
        ], 2)
      ])
    ]));
  }
}), Oe = /* @__PURE__ */ B(Qo, [["__scopeId", "data-v-700d367b"]]), ea = ["type", "disabled"], ta = {
  key: 0,
  class: "spinner"
}, oa = /* @__PURE__ */ M({
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
    return (l, a) => (t(), n("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: P(["base-btn", e.variant, e.size, { "full-width": e.fullWidth, loading: e.loading }]),
      onClick: a[0] || (a[0] = (r) => l.$emit("click", r))
    }, [
      e.loading ? (t(), n("span", ta)) : i("", !0),
      q(l.$slots, "default", {}, void 0, !0)
    ], 10, ea));
  }
}), ne = /* @__PURE__ */ B(oa, [["__scopeId", "data-v-f3452606"]]), aa = {
  key: 0,
  class: "base-title-count"
}, sa = /* @__PURE__ */ M({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (l, a) => (t(), p(He(`h${e.level}`), {
      class: P(["base-title", e.variant])
    }, {
      default: s(() => [
        q(l.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (t(), n("span", aa, "(" + c(e.count) + ")", 1)) : i("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), he = /* @__PURE__ */ B(sa, [["__scopeId", "data-v-5a01561d"]]), na = ["value", "disabled"], la = {
  key: 0,
  value: "",
  disabled: ""
}, ra = ["value"], ia = {
  key: 0,
  class: "base-select-error"
}, ca = /* @__PURE__ */ M({
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
    function a(r) {
      return typeof r == "string" ? r : r.label;
    }
    return (r, b) => (t(), n("div", {
      class: P(["base-select-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      o("select", {
        value: e.modelValue,
        disabled: e.disabled,
        class: P(["base-select", { error: !!e.error }]),
        onChange: b[0] || (b[0] = (x) => r.$emit("update:modelValue", x.target.value))
      }, [
        e.placeholder ? (t(), n("option", la, c(e.placeholder), 1)) : i("", !0),
        (t(!0), n(V, null, K(e.options, (x) => (t(), n("option", {
          key: l(x),
          value: l(x)
        }, c(a(x)), 9, ra))), 128))
      ], 42, na),
      e.error ? (t(), n("span", ia, c(e.error), 1)) : i("", !0)
    ], 2));
  }
}), da = /* @__PURE__ */ B(ca, [["__scopeId", "data-v-7436d745"]]), ua = { class: "detail-section" }, ma = {
  key: 0,
  class: "empty-message"
}, ga = { class: "model-header" }, fa = { class: "model-name" }, va = { class: "model-details" }, ha = { class: "model-row" }, pa = { class: "model-row" }, ya = {
  key: 0,
  class: "model-row"
}, ba = { class: "value" }, wa = {
  key: 1,
  class: "model-row"
}, ka = { class: "value" }, _a = {
  key: 0,
  class: "model-actions"
}, $a = { class: "detail-section" }, xa = {
  key: 0,
  class: "empty-message"
}, Ca = { class: "node-name" }, Ia = {
  key: 0,
  class: "node-version"
}, Sa = /* @__PURE__ */ M({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve"],
  setup(e, { emit: l }) {
    const a = e, r = l, { getWorkflowDetails: b, setModelImportance: x } = ge(), u = S(null), g = S(!1), d = S(null), y = S(!1), L = S({}), _ = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    async function A() {
      g.value = !0, d.value = null;
      try {
        u.value = await b(a.workflowName);
      } catch (U) {
        d.value = U instanceof Error ? U.message : "Failed to load workflow details";
      } finally {
        g.value = !1;
      }
    }
    function R(U, T) {
      L.value[U] = T, y.value = !0;
    }
    async function j() {
      if (!y.value) {
        r("close");
        return;
      }
      g.value = !0, d.value = null;
      try {
        for (const [U, T] of Object.entries(L.value))
          await x(a.workflowName, U, T);
        r("close");
      } catch (U) {
        d.value = U instanceof Error ? U.message : "Failed to save changes";
      } finally {
        g.value = !1;
      }
    }
    return de(A), (U, T) => (t(), p(Oe, {
      title: `WORKFLOW DETAILS: ${e.workflowName}`,
      size: "lg",
      loading: g.value,
      error: d.value || void 0,
      onClose: T[2] || (T[2] = (G) => r("close"))
    }, {
      body: s(() => [
        u.value ? (t(), n(V, { key: 0 }, [
          o("section", ua, [
            k(he, { variant: "section" }, {
              default: s(() => [
                f("MODELS USED (" + c(u.value.models.length) + ")", 1)
              ]),
              _: 1
            }),
            u.value.models.length === 0 ? (t(), n("div", ma, " No models used in this workflow ")) : i("", !0),
            (t(!0), n(V, null, K(u.value.models, (G) => (t(), n("div", {
              key: G.hash,
              class: "model-card"
            }, [
              o("div", ga, [
                T[3] || (T[3] = o("span", { class: "model-icon" }, "📦", -1)),
                o("span", fa, c(G.filename), 1)
              ]),
              o("div", va, [
                o("div", ha, [
                  T[4] || (T[4] = o("span", { class: "label" }, "Status:", -1)),
                  o("span", {
                    class: P(["value", G.status === "available" ? "success" : "error"])
                  }, c(G.status === "available" ? "✓ Available" : "⚠ Missing"), 3)
                ]),
                o("div", pa, [
                  T[5] || (T[5] = o("span", { class: "label" }, "Importance:", -1)),
                  k(da, {
                    "model-value": L.value[G.hash] || G.importance,
                    options: _,
                    "onUpdate:modelValue": (J) => R(G.hash, J)
                  }, null, 8, ["model-value", "onUpdate:modelValue"])
                ]),
                G.node_type ? (t(), n("div", ya, [
                  T[6] || (T[6] = o("span", { class: "label" }, "Used in:", -1)),
                  o("span", ba, c(G.node_type) + " (Node " + c(G.node_id) + ")", 1)
                ])) : i("", !0),
                G.size_mb ? (t(), n("div", wa, [
                  T[7] || (T[7] = o("span", { class: "label" }, "Size:", -1)),
                  o("span", ka, c(G.size_mb) + " MB", 1)
                ])) : i("", !0)
              ]),
              G.status === "missing" ? (t(), n("div", _a, [
                k(ne, {
                  variant: "secondary",
                  size: "sm",
                  onClick: T[0] || (T[0] = (J) => r("resolve"))
                }, {
                  default: s(() => [...T[8] || (T[8] = [
                    f(" Resolve ", -1)
                  ])]),
                  _: 1
                })
              ])) : i("", !0)
            ]))), 128))
          ]),
          T[9] || (T[9] = o("div", { class: "info-box" }, [
            o("div", { class: "info-title" }, "Importance options:"),
            o("ul", { class: "info-list" }, [
              o("li", null, [
                o("strong", null, "Required"),
                f(" — Must have for workflow to run")
              ]),
              o("li", null, [
                o("strong", null, "Flexible"),
                f(" — Workflow adapts if missing")
              ]),
              o("li", null, [
                o("strong", null, "Optional"),
                f(" — Nice to have, can be skipped")
              ])
            ])
          ], -1)),
          o("section", $a, [
            k(he, { variant: "section" }, {
              default: s(() => [
                f("NODES USED (" + c(u.value.nodes.length) + ")", 1)
              ]),
              _: 1
            }),
            u.value.nodes.length === 0 ? (t(), n("div", xa, " No custom nodes used in this workflow ")) : i("", !0),
            (t(!0), n(V, null, K(u.value.nodes, (G) => (t(), n("div", {
              key: G.name,
              class: "node-item"
            }, [
              o("span", {
                class: P(["node-status", G.installed ? "installed" : "missing"])
              }, c(G.installed ? "✓" : "✕"), 3),
              o("span", Ca, c(G.name), 1),
              G.version ? (t(), n("span", Ia, "v" + c(G.version), 1)) : i("", !0)
            ]))), 128))
          ])
        ], 64)) : i("", !0)
      ]),
      footer: s(() => [
        k(ne, {
          variant: "secondary",
          onClick: T[1] || (T[1] = (G) => r("close"))
        }, {
          default: s(() => [...T[10] || (T[10] = [
            f(" Close ", -1)
          ])]),
          _: 1
        }),
        y.value ? (t(), p(ne, {
          key: 0,
          variant: "primary",
          onClick: j
        }, {
          default: s(() => [...T[11] || (T[11] = [
            f(" Save Changes ", -1)
          ])]),
          _: 1
        })) : i("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Ea = /* @__PURE__ */ B(Sa, [["__scopeId", "data-v-6ce9a41c"]]), La = {
  key: 0,
  class: "resolve-section"
}, za = { class: "resolve-card success-card" }, Na = { class: "items-list" }, Ma = { class: "item-info" }, Ba = { class: "item-name" }, Ra = {
  key: 0,
  class: "item-meta"
}, Ta = { class: "match-type" }, Oa = { class: "source" }, Da = {
  key: 1,
  class: "resolve-section"
}, Ua = { class: "resolve-card warning-card" }, Wa = { class: "items-list" }, Va = { class: "item-info" }, Aa = { class: "item-name" }, Fa = { class: "item-meta" }, Ga = { key: 0 }, Pa = { key: 1 }, ja = {
  key: 0,
  class: "item-warning"
}, Ha = {
  key: 0,
  class: "item-action"
}, Ka = ["onClick"], qa = {
  key: 2,
  class: "resolve-section"
}, Ya = { class: "info-text" }, Za = { class: "actions-summary" }, Ja = { class: "summary-list" }, Xa = { key: 0 }, Qa = { key: 1 }, es = { key: 2 }, ts = {
  key: 0,
  class: "estimated-size"
}, os = /* @__PURE__ */ M({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh"],
  setup(e, { emit: l }) {
    const a = e, r = l, { resolveWorkflow: b, installWorkflowDeps: x } = ge(), u = S(null), g = S(!1), d = S(!1), y = S(null), L = z(() => {
      var $;
      return u.value ? (($ = u.value.download_results) == null ? void 0 : $.every((m) => m.can_download)) ?? !1 : !1;
    });
    async function _() {
      g.value = !0, y.value = null;
      try {
        u.value = await b(a.workflowName);
      } catch ($) {
        y.value = $ instanceof Error ? $.message : "Failed to analyze workflow";
      } finally {
        g.value = !1;
      }
    }
    function A($) {
      return !$.possible_matches || $.possible_matches.length === 0 ? null : $.possible_matches.reduce(
        (m, w) => w.match_confidence > m.match_confidence ? w : m
      );
    }
    function R($) {
      return $ >= 0.9 ? "high" : $ >= 0.7 ? "medium" : "low";
    }
    function j($) {
      const m = A($);
      return m ? m.package_id.startsWith("http") ? "GitHub" : "ComfyUI Registry" : "Unknown";
    }
    function U($) {
      var m, w;
      return (w = (m = u.value) == null ? void 0 : m.download_results) == null ? void 0 : w.find((h) => h.model === $);
    }
    function T($) {
      const m = U($);
      return (m == null ? void 0 : m.can_download) ?? !1;
    }
    function G($) {
      const m = U($);
      return (m == null ? void 0 : m.source_url) || null;
    }
    function J($) {
      window.open($, "_blank");
    }
    async function Z() {
      if (!(!u.value || d.value)) {
        d.value = !0, y.value = null;
        try {
          await x(
            a.workflowName,
            u.value.nodes_to_install,
            []
          ), r("install"), r("refresh"), r("close");
        } catch ($) {
          y.value = $ instanceof Error ? $.message : "Installation failed";
        } finally {
          d.value = !1;
        }
      }
    }
    async function I() {
      if (!(!u.value || d.value)) {
        d.value = !0, y.value = null;
        try {
          await x(
            a.workflowName,
            u.value.nodes_to_install,
            u.value.models_to_download
          ), r("install"), r("refresh"), r("close");
        } catch ($) {
          y.value = $ instanceof Error ? $.message : "Installation failed";
        } finally {
          d.value = !1;
        }
      }
    }
    return de(_), ($, m) => (t(), p(Oe, {
      title: `RESOLVE DEPENDENCIES: ${e.workflowName}`,
      size: "lg",
      loading: g.value,
      error: y.value || void 0,
      onClose: m[1] || (m[1] = (w) => r("close"))
    }, {
      body: s(() => [
        u.value ? (t(), n(V, { key: 0 }, [
          m[5] || (m[5] = o("div", { class: "intro-message" }, " This workflow needs the following to work: ", -1)),
          u.value.nodes_unresolved.length > 0 ? (t(), n("section", La, [
            k(he, { variant: "section" }, {
              default: s(() => [
                f("NODES (" + c(u.value.nodes_unresolved.length) + ")", 1)
              ]),
              _: 1
            }),
            o("div", za, [
              m[2] || (m[2] = o("div", { class: "card-header" }, [
                o("span", { class: "status-icon" }, "✓"),
                o("span", { class: "card-title" }, "Can install automatically")
              ], -1)),
              o("div", Na, [
                (t(!0), n(V, null, K(u.value.nodes_unresolved, (w) => {
                  var h;
                  return t(), n("div", {
                    key: w.node_type,
                    class: "item"
                  }, [
                    o("div", Ma, [
                      o("div", Ba, c(((h = A(w)) == null ? void 0 : h.package_id) || w.node_type), 1),
                      A(w) ? (t(), n("div", Ra, [
                        o("span", {
                          class: P(["confidence-badge", R(A(w).match_confidence)])
                        }, c(Math.round(A(w).match_confidence * 100)) + "% match ", 3),
                        o("span", Ta, c(A(w).match_type), 1),
                        o("span", Oa, "Source: " + c(j(w)), 1)
                      ])) : i("", !0)
                    ])
                  ]);
                }), 128))
              ])
            ])
          ])) : i("", !0),
          u.value.models_unresolved.length > 0 ? (t(), n("section", Da, [
            k(he, { variant: "section" }, {
              default: s(() => [
                f("MODELS (" + c(u.value.models_unresolved.length) + ")", 1)
              ]),
              _: 1
            }),
            o("div", Ua, [
              m[3] || (m[3] = o("div", { class: "card-header" }, [
                o("span", { class: "status-icon" }, "⚠"),
                o("span", { class: "card-title" }, "Manual download required")
              ], -1)),
              o("div", Wa, [
                (t(!0), n(V, null, K(u.value.models_unresolved, (w) => (t(), n("div", {
                  key: w.filename,
                  class: "item"
                }, [
                  o("div", Va, [
                    o("div", Aa, c(w.filename), 1),
                    o("div", Fa, [
                      w.expected_category ? (t(), n("span", Ga, "Type: " + c(w.expected_category), 1)) : i("", !0),
                      U(w.filename) ? (t(), n("span", Pa, " Size: ~" + c(U(w.filename).estimated_size_mb) + " MB ", 1)) : i("", !0)
                    ]),
                    T(w.filename) ? i("", !0) : (t(), n("div", ja, " No auto-download source configured "))
                  ]),
                  G(w.filename) ? (t(), n("div", Ha, [
                    o("button", {
                      class: "link-btn",
                      onClick: (h) => J(G(w.filename))
                    }, " Open Source ↗ ", 8, Ka)
                  ])) : i("", !0)
                ]))), 128))
              ])
            ])
          ])) : i("", !0),
          u.value.nodes_resolved.length > 0 || u.value.models_resolved.length > 0 ? (t(), n("section", qa, [
            k(he, { variant: "section" }, {
              default: s(() => [
                f(" ALREADY AVAILABLE (" + c(u.value.nodes_resolved.length + u.value.models_resolved.length) + ") ", 1)
              ]),
              _: 1
            }),
            o("div", Ya, c(u.value.nodes_resolved.length) + " nodes and " + c(u.value.models_resolved.length) + " models are already installed ", 1)
          ])) : i("", !0),
          o("div", Za, [
            m[4] || (m[4] = o("div", { class: "summary-title" }, "This will:", -1)),
            o("ol", Ja, [
              u.value.nodes_to_install.length ? (t(), n("li", Xa, " Install " + c(u.value.nodes_to_install.length) + " nodes (~" + c(u.value.estimated_time_seconds) + "s) ", 1)) : i("", !0),
              u.value.nodes_to_install.length ? (t(), n("li", Qa, " Restart ComfyUI to load new nodes ")) : i("", !0),
              u.value.models_to_download.length ? (t(), n("li", es, " You'll still need to download " + c(u.value.models_to_download.length) + " model(s) manually ", 1)) : i("", !0)
            ]),
            u.value.estimated_size_mb ? (t(), n("div", ts, " Estimated download: " + c(u.value.estimated_size_mb) + " MB ", 1)) : i("", !0)
          ])
        ], 64)) : i("", !0)
      ]),
      footer: s(() => [
        k(ne, {
          variant: "secondary",
          onClick: m[0] || (m[0] = (w) => r("close"))
        }, {
          default: s(() => [...m[6] || (m[6] = [
            f(" Cancel ", -1)
          ])]),
          _: 1
        }),
        u.value && u.value.nodes_to_install.length && u.value.models_to_download.length ? (t(), p(ne, {
          key: 0,
          variant: "secondary",
          disabled: d.value,
          loading: d.value,
          onClick: Z
        }, {
          default: s(() => [...m[7] || (m[7] = [
            f(" Install Nodes Only ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : i("", !0),
        u.value && (u.value.nodes_to_install.length || u.value.models_to_download.length) ? (t(), p(ne, {
          key: 1,
          variant: "primary",
          disabled: d.value || u.value.models_to_download.length > 0 && !L.value,
          loading: d.value,
          onClick: I
        }, {
          default: s(() => [...m[8] || (m[8] = [
            f(" Install All ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : i("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), as = /* @__PURE__ */ B(os, [["__scopeId", "data-v-d68efb14"]]), ss = { class: "search-input-wrapper" }, ns = ["value", "placeholder"], ls = /* @__PURE__ */ M({
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
    const a = e, r = l, b = S(null);
    let x;
    function u(d) {
      const y = d.target.value;
      a.debounce > 0 ? (clearTimeout(x), x = window.setTimeout(() => {
        r("update:modelValue", y);
      }, a.debounce)) : r("update:modelValue", y);
    }
    function g() {
      var d;
      r("update:modelValue", ""), r("clear"), (d = b.value) == null || d.focus();
    }
    return de(() => {
      a.autoFocus && b.value && b.value.focus();
    }), (d, y) => (t(), n("div", ss, [
      o("input", {
        ref_key: "inputRef",
        ref: b,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: u,
        onKeyup: Ee(g, ["escape"])
      }, null, 40, ns),
      e.clearable && e.modelValue ? (t(), n("button", {
        key: 0,
        class: "clear-button",
        onClick: g,
        title: "Clear search"
      }, " ✕ ")) : i("", !0)
    ]));
  }
}), rs = /* @__PURE__ */ B(ls, [["__scopeId", "data-v-266f857a"]]), is = { class: "search-bar" }, cs = /* @__PURE__ */ M({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (l, a) => (t(), n("div", is, [
      k(rs, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": a[0] || (a[0] = (r) => l.$emit("update:modelValue", r)),
        onClear: a[1] || (a[1] = (r) => l.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), De = /* @__PURE__ */ B(cs, [["__scopeId", "data-v-3d51bbfd"]]), ds = { class: "section-group" }, us = {
  key: 0,
  class: "section-content"
}, ms = /* @__PURE__ */ M({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(e, { emit: l }) {
    const a = e, r = l, b = S(a.initiallyExpanded);
    function x() {
      a.collapsible && (b.value = !b.value, r("toggle", b.value));
    }
    return (u, g) => (t(), n("section", ds, [
      k(Pe, {
        count: e.count,
        clickable: e.collapsible,
        expanded: b.value,
        onClick: x
      }, {
        default: s(() => [
          f(c(e.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !e.collapsible || b.value ? (t(), n("div", us, [
        q(u.$slots, "default", {}, void 0, !0)
      ])) : i("", !0)
    ]));
  }
}), ie = /* @__PURE__ */ B(ms, [["__scopeId", "data-v-c48e33ed"]]), gs = { class: "item-header" }, fs = {
  key: 0,
  class: "item-icon"
}, vs = { class: "item-info" }, hs = {
  key: 0,
  class: "item-title"
}, ps = {
  key: 1,
  class: "item-subtitle"
}, ys = {
  key: 0,
  class: "item-details"
}, bs = {
  key: 1,
  class: "item-actions"
}, ws = /* @__PURE__ */ M({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const a = e, r = z(() => a.status ? `status-${a.status}` : "");
    return (b, x) => (t(), n("div", {
      class: P(["item-card", { clickable: e.clickable, compact: e.compact }, r.value]),
      onClick: x[0] || (x[0] = (u) => e.clickable && b.$emit("click"))
    }, [
      o("div", gs, [
        b.$slots.icon ? (t(), n("span", fs, [
          q(b.$slots, "icon", {}, void 0, !0)
        ])) : i("", !0),
        o("div", vs, [
          b.$slots.title ? (t(), n("div", hs, [
            q(b.$slots, "title", {}, void 0, !0)
          ])) : i("", !0),
          b.$slots.subtitle ? (t(), n("div", ps, [
            q(b.$slots, "subtitle", {}, void 0, !0)
          ])) : i("", !0)
        ])
      ]),
      b.$slots.details ? (t(), n("div", ys, [
        q(b.$slots, "details", {}, void 0, !0)
      ])) : i("", !0),
      b.$slots.actions ? (t(), n("div", bs, [
        q(b.$slots, "actions", {}, void 0, !0)
      ])) : i("", !0)
    ], 2));
  }
}), ce = /* @__PURE__ */ B(ws, [["__scopeId", "data-v-cc435e0e"]]), ks = { class: "loading-state" }, _s = { class: "loading-message" }, $s = /* @__PURE__ */ M({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (l, a) => (t(), n("div", ks, [
      a[0] || (a[0] = o("div", { class: "spinner" }, null, -1)),
      o("p", _s, c(e.message), 1)
    ]));
  }
}), Le = /* @__PURE__ */ B($s, [["__scopeId", "data-v-ad8436c9"]]), xs = { class: "error-state" }, Cs = { class: "error-message" }, Is = /* @__PURE__ */ M({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (l, a) => (t(), n("div", xs, [
      a[2] || (a[2] = o("span", { class: "error-icon" }, "⚠", -1)),
      o("p", Cs, c(e.message), 1),
      e.retry ? (t(), p(W, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: a[0] || (a[0] = (r) => l.$emit("retry"))
      }, {
        default: s(() => [...a[1] || (a[1] = [
          f(" Retry ", -1)
        ])]),
        _: 1
      })) : i("", !0)
    ]));
  }
}), ze = /* @__PURE__ */ B(Is, [["__scopeId", "data-v-5397be48"]]), Ss = /* @__PURE__ */ M({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { emit: l }) {
    const a = l, { getWorkflows: r } = ge(), b = S([]), x = S(!1), u = S(null), g = S(""), d = S(!1), y = S(!1), L = S(!1), _ = S(!1), A = S(null), R = z(
      () => b.value.filter((F) => F.status === "broken")
    ), j = z(
      () => b.value.filter((F) => F.status === "new")
    ), U = z(
      () => b.value.filter((F) => F.status === "modified")
    ), T = z(
      () => b.value.filter((F) => F.status === "synced")
    ), G = z(() => {
      if (!g.value.trim()) return b.value;
      const F = g.value.toLowerCase();
      return b.value.filter((N) => N.name.toLowerCase().includes(F));
    }), J = z(
      () => R.value.filter(
        (F) => !g.value.trim() || F.name.toLowerCase().includes(g.value.toLowerCase())
      )
    ), Z = z(
      () => j.value.filter(
        (F) => !g.value.trim() || F.name.toLowerCase().includes(g.value.toLowerCase())
      )
    ), I = z(
      () => U.value.filter(
        (F) => !g.value.trim() || F.name.toLowerCase().includes(g.value.toLowerCase())
      )
    ), $ = z(
      () => T.value.filter(
        (F) => !g.value.trim() || F.name.toLowerCase().includes(g.value.toLowerCase())
      )
    ), m = z(
      () => y.value ? $.value : $.value.slice(0, 5)
    );
    async function w() {
      x.value = !0, u.value = null;
      try {
        b.value = await r();
      } catch (F) {
        u.value = F instanceof Error ? F.message : "Failed to load workflows";
      } finally {
        x.value = !1;
      }
    }
    function h(F) {
      A.value = F, L.value = !0;
    }
    function C(F) {
      A.value = F, _.value = !0;
    }
    function E() {
      alert("Bulk resolution not yet implemented");
    }
    function le() {
      a("refresh");
    }
    return de(w), (F, N) => (t(), n(V, null, [
      k(pe, null, {
        header: s(() => [
          k(ye, { title: "WORKFLOWS" }, {
            actions: s(() => [
              R.value.length > 0 ? (t(), p(W, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: E
              }, {
                default: s(() => [...N[7] || (N[7] = [
                  f(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : i("", !0)
            ]),
            _: 1
          })
        ]),
        search: s(() => [
          k(De, {
            modelValue: g.value,
            "onUpdate:modelValue": N[0] || (N[0] = (Y) => g.value = Y),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: s(() => [
          x.value ? (t(), p(Le, {
            key: 0,
            message: "Loading workflows..."
          })) : u.value ? (t(), p(ze, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: w
          }, null, 8, ["message"])) : (t(), n(V, { key: 2 }, [
            J.value.length ? (t(), p(ie, {
              key: 0,
              title: "BROKEN",
              count: J.value.length
            }, {
              default: s(() => [
                (t(!0), n(V, null, K(J.value, (Y) => (t(), p(ce, {
                  key: Y.name,
                  status: "broken"
                }, {
                  icon: s(() => [...N[8] || (N[8] = [
                    f("⚠", -1)
                  ])]),
                  title: s(() => [
                    f(c(Y.name), 1)
                  ]),
                  subtitle: s(() => [
                    f(" Missing: " + c(Y.missing_nodes) + " nodes, " + c(Y.missing_models) + " models ", 1)
                  ]),
                  actions: s(() => [
                    k(W, {
                      variant: "primary",
                      size: "sm",
                      onClick: (me) => C(Y.name)
                    }, {
                      default: s(() => [...N[9] || (N[9] = [
                        f(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(W, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (me) => h(Y.name)
                    }, {
                      default: s(() => [...N[10] || (N[10] = [
                        f(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : i("", !0),
            Z.value.length ? (t(), p(ie, {
              key: 1,
              title: "NEW",
              count: Z.value.length
            }, {
              default: s(() => [
                (t(!0), n(V, null, K(Z.value, (Y) => (t(), p(ce, {
                  key: Y.name,
                  status: "new"
                }, {
                  icon: s(() => [...N[11] || (N[11] = [
                    f("●", -1)
                  ])]),
                  title: s(() => [
                    f(c(Y.name), 1)
                  ]),
                  subtitle: s(() => [...N[12] || (N[12] = [
                    f("✓ Ready", -1)
                  ])]),
                  actions: s(() => [
                    k(W, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (me) => h(Y.name)
                    }, {
                      default: s(() => [...N[13] || (N[13] = [
                        f(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : i("", !0),
            I.value.length ? (t(), p(ie, {
              key: 2,
              title: "MODIFIED",
              count: I.value.length
            }, {
              default: s(() => [
                (t(!0), n(V, null, K(I.value, (Y) => (t(), p(ce, {
                  key: Y.name,
                  status: "modified"
                }, {
                  icon: s(() => [...N[14] || (N[14] = [
                    f("⚡", -1)
                  ])]),
                  title: s(() => [
                    f(c(Y.name), 1)
                  ]),
                  subtitle: s(() => [...N[15] || (N[15] = [
                    f("✓ Ready", -1)
                  ])]),
                  actions: s(() => [
                    k(W, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (me) => h(Y.name)
                    }, {
                      default: s(() => [...N[16] || (N[16] = [
                        f(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : i("", !0),
            $.value.length ? (t(), p(ie, {
              key: 3,
              title: "SYNCED",
              count: $.value.length,
              collapsible: !0,
              "initially-expanded": d.value,
              onToggle: N[2] || (N[2] = (Y) => d.value = Y)
            }, {
              default: s(() => [
                (t(!0), n(V, null, K(m.value, (Y) => (t(), p(ce, {
                  key: Y.name,
                  status: "synced"
                }, {
                  icon: s(() => [...N[17] || (N[17] = [
                    f("✓", -1)
                  ])]),
                  title: s(() => [
                    f(c(Y.name), 1)
                  ]),
                  subtitle: s(() => [...N[18] || (N[18] = [
                    f("✓ Ready", -1)
                  ])]),
                  actions: s(() => [
                    k(W, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (me) => h(Y.name)
                    }, {
                      default: s(() => [...N[19] || (N[19] = [
                        f(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128)),
                !y.value && $.value.length > 5 ? (t(), p(W, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: N[1] || (N[1] = (Y) => y.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: s(() => [
                    f(" View all " + c($.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : i("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : i("", !0),
            G.value.length ? i("", !0) : (t(), p(be, {
              key: 4,
              icon: "📭",
              message: g.value ? `No workflows match '${g.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      L.value && A.value ? (t(), p(Ea, {
        key: 0,
        "workflow-name": A.value,
        onClose: N[3] || (N[3] = (Y) => L.value = !1),
        onResolve: N[4] || (N[4] = (Y) => C(A.value))
      }, null, 8, ["workflow-name"])) : i("", !0),
      _.value && A.value ? (t(), p(as, {
        key: 1,
        "workflow-name": A.value,
        onClose: N[5] || (N[5] = (Y) => _.value = !1),
        onInstall: le,
        onRefresh: N[6] || (N[6] = (Y) => a("refresh"))
      }, null, 8, ["workflow-name"])) : i("", !0)
    ], 64));
  }
}), Es = /* @__PURE__ */ B(Ss, [["__scopeId", "data-v-2251d776"]]), Ls = /* @__PURE__ */ M({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (l, a) => (t(), n("span", {
      class: P(["detail-label"]),
      style: Je({ minWidth: e.minWidth })
    }, [
      q(l.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), zs = /* @__PURE__ */ B(Ls, [["__scopeId", "data-v-75e9eeb8"]]), Ns = /* @__PURE__ */ M({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (l, a) => (t(), n("span", {
      class: P(["detail-value", e.variant, { mono: e.mono, truncate: e.truncate }])
    }, [
      q(l.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Ms = /* @__PURE__ */ B(Ns, [["__scopeId", "data-v-2f186e4c"]]), Bs = { class: "detail-row" }, Rs = /* @__PURE__ */ M({
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
    return (l, a) => (t(), n("div", Bs, [
      k(zs, { "min-width": e.labelMinWidth }, {
        default: s(() => [
          f(c(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (t(), p(Ms, {
        key: 0,
        mono: e.mono,
        variant: e.valueVariant,
        truncate: e.truncate
      }, {
        default: s(() => [
          f(c(e.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : q(l.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), te = /* @__PURE__ */ B(Rs, [["__scopeId", "data-v-ef15664a"]]), Ts = /* @__PURE__ */ M({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(e) {
    return (l, a) => (t(), n("div", {
      class: P(["summary-bar", e.variant])
    }, [
      q(l.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Ue = /* @__PURE__ */ B(Ts, [["__scopeId", "data-v-ccb7816e"]]), Os = { class: "popover-header" }, Ds = { class: "popover-title" }, Us = { class: "popover-content" }, Ws = {
  key: 0,
  class: "popover-actions"
}, Vs = /* @__PURE__ */ M({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(e) {
    return (l, a) => (t(), p(Ze, { to: "body" }, [
      e.show ? (t(), n("div", {
        key: 0,
        class: "popover-overlay",
        onClick: a[2] || (a[2] = (r) => l.$emit("close"))
      }, [
        o("div", {
          class: "popover",
          style: Je({ maxWidth: e.maxWidth }),
          onClick: a[1] || (a[1] = xe(() => {
          }, ["stop"]))
        }, [
          o("div", Os, [
            o("h4", Ds, c(e.title), 1),
            o("button", {
              class: "popover-close",
              onClick: a[0] || (a[0] = (r) => l.$emit("close"))
            }, "✕")
          ]),
          o("div", Us, [
            q(l.$slots, "content", {}, void 0, !0)
          ]),
          l.$slots.actions ? (t(), n("div", Ws, [
            q(l.$slots, "actions", {}, void 0, !0)
          ])) : i("", !0)
        ], 4)
      ])) : i("", !0)
    ]));
  }
}), We = /* @__PURE__ */ B(Vs, [["__scopeId", "data-v-057df510"]]), As = /* @__PURE__ */ M({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: l }) {
    const a = l, { getEnvironmentModels: r, getStatus: b } = ge(), x = S([]), u = S([]), g = S("production"), d = S(!1), y = S(null), L = S(""), _ = S(!1);
    function A() {
      _.value = !1, a("navigate", "model-index");
    }
    const R = z(
      () => x.value.reduce((h, C) => h + (C.size_mb || C.size || 0), 0)
    ), j = z(() => {
      if (!L.value.trim()) return x.value;
      const h = L.value.toLowerCase();
      return x.value.filter((C) => C.filename.toLowerCase().includes(h));
    }), U = z(() => {
      if (!L.value.trim()) return u.value;
      const h = L.value.toLowerCase();
      return u.value.filter((C) => C.filename.toLowerCase().includes(h));
    }), T = z(
      () => j.value.filter((h) => h.type === "checkpoints" || h.category === "checkpoints")
    ), G = z(
      () => j.value.filter((h) => h.type === "loras" || h.category === "loras")
    ), J = z(
      () => j.value.filter(
        (h) => h.type !== "checkpoints" && h.category !== "checkpoints" && h.type !== "loras" && h.category !== "loras"
      )
    );
    function Z(h) {
      return h ? h >= 1024 ? `${(h / 1024).toFixed(1)} GB` : `${h.toFixed(0)} MB` : "Unknown";
    }
    function I(h) {
      a("navigate", "model-index");
    }
    function $(h) {
      a("navigate", "model-index");
    }
    function m(h) {
      alert(`Download functionality not yet implemented for ${h}`);
    }
    async function w() {
      d.value = !0, y.value = null;
      try {
        const h = await r();
        x.value = h, u.value = [];
        const C = await b();
        g.value = C.environment || "production";
      } catch (h) {
        y.value = h instanceof Error ? h.message : "Failed to load models";
      } finally {
        d.value = !1;
      }
    }
    return de(w), (h, C) => (t(), n(V, null, [
      k(pe, null, {
        header: s(() => [
          k(ye, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: C[0] || (C[0] = (E) => _.value = !0)
          })
        ]),
        search: s(() => [
          k(De, {
            modelValue: L.value,
            "onUpdate:modelValue": C[1] || (C[1] = (E) => L.value = E),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: s(() => [
          d.value ? (t(), p(Le, {
            key: 0,
            message: "Loading environment models..."
          })) : y.value ? (t(), p(ze, {
            key: 1,
            message: y.value,
            retry: !0,
            onRetry: w
          }, null, 8, ["message"])) : (t(), n(V, { key: 2 }, [
            x.value.length ? (t(), p(Ue, {
              key: 0,
              variant: "compact"
            }, {
              default: s(() => [
                f(" Total: " + c(x.value.length) + " models • " + c(Z(R.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : i("", !0),
            T.value.length ? (t(), p(ie, {
              key: 1,
              title: "CHECKPOINTS",
              count: T.value.length
            }, {
              default: s(() => [
                (t(!0), n(V, null, K(T.value, (E) => (t(), p(ce, {
                  key: E.sha256 || E.hash || E.filename,
                  status: "synced"
                }, {
                  icon: s(() => [...C[3] || (C[3] = [
                    f("📦", -1)
                  ])]),
                  title: s(() => [
                    f(c(E.filename), 1)
                  ]),
                  subtitle: s(() => [
                    f(c(Z(E.size_mb || E.size)), 1)
                  ]),
                  details: s(() => [
                    k(te, {
                      label: "Used by:",
                      value: (E.used_by || E.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    k(te, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: s(() => [
                    k(W, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (le) => I(E.sha256 || E.sha256_hash || E.hash || "")
                    }, {
                      default: s(() => [...C[4] || (C[4] = [
                        f(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : i("", !0),
            G.value.length ? (t(), p(ie, {
              key: 2,
              title: "LORAS",
              count: G.value.length
            }, {
              default: s(() => [
                (t(!0), n(V, null, K(G.value, (E) => (t(), p(ce, {
                  key: E.sha256 || E.hash || E.filename,
                  status: "synced"
                }, {
                  icon: s(() => [...C[5] || (C[5] = [
                    f("📦", -1)
                  ])]),
                  title: s(() => [
                    f(c(E.filename), 1)
                  ]),
                  subtitle: s(() => [
                    f(c(Z(E.size_mb || E.size)), 1)
                  ]),
                  details: s(() => [
                    k(te, {
                      label: "Used by:",
                      value: (E.used_by || E.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    k(te, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: s(() => [
                    k(W, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (le) => I(E.sha256 || E.sha256_hash || E.hash || "")
                    }, {
                      default: s(() => [...C[6] || (C[6] = [
                        f(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : i("", !0),
            J.value.length ? (t(), p(ie, {
              key: 3,
              title: "OTHER",
              count: J.value.length
            }, {
              default: s(() => [
                (t(!0), n(V, null, K(J.value, (E) => (t(), p(ce, {
                  key: E.sha256 || E.hash || E.filename,
                  status: "synced"
                }, {
                  icon: s(() => [...C[7] || (C[7] = [
                    f("📦", -1)
                  ])]),
                  title: s(() => [
                    f(c(E.filename), 1)
                  ]),
                  subtitle: s(() => [
                    f(c(Z(E.size_mb || E.size)), 1)
                  ]),
                  details: s(() => [
                    k(te, {
                      label: "Type:",
                      value: E.type
                    }, null, 8, ["value"]),
                    k(te, {
                      label: "Used by:",
                      value: (E.used_by || E.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"])
                  ]),
                  actions: s(() => [
                    k(W, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (le) => I(E.sha256 || E.sha256_hash || E.hash || "")
                    }, {
                      default: s(() => [...C[8] || (C[8] = [
                        f(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : i("", !0),
            U.value.length ? (t(), p(ie, {
              key: 4,
              title: "MISSING",
              count: U.value.length
            }, {
              default: s(() => [
                (t(!0), n(V, null, K(U.value, (E) => (t(), p(ce, {
                  key: E.filename,
                  status: "broken"
                }, {
                  icon: s(() => [...C[9] || (C[9] = [
                    f("⚠", -1)
                  ])]),
                  title: s(() => [
                    f(c(E.filename), 1)
                  ]),
                  subtitle: s(() => [...C[10] || (C[10] = [
                    o("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: s(() => {
                    var le;
                    return [
                      k(te, {
                        label: "Required by:",
                        value: ((le = E.workflow_names) == null ? void 0 : le.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: s(() => [
                    k(W, {
                      variant: "primary",
                      size: "sm",
                      onClick: (le) => m(E.filename)
                    }, {
                      default: s(() => [...C[11] || (C[11] = [
                        f(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(W, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (le) => $(E.filename)
                    }, {
                      default: s(() => [...C[12] || (C[12] = [
                        f(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : i("", !0),
            !j.value.length && !U.value.length ? (t(), p(be, {
              key: 5,
              icon: "📭",
              message: L.value ? `No models match '${L.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : i("", !0)
          ], 64))
        ]),
        _: 1
      }),
      k(We, {
        show: _.value,
        title: "About Environment Models",
        onClose: C[2] || (C[2] = (E) => _.value = !1)
      }, {
        content: s(() => [
          o("p", null, [
            C[13] || (C[13] = f(" These are models currently used by workflows in ", -1)),
            o("strong", null, '"' + c(g.value) + '"', 1),
            C[14] || (C[14] = f(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: s(() => [
          k(W, {
            variant: "primary",
            onClick: A
          }, {
            default: s(() => [...C[15] || (C[15] = [
              f(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Fs = /* @__PURE__ */ B(As, [["__scopeId", "data-v-865641a4"]]), Gs = /* @__PURE__ */ M({
  __name: "ModelIndexSection",
  setup(e) {
    const { getWorkspaceModels: l } = ge(), a = S([]), r = S(!1), b = S(null), x = S(""), u = S(!1), g = z(
      () => a.value.reduce((m, w) => m + (w.size_mb || w.size || 0), 0)
    ), d = z(() => {
      const m = /* @__PURE__ */ new Set();
      return a.value.forEach((w) => {
        w.used_in_environments && w.used_in_environments.length > 0 && w.used_in_environments.forEach((h) => m.add(h.env_name));
      }), m.size;
    }), y = z(() => {
      if (!x.value.trim()) return a.value;
      const m = x.value.toLowerCase();
      return a.value.filter((w) => {
        const h = w, C = w.sha256 || h.sha256_hash || "";
        return w.filename.toLowerCase().includes(m) || C.toLowerCase().includes(m);
      });
    }), L = z(
      () => y.value.filter((m) => m.type === "checkpoints")
    ), _ = z(
      () => y.value.filter((m) => m.type === "loras")
    ), A = z(
      () => y.value.filter((m) => m.type !== "checkpoints" && m.type !== "loras")
    );
    function R(m) {
      return m ? m >= 1024 ? `${(m / 1024).toFixed(1)} GB` : `${m.toFixed(0)} MB` : "Unknown";
    }
    function j(m) {
      const w = m, h = m.used_in_workflows || w.used_by || [];
      return !h || h.length === 0 ? "Not used" : `${h.length} workflow(s)`;
    }
    function U(m) {
      navigator.clipboard.writeText(m), alert("Hash copied to clipboard");
    }
    function T(m) {
      prompt("Enter model source URL:", m.source_url || "") !== null && alert("URL update not yet implemented");
    }
    function G(m) {
      const w = m, h = m.used_in_workflows || w.used_by || [], C = h && h.length > 0 ? `

⚠ WARNING: This model is used by ${h.length} workflow(s):
${h.join(", ")}

Deleting will break these workflows!` : "";
      confirm(
        `Delete ${m.filename}?${C}

This will free ${R(w.size_mb || m.size)} of space.`
      ) && alert("Model deletion not yet implemented");
    }
    function J() {
      alert("Scan for models not yet implemented");
    }
    function Z() {
      alert("Change directory not yet implemented");
    }
    function I() {
      alert("Download new model not yet implemented");
    }
    async function $() {
      r.value = !0, b.value = null;
      try {
        a.value = await l(), console.log("Loaded models:", a.value), console.log("Filtered checkpoints:", L.value), console.log("Filtered loras:", _.value), console.log("Filtered other:", A.value);
      } catch (m) {
        b.value = m instanceof Error ? m.message : "Failed to load workspace models";
      } finally {
        r.value = !1;
      }
    }
    return de($), (m, w) => (t(), n(V, null, [
      k(pe, null, {
        header: s(() => [
          k(ye, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: w[0] || (w[0] = (h) => u.value = !0)
          }, {
            actions: s(() => [
              k(W, {
                variant: "primary",
                size: "sm",
                onClick: J
              }, {
                default: s(() => [...w[3] || (w[3] = [
                  f(" Scan for Models ", -1)
                ])]),
                _: 1
              }),
              k(W, {
                variant: "primary",
                size: "sm",
                onClick: Z
              }, {
                default: s(() => [...w[4] || (w[4] = [
                  f(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              k(W, {
                variant: "primary",
                size: "sm",
                onClick: I
              }, {
                default: s(() => [...w[5] || (w[5] = [
                  o("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    o("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    o("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  f(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: s(() => [
          k(De, {
            modelValue: x.value,
            "onUpdate:modelValue": w[1] || (w[1] = (h) => x.value = h),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: s(() => [
          r.value ? (t(), p(Le, {
            key: 0,
            message: "Loading workspace models..."
          })) : b.value ? (t(), p(ze, {
            key: 1,
            message: b.value,
            retry: !0,
            onRetry: $
          }, null, 8, ["message"])) : (t(), n(V, { key: 2 }, [
            a.value.length ? (t(), p(Ue, {
              key: 0,
              variant: "compact"
            }, {
              default: s(() => [
                f(" Total: " + c(a.value.length) + " models • " + c(R(g.value)) + " • Used in " + c(d.value) + " environments ", 1)
              ]),
              _: 1
            })) : i("", !0),
            L.value.length ? (t(), p(ie, {
              key: 1,
              title: "CHECKPOINTS",
              count: L.value.length
            }, {
              default: s(() => [
                (t(!0), n(V, null, K(L.value, (h) => (t(), p(ce, {
                  key: h.sha256 || h.filename,
                  status: "synced"
                }, {
                  icon: s(() => [...w[6] || (w[6] = [
                    f("📦", -1)
                  ])]),
                  title: s(() => [
                    f(c(h.filename), 1)
                  ]),
                  subtitle: s(() => [
                    f(c(R(h.size_mb || h.size)), 1)
                  ]),
                  details: s(() => {
                    var C, E;
                    return [
                      h.sha256 || h.sha256_hash ? (t(), p(te, {
                        key: 0,
                        label: "SHA256:",
                        value: (h.sha256 || h.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : i("", !0),
                      k(te, {
                        label: "Used in:",
                        value: j(h)
                      }, null, 8, ["value"]),
                      h.source_url || (C = h.sources) != null && C[0] ? (t(), p(te, {
                        key: 1,
                        label: "Source URL:",
                        value: h.source_url || ((E = h.sources) == null ? void 0 : E[0])
                      }, null, 8, ["value"])) : (t(), p(te, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: s(() => [...w[7] || (w[7] = [
                          f("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: s(() => [
                    k(W, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (C) => T(h)
                    }, {
                      default: s(() => [...w[8] || (w[8] = [
                        f(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    h.sha256 || h.sha256_hash ? (t(), p(W, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (C) => U(h.sha256 || h.sha256_hash)
                    }, {
                      default: s(() => [...w[9] || (w[9] = [
                        f(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : i("", !0),
                    k(W, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (C) => G(h)
                    }, {
                      default: s(() => [...w[10] || (w[10] = [
                        f(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : i("", !0),
            _.value.length ? (t(), p(ie, {
              key: 2,
              title: "LORAS",
              count: _.value.length
            }, {
              default: s(() => [
                (t(!0), n(V, null, K(_.value, (h) => (t(), p(ce, {
                  key: h.sha256 || h.filename,
                  status: "synced"
                }, {
                  icon: s(() => [...w[11] || (w[11] = [
                    f("📦", -1)
                  ])]),
                  title: s(() => [
                    f(c(h.filename), 1)
                  ]),
                  subtitle: s(() => [
                    f(c(R(h.size_mb || h.size)), 1)
                  ]),
                  details: s(() => {
                    var C, E;
                    return [
                      h.sha256 || h.sha256_hash ? (t(), p(te, {
                        key: 0,
                        label: "SHA256:",
                        value: (h.sha256 || h.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : i("", !0),
                      k(te, {
                        label: "Used in:",
                        value: j(h)
                      }, null, 8, ["value"]),
                      h.source_url || (C = h.sources) != null && C[0] ? (t(), p(te, {
                        key: 1,
                        label: "Source URL:",
                        value: h.source_url || ((E = h.sources) == null ? void 0 : E[0])
                      }, null, 8, ["value"])) : (t(), p(te, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: s(() => [...w[12] || (w[12] = [
                          f("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: s(() => [
                    k(W, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (C) => T(h)
                    }, {
                      default: s(() => [...w[13] || (w[13] = [
                        f(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    h.sha256 || h.sha256_hash ? (t(), p(W, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (C) => U(h.sha256 || h.sha256_hash)
                    }, {
                      default: s(() => [...w[14] || (w[14] = [
                        f(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : i("", !0),
                    k(W, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (C) => G(h)
                    }, {
                      default: s(() => [...w[15] || (w[15] = [
                        f(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : i("", !0),
            A.value.length ? (t(), p(ie, {
              key: 3,
              title: "OTHER",
              count: A.value.length
            }, {
              default: s(() => [
                (t(!0), n(V, null, K(A.value, (h) => (t(), p(ce, {
                  key: h.sha256 || h.filename,
                  status: "synced"
                }, {
                  icon: s(() => [...w[16] || (w[16] = [
                    f("📦", -1)
                  ])]),
                  title: s(() => [
                    f(c(h.filename), 1)
                  ]),
                  subtitle: s(() => [
                    f(c(R(h.size_mb || h.size)), 1)
                  ]),
                  details: s(() => [
                    k(te, {
                      label: "Type:",
                      value: h.type
                    }, null, 8, ["value"]),
                    h.sha256 || h.sha256_hash ? (t(), p(te, {
                      key: 0,
                      label: "SHA256:",
                      value: (h.sha256 || h.sha256_hash).substring(0, 16) + "...",
                      mono: !0,
                      "value-variant": "hash"
                    }, null, 8, ["value"])) : i("", !0),
                    k(te, {
                      label: "Used in:",
                      value: j(h)
                    }, null, 8, ["value"])
                  ]),
                  actions: s(() => [
                    k(W, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (C) => T(h)
                    }, {
                      default: s(() => [...w[17] || (w[17] = [
                        f(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    h.sha256 || h.sha256_hash ? (t(), p(W, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (C) => U(h.sha256 || h.sha256_hash)
                    }, {
                      default: s(() => [...w[18] || (w[18] = [
                        f(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : i("", !0),
                    k(W, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (C) => G(h)
                    }, {
                      default: s(() => [...w[19] || (w[19] = [
                        f(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : i("", !0),
            y.value.length ? i("", !0) : (t(), p(be, {
              key: 4,
              icon: "📭",
              message: x.value ? `No models match '${x.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      k(We, {
        show: u.value,
        title: "About Workspace Model Index",
        onClose: w[2] || (w[2] = (h) => u.value = !1)
      }, {
        content: s(() => [...w[20] || (w[20] = [
          o("p", null, [
            f(" Content-addressable model storage shared across "),
            o("strong", null, "all environments"),
            f(". Models are deduplicated by SHA256 hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Ps = /* @__PURE__ */ B(Gs, [["__scopeId", "data-v-5a24af01"]]), js = { key: 0 }, Hs = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, Ks = {
  key: 2,
  style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" }
}, qs = /* @__PURE__ */ M({
  __name: "NodesSection",
  setup(e) {
    const { getNodes: l, installNode: a, updateNode: r, uninstallNode: b } = ge(), x = S({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0
    }), u = S(!1), g = S(null), d = S(""), y = S(!1), L = z(() => {
      if (!d.value.trim()) return x.value.nodes;
      const I = d.value.toLowerCase();
      return x.value.nodes.filter(
        ($) => {
          var m, w;
          return $.name.toLowerCase().includes(I) || ((m = $.description) == null ? void 0 : m.toLowerCase().includes(I)) || ((w = $.repository) == null ? void 0 : w.toLowerCase().includes(I));
        }
      );
    }), _ = z(
      () => L.value.filter((I) => I.installed)
    ), A = z(
      () => L.value.filter((I) => !I.installed)
    );
    function R(I) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown"
      }[I] || I;
    }
    function j(I) {
      return !I.used_in_workflows || I.used_in_workflows.length === 0 ? "Not used in any workflows" : I.used_in_workflows.length === 1 ? I.used_in_workflows[0] : `${I.used_in_workflows.length} workflows`;
    }
    function U(I) {
      window.open(I, "_blank");
    }
    async function T(I) {
      if (confirm(`Install node "${I}"?

This will download and install the node from its repository.`))
        try {
          u.value = !0;
          const $ = await a(I);
          $.status === "success" ? (alert(`Node "${I}" installed successfully!`), await Z()) : alert(`Failed to install node: ${$.message || "Unknown error"}`);
        } catch ($) {
          alert(`Error installing node: ${$ instanceof Error ? $.message : "Unknown error"}`);
        } finally {
          u.value = !1;
        }
    }
    async function G(I) {
      if (confirm(`Check for updates for "${I}"?`))
        try {
          u.value = !0;
          const $ = await r(I);
          $.status === "success" ? (alert(`Node "${I}" is up to date or has been updated!`), await Z()) : alert(`Update check failed: ${$.message || "Unknown error"}`);
        } catch ($) {
          alert(`Error checking for updates: ${$ instanceof Error ? $.message : "Unknown error"}`);
        } finally {
          u.value = !1;
        }
    }
    async function J(I) {
      if (confirm(`Uninstall node "${I}"?

This will remove the node from this environment.`))
        try {
          u.value = !0;
          const $ = await b(I);
          $.status === "success" ? (alert(`Node "${I}" uninstalled successfully!`), await Z()) : alert(`Failed to uninstall node: ${$.message || "Unknown error"}`);
        } catch ($) {
          alert(`Error uninstalling node: ${$ instanceof Error ? $.message : "Unknown error"}`);
        } finally {
          u.value = !1;
        }
    }
    async function Z() {
      u.value = !0, g.value = null;
      try {
        x.value = await l();
      } catch (I) {
        g.value = I instanceof Error ? I.message : "Failed to load nodes";
      } finally {
        u.value = !1;
      }
    }
    return de(Z), (I, $) => (t(), n(V, null, [
      k(pe, null, {
        header: s(() => [
          k(ye, {
            title: "NODES (GIT-TRACKED)",
            "show-info": !0,
            onInfoClick: $[0] || ($[0] = (m) => y.value = !0)
          })
        ]),
        search: s(() => [
          k(De, {
            modelValue: d.value,
            "onUpdate:modelValue": $[1] || ($[1] = (m) => d.value = m),
            placeholder: "🔍 Search git-tracked custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: s(() => [
          u.value ? (t(), p(Le, {
            key: 0,
            message: "Loading git-tracked nodes..."
          })) : g.value ? (t(), p(ze, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: Z
          }, null, 8, ["message"])) : (t(), n(V, { key: 2 }, [
            x.value.total_count ? (t(), p(Ue, {
              key: 0,
              variant: "compact"
            }, {
              default: s(() => [
                f(" Total: " + c(x.value.total_count) + " nodes • " + c(x.value.installed_count) + " installed • " + c(x.value.missing_count) + " missing ", 1)
              ]),
              _: 1
            })) : i("", !0),
            _.value.length ? (t(), p(ie, {
              key: 1,
              title: "INSTALLED",
              count: _.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: s(() => [
                (t(!0), n(V, null, K(_.value, (m) => (t(), p(ce, {
                  key: m.name,
                  status: "synced"
                }, {
                  icon: s(() => [...$[4] || ($[4] = [
                    f("📦", -1)
                  ])]),
                  title: s(() => [
                    f(c(m.name), 1)
                  ]),
                  subtitle: s(() => [
                    m.version ? (t(), n("span", js, "v" + c(m.version), 1)) : (t(), n("span", Hs, "version unknown")),
                    m.source ? (t(), n("span", Ks, " • " + c(R(m.source)), 1)) : i("", !0)
                  ]),
                  details: s(() => [
                    m.description ? (t(), p(te, {
                      key: 0,
                      label: "Description:",
                      value: m.description
                    }, null, 8, ["value"])) : i("", !0),
                    m.repository ? (t(), p(te, {
                      key: 1,
                      label: "Repository:",
                      value: m.repository
                    }, null, 8, ["value"])) : i("", !0),
                    k(te, {
                      label: "Used by:",
                      value: j(m)
                    }, null, 8, ["value"])
                  ]),
                  actions: s(() => [
                    m.repository ? (t(), p(W, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (w) => U(m.repository)
                    }, {
                      default: s(() => [...$[5] || ($[5] = [
                        f(" View Repository ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : i("", !0),
                    m.source === "registry" ? (t(), p(W, {
                      key: 1,
                      variant: "secondary",
                      size: "xs",
                      onClick: (w) => G(m.name)
                    }, {
                      default: s(() => [...$[6] || ($[6] = [
                        f(" Check for Updates ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : i("", !0),
                    m.source !== "unknown" ? (t(), p(W, {
                      key: 2,
                      variant: "destructive",
                      size: "xs",
                      onClick: (w) => J(m.name)
                    }, {
                      default: s(() => [...$[7] || ($[7] = [
                        f(" Uninstall ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : i("", !0)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : i("", !0),
            A.value.length ? (t(), p(ie, {
              key: 2,
              title: "MISSING",
              count: A.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: s(() => [
                (t(!0), n(V, null, K(A.value, (m) => (t(), p(ce, {
                  key: m.name,
                  status: "missing"
                }, {
                  icon: s(() => [...$[8] || ($[8] = [
                    f("⚠", -1)
                  ])]),
                  title: s(() => [
                    f(c(m.name), 1)
                  ]),
                  subtitle: s(() => [...$[9] || ($[9] = [
                    o("span", { style: { color: "var(--cg-color-warning)" } }, "Not installed", -1)
                  ])]),
                  details: s(() => [
                    m.description ? (t(), p(te, {
                      key: 0,
                      label: "Description:",
                      value: m.description
                    }, null, 8, ["value"])) : i("", !0),
                    m.repository ? (t(), p(te, {
                      key: 1,
                      label: "Repository:",
                      value: m.repository
                    }, null, 8, ["value"])) : i("", !0),
                    k(te, {
                      label: "Required by:",
                      value: j(m)
                    }, null, 8, ["value"])
                  ]),
                  actions: s(() => [
                    m.download_url ? (t(), p(W, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (w) => T(m.name)
                    }, {
                      default: s(() => [...$[10] || ($[10] = [
                        f(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : i("", !0),
                    m.repository ? (t(), p(W, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (w) => U(m.repository)
                    }, {
                      default: s(() => [...$[11] || ($[11] = [
                        f(" View Repository ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : i("", !0)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : i("", !0),
            !_.value.length && !A.value.length ? (t(), p(be, {
              key: 3,
              icon: "📭",
              message: d.value ? `No nodes match '${d.value}'` : "No git-tracked nodes found."
            }, null, 8, ["message"])) : i("", !0)
          ], 64))
        ]),
        _: 1
      }),
      k(We, {
        show: y.value,
        title: "About Git-Tracked Nodes",
        onClose: $[3] || ($[3] = (m) => y.value = !1)
      }, {
        content: s(() => [...$[12] || ($[12] = [
          o("p", null, " These are custom nodes tracked in your git repository. They are version-controlled and synced across environments. ", -1),
          o("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            o("strong", null, "Installed:"),
            f(" Nodes currently available in this environment"),
            o("br"),
            o("strong", null, "Missing:"),
            f(" Nodes referenced in workflows but not yet installed ")
          ], -1)
        ])]),
        actions: s(() => [
          k(W, {
            variant: "primary",
            onClick: $[2] || ($[2] = (m) => y.value = !1)
          }, {
            default: s(() => [...$[13] || ($[13] = [
              f(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Ys = /* @__PURE__ */ B(qs, [["__scopeId", "data-v-c480e2c1"]]), Zs = { class: "log-filter" }, Js = { class: "log-filter-group" }, Xs = { class: "log-filter-buttons" }, Qs = ["onClick"], en = { class: "log-filter-group" }, tn = { class: "log-filter-buttons" }, on = ["onClick"], an = /* @__PURE__ */ M({
  __name: "LogFilter",
  props: {
    modelValue: {},
    lineLimit: {},
    showRefresh: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "update:lineLimit", "refresh"],
  setup(e, { emit: l }) {
    const a = l, r = [
      { value: "all", label: "ALL", class: "log-filter-btn-all" },
      { value: "ERROR", label: "ERROR", class: "log-filter-btn-error" },
      { value: "WARNING", label: "WARN", class: "log-filter-btn-warning" },
      { value: "INFO", label: "INFO", class: "log-filter-btn-info" },
      { value: "DEBUG", label: "DEBUG", class: "log-filter-btn-debug" }
    ], b = [50, 100, 200, 500];
    return (x, u) => (t(), n("div", Zs, [
      o("div", Js, [
        u[1] || (u[1] = o("span", { class: "log-filter-label" }, "Level:", -1)),
        o("div", Xs, [
          (t(), n(V, null, K(r, (g) => o("button", {
            key: g.value,
            class: P(["log-filter-btn", g.class, { active: e.modelValue === g.value }]),
            onClick: (d) => a("update:modelValue", g.value)
          }, c(g.label), 11, Qs)), 64))
        ])
      ]),
      o("div", en, [
        u[2] || (u[2] = o("span", { class: "log-filter-label" }, "Lines:", -1)),
        o("div", tn, [
          (t(), n(V, null, K(b, (g) => o("button", {
            key: g,
            class: P(["log-filter-btn", "log-filter-btn-lines", { active: e.lineLimit === g }]),
            onClick: (d) => a("update:lineLimit", g)
          }, c(g), 11, on)), 64))
        ])
      ]),
      e.showRefresh ? (t(), n("button", {
        key: 0,
        class: "log-filter-refresh",
        onClick: u[0] || (u[0] = (g) => a("refresh")),
        title: "Refresh logs"
      }, [...u[3] || (u[3] = [
        o("svg", {
          width: "14",
          height: "14",
          viewBox: "0 0 16 16",
          fill: "currentColor"
        }, [
          o("path", { d: "M13.65 2.35a8 8 0 1 0 1.4 9.65h-2.25a5.75 5.75 0 1 1-1-6.45L9.5 8H16V1.5l-2.35 2.35z" })
        ], -1),
        f(" Refresh ", -1)
      ])])) : i("", !0)
    ]));
  }
}), sn = /* @__PURE__ */ B(an, [["__scopeId", "data-v-c0790205"]]), nn = ["title"], ln = /* @__PURE__ */ M({
  __name: "LogTimestamp",
  props: {
    timestamp: {},
    variant: { default: "time-only" }
  },
  setup(e) {
    const l = e, a = z(() => new Date(l.timestamp).toLocaleString()), r = z(() => {
      const b = new Date(l.timestamp);
      switch (l.variant) {
        case "relative": {
          const u = (/* @__PURE__ */ new Date()).getTime() - b.getTime(), g = Math.floor(u / 1e3), d = Math.floor(g / 60), y = Math.floor(d / 60), L = Math.floor(y / 24);
          return g < 60 ? `${g}s ago` : d < 60 ? `${d}m ago` : y < 24 ? `${y}h ago` : `${L}d ago`;
        }
        case "absolute":
          return b.toLocaleString();
        case "time-only":
          return b.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: !1
          });
        default:
          return b.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: !1
          });
      }
    });
    return (b, x) => (t(), n("span", {
      class: P(["log-timestamp", e.variant]),
      title: a.value
    }, c(r.value), 11, nn));
  }
}), rn = /* @__PURE__ */ B(ln, [["__scopeId", "data-v-0eaa5e06"]]), cn = /* @__PURE__ */ M({
  __name: "LogLevel",
  props: {
    level: {},
    size: { default: "sm" }
  },
  setup(e) {
    const l = e, a = z(() => l.level.toUpperCase()), r = {
      ERROR: {
        class: "log-level-error",
        text: "ERROR"
      },
      WARNING: {
        class: "log-level-warning",
        text: "WARN"
      },
      INFO: {
        class: "log-level-info",
        text: "INFO"
      },
      DEBUG: {
        class: "log-level-debug",
        text: "DEBUG"
      }
    }, b = z(() => r[a.value].class), x = z(() => r[a.value].text);
    return (u, g) => (t(), n("span", {
      class: P(["log-level", b.value, e.size])
    }, c(x.value), 3));
  }
}), dn = /* @__PURE__ */ B(cn, [["__scopeId", "data-v-5bdd746a"]]), un = { class: "log-entry-header" }, mn = { class: "log-entry-body" }, gn = { class: "log-entry-message" }, fn = {
  key: 0,
  class: "log-entry-context"
}, vn = /* @__PURE__ */ M({
  __name: "LogEntry",
  props: {
    timestamp: {},
    level: {},
    message: {},
    context: {},
    timestampVariant: { default: "time-only" }
  },
  setup(e) {
    const l = e, a = z(() => l.level.toUpperCase()), r = z(() => `log-entry-${a.value.toLowerCase()}`), b = z(() => l.context && Object.keys(l.context).length > 0);
    function x(g) {
      return g == null ? "N/A" : typeof g == "object" ? JSON.stringify(g) : String(g);
    }
    function u(g) {
      return typeof g == "number" || typeof g == "boolean" || typeof g == "object";
    }
    return (g, d) => (t(), n("div", {
      class: P(["log-entry", r.value])
    }, [
      o("div", un, [
        k(rn, {
          timestamp: e.timestamp,
          variant: e.timestampVariant
        }, null, 8, ["timestamp", "variant"]),
        k(dn, {
          level: e.level,
          size: "sm"
        }, null, 8, ["level"])
      ]),
      o("div", mn, [
        o("div", gn, c(e.message), 1),
        e.context && b.value ? (t(), n("div", fn, [
          (t(!0), n(V, null, K(e.context, (y, L) => (t(), p(te, {
            key: L,
            label: `${L}:`,
            value: x(y),
            mono: u(y),
            "label-min-width": "120px"
          }, null, 8, ["label", "value", "mono"]))), 128))
        ])) : i("", !0)
      ])
    ], 2));
  }
}), hn = /* @__PURE__ */ B(vn, [["__scopeId", "data-v-5c7bb8ea"]]), pn = {
  key: 0,
  style: { color: "var(--cg-color-error)" }
}, yn = {
  key: 1,
  style: { color: "var(--cg-color-warning)" }
}, bn = {
  key: 2,
  style: { color: "var(--cg-color-info)" }
}, wn = {
  key: 3,
  style: { color: "var(--cg-color-text-muted)" }
}, kn = {
  key: 1,
  class: "logs-container"
}, _n = /* @__PURE__ */ M({
  __name: "DebugEnvSection",
  setup(e) {
    const { getEnvironmentLogs: l } = ge(), a = S([]), r = S(!1), b = S(null), x = S(!1), u = S("all"), g = S(100), d = z(() => u.value === "all" ? a.value : a.value.filter((R) => R.level.toUpperCase() === u.value)), y = z(() => {
      const R = {
        ERROR: 0,
        WARNING: 0,
        INFO: 0,
        DEBUG: 0
      };
      return a.value.forEach((j) => {
        const U = j.level.toUpperCase();
        R[U] !== void 0 && R[U]++;
      }), R;
    });
    async function L() {
      r.value = !0, b.value = null;
      try {
        const R = u.value === "all" ? void 0 : u.value;
        a.value = await l(R, g.value), a.value.sort((j, U) => new Date(U.timestamp).getTime() - new Date(j.timestamp).getTime());
      } catch (R) {
        b.value = R instanceof Error ? R.message : "Failed to load environment logs";
      } finally {
        r.value = !1;
      }
    }
    function _(R) {
      g.value = R, L();
    }
    function A() {
      a.value = [], x.value = !1;
    }
    return de(L), (R, j) => (t(), n(V, null, [
      k(pe, null, {
        header: s(() => [
          k(ye, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: j[0] || (j[0] = (U) => x.value = !0)
          })
        ]),
        content: s(() => [
          r.value ? (t(), p(Le, {
            key: 0,
            message: "Loading environment logs..."
          })) : b.value ? (t(), p(ze, {
            key: 1,
            message: b.value,
            retry: !0,
            onRetry: L
          }, null, 8, ["message"])) : (t(), n(V, { key: 2 }, [
            k(sn, {
              modelValue: u.value,
              "onUpdate:modelValue": j[1] || (j[1] = (U) => u.value = U),
              "line-limit": g.value,
              "onUpdate:lineLimit": _,
              onRefresh: L
            }, null, 8, ["modelValue", "line-limit"]),
            a.value.length ? (t(), p(Ue, {
              key: 0,
              variant: "compact"
            }, {
              default: s(() => [
                f(" Total: " + c(a.value.length) + " logs • ", 1),
                y.value.ERROR ? (t(), n("span", pn, c(y.value.ERROR) + " errors", 1)) : i("", !0),
                y.value.WARNING ? (t(), n("span", yn, c(y.value.ERROR ? " • " : "") + c(y.value.WARNING) + " warnings ", 1)) : i("", !0),
                y.value.INFO ? (t(), n("span", bn, c(y.value.ERROR || y.value.WARNING ? " • " : "") + c(y.value.INFO) + " info ", 1)) : i("", !0),
                y.value.DEBUG ? (t(), n("span", wn, c(y.value.ERROR || y.value.WARNING || y.value.INFO ? " • " : "") + c(y.value.DEBUG) + " debug ", 1)) : i("", !0)
              ]),
              _: 1
            })) : i("", !0),
            d.value.length ? (t(), n("div", kn, [
              (t(!0), n(V, null, K(d.value, (U, T) => (t(), p(hn, {
                key: `${U.timestamp}-${T}`,
                timestamp: U.timestamp,
                level: U.level,
                message: U.message,
                context: U.context,
                "timestamp-variant": "time-only"
              }, null, 8, ["timestamp", "level", "message", "context"]))), 128))
            ])) : (t(), p(be, {
              key: 2,
              icon: "📋",
              message: u.value === "all" ? "No logs available" : `No ${u.value.toLowerCase()} logs found`
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      k(We, {
        show: x.value,
        title: "About Environment Logs",
        onClose: j[2] || (j[2] = (U) => x.value = !1)
      }, {
        content: s(() => [...j[3] || (j[3] = [
          o("p", null, " These are real-time logs from the current environment showing operations, warnings, and errors. ", -1),
          o("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            o("strong", null, "ERROR:"),
            f(" Critical issues requiring attention"),
            o("br"),
            o("strong", null, "WARNING:"),
            f(" Potential problems or important notices"),
            o("br"),
            o("strong", null, "INFO:"),
            f(" General operational information"),
            o("br"),
            o("strong", null, "DEBUG:"),
            f(" Detailed diagnostic information ")
          ], -1),
          o("p", { style: { "margin-top": "var(--cg-space-2)", color: "var(--cg-color-text-muted)", "font-size": "var(--cg-font-size-xs)" } }, " Logs are automatically refreshed when switching environments or performing operations. ", -1)
        ])]),
        actions: s(() => [
          k(W, {
            variant: "secondary",
            onClick: A
          }, {
            default: s(() => [...j[4] || (j[4] = [
              f(" Clear Display ", -1)
            ])]),
            _: 1
          }),
          k(W, {
            variant: "primary",
            onClick: L
          }, {
            default: s(() => [...j[5] || (j[5] = [
              f(" Refresh Logs ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), $n = /* @__PURE__ */ B(_n, [["__scopeId", "data-v-e8fd7419"]]), xn = { class: "header-info" }, Cn = { class: "commit-hash" }, In = {
  key: 0,
  class: "commit-refs"
}, Sn = { class: "commit-message" }, En = { class: "commit-date" }, Ln = {
  key: 0,
  class: "loading"
}, zn = {
  key: 1,
  class: "changes-section"
}, Nn = { class: "stats-row" }, Mn = { class: "stat" }, Bn = { class: "stat insertions" }, Rn = { class: "stat deletions" }, Tn = {
  key: 0,
  class: "change-group"
}, On = {
  key: 1,
  class: "change-group"
}, Dn = {
  key: 0,
  class: "version"
}, Un = {
  key: 2,
  class: "change-group"
}, Wn = { class: "change-item" }, Vn = /* @__PURE__ */ M({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const l = e, { getCommitDetail: a } = ge(), r = S(null), b = S(!0), x = z(() => {
      if (!r.value) return !1;
      const g = r.value.changes.workflows;
      return g.added.length > 0 || g.modified.length > 0 || g.deleted.length > 0;
    }), u = z(() => {
      if (!r.value) return !1;
      const g = r.value.changes.nodes;
      return g.added.length > 0 || g.removed.length > 0;
    });
    return de(async () => {
      try {
        r.value = await a(l.commit.hash);
      } finally {
        b.value = !1;
      }
    }), (g, d) => (t(), p(Oe, {
      size: "md",
      "show-close-button": !1,
      onClose: d[3] || (d[3] = (y) => g.$emit("close"))
    }, {
      header: s(() => {
        var y, L, _, A;
        return [
          o("div", xn, [
            d[4] || (d[4] = o("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            o("span", Cn, c(((y = r.value) == null ? void 0 : y.short_hash) || e.commit.short_hash || ((L = e.commit.hash) == null ? void 0 : L.slice(0, 7))), 1),
            (A = (_ = r.value) == null ? void 0 : _.refs) != null && A.length ? (t(), n("span", In, [
              (t(!0), n(V, null, K(r.value.refs, (R) => (t(), n("span", {
                key: R,
                class: "ref-badge"
              }, c(R), 1))), 128))
            ])) : i("", !0)
          ]),
          k(ne, {
            variant: "ghost",
            size: "sm",
            onClick: d[0] || (d[0] = (R) => g.$emit("close"))
          }, {
            default: s(() => [...d[5] || (d[5] = [
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
      body: s(() => {
        var y, L;
        return [
          o("div", Sn, c(((y = r.value) == null ? void 0 : y.message) || e.commit.message), 1),
          o("div", En, c(((L = r.value) == null ? void 0 : L.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          b.value ? (t(), n("div", Ln, "Loading details...")) : r.value ? (t(), n("div", zn, [
            o("div", Nn, [
              o("span", Mn, c(r.value.stats.files_changed) + " files", 1),
              o("span", Bn, "+" + c(r.value.stats.insertions), 1),
              o("span", Rn, "-" + c(r.value.stats.deletions), 1)
            ]),
            x.value ? (t(), n("div", Tn, [
              k(he, { variant: "section" }, {
                default: s(() => [...d[6] || (d[6] = [
                  f("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (t(!0), n(V, null, K(r.value.changes.workflows.added, (_) => (t(), n("div", {
                key: "add-" + _,
                class: "change-item added"
              }, [
                d[7] || (d[7] = o("span", { class: "change-icon" }, "+", -1)),
                o("span", null, c(_), 1)
              ]))), 128)),
              (t(!0), n(V, null, K(r.value.changes.workflows.modified, (_) => (t(), n("div", {
                key: "mod-" + _,
                class: "change-item modified"
              }, [
                d[8] || (d[8] = o("span", { class: "change-icon" }, "~", -1)),
                o("span", null, c(_), 1)
              ]))), 128)),
              (t(!0), n(V, null, K(r.value.changes.workflows.deleted, (_) => (t(), n("div", {
                key: "del-" + _,
                class: "change-item deleted"
              }, [
                d[9] || (d[9] = o("span", { class: "change-icon" }, "-", -1)),
                o("span", null, c(_), 1)
              ]))), 128))
            ])) : i("", !0),
            u.value ? (t(), n("div", On, [
              k(he, { variant: "section" }, {
                default: s(() => [...d[10] || (d[10] = [
                  f("NODES", -1)
                ])]),
                _: 1
              }),
              (t(!0), n(V, null, K(r.value.changes.nodes.added, (_) => (t(), n("div", {
                key: "add-" + _.name,
                class: "change-item added"
              }, [
                d[11] || (d[11] = o("span", { class: "change-icon" }, "+", -1)),
                o("span", null, c(_.name), 1),
                _.version ? (t(), n("span", Dn, "(" + c(_.version) + ")", 1)) : i("", !0)
              ]))), 128)),
              (t(!0), n(V, null, K(r.value.changes.nodes.removed, (_) => (t(), n("div", {
                key: "rem-" + _.name,
                class: "change-item deleted"
              }, [
                d[12] || (d[12] = o("span", { class: "change-icon" }, "-", -1)),
                o("span", null, c(_.name), 1)
              ]))), 128))
            ])) : i("", !0),
            r.value.changes.models.resolved > 0 ? (t(), n("div", Un, [
              k(he, { variant: "section" }, {
                default: s(() => [...d[13] || (d[13] = [
                  f("MODELS", -1)
                ])]),
                _: 1
              }),
              o("div", Wn, [
                d[14] || (d[14] = o("span", { class: "change-icon" }, "●", -1)),
                o("span", null, c(r.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : i("", !0)
          ])) : i("", !0)
        ];
      }),
      footer: s(() => [
        k(ne, {
          variant: "secondary",
          onClick: d[1] || (d[1] = (y) => g.$emit("createBranch", e.commit))
        }, {
          default: s(() => [...d[15] || (d[15] = [
            f(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        k(ne, {
          variant: "primary",
          onClick: d[2] || (d[2] = (y) => g.$emit("checkout", e.commit))
        }, {
          default: s(() => [...d[16] || (d[16] = [
            f(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), An = /* @__PURE__ */ B(Vn, [["__scopeId", "data-v-d256ff6d"]]), Fn = { class: "dialog-message" }, Gn = {
  key: 0,
  class: "dialog-details"
}, Pn = {
  key: 1,
  class: "dialog-warning"
}, jn = /* @__PURE__ */ M({
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
    return (l, a) => (t(), p(Oe, {
      title: e.title,
      size: "sm",
      onClose: a[3] || (a[3] = (r) => l.$emit("cancel"))
    }, {
      body: s(() => [
        o("p", Fn, c(e.message), 1),
        e.details && e.details.length ? (t(), n("div", Gn, [
          (t(!0), n(V, null, K(e.details, (r, b) => (t(), n("div", {
            key: b,
            class: "detail-item"
          }, " • " + c(r), 1))), 128))
        ])) : i("", !0),
        e.warning ? (t(), n("p", Pn, [
          a[4] || (a[4] = o("span", { class: "warning-icon" }, "⚠", -1)),
          f(" " + c(e.warning), 1)
        ])) : i("", !0)
      ]),
      footer: s(() => [
        k(ne, {
          variant: "secondary",
          onClick: a[0] || (a[0] = (r) => l.$emit("cancel"))
        }, {
          default: s(() => [
            f(c(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (t(), p(ne, {
          key: 0,
          variant: "secondary",
          onClick: a[1] || (a[1] = (r) => l.$emit("secondary"))
        }, {
          default: s(() => [
            f(c(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : i("", !0),
        k(ne, {
          variant: e.destructive ? "danger" : "primary",
          onClick: a[2] || (a[2] = (r) => l.$emit("confirm"))
        }, {
          default: s(() => [
            f(c(e.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Hn = /* @__PURE__ */ B(jn, [["__scopeId", "data-v-3670b9f5"]]), Kn = { class: "comfygit-panel" }, qn = { class: "panel-header" }, Yn = { class: "header-left" }, Zn = {
  key: 0,
  class: "header-info"
}, Jn = { class: "header-actions" }, Xn = { class: "env-switcher" }, Qn = {
  key: 0,
  class: "header-info"
}, el = { class: "branch-name" }, tl = { class: "panel-main" }, ol = { class: "sidebar" }, al = { class: "sidebar-section" }, sl = { class: "sidebar-section" }, nl = { class: "sidebar-section" }, ll = { class: "content-area" }, rl = {
  key: 0,
  class: "error-message"
}, il = {
  key: 1,
  class: "loading"
}, cl = {
  key: 7,
  class: "view-placeholder"
}, dl = {
  key: 9,
  class: "view-placeholder"
}, ul = {
  key: 10,
  class: "view-placeholder"
}, ml = {
  key: 11,
  class: "view-placeholder"
}, gl = {
  key: 12,
  class: "view-placeholder"
}, fl = {
  key: 13,
  class: "view-placeholder"
}, vl = { class: "dialog-content env-selector-dialog" }, hl = { class: "dialog-header" }, pl = { class: "dialog-body" }, yl = { class: "env-list" }, bl = { class: "env-info" }, wl = { class: "env-name-row" }, kl = { class: "env-indicator" }, _l = { class: "env-name" }, $l = {
  key: 0,
  class: "env-branch"
}, xl = {
  key: 1,
  class: "current-label"
}, Cl = { class: "env-stats" }, Il = ["onClick"], Sl = { class: "toast-container" }, El = { class: "toast-icon" }, Ll = { class: "toast-message" }, zl = /* @__PURE__ */ M({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(e, { emit: l }) {
    const a = l, {
      getStatus: r,
      getHistory: b,
      exportEnv: x,
      getBranches: u,
      checkout: g,
      createBranch: d,
      switchBranch: y,
      getEnvironments: L
    } = ge(), _ = S(null), A = S([]), R = S([]), j = S([]), U = z(() => j.value.find((O) => O.is_current)), T = S(!1), G = S(null), J = S(null), Z = S(!1), I = S("status"), $ = S("this-env");
    function m(O, v) {
      I.value = O, $.value = v;
    }
    function w(O) {
      const oe = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[O];
      oe && m(oe.view, oe.section);
    }
    function h() {
      m("branches", "this-env");
    }
    const C = S(null), E = S([]);
    let le = 0;
    function F(O, v = "info", oe = 3e3) {
      const ae = ++le;
      return E.value.push({ id: ae, message: O, type: v }), oe > 0 && setTimeout(() => {
        E.value = E.value.filter((ke) => ke.id !== ae);
      }, oe), ae;
    }
    function N(O) {
      E.value = E.value.filter((v) => v.id !== O);
    }
    function Y(O) {
      switch (O) {
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
    const me = z(() => {
      if (!_.value) return "neutral";
      const O = _.value.workflows, v = O.new.length > 0 || O.modified.length > 0 || O.deleted.length > 0 || _.value.has_changes;
      return _.value.comparison.is_synced ? v ? "warning" : "success" : "error";
    });
    z(() => _.value ? me.value === "success" ? "All synced" : me.value === "warning" ? "Uncommitted changes" : me.value === "error" ? "Not synced" : "" : "");
    async function we() {
      T.value = !0, G.value = null;
      try {
        const [O, v, oe, ae] = await Promise.all([
          r(),
          b(),
          u(),
          L()
        ]);
        _.value = O, A.value = v.commits, R.value = oe.branches, j.value = ae, a("statusUpdate", O);
      } catch (O) {
        G.value = O instanceof Error ? O.message : "Failed to load status", _.value = null, A.value = [], R.value = [];
      } finally {
        T.value = !1;
      }
    }
    function Ve(O) {
      J.value = O;
    }
    async function Ne(O) {
      var oe;
      J.value = null;
      const v = _.value && (_.value.workflows.new.length > 0 || _.value.workflows.modified.length > 0 || _.value.workflows.deleted.length > 0 || _.value.has_changes);
      C.value = {
        title: v ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: v ? "You have uncommitted changes that will be lost." : `Checkout commit ${O.short_hash || ((oe = O.hash) == null ? void 0 : oe.slice(0, 7))}?`,
        details: v ? Ce() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: v ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: v,
        onConfirm: async () => {
          var H;
          C.value = null;
          const ae = F(`Checking out ${O.short_hash || ((H = O.hash) == null ? void 0 : H.slice(0, 7))}...`, "info", 0), ke = await g(O.hash, v);
          N(ae), ke.status === "success" ? F("Restarting ComfyUI...", "success") : F(ke.message || "Checkout failed", "error");
        }
      };
    }
    async function D(O) {
      const v = _.value && (_.value.workflows.new.length > 0 || _.value.workflows.modified.length > 0 || _.value.workflows.deleted.length > 0 || _.value.has_changes);
      C.value = {
        title: v ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: v ? "You have uncommitted changes." : `Switch to branch "${O}"?`,
        details: v ? Ce() : void 0,
        warning: v ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: v ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          C.value = null;
          const oe = F(`Switching to ${O}...`, "info", 0), ae = await y(O, v);
          N(oe), ae.status === "success" ? F("Restarting ComfyUI...", "success") : F(ae.message || "Branch switch failed", "error");
        }
      };
    }
    async function X(O) {
      const v = F(`Creating branch ${O}...`, "info", 0), oe = await d(O);
      N(v), oe.status === "success" ? (F(`Branch "${O}" created`, "success"), await we()) : F(oe.message || "Failed to create branch", "error");
    }
    async function se(O) {
      J.value = null;
      const v = prompt("Enter branch name:");
      if (v) {
        const oe = F(`Creating branch ${v}...`, "info", 0), ae = await d(v, O.hash);
        N(oe), ae.status === "success" ? (F(`Branch "${v}" created from ${O.short_hash}`, "success"), await we()) : F(ae.message || "Failed to create branch", "error");
      }
    }
    async function Me(O) {
      Z.value = !1, F("Environment switching not yet implemented", "warning");
    }
    function Ce() {
      if (!_.value) return [];
      const O = [], v = _.value.workflows;
      return v.new.length && O.push(`${v.new.length} new workflow(s)`), v.modified.length && O.push(`${v.modified.length} modified workflow(s)`), v.deleted.length && O.push(`${v.deleted.length} deleted workflow(s)`), O;
    }
    async function nt() {
      const O = F("Exporting environment...", "info", 0);
      try {
        const v = await x();
        N(O), v.status === "success" ? (F("Export complete", "success"), alert(`Export successful!

Saved to: ${v.path}

Models without sources: ${v.models_without_sources}`)) : (F("Export failed", "error"), alert(`Export failed: ${v.message}`));
      } catch (v) {
        N(O), F("Export error", "error"), alert(`Export error: ${v instanceof Error ? v.message : "Unknown error"}`);
      }
    }
    return de(we), (O, v) => {
      var oe, ae, ke;
      return t(), n("div", Kn, [
        o("div", qn, [
          o("div", Yn, [
            v[20] || (v[20] = o("h2", { class: "panel-title" }, "ComfyGit", -1)),
            _.value ? (t(), n("div", Zn)) : i("", !0)
          ]),
          o("div", Jn, [
            o("button", {
              class: P(["icon-btn", { spinning: T.value }]),
              onClick: we,
              title: "Refresh"
            }, [...v[21] || (v[21] = [
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
              onClick: v[0] || (v[0] = (H) => a("close")),
              title: "Close"
            }, [...v[22] || (v[22] = [
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
        o("div", Xn, [
          v[24] || (v[24] = o("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
          o("button", {
            class: "env-switcher-btn",
            onClick: v[1] || (v[1] = (H) => Z.value = !0)
          }, [
            _.value ? (t(), n("div", Qn, [
              o("span", null, c(((oe = U.value) == null ? void 0 : oe.name) || ((ae = _.value) == null ? void 0 : ae.environment) || "Loading..."), 1),
              o("span", el, "(" + c(_.value.branch || "detached") + ")", 1)
            ])) : i("", !0),
            v[23] || (v[23] = o("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        o("div", tl, [
          o("div", ol, [
            o("div", al, [
              v[25] || (v[25] = o("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              o("button", {
                class: P(["sidebar-item", { active: I.value === "status" && $.value === "this-env" }]),
                onClick: v[2] || (v[2] = (H) => m("status", "this-env"))
              }, " STATUS ", 2),
              o("button", {
                class: P(["sidebar-item", { active: I.value === "workflows" }]),
                onClick: v[3] || (v[3] = (H) => m("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              o("button", {
                class: P(["sidebar-item", { active: I.value === "models-env" }]),
                onClick: v[4] || (v[4] = (H) => m("models-env", "this-env"))
              }, " MODELS ", 2),
              o("button", {
                class: P(["sidebar-item", { active: I.value === "branches" }]),
                onClick: v[5] || (v[5] = (H) => m("branches", "this-env"))
              }, " BRANCHES ", 2),
              o("button", {
                class: P(["sidebar-item", { active: I.value === "history" }]),
                onClick: v[6] || (v[6] = (H) => m("history", "this-env"))
              }, " HISTORY ", 2),
              o("button", {
                class: P(["sidebar-item", { active: I.value === "nodes" }]),
                onClick: v[7] || (v[7] = (H) => m("nodes", "this-env"))
              }, " NODES ", 2),
              o("button", {
                class: P(["sidebar-item", { active: I.value === "debug-env" }]),
                onClick: v[8] || (v[8] = (H) => m("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            v[28] || (v[28] = o("div", { class: "sidebar-divider" }, null, -1)),
            o("div", sl, [
              v[26] || (v[26] = o("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              o("button", {
                class: P(["sidebar-item", { active: I.value === "environments" }]),
                onClick: v[9] || (v[9] = (H) => m("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              o("button", {
                class: P(["sidebar-item", { active: I.value === "model-index" }]),
                onClick: v[10] || (v[10] = (H) => m("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              o("button", {
                class: P(["sidebar-item", { active: I.value === "settings" }]),
                onClick: v[11] || (v[11] = (H) => m("settings", "all-envs"))
              }, " SETTINGS ", 2),
              o("button", {
                class: P(["sidebar-item", { active: I.value === "debug-workspace" }]),
                onClick: v[12] || (v[12] = (H) => m("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            v[29] || (v[29] = o("div", { class: "sidebar-divider" }, null, -1)),
            o("div", nl, [
              v[27] || (v[27] = o("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              o("button", {
                class: P(["sidebar-item", { active: I.value === "export" }]),
                onClick: v[13] || (v[13] = (H) => m("export", "sharing"))
              }, " EXPORT ", 2),
              o("button", {
                class: P(["sidebar-item", { active: I.value === "import" }]),
                onClick: v[14] || (v[14] = (H) => m("import", "sharing"))
              }, " IMPORT ", 2),
              o("button", {
                class: P(["sidebar-item", { active: I.value === "remotes" }]),
                onClick: v[15] || (v[15] = (H) => m("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          o("div", ll, [
            G.value ? (t(), n("div", rl, c(G.value), 1)) : !_.value && I.value === "status" ? (t(), n("div", il, " Loading status... ")) : (t(), n(V, { key: 2 }, [
              I.value === "status" ? (t(), p(vo, {
                key: 0,
                status: _.value,
                onSwitchBranch: h
              }, null, 8, ["status"])) : I.value === "workflows" ? (t(), p(Es, {
                key: 1,
                onRefresh: we
              })) : I.value === "models-env" ? (t(), p(Fs, {
                key: 2,
                onNavigate: w
              })) : I.value === "branches" ? (t(), p(No, {
                key: 3,
                branches: R.value,
                current: ((ke = _.value) == null ? void 0 : ke.branch) || null,
                onSwitch: D,
                onCreate: X
              }, null, 8, ["branches", "current"])) : I.value === "history" ? (t(), p(Go, {
                key: 4,
                commits: A.value,
                onSelect: Ve,
                onCheckout: Ne
              }, null, 8, ["commits"])) : I.value === "nodes" ? (t(), p(Ys, { key: 5 })) : I.value === "debug-env" ? (t(), p($n, { key: 6 })) : I.value === "environments" ? (t(), n("div", cl, [...v[30] || (v[30] = [
                o("h3", { class: "view-title" }, "ENVIRONMENTS", -1),
                o("p", null, "Environment management UI coming soon...", -1)
              ])])) : I.value === "model-index" ? (t(), p(Ps, { key: 8 })) : I.value === "settings" ? (t(), n("div", dl, [...v[31] || (v[31] = [
                o("h3", { class: "view-title" }, "SETTINGS", -1),
                o("p", null, "Settings UI coming soon...", -1)
              ])])) : I.value === "debug-workspace" ? (t(), n("div", ul, [...v[32] || (v[32] = [
                o("h3", { class: "view-title" }, "DEBUG (WORKSPACE LOGS)", -1),
                o("p", null, "Workspace logs view coming soon...", -1)
              ])])) : I.value === "export" ? (t(), n("div", ml, [
                v[34] || (v[34] = o("h3", { class: "view-title" }, "EXPORT", -1)),
                o("button", {
                  class: "export-btn",
                  onClick: nt
                }, [...v[33] || (v[33] = [
                  o("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    o("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    o("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  f(" EXPORT ENVIRONMENT ", -1)
                ])])
              ])) : I.value === "import" ? (t(), n("div", gl, [...v[35] || (v[35] = [
                o("h3", { class: "view-title" }, "IMPORT", -1),
                o("p", null, "Import UI coming soon...", -1)
              ])])) : I.value === "remotes" ? (t(), n("div", fl, [...v[36] || (v[36] = [
                o("h3", { class: "view-title" }, "REMOTES", -1),
                o("p", null, "Git remotes UI coming soon...", -1)
              ])])) : i("", !0)
            ], 64))
          ])
        ]),
        J.value ? (t(), p(An, {
          key: 0,
          commit: J.value,
          onClose: v[16] || (v[16] = (H) => J.value = null),
          onCheckout: Ne,
          onCreateBranch: se
        }, null, 8, ["commit"])) : i("", !0),
        C.value ? (t(), p(Hn, {
          key: 1,
          title: C.value.title,
          message: C.value.message,
          details: C.value.details,
          warning: C.value.warning,
          confirmLabel: C.value.confirmLabel,
          cancelLabel: C.value.cancelLabel,
          secondaryLabel: C.value.secondaryLabel,
          secondaryAction: C.value.secondaryAction,
          destructive: C.value.destructive,
          onConfirm: C.value.onConfirm,
          onCancel: v[17] || (v[17] = (H) => C.value = null),
          onSecondary: C.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : i("", !0),
        Z.value ? (t(), n("div", {
          key: 2,
          class: "dialog-overlay",
          onClick: v[19] || (v[19] = xe((H) => Z.value = !1, ["self"]))
        }, [
          o("div", vl, [
            o("div", hl, [
              v[38] || (v[38] = o("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              o("button", {
                class: "icon-btn",
                onClick: v[18] || (v[18] = (H) => Z.value = !1)
              }, [...v[37] || (v[37] = [
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
            o("div", pl, [
              v[39] || (v[39] = o("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              o("div", yl, [
                (t(!0), n(V, null, K(j.value, (H) => (t(), n("div", {
                  key: H.name,
                  class: P(["env-item", { current: H.is_current }])
                }, [
                  o("div", bl, [
                    o("div", wl, [
                      o("span", kl, c(H.is_current ? "●" : "○"), 1),
                      o("span", _l, c(H.name), 1),
                      H.current_branch ? (t(), n("span", $l, "(" + c(H.current_branch) + ")", 1)) : i("", !0),
                      H.is_current ? (t(), n("span", xl, "CURRENT")) : i("", !0)
                    ]),
                    o("div", Cl, c(H.workflow_count) + " workflows • " + c(H.node_count) + " nodes ", 1)
                  ]),
                  H.is_current ? i("", !0) : (t(), n("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (ir) => Me(H.name)
                  }, " SWITCH ", 8, Il))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : i("", !0),
        o("div", Sl, [
          k(rt, { name: "toast" }, {
            default: s(() => [
              (t(!0), n(V, null, K(E.value, (H) => (t(), n("div", {
                key: H.id,
                class: P(["toast", H.type])
              }, [
                o("span", El, c(Y(H.type)), 1),
                o("span", Ll, c(H.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), Nl = /* @__PURE__ */ B(zl, [["__scopeId", "data-v-3dac4275"]]), Ml = { class: "base-textarea-wrapper" }, Bl = ["value", "rows", "placeholder", "disabled", "maxlength"], Rl = {
  key: 0,
  class: "base-textarea-count"
}, Tl = /* @__PURE__ */ M({
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
    return (l, a) => (t(), n("div", Ml, [
      o("textarea", {
        value: e.modelValue,
        rows: e.rows,
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxlength: e.maxLength,
        class: "base-textarea",
        onInput: a[0] || (a[0] = (r) => l.$emit("update:modelValue", r.target.value)),
        onKeydown: [
          a[1] || (a[1] = Ee(xe((r) => l.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          a[2] || (a[2] = Ee(xe((r) => l.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, Bl),
      e.showCharCount && e.maxLength ? (t(), n("div", Rl, c(e.modelValue.length) + " / " + c(e.maxLength), 1)) : i("", !0)
    ]));
  }
}), Ol = /* @__PURE__ */ B(Tl, [["__scopeId", "data-v-5516e6fc"]]), Dl = { class: "commit-popover" }, Ul = { class: "popover-header" }, Wl = { class: "popover-body" }, Vl = {
  key: 0,
  class: "changes-summary"
}, Al = {
  key: 0,
  class: "change-item"
}, Fl = {
  key: 1,
  class: "change-item"
}, Gl = {
  key: 2,
  class: "change-item"
}, Pl = {
  key: 3,
  class: "change-item"
}, jl = {
  key: 4,
  class: "change-item"
}, Hl = {
  key: 1,
  class: "no-changes"
}, Kl = {
  key: 2,
  class: "loading"
}, ql = { class: "message-section" }, Yl = { class: "popover-footer" }, Zl = /* @__PURE__ */ M({
  __name: "CommitPopover",
  props: {
    status: {}
  },
  emits: ["close", "committed"],
  setup(e, { emit: l }) {
    const a = e, r = l, { commit: b } = ge(), x = S(""), u = S(!1), g = S(null), d = z(() => {
      if (!a.status) return !1;
      const L = a.status.workflows;
      return L.new.length > 0 || L.modified.length > 0 || L.deleted.length > 0 || a.status.has_changes;
    });
    async function y() {
      var L, _, A;
      if (!(!d.value || !x.value.trim() || u.value)) {
        u.value = !0, g.value = null;
        try {
          const R = await b(x.value.trim());
          R.status === "success" ? (g.value = {
            type: "success",
            message: `Committed: ${((L = R.summary) == null ? void 0 : L.new) || 0} new, ${((_ = R.summary) == null ? void 0 : _.modified) || 0} modified, ${((A = R.summary) == null ? void 0 : A.deleted) || 0} deleted`
          }, x.value = "", setTimeout(() => r("committed"), 1e3)) : R.status === "no_changes" ? g.value = { type: "error", message: "No changes to commit" } : g.value = { type: "error", message: R.message || "Commit failed" };
        } catch (R) {
          g.value = { type: "error", message: R instanceof Error ? R.message : "Commit failed" };
        } finally {
          u.value = !1;
        }
      }
    }
    return (L, _) => (t(), n("div", Dl, [
      o("div", Ul, [
        _[4] || (_[4] = o("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        o("button", {
          class: "close-btn",
          onClick: _[0] || (_[0] = (A) => r("close"))
        }, [..._[3] || (_[3] = [
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
      o("div", Wl, [
        e.status && d.value ? (t(), n("div", Vl, [
          e.status.workflows.new.length ? (t(), n("div", Al, [
            _[5] || (_[5] = o("span", { class: "change-icon new" }, "+", -1)),
            o("span", null, c(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : i("", !0),
          e.status.workflows.modified.length ? (t(), n("div", Fl, [
            _[6] || (_[6] = o("span", { class: "change-icon modified" }, "~", -1)),
            o("span", null, c(e.status.workflows.modified.length) + " modified", 1)
          ])) : i("", !0),
          e.status.workflows.deleted.length ? (t(), n("div", Gl, [
            _[7] || (_[7] = o("span", { class: "change-icon deleted" }, "-", -1)),
            o("span", null, c(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : i("", !0),
          e.status.git_changes.nodes_added.length ? (t(), n("div", Pl, [
            _[8] || (_[8] = o("span", { class: "change-icon new" }, "+", -1)),
            o("span", null, c(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : i("", !0),
          e.status.git_changes.nodes_removed.length ? (t(), n("div", jl, [
            _[9] || (_[9] = o("span", { class: "change-icon deleted" }, "-", -1)),
            o("span", null, c(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : i("", !0)
        ])) : e.status ? (t(), n("div", Hl, " No changes to commit ")) : (t(), n("div", Kl, " Loading... ")),
        o("div", ql, [
          k(Ol, {
            modelValue: x.value,
            "onUpdate:modelValue": _[1] || (_[1] = (A) => x.value = A),
            placeholder: d.value ? "Describe your changes..." : "No changes",
            disabled: !d.value || u.value,
            rows: 3,
            onCtrlEnter: y
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        g.value ? (t(), n("div", {
          key: 3,
          class: P(["result", g.value.type])
        }, c(g.value.message), 3)) : i("", !0)
      ]),
      o("div", Yl, [
        k(ne, {
          variant: "secondary",
          onClick: _[2] || (_[2] = (A) => r("close"))
        }, {
          default: s(() => [..._[10] || (_[10] = [
            f(" Cancel ", -1)
          ])]),
          _: 1
        }),
        k(ne, {
          variant: "primary",
          disabled: !d.value || !x.value.trim() || u.value,
          loading: u.value,
          onClick: y
        }, {
          default: s(() => [
            f(c(u.value ? "Committing..." : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ])
    ]));
  }
}), Jl = /* @__PURE__ */ B(Zl, [["__scopeId", "data-v-4f587977"]]), Xl = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}', Ql = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', er = {
  comfy: Xl,
  phosphor: Ql
}, Ke = "comfy", tt = "comfygit-theme";
let _e = null, ot = Ke;
function tr() {
  try {
    const e = localStorage.getItem(tt);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return Ke;
}
function at(e = Ke) {
  _e && _e.remove(), _e = document.createElement("style"), _e.id = "comfygit-theme-styles", _e.setAttribute("data-theme", e), _e.textContent = er[e], document.head.appendChild(_e), document.body.setAttribute("data-comfygit-theme", e), ot = e;
  try {
    localStorage.setItem(tt, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function or() {
  return ot;
}
function ar(e) {
  at(e);
}
const qe = document.createElement("link");
qe.rel = "stylesheet";
qe.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(qe);
const sr = tr();
at(sr);
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), ar(e);
  },
  getTheme: () => {
    const e = or();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
let ue = null, re = null, Se = null;
const $e = S(null);
async function je() {
  var e;
  if (!((e = window.app) != null && e.api)) return null;
  try {
    const l = await window.app.api.fetchApi("/v2/comfygit/status");
    l.ok && ($e.value = await l.json());
  } catch {
  }
}
function nr() {
  if (!$e.value) return !1;
  const e = $e.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || $e.value.has_changes;
}
function lr() {
  ue && ue.remove(), ue = document.createElement("div"), ue.className = "comfygit-panel-overlay";
  const e = document.createElement("div");
  e.className = "comfygit-panel-container", ue.appendChild(e), ue.addEventListener("click", (r) => {
    r.target === ue && Ge();
  });
  const l = (r) => {
    r.key === "Escape" && (Ge(), document.removeEventListener("keydown", l));
  };
  document.addEventListener("keydown", l), Xe({
    render: () => Qe(Nl, {
      onClose: Ge,
      onStatusUpdate: (r) => {
        $e.value = r, Te();
      }
    })
  }).mount(e), document.body.appendChild(ue);
}
function Ge() {
  ue && (ue.remove(), ue = null);
}
function rr(e) {
  Ie(), re = document.createElement("div"), re.className = "comfygit-commit-popover-container";
  const l = e.getBoundingClientRect();
  re.style.position = "fixed", re.style.top = `${l.bottom + 8}px`, re.style.right = `${window.innerWidth - l.right}px`, re.style.zIndex = "10001";
  const a = (b) => {
    re && !re.contains(b.target) && b.target !== e && (Ie(), document.removeEventListener("mousedown", a));
  };
  setTimeout(() => document.addEventListener("mousedown", a), 0);
  const r = (b) => {
    b.key === "Escape" && (Ie(), document.removeEventListener("keydown", r));
  };
  document.addEventListener("keydown", r), Se = Xe({
    render: () => Qe(Jl, {
      status: $e.value,
      onClose: Ie,
      onCommitted: () => {
        Ie(), je().then(Te);
      }
    })
  }), Se.mount(re), document.body.appendChild(re);
}
function Ie() {
  Se && (Se.unmount(), Se = null), re && (re.remove(), re = null);
}
let fe = null;
function Te() {
  if (!fe) return;
  const e = fe.querySelector(".commit-indicator");
  e && (e.style.display = nr() ? "block" : "none");
}
const st = document.createElement("style");
st.textContent = `
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
document.head.appendChild(st);
Ae.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var a, r;
    const e = document.createElement("div");
    e.className = "comfygit-btn-group";
    const l = document.createElement("button");
    l.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", l.textContent = "ComfyGit", l.title = "ComfyGit Control Panel", l.onclick = lr, fe = document.createElement("button"), fe.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", fe.innerHTML = 'Commit <span class="commit-indicator"></span>', fe.title = "Quick Commit", fe.onclick = () => rr(fe), e.appendChild(l), e.appendChild(fe), (r = (a = Ae.menu) == null ? void 0 : a.settingsGroup) != null && r.element && (Ae.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), await je(), Te(), setInterval(async () => {
      await je(), Te();
    }, 3e4);
  }
});
