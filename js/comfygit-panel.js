import { app as Z } from "../../scripts/app.js";
import { ref as k, defineComponent as U, computed as A, onMounted as ot, onUnmounted as kt, createElementBlock as a, openBlock as o, createElementVNode as t, createCommentVNode as b, withDirectives as at, Fragment as B, renderList as M, toDisplayString as l, vModelSelect as xt, normalizeStyle as Ct, withModifiers as H, nextTick as $t, withKeys as q, vModelText as lt, normalizeClass as F, createTextVNode as dt, createBlock as it, createVNode as V, TransitionGroup as _t, withCtx as zt, createApp as mt, h as gt } from "vue";
function X() {
  const e = k(!1), p = k(null);
  async function c(d, f) {
    var O;
    if (!((O = window.app) != null && O.api))
      throw new Error("ComfyUI API not available");
    const S = await window.app.api.fetchApi(d, f);
    if (!S.ok) {
      const g = await S.json().catch(() => ({}));
      throw new Error(g.error || g.message || `Request failed: ${S.status}`);
    }
    return S.json();
  }
  async function s() {
    return c("/v2/comfygit/status");
  }
  async function u(d, f = !1) {
    return c("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: d, allow_issues: f })
    });
  }
  async function n(d = 10, f = 0) {
    return c(`/v2/comfygit/log?limit=${d}&offset=${f}`);
  }
  async function x(d) {
    return c("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: d })
    });
  }
  async function v() {
    return c("/v2/comfygit/branches");
  }
  async function m(d) {
    return c(`/v2/comfygit/commit/${d}`);
  }
  async function w(d, f = !1) {
    return c("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: d, force: f })
    });
  }
  async function i(d, f = "HEAD") {
    return c("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: d, start_point: f })
    });
  }
  async function y(d, f = !1) {
    return c("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: d, force: f })
    });
  }
  async function _() {
    return c("/v2/comfygit/environments");
  }
  async function $(d) {
    return c("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ target_env: d })
    });
  }
  async function I() {
    return c("/v2/comfygit/switch_status");
  }
  return {
    isLoading: e,
    error: p,
    getStatus: s,
    commit: u,
    getHistory: n,
    exportEnv: x,
    // Phase 2
    getBranches: v,
    getCommitDetail: m,
    checkout: w,
    createBranch: i,
    switchBranch: y,
    // Phase 3
    listEnvironments: _,
    switchEnvironment: $,
    getSwitchStatus: I
  };
}
const St = { class: "environment-switcher" }, Et = {
  key: 0,
  class: "warning-banner"
}, Lt = {
  key: 1,
  class: "env-selector"
}, Bt = ["disabled"], It = ["value"], Tt = ["disabled"], Mt = {
  key: 2,
  class: "switch-progress"
}, Pt = { class: "progress-bar" }, Nt = { class: "status-message" }, At = { class: "status-phase" }, Ut = {
  key: 0,
  class: "error-details"
}, Gt = {
  key: 1,
  class: "recovery-section"
}, Ot = { class: "recovery-command" }, Dt = /* @__PURE__ */ U({
  __name: "EnvironmentSwitcher",
  emits: ["toast"],
  setup(e, { emit: p }) {
    const c = p, s = X(), u = k([]), n = k(""), x = k(""), v = k(!1), m = k({
      state: "idle",
      progress: 0,
      message: "",
      target_env: null,
      source_env: null
    }), w = k(null), i = k(!0), y = A(() => i.value && x.value !== n.value && !v.value && u.value.length > 0);
    let _ = null;
    async function $() {
      try {
        const g = await s.listEnvironments();
        u.value = g.environments || [], n.value = g.current || "", x.value = n.value, i.value = g.is_managed !== !1;
      } catch (g) {
        console.error("Failed to load environments:", g), c("toast", "Failed to load environments", "error");
      }
    }
    async function I() {
      if (y.value)
        try {
          v.value = !0, await s.switchEnvironment(x.value), d();
        } catch (g) {
          console.error("Failed to initiate switch:", g), v.value = !1, c("toast", `Failed to switch: ${g.message}`, "error");
        }
    }
    function d() {
      _ || (_ = window.setInterval(async () => {
        try {
          const g = await s.getSwitchStatus();
          m.value = g, g.state === "complete" ? (v.value = !1, n.value = g.target_env, x.value = g.target_env, f(), c("toast", `Switched to ${g.target_env}`, "success"), await $()) : g.state === "rolled_back" ? (v.value = !1, x.value = n.value, f(), c("toast", "Switch failed, restored previous environment", "warning")) : g.state === "critical_failure" && (v.value = !1, w.value = g, f());
        } catch (g) {
          console.error("Failed to poll switch status:", g);
        }
      }, 1e3));
    }
    function f() {
      _ && (clearInterval(_), _ = null);
    }
    function S() {
      var g;
      (g = w.value) != null && g.recovery_command && (navigator.clipboard.writeText(w.value.recovery_command), c("toast", "Recovery command copied to clipboard", "info"));
    }
    function O() {
      w.value = null;
    }
    return ot(() => {
      $();
    }), kt(() => {
      f();
    }), (g, z) => (o(), a("div", St, [
      z[4] || (z[4] = t("div", { class: "section-header" }, [
        t("h3", null, "Environment")
      ], -1)),
      i.value ? (o(), a("div", Lt, [
        at(t("select", {
          "onUpdate:modelValue": z[0] || (z[0] = (N) => x.value = N),
          disabled: v.value || u.value.length === 0,
          class: "env-dropdown"
        }, [
          (o(!0), a(B, null, M(u.value, (N) => (o(), a("option", {
            key: N.name,
            value: N.name
          }, l(N.name) + " " + l(N.is_current ? "(current)" : ""), 9, It))), 128))
        ], 8, Bt), [
          [xt, x.value]
        ]),
        t("button", {
          onClick: I,
          disabled: !y.value,
          class: "btn-primary switch-btn"
        }, " Switch ", 8, Tt)
      ])) : (o(), a("div", Et, " ⚠️ Not in ComfyGit workspace. Environment switching is disabled. ")),
      v.value ? (o(), a("div", Mt, [
        t("div", Pt, [
          t("div", {
            class: "progress-fill",
            style: Ct({ width: m.value.progress + "%" })
          }, null, 4)
        ]),
        t("p", Nt, l(m.value.message), 1),
        t("p", At, l(m.value.state), 1)
      ])) : b("", !0),
      w.value ? (o(), a("div", {
        key: 3,
        class: "modal-overlay",
        onClick: O
      }, [
        t("div", {
          class: "modal-content",
          onClick: z[1] || (z[1] = H(() => {
          }, ["stop"]))
        }, [
          z[3] || (z[3] = t("h3", null, "❌ Critical Error", -1)),
          t("p", null, l(w.value.message), 1),
          w.value.error ? (o(), a("p", Ut, l(w.value.error), 1)) : b("", !0),
          w.value.recovery_command ? (o(), a("div", Gt, [
            z[2] || (z[2] = t("h4", null, "Manual Recovery Required:", -1)),
            t("pre", Ot, l(w.value.recovery_command), 1),
            t("button", {
              onClick: S,
              class: "btn-secondary"
            }, "Copy Command")
          ])) : b("", !0),
          t("button", {
            onClick: O,
            class: "btn-secondary"
          }, "Close")
        ])
      ])) : b("", !0)
    ]));
  }
}), G = (e, p) => {
  const c = e.__vccOpts || e;
  for (const [s, u] of p)
    c[s] = u;
  return c;
}, Ft = /* @__PURE__ */ G(Dt, [["__scopeId", "data-v-fda43659"]]), Rt = { class: "status-section" }, Ht = { class: "status-grid" }, Vt = { class: "status-column" }, jt = {
  key: 0,
  class: "status-item"
}, Jt = { class: "count new" }, Wt = {
  key: 1,
  class: "status-item"
}, Kt = { class: "count modified" }, Yt = {
  key: 2,
  class: "status-item"
}, qt = { class: "count deleted" }, Qt = { class: "status-item synced-item" }, Xt = { class: "count synced" }, Zt = { class: "status-column" }, te = {
  key: 0,
  class: "status-item"
}, ee = { class: "count new" }, oe = {
  key: 1,
  class: "status-item"
}, ae = { class: "count deleted" }, se = {
  key: 2,
  class: "status-item"
}, ne = {
  key: 3,
  class: "status-item ok"
}, re = {
  key: 0,
  class: "warning-box"
}, ce = {
  key: 1,
  class: "warning-box error"
}, ie = /* @__PURE__ */ U({
  __name: "StatusSection",
  props: {
    status: {}
  },
  setup(e) {
    const p = e, c = A(() => {
      const u = p.status.git_changes;
      return u.nodes_added.length > 0 || u.nodes_removed.length > 0 || u.workflow_changes || u.has_other_changes;
    }), s = A(() => {
      const u = p.status.git_changes, n = p.status.workflows;
      return (u.workflow_changes || u.has_other_changes) && n.new.length === 0 && n.modified.length === 0 && n.deleted.length === 0;
    });
    return (u, n) => (o(), a("div", Rt, [
      n[18] || (n[18] = t("h3", { class: "section-title" }, "Status", -1)),
      t("div", Ht, [
        t("div", Vt, [
          n[8] || (n[8] = t("h4", { class: "column-title" }, "Workflows", -1)),
          e.status.workflows.new.length ? (o(), a("div", jt, [
            n[0] || (n[0] = t("span", { class: "icon" }, "●", -1)),
            t("span", Jt, l(e.status.workflows.new.length), 1),
            n[1] || (n[1] = t("span", { class: "label" }, "new", -1))
          ])) : b("", !0),
          e.status.workflows.modified.length ? (o(), a("div", Wt, [
            n[2] || (n[2] = t("span", { class: "icon" }, "●", -1)),
            t("span", Kt, l(e.status.workflows.modified.length), 1),
            n[3] || (n[3] = t("span", { class: "label" }, "modified", -1))
          ])) : b("", !0),
          e.status.workflows.deleted.length ? (o(), a("div", Yt, [
            n[4] || (n[4] = t("span", { class: "icon" }, "●", -1)),
            t("span", qt, l(e.status.workflows.deleted.length), 1),
            n[5] || (n[5] = t("span", { class: "label" }, "deleted", -1))
          ])) : b("", !0),
          t("div", Qt, [
            n[6] || (n[6] = t("span", { class: "icon synced" }, "✓", -1)),
            t("span", Xt, l(e.status.workflows.synced.length), 1),
            n[7] || (n[7] = t("span", { class: "label" }, "synced", -1))
          ])
        ]),
        t("div", Zt, [
          n[15] || (n[15] = t("h4", { class: "column-title" }, "Git Changes", -1)),
          e.status.git_changes.nodes_added.length ? (o(), a("div", te, [
            n[9] || (n[9] = t("span", { class: "icon" }, "●", -1)),
            t("span", ee, l(e.status.git_changes.nodes_added.length), 1),
            n[10] || (n[10] = t("span", { class: "label" }, "node added", -1))
          ])) : b("", !0),
          e.status.git_changes.nodes_removed.length ? (o(), a("div", oe, [
            n[11] || (n[11] = t("span", { class: "icon" }, "●", -1)),
            t("span", ae, l(e.status.git_changes.nodes_removed.length), 1),
            n[12] || (n[12] = t("span", { class: "label" }, "node removed", -1))
          ])) : b("", !0),
          s.value ? (o(), a("div", se, [...n[13] || (n[13] = [
            t("span", { class: "icon" }, "●", -1),
            t("span", { class: "count modified" }, "●", -1),
            t("span", { class: "label" }, "other changes", -1)
          ])])) : b("", !0),
          c.value ? b("", !0) : (o(), a("div", ne, [...n[14] || (n[14] = [
            t("span", { class: "icon" }, "✓", -1),
            t("span", { class: "label" }, "No uncommitted changes", -1)
          ])]))
        ])
      ]),
      e.status.missing_models_count > 0 ? (o(), a("div", re, [
        n[16] || (n[16] = t("span", { class: "warning-icon" }, "⚠", -1)),
        t("span", null, l(e.status.missing_models_count) + " missing model(s)", 1)
      ])) : b("", !0),
      e.status.comparison.is_synced ? b("", !0) : (o(), a("div", ce, [...n[17] || (n[17] = [
        t("span", { class: "warning-icon" }, "⚠", -1),
        t("span", null, "Environment not synced", -1)
      ])]))
    ]));
  }
}), le = /* @__PURE__ */ G(ie, [["__scopeId", "data-v-a72d538b"]]), de = { class: "branch-section" }, me = { class: "section-header" }, ge = { class: "branch-card" }, he = {
  key: 0,
  class: "create-branch-row"
}, ue = ["disabled"], pe = {
  key: 1,
  class: "empty"
}, ve = {
  key: 2,
  class: "branch-list"
}, fe = { class: "branch-indicator" }, ye = { class: "branch-name" }, be = ["onClick"], we = {
  key: 1,
  class: "current-label"
}, ke = /* @__PURE__ */ U({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create"],
  setup(e, { emit: p }) {
    const c = p, s = k(!1), u = k(""), n = k(null);
    function x() {
      u.value.trim() && (c("create", u.value.trim()), v());
    }
    function v() {
      s.value = !1, u.value = "";
    }
    return $t(() => {
      s.value && n.value && n.value.focus();
    }), (m, w) => (o(), a("div", de, [
      t("div", me, [
        w[3] || (w[3] = t("h4", { class: "section-title" }, "Branches", -1)),
        t("button", {
          class: "add-btn",
          onClick: w[0] || (w[0] = (i) => s.value = !0),
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
      t("div", ge, [
        s.value ? (o(), a("div", he, [
          at(t("input", {
            ref_key: "createInput",
            ref: n,
            "onUpdate:modelValue": w[1] || (w[1] = (i) => u.value = i),
            class: "branch-input",
            placeholder: "Branch name...",
            onKeyup: [
              q(x, ["enter"]),
              q(v, ["escape"])
            ]
          }, null, 544), [
            [lt, u.value]
          ]),
          t("button", {
            class: "action-btn create",
            onClick: x,
            disabled: !u.value.trim()
          }, " Create ", 8, ue),
          t("button", {
            class: "action-btn cancel",
            onClick: v
          }, " Cancel ")
        ])) : b("", !0),
        e.branches.length === 0 ? (o(), a("div", pe, " No branches found ")) : (o(), a("div", ve, [
          (o(!0), a(B, null, M(e.branches, (i) => (o(), a("div", {
            key: i.name,
            class: F(["branch-item", { current: i.is_current }])
          }, [
            t("span", fe, l(i.is_current ? "●" : "○"), 1),
            t("span", ye, l(i.name), 1),
            i.is_current ? (o(), a("span", we, "current")) : (o(), a("button", {
              key: 0,
              class: "switch-btn",
              onClick: (y) => m.$emit("switch", i.name)
            }, " Switch ", 8, be))
          ], 2))), 128))
        ]))
      ])
    ]));
  }
}), xe = /* @__PURE__ */ G(ke, [["__scopeId", "data-v-730a9c8a"]]), Ce = { class: "history-section" }, $e = { class: "history-card" }, _e = {
  key: 0,
  class: "empty"
}, ze = {
  key: 1,
  class: "commit-list"
}, Se = ["onClick"], Ee = { class: "commit-hash" }, Le = { class: "commit-message" }, Be = { class: "commit-date" }, Ie = ["onClick"], Te = /* @__PURE__ */ U({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(e) {
    return (p, c) => (o(), a("div", Ce, [
      c[2] || (c[2] = t("div", { class: "section-header" }, [
        t("h4", { class: "section-title" }, "History")
      ], -1)),
      t("div", $e, [
        e.commits.length === 0 ? (o(), a("div", _e, " No commits yet ")) : (o(), a("div", ze, [
          (o(!0), a(B, null, M(e.commits, (s) => {
            var u;
            return o(), a("div", {
              key: s.hash,
              class: "commit-item",
              onClick: (n) => p.$emit("select", s)
            }, [
              t("span", Ee, l(s.short_hash || ((u = s.hash) == null ? void 0 : u.slice(0, 7))), 1),
              t("span", Le, l(s.message), 1),
              t("span", Be, l(s.date_relative || s.relative_date), 1),
              t("div", {
                class: "commit-actions",
                onClick: c[0] || (c[0] = H(() => {
                }, ["stop"]))
              }, [
                t("button", {
                  class: "action-btn",
                  onClick: (n) => p.$emit("checkout", s),
                  title: "Checkout this commit"
                }, [...c[1] || (c[1] = [
                  t("svg", {
                    width: "12",
                    height: "12",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    t("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" })
                  ], -1)
                ])], 8, Ie)
              ])
            ], 8, Se);
          }), 128))
        ]))
      ])
    ]));
  }
}), Me = /* @__PURE__ */ G(Te, [["__scopeId", "data-v-3bb44122"]]), Pe = { class: "modal-content" }, Ne = { class: "modal-header" }, Ae = { class: "commit-info" }, Ue = { class: "commit-hash" }, Ge = {
  key: 0,
  class: "commit-refs"
}, Oe = { class: "modal-body" }, De = { class: "commit-message" }, Fe = { class: "commit-date" }, Re = {
  key: 0,
  class: "loading"
}, He = {
  key: 1,
  class: "changes-section"
}, Ve = { class: "stats-row" }, je = { class: "stat" }, Je = { class: "stat insertions" }, We = { class: "stat deletions" }, Ke = {
  key: 0,
  class: "change-group"
}, Ye = {
  key: 1,
  class: "change-group"
}, qe = {
  key: 0,
  class: "version"
}, Qe = {
  key: 2,
  class: "change-group"
}, Xe = { class: "change-item" }, Ze = { class: "modal-footer" }, to = /* @__PURE__ */ U({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const p = e, { getCommitDetail: c } = X(), s = k(null), u = k(!0), n = A(() => {
      if (!s.value) return !1;
      const v = s.value.changes.workflows;
      return v.added.length > 0 || v.modified.length > 0 || v.deleted.length > 0;
    }), x = A(() => {
      if (!s.value) return !1;
      const v = s.value.changes.nodes;
      return v.added.length > 0 || v.removed.length > 0;
    });
    return ot(async () => {
      try {
        s.value = await c(p.commit.hash);
      } finally {
        u.value = !1;
      }
    }), (v, m) => {
      var w, i, y, _, $, I;
      return o(), a("div", {
        class: "modal-overlay",
        onClick: m[3] || (m[3] = H((d) => v.$emit("close"), ["self"]))
      }, [
        t("div", Pe, [
          t("div", Ne, [
            t("div", Ae, [
              t("span", Ue, l(((w = s.value) == null ? void 0 : w.short_hash) || e.commit.short_hash || ((i = e.commit.hash) == null ? void 0 : i.slice(0, 7))), 1),
              (_ = (y = s.value) == null ? void 0 : y.refs) != null && _.length ? (o(), a("span", Ge, [
                (o(!0), a(B, null, M(s.value.refs, (d) => (o(), a("span", {
                  key: d,
                  class: "ref-badge"
                }, l(d), 1))), 128))
              ])) : b("", !0)
            ]),
            t("button", {
              class: "close-btn",
              onClick: m[0] || (m[0] = (d) => v.$emit("close"))
            }, [...m[4] || (m[4] = [
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
          t("div", Oe, [
            t("div", De, l((($ = s.value) == null ? void 0 : $.message) || e.commit.message), 1),
            t("div", Fe, l(((I = s.value) == null ? void 0 : I.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
            u.value ? (o(), a("div", Re, "Loading details...")) : s.value ? (o(), a("div", He, [
              t("div", Ve, [
                t("span", je, l(s.value.stats.files_changed) + " files", 1),
                t("span", Je, "+" + l(s.value.stats.insertions), 1),
                t("span", We, "-" + l(s.value.stats.deletions), 1)
              ]),
              n.value ? (o(), a("div", Ke, [
                m[8] || (m[8] = t("h4", { class: "change-title" }, "Workflows", -1)),
                (o(!0), a(B, null, M(s.value.changes.workflows.added, (d) => (o(), a("div", {
                  key: "add-" + d,
                  class: "change-item added"
                }, [
                  m[5] || (m[5] = t("span", { class: "change-icon" }, "+", -1)),
                  t("span", null, l(d), 1)
                ]))), 128)),
                (o(!0), a(B, null, M(s.value.changes.workflows.modified, (d) => (o(), a("div", {
                  key: "mod-" + d,
                  class: "change-item modified"
                }, [
                  m[6] || (m[6] = t("span", { class: "change-icon" }, "~", -1)),
                  t("span", null, l(d), 1)
                ]))), 128)),
                (o(!0), a(B, null, M(s.value.changes.workflows.deleted, (d) => (o(), a("div", {
                  key: "del-" + d,
                  class: "change-item deleted"
                }, [
                  m[7] || (m[7] = t("span", { class: "change-icon" }, "-", -1)),
                  t("span", null, l(d), 1)
                ]))), 128))
              ])) : b("", !0),
              x.value ? (o(), a("div", Ye, [
                m[11] || (m[11] = t("h4", { class: "change-title" }, "Nodes", -1)),
                (o(!0), a(B, null, M(s.value.changes.nodes.added, (d) => (o(), a("div", {
                  key: "add-" + d.name,
                  class: "change-item added"
                }, [
                  m[9] || (m[9] = t("span", { class: "change-icon" }, "+", -1)),
                  t("span", null, l(d.name), 1),
                  d.version ? (o(), a("span", qe, "(" + l(d.version) + ")", 1)) : b("", !0)
                ]))), 128)),
                (o(!0), a(B, null, M(s.value.changes.nodes.removed, (d) => (o(), a("div", {
                  key: "rem-" + d.name,
                  class: "change-item deleted"
                }, [
                  m[10] || (m[10] = t("span", { class: "change-icon" }, "-", -1)),
                  t("span", null, l(d.name), 1)
                ]))), 128))
              ])) : b("", !0),
              s.value.changes.models.resolved > 0 ? (o(), a("div", Qe, [
                m[13] || (m[13] = t("h4", { class: "change-title" }, "Models", -1)),
                t("div", Xe, [
                  m[12] || (m[12] = t("span", { class: "change-icon" }, "●", -1)),
                  t("span", null, l(s.value.changes.models.resolved) + " model(s) resolved", 1)
                ])
              ])) : b("", !0)
            ])) : b("", !0)
          ]),
          t("div", Ze, [
            t("button", {
              class: "action-btn secondary",
              onClick: m[1] || (m[1] = (d) => v.$emit("createBranch", e.commit))
            }, " Create Branch "),
            t("button", {
              class: "action-btn primary",
              onClick: m[2] || (m[2] = (d) => v.$emit("checkout", e.commit))
            }, " Checkout ")
          ])
        ])
      ]);
    };
  }
}), eo = /* @__PURE__ */ G(to, [["__scopeId", "data-v-9768f067"]]), oo = { class: "dialog-content" }, ao = { class: "dialog-header" }, so = { class: "dialog-title" }, no = { class: "dialog-body" }, ro = { class: "dialog-message" }, co = {
  key: 0,
  class: "dialog-details"
}, io = {
  key: 1,
  class: "dialog-warning"
}, lo = { class: "dialog-footer" }, mo = /* @__PURE__ */ U({
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
    return (p, c) => (o(), a("div", {
      class: "dialog-overlay",
      onClick: c[3] || (c[3] = H((s) => p.$emit("cancel"), ["self"]))
    }, [
      t("div", oo, [
        t("div", ao, [
          t("h3", so, l(e.title), 1)
        ]),
        t("div", no, [
          t("p", ro, l(e.message), 1),
          e.details && e.details.length ? (o(), a("div", co, [
            (o(!0), a(B, null, M(e.details, (s, u) => (o(), a("div", {
              key: u,
              class: "detail-item"
            }, " • " + l(s), 1))), 128))
          ])) : b("", !0),
          e.warning ? (o(), a("p", io, [
            c[4] || (c[4] = t("span", { class: "warning-icon" }, "⚠", -1)),
            dt(" " + l(e.warning), 1)
          ])) : b("", !0)
        ]),
        t("div", lo, [
          t("button", {
            class: "dialog-btn cancel",
            onClick: c[0] || (c[0] = (s) => p.$emit("cancel"))
          }, l(e.cancelLabel), 1),
          e.secondaryAction ? (o(), a("button", {
            key: 0,
            class: "dialog-btn secondary",
            onClick: c[1] || (c[1] = (s) => p.$emit("secondary"))
          }, l(e.secondaryLabel), 1)) : b("", !0),
          t("button", {
            class: F(["dialog-btn primary", { destructive: e.destructive }]),
            onClick: c[2] || (c[2] = (s) => p.$emit("confirm"))
          }, l(e.confirmLabel), 3)
        ])
      ])
    ]));
  }
}), go = /* @__PURE__ */ G(mo, [["__scopeId", "data-v-d24c6c0b"]]), ho = { class: "comfygit-panel" }, uo = { class: "panel-header" }, po = { class: "header-left" }, vo = {
  key: 0,
  class: "header-info"
}, fo = { class: "env-name" }, yo = { class: "branch-name" }, bo = ["title"], wo = {
  key: 1,
  class: "header-info loading-text"
}, ko = { class: "header-actions" }, xo = { class: "panel-content" }, Co = {
  key: 0,
  class: "error-message"
}, $o = {
  key: 1,
  class: "loading"
}, _o = { class: "panel-footer" }, zo = ["disabled"], So = { class: "toast-container" }, Eo = { class: "toast-icon" }, Lo = { class: "toast-message" }, Bo = /* @__PURE__ */ U({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(e, { emit: p }) {
    const c = p, {
      getStatus: s,
      getHistory: u,
      exportEnv: n,
      getBranches: x,
      checkout: v,
      createBranch: m,
      switchBranch: w
    } = X(), i = k(null), y = k([]), _ = k([]), $ = k(!1), I = k(null), d = k(null), f = k(null), S = k([]);
    let O = 0;
    function g(h, r = "info", C = 3e3) {
      const E = ++O;
      return S.value.push({ id: E, message: h, type: r }), C > 0 && setTimeout(() => {
        S.value = S.value.filter((Y) => Y.id !== E);
      }, C), E;
    }
    function z(h) {
      S.value = S.value.filter((r) => r.id !== h);
    }
    function N(h) {
      switch (h) {
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
    function ut(h, r) {
      g(h, r);
    }
    const W = A(() => {
      if (!i.value) return "neutral";
      const h = i.value.workflows, r = h.new.length > 0 || h.modified.length > 0 || h.deleted.length > 0 || i.value.has_changes;
      return i.value.comparison.is_synced ? r ? "warning" : "success" : "error";
    }), pt = A(() => i.value ? W.value === "success" ? "All synced" : W.value === "warning" ? "Uncommitted changes" : W.value === "error" ? "Not synced" : "" : "");
    async function K() {
      $.value = !0, I.value = null;
      try {
        const [h, r, C] = await Promise.all([
          s(),
          u(),
          x()
        ]);
        i.value = h, y.value = r.commits, _.value = C.branches, c("statusUpdate", h);
      } catch (h) {
        I.value = h instanceof Error ? h.message : "Failed to load status", i.value = null, y.value = [], _.value = [];
      } finally {
        $.value = !1;
      }
    }
    function vt(h) {
      d.value = h;
    }
    async function nt(h) {
      var C;
      d.value = null;
      const r = i.value && (i.value.workflows.new.length > 0 || i.value.workflows.modified.length > 0 || i.value.workflows.deleted.length > 0 || i.value.has_changes);
      f.value = {
        title: r ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: r ? "You have uncommitted changes that will be lost." : `Checkout commit ${h.short_hash || ((C = h.hash) == null ? void 0 : C.slice(0, 7))}?`,
        details: r ? rt() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: r ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: r,
        onConfirm: async () => {
          var ct;
          f.value = null;
          const E = g(`Checking out ${h.short_hash || ((ct = h.hash) == null ? void 0 : ct.slice(0, 7))}...`, "info", 0), Y = await v(h.hash, r);
          z(E), Y.status === "success" ? g("Restarting ComfyUI...", "success") : g(Y.message || "Checkout failed", "error");
        }
      };
    }
    async function ft(h) {
      const r = i.value && (i.value.workflows.new.length > 0 || i.value.workflows.modified.length > 0 || i.value.workflows.deleted.length > 0 || i.value.has_changes);
      f.value = {
        title: r ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: r ? "You have uncommitted changes." : `Switch to branch "${h}"?`,
        details: r ? rt() : void 0,
        warning: r ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: r ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          f.value = null;
          const C = g(`Switching to ${h}...`, "info", 0), E = await w(h, r);
          z(C), E.status === "success" ? g("Restarting ComfyUI...", "success") : E.status === "warning" && E.reason === "uncommitted_changes" ? g("Switch cancelled due to uncommitted changes", "warning") : g(E.message || "Branch switch failed", "error");
        }
      };
    }
    async function yt(h) {
      const r = g(`Creating branch ${h}...`, "info", 0), C = await m(h);
      z(r), C.status === "success" ? (g(`Branch "${h}" created`, "success"), await K()) : g(C.message || "Failed to create branch", "error");
    }
    async function bt(h) {
      d.value = null;
      const r = prompt("Enter branch name:");
      if (r) {
        const C = g(`Creating branch ${r}...`, "info", 0), E = await m(r, h.hash);
        z(C), E.status === "success" ? (g(`Branch "${r}" created from ${h.short_hash}`, "success"), await K()) : g(E.message || "Failed to create branch", "error");
      }
    }
    function rt() {
      if (!i.value) return [];
      const h = [], r = i.value.workflows;
      return r.new.length && h.push(`${r.new.length} new workflow(s)`), r.modified.length && h.push(`${r.modified.length} modified workflow(s)`), r.deleted.length && h.push(`${r.deleted.length} deleted workflow(s)`), h;
    }
    async function wt() {
      const h = g("Exporting environment...", "info", 0);
      try {
        const r = await n();
        z(h), r.status === "success" ? (g("Export complete", "success"), alert(`Export successful!

Saved to: ${r.path}

Models without sources: ${r.models_without_sources}`)) : (g("Export failed", "error"), alert(`Export failed: ${r.message}`));
      } catch (r) {
        z(h), g("Export error", "error"), alert(`Export error: ${r instanceof Error ? r.message : "Unknown error"}`);
      }
    }
    return ot(K), (h, r) => (o(), a("div", ho, [
      t("div", uo, [
        t("div", po, [
          r[3] || (r[3] = t("h2", { class: "panel-title" }, "ComfyGit", -1)),
          i.value ? (o(), a("div", vo, [
            t("span", fo, l(i.value.environment), 1),
            t("span", yo, "(" + l(i.value.branch || "detached") + ")", 1),
            t("span", {
              class: F(["status-dot", W.value]),
              title: pt.value
            }, null, 10, bo)
          ])) : (o(), a("div", wo, "Loading..."))
        ]),
        t("div", ko, [
          t("button", {
            class: F(["icon-btn", { spinning: $.value }]),
            onClick: K,
            title: "Refresh"
          }, [...r[4] || (r[4] = [
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
            onClick: r[0] || (r[0] = (C) => c("close")),
            title: "Close"
          }, [...r[5] || (r[5] = [
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
      t("div", xo, [
        I.value ? (o(), a("div", Co, l(I.value), 1)) : i.value ? (o(), a(B, { key: 2 }, [
          V(Ft, { onToast: ut }),
          V(le, { status: i.value }, null, 8, ["status"]),
          V(xe, {
            branches: _.value,
            current: i.value.branch,
            onSwitch: ft,
            onCreate: yt
          }, null, 8, ["branches", "current"]),
          V(Me, {
            commits: y.value,
            onSelect: vt,
            onCheckout: nt
          }, null, 8, ["commits"])
        ], 64)) : (o(), a("div", $o, " Loading status... "))
      ]),
      t("div", _o, [
        t("button", {
          class: "export-btn",
          onClick: wt,
          disabled: !i.value
        }, [...r[6] || (r[6] = [
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
        ])], 8, zo)
      ]),
      d.value ? (o(), it(eo, {
        key: 0,
        commit: d.value,
        onClose: r[1] || (r[1] = (C) => d.value = null),
        onCheckout: nt,
        onCreateBranch: bt
      }, null, 8, ["commit"])) : b("", !0),
      f.value ? (o(), it(go, {
        key: 1,
        title: f.value.title,
        message: f.value.message,
        details: f.value.details,
        warning: f.value.warning,
        confirmLabel: f.value.confirmLabel,
        cancelLabel: f.value.cancelLabel,
        secondaryLabel: f.value.secondaryLabel,
        secondaryAction: f.value.secondaryAction,
        destructive: f.value.destructive,
        onConfirm: f.value.onConfirm,
        onCancel: r[2] || (r[2] = (C) => f.value = null),
        onSecondary: f.value.onSecondary
      }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : b("", !0),
      t("div", So, [
        V(_t, { name: "toast" }, {
          default: zt(() => [
            (o(!0), a(B, null, M(S.value, (C) => (o(), a("div", {
              key: C.id,
              class: F(["toast", C.type])
            }, [
              t("span", Eo, l(N(C.type)), 1),
              t("span", Lo, l(C.message), 1)
            ], 2))), 128))
          ]),
          _: 1
        })
      ])
    ]));
  }
}), Io = /* @__PURE__ */ G(Bo, [["__scopeId", "data-v-d6d7bd13"]]), To = { class: "commit-popover" }, Mo = { class: "popover-content" }, Po = {
  key: 0,
  class: "changes-summary"
}, No = {
  key: 0,
  class: "change-item"
}, Ao = {
  key: 1,
  class: "change-item"
}, Uo = {
  key: 2,
  class: "change-item"
}, Go = {
  key: 3,
  class: "change-item"
}, Oo = {
  key: 4,
  class: "change-item"
}, Do = {
  key: 1,
  class: "no-changes"
}, Fo = {
  key: 2,
  class: "loading"
}, Ro = { class: "message-section" }, Ho = ["placeholder", "disabled", "onKeydown"], Vo = { class: "popover-footer" }, jo = ["disabled"], Jo = /* @__PURE__ */ U({
  __name: "CommitPopover",
  props: {
    status: {}
  },
  emits: ["close", "committed"],
  setup(e, { emit: p }) {
    const c = e, s = p, { commit: u } = X(), n = k(""), x = k(!1), v = k(null), m = A(() => {
      if (!c.status) return !1;
      const i = c.status.workflows;
      return i.new.length > 0 || i.modified.length > 0 || i.deleted.length > 0 || c.status.has_changes;
    });
    async function w() {
      var i, y, _;
      if (!(!m.value || !n.value.trim() || x.value)) {
        x.value = !0, v.value = null;
        try {
          const $ = await u(n.value.trim());
          $.status === "success" ? (v.value = {
            type: "success",
            message: `Committed: ${((i = $.summary) == null ? void 0 : i.new) || 0} new, ${((y = $.summary) == null ? void 0 : y.modified) || 0} modified, ${((_ = $.summary) == null ? void 0 : _.deleted) || 0} deleted`
          }, n.value = "", setTimeout(() => s("committed"), 1e3)) : $.status === "no_changes" ? v.value = { type: "error", message: "No changes to commit" } : v.value = { type: "error", message: $.message || "Commit failed" };
        } catch ($) {
          v.value = { type: "error", message: $ instanceof Error ? $.message : "Commit failed" };
        } finally {
          x.value = !1;
        }
      }
    }
    return (i, y) => (o(), a("div", To, [
      y[7] || (y[7] = t("div", { class: "popover-header" }, [
        t("h3", { class: "popover-title" }, "Commit Changes")
      ], -1)),
      t("div", Mo, [
        e.status && m.value ? (o(), a("div", Po, [
          e.status.workflows.new.length ? (o(), a("div", No, [
            y[2] || (y[2] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, l(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : b("", !0),
          e.status.workflows.modified.length ? (o(), a("div", Ao, [
            y[3] || (y[3] = t("span", { class: "change-icon modified" }, "~", -1)),
            t("span", null, l(e.status.workflows.modified.length) + " modified", 1)
          ])) : b("", !0),
          e.status.workflows.deleted.length ? (o(), a("div", Uo, [
            y[4] || (y[4] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, l(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : b("", !0),
          e.status.git_changes.nodes_added.length ? (o(), a("div", Go, [
            y[5] || (y[5] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, l(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : b("", !0),
          e.status.git_changes.nodes_removed.length ? (o(), a("div", Oo, [
            y[6] || (y[6] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, l(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : b("", !0)
        ])) : e.status ? (o(), a("div", Do, " No changes to commit ")) : (o(), a("div", Fo, " Loading... ")),
        t("div", Ro, [
          at(t("textarea", {
            "onUpdate:modelValue": y[0] || (y[0] = (_) => n.value = _),
            class: "commit-input",
            placeholder: m.value ? "Describe your changes..." : "No changes",
            disabled: !m.value || x.value,
            rows: "3",
            onKeydown: [
              q(H(w, ["ctrl"]), ["enter"]),
              q(H(w, ["meta"]), ["enter"])
            ]
          }, null, 40, Ho), [
            [lt, n.value]
          ])
        ]),
        v.value ? (o(), a("div", {
          key: 3,
          class: F(["result", v.value.type])
        }, l(v.value.message), 3)) : b("", !0)
      ]),
      t("div", Vo, [
        t("button", {
          class: "cancel-btn",
          onClick: y[1] || (y[1] = (_) => s("close"))
        }, "Cancel"),
        t("button", {
          class: "commit-btn",
          disabled: !m.value || !n.value.trim() || x.value,
          onClick: w
        }, l(x.value ? "Committing..." : "Commit"), 9, jo)
      ])
    ]));
  }
}), Wo = /* @__PURE__ */ G(Jo, [["__scopeId", "data-v-940bff74"]]), Ko = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 12px;--cg-font-size-sm: 14px;--cg-font-size-base: 17px;--cg-font-size-lg: 20px;--cg-font-size-xl: 24px;--cg-font-size-2xl: 28px;--cg-panel-width: 754px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-header{background:var(--cg-color-bg-tertiary);border-bottom:1px solid var(--cg-color-border);padding:var(--cg-space-3) var(--cg-space-4)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:cursor-blink 1s step-end infinite}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}';
let D = null;
function Yo() {
  return "phosphor";
}
function qo(e = "phosphor") {
  D && D.remove(), D = document.createElement("style"), D.id = "comfygit-theme-styles", D.setAttribute("data-theme", "phosphor"), D.textContent = Ko, document.head.appendChild(D), document.body.setAttribute("data-comfygit-theme", "phosphor"), console.log("[ComfyGit] Applied theme: phosphor");
}
const st = document.createElement("link");
st.rel = "stylesheet";
st.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(st);
const Qo = Yo();
qo(Qo);
let T = null, L = null, J = null;
const R = k(null);
async function et() {
  var e;
  if (!((e = window.app) != null && e.api)) return null;
  try {
    const p = await window.app.api.fetchApi("/v2/comfygit/status");
    p.ok && (R.value = await p.json());
  } catch {
  }
}
function Xo() {
  if (!R.value) return !1;
  const e = R.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || R.value.has_changes;
}
function Zo() {
  T && T.remove(), T = document.createElement("div"), T.className = "comfygit-panel-overlay";
  const e = document.createElement("div");
  e.className = "comfygit-panel-container", T.appendChild(e), T.addEventListener("click", (s) => {
    s.target === T && tt();
  });
  const p = (s) => {
    s.key === "Escape" && (tt(), document.removeEventListener("keydown", p));
  };
  document.addEventListener("keydown", p), mt({
    render: () => gt(Io, {
      onClose: tt,
      onStatusUpdate: (s) => {
        R.value = s, Q();
      }
    })
  }).mount(e), document.body.appendChild(T);
}
function tt() {
  T && (T.remove(), T = null);
}
function ta(e) {
  j(), L = document.createElement("div"), L.className = "comfygit-commit-popover-container";
  const p = e.getBoundingClientRect();
  L.style.position = "fixed", L.style.top = `${p.bottom + 8}px`, L.style.right = `${window.innerWidth - p.right}px`, L.style.zIndex = "10001";
  const c = (u) => {
    L && !L.contains(u.target) && u.target !== e && (j(), document.removeEventListener("mousedown", c));
  };
  setTimeout(() => document.addEventListener("mousedown", c), 0);
  const s = (u) => {
    u.key === "Escape" && (j(), document.removeEventListener("keydown", s));
  };
  document.addEventListener("keydown", s), J = mt({
    render: () => gt(Wo, {
      status: R.value,
      onClose: j,
      onCommitted: () => {
        j(), et().then(Q);
      }
    })
  }), J.mount(L), document.body.appendChild(L);
}
function j() {
  J && (J.unmount(), J = null), L && (L.remove(), L = null);
}
let P = null;
function Q() {
  if (!P) return;
  const e = P.querySelector(".commit-indicator");
  e && (e.style.display = Xo() ? "block" : "none");
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
Z.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var c, s;
    const e = document.createElement("div");
    e.className = "comfygit-btn-group";
    const p = document.createElement("button");
    p.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", p.textContent = "ComfyGit", p.title = "ComfyGit Control Panel", p.onclick = Zo, P = document.createElement("button"), P.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", P.innerHTML = 'Commit <span class="commit-indicator"></span>', P.title = "Quick Commit", P.onclick = () => ta(P), e.appendChild(p), e.appendChild(P), (s = (c = Z.menu) == null ? void 0 : c.settingsGroup) != null && s.element && (Z.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), await et(), Q(), setInterval(async () => {
      await et(), Q();
    }, 3e4);
  }
});
