<template>
  <q-page class="flex flex-center">
    <q-card class="q-pa-lg" style="width: 95%; height: 500px; overflow: auto">
      <div class="row justify-end">
        <q-btn
          @click="getData()"
          color="primary"
          :no-caps="true"
          :loading="productsStore.isFetchingData"
        >
          Fetch Data
        </q-btn>
      </div>
      <q-table
        style="min-height: 230px"
        :loading="productsStore.isFetchingData"
        no-data-label="There are no products"
        no-results-label="No products found"
        :rows-per-page-options="[10, 30, 50]"
        rows-per-page-label="Rows per page"
        title="Products List"
        class="q-mt-lg"
        :rows="productsStore.products"
        :columns="tableColumns"
        :filter="filter"
      >
        <template v-slot:top-right>
          <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>
      </q-table>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { useProductsStore } from '../store/Index';
import type { Product } from '../../domain/entities/Product';
import { ref } from 'vue';
const productsStore = useProductsStore();

const filter = ref('');

const tableColumns = [
  {
    name: 'name',
    label: 'Name',
    field: (product: Product) => product.name,
    align: 'center' as const,
    sortable: true,
  },
  {
    name: 'calories',
    label: 'Calories',
    field: (product: Product) => product.calories,
    align: 'center' as const,
    sortable: true,
  },
  {
    name: 'fat',
    label: 'Fat (g)',
    field: (product: Product) => product.fat,
    align: 'center' as const,
    sortable: true,
  },
  {
    name: 'carbs',
    label: 'Carbs (g)',
    field: (product: Product) => product.carbs,
    align: 'center' as const,
    sortable: true,
  },
  {
    name: 'protein',
    label: 'Protein (g)',
    field: (product: Product) => product.protein,
    align: 'center' as const,
    sortable: true,
  },
];

async function getData() {
  await productsStore.getProducts();
}
</script>
