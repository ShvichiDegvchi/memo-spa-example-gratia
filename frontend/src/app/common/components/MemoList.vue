<docs></docs>

<template>
  <div class="memo-list-wrapper">
    <div
      v-if="_memos.length"
      :class="_memos.length === 1 ? 'memo-list--no-flex' : null"
      class="memo-list"
      role="list"
    >
      <div
        v-for="(item, i) in _memos.slice()"
        :key="i"
        role="listitem"
      >
        <transition name="fade">
          <MemoCard
            :id="item.id"
            :bookmark="item.bookmark"
            :heading="item.heading"
            :datetime="item.datetime"
            :context="item.context"
          />
        </transition>
      </div>
    </div>
    <div
      v-else
      class="empty-memo"
    >
      <h1>No saved notes.🤔</h1>
    </div>
  </div>
</template>

<script>
import MemoCard from './MemoCard';

export default {
  name: '',
  title: '',
  components: {
    MemoCard,
  },
  filter: {},
  props: {
    'item': {
      type: Array,
      default: function() {
        return [];
      },
    },
  },
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

.memo-list-wrapper {
  height: inherit;
}
.memo-list {
  &:not(.memo-list--no-flex) {
    @media (min-width: 641px) {
      display: flex;
      flex-wrap: wrap;
    }

    @media (min-width: 1281px) {
      gap: 4rem percentage(math.div(40, 1920));
    }

    @media (max-width: 1280px) and (min-width: 845px) {
      gap: 4rem percentage(math.div(40, 1280));
    }

    @media (max-width: 844px) and (min-width: 641px) {
      gap: 3rem percentage(math.div(30, 844));
    }

    [role="listitem"] {
      @media (min-width: 1281px) {
        width: percentage(math.div(450, 1920));
      }

      @media (max-width: 1280px) and (min-width: 845px) {
        width: percentage(math.div(400, 1280));
      }

      @media (max-width: 844px) and (min-width: 641px) {
        width: percentage(math.div(407, 844));
      }

      + [role="listitem"] {
        @media (max-width: 640px) {
          margin-top: 1.6rem;
        }
      }
    }
  }

  .memo-standalone { width: 100%; }
}

.empty-memo {
  display: grid;
  place-items: center;
  height: inherit;

  h1 {
    font-size: 3rem;
  }
}
</style>
