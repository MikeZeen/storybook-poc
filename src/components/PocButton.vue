<template>
    <button 
        class="px-4 py-2 rounded-lg cursor-pointer" 
        :class="type == 'primary' ? 'bg-primary text-white hover:bg-primary-hover'  : 'bg-transparent text-primary border border-primary hover:text-primary-hover hover:border-primary-hover'" 
        @click="emit('click')">
        {{ label }}
    </button>
</template>

<script setup lang="ts">
const { label, type = 'secondary'} = defineProps<{
    label: string;
    type?: 'primary' | 'secondary';
}>();

const emit = defineEmits(['click']);
</script>