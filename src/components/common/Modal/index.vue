<template>
    <div class="modal" :class="{ 'modal--open': open }" :style="`--zIndex: ${zIndex}`">
        <div v-if="!withoutHeader" class="modal__head">
            <div class="modal__title">{{ title }}</div>
            <div class="modal__closer" @click="emit('close')">
                <Icon name="mdi:window-close" />
            </div>
        </div>

        <div class="modal__body">
            <slot />
        </div>

        <div v-if="!withoutFooter" class="modal__footer">
            <Button @click="emit('ok')">Отмена</Button>
            <Button @click="emit('cancel')" variant="primary">OK</Button>
        </div>
    </div>

    <div v-if="!withoutMask" class="modal-mask" :class="{ 'modal-mask--open': open }" :style="`--zIndex: ${zIndex}`"
        @click="maskClosable && emit('close')"></div>
</template>

<script setup lang="ts">
// Vue
import { toRefs, watchEffect } from 'vue';
// Component
import Button from '~/components/common/Button/index.vue';

const emit = defineEmits(['ok', 'cancel', 'close']);

defineOptions({name: 'Modal'});

const props = defineProps({
    open: {
        type: Boolean,
        required: true,
    },
    disableScroll: {
        type: Boolean,
        default: true
    },
    title: {
        type: String,
        default: 'Title'
    },
    withoutHeader: {
        type: Boolean,
        default: false
    },
    withoutFooter: {
        type: Boolean,
        default: false
    },
    withoutMask: {
        type: Boolean,
        default: false
    },
    maskClosable: {
        type: Boolean,
        default: true
    },
    zIndex: {
        type: Number,
        default: 150,
    }
});

const { open, disableScroll, withoutHeader, withoutFooter, withoutMask, maskClosable, zIndex } = toRefs(props);

watchEffect(() => {
    if (disableScroll.value) {
        document.body.style.overflow = open.value ? 'hidden' : 'hidden auto';
    }
});
</script>

<style scoped lang="scss">
@import "~/assets/style/mixins.scss";

.modal {
    width: 400px;
    max-width: calc(100% - 16px);
    padding: 12px 20px;
    border: 1px solid var(--c-border);
    background: #fff;
    box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05);

    opacity: 0;
    transform-origin: left bottom;
    transform: translate(-50%, calc(-100% + 16px));
    transition: opacity var(--transition), transform var(--transition);
    @include positioned($position: fixed, $top: 50%, $left: 50%, $zIndex: var(--zIndex));
    @include flex($direction: column, $gap: 16px);

    &--open {
        opacity: 1;
        transform: translate(-50%, -100%);
    }

    &__head {
        width: 100%;
        @include flex($justifyContent: space-between, $alignItems: center);
    }

    &__body {
        width: 100%;
    }

    &__footer {
        width: 100%;
        @include flex($justifyContent: flex-end, $alignItems: center, $gap: 8px);
    }

    &__title {
        font-weight: 500;
        font-size: 20px;
    }

    &__closer {
        cursor: pointer;
    }
}

.modal-mask {
    width: 100%;
    min-width: 100dvw;
    height: 100%;
    min-height: 100dvh;
    background: rgba(0, 0, 0, 0.45);
    opacity: 0;
    transition: opacity var(--transition);
    pointer-events: none;
    @include positioned($top: 0, $left: 0, $zIndex: calc(var(--zIndex) - 1));

    &--open {
        opacity: 1;
        pointer-events: auto;
    }
}
</style>