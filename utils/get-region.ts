const regionCodeMap: {
  [key: string]: string
} = {
  KB: 'Kalimantan Barat',
  AA: 'Temanggung',
  B: 'Jakarta',
  AD: 'Surakarta',
}

export default function (license: string) {
  const regionCode = license.split(' ')[0]
  return regionCodeMap[regionCode] || 'Tidak diketahui'
}
