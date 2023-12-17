<script setup lang="ts">
const { data, pending, error } = useLazyFetch('/api/license', { key: '/api/license' })

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

const mostFrequentLicence = ref<string | null>(null)

function getMostFrequentInfo() {
  if (!data.value) return false
  const value = getMostFrequentLicense(data.value)
  mostFrequentLicence.value = value
}
</script>

<template>
  <div>
    <h1>License Plate Information</h1>
    <div v-if="pending">
      loading data..
    </div>
    <div v-else-if="error">
      error getting data. reason: {{ error.message }}
    </div>
    <div v-else>
      <LisenceTable :value="data" :columns="columns" />
    </div>

    <div>
      <h2>Most Frequent License Plate</h2>
      <button @click="getMostFrequentInfo">
        get info
      </button>
      <span>{{ mostFrequentLicence }}</span>
    </div>
  </div>
</template>
