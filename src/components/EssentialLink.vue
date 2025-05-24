<template>
  <q-item clickable tag="a" @click="navigateTo(path)">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

async function navigateTo(path: string) {
  if (path.startsWith('http')) {
    window.open(path);
    return;
  }
  await router.push({ path: path });
}

export interface EssentialLinkProps {
  title: string;
  caption?: string;
  link?: string;
  icon?: string;
  path: string;
}

withDefaults(defineProps<EssentialLinkProps>(), {
  caption: '',
  link: '#',
  icon: '',
  path: '',
});
</script>
