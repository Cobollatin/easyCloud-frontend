<template>
  <v-container fluid>
    <v-row>

      <!--Select Group-->
      <v-col sm="6">
        <v-select
          v-model="selectServices"
          :items="services"
          :menu-props="{offsetY: true}"
          label="Choose the service:"
          outlined
          background-color="#ffffff"
          color="blue darken-4"
          item-color="blue darken-4"
          multiple
          @change="verifyUpdateServices()"
        />
      </v-col>
      <v-col sm="6">
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
          @change="verifyUpdateProviders()"
        />
      </v-col>

      <!--Services Cards-->
      <v-card
        v-for="service in services"
        :key="services.indexOf(service)"
        width="1030"
        class="mx-auto mb-2"
      >
        <template v-for="serviceSelected in selectServices">
          <v-banner
            v-if="serviceSelected === service"
            :key="serviceSelected"
            single-line
          >
            <v-card-title
              class="text-h2 font-weight-black"
              style="color: #0072C3"
            >
              {{ service }}
            </v-card-title>
            <template
              v-if="serviceSelected === 'Virtual Machine'"
            >
              <v-row
                class="mt-10"
              >
                <v-col
                  sm="3"
                  class="ml-10"
                >
                  <v-select
                    :items="providers"
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
                    :items="providers"
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
                    :items="providers"
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
                    :items="providers"
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
                    :items="providers"
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
                    :items="providers"
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
                    :items="providers"
                    label="Period"
                    outlined
                    background-color="#ffffff"
                    class="ml-2"
                    color="blue darken-4"
                  />
                </v-col>
              </v-row>
            </template>
            <template
              v-if="serviceSelected === 'Serverless'"
            >
              <v-row
                class="mt-10"
              >
                <v-col
                  sm="3"
                  class="ml-10"
                >
                  <v-select
                    :items="providers"
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
                    :items="providers"
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
                    :items="providers"
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
                    :items="providers"
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
              </v-row>
            </template>
            <template
              v-if="serviceSelected === 'Data Base'"
            >
              <v-row
                class="mt-10"
              >
                <v-col
                  sm="3"
                  class="ml-10"
                >
                  <v-select
                    :items="providers"
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
                    :items="providers"
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
                    :items="providers"
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
                    :items="providers"
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
                    :items="providers"
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
                    :items="providers"
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
                    :items="providers"
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
                    :items="providers"
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
                    :items="providers"
                    label="Period"
                    outlined
                    background-color="#ffffff"
                    color="blue darken-4"
                    class="ml-2"
                  />
                </v-col>
              </v-row>
            </template>
          </v-banner>
        </template>
      </v-card>

      <!--Calculate Quote Button-->
      <v-row
        v-if="selectServices.length > 0"
        justify="end"
      >
        <v-btn
          class="mb-4 mr-6 mt-5"
          color="blue darken-4"
          dark
          @click="activeComparativeChart()"
        >
          <v-icon class="mr-2">
            mdi-alarm-panel
          </v-icon>
          Calculate Quote
        </v-btn>
        <v-snackbar
          v-model="snackBarDrawer"
          top
          timeout="2000"
          right
          color="red accent-4"
          dark
        >
          Select a providers
        </v-snackbar>
      </v-row>

      <!--Comparative chart-->
      <div v-if="comparativeChartDrawer && selectProviders.length !== 0">
        <v-container
          v-for="selectService in selectServices"
          :key="selectService"
        >
          <h2
            class="mb-1 ml-1 text-h2 font-weight-black"
            style="color: #0D47A1"
          >
            {{ selectService }}
          </h2>
          <v-data-table
            :headers="headers"
            :items="quotes"
            class="elevation-1"
          >
            <template v-slot:item.provider="{ item }">
              <v-chip
                :color="getColor(item.provider)"
                dark
              >
                {{ item.provider }}
              </v-chip>
            </template>
          </v-data-table>
        </v-container>
      </div>
    </v-row>
  </v-container>
</template>

<script>

  import Vue from 'vue'

  const lineSmooth = Vue.chartist.Interpolation.cardinal({
    tension: 0,
  })
  export default {
    name: 'QuotesVue',

    data () {
      return {
        headers: [
          { text: 'Provider', value: 'provider' },
          { text: 'Description', value: 'description' },
          { text: 'Price', value: 'price' },
        ],
        quotes: [],
        selectServices: [],
        selectProviders: [],
        comparativeChartDrawer: false,
        snackBarDrawer: false,
        emits: ['response'],
        services: [
          'Virtual Machine', 'Serverless', 'Data Base',
        ],
        providers: [
          'Azure', 'Oracle', 'AWS', 'Alibaba', 'Google', ' IBM',
        ],
      }
    },
    methods: {

      calculateQuote () {
        this.quotes = []
        this.selectProviders.forEach((provider) => {
          this.quotes.push({
            provider: provider,
            description: 'Google Cloud Tuvi',
            price: 8000,
          })
        })
      },

      activeComparativeChart () {
        if (this.selectProviders.length !== 0) {
          this.comparativeChartDrawer = true
          this.calculateQuote()
        } else {
          this.comparativeChartDrawer = false
          this.snackBarDrawer = true
        }
      },

      getColor (provider) {
        if (provider === 'AWS') return 'red'
        else if (provider === 'Azure') return 'orange'
        else return 'green'
      },

      verifyUpdateProviders () {
        this.comparativeChartDrawer = false
      },

      verifyUpdateServices () {
        this.comparativeChartDrawer = false
      },

    },
  }

</script>

<style scoped>

</style>
