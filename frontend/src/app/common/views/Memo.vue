<docs></docs>

<template>
  <div class="memo">
    <div class="memo__return-to-toppage">
      <router-link v-ripple to="/">
        <i aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
          </svg>
        </i>
        <span>Return to Toppage</span>
      </router-link>
    </div>
    <EntityMemo :id="$props.id" />
  </div>
</template>

<script>
import EntityMemo from '../components/EntityMemo';

export default {
  name: '',
  title: '',
  components: {
    EntityMemo,
  },
  filter: {},
  props: {
    'id': {
      type: String,
      required: true,
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

.memo {
  margin: 0 auto;
  width: min(100%, 76.8rem);

  &__return-to-toppage {
    margin-bottom: 1.6rem;

    a {
      display: inline-flex;
      align-items: center;
      gap: 0 .4rem;
      padding: 0 1.6rem 0 1rem;
      border-radius: 10rem;
      background-color: #f7a419;
      box-shadow: 0 #{math.div(1, 10)}rem #{math.div(3, 10)}rem rgba(#000, .12), 0 #{math.div(1, 10)}rem #{math.div(2, 10)}rem rgba(#000, .24);
      vertical-align: middle;
      color: #fff;

      i {
        svg {
          display: block;
          width: 2.4rem;
          height: 2.4rem;
          fill: currentColor;
        }
      }

      span {
        font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
      }
    }
  }
}
</style>
