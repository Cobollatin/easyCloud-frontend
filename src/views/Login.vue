<template>
  <v-container>
    <div>login prueba</div>
    <div>{{ message }}</div>
  </v-container>
</template>

<script>
  export default {
    name: 'Login',
    data () {
      return {
        message: '',
      }
    },
    async mounted () {
      const { text } = await (await fetch(process.env.VUE_APP_FAKE_API + '/api/FakeAPI')).json()
      this.message = text
    },
  }
</script>
