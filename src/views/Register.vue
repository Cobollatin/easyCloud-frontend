<template>
  <v-container class="contaner-login align justify max-w">
    <v-row
      align="center"
      justify="center"
    >
      <v-col>
        <v-card
          class="border"
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

          <h1 class="login-center color-wa">
            Sign Up
          </h1>
          <v-card-text>
            <v-form
              ref="form"
              v-model="form"
              lazy-validation
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
                v-model="fullname"
                autocomplete="fullname"
                :rules="[rules.fullname]"
                label="Full name"
                type="fullname"
                class="rounded-0"
                required
              />
              <v-text-field
                v-model="phone"
                autocomplete="phone"
                label="Phone Number"
                type="number"
                class="rounded-0"
                required
              />
              <v-text-field
                v-model="email"
                autocomplete="emailaddress"
                :rules="[rules.emailaddress]"
                label="Email Address"
                type="emailaddress"
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
                class="margin-t2"
                @click="register"
              >
                <span class="wh">Create your free account</span>
              </v-btn>
              <v-card-actions>
                <span class="center-c margin-t1 color-wa">
                  Already have an account? <strong><router-link
                    to="/login"
                    class="text-d-n color-wa font-n font-n"
                  >Sign In</router-link></strong>
                </span>
              </v-card-actions>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-snackbar
      v-model="snackbar"
      color="success"
      dark
      >Register completed succesfully
      <template v-slot:action="{ attrs }">
        <v-btn
          text
          v-bind="attrs"
          @click="snackbar = false"
          >Close
        </v-btn>
      </template>
    </v-snackbar>
    <v-snackbar
      v-model="snackbarError"
      color="warning"
      dark
      >Something bad happened when trying register
      <template v-slot:action="{ attrs }">
        <v-btn
          text
          v-bind="attrs"
          @click="snackbarError = false"
          >Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
  import usersApiService, { UsersApiService } from '../services/users.api.service'
  export default {
    name: 'Login',
    components: {},

    data: () => ({
      email: undefined,
      password: undefined,
      fullname: undefined,
      phone: undefined,
      showPassword: false,
      isLoading: false,
      snackbar: false,
      snackbarError: false,
      form: true,
      rules: {
        fullname: v => !!v || 'Please enter full name',
        length: len => v => (v || '').length >= len || `Invalid character length, required ${len}`,
        password: v => !!(v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
          'Password must contain an upper case letter, a numeric character, and a special character',
        required: v => !!v || 'This field is required',
        emailaddress: v => !!(v || '').match(/@/) || 'Please enter a email',
      },
    }),
    async mounted () {
    },
    methods: {
      register () {
        if (this.$refs.form.validate()) {
          const User = {
            name: this.fullname,
            phone: this.phone,
            email: this.email,
            password: this.password,
          }
          usersApiService.create(User)
            .then((response) => { if (response.status === 200) { this.snackbar = true }; console.log('new user:', response.data) })
            .catch((e) => { console.log('error', e); console.log('new user', User); this.snackbarError = true })
          this.reset()
        }
      },
      reset () {
        this.$refs.form.reset()
      },
    },
  }
</script>

<style scoped>
.contaner-login {
    margin-top: 7%;
}

.wh{
  color: #EEEEEE;
}
.max-w {
max-width: 50%;
}

.center-c{
margin: 0 auto;
}

.margin-t05{
margin-top: 1rem;
}

.margin-t1{
margin-top: 1rem;
}
.margin-t2{
margin-top: 2rem;
}
.margin-b1{
margin-bottom: 1rem;
}
.margin-b2{
margin-bottom: 2rem;
}

.color-wa{
color: #0072C3;
}

.text-d-n{
text-decoration: none;
}

.font-n{
font-weight:  bold;
}

.border{
border-style: solid;
border-width: 2px;
border-color: #0072C3;

}
</style>
