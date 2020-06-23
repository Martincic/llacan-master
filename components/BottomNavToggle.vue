<template>
  <div class="drawer-toggle" role="button" @click="$emit('toggle')">
    <div class="bar"></div>
    <div class="bar"></div>
   
  </div>
</template>

<style scoped>
.drawer-toggle {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 200px;
  width: 500px;
  cursor: pointer;
}
/* 
@media (min-width: 768px) {
  .drawer-toggle {
    display: none;
  }
} */

.drawer-toggle .bar {
  width: 90%;
  height: 20px;
  background-color: white;
}
</style>
