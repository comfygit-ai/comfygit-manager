import { app as Ze } from "../../scripts/app.js";
import { defineComponent as O, createElementBlock as s, openBlock as t, createCommentVNode as c, createElementVNode as o, renderSlot as Y, createBlock as g, resolveDynamicComponent as at, normalizeClass as K, withCtx as a, toDisplayString as u, createVNode as i, createTextVNode as f, computed as B, Fragment as F, renderList as Z, ref as E, onMounted as re, withKeys as we, withModifiers as Ne, onUnmounted as wt, Teleport as ct, normalizeStyle as nt, watch as kt, resolveComponent as _t, createSlots as $t, TransitionGroup as Ct, createApp as dt, h as ut } from "vue";
const xt = { class: "panel-layout" }, It = {
  key: 0,
  class: "panel-layout-header"
}, St = {
  key: 1,
  class: "panel-layout-search"
}, Et = { class: "panel-layout-content" }, Lt = {
  key: 2,
  class: "panel-layout-footer"
}, Rt = /* @__PURE__ */ O({
  __name: "PanelLayout",
  setup(e) {
    return (l, n) => (t(), s("div", xt, [
      l.$slots.header ? (t(), s("div", It, [
        Y(l.$slots, "header", {}, void 0, !0)
      ])) : c("", !0),
      l.$slots.search ? (t(), s("div", St, [
        Y(l.$slots, "search", {}, void 0, !0)
      ])) : c("", !0),
      o("div", Et, [
        Y(l.$slots, "content", {}, void 0, !0)
      ]),
      l.$slots.footer ? (t(), s("div", Lt, [
        Y(l.$slots, "footer", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), A = (e, l) => {
  const n = e.__vccOpts || e;
  for (const [r, d] of l)
    n[r] = d;
  return n;
}, ge = /* @__PURE__ */ A(Rt, [["__scopeId", "data-v-21565df9"]]), zt = {
  key: 0,
  class: "panel-title-prefix"
}, Nt = {
  key: 1,
  class: "panel-title-prefix-theme"
}, Ut = /* @__PURE__ */ O({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (l, n) => (t(), g(at(`h${e.level}`), {
      class: K(["panel-title", e.variant])
    }, {
      default: a(() => [
        e.showPrefix ? (t(), s("span", zt, u(e.prefix), 1)) : (t(), s("span", Nt)),
        Y(l.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Mt = /* @__PURE__ */ A(Ut, [["__scopeId", "data-v-c3875efc"]]), Dt = ["title"], Vt = ["width", "height"], Bt = /* @__PURE__ */ O({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(e) {
    return (l, n) => (t(), s("button", {
      class: "info-button",
      title: e.title,
      onClick: n[0] || (n[0] = (r) => l.$emit("click"))
    }, [
      (t(), s("svg", {
        width: e.size,
        height: e.size,
        viewBox: "0 0 16 16",
        fill: "currentColor"
      }, [...n[1] || (n[1] = [
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
      ])], 8, Vt))
    ], 8, Dt));
  }
}), Tt = /* @__PURE__ */ A(Bt, [["__scopeId", "data-v-6fc7f16d"]]), Ot = { class: "header-left" }, At = {
  key: 0,
  class: "header-actions"
}, Wt = /* @__PURE__ */ O({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(e) {
    return (l, n) => (t(), s("div", {
      class: K(["panel-header", { stacked: e.stacked }])
    }, [
      o("div", Ot, [
        i(Mt, { "show-prefix": e.showPrefix }, {
          default: a(() => [
            f(u(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (t(), g(Tt, {
          key: 0,
          onClick: n[0] || (n[0] = (r) => l.$emit("info-click"))
        })) : c("", !0)
      ]),
      l.$slots.actions ? (t(), s("div", At, [
        Y(l.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), he = /* @__PURE__ */ A(Wt, [["__scopeId", "data-v-55a62cd6"]]), Ft = {
  key: 0,
  class: "section-title-count"
}, Gt = {
  key: 1,
  class: "section-title-icon"
}, Pt = /* @__PURE__ */ O({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (l, n) => (t(), g(at(`h${e.level}`), {
      class: K(["section-title", { clickable: e.clickable }]),
      onClick: n[0] || (n[0] = (r) => e.clickable && l.$emit("click"))
    }, {
      default: a(() => [
        Y(l.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (t(), s("span", Ft, "(" + u(e.count) + ")", 1)) : c("", !0),
        e.clickable ? (t(), s("span", Gt, u(e.expanded ? "▼" : "▸"), 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Fe = /* @__PURE__ */ A(Pt, [["__scopeId", "data-v-559361eb"]]), Ht = { class: "status-grid" }, Kt = { class: "status-grid__column" }, jt = { class: "status-grid__title" }, qt = { class: "status-grid__column status-grid__column--right" }, Yt = { class: "status-grid__title" }, Jt = /* @__PURE__ */ O({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (l, n) => (t(), s("div", Ht, [
      o("div", Kt, [
        o("h4", jt, u(e.leftTitle), 1),
        Y(l.$slots, "left", {}, void 0, !0)
      ]),
      o("div", qt, [
        o("h4", Yt, u(e.rightTitle), 1),
        Y(l.$slots, "right", {}, void 0, !0)
      ])
    ]));
  }
}), Zt = /* @__PURE__ */ A(Jt, [["__scopeId", "data-v-fe556068"]]), Xt = {
  key: 0,
  class: "status-item__icon"
}, Qt = {
  key: 1,
  class: "status-item__count"
}, eo = { class: "status-item__label" }, to = /* @__PURE__ */ O({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(e) {
    const l = e, n = B(() => `status-item--${l.variant}`);
    return (r, d) => (t(), s("div", {
      class: K(["status-item", n.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (t(), s("span", Xt, u(e.icon), 1)) : c("", !0),
      e.count !== void 0 ? (t(), s("span", Qt, u(e.count), 1)) : c("", !0),
      o("span", eo, u(e.label), 1)
    ], 2));
  }
}), $e = /* @__PURE__ */ A(to, [["__scopeId", "data-v-6f929183"]]), oo = { class: "issue-card__header" }, ao = { class: "issue-card__icon" }, no = { class: "issue-card__title" }, so = {
  key: 0,
  class: "issue-card__content"
}, lo = {
  key: 0,
  class: "issue-card__description"
}, ro = {
  key: 1,
  class: "issue-card__items"
}, io = {
  key: 2,
  class: "issue-card__actions"
}, co = /* @__PURE__ */ O({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(e) {
    const l = e, n = B(() => `issue-card--${l.severity}`);
    return (r, d) => (t(), s("div", {
      class: K(["issue-card", n.value])
    }, [
      o("div", oo, [
        o("span", ao, u(e.icon), 1),
        o("h4", no, u(e.title), 1)
      ]),
      r.$slots.default || e.description ? (t(), s("div", so, [
        e.description ? (t(), s("p", lo, u(e.description), 1)) : c("", !0),
        Y(r.$slots, "default", {}, void 0, !0)
      ])) : c("", !0),
      e.items && e.items.length ? (t(), s("div", ro, [
        (t(!0), s(F, null, Z(e.items, (x, p) => (t(), s("div", {
          key: p,
          class: "issue-card__item"
        }, [
          d[0] || (d[0] = o("span", { class: "issue-card__bullet" }, "•", -1)),
          o("span", null, u(x), 1)
        ]))), 128))
      ])) : c("", !0),
      r.$slots.actions ? (t(), s("div", io, [
        Y(r.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), Xe = /* @__PURE__ */ A(co, [["__scopeId", "data-v-df6aa348"]]), uo = ["type", "disabled"], mo = {
  key: 0,
  class: "spinner"
}, vo = /* @__PURE__ */ O({
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
    return (l, n) => (t(), s("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: K(["action-btn", e.variant, e.size, { loading: e.loading }]),
      onClick: n[0] || (n[0] = (r) => l.$emit("click", r))
    }, [
      e.loading ? (t(), s("span", mo)) : c("", !0),
      e.loading ? c("", !0) : Y(l.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, uo));
  }
}), V = /* @__PURE__ */ A(vo, [["__scopeId", "data-v-772abe47"]]), fo = { class: "empty-state" }, go = {
  key: 0,
  class: "empty-icon"
}, ho = { class: "empty-message" }, po = /* @__PURE__ */ O({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (l, n) => (t(), s("div", fo, [
      e.icon ? (t(), s("div", go, u(e.icon), 1)) : c("", !0),
      o("p", ho, u(e.message), 1),
      e.actionLabel ? (t(), g(V, {
        key: 1,
        variant: e.actionVariant || "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (r) => l.$emit("action"))
      }, {
        default: a(() => [
          f(u(e.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : c("", !0)
    ]));
  }
}), ve = /* @__PURE__ */ A(po, [["__scopeId", "data-v-4466284f"]]), yo = { class: "branch-indicator" }, bo = { class: "branch-indicator__info" }, wo = { class: "branch-indicator__label" }, ko = { class: "branch-indicator__name" }, _o = {
  key: 0,
  class: "branch-indicator__remote"
}, $o = {
  key: 0,
  class: "branch-indicator__status"
}, Co = {
  key: 0,
  class: "branch-indicator__ahead"
}, xo = {
  key: 1,
  class: "branch-indicator__behind"
}, Io = {
  key: 1,
  class: "branch-indicator__actions"
}, So = /* @__PURE__ */ O({
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
    return (l, n) => (t(), s("div", yo, [
      o("div", bo, [
        o("span", wo, u(e.label), 1),
        o("span", ko, u(e.branchName), 1),
        e.remote ? (t(), s("span", _o, "@" + u(e.remote), 1)) : c("", !0)
      ]),
      e.showStatus && (e.commitsAhead || e.commitsBehind) ? (t(), s("div", $o, [
        e.commitsAhead ? (t(), s("span", Co, " ↑ " + u(e.commitsAhead) + " ahead ", 1)) : c("", !0),
        e.commitsBehind ? (t(), s("span", xo, " ↓ " + u(e.commitsBehind) + " behind ", 1)) : c("", !0)
      ])) : c("", !0),
      l.$slots.actions ? (t(), s("div", Io, [
        Y(l.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), Eo = /* @__PURE__ */ A(So, [["__scopeId", "data-v-cb8dd50e"]]), Lo = { style: { "margin-top": "var(--cg-space-1)" } }, Ro = {
  key: 0,
  style: { "margin-top": "var(--cg-space-4)" }
}, zo = /* @__PURE__ */ O({
  __name: "StatusSection",
  props: {
    status: {}
  },
  emits: ["view-workflows", "resolve-models", "view-history", "commit-changes", "view-debug", "sync-environment", "switch-branch"],
  setup(e, { emit: l }) {
    const n = e, r = B(() => n.status.workflows.new.length > 0 || n.status.workflows.modified.length > 0 || n.status.workflows.deleted.length > 0), d = B(() => {
      const m = n.status.git_changes;
      return m.nodes_added.length > 0 || m.nodes_removed.length > 0 || m.workflow_changes || m.has_other_changes;
    }), x = B(() => {
      const m = n.status.git_changes, k = n.status.workflows;
      return (m.workflow_changes || m.has_other_changes) && k.new.length === 0 && k.modified.length === 0 && k.deleted.length === 0;
    }), p = B(() => n.status.missing_models_count > 0 || d.value || !n.status.comparison.is_synced), b = B(() => {
      const m = [];
      return n.status.workflows.new.length > 0 && m.push(`${n.status.workflows.new.length} new workflow${n.status.workflows.new.length === 1 ? "" : "s"}`), n.status.workflows.modified.length > 0 && m.push(`${n.status.workflows.modified.length} modified workflow${n.status.workflows.modified.length === 1 ? "" : "s"}`), n.status.workflows.deleted.length > 0 && m.push(`${n.status.workflows.deleted.length} deleted workflow${n.status.workflows.deleted.length === 1 ? "" : "s"}`), n.status.git_changes.nodes_added.length > 0 && m.push(`${n.status.git_changes.nodes_added.length} node${n.status.git_changes.nodes_added.length === 1 ? "" : "s"} added`), n.status.git_changes.nodes_removed.length > 0 && m.push(`${n.status.git_changes.nodes_removed.length} node${n.status.git_changes.nodes_removed.length === 1 ? "" : "s"} removed`), `${m.length > 0 ? m.join(", ") + "." : "You have uncommitted changes."} Your work could be lost if you switch branches without committing.`;
    });
    return (m, k) => (t(), g(ge, null, {
      header: a(() => [
        i(he, { title: "STATUS" })
      ]),
      content: a(() => [
        i(Fe, {
          level: "4",
          style: { "margin-bottom": "var(--cg-space-2)" }
        }, {
          default: a(() => [...k[7] || (k[7] = [
            f(" ENVIRONMENT HEALTH ", -1)
          ])]),
          _: 1
        }),
        i(Zt, {
          "left-title": "WORKFLOWS",
          "right-title": "GIT CHANGES"
        }, {
          left: a(() => [
            e.status.workflows.new.length ? (t(), g($e, {
              key: 0,
              icon: "●",
              count: e.status.workflows.new.length,
              label: "new",
              variant: "new"
            }, null, 8, ["count"])) : c("", !0),
            e.status.workflows.modified.length ? (t(), g($e, {
              key: 1,
              icon: "●",
              count: e.status.workflows.modified.length,
              label: "modified",
              variant: "modified"
            }, null, 8, ["count"])) : c("", !0),
            e.status.workflows.deleted.length ? (t(), g($e, {
              key: 2,
              icon: "●",
              count: e.status.workflows.deleted.length,
              label: "deleted",
              variant: "deleted"
            }, null, 8, ["count"])) : c("", !0),
            i($e, {
              icon: "✓",
              count: e.status.workflows.synced.length,
              label: "synced",
              variant: "synced",
              separator: r.value
            }, null, 8, ["count", "separator"])
          ]),
          right: a(() => [
            e.status.git_changes.nodes_added.length ? (t(), g($e, {
              key: 0,
              icon: "●",
              count: e.status.git_changes.nodes_added.length,
              label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
              variant: "new"
            }, null, 8, ["count", "label"])) : c("", !0),
            e.status.git_changes.nodes_removed.length ? (t(), g($e, {
              key: 1,
              icon: "●",
              count: e.status.git_changes.nodes_removed.length,
              label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
              variant: "deleted"
            }, null, 8, ["count", "label"])) : c("", !0),
            x.value ? (t(), g($e, {
              key: 2,
              icon: "●",
              label: "other changes",
              variant: "modified"
            })) : c("", !0),
            d.value ? c("", !0) : (t(), g($e, {
              key: 3,
              icon: "✓",
              label: "No uncommitted changes",
              variant: "ok"
            }))
          ]),
          _: 1
        }),
        o("div", Lo, [
          i(Eo, {
            "branch-name": e.status.current_branch || "main"
          }, {
            actions: a(() => [
              i(V, {
                variant: "secondary",
                size: "sm",
                onClick: k[0] || (k[0] = (R) => m.$emit("switch-branch"))
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
        p.value ? (t(), s("div", Ro, [
          i(Fe, {
            level: "4",
            style: { "margin-bottom": "var(--cg-space-2)" }
          }, {
            default: a(() => [...k[9] || (k[9] = [
              f(" ISSUES DETECTED ", -1)
            ])]),
            _: 1
          }),
          e.status.missing_models_count > 0 ? (t(), g(Xe, {
            key: 0,
            severity: "warning",
            icon: "⚠",
            title: `${e.status.missing_models_count} missing model${e.status.missing_models_count === 1 ? "" : "s"}`,
            description: "Some workflows reference models that are not found in the workspace index."
          }, {
            actions: a(() => [
              i(V, {
                variant: "secondary",
                size: "sm",
                onClick: k[1] || (k[1] = (R) => m.$emit("view-workflows"))
              }, {
                default: a(() => [...k[10] || (k[10] = [
                  f(" View Details ", -1)
                ])]),
                _: 1
              }),
              i(V, {
                variant: "primary",
                size: "sm",
                onClick: k[2] || (k[2] = (R) => m.$emit("resolve-models"))
              }, {
                default: a(() => [...k[11] || (k[11] = [
                  f(" Resolve ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["title"])) : c("", !0),
          d.value ? (t(), g(Xe, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "You have unsaved changes",
            description: b.value
          }, {
            actions: a(() => [
              i(V, {
                variant: "secondary",
                size: "sm",
                onClick: k[3] || (k[3] = (R) => m.$emit("view-history"))
              }, {
                default: a(() => [...k[12] || (k[12] = [
                  f(" View Changes ", -1)
                ])]),
                _: 1
              }),
              i(V, {
                variant: "primary",
                size: "sm",
                onClick: k[4] || (k[4] = (R) => m.$emit("commit-changes"))
              }, {
                default: a(() => [...k[13] || (k[13] = [
                  f(" Commit Changes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["description"])) : c("", !0),
          e.status.comparison.is_synced ? c("", !0) : (t(), g(Xe, {
            key: 2,
            severity: "error",
            icon: "⚠",
            title: "Environment not synced",
            description: "Your environment state does not match the git repository. This may indicate missing installations or configuration issues."
          }, {
            actions: a(() => [
              i(V, {
                variant: "secondary",
                size: "sm",
                onClick: k[5] || (k[5] = (R) => m.$emit("view-debug"))
              }, {
                default: a(() => [...k[14] || (k[14] = [
                  f(" View Logs ", -1)
                ])]),
                _: 1
              }),
              i(V, {
                variant: "primary",
                size: "sm",
                onClick: k[6] || (k[6] = (R) => m.$emit("sync-environment"))
              }, {
                default: a(() => [...k[15] || (k[15] = [
                  f(" Sync Now ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }))
        ])) : c("", !0),
        !p.value && !d.value ? (t(), g(ve, {
          key: 1,
          icon: "✅",
          message: "Everything looks good! No issues detected.",
          style: { "margin-top": "var(--cg-space-4)" }
        })) : c("", !0)
      ]),
      _: 1
    }));
  }
}), No = /* @__PURE__ */ A(zo, [["__scopeId", "data-v-2045da26"]]), Uo = ["type", "value", "placeholder", "disabled"], Mo = /* @__PURE__ */ O({
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
  setup(e, { expose: l, emit: n }) {
    const r = e, d = n, x = E(null);
    function p(b) {
      const m = b.target.value;
      d("update:modelValue", m);
    }
    return re(() => {
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
    }), (b, m) => (t(), s("input", {
      ref_key: "inputRef",
      ref: x,
      type: e.type,
      value: e.modelValue,
      placeholder: e.placeholder,
      disabled: e.disabled,
      class: K(["text-input", { error: e.hasError, monospace: e.monospace }]),
      onInput: p,
      onKeyup: [
        m[0] || (m[0] = we((k) => b.$emit("enter"), ["enter"])),
        m[1] || (m[1] = we((k) => b.$emit("escape"), ["escape"]))
      ],
      onFocus: m[2] || (m[2] = (k) => b.$emit("focus")),
      onBlur: m[3] || (m[3] = (k) => b.$emit("blur"))
    }, null, 42, Uo));
  }
}), De = /* @__PURE__ */ A(Mo, [["__scopeId", "data-v-0380d08f"]]), Do = { class: "branch-create-form" }, Vo = { class: "form-actions" }, Bo = /* @__PURE__ */ O({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(e, { emit: l }) {
    const n = l, r = E(""), d = B(() => {
      const b = r.value.trim();
      return b.length > 0 && !b.startsWith("-") && !b.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(b);
    });
    function x() {
      d.value && (n("create", r.value.trim()), r.value = "");
    }
    function p() {
      r.value = "", n("cancel");
    }
    return (b, m) => (t(), s("div", Do, [
      i(De, {
        modelValue: r.value,
        "onUpdate:modelValue": m[0] || (m[0] = (k) => r.value = k),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: x,
        onEscape: p
      }, null, 8, ["modelValue"]),
      o("div", Vo, [
        i(V, {
          variant: "primary",
          size: "sm",
          disabled: !d.value,
          onClick: x
        }, {
          default: a(() => [...m[1] || (m[1] = [
            f(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        i(V, {
          variant: "secondary",
          size: "sm",
          onClick: p
        }, {
          default: a(() => [...m[2] || (m[2] = [
            f(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), To = /* @__PURE__ */ A(Bo, [["__scopeId", "data-v-7c500394"]]), Oo = { class: "branch-list-item__indicator" }, Ao = { class: "branch-list-item__name" }, Wo = {
  key: 0,
  class: "branch-list-item__actions"
}, Fo = {
  key: 0,
  class: "branch-list-item__current-label"
}, Go = /* @__PURE__ */ O({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(e) {
    return (l, n) => (t(), s("div", {
      class: K(["branch-list-item", { current: e.isCurrent, clickable: e.clickable }]),
      onClick: n[0] || (n[0] = (r) => e.clickable && l.$emit("click"))
    }, [
      o("span", Oo, u(e.isCurrent ? "●" : "○"), 1),
      o("span", Ao, u(e.branchName), 1),
      l.$slots.actions || e.showCurrentLabel ? (t(), s("div", Wo, [
        Y(l.$slots, "actions", {}, void 0, !0),
        e.isCurrent && e.showCurrentLabel ? (t(), s("span", Fo, " current ")) : c("", !0)
      ])) : c("", !0)
    ], 2));
  }
}), Po = /* @__PURE__ */ A(Go, [["__scopeId", "data-v-c6581a24"]]), Ho = {
  key: 2,
  class: "branch-list"
}, Ko = /* @__PURE__ */ O({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create"],
  setup(e, { emit: l }) {
    const n = l, r = E(!1);
    function d(p) {
      n("create", p), x();
    }
    function x() {
      r.value = !1;
    }
    return (p, b) => (t(), g(ge, null, {
      header: a(() => [
        i(he, { title: "BRANCHES" }, {
          actions: a(() => [
            i(V, {
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
        r.value ? (t(), g(To, {
          key: 0,
          onCreate: d,
          onCancel: x
        })) : c("", !0),
        e.branches.length === 0 ? (t(), g(ve, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (t(), s("div", Ho, [
          (t(!0), s(F, null, Z(e.branches, (m) => (t(), g(Po, {
            key: m.name,
            "branch-name": m.name,
            "is-current": m.is_current
          }, {
            actions: a(() => [
              m.is_current ? c("", !0) : (t(), g(V, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: (k) => p.$emit("switch", m.name)
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
}), jo = /* @__PURE__ */ A(Ko, [["__scopeId", "data-v-763d6ec4"]]), qo = { class: "commit-list" }, Yo = /* @__PURE__ */ O({
  __name: "CommitList",
  setup(e) {
    return (l, n) => (t(), s("div", qo, [
      Y(l.$slots, "default", {}, void 0, !0)
    ]));
  }
}), Jo = /* @__PURE__ */ A(Yo, [["__scopeId", "data-v-8c5ee761"]]), Zo = { class: "commit-hash" }, Xo = /* @__PURE__ */ O({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const l = e, n = B(() => l.hash.slice(0, l.length));
    return (r, d) => (t(), s("span", Zo, u(n.value), 1));
  }
}), Qo = /* @__PURE__ */ A(Xo, [["__scopeId", "data-v-7c333cc6"]]), ea = { class: "commit-message" }, ta = { class: "commit-date" }, oa = /* @__PURE__ */ O({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const n = e, r = l;
    function d() {
      n.clickable && r("click");
    }
    return (x, p) => (t(), s("div", {
      class: K(["commit-item", { clickable: e.clickable }]),
      onClick: d
    }, [
      i(Qo, { hash: e.hash }, null, 8, ["hash"]),
      o("span", ea, u(e.message), 1),
      o("span", ta, u(e.relativeDate), 1),
      x.$slots.actions ? (t(), s("div", {
        key: 0,
        class: "commit-actions",
        onClick: p[0] || (p[0] = Ne(() => {
        }, ["stop"]))
      }, [
        Y(x.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), aa = /* @__PURE__ */ A(oa, [["__scopeId", "data-v-dd7c621b"]]), na = /* @__PURE__ */ O({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(e) {
    return (l, n) => (t(), g(ge, null, {
      header: a(() => [
        i(he, { title: "HISTORY" })
      ]),
      content: a(() => [
        e.commits.length === 0 ? (t(), g(ve, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (t(), g(Jo, { key: 1 }, {
          default: a(() => [
            (t(!0), s(F, null, Z(e.commits, (r) => (t(), g(aa, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (d) => l.$emit("select", r)
            }, {
              actions: a(() => [
                i(V, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (d) => l.$emit("checkout", r),
                  title: "Checkout this commit"
                }, {
                  default: a(() => [...n[0] || (n[0] = [
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
}), sa = /* @__PURE__ */ A(na, [["__scopeId", "data-v-981c3c64"]]), rt = [
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
], la = {
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
}, mt = [
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
], ra = [
  ...mt,
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
], Oe = [
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
], ia = [
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
], Ae = [
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
], X = {
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
  createEnvironment: async (e, l, n) => {
    await Q(1e3), console.log(`[MOCK] Creating environment: ${e} with backend ${l}`, n ? `cloned from ${n}` : "");
  },
  deleteEnvironment: async (e) => {
    await Q(500), console.log(`[MOCK] Deleting environment: ${e}`);
  },
  // Workflow Management
  getWorkflows: async () => (await Q(400), rt),
  getWorkflowDetails: async (e) => (await Q(300), la[e] || {
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
  installWorkflowDeps: async (e, l, n) => {
    await Q(2e3), console.log(`[MOCK] Installing deps for ${e}: nodes=${l}, models=${n}`);
  },
  setModelImportance: async (e, l, n) => {
    await Q(200), console.log(`[MOCK] Setting ${l} importance to ${n} in ${e}`);
  },
  // Model Management
  getEnvironmentModels: async () => (await Q(350), mt),
  getWorkspaceModels: async () => (await Q(400), ra),
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
    const e = Oe.filter((n) => n.installed), l = Oe.filter((n) => !n.installed);
    return {
      nodes: Oe,
      total_count: Oe.length,
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
  getEnvironmentLogs: async (e, l) => (await Q(250), (e ? Ae.filter((r) => r.level === e) : Ae).slice(0, l || 100)),
  getWorkspaceLogs: async (e, l) => {
    await Q(300);
    const n = [...Ae, ...Ae.map((d) => ({
      ...d,
      context: { ...d.context, environment: "testing" }
    }))];
    return (e ? n.filter((d) => d.level === e) : n).slice(0, l || 100);
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
      synced: rt.filter((e) => e.status === "synced").map((e) => e.name),
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
  getCommitHistory: async (e = 10) => (await Q(300), ia.slice(0, e)),
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
  updateRemoteUrl: async (e, l, n) => {
    await Q(400), console.log(`[MOCK] Updating remote ${e}: ${l}${n ? ` (push: ${n})` : ""}`);
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
function fe() {
  const e = E(!1), l = E(null);
  async function n(T, te) {
    var W;
    if (!((W = window.app) != null && W.api))
      throw new Error("ComfyUI API not available");
    const se = await window.app.api.fetchApi(T, te);
    if (!se.ok) {
      const $ = await se.json().catch(() => ({}));
      throw new Error($.error || $.message || `Request failed: ${se.status}`);
    }
    return se.json();
  }
  async function r() {
    return X.getStatus();
  }
  async function d(T, te = !1) {
    return n("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: T, allow_issues: te })
    });
  }
  async function x(T = 10, te = 0) {
    {
      const se = await X.getCommitHistory(T);
      return {
        commits: se,
        total: se.length,
        offset: te
      };
    }
  }
  async function p(T) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: T })
    });
  }
  async function b() {
    return X.getBranches();
  }
  async function m(T) {
    return n(`/v2/comfygit/commit/${T}`);
  }
  async function k(T, te = !1) {
    return n("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: T, force: te })
    });
  }
  async function R(T, te = "HEAD") {
    return n("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: T, start_point: te })
    });
  }
  async function _(T, te = !1) {
    return n("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: T, force: te })
    });
  }
  async function M() {
    return X.getEnvironments();
  }
  async function H(T) {
    return X.switchEnvironment(T);
  }
  async function J() {
    return null;
  }
  async function P(T, te, se) {
    return await X.createEnvironment(T, te, se), { status: "success" };
  }
  async function D(T) {
    return await X.deleteEnvironment(T), { status: "success" };
  }
  async function S() {
    return X.getWorkflows();
  }
  async function N(T) {
    return X.getWorkflowDetails(T);
  }
  async function G(T) {
    return X.resolveWorkflow(T);
  }
  async function y(T, te, se) {
    return await X.installWorkflowDeps(T, te, se), { status: "success" };
  }
  async function C(T, te, se) {
    return X.setModelImportance(T, te, se);
  }
  async function v() {
    return X.getEnvironmentModels();
  }
  async function w() {
    return X.getWorkspaceModels();
  }
  async function h(T, te) {
    return X.updateModelSource(T, te);
  }
  async function I(T) {
    return X.deleteModel(T);
  }
  async function U(T) {
    return await X.downloadModel(T), { status: "success" };
  }
  async function ie() {
    return X.getConfig();
  }
  async function z(T) {
    return X.updateConfig(T);
  }
  async function L(T, te) {
    return X.getEnvironmentLogs(T, te);
  }
  async function j(T, te) {
    return X.getWorkspaceLogs(T, te);
  }
  async function ue() {
    return X.getNodes();
  }
  async function Ie(T) {
    return await X.installNode(T), { status: "success" };
  }
  async function He(T) {
    return await X.updateNode(T), { status: "success" };
  }
  async function Be(T) {
    return await X.uninstallNode(T), { status: "success" };
  }
  async function Ke() {
    return X.getRemotes();
  }
  async function je(T, te) {
    return await X.addRemote(T, te), { status: "success", remote_name: T };
  }
  async function qe(T) {
    return await X.removeRemote(T), { status: "success", remote_name: T };
  }
  async function Te(T, te, se) {
    return await X.updateRemoteUrl(T, te, se), { status: "success", remote_name: T };
  }
  async function Ye(T) {
    return await X.fetchRemote(T), { status: "success", remote_name: T };
  }
  async function Je(T) {
    return X.getRemoteSyncStatus(T);
  }
  return {
    isLoading: e,
    error: l,
    getStatus: r,
    commit: d,
    getHistory: x,
    exportEnv: p,
    // Git Operations
    getBranches: b,
    getCommitDetail: m,
    checkout: k,
    createBranch: R,
    switchBranch: _,
    // Environment Management
    getEnvironments: M,
    switchEnvironment: H,
    getSwitchProgress: J,
    createEnvironment: P,
    deleteEnvironment: D,
    // Workflow Management
    getWorkflows: S,
    getWorkflowDetails: N,
    resolveWorkflow: G,
    installWorkflowDeps: y,
    setModelImportance: C,
    // Model Management
    getEnvironmentModels: v,
    getWorkspaceModels: w,
    updateModelSource: h,
    deleteModel: I,
    downloadModel: U,
    // Settings
    getConfig: ie,
    updateConfig: z,
    // Debug/Logs
    getEnvironmentLogs: L,
    getWorkspaceLogs: j,
    // Node Management
    getNodes: ue,
    installNode: Ie,
    updateNode: He,
    uninstallNode: Be,
    // Git Remotes
    getRemotes: Ke,
    addRemote: je,
    removeRemote: qe,
    updateRemoteUrl: Te,
    fetchRemote: Ye,
    getRemoteSyncStatus: Je
  };
}
const ca = { class: "base-modal-header" }, da = {
  key: 0,
  class: "base-modal-title"
}, ua = { class: "base-modal-body" }, ma = {
  key: 0,
  class: "base-modal-loading"
}, va = {
  key: 1,
  class: "base-modal-error"
}, fa = {
  key: 0,
  class: "base-modal-footer"
}, ga = /* @__PURE__ */ O({
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
    const n = e, r = l;
    function d() {
      n.closeOnOverlayClick && r("close");
    }
    function x(p) {
      p.key === "Escape" && r("close");
    }
    return re(() => {
      document.addEventListener("keydown", x), document.body.style.overflow = "hidden";
    }), wt(() => {
      document.removeEventListener("keydown", x), document.body.style.overflow = "";
    }), (p, b) => (t(), g(ct, { to: "body" }, [
      o("div", {
        class: "base-modal-overlay",
        onClick: d
      }, [
        o("div", {
          class: K(["base-modal-content", e.size]),
          onClick: b[1] || (b[1] = Ne(() => {
          }, ["stop"]))
        }, [
          o("div", ca, [
            Y(p.$slots, "header", {}, () => [
              e.title ? (t(), s("h3", da, u(e.title), 1)) : c("", !0)
            ], !0),
            e.showCloseButton ? (t(), s("button", {
              key: 0,
              class: "base-modal-close",
              onClick: b[0] || (b[0] = (m) => p.$emit("close"))
            }, [...b[2] || (b[2] = [
              o("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                o("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])) : c("", !0)
          ]),
          o("div", ua, [
            e.loading ? (t(), s("div", ma, "Loading...")) : e.error ? (t(), s("div", va, u(e.error), 1)) : Y(p.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          p.$slots.footer ? (t(), s("div", fa, [
            Y(p.$slots, "footer", {}, void 0, !0)
          ])) : c("", !0)
        ], 2)
      ])
    ]));
  }
}), Pe = /* @__PURE__ */ A(ga, [["__scopeId", "data-v-700d367b"]]), ha = ["type", "disabled"], pa = {
  key: 0,
  class: "spinner"
}, ya = /* @__PURE__ */ O({
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
    return (l, n) => (t(), s("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: K(["base-btn", e.variant, e.size, { "full-width": e.fullWidth, loading: e.loading }]),
      onClick: n[0] || (n[0] = (r) => l.$emit("click", r))
    }, [
      e.loading ? (t(), s("span", pa)) : c("", !0),
      Y(l.$slots, "default", {}, void 0, !0)
    ], 10, ha));
  }
}), de = /* @__PURE__ */ A(ya, [["__scopeId", "data-v-f3452606"]]), ba = {
  key: 0,
  class: "base-title-count"
}, wa = /* @__PURE__ */ O({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (l, n) => (t(), g(at(`h${e.level}`), {
      class: K(["base-title", e.variant])
    }, {
      default: a(() => [
        Y(l.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (t(), s("span", ba, "(" + u(e.count) + ")", 1)) : c("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ce = /* @__PURE__ */ A(wa, [["__scopeId", "data-v-5a01561d"]]), ka = ["value", "disabled"], _a = {
  key: 0,
  value: "",
  disabled: ""
}, $a = ["value"], Ca = {
  key: 0,
  class: "base-select-error"
}, xa = /* @__PURE__ */ O({
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
    function n(r) {
      return typeof r == "string" ? r : r.label;
    }
    return (r, d) => (t(), s("div", {
      class: K(["base-select-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      o("select", {
        value: e.modelValue,
        disabled: e.disabled,
        class: K(["base-select", { error: !!e.error }]),
        onChange: d[0] || (d[0] = (x) => r.$emit("update:modelValue", x.target.value))
      }, [
        e.placeholder ? (t(), s("option", _a, u(e.placeholder), 1)) : c("", !0),
        (t(!0), s(F, null, Z(e.options, (x) => (t(), s("option", {
          key: l(x),
          value: l(x)
        }, u(n(x)), 9, $a))), 128))
      ], 42, ka),
      e.error ? (t(), s("span", Ca, u(e.error), 1)) : c("", !0)
    ], 2));
  }
}), Le = /* @__PURE__ */ A(xa, [["__scopeId", "data-v-7436d745"]]), Ia = { class: "detail-section" }, Sa = {
  key: 0,
  class: "empty-message"
}, Ea = { class: "model-header" }, La = { class: "model-name" }, Ra = { class: "model-details" }, za = { class: "model-row" }, Na = { class: "model-row" }, Ua = {
  key: 0,
  class: "model-row"
}, Ma = { class: "value" }, Da = {
  key: 1,
  class: "model-row"
}, Va = { class: "value" }, Ba = {
  key: 0,
  class: "model-actions"
}, Ta = { class: "detail-section" }, Oa = {
  key: 0,
  class: "empty-message"
}, Aa = { class: "node-name" }, Wa = {
  key: 0,
  class: "node-version"
}, Fa = /* @__PURE__ */ O({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve"],
  setup(e, { emit: l }) {
    const n = e, r = l, { getWorkflowDetails: d, setModelImportance: x } = fe(), p = E(null), b = E(!1), m = E(null), k = E(!1), R = E({}), _ = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    async function M() {
      b.value = !0, m.value = null;
      try {
        p.value = await d(n.workflowName);
      } catch (P) {
        m.value = P instanceof Error ? P.message : "Failed to load workflow details";
      } finally {
        b.value = !1;
      }
    }
    function H(P, D) {
      R.value[P] = D, k.value = !0;
    }
    async function J() {
      if (!k.value) {
        r("close");
        return;
      }
      b.value = !0, m.value = null;
      try {
        for (const [P, D] of Object.entries(R.value))
          await x(n.workflowName, P, D);
        r("close");
      } catch (P) {
        m.value = P instanceof Error ? P.message : "Failed to save changes";
      } finally {
        b.value = !1;
      }
    }
    return re(M), (P, D) => (t(), g(Pe, {
      title: `WORKFLOW DETAILS: ${e.workflowName}`,
      size: "lg",
      loading: b.value,
      error: m.value || void 0,
      onClose: D[2] || (D[2] = (S) => r("close"))
    }, {
      body: a(() => [
        p.value ? (t(), s(F, { key: 0 }, [
          o("section", Ia, [
            i(Ce, { variant: "section" }, {
              default: a(() => [
                f("MODELS USED (" + u(p.value.models.length) + ")", 1)
              ]),
              _: 1
            }),
            p.value.models.length === 0 ? (t(), s("div", Sa, " No models used in this workflow ")) : c("", !0),
            (t(!0), s(F, null, Z(p.value.models, (S) => (t(), s("div", {
              key: S.hash,
              class: "model-card"
            }, [
              o("div", Ea, [
                D[3] || (D[3] = o("span", { class: "model-icon" }, "📦", -1)),
                o("span", La, u(S.filename), 1)
              ]),
              o("div", Ra, [
                o("div", za, [
                  D[4] || (D[4] = o("span", { class: "label" }, "Status:", -1)),
                  o("span", {
                    class: K(["value", S.status === "available" ? "success" : "error"])
                  }, u(S.status === "available" ? "✓ Available" : "⚠ Missing"), 3)
                ]),
                o("div", Na, [
                  D[5] || (D[5] = o("span", { class: "label" }, "Importance:", -1)),
                  i(Le, {
                    "model-value": R.value[S.hash] || S.importance,
                    options: _,
                    "onUpdate:modelValue": (N) => H(S.hash, N)
                  }, null, 8, ["model-value", "onUpdate:modelValue"])
                ]),
                S.node_type ? (t(), s("div", Ua, [
                  D[6] || (D[6] = o("span", { class: "label" }, "Used in:", -1)),
                  o("span", Ma, u(S.node_type) + " (Node " + u(S.node_id) + ")", 1)
                ])) : c("", !0),
                S.size_mb ? (t(), s("div", Da, [
                  D[7] || (D[7] = o("span", { class: "label" }, "Size:", -1)),
                  o("span", Va, u(S.size_mb) + " MB", 1)
                ])) : c("", !0)
              ]),
              S.status === "missing" ? (t(), s("div", Ba, [
                i(de, {
                  variant: "secondary",
                  size: "sm",
                  onClick: D[0] || (D[0] = (N) => r("resolve"))
                }, {
                  default: a(() => [...D[8] || (D[8] = [
                    f(" Resolve ", -1)
                  ])]),
                  _: 1
                })
              ])) : c("", !0)
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
          o("section", Ta, [
            i(Ce, { variant: "section" }, {
              default: a(() => [
                f("NODES USED (" + u(p.value.nodes.length) + ")", 1)
              ]),
              _: 1
            }),
            p.value.nodes.length === 0 ? (t(), s("div", Oa, " No custom nodes used in this workflow ")) : c("", !0),
            (t(!0), s(F, null, Z(p.value.nodes, (S) => (t(), s("div", {
              key: S.name,
              class: "node-item"
            }, [
              o("span", {
                class: K(["node-status", S.installed ? "installed" : "missing"])
              }, u(S.installed ? "✓" : "✕"), 3),
              o("span", Aa, u(S.name), 1),
              S.version ? (t(), s("span", Wa, "v" + u(S.version), 1)) : c("", !0)
            ]))), 128))
          ])
        ], 64)) : c("", !0)
      ]),
      footer: a(() => [
        i(de, {
          variant: "secondary",
          onClick: D[1] || (D[1] = (S) => r("close"))
        }, {
          default: a(() => [...D[10] || (D[10] = [
            f(" Close ", -1)
          ])]),
          _: 1
        }),
        k.value ? (t(), g(de, {
          key: 0,
          variant: "primary",
          onClick: J
        }, {
          default: a(() => [...D[11] || (D[11] = [
            f(" Save Changes ", -1)
          ])]),
          _: 1
        })) : c("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Ga = /* @__PURE__ */ A(Fa, [["__scopeId", "data-v-6ce9a41c"]]), Pa = {
  key: 0,
  class: "resolve-section"
}, Ha = { class: "resolve-card success-card" }, Ka = { class: "items-list" }, ja = { class: "item-info" }, qa = { class: "item-name" }, Ya = {
  key: 0,
  class: "item-meta"
}, Ja = { class: "match-type" }, Za = { class: "source" }, Xa = {
  key: 1,
  class: "resolve-section"
}, Qa = { class: "resolve-card warning-card" }, en = { class: "items-list" }, tn = { class: "item-info" }, on = { class: "item-name" }, an = { class: "item-meta" }, nn = { key: 0 }, sn = { key: 1 }, ln = {
  key: 0,
  class: "item-warning"
}, rn = {
  key: 0,
  class: "item-action"
}, cn = ["onClick"], dn = {
  key: 2,
  class: "resolve-section"
}, un = { class: "info-text" }, mn = { class: "actions-summary" }, vn = { class: "summary-list" }, fn = { key: 0 }, gn = { key: 1 }, hn = { key: 2 }, pn = {
  key: 0,
  class: "estimated-size"
}, yn = /* @__PURE__ */ O({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh"],
  setup(e, { emit: l }) {
    const n = e, r = l, { resolveWorkflow: d, installWorkflowDeps: x } = fe(), p = E(null), b = E(!1), m = E(!1), k = E(null), R = B(() => {
      var C;
      return p.value ? ((C = p.value.download_results) == null ? void 0 : C.every((v) => v.can_download)) ?? !1 : !1;
    });
    async function _() {
      b.value = !0, k.value = null;
      try {
        p.value = await d(n.workflowName);
      } catch (C) {
        k.value = C instanceof Error ? C.message : "Failed to analyze workflow";
      } finally {
        b.value = !1;
      }
    }
    function M(C) {
      return !C.possible_matches || C.possible_matches.length === 0 ? null : C.possible_matches.reduce(
        (v, w) => w.match_confidence > v.match_confidence ? w : v
      );
    }
    function H(C) {
      return C >= 0.9 ? "high" : C >= 0.7 ? "medium" : "low";
    }
    function J(C) {
      const v = M(C);
      return v ? v.package_id.startsWith("http") ? "GitHub" : "ComfyUI Registry" : "Unknown";
    }
    function P(C) {
      var v, w;
      return (w = (v = p.value) == null ? void 0 : v.download_results) == null ? void 0 : w.find((h) => h.model === C);
    }
    function D(C) {
      const v = P(C);
      return (v == null ? void 0 : v.can_download) ?? !1;
    }
    function S(C) {
      const v = P(C);
      return (v == null ? void 0 : v.source_url) || null;
    }
    function N(C) {
      window.open(C, "_blank");
    }
    async function G() {
      if (!(!p.value || m.value)) {
        m.value = !0, k.value = null;
        try {
          await x(
            n.workflowName,
            p.value.nodes_to_install,
            []
          ), r("install"), r("refresh"), r("close");
        } catch (C) {
          k.value = C instanceof Error ? C.message : "Installation failed";
        } finally {
          m.value = !1;
        }
      }
    }
    async function y() {
      if (!(!p.value || m.value)) {
        m.value = !0, k.value = null;
        try {
          await x(
            n.workflowName,
            p.value.nodes_to_install,
            p.value.models_to_download
          ), r("install"), r("refresh"), r("close");
        } catch (C) {
          k.value = C instanceof Error ? C.message : "Installation failed";
        } finally {
          m.value = !1;
        }
      }
    }
    return re(_), (C, v) => (t(), g(Pe, {
      title: `RESOLVE DEPENDENCIES: ${e.workflowName}`,
      size: "lg",
      loading: b.value,
      error: k.value || void 0,
      onClose: v[1] || (v[1] = (w) => r("close"))
    }, {
      body: a(() => [
        p.value ? (t(), s(F, { key: 0 }, [
          v[5] || (v[5] = o("div", { class: "intro-message" }, " This workflow needs the following to work: ", -1)),
          p.value.nodes_unresolved.length > 0 ? (t(), s("section", Pa, [
            i(Ce, { variant: "section" }, {
              default: a(() => [
                f("NODES (" + u(p.value.nodes_unresolved.length) + ")", 1)
              ]),
              _: 1
            }),
            o("div", Ha, [
              v[2] || (v[2] = o("div", { class: "card-header" }, [
                o("span", { class: "status-icon" }, "✓"),
                o("span", { class: "card-title" }, "Can install automatically")
              ], -1)),
              o("div", Ka, [
                (t(!0), s(F, null, Z(p.value.nodes_unresolved, (w) => {
                  var h;
                  return t(), s("div", {
                    key: w.node_type,
                    class: "item"
                  }, [
                    o("div", ja, [
                      o("div", qa, u(((h = M(w)) == null ? void 0 : h.package_id) || w.node_type), 1),
                      M(w) ? (t(), s("div", Ya, [
                        o("span", {
                          class: K(["confidence-badge", H(M(w).match_confidence)])
                        }, u(Math.round(M(w).match_confidence * 100)) + "% match ", 3),
                        o("span", Ja, u(M(w).match_type), 1),
                        o("span", Za, "Source: " + u(J(w)), 1)
                      ])) : c("", !0)
                    ])
                  ]);
                }), 128))
              ])
            ])
          ])) : c("", !0),
          p.value.models_unresolved.length > 0 ? (t(), s("section", Xa, [
            i(Ce, { variant: "section" }, {
              default: a(() => [
                f("MODELS (" + u(p.value.models_unresolved.length) + ")", 1)
              ]),
              _: 1
            }),
            o("div", Qa, [
              v[3] || (v[3] = o("div", { class: "card-header" }, [
                o("span", { class: "status-icon" }, "⚠"),
                o("span", { class: "card-title" }, "Manual download required")
              ], -1)),
              o("div", en, [
                (t(!0), s(F, null, Z(p.value.models_unresolved, (w) => (t(), s("div", {
                  key: w.filename,
                  class: "item"
                }, [
                  o("div", tn, [
                    o("div", on, u(w.filename), 1),
                    o("div", an, [
                      w.expected_category ? (t(), s("span", nn, "Type: " + u(w.expected_category), 1)) : c("", !0),
                      P(w.filename) ? (t(), s("span", sn, " Size: ~" + u(P(w.filename).estimated_size_mb) + " MB ", 1)) : c("", !0)
                    ]),
                    D(w.filename) ? c("", !0) : (t(), s("div", ln, " No auto-download source configured "))
                  ]),
                  S(w.filename) ? (t(), s("div", rn, [
                    o("button", {
                      class: "link-btn",
                      onClick: (h) => N(S(w.filename))
                    }, " Open Source ↗ ", 8, cn)
                  ])) : c("", !0)
                ]))), 128))
              ])
            ])
          ])) : c("", !0),
          p.value.nodes_resolved.length > 0 || p.value.models_resolved.length > 0 ? (t(), s("section", dn, [
            i(Ce, { variant: "section" }, {
              default: a(() => [
                f(" ALREADY AVAILABLE (" + u(p.value.nodes_resolved.length + p.value.models_resolved.length) + ") ", 1)
              ]),
              _: 1
            }),
            o("div", un, u(p.value.nodes_resolved.length) + " nodes and " + u(p.value.models_resolved.length) + " models are already installed ", 1)
          ])) : c("", !0),
          o("div", mn, [
            v[4] || (v[4] = o("div", { class: "summary-title" }, "This will:", -1)),
            o("ol", vn, [
              p.value.nodes_to_install.length ? (t(), s("li", fn, " Install " + u(p.value.nodes_to_install.length) + " nodes (~" + u(p.value.estimated_time_seconds) + "s) ", 1)) : c("", !0),
              p.value.nodes_to_install.length ? (t(), s("li", gn, " Restart ComfyUI to load new nodes ")) : c("", !0),
              p.value.models_to_download.length ? (t(), s("li", hn, " You'll still need to download " + u(p.value.models_to_download.length) + " model(s) manually ", 1)) : c("", !0)
            ]),
            p.value.estimated_size_mb ? (t(), s("div", pn, " Estimated download: " + u(p.value.estimated_size_mb) + " MB ", 1)) : c("", !0)
          ])
        ], 64)) : c("", !0)
      ]),
      footer: a(() => [
        i(de, {
          variant: "secondary",
          onClick: v[0] || (v[0] = (w) => r("close"))
        }, {
          default: a(() => [...v[6] || (v[6] = [
            f(" Cancel ", -1)
          ])]),
          _: 1
        }),
        p.value && p.value.nodes_to_install.length && p.value.models_to_download.length ? (t(), g(de, {
          key: 0,
          variant: "secondary",
          disabled: m.value,
          loading: m.value,
          onClick: G
        }, {
          default: a(() => [...v[7] || (v[7] = [
            f(" Install Nodes Only ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : c("", !0),
        p.value && (p.value.nodes_to_install.length || p.value.models_to_download.length) ? (t(), g(de, {
          key: 1,
          variant: "primary",
          disabled: m.value || p.value.models_to_download.length > 0 && !R.value,
          loading: m.value,
          onClick: y
        }, {
          default: a(() => [...v[8] || (v[8] = [
            f(" Install All ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : c("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), bn = /* @__PURE__ */ A(yn, [["__scopeId", "data-v-d68efb14"]]), wn = { class: "search-input-wrapper" }, kn = ["value", "placeholder"], _n = /* @__PURE__ */ O({
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
    const n = e, r = l, d = E(null);
    let x;
    function p(m) {
      const k = m.target.value;
      n.debounce > 0 ? (clearTimeout(x), x = window.setTimeout(() => {
        r("update:modelValue", k);
      }, n.debounce)) : r("update:modelValue", k);
    }
    function b() {
      var m;
      r("update:modelValue", ""), r("clear"), (m = d.value) == null || m.focus();
    }
    return re(() => {
      n.autoFocus && d.value && d.value.focus();
    }), (m, k) => (t(), s("div", wn, [
      o("input", {
        ref_key: "inputRef",
        ref: d,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: p,
        onKeyup: we(b, ["escape"])
      }, null, 40, kn),
      e.clearable && e.modelValue ? (t(), s("button", {
        key: 0,
        class: "clear-button",
        onClick: b,
        title: "Clear search"
      }, " ✕ ")) : c("", !0)
    ]));
  }
}), $n = /* @__PURE__ */ A(_n, [["__scopeId", "data-v-266f857a"]]), Cn = { class: "search-bar" }, xn = /* @__PURE__ */ O({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (l, n) => (t(), s("div", Cn, [
      i($n, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": n[0] || (n[0] = (r) => l.$emit("update:modelValue", r)),
        onClear: n[1] || (n[1] = (r) => l.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), Ue = /* @__PURE__ */ A(xn, [["__scopeId", "data-v-3d51bbfd"]]), In = { class: "section-group" }, Sn = {
  key: 0,
  class: "section-content"
}, En = /* @__PURE__ */ O({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(e, { emit: l }) {
    const n = e, r = l, d = E(n.initiallyExpanded);
    function x() {
      n.collapsible && (d.value = !d.value, r("toggle", d.value));
    }
    return (p, b) => (t(), s("section", In, [
      i(Fe, {
        count: e.count,
        clickable: e.collapsible,
        expanded: d.value,
        onClick: x
      }, {
        default: a(() => [
          f(u(e.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !e.collapsible || d.value ? (t(), s("div", Sn, [
        Y(p.$slots, "default", {}, void 0, !0)
      ])) : c("", !0)
    ]));
  }
}), ne = /* @__PURE__ */ A(En, [["__scopeId", "data-v-c48e33ed"]]), Ln = { class: "item-header" }, Rn = {
  key: 0,
  class: "item-icon"
}, zn = { class: "item-info" }, Nn = {
  key: 0,
  class: "item-title"
}, Un = {
  key: 1,
  class: "item-subtitle"
}, Mn = {
  key: 0,
  class: "item-details"
}, Dn = {
  key: 1,
  class: "item-actions"
}, Vn = /* @__PURE__ */ O({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: l }) {
    const n = e, r = B(() => n.status ? `status-${n.status}` : "");
    return (d, x) => (t(), s("div", {
      class: K(["item-card", { clickable: e.clickable, compact: e.compact }, r.value]),
      onClick: x[0] || (x[0] = (p) => e.clickable && d.$emit("click"))
    }, [
      o("div", Ln, [
        d.$slots.icon ? (t(), s("span", Rn, [
          Y(d.$slots, "icon", {}, void 0, !0)
        ])) : c("", !0),
        o("div", zn, [
          d.$slots.title ? (t(), s("div", Nn, [
            Y(d.$slots, "title", {}, void 0, !0)
          ])) : c("", !0),
          d.$slots.subtitle ? (t(), s("div", Un, [
            Y(d.$slots, "subtitle", {}, void 0, !0)
          ])) : c("", !0)
        ])
      ]),
      d.$slots.details ? (t(), s("div", Mn, [
        Y(d.$slots, "details", {}, void 0, !0)
      ])) : c("", !0),
      d.$slots.actions ? (t(), s("div", Dn, [
        Y(d.$slots, "actions", {}, void 0, !0)
      ])) : c("", !0)
    ], 2));
  }
}), ce = /* @__PURE__ */ A(Vn, [["__scopeId", "data-v-cc435e0e"]]), Bn = { class: "loading-state" }, Tn = { class: "loading-message" }, On = /* @__PURE__ */ O({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (l, n) => (t(), s("div", Bn, [
      n[0] || (n[0] = o("div", { class: "spinner" }, null, -1)),
      o("p", Tn, u(e.message), 1)
    ]));
  }
}), ke = /* @__PURE__ */ A(On, [["__scopeId", "data-v-ad8436c9"]]), An = { class: "error-state" }, Wn = { class: "error-message" }, Fn = /* @__PURE__ */ O({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (l, n) => (t(), s("div", An, [
      n[2] || (n[2] = o("span", { class: "error-icon" }, "⚠", -1)),
      o("p", Wn, u(e.message), 1),
      e.retry ? (t(), g(V, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (r) => l.$emit("retry"))
      }, {
        default: a(() => [...n[1] || (n[1] = [
          f(" Retry ", -1)
        ])]),
        _: 1
      })) : c("", !0)
    ]));
  }
}), _e = /* @__PURE__ */ A(Fn, [["__scopeId", "data-v-5397be48"]]), Gn = /* @__PURE__ */ O({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { emit: l }) {
    const n = l, { getWorkflows: r } = fe(), d = E([]), x = E(!1), p = E(null), b = E(""), m = E(!1), k = E(!1), R = E(!1), _ = E(!1), M = E(null), H = B(
      () => d.value.filter((z) => z.status === "broken")
    ), J = B(
      () => d.value.filter((z) => z.status === "new")
    ), P = B(
      () => d.value.filter((z) => z.status === "modified")
    ), D = B(
      () => d.value.filter((z) => z.status === "synced")
    ), S = B(() => {
      if (!b.value.trim()) return d.value;
      const z = b.value.toLowerCase();
      return d.value.filter((L) => L.name.toLowerCase().includes(z));
    }), N = B(
      () => H.value.filter(
        (z) => !b.value.trim() || z.name.toLowerCase().includes(b.value.toLowerCase())
      )
    ), G = B(
      () => J.value.filter(
        (z) => !b.value.trim() || z.name.toLowerCase().includes(b.value.toLowerCase())
      )
    ), y = B(
      () => P.value.filter(
        (z) => !b.value.trim() || z.name.toLowerCase().includes(b.value.toLowerCase())
      )
    ), C = B(
      () => D.value.filter(
        (z) => !b.value.trim() || z.name.toLowerCase().includes(b.value.toLowerCase())
      )
    ), v = B(
      () => k.value ? C.value : C.value.slice(0, 5)
    );
    async function w() {
      x.value = !0, p.value = null;
      try {
        d.value = await r();
      } catch (z) {
        p.value = z instanceof Error ? z.message : "Failed to load workflows";
      } finally {
        x.value = !1;
      }
    }
    function h(z) {
      M.value = z, R.value = !0;
    }
    function I(z) {
      M.value = z, _.value = !0;
    }
    function U() {
      alert("Bulk resolution not yet implemented");
    }
    function ie() {
      n("refresh");
    }
    return re(w), (z, L) => (t(), s(F, null, [
      i(ge, null, {
        header: a(() => [
          i(he, { title: "WORKFLOWS" }, {
            actions: a(() => [
              H.value.length > 0 ? (t(), g(V, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: U
              }, {
                default: a(() => [...L[7] || (L[7] = [
                  f(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : c("", !0)
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          i(Ue, {
            modelValue: b.value,
            "onUpdate:modelValue": L[0] || (L[0] = (j) => b.value = j),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          x.value ? (t(), g(ke, {
            key: 0,
            message: "Loading workflows..."
          })) : p.value ? (t(), g(_e, {
            key: 1,
            message: p.value,
            retry: !0,
            onRetry: w
          }, null, 8, ["message"])) : (t(), s(F, { key: 2 }, [
            N.value.length ? (t(), g(ne, {
              key: 0,
              title: "BROKEN",
              count: N.value.length
            }, {
              default: a(() => [
                (t(!0), s(F, null, Z(N.value, (j) => (t(), g(ce, {
                  key: j.name,
                  status: "broken"
                }, {
                  icon: a(() => [...L[8] || (L[8] = [
                    f("⚠", -1)
                  ])]),
                  title: a(() => [
                    f(u(j.name), 1)
                  ]),
                  subtitle: a(() => [
                    f(" Missing: " + u(j.missing_nodes) + " nodes, " + u(j.missing_models) + " models ", 1)
                  ]),
                  actions: a(() => [
                    i(V, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ue) => I(j.name)
                    }, {
                      default: a(() => [...L[9] || (L[9] = [
                        f(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    i(V, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ue) => h(j.name)
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
            }, 8, ["count"])) : c("", !0),
            G.value.length ? (t(), g(ne, {
              key: 1,
              title: "NEW",
              count: G.value.length
            }, {
              default: a(() => [
                (t(!0), s(F, null, Z(G.value, (j) => (t(), g(ce, {
                  key: j.name,
                  status: "new"
                }, {
                  icon: a(() => [...L[11] || (L[11] = [
                    f("●", -1)
                  ])]),
                  title: a(() => [
                    f(u(j.name), 1)
                  ]),
                  subtitle: a(() => [...L[12] || (L[12] = [
                    f("✓ Ready", -1)
                  ])]),
                  actions: a(() => [
                    i(V, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ue) => h(j.name)
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
            }, 8, ["count"])) : c("", !0),
            y.value.length ? (t(), g(ne, {
              key: 2,
              title: "MODIFIED",
              count: y.value.length
            }, {
              default: a(() => [
                (t(!0), s(F, null, Z(y.value, (j) => (t(), g(ce, {
                  key: j.name,
                  status: "modified"
                }, {
                  icon: a(() => [...L[14] || (L[14] = [
                    f("⚡", -1)
                  ])]),
                  title: a(() => [
                    f(u(j.name), 1)
                  ]),
                  subtitle: a(() => [...L[15] || (L[15] = [
                    f("✓ Ready", -1)
                  ])]),
                  actions: a(() => [
                    i(V, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ue) => h(j.name)
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
            }, 8, ["count"])) : c("", !0),
            C.value.length ? (t(), g(ne, {
              key: 3,
              title: "SYNCED",
              count: C.value.length,
              collapsible: !0,
              "initially-expanded": m.value,
              onToggle: L[2] || (L[2] = (j) => m.value = j)
            }, {
              default: a(() => [
                (t(!0), s(F, null, Z(v.value, (j) => (t(), g(ce, {
                  key: j.name,
                  status: "synced"
                }, {
                  icon: a(() => [...L[17] || (L[17] = [
                    f("✓", -1)
                  ])]),
                  title: a(() => [
                    f(u(j.name), 1)
                  ]),
                  subtitle: a(() => [...L[18] || (L[18] = [
                    f("✓ Ready", -1)
                  ])]),
                  actions: a(() => [
                    i(V, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ue) => h(j.name)
                    }, {
                      default: a(() => [...L[19] || (L[19] = [
                        f(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128)),
                !k.value && C.value.length > 5 ? (t(), g(V, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: L[1] || (L[1] = (j) => k.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: a(() => [
                    f(" View all " + u(C.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : c("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : c("", !0),
            S.value.length ? c("", !0) : (t(), g(ve, {
              key: 4,
              icon: "📭",
              message: b.value ? `No workflows match '${b.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      R.value && M.value ? (t(), g(Ga, {
        key: 0,
        "workflow-name": M.value,
        onClose: L[3] || (L[3] = (j) => R.value = !1),
        onResolve: L[4] || (L[4] = (j) => I(M.value))
      }, null, 8, ["workflow-name"])) : c("", !0),
      _.value && M.value ? (t(), g(bn, {
        key: 1,
        "workflow-name": M.value,
        onClose: L[5] || (L[5] = (j) => _.value = !1),
        onInstall: ie,
        onRefresh: L[6] || (L[6] = (j) => n("refresh"))
      }, null, 8, ["workflow-name"])) : c("", !0)
    ], 64));
  }
}), Pn = /* @__PURE__ */ A(Gn, [["__scopeId", "data-v-2251d776"]]), Hn = /* @__PURE__ */ O({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (l, n) => (t(), s("span", {
      class: K(["detail-label"]),
      style: nt({ minWidth: e.minWidth })
    }, [
      Y(l.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), Kn = /* @__PURE__ */ A(Hn, [["__scopeId", "data-v-75e9eeb8"]]), jn = /* @__PURE__ */ O({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (l, n) => (t(), s("span", {
      class: K(["detail-value", e.variant, { mono: e.mono, truncate: e.truncate }])
    }, [
      Y(l.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), We = /* @__PURE__ */ A(jn, [["__scopeId", "data-v-2f186e4c"]]), qn = { class: "detail-row" }, Yn = /* @__PURE__ */ O({
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
    return (l, n) => (t(), s("div", qn, [
      i(Kn, { "min-width": e.labelMinWidth }, {
        default: a(() => [
          f(u(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (t(), g(We, {
        key: 0,
        mono: e.mono,
        variant: e.valueVariant,
        truncate: e.truncate
      }, {
        default: a(() => [
          f(u(e.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : Y(l.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), ee = /* @__PURE__ */ A(Yn, [["__scopeId", "data-v-ef15664a"]]), Jn = /* @__PURE__ */ O({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(e) {
    return (l, n) => (t(), s("div", {
      class: K(["summary-bar", e.variant])
    }, [
      Y(l.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), xe = /* @__PURE__ */ A(Jn, [["__scopeId", "data-v-ccb7816e"]]), Zn = { class: "popover-header" }, Xn = { class: "popover-title" }, Qn = { class: "popover-content" }, es = {
  key: 0,
  class: "popover-actions"
}, ts = /* @__PURE__ */ O({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(e) {
    return (l, n) => (t(), g(ct, { to: "body" }, [
      e.show ? (t(), s("div", {
        key: 0,
        class: "popover-overlay",
        onClick: n[2] || (n[2] = (r) => l.$emit("close"))
      }, [
        o("div", {
          class: "popover",
          style: nt({ maxWidth: e.maxWidth }),
          onClick: n[1] || (n[1] = Ne(() => {
          }, ["stop"]))
        }, [
          o("div", Zn, [
            o("h4", Xn, u(e.title), 1),
            o("button", {
              class: "popover-close",
              onClick: n[0] || (n[0] = (r) => l.$emit("close"))
            }, "✕")
          ]),
          o("div", Qn, [
            Y(l.$slots, "content", {}, void 0, !0)
          ]),
          l.$slots.actions ? (t(), s("div", es, [
            Y(l.$slots, "actions", {}, void 0, !0)
          ])) : c("", !0)
        ], 4)
      ])) : c("", !0)
    ]));
  }
}), Re = /* @__PURE__ */ A(ts, [["__scopeId", "data-v-057df510"]]), os = /* @__PURE__ */ O({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: l }) {
    const n = l, { getEnvironmentModels: r, getStatus: d } = fe(), x = E([]), p = E([]), b = E("production"), m = E(!1), k = E(null), R = E(""), _ = E(!1);
    function M() {
      _.value = !1, n("navigate", "model-index");
    }
    const H = B(
      () => x.value.reduce((h, I) => h + (I.size_mb || I.size || 0), 0)
    ), J = B(() => {
      if (!R.value.trim()) return x.value;
      const h = R.value.toLowerCase();
      return x.value.filter((I) => I.filename.toLowerCase().includes(h));
    }), P = B(() => {
      if (!R.value.trim()) return p.value;
      const h = R.value.toLowerCase();
      return p.value.filter((I) => I.filename.toLowerCase().includes(h));
    }), D = B(
      () => J.value.filter((h) => h.type === "checkpoints" || h.category === "checkpoints")
    ), S = B(
      () => J.value.filter((h) => h.type === "loras" || h.category === "loras")
    ), N = B(
      () => J.value.filter(
        (h) => h.type !== "checkpoints" && h.category !== "checkpoints" && h.type !== "loras" && h.category !== "loras"
      )
    );
    function G(h) {
      return h ? h >= 1024 ? `${(h / 1024).toFixed(1)} GB` : `${h.toFixed(0)} MB` : "Unknown";
    }
    function y(h) {
      n("navigate", "model-index");
    }
    function C(h) {
      n("navigate", "model-index");
    }
    function v(h) {
      alert(`Download functionality not yet implemented for ${h}`);
    }
    async function w() {
      m.value = !0, k.value = null;
      try {
        const h = await r();
        x.value = h, p.value = [];
        const I = await d();
        b.value = I.environment || "production";
      } catch (h) {
        k.value = h instanceof Error ? h.message : "Failed to load models";
      } finally {
        m.value = !1;
      }
    }
    return re(w), (h, I) => (t(), s(F, null, [
      i(ge, null, {
        header: a(() => [
          i(he, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: I[0] || (I[0] = (U) => _.value = !0)
          })
        ]),
        search: a(() => [
          i(Ue, {
            modelValue: R.value,
            "onUpdate:modelValue": I[1] || (I[1] = (U) => R.value = U),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          m.value ? (t(), g(ke, {
            key: 0,
            message: "Loading environment models..."
          })) : k.value ? (t(), g(_e, {
            key: 1,
            message: k.value,
            retry: !0,
            onRetry: w
          }, null, 8, ["message"])) : (t(), s(F, { key: 2 }, [
            x.value.length ? (t(), g(xe, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                f(" Total: " + u(x.value.length) + " models • " + u(G(H.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : c("", !0),
            D.value.length ? (t(), g(ne, {
              key: 1,
              title: "CHECKPOINTS",
              count: D.value.length
            }, {
              default: a(() => [
                (t(!0), s(F, null, Z(D.value, (U) => (t(), g(ce, {
                  key: U.sha256 || U.hash || U.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...I[3] || (I[3] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(u(U.filename), 1)
                  ]),
                  subtitle: a(() => [
                    f(u(G(U.size_mb || U.size)), 1)
                  ]),
                  details: a(() => [
                    i(ee, {
                      label: "Used by:",
                      value: (U.used_by || U.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    i(ee, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: a(() => [
                    i(V, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ie) => y(U.sha256 || U.sha256_hash || U.hash || "")
                    }, {
                      default: a(() => [...I[4] || (I[4] = [
                        f(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            S.value.length ? (t(), g(ne, {
              key: 2,
              title: "LORAS",
              count: S.value.length
            }, {
              default: a(() => [
                (t(!0), s(F, null, Z(S.value, (U) => (t(), g(ce, {
                  key: U.sha256 || U.hash || U.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...I[5] || (I[5] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(u(U.filename), 1)
                  ]),
                  subtitle: a(() => [
                    f(u(G(U.size_mb || U.size)), 1)
                  ]),
                  details: a(() => [
                    i(ee, {
                      label: "Used by:",
                      value: (U.used_by || U.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    i(ee, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: a(() => [
                    i(V, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ie) => y(U.sha256 || U.sha256_hash || U.hash || "")
                    }, {
                      default: a(() => [...I[6] || (I[6] = [
                        f(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            N.value.length ? (t(), g(ne, {
              key: 3,
              title: "OTHER",
              count: N.value.length
            }, {
              default: a(() => [
                (t(!0), s(F, null, Z(N.value, (U) => (t(), g(ce, {
                  key: U.sha256 || U.hash || U.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...I[7] || (I[7] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(u(U.filename), 1)
                  ]),
                  subtitle: a(() => [
                    f(u(G(U.size_mb || U.size)), 1)
                  ]),
                  details: a(() => [
                    i(ee, {
                      label: "Type:",
                      value: U.type
                    }, null, 8, ["value"]),
                    i(ee, {
                      label: "Used by:",
                      value: (U.used_by || U.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    i(V, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ie) => y(U.sha256 || U.sha256_hash || U.hash || "")
                    }, {
                      default: a(() => [...I[8] || (I[8] = [
                        f(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            P.value.length ? (t(), g(ne, {
              key: 4,
              title: "MISSING",
              count: P.value.length
            }, {
              default: a(() => [
                (t(!0), s(F, null, Z(P.value, (U) => (t(), g(ce, {
                  key: U.filename,
                  status: "broken"
                }, {
                  icon: a(() => [...I[9] || (I[9] = [
                    f("⚠", -1)
                  ])]),
                  title: a(() => [
                    f(u(U.filename), 1)
                  ]),
                  subtitle: a(() => [...I[10] || (I[10] = [
                    o("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: a(() => {
                    var ie;
                    return [
                      i(ee, {
                        label: "Required by:",
                        value: ((ie = U.workflow_names) == null ? void 0 : ie.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: a(() => [
                    i(V, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ie) => v(U.filename)
                    }, {
                      default: a(() => [...I[11] || (I[11] = [
                        f(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    i(V, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ie) => C(U.filename)
                    }, {
                      default: a(() => [...I[12] || (I[12] = [
                        f(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !J.value.length && !P.value.length ? (t(), g(ve, {
              key: 5,
              icon: "📭",
              message: R.value ? `No models match '${R.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      i(Re, {
        show: _.value,
        title: "About Environment Models",
        onClose: I[2] || (I[2] = (U) => _.value = !1)
      }, {
        content: a(() => [
          o("p", null, [
            I[13] || (I[13] = f(" These are models currently used by workflows in ", -1)),
            o("strong", null, '"' + u(b.value) + '"', 1),
            I[14] || (I[14] = f(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: a(() => [
          i(V, {
            variant: "primary",
            onClick: M
          }, {
            default: a(() => [...I[15] || (I[15] = [
              f(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), as = /* @__PURE__ */ A(os, [["__scopeId", "data-v-865641a4"]]), ns = /* @__PURE__ */ O({
  __name: "ModelIndexSection",
  setup(e) {
    const { getWorkspaceModels: l } = fe(), n = E([]), r = E(!1), d = E(null), x = E(""), p = E(!1), b = B(
      () => n.value.reduce((v, w) => v + (w.size_mb || w.size || 0), 0)
    ), m = B(() => {
      const v = /* @__PURE__ */ new Set();
      return n.value.forEach((w) => {
        w.used_in_environments && w.used_in_environments.length > 0 && w.used_in_environments.forEach((h) => v.add(h.env_name));
      }), v.size;
    }), k = B(() => {
      if (!x.value.trim()) return n.value;
      const v = x.value.toLowerCase();
      return n.value.filter((w) => {
        const h = w, I = w.sha256 || h.sha256_hash || "";
        return w.filename.toLowerCase().includes(v) || I.toLowerCase().includes(v);
      });
    }), R = B(
      () => k.value.filter((v) => v.type === "checkpoints")
    ), _ = B(
      () => k.value.filter((v) => v.type === "loras")
    ), M = B(
      () => k.value.filter((v) => v.type !== "checkpoints" && v.type !== "loras")
    );
    function H(v) {
      return v ? v >= 1024 ? `${(v / 1024).toFixed(1)} GB` : `${v.toFixed(0)} MB` : "Unknown";
    }
    function J(v) {
      const w = v, h = v.used_in_workflows || w.used_by || [];
      return !h || h.length === 0 ? "Not used" : `${h.length} workflow(s)`;
    }
    function P(v) {
      navigator.clipboard.writeText(v), alert("Hash copied to clipboard");
    }
    function D(v) {
      prompt("Enter model source URL:", v.source_url || "") !== null && alert("URL update not yet implemented");
    }
    function S(v) {
      const w = v, h = v.used_in_workflows || w.used_by || [], I = h && h.length > 0 ? `

⚠ WARNING: This model is used by ${h.length} workflow(s):
${h.join(", ")}

Deleting will break these workflows!` : "";
      confirm(
        `Delete ${v.filename}?${I}

This will free ${H(w.size_mb || v.size)} of space.`
      ) && alert("Model deletion not yet implemented");
    }
    function N() {
      alert("Scan for models not yet implemented");
    }
    function G() {
      alert("Change directory not yet implemented");
    }
    function y() {
      alert("Download new model not yet implemented");
    }
    async function C() {
      r.value = !0, d.value = null;
      try {
        n.value = await l(), console.log("Loaded models:", n.value), console.log("Filtered checkpoints:", R.value), console.log("Filtered loras:", _.value), console.log("Filtered other:", M.value);
      } catch (v) {
        d.value = v instanceof Error ? v.message : "Failed to load workspace models";
      } finally {
        r.value = !1;
      }
    }
    return re(C), (v, w) => (t(), s(F, null, [
      i(ge, null, {
        header: a(() => [
          i(he, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: w[0] || (w[0] = (h) => p.value = !0)
          }, {
            actions: a(() => [
              i(V, {
                variant: "primary",
                size: "sm",
                onClick: N
              }, {
                default: a(() => [...w[3] || (w[3] = [
                  f(" Scan for Models ", -1)
                ])]),
                _: 1
              }),
              i(V, {
                variant: "primary",
                size: "sm",
                onClick: G
              }, {
                default: a(() => [...w[4] || (w[4] = [
                  f(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              i(V, {
                variant: "primary",
                size: "sm",
                onClick: y
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
          i(Ue, {
            modelValue: x.value,
            "onUpdate:modelValue": w[1] || (w[1] = (h) => x.value = h),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          r.value ? (t(), g(ke, {
            key: 0,
            message: "Loading workspace models..."
          })) : d.value ? (t(), g(_e, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: C
          }, null, 8, ["message"])) : (t(), s(F, { key: 2 }, [
            n.value.length ? (t(), g(xe, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                f(" Total: " + u(n.value.length) + " models • " + u(H(b.value)) + " • Used in " + u(m.value) + " environments ", 1)
              ]),
              _: 1
            })) : c("", !0),
            R.value.length ? (t(), g(ne, {
              key: 1,
              title: "CHECKPOINTS",
              count: R.value.length
            }, {
              default: a(() => [
                (t(!0), s(F, null, Z(R.value, (h) => (t(), g(ce, {
                  key: h.sha256 || h.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...w[6] || (w[6] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(u(h.filename), 1)
                  ]),
                  subtitle: a(() => [
                    f(u(H(h.size_mb || h.size)), 1)
                  ]),
                  details: a(() => {
                    var I, U;
                    return [
                      h.sha256 || h.sha256_hash ? (t(), g(ee, {
                        key: 0,
                        label: "SHA256:",
                        value: (h.sha256 || h.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : c("", !0),
                      i(ee, {
                        label: "Used in:",
                        value: J(h)
                      }, null, 8, ["value"]),
                      h.source_url || (I = h.sources) != null && I[0] ? (t(), g(ee, {
                        key: 1,
                        label: "Source URL:",
                        value: h.source_url || ((U = h.sources) == null ? void 0 : U[0])
                      }, null, 8, ["value"])) : (t(), g(ee, {
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
                    i(V, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (I) => D(h)
                    }, {
                      default: a(() => [...w[8] || (w[8] = [
                        f(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    h.sha256 || h.sha256_hash ? (t(), g(V, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (I) => P(h.sha256 || h.sha256_hash)
                    }, {
                      default: a(() => [...w[9] || (w[9] = [
                        f(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    i(V, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (I) => S(h)
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
            }, 8, ["count"])) : c("", !0),
            _.value.length ? (t(), g(ne, {
              key: 2,
              title: "LORAS",
              count: _.value.length
            }, {
              default: a(() => [
                (t(!0), s(F, null, Z(_.value, (h) => (t(), g(ce, {
                  key: h.sha256 || h.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...w[11] || (w[11] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(u(h.filename), 1)
                  ]),
                  subtitle: a(() => [
                    f(u(H(h.size_mb || h.size)), 1)
                  ]),
                  details: a(() => {
                    var I, U;
                    return [
                      h.sha256 || h.sha256_hash ? (t(), g(ee, {
                        key: 0,
                        label: "SHA256:",
                        value: (h.sha256 || h.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : c("", !0),
                      i(ee, {
                        label: "Used in:",
                        value: J(h)
                      }, null, 8, ["value"]),
                      h.source_url || (I = h.sources) != null && I[0] ? (t(), g(ee, {
                        key: 1,
                        label: "Source URL:",
                        value: h.source_url || ((U = h.sources) == null ? void 0 : U[0])
                      }, null, 8, ["value"])) : (t(), g(ee, {
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
                    i(V, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (I) => D(h)
                    }, {
                      default: a(() => [...w[13] || (w[13] = [
                        f(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    h.sha256 || h.sha256_hash ? (t(), g(V, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (I) => P(h.sha256 || h.sha256_hash)
                    }, {
                      default: a(() => [...w[14] || (w[14] = [
                        f(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    i(V, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (I) => S(h)
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
            }, 8, ["count"])) : c("", !0),
            M.value.length ? (t(), g(ne, {
              key: 3,
              title: "OTHER",
              count: M.value.length
            }, {
              default: a(() => [
                (t(!0), s(F, null, Z(M.value, (h) => (t(), g(ce, {
                  key: h.sha256 || h.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...w[16] || (w[16] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(u(h.filename), 1)
                  ]),
                  subtitle: a(() => [
                    f(u(H(h.size_mb || h.size)), 1)
                  ]),
                  details: a(() => [
                    i(ee, {
                      label: "Type:",
                      value: h.type
                    }, null, 8, ["value"]),
                    h.sha256 || h.sha256_hash ? (t(), g(ee, {
                      key: 0,
                      label: "SHA256:",
                      value: (h.sha256 || h.sha256_hash).substring(0, 16) + "...",
                      mono: !0,
                      "value-variant": "hash"
                    }, null, 8, ["value"])) : c("", !0),
                    i(ee, {
                      label: "Used in:",
                      value: J(h)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    i(V, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (I) => D(h)
                    }, {
                      default: a(() => [...w[17] || (w[17] = [
                        f(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    h.sha256 || h.sha256_hash ? (t(), g(V, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (I) => P(h.sha256 || h.sha256_hash)
                    }, {
                      default: a(() => [...w[18] || (w[18] = [
                        f(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    i(V, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (I) => S(h)
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
            }, 8, ["count"])) : c("", !0),
            k.value.length ? c("", !0) : (t(), g(ve, {
              key: 4,
              icon: "📭",
              message: x.value ? `No models match '${x.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      i(Re, {
        show: p.value,
        title: "About Workspace Model Index",
        onClose: w[2] || (w[2] = (h) => p.value = !1)
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
}), ss = /* @__PURE__ */ A(ns, [["__scopeId", "data-v-5a24af01"]]), ls = { key: 0 }, rs = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, is = {
  key: 2,
  style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" }
}, cs = /* @__PURE__ */ O({
  __name: "NodesSection",
  setup(e) {
    const { getNodes: l, installNode: n, updateNode: r, uninstallNode: d } = fe(), x = E({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0
    }), p = E(!1), b = E(null), m = E(""), k = E(!1), R = B(() => {
      if (!m.value.trim()) return x.value.nodes;
      const y = m.value.toLowerCase();
      return x.value.nodes.filter(
        (C) => {
          var v, w;
          return C.name.toLowerCase().includes(y) || ((v = C.description) == null ? void 0 : v.toLowerCase().includes(y)) || ((w = C.repository) == null ? void 0 : w.toLowerCase().includes(y));
        }
      );
    }), _ = B(
      () => R.value.filter((y) => y.installed)
    ), M = B(
      () => R.value.filter((y) => !y.installed)
    );
    function H(y) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown"
      }[y] || y;
    }
    function J(y) {
      return !y.used_in_workflows || y.used_in_workflows.length === 0 ? "Not used in any workflows" : y.used_in_workflows.length === 1 ? y.used_in_workflows[0] : `${y.used_in_workflows.length} workflows`;
    }
    function P(y) {
      window.open(y, "_blank");
    }
    async function D(y) {
      if (confirm(`Install node "${y}"?

This will download and install the node from its repository.`))
        try {
          p.value = !0;
          const C = await n(y);
          C.status === "success" ? (alert(`Node "${y}" installed successfully!`), await G()) : alert(`Failed to install node: ${C.message || "Unknown error"}`);
        } catch (C) {
          alert(`Error installing node: ${C instanceof Error ? C.message : "Unknown error"}`);
        } finally {
          p.value = !1;
        }
    }
    async function S(y) {
      if (confirm(`Check for updates for "${y}"?`))
        try {
          p.value = !0;
          const C = await r(y);
          C.status === "success" ? (alert(`Node "${y}" is up to date or has been updated!`), await G()) : alert(`Update check failed: ${C.message || "Unknown error"}`);
        } catch (C) {
          alert(`Error checking for updates: ${C instanceof Error ? C.message : "Unknown error"}`);
        } finally {
          p.value = !1;
        }
    }
    async function N(y) {
      if (confirm(`Uninstall node "${y}"?

This will remove the node from this environment.`))
        try {
          p.value = !0;
          const C = await d(y);
          C.status === "success" ? (alert(`Node "${y}" uninstalled successfully!`), await G()) : alert(`Failed to uninstall node: ${C.message || "Unknown error"}`);
        } catch (C) {
          alert(`Error uninstalling node: ${C instanceof Error ? C.message : "Unknown error"}`);
        } finally {
          p.value = !1;
        }
    }
    async function G() {
      p.value = !0, b.value = null;
      try {
        x.value = await l();
      } catch (y) {
        b.value = y instanceof Error ? y.message : "Failed to load nodes";
      } finally {
        p.value = !1;
      }
    }
    return re(G), (y, C) => (t(), s(F, null, [
      i(ge, null, {
        header: a(() => [
          i(he, {
            title: "NODES (GIT-TRACKED)",
            "show-info": !0,
            onInfoClick: C[0] || (C[0] = (v) => k.value = !0)
          })
        ]),
        search: a(() => [
          i(Ue, {
            modelValue: m.value,
            "onUpdate:modelValue": C[1] || (C[1] = (v) => m.value = v),
            placeholder: "🔍 Search git-tracked custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          p.value ? (t(), g(ke, {
            key: 0,
            message: "Loading git-tracked nodes..."
          })) : b.value ? (t(), g(_e, {
            key: 1,
            message: b.value,
            retry: !0,
            onRetry: G
          }, null, 8, ["message"])) : (t(), s(F, { key: 2 }, [
            x.value.total_count ? (t(), g(xe, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                f(" Total: " + u(x.value.total_count) + " nodes • " + u(x.value.installed_count) + " installed • " + u(x.value.missing_count) + " missing ", 1)
              ]),
              _: 1
            })) : c("", !0),
            _.value.length ? (t(), g(ne, {
              key: 1,
              title: "INSTALLED",
              count: _.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: a(() => [
                (t(!0), s(F, null, Z(_.value, (v) => (t(), g(ce, {
                  key: v.name,
                  status: "synced"
                }, {
                  icon: a(() => [...C[4] || (C[4] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(u(v.name), 1)
                  ]),
                  subtitle: a(() => [
                    v.version ? (t(), s("span", ls, "v" + u(v.version), 1)) : (t(), s("span", rs, "version unknown")),
                    v.source ? (t(), s("span", is, " • " + u(H(v.source)), 1)) : c("", !0)
                  ]),
                  details: a(() => [
                    v.description ? (t(), g(ee, {
                      key: 0,
                      label: "Description:",
                      value: v.description
                    }, null, 8, ["value"])) : c("", !0),
                    v.repository ? (t(), g(ee, {
                      key: 1,
                      label: "Repository:",
                      value: v.repository
                    }, null, 8, ["value"])) : c("", !0),
                    i(ee, {
                      label: "Used by:",
                      value: J(v)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    v.repository ? (t(), g(V, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (w) => P(v.repository)
                    }, {
                      default: a(() => [...C[5] || (C[5] = [
                        f(" View Repository ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    v.source === "registry" ? (t(), g(V, {
                      key: 1,
                      variant: "secondary",
                      size: "xs",
                      onClick: (w) => S(v.name)
                    }, {
                      default: a(() => [...C[6] || (C[6] = [
                        f(" Check for Updates ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    v.source !== "unknown" ? (t(), g(V, {
                      key: 2,
                      variant: "destructive",
                      size: "xs",
                      onClick: (w) => N(v.name)
                    }, {
                      default: a(() => [...C[7] || (C[7] = [
                        f(" Uninstall ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            M.value.length ? (t(), g(ne, {
              key: 2,
              title: "MISSING",
              count: M.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: a(() => [
                (t(!0), s(F, null, Z(M.value, (v) => (t(), g(ce, {
                  key: v.name,
                  status: "missing"
                }, {
                  icon: a(() => [...C[8] || (C[8] = [
                    f("⚠", -1)
                  ])]),
                  title: a(() => [
                    f(u(v.name), 1)
                  ]),
                  subtitle: a(() => [...C[9] || (C[9] = [
                    o("span", { style: { color: "var(--cg-color-warning)" } }, "Not installed", -1)
                  ])]),
                  details: a(() => [
                    v.description ? (t(), g(ee, {
                      key: 0,
                      label: "Description:",
                      value: v.description
                    }, null, 8, ["value"])) : c("", !0),
                    v.repository ? (t(), g(ee, {
                      key: 1,
                      label: "Repository:",
                      value: v.repository
                    }, null, 8, ["value"])) : c("", !0),
                    i(ee, {
                      label: "Required by:",
                      value: J(v)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    v.download_url ? (t(), g(V, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (w) => D(v.name)
                    }, {
                      default: a(() => [...C[10] || (C[10] = [
                        f(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0),
                    v.repository ? (t(), g(V, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (w) => P(v.repository)
                    }, {
                      default: a(() => [...C[11] || (C[11] = [
                        f(" View Repository ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : c("", !0)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !_.value.length && !M.value.length ? (t(), g(ve, {
              key: 3,
              icon: "📭",
              message: m.value ? `No nodes match '${m.value}'` : "No git-tracked nodes found."
            }, null, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      i(Re, {
        show: k.value,
        title: "About Git-Tracked Nodes",
        onClose: C[3] || (C[3] = (v) => k.value = !1)
      }, {
        content: a(() => [...C[12] || (C[12] = [
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
          i(V, {
            variant: "primary",
            onClick: C[2] || (C[2] = (v) => k.value = !1)
          }, {
            default: a(() => [...C[13] || (C[13] = [
              f(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), ds = /* @__PURE__ */ A(cs, [["__scopeId", "data-v-c480e2c1"]]), us = { class: "remote-url-display" }, ms = ["title"], vs = ["title"], fs = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, gs = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, hs = /* @__PURE__ */ O({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(e) {
    const l = e, n = E(!1), r = B(() => {
      if (l.url.length <= l.maxLength)
        return l.url;
      const x = l.url.slice(0, Math.floor(l.maxLength * 0.6)), p = l.url.slice(-Math.floor(l.maxLength * 0.3));
      return `${x}...${p}`;
    });
    async function d() {
      try {
        await navigator.clipboard.writeText(l.url), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (x) {
        console.error("Failed to copy URL:", x);
      }
    }
    return (x, p) => (t(), s("div", us, [
      o("span", {
        class: "url-text",
        title: e.url
      }, u(r.value), 9, ms),
      o("button", {
        class: K(["copy-btn", { copied: n.value }]),
        onClick: d,
        title: n.value ? "Copied!" : "Copy URL"
      }, [
        n.value ? (t(), s("svg", gs, [...p[1] || (p[1] = [
          o("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (t(), s("svg", fs, [...p[0] || (p[0] = [
          o("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          o("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, vs)
    ]));
  }
}), it = /* @__PURE__ */ A(hs, [["__scopeId", "data-v-7768a58d"]]), ps = { class: "remote-title" }, ys = {
  key: 0,
  class: "default-badge"
}, bs = {
  key: 1,
  class: "sync-badge"
}, ws = {
  key: 0,
  class: "ahead"
}, ks = {
  key: 1,
  class: "behind"
}, _s = {
  key: 0,
  class: "tracking-info"
}, $s = /* @__PURE__ */ O({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    trackingBranch: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove"],
  setup(e, { emit: l }) {
    const n = e, r = B(() => n.fetchingRemote === n.remote.name), d = B(() => n.remote.is_default), x = B(() => !!n.trackingBranch);
    function p(b) {
      const m = new Date(b), R = (/* @__PURE__ */ new Date()).getTime() - m.getTime(), _ = Math.floor(R / 6e4);
      if (_ < 1) return "Just now";
      if (_ < 60) return `${_}m ago`;
      const M = Math.floor(_ / 60);
      if (M < 24) return `${M}h ago`;
      const H = Math.floor(M / 24);
      return H < 7 ? `${H}d ago` : m.toLocaleDateString();
    }
    return (b, m) => (t(), g(ce, {
      status: d.value ? "synced" : void 0
    }, {
      icon: a(() => [
        f(u(d.value ? "🔗" : "🌐"), 1)
      ]),
      title: a(() => [
        o("div", ps, [
          o("span", null, u(e.remote.name), 1),
          d.value ? (t(), s("span", ys, "DEFAULT")) : c("", !0),
          e.syncStatus ? (t(), s("span", bs, [
            e.syncStatus.ahead > 0 ? (t(), s("span", ws, "↑" + u(e.syncStatus.ahead), 1)) : c("", !0),
            e.syncStatus.behind > 0 ? (t(), s("span", ks, "↓" + u(e.syncStatus.behind), 1)) : c("", !0)
          ])) : c("", !0)
        ])
      ]),
      subtitle: a(() => [
        x.value ? (t(), s("span", _s, " Tracking: " + u(e.trackingBranch), 1)) : c("", !0)
      ]),
      details: a(() => {
        var k;
        return [
          i(ee, { label: "Fetch:" }, {
            default: a(() => [
              i(it, {
                url: e.remote.fetch_url
              }, null, 8, ["url"])
            ]),
            _: 1
          }),
          e.remote.push_url !== e.remote.fetch_url ? (t(), g(ee, {
            key: 0,
            label: "Push:"
          }, {
            default: a(() => [
              i(it, {
                url: e.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : c("", !0),
          (k = e.syncStatus) != null && k.last_fetch ? (t(), g(ee, {
            key: 1,
            label: "Last Fetch:"
          }, {
            default: a(() => [
              o("span", null, u(p(e.syncStatus.last_fetch)), 1)
            ]),
            _: 1
          })) : c("", !0)
        ];
      }),
      actions: a(() => [
        i(V, {
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
        i(V, {
          variant: "secondary",
          size: "xs",
          onClick: m[1] || (m[1] = (k) => b.$emit("edit", e.remote.name))
        }, {
          default: a(() => [...m[4] || (m[4] = [
            f(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        d.value ? c("", !0) : (t(), g(V, {
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
}), Cs = /* @__PURE__ */ A($s, [["__scopeId", "data-v-17362e45"]]), xs = ["for"], Is = {
  key: 0,
  class: "base-form-field-required"
}, Ss = { class: "base-form-field-input" }, Es = {
  key: 1,
  class: "base-form-field-error"
}, Ls = {
  key: 2,
  class: "base-form-field-hint"
}, Rs = /* @__PURE__ */ O({
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
    const l = e, n = B(() => l.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (r, d) => (t(), s("div", {
      class: K(["base-form-field", { "full-width": e.fullWidth }])
    }, [
      e.label ? (t(), s("label", {
        key: 0,
        for: n.value,
        class: "base-form-field-label"
      }, [
        f(u(e.label) + " ", 1),
        e.required ? (t(), s("span", Is, "*")) : c("", !0)
      ], 8, xs)) : c("", !0),
      o("div", Ss, [
        Y(r.$slots, "default", {}, void 0, !0)
      ]),
      e.error ? (t(), s("span", Es, u(e.error), 1)) : e.hint ? (t(), s("span", Ls, u(e.hint), 1)) : c("", !0)
    ], 2));
  }
}), Qe = /* @__PURE__ */ A(Rs, [["__scopeId", "data-v-9a1cf296"]]), zs = ["type", "value", "placeholder", "disabled"], Ns = {
  key: 0,
  class: "base-input-error"
}, Us = /* @__PURE__ */ O({
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
    return (l, n) => (t(), s("div", {
      class: K(["base-input-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      o("input", {
        type: e.type,
        value: e.modelValue,
        placeholder: e.placeholder,
        disabled: e.disabled,
        class: K(["base-input", { error: !!e.error }]),
        onInput: n[0] || (n[0] = (r) => l.$emit("update:modelValue", r.target.value)),
        onKeyup: [
          n[1] || (n[1] = we((r) => l.$emit("enter"), ["enter"])),
          n[2] || (n[2] = we((r) => l.$emit("escape"), ["escape"]))
        ]
      }, null, 42, zs),
      e.error ? (t(), s("span", Ns, u(e.error), 1)) : c("", !0)
    ], 2));
  }
}), et = /* @__PURE__ */ A(Us, [["__scopeId", "data-v-9ba02cdc"]]), Ms = { class: "remote-form" }, Ds = { class: "form-header" }, Vs = { class: "form-body" }, Bs = {
  key: 0,
  class: "form-error"
}, Ts = { class: "form-actions" }, Os = /* @__PURE__ */ O({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(e, { emit: l }) {
    const n = e, r = l, d = E({
      name: n.remoteName,
      fetchUrl: n.fetchUrl,
      pushUrl: n.pushUrl
    }), x = E(!1), p = E(null);
    kt(() => [n.remoteName, n.fetchUrl, n.pushUrl], () => {
      d.value = {
        name: n.remoteName,
        fetchUrl: n.fetchUrl,
        pushUrl: n.pushUrl
      };
    });
    const b = B(() => d.value.name.trim() !== "" && d.value.fetchUrl.trim() !== "");
    async function m() {
      if (!(!b.value || x.value)) {
        p.value = null, x.value = !0;
        try {
          r("submit", d.value);
        } catch (k) {
          p.value = k instanceof Error ? k.message : "Failed to submit form";
        } finally {
          x.value = !1;
        }
      }
    }
    return (k, R) => (t(), s("div", Ms, [
      o("div", Ds, [
        i(Fe, null, {
          default: a(() => [
            f(u(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      o("div", Vs, [
        i(Qe, {
          label: "Remote Name",
          required: ""
        }, {
          default: a(() => [
            i(et, {
              modelValue: d.value.name,
              "onUpdate:modelValue": R[0] || (R[0] = (_) => d.value.name = _),
              disabled: e.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        i(Qe, {
          label: "Fetch URL",
          required: ""
        }, {
          default: a(() => [
            i(et, {
              modelValue: d.value.fetchUrl,
              "onUpdate:modelValue": R[1] || (R[1] = (_) => d.value.fetchUrl = _),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        i(Qe, { label: "Push URL (optional)" }, {
          default: a(() => [
            i(et, {
              modelValue: d.value.pushUrl,
              "onUpdate:modelValue": R[2] || (R[2] = (_) => d.value.pushUrl = _),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        p.value ? (t(), s("div", Bs, u(p.value), 1)) : c("", !0)
      ]),
      o("div", Ts, [
        i(V, {
          variant: "primary",
          size: "md",
          disabled: !b.value,
          loading: x.value,
          onClick: m
        }, {
          default: a(() => [
            f(u(e.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        i(V, {
          variant: "ghost",
          size: "md",
          onClick: R[3] || (R[3] = (_) => k.$emit("cancel"))
        }, {
          default: a(() => [...R[4] || (R[4] = [
            f(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), As = /* @__PURE__ */ A(Os, [["__scopeId", "data-v-56021b18"]]), Ws = { key: 0 }, Fs = /* @__PURE__ */ O({
  __name: "RemotesSection",
  setup(e) {
    const {
      getRemotes: l,
      addRemote: n,
      removeRemote: r,
      updateRemoteUrl: d,
      fetchRemote: x,
      getRemoteSyncStatus: p
    } = fe(), b = E([]), m = E(null), k = E({}), R = E(!1), _ = E(null), M = E(""), H = E(!1), J = E(null), P = E(!1), D = E("add"), S = E({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), N = B(() => {
      if (!M.value.trim()) return b.value;
      const z = M.value.toLowerCase();
      return b.value.filter(
        (L) => L.name.toLowerCase().includes(z) || L.fetch_url.toLowerCase().includes(z) || L.push_url.toLowerCase().includes(z)
      );
    });
    function G(z) {
      var L;
      return ((L = m.value) == null ? void 0 : L.remote) === z;
    }
    async function y() {
      R.value = !0, _.value = null;
      try {
        const z = await l();
        b.value = z.remotes, m.value = z.current_branch_tracking || null, await Promise.all(
          z.remotes.map(async (L) => {
            const j = await p(L.name);
            j && (k.value[L.name] = j);
          })
        );
      } catch (z) {
        _.value = z instanceof Error ? z.message : "Failed to load remotes";
      } finally {
        R.value = !1;
      }
    }
    function C() {
      D.value = "add", S.value = { name: "", fetchUrl: "", pushUrl: "" }, P.value = !0;
    }
    function v(z) {
      const L = b.value.find((j) => j.name === z);
      L && (D.value = "edit", S.value = {
        name: L.name,
        fetchUrl: L.fetch_url,
        pushUrl: L.push_url
      }, P.value = !0);
    }
    async function w(z) {
      try {
        D.value === "add" ? await n(z.name, z.fetchUrl) : await d(z.name, z.fetchUrl, z.pushUrl || void 0), P.value = !1, await y();
      } catch (L) {
        _.value = L instanceof Error ? L.message : "Operation failed";
      }
    }
    function h() {
      P.value = !1, S.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function I(z) {
      J.value = z;
      try {
        await x(z);
        const L = await p(z);
        L && (k.value[z] = L);
      } catch (L) {
        _.value = L instanceof Error ? L.message : "Fetch failed";
      } finally {
        J.value = null;
      }
    }
    async function U(z) {
      if (confirm(`Remove remote "${z}"?`))
        try {
          await r(z), await y();
        } catch (L) {
          _.value = L instanceof Error ? L.message : "Failed to remove remote";
        }
    }
    function ie() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    return re(y), (z, L) => (t(), s(F, null, [
      i(ge, null, {
        header: a(() => [
          i(he, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: L[0] || (L[0] = (j) => H.value = !0)
          }, {
            actions: a(() => [
              P.value ? c("", !0) : (t(), g(V, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: C
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
          P.value ? c("", !0) : (t(), g(Ue, {
            key: 0,
            modelValue: M.value,
            "onUpdate:modelValue": L[1] || (L[1] = (j) => M.value = j),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: a(() => [
          R.value ? (t(), g(ke, {
            key: 0,
            message: "Loading remotes..."
          })) : _.value ? (t(), g(_e, {
            key: 1,
            message: _.value,
            retry: !0,
            onRetry: y
          }, null, 8, ["message"])) : (t(), s(F, { key: 2 }, [
            P.value ? (t(), g(As, {
              key: 0,
              mode: D.value,
              "remote-name": S.value.name,
              "fetch-url": S.value.fetchUrl,
              "push-url": S.value.pushUrl,
              onSubmit: w,
              onCancel: h
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : c("", !0),
            b.value.length && !P.value ? (t(), g(xe, {
              key: 1,
              variant: "compact"
            }, {
              default: a(() => [
                f(" Total: " + u(b.value.length) + " remote" + u(b.value.length !== 1 ? "s" : "") + " ", 1),
                m.value ? (t(), s("span", Ws, " • Tracking: " + u(m.value.remote) + "/" + u(m.value.branch), 1)) : c("", !0)
              ]),
              _: 1
            })) : c("", !0),
            N.value.length && !P.value ? (t(), g(ne, {
              key: 2,
              title: "REMOTES",
              count: N.value.length
            }, {
              default: a(() => [
                (t(!0), s(F, null, Z(N.value, (j) => {
                  var ue;
                  return t(), g(Cs, {
                    key: j.name,
                    remote: j,
                    "sync-status": k.value[j.name],
                    "tracking-branch": G(j.name) ? (ue = m.value) == null ? void 0 : ue.branch : void 0,
                    "fetching-remote": J.value,
                    onFetch: I,
                    onEdit: v,
                    onRemove: U
                  }, null, 8, ["remote", "sync-status", "tracking-branch", "fetching-remote"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["count"])) : c("", !0),
            !N.value.length && !P.value ? (t(), g(ve, {
              key: 3,
              icon: "🌐",
              message: M.value ? `No remotes match '${M.value}'` : "No remotes configured."
            }, {
              actions: a(() => [
                i(V, {
                  variant: "primary",
                  onClick: C
                }, {
                  default: a(() => [...L[4] || (L[4] = [
                    f(" Add Your First Remote ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["message"])) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      i(Re, {
        show: H.value,
        title: "About Git Remotes",
        onClose: L[2] || (L[2] = (j) => H.value = !1)
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
          i(V, {
            variant: "link",
            onClick: ie
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
}), Gs = /* @__PURE__ */ A(Fs, [["__scopeId", "data-v-a75719bb"]]), Ps = { class: "setting-info" }, Hs = { class: "setting-label" }, Ks = {
  key: 0,
  class: "required-marker"
}, js = {
  key: 0,
  class: "setting-description"
}, qs = { class: "setting-control" }, Ys = /* @__PURE__ */ O({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (l, n) => (t(), s("div", {
      class: K(["setting-row", { disabled: e.disabled }])
    }, [
      o("div", Ps, [
        o("div", Hs, [
          f(u(e.label) + " ", 1),
          e.required ? (t(), s("span", Ks, "*")) : c("", !0)
        ]),
        e.description ? (t(), s("div", js, u(e.description), 1)) : c("", !0)
      ]),
      o("div", qs, [
        Y(l.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), oe = /* @__PURE__ */ A(Ys, [["__scopeId", "data-v-cb5d236c"]]), Js = { class: "toggle" }, Zs = ["checked", "disabled"], Xs = /* @__PURE__ */ O({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (l, n) => (t(), s("label", Js, [
      o("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: n[0] || (n[0] = (r) => l.$emit("update:modelValue", r.target.checked)),
        class: "toggle-input"
      }, null, 40, Zs),
      n[1] || (n[1] = o("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), ye = /* @__PURE__ */ A(Xs, [["__scopeId", "data-v-71c0f550"]]), Qs = { class: "settings-section" }, el = { class: "settings-section" }, tl = { class: "settings-section" }, ol = { class: "settings-section" }, al = { class: "settings-section" }, nl = { class: "settings-section" }, sl = /* @__PURE__ */ O({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const l = E(!1), n = E(null), r = E(null), d = E({
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
    }), x = E(null), p = B(() => x.value ? JSON.stringify(d.value) !== JSON.stringify(x.value) : !1), b = [
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
    ], R = [
      { label: "Comfy (Default)", value: "comfy" },
      { label: "Terminal", value: "terminal" },
      { label: "Dark", value: "dark" }
    ], _ = [
      { label: "25", value: 25 },
      { label: "50", value: 50 },
      { label: "100", value: 100 },
      { label: "200", value: 200 }
    ], M = [
      { label: "1 minute", value: 60 },
      { label: "5 minutes", value: 300 },
      { label: "10 minutes", value: 600 },
      { label: "No cache", value: 0 }
    ];
    async function H() {
      l.value = !0, n.value = null;
      try {
        await new Promise((D) => setTimeout(D, 500)), x.value = JSON.parse(JSON.stringify(d.value));
      } catch (D) {
        n.value = D instanceof Error ? D.message : "Failed to load settings";
      } finally {
        l.value = !1;
      }
    }
    async function J() {
      r.value = null;
      try {
        await new Promise((D) => setTimeout(D, 300)), x.value = JSON.parse(JSON.stringify(d.value)), r.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          r.value = null;
        }, 3e3);
      } catch (D) {
        r.value = {
          type: "error",
          message: D instanceof Error ? D.message : "Failed to save settings"
        };
      }
    }
    function P() {
      x.value && (d.value = JSON.parse(JSON.stringify(x.value)), r.value = null);
    }
    return re(H), (D, S) => (t(), g(ge, null, {
      header: a(() => [
        i(he, { title: "WORKSPACE SETTINGS" }, {
          actions: a(() => [
            i(V, {
              variant: "primary",
              size: "sm",
              disabled: !p.value,
              onClick: J
            }, {
              default: a(() => [...S[19] || (S[19] = [
                f(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            p.value ? (t(), g(V, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: P
            }, {
              default: a(() => [...S[20] || (S[20] = [
                f(" Reset ", -1)
              ])]),
              _: 1
            })) : c("", !0)
          ]),
          _: 1
        })
      ]),
      content: a(() => [
        l.value ? (t(), g(ke, {
          key: 0,
          message: "Loading workspace settings..."
        })) : n.value ? (t(), g(_e, {
          key: 1,
          message: n.value,
          retry: !0,
          onRetry: H
        }, null, 8, ["message"])) : (t(), s(F, { key: 2 }, [
          i(ne, { title: "GIT CONFIGURATION" }, {
            default: a(() => [
              o("div", Qs, [
                i(oe, {
                  label: "User Name",
                  description: "Your name for git commits",
                  required: ""
                }, {
                  default: a(() => [
                    i(De, {
                      modelValue: d.value.git.userName,
                      "onUpdate:modelValue": S[0] || (S[0] = (N) => d.value.git.userName = N),
                      placeholder: "John Doe",
                      style: { minWidth: "250px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                i(oe, {
                  label: "User Email",
                  description: "Your email for git commits",
                  required: ""
                }, {
                  default: a(() => [
                    i(De, {
                      modelValue: d.value.git.userEmail,
                      "onUpdate:modelValue": S[1] || (S[1] = (N) => d.value.git.userEmail = N),
                      placeholder: "john@example.com",
                      style: { minWidth: "250px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                i(oe, {
                  label: "Default Branch",
                  description: "Default branch name for new environments"
                }, {
                  default: a(() => [
                    i(De, {
                      modelValue: d.value.git.defaultBranch,
                      "onUpdate:modelValue": S[2] || (S[2] = (N) => d.value.git.defaultBranch = N),
                      placeholder: "main",
                      style: { minWidth: "150px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                i(oe, {
                  label: "Auto Commit",
                  description: "Automatically commit workflow changes"
                }, {
                  default: a(() => [
                    i(ye, {
                      modelValue: d.value.git.autoCommit,
                      "onUpdate:modelValue": S[3] || (S[3] = (N) => d.value.git.autoCommit = N)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          i(ne, { title: "WORKSPACE PATHS" }, {
            default: a(() => [
              o("div", el, [
                i(oe, {
                  label: "Workspace Root",
                  description: "Root directory of this workspace (read-only)"
                }, {
                  default: a(() => [
                    i(We, {
                      mono: "",
                      truncate: ""
                    }, {
                      default: a(() => [
                        f(u(d.value.paths.workspaceRoot), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                i(oe, {
                  label: "Environments Directory",
                  description: "Where environment folders are stored"
                }, {
                  default: a(() => [
                    i(We, {
                      mono: "",
                      truncate: ""
                    }, {
                      default: a(() => [
                        f(u(d.value.paths.environmentsDir), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                i(oe, {
                  label: "Models Directory",
                  description: "Where model files are indexed"
                }, {
                  default: a(() => [
                    i(We, {
                      mono: "",
                      truncate: ""
                    }, {
                      default: a(() => [
                        f(u(d.value.paths.modelsDir), 1)
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
          i(ne, { title: "MODEL INDEX" }, {
            default: a(() => [
              o("div", tl, [
                i(oe, {
                  label: "Auto-Index Models",
                  description: "Automatically scan and index model files"
                }, {
                  default: a(() => [
                    i(ye, {
                      modelValue: d.value.modelIndex.autoIndex,
                      "onUpdate:modelValue": S[4] || (S[4] = (N) => d.value.modelIndex.autoIndex = N)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                i(oe, {
                  label: "Index on Startup",
                  description: "Run model indexing when ComfyUI starts",
                  disabled: !d.value.modelIndex.autoIndex
                }, {
                  default: a(() => [
                    i(ye, {
                      modelValue: d.value.modelIndex.indexOnStartup,
                      "onUpdate:modelValue": S[5] || (S[5] = (N) => d.value.modelIndex.indexOnStartup = N),
                      disabled: !d.value.modelIndex.autoIndex
                    }, null, 8, ["modelValue", "disabled"])
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                i(oe, {
                  label: "Scan Interval",
                  description: "How often to check for new models (minutes)",
                  disabled: !d.value.modelIndex.autoIndex
                }, {
                  default: a(() => [
                    i(Le, {
                      modelValue: d.value.modelIndex.scanInterval,
                      "onUpdate:modelValue": S[6] || (S[6] = (N) => d.value.modelIndex.scanInterval = N),
                      options: b,
                      disabled: !d.value.modelIndex.autoIndex,
                      style: { minWidth: "120px" }
                    }, null, 8, ["modelValue", "disabled"])
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                i(oe, {
                  label: "Deep Scan",
                  description: "Use SHA256 hashing for model verification (slower)"
                }, {
                  default: a(() => [
                    i(ye, {
                      modelValue: d.value.modelIndex.deepScan,
                      "onUpdate:modelValue": S[7] || (S[7] = (N) => d.value.modelIndex.deepScan = N)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          i(ne, { title: "ENVIRONMENT DEFAULTS" }, {
            default: a(() => [
              o("div", ol, [
                i(oe, {
                  label: "ComfyUI Version",
                  description: "Default ComfyUI version for new environments"
                }, {
                  default: a(() => [
                    i(Le, {
                      modelValue: d.value.environment.defaultComfyUIVersion,
                      "onUpdate:modelValue": S[8] || (S[8] = (N) => d.value.environment.defaultComfyUIVersion = N),
                      options: m,
                      placeholder: "Select version...",
                      style: { minWidth: "150px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                i(oe, {
                  label: "Python Version",
                  description: "Python version for new virtual environments"
                }, {
                  default: a(() => [
                    i(Le, {
                      modelValue: d.value.environment.pythonVersion,
                      "onUpdate:modelValue": S[9] || (S[9] = (N) => d.value.environment.pythonVersion = N),
                      options: k,
                      style: { minWidth: "120px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                i(oe, {
                  label: "Auto Create Virtualenv",
                  description: "Automatically create Python virtual environment"
                }, {
                  default: a(() => [
                    i(ye, {
                      modelValue: d.value.environment.autoCreateVenv,
                      "onUpdate:modelValue": S[10] || (S[10] = (N) => d.value.environment.autoCreateVenv = N)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                i(oe, {
                  label: "Install Dependencies",
                  description: "Auto-install requirements.txt on environment creation"
                }, {
                  default: a(() => [
                    i(ye, {
                      modelValue: d.value.environment.autoInstallDeps,
                      "onUpdate:modelValue": S[11] || (S[11] = (N) => d.value.environment.autoInstallDeps = N)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          i(ne, { title: "UI PREFERENCES" }, {
            default: a(() => [
              o("div", al, [
                i(oe, {
                  label: "Theme",
                  description: "Visual theme for the ComfyGit panel"
                }, {
                  default: a(() => [
                    i(Le, {
                      modelValue: d.value.ui.theme,
                      "onUpdate:modelValue": S[12] || (S[12] = (N) => d.value.ui.theme = N),
                      options: R,
                      style: { minWidth: "150px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                i(oe, {
                  label: "Compact Mode",
                  description: "Use smaller spacing and fonts"
                }, {
                  default: a(() => [
                    i(ye, {
                      modelValue: d.value.ui.compactMode,
                      "onUpdate:modelValue": S[13] || (S[13] = (N) => d.value.ui.compactMode = N)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                i(oe, {
                  label: "Show File Extensions",
                  description: "Display file extensions in workflow lists"
                }, {
                  default: a(() => [
                    i(ye, {
                      modelValue: d.value.ui.showFileExtensions,
                      "onUpdate:modelValue": S[14] || (S[14] = (N) => d.value.ui.showFileExtensions = N)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                i(oe, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations"
                }, {
                  default: a(() => [
                    i(ye, {
                      modelValue: d.value.ui.confirmDestructive,
                      "onUpdate:modelValue": S[15] || (S[15] = (N) => d.value.ui.confirmDestructive = N)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          i(ne, { title: "ADVANCED" }, {
            default: a(() => [
              o("div", nl, [
                i(oe, {
                  label: "Debug Mode",
                  description: "Enable debug logging and verbose output"
                }, {
                  default: a(() => [
                    i(ye, {
                      modelValue: d.value.advanced.debugMode,
                      "onUpdate:modelValue": S[16] || (S[16] = (N) => d.value.advanced.debugMode = N)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                i(oe, {
                  label: "Max History Items",
                  description: "Maximum number of commits to show in history"
                }, {
                  default: a(() => [
                    i(Le, {
                      modelValue: d.value.advanced.maxHistoryItems,
                      "onUpdate:modelValue": S[17] || (S[17] = (N) => d.value.advanced.maxHistoryItems = N),
                      options: _,
                      style: { minWidth: "100px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                i(oe, {
                  label: "Cache Duration",
                  description: "How long to cache API responses (seconds)"
                }, {
                  default: a(() => [
                    i(Le, {
                      modelValue: d.value.advanced.cacheDuration,
                      "onUpdate:modelValue": S[18] || (S[18] = (N) => d.value.advanced.cacheDuration = N),
                      options: M,
                      style: { minWidth: "120px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          r.value ? (t(), g(xe, {
            key: 0,
            variant: (r.value.type === "success", "compact")
          }, {
            default: a(() => [
              o("span", {
                style: nt({ color: r.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, u(r.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : c("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), ll = /* @__PURE__ */ A(sl, [["__scopeId", "data-v-74f65bd5"]]), rl = { class: "log-filter-bar" }, il = { class: "log-filter-bar__options" }, cl = ["onClick"], dl = /* @__PURE__ */ O({
  __name: "LogFilterBar",
  props: {
    activeLevels: {}
  },
  emits: ["toggle", "clear"],
  setup(e, { emit: l }) {
    const n = e, r = l, d = ["ERROR", "WARNING", "INFO", "DEBUG"];
    function x(b) {
      return n.activeLevels.includes(b);
    }
    function p(b) {
      r("toggle", b);
    }
    return (b, m) => (t(), s("div", rl, [
      m[1] || (m[1] = o("div", { class: "log-filter-bar__label" }, "FILTER:", -1)),
      o("div", il, [
        (t(), s(F, null, Z(d, (k) => o("button", {
          key: k,
          class: K(["filter-option", { active: x(k) }]),
          onClick: (R) => p(k)
        }, u(k), 11, cl)), 64)),
        o("button", {
          class: "filter-option filter-option--clear",
          onClick: m[0] || (m[0] = (k) => b.$emit("clear"))
        }, " CLEAR ")
      ])
    ]));
  }
}), vt = /* @__PURE__ */ A(dl, [["__scopeId", "data-v-9052edf8"]]), ul = { class: "log-list" }, ml = /* @__PURE__ */ O({
  __name: "LogList",
  setup(e) {
    return (l, n) => (t(), s("div", ul, [
      Y(l.$slots, "default", {}, void 0, !0)
    ]));
  }
}), ft = /* @__PURE__ */ A(ml, [["__scopeId", "data-v-0061c330"]]), vl = { class: "log-level__icon" }, fl = { class: "log-level__text" }, gl = /* @__PURE__ */ O({
  __name: "LogLevel",
  props: {
    level: {}
  },
  setup(e) {
    const l = e, n = B(() => `log-level--${l.level.toLowerCase()}`), r = B(() => {
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
    return (d, x) => (t(), s("span", {
      class: K(["log-level", n.value])
    }, [
      o("span", vl, u(r.value), 1),
      o("span", fl, u(e.level), 1)
    ], 2));
  }
}), hl = /* @__PURE__ */ A(gl, [["__scopeId", "data-v-8547c115"]]), pl = { class: "log-item__header" }, yl = { class: "log-item__timestamp" }, bl = {
  key: 0,
  class: "log-item__context"
}, wl = { class: "log-item__message" }, kl = /* @__PURE__ */ O({
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
    const n = e, r = B(() => `log-item--${n.level.toLowerCase()}`);
    return (d, x) => (t(), s("div", {
      class: K(["log-item", r.value, { clickable: e.clickable }]),
      onClick: x[0] || (x[0] = (p) => e.clickable && d.$emit("click"))
    }, [
      o("div", pl, [
        i(hl, { level: e.level }, null, 8, ["level"]),
        o("span", yl, u(e.timestamp), 1),
        e.context ? (t(), s("span", bl, u(e.context), 1)) : c("", !0)
      ]),
      o("div", wl, u(e.message), 1)
    ], 2));
  }
}), gt = /* @__PURE__ */ A(kl, [["__scopeId", "data-v-adb291b1"]]), _l = {
  key: 2,
  class: "load-more"
}, $l = /* @__PURE__ */ O({
  __name: "WorkspaceDebugSection",
  setup(e) {
    const { getWorkspaceLogs: l } = fe(), n = E([]), r = E(!1), d = E(null), x = E(!1), p = E(["ERROR", "WARNING", "INFO", "DEBUG"]), b = E(100), m = B(() => n.value.filter((y) => y.level === "ERROR").length), k = B(() => n.value.filter((y) => y.level === "WARNING").length), R = B(() => n.value.filter((y) => y.level === "INFO").length), _ = B(() => n.value.filter((y) => y.level === "DEBUG").length), M = B(() => n.value.filter((y) => p.value.includes(y.level))), H = B(() => M.value.slice(0, b.value)), J = B(() => M.value.length > b.value);
    function P(y) {
      const C = p.value.indexOf(y);
      C >= 0 ? p.value.splice(C, 1) : p.value.push(y);
    }
    function D() {
      p.value = ["ERROR", "WARNING", "INFO", "DEBUG"];
    }
    function S() {
      b.value += 100;
    }
    function N(y) {
      try {
        return new Date(y).toLocaleString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: !1
        });
      } catch {
        return y;
      }
    }
    async function G() {
      r.value = !0, d.value = null;
      try {
        n.value = await l(void 0, 500);
      } catch (y) {
        d.value = y instanceof Error ? y.message : "Failed to load workspace logs";
      } finally {
        r.value = !1;
      }
    }
    return re(G), (y, C) => (t(), s(F, null, [
      i(ge, null, {
        header: a(() => [
          i(he, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: C[0] || (C[0] = (v) => x.value = !0)
          })
        ]),
        content: a(() => [
          r.value ? (t(), g(ke, {
            key: 0,
            message: "Loading workspace logs..."
          })) : d.value ? (t(), g(_e, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: G
          }, null, 8, ["message"])) : (t(), s(F, { key: 2 }, [
            n.value.length > 0 ? (t(), g(xe, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                f(" Total: " + u(n.value.length) + " entries • " + u(m.value) + " errors • " + u(k.value) + " warnings • " + u(R.value) + " info • " + u(_.value) + " debug ", 1)
              ]),
              _: 1
            })) : c("", !0),
            i(vt, {
              "active-levels": p.value,
              onToggle: P,
              onClear: D
            }, null, 8, ["active-levels"]),
            M.value.length > 0 ? (t(), g(ft, { key: 1 }, {
              default: a(() => [
                (t(!0), s(F, null, Z(H.value, (v, w) => (t(), g(gt, {
                  key: `${v.timestamp}-${w}`,
                  level: v.level,
                  timestamp: N(v.timestamp),
                  message: v.message,
                  context: v.context
                }, null, 8, ["level", "timestamp", "message", "context"]))), 128))
              ]),
              _: 1
            })) : c("", !0),
            J.value ? (t(), s("div", _l, [
              i(V, {
                variant: "secondary",
                onClick: S
              }, {
                default: a(() => [
                  f(" Load More (" + u(M.value.length - b.value) + " remaining) ", 1)
                ]),
                _: 1
              })
            ])) : c("", !0),
            n.value.length > 0 && M.value.length === 0 ? (t(), g(ve, {
              key: 3,
              icon: "🔍",
              message: "No logs match the current filters"
            })) : c("", !0),
            n.value.length === 0 ? (t(), g(ve, {
              key: 4,
              icon: "📝",
              message: "No workspace logs available"
            })) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      i(Re, {
        show: x.value,
        title: "About Workspace Logs",
        onClose: C[2] || (C[2] = (v) => x.value = !1)
      }, {
        content: a(() => [...C[3] || (C[3] = [
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
          i(V, {
            variant: "primary",
            onClick: C[1] || (C[1] = (v) => x.value = !1)
          }, {
            default: a(() => [...C[4] || (C[4] = [
              f(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Cl = /* @__PURE__ */ A($l, [["__scopeId", "data-v-55d656f1"]]), xl = {
  key: 2,
  class: "load-more"
}, Il = /* @__PURE__ */ O({
  __name: "DebugEnvSection",
  setup(e) {
    const { getEnvironmentLogs: l, getStatus: n } = fe(), r = E([]), d = E(!1), x = E(null), p = E(!1), b = E(["ERROR", "WARNING", "INFO", "DEBUG"]), m = E(50), k = E("production"), R = B(() => r.value.filter((w) => b.value.includes(w.level.toUpperCase()))), _ = B(() => R.value.slice(0, m.value)), M = B(() => R.value.length > m.value), H = B(
      () => r.value.filter((w) => w.level.toUpperCase() === "ERROR").length
    ), J = B(
      () => r.value.filter((w) => w.level.toUpperCase() === "WARNING").length
    ), P = B(
      () => r.value.filter((w) => w.level.toUpperCase() === "INFO").length
    ), D = B(
      () => r.value.filter((w) => w.level.toUpperCase() === "DEBUG").length
    );
    function S(w) {
      const h = b.value.indexOf(w);
      h > -1 ? b.value.splice(h, 1) : b.value.push(w);
    }
    function N() {
      b.value = ["ERROR", "WARNING", "INFO", "DEBUG"];
    }
    function G() {
      m.value += 50;
    }
    function y(w) {
      return new Date(w).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: !1
      });
    }
    function C(w) {
      if (!w) return;
      const h = Object.entries(w);
      if (h.length === 0) return;
      const [I, U] = h[0];
      return typeof U == "string" || typeof U == "number" ? `${I}: ${U}` : I;
    }
    async function v() {
      d.value = !0, x.value = null;
      try {
        r.value = await l(void 0, 200), r.value.sort((w, h) => new Date(h.timestamp).getTime() - new Date(w.timestamp).getTime());
        try {
          const w = await n();
          k.value = w.environment || "production";
        } catch {
        }
      } catch (w) {
        x.value = w instanceof Error ? w.message : "Failed to load environment logs";
      } finally {
        d.value = !1;
      }
    }
    return re(v), (w, h) => (t(), s(F, null, [
      i(ge, null, {
        header: a(() => [
          i(he, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: h[0] || (h[0] = (I) => p.value = !0)
          })
        ]),
        content: a(() => [
          d.value ? (t(), g(ke, {
            key: 0,
            message: "Loading environment logs..."
          })) : x.value ? (t(), g(_e, {
            key: 1,
            message: x.value,
            retry: !0,
            onRetry: v
          }, null, 8, ["message"])) : (t(), s(F, { key: 2 }, [
            r.value.length > 0 ? (t(), g(xe, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                f(" Total: " + u(r.value.length) + " entries • " + u(H.value) + " errors • " + u(J.value) + " warnings • " + u(P.value) + " info • " + u(D.value) + " debug ", 1)
              ]),
              _: 1
            })) : c("", !0),
            i(vt, {
              "active-levels": b.value,
              onToggle: S,
              onClear: N
            }, null, 8, ["active-levels"]),
            R.value.length > 0 ? (t(), g(ft, { key: 1 }, {
              default: a(() => [
                (t(!0), s(F, null, Z(_.value, (I, U) => (t(), g(gt, {
                  key: `${I.timestamp}-${U}`,
                  level: I.level,
                  timestamp: y(I.timestamp),
                  message: I.message,
                  context: C(I.context)
                }, null, 8, ["level", "timestamp", "message", "context"]))), 128))
              ]),
              _: 1
            })) : c("", !0),
            M.value ? (t(), s("div", xl, [
              i(V, {
                variant: "secondary",
                onClick: G
              }, {
                default: a(() => [
                  f(" Load More (" + u(R.value.length - m.value) + " remaining) ", 1)
                ]),
                _: 1
              })
            ])) : c("", !0),
            r.value.length > 0 && R.value.length === 0 ? (t(), g(ve, {
              key: 3,
              icon: "🔍",
              message: "No logs match the current filters"
            })) : c("", !0),
            r.value.length === 0 ? (t(), g(ve, {
              key: 4,
              icon: "📝",
              message: "No environment logs available"
            })) : c("", !0)
          ], 64))
        ]),
        _: 1
      }),
      i(Re, {
        show: p.value,
        title: "About Environment Logs",
        onClose: h[2] || (h[2] = (I) => p.value = !1)
      }, {
        content: a(() => [
          o("p", null, [
            h[3] || (h[3] = f(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            o("strong", null, u(k.value), 1),
            h[4] || (h[4] = f(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          h[5] || (h[5] = o("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
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
          h[6] || (h[6] = o("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: a(() => [
          i(V, {
            variant: "primary",
            onClick: h[1] || (h[1] = (I) => p.value = !1)
          }, {
            default: a(() => [...h[7] || (h[7] = [
              f(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Sl = /* @__PURE__ */ A(Il, [["__scopeId", "data-v-456b4c97"]]), El = { class: "env-title" }, Ll = {
  key: 0,
  class: "current-badge"
}, Rl = {
  key: 0,
  class: "branch-info"
}, zl = /* @__PURE__ */ O({
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
  setup(e) {
    return (l, n) => (t(), g(ce, {
      status: e.isCurrent ? "synced" : void 0
    }, {
      icon: a(() => [
        f(u(e.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: a(() => [
        o("div", El, [
          o("span", null, u(e.environmentName), 1),
          e.isCurrent && e.showCurrentLabel ? (t(), s("span", Ll, "CURRENT")) : c("", !0)
        ])
      ]),
      subtitle: a(() => [
        e.currentBranch ? (t(), s("span", Rl, [
          n[0] || (n[0] = o("span", { class: "branch-icon" }, "⎇", -1)),
          f(" " + u(e.currentBranch), 1)
        ])) : c("", !0)
      ]),
      details: a(() => [
        i(ee, {
          label: "Workflows:",
          value: String(e.workflowCount)
        }, null, 8, ["value"]),
        i(ee, {
          label: "Nodes:",
          value: String(e.nodeCount)
        }, null, 8, ["value"]),
        i(ee, {
          label: "Models:",
          value: String(e.modelCount)
        }, null, 8, ["value"]),
        e.lastUsed && e.showLastUsed ? (t(), g(ee, {
          key: 0,
          label: "Last used:",
          value: e.lastUsed
        }, null, 8, ["value"])) : c("", !0)
      ]),
      actions: a(() => [
        Y(l.$slots, "actions", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["status"]));
  }
}), Nl = /* @__PURE__ */ A(zl, [["__scopeId", "data-v-5238e57c"]]), Ul = {
  key: 0,
  class: "create-form"
}, Ml = { class: "create-form__header" }, Dl = { class: "create-form__body" }, Vl = { class: "create-form__actions" }, Bl = {
  width: "12",
  height: "12",
  viewBox: "0 0 16 16",
  fill: "currentColor",
  style: { color: "var(--cg-color-error)" }
}, Tl = /* @__PURE__ */ O({
  __name: "EnvironmentsSection",
  emits: ["switch", "create", "delete", "viewDetails"],
  setup(e, { emit: l }) {
    const n = l, { getEnvironments: r } = fe(), d = E([]), x = E(!1), p = E(null), b = E(""), m = E(!1), k = E(!1), R = E(""), _ = B(
      () => d.value.find((G) => G.is_current)
    ), M = B(() => {
      if (!b.value.trim()) return d.value;
      const G = b.value.toLowerCase();
      return d.value.filter(
        (y) => {
          var C;
          return y.name.toLowerCase().includes(G) || ((C = y.current_branch) == null ? void 0 : C.toLowerCase().includes(G));
        }
      );
    });
    function H(G) {
      if (!G) return "";
      try {
        const y = new Date(G), v = (/* @__PURE__ */ new Date()).getTime() - y.getTime(), w = Math.floor(v / 6e4), h = Math.floor(v / 36e5), I = Math.floor(v / 864e5);
        return w < 1 ? "just now" : w < 60 ? `${w} ${w === 1 ? "minute" : "minutes"} ago` : h < 24 ? `${h} ${h === 1 ? "hour" : "hours"} ago` : I < 30 ? `${I} ${I === 1 ? "day" : "days"} ago` : y.toLocaleDateString();
      } catch {
        return G;
      }
    }
    function J() {
      const G = R.value.trim();
      G && (n("create", G), R.value = "", k.value = !1);
    }
    function P() {
      R.value = "", k.value = !1;
    }
    function D(G) {
      n("viewDetails", G);
    }
    function S(G) {
      confirm(`Delete environment "${G}"?

This action cannot be undone.`) && n("delete", G);
    }
    async function N() {
      x.value = !0, p.value = null;
      try {
        d.value = await r();
      } catch (G) {
        p.value = G instanceof Error ? G.message : "Failed to load environments";
      } finally {
        x.value = !1;
      }
    }
    return re(N), (G, y) => {
      const C = _t("SectionGroup");
      return t(), s(F, null, [
        i(ge, null, {
          header: a(() => [
            i(he, {
              title: "ENVIRONMENTS",
              "show-info": !0,
              onInfoClick: y[1] || (y[1] = (v) => m.value = !0)
            }, {
              actions: a(() => [
                i(V, {
                  variant: "ghost",
                  size: "sm",
                  onClick: y[0] || (y[0] = (v) => k.value = !0),
                  title: "Create new environment"
                }, {
                  default: a(() => [...y[7] || (y[7] = [
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
                }),
                i(V, {
                  variant: "ghost",
                  size: "sm",
                  onClick: N,
                  title: "Refresh environments"
                }, {
                  default: a(() => [...y[8] || (y[8] = [
                    o("svg", {
                      width: "14",
                      height: "14",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      o("path", { d: "M8 2a6 6 0 0 1 6 6h-2a4 4 0 0 0-4-4V2zM2 8a6 6 0 0 0 6 6v2a8 8 0 0 1-8-8h2z" })
                    ], -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          search: a(() => [
            i(Ue, {
              modelValue: b.value,
              "onUpdate:modelValue": y[2] || (y[2] = (v) => b.value = v),
              placeholder: "🔍 Search environments..."
            }, null, 8, ["modelValue"])
          ]),
          content: a(() => [
            x.value ? (t(), g(ke, {
              key: 0,
              message: "Loading environments..."
            })) : p.value ? (t(), g(_e, {
              key: 1,
              message: p.value,
              retry: !0,
              onRetry: N
            }, null, 8, ["message"])) : (t(), s(F, { key: 2 }, [
              k.value ? (t(), s("div", Ul, [
                o("div", Ml, [
                  y[10] || (y[10] = o("span", { class: "create-form__title" }, "Create New Environment", -1)),
                  i(V, {
                    variant: "ghost",
                    size: "xs",
                    onClick: P
                  }, {
                    default: a(() => [...y[9] || (y[9] = [
                      f(" ✕ ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                o("div", Dl, [
                  i(De, {
                    modelValue: R.value,
                    "onUpdate:modelValue": y[3] || (y[3] = (v) => R.value = v),
                    placeholder: "Enter environment name...",
                    onKeyup: [
                      we(J, ["enter"]),
                      we(P, ["esc"])
                    ]
                  }, null, 8, ["modelValue"]),
                  o("div", Vl, [
                    i(V, {
                      variant: "primary",
                      size: "sm",
                      onClick: J,
                      disabled: !R.value.trim()
                    }, {
                      default: a(() => [...y[11] || (y[11] = [
                        f(" Create ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled"]),
                    i(V, {
                      variant: "secondary",
                      size: "sm",
                      onClick: P
                    }, {
                      default: a(() => [...y[12] || (y[12] = [
                        f(" Cancel ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ])
              ])) : c("", !0),
              d.value.length ? (t(), g(xe, {
                key: 1,
                variant: "compact"
              }, {
                default: a(() => [
                  f(" Total: " + u(d.value.length) + " " + u(d.value.length === 1 ? "environment" : "environments") + " ", 1),
                  _.value ? (t(), s(F, { key: 0 }, [
                    y[13] || (y[13] = f(" • Current: ", -1)),
                    o("strong", null, u(_.value.name), 1)
                  ], 64)) : c("", !0)
                ]),
                _: 1
              })) : c("", !0),
              M.value.length ? (t(), g(C, {
                key: 2,
                title: "ENVIRONMENTS",
                count: M.value.length
              }, {
                default: a(() => [
                  (t(!0), s(F, null, Z(M.value, (v) => (t(), g(Nl, {
                    key: v.name,
                    "environment-name": v.name,
                    "is-current": v.is_current,
                    "current-branch": v.current_branch,
                    "workflow-count": v.workflow_count,
                    "node-count": v.node_count,
                    "model-count": v.model_count,
                    "last-used": H(v.last_used),
                    "show-last-used": !!v.last_used
                  }, {
                    actions: a(() => [
                      v.is_current ? c("", !0) : (t(), g(V, {
                        key: 0,
                        variant: "secondary",
                        size: "sm",
                        onClick: (w) => G.$emit("switch", v.name)
                      }, {
                        default: a(() => [...y[14] || (y[14] = [
                          f(" Switch ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])),
                      i(V, {
                        variant: "ghost",
                        size: "sm",
                        onClick: (w) => D(v.name),
                        title: "View environment details"
                      }, {
                        default: a(() => [...y[15] || (y[15] = [
                          o("svg", {
                            width: "12",
                            height: "12",
                            viewBox: "0 0 16 16",
                            fill: "currentColor"
                          }, [
                            o("path", { d: "M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" }),
                            o("path", { d: "M1.5 8a6.5 6.5 0 0 1 13 0 6.5 6.5 0 0 1-13 0zM8 3.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9z" })
                          ], -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"]),
                      !v.is_current && d.value.length > 1 ? (t(), g(V, {
                        key: 1,
                        variant: "ghost",
                        size: "sm",
                        onClick: (w) => S(v.name),
                        title: "Delete environment"
                      }, {
                        default: a(() => [
                          (t(), s("svg", Bl, [...y[16] || (y[16] = [
                            o("path", { d: "M3 4h10l-1 10H4L3 4zm4-2h2v1H7V2zM5 6v6h1V6H5zm3 0v6h1V6H8zm3 0v6h1V6h-1z" }, null, -1)
                          ])]))
                        ]),
                        _: 1
                      }, 8, ["onClick"])) : c("", !0)
                    ]),
                    _: 2
                  }, 1032, ["environment-name", "is-current", "current-branch", "workflow-count", "node-count", "model-count", "last-used", "show-last-used"]))), 128))
                ]),
                _: 1
              }, 8, ["count"])) : c("", !0),
              M.value.length ? c("", !0) : (t(), g(ve, {
                key: 3,
                icon: "🌍",
                message: b.value ? `No environments match '${b.value}'` : "No environments found. Create one to get started!"
              }, $t({ _: 2 }, [
                b.value ? void 0 : {
                  name: "actions",
                  fn: a(() => [
                    i(V, {
                      variant: "primary",
                      onClick: y[4] || (y[4] = (v) => k.value = !0)
                    }, {
                      default: a(() => [...y[17] || (y[17] = [
                        f(" Create Environment ", -1)
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
        i(Re, {
          show: m.value,
          title: "About Environments",
          onClose: y[6] || (y[6] = (v) => m.value = !1)
        }, {
          content: a(() => [...y[18] || (y[18] = [
            o("p", null, [
              o("strong", null, "Environments"),
              f(" are isolated workspaces that contain their own workflows, nodes, and models. Each environment can track different branches and maintain separate state. ")
            ], -1),
            o("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
              o("strong", null, "Use cases:")
            ], -1),
            o("ul", { style: { "margin-top": "var(--cg-space-1)", "padding-left": "var(--cg-space-4)" } }, [
              o("li", null, "Separate production and development workflows"),
              o("li", null, "Test different node configurations"),
              o("li", null, "Experiment with new models safely"),
              o("li", null, "Maintain multiple project versions")
            ], -1)
          ])]),
          actions: a(() => [
            i(V, {
              variant: "secondary",
              onClick: y[5] || (y[5] = (v) => m.value = !1)
            }, {
              default: a(() => [...y[19] || (y[19] = [
                f(" Got it ", -1)
              ])]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["show"])
      ], 64);
    };
  }
}), Ol = /* @__PURE__ */ A(Tl, [["__scopeId", "data-v-97d6527d"]]), Al = { class: "header-info" }, Wl = { class: "commit-hash" }, Fl = {
  key: 0,
  class: "commit-refs"
}, Gl = { class: "commit-message" }, Pl = { class: "commit-date" }, Hl = {
  key: 0,
  class: "loading"
}, Kl = {
  key: 1,
  class: "changes-section"
}, jl = { class: "stats-row" }, ql = { class: "stat" }, Yl = { class: "stat insertions" }, Jl = { class: "stat deletions" }, Zl = {
  key: 0,
  class: "change-group"
}, Xl = {
  key: 1,
  class: "change-group"
}, Ql = {
  key: 0,
  class: "version"
}, er = {
  key: 2,
  class: "change-group"
}, tr = { class: "change-item" }, or = /* @__PURE__ */ O({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const l = e, { getCommitDetail: n } = fe(), r = E(null), d = E(!0), x = B(() => {
      if (!r.value) return !1;
      const b = r.value.changes.workflows;
      return b.added.length > 0 || b.modified.length > 0 || b.deleted.length > 0;
    }), p = B(() => {
      if (!r.value) return !1;
      const b = r.value.changes.nodes;
      return b.added.length > 0 || b.removed.length > 0;
    });
    return re(async () => {
      try {
        r.value = await n(l.commit.hash);
      } finally {
        d.value = !1;
      }
    }), (b, m) => (t(), g(Pe, {
      size: "md",
      "show-close-button": !1,
      onClose: m[3] || (m[3] = (k) => b.$emit("close"))
    }, {
      header: a(() => {
        var k, R, _, M;
        return [
          o("div", Al, [
            m[4] || (m[4] = o("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            o("span", Wl, u(((k = r.value) == null ? void 0 : k.short_hash) || e.commit.short_hash || ((R = e.commit.hash) == null ? void 0 : R.slice(0, 7))), 1),
            (M = (_ = r.value) == null ? void 0 : _.refs) != null && M.length ? (t(), s("span", Fl, [
              (t(!0), s(F, null, Z(r.value.refs, (H) => (t(), s("span", {
                key: H,
                class: "ref-badge"
              }, u(H), 1))), 128))
            ])) : c("", !0)
          ]),
          i(de, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (H) => b.$emit("close"))
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
        var k, R;
        return [
          o("div", Gl, u(((k = r.value) == null ? void 0 : k.message) || e.commit.message), 1),
          o("div", Pl, u(((R = r.value) == null ? void 0 : R.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          d.value ? (t(), s("div", Hl, "Loading details...")) : r.value ? (t(), s("div", Kl, [
            o("div", jl, [
              o("span", ql, u(r.value.stats.files_changed) + " files", 1),
              o("span", Yl, "+" + u(r.value.stats.insertions), 1),
              o("span", Jl, "-" + u(r.value.stats.deletions), 1)
            ]),
            x.value ? (t(), s("div", Zl, [
              i(Ce, { variant: "section" }, {
                default: a(() => [...m[6] || (m[6] = [
                  f("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (t(!0), s(F, null, Z(r.value.changes.workflows.added, (_) => (t(), s("div", {
                key: "add-" + _,
                class: "change-item added"
              }, [
                m[7] || (m[7] = o("span", { class: "change-icon" }, "+", -1)),
                o("span", null, u(_), 1)
              ]))), 128)),
              (t(!0), s(F, null, Z(r.value.changes.workflows.modified, (_) => (t(), s("div", {
                key: "mod-" + _,
                class: "change-item modified"
              }, [
                m[8] || (m[8] = o("span", { class: "change-icon" }, "~", -1)),
                o("span", null, u(_), 1)
              ]))), 128)),
              (t(!0), s(F, null, Z(r.value.changes.workflows.deleted, (_) => (t(), s("div", {
                key: "del-" + _,
                class: "change-item deleted"
              }, [
                m[9] || (m[9] = o("span", { class: "change-icon" }, "-", -1)),
                o("span", null, u(_), 1)
              ]))), 128))
            ])) : c("", !0),
            p.value ? (t(), s("div", Xl, [
              i(Ce, { variant: "section" }, {
                default: a(() => [...m[10] || (m[10] = [
                  f("NODES", -1)
                ])]),
                _: 1
              }),
              (t(!0), s(F, null, Z(r.value.changes.nodes.added, (_) => (t(), s("div", {
                key: "add-" + _.name,
                class: "change-item added"
              }, [
                m[11] || (m[11] = o("span", { class: "change-icon" }, "+", -1)),
                o("span", null, u(_.name), 1),
                _.version ? (t(), s("span", Ql, "(" + u(_.version) + ")", 1)) : c("", !0)
              ]))), 128)),
              (t(!0), s(F, null, Z(r.value.changes.nodes.removed, (_) => (t(), s("div", {
                key: "rem-" + _.name,
                class: "change-item deleted"
              }, [
                m[12] || (m[12] = o("span", { class: "change-icon" }, "-", -1)),
                o("span", null, u(_.name), 1)
              ]))), 128))
            ])) : c("", !0),
            r.value.changes.models.resolved > 0 ? (t(), s("div", er, [
              i(Ce, { variant: "section" }, {
                default: a(() => [...m[13] || (m[13] = [
                  f("MODELS", -1)
                ])]),
                _: 1
              }),
              o("div", tr, [
                m[14] || (m[14] = o("span", { class: "change-icon" }, "●", -1)),
                o("span", null, u(r.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : c("", !0)
          ])) : c("", !0)
        ];
      }),
      footer: a(() => [
        i(de, {
          variant: "secondary",
          onClick: m[1] || (m[1] = (k) => b.$emit("createBranch", e.commit))
        }, {
          default: a(() => [...m[15] || (m[15] = [
            f(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        i(de, {
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
}), ar = /* @__PURE__ */ A(or, [["__scopeId", "data-v-d256ff6d"]]), nr = { class: "dialog-message" }, sr = {
  key: 0,
  class: "dialog-details"
}, lr = {
  key: 1,
  class: "dialog-warning"
}, rr = /* @__PURE__ */ O({
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
    return (l, n) => (t(), g(Pe, {
      title: e.title,
      size: "sm",
      onClose: n[3] || (n[3] = (r) => l.$emit("cancel"))
    }, {
      body: a(() => [
        o("p", nr, u(e.message), 1),
        e.details && e.details.length ? (t(), s("div", sr, [
          (t(!0), s(F, null, Z(e.details, (r, d) => (t(), s("div", {
            key: d,
            class: "detail-item"
          }, " • " + u(r), 1))), 128))
        ])) : c("", !0),
        e.warning ? (t(), s("p", lr, [
          n[4] || (n[4] = o("span", { class: "warning-icon" }, "⚠", -1)),
          f(" " + u(e.warning), 1)
        ])) : c("", !0)
      ]),
      footer: a(() => [
        i(de, {
          variant: "secondary",
          onClick: n[0] || (n[0] = (r) => l.$emit("cancel"))
        }, {
          default: a(() => [
            f(u(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (t(), g(de, {
          key: 0,
          variant: "secondary",
          onClick: n[1] || (n[1] = (r) => l.$emit("secondary"))
        }, {
          default: a(() => [
            f(u(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : c("", !0),
        i(de, {
          variant: e.destructive ? "danger" : "primary",
          onClick: n[2] || (n[2] = (r) => l.$emit("confirm"))
        }, {
          default: a(() => [
            f(u(e.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), ir = /* @__PURE__ */ A(rr, [["__scopeId", "data-v-3670b9f5"]]), cr = { class: "comfygit-panel" }, dr = { class: "panel-header" }, ur = { class: "header-left" }, mr = {
  key: 0,
  class: "header-info"
}, vr = { class: "header-actions" }, fr = { class: "env-switcher" }, gr = {
  key: 0,
  class: "header-info"
}, hr = { class: "branch-name" }, pr = { class: "panel-main" }, yr = { class: "sidebar" }, br = { class: "sidebar-section" }, wr = { class: "sidebar-section" }, kr = { class: "sidebar-section" }, _r = { class: "content-area" }, $r = {
  key: 0,
  class: "error-message"
}, Cr = {
  key: 1,
  class: "loading"
}, xr = {
  key: 11,
  class: "view-placeholder"
}, Ir = {
  key: 12,
  class: "view-placeholder"
}, Sr = { class: "dialog-content env-selector-dialog" }, Er = { class: "dialog-header" }, Lr = { class: "dialog-body" }, Rr = { class: "env-list" }, zr = { class: "env-info" }, Nr = { class: "env-name-row" }, Ur = { class: "env-indicator" }, Mr = { class: "env-name" }, Dr = {
  key: 0,
  class: "env-branch"
}, Vr = {
  key: 1,
  class: "current-label"
}, Br = { class: "env-stats" }, Tr = ["onClick"], Or = { class: "toast-container" }, Ar = { class: "toast-icon" }, Wr = { class: "toast-message" }, Fr = /* @__PURE__ */ O({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(e, { emit: l }) {
    const n = l, {
      getStatus: r,
      getHistory: d,
      exportEnv: x,
      getBranches: p,
      checkout: b,
      createBranch: m,
      switchBranch: k,
      getEnvironments: R
    } = fe(), _ = E(null), M = E([]), H = E([]), J = E([]), P = B(() => J.value.find((W) => W.is_current)), D = E(!1), S = E(null), N = E(null), G = E(!1), y = E("status"), C = E("this-env");
    function v(W, $) {
      y.value = W, C.value = $;
    }
    function w(W) {
      const ae = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[W];
      ae && v(ae.view, ae.section);
    }
    function h() {
      v("branches", "this-env");
    }
    const I = E(null), U = E([]);
    let ie = 0;
    function z(W, $ = "info", ae = 3e3) {
      const le = ++ie;
      return U.value.push({ id: le, message: W, type: $ }), ae > 0 && setTimeout(() => {
        U.value = U.value.filter((Se) => Se.id !== le);
      }, ae), le;
    }
    function L(W) {
      U.value = U.value.filter(($) => $.id !== W);
    }
    function j(W) {
      switch (W) {
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
    const ue = B(() => {
      if (!_.value) return "neutral";
      const W = _.value.workflows, $ = W.new.length > 0 || W.modified.length > 0 || W.deleted.length > 0 || _.value.has_changes;
      return _.value.comparison.is_synced ? $ ? "warning" : "success" : "error";
    });
    B(() => _.value ? ue.value === "success" ? "All synced" : ue.value === "warning" ? "Uncommitted changes" : ue.value === "error" ? "Not synced" : "" : "");
    async function Ie() {
      D.value = !0, S.value = null;
      try {
        const [W, $, ae, le] = await Promise.all([
          r(),
          d(),
          p(),
          R()
        ]);
        _.value = W, M.value = $.commits, H.value = ae.branches, J.value = le, n("statusUpdate", W);
      } catch (W) {
        S.value = W instanceof Error ? W.message : "Failed to load status", _.value = null, M.value = [], H.value = [];
      } finally {
        D.value = !1;
      }
    }
    function He(W) {
      N.value = W;
    }
    async function Be(W) {
      var ae;
      N.value = null;
      const $ = _.value && (_.value.workflows.new.length > 0 || _.value.workflows.modified.length > 0 || _.value.workflows.deleted.length > 0 || _.value.has_changes);
      I.value = {
        title: $ ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: $ ? "You have uncommitted changes that will be lost." : `Checkout commit ${W.short_hash || ((ae = W.hash) == null ? void 0 : ae.slice(0, 7))}?`,
        details: $ ? te() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: $ ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: $,
        onConfirm: async () => {
          var q;
          I.value = null;
          const le = z(`Checking out ${W.short_hash || ((q = W.hash) == null ? void 0 : q.slice(0, 7))}...`, "info", 0), Se = await b(W.hash, $);
          L(le), Se.status === "success" ? z("Restarting ComfyUI...", "success") : z(Se.message || "Checkout failed", "error");
        }
      };
    }
    async function Ke(W) {
      const $ = _.value && (_.value.workflows.new.length > 0 || _.value.workflows.modified.length > 0 || _.value.workflows.deleted.length > 0 || _.value.has_changes);
      I.value = {
        title: $ ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: $ ? "You have uncommitted changes." : `Switch to branch "${W}"?`,
        details: $ ? te() : void 0,
        warning: $ ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: $ ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          I.value = null;
          const ae = z(`Switching to ${W}...`, "info", 0), le = await k(W, $);
          L(ae), le.status === "success" ? z("Restarting ComfyUI...", "success") : z(le.message || "Branch switch failed", "error");
        }
      };
    }
    async function je(W) {
      const $ = z(`Creating branch ${W}...`, "info", 0), ae = await m(W);
      L($), ae.status === "success" ? (z(`Branch "${W}" created`, "success"), await Ie()) : z(ae.message || "Failed to create branch", "error");
    }
    async function qe(W) {
      N.value = null;
      const $ = prompt("Enter branch name:");
      if ($) {
        const ae = z(`Creating branch ${$}...`, "info", 0), le = await m($, W.hash);
        L(ae), le.status === "success" ? (z(`Branch "${$}" created from ${W.short_hash}`, "success"), await Ie()) : z(le.message || "Failed to create branch", "error");
      }
    }
    async function Te(W) {
      G.value = !1, z("Environment switching not yet implemented", "warning");
    }
    async function Ye(W) {
      const $ = z(`Creating environment "${W}"...`, "info", 0);
      L($), z("Environment creation not yet implemented", "warning");
    }
    async function Je(W) {
      const $ = z(`Deleting environment "${W}"...`, "info", 0);
      L($), z("Environment deletion not yet implemented", "warning");
    }
    function T(W) {
      z(`Viewing details for "${W}"`, "info"), v("models-env", "this-env");
    }
    function te() {
      if (!_.value) return [];
      const W = [], $ = _.value.workflows;
      return $.new.length && W.push(`${$.new.length} new workflow(s)`), $.modified.length && W.push(`${$.modified.length} modified workflow(s)`), $.deleted.length && W.push(`${$.deleted.length} deleted workflow(s)`), W;
    }
    async function se() {
      const W = z("Exporting environment...", "info", 0);
      try {
        const $ = await x();
        L(W), $.status === "success" ? (z("Export complete", "success"), alert(`Export successful!

Saved to: ${$.path}

Models without sources: ${$.models_without_sources}`)) : (z("Export failed", "error"), alert(`Export failed: ${$.message}`));
      } catch ($) {
        L(W), z("Export error", "error"), alert(`Export error: ${$ instanceof Error ? $.message : "Unknown error"}`);
      }
    }
    return re(Ie), (W, $) => {
      var ae, le, Se;
      return t(), s("div", cr, [
        o("div", dr, [
          o("div", ur, [
            $[20] || ($[20] = o("h2", { class: "panel-title" }, "ComfyGit", -1)),
            _.value ? (t(), s("div", mr)) : c("", !0)
          ]),
          o("div", vr, [
            o("button", {
              class: K(["icon-btn", { spinning: D.value }]),
              onClick: Ie,
              title: "Refresh"
            }, [...$[21] || ($[21] = [
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
              onClick: $[0] || ($[0] = (q) => n("close")),
              title: "Close"
            }, [...$[22] || ($[22] = [
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
        o("div", fr, [
          $[24] || ($[24] = o("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
          o("button", {
            class: "env-switcher-btn",
            onClick: $[1] || ($[1] = (q) => G.value = !0)
          }, [
            _.value ? (t(), s("div", gr, [
              o("span", null, u(((ae = P.value) == null ? void 0 : ae.name) || ((le = _.value) == null ? void 0 : le.environment) || "Loading..."), 1),
              o("span", hr, "(" + u(_.value.branch || "detached") + ")", 1)
            ])) : c("", !0),
            $[23] || ($[23] = o("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        o("div", pr, [
          o("div", yr, [
            o("div", br, [
              $[25] || ($[25] = o("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              o("button", {
                class: K(["sidebar-item", { active: y.value === "status" && C.value === "this-env" }]),
                onClick: $[2] || ($[2] = (q) => v("status", "this-env"))
              }, " STATUS ", 2),
              o("button", {
                class: K(["sidebar-item", { active: y.value === "workflows" }]),
                onClick: $[3] || ($[3] = (q) => v("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              o("button", {
                class: K(["sidebar-item", { active: y.value === "models-env" }]),
                onClick: $[4] || ($[4] = (q) => v("models-env", "this-env"))
              }, " MODELS ", 2),
              o("button", {
                class: K(["sidebar-item", { active: y.value === "branches" }]),
                onClick: $[5] || ($[5] = (q) => v("branches", "this-env"))
              }, " BRANCHES ", 2),
              o("button", {
                class: K(["sidebar-item", { active: y.value === "history" }]),
                onClick: $[6] || ($[6] = (q) => v("history", "this-env"))
              }, " HISTORY ", 2),
              o("button", {
                class: K(["sidebar-item", { active: y.value === "nodes" }]),
                onClick: $[7] || ($[7] = (q) => v("nodes", "this-env"))
              }, " NODES ", 2),
              o("button", {
                class: K(["sidebar-item", { active: y.value === "debug-env" }]),
                onClick: $[8] || ($[8] = (q) => v("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            $[28] || ($[28] = o("div", { class: "sidebar-divider" }, null, -1)),
            o("div", wr, [
              $[26] || ($[26] = o("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              o("button", {
                class: K(["sidebar-item", { active: y.value === "environments" }]),
                onClick: $[9] || ($[9] = (q) => v("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              o("button", {
                class: K(["sidebar-item", { active: y.value === "model-index" }]),
                onClick: $[10] || ($[10] = (q) => v("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              o("button", {
                class: K(["sidebar-item", { active: y.value === "settings" }]),
                onClick: $[11] || ($[11] = (q) => v("settings", "all-envs"))
              }, " SETTINGS ", 2),
              o("button", {
                class: K(["sidebar-item", { active: y.value === "debug-workspace" }]),
                onClick: $[12] || ($[12] = (q) => v("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            $[29] || ($[29] = o("div", { class: "sidebar-divider" }, null, -1)),
            o("div", kr, [
              $[27] || ($[27] = o("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              o("button", {
                class: K(["sidebar-item", { active: y.value === "export" }]),
                onClick: $[13] || ($[13] = (q) => v("export", "sharing"))
              }, " EXPORT ", 2),
              o("button", {
                class: K(["sidebar-item", { active: y.value === "import" }]),
                onClick: $[14] || ($[14] = (q) => v("import", "sharing"))
              }, " IMPORT ", 2),
              o("button", {
                class: K(["sidebar-item", { active: y.value === "remotes" }]),
                onClick: $[15] || ($[15] = (q) => v("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          o("div", _r, [
            S.value ? (t(), s("div", $r, u(S.value), 1)) : !_.value && y.value === "status" ? (t(), s("div", Cr, " Loading status... ")) : (t(), s(F, { key: 2 }, [
              y.value === "status" ? (t(), g(No, {
                key: 0,
                status: _.value,
                onSwitchBranch: h
              }, null, 8, ["status"])) : y.value === "workflows" ? (t(), g(Pn, {
                key: 1,
                onRefresh: Ie
              })) : y.value === "models-env" ? (t(), g(as, {
                key: 2,
                onNavigate: w
              })) : y.value === "branches" ? (t(), g(jo, {
                key: 3,
                branches: H.value,
                current: ((Se = _.value) == null ? void 0 : Se.branch) || null,
                onSwitch: Ke,
                onCreate: je
              }, null, 8, ["branches", "current"])) : y.value === "history" ? (t(), g(sa, {
                key: 4,
                commits: M.value,
                onSelect: He,
                onCheckout: Be
              }, null, 8, ["commits"])) : y.value === "nodes" ? (t(), g(ds, { key: 5 })) : y.value === "debug-env" ? (t(), g(Sl, { key: 6 })) : y.value === "environments" ? (t(), g(Ol, {
                key: 7,
                onSwitch: Te,
                onCreate: Ye,
                onDelete: Je,
                onViewDetails: T
              })) : y.value === "model-index" ? (t(), g(ss, { key: 8 })) : y.value === "settings" ? (t(), g(ll, { key: 9 })) : y.value === "debug-workspace" ? (t(), g(Cl, { key: 10 })) : y.value === "export" ? (t(), s("div", xr, [
                $[31] || ($[31] = o("h3", { class: "view-title" }, "EXPORT", -1)),
                o("button", {
                  class: "export-btn",
                  onClick: se
                }, [...$[30] || ($[30] = [
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
              ])) : y.value === "import" ? (t(), s("div", Ir, [...$[32] || ($[32] = [
                o("h3", { class: "view-title" }, "IMPORT", -1),
                o("p", null, "Import UI coming soon...", -1)
              ])])) : y.value === "remotes" ? (t(), g(Gs, { key: 13 })) : c("", !0)
            ], 64))
          ])
        ]),
        N.value ? (t(), g(ar, {
          key: 0,
          commit: N.value,
          onClose: $[16] || ($[16] = (q) => N.value = null),
          onCheckout: Be,
          onCreateBranch: qe
        }, null, 8, ["commit"])) : c("", !0),
        I.value ? (t(), g(ir, {
          key: 1,
          title: I.value.title,
          message: I.value.message,
          details: I.value.details,
          warning: I.value.warning,
          confirmLabel: I.value.confirmLabel,
          cancelLabel: I.value.cancelLabel,
          secondaryLabel: I.value.secondaryLabel,
          secondaryAction: I.value.secondaryAction,
          destructive: I.value.destructive,
          onConfirm: I.value.onConfirm,
          onCancel: $[17] || ($[17] = (q) => I.value = null),
          onSecondary: I.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : c("", !0),
        G.value ? (t(), s("div", {
          key: 2,
          class: "dialog-overlay",
          onClick: $[19] || ($[19] = Ne((q) => G.value = !1, ["self"]))
        }, [
          o("div", Sr, [
            o("div", Er, [
              $[34] || ($[34] = o("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              o("button", {
                class: "icon-btn",
                onClick: $[18] || ($[18] = (q) => G.value = !1)
              }, [...$[33] || ($[33] = [
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
            o("div", Lr, [
              $[35] || ($[35] = o("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              o("div", Rr, [
                (t(!0), s(F, null, Z(J.value, (q) => (t(), s("div", {
                  key: q.name,
                  class: K(["env-item", { current: q.is_current }])
                }, [
                  o("div", zr, [
                    o("div", Nr, [
                      o("span", Ur, u(q.is_current ? "●" : "○"), 1),
                      o("span", Mr, u(q.name), 1),
                      q.current_branch ? (t(), s("span", Dr, "(" + u(q.current_branch) + ")", 1)) : c("", !0),
                      q.is_current ? (t(), s("span", Vr, "CURRENT")) : c("", !0)
                    ]),
                    o("div", Br, u(q.workflow_count) + " workflows • " + u(q.node_count) + " nodes ", 1)
                  ]),
                  q.is_current ? c("", !0) : (t(), s("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (wi) => Te(q.name)
                  }, " SWITCH ", 8, Tr))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : c("", !0),
        o("div", Or, [
          i(Ct, { name: "toast" }, {
            default: a(() => [
              (t(!0), s(F, null, Z(U.value, (q) => (t(), s("div", {
                key: q.id,
                class: K(["toast", q.type])
              }, [
                o("span", Ar, u(j(q.type)), 1),
                o("span", Wr, u(q.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), Gr = /* @__PURE__ */ A(Fr, [["__scopeId", "data-v-66b4f9e6"]]), Pr = { class: "base-textarea-wrapper" }, Hr = ["value", "rows", "placeholder", "disabled", "maxlength"], Kr = {
  key: 0,
  class: "base-textarea-count"
}, jr = /* @__PURE__ */ O({
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
    return (l, n) => (t(), s("div", Pr, [
      o("textarea", {
        value: e.modelValue,
        rows: e.rows,
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxlength: e.maxLength,
        class: "base-textarea",
        onInput: n[0] || (n[0] = (r) => l.$emit("update:modelValue", r.target.value)),
        onKeydown: [
          n[1] || (n[1] = we(Ne((r) => l.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          n[2] || (n[2] = we(Ne((r) => l.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, Hr),
      e.showCharCount && e.maxLength ? (t(), s("div", Kr, u(e.modelValue.length) + " / " + u(e.maxLength), 1)) : c("", !0)
    ]));
  }
}), qr = /* @__PURE__ */ A(jr, [["__scopeId", "data-v-5516e6fc"]]), Yr = { class: "commit-popover" }, Jr = { class: "popover-header" }, Zr = { class: "popover-body" }, Xr = {
  key: 0,
  class: "changes-summary"
}, Qr = {
  key: 0,
  class: "change-item"
}, ei = {
  key: 1,
  class: "change-item"
}, ti = {
  key: 2,
  class: "change-item"
}, oi = {
  key: 3,
  class: "change-item"
}, ai = {
  key: 4,
  class: "change-item"
}, ni = {
  key: 1,
  class: "no-changes"
}, si = {
  key: 2,
  class: "loading"
}, li = { class: "message-section" }, ri = { class: "popover-footer" }, ii = /* @__PURE__ */ O({
  __name: "CommitPopover",
  props: {
    status: {}
  },
  emits: ["close", "committed"],
  setup(e, { emit: l }) {
    const n = e, r = l, { commit: d } = fe(), x = E(""), p = E(!1), b = E(null), m = B(() => {
      if (!n.status) return !1;
      const R = n.status.workflows;
      return R.new.length > 0 || R.modified.length > 0 || R.deleted.length > 0 || n.status.has_changes;
    });
    async function k() {
      var R, _, M;
      if (!(!m.value || !x.value.trim() || p.value)) {
        p.value = !0, b.value = null;
        try {
          const H = await d(x.value.trim());
          H.status === "success" ? (b.value = {
            type: "success",
            message: `Committed: ${((R = H.summary) == null ? void 0 : R.new) || 0} new, ${((_ = H.summary) == null ? void 0 : _.modified) || 0} modified, ${((M = H.summary) == null ? void 0 : M.deleted) || 0} deleted`
          }, x.value = "", setTimeout(() => r("committed"), 1e3)) : H.status === "no_changes" ? b.value = { type: "error", message: "No changes to commit" } : b.value = { type: "error", message: H.message || "Commit failed" };
        } catch (H) {
          b.value = { type: "error", message: H instanceof Error ? H.message : "Commit failed" };
        } finally {
          p.value = !1;
        }
      }
    }
    return (R, _) => (t(), s("div", Yr, [
      o("div", Jr, [
        _[4] || (_[4] = o("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        o("button", {
          class: "close-btn",
          onClick: _[0] || (_[0] = (M) => r("close"))
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
      o("div", Zr, [
        e.status && m.value ? (t(), s("div", Xr, [
          e.status.workflows.new.length ? (t(), s("div", Qr, [
            _[5] || (_[5] = o("span", { class: "change-icon new" }, "+", -1)),
            o("span", null, u(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : c("", !0),
          e.status.workflows.modified.length ? (t(), s("div", ei, [
            _[6] || (_[6] = o("span", { class: "change-icon modified" }, "~", -1)),
            o("span", null, u(e.status.workflows.modified.length) + " modified", 1)
          ])) : c("", !0),
          e.status.workflows.deleted.length ? (t(), s("div", ti, [
            _[7] || (_[7] = o("span", { class: "change-icon deleted" }, "-", -1)),
            o("span", null, u(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : c("", !0),
          e.status.git_changes.nodes_added.length ? (t(), s("div", oi, [
            _[8] || (_[8] = o("span", { class: "change-icon new" }, "+", -1)),
            o("span", null, u(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : c("", !0),
          e.status.git_changes.nodes_removed.length ? (t(), s("div", ai, [
            _[9] || (_[9] = o("span", { class: "change-icon deleted" }, "-", -1)),
            o("span", null, u(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : c("", !0)
        ])) : e.status ? (t(), s("div", ni, " No changes to commit ")) : (t(), s("div", si, " Loading... ")),
        o("div", li, [
          i(qr, {
            modelValue: x.value,
            "onUpdate:modelValue": _[1] || (_[1] = (M) => x.value = M),
            placeholder: m.value ? "Describe your changes..." : "No changes",
            disabled: !m.value || p.value,
            rows: 3,
            onCtrlEnter: k
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        b.value ? (t(), s("div", {
          key: 3,
          class: K(["result", b.value.type])
        }, u(b.value.message), 3)) : c("", !0)
      ]),
      o("div", ri, [
        i(de, {
          variant: "secondary",
          onClick: _[2] || (_[2] = (M) => r("close"))
        }, {
          default: a(() => [..._[10] || (_[10] = [
            f(" Cancel ", -1)
          ])]),
          _: 1
        }),
        i(de, {
          variant: "primary",
          disabled: !m.value || !x.value.trim() || p.value,
          loading: p.value,
          onClick: k
        }, {
          default: a(() => [
            f(u(p.value ? "Committing..." : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ])
    ]));
  }
}), ci = /* @__PURE__ */ A(ii, [["__scopeId", "data-v-4f587977"]]), di = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}', ui = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', mi = {
  comfy: di,
  phosphor: ui
}, st = "comfy", ht = "comfygit-theme";
let Ee = null, pt = st;
function vi() {
  try {
    const e = localStorage.getItem(ht);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return st;
}
function yt(e = st) {
  Ee && Ee.remove(), Ee = document.createElement("style"), Ee.id = "comfygit-theme-styles", Ee.setAttribute("data-theme", e), Ee.textContent = mi[e], document.head.appendChild(Ee), document.body.setAttribute("data-comfygit-theme", e), pt = e;
  try {
    localStorage.setItem(ht, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function fi() {
  return pt;
}
function gi(e) {
  yt(e);
}
const lt = document.createElement("link");
lt.rel = "stylesheet";
lt.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(lt);
const hi = vi();
yt(hi);
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), gi(e);
  },
  getTheme: () => {
    const e = fi();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
let pe = null, me = null, Ve = null;
const ze = E(null);
async function ot() {
  var e;
  if (!((e = window.app) != null && e.api)) return null;
  try {
    const l = await window.app.api.fetchApi("/v2/comfygit/status");
    l.ok && (ze.value = await l.json());
  } catch {
  }
}
function pi() {
  if (!ze.value) return !1;
  const e = ze.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || ze.value.has_changes;
}
function yi() {
  pe && pe.remove(), pe = document.createElement("div"), pe.className = "comfygit-panel-overlay";
  const e = document.createElement("div");
  e.className = "comfygit-panel-container", pe.appendChild(e), pe.addEventListener("click", (r) => {
    r.target === pe && tt();
  });
  const l = (r) => {
    r.key === "Escape" && (tt(), document.removeEventListener("keydown", l));
  };
  document.addEventListener("keydown", l), dt({
    render: () => ut(Gr, {
      onClose: tt,
      onStatusUpdate: (r) => {
        ze.value = r, Ge();
      }
    })
  }).mount(e), document.body.appendChild(pe);
}
function tt() {
  pe && (pe.remove(), pe = null);
}
function bi(e) {
  Me(), me = document.createElement("div"), me.className = "comfygit-commit-popover-container";
  const l = e.getBoundingClientRect();
  me.style.position = "fixed", me.style.top = `${l.bottom + 8}px`, me.style.right = `${window.innerWidth - l.right}px`, me.style.zIndex = "10001";
  const n = (d) => {
    me && !me.contains(d.target) && d.target !== e && (Me(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const r = (d) => {
    d.key === "Escape" && (Me(), document.removeEventListener("keydown", r));
  };
  document.addEventListener("keydown", r), Ve = dt({
    render: () => ut(ci, {
      status: ze.value,
      onClose: Me,
      onCommitted: () => {
        Me(), ot().then(Ge);
      }
    })
  }), Ve.mount(me), document.body.appendChild(me);
}
function Me() {
  Ve && (Ve.unmount(), Ve = null), me && (me.remove(), me = null);
}
let be = null;
function Ge() {
  if (!be) return;
  const e = be.querySelector(".commit-indicator");
  e && (e.style.display = pi() ? "block" : "none");
}
const bt = document.createElement("style");
bt.textContent = `
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
document.head.appendChild(bt);
Ze.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var n, r;
    const e = document.createElement("div");
    e.className = "comfygit-btn-group";
    const l = document.createElement("button");
    l.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", l.textContent = "ComfyGit", l.title = "ComfyGit Control Panel", l.onclick = yi, be = document.createElement("button"), be.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", be.innerHTML = 'Commit <span class="commit-indicator"></span>', be.title = "Quick Commit", be.onclick = () => bi(be), e.appendChild(l), e.appendChild(be), (r = (n = Ze.menu) == null ? void 0 : n.settingsGroup) != null && r.element && (Ze.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), await ot(), Ge(), setInterval(async () => {
      await ot(), Ge();
    }, 3e4);
  }
});
