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
          :items="providersName"
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
                    :items="region"
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
                    :items="operationSystem"
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
                    :items="type"
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
                    :items="tier"
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
                    :items="category"
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
                    :items="instanceSeries"
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
                    v-model="amountMachine"
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
                    v-model="amountTime"
                    style="width: 700px"
                    outlined
                    background-color="#ffffff"
                    label=""
                    color="blue darken-4"
                  />
                  <v-select
                    :items="typeDate"
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
      <v-container
        v-if="selectServices.length > 0"
        style="display: flex; justify-content: end; align-items: end;"
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
      </v-container>
      <!--Comparative chart-->
      <template
        v-if="comparativeChartDrawer && selectProviders.length !== 0"
      >
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
            <template v-slot:item.action="{ item }">
              <v-icon
                id="icon-save"
                @click="saveQuoteConfirm(item)"
              >
                {{ item.action }}
              </v-icon>
            </template>
          </v-data-table>
        </v-container>
      </template>
    </v-row>
  </v-container>
</template>

<script>

  export default {
    name: 'QuotesVue',

    data () {
      return {
        headers: [
          { text: 'Provider', value: 'provider' },
          { text: 'Price', value: 'price' },
          { text: '', value: 'action' },
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
        providersName: [
          'Azure', 'Oracle', 'AWS', 'Alibaba', 'Google', ' IBM',
        ],
        region: ['Wes Central US', 'Wes US 1', 'Wes US 2'],
        operationSystem: ['Windows'],
        type: ['Only', 'BizTalk', 'SQL Server'],
        tier: ['Standard', 'Basic'],
        category: ['All', 'Compute optimized', 'General Purpose', 'GPU'],
        instanceSeries: ['All', 'A-series', 'Bs-series', 'Dsv2-series'],
        amountMachine: null,
        amountTime: null,
        typeDate: ['Days', 'Hours', 'Month'],
        confirmSave: null,
      }
    },
    methods: {

      calculateQuote () {
        this.quotes = []
        this.selectProviders.forEach((provider) => {
          this.quotes.push({
            provider: provider,
            price: (this.amountMachine * this.amountTime),
            action: 'mdi-content-save',
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
        if (provider === 'AWS') return 'orange'
        else if (provider === 'Azure') return 'blue'
        else if (provider === 'Oracle') return 'red'
        else if (provider === 'Alibaba') return 'yellow'
        else if (provider === 'Google') return 'green'
        else if (provider === 'IBM') return 'black'
      },

      verifyUpdateProviders () {
        this.comparativeChartDrawer = false
      },

      verifyUpdateServices () {
        this.comparativeChartDrawer = false
      },

      saveQuoteConfirm (item) {
        this.confirmSave = confirm('Are you sure to save this quote?')
        if (this.confirmSave === true) {
          let provider = item.provider
          alert(provider)
        } else {
          alert('Noooo')
        }
      },
    },
  }

</script>

<style scoped></style>
