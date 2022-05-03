<template>
  <v-container class="contaner-login" align="center" justify="center" >
    <v-row align="center" justify="center" >
      <v-col  >
        <v-card align="center" justify="center" >
          <a>
            <v-img src="@/assets/logo.png" alt="logo" contain height="80"></v-img>
          </a>
          <h1 class="login-center">Login</h1>
          <v-card-text>
            <v-form>
              <v-row align="center" justify="center" >
                <v-col align="center" justify="center"  >
                  <v-btn color="#0072C3" outlined>
                    <v-icon>mdi-google-plus</v-icon>
                  </v-btn>
                </v-col>
                <v-col align="center" justify="center" >
                  <v-btn color="#0072C3" outlined>
                    <v-icon>mdi-microsoft</v-icon>
                  </v-btn>
                </v-col>
                <v-col align="center" justify="center"  >
                  <v-btn color="#0072C3" outlined>
                    <v-icon>mdi-linkedin</v-icon>
                  </v-btn>
                </v-col>
              </v-row>

              <v-text-field label="Email" name="email" type="email" class="rounded-0" ></v-text-field>
              <v-text-field label="Password" name="password" type="password" class="rounded-0" ></v-text-field>
              <v-btn class="rounded-0" color="#1976D2" x-large block dark>Login</v-btn>
              <v-card-actions class="text--secondary">
                New to EasyCloud?  <a href="#" class="pl-2" style="color: #000000"> Sign Up</a>
              </v-card-actions>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <DefaultFooter></DefaultFooter>
  </v-container>



</template>

<script>

export default {
  name: 'Login',
  components: {},

  data() {
    return {
      message: '',
    }
  },
  async mounted() {
    const {text} = await (await fetch('/api/message')).json()
    this.message = text
  },
}
</script>

<style scoped>
.contaner-login{
  margin-top: 10%;
}
</style>
