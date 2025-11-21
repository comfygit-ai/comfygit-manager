import { app as qe } from "../../scripts/app.js";
import { defineComponent as O, createElementBlock as n, openBlock as t, createCommentVNode as d, createElementVNode as o, renderSlot as q, createBlock as y, resolveDynamicComponent as et, normalizeClass as P, withCtx as a, toDisplayString as c, createVNode as i, createTextVNode as f, computed as V, Fragment as W, renderList as Y, ref as R, onMounted as ne, withKeys as Ce, withModifiers as Ee, onUnmounted as pt, Teleport as lt, normalizeStyle as tt, watch as yt, TransitionGroup as bt, createApp as rt, h as it } from "vue";
const wt = { class: "panel-layout" }, kt = {
  key: 0,
  class: "panel-layout-header"
}, _t = {
  key: 1,
  class: "panel-layout-search"
}, $t = { class: "panel-layout-content" }, xt = {
  key: 2,
  class: "panel-layout-footer"
}, Ct = /* @__PURE__ */ O({
  __name: "PanelLayout",
  setup(e) {
    return (l, s) => (t(), n("div", wt, [
      l.$slots.header ? (t(), n("div", kt, [
        q(l.$slots, "header", {}, void 0, !0)
      ])) : d("", !0),
      l.$slots.search ? (t(), n("div", _t, [
        q(l.$slots, "search", {}, void 0, !0)
      ])) : d("", !0),
      o("div", $t, [
        q(l.$slots, "content", {}, void 0, !0)
      ]),
      l.$slots.footer ? (t(), n("div", xt, [
        q(l.$slots, "footer", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), T = (e, l) => {
  const s = e.__vccOpts || e;
  for (const [r, u] of l)
    s[r] = u;
  return s;
}, fe = /* @__PURE__ */ T(Ct, [["__scopeId", "data-v-21565df9"]]), It = {
  key: 0,
  class: "panel-title-prefix"
}, St = {
  key: 1,
  class: "panel-title-prefix-theme"
}, Et = /* @__PURE__ */ O({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (l, s) => (t(), y(et(`h${e.level}`), {
      class: P(["panel-title", e.variant])
    }, {
      default: a(() => [
        e.showPrefix ? (t(), n("span", It, c(e.prefix), 1)) : (t(), n("span", St)),
        q(l.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Lt = /* @__PURE__ */ T(Et, [["__scopeId", "data-v-c3875efc"]]), Rt = ["title"], Ut = ["width", "height"], zt = /* @__PURE__ */ O({
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
      ])], 8, Ut))
    ], 8, Rt));
  }
}), Nt = /* @__PURE__ */ T(zt, [["__scopeId", "data-v-6fc7f16d"]]), Mt = { class: "header-left" }, Dt = {
  key: 0,
  class: "header-actions"
}, Vt = /* @__PURE__ */ O({
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
      class: P(["panel-header", { stacked: e.stacked }])
    }, [
      o("div", Mt, [
        i(Lt, { "show-prefix": e.showPrefix }, {
          default: a(() => [
            f(c(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (t(), y(Nt, {
          key: 0,
          onClick: s[0] || (s[0] = (r) => l.$emit("info-click"))
        })) : d("", !0)
      ]),
      l.$slots.actions ? (t(), n("div", Dt, [
        q(l.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), ve = /* @__PURE__ */ T(Vt, [["__scopeId", "data-v-55a62cd6"]]), Bt = {
  key: 0,
  class: "section-title-count"
}, Ot = {
  key: 1,
  class: "section-title-icon"
}, Tt = /* @__PURE__ */ O({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (l, s) => (t(), y(et(`h${e.level}`), {
      class: P(["section-title", { clickable: e.clickable }]),
      onClick: s[0] || (s[0] = (r) => e.clickable && l.$emit("click"))
    }, {
      default: a(() => [
        q(l.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (t(), n("span", Bt, "(" + c(e.count) + ")", 1)) : d("", !0),
        e.clickable ? (t(), n("span", Ot, c(e.expanded ? "▼" : "▸"), 1)) : d("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Te = /* @__PURE__ */ T(Tt, [["__scopeId", "data-v-559361eb"]]), At = { class: "status-grid" }, Wt = { class: "status-grid__column" }, Ft = { class: "status-grid__title" }, Gt = { class: "status-grid__column status-grid__column--right" }, Pt = { class: "status-grid__title" }, Ht = /* @__PURE__ */ O({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (l, s) => (t(), n("div", At, [
      o("div", Wt, [
        o("h4", Ft, c(e.leftTitle), 1),
        q(l.$slots, "left", {}, void 0, !0)
      ]),
      o("div", Gt, [
        o("h4", Pt, c(e.rightTitle), 1),
        q(l.$slots, "right", {}, void 0, !0)
      ])
    ]));
  }
}), Kt = /* @__PURE__ */ T(Ht, [["__scopeId", "data-v-fe556068"]]), jt = {
  key: 0,
  class: "status-item__icon"
}, qt = {
  key: 1,
  class: "status-item__count"
}, Yt = { class: "status-item__label" }, Jt = /* @__PURE__ */ O({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(e) {
    const l = e, s = V(() => `status-item--${l.variant}`);
    return (r, u) => (t(), n("div", {
      class: P(["status-item", s.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (t(), n("span", jt, c(e.icon), 1)) : d("", !0),
      e.count !== void 0 ? (t(), n("span", qt, c(e.count), 1)) : d("", !0),
      o("span", Yt, c(e.label), 1)
    ], 2));
  }
}), ye = /* @__PURE__ */ T(Jt, [["__scopeId", "data-v-6f929183"]]), Xt = { class: "issue-card__header" }, Zt = { class: "issue-card__icon" }, Qt = { class: "issue-card__title" }, eo = {
  key: 0,
  class: "issue-card__content"
}, to = {
  key: 0,
  class: "issue-card__description"
}, oo = {
  key: 1,
  class: "issue-card__items"
}, ao = {
  key: 2,
  class: "issue-card__actions"
}, so = /* @__PURE__ */ O({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(e) {
    const l = e, s = V(() => `issue-card--${l.severity}`);
    return (r, u) => (t(), n("div", {
      class: P(["issue-card", s.value])
    }, [
      o("div", Xt, [
        o("span", Zt, c(e.icon), 1),
        o("h4", Qt, c(e.title), 1)
      ]),
      r.$slots.default || e.description ? (t(), n("div", eo, [
        e.description ? (t(), n("p", to, c(e.description), 1)) : d("", !0),
        q(r.$slots, "default", {}, void 0, !0)
      ])) : d("", !0),
      e.items && e.items.length ? (t(), n("div", oo, [
        (t(!0), n(W, null, Y(e.items, (x, h) => (t(), n("div", {
          key: h,
          class: "issue-card__item"
        }, [
          u[0] || (u[0] = o("span", { class: "issue-card__bullet" }, "•", -1)),
          o("span", null, c(x), 1)
        ]))), 128))
      ])) : d("", !0),
      r.$slots.actions ? (t(), n("div", ao, [
        q(r.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), Ye = /* @__PURE__ */ T(so, [["__scopeId", "data-v-df6aa348"]]), no = ["type", "disabled"], lo = {
  key: 0,
  class: "spinner"
}, ro = /* @__PURE__ */ O({
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
      class: P(["action-btn", e.variant, e.size, { loading: e.loading }]),
      onClick: s[0] || (s[0] = (r) => l.$emit("click", r))
    }, [
      e.loading ? (t(), n("span", lo)) : d("", !0),
      e.loading ? d("", !0) : q(l.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, no));
  }
}), A = /* @__PURE__ */ T(ro, [["__scopeId", "data-v-772abe47"]]), io = { class: "empty-state" }, co = {
  key: 0,
  class: "empty-icon"
}, uo = { class: "empty-message" }, mo = /* @__PURE__ */ O({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (l, s) => (t(), n("div", io, [
      e.icon ? (t(), n("div", co, c(e.icon), 1)) : d("", !0),
      o("p", uo, c(e.message), 1),
      e.actionLabel ? (t(), y(A, {
        key: 1,
        variant: e.actionVariant || "secondary",
        size: "sm",
        onClick: s[0] || (s[0] = (r) => l.$emit("action"))
      }, {
        default: a(() => [
          f(c(e.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : d("", !0)
    ]));
  }
}), de = /* @__PURE__ */ T(mo, [["__scopeId", "data-v-4466284f"]]), fo = { class: "branch-indicator" }, vo = { class: "branch-indicator__info" }, go = { class: "branch-indicator__label" }, ho = { class: "branch-indicator__name" }, po = {
  key: 0,
  class: "branch-indicator__remote"
}, yo = {
  key: 0,
  class: "branch-indicator__status"
}, bo = {
  key: 0,
  class: "branch-indicator__ahead"
}, wo = {
  key: 1,
  class: "branch-indicator__behind"
}, ko = {
  key: 1,
  class: "branch-indicator__actions"
}, _o = /* @__PURE__ */ O({
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
    return (l, s) => (t(), n("div", fo, [
      o("div", vo, [
        o("span", go, c(e.label), 1),
        o("span", ho, c(e.branchName), 1),
        e.remote ? (t(), n("span", po, "@" + c(e.remote), 1)) : d("", !0)
      ]),
      e.showStatus && (e.commitsAhead || e.commitsBehind) ? (t(), n("div", yo, [
        e.commitsAhead ? (t(), n("span", bo, " ↑ " + c(e.commitsAhead) + " ahead ", 1)) : d("", !0),
        e.commitsBehind ? (t(), n("span", wo, " ↓ " + c(e.commitsBehind) + " behind ", 1)) : d("", !0)
      ])) : d("", !0),
      l.$slots.actions ? (t(), n("div", ko, [
        q(l.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), $o = /* @__PURE__ */ T(_o, [["__scopeId", "data-v-cb8dd50e"]]), xo = { style: { "margin-top": "var(--cg-space-1)" } }, Co = {
  key: 0,
  style: { "margin-top": "var(--cg-space-4)" }
}, Io = /* @__PURE__ */ O({
  __name: "StatusSection",
  props: {
    status: {}
  },
  emits: ["view-workflows", "resolve-models", "view-history", "commit-changes", "view-debug", "sync-environment", "switch-branch"],
  setup(e, { emit: l }) {
    const s = e, r = V(() => s.status.workflows.new.length > 0 || s.status.workflows.modified.length > 0 || s.status.workflows.deleted.length > 0), u = V(() => {
      const m = s.status.git_changes;
      return m.nodes_added.length > 0 || m.nodes_removed.length > 0 || m.workflow_changes || m.has_other_changes;
    }), x = V(() => {
      const m = s.status.git_changes, k = s.status.workflows;
      return (m.workflow_changes || m.has_other_changes) && k.new.length === 0 && k.modified.length === 0 && k.deleted.length === 0;
    }), h = V(() => s.status.missing_models_count > 0 || u.value || !s.status.comparison.is_synced), b = V(() => {
      const m = [];
      return s.status.workflows.new.length > 0 && m.push(`${s.status.workflows.new.length} new workflow${s.status.workflows.new.length === 1 ? "" : "s"}`), s.status.workflows.modified.length > 0 && m.push(`${s.status.workflows.modified.length} modified workflow${s.status.workflows.modified.length === 1 ? "" : "s"}`), s.status.workflows.deleted.length > 0 && m.push(`${s.status.workflows.deleted.length} deleted workflow${s.status.workflows.deleted.length === 1 ? "" : "s"}`), s.status.git_changes.nodes_added.length > 0 && m.push(`${s.status.git_changes.nodes_added.length} node${s.status.git_changes.nodes_added.length === 1 ? "" : "s"} added`), s.status.git_changes.nodes_removed.length > 0 && m.push(`${s.status.git_changes.nodes_removed.length} node${s.status.git_changes.nodes_removed.length === 1 ? "" : "s"} removed`), `${m.length > 0 ? m.join(", ") + "." : "You have uncommitted changes."} Your work could be lost if you switch branches without committing.`;
    });
    return (m, k) => (t(), y(fe, null, {
      header: a(() => [
        i(ve, { title: "STATUS" })
      ]),
      content: a(() => [
        i(Te, {
          level: "4",
          style: { "margin-bottom": "var(--cg-space-2)" }
        }, {
          default: a(() => [...k[7] || (k[7] = [
            f(" ENVIRONMENT HEALTH ", -1)
          ])]),
          _: 1
        }),
        i(Kt, {
          "left-title": "WORKFLOWS",
          "right-title": "GIT CHANGES"
        }, {
          left: a(() => [
            e.status.workflows.new.length ? (t(), y(ye, {
              key: 0,
              icon: "●",
              count: e.status.workflows.new.length,
              label: "new",
              variant: "new"
            }, null, 8, ["count"])) : d("", !0),
            e.status.workflows.modified.length ? (t(), y(ye, {
              key: 1,
              icon: "●",
              count: e.status.workflows.modified.length,
              label: "modified",
              variant: "modified"
            }, null, 8, ["count"])) : d("", !0),
            e.status.workflows.deleted.length ? (t(), y(ye, {
              key: 2,
              icon: "●",
              count: e.status.workflows.deleted.length,
              label: "deleted",
              variant: "deleted"
            }, null, 8, ["count"])) : d("", !0),
            i(ye, {
              icon: "✓",
              count: e.status.workflows.synced.length,
              label: "synced",
              variant: "synced",
              separator: r.value
            }, null, 8, ["count", "separator"])
          ]),
          right: a(() => [
            e.status.git_changes.nodes_added.length ? (t(), y(ye, {
              key: 0,
              icon: "●",
              count: e.status.git_changes.nodes_added.length,
              label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
              variant: "new"
            }, null, 8, ["count", "label"])) : d("", !0),
            e.status.git_changes.nodes_removed.length ? (t(), y(ye, {
              key: 1,
              icon: "●",
              count: e.status.git_changes.nodes_removed.length,
              label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
              variant: "deleted"
            }, null, 8, ["count", "label"])) : d("", !0),
            x.value ? (t(), y(ye, {
              key: 2,
              icon: "●",
              label: "other changes",
              variant: "modified"
            })) : d("", !0),
            u.value ? d("", !0) : (t(), y(ye, {
              key: 3,
              icon: "✓",
              label: "No uncommitted changes",
              variant: "ok"
            }))
          ]),
          _: 1
        }),
        o("div", xo, [
          i($o, {
            "branch-name": e.status.current_branch || "main"
          }, {
            actions: a(() => [
              i(A, {
                variant: "secondary",
                size: "sm",
                onClick: k[0] || (k[0] = (U) => m.$emit("switch-branch"))
              }, {
                default: a(() => [...k[8] || (k[8] = [
                  f(" Switch Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["branch-name"])
        ]),
        h.value ? (t(), n("div", Co, [
          i(Te, {
            level: "4",
            style: { "margin-bottom": "var(--cg-space-2)" }
          }, {
            default: a(() => [...k[9] || (k[9] = [
              f(" ISSUES DETECTED ", -1)
            ])]),
            _: 1
          }),
          e.status.missing_models_count > 0 ? (t(), y(Ye, {
            key: 0,
            severity: "warning",
            icon: "⚠",
            title: `${e.status.missing_models_count} missing model${e.status.missing_models_count === 1 ? "" : "s"}`,
            description: "Some workflows reference models that are not found in the workspace index."
          }, {
            actions: a(() => [
              i(A, {
                variant: "secondary",
                size: "sm",
                onClick: k[1] || (k[1] = (U) => m.$emit("view-workflows"))
              }, {
                default: a(() => [...k[10] || (k[10] = [
                  f(" View Details ", -1)
                ])]),
                _: 1
              }),
              i(A, {
                variant: "primary",
                size: "sm",
                onClick: k[2] || (k[2] = (U) => m.$emit("resolve-models"))
              }, {
                default: a(() => [...k[11] || (k[11] = [
                  f(" Resolve ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["title"])) : d("", !0),
          u.value ? (t(), y(Ye, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "You have unsaved changes",
            description: b.value
          }, {
            actions: a(() => [
              i(A, {
                variant: "secondary",
                size: "sm",
                onClick: k[3] || (k[3] = (U) => m.$emit("view-history"))
              }, {
                default: a(() => [...k[12] || (k[12] = [
                  f(" View Changes ", -1)
                ])]),
                _: 1
              }),
              i(A, {
                variant: "primary",
                size: "sm",
                onClick: k[4] || (k[4] = (U) => m.$emit("commit-changes"))
              }, {
                default: a(() => [...k[13] || (k[13] = [
                  f(" Commit Changes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["description"])) : d("", !0),
          e.status.comparison.is_synced ? d("", !0) : (t(), y(Ye, {
            key: 2,
            severity: "error",
            icon: "⚠",
            title: "Environment not synced",
            description: "Your environment state does not match the git repository. This may indicate missing installations or configuration issues."
          }, {
            actions: a(() => [
              i(A, {
                variant: "secondary",
                size: "sm",
                onClick: k[5] || (k[5] = (U) => m.$emit("view-debug"))
              }, {
                default: a(() => [...k[14] || (k[14] = [
                  f(" View Logs ", -1)
                ])]),
                _: 1
              }),
              i(A, {
                variant: "primary",
                size: "sm",
                onClick: k[6] || (k[6] = (U) => m.$emit("sync-environment"))
              }, {
                default: a(() => [...k[15] || (k[15] = [
                  f(" Sync Now ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }))
        ])) : d("", !0),
        !h.value && !u.value ? (t(), y(de, {
          key: 1,
          icon: "✅",
          message: "Everything looks good! No issues detected.",
          style: { "margin-top": "var(--cg-space-4)" }
        })) : d("", !0)
      ]),
      _: 1
    }));
  }
}), So = /* @__PURE__ */ T(Io, [["__scopeId", "data-v-2045da26"]]), Eo = ["type", "value", "placeholder", "disabled"], Lo = /* @__PURE__ */ O({
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
    const r = e, u = s, x = R(null);
    function h(b) {
      const m = b.target.value;
      u("update:modelValue", m);
    }
    return ne(() => {
      r.autoFocus && x.value && x.value.focus();
    }), l({
      focus: () => {
        var b;
        return (b = x.value) == null ? void 0 : b.focus();
      },
      blur: () => {
        var b;
        return (b = x.value) == null ? void 0 : b.blur();
      }
    }), (b, m) => (t(), n("input", {
      ref_key: "inputRef",
      ref: x,
      type: e.type,
      value: e.modelValue,
      placeholder: e.placeholder,
      disabled: e.disabled,
      class: P(["text-input", { error: e.hasError, monospace: e.monospace }]),
      onInput: h,
      onKeyup: [
        m[0] || (m[0] = Ce((k) => b.$emit("enter"), ["enter"])),
        m[1] || (m[1] = Ce((k) => b.$emit("escape"), ["escape"]))
      ],
      onFocus: m[2] || (m[2] = (k) => b.$emit("focus")),
      onBlur: m[3] || (m[3] = (k) => b.$emit("blur"))
    }, null, 42, Eo));
  }
}), Be = /* @__PURE__ */ T(Lo, [["__scopeId", "data-v-0380d08f"]]), Ro = { class: "branch-create-form" }, Uo = { class: "form-actions" }, zo = /* @__PURE__ */ O({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(e, { emit: l }) {
    const s = l, r = R(""), u = V(() => {
      const b = r.value.trim();
      return b.length > 0 && !b.startsWith("-") && !b.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(b);
    });
    function x() {
      u.value && (s("create", r.value.trim()), r.value = "");
    }
    function h() {
      r.value = "", s("cancel");
    }
    return (b, m) => (t(), n("div", Ro, [
      i(Be, {
        modelValue: r.value,
        "onUpdate:modelValue": m[0] || (m[0] = (k) => r.value = k),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: x,
        onEscape: h
      }, null, 8, ["modelValue"]),
      o("div", Uo, [
        i(A, {
          variant: "primary",
          size: "sm",
          disabled: !u.value,
          onClick: x
        }, {
          default: a(() => [...m[1] || (m[1] = [
            f(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        i(A, {
          variant: "secondary",
          size: "sm",
          onClick: h
        }, {
          default: a(() => [...m[2] || (m[2] = [
            f(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), No = /* @__PURE__ */ T(zo, [["__scopeId", "data-v-7c500394"]]), Mo = { class: "branch-list-item__indicator" }, Do = { class: "branch-list-item__name" }, Vo = {
  key: 0,
  class: "branch-list-item__actions"
}, Bo = {
  key: 0,
  class: "branch-list-item__current-label"
}, Oo = /* @__PURE__ */ O({
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
      class: P(["branch-list-item", { current: e.isCurrent, clickable: e.clickable }]),
      onClick: s[0] || (s[0] = (r) => e.clickable && l.$emit("click"))
    }, [
      o("span", Mo, c(e.isCurrent ? "●" : "○"), 1),
      o("span", Do, c(e.branchName), 1),
      l.$slots.actions || e.showCurrentLabel ? (t(), n("div", Vo, [
        q(l.$slots, "actions", {}, void 0, !0),
        e.isCurrent && e.showCurrentLabel ? (t(), n("span", Bo, " current ")) : d("", !0)
      ])) : d("", !0)
    ], 2));
  }
}), To = /* @__PURE__ */ T(Oo, [["__scopeId", "data-v-c6581a24"]]), Ao = {
  key: 2,
  class: "branch-list"
}, Wo = /* @__PURE__ */ O({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create"],
  setup(e, { emit: l }) {
    const s = l, r = R(!1);
    function u(h) {
      s("create", h), x();
    }
    function x() {
      r.value = !1;
    }
    return (h, b) => (t(), y(fe, null, {
      header: a(() => [
        i(ve, { title: "BRANCHES" }, {
          actions: a(() => [
            i(A, {
              variant: "ghost",
              size: "sm",
              onClick: b[0] || (b[0] = (m) => r.value = !0),
              title: "Create new branch"
            }, {
              default: a(() => [...b[1] || (b[1] = [
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
        r.value ? (t(), y(No, {
          key: 0,
          onCreate: u,
          onCancel: x
        })) : d("", !0),
        e.branches.length === 0 ? (t(), y(de, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (t(), n("div", Ao, [
          (t(!0), n(W, null, Y(e.branches, (m) => (t(), y(To, {
            key: m.name,
            "branch-name": m.name,
            "is-current": m.is_current
          }, {
            actions: a(() => [
              m.is_current ? d("", !0) : (t(), y(A, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: (k) => h.$emit("switch", m.name)
              }, {
                default: a(() => [...b[2] || (b[2] = [
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
}), Fo = /* @__PURE__ */ T(Wo, [["__scopeId", "data-v-763d6ec4"]]), Go = { class: "commit-list" }, Po = /* @__PURE__ */ O({
  __name: "CommitList",
  setup(e) {
    return (l, s) => (t(), n("div", Go, [
      q(l.$slots, "default", {}, void 0, !0)
    ]));
  }
}), Ho = /* @__PURE__ */ T(Po, [["__scopeId", "data-v-8c5ee761"]]), Ko = { class: "commit-hash" }, jo = /* @__PURE__ */ O({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const l = e, s = V(() => l.hash.slice(0, l.length));
    return (r, u) => (t(), n("span", Ko, c(s.value), 1));
  }
}), qo = /* @__PURE__ */ T(jo, [["__scopeId", "data-v-7c333cc6"]]), Yo = { class: "commit-message" }, Jo = { class: "commit-date" }, Xo = /* @__PURE__ */ O({
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
    function u() {
      s.clickable && r("click");
    }
    return (x, h) => (t(), n("div", {
      class: P(["commit-item", { clickable: e.clickable }]),
      onClick: u
    }, [
      i(qo, { hash: e.hash }, null, 8, ["hash"]),
      o("span", Yo, c(e.message), 1),
      o("span", Jo, c(e.relativeDate), 1),
      x.$slots.actions ? (t(), n("div", {
        key: 0,
        class: "commit-actions",
        onClick: h[0] || (h[0] = Ee(() => {
        }, ["stop"]))
      }, [
        q(x.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), Zo = /* @__PURE__ */ T(Xo, [["__scopeId", "data-v-dd7c621b"]]), Qo = /* @__PURE__ */ O({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(e) {
    return (l, s) => (t(), y(fe, null, {
      header: a(() => [
        i(ve, { title: "HISTORY" })
      ]),
      content: a(() => [
        e.commits.length === 0 ? (t(), y(de, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (t(), y(Ho, { key: 1 }, {
          default: a(() => [
            (t(!0), n(W, null, Y(e.commits, (r) => (t(), y(Zo, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (u) => l.$emit("select", r)
            }, {
              actions: a(() => [
                i(A, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (u) => l.$emit("checkout", r),
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
}), ea = /* @__PURE__ */ T(Qo, [["__scopeId", "data-v-981c3c64"]]), st = [
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
], ta = {
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
], oa = [
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
], aa = [
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
  getWorkflowDetails: async (e) => (await Q(300), ta[e] || {
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
  getWorkspaceModels: async () => (await Q(400), oa),
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
    const s = [...Ve, ...Ve.map((u) => ({
      ...u,
      context: { ...u.context, environment: "testing" }
    }))];
    return (e ? s.filter((u) => u.level === e) : s).slice(0, l || 100);
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
  getCommitHistory: async (e = 10) => (await Q(300), aa.slice(0, e)),
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
  const e = R(!1), l = R(null);
  async function s(C, g) {
    var ae;
    if (!((ae = window.app) != null && ae.api))
      throw new Error("ComfyUI API not available");
    const j = await window.app.api.fetchApi(C, g);
    if (!j.ok) {
      const ge = await j.json().catch(() => ({}));
      throw new Error(ge.error || ge.message || `Request failed: ${j.status}`);
    }
    return j.json();
  }
  async function r() {
    return Z.getStatus();
  }
  async function u(C, g = !1) {
    return s("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: C, allow_issues: g })
    });
  }
  async function x(C = 10, g = 0) {
    {
      const j = await Z.getCommitHistory(C);
      return {
        commits: j,
        total: j.length,
        offset: g
      };
    }
  }
  async function h(C) {
    return s("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: C })
    });
  }
  async function b() {
    return Z.getBranches();
  }
  async function m(C) {
    return s(`/v2/comfygit/commit/${C}`);
  }
  async function k(C, g = !1) {
    return s("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: C, force: g })
    });
  }
  async function U(C, g = "HEAD") {
    return s("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: C, start_point: g })
    });
  }
  async function _(C, g = !1) {
    return s("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: C, force: g })
    });
  }
  async function B() {
    return Z.getEnvironments();
  }
  async function F(C) {
    return Z.switchEnvironment(C);
  }
  async function J() {
    return null;
  }
  async function G(C, g, j) {
    return await Z.createEnvironment(C, g, j), { status: "success" };
  }
  async function D(C) {
    return await Z.deleteEnvironment(C), { status: "success" };
  }
  async function S() {
    return Z.getWorkflows();
  }
  async function N(C) {
    return Z.getWorkflowDetails(C);
  }
  async function X(C) {
    return Z.resolveWorkflow(C);
  }
  async function I(C, g, j) {
    return await Z.installWorkflowDeps(C, g, j), { status: "success" };
  }
  async function $(C, g, j) {
    return Z.setModelImportance(C, g, j);
  }
  async function p() {
    return Z.getEnvironmentModels();
  }
  async function w() {
    return Z.getWorkspaceModels();
  }
  async function v(C, g) {
    return Z.updateModelSource(C, g);
  }
  async function E(C) {
    return Z.deleteModel(C);
  }
  async function M(C) {
    return await Z.downloadModel(C), { status: "success" };
  }
  async function se() {
    return Z.getConfig();
  }
  async function z(C) {
    return Z.updateConfig(C);
  }
  async function L(C, g) {
    return Z.getEnvironmentLogs(C, g);
  }
  async function H(C, g) {
    return Z.getWorkspaceLogs(C, g);
  }
  async function ie() {
    return Z.getNodes();
  }
  async function _e(C) {
    return await Z.installNode(C), { status: "success" };
  }
  async function Fe(C) {
    return await Z.updateNode(C), { status: "success" };
  }
  async function Ne(C) {
    return await Z.uninstallNode(C), { status: "success" };
  }
  async function Ge() {
    return Z.getRemotes();
  }
  async function Pe(C, g) {
    return await Z.addRemote(C, g), { status: "success", remote_name: C };
  }
  async function He(C) {
    return await Z.removeRemote(C), { status: "success", remote_name: C };
  }
  async function Ke(C, g, j) {
    return await Z.updateRemoteUrl(C, g, j), { status: "success", remote_name: C };
  }
  async function Me(C) {
    return await Z.fetchRemote(C), { status: "success", remote_name: C };
  }
  async function je(C) {
    return Z.getRemoteSyncStatus(C);
  }
  return {
    isLoading: e,
    error: l,
    getStatus: r,
    commit: u,
    getHistory: x,
    exportEnv: h,
    // Git Operations
    getBranches: b,
    getCommitDetail: m,
    checkout: k,
    createBranch: U,
    switchBranch: _,
    // Environment Management
    getEnvironments: B,
    switchEnvironment: F,
    getSwitchProgress: J,
    createEnvironment: G,
    deleteEnvironment: D,
    // Workflow Management
    getWorkflows: S,
    getWorkflowDetails: N,
    resolveWorkflow: X,
    installWorkflowDeps: I,
    setModelImportance: $,
    // Model Management
    getEnvironmentModels: p,
    getWorkspaceModels: w,
    updateModelSource: v,
    deleteModel: E,
    downloadModel: M,
    // Settings
    getConfig: se,
    updateConfig: z,
    // Debug/Logs
    getEnvironmentLogs: L,
    getWorkspaceLogs: H,
    // Node Management
    getNodes: ie,
    installNode: _e,
    updateNode: Fe,
    uninstallNode: Ne,
    // Git Remotes
    getRemotes: Ge,
    addRemote: Pe,
    removeRemote: He,
    updateRemoteUrl: Ke,
    fetchRemote: Me,
    getRemoteSyncStatus: je
  };
}
const sa = { class: "base-modal-header" }, na = {
  key: 0,
  class: "base-modal-title"
}, la = { class: "base-modal-body" }, ra = {
  key: 0,
  class: "base-modal-loading"
}, ia = {
  key: 1,
  class: "base-modal-error"
}, ca = {
  key: 0,
  class: "base-modal-footer"
}, da = /* @__PURE__ */ O({
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
    function u() {
      s.closeOnOverlayClick && r("close");
    }
    function x(h) {
      h.key === "Escape" && r("close");
    }
    return ne(() => {
      document.addEventListener("keydown", x), document.body.style.overflow = "hidden";
    }), pt(() => {
      document.removeEventListener("keydown", x), document.body.style.overflow = "";
    }), (h, b) => (t(), y(lt, { to: "body" }, [
      o("div", {
        class: "base-modal-overlay",
        onClick: u
      }, [
        o("div", {
          class: P(["base-modal-content", e.size]),
          onClick: b[1] || (b[1] = Ee(() => {
          }, ["stop"]))
        }, [
          o("div", sa, [
            q(h.$slots, "header", {}, () => [
              e.title ? (t(), n("h3", na, c(e.title), 1)) : d("", !0)
            ], !0),
            e.showCloseButton ? (t(), n("button", {
              key: 0,
              class: "base-modal-close",
              onClick: b[0] || (b[0] = (m) => h.$emit("close"))
            }, [...b[2] || (b[2] = [
              o("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                o("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])) : d("", !0)
          ]),
          o("div", la, [
            e.loading ? (t(), n("div", ra, "Loading...")) : e.error ? (t(), n("div", ia, c(e.error), 1)) : q(h.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          h.$slots.footer ? (t(), n("div", ca, [
            q(h.$slots, "footer", {}, void 0, !0)
          ])) : d("", !0)
        ], 2)
      ])
    ]));
  }
}), We = /* @__PURE__ */ T(da, [["__scopeId", "data-v-700d367b"]]), ua = ["type", "disabled"], ma = {
  key: 0,
  class: "spinner"
}, fa = /* @__PURE__ */ O({
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
      class: P(["base-btn", e.variant, e.size, { "full-width": e.fullWidth, loading: e.loading }]),
      onClick: s[0] || (s[0] = (r) => l.$emit("click", r))
    }, [
      e.loading ? (t(), n("span", ma)) : d("", !0),
      q(l.$slots, "default", {}, void 0, !0)
    ], 10, ua));
  }
}), re = /* @__PURE__ */ T(fa, [["__scopeId", "data-v-f3452606"]]), va = {
  key: 0,
  class: "base-title-count"
}, ga = /* @__PURE__ */ O({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (l, s) => (t(), y(et(`h${e.level}`), {
      class: P(["base-title", e.variant])
    }, {
      default: a(() => [
        q(l.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (t(), n("span", va, "(" + c(e.count) + ")", 1)) : d("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), be = /* @__PURE__ */ T(ga, [["__scopeId", "data-v-5a01561d"]]), ha = ["value", "disabled"], pa = {
  key: 0,
  value: "",
  disabled: ""
}, ya = ["value"], ba = {
  key: 0,
  class: "base-select-error"
}, wa = /* @__PURE__ */ O({
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
    return (r, u) => (t(), n("div", {
      class: P(["base-select-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      o("select", {
        value: e.modelValue,
        disabled: e.disabled,
        class: P(["base-select", { error: !!e.error }]),
        onChange: u[0] || (u[0] = (x) => r.$emit("update:modelValue", x.target.value))
      }, [
        e.placeholder ? (t(), n("option", pa, c(e.placeholder), 1)) : d("", !0),
        (t(!0), n(W, null, Y(e.options, (x) => (t(), n("option", {
          key: l(x),
          value: l(x)
        }, c(s(x)), 9, ya))), 128))
      ], 42, ha),
      e.error ? (t(), n("span", ba, c(e.error), 1)) : d("", !0)
    ], 2));
  }
}), xe = /* @__PURE__ */ T(wa, [["__scopeId", "data-v-7436d745"]]), ka = { class: "detail-section" }, _a = {
  key: 0,
  class: "empty-message"
}, $a = { class: "model-header" }, xa = { class: "model-name" }, Ca = { class: "model-details" }, Ia = { class: "model-row" }, Sa = { class: "model-row" }, Ea = {
  key: 0,
  class: "model-row"
}, La = { class: "value" }, Ra = {
  key: 1,
  class: "model-row"
}, Ua = { class: "value" }, za = {
  key: 0,
  class: "model-actions"
}, Na = { class: "detail-section" }, Ma = {
  key: 0,
  class: "empty-message"
}, Da = { class: "node-name" }, Va = {
  key: 0,
  class: "node-version"
}, Ba = /* @__PURE__ */ O({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve"],
  setup(e, { emit: l }) {
    const s = e, r = l, { getWorkflowDetails: u, setModelImportance: x } = ue(), h = R(null), b = R(!1), m = R(null), k = R(!1), U = R({}), _ = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    async function B() {
      b.value = !0, m.value = null;
      try {
        h.value = await u(s.workflowName);
      } catch (G) {
        m.value = G instanceof Error ? G.message : "Failed to load workflow details";
      } finally {
        b.value = !1;
      }
    }
    function F(G, D) {
      U.value[G] = D, k.value = !0;
    }
    async function J() {
      if (!k.value) {
        r("close");
        return;
      }
      b.value = !0, m.value = null;
      try {
        for (const [G, D] of Object.entries(U.value))
          await x(s.workflowName, G, D);
        r("close");
      } catch (G) {
        m.value = G instanceof Error ? G.message : "Failed to save changes";
      } finally {
        b.value = !1;
      }
    }
    return ne(B), (G, D) => (t(), y(We, {
      title: `WORKFLOW DETAILS: ${e.workflowName}`,
      size: "lg",
      loading: b.value,
      error: m.value || void 0,
      onClose: D[2] || (D[2] = (S) => r("close"))
    }, {
      body: a(() => [
        h.value ? (t(), n(W, { key: 0 }, [
          o("section", ka, [
            i(be, { variant: "section" }, {
              default: a(() => [
                f("MODELS USED (" + c(h.value.models.length) + ")", 1)
              ]),
              _: 1
            }),
            h.value.models.length === 0 ? (t(), n("div", _a, " No models used in this workflow ")) : d("", !0),
            (t(!0), n(W, null, Y(h.value.models, (S) => (t(), n("div", {
              key: S.hash,
              class: "model-card"
            }, [
              o("div", $a, [
                D[3] || (D[3] = o("span", { class: "model-icon" }, "📦", -1)),
                o("span", xa, c(S.filename), 1)
              ]),
              o("div", Ca, [
                o("div", Ia, [
                  D[4] || (D[4] = o("span", { class: "label" }, "Status:", -1)),
                  o("span", {
                    class: P(["value", S.status === "available" ? "success" : "error"])
                  }, c(S.status === "available" ? "✓ Available" : "⚠ Missing"), 3)
                ]),
                o("div", Sa, [
                  D[5] || (D[5] = o("span", { class: "label" }, "Importance:", -1)),
                  i(xe, {
                    "model-value": U.value[S.hash] || S.importance,
                    options: _,
                    "onUpdate:modelValue": (N) => F(S.hash, N)
                  }, null, 8, ["model-value", "onUpdate:modelValue"])
                ]),
                S.node_type ? (t(), n("div", Ea, [
                  D[6] || (D[6] = o("span", { class: "label" }, "Used in:", -1)),
                  o("span", La, c(S.node_type) + " (Node " + c(S.node_id) + ")", 1)
                ])) : d("", !0),
                S.size_mb ? (t(), n("div", Ra, [
                  D[7] || (D[7] = o("span", { class: "label" }, "Size:", -1)),
                  o("span", Ua, c(S.size_mb) + " MB", 1)
                ])) : d("", !0)
              ]),
              S.status === "missing" ? (t(), n("div", za, [
                i(re, {
                  variant: "secondary",
                  size: "sm",
                  onClick: D[0] || (D[0] = (N) => r("resolve"))
                }, {
                  default: a(() => [...D[8] || (D[8] = [
                    f(" Resolve ", -1)
                  ])]),
                  _: 1
                })
              ])) : d("", !0)
            ]))), 128))
          ]),
          D[9] || (D[9] = o("div", { class: "info-box" }, [
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
          o("section", Na, [
            i(be, { variant: "section" }, {
              default: a(() => [
                f("NODES USED (" + c(h.value.nodes.length) + ")", 1)
              ]),
              _: 1
            }),
            h.value.nodes.length === 0 ? (t(), n("div", Ma, " No custom nodes used in this workflow ")) : d("", !0),
            (t(!0), n(W, null, Y(h.value.nodes, (S) => (t(), n("div", {
              key: S.name,
              class: "node-item"
            }, [
              o("span", {
                class: P(["node-status", S.installed ? "installed" : "missing"])
              }, c(S.installed ? "✓" : "✕"), 3),
              o("span", Da, c(S.name), 1),
              S.version ? (t(), n("span", Va, "v" + c(S.version), 1)) : d("", !0)
            ]))), 128))
          ])
        ], 64)) : d("", !0)
      ]),
      footer: a(() => [
        i(re, {
          variant: "secondary",
          onClick: D[1] || (D[1] = (S) => r("close"))
        }, {
          default: a(() => [...D[10] || (D[10] = [
            f(" Close ", -1)
          ])]),
          _: 1
        }),
        k.value ? (t(), y(re, {
          key: 0,
          variant: "primary",
          onClick: J
        }, {
          default: a(() => [...D[11] || (D[11] = [
            f(" Save Changes ", -1)
          ])]),
          _: 1
        })) : d("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Oa = /* @__PURE__ */ T(Ba, [["__scopeId", "data-v-6ce9a41c"]]), Ta = {
  key: 0,
  class: "resolve-section"
}, Aa = { class: "resolve-card success-card" }, Wa = { class: "items-list" }, Fa = { class: "item-info" }, Ga = { class: "item-name" }, Pa = {
  key: 0,
  class: "item-meta"
}, Ha = { class: "match-type" }, Ka = { class: "source" }, ja = {
  key: 1,
  class: "resolve-section"
}, qa = { class: "resolve-card warning-card" }, Ya = { class: "items-list" }, Ja = { class: "item-info" }, Xa = { class: "item-name" }, Za = { class: "item-meta" }, Qa = { key: 0 }, es = { key: 1 }, ts = {
  key: 0,
  class: "item-warning"
}, os = {
  key: 0,
  class: "item-action"
}, as = ["onClick"], ss = {
  key: 2,
  class: "resolve-section"
}, ns = { class: "info-text" }, ls = { class: "actions-summary" }, rs = { class: "summary-list" }, is = { key: 0 }, cs = { key: 1 }, ds = { key: 2 }, us = {
  key: 0,
  class: "estimated-size"
}, ms = /* @__PURE__ */ O({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh"],
  setup(e, { emit: l }) {
    const s = e, r = l, { resolveWorkflow: u, installWorkflowDeps: x } = ue(), h = R(null), b = R(!1), m = R(!1), k = R(null), U = V(() => {
      var $;
      return h.value ? (($ = h.value.download_results) == null ? void 0 : $.every((p) => p.can_download)) ?? !1 : !1;
    });
    async function _() {
      b.value = !0, k.value = null;
      try {
        h.value = await u(s.workflowName);
      } catch ($) {
        k.value = $ instanceof Error ? $.message : "Failed to analyze workflow";
      } finally {
        b.value = !1;
      }
    }
    function B($) {
      return !$.possible_matches || $.possible_matches.length === 0 ? null : $.possible_matches.reduce(
        (p, w) => w.match_confidence > p.match_confidence ? w : p
      );
    }
    function F($) {
      return $ >= 0.9 ? "high" : $ >= 0.7 ? "medium" : "low";
    }
    function J($) {
      const p = B($);
      return p ? p.package_id.startsWith("http") ? "GitHub" : "ComfyUI Registry" : "Unknown";
    }
    function G($) {
      var p, w;
      return (w = (p = h.value) == null ? void 0 : p.download_results) == null ? void 0 : w.find((v) => v.model === $);
    }
    function D($) {
      const p = G($);
      return (p == null ? void 0 : p.can_download) ?? !1;
    }
    function S($) {
      const p = G($);
      return (p == null ? void 0 : p.source_url) || null;
    }
    function N($) {
      window.open($, "_blank");
    }
    async function X() {
      if (!(!h.value || m.value)) {
        m.value = !0, k.value = null;
        try {
          await x(
            s.workflowName,
            h.value.nodes_to_install,
            []
          ), r("install"), r("refresh"), r("close");
        } catch ($) {
          k.value = $ instanceof Error ? $.message : "Installation failed";
        } finally {
          m.value = !1;
        }
      }
    }
    async function I() {
      if (!(!h.value || m.value)) {
        m.value = !0, k.value = null;
        try {
          await x(
            s.workflowName,
            h.value.nodes_to_install,
            h.value.models_to_download
          ), r("install"), r("refresh"), r("close");
        } catch ($) {
          k.value = $ instanceof Error ? $.message : "Installation failed";
        } finally {
          m.value = !1;
        }
      }
    }
    return ne(_), ($, p) => (t(), y(We, {
      title: `RESOLVE DEPENDENCIES: ${e.workflowName}`,
      size: "lg",
      loading: b.value,
      error: k.value || void 0,
      onClose: p[1] || (p[1] = (w) => r("close"))
    }, {
      body: a(() => [
        h.value ? (t(), n(W, { key: 0 }, [
          p[5] || (p[5] = o("div", { class: "intro-message" }, " This workflow needs the following to work: ", -1)),
          h.value.nodes_unresolved.length > 0 ? (t(), n("section", Ta, [
            i(be, { variant: "section" }, {
              default: a(() => [
                f("NODES (" + c(h.value.nodes_unresolved.length) + ")", 1)
              ]),
              _: 1
            }),
            o("div", Aa, [
              p[2] || (p[2] = o("div", { class: "card-header" }, [
                o("span", { class: "status-icon" }, "✓"),
                o("span", { class: "card-title" }, "Can install automatically")
              ], -1)),
              o("div", Wa, [
                (t(!0), n(W, null, Y(h.value.nodes_unresolved, (w) => {
                  var v;
                  return t(), n("div", {
                    key: w.node_type,
                    class: "item"
                  }, [
                    o("div", Fa, [
                      o("div", Ga, c(((v = B(w)) == null ? void 0 : v.package_id) || w.node_type), 1),
                      B(w) ? (t(), n("div", Pa, [
                        o("span", {
                          class: P(["confidence-badge", F(B(w).match_confidence)])
                        }, c(Math.round(B(w).match_confidence * 100)) + "% match ", 3),
                        o("span", Ha, c(B(w).match_type), 1),
                        o("span", Ka, "Source: " + c(J(w)), 1)
                      ])) : d("", !0)
                    ])
                  ]);
                }), 128))
              ])
            ])
          ])) : d("", !0),
          h.value.models_unresolved.length > 0 ? (t(), n("section", ja, [
            i(be, { variant: "section" }, {
              default: a(() => [
                f("MODELS (" + c(h.value.models_unresolved.length) + ")", 1)
              ]),
              _: 1
            }),
            o("div", qa, [
              p[3] || (p[3] = o("div", { class: "card-header" }, [
                o("span", { class: "status-icon" }, "⚠"),
                o("span", { class: "card-title" }, "Manual download required")
              ], -1)),
              o("div", Ya, [
                (t(!0), n(W, null, Y(h.value.models_unresolved, (w) => (t(), n("div", {
                  key: w.filename,
                  class: "item"
                }, [
                  o("div", Ja, [
                    o("div", Xa, c(w.filename), 1),
                    o("div", Za, [
                      w.expected_category ? (t(), n("span", Qa, "Type: " + c(w.expected_category), 1)) : d("", !0),
                      G(w.filename) ? (t(), n("span", es, " Size: ~" + c(G(w.filename).estimated_size_mb) + " MB ", 1)) : d("", !0)
                    ]),
                    D(w.filename) ? d("", !0) : (t(), n("div", ts, " No auto-download source configured "))
                  ]),
                  S(w.filename) ? (t(), n("div", os, [
                    o("button", {
                      class: "link-btn",
                      onClick: (v) => N(S(w.filename))
                    }, " Open Source ↗ ", 8, as)
                  ])) : d("", !0)
                ]))), 128))
              ])
            ])
          ])) : d("", !0),
          h.value.nodes_resolved.length > 0 || h.value.models_resolved.length > 0 ? (t(), n("section", ss, [
            i(be, { variant: "section" }, {
              default: a(() => [
                f(" ALREADY AVAILABLE (" + c(h.value.nodes_resolved.length + h.value.models_resolved.length) + ") ", 1)
              ]),
              _: 1
            }),
            o("div", ns, c(h.value.nodes_resolved.length) + " nodes and " + c(h.value.models_resolved.length) + " models are already installed ", 1)
          ])) : d("", !0),
          o("div", ls, [
            p[4] || (p[4] = o("div", { class: "summary-title" }, "This will:", -1)),
            o("ol", rs, [
              h.value.nodes_to_install.length ? (t(), n("li", is, " Install " + c(h.value.nodes_to_install.length) + " nodes (~" + c(h.value.estimated_time_seconds) + "s) ", 1)) : d("", !0),
              h.value.nodes_to_install.length ? (t(), n("li", cs, " Restart ComfyUI to load new nodes ")) : d("", !0),
              h.value.models_to_download.length ? (t(), n("li", ds, " You'll still need to download " + c(h.value.models_to_download.length) + " model(s) manually ", 1)) : d("", !0)
            ]),
            h.value.estimated_size_mb ? (t(), n("div", us, " Estimated download: " + c(h.value.estimated_size_mb) + " MB ", 1)) : d("", !0)
          ])
        ], 64)) : d("", !0)
      ]),
      footer: a(() => [
        i(re, {
          variant: "secondary",
          onClick: p[0] || (p[0] = (w) => r("close"))
        }, {
          default: a(() => [...p[6] || (p[6] = [
            f(" Cancel ", -1)
          ])]),
          _: 1
        }),
        h.value && h.value.nodes_to_install.length && h.value.models_to_download.length ? (t(), y(re, {
          key: 0,
          variant: "secondary",
          disabled: m.value,
          loading: m.value,
          onClick: X
        }, {
          default: a(() => [...p[7] || (p[7] = [
            f(" Install Nodes Only ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : d("", !0),
        h.value && (h.value.nodes_to_install.length || h.value.models_to_download.length) ? (t(), y(re, {
          key: 1,
          variant: "primary",
          disabled: m.value || h.value.models_to_download.length > 0 && !U.value,
          loading: m.value,
          onClick: I
        }, {
          default: a(() => [...p[8] || (p[8] = [
            f(" Install All ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : d("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), fs = /* @__PURE__ */ T(ms, [["__scopeId", "data-v-d68efb14"]]), vs = { class: "search-input-wrapper" }, gs = ["value", "placeholder"], hs = /* @__PURE__ */ O({
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
    const s = e, r = l, u = R(null);
    let x;
    function h(m) {
      const k = m.target.value;
      s.debounce > 0 ? (clearTimeout(x), x = window.setTimeout(() => {
        r("update:modelValue", k);
      }, s.debounce)) : r("update:modelValue", k);
    }
    function b() {
      var m;
      r("update:modelValue", ""), r("clear"), (m = u.value) == null || m.focus();
    }
    return ne(() => {
      s.autoFocus && u.value && u.value.focus();
    }), (m, k) => (t(), n("div", vs, [
      o("input", {
        ref_key: "inputRef",
        ref: u,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: h,
        onKeyup: Ce(b, ["escape"])
      }, null, 40, gs),
      e.clearable && e.modelValue ? (t(), n("button", {
        key: 0,
        class: "clear-button",
        onClick: b,
        title: "Clear search"
      }, " ✕ ")) : d("", !0)
    ]));
  }
}), ps = /* @__PURE__ */ T(hs, [["__scopeId", "data-v-266f857a"]]), ys = { class: "search-bar" }, bs = /* @__PURE__ */ O({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (l, s) => (t(), n("div", ys, [
      i(ps, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": s[0] || (s[0] = (r) => l.$emit("update:modelValue", r)),
        onClear: s[1] || (s[1] = (r) => l.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), ze = /* @__PURE__ */ T(bs, [["__scopeId", "data-v-3d51bbfd"]]), ws = { class: "section-group" }, ks = {
  key: 0,
  class: "section-content"
}, _s = /* @__PURE__ */ O({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(e, { emit: l }) {
    const s = e, r = l, u = R(s.initiallyExpanded);
    function x() {
      s.collapsible && (u.value = !u.value, r("toggle", u.value));
    }
    return (h, b) => (t(), n("section", ws, [
      i(Te, {
        count: e.count,
        clickable: e.collapsible,
        expanded: u.value,
        onClick: x
      }, {
        default: a(() => [
          f(c(e.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !e.collapsible || u.value ? (t(), n("div", ks, [
        q(h.$slots, "default", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), oe = /* @__PURE__ */ T(_s, [["__scopeId", "data-v-c48e33ed"]]), $s = { class: "item-header" }, xs = {
  key: 0,
  class: "item-icon"
}, Cs = { class: "item-info" }, Is = {
  key: 0,
  class: "item-title"
}, Ss = {
  key: 1,
  class: "item-subtitle"
}, Es = {
  key: 0,
  class: "item-details"
}, Ls = {
  key: 1,
  class: "item-actions"
}, Rs = /* @__PURE__ */ O({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const s = e, r = V(() => s.status ? `status-${s.status}` : "");
    return (u, x) => (t(), n("div", {
      class: P(["item-card", { clickable: e.clickable, compact: e.compact }, r.value]),
      onClick: x[0] || (x[0] = (h) => e.clickable && u.$emit("click"))
    }, [
      o("div", $s, [
        u.$slots.icon ? (t(), n("span", xs, [
          q(u.$slots, "icon", {}, void 0, !0)
        ])) : d("", !0),
        o("div", Cs, [
          u.$slots.title ? (t(), n("div", Is, [
            q(u.$slots, "title", {}, void 0, !0)
          ])) : d("", !0),
          u.$slots.subtitle ? (t(), n("div", Ss, [
            q(u.$slots, "subtitle", {}, void 0, !0)
          ])) : d("", !0)
        ])
      ]),
      u.$slots.details ? (t(), n("div", Es, [
        q(u.$slots, "details", {}, void 0, !0)
      ])) : d("", !0),
      u.$slots.actions ? (t(), n("div", Ls, [
        q(u.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), le = /* @__PURE__ */ T(Rs, [["__scopeId", "data-v-cc435e0e"]]), Us = { class: "loading-state" }, zs = { class: "loading-message" }, Ns = /* @__PURE__ */ O({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (l, s) => (t(), n("div", Us, [
      s[0] || (s[0] = o("div", { class: "spinner" }, null, -1)),
      o("p", zs, c(e.message), 1)
    ]));
  }
}), we = /* @__PURE__ */ T(Ns, [["__scopeId", "data-v-ad8436c9"]]), Ms = { class: "error-state" }, Ds = { class: "error-message" }, Vs = /* @__PURE__ */ O({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (l, s) => (t(), n("div", Ms, [
      s[2] || (s[2] = o("span", { class: "error-icon" }, "⚠", -1)),
      o("p", Ds, c(e.message), 1),
      e.retry ? (t(), y(A, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: s[0] || (s[0] = (r) => l.$emit("retry"))
      }, {
        default: a(() => [...s[1] || (s[1] = [
          f(" Retry ", -1)
        ])]),
        _: 1
      })) : d("", !0)
    ]));
  }
}), ke = /* @__PURE__ */ T(Vs, [["__scopeId", "data-v-5397be48"]]), Bs = /* @__PURE__ */ O({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { emit: l }) {
    const s = l, { getWorkflows: r } = ue(), u = R([]), x = R(!1), h = R(null), b = R(""), m = R(!1), k = R(!1), U = R(!1), _ = R(!1), B = R(null), F = V(
      () => u.value.filter((z) => z.status === "broken")
    ), J = V(
      () => u.value.filter((z) => z.status === "new")
    ), G = V(
      () => u.value.filter((z) => z.status === "modified")
    ), D = V(
      () => u.value.filter((z) => z.status === "synced")
    ), S = V(() => {
      if (!b.value.trim()) return u.value;
      const z = b.value.toLowerCase();
      return u.value.filter((L) => L.name.toLowerCase().includes(z));
    }), N = V(
      () => F.value.filter(
        (z) => !b.value.trim() || z.name.toLowerCase().includes(b.value.toLowerCase())
      )
    ), X = V(
      () => J.value.filter(
        (z) => !b.value.trim() || z.name.toLowerCase().includes(b.value.toLowerCase())
      )
    ), I = V(
      () => G.value.filter(
        (z) => !b.value.trim() || z.name.toLowerCase().includes(b.value.toLowerCase())
      )
    ), $ = V(
      () => D.value.filter(
        (z) => !b.value.trim() || z.name.toLowerCase().includes(b.value.toLowerCase())
      )
    ), p = V(
      () => k.value ? $.value : $.value.slice(0, 5)
    );
    async function w() {
      x.value = !0, h.value = null;
      try {
        u.value = await r();
      } catch (z) {
        h.value = z instanceof Error ? z.message : "Failed to load workflows";
      } finally {
        x.value = !1;
      }
    }
    function v(z) {
      B.value = z, U.value = !0;
    }
    function E(z) {
      B.value = z, _.value = !0;
    }
    function M() {
      alert("Bulk resolution not yet implemented");
    }
    function se() {
      s("refresh");
    }
    return ne(w), (z, L) => (t(), n(W, null, [
      i(fe, null, {
        header: a(() => [
          i(ve, { title: "WORKFLOWS" }, {
            actions: a(() => [
              F.value.length > 0 ? (t(), y(A, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: M
              }, {
                default: a(() => [...L[7] || (L[7] = [
                  f(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : d("", !0)
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          i(ze, {
            modelValue: b.value,
            "onUpdate:modelValue": L[0] || (L[0] = (H) => b.value = H),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          x.value ? (t(), y(we, {
            key: 0,
            message: "Loading workflows..."
          })) : h.value ? (t(), y(ke, {
            key: 1,
            message: h.value,
            retry: !0,
            onRetry: w
          }, null, 8, ["message"])) : (t(), n(W, { key: 2 }, [
            N.value.length ? (t(), y(oe, {
              key: 0,
              title: "BROKEN",
              count: N.value.length
            }, {
              default: a(() => [
                (t(!0), n(W, null, Y(N.value, (H) => (t(), y(le, {
                  key: H.name,
                  status: "broken"
                }, {
                  icon: a(() => [...L[8] || (L[8] = [
                    f("⚠", -1)
                  ])]),
                  title: a(() => [
                    f(c(H.name), 1)
                  ]),
                  subtitle: a(() => [
                    f(" Missing: " + c(H.missing_nodes) + " nodes, " + c(H.missing_models) + " models ", 1)
                  ]),
                  actions: a(() => [
                    i(A, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ie) => E(H.name)
                    }, {
                      default: a(() => [...L[9] || (L[9] = [
                        f(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    i(A, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ie) => v(H.name)
                    }, {
                      default: a(() => [...L[10] || (L[10] = [
                        f(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            X.value.length ? (t(), y(oe, {
              key: 1,
              title: "NEW",
              count: X.value.length
            }, {
              default: a(() => [
                (t(!0), n(W, null, Y(X.value, (H) => (t(), y(le, {
                  key: H.name,
                  status: "new"
                }, {
                  icon: a(() => [...L[11] || (L[11] = [
                    f("●", -1)
                  ])]),
                  title: a(() => [
                    f(c(H.name), 1)
                  ]),
                  subtitle: a(() => [...L[12] || (L[12] = [
                    f("✓ Ready", -1)
                  ])]),
                  actions: a(() => [
                    i(A, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ie) => v(H.name)
                    }, {
                      default: a(() => [...L[13] || (L[13] = [
                        f(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            I.value.length ? (t(), y(oe, {
              key: 2,
              title: "MODIFIED",
              count: I.value.length
            }, {
              default: a(() => [
                (t(!0), n(W, null, Y(I.value, (H) => (t(), y(le, {
                  key: H.name,
                  status: "modified"
                }, {
                  icon: a(() => [...L[14] || (L[14] = [
                    f("⚡", -1)
                  ])]),
                  title: a(() => [
                    f(c(H.name), 1)
                  ]),
                  subtitle: a(() => [...L[15] || (L[15] = [
                    f("✓ Ready", -1)
                  ])]),
                  actions: a(() => [
                    i(A, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ie) => v(H.name)
                    }, {
                      default: a(() => [...L[16] || (L[16] = [
                        f(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            $.value.length ? (t(), y(oe, {
              key: 3,
              title: "SYNCED",
              count: $.value.length,
              collapsible: !0,
              "initially-expanded": m.value,
              onToggle: L[2] || (L[2] = (H) => m.value = H)
            }, {
              default: a(() => [
                (t(!0), n(W, null, Y(p.value, (H) => (t(), y(le, {
                  key: H.name,
                  status: "synced"
                }, {
                  icon: a(() => [...L[17] || (L[17] = [
                    f("✓", -1)
                  ])]),
                  title: a(() => [
                    f(c(H.name), 1)
                  ]),
                  subtitle: a(() => [...L[18] || (L[18] = [
                    f("✓ Ready", -1)
                  ])]),
                  actions: a(() => [
                    i(A, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ie) => v(H.name)
                    }, {
                      default: a(() => [...L[19] || (L[19] = [
                        f(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128)),
                !k.value && $.value.length > 5 ? (t(), y(A, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: L[1] || (L[1] = (H) => k.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: a(() => [
                    f(" View all " + c($.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : d("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : d("", !0),
            S.value.length ? d("", !0) : (t(), y(de, {
              key: 4,
              icon: "📭",
              message: b.value ? `No workflows match '${b.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      U.value && B.value ? (t(), y(Oa, {
        key: 0,
        "workflow-name": B.value,
        onClose: L[3] || (L[3] = (H) => U.value = !1),
        onResolve: L[4] || (L[4] = (H) => E(B.value))
      }, null, 8, ["workflow-name"])) : d("", !0),
      _.value && B.value ? (t(), y(fs, {
        key: 1,
        "workflow-name": B.value,
        onClose: L[5] || (L[5] = (H) => _.value = !1),
        onInstall: se,
        onRefresh: L[6] || (L[6] = (H) => s("refresh"))
      }, null, 8, ["workflow-name"])) : d("", !0)
    ], 64));
  }
}), Os = /* @__PURE__ */ T(Bs, [["__scopeId", "data-v-2251d776"]]), Ts = /* @__PURE__ */ O({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (l, s) => (t(), n("span", {
      class: P(["detail-label"]),
      style: tt({ minWidth: e.minWidth })
    }, [
      q(l.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), As = /* @__PURE__ */ T(Ts, [["__scopeId", "data-v-75e9eeb8"]]), Ws = /* @__PURE__ */ O({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (l, s) => (t(), n("span", {
      class: P(["detail-value", e.variant, { mono: e.mono, truncate: e.truncate }])
    }, [
      q(l.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Oe = /* @__PURE__ */ T(Ws, [["__scopeId", "data-v-2f186e4c"]]), Fs = { class: "detail-row" }, Gs = /* @__PURE__ */ O({
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
    return (l, s) => (t(), n("div", Fs, [
      i(As, { "min-width": e.labelMinWidth }, {
        default: a(() => [
          f(c(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (t(), y(Oe, {
        key: 0,
        mono: e.mono,
        variant: e.valueVariant,
        truncate: e.truncate
      }, {
        default: a(() => [
          f(c(e.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : q(l.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), ee = /* @__PURE__ */ T(Gs, [["__scopeId", "data-v-ef15664a"]]), Ps = /* @__PURE__ */ O({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(e) {
    return (l, s) => (t(), n("div", {
      class: P(["summary-bar", e.variant])
    }, [
      q(l.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Ie = /* @__PURE__ */ T(Ps, [["__scopeId", "data-v-ccb7816e"]]), Hs = { class: "popover-header" }, Ks = { class: "popover-title" }, js = { class: "popover-content" }, qs = {
  key: 0,
  class: "popover-actions"
}, Ys = /* @__PURE__ */ O({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(e) {
    return (l, s) => (t(), y(lt, { to: "body" }, [
      e.show ? (t(), n("div", {
        key: 0,
        class: "popover-overlay",
        onClick: s[2] || (s[2] = (r) => l.$emit("close"))
      }, [
        o("div", {
          class: "popover",
          style: tt({ maxWidth: e.maxWidth }),
          onClick: s[1] || (s[1] = Ee(() => {
          }, ["stop"]))
        }, [
          o("div", Hs, [
            o("h4", Ks, c(e.title), 1),
            o("button", {
              class: "popover-close",
              onClick: s[0] || (s[0] = (r) => l.$emit("close"))
            }, "✕")
          ]),
          o("div", js, [
            q(l.$slots, "content", {}, void 0, !0)
          ]),
          l.$slots.actions ? (t(), n("div", qs, [
            q(l.$slots, "actions", {}, void 0, !0)
          ])) : d("", !0)
        ], 4)
      ])) : d("", !0)
    ]));
  }
}), Le = /* @__PURE__ */ T(Ys, [["__scopeId", "data-v-057df510"]]), Js = /* @__PURE__ */ O({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: l }) {
    const s = l, { getEnvironmentModels: r, getStatus: u } = ue(), x = R([]), h = R([]), b = R("production"), m = R(!1), k = R(null), U = R(""), _ = R(!1);
    function B() {
      _.value = !1, s("navigate", "model-index");
    }
    const F = V(
      () => x.value.reduce((v, E) => v + (E.size_mb || E.size || 0), 0)
    ), J = V(() => {
      if (!U.value.trim()) return x.value;
      const v = U.value.toLowerCase();
      return x.value.filter((E) => E.filename.toLowerCase().includes(v));
    }), G = V(() => {
      if (!U.value.trim()) return h.value;
      const v = U.value.toLowerCase();
      return h.value.filter((E) => E.filename.toLowerCase().includes(v));
    }), D = V(
      () => J.value.filter((v) => v.type === "checkpoints" || v.category === "checkpoints")
    ), S = V(
      () => J.value.filter((v) => v.type === "loras" || v.category === "loras")
    ), N = V(
      () => J.value.filter(
        (v) => v.type !== "checkpoints" && v.category !== "checkpoints" && v.type !== "loras" && v.category !== "loras"
      )
    );
    function X(v) {
      return v ? v >= 1024 ? `${(v / 1024).toFixed(1)} GB` : `${v.toFixed(0)} MB` : "Unknown";
    }
    function I(v) {
      s("navigate", "model-index");
    }
    function $(v) {
      s("navigate", "model-index");
    }
    function p(v) {
      alert(`Download functionality not yet implemented for ${v}`);
    }
    async function w() {
      m.value = !0, k.value = null;
      try {
        const v = await r();
        x.value = v, h.value = [];
        const E = await u();
        b.value = E.environment || "production";
      } catch (v) {
        k.value = v instanceof Error ? v.message : "Failed to load models";
      } finally {
        m.value = !1;
      }
    }
    return ne(w), (v, E) => (t(), n(W, null, [
      i(fe, null, {
        header: a(() => [
          i(ve, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: E[0] || (E[0] = (M) => _.value = !0)
          })
        ]),
        search: a(() => [
          i(ze, {
            modelValue: U.value,
            "onUpdate:modelValue": E[1] || (E[1] = (M) => U.value = M),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          m.value ? (t(), y(we, {
            key: 0,
            message: "Loading environment models..."
          })) : k.value ? (t(), y(ke, {
            key: 1,
            message: k.value,
            retry: !0,
            onRetry: w
          }, null, 8, ["message"])) : (t(), n(W, { key: 2 }, [
            x.value.length ? (t(), y(Ie, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                f(" Total: " + c(x.value.length) + " models • " + c(X(F.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : d("", !0),
            D.value.length ? (t(), y(oe, {
              key: 1,
              title: "CHECKPOINTS",
              count: D.value.length
            }, {
              default: a(() => [
                (t(!0), n(W, null, Y(D.value, (M) => (t(), y(le, {
                  key: M.sha256 || M.hash || M.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...E[3] || (E[3] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(c(M.filename), 1)
                  ]),
                  subtitle: a(() => [
                    f(c(X(M.size_mb || M.size)), 1)
                  ]),
                  details: a(() => [
                    i(ee, {
                      label: "Used by:",
                      value: (M.used_by || M.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    i(ee, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: a(() => [
                    i(A, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (se) => I(M.sha256 || M.sha256_hash || M.hash || "")
                    }, {
                      default: a(() => [...E[4] || (E[4] = [
                        f(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            S.value.length ? (t(), y(oe, {
              key: 2,
              title: "LORAS",
              count: S.value.length
            }, {
              default: a(() => [
                (t(!0), n(W, null, Y(S.value, (M) => (t(), y(le, {
                  key: M.sha256 || M.hash || M.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...E[5] || (E[5] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(c(M.filename), 1)
                  ]),
                  subtitle: a(() => [
                    f(c(X(M.size_mb || M.size)), 1)
                  ]),
                  details: a(() => [
                    i(ee, {
                      label: "Used by:",
                      value: (M.used_by || M.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    i(ee, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: a(() => [
                    i(A, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (se) => I(M.sha256 || M.sha256_hash || M.hash || "")
                    }, {
                      default: a(() => [...E[6] || (E[6] = [
                        f(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            N.value.length ? (t(), y(oe, {
              key: 3,
              title: "OTHER",
              count: N.value.length
            }, {
              default: a(() => [
                (t(!0), n(W, null, Y(N.value, (M) => (t(), y(le, {
                  key: M.sha256 || M.hash || M.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...E[7] || (E[7] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(c(M.filename), 1)
                  ]),
                  subtitle: a(() => [
                    f(c(X(M.size_mb || M.size)), 1)
                  ]),
                  details: a(() => [
                    i(ee, {
                      label: "Type:",
                      value: M.type
                    }, null, 8, ["value"]),
                    i(ee, {
                      label: "Used by:",
                      value: (M.used_by || M.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    i(A, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (se) => I(M.sha256 || M.sha256_hash || M.hash || "")
                    }, {
                      default: a(() => [...E[8] || (E[8] = [
                        f(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            G.value.length ? (t(), y(oe, {
              key: 4,
              title: "MISSING",
              count: G.value.length
            }, {
              default: a(() => [
                (t(!0), n(W, null, Y(G.value, (M) => (t(), y(le, {
                  key: M.filename,
                  status: "broken"
                }, {
                  icon: a(() => [...E[9] || (E[9] = [
                    f("⚠", -1)
                  ])]),
                  title: a(() => [
                    f(c(M.filename), 1)
                  ]),
                  subtitle: a(() => [...E[10] || (E[10] = [
                    o("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: a(() => {
                    var se;
                    return [
                      i(ee, {
                        label: "Required by:",
                        value: ((se = M.workflow_names) == null ? void 0 : se.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: a(() => [
                    i(A, {
                      variant: "primary",
                      size: "sm",
                      onClick: (se) => p(M.filename)
                    }, {
                      default: a(() => [...E[11] || (E[11] = [
                        f(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    i(A, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => $(M.filename)
                    }, {
                      default: a(() => [...E[12] || (E[12] = [
                        f(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            !J.value.length && !G.value.length ? (t(), y(de, {
              key: 5,
              icon: "📭",
              message: U.value ? `No models match '${U.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : d("", !0)
          ], 64))
        ]),
        _: 1
      }),
      i(Le, {
        show: _.value,
        title: "About Environment Models",
        onClose: E[2] || (E[2] = (M) => _.value = !1)
      }, {
        content: a(() => [
          o("p", null, [
            E[13] || (E[13] = f(" These are models currently used by workflows in ", -1)),
            o("strong", null, '"' + c(b.value) + '"', 1),
            E[14] || (E[14] = f(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: a(() => [
          i(A, {
            variant: "primary",
            onClick: B
          }, {
            default: a(() => [...E[15] || (E[15] = [
              f(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Xs = /* @__PURE__ */ T(Js, [["__scopeId", "data-v-865641a4"]]), Zs = /* @__PURE__ */ O({
  __name: "ModelIndexSection",
  setup(e) {
    const { getWorkspaceModels: l } = ue(), s = R([]), r = R(!1), u = R(null), x = R(""), h = R(!1), b = V(
      () => s.value.reduce((p, w) => p + (w.size_mb || w.size || 0), 0)
    ), m = V(() => {
      const p = /* @__PURE__ */ new Set();
      return s.value.forEach((w) => {
        w.used_in_environments && w.used_in_environments.length > 0 && w.used_in_environments.forEach((v) => p.add(v.env_name));
      }), p.size;
    }), k = V(() => {
      if (!x.value.trim()) return s.value;
      const p = x.value.toLowerCase();
      return s.value.filter((w) => {
        const v = w, E = w.sha256 || v.sha256_hash || "";
        return w.filename.toLowerCase().includes(p) || E.toLowerCase().includes(p);
      });
    }), U = V(
      () => k.value.filter((p) => p.type === "checkpoints")
    ), _ = V(
      () => k.value.filter((p) => p.type === "loras")
    ), B = V(
      () => k.value.filter((p) => p.type !== "checkpoints" && p.type !== "loras")
    );
    function F(p) {
      return p ? p >= 1024 ? `${(p / 1024).toFixed(1)} GB` : `${p.toFixed(0)} MB` : "Unknown";
    }
    function J(p) {
      const w = p, v = p.used_in_workflows || w.used_by || [];
      return !v || v.length === 0 ? "Not used" : `${v.length} workflow(s)`;
    }
    function G(p) {
      navigator.clipboard.writeText(p), alert("Hash copied to clipboard");
    }
    function D(p) {
      prompt("Enter model source URL:", p.source_url || "") !== null && alert("URL update not yet implemented");
    }
    function S(p) {
      const w = p, v = p.used_in_workflows || w.used_by || [], E = v && v.length > 0 ? `

⚠ WARNING: This model is used by ${v.length} workflow(s):
${v.join(", ")}

Deleting will break these workflows!` : "";
      confirm(
        `Delete ${p.filename}?${E}

This will free ${F(w.size_mb || p.size)} of space.`
      ) && alert("Model deletion not yet implemented");
    }
    function N() {
      alert("Scan for models not yet implemented");
    }
    function X() {
      alert("Change directory not yet implemented");
    }
    function I() {
      alert("Download new model not yet implemented");
    }
    async function $() {
      r.value = !0, u.value = null;
      try {
        s.value = await l(), console.log("Loaded models:", s.value), console.log("Filtered checkpoints:", U.value), console.log("Filtered loras:", _.value), console.log("Filtered other:", B.value);
      } catch (p) {
        u.value = p instanceof Error ? p.message : "Failed to load workspace models";
      } finally {
        r.value = !1;
      }
    }
    return ne($), (p, w) => (t(), n(W, null, [
      i(fe, null, {
        header: a(() => [
          i(ve, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: w[0] || (w[0] = (v) => h.value = !0)
          }, {
            actions: a(() => [
              i(A, {
                variant: "primary",
                size: "sm",
                onClick: N
              }, {
                default: a(() => [...w[3] || (w[3] = [
                  f(" Scan for Models ", -1)
                ])]),
                _: 1
              }),
              i(A, {
                variant: "primary",
                size: "sm",
                onClick: X
              }, {
                default: a(() => [...w[4] || (w[4] = [
                  f(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              i(A, {
                variant: "primary",
                size: "sm",
                onClick: I
              }, {
                default: a(() => [...w[5] || (w[5] = [
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
        search: a(() => [
          i(ze, {
            modelValue: x.value,
            "onUpdate:modelValue": w[1] || (w[1] = (v) => x.value = v),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          r.value ? (t(), y(we, {
            key: 0,
            message: "Loading workspace models..."
          })) : u.value ? (t(), y(ke, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: $
          }, null, 8, ["message"])) : (t(), n(W, { key: 2 }, [
            s.value.length ? (t(), y(Ie, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                f(" Total: " + c(s.value.length) + " models • " + c(F(b.value)) + " • Used in " + c(m.value) + " environments ", 1)
              ]),
              _: 1
            })) : d("", !0),
            U.value.length ? (t(), y(oe, {
              key: 1,
              title: "CHECKPOINTS",
              count: U.value.length
            }, {
              default: a(() => [
                (t(!0), n(W, null, Y(U.value, (v) => (t(), y(le, {
                  key: v.sha256 || v.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...w[6] || (w[6] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(c(v.filename), 1)
                  ]),
                  subtitle: a(() => [
                    f(c(F(v.size_mb || v.size)), 1)
                  ]),
                  details: a(() => {
                    var E, M;
                    return [
                      v.sha256 || v.sha256_hash ? (t(), y(ee, {
                        key: 0,
                        label: "SHA256:",
                        value: (v.sha256 || v.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : d("", !0),
                      i(ee, {
                        label: "Used in:",
                        value: J(v)
                      }, null, 8, ["value"]),
                      v.source_url || (E = v.sources) != null && E[0] ? (t(), y(ee, {
                        key: 1,
                        label: "Source URL:",
                        value: v.source_url || ((M = v.sources) == null ? void 0 : M[0])
                      }, null, 8, ["value"])) : (t(), y(ee, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: a(() => [...w[7] || (w[7] = [
                          f("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: a(() => [
                    i(A, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (E) => D(v)
                    }, {
                      default: a(() => [...w[8] || (w[8] = [
                        f(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    v.sha256 || v.sha256_hash ? (t(), y(A, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (E) => G(v.sha256 || v.sha256_hash)
                    }, {
                      default: a(() => [...w[9] || (w[9] = [
                        f(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0),
                    i(A, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (E) => S(v)
                    }, {
                      default: a(() => [...w[10] || (w[10] = [
                        f(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            _.value.length ? (t(), y(oe, {
              key: 2,
              title: "LORAS",
              count: _.value.length
            }, {
              default: a(() => [
                (t(!0), n(W, null, Y(_.value, (v) => (t(), y(le, {
                  key: v.sha256 || v.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...w[11] || (w[11] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(c(v.filename), 1)
                  ]),
                  subtitle: a(() => [
                    f(c(F(v.size_mb || v.size)), 1)
                  ]),
                  details: a(() => {
                    var E, M;
                    return [
                      v.sha256 || v.sha256_hash ? (t(), y(ee, {
                        key: 0,
                        label: "SHA256:",
                        value: (v.sha256 || v.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : d("", !0),
                      i(ee, {
                        label: "Used in:",
                        value: J(v)
                      }, null, 8, ["value"]),
                      v.source_url || (E = v.sources) != null && E[0] ? (t(), y(ee, {
                        key: 1,
                        label: "Source URL:",
                        value: v.source_url || ((M = v.sources) == null ? void 0 : M[0])
                      }, null, 8, ["value"])) : (t(), y(ee, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: a(() => [...w[12] || (w[12] = [
                          f("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: a(() => [
                    i(A, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (E) => D(v)
                    }, {
                      default: a(() => [...w[13] || (w[13] = [
                        f(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    v.sha256 || v.sha256_hash ? (t(), y(A, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (E) => G(v.sha256 || v.sha256_hash)
                    }, {
                      default: a(() => [...w[14] || (w[14] = [
                        f(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0),
                    i(A, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (E) => S(v)
                    }, {
                      default: a(() => [...w[15] || (w[15] = [
                        f(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            B.value.length ? (t(), y(oe, {
              key: 3,
              title: "OTHER",
              count: B.value.length
            }, {
              default: a(() => [
                (t(!0), n(W, null, Y(B.value, (v) => (t(), y(le, {
                  key: v.sha256 || v.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...w[16] || (w[16] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(c(v.filename), 1)
                  ]),
                  subtitle: a(() => [
                    f(c(F(v.size_mb || v.size)), 1)
                  ]),
                  details: a(() => [
                    i(ee, {
                      label: "Type:",
                      value: v.type
                    }, null, 8, ["value"]),
                    v.sha256 || v.sha256_hash ? (t(), y(ee, {
                      key: 0,
                      label: "SHA256:",
                      value: (v.sha256 || v.sha256_hash).substring(0, 16) + "...",
                      mono: !0,
                      "value-variant": "hash"
                    }, null, 8, ["value"])) : d("", !0),
                    i(ee, {
                      label: "Used in:",
                      value: J(v)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    i(A, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (E) => D(v)
                    }, {
                      default: a(() => [...w[17] || (w[17] = [
                        f(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    v.sha256 || v.sha256_hash ? (t(), y(A, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (E) => G(v.sha256 || v.sha256_hash)
                    }, {
                      default: a(() => [...w[18] || (w[18] = [
                        f(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0),
                    i(A, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (E) => S(v)
                    }, {
                      default: a(() => [...w[19] || (w[19] = [
                        f(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            k.value.length ? d("", !0) : (t(), y(de, {
              key: 4,
              icon: "📭",
              message: x.value ? `No models match '${x.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      i(Le, {
        show: h.value,
        title: "About Workspace Model Index",
        onClose: w[2] || (w[2] = (v) => h.value = !1)
      }, {
        content: a(() => [...w[20] || (w[20] = [
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
}), Qs = /* @__PURE__ */ T(Zs, [["__scopeId", "data-v-5a24af01"]]), en = { key: 0 }, tn = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, on = {
  key: 2,
  style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" }
}, an = /* @__PURE__ */ O({
  __name: "NodesSection",
  setup(e) {
    const { getNodes: l, installNode: s, updateNode: r, uninstallNode: u } = ue(), x = R({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0
    }), h = R(!1), b = R(null), m = R(""), k = R(!1), U = V(() => {
      if (!m.value.trim()) return x.value.nodes;
      const I = m.value.toLowerCase();
      return x.value.nodes.filter(
        ($) => {
          var p, w;
          return $.name.toLowerCase().includes(I) || ((p = $.description) == null ? void 0 : p.toLowerCase().includes(I)) || ((w = $.repository) == null ? void 0 : w.toLowerCase().includes(I));
        }
      );
    }), _ = V(
      () => U.value.filter((I) => I.installed)
    ), B = V(
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
    function J(I) {
      return !I.used_in_workflows || I.used_in_workflows.length === 0 ? "Not used in any workflows" : I.used_in_workflows.length === 1 ? I.used_in_workflows[0] : `${I.used_in_workflows.length} workflows`;
    }
    function G(I) {
      window.open(I, "_blank");
    }
    async function D(I) {
      if (confirm(`Install node "${I}"?

This will download and install the node from its repository.`))
        try {
          h.value = !0;
          const $ = await s(I);
          $.status === "success" ? (alert(`Node "${I}" installed successfully!`), await X()) : alert(`Failed to install node: ${$.message || "Unknown error"}`);
        } catch ($) {
          alert(`Error installing node: ${$ instanceof Error ? $.message : "Unknown error"}`);
        } finally {
          h.value = !1;
        }
    }
    async function S(I) {
      if (confirm(`Check for updates for "${I}"?`))
        try {
          h.value = !0;
          const $ = await r(I);
          $.status === "success" ? (alert(`Node "${I}" is up to date or has been updated!`), await X()) : alert(`Update check failed: ${$.message || "Unknown error"}`);
        } catch ($) {
          alert(`Error checking for updates: ${$ instanceof Error ? $.message : "Unknown error"}`);
        } finally {
          h.value = !1;
        }
    }
    async function N(I) {
      if (confirm(`Uninstall node "${I}"?

This will remove the node from this environment.`))
        try {
          h.value = !0;
          const $ = await u(I);
          $.status === "success" ? (alert(`Node "${I}" uninstalled successfully!`), await X()) : alert(`Failed to uninstall node: ${$.message || "Unknown error"}`);
        } catch ($) {
          alert(`Error uninstalling node: ${$ instanceof Error ? $.message : "Unknown error"}`);
        } finally {
          h.value = !1;
        }
    }
    async function X() {
      h.value = !0, b.value = null;
      try {
        x.value = await l();
      } catch (I) {
        b.value = I instanceof Error ? I.message : "Failed to load nodes";
      } finally {
        h.value = !1;
      }
    }
    return ne(X), (I, $) => (t(), n(W, null, [
      i(fe, null, {
        header: a(() => [
          i(ve, {
            title: "NODES (GIT-TRACKED)",
            "show-info": !0,
            onInfoClick: $[0] || ($[0] = (p) => k.value = !0)
          })
        ]),
        search: a(() => [
          i(ze, {
            modelValue: m.value,
            "onUpdate:modelValue": $[1] || ($[1] = (p) => m.value = p),
            placeholder: "🔍 Search git-tracked custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          h.value ? (t(), y(we, {
            key: 0,
            message: "Loading git-tracked nodes..."
          })) : b.value ? (t(), y(ke, {
            key: 1,
            message: b.value,
            retry: !0,
            onRetry: X
          }, null, 8, ["message"])) : (t(), n(W, { key: 2 }, [
            x.value.total_count ? (t(), y(Ie, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                f(" Total: " + c(x.value.total_count) + " nodes • " + c(x.value.installed_count) + " installed • " + c(x.value.missing_count) + " missing ", 1)
              ]),
              _: 1
            })) : d("", !0),
            _.value.length ? (t(), y(oe, {
              key: 1,
              title: "INSTALLED",
              count: _.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: a(() => [
                (t(!0), n(W, null, Y(_.value, (p) => (t(), y(le, {
                  key: p.name,
                  status: "synced"
                }, {
                  icon: a(() => [...$[4] || ($[4] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(c(p.name), 1)
                  ]),
                  subtitle: a(() => [
                    p.version ? (t(), n("span", en, "v" + c(p.version), 1)) : (t(), n("span", tn, "version unknown")),
                    p.source ? (t(), n("span", on, " • " + c(F(p.source)), 1)) : d("", !0)
                  ]),
                  details: a(() => [
                    p.description ? (t(), y(ee, {
                      key: 0,
                      label: "Description:",
                      value: p.description
                    }, null, 8, ["value"])) : d("", !0),
                    p.repository ? (t(), y(ee, {
                      key: 1,
                      label: "Repository:",
                      value: p.repository
                    }, null, 8, ["value"])) : d("", !0),
                    i(ee, {
                      label: "Used by:",
                      value: J(p)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    p.repository ? (t(), y(A, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (w) => G(p.repository)
                    }, {
                      default: a(() => [...$[5] || ($[5] = [
                        f(" View Repository ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0),
                    p.source === "registry" ? (t(), y(A, {
                      key: 1,
                      variant: "secondary",
                      size: "xs",
                      onClick: (w) => S(p.name)
                    }, {
                      default: a(() => [...$[6] || ($[6] = [
                        f(" Check for Updates ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0),
                    p.source !== "unknown" ? (t(), y(A, {
                      key: 2,
                      variant: "destructive",
                      size: "xs",
                      onClick: (w) => N(p.name)
                    }, {
                      default: a(() => [...$[7] || ($[7] = [
                        f(" Uninstall ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            B.value.length ? (t(), y(oe, {
              key: 2,
              title: "MISSING",
              count: B.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: a(() => [
                (t(!0), n(W, null, Y(B.value, (p) => (t(), y(le, {
                  key: p.name,
                  status: "missing"
                }, {
                  icon: a(() => [...$[8] || ($[8] = [
                    f("⚠", -1)
                  ])]),
                  title: a(() => [
                    f(c(p.name), 1)
                  ]),
                  subtitle: a(() => [...$[9] || ($[9] = [
                    o("span", { style: { color: "var(--cg-color-warning)" } }, "Not installed", -1)
                  ])]),
                  details: a(() => [
                    p.description ? (t(), y(ee, {
                      key: 0,
                      label: "Description:",
                      value: p.description
                    }, null, 8, ["value"])) : d("", !0),
                    p.repository ? (t(), y(ee, {
                      key: 1,
                      label: "Repository:",
                      value: p.repository
                    }, null, 8, ["value"])) : d("", !0),
                    i(ee, {
                      label: "Required by:",
                      value: J(p)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    p.download_url ? (t(), y(A, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (w) => D(p.name)
                    }, {
                      default: a(() => [...$[10] || ($[10] = [
                        f(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0),
                    p.repository ? (t(), y(A, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (w) => G(p.repository)
                    }, {
                      default: a(() => [...$[11] || ($[11] = [
                        f(" View Repository ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            !_.value.length && !B.value.length ? (t(), y(de, {
              key: 3,
              icon: "📭",
              message: m.value ? `No nodes match '${m.value}'` : "No git-tracked nodes found."
            }, null, 8, ["message"])) : d("", !0)
          ], 64))
        ]),
        _: 1
      }),
      i(Le, {
        show: k.value,
        title: "About Git-Tracked Nodes",
        onClose: $[3] || ($[3] = (p) => k.value = !1)
      }, {
        content: a(() => [...$[12] || ($[12] = [
          o("p", null, " These are custom nodes tracked in your git repository. They are version-controlled and synced across environments. ", -1),
          o("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            o("strong", null, "Installed:"),
            f(" Nodes currently available in this environment"),
            o("br"),
            o("strong", null, "Missing:"),
            f(" Nodes referenced in workflows but not yet installed ")
          ], -1)
        ])]),
        actions: a(() => [
          i(A, {
            variant: "primary",
            onClick: $[2] || ($[2] = (p) => k.value = !1)
          }, {
            default: a(() => [...$[13] || ($[13] = [
              f(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), sn = /* @__PURE__ */ T(an, [["__scopeId", "data-v-c480e2c1"]]), nn = { class: "remote-url-display" }, ln = ["title"], rn = ["title"], cn = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, dn = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, un = /* @__PURE__ */ O({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(e) {
    const l = e, s = R(!1), r = V(() => {
      if (l.url.length <= l.maxLength)
        return l.url;
      const x = l.url.slice(0, Math.floor(l.maxLength * 0.6)), h = l.url.slice(-Math.floor(l.maxLength * 0.3));
      return `${x}...${h}`;
    });
    async function u() {
      try {
        await navigator.clipboard.writeText(l.url), s.value = !0, setTimeout(() => {
          s.value = !1;
        }, 2e3);
      } catch (x) {
        console.error("Failed to copy URL:", x);
      }
    }
    return (x, h) => (t(), n("div", nn, [
      o("span", {
        class: "url-text",
        title: e.url
      }, c(r.value), 9, ln),
      o("button", {
        class: P(["copy-btn", { copied: s.value }]),
        onClick: u,
        title: s.value ? "Copied!" : "Copy URL"
      }, [
        s.value ? (t(), n("svg", dn, [...h[1] || (h[1] = [
          o("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (t(), n("svg", cn, [...h[0] || (h[0] = [
          o("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          o("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, rn)
    ]));
  }
}), nt = /* @__PURE__ */ T(un, [["__scopeId", "data-v-7768a58d"]]), mn = { class: "remote-title" }, fn = {
  key: 0,
  class: "default-badge"
}, vn = {
  key: 1,
  class: "sync-badge"
}, gn = {
  key: 0,
  class: "ahead"
}, hn = {
  key: 1,
  class: "behind"
}, pn = {
  key: 0,
  class: "tracking-info"
}, yn = /* @__PURE__ */ O({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    trackingBranch: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove"],
  setup(e, { emit: l }) {
    const s = e, r = V(() => s.fetchingRemote === s.remote.name), u = V(() => s.remote.is_default), x = V(() => !!s.trackingBranch);
    function h(b) {
      const m = new Date(b), U = (/* @__PURE__ */ new Date()).getTime() - m.getTime(), _ = Math.floor(U / 6e4);
      if (_ < 1) return "Just now";
      if (_ < 60) return `${_}m ago`;
      const B = Math.floor(_ / 60);
      if (B < 24) return `${B}h ago`;
      const F = Math.floor(B / 24);
      return F < 7 ? `${F}d ago` : m.toLocaleDateString();
    }
    return (b, m) => (t(), y(le, {
      status: u.value ? "synced" : void 0
    }, {
      icon: a(() => [
        f(c(u.value ? "🔗" : "🌐"), 1)
      ]),
      title: a(() => [
        o("div", mn, [
          o("span", null, c(e.remote.name), 1),
          u.value ? (t(), n("span", fn, "DEFAULT")) : d("", !0),
          e.syncStatus ? (t(), n("span", vn, [
            e.syncStatus.ahead > 0 ? (t(), n("span", gn, "↑" + c(e.syncStatus.ahead), 1)) : d("", !0),
            e.syncStatus.behind > 0 ? (t(), n("span", hn, "↓" + c(e.syncStatus.behind), 1)) : d("", !0)
          ])) : d("", !0)
        ])
      ]),
      subtitle: a(() => [
        x.value ? (t(), n("span", pn, " Tracking: " + c(e.trackingBranch), 1)) : d("", !0)
      ]),
      details: a(() => {
        var k;
        return [
          i(ee, { label: "Fetch:" }, {
            default: a(() => [
              i(nt, {
                url: e.remote.fetch_url
              }, null, 8, ["url"])
            ]),
            _: 1
          }),
          e.remote.push_url !== e.remote.fetch_url ? (t(), y(ee, {
            key: 0,
            label: "Push:"
          }, {
            default: a(() => [
              i(nt, {
                url: e.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : d("", !0),
          (k = e.syncStatus) != null && k.last_fetch ? (t(), y(ee, {
            key: 1,
            label: "Last Fetch:"
          }, {
            default: a(() => [
              o("span", null, c(h(e.syncStatus.last_fetch)), 1)
            ]),
            _: 1
          })) : d("", !0)
        ];
      }),
      actions: a(() => [
        i(A, {
          variant: "primary",
          size: "xs",
          loading: r.value,
          onClick: m[0] || (m[0] = (k) => b.$emit("fetch", e.remote.name))
        }, {
          default: a(() => [...m[3] || (m[3] = [
            f(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        i(A, {
          variant: "secondary",
          size: "xs",
          onClick: m[1] || (m[1] = (k) => b.$emit("edit", e.remote.name))
        }, {
          default: a(() => [...m[4] || (m[4] = [
            f(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        u.value ? d("", !0) : (t(), y(A, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: m[2] || (m[2] = (k) => b.$emit("remove", e.remote.name))
        }, {
          default: a(() => [...m[5] || (m[5] = [
            f(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["status"]));
  }
}), bn = /* @__PURE__ */ T(yn, [["__scopeId", "data-v-17362e45"]]), wn = ["for"], kn = {
  key: 0,
  class: "base-form-field-required"
}, _n = { class: "base-form-field-input" }, $n = {
  key: 1,
  class: "base-form-field-error"
}, xn = {
  key: 2,
  class: "base-form-field-hint"
}, Cn = /* @__PURE__ */ O({
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
    const l = e, s = V(() => l.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (r, u) => (t(), n("div", {
      class: P(["base-form-field", { "full-width": e.fullWidth }])
    }, [
      e.label ? (t(), n("label", {
        key: 0,
        for: s.value,
        class: "base-form-field-label"
      }, [
        f(c(e.label) + " ", 1),
        e.required ? (t(), n("span", kn, "*")) : d("", !0)
      ], 8, wn)) : d("", !0),
      o("div", _n, [
        q(r.$slots, "default", {}, void 0, !0)
      ]),
      e.error ? (t(), n("span", $n, c(e.error), 1)) : e.hint ? (t(), n("span", xn, c(e.hint), 1)) : d("", !0)
    ], 2));
  }
}), Je = /* @__PURE__ */ T(Cn, [["__scopeId", "data-v-9a1cf296"]]), In = ["type", "value", "placeholder", "disabled"], Sn = {
  key: 0,
  class: "base-input-error"
}, En = /* @__PURE__ */ O({
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
      class: P(["base-input-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      o("input", {
        type: e.type,
        value: e.modelValue,
        placeholder: e.placeholder,
        disabled: e.disabled,
        class: P(["base-input", { error: !!e.error }]),
        onInput: s[0] || (s[0] = (r) => l.$emit("update:modelValue", r.target.value)),
        onKeyup: [
          s[1] || (s[1] = Ce((r) => l.$emit("enter"), ["enter"])),
          s[2] || (s[2] = Ce((r) => l.$emit("escape"), ["escape"]))
        ]
      }, null, 42, In),
      e.error ? (t(), n("span", Sn, c(e.error), 1)) : d("", !0)
    ], 2));
  }
}), Xe = /* @__PURE__ */ T(En, [["__scopeId", "data-v-9ba02cdc"]]), Ln = { class: "remote-form" }, Rn = { class: "form-header" }, Un = { class: "form-body" }, zn = {
  key: 0,
  class: "form-error"
}, Nn = { class: "form-actions" }, Mn = /* @__PURE__ */ O({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(e, { emit: l }) {
    const s = e, r = l, u = R({
      name: s.remoteName,
      fetchUrl: s.fetchUrl,
      pushUrl: s.pushUrl
    }), x = R(!1), h = R(null);
    yt(() => [s.remoteName, s.fetchUrl, s.pushUrl], () => {
      u.value = {
        name: s.remoteName,
        fetchUrl: s.fetchUrl,
        pushUrl: s.pushUrl
      };
    });
    const b = V(() => u.value.name.trim() !== "" && u.value.fetchUrl.trim() !== "");
    async function m() {
      if (!(!b.value || x.value)) {
        h.value = null, x.value = !0;
        try {
          r("submit", u.value);
        } catch (k) {
          h.value = k instanceof Error ? k.message : "Failed to submit form";
        } finally {
          x.value = !1;
        }
      }
    }
    return (k, U) => (t(), n("div", Ln, [
      o("div", Rn, [
        i(Te, null, {
          default: a(() => [
            f(c(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      o("div", Un, [
        i(Je, {
          label: "Remote Name",
          required: ""
        }, {
          default: a(() => [
            i(Xe, {
              modelValue: u.value.name,
              "onUpdate:modelValue": U[0] || (U[0] = (_) => u.value.name = _),
              disabled: e.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        i(Je, {
          label: "Fetch URL",
          required: ""
        }, {
          default: a(() => [
            i(Xe, {
              modelValue: u.value.fetchUrl,
              "onUpdate:modelValue": U[1] || (U[1] = (_) => u.value.fetchUrl = _),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        i(Je, { label: "Push URL (optional)" }, {
          default: a(() => [
            i(Xe, {
              modelValue: u.value.pushUrl,
              "onUpdate:modelValue": U[2] || (U[2] = (_) => u.value.pushUrl = _),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        h.value ? (t(), n("div", zn, c(h.value), 1)) : d("", !0)
      ]),
      o("div", Nn, [
        i(A, {
          variant: "primary",
          size: "md",
          disabled: !b.value,
          loading: x.value,
          onClick: m
        }, {
          default: a(() => [
            f(c(e.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        i(A, {
          variant: "ghost",
          size: "md",
          onClick: U[3] || (U[3] = (_) => k.$emit("cancel"))
        }, {
          default: a(() => [...U[4] || (U[4] = [
            f(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Dn = /* @__PURE__ */ T(Mn, [["__scopeId", "data-v-56021b18"]]), Vn = { key: 0 }, Bn = /* @__PURE__ */ O({
  __name: "RemotesSection",
  setup(e) {
    const {
      getRemotes: l,
      addRemote: s,
      removeRemote: r,
      updateRemoteUrl: u,
      fetchRemote: x,
      getRemoteSyncStatus: h
    } = ue(), b = R([]), m = R(null), k = R({}), U = R(!1), _ = R(null), B = R(""), F = R(!1), J = R(null), G = R(!1), D = R("add"), S = R({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), N = V(() => {
      if (!B.value.trim()) return b.value;
      const z = B.value.toLowerCase();
      return b.value.filter(
        (L) => L.name.toLowerCase().includes(z) || L.fetch_url.toLowerCase().includes(z) || L.push_url.toLowerCase().includes(z)
      );
    });
    function X(z) {
      var L;
      return ((L = m.value) == null ? void 0 : L.remote) === z;
    }
    async function I() {
      U.value = !0, _.value = null;
      try {
        const z = await l();
        b.value = z.remotes, m.value = z.current_branch_tracking || null, await Promise.all(
          z.remotes.map(async (L) => {
            const H = await h(L.name);
            H && (k.value[L.name] = H);
          })
        );
      } catch (z) {
        _.value = z instanceof Error ? z.message : "Failed to load remotes";
      } finally {
        U.value = !1;
      }
    }
    function $() {
      D.value = "add", S.value = { name: "", fetchUrl: "", pushUrl: "" }, G.value = !0;
    }
    function p(z) {
      const L = b.value.find((H) => H.name === z);
      L && (D.value = "edit", S.value = {
        name: L.name,
        fetchUrl: L.fetch_url,
        pushUrl: L.push_url
      }, G.value = !0);
    }
    async function w(z) {
      try {
        D.value === "add" ? await s(z.name, z.fetchUrl) : await u(z.name, z.fetchUrl, z.pushUrl || void 0), G.value = !1, await I();
      } catch (L) {
        _.value = L instanceof Error ? L.message : "Operation failed";
      }
    }
    function v() {
      G.value = !1, S.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function E(z) {
      J.value = z;
      try {
        await x(z);
        const L = await h(z);
        L && (k.value[z] = L);
      } catch (L) {
        _.value = L instanceof Error ? L.message : "Fetch failed";
      } finally {
        J.value = null;
      }
    }
    async function M(z) {
      if (confirm(`Remove remote "${z}"?`))
        try {
          await r(z), await I();
        } catch (L) {
          _.value = L instanceof Error ? L.message : "Failed to remove remote";
        }
    }
    function se() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    return ne(I), (z, L) => (t(), n(W, null, [
      i(fe, null, {
        header: a(() => [
          i(ve, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: L[0] || (L[0] = (H) => F.value = !0)
          }, {
            actions: a(() => [
              G.value ? d("", !0) : (t(), y(A, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: $
              }, {
                default: a(() => [...L[3] || (L[3] = [
                  f(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          G.value ? d("", !0) : (t(), y(ze, {
            key: 0,
            modelValue: B.value,
            "onUpdate:modelValue": L[1] || (L[1] = (H) => B.value = H),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: a(() => [
          U.value ? (t(), y(we, {
            key: 0,
            message: "Loading remotes..."
          })) : _.value ? (t(), y(ke, {
            key: 1,
            message: _.value,
            retry: !0,
            onRetry: I
          }, null, 8, ["message"])) : (t(), n(W, { key: 2 }, [
            G.value ? (t(), y(Dn, {
              key: 0,
              mode: D.value,
              "remote-name": S.value.name,
              "fetch-url": S.value.fetchUrl,
              "push-url": S.value.pushUrl,
              onSubmit: w,
              onCancel: v
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : d("", !0),
            b.value.length && !G.value ? (t(), y(Ie, {
              key: 1,
              variant: "compact"
            }, {
              default: a(() => [
                f(" Total: " + c(b.value.length) + " remote" + c(b.value.length !== 1 ? "s" : "") + " ", 1),
                m.value ? (t(), n("span", Vn, " • Tracking: " + c(m.value.remote) + "/" + c(m.value.branch), 1)) : d("", !0)
              ]),
              _: 1
            })) : d("", !0),
            N.value.length && !G.value ? (t(), y(oe, {
              key: 2,
              title: "REMOTES",
              count: N.value.length
            }, {
              default: a(() => [
                (t(!0), n(W, null, Y(N.value, (H) => {
                  var ie;
                  return t(), y(bn, {
                    key: H.name,
                    remote: H,
                    "sync-status": k.value[H.name],
                    "tracking-branch": X(H.name) ? (ie = m.value) == null ? void 0 : ie.branch : void 0,
                    "fetching-remote": J.value,
                    onFetch: E,
                    onEdit: p,
                    onRemove: M
                  }, null, 8, ["remote", "sync-status", "tracking-branch", "fetching-remote"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            !N.value.length && !G.value ? (t(), y(de, {
              key: 3,
              icon: "🌐",
              message: B.value ? `No remotes match '${B.value}'` : "No remotes configured."
            }, {
              actions: a(() => [
                i(A, {
                  variant: "primary",
                  onClick: $
                }, {
                  default: a(() => [...L[4] || (L[4] = [
                    f(" Add Your First Remote ", -1)
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
      i(Le, {
        show: F.value,
        title: "About Git Remotes",
        onClose: L[2] || (L[2] = (H) => F.value = !1)
      }, {
        content: a(() => [...L[5] || (L[5] = [
          o("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          o("p", null, [
            f(" The "),
            o("strong", null, '"origin"'),
            f(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: a(() => [
          i(A, {
            variant: "link",
            onClick: se
          }, {
            default: a(() => [...L[6] || (L[6] = [
              f(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), On = /* @__PURE__ */ T(Bn, [["__scopeId", "data-v-a75719bb"]]), Tn = { class: "setting-info" }, An = { class: "setting-label" }, Wn = {
  key: 0,
  class: "required-marker"
}, Fn = {
  key: 0,
  class: "setting-description"
}, Gn = { class: "setting-control" }, Pn = /* @__PURE__ */ O({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (l, s) => (t(), n("div", {
      class: P(["setting-row", { disabled: e.disabled }])
    }, [
      o("div", Tn, [
        o("div", An, [
          f(c(e.label) + " ", 1),
          e.required ? (t(), n("span", Wn, "*")) : d("", !0)
        ]),
        e.description ? (t(), n("div", Fn, c(e.description), 1)) : d("", !0)
      ]),
      o("div", Gn, [
        q(l.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), te = /* @__PURE__ */ T(Pn, [["__scopeId", "data-v-cb5d236c"]]), Hn = { class: "toggle" }, Kn = ["checked", "disabled"], jn = /* @__PURE__ */ O({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (l, s) => (t(), n("label", Hn, [
      o("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: s[0] || (s[0] = (r) => l.$emit("update:modelValue", r.target.checked)),
        class: "toggle-input"
      }, null, 40, Kn),
      s[1] || (s[1] = o("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), he = /* @__PURE__ */ T(jn, [["__scopeId", "data-v-71c0f550"]]), qn = { class: "settings-section" }, Yn = { class: "settings-section" }, Jn = { class: "settings-section" }, Xn = { class: "settings-section" }, Zn = { class: "settings-section" }, Qn = { class: "settings-section" }, el = /* @__PURE__ */ O({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const l = R(!1), s = R(null), r = R(null), u = R({
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
    }), x = R(null), h = V(() => x.value ? JSON.stringify(u.value) !== JSON.stringify(x.value) : !1), b = [
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
    ], k = [
      { label: "Python 3.11", value: "3.11" },
      { label: "Python 3.10", value: "3.10" },
      { label: "Python 3.9", value: "3.9" }
    ], U = [
      { label: "Comfy (Default)", value: "comfy" },
      { label: "Terminal", value: "terminal" },
      { label: "Dark", value: "dark" }
    ], _ = [
      { label: "25", value: 25 },
      { label: "50", value: 50 },
      { label: "100", value: 100 },
      { label: "200", value: 200 }
    ], B = [
      { label: "1 minute", value: 60 },
      { label: "5 minutes", value: 300 },
      { label: "10 minutes", value: 600 },
      { label: "No cache", value: 0 }
    ];
    async function F() {
      l.value = !0, s.value = null;
      try {
        await new Promise((D) => setTimeout(D, 500)), x.value = JSON.parse(JSON.stringify(u.value));
      } catch (D) {
        s.value = D instanceof Error ? D.message : "Failed to load settings";
      } finally {
        l.value = !1;
      }
    }
    async function J() {
      r.value = null;
      try {
        await new Promise((D) => setTimeout(D, 300)), x.value = JSON.parse(JSON.stringify(u.value)), r.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          r.value = null;
        }, 3e3);
      } catch (D) {
        r.value = {
          type: "error",
          message: D instanceof Error ? D.message : "Failed to save settings"
        };
      }
    }
    function G() {
      x.value && (u.value = JSON.parse(JSON.stringify(x.value)), r.value = null);
    }
    return ne(F), (D, S) => (t(), y(fe, null, {
      header: a(() => [
        i(ve, { title: "WORKSPACE SETTINGS" }, {
          actions: a(() => [
            i(A, {
              variant: "primary",
              size: "sm",
              disabled: !h.value,
              onClick: J
            }, {
              default: a(() => [...S[19] || (S[19] = [
                f(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            h.value ? (t(), y(A, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: G
            }, {
              default: a(() => [...S[20] || (S[20] = [
                f(" Reset ", -1)
              ])]),
              _: 1
            })) : d("", !0)
          ]),
          _: 1
        })
      ]),
      content: a(() => [
        l.value ? (t(), y(we, {
          key: 0,
          message: "Loading workspace settings..."
        })) : s.value ? (t(), y(ke, {
          key: 1,
          message: s.value,
          retry: !0,
          onRetry: F
        }, null, 8, ["message"])) : (t(), n(W, { key: 2 }, [
          i(oe, { title: "GIT CONFIGURATION" }, {
            default: a(() => [
              o("div", qn, [
                i(te, {
                  label: "User Name",
                  description: "Your name for git commits",
                  required: ""
                }, {
                  default: a(() => [
                    i(Be, {
                      modelValue: u.value.git.userName,
                      "onUpdate:modelValue": S[0] || (S[0] = (N) => u.value.git.userName = N),
                      placeholder: "John Doe",
                      style: { minWidth: "250px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                i(te, {
                  label: "User Email",
                  description: "Your email for git commits",
                  required: ""
                }, {
                  default: a(() => [
                    i(Be, {
                      modelValue: u.value.git.userEmail,
                      "onUpdate:modelValue": S[1] || (S[1] = (N) => u.value.git.userEmail = N),
                      placeholder: "john@example.com",
                      style: { minWidth: "250px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                i(te, {
                  label: "Default Branch",
                  description: "Default branch name for new environments"
                }, {
                  default: a(() => [
                    i(Be, {
                      modelValue: u.value.git.defaultBranch,
                      "onUpdate:modelValue": S[2] || (S[2] = (N) => u.value.git.defaultBranch = N),
                      placeholder: "main",
                      style: { minWidth: "150px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                i(te, {
                  label: "Auto Commit",
                  description: "Automatically commit workflow changes"
                }, {
                  default: a(() => [
                    i(he, {
                      modelValue: u.value.git.autoCommit,
                      "onUpdate:modelValue": S[3] || (S[3] = (N) => u.value.git.autoCommit = N)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          i(oe, { title: "WORKSPACE PATHS" }, {
            default: a(() => [
              o("div", Yn, [
                i(te, {
                  label: "Workspace Root",
                  description: "Root directory of this workspace (read-only)"
                }, {
                  default: a(() => [
                    i(Oe, {
                      mono: "",
                      truncate: ""
                    }, {
                      default: a(() => [
                        f(c(u.value.paths.workspaceRoot), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                i(te, {
                  label: "Environments Directory",
                  description: "Where environment folders are stored"
                }, {
                  default: a(() => [
                    i(Oe, {
                      mono: "",
                      truncate: ""
                    }, {
                      default: a(() => [
                        f(c(u.value.paths.environmentsDir), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                i(te, {
                  label: "Models Directory",
                  description: "Where model files are indexed"
                }, {
                  default: a(() => [
                    i(Oe, {
                      mono: "",
                      truncate: ""
                    }, {
                      default: a(() => [
                        f(c(u.value.paths.modelsDir), 1)
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
          i(oe, { title: "MODEL INDEX" }, {
            default: a(() => [
              o("div", Jn, [
                i(te, {
                  label: "Auto-Index Models",
                  description: "Automatically scan and index model files"
                }, {
                  default: a(() => [
                    i(he, {
                      modelValue: u.value.modelIndex.autoIndex,
                      "onUpdate:modelValue": S[4] || (S[4] = (N) => u.value.modelIndex.autoIndex = N)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                i(te, {
                  label: "Index on Startup",
                  description: "Run model indexing when ComfyUI starts",
                  disabled: !u.value.modelIndex.autoIndex
                }, {
                  default: a(() => [
                    i(he, {
                      modelValue: u.value.modelIndex.indexOnStartup,
                      "onUpdate:modelValue": S[5] || (S[5] = (N) => u.value.modelIndex.indexOnStartup = N),
                      disabled: !u.value.modelIndex.autoIndex
                    }, null, 8, ["modelValue", "disabled"])
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                i(te, {
                  label: "Scan Interval",
                  description: "How often to check for new models (minutes)",
                  disabled: !u.value.modelIndex.autoIndex
                }, {
                  default: a(() => [
                    i(xe, {
                      modelValue: u.value.modelIndex.scanInterval,
                      "onUpdate:modelValue": S[6] || (S[6] = (N) => u.value.modelIndex.scanInterval = N),
                      options: b,
                      disabled: !u.value.modelIndex.autoIndex,
                      style: { minWidth: "120px" }
                    }, null, 8, ["modelValue", "disabled"])
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                i(te, {
                  label: "Deep Scan",
                  description: "Use SHA256 hashing for model verification (slower)"
                }, {
                  default: a(() => [
                    i(he, {
                      modelValue: u.value.modelIndex.deepScan,
                      "onUpdate:modelValue": S[7] || (S[7] = (N) => u.value.modelIndex.deepScan = N)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          i(oe, { title: "ENVIRONMENT DEFAULTS" }, {
            default: a(() => [
              o("div", Xn, [
                i(te, {
                  label: "ComfyUI Version",
                  description: "Default ComfyUI version for new environments"
                }, {
                  default: a(() => [
                    i(xe, {
                      modelValue: u.value.environment.defaultComfyUIVersion,
                      "onUpdate:modelValue": S[8] || (S[8] = (N) => u.value.environment.defaultComfyUIVersion = N),
                      options: m,
                      placeholder: "Select version...",
                      style: { minWidth: "150px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                i(te, {
                  label: "Python Version",
                  description: "Python version for new virtual environments"
                }, {
                  default: a(() => [
                    i(xe, {
                      modelValue: u.value.environment.pythonVersion,
                      "onUpdate:modelValue": S[9] || (S[9] = (N) => u.value.environment.pythonVersion = N),
                      options: k,
                      style: { minWidth: "120px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                i(te, {
                  label: "Auto Create Virtualenv",
                  description: "Automatically create Python virtual environment"
                }, {
                  default: a(() => [
                    i(he, {
                      modelValue: u.value.environment.autoCreateVenv,
                      "onUpdate:modelValue": S[10] || (S[10] = (N) => u.value.environment.autoCreateVenv = N)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                i(te, {
                  label: "Install Dependencies",
                  description: "Auto-install requirements.txt on environment creation"
                }, {
                  default: a(() => [
                    i(he, {
                      modelValue: u.value.environment.autoInstallDeps,
                      "onUpdate:modelValue": S[11] || (S[11] = (N) => u.value.environment.autoInstallDeps = N)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          i(oe, { title: "UI PREFERENCES" }, {
            default: a(() => [
              o("div", Zn, [
                i(te, {
                  label: "Theme",
                  description: "Visual theme for the ComfyGit panel"
                }, {
                  default: a(() => [
                    i(xe, {
                      modelValue: u.value.ui.theme,
                      "onUpdate:modelValue": S[12] || (S[12] = (N) => u.value.ui.theme = N),
                      options: U,
                      style: { minWidth: "150px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                i(te, {
                  label: "Compact Mode",
                  description: "Use smaller spacing and fonts"
                }, {
                  default: a(() => [
                    i(he, {
                      modelValue: u.value.ui.compactMode,
                      "onUpdate:modelValue": S[13] || (S[13] = (N) => u.value.ui.compactMode = N)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                i(te, {
                  label: "Show File Extensions",
                  description: "Display file extensions in workflow lists"
                }, {
                  default: a(() => [
                    i(he, {
                      modelValue: u.value.ui.showFileExtensions,
                      "onUpdate:modelValue": S[14] || (S[14] = (N) => u.value.ui.showFileExtensions = N)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                i(te, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations"
                }, {
                  default: a(() => [
                    i(he, {
                      modelValue: u.value.ui.confirmDestructive,
                      "onUpdate:modelValue": S[15] || (S[15] = (N) => u.value.ui.confirmDestructive = N)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          i(oe, { title: "ADVANCED" }, {
            default: a(() => [
              o("div", Qn, [
                i(te, {
                  label: "Debug Mode",
                  description: "Enable debug logging and verbose output"
                }, {
                  default: a(() => [
                    i(he, {
                      modelValue: u.value.advanced.debugMode,
                      "onUpdate:modelValue": S[16] || (S[16] = (N) => u.value.advanced.debugMode = N)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                i(te, {
                  label: "Max History Items",
                  description: "Maximum number of commits to show in history"
                }, {
                  default: a(() => [
                    i(xe, {
                      modelValue: u.value.advanced.maxHistoryItems,
                      "onUpdate:modelValue": S[17] || (S[17] = (N) => u.value.advanced.maxHistoryItems = N),
                      options: _,
                      style: { minWidth: "100px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                i(te, {
                  label: "Cache Duration",
                  description: "How long to cache API responses (seconds)"
                }, {
                  default: a(() => [
                    i(xe, {
                      modelValue: u.value.advanced.cacheDuration,
                      "onUpdate:modelValue": S[18] || (S[18] = (N) => u.value.advanced.cacheDuration = N),
                      options: B,
                      style: { minWidth: "120px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          r.value ? (t(), y(Ie, {
            key: 0,
            variant: (r.value.type === "success", "compact")
          }, {
            default: a(() => [
              o("span", {
                style: tt({ color: r.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, c(r.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : d("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), tl = /* @__PURE__ */ T(el, [["__scopeId", "data-v-74f65bd5"]]), ol = { class: "log-filter-bar" }, al = { class: "log-filter-bar__options" }, sl = ["onClick"], nl = /* @__PURE__ */ O({
  __name: "LogFilterBar",
  props: {
    activeLevels: {}
  },
  emits: ["toggle", "clear"],
  setup(e, { emit: l }) {
    const s = e, r = l, u = ["ERROR", "WARNING", "INFO", "DEBUG"];
    function x(b) {
      return s.activeLevels.includes(b);
    }
    function h(b) {
      r("toggle", b);
    }
    return (b, m) => (t(), n("div", ol, [
      m[1] || (m[1] = o("div", { class: "log-filter-bar__label" }, "FILTER:", -1)),
      o("div", al, [
        (t(), n(W, null, Y(u, (k) => o("button", {
          key: k,
          class: P(["filter-option", { active: x(k) }]),
          onClick: (U) => h(k)
        }, c(k), 11, sl)), 64)),
        o("button", {
          class: "filter-option filter-option--clear",
          onClick: m[0] || (m[0] = (k) => b.$emit("clear"))
        }, " CLEAR ")
      ])
    ]));
  }
}), dt = /* @__PURE__ */ T(nl, [["__scopeId", "data-v-9052edf8"]]), ll = { class: "log-list" }, rl = /* @__PURE__ */ O({
  __name: "LogList",
  setup(e) {
    return (l, s) => (t(), n("div", ll, [
      q(l.$slots, "default", {}, void 0, !0)
    ]));
  }
}), ut = /* @__PURE__ */ T(rl, [["__scopeId", "data-v-0061c330"]]), il = { class: "log-level__icon" }, cl = { class: "log-level__text" }, dl = /* @__PURE__ */ O({
  __name: "LogLevel",
  props: {
    level: {}
  },
  setup(e) {
    const l = e, s = V(() => `log-level--${l.level.toLowerCase()}`), r = V(() => {
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
    return (u, x) => (t(), n("span", {
      class: P(["log-level", s.value])
    }, [
      o("span", il, c(r.value), 1),
      o("span", cl, c(e.level), 1)
    ], 2));
  }
}), ul = /* @__PURE__ */ T(dl, [["__scopeId", "data-v-8547c115"]]), ml = { class: "log-item__header" }, fl = { class: "log-item__timestamp" }, vl = {
  key: 0,
  class: "log-item__context"
}, gl = { class: "log-item__message" }, hl = /* @__PURE__ */ O({
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
    const s = e, r = V(() => `log-item--${s.level.toLowerCase()}`);
    return (u, x) => (t(), n("div", {
      class: P(["log-item", r.value, { clickable: e.clickable }]),
      onClick: x[0] || (x[0] = (h) => e.clickable && u.$emit("click"))
    }, [
      o("div", ml, [
        i(ul, { level: e.level }, null, 8, ["level"]),
        o("span", fl, c(e.timestamp), 1),
        e.context ? (t(), n("span", vl, c(e.context), 1)) : d("", !0)
      ]),
      o("div", gl, c(e.message), 1)
    ], 2));
  }
}), mt = /* @__PURE__ */ T(hl, [["__scopeId", "data-v-adb291b1"]]), pl = {
  key: 2,
  class: "load-more"
}, yl = /* @__PURE__ */ O({
  __name: "WorkspaceDebugSection",
  setup(e) {
    const { getWorkspaceLogs: l } = ue(), s = R([]), r = R(!1), u = R(null), x = R(!1), h = R(["ERROR", "WARNING", "INFO", "DEBUG"]), b = R(100), m = V(() => s.value.filter((I) => I.level === "ERROR").length), k = V(() => s.value.filter((I) => I.level === "WARNING").length), U = V(() => s.value.filter((I) => I.level === "INFO").length), _ = V(() => s.value.filter((I) => I.level === "DEBUG").length), B = V(() => s.value.filter((I) => h.value.includes(I.level))), F = V(() => B.value.slice(0, b.value)), J = V(() => B.value.length > b.value);
    function G(I) {
      const $ = h.value.indexOf(I);
      $ >= 0 ? h.value.splice($, 1) : h.value.push(I);
    }
    function D() {
      h.value = ["ERROR", "WARNING", "INFO", "DEBUG"];
    }
    function S() {
      b.value += 100;
    }
    function N(I) {
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
      r.value = !0, u.value = null;
      try {
        s.value = await l(void 0, 500);
      } catch (I) {
        u.value = I instanceof Error ? I.message : "Failed to load workspace logs";
      } finally {
        r.value = !1;
      }
    }
    return ne(X), (I, $) => (t(), n(W, null, [
      i(fe, null, {
        header: a(() => [
          i(ve, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: $[0] || ($[0] = (p) => x.value = !0)
          })
        ]),
        content: a(() => [
          r.value ? (t(), y(we, {
            key: 0,
            message: "Loading workspace logs..."
          })) : u.value ? (t(), y(ke, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: X
          }, null, 8, ["message"])) : (t(), n(W, { key: 2 }, [
            s.value.length > 0 ? (t(), y(Ie, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                f(" Total: " + c(s.value.length) + " entries • " + c(m.value) + " errors • " + c(k.value) + " warnings • " + c(U.value) + " info • " + c(_.value) + " debug ", 1)
              ]),
              _: 1
            })) : d("", !0),
            i(dt, {
              "active-levels": h.value,
              onToggle: G,
              onClear: D
            }, null, 8, ["active-levels"]),
            B.value.length > 0 ? (t(), y(ut, { key: 1 }, {
              default: a(() => [
                (t(!0), n(W, null, Y(F.value, (p, w) => (t(), y(mt, {
                  key: `${p.timestamp}-${w}`,
                  level: p.level,
                  timestamp: N(p.timestamp),
                  message: p.message,
                  context: p.context
                }, null, 8, ["level", "timestamp", "message", "context"]))), 128))
              ]),
              _: 1
            })) : d("", !0),
            J.value ? (t(), n("div", pl, [
              i(A, {
                variant: "secondary",
                onClick: S
              }, {
                default: a(() => [
                  f(" Load More (" + c(B.value.length - b.value) + " remaining) ", 1)
                ]),
                _: 1
              })
            ])) : d("", !0),
            s.value.length > 0 && B.value.length === 0 ? (t(), y(de, {
              key: 3,
              icon: "🔍",
              message: "No logs match the current filters"
            })) : d("", !0),
            s.value.length === 0 ? (t(), y(de, {
              key: 4,
              icon: "📝",
              message: "No workspace logs available"
            })) : d("", !0)
          ], 64))
        ]),
        _: 1
      }),
      i(Le, {
        show: x.value,
        title: "About Workspace Logs",
        onClose: $[2] || ($[2] = (p) => x.value = !1)
      }, {
        content: a(() => [...$[3] || ($[3] = [
          o("p", null, " Workspace logs show system-level events and operations for the entire ComfyGit workspace, including operations that affect multiple environments. ", -1),
          o("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            o("strong", null, "Log Levels:"),
            o("br"),
            o("strong", null, "ERROR:"),
            f(" Critical failures requiring attention"),
            o("br"),
            o("strong", null, "WARNING:"),
            f(" Potential issues or deprecated features"),
            o("br"),
            o("strong", null, "INFO:"),
            f(" General operational information"),
            o("br"),
            o("strong", null, "DEBUG:"),
            f(" Detailed debugging information ")
          ], -1),
          o("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1)
        ])]),
        actions: a(() => [
          i(A, {
            variant: "primary",
            onClick: $[1] || ($[1] = (p) => x.value = !1)
          }, {
            default: a(() => [...$[4] || ($[4] = [
              f(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), bl = /* @__PURE__ */ T(yl, [["__scopeId", "data-v-55d656f1"]]), wl = {
  key: 2,
  class: "load-more"
}, kl = /* @__PURE__ */ O({
  __name: "DebugEnvSection",
  setup(e) {
    const { getEnvironmentLogs: l, getStatus: s } = ue(), r = R([]), u = R(!1), x = R(null), h = R(!1), b = R(["ERROR", "WARNING", "INFO", "DEBUG"]), m = R(50), k = R("production"), U = V(() => r.value.filter((w) => b.value.includes(w.level.toUpperCase()))), _ = V(() => U.value.slice(0, m.value)), B = V(() => U.value.length > m.value), F = V(
      () => r.value.filter((w) => w.level.toUpperCase() === "ERROR").length
    ), J = V(
      () => r.value.filter((w) => w.level.toUpperCase() === "WARNING").length
    ), G = V(
      () => r.value.filter((w) => w.level.toUpperCase() === "INFO").length
    ), D = V(
      () => r.value.filter((w) => w.level.toUpperCase() === "DEBUG").length
    );
    function S(w) {
      const v = b.value.indexOf(w);
      v > -1 ? b.value.splice(v, 1) : b.value.push(w);
    }
    function N() {
      b.value = ["ERROR", "WARNING", "INFO", "DEBUG"];
    }
    function X() {
      m.value += 50;
    }
    function I(w) {
      return new Date(w).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: !1
      });
    }
    function $(w) {
      if (!w) return;
      const v = Object.entries(w);
      if (v.length === 0) return;
      const [E, M] = v[0];
      return typeof M == "string" || typeof M == "number" ? `${E}: ${M}` : E;
    }
    async function p() {
      u.value = !0, x.value = null;
      try {
        r.value = await l(void 0, 200), r.value.sort((w, v) => new Date(v.timestamp).getTime() - new Date(w.timestamp).getTime());
        try {
          const w = await s();
          k.value = w.environment || "production";
        } catch {
        }
      } catch (w) {
        x.value = w instanceof Error ? w.message : "Failed to load environment logs";
      } finally {
        u.value = !1;
      }
    }
    return ne(p), (w, v) => (t(), n(W, null, [
      i(fe, null, {
        header: a(() => [
          i(ve, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: v[0] || (v[0] = (E) => h.value = !0)
          })
        ]),
        content: a(() => [
          u.value ? (t(), y(we, {
            key: 0,
            message: "Loading environment logs..."
          })) : x.value ? (t(), y(ke, {
            key: 1,
            message: x.value,
            retry: !0,
            onRetry: p
          }, null, 8, ["message"])) : (t(), n(W, { key: 2 }, [
            r.value.length > 0 ? (t(), y(Ie, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                f(" Total: " + c(r.value.length) + " entries • " + c(F.value) + " errors • " + c(J.value) + " warnings • " + c(G.value) + " info • " + c(D.value) + " debug ", 1)
              ]),
              _: 1
            })) : d("", !0),
            i(dt, {
              "active-levels": b.value,
              onToggle: S,
              onClear: N
            }, null, 8, ["active-levels"]),
            U.value.length > 0 ? (t(), y(ut, { key: 1 }, {
              default: a(() => [
                (t(!0), n(W, null, Y(_.value, (E, M) => (t(), y(mt, {
                  key: `${E.timestamp}-${M}`,
                  level: E.level,
                  timestamp: I(E.timestamp),
                  message: E.message,
                  context: $(E.context)
                }, null, 8, ["level", "timestamp", "message", "context"]))), 128))
              ]),
              _: 1
            })) : d("", !0),
            B.value ? (t(), n("div", wl, [
              i(A, {
                variant: "secondary",
                onClick: X
              }, {
                default: a(() => [
                  f(" Load More (" + c(U.value.length - m.value) + " remaining) ", 1)
                ]),
                _: 1
              })
            ])) : d("", !0),
            r.value.length > 0 && U.value.length === 0 ? (t(), y(de, {
              key: 3,
              icon: "🔍",
              message: "No logs match the current filters"
            })) : d("", !0),
            r.value.length === 0 ? (t(), y(de, {
              key: 4,
              icon: "📝",
              message: "No environment logs available"
            })) : d("", !0)
          ], 64))
        ]),
        _: 1
      }),
      i(Le, {
        show: h.value,
        title: "About Environment Logs",
        onClose: v[2] || (v[2] = (E) => h.value = !1)
      }, {
        content: a(() => [
          o("p", null, [
            v[3] || (v[3] = f(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            o("strong", null, c(k.value), 1),
            v[4] || (v[4] = f(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          v[5] || (v[5] = o("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            o("strong", null, "Log Levels:"),
            o("br"),
            o("strong", null, "ERROR:"),
            f(" Critical failures requiring attention"),
            o("br"),
            o("strong", null, "WARNING:"),
            f(" Potential issues or important notices"),
            o("br"),
            o("strong", null, "INFO:"),
            f(" General operational information"),
            o("br"),
            o("strong", null, "DEBUG:"),
            f(" Detailed debugging information ")
          ], -1)),
          v[6] || (v[6] = o("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: a(() => [
          i(A, {
            variant: "primary",
            onClick: v[1] || (v[1] = (E) => h.value = !1)
          }, {
            default: a(() => [...v[7] || (v[7] = [
              f(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), _l = /* @__PURE__ */ T(kl, [["__scopeId", "data-v-456b4c97"]]), $l = { class: "header-info" }, xl = { class: "commit-hash" }, Cl = {
  key: 0,
  class: "commit-refs"
}, Il = { class: "commit-message" }, Sl = { class: "commit-date" }, El = {
  key: 0,
  class: "loading"
}, Ll = {
  key: 1,
  class: "changes-section"
}, Rl = { class: "stats-row" }, Ul = { class: "stat" }, zl = { class: "stat insertions" }, Nl = { class: "stat deletions" }, Ml = {
  key: 0,
  class: "change-group"
}, Dl = {
  key: 1,
  class: "change-group"
}, Vl = {
  key: 0,
  class: "version"
}, Bl = {
  key: 2,
  class: "change-group"
}, Ol = { class: "change-item" }, Tl = /* @__PURE__ */ O({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const l = e, { getCommitDetail: s } = ue(), r = R(null), u = R(!0), x = V(() => {
      if (!r.value) return !1;
      const b = r.value.changes.workflows;
      return b.added.length > 0 || b.modified.length > 0 || b.deleted.length > 0;
    }), h = V(() => {
      if (!r.value) return !1;
      const b = r.value.changes.nodes;
      return b.added.length > 0 || b.removed.length > 0;
    });
    return ne(async () => {
      try {
        r.value = await s(l.commit.hash);
      } finally {
        u.value = !1;
      }
    }), (b, m) => (t(), y(We, {
      size: "md",
      "show-close-button": !1,
      onClose: m[3] || (m[3] = (k) => b.$emit("close"))
    }, {
      header: a(() => {
        var k, U, _, B;
        return [
          o("div", $l, [
            m[4] || (m[4] = o("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            o("span", xl, c(((k = r.value) == null ? void 0 : k.short_hash) || e.commit.short_hash || ((U = e.commit.hash) == null ? void 0 : U.slice(0, 7))), 1),
            (B = (_ = r.value) == null ? void 0 : _.refs) != null && B.length ? (t(), n("span", Cl, [
              (t(!0), n(W, null, Y(r.value.refs, (F) => (t(), n("span", {
                key: F,
                class: "ref-badge"
              }, c(F), 1))), 128))
            ])) : d("", !0)
          ]),
          i(re, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (F) => b.$emit("close"))
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
        var k, U;
        return [
          o("div", Il, c(((k = r.value) == null ? void 0 : k.message) || e.commit.message), 1),
          o("div", Sl, c(((U = r.value) == null ? void 0 : U.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          u.value ? (t(), n("div", El, "Loading details...")) : r.value ? (t(), n("div", Ll, [
            o("div", Rl, [
              o("span", Ul, c(r.value.stats.files_changed) + " files", 1),
              o("span", zl, "+" + c(r.value.stats.insertions), 1),
              o("span", Nl, "-" + c(r.value.stats.deletions), 1)
            ]),
            x.value ? (t(), n("div", Ml, [
              i(be, { variant: "section" }, {
                default: a(() => [...m[6] || (m[6] = [
                  f("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (t(!0), n(W, null, Y(r.value.changes.workflows.added, (_) => (t(), n("div", {
                key: "add-" + _,
                class: "change-item added"
              }, [
                m[7] || (m[7] = o("span", { class: "change-icon" }, "+", -1)),
                o("span", null, c(_), 1)
              ]))), 128)),
              (t(!0), n(W, null, Y(r.value.changes.workflows.modified, (_) => (t(), n("div", {
                key: "mod-" + _,
                class: "change-item modified"
              }, [
                m[8] || (m[8] = o("span", { class: "change-icon" }, "~", -1)),
                o("span", null, c(_), 1)
              ]))), 128)),
              (t(!0), n(W, null, Y(r.value.changes.workflows.deleted, (_) => (t(), n("div", {
                key: "del-" + _,
                class: "change-item deleted"
              }, [
                m[9] || (m[9] = o("span", { class: "change-icon" }, "-", -1)),
                o("span", null, c(_), 1)
              ]))), 128))
            ])) : d("", !0),
            h.value ? (t(), n("div", Dl, [
              i(be, { variant: "section" }, {
                default: a(() => [...m[10] || (m[10] = [
                  f("NODES", -1)
                ])]),
                _: 1
              }),
              (t(!0), n(W, null, Y(r.value.changes.nodes.added, (_) => (t(), n("div", {
                key: "add-" + _.name,
                class: "change-item added"
              }, [
                m[11] || (m[11] = o("span", { class: "change-icon" }, "+", -1)),
                o("span", null, c(_.name), 1),
                _.version ? (t(), n("span", Vl, "(" + c(_.version) + ")", 1)) : d("", !0)
              ]))), 128)),
              (t(!0), n(W, null, Y(r.value.changes.nodes.removed, (_) => (t(), n("div", {
                key: "rem-" + _.name,
                class: "change-item deleted"
              }, [
                m[12] || (m[12] = o("span", { class: "change-icon" }, "-", -1)),
                o("span", null, c(_.name), 1)
              ]))), 128))
            ])) : d("", !0),
            r.value.changes.models.resolved > 0 ? (t(), n("div", Bl, [
              i(be, { variant: "section" }, {
                default: a(() => [...m[13] || (m[13] = [
                  f("MODELS", -1)
                ])]),
                _: 1
              }),
              o("div", Ol, [
                m[14] || (m[14] = o("span", { class: "change-icon" }, "●", -1)),
                o("span", null, c(r.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : d("", !0)
          ])) : d("", !0)
        ];
      }),
      footer: a(() => [
        i(re, {
          variant: "secondary",
          onClick: m[1] || (m[1] = (k) => b.$emit("createBranch", e.commit))
        }, {
          default: a(() => [...m[15] || (m[15] = [
            f(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        i(re, {
          variant: "primary",
          onClick: m[2] || (m[2] = (k) => b.$emit("checkout", e.commit))
        }, {
          default: a(() => [...m[16] || (m[16] = [
            f(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Al = /* @__PURE__ */ T(Tl, [["__scopeId", "data-v-d256ff6d"]]), Wl = { class: "dialog-message" }, Fl = {
  key: 0,
  class: "dialog-details"
}, Gl = {
  key: 1,
  class: "dialog-warning"
}, Pl = /* @__PURE__ */ O({
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
    return (l, s) => (t(), y(We, {
      title: e.title,
      size: "sm",
      onClose: s[3] || (s[3] = (r) => l.$emit("cancel"))
    }, {
      body: a(() => [
        o("p", Wl, c(e.message), 1),
        e.details && e.details.length ? (t(), n("div", Fl, [
          (t(!0), n(W, null, Y(e.details, (r, u) => (t(), n("div", {
            key: u,
            class: "detail-item"
          }, " • " + c(r), 1))), 128))
        ])) : d("", !0),
        e.warning ? (t(), n("p", Gl, [
          s[4] || (s[4] = o("span", { class: "warning-icon" }, "⚠", -1)),
          f(" " + c(e.warning), 1)
        ])) : d("", !0)
      ]),
      footer: a(() => [
        i(re, {
          variant: "secondary",
          onClick: s[0] || (s[0] = (r) => l.$emit("cancel"))
        }, {
          default: a(() => [
            f(c(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (t(), y(re, {
          key: 0,
          variant: "secondary",
          onClick: s[1] || (s[1] = (r) => l.$emit("secondary"))
        }, {
          default: a(() => [
            f(c(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : d("", !0),
        i(re, {
          variant: e.destructive ? "danger" : "primary",
          onClick: s[2] || (s[2] = (r) => l.$emit("confirm"))
        }, {
          default: a(() => [
            f(c(e.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Hl = /* @__PURE__ */ T(Pl, [["__scopeId", "data-v-3670b9f5"]]), Kl = { class: "comfygit-panel" }, jl = { class: "panel-header" }, ql = { class: "header-left" }, Yl = {
  key: 0,
  class: "header-info"
}, Jl = { class: "header-actions" }, Xl = { class: "env-switcher" }, Zl = {
  key: 0,
  class: "header-info"
}, Ql = { class: "branch-name" }, er = { class: "panel-main" }, tr = { class: "sidebar" }, or = { class: "sidebar-section" }, ar = { class: "sidebar-section" }, sr = { class: "sidebar-section" }, nr = { class: "content-area" }, lr = {
  key: 0,
  class: "error-message"
}, rr = {
  key: 1,
  class: "loading"
}, ir = {
  key: 7,
  class: "view-placeholder"
}, cr = {
  key: 11,
  class: "view-placeholder"
}, dr = {
  key: 12,
  class: "view-placeholder"
}, ur = { class: "dialog-content env-selector-dialog" }, mr = { class: "dialog-header" }, fr = { class: "dialog-body" }, vr = { class: "env-list" }, gr = { class: "env-info" }, hr = { class: "env-name-row" }, pr = { class: "env-indicator" }, yr = { class: "env-name" }, br = {
  key: 0,
  class: "env-branch"
}, wr = {
  key: 1,
  class: "current-label"
}, kr = { class: "env-stats" }, _r = ["onClick"], $r = { class: "toast-container" }, xr = { class: "toast-icon" }, Cr = { class: "toast-message" }, Ir = /* @__PURE__ */ O({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(e, { emit: l }) {
    const s = l, {
      getStatus: r,
      getHistory: u,
      exportEnv: x,
      getBranches: h,
      checkout: b,
      createBranch: m,
      switchBranch: k,
      getEnvironments: U
    } = ue(), _ = R(null), B = R([]), F = R([]), J = R([]), G = V(() => J.value.find((C) => C.is_current)), D = R(!1), S = R(null), N = R(null), X = R(!1), I = R("status"), $ = R("this-env");
    function p(C, g) {
      I.value = C, $.value = g;
    }
    function w(C) {
      const j = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[C];
      j && p(j.view, j.section);
    }
    function v() {
      p("branches", "this-env");
    }
    const E = R(null), M = R([]);
    let se = 0;
    function z(C, g = "info", j = 3e3) {
      const ae = ++se;
      return M.value.push({ id: ae, message: C, type: g }), j > 0 && setTimeout(() => {
        M.value = M.value.filter((ge) => ge.id !== ae);
      }, j), ae;
    }
    function L(C) {
      M.value = M.value.filter((g) => g.id !== C);
    }
    function H(C) {
      switch (C) {
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
    const ie = V(() => {
      if (!_.value) return "neutral";
      const C = _.value.workflows, g = C.new.length > 0 || C.modified.length > 0 || C.deleted.length > 0 || _.value.has_changes;
      return _.value.comparison.is_synced ? g ? "warning" : "success" : "error";
    });
    V(() => _.value ? ie.value === "success" ? "All synced" : ie.value === "warning" ? "Uncommitted changes" : ie.value === "error" ? "Not synced" : "" : "");
    async function _e() {
      D.value = !0, S.value = null;
      try {
        const [C, g, j, ae] = await Promise.all([
          r(),
          u(),
          h(),
          U()
        ]);
        _.value = C, B.value = g.commits, F.value = j.branches, J.value = ae, s("statusUpdate", C);
      } catch (C) {
        S.value = C instanceof Error ? C.message : "Failed to load status", _.value = null, B.value = [], F.value = [];
      } finally {
        D.value = !1;
      }
    }
    function Fe(C) {
      N.value = C;
    }
    async function Ne(C) {
      var j;
      N.value = null;
      const g = _.value && (_.value.workflows.new.length > 0 || _.value.workflows.modified.length > 0 || _.value.workflows.deleted.length > 0 || _.value.has_changes);
      E.value = {
        title: g ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: g ? "You have uncommitted changes that will be lost." : `Checkout commit ${C.short_hash || ((j = C.hash) == null ? void 0 : j.slice(0, 7))}?`,
        details: g ? Me() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: g ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: g,
        onConfirm: async () => {
          var K;
          E.value = null;
          const ae = z(`Checking out ${C.short_hash || ((K = C.hash) == null ? void 0 : K.slice(0, 7))}...`, "info", 0), ge = await b(C.hash, g);
          L(ae), ge.status === "success" ? z("Restarting ComfyUI...", "success") : z(ge.message || "Checkout failed", "error");
        }
      };
    }
    async function Ge(C) {
      const g = _.value && (_.value.workflows.new.length > 0 || _.value.workflows.modified.length > 0 || _.value.workflows.deleted.length > 0 || _.value.has_changes);
      E.value = {
        title: g ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: g ? "You have uncommitted changes." : `Switch to branch "${C}"?`,
        details: g ? Me() : void 0,
        warning: g ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: g ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          E.value = null;
          const j = z(`Switching to ${C}...`, "info", 0), ae = await k(C, g);
          L(j), ae.status === "success" ? z("Restarting ComfyUI...", "success") : z(ae.message || "Branch switch failed", "error");
        }
      };
    }
    async function Pe(C) {
      const g = z(`Creating branch ${C}...`, "info", 0), j = await m(C);
      L(g), j.status === "success" ? (z(`Branch "${C}" created`, "success"), await _e()) : z(j.message || "Failed to create branch", "error");
    }
    async function He(C) {
      N.value = null;
      const g = prompt("Enter branch name:");
      if (g) {
        const j = z(`Creating branch ${g}...`, "info", 0), ae = await m(g, C.hash);
        L(j), ae.status === "success" ? (z(`Branch "${g}" created from ${C.short_hash}`, "success"), await _e()) : z(ae.message || "Failed to create branch", "error");
      }
    }
    async function Ke(C) {
      X.value = !1, z("Environment switching not yet implemented", "warning");
    }
    function Me() {
      if (!_.value) return [];
      const C = [], g = _.value.workflows;
      return g.new.length && C.push(`${g.new.length} new workflow(s)`), g.modified.length && C.push(`${g.modified.length} modified workflow(s)`), g.deleted.length && C.push(`${g.deleted.length} deleted workflow(s)`), C;
    }
    async function je() {
      const C = z("Exporting environment...", "info", 0);
      try {
        const g = await x();
        L(C), g.status === "success" ? (z("Export complete", "success"), alert(`Export successful!

Saved to: ${g.path}

Models without sources: ${g.models_without_sources}`)) : (z("Export failed", "error"), alert(`Export failed: ${g.message}`));
      } catch (g) {
        L(C), z("Export error", "error"), alert(`Export error: ${g instanceof Error ? g.message : "Unknown error"}`);
      }
    }
    return ne(_e), (C, g) => {
      var j, ae, ge;
      return t(), n("div", Kl, [
        o("div", jl, [
          o("div", ql, [
            g[20] || (g[20] = o("h2", { class: "panel-title" }, "ComfyGit", -1)),
            _.value ? (t(), n("div", Yl)) : d("", !0)
          ]),
          o("div", Jl, [
            o("button", {
              class: P(["icon-btn", { spinning: D.value }]),
              onClick: _e,
              title: "Refresh"
            }, [...g[21] || (g[21] = [
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
              onClick: g[0] || (g[0] = (K) => s("close")),
              title: "Close"
            }, [...g[22] || (g[22] = [
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
        o("div", Xl, [
          g[24] || (g[24] = o("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
          o("button", {
            class: "env-switcher-btn",
            onClick: g[1] || (g[1] = (K) => X.value = !0)
          }, [
            _.value ? (t(), n("div", Zl, [
              o("span", null, c(((j = G.value) == null ? void 0 : j.name) || ((ae = _.value) == null ? void 0 : ae.environment) || "Loading..."), 1),
              o("span", Ql, "(" + c(_.value.branch || "detached") + ")", 1)
            ])) : d("", !0),
            g[23] || (g[23] = o("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        o("div", er, [
          o("div", tr, [
            o("div", or, [
              g[25] || (g[25] = o("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              o("button", {
                class: P(["sidebar-item", { active: I.value === "status" && $.value === "this-env" }]),
                onClick: g[2] || (g[2] = (K) => p("status", "this-env"))
              }, " STATUS ", 2),
              o("button", {
                class: P(["sidebar-item", { active: I.value === "workflows" }]),
                onClick: g[3] || (g[3] = (K) => p("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              o("button", {
                class: P(["sidebar-item", { active: I.value === "models-env" }]),
                onClick: g[4] || (g[4] = (K) => p("models-env", "this-env"))
              }, " MODELS ", 2),
              o("button", {
                class: P(["sidebar-item", { active: I.value === "branches" }]),
                onClick: g[5] || (g[5] = (K) => p("branches", "this-env"))
              }, " BRANCHES ", 2),
              o("button", {
                class: P(["sidebar-item", { active: I.value === "history" }]),
                onClick: g[6] || (g[6] = (K) => p("history", "this-env"))
              }, " HISTORY ", 2),
              o("button", {
                class: P(["sidebar-item", { active: I.value === "nodes" }]),
                onClick: g[7] || (g[7] = (K) => p("nodes", "this-env"))
              }, " NODES ", 2),
              o("button", {
                class: P(["sidebar-item", { active: I.value === "debug-env" }]),
                onClick: g[8] || (g[8] = (K) => p("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            g[28] || (g[28] = o("div", { class: "sidebar-divider" }, null, -1)),
            o("div", ar, [
              g[26] || (g[26] = o("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              o("button", {
                class: P(["sidebar-item", { active: I.value === "environments" }]),
                onClick: g[9] || (g[9] = (K) => p("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              o("button", {
                class: P(["sidebar-item", { active: I.value === "model-index" }]),
                onClick: g[10] || (g[10] = (K) => p("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              o("button", {
                class: P(["sidebar-item", { active: I.value === "settings" }]),
                onClick: g[11] || (g[11] = (K) => p("settings", "all-envs"))
              }, " SETTINGS ", 2),
              o("button", {
                class: P(["sidebar-item", { active: I.value === "debug-workspace" }]),
                onClick: g[12] || (g[12] = (K) => p("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            g[29] || (g[29] = o("div", { class: "sidebar-divider" }, null, -1)),
            o("div", sr, [
              g[27] || (g[27] = o("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              o("button", {
                class: P(["sidebar-item", { active: I.value === "export" }]),
                onClick: g[13] || (g[13] = (K) => p("export", "sharing"))
              }, " EXPORT ", 2),
              o("button", {
                class: P(["sidebar-item", { active: I.value === "import" }]),
                onClick: g[14] || (g[14] = (K) => p("import", "sharing"))
              }, " IMPORT ", 2),
              o("button", {
                class: P(["sidebar-item", { active: I.value === "remotes" }]),
                onClick: g[15] || (g[15] = (K) => p("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          o("div", nr, [
            S.value ? (t(), n("div", lr, c(S.value), 1)) : !_.value && I.value === "status" ? (t(), n("div", rr, " Loading status... ")) : (t(), n(W, { key: 2 }, [
              I.value === "status" ? (t(), y(So, {
                key: 0,
                status: _.value,
                onSwitchBranch: v
              }, null, 8, ["status"])) : I.value === "workflows" ? (t(), y(Os, {
                key: 1,
                onRefresh: _e
              })) : I.value === "models-env" ? (t(), y(Xs, {
                key: 2,
                onNavigate: w
              })) : I.value === "branches" ? (t(), y(Fo, {
                key: 3,
                branches: F.value,
                current: ((ge = _.value) == null ? void 0 : ge.branch) || null,
                onSwitch: Ge,
                onCreate: Pe
              }, null, 8, ["branches", "current"])) : I.value === "history" ? (t(), y(ea, {
                key: 4,
                commits: B.value,
                onSelect: Fe,
                onCheckout: Ne
              }, null, 8, ["commits"])) : I.value === "nodes" ? (t(), y(sn, { key: 5 })) : I.value === "debug-env" ? (t(), y(_l, { key: 6 })) : I.value === "environments" ? (t(), n("div", ir, [...g[30] || (g[30] = [
                o("h3", { class: "view-title" }, "ENVIRONMENTS", -1),
                o("p", null, "Environment management UI coming soon...", -1)
              ])])) : I.value === "model-index" ? (t(), y(Qs, { key: 8 })) : I.value === "settings" ? (t(), y(tl, { key: 9 })) : I.value === "debug-workspace" ? (t(), y(bl, { key: 10 })) : I.value === "export" ? (t(), n("div", cr, [
                g[32] || (g[32] = o("h3", { class: "view-title" }, "EXPORT", -1)),
                o("button", {
                  class: "export-btn",
                  onClick: je
                }, [...g[31] || (g[31] = [
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
              ])) : I.value === "import" ? (t(), n("div", dr, [...g[33] || (g[33] = [
                o("h3", { class: "view-title" }, "IMPORT", -1),
                o("p", null, "Import UI coming soon...", -1)
              ])])) : I.value === "remotes" ? (t(), y(On, { key: 13 })) : d("", !0)
            ], 64))
          ])
        ]),
        N.value ? (t(), y(Al, {
          key: 0,
          commit: N.value,
          onClose: g[16] || (g[16] = (K) => N.value = null),
          onCheckout: Ne,
          onCreateBranch: He
        }, null, 8, ["commit"])) : d("", !0),
        E.value ? (t(), y(Hl, {
          key: 1,
          title: E.value.title,
          message: E.value.message,
          details: E.value.details,
          warning: E.value.warning,
          confirmLabel: E.value.confirmLabel,
          cancelLabel: E.value.cancelLabel,
          secondaryLabel: E.value.secondaryLabel,
          secondaryAction: E.value.secondaryAction,
          destructive: E.value.destructive,
          onConfirm: E.value.onConfirm,
          onCancel: g[17] || (g[17] = (K) => E.value = null),
          onSecondary: E.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : d("", !0),
        X.value ? (t(), n("div", {
          key: 2,
          class: "dialog-overlay",
          onClick: g[19] || (g[19] = Ee((K) => X.value = !1, ["self"]))
        }, [
          o("div", ur, [
            o("div", mr, [
              g[35] || (g[35] = o("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              o("button", {
                class: "icon-btn",
                onClick: g[18] || (g[18] = (K) => X.value = !1)
              }, [...g[34] || (g[34] = [
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
            o("div", fr, [
              g[36] || (g[36] = o("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              o("div", vr, [
                (t(!0), n(W, null, Y(J.value, (K) => (t(), n("div", {
                  key: K.name,
                  class: P(["env-item", { current: K.is_current }])
                }, [
                  o("div", gr, [
                    o("div", hr, [
                      o("span", pr, c(K.is_current ? "●" : "○"), 1),
                      o("span", yr, c(K.name), 1),
                      K.current_branch ? (t(), n("span", br, "(" + c(K.current_branch) + ")", 1)) : d("", !0),
                      K.is_current ? (t(), n("span", wr, "CURRENT")) : d("", !0)
                    ]),
                    o("div", kr, c(K.workflow_count) + " workflows • " + c(K.node_count) + " nodes ", 1)
                  ]),
                  K.is_current ? d("", !0) : (t(), n("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (si) => Ke(K.name)
                  }, " SWITCH ", 8, _r))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : d("", !0),
        o("div", $r, [
          i(bt, { name: "toast" }, {
            default: a(() => [
              (t(!0), n(W, null, Y(M.value, (K) => (t(), n("div", {
                key: K.id,
                class: P(["toast", K.type])
              }, [
                o("span", xr, c(H(K.type)), 1),
                o("span", Cr, c(K.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), Sr = /* @__PURE__ */ T(Ir, [["__scopeId", "data-v-b8d346b3"]]), Er = { class: "base-textarea-wrapper" }, Lr = ["value", "rows", "placeholder", "disabled", "maxlength"], Rr = {
  key: 0,
  class: "base-textarea-count"
}, Ur = /* @__PURE__ */ O({
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
    return (l, s) => (t(), n("div", Er, [
      o("textarea", {
        value: e.modelValue,
        rows: e.rows,
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxlength: e.maxLength,
        class: "base-textarea",
        onInput: s[0] || (s[0] = (r) => l.$emit("update:modelValue", r.target.value)),
        onKeydown: [
          s[1] || (s[1] = Ce(Ee((r) => l.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          s[2] || (s[2] = Ce(Ee((r) => l.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, Lr),
      e.showCharCount && e.maxLength ? (t(), n("div", Rr, c(e.modelValue.length) + " / " + c(e.maxLength), 1)) : d("", !0)
    ]));
  }
}), zr = /* @__PURE__ */ T(Ur, [["__scopeId", "data-v-5516e6fc"]]), Nr = { class: "commit-popover" }, Mr = { class: "popover-header" }, Dr = { class: "popover-body" }, Vr = {
  key: 0,
  class: "changes-summary"
}, Br = {
  key: 0,
  class: "change-item"
}, Or = {
  key: 1,
  class: "change-item"
}, Tr = {
  key: 2,
  class: "change-item"
}, Ar = {
  key: 3,
  class: "change-item"
}, Wr = {
  key: 4,
  class: "change-item"
}, Fr = {
  key: 1,
  class: "no-changes"
}, Gr = {
  key: 2,
  class: "loading"
}, Pr = { class: "message-section" }, Hr = { class: "popover-footer" }, Kr = /* @__PURE__ */ O({
  __name: "CommitPopover",
  props: {
    status: {}
  },
  emits: ["close", "committed"],
  setup(e, { emit: l }) {
    const s = e, r = l, { commit: u } = ue(), x = R(""), h = R(!1), b = R(null), m = V(() => {
      if (!s.status) return !1;
      const U = s.status.workflows;
      return U.new.length > 0 || U.modified.length > 0 || U.deleted.length > 0 || s.status.has_changes;
    });
    async function k() {
      var U, _, B;
      if (!(!m.value || !x.value.trim() || h.value)) {
        h.value = !0, b.value = null;
        try {
          const F = await u(x.value.trim());
          F.status === "success" ? (b.value = {
            type: "success",
            message: `Committed: ${((U = F.summary) == null ? void 0 : U.new) || 0} new, ${((_ = F.summary) == null ? void 0 : _.modified) || 0} modified, ${((B = F.summary) == null ? void 0 : B.deleted) || 0} deleted`
          }, x.value = "", setTimeout(() => r("committed"), 1e3)) : F.status === "no_changes" ? b.value = { type: "error", message: "No changes to commit" } : b.value = { type: "error", message: F.message || "Commit failed" };
        } catch (F) {
          b.value = { type: "error", message: F instanceof Error ? F.message : "Commit failed" };
        } finally {
          h.value = !1;
        }
      }
    }
    return (U, _) => (t(), n("div", Nr, [
      o("div", Mr, [
        _[4] || (_[4] = o("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        o("button", {
          class: "close-btn",
          onClick: _[0] || (_[0] = (B) => r("close"))
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
      o("div", Dr, [
        e.status && m.value ? (t(), n("div", Vr, [
          e.status.workflows.new.length ? (t(), n("div", Br, [
            _[5] || (_[5] = o("span", { class: "change-icon new" }, "+", -1)),
            o("span", null, c(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : d("", !0),
          e.status.workflows.modified.length ? (t(), n("div", Or, [
            _[6] || (_[6] = o("span", { class: "change-icon modified" }, "~", -1)),
            o("span", null, c(e.status.workflows.modified.length) + " modified", 1)
          ])) : d("", !0),
          e.status.workflows.deleted.length ? (t(), n("div", Tr, [
            _[7] || (_[7] = o("span", { class: "change-icon deleted" }, "-", -1)),
            o("span", null, c(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : d("", !0),
          e.status.git_changes.nodes_added.length ? (t(), n("div", Ar, [
            _[8] || (_[8] = o("span", { class: "change-icon new" }, "+", -1)),
            o("span", null, c(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : d("", !0),
          e.status.git_changes.nodes_removed.length ? (t(), n("div", Wr, [
            _[9] || (_[9] = o("span", { class: "change-icon deleted" }, "-", -1)),
            o("span", null, c(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : d("", !0)
        ])) : e.status ? (t(), n("div", Fr, " No changes to commit ")) : (t(), n("div", Gr, " Loading... ")),
        o("div", Pr, [
          i(zr, {
            modelValue: x.value,
            "onUpdate:modelValue": _[1] || (_[1] = (B) => x.value = B),
            placeholder: m.value ? "Describe your changes..." : "No changes",
            disabled: !m.value || h.value,
            rows: 3,
            onCtrlEnter: k
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        b.value ? (t(), n("div", {
          key: 3,
          class: P(["result", b.value.type])
        }, c(b.value.message), 3)) : d("", !0)
      ]),
      o("div", Hr, [
        i(re, {
          variant: "secondary",
          onClick: _[2] || (_[2] = (B) => r("close"))
        }, {
          default: a(() => [..._[10] || (_[10] = [
            f(" Cancel ", -1)
          ])]),
          _: 1
        }),
        i(re, {
          variant: "primary",
          disabled: !m.value || !x.value.trim() || h.value,
          loading: h.value,
          onClick: k
        }, {
          default: a(() => [
            f(c(h.value ? "Committing..." : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ])
    ]));
  }
}), jr = /* @__PURE__ */ T(Kr, [["__scopeId", "data-v-4f587977"]]), qr = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}', Yr = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', Jr = {
  comfy: qr,
  phosphor: Yr
}, ot = "comfy", ft = "comfygit-theme";
let $e = null, vt = ot;
function Xr() {
  try {
    const e = localStorage.getItem(ft);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return ot;
}
function gt(e = ot) {
  $e && $e.remove(), $e = document.createElement("style"), $e.id = "comfygit-theme-styles", $e.setAttribute("data-theme", e), $e.textContent = Jr[e], document.head.appendChild($e), document.body.setAttribute("data-comfygit-theme", e), vt = e;
  try {
    localStorage.setItem(ft, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function Zr() {
  return vt;
}
function Qr(e) {
  gt(e);
}
const at = document.createElement("link");
at.rel = "stylesheet";
at.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(at);
const ei = Xr();
gt(ei);
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), Qr(e);
  },
  getTheme: () => {
    const e = Zr();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
let me = null, ce = null, Ue = null;
const Se = R(null);
async function Qe() {
  var e;
  if (!((e = window.app) != null && e.api)) return null;
  try {
    const l = await window.app.api.fetchApi("/v2/comfygit/status");
    l.ok && (Se.value = await l.json());
  } catch {
  }
}
function ti() {
  if (!Se.value) return !1;
  const e = Se.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || Se.value.has_changes;
}
function oi() {
  me && me.remove(), me = document.createElement("div"), me.className = "comfygit-panel-overlay";
  const e = document.createElement("div");
  e.className = "comfygit-panel-container", me.appendChild(e), me.addEventListener("click", (r) => {
    r.target === me && Ze();
  });
  const l = (r) => {
    r.key === "Escape" && (Ze(), document.removeEventListener("keydown", l));
  };
  document.addEventListener("keydown", l), rt({
    render: () => it(Sr, {
      onClose: Ze,
      onStatusUpdate: (r) => {
        Se.value = r, Ae();
      }
    })
  }).mount(e), document.body.appendChild(me);
}
function Ze() {
  me && (me.remove(), me = null);
}
function ai(e) {
  Re(), ce = document.createElement("div"), ce.className = "comfygit-commit-popover-container";
  const l = e.getBoundingClientRect();
  ce.style.position = "fixed", ce.style.top = `${l.bottom + 8}px`, ce.style.right = `${window.innerWidth - l.right}px`, ce.style.zIndex = "10001";
  const s = (u) => {
    ce && !ce.contains(u.target) && u.target !== e && (Re(), document.removeEventListener("mousedown", s));
  };
  setTimeout(() => document.addEventListener("mousedown", s), 0);
  const r = (u) => {
    u.key === "Escape" && (Re(), document.removeEventListener("keydown", r));
  };
  document.addEventListener("keydown", r), Ue = rt({
    render: () => it(jr, {
      status: Se.value,
      onClose: Re,
      onCommitted: () => {
        Re(), Qe().then(Ae);
      }
    })
  }), Ue.mount(ce), document.body.appendChild(ce);
}
function Re() {
  Ue && (Ue.unmount(), Ue = null), ce && (ce.remove(), ce = null);
}
let pe = null;
function Ae() {
  if (!pe) return;
  const e = pe.querySelector(".commit-indicator");
  e && (e.style.display = ti() ? "block" : "none");
}
const ht = document.createElement("style");
ht.textContent = `
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
document.head.appendChild(ht);
qe.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var s, r;
    const e = document.createElement("div");
    e.className = "comfygit-btn-group";
    const l = document.createElement("button");
    l.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", l.textContent = "ComfyGit", l.title = "ComfyGit Control Panel", l.onclick = oi, pe = document.createElement("button"), pe.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", pe.innerHTML = 'Commit <span class="commit-indicator"></span>', pe.title = "Quick Commit", pe.onclick = () => ai(pe), e.appendChild(l), e.appendChild(pe), (r = (s = qe.menu) == null ? void 0 : s.settingsGroup) != null && r.element && (qe.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), await Qe(), Ae(), setInterval(async () => {
      await Qe(), Ae();
    }, 3e4);
  }
});
