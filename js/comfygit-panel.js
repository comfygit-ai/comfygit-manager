import { app as q } from "../../scripts/app.js";
import { defineComponent as P, computed as N, createElementBlock as a, openBlock as o, createElementVNode as t, createCommentVNode as b, toDisplayString as l, ref as C, nextTick as wt, withDirectives as nt, withKeys as K, vModelText as rt, Fragment as E, renderList as I, normalizeClass as D, withModifiers as j, onMounted as ct, createTextVNode as it, createBlock as st, createVNode as W, TransitionGroup as kt, withCtx as xt, createApp as lt, h as dt } from "vue";
const Ct = { class: "status-section" }, $t = { class: "status-grid" }, _t = { class: "status-column" }, zt = {
  key: 0,
  class: "status-item"
}, Lt = { class: "count new" }, St = {
  key: 1,
  class: "status-item"
}, Bt = { class: "count modified" }, Et = {
  key: 2,
  class: "status-item"
}, It = { class: "count deleted" }, Tt = { class: "status-item synced-item" }, Mt = { class: "count synced" }, Nt = { class: "status-column" }, Pt = {
  key: 0,
  class: "status-item"
}, At = { class: "count new" }, Ut = {
  key: 1,
  class: "status-item"
}, Gt = { class: "count deleted" }, Dt = {
  key: 2,
  class: "status-item"
}, Ot = {
  key: 3,
  class: "status-item ok"
}, Ht = {
  key: 0,
  class: "warning-box"
}, Vt = {
  key: 1,
  class: "warning-box error"
}, jt = /* @__PURE__ */ P({
  __name: "StatusSection",
  props: {
    status: {}
  },
  setup(e) {
    const g = e, c = N(() => {
      const h = g.status.git_changes;
      return h.nodes_added.length > 0 || h.nodes_removed.length > 0 || h.workflow_changes || h.has_other_changes;
    }), s = N(() => {
      const h = g.status.git_changes, n = g.status.workflows;
      return (h.workflow_changes || h.has_other_changes) && n.new.length === 0 && n.modified.length === 0 && n.deleted.length === 0;
    });
    return (h, n) => (o(), a("div", Ct, [
      n[18] || (n[18] = t("h3", { class: "section-title" }, "Status", -1)),
      t("div", $t, [
        t("div", _t, [
          n[8] || (n[8] = t("h4", { class: "column-title" }, "Workflows", -1)),
          e.status.workflows.new.length ? (o(), a("div", zt, [
            n[0] || (n[0] = t("span", { class: "icon" }, "●", -1)),
            t("span", Lt, l(e.status.workflows.new.length), 1),
            n[1] || (n[1] = t("span", { class: "label" }, "new", -1))
          ])) : b("", !0),
          e.status.workflows.modified.length ? (o(), a("div", St, [
            n[2] || (n[2] = t("span", { class: "icon" }, "●", -1)),
            t("span", Bt, l(e.status.workflows.modified.length), 1),
            n[3] || (n[3] = t("span", { class: "label" }, "modified", -1))
          ])) : b("", !0),
          e.status.workflows.deleted.length ? (o(), a("div", Et, [
            n[4] || (n[4] = t("span", { class: "icon" }, "●", -1)),
            t("span", It, l(e.status.workflows.deleted.length), 1),
            n[5] || (n[5] = t("span", { class: "label" }, "deleted", -1))
          ])) : b("", !0),
          t("div", Tt, [
            n[6] || (n[6] = t("span", { class: "icon synced" }, "✓", -1)),
            t("span", Mt, l(e.status.workflows.synced.length), 1),
            n[7] || (n[7] = t("span", { class: "label" }, "synced", -1))
          ])
        ]),
        t("div", Nt, [
          n[15] || (n[15] = t("h4", { class: "column-title" }, "Git Changes", -1)),
          e.status.git_changes.nodes_added.length ? (o(), a("div", Pt, [
            n[9] || (n[9] = t("span", { class: "icon" }, "●", -1)),
            t("span", At, l(e.status.git_changes.nodes_added.length), 1),
            n[10] || (n[10] = t("span", { class: "label" }, "node added", -1))
          ])) : b("", !0),
          e.status.git_changes.nodes_removed.length ? (o(), a("div", Ut, [
            n[11] || (n[11] = t("span", { class: "icon" }, "●", -1)),
            t("span", Gt, l(e.status.git_changes.nodes_removed.length), 1),
            n[12] || (n[12] = t("span", { class: "label" }, "node removed", -1))
          ])) : b("", !0),
          s.value ? (o(), a("div", Dt, [...n[13] || (n[13] = [
            t("span", { class: "icon" }, "●", -1),
            t("span", { class: "count modified" }, "●", -1),
            t("span", { class: "label" }, "other changes", -1)
          ])])) : b("", !0),
          c.value ? b("", !0) : (o(), a("div", Ot, [...n[14] || (n[14] = [
            t("span", { class: "icon" }, "✓", -1),
            t("span", { class: "label" }, "No uncommitted changes", -1)
          ])]))
        ])
      ]),
      e.status.missing_models_count > 0 ? (o(), a("div", Ht, [
        n[16] || (n[16] = t("span", { class: "warning-icon" }, "⚠", -1)),
        t("span", null, l(e.status.missing_models_count) + " missing model(s)", 1)
      ])) : b("", !0),
      e.status.comparison.is_synced ? b("", !0) : (o(), a("div", Vt, [...n[17] || (n[17] = [
        t("span", { class: "warning-icon" }, "⚠", -1),
        t("span", null, "Environment not synced", -1)
      ])]))
    ]));
  }
}), A = (e, g) => {
  const c = e.__vccOpts || e;
  for (const [s, h] of g)
    c[s] = h;
  return c;
}, Rt = /* @__PURE__ */ A(jt, [["__scopeId", "data-v-a72d538b"]]), Ft = { class: "branch-section" }, Jt = { class: "section-header" }, Wt = { class: "branch-card" }, Kt = {
  key: 0,
  class: "create-branch-row"
}, Yt = ["disabled"], qt = {
  key: 1,
  class: "empty"
}, Qt = {
  key: 2,
  class: "branch-list"
}, Xt = { class: "branch-indicator" }, Zt = { class: "branch-name" }, te = ["onClick"], ee = {
  key: 1,
  class: "current-label"
}, oe = /* @__PURE__ */ P({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create"],
  setup(e, { emit: g }) {
    const c = g, s = C(!1), h = C(""), n = C(null);
    function _() {
      h.value.trim() && (c("create", h.value.trim()), f());
    }
    function f() {
      s.value = !1, h.value = "";
    }
    return wt(() => {
      s.value && n.value && n.value.focus();
    }), (m, x) => (o(), a("div", Ft, [
      t("div", Jt, [
        x[3] || (x[3] = t("h4", { class: "section-title" }, "Branches", -1)),
        t("button", {
          class: "add-btn",
          onClick: x[0] || (x[0] = (i) => s.value = !0),
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
      t("div", Wt, [
        s.value ? (o(), a("div", Kt, [
          nt(t("input", {
            ref_key: "createInput",
            ref: n,
            "onUpdate:modelValue": x[1] || (x[1] = (i) => h.value = i),
            class: "branch-input",
            placeholder: "Branch name...",
            onKeyup: [
              K(_, ["enter"]),
              K(f, ["escape"])
            ]
          }, null, 544), [
            [rt, h.value]
          ]),
          t("button", {
            class: "action-btn create",
            onClick: _,
            disabled: !h.value.trim()
          }, " Create ", 8, Yt),
          t("button", {
            class: "action-btn cancel",
            onClick: f
          }, " Cancel ")
        ])) : b("", !0),
        e.branches.length === 0 ? (o(), a("div", qt, " No branches found ")) : (o(), a("div", Qt, [
          (o(!0), a(E, null, I(e.branches, (i) => (o(), a("div", {
            key: i.name,
            class: D(["branch-item", { current: i.is_current }])
          }, [
            t("span", Xt, l(i.is_current ? "●" : "○"), 1),
            t("span", Zt, l(i.name), 1),
            i.is_current ? (o(), a("span", ee, "current")) : (o(), a("button", {
              key: 0,
              class: "switch-btn",
              onClick: (p) => m.$emit("switch", i.name)
            }, " Switch ", 8, te))
          ], 2))), 128))
        ]))
      ])
    ]));
  }
}), ae = /* @__PURE__ */ A(oe, [["__scopeId", "data-v-730a9c8a"]]), se = { class: "history-section" }, ne = { class: "history-card" }, re = {
  key: 0,
  class: "empty"
}, ce = {
  key: 1,
  class: "commit-list"
}, ie = ["onClick"], le = { class: "commit-hash" }, de = { class: "commit-message" }, me = { class: "commit-date" }, ge = ["onClick"], he = /* @__PURE__ */ P({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(e) {
    return (g, c) => (o(), a("div", se, [
      c[2] || (c[2] = t("div", { class: "section-header" }, [
        t("h4", { class: "section-title" }, "History")
      ], -1)),
      t("div", ne, [
        e.commits.length === 0 ? (o(), a("div", re, " No commits yet ")) : (o(), a("div", ce, [
          (o(!0), a(E, null, I(e.commits, (s) => {
            var h;
            return o(), a("div", {
              key: s.hash,
              class: "commit-item",
              onClick: (n) => g.$emit("select", s)
            }, [
              t("span", le, l(s.short_hash || ((h = s.hash) == null ? void 0 : h.slice(0, 7))), 1),
              t("span", de, l(s.message), 1),
              t("span", me, l(s.date_relative || s.relative_date), 1),
              t("div", {
                class: "commit-actions",
                onClick: c[0] || (c[0] = j(() => {
                }, ["stop"]))
              }, [
                t("button", {
                  class: "action-btn",
                  onClick: (n) => g.$emit("checkout", s),
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
                ])], 8, ge)
              ])
            ], 8, ie);
          }), 128))
        ]))
      ])
    ]));
  }
}), ue = /* @__PURE__ */ A(he, [["__scopeId", "data-v-3bb44122"]]);
function Z() {
  const e = C(!1), g = C(null);
  async function c(v, y) {
    var u;
    if (!((u = window.app) != null && u.api))
      throw new Error("ComfyUI API not available");
    const S = await window.app.api.fetchApi(v, y);
    if (!S.ok) {
      const k = await S.json().catch(() => ({}));
      throw new Error(k.error || k.message || `Request failed: ${S.status}`);
    }
    return S.json();
  }
  async function s() {
    return c("/v2/comfygit/status");
  }
  async function h(v, y = !1) {
    return c("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: v, allow_issues: y })
    });
  }
  async function n(v = 10, y = 0) {
    return c(`/v2/comfygit/log?limit=${v}&offset=${y}`);
  }
  async function _(v) {
    return c("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: v })
    });
  }
  async function f() {
    return c("/v2/comfygit/branches");
  }
  async function m(v) {
    return c(`/v2/comfygit/commit/${v}`);
  }
  async function x(v, y = !1) {
    return c("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: v, force: y })
    });
  }
  async function i(v, y = "HEAD") {
    return c("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: v, start_point: y })
    });
  }
  async function p(v, y = !1) {
    return c("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: v, force: y })
    });
  }
  return {
    isLoading: e,
    error: g,
    getStatus: s,
    commit: h,
    getHistory: n,
    exportEnv: _,
    // Phase 2
    getBranches: f,
    getCommitDetail: m,
    checkout: x,
    createBranch: i,
    switchBranch: p
  };
}
const pe = { class: "modal-content" }, fe = { class: "modal-header" }, ve = { class: "commit-info" }, ye = { class: "commit-hash" }, be = {
  key: 0,
  class: "commit-refs"
}, we = { class: "modal-body" }, ke = { class: "commit-message" }, xe = { class: "commit-date" }, Ce = {
  key: 0,
  class: "loading"
}, $e = {
  key: 1,
  class: "changes-section"
}, _e = { class: "stats-row" }, ze = { class: "stat" }, Le = { class: "stat insertions" }, Se = { class: "stat deletions" }, Be = {
  key: 0,
  class: "change-group"
}, Ee = {
  key: 1,
  class: "change-group"
}, Ie = {
  key: 0,
  class: "version"
}, Te = {
  key: 2,
  class: "change-group"
}, Me = { class: "change-item" }, Ne = { class: "modal-footer" }, Pe = /* @__PURE__ */ P({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const g = e, { getCommitDetail: c } = Z(), s = C(null), h = C(!0), n = N(() => {
      if (!s.value) return !1;
      const f = s.value.changes.workflows;
      return f.added.length > 0 || f.modified.length > 0 || f.deleted.length > 0;
    }), _ = N(() => {
      if (!s.value) return !1;
      const f = s.value.changes.nodes;
      return f.added.length > 0 || f.removed.length > 0;
    });
    return ct(async () => {
      try {
        s.value = await c(g.commit.hash);
      } finally {
        h.value = !1;
      }
    }), (f, m) => {
      var x, i, p, v, y, S;
      return o(), a("div", {
        class: "modal-overlay",
        onClick: m[3] || (m[3] = j((u) => f.$emit("close"), ["self"]))
      }, [
        t("div", pe, [
          t("div", fe, [
            t("div", ve, [
              t("span", ye, l(((x = s.value) == null ? void 0 : x.short_hash) || e.commit.short_hash || ((i = e.commit.hash) == null ? void 0 : i.slice(0, 7))), 1),
              (v = (p = s.value) == null ? void 0 : p.refs) != null && v.length ? (o(), a("span", be, [
                (o(!0), a(E, null, I(s.value.refs, (u) => (o(), a("span", {
                  key: u,
                  class: "ref-badge"
                }, l(u), 1))), 128))
              ])) : b("", !0)
            ]),
            t("button", {
              class: "close-btn",
              onClick: m[0] || (m[0] = (u) => f.$emit("close"))
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
          t("div", we, [
            t("div", ke, l(((y = s.value) == null ? void 0 : y.message) || e.commit.message), 1),
            t("div", xe, l(((S = s.value) == null ? void 0 : S.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
            h.value ? (o(), a("div", Ce, "Loading details...")) : s.value ? (o(), a("div", $e, [
              t("div", _e, [
                t("span", ze, l(s.value.stats.files_changed) + " files", 1),
                t("span", Le, "+" + l(s.value.stats.insertions), 1),
                t("span", Se, "-" + l(s.value.stats.deletions), 1)
              ]),
              n.value ? (o(), a("div", Be, [
                m[8] || (m[8] = t("h4", { class: "change-title" }, "Workflows", -1)),
                (o(!0), a(E, null, I(s.value.changes.workflows.added, (u) => (o(), a("div", {
                  key: "add-" + u,
                  class: "change-item added"
                }, [
                  m[5] || (m[5] = t("span", { class: "change-icon" }, "+", -1)),
                  t("span", null, l(u), 1)
                ]))), 128)),
                (o(!0), a(E, null, I(s.value.changes.workflows.modified, (u) => (o(), a("div", {
                  key: "mod-" + u,
                  class: "change-item modified"
                }, [
                  m[6] || (m[6] = t("span", { class: "change-icon" }, "~", -1)),
                  t("span", null, l(u), 1)
                ]))), 128)),
                (o(!0), a(E, null, I(s.value.changes.workflows.deleted, (u) => (o(), a("div", {
                  key: "del-" + u,
                  class: "change-item deleted"
                }, [
                  m[7] || (m[7] = t("span", { class: "change-icon" }, "-", -1)),
                  t("span", null, l(u), 1)
                ]))), 128))
              ])) : b("", !0),
              _.value ? (o(), a("div", Ee, [
                m[11] || (m[11] = t("h4", { class: "change-title" }, "Nodes", -1)),
                (o(!0), a(E, null, I(s.value.changes.nodes.added, (u) => (o(), a("div", {
                  key: "add-" + u.name,
                  class: "change-item added"
                }, [
                  m[9] || (m[9] = t("span", { class: "change-icon" }, "+", -1)),
                  t("span", null, l(u.name), 1),
                  u.version ? (o(), a("span", Ie, "(" + l(u.version) + ")", 1)) : b("", !0)
                ]))), 128)),
                (o(!0), a(E, null, I(s.value.changes.nodes.removed, (u) => (o(), a("div", {
                  key: "rem-" + u.name,
                  class: "change-item deleted"
                }, [
                  m[10] || (m[10] = t("span", { class: "change-icon" }, "-", -1)),
                  t("span", null, l(u.name), 1)
                ]))), 128))
              ])) : b("", !0),
              s.value.changes.models.resolved > 0 ? (o(), a("div", Te, [
                m[13] || (m[13] = t("h4", { class: "change-title" }, "Models", -1)),
                t("div", Me, [
                  m[12] || (m[12] = t("span", { class: "change-icon" }, "●", -1)),
                  t("span", null, l(s.value.changes.models.resolved) + " model(s) resolved", 1)
                ])
              ])) : b("", !0)
            ])) : b("", !0)
          ]),
          t("div", Ne, [
            t("button", {
              class: "action-btn secondary",
              onClick: m[1] || (m[1] = (u) => f.$emit("createBranch", e.commit))
            }, " Create Branch "),
            t("button", {
              class: "action-btn primary",
              onClick: m[2] || (m[2] = (u) => f.$emit("checkout", e.commit))
            }, " Checkout ")
          ])
        ])
      ]);
    };
  }
}), Ae = /* @__PURE__ */ A(Pe, [["__scopeId", "data-v-9768f067"]]), Ue = { class: "dialog-content" }, Ge = { class: "dialog-header" }, De = { class: "dialog-title" }, Oe = { class: "dialog-body" }, He = { class: "dialog-message" }, Ve = {
  key: 0,
  class: "dialog-details"
}, je = {
  key: 1,
  class: "dialog-warning"
}, Re = { class: "dialog-footer" }, Fe = /* @__PURE__ */ P({
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
    return (g, c) => (o(), a("div", {
      class: "dialog-overlay",
      onClick: c[3] || (c[3] = j((s) => g.$emit("cancel"), ["self"]))
    }, [
      t("div", Ue, [
        t("div", Ge, [
          t("h3", De, l(e.title), 1)
        ]),
        t("div", Oe, [
          t("p", He, l(e.message), 1),
          e.details && e.details.length ? (o(), a("div", Ve, [
            (o(!0), a(E, null, I(e.details, (s, h) => (o(), a("div", {
              key: h,
              class: "detail-item"
            }, " • " + l(s), 1))), 128))
          ])) : b("", !0),
          e.warning ? (o(), a("p", je, [
            c[4] || (c[4] = t("span", { class: "warning-icon" }, "⚠", -1)),
            it(" " + l(e.warning), 1)
          ])) : b("", !0)
        ]),
        t("div", Re, [
          t("button", {
            class: "dialog-btn cancel",
            onClick: c[0] || (c[0] = (s) => g.$emit("cancel"))
          }, l(e.cancelLabel), 1),
          e.secondaryAction ? (o(), a("button", {
            key: 0,
            class: "dialog-btn secondary",
            onClick: c[1] || (c[1] = (s) => g.$emit("secondary"))
          }, l(e.secondaryLabel), 1)) : b("", !0),
          t("button", {
            class: D(["dialog-btn primary", { destructive: e.destructive }]),
            onClick: c[2] || (c[2] = (s) => g.$emit("confirm"))
          }, l(e.confirmLabel), 3)
        ])
      ])
    ]));
  }
}), Je = /* @__PURE__ */ A(Fe, [["__scopeId", "data-v-d24c6c0b"]]), We = { class: "comfygit-panel" }, Ke = { class: "panel-header" }, Ye = { class: "header-left" }, qe = {
  key: 0,
  class: "header-info"
}, Qe = { class: "env-name" }, Xe = { class: "branch-name" }, Ze = ["title"], to = {
  key: 1,
  class: "header-info loading-text"
}, eo = { class: "header-actions" }, oo = { class: "panel-content" }, ao = {
  key: 0,
  class: "error-message"
}, so = {
  key: 1,
  class: "loading"
}, no = { class: "panel-footer" }, ro = ["disabled"], co = { class: "toast-container" }, io = { class: "toast-icon" }, lo = { class: "toast-message" }, mo = /* @__PURE__ */ P({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(e, { emit: g }) {
    const c = g, {
      getStatus: s,
      getHistory: h,
      exportEnv: n,
      getBranches: _,
      checkout: f,
      createBranch: m,
      switchBranch: x
    } = Z(), i = C(null), p = C([]), v = C([]), y = C(!1), S = C(null), u = C(null), k = C(null), U = C([]);
    let gt = 0;
    function $(d, r = "info", w = 3e3) {
      const z = ++gt;
      return U.value.push({ id: z, message: d, type: r }), w > 0 && setTimeout(() => {
        U.value = U.value.filter((J) => J.id !== z);
      }, w), z;
    }
    function G(d) {
      U.value = U.value.filter((r) => r.id !== d);
    }
    function ht(d) {
      switch (d) {
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
    const R = N(() => {
      if (!i.value) return "neutral";
      const d = i.value.workflows, r = d.new.length > 0 || d.modified.length > 0 || d.deleted.length > 0 || i.value.has_changes;
      return i.value.comparison.is_synced ? r ? "warning" : "success" : "error";
    }), ut = N(() => i.value ? R.value === "success" ? "All synced" : R.value === "warning" ? "Uncommitted changes" : R.value === "error" ? "Not synced" : "" : "");
    async function F() {
      y.value = !0, S.value = null;
      try {
        const [d, r, w] = await Promise.all([
          s(),
          h(),
          _()
        ]);
        i.value = d, p.value = r.commits, v.value = w.branches, c("statusUpdate", d);
      } catch (d) {
        S.value = d instanceof Error ? d.message : "Failed to load status", i.value = null, p.value = [], v.value = [];
      } finally {
        y.value = !1;
      }
    }
    function pt(d) {
      u.value = d;
    }
    async function et(d) {
      var w;
      u.value = null;
      const r = i.value && (i.value.workflows.new.length > 0 || i.value.workflows.modified.length > 0 || i.value.workflows.deleted.length > 0 || i.value.has_changes);
      k.value = {
        title: r ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: r ? "You have uncommitted changes that will be lost." : `Checkout commit ${d.short_hash || ((w = d.hash) == null ? void 0 : w.slice(0, 7))}?`,
        details: r ? ot() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: r ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: r,
        onConfirm: async () => {
          var at;
          k.value = null;
          const z = $(`Checking out ${d.short_hash || ((at = d.hash) == null ? void 0 : at.slice(0, 7))}...`, "info", 0), J = await f(d.hash, r);
          G(z), J.status === "success" ? $("Restarting ComfyUI...", "success") : $(J.message || "Checkout failed", "error");
        }
      };
    }
    async function ft(d) {
      const r = i.value && (i.value.workflows.new.length > 0 || i.value.workflows.modified.length > 0 || i.value.workflows.deleted.length > 0 || i.value.has_changes);
      k.value = {
        title: r ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: r ? "You have uncommitted changes." : `Switch to branch "${d}"?`,
        details: r ? ot() : void 0,
        warning: r ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: r ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          k.value = null;
          const w = $(`Switching to ${d}...`, "info", 0), z = await x(d, r);
          G(w), z.status === "success" ? $("Restarting ComfyUI...", "success") : z.status === "warning" && z.reason === "uncommitted_changes" ? $("Switch cancelled due to uncommitted changes", "warning") : $(z.message || "Branch switch failed", "error");
        }
      };
    }
    async function vt(d) {
      const r = $(`Creating branch ${d}...`, "info", 0), w = await m(d);
      G(r), w.status === "success" ? ($(`Branch "${d}" created`, "success"), await F()) : $(w.message || "Failed to create branch", "error");
    }
    async function yt(d) {
      u.value = null;
      const r = prompt("Enter branch name:");
      if (r) {
        const w = $(`Creating branch ${r}...`, "info", 0), z = await m(r, d.hash);
        G(w), z.status === "success" ? ($(`Branch "${r}" created from ${d.short_hash}`, "success"), await F()) : $(z.message || "Failed to create branch", "error");
      }
    }
    function ot() {
      if (!i.value) return [];
      const d = [], r = i.value.workflows;
      return r.new.length && d.push(`${r.new.length} new workflow(s)`), r.modified.length && d.push(`${r.modified.length} modified workflow(s)`), r.deleted.length && d.push(`${r.deleted.length} deleted workflow(s)`), d;
    }
    async function bt() {
      const d = $("Exporting environment...", "info", 0);
      try {
        const r = await n();
        G(d), r.status === "success" ? ($("Export complete", "success"), alert(`Export successful!

Saved to: ${r.path}

Models without sources: ${r.models_without_sources}`)) : ($("Export failed", "error"), alert(`Export failed: ${r.message}`));
      } catch (r) {
        G(d), $("Export error", "error"), alert(`Export error: ${r instanceof Error ? r.message : "Unknown error"}`);
      }
    }
    return ct(F), (d, r) => (o(), a("div", We, [
      t("div", Ke, [
        t("div", Ye, [
          r[3] || (r[3] = t("h2", { class: "panel-title" }, "ComfyGit", -1)),
          i.value ? (o(), a("div", qe, [
            t("span", Qe, l(i.value.environment), 1),
            t("span", Xe, "(" + l(i.value.branch || "detached") + ")", 1),
            t("span", {
              class: D(["status-dot", R.value]),
              title: ut.value
            }, null, 10, Ze)
          ])) : (o(), a("div", to, "Loading..."))
        ]),
        t("div", eo, [
          t("button", {
            class: D(["icon-btn", { spinning: y.value }]),
            onClick: F,
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
            onClick: r[0] || (r[0] = (w) => c("close")),
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
      t("div", oo, [
        S.value ? (o(), a("div", ao, l(S.value), 1)) : i.value ? (o(), a(E, { key: 2 }, [
          W(Rt, { status: i.value }, null, 8, ["status"]),
          W(ae, {
            branches: v.value,
            current: i.value.branch,
            onSwitch: ft,
            onCreate: vt
          }, null, 8, ["branches", "current"]),
          W(ue, {
            commits: p.value,
            onSelect: pt,
            onCheckout: et
          }, null, 8, ["commits"])
        ], 64)) : (o(), a("div", so, " Loading status... "))
      ]),
      t("div", no, [
        t("button", {
          class: "export-btn",
          onClick: bt,
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
          it(" Export ", -1)
        ])], 8, ro)
      ]),
      u.value ? (o(), st(Ae, {
        key: 0,
        commit: u.value,
        onClose: r[1] || (r[1] = (w) => u.value = null),
        onCheckout: et,
        onCreateBranch: yt
      }, null, 8, ["commit"])) : b("", !0),
      k.value ? (o(), st(Je, {
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
        onCancel: r[2] || (r[2] = (w) => k.value = null),
        onSecondary: k.value.onSecondary
      }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : b("", !0),
      t("div", co, [
        W(kt, { name: "toast" }, {
          default: xt(() => [
            (o(!0), a(E, null, I(U.value, (w) => (o(), a("div", {
              key: w.id,
              class: D(["toast", w.type])
            }, [
              t("span", io, l(ht(w.type)), 1),
              t("span", lo, l(w.message), 1)
            ], 2))), 128))
          ]),
          _: 1
        })
      ])
    ]));
  }
}), go = /* @__PURE__ */ A(mo, [["__scopeId", "data-v-cb49f598"]]), ho = { class: "commit-popover" }, uo = { class: "popover-content" }, po = {
  key: 0,
  class: "changes-summary"
}, fo = {
  key: 0,
  class: "change-item"
}, vo = {
  key: 1,
  class: "change-item"
}, yo = {
  key: 2,
  class: "change-item"
}, bo = {
  key: 3,
  class: "change-item"
}, wo = {
  key: 4,
  class: "change-item"
}, ko = {
  key: 1,
  class: "no-changes"
}, xo = {
  key: 2,
  class: "loading"
}, Co = { class: "message-section" }, $o = ["placeholder", "disabled", "onKeydown"], _o = { class: "popover-footer" }, zo = ["disabled"], Lo = /* @__PURE__ */ P({
  __name: "CommitPopover",
  props: {
    status: {}
  },
  emits: ["close", "committed"],
  setup(e, { emit: g }) {
    const c = e, s = g, { commit: h } = Z(), n = C(""), _ = C(!1), f = C(null), m = N(() => {
      if (!c.status) return !1;
      const i = c.status.workflows;
      return i.new.length > 0 || i.modified.length > 0 || i.deleted.length > 0 || c.status.has_changes;
    });
    async function x() {
      var i, p, v;
      if (!(!m.value || !n.value.trim() || _.value)) {
        _.value = !0, f.value = null;
        try {
          const y = await h(n.value.trim());
          y.status === "success" ? (f.value = {
            type: "success",
            message: `Committed: ${((i = y.summary) == null ? void 0 : i.new) || 0} new, ${((p = y.summary) == null ? void 0 : p.modified) || 0} modified, ${((v = y.summary) == null ? void 0 : v.deleted) || 0} deleted`
          }, n.value = "", setTimeout(() => s("committed"), 1e3)) : y.status === "no_changes" ? f.value = { type: "error", message: "No changes to commit" } : f.value = { type: "error", message: y.message || "Commit failed" };
        } catch (y) {
          f.value = { type: "error", message: y instanceof Error ? y.message : "Commit failed" };
        } finally {
          _.value = !1;
        }
      }
    }
    return (i, p) => (o(), a("div", ho, [
      p[7] || (p[7] = t("div", { class: "popover-header" }, [
        t("h3", { class: "popover-title" }, "Commit Changes")
      ], -1)),
      t("div", uo, [
        e.status && m.value ? (o(), a("div", po, [
          e.status.workflows.new.length ? (o(), a("div", fo, [
            p[2] || (p[2] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, l(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : b("", !0),
          e.status.workflows.modified.length ? (o(), a("div", vo, [
            p[3] || (p[3] = t("span", { class: "change-icon modified" }, "~", -1)),
            t("span", null, l(e.status.workflows.modified.length) + " modified", 1)
          ])) : b("", !0),
          e.status.workflows.deleted.length ? (o(), a("div", yo, [
            p[4] || (p[4] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, l(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : b("", !0),
          e.status.git_changes.nodes_added.length ? (o(), a("div", bo, [
            p[5] || (p[5] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, l(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : b("", !0),
          e.status.git_changes.nodes_removed.length ? (o(), a("div", wo, [
            p[6] || (p[6] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, l(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : b("", !0)
        ])) : e.status ? (o(), a("div", ko, " No changes to commit ")) : (o(), a("div", xo, " Loading... ")),
        t("div", Co, [
          nt(t("textarea", {
            "onUpdate:modelValue": p[0] || (p[0] = (v) => n.value = v),
            class: "commit-input",
            placeholder: m.value ? "Describe your changes..." : "No changes",
            disabled: !m.value || _.value,
            rows: "3",
            onKeydown: [
              K(j(x, ["ctrl"]), ["enter"]),
              K(j(x, ["meta"]), ["enter"])
            ]
          }, null, 40, $o), [
            [rt, n.value]
          ])
        ]),
        f.value ? (o(), a("div", {
          key: 3,
          class: D(["result", f.value.type])
        }, l(f.value.message), 3)) : b("", !0)
      ]),
      t("div", _o, [
        t("button", {
          class: "cancel-btn",
          onClick: p[1] || (p[1] = (v) => s("close"))
        }, "Cancel"),
        t("button", {
          class: "commit-btn",
          disabled: !m.value || !n.value.trim() || _.value,
          onClick: x
        }, l(_.value ? "Committing..." : "Commit"), 9, zo)
      ])
    ]));
  }
}), So = /* @__PURE__ */ A(Lo, [["__scopeId", "data-v-940bff74"]]), Bo = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 12px;--cg-font-size-sm: 14px;--cg-font-size-base: 17px;--cg-font-size-lg: 20px;--cg-font-size-xl: 24px;--cg-font-size-2xl: 28px;--cg-panel-width: 754px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-header{background:var(--cg-color-bg-tertiary);border-bottom:1px solid var(--cg-color-border);padding:var(--cg-space-3) var(--cg-space-4)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:cursor-blink 1s step-end infinite}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}';
let M = null;
function Eo() {
  return "phosphor";
}
function Io(e = "phosphor") {
  M && M.remove(), M = document.createElement("style"), M.id = "comfygit-theme-styles", M.setAttribute("data-theme", "phosphor"), M.textContent = Bo, document.head.appendChild(M), document.body.setAttribute("data-comfygit-theme", "phosphor"), console.log("[ComfyGit] Applied theme: phosphor");
}
const tt = document.createElement("link");
tt.rel = "stylesheet";
tt.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(tt);
const To = Eo();
Io(To);
let B = null, L = null, V = null;
const O = C(null);
async function X() {
  var e;
  if (!((e = window.app) != null && e.api)) return null;
  try {
    const g = await window.app.api.fetchApi("/v2/comfygit/status");
    g.ok && (O.value = await g.json());
  } catch {
  }
}
function Mo() {
  if (!O.value) return !1;
  const e = O.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || O.value.has_changes;
}
function No() {
  B && B.remove(), B = document.createElement("div"), B.className = "comfygit-panel-overlay";
  const e = document.createElement("div");
  e.className = "comfygit-panel-container", B.appendChild(e), B.addEventListener("click", (s) => {
    s.target === B && Q();
  });
  const g = (s) => {
    s.key === "Escape" && (Q(), document.removeEventListener("keydown", g));
  };
  document.addEventListener("keydown", g), lt({
    render: () => dt(go, {
      onClose: Q,
      onStatusUpdate: (s) => {
        O.value = s, Y();
      }
    })
  }).mount(e), document.body.appendChild(B);
}
function Q() {
  B && (B.remove(), B = null);
}
function Po(e) {
  H(), L = document.createElement("div"), L.className = "comfygit-commit-popover-container";
  const g = e.getBoundingClientRect();
  L.style.position = "fixed", L.style.top = `${g.bottom + 8}px`, L.style.right = `${window.innerWidth - g.right}px`, L.style.zIndex = "10001";
  const c = (h) => {
    L && !L.contains(h.target) && h.target !== e && (H(), document.removeEventListener("mousedown", c));
  };
  setTimeout(() => document.addEventListener("mousedown", c), 0);
  const s = (h) => {
    h.key === "Escape" && (H(), document.removeEventListener("keydown", s));
  };
  document.addEventListener("keydown", s), V = lt({
    render: () => dt(So, {
      status: O.value,
      onClose: H,
      onCommitted: () => {
        H(), X().then(Y);
      }
    })
  }), V.mount(L), document.body.appendChild(L);
}
function H() {
  V && (V.unmount(), V = null), L && (L.remove(), L = null);
}
let T = null;
function Y() {
  if (!T) return;
  const e = T.querySelector(".commit-indicator");
  e && (e.style.display = Mo() ? "block" : "none");
}
const mt = document.createElement("style");
mt.textContent = `
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
document.head.appendChild(mt);
q.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var c, s;
    const e = document.createElement("div");
    e.className = "comfygit-btn-group";
    const g = document.createElement("button");
    g.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", g.textContent = "ComfyGit", g.title = "ComfyGit Control Panel", g.onclick = No, T = document.createElement("button"), T.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", T.innerHTML = 'Commit <span class="commit-indicator"></span>', T.title = "Quick Commit", T.onclick = () => Po(T), e.appendChild(g), e.appendChild(T), (s = (c = q.menu) == null ? void 0 : c.settingsGroup) != null && s.element && (q.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), await X(), Y(), setInterval(async () => {
      await X(), Y();
    }, 3e4);
  }
});
