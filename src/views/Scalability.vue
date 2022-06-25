<template>
  <v-container
    id="dashboard-view"
    fluid
    tag="section"
  >
    <v-row>
      <v-col
        class="text-h2"
        md="10"
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
            v-if=" (selectServices === quote.cloudService) || (selectServices === '')"
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
                  {{ quote.title }} - {{ quote.cloudService }}
                  <v-spacer />
                </v-card-title>
                <template>
                  <v-row style="margin-top: 15px; margin-left: 10px;">
                    <v-col
                      sm="6"
                    >
                      <p style="font-weight:400;">
                        Date: {{ quote.date }} - Description:  <strong>{{ quote.description }}</strong>
                      </p>
                    </v-col>
                  </v-row>
                  <v-row style="margin-top: 15px; margin-left: 10px;" />
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
  import { QuoteApiService } from '../services/quote.api.service'
  export default {
    name: 'Scalability',
    data () {
      return {
        quoteService: null,
        title: 'Scalability',
        selectServices: '',
        toIncrease: null,
        time: null,
        period: null,
        selectProviders: [],
        services: [
          'Virtual Machine', 'Serverless', 'Data Base',
        ],
        quotes: [],
      }
    },
    created () {
      this.quoteService = new QuoteApiService()
      this.quoteService.getAll().then((response) => {
        this.quotes = response.data
        console.log(this.quotes)
      })
    },
  }
</script>
