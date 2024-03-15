<template>
  <div class="text-6xl font-semibold">Hello, World!</div>

  <div class="h-14">
    <div v-if="isLoading"><span class="loading loading-ball loading-lg"></span></div>

    <div v-else-if="isConnected" role="alert" class="alert alert-success font-semibold text-zinc-800">
      <vue-feather type="check-circle" class="w-6 h-6 mr-2" />
      <span>Successfully connected to the API server!</span>
    </div>

    <div v-else role="alert" class="alert alert-error font-semibold text-zinc-800">
      <vue-feather type="x-circle" class="w-6 h-6 mr-2" />
      <span>Error! Couldn't connect to the server.</span>
    </div>
  </div>

  <button v-if="!isLoading" class="btn btn-ghost no-animation btn-accent" @click="checkConnection">
    <vue-feather type="refresh-cw" class="w-6 h-6 mr-2" size="1.2rem" />
    <span class="btn-text">Check Connection</span>
  </button>
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
    this.checkConnection();
  },
  methods: {
    checkConnection() {
      this.isLoading = true
      this.isConnected = false
      API.get('/api/').then(() => {
        this.isConnected = true
      }).finally(() => {
        this.isLoading = false
      })
    }
  }
}
</script>