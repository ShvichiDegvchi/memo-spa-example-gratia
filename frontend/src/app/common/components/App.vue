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

      <slot name="footer" />
    </div>

    <transition name="modal">
      <div
        v-if="_appModal"
        :aria-modal="_appModal ? _appModal : false"
        class="app__modal"
      >
        <div
          v-ripple
          @click="$store.dispatch('appModal', false)"
          role="presentation"
        />
        <div>
          <slot name="create-memo" />
        </div>
      </div>
    </transition>
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
  computed: {
    _appModal: function() {
      return this.$store.getters.appModal;
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
  > div {
    &:not(.app__modal) {
      display: grid;
      min-height: 100vh;
      grid-template-columns: 1fr;
      grid-template-rows: auto 1fr auto;
      gap: 0px 0px;
      grid-template-areas:
        "."
        "."
        ".";
    }
  }

  &__contents {
    margin: 0 auto;
    width: min(100%, 192rem);

    > div {
      padding: clamp(1.2rem, percentage(math.div(32, 1024)), 4rem);
    }
  }

  &__modal {
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;

    [role="presentation"] {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(#000, .72);
      backdrop-filter: blur(.4rem);
      cursor: pointer;
      touch-action: manipulation;
      -webkit-tap-highlight-color: rgba(#000, 0);
    }

    > div {
      &:not([role="presentation"]) {
        display: grid;
        place-items: center;
        padding: clamp(1.2rem, percentage(math.div(32, 1024)), 4rem);
        height: 100%;
      }
    }
  }
}

.modal-enter-active, .modal-leave-active {
  will-change: opacity;
  transition: opacity .5s cubic-bezier(.215, .61, .355, 1);

  ::v-deep .create-memo {
    will-change: opacity, transform;
    transition: opacity .5s cubic-bezier(.215, .61, .355, 1), transform .5s cubic-bezier(.175, .885, .32, 1.275);
  }
}

.modal-enter, .modal-leave-to {
  opacity: 0;

  ::v-deep .create-memo {
    opacity: 0;
    transform: translateY(25%);
  }
}
</style>
