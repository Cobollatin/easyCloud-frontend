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
    </v-row>
    <v-row>
      <v-col
        sm="12"
      >
        <v-card
          v-for="quote in quotes"
          :key="quotes.indexOf(quote)"
          width="auto"
          class="mx-auto mb-5"
        >
          <v-banner
            v-if="quote.provider"
            single-line
          >
            <v-card-title
              class="text-h2 font-weight-black"
              style="color: #0072C3"
            >
              {{ quote.title}}
              <v-spacer />
            </v-card-title>
            <template
              v-if="selectServices === 'Virtual Machine'"
            >
              <v-row style="margin-top: 15px; margin-left: 10px;">
                <v-col
                  sm="6"
                >
                  <p style="font-weight:400;">
                    {{ selectServices }}: <strong>A1:1GB Ram 40Gb Storage</strong>
                  </p>
                </v-col>
                <v-col sm="6">
                  <p style="font-weight:400;">
                    Provider: <strong>{{ provider }}</strong>
                  </p>
                </v-col>
              </v-row>
              <v-row style="margin-top: 15px; margin-left: 10px;">
                <v-col sm="6">
                  <p style="font-weight:400;">
                    Quantity: <strong>2 Instance</strong>
                  </p>
                </v-col>
                <v-col sm="6">
                  <p style="font-weight:400;">
                    Time to use: <strong>40 Hours</strong>
                  </p>
                </v-col>
              </v-row>
              <v-row style=" margin-top: 15px; margin-left: 10px;">
                <v-col
                  sm="3"
                  class="d-flex"
                >
                  <p style="font-weight: 700 ">
                    Price: $300
                  </p>
                </v-col>
              </v-row>
            </template>
          </v-banner>
        </v-card>
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
      selectProviders: [],
      services: [
        'Virtual Machine', 'Serverless', 'Data Base',
      ],
      providers: [
        'Azure', 'Oracle', 'AWS', 'Alibaba', 'Google', ' IBM',
      ],
      quotes: [
        {
          title: 'Quote Title 1',
          service: 'Virtual Machine',
          provider: 'Azure',
          quantity: '2 Instance',
          time: '40 Hours',
          price: '$300',
        },
        {
          title: 'Quote Title 2',
          service: 'Serverless',
          provider: 'IBM',
          quantity: '2 Instance',
          time: '10 Hours',
          price: '$300',
        },
        {
          title: 'Quote Title 3',
          service: 'Virtual Machine',
          provider: 'Oracle',
          quantity: '2 Instance',
          time: '30 Hours',
          price: '$300',
        },
        {
          title: 'Quote Title 4',
          service: 'Data Base',
          provider: 'AWS',
          quantity: '2 Instance',
          time: '50 Hours',
          price: '$300',
        },
        {
          title: 'Quote Title 5',
          service: 'Virtual Machine',
          provider: 'Alibaba',
          quantity: '2 Instance',
          time: '25 Hours',
          price: '$300',
        },
        {
          title: 'Quote Title 6',
          service: 'Data Base',
          provider: 'Azure',
          quantity: '2 Instance',
          time: '100 Hours',
          price: '$300',
        },
      ],
    }),
  }
</script>
