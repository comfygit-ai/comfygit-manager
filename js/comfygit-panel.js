import { app as pe } from "../../scripts/app.js";
import { defineComponent as X, computed as V, createElementBlock as a, openBlock as s, createElementVNode as e, createCommentVNode as f, toDisplayString as d, ref as k, nextTick as Te, withDirectives as ke, withKeys as de, vModelText as xe, Fragment as R, renderList as A, normalizeClass as $, withModifiers as ee, onMounted as Ce, createTextVNode as $e, createBlock as se, createVNode as De, TransitionGroup as Ne, withCtx as Be, createApp as Ee, h as Se } from "vue";
const Re = { class: "status-section" }, We = { class: "status-grid" }, Ae = { class: "status-column" }, Ue = {
  key: 0,
  class: "status-item"
}, Pe = { class: "count new" }, Ke = {
  key: 1,
  class: "status-item"
}, je = { class: "count modified" }, Ge = {
  key: 2,
  class: "status-item"
}, Ve = { class: "count deleted" }, He = { class: "status-item synced-item" }, Fe = { class: "count synced" }, Ze = { class: "status-column" }, Xe = {
  key: 0,
  class: "status-item"
}, Je = { class: "count new" }, Ye = {
  key: 1,
  class: "status-item"
}, qe = { class: "count deleted" }, Qe = {
  key: 2,
  class: "status-item"
}, et = {
  key: 3,
  class: "status-item ok"
}, tt = {
  key: 0,
  class: "warning-box"
}, ot = {
  key: 1,
  class: "warning-box error"
}, st = /* @__PURE__ */ X({
  __name: "StatusSection",
  props: {
    status: {}
  },
  setup(o) {
    const c = o, i = V(() => {
      const u = c.status.git_changes;
      return u.nodes_added.length > 0 || u.nodes_removed.length > 0 || u.workflow_changes || u.has_other_changes;
    }), n = V(() => {
      const u = c.status.git_changes, r = c.status.workflows;
      return (u.workflow_changes || u.has_other_changes) && r.new.length === 0 && r.modified.length === 0 && r.deleted.length === 0;
    });
    return (u, r) => (s(), a("div", Re, [
      r[18] || (r[18] = e("h3", { class: "section-title" }, "Status", -1)),
      e("div", We, [
        e("div", Ae, [
          r[8] || (r[8] = e("h4", { class: "column-title" }, "Workflows", -1)),
          o.status.workflows.new.length ? (s(), a("div", Ue, [
            r[0] || (r[0] = e("span", { class: "icon" }, "●", -1)),
            e("span", Pe, d(o.status.workflows.new.length), 1),
            r[1] || (r[1] = e("span", { class: "label" }, "new", -1))
          ])) : f("", !0),
          o.status.workflows.modified.length ? (s(), a("div", Ke, [
            r[2] || (r[2] = e("span", { class: "icon" }, "●", -1)),
            e("span", je, d(o.status.workflows.modified.length), 1),
            r[3] || (r[3] = e("span", { class: "label" }, "modified", -1))
          ])) : f("", !0),
          o.status.workflows.deleted.length ? (s(), a("div", Ge, [
            r[4] || (r[4] = e("span", { class: "icon" }, "●", -1)),
            e("span", Ve, d(o.status.workflows.deleted.length), 1),
            r[5] || (r[5] = e("span", { class: "label" }, "deleted", -1))
          ])) : f("", !0),
          e("div", He, [
            r[6] || (r[6] = e("span", { class: "icon synced" }, "✓", -1)),
            e("span", Fe, d(o.status.workflows.synced.length), 1),
            r[7] || (r[7] = e("span", { class: "label" }, "synced", -1))
          ])
        ]),
        e("div", Ze, [
          r[15] || (r[15] = e("h4", { class: "column-title" }, "Git Changes", -1)),
          o.status.git_changes.nodes_added.length ? (s(), a("div", Xe, [
            r[9] || (r[9] = e("span", { class: "icon" }, "●", -1)),
            e("span", Je, d(o.status.git_changes.nodes_added.length), 1),
            r[10] || (r[10] = e("span", { class: "label" }, "node added", -1))
          ])) : f("", !0),
          o.status.git_changes.nodes_removed.length ? (s(), a("div", Ye, [
            r[11] || (r[11] = e("span", { class: "icon" }, "●", -1)),
            e("span", qe, d(o.status.git_changes.nodes_removed.length), 1),
            r[12] || (r[12] = e("span", { class: "label" }, "node removed", -1))
          ])) : f("", !0),
          n.value ? (s(), a("div", Qe, [...r[13] || (r[13] = [
            e("span", { class: "icon" }, "●", -1),
            e("span", { class: "count modified" }, "●", -1),
            e("span", { class: "label" }, "other changes", -1)
          ])])) : f("", !0),
          i.value ? f("", !0) : (s(), a("div", et, [...r[14] || (r[14] = [
            e("span", { class: "icon" }, "✓", -1),
            e("span", { class: "label" }, "No uncommitted changes", -1)
          ])]))
        ])
      ]),
      o.status.missing_models_count > 0 ? (s(), a("div", tt, [
        r[16] || (r[16] = e("span", { class: "warning-icon" }, "⚠", -1)),
        e("span", null, d(o.status.missing_models_count) + " missing model(s)", 1)
      ])) : f("", !0),
      o.status.comparison.is_synced ? f("", !0) : (s(), a("div", ot, [...r[17] || (r[17] = [
        e("span", { class: "warning-icon" }, "⚠", -1),
        e("span", null, "Environment not synced", -1)
      ])]))
    ]));
  }
}), J = (o, c) => {
  const i = o.__vccOpts || o;
  for (const [n, u] of c)
    i[n] = u;
  return i;
}, at = /* @__PURE__ */ J(st, [["__scopeId", "data-v-a72d538b"]]), nt = { class: "branch-section" }, rt = { class: "section-header" }, it = { class: "branch-card" }, ct = {
  key: 0,
  class: "create-branch-row"
}, lt = ["disabled"], dt = {
  key: 1,
  class: "empty"
}, mt = {
  key: 2,
  class: "branch-list"
}, gt = { class: "branch-indicator" }, ut = { class: "branch-name" }, ht = ["onClick"], pt = {
  key: 1,
  class: "current-label"
}, ft = /* @__PURE__ */ X({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create"],
  setup(o, { emit: c }) {
    const i = c, n = k(!1), u = k(""), r = k(null);
    function D() {
      u.value.trim() && (i("create", u.value.trim()), y());
    }
    function y() {
      n.value = !1, u.value = "";
    }
    return Te(() => {
      n.value && r.value && r.value.focus();
    }), (h, E) => (s(), a("div", nt, [
      e("div", rt, [
        E[3] || (E[3] = e("h4", { class: "section-title" }, "Branches", -1)),
        e("button", {
          class: "add-btn",
          onClick: E[0] || (E[0] = (_) => n.value = !0),
          title: "New Branch"
        }, [...E[2] || (E[2] = [
          e("svg", {
            width: "12",
            height: "12",
            viewBox: "0 0 16 16",
            fill: "currentColor"
          }, [
            e("path", {
              d: "M8 2v12M2 8h12",
              stroke: "currentColor",
              "stroke-width": "2",
              fill: "none"
            })
          ], -1)
        ])])
      ]),
      e("div", it, [
        n.value ? (s(), a("div", ct, [
          ke(e("input", {
            ref_key: "createInput",
            ref: r,
            "onUpdate:modelValue": E[1] || (E[1] = (_) => u.value = _),
            class: "branch-input",
            placeholder: "Branch name...",
            onKeyup: [
              de(D, ["enter"]),
              de(y, ["escape"])
            ]
          }, null, 544), [
            [xe, u.value]
          ]),
          e("button", {
            class: "action-btn create",
            onClick: D,
            disabled: !u.value.trim()
          }, " Create ", 8, lt),
          e("button", {
            class: "action-btn cancel",
            onClick: y
          }, " Cancel ")
        ])) : f("", !0),
        o.branches.length === 0 ? (s(), a("div", dt, " No branches found ")) : (s(), a("div", mt, [
          (s(!0), a(R, null, A(o.branches, (_) => (s(), a("div", {
            key: _.name,
            class: $(["branch-item", { current: _.is_current }])
          }, [
            e("span", gt, d(_.is_current ? "●" : "○"), 1),
            e("span", ut, d(_.name), 1),
            _.is_current ? (s(), a("span", pt, "current")) : (s(), a("button", {
              key: 0,
              class: "switch-btn",
              onClick: (l) => h.$emit("switch", _.name)
            }, " Switch ", 8, ht))
          ], 2))), 128))
        ]))
      ])
    ]));
  }
}), vt = /* @__PURE__ */ J(ft, [["__scopeId", "data-v-730a9c8a"]]), yt = { class: "history-section" }, bt = { class: "history-card" }, wt = {
  key: 0,
  class: "empty"
}, _t = {
  key: 1,
  class: "commit-list"
}, kt = ["onClick"], xt = { class: "commit-hash" }, Ct = { class: "commit-message" }, $t = { class: "commit-date" }, Et = ["onClick"], St = /* @__PURE__ */ X({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(o) {
    return (c, i) => (s(), a("div", yt, [
      i[2] || (i[2] = e("div", { class: "section-header" }, [
        e("h4", { class: "section-title" }, "History")
      ], -1)),
      e("div", bt, [
        o.commits.length === 0 ? (s(), a("div", wt, " No commits yet ")) : (s(), a("div", _t, [
          (s(!0), a(R, null, A(o.commits, (n) => {
            var u;
            return s(), a("div", {
              key: n.hash,
              class: "commit-item",
              onClick: (r) => c.$emit("select", n)
            }, [
              e("span", xt, d(n.short_hash || ((u = n.hash) == null ? void 0 : u.slice(0, 7))), 1),
              e("span", Ct, d(n.message), 1),
              e("span", $t, d(n.date_relative || n.relative_date), 1),
              e("div", {
                class: "commit-actions",
                onClick: i[0] || (i[0] = ee(() => {
                }, ["stop"]))
              }, [
                e("button", {
                  class: "action-btn",
                  onClick: (r) => c.$emit("checkout", n),
                  title: "Checkout this commit"
                }, [...i[1] || (i[1] = [
                  e("svg", {
                    width: "12",
                    height: "12",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" })
                  ], -1)
                ])], 8, Et)
              ])
            ], 8, kt);
          }), 128))
        ]))
      ])
    ]));
  }
}), zt = /* @__PURE__ */ J(St, [["__scopeId", "data-v-3bb44122"]]), _e = [
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
  ...Array(12).fill(null).map((o, c) => ({
    name: `synced-workflow-${c + 1}.json`,
    status: "synced",
    missing_nodes: 0,
    missing_models: 0,
    node_count: 5 + c,
    model_count: 1 + c % 3,
    sync_state: "synced"
  }))
], Lt = {
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
}, ze = [
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
], Mt = [
  ...ze,
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
], It = [
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
], le = [
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
], x = {
  // Environment Management
  getEnvironments: async () => (await C(300), [
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
  switchEnvironment: async (o) => {
    await C(500), console.log(`[MOCK] Switching to environment: ${o}`);
  },
  createEnvironment: async (o, c, i) => {
    await C(1e3), console.log(`[MOCK] Creating environment: ${o} with backend ${c}`, i ? `cloned from ${i}` : "");
  },
  deleteEnvironment: async (o) => {
    await C(500), console.log(`[MOCK] Deleting environment: ${o}`);
  },
  // Workflow Management
  getWorkflows: async () => (await C(400), _e),
  getWorkflowDetails: async (o) => (await C(300), Lt[o] || {
    name: o,
    status: "synced",
    nodes: [],
    models: []
  }),
  /**
   * Resolve Workflow - Return resolution plan
   * Based on ResolutionResult structure (lines 1763-1788)
   */
  resolveWorkflow: async (o) => (await C(800), {
    workflow_name: o,
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
        workflow: o,
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
        workflow: o,
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
        workflow: o,
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
  installWorkflowDeps: async (o, c, i) => {
    await C(2e3), console.log(`[MOCK] Installing deps for ${o}: nodes=${c}, models=${i}`);
  },
  setModelImportance: async (o, c, i) => {
    await C(200), console.log(`[MOCK] Setting ${c} importance to ${i} in ${o}`);
  },
  // Model Management
  getEnvironmentModels: async () => (await C(350), ze),
  getWorkspaceModels: async () => (await C(400), Mt),
  updateModelSource: async (o, c) => {
    await C(300), console.log(`[MOCK] Updating source for ${o}: ${c}`);
  },
  deleteModel: async (o) => {
    await C(500), console.log(`[MOCK] Deleting model: ${o}`);
  },
  downloadModel: async (o) => {
    await C(3e3), console.log("[MOCK] Downloading model:", o);
  },
  // Settings & Debug
  getConfig: async () => (await C(200), {
    civitai_api_key: "",
    huggingface_token: "",
    models_path: "/workspace/models",
    auto_sync_models: !0
  }),
  updateConfig: async (o) => {
    await C(300), console.log("[MOCK] Updating config:", o);
  },
  getEnvironmentLogs: async (o, c) => (await C(250), (o ? le.filter((n) => n.level === o) : le).slice(0, c || 100)),
  getWorkspaceLogs: async (o, c) => {
    await C(300);
    const i = [...le, ...le.map((u) => ({
      ...u,
      context: { ...u.context, environment: "testing" }
    }))];
    return (o ? i.filter((u) => u.level === o) : i).slice(0, c || 100);
  },
  // Existing endpoints (from original implementation)
  /**
   * Get Environment Status - Matching ComfyGitStatus type
   * See frontend/src/types/comfygit.ts lines 22-32
   */
  getStatus: async () => (await C(400), {
    environment: "production",
    branch: "main",
    is_detached_head: !1,
    is_synced: !1,
    has_changes: !1,
    workflows: {
      new: ["img2img-basic.json", "controlnet-pose.json"],
      modified: ["flux-schnell.json"],
      deleted: [],
      synced: _e.filter((o) => o.status === "synced").map((o) => o.name),
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
  getCommitHistory: async (o = 10) => (await C(300), It.slice(0, o)),
  getBranches: async () => (await C(250), {
    branches: [
      { name: "main", is_current: !0 },
      { name: "develop", is_current: !1 },
      { name: "feature/new-nodes", is_current: !1 }
    ],
    current: "main"
  })
};
function C(o) {
  return new Promise((c) => setTimeout(c, o));
}
function ye() {
  const o = k(!1), c = k(null);
  async function i(g, w) {
    var ie;
    if (!((ie = window.app) != null && ie.api))
      throw new Error("ComfyUI API not available");
    const O = await window.app.api.fetchApi(g, w);
    if (!O.ok) {
      const ce = await O.json().catch(() => ({}));
      throw new Error(ce.error || ce.message || `Request failed: ${O.status}`);
    }
    return O.json();
  }
  async function n() {
    return x.getStatus();
  }
  async function u(g, w = !1) {
    return i("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: g, allow_issues: w })
    });
  }
  async function r(g = 10, w = 0) {
    {
      const O = await x.getCommitHistory(g);
      return {
        commits: O,
        total: O.length,
        offset: w
      };
    }
  }
  async function D(g) {
    return i("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: g })
    });
  }
  async function y() {
    return x.getBranches();
  }
  async function h(g) {
    return i(`/v2/comfygit/commit/${g}`);
  }
  async function E(g, w = !1) {
    return i("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: g, force: w })
    });
  }
  async function _(g, w = "HEAD") {
    return i("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: g, start_point: w })
    });
  }
  async function l(g, w = !1) {
    return i("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: g, force: w })
    });
  }
  async function N() {
    return x.getEnvironments();
  }
  async function L(g) {
    return x.switchEnvironment(g);
  }
  async function P() {
    return null;
  }
  async function b(g, w, O) {
    return await x.createEnvironment(g, w, O), { status: "success" };
  }
  async function te(g) {
    return await x.deleteEnvironment(g), { status: "success" };
  }
  async function Y() {
    return x.getWorkflows();
  }
  async function K(g) {
    return x.getWorkflowDetails(g);
  }
  async function H(g) {
    return x.resolveWorkflow(g);
  }
  async function v(g, w, O) {
    return await x.installWorkflowDeps(g, w, O), { status: "success" };
  }
  async function re(g, w, O) {
    return x.setModelImportance(g, w, O);
  }
  async function I() {
    return x.getEnvironmentModels();
  }
  async function S() {
    return x.getWorkspaceModels();
  }
  async function j(g, w) {
    return x.updateModelSource(g, w);
  }
  async function ge(g) {
    return x.deleteModel(g);
  }
  async function z(g) {
    return await x.downloadModel(g), { status: "success" };
  }
  async function G() {
    return x.getConfig();
  }
  async function ue(g) {
    return x.updateConfig(g);
  }
  async function q(g, w) {
    return x.getEnvironmentLogs(g, w);
  }
  async function he(g, w) {
    return x.getWorkspaceLogs(g, w);
  }
  return {
    isLoading: o,
    error: c,
    getStatus: n,
    commit: u,
    getHistory: r,
    exportEnv: D,
    // Git Operations
    getBranches: y,
    getCommitDetail: h,
    checkout: E,
    createBranch: _,
    switchBranch: l,
    // Environment Management
    getEnvironments: N,
    switchEnvironment: L,
    getSwitchProgress: P,
    createEnvironment: b,
    deleteEnvironment: te,
    // Workflow Management
    getWorkflows: Y,
    getWorkflowDetails: K,
    resolveWorkflow: H,
    installWorkflowDeps: v,
    setModelImportance: re,
    // Model Management
    getEnvironmentModels: I,
    getWorkspaceModels: S,
    updateModelSource: j,
    deleteModel: ge,
    downloadModel: z,
    // Settings
    getConfig: G,
    updateConfig: ue,
    // Debug/Logs
    getEnvironmentLogs: q,
    getWorkspaceLogs: he
  };
}
const Ot = { class: "modal-content" }, Tt = { class: "modal-header" }, Dt = { class: "commit-info" }, Nt = { class: "commit-hash" }, Bt = {
  key: 0,
  class: "commit-refs"
}, Rt = { class: "modal-body" }, Wt = { class: "commit-message" }, At = { class: "commit-date" }, Ut = {
  key: 0,
  class: "loading"
}, Pt = {
  key: 1,
  class: "changes-section"
}, Kt = { class: "stats-row" }, jt = { class: "stat" }, Gt = { class: "stat insertions" }, Vt = { class: "stat deletions" }, Ht = {
  key: 0,
  class: "change-group"
}, Ft = {
  key: 1,
  class: "change-group"
}, Zt = {
  key: 0,
  class: "version"
}, Xt = {
  key: 2,
  class: "change-group"
}, Jt = { class: "change-item" }, Yt = { class: "modal-footer" }, qt = /* @__PURE__ */ X({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(o) {
    const c = o, { getCommitDetail: i } = ye(), n = k(null), u = k(!0), r = V(() => {
      if (!n.value) return !1;
      const y = n.value.changes.workflows;
      return y.added.length > 0 || y.modified.length > 0 || y.deleted.length > 0;
    }), D = V(() => {
      if (!n.value) return !1;
      const y = n.value.changes.nodes;
      return y.added.length > 0 || y.removed.length > 0;
    });
    return Ce(async () => {
      try {
        n.value = await i(c.commit.hash);
      } finally {
        u.value = !1;
      }
    }), (y, h) => {
      var E, _, l, N, L, P;
      return s(), a("div", {
        class: "modal-overlay",
        onClick: h[3] || (h[3] = ee((b) => y.$emit("close"), ["self"]))
      }, [
        e("div", Ot, [
          e("div", Tt, [
            e("div", Dt, [
              e("span", Nt, d(((E = n.value) == null ? void 0 : E.short_hash) || o.commit.short_hash || ((_ = o.commit.hash) == null ? void 0 : _.slice(0, 7))), 1),
              (N = (l = n.value) == null ? void 0 : l.refs) != null && N.length ? (s(), a("span", Bt, [
                (s(!0), a(R, null, A(n.value.refs, (b) => (s(), a("span", {
                  key: b,
                  class: "ref-badge"
                }, d(b), 1))), 128))
              ])) : f("", !0)
            ]),
            e("button", {
              class: "close-btn",
              onClick: h[0] || (h[0] = (b) => y.$emit("close"))
            }, [...h[4] || (h[4] = [
              e("svg", {
                width: "14",
                height: "14",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])
          ]),
          e("div", Rt, [
            e("div", Wt, d(((L = n.value) == null ? void 0 : L.message) || o.commit.message), 1),
            e("div", At, d(((P = n.value) == null ? void 0 : P.date_relative) || o.commit.date_relative || o.commit.relative_date), 1),
            u.value ? (s(), a("div", Ut, "Loading details...")) : n.value ? (s(), a("div", Pt, [
              e("div", Kt, [
                e("span", jt, d(n.value.stats.files_changed) + " files", 1),
                e("span", Gt, "+" + d(n.value.stats.insertions), 1),
                e("span", Vt, "-" + d(n.value.stats.deletions), 1)
              ]),
              r.value ? (s(), a("div", Ht, [
                h[8] || (h[8] = e("h4", { class: "change-title" }, "Workflows", -1)),
                (s(!0), a(R, null, A(n.value.changes.workflows.added, (b) => (s(), a("div", {
                  key: "add-" + b,
                  class: "change-item added"
                }, [
                  h[5] || (h[5] = e("span", { class: "change-icon" }, "+", -1)),
                  e("span", null, d(b), 1)
                ]))), 128)),
                (s(!0), a(R, null, A(n.value.changes.workflows.modified, (b) => (s(), a("div", {
                  key: "mod-" + b,
                  class: "change-item modified"
                }, [
                  h[6] || (h[6] = e("span", { class: "change-icon" }, "~", -1)),
                  e("span", null, d(b), 1)
                ]))), 128)),
                (s(!0), a(R, null, A(n.value.changes.workflows.deleted, (b) => (s(), a("div", {
                  key: "del-" + b,
                  class: "change-item deleted"
                }, [
                  h[7] || (h[7] = e("span", { class: "change-icon" }, "-", -1)),
                  e("span", null, d(b), 1)
                ]))), 128))
              ])) : f("", !0),
              D.value ? (s(), a("div", Ft, [
                h[11] || (h[11] = e("h4", { class: "change-title" }, "Nodes", -1)),
                (s(!0), a(R, null, A(n.value.changes.nodes.added, (b) => (s(), a("div", {
                  key: "add-" + b.name,
                  class: "change-item added"
                }, [
                  h[9] || (h[9] = e("span", { class: "change-icon" }, "+", -1)),
                  e("span", null, d(b.name), 1),
                  b.version ? (s(), a("span", Zt, "(" + d(b.version) + ")", 1)) : f("", !0)
                ]))), 128)),
                (s(!0), a(R, null, A(n.value.changes.nodes.removed, (b) => (s(), a("div", {
                  key: "rem-" + b.name,
                  class: "change-item deleted"
                }, [
                  h[10] || (h[10] = e("span", { class: "change-icon" }, "-", -1)),
                  e("span", null, d(b.name), 1)
                ]))), 128))
              ])) : f("", !0),
              n.value.changes.models.resolved > 0 ? (s(), a("div", Xt, [
                h[13] || (h[13] = e("h4", { class: "change-title" }, "Models", -1)),
                e("div", Jt, [
                  h[12] || (h[12] = e("span", { class: "change-icon" }, "●", -1)),
                  e("span", null, d(n.value.changes.models.resolved) + " model(s) resolved", 1)
                ])
              ])) : f("", !0)
            ])) : f("", !0)
          ]),
          e("div", Yt, [
            e("button", {
              class: "action-btn secondary",
              onClick: h[1] || (h[1] = (b) => y.$emit("createBranch", o.commit))
            }, " Create Branch "),
            e("button", {
              class: "action-btn primary",
              onClick: h[2] || (h[2] = (b) => y.$emit("checkout", o.commit))
            }, " Checkout ")
          ])
        ])
      ]);
    };
  }
}), Qt = /* @__PURE__ */ J(qt, [["__scopeId", "data-v-9768f067"]]), eo = { class: "dialog-content" }, to = { class: "dialog-header" }, oo = { class: "dialog-title" }, so = { class: "dialog-body" }, ao = { class: "dialog-message" }, no = {
  key: 0,
  class: "dialog-details"
}, ro = {
  key: 1,
  class: "dialog-warning"
}, io = { class: "dialog-footer" }, co = /* @__PURE__ */ X({
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
    return (c, i) => (s(), a("div", {
      class: "dialog-overlay",
      onClick: i[3] || (i[3] = ee((n) => c.$emit("cancel"), ["self"]))
    }, [
      e("div", eo, [
        e("div", to, [
          e("h3", oo, d(o.title), 1)
        ]),
        e("div", so, [
          e("p", ao, d(o.message), 1),
          o.details && o.details.length ? (s(), a("div", no, [
            (s(!0), a(R, null, A(o.details, (n, u) => (s(), a("div", {
              key: u,
              class: "detail-item"
            }, " • " + d(n), 1))), 128))
          ])) : f("", !0),
          o.warning ? (s(), a("p", ro, [
            i[4] || (i[4] = e("span", { class: "warning-icon" }, "⚠", -1)),
            $e(" " + d(o.warning), 1)
          ])) : f("", !0)
        ]),
        e("div", io, [
          e("button", {
            class: "dialog-btn cancel",
            onClick: i[0] || (i[0] = (n) => c.$emit("cancel"))
          }, d(o.cancelLabel), 1),
          o.secondaryAction ? (s(), a("button", {
            key: 0,
            class: "dialog-btn secondary",
            onClick: i[1] || (i[1] = (n) => c.$emit("secondary"))
          }, d(o.secondaryLabel), 1)) : f("", !0),
          e("button", {
            class: $(["dialog-btn primary", { destructive: o.destructive }]),
            onClick: i[2] || (i[2] = (n) => c.$emit("confirm"))
          }, d(o.confirmLabel), 3)
        ])
      ])
    ]));
  }
}), lo = /* @__PURE__ */ J(co, [["__scopeId", "data-v-d24c6c0b"]]), mo = {
  class: "comfygit-panel",
  "data-comfygit-theme": "phosphor"
}, go = { class: "panel-header" }, uo = { class: "header-left" }, ho = {
  key: 0,
  class: "header-info"
}, po = { class: "env-name" }, fo = { class: "branch-name" }, vo = ["title"], yo = { class: "header-actions" }, bo = { class: "env-switcher" }, wo = { class: "panel-main" }, _o = { class: "sidebar" }, ko = { class: "sidebar-section" }, xo = { class: "sidebar-section" }, Co = { class: "sidebar-section" }, $o = { class: "content-area" }, Eo = {
  key: 0,
  class: "error-message"
}, So = {
  key: 1,
  class: "loading"
}, zo = {
  key: 1,
  class: "view-placeholder"
}, Lo = {
  key: 2,
  class: "view-placeholder"
}, Mo = {
  key: 5,
  class: "view-placeholder"
}, Io = {
  key: 6,
  class: "view-placeholder"
}, Oo = {
  key: 7,
  class: "view-placeholder"
}, To = {
  key: 8,
  class: "view-placeholder"
}, Do = {
  key: 9,
  class: "view-placeholder"
}, No = {
  key: 10,
  class: "view-placeholder"
}, Bo = {
  key: 11,
  class: "view-placeholder"
}, Ro = {
  key: 12,
  class: "view-placeholder"
}, Wo = {
  key: 13,
  class: "view-placeholder"
}, Ao = { class: "dialog-content env-selector-dialog" }, Uo = { class: "dialog-header" }, Po = { class: "dialog-body" }, Ko = { class: "env-list" }, jo = { class: "env-info" }, Go = { class: "env-name-row" }, Vo = { class: "env-indicator" }, Ho = { class: "env-name" }, Fo = {
  key: 0,
  class: "env-branch"
}, Zo = {
  key: 1,
  class: "current-label"
}, Xo = { class: "env-stats" }, Jo = ["onClick"], Yo = { class: "toast-container" }, qo = { class: "toast-icon" }, Qo = { class: "toast-message" }, es = /* @__PURE__ */ X({
  __name: "ComfyGitPanel",
  emits: ["close", "statusUpdate"],
  setup(o, { emit: c }) {
    const i = c, {
      getStatus: n,
      getHistory: u,
      exportEnv: r,
      getBranches: D,
      checkout: y,
      createBranch: h,
      switchBranch: E,
      getEnvironments: _
    } = ye(), l = k(null), N = k([]), L = k([]), P = k([]), b = V(() => P.value.find((m) => m.is_current)), te = k(!1), Y = k(null), K = k(null), H = k(!1), v = k("status"), re = k("this-env");
    function I(m, t) {
      v.value = m, re.value = t;
    }
    const S = k(null), j = k([]);
    let ge = 0;
    function z(m, t = "info", M = 3e3) {
      const T = ++ge;
      return j.value.push({ id: T, message: m, type: t }), M > 0 && setTimeout(() => {
        j.value = j.value.filter((F) => F.id !== T);
      }, M), T;
    }
    function G(m) {
      j.value = j.value.filter((t) => t.id !== m);
    }
    function ue(m) {
      switch (m) {
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
    const q = V(() => {
      if (!l.value) return "neutral";
      const m = l.value.workflows, t = m.new.length > 0 || m.modified.length > 0 || m.deleted.length > 0 || l.value.has_changes;
      return l.value.comparison.is_synced ? t ? "warning" : "success" : "error";
    }), he = V(() => l.value ? q.value === "success" ? "All synced" : q.value === "warning" ? "Uncommitted changes" : q.value === "error" ? "Not synced" : "" : "");
    async function g() {
      te.value = !0, Y.value = null;
      try {
        const [m, t, M, T] = await Promise.all([
          n(),
          u(),
          D(),
          _()
        ]);
        l.value = m, N.value = t.commits, L.value = M.branches, P.value = T, i("statusUpdate", m);
      } catch (m) {
        Y.value = m instanceof Error ? m.message : "Failed to load status", l.value = null, N.value = [], L.value = [];
      } finally {
        te.value = !1;
      }
    }
    function w(m) {
      K.value = m;
    }
    async function O(m) {
      var M;
      K.value = null;
      const t = l.value && (l.value.workflows.new.length > 0 || l.value.workflows.modified.length > 0 || l.value.workflows.deleted.length > 0 || l.value.has_changes);
      S.value = {
        title: t ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: t ? "You have uncommitted changes that will be lost." : `Checkout commit ${m.short_hash || ((M = m.hash) == null ? void 0 : M.slice(0, 7))}?`,
        details: t ? we() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: t ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: t,
        onConfirm: async () => {
          var oe;
          S.value = null;
          const T = z(`Checking out ${m.short_hash || ((oe = m.hash) == null ? void 0 : oe.slice(0, 7))}...`, "info", 0), F = await y(m.hash, t);
          G(T), F.status === "success" ? z("Restarting ComfyUI...", "success") : z(F.message || "Checkout failed", "error");
        }
      };
    }
    async function ie(m) {
      const t = l.value && (l.value.workflows.new.length > 0 || l.value.workflows.modified.length > 0 || l.value.workflows.deleted.length > 0 || l.value.has_changes);
      S.value = {
        title: t ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: t ? "You have uncommitted changes." : `Switch to branch "${m}"?`,
        details: t ? we() : void 0,
        warning: t ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: t ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          S.value = null;
          const M = z(`Switching to ${m}...`, "info", 0), T = await E(m, t);
          G(M), T.status === "success" ? z("Restarting ComfyUI...", "success") : z(T.message || "Branch switch failed", "error");
        }
      };
    }
    async function ce(m) {
      const t = z(`Creating branch ${m}...`, "info", 0), M = await h(m);
      G(t), M.status === "success" ? (z(`Branch "${m}" created`, "success"), await g()) : z(M.message || "Failed to create branch", "error");
    }
    async function Me(m) {
      K.value = null;
      const t = prompt("Enter branch name:");
      if (t) {
        const M = z(`Creating branch ${t}...`, "info", 0), T = await h(t, m.hash);
        G(M), T.status === "success" ? (z(`Branch "${t}" created from ${m.short_hash}`, "success"), await g()) : z(T.message || "Failed to create branch", "error");
      }
    }
    async function Ie(m) {
      H.value = !1, z("Environment switching not yet implemented", "warning");
    }
    function we() {
      if (!l.value) return [];
      const m = [], t = l.value.workflows;
      return t.new.length && m.push(`${t.new.length} new workflow(s)`), t.modified.length && m.push(`${t.modified.length} modified workflow(s)`), t.deleted.length && m.push(`${t.deleted.length} deleted workflow(s)`), m;
    }
    async function Oe() {
      const m = z("Exporting environment...", "info", 0);
      try {
        const t = await r();
        G(m), t.status === "success" ? (z("Export complete", "success"), alert(`Export successful!

Saved to: ${t.path}

Models without sources: ${t.models_without_sources}`)) : (z("Export failed", "error"), alert(`Export failed: ${t.message}`));
      } catch (t) {
        G(m), z("Export error", "error"), alert(`Export error: ${t instanceof Error ? t.message : "Unknown error"}`);
      }
    }
    return Ce(g), (m, t) => {
      var M, T, F, oe;
      return s(), a("div", mo, [
        e("div", go, [
          e("div", uo, [
            t[20] || (t[20] = e("h2", { class: "panel-title" }, "ComfyGit", -1)),
            l.value ? (s(), a("div", ho, [
              e("span", po, d(((M = b.value) == null ? void 0 : M.name) || l.value.environment), 1),
              e("span", fo, d(l.value.branch || "detached"), 1),
              e("span", {
                class: $(["status-dot", q.value]),
                title: he.value
              }, null, 10, vo)
            ])) : f("", !0)
          ]),
          e("div", yo, [
            e("button", {
              class: $(["icon-btn", { spinning: te.value }]),
              onClick: g,
              title: "Refresh"
            }, [...t[21] || (t[21] = [
              e("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M13.65 2.35a8 8 0 1 0 1.4 9.65h-2.25a5.75 5.75 0 1 1-1-6.45L9.5 8H16V1.5l-2.35 2.35z" })
              ], -1)
            ])], 2),
            e("button", {
              class: "icon-btn",
              onClick: t[0] || (t[0] = (p) => i("close")),
              title: "Close"
            }, [...t[22] || (t[22] = [
              e("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                e("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])
          ])
        ]),
        e("div", bo, [
          t[24] || (t[24] = e("div", { class: "env-switcher-label" }, "/* CURRENT ENVIRONMENT */", -1)),
          e("button", {
            class: "env-switcher-btn",
            onClick: t[1] || (t[1] = (p) => H.value = !0)
          }, [
            e("span", null, d(((T = b.value) == null ? void 0 : T.name) || ((F = l.value) == null ? void 0 : F.environment) || "Loading..."), 1),
            t[23] || (t[23] = e("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        e("div", wo, [
          e("div", _o, [
            e("div", ko, [
              t[25] || (t[25] = e("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
              e("button", {
                class: $(["sidebar-item", { active: v.value === "status" && re.value === "this-env" }]),
                onClick: t[2] || (t[2] = (p) => I("status", "this-env"))
              }, " STATUS ", 2),
              e("button", {
                class: $(["sidebar-item", { active: v.value === "workflows" }]),
                onClick: t[3] || (t[3] = (p) => I("workflows", "this-env"))
              }, " WORKFLOWS ", 2),
              e("button", {
                class: $(["sidebar-item", { active: v.value === "models-env" }]),
                onClick: t[4] || (t[4] = (p) => I("models-env", "this-env"))
              }, " MODELS ", 2),
              e("button", {
                class: $(["sidebar-item", { active: v.value === "branches" }]),
                onClick: t[5] || (t[5] = (p) => I("branches", "this-env"))
              }, " BRANCHES ", 2),
              e("button", {
                class: $(["sidebar-item", { active: v.value === "history" }]),
                onClick: t[6] || (t[6] = (p) => I("history", "this-env"))
              }, " HISTORY ", 2),
              e("button", {
                class: $(["sidebar-item", { active: v.value === "nodes" }]),
                onClick: t[7] || (t[7] = (p) => I("nodes", "this-env"))
              }, " NODES ", 2),
              e("button", {
                class: $(["sidebar-item", { active: v.value === "debug-env" }]),
                onClick: t[8] || (t[8] = (p) => I("debug-env", "this-env"))
              }, " DEBUG ", 2)
            ]),
            t[28] || (t[28] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", xo, [
              t[26] || (t[26] = e("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
              e("button", {
                class: $(["sidebar-item", { active: v.value === "environments" }]),
                onClick: t[9] || (t[9] = (p) => I("environments", "all-envs"))
              }, " ENVIRONMENTS ", 2),
              e("button", {
                class: $(["sidebar-item", { active: v.value === "model-index" }]),
                onClick: t[10] || (t[10] = (p) => I("model-index", "all-envs"))
              }, " MODEL INDEX ", 2),
              e("button", {
                class: $(["sidebar-item", { active: v.value === "settings" }]),
                onClick: t[11] || (t[11] = (p) => I("settings", "all-envs"))
              }, " SETTINGS ", 2),
              e("button", {
                class: $(["sidebar-item", { active: v.value === "debug-workspace" }]),
                onClick: t[12] || (t[12] = (p) => I("debug-workspace", "all-envs"))
              }, " DEBUG ", 2)
            ]),
            t[29] || (t[29] = e("div", { class: "sidebar-divider" }, null, -1)),
            e("div", Co, [
              t[27] || (t[27] = e("div", { class: "sidebar-section-title" }, "SHARING", -1)),
              e("button", {
                class: $(["sidebar-item", { active: v.value === "export" }]),
                onClick: t[13] || (t[13] = (p) => I("export", "sharing"))
              }, " EXPORT ", 2),
              e("button", {
                class: $(["sidebar-item", { active: v.value === "import" }]),
                onClick: t[14] || (t[14] = (p) => I("import", "sharing"))
              }, " IMPORT ", 2),
              e("button", {
                class: $(["sidebar-item", { active: v.value === "remotes" }]),
                onClick: t[15] || (t[15] = (p) => I("remotes", "sharing"))
              }, " REMOTES ", 2)
            ])
          ]),
          e("div", $o, [
            Y.value ? (s(), a("div", Eo, d(Y.value), 1)) : !l.value && v.value === "status" ? (s(), a("div", So, " Loading status... ")) : (s(), a(R, { key: 2 }, [
              v.value === "status" ? (s(), se(at, {
                key: 0,
                status: l.value
              }, null, 8, ["status"])) : v.value === "workflows" ? (s(), a("div", zo, [...t[30] || (t[30] = [
                e("h3", { class: "view-title" }, "WORKFLOWS", -1),
                e("p", null, "Workflow management UI coming soon...", -1)
              ])])) : v.value === "models-env" ? (s(), a("div", Lo, [...t[31] || (t[31] = [
                e("h3", { class: "view-title" }, "MODELS (THIS ENVIRONMENT)", -1),
                e("p", null, "Environment-scoped model view coming soon...", -1)
              ])])) : v.value === "branches" ? (s(), se(vt, {
                key: 3,
                branches: L.value,
                current: ((oe = l.value) == null ? void 0 : oe.branch) || null,
                onSwitch: ie,
                onCreate: ce
              }, null, 8, ["branches", "current"])) : v.value === "history" ? (s(), se(zt, {
                key: 4,
                commits: N.value,
                onSelect: w,
                onCheckout: O
              }, null, 8, ["commits"])) : v.value === "nodes" ? (s(), a("div", Mo, [...t[32] || (t[32] = [
                e("h3", { class: "view-title" }, "NODES (GIT-TRACKED)", -1),
                e("p", null, "Git-tracked nodes view coming soon...", -1)
              ])])) : v.value === "debug-env" ? (s(), a("div", Io, [...t[33] || (t[33] = [
                e("h3", { class: "view-title" }, "DEBUG (ENVIRONMENT LOGS)", -1),
                e("p", null, "Environment logs view coming soon...", -1)
              ])])) : v.value === "environments" ? (s(), a("div", Oo, [...t[34] || (t[34] = [
                e("h3", { class: "view-title" }, "ENVIRONMENTS", -1),
                e("p", null, "Environment management UI coming soon...", -1)
              ])])) : v.value === "model-index" ? (s(), a("div", To, [...t[35] || (t[35] = [
                e("h3", { class: "view-title" }, "MODEL INDEX (WORKSPACE)", -1),
                e("p", null, "Workspace-wide model index coming soon...", -1)
              ])])) : v.value === "settings" ? (s(), a("div", Do, [...t[36] || (t[36] = [
                e("h3", { class: "view-title" }, "SETTINGS", -1),
                e("p", null, "Settings UI coming soon...", -1)
              ])])) : v.value === "debug-workspace" ? (s(), a("div", No, [...t[37] || (t[37] = [
                e("h3", { class: "view-title" }, "DEBUG (WORKSPACE LOGS)", -1),
                e("p", null, "Workspace logs view coming soon...", -1)
              ])])) : v.value === "export" ? (s(), a("div", Bo, [
                t[39] || (t[39] = e("h3", { class: "view-title" }, "EXPORT", -1)),
                e("button", {
                  class: "export-btn",
                  onClick: Oe
                }, [...t[38] || (t[38] = [
                  e("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    e("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    e("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  $e(" EXPORT ENVIRONMENT ", -1)
                ])])
              ])) : v.value === "import" ? (s(), a("div", Ro, [...t[40] || (t[40] = [
                e("h3", { class: "view-title" }, "IMPORT", -1),
                e("p", null, "Import UI coming soon...", -1)
              ])])) : v.value === "remotes" ? (s(), a("div", Wo, [...t[41] || (t[41] = [
                e("h3", { class: "view-title" }, "REMOTES", -1),
                e("p", null, "Git remotes UI coming soon...", -1)
              ])])) : f("", !0)
            ], 64))
          ])
        ]),
        K.value ? (s(), se(Qt, {
          key: 0,
          commit: K.value,
          onClose: t[16] || (t[16] = (p) => K.value = null),
          onCheckout: O,
          onCreateBranch: Me
        }, null, 8, ["commit"])) : f("", !0),
        S.value ? (s(), se(lo, {
          key: 1,
          title: S.value.title,
          message: S.value.message,
          details: S.value.details,
          warning: S.value.warning,
          confirmLabel: S.value.confirmLabel,
          cancelLabel: S.value.cancelLabel,
          secondaryLabel: S.value.secondaryLabel,
          secondaryAction: S.value.secondaryAction,
          destructive: S.value.destructive,
          onConfirm: S.value.onConfirm,
          onCancel: t[17] || (t[17] = (p) => S.value = null),
          onSecondary: S.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : f("", !0),
        H.value ? (s(), a("div", {
          key: 2,
          class: "dialog-overlay",
          onClick: t[19] || (t[19] = ee((p) => H.value = !1, ["self"]))
        }, [
          e("div", Ao, [
            e("div", Uo, [
              t[43] || (t[43] = e("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              e("button", {
                class: "icon-btn",
                onClick: t[18] || (t[18] = (p) => H.value = !1)
              }, [...t[42] || (t[42] = [
                e("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  e("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
                ], -1)
              ])])
            ]),
            e("div", Po, [
              t[44] || (t[44] = e("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              e("div", Ko, [
                (s(!0), a(R, null, A(P.value, (p) => (s(), a("div", {
                  key: p.name,
                  class: $(["env-item", { current: p.is_current }])
                }, [
                  e("div", jo, [
                    e("div", Go, [
                      e("span", Vo, d(p.is_current ? "●" : "○"), 1),
                      e("span", Ho, d(p.name), 1),
                      p.current_branch ? (s(), a("span", Fo, "(" + d(p.current_branch) + ")", 1)) : f("", !0),
                      p.is_current ? (s(), a("span", Zo, "CURRENT")) : f("", !0)
                    ]),
                    e("div", Xo, d(p.workflow_count) + " workflows • " + d(p.node_count) + " nodes ", 1)
                  ]),
                  p.is_current ? f("", !0) : (s(), a("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: ($s) => Ie(p.name)
                  }, " SWITCH ", 8, Jo))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : f("", !0),
        e("div", Yo, [
          De(Ne, { name: "toast" }, {
            default: Be(() => [
              (s(!0), a(R, null, A(j.value, (p) => (s(), a("div", {
                key: p.id,
                class: $(["toast", p.type])
              }, [
                e("span", qo, d(ue(p.type)), 1),
                e("span", Qo, d(p.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), ts = /* @__PURE__ */ J(es, [["__scopeId", "data-v-e44f9af6"]]), os = { class: "commit-popover" }, ss = { class: "popover-content" }, as = {
  key: 0,
  class: "changes-summary"
}, ns = {
  key: 0,
  class: "change-item"
}, rs = {
  key: 1,
  class: "change-item"
}, is = {
  key: 2,
  class: "change-item"
}, cs = {
  key: 3,
  class: "change-item"
}, ls = {
  key: 4,
  class: "change-item"
}, ds = {
  key: 1,
  class: "no-changes"
}, ms = {
  key: 2,
  class: "loading"
}, gs = { class: "message-section" }, us = ["placeholder", "disabled", "onKeydown"], hs = { class: "popover-footer" }, ps = ["disabled"], fs = /* @__PURE__ */ X({
  __name: "CommitPopover",
  props: {
    status: {}
  },
  emits: ["close", "committed"],
  setup(o, { emit: c }) {
    const i = o, n = c, { commit: u } = ye(), r = k(""), D = k(!1), y = k(null), h = V(() => {
      if (!i.status) return !1;
      const _ = i.status.workflows;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || i.status.has_changes;
    });
    async function E() {
      var _, l, N;
      if (!(!h.value || !r.value.trim() || D.value)) {
        D.value = !0, y.value = null;
        try {
          const L = await u(r.value.trim());
          L.status === "success" ? (y.value = {
            type: "success",
            message: `Committed: ${((_ = L.summary) == null ? void 0 : _.new) || 0} new, ${((l = L.summary) == null ? void 0 : l.modified) || 0} modified, ${((N = L.summary) == null ? void 0 : N.deleted) || 0} deleted`
          }, r.value = "", setTimeout(() => n("committed"), 1e3)) : L.status === "no_changes" ? y.value = { type: "error", message: "No changes to commit" } : y.value = { type: "error", message: L.message || "Commit failed" };
        } catch (L) {
          y.value = { type: "error", message: L instanceof Error ? L.message : "Commit failed" };
        } finally {
          D.value = !1;
        }
      }
    }
    return (_, l) => (s(), a("div", os, [
      l[7] || (l[7] = e("div", { class: "popover-header" }, [
        e("h3", { class: "popover-title" }, "Commit Changes")
      ], -1)),
      e("div", ss, [
        o.status && h.value ? (s(), a("div", as, [
          o.status.workflows.new.length ? (s(), a("div", ns, [
            l[2] || (l[2] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, d(o.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : f("", !0),
          o.status.workflows.modified.length ? (s(), a("div", rs, [
            l[3] || (l[3] = e("span", { class: "change-icon modified" }, "~", -1)),
            e("span", null, d(o.status.workflows.modified.length) + " modified", 1)
          ])) : f("", !0),
          o.status.workflows.deleted.length ? (s(), a("div", is, [
            l[4] || (l[4] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, d(o.status.workflows.deleted.length) + " deleted", 1)
          ])) : f("", !0),
          o.status.git_changes.nodes_added.length ? (s(), a("div", cs, [
            l[5] || (l[5] = e("span", { class: "change-icon new" }, "+", -1)),
            e("span", null, d(o.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : f("", !0),
          o.status.git_changes.nodes_removed.length ? (s(), a("div", ls, [
            l[6] || (l[6] = e("span", { class: "change-icon deleted" }, "-", -1)),
            e("span", null, d(o.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : f("", !0)
        ])) : o.status ? (s(), a("div", ds, " No changes to commit ")) : (s(), a("div", ms, " Loading... ")),
        e("div", gs, [
          ke(e("textarea", {
            "onUpdate:modelValue": l[0] || (l[0] = (N) => r.value = N),
            class: "commit-input",
            placeholder: h.value ? "Describe your changes..." : "No changes",
            disabled: !h.value || D.value,
            rows: "3",
            onKeydown: [
              de(ee(E, ["ctrl"]), ["enter"]),
              de(ee(E, ["meta"]), ["enter"])
            ]
          }, null, 40, us), [
            [xe, r.value]
          ])
        ]),
        y.value ? (s(), a("div", {
          key: 3,
          class: $(["result", y.value.type])
        }, d(y.value.message), 3)) : f("", !0)
      ]),
      e("div", hs, [
        e("button", {
          class: "cancel-btn",
          onClick: l[1] || (l[1] = (N) => n("close"))
        }, "Cancel"),
        e("button", {
          class: "commit-btn",
          disabled: !h.value || !r.value.trim() || D.value,
          onClick: E
        }, d(D.value ? "Committing..." : "Commit"), 9, ps)
      ])
    ]));
  }
}), vs = /* @__PURE__ */ J(fs, [["__scopeId", "data-v-940bff74"]]), ys = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 12px;--cg-font-size-sm: 14px;--cg-font-size-base: 17px;--cg-font-size-lg: 20px;--cg-font-size-xl: 24px;--cg-font-size-2xl: 28px;--cg-panel-width: 754px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-header{background:var(--cg-color-bg-tertiary);border-bottom:1px solid var(--cg-color-border);padding:var(--cg-space-3) var(--cg-space-4)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:cursor-blink 1s step-end infinite}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-icon{font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}';
let Z = null;
function bs() {
  return "phosphor";
}
function ws(o = "phosphor") {
  Z && Z.remove(), Z = document.createElement("style"), Z.id = "comfygit-theme-styles", Z.setAttribute("data-theme", "phosphor"), Z.textContent = ys, document.head.appendChild(Z), document.body.setAttribute("data-comfygit-theme", "phosphor"), console.log("[ComfyGit] Applied theme: phosphor");
}
const be = document.createElement("link");
be.rel = "stylesheet";
be.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(be);
const _s = bs();
ws(_s);
let W = null, B = null, ne = null;
const Q = k(null);
async function ve() {
  var o;
  if (!((o = window.app) != null && o.api)) return null;
  try {
    const c = await window.app.api.fetchApi("/v2/comfygit/status");
    c.ok && (Q.value = await c.json());
  } catch {
  }
}
function ks() {
  if (!Q.value) return !1;
  const o = Q.value.workflows;
  return o.new.length > 0 || o.modified.length > 0 || o.deleted.length > 0 || Q.value.has_changes;
}
function xs() {
  W && W.remove(), W = document.createElement("div"), W.className = "comfygit-panel-overlay";
  const o = document.createElement("div");
  o.className = "comfygit-panel-container", W.appendChild(o), W.addEventListener("click", (n) => {
    n.target === W && fe();
  });
  const c = (n) => {
    n.key === "Escape" && (fe(), document.removeEventListener("keydown", c));
  };
  document.addEventListener("keydown", c), Ee({
    render: () => Se(ts, {
      onClose: fe,
      onStatusUpdate: (n) => {
        Q.value = n, me();
      }
    })
  }).mount(o), document.body.appendChild(W);
}
function fe() {
  W && (W.remove(), W = null);
}
function Cs(o) {
  ae(), B = document.createElement("div"), B.className = "comfygit-commit-popover-container";
  const c = o.getBoundingClientRect();
  B.style.position = "fixed", B.style.top = `${c.bottom + 8}px`, B.style.right = `${window.innerWidth - c.right}px`, B.style.zIndex = "10001";
  const i = (u) => {
    B && !B.contains(u.target) && u.target !== o && (ae(), document.removeEventListener("mousedown", i));
  };
  setTimeout(() => document.addEventListener("mousedown", i), 0);
  const n = (u) => {
    u.key === "Escape" && (ae(), document.removeEventListener("keydown", n));
  };
  document.addEventListener("keydown", n), ne = Ee({
    render: () => Se(vs, {
      status: Q.value,
      onClose: ae,
      onCommitted: () => {
        ae(), ve().then(me);
      }
    })
  }), ne.mount(B), document.body.appendChild(B);
}
function ae() {
  ne && (ne.unmount(), ne = null), B && (B.remove(), B = null);
}
let U = null;
function me() {
  if (!U) return;
  const o = U.querySelector(".commit-indicator");
  o && (o.style.display = ks() ? "block" : "none");
}
const Le = document.createElement("style");
Le.textContent = `
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
document.head.appendChild(Le);
pe.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var i, n;
    const o = document.createElement("div");
    o.className = "comfygit-btn-group";
    const c = document.createElement("button");
    c.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", c.textContent = "ComfyGit", c.title = "ComfyGit Control Panel", c.onclick = xs, U = document.createElement("button"), U.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", U.innerHTML = 'Commit <span class="commit-indicator"></span>', U.title = "Quick Commit", U.onclick = () => Cs(U), o.appendChild(c), o.appendChild(U), (n = (i = pe.menu) == null ? void 0 : i.settingsGroup) != null && n.element && (pe.menu.settingsGroup.element.before(o), console.log("[ComfyGit] Control Panel buttons added to toolbar")), await ve(), me(), setInterval(async () => {
      await ve(), me();
    }, 3e4);
  }
});
