import { app as R } from "../../scripts/app.js";
import { defineComponent as M, computed as A, createElementBlock as c, openBlock as r, createElementVNode as t, createCommentVNode as b, toDisplayString as i, ref as w, nextTick as xt, withDirectives as et, withKeys as Y, vModelText as at, Fragment as S, renderList as T, normalizeClass as G, withModifiers as U, onMounted as rt, createTextVNode as ct, createBlock as ot, createVNode as F, createApp as st, h as nt } from "vue";
const wt = { class: "status-section" }, kt = { class: "status-grid" }, Ct = { class: "status-column" }, zt = {
  key: 0,
  class: "status-item"
}, $t = { class: "count new" }, _t = {
  key: 1,
  class: "status-item"
}, St = { class: "count modified" }, Lt = {
  key: 2,
  class: "status-item"
}, Bt = { class: "count deleted" }, Et = { class: "status-item synced-item" }, Tt = { class: "count synced" }, It = { class: "status-column" }, Mt = {
  key: 0,
  class: "status-item"
}, Nt = { class: "count new" }, Pt = {
  key: 1,
  class: "status-item"
}, At = { class: "count deleted" }, Dt = {
  key: 2,
  class: "status-item"
}, Ot = {
  key: 3,
  class: "status-item ok"
}, Gt = {
  key: 0,
  class: "warning-box"
}, Ut = {
  key: 1,
  class: "warning-box error"
}, Ht = /* @__PURE__ */ M({
  __name: "StatusSection",
  props: {
    status: {}
  },
  setup(o) {
    const d = o, s = A(() => {
      const e = d.status.git_changes;
      return e.nodes_added.length > 0 || e.nodes_removed.length > 0 || e.workflow_changes || e.has_other_changes;
    });
    return (e, a) => (r(), c("div", wt, [
      t("div", kt, [
        t("div", Ct, [
          a[8] || (a[8] = t("h4", { class: "column-title" }, "Workflows", -1)),
          o.status.workflows.new.length ? (r(), c("div", zt, [
            a[0] || (a[0] = t("span", { class: "icon" }, "●", -1)),
            t("span", $t, i(o.status.workflows.new.length), 1),
            a[1] || (a[1] = t("span", { class: "label" }, "new", -1))
          ])) : b("", !0),
          o.status.workflows.modified.length ? (r(), c("div", _t, [
            a[2] || (a[2] = t("span", { class: "icon" }, "●", -1)),
            t("span", St, i(o.status.workflows.modified.length), 1),
            a[3] || (a[3] = t("span", { class: "label" }, "modified", -1))
          ])) : b("", !0),
          o.status.workflows.deleted.length ? (r(), c("div", Lt, [
            a[4] || (a[4] = t("span", { class: "icon" }, "●", -1)),
            t("span", Bt, i(o.status.workflows.deleted.length), 1),
            a[5] || (a[5] = t("span", { class: "label" }, "deleted", -1))
          ])) : b("", !0),
          t("div", Et, [
            a[6] || (a[6] = t("span", { class: "icon synced" }, "✓", -1)),
            t("span", Tt, i(o.status.workflows.synced.length), 1),
            a[7] || (a[7] = t("span", { class: "label" }, "synced", -1))
          ])
        ]),
        t("div", It, [
          a[15] || (a[15] = t("h4", { class: "column-title" }, "Git Changes", -1)),
          o.status.git_changes.nodes_added.length ? (r(), c("div", Mt, [
            a[9] || (a[9] = t("span", { class: "icon" }, "●", -1)),
            t("span", Nt, i(o.status.git_changes.nodes_added.length), 1),
            a[10] || (a[10] = t("span", { class: "label" }, "node added", -1))
          ])) : b("", !0),
          o.status.git_changes.nodes_removed.length ? (r(), c("div", Pt, [
            a[11] || (a[11] = t("span", { class: "icon" }, "●", -1)),
            t("span", At, i(o.status.git_changes.nodes_removed.length), 1),
            a[12] || (a[12] = t("span", { class: "label" }, "node removed", -1))
          ])) : b("", !0),
          o.status.git_changes.workflow_changes ? (r(), c("div", Dt, [...a[13] || (a[13] = [
            t("span", { class: "icon" }, "●", -1),
            t("span", { class: "count modified" }, "●", -1),
            t("span", { class: "label" }, "workflows changed", -1)
          ])])) : b("", !0),
          s.value ? b("", !0) : (r(), c("div", Ot, [...a[14] || (a[14] = [
            t("span", { class: "icon" }, "✓", -1),
            t("span", { class: "label" }, "No uncommitted changes", -1)
          ])]))
        ])
      ]),
      o.status.missing_models_count > 0 ? (r(), c("div", Gt, [
        a[16] || (a[16] = t("span", { class: "warning-icon" }, "⚠", -1)),
        t("span", null, i(o.status.missing_models_count) + " missing model(s)", 1)
      ])) : b("", !0),
      o.status.comparison.is_synced ? b("", !0) : (r(), c("div", Ut, [...a[17] || (a[17] = [
        t("span", { class: "warning-icon" }, "⚠", -1),
        t("span", null, "Environment not synced", -1)
      ])]))
    ]));
  }
}), N = (o, d) => {
  const s = o.__vccOpts || o;
  for (const [e, a] of d)
    s[e] = a;
  return s;
}, Vt = /* @__PURE__ */ N(Ht, [["__scopeId", "data-v-30ea4f72"]]), Yt = { class: "branch-section" }, jt = { class: "section-header" }, Rt = { class: "branch-card" }, Ft = {
  key: 0,
  class: "create-branch-row"
}, Jt = ["disabled"], Kt = {
  key: 1,
  class: "empty"
}, Wt = {
  key: 2,
  class: "branch-list"
}, Xt = { class: "branch-indicator" }, qt = { class: "branch-name" }, Qt = ["onClick"], Zt = {
  key: 1,
  class: "current-label"
}, to = /* @__PURE__ */ M({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create"],
  setup(o, { emit: d }) {
    const s = d, e = w(!1), a = w(""), y = w(null);
    function C() {
      a.value.trim() && (s("create", a.value.trim()), p());
    }
    function p() {
      e.value = !1, a.value = "";
    }
    return xt(() => {
      e.value && y.value && y.value.focus();
    }), (g, x) => (r(), c("div", Yt, [
      t("div", jt, [
        x[3] || (x[3] = t("h4", { class: "section-title" }, "Branches", -1)),
        t("button", {
          class: "add-btn",
          onClick: x[0] || (x[0] = (v) => e.value = !0),
          title: "New Branch"
        }, [...x[2] || (x[2] = [
          t("svg", {
            width: "12",
            height: "12",
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
        ])])
      ]),
      t("div", Rt, [
        e.value ? (r(), c("div", Ft, [
          et(t("input", {
            ref_key: "createInput",
            ref: y,
            "onUpdate:modelValue": x[1] || (x[1] = (v) => a.value = v),
            class: "branch-input",
            placeholder: "Branch name...",
            onKeyup: [
              Y(C, ["enter"]),
              Y(p, ["escape"])
            ]
          }, null, 544), [
            [at, a.value]
          ]),
          t("button", {
            class: "action-btn create",
            onClick: C,
            disabled: !a.value.trim()
          }, " Create ", 8, Jt),
          t("button", {
            class: "action-btn cancel",
            onClick: p
          }, " Cancel ")
        ])) : b("", !0),
        o.branches.length === 0 ? (r(), c("div", Kt, " No branches found ")) : (r(), c("div", Wt, [
          (r(!0), c(S, null, T(o.branches, (v) => (r(), c("div", {
            key: v.name,
            class: G(["branch-item", { current: v.is_current }])
          }, [
            t("span", Xt, i(v.is_current ? "●" : "○"), 1),
            t("span", qt, i(v.name), 1),
            v.is_current ? (r(), c("span", Zt, "current")) : (r(), c("button", {
              key: 0,
              class: "switch-btn",
              onClick: (l) => g.$emit("switch", v.name)
            }, " Switch ", 8, Qt))
          ], 2))), 128))
        ]))
      ])
    ]));
  }
}), oo = /* @__PURE__ */ N(to, [["__scopeId", "data-v-be3b0883"]]), eo = { class: "history-section" }, ao = { class: "history-card" }, ro = {
  key: 0,
  class: "empty"
}, co = {
  key: 1,
  class: "commit-list"
}, so = ["onClick"], no = { class: "commit-hash" }, io = { class: "commit-message" }, lo = { class: "commit-date" }, go = ["onClick"], mo = /* @__PURE__ */ M({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(o) {
    return (d, s) => (r(), c("div", eo, [
      s[2] || (s[2] = t("div", { class: "section-header" }, [
        t("h4", { class: "section-title" }, "History")
      ], -1)),
      t("div", ao, [
        o.commits.length === 0 ? (r(), c("div", ro, " No commits yet ")) : (r(), c("div", co, [
          (r(!0), c(S, null, T(o.commits, (e) => {
            var a;
            return r(), c("div", {
              key: e.hash,
              class: "commit-item",
              onClick: (y) => d.$emit("select", e)
            }, [
              t("span", no, i(e.short_hash || ((a = e.hash) == null ? void 0 : a.slice(0, 7))), 1),
              t("span", io, i(e.message), 1),
              t("span", lo, i(e.date_relative || e.relative_date), 1),
              t("div", {
                class: "commit-actions",
                onClick: s[0] || (s[0] = U(() => {
                }, ["stop"]))
              }, [
                t("button", {
                  class: "action-btn",
                  onClick: (y) => d.$emit("checkout", e),
                  title: "Checkout this commit"
                }, [...s[1] || (s[1] = [
                  t("svg", {
                    width: "12",
                    height: "12",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    t("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" })
                  ], -1)
                ])], 8, go)
              ])
            ], 8, so);
          }), 128))
        ]))
      ])
    ]));
  }
}), fo = /* @__PURE__ */ N(mo, [["__scopeId", "data-v-3bb44122"]]);
function X() {
  const o = w(!1), d = w(null);
  async function s(u, h) {
    var f;
    if (!((f = window.app) != null && f.api))
      throw new Error("ComfyUI API not available");
    const $ = await window.app.api.fetchApi(u, h);
    if (!$.ok) {
      const L = await $.json().catch(() => ({}));
      throw new Error(L.error || L.message || `Request failed: ${$.status}`);
    }
    return $.json();
  }
  async function e() {
    return s("/v2/comfygit/status");
  }
  async function a(u, h = !1) {
    return s("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: u, allow_issues: h })
    });
  }
  async function y(u = 10, h = 0) {
    return s(`/v2/comfygit/log?limit=${u}&offset=${h}`);
  }
  async function C(u) {
    return s("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: u })
    });
  }
  async function p() {
    return s("/v2/comfygit/branches");
  }
  async function g(u) {
    return s(`/v2/comfygit/commit/${u}`);
  }
  async function x(u, h = !1) {
    return s("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: u, force: h })
    });
  }
  async function v(u, h = "HEAD") {
    return s("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: u, start_point: h })
    });
  }
  async function l(u, h = !1) {
    return s("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: u, force: h })
    });
  }
  return {
    isLoading: o,
    error: d,
    getStatus: e,
    commit: a,
    getHistory: y,
    exportEnv: C,
    // Phase 2
    getBranches: p,
    getCommitDetail: g,
    checkout: x,
    createBranch: v,
    switchBranch: l
  };
}
const po = { class: "modal-content" }, uo = { class: "modal-header" }, ho = { class: "commit-info" }, bo = { class: "commit-hash" }, vo = {
  key: 0,
  class: "commit-refs"
}, yo = { class: "modal-body" }, xo = { class: "commit-message" }, wo = { class: "commit-date" }, ko = {
  key: 0,
  class: "loading"
}, Co = {
  key: 1,
  class: "changes-section"
}, zo = { class: "stats-row" }, $o = { class: "stat" }, _o = { class: "stat insertions" }, So = { class: "stat deletions" }, Lo = {
  key: 0,
  class: "change-group"
}, Bo = {
  key: 1,
  class: "change-group"
}, Eo = {
  key: 0,
  class: "version"
}, To = {
  key: 2,
  class: "change-group"
}, Io = { class: "change-item" }, Mo = { class: "modal-footer" }, No = /* @__PURE__ */ M({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(o) {
    const d = o, { getCommitDetail: s } = X(), e = w(null), a = w(!0), y = A(() => {
      if (!e.value) return !1;
      const p = e.value.changes.workflows;
      return p.added.length > 0 || p.modified.length > 0 || p.deleted.length > 0;
    }), C = A(() => {
      if (!e.value) return !1;
      const p = e.value.changes.nodes;
      return p.added.length > 0 || p.removed.length > 0;
    });
    return rt(async () => {
      try {
        e.value = await s(d.commit.hash);
      } finally {
        a.value = !1;
      }
    }), (p, g) => {
      var x, v, l, u, h, $;
      return r(), c("div", {
        class: "modal-overlay",
        onClick: g[3] || (g[3] = U((f) => p.$emit("close"), ["self"]))
      }, [
        t("div", po, [
          t("div", uo, [
            t("div", ho, [
              t("span", bo, i(((x = e.value) == null ? void 0 : x.short_hash) || o.commit.short_hash || ((v = o.commit.hash) == null ? void 0 : v.slice(0, 7))), 1),
              (u = (l = e.value) == null ? void 0 : l.refs) != null && u.length ? (r(), c("span", vo, [
                (r(!0), c(S, null, T(e.value.refs, (f) => (r(), c("span", {
                  key: f,
                  class: "ref-badge"
                }, i(f), 1))), 128))
              ])) : b("", !0)
            ]),
            t("button", {
              class: "close-btn",
              onClick: g[0] || (g[0] = (f) => p.$emit("close"))
            }, [...g[4] || (g[4] = [
              t("svg", {
                width: "14",
                height: "14",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                t("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])
          ]),
          t("div", yo, [
            t("div", xo, i(((h = e.value) == null ? void 0 : h.message) || o.commit.message), 1),
            t("div", wo, i((($ = e.value) == null ? void 0 : $.date_relative) || o.commit.date_relative || o.commit.relative_date), 1),
            a.value ? (r(), c("div", ko, "Loading details...")) : e.value ? (r(), c("div", Co, [
              t("div", zo, [
                t("span", $o, i(e.value.stats.files_changed) + " files", 1),
                t("span", _o, "+" + i(e.value.stats.insertions), 1),
                t("span", So, "-" + i(e.value.stats.deletions), 1)
              ]),
              y.value ? (r(), c("div", Lo, [
                g[8] || (g[8] = t("h4", { class: "change-title" }, "Workflows", -1)),
                (r(!0), c(S, null, T(e.value.changes.workflows.added, (f) => (r(), c("div", {
                  key: "add-" + f,
                  class: "change-item added"
                }, [
                  g[5] || (g[5] = t("span", { class: "change-icon" }, "+", -1)),
                  t("span", null, i(f), 1)
                ]))), 128)),
                (r(!0), c(S, null, T(e.value.changes.workflows.modified, (f) => (r(), c("div", {
                  key: "mod-" + f,
                  class: "change-item modified"
                }, [
                  g[6] || (g[6] = t("span", { class: "change-icon" }, "~", -1)),
                  t("span", null, i(f), 1)
                ]))), 128)),
                (r(!0), c(S, null, T(e.value.changes.workflows.deleted, (f) => (r(), c("div", {
                  key: "del-" + f,
                  class: "change-item deleted"
                }, [
                  g[7] || (g[7] = t("span", { class: "change-icon" }, "-", -1)),
                  t("span", null, i(f), 1)
                ]))), 128))
              ])) : b("", !0),
              C.value ? (r(), c("div", Bo, [
                g[11] || (g[11] = t("h4", { class: "change-title" }, "Nodes", -1)),
                (r(!0), c(S, null, T(e.value.changes.nodes.added, (f) => (r(), c("div", {
                  key: "add-" + f.name,
                  class: "change-item added"
                }, [
                  g[9] || (g[9] = t("span", { class: "change-icon" }, "+", -1)),
                  t("span", null, i(f.name), 1),
                  f.version ? (r(), c("span", Eo, "(" + i(f.version) + ")", 1)) : b("", !0)
                ]))), 128)),
                (r(!0), c(S, null, T(e.value.changes.nodes.removed, (f) => (r(), c("div", {
                  key: "rem-" + f.name,
                  class: "change-item deleted"
                }, [
                  g[10] || (g[10] = t("span", { class: "change-icon" }, "-", -1)),
                  t("span", null, i(f.name), 1)
                ]))), 128))
              ])) : b("", !0),
              e.value.changes.models.resolved > 0 ? (r(), c("div", To, [
                g[13] || (g[13] = t("h4", { class: "change-title" }, "Models", -1)),
                t("div", Io, [
                  g[12] || (g[12] = t("span", { class: "change-icon" }, "●", -1)),
                  t("span", null, i(e.value.changes.models.resolved) + " model(s) resolved", 1)
                ])
              ])) : b("", !0)
            ])) : b("", !0)
          ]),
          t("div", Mo, [
            t("button", {
              class: "action-btn secondary",
              onClick: g[1] || (g[1] = (f) => p.$emit("createBranch", o.commit))
            }, " Create Branch "),
            t("button", {
              class: "action-btn primary",
              onClick: g[2] || (g[2] = (f) => p.$emit("checkout", o.commit))
            }, " Checkout ")
          ])
        ])
      ]);
    };
  }
}), Po = /* @__PURE__ */ N(No, [["__scopeId", "data-v-9768f067"]]), Ao = { class: "dialog-content" }, Do = { class: "dialog-header" }, Oo = { class: "dialog-title" }, Go = { class: "dialog-body" }, Uo = { class: "dialog-message" }, Ho = {
  key: 0,
  class: "dialog-details"
}, Vo = {
  key: 1,
  class: "dialog-warning"
}, Yo = { class: "dialog-footer" }, jo = /* @__PURE__ */ M({
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
  setup(o) {
    return (d, s) => (r(), c("div", {
      class: "dialog-overlay",
      onClick: s[3] || (s[3] = U((e) => d.$emit("cancel"), ["self"]))
    }, [
      t("div", Ao, [
        t("div", Do, [
          t("h3", Oo, i(o.title), 1)
        ]),
        t("div", Go, [
          t("p", Uo, i(o.message), 1),
          o.details && o.details.length ? (r(), c("div", Ho, [
            (r(!0), c(S, null, T(o.details, (e, a) => (r(), c("div", {
              key: a,
              class: "detail-item"
            }, " • " + i(e), 1))), 128))
          ])) : b("", !0),
          o.warning ? (r(), c("p", Vo, [
            s[4] || (s[4] = t("span", { class: "warning-icon" }, "⚠", -1)),
            ct(" " + i(o.warning), 1)
          ])) : b("", !0)
        ]),
        t("div", Yo, [
          t("button", {
            class: "dialog-btn cancel",
            onClick: s[0] || (s[0] = (e) => d.$emit("cancel"))
          }, i(o.cancelLabel), 1),
          o.secondaryAction ? (r(), c("button", {
            key: 0,
            class: "dialog-btn secondary",
            onClick: s[1] || (s[1] = (e) => d.$emit("secondary"))
          }, i(o.secondaryLabel), 1)) : b("", !0),
          t("button", {
            class: G(["dialog-btn primary", { destructive: o.destructive }]),
            onClick: s[2] || (s[2] = (e) => d.$emit("confirm"))
          }, i(o.confirmLabel), 3)
        ])
      ])
    ]));
  }
}), Ro = /* @__PURE__ */ N(jo, [["__scopeId", "data-v-d24c6c0b"]]), Fo = "[data-comfygit-theme=default] .comfygit-panel{font-family:var(--cg-font-body)}[data-comfygit-theme=default] .panel-title{color:var(--cg-color-accent)}", Jo = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 9px;--cg-font-size-sm: 11px;--cg-font-size-base: 13px;--cg-font-size-lg: 14px;--cg-font-size-xl: 16px;--cg-font-size-2xl: 18px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 1px,rgba(0,0,0,.3) 1px,rgba(0,0,0,.3) 2px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-header{background:var(--cg-color-bg-tertiary);border-bottom:1px solid var(--cg-color-border);padding:var(--cg-space-3) var(--cg-space-4)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:cursor-blink 1s step-end infinite}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}', Ko = '@import"https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap";[data-comfygit-theme=swiss]{--cg-font-display: "Playfair Display", Georgia, serif;--cg-font-body: "DM Sans", system-ui, sans-serif;--cg-font-mono: "JetBrains Mono", ui-monospace, monospace;--cg-font-size-xs: 10px;--cg-font-size-sm: 12px;--cg-font-size-base: 14px;--cg-font-size-lg: 18px;--cg-font-size-xl: 24px;--cg-font-size-2xl: 32px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-line-height-tight: 1.1;--cg-line-height-normal: 1.6;--cg-line-height-relaxed: 1.8;--cg-letter-spacing-tight: -.03em;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .15em;--cg-color-bg-primary: #fafafa;--cg-color-bg-secondary: #ffffff;--cg-color-bg-tertiary: #f0f0f0;--cg-color-bg-hover: #e8e8e8;--cg-color-bg-overlay: rgba(0, 0, 0, .6);--cg-color-text-primary: #0a0a0a;--cg-color-text-secondary: #404040;--cg-color-text-muted: #808080;--cg-color-text-inverse: #ffffff;--cg-color-border: #0a0a0a;--cg-color-border-subtle: #e0e0e0;--cg-color-border-strong: #0a0a0a;--cg-color-accent: #dc2626;--cg-color-accent-hover: #b91c1c;--cg-color-accent-muted: rgba(220, 38, 38, .1);--cg-color-success: #16a34a;--cg-color-success-muted: rgba(22, 163, 74, .1);--cg-color-warning: #d97706;--cg-color-warning-muted: rgba(217, 119, 6, .08);--cg-color-error: #dc2626;--cg-color-error-muted: rgba(220, 38, 38, .08);--cg-color-info: #0a0a0a;--cg-color-info-muted: rgba(10, 10, 10, .05);--cg-space-1: 4px;--cg-space-2: 8px;--cg-space-3: 16px;--cg-space-4: 24px;--cg-space-5: 32px;--cg-space-6: 40px;--cg-space-8: 56px;--cg-space-10: 72px;--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 2px;--cg-radius-lg: 2px;--cg-radius-xl: 2px;--cg-radius-2xl: 2px;--cg-radius-full: 2px;--cg-shadow-sm: none;--cg-shadow-md: 0 1px 0 rgba(0, 0, 0, .05);--cg-shadow-lg: 0 4px 24px rgba(0, 0, 0, .08);--cg-shadow-xl: 0 8px 48px rgba(0, 0, 0, .12);--cg-btn-gradient-start: #0a0a0a;--cg-btn-gradient-end: #0a0a0a;--cg-btn-shadow-inset: none}[data-comfygit-theme=swiss] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-xl);font-family:var(--cg-font-body)}[data-comfygit-theme=swiss] .panel-header{background:var(--cg-color-bg-secondary);border-bottom:2px solid var(--cg-color-border);padding:var(--cg-space-4) var(--cg-space-5)}[data-comfygit-theme=swiss] .header-left{flex-direction:column;align-items:flex-start;gap:var(--cg-space-1)}[data-comfygit-theme=swiss] .panel-title{font-family:var(--cg-font-display);font-size:var(--cg-font-size-xl);font-weight:700;color:var(--cg-color-text-primary);letter-spacing:var(--cg-letter-spacing-tight);line-height:var(--cg-line-height-tight)}[data-comfygit-theme=swiss] .header-info{font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-muted)}[data-comfygit-theme=swiss] .env-name{font-weight:var(--cg-font-weight-semibold);color:var(--cg-color-text-secondary)}[data-comfygit-theme=swiss] .branch-name{color:var(--cg-color-text-muted)}[data-comfygit-theme=swiss] .status-dot{width:6px;height:6px;border-radius:0}[data-comfygit-theme=swiss] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=swiss] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=swiss] .status-dot.error{background:var(--cg-color-accent)}[data-comfygit-theme=swiss] .icon-btn{color:var(--cg-color-text-primary);border-radius:0;transition:all var(--cg-transition-fast)}[data-comfygit-theme=swiss] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=swiss] .panel-content{padding:var(--cg-space-5)}[data-comfygit-theme=swiss] .status-section{margin-bottom:var(--cg-space-5)}[data-comfygit-theme=swiss] .status-grid{background:var(--cg-color-bg-secondary);border:1px solid var(--cg-color-border-subtle);border-radius:0}[data-comfygit-theme=swiss] .status-column{padding:var(--cg-space-4)}[data-comfygit-theme=swiss] .status-column:first-child{border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=swiss] .column-title{font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-muted);margin-bottom:var(--cg-space-3);padding-bottom:var(--cg-space-2);border-bottom:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=swiss] .status-item{font-size:var(--cg-font-size-sm);padding:var(--cg-space-1) 0}[data-comfygit-theme=swiss] .status-item .icon{display:none}[data-comfygit-theme=swiss] .count{font-family:var(--cg-font-display);font-size:var(--cg-font-size-lg);font-weight:700;min-width:24px}[data-comfygit-theme=swiss] .count.new{color:var(--cg-color-success)}[data-comfygit-theme=swiss] .count.modified{color:var(--cg-color-warning)}[data-comfygit-theme=swiss] .count.deleted{color:var(--cg-color-accent)}[data-comfygit-theme=swiss] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=swiss] .label{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide)}[data-comfygit-theme=swiss] .synced-item{border-top:1px solid var(--cg-color-border-subtle);margin-top:var(--cg-space-2);padding-top:var(--cg-space-2)}[data-comfygit-theme=swiss] .status-item.ok .label{color:var(--cg-color-success)}[data-comfygit-theme=swiss] .warning-box{background:var(--cg-color-warning-muted);border:none;border-left:3px solid var(--cg-color-warning);color:var(--cg-color-text-primary);font-size:var(--cg-font-size-sm);padding:var(--cg-space-3)}[data-comfygit-theme=swiss] .warning-box.error{background:var(--cg-color-error-muted);border-left-color:var(--cg-color-accent)}[data-comfygit-theme=swiss] .warning-icon{display:none}[data-comfygit-theme=swiss] .history-section{border-top:2px solid var(--cg-color-border);padding-top:var(--cg-space-4);margin-top:var(--cg-space-4)}[data-comfygit-theme=swiss] .history-title{font-family:var(--cg-font-display);font-size:var(--cg-font-size-lg);font-weight:600;color:var(--cg-color-text-primary);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=swiss] .commit-item{background:transparent;border:none;border-bottom:1px solid var(--cg-color-border-subtle);padding:var(--cg-space-3) 0;display:grid;grid-template-columns:60px 1fr auto;gap:var(--cg-space-3);align-items:baseline}[data-comfygit-theme=swiss] .commit-item:last-child{border-bottom:none}[data-comfygit-theme=swiss] .commit-item:hover{background:var(--cg-color-bg-hover);margin:0 calc(-1 * var(--cg-space-3));padding-left:var(--cg-space-3);padding-right:var(--cg-space-3)}[data-comfygit-theme=swiss] .commit-hash{font-family:var(--cg-font-mono);font-size:var(--cg-font-size-xs);color:var(--cg-color-accent);font-weight:500}[data-comfygit-theme=swiss] .commit-message{font-size:var(--cg-font-size-sm);color:var(--cg-color-text-primary);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=swiss] .commit-date{font-size:var(--cg-font-size-xs);color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide)}[data-comfygit-theme=swiss] .panel-footer{border-top:2px solid var(--cg-color-border);background:var(--cg-color-bg-secondary);padding:var(--cg-space-4) var(--cg-space-5)}[data-comfygit-theme=swiss] .export-btn{background:var(--cg-color-text-primary);color:var(--cg-color-text-inverse);border:none;text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-semibold);padding:var(--cg-space-3) var(--cg-space-4);transition:all var(--cg-transition-fast)}[data-comfygit-theme=swiss] .export-btn:hover:not(:disabled){background:var(--cg-color-accent);transform:translateY(-1px)}[data-comfygit-theme=swiss] .commit-popover{background:var(--cg-color-bg-secondary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=swiss] .commit-input{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-body);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=swiss] .commit-input:focus{border-color:var(--cg-color-border);outline:none}[data-comfygit-theme=swiss] .comfygit-panel-btn{background:var(--cg-color-text-primary)!important;color:var(--cg-color-text-inverse)!important;border:none!important;border-radius:0!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-body);font-size:10px;font-weight:600;box-shadow:none!important}[data-comfygit-theme=swiss] .comfygit-panel-btn:hover{background:var(--cg-color-accent)!important}[data-comfygit-theme=swiss] .comfygit-commit-btn{background:var(--cg-color-bg-secondary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border)!important;border-radius:0!important;font-family:var(--cg-font-body);font-size:10px;text-transform:uppercase;letter-spacing:.1em}[data-comfygit-theme=swiss] .comfygit-commit-btn:hover{background:var(--cg-color-bg-hover)!important}[data-comfygit-theme=swiss] .commit-indicator{background:var(--cg-color-accent);width:6px;height:6px;border-radius:0}[data-comfygit-theme=swiss] .panel-content::-webkit-scrollbar{width:4px}[data-comfygit-theme=swiss] .panel-content::-webkit-scrollbar-track{background:transparent}[data-comfygit-theme=swiss] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle)}[data-comfygit-theme=swiss] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-text-muted)}[data-comfygit-theme=swiss] ::selection{background:var(--cg-color-accent);color:var(--cg-color-text-inverse)}', Wo = '@import"https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Nunito:wght@400;500;600;700&display=swap";[data-comfygit-theme=soft]{--cg-font-display: "Outfit", system-ui, sans-serif;--cg-font-body: "Nunito", system-ui, sans-serif;--cg-font-mono: "SF Mono", ui-monospace, monospace;--cg-font-size-xs: 11px;--cg-font-size-sm: 13px;--cg-font-size-base: 15px;--cg-font-size-lg: 18px;--cg-font-size-xl: 22px;--cg-font-size-2xl: 28px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-line-height-tight: 1.3;--cg-line-height-normal: 1.6;--cg-line-height-relaxed: 1.8;--cg-letter-spacing-tight: -.01em;--cg-letter-spacing-normal: .01em;--cg-letter-spacing-wide: .04em;--cg-color-bg-primary: rgba(30, 27, 38, .95);--cg-color-bg-secondary: rgba(40, 36, 50, .8);--cg-color-bg-tertiary: rgba(50, 45, 62, .6);--cg-color-bg-hover: rgba(80, 70, 100, .4);--cg-color-bg-overlay: rgba(20, 18, 28, .75);--cg-color-text-primary: #f0eef5;--cg-color-text-secondary: #c4bfd4;--cg-color-text-muted: #8a8299;--cg-color-text-inverse: #1e1b26;--cg-color-border: rgba(255, 255, 255, .08);--cg-color-border-subtle: rgba(255, 255, 255, .04);--cg-color-border-strong: rgba(255, 255, 255, .15);--cg-color-accent: #a78bfa;--cg-color-accent-hover: #c4b5fd;--cg-color-accent-muted: rgba(167, 139, 250, .2);--cg-color-success: #86efac;--cg-color-success-muted: rgba(134, 239, 172, .15);--cg-color-warning: #fcd34d;--cg-color-warning-muted: rgba(252, 211, 77, .12);--cg-color-error: #fca5a5;--cg-color-error-muted: rgba(252, 165, 165, .12);--cg-color-info: #93c5fd;--cg-color-info-muted: rgba(147, 197, 253, .15);--cg-space-1: 4px;--cg-space-2: 8px;--cg-space-3: 14px;--cg-space-4: 20px;--cg-space-5: 28px;--cg-space-6: 36px;--cg-space-8: 48px;--cg-radius-none: 0;--cg-radius-sm: 6px;--cg-radius-md: 10px;--cg-radius-lg: 16px;--cg-radius-xl: 24px;--cg-radius-2xl: 32px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 2px 8px rgba(0, 0, 0, .15);--cg-shadow-md: 0 4px 16px rgba(0, 0, 0, .2), 0 0 40px rgba(167, 139, 250, .05);--cg-shadow-lg: 0 8px 32px rgba(0, 0, 0, .25), 0 0 60px rgba(167, 139, 250, .08);--cg-shadow-xl: 0 16px 48px rgba(0, 0, 0, .3), 0 0 80px rgba(167, 139, 250, .1);--cg-blur-sm: 8px;--cg-blur-md: 16px;--cg-blur-lg: 24px;--cg-btn-gradient-start: #a78bfa;--cg-btn-gradient-end: #8b5cf6;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .25)}[data-comfygit-theme=soft] .comfygit-panel{background:linear-gradient(135deg,#3c325066,#1e1b26f2),var(--cg-color-bg-primary);backdrop-filter:blur(var(--cg-blur-lg));-webkit-backdrop-filter:blur(var(--cg-blur-lg));border:1px solid var(--cg-color-border-strong);border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);font-family:var(--cg-font-body);overflow:hidden}[data-comfygit-theme=soft] .comfygit-panel:before{content:"";position:absolute;top:-50%;right:-50%;width:100%;height:100%;background:radial-gradient(circle at center,rgba(167,139,250,.15) 0%,transparent 50%);pointer-events:none;animation:soft-glow 8s ease-in-out infinite alternate}@keyframes soft-glow{0%{transform:translate(0) scale(1);opacity:.5}to{transform:translate(-10%,10%) scale(1.2);opacity:.8}}[data-comfygit-theme=soft] .panel-header{background:#ffffff08;border-bottom:1px solid var(--cg-color-border);padding:var(--cg-space-4) var(--cg-space-5);position:relative}[data-comfygit-theme=soft] .panel-title{font-family:var(--cg-font-display);font-size:var(--cg-font-size-lg);font-weight:600;color:var(--cg-color-text-primary);background:linear-gradient(90deg,var(--cg-color-text-primary),var(--cg-color-accent));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}[data-comfygit-theme=soft] .header-info{font-size:var(--cg-font-size-xs)}[data-comfygit-theme=soft] .env-name{color:var(--cg-color-text-secondary);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=soft] .branch-name{color:var(--cg-color-text-muted)}[data-comfygit-theme=soft] .status-dot{width:10px;height:10px;border-radius:var(--cg-radius-full);box-shadow:0 0 8px currentColor}[data-comfygit-theme=soft] .status-dot.success{background:var(--cg-color-success);box-shadow:0 0 12px var(--cg-color-success)}[data-comfygit-theme=soft] .status-dot.warning{background:var(--cg-color-warning);box-shadow:0 0 12px var(--cg-color-warning)}[data-comfygit-theme=soft] .status-dot.error{background:var(--cg-color-error);box-shadow:0 0 12px var(--cg-color-error)}[data-comfygit-theme=soft] .icon-btn{color:var(--cg-color-text-secondary);border-radius:var(--cg-radius-md);transition:all var(--cg-transition-normal)}[data-comfygit-theme=soft] .icon-btn:hover{background:var(--cg-color-bg-hover);color:var(--cg-color-text-primary);transform:scale(1.05)}[data-comfygit-theme=soft] .panel-content{padding:var(--cg-space-5);position:relative}[data-comfygit-theme=soft] .status-section{margin-bottom:var(--cg-space-5)}[data-comfygit-theme=soft] .status-grid{background:#ffffff08;-webkit-backdrop-filter:blur(var(--cg-blur-sm));backdrop-filter:blur(var(--cg-blur-sm));border:1px solid var(--cg-color-border);border-radius:var(--cg-radius-lg);overflow:hidden}[data-comfygit-theme=soft] .status-column{padding:var(--cg-space-4)}[data-comfygit-theme=soft] .status-column:first-child{border-right:1px solid var(--cg-color-border)}[data-comfygit-theme=soft] .column-title{font-family:var(--cg-font-display);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-muted);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=soft] .status-item{font-size:var(--cg-font-size-sm);padding:var(--cg-space-1) 0}[data-comfygit-theme=soft] .status-item .icon{font-size:6px;opacity:.6}[data-comfygit-theme=soft] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=soft] .count.new{color:var(--cg-color-success)}[data-comfygit-theme=soft] .count.modified{color:var(--cg-color-warning)}[data-comfygit-theme=soft] .count.deleted{color:var(--cg-color-error)}[data-comfygit-theme=soft] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=soft] .synced-item{border-top:1px solid var(--cg-color-border);margin-top:var(--cg-space-2);padding-top:var(--cg-space-2)}[data-comfygit-theme=soft] .status-item.ok,[data-comfygit-theme=soft] .status-item.ok .label{color:var(--cg-color-success)}[data-comfygit-theme=soft] .warning-box{background:var(--cg-color-warning-muted);border:1px solid rgba(252,211,77,.3);border-radius:var(--cg-radius-md);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm);padding:var(--cg-space-3)}[data-comfygit-theme=soft] .warning-box.error{background:var(--cg-color-error-muted);border-color:#fca5a54d;color:var(--cg-color-error)}[data-comfygit-theme=soft] .history-section{margin-top:var(--cg-space-4)}[data-comfygit-theme=soft] .history-title{font-family:var(--cg-font-display);font-size:var(--cg-font-size-sm);font-weight:var(--cg-font-weight-semibold);color:var(--cg-color-text-secondary);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=soft] .commit-item{background:#ffffff05;border:1px solid var(--cg-color-border-subtle);border-radius:var(--cg-radius-md);padding:var(--cg-space-3);margin-bottom:var(--cg-space-2);transition:all var(--cg-transition-normal)}[data-comfygit-theme=soft] .commit-item:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border);transform:translateY(-2px);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=soft] .commit-hash{font-family:var(--cg-font-mono);font-size:var(--cg-font-size-xs);color:var(--cg-color-accent);font-weight:500}[data-comfygit-theme=soft] .commit-message{font-size:var(--cg-font-size-sm);color:var(--cg-color-text-primary)}[data-comfygit-theme=soft] .commit-date{font-size:var(--cg-font-size-xs);color:var(--cg-color-text-muted)}[data-comfygit-theme=soft] .panel-footer{border-top:1px solid var(--cg-color-border);background:#ffffff05;padding:var(--cg-space-4) var(--cg-space-5)}[data-comfygit-theme=soft] .export-btn{background:linear-gradient(135deg,var(--cg-btn-gradient-start),var(--cg-btn-gradient-end));color:var(--cg-color-text-inverse);border:none;border-radius:var(--cg-radius-md);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-semibold);padding:var(--cg-space-3) var(--cg-space-4);transition:all var(--cg-transition-normal);box-shadow:0 4px 12px #a78bfa4d}[data-comfygit-theme=soft] .export-btn:hover:not(:disabled){transform:translateY(-2px);box-shadow:0 6px 20px #a78bfa66}[data-comfygit-theme=soft] .commit-popover{background:#1e1b26f2;-webkit-backdrop-filter:blur(var(--cg-blur-lg));backdrop-filter:blur(var(--cg-blur-lg));border:1px solid var(--cg-color-border-strong);border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=soft] .commit-input{background:#ffffff0d;border:1px solid var(--cg-color-border);border-radius:var(--cg-radius-md);color:var(--cg-color-text-primary);font-family:var(--cg-font-body)}[data-comfygit-theme=soft] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted);outline:none}[data-comfygit-theme=soft] .comfygit-panel-btn{background:linear-gradient(135deg,var(--cg-btn-gradient-start),var(--cg-btn-gradient-end))!important;color:var(--cg-color-text-inverse)!important;border:none!important;border-radius:8px 0 0 8px!important;font-family:var(--cg-font-display);font-size:11px;font-weight:600;box-shadow:0 4px 12px #a78bfa4d!important}[data-comfygit-theme=soft] .comfygit-panel-btn:hover{box-shadow:0 6px 20px #a78bfa80!important;transform:translateY(-1px)}[data-comfygit-theme=soft] .comfygit-commit-btn{background:#ffffff0d!important;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border)!important;border-radius:0 8px 8px 0!important;font-family:var(--cg-font-display)}[data-comfygit-theme=soft] .comfygit-commit-btn:hover{background:#ffffff1a!important;border-color:var(--cg-color-accent)!important}[data-comfygit-theme=soft] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=soft] .panel-content::-webkit-scrollbar{width:6px}[data-comfygit-theme=soft] .panel-content::-webkit-scrollbar-track{background:transparent}[data-comfygit-theme=soft] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-strong);border-radius:var(--cg-radius-full)}[data-comfygit-theme=soft] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=soft] ::selection{background:var(--cg-color-accent);color:var(--cg-color-text-inverse)}', Xo = '@import"https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Archivo+Black&family=Work+Sans:wght@400;500;600;700;800&display=swap";[data-comfygit-theme=brutal]{--cg-font-display: "Archivo Black", Impact, sans-serif;--cg-font-body: "Work Sans", system-ui, sans-serif;--cg-font-mono: "Space Mono", ui-monospace, monospace;--cg-font-size-xs: 10px;--cg-font-size-sm: 12px;--cg-font-size-base: 14px;--cg-font-size-lg: 16px;--cg-font-size-xl: 20px;--cg-font-size-2xl: 28px;--cg-font-weight-normal: 500;--cg-font-weight-medium: 600;--cg-font-weight-semibold: 700;--cg-font-weight-bold: 800;--cg-line-height-tight: 1.1;--cg-line-height-normal: 1.4;--cg-line-height-relaxed: 1.6;--cg-letter-spacing-tight: -.02em;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .05em;--cg-color-bg-primary: #fffdf7;--cg-color-bg-secondary: #ffffff;--cg-color-bg-tertiary: #f5f3ed;--cg-color-bg-hover: #fef3c7;--cg-color-bg-overlay: rgba(0, 0, 0, .7);--cg-color-text-primary: #0f0f0f;--cg-color-text-secondary: #1f1f1f;--cg-color-text-muted: #525252;--cg-color-text-inverse: #ffffff;--cg-color-border: #0f0f0f;--cg-color-border-subtle: #0f0f0f;--cg-color-border-strong: #0f0f0f;--cg-color-accent: #facc15;--cg-color-accent-hover: #fde047;--cg-color-accent-muted: rgba(250, 204, 21, .3);--cg-color-success: #22c55e;--cg-color-success-muted: rgba(34, 197, 94, .2);--cg-color-warning: #f97316;--cg-color-warning-muted: rgba(249, 115, 22, .15);--cg-color-error: #ef4444;--cg-color-error-muted: rgba(239, 68, 68, .15);--cg-color-info: #3b82f6;--cg-color-info-muted: rgba(59, 130, 246, .15);--cg-space-1: 6px;--cg-space-2: 10px;--cg-space-3: 14px;--cg-space-4: 20px;--cg-space-5: 28px;--cg-space-6: 36px;--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 3px 3px 0 var(--cg-color-border);--cg-shadow-md: 4px 4px 0 var(--cg-color-border);--cg-shadow-lg: 6px 6px 0 var(--cg-color-border);--cg-shadow-xl: 8px 8px 0 var(--cg-color-border);--cg-btn-gradient-start: #facc15;--cg-btn-gradient-end: #facc15;--cg-btn-shadow-inset: none}[data-comfygit-theme=brutal] .comfygit-panel{background:var(--cg-color-bg-primary);border:4px solid var(--cg-color-border);box-shadow:var(--cg-shadow-xl);font-family:var(--cg-font-body)}[data-comfygit-theme=brutal] .comfygit-panel:before,[data-comfygit-theme=brutal] .comfygit-panel:after{content:"";position:absolute;width:12px;height:12px;background:var(--cg-color-accent);border:2px solid var(--cg-color-border)}[data-comfygit-theme=brutal] .comfygit-panel:before{top:-4px;left:-4px}[data-comfygit-theme=brutal] .comfygit-panel:after{bottom:-4px;right:-4px}[data-comfygit-theme=brutal] .panel-header{background:var(--cg-color-accent);border-bottom:4px solid var(--cg-color-border);padding:var(--cg-space-3) var(--cg-space-4)}[data-comfygit-theme=brutal] .panel-title{font-family:var(--cg-font-display);font-size:var(--cg-font-size-xl);color:var(--cg-color-text-primary);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-tight)}[data-comfygit-theme=brutal] .header-info{font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=brutal] .env-name{color:var(--cg-color-text-primary);text-transform:uppercase}[data-comfygit-theme=brutal] .branch-name{color:var(--cg-color-text-secondary);font-family:var(--cg-font-mono)}[data-comfygit-theme=brutal] .status-dot{width:10px;height:10px;border-radius:0;border:2px solid var(--cg-color-border)}[data-comfygit-theme=brutal] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=brutal] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=brutal] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=brutal] .icon-btn{color:var(--cg-color-text-primary);border:2px solid transparent;background:var(--cg-color-bg-secondary);transition:all .1s ease}[data-comfygit-theme=brutal] .icon-btn:hover{background:var(--cg-color-bg-secondary);border-color:var(--cg-color-border);box-shadow:2px 2px 0 var(--cg-color-border);transform:translate(-2px,-2px)}[data-comfygit-theme=brutal] .panel-content{padding:var(--cg-space-4);background:var(--cg-color-bg-primary)}[data-comfygit-theme=brutal] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=brutal] .status-grid{background:var(--cg-color-bg-secondary);border:3px solid var(--cg-color-border);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=brutal] .status-column{padding:var(--cg-space-3)}[data-comfygit-theme=brutal] .status-column:first-child{border-right:3px solid var(--cg-color-border)}[data-comfygit-theme=brutal] .column-title{font-family:var(--cg-font-display);font-size:var(--cg-font-size-xs);text-transform:uppercase;color:var(--cg-color-text-primary);margin-bottom:var(--cg-space-3);padding-bottom:var(--cg-space-2);border-bottom:2px solid var(--cg-color-border)}[data-comfygit-theme=brutal] .status-item{font-size:var(--cg-font-size-sm);font-weight:var(--cg-font-weight-medium);padding:var(--cg-space-1) 0}[data-comfygit-theme=brutal] .status-item .icon{width:8px;height:8px;border:1px solid currentColor;background:currentColor;font-size:0;display:inline-block}[data-comfygit-theme=brutal] .count{font-family:var(--cg-font-mono);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-lg);min-width:28px}[data-comfygit-theme=brutal] .count.new{color:var(--cg-color-success)}[data-comfygit-theme=brutal] .count.modified{color:var(--cg-color-warning)}[data-comfygit-theme=brutal] .count.deleted{color:var(--cg-color-error)}[data-comfygit-theme=brutal] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=brutal] .label{text-transform:uppercase;font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide)}[data-comfygit-theme=brutal] .synced-item{border-top:2px dashed var(--cg-color-border);margin-top:var(--cg-space-2);padding-top:var(--cg-space-2)}[data-comfygit-theme=brutal] .status-item.ok .label{color:var(--cg-color-success)}[data-comfygit-theme=brutal] .warning-box{background:var(--cg-color-warning);border:3px solid var(--cg-color-border);box-shadow:var(--cg-shadow-sm);color:var(--cg-color-text-primary);font-size:var(--cg-font-size-sm);font-weight:var(--cg-font-weight-semibold);padding:var(--cg-space-3);text-transform:uppercase}[data-comfygit-theme=brutal] .warning-box.error{background:var(--cg-color-error);color:var(--cg-color-text-inverse)}[data-comfygit-theme=brutal] .warning-icon{font-weight:700}[data-comfygit-theme=brutal] .history-section{margin-top:var(--cg-space-4);border-top:3px solid var(--cg-color-border);padding-top:var(--cg-space-4)}[data-comfygit-theme=brutal] .history-title{font-family:var(--cg-font-display);font-size:var(--cg-font-size-base);text-transform:uppercase;color:var(--cg-color-text-primary);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=brutal] .commit-item{background:var(--cg-color-bg-secondary);border:2px solid var(--cg-color-border);padding:var(--cg-space-3);margin-bottom:var(--cg-space-2);transition:all .1s ease}[data-comfygit-theme=brutal] .commit-item:hover{background:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);transform:translate(-2px,-2px)}[data-comfygit-theme=brutal] .commit-hash{font-family:var(--cg-font-mono);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-bold);color:var(--cg-color-info);text-transform:uppercase}[data-comfygit-theme=brutal] .commit-message{font-size:var(--cg-font-size-sm);font-weight:var(--cg-font-weight-medium);color:var(--cg-color-text-primary)}[data-comfygit-theme=brutal] .commit-date{font-size:var(--cg-font-size-xs);font-family:var(--cg-font-mono);color:var(--cg-color-text-muted);text-transform:uppercase}[data-comfygit-theme=brutal] .panel-footer{border-top:4px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary);padding:var(--cg-space-3) var(--cg-space-4)}[data-comfygit-theme=brutal] .export-btn{background:var(--cg-color-bg-secondary);color:var(--cg-color-text-primary);border:3px solid var(--cg-color-border);box-shadow:var(--cg-shadow-sm);text-transform:uppercase;font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-xs);padding:var(--cg-space-3) var(--cg-space-4);transition:all .1s ease}[data-comfygit-theme=brutal] .export-btn:hover:not(:disabled){background:var(--cg-color-accent);transform:translate(-3px,-3px);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=brutal] .export-btn:active:not(:disabled){transform:translate(0);box-shadow:none}[data-comfygit-theme=brutal] .commit-popover{background:var(--cg-color-bg-primary);border:4px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=brutal] .commit-input{background:var(--cg-color-bg-secondary);border:3px solid var(--cg-color-border);color:var(--cg-color-text-primary);font-family:var(--cg-font-body);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=brutal] .commit-input:focus{background:var(--cg-color-accent-muted);outline:none}[data-comfygit-theme=brutal] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-text-primary)!important;border:3px solid var(--cg-color-border)!important;border-radius:0!important;text-transform:uppercase;font-family:var(--cg-font-display);font-size:10px;box-shadow:3px 3px 0 var(--cg-color-border)!important;transition:all .1s ease!important}[data-comfygit-theme=brutal] .comfygit-panel-btn:hover{transform:translate(-2px,-2px)!important;box-shadow:5px 5px 0 var(--cg-color-border)!important}[data-comfygit-theme=brutal] .comfygit-panel-btn:active{transform:translate(0)!important;box-shadow:none!important}[data-comfygit-theme=brutal] .comfygit-commit-btn{background:var(--cg-color-bg-secondary)!important;color:var(--cg-color-text-primary)!important;border:3px solid var(--cg-color-border)!important;border-left:none!important;border-radius:0!important;font-family:var(--cg-font-body);font-weight:700;text-transform:uppercase;font-size:10px}[data-comfygit-theme=brutal] .comfygit-commit-btn:hover{background:var(--cg-color-bg-hover)!important}[data-comfygit-theme=brutal] .commit-indicator{background:var(--cg-color-error);border:2px solid var(--cg-color-border);border-radius:0}[data-comfygit-theme=brutal] .panel-content::-webkit-scrollbar{width:12px}[data-comfygit-theme=brutal] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary);border-left:2px solid var(--cg-color-border)}[data-comfygit-theme=brutal] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-accent);border:2px solid var(--cg-color-border)}[data-comfygit-theme=brutal] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent-hover)}[data-comfygit-theme=brutal] ::selection{background:var(--cg-color-accent);color:var(--cg-color-text-primary)}[data-comfygit-theme=brutal] .loading{background:repeating-conic-gradient(var(--cg-color-bg-tertiary) 0% 25%,var(--cg-color-bg-secondary) 0% 50%) 50% / 16px 16px;color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);text-transform:uppercase}', K = {
  default: Fo,
  phosphor: Jo,
  swiss: Ko,
  soft: Wo,
  brutal: Xo
};
let it = "default", I = null;
function qo() {
  const d = new URLSearchParams(window.location.search).get("comfygit-theme");
  if (d && d in K)
    return d;
  const s = localStorage.getItem("comfygit-theme");
  return s && s in K ? s : "default";
}
function q(o) {
  it = o, localStorage.setItem("comfygit-theme", o), I && I.remove(), I = document.createElement("style"), I.id = "comfygit-theme-styles", I.setAttribute("data-theme", o), I.textContent = K[o], document.head.appendChild(I), document.body.setAttribute("data-comfygit-theme", o), console.log(`[ComfyGit] Applied theme: ${o}`);
}
function lt() {
  return [
    {
      id: "default",
      name: "Default",
      description: "Standard dark UI with orange accent"
    },
    {
      id: "phosphor",
      name: "Phosphor Terminal",
      description: "CRT monitor aesthetic with green phosphor glow"
    },
    {
      id: "swiss",
      name: "Swiss Editorial",
      description: "Clean typography with editorial elegance"
    },
    {
      id: "soft",
      name: "Soft Machine",
      description: "Organic gradients and glass morphism"
    },
    {
      id: "brutal",
      name: "Neo-Brutal",
      description: "Bold chunky borders with primary colors"
    }
  ];
}
function dt() {
  return it;
}
const Qo = { class: "comfygit-panel" }, Zo = { class: "panel-header" }, te = { class: "header-left" }, oe = {
  key: 0,
  class: "header-info"
}, ee = { class: "env-name" }, ae = { class: "branch-name" }, re = ["title"], ce = {
  key: 1,
  class: "header-info loading-text"
}, se = { class: "header-actions" }, ne = { class: "panel-content" }, ie = {
  key: 0,
  class: "error-message"
}, le = {
  key: 1,
  class: "loading"
}, de = { class: "panel-footer" }, ge = ["disabled"], me = /* @__PURE__ */ M({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(o, { emit: d }) {
    function s() {
      const m = lt(), B = (m.findIndex((yt) => yt.id === dt()) + 1) % m.length, vt = m[B].id;
      q(vt);
    }
    const e = d, {
      getStatus: a,
      getHistory: y,
      exportEnv: C,
      getBranches: p,
      checkout: g,
      createBranch: x,
      switchBranch: v
    } = X(), l = w(null), u = w([]), h = w([]), $ = w(!1), f = w(null), L = w(null), k = w(null), H = A(() => {
      if (!l.value) return "neutral";
      const m = l.value.workflows, n = m.new.length > 0 || m.modified.length > 0 || m.deleted.length > 0 || l.value.has_changes;
      return l.value.comparison.is_synced ? n ? "warning" : "success" : "error";
    }), mt = A(() => l.value ? H.value === "success" ? "All synced" : H.value === "warning" ? "Uncommitted changes" : H.value === "error" ? "Not synced" : "" : "");
    async function V() {
      $.value = !0, f.value = null;
      try {
        const [m, n, B] = await Promise.all([
          a(),
          y(),
          p()
        ]);
        l.value = m, u.value = n.commits, h.value = B.branches, e("statusUpdate", m);
      } catch (m) {
        f.value = m instanceof Error ? m.message : "Failed to load status", l.value = null, u.value = [], h.value = [];
      } finally {
        $.value = !1;
      }
    }
    function ft(m) {
      L.value = m;
    }
    async function Z(m) {
      L.value = null;
      const n = await g(m.hash);
      n.status === "warning" && n.reason === "uncommitted_changes" ? k.value = {
        title: "Uncommitted Changes",
        message: "You have uncommitted changes that will be lost.",
        details: tt(),
        warning: "Checking out will discard these changes.",
        confirmLabel: "Discard & Checkout",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          k.value = null, await g(m.hash, !0);
        }
      } : n.status === "success" || alert(n.message || "Checkout failed");
    }
    async function pt(m) {
      const n = await v(m);
      n.status === "warning" ? n.reason === "uncommitted_changes" && (k.value = {
        title: "Uncommitted Changes",
        message: "You have uncommitted changes.",
        details: tt(),
        warning: "Switch anyway? Changes will remain in current branch.",
        confirmLabel: "Switch Anyway",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          k.value = null, await v(m, !0);
        }
      }) : n.status;
    }
    async function ut(m) {
      const n = await x(m);
      n.status === "success" ? await V() : alert(n.message || "Failed to create branch");
    }
    async function ht(m) {
      L.value = null;
      const n = prompt("Enter branch name:");
      if (n) {
        const B = await x(n, m.hash);
        B.status === "success" ? await V() : alert(B.message || "Failed to create branch");
      }
    }
    function tt() {
      if (!l.value) return [];
      const m = [], n = l.value.workflows;
      return n.new.length && m.push(`${n.new.length} new workflow(s)`), n.modified.length && m.push(`${n.modified.length} modified workflow(s)`), n.deleted.length && m.push(`${n.deleted.length} deleted workflow(s)`), m;
    }
    async function bt() {
      try {
        const m = await C();
        m.status === "success" ? alert(`Export successful!

Saved to: ${m.path}

Models without sources: ${m.models_without_sources}`) : alert(`Export failed: ${m.message}`);
      } catch (m) {
        alert(`Export error: ${m instanceof Error ? m.message : "Unknown error"}`);
      }
    }
    return rt(V), (m, n) => (r(), c("div", Qo, [
      t("div", Zo, [
        t("div", te, [
          n[3] || (n[3] = t("h2", { class: "panel-title" }, "ComfyGit", -1)),
          l.value ? (r(), c("div", oe, [
            t("span", ee, i(l.value.environment), 1),
            t("span", ae, "(" + i(l.value.branch || "detached") + ")", 1),
            t("span", {
              class: G(["status-dot", H.value]),
              title: mt.value
            }, null, 10, re)
          ])) : (r(), c("div", ce, "Loading..."))
        ]),
        t("div", se, [
          t("button", {
            class: G(["icon-btn", { spinning: $.value }]),
            onClick: V,
            title: "Refresh"
          }, [...n[4] || (n[4] = [
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
            onClick: s,
            title: "Switch theme (Ctrl+Shift+T)"
          }, [...n[5] || (n[5] = [
            t("svg", {
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              t("path", { d: "M8 1a7 7 0 0 0 0 14A7 7 0 0 0 8 1zm0 12.5V2.5a5.5 5.5 0 0 1 0 11z" })
            ], -1)
          ])]),
          t("button", {
            class: "icon-btn",
            onClick: n[0] || (n[0] = (B) => e("close")),
            title: "Close"
          }, [...n[6] || (n[6] = [
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
      t("div", ne, [
        f.value ? (r(), c("div", ie, i(f.value), 1)) : l.value ? (r(), c(S, { key: 2 }, [
          F(Vt, { status: l.value }, null, 8, ["status"]),
          F(oo, {
            branches: h.value,
            current: l.value.branch,
            onSwitch: pt,
            onCreate: ut
          }, null, 8, ["branches", "current"]),
          F(fo, {
            commits: u.value,
            onSelect: ft,
            onCheckout: Z
          }, null, 8, ["commits"])
        ], 64)) : (r(), c("div", le, " Loading status... "))
      ]),
      t("div", de, [
        t("button", {
          class: "export-btn",
          onClick: bt,
          disabled: !l.value
        }, [...n[7] || (n[7] = [
          t("svg", {
            width: "14",
            height: "14",
            viewBox: "0 0 16 16",
            fill: "currentColor"
          }, [
            t("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
            t("path", { d: "M14 14H2v-2h12v2z" })
          ], -1),
          ct(" Export ", -1)
        ])], 8, ge)
      ]),
      L.value ? (r(), ot(Po, {
        key: 0,
        commit: L.value,
        onClose: n[1] || (n[1] = (B) => L.value = null),
        onCheckout: Z,
        onCreateBranch: ht
      }, null, 8, ["commit"])) : b("", !0),
      k.value ? (r(), ot(Ro, {
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
        onCancel: n[2] || (n[2] = (B) => k.value = null),
        onSecondary: k.value.onSecondary
      }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : b("", !0)
    ]));
  }
}), fe = /* @__PURE__ */ N(me, [["__scopeId", "data-v-cf77b85f"]]), pe = { class: "commit-popover" }, ue = { class: "popover-content" }, he = {
  key: 0,
  class: "changes-summary"
}, be = {
  key: 0,
  class: "change-item"
}, ve = {
  key: 1,
  class: "change-item"
}, ye = {
  key: 2,
  class: "change-item"
}, xe = {
  key: 3,
  class: "change-item"
}, we = {
  key: 4,
  class: "change-item"
}, ke = {
  key: 1,
  class: "no-changes"
}, Ce = {
  key: 2,
  class: "loading"
}, ze = { class: "message-section" }, $e = ["placeholder", "disabled", "onKeydown"], _e = { class: "popover-footer" }, Se = ["disabled"], Le = /* @__PURE__ */ M({
  __name: "CommitPopover",
  props: {
    status: {}
  },
  emits: ["close", "committed"],
  setup(o, { emit: d }) {
    const s = o, e = d, { commit: a } = X(), y = w(""), C = w(!1), p = w(null), g = A(() => {
      if (!s.status) return !1;
      const v = s.status.workflows;
      return v.new.length > 0 || v.modified.length > 0 || v.deleted.length > 0 || s.status.has_changes;
    });
    async function x() {
      var v, l, u;
      if (!(!g.value || !y.value.trim() || C.value)) {
        C.value = !0, p.value = null;
        try {
          const h = await a(y.value.trim());
          h.status === "success" ? (p.value = {
            type: "success",
            message: `Committed: ${((v = h.summary) == null ? void 0 : v.new) || 0} new, ${((l = h.summary) == null ? void 0 : l.modified) || 0} modified, ${((u = h.summary) == null ? void 0 : u.deleted) || 0} deleted`
          }, y.value = "", setTimeout(() => e("committed"), 1e3)) : h.status === "no_changes" ? p.value = { type: "error", message: "No changes to commit" } : p.value = { type: "error", message: h.message || "Commit failed" };
        } catch (h) {
          p.value = { type: "error", message: h instanceof Error ? h.message : "Commit failed" };
        } finally {
          C.value = !1;
        }
      }
    }
    return (v, l) => (r(), c("div", pe, [
      l[7] || (l[7] = t("div", { class: "popover-header" }, [
        t("h3", { class: "popover-title" }, "Commit Changes")
      ], -1)),
      t("div", ue, [
        o.status && g.value ? (r(), c("div", he, [
          o.status.workflows.new.length ? (r(), c("div", be, [
            l[2] || (l[2] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, i(o.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : b("", !0),
          o.status.workflows.modified.length ? (r(), c("div", ve, [
            l[3] || (l[3] = t("span", { class: "change-icon modified" }, "~", -1)),
            t("span", null, i(o.status.workflows.modified.length) + " modified", 1)
          ])) : b("", !0),
          o.status.workflows.deleted.length ? (r(), c("div", ye, [
            l[4] || (l[4] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, i(o.status.workflows.deleted.length) + " deleted", 1)
          ])) : b("", !0),
          o.status.git_changes.nodes_added.length ? (r(), c("div", xe, [
            l[5] || (l[5] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, i(o.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : b("", !0),
          o.status.git_changes.nodes_removed.length ? (r(), c("div", we, [
            l[6] || (l[6] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, i(o.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : b("", !0)
        ])) : o.status ? (r(), c("div", ke, " No changes to commit ")) : (r(), c("div", Ce, " Loading... ")),
        t("div", ze, [
          et(t("textarea", {
            "onUpdate:modelValue": l[0] || (l[0] = (u) => y.value = u),
            class: "commit-input",
            placeholder: g.value ? "Describe your changes..." : "No changes",
            disabled: !g.value || C.value,
            rows: "3",
            onKeydown: [
              Y(U(x, ["ctrl"]), ["enter"]),
              Y(U(x, ["meta"]), ["enter"])
            ]
          }, null, 40, $e), [
            [at, y.value]
          ])
        ]),
        p.value ? (r(), c("div", {
          key: 3,
          class: G(["result", p.value.type])
        }, i(p.value.message), 3)) : b("", !0)
      ]),
      t("div", _e, [
        t("button", {
          class: "cancel-btn",
          onClick: l[1] || (l[1] = (u) => e("close"))
        }, "Cancel"),
        t("button", {
          class: "commit-btn",
          disabled: !g.value || !y.value.trim() || C.value,
          onClick: x
        }, i(C.value ? "Committing..." : "Commit"), 9, Se)
      ])
    ]));
  }
}), Be = /* @__PURE__ */ N(Le, [["__scopeId", "data-v-bf211fb8"]]), Q = document.createElement("link");
Q.rel = "stylesheet";
Q.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(Q);
const Ee = qo();
q(Ee);
let _ = null, z = null, O = null;
const P = w(null);
async function W() {
  var o;
  if (!((o = window.app) != null && o.api)) return null;
  try {
    const d = await window.app.api.fetchApi("/v2/comfygit/status");
    d.ok && (P.value = await d.json());
  } catch {
  }
}
function Te() {
  if (!P.value) return !1;
  const o = P.value.workflows;
  return o.new.length > 0 || o.modified.length > 0 || o.deleted.length > 0 || P.value.has_changes;
}
function Ie() {
  _ && _.remove(), _ = document.createElement("div"), _.className = "comfygit-panel-overlay";
  const o = document.createElement("div");
  o.className = "comfygit-panel-container", _.appendChild(o), _.addEventListener("click", (e) => {
    e.target === _ && J();
  });
  const d = (e) => {
    e.key === "Escape" && (J(), document.removeEventListener("keydown", d));
  };
  document.addEventListener("keydown", d), st({
    render: () => nt(fe, {
      onClose: J,
      onStatusUpdate: (e) => {
        P.value = e, j();
      }
    })
  }).mount(o), document.body.appendChild(_);
}
function J() {
  _ && (_.remove(), _ = null);
}
function Me(o) {
  D(), z = document.createElement("div"), z.className = "comfygit-commit-popover-container";
  const d = o.getBoundingClientRect();
  z.style.position = "fixed", z.style.top = `${d.bottom + 8}px`, z.style.right = `${window.innerWidth - d.right}px`, z.style.zIndex = "10001";
  const s = (a) => {
    z && !z.contains(a.target) && a.target !== o && (D(), document.removeEventListener("mousedown", s));
  };
  setTimeout(() => document.addEventListener("mousedown", s), 0);
  const e = (a) => {
    a.key === "Escape" && (D(), document.removeEventListener("keydown", e));
  };
  document.addEventListener("keydown", e), O = st({
    render: () => nt(Be, {
      status: P.value,
      onClose: D,
      onCommitted: () => {
        D(), W().then(j);
      }
    })
  }), O.mount(z), document.body.appendChild(z);
}
function D() {
  O && (O.unmount(), O = null), z && (z.remove(), z = null);
}
let E = null;
function j() {
  if (!E) return;
  const o = E.querySelector(".commit-indicator");
  o && (o.style.display = Te() ? "block" : "none");
}
function Ne() {
  const o = lt(), s = (o.findIndex((y) => y.id === dt()) + 1) % o.length, e = o[s].id;
  q(e);
  const a = document.createElement("div");
  a.className = "comfygit-theme-notification", a.innerHTML = `
    <strong>Theme:</strong> ${o[s].name}
    <div class="theme-desc">${o[s].description}</div>
  `, document.body.appendChild(a), setTimeout(() => a.remove(), 2e3);
}
document.addEventListener("keydown", (o) => {
  o.ctrlKey && o.shiftKey && o.key === "T" && (o.preventDefault(), Ne());
});
const gt = document.createElement("style");
gt.textContent = `
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
    width: 580px;
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
    background: linear-gradient(180deg, #fb923c 0%, #ea580c 100%) !important;
    color: white !important;
    border: none !important;
    border-radius: 4px 0 0 4px !important;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(0, 0, 0, 0.15) !important;
  }

  .comfygit-panel-btn:hover {
    background: linear-gradient(180deg, #f97316 0%, #c2410c 100%) !important;
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

  .comfygit-theme-notification {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.9);
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    font-size: 13px;
    z-index: 10002;
    animation: notificationSlide 0.3s ease;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }

  .comfygit-theme-notification .theme-desc {
    font-size: 11px;
    opacity: 0.7;
    margin-top: 4px;
  }

  @keyframes notificationSlide {
    from {
      opacity: 0;
      transform: translateX(-50%) translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
  }
`;
document.head.appendChild(gt);
R.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var s, e;
    const o = document.createElement("div");
    o.className = "comfygit-btn-group";
    const d = document.createElement("button");
    d.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", d.textContent = "ComfyGit", d.title = "ComfyGit Control Panel", d.onclick = Ie, E = document.createElement("button"), E.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", E.innerHTML = 'Commit <span class="commit-indicator"></span>', E.title = "Quick Commit", E.onclick = () => Me(E), o.appendChild(d), o.appendChild(E), (e = (s = R.menu) == null ? void 0 : s.settingsGroup) != null && e.element && (R.menu.settingsGroup.element.before(o), console.log("[ComfyGit] Control Panel buttons added to toolbar")), await W(), j(), setInterval(async () => {
      await W(), j();
    }, 3e4);
  }
});
