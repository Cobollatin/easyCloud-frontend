<template>
  <v-container fluid>
    <v-row>
      <!--Select Group-->
      <v-col
        sm="6"
      >
        <v-select
          v-model="selectServices"
          :items="services"
          :menu-props="{offsetY: true}"
          label="Choose the service:"
          outlined
          background-color="#ffffff"
          color="blue darken-4"
          item-color="blue darken-4"
        />
      </v-col>
      <v-col
        sm="6"
      >
        <v-select
          v-model="selectProviders"
          :items="providers"
          :menu-props="{offsetY: true}"
          label="Choose the providers:"
          color="blue darken-4"
          item-color="blue darken-4"
          multiple
          outlined
          background-color="#ffffff"
        />
      </v-col>

      <!-- Provider Card-->
      <v-card
        v-for="provider in providers"
        :key="providers.indexOf(provider)"
        width="1030"
        class="mx-auto mb-5"
      >
        <v-banner
          v-if="selectProviders.indexOf(provider) !== -1 && selectServices !== ''"
          single-line
        >
          <v-card-title
            class="text-h2 font-weight-black"
            style="color: #0072C3"
          >
            {{ provider }}
            <v-spacer />
            <v-icon
              color="blue darken-4"
              size="50"
            >
              mdi-plus
            </v-icon>
          </v-card-title>
          <template
            v-if="selectServices === 'Virtual Machine'"
          >
            <v-row
              class="mt-10"
            >
              <v-col
                sm="3"
                class="ml-10"
              >
                <v-select
                  :items="items"
                  label="Region"
                  outlined
                  background-color="#ffffff"
                  color="blue darken-4"
                />
              </v-col>
              <v-col
                sm="3"
                class="ml-10"
              >
                <v-select
                  :items="items"
                  label="Operating System"
                  outlined
                  color="blue darken-4"
                  background-color="#ffffff"
                />
              </v-col>
              <v-col
                sm="3"
                class="ml-10"
              >
                <v-select
                  :items="items"
                  label="Type"
                  outlined
                  background-color="#ffffff"
                  color="blue darken-4"
                />
              </v-col>
              <v-col
                sm="3"
                class="ml-10"
              >
                <v-select
                  :items="items"
                  label="Tyer"
                  outlined
                  background-color="#ffffff"
                  color="blue darken-4"
                />
              </v-col>
              <v-col
                sm="3"
                class="ml-10"
              >
                <v-select
                  :items="items"
                  label="Category"
                  outlined
                  background-color="#ffffff"
                  color="blue darken-4"
                />
              </v-col>
              <v-col
                sm="3"
                class="ml-10"
              >
                <v-select
                  :items="items"
                  label="Instance Series"
                  outlined
                  background-color="#ffffff"
                  color="blue darken-4"
                />
              </v-col>
              <v-col
                sm="8"
                class="ml-10 d-flex"
              >
                <v-text-field
                  style="width: 700px"
                  outlined
                  background-color="#ffffff"
                  label="Virtual Machines"
                  color="blue darken-4"
                />
                <h4 style="padding: 10px 5px; margin: 0 3px ">
                  X
                </h4>
                <v-text-field
                  style="width: 700px"
                  outlined
                  background-color="#ffffff"
                  label=""
                  color="blue darken-4"
                />
                <v-select
                  :items="items"
                  label="Period"
                  outlined
                  background-color="#ffffff"
                  class="ml-2"
                  color="blue darken-4"
                />
              </v-col>
              <v-col
                sm="3"
                class="d-flex"
              >
                <p style="margin-left: 110px; margin-top: 33px; font-weight: 700">
                  Price: $300
                </p>
              </v-col>
            </v-row>
          </template>
          <template
            v-if="selectServices === 'Serverless'"
          >
            <v-row
              class="mt-10"
            >
              <v-col
                sm="3"
                class="ml-10"
              >
                <v-select
                  :items="items"
                  label="Region"
                  solo
                  outlined
                  background-color="#ffffff"
                  color="blue darken-4"
                />
              </v-col>
              <v-col
                sm="3"
                class="ml-10"
              >
                <v-select
                  :items="items"
                  label="Tier"
                  outlined
                  background-color="#ffffff"
                  color="blue darken-4"
                />
              </v-col>
              <v-col
                sm="3"
                class="ml-10"
              >
                <v-select
                  :items="items"
                  label="Memory size"
                  outlined
                  background-color="#ffffff"
                  color="blue darken-4"
                />
              </v-col>
              <v-col
                sm="7"
                class="ml-10 d-flex"
              >
                <v-select
                  :items="items"
                  label="Memory Size"
                  outlined
                  background-color="#ffffff"
                  color="blue darken-4"
                  class="ml-2"
                />
                <h4 style="padding: 10px 5px; margin: 0 3px ">
                  X
                </h4>
                <v-text-field
                  style="width: 300px"
                  outlined
                  background-color="#ffffff"
                  color="blue darken-4"
                  label="Execution time"
                />
                <h4 style="padding: 10px 5px; margin: 0 3px ">
                  X
                </h4>
                <v-text-field
                  style="width: 300px"
                  outlined
                  background-color="#ffffff"
                  color="blue darken-4"
                  label="Execution per month"
                />
              </v-col>
              <v-col
                sm="3"
                class="d-flex"
              >
                <p style="margin-left: 110px; margin-top: 25px; font-weight: 700">
                  Price: $300
                </p>
              </v-col>
            </v-row>
          </template>
          <template
            v-if="selectServices === 'Data Base'"
          >
            <v-row
              class="mt-10"
            >
              <v-col
                sm="3"
                class="ml-10"
              >
                <v-select
                  :items="items"
                  label="Region"
                  outlined
                  background-color="#ffffff"
                  color="blue darken-4"
                />
              </v-col>
              <v-col
                sm="3"
                class="ml-10"
              >
                <v-select
                  :items="items"
                  label="Type"
                  outlined
                  background-color="#ffffff"
                  color="blue darken-4"
                />
              </v-col>
              <v-col
                sm="3"
                class="ml-10"
              >
                <v-select
                  :items="items"
                  label="Backup Storage"
                  outlined
                  background-color="#ffffff"
                  color="blue darken-4"
                />
              </v-col>
              <v-col
                sm="3"
                class="ml-10"
              >
                <v-select
                  :items="items"
                  label="Purchase Model"
                  outlined
                  background-color="#ffffff"
                  color="blue darken-4"
                />
              </v-col>
              <v-col
                sm="3"
                class="ml-10"
              >
                <v-select
                  :items="items"
                  label="Service Tier"
                  outlined
                  background-color="#ffffff"
                  color="blue darken-4"
                />
              </v-col>
              <v-col
                sm="3"
                class="ml-10"
              >
                <v-select
                  :items="items"
                  label="Conpute Tier"
                  outlined
                  background-color="#ffffff"
                  color="blue darken-4"
                />
              </v-col>
              <v-col
                sm="3"
                class="ml-10"
              >
                <v-select
                  :items="items"
                  label="Hardware Type"
                  outlined
                  background-color="#ffffff"
                  color="blue darken-4"
                />
              </v-col>
              <v-col
                sm="3"
                class="ml-10"
              >
                <v-select
                  :items="items"
                  label="Instance"
                  outlined
                  background-color="#ffffff"
                  color="blue darken-4"
                />
              </v-col>
              <v-col
                sm="7"
                class="ml-10 d-flex"
              >
                <v-text-field
                  style="width: 500px"
                  outlined
                  background-color="#ffffff"
                  color="blue darken-4"
                  label="#Instances"
                />
                <h4 style="padding: 10px 5px; margin: 0 3px ">
                  X
                </h4>
                <v-text-field
                  style="width: 500px"
                  outlined
                  background-color="#ffffff"
                  color="blue darken-4"
                  label=""
                />
                <v-select
                  :items="items"
                  label="Period"
                  outlined
                  background-color="#ffffff"
                  color="blue darken-4"
                  class="ml-2"
                />
              </v-col>
              <v-col
                sm="3"
                class="d-flex"
              >
                <p style="margin-left: 110px; margin-top: 25px; font-weight: 700">
                  Price: $300
                </p>
              </v-col>
            </v-row>
          </template>
        </v-banner>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'QuotesVue',

    data () {
      return {
        selectServices: '',
        selectProviders: [],
        services: [
          'Virtual Machine', 'Serverless', 'Data Base',
        ],
        providers: [
          'Azure', 'Oracle', 'AWS', 'Alibaba', 'Google', ' IBM',
        ],
      }
    },
  }

</script>

<style scoped>

</style>
