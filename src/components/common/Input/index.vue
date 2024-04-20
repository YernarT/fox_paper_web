<template>
  <div class="input-wrap">
    <Icon v-if="prefixIcon" :name="prefixIcon" />
    <input
      v-model="model"
      :type="type"
      :placeholder="placeholder"
      @blur="emit('blur')"
      @focus="emit('focus')"
    />
    <Icon v-if="affixIcon" :name="affixIcon" />
  </div>
</template>

<script setup lang="ts">
// Vue
import { toRefs } from "vue";

defineOptions({ name: "Input" });

const model = defineModel<string>("value");

const emit = defineEmits<{
  (event: "blur"): void;
  (event: "focus"): void;
}>();

const props = defineProps({
  prefixIcon: {
    type: String,
    default: "",
  },
  affixIcon: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    default: "",
  },
});

const { prefixIcon, affixIcon, type } = toRefs(props);
</script>

<style scoped lang="scss">
@import "~/assets/style/mixins.scss";

.input-wrap {
  height: 32px;
  padding: 2px;
  border-bottom: 1px solid var(--c-border);
  @include flex($alignItems: center, $gap: 4px);

  input {
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
  }
}
</style>
