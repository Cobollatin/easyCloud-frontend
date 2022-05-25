<template>
  <v-container fluid>
    <v-row>
      <v-col sm="6">
        <v-select
          v-model="selectServices"
          :items="services"
          :menu-props="{ offsetY: true }"
          background-color="#ffffff"
          color="blue darken-4"
          item-color="blue darken-4"
          label="Choose the service:"
          outlined
        />
      </v-col>
      <v-col sm="6">
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
      <!-- Provider Card-->
      <v-card
        v-for="provider in providers"
        :key="providers.indexOf(provider)"
        class="mx-auto mb-5"
        width="1030"
      >
        <v-banner
          v-if="
            selectProviders.indexOf(provider) !== -1 && selectServices !== ''
          "
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
              mdi-delete
            </v-icon>
          </v-card-title>
          <template v-if="selectServices === 'Virtual Machine'">
            <v-row class="mt-10">
              <v-col
                class="ml-10"
                sm="3"
              >
                <span>Region:
                  <strong>{{ virtualMachine[0].region }} </strong></span>
              </v-col>
              <v-col
                class="ml-10"
                sm="3"
              >
                <span>Operative System:
                  <strong>{{ virtualMachine[0].os }}</strong></span>
              </v-col>
              <v-col
                class="ml-10"
                sm="3"
              >
                <span>Type: <strong>{{ virtualMachine[0].type }}</strong></span>
              </v-col>
              <v-col
                class="ml-10"
                sm="3"
              >
                <span>Tyer: <strong>{{ virtualMachine[0].tyer }}</strong></span>
              </v-col>
              <v-col
                class="ml-10"
                sm="3"
              >
                <span>Category:
                  <strong>{{ virtualMachine[0].category }}</strong></span>
              </v-col>
              <v-col
                class="ml-10"
                sm="3"
              >
                <span>Instance series:
                  <strong>{{ virtualMachine[0].instance }}</strong></span>
              </v-col>
              <v-col
                class="ml-10 d-flex"
                sm="8"
              >
                <span
                  style="width: 700px"
                >Virtual Machines:
                  <strong>{{ virtualMachine[0].vm }}</strong></span>
                <span
                  style="width: 700px"
                >Months: <strong>{{ virtualMachine[0].x }}</strong></span>
                <span
                  class="ml-2"
                >Period: <strong>{{ virtualMachine[0].period }}</strong></span>
              </v-col>
              <v-col
                class="d-flex"
                sm="3"
              >
                <p
                  style="margin-left: 110px; margin-top: 33px; font-weight: 700"
                >
                  Price:
                  <strong>{{ virtualMachine[0].price }}</strong>
                </p>
              </v-col>
            </v-row>
          </template>
          <template v-if="selectServices === 'Serverless'">
            <v-row class="mt-10">
              <v-col
                class="ml-10"
                sm="3"
              >
                <span>Region: <strong>{{ serverless[0].region }}</strong></span>
              </v-col>
              <v-col
                class="ml-10"
                sm="3"
              >
                <span>Tier: <strong>{{ serverless[0].tier }}</strong></span>
              </v-col>
              <v-col
                class="ml-10"
                sm="3"
              >
                <span>Memory Size:
                  <strong>{{ serverless[0].memorySize }}</strong></span>
              </v-col>
              <v-col
                class="ml-10 d-flex"
                sm="7"
              >
                <span>Memory Size:
                  <strong>{{ serverless[0].memorySizeCal }}</strong></span>
                <span
                  class="ml-15"
                  style="width: 300px"
                >Execution Time:
                  <strong>{{ serverless[0].executionTime }}</strong></span>
                <span
                  style="width: 300px"
                >Execution Per month:
                  <strong>{{ serverless[0].executionPerMonth }}</strong></span>
              </v-col>
              <v-col
                class="d-flex"
                sm="3"
              >
                <p
                  style="margin-left: 110px; margin-top: 25px; font-weight: 700"
                >
                  Price: <strong>{{ serverless[0].price }}</strong>
                </p>
              </v-col>
            </v-row>
          </template>
          <template v-if="selectServices === 'Data Base'">
            <v-row class="mt-10">
              <v-col
                class="ml-10"
                sm="3"
              >
                <span>Region: <strong> {{ database[0].region }}</strong></span>
              </v-col>
              <v-col
                class="ml-10"
                sm="3"
              >
                <span>Type: <strong>{{ database[0].type }}</strong></span>
              </v-col>
              <v-col
                class="ml-10"
                sm="3"
              >
                <span>Backup Storage:
                  <strong>{{ database[0].backupStorage }}</strong></span>
              </v-col>
              <v-col
                class="ml-10"
                sm="3"
              >
                <span>Purchase Model:
                  <strong>{{ database[0].purchaseModel }}</strong></span>
              </v-col>
              <v-col
                class="ml-10"
                sm="3"
              >
                <span>Service Tier:
                  <strong>{{ database[0].serviceTier }}</strong></span>
              </v-col>
              <v-col
                class="ml-10"
                sm="3"
              >
                <span>Compute Tier:
                  <strong>{{ database[0].computeTier }}</strong></span>
              </v-col>
              <v-col
                class="ml-10"
                sm="3"
              >
                <span>Hardware Type:
                  <strong>{{ database[0].hardwareType }}</strong></span>
              </v-col>
              <v-col
                class="ml-10"
                sm="3"
              >
                <span>Instance: <strong>{{ database[0].instance }}</strong></span>
              </v-col>
              <v-col
                class="ml-10 d-flex"
                sm="7"
              >
                <span
                  style="width: 500px"
                >#Instances:
                  <strong>{{ database[0].numberInstances }}</strong></span>
                <span
                  style="width: 500px"
                >X: <strong>{{ database[0].x }}</strong></span>
                <span
                  class="ml-2"
                >Period: <strong>{{ database[0].period }}</strong></span>
              </v-col>
              <v-col
                class="d-flex"
                sm="3"
              >
                <p
                  style="margin-left: 110px; margin-top: 25px; font-weight: 700"
                >
                  Price: <strong>{{ database[0].price }}</strong>
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
    name: 'MyQuotes',
    data () {
      return {
        selectServices: '',
        selectProviders: [],
        virtualMachine: [
          {
            name: 'Virtual Machine',
            region: 'Region 01',
            os: 'Ubuntu 18.04',
            type: 'Standard',
            tyer: 'Tier 01',
            category: 'Compute',
            instance: '1',
            vm: '1',
            x: '1',
            period: '12',
            price: '$300',
          },
        ],
        serverless: [
          {
            name: 'Serverless',
            region: 'Region 01',
            memorySize: '1',
            tier: 'Tier 01',
            memorySizeCal: '1',
            executionTime: '1',
            executionPerMonth: '1',
            price: '$300',
          },
        ],
        database: [
          {
            name: 'Database',
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
            price: '$300',
          },
        ],
        services: ['Virtual Machine', 'Serverless', 'Data Base'],
        providers: ['Azure', 'Oracle', 'AWS', 'Alibaba', 'Google', ' IBM'],
        items: ['Region'],
      }
    },
  }
</script>

<style scoped></style>
