import { app as Me } from "../../scripts/app.js";
import { defineComponent as W, createElementBlock as a, openBlock as t, createCommentVNode as d, createElementVNode as o, renderSlot as j, createBlock as w, resolveDynamicComponent as Oe, normalizeClass as U, withCtx as n, toDisplayString as c, createVNode as _, createTextVNode as m, computed as V, Fragment as P, renderList as Y, ref as E, nextTick as nt, withDirectives as lt, withKeys as xe, vModelText as rt, withModifiers as be, onMounted as me, onUnmounted as it, Teleport as Ge, normalizeStyle as Fe, TransitionGroup as ct, createApp as Ke, h as je } from "vue";
const dt = { class: "panel-layout" }, ut = {
  key: 0,
  class: "panel-layout-header"
}, mt = {
  key: 1,
  class: "panel-layout-search"
}, gt = { class: "panel-layout-content" }, ht = {
  key: 2,
  class: "panel-layout-footer"
}, ft = /* @__PURE__ */ W({
  __name: "PanelLayout",
  setup(e) {
    return (r, s) => (t(), a("div", dt, [
      r.$slots.header ? (t(), a("div", ut, [
        j(r.$slots, "header", {}, void 0, !0)
      ])) : d("", !0),
      r.$slots.search ? (t(), a("div", mt, [
        j(r.$slots, "search", {}, void 0, !0)
      ])) : d("", !0),
      o("div", gt, [
        j(r.$slots, "content", {}, void 0, !0)
      ]),
      r.$slots.footer ? (t(), a("div", ht, [
        j(r.$slots, "footer", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), A = (e, r) => {
  const s = e.__vccOpts || e;
  for (const [l, b] of r)
    s[l] = b;
  return s;
}, Ee = /* @__PURE__ */ A(ft, [["__scopeId", "data-v-21565df9"]]), vt = {
  key: 0,
  class: "panel-title-prefix"
}, pt = {
  key: 1,
  class: "panel-title-prefix-theme"
}, yt = /* @__PURE__ */ W({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (r, s) => (t(), w(Oe(`h${e.level}`), {
      class: U(["panel-title", e.variant])
    }, {
      default: n(() => [
        e.showPrefix ? (t(), a("span", vt, c(e.prefix), 1)) : (t(), a("span", pt)),
        j(r.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), bt = /* @__PURE__ */ A(yt, [["__scopeId", "data-v-c3875efc"]]), wt = ["title"], kt = ["width", "height"], _t = /* @__PURE__ */ W({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(e) {
    return (r, s) => (t(), a("button", {
      class: "info-button",
      title: e.title,
      onClick: s[0] || (s[0] = (l) => r.$emit("click"))
    }, [
      (t(), a("svg", {
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
      ])], 8, kt))
    ], 8, wt));
  }
}), xt = /* @__PURE__ */ A(_t, [["__scopeId", "data-v-6fc7f16d"]]), $t = { class: "header-left" }, Ct = {
  key: 0,
  class: "header-actions"
}, St = /* @__PURE__ */ W({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(e) {
    return (r, s) => (t(), a("div", {
      class: U(["panel-header", { stacked: e.stacked }])
    }, [
      o("div", $t, [
        _(bt, { "show-prefix": e.showPrefix }, {
          default: n(() => [
            m(c(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (t(), w(xt, {
          key: 0,
          onClick: s[0] || (s[0] = (l) => r.$emit("info-click"))
        })) : d("", !0)
      ]),
      r.$slots.actions ? (t(), a("div", Ct, [
        j(r.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), Ie = /* @__PURE__ */ A(St, [["__scopeId", "data-v-55a62cd6"]]), Et = {
  key: 0,
  class: "section-title-count"
}, It = {
  key: 1,
  class: "section-title-icon"
}, zt = /* @__PURE__ */ W({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (r, s) => (t(), w(Oe(`h${e.level}`), {
      class: U(["section-title", { clickable: e.clickable }]),
      onClick: s[0] || (s[0] = (l) => e.clickable && r.$emit("click"))
    }, {
      default: n(() => [
        j(r.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (t(), a("span", Et, "(" + c(e.count) + ")", 1)) : d("", !0),
        e.clickable ? (t(), a("span", It, c(e.expanded ? "▼" : "▸"), 1)) : d("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), De = /* @__PURE__ */ A(zt, [["__scopeId", "data-v-559361eb"]]), Lt = { class: "status-grid" }, Mt = { class: "status-grid__column" }, Bt = { class: "status-grid__title" }, Tt = { class: "status-grid__column status-grid__column--right" }, Dt = { class: "status-grid__title" }, Nt = /* @__PURE__ */ W({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (r, s) => (t(), a("div", Lt, [
      o("div", Mt, [
        o("h4", Bt, c(e.leftTitle), 1),
        j(r.$slots, "left", {}, void 0, !0)
      ]),
      o("div", Tt, [
        o("h4", Dt, c(e.rightTitle), 1),
        j(r.$slots, "right", {}, void 0, !0)
      ])
    ]));
  }
}), Ot = /* @__PURE__ */ A(Nt, [["__scopeId", "data-v-fe556068"]]), Rt = {
  key: 0,
  class: "status-item__icon"
}, Wt = {
  key: 1,
  class: "status-item__count"
}, At = { class: "status-item__label" }, Ut = /* @__PURE__ */ W({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(e) {
    const r = e, s = V(() => `status-item--${r.variant}`);
    return (l, b) => (t(), a("div", {
      class: U(["status-item", s.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (t(), a("span", Rt, c(e.icon), 1)) : d("", !0),
      e.count !== void 0 ? (t(), a("span", Wt, c(e.count), 1)) : d("", !0),
      o("span", At, c(e.label), 1)
    ], 2));
  }
}), ge = /* @__PURE__ */ A(Ut, [["__scopeId", "data-v-6f929183"]]), Vt = { class: "issue-card__header" }, Pt = { class: "issue-card__icon" }, Ht = { class: "issue-card__title" }, Gt = {
  key: 0,
  class: "issue-card__content"
}, Ft = {
  key: 0,
  class: "issue-card__description"
}, Kt = {
  key: 1,
  class: "issue-card__items"
}, jt = {
  key: 2,
  class: "issue-card__actions"
}, qt = /* @__PURE__ */ W({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(e) {
    const r = e, s = V(() => `issue-card--${r.severity}`);
    return (l, b) => (t(), a("div", {
      class: U(["issue-card", s.value])
    }, [
      o("div", Vt, [
        o("span", Pt, c(e.icon), 1),
        o("h4", Ht, c(e.title), 1)
      ]),
      l.$slots.default || e.description ? (t(), a("div", Gt, [
        e.description ? (t(), a("p", Ft, c(e.description), 1)) : d("", !0),
        j(l.$slots, "default", {}, void 0, !0)
      ])) : d("", !0),
      e.items && e.items.length ? (t(), a("div", Kt, [
        (t(!0), a(P, null, Y(e.items, (C, v) => (t(), a("div", {
          key: v,
          class: "issue-card__item"
        }, [
          b[0] || (b[0] = o("span", { class: "issue-card__bullet" }, "•", -1)),
          o("span", null, c(C), 1)
        ]))), 128))
      ])) : d("", !0),
      l.$slots.actions ? (t(), a("div", jt, [
        j(l.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), Be = /* @__PURE__ */ A(qt, [["__scopeId", "data-v-df6aa348"]]), Yt = ["type", "disabled"], Zt = {
  key: 0,
  class: "spinner"
}, Xt = /* @__PURE__ */ W({
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
    return (r, s) => (t(), a("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: U(["action-btn", e.variant, e.size, { loading: e.loading }]),
      onClick: s[0] || (s[0] = (l) => r.$emit("click", l))
    }, [
      e.loading ? (t(), a("span", Zt)) : d("", !0),
      e.loading ? d("", !0) : j(r.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, Yt));
  }
}), G = /* @__PURE__ */ A(Xt, [["__scopeId", "data-v-772abe47"]]), Jt = { class: "empty-state" }, Qt = {
  key: 0,
  class: "empty-icon"
}, eo = { class: "empty-message" }, to = /* @__PURE__ */ W({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (r, s) => (t(), a("div", Jt, [
      e.icon ? (t(), a("div", Qt, c(e.icon), 1)) : d("", !0),
      o("p", eo, c(e.message), 1),
      e.actionLabel ? (t(), w(G, {
        key: 1,
        variant: e.actionVariant || "secondary",
        size: "sm",
        onClick: s[0] || (s[0] = (l) => r.$emit("action"))
      }, {
        default: n(() => [
          m(c(e.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : d("", !0)
    ]));
  }
}), ze = /* @__PURE__ */ A(to, [["__scopeId", "data-v-4466284f"]]), oo = { class: "branch-indicator" }, ao = { class: "branch-indicator__info" }, so = { class: "branch-indicator__label" }, no = { class: "branch-indicator__name" }, lo = {
  key: 0,
  class: "branch-indicator__remote"
}, ro = {
  key: 0,
  class: "branch-indicator__status"
}, io = {
  key: 0,
  class: "branch-indicator__ahead"
}, co = {
  key: 1,
  class: "branch-indicator__behind"
}, uo = {
  key: 1,
  class: "branch-indicator__actions"
}, mo = /* @__PURE__ */ W({
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
    return (r, s) => (t(), a("div", oo, [
      o("div", ao, [
        o("span", so, c(e.label), 1),
        o("span", no, c(e.branchName), 1),
        e.remote ? (t(), a("span", lo, "@" + c(e.remote), 1)) : d("", !0)
      ]),
      e.showStatus && (e.commitsAhead || e.commitsBehind) ? (t(), a("div", ro, [
        e.commitsAhead ? (t(), a("span", io, " ↑ " + c(e.commitsAhead) + " ahead ", 1)) : d("", !0),
        e.commitsBehind ? (t(), a("span", co, " ↓ " + c(e.commitsBehind) + " behind ", 1)) : d("", !0)
      ])) : d("", !0),
      r.$slots.actions ? (t(), a("div", uo, [
        j(r.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), go = /* @__PURE__ */ A(mo, [["__scopeId", "data-v-cb8dd50e"]]), ho = { style: { "margin-top": "var(--cg-space-1)" } }, fo = {
  key: 0,
  style: { "margin-top": "var(--cg-space-4)" }
}, vo = /* @__PURE__ */ W({
  __name: "StatusSection",
  props: {
    status: {}
  },
  emits: ["view-workflows", "resolve-models", "view-history", "commit-changes", "view-debug", "sync-environment", "switch-branch"],
  setup(e, { emit: r }) {
    const s = e, l = V(() => s.status.workflows.new.length > 0 || s.status.workflows.modified.length > 0 || s.status.workflows.deleted.length > 0), b = V(() => {
      const g = s.status.git_changes;
      return g.nodes_added.length > 0 || g.nodes_removed.length > 0 || g.workflow_changes || g.has_other_changes;
    }), C = V(() => {
      const g = s.status.git_changes, y = s.status.workflows;
      return (g.workflow_changes || g.has_other_changes) && y.new.length === 0 && y.modified.length === 0 && y.deleted.length === 0;
    }), v = V(() => s.status.missing_models_count > 0 || b.value || !s.status.comparison.is_synced), x = V(() => {
      const g = [];
      return s.status.workflows.new.length > 0 && g.push(`${s.status.workflows.new.length} new workflow${s.status.workflows.new.length === 1 ? "" : "s"}`), s.status.workflows.modified.length > 0 && g.push(`${s.status.workflows.modified.length} modified workflow${s.status.workflows.modified.length === 1 ? "" : "s"}`), s.status.workflows.deleted.length > 0 && g.push(`${s.status.workflows.deleted.length} deleted workflow${s.status.workflows.deleted.length === 1 ? "" : "s"}`), s.status.git_changes.nodes_added.length > 0 && g.push(`${s.status.git_changes.nodes_added.length} node${s.status.git_changes.nodes_added.length === 1 ? "" : "s"} added`), s.status.git_changes.nodes_removed.length > 0 && g.push(`${s.status.git_changes.nodes_removed.length} node${s.status.git_changes.nodes_removed.length === 1 ? "" : "s"} removed`), `${g.length > 0 ? g.join(", ") + "." : "You have uncommitted changes."} Your work could be lost if you switch branches without committing.`;
    });
    return (g, y) => (t(), w(Ee, null, {
      header: n(() => [
        _(Ie, { title: "STATUS" })
      ]),
      content: n(() => [
        _(De, {
          level: "4",
          style: { "margin-bottom": "var(--cg-space-2)" }
        }, {
          default: n(() => [...y[7] || (y[7] = [
            m(" ENVIRONMENT HEALTH ", -1)
          ])]),
          _: 1
        }),
        _(Ot, {
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
            C.value ? (t(), w(ge, {
              key: 2,
              icon: "●",
              label: "other changes",
              variant: "modified"
            })) : d("", !0),
            b.value ? d("", !0) : (t(), w(ge, {
              key: 3,
              icon: "✓",
              label: "No uncommitted changes",
              variant: "ok"
            }))
          ]),
          _: 1
        }),
        o("div", ho, [
          _(go, {
            "branch-name": e.status.current_branch || "main"
          }, {
            actions: n(() => [
              _(G, {
                variant: "secondary",
                size: "sm",
                onClick: y[0] || (y[0] = (S) => g.$emit("switch-branch"))
              }, {
                default: n(() => [...y[8] || (y[8] = [
                  m(" Switch Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["branch-name"])
        ]),
        v.value ? (t(), a("div", fo, [
          _(De, {
            level: "4",
            style: { "margin-bottom": "var(--cg-space-2)" }
          }, {
            default: n(() => [...y[9] || (y[9] = [
              m(" ISSUES DETECTED ", -1)
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
              _(G, {
                variant: "secondary",
                size: "sm",
                onClick: y[1] || (y[1] = (S) => g.$emit("view-workflows"))
              }, {
                default: n(() => [...y[10] || (y[10] = [
                  m(" View Details ", -1)
                ])]),
                _: 1
              }),
              _(G, {
                variant: "primary",
                size: "sm",
                onClick: y[2] || (y[2] = (S) => g.$emit("resolve-models"))
              }, {
                default: n(() => [...y[11] || (y[11] = [
                  m(" Resolve ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["title"])) : d("", !0),
          b.value ? (t(), w(Be, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "You have unsaved changes",
            description: x.value
          }, {
            actions: n(() => [
              _(G, {
                variant: "secondary",
                size: "sm",
                onClick: y[3] || (y[3] = (S) => g.$emit("view-history"))
              }, {
                default: n(() => [...y[12] || (y[12] = [
                  m(" View Changes ", -1)
                ])]),
                _: 1
              }),
              _(G, {
                variant: "primary",
                size: "sm",
                onClick: y[4] || (y[4] = (S) => g.$emit("commit-changes"))
              }, {
                default: n(() => [...y[13] || (y[13] = [
                  m(" Commit Changes ", -1)
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
              _(G, {
                variant: "secondary",
                size: "sm",
                onClick: y[5] || (y[5] = (S) => g.$emit("view-debug"))
              }, {
                default: n(() => [...y[14] || (y[14] = [
                  m(" View Logs ", -1)
                ])]),
                _: 1
              }),
              _(G, {
                variant: "primary",
                size: "sm",
                onClick: y[6] || (y[6] = (S) => g.$emit("sync-environment"))
              }, {
                default: n(() => [...y[15] || (y[15] = [
                  m(" Sync Now ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }))
        ])) : d("", !0),
        !v.value && !b.value ? (t(), w(ze, {
          key: 1,
          icon: "✅",
          message: "Everything looks good! No issues detected.",
          style: { "margin-top": "var(--cg-space-4)" }
        })) : d("", !0)
      ]),
      _: 1
    }));
  }
}), po = /* @__PURE__ */ A(vo, [["__scopeId", "data-v-2045da26"]]), yo = { class: "branch-section" }, bo = { class: "section-header" }, wo = {
  key: 0,
  class: "create-branch-row"
}, ko = ["disabled"], _o = {
  key: 1,
  class: "empty"
}, xo = {
  key: 2,
  class: "branch-list"
}, $o = { class: "branch-indicator" }, Co = { class: "branch-name" }, So = ["onClick"], Eo = {
  key: 1,
  class: "current-label"
}, Io = /* @__PURE__ */ W({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create"],
  setup(e, { emit: r }) {
    const s = r, l = E(!1), b = E(""), C = E(null);
    function v() {
      b.value.trim() && (s("create", b.value.trim()), x());
    }
    function x() {
      l.value = !1, b.value = "";
    }
    return nt(() => {
      l.value && C.value && C.value.focus();
    }), (g, y) => (t(), a("div", yo, [
      o("div", bo, [
        y[3] || (y[3] = o("h3", { class: "view-title" }, "BRANCHES", -1)),
        o("button", {
          class: "add-btn",
          onClick: y[0] || (y[0] = (S) => l.value = !0),
          title: "New Branch"
        }, [...y[2] || (y[2] = [
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
        ])])
      ]),
      l.value ? (t(), a("div", wo, [
        lt(o("input", {
          ref_key: "createInput",
          ref: C,
          "onUpdate:modelValue": y[1] || (y[1] = (S) => b.value = S),
          class: "branch-input",
          placeholder: "Branch name...",
          onKeyup: [
            xe(v, ["enter"]),
            xe(x, ["escape"])
          ]
        }, null, 544), [
          [rt, b.value]
        ]),
        o("button", {
          class: "action-btn create",
          onClick: v,
          disabled: !b.value.trim()
        }, " Create ", 8, ko),
        o("button", {
          class: "action-btn cancel",
          onClick: x
        }, " Cancel ")
      ])) : d("", !0),
      e.branches.length === 0 ? (t(), a("div", _o, " No branches found ")) : (t(), a("div", xo, [
        (t(!0), a(P, null, Y(e.branches, (S) => (t(), a("div", {
          key: S.name,
          class: U(["branch-item", { current: S.is_current }])
        }, [
          o("span", $o, c(S.is_current ? "●" : "○"), 1),
          o("span", Co, c(S.name), 1),
          S.is_current ? (t(), a("span", Eo, "current")) : (t(), a("button", {
            key: 0,
            class: "switch-btn",
            onClick: (p) => g.$emit("switch", S.name)
          }, " Switch ", 8, So))
        ], 2))), 128))
      ]))
    ]));
  }
}), zo = /* @__PURE__ */ A(Io, [["__scopeId", "data-v-e2bd816d"]]), Lo = { class: "history-section" }, Mo = {
  key: 0,
  class: "empty"
}, Bo = {
  key: 1,
  class: "commit-list"
}, To = ["onClick"], Do = { class: "commit-hash" }, No = { class: "commit-message" }, Oo = { class: "commit-date" }, Ro = ["onClick"], Wo = /* @__PURE__ */ W({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(e) {
    return (r, s) => (t(), a("div", Lo, [
      s[2] || (s[2] = o("h3", { class: "view-title" }, "HISTORY", -1)),
      e.commits.length === 0 ? (t(), a("div", Mo, " No commits yet ")) : (t(), a("div", Bo, [
        (t(!0), a(P, null, Y(e.commits, (l) => {
          var b;
          return t(), a("div", {
            key: l.hash,
            class: "commit-item",
            onClick: (C) => r.$emit("select", l)
          }, [
            o("span", Do, c(l.short_hash || ((b = l.hash) == null ? void 0 : b.slice(0, 7))), 1),
            o("span", No, c(l.message), 1),
            o("span", Oo, c(l.date_relative || l.relative_date), 1),
            o("div", {
              class: "commit-actions",
              onClick: s[0] || (s[0] = be(() => {
              }, ["stop"]))
            }, [
              o("button", {
                class: "action-btn",
                onClick: (C) => r.$emit("checkout", l),
                title: "Checkout this commit"
              }, [...s[1] || (s[1] = [
                o("svg", {
                  width: "12",
                  height: "12",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  o("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" })
                ], -1)
              ])], 8, Ro)
            ])
          ], 8, To);
        }), 128))
      ]))
    ]));
  }
}), Ao = /* @__PURE__ */ A(Wo, [["__scopeId", "data-v-97388106"]]), He = [
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
], Vo = [
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
], Po = [
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
], Ce = [
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
  createEnvironment: async (e, r, s) => {
    await Q(1e3), console.log(`[MOCK] Creating environment: ${e} with backend ${r}`, s ? `cloned from ${s}` : "");
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
  installWorkflowDeps: async (e, r, s) => {
    await Q(2e3), console.log(`[MOCK] Installing deps for ${e}: nodes=${r}, models=${s}`);
  },
  setModelImportance: async (e, r, s) => {
    await Q(200), console.log(`[MOCK] Setting ${r} importance to ${s} in ${e}`);
  },
  // Model Management
  getEnvironmentModels: async () => (await Q(350), qe),
  getWorkspaceModels: async () => (await Q(400), Vo),
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
  getEnvironmentLogs: async (e, r) => (await Q(250), (e ? Ce.filter((l) => l.level === e) : Ce).slice(0, r || 100)),
  getWorkspaceLogs: async (e, r) => {
    await Q(300);
    const s = [...Ce, ...Ce.map((b) => ({
      ...b,
      context: { ...b.context, environment: "testing" }
    }))];
    return (e ? s.filter((b) => b.level === e) : s).slice(0, r || 100);
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
  getCommitHistory: async (e = 10) => (await Q(300), Po.slice(0, e)),
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
function fe() {
  const e = E(!1), r = E(null);
  async function s(z, q) {
    var we;
    if (!((we = window.app) != null && we.api))
      throw new Error("ComfyUI API not available");
    const se = await window.app.api.fetchApi(z, q);
    if (!se.ok) {
      const $e = await se.json().catch(() => ({}));
      throw new Error($e.error || $e.message || `Request failed: ${se.status}`);
    }
    return se.json();
  }
  async function l() {
    return J.getStatus();
  }
  async function b(z, q = !1) {
    return s("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: z, allow_issues: q })
    });
  }
  async function C(z = 10, q = 0) {
    {
      const se = await J.getCommitHistory(z);
      return {
        commits: se,
        total: se.length,
        offset: q
      };
    }
  }
  async function v(z) {
    return s("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: z })
    });
  }
  async function x() {
    return J.getBranches();
  }
  async function g(z) {
    return s(`/v2/comfygit/commit/${z}`);
  }
  async function y(z, q = !1) {
    return s("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: z, force: q })
    });
  }
  async function S(z, q = "HEAD") {
    return s("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: z, start_point: q })
    });
  }
  async function p(z, q = !1) {
    return s("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: z, force: q })
    });
  }
  async function O() {
    return J.getEnvironments();
  }
  async function H(z) {
    return J.switchEnvironment(z);
  }
  async function ee() {
    return null;
  }
  async function K(z, q, se) {
    return await J.createEnvironment(z, q, se), { status: "success" };
  }
  async function M(z) {
    return await J.deleteEnvironment(z), { status: "success" };
  }
  async function N() {
    return J.getWorkflows();
  }
  async function Z(z) {
    return J.getWorkflowDetails(z);
  }
  async function te(z) {
    return J.resolveWorkflow(z);
  }
  async function D(z, q, se) {
    return await J.installWorkflowDeps(z, q, se), { status: "success" };
  }
  async function B(z, q, se) {
    return J.setModelImportance(z, q, se);
  }
  async function h() {
    return J.getEnvironmentModels();
  }
  async function f() {
    return J.getWorkspaceModels();
  }
  async function u(z, q) {
    return J.updateModelSource(z, q);
  }
  async function k(z) {
    return J.deleteModel(z);
  }
  async function $(z) {
    return await J.downloadModel(z), { status: "success" };
  }
  async function le() {
    return J.getConfig();
  }
  async function T(z) {
    return J.updateConfig(z);
  }
  async function I(z, q) {
    return J.getEnvironmentLogs(z, q);
  }
  async function F(z, q) {
    return J.getWorkspaceLogs(z, q);
  }
  return {
    isLoading: e,
    error: r,
    getStatus: l,
    commit: b,
    getHistory: C,
    exportEnv: v,
    // Git Operations
    getBranches: x,
    getCommitDetail: g,
    checkout: y,
    createBranch: S,
    switchBranch: p,
    // Environment Management
    getEnvironments: O,
    switchEnvironment: H,
    getSwitchProgress: ee,
    createEnvironment: K,
    deleteEnvironment: M,
    // Workflow Management
    getWorkflows: N,
    getWorkflowDetails: Z,
    resolveWorkflow: te,
    installWorkflowDeps: D,
    setModelImportance: B,
    // Model Management
    getEnvironmentModels: h,
    getWorkspaceModels: f,
    updateModelSource: u,
    deleteModel: k,
    downloadModel: $,
    // Settings
    getConfig: le,
    updateConfig: T,
    // Debug/Logs
    getEnvironmentLogs: I,
    getWorkspaceLogs: F
  };
}
const Ho = { class: "base-modal-header" }, Go = {
  key: 0,
  class: "base-modal-title"
}, Fo = { class: "base-modal-body" }, Ko = {
  key: 0,
  class: "base-modal-loading"
}, jo = {
  key: 1,
  class: "base-modal-error"
}, qo = {
  key: 0,
  class: "base-modal-footer"
}, Yo = /* @__PURE__ */ W({
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
    const s = e, l = r;
    function b() {
      s.closeOnOverlayClick && l("close");
    }
    function C(v) {
      v.key === "Escape" && l("close");
    }
    return me(() => {
      document.addEventListener("keydown", C), document.body.style.overflow = "hidden";
    }), it(() => {
      document.removeEventListener("keydown", C), document.body.style.overflow = "";
    }), (v, x) => (t(), w(Ge, { to: "body" }, [
      o("div", {
        class: "base-modal-overlay",
        onClick: b
      }, [
        o("div", {
          class: U(["base-modal-content", e.size]),
          onClick: x[1] || (x[1] = be(() => {
          }, ["stop"]))
        }, [
          o("div", Ho, [
            j(v.$slots, "header", {}, () => [
              e.title ? (t(), a("h3", Go, c(e.title), 1)) : d("", !0)
            ], !0),
            e.showCloseButton ? (t(), a("button", {
              key: 0,
              class: "base-modal-close",
              onClick: x[0] || (x[0] = (g) => v.$emit("close"))
            }, [...x[2] || (x[2] = [
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
          o("div", Fo, [
            e.loading ? (t(), a("div", Ko, "Loading...")) : e.error ? (t(), a("div", jo, c(e.error), 1)) : j(v.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          v.$slots.footer ? (t(), a("div", qo, [
            j(v.$slots, "footer", {}, void 0, !0)
          ])) : d("", !0)
        ], 2)
      ])
    ]));
  }
}), Le = /* @__PURE__ */ A(Yo, [["__scopeId", "data-v-700d367b"]]), Zo = ["type", "disabled"], Xo = {
  key: 0,
  class: "spinner"
}, Jo = /* @__PURE__ */ W({
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
    return (r, s) => (t(), a("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: U(["base-btn", e.variant, e.size, { "full-width": e.fullWidth, loading: e.loading }]),
      onClick: s[0] || (s[0] = (l) => r.$emit("click", l))
    }, [
      e.loading ? (t(), a("span", Xo)) : d("", !0),
      j(r.$slots, "default", {}, void 0, !0)
    ], 10, Zo));
  }
}), ne = /* @__PURE__ */ A(Jo, [["__scopeId", "data-v-f3452606"]]), Qo = {
  key: 0,
  class: "base-title-count"
}, ea = /* @__PURE__ */ W({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (r, s) => (t(), w(Oe(`h${e.level}`), {
      class: U(["base-title", e.variant])
    }, {
      default: n(() => [
        j(r.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (t(), a("span", Qo, "(" + c(e.count) + ")", 1)) : d("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), he = /* @__PURE__ */ A(ea, [["__scopeId", "data-v-5a01561d"]]), ta = ["value", "disabled"], oa = {
  key: 0,
  value: "",
  disabled: ""
}, aa = ["value"], sa = {
  key: 0,
  class: "base-select-error"
}, na = /* @__PURE__ */ W({
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
    function s(l) {
      return typeof l == "string" ? l : l.label;
    }
    return (l, b) => (t(), a("div", {
      class: U(["base-select-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      o("select", {
        value: e.modelValue,
        disabled: e.disabled,
        class: U(["base-select", { error: !!e.error }]),
        onChange: b[0] || (b[0] = (C) => l.$emit("update:modelValue", C.target.value))
      }, [
        e.placeholder ? (t(), a("option", oa, c(e.placeholder), 1)) : d("", !0),
        (t(!0), a(P, null, Y(e.options, (C) => (t(), a("option", {
          key: r(C),
          value: r(C)
        }, c(s(C)), 9, aa))), 128))
      ], 42, ta),
      e.error ? (t(), a("span", sa, c(e.error), 1)) : d("", !0)
    ], 2));
  }
}), la = /* @__PURE__ */ A(na, [["__scopeId", "data-v-7436d745"]]), ra = { class: "detail-section" }, ia = {
  key: 0,
  class: "empty-message"
}, ca = { class: "model-header" }, da = { class: "model-name" }, ua = { class: "model-details" }, ma = { class: "model-row" }, ga = { class: "model-row" }, ha = {
  key: 0,
  class: "model-row"
}, fa = { class: "value" }, va = {
  key: 1,
  class: "model-row"
}, pa = { class: "value" }, ya = {
  key: 0,
  class: "model-actions"
}, ba = { class: "detail-section" }, wa = {
  key: 0,
  class: "empty-message"
}, ka = { class: "node-name" }, _a = {
  key: 0,
  class: "node-version"
}, xa = /* @__PURE__ */ W({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve"],
  setup(e, { emit: r }) {
    const s = e, l = r, { getWorkflowDetails: b, setModelImportance: C } = fe(), v = E(null), x = E(!1), g = E(null), y = E(!1), S = E({}), p = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    async function O() {
      x.value = !0, g.value = null;
      try {
        v.value = await b(s.workflowName);
      } catch (K) {
        g.value = K instanceof Error ? K.message : "Failed to load workflow details";
      } finally {
        x.value = !1;
      }
    }
    function H(K, M) {
      S.value[K] = M, y.value = !0;
    }
    async function ee() {
      if (!y.value) {
        l("close");
        return;
      }
      x.value = !0, g.value = null;
      try {
        for (const [K, M] of Object.entries(S.value))
          await C(s.workflowName, K, M);
        l("close");
      } catch (K) {
        g.value = K instanceof Error ? K.message : "Failed to save changes";
      } finally {
        x.value = !1;
      }
    }
    return me(O), (K, M) => (t(), w(Le, {
      title: `WORKFLOW DETAILS: ${e.workflowName}`,
      size: "lg",
      loading: x.value,
      error: g.value || void 0,
      onClose: M[2] || (M[2] = (N) => l("close"))
    }, {
      body: n(() => [
        v.value ? (t(), a(P, { key: 0 }, [
          o("section", ra, [
            _(he, { variant: "section" }, {
              default: n(() => [
                m("MODELS USED (" + c(v.value.models.length) + ")", 1)
              ]),
              _: 1
            }),
            v.value.models.length === 0 ? (t(), a("div", ia, " No models used in this workflow ")) : d("", !0),
            (t(!0), a(P, null, Y(v.value.models, (N) => (t(), a("div", {
              key: N.hash,
              class: "model-card"
            }, [
              o("div", ca, [
                M[3] || (M[3] = o("span", { class: "model-icon" }, "📦", -1)),
                o("span", da, c(N.filename), 1)
              ]),
              o("div", ua, [
                o("div", ma, [
                  M[4] || (M[4] = o("span", { class: "label" }, "Status:", -1)),
                  o("span", {
                    class: U(["value", N.status === "available" ? "success" : "error"])
                  }, c(N.status === "available" ? "✓ Available" : "⚠ Missing"), 3)
                ]),
                o("div", ga, [
                  M[5] || (M[5] = o("span", { class: "label" }, "Importance:", -1)),
                  _(la, {
                    "model-value": S.value[N.hash] || N.importance,
                    options: p,
                    "onUpdate:modelValue": (Z) => H(N.hash, Z)
                  }, null, 8, ["model-value", "onUpdate:modelValue"])
                ]),
                N.node_type ? (t(), a("div", ha, [
                  M[6] || (M[6] = o("span", { class: "label" }, "Used in:", -1)),
                  o("span", fa, c(N.node_type) + " (Node " + c(N.node_id) + ")", 1)
                ])) : d("", !0),
                N.size_mb ? (t(), a("div", va, [
                  M[7] || (M[7] = o("span", { class: "label" }, "Size:", -1)),
                  o("span", pa, c(N.size_mb) + " MB", 1)
                ])) : d("", !0)
              ]),
              N.status === "missing" ? (t(), a("div", ya, [
                _(ne, {
                  variant: "secondary",
                  size: "sm",
                  onClick: M[0] || (M[0] = (Z) => l("resolve"))
                }, {
                  default: n(() => [...M[8] || (M[8] = [
                    m(" Resolve ", -1)
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
                m(" — Must have for workflow to run")
              ]),
              o("li", null, [
                o("strong", null, "Flexible"),
                m(" — Workflow adapts if missing")
              ]),
              o("li", null, [
                o("strong", null, "Optional"),
                m(" — Nice to have, can be skipped")
              ])
            ])
          ], -1)),
          o("section", ba, [
            _(he, { variant: "section" }, {
              default: n(() => [
                m("NODES USED (" + c(v.value.nodes.length) + ")", 1)
              ]),
              _: 1
            }),
            v.value.nodes.length === 0 ? (t(), a("div", wa, " No custom nodes used in this workflow ")) : d("", !0),
            (t(!0), a(P, null, Y(v.value.nodes, (N) => (t(), a("div", {
              key: N.name,
              class: "node-item"
            }, [
              o("span", {
                class: U(["node-status", N.installed ? "installed" : "missing"])
              }, c(N.installed ? "✓" : "✕"), 3),
              o("span", ka, c(N.name), 1),
              N.version ? (t(), a("span", _a, "v" + c(N.version), 1)) : d("", !0)
            ]))), 128))
          ])
        ], 64)) : d("", !0)
      ]),
      footer: n(() => [
        _(ne, {
          variant: "secondary",
          onClick: M[1] || (M[1] = (N) => l("close"))
        }, {
          default: n(() => [...M[10] || (M[10] = [
            m(" Close ", -1)
          ])]),
          _: 1
        }),
        y.value ? (t(), w(ne, {
          key: 0,
          variant: "primary",
          onClick: ee
        }, {
          default: n(() => [...M[11] || (M[11] = [
            m(" Save Changes ", -1)
          ])]),
          _: 1
        })) : d("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), $a = /* @__PURE__ */ A(xa, [["__scopeId", "data-v-6ce9a41c"]]), Ca = {
  key: 0,
  class: "resolve-section"
}, Sa = { class: "resolve-card success-card" }, Ea = { class: "items-list" }, Ia = { class: "item-info" }, za = { class: "item-name" }, La = {
  key: 0,
  class: "item-meta"
}, Ma = { class: "match-type" }, Ba = { class: "source" }, Ta = {
  key: 1,
  class: "resolve-section"
}, Da = { class: "resolve-card warning-card" }, Na = { class: "items-list" }, Oa = { class: "item-info" }, Ra = { class: "item-name" }, Wa = { class: "item-meta" }, Aa = { key: 0 }, Ua = { key: 1 }, Va = {
  key: 0,
  class: "item-warning"
}, Pa = {
  key: 0,
  class: "item-action"
}, Ha = ["onClick"], Ga = {
  key: 2,
  class: "resolve-section"
}, Fa = { class: "info-text" }, Ka = { class: "actions-summary" }, ja = { class: "summary-list" }, qa = { key: 0 }, Ya = { key: 1 }, Za = { key: 2 }, Xa = {
  key: 0,
  class: "estimated-size"
}, Ja = /* @__PURE__ */ W({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh"],
  setup(e, { emit: r }) {
    const s = e, l = r, { resolveWorkflow: b, installWorkflowDeps: C } = fe(), v = E(null), x = E(!1), g = E(!1), y = E(null), S = V(() => {
      var B;
      return v.value ? ((B = v.value.download_results) == null ? void 0 : B.every((h) => h.can_download)) ?? !1 : !1;
    });
    async function p() {
      x.value = !0, y.value = null;
      try {
        v.value = await b(s.workflowName);
      } catch (B) {
        y.value = B instanceof Error ? B.message : "Failed to analyze workflow";
      } finally {
        x.value = !1;
      }
    }
    function O(B) {
      return !B.possible_matches || B.possible_matches.length === 0 ? null : B.possible_matches.reduce(
        (h, f) => f.match_confidence > h.match_confidence ? f : h
      );
    }
    function H(B) {
      return B >= 0.9 ? "high" : B >= 0.7 ? "medium" : "low";
    }
    function ee(B) {
      const h = O(B);
      return h ? h.package_id.startsWith("http") ? "GitHub" : "ComfyUI Registry" : "Unknown";
    }
    function K(B) {
      var h, f;
      return (f = (h = v.value) == null ? void 0 : h.download_results) == null ? void 0 : f.find((u) => u.model === B);
    }
    function M(B) {
      const h = K(B);
      return (h == null ? void 0 : h.can_download) ?? !1;
    }
    function N(B) {
      const h = K(B);
      return (h == null ? void 0 : h.source_url) || null;
    }
    function Z(B) {
      window.open(B, "_blank");
    }
    async function te() {
      if (!(!v.value || g.value)) {
        g.value = !0, y.value = null;
        try {
          await C(
            s.workflowName,
            v.value.nodes_to_install,
            []
          ), l("install"), l("refresh"), l("close");
        } catch (B) {
          y.value = B instanceof Error ? B.message : "Installation failed";
        } finally {
          g.value = !1;
        }
      }
    }
    async function D() {
      if (!(!v.value || g.value)) {
        g.value = !0, y.value = null;
        try {
          await C(
            s.workflowName,
            v.value.nodes_to_install,
            v.value.models_to_download
          ), l("install"), l("refresh"), l("close");
        } catch (B) {
          y.value = B instanceof Error ? B.message : "Installation failed";
        } finally {
          g.value = !1;
        }
      }
    }
    return me(p), (B, h) => (t(), w(Le, {
      title: `RESOLVE DEPENDENCIES: ${e.workflowName}`,
      size: "lg",
      loading: x.value,
      error: y.value || void 0,
      onClose: h[1] || (h[1] = (f) => l("close"))
    }, {
      body: n(() => [
        v.value ? (t(), a(P, { key: 0 }, [
          h[5] || (h[5] = o("div", { class: "intro-message" }, " This workflow needs the following to work: ", -1)),
          v.value.nodes_unresolved.length > 0 ? (t(), a("section", Ca, [
            _(he, { variant: "section" }, {
              default: n(() => [
                m("NODES (" + c(v.value.nodes_unresolved.length) + ")", 1)
              ]),
              _: 1
            }),
            o("div", Sa, [
              h[2] || (h[2] = o("div", { class: "card-header" }, [
                o("span", { class: "status-icon" }, "✓"),
                o("span", { class: "card-title" }, "Can install automatically")
              ], -1)),
              o("div", Ea, [
                (t(!0), a(P, null, Y(v.value.nodes_unresolved, (f) => {
                  var u;
                  return t(), a("div", {
                    key: f.node_type,
                    class: "item"
                  }, [
                    o("div", Ia, [
                      o("div", za, c(((u = O(f)) == null ? void 0 : u.package_id) || f.node_type), 1),
                      O(f) ? (t(), a("div", La, [
                        o("span", {
                          class: U(["confidence-badge", H(O(f).match_confidence)])
                        }, c(Math.round(O(f).match_confidence * 100)) + "% match ", 3),
                        o("span", Ma, c(O(f).match_type), 1),
                        o("span", Ba, "Source: " + c(ee(f)), 1)
                      ])) : d("", !0)
                    ])
                  ]);
                }), 128))
              ])
            ])
          ])) : d("", !0),
          v.value.models_unresolved.length > 0 ? (t(), a("section", Ta, [
            _(he, { variant: "section" }, {
              default: n(() => [
                m("MODELS (" + c(v.value.models_unresolved.length) + ")", 1)
              ]),
              _: 1
            }),
            o("div", Da, [
              h[3] || (h[3] = o("div", { class: "card-header" }, [
                o("span", { class: "status-icon" }, "⚠"),
                o("span", { class: "card-title" }, "Manual download required")
              ], -1)),
              o("div", Na, [
                (t(!0), a(P, null, Y(v.value.models_unresolved, (f) => (t(), a("div", {
                  key: f.filename,
                  class: "item"
                }, [
                  o("div", Oa, [
                    o("div", Ra, c(f.filename), 1),
                    o("div", Wa, [
                      f.expected_category ? (t(), a("span", Aa, "Type: " + c(f.expected_category), 1)) : d("", !0),
                      K(f.filename) ? (t(), a("span", Ua, " Size: ~" + c(K(f.filename).estimated_size_mb) + " MB ", 1)) : d("", !0)
                    ]),
                    M(f.filename) ? d("", !0) : (t(), a("div", Va, " No auto-download source configured "))
                  ]),
                  N(f.filename) ? (t(), a("div", Pa, [
                    o("button", {
                      class: "link-btn",
                      onClick: (u) => Z(N(f.filename))
                    }, " Open Source ↗ ", 8, Ha)
                  ])) : d("", !0)
                ]))), 128))
              ])
            ])
          ])) : d("", !0),
          v.value.nodes_resolved.length > 0 || v.value.models_resolved.length > 0 ? (t(), a("section", Ga, [
            _(he, { variant: "section" }, {
              default: n(() => [
                m(" ALREADY AVAILABLE (" + c(v.value.nodes_resolved.length + v.value.models_resolved.length) + ") ", 1)
              ]),
              _: 1
            }),
            o("div", Fa, c(v.value.nodes_resolved.length) + " nodes and " + c(v.value.models_resolved.length) + " models are already installed ", 1)
          ])) : d("", !0),
          o("div", Ka, [
            h[4] || (h[4] = o("div", { class: "summary-title" }, "This will:", -1)),
            o("ol", ja, [
              v.value.nodes_to_install.length ? (t(), a("li", qa, " Install " + c(v.value.nodes_to_install.length) + " nodes (~" + c(v.value.estimated_time_seconds) + "s) ", 1)) : d("", !0),
              v.value.nodes_to_install.length ? (t(), a("li", Ya, " Restart ComfyUI to load new nodes ")) : d("", !0),
              v.value.models_to_download.length ? (t(), a("li", Za, " You'll still need to download " + c(v.value.models_to_download.length) + " model(s) manually ", 1)) : d("", !0)
            ]),
            v.value.estimated_size_mb ? (t(), a("div", Xa, " Estimated download: " + c(v.value.estimated_size_mb) + " MB ", 1)) : d("", !0)
          ])
        ], 64)) : d("", !0)
      ]),
      footer: n(() => [
        _(ne, {
          variant: "secondary",
          onClick: h[0] || (h[0] = (f) => l("close"))
        }, {
          default: n(() => [...h[6] || (h[6] = [
            m(" Cancel ", -1)
          ])]),
          _: 1
        }),
        v.value && v.value.nodes_to_install.length && v.value.models_to_download.length ? (t(), w(ne, {
          key: 0,
          variant: "secondary",
          disabled: g.value,
          loading: g.value,
          onClick: te
        }, {
          default: n(() => [...h[7] || (h[7] = [
            m(" Install Nodes Only ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : d("", !0),
        v.value && (v.value.nodes_to_install.length || v.value.models_to_download.length) ? (t(), w(ne, {
          key: 1,
          variant: "primary",
          disabled: g.value || v.value.models_to_download.length > 0 && !S.value,
          loading: g.value,
          onClick: D
        }, {
          default: n(() => [...h[8] || (h[8] = [
            m(" Install All ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : d("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Qa = /* @__PURE__ */ A(Ja, [["__scopeId", "data-v-d68efb14"]]), es = { class: "search-input-wrapper" }, ts = ["value", "placeholder"], os = /* @__PURE__ */ W({
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
    const s = e, l = r, b = E(null);
    let C;
    function v(g) {
      const y = g.target.value;
      s.debounce > 0 ? (clearTimeout(C), C = window.setTimeout(() => {
        l("update:modelValue", y);
      }, s.debounce)) : l("update:modelValue", y);
    }
    function x() {
      var g;
      l("update:modelValue", ""), l("clear"), (g = b.value) == null || g.focus();
    }
    return me(() => {
      s.autoFocus && b.value && b.value.focus();
    }), (g, y) => (t(), a("div", es, [
      o("input", {
        ref_key: "inputRef",
        ref: b,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: v,
        onKeyup: xe(x, ["escape"])
      }, null, 40, ts),
      e.clearable && e.modelValue ? (t(), a("button", {
        key: 0,
        class: "clear-button",
        onClick: x,
        title: "Clear search"
      }, " ✕ ")) : d("", !0)
    ]));
  }
}), as = /* @__PURE__ */ A(os, [["__scopeId", "data-v-266f857a"]]), ss = { class: "search-bar" }, ns = /* @__PURE__ */ W({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (r, s) => (t(), a("div", ss, [
      _(as, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": s[0] || (s[0] = (l) => r.$emit("update:modelValue", l)),
        onClear: s[1] || (s[1] = (l) => r.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), Re = /* @__PURE__ */ A(ns, [["__scopeId", "data-v-3d51bbfd"]]), ls = { class: "section-group" }, rs = {
  key: 0,
  class: "section-content"
}, is = /* @__PURE__ */ W({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(e, { emit: r }) {
    const s = e, l = r, b = E(s.initiallyExpanded);
    function C() {
      s.collapsible && (b.value = !b.value, l("toggle", b.value));
    }
    return (v, x) => (t(), a("section", ls, [
      _(De, {
        count: e.count,
        clickable: e.collapsible,
        expanded: b.value,
        onClick: C
      }, {
        default: n(() => [
          m(c(e.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !e.collapsible || b.value ? (t(), a("div", rs, [
        j(v.$slots, "default", {}, void 0, !0)
      ])) : d("", !0)
    ]));
  }
}), ce = /* @__PURE__ */ A(is, [["__scopeId", "data-v-c48e33ed"]]), cs = { class: "item-header" }, ds = {
  key: 0,
  class: "item-icon"
}, us = { class: "item-info" }, ms = {
  key: 0,
  class: "item-title"
}, gs = {
  key: 1,
  class: "item-subtitle"
}, hs = {
  key: 0,
  class: "item-details"
}, fs = {
  key: 1,
  class: "item-actions"
}, vs = /* @__PURE__ */ W({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: r }) {
    const s = e, l = V(() => s.status ? `status-${s.status}` : "");
    return (b, C) => (t(), a("div", {
      class: U(["item-card", { clickable: e.clickable, compact: e.compact }, l.value]),
      onClick: C[0] || (C[0] = (v) => e.clickable && b.$emit("click"))
    }, [
      o("div", cs, [
        b.$slots.icon ? (t(), a("span", ds, [
          j(b.$slots, "icon", {}, void 0, !0)
        ])) : d("", !0),
        o("div", us, [
          b.$slots.title ? (t(), a("div", ms, [
            j(b.$slots, "title", {}, void 0, !0)
          ])) : d("", !0),
          b.$slots.subtitle ? (t(), a("div", gs, [
            j(b.$slots, "subtitle", {}, void 0, !0)
          ])) : d("", !0)
        ])
      ]),
      b.$slots.details ? (t(), a("div", hs, [
        j(b.$slots, "details", {}, void 0, !0)
      ])) : d("", !0),
      b.$slots.actions ? (t(), a("div", fs, [
        j(b.$slots, "actions", {}, void 0, !0)
      ])) : d("", !0)
    ], 2));
  }
}), de = /* @__PURE__ */ A(vs, [["__scopeId", "data-v-cc435e0e"]]), ps = { class: "loading-state" }, ys = { class: "loading-message" }, bs = /* @__PURE__ */ W({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (r, s) => (t(), a("div", ps, [
      s[0] || (s[0] = o("div", { class: "spinner" }, null, -1)),
      o("p", ys, c(e.message), 1)
    ]));
  }
}), We = /* @__PURE__ */ A(bs, [["__scopeId", "data-v-ad8436c9"]]), ws = { class: "error-state" }, ks = { class: "error-message" }, _s = /* @__PURE__ */ W({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (r, s) => (t(), a("div", ws, [
      s[2] || (s[2] = o("span", { class: "error-icon" }, "⚠", -1)),
      o("p", ks, c(e.message), 1),
      e.retry ? (t(), w(G, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: s[0] || (s[0] = (l) => r.$emit("retry"))
      }, {
        default: n(() => [...s[1] || (s[1] = [
          m(" Retry ", -1)
        ])]),
        _: 1
      })) : d("", !0)
    ]));
  }
}), Ae = /* @__PURE__ */ A(_s, [["__scopeId", "data-v-5397be48"]]), xs = /* @__PURE__ */ W({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { emit: r }) {
    const s = r, { getWorkflows: l } = fe(), b = E([]), C = E(!1), v = E(null), x = E(""), g = E(!1), y = E(!1), S = E(!1), p = E(!1), O = E(null), H = V(
      () => b.value.filter((T) => T.status === "broken")
    ), ee = V(
      () => b.value.filter((T) => T.status === "new")
    ), K = V(
      () => b.value.filter((T) => T.status === "modified")
    ), M = V(
      () => b.value.filter((T) => T.status === "synced")
    ), N = V(() => {
      if (!x.value.trim()) return b.value;
      const T = x.value.toLowerCase();
      return b.value.filter((I) => I.name.toLowerCase().includes(T));
    }), Z = V(
      () => H.value.filter(
        (T) => !x.value.trim() || T.name.toLowerCase().includes(x.value.toLowerCase())
      )
    ), te = V(
      () => ee.value.filter(
        (T) => !x.value.trim() || T.name.toLowerCase().includes(x.value.toLowerCase())
      )
    ), D = V(
      () => K.value.filter(
        (T) => !x.value.trim() || T.name.toLowerCase().includes(x.value.toLowerCase())
      )
    ), B = V(
      () => M.value.filter(
        (T) => !x.value.trim() || T.name.toLowerCase().includes(x.value.toLowerCase())
      )
    ), h = V(
      () => y.value ? B.value : B.value.slice(0, 5)
    );
    async function f() {
      C.value = !0, v.value = null;
      try {
        b.value = await l();
      } catch (T) {
        v.value = T instanceof Error ? T.message : "Failed to load workflows";
      } finally {
        C.value = !1;
      }
    }
    function u(T) {
      O.value = T, S.value = !0;
    }
    function k(T) {
      O.value = T, p.value = !0;
    }
    function $() {
      alert("Bulk resolution not yet implemented");
    }
    function le() {
      s("refresh");
    }
    return me(f), (T, I) => (t(), a(P, null, [
      _(Ee, null, {
        header: n(() => [
          _(Ie, { title: "WORKFLOWS" }, {
            actions: n(() => [
              H.value.length > 0 ? (t(), w(G, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: $
              }, {
                default: n(() => [...I[7] || (I[7] = [
                  m(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : d("", !0)
            ]),
            _: 1
          })
        ]),
        search: n(() => [
          _(Re, {
            modelValue: x.value,
            "onUpdate:modelValue": I[0] || (I[0] = (F) => x.value = F),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: n(() => [
          C.value ? (t(), w(We, {
            key: 0,
            message: "Loading workflows..."
          })) : v.value ? (t(), w(Ae, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: f
          }, null, 8, ["message"])) : (t(), a(P, { key: 2 }, [
            Z.value.length ? (t(), w(ce, {
              key: 0,
              title: "BROKEN",
              count: Z.value.length
            }, {
              default: n(() => [
                (t(!0), a(P, null, Y(Z.value, (F) => (t(), w(de, {
                  key: F.name,
                  status: "broken"
                }, {
                  icon: n(() => [...I[8] || (I[8] = [
                    m("⚠", -1)
                  ])]),
                  title: n(() => [
                    m(c(F.name), 1)
                  ]),
                  subtitle: n(() => [
                    m(" Missing: " + c(F.missing_nodes) + " nodes, " + c(F.missing_models) + " models ", 1)
                  ]),
                  actions: n(() => [
                    _(G, {
                      variant: "primary",
                      size: "sm",
                      onClick: (z) => k(F.name)
                    }, {
                      default: n(() => [...I[9] || (I[9] = [
                        m(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    _(G, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (z) => u(F.name)
                    }, {
                      default: n(() => [...I[10] || (I[10] = [
                        m(" Details ▸ ", -1)
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
                (t(!0), a(P, null, Y(te.value, (F) => (t(), w(de, {
                  key: F.name,
                  status: "new"
                }, {
                  icon: n(() => [...I[11] || (I[11] = [
                    m("●", -1)
                  ])]),
                  title: n(() => [
                    m(c(F.name), 1)
                  ]),
                  subtitle: n(() => [...I[12] || (I[12] = [
                    m("✓ Ready", -1)
                  ])]),
                  actions: n(() => [
                    _(G, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (z) => u(F.name)
                    }, {
                      default: n(() => [...I[13] || (I[13] = [
                        m(" Details ", -1)
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
              title: "MODIFIED",
              count: D.value.length
            }, {
              default: n(() => [
                (t(!0), a(P, null, Y(D.value, (F) => (t(), w(de, {
                  key: F.name,
                  status: "modified"
                }, {
                  icon: n(() => [...I[14] || (I[14] = [
                    m("⚡", -1)
                  ])]),
                  title: n(() => [
                    m(c(F.name), 1)
                  ]),
                  subtitle: n(() => [...I[15] || (I[15] = [
                    m("✓ Ready", -1)
                  ])]),
                  actions: n(() => [
                    _(G, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (z) => u(F.name)
                    }, {
                      default: n(() => [...I[16] || (I[16] = [
                        m(" Details ", -1)
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
              "initially-expanded": g.value,
              onToggle: I[2] || (I[2] = (F) => g.value = F)
            }, {
              default: n(() => [
                (t(!0), a(P, null, Y(h.value, (F) => (t(), w(de, {
                  key: F.name,
                  status: "synced"
                }, {
                  icon: n(() => [...I[17] || (I[17] = [
                    m("✓", -1)
                  ])]),
                  title: n(() => [
                    m(c(F.name), 1)
                  ]),
                  subtitle: n(() => [...I[18] || (I[18] = [
                    m("✓ Ready", -1)
                  ])]),
                  actions: n(() => [
                    _(G, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (z) => u(F.name)
                    }, {
                      default: n(() => [...I[19] || (I[19] = [
                        m(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128)),
                !y.value && B.value.length > 5 ? (t(), w(G, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: I[1] || (I[1] = (F) => y.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: n(() => [
                    m(" View all " + c(B.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : d("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : d("", !0),
            N.value.length ? d("", !0) : (t(), w(ze, {
              key: 4,
              icon: "📭",
              message: x.value ? `No workflows match '${x.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      S.value && O.value ? (t(), w($a, {
        key: 0,
        "workflow-name": O.value,
        onClose: I[3] || (I[3] = (F) => S.value = !1),
        onResolve: I[4] || (I[4] = (F) => k(O.value))
      }, null, 8, ["workflow-name"])) : d("", !0),
      p.value && O.value ? (t(), w(Qa, {
        key: 1,
        "workflow-name": O.value,
        onClose: I[5] || (I[5] = (F) => p.value = !1),
        onInstall: le,
        onRefresh: I[6] || (I[6] = (F) => s("refresh"))
      }, null, 8, ["workflow-name"])) : d("", !0)
    ], 64));
  }
}), $s = /* @__PURE__ */ A(xs, [["__scopeId", "data-v-2251d776"]]), Cs = /* @__PURE__ */ W({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (r, s) => (t(), a("span", {
      class: U(["detail-label"]),
      style: Fe({ minWidth: e.minWidth })
    }, [
      j(r.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), Ss = /* @__PURE__ */ A(Cs, [["__scopeId", "data-v-75e9eeb8"]]), Es = /* @__PURE__ */ W({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (r, s) => (t(), a("span", {
      class: U(["detail-value", e.variant, { mono: e.mono, truncate: e.truncate }])
    }, [
      j(r.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Is = /* @__PURE__ */ A(Es, [["__scopeId", "data-v-2f186e4c"]]), zs = { class: "detail-row" }, Ls = /* @__PURE__ */ W({
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
    return (r, s) => (t(), a("div", zs, [
      _(Ss, { "min-width": e.labelMinWidth }, {
        default: n(() => [
          m(c(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (t(), w(Is, {
        key: 0,
        mono: e.mono,
        variant: e.valueVariant,
        truncate: e.truncate
      }, {
        default: n(() => [
          m(c(e.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : j(r.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), oe = /* @__PURE__ */ A(Ls, [["__scopeId", "data-v-ef15664a"]]), Ms = /* @__PURE__ */ W({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(e) {
    return (r, s) => (t(), a("div", {
      class: U(["summary-bar", e.variant])
    }, [
      j(r.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Ye = /* @__PURE__ */ A(Ms, [["__scopeId", "data-v-ccb7816e"]]), Bs = { class: "popover-header" }, Ts = { class: "popover-title" }, Ds = { class: "popover-content" }, Ns = {
  key: 0,
  class: "popover-actions"
}, Os = /* @__PURE__ */ W({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(e) {
    return (r, s) => (t(), w(Ge, { to: "body" }, [
      e.show ? (t(), a("div", {
        key: 0,
        class: "popover-overlay",
        onClick: s[2] || (s[2] = (l) => r.$emit("close"))
      }, [
        o("div", {
          class: "popover",
          style: Fe({ maxWidth: e.maxWidth }),
          onClick: s[1] || (s[1] = be(() => {
          }, ["stop"]))
        }, [
          o("div", Bs, [
            o("h4", Ts, c(e.title), 1),
            o("button", {
              class: "popover-close",
              onClick: s[0] || (s[0] = (l) => r.$emit("close"))
            }, "✕")
          ]),
          o("div", Ds, [
            j(r.$slots, "content", {}, void 0, !0)
          ]),
          r.$slots.actions ? (t(), a("div", Ns, [
            j(r.$slots, "actions", {}, void 0, !0)
          ])) : d("", !0)
        ], 4)
      ])) : d("", !0)
    ]));
  }
}), Ze = /* @__PURE__ */ A(Os, [["__scopeId", "data-v-057df510"]]), Rs = /* @__PURE__ */ W({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: r }) {
    const s = r, { getEnvironmentModels: l, getStatus: b } = fe(), C = E([]), v = E([]), x = E("production"), g = E(!1), y = E(null), S = E(""), p = E(!1);
    function O() {
      p.value = !1, s("navigate", "model-index");
    }
    const H = V(
      () => C.value.reduce((u, k) => u + (k.size_mb || k.size || 0), 0)
    ), ee = V(() => {
      if (!S.value.trim()) return C.value;
      const u = S.value.toLowerCase();
      return C.value.filter((k) => k.filename.toLowerCase().includes(u));
    }), K = V(() => {
      if (!S.value.trim()) return v.value;
      const u = S.value.toLowerCase();
      return v.value.filter((k) => k.filename.toLowerCase().includes(u));
    }), M = V(
      () => ee.value.filter((u) => u.type === "checkpoints" || u.category === "checkpoints")
    ), N = V(
      () => ee.value.filter((u) => u.type === "loras" || u.category === "loras")
    ), Z = V(
      () => ee.value.filter(
        (u) => u.type !== "checkpoints" && u.category !== "checkpoints" && u.type !== "loras" && u.category !== "loras"
      )
    );
    function te(u) {
      return u ? u >= 1024 ? `${(u / 1024).toFixed(1)} GB` : `${u.toFixed(0)} MB` : "Unknown";
    }
    function D(u) {
      s("navigate", "model-index");
    }
    function B(u) {
      s("navigate", "model-index");
    }
    function h(u) {
      alert(`Download functionality not yet implemented for ${u}`);
    }
    async function f() {
      g.value = !0, y.value = null;
      try {
        const u = await l();
        C.value = u, v.value = [];
        const k = await b();
        x.value = k.environment || "production";
      } catch (u) {
        y.value = u instanceof Error ? u.message : "Failed to load models";
      } finally {
        g.value = !1;
      }
    }
    return me(f), (u, k) => (t(), a(P, null, [
      _(Ee, null, {
        header: n(() => [
          _(Ie, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: k[0] || (k[0] = ($) => p.value = !0)
          })
        ]),
        search: n(() => [
          _(Re, {
            modelValue: S.value,
            "onUpdate:modelValue": k[1] || (k[1] = ($) => S.value = $),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: n(() => [
          g.value ? (t(), w(We, {
            key: 0,
            message: "Loading environment models..."
          })) : y.value ? (t(), w(Ae, {
            key: 1,
            message: y.value,
            retry: !0,
            onRetry: f
          }, null, 8, ["message"])) : (t(), a(P, { key: 2 }, [
            C.value.length ? (t(), w(Ye, {
              key: 0,
              variant: "compact"
            }, {
              default: n(() => [
                m(" Total: " + c(C.value.length) + " models • " + c(te(H.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : d("", !0),
            M.value.length ? (t(), w(ce, {
              key: 1,
              title: "CHECKPOINTS",
              count: M.value.length
            }, {
              default: n(() => [
                (t(!0), a(P, null, Y(M.value, ($) => (t(), w(de, {
                  key: $.sha256 || $.hash || $.filename,
                  status: "synced"
                }, {
                  icon: n(() => [...k[3] || (k[3] = [
                    m("📦", -1)
                  ])]),
                  title: n(() => [
                    m(c($.filename), 1)
                  ]),
                  subtitle: n(() => [
                    m(c(te($.size_mb || $.size)), 1)
                  ]),
                  details: n(() => [
                    _(oe, {
                      label: "Used by:",
                      value: ($.used_by || $.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    _(oe, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: n(() => [
                    _(G, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (le) => D($.sha256 || $.sha256_hash || $.hash || "")
                    }, {
                      default: n(() => [...k[4] || (k[4] = [
                        m(" View in Workspace Index ↗ ", -1)
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
              title: "LORAS",
              count: N.value.length
            }, {
              default: n(() => [
                (t(!0), a(P, null, Y(N.value, ($) => (t(), w(de, {
                  key: $.sha256 || $.hash || $.filename,
                  status: "synced"
                }, {
                  icon: n(() => [...k[5] || (k[5] = [
                    m("📦", -1)
                  ])]),
                  title: n(() => [
                    m(c($.filename), 1)
                  ]),
                  subtitle: n(() => [
                    m(c(te($.size_mb || $.size)), 1)
                  ]),
                  details: n(() => [
                    _(oe, {
                      label: "Used by:",
                      value: ($.used_by || $.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    _(oe, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: n(() => [
                    _(G, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (le) => D($.sha256 || $.sha256_hash || $.hash || "")
                    }, {
                      default: n(() => [...k[6] || (k[6] = [
                        m(" View in Workspace Index ↗ ", -1)
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
                (t(!0), a(P, null, Y(Z.value, ($) => (t(), w(de, {
                  key: $.sha256 || $.hash || $.filename,
                  status: "synced"
                }, {
                  icon: n(() => [...k[7] || (k[7] = [
                    m("📦", -1)
                  ])]),
                  title: n(() => [
                    m(c($.filename), 1)
                  ]),
                  subtitle: n(() => [
                    m(c(te($.size_mb || $.size)), 1)
                  ]),
                  details: n(() => [
                    _(oe, {
                      label: "Type:",
                      value: $.type
                    }, null, 8, ["value"]),
                    _(oe, {
                      label: "Used by:",
                      value: ($.used_by || $.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"])
                  ]),
                  actions: n(() => [
                    _(G, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (le) => D($.sha256 || $.sha256_hash || $.hash || "")
                    }, {
                      default: n(() => [...k[8] || (k[8] = [
                        m(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            K.value.length ? (t(), w(ce, {
              key: 4,
              title: "MISSING",
              count: K.value.length
            }, {
              default: n(() => [
                (t(!0), a(P, null, Y(K.value, ($) => (t(), w(de, {
                  key: $.filename,
                  status: "broken"
                }, {
                  icon: n(() => [...k[9] || (k[9] = [
                    m("⚠", -1)
                  ])]),
                  title: n(() => [
                    m(c($.filename), 1)
                  ]),
                  subtitle: n(() => [...k[10] || (k[10] = [
                    o("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: n(() => {
                    var le;
                    return [
                      _(oe, {
                        label: "Required by:",
                        value: ((le = $.workflow_names) == null ? void 0 : le.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: n(() => [
                    _(G, {
                      variant: "primary",
                      size: "sm",
                      onClick: (le) => h($.filename)
                    }, {
                      default: n(() => [...k[11] || (k[11] = [
                        m(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    _(G, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (le) => B($.filename)
                    }, {
                      default: n(() => [...k[12] || (k[12] = [
                        m(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            !ee.value.length && !K.value.length ? (t(), w(ze, {
              key: 5,
              icon: "📭",
              message: S.value ? `No models match '${S.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : d("", !0)
          ], 64))
        ]),
        _: 1
      }),
      _(Ze, {
        show: p.value,
        title: "About Environment Models",
        onClose: k[2] || (k[2] = ($) => p.value = !1)
      }, {
        content: n(() => [
          o("p", null, [
            k[13] || (k[13] = m(" These are models currently used by workflows in ", -1)),
            o("strong", null, '"' + c(x.value) + '"', 1),
            k[14] || (k[14] = m(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: n(() => [
          _(G, {
            variant: "primary",
            onClick: O
          }, {
            default: n(() => [...k[15] || (k[15] = [
              m(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Ws = /* @__PURE__ */ A(Rs, [["__scopeId", "data-v-865641a4"]]), As = /* @__PURE__ */ W({
  __name: "ModelIndexSection",
  setup(e) {
    const { getWorkspaceModels: r } = fe(), s = E([]), l = E(!1), b = E(null), C = E(""), v = E(!1), x = V(
      () => s.value.reduce((h, f) => h + (f.size_mb || f.size || 0), 0)
    ), g = V(() => {
      const h = /* @__PURE__ */ new Set();
      return s.value.forEach((f) => {
        f.used_in_environments && f.used_in_environments.length > 0 && f.used_in_environments.forEach((u) => h.add(u.env_name));
      }), h.size;
    }), y = V(() => {
      if (!C.value.trim()) return s.value;
      const h = C.value.toLowerCase();
      return s.value.filter((f) => {
        const u = f, k = f.sha256 || u.sha256_hash || "";
        return f.filename.toLowerCase().includes(h) || k.toLowerCase().includes(h);
      });
    }), S = V(
      () => y.value.filter((h) => h.type === "checkpoints")
    ), p = V(
      () => y.value.filter((h) => h.type === "loras")
    ), O = V(
      () => y.value.filter((h) => h.type !== "checkpoints" && h.type !== "loras")
    );
    function H(h) {
      return h ? h >= 1024 ? `${(h / 1024).toFixed(1)} GB` : `${h.toFixed(0)} MB` : "Unknown";
    }
    function ee(h) {
      const f = h, u = h.used_in_workflows || f.used_by || [];
      return !u || u.length === 0 ? "Not used" : `${u.length} workflow(s)`;
    }
    function K(h) {
      navigator.clipboard.writeText(h), alert("Hash copied to clipboard");
    }
    function M(h) {
      prompt("Enter model source URL:", h.source_url || "") !== null && alert("URL update not yet implemented");
    }
    function N(h) {
      const f = h, u = h.used_in_workflows || f.used_by || [], k = u && u.length > 0 ? `

⚠ WARNING: This model is used by ${u.length} workflow(s):
${u.join(", ")}

Deleting will break these workflows!` : "";
      confirm(
        `Delete ${h.filename}?${k}

This will free ${H(f.size_mb || h.size)} of space.`
      ) && alert("Model deletion not yet implemented");
    }
    function Z() {
      alert("Scan for models not yet implemented");
    }
    function te() {
      alert("Change directory not yet implemented");
    }
    function D() {
      alert("Download new model not yet implemented");
    }
    async function B() {
      l.value = !0, b.value = null;
      try {
        s.value = await r(), console.log("Loaded models:", s.value), console.log("Filtered checkpoints:", S.value), console.log("Filtered loras:", p.value), console.log("Filtered other:", O.value);
      } catch (h) {
        b.value = h instanceof Error ? h.message : "Failed to load workspace models";
      } finally {
        l.value = !1;
      }
    }
    return me(B), (h, f) => (t(), a(P, null, [
      _(Ee, null, {
        header: n(() => [
          _(Ie, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: f[0] || (f[0] = (u) => v.value = !0)
          }, {
            actions: n(() => [
              _(G, {
                variant: "primary",
                size: "sm",
                onClick: Z
              }, {
                default: n(() => [...f[3] || (f[3] = [
                  m(" Scan for Models ", -1)
                ])]),
                _: 1
              }),
              _(G, {
                variant: "primary",
                size: "sm",
                onClick: te
              }, {
                default: n(() => [...f[4] || (f[4] = [
                  m(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              _(G, {
                variant: "primary",
                size: "sm",
                onClick: D
              }, {
                default: n(() => [...f[5] || (f[5] = [
                  o("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    o("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    o("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  m(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: n(() => [
          _(Re, {
            modelValue: C.value,
            "onUpdate:modelValue": f[1] || (f[1] = (u) => C.value = u),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: n(() => [
          l.value ? (t(), w(We, {
            key: 0,
            message: "Loading workspace models..."
          })) : b.value ? (t(), w(Ae, {
            key: 1,
            message: b.value,
            retry: !0,
            onRetry: B
          }, null, 8, ["message"])) : (t(), a(P, { key: 2 }, [
            s.value.length ? (t(), w(Ye, {
              key: 0,
              variant: "compact"
            }, {
              default: n(() => [
                m(" Total: " + c(s.value.length) + " models • " + c(H(x.value)) + " • Used in " + c(g.value) + " environments ", 1)
              ]),
              _: 1
            })) : d("", !0),
            S.value.length ? (t(), w(ce, {
              key: 1,
              title: "CHECKPOINTS",
              count: S.value.length
            }, {
              default: n(() => [
                (t(!0), a(P, null, Y(S.value, (u) => (t(), w(de, {
                  key: u.sha256 || u.filename,
                  status: "synced"
                }, {
                  icon: n(() => [...f[6] || (f[6] = [
                    m("📦", -1)
                  ])]),
                  title: n(() => [
                    m(c(u.filename), 1)
                  ]),
                  subtitle: n(() => [
                    m(c(H(u.size_mb || u.size)), 1)
                  ]),
                  details: n(() => {
                    var k, $;
                    return [
                      u.sha256 || u.sha256_hash ? (t(), w(oe, {
                        key: 0,
                        label: "SHA256:",
                        value: (u.sha256 || u.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : d("", !0),
                      _(oe, {
                        label: "Used in:",
                        value: ee(u)
                      }, null, 8, ["value"]),
                      u.source_url || (k = u.sources) != null && k[0] ? (t(), w(oe, {
                        key: 1,
                        label: "Source URL:",
                        value: u.source_url || (($ = u.sources) == null ? void 0 : $[0])
                      }, null, 8, ["value"])) : (t(), w(oe, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: n(() => [...f[7] || (f[7] = [
                          m("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: n(() => [
                    _(G, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (k) => M(u)
                    }, {
                      default: n(() => [...f[8] || (f[8] = [
                        m(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    u.sha256 || u.sha256_hash ? (t(), w(G, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (k) => K(u.sha256 || u.sha256_hash)
                    }, {
                      default: n(() => [...f[9] || (f[9] = [
                        m(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0),
                    _(G, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (k) => N(u)
                    }, {
                      default: n(() => [...f[10] || (f[10] = [
                        m(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            p.value.length ? (t(), w(ce, {
              key: 2,
              title: "LORAS",
              count: p.value.length
            }, {
              default: n(() => [
                (t(!0), a(P, null, Y(p.value, (u) => (t(), w(de, {
                  key: u.sha256 || u.filename,
                  status: "synced"
                }, {
                  icon: n(() => [...f[11] || (f[11] = [
                    m("📦", -1)
                  ])]),
                  title: n(() => [
                    m(c(u.filename), 1)
                  ]),
                  subtitle: n(() => [
                    m(c(H(u.size_mb || u.size)), 1)
                  ]),
                  details: n(() => {
                    var k, $;
                    return [
                      u.sha256 || u.sha256_hash ? (t(), w(oe, {
                        key: 0,
                        label: "SHA256:",
                        value: (u.sha256 || u.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : d("", !0),
                      _(oe, {
                        label: "Used in:",
                        value: ee(u)
                      }, null, 8, ["value"]),
                      u.source_url || (k = u.sources) != null && k[0] ? (t(), w(oe, {
                        key: 1,
                        label: "Source URL:",
                        value: u.source_url || (($ = u.sources) == null ? void 0 : $[0])
                      }, null, 8, ["value"])) : (t(), w(oe, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: n(() => [...f[12] || (f[12] = [
                          m("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: n(() => [
                    _(G, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (k) => M(u)
                    }, {
                      default: n(() => [...f[13] || (f[13] = [
                        m(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    u.sha256 || u.sha256_hash ? (t(), w(G, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (k) => K(u.sha256 || u.sha256_hash)
                    }, {
                      default: n(() => [...f[14] || (f[14] = [
                        m(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0),
                    _(G, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (k) => N(u)
                    }, {
                      default: n(() => [...f[15] || (f[15] = [
                        m(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            O.value.length ? (t(), w(ce, {
              key: 3,
              title: "OTHER",
              count: O.value.length
            }, {
              default: n(() => [
                (t(!0), a(P, null, Y(O.value, (u) => (t(), w(de, {
                  key: u.sha256 || u.filename,
                  status: "synced"
                }, {
                  icon: n(() => [...f[16] || (f[16] = [
                    m("📦", -1)
                  ])]),
                  title: n(() => [
                    m(c(u.filename), 1)
                  ]),
                  subtitle: n(() => [
                    m(c(H(u.size_mb || u.size)), 1)
                  ]),
                  details: n(() => [
                    _(oe, {
                      label: "Type:",
                      value: u.type
                    }, null, 8, ["value"]),
                    u.sha256 || u.sha256_hash ? (t(), w(oe, {
                      key: 0,
                      label: "SHA256:",
                      value: (u.sha256 || u.sha256_hash).substring(0, 16) + "...",
                      mono: !0,
                      "value-variant": "hash"
                    }, null, 8, ["value"])) : d("", !0),
                    _(oe, {
                      label: "Used in:",
                      value: ee(u)
                    }, null, 8, ["value"])
                  ]),
                  actions: n(() => [
                    _(G, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (k) => M(u)
                    }, {
                      default: n(() => [...f[17] || (f[17] = [
                        m(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    u.sha256 || u.sha256_hash ? (t(), w(G, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (k) => K(u.sha256 || u.sha256_hash)
                    }, {
                      default: n(() => [...f[18] || (f[18] = [
                        m(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : d("", !0),
                    _(G, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (k) => N(u)
                    }, {
                      default: n(() => [...f[19] || (f[19] = [
                        m(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : d("", !0),
            y.value.length ? d("", !0) : (t(), w(ze, {
              key: 4,
              icon: "📭",
              message: C.value ? `No models match '${C.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      _(Ze, {
        show: v.value,
        title: "About Workspace Model Index",
        onClose: f[2] || (f[2] = (u) => v.value = !1)
      }, {
        content: n(() => [...f[20] || (f[20] = [
          o("p", null, [
            m(" Content-addressable model storage shared across "),
            o("strong", null, "all environments"),
            m(". Models are deduplicated by SHA256 hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Us = /* @__PURE__ */ A(As, [["__scopeId", "data-v-5a24af01"]]), Vs = { class: "header-info" }, Ps = { class: "commit-hash" }, Hs = {
  key: 0,
  class: "commit-refs"
}, Gs = { class: "commit-message" }, Fs = { class: "commit-date" }, Ks = {
  key: 0,
  class: "loading"
}, js = {
  key: 1,
  class: "changes-section"
}, qs = { class: "stats-row" }, Ys = { class: "stat" }, Zs = { class: "stat insertions" }, Xs = { class: "stat deletions" }, Js = {
  key: 0,
  class: "change-group"
}, Qs = {
  key: 1,
  class: "change-group"
}, en = {
  key: 0,
  class: "version"
}, tn = {
  key: 2,
  class: "change-group"
}, on = { class: "change-item" }, an = /* @__PURE__ */ W({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const r = e, { getCommitDetail: s } = fe(), l = E(null), b = E(!0), C = V(() => {
      if (!l.value) return !1;
      const x = l.value.changes.workflows;
      return x.added.length > 0 || x.modified.length > 0 || x.deleted.length > 0;
    }), v = V(() => {
      if (!l.value) return !1;
      const x = l.value.changes.nodes;
      return x.added.length > 0 || x.removed.length > 0;
    });
    return me(async () => {
      try {
        l.value = await s(r.commit.hash);
      } finally {
        b.value = !1;
      }
    }), (x, g) => (t(), w(Le, {
      size: "md",
      "show-close-button": !1,
      onClose: g[3] || (g[3] = (y) => x.$emit("close"))
    }, {
      header: n(() => {
        var y, S, p, O;
        return [
          o("div", Vs, [
            g[4] || (g[4] = o("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            o("span", Ps, c(((y = l.value) == null ? void 0 : y.short_hash) || e.commit.short_hash || ((S = e.commit.hash) == null ? void 0 : S.slice(0, 7))), 1),
            (O = (p = l.value) == null ? void 0 : p.refs) != null && O.length ? (t(), a("span", Hs, [
              (t(!0), a(P, null, Y(l.value.refs, (H) => (t(), a("span", {
                key: H,
                class: "ref-badge"
              }, c(H), 1))), 128))
            ])) : d("", !0)
          ]),
          _(ne, {
            variant: "ghost",
            size: "sm",
            onClick: g[0] || (g[0] = (H) => x.$emit("close"))
          }, {
            default: n(() => [...g[5] || (g[5] = [
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
        var y, S;
        return [
          o("div", Gs, c(((y = l.value) == null ? void 0 : y.message) || e.commit.message), 1),
          o("div", Fs, c(((S = l.value) == null ? void 0 : S.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          b.value ? (t(), a("div", Ks, "Loading details...")) : l.value ? (t(), a("div", js, [
            o("div", qs, [
              o("span", Ys, c(l.value.stats.files_changed) + " files", 1),
              o("span", Zs, "+" + c(l.value.stats.insertions), 1),
              o("span", Xs, "-" + c(l.value.stats.deletions), 1)
            ]),
            C.value ? (t(), a("div", Js, [
              _(he, { variant: "section" }, {
                default: n(() => [...g[6] || (g[6] = [
                  m("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (t(!0), a(P, null, Y(l.value.changes.workflows.added, (p) => (t(), a("div", {
                key: "add-" + p,
                class: "change-item added"
              }, [
                g[7] || (g[7] = o("span", { class: "change-icon" }, "+", -1)),
                o("span", null, c(p), 1)
              ]))), 128)),
              (t(!0), a(P, null, Y(l.value.changes.workflows.modified, (p) => (t(), a("div", {
                key: "mod-" + p,
                class: "change-item modified"
              }, [
                g[8] || (g[8] = o("span", { class: "change-icon" }, "~", -1)),
                o("span", null, c(p), 1)
              ]))), 128)),
              (t(!0), a(P, null, Y(l.value.changes.workflows.deleted, (p) => (t(), a("div", {
                key: "del-" + p,
                class: "change-item deleted"
              }, [
                g[9] || (g[9] = o("span", { class: "change-icon" }, "-", -1)),
                o("span", null, c(p), 1)
              ]))), 128))
            ])) : d("", !0),
            v.value ? (t(), a("div", Qs, [
              _(he, { variant: "section" }, {
                default: n(() => [...g[10] || (g[10] = [
                  m("NODES", -1)
                ])]),
                _: 1
              }),
              (t(!0), a(P, null, Y(l.value.changes.nodes.added, (p) => (t(), a("div", {
                key: "add-" + p.name,
                class: "change-item added"
              }, [
                g[11] || (g[11] = o("span", { class: "change-icon" }, "+", -1)),
                o("span", null, c(p.name), 1),
                p.version ? (t(), a("span", en, "(" + c(p.version) + ")", 1)) : d("", !0)
              ]))), 128)),
              (t(!0), a(P, null, Y(l.value.changes.nodes.removed, (p) => (t(), a("div", {
                key: "rem-" + p.name,
                class: "change-item deleted"
              }, [
                g[12] || (g[12] = o("span", { class: "change-icon" }, "-", -1)),
                o("span", null, c(p.name), 1)
              ]))), 128))
            ])) : d("", !0),
            l.value.changes.models.resolved > 0 ? (t(), a("div", tn, [
              _(he, { variant: "section" }, {
                default: n(() => [...g[13] || (g[13] = [
                  m("MODELS", -1)
                ])]),
                _: 1
              }),
              o("div", on, [
                g[14] || (g[14] = o("span", { class: "change-icon" }, "●", -1)),
                o("span", null, c(l.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : d("", !0)
          ])) : d("", !0)
        ];
      }),
      footer: n(() => [
        _(ne, {
          variant: "secondary",
          onClick: g[1] || (g[1] = (y) => x.$emit("createBranch", e.commit))
        }, {
          default: n(() => [...g[15] || (g[15] = [
            m(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        _(ne, {
          variant: "primary",
          onClick: g[2] || (g[2] = (y) => x.$emit("checkout", e.commit))
        }, {
          default: n(() => [...g[16] || (g[16] = [
            m(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), sn = /* @__PURE__ */ A(an, [["__scopeId", "data-v-d256ff6d"]]), nn = { class: "dialog-message" }, ln = {
  key: 0,
  class: "dialog-details"
}, rn = {
  key: 1,
  class: "dialog-warning"
}, cn = /* @__PURE__ */ W({
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
    return (r, s) => (t(), w(Le, {
      title: e.title,
      size: "sm",
      onClose: s[3] || (s[3] = (l) => r.$emit("cancel"))
    }, {
      body: n(() => [
        o("p", nn, c(e.message), 1),
        e.details && e.details.length ? (t(), a("div", ln, [
          (t(!0), a(P, null, Y(e.details, (l, b) => (t(), a("div", {
            key: b,
            class: "detail-item"
          }, " • " + c(l), 1))), 128))
        ])) : d("", !0),
        e.warning ? (t(), a("p", rn, [
          s[4] || (s[4] = o("span", { class: "warning-icon" }, "⚠", -1)),
          m(" " + c(e.warning), 1)
        ])) : d("", !0)
      ]),
      footer: n(() => [
        _(ne, {
          variant: "secondary",
          onClick: s[0] || (s[0] = (l) => r.$emit("cancel"))
        }, {
          default: n(() => [
            m(c(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (t(), w(ne, {
          key: 0,
          variant: "secondary",
          onClick: s[1] || (s[1] = (l) => r.$emit("secondary"))
        }, {
          default: n(() => [
            m(c(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : d("", !0),
        _(ne, {
          variant: e.destructive ? "danger" : "primary",
          onClick: s[2] || (s[2] = (l) => r.$emit("confirm"))
        }, {
          default: n(() => [
            m(c(e.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), dn = /* @__PURE__ */ A(cn, [["__scopeId", "data-v-3670b9f5"]]), un = { class: "comfygit-panel" }, mn = { class: "panel-header" }, gn = { class: "header-left" }, hn = {
  key: 0,
  class: "header-info"
}, fn = { class: "header-actions" }, vn = { class: "env-switcher" }, pn = {
  key: 0,
  class: "header-info"
}, yn = { class: "branch-name" }, bn = { class: "panel-main" }, wn = { class: "sidebar" }, kn = { class: "sidebar-section" }, _n = { class: "sidebar-section" }, xn = { class: "sidebar-section" }, $n = { class: "content-area" }, Cn = {
  key: 0,
  class: "error-message"
}, Sn = {
  key: 1,
  class: "loading"
}, En = {
  key: 5,
  class: "view-placeholder"
}, In = {
  key: 6,
  class: "view-placeholder"
}, zn = {
  key: 7,
  class: "view-placeholder"
}, Ln = {
  key: 9,
  class: "view-placeholder"
}, Mn = {
  key: 10,
  class: "view-placeholder"
}, Bn = {
  key: 11,
  class: "view-placeholder"
}, Tn = {
  key: 12,
  class: "view-placeholder"
}, Dn = {
  key: 13,
  class: "view-placeholder"
}, Nn = { class: "dialog-content env-selector-dialog" }, On = { class: "dialog-header" }, Rn = { class: "dialog-body" }, Wn = { class: "env-list" }, An = { class: "env-info" }, Un = { class: "env-name-row" }, Vn = { class: "env-indicator" }, Pn = { class: "env-name" }, Hn = {
  key: 0,
  class: "env-branch"
}, Gn = {
  key: 1,
  class: "current-label"
}, Fn = { class: "env-stats" }, Kn = ["onClick"], jn = { class: "toast-container" }, qn = { class: "toast-icon" }, Yn = { class: "toast-message" }, Zn = /* @__PURE__ */ W({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(e, { emit: r }) {
    const s = r, {
      getStatus: l,
      getHistory: b,
      exportEnv: C,
      getBranches: v,
      checkout: x,
      createBranch: g,
      switchBranch: y,
      getEnvironments: S
    } = fe(), p = E(null), O = E([]), H = E([]), ee = E([]), K = V(() => ee.value.find((L) => L.is_current)), M = E(!1), N = E(null), Z = E(null), te = E(!1), D = E("status"), B = E("this-env");
    function h(L, i) {
      D.value = L, B.value = i;
    }
    function f(L) {
      const X = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[L];
      X && h(X.view, X.section);
    }
    function u() {
      h("branches", "this-env");
    }
    const k = E(null), $ = E([]);
    let le = 0;
    function T(L, i = "info", X = 3e3) {
      const ae = ++le;
      return $.value.push({ id: ae, message: L, type: i }), X > 0 && setTimeout(() => {
        $.value = $.value.filter((ve) => ve.id !== ae);
      }, X), ae;
    }
    function I(L) {
      $.value = $.value.filter((i) => i.id !== L);
    }
    function F(L) {
      switch (L) {
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
    const z = V(() => {
      if (!p.value) return "neutral";
      const L = p.value.workflows, i = L.new.length > 0 || L.modified.length > 0 || L.deleted.length > 0 || p.value.has_changes;
      return p.value.comparison.is_synced ? i ? "warning" : "success" : "error";
    });
    V(() => p.value ? z.value === "success" ? "All synced" : z.value === "warning" ? "Uncommitted changes" : z.value === "error" ? "Not synced" : "" : "");
    async function q() {
      M.value = !0, N.value = null;
      try {
        const [L, i, X, ae] = await Promise.all([
          l(),
          b(),
          v(),
          S()
        ]);
        p.value = L, O.value = i.commits, H.value = X.branches, ee.value = ae, s("statusUpdate", L);
      } catch (L) {
        N.value = L instanceof Error ? L.message : "Failed to load status", p.value = null, O.value = [], H.value = [];
      } finally {
        M.value = !1;
      }
    }
    function se(L) {
      Z.value = L;
    }
    async function we(L) {
      var X;
      Z.value = null;
      const i = p.value && (p.value.workflows.new.length > 0 || p.value.workflows.modified.length > 0 || p.value.workflows.deleted.length > 0 || p.value.has_changes);
      k.value = {
        title: i ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: i ? "You have uncommitted changes that will be lost." : `Checkout commit ${L.short_hash || ((X = L.hash) == null ? void 0 : X.slice(0, 7))}?`,
        details: i ? Pe() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: i ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: i,
        onConfirm: async () => {
          var R;
          k.value = null;
          const ae = T(`Checking out ${L.short_hash || ((R = L.hash) == null ? void 0 : R.slice(0, 7))}...`, "info", 0), ve = await x(L.hash, i);
          I(ae), ve.status === "success" ? T("Restarting ComfyUI...", "success") : T(ve.message || "Checkout failed", "error");
        }
      };
    }
    async function $e(L) {
      const i = p.value && (p.value.workflows.new.length > 0 || p.value.workflows.modified.length > 0 || p.value.workflows.deleted.length > 0 || p.value.has_changes);
      k.value = {
        title: i ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: i ? "You have uncommitted changes." : `Switch to branch "${L}"?`,
        details: i ? Pe() : void 0,
        warning: i ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: i ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          k.value = null;
          const X = T(`Switching to ${L}...`, "info", 0), ae = await y(L, i);
          I(X), ae.status === "success" ? T("Restarting ComfyUI...", "success") : T(ae.message || "Branch switch failed", "error");
        }
      };
    }
    async function tt(L) {
      const i = T(`Creating branch ${L}...`, "info", 0), X = await g(L);
      I(i), X.status === "success" ? (T(`Branch "${L}" created`, "success"), await q()) : T(X.message || "Failed to create branch", "error");
    }
    async function ot(L) {
      Z.value = null;
      const i = prompt("Enter branch name:");
      if (i) {
        const X = T(`Creating branch ${i}...`, "info", 0), ae = await g(i, L.hash);
        I(X), ae.status === "success" ? (T(`Branch "${i}" created from ${L.short_hash}`, "success"), await q()) : T(ae.message || "Failed to create branch", "error");
      }
    }
    async function at(L) {
      te.value = !1, T("Environment switching not yet implemented", "warning");
    }
    function Pe() {
      if (!p.value) return [];
      const L = [], i = p.value.workflows;
      return i.new.length && L.push(`${i.new.length} new workflow(s)`), i.modified.length && L.push(`${i.modified.length} modified workflow(s)`), i.deleted.length && L.push(`${i.deleted.length} deleted workflow(s)`), L;
    }
    async function st() {
      const L = T("Exporting environment...", "info", 0);
      try {
        const i = await C();
        I(L), i.status === "success" ? (T("Export complete", "success"), alert(`Export successful!

Saved to: ${i.path}

Models without sources: ${i.models_without_sources}`)) : (T("Export failed", "error"), alert(`Export failed: ${i.message}`));
      } catch (i) {
        I(L), T("Export error", "error"), alert(`Export error: ${i instanceof Error ? i.message : "Unknown error"}`);
      }
    }
    return me(q), (L, i) => {
      var X, ae, ve;
      return t(), a("div", un, [
        o("div", mn, [
          o("div", gn, [
            i[20] || (i[20] = o("h2", { class: "panel-title" }, "ComfyGit", -1)),
            p.value ? (t(), a("div", hn)) : d("", !0)
          ]),
          o("div", fn, [
            o("button", {
              class: U(["icon-btn", { spinning: M.value }]),
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
              onClick: i[0] || (i[0] = (R) => s("close")),
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
        o("div", vn, [
          i[24] || (i[24] = o("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
          o("button", {
            class: "env-switcher-btn",
            onClick: i[1] || (i[1] = (R) => te.value = !0)
          }, [
            p.value ? (t(), a("div", pn, [
              o("span", null, c(((X = K.value) == null ? void 0 : X.name) || ((ae = p.value) == null ? void 0 : ae.environment) || "Loading..."), 1),
              o("span", yn, "(" + c(p.value.branch || "detached") + ")", 1)
            ])) : d("", !0),
            i[23] || (i[23] = o("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        o("div", bn, [
          o("div", wn, [
            o("div", kn, [
              i[25] || (i[25] = o("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              o("button", {
                class: U(["sidebar-item", { active: D.value === "status" && B.value === "this-env" }]),
                onClick: i[2] || (i[2] = (R) => h("status", "this-env"))
              }, " STATUS ", 2),
              o("button", {
                class: U(["sidebar-item", { active: D.value === "workflows" }]),
                onClick: i[3] || (i[3] = (R) => h("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              o("button", {
                class: U(["sidebar-item", { active: D.value === "models-env" }]),
                onClick: i[4] || (i[4] = (R) => h("models-env", "this-env"))
              }, " MODELS ", 2),
              o("button", {
                class: U(["sidebar-item", { active: D.value === "branches" }]),
                onClick: i[5] || (i[5] = (R) => h("branches", "this-env"))
              }, " BRANCHES ", 2),
              o("button", {
                class: U(["sidebar-item", { active: D.value === "history" }]),
                onClick: i[6] || (i[6] = (R) => h("history", "this-env"))
              }, " HISTORY ", 2),
              o("button", {
                class: U(["sidebar-item", { active: D.value === "nodes" }]),
                onClick: i[7] || (i[7] = (R) => h("nodes", "this-env"))
              }, " NODES ", 2),
              o("button", {
                class: U(["sidebar-item", { active: D.value === "debug-env" }]),
                onClick: i[8] || (i[8] = (R) => h("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            i[28] || (i[28] = o("div", { class: "sidebar-divider" }, null, -1)),
            o("div", _n, [
              i[26] || (i[26] = o("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              o("button", {
                class: U(["sidebar-item", { active: D.value === "environments" }]),
                onClick: i[9] || (i[9] = (R) => h("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              o("button", {
                class: U(["sidebar-item", { active: D.value === "model-index" }]),
                onClick: i[10] || (i[10] = (R) => h("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              o("button", {
                class: U(["sidebar-item", { active: D.value === "settings" }]),
                onClick: i[11] || (i[11] = (R) => h("settings", "all-envs"))
              }, " SETTINGS ", 2),
              o("button", {
                class: U(["sidebar-item", { active: D.value === "debug-workspace" }]),
                onClick: i[12] || (i[12] = (R) => h("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            i[29] || (i[29] = o("div", { class: "sidebar-divider" }, null, -1)),
            o("div", xn, [
              i[27] || (i[27] = o("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              o("button", {
                class: U(["sidebar-item", { active: D.value === "export" }]),
                onClick: i[13] || (i[13] = (R) => h("export", "sharing"))
              }, " EXPORT ", 2),
              o("button", {
                class: U(["sidebar-item", { active: D.value === "import" }]),
                onClick: i[14] || (i[14] = (R) => h("import", "sharing"))
              }, " IMPORT ", 2),
              o("button", {
                class: U(["sidebar-item", { active: D.value === "remotes" }]),
                onClick: i[15] || (i[15] = (R) => h("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          o("div", $n, [
            N.value ? (t(), a("div", Cn, c(N.value), 1)) : !p.value && D.value === "status" ? (t(), a("div", Sn, " Loading status... ")) : (t(), a(P, { key: 2 }, [
              D.value === "status" ? (t(), w(po, {
                key: 0,
                status: p.value,
                onSwitchBranch: u
              }, null, 8, ["status"])) : D.value === "workflows" ? (t(), w($s, {
                key: 1,
                onRefresh: q
              })) : D.value === "models-env" ? (t(), w(Ws, {
                key: 2,
                onNavigate: f
              })) : D.value === "branches" ? (t(), w(zo, {
                key: 3,
                branches: H.value,
                current: ((ve = p.value) == null ? void 0 : ve.branch) || null,
                onSwitch: $e,
                onCreate: tt
              }, null, 8, ["branches", "current"])) : D.value === "history" ? (t(), w(Ao, {
                key: 4,
                commits: O.value,
                onSelect: se,
                onCheckout: we
              }, null, 8, ["commits"])) : D.value === "nodes" ? (t(), a("div", En, [...i[30] || (i[30] = [
                o("h3", { class: "view-title" }, "NODES (GIT-TRACKED)", -1),
                o("p", null, "Git-tracked nodes view coming soon...", -1)
              ])])) : D.value === "debug-env" ? (t(), a("div", In, [...i[31] || (i[31] = [
                o("h3", { class: "view-title" }, "DEBUG (ENVIRONMENT LOGS)", -1),
                o("p", null, "Environment logs view coming soon...", -1)
              ])])) : D.value === "environments" ? (t(), a("div", zn, [...i[32] || (i[32] = [
                o("h3", { class: "view-title" }, "ENVIRONMENTS", -1),
                o("p", null, "Environment management UI coming soon...", -1)
              ])])) : D.value === "model-index" ? (t(), w(Us, { key: 8 })) : D.value === "settings" ? (t(), a("div", Ln, [...i[33] || (i[33] = [
                o("h3", { class: "view-title" }, "SETTINGS", -1),
                o("p", null, "Settings UI coming soon...", -1)
              ])])) : D.value === "debug-workspace" ? (t(), a("div", Mn, [...i[34] || (i[34] = [
                o("h3", { class: "view-title" }, "DEBUG (WORKSPACE LOGS)", -1),
                o("p", null, "Workspace logs view coming soon...", -1)
              ])])) : D.value === "export" ? (t(), a("div", Bn, [
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
                  m(" EXPORT ENVIRONMENT ", -1)
                ])])
              ])) : D.value === "import" ? (t(), a("div", Tn, [...i[37] || (i[37] = [
                o("h3", { class: "view-title" }, "IMPORT", -1),
                o("p", null, "Import UI coming soon...", -1)
              ])])) : D.value === "remotes" ? (t(), a("div", Dn, [...i[38] || (i[38] = [
                o("h3", { class: "view-title" }, "REMOTES", -1),
                o("p", null, "Git remotes UI coming soon...", -1)
              ])])) : d("", !0)
            ], 64))
          ])
        ]),
        Z.value ? (t(), w(sn, {
          key: 0,
          commit: Z.value,
          onClose: i[16] || (i[16] = (R) => Z.value = null),
          onCheckout: we,
          onCreateBranch: ot
        }, null, 8, ["commit"])) : d("", !0),
        k.value ? (t(), w(dn, {
          key: 1,
          title: k.value.title,
          message: k.value.message,
          details: k.value.details,
          warning: k.value.warning,
          confirmLabel: k.value.confirmLabel,
          cancelLabel: k.value.cancelLabel,
          secondaryLabel: k.value.secondaryLabel,
          secondaryAction: k.value.secondaryAction,
          destructive: k.value.destructive,
          onConfirm: k.value.onConfirm,
          onCancel: i[17] || (i[17] = (R) => k.value = null),
          onSecondary: k.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : d("", !0),
        te.value ? (t(), a("div", {
          key: 2,
          class: "dialog-overlay",
          onClick: i[19] || (i[19] = be((R) => te.value = !1, ["self"]))
        }, [
          o("div", Nn, [
            o("div", On, [
              i[40] || (i[40] = o("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              o("button", {
                class: "icon-btn",
                onClick: i[18] || (i[18] = (R) => te.value = !1)
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
            o("div", Rn, [
              i[41] || (i[41] = o("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              o("div", Wn, [
                (t(!0), a(P, null, Y(ee.value, (R) => (t(), a("div", {
                  key: R.name,
                  class: U(["env-item", { current: R.is_current }])
                }, [
                  o("div", An, [
                    o("div", Un, [
                      o("span", Vn, c(R.is_current ? "●" : "○"), 1),
                      o("span", Pn, c(R.name), 1),
                      R.current_branch ? (t(), a("span", Hn, "(" + c(R.current_branch) + ")", 1)) : d("", !0),
                      R.is_current ? (t(), a("span", Gn, "CURRENT")) : d("", !0)
                    ]),
                    o("div", Fn, c(R.workflow_count) + " workflows • " + c(R.node_count) + " nodes ", 1)
                  ]),
                  R.is_current ? d("", !0) : (t(), a("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Il) => at(R.name)
                  }, " SWITCH ", 8, Kn))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : d("", !0),
        o("div", jn, [
          _(ct, { name: "toast" }, {
            default: n(() => [
              (t(!0), a(P, null, Y($.value, (R) => (t(), a("div", {
                key: R.id,
                class: U(["toast", R.type])
              }, [
                o("span", qn, c(F(R.type)), 1),
                o("span", Yn, c(R.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), Xn = /* @__PURE__ */ A(Zn, [["__scopeId", "data-v-6671b632"]]), Jn = { class: "base-textarea-wrapper" }, Qn = ["value", "rows", "placeholder", "disabled", "maxlength"], el = {
  key: 0,
  class: "base-textarea-count"
}, tl = /* @__PURE__ */ W({
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
    return (r, s) => (t(), a("div", Jn, [
      o("textarea", {
        value: e.modelValue,
        rows: e.rows,
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxlength: e.maxLength,
        class: "base-textarea",
        onInput: s[0] || (s[0] = (l) => r.$emit("update:modelValue", l.target.value)),
        onKeydown: [
          s[1] || (s[1] = xe(be((l) => r.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          s[2] || (s[2] = xe(be((l) => r.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, Qn),
      e.showCharCount && e.maxLength ? (t(), a("div", el, c(e.modelValue.length) + " / " + c(e.maxLength), 1)) : d("", !0)
    ]));
  }
}), ol = /* @__PURE__ */ A(tl, [["__scopeId", "data-v-5516e6fc"]]), al = { class: "commit-popover" }, sl = { class: "popover-header" }, nl = { class: "popover-body" }, ll = {
  key: 0,
  class: "changes-summary"
}, rl = {
  key: 0,
  class: "change-item"
}, il = {
  key: 1,
  class: "change-item"
}, cl = {
  key: 2,
  class: "change-item"
}, dl = {
  key: 3,
  class: "change-item"
}, ul = {
  key: 4,
  class: "change-item"
}, ml = {
  key: 1,
  class: "no-changes"
}, gl = {
  key: 2,
  class: "loading"
}, hl = { class: "message-section" }, fl = { class: "popover-footer" }, vl = /* @__PURE__ */ W({
  __name: "CommitPopover",
  props: {
    status: {}
  },
  emits: ["close", "committed"],
  setup(e, { emit: r }) {
    const s = e, l = r, { commit: b } = fe(), C = E(""), v = E(!1), x = E(null), g = V(() => {
      if (!s.status) return !1;
      const S = s.status.workflows;
      return S.new.length > 0 || S.modified.length > 0 || S.deleted.length > 0 || s.status.has_changes;
    });
    async function y() {
      var S, p, O;
      if (!(!g.value || !C.value.trim() || v.value)) {
        v.value = !0, x.value = null;
        try {
          const H = await b(C.value.trim());
          H.status === "success" ? (x.value = {
            type: "success",
            message: `Committed: ${((S = H.summary) == null ? void 0 : S.new) || 0} new, ${((p = H.summary) == null ? void 0 : p.modified) || 0} modified, ${((O = H.summary) == null ? void 0 : O.deleted) || 0} deleted`
          }, C.value = "", setTimeout(() => l("committed"), 1e3)) : H.status === "no_changes" ? x.value = { type: "error", message: "No changes to commit" } : x.value = { type: "error", message: H.message || "Commit failed" };
        } catch (H) {
          x.value = { type: "error", message: H instanceof Error ? H.message : "Commit failed" };
        } finally {
          v.value = !1;
        }
      }
    }
    return (S, p) => (t(), a("div", al, [
      o("div", sl, [
        p[4] || (p[4] = o("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        o("button", {
          class: "close-btn",
          onClick: p[0] || (p[0] = (O) => l("close"))
        }, [...p[3] || (p[3] = [
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
      o("div", nl, [
        e.status && g.value ? (t(), a("div", ll, [
          e.status.workflows.new.length ? (t(), a("div", rl, [
            p[5] || (p[5] = o("span", { class: "change-icon new" }, "+", -1)),
            o("span", null, c(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : d("", !0),
          e.status.workflows.modified.length ? (t(), a("div", il, [
            p[6] || (p[6] = o("span", { class: "change-icon modified" }, "~", -1)),
            o("span", null, c(e.status.workflows.modified.length) + " modified", 1)
          ])) : d("", !0),
          e.status.workflows.deleted.length ? (t(), a("div", cl, [
            p[7] || (p[7] = o("span", { class: "change-icon deleted" }, "-", -1)),
            o("span", null, c(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : d("", !0),
          e.status.git_changes.nodes_added.length ? (t(), a("div", dl, [
            p[8] || (p[8] = o("span", { class: "change-icon new" }, "+", -1)),
            o("span", null, c(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : d("", !0),
          e.status.git_changes.nodes_removed.length ? (t(), a("div", ul, [
            p[9] || (p[9] = o("span", { class: "change-icon deleted" }, "-", -1)),
            o("span", null, c(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : d("", !0)
        ])) : e.status ? (t(), a("div", ml, " No changes to commit ")) : (t(), a("div", gl, " Loading... ")),
        o("div", hl, [
          _(ol, {
            modelValue: C.value,
            "onUpdate:modelValue": p[1] || (p[1] = (O) => C.value = O),
            placeholder: g.value ? "Describe your changes..." : "No changes",
            disabled: !g.value || v.value,
            rows: 3,
            onCtrlEnter: y
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        x.value ? (t(), a("div", {
          key: 3,
          class: U(["result", x.value.type])
        }, c(x.value.message), 3)) : d("", !0)
      ]),
      o("div", fl, [
        _(ne, {
          variant: "secondary",
          onClick: p[2] || (p[2] = (O) => l("close"))
        }, {
          default: n(() => [...p[10] || (p[10] = [
            m(" Cancel ", -1)
          ])]),
          _: 1
        }),
        _(ne, {
          variant: "primary",
          disabled: !g.value || !C.value.trim() || v.value,
          loading: v.value,
          onClick: y
        }, {
          default: n(() => [
            m(c(v.value ? "Committing..." : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ])
    ]));
  }
}), pl = /* @__PURE__ */ A(vl, [["__scopeId", "data-v-4f587977"]]), yl = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-item{border-radius:var(--cg-radius-md);border-left:3px solid var(--cg-color-border-subtle);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}', bl = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', wl = {
  comfy: yl,
  phosphor: bl
}, Ue = "comfy", Xe = "comfygit-theme";
let pe = null, Je = Ue;
function kl() {
  try {
    const e = localStorage.getItem(Xe);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return Ue;
}
function Qe(e = Ue) {
  pe && pe.remove(), pe = document.createElement("style"), pe.id = "comfygit-theme-styles", pe.setAttribute("data-theme", e), pe.textContent = wl[e], document.head.appendChild(pe), document.body.setAttribute("data-comfygit-theme", e), Je = e;
  try {
    localStorage.setItem(Xe, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function _l() {
  return Je;
}
function xl(e) {
  Qe(e);
}
const Ve = document.createElement("link");
Ve.rel = "stylesheet";
Ve.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(Ve);
const $l = kl();
Qe($l);
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), xl(e);
  },
  getTheme: () => {
    const e = _l();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
let ie = null, re = null, _e = null;
const ye = E(null);
async function Ne() {
  var e;
  if (!((e = window.app) != null && e.api)) return null;
  try {
    const r = await window.app.api.fetchApi("/v2/comfygit/status");
    r.ok && (ye.value = await r.json());
  } catch {
  }
}
function Cl() {
  if (!ye.value) return !1;
  const e = ye.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || ye.value.has_changes;
}
function Sl() {
  ie && ie.remove(), ie = document.createElement("div"), ie.className = "comfygit-panel-overlay";
  const e = document.createElement("div");
  e.className = "comfygit-panel-container", ie.appendChild(e), ie.addEventListener("click", (l) => {
    l.target === ie && Te();
  });
  const r = (l) => {
    l.key === "Escape" && (Te(), document.removeEventListener("keydown", r));
  };
  document.addEventListener("keydown", r), Ke({
    render: () => je(Xn, {
      onClose: Te,
      onStatusUpdate: (l) => {
        ye.value = l, Se();
      }
    })
  }).mount(e), document.body.appendChild(ie);
}
function Te() {
  ie && (ie.remove(), ie = null);
}
function El(e) {
  ke(), re = document.createElement("div"), re.className = "comfygit-commit-popover-container";
  const r = e.getBoundingClientRect();
  re.style.position = "fixed", re.style.top = `${r.bottom + 8}px`, re.style.right = `${window.innerWidth - r.right}px`, re.style.zIndex = "10001";
  const s = (b) => {
    re && !re.contains(b.target) && b.target !== e && (ke(), document.removeEventListener("mousedown", s));
  };
  setTimeout(() => document.addEventListener("mousedown", s), 0);
  const l = (b) => {
    b.key === "Escape" && (ke(), document.removeEventListener("keydown", l));
  };
  document.addEventListener("keydown", l), _e = Ke({
    render: () => je(pl, {
      status: ye.value,
      onClose: ke,
      onCommitted: () => {
        ke(), Ne().then(Se);
      }
    })
  }), _e.mount(re), document.body.appendChild(re);
}
function ke() {
  _e && (_e.unmount(), _e = null), re && (re.remove(), re = null);
}
let ue = null;
function Se() {
  if (!ue) return;
  const e = ue.querySelector(".commit-indicator");
  e && (e.style.display = Cl() ? "block" : "none");
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
    var s, l;
    const e = document.createElement("div");
    e.className = "comfygit-btn-group";
    const r = document.createElement("button");
    r.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", r.textContent = "ComfyGit", r.title = "ComfyGit Control Panel", r.onclick = Sl, ue = document.createElement("button"), ue.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", ue.innerHTML = 'Commit <span class="commit-indicator"></span>', ue.title = "Quick Commit", ue.onclick = () => El(ue), e.appendChild(r), e.appendChild(ue), (l = (s = Me.menu) == null ? void 0 : s.settingsGroup) != null && l.element && (Me.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), await Ne(), Se(), setInterval(async () => {
      await Ne(), Se();
    }, 3e4);
  }
});
