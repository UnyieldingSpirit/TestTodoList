<template>
  <div>
    <div class="common-layout">
      <el-container>
        <el-aside width="200px">
          <SidebarToSide />
        </el-aside>
        <el-container>
          <el-header>
            <NavbarTodo />
          </el-header>
          <el-main>
            <router-view />
          </el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { notes } from './modules/variables';

onMounted(() => {
  try {
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.value = storedNotes;
  } catch (error) {
    console.error('Error while retrieving notes from local storage:', error);
  }
});

</script>

<style scoped>
.el-aside {
  background: #1d3043;
  height: 100vh;
  color: azure;
  padding: 20px;
}

.el-main {
  background: #18222c;
}

.el-header {
  background: #213d5b;
  padding: 20px 10px;
  color: azure;
}
</style>
