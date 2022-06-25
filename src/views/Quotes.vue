<template>
  <v-container fluid>
    <v-row>
      <!--Snackbar Alert-->
      <v-snackbar
        v-model="snackBarDrawer"
        top
        timeout="2000"
        right
        color="green"
        dark
      >
        {{ snackBarText }}
      </v-snackbar>
      <!--Dialog Quote Information-->
      <template class="text-center">
        <v-dialog
          v-model="openDialog"
          width="800"
        >
          <v-card>
            <v-card-title class="text-h5 blue darken-4 white--text">
              Information about the quote
            </v-card-title>
            <v-card-text class="mt-5">
              <v-text-field
                v-model="quoteSaved.title"
                style="width: 700px"
                outlined
                background-color="#ffffff"
                label="Title"
                color="blue darken-4"
              />
              <v-text-field
                v-model="quoteSaved.description"
                style="width: 700px"
                outlined
                background-color="#ffffff"
                label="Description"
                color="blue darken-4"
              />
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn
                color="blue darken-4"
                text
                @click="saveQuote"
              >
                Save
              </v-btn>
              <v-btn
                color="black"
                text
                @click="cancelSaveQuote"
              >
                Cancel
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </template>
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
                    :items="region"
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
                    :items="serverlessTier"
                    label="Tier"
                    outlined
                    background-color="#ffffff"
                    color="blue darken-4"
                  />
                </v-col>
                <v-col
                  sm="3"
                  class="ml-10"
                />
                <v-col
                  sm="7"
                  class="ml-10 d-flex"
                >
                  <v-select
                    :items="memorySize"
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
                    v-model="executionPerMonth"
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
                    v-model="executionTime"
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
                    :items="databaseType"
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
                    :items="backup"
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
                    :items="purchase"
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
                    :items="databaseTier"
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
                    :items="computeTier"
                    label="Compute Tier"
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
                    :items="hardware"
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
                    :items="instance"
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
                    v-model="instanceAmount"
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
                    v-model="timeExecution"
                    style="width: 500px"
                    outlined
                    background-color="#ffffff"
                    color="blue darken-4"
                    label=""
                  />
                  <v-select
                    :items="typeDate"
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
            :items="quotesServerless"
            class="elevation-1"
            v-if='selectService === "Serverless" '
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
                @click="saveQuoteConfirm(item, selectService)"
              >
                {{ item.action }}
              </v-icon>
            </template>
          </v-data-table>
          <v-data-table
            :headers="headers"
            :items="quotesDB"
            class="elevation-1"
            v-if='selectService === "Data Base" '
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
                @click="saveQuoteConfirm(item, selectService)"
              >
                {{ item.action }}
              </v-icon>
            </template>
          </v-data-table>
          <v-data-table
            :headers="headers"
            :items="quotesVM"
            class="elevation-1"
            v-if='selectService === "Virtual Machine" '
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
                @click="saveQuoteConfirm(item, selectService)"
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

  import { QuoteApiService } from '@/services/quote.api.service'

  export default {
    name: 'QuotesVue',

    data () {
      return {
        quoteService: null,
        openDialog: false,
        selectService: null,
        headers: [
          { text: 'Provider', value: 'provider' },
          { text: 'Price', value: 'price' },
          { text: '', value: 'action' },
        ],
        quotesServerless: [],
        quotesVM: [],
        quotesDB: [],
        selectServices: [],
        selectProviders: [],
        comparativeChartDrawer: false,
        snackBarDrawer: false,
        snackBarColor: false,
        emits: ['response'],
        services: [
          'Virtual Machine', 'Serverless', 'Data Base',
        ],
        serverlessTier: [
          'Unique Database',
          'Elastic Group',
        ],
        memorySize: [
          128, 256, 384, 512, 640,
        ],
        databaseType: [
          'Unique Database', 'Elastic Group',
        ],
        backup: [
          'Local', 'Multiple Zones',
        ],
        purchase: [
          'Unique Database',
          'Elastic Group',
        ],
        databaseTier: [
          'General Use V2',
          'Blob Storage',
        ],
        computeTier: [
          'LRS', 'ZRS', 'GRS',
        ],
        hardware: [
          'Gen 4', 'Gen 5', 'FSV2',
        ],
        instance: [
          '2 vCore', '4 vCore', '8 vCore', '16 vCore', '32 vCore',
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
        executionTime: null,
        executionPerMonth: null,
        instanceAmount: null,
        timeExecution: null,
        typeDate: ['Days', 'Hours', 'Month'],
        confirmSave: null,
        saveQuoteInformation: null,
        snackBarText: null,
        quoteSaved: {},
      }
    },
    created () {
      this.quoteService = new QuoteApiService()
      this.quoteSaved = {
        description: '',
        title: '',
        date: '',
        price: 0,
        cloudService: '',
        userId: 1,
      }
    },
    methods: {
      cancelSaveQuote () {
        this.quoteSaved = {}
        this.openDialog = false
      },

      calculateQuote () {
        this.quotesServerless = []
        this.quotesVM = []
        this.quotesDB = []
        this.selectProviders.forEach((provider) => {
          this.quotesServerless.push({
            provider: provider,
            price: (this.executionTime * this.executionPerMonth),
            action: 'mdi-content-save',
          })
          this.quotesVM.push({
            provider: provider,
            price: (this.amountMachine * this.amountTime),
            action: 'mdi-content-save',
          })
          this.quotesDB.push({
            provider: provider,
            price: (this.instanceAmount * this.timeExecution),
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
          this.snackBarText = 'Select a provider'
          this.snackBarColor = 'red accent-4'
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

      saveQuoteConfirm (item, selectService) {
        this.openDialog = true
        this.saveQuoteInformation = item
        this.selectService = selectService
        console.log(item)
      },

      saveQuote () {
        this.quoteSaved.price = this.saveQuoteInformation.price
        this.quoteSaved.cloudService = this.selectService
        const actualTime = Date.now()
        const today = new Date(actualTime)
        this.quoteSaved.date = today.toDateString()

        this.quoteService.create(this.quoteSaved).then((response) => {
          console.log(response.data)
        })
        this.quoteSaved = {}
        this.openDialog = false
      },
    },
  }

</script>

<style scoped></style>
