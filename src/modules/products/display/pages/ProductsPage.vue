<template>
  <q-page class="flex flex-center">
    <div style="width: 90%">
      <q-table
        style="box-shadow: none !important"
        no-data-label="There are no products"
        no-results-label="No products found"
        :rows-per-page-options="[10, 30, 50]"
        rows-per-page-label="Rows per page"
        title="Products List"
        class="q-mt-lg"
        :rows="[]"
        :columns="tableColumns"
      />
    </div>
  </q-page>
</template>

<script setup lang="ts">
const tableColumns = [
  {
    name: 'name',
    required: true,
    label: 'Name',
    align: 'left' as const,
    field: 'name',
    sortable: true,
  },
  {
    name: 'calories',
    align: 'center' as const,
    label: 'Calories',
    field: 'calories',
    sortable: true,
  },
  { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
  { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
  { name: 'protein', label: 'Protein (g)', field: 'protein' },
];
</script>
