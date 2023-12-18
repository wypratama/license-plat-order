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
  const value = getMostFrequentLicense(data.value)
  mostFrequentLicence.value = value
}

const onModal = ref(false)

function onOpenModal() {
  getMostFrequentInfo()
  onModal.value = true
}

function onCloseModal() {
  onModal.value = false
  mostFrequentLicence.value = null
}
</script>

<template>
  <div class="flex flex-col justify-center items-center bg-gray-200 h-screen">
    <h1 class="text-2xl mb-8">
      License Plate Number Information
    </h1>

    <div class="w-full max-w-3xl">
      <Loading v-if="pending" />
      <Error v-else-if="error" :error="error" />
      <div v-else-if="data" class="overflow-x-auto relative shadow-md sm:rounded-lg">
        <LicenseTable :value="data" :columns="columns" />
      </div>
    </div>

    <button
      class="mt-8 flex items-center justify-center px-4 font-medium bg-green-700 text-white h-9 rounded-md rounded md hover:bg-green-800 transition-all duration-300"
      @click="onOpenModal"
    >
      Get Most Frequent License Number
    </button>

    <Modal v-if="onModal" :most-frequent="mostFrequentLicence" @close="onCloseModal" />
  </div>
</template>
