<script setup lang="ts" generic="T">
type ValFunction<X> = (val: X) => any

const { value, columns } = defineProps<{
  value: T
  columns: {
    header: string
    field?: string
    valFunction?: ValFunction
  }[]
}>()
</script>

<template>
  <ClientOnly>
    <table>
      <tr key="header-column">
        <th v-for="(col) in columns" :key="`${col.header}1190`">
          {{ col.header }}
        </th>
      </tr>
      <tr v-for="(item, index) in value" :key="index + 125">
        <td v-for="(col, i) in columns" :key="i + 493849">
          {{ col.valFunction ? col.valFunction(item) : item[col.field] }}
        </td>
      </tr>
    </table>
  </ClientOnly>
</template>
