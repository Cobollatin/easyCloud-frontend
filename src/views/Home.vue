<template>
  <v-container
    id="dashboard-view"
    fluid
    tag="section"
  >
    <v-row>
      <v-col
        md="6"
      >
        <material-card
          color="blue darken-4"
          full-header
        >
          <template #heading>
            <div class="pa-8 white--text">
              <div class="text-h4 font-weight-light">
                My Providers
              </div>
            </div>
          </template>
          <v-card-text>
            <template>
              <v-row>
                <v-col
                  v-for="provider in providers"
                  :key="provider.id"
                  class="d-flex child-flex"
                  cols="4"
                >
                  <v-img
                    :src="provider.src"
                    aspect-ratio="1"
                    class="grey lighten-2"
                  />
                </v-col>
              </v-row>
            </template>
          </v-card-text>
        </material-card>
      </v-col>
      <v-col
        cols="12"
        md="6"
      >
        <material-card
          color="blue darken-4"
          full-header
        >
          <template #heading>
            <div class="pa-8 white--text">
              <div class="text-h4 font-weight-light">
                My Quotes
              </div>
            </div>
          </template>
          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="items"
            />
          </v-card-text>
        </material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

  export default {
    name: 'Home',

    emits: ['response'],
    data: () => ({
      title: 'Home',
      headers: [
        {
          sortable: false,
          text: '#',
          value: 'id',
        },
        {
          sortable: false,
          text: 'Name',
          value: 'name',
        },
        {
          sortable: false,
          text: 'Price',
          value: 'price',
          align: 'center',
        },
        {
          sortable: false,
          text: 'Date',
          value: 'date',
          align: 'center',
        },
      ],
      items: [
        {
          id: 1,
          name: 'Quote 1',
          price: '$500',
          date: '31-02-2020',
        },
        {
          id: 2,
          name: 'Quote 2',
          price: '$400',
          date: '01-08-2021',
        },
        {
          id: 3,
          name: 'Quote 3',
          price: '$1500',
          date: '05-02-2022',
        },
      ],
      providers: [
        {
          id: 1,
          name: 'Azure',
          src: 'https://i0.wp.com/happydevops.com/wp-content/uploads/2020/07/blue_azure_logo.jpg?resize=400%2C400&ssl=1',
        },
        {
          id: 2,
          name: 'Google Cloud',
          src: 'https://oodoo.com.mx/wp-content/uploads/2020/06/Google-Cloud-1-945x709-1.png',
        },
        {
          id: 3,
          name: 'AWS',
          src: 'https://logo.clearbit.com/aws.amazon.com/',
        },
        {
          id: 4,
          name: 'Alibaba',
          src: 'https://logo.clearbit.com/alibaba.com/',
        },
        {
          id: 5,
          name: 'IBM',
          src: 'https://logo.clearbit.com/ibm.com/',
        },
        {
          id: 6,
          name: 'Oracle Cloud',
          src: 'https://logo.clearbit.com/cloud.oracle.com/',
        },
      ],
    }),
  }
</script>
