<template>
  <div class="alert shadow-lg" :class="props.type">
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="stroke-current flex-shrink-0 w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>{{ props.message }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    message: string
    type: string
  }

  const props = withDefaults(defineProps<Props>(), {
    message: 'Hello World!',
    type: 'alert-info',
  })
</script>
