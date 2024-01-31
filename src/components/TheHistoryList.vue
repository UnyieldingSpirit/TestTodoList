<template>
    <div>
        <HistoryCard v-for="histor of history" :key="histor" :histor="histor" />
    </div>
</template>

<script setup lang="ts">
import HistoryCard from './HistoryCard.vue';
import { history } from '../modules/variables'
</script>

<style scoped></style>