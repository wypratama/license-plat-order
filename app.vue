<script setup lang="ts">
const { data } = useLazyFetch('/api/license', { key: '/api/license' })

const columns = [
  {
    header: 'NOPOL',
    field: 'nopol',
  },
  {
    header: 'WILAYAH',
    valFunction: (val: { nopol: string }) => getRegion(val.nopol),
  },
]

function getRegion(license: string) {
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
</script>

<template>
  <div>
    <div v-if="data">
      <LisenceTable :value="data" :columns="columns" />
    </div>
  </div>
</template>
