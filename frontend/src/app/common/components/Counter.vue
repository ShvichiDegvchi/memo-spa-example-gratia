<docs></docs>

<template>
  <div class="counter">
    <div>
      <span>{{ _memos.length }}</span>
      <span>メモ</span>
    </div>
  </div>
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
  computed: {
    _memos: function() {
      return this.$store.getters.memos;
    },
  },
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
  errorCaptured(err, vm, info) {
    console.log(`【${vm}】: ${err.message}`);
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@use "sass:math";

.counter {
  display: grid;
  place-items: center;
  border-radius: 100%;
  background-color: #232f3e;
  color: #fff;
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;

  @media (min-width: 641px) {
    width: 5.6rem;
    height: 5.6rem;
  }

  @media (max-width: 640px) {
    width: 4.6rem;
    height: 4.6rem;
  }

  span {
    letter-spacing: -1pt;

    &:first-child {
      font-weight: 700;
      font-size: 2rem;
    }

    &:not(:first-child) {
      font-size: 1.2rem;
    }
  }
}
</style>
