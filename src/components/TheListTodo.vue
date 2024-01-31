<template>
  <div>
    <NoteCard v-for="note of notes" :key="note" :note="note" />
  </div>
</template>

<script setup lang="ts">
import NoteCard from './NoteCard.vue';
import { notes } from '@/modules/variables';
</script>


<style scoped></style>
