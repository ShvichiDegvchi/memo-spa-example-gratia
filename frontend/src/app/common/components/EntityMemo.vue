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
            v-html="_memos[0].context"
            @focus="$data.focused.textarea = !$data.focused.textarea"
            tabindex="0"
          />
        </div>
      </div>
    </div>
    <footer>
      <button
        v-ripple
        class="entity-memo__btn--bookmark"
        type="button"
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
      bookmark: false,
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
    this.$nextTick(function() {
      // console.log(this._memos[0]);
    });
  },
  beforeUpdate: function() {},
  updated: function() {},
  activated: function() {},
  deactivated: function() {},
  beforeDestroy: function() {},
  destroyed: function() {},
  methods: {
    bookmarking: function() {
      console.log('bookmark');
    },
    remove: function() {
      console.log('Remove');

      this.$store.dispatch('remove', {
        id: this.$props.id,
        heading: this._memos[0].heading,
        datetime: this.$dayjs().format(),
        context: this._memos[0].context,
        bookmark: this.$data.bookmark,
      });
    },
    save: function() {
      this.$store.dispatch('save', {
        id: this.$props.id,
        heading: this._memos[0].heading,
        datetime: this.$dayjs().format(),
        context: this._memos[0].context,
        bookmark: this.$data.bookmark,
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
    }
  }

  > div {
    overflow-y: auto;
    padding: clamp(1.2rem, percentage(math.div(12, 320)), 2.4rem);

    p {
      font-family: kokuryu, sans-serif;
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

    button {
      padding: 0 1.6rem;

      border-radius: .3rem;
      touch-action: manipulation;
      -webkit-tap-highlight-color: rgba(#000, 0);

      &.entity-memo__btn--remove {
        background-color: #424242;
        color: #fff;
      }

      &.entity-memo__btn--save {
        &:disabled {
          background-color: lighten(#ee4e22, 34%);
          color: lighten(#ee4e22, 40%);
        }

        &:not([disabled]) {
          background-color: #ee4e22;
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
