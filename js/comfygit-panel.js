import { app as Me } from "../../scripts/app.js";
import { defineComponent as O, createElementBlock as s, openBlock as t, createCommentVNode as d, createElementVNode as o, renderSlot as K, createBlock as w, resolveDynamicComponent as Oe, normalizeClass as A, withCtx as n, toDisplayString as c, createVNode as _, createTextVNode as g, computed as P, Fragment as H, renderList as Y, ref as S, onMounted as ue, withKeys as $e, withModifiers as be, onUnmounted as nt, Teleport as Fe, normalizeStyle as Ge, TransitionGroup as lt, createApp as Ke, h as je } from "vue";
const rt = { class: "panel-layout" }, it = {
  key: 0,
  class: "panel-layout-header"
}, ct = {
  key: 1,
  class: "panel-layout-search"
}, dt = { class: "panel-layout-content" }, ut = {
  key: 2,
  class: "panel-layout-footer"
}, mt = /* @__PURE__ */ O({
  __name: "PanelLayout",
  setup(e) {
    return (r, a) => (t(), s("div", rt, [
      r.$slots.header ? (t(), s("div", it, [
        K(r.$slots, "header", {}, void 0, !0)
      ])) : d("", !0),
      r.$slots.search ? (t(), s("div", ct, [
        K(r.$slots, "search", {}, void 0, !0)
      ])) : d("", !0),
      o("div", dt, [
        K(r.$slots, "content", {}, void 0, !0)
      ]),
      r.$slots.footer ? (t(), s("div", ut, [
        K(r.$slots, "footer", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), R = (e, r) => {
  const a = e.__vccOpts || e;
  for (const [l, k] of r)
    a[l] = k;
  return a;
}, xe = /* @__PURE__ */ R(mt, [["__scopeId", "data-v-21565df9"]]), gt = {
  key: 0,
  class: "panel-title-prefix"
}, ft = {
  key: 1,
  class: "panel-title-prefix-theme"
}, ht = /* @__PURE__ */ O({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (r, a) => (t(), w(Oe(`h${e.level}`), {
      class: A(["panel-title", e.variant])
    }, {
      default: n(() => [
        e.showPrefix ? (t(), s("span", gt, c(e.prefix), 1)) : (t(), s("span", ft)),
        K(r.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), vt = /* @__PURE__ */ R(ht, [["__scopeId", "data-v-c3875efc"]]), pt = ["title"], yt = ["width", "height"], bt = /* @__PURE__ */ O({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(e) {
    return (r, a) => (t(), s("button", {
      class: "info-button",
      title: e.title,
      onClick: a[0] || (a[0] = (l) => r.$emit("click"))
    }, [
      (t(), s("svg", {
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
      ])], 8, yt))
    ], 8, pt));
  }
}), wt = /* @__PURE__ */ R(bt, [["__scopeId", "data-v-6fc7f16d"]]), kt = { class: "header-left" }, _t = {
  key: 0,
  class: "header-actions"
}, $t = /* @__PURE__ */ O({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(e) {
    return (r, a) => (t(), s("div", {
      class: A(["panel-header", { stacked: e.stacked }])
    }, [
      o("div", kt, [
        _(vt, { "show-prefix": e.showPrefix }, {
          default: n(() => [
            g(c(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (t(), w(wt, {
          key: 0,
          onClick: a[0] || (a[0] = (l) => r.$emit("info-click"))
        })) : d("", !0)
      ]),
      r.$slots.actions ? (t(), s("div", _t, [
        K(r.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), Ce = /* @__PURE__ */ R($t, [["__scopeId", "data-v-55a62cd6"]]), xt = {
  key: 0,
  class: "section-title-count"
}, Ct = {
  key: 1,
  class: "section-title-icon"
}, St = /* @__PURE__ */ O({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (r, a) => (t(), w(Oe(`h${e.level}`), {
      class: A(["section-title", { clickable: e.clickable }]),
      onClick: a[0] || (a[0] = (l) => e.clickable && r.$emit("click"))
    }, {
      default: n(() => [
        K(r.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (t(), s("span", xt, "(" + c(e.count) + ")", 1)) : d("", !0),
        e.clickable ? (t(), s("span", Ct, c(e.expanded ? "▼" : "▸"), 1)) : d("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ne = /* @__PURE__ */ R(St, [["__scopeId", "data-v-559361eb"]]), Et = { class: "status-grid" }, It = { class: "status-grid__column" }, zt = { class: "status-grid__title" }, Lt = { class: "status-grid__column status-grid__column--right" }, Mt = { class: "status-grid__title" }, Bt = /* @__PURE__ */ O({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (r, a) => (t(), s("div", Et, [
      o("div", It, [
        o("h4", zt, c(e.leftTitle), 1),
        K(r.$slots, "left", {}, void 0, !0)
      ]),
      o("div", Lt, [
        o("h4", Mt, c(e.rightTitle), 1),
        K(r.$slots, "right", {}, void 0, !0)
      ])
    ]));
  }
}), Tt = /* @__PURE__ */ R(Bt, [["__scopeId", "data-v-fe556068"]]), Nt = {
  key: 0,
  class: "status-item__icon"
}, Dt = {
  key: 1,
  class: "status-item__count"
}, Ot = { class: "status-item__label" }, Rt = /* @__PURE__ */ O({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(e) {
    const r = e, a = P(() => `status-item--${r.variant}`);
    return (l, k) => (t(), s("div", {
      class: A(["status-item", a.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (t(), s("span", Nt, c(e.icon), 1)) : d("", !0),
      e.count !== void 0 ? (t(), s("span", Dt, c(e.count), 1)) : d("", !0),
      o("span", Ot, c(e.label), 1)
    ], 2));
  }
}), ge = /* @__PURE__ */ R(Rt, [["__scopeId", "data-v-6f929183"]]), Wt = { class: "issue-card__header" }, Vt = { class: "issue-card__icon" }, At = { class: "issue-card__title" }, Ut = {
  key: 0,
  class: "issue-card__content"
}, Pt = {
  key: 0,
  class: "issue-card__description"
}, Ht = {
  key: 1,
  class: "issue-card__items"
}, Ft = {
  key: 2,
  class: "issue-card__actions"
}, Gt = /* @__PURE__ */ O({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(e) {
    const r = e, a = P(() => `issue-card--${r.severity}`);
    return (l, k) => (t(), s("div", {
      class: A(["issue-card", a.value])
    }, [
      o("div", Wt, [
        o("span", Vt, c(e.icon), 1),
        o("h4", At, c(e.title), 1)
      ]),
      l.$slots.default || e.description ? (t(), s("div", Ut, [
        e.description ? (t(), s("p", Pt, c(e.description), 1)) : d("", !0),
        K(l.$slots, "default", {}, void 0, !0)
      ])) : d("", !0),
      e.items && e.items.length ? (t(), s("div", Ht, [
        (t(!0), s(H, null, Y(e.items, (x, f) => (t(), s("div", {
          key: f,
          class: "issue-card__item"
        }, [
          k[0] || (k[0] = o("span", { class: "issue-card__bullet" }, "•", -1)),
          o("span", null, c(x), 1)
        ]))), 128))
      ])) : d("", !0),
      l.$slots.actions ? (t(), s("div", Ft, [
        K(l.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), Be = /* @__PURE__ */ R(Gt, [["__scopeId", "data-v-df6aa348"]]), Kt = ["type", "disabled"], jt = {
  key: 0,
  class: "spinner"
}, qt = /* @__PURE__ */ O({
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
    return (r, a) => (t(), s("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: A(["action-btn", e.variant, e.size, { loading: e.loading }]),
      onClick: a[0] || (a[0] = (l) => r.$emit("click", l))
    }, [
      e.loading ? (t(), s("span", jt)) : d("", !0),
      e.loading ? d("", !0) : K(r.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, Kt));
  }
}), U = /* @__PURE__ */ R(qt, [["__scopeId", "data-v-772abe47"]]), Yt = { class: "empty-state" }, Zt = {
  key: 0,
  class: "empty-icon"
}, Xt = { class: "empty-message" }, Jt = /* @__PURE__ */ O({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (r, a) => (t(), s("div", Yt, [
      e.icon ? (t(), s("div", Zt, c(e.icon), 1)) : d("", !0),
      o("p", Xt, c(e.message), 1),
      e.actionLabel ? (t(), w(U, {
        key: 1,
        variant: e.actionVariant || "secondary",
        size: "sm",
        onClick: a[0] || (a[0] = (l) => r.$emit("action"))
      }, {
        default: n(() => [
          g(c(e.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : d("", !0)
    ]));
  }
}), Se = /* @__PURE__ */ R(Jt, [["__scopeId", "data-v-4466284f"]]), Qt = { class: "branch-indicator" }, eo = { class: "branch-indicator__info" }, to = { class: "branch-indicator__label" }, oo = { class: "branch-indicator__name" }, ao = {
  key: 0,
  class: "branch-indicator__remote"
}, so = {
  key: 0,
  class: "branch-indicator__status"
}, no = {
  key: 0,
  class: "branch-indicator__ahead"
}, lo = {
  key: 1,
  class: "branch-indicator__behind"
}, ro = {
  key: 1,
  class: "branch-indicator__actions"
}, io = /* @__PURE__ */ O({
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
    return (r, a) => (t(), s("div", Qt, [
      o("div", eo, [
        o("span", to, c(e.label), 1),
        o("span", oo, c(e.branchName), 1),
        e.remote ? (t(), s("span", ao, "@" + c(e.remote), 1)) : d("", !0)
      ]),
      e.showStatus && (e.commitsAhead || e.commitsBehind) ? (t(), s("div", so, [
        e.commitsAhead ? (t(), s("span", no, " ↑ " + c(e.commitsAhead) + " ahead ", 1)) : d("", !0),
        e.commitsBehind ? (t(), s("span", lo, " ↓ " + c(e.commitsBehind) + " behind ", 1)) : d("", !0)
      ])) : d("", !0),
      r.$slots.actions ? (t(), s("div", ro, [
        K(r.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), co = /* @__PURE__ */ R(io, [["__scopeId", "data-v-cb8dd50e"]]), uo = { style: { "margin-top": "var(--cg-space-1)" } }, mo = {
  key: 0,
  style: { "margin-top": "var(--cg-space-4)" }
}, go = /* @__PURE__ */ O({
  __name: "StatusSection",
  props: {
    status: {}
  },
  emits: ["view-workflows", "resolve-models", "view-history", "commit-changes", "view-debug", "sync-environment", "switch-branch"],
  setup(e, { emit: r }) {
    const a = e, l = P(() => a.status.workflows.new.length > 0 || a.status.workflows.modified.length > 0 || a.status.workflows.deleted.length > 0), k = P(() => {
      const u = a.status.git_changes;
      return u.nodes_added.length > 0 || u.nodes_removed.length > 0 || u.workflow_changes || u.has_other_changes;
    }), x = P(() => {
      const u = a.status.git_changes, b = a.status.workflows;
      return (u.workflow_changes || u.has_other_changes) && b.new.length === 0 && b.modified.length === 0 && b.deleted.length === 0;
    }), f = P(() => a.status.missing_models_count > 0 || k.value || !a.status.comparison.is_synced), p = P(() => {
      const u = [];
      return a.status.workflows.new.length > 0 && u.push(`${a.status.workflows.new.length} new workflow${a.status.workflows.new.length === 1 ? "" : "s"}`), a.status.workflows.modified.length > 0 && u.push(`${a.status.workflows.modified.length} modified workflow${a.status.workflows.modified.length === 1 ? "" : "s"}`), a.status.workflows.deleted.length > 0 && u.push(`${a.status.workflows.deleted.length} deleted workflow${a.status.workflows.deleted.length === 1 ? "" : "s"}`), a.status.git_changes.nodes_added.length > 0 && u.push(`${a.status.git_changes.nodes_added.length} node${a.status.git_changes.nodes_added.length === 1 ? "" : "s"} added`), a.status.git_changes.nodes_removed.length > 0 && u.push(`${a.status.git_changes.nodes_removed.length} node${a.status.git_changes.nodes_removed.length === 1 ? "" : "s"} removed`), `${u.length > 0 ? u.join(", ") + "." : "You have uncommitted changes."} Your work could be lost if you switch branches without committing.`;
    });
    return (u, b) => (t(), w(xe, null, {
      header: n(() => [
        _(Ce, { title: "STATUS" })
      ]),
      content: n(() => [
        _(Ne, {
          level: "4",
          style: { "margin-bottom": "var(--cg-space-2)" }
        }, {
          default: n(() => [...b[7] || (b[7] = [
            g(" ENVIRONMENT HEALTH ", -1)
          ])]),
          _: 1
        }),
        _(Tt, {
          "left-title": "WORKFLOWS",
          "right-title": "GIT CHANGES"
        }, {
          left: n(() => [
            e.status.workflows.new.length ? (t(), w(ge, {
              key: 0,
              icon: "●",
              count: e.status.workflows.new.length,
              label: "new",
              variant: "new"
            }, null, 8, ["count"])) : d("", !0),
            e.status.workflows.modified.length ? (t(), w(ge, {
              key: 1,
              icon: "●",
              count: e.status.workflows.modified.length,
              label: "modified",
              variant: "modified"
            }, null, 8, ["count"])) : d("", !0),
            e.status.workflows.deleted.length ? (t(), w(ge, {
              key: 2,
              icon: "●",
              count: e.status.workflows.deleted.length,
              label: "deleted",
              variant: "deleted"
            }, null, 8, ["count"])) : d("", !0),
            _(ge, {
              icon: "✓",
              count: e.status.workflows.synced.length,
              label: "synced",
              variant: "synced",
              separator: l.value
            }, null, 8, ["count", "separator"])
          ]),
          right: n(() => [
            e.status.git_changes.nodes_added.length ? (t(), w(ge, {
              key: 0,
              icon: "●",
              count: e.status.git_changes.nodes_added.length,
              label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
              variant: "new"
            }, null, 8, ["count", "label"])) : d("", !0),
            e.status.git_changes.nodes_removed.length ? (t(), w(ge, {
              key: 1,
              icon: "●",
              count: e.status.git_changes.nodes_removed.length,
              label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
              variant: "deleted"
            }, null, 8, ["count", "label"])) : d("", !0),
            x.value ? (t(), w(ge, {
              key: 2,
              icon: "●",
              label: "other changes",
              variant: "modified"
            })) : d("", !0),
            k.value ? d("", !0) : (t(), w(ge, {
              key: 3,
              icon: "✓",
              label: "No uncommitted changes",
              variant: "ok"
            }))
          ]),
          _: 1
        }),
        o("div", uo, [
          _(co, {
            "branch-name": e.status.current_branch || "main"
          }, {
            actions: n(() => [
              _(U, {
                variant: "secondary",
                size: "sm",
                onClick: b[0] || (b[0] = (L) => u.$emit("switch-branch"))
              }, {
                default: n(() => [...b[8] || (b[8] = [
                  g(" Switch Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["branch-name"])
        ]),
        f.value ? (t(), s("div", mo, [
          _(Ne, {
            level: "4",
            style: { "margin-bottom": "var(--cg-space-2)" }
          }, {
            default: n(() => [...b[9] || (b[9] = [
              g(" ISSUES DETECTED ", -1)
            ])]),
            _: 1
          }),
          e.status.missing_models_count > 0 ? (t(), w(Be, {
            key: 0,
            severity: "warning",
            icon: "⚠",
            title: `${e.status.missing_models_count} missing model${e.status.missing_models_count === 1 ? "" : "s"}`,
            description: "Some workflows reference models that are not found in the workspace index."
          }, {
            actions: n(() => [
              _(U, {
                variant: "secondary",
                size: "sm",
                onClick: b[1] || (b[1] = (L) => u.$emit("view-workflows"))
              }, {
                default: n(() => [...b[10] || (b[10] = [
                  g(" View Details ", -1)
                ])]),
                _: 1
              }),
              _(U, {
                variant: "primary",
                size: "sm",
                onClick: b[2] || (b[2] = (L) => u.$emit("resolve-models"))
              }, {
                default: n(() => [...b[11] || (b[11] = [
                  g(" Resolve ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["title"])) : d("", !0),
          k.value ? (t(), w(Be, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "You have unsaved changes",
            description: p.value
          }, {
            actions: n(() => [
              _(U, {
                variant: "secondary",
                size: "sm",
                onClick: b[3] || (b[3] = (L) => u.$emit("view-history"))
              }, {
                default: n(() => [...b[12] || (b[12] = [
                  g(" View Changes ", -1)
                ])]),
                _: 1
              }),
              _(U, {
                variant: "primary",
                size: "sm",
                onClick: b[4] || (b[4] = (L) => u.$emit("commit-changes"))
              }, {
                default: n(() => [...b[13] || (b[13] = [
                  g(" Commit Changes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["description"])) : d("", !0),
          e.status.comparison.is_synced ? d("", !0) : (t(), w(Be, {
            key: 2,
            severity: "error",
            icon: "⚠",
            title: "Environment not synced",
            description: "Your environment state does not match the git repository. This may indicate missing installations or configuration issues."
          }, {
            actions: n(() => [
              _(U, {
                variant: "secondary",
                size: "sm",
                onClick: b[5] || (b[5] = (L) => u.$emit("view-debug"))
              }, {
                default: n(() => [...b[14] || (b[14] = [
                  g(" View Logs ", -1)
                ])]),
                _: 1
              }),
              _(U, {
                variant: "primary",
                size: "sm",
                onClick: b[6] || (b[6] = (L) => u.$emit("sync-environment"))
              }, {
                default: n(() => [...b[15] || (b[15] = [
                  g(" Sync Now ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }))
        ])) : d("", !0),
        !f.value && !k.value ? (t(), w(Se, {
          key: 1,
          icon: "✅",
          message: "Everything looks good! No issues detected.",
          style: { "margin-top": "var(--cg-space-4)" }
        })) : d("", !0)
      ]),
      _: 1
    }));
  }
}), fo = /* @__PURE__ */ R(go, [["__scopeId", "data-v-2045da26"]]), ho = ["type", "value", "placeholder", "disabled"], vo = /* @__PURE__ */ O({
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
  setup(e, { expose: r, emit: a }) {
    const l = e, k = a, x = S(null);
    function f(p) {
      const u = p.target.value;
      k("update:modelValue", u);
    }
    return ue(() => {
      l.autoFocus && x.value && x.value.focus();
    }), r({
      focus: () => {
        var p;
        return (p = x.value) == null ? void 0 : p.focus();
      },
      blur: () => {
        var p;
        return (p = x.value) == null ? void 0 : p.blur();
      }
    }), (p, u) => (t(), s("input", {
      ref_key: "inputRef",
      ref: x,
      type: e.type,
      value: e.modelValue,
      placeholder: e.placeholder,
      disabled: e.disabled,
      class: A(["text-input", { error: e.hasError, monospace: e.monospace }]),
      onInput: f,
      onKeyup: [
        u[0] || (u[0] = $e((b) => p.$emit("enter"), ["enter"])),
        u[1] || (u[1] = $e((b) => p.$emit("escape"), ["escape"]))
      ],
      onFocus: u[2] || (u[2] = (b) => p.$emit("focus")),
      onBlur: u[3] || (u[3] = (b) => p.$emit("blur"))
    }, null, 42, ho));
  }
}), po = /* @__PURE__ */ R(vo, [["__scopeId", "data-v-0380d08f"]]), yo = { class: "branch-create-form" }, bo = { class: "form-actions" }, wo = /* @__PURE__ */ O({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(e, { emit: r }) {
    const a = r, l = S(""), k = P(() => {
      const p = l.value.trim();
      return p.length > 0 && !p.startsWith("-") && !p.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(p);
    });
    function x() {
      k.value && (a("create", l.value.trim()), l.value = "");
    }
    function f() {
      l.value = "", a("cancel");
    }
    return (p, u) => (t(), s("div", yo, [
      _(po, {
        modelValue: l.value,
        "onUpdate:modelValue": u[0] || (u[0] = (b) => l.value = b),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: x,
        onEscape: f
      }, null, 8, ["modelValue"]),
      o("div", bo, [
        _(U, {
          variant: "primary",
          size: "sm",
          disabled: !k.value,
          onClick: x
        }, {
          default: n(() => [...u[1] || (u[1] = [
            g(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        _(U, {
          variant: "secondary",
          size: "sm",
          onClick: f
        }, {
          default: n(() => [...u[2] || (u[2] = [
            g(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), ko = /* @__PURE__ */ R(wo, [["__scopeId", "data-v-7c500394"]]), _o = { class: "branch-list-item__indicator" }, $o = { class: "branch-list-item__name" }, xo = {
  key: 0,
  class: "branch-list-item__actions"
}, Co = {
  key: 0,
  class: "branch-list-item__current-label"
}, So = /* @__PURE__ */ O({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(e) {
    return (r, a) => (t(), s("div", {
      class: A(["branch-list-item", { current: e.isCurrent, clickable: e.clickable }]),
      onClick: a[0] || (a[0] = (l) => e.clickable && r.$emit("click"))
    }, [
      o("span", _o, c(e.isCurrent ? "●" : "○"), 1),
      o("span", $o, c(e.branchName), 1),
      r.$slots.actions || e.showCurrentLabel ? (t(), s("div", xo, [
        K(r.$slots, "actions", {}, void 0, !0),
        e.isCurrent && e.showCurrentLabel ? (t(), s("span", Co, " current ")) : d("", !0)
      ])) : d("", !0)
    ], 2));
  }
}), Eo = /* @__PURE__ */ R(So, [["__scopeId", "data-v-c6581a24"]]), Io = {
  key: 2,
  class: "branch-list"
}, zo = /* @__PURE__ */ O({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create"],
  setup(e, { emit: r }) {
    const a = r, l = S(!1);
    function k(f) {
      a("create", f), x();
    }
    function x() {
      l.value = !1;
    }
    return (f, p) => (t(), w(xe, null, {
      header: n(() => [
        _(Ce, { title: "BRANCHES" }, {
          actions: n(() => [
            _(U, {
              variant: "ghost",
              size: "sm",
              onClick: p[0] || (p[0] = (u) => l.value = !0),
              title: "Create new branch"
            }, {
              default: n(() => [...p[1] || (p[1] = [
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
      content: n(() => [
        l.value ? (t(), w(ko, {
          key: 0,
          onCreate: k,
          onCancel: x
        })) : d("", !0),
        e.branches.length === 0 ? (t(), w(Se, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (t(), s("div", Io, [
          (t(!0), s(H, null, Y(e.branches, (u) => (t(), w(Eo, {
            key: u.name,
            "branch-name": u.name,
            "is-current": u.is_current
          }, {
            actions: n(() => [
              u.is_current ? d("", !0) : (t(), w(U, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: (b) => f.$emit("switch", u.name)
              }, {
                default: n(() => [...p[2] || (p[2] = [
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
}), Lo = /* @__PURE__ */ R(zo, [["__scopeId", "data-v-763d6ec4"]]), Mo = { class: "history-section" }, Bo = {
  key: 0,
  class: "empty"
}, To = {
  key: 1,
  class: "commit-list"
}, No = ["onClick"], Do = { class: "commit-hash" }, Oo = { class: "commit-message" }, Ro = { class: "commit-date" }, Wo = ["onClick"], Vo = /* @__PURE__ */ O({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(e) {
    return (r, a) => (t(), s("div", Mo, [
      a[2] || (a[2] = o("h3", { class: "view-title" }, "HISTORY", -1)),
      e.commits.length === 0 ? (t(), s("div", Bo, " No commits yet ")) : (t(), s("div", To, [
        (t(!0), s(H, null, Y(e.commits, (l) => {
          var k;
          return t(), s("div", {
            key: l.hash,
            class: "commit-item",
            onClick: (x) => r.$emit("select", l)
          }, [
            o("span", Do, c(l.short_hash || ((k = l.hash) == null ? void 0 : k.slice(0, 7))), 1),
            o("span", Oo, c(l.message), 1),
            o("span", Ro, c(l.date_relative || l.relative_date), 1),
            o("div", {
              class: "commit-actions",
              onClick: a[0] || (a[0] = be(() => {
              }, ["stop"]))
            }, [
              o("button", {
                class: "action-btn",
                onClick: (x) => r.$emit("checkout", l),
                title: "Checkout this commit"
              }, [...a[1] || (a[1] = [
                o("svg", {
                  width: "12",
                  height: "12",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  o("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" })
                ], -1)
              ])], 8, Wo)
            ])
          ], 8, No);
        }), 128))
      ]))
    ]));
  }
}), Ao = /* @__PURE__ */ R(Vo, [["__scopeId", "data-v-97388106"]]), He = [
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
  ...Array(12).fill(null).map((e, r) => ({
    name: `synced-workflow-${r + 1}.json`,
    status: "synced",
    missing_nodes: 0,
    missing_models: 0,
    node_count: 5 + r,
    model_count: 1 + r % 3,
    sync_state: "synced"
  }))
], Uo = {
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
}, qe = [
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
], Po = [
  ...qe,
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
], Ie = [
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
], J = {
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
  createEnvironment: async (e, r, a) => {
    await Q(1e3), console.log(`[MOCK] Creating environment: ${e} with backend ${r}`, a ? `cloned from ${a}` : "");
  },
  deleteEnvironment: async (e) => {
    await Q(500), console.log(`[MOCK] Deleting environment: ${e}`);
  },
  // Workflow Management
  getWorkflows: async () => (await Q(400), He),
  getWorkflowDetails: async (e) => (await Q(300), Uo[e] || {
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
  installWorkflowDeps: async (e, r, a) => {
    await Q(2e3), console.log(`[MOCK] Installing deps for ${e}: nodes=${r}, models=${a}`);
  },
  setModelImportance: async (e, r, a) => {
    await Q(200), console.log(`[MOCK] Setting ${r} importance to ${a} in ${e}`);
  },
  // Model Management
  getEnvironmentModels: async () => (await Q(350), qe),
  getWorkspaceModels: async () => (await Q(400), Po),
  updateModelSource: async (e, r) => {
    await Q(300), console.log(`[MOCK] Updating source for ${e}: ${r}`);
  },
  deleteModel: async (e) => {
    await Q(500), console.log(`[MOCK] Deleting model: ${e}`);
  },
  downloadModel: async (e) => {
    await Q(3e3), console.log("[MOCK] Downloading model:", e);
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
  getEnvironmentLogs: async (e, r) => (await Q(250), (e ? Ie.filter((l) => l.level === e) : Ie).slice(0, r || 100)),
  getWorkspaceLogs: async (e, r) => {
    await Q(300);
    const a = [...Ie, ...Ie.map((k) => ({
      ...k,
      context: { ...k.context, environment: "testing" }
    }))];
    return (e ? a.filter((k) => k.level === e) : a).slice(0, r || 100);
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
      synced: He.filter((e) => e.status === "synced").map((e) => e.name),
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
  getCommitHistory: async (e = 10) => (await Q(300), Ho.slice(0, e)),
  getBranches: async () => (await Q(250), {
    branches: [
      { name: "main", is_current: !0 },
      { name: "develop", is_current: !1 },
      { name: "feature/new-nodes", is_current: !1 }
    ],
    current: "main"
  })
};
function Q(e) {
  return new Promise((r) => setTimeout(r, e));
}
function he() {
  const e = S(!1), r = S(null);
  async function a(I, q) {
    var we;
    if (!((we = window.app) != null && we.api))
      throw new Error("ComfyUI API not available");
    const se = await window.app.api.fetchApi(I, q);
    if (!se.ok) {
      const Ee = await se.json().catch(() => ({}));
      throw new Error(Ee.error || Ee.message || `Request failed: ${se.status}`);
    }
    return se.json();
  }
  async function l() {
    return J.getStatus();
  }
  async function k(I, q = !1) {
    return a("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: I, allow_issues: q })
    });
  }
  async function x(I = 10, q = 0) {
    {
      const se = await J.getCommitHistory(I);
      return {
        commits: se,
        total: se.length,
        offset: q
      };
    }
  }
  async function f(I) {
    return a("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: I })
    });
  }
  async function p() {
    return J.getBranches();
  }
  async function u(I) {
    return a(`/v2/comfygit/commit/${I}`);
  }
  async function b(I, q = !1) {
    return a("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: I, force: q })
    });
  }
  async function L(I, q = "HEAD") {
    return a("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: I, start_point: q })
    });
  }
  async function y(I, q = !1) {
    return a("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: I, force: q })
    });
  }
  async function W() {
    return J.getEnvironments();
  }
  async function F(I) {
    return J.switchEnvironment(I);
  }
  async function ee() {
    return null;
  }
  async function j(I, q, se) {
    return await J.createEnvironment(I, q, se), { status: "success" };
  }
  async function M(I) {
    return await J.deleteEnvironment(I), { status: "success" };
  }
  async function D() {
    return J.getWorkflows();
  }
  async function Z(I) {
    return J.getWorkflowDetails(I);
  }
  async function te(I) {
    return J.resolveWorkflow(I);
  }
  async function N(I, q, se) {
    return await J.installWorkflowDeps(I, q, se), { status: "success" };
  }
  async function B(I, q, se) {
    return J.setModelImportance(I, q, se);
  }
  async function h() {
    return J.getEnvironmentModels();
  }
  async function v() {
    return J.getWorkspaceModels();
  }
  async function m(I, q) {
    return J.updateModelSource(I, q);
  }
  async function $(I) {
    return J.deleteModel(I);
  }
  async function C(I) {
    return await J.downloadModel(I), { status: "success" };
  }
  async function le() {
    return J.getConfig();
  }
  async function T(I) {
    return J.updateConfig(I);
  }
  async function E(I, q) {
    return J.getEnvironmentLogs(I, q);
  }
  async function G(I, q) {
    return J.getWorkspaceLogs(I, q);
  }
  return {
    isLoading: e,
    error: r,
    getStatus: l,
    commit: k,
    getHistory: x,
    exportEnv: f,
    // Git Operations
    getBranches: p,
    getCommitDetail: u,
    checkout: b,
    createBranch: L,
    switchBranch: y,
    // Environment Management
    getEnvironments: W,
    switchEnvironment: F,
    getSwitchProgress: ee,
    createEnvironment: j,
    deleteEnvironment: M,
    // Workflow Management
    getWorkflows: D,
    getWorkflowDetails: Z,
    resolveWorkflow: te,
    installWorkflowDeps: N,
    setModelImportance: B,
    // Model Management
    getEnvironmentModels: h,
    getWorkspaceModels: v,
    updateModelSource: m,
    deleteModel: $,
    downloadModel: C,
    // Settings
    getConfig: le,
    updateConfig: T,
    // Debug/Logs
    getEnvironmentLogs: E,
    getWorkspaceLogs: G
  };
}
const Fo = { class: "base-modal-header" }, Go = {
  key: 0,
  class: "base-modal-title"
}, Ko = { class: "base-modal-body" }, jo = {
  key: 0,
  class: "base-modal-loading"
}, qo = {
  key: 1,
  class: "base-modal-error"
}, Yo = {
  key: 0,
  class: "base-modal-footer"
}, Zo = /* @__PURE__ */ O({
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
  setup(e, { emit: r }) {
    const a = e, l = r;
    function k() {
      a.closeOnOverlayClick && l("close");
    }
    function x(f) {
      f.key === "Escape" && l("close");
    }
    return ue(() => {
      document.addEventListener("keydown", x), document.body.style.overflow = "hidden";
    }), nt(() => {
      document.removeEventListener("keydown", x), document.body.style.overflow = "";
    }), (f, p) => (t(), w(Fe, { to: "body" }, [
      o("div", {
        class: "base-modal-overlay",
        onClick: k
      }, [
        o("div", {
          class: A(["base-modal-content", e.size]),
          onClick: p[1] || (p[1] = be(() => {
          }, ["stop"]))
        }, [
          o("div", Fo, [
            K(f.$slots, "header", {}, () => [
              e.title ? (t(), s("h3", Go, c(e.title), 1)) : d("", !0)
            ], !0),
            e.showCloseButton ? (t(), s("button", {
              key: 0,
              class: "base-modal-close",
              onClick: p[0] || (p[0] = (u) => f.$emit("close"))
            }, [...p[2] || (p[2] = [
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
          o("div", Ko, [
            e.loading ? (t(), s("div", jo, "Loading...")) : e.error ? (t(), s("div", qo, c(e.error), 1)) : K(f.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          f.$slots.footer ? (t(), s("div", Yo, [
            K(f.$slots, "footer", {}, void 0, !0)
          ])) : d("", !0)
        ], 2)
      ])
    ]));
  }
}), Le = /* @__PURE__ */ R(Zo, [["__scopeId", "data-v-700d367b"]]), Xo = ["type", "disabled"], Jo = {
  key: 0,
  class: "spinner"
}, Qo = /* @__PURE__ */ O({
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
    return (r, a) => (t(), s("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: A(["base-btn", e.variant, e.size, { "full-width": e.fullWidth, loading: e.loading }]),
      onClick: a[0] || (a[0] = (l) => r.$emit("click", l))
    }, [
      e.loading ? (t(), s("span", Jo)) : d("", !0),
      K(r.$slots, "default", {}, void 0, !0)
    ], 10, Xo));
  }
}), ne = /* @__PURE__ */ R(Qo, [["__scopeId", "data-v-f3452606"]]), ea = {
  key: 0,
  class: "base-title-count"
}, ta = /* @__PURE__ */ O({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (r, a) => (t(), w(Oe(`h${e.level}`), {
      class: A(["base-title", e.variant])
    }, {
      default: n(() => [
        K(r.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (t(), s("span", ea, "(" + c(e.count) + ")", 1)) : d("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), fe = /* @__PURE__ */ R(ta, [["__scopeId", "data-v-5a01561d"]]), oa = ["value", "disabled"], aa = {
  key: 0,
  value: "",
  disabled: ""
}, sa = ["value"], na = {
  key: 0,
  class: "base-select-error"
}, la = /* @__PURE__ */ O({
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
    function r(l) {
      return typeof l == "string" ? l : l.value;
    }
    function a(l) {
      return typeof l == "string" ? l : l.label;
    }
    return (l, k) => (t(), s("div", {
      class: A(["base-select-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      o("select", {
        value: e.modelValue,
        disabled: e.disabled,
        class: A(["base-select", { error: !!e.error }]),
        onChange: k[0] || (k[0] = (x) => l.$emit("update:modelValue", x.target.value))
      }, [
        e.placeholder ? (t(), s("option", aa, c(e.placeholder), 1)) : d("", !0),
        (t(!0), s(H, null, Y(e.options, (x) => (t(), s("option", {
          key: r(x),
          value: r(x)
        }, c(a(x)), 9, sa))), 128))
      ], 42, oa),
      e.error ? (t(), s("span", na, c(e.error), 1)) : d("", !0)
    ], 2));
  }
}), ra = /* @__PURE__ */ R(la, [["__scopeId", "data-v-7436d745"]]), ia = { class: "detail-section" }, ca = {
  key: 0,
  class: "empty-message"
}, da = { class: "model-header" }, ua = { class: "model-name" }, ma = { class: "model-details" }, ga = { class: "model-row" }, fa = { class: "model-row" }, ha = {
  key: 0,
  class: "model-row"
}, va = { class: "value" }, pa = {
  key: 1,
  class: "model-row"
}, ya = { class: "value" }, ba = {
  key: 0,
  class: "model-actions"
}, wa = { class: "detail-section" }, ka = {
  key: 0,
  class: "empty-message"
}, _a = { class: "node-name" }, $a = {
  key: 0,
  class: "node-version"
}, xa = /* @__PURE__ */ O({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve"],
  setup(e, { emit: r }) {
    const a = e, l = r, { getWorkflowDetails: k, setModelImportance: x } = he(), f = S(null), p = S(!1), u = S(null), b = S(!1), L = S({}), y = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    async function W() {
      p.value = !0, u.value = null;
      try {
        f.value = await k(a.workflowName);
      } catch (j) {
        u.value = j instanceof Error ? j.message : "Failed to load workflow details";
      } finally {
        p.value = !1;
      }
    }
    function F(j, M) {
      L.value[j] = M, b.value = !0;
    }
    async function ee() {
      if (!b.value) {
        l("close");
        return;
      }
      p.value = !0, u.value = null;
      try {
        for (const [j, M] of Object.entries(L.value))
          await x(a.workflowName, j, M);
        l("close");
      } catch (j) {
        u.value = j instanceof Error ? j.message : "Failed to save changes";
      } finally {
        p.value = !1;
      }
    }
    return ue(W), (j, M) => (t(), w(Le, {
      title: `WORKFLOW DETAILS: ${e.workflowName}`,
      size: "lg",
      loading: p.value,
      error: u.value || void 0,
      onClose: M[2] || (M[2] = (D) => l("close"))
    }, {
      body: n(() => [
        f.value ? (t(), s(H, { key: 0 }, [
          o("section", ia, [
            _(fe, { variant: "section" }, {
              default: n(() => [
                g("MODELS USED (" + c(f.value.models.length) + ")", 1)
              ]),
              _: 1
            }),
            f.value.models.length === 0 ? (t(), s("div", ca, " No models used in this workflow ")) : d("", !0),
            (t(!0), s(H, null, Y(f.value.models, (D) => (t(), s("div", {
              key: D.hash,
              class: "model-card"
            }, [
              o("div", da, [
                M[3] || (M[3] = o("span", { class: "model-icon" }, "📦", -1)),
                o("span", ua, c(D.filename), 1)
              ]),
              o("div", ma, [
                o("div", ga, [
                  M[4] || (M[4] = o("span", { class: "label" }, "Status:", -1)),
                  o("span", {
                    class: A(["value", D.status === "available" ? "success" : "error"])
                  }, c(D.status === "available" ? "✓ Available" : "⚠ Missing"), 3)
                ]),
                o("div", fa, [
                  M[5] || (M[5] = o("span", { class: "label" }, "Importance:", -1)),
                  _(ra, {
                    "model-value": L.value[D.hash] || D.importance,
                    options: y,
                    "onUpdate:modelValue": (Z) => F(D.hash, Z)
                  }, null, 8, ["model-value", "onUpdate:modelValue"])
                ]),
                D.node_type ? (t(), s("div", ha, [
                  M[6] || (M[6] = o("span", { class: "label" }, "Used in:", -1)),
                  o("span", va, c(D.node_type) + " (Node " + c(D.node_id) + ")", 1)
                ])) : d("", !0),
                D.size_mb ? (t(), s("div", pa, [
                  M[7] || (M[7] = o("span", { class: "label" }, "Size:", -1)),
                  o("span", ya, c(D.size_mb) + " MB", 1)
                ])) : d("", !0)
              ]),
              D.status === "missing" ? (t(), s("div", ba, [
                _(ne, {
                  variant: "secondary",
                  size: "sm",
                  onClick: M[0] || (M[0] = (Z) => l("resolve"))
                }, {
                  default: n(() => [...M[8] || (M[8] = [
                    g(" Resolve ", -1)
                  ])]),
                  _: 1
                })
              ])) : d("", !0)
            ]))), 128))
          ]),
          M[9] || (M[9] = o("div", { class: "info-box" }, [
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
          o("section", wa, [
            _(fe, { variant: "section" }, {
              default: n(() => [
                g("NODES USED (" + c(f.value.nodes.length) + ")", 1)
              ]),
              _: 1
            }),
            f.value.nodes.length === 0 ? (t(), s("div", ka, " No custom nodes used in this workflow ")) : d("", !0),
            (t(!0), s(H, null, Y(f.value.nodes, (D) => (t(), s("div", {
              key: D.name,
              class: "node-item"
            }, [
              o("span", {
                class: A(["node-status", D.installed ? "installed" : "missing"])
              }, c(D.installed ? "✓" : "✕"), 3),
              o("span", _a, c(D.name), 1),
              D.version ? (t(), s("span", $a, "v" + c(D.version), 1)) : d("", !0)
            ]))), 128))
          ])
        ], 64)) : d("", !0)
      ]),
      footer: n(() => [
        _(ne, {
          variant: "secondary",
          onClick: M[1] || (M[1] = (D) => l("close"))
        }, {
          default: n(() => [...M[10] || (M[10] = [
            g(" Close ", -1)
          ])]),
          _: 1
        }),
        b.value ? (t(), w(ne, {
          key: 0,
          variant: "primary",
          onClick: ee
        }, {
          default: n(() => [...M[11] || (M[11] = [
            g(" Save Changes ", -1)
          ])]),
          _: 1
        })) : d("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Ca = /* @__PURE__ */ R(xa, [["__scopeId", "data-v-6ce9a41c"]]), Sa = {
  key: 0,
  class: "resolve-section"
}, Ea = { class: "resolve-card success-card" }, Ia = { class: "items-list" }, za = { class: "item-info" }, La = { class: "item-name" }, Ma = {
  key: 0,
  class: "item-meta"
}, Ba = { class: "match-type" }, Ta = { class: "source" }, Na = {
  key: 1,
  class: "resolve-section"
}, Da = { class: "resolve-card warning-card" }, Oa = { class: "items-list" }, Ra = { class: "item-info" }, Wa = { class: "item-name" }, Va = { class: "item-meta" }, Aa = { key: 0 }, Ua = { key: 1 }, Pa = {
  key: 0,
  class: "item-warning"
}, Ha = {
  key: 0,
  class: "item-action"
}, Fa = ["onClick"], Ga = {
  key: 2,
  class: "resolve-section"
}, Ka = { class: "info-text" }, ja = { class: "actions-summary" }, qa = { class: "summary-list" }, Ya = { key: 0 }, Za = { key: 1 }, Xa = { key: 2 }, Ja = {
  key: 0,
  class: "estimated-size"
}, Qa = /* @__PURE__ */ O({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh"],
  setup(e, { emit: r }) {
    const a = e, l = r, { resolveWorkflow: k, installWorkflowDeps: x } = he(), f = S(null), p = S(!1), u = S(!1), b = S(null), L = P(() => {
      var B;
      return f.value ? ((B = f.value.download_results) == null ? void 0 : B.every((h) => h.can_download)) ?? !1 : !1;
    });
    async function y() {
      p.value = !0, b.value = null;
      try {
        f.value = await k(a.workflowName);
      } catch (B) {
        b.value = B instanceof Error ? B.message : "Failed to analyze workflow";
      } finally {
        p.value = !1;
      }
    }
    function W(B) {
      return !B.possible_matches || B.possible_matches.length === 0 ? null : B.possible_matches.reduce(
        (h, v) => v.match_confidence > h.match_confidence ? v : h
      );
    }
    function F(B) {
      return B >= 0.9 ? "high" : B >= 0.7 ? "medium" : "low";
    }
    function ee(B) {
      const h = W(B);
      return h ? h.package_id.startsWith("http") ? "GitHub" : "ComfyUI Registry" : "Unknown";
    }
    function j(B) {
      var h, v;
      return (v = (h = f.value) == null ? void 0 : h.download_results) == null ? void 0 : v.find((m) => m.model === B);
    }
    function M(B) {
      const h = j(B);
      return (h == null ? void 0 : h.can_download) ?? !1;
    }
    function D(B) {
      const h = j(B);
      return (h == null ? void 0 : h.source_url) || null;
    }
    function Z(B) {
      window.open(B, "_blank");
    }
    async function te() {
      if (!(!f.value || u.value)) {
        u.value = !0, b.value = null;
        try {
          await x(
            a.workflowName,
            f.value.nodes_to_install,
            []
          ), l("install"), l("refresh"), l("close");
        } catch (B) {
          b.value = B instanceof Error ? B.message : "Installation failed";
        } finally {
          u.value = !1;
        }
      }
    }
    async function N() {
      if (!(!f.value || u.value)) {
        u.value = !0, b.value = null;
        try {
          await x(
            a.workflowName,
            f.value.nodes_to_install,
            f.value.models_to_download
          ), l("install"), l("refresh"), l("close");
        } catch (B) {
          b.value = B instanceof Error ? B.message : "Installation failed";
        } finally {
          u.value = !1;
        }
      }
    }
    return ue(y), (B, h) => (t(), w(Le, {
      title: `RESOLVE DEPENDENCIES: ${e.workflowName}`,
      size: "lg",
      loading: p.value,
      error: b.value || void 0,
      onClose: h[1] || (h[1] = (v) => l("close"))
    }, {
      body: n(() => [
        f.value ? (t(), s(H, { key: 0 }, [
          h[5] || (h[5] = o("div", { class: "intro-message" }, " This workflow needs the following to work: ", -1)),
          f.value.nodes_unresolved.length > 0 ? (t(), s("section", Sa, [
            _(fe, { variant: "section" }, {
              default: n(() => [
                g("NODES (" + c(f.value.nodes_unresolved.length) + ")", 1)
              ]),
              _: 1
            }),
            o("div", Ea, [
              h[2] || (h[2] = o("div", { class: "card-header" }, [
                o("span", { class: "status-icon" }, "✓"),
                o("span", { class: "card-title" }, "Can install automatically")
              ], -1)),
              o("div", Ia, [
                (t(!0), s(H, null, Y(f.value.nodes_unresolved, (v) => {
                  var m;
                  return t(), s("div", {
                    key: v.node_type,
                    class: "item"
                  }, [
                    o("div", za, [
                      o("div", La, c(((m = W(v)) == null ? void 0 : m.package_id) || v.node_type), 1),
                      W(v) ? (t(), s("div", Ma, [
                        o("span", {
                          class: A(["confidence-badge", F(W(v).match_confidence)])
                        }, c(Math.round(W(v).match_confidence * 100)) + "% match ", 3),
                        o("span", Ba, c(W(v).match_type), 1),
                        o("span", Ta, "Source: " + c(ee(v)), 1)
                      ])) : d("", !0)
                    ])
                  ]);
                }), 128))
              ])
            ])
          ])) : d("", !0),
          f.value.models_unresolved.length > 0 ? (t(), s("section", Na, [
            _(fe, { variant: "section" }, {
              default: n(() => [
                g("MODELS (" + c(f.value.models_unresolved.length) + ")", 1)
              ]),
              _: 1
            }),
            o("div", Da, [
              h[3] || (h[3] = o("div", { class: "card-header" }, [
                o("span", { class: "status-icon" }, "⚠"),
                o("span", { class: "card-title" }, "Manual download required")
              ], -1)),
              o("div", Oa, [
                (t(!0), s(H, null, Y(f.value.models_unresolved, (v) => (t(), s("div", {
                  key: v.filename,
                  class: "item"
                }, [
                  o("div", Ra, [
                    o("div", Wa, c(v.filename), 1),
                    o("div", Va, [
                      v.expected_category ? (t(), s("span", Aa, "Type: " + c(v.expected_category), 1)) : d("", !0),
                      j(v.filename) ? (t(), s("span", Ua, " Size: ~" + c(j(v.filename).estimated_size_mb) + " MB ", 1)) : d("", !0)
                    ]),
                    M(v.filename) ? d("", !0) : (t(), s("div", Pa, " No auto-download source configured "))
                  ]),
                  D(v.filename) ? (t(), s("div", Ha, [
                    o("button", {
                      class: "link-btn",
                      onClick: (m) => Z(D(v.filename))
                    }, " Open Source ↗ ", 8, Fa)
                  ])) : d("", !0)
                ]))), 128))
              ])
            ])
          ])) : d("", !0),
          f.value.nodes_resolved.length > 0 || f.value.models_resolved.length > 0 ? (t(), s("section", Ga, [
            _(fe, { variant: "section" }, {
              default: n(() => [
                g(" ALREADY AVAILABLE (" + c(f.value.nodes_resolved.length + f.value.models_resolved.length) + ") ", 1)
              ]),
              _: 1
            }),
            o("div", Ka, c(f.value.nodes_resolved.length) + " nodes and " + c(f.value.models_resolved.length) + " models are already installed ", 1)
          ])) : d("", !0),
          o("div", ja, [
            h[4] || (h[4] = o("div", { class: "summary-title" }, "This will:", -1)),
            o("ol", qa, [
              f.value.nodes_to_install.length ? (t(), s("li", Ya, " Install " + c(f.value.nodes_to_install.length) + " nodes (~" + c(f.value.estimated_time_seconds) + "s) ", 1)) : d("", !0),
              f.value.nodes_to_install.length ? (t(), s("li", Za, " Restart ComfyUI to load new nodes ")) : d("", !0),
              f.value.models_to_download.length ? (t(), s("li", Xa, " You'll still need to download " + c(f.value.models_to_download.length) + " model(s) manually ", 1)) : d("", !0)
            ]),
            f.value.estimated_size_mb ? (t(), s("div", Ja, " Estimated download: " + c(f.value.estimated_size_mb) + " MB ", 1)) : d("", !0)
          ])
        ], 64)) : d("", !0)
      ]),
      footer: n(() => [
        _(ne, {
          variant: "secondary",
          onClick: h[0] || (h[0] = (v) => l("close"))
        }, {
          default: n(() => [...h[6] || (h[6] = [
            g(" Cancel ", -1)
          ])]),
          _: 1
        }),
        f.value && f.value.nodes_to_install.length && f.value.models_to_download.length ? (t(), w(ne, {
          key: 0,
          variant: "secondary",
          disabled: u.value,
          loading: u.value,
          onClick: te
        }, {
          default: n(() => [...h[7] || (h[7] = [
            g(" Install Nodes Only ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : d("", !0),
        f.value && (f.value.nodes_to_install.length || f.value.models_to_download.length) ? (t(), w(ne, {
          key: 1,
          variant: "primary",
          disabled: u.value || f.value.models_to_download.length > 0 && !L.value,
          loading: u.value,
          onClick: N
        }, {
          default: n(() => [...h[8] || (h[8] = [
            g(" Install All ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : d("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), es = /* @__PURE__ */ R(Qa, [["__scopeId", "data-v-d68efb14"]]), ts = { class: "search-input-wrapper" }, os = ["value", "placeholder"], as = /* @__PURE__ */ O({
  __name: "SearchInput",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 },
    autoFocus: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e, { emit: r }) {
    const a = e, l = r, k = S(null);
    let x;
    function f(u) {
      const b = u.target.value;
      a.debounce > 0 ? (clearTimeout(x), x = window.setTimeout(() => {
        l("update:modelValue", b);
      }, a.debounce)) : l("update:modelValue", b);
    }
    function p() {
      var u;
      l("update:modelValue", ""), l("clear"), (u = k.value) == null || u.focus();
    }
    return ue(() => {
      a.autoFocus && k.value && k.value.focus();
    }), (u, b) => (t(), s("div", ts, [
      o("input", {
        ref_key: "inputRef",
        ref: k,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: f,
        onKeyup: $e(p, ["escape"])
      }, null, 40, os),
      e.clearable && e.modelValue ? (t(), s("button", {
        key: 0,
        class: "clear-button",
        onClick: p,
        title: "Clear search"
      }, " ✕ ")) : d("", !0)
    ]));
  }
}), ss = /* @__PURE__ */ R(as, [["__scopeId", "data-v-266f857a"]]), ns = { class: "search-bar" }, ls = /* @__PURE__ */ O({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (r, a) => (t(), s("div", ns, [
      _(ss, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": a[0] || (a[0] = (l) => r.$emit("update:modelValue", l)),
        onClear: a[1] || (a[1] = (l) => r.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), Re = /* @__PURE__ */ R(ls, [["__scopeId", "data-v-3d51bbfd"]]), rs = { class: "section-group" }, is = {
  key: 0,
  class: "section-content"
}, cs = /* @__PURE__ */ O({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(e, { emit: r }) {
    const a = e, l = r, k = S(a.initiallyExpanded);
    function x() {
      a.collapsible && (k.value = !k.value, l("toggle", k.value));
    }
    return (f, p) => (t(), s("section", rs, [
      _(Ne, {
        count: e.count,
        clickable: e.collapsible,
        expanded: k.value,
        onClick: x
      }, {
        default: n(() => [
          g(c(e.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !e.collapsible || k.value ? (t(), s("div", is, [
        K(f.$slots, "default", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), ce = /* @__PURE__ */ R(cs, [["__scopeId", "data-v-c48e33ed"]]), ds = { class: "item-header" }, us = {
  key: 0,
  class: "item-icon"
}, ms = { class: "item-info" }, gs = {
  key: 0,
  class: "item-title"
}, fs = {
  key: 1,
  class: "item-subtitle"
}, hs = {
  key: 0,
  class: "item-details"
}, vs = {
  key: 1,
  class: "item-actions"
}, ps = /* @__PURE__ */ O({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: r }) {
    const a = e, l = P(() => a.status ? `status-${a.status}` : "");
    return (k, x) => (t(), s("div", {
      class: A(["item-card", { clickable: e.clickable, compact: e.compact }, l.value]),
      onClick: x[0] || (x[0] = (f) => e.clickable && k.$emit("click"))
    }, [
      o("div", ds, [
        k.$slots.icon ? (t(), s("span", us, [
          K(k.$slots, "icon", {}, void 0, !0)
        ])) : d("", !0),
        o("div", ms, [
          k.$slots.title ? (t(), s("div", gs, [
            K(k.$slots, "title", {}, void 0, !0)
          ])) : d("", !0),
          k.$slots.subtitle ? (t(), s("div", fs, [
            K(k.$slots, "subtitle", {}, void 0, !0)
          ])) : d("", !0)
        ])
      ]),
      k.$slots.details ? (t(), s("div", hs, [
        K(k.$slots, "details", {}, void 0, !0)
      ])) : d("", !0),
      k.$slots.actions ? (t(), s("div", vs, [
        K(k.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), de = /* @__PURE__ */ R(ps, [["__scopeId", "data-v-cc435e0e"]]), ys = { class: "loading-state" }, bs = { class: "loading-message" }, ws = /* @__PURE__ */ O({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (r, a) => (t(), s("div", ys, [
      a[0] || (a[0] = o("div", { class: "spinner" }, null, -1)),
      o("p", bs, c(e.message), 1)
    ]));
  }
}), We = /* @__PURE__ */ R(ws, [["__scopeId", "data-v-ad8436c9"]]), ks = { class: "error-state" }, _s = { class: "error-message" }, $s = /* @__PURE__ */ O({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (r, a) => (t(), s("div", ks, [
      a[2] || (a[2] = o("span", { class: "error-icon" }, "⚠", -1)),
      o("p", _s, c(e.message), 1),
      e.retry ? (t(), w(U, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: a[0] || (a[0] = (l) => r.$emit("retry"))
      }, {
        default: n(() => [...a[1] || (a[1] = [
          g(" Retry ", -1)
        ])]),
        _: 1
      })) : d("", !0)
    ]));
  }
}), Ve = /* @__PURE__ */ R($s, [["__scopeId", "data-v-5397be48"]]), xs = /* @__PURE__ */ O({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { emit: r }) {
    const a = r, { getWorkflows: l } = he(), k = S([]), x = S(!1), f = S(null), p = S(""), u = S(!1), b = S(!1), L = S(!1), y = S(!1), W = S(null), F = P(
      () => k.value.filter((T) => T.status === "broken")
    ), ee = P(
      () => k.value.filter((T) => T.status === "new")
    ), j = P(
      () => k.value.filter((T) => T.status === "modified")
    ), M = P(
      () => k.value.filter((T) => T.status === "synced")
    ), D = P(() => {
      if (!p.value.trim()) return k.value;
      const T = p.value.toLowerCase();
      return k.value.filter((E) => E.name.toLowerCase().includes(T));
    }), Z = P(
      () => F.value.filter(
        (T) => !p.value.trim() || T.name.toLowerCase().includes(p.value.toLowerCase())
      )
    ), te = P(
      () => ee.value.filter(
        (T) => !p.value.trim() || T.name.toLowerCase().includes(p.value.toLowerCase())
      )
    ), N = P(
      () => j.value.filter(
        (T) => !p.value.trim() || T.name.toLowerCase().includes(p.value.toLowerCase())
      )
    ), B = P(
      () => M.value.filter(
        (T) => !p.value.trim() || T.name.toLowerCase().includes(p.value.toLowerCase())
      )
    ), h = P(
      () => b.value ? B.value : B.value.slice(0, 5)
    );
    async function v() {
      x.value = !0, f.value = null;
      try {
        k.value = await l();
      } catch (T) {
        f.value = T instanceof Error ? T.message : "Failed to load workflows";
      } finally {
        x.value = !1;
      }
    }
    function m(T) {
      W.value = T, L.value = !0;
    }
    function $(T) {
      W.value = T, y.value = !0;
    }
    function C() {
      alert("Bulk resolution not yet implemented");
    }
    function le() {
      a("refresh");
    }
    return ue(v), (T, E) => (t(), s(H, null, [
      _(xe, null, {
        header: n(() => [
          _(Ce, { title: "WORKFLOWS" }, {
            actions: n(() => [
              F.value.length > 0 ? (t(), w(U, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: C
              }, {
                default: n(() => [...E[7] || (E[7] = [
                  g(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : d("", !0)
            ]),
            _: 1
          })
        ]),
        search: n(() => [
          _(Re, {
            modelValue: p.value,
            "onUpdate:modelValue": E[0] || (E[0] = (G) => p.value = G),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: n(() => [
          x.value ? (t(), w(We, {
            key: 0,
            message: "Loading workflows..."
          })) : f.value ? (t(), w(Ve, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: v
          }, null, 8, ["message"])) : (t(), s(H, { key: 2 }, [
            Z.value.length ? (t(), w(ce, {
              key: 0,
              title: "BROKEN",
              count: Z.value.length
            }, {
              default: n(() => [
                (t(!0), s(H, null, Y(Z.value, (G) => (t(), w(de, {
                  key: G.name,
                  status: "broken"
                }, {
                  icon: n(() => [...E[8] || (E[8] = [
                    g("⚠", -1)
                  ])]),
                  title: n(() => [
                    g(c(G.name), 1)
                  ]),
                  subtitle: n(() => [
                    g(" Missing: " + c(G.missing_nodes) + " nodes, " + c(G.missing_models) + " models ", 1)
                  ]),
                  actions: n(() => [
                    _(U, {
                      variant: "primary",
                      size: "sm",
                      onClick: (I) => $(G.name)
                    }, {
                      default: n(() => [...E[9] || (E[9] = [
                        g(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    _(U, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (I) => m(G.name)
                    }, {
                      default: n(() => [...E[10] || (E[10] = [
                        g(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            te.value.length ? (t(), w(ce, {
              key: 1,
              title: "NEW",
              count: te.value.length
            }, {
              default: n(() => [
                (t(!0), s(H, null, Y(te.value, (G) => (t(), w(de, {
                  key: G.name,
                  status: "new"
                }, {
                  icon: n(() => [...E[11] || (E[11] = [
                    g("●", -1)
                  ])]),
                  title: n(() => [
                    g(c(G.name), 1)
                  ]),
                  subtitle: n(() => [...E[12] || (E[12] = [
                    g("✓ Ready", -1)
                  ])]),
                  actions: n(() => [
                    _(U, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (I) => m(G.name)
                    }, {
                      default: n(() => [...E[13] || (E[13] = [
                        g(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            N.value.length ? (t(), w(ce, {
              key: 2,
              title: "MODIFIED",
              count: N.value.length
            }, {
              default: n(() => [
                (t(!0), s(H, null, Y(N.value, (G) => (t(), w(de, {
                  key: G.name,
                  status: "modified"
                }, {
                  icon: n(() => [...E[14] || (E[14] = [
                    g("⚡", -1)
                  ])]),
                  title: n(() => [
                    g(c(G.name), 1)
                  ]),
                  subtitle: n(() => [...E[15] || (E[15] = [
                    g("✓ Ready", -1)
                  ])]),
                  actions: n(() => [
                    _(U, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (I) => m(G.name)
                    }, {
                      default: n(() => [...E[16] || (E[16] = [
                        g(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            B.value.length ? (t(), w(ce, {
              key: 3,
              title: "SYNCED",
              count: B.value.length,
              collapsible: !0,
              "initially-expanded": u.value,
              onToggle: E[2] || (E[2] = (G) => u.value = G)
            }, {
              default: n(() => [
                (t(!0), s(H, null, Y(h.value, (G) => (t(), w(de, {
                  key: G.name,
                  status: "synced"
                }, {
                  icon: n(() => [...E[17] || (E[17] = [
                    g("✓", -1)
                  ])]),
                  title: n(() => [
                    g(c(G.name), 1)
                  ]),
                  subtitle: n(() => [...E[18] || (E[18] = [
                    g("✓ Ready", -1)
                  ])]),
                  actions: n(() => [
                    _(U, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (I) => m(G.name)
                    }, {
                      default: n(() => [...E[19] || (E[19] = [
                        g(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128)),
                !b.value && B.value.length > 5 ? (t(), w(U, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: E[1] || (E[1] = (G) => b.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: n(() => [
                    g(" View all " + c(B.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : d("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : d("", !0),
            D.value.length ? d("", !0) : (t(), w(Se, {
              key: 4,
              icon: "📭",
              message: p.value ? `No workflows match '${p.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      L.value && W.value ? (t(), w(Ca, {
        key: 0,
        "workflow-name": W.value,
        onClose: E[3] || (E[3] = (G) => L.value = !1),
        onResolve: E[4] || (E[4] = (G) => $(W.value))
      }, null, 8, ["workflow-name"])) : d("", !0),
      y.value && W.value ? (t(), w(es, {
        key: 1,
        "workflow-name": W.value,
        onClose: E[5] || (E[5] = (G) => y.value = !1),
        onInstall: le,
        onRefresh: E[6] || (E[6] = (G) => a("refresh"))
      }, null, 8, ["workflow-name"])) : d("", !0)
    ], 64));
  }
}), Cs = /* @__PURE__ */ R(xs, [["__scopeId", "data-v-2251d776"]]), Ss = /* @__PURE__ */ O({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (r, a) => (t(), s("span", {
      class: A(["detail-label"]),
      style: Ge({ minWidth: e.minWidth })
    }, [
      K(r.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), Es = /* @__PURE__ */ R(Ss, [["__scopeId", "data-v-75e9eeb8"]]), Is = /* @__PURE__ */ O({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (r, a) => (t(), s("span", {
      class: A(["detail-value", e.variant, { mono: e.mono, truncate: e.truncate }])
    }, [
      K(r.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), zs = /* @__PURE__ */ R(Is, [["__scopeId", "data-v-2f186e4c"]]), Ls = { class: "detail-row" }, Ms = /* @__PURE__ */ O({
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
    return (r, a) => (t(), s("div", Ls, [
      _(Es, { "min-width": e.labelMinWidth }, {
        default: n(() => [
          g(c(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (t(), w(zs, {
        key: 0,
        mono: e.mono,
        variant: e.valueVariant,
        truncate: e.truncate
      }, {
        default: n(() => [
          g(c(e.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : K(r.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), oe = /* @__PURE__ */ R(Ms, [["__scopeId", "data-v-ef15664a"]]), Bs = /* @__PURE__ */ O({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(e) {
    return (r, a) => (t(), s("div", {
      class: A(["summary-bar", e.variant])
    }, [
      K(r.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Ye = /* @__PURE__ */ R(Bs, [["__scopeId", "data-v-ccb7816e"]]), Ts = { class: "popover-header" }, Ns = { class: "popover-title" }, Ds = { class: "popover-content" }, Os = {
  key: 0,
  class: "popover-actions"
}, Rs = /* @__PURE__ */ O({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(e) {
    return (r, a) => (t(), w(Fe, { to: "body" }, [
      e.show ? (t(), s("div", {
        key: 0,
        class: "popover-overlay",
        onClick: a[2] || (a[2] = (l) => r.$emit("close"))
      }, [
        o("div", {
          class: "popover",
          style: Ge({ maxWidth: e.maxWidth }),
          onClick: a[1] || (a[1] = be(() => {
          }, ["stop"]))
        }, [
          o("div", Ts, [
            o("h4", Ns, c(e.title), 1),
            o("button", {
              class: "popover-close",
              onClick: a[0] || (a[0] = (l) => r.$emit("close"))
            }, "✕")
          ]),
          o("div", Ds, [
            K(r.$slots, "content", {}, void 0, !0)
          ]),
          r.$slots.actions ? (t(), s("div", Os, [
            K(r.$slots, "actions", {}, void 0, !0)
          ])) : d("", !0)
        ], 4)
      ])) : d("", !0)
    ]));
  }
}), Ze = /* @__PURE__ */ R(Rs, [["__scopeId", "data-v-057df510"]]), Ws = /* @__PURE__ */ O({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: r }) {
    const a = r, { getEnvironmentModels: l, getStatus: k } = he(), x = S([]), f = S([]), p = S("production"), u = S(!1), b = S(null), L = S(""), y = S(!1);
    function W() {
      y.value = !1, a("navigate", "model-index");
    }
    const F = P(
      () => x.value.reduce((m, $) => m + ($.size_mb || $.size || 0), 0)
    ), ee = P(() => {
      if (!L.value.trim()) return x.value;
      const m = L.value.toLowerCase();
      return x.value.filter(($) => $.filename.toLowerCase().includes(m));
    }), j = P(() => {
      if (!L.value.trim()) return f.value;
      const m = L.value.toLowerCase();
      return f.value.filter(($) => $.filename.toLowerCase().includes(m));
    }), M = P(
      () => ee.value.filter((m) => m.type === "checkpoints" || m.category === "checkpoints")
    ), D = P(
      () => ee.value.filter((m) => m.type === "loras" || m.category === "loras")
    ), Z = P(
      () => ee.value.filter(
        (m) => m.type !== "checkpoints" && m.category !== "checkpoints" && m.type !== "loras" && m.category !== "loras"
      )
    );
    function te(m) {
      return m ? m >= 1024 ? `${(m / 1024).toFixed(1)} GB` : `${m.toFixed(0)} MB` : "Unknown";
    }
    function N(m) {
      a("navigate", "model-index");
    }
    function B(m) {
      a("navigate", "model-index");
    }
    function h(m) {
      alert(`Download functionality not yet implemented for ${m}`);
    }
    async function v() {
      u.value = !0, b.value = null;
      try {
        const m = await l();
        x.value = m, f.value = [];
        const $ = await k();
        p.value = $.environment || "production";
      } catch (m) {
        b.value = m instanceof Error ? m.message : "Failed to load models";
      } finally {
        u.value = !1;
      }
    }
    return ue(v), (m, $) => (t(), s(H, null, [
      _(xe, null, {
        header: n(() => [
          _(Ce, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: $[0] || ($[0] = (C) => y.value = !0)
          })
        ]),
        search: n(() => [
          _(Re, {
            modelValue: L.value,
            "onUpdate:modelValue": $[1] || ($[1] = (C) => L.value = C),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: n(() => [
          u.value ? (t(), w(We, {
            key: 0,
            message: "Loading environment models..."
          })) : b.value ? (t(), w(Ve, {
            key: 1,
            message: b.value,
            retry: !0,
            onRetry: v
          }, null, 8, ["message"])) : (t(), s(H, { key: 2 }, [
            x.value.length ? (t(), w(Ye, {
              key: 0,
              variant: "compact"
            }, {
              default: n(() => [
                g(" Total: " + c(x.value.length) + " models • " + c(te(F.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : d("", !0),
            M.value.length ? (t(), w(ce, {
              key: 1,
              title: "CHECKPOINTS",
              count: M.value.length
            }, {
              default: n(() => [
                (t(!0), s(H, null, Y(M.value, (C) => (t(), w(de, {
                  key: C.sha256 || C.hash || C.filename,
                  status: "synced"
                }, {
                  icon: n(() => [...$[3] || ($[3] = [
                    g("📦", -1)
                  ])]),
                  title: n(() => [
                    g(c(C.filename), 1)
                  ]),
                  subtitle: n(() => [
                    g(c(te(C.size_mb || C.size)), 1)
                  ]),
                  details: n(() => [
                    _(oe, {
                      label: "Used by:",
                      value: (C.used_by || C.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    _(oe, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: n(() => [
                    _(U, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (le) => N(C.sha256 || C.sha256_hash || C.hash || "")
                    }, {
                      default: n(() => [...$[4] || ($[4] = [
                        g(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            D.value.length ? (t(), w(ce, {
              key: 2,
              title: "LORAS",
              count: D.value.length
            }, {
              default: n(() => [
                (t(!0), s(H, null, Y(D.value, (C) => (t(), w(de, {
                  key: C.sha256 || C.hash || C.filename,
                  status: "synced"
                }, {
                  icon: n(() => [...$[5] || ($[5] = [
                    g("📦", -1)
                  ])]),
                  title: n(() => [
                    g(c(C.filename), 1)
                  ]),
                  subtitle: n(() => [
                    g(c(te(C.size_mb || C.size)), 1)
                  ]),
                  details: n(() => [
                    _(oe, {
                      label: "Used by:",
                      value: (C.used_by || C.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    _(oe, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: n(() => [
                    _(U, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (le) => N(C.sha256 || C.sha256_hash || C.hash || "")
                    }, {
                      default: n(() => [...$[6] || ($[6] = [
                        g(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            Z.value.length ? (t(), w(ce, {
              key: 3,
              title: "OTHER",
              count: Z.value.length
            }, {
              default: n(() => [
                (t(!0), s(H, null, Y(Z.value, (C) => (t(), w(de, {
                  key: C.sha256 || C.hash || C.filename,
                  status: "synced"
                }, {
                  icon: n(() => [...$[7] || ($[7] = [
                    g("📦", -1)
                  ])]),
                  title: n(() => [
                    g(c(C.filename), 1)
                  ]),
                  subtitle: n(() => [
                    g(c(te(C.size_mb || C.size)), 1)
                  ]),
                  details: n(() => [
                    _(oe, {
                      label: "Type:",
                      value: C.type
                    }, null, 8, ["value"]),
                    _(oe, {
                      label: "Used by:",
                      value: (C.used_by || C.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"])
                  ]),
                  actions: n(() => [
                    _(U, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (le) => N(C.sha256 || C.sha256_hash || C.hash || "")
                    }, {
                      default: n(() => [...$[8] || ($[8] = [
                        g(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            j.value.length ? (t(), w(ce, {
              key: 4,
              title: "MISSING",
              count: j.value.length
            }, {
              default: n(() => [
                (t(!0), s(H, null, Y(j.value, (C) => (t(), w(de, {
                  key: C.filename,
                  status: "broken"
                }, {
                  icon: n(() => [...$[9] || ($[9] = [
                    g("⚠", -1)
                  ])]),
                  title: n(() => [
                    g(c(C.filename), 1)
                  ]),
                  subtitle: n(() => [...$[10] || ($[10] = [
                    o("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: n(() => {
                    var le;
                    return [
                      _(oe, {
                        label: "Required by:",
                        value: ((le = C.workflow_names) == null ? void 0 : le.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: n(() => [
                    _(U, {
                      variant: "primary",
                      size: "sm",
                      onClick: (le) => h(C.filename)
                    }, {
                      default: n(() => [...$[11] || ($[11] = [
                        g(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    _(U, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (le) => B(C.filename)
                    }, {
                      default: n(() => [...$[12] || ($[12] = [
                        g(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            !ee.value.length && !j.value.length ? (t(), w(Se, {
              key: 5,
              icon: "📭",
              message: L.value ? `No models match '${L.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : d("", !0)
          ], 64))
        ]),
        _: 1
      }),
      _(Ze, {
        show: y.value,
        title: "About Environment Models",
        onClose: $[2] || ($[2] = (C) => y.value = !1)
      }, {
        content: n(() => [
          o("p", null, [
            $[13] || ($[13] = g(" These are models currently used by workflows in ", -1)),
            o("strong", null, '"' + c(p.value) + '"', 1),
            $[14] || ($[14] = g(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: n(() => [
          _(U, {
            variant: "primary",
            onClick: W
          }, {
            default: n(() => [...$[15] || ($[15] = [
              g(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Vs = /* @__PURE__ */ R(Ws, [["__scopeId", "data-v-865641a4"]]), As = /* @__PURE__ */ O({
  __name: "ModelIndexSection",
  setup(e) {
    const { getWorkspaceModels: r } = he(), a = S([]), l = S(!1), k = S(null), x = S(""), f = S(!1), p = P(
      () => a.value.reduce((h, v) => h + (v.size_mb || v.size || 0), 0)
    ), u = P(() => {
      const h = /* @__PURE__ */ new Set();
      return a.value.forEach((v) => {
        v.used_in_environments && v.used_in_environments.length > 0 && v.used_in_environments.forEach((m) => h.add(m.env_name));
      }), h.size;
    }), b = P(() => {
      if (!x.value.trim()) return a.value;
      const h = x.value.toLowerCase();
      return a.value.filter((v) => {
        const m = v, $ = v.sha256 || m.sha256_hash || "";
        return v.filename.toLowerCase().includes(h) || $.toLowerCase().includes(h);
      });
    }), L = P(
      () => b.value.filter((h) => h.type === "checkpoints")
    ), y = P(
      () => b.value.filter((h) => h.type === "loras")
    ), W = P(
      () => b.value.filter((h) => h.type !== "checkpoints" && h.type !== "loras")
    );
    function F(h) {
      return h ? h >= 1024 ? `${(h / 1024).toFixed(1)} GB` : `${h.toFixed(0)} MB` : "Unknown";
    }
    function ee(h) {
      const v = h, m = h.used_in_workflows || v.used_by || [];
      return !m || m.length === 0 ? "Not used" : `${m.length} workflow(s)`;
    }
    function j(h) {
      navigator.clipboard.writeText(h), alert("Hash copied to clipboard");
    }
    function M(h) {
      prompt("Enter model source URL:", h.source_url || "") !== null && alert("URL update not yet implemented");
    }
    function D(h) {
      const v = h, m = h.used_in_workflows || v.used_by || [], $ = m && m.length > 0 ? `

⚠ WARNING: This model is used by ${m.length} workflow(s):
${m.join(", ")}

Deleting will break these workflows!` : "";
      confirm(
        `Delete ${h.filename}?${$}

This will free ${F(v.size_mb || h.size)} of space.`
      ) && alert("Model deletion not yet implemented");
    }
    function Z() {
      alert("Scan for models not yet implemented");
    }
    function te() {
      alert("Change directory not yet implemented");
    }
    function N() {
      alert("Download new model not yet implemented");
    }
    async function B() {
      l.value = !0, k.value = null;
      try {
        a.value = await r(), console.log("Loaded models:", a.value), console.log("Filtered checkpoints:", L.value), console.log("Filtered loras:", y.value), console.log("Filtered other:", W.value);
      } catch (h) {
        k.value = h instanceof Error ? h.message : "Failed to load workspace models";
      } finally {
        l.value = !1;
      }
    }
    return ue(B), (h, v) => (t(), s(H, null, [
      _(xe, null, {
        header: n(() => [
          _(Ce, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: v[0] || (v[0] = (m) => f.value = !0)
          }, {
            actions: n(() => [
              _(U, {
                variant: "primary",
                size: "sm",
                onClick: Z
              }, {
                default: n(() => [...v[3] || (v[3] = [
                  g(" Scan for Models ", -1)
                ])]),
                _: 1
              }),
              _(U, {
                variant: "primary",
                size: "sm",
                onClick: te
              }, {
                default: n(() => [...v[4] || (v[4] = [
                  g(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              _(U, {
                variant: "primary",
                size: "sm",
                onClick: N
              }, {
                default: n(() => [...v[5] || (v[5] = [
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
        search: n(() => [
          _(Re, {
            modelValue: x.value,
            "onUpdate:modelValue": v[1] || (v[1] = (m) => x.value = m),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: n(() => [
          l.value ? (t(), w(We, {
            key: 0,
            message: "Loading workspace models..."
          })) : k.value ? (t(), w(Ve, {
            key: 1,
            message: k.value,
            retry: !0,
            onRetry: B
          }, null, 8, ["message"])) : (t(), s(H, { key: 2 }, [
            a.value.length ? (t(), w(Ye, {
              key: 0,
              variant: "compact"
            }, {
              default: n(() => [
                g(" Total: " + c(a.value.length) + " models • " + c(F(p.value)) + " • Used in " + c(u.value) + " environments ", 1)
              ]),
              _: 1
            })) : d("", !0),
            L.value.length ? (t(), w(ce, {
              key: 1,
              title: "CHECKPOINTS",
              count: L.value.length
            }, {
              default: n(() => [
                (t(!0), s(H, null, Y(L.value, (m) => (t(), w(de, {
                  key: m.sha256 || m.filename,
                  status: "synced"
                }, {
                  icon: n(() => [...v[6] || (v[6] = [
                    g("📦", -1)
                  ])]),
                  title: n(() => [
                    g(c(m.filename), 1)
                  ]),
                  subtitle: n(() => [
                    g(c(F(m.size_mb || m.size)), 1)
                  ]),
                  details: n(() => {
                    var $, C;
                    return [
                      m.sha256 || m.sha256_hash ? (t(), w(oe, {
                        key: 0,
                        label: "SHA256:",
                        value: (m.sha256 || m.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : d("", !0),
                      _(oe, {
                        label: "Used in:",
                        value: ee(m)
                      }, null, 8, ["value"]),
                      m.source_url || ($ = m.sources) != null && $[0] ? (t(), w(oe, {
                        key: 1,
                        label: "Source URL:",
                        value: m.source_url || ((C = m.sources) == null ? void 0 : C[0])
                      }, null, 8, ["value"])) : (t(), w(oe, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: n(() => [...v[7] || (v[7] = [
                          g("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: n(() => [
                    _(U, {
                      variant: "secondary",
                      size: "xs",
                      onClick: ($) => M(m)
                    }, {
                      default: n(() => [...v[8] || (v[8] = [
                        g(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    m.sha256 || m.sha256_hash ? (t(), w(U, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: ($) => j(m.sha256 || m.sha256_hash)
                    }, {
                      default: n(() => [...v[9] || (v[9] = [
                        g(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0),
                    _(U, {
                      variant: "destructive",
                      size: "xs",
                      onClick: ($) => D(m)
                    }, {
                      default: n(() => [...v[10] || (v[10] = [
                        g(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            y.value.length ? (t(), w(ce, {
              key: 2,
              title: "LORAS",
              count: y.value.length
            }, {
              default: n(() => [
                (t(!0), s(H, null, Y(y.value, (m) => (t(), w(de, {
                  key: m.sha256 || m.filename,
                  status: "synced"
                }, {
                  icon: n(() => [...v[11] || (v[11] = [
                    g("📦", -1)
                  ])]),
                  title: n(() => [
                    g(c(m.filename), 1)
                  ]),
                  subtitle: n(() => [
                    g(c(F(m.size_mb || m.size)), 1)
                  ]),
                  details: n(() => {
                    var $, C;
                    return [
                      m.sha256 || m.sha256_hash ? (t(), w(oe, {
                        key: 0,
                        label: "SHA256:",
                        value: (m.sha256 || m.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : d("", !0),
                      _(oe, {
                        label: "Used in:",
                        value: ee(m)
                      }, null, 8, ["value"]),
                      m.source_url || ($ = m.sources) != null && $[0] ? (t(), w(oe, {
                        key: 1,
                        label: "Source URL:",
                        value: m.source_url || ((C = m.sources) == null ? void 0 : C[0])
                      }, null, 8, ["value"])) : (t(), w(oe, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: n(() => [...v[12] || (v[12] = [
                          g("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: n(() => [
                    _(U, {
                      variant: "secondary",
                      size: "xs",
                      onClick: ($) => M(m)
                    }, {
                      default: n(() => [...v[13] || (v[13] = [
                        g(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    m.sha256 || m.sha256_hash ? (t(), w(U, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: ($) => j(m.sha256 || m.sha256_hash)
                    }, {
                      default: n(() => [...v[14] || (v[14] = [
                        g(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0),
                    _(U, {
                      variant: "destructive",
                      size: "xs",
                      onClick: ($) => D(m)
                    }, {
                      default: n(() => [...v[15] || (v[15] = [
                        g(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            W.value.length ? (t(), w(ce, {
              key: 3,
              title: "OTHER",
              count: W.value.length
            }, {
              default: n(() => [
                (t(!0), s(H, null, Y(W.value, (m) => (t(), w(de, {
                  key: m.sha256 || m.filename,
                  status: "synced"
                }, {
                  icon: n(() => [...v[16] || (v[16] = [
                    g("📦", -1)
                  ])]),
                  title: n(() => [
                    g(c(m.filename), 1)
                  ]),
                  subtitle: n(() => [
                    g(c(F(m.size_mb || m.size)), 1)
                  ]),
                  details: n(() => [
                    _(oe, {
                      label: "Type:",
                      value: m.type
                    }, null, 8, ["value"]),
                    m.sha256 || m.sha256_hash ? (t(), w(oe, {
                      key: 0,
                      label: "SHA256:",
                      value: (m.sha256 || m.sha256_hash).substring(0, 16) + "...",
                      mono: !0,
                      "value-variant": "hash"
                    }, null, 8, ["value"])) : d("", !0),
                    _(oe, {
                      label: "Used in:",
                      value: ee(m)
                    }, null, 8, ["value"])
                  ]),
                  actions: n(() => [
                    _(U, {
                      variant: "secondary",
                      size: "xs",
                      onClick: ($) => M(m)
                    }, {
                      default: n(() => [...v[17] || (v[17] = [
                        g(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    m.sha256 || m.sha256_hash ? (t(), w(U, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: ($) => j(m.sha256 || m.sha256_hash)
                    }, {
                      default: n(() => [...v[18] || (v[18] = [
                        g(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0),
                    _(U, {
                      variant: "destructive",
                      size: "xs",
                      onClick: ($) => D(m)
                    }, {
                      default: n(() => [...v[19] || (v[19] = [
                        g(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            b.value.length ? d("", !0) : (t(), w(Se, {
              key: 4,
              icon: "📭",
              message: x.value ? `No models match '${x.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      _(Ze, {
        show: f.value,
        title: "About Workspace Model Index",
        onClose: v[2] || (v[2] = (m) => f.value = !1)
      }, {
        content: n(() => [...v[20] || (v[20] = [
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
}), Us = /* @__PURE__ */ R(As, [["__scopeId", "data-v-5a24af01"]]), Ps = { class: "header-info" }, Hs = { class: "commit-hash" }, Fs = {
  key: 0,
  class: "commit-refs"
}, Gs = { class: "commit-message" }, Ks = { class: "commit-date" }, js = {
  key: 0,
  class: "loading"
}, qs = {
  key: 1,
  class: "changes-section"
}, Ys = { class: "stats-row" }, Zs = { class: "stat" }, Xs = { class: "stat insertions" }, Js = { class: "stat deletions" }, Qs = {
  key: 0,
  class: "change-group"
}, en = {
  key: 1,
  class: "change-group"
}, tn = {
  key: 0,
  class: "version"
}, on = {
  key: 2,
  class: "change-group"
}, an = { class: "change-item" }, sn = /* @__PURE__ */ O({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const r = e, { getCommitDetail: a } = he(), l = S(null), k = S(!0), x = P(() => {
      if (!l.value) return !1;
      const p = l.value.changes.workflows;
      return p.added.length > 0 || p.modified.length > 0 || p.deleted.length > 0;
    }), f = P(() => {
      if (!l.value) return !1;
      const p = l.value.changes.nodes;
      return p.added.length > 0 || p.removed.length > 0;
    });
    return ue(async () => {
      try {
        l.value = await a(r.commit.hash);
      } finally {
        k.value = !1;
      }
    }), (p, u) => (t(), w(Le, {
      size: "md",
      "show-close-button": !1,
      onClose: u[3] || (u[3] = (b) => p.$emit("close"))
    }, {
      header: n(() => {
        var b, L, y, W;
        return [
          o("div", Ps, [
            u[4] || (u[4] = o("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            o("span", Hs, c(((b = l.value) == null ? void 0 : b.short_hash) || e.commit.short_hash || ((L = e.commit.hash) == null ? void 0 : L.slice(0, 7))), 1),
            (W = (y = l.value) == null ? void 0 : y.refs) != null && W.length ? (t(), s("span", Fs, [
              (t(!0), s(H, null, Y(l.value.refs, (F) => (t(), s("span", {
                key: F,
                class: "ref-badge"
              }, c(F), 1))), 128))
            ])) : d("", !0)
          ]),
          _(ne, {
            variant: "ghost",
            size: "sm",
            onClick: u[0] || (u[0] = (F) => p.$emit("close"))
          }, {
            default: n(() => [...u[5] || (u[5] = [
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
      body: n(() => {
        var b, L;
        return [
          o("div", Gs, c(((b = l.value) == null ? void 0 : b.message) || e.commit.message), 1),
          o("div", Ks, c(((L = l.value) == null ? void 0 : L.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          k.value ? (t(), s("div", js, "Loading details...")) : l.value ? (t(), s("div", qs, [
            o("div", Ys, [
              o("span", Zs, c(l.value.stats.files_changed) + " files", 1),
              o("span", Xs, "+" + c(l.value.stats.insertions), 1),
              o("span", Js, "-" + c(l.value.stats.deletions), 1)
            ]),
            x.value ? (t(), s("div", Qs, [
              _(fe, { variant: "section" }, {
                default: n(() => [...u[6] || (u[6] = [
                  g("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (t(!0), s(H, null, Y(l.value.changes.workflows.added, (y) => (t(), s("div", {
                key: "add-" + y,
                class: "change-item added"
              }, [
                u[7] || (u[7] = o("span", { class: "change-icon" }, "+", -1)),
                o("span", null, c(y), 1)
              ]))), 128)),
              (t(!0), s(H, null, Y(l.value.changes.workflows.modified, (y) => (t(), s("div", {
                key: "mod-" + y,
                class: "change-item modified"
              }, [
                u[8] || (u[8] = o("span", { class: "change-icon" }, "~", -1)),
                o("span", null, c(y), 1)
              ]))), 128)),
              (t(!0), s(H, null, Y(l.value.changes.workflows.deleted, (y) => (t(), s("div", {
                key: "del-" + y,
                class: "change-item deleted"
              }, [
                u[9] || (u[9] = o("span", { class: "change-icon" }, "-", -1)),
                o("span", null, c(y), 1)
              ]))), 128))
            ])) : d("", !0),
            f.value ? (t(), s("div", en, [
              _(fe, { variant: "section" }, {
                default: n(() => [...u[10] || (u[10] = [
                  g("NODES", -1)
                ])]),
                _: 1
              }),
              (t(!0), s(H, null, Y(l.value.changes.nodes.added, (y) => (t(), s("div", {
                key: "add-" + y.name,
                class: "change-item added"
              }, [
                u[11] || (u[11] = o("span", { class: "change-icon" }, "+", -1)),
                o("span", null, c(y.name), 1),
                y.version ? (t(), s("span", tn, "(" + c(y.version) + ")", 1)) : d("", !0)
              ]))), 128)),
              (t(!0), s(H, null, Y(l.value.changes.nodes.removed, (y) => (t(), s("div", {
                key: "rem-" + y.name,
                class: "change-item deleted"
              }, [
                u[12] || (u[12] = o("span", { class: "change-icon" }, "-", -1)),
                o("span", null, c(y.name), 1)
              ]))), 128))
            ])) : d("", !0),
            l.value.changes.models.resolved > 0 ? (t(), s("div", on, [
              _(fe, { variant: "section" }, {
                default: n(() => [...u[13] || (u[13] = [
                  g("MODELS", -1)
                ])]),
                _: 1
              }),
              o("div", an, [
                u[14] || (u[14] = o("span", { class: "change-icon" }, "●", -1)),
                o("span", null, c(l.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : d("", !0)
          ])) : d("", !0)
        ];
      }),
      footer: n(() => [
        _(ne, {
          variant: "secondary",
          onClick: u[1] || (u[1] = (b) => p.$emit("createBranch", e.commit))
        }, {
          default: n(() => [...u[15] || (u[15] = [
            g(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        _(ne, {
          variant: "primary",
          onClick: u[2] || (u[2] = (b) => p.$emit("checkout", e.commit))
        }, {
          default: n(() => [...u[16] || (u[16] = [
            g(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), nn = /* @__PURE__ */ R(sn, [["__scopeId", "data-v-d256ff6d"]]), ln = { class: "dialog-message" }, rn = {
  key: 0,
  class: "dialog-details"
}, cn = {
  key: 1,
  class: "dialog-warning"
}, dn = /* @__PURE__ */ O({
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
    return (r, a) => (t(), w(Le, {
      title: e.title,
      size: "sm",
      onClose: a[3] || (a[3] = (l) => r.$emit("cancel"))
    }, {
      body: n(() => [
        o("p", ln, c(e.message), 1),
        e.details && e.details.length ? (t(), s("div", rn, [
          (t(!0), s(H, null, Y(e.details, (l, k) => (t(), s("div", {
            key: k,
            class: "detail-item"
          }, " • " + c(l), 1))), 128))
        ])) : d("", !0),
        e.warning ? (t(), s("p", cn, [
          a[4] || (a[4] = o("span", { class: "warning-icon" }, "⚠", -1)),
          g(" " + c(e.warning), 1)
        ])) : d("", !0)
      ]),
      footer: n(() => [
        _(ne, {
          variant: "secondary",
          onClick: a[0] || (a[0] = (l) => r.$emit("cancel"))
        }, {
          default: n(() => [
            g(c(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (t(), w(ne, {
          key: 0,
          variant: "secondary",
          onClick: a[1] || (a[1] = (l) => r.$emit("secondary"))
        }, {
          default: n(() => [
            g(c(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : d("", !0),
        _(ne, {
          variant: e.destructive ? "danger" : "primary",
          onClick: a[2] || (a[2] = (l) => r.$emit("confirm"))
        }, {
          default: n(() => [
            g(c(e.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), un = /* @__PURE__ */ R(dn, [["__scopeId", "data-v-3670b9f5"]]), mn = { class: "comfygit-panel" }, gn = { class: "panel-header" }, fn = { class: "header-left" }, hn = {
  key: 0,
  class: "header-info"
}, vn = { class: "header-actions" }, pn = { class: "env-switcher" }, yn = {
  key: 0,
  class: "header-info"
}, bn = { class: "branch-name" }, wn = { class: "panel-main" }, kn = { class: "sidebar" }, _n = { class: "sidebar-section" }, $n = { class: "sidebar-section" }, xn = { class: "sidebar-section" }, Cn = { class: "content-area" }, Sn = {
  key: 0,
  class: "error-message"
}, En = {
  key: 1,
  class: "loading"
}, In = {
  key: 5,
  class: "view-placeholder"
}, zn = {
  key: 6,
  class: "view-placeholder"
}, Ln = {
  key: 7,
  class: "view-placeholder"
}, Mn = {
  key: 9,
  class: "view-placeholder"
}, Bn = {
  key: 10,
  class: "view-placeholder"
}, Tn = {
  key: 11,
  class: "view-placeholder"
}, Nn = {
  key: 12,
  class: "view-placeholder"
}, Dn = {
  key: 13,
  class: "view-placeholder"
}, On = { class: "dialog-content env-selector-dialog" }, Rn = { class: "dialog-header" }, Wn = { class: "dialog-body" }, Vn = { class: "env-list" }, An = { class: "env-info" }, Un = { class: "env-name-row" }, Pn = { class: "env-indicator" }, Hn = { class: "env-name" }, Fn = {
  key: 0,
  class: "env-branch"
}, Gn = {
  key: 1,
  class: "current-label"
}, Kn = { class: "env-stats" }, jn = ["onClick"], qn = { class: "toast-container" }, Yn = { class: "toast-icon" }, Zn = { class: "toast-message" }, Xn = /* @__PURE__ */ O({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(e, { emit: r }) {
    const a = r, {
      getStatus: l,
      getHistory: k,
      exportEnv: x,
      getBranches: f,
      checkout: p,
      createBranch: u,
      switchBranch: b,
      getEnvironments: L
    } = he(), y = S(null), W = S([]), F = S([]), ee = S([]), j = P(() => ee.value.find((z) => z.is_current)), M = S(!1), D = S(null), Z = S(null), te = S(!1), N = S("status"), B = S("this-env");
    function h(z, i) {
      N.value = z, B.value = i;
    }
    function v(z) {
      const X = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[z];
      X && h(X.view, X.section);
    }
    function m() {
      h("branches", "this-env");
    }
    const $ = S(null), C = S([]);
    let le = 0;
    function T(z, i = "info", X = 3e3) {
      const ae = ++le;
      return C.value.push({ id: ae, message: z, type: i }), X > 0 && setTimeout(() => {
        C.value = C.value.filter((ve) => ve.id !== ae);
      }, X), ae;
    }
    function E(z) {
      C.value = C.value.filter((i) => i.id !== z);
    }
    function G(z) {
      switch (z) {
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
    const I = P(() => {
      if (!y.value) return "neutral";
      const z = y.value.workflows, i = z.new.length > 0 || z.modified.length > 0 || z.deleted.length > 0 || y.value.has_changes;
      return y.value.comparison.is_synced ? i ? "warning" : "success" : "error";
    });
    P(() => y.value ? I.value === "success" ? "All synced" : I.value === "warning" ? "Uncommitted changes" : I.value === "error" ? "Not synced" : "" : "");
    async function q() {
      M.value = !0, D.value = null;
      try {
        const [z, i, X, ae] = await Promise.all([
          l(),
          k(),
          f(),
          L()
        ]);
        y.value = z, W.value = i.commits, F.value = X.branches, ee.value = ae, a("statusUpdate", z);
      } catch (z) {
        D.value = z instanceof Error ? z.message : "Failed to load status", y.value = null, W.value = [], F.value = [];
      } finally {
        M.value = !1;
      }
    }
    function se(z) {
      Z.value = z;
    }
    async function we(z) {
      var X;
      Z.value = null;
      const i = y.value && (y.value.workflows.new.length > 0 || y.value.workflows.modified.length > 0 || y.value.workflows.deleted.length > 0 || y.value.has_changes);
      $.value = {
        title: i ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: i ? "You have uncommitted changes that will be lost." : `Checkout commit ${z.short_hash || ((X = z.hash) == null ? void 0 : X.slice(0, 7))}?`,
        details: i ? Pe() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: i ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: i,
        onConfirm: async () => {
          var V;
          $.value = null;
          const ae = T(`Checking out ${z.short_hash || ((V = z.hash) == null ? void 0 : V.slice(0, 7))}...`, "info", 0), ve = await p(z.hash, i);
          E(ae), ve.status === "success" ? T("Restarting ComfyUI...", "success") : T(ve.message || "Checkout failed", "error");
        }
      };
    }
    async function Ee(z) {
      const i = y.value && (y.value.workflows.new.length > 0 || y.value.workflows.modified.length > 0 || y.value.workflows.deleted.length > 0 || y.value.has_changes);
      $.value = {
        title: i ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: i ? "You have uncommitted changes." : `Switch to branch "${z}"?`,
        details: i ? Pe() : void 0,
        warning: i ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: i ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          $.value = null;
          const X = T(`Switching to ${z}...`, "info", 0), ae = await b(z, i);
          E(X), ae.status === "success" ? T("Restarting ComfyUI...", "success") : T(ae.message || "Branch switch failed", "error");
        }
      };
    }
    async function tt(z) {
      const i = T(`Creating branch ${z}...`, "info", 0), X = await u(z);
      E(i), X.status === "success" ? (T(`Branch "${z}" created`, "success"), await q()) : T(X.message || "Failed to create branch", "error");
    }
    async function ot(z) {
      Z.value = null;
      const i = prompt("Enter branch name:");
      if (i) {
        const X = T(`Creating branch ${i}...`, "info", 0), ae = await u(i, z.hash);
        E(X), ae.status === "success" ? (T(`Branch "${i}" created from ${z.short_hash}`, "success"), await q()) : T(ae.message || "Failed to create branch", "error");
      }
    }
    async function at(z) {
      te.value = !1, T("Environment switching not yet implemented", "warning");
    }
    function Pe() {
      if (!y.value) return [];
      const z = [], i = y.value.workflows;
      return i.new.length && z.push(`${i.new.length} new workflow(s)`), i.modified.length && z.push(`${i.modified.length} modified workflow(s)`), i.deleted.length && z.push(`${i.deleted.length} deleted workflow(s)`), z;
    }
    async function st() {
      const z = T("Exporting environment...", "info", 0);
      try {
        const i = await x();
        E(z), i.status === "success" ? (T("Export complete", "success"), alert(`Export successful!

Saved to: ${i.path}

Models without sources: ${i.models_without_sources}`)) : (T("Export failed", "error"), alert(`Export failed: ${i.message}`));
      } catch (i) {
        E(z), T("Export error", "error"), alert(`Export error: ${i instanceof Error ? i.message : "Unknown error"}`);
      }
    }
    return ue(q), (z, i) => {
      var X, ae, ve;
      return t(), s("div", mn, [
        o("div", gn, [
          o("div", fn, [
            i[20] || (i[20] = o("h2", { class: "panel-title" }, "ComfyGit", -1)),
            y.value ? (t(), s("div", hn)) : d("", !0)
          ]),
          o("div", vn, [
            o("button", {
              class: A(["icon-btn", { spinning: M.value }]),
              onClick: q,
              title: "Refresh"
            }, [...i[21] || (i[21] = [
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
              onClick: i[0] || (i[0] = (V) => a("close")),
              title: "Close"
            }, [...i[22] || (i[22] = [
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
        o("div", pn, [
          i[24] || (i[24] = o("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
          o("button", {
            class: "env-switcher-btn",
            onClick: i[1] || (i[1] = (V) => te.value = !0)
          }, [
            y.value ? (t(), s("div", yn, [
              o("span", null, c(((X = j.value) == null ? void 0 : X.name) || ((ae = y.value) == null ? void 0 : ae.environment) || "Loading..."), 1),
              o("span", bn, "(" + c(y.value.branch || "detached") + ")", 1)
            ])) : d("", !0),
            i[23] || (i[23] = o("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        o("div", wn, [
          o("div", kn, [
            o("div", _n, [
              i[25] || (i[25] = o("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              o("button", {
                class: A(["sidebar-item", { active: N.value === "status" && B.value === "this-env" }]),
                onClick: i[2] || (i[2] = (V) => h("status", "this-env"))
              }, " STATUS ", 2),
              o("button", {
                class: A(["sidebar-item", { active: N.value === "workflows" }]),
                onClick: i[3] || (i[3] = (V) => h("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              o("button", {
                class: A(["sidebar-item", { active: N.value === "models-env" }]),
                onClick: i[4] || (i[4] = (V) => h("models-env", "this-env"))
              }, " MODELS ", 2),
              o("button", {
                class: A(["sidebar-item", { active: N.value === "branches" }]),
                onClick: i[5] || (i[5] = (V) => h("branches", "this-env"))
              }, " BRANCHES ", 2),
              o("button", {
                class: A(["sidebar-item", { active: N.value === "history" }]),
                onClick: i[6] || (i[6] = (V) => h("history", "this-env"))
              }, " HISTORY ", 2),
              o("button", {
                class: A(["sidebar-item", { active: N.value === "nodes" }]),
                onClick: i[7] || (i[7] = (V) => h("nodes", "this-env"))
              }, " NODES ", 2),
              o("button", {
                class: A(["sidebar-item", { active: N.value === "debug-env" }]),
                onClick: i[8] || (i[8] = (V) => h("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            i[28] || (i[28] = o("div", { class: "sidebar-divider" }, null, -1)),
            o("div", $n, [
              i[26] || (i[26] = o("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              o("button", {
                class: A(["sidebar-item", { active: N.value === "environments" }]),
                onClick: i[9] || (i[9] = (V) => h("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              o("button", {
                class: A(["sidebar-item", { active: N.value === "model-index" }]),
                onClick: i[10] || (i[10] = (V) => h("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              o("button", {
                class: A(["sidebar-item", { active: N.value === "settings" }]),
                onClick: i[11] || (i[11] = (V) => h("settings", "all-envs"))
              }, " SETTINGS ", 2),
              o("button", {
                class: A(["sidebar-item", { active: N.value === "debug-workspace" }]),
                onClick: i[12] || (i[12] = (V) => h("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            i[29] || (i[29] = o("div", { class: "sidebar-divider" }, null, -1)),
            o("div", xn, [
              i[27] || (i[27] = o("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              o("button", {
                class: A(["sidebar-item", { active: N.value === "export" }]),
                onClick: i[13] || (i[13] = (V) => h("export", "sharing"))
              }, " EXPORT ", 2),
              o("button", {
                class: A(["sidebar-item", { active: N.value === "import" }]),
                onClick: i[14] || (i[14] = (V) => h("import", "sharing"))
              }, " IMPORT ", 2),
              o("button", {
                class: A(["sidebar-item", { active: N.value === "remotes" }]),
                onClick: i[15] || (i[15] = (V) => h("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          o("div", Cn, [
            D.value ? (t(), s("div", Sn, c(D.value), 1)) : !y.value && N.value === "status" ? (t(), s("div", En, " Loading status... ")) : (t(), s(H, { key: 2 }, [
              N.value === "status" ? (t(), w(fo, {
                key: 0,
                status: y.value,
                onSwitchBranch: m
              }, null, 8, ["status"])) : N.value === "workflows" ? (t(), w(Cs, {
                key: 1,
                onRefresh: q
              })) : N.value === "models-env" ? (t(), w(Vs, {
                key: 2,
                onNavigate: v
              })) : N.value === "branches" ? (t(), w(Lo, {
                key: 3,
                branches: F.value,
                current: ((ve = y.value) == null ? void 0 : ve.branch) || null,
                onSwitch: Ee,
                onCreate: tt
              }, null, 8, ["branches", "current"])) : N.value === "history" ? (t(), w(Ao, {
                key: 4,
                commits: W.value,
                onSelect: se,
                onCheckout: we
              }, null, 8, ["commits"])) : N.value === "nodes" ? (t(), s("div", In, [...i[30] || (i[30] = [
                o("h3", { class: "view-title" }, "NODES (GIT-TRACKED)", -1),
                o("p", null, "Git-tracked nodes view coming soon...", -1)
              ])])) : N.value === "debug-env" ? (t(), s("div", zn, [...i[31] || (i[31] = [
                o("h3", { class: "view-title" }, "DEBUG (ENVIRONMENT LOGS)", -1),
                o("p", null, "Environment logs view coming soon...", -1)
              ])])) : N.value === "environments" ? (t(), s("div", Ln, [...i[32] || (i[32] = [
                o("h3", { class: "view-title" }, "ENVIRONMENTS", -1),
                o("p", null, "Environment management UI coming soon...", -1)
              ])])) : N.value === "model-index" ? (t(), w(Us, { key: 8 })) : N.value === "settings" ? (t(), s("div", Mn, [...i[33] || (i[33] = [
                o("h3", { class: "view-title" }, "SETTINGS", -1),
                o("p", null, "Settings UI coming soon...", -1)
              ])])) : N.value === "debug-workspace" ? (t(), s("div", Bn, [...i[34] || (i[34] = [
                o("h3", { class: "view-title" }, "DEBUG (WORKSPACE LOGS)", -1),
                o("p", null, "Workspace logs view coming soon...", -1)
              ])])) : N.value === "export" ? (t(), s("div", Tn, [
                i[36] || (i[36] = o("h3", { class: "view-title" }, "EXPORT", -1)),
                o("button", {
                  class: "export-btn",
                  onClick: st
                }, [...i[35] || (i[35] = [
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
              ])) : N.value === "import" ? (t(), s("div", Nn, [...i[37] || (i[37] = [
                o("h3", { class: "view-title" }, "IMPORT", -1),
                o("p", null, "Import UI coming soon...", -1)
              ])])) : N.value === "remotes" ? (t(), s("div", Dn, [...i[38] || (i[38] = [
                o("h3", { class: "view-title" }, "REMOTES", -1),
                o("p", null, "Git remotes UI coming soon...", -1)
              ])])) : d("", !0)
            ], 64))
          ])
        ]),
        Z.value ? (t(), w(nn, {
          key: 0,
          commit: Z.value,
          onClose: i[16] || (i[16] = (V) => Z.value = null),
          onCheckout: we,
          onCreateBranch: ot
        }, null, 8, ["commit"])) : d("", !0),
        $.value ? (t(), w(un, {
          key: 1,
          title: $.value.title,
          message: $.value.message,
          details: $.value.details,
          warning: $.value.warning,
          confirmLabel: $.value.confirmLabel,
          cancelLabel: $.value.cancelLabel,
          secondaryLabel: $.value.secondaryLabel,
          secondaryAction: $.value.secondaryAction,
          destructive: $.value.destructive,
          onConfirm: $.value.onConfirm,
          onCancel: i[17] || (i[17] = (V) => $.value = null),
          onSecondary: $.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : d("", !0),
        te.value ? (t(), s("div", {
          key: 2,
          class: "dialog-overlay",
          onClick: i[19] || (i[19] = be((V) => te.value = !1, ["self"]))
        }, [
          o("div", On, [
            o("div", Rn, [
              i[40] || (i[40] = o("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              o("button", {
                class: "icon-btn",
                onClick: i[18] || (i[18] = (V) => te.value = !1)
              }, [...i[39] || (i[39] = [
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
            o("div", Wn, [
              i[41] || (i[41] = o("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              o("div", Vn, [
                (t(!0), s(H, null, Y(ee.value, (V) => (t(), s("div", {
                  key: V.name,
                  class: A(["env-item", { current: V.is_current }])
                }, [
                  o("div", An, [
                    o("div", Un, [
                      o("span", Pn, c(V.is_current ? "●" : "○"), 1),
                      o("span", Hn, c(V.name), 1),
                      V.current_branch ? (t(), s("span", Fn, "(" + c(V.current_branch) + ")", 1)) : d("", !0),
                      V.is_current ? (t(), s("span", Gn, "CURRENT")) : d("", !0)
                    ]),
                    o("div", Kn, c(V.workflow_count) + " workflows • " + c(V.node_count) + " nodes ", 1)
                  ]),
                  V.is_current ? d("", !0) : (t(), s("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (zl) => at(V.name)
                  }, " SWITCH ", 8, jn))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : d("", !0),
        o("div", qn, [
          _(lt, { name: "toast" }, {
            default: n(() => [
              (t(!0), s(H, null, Y(C.value, (V) => (t(), s("div", {
                key: V.id,
                class: A(["toast", V.type])
              }, [
                o("span", Yn, c(G(V.type)), 1),
                o("span", Zn, c(V.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), Jn = /* @__PURE__ */ R(Xn, [["__scopeId", "data-v-6671b632"]]), Qn = { class: "base-textarea-wrapper" }, el = ["value", "rows", "placeholder", "disabled", "maxlength"], tl = {
  key: 0,
  class: "base-textarea-count"
}, ol = /* @__PURE__ */ O({
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
    return (r, a) => (t(), s("div", Qn, [
      o("textarea", {
        value: e.modelValue,
        rows: e.rows,
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxlength: e.maxLength,
        class: "base-textarea",
        onInput: a[0] || (a[0] = (l) => r.$emit("update:modelValue", l.target.value)),
        onKeydown: [
          a[1] || (a[1] = $e(be((l) => r.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          a[2] || (a[2] = $e(be((l) => r.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, el),
      e.showCharCount && e.maxLength ? (t(), s("div", tl, c(e.modelValue.length) + " / " + c(e.maxLength), 1)) : d("", !0)
    ]));
  }
}), al = /* @__PURE__ */ R(ol, [["__scopeId", "data-v-5516e6fc"]]), sl = { class: "commit-popover" }, nl = { class: "popover-header" }, ll = { class: "popover-body" }, rl = {
  key: 0,
  class: "changes-summary"
}, il = {
  key: 0,
  class: "change-item"
}, cl = {
  key: 1,
  class: "change-item"
}, dl = {
  key: 2,
  class: "change-item"
}, ul = {
  key: 3,
  class: "change-item"
}, ml = {
  key: 4,
  class: "change-item"
}, gl = {
  key: 1,
  class: "no-changes"
}, fl = {
  key: 2,
  class: "loading"
}, hl = { class: "message-section" }, vl = { class: "popover-footer" }, pl = /* @__PURE__ */ O({
  __name: "CommitPopover",
  props: {
    status: {}
  },
  emits: ["close", "committed"],
  setup(e, { emit: r }) {
    const a = e, l = r, { commit: k } = he(), x = S(""), f = S(!1), p = S(null), u = P(() => {
      if (!a.status) return !1;
      const L = a.status.workflows;
      return L.new.length > 0 || L.modified.length > 0 || L.deleted.length > 0 || a.status.has_changes;
    });
    async function b() {
      var L, y, W;
      if (!(!u.value || !x.value.trim() || f.value)) {
        f.value = !0, p.value = null;
        try {
          const F = await k(x.value.trim());
          F.status === "success" ? (p.value = {
            type: "success",
            message: `Committed: ${((L = F.summary) == null ? void 0 : L.new) || 0} new, ${((y = F.summary) == null ? void 0 : y.modified) || 0} modified, ${((W = F.summary) == null ? void 0 : W.deleted) || 0} deleted`
          }, x.value = "", setTimeout(() => l("committed"), 1e3)) : F.status === "no_changes" ? p.value = { type: "error", message: "No changes to commit" } : p.value = { type: "error", message: F.message || "Commit failed" };
        } catch (F) {
          p.value = { type: "error", message: F instanceof Error ? F.message : "Commit failed" };
        } finally {
          f.value = !1;
        }
      }
    }
    return (L, y) => (t(), s("div", sl, [
      o("div", nl, [
        y[4] || (y[4] = o("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        o("button", {
          class: "close-btn",
          onClick: y[0] || (y[0] = (W) => l("close"))
        }, [...y[3] || (y[3] = [
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
      o("div", ll, [
        e.status && u.value ? (t(), s("div", rl, [
          e.status.workflows.new.length ? (t(), s("div", il, [
            y[5] || (y[5] = o("span", { class: "change-icon new" }, "+", -1)),
            o("span", null, c(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : d("", !0),
          e.status.workflows.modified.length ? (t(), s("div", cl, [
            y[6] || (y[6] = o("span", { class: "change-icon modified" }, "~", -1)),
            o("span", null, c(e.status.workflows.modified.length) + " modified", 1)
          ])) : d("", !0),
          e.status.workflows.deleted.length ? (t(), s("div", dl, [
            y[7] || (y[7] = o("span", { class: "change-icon deleted" }, "-", -1)),
            o("span", null, c(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : d("", !0),
          e.status.git_changes.nodes_added.length ? (t(), s("div", ul, [
            y[8] || (y[8] = o("span", { class: "change-icon new" }, "+", -1)),
            o("span", null, c(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : d("", !0),
          e.status.git_changes.nodes_removed.length ? (t(), s("div", ml, [
            y[9] || (y[9] = o("span", { class: "change-icon deleted" }, "-", -1)),
            o("span", null, c(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : d("", !0)
        ])) : e.status ? (t(), s("div", gl, " No changes to commit ")) : (t(), s("div", fl, " Loading... ")),
        o("div", hl, [
          _(al, {
            modelValue: x.value,
            "onUpdate:modelValue": y[1] || (y[1] = (W) => x.value = W),
            placeholder: u.value ? "Describe your changes..." : "No changes",
            disabled: !u.value || f.value,
            rows: 3,
            onCtrlEnter: b
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        p.value ? (t(), s("div", {
          key: 3,
          class: A(["result", p.value.type])
        }, c(p.value.message), 3)) : d("", !0)
      ]),
      o("div", vl, [
        _(ne, {
          variant: "secondary",
          onClick: y[2] || (y[2] = (W) => l("close"))
        }, {
          default: n(() => [...y[10] || (y[10] = [
            g(" Cancel ", -1)
          ])]),
          _: 1
        }),
        _(ne, {
          variant: "primary",
          disabled: !u.value || !x.value.trim() || f.value,
          loading: f.value,
          onClick: b
        }, {
          default: n(() => [
            g(c(f.value ? "Committing..." : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ])
    ]));
  }
}), yl = /* @__PURE__ */ R(pl, [["__scopeId", "data-v-4f587977"]]), bl = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-item{border-radius:var(--cg-radius-md);border-left:3px solid var(--cg-color-border-subtle);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}', wl = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', kl = {
  comfy: bl,
  phosphor: wl
}, Ae = "comfy", Xe = "comfygit-theme";
let pe = null, Je = Ae;
function _l() {
  try {
    const e = localStorage.getItem(Xe);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return Ae;
}
function Qe(e = Ae) {
  pe && pe.remove(), pe = document.createElement("style"), pe.id = "comfygit-theme-styles", pe.setAttribute("data-theme", e), pe.textContent = kl[e], document.head.appendChild(pe), document.body.setAttribute("data-comfygit-theme", e), Je = e;
  try {
    localStorage.setItem(Xe, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function $l() {
  return Je;
}
function xl(e) {
  Qe(e);
}
const Ue = document.createElement("link");
Ue.rel = "stylesheet";
Ue.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(Ue);
const Cl = _l();
Qe(Cl);
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), xl(e);
  },
  getTheme: () => {
    const e = $l();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
let ie = null, re = null, _e = null;
const ye = S(null);
async function De() {
  var e;
  if (!((e = window.app) != null && e.api)) return null;
  try {
    const r = await window.app.api.fetchApi("/v2/comfygit/status");
    r.ok && (ye.value = await r.json());
  } catch {
  }
}
function Sl() {
  if (!ye.value) return !1;
  const e = ye.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || ye.value.has_changes;
}
function El() {
  ie && ie.remove(), ie = document.createElement("div"), ie.className = "comfygit-panel-overlay";
  const e = document.createElement("div");
  e.className = "comfygit-panel-container", ie.appendChild(e), ie.addEventListener("click", (l) => {
    l.target === ie && Te();
  });
  const r = (l) => {
    l.key === "Escape" && (Te(), document.removeEventListener("keydown", r));
  };
  document.addEventListener("keydown", r), Ke({
    render: () => je(Jn, {
      onClose: Te,
      onStatusUpdate: (l) => {
        ye.value = l, ze();
      }
    })
  }).mount(e), document.body.appendChild(ie);
}
function Te() {
  ie && (ie.remove(), ie = null);
}
function Il(e) {
  ke(), re = document.createElement("div"), re.className = "comfygit-commit-popover-container";
  const r = e.getBoundingClientRect();
  re.style.position = "fixed", re.style.top = `${r.bottom + 8}px`, re.style.right = `${window.innerWidth - r.right}px`, re.style.zIndex = "10001";
  const a = (k) => {
    re && !re.contains(k.target) && k.target !== e && (ke(), document.removeEventListener("mousedown", a));
  };
  setTimeout(() => document.addEventListener("mousedown", a), 0);
  const l = (k) => {
    k.key === "Escape" && (ke(), document.removeEventListener("keydown", l));
  };
  document.addEventListener("keydown", l), _e = Ke({
    render: () => je(yl, {
      status: ye.value,
      onClose: ke,
      onCommitted: () => {
        ke(), De().then(ze);
      }
    })
  }), _e.mount(re), document.body.appendChild(re);
}
function ke() {
  _e && (_e.unmount(), _e = null), re && (re.remove(), re = null);
}
let me = null;
function ze() {
  if (!me) return;
  const e = me.querySelector(".commit-indicator");
  e && (e.style.display = Sl() ? "block" : "none");
}
const et = document.createElement("style");
et.textContent = `
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
document.head.appendChild(et);
Me.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var a, l;
    const e = document.createElement("div");
    e.className = "comfygit-btn-group";
    const r = document.createElement("button");
    r.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", r.textContent = "ComfyGit", r.title = "ComfyGit Control Panel", r.onclick = El, me = document.createElement("button"), me.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", me.innerHTML = 'Commit <span class="commit-indicator"></span>', me.title = "Quick Commit", me.onclick = () => Il(me), e.appendChild(r), e.appendChild(me), (l = (a = Me.menu) == null ? void 0 : a.settingsGroup) != null && l.element && (Me.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), await De(), ze(), setInterval(async () => {
      await De(), ze();
    }, 3e4);
  }
});
