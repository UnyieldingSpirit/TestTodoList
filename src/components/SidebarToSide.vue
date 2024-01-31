<template>
    <div class="sidebar">
        <div class="sidebar__user">
            <el-avatar :size="50" :src="circleUrl" />
            User
        </div>
        <div class="sidebar__menu" v-for="router in routers" :key="router">
            <router-link :to="router.path">
                <base-button class="sidebar__menu_button">
                    <component :is="router.icon" class="sidebar__menu_button-icon"></component>
                    {{ router.name }}
                </base-button>
            </router-link>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs } from 'vue'
import BaseButton from './BaseButton.vue';


import { routers } from '@/modules/routers';
const state = reactive({
    circleUrl: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png',
})
const { circleUrl } = toRefs(state)
</script>

<style scoped>
.sidebar {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 10px;
}
.sidebar__menu_button-icon {
    width: 20px;
    height: 20px;
}

.sidebar__user {
    display: flex;
    align-items: center;
    gap: 10px;
}

.sidebar__menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
}

.sidebar__menu_button {
    display: flex;
    align-items: center;
    gap: 10px;
}

.router-link-active {
    background: #3a608c;
    border-radius: 6px;
}
</style>
  

  