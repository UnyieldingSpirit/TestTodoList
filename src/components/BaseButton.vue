<template>
  <div class="button">
    <slot></slot>
  </div>
</template>


<style scoped>
.button {
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  padding: 10px;
  color: white;
  border-radius: 6px;
  transition: 0.3 linear;
}

.button:hover {
  background: #3a608c;
}
</style>
