<template>
  <div class="sidenav-container">
    <div v-if="show" class="sidenav-backdrop" @click="$emit('close')"></div>
    <transition name="slide-side">
      <div v-if="show" class="sidenav">
        <div class="nav-list" @click="$emit('close')">
          <div class="nav-item">
            
                <p>FastFood</p>
          </div>

          <div class="nav-item">
            <p>FastFood</p>
          </div>
          



        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "BottomNav",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  }
};
</script>


<style scoped>
 /* .sidenav-container {
  height: 100%;
  width: 100%;
} */


.sidenav-backdrop {
  width: 100%;
  height: 100%;
  background-color: yellow;
  /* z-index: 1000; */
  position: fixed;
  /* top: 0;
  left: 0; */
}

.sidenav {
  height: 100%;
  width: 300px;
  background-color: white;
  z-index: 10000;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 30px;
}

.slide-side-enter-active,
.slide-side-leave-active {
  transition: 1s all;
}
.slide-side-enter,
.slide-side-leave-to {
  transform: translateY(100%);
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  margin: 20px 0;
}

.nav-item a {
  text-decoration: none;
  color: yellow;
  font-size: 1.5rem;
}

.nav-item a:hover,
.nav-item a:active {
  color: #073b5e;
  font-weight: bold;
} 


</style>
