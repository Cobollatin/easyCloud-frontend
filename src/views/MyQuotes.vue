<template>
  <v-container fluid>
    <v-row>
      <v-col sm="3">
        <v-select
          v-model="selectServices"
          :items="services"
          :menu-props="{ offsetY: true }"
          background-color="#ffffff"
          color="blue darken-4"
          item-color="blue darken-4"
          label="Choose the service:"
          multiple
          outlined
        />
      </v-col>
      <v-col sm="3">
        <v-select
          v-model="selectProviders"
          :items="providers"
          :menu-props="{ offsetY: true }"
          background-color="#ffffff"
          color="blue darken-4"
          item-color="blue darken-4"
          label="Choose the providers:"
          multiple
          outlined
        />
      </v-col>
      <v-col sm="2">
        <div>
          <v-menu
            ref="menuStartDate"
            v-model="menuStartDate"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="startDate"
                label="Start date"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              />
            </template>
            <v-date-picker
              v-model="startDate"
              :active-picker.sync="activePicker"
              :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
              min="1950-01-01"
            />
          </v-menu>
        </div>
      </v-col>
      <v-col sm="2">
        <div>
          <v-menu
            ref="menuEndDate"
            v-model="menuEndDate"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="endDate"
                label="End date"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              />
            </template>
            <v-date-picker
              v-model="endDate"
              :active-picker.sync="activePicker"
              :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
              min="1950-01-01"
            />
          </v-menu>
        </div>
      </v-col>
      <v-col sm="2">
        <v-btn
          v-model="menuStartDate"
          :close-on-content-click="false"
          color="blue darken-4"
          dark
          outlined
          @click="search"
        >
          Search
        </v-btn>
        <v-snackbar
          v-model="snackBarDrawerEmpty"
          top
          timeout="2000"
          right
          color="red accent-4"
          dark
        >
          No quotes found!
        </v-snackbar>
        <v-snackbar
          v-model="snackBarDrawer"
          top
          timeout="2000"
          right
          color="red accent-4"
          dark
        >
          Select providers & services
        </v-snackbar>
        <v-snackbar
          v-model="snackBarDrawerDelete"
          top
          timeout="2000"
          right
          color="deep-purple accent-4"
          dark
        >
          Delete quote!
        </v-snackbar>
      </v-col>
      <v-expansion-panels
        v-for="quote in quotesSelected"
        :key="quotes.indexOf(quote)"
        multiple
      >
        <v-expansion-panel
          style="margin-top: 15px;"
        >
          <v-expansion-panel-header>
            <v-banner
              single-line
            >
              <v-card-title
                class="text-h2 font-weight-black"
                style="color: #0072C3"
              >
                {{ quote.service }}
                <v-spacer />
                <v-icon
                  color="blue darken-4"
                  size="50"
                  @click="deleteQuote(quote.id)"
                >
                  mdi-delete
                </v-icon>
              </v-card-title>
              <template>
                <p
                  class="text-h3 font-weight-black"
                  style="margin-top: 15px; margin-left: 10px;"
                >
                  Provider: {{ quote.provider }} -  Date:  {{ quote.date }}
                </p>
              </template>
            </v-banner>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-container>
              <template v-if="quote.service === 'Virtual Machine'">
                <v-row class="mt-10">
                  <v-col
                    sm="3"
                    class="ml-10"
                  >
                    <span>Region: <strong>{{
                      quote.region
                    }}
                    </strong></span>
                  </v-col>
                  <v-col
                    sm="3"
                    class="ml-10"
                  >
                    <span>Operative System: <strong>{{ quote.os }}</strong></span>
                  </v-col>
                  <v-col
                    sm="3"
                    class="ml-10"
                  >
                    <span>Type: <strong>{{
                      quote.type
                    }}</strong></span>
                  </v-col>
                  <v-col
                    sm="3"
                    class="ml-10"
                  >
                    <span>Tyer: <strong>{{
                      quote.tyer
                    }}</strong></span>
                  </v-col>
                  <v-col
                    sm="3"
                    class="ml-10"
                  >
                    <span>Category: <strong>{{
                      quote.category
                    }}</strong></span>
                  </v-col>
                  <v-col
                    sm="3"
                    class="ml-10"
                  >
                    <span>Instance series: <strong>{{ quote.instance }}</strong></span>
                  </v-col>
                  <v-col
                    sm="8"
                    class="ml-10 d-flex"
                  >
                    <span style="width: 700px">Virtual Machines: <strong>{{ quote.vm }}</strong></span>
                    <span style="width: 700px">Months: <strong>{{ quote.x }}</strong></span>
                    <span style="width: 700px">Period: <strong>{{ quote.period }}</strong></span>
                  </v-col>
                  <v-col
                    sm="3"
                    class="d-flex"
                  >
                    <p style="margin-left: 110px; margin-top: 33px; font-weight: 700">
                      Price:
                      <strong>{{ quote.price }}</strong>
                    </p>
                  </v-col>
                </v-row>
              </template>
              <template v-if="quote.service === 'Serverless'">
                <v-row class="mt-10">
                  <v-col
                    sm="3"
                    class="ml-10"
                  >
                    <span>Region: <strong>{{ quote.region }}</strong></span>
                  </v-col>
                  <v-col
                    sm="3"
                    class="ml-10"
                  >
                    <span>Tier: <strong>{{ quote.tier }}</strong></span>
                  </v-col>
                  <v-col
                    sm="3"
                    class="ml-10"
                  >
                    <span>Memory Size: <strong>{{ quote.memorySize }}</strong></span>
                  </v-col>
                  <v-col
                    sm="7"
                    class="ml-10 "
                  >
                    <span>Memory Size: <strong>{{ quote.memorySizeCal }}</strong></span>
                    <span
                      style="width: 300px"
                      class="ml-15"
                    >Execution Time: <strong>{{ quote.executionTime }}</strong></span>
                    <span
                      style="width: 300px"
                      class="ml-15"
                    >Execution Per month: <strong>{{
                      quote.executionPerMonth
                    }}</strong></span>
                  </v-col>
                  <v-col
                    sm="3"
                    class="d-flex"
                  >
                    <p style="margin-left: 110px; margin-top: 25px; font-weight: 700">
                      Price: <strong>{{ quote.price }}</strong>
                    </p>
                  </v-col>
                </v-row>
              </template>
              <template v-if="quote.service === 'Data Base'">
                <v-row class="mt-10">
                  <v-col
                    sm="3"
                    class="ml-10"
                  >
                    <span>Region: <strong> {{ quote.region }}</strong></span>
                  </v-col>
                  <v-col
                    sm="3"
                    class="ml-10"
                  >
                    <span>Type: <strong>{{ quote.type }}</strong></span>
                  </v-col>
                  <v-col
                    sm="3"
                    class="ml-10"
                  >
                    <span>Backup Storage: <strong>{{ quote.backupStorage }}</strong></span>
                  </v-col>
                  <v-col
                    sm="3"
                    class="ml-10"
                  >
                    <span>Purchase Model: <strong>{{ quote.purchaseModel }}</strong></span>
                  </v-col>
                  <v-col
                    sm="3"
                    class="ml-10"
                  >
                    <span>Service Tier: <strong>{{ quote.serviceTier }}</strong></span>
                  </v-col>
                  <v-col
                    sm="3"
                    class="ml-10"
                  >
                    <span>Compute Tier: <strong>{{ quote.computeTier }}</strong></span>
                  </v-col>
                  <v-col
                    sm="3"
                    class="ml-10"
                  >
                    <span>Hardware Type: <strong>{{ quote.hardwareType }}</strong></span>
                  </v-col>
                  <v-col
                    sm="3"
                    class="ml-10"
                  >
                    <span>Instance: <strong>{{ quote.instance }}</strong></span>
                  </v-col>
                  <v-col
                    sm="7"
                    class="ml-10 d-flex"
                  >
                    <span style="width: 500px">#Instances: <strong>{{ quote.numberInstances }}</strong></span>
                    <span style="width: 500px">X: <strong>{{ quote.x }}</strong></span>
                    <span style="width: 500px">Period: <strong>{{ quote.period }}</strong></span>
                  </v-col>
                  <v-col
                    sm="3"
                    class="d-flex"
                  >
                    <p style="margin-left: 110px; margin-top: 25px; font-weight: 700">
                      Price: <strong>{{ quote.price }}</strong>
                    </p>
                  </v-col>
                </v-row>
              </template>
            </v-container>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'MyQuotes',
    data () {
      return {
        activePicker: null,
        startDate: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        endDate: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        menuStartDate: false,
        menuEndDate: false,
        selectServices: [],
        selectProviders: [],
        quotes: [
          {
            service: 'Virtual Machine',
            provider: 'AWS',
            description: 'Google Cloud Tuvi',
            price: 8000,
            date: '2022-04-20',
            region: 'Region 01',
            os: 'Ubuntu 18.04',
            type: 'Standard',
            tyer: 'Tier 01',
            category: 'Compute',
            instance: '1',
            vm: '1',
            x: '1',
            period: '12',
          },
          {
            service: 'Virtual Machine',
            provider: 'Azure',
            description: 'Google Cloud Tuvi',
            price: 7000,
            date: '2022-03-01',
            region: 'Region 01',
            os: 'Ubuntu 18.04',
            type: 'Standard',
            tyer: 'Tier 01',
            category: 'Compute',
            instance: '1',
            vm: '1',
            x: '1',
            period: '12',
          },
          {
            service: 'Serverless',
            provider: 'AWS',
            description: 'Google Cloud Tuvi',
            price: 8000,
            date: '2022-05-25',
            region: 'Region 01',
            memorySize: '1',
            tier: 'Tier 01',
            memorySizeCal: '1',
            executionTime: '1',
            executionPerMonth: '1',
          },
          {
            service: 'Data Base',
            provider: 'AWS',
            description: 'Google Cloud Tuvi',
            price: 8000,
            date: '2022-05-25',
            region: 'Region 01',
            type: 'Standard',
            backupStorage: '1',
            purchaseModel: '1',
            serviceTier: '1',
            computeTier: '1',
            hardwareType: '1',
            instance: '1',
            numberInstances: '1',
            x: '1',
            period: '12',
          },
        ],
        snackBarDrawerEmpty: false,
        snackBarDrawer: false,
        snackBarDrawerDelete: false,
        quotesSelected: [],
        services: ['Virtual Machine', 'Serverless', 'Data Base'],
        providers: ['Azure', 'Oracle', 'AWS', 'Alibaba', 'Google', ' IBM'],
      }
    },
    methods: {
      save (date) {
        this.$refs.menu.save(date)
      },
      search () {
        this.quotesSelected = []
        if (this.selectServices.length === 0 || this.selectProviders.length === 0) {
          this.snackBarDrawer = true
          setTimeout(() => {
            this.snackBarDrawer = false
          }, 3000)
        } else {
          this.quotes.forEach(quote => {
            if (this.selectServices.includes(quote.service) && this.selectProviders.includes(quote.provider) && this.startDate <= quote.date && quote.date <= this.endDate) {
              this.quotesSelected.push(quote)
            }
          })
        }
        console.log(this.quotesSelected.length)
        if (this.quotesSelected.length === 0) {
          this.snackBarDrawerEmpty = true
        }
      },
      deleteQuote (id) {
        this.quotesSelected.splice(id, 1)
        this.quotes.splice(id, 1)
        this.snackBarDrawerDelete = true
        if (this.quotes.length === 0) {
          this.snackBarDrawerEmpty = true
        }
      },
    },
  }
</script>

<style scoped></style>
