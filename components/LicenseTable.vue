<script setup lang="ts" generic="T extends Record<string, any>">
const { value, columns } = defineProps<{
  value: T[]
  columns: {
    header: string
    field?: string
    valFunction?: (val: any) => any
  }[]
}>()
</script>

<template>
  <table class="w-full text-md text-left text-gray-500">
    <thead class="text-md text-gray-700 uppercase bg-gray-50">
      <tr key="header-column">
        <th v-for="(col) in columns" :key="`${col.header}1190`" scope="col" class="py-3 px-6 text-center">
          {{ col.header }}
        </th>
      </tr>
    </thead>
    <tbody class="text-blue-gray-900">
      <tr v-for="(item, index) in value" :key="`${String(index)}125`" class="bg-white border-b">
        <td v-for="(col, i) in columns" :key="i + 493849" class="py-4 px-6">
          {{ col.valFunction ? col.valFunction(item) : item[col.field!] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
