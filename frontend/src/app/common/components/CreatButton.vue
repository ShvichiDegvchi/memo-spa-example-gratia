<docs></docs>

<template>
  <button
    v-ripple
    type="button"
    aria-label="新規メモを追加する"
    @click="$store.dispatch('appModal', true)"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      width="24"
      viewBox="0 0 24 24"
      fill="#fff"
      aria-hidden="true"
    >
      <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z" />
    </svg>
  </button>
</template>

<script>
export default {
  name: '',
  title: '',
  components: {},
  filter: {},
  props: {},
  data: function() {
    return {};
  },
  computed: {},
  watch: {},
  beforeCreate: function() {},
  created: function() {},
  beforeMount: function() {},
  mounted: function() {
    this.$nextTick(function() {});
  },
  beforeUpdate: function() {},
  updated: function() {},
  activated: function() {},
  deactivated: function() {},
  beforeDestroy: function() {},
  destroyed: function() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
@use "sass:math";
button {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: #232f3e;
  color: #fff;
  width: 5.6rem;
  height: 5.6rem;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(#000, 0);

  svg {
    display: block;
    width: 50%;
    height: 50%;
  }
}
</style>
