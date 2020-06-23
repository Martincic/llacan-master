<template>
  <button
    class="button"
    :class="btnStyle"
    v-bind="$attrs"
    v-on="$listeners"><slot /></button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    btnStyle: {
      type: String,
      default: ''
    }
  }
}
</script>


<style scoped>
  button.btn.order{
    position: absolute;
    border: 1px solid #070707;
    box-sizing: border-box;
    background: #ffffff;
    width: 220px;
    height: 44px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.1px;
} 
</style>
