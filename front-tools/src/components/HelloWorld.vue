<template>
  <div class="text-6xl font-semibold">Hello, World!</div>

  <div class="h-14">
    <div v-if="isLoading"><span class="loading loading-ball loading-lg"></span></div>

    <div v-else-if="isConnected" role="alert" class="alert alert-success font-semibold text-zinc-800">
      <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span>Successfully connected to the API server!</span>
    </div>

    <div v-else role="alert" class="alert alert-error font-semibold text-zinc-800">
      <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span>Error! Couldn't connect to the server.</span>
    </div>

  </div>
</template>

<script>
import API from '@/api'

export default {
  name: 'HelloWorld',
  data() {
    return {
      isLoading: false,
      isConnected: false,
    }
  },
  created() {
    this.isLoading = true
    this.isConnected = false
    API.get('/').then(() => {
      this.isConnected = true
    }).catch(() => {
      this.isLoading = false
    })
  }
}
</script>