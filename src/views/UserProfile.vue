<template>
  <v-container
    id="user-profile-view"
    fluid
    tag="section"
  >
    <v-row justify="center">
      <v-col
        cols="12"
        md="8"
      >
        <material-card
          color="blue darken-4"
          icon="mdi-account-outline"
        >
          <template #title>
            Edit Profile — <small class="text-body-1">Complete your profile</small>
          </template>

          <v-form>
            <v-container class="py-0">
              <v-row>
                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    color="blue darken-4"
                    label="First Name"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    color="blue darken-4"
                    label="Last Name"
                  />
                </v-col>
                <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    color="blue darken-4"
                    label="User Name"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    color="blue darken-4"
                    label="Email Address"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    color="blue darken-4"
                    label="Phone Number"
                  />
                </v-col>

                <v-col cols="12">
                  <v-textarea
                    color="blue darken-4"
                    label="About Me"
                    value="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  />
                </v-col>

                <v-col
                  cols="12"
                  class="text-right"
                >
                  <v-btn
                    color="blue darken-4 white--text"
                    min-width="150"
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
          <div class="text-h4 mt-3 mb-3 text--primary">
            My profile
          </div>
          <v-img
            class="rounded-circle elevation-6 mt-n20 d-inline-block"
            src="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg"
            width="128"
          />

          <v-card-text class="text-center">
            <h6 class="text-h6 mb-2 text--secondary">
              CEO / FOUNDER
            </h6>

            <h4 class="text-h4 mb-3 text--primary">
              John Leider
            </h4>

            <h5 class="text-h5 mb-3 text--secondary">
              example@example.com
            </h5>

            <p class="text--secondary">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione dolorem deserunt veniam tempora magnam quisquam quam error iusto cupiditate ducimus, et eligendi saepe voluptatibus assumenda similique temporibus placeat animi dicta?
            </p>

            <h5 class="text-h5 mb-3 text--secondary">
              987 654 321
            </h5>
          </v-card-text>
        </app-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default { name: 'UserProfileView' }
</script>
