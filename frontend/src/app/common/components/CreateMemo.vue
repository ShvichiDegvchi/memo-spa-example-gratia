<docs></docs>

<template>
  <div
    v-scroll-lock="_appModal"
    class="create-memo"
  >
    <header>
      <h3>
        <i aria-hidden="hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#232f3e"
          >
            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
          </svg>
        </i>
        <span>
          <slot name="heading" />
        </span>
      </h3>
    </header>
    <div>
      <div class="create-memo__heading">
        <label>
          <span>Heading</span>
          <input
            v-model.trim="heading"
            @focus.once="$data.focused = true"
            type="text"
            placeholder="見出しを入力してください。"
          >
        </label>
      </div>
      <div class="create-memo__context">
        <label>
          <span>Notes</span>
          <textarea
            v-model.trim="context"
            :rows="$mq !== 's' ? 13 : 4"
            @focus.once="$data.focused = true"
            placeholder="本文を入力してください。"
          />
        </label>
      </div>
    </div>
    <footer>
      <button
        v-ripple
        :disabled="_invalid"
        type="button"
        @click="createMemo"
      >
        <span>
          <slot name="button" />
        </span>
      </button>
    </footer>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';

export default {
  name: '',
  title: '',
  components: {},
  filter: {},
  props: {},
  data: function() {
    return {
      heading: '',
      context: '',
    };
  },
  computed: {
    _appModal: function() {
      return this.$store.getters.appModal;
    },
    _memos: function() {
      return this.$store.getters.memos;
    },
    _invalid: function() {
      if (this.$data.heading === '' || this.$data.context === '') {
        return true;
      }
    }
  },
  watch: {},
  beforeCreate: function() {},
  created: function() {},
  beforeMount: function() {},
  mounted: function() {
    this.$nextTick(() => {
    });
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
  methods: {
    createMemo: function() {
      this.$store.dispatch('memos', {
        id: `memo-${this._uid}`,
        heading: this.$data.heading,
        context: this.$data.context,
        datetime: this.$dayjs().valueOf(),
        bookmark: false,
      });

      this.$store.dispatch('appModal', false);
    },
  },
};
</script>

<style lang="scss" scoped>
@use "sass:math";

.create-memo {
  overflow: hidden;
  position: relative;
  width: min(100%, 52rem);
  height: 100%;
  border-radius: .4rem;
  background-color: #fff;
  box-shadow: 0 #{math.div(1, 10)}rem #{math.div(3, 10)}rem rgba(#000, .12), 0 #{math.div(1, 10)}rem #{math.div(2, 10)}rem rgba(#000, .24);
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 0px 0px;
  grid-template-areas:
    "."
    "."
    ".";

  @media (min-width: 641px) {
    max-height: 84.4rem;
  }

  @media (max-width: 640px) {
    max-height: 51.8rem;
  }

  header {
    padding: clamp(1.2rem, percentage(math.div(12, 320)), 2.4rem);
    border-bottom: .1rem solid #ddd;
    background-color: #fff;

    h3 {
      color: #232f3e;
      font-weight: 700;
      font-size: 2.4rem;

      display: flex;
      align-items: center;
      gap: 0 .8rem;

      i {
        svg {
          display: block;
          width: 3rem;
          height: 3rem;
        }
      }
    }
  }

  > div {
    overflow-y: auto;
    padding: clamp(1.2rem, percentage(math.div(12, 320)), 2.4rem);

    > div {
      + div {
        margin-top: 2.4rem;
      }

      label {
        display: inherit;

        span, input, textarea {
          display: inherit;
        }

        span {
          color: #232f3e;
          font-weight: 700;
          font-style: italic;
        }

        input, textarea {
          padding: 1.2rem;
          width: 100%;
          border: .1rem solid #ddd;
          border-radius: .4rem;
          background-color: #f5f5f5;
          transition: background-color .5s cubic-bezier(.075, .82, .165, 1);

          &:focus {
            background-color: #fafafa;
          }

          &:-ms-input-placeholder {
            color: #aaa;
          }

          &::-ms-input-placeholder {
            color: #aaa;
          }

          &::placeholder {
            color: #aaa;
          }
        }

        textarea {
          resize: vertical;
        }
      }
    }
  }

  footer {
    display: flex;
    justify-content: flex-end;
    padding: clamp(1.2rem, percentage(math.div(12, 320)), 2.4rem);
    border-top: .1rem solid #ddd;
    background-color: #fff;

    button {
      padding: 0 1.6rem;

      border-radius: .3rem;
      touch-action: manipulation;
      -webkit-tap-highlight-color: rgba(#000, 0);

      &:disabled {
        background-color: lighten(#ee4e22, 34%);
        color: lighten(#ee4e22, 40%);
      }

      &:not([disabled]) {
        box-shadow: 0 #{math.div(1, 10)}rem #{math.div(3, 10)}rem rgba(#000, .12), 0 #{math.div(1, 10)}rem #{math.div(2, 10)}rem rgba(#000, .24);
        background-color: var(--tangerine);
        color: #fff;
        cursor: pointer;
      }
    }
  }
}
</style>
