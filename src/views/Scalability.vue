<template>
  <v-container
    id="dashboard-view"
    fluid
    tag="section"
  >
    <v-row>
      <v-col
        class="text-h1"
        md="6"
      >
        My Services
      </v-col>
    </v-row>
    <v-row>
      <v-col
        sm="4"
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
    </v-row>
    <v-row>
      <v-col
        sm="12"
      >
        <v-expansion-panels
          v-for="quote in quotes"
          :key="quotes.indexOf(quote)"
          v-model="panel"
          multiple
        >
          <v-expansion-panel
            v-if=" (selectServices === quote.service) || (selectServices === '')"
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
                  {{ quote.title }}
                  <v-spacer />
                </v-card-title>
                <template>
                  <v-row style="margin-top: 15px; margin-left: 10px;">
                    <v-col
                      sm="6"
                    >
                      <p style="font-weight:400;">
                        {{ quote.service }}: <strong>{{ quote.instance }}</strong>
                      </p>
                    </v-col>
                    <v-col sm="6">
                      <p style="font-weight:400;">
                        Provider: <strong>{{ quote.provider }}</strong>
                      </p>
                    </v-col>
                  </v-row>
                  <v-row style="margin-top: 15px; margin-left: 10px;">
                    <v-col sm="6">
                      <p style="font-weight:400;">
                        Quantity: <strong>{{ quote.quantity }}</strong>
                      </p>
                    </v-col>
                    <v-col sm="6">
                      <p style="font-weight:400;">
                        Time to use: <strong>{{ quote.time }}</strong>
                      </p>
                    </v-col>
                  </v-row>
                  <v-row style=" margin-top: 15px; margin-left: 10px;">
                    <v-col
                      sm="3"
                      class="d-flex"
                    >
                      <p style="font-weight: 700 ">
                        ${{ quote.price }}
                      </p>
                    </v-col>
                  </v-row>
                </template>
              </v-banner>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-form>
                <v-container>
                  <v-row>
                    <v-col
                      cols="12"
                      md="4"
                    >
                      <v-text-field
                        v-model="toIncrease"
                        label="Percent Increase"
                        required
                      />
                    </v-col>

                    <v-col
                      cols="12"
                      md="4"
                    >
                      <v-text-field
                        v-model="period"
                        label="Change Period (hours)"
                        required
                      />
                    </v-col>

                    <v-col
                      cols="12"
                      md="4"
                    >
                      <v-text-field
                        v-model="time"
                        label="Total time of changes (hours)"
                        required
                      />
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
              <v-row style=" margin-top: 15px; margin-left: 10px;">
                <v-col
                  sm="3"
                  class="d-flex"
                >
                  <p style="font-weight: 700 ">
                    {{ (time > 0 && period > 0 && toIncrease > 0) && parseFloat(quote.price)*time*period*toIncrease !== null ? `$${time*quote.price*period*toIncrease}` : `$${quote.price}` }}
                  </p>
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Scalability',
    data: () => ({
      title: 'Scalability',
      selectServices: '',
      toIncrease: null,
      time: null,
      period: null,
      selectProviders: [],
      services: [
        'Virtual Machine', 'Serverless', 'Data Base',
      ],
      quotes: [
        {
          title: 'Quote Title 1',
          service: 'Virtual Machine',
          provider: 'Azure',
          quantity: '2 Instances',
          instance: 'VM1',
          time: '40 Hours',
          price: 300.00,
          x: 'aaaa',
        },
        {
          title: 'Quote Title 2',
          service: 'Serverless',
          provider: 'IBM',
          quantity: '2 Instances',
          time: '10 Hours',
          instance: 'SL1',
          price: 100.00,
        },
        {
          title: 'Quote Title 3',
          service: 'Virtual Machine',
          provider: 'Oracle',
          quantity: '2 Instances',
          instance: 'VM2',
          time: '30 Hours',
          price: 300.00,
        },
        {
          title: 'Quote Title 4',
          service: 'Data Base',
          provider: 'AWS',
          quantity: '2 Instances',
          instance: 'DB1',
          time: '50 Hours',
          price: 500.00,
        },
        {
          title: 'Quote Title 5',
          service: 'Virtual Machine',
          provider: 'Alibaba',
          quantity: '2 Instances',
          instance: 'VM3',
          time: '25 Hours',
          price: 30.00,
        },
        {
          title: 'Quote Title 6',
          service: 'Data Base',
          provider: 'Azure',
          quantity: '2 Instances',
          time: '100 Hours',
          instance: 'DB2',
          price: 1500.00,
        },
      ],
    }),
  }
</script>
