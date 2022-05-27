<template>
  <v-container class="contaner-login align justify">
    <v-row
      align="center"
      justify="center"
    >
      <v-col>
        <v-card
          align="center"
          justify="center"
        >
          <a>
            <v-img
              src="@/assets/logo.png"
              alt="logo"
              contain
              height="80"
            />
          </a>
          <h1 class="login-center">
            Login
          </h1>
          <v-card-text>
            <v-form
              ref="form"
              v-model="form"
            >
              <v-row
                align="center"
                justify="center"
              >
                <v-col class="align justify">
                  <v-btn
                    color="#0072C3"
                    outlined
                  >
                    <v-icon>mdi-google-plus</v-icon>
                  </v-btn>
                </v-col>
                <v-col class="align justify">
                  <v-btn
                    color="#0072C3"
                    outlined
                  >
                    <v-icon>mdi-microsoft</v-icon>
                  </v-btn>
                </v-col>
                <v-col class="align justify">
                  <v-btn
                    color="#0072C3"
                    outlined
                  >
                    <v-icon>mdi-linkedin</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
              <v-text-field
                v-model="email"
                autocomplete="email"
                :rules="[rules.email]"
                label="Email"
                type="email"
                class="rounded-0"
                required
              />
              <v-text-field
                v-model="password"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                validate-on-blur
                :type="showPassword ? 'text' : 'password'"
                :rules="[rules.password,rules.length(6)]"
                label="Password"
                class="rounded-0"
                required
                @click:append="showPassword = !showPassword"
              />
              <v-btn
                :disabled="false"
                :loading="isLoading"
                color="#1976D2"
                @click="login(email,password)"
              >
                <span class="wh">Login</span>
              </v-btn>
              <v-card-actions>
                New to EasyCloud? <a
                  href="#"
                  class="pl-2"
                > Sign Up</a>
              </v-card-actions>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'Login',
    components: {},

    data: () => ({
      email: undefined,
      password: undefined,
      showPassword: false,
      form: false,
      isLoading: false,
      rules: {
        email: v => !!(v || '').match(/@/) || 'Please enter a valid email',
        length: len => v => (v || '').length >= len || `Invalid character length, required ${len}`,
        password: v => !!(v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
          'Password must contain an upper case letter, a numeric character, and a special character',
        required: v => !!v || 'This field is required',
      },
    }),
    async mounted () {
    },
    methods: {
      login: function (email, password) {
        axios.post(process.env.VUE_APP_FAKE_API + '/api/login', {
          username: email,
          password: password,
        },
        ).catch(_error => {
          this.$router.push('/home')
        })
          .then(response => {
            if (response.status === 200) {
              this.$router.push('/')
            }
          },
          )
      },
    },
  }
</script>

<style scoped>
.contaner-login {
  margin-top: 10%;
}
.wh{
  color: #EEEEEE;
}
</style>
