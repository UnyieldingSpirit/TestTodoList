<template>
  <div>
    <NoteCardTodo v-for="note of notes" :key="note" :note="note" />

  </div>
</template>

<script setup lang="ts">
import NoteCardTodo from './NoteCardTodo.vue';
import { notes } from '@/modules/variables';

</script>


<style scoped></style>
