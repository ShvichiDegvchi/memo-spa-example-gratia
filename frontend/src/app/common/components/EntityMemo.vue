<docs></docs>

<template>
  <div class="entity-memo">
    <header>
      <input
        v-if="$data.focused.input"
        v-model.trim="_memos[0].heading"
        @blur="$data.focused.input = !$data.focused.input"
        type="text"
      >
      <h1
        v-if="!$data.focused.input"
        v-html="_memos[0].heading"
        @focus="$data.focused.input = !$data.focused.input"
        tabindex="0"
      />
    </header>
    <div>
      <div class="entity-memo__context">
        <textarea
          v-if="$data.focused.textarea"
          v-model.trim="_memos[0].context"
          :rows="$mq !== 's' ? 14 : 5"
          @blur="$data.focused.textarea = !$data.focused.textarea"
        />
        <div
          v-if="!$data.focused.textarea"
        >
          <p
            v-html="_memos[0].context.replace(/\n/g,'<br>')"
            @focus="$data.focused.textarea = !$data.focused.textarea"
            tabindex="0"
          />
        </div>
      </div>
    </div>
    <footer>
      <transition name="fade">
        <i
          v-if="_memos[0].bookmark"
          aria-hidden="true"
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" fill="#ee4e22" aria-hidden="true">
            <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" />
          </svg>
        </i>
      </transition>

      <button
        v-ripple
        :class="_memos[0].bookmark ? 'this-invert' : null"
        class="entity-memo__btn--bookmark"
        type="button"
        @click="bookmark"
      >
        <span>Bookmark</span>
      </button>

      <button
        v-ripple
        class="entity-memo__btn--remove"
        type="button"
        @click="remove"
      >
        <span>Remove</span>
      </button>

      <button
        v-ripple
        type="button"
        class="entity-memo__btn--save"
        @click="save"
      >
        <span>Save</span>
      </button>
    </footer>
  </div>
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
  },
  data: function() {
    return {
      focused: {
        input: false,
        textarea: false,
      },
    };
  },
  computed: {
    _memos: {
      get: function() {
        return this.$store.getters.memos.filter((obj) => {
          return obj.id === this.$props.id;
        });
      },
      set :function() {},
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
  methods: {
    bookmark: function() {
      this.$store.dispatch('save', {
        id: this.$props.id,
        heading: this._memos[0].heading,
        datetime: this.$dayjs().valueOf(),
        context: this._memos[0].context,
        bookmark: this._memos[0].bookmark = !this._memos[0].bookmark,
      });
    },
    remove: function() {
      this.$store.dispatch('remove', {
        id: this.$props.id,
      });

      // Return to Toppage
      this.$router.push('/');
    },
    save: function() {
      this.$store.dispatch('save', {
        id: this.$props.id,
        heading: this._memos[0].heading,
        datetime: this.$dayjs().valueOf(),
        context: this._memos[0].context,
        bookmark: this._memos[0].bookmark,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@use "sass:math";

.entity-memo {
  overflow: hidden;
  position: relative;
  margin: 0 auto;
  width: min(100%, 76.8rem);
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

    h1 {
      font-size: 2.8rem;
      font-family: kokuryu, sans-serif;
      line-height: 1.2;

      &:empty {
        min-height: 5.8rem;
        border: .1rem solid #ddd;
        border-radius: .4rem;
        background-color: #f5f5f5;
      }
    }
  }

  > div {
    overflow-y: auto;
    padding: clamp(1.2rem, percentage(math.div(12, 320)), 2.4rem);

    p {
      font-family: kokuryu, sans-serif;

      &:empty {
        min-height: 5.8rem;
        border: .1rem solid #ddd;
        border-radius: .4rem;
        background-color: #f5f5f5;
      }
    }
  }

  input, textarea {
    display: inherit;
    padding: 1.2rem;
    width: 100%;
    border-radius: .4rem;
    transition: background-color .5s cubic-bezier(.075, .82, .165, 1);

    &:focus {
      font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
      border: .1rem solid #ddd;
      background-color: #f5f5f5;
    }
  }

  textarea {
    resize: vertical;
  }

  footer {
    display: flex;
    justify-content: flex-end;
    padding: clamp(1.2rem, percentage(math.div(12, 320)), 2.4rem);
    border-top: .1rem solid #ddd;
    background-color: #fff;

    i {
      flex-grow: 1;
      flex-basis: auto;

      svg {
        display: block;
        width: 2.4rem;
        height: 2.4rem;
      }
    }

    button {
      flex-shrink: 0;
      flex-basis: auto;
      padding: 0 1.6rem;

      border-radius: .3rem;
      touch-action: manipulation;
      -webkit-tap-highlight-color: rgba(#000, 0);
      transition: background-color .5s cubic-bezier(.165, .84, .44, 1), color .5s cubic-bezier(.165, .84, .44, 1);

      @media (max-width: 640px) {
        font-size: 1.2rem;
      }


      &.entity-memo__btn--bookmark {
        background-color: var(--tangerine);
        color: #fff;

        &.this-invert {
          background-color: #fff;
          color: var(--tangerine);
        }
      }

      &.entity-memo__btn--remove {
        background-color: #424242;
        color: #fff;
      }

      &.entity-memo__btn--save {
        &:disabled {
          background-color: lighten(#00a171, 34%);
          color: lighten(#00a171, 40%);
        }

        &:not([disabled]) {
          background-color: #00a171;
          color: #fff;
        }
      }

      &:not([disabled]) {
        box-shadow: 0 #{math.div(1, 10)}rem #{math.div(3, 10)}rem rgba(#000, .12), 0 #{math.div(1, 10)}rem #{math.div(2, 10)}rem rgba(#000, .24);
        cursor: pointer;
      }

      + button {
        margin-left: .8rem;
      }
    }
  }
}
</style>
