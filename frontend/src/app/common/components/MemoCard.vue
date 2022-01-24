<docs></docs>

<template>
  <a
    v-ripple
    class="memo-standalone"
    rel="bookmark"
    @click="$router.push('memo')"
  >
    <header
      class="memo-standalone__header"
    >
      <h2 v-text="$props.heading" />
    </header>
    <div class="memo-standalone__meta">
      <time :datetime="$dayjs($props.datetime).format()" v-text="$dayjs($props.datetime).format(`YYYY/MM/DD HH:mm:ss`)" />
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
  </a>
</template>

<script>
export default {
  name: '',
  title: '',
  components: {},
  filter: {},
  props: {
    'bookmark': {
      type: Boolean,
      default: false,
    },
    'href': {
      type: String,
      default: null,
    },
    'heading': {
      type: String,
      default: '見出し見出し見出し見出し見出し見出し見出し見出し見出し見出し見出し見出し見出し見出し見出し見出し見出し見出し見出し見出し見出し見出し見出し見出し見出し見出し見出し見出し見出し見出し',
    },
    'datetime': {
      type: String,
      default: '2022-01-20T19:00:00+09:00',
    },
    'context': {
      type: String,
      default: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
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

    time {
      display: inline-block;
      padding: .4rem 1.2rem;
      max-width: 100%;
      vertical-align: middle;
      border-radius: 10rem;
      background-color: #ee4e22;
      color: #fff;
      line-height: 1;
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
