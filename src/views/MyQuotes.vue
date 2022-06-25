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
          Select services
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
      <v-expansion-panels>
        <v-expansion-panel
          v-for="quote in quotesSelected"
          :key="quotes.indexOf(quote)"
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
                  Price: {{ quote.price }} -  Date:  {{ quote.date }}
                </p>
              </template>
            </v-banner>
          </v-expansion-panel-header>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </v-container>
</template>

<script>

  import { QuoteApiService } from '../services/quote.api.service'

  export default {
    name: 'MyQuotes',
    data () {
      return {
        quoteService: null,
        activePicker: null,
        startDate: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        endDate: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        menuStartDate: false,
        menuEndDate: false,
        selectServices: [],
        quotes: [],
        snackBarDrawerEmpty: false,
        snackBarDrawer: false,
        snackBarDrawerDelete: false,
        quotesSelected: [],
        services: ['Virtual Machine', 'Serverless', 'Data Base'],

      }
    },
    computed: {
     
    },
    created () {
      this.quoteService = new QuoteApiService()
      this.quoteService.getAll().then((response) => {
        this.quotes = response.data
      })
    },
    methods: {
      search () {
        this.quotesSelected = []
        if (this.selectServices.length === 0) {
          this.snackBarDrawer = true
          setTimeout(() => {
            this.snackBarDrawer = false
          }, 3000)
        } else {
          this.quotes.forEach(quote => {
            var qD = new Date(quote.date)
            var sD = new Date(this.startDate)
            var eD = new Date(this.endDate)
            console.log(quote)
            if (this.selectServices.includes(quote.cloudService) && sD <= qD) {
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
        this.quotesSelected.splice(id)
        this.quotes.splice(id)
        this.quoteService.delete(id).then((response) => {
          console.log(response.data);
          this.quotes = this.quotes.filter(
            (t) => t.id !== response.data.id
          );
          this.quotesSelected = [];
        })
      },
    },
  }
</script>

<style scoped></style>
