<template>
  <div class="justify-center container">
    <h1 class="text-2xl">Portfolio</h1>
    <p class="text-small bg-violet-400 text-white m-4">Works</p>
    <div class="flex flex-wrap flex-row items-center p-4">
      <Card
        v-for="(card, index) in cardItems"
        :key="index"
        :img-url="card.imgUrl"
        :title="card.title"
        :body="card.subtitle"
        :tags="card.tag"
      />
    </div>
    <div v-if="githubFetch !== null">{{ marked(githubFetch) }}</div>
  </div>
</template>

<script setup lang="ts">
  import { marked } from 'marked'
  const cardItems = [
    {
      imgUrl: 'https://pbs.twimg.com/media/FRlVuFzaUAIKMWJ?format=jpg',
      title: 'title',
      subtitle: 'subtitle',
      tag: ['github', 'nuxt', 'vue'],
    },
    {
      imgUrl:
        'https://pbs.twimg.com/profile_images/1377726964404908032/nHtGMU-X_400x400.jpg',
      title: 'title',
      subtitle:
        'subtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitlesubtitle',
      tag: ['github', 'nuxt', 'vue'],
    },
    // {
    //   imgUrl: 'https://pbs.twimg.com/media/FRlVuFzaUAIKMWJ?format=jpg',
    //   title: 'title',
    //   subtitle: 'subtitle',
    //   tag: ['github', 'nuxt', 'vue'],
    // },
  ]

  // github fetch\
  const headers = { Accept: 'application/vnd.github.v3+json' }
  interface GithubResponse {
    content: string
  }
  // eslint-disable-next-line no-undef
  const githubFetch = await $fetch<{ data: GithubResponse }>(
    'https://api.github.com/repos/harunonsystem/harunonsystem/contents/README.md',
    { headers }
  ).then(
    (response) => {
      if (!response || !response.data) {
        console.log(response.data)
        return null
      } else {
        return Buffer.from(response.data.content, 'base64')
      }
    },
    (error) => {
      throw new Error(error)
    }
  )
</script>
