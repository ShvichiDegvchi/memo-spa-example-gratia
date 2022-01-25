<docs></docs>

<template>
  <router-link
    v-ripple
    :to="`/memos/${$props.id}`"
    class="memo-standalone"
    rel="bookmark"
  >
    <header
      class="memo-standalone__header"
    >
      <h2 v-text="$props.heading" />
    </header>
    <div class="memo-standalone__meta">
      <span>
        <i aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <rect fill="none" height="24" width="24" />
            <path d="M11,8v5l4.25,2.52l0.77-1.28l-3.52-2.09V8H11z M21,10V3l-2.64,2.64C16.74,4.01,14.49,3,12,3c-4.97,0-9,4.03-9,9 s4.03,9,9,9s9-4.03,9-9h-2c0,3.86-3.14,7-7,7s-7-3.14-7-7s3.14-7,7-7c1.93,0,3.68,0.79,4.95,2.05L14,10H21z" />
          </svg>
        </i>
        <time :datetime="$dayjs($props.datetime).format()" v-text="$dayjs($props.datetime).format(`YYYY/MM/DD HH:mm:ss`)" />
      </span>
    </div>
    <div class="memo-standalone__context">
      <p v-html="$props.context" />
    </div>
    <div
      v-if="$props.bookmark"
      class="memo-standalone__bookmark"
    >
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" fill="#ee4e22" aria-hidden="true">
        <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" />
      </svg>
    </div>
  </router-link>
</template>

<script>
export default {
  name: '',
  title: '',
  components: {},
  filter: {},
  props: {
    'id': {
      type: String,
      required: true,
    },
    'bookmark': {
      type: Boolean,
      default: false,
    },
    'heading': {
      type: String,
      default: null,
    },
    'datetime': {
      type: String,
      default: null,
    },
    'context': {
      type: String,
      default: null,
    },
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

<style lang="scss" scoped>
@use "sass:math";

.memo-standalone {
  position: relative;
  display: block;
  padding: clamp(1.2rem, percentage(math.div(12, 320)), 2.4rem);
  width: fit-content;
  border-radius: .4rem;
  box-shadow: 0 #{math.div(1, 10)}rem #{math.div(3, 10)}rem rgba(#000, .12), 0 #{math.div(1, 10)}rem #{math.div(2, 10)}rem rgba(#000, .24);
  touch-action: manipulation;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(#000, 0);
  -webkit-touch-callout: none;

  &:only-child { height: 100%; }

  &__header {
    h2 {
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;

      font-size: 2.4rem;
      line-height: 1.2;
    }
  }

  &__meta {
    margin: .8rem auto .4rem;

    span {
      display: inline-flex;
      align-items: center;
      gap: 0 .4rem;
      padding: .4rem 1.2rem .4rem 1rem;
      max-width: 100%;
      vertical-align: middle;
      border-radius: 10rem;
      background-color: #ee4e22;
      color: #fff;
      line-height: 1;

      i {
        svg {
          display: block;
          width: 2rem;
          height: 2rem;
          fill: currentColor;
        }
      }

      time {
      }
    }
  }

  &__context {
    p {
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
    }
  }

  &__bookmark {
    svg {
      position: absolute;
      top: 0;
      left: 0;
      width: 2.4rem;
      height: 2.4rem;
      transform: translateY(-50%);
    }
  }
}
</style>
