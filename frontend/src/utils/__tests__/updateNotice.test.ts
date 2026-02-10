import { describe, it, expect, beforeEach } from 'vitest'
import { dismissVersion, shouldShowUpdateNotice, DISMISSED_VERSION_KEY } from '../updateNotice'

describe('updateNotice', () => {
  beforeEach(() => {
    localStorage.removeItem(DISMISSED_VERSION_KEY)
  })

  it('returns false when info is null', () => {
    expect(shouldShowUpdateNotice(null)).toBe(false)
  })

  it('returns false when update_available is false', () => {
    expect(shouldShowUpdateNotice({
      current_version: '0.0.20',
      latest_version: '0.0.21',
      update_available: false,
      release_url: 'https://example.com',
      changelog_summary: null,
      checked_at: null
    })).toBe(false)
  })

  it('returns true when update_available and not dismissed', () => {
    expect(shouldShowUpdateNotice({
      current_version: '0.0.20',
      latest_version: '0.0.21',
      update_available: true,
      release_url: 'https://example.com',
      changelog_summary: 'hi',
      checked_at: '2026-02-10T00:00:00Z'
    })).toBe(true)
  })

  it('returns false when latest_version is dismissed', () => {
    dismissVersion('0.0.21')
    expect(shouldShowUpdateNotice({
      current_version: '0.0.20',
      latest_version: '0.0.21',
      update_available: true,
      release_url: 'https://example.com',
      changelog_summary: null,
      checked_at: null
    })).toBe(false)
  })
})

