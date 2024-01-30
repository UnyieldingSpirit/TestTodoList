<template>
    <div class="header">
        Test TODO
        <el-icon>
            <Tickets />
        </el-icon>
    </div>
</template>

<script setup lang="ts">
import { Tickets } from '@element-plus/icons-vue'
</script>

<style scoped>
.header {
    display: flex;
    align-items: center;
    gap: 10px;
}
</style>