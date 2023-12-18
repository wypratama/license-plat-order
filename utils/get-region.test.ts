import { describe, expect, it } from 'vitest'

import getRegion from './get-region'

describe('getRegion', () => {
  it('returns the correct region for a given license', () => {
    expect(getRegion('KB 1234 XYZ')).toBe('Kalimantan Barat')
    expect(getRegion('AA 5678 ABC')).toBe('Temanggung')
    expect(getRegion('B 9101 DEF')).toBe('Jakarta')
    expect(getRegion('AD 2345 GHI')).toBe('Surakarta')
  })

  it('returns "Tidak diketahui" for an unknown region code', () => {
    expect(getRegion('ZZ 9999 XYZ')).toBe('Tidak diketahui')
  })

  it('handles cases with no space in the input', () => {
    expect(getRegion('KB1234XYZ')).toBe('Tidak diketahui')
  })
})
