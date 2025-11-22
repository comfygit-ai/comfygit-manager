import { app as nt } from "../../scripts/app.js";
import { defineComponent as O, createElementBlock as s, openBlock as o, createCommentVNode as v, createElementVNode as t, renderSlot as X, createBlock as y, resolveDynamicComponent as dt, normalizeClass as q, withCtx as a, toDisplayString as c, createVNode as l, createTextVNode as f, computed as B, Fragment as H, renderList as J, ref as S, onMounted as ce, withKeys as _e, withModifiers as ke, onUnmounted as Tt, Teleport as Qe, normalizeStyle as He, watch as Bt, resolveComponent as Ut, createSlots as ht, TransitionGroup as Vt, createApp as pt, h as yt } from "vue";
const Dt = { class: "panel-layout" }, Ot = {
  key: 0,
  class: "panel-layout-header"
}, Pt = {
  key: 1,
  class: "panel-layout-search"
}, Ft = { class: "panel-layout-content" }, Wt = {
  key: 2,
  class: "panel-layout-footer"
}, At = /* @__PURE__ */ O({
  __name: "PanelLayout",
  setup(e) {
    return (d, n) => (o(), s("div", Dt, [
      d.$slots.header ? (o(), s("div", Ot, [
        X(d.$slots, "header", {}, void 0, !0)
      ])) : v("", !0),
      d.$slots.search ? (o(), s("div", Pt, [
        X(d.$slots, "search", {}, void 0, !0)
      ])) : v("", !0),
      t("div", Ft, [
        X(d.$slots, "content", {}, void 0, !0)
      ]),
      d.$slots.footer ? (o(), s("div", Wt, [
        X(d.$slots, "footer", {}, void 0, !0)
      ])) : v("", !0)
    ]));
  }
}), P = (e, d) => {
  const n = e.__vccOpts || e;
  for (const [r, i] of d)
    n[r] = i;
  return n;
}, me = /* @__PURE__ */ P(At, [["__scopeId", "data-v-21565df9"]]), Gt = {
  key: 0,
  class: "panel-title-prefix"
}, Ht = {
  key: 1,
  class: "panel-title-prefix-theme"
}, jt = /* @__PURE__ */ O({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (d, n) => (o(), y(dt(`h${e.level}`), {
      class: q(["panel-title", e.variant])
    }, {
      default: a(() => [
        e.showPrefix ? (o(), s("span", Gt, c(e.prefix), 1)) : (o(), s("span", Ht)),
        X(d.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), qt = /* @__PURE__ */ P(jt, [["__scopeId", "data-v-c3875efc"]]), Kt = ["title"], Jt = ["width", "height"], Yt = /* @__PURE__ */ O({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(e) {
    return (d, n) => (o(), s("button", {
      class: "info-button",
      title: e.title,
      onClick: n[0] || (n[0] = (r) => d.$emit("click"))
    }, [
      (o(), s("svg", {
        width: e.size,
        height: e.size,
        viewBox: "0 0 16 16",
        fill: "currentColor"
      }, [...n[1] || (n[1] = [
        t("circle", {
          cx: "8",
          cy: "8",
          r: "7",
          stroke: "currentColor",
          "stroke-width": "1.5",
          fill: "none"
        }, null, -1),
        t("text", {
          x: "8",
          y: "11",
          "text-anchor": "middle",
          "font-size": "10",
          "font-weight": "bold",
          fill: "currentColor"
        }, "i", -1)
      ])], 8, Jt))
    ], 8, Kt));
  }
}), Xt = /* @__PURE__ */ P(Yt, [["__scopeId", "data-v-6fc7f16d"]]), Qt = { class: "header-left" }, Zt = {
  key: 0,
  class: "header-actions"
}, eo = /* @__PURE__ */ O({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(e) {
    return (d, n) => (o(), s("div", {
      class: q(["panel-header", { stacked: e.stacked }])
    }, [
      t("div", Qt, [
        l(qt, { "show-prefix": e.showPrefix }, {
          default: a(() => [
            f(c(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (o(), y(Xt, {
          key: 0,
          onClick: n[0] || (n[0] = (r) => d.$emit("info-click"))
        })) : v("", !0)
      ]),
      d.$slots.actions ? (o(), s("div", Zt, [
        X(d.$slots, "actions", {}, void 0, !0)
      ])) : v("", !0)
    ], 2));
  }
}), ve = /* @__PURE__ */ P(eo, [["__scopeId", "data-v-55a62cd6"]]), to = {
  key: 0,
  class: "section-title-count"
}, oo = {
  key: 1,
  class: "section-title-icon"
}, ao = /* @__PURE__ */ O({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (d, n) => (o(), y(dt(`h${e.level}`), {
      class: q(["section-title", { clickable: e.clickable }]),
      onClick: n[0] || (n[0] = (r) => e.clickable && d.$emit("click"))
    }, {
      default: a(() => [
        X(d.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (o(), s("span", to, "(" + c(e.count) + ")", 1)) : v("", !0),
        e.clickable ? (o(), s("span", oo, c(e.expanded ? "▼" : "▸"), 1)) : v("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ue = /* @__PURE__ */ P(ao, [["__scopeId", "data-v-559361eb"]]), no = { class: "status-grid" }, so = { class: "status-grid__column" }, lo = { class: "status-grid__title" }, ro = { class: "status-grid__column status-grid__column--right" }, io = { class: "status-grid__title" }, co = /* @__PURE__ */ O({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (d, n) => (o(), s("div", no, [
      t("div", so, [
        t("h4", lo, c(e.leftTitle), 1),
        X(d.$slots, "left", {}, void 0, !0)
      ]),
      t("div", ro, [
        t("h4", io, c(e.rightTitle), 1),
        X(d.$slots, "right", {}, void 0, !0)
      ])
    ]));
  }
}), uo = /* @__PURE__ */ P(co, [["__scopeId", "data-v-fe556068"]]), mo = {
  key: 0,
  class: "status-item__icon"
}, vo = {
  key: 1,
  class: "status-item__count"
}, fo = { class: "status-item__label" }, go = /* @__PURE__ */ O({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(e) {
    const d = e, n = B(() => `status-item--${d.variant}`);
    return (r, i) => (o(), s("div", {
      class: q(["status-item", n.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (o(), s("span", mo, c(e.icon), 1)) : v("", !0),
      e.count !== void 0 ? (o(), s("span", vo, c(e.count), 1)) : v("", !0),
      t("span", fo, c(e.label), 1)
    ], 2));
  }
}), Le = /* @__PURE__ */ P(go, [["__scopeId", "data-v-6f929183"]]), ho = { class: "issue-card__header" }, po = { class: "issue-card__icon" }, yo = { class: "issue-card__title" }, bo = {
  key: 0,
  class: "issue-card__content"
}, wo = {
  key: 0,
  class: "issue-card__description"
}, ko = {
  key: 1,
  class: "issue-card__items"
}, $o = {
  key: 2,
  class: "issue-card__actions"
}, _o = /* @__PURE__ */ O({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(e) {
    const d = e, n = B(() => `issue-card--${d.severity}`);
    return (r, i) => (o(), s("div", {
      class: q(["issue-card", n.value])
    }, [
      t("div", ho, [
        t("span", po, c(e.icon), 1),
        t("h4", yo, c(e.title), 1)
      ]),
      r.$slots.default || e.description ? (o(), s("div", bo, [
        e.description ? (o(), s("p", wo, c(e.description), 1)) : v("", !0),
        X(r.$slots, "default", {}, void 0, !0)
      ])) : v("", !0),
      e.items && e.items.length ? (o(), s("div", ko, [
        (o(!0), s(H, null, J(e.items, (p, m) => (o(), s("div", {
          key: m,
          class: "issue-card__item"
        }, [
          i[0] || (i[0] = t("span", { class: "issue-card__bullet" }, "•", -1)),
          t("span", null, c(p), 1)
        ]))), 128))
      ])) : v("", !0),
      r.$slots.actions ? (o(), s("div", $o, [
        X(r.$slots, "actions", {}, void 0, !0)
      ])) : v("", !0)
    ], 2));
  }
}), Ye = /* @__PURE__ */ P(_o, [["__scopeId", "data-v-df6aa348"]]), Co = ["type", "disabled"], xo = {
  key: 0,
  class: "spinner"
}, So = /* @__PURE__ */ O({
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
    return (d, n) => (o(), s("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: q(["action-btn", e.variant, e.size, { loading: e.loading }]),
      onClick: n[0] || (n[0] = (r) => d.$emit("click", r))
    }, [
      e.loading ? (o(), s("span", xo)) : v("", !0),
      e.loading ? v("", !0) : X(d.$slots, "default", { key: 1 }, void 0, !0)
    ], 10, Co));
  }
}), T = /* @__PURE__ */ P(So, [["__scopeId", "data-v-772abe47"]]), Io = { class: "empty-state" }, Eo = {
  key: 0,
  class: "empty-icon"
}, Lo = { class: "empty-message" }, zo = /* @__PURE__ */ O({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (d, n) => (o(), s("div", Io, [
      e.icon ? (o(), s("div", Eo, c(e.icon), 1)) : v("", !0),
      t("p", Lo, c(e.message), 1),
      e.actionLabel ? (o(), y(T, {
        key: 1,
        variant: e.actionVariant || "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (r) => d.$emit("action"))
      }, {
        default: a(() => [
          f(c(e.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : v("", !0)
    ]));
  }
}), he = /* @__PURE__ */ P(zo, [["__scopeId", "data-v-4466284f"]]), No = { class: "branch-indicator" }, Ro = { class: "branch-indicator__info" }, Mo = { class: "branch-indicator__label" }, To = { class: "branch-indicator__name" }, Bo = {
  key: 0,
  class: "branch-indicator__remote"
}, Uo = {
  key: 0,
  class: "branch-indicator__status"
}, Vo = {
  key: 0,
  class: "branch-indicator__ahead"
}, Do = {
  key: 1,
  class: "branch-indicator__behind"
}, Oo = {
  key: 1,
  class: "branch-indicator__actions"
}, Po = /* @__PURE__ */ O({
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
    return (d, n) => (o(), s("div", No, [
      t("div", Ro, [
        t("span", Mo, c(e.label), 1),
        t("span", To, c(e.branchName), 1),
        e.remote ? (o(), s("span", Bo, "@" + c(e.remote), 1)) : v("", !0)
      ]),
      e.showStatus && (e.commitsAhead || e.commitsBehind) ? (o(), s("div", Uo, [
        e.commitsAhead ? (o(), s("span", Vo, " ↑ " + c(e.commitsAhead) + " ahead ", 1)) : v("", !0),
        e.commitsBehind ? (o(), s("span", Do, " ↓ " + c(e.commitsBehind) + " behind ", 1)) : v("", !0)
      ])) : v("", !0),
      d.$slots.actions ? (o(), s("div", Oo, [
        X(d.$slots, "actions", {}, void 0, !0)
      ])) : v("", !0)
    ]));
  }
}), Fo = /* @__PURE__ */ P(Po, [["__scopeId", "data-v-cb8dd50e"]]), Wo = { style: { "margin-top": "var(--cg-space-1)" } }, Ao = {
  key: 0,
  style: { "margin-top": "var(--cg-space-4)" }
}, Go = /* @__PURE__ */ O({
  __name: "StatusSection",
  props: {
    status: {}
  },
  emits: ["view-workflows", "resolve-models", "view-history", "commit-changes", "view-debug", "sync-environment", "switch-branch"],
  setup(e, { emit: d }) {
    const n = e, r = B(() => n.status.workflows.new.length > 0 || n.status.workflows.modified.length > 0 || n.status.workflows.deleted.length > 0), i = B(() => {
      const u = n.status.git_changes;
      return u.nodes_added.length > 0 || u.nodes_removed.length > 0 || u.workflow_changes || u.has_other_changes;
    }), p = B(() => {
      const u = n.status.git_changes, h = n.status.workflows;
      return (u.workflow_changes || u.has_other_changes) && h.new.length === 0 && h.modified.length === 0 && h.deleted.length === 0;
    }), m = B(() => n.status.missing_models_count > 0 || i.value || !n.status.comparison.is_synced), g = B(() => {
      const u = [];
      return n.status.workflows.new.length > 0 && u.push(`${n.status.workflows.new.length} new workflow${n.status.workflows.new.length === 1 ? "" : "s"}`), n.status.workflows.modified.length > 0 && u.push(`${n.status.workflows.modified.length} modified workflow${n.status.workflows.modified.length === 1 ? "" : "s"}`), n.status.workflows.deleted.length > 0 && u.push(`${n.status.workflows.deleted.length} deleted workflow${n.status.workflows.deleted.length === 1 ? "" : "s"}`), n.status.git_changes.nodes_added.length > 0 && u.push(`${n.status.git_changes.nodes_added.length} node${n.status.git_changes.nodes_added.length === 1 ? "" : "s"} added`), n.status.git_changes.nodes_removed.length > 0 && u.push(`${n.status.git_changes.nodes_removed.length} node${n.status.git_changes.nodes_removed.length === 1 ? "" : "s"} removed`), `${u.length > 0 ? u.join(", ") + "." : "You have uncommitted changes."} Your work could be lost if you switch branches without committing.`;
    });
    return (u, h) => (o(), y(me, null, {
      header: a(() => [
        l(ve, { title: "STATUS" })
      ]),
      content: a(() => [
        l(Ue, {
          level: "4",
          style: { "margin-bottom": "var(--cg-space-2)" }
        }, {
          default: a(() => [...h[7] || (h[7] = [
            f(" ENVIRONMENT HEALTH ", -1)
          ])]),
          _: 1
        }),
        l(uo, {
          "left-title": "WORKFLOWS",
          "right-title": "GIT CHANGES"
        }, {
          left: a(() => [
            e.status.workflows.new.length ? (o(), y(Le, {
              key: 0,
              icon: "●",
              count: e.status.workflows.new.length,
              label: "new",
              variant: "new"
            }, null, 8, ["count"])) : v("", !0),
            e.status.workflows.modified.length ? (o(), y(Le, {
              key: 1,
              icon: "●",
              count: e.status.workflows.modified.length,
              label: "modified",
              variant: "modified"
            }, null, 8, ["count"])) : v("", !0),
            e.status.workflows.deleted.length ? (o(), y(Le, {
              key: 2,
              icon: "●",
              count: e.status.workflows.deleted.length,
              label: "deleted",
              variant: "deleted"
            }, null, 8, ["count"])) : v("", !0),
            l(Le, {
              icon: "✓",
              count: e.status.workflows.synced.length,
              label: "synced",
              variant: "synced",
              separator: r.value
            }, null, 8, ["count", "separator"])
          ]),
          right: a(() => [
            e.status.git_changes.nodes_added.length ? (o(), y(Le, {
              key: 0,
              icon: "●",
              count: e.status.git_changes.nodes_added.length,
              label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
              variant: "new"
            }, null, 8, ["count", "label"])) : v("", !0),
            e.status.git_changes.nodes_removed.length ? (o(), y(Le, {
              key: 1,
              icon: "●",
              count: e.status.git_changes.nodes_removed.length,
              label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
              variant: "deleted"
            }, null, 8, ["count", "label"])) : v("", !0),
            p.value ? (o(), y(Le, {
              key: 2,
              icon: "●",
              label: "other changes",
              variant: "modified"
            })) : v("", !0),
            i.value ? v("", !0) : (o(), y(Le, {
              key: 3,
              icon: "✓",
              label: "No uncommitted changes",
              variant: "ok"
            }))
          ]),
          _: 1
        }),
        t("div", Wo, [
          l(Fo, {
            "branch-name": e.status.current_branch || "main"
          }, {
            actions: a(() => [
              l(T, {
                variant: "secondary",
                size: "sm",
                onClick: h[0] || (h[0] = (L) => u.$emit("switch-branch"))
              }, {
                default: a(() => [...h[8] || (h[8] = [
                  f(" Switch Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["branch-name"])
        ]),
        m.value ? (o(), s("div", Ao, [
          l(Ue, {
            level: "4",
            style: { "margin-bottom": "var(--cg-space-2)" }
          }, {
            default: a(() => [...h[9] || (h[9] = [
              f(" ISSUES DETECTED ", -1)
            ])]),
            _: 1
          }),
          e.status.missing_models_count > 0 ? (o(), y(Ye, {
            key: 0,
            severity: "warning",
            icon: "⚠",
            title: `${e.status.missing_models_count} missing model${e.status.missing_models_count === 1 ? "" : "s"}`,
            description: "Some workflows reference models that are not found in the workspace index."
          }, {
            actions: a(() => [
              l(T, {
                variant: "secondary",
                size: "sm",
                onClick: h[1] || (h[1] = (L) => u.$emit("view-workflows"))
              }, {
                default: a(() => [...h[10] || (h[10] = [
                  f(" View Details ", -1)
                ])]),
                _: 1
              }),
              l(T, {
                variant: "primary",
                size: "sm",
                onClick: h[2] || (h[2] = (L) => u.$emit("resolve-models"))
              }, {
                default: a(() => [...h[11] || (h[11] = [
                  f(" Resolve ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["title"])) : v("", !0),
          i.value ? (o(), y(Ye, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "You have unsaved changes",
            description: g.value
          }, {
            actions: a(() => [
              l(T, {
                variant: "secondary",
                size: "sm",
                onClick: h[3] || (h[3] = (L) => u.$emit("view-history"))
              }, {
                default: a(() => [...h[12] || (h[12] = [
                  f(" View Changes ", -1)
                ])]),
                _: 1
              }),
              l(T, {
                variant: "primary",
                size: "sm",
                onClick: h[4] || (h[4] = (L) => u.$emit("commit-changes"))
              }, {
                default: a(() => [...h[13] || (h[13] = [
                  f(" Commit Changes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["description"])) : v("", !0),
          e.status.comparison.is_synced ? v("", !0) : (o(), y(Ye, {
            key: 2,
            severity: "error",
            icon: "⚠",
            title: "Environment not synced",
            description: "Your environment state does not match the git repository. This may indicate missing installations or configuration issues."
          }, {
            actions: a(() => [
              l(T, {
                variant: "secondary",
                size: "sm",
                onClick: h[5] || (h[5] = (L) => u.$emit("view-debug"))
              }, {
                default: a(() => [...h[14] || (h[14] = [
                  f(" View Logs ", -1)
                ])]),
                _: 1
              }),
              l(T, {
                variant: "primary",
                size: "sm",
                onClick: h[6] || (h[6] = (L) => u.$emit("sync-environment"))
              }, {
                default: a(() => [...h[15] || (h[15] = [
                  f(" Sync Now ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }))
        ])) : v("", !0),
        !m.value && !i.value ? (o(), y(he, {
          key: 1,
          icon: "✅",
          message: "Everything looks good! No issues detected.",
          style: { "margin-top": "var(--cg-space-4)" }
        })) : v("", !0)
      ]),
      _: 1
    }));
  }
}), Ho = /* @__PURE__ */ P(Go, [["__scopeId", "data-v-2045da26"]]), jo = ["type", "value", "placeholder", "disabled"], qo = /* @__PURE__ */ O({
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
  setup(e, { expose: d, emit: n }) {
    const r = e, i = n, p = S(null);
    function m(g) {
      const u = g.target.value;
      i("update:modelValue", u);
    }
    return ce(() => {
      r.autoFocus && p.value && p.value.focus();
    }), d({
      focus: () => {
        var g;
        return (g = p.value) == null ? void 0 : g.focus();
      },
      blur: () => {
        var g;
        return (g = p.value) == null ? void 0 : g.blur();
      }
    }), (g, u) => (o(), s("input", {
      ref_key: "inputRef",
      ref: p,
      type: e.type,
      value: e.modelValue,
      placeholder: e.placeholder,
      disabled: e.disabled,
      class: q(["text-input", { error: e.hasError, monospace: e.monospace }]),
      onInput: m,
      onKeyup: [
        u[0] || (u[0] = _e((h) => g.$emit("enter"), ["enter"])),
        u[1] || (u[1] = _e((h) => g.$emit("escape"), ["escape"]))
      ],
      onFocus: u[2] || (u[2] = (h) => g.$emit("focus")),
      onBlur: u[3] || (u[3] = (h) => g.$emit("blur"))
    }, null, 42, jo));
  }
}), Ve = /* @__PURE__ */ P(qo, [["__scopeId", "data-v-0380d08f"]]), Ko = { class: "branch-create-form" }, Jo = { class: "form-actions" }, Yo = /* @__PURE__ */ O({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(e, { emit: d }) {
    const n = d, r = S(""), i = B(() => {
      const g = r.value.trim();
      return g.length > 0 && !g.startsWith("-") && !g.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(g);
    });
    function p() {
      i.value && (n("create", r.value.trim()), r.value = "");
    }
    function m() {
      r.value = "", n("cancel");
    }
    return (g, u) => (o(), s("div", Ko, [
      l(Ve, {
        modelValue: r.value,
        "onUpdate:modelValue": u[0] || (u[0] = (h) => r.value = h),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: p,
        onEscape: m
      }, null, 8, ["modelValue"]),
      t("div", Jo, [
        l(T, {
          variant: "primary",
          size: "sm",
          disabled: !i.value,
          onClick: p
        }, {
          default: a(() => [...u[1] || (u[1] = [
            f(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        l(T, {
          variant: "secondary",
          size: "sm",
          onClick: m
        }, {
          default: a(() => [...u[2] || (u[2] = [
            f(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Xo = /* @__PURE__ */ P(Yo, [["__scopeId", "data-v-7c500394"]]), Qo = { class: "branch-list-item__indicator" }, Zo = { class: "branch-list-item__name" }, ea = {
  key: 0,
  class: "branch-list-item__actions"
}, ta = {
  key: 0,
  class: "branch-list-item__current-label"
}, oa = /* @__PURE__ */ O({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(e) {
    return (d, n) => (o(), s("div", {
      class: q(["branch-list-item", { current: e.isCurrent, clickable: e.clickable }]),
      onClick: n[0] || (n[0] = (r) => e.clickable && d.$emit("click"))
    }, [
      t("span", Qo, c(e.isCurrent ? "●" : "○"), 1),
      t("span", Zo, c(e.branchName), 1),
      d.$slots.actions || e.showCurrentLabel ? (o(), s("div", ea, [
        X(d.$slots, "actions", {}, void 0, !0),
        e.isCurrent && e.showCurrentLabel ? (o(), s("span", ta, " current ")) : v("", !0)
      ])) : v("", !0)
    ], 2));
  }
}), aa = /* @__PURE__ */ P(oa, [["__scopeId", "data-v-c6581a24"]]), na = {
  key: 2,
  class: "branch-list"
}, sa = /* @__PURE__ */ O({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create"],
  setup(e, { emit: d }) {
    const n = d, r = S(!1);
    function i(m) {
      n("create", m), p();
    }
    function p() {
      r.value = !1;
    }
    return (m, g) => (o(), y(me, null, {
      header: a(() => [
        l(ve, { title: "BRANCHES" }, {
          actions: a(() => [
            l(T, {
              variant: "ghost",
              size: "sm",
              onClick: g[0] || (g[0] = (u) => r.value = !0),
              title: "Create new branch"
            }, {
              default: a(() => [...g[1] || (g[1] = [
                t("svg", {
                  width: "14",
                  height: "14",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  t("path", {
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
        r.value ? (o(), y(Xo, {
          key: 0,
          onCreate: i,
          onCancel: p
        })) : v("", !0),
        e.branches.length === 0 ? (o(), y(he, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (o(), s("div", na, [
          (o(!0), s(H, null, J(e.branches, (u) => (o(), y(aa, {
            key: u.name,
            "branch-name": u.name,
            "is-current": u.is_current
          }, {
            actions: a(() => [
              u.is_current ? v("", !0) : (o(), y(T, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: (h) => m.$emit("switch", u.name)
              }, {
                default: a(() => [...g[2] || (g[2] = [
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
}), la = /* @__PURE__ */ P(sa, [["__scopeId", "data-v-763d6ec4"]]), ra = { class: "commit-list" }, ia = /* @__PURE__ */ O({
  __name: "CommitList",
  setup(e) {
    return (d, n) => (o(), s("div", ra, [
      X(d.$slots, "default", {}, void 0, !0)
    ]));
  }
}), ca = /* @__PURE__ */ P(ia, [["__scopeId", "data-v-8c5ee761"]]), da = { class: "commit-hash" }, ua = /* @__PURE__ */ O({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const d = e, n = B(() => d.hash.slice(0, d.length));
    return (r, i) => (o(), s("span", da, c(n.value), 1));
  }
}), bt = /* @__PURE__ */ P(ua, [["__scopeId", "data-v-7c333cc6"]]), ma = { class: "commit-message" }, va = { class: "commit-date" }, fa = /* @__PURE__ */ O({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(e, { emit: d }) {
    const n = e, r = d;
    function i() {
      n.clickable && r("click");
    }
    return (p, m) => (o(), s("div", {
      class: q(["commit-item", { clickable: e.clickable }]),
      onClick: i
    }, [
      l(bt, { hash: e.hash }, null, 8, ["hash"]),
      t("span", ma, c(e.message), 1),
      t("span", va, c(e.relativeDate), 1),
      p.$slots.actions ? (o(), s("div", {
        key: 0,
        class: "commit-actions",
        onClick: m[0] || (m[0] = ke(() => {
        }, ["stop"]))
      }, [
        X(p.$slots, "actions", {}, void 0, !0)
      ])) : v("", !0)
    ], 2));
  }
}), ga = /* @__PURE__ */ P(fa, [["__scopeId", "data-v-dd7c621b"]]), ha = /* @__PURE__ */ O({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(e) {
    return (d, n) => (o(), y(me, null, {
      header: a(() => [
        l(ve, { title: "HISTORY" })
      ]),
      content: a(() => [
        e.commits.length === 0 ? (o(), y(he, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (o(), y(ca, { key: 1 }, {
          default: a(() => [
            (o(!0), s(H, null, J(e.commits, (r) => (o(), y(ga, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (i) => d.$emit("select", r)
            }, {
              actions: a(() => [
                l(T, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (i) => d.$emit("checkout", r),
                  title: "Checkout this commit"
                }, {
                  default: a(() => [...n[0] || (n[0] = [
                    t("svg", {
                      width: "12",
                      height: "12",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      t("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" })
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
}), pa = /* @__PURE__ */ P(ha, [["__scopeId", "data-v-981c3c64"]]);
[
  // SYNCED workflows (12) - All good
  ...Array(12).fill(null).map((e, d) => ({
    name: `synced-workflow-${d + 1}.json`,
    status: "synced",
    missing_nodes: 0,
    missing_models: 0,
    node_count: 5 + d,
    model_count: 1 + d % 3,
    sync_state: "synced"
  }))
];
const ya = [
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
];
[
  ...ya,
  (Date.now() / 1e3 - 86400 * 60, Math.floor(Date.now() / 1e3)),
  (Date.now() / 1e3 - 86400 * 45, Math.floor(Date.now() / 1e3))
];
(/* @__PURE__ */ new Date()).toISOString(), new Date(Date.now() - 6e4).toISOString(), new Date(Date.now() - 12e4).toISOString(), new Date(Date.now() - 18e4).toISOString();
function fe() {
  const e = S(!1), d = S(null);
  async function n(A, Q) {
    var je;
    if (!((je = window.app) != null && je.api))
      throw new Error("ComfyUI API not available");
    const ee = await window.app.api.fetchApi(A, Q);
    if (!ee.ok) {
      const qe = await ee.json().catch(() => ({}));
      throw new Error(qe.error || qe.message || `Request failed: ${ee.status}`);
    }
    return ee.json();
  }
  async function r() {
    return n("/v2/comfygit/status");
  }
  async function i(A, Q = !1) {
    return n("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: A, allow_issues: Q })
    });
  }
  async function p(A = 10, Q = 0) {
    return n(`/v2/comfygit/log?limit=${A}&offset=${Q}`);
  }
  async function m(A) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: A })
    });
  }
  async function g() {
    return n("/v2/comfygit/branches");
  }
  async function u(A) {
    return n(`/v2/comfygit/commit/${A}`);
  }
  async function h(A, Q = !1) {
    return n("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: A, force: Q })
    });
  }
  async function L(A, Q = "HEAD") {
    return n("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: A, start_point: Q })
    });
  }
  async function E(A, Q = !1) {
    return n("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: A, force: Q })
    });
  }
  async function F() {
    try {
      return (await n("/v2/comfygit/environments")).environments;
    } catch {
      try {
        const A = await r();
        return [{
          name: A.environment,
          is_current: !0,
          path: "~/comfygit/environments/" + A.environment,
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          workflow_count: A.workflows.total,
          node_count: 0,
          model_count: 0,
          current_branch: A.branch
        }];
      } catch {
        return [];
      }
    }
  }
  async function U(A) {
    return n("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ target_env: A })
    });
  }
  async function K() {
    try {
      return n("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function D(A, Q, ee) {
    return n("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: A, pytorch_backend: Q, clone_from: ee })
    });
  }
  async function _(A) {
    return n(`/v2/workspace/environments/${A}`, {
      method: "DELETE"
    });
  }
  async function x() {
    try {
      return n("/v2/comfygit/workflows");
    } catch {
      const A = await r(), Q = [];
      return A.workflows.new.forEach((ee) => {
        Q.push({ name: ee, status: "new", missing_nodes: 0, missing_models: 0, path: ee });
      }), A.workflows.modified.forEach((ee) => {
        Q.push({ name: ee, status: "modified", missing_nodes: 0, missing_models: 0, path: ee });
      }), A.workflows.synced.forEach((ee) => {
        Q.push({ name: ee, status: "synced", missing_nodes: 0, missing_models: 0, path: ee });
      }), Q;
    }
  }
  async function V(A) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(A)}/details`);
  }
  async function j(A) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(A)}/resolve`, {
      method: "POST"
    });
  }
  async function $(A, Q, ee) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(A)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: Q, install_models: ee })
    });
  }
  async function C(A, Q, ee) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(A)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: Q, importance: ee })
    });
  }
  async function b() {
    try {
      return n("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function k() {
    try {
      return n("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function w(A, Q) {
    return n(`/v2/workspace/models/${A}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: Q })
    });
  }
  async function z(A) {
    return n(`/v2/workspace/models/${A}`, {
      method: "DELETE"
    });
  }
  async function W(A) {
    return n("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(A)
    });
  }
  async function le() {
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
  async function R(A) {
    return n("/v2/comfygit/config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(A)
    });
  }
  async function N(A, Q) {
    try {
      const ee = new URLSearchParams();
      return A && ee.append("level", A), Q && ee.append("lines", Q.toString()), n(`/v2/comfygit/debug/logs?${ee}`);
    } catch {
      return [];
    }
  }
  async function G(A, Q) {
    try {
      const ee = new URLSearchParams();
      return A && ee.append("level", A), Q && ee.append("lines", Q.toString()), n(`/v2/workspace/debug/logs?${ee}`);
    } catch {
      return [];
    }
  }
  async function pe() {
    try {
      return n("/v2/comfygit/nodes");
    } catch {
      return {
        nodes: [],
        total_count: 0,
        installed_count: 0,
        missing_count: 0
      };
    }
  }
  async function et(A) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(A)}/install`, {
      method: "POST"
    });
  }
  async function re(A) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(A)}/update`, {
      method: "POST"
    });
  }
  async function Se(A) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(A)}`, {
      method: "DELETE"
    });
  }
  async function tt() {
    try {
      return n("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function ne(A, Q) {
    return n("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: A, url: Q })
    });
  }
  async function Ie(A) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(A)}`, {
      method: "DELETE"
    });
  }
  async function ot(A, Q, ee) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(A)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: Q, push_url: ee })
    });
  }
  async function Fe(A) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(A)}/fetch`, {
      method: "POST"
    });
  }
  async function Ee(A) {
    try {
      return n(`/v2/comfygit/remotes/${encodeURIComponent(A)}/status`);
    } catch {
      return null;
    }
  }
  return {
    isLoading: e,
    error: d,
    getStatus: r,
    commit: i,
    getHistory: p,
    exportEnv: m,
    // Git Operations
    getBranches: g,
    getCommitDetail: u,
    checkout: h,
    createBranch: L,
    switchBranch: E,
    // Environment Management
    getEnvironments: F,
    switchEnvironment: U,
    getSwitchProgress: K,
    createEnvironment: D,
    deleteEnvironment: _,
    // Workflow Management
    getWorkflows: x,
    getWorkflowDetails: V,
    resolveWorkflow: j,
    installWorkflowDeps: $,
    setModelImportance: C,
    // Model Management
    getEnvironmentModels: b,
    getWorkspaceModels: k,
    updateModelSource: w,
    deleteModel: z,
    downloadModel: W,
    // Settings
    getConfig: le,
    updateConfig: R,
    // Debug/Logs
    getEnvironmentLogs: N,
    getWorkspaceLogs: G,
    // Node Management
    getNodes: pe,
    installNode: et,
    updateNode: re,
    uninstallNode: Se,
    // Git Remotes
    getRemotes: tt,
    addRemote: ne,
    removeRemote: Ie,
    updateRemoteUrl: ot,
    fetchRemote: Fe,
    getRemoteSyncStatus: Ee
  };
}
const ba = { class: "base-modal-header" }, wa = {
  key: 0,
  class: "base-modal-title"
}, ka = { class: "base-modal-body" }, $a = {
  key: 0,
  class: "base-modal-loading"
}, _a = {
  key: 1,
  class: "base-modal-error"
}, Ca = {
  key: 0,
  class: "base-modal-footer"
}, xa = /* @__PURE__ */ O({
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
  setup(e, { emit: d }) {
    const n = e, r = d;
    function i() {
      n.closeOnOverlayClick && r("close");
    }
    function p(m) {
      m.key === "Escape" && r("close");
    }
    return ce(() => {
      document.addEventListener("keydown", p), document.body.style.overflow = "hidden";
    }), Tt(() => {
      document.removeEventListener("keydown", p), document.body.style.overflow = "";
    }), (m, g) => (o(), y(Qe, { to: "body" }, [
      t("div", {
        class: "base-modal-overlay",
        onClick: i
      }, [
        t("div", {
          class: q(["base-modal-content", e.size]),
          onClick: g[1] || (g[1] = ke(() => {
          }, ["stop"]))
        }, [
          t("div", ba, [
            X(m.$slots, "header", {}, () => [
              e.title ? (o(), s("h3", wa, c(e.title), 1)) : v("", !0)
            ], !0),
            e.showCloseButton ? (o(), s("button", {
              key: 0,
              class: "base-modal-close",
              onClick: g[0] || (g[0] = (u) => m.$emit("close"))
            }, [...g[2] || (g[2] = [
              t("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                t("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])) : v("", !0)
          ]),
          t("div", ka, [
            e.loading ? (o(), s("div", $a, "Loading...")) : e.error ? (o(), s("div", _a, c(e.error), 1)) : X(m.$slots, "body", { key: 2 }, void 0, !0)
          ]),
          m.$slots.footer ? (o(), s("div", Ca, [
            X(m.$slots, "footer", {}, void 0, !0)
          ])) : v("", !0)
        ], 2)
      ])
    ]));
  }
}), Ze = /* @__PURE__ */ P(xa, [["__scopeId", "data-v-700d367b"]]), Sa = ["type", "disabled"], Ia = {
  key: 0,
  class: "spinner"
}, Ea = /* @__PURE__ */ O({
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
    return (d, n) => (o(), s("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: q(["base-btn", e.variant, e.size, { "full-width": e.fullWidth, loading: e.loading }]),
      onClick: n[0] || (n[0] = (r) => d.$emit("click", r))
    }, [
      e.loading ? (o(), s("span", Ia)) : v("", !0),
      X(d.$slots, "default", {}, void 0, !0)
    ], 10, Sa));
  }
}), ue = /* @__PURE__ */ P(Ea, [["__scopeId", "data-v-f3452606"]]), La = {
  key: 0,
  class: "base-title-count"
}, za = /* @__PURE__ */ O({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (d, n) => (o(), y(dt(`h${e.level}`), {
      class: q(["base-title", e.variant])
    }, {
      default: a(() => [
        X(d.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (o(), s("span", La, "(" + c(e.count) + ")", 1)) : v("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ze = /* @__PURE__ */ P(za, [["__scopeId", "data-v-5a01561d"]]), Na = ["value", "disabled"], Ra = {
  key: 0,
  value: "",
  disabled: ""
}, Ma = ["value"], Ta = {
  key: 0,
  class: "base-select-error"
}, Ba = /* @__PURE__ */ O({
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
    function d(r) {
      return typeof r == "string" ? r : r.value;
    }
    function n(r) {
      return typeof r == "string" ? r : r.label;
    }
    return (r, i) => (o(), s("div", {
      class: q(["base-select-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      t("select", {
        value: e.modelValue,
        disabled: e.disabled,
        class: q(["base-select", { error: !!e.error }]),
        onChange: i[0] || (i[0] = (p) => r.$emit("update:modelValue", p.target.value))
      }, [
        e.placeholder ? (o(), s("option", Ra, c(e.placeholder), 1)) : v("", !0),
        (o(!0), s(H, null, J(e.options, (p) => (o(), s("option", {
          key: d(p),
          value: d(p)
        }, c(n(p)), 9, Ma))), 128))
      ], 42, Na),
      e.error ? (o(), s("span", Ta, c(e.error), 1)) : v("", !0)
    ], 2));
  }
}), Be = /* @__PURE__ */ P(Ba, [["__scopeId", "data-v-7436d745"]]), Ua = { class: "detail-section" }, Va = {
  key: 0,
  class: "empty-message"
}, Da = { class: "model-header" }, Oa = { class: "model-name" }, Pa = { class: "model-details" }, Fa = { class: "model-row" }, Wa = { class: "model-row" }, Aa = {
  key: 0,
  class: "model-row"
}, Ga = { class: "value" }, Ha = {
  key: 1,
  class: "model-row"
}, ja = { class: "value" }, qa = {
  key: 0,
  class: "model-actions"
}, Ka = { class: "detail-section" }, Ja = {
  key: 0,
  class: "empty-message"
}, Ya = { class: "node-name" }, Xa = {
  key: 0,
  class: "node-version"
}, Qa = /* @__PURE__ */ O({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve"],
  setup(e, { emit: d }) {
    const n = e, r = d, { getWorkflowDetails: i, setModelImportance: p } = fe(), m = S(null), g = S(!1), u = S(null), h = S(!1), L = S({}), E = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    async function F() {
      g.value = !0, u.value = null;
      try {
        m.value = await i(n.workflowName);
      } catch (D) {
        u.value = D instanceof Error ? D.message : "Failed to load workflow details";
      } finally {
        g.value = !1;
      }
    }
    function U(D, _) {
      L.value[D] = _, h.value = !0;
    }
    async function K() {
      if (!h.value) {
        r("close");
        return;
      }
      g.value = !0, u.value = null;
      try {
        for (const [D, _] of Object.entries(L.value))
          await p(n.workflowName, D, _);
        r("close");
      } catch (D) {
        u.value = D instanceof Error ? D.message : "Failed to save changes";
      } finally {
        g.value = !1;
      }
    }
    return ce(F), (D, _) => (o(), y(Ze, {
      title: `WORKFLOW DETAILS: ${e.workflowName}`,
      size: "lg",
      loading: g.value,
      error: u.value || void 0,
      onClose: _[2] || (_[2] = (x) => r("close"))
    }, {
      body: a(() => [
        m.value ? (o(), s(H, { key: 0 }, [
          t("section", Ua, [
            l(ze, { variant: "section" }, {
              default: a(() => [
                f("MODELS USED (" + c(m.value.models.length) + ")", 1)
              ]),
              _: 1
            }),
            m.value.models.length === 0 ? (o(), s("div", Va, " No models used in this workflow ")) : v("", !0),
            (o(!0), s(H, null, J(m.value.models, (x) => (o(), s("div", {
              key: x.hash,
              class: "model-card"
            }, [
              t("div", Da, [
                _[3] || (_[3] = t("span", { class: "model-icon" }, "📦", -1)),
                t("span", Oa, c(x.filename), 1)
              ]),
              t("div", Pa, [
                t("div", Fa, [
                  _[4] || (_[4] = t("span", { class: "label" }, "Status:", -1)),
                  t("span", {
                    class: q(["value", x.status === "available" ? "success" : "error"])
                  }, c(x.status === "available" ? "✓ Available" : "⚠ Missing"), 3)
                ]),
                t("div", Wa, [
                  _[5] || (_[5] = t("span", { class: "label" }, "Importance:", -1)),
                  l(Be, {
                    "model-value": L.value[x.hash] || x.importance,
                    options: E,
                    "onUpdate:modelValue": (V) => U(x.hash, V)
                  }, null, 8, ["model-value", "onUpdate:modelValue"])
                ]),
                x.node_type ? (o(), s("div", Aa, [
                  _[6] || (_[6] = t("span", { class: "label" }, "Used in:", -1)),
                  t("span", Ga, c(x.node_type) + " (Node " + c(x.node_id) + ")", 1)
                ])) : v("", !0),
                x.size_mb ? (o(), s("div", Ha, [
                  _[7] || (_[7] = t("span", { class: "label" }, "Size:", -1)),
                  t("span", ja, c(x.size_mb) + " MB", 1)
                ])) : v("", !0)
              ]),
              x.status === "missing" ? (o(), s("div", qa, [
                l(ue, {
                  variant: "secondary",
                  size: "sm",
                  onClick: _[0] || (_[0] = (V) => r("resolve"))
                }, {
                  default: a(() => [..._[8] || (_[8] = [
                    f(" Resolve ", -1)
                  ])]),
                  _: 1
                })
              ])) : v("", !0)
            ]))), 128))
          ]),
          _[9] || (_[9] = t("div", { class: "info-box" }, [
            t("div", { class: "info-title" }, "Importance options:"),
            t("ul", { class: "info-list" }, [
              t("li", null, [
                t("strong", null, "Required"),
                f(" — Must have for workflow to run")
              ]),
              t("li", null, [
                t("strong", null, "Flexible"),
                f(" — Workflow adapts if missing")
              ]),
              t("li", null, [
                t("strong", null, "Optional"),
                f(" — Nice to have, can be skipped")
              ])
            ])
          ], -1)),
          t("section", Ka, [
            l(ze, { variant: "section" }, {
              default: a(() => [
                f("NODES USED (" + c(m.value.nodes.length) + ")", 1)
              ]),
              _: 1
            }),
            m.value.nodes.length === 0 ? (o(), s("div", Ja, " No custom nodes used in this workflow ")) : v("", !0),
            (o(!0), s(H, null, J(m.value.nodes, (x) => (o(), s("div", {
              key: x.name,
              class: "node-item"
            }, [
              t("span", {
                class: q(["node-status", x.installed ? "installed" : "missing"])
              }, c(x.installed ? "✓" : "✕"), 3),
              t("span", Ya, c(x.name), 1),
              x.version ? (o(), s("span", Xa, "v" + c(x.version), 1)) : v("", !0)
            ]))), 128))
          ])
        ], 64)) : v("", !0)
      ]),
      footer: a(() => [
        l(ue, {
          variant: "secondary",
          onClick: _[1] || (_[1] = (x) => r("close"))
        }, {
          default: a(() => [..._[10] || (_[10] = [
            f(" Close ", -1)
          ])]),
          _: 1
        }),
        h.value ? (o(), y(ue, {
          key: 0,
          variant: "primary",
          onClick: K
        }, {
          default: a(() => [..._[11] || (_[11] = [
            f(" Save Changes ", -1)
          ])]),
          _: 1
        })) : v("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Za = /* @__PURE__ */ P(Qa, [["__scopeId", "data-v-6ce9a41c"]]), en = {
  key: 0,
  class: "resolve-section"
}, tn = { class: "resolve-card success-card" }, on = { class: "items-list" }, an = { class: "item-info" }, nn = { class: "item-name" }, sn = {
  key: 0,
  class: "item-meta"
}, ln = { class: "match-type" }, rn = { class: "source" }, cn = {
  key: 1,
  class: "resolve-section"
}, dn = { class: "resolve-card warning-card" }, un = { class: "items-list" }, mn = { class: "item-info" }, vn = { class: "item-name" }, fn = { class: "item-meta" }, gn = { key: 0 }, hn = { key: 1 }, pn = {
  key: 0,
  class: "item-warning"
}, yn = {
  key: 0,
  class: "item-action"
}, bn = ["onClick"], wn = {
  key: 2,
  class: "resolve-section"
}, kn = { class: "info-text" }, $n = { class: "actions-summary" }, _n = { class: "summary-list" }, Cn = { key: 0 }, xn = { key: 1 }, Sn = { key: 2 }, In = {
  key: 0,
  class: "estimated-size"
}, En = /* @__PURE__ */ O({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh"],
  setup(e, { emit: d }) {
    const n = e, r = d, { resolveWorkflow: i, installWorkflowDeps: p } = fe(), m = S(null), g = S(!1), u = S(!1), h = S(null), L = B(() => {
      var C;
      return m.value ? ((C = m.value.download_results) == null ? void 0 : C.every((b) => b.can_download)) ?? !1 : !1;
    });
    async function E() {
      g.value = !0, h.value = null;
      try {
        m.value = await i(n.workflowName);
      } catch (C) {
        h.value = C instanceof Error ? C.message : "Failed to analyze workflow";
      } finally {
        g.value = !1;
      }
    }
    function F(C) {
      return !C.possible_matches || C.possible_matches.length === 0 ? null : C.possible_matches.reduce(
        (b, k) => k.match_confidence > b.match_confidence ? k : b
      );
    }
    function U(C) {
      return C >= 0.9 ? "high" : C >= 0.7 ? "medium" : "low";
    }
    function K(C) {
      const b = F(C);
      return b ? b.package_id.startsWith("http") ? "GitHub" : "ComfyUI Registry" : "Unknown";
    }
    function D(C) {
      var b, k;
      return (k = (b = m.value) == null ? void 0 : b.download_results) == null ? void 0 : k.find((w) => w.model === C);
    }
    function _(C) {
      const b = D(C);
      return (b == null ? void 0 : b.can_download) ?? !1;
    }
    function x(C) {
      const b = D(C);
      return (b == null ? void 0 : b.source_url) || null;
    }
    function V(C) {
      window.open(C, "_blank");
    }
    async function j() {
      if (!(!m.value || u.value)) {
        u.value = !0, h.value = null;
        try {
          await p(
            n.workflowName,
            m.value.nodes_to_install,
            []
          ), r("install"), r("refresh"), r("close");
        } catch (C) {
          h.value = C instanceof Error ? C.message : "Installation failed";
        } finally {
          u.value = !1;
        }
      }
    }
    async function $() {
      if (!(!m.value || u.value)) {
        u.value = !0, h.value = null;
        try {
          await p(
            n.workflowName,
            m.value.nodes_to_install,
            m.value.models_to_download
          ), r("install"), r("refresh"), r("close");
        } catch (C) {
          h.value = C instanceof Error ? C.message : "Installation failed";
        } finally {
          u.value = !1;
        }
      }
    }
    return ce(E), (C, b) => (o(), y(Ze, {
      title: `RESOLVE DEPENDENCIES: ${e.workflowName}`,
      size: "lg",
      loading: g.value,
      error: h.value || void 0,
      onClose: b[1] || (b[1] = (k) => r("close"))
    }, {
      body: a(() => [
        m.value ? (o(), s(H, { key: 0 }, [
          b[5] || (b[5] = t("div", { class: "intro-message" }, " This workflow needs the following to work: ", -1)),
          m.value.nodes_unresolved.length > 0 ? (o(), s("section", en, [
            l(ze, { variant: "section" }, {
              default: a(() => [
                f("NODES (" + c(m.value.nodes_unresolved.length) + ")", 1)
              ]),
              _: 1
            }),
            t("div", tn, [
              b[2] || (b[2] = t("div", { class: "card-header" }, [
                t("span", { class: "status-icon" }, "✓"),
                t("span", { class: "card-title" }, "Can install automatically")
              ], -1)),
              t("div", on, [
                (o(!0), s(H, null, J(m.value.nodes_unresolved, (k) => {
                  var w;
                  return o(), s("div", {
                    key: k.node_type,
                    class: "item"
                  }, [
                    t("div", an, [
                      t("div", nn, c(((w = F(k)) == null ? void 0 : w.package_id) || k.node_type), 1),
                      F(k) ? (o(), s("div", sn, [
                        t("span", {
                          class: q(["confidence-badge", U(F(k).match_confidence)])
                        }, c(Math.round(F(k).match_confidence * 100)) + "% match ", 3),
                        t("span", ln, c(F(k).match_type), 1),
                        t("span", rn, "Source: " + c(K(k)), 1)
                      ])) : v("", !0)
                    ])
                  ]);
                }), 128))
              ])
            ])
          ])) : v("", !0),
          m.value.models_unresolved.length > 0 ? (o(), s("section", cn, [
            l(ze, { variant: "section" }, {
              default: a(() => [
                f("MODELS (" + c(m.value.models_unresolved.length) + ")", 1)
              ]),
              _: 1
            }),
            t("div", dn, [
              b[3] || (b[3] = t("div", { class: "card-header" }, [
                t("span", { class: "status-icon" }, "⚠"),
                t("span", { class: "card-title" }, "Manual download required")
              ], -1)),
              t("div", un, [
                (o(!0), s(H, null, J(m.value.models_unresolved, (k) => (o(), s("div", {
                  key: k.filename,
                  class: "item"
                }, [
                  t("div", mn, [
                    t("div", vn, c(k.filename), 1),
                    t("div", fn, [
                      k.expected_category ? (o(), s("span", gn, "Type: " + c(k.expected_category), 1)) : v("", !0),
                      D(k.filename) ? (o(), s("span", hn, " Size: ~" + c(D(k.filename).estimated_size_mb) + " MB ", 1)) : v("", !0)
                    ]),
                    _(k.filename) ? v("", !0) : (o(), s("div", pn, " No auto-download source configured "))
                  ]),
                  x(k.filename) ? (o(), s("div", yn, [
                    t("button", {
                      class: "link-btn",
                      onClick: (w) => V(x(k.filename))
                    }, " Open Source ↗ ", 8, bn)
                  ])) : v("", !0)
                ]))), 128))
              ])
            ])
          ])) : v("", !0),
          m.value.nodes_resolved.length > 0 || m.value.models_resolved.length > 0 ? (o(), s("section", wn, [
            l(ze, { variant: "section" }, {
              default: a(() => [
                f(" ALREADY AVAILABLE (" + c(m.value.nodes_resolved.length + m.value.models_resolved.length) + ") ", 1)
              ]),
              _: 1
            }),
            t("div", kn, c(m.value.nodes_resolved.length) + " nodes and " + c(m.value.models_resolved.length) + " models are already installed ", 1)
          ])) : v("", !0),
          t("div", $n, [
            b[4] || (b[4] = t("div", { class: "summary-title" }, "This will:", -1)),
            t("ol", _n, [
              m.value.nodes_to_install.length ? (o(), s("li", Cn, " Install " + c(m.value.nodes_to_install.length) + " nodes (~" + c(m.value.estimated_time_seconds) + "s) ", 1)) : v("", !0),
              m.value.nodes_to_install.length ? (o(), s("li", xn, " Restart ComfyUI to load new nodes ")) : v("", !0),
              m.value.models_to_download.length ? (o(), s("li", Sn, " You'll still need to download " + c(m.value.models_to_download.length) + " model(s) manually ", 1)) : v("", !0)
            ]),
            m.value.estimated_size_mb ? (o(), s("div", In, " Estimated download: " + c(m.value.estimated_size_mb) + " MB ", 1)) : v("", !0)
          ])
        ], 64)) : v("", !0)
      ]),
      footer: a(() => [
        l(ue, {
          variant: "secondary",
          onClick: b[0] || (b[0] = (k) => r("close"))
        }, {
          default: a(() => [...b[6] || (b[6] = [
            f(" Cancel ", -1)
          ])]),
          _: 1
        }),
        m.value && m.value.nodes_to_install.length && m.value.models_to_download.length ? (o(), y(ue, {
          key: 0,
          variant: "secondary",
          disabled: u.value,
          loading: u.value,
          onClick: j
        }, {
          default: a(() => [...b[7] || (b[7] = [
            f(" Install Nodes Only ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : v("", !0),
        m.value && (m.value.nodes_to_install.length || m.value.models_to_download.length) ? (o(), y(ue, {
          key: 1,
          variant: "primary",
          disabled: u.value || m.value.models_to_download.length > 0 && !L.value,
          loading: u.value,
          onClick: $
        }, {
          default: a(() => [...b[8] || (b[8] = [
            f(" Install All ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : v("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Ln = /* @__PURE__ */ P(En, [["__scopeId", "data-v-d68efb14"]]), zn = { class: "search-input-wrapper" }, Nn = ["value", "placeholder"], Rn = /* @__PURE__ */ O({
  __name: "SearchInput",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 },
    autoFocus: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e, { emit: d }) {
    const n = e, r = d, i = S(null);
    let p;
    function m(u) {
      const h = u.target.value;
      n.debounce > 0 ? (clearTimeout(p), p = window.setTimeout(() => {
        r("update:modelValue", h);
      }, n.debounce)) : r("update:modelValue", h);
    }
    function g() {
      var u;
      r("update:modelValue", ""), r("clear"), (u = i.value) == null || u.focus();
    }
    return ce(() => {
      n.autoFocus && i.value && i.value.focus();
    }), (u, h) => (o(), s("div", zn, [
      t("input", {
        ref_key: "inputRef",
        ref: i,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: m,
        onKeyup: _e(g, ["escape"])
      }, null, 40, Nn),
      e.clearable && e.modelValue ? (o(), s("button", {
        key: 0,
        class: "clear-button",
        onClick: g,
        title: "Clear search"
      }, " ✕ ")) : v("", !0)
    ]));
  }
}), Mn = /* @__PURE__ */ P(Rn, [["__scopeId", "data-v-266f857a"]]), Tn = { class: "search-bar" }, Bn = /* @__PURE__ */ O({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (d, n) => (o(), s("div", Tn, [
      l(Mn, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": n[0] || (n[0] = (r) => d.$emit("update:modelValue", r)),
        onClear: n[1] || (n[1] = (r) => d.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), Pe = /* @__PURE__ */ P(Bn, [["__scopeId", "data-v-3d51bbfd"]]), Un = { class: "section-group" }, Vn = {
  key: 0,
  class: "section-content"
}, Dn = /* @__PURE__ */ O({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(e, { emit: d }) {
    const n = e, r = d, i = S(n.initiallyExpanded);
    function p() {
      n.collapsible && (i.value = !i.value, r("toggle", i.value));
    }
    return (m, g) => (o(), s("section", Un, [
      l(Ue, {
        count: e.count,
        clickable: e.collapsible,
        expanded: i.value,
        onClick: p
      }, {
        default: a(() => [
          f(c(e.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !e.collapsible || i.value ? (o(), s("div", Vn, [
        X(m.$slots, "default", {}, void 0, !0)
      ])) : v("", !0)
    ]));
  }
}), ae = /* @__PURE__ */ P(Dn, [["__scopeId", "data-v-c48e33ed"]]), On = { class: "item-header" }, Pn = {
  key: 0,
  class: "item-icon"
}, Fn = { class: "item-info" }, Wn = {
  key: 0,
  class: "item-title"
}, An = {
  key: 1,
  class: "item-subtitle"
}, Gn = {
  key: 0,
  class: "item-details"
}, Hn = {
  key: 1,
  class: "item-actions"
}, jn = /* @__PURE__ */ O({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: d }) {
    const n = e, r = B(() => n.status ? `status-${n.status}` : "");
    return (i, p) => (o(), s("div", {
      class: q(["item-card", { clickable: e.clickable, compact: e.compact }, r.value]),
      onClick: p[0] || (p[0] = (m) => e.clickable && i.$emit("click"))
    }, [
      t("div", On, [
        i.$slots.icon ? (o(), s("span", Pn, [
          X(i.$slots, "icon", {}, void 0, !0)
        ])) : v("", !0),
        t("div", Fn, [
          i.$slots.title ? (o(), s("div", Wn, [
            X(i.$slots, "title", {}, void 0, !0)
          ])) : v("", !0),
          i.$slots.subtitle ? (o(), s("div", An, [
            X(i.$slots, "subtitle", {}, void 0, !0)
          ])) : v("", !0)
        ])
      ]),
      i.$slots.details ? (o(), s("div", Gn, [
        X(i.$slots, "details", {}, void 0, !0)
      ])) : v("", !0),
      i.$slots.actions ? (o(), s("div", Hn, [
        X(i.$slots, "actions", {}, void 0, !0)
      ])) : v("", !0)
    ], 2));
  }
}), ie = /* @__PURE__ */ P(jn, [["__scopeId", "data-v-cc435e0e"]]), qn = { class: "loading-state" }, Kn = { class: "loading-message" }, Jn = /* @__PURE__ */ O({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (d, n) => (o(), s("div", qn, [
      n[0] || (n[0] = t("div", { class: "spinner" }, null, -1)),
      t("p", Kn, c(e.message), 1)
    ]));
  }
}), Ce = /* @__PURE__ */ P(Jn, [["__scopeId", "data-v-ad8436c9"]]), Yn = { class: "error-state" }, Xn = { class: "error-message" }, Qn = /* @__PURE__ */ O({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (d, n) => (o(), s("div", Yn, [
      n[2] || (n[2] = t("span", { class: "error-icon" }, "⚠", -1)),
      t("p", Xn, c(e.message), 1),
      e.retry ? (o(), y(T, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (r) => d.$emit("retry"))
      }, {
        default: a(() => [...n[1] || (n[1] = [
          f(" Retry ", -1)
        ])]),
        _: 1
      })) : v("", !0)
    ]));
  }
}), xe = /* @__PURE__ */ P(Qn, [["__scopeId", "data-v-5397be48"]]), Zn = /* @__PURE__ */ O({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { emit: d }) {
    const n = d, { getWorkflows: r } = fe(), i = S([]), p = S(!1), m = S(null), g = S(""), u = S(!1), h = S(!1), L = S(!1), E = S(!1), F = S(null), U = B(
      () => i.value.filter((R) => R.status === "broken")
    ), K = B(
      () => i.value.filter((R) => R.status === "new")
    ), D = B(
      () => i.value.filter((R) => R.status === "modified")
    ), _ = B(
      () => i.value.filter((R) => R.status === "synced")
    ), x = B(() => {
      if (!g.value.trim()) return i.value;
      const R = g.value.toLowerCase();
      return i.value.filter((N) => N.name.toLowerCase().includes(R));
    }), V = B(
      () => U.value.filter(
        (R) => !g.value.trim() || R.name.toLowerCase().includes(g.value.toLowerCase())
      )
    ), j = B(
      () => K.value.filter(
        (R) => !g.value.trim() || R.name.toLowerCase().includes(g.value.toLowerCase())
      )
    ), $ = B(
      () => D.value.filter(
        (R) => !g.value.trim() || R.name.toLowerCase().includes(g.value.toLowerCase())
      )
    ), C = B(
      () => _.value.filter(
        (R) => !g.value.trim() || R.name.toLowerCase().includes(g.value.toLowerCase())
      )
    ), b = B(
      () => h.value ? C.value : C.value.slice(0, 5)
    );
    async function k() {
      p.value = !0, m.value = null;
      try {
        i.value = await r();
      } catch (R) {
        m.value = R instanceof Error ? R.message : "Failed to load workflows";
      } finally {
        p.value = !1;
      }
    }
    function w(R) {
      F.value = R, L.value = !0;
    }
    function z(R) {
      F.value = R, E.value = !0;
    }
    function W() {
      alert("Bulk resolution not yet implemented");
    }
    function le() {
      n("refresh");
    }
    return ce(k), (R, N) => (o(), s(H, null, [
      l(me, null, {
        header: a(() => [
          l(ve, { title: "WORKFLOWS" }, {
            actions: a(() => [
              U.value.length > 0 ? (o(), y(T, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: W
              }, {
                default: a(() => [...N[7] || (N[7] = [
                  f(" Resolve All Issues ", -1)
                ])]),
                _: 1
              })) : v("", !0)
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          l(Pe, {
            modelValue: g.value,
            "onUpdate:modelValue": N[0] || (N[0] = (G) => g.value = G),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          p.value ? (o(), y(Ce, {
            key: 0,
            message: "Loading workflows..."
          })) : m.value ? (o(), y(xe, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: k
          }, null, 8, ["message"])) : (o(), s(H, { key: 2 }, [
            V.value.length ? (o(), y(ae, {
              key: 0,
              title: "BROKEN",
              count: V.value.length
            }, {
              default: a(() => [
                (o(!0), s(H, null, J(V.value, (G) => (o(), y(ie, {
                  key: G.name,
                  status: "broken"
                }, {
                  icon: a(() => [...N[8] || (N[8] = [
                    f("⚠", -1)
                  ])]),
                  title: a(() => [
                    f(c(G.name), 1)
                  ]),
                  subtitle: a(() => [
                    f(" Missing: " + c(G.missing_nodes) + " nodes, " + c(G.missing_models) + " models ", 1)
                  ]),
                  actions: a(() => [
                    l(T, {
                      variant: "primary",
                      size: "sm",
                      onClick: (pe) => z(G.name)
                    }, {
                      default: a(() => [...N[9] || (N[9] = [
                        f(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    l(T, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (pe) => w(G.name)
                    }, {
                      default: a(() => [...N[10] || (N[10] = [
                        f(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : v("", !0),
            j.value.length ? (o(), y(ae, {
              key: 1,
              title: "NEW",
              count: j.value.length
            }, {
              default: a(() => [
                (o(!0), s(H, null, J(j.value, (G) => (o(), y(ie, {
                  key: G.name,
                  status: "new"
                }, {
                  icon: a(() => [...N[11] || (N[11] = [
                    f("●", -1)
                  ])]),
                  title: a(() => [
                    f(c(G.name), 1)
                  ]),
                  subtitle: a(() => [...N[12] || (N[12] = [
                    f("✓ Ready", -1)
                  ])]),
                  actions: a(() => [
                    l(T, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (pe) => w(G.name)
                    }, {
                      default: a(() => [...N[13] || (N[13] = [
                        f(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : v("", !0),
            $.value.length ? (o(), y(ae, {
              key: 2,
              title: "MODIFIED",
              count: $.value.length
            }, {
              default: a(() => [
                (o(!0), s(H, null, J($.value, (G) => (o(), y(ie, {
                  key: G.name,
                  status: "modified"
                }, {
                  icon: a(() => [...N[14] || (N[14] = [
                    f("⚡", -1)
                  ])]),
                  title: a(() => [
                    f(c(G.name), 1)
                  ]),
                  subtitle: a(() => [...N[15] || (N[15] = [
                    f("✓ Ready", -1)
                  ])]),
                  actions: a(() => [
                    l(T, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (pe) => w(G.name)
                    }, {
                      default: a(() => [...N[16] || (N[16] = [
                        f(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : v("", !0),
            C.value.length ? (o(), y(ae, {
              key: 3,
              title: "SYNCED",
              count: C.value.length,
              collapsible: !0,
              "initially-expanded": u.value,
              onToggle: N[2] || (N[2] = (G) => u.value = G)
            }, {
              default: a(() => [
                (o(!0), s(H, null, J(b.value, (G) => (o(), y(ie, {
                  key: G.name,
                  status: "synced"
                }, {
                  icon: a(() => [...N[17] || (N[17] = [
                    f("✓", -1)
                  ])]),
                  title: a(() => [
                    f(c(G.name), 1)
                  ]),
                  subtitle: a(() => [...N[18] || (N[18] = [
                    f("✓ Ready", -1)
                  ])]),
                  actions: a(() => [
                    l(T, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (pe) => w(G.name)
                    }, {
                      default: a(() => [...N[19] || (N[19] = [
                        f(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128)),
                !h.value && C.value.length > 5 ? (o(), y(T, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: N[1] || (N[1] = (G) => h.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: a(() => [
                    f(" View all " + c(C.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : v("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : v("", !0),
            x.value.length ? v("", !0) : (o(), y(he, {
              key: 4,
              icon: "📭",
              message: g.value ? `No workflows match '${g.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      L.value && F.value ? (o(), y(Za, {
        key: 0,
        "workflow-name": F.value,
        onClose: N[3] || (N[3] = (G) => L.value = !1),
        onResolve: N[4] || (N[4] = (G) => z(F.value))
      }, null, 8, ["workflow-name"])) : v("", !0),
      E.value && F.value ? (o(), y(Ln, {
        key: 1,
        "workflow-name": F.value,
        onClose: N[5] || (N[5] = (G) => E.value = !1),
        onInstall: le,
        onRefresh: N[6] || (N[6] = (G) => n("refresh"))
      }, null, 8, ["workflow-name"])) : v("", !0)
    ], 64));
  }
}), es = /* @__PURE__ */ P(Zn, [["__scopeId", "data-v-2251d776"]]), ts = /* @__PURE__ */ O({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (d, n) => (o(), s("span", {
      class: q(["detail-label"]),
      style: He({ minWidth: e.minWidth })
    }, [
      X(d.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), it = /* @__PURE__ */ P(ts, [["__scopeId", "data-v-75e9eeb8"]]), os = /* @__PURE__ */ O({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (d, n) => (o(), s("span", {
      class: q(["detail-value", e.variant, { mono: e.mono, truncate: e.truncate }])
    }, [
      X(d.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), De = /* @__PURE__ */ P(os, [["__scopeId", "data-v-2f186e4c"]]), as = { class: "detail-row" }, ns = /* @__PURE__ */ O({
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
    return (d, n) => (o(), s("div", as, [
      l(it, { "min-width": e.labelMinWidth }, {
        default: a(() => [
          f(c(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (o(), y(De, {
        key: 0,
        mono: e.mono,
        variant: e.valueVariant,
        truncate: e.truncate
      }, {
        default: a(() => [
          f(c(e.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : X(d.$slots, "value", { key: 1 }, void 0, !0)
    ]));
  }
}), Y = /* @__PURE__ */ P(ns, [["__scopeId", "data-v-ef15664a"]]), ss = /* @__PURE__ */ O({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(e) {
    return (d, n) => (o(), s("div", {
      class: q(["summary-bar", e.variant])
    }, [
      X(d.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Ne = /* @__PURE__ */ P(ss, [["__scopeId", "data-v-ccb7816e"]]), ls = { class: "popover-header" }, rs = { class: "popover-title" }, is = { class: "popover-content" }, cs = {
  key: 0,
  class: "popover-actions"
}, ds = /* @__PURE__ */ O({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(e) {
    return (d, n) => (o(), y(Qe, { to: "body" }, [
      e.show ? (o(), s("div", {
        key: 0,
        class: "popover-overlay",
        onClick: n[2] || (n[2] = (r) => d.$emit("close"))
      }, [
        t("div", {
          class: "popover",
          style: He({ maxWidth: e.maxWidth }),
          onClick: n[1] || (n[1] = ke(() => {
          }, ["stop"]))
        }, [
          t("div", ls, [
            t("h4", rs, c(e.title), 1),
            t("button", {
              class: "popover-close",
              onClick: n[0] || (n[0] = (r) => d.$emit("close"))
            }, "✕")
          ]),
          t("div", is, [
            X(d.$slots, "content", {}, void 0, !0)
          ]),
          d.$slots.actions ? (o(), s("div", cs, [
            X(d.$slots, "actions", {}, void 0, !0)
          ])) : v("", !0)
        ], 4)
      ])) : v("", !0)
    ]));
  }
}), Re = /* @__PURE__ */ P(ds, [["__scopeId", "data-v-057df510"]]), us = /* @__PURE__ */ O({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: d }) {
    const n = d, { getEnvironmentModels: r, getStatus: i } = fe(), p = S([]), m = S([]), g = S("production"), u = S(!1), h = S(null), L = S(""), E = S(!1);
    function F() {
      E.value = !1, n("navigate", "model-index");
    }
    const U = B(
      () => p.value.reduce((w, z) => w + (z.size_mb || z.size || 0), 0)
    ), K = B(() => {
      if (!L.value.trim()) return p.value;
      const w = L.value.toLowerCase();
      return p.value.filter((z) => z.filename.toLowerCase().includes(w));
    }), D = B(() => {
      if (!L.value.trim()) return m.value;
      const w = L.value.toLowerCase();
      return m.value.filter((z) => z.filename.toLowerCase().includes(w));
    }), _ = B(
      () => K.value.filter((w) => w.type === "checkpoints" || w.category === "checkpoints")
    ), x = B(
      () => K.value.filter((w) => w.type === "loras" || w.category === "loras")
    ), V = B(
      () => K.value.filter(
        (w) => w.type !== "checkpoints" && w.category !== "checkpoints" && w.type !== "loras" && w.category !== "loras"
      )
    );
    function j(w) {
      return w ? w >= 1024 ? `${(w / 1024).toFixed(1)} GB` : `${w.toFixed(0)} MB` : "Unknown";
    }
    function $(w) {
      n("navigate", "model-index");
    }
    function C(w) {
      n("navigate", "model-index");
    }
    function b(w) {
      alert(`Download functionality not yet implemented for ${w}`);
    }
    async function k() {
      u.value = !0, h.value = null;
      try {
        const w = await r();
        p.value = w, m.value = [];
        const z = await i();
        g.value = z.environment || "production";
      } catch (w) {
        h.value = w instanceof Error ? w.message : "Failed to load models";
      } finally {
        u.value = !1;
      }
    }
    return ce(k), (w, z) => (o(), s(H, null, [
      l(me, null, {
        header: a(() => [
          l(ve, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: z[0] || (z[0] = (W) => E.value = !0)
          })
        ]),
        search: a(() => [
          l(Pe, {
            modelValue: L.value,
            "onUpdate:modelValue": z[1] || (z[1] = (W) => L.value = W),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          u.value ? (o(), y(Ce, {
            key: 0,
            message: "Loading environment models..."
          })) : h.value ? (o(), y(xe, {
            key: 1,
            message: h.value,
            retry: !0,
            onRetry: k
          }, null, 8, ["message"])) : (o(), s(H, { key: 2 }, [
            p.value.length ? (o(), y(Ne, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                f(" Total: " + c(p.value.length) + " models • " + c(j(U.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : v("", !0),
            _.value.length ? (o(), y(ae, {
              key: 1,
              title: "CHECKPOINTS",
              count: _.value.length
            }, {
              default: a(() => [
                (o(!0), s(H, null, J(_.value, (W) => (o(), y(ie, {
                  key: W.sha256 || W.hash || W.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...z[3] || (z[3] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(c(W.filename), 1)
                  ]),
                  subtitle: a(() => [
                    f(c(j(W.size_mb || W.size)), 1)
                  ]),
                  details: a(() => [
                    l(Y, {
                      label: "Used by:",
                      value: (W.used_by || W.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    l(Y, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: a(() => [
                    l(T, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (le) => $(W.sha256 || W.sha256_hash || W.hash || "")
                    }, {
                      default: a(() => [...z[4] || (z[4] = [
                        f(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : v("", !0),
            x.value.length ? (o(), y(ae, {
              key: 2,
              title: "LORAS",
              count: x.value.length
            }, {
              default: a(() => [
                (o(!0), s(H, null, J(x.value, (W) => (o(), y(ie, {
                  key: W.sha256 || W.hash || W.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...z[5] || (z[5] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(c(W.filename), 1)
                  ]),
                  subtitle: a(() => [
                    f(c(j(W.size_mb || W.size)), 1)
                  ]),
                  details: a(() => [
                    l(Y, {
                      label: "Used by:",
                      value: (W.used_by || W.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    l(Y, {
                      label: "Source:",
                      value: "Workspace index"
                    })
                  ]),
                  actions: a(() => [
                    l(T, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (le) => $(W.sha256 || W.sha256_hash || W.hash || "")
                    }, {
                      default: a(() => [...z[6] || (z[6] = [
                        f(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : v("", !0),
            V.value.length ? (o(), y(ae, {
              key: 3,
              title: "OTHER",
              count: V.value.length
            }, {
              default: a(() => [
                (o(!0), s(H, null, J(V.value, (W) => (o(), y(ie, {
                  key: W.sha256 || W.hash || W.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...z[7] || (z[7] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(c(W.filename), 1)
                  ]),
                  subtitle: a(() => [
                    f(c(j(W.size_mb || W.size)), 1)
                  ]),
                  details: a(() => [
                    l(Y, {
                      label: "Type:",
                      value: W.type
                    }, null, 8, ["value"]),
                    l(Y, {
                      label: "Used by:",
                      value: (W.used_by || W.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    l(T, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (le) => $(W.sha256 || W.sha256_hash || W.hash || "")
                    }, {
                      default: a(() => [...z[8] || (z[8] = [
                        f(" View in Workspace Index ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : v("", !0),
            D.value.length ? (o(), y(ae, {
              key: 4,
              title: "MISSING",
              count: D.value.length
            }, {
              default: a(() => [
                (o(!0), s(H, null, J(D.value, (W) => (o(), y(ie, {
                  key: W.filename,
                  status: "broken"
                }, {
                  icon: a(() => [...z[9] || (z[9] = [
                    f("⚠", -1)
                  ])]),
                  title: a(() => [
                    f(c(W.filename), 1)
                  ]),
                  subtitle: a(() => [...z[10] || (z[10] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: a(() => {
                    var le;
                    return [
                      l(Y, {
                        label: "Required by:",
                        value: ((le = W.workflow_names) == null ? void 0 : le.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: a(() => [
                    l(T, {
                      variant: "primary",
                      size: "sm",
                      onClick: (le) => b(W.filename)
                    }, {
                      default: a(() => [...z[11] || (z[11] = [
                        f(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    l(T, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (le) => C(W.filename)
                    }, {
                      default: a(() => [...z[12] || (z[12] = [
                        f(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : v("", !0),
            !K.value.length && !D.value.length ? (o(), y(he, {
              key: 5,
              icon: "📭",
              message: L.value ? `No models match '${L.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : v("", !0)
          ], 64))
        ]),
        _: 1
      }),
      l(Re, {
        show: E.value,
        title: "About Environment Models",
        onClose: z[2] || (z[2] = (W) => E.value = !1)
      }, {
        content: a(() => [
          t("p", null, [
            z[13] || (z[13] = f(" These are models currently used by workflows in ", -1)),
            t("strong", null, '"' + c(g.value) + '"', 1),
            z[14] || (z[14] = f(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: a(() => [
          l(T, {
            variant: "primary",
            onClick: F
          }, {
            default: a(() => [...z[15] || (z[15] = [
              f(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), ms = /* @__PURE__ */ P(us, [["__scopeId", "data-v-865641a4"]]), vs = /* @__PURE__ */ O({
  __name: "ModelIndexSection",
  setup(e) {
    const { getWorkspaceModels: d } = fe(), n = S([]), r = S(!1), i = S(null), p = S(""), m = S(!1), g = B(
      () => n.value.reduce((b, k) => b + (k.size_mb || k.size || 0), 0)
    ), u = B(() => {
      const b = /* @__PURE__ */ new Set();
      return n.value.forEach((k) => {
        k.used_in_environments && k.used_in_environments.length > 0 && k.used_in_environments.forEach((w) => b.add(w.env_name));
      }), b.size;
    }), h = B(() => {
      if (!p.value.trim()) return n.value;
      const b = p.value.toLowerCase();
      return n.value.filter((k) => {
        const w = k, z = k.sha256 || w.sha256_hash || "";
        return k.filename.toLowerCase().includes(b) || z.toLowerCase().includes(b);
      });
    }), L = B(
      () => h.value.filter((b) => b.type === "checkpoints")
    ), E = B(
      () => h.value.filter((b) => b.type === "loras")
    ), F = B(
      () => h.value.filter((b) => b.type !== "checkpoints" && b.type !== "loras")
    );
    function U(b) {
      return b ? b >= 1024 ? `${(b / 1024).toFixed(1)} GB` : `${b.toFixed(0)} MB` : "Unknown";
    }
    function K(b) {
      const k = b, w = b.used_in_workflows || k.used_by || [];
      return !w || w.length === 0 ? "Not used" : `${w.length} workflow(s)`;
    }
    function D(b) {
      navigator.clipboard.writeText(b), alert("Hash copied to clipboard");
    }
    function _(b) {
      prompt("Enter model source URL:", b.source_url || "") !== null && alert("URL update not yet implemented");
    }
    function x(b) {
      const k = b, w = b.used_in_workflows || k.used_by || [], z = w && w.length > 0 ? `

⚠ WARNING: This model is used by ${w.length} workflow(s):
${w.join(", ")}

Deleting will break these workflows!` : "";
      confirm(
        `Delete ${b.filename}?${z}

This will free ${U(k.size_mb || b.size)} of space.`
      ) && alert("Model deletion not yet implemented");
    }
    function V() {
      alert("Scan for models not yet implemented");
    }
    function j() {
      alert("Change directory not yet implemented");
    }
    function $() {
      alert("Download new model not yet implemented");
    }
    async function C() {
      r.value = !0, i.value = null;
      try {
        n.value = await d(), console.log("Loaded models:", n.value), console.log("Filtered checkpoints:", L.value), console.log("Filtered loras:", E.value), console.log("Filtered other:", F.value);
      } catch (b) {
        i.value = b instanceof Error ? b.message : "Failed to load workspace models";
      } finally {
        r.value = !1;
      }
    }
    return ce(C), (b, k) => (o(), s(H, null, [
      l(me, null, {
        header: a(() => [
          l(ve, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: k[0] || (k[0] = (w) => m.value = !0)
          }, {
            actions: a(() => [
              l(T, {
                variant: "primary",
                size: "sm",
                onClick: V
              }, {
                default: a(() => [...k[3] || (k[3] = [
                  f(" Scan for Models ", -1)
                ])]),
                _: 1
              }),
              l(T, {
                variant: "primary",
                size: "sm",
                onClick: j
              }, {
                default: a(() => [...k[4] || (k[4] = [
                  f(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              l(T, {
                variant: "primary",
                size: "sm",
                onClick: $
              }, {
                default: a(() => [...k[5] || (k[5] = [
                  t("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    t("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    t("path", { d: "M14 14H2v-2h12v2z" })
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
          l(Pe, {
            modelValue: p.value,
            "onUpdate:modelValue": k[1] || (k[1] = (w) => p.value = w),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          r.value ? (o(), y(Ce, {
            key: 0,
            message: "Loading workspace models..."
          })) : i.value ? (o(), y(xe, {
            key: 1,
            message: i.value,
            retry: !0,
            onRetry: C
          }, null, 8, ["message"])) : (o(), s(H, { key: 2 }, [
            n.value.length ? (o(), y(Ne, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                f(" Total: " + c(n.value.length) + " models • " + c(U(g.value)) + " • Used in " + c(u.value) + " environments ", 1)
              ]),
              _: 1
            })) : v("", !0),
            L.value.length ? (o(), y(ae, {
              key: 1,
              title: "CHECKPOINTS",
              count: L.value.length
            }, {
              default: a(() => [
                (o(!0), s(H, null, J(L.value, (w) => (o(), y(ie, {
                  key: w.sha256 || w.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...k[6] || (k[6] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(c(w.filename), 1)
                  ]),
                  subtitle: a(() => [
                    f(c(U(w.size_mb || w.size)), 1)
                  ]),
                  details: a(() => {
                    var z, W;
                    return [
                      w.sha256 || w.sha256_hash ? (o(), y(Y, {
                        key: 0,
                        label: "SHA256:",
                        value: (w.sha256 || w.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : v("", !0),
                      l(Y, {
                        label: "Used in:",
                        value: K(w)
                      }, null, 8, ["value"]),
                      w.source_url || (z = w.sources) != null && z[0] ? (o(), y(Y, {
                        key: 1,
                        label: "Source URL:",
                        value: w.source_url || ((W = w.sources) == null ? void 0 : W[0])
                      }, null, 8, ["value"])) : (o(), y(Y, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: a(() => [...k[7] || (k[7] = [
                          f("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: a(() => [
                    l(T, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (z) => _(w)
                    }, {
                      default: a(() => [...k[8] || (k[8] = [
                        f(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    w.sha256 || w.sha256_hash ? (o(), y(T, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (z) => D(w.sha256 || w.sha256_hash)
                    }, {
                      default: a(() => [...k[9] || (k[9] = [
                        f(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : v("", !0),
                    l(T, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (z) => x(w)
                    }, {
                      default: a(() => [...k[10] || (k[10] = [
                        f(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : v("", !0),
            E.value.length ? (o(), y(ae, {
              key: 2,
              title: "LORAS",
              count: E.value.length
            }, {
              default: a(() => [
                (o(!0), s(H, null, J(E.value, (w) => (o(), y(ie, {
                  key: w.sha256 || w.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...k[11] || (k[11] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(c(w.filename), 1)
                  ]),
                  subtitle: a(() => [
                    f(c(U(w.size_mb || w.size)), 1)
                  ]),
                  details: a(() => {
                    var z, W;
                    return [
                      w.sha256 || w.sha256_hash ? (o(), y(Y, {
                        key: 0,
                        label: "SHA256:",
                        value: (w.sha256 || w.sha256_hash).substring(0, 16) + "...",
                        mono: !0,
                        "value-variant": "hash"
                      }, null, 8, ["value"])) : v("", !0),
                      l(Y, {
                        label: "Used in:",
                        value: K(w)
                      }, null, 8, ["value"]),
                      w.source_url || (z = w.sources) != null && z[0] ? (o(), y(Y, {
                        key: 1,
                        label: "Source URL:",
                        value: w.source_url || ((W = w.sources) == null ? void 0 : W[0])
                      }, null, 8, ["value"])) : (o(), y(Y, {
                        key: 2,
                        label: "Source URL:",
                        "value-variant": "warning"
                      }, {
                        value: a(() => [...k[12] || (k[12] = [
                          f("(none)", -1)
                        ])]),
                        _: 1
                      }))
                    ];
                  }),
                  actions: a(() => [
                    l(T, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (z) => _(w)
                    }, {
                      default: a(() => [...k[13] || (k[13] = [
                        f(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    w.sha256 || w.sha256_hash ? (o(), y(T, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (z) => D(w.sha256 || w.sha256_hash)
                    }, {
                      default: a(() => [...k[14] || (k[14] = [
                        f(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : v("", !0),
                    l(T, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (z) => x(w)
                    }, {
                      default: a(() => [...k[15] || (k[15] = [
                        f(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : v("", !0),
            F.value.length ? (o(), y(ae, {
              key: 3,
              title: "OTHER",
              count: F.value.length
            }, {
              default: a(() => [
                (o(!0), s(H, null, J(F.value, (w) => (o(), y(ie, {
                  key: w.sha256 || w.filename,
                  status: "synced"
                }, {
                  icon: a(() => [...k[16] || (k[16] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(c(w.filename), 1)
                  ]),
                  subtitle: a(() => [
                    f(c(U(w.size_mb || w.size)), 1)
                  ]),
                  details: a(() => [
                    l(Y, {
                      label: "Type:",
                      value: w.type
                    }, null, 8, ["value"]),
                    w.sha256 || w.sha256_hash ? (o(), y(Y, {
                      key: 0,
                      label: "SHA256:",
                      value: (w.sha256 || w.sha256_hash).substring(0, 16) + "...",
                      mono: !0,
                      "value-variant": "hash"
                    }, null, 8, ["value"])) : v("", !0),
                    l(Y, {
                      label: "Used in:",
                      value: K(w)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    l(T, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (z) => _(w)
                    }, {
                      default: a(() => [...k[17] || (k[17] = [
                        f(" Edit URL ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    w.sha256 || w.sha256_hash ? (o(), y(T, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (z) => D(w.sha256 || w.sha256_hash)
                    }, {
                      default: a(() => [...k[18] || (k[18] = [
                        f(" Copy Hash ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : v("", !0),
                    l(T, {
                      variant: "destructive",
                      size: "xs",
                      onClick: (z) => x(w)
                    }, {
                      default: a(() => [...k[19] || (k[19] = [
                        f(" Delete ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : v("", !0),
            h.value.length ? v("", !0) : (o(), y(he, {
              key: 4,
              icon: "📭",
              message: p.value ? `No models match '${p.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      l(Re, {
        show: m.value,
        title: "About Workspace Model Index",
        onClose: k[2] || (k[2] = (w) => m.value = !1)
      }, {
        content: a(() => [...k[20] || (k[20] = [
          t("p", null, [
            f(" Content-addressable model storage shared across "),
            t("strong", null, "all environments"),
            f(". Models are deduplicated by SHA256 hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), fs = /* @__PURE__ */ P(vs, [["__scopeId", "data-v-5a24af01"]]), gs = { key: 0 }, hs = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, ps = {
  key: 2,
  style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" }
}, ys = /* @__PURE__ */ O({
  __name: "NodesSection",
  setup(e) {
    const { getNodes: d, installNode: n, updateNode: r, uninstallNode: i } = fe(), p = S({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0
    }), m = S(!1), g = S(null), u = S(""), h = S(!1), L = B(() => {
      if (!u.value.trim()) return p.value.nodes;
      const $ = u.value.toLowerCase();
      return p.value.nodes.filter(
        (C) => {
          var b, k;
          return C.name.toLowerCase().includes($) || ((b = C.description) == null ? void 0 : b.toLowerCase().includes($)) || ((k = C.repository) == null ? void 0 : k.toLowerCase().includes($));
        }
      );
    }), E = B(
      () => L.value.filter(($) => $.installed)
    ), F = B(
      () => L.value.filter(($) => !$.installed)
    );
    function U($) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown"
      }[$] || $;
    }
    function K($) {
      return !$.used_in_workflows || $.used_in_workflows.length === 0 ? "Not used in any workflows" : $.used_in_workflows.length === 1 ? $.used_in_workflows[0] : `${$.used_in_workflows.length} workflows`;
    }
    function D($) {
      window.open($, "_blank");
    }
    async function _($) {
      if (confirm(`Install node "${$}"?

This will download and install the node from its repository.`))
        try {
          m.value = !0;
          const C = await n($);
          C.status === "success" ? (alert(`Node "${$}" installed successfully!`), await j()) : alert(`Failed to install node: ${C.message || "Unknown error"}`);
        } catch (C) {
          alert(`Error installing node: ${C instanceof Error ? C.message : "Unknown error"}`);
        } finally {
          m.value = !1;
        }
    }
    async function x($) {
      if (confirm(`Check for updates for "${$}"?`))
        try {
          m.value = !0;
          const C = await r($);
          C.status === "success" ? (alert(`Node "${$}" is up to date or has been updated!`), await j()) : alert(`Update check failed: ${C.message || "Unknown error"}`);
        } catch (C) {
          alert(`Error checking for updates: ${C instanceof Error ? C.message : "Unknown error"}`);
        } finally {
          m.value = !1;
        }
    }
    async function V($) {
      if (confirm(`Uninstall node "${$}"?

This will remove the node from this environment.`))
        try {
          m.value = !0;
          const C = await i($);
          C.status === "success" ? (alert(`Node "${$}" uninstalled successfully!`), await j()) : alert(`Failed to uninstall node: ${C.message || "Unknown error"}`);
        } catch (C) {
          alert(`Error uninstalling node: ${C instanceof Error ? C.message : "Unknown error"}`);
        } finally {
          m.value = !1;
        }
    }
    async function j() {
      m.value = !0, g.value = null;
      try {
        p.value = await d();
      } catch ($) {
        g.value = $ instanceof Error ? $.message : "Failed to load nodes";
      } finally {
        m.value = !1;
      }
    }
    return ce(j), ($, C) => (o(), s(H, null, [
      l(me, null, {
        header: a(() => [
          l(ve, {
            title: "NODES (GIT-TRACKED)",
            "show-info": !0,
            onInfoClick: C[0] || (C[0] = (b) => h.value = !0)
          })
        ]),
        search: a(() => [
          l(Pe, {
            modelValue: u.value,
            "onUpdate:modelValue": C[1] || (C[1] = (b) => u.value = b),
            placeholder: "🔍 Search git-tracked custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: a(() => [
          m.value ? (o(), y(Ce, {
            key: 0,
            message: "Loading git-tracked nodes..."
          })) : g.value ? (o(), y(xe, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: j
          }, null, 8, ["message"])) : (o(), s(H, { key: 2 }, [
            p.value.total_count ? (o(), y(Ne, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                f(" Total: " + c(p.value.total_count) + " nodes • " + c(p.value.installed_count) + " installed • " + c(p.value.missing_count) + " missing ", 1)
              ]),
              _: 1
            })) : v("", !0),
            E.value.length ? (o(), y(ae, {
              key: 1,
              title: "INSTALLED",
              count: E.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: a(() => [
                (o(!0), s(H, null, J(E.value, (b) => (o(), y(ie, {
                  key: b.name,
                  status: "synced"
                }, {
                  icon: a(() => [...C[4] || (C[4] = [
                    f("📦", -1)
                  ])]),
                  title: a(() => [
                    f(c(b.name), 1)
                  ]),
                  subtitle: a(() => [
                    b.version ? (o(), s("span", gs, "v" + c(b.version), 1)) : (o(), s("span", hs, "version unknown")),
                    b.source ? (o(), s("span", ps, " • " + c(U(b.source)), 1)) : v("", !0)
                  ]),
                  details: a(() => [
                    b.description ? (o(), y(Y, {
                      key: 0,
                      label: "Description:",
                      value: b.description
                    }, null, 8, ["value"])) : v("", !0),
                    b.repository ? (o(), y(Y, {
                      key: 1,
                      label: "Repository:",
                      value: b.repository
                    }, null, 8, ["value"])) : v("", !0),
                    l(Y, {
                      label: "Used by:",
                      value: K(b)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    b.repository ? (o(), y(T, {
                      key: 0,
                      variant: "secondary",
                      size: "xs",
                      onClick: (k) => D(b.repository)
                    }, {
                      default: a(() => [...C[5] || (C[5] = [
                        f(" View Repository ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : v("", !0),
                    b.source === "registry" ? (o(), y(T, {
                      key: 1,
                      variant: "secondary",
                      size: "xs",
                      onClick: (k) => x(b.name)
                    }, {
                      default: a(() => [...C[6] || (C[6] = [
                        f(" Check for Updates ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : v("", !0),
                    b.source !== "unknown" ? (o(), y(T, {
                      key: 2,
                      variant: "destructive",
                      size: "xs",
                      onClick: (k) => V(b.name)
                    }, {
                      default: a(() => [...C[7] || (C[7] = [
                        f(" Uninstall ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : v("", !0)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : v("", !0),
            F.value.length ? (o(), y(ae, {
              key: 2,
              title: "MISSING",
              count: F.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: a(() => [
                (o(!0), s(H, null, J(F.value, (b) => (o(), y(ie, {
                  key: b.name,
                  status: "missing"
                }, {
                  icon: a(() => [...C[8] || (C[8] = [
                    f("⚠", -1)
                  ])]),
                  title: a(() => [
                    f(c(b.name), 1)
                  ]),
                  subtitle: a(() => [...C[9] || (C[9] = [
                    t("span", { style: { color: "var(--cg-color-warning)" } }, "Not installed", -1)
                  ])]),
                  details: a(() => [
                    b.description ? (o(), y(Y, {
                      key: 0,
                      label: "Description:",
                      value: b.description
                    }, null, 8, ["value"])) : v("", !0),
                    b.repository ? (o(), y(Y, {
                      key: 1,
                      label: "Repository:",
                      value: b.repository
                    }, null, 8, ["value"])) : v("", !0),
                    l(Y, {
                      label: "Required by:",
                      value: K(b)
                    }, null, 8, ["value"])
                  ]),
                  actions: a(() => [
                    b.download_url ? (o(), y(T, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (k) => _(b.name)
                    }, {
                      default: a(() => [...C[10] || (C[10] = [
                        f(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : v("", !0),
                    b.repository ? (o(), y(T, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (k) => D(b.repository)
                    }, {
                      default: a(() => [...C[11] || (C[11] = [
                        f(" View Repository ↗ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : v("", !0)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : v("", !0),
            !E.value.length && !F.value.length ? (o(), y(he, {
              key: 3,
              icon: "📭",
              message: u.value ? `No nodes match '${u.value}'` : "No git-tracked nodes found."
            }, null, 8, ["message"])) : v("", !0)
          ], 64))
        ]),
        _: 1
      }),
      l(Re, {
        show: h.value,
        title: "About Git-Tracked Nodes",
        onClose: C[3] || (C[3] = (b) => h.value = !1)
      }, {
        content: a(() => [...C[12] || (C[12] = [
          t("p", null, " These are custom nodes tracked in your git repository. They are version-controlled and synced across environments. ", -1),
          t("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            t("strong", null, "Installed:"),
            f(" Nodes currently available in this environment"),
            t("br"),
            t("strong", null, "Missing:"),
            f(" Nodes referenced in workflows but not yet installed ")
          ], -1)
        ])]),
        actions: a(() => [
          l(T, {
            variant: "primary",
            onClick: C[2] || (C[2] = (b) => h.value = !1)
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
}), bs = /* @__PURE__ */ P(ys, [["__scopeId", "data-v-c480e2c1"]]), ws = { class: "remote-url-display" }, ks = ["title"], $s = ["title"], _s = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Cs = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, xs = /* @__PURE__ */ O({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(e) {
    const d = e, n = S(!1), r = B(() => {
      if (d.url.length <= d.maxLength)
        return d.url;
      const p = d.url.slice(0, Math.floor(d.maxLength * 0.6)), m = d.url.slice(-Math.floor(d.maxLength * 0.3));
      return `${p}...${m}`;
    });
    async function i() {
      try {
        await navigator.clipboard.writeText(d.url), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (p) {
        console.error("Failed to copy URL:", p);
      }
    }
    return (p, m) => (o(), s("div", ws, [
      t("span", {
        class: "url-text",
        title: e.url
      }, c(r.value), 9, ks),
      t("button", {
        class: q(["copy-btn", { copied: n.value }]),
        onClick: i,
        title: n.value ? "Copied!" : "Copy URL"
      }, [
        n.value ? (o(), s("svg", Cs, [...m[1] || (m[1] = [
          t("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (o(), s("svg", _s, [...m[0] || (m[0] = [
          t("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          t("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, $s)
    ]));
  }
}), gt = /* @__PURE__ */ P(xs, [["__scopeId", "data-v-7768a58d"]]), Ss = { class: "remote-title" }, Is = {
  key: 0,
  class: "default-badge"
}, Es = {
  key: 1,
  class: "sync-badge"
}, Ls = {
  key: 0,
  class: "ahead"
}, zs = {
  key: 1,
  class: "behind"
}, Ns = {
  key: 0,
  class: "tracking-info"
}, Rs = /* @__PURE__ */ O({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    trackingBranch: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove"],
  setup(e, { emit: d }) {
    const n = e, r = B(() => n.fetchingRemote === n.remote.name), i = B(() => n.remote.is_default), p = B(() => !!n.trackingBranch);
    function m(g) {
      const u = new Date(g), L = (/* @__PURE__ */ new Date()).getTime() - u.getTime(), E = Math.floor(L / 6e4);
      if (E < 1) return "Just now";
      if (E < 60) return `${E}m ago`;
      const F = Math.floor(E / 60);
      if (F < 24) return `${F}h ago`;
      const U = Math.floor(F / 24);
      return U < 7 ? `${U}d ago` : u.toLocaleDateString();
    }
    return (g, u) => (o(), y(ie, {
      status: i.value ? "synced" : void 0
    }, {
      icon: a(() => [
        f(c(i.value ? "🔗" : "🌐"), 1)
      ]),
      title: a(() => [
        t("div", Ss, [
          t("span", null, c(e.remote.name), 1),
          i.value ? (o(), s("span", Is, "DEFAULT")) : v("", !0),
          e.syncStatus ? (o(), s("span", Es, [
            e.syncStatus.ahead > 0 ? (o(), s("span", Ls, "↑" + c(e.syncStatus.ahead), 1)) : v("", !0),
            e.syncStatus.behind > 0 ? (o(), s("span", zs, "↓" + c(e.syncStatus.behind), 1)) : v("", !0)
          ])) : v("", !0)
        ])
      ]),
      subtitle: a(() => [
        p.value ? (o(), s("span", Ns, " Tracking: " + c(e.trackingBranch), 1)) : v("", !0)
      ]),
      details: a(() => {
        var h;
        return [
          l(Y, { label: "Fetch:" }, {
            default: a(() => [
              l(gt, {
                url: e.remote.fetch_url
              }, null, 8, ["url"])
            ]),
            _: 1
          }),
          e.remote.push_url !== e.remote.fetch_url ? (o(), y(Y, {
            key: 0,
            label: "Push:"
          }, {
            default: a(() => [
              l(gt, {
                url: e.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : v("", !0),
          (h = e.syncStatus) != null && h.last_fetch ? (o(), y(Y, {
            key: 1,
            label: "Last Fetch:"
          }, {
            default: a(() => [
              t("span", null, c(m(e.syncStatus.last_fetch)), 1)
            ]),
            _: 1
          })) : v("", !0)
        ];
      }),
      actions: a(() => [
        l(T, {
          variant: "primary",
          size: "xs",
          loading: r.value,
          onClick: u[0] || (u[0] = (h) => g.$emit("fetch", e.remote.name))
        }, {
          default: a(() => [...u[3] || (u[3] = [
            f(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        l(T, {
          variant: "secondary",
          size: "xs",
          onClick: u[1] || (u[1] = (h) => g.$emit("edit", e.remote.name))
        }, {
          default: a(() => [...u[4] || (u[4] = [
            f(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        i.value ? v("", !0) : (o(), y(T, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: u[2] || (u[2] = (h) => g.$emit("remove", e.remote.name))
        }, {
          default: a(() => [...u[5] || (u[5] = [
            f(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["status"]));
  }
}), Ms = /* @__PURE__ */ P(Rs, [["__scopeId", "data-v-17362e45"]]), Ts = ["for"], Bs = {
  key: 0,
  class: "base-form-field-required"
}, Us = { class: "base-form-field-input" }, Vs = {
  key: 1,
  class: "base-form-field-error"
}, Ds = {
  key: 2,
  class: "base-form-field-hint"
}, Os = /* @__PURE__ */ O({
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
    const d = e, n = B(() => d.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (r, i) => (o(), s("div", {
      class: q(["base-form-field", { "full-width": e.fullWidth }])
    }, [
      e.label ? (o(), s("label", {
        key: 0,
        for: n.value,
        class: "base-form-field-label"
      }, [
        f(c(e.label) + " ", 1),
        e.required ? (o(), s("span", Bs, "*")) : v("", !0)
      ], 8, Ts)) : v("", !0),
      t("div", Us, [
        X(r.$slots, "default", {}, void 0, !0)
      ]),
      e.error ? (o(), s("span", Vs, c(e.error), 1)) : e.hint ? (o(), s("span", Ds, c(e.hint), 1)) : v("", !0)
    ], 2));
  }
}), st = /* @__PURE__ */ P(Os, [["__scopeId", "data-v-9a1cf296"]]), Ps = ["type", "value", "placeholder", "disabled"], Fs = {
  key: 0,
  class: "base-input-error"
}, Ws = /* @__PURE__ */ O({
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
    return (d, n) => (o(), s("div", {
      class: q(["base-input-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      t("input", {
        type: e.type,
        value: e.modelValue,
        placeholder: e.placeholder,
        disabled: e.disabled,
        class: q(["base-input", { error: !!e.error }]),
        onInput: n[0] || (n[0] = (r) => d.$emit("update:modelValue", r.target.value)),
        onKeyup: [
          n[1] || (n[1] = _e((r) => d.$emit("enter"), ["enter"])),
          n[2] || (n[2] = _e((r) => d.$emit("escape"), ["escape"]))
        ]
      }, null, 42, Ps),
      e.error ? (o(), s("span", Fs, c(e.error), 1)) : v("", !0)
    ], 2));
  }
}), lt = /* @__PURE__ */ P(Ws, [["__scopeId", "data-v-9ba02cdc"]]), As = { class: "remote-form" }, Gs = { class: "form-header" }, Hs = { class: "form-body" }, js = {
  key: 0,
  class: "form-error"
}, qs = { class: "form-actions" }, Ks = /* @__PURE__ */ O({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(e, { emit: d }) {
    const n = e, r = d, i = S({
      name: n.remoteName,
      fetchUrl: n.fetchUrl,
      pushUrl: n.pushUrl
    }), p = S(!1), m = S(null);
    Bt(() => [n.remoteName, n.fetchUrl, n.pushUrl], () => {
      i.value = {
        name: n.remoteName,
        fetchUrl: n.fetchUrl,
        pushUrl: n.pushUrl
      };
    });
    const g = B(() => i.value.name.trim() !== "" && i.value.fetchUrl.trim() !== "");
    async function u() {
      if (!(!g.value || p.value)) {
        m.value = null, p.value = !0;
        try {
          r("submit", i.value);
        } catch (h) {
          m.value = h instanceof Error ? h.message : "Failed to submit form";
        } finally {
          p.value = !1;
        }
      }
    }
    return (h, L) => (o(), s("div", As, [
      t("div", Gs, [
        l(Ue, null, {
          default: a(() => [
            f(c(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      t("div", Hs, [
        l(st, {
          label: "Remote Name",
          required: ""
        }, {
          default: a(() => [
            l(lt, {
              modelValue: i.value.name,
              "onUpdate:modelValue": L[0] || (L[0] = (E) => i.value.name = E),
              disabled: e.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        l(st, {
          label: "Fetch URL",
          required: ""
        }, {
          default: a(() => [
            l(lt, {
              modelValue: i.value.fetchUrl,
              "onUpdate:modelValue": L[1] || (L[1] = (E) => i.value.fetchUrl = E),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        l(st, { label: "Push URL (optional)" }, {
          default: a(() => [
            l(lt, {
              modelValue: i.value.pushUrl,
              "onUpdate:modelValue": L[2] || (L[2] = (E) => i.value.pushUrl = E),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        m.value ? (o(), s("div", js, c(m.value), 1)) : v("", !0)
      ]),
      t("div", qs, [
        l(T, {
          variant: "primary",
          size: "md",
          disabled: !g.value,
          loading: p.value,
          onClick: u
        }, {
          default: a(() => [
            f(c(e.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        l(T, {
          variant: "ghost",
          size: "md",
          onClick: L[3] || (L[3] = (E) => h.$emit("cancel"))
        }, {
          default: a(() => [...L[4] || (L[4] = [
            f(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Js = /* @__PURE__ */ P(Ks, [["__scopeId", "data-v-56021b18"]]), Ys = { key: 0 }, Xs = /* @__PURE__ */ O({
  __name: "RemotesSection",
  setup(e) {
    const {
      getRemotes: d,
      addRemote: n,
      removeRemote: r,
      updateRemoteUrl: i,
      fetchRemote: p,
      getRemoteSyncStatus: m
    } = fe(), g = S([]), u = S(null), h = S({}), L = S(!1), E = S(null), F = S(""), U = S(!1), K = S(null), D = S(!1), _ = S("add"), x = S({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), V = B(() => {
      if (!F.value.trim()) return g.value;
      const R = F.value.toLowerCase();
      return g.value.filter(
        (N) => N.name.toLowerCase().includes(R) || N.fetch_url.toLowerCase().includes(R) || N.push_url.toLowerCase().includes(R)
      );
    });
    function j(R) {
      var N;
      return ((N = u.value) == null ? void 0 : N.remote) === R;
    }
    async function $() {
      L.value = !0, E.value = null;
      try {
        const R = await d();
        g.value = R.remotes, u.value = R.current_branch_tracking || null, await Promise.all(
          R.remotes.map(async (N) => {
            const G = await m(N.name);
            G && (h.value[N.name] = G);
          })
        );
      } catch (R) {
        E.value = R instanceof Error ? R.message : "Failed to load remotes";
      } finally {
        L.value = !1;
      }
    }
    function C() {
      _.value = "add", x.value = { name: "", fetchUrl: "", pushUrl: "" }, D.value = !0;
    }
    function b(R) {
      const N = g.value.find((G) => G.name === R);
      N && (_.value = "edit", x.value = {
        name: N.name,
        fetchUrl: N.fetch_url,
        pushUrl: N.push_url
      }, D.value = !0);
    }
    async function k(R) {
      try {
        _.value === "add" ? await n(R.name, R.fetchUrl) : await i(R.name, R.fetchUrl, R.pushUrl || void 0), D.value = !1, await $();
      } catch (N) {
        E.value = N instanceof Error ? N.message : "Operation failed";
      }
    }
    function w() {
      D.value = !1, x.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function z(R) {
      K.value = R;
      try {
        await p(R);
        const N = await m(R);
        N && (h.value[R] = N);
      } catch (N) {
        E.value = N instanceof Error ? N.message : "Fetch failed";
      } finally {
        K.value = null;
      }
    }
    async function W(R) {
      if (confirm(`Remove remote "${R}"?`))
        try {
          await r(R), await $();
        } catch (N) {
          E.value = N instanceof Error ? N.message : "Failed to remove remote";
        }
    }
    function le() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    return ce($), (R, N) => (o(), s(H, null, [
      l(me, null, {
        header: a(() => [
          l(ve, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: N[0] || (N[0] = (G) => U.value = !0)
          }, {
            actions: a(() => [
              D.value ? v("", !0) : (o(), y(T, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: C
              }, {
                default: a(() => [...N[3] || (N[3] = [
                  f(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: a(() => [
          D.value ? v("", !0) : (o(), y(Pe, {
            key: 0,
            modelValue: F.value,
            "onUpdate:modelValue": N[1] || (N[1] = (G) => F.value = G),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: a(() => [
          L.value ? (o(), y(Ce, {
            key: 0,
            message: "Loading remotes..."
          })) : E.value ? (o(), y(xe, {
            key: 1,
            message: E.value,
            retry: !0,
            onRetry: $
          }, null, 8, ["message"])) : (o(), s(H, { key: 2 }, [
            D.value ? (o(), y(Js, {
              key: 0,
              mode: _.value,
              "remote-name": x.value.name,
              "fetch-url": x.value.fetchUrl,
              "push-url": x.value.pushUrl,
              onSubmit: k,
              onCancel: w
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : v("", !0),
            g.value.length && !D.value ? (o(), y(Ne, {
              key: 1,
              variant: "compact"
            }, {
              default: a(() => [
                f(" Total: " + c(g.value.length) + " remote" + c(g.value.length !== 1 ? "s" : "") + " ", 1),
                u.value ? (o(), s("span", Ys, " • Tracking: " + c(u.value.remote) + "/" + c(u.value.branch), 1)) : v("", !0)
              ]),
              _: 1
            })) : v("", !0),
            V.value.length && !D.value ? (o(), y(ae, {
              key: 2,
              title: "REMOTES",
              count: V.value.length
            }, {
              default: a(() => [
                (o(!0), s(H, null, J(V.value, (G) => {
                  var pe;
                  return o(), y(Ms, {
                    key: G.name,
                    remote: G,
                    "sync-status": h.value[G.name],
                    "tracking-branch": j(G.name) ? (pe = u.value) == null ? void 0 : pe.branch : void 0,
                    "fetching-remote": K.value,
                    onFetch: z,
                    onEdit: b,
                    onRemove: W
                  }, null, 8, ["remote", "sync-status", "tracking-branch", "fetching-remote"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["count"])) : v("", !0),
            !V.value.length && !D.value ? (o(), y(he, {
              key: 3,
              icon: "🌐",
              message: F.value ? `No remotes match '${F.value}'` : "No remotes configured."
            }, {
              actions: a(() => [
                l(T, {
                  variant: "primary",
                  onClick: C
                }, {
                  default: a(() => [...N[4] || (N[4] = [
                    f(" Add Your First Remote ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["message"])) : v("", !0)
          ], 64))
        ]),
        _: 1
      }),
      l(Re, {
        show: U.value,
        title: "About Git Remotes",
        onClose: N[2] || (N[2] = (G) => U.value = !1)
      }, {
        content: a(() => [...N[5] || (N[5] = [
          t("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          t("p", null, [
            f(" The "),
            t("strong", null, '"origin"'),
            f(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: a(() => [
          l(T, {
            variant: "link",
            onClick: le
          }, {
            default: a(() => [...N[6] || (N[6] = [
              f(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Qs = /* @__PURE__ */ P(Xs, [["__scopeId", "data-v-a75719bb"]]), Zs = { class: "setting-info" }, el = { class: "setting-label" }, tl = {
  key: 0,
  class: "required-marker"
}, ol = {
  key: 0,
  class: "setting-description"
}, al = { class: "setting-control" }, nl = /* @__PURE__ */ O({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (d, n) => (o(), s("div", {
      class: q(["setting-row", { disabled: e.disabled }])
    }, [
      t("div", Zs, [
        t("div", el, [
          f(c(e.label) + " ", 1),
          e.required ? (o(), s("span", tl, "*")) : v("", !0)
        ]),
        e.description ? (o(), s("div", ol, c(e.description), 1)) : v("", !0)
      ]),
      t("div", al, [
        X(d.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), oe = /* @__PURE__ */ P(nl, [["__scopeId", "data-v-cb5d236c"]]), sl = { class: "toggle" }, ll = ["checked", "disabled"], rl = /* @__PURE__ */ O({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (d, n) => (o(), s("label", sl, [
      t("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: n[0] || (n[0] = (r) => d.$emit("update:modelValue", r.target.checked)),
        class: "toggle-input"
      }, null, 40, ll),
      n[1] || (n[1] = t("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), de = /* @__PURE__ */ P(rl, [["__scopeId", "data-v-71c0f550"]]), il = { class: "settings-section" }, cl = { class: "settings-section" }, dl = { class: "settings-section" }, ul = { class: "settings-section" }, ml = { class: "settings-section" }, vl = { class: "settings-section" }, fl = /* @__PURE__ */ O({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const d = S(!1), n = S(null), r = S(null), i = S({
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
    }), p = S(null), m = B(() => p.value ? JSON.stringify(i.value) !== JSON.stringify(p.value) : !1), g = [
      { label: "15 minutes", value: 15 },
      { label: "30 minutes", value: 30 },
      { label: "1 hour", value: 60 },
      { label: "2 hours", value: 120 },
      { label: "Manual only", value: 0 }
    ], u = [
      { label: "Latest", value: "latest" },
      { label: "Stable", value: "stable" },
      { label: "v0.2.0", value: "v0.2.0" },
      { label: "v0.1.0", value: "v0.1.0" }
    ], h = [
      { label: "Python 3.11", value: "3.11" },
      { label: "Python 3.10", value: "3.10" },
      { label: "Python 3.9", value: "3.9" }
    ], L = [
      { label: "Comfy (Default)", value: "comfy" },
      { label: "Terminal", value: "terminal" },
      { label: "Dark", value: "dark" }
    ], E = [
      { label: "25", value: 25 },
      { label: "50", value: 50 },
      { label: "100", value: 100 },
      { label: "200", value: 200 }
    ], F = [
      { label: "1 minute", value: 60 },
      { label: "5 minutes", value: 300 },
      { label: "10 minutes", value: 600 },
      { label: "No cache", value: 0 }
    ];
    async function U() {
      d.value = !0, n.value = null;
      try {
        await new Promise((_) => setTimeout(_, 500)), p.value = JSON.parse(JSON.stringify(i.value));
      } catch (_) {
        n.value = _ instanceof Error ? _.message : "Failed to load settings";
      } finally {
        d.value = !1;
      }
    }
    async function K() {
      r.value = null;
      try {
        await new Promise((_) => setTimeout(_, 300)), p.value = JSON.parse(JSON.stringify(i.value)), r.value = { type: "success", message: "Settings saved successfully" }, setTimeout(() => {
          r.value = null;
        }, 3e3);
      } catch (_) {
        r.value = {
          type: "error",
          message: _ instanceof Error ? _.message : "Failed to save settings"
        };
      }
    }
    function D() {
      p.value && (i.value = JSON.parse(JSON.stringify(p.value)), r.value = null);
    }
    return ce(U), (_, x) => (o(), y(me, null, {
      header: a(() => [
        l(ve, { title: "WORKSPACE SETTINGS" }, {
          actions: a(() => [
            l(T, {
              variant: "primary",
              size: "sm",
              disabled: !m.value,
              onClick: K
            }, {
              default: a(() => [...x[19] || (x[19] = [
                f(" Save Changes ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            m.value ? (o(), y(T, {
              key: 0,
              variant: "ghost",
              size: "sm",
              onClick: D
            }, {
              default: a(() => [...x[20] || (x[20] = [
                f(" Reset ", -1)
              ])]),
              _: 1
            })) : v("", !0)
          ]),
          _: 1
        })
      ]),
      content: a(() => [
        d.value ? (o(), y(Ce, {
          key: 0,
          message: "Loading workspace settings..."
        })) : n.value ? (o(), y(xe, {
          key: 1,
          message: n.value,
          retry: !0,
          onRetry: U
        }, null, 8, ["message"])) : (o(), s(H, { key: 2 }, [
          l(ae, { title: "GIT CONFIGURATION" }, {
            default: a(() => [
              t("div", il, [
                l(oe, {
                  label: "User Name",
                  description: "Your name for git commits",
                  required: ""
                }, {
                  default: a(() => [
                    l(Ve, {
                      modelValue: i.value.git.userName,
                      "onUpdate:modelValue": x[0] || (x[0] = (V) => i.value.git.userName = V),
                      placeholder: "John Doe",
                      style: { minWidth: "250px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(oe, {
                  label: "User Email",
                  description: "Your email for git commits",
                  required: ""
                }, {
                  default: a(() => [
                    l(Ve, {
                      modelValue: i.value.git.userEmail,
                      "onUpdate:modelValue": x[1] || (x[1] = (V) => i.value.git.userEmail = V),
                      placeholder: "john@example.com",
                      style: { minWidth: "250px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(oe, {
                  label: "Default Branch",
                  description: "Default branch name for new environments"
                }, {
                  default: a(() => [
                    l(Ve, {
                      modelValue: i.value.git.defaultBranch,
                      "onUpdate:modelValue": x[2] || (x[2] = (V) => i.value.git.defaultBranch = V),
                      placeholder: "main",
                      style: { minWidth: "150px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(oe, {
                  label: "Auto Commit",
                  description: "Automatically commit workflow changes"
                }, {
                  default: a(() => [
                    l(de, {
                      modelValue: i.value.git.autoCommit,
                      "onUpdate:modelValue": x[3] || (x[3] = (V) => i.value.git.autoCommit = V)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          l(ae, { title: "WORKSPACE PATHS" }, {
            default: a(() => [
              t("div", cl, [
                l(oe, {
                  label: "Workspace Root",
                  description: "Root directory of this workspace (read-only)"
                }, {
                  default: a(() => [
                    l(De, {
                      mono: "",
                      truncate: ""
                    }, {
                      default: a(() => [
                        f(c(i.value.paths.workspaceRoot), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                l(oe, {
                  label: "Environments Directory",
                  description: "Where environment folders are stored"
                }, {
                  default: a(() => [
                    l(De, {
                      mono: "",
                      truncate: ""
                    }, {
                      default: a(() => [
                        f(c(i.value.paths.environmentsDir), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                l(oe, {
                  label: "Models Directory",
                  description: "Where model files are indexed"
                }, {
                  default: a(() => [
                    l(De, {
                      mono: "",
                      truncate: ""
                    }, {
                      default: a(() => [
                        f(c(i.value.paths.modelsDir), 1)
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
          l(ae, { title: "MODEL INDEX" }, {
            default: a(() => [
              t("div", dl, [
                l(oe, {
                  label: "Auto-Index Models",
                  description: "Automatically scan and index model files"
                }, {
                  default: a(() => [
                    l(de, {
                      modelValue: i.value.modelIndex.autoIndex,
                      "onUpdate:modelValue": x[4] || (x[4] = (V) => i.value.modelIndex.autoIndex = V)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(oe, {
                  label: "Index on Startup",
                  description: "Run model indexing when ComfyUI starts",
                  disabled: !i.value.modelIndex.autoIndex
                }, {
                  default: a(() => [
                    l(de, {
                      modelValue: i.value.modelIndex.indexOnStartup,
                      "onUpdate:modelValue": x[5] || (x[5] = (V) => i.value.modelIndex.indexOnStartup = V),
                      disabled: !i.value.modelIndex.autoIndex
                    }, null, 8, ["modelValue", "disabled"])
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                l(oe, {
                  label: "Scan Interval",
                  description: "How often to check for new models (minutes)",
                  disabled: !i.value.modelIndex.autoIndex
                }, {
                  default: a(() => [
                    l(Be, {
                      modelValue: i.value.modelIndex.scanInterval,
                      "onUpdate:modelValue": x[6] || (x[6] = (V) => i.value.modelIndex.scanInterval = V),
                      options: g,
                      disabled: !i.value.modelIndex.autoIndex,
                      style: { minWidth: "120px" }
                    }, null, 8, ["modelValue", "disabled"])
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                l(oe, {
                  label: "Deep Scan",
                  description: "Use SHA256 hashing for model verification (slower)"
                }, {
                  default: a(() => [
                    l(de, {
                      modelValue: i.value.modelIndex.deepScan,
                      "onUpdate:modelValue": x[7] || (x[7] = (V) => i.value.modelIndex.deepScan = V)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          l(ae, { title: "ENVIRONMENT DEFAULTS" }, {
            default: a(() => [
              t("div", ul, [
                l(oe, {
                  label: "ComfyUI Version",
                  description: "Default ComfyUI version for new environments"
                }, {
                  default: a(() => [
                    l(Be, {
                      modelValue: i.value.environment.defaultComfyUIVersion,
                      "onUpdate:modelValue": x[8] || (x[8] = (V) => i.value.environment.defaultComfyUIVersion = V),
                      options: u,
                      placeholder: "Select version...",
                      style: { minWidth: "150px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(oe, {
                  label: "Python Version",
                  description: "Python version for new virtual environments"
                }, {
                  default: a(() => [
                    l(Be, {
                      modelValue: i.value.environment.pythonVersion,
                      "onUpdate:modelValue": x[9] || (x[9] = (V) => i.value.environment.pythonVersion = V),
                      options: h,
                      style: { minWidth: "120px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(oe, {
                  label: "Auto Create Virtualenv",
                  description: "Automatically create Python virtual environment"
                }, {
                  default: a(() => [
                    l(de, {
                      modelValue: i.value.environment.autoCreateVenv,
                      "onUpdate:modelValue": x[10] || (x[10] = (V) => i.value.environment.autoCreateVenv = V)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(oe, {
                  label: "Install Dependencies",
                  description: "Auto-install requirements.txt on environment creation"
                }, {
                  default: a(() => [
                    l(de, {
                      modelValue: i.value.environment.autoInstallDeps,
                      "onUpdate:modelValue": x[11] || (x[11] = (V) => i.value.environment.autoInstallDeps = V)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          l(ae, { title: "UI PREFERENCES" }, {
            default: a(() => [
              t("div", ml, [
                l(oe, {
                  label: "Theme",
                  description: "Visual theme for the ComfyGit panel"
                }, {
                  default: a(() => [
                    l(Be, {
                      modelValue: i.value.ui.theme,
                      "onUpdate:modelValue": x[12] || (x[12] = (V) => i.value.ui.theme = V),
                      options: L,
                      style: { minWidth: "150px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(oe, {
                  label: "Compact Mode",
                  description: "Use smaller spacing and fonts"
                }, {
                  default: a(() => [
                    l(de, {
                      modelValue: i.value.ui.compactMode,
                      "onUpdate:modelValue": x[13] || (x[13] = (V) => i.value.ui.compactMode = V)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(oe, {
                  label: "Show File Extensions",
                  description: "Display file extensions in workflow lists"
                }, {
                  default: a(() => [
                    l(de, {
                      modelValue: i.value.ui.showFileExtensions,
                      "onUpdate:modelValue": x[14] || (x[14] = (V) => i.value.ui.showFileExtensions = V)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(oe, {
                  label: "Confirm Destructive Actions",
                  description: "Show confirmation dialogs for destructive operations"
                }, {
                  default: a(() => [
                    l(de, {
                      modelValue: i.value.ui.confirmDestructive,
                      "onUpdate:modelValue": x[15] || (x[15] = (V) => i.value.ui.confirmDestructive = V)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          l(ae, { title: "ADVANCED" }, {
            default: a(() => [
              t("div", vl, [
                l(oe, {
                  label: "Debug Mode",
                  description: "Enable debug logging and verbose output"
                }, {
                  default: a(() => [
                    l(de, {
                      modelValue: i.value.advanced.debugMode,
                      "onUpdate:modelValue": x[16] || (x[16] = (V) => i.value.advanced.debugMode = V)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(oe, {
                  label: "Max History Items",
                  description: "Maximum number of commits to show in history"
                }, {
                  default: a(() => [
                    l(Be, {
                      modelValue: i.value.advanced.maxHistoryItems,
                      "onUpdate:modelValue": x[17] || (x[17] = (V) => i.value.advanced.maxHistoryItems = V),
                      options: E,
                      style: { minWidth: "100px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                l(oe, {
                  label: "Cache Duration",
                  description: "How long to cache API responses (seconds)"
                }, {
                  default: a(() => [
                    l(Be, {
                      modelValue: i.value.advanced.cacheDuration,
                      "onUpdate:modelValue": x[18] || (x[18] = (V) => i.value.advanced.cacheDuration = V),
                      options: F,
                      style: { minWidth: "120px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          r.value ? (o(), y(Ne, {
            key: 0,
            variant: (r.value.type === "success", "compact")
          }, {
            default: a(() => [
              t("span", {
                style: He({ color: r.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
              }, c(r.value.message), 5)
            ]),
            _: 1
          }, 8, ["variant"])) : v("", !0)
        ], 64))
      ]),
      _: 1
    }));
  }
}), gl = /* @__PURE__ */ P(fl, [["__scopeId", "data-v-74f65bd5"]]), hl = { class: "log-filter-bar" }, pl = { class: "log-filter-bar__options" }, yl = ["onClick"], bl = /* @__PURE__ */ O({
  __name: "LogFilterBar",
  props: {
    activeLevels: {}
  },
  emits: ["toggle", "clear"],
  setup(e, { emit: d }) {
    const n = e, r = d, i = ["ERROR", "WARNING", "INFO", "DEBUG"];
    function p(g) {
      return n.activeLevels.includes(g);
    }
    function m(g) {
      r("toggle", g);
    }
    return (g, u) => (o(), s("div", hl, [
      u[1] || (u[1] = t("div", { class: "log-filter-bar__label" }, "FILTER:", -1)),
      t("div", pl, [
        (o(), s(H, null, J(i, (h) => t("button", {
          key: h,
          class: q(["filter-option", { active: p(h) }]),
          onClick: (L) => m(h)
        }, c(h), 11, yl)), 64)),
        t("button", {
          class: "filter-option filter-option--clear",
          onClick: u[0] || (u[0] = (h) => g.$emit("clear"))
        }, " CLEAR ")
      ])
    ]));
  }
}), wt = /* @__PURE__ */ P(bl, [["__scopeId", "data-v-9052edf8"]]), wl = { class: "log-list" }, kl = /* @__PURE__ */ O({
  __name: "LogList",
  setup(e) {
    return (d, n) => (o(), s("div", wl, [
      X(d.$slots, "default", {}, void 0, !0)
    ]));
  }
}), kt = /* @__PURE__ */ P(kl, [["__scopeId", "data-v-0061c330"]]), $l = { class: "log-level__icon" }, _l = { class: "log-level__text" }, Cl = /* @__PURE__ */ O({
  __name: "LogLevel",
  props: {
    level: {}
  },
  setup(e) {
    const d = e, n = B(() => `log-level--${d.level.toLowerCase()}`), r = B(() => {
      switch (d.level) {
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
    return (i, p) => (o(), s("span", {
      class: q(["log-level", n.value])
    }, [
      t("span", $l, c(r.value), 1),
      t("span", _l, c(e.level), 1)
    ], 2));
  }
}), xl = /* @__PURE__ */ P(Cl, [["__scopeId", "data-v-8547c115"]]), Sl = { class: "log-item__header" }, Il = { class: "log-item__timestamp" }, El = {
  key: 0,
  class: "log-item__context"
}, Ll = { class: "log-item__message" }, zl = /* @__PURE__ */ O({
  __name: "LogItem",
  props: {
    level: {},
    timestamp: {},
    message: {},
    context: {},
    clickable: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: d }) {
    const n = e, r = B(() => `log-item--${n.level.toLowerCase()}`);
    return (i, p) => (o(), s("div", {
      class: q(["log-item", r.value, { clickable: e.clickable }]),
      onClick: p[0] || (p[0] = (m) => e.clickable && i.$emit("click"))
    }, [
      t("div", Sl, [
        l(xl, { level: e.level }, null, 8, ["level"]),
        t("span", Il, c(e.timestamp), 1),
        e.context ? (o(), s("span", El, c(e.context), 1)) : v("", !0)
      ]),
      t("div", Ll, c(e.message), 1)
    ], 2));
  }
}), $t = /* @__PURE__ */ P(zl, [["__scopeId", "data-v-adb291b1"]]), Nl = {
  key: 2,
  class: "load-more"
}, Rl = /* @__PURE__ */ O({
  __name: "WorkspaceDebugSection",
  setup(e) {
    const { getWorkspaceLogs: d } = fe(), n = S([]), r = S(!1), i = S(null), p = S(!1), m = S(["ERROR", "WARNING", "INFO", "DEBUG"]), g = S(100), u = B(() => n.value.filter(($) => $.level === "ERROR").length), h = B(() => n.value.filter(($) => $.level === "WARNING").length), L = B(() => n.value.filter(($) => $.level === "INFO").length), E = B(() => n.value.filter(($) => $.level === "DEBUG").length), F = B(() => n.value.filter(($) => m.value.includes($.level))), U = B(() => F.value.slice(0, g.value)), K = B(() => F.value.length > g.value);
    function D($) {
      const C = m.value.indexOf($);
      C >= 0 ? m.value.splice(C, 1) : m.value.push($);
    }
    function _() {
      m.value = ["ERROR", "WARNING", "INFO", "DEBUG"];
    }
    function x() {
      g.value += 100;
    }
    function V($) {
      try {
        return new Date($).toLocaleString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: !1
        });
      } catch {
        return $;
      }
    }
    async function j() {
      r.value = !0, i.value = null;
      try {
        n.value = await d(void 0, 500);
      } catch ($) {
        i.value = $ instanceof Error ? $.message : "Failed to load workspace logs";
      } finally {
        r.value = !1;
      }
    }
    return ce(j), ($, C) => (o(), s(H, null, [
      l(me, null, {
        header: a(() => [
          l(ve, {
            title: "DEBUG (WORKSPACE LOGS)",
            "show-info": !0,
            onInfoClick: C[0] || (C[0] = (b) => p.value = !0)
          })
        ]),
        content: a(() => [
          r.value ? (o(), y(Ce, {
            key: 0,
            message: "Loading workspace logs..."
          })) : i.value ? (o(), y(xe, {
            key: 1,
            message: i.value,
            retry: !0,
            onRetry: j
          }, null, 8, ["message"])) : (o(), s(H, { key: 2 }, [
            n.value.length > 0 ? (o(), y(Ne, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                f(" Total: " + c(n.value.length) + " entries • " + c(u.value) + " errors • " + c(h.value) + " warnings • " + c(L.value) + " info • " + c(E.value) + " debug ", 1)
              ]),
              _: 1
            })) : v("", !0),
            l(wt, {
              "active-levels": m.value,
              onToggle: D,
              onClear: _
            }, null, 8, ["active-levels"]),
            F.value.length > 0 ? (o(), y(kt, { key: 1 }, {
              default: a(() => [
                (o(!0), s(H, null, J(U.value, (b, k) => (o(), y($t, {
                  key: `${b.timestamp}-${k}`,
                  level: b.level,
                  timestamp: V(b.timestamp),
                  message: b.message,
                  context: b.context
                }, null, 8, ["level", "timestamp", "message", "context"]))), 128))
              ]),
              _: 1
            })) : v("", !0),
            K.value ? (o(), s("div", Nl, [
              l(T, {
                variant: "secondary",
                onClick: x
              }, {
                default: a(() => [
                  f(" Load More (" + c(F.value.length - g.value) + " remaining) ", 1)
                ]),
                _: 1
              })
            ])) : v("", !0),
            n.value.length > 0 && F.value.length === 0 ? (o(), y(he, {
              key: 3,
              icon: "🔍",
              message: "No logs match the current filters"
            })) : v("", !0),
            n.value.length === 0 ? (o(), y(he, {
              key: 4,
              icon: "📝",
              message: "No workspace logs available"
            })) : v("", !0)
          ], 64))
        ]),
        _: 1
      }),
      l(Re, {
        show: p.value,
        title: "About Workspace Logs",
        onClose: C[2] || (C[2] = (b) => p.value = !1)
      }, {
        content: a(() => [...C[3] || (C[3] = [
          t("p", null, " Workspace logs show system-level events and operations for the entire ComfyGit workspace, including operations that affect multiple environments. ", -1),
          t("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            t("strong", null, "Log Levels:"),
            t("br"),
            t("strong", null, "ERROR:"),
            f(" Critical failures requiring attention"),
            t("br"),
            t("strong", null, "WARNING:"),
            f(" Potential issues or deprecated features"),
            t("br"),
            t("strong", null, "INFO:"),
            f(" General operational information"),
            t("br"),
            t("strong", null, "DEBUG:"),
            f(" Detailed debugging information ")
          ], -1),
          t("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1)
        ])]),
        actions: a(() => [
          l(T, {
            variant: "primary",
            onClick: C[1] || (C[1] = (b) => p.value = !1)
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
}), Ml = /* @__PURE__ */ P(Rl, [["__scopeId", "data-v-55d656f1"]]), Tl = {
  key: 2,
  class: "load-more"
}, Bl = /* @__PURE__ */ O({
  __name: "DebugEnvSection",
  setup(e) {
    const { getEnvironmentLogs: d, getStatus: n } = fe(), r = S([]), i = S(!1), p = S(null), m = S(!1), g = S(["ERROR", "WARNING", "INFO", "DEBUG"]), u = S(50), h = S("production"), L = B(() => r.value.filter((k) => g.value.includes(k.level.toUpperCase()))), E = B(() => L.value.slice(0, u.value)), F = B(() => L.value.length > u.value), U = B(
      () => r.value.filter((k) => k.level.toUpperCase() === "ERROR").length
    ), K = B(
      () => r.value.filter((k) => k.level.toUpperCase() === "WARNING").length
    ), D = B(
      () => r.value.filter((k) => k.level.toUpperCase() === "INFO").length
    ), _ = B(
      () => r.value.filter((k) => k.level.toUpperCase() === "DEBUG").length
    );
    function x(k) {
      const w = g.value.indexOf(k);
      w > -1 ? g.value.splice(w, 1) : g.value.push(k);
    }
    function V() {
      g.value = ["ERROR", "WARNING", "INFO", "DEBUG"];
    }
    function j() {
      u.value += 50;
    }
    function $(k) {
      return new Date(k).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: !1
      });
    }
    function C(k) {
      if (!k) return;
      const w = Object.entries(k);
      if (w.length === 0) return;
      const [z, W] = w[0];
      return typeof W == "string" || typeof W == "number" ? `${z}: ${W}` : z;
    }
    async function b() {
      i.value = !0, p.value = null;
      try {
        r.value = await d(void 0, 200), r.value.sort((k, w) => new Date(w.timestamp).getTime() - new Date(k.timestamp).getTime());
        try {
          const k = await n();
          h.value = k.environment || "production";
        } catch {
        }
      } catch (k) {
        p.value = k instanceof Error ? k.message : "Failed to load environment logs";
      } finally {
        i.value = !1;
      }
    }
    return ce(b), (k, w) => (o(), s(H, null, [
      l(me, null, {
        header: a(() => [
          l(ve, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: w[0] || (w[0] = (z) => m.value = !0)
          })
        ]),
        content: a(() => [
          i.value ? (o(), y(Ce, {
            key: 0,
            message: "Loading environment logs..."
          })) : p.value ? (o(), y(xe, {
            key: 1,
            message: p.value,
            retry: !0,
            onRetry: b
          }, null, 8, ["message"])) : (o(), s(H, { key: 2 }, [
            r.value.length > 0 ? (o(), y(Ne, {
              key: 0,
              variant: "compact"
            }, {
              default: a(() => [
                f(" Total: " + c(r.value.length) + " entries • " + c(U.value) + " errors • " + c(K.value) + " warnings • " + c(D.value) + " info • " + c(_.value) + " debug ", 1)
              ]),
              _: 1
            })) : v("", !0),
            l(wt, {
              "active-levels": g.value,
              onToggle: x,
              onClear: V
            }, null, 8, ["active-levels"]),
            L.value.length > 0 ? (o(), y(kt, { key: 1 }, {
              default: a(() => [
                (o(!0), s(H, null, J(E.value, (z, W) => (o(), y($t, {
                  key: `${z.timestamp}-${W}`,
                  level: z.level,
                  timestamp: $(z.timestamp),
                  message: z.message,
                  context: C(z.context)
                }, null, 8, ["level", "timestamp", "message", "context"]))), 128))
              ]),
              _: 1
            })) : v("", !0),
            F.value ? (o(), s("div", Tl, [
              l(T, {
                variant: "secondary",
                onClick: j
              }, {
                default: a(() => [
                  f(" Load More (" + c(L.value.length - u.value) + " remaining) ", 1)
                ]),
                _: 1
              })
            ])) : v("", !0),
            r.value.length > 0 && L.value.length === 0 ? (o(), y(he, {
              key: 3,
              icon: "🔍",
              message: "No logs match the current filters"
            })) : v("", !0),
            r.value.length === 0 ? (o(), y(he, {
              key: 4,
              icon: "📝",
              message: "No environment logs available"
            })) : v("", !0)
          ], 64))
        ]),
        _: 1
      }),
      l(Re, {
        show: m.value,
        title: "About Environment Logs",
        onClose: w[2] || (w[2] = (z) => m.value = !1)
      }, {
        content: a(() => [
          t("p", null, [
            w[3] || (w[3] = f(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            t("strong", null, c(h.value), 1),
            w[4] || (w[4] = f(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          w[5] || (w[5] = t("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            t("strong", null, "Log Levels:"),
            t("br"),
            t("strong", null, "ERROR:"),
            f(" Critical failures requiring attention"),
            t("br"),
            t("strong", null, "WARNING:"),
            f(" Potential issues or important notices"),
            t("br"),
            t("strong", null, "INFO:"),
            f(" General operational information"),
            t("br"),
            t("strong", null, "DEBUG:"),
            f(" Detailed debugging information ")
          ], -1)),
          w[6] || (w[6] = t("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Use the filter bar to show/hide specific log levels. ", -1))
        ]),
        actions: a(() => [
          l(T, {
            variant: "primary",
            onClick: w[1] || (w[1] = (z) => m.value = !1)
          }, {
            default: a(() => [...w[7] || (w[7] = [
              f(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Ul = /* @__PURE__ */ P(Bl, [["__scopeId", "data-v-456b4c97"]]), Vl = { class: "env-title" }, Dl = {
  key: 0,
  class: "current-badge"
}, Ol = {
  key: 0,
  class: "branch-info"
}, Pl = /* @__PURE__ */ O({
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
    return (d, n) => (o(), y(ie, {
      status: e.isCurrent ? "synced" : void 0
    }, {
      icon: a(() => [
        f(c(e.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: a(() => [
        t("div", Vl, [
          t("span", null, c(e.environmentName), 1),
          e.isCurrent && e.showCurrentLabel ? (o(), s("span", Dl, "CURRENT")) : v("", !0)
        ])
      ]),
      subtitle: a(() => [
        e.currentBranch ? (o(), s("span", Ol, [
          n[0] || (n[0] = t("span", { class: "branch-icon" }, "⎇", -1)),
          f(" " + c(e.currentBranch), 1)
        ])) : v("", !0)
      ]),
      details: a(() => [
        l(Y, {
          label: "Workflows:",
          value: String(e.workflowCount)
        }, null, 8, ["value"]),
        l(Y, {
          label: "Nodes:",
          value: String(e.nodeCount)
        }, null, 8, ["value"]),
        l(Y, {
          label: "Models:",
          value: String(e.modelCount)
        }, null, 8, ["value"]),
        e.lastUsed && e.showLastUsed ? (o(), y(Y, {
          key: 0,
          label: "Last used:",
          value: e.lastUsed
        }, null, 8, ["value"])) : v("", !0)
      ]),
      actions: a(() => [
        X(d.$slots, "actions", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["status"]));
  }
}), Fl = /* @__PURE__ */ P(Pl, [["__scopeId", "data-v-5238e57c"]]), Wl = {
  key: 0,
  class: "create-form"
}, Al = { class: "create-form__header" }, Gl = { class: "create-form__body" }, Hl = { class: "create-form__actions" }, jl = {
  width: "12",
  height: "12",
  viewBox: "0 0 16 16",
  fill: "currentColor",
  style: { color: "var(--cg-color-error)" }
}, ql = /* @__PURE__ */ O({
  __name: "EnvironmentsSection",
  emits: ["switch", "create", "delete", "viewDetails"],
  setup(e, { emit: d }) {
    const n = d, { getEnvironments: r } = fe(), i = S([]), p = S(!1), m = S(null), g = S(""), u = S(!1), h = S(!1), L = S(""), E = B(
      () => i.value.find((j) => j.is_current)
    ), F = B(() => {
      if (!g.value.trim()) return i.value;
      const j = g.value.toLowerCase();
      return i.value.filter(
        ($) => {
          var C;
          return $.name.toLowerCase().includes(j) || ((C = $.current_branch) == null ? void 0 : C.toLowerCase().includes(j));
        }
      );
    });
    function U(j) {
      if (!j) return "";
      try {
        const $ = new Date(j), b = (/* @__PURE__ */ new Date()).getTime() - $.getTime(), k = Math.floor(b / 6e4), w = Math.floor(b / 36e5), z = Math.floor(b / 864e5);
        return k < 1 ? "just now" : k < 60 ? `${k} ${k === 1 ? "minute" : "minutes"} ago` : w < 24 ? `${w} ${w === 1 ? "hour" : "hours"} ago` : z < 30 ? `${z} ${z === 1 ? "day" : "days"} ago` : $.toLocaleDateString();
      } catch {
        return j;
      }
    }
    function K() {
      const j = L.value.trim();
      j && (n("create", j), L.value = "", h.value = !1);
    }
    function D() {
      L.value = "", h.value = !1;
    }
    function _(j) {
      n("viewDetails", j);
    }
    function x(j) {
      confirm(`Delete environment "${j}"?

This action cannot be undone.`) && n("delete", j);
    }
    async function V() {
      p.value = !0, m.value = null;
      try {
        i.value = await r();
      } catch (j) {
        m.value = j instanceof Error ? j.message : "Failed to load environments";
      } finally {
        p.value = !1;
      }
    }
    return ce(V), (j, $) => {
      const C = Ut("SectionGroup");
      return o(), s(H, null, [
        l(me, null, {
          header: a(() => [
            l(ve, {
              title: "ENVIRONMENTS",
              "show-info": !0,
              onInfoClick: $[1] || ($[1] = (b) => u.value = !0)
            }, {
              actions: a(() => [
                l(T, {
                  variant: "ghost",
                  size: "sm",
                  onClick: $[0] || ($[0] = (b) => h.value = !0),
                  title: "Create new environment"
                }, {
                  default: a(() => [...$[7] || ($[7] = [
                    t("svg", {
                      width: "14",
                      height: "14",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      t("path", {
                        d: "M8 2v12M2 8h12",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        fill: "none"
                      })
                    ], -1)
                  ])]),
                  _: 1
                }),
                l(T, {
                  variant: "ghost",
                  size: "sm",
                  onClick: V,
                  title: "Refresh environments"
                }, {
                  default: a(() => [...$[8] || ($[8] = [
                    t("svg", {
                      width: "14",
                      height: "14",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      t("path", { d: "M8 2a6 6 0 0 1 6 6h-2a4 4 0 0 0-4-4V2zM2 8a6 6 0 0 0 6 6v2a8 8 0 0 1-8-8h2z" })
                    ], -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          search: a(() => [
            l(Pe, {
              modelValue: g.value,
              "onUpdate:modelValue": $[2] || ($[2] = (b) => g.value = b),
              placeholder: "🔍 Search environments..."
            }, null, 8, ["modelValue"])
          ]),
          content: a(() => [
            p.value ? (o(), y(Ce, {
              key: 0,
              message: "Loading environments..."
            })) : m.value ? (o(), y(xe, {
              key: 1,
              message: m.value,
              retry: !0,
              onRetry: V
            }, null, 8, ["message"])) : (o(), s(H, { key: 2 }, [
              h.value ? (o(), s("div", Wl, [
                t("div", Al, [
                  $[10] || ($[10] = t("span", { class: "create-form__title" }, "Create New Environment", -1)),
                  l(T, {
                    variant: "ghost",
                    size: "xs",
                    onClick: D
                  }, {
                    default: a(() => [...$[9] || ($[9] = [
                      f(" ✕ ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                t("div", Gl, [
                  l(Ve, {
                    modelValue: L.value,
                    "onUpdate:modelValue": $[3] || ($[3] = (b) => L.value = b),
                    placeholder: "Enter environment name...",
                    onKeyup: [
                      _e(K, ["enter"]),
                      _e(D, ["esc"])
                    ]
                  }, null, 8, ["modelValue"]),
                  t("div", Hl, [
                    l(T, {
                      variant: "primary",
                      size: "sm",
                      onClick: K,
                      disabled: !L.value.trim()
                    }, {
                      default: a(() => [...$[11] || ($[11] = [
                        f(" Create ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled"]),
                    l(T, {
                      variant: "secondary",
                      size: "sm",
                      onClick: D
                    }, {
                      default: a(() => [...$[12] || ($[12] = [
                        f(" Cancel ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ])
              ])) : v("", !0),
              i.value.length ? (o(), y(Ne, {
                key: 1,
                variant: "compact"
              }, {
                default: a(() => [
                  f(" Total: " + c(i.value.length) + " " + c(i.value.length === 1 ? "environment" : "environments") + " ", 1),
                  E.value ? (o(), s(H, { key: 0 }, [
                    $[13] || ($[13] = f(" • Current: ", -1)),
                    t("strong", null, c(E.value.name), 1)
                  ], 64)) : v("", !0)
                ]),
                _: 1
              })) : v("", !0),
              F.value.length ? (o(), y(C, {
                key: 2,
                title: "ENVIRONMENTS",
                count: F.value.length
              }, {
                default: a(() => [
                  (o(!0), s(H, null, J(F.value, (b) => (o(), y(Fl, {
                    key: b.name,
                    "environment-name": b.name,
                    "is-current": b.is_current,
                    "current-branch": b.current_branch,
                    "workflow-count": b.workflow_count,
                    "node-count": b.node_count,
                    "model-count": b.model_count,
                    "last-used": U(b.last_used),
                    "show-last-used": !!b.last_used
                  }, {
                    actions: a(() => [
                      b.is_current ? v("", !0) : (o(), y(T, {
                        key: 0,
                        variant: "secondary",
                        size: "sm",
                        onClick: (k) => j.$emit("switch", b.name)
                      }, {
                        default: a(() => [...$[14] || ($[14] = [
                          f(" Switch ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])),
                      l(T, {
                        variant: "ghost",
                        size: "sm",
                        onClick: (k) => _(b.name),
                        title: "View environment details"
                      }, {
                        default: a(() => [...$[15] || ($[15] = [
                          t("svg", {
                            width: "12",
                            height: "12",
                            viewBox: "0 0 16 16",
                            fill: "currentColor"
                          }, [
                            t("path", { d: "M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" }),
                            t("path", { d: "M1.5 8a6.5 6.5 0 0 1 13 0 6.5 6.5 0 0 1-13 0zM8 3.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9z" })
                          ], -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"]),
                      !b.is_current && i.value.length > 1 ? (o(), y(T, {
                        key: 1,
                        variant: "ghost",
                        size: "sm",
                        onClick: (k) => x(b.name),
                        title: "Delete environment"
                      }, {
                        default: a(() => [
                          (o(), s("svg", jl, [...$[16] || ($[16] = [
                            t("path", { d: "M3 4h10l-1 10H4L3 4zm4-2h2v1H7V2zM5 6v6h1V6H5zm3 0v6h1V6H8zm3 0v6h1V6h-1z" }, null, -1)
                          ])]))
                        ]),
                        _: 1
                      }, 8, ["onClick"])) : v("", !0)
                    ]),
                    _: 2
                  }, 1032, ["environment-name", "is-current", "current-branch", "workflow-count", "node-count", "model-count", "last-used", "show-last-used"]))), 128))
                ]),
                _: 1
              }, 8, ["count"])) : v("", !0),
              F.value.length ? v("", !0) : (o(), y(he, {
                key: 3,
                icon: "🌍",
                message: g.value ? `No environments match '${g.value}'` : "No environments found. Create one to get started!"
              }, ht({ _: 2 }, [
                g.value ? void 0 : {
                  name: "actions",
                  fn: a(() => [
                    l(T, {
                      variant: "primary",
                      onClick: $[4] || ($[4] = (b) => h.value = !0)
                    }, {
                      default: a(() => [...$[17] || ($[17] = [
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
        l(Re, {
          show: u.value,
          title: "About Environments",
          onClose: $[6] || ($[6] = (b) => u.value = !1)
        }, {
          content: a(() => [...$[18] || ($[18] = [
            t("p", null, [
              t("strong", null, "Environments"),
              f(" are isolated workspaces that contain their own workflows, nodes, and models. Each environment can track different branches and maintain separate state. ")
            ], -1),
            t("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
              t("strong", null, "Use cases:")
            ], -1),
            t("ul", { style: { "margin-top": "var(--cg-space-1)", "padding-left": "var(--cg-space-4)" } }, [
              t("li", null, "Separate production and development workflows"),
              t("li", null, "Test different node configurations"),
              t("li", null, "Experiment with new models safely"),
              t("li", null, "Maintain multiple project versions")
            ], -1)
          ])]),
          actions: a(() => [
            l(T, {
              variant: "secondary",
              onClick: $[5] || ($[5] = (b) => u.value = !1)
            }, {
              default: a(() => [...$[19] || ($[19] = [
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
}), Kl = /* @__PURE__ */ P(ql, [["__scopeId", "data-v-97d6527d"]]), Jl = { class: "file-path" }, Yl = { class: "file-path-text" }, Xl = ["title"], Ql = /* @__PURE__ */ O({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(e) {
    const d = e, n = S(!1);
    async function r() {
      try {
        await navigator.clipboard.writeText(d.path), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (i) {
        console.error("Failed to copy:", i);
      }
    }
    return (i, p) => (o(), s("div", Jl, [
      p[0] || (p[0] = t("span", { class: "file-path-icon" }, "📄", -1)),
      t("code", Yl, c(e.path), 1),
      e.copyable ? (o(), s("button", {
        key: 0,
        class: "copy-btn",
        title: n.value ? "Copied!" : "Copy path",
        onClick: r
      }, c(n.value ? "✓" : "📋"), 9, Xl)) : v("", !0)
    ]));
  }
}), Zl = /* @__PURE__ */ P(Ql, [["__scopeId", "data-v-f0982173"]]), er = { class: "output-path-input" }, tr = { class: "export-actions" }, or = {
  key: 1,
  class: "export-warning"
}, ar = /* @__PURE__ */ O({
  __name: "ExportSection",
  setup(e) {
    const { exportEnv: d } = fe(), n = S(""), r = S(!1), i = S(null), p = S(!1);
    async function m() {
      r.value = !0, i.value = null;
      try {
        const u = await d(n.value || void 0);
        i.value = u;
      } catch (u) {
        i.value = {
          status: "error",
          message: u instanceof Error ? u.message : "Unknown error occurred"
        };
      } finally {
        r.value = !1;
      }
    }
    async function g() {
      var u;
      if ((u = i.value) != null && u.path)
        try {
          await navigator.clipboard.writeText(i.value.path);
        } catch (h) {
          console.error("Failed to copy path:", h);
        }
    }
    return (u, h) => (o(), s(H, null, [
      l(me, null, {
        header: a(() => [
          l(ve, { title: "EXPORT ENVIRONMENT" }, {
            actions: a(() => [
              l(T, {
                variant: "ghost",
                size: "sm",
                onClick: h[0] || (h[0] = (L) => p.value = !0),
                title: "About exporting"
              }, {
                default: a(() => [...h[5] || (h[5] = [
                  t("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    t("path", { d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" }),
                    t("path", { d: "m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" })
                  ], -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        content: a(() => [
          l(ae, { title: "WHAT WILL BE EXPORTED" }, {
            default: a(() => [
              l(ie, { status: "synced" }, {
                icon: a(() => [...h[6] || (h[6] = [
                  f("📦", -1)
                ])]),
                title: a(() => [...h[7] || (h[7] = [
                  f("Environment Snapshot", -1)
                ])]),
                subtitle: a(() => [...h[8] || (h[8] = [
                  f(" Creates a complete snapshot of your current environment including workflows, custom nodes, and model references. ", -1)
                ])]),
                details: a(() => [
                  l(Y, {
                    label: "Workflows",
                    value: "All workflows in this environment"
                  }),
                  l(Y, {
                    label: "Custom Nodes",
                    value: "Node definitions and dependencies"
                  }),
                  l(Y, {
                    label: "Models",
                    value: "Model references (not files)"
                  }),
                  l(Y, {
                    label: "Configuration",
                    value: "Environment settings and metadata"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          l(ae, { title: "EXPORT OPTIONS" }, {
            default: a(() => [
              l(ie, { status: "synced" }, {
                icon: a(() => [...h[9] || (h[9] = [
                  f("📁", -1)
                ])]),
                title: a(() => [...h[10] || (h[10] = [
                  f("Output Destination", -1)
                ])]),
                subtitle: a(() => [...h[11] || (h[11] = [
                  f(" Specify where the export bundle should be saved, or leave empty for default location. ", -1)
                ])]),
                details: a(() => [
                  t("div", er, [
                    l(Ve, {
                      modelValue: n.value,
                      "onUpdate:modelValue": h[1] || (h[1] = (L) => n.value = L),
                      placeholder: "/path/to/export/bundle.tar.gz"
                    }, null, 8, ["modelValue"])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          l(ae, { title: "EXPORT" }, {
            default: a(() => [
              t("div", tr, [
                l(T, {
                  variant: "primary",
                  size: "md",
                  loading: r.value,
                  disabled: r.value,
                  onClick: m
                }, {
                  default: a(() => [
                    h[12] || (h[12] = t("svg", {
                      width: "16",
                      height: "16",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      t("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                      t("path", { d: "M14 14H2v-2h12v2z" })
                    ], -1)),
                    f(" " + c(r.value ? "Exporting..." : "Export Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"]),
                n.value ? (o(), y(T, {
                  key: 0,
                  variant: "secondary",
                  size: "md",
                  disabled: r.value,
                  onClick: h[2] || (h[2] = (L) => n.value = "")
                }, {
                  default: a(() => [...h[13] || (h[13] = [
                    f(" Clear Path ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])) : v("", !0)
              ])
            ]),
            _: 1
          }),
          i.value ? (o(), y(ae, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: a(() => [
              l(ie, {
                status: i.value.status === "success" ? "synced" : "broken"
              }, ht({
                icon: a(() => [
                  f(c(i.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: a(() => [
                  f(c(i.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: a(() => [
                  f(c(i.value.status === "success" ? "Your environment has been exported" : i.value.message), 1)
                ]),
                _: 2
              }, [
                i.value.status === "success" ? {
                  name: "details",
                  fn: a(() => [
                    l(Y, { label: "Saved to:" }, {
                      default: a(() => [
                        l(Zl, {
                          path: i.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    i.value.models_without_sources !== void 0 ? (o(), y(Y, {
                      key: 0,
                      label: "Models without sources:",
                      value: i.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : v("", !0),
                    i.value.models_without_sources && i.value.models_without_sources > 0 ? (o(), s("div", or, [...h[14] || (h[14] = [
                      t("span", { class: "warning-icon" }, "!", -1),
                      t("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : v("", !0)
                  ]),
                  key: "0"
                } : void 0,
                i.value.status === "success" ? {
                  name: "actions",
                  fn: a(() => [
                    l(T, {
                      variant: "secondary",
                      size: "sm",
                      onClick: g
                    }, {
                      default: a(() => [...h[15] || (h[15] = [
                        f(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    l(T, {
                      variant: "ghost",
                      size: "sm",
                      onClick: h[3] || (h[3] = (L) => i.value = null)
                    }, {
                      default: a(() => [...h[16] || (h[16] = [
                        f(" Dismiss ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  key: "1"
                } : void 0
              ]), 1032, ["status"])
            ]),
            _: 1
          })) : v("", !0)
        ]),
        _: 1
      }),
      l(Re, {
        show: p.value,
        title: "About Environment Export",
        onClose: h[4] || (h[4] = (L) => p.value = !1)
      }, {
        content: a(() => [...h[17] || (h[17] = [
          t("p", null, " Exporting creates a portable bundle of your environment that can be: ", -1),
          t("ul", null, [
            t("li", null, "Shared with collaborators"),
            t("li", null, "Backed up for safekeeping"),
            t("li", null, "Imported into other ComfyGit workspaces"),
            t("li", null, "Version controlled separately")
          ], -1),
          t("p", null, [
            t("strong", null, "Note:"),
            f(" Model files themselves are not included in the export, only their references and source information. This keeps export bundles small and portable. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), nr = /* @__PURE__ */ P(ar, [["__scopeId", "data-v-1777a9d5"]]), sr = { class: "file-input-wrapper" }, lr = ["accept", "multiple", "disabled"], rr = /* @__PURE__ */ O({
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
  setup(e, { expose: d, emit: n }) {
    const r = n, i = S(null);
    function p() {
      var g;
      (g = i.value) == null || g.click();
    }
    function m(g) {
      const u = g.target;
      u.files && u.files.length > 0 && (r("change", u.files), u.value = "");
    }
    return d({
      triggerInput: p
    }), (g, u) => (o(), s("div", sr, [
      t("input", {
        ref_key: "fileInputRef",
        ref: i,
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        disabled: e.disabled,
        class: "file-input-hidden",
        onChange: m
      }, null, 40, lr),
      l(T, {
        variant: e.variant,
        size: e.size,
        disabled: e.disabled,
        onClick: p
      }, {
        default: a(() => [
          X(g.$slots, "default", {}, () => [
            u[0] || (u[0] = t("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              t("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              t("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            f(" " + c(e.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), ir = /* @__PURE__ */ P(rr, [["__scopeId", "data-v-cd192091"]]), cr = {
  key: 0,
  class: "drop-zone-empty"
}, dr = { class: "drop-zone-text" }, ur = { class: "drop-zone-primary" }, mr = { class: "drop-zone-secondary" }, vr = { class: "drop-zone-actions" }, fr = {
  key: 1,
  class: "drop-zone-file"
}, gr = { class: "file-info" }, hr = { class: "file-details" }, pr = { class: "file-name" }, yr = { class: "file-size" }, br = /* @__PURE__ */ O({
  __name: "FileDropZone",
  props: {
    accept: { default: "*/*" },
    multiple: { type: Boolean, default: !1 },
    primaryText: { default: "Drag & drop file here" },
    secondaryText: { default: "or click to browse" },
    buttonText: { default: "Browse Files" }
  },
  emits: ["fileSelected", "clear"],
  setup(e, { emit: d }) {
    const n = d, r = S(!1), i = S(null), p = S(0), m = B(() => i.value !== null), g = B(() => {
      var _;
      return ((_ = i.value) == null ? void 0 : _.name) || "";
    }), u = B(() => {
      if (!i.value) return "";
      const _ = i.value.size;
      return _ < 1024 ? `${_} B` : _ < 1024 * 1024 ? `${(_ / 1024).toFixed(1)} KB` : _ < 1024 * 1024 * 1024 ? `${(_ / (1024 * 1024)).toFixed(1)} MB` : `${(_ / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function h(_) {
      var x;
      p.value++, (x = _.dataTransfer) != null && x.types.includes("Files") && (r.value = !0);
    }
    function L(_) {
      _.dataTransfer && (_.dataTransfer.dropEffect = "copy");
    }
    function E() {
      p.value--, p.value === 0 && (r.value = !1);
    }
    function F(_) {
      var V;
      p.value = 0, r.value = !1;
      const x = (V = _.dataTransfer) == null ? void 0 : V.files;
      x && x.length > 0 && K(x[0]);
    }
    function U(_) {
      _.length > 0 && K(_[0]);
    }
    function K(_) {
      i.value = _, n("fileSelected", _);
    }
    function D() {
      i.value = null, n("clear");
    }
    return (_, x) => (o(), s("div", {
      class: q(["file-drop-zone", { "drop-active": r.value, "has-file": m.value }]),
      onDragenter: ke(h, ["prevent"]),
      onDragover: ke(L, ["prevent"]),
      onDragleave: ke(E, ["prevent"]),
      onDrop: ke(F, ["prevent"])
    }, [
      m.value ? (o(), s("div", fr, [
        t("div", gr, [
          x[1] || (x[1] = t("div", { class: "file-icon" }, "📦", -1)),
          t("div", hr, [
            t("div", pr, c(g.value), 1),
            t("div", yr, c(u.value), 1)
          ])
        ]),
        l(T, {
          variant: "ghost",
          size: "xs",
          onClick: D,
          title: "Remove file"
        }, {
          default: a(() => [...x[2] || (x[2] = [
            t("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              t("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
            ], -1)
          ])]),
          _: 1
        })
      ])) : (o(), s("div", cr, [
        x[0] || (x[0] = t("div", { class: "drop-zone-icon" }, [
          t("svg", {
            width: "48",
            height: "48",
            viewBox: "0 0 16 16",
            fill: "currentColor"
          }, [
            t("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
            t("path", { d: "M2 14h12v-2H2v2z" })
          ])
        ], -1)),
        t("div", dr, [
          t("p", ur, c(e.primaryText), 1),
          t("p", mr, c(e.secondaryText), 1)
        ]),
        t("div", vr, [
          l(ir, {
            accept: e.accept,
            multiple: e.multiple,
            variant: "primary",
            size: "md",
            onChange: U
          }, {
            default: a(() => [
              f(c(e.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), wr = /* @__PURE__ */ P(br, [["__scopeId", "data-v-e00abbca"]]), kr = { class: "import-preview" }, $r = { class: "preview-header" }, _r = {
  key: 0,
  class: "source-env"
}, Cr = { class: "preview-content" }, xr = { class: "preview-section" }, Sr = { class: "section-header" }, Ir = { class: "section-info" }, Er = { class: "section-count" }, Lr = {
  key: 0,
  class: "item-list"
}, zr = { class: "item-name" }, Nr = {
  key: 0,
  class: "item-more"
}, Rr = { class: "preview-section" }, Mr = { class: "section-header" }, Tr = { class: "section-info" }, Br = { class: "section-count" }, Ur = {
  key: 0,
  class: "item-list"
}, Vr = { class: "item-details" }, Dr = { class: "item-name" }, Or = { class: "item-meta" }, Pr = {
  key: 0,
  class: "item-more"
}, Fr = { class: "preview-section" }, Wr = { class: "section-header" }, Ar = { class: "section-info" }, Gr = { class: "section-count" }, Hr = {
  key: 0,
  class: "item-list"
}, jr = { class: "item-name" }, qr = {
  key: 0,
  class: "item-more"
}, Kr = {
  key: 0,
  class: "preview-section"
}, Jr = { class: "git-info" }, Yr = /* @__PURE__ */ O({
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
  setup(e) {
    const d = e, n = B(() => d.workflows.length), r = B(() => d.models.length), i = B(() => d.nodes.length);
    function p(m) {
      return m < 1024 ? `${m} B` : m < 1024 * 1024 ? `${(m / 1024).toFixed(1)} KB` : m < 1024 * 1024 * 1024 ? `${(m / (1024 * 1024)).toFixed(1)} MB` : `${(m / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (m, g) => (o(), s("div", kr, [
      t("div", $r, [
        l(Ue, null, {
          default: a(() => [...g[0] || (g[0] = [
            f("Import Preview", -1)
          ])]),
          _: 1
        }),
        e.sourceEnvironment ? (o(), s("span", _r, [
          g[1] || (g[1] = f(" From: ", -1)),
          l(De, null, {
            default: a(() => [
              f(c(e.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : v("", !0)
      ]),
      t("div", Cr, [
        t("div", xr, [
          t("div", Sr, [
            g[3] || (g[3] = t("div", { class: "section-icon" }, "📄", -1)),
            t("div", Ir, [
              g[2] || (g[2] = t("div", { class: "section-title" }, "Workflows", -1)),
              t("div", Er, c(n.value) + " file" + c(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.workflows.length > 0 ? (o(), s("div", Lr, [
            (o(!0), s(H, null, J(e.workflows.slice(0, e.maxPreviewItems), (u) => (o(), s("div", {
              key: u,
              class: "preview-item"
            }, [
              g[4] || (g[4] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", zr, c(u), 1)
            ]))), 128)),
            e.workflows.length > e.maxPreviewItems ? (o(), s("div", Nr, " +" + c(e.workflows.length - e.maxPreviewItems) + " more ", 1)) : v("", !0)
          ])) : v("", !0)
        ]),
        t("div", Rr, [
          t("div", Mr, [
            g[6] || (g[6] = t("div", { class: "section-icon" }, "🎨", -1)),
            t("div", Tr, [
              g[5] || (g[5] = t("div", { class: "section-title" }, "Models", -1)),
              t("div", Br, c(r.value) + " file" + c(r.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.models.length > 0 ? (o(), s("div", Ur, [
            (o(!0), s(H, null, J(e.models.slice(0, e.maxPreviewItems), (u) => (o(), s("div", {
              key: u.filename,
              class: "preview-item"
            }, [
              g[7] || (g[7] = t("span", { class: "item-bullet" }, "•", -1)),
              t("div", Vr, [
                t("span", Dr, c(u.filename), 1),
                t("span", Or, c(p(u.size)) + " • " + c(u.type), 1)
              ])
            ]))), 128)),
            e.models.length > e.maxPreviewItems ? (o(), s("div", Pr, " +" + c(e.models.length - e.maxPreviewItems) + " more ", 1)) : v("", !0)
          ])) : v("", !0)
        ]),
        t("div", Fr, [
          t("div", Wr, [
            g[9] || (g[9] = t("div", { class: "section-icon" }, "🔌", -1)),
            t("div", Ar, [
              g[8] || (g[8] = t("div", { class: "section-title" }, "Custom Nodes", -1)),
              t("div", Gr, c(i.value) + " node" + c(i.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.nodes.length > 0 ? (o(), s("div", Hr, [
            (o(!0), s(H, null, J(e.nodes.slice(0, e.maxPreviewItems), (u) => (o(), s("div", {
              key: u,
              class: "preview-item"
            }, [
              g[10] || (g[10] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", jr, c(u), 1)
            ]))), 128)),
            e.nodes.length > e.maxPreviewItems ? (o(), s("div", qr, " +" + c(e.nodes.length - e.maxPreviewItems) + " more ", 1)) : v("", !0)
          ])) : v("", !0)
        ]),
        e.gitBranch || e.gitCommit ? (o(), s("div", Kr, [
          g[11] || (g[11] = t("div", { class: "section-header" }, [
            t("div", { class: "section-icon" }, "🌿"),
            t("div", { class: "section-info" }, [
              t("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          t("div", Jr, [
            e.gitBranch ? (o(), y(Y, {
              key: 0,
              label: "Branch"
            }, {
              default: a(() => [
                l(De, null, {
                  default: a(() => [
                    f(c(e.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : v("", !0),
            e.gitCommit ? (o(), y(Y, {
              key: 1,
              label: "Commit"
            }, {
              default: a(() => [
                l(bt, { hash: e.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : v("", !0)
          ])
        ])) : v("", !0)
      ])
    ]));
  }
}), Xr = /* @__PURE__ */ P(Yr, [["__scopeId", "data-v-182fe113"]]), Qr = { class: "import-options" }, Zr = { class: "options-container" }, ei = { class: "option-section" }, ti = { class: "conflict-options" }, oi = ["value", "checked", "onChange"], ai = { class: "conflict-content" }, ni = { class: "conflict-label" }, si = { class: "conflict-description" }, li = { class: "option-section" }, ri = { class: "component-toggles" }, ii = /* @__PURE__ */ O({
  __name: "ImportOptions",
  props: {
    conflictMode: {},
    includeWorkflows: { type: Boolean },
    includeModels: { type: Boolean },
    includeNodes: { type: Boolean },
    includeGitHistory: { type: Boolean }
  },
  emits: ["update:conflictMode", "update:includeWorkflows", "update:includeModels", "update:includeNodes", "update:includeGitHistory"],
  setup(e, { emit: d }) {
    const n = d, r = [
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
    return (i, p) => (o(), s("div", Qr, [
      l(Ue, null, {
        default: a(() => [...p[4] || (p[4] = [
          f("Import Options", -1)
        ])]),
        _: 1
      }),
      t("div", Zr, [
        t("div", ei, [
          l(it, null, {
            default: a(() => [...p[5] || (p[5] = [
              f("Conflict Resolution", -1)
            ])]),
            _: 1
          }),
          t("div", ti, [
            (o(), s(H, null, J(r, (m) => t("label", {
              key: m.value,
              class: q(["conflict-option", { active: e.conflictMode === m.value }])
            }, [
              t("input", {
                type: "radio",
                name: "conflict-mode",
                value: m.value,
                checked: e.conflictMode === m.value,
                onChange: (g) => n("update:conflictMode", m.value)
              }, null, 40, oi),
              t("div", ai, [
                t("span", ni, c(m.label), 1),
                t("span", si, c(m.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        t("div", li, [
          l(it, null, {
            default: a(() => [...p[6] || (p[6] = [
              f("Components to Import", -1)
            ])]),
            _: 1
          }),
          t("div", ri, [
            l(oe, {
              label: "Workflows",
              description: "Import workflow JSON files"
            }, {
              default: a(() => [
                l(de, {
                  "model-value": e.includeWorkflows,
                  "onUpdate:modelValue": p[0] || (p[0] = (m) => n("update:includeWorkflows", m))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            l(oe, {
              label: "Models",
              description: "Import model files (may be large)"
            }, {
              default: a(() => [
                l(de, {
                  "model-value": e.includeModels,
                  "onUpdate:modelValue": p[1] || (p[1] = (m) => n("update:includeModels", m))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            l(oe, {
              label: "Custom Nodes",
              description: "Install custom node dependencies"
            }, {
              default: a(() => [
                l(de, {
                  "model-value": e.includeNodes,
                  "onUpdate:modelValue": p[2] || (p[2] = (m) => n("update:includeNodes", m))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }),
            l(oe, {
              label: "Git History",
              description: "Import git commits and branches"
            }, {
              default: a(() => [
                l(de, {
                  "model-value": e.includeGitHistory,
                  "onUpdate:modelValue": p[3] || (p[3] = (m) => n("update:includeGitHistory", m))
                }, null, 8, ["model-value"])
              ]),
              _: 1
            })
          ])
        ])
      ])
    ]));
  }
}), ci = /* @__PURE__ */ P(ii, [["__scopeId", "data-v-0ec212b0"]]), di = {
  key: 0,
  class: "import-empty"
}, ui = { class: "import-help" }, mi = {
  key: 1,
  class: "import-configure"
}, vi = { class: "selected-file-bar" }, fi = { class: "file-bar-content" }, gi = { class: "file-bar-info" }, hi = { class: "file-bar-name" }, pi = { class: "file-bar-size" }, yi = { class: "import-actions" }, bi = {
  key: 2,
  class: "import-progress"
}, wi = { class: "progress-content" }, ki = { class: "progress-info" }, $i = { class: "progress-title" }, _i = { class: "progress-detail" }, Ci = { class: "progress-bar" }, xi = { class: "progress-status" }, Si = {
  key: 3,
  class: "import-complete"
}, Ii = { class: "complete-message" }, Ei = { class: "complete-title" }, Li = { class: "complete-details" }, zi = { class: "complete-actions" }, Ni = /* @__PURE__ */ O({
  __name: "ImportSection",
  setup(e) {
    const d = S(null), n = S(!1), r = S(!1), i = S(!1), p = S(""), m = S({
      conflictMode: "overwrite",
      includeWorkflows: !0,
      includeModels: !0,
      includeNodes: !0,
      includeGitHistory: !0
    }), g = S({
      message: "Preparing import...",
      detail: "",
      percent: 0
    }), u = S({
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
    }), h = B(() => m.value.includeWorkflows || m.value.includeModels || m.value.includeNodes || m.value.includeGitHistory);
    function L(D) {
      d.value = D;
    }
    function E() {
      d.value = null, r.value = !1, i.value = !1, p.value = "";
    }
    function F() {
      E(), n.value = !1, g.value = {
        message: "Preparing import...",
        detail: "",
        percent: 0
      };
    }
    async function U() {
      if (d.value) {
        n.value = !0, r.value = !1;
        try {
          const D = [
            { message: "Extracting archive...", detail: "Unpacking export file", percent: 10 },
            { message: "Validating contents...", detail: "Checking file integrity", percent: 25 },
            { message: "Importing workflows...", detail: `Processing ${u.value.workflows.length} workflows`, percent: 40 },
            { message: "Importing models...", detail: `Copying ${u.value.models.length} model files`, percent: 60 },
            { message: "Installing nodes...", detail: `Setting up ${u.value.nodes.length} custom nodes`, percent: 80 },
            { message: "Finalizing...", detail: "Applying git history and configuration", percent: 95 }
          ];
          for (const _ of D)
            g.value = _, await new Promise((x) => setTimeout(x, 800));
          g.value = { message: "Complete!", detail: "", percent: 100 }, await new Promise((_) => setTimeout(_, 500)), i.value = !0, p.value = `Successfully imported ${u.value.workflows.length} workflows, ${u.value.models.length} models, and ${u.value.nodes.length} custom nodes.`;
        } catch (D) {
          i.value = !1, p.value = D instanceof Error ? D.message : "Unknown error occurred during import";
        } finally {
          n.value = !1, r.value = !0;
        }
      }
    }
    function K(D) {
      return D < 1024 ? `${D} B` : D < 1024 * 1024 ? `${(D / 1024).toFixed(1)} KB` : D < 1024 * 1024 * 1024 ? `${(D / (1024 * 1024)).toFixed(1)} MB` : `${(D / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (D, _) => (o(), y(me, null, {
      header: a(() => [
        l(ve, { title: "IMPORT ENVIRONMENT" })
      ]),
      content: a(() => [
        !d.value && !n.value ? (o(), s("div", di, [
          l(wr, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: L
          }),
          t("div", ui, [
            l(Ue, null, {
              default: a(() => [..._[5] || (_[5] = [
                f("How to Import", -1)
              ])]),
              _: 1
            }),
            _[6] || (_[6] = t("div", { class: "help-content" }, [
              t("div", { class: "help-item" }, [
                t("span", { class: "help-number" }, "1"),
                t("div", { class: "help-text" }, [
                  t("div", { class: "help-title" }, "Select Export File"),
                  t("div", { class: "help-description" }, " Choose a ComfyGit environment export file created with the EXPORT feature ")
                ])
              ]),
              t("div", { class: "help-item" }, [
                t("span", { class: "help-number" }, "2"),
                t("div", { class: "help-text" }, [
                  t("div", { class: "help-title" }, "Review Preview"),
                  t("div", { class: "help-description" }, " Check what workflows, models, and nodes will be imported ")
                ])
              ]),
              t("div", { class: "help-item" }, [
                t("span", { class: "help-number" }, "3"),
                t("div", { class: "help-text" }, [
                  t("div", { class: "help-title" }, "Configure Options"),
                  t("div", { class: "help-description" }, " Choose how to handle conflicts and which components to import ")
                ])
              ]),
              t("div", { class: "help-item" }, [
                t("span", { class: "help-number" }, "4"),
                t("div", { class: "help-text" }, [
                  t("div", { class: "help-title" }, "Import"),
                  t("div", { class: "help-description" }, " Start the import process and wait for completion ")
                ])
              ])
            ], -1))
          ])
        ])) : d.value && !n.value && !r.value ? (o(), s("div", mi, [
          t("div", vi, [
            t("div", fi, [
              _[7] || (_[7] = t("div", { class: "file-bar-icon" }, "📦", -1)),
              t("div", gi, [
                t("div", hi, c(d.value.name), 1),
                t("div", pi, c(K(d.value.size)), 1)
              ])
            ]),
            l(T, {
              variant: "ghost",
              size: "sm",
              onClick: E
            }, {
              default: a(() => [..._[8] || (_[8] = [
                f(" Change File ", -1)
              ])]),
              _: 1
            })
          ]),
          l(Xr, {
            "source-environment": u.value.sourceEnvironment,
            workflows: u.value.workflows,
            models: u.value.models,
            nodes: u.value.nodes,
            "git-branch": u.value.gitBranch,
            "git-commit": u.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"]),
          l(ci, {
            "conflict-mode": m.value.conflictMode,
            "onUpdate:conflictMode": _[0] || (_[0] = (x) => m.value.conflictMode = x),
            "include-workflows": m.value.includeWorkflows,
            "onUpdate:includeWorkflows": _[1] || (_[1] = (x) => m.value.includeWorkflows = x),
            "include-models": m.value.includeModels,
            "onUpdate:includeModels": _[2] || (_[2] = (x) => m.value.includeModels = x),
            "include-nodes": m.value.includeNodes,
            "onUpdate:includeNodes": _[3] || (_[3] = (x) => m.value.includeNodes = x),
            "include-git-history": m.value.includeGitHistory,
            "onUpdate:includeGitHistory": _[4] || (_[4] = (x) => m.value.includeGitHistory = x)
          }, null, 8, ["conflict-mode", "include-workflows", "include-models", "include-nodes", "include-git-history"]),
          !m.value.includeModels && u.value.models.length > 0 ? (o(), y(Ye, {
            key: 0,
            type: "warning",
            title: "Models Will Not Be Imported",
            details: [
              `${u.value.models.length} model file(s) will be skipped`,
              "Workflows may not function without required models",
              "You can download models manually from the MODEL INDEX"
            ]
          }, null, 8, ["details"])) : v("", !0),
          t("div", yi, [
            l(T, {
              variant: "primary",
              size: "md",
              disabled: !h.value,
              onClick: U
            }, {
              default: a(() => [..._[9] || (_[9] = [
                t("svg", {
                  width: "14",
                  height: "14",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  t("path", { d: "M8 12L4 8h3V4h2v4h3L8 12z" }),
                  t("path", { d: "M2 14h12v-2H2v2z" })
                ], -1),
                f(" Start Import ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"]),
            l(T, {
              variant: "secondary",
              size: "md",
              onClick: E
            }, {
              default: a(() => [..._[10] || (_[10] = [
                f(" Cancel ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : n.value ? (o(), s("div", bi, [
          t("div", wi, [
            _[11] || (_[11] = t("div", { class: "progress-icon" }, [
              t("div", { class: "spinner" })
            ], -1)),
            t("div", ki, [
              t("div", $i, c(g.value.message), 1),
              t("div", _i, c(g.value.detail), 1)
            ])
          ]),
          t("div", Ci, [
            t("div", {
              class: "progress-bar-fill",
              style: He({ width: `${g.value.percent}%` })
            }, null, 4)
          ]),
          t("div", xi, c(g.value.percent) + "% complete ", 1)
        ])) : r.value ? (o(), s("div", Si, [
          t("div", {
            class: q(["complete-icon", i.value ? "success" : "error"])
          }, c(i.value ? "✓" : "✕"), 3),
          t("div", Ii, [
            t("div", Ei, c(i.value ? "Import Successful" : "Import Failed"), 1),
            t("div", Li, c(p.value), 1)
          ]),
          t("div", zi, [
            l(T, {
              variant: "primary",
              size: "md",
              onClick: F
            }, {
              default: a(() => [..._[12] || (_[12] = [
                f(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : v("", !0)
      ]),
      _: 1
    }));
  }
}), Ri = /* @__PURE__ */ P(Ni, [["__scopeId", "data-v-18e18eb5"]]), Mi = { class: "header-info" }, Ti = { class: "commit-hash" }, Bi = {
  key: 0,
  class: "commit-refs"
}, Ui = { class: "commit-message" }, Vi = { class: "commit-date" }, Di = {
  key: 0,
  class: "loading"
}, Oi = {
  key: 1,
  class: "changes-section"
}, Pi = { class: "stats-row" }, Fi = { class: "stat" }, Wi = { class: "stat insertions" }, Ai = { class: "stat deletions" }, Gi = {
  key: 0,
  class: "change-group"
}, Hi = {
  key: 1,
  class: "change-group"
}, ji = {
  key: 0,
  class: "version"
}, qi = {
  key: 2,
  class: "change-group"
}, Ki = { class: "change-item" }, Ji = /* @__PURE__ */ O({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const d = e, { getCommitDetail: n } = fe(), r = S(null), i = S(!0), p = B(() => {
      if (!r.value) return !1;
      const g = r.value.changes.workflows;
      return g.added.length > 0 || g.modified.length > 0 || g.deleted.length > 0;
    }), m = B(() => {
      if (!r.value) return !1;
      const g = r.value.changes.nodes;
      return g.added.length > 0 || g.removed.length > 0;
    });
    return ce(async () => {
      try {
        r.value = await n(d.commit.hash);
      } finally {
        i.value = !1;
      }
    }), (g, u) => (o(), y(Ze, {
      size: "md",
      "show-close-button": !1,
      onClose: u[3] || (u[3] = (h) => g.$emit("close"))
    }, {
      header: a(() => {
        var h, L, E, F;
        return [
          t("div", Mi, [
            u[4] || (u[4] = t("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            t("span", Ti, c(((h = r.value) == null ? void 0 : h.short_hash) || e.commit.short_hash || ((L = e.commit.hash) == null ? void 0 : L.slice(0, 7))), 1),
            (F = (E = r.value) == null ? void 0 : E.refs) != null && F.length ? (o(), s("span", Bi, [
              (o(!0), s(H, null, J(r.value.refs, (U) => (o(), s("span", {
                key: U,
                class: "ref-badge"
              }, c(U), 1))), 128))
            ])) : v("", !0)
          ]),
          l(ue, {
            variant: "ghost",
            size: "sm",
            onClick: u[0] || (u[0] = (U) => g.$emit("close"))
          }, {
            default: a(() => [...u[5] || (u[5] = [
              t("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                t("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])]),
            _: 1
          })
        ];
      }),
      body: a(() => {
        var h, L;
        return [
          t("div", Ui, c(((h = r.value) == null ? void 0 : h.message) || e.commit.message), 1),
          t("div", Vi, c(((L = r.value) == null ? void 0 : L.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          i.value ? (o(), s("div", Di, "Loading details...")) : r.value ? (o(), s("div", Oi, [
            t("div", Pi, [
              t("span", Fi, c(r.value.stats.files_changed) + " files", 1),
              t("span", Wi, "+" + c(r.value.stats.insertions), 1),
              t("span", Ai, "-" + c(r.value.stats.deletions), 1)
            ]),
            p.value ? (o(), s("div", Gi, [
              l(ze, { variant: "section" }, {
                default: a(() => [...u[6] || (u[6] = [
                  f("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (o(!0), s(H, null, J(r.value.changes.workflows.added, (E) => (o(), s("div", {
                key: "add-" + E,
                class: "change-item added"
              }, [
                u[7] || (u[7] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, c(E), 1)
              ]))), 128)),
              (o(!0), s(H, null, J(r.value.changes.workflows.modified, (E) => (o(), s("div", {
                key: "mod-" + E,
                class: "change-item modified"
              }, [
                u[8] || (u[8] = t("span", { class: "change-icon" }, "~", -1)),
                t("span", null, c(E), 1)
              ]))), 128)),
              (o(!0), s(H, null, J(r.value.changes.workflows.deleted, (E) => (o(), s("div", {
                key: "del-" + E,
                class: "change-item deleted"
              }, [
                u[9] || (u[9] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, c(E), 1)
              ]))), 128))
            ])) : v("", !0),
            m.value ? (o(), s("div", Hi, [
              l(ze, { variant: "section" }, {
                default: a(() => [...u[10] || (u[10] = [
                  f("NODES", -1)
                ])]),
                _: 1
              }),
              (o(!0), s(H, null, J(r.value.changes.nodes.added, (E) => (o(), s("div", {
                key: "add-" + E.name,
                class: "change-item added"
              }, [
                u[11] || (u[11] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, c(E.name), 1),
                E.version ? (o(), s("span", ji, "(" + c(E.version) + ")", 1)) : v("", !0)
              ]))), 128)),
              (o(!0), s(H, null, J(r.value.changes.nodes.removed, (E) => (o(), s("div", {
                key: "rem-" + E.name,
                class: "change-item deleted"
              }, [
                u[12] || (u[12] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, c(E.name), 1)
              ]))), 128))
            ])) : v("", !0),
            r.value.changes.models.resolved > 0 ? (o(), s("div", qi, [
              l(ze, { variant: "section" }, {
                default: a(() => [...u[13] || (u[13] = [
                  f("MODELS", -1)
                ])]),
                _: 1
              }),
              t("div", Ki, [
                u[14] || (u[14] = t("span", { class: "change-icon" }, "●", -1)),
                t("span", null, c(r.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : v("", !0)
          ])) : v("", !0)
        ];
      }),
      footer: a(() => [
        l(ue, {
          variant: "secondary",
          onClick: u[1] || (u[1] = (h) => g.$emit("createBranch", e.commit))
        }, {
          default: a(() => [...u[15] || (u[15] = [
            f(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        l(ue, {
          variant: "primary",
          onClick: u[2] || (u[2] = (h) => g.$emit("checkout", e.commit))
        }, {
          default: a(() => [...u[16] || (u[16] = [
            f(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Yi = /* @__PURE__ */ P(Ji, [["__scopeId", "data-v-d256ff6d"]]), Xi = { class: "dialog-message" }, Qi = {
  key: 0,
  class: "dialog-details"
}, Zi = {
  key: 1,
  class: "dialog-warning"
}, ec = /* @__PURE__ */ O({
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
    return (d, n) => (o(), y(Ze, {
      title: e.title,
      size: "sm",
      onClose: n[3] || (n[3] = (r) => d.$emit("cancel"))
    }, {
      body: a(() => [
        t("p", Xi, c(e.message), 1),
        e.details && e.details.length ? (o(), s("div", Qi, [
          (o(!0), s(H, null, J(e.details, (r, i) => (o(), s("div", {
            key: i,
            class: "detail-item"
          }, " • " + c(r), 1))), 128))
        ])) : v("", !0),
        e.warning ? (o(), s("p", Zi, [
          n[4] || (n[4] = t("span", { class: "warning-icon" }, "⚠", -1)),
          f(" " + c(e.warning), 1)
        ])) : v("", !0)
      ]),
      footer: a(() => [
        l(ue, {
          variant: "secondary",
          onClick: n[0] || (n[0] = (r) => d.$emit("cancel"))
        }, {
          default: a(() => [
            f(c(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (o(), y(ue, {
          key: 0,
          variant: "secondary",
          onClick: n[1] || (n[1] = (r) => d.$emit("secondary"))
        }, {
          default: a(() => [
            f(c(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : v("", !0),
        l(ue, {
          variant: e.destructive ? "danger" : "primary",
          onClick: n[2] || (n[2] = (r) => d.$emit("confirm"))
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
}), tc = /* @__PURE__ */ P(ec, [["__scopeId", "data-v-3670b9f5"]]), oc = { class: "modal-header" }, ac = { class: "modal-body" }, nc = { class: "switch-message" }, sc = { class: "switch-details" }, lc = { class: "modal-actions" }, rc = /* @__PURE__ */ O({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (d, n) => (o(), y(Qe, { to: "body" }, [
      e.show ? (o(), s("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (r) => d.$emit("close"))
      }, [
        t("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = ke(() => {
          }, ["stop"]))
        }, [
          t("div", oc, [
            n[5] || (n[5] = t("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            t("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (r) => d.$emit("close"))
            }, "✕")
          ]),
          t("div", ac, [
            t("p", nc, [
              n[6] || (n[6] = f(" Switch from ", -1)),
              t("strong", null, c(e.fromEnvironment), 1),
              n[7] || (n[7] = f(" to ", -1)),
              t("strong", null, c(e.toEnvironment), 1),
              n[8] || (n[8] = f("? ", -1))
            ]),
            n[9] || (n[9] = t("div", { class: "warning-box" }, [
              t("span", { class: "warning-icon" }, "⚠"),
              t("span", null, "This will restart ComfyUI")
            ], -1)),
            t("p", sc, ' Your current work will be preserved. You can switch back to "' + c(e.fromEnvironment) + '" anytime. ', 1),
            n[10] || (n[10] = t("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          t("div", lc, [
            l(T, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (r) => d.$emit("close"))
            }, {
              default: a(() => [...n[11] || (n[11] = [
                f(" Cancel ", -1)
              ])]),
              _: 1
            }),
            l(T, {
              variant: "primary",
              onClick: n[2] || (n[2] = (r) => d.$emit("confirm"))
            }, {
              default: a(() => [...n[12] || (n[12] = [
                f(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : v("", !0)
    ]));
  }
}), ic = /* @__PURE__ */ P(rc, [["__scopeId", "data-v-e9c5253e"]]), cc = { class: "progress-bar" }, dc = /* @__PURE__ */ O({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(e) {
    const d = e, n = B(() => `${Math.max(0, Math.min(100, d.progress))}%`);
    return (r, i) => (o(), s("div", cc, [
      t("div", {
        class: q(["progress-fill", e.variant]),
        style: He({ width: n.value })
      }, null, 6)
    ]));
  }
}), uc = /* @__PURE__ */ P(dc, [["__scopeId", "data-v-1beb0512"]]), mc = {
  key: 0,
  class: "modal-overlay"
}, vc = { class: "modal-content" }, fc = { class: "modal-body" }, gc = { class: "progress-info" }, hc = { class: "progress-percentage" }, pc = { class: "progress-state" }, yc = { class: "switch-steps" }, bc = { class: "step-icon" }, wc = { class: "step-label" }, kc = /* @__PURE__ */ O({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(e) {
    const d = e, n = B(() => {
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
      return d.message || p[d.state] || d.state;
    }), r = B(() => d.state === "complete" ? "success" : d.state === "critical_failure" || d.state === "rolled_back" ? "error" : "default"), i = B(() => {
      const p = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], m = p.findIndex((g) => g.state === d.state);
      return p.map((g, u) => {
        let h = "pending", L = "○";
        return u < m ? (h = "completed", L = "✓") : u === m && (h = "active", L = "⟳"), {
          ...g,
          status: h,
          icon: L
        };
      });
    });
    return (p, m) => (o(), y(Qe, { to: "body" }, [
      e.show ? (o(), s("div", mc, [
        t("div", vc, [
          m[1] || (m[1] = t("div", { class: "modal-header" }, [
            t("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          t("div", fc, [
            l(uc, {
              progress: e.progress,
              variant: r.value
            }, null, 8, ["progress", "variant"]),
            t("div", gc, [
              t("div", hc, c(e.progress) + "%", 1),
              t("div", pc, c(n.value), 1)
            ]),
            t("div", yc, [
              (o(!0), s(H, null, J(i.value, (g) => (o(), s("div", {
                key: g.state,
                class: q(["switch-step", g.status])
              }, [
                t("span", bc, c(g.icon), 1),
                t("span", wc, c(g.label), 1)
              ], 2))), 128))
            ]),
            m[0] || (m[0] = t("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : v("", !0)
    ]));
  }
}), $c = /* @__PURE__ */ P(kc, [["__scopeId", "data-v-768a5078"]]);
async function We(e, d = {}, n = 5e3) {
  const r = new AbortController(), i = setTimeout(() => r.abort(), n);
  try {
    const p = await fetch(e, {
      ...d,
      signal: r.signal
    });
    return clearTimeout(i), p;
  } catch (p) {
    throw clearTimeout(i), p.name === "AbortError" ? new Error(`Request timeout after ${n}ms`) : p;
  }
}
function _c() {
  const e = S(null);
  async function d() {
    try {
      const m = await We(
        "http://127.0.0.1:8188/v2/comfygit/orchestrator_port",
        {},
        5e3
      );
      if (m.ok)
        return (await m.json()).port;
    } catch {
    }
    return 8189;
  }
  async function n() {
    if (e.value || (e.value = await d()), !e.value)
      return null;
    try {
      const m = await We(
        `http://127.0.0.1:${e.value}/health`,
        {},
        5e3
      );
      if (!m.ok) throw new Error("Health check failed");
      return await m.json();
    } catch {
      return e.value = await d(), null;
    }
  }
  async function r() {
    if (e.value || (e.value = await d()), !e.value)
      return null;
    try {
      const m = await We(
        `http://127.0.0.1:${e.value}/status`,
        {},
        5e3
      );
      if (!m.ok) throw new Error("Failed to get status");
      return await m.json();
    } catch {
      return null;
    }
  }
  async function i() {
    if (e.value || (e.value = await d()), !e.value)
      throw new Error("Control port not available");
    if (!(await We(
      `http://127.0.0.1:${e.value}/restart`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to restart");
  }
  async function p() {
    if (e.value || (e.value = await d()), !e.value)
      throw new Error("Control port not available");
    if (!(await We(
      `http://127.0.0.1:${e.value}/kill`,
      { method: "POST" },
      1e4
    )).ok)
      throw new Error("Failed to kill orchestrator");
  }
  return {
    controlPort: e,
    discoverControlPort: d,
    checkHealth: n,
    getStatus: r,
    restart: i,
    kill: p
  };
}
const Cc = { class: "comfygit-panel" }, xc = { class: "panel-header" }, Sc = { class: "header-left" }, Ic = {
  key: 0,
  class: "header-info"
}, Ec = { class: "header-actions" }, Lc = { class: "env-switcher" }, zc = {
  key: 0,
  class: "header-info"
}, Nc = { class: "branch-name" }, Rc = { class: "panel-main" }, Mc = { class: "sidebar" }, Tc = { class: "sidebar-section" }, Bc = { class: "sidebar-section" }, Uc = { class: "sidebar-section" }, Vc = { class: "content-area" }, Dc = {
  key: 0,
  class: "error-message"
}, Oc = {
  key: 1,
  class: "loading"
}, Pc = { class: "dialog-content env-selector-dialog" }, Fc = { class: "dialog-header" }, Wc = { class: "dialog-body" }, Ac = { class: "env-list" }, Gc = { class: "env-info" }, Hc = { class: "env-name-row" }, jc = { class: "env-indicator" }, qc = { class: "env-name" }, Kc = {
  key: 0,
  class: "env-branch"
}, Jc = {
  key: 1,
  class: "current-label"
}, Yc = { class: "env-stats" }, Xc = ["onClick"], Qc = { class: "toast-container" }, Zc = { class: "toast-icon" }, ed = { class: "toast-message" }, td = /* @__PURE__ */ O({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(e, { emit: d }) {
    const n = d, {
      getStatus: r,
      getHistory: i,
      getBranches: p,
      checkout: m,
      createBranch: g,
      switchBranch: u,
      getEnvironments: h,
      switchEnvironment: L,
      getSwitchProgress: E
    } = fe(), F = _c(), U = S(null), K = S([]), D = S([]), _ = S([]), x = B(() => _.value.find((M) => M.is_current)), V = S(!1), j = S(null), $ = S(null), C = S(!1), b = S(!1), k = S(!1), w = S(""), z = S({ state: "idle", progress: 0, message: "" });
    let W = null, le = null;
    const R = S("status"), N = S("this-env");
    function G(M, I) {
      R.value = M, N.value = I;
    }
    function pe(M) {
      const te = {
        "model-index": { view: "model-index", section: "all-envs" }
      }[M];
      te && G(te.view, te.section);
    }
    function et() {
      G("branches", "this-env");
    }
    const re = S(null), Se = S([]);
    let tt = 0;
    function ne(M, I = "info", te = 3e3) {
      const se = ++tt;
      return Se.value.push({ id: se, message: M, type: I }), te > 0 && setTimeout(() => {
        Se.value = Se.value.filter((ye) => ye.id !== se);
      }, te), se;
    }
    function Ie(M) {
      Se.value = Se.value.filter((I) => I.id !== M);
    }
    function ot(M) {
      switch (M) {
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
    const Fe = B(() => {
      if (!U.value) return "neutral";
      const M = U.value.workflows, I = M.new.length > 0 || M.modified.length > 0 || M.deleted.length > 0 || U.value.has_changes;
      return U.value.comparison.is_synced ? I ? "warning" : "success" : "error";
    });
    B(() => U.value ? Fe.value === "success" ? "All synced" : Fe.value === "warning" ? "Uncommitted changes" : Fe.value === "error" ? "Not synced" : "" : "");
    async function Ee() {
      V.value = !0, j.value = null;
      try {
        const [M, I, te, se] = await Promise.all([
          r(),
          i(),
          p(),
          h()
        ]);
        U.value = M, K.value = I.commits, D.value = te.branches, _.value = se, n("statusUpdate", M);
      } catch (M) {
        j.value = M instanceof Error ? M.message : "Failed to load status", U.value = null, K.value = [], D.value = [];
      } finally {
        V.value = !1;
      }
    }
    function A(M) {
      $.value = M;
    }
    async function Q(M) {
      var te;
      $.value = null;
      const I = U.value && (U.value.workflows.new.length > 0 || U.value.workflows.modified.length > 0 || U.value.workflows.deleted.length > 0 || U.value.has_changes);
      re.value = {
        title: I ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: I ? "You have uncommitted changes that will be lost." : `Checkout commit ${M.short_hash || ((te = M.hash) == null ? void 0 : te.slice(0, 7))}?`,
        details: I ? ft() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: I ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: I,
        onConfirm: async () => {
          var be;
          re.value = null;
          const se = ne(`Checking out ${M.short_hash || ((be = M.hash) == null ? void 0 : be.slice(0, 7))}...`, "info", 0), ye = await m(M.hash, I);
          Ie(se), ye.status === "success" ? ne("Restarting ComfyUI...", "success") : ne(ye.message || "Checkout failed", "error");
        }
      };
    }
    async function ee(M) {
      const I = U.value && (U.value.workflows.new.length > 0 || U.value.workflows.modified.length > 0 || U.value.workflows.deleted.length > 0 || U.value.has_changes);
      re.value = {
        title: I ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: I ? "You have uncommitted changes." : `Switch to branch "${M}"?`,
        details: I ? ft() : void 0,
        warning: I ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: I ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          re.value = null;
          const te = ne(`Switching to ${M}...`, "info", 0), se = await u(M, I);
          Ie(te), se.status === "success" ? ne("Restarting ComfyUI...", "success") : ne(se.message || "Branch switch failed", "error");
        }
      };
    }
    async function je(M) {
      const I = ne(`Creating branch ${M}...`, "info", 0), te = await g(M);
      Ie(I), te.status === "success" ? (ne(`Branch "${M}" created`, "success"), await Ee()) : ne(te.message || "Failed to create branch", "error");
    }
    async function qe(M) {
      $.value = null;
      const I = prompt("Enter branch name:");
      if (I) {
        const te = ne(`Creating branch ${I}...`, "info", 0), se = await g(I, M.hash);
        Ie(te), se.status === "success" ? (ne(`Branch "${I}" created from ${M.short_hash}`, "success"), await Ee()) : ne(se.message || "Failed to create branch", "error");
      }
    }
    async function vt(M) {
      C.value = !1, w.value = M, b.value = !0;
    }
    async function It() {
      b.value = !1, k.value = !0, z.value = {
        progress: 10,
        state: Ke(10),
        message: Je(10)
      };
      try {
        await L(w.value), Et(), Lt();
      } catch (M) {
        Me(), k.value = !1, ne(`Failed to initiate switch: ${M instanceof Error ? M.message : "Unknown error"}`, "error"), z.value = { state: "idle", progress: 0, message: "" };
      }
    }
    function Ke(M) {
      return M >= 100 ? "complete" : M >= 80 ? "validating" : M >= 60 ? "starting" : M >= 30 ? "syncing" : "preparing";
    }
    function Je(M) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[Ke(M)] || "";
    }
    function Et() {
      if (le) return;
      let M = 10;
      const I = 60, te = 5e3, se = 100, ye = (I - M) / (te / se);
      le = window.setInterval(() => {
        if (M += ye, M >= I && (M = I, Me()), z.value.progress < I) {
          const be = Math.floor(M);
          z.value = {
            progress: be,
            state: Ke(be),
            message: Je(be)
          };
        }
      }, se);
    }
    function Me() {
      le && (clearInterval(le), le = null);
    }
    function Lt() {
      W || (W = window.setInterval(async () => {
        try {
          let M = await F.getStatus();
          if ((!M || M.state === "idle") && (M = await E()), !M)
            return;
          const I = M.progress || 0;
          I >= 60 && Me();
          const te = Math.max(I, z.value.progress), se = M.state && M.state !== "idle" && M.state !== "unknown", ye = se ? M.state : Ke(te), be = se && M.message || Je(te);
          z.value = {
            state: ye,
            progress: te,
            message: be
          }, M.state === "complete" ? (Me(), at(), k.value = !1, ne(`✓ Switched to ${w.value}`, "success"), await Ee(), w.value = "") : M.state === "rolled_back" ? (Me(), at(), k.value = !1, ne("Switch failed, restored previous environment", "warning"), w.value = "") : M.state === "critical_failure" && (Me(), at(), k.value = !1, ne(`Critical error during switch: ${M.message}`, "error"), w.value = "");
        } catch (M) {
          console.error("Failed to poll switch progress:", M);
        }
      }, 1e3));
    }
    function at() {
      Me(), W && (clearInterval(W), W = null);
    }
    function zt() {
      b.value = !1, w.value = "";
    }
    async function Nt(M) {
      const I = ne(`Creating environment "${M}"...`, "info", 0);
      Ie(I), ne("Environment creation not yet implemented", "warning");
    }
    async function Rt(M) {
      const I = ne(`Deleting environment "${M}"...`, "info", 0);
      Ie(I), ne("Environment deletion not yet implemented", "warning");
    }
    function Mt(M) {
      ne(`Viewing details for "${M}"`, "info"), G("models-env", "this-env");
    }
    function ft() {
      if (!U.value) return [];
      const M = [], I = U.value.workflows;
      return I.new.length && M.push(`${I.new.length} new workflow(s)`), I.modified.length && M.push(`${I.modified.length} modified workflow(s)`), I.deleted.length && M.push(`${I.deleted.length} deleted workflow(s)`), M;
    }
    return ce(Ee), (M, I) => {
      var te, se, ye, be;
      return o(), s("div", Cc, [
        t("div", xc, [
          t("div", Sc, [
            I[20] || (I[20] = t("h2", { class: "panel-title" }, "ComfyGit", -1)),
            U.value ? (o(), s("div", Ic)) : v("", !0)
          ]),
          t("div", Ec, [
            t("button", {
              class: q(["icon-btn", { spinning: V.value }]),
              onClick: Ee,
              title: "Refresh"
            }, [...I[21] || (I[21] = [
              t("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                t("path", { d: "M13.65 2.35a8 8 0 1 0 1.4 9.65h-2.25a5.75 5.75 0 1 1-1-6.45L9.5 8H16V1.5l-2.35 2.35z" })
              ], -1)
            ])], 2),
            t("button", {
              class: "icon-btn",
              onClick: I[0] || (I[0] = (Z) => n("close")),
              title: "Close"
            }, [...I[22] || (I[22] = [
              t("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                t("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])
          ])
        ]),
        t("div", Lc, [
          I[24] || (I[24] = t("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
          t("button", {
            class: "env-switcher-btn",
            onClick: I[1] || (I[1] = (Z) => G("environments", "all-envs"))
          }, [
            U.value ? (o(), s("div", zc, [
              t("span", null, c(((te = x.value) == null ? void 0 : te.name) || ((se = U.value) == null ? void 0 : se.environment) || "Loading..."), 1),
              t("span", Nc, "(" + c(U.value.branch || "detached") + ")", 1)
            ])) : v("", !0),
            I[23] || (I[23] = t("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        t("div", Rc, [
          t("div", Mc, [
            t("div", Tc, [
              I[25] || (I[25] = t("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              t("button", {
                class: q(["sidebar-item", { active: R.value === "status" && N.value === "this-env" }]),
                onClick: I[2] || (I[2] = (Z) => G("status", "this-env"))
              }, " STATUS ", 2),
              t("button", {
                class: q(["sidebar-item", { active: R.value === "workflows" }]),
                onClick: I[3] || (I[3] = (Z) => G("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              t("button", {
                class: q(["sidebar-item", { active: R.value === "models-env" }]),
                onClick: I[4] || (I[4] = (Z) => G("models-env", "this-env"))
              }, " MODELS ", 2),
              t("button", {
                class: q(["sidebar-item", { active: R.value === "branches" }]),
                onClick: I[5] || (I[5] = (Z) => G("branches", "this-env"))
              }, " BRANCHES ", 2),
              t("button", {
                class: q(["sidebar-item", { active: R.value === "history" }]),
                onClick: I[6] || (I[6] = (Z) => G("history", "this-env"))
              }, " HISTORY ", 2),
              t("button", {
                class: q(["sidebar-item", { active: R.value === "nodes" }]),
                onClick: I[7] || (I[7] = (Z) => G("nodes", "this-env"))
              }, " NODES ", 2),
              t("button", {
                class: q(["sidebar-item", { active: R.value === "debug-env" }]),
                onClick: I[8] || (I[8] = (Z) => G("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            I[28] || (I[28] = t("div", { class: "sidebar-divider" }, null, -1)),
            t("div", Bc, [
              I[26] || (I[26] = t("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              t("button", {
                class: q(["sidebar-item", { active: R.value === "environments" }]),
                onClick: I[9] || (I[9] = (Z) => G("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              t("button", {
                class: q(["sidebar-item", { active: R.value === "model-index" }]),
                onClick: I[10] || (I[10] = (Z) => G("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              t("button", {
                class: q(["sidebar-item", { active: R.value === "settings" }]),
                onClick: I[11] || (I[11] = (Z) => G("settings", "all-envs"))
              }, " SETTINGS ", 2),
              t("button", {
                class: q(["sidebar-item", { active: R.value === "debug-workspace" }]),
                onClick: I[12] || (I[12] = (Z) => G("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            I[29] || (I[29] = t("div", { class: "sidebar-divider" }, null, -1)),
            t("div", Uc, [
              I[27] || (I[27] = t("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              t("button", {
                class: q(["sidebar-item", { active: R.value === "export" }]),
                onClick: I[13] || (I[13] = (Z) => G("export", "sharing"))
              }, " EXPORT ", 2),
              t("button", {
                class: q(["sidebar-item", { active: R.value === "import" }]),
                onClick: I[14] || (I[14] = (Z) => G("import", "sharing"))
              }, " IMPORT ", 2),
              t("button", {
                class: q(["sidebar-item", { active: R.value === "remotes" }]),
                onClick: I[15] || (I[15] = (Z) => G("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          t("div", Vc, [
            j.value ? (o(), s("div", Dc, c(j.value), 1)) : !U.value && R.value === "status" ? (o(), s("div", Oc, " Loading status... ")) : (o(), s(H, { key: 2 }, [
              R.value === "status" ? (o(), y(Ho, {
                key: 0,
                status: U.value,
                onSwitchBranch: et
              }, null, 8, ["status"])) : R.value === "workflows" ? (o(), y(es, {
                key: 1,
                onRefresh: Ee
              })) : R.value === "models-env" ? (o(), y(ms, {
                key: 2,
                onNavigate: pe
              })) : R.value === "branches" ? (o(), y(la, {
                key: 3,
                branches: D.value,
                current: ((ye = U.value) == null ? void 0 : ye.branch) || null,
                onSwitch: ee,
                onCreate: je
              }, null, 8, ["branches", "current"])) : R.value === "history" ? (o(), y(pa, {
                key: 4,
                commits: K.value,
                onSelect: A,
                onCheckout: Q
              }, null, 8, ["commits"])) : R.value === "nodes" ? (o(), y(bs, { key: 5 })) : R.value === "debug-env" ? (o(), y(Ul, { key: 6 })) : R.value === "environments" ? (o(), y(Kl, {
                key: 7,
                onSwitch: vt,
                onCreate: Nt,
                onDelete: Rt,
                onViewDetails: Mt
              })) : R.value === "model-index" ? (o(), y(fs, { key: 8 })) : R.value === "settings" ? (o(), y(gl, { key: 9 })) : R.value === "debug-workspace" ? (o(), y(Ml, { key: 10 })) : R.value === "export" ? (o(), y(nr, { key: 11 })) : R.value === "import" ? (o(), y(Ri, { key: 12 })) : R.value === "remotes" ? (o(), y(Qs, { key: 13 })) : v("", !0)
            ], 64))
          ])
        ]),
        $.value ? (o(), y(Yi, {
          key: 0,
          commit: $.value,
          onClose: I[16] || (I[16] = (Z) => $.value = null),
          onCheckout: Q,
          onCreateBranch: qe
        }, null, 8, ["commit"])) : v("", !0),
        re.value ? (o(), y(tc, {
          key: 1,
          title: re.value.title,
          message: re.value.message,
          details: re.value.details,
          warning: re.value.warning,
          confirmLabel: re.value.confirmLabel,
          cancelLabel: re.value.cancelLabel,
          secondaryLabel: re.value.secondaryLabel,
          secondaryAction: re.value.secondaryAction,
          destructive: re.value.destructive,
          onConfirm: re.value.onConfirm,
          onCancel: I[17] || (I[17] = (Z) => re.value = null),
          onSecondary: re.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : v("", !0),
        l(ic, {
          show: b.value,
          "from-environment": ((be = x.value) == null ? void 0 : be.name) || "unknown",
          "to-environment": w.value,
          onConfirm: It,
          onClose: zt
        }, null, 8, ["show", "from-environment", "to-environment"]),
        l($c, {
          show: k.value,
          state: z.value.state,
          progress: z.value.progress,
          message: z.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        C.value ? (o(), s("div", {
          key: 2,
          class: "dialog-overlay",
          onClick: I[19] || (I[19] = ke((Z) => C.value = !1, ["self"]))
        }, [
          t("div", Pc, [
            t("div", Fc, [
              I[31] || (I[31] = t("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              t("button", {
                class: "icon-btn",
                onClick: I[18] || (I[18] = (Z) => C.value = !1)
              }, [...I[30] || (I[30] = [
                t("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  t("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
                ], -1)
              ])])
            ]),
            t("div", Wc, [
              I[32] || (I[32] = t("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              t("div", Ac, [
                (o(!0), s(H, null, J(_.value, (Z) => (o(), s("div", {
                  key: Z.name,
                  class: q(["env-item", { current: Z.is_current }])
                }, [
                  t("div", Gc, [
                    t("div", Hc, [
                      t("span", jc, c(Z.is_current ? "●" : "○"), 1),
                      t("span", qc, c(Z.name), 1),
                      Z.current_branch ? (o(), s("span", Kc, "(" + c(Z.current_branch) + ")", 1)) : v("", !0),
                      Z.is_current ? (o(), s("span", Jc, "CURRENT")) : v("", !0)
                    ]),
                    t("div", Yc, c(Z.workflow_count) + " workflows • " + c(Z.node_count) + " nodes ", 1)
                  ]),
                  Z.is_current ? v("", !0) : (o(), s("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Md) => vt(Z.name)
                  }, " SWITCH ", 8, Xc))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : v("", !0),
        t("div", Qc, [
          l(Vt, { name: "toast" }, {
            default: a(() => [
              (o(!0), s(H, null, J(Se.value, (Z) => (o(), s("div", {
                key: Z.id,
                class: q(["toast", Z.type])
              }, [
                t("span", Zc, c(ot(Z.type)), 1),
                t("span", ed, c(Z.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), od = /* @__PURE__ */ P(td, [["__scopeId", "data-v-0e8bb928"]]), ad = { class: "base-textarea-wrapper" }, nd = ["value", "rows", "placeholder", "disabled", "maxlength"], sd = {
  key: 0,
  class: "base-textarea-count"
}, ld = /* @__PURE__ */ O({
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
    return (d, n) => (o(), s("div", ad, [
      t("textarea", {
        value: e.modelValue,
        rows: e.rows,
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxlength: e.maxLength,
        class: "base-textarea",
        onInput: n[0] || (n[0] = (r) => d.$emit("update:modelValue", r.target.value)),
        onKeydown: [
          n[1] || (n[1] = _e(ke((r) => d.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          n[2] || (n[2] = _e(ke((r) => d.$emit("ctrlEnter"), ["meta"]), ["enter"]))
        ]
      }, null, 40, nd),
      e.showCharCount && e.maxLength ? (o(), s("div", sd, c(e.modelValue.length) + " / " + c(e.maxLength), 1)) : v("", !0)
    ]));
  }
}), rd = /* @__PURE__ */ P(ld, [["__scopeId", "data-v-5516e6fc"]]), id = { class: "commit-popover" }, cd = { class: "popover-header" }, dd = { class: "popover-body" }, ud = {
  key: 0,
  class: "changes-summary"
}, md = {
  key: 0,
  class: "change-item"
}, vd = {
  key: 1,
  class: "change-item"
}, fd = {
  key: 2,
  class: "change-item"
}, gd = {
  key: 3,
  class: "change-item"
}, hd = {
  key: 4,
  class: "change-item"
}, pd = {
  key: 1,
  class: "no-changes"
}, yd = {
  key: 2,
  class: "loading"
}, bd = { class: "message-section" }, wd = { class: "popover-footer" }, kd = /* @__PURE__ */ O({
  __name: "CommitPopover",
  props: {
    status: {}
  },
  emits: ["close", "committed"],
  setup(e, { emit: d }) {
    const n = e, r = d, { commit: i } = fe(), p = S(""), m = S(!1), g = S(null), u = B(() => {
      if (!n.status) return !1;
      const L = n.status.workflows;
      return L.new.length > 0 || L.modified.length > 0 || L.deleted.length > 0 || n.status.has_changes;
    });
    async function h() {
      var L, E, F;
      if (!(!u.value || !p.value.trim() || m.value)) {
        m.value = !0, g.value = null;
        try {
          const U = await i(p.value.trim());
          U.status === "success" ? (g.value = {
            type: "success",
            message: `Committed: ${((L = U.summary) == null ? void 0 : L.new) || 0} new, ${((E = U.summary) == null ? void 0 : E.modified) || 0} modified, ${((F = U.summary) == null ? void 0 : F.deleted) || 0} deleted`
          }, p.value = "", setTimeout(() => r("committed"), 1e3)) : U.status === "no_changes" ? g.value = { type: "error", message: "No changes to commit" } : g.value = { type: "error", message: U.message || "Commit failed" };
        } catch (U) {
          g.value = { type: "error", message: U instanceof Error ? U.message : "Commit failed" };
        } finally {
          m.value = !1;
        }
      }
    }
    return (L, E) => (o(), s("div", id, [
      t("div", cd, [
        E[4] || (E[4] = t("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        t("button", {
          class: "close-btn",
          onClick: E[0] || (E[0] = (F) => r("close"))
        }, [...E[3] || (E[3] = [
          t("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "currentColor"
          }, [
            t("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
          ], -1)
        ])])
      ]),
      t("div", dd, [
        e.status && u.value ? (o(), s("div", ud, [
          e.status.workflows.new.length ? (o(), s("div", md, [
            E[5] || (E[5] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, c(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : v("", !0),
          e.status.workflows.modified.length ? (o(), s("div", vd, [
            E[6] || (E[6] = t("span", { class: "change-icon modified" }, "~", -1)),
            t("span", null, c(e.status.workflows.modified.length) + " modified", 1)
          ])) : v("", !0),
          e.status.workflows.deleted.length ? (o(), s("div", fd, [
            E[7] || (E[7] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, c(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : v("", !0),
          e.status.git_changes.nodes_added.length ? (o(), s("div", gd, [
            E[8] || (E[8] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, c(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : v("", !0),
          e.status.git_changes.nodes_removed.length ? (o(), s("div", hd, [
            E[9] || (E[9] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, c(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : v("", !0)
        ])) : e.status ? (o(), s("div", pd, " No changes to commit ")) : (o(), s("div", yd, " Loading... ")),
        t("div", bd, [
          l(rd, {
            modelValue: p.value,
            "onUpdate:modelValue": E[1] || (E[1] = (F) => p.value = F),
            placeholder: u.value ? "Describe your changes..." : "No changes",
            disabled: !u.value || m.value,
            rows: 3,
            onCtrlEnter: h
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ]),
        g.value ? (o(), s("div", {
          key: 3,
          class: q(["result", g.value.type])
        }, c(g.value.message), 3)) : v("", !0)
      ]),
      t("div", wd, [
        l(ue, {
          variant: "secondary",
          onClick: E[2] || (E[2] = (F) => r("close"))
        }, {
          default: a(() => [...E[10] || (E[10] = [
            f(" Cancel ", -1)
          ])]),
          _: 1
        }),
        l(ue, {
          variant: "primary",
          disabled: !u.value || !p.value.trim() || m.value,
          loading: m.value,
          onClick: h
        }, {
          default: a(() => [
            f(c(m.value ? "Committing..." : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ])
    ]));
  }
}), $d = /* @__PURE__ */ P(kd, [["__scopeId", "data-v-4f587977"]]), _d = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}', Cd = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}', xd = {
  comfy: _d,
  phosphor: Cd
}, ut = "comfy", _t = "comfygit-theme";
let Te = null, Ct = ut;
function Sd() {
  try {
    const e = localStorage.getItem(_t);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return ut;
}
function xt(e = ut) {
  Te && Te.remove(), Te = document.createElement("style"), Te.id = "comfygit-theme-styles", Te.setAttribute("data-theme", e), Te.textContent = xd[e], document.head.appendChild(Te), document.body.setAttribute("data-comfygit-theme", e), Ct = e;
  try {
    localStorage.setItem(_t, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function Id() {
  return Ct;
}
function Ed(e) {
  xt(e);
}
const mt = document.createElement("link");
mt.rel = "stylesheet";
mt.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(mt);
const Ld = Sd();
xt(Ld);
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), Ed(e);
  },
  getTheme: () => {
    const e = Id();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
let we = null, ge = null, Ge = null;
const Oe = S(null);
async function ct() {
  var e;
  if (!((e = window.app) != null && e.api)) return null;
  try {
    const d = await window.app.api.fetchApi("/v2/comfygit/status");
    d.ok && (Oe.value = await d.json());
  } catch {
  }
}
function zd() {
  if (!Oe.value) return !1;
  const e = Oe.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || Oe.value.has_changes;
}
function Nd() {
  we && we.remove(), we = document.createElement("div"), we.className = "comfygit-panel-overlay";
  const e = document.createElement("div");
  e.className = "comfygit-panel-container", we.appendChild(e), we.addEventListener("click", (r) => {
    r.target === we && rt();
  });
  const d = (r) => {
    r.key === "Escape" && (rt(), document.removeEventListener("keydown", d));
  };
  document.addEventListener("keydown", d), pt({
    render: () => yt(od, {
      onClose: rt,
      onStatusUpdate: (r) => {
        Oe.value = r, Xe();
      }
    })
  }).mount(e), document.body.appendChild(we);
}
function rt() {
  we && (we.remove(), we = null);
}
function Rd(e) {
  Ae(), ge = document.createElement("div"), ge.className = "comfygit-commit-popover-container";
  const d = e.getBoundingClientRect();
  ge.style.position = "fixed", ge.style.top = `${d.bottom + 8}px`, ge.style.right = `${window.innerWidth - d.right}px`, ge.style.zIndex = "10001";
  const n = (i) => {
    ge && !ge.contains(i.target) && i.target !== e && (Ae(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const r = (i) => {
    i.key === "Escape" && (Ae(), document.removeEventListener("keydown", r));
  };
  document.addEventListener("keydown", r), Ge = pt({
    render: () => yt($d, {
      status: Oe.value,
      onClose: Ae,
      onCommitted: () => {
        Ae(), ct().then(Xe);
      }
    })
  }), Ge.mount(ge), document.body.appendChild(ge);
}
function Ae() {
  Ge && (Ge.unmount(), Ge = null), ge && (ge.remove(), ge = null);
}
let $e = null;
function Xe() {
  if (!$e) return;
  const e = $e.querySelector(".commit-indicator");
  e && (e.style.display = zd() ? "block" : "none");
}
const St = document.createElement("style");
St.textContent = `
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
document.head.appendChild(St);
nt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var n, r;
    const e = document.createElement("div");
    e.className = "comfygit-btn-group";
    const d = document.createElement("button");
    d.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", d.textContent = "ComfyGit", d.title = "ComfyGit Control Panel", d.onclick = Nd, $e = document.createElement("button"), $e.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", $e.innerHTML = 'Commit <span class="commit-indicator"></span>', $e.title = "Quick Commit", $e.onclick = () => Rd($e), e.appendChild(d), e.appendChild($e), (r = (n = nt.menu) == null ? void 0 : n.settingsGroup) != null && r.element && (nt.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), await ct(), Xe(), setInterval(async () => {
      await ct(), Xe();
    }, 3e4);
  }
});
