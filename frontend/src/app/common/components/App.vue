<docs></docs>

<template>
  <div class="app">
    <div>
      <slot name="header" />

      <div class="app__contents">
        <div>
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  title: '',
  components: {},
  filter: {},
  props: {
  },
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

<style lang="scss">
/*! purgecss start ignore */
.v-ripple {
  &__container {
    color: inherit;
    border-radius: inherit;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    overflow: hidden;
    z-index: 0;
    pointer-events: none;
    contain: strict;
  }

  &__animation {
    color: inherit;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50%;
    background: currentColor;
    opacity: 0;
    pointer-events: none;
    overflow: hidden;
    will-change: transform, opacity;

    &--enter {
      transition: none;
    }

    &--in {
      transition: transform .25s cubic-bezier(.4, 0, .2, 1), opacity .1s cubic-bezier(.4, 0, .2, 1);
    }

    &--out {
      transition:opacity .3s cubic-bezier(.4, 0, .2, 1);
    }
  }
}
/*! purgecss end ignore */
</style>

<style lang="scss" scoped>
@use "sass:math";

.app {
  max-width: 100%;
  min-height: inherit;

  &__contents {
    margin: 0 auto;
    width: min(100%, 192rem);

    > div {
      padding: clamp(1.2rem, percentage(math.div(32, 1024)), 4rem);
    }
  }
}
</style>
