/**
 * Environment creation constants
 *
 * These values are used in the create environment form.
 * Update these arrays when new versions become available.
 */

export const PYTHON_VERSIONS = [
  '3.12',
  '3.11',
  '3.10',
  '3.13',
] as const

export const DEFAULT_PYTHON_VERSION = '3.12'

/**
 * PyTorch backends supported by uv
 * 'auto' detects GPU automatically
 * Ordered with most common options first
 */
export const TORCH_BACKENDS = [
  // Auto-detect
  'auto',
  // CPU only
  'cpu',
  // CUDA (newest first)
  'cu129',
  'cu128',
  'cu126',
  'cu125',
  'cu124',
  'cu123',
  'cu122',
  'cu121',
  'cu120',
  'cu118',
  'cu117',
  'cu116',
  'cu115',
  'cu114',
  'cu113',
  'cu112',
  'cu111',
  'cu110',
  'cu102',
  'cu101',
  'cu100',
  'cu92',
  'cu91',
  'cu90',
  'cu80',
  // ROCm (AMD)
  'rocm6.3',
  'rocm6.2.4',
  'rocm6.2',
  'rocm6.1',
  'rocm6.0',
  'rocm5.7',
  'rocm5.6',
  'rocm5.5',
  'rocm5.4.2',
  'rocm5.4',
  'rocm5.3',
  'rocm5.2',
  'rocm5.1.1',
  'rocm4.2',
  'rocm4.1',
  'rocm4.0.1',
  // Intel
  'xpu',
] as const

export const DEFAULT_TORCH_BACKEND = 'auto'

export type PythonVersion = typeof PYTHON_VERSIONS[number]
export type TorchBackend = typeof TORCH_BACKENDS[number]
