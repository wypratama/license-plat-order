export default function (data: { nopol: string }[]) {
  const frequency: { [key: string]: number } = {}
  let maxFreq = 0
  let mostFrequent = ''

  data.forEach((v) => {
    frequency[v.nopol] = (frequency[v.nopol] || 0) + 1
    if (frequency[v.nopol] > maxFreq) {
      maxFreq = frequency[v.nopol]
      mostFrequent = v.nopol
    }
  })

  return mostFrequent
}
