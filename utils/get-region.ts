export default function (license: string) {
  if (license.startsWith('KB'))
    return 'Kalimantan Barat'
  if (license.startsWith('AA'))
    return 'Temanggung'
  if (license.startsWith('B'))
    return 'Jakarta'
  if (license.startsWith('AD'))
    return 'Surakarta'
  return 'Tidak diketahui'
}
