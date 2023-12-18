import { describe, expect, it } from 'vitest'
import getMostFrequentNopol from './get-most-frequent-license'

describe('getMostFrequentNopol', () => {
  it('returns the most frequent nopol', () => {
    const testData = [
      { nopol: 'AA 1234 BB' },
      { nopol: 'CC 5678 DD' },
      { nopol: 'AA 1234 BB' },
      { nopol: 'EE 9101 FF' },
      { nopol: 'AA 1234 BB' },
    ]
    expect(getMostFrequentNopol(testData)).toBe('AA 1234 BB')
  })

  it('returns an empty string when data is empty', () => {
    expect(getMostFrequentNopol([])).toBe('')
  })

  it('returns "Data not found" when data is null', () => {
    expect(getMostFrequentNopol(null)).toBe('Data not found')
  })

  // Add more test cases as needed, for example, handling ties in frequency
})
