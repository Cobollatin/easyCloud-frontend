<template>
  <v-container
    id="user-profile-view"
    fluid
    tag="section"
  >
    <v-row justify="center">
      <v-col
        cols="12"
        md="6"
      >
        <app-card class="text-left mb-10">
          <v-card-title class="card-top has-btn">
            <h6 class="text-h3 ml-2 black--text">
              Free (current)
            </h6>
            <v-btn
              class="mb-4 mr-6 mt-5"
              color="blue darken-4 white--text"
              disabled
            >
              Your plan
            </v-btn>
          </v-card-title>
          <v-card-text class="card-content">
            <i class="dot" />
            <h4 class="text-h6 pt-3 white--text">
              You can only compare with three providers
            </h4>
          </v-card-text>
        </app-card>
        <app-card class="text-left mb-10">
          <v-card-title class="card-top has-btn">
            <h6 class="text-h3 ml-2 black--text">
              PROFESSIONAL
            </h6>
            <v-btn
              class="mb-4 mr-6 mt-5"
              color="blue darken-4 white--text"
              dark
            >
              Buy now
            </v-btn>
          </v-card-title>
          <v-card-text class="card-content">
            <i class="dot" />
            <h4 class="text-h6 pt-3 white--text">
              You can compare with all our providers
            </h4>
          </v-card-text>
        </app-card>
        <app-card class="text-left mb-10">
          <v-card-title class="card-top has-btn">
            <h6 class="text-h3 ml-2 black--text">
              BUSINESS
            </h6>
            <v-btn
              class="mb-4 mr-6 mt-5"
              color="blue darken-4 white--text"
              dark
            >
              Buy now
            </v-btn>
          </v-card-title>
          <v-card-text class="card-content has-itmes">
            <div class="card-content-item">
              <i class="dot" />
              <h4 class="text-h6 pt-3 white--text">
                We will be intermediaries between you and the providers.
              </h4>
            </div>
            <div class="card-content-item">
              <i class="dot" />
              <h4 class="text-h6 pt-3 white--text">
                Exclusive offer
              </h4>
            </div>
          </v-card-text>
        </app-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default { name: 'Upgrade' }
</script>

<style lang="scss" scoped>
  .card-top{
    background: #fffbfb;
    &.has-btn{
      display: flex;
      justify-content: space-between;
    }
  }
  .card-content{
    background: #4589FF;
    display: flex;
    align-items: center;
    &.has-itmes{
      flex-direction: column;
      align-items: start;
    }
  }
  .card-content-item{
      display: flex;
      align-items: center;
    }
  .dot{
    background: #fff;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    margin-right: 10px;
    transform: translate(50%, 50%);
  }
</style>
