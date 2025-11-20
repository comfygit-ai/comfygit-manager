import { app as q } from "../../scripts/app.js";
import { defineComponent as A, computed as N, createElementBlock as r, openBlock as e, createElementVNode as t, createCommentVNode as v, toDisplayString as g, ref as k, nextTick as _t, withDirectives as it, withKeys as K, vModelText as lt, Fragment as I, renderList as T, normalizeClass as H, withModifiers as j, onMounted as gt, createTextVNode as dt, createBlock as nt, createVNode as W, TransitionGroup as St, withCtx as Lt, createApp as mt, h as ft } from "vue";
const Bt = { class: "status-section" }, It = { class: "status-grid" }, Tt = { class: "status-column" }, Et = {
  key: 0,
  class: "status-item"
}, Mt = { class: "count new" }, Pt = {
  key: 1,
  class: "status-item"
}, Nt = { class: "count modified" }, At = {
  key: 2,
  class: "status-item"
}, Dt = { class: "count deleted" }, Ut = { class: "status-item synced-item" }, Ot = { class: "count synced" }, Gt = { class: "status-column" }, Ht = {
  key: 0,
  class: "status-item"
}, Rt = { class: "count new" }, Vt = {
  key: 1,
  class: "status-item"
}, Yt = { class: "count deleted" }, jt = {
  key: 2,
  class: "status-item"
}, Ft = {
  key: 3,
  class: "status-item ok"
}, Jt = {
  key: 0,
  class: "warning-box"
}, Wt = {
  key: 1,
  class: "warning-box error"
}, Kt = /* @__PURE__ */ A({
  __name: "StatusSection",
  props: {
    status: {}
  },
  setup(o) {
    const d = o, n = N(() => {
      const m = d.status.git_changes;
      return m.nodes_added.length > 0 || m.nodes_removed.length > 0 || m.workflow_changes || m.has_other_changes;
    }), a = N(() => {
      const m = d.status.git_changes, c = d.status.workflows;
      return (m.workflow_changes || m.has_other_changes) && c.new.length === 0 && c.modified.length === 0 && c.deleted.length === 0;
    });
    return (m, c) => (e(), r("div", Bt, [
      c[18] || (c[18] = t("h3", { class: "section-title" }, "Status", -1)),
      t("div", It, [
        t("div", Tt, [
          c[8] || (c[8] = t("h4", { class: "column-title" }, "Workflows", -1)),
          o.status.workflows.new.length ? (e(), r("div", Et, [
            c[0] || (c[0] = t("span", { class: "icon" }, "●", -1)),
            t("span", Mt, g(o.status.workflows.new.length), 1),
            c[1] || (c[1] = t("span", { class: "label" }, "new", -1))
          ])) : v("", !0),
          o.status.workflows.modified.length ? (e(), r("div", Pt, [
            c[2] || (c[2] = t("span", { class: "icon" }, "●", -1)),
            t("span", Nt, g(o.status.workflows.modified.length), 1),
            c[3] || (c[3] = t("span", { class: "label" }, "modified", -1))
          ])) : v("", !0),
          o.status.workflows.deleted.length ? (e(), r("div", At, [
            c[4] || (c[4] = t("span", { class: "icon" }, "●", -1)),
            t("span", Dt, g(o.status.workflows.deleted.length), 1),
            c[5] || (c[5] = t("span", { class: "label" }, "deleted", -1))
          ])) : v("", !0),
          t("div", Ut, [
            c[6] || (c[6] = t("span", { class: "icon synced" }, "✓", -1)),
            t("span", Ot, g(o.status.workflows.synced.length), 1),
            c[7] || (c[7] = t("span", { class: "label" }, "synced", -1))
          ])
        ]),
        t("div", Gt, [
          c[15] || (c[15] = t("h4", { class: "column-title" }, "Git Changes", -1)),
          o.status.git_changes.nodes_added.length ? (e(), r("div", Ht, [
            c[9] || (c[9] = t("span", { class: "icon" }, "●", -1)),
            t("span", Rt, g(o.status.git_changes.nodes_added.length), 1),
            c[10] || (c[10] = t("span", { class: "label" }, "node added", -1))
          ])) : v("", !0),
          o.status.git_changes.nodes_removed.length ? (e(), r("div", Vt, [
            c[11] || (c[11] = t("span", { class: "icon" }, "●", -1)),
            t("span", Yt, g(o.status.git_changes.nodes_removed.length), 1),
            c[12] || (c[12] = t("span", { class: "label" }, "node removed", -1))
          ])) : v("", !0),
          a.value ? (e(), r("div", jt, [...c[13] || (c[13] = [
            t("span", { class: "icon" }, "●", -1),
            t("span", { class: "count modified" }, "●", -1),
            t("span", { class: "label" }, "other changes", -1)
          ])])) : v("", !0),
          n.value ? v("", !0) : (e(), r("div", Ft, [...c[14] || (c[14] = [
            t("span", { class: "icon" }, "✓", -1),
            t("span", { class: "label" }, "No uncommitted changes", -1)
          ])]))
        ])
      ]),
      o.status.missing_models_count > 0 ? (e(), r("div", Jt, [
        c[16] || (c[16] = t("span", { class: "warning-icon" }, "⚠", -1)),
        t("span", null, g(o.status.missing_models_count) + " missing model(s)", 1)
      ])) : v("", !0),
      o.status.comparison.is_synced ? v("", !0) : (e(), r("div", Wt, [...c[17] || (c[17] = [
        t("span", { class: "warning-icon" }, "⚠", -1),
        t("span", null, "Environment not synced", -1)
      ])]))
    ]));
  }
}), D = (o, d) => {
  const n = o.__vccOpts || o;
  for (const [a, m] of d)
    n[a] = m;
  return n;
}, Xt = /* @__PURE__ */ D(Kt, [["__scopeId", "data-v-a72d538b"]]), qt = { class: "branch-section" }, Qt = { class: "section-header" }, Zt = { class: "branch-card" }, to = {
  key: 0,
  class: "create-branch-row"
}, oo = ["disabled"], eo = {
  key: 1,
  class: "empty"
}, ao = {
  key: 2,
  class: "branch-list"
}, ro = { class: "branch-indicator" }, co = { class: "branch-name" }, so = ["onClick"], no = {
  key: 1,
  class: "current-label"
}, io = /* @__PURE__ */ A({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create"],
  setup(o, { emit: d }) {
    const n = d, a = k(!1), m = k(""), c = k(null);
    function $() {
      m.value.trim() && (n("create", m.value.trim()), h());
    }
    function h() {
      a.value = !1, m.value = "";
    }
    return _t(() => {
      a.value && c.value && c.value.focus();
    }), (f, w) => (e(), r("div", qt, [
      t("div", Qt, [
        w[3] || (w[3] = t("h4", { class: "section-title" }, "Branches", -1)),
        t("button", {
          class: "add-btn",
          onClick: w[0] || (w[0] = (y) => a.value = !0),
          title: "New Branch"
        }, [...w[2] || (w[2] = [
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
      t("div", Zt, [
        a.value ? (e(), r("div", to, [
          it(t("input", {
            ref_key: "createInput",
            ref: c,
            "onUpdate:modelValue": w[1] || (w[1] = (y) => m.value = y),
            class: "branch-input",
            placeholder: "Branch name...",
            onKeyup: [
              K($, ["enter"]),
              K(h, ["escape"])
            ]
          }, null, 544), [
            [lt, m.value]
          ]),
          t("button", {
            class: "action-btn create",
            onClick: $,
            disabled: !m.value.trim()
          }, " Create ", 8, oo),
          t("button", {
            class: "action-btn cancel",
            onClick: h
          }, " Cancel ")
        ])) : v("", !0),
        o.branches.length === 0 ? (e(), r("div", eo, " No branches found ")) : (e(), r("div", ao, [
          (e(!0), r(I, null, T(o.branches, (y) => (e(), r("div", {
            key: y.name,
            class: H(["branch-item", { current: y.is_current }])
          }, [
            t("span", ro, g(y.is_current ? "●" : "○"), 1),
            t("span", co, g(y.name), 1),
            y.is_current ? (e(), r("span", no, "current")) : (e(), r("button", {
              key: 0,
              class: "switch-btn",
              onClick: (i) => f.$emit("switch", y.name)
            }, " Switch ", 8, so))
          ], 2))), 128))
        ]))
      ])
    ]));
  }
}), lo = /* @__PURE__ */ D(io, [["__scopeId", "data-v-730a9c8a"]]), go = { class: "history-section" }, mo = { class: "history-card" }, fo = {
  key: 0,
  class: "empty"
}, po = {
  key: 1,
  class: "commit-list"
}, ho = ["onClick"], uo = { class: "commit-hash" }, bo = { class: "commit-message" }, vo = { class: "commit-date" }, yo = ["onClick"], xo = /* @__PURE__ */ A({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(o) {
    return (d, n) => (e(), r("div", go, [
      n[2] || (n[2] = t("div", { class: "section-header" }, [
        t("h4", { class: "section-title" }, "History")
      ], -1)),
      t("div", mo, [
        o.commits.length === 0 ? (e(), r("div", fo, " No commits yet ")) : (e(), r("div", po, [
          (e(!0), r(I, null, T(o.commits, (a) => {
            var m;
            return e(), r("div", {
              key: a.hash,
              class: "commit-item",
              onClick: (c) => d.$emit("select", a)
            }, [
              t("span", uo, g(a.short_hash || ((m = a.hash) == null ? void 0 : m.slice(0, 7))), 1),
              t("span", bo, g(a.message), 1),
              t("span", vo, g(a.date_relative || a.relative_date), 1),
              t("div", {
                class: "commit-actions",
                onClick: n[0] || (n[0] = j(() => {
                }, ["stop"]))
              }, [
                t("button", {
                  class: "action-btn",
                  onClick: (c) => d.$emit("checkout", a),
                  title: "Checkout this commit"
                }, [...n[1] || (n[1] = [
                  t("svg", {
                    width: "12",
                    height: "12",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    t("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" })
                  ], -1)
                ])], 8, yo)
              ])
            ], 8, ho);
          }), 128))
        ]))
      ])
    ]));
  }
}), wo = /* @__PURE__ */ D(xo, [["__scopeId", "data-v-3bb44122"]]);
function ot() {
  const o = k(!1), d = k(null);
  async function n(u, b) {
    var p;
    if (!((p = window.app) != null && p.api))
      throw new Error("ComfyUI API not available");
    const L = await window.app.api.fetchApi(u, b);
    if (!L.ok) {
      const E = await L.json().catch(() => ({}));
      throw new Error(E.error || E.message || `Request failed: ${L.status}`);
    }
    return L.json();
  }
  async function a() {
    return n("/v2/comfygit/status");
  }
  async function m(u, b = !1) {
    return n("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: u, allow_issues: b })
    });
  }
  async function c(u = 10, b = 0) {
    return n(`/v2/comfygit/log?limit=${u}&offset=${b}`);
  }
  async function $(u) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: u })
    });
  }
  async function h() {
    return n("/v2/comfygit/branches");
  }
  async function f(u) {
    return n(`/v2/comfygit/commit/${u}`);
  }
  async function w(u, b = !1) {
    return n("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: u, force: b })
    });
  }
  async function y(u, b = "HEAD") {
    return n("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: u, start_point: b })
    });
  }
  async function i(u, b = !1) {
    return n("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: u, force: b })
    });
  }
  return {
    isLoading: o,
    error: d,
    getStatus: a,
    commit: m,
    getHistory: c,
    exportEnv: $,
    // Phase 2
    getBranches: h,
    getCommitDetail: f,
    checkout: w,
    createBranch: y,
    switchBranch: i
  };
}
const ko = { class: "modal-content" }, zo = { class: "modal-header" }, Co = { class: "commit-info" }, $o = { class: "commit-hash" }, _o = {
  key: 0,
  class: "commit-refs"
}, So = { class: "modal-body" }, Lo = { class: "commit-message" }, Bo = { class: "commit-date" }, Io = {
  key: 0,
  class: "loading"
}, To = {
  key: 1,
  class: "changes-section"
}, Eo = { class: "stats-row" }, Mo = { class: "stat" }, Po = { class: "stat insertions" }, No = { class: "stat deletions" }, Ao = {
  key: 0,
  class: "change-group"
}, Do = {
  key: 1,
  class: "change-group"
}, Uo = {
  key: 0,
  class: "version"
}, Oo = {
  key: 2,
  class: "change-group"
}, Go = { class: "change-item" }, Ho = { class: "modal-footer" }, Ro = /* @__PURE__ */ A({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(o) {
    const d = o, { getCommitDetail: n } = ot(), a = k(null), m = k(!0), c = N(() => {
      if (!a.value) return !1;
      const h = a.value.changes.workflows;
      return h.added.length > 0 || h.modified.length > 0 || h.deleted.length > 0;
    }), $ = N(() => {
      if (!a.value) return !1;
      const h = a.value.changes.nodes;
      return h.added.length > 0 || h.removed.length > 0;
    });
    return gt(async () => {
      try {
        a.value = await n(d.commit.hash);
      } finally {
        m.value = !1;
      }
    }), (h, f) => {
      var w, y, i, u, b, L;
      return e(), r("div", {
        class: "modal-overlay",
        onClick: f[3] || (f[3] = j((p) => h.$emit("close"), ["self"]))
      }, [
        t("div", ko, [
          t("div", zo, [
            t("div", Co, [
              t("span", $o, g(((w = a.value) == null ? void 0 : w.short_hash) || o.commit.short_hash || ((y = o.commit.hash) == null ? void 0 : y.slice(0, 7))), 1),
              (u = (i = a.value) == null ? void 0 : i.refs) != null && u.length ? (e(), r("span", _o, [
                (e(!0), r(I, null, T(a.value.refs, (p) => (e(), r("span", {
                  key: p,
                  class: "ref-badge"
                }, g(p), 1))), 128))
              ])) : v("", !0)
            ]),
            t("button", {
              class: "close-btn",
              onClick: f[0] || (f[0] = (p) => h.$emit("close"))
            }, [...f[4] || (f[4] = [
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
          t("div", So, [
            t("div", Lo, g(((b = a.value) == null ? void 0 : b.message) || o.commit.message), 1),
            t("div", Bo, g(((L = a.value) == null ? void 0 : L.date_relative) || o.commit.date_relative || o.commit.relative_date), 1),
            m.value ? (e(), r("div", Io, "Loading details...")) : a.value ? (e(), r("div", To, [
              t("div", Eo, [
                t("span", Mo, g(a.value.stats.files_changed) + " files", 1),
                t("span", Po, "+" + g(a.value.stats.insertions), 1),
                t("span", No, "-" + g(a.value.stats.deletions), 1)
              ]),
              c.value ? (e(), r("div", Ao, [
                f[8] || (f[8] = t("h4", { class: "change-title" }, "Workflows", -1)),
                (e(!0), r(I, null, T(a.value.changes.workflows.added, (p) => (e(), r("div", {
                  key: "add-" + p,
                  class: "change-item added"
                }, [
                  f[5] || (f[5] = t("span", { class: "change-icon" }, "+", -1)),
                  t("span", null, g(p), 1)
                ]))), 128)),
                (e(!0), r(I, null, T(a.value.changes.workflows.modified, (p) => (e(), r("div", {
                  key: "mod-" + p,
                  class: "change-item modified"
                }, [
                  f[6] || (f[6] = t("span", { class: "change-icon" }, "~", -1)),
                  t("span", null, g(p), 1)
                ]))), 128)),
                (e(!0), r(I, null, T(a.value.changes.workflows.deleted, (p) => (e(), r("div", {
                  key: "del-" + p,
                  class: "change-item deleted"
                }, [
                  f[7] || (f[7] = t("span", { class: "change-icon" }, "-", -1)),
                  t("span", null, g(p), 1)
                ]))), 128))
              ])) : v("", !0),
              $.value ? (e(), r("div", Do, [
                f[11] || (f[11] = t("h4", { class: "change-title" }, "Nodes", -1)),
                (e(!0), r(I, null, T(a.value.changes.nodes.added, (p) => (e(), r("div", {
                  key: "add-" + p.name,
                  class: "change-item added"
                }, [
                  f[9] || (f[9] = t("span", { class: "change-icon" }, "+", -1)),
                  t("span", null, g(p.name), 1),
                  p.version ? (e(), r("span", Uo, "(" + g(p.version) + ")", 1)) : v("", !0)
                ]))), 128)),
                (e(!0), r(I, null, T(a.value.changes.nodes.removed, (p) => (e(), r("div", {
                  key: "rem-" + p.name,
                  class: "change-item deleted"
                }, [
                  f[10] || (f[10] = t("span", { class: "change-icon" }, "-", -1)),
                  t("span", null, g(p.name), 1)
                ]))), 128))
              ])) : v("", !0),
              a.value.changes.models.resolved > 0 ? (e(), r("div", Oo, [
                f[13] || (f[13] = t("h4", { class: "change-title" }, "Models", -1)),
                t("div", Go, [
                  f[12] || (f[12] = t("span", { class: "change-icon" }, "●", -1)),
                  t("span", null, g(a.value.changes.models.resolved) + " model(s) resolved", 1)
                ])
              ])) : v("", !0)
            ])) : v("", !0)
          ]),
          t("div", Ho, [
            t("button", {
              class: "action-btn secondary",
              onClick: f[1] || (f[1] = (p) => h.$emit("createBranch", o.commit))
            }, " Create Branch "),
            t("button", {
              class: "action-btn primary",
              onClick: f[2] || (f[2] = (p) => h.$emit("checkout", o.commit))
            }, " Checkout ")
          ])
        ])
      ]);
    };
  }
}), Vo = /* @__PURE__ */ D(Ro, [["__scopeId", "data-v-9768f067"]]), Yo = { class: "dialog-content" }, jo = { class: "dialog-header" }, Fo = { class: "dialog-title" }, Jo = { class: "dialog-body" }, Wo = { class: "dialog-message" }, Ko = {
  key: 0,
  class: "dialog-details"
}, Xo = {
  key: 1,
  class: "dialog-warning"
}, qo = { class: "dialog-footer" }, Qo = /* @__PURE__ */ A({
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
    return (d, n) => (e(), r("div", {
      class: "dialog-overlay",
      onClick: n[3] || (n[3] = j((a) => d.$emit("cancel"), ["self"]))
    }, [
      t("div", Yo, [
        t("div", jo, [
          t("h3", Fo, g(o.title), 1)
        ]),
        t("div", Jo, [
          t("p", Wo, g(o.message), 1),
          o.details && o.details.length ? (e(), r("div", Ko, [
            (e(!0), r(I, null, T(o.details, (a, m) => (e(), r("div", {
              key: m,
              class: "detail-item"
            }, " • " + g(a), 1))), 128))
          ])) : v("", !0),
          o.warning ? (e(), r("p", Xo, [
            n[4] || (n[4] = t("span", { class: "warning-icon" }, "⚠", -1)),
            dt(" " + g(o.warning), 1)
          ])) : v("", !0)
        ]),
        t("div", qo, [
          t("button", {
            class: "dialog-btn cancel",
            onClick: n[0] || (n[0] = (a) => d.$emit("cancel"))
          }, g(o.cancelLabel), 1),
          o.secondaryAction ? (e(), r("button", {
            key: 0,
            class: "dialog-btn secondary",
            onClick: n[1] || (n[1] = (a) => d.$emit("secondary"))
          }, g(o.secondaryLabel), 1)) : v("", !0),
          t("button", {
            class: H(["dialog-btn primary", { destructive: o.destructive }]),
            onClick: n[2] || (n[2] = (a) => d.$emit("confirm"))
          }, g(o.confirmLabel), 3)
        ])
      ])
    ]));
  }
}), Zo = /* @__PURE__ */ D(Qo, [["__scopeId", "data-v-d24c6c0b"]]), te = "[data-comfygit-theme=default] .comfygit-panel{font-family:var(--cg-font-body)}[data-comfygit-theme=default] .panel-title{color:var(--cg-color-accent)}", oe = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 12px;--cg-font-size-sm: 14px;--cg-font-size-base: 17px;--cg-font-size-lg: 20px;--cg-font-size-xl: 24px;--cg-font-size-2xl: 28px;--cg-panel-width: 754px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-header{background:var(--cg-color-bg-tertiary);border-bottom:1px solid var(--cg-color-border);padding:var(--cg-space-3) var(--cg-space-4)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:cursor-blink 1s step-end infinite}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}', ee = '@import"https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap";[data-comfygit-theme=swiss]{--cg-font-display: "Playfair Display", Georgia, serif;--cg-font-body: "DM Sans", system-ui, sans-serif;--cg-font-mono: "JetBrains Mono", ui-monospace, monospace;--cg-font-size-xs: 10px;--cg-font-size-sm: 12px;--cg-font-size-base: 14px;--cg-font-size-lg: 18px;--cg-font-size-xl: 24px;--cg-font-size-2xl: 32px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-line-height-tight: 1.1;--cg-line-height-normal: 1.6;--cg-line-height-relaxed: 1.8;--cg-letter-spacing-tight: -.03em;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .15em;--cg-color-bg-primary: #fafafa;--cg-color-bg-secondary: #ffffff;--cg-color-bg-tertiary: #f0f0f0;--cg-color-bg-hover: #e8e8e8;--cg-color-bg-overlay: rgba(0, 0, 0, .6);--cg-color-text-primary: #0a0a0a;--cg-color-text-secondary: #404040;--cg-color-text-muted: #808080;--cg-color-text-inverse: #ffffff;--cg-color-border: #0a0a0a;--cg-color-border-subtle: #e0e0e0;--cg-color-border-strong: #0a0a0a;--cg-color-accent: #dc2626;--cg-color-accent-hover: #b91c1c;--cg-color-accent-muted: rgba(220, 38, 38, .1);--cg-color-success: #16a34a;--cg-color-success-muted: rgba(22, 163, 74, .1);--cg-color-warning: #d97706;--cg-color-warning-muted: rgba(217, 119, 6, .08);--cg-color-error: #dc2626;--cg-color-error-muted: rgba(220, 38, 38, .08);--cg-color-info: #0a0a0a;--cg-color-info-muted: rgba(10, 10, 10, .05);--cg-space-1: 4px;--cg-space-2: 8px;--cg-space-3: 16px;--cg-space-4: 24px;--cg-space-5: 32px;--cg-space-6: 40px;--cg-space-8: 56px;--cg-space-10: 72px;--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 2px;--cg-radius-lg: 2px;--cg-radius-xl: 2px;--cg-radius-2xl: 2px;--cg-radius-full: 2px;--cg-shadow-sm: none;--cg-shadow-md: 0 1px 0 rgba(0, 0, 0, .05);--cg-shadow-lg: 0 4px 24px rgba(0, 0, 0, .08);--cg-shadow-xl: 0 8px 48px rgba(0, 0, 0, .12);--cg-btn-gradient-start: #0a0a0a;--cg-btn-gradient-end: #0a0a0a;--cg-btn-shadow-inset: none}[data-comfygit-theme=swiss] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-xl);font-family:var(--cg-font-body)}[data-comfygit-theme=swiss] .panel-header{background:var(--cg-color-bg-secondary);border-bottom:2px solid var(--cg-color-border);padding:var(--cg-space-4) var(--cg-space-5)}[data-comfygit-theme=swiss] .header-left{flex-direction:column;align-items:flex-start;gap:var(--cg-space-1)}[data-comfygit-theme=swiss] .panel-title{font-family:var(--cg-font-display);font-size:var(--cg-font-size-xl);font-weight:700;color:var(--cg-color-text-primary);letter-spacing:var(--cg-letter-spacing-tight);line-height:var(--cg-line-height-tight)}[data-comfygit-theme=swiss] .header-info{font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-muted)}[data-comfygit-theme=swiss] .env-name{font-weight:var(--cg-font-weight-semibold);color:var(--cg-color-text-secondary)}[data-comfygit-theme=swiss] .branch-name{color:var(--cg-color-text-muted)}[data-comfygit-theme=swiss] .status-dot{width:6px;height:6px;border-radius:0}[data-comfygit-theme=swiss] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=swiss] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=swiss] .status-dot.error{background:var(--cg-color-accent)}[data-comfygit-theme=swiss] .icon-btn{color:var(--cg-color-text-primary);border-radius:0;transition:all var(--cg-transition-fast)}[data-comfygit-theme=swiss] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=swiss] .panel-content{padding:var(--cg-space-5)}[data-comfygit-theme=swiss] .status-section{margin-bottom:var(--cg-space-5)}[data-comfygit-theme=swiss] .status-grid{background:var(--cg-color-bg-secondary);border:1px solid var(--cg-color-border-subtle);border-radius:0}[data-comfygit-theme=swiss] .status-column{padding:var(--cg-space-4)}[data-comfygit-theme=swiss] .status-column:first-child{border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=swiss] .column-title{font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-muted);margin-bottom:var(--cg-space-3);padding-bottom:var(--cg-space-2);border-bottom:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=swiss] .status-item{font-size:var(--cg-font-size-sm);padding:var(--cg-space-1) 0}[data-comfygit-theme=swiss] .status-item .icon{display:none}[data-comfygit-theme=swiss] .count{font-family:var(--cg-font-display);font-size:var(--cg-font-size-lg);font-weight:700;min-width:24px}[data-comfygit-theme=swiss] .count.new{color:var(--cg-color-success)}[data-comfygit-theme=swiss] .count.modified{color:var(--cg-color-warning)}[data-comfygit-theme=swiss] .count.deleted{color:var(--cg-color-accent)}[data-comfygit-theme=swiss] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=swiss] .label{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide)}[data-comfygit-theme=swiss] .synced-item{border-top:1px solid var(--cg-color-border-subtle);margin-top:var(--cg-space-2);padding-top:var(--cg-space-2)}[data-comfygit-theme=swiss] .status-item.ok .label{color:var(--cg-color-success)}[data-comfygit-theme=swiss] .warning-box{background:var(--cg-color-warning-muted);border:none;border-left:3px solid var(--cg-color-warning);color:var(--cg-color-text-primary);font-size:var(--cg-font-size-sm);padding:var(--cg-space-3)}[data-comfygit-theme=swiss] .warning-box.error{background:var(--cg-color-error-muted);border-left-color:var(--cg-color-accent)}[data-comfygit-theme=swiss] .warning-icon{display:none}[data-comfygit-theme=swiss] .history-section{border-top:2px solid var(--cg-color-border);padding-top:var(--cg-space-4);margin-top:var(--cg-space-4)}[data-comfygit-theme=swiss] .history-title{font-family:var(--cg-font-display);font-size:var(--cg-font-size-lg);font-weight:600;color:var(--cg-color-text-primary);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=swiss] .commit-item{background:transparent;border:none;border-bottom:1px solid var(--cg-color-border-subtle);padding:var(--cg-space-3) 0;display:grid;grid-template-columns:60px 1fr auto;gap:var(--cg-space-3);align-items:baseline}[data-comfygit-theme=swiss] .commit-item:last-child{border-bottom:none}[data-comfygit-theme=swiss] .commit-item:hover{background:var(--cg-color-bg-hover);margin:0 calc(-1 * var(--cg-space-3));padding-left:var(--cg-space-3);padding-right:var(--cg-space-3)}[data-comfygit-theme=swiss] .commit-hash{font-family:var(--cg-font-mono);font-size:var(--cg-font-size-xs);color:var(--cg-color-accent);font-weight:500}[data-comfygit-theme=swiss] .commit-message{font-size:var(--cg-font-size-sm);color:var(--cg-color-text-primary);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=swiss] .commit-date{font-size:var(--cg-font-size-xs);color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide)}[data-comfygit-theme=swiss] .panel-footer{border-top:2px solid var(--cg-color-border);background:var(--cg-color-bg-secondary);padding:var(--cg-space-4) var(--cg-space-5)}[data-comfygit-theme=swiss] .export-btn{background:var(--cg-color-text-primary);color:var(--cg-color-text-inverse);border:none;text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-semibold);padding:var(--cg-space-3) var(--cg-space-4);transition:all var(--cg-transition-fast)}[data-comfygit-theme=swiss] .export-btn:hover:not(:disabled){background:var(--cg-color-accent);transform:translateY(-1px)}[data-comfygit-theme=swiss] .commit-popover{background:var(--cg-color-bg-secondary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=swiss] .commit-input{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-body);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=swiss] .commit-input:focus{border-color:var(--cg-color-border);outline:none}[data-comfygit-theme=swiss] .comfygit-panel-btn{background:var(--cg-color-text-primary)!important;color:var(--cg-color-text-inverse)!important;border:none!important;border-radius:0!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-body);font-size:10px;font-weight:600;box-shadow:none!important}[data-comfygit-theme=swiss] .comfygit-panel-btn:hover{background:var(--cg-color-accent)!important}[data-comfygit-theme=swiss] .comfygit-commit-btn{background:var(--cg-color-bg-secondary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border)!important;border-radius:0!important;font-family:var(--cg-font-body);font-size:10px;text-transform:uppercase;letter-spacing:.1em}[data-comfygit-theme=swiss] .comfygit-commit-btn:hover{background:var(--cg-color-bg-hover)!important}[data-comfygit-theme=swiss] .commit-indicator{background:var(--cg-color-accent);width:6px;height:6px;border-radius:0}[data-comfygit-theme=swiss] .panel-content::-webkit-scrollbar{width:4px}[data-comfygit-theme=swiss] .panel-content::-webkit-scrollbar-track{background:transparent}[data-comfygit-theme=swiss] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle)}[data-comfygit-theme=swiss] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-text-muted)}[data-comfygit-theme=swiss] .comfygit-panel ::selection,[data-comfygit-theme=swiss] .toast ::selection,[data-comfygit-theme=swiss] .dialog-content ::selection,[data-comfygit-theme=swiss] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-text-inverse)}', ae = '@import"https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Nunito:wght@400;500;600;700&display=swap";[data-comfygit-theme=soft]{--cg-font-display: "Outfit", system-ui, sans-serif;--cg-font-body: "Nunito", system-ui, sans-serif;--cg-font-mono: "SF Mono", ui-monospace, monospace;--cg-font-size-xs: 11px;--cg-font-size-sm: 13px;--cg-font-size-base: 15px;--cg-font-size-lg: 18px;--cg-font-size-xl: 22px;--cg-font-size-2xl: 28px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-line-height-tight: 1.3;--cg-line-height-normal: 1.6;--cg-line-height-relaxed: 1.8;--cg-letter-spacing-tight: -.01em;--cg-letter-spacing-normal: .01em;--cg-letter-spacing-wide: .04em;--cg-color-bg-primary: rgba(30, 27, 38, .95);--cg-color-bg-secondary: rgba(40, 36, 50, .8);--cg-color-bg-tertiary: rgba(50, 45, 62, .6);--cg-color-bg-hover: rgba(80, 70, 100, .4);--cg-color-bg-overlay: rgba(20, 18, 28, .75);--cg-color-text-primary: #f0eef5;--cg-color-text-secondary: #c4bfd4;--cg-color-text-muted: #8a8299;--cg-color-text-inverse: #1e1b26;--cg-color-border: rgba(255, 255, 255, .08);--cg-color-border-subtle: rgba(255, 255, 255, .04);--cg-color-border-strong: rgba(255, 255, 255, .15);--cg-color-accent: #a78bfa;--cg-color-accent-hover: #c4b5fd;--cg-color-accent-muted: rgba(167, 139, 250, .2);--cg-color-success: #86efac;--cg-color-success-muted: rgba(134, 239, 172, .15);--cg-color-warning: #fcd34d;--cg-color-warning-muted: rgba(252, 211, 77, .12);--cg-color-error: #fca5a5;--cg-color-error-muted: rgba(252, 165, 165, .12);--cg-color-info: #93c5fd;--cg-color-info-muted: rgba(147, 197, 253, .15);--cg-space-1: 4px;--cg-space-2: 8px;--cg-space-3: 14px;--cg-space-4: 20px;--cg-space-5: 28px;--cg-space-6: 36px;--cg-space-8: 48px;--cg-radius-none: 0;--cg-radius-sm: 6px;--cg-radius-md: 10px;--cg-radius-lg: 16px;--cg-radius-xl: 24px;--cg-radius-2xl: 32px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 2px 8px rgba(0, 0, 0, .15);--cg-shadow-md: 0 4px 16px rgba(0, 0, 0, .2), 0 0 40px rgba(167, 139, 250, .05);--cg-shadow-lg: 0 8px 32px rgba(0, 0, 0, .25), 0 0 60px rgba(167, 139, 250, .08);--cg-shadow-xl: 0 16px 48px rgba(0, 0, 0, .3), 0 0 80px rgba(167, 139, 250, .1);--cg-blur-sm: 8px;--cg-blur-md: 16px;--cg-blur-lg: 24px;--cg-btn-gradient-start: #a78bfa;--cg-btn-gradient-end: #8b5cf6;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .25)}[data-comfygit-theme=soft] .comfygit-panel{background:linear-gradient(135deg,#3c325066,#1e1b26f2),var(--cg-color-bg-primary);backdrop-filter:blur(var(--cg-blur-lg));-webkit-backdrop-filter:blur(var(--cg-blur-lg));border:1px solid var(--cg-color-border-strong);border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);font-family:var(--cg-font-body);overflow:hidden}[data-comfygit-theme=soft] .comfygit-panel:before{content:"";position:absolute;top:-50%;right:-50%;width:100%;height:100%;background:radial-gradient(circle at center,rgba(167,139,250,.15) 0%,transparent 50%);pointer-events:none;animation:soft-glow 8s ease-in-out infinite alternate}@keyframes soft-glow{0%{transform:translate(0) scale(1);opacity:.5}to{transform:translate(-10%,10%) scale(1.2);opacity:.8}}[data-comfygit-theme=soft] .panel-header{background:#ffffff08;border-bottom:1px solid var(--cg-color-border);padding:var(--cg-space-4) var(--cg-space-5);position:relative}[data-comfygit-theme=soft] .panel-title{font-family:var(--cg-font-display);font-size:var(--cg-font-size-lg);font-weight:600;color:var(--cg-color-text-primary);background:linear-gradient(90deg,var(--cg-color-text-primary),var(--cg-color-accent));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}[data-comfygit-theme=soft] .header-info{font-size:var(--cg-font-size-xs)}[data-comfygit-theme=soft] .env-name{color:var(--cg-color-text-secondary);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=soft] .branch-name{color:var(--cg-color-text-muted)}[data-comfygit-theme=soft] .status-dot{width:10px;height:10px;border-radius:var(--cg-radius-full);box-shadow:0 0 8px currentColor}[data-comfygit-theme=soft] .status-dot.success{background:var(--cg-color-success);box-shadow:0 0 12px var(--cg-color-success)}[data-comfygit-theme=soft] .status-dot.warning{background:var(--cg-color-warning);box-shadow:0 0 12px var(--cg-color-warning)}[data-comfygit-theme=soft] .status-dot.error{background:var(--cg-color-error);box-shadow:0 0 12px var(--cg-color-error)}[data-comfygit-theme=soft] .icon-btn{color:var(--cg-color-text-secondary);border-radius:var(--cg-radius-md);transition:all var(--cg-transition-normal)}[data-comfygit-theme=soft] .icon-btn:hover{background:var(--cg-color-bg-hover);color:var(--cg-color-text-primary);transform:scale(1.05)}[data-comfygit-theme=soft] .panel-content{padding:var(--cg-space-5);position:relative}[data-comfygit-theme=soft] .status-section{margin-bottom:var(--cg-space-5)}[data-comfygit-theme=soft] .status-grid{background:#ffffff08;-webkit-backdrop-filter:blur(var(--cg-blur-sm));backdrop-filter:blur(var(--cg-blur-sm));border:1px solid var(--cg-color-border);border-radius:var(--cg-radius-lg);overflow:hidden}[data-comfygit-theme=soft] .status-column{padding:var(--cg-space-4)}[data-comfygit-theme=soft] .status-column:first-child{border-right:1px solid var(--cg-color-border)}[data-comfygit-theme=soft] .column-title{font-family:var(--cg-font-display);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-muted);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=soft] .status-item{font-size:var(--cg-font-size-sm);padding:var(--cg-space-1) 0}[data-comfygit-theme=soft] .status-item .icon{font-size:6px;opacity:.6}[data-comfygit-theme=soft] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=soft] .count.new{color:var(--cg-color-success)}[data-comfygit-theme=soft] .count.modified{color:var(--cg-color-warning)}[data-comfygit-theme=soft] .count.deleted{color:var(--cg-color-error)}[data-comfygit-theme=soft] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=soft] .synced-item{border-top:1px solid var(--cg-color-border);margin-top:var(--cg-space-2);padding-top:var(--cg-space-2)}[data-comfygit-theme=soft] .status-item.ok,[data-comfygit-theme=soft] .status-item.ok .label{color:var(--cg-color-success)}[data-comfygit-theme=soft] .warning-box{background:var(--cg-color-warning-muted);border:1px solid rgba(252,211,77,.3);border-radius:var(--cg-radius-md);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm);padding:var(--cg-space-3)}[data-comfygit-theme=soft] .warning-box.error{background:var(--cg-color-error-muted);border-color:#fca5a54d;color:var(--cg-color-error)}[data-comfygit-theme=soft] .history-section{margin-top:var(--cg-space-4)}[data-comfygit-theme=soft] .history-title{font-family:var(--cg-font-display);font-size:var(--cg-font-size-sm);font-weight:var(--cg-font-weight-semibold);color:var(--cg-color-text-secondary);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=soft] .commit-item{background:#ffffff05;border:1px solid var(--cg-color-border-subtle);border-radius:var(--cg-radius-md);padding:var(--cg-space-3);margin-bottom:var(--cg-space-2);transition:all var(--cg-transition-normal)}[data-comfygit-theme=soft] .commit-item:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border);transform:translateY(-2px);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=soft] .commit-hash{font-family:var(--cg-font-mono);font-size:var(--cg-font-size-xs);color:var(--cg-color-accent);font-weight:500}[data-comfygit-theme=soft] .commit-message{font-size:var(--cg-font-size-sm);color:var(--cg-color-text-primary)}[data-comfygit-theme=soft] .commit-date{font-size:var(--cg-font-size-xs);color:var(--cg-color-text-muted)}[data-comfygit-theme=soft] .panel-footer{border-top:1px solid var(--cg-color-border);background:#ffffff05;padding:var(--cg-space-4) var(--cg-space-5)}[data-comfygit-theme=soft] .export-btn{background:linear-gradient(135deg,var(--cg-btn-gradient-start),var(--cg-btn-gradient-end));color:var(--cg-color-text-inverse);border:none;border-radius:var(--cg-radius-md);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-semibold);padding:var(--cg-space-3) var(--cg-space-4);transition:all var(--cg-transition-normal);box-shadow:0 4px 12px #a78bfa4d}[data-comfygit-theme=soft] .export-btn:hover:not(:disabled){transform:translateY(-2px);box-shadow:0 6px 20px #a78bfa66}[data-comfygit-theme=soft] .commit-popover{background:#1e1b26f2;-webkit-backdrop-filter:blur(var(--cg-blur-lg));backdrop-filter:blur(var(--cg-blur-lg));border:1px solid var(--cg-color-border-strong);border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=soft] .commit-input{background:#ffffff0d;border:1px solid var(--cg-color-border);border-radius:var(--cg-radius-md);color:var(--cg-color-text-primary);font-family:var(--cg-font-body)}[data-comfygit-theme=soft] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted);outline:none}[data-comfygit-theme=soft] .comfygit-panel-btn{background:linear-gradient(135deg,var(--cg-btn-gradient-start),var(--cg-btn-gradient-end))!important;color:var(--cg-color-text-inverse)!important;border:none!important;border-radius:8px 0 0 8px!important;font-family:var(--cg-font-display);font-size:11px;font-weight:600;box-shadow:0 4px 12px #a78bfa4d!important}[data-comfygit-theme=soft] .comfygit-panel-btn:hover{box-shadow:0 6px 20px #a78bfa80!important;transform:translateY(-1px)}[data-comfygit-theme=soft] .comfygit-commit-btn{background:#ffffff0d!important;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border)!important;border-radius:0 8px 8px 0!important;font-family:var(--cg-font-display)}[data-comfygit-theme=soft] .comfygit-commit-btn:hover{background:#ffffff1a!important;border-color:var(--cg-color-accent)!important}[data-comfygit-theme=soft] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=soft] .panel-content::-webkit-scrollbar{width:6px}[data-comfygit-theme=soft] .panel-content::-webkit-scrollbar-track{background:transparent}[data-comfygit-theme=soft] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-strong);border-radius:var(--cg-radius-full)}[data-comfygit-theme=soft] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=soft] .comfygit-panel ::selection,[data-comfygit-theme=soft] .toast ::selection,[data-comfygit-theme=soft] .dialog-content ::selection,[data-comfygit-theme=soft] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-text-inverse)}', re = '@import"https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Archivo+Black&family=Work+Sans:wght@400;500;600;700;800&display=swap";[data-comfygit-theme=brutal]{--cg-font-display: "Archivo Black", Impact, sans-serif;--cg-font-body: "Work Sans", system-ui, sans-serif;--cg-font-mono: "Space Mono", ui-monospace, monospace;--cg-font-size-xs: 10px;--cg-font-size-sm: 12px;--cg-font-size-base: 14px;--cg-font-size-lg: 16px;--cg-font-size-xl: 20px;--cg-font-size-2xl: 28px;--cg-font-weight-normal: 500;--cg-font-weight-medium: 600;--cg-font-weight-semibold: 700;--cg-font-weight-bold: 800;--cg-line-height-tight: 1.1;--cg-line-height-normal: 1.4;--cg-line-height-relaxed: 1.6;--cg-letter-spacing-tight: -.02em;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .05em;--cg-color-bg-primary: #fffdf7;--cg-color-bg-secondary: #ffffff;--cg-color-bg-tertiary: #f5f3ed;--cg-color-bg-hover: #fef3c7;--cg-color-bg-overlay: rgba(0, 0, 0, .7);--cg-color-text-primary: #0f0f0f;--cg-color-text-secondary: #1f1f1f;--cg-color-text-muted: #525252;--cg-color-text-inverse: #ffffff;--cg-color-border: #0f0f0f;--cg-color-border-subtle: #0f0f0f;--cg-color-border-strong: #0f0f0f;--cg-color-accent: #facc15;--cg-color-accent-hover: #fde047;--cg-color-accent-muted: rgba(250, 204, 21, .3);--cg-color-success: #22c55e;--cg-color-success-muted: rgba(34, 197, 94, .2);--cg-color-warning: #f97316;--cg-color-warning-muted: rgba(249, 115, 22, .15);--cg-color-error: #ef4444;--cg-color-error-muted: rgba(239, 68, 68, .15);--cg-color-info: #3b82f6;--cg-color-info-muted: rgba(59, 130, 246, .15);--cg-space-1: 6px;--cg-space-2: 10px;--cg-space-3: 14px;--cg-space-4: 20px;--cg-space-5: 28px;--cg-space-6: 36px;--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 3px 3px 0 var(--cg-color-border);--cg-shadow-md: 4px 4px 0 var(--cg-color-border);--cg-shadow-lg: 6px 6px 0 var(--cg-color-border);--cg-shadow-xl: 8px 8px 0 var(--cg-color-border);--cg-btn-gradient-start: #facc15;--cg-btn-gradient-end: #facc15;--cg-btn-shadow-inset: none}[data-comfygit-theme=brutal] .comfygit-panel{background:var(--cg-color-bg-primary);border:4px solid var(--cg-color-border);box-shadow:var(--cg-shadow-xl);font-family:var(--cg-font-body)}[data-comfygit-theme=brutal] .comfygit-panel:before,[data-comfygit-theme=brutal] .comfygit-panel:after{content:"";position:absolute;width:12px;height:12px;background:var(--cg-color-accent);border:2px solid var(--cg-color-border)}[data-comfygit-theme=brutal] .comfygit-panel:before{top:-4px;left:-4px}[data-comfygit-theme=brutal] .comfygit-panel:after{bottom:-4px;right:-4px}[data-comfygit-theme=brutal] .panel-header{background:var(--cg-color-accent);border-bottom:4px solid var(--cg-color-border);padding:var(--cg-space-3) var(--cg-space-4)}[data-comfygit-theme=brutal] .panel-title{font-family:var(--cg-font-display);font-size:var(--cg-font-size-xl);color:var(--cg-color-text-primary);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-tight)}[data-comfygit-theme=brutal] .header-info{font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=brutal] .env-name{color:var(--cg-color-text-primary);text-transform:uppercase}[data-comfygit-theme=brutal] .branch-name{color:var(--cg-color-text-secondary);font-family:var(--cg-font-mono)}[data-comfygit-theme=brutal] .status-dot{width:10px;height:10px;border-radius:0;border:2px solid var(--cg-color-border)}[data-comfygit-theme=brutal] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=brutal] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=brutal] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=brutal] .icon-btn{color:var(--cg-color-text-primary);border:2px solid transparent;background:var(--cg-color-bg-secondary);transition:all .1s ease}[data-comfygit-theme=brutal] .icon-btn:hover{background:var(--cg-color-bg-secondary);border-color:var(--cg-color-border);box-shadow:2px 2px 0 var(--cg-color-border);transform:translate(-2px,-2px)}[data-comfygit-theme=brutal] .panel-content{padding:var(--cg-space-4);background:var(--cg-color-bg-primary)}[data-comfygit-theme=brutal] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=brutal] .status-grid{background:var(--cg-color-bg-secondary);border:3px solid var(--cg-color-border);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=brutal] .status-column{padding:var(--cg-space-3)}[data-comfygit-theme=brutal] .status-column:first-child{border-right:3px solid var(--cg-color-border)}[data-comfygit-theme=brutal] .column-title{font-family:var(--cg-font-display);font-size:var(--cg-font-size-xs);text-transform:uppercase;color:var(--cg-color-text-primary);margin-bottom:var(--cg-space-3);padding-bottom:var(--cg-space-2);border-bottom:2px solid var(--cg-color-border)}[data-comfygit-theme=brutal] .status-item{font-size:var(--cg-font-size-sm);font-weight:var(--cg-font-weight-medium);padding:var(--cg-space-1) 0}[data-comfygit-theme=brutal] .status-item .icon{width:8px;height:8px;border:1px solid currentColor;background:currentColor;font-size:0;display:inline-block}[data-comfygit-theme=brutal] .count{font-family:var(--cg-font-mono);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-lg);min-width:28px}[data-comfygit-theme=brutal] .count.new{color:var(--cg-color-success)}[data-comfygit-theme=brutal] .count.modified{color:var(--cg-color-warning)}[data-comfygit-theme=brutal] .count.deleted{color:var(--cg-color-error)}[data-comfygit-theme=brutal] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=brutal] .label{text-transform:uppercase;font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide)}[data-comfygit-theme=brutal] .synced-item{border-top:2px dashed var(--cg-color-border);margin-top:var(--cg-space-2);padding-top:var(--cg-space-2)}[data-comfygit-theme=brutal] .status-item.ok .label{color:var(--cg-color-success)}[data-comfygit-theme=brutal] .warning-box{background:var(--cg-color-warning);border:3px solid var(--cg-color-border);box-shadow:var(--cg-shadow-sm);color:var(--cg-color-text-primary);font-size:var(--cg-font-size-sm);font-weight:var(--cg-font-weight-semibold);padding:var(--cg-space-3);text-transform:uppercase}[data-comfygit-theme=brutal] .warning-box.error{background:var(--cg-color-error);color:var(--cg-color-text-inverse)}[data-comfygit-theme=brutal] .warning-icon{font-weight:700}[data-comfygit-theme=brutal] .history-section{margin-top:var(--cg-space-4);border-top:3px solid var(--cg-color-border);padding-top:var(--cg-space-4)}[data-comfygit-theme=brutal] .history-title{font-family:var(--cg-font-display);font-size:var(--cg-font-size-base);text-transform:uppercase;color:var(--cg-color-text-primary);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=brutal] .commit-item{background:var(--cg-color-bg-secondary);border:2px solid var(--cg-color-border);padding:var(--cg-space-3);margin-bottom:var(--cg-space-2);transition:all .1s ease}[data-comfygit-theme=brutal] .commit-item:hover{background:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);transform:translate(-2px,-2px)}[data-comfygit-theme=brutal] .commit-hash{font-family:var(--cg-font-mono);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-bold);color:var(--cg-color-info);text-transform:uppercase}[data-comfygit-theme=brutal] .commit-message{font-size:var(--cg-font-size-sm);font-weight:var(--cg-font-weight-medium);color:var(--cg-color-text-primary)}[data-comfygit-theme=brutal] .commit-date{font-size:var(--cg-font-size-xs);font-family:var(--cg-font-mono);color:var(--cg-color-text-muted);text-transform:uppercase}[data-comfygit-theme=brutal] .panel-footer{border-top:4px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary);padding:var(--cg-space-3) var(--cg-space-4)}[data-comfygit-theme=brutal] .export-btn{background:var(--cg-color-bg-secondary);color:var(--cg-color-text-primary);border:3px solid var(--cg-color-border);box-shadow:var(--cg-shadow-sm);text-transform:uppercase;font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-xs);padding:var(--cg-space-3) var(--cg-space-4);transition:all .1s ease}[data-comfygit-theme=brutal] .export-btn:hover:not(:disabled){background:var(--cg-color-accent);transform:translate(-3px,-3px);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=brutal] .export-btn:active:not(:disabled){transform:translate(0);box-shadow:none}[data-comfygit-theme=brutal] .commit-popover{background:var(--cg-color-bg-primary);border:4px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=brutal] .commit-input{background:var(--cg-color-bg-secondary);border:3px solid var(--cg-color-border);color:var(--cg-color-text-primary);font-family:var(--cg-font-body);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=brutal] .commit-input:focus{background:var(--cg-color-accent-muted);outline:none}[data-comfygit-theme=brutal] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-text-primary)!important;border:3px solid var(--cg-color-border)!important;border-radius:0!important;text-transform:uppercase;font-family:var(--cg-font-display);font-size:10px;box-shadow:3px 3px 0 var(--cg-color-border)!important;transition:all .1s ease!important}[data-comfygit-theme=brutal] .comfygit-panel-btn:hover{transform:translate(-2px,-2px)!important;box-shadow:5px 5px 0 var(--cg-color-border)!important}[data-comfygit-theme=brutal] .comfygit-panel-btn:active{transform:translate(0)!important;box-shadow:none!important}[data-comfygit-theme=brutal] .comfygit-commit-btn{background:var(--cg-color-bg-secondary)!important;color:var(--cg-color-text-primary)!important;border:3px solid var(--cg-color-border)!important;border-left:none!important;border-radius:0!important;font-family:var(--cg-font-body);font-weight:700;text-transform:uppercase;font-size:10px}[data-comfygit-theme=brutal] .comfygit-commit-btn:hover{background:var(--cg-color-bg-hover)!important}[data-comfygit-theme=brutal] .commit-indicator{background:var(--cg-color-error);border:2px solid var(--cg-color-border);border-radius:0}[data-comfygit-theme=brutal] .panel-content::-webkit-scrollbar{width:12px}[data-comfygit-theme=brutal] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary);border-left:2px solid var(--cg-color-border)}[data-comfygit-theme=brutal] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-accent);border:2px solid var(--cg-color-border)}[data-comfygit-theme=brutal] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent-hover)}[data-comfygit-theme=brutal] .comfygit-panel ::selection,[data-comfygit-theme=brutal] .toast ::selection,[data-comfygit-theme=brutal] .dialog-content ::selection,[data-comfygit-theme=brutal] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-text-primary)}[data-comfygit-theme=brutal] .loading{background:repeating-conic-gradient(var(--cg-color-bg-tertiary) 0% 25%,var(--cg-color-bg-secondary) 0% 50%) 50% / 16px 16px;color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);text-transform:uppercase}', Z = {
  default: te,
  phosphor: oe,
  swiss: ee,
  soft: ae,
  brutal: re
};
let pt = "default", P = null;
function ce() {
  const d = new URLSearchParams(window.location.search).get("comfygit-theme");
  if (d && d in Z)
    return d;
  const n = localStorage.getItem("comfygit-theme");
  return n && n in Z ? n : "default";
}
function et(o) {
  pt = o, localStorage.setItem("comfygit-theme", o), P && P.remove(), P = document.createElement("style"), P.id = "comfygit-theme-styles", P.setAttribute("data-theme", o), P.textContent = Z[o], document.head.appendChild(P), document.body.setAttribute("data-comfygit-theme", o), console.log(`[ComfyGit] Applied theme: ${o}`);
}
function ht() {
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
function ut() {
  return pt;
}
const se = { class: "comfygit-panel" }, ne = { class: "panel-header" }, ie = { class: "header-left" }, le = {
  key: 0,
  class: "header-info"
}, ge = { class: "env-name" }, de = { class: "branch-name" }, me = ["title"], fe = {
  key: 1,
  class: "header-info loading-text"
}, pe = { class: "header-actions" }, he = { class: "panel-content" }, ue = {
  key: 0,
  class: "error-message"
}, be = {
  key: 1,
  class: "loading"
}, ve = { class: "panel-footer" }, ye = ["disabled"], xe = { class: "toast-container" }, we = { class: "toast-icon" }, ke = { class: "toast-message" }, ze = /* @__PURE__ */ A({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(o, { emit: d }) {
    function n() {
      const l = ht(), x = (l.findIndex((G) => G.id === ut()) + 1) % l.length, _ = l[x].id;
      et(_);
    }
    const a = d, {
      getStatus: m,
      getHistory: c,
      exportEnv: $,
      getBranches: h,
      checkout: f,
      createBranch: w,
      switchBranch: y
    } = ot(), i = k(null), u = k([]), b = k([]), L = k(!1), p = k(null), E = k(null), z = k(null), U = k([]);
    let vt = 0;
    function C(l, s = "info", x = 3e3) {
      const _ = ++vt;
      return U.value.push({ id: _, message: l, type: s }), x > 0 && setTimeout(() => {
        U.value = U.value.filter((G) => G.id !== _);
      }, x), _;
    }
    function O(l) {
      U.value = U.value.filter((s) => s.id !== l);
    }
    function yt(l) {
      switch (l) {
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
    const F = N(() => {
      if (!i.value) return "neutral";
      const l = i.value.workflows, s = l.new.length > 0 || l.modified.length > 0 || l.deleted.length > 0 || i.value.has_changes;
      return i.value.comparison.is_synced ? s ? "warning" : "success" : "error";
    }), xt = N(() => i.value ? F.value === "success" ? "All synced" : F.value === "warning" ? "Uncommitted changes" : F.value === "error" ? "Not synced" : "" : "");
    async function J() {
      L.value = !0, p.value = null;
      try {
        const [l, s, x] = await Promise.all([
          m(),
          c(),
          h()
        ]);
        i.value = l, u.value = s.commits, b.value = x.branches, a("statusUpdate", l);
      } catch (l) {
        p.value = l instanceof Error ? l.message : "Failed to load status", i.value = null, u.value = [], b.value = [];
      } finally {
        L.value = !1;
      }
    }
    function wt(l) {
      E.value = l;
    }
    async function rt(l) {
      var x;
      E.value = null;
      const s = i.value && (i.value.workflows.new.length > 0 || i.value.workflows.modified.length > 0 || i.value.workflows.deleted.length > 0 || i.value.has_changes);
      z.value = {
        title: s ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: s ? "You have uncommitted changes that will be lost." : `Checkout commit ${l.short_hash || ((x = l.hash) == null ? void 0 : x.slice(0, 7))}?`,
        details: s ? ct() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: s ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: s,
        onConfirm: async () => {
          var st;
          z.value = null;
          const _ = C(`Checking out ${l.short_hash || ((st = l.hash) == null ? void 0 : st.slice(0, 7))}...`, "info", 0), G = await f(l.hash, s);
          O(_), G.status === "success" ? C("Restarting ComfyUI...", "success") : C(G.message || "Checkout failed", "error");
        }
      };
    }
    async function kt(l) {
      const s = i.value && (i.value.workflows.new.length > 0 || i.value.workflows.modified.length > 0 || i.value.workflows.deleted.length > 0 || i.value.has_changes);
      z.value = {
        title: s ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: s ? "You have uncommitted changes." : `Switch to branch "${l}"?`,
        details: s ? ct() : void 0,
        warning: s ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: s ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          z.value = null;
          const x = C(`Switching to ${l}...`, "info", 0), _ = await y(l, s);
          O(x), _.status === "success" ? C("Restarting ComfyUI...", "success") : _.status === "warning" && _.reason === "uncommitted_changes" ? C("Switch cancelled due to uncommitted changes", "warning") : C(_.message || "Branch switch failed", "error");
        }
      };
    }
    async function zt(l) {
      const s = C(`Creating branch ${l}...`, "info", 0), x = await w(l);
      O(s), x.status === "success" ? (C(`Branch "${l}" created`, "success"), await J()) : C(x.message || "Failed to create branch", "error");
    }
    async function Ct(l) {
      E.value = null;
      const s = prompt("Enter branch name:");
      if (s) {
        const x = C(`Creating branch ${s}...`, "info", 0), _ = await w(s, l.hash);
        O(x), _.status === "success" ? (C(`Branch "${s}" created from ${l.short_hash}`, "success"), await J()) : C(_.message || "Failed to create branch", "error");
      }
    }
    function ct() {
      if (!i.value) return [];
      const l = [], s = i.value.workflows;
      return s.new.length && l.push(`${s.new.length} new workflow(s)`), s.modified.length && l.push(`${s.modified.length} modified workflow(s)`), s.deleted.length && l.push(`${s.deleted.length} deleted workflow(s)`), l;
    }
    async function $t() {
      const l = C("Exporting environment...", "info", 0);
      try {
        const s = await $();
        O(l), s.status === "success" ? (C("Export complete", "success"), alert(`Export successful!

Saved to: ${s.path}

Models without sources: ${s.models_without_sources}`)) : (C("Export failed", "error"), alert(`Export failed: ${s.message}`));
      } catch (s) {
        O(l), C("Export error", "error"), alert(`Export error: ${s instanceof Error ? s.message : "Unknown error"}`);
      }
    }
    return gt(J), (l, s) => (e(), r("div", se, [
      t("div", ne, [
        t("div", ie, [
          s[3] || (s[3] = t("h2", { class: "panel-title" }, "ComfyGit", -1)),
          i.value ? (e(), r("div", le, [
            t("span", ge, g(i.value.environment), 1),
            t("span", de, "(" + g(i.value.branch || "detached") + ")", 1),
            t("span", {
              class: H(["status-dot", F.value]),
              title: xt.value
            }, null, 10, me)
          ])) : (e(), r("div", fe, "Loading..."))
        ]),
        t("div", pe, [
          t("button", {
            class: H(["icon-btn", { spinning: L.value }]),
            onClick: J,
            title: "Refresh"
          }, [...s[4] || (s[4] = [
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
            onClick: n,
            title: "Switch theme (Ctrl+Shift+T)"
          }, [...s[5] || (s[5] = [
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
            onClick: s[0] || (s[0] = (x) => a("close")),
            title: "Close"
          }, [...s[6] || (s[6] = [
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
      t("div", he, [
        p.value ? (e(), r("div", ue, g(p.value), 1)) : i.value ? (e(), r(I, { key: 2 }, [
          W(Xt, { status: i.value }, null, 8, ["status"]),
          W(lo, {
            branches: b.value,
            current: i.value.branch,
            onSwitch: kt,
            onCreate: zt
          }, null, 8, ["branches", "current"]),
          W(wo, {
            commits: u.value,
            onSelect: wt,
            onCheckout: rt
          }, null, 8, ["commits"])
        ], 64)) : (e(), r("div", be, " Loading status... "))
      ]),
      t("div", ve, [
        t("button", {
          class: "export-btn",
          onClick: $t,
          disabled: !i.value
        }, [...s[7] || (s[7] = [
          t("svg", {
            width: "14",
            height: "14",
            viewBox: "0 0 16 16",
            fill: "currentColor"
          }, [
            t("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
            t("path", { d: "M14 14H2v-2h12v2z" })
          ], -1),
          dt(" Export ", -1)
        ])], 8, ye)
      ]),
      E.value ? (e(), nt(Vo, {
        key: 0,
        commit: E.value,
        onClose: s[1] || (s[1] = (x) => E.value = null),
        onCheckout: rt,
        onCreateBranch: Ct
      }, null, 8, ["commit"])) : v("", !0),
      z.value ? (e(), nt(Zo, {
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
        onCancel: s[2] || (s[2] = (x) => z.value = null),
        onSecondary: z.value.onSecondary
      }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : v("", !0),
      t("div", xe, [
        W(St, { name: "toast" }, {
          default: Lt(() => [
            (e(!0), r(I, null, T(U.value, (x) => (e(), r("div", {
              key: x.id,
              class: H(["toast", x.type])
            }, [
              t("span", we, g(yt(x.type)), 1),
              t("span", ke, g(x.message), 1)
            ], 2))), 128))
          ]),
          _: 1
        })
      ])
    ]));
  }
}), Ce = /* @__PURE__ */ D(ze, [["__scopeId", "data-v-f2e28cc0"]]), $e = { class: "commit-popover" }, _e = { class: "popover-content" }, Se = {
  key: 0,
  class: "changes-summary"
}, Le = {
  key: 0,
  class: "change-item"
}, Be = {
  key: 1,
  class: "change-item"
}, Ie = {
  key: 2,
  class: "change-item"
}, Te = {
  key: 3,
  class: "change-item"
}, Ee = {
  key: 4,
  class: "change-item"
}, Me = {
  key: 1,
  class: "no-changes"
}, Pe = {
  key: 2,
  class: "loading"
}, Ne = { class: "message-section" }, Ae = ["placeholder", "disabled", "onKeydown"], De = { class: "popover-footer" }, Ue = ["disabled"], Oe = /* @__PURE__ */ A({
  __name: "CommitPopover",
  props: {
    status: {}
  },
  emits: ["close", "committed"],
  setup(o, { emit: d }) {
    const n = o, a = d, { commit: m } = ot(), c = k(""), $ = k(!1), h = k(null), f = N(() => {
      if (!n.status) return !1;
      const y = n.status.workflows;
      return y.new.length > 0 || y.modified.length > 0 || y.deleted.length > 0 || n.status.has_changes;
    });
    async function w() {
      var y, i, u;
      if (!(!f.value || !c.value.trim() || $.value)) {
        $.value = !0, h.value = null;
        try {
          const b = await m(c.value.trim());
          b.status === "success" ? (h.value = {
            type: "success",
            message: `Committed: ${((y = b.summary) == null ? void 0 : y.new) || 0} new, ${((i = b.summary) == null ? void 0 : i.modified) || 0} modified, ${((u = b.summary) == null ? void 0 : u.deleted) || 0} deleted`
          }, c.value = "", setTimeout(() => a("committed"), 1e3)) : b.status === "no_changes" ? h.value = { type: "error", message: "No changes to commit" } : h.value = { type: "error", message: b.message || "Commit failed" };
        } catch (b) {
          h.value = { type: "error", message: b instanceof Error ? b.message : "Commit failed" };
        } finally {
          $.value = !1;
        }
      }
    }
    return (y, i) => (e(), r("div", $e, [
      i[7] || (i[7] = t("div", { class: "popover-header" }, [
        t("h3", { class: "popover-title" }, "Commit Changes")
      ], -1)),
      t("div", _e, [
        o.status && f.value ? (e(), r("div", Se, [
          o.status.workflows.new.length ? (e(), r("div", Le, [
            i[2] || (i[2] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, g(o.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : v("", !0),
          o.status.workflows.modified.length ? (e(), r("div", Be, [
            i[3] || (i[3] = t("span", { class: "change-icon modified" }, "~", -1)),
            t("span", null, g(o.status.workflows.modified.length) + " modified", 1)
          ])) : v("", !0),
          o.status.workflows.deleted.length ? (e(), r("div", Ie, [
            i[4] || (i[4] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, g(o.status.workflows.deleted.length) + " deleted", 1)
          ])) : v("", !0),
          o.status.git_changes.nodes_added.length ? (e(), r("div", Te, [
            i[5] || (i[5] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, g(o.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : v("", !0),
          o.status.git_changes.nodes_removed.length ? (e(), r("div", Ee, [
            i[6] || (i[6] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, g(o.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : v("", !0)
        ])) : o.status ? (e(), r("div", Me, " No changes to commit ")) : (e(), r("div", Pe, " Loading... ")),
        t("div", Ne, [
          it(t("textarea", {
            "onUpdate:modelValue": i[0] || (i[0] = (u) => c.value = u),
            class: "commit-input",
            placeholder: f.value ? "Describe your changes..." : "No changes",
            disabled: !f.value || $.value,
            rows: "3",
            onKeydown: [
              K(j(w, ["ctrl"]), ["enter"]),
              K(j(w, ["meta"]), ["enter"])
            ]
          }, null, 40, Ae), [
            [lt, c.value]
          ])
        ]),
        h.value ? (e(), r("div", {
          key: 3,
          class: H(["result", h.value.type])
        }, g(h.value.message), 3)) : v("", !0)
      ]),
      t("div", De, [
        t("button", {
          class: "cancel-btn",
          onClick: i[1] || (i[1] = (u) => a("close"))
        }, "Cancel"),
        t("button", {
          class: "commit-btn",
          disabled: !f.value || !c.value.trim() || $.value,
          onClick: w
        }, g($.value ? "Committing..." : "Commit"), 9, Ue)
      ])
    ]));
  }
}), Ge = /* @__PURE__ */ D(Oe, [["__scopeId", "data-v-940bff74"]]), at = document.createElement("link");
at.rel = "stylesheet";
at.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(at);
const He = ce();
et(He);
let B = null, S = null, Y = null;
const R = k(null);
async function tt() {
  var o;
  if (!((o = window.app) != null && o.api)) return null;
  try {
    const d = await window.app.api.fetchApi("/v2/comfygit/status");
    d.ok && (R.value = await d.json());
  } catch {
  }
}
function Re() {
  if (!R.value) return !1;
  const o = R.value.workflows;
  return o.new.length > 0 || o.modified.length > 0 || o.deleted.length > 0 || R.value.has_changes;
}
function Ve() {
  B && B.remove(), B = document.createElement("div"), B.className = "comfygit-panel-overlay";
  const o = document.createElement("div");
  o.className = "comfygit-panel-container", B.appendChild(o), B.addEventListener("click", (a) => {
    a.target === B && Q();
  });
  const d = (a) => {
    a.key === "Escape" && (Q(), document.removeEventListener("keydown", d));
  };
  document.addEventListener("keydown", d), mt({
    render: () => ft(Ce, {
      onClose: Q,
      onStatusUpdate: (a) => {
        R.value = a, X();
      }
    })
  }).mount(o), document.body.appendChild(B);
}
function Q() {
  B && (B.remove(), B = null);
}
function Ye(o) {
  V(), S = document.createElement("div"), S.className = "comfygit-commit-popover-container";
  const d = o.getBoundingClientRect();
  S.style.position = "fixed", S.style.top = `${d.bottom + 8}px`, S.style.right = `${window.innerWidth - d.right}px`, S.style.zIndex = "10001";
  const n = (m) => {
    S && !S.contains(m.target) && m.target !== o && (V(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const a = (m) => {
    m.key === "Escape" && (V(), document.removeEventListener("keydown", a));
  };
  document.addEventListener("keydown", a), Y = mt({
    render: () => ft(Ge, {
      status: R.value,
      onClose: V,
      onCommitted: () => {
        V(), tt().then(X);
      }
    })
  }), Y.mount(S), document.body.appendChild(S);
}
function V() {
  Y && (Y.unmount(), Y = null), S && (S.remove(), S = null);
}
let M = null;
function X() {
  if (!M) return;
  const o = M.querySelector(".commit-indicator");
  o && (o.style.display = Re() ? "block" : "none");
}
function je() {
  const o = ht(), n = (o.findIndex((c) => c.id === ut()) + 1) % o.length, a = o[n].id;
  et(a);
  const m = document.createElement("div");
  m.className = "comfygit-theme-notification", m.innerHTML = `
    <strong>Theme:</strong> ${o[n].name}
    <div class="theme-desc">${o[n].description}</div>
  `, document.body.appendChild(m), setTimeout(() => m.remove(), 2e3);
}
document.addEventListener("keydown", (o) => {
  o.ctrlKey && o.shiftKey && o.key === "T" && (o.preventDefault(), je());
});
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
document.head.appendChild(bt);
q.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var n, a;
    const o = document.createElement("div");
    o.className = "comfygit-btn-group";
    const d = document.createElement("button");
    d.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", d.textContent = "ComfyGit", d.title = "ComfyGit Control Panel", d.onclick = Ve, M = document.createElement("button"), M.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", M.innerHTML = 'Commit <span class="commit-indicator"></span>', M.title = "Quick Commit", M.onclick = () => Ye(M), o.appendChild(d), o.appendChild(M), (a = (n = q.menu) == null ? void 0 : n.settingsGroup) != null && a.element && (q.menu.settingsGroup.element.before(o), console.log("[ComfyGit] Control Panel buttons added to toolbar")), await tt(), X(), setInterval(async () => {
      await tt(), X();
    }, 3e4);
  }
});
