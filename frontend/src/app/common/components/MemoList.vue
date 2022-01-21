<docs></docs>

<template>
  <div
    v-if="$data.items.length"
    :class="$data.items.length === 1 ? 'memo-list--no-flex' : null"
    class="memo-list"
    role="list"
  >
    <div
      v-for="(item, i) in $data.items"
      :key="i"
      role="listitem"
    >
      <MemoCard
        :bookmark="item.bookmark"
        :href="item.href"
        :heading="item.heading"
        :datetime="item.datetime"
        :context="item.context"
      />
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
    return {
      items: [
        {
          bookmark: true,
          href: '/google/',
          heading: '見出し見出し見出し見出し見出し見出し見出し見出し見出し見出し見出し見出し見出し見出し見出し見出し見出し見出し見出し見出し見出し見出し見出し見出し見出し見出し見出し見出し見出し見出し',
          datetime: '2022-01-20T19:00:00+09:00',
          context: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
        },
        {
          href: '/google/',
          heading: 'あああ',
          datetime: '2022',
          context: 'ああああああああああ',
        },
        {
          href: '/google/',
          heading: 'あああ',
          datetime: '2022',
          context: 'ああああああああああ',
        },
        {
          href: '/google/',
          heading: 'あああ',
          datetime: '2022',
          context: 'ああああああああああ',
        },
        {
          href: '/google/',
          heading: 'あああ',
          datetime: '2022',
          context: 'ああああああああああ',
        },
        {
          href: '/google/',
          heading: 'あああ',
          datetime: '2022',
          context: 'ああああああああああ',
        },
      ],
    };
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
  errorCaptured(err, vm, info) {
    console.log(`【${vm}】: ${err.message}`);
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@use "sass:math";

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

    @media (max-width: 640px) {

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
</style>
