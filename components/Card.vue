<template>
  <div class="card lg:card-side bg-base-100 shadow-xl">
    <figure>
      <img :src="props.imgUrl" :alt="props.title" class="image-full" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ props.title }}</h2>
      <p class="break-all text-left pb-3">{{ props.body }}</p>
      <div class="card-actions justify-start">
        <div
          v-for="(item, index) in props.tags"
          :key="index"
          class="badge badge-outline"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    imgUrl: string
    title: string
    body: string
    tags: string[]
  }

  const props = withDefaults(defineProps<Props>(), {
    imgUrl:
      'https://pbs.twimg.com/profile_images/1517707279675830272/flRqEt01_400x400.png',
    title: 'Shoes',
    body: 'If a dog chews shoes whose shoes does he choose?',
    tags: () => ['shoes', 'dog', 'chew'],
  })
</script>
