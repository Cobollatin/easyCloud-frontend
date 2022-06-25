<template>
  <v-container
    id="user-profile-view"
    fluid
    tag="section"
  >
    <v-snackbar
      v-model="snackBarDrawer"
      top
      timeout="2000"
      right
      color="red accent-4"
      dark
    >
      {{ textDrawer }}
    </v-snackbar>
    <v-row justify="center">
      <v-col
        cols="12"
        md="8"
      >
        <material-card
          color="blue darken-4"
          icon="mdi-account-outline"
        >
          <v-form>
            <v-container class="py-0">
              <v-row>
                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    v-model="userModify.name"
                    color="blue darken-4"
                    label="Name"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    v-model="userModify.email"
                    color="blue darken-4"
                    label="Email Address"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    v-model="userModify.phone"
                    color="blue darken-4"
                    label="Phone Number"
                  />
                </v-col>
                <v-col
                  cols="12"
                  class="text-right"
                >
                  <v-btn
                    color="blue darken-4 white--text"
                    min-width="150"
                    @click="updateUser"
                  >
                    Update Profile
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </material-card>
      </v-col>

      <v-col
        cols="12"
        md="4"
      >
        <app-card class="mt-4 text-center">
          <v-img
            class="rounded-circle elevation-6 mt-11 d-inline-block"
            src="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg"
            width="128"
          />

          <v-card-text class="text-center">
            <h6 class="text-h6 mb-2 text--secondary">
              USER DATA
            </h6>

            <h4 class="text-h4 mb-3 text--primary">
              {{ user.name }}
            </h4>

            <h5 class="text-h5 mb-3 text--secondary">
              {{ user.email }}
            </h5>

            <h5 class="text-h5 mb-3 text--secondary">
              {{ user.phone }}
            </h5>
          </v-card-text>
        </app-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

  import { UsersApiService } from '../services/users.api.service'
  export default {
    name: 'UserProfileView',
    data () {
      return {
        textDrawer: null,
        snackBarDrawer: false,
        user: {},
        userModify: {},
        userService: null,
      }
    },
    created () {
      this.userService = new UsersApiService()

      this.userService.getById(JSON.parse(localStorage.user).id).then((response) => {
        this.userModify = response.data
      })

      this.userService.getById(JSON.parse(localStorage.user).id).then((response) => {
        this.user = response.data
      })
    },
    methods: {
      updateUser () {
        if (this.userModify.name !== '' && this.userModify.email !== '' && this.userModify.number !== '') {
          this.userService.update(this.user.id, this.userModify)
            .then((response) => {
              this.userModify = response.data
              this.user =
                {
                  email: response.data.email,
                  id: response.data.id,
                  name: response.data.name,
                  password: response.data.password,
                  phone: response.data.phone,
                }
            })
        } else {
          if (this.userModify.name === '') this.textDrawer = 'Complete the user name'
          if (this.userModify.email === '') this.textDrawer = 'Complete the user email address'
          if (this.userModify.number === '') this.textDrawer = 'Complete the user number'
          this.snackBarDrawer = true
          this.userModify = this.user
        }
      },
    },
  }

</script>
