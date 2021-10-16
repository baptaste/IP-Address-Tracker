<template>
  <div class="results">
      <ul class="results__list">
        <li class="results__list-item">
          <h2 class="results__list-data-title">IP Address</h2>
          <p class="results__list-data-content"
          v-if="this.$store.state.clients.userClient && this.$store.state.clients.clientQuery === null">
            {{ this.$store.state.clients.userClient.ip }}
          </p>
          <p class="results__list-data-content"
          v-if="this.$store.state.clients.clientQuery !== null">
            {{ this.$store.state.clients.clientQuery.ip }}
          </p>
        </li>
        <li class="results__list-item">
          <h2 class="results__list-data-title">Location</h2>
          <p class="results__list-data-content"
          v-if="this.$store.state.clients.userClient && this.$store.state.clients.clientQuery === null">
            {{ this.$store.state.clients.userClient.location.city }},
            {{ this.$store.state.clients.userClient.location.region }}
            {{ this.$store.state.clients.userClient.location.postalCode }}
            ({{ this.$store.state.clients.userClient.location.country }})
          </p>
          <p class="results__list-data-content"
          v-if="this.$store.state.clients.clientQuery !== null">
            {{ this.$store.state.clients.clientQuery.location.city }},
            {{ this.$store.state.clients.clientQuery.location.region }}
            {{ this.$store.state.clients.clientQuery.location.postalCode }}
            ({{ this.$store.state.clients.clientQuery.location.country }})
          </p>
        </li>
        <li class="results__list-item">
          <h2 class="results__list-data-title">Timezone</h2>
          <p class="results__list-data-content"
          v-if="this.$store.state.clients.userClient && this.$store.state.clients.clientQuery === null">
            UTC {{ this.$store.state.clients.userClient.location.timezone }}
          </p>
          <p class="results__list-data-content"
          v-if="this.$store.state.clients.clientQuery !== null">
            UTC {{ this.$store.state.clients.clientQuery.location.timezone }}
          </p>
        </li>
        <li class="results__list-item">
          <h2 class="results__list-data-title">ISP</h2>
          <p class="results__list-data-content"
          v-if="this.$store.state.clients.userClient && this.$store.state.clients.clientQuery === null">
            {{ this.$store.state.clients.userClient.isp }}
          </p>
          <p class="results__list-data-content"
          v-if="this.$store.state.clients.clientQuery !== null">
            {{ this.$store.state.clients.clientQuery.isp }}
          </p>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'Results',
}
</script>

<style lang="scss">
$DarkGray: hsl(0, 0%, 59%);

.results {
  width: 80%;
  height: 150px;
  position: absolute;
  top: 70%;
  left: 10%;
  background-color: white;
  color: black;
  border-radius: 15px;
  z-index: 5000;

  &__list {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style-type: none;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
    padding: 0 1rem;

    &-data-title {
      width: 100%;
      font-size: .8rem;
      margin: 0;
      color: $DarkGray;
      text-align: left;
      &::after {
        content: none;
      }
    }

    &-data-content {
      font-weight: 700;
      text-transform: capitalize;
    }

    &-item {
      position: relative;
      height: 70%;
      width: 20%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: left;
      text-transform: uppercase;
      padding: 0 1rem;

      &::after {
        content: '';
        position: absolute;
        right: 0;
        width: 1px;
        height: 60%;
        background-color: $DarkGray;
      }

      &:last-child {
        &::after {
          content: none;
        }
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .results {
    width: 90%;
    height: auto;
    margin: 0 auto;
    left: 5%;

    &__list {
      flex-direction: column;
      padding: 2rem 0 1rem;

      &-data-title {
        text-align: center;
      }

      &-item {
        width: 90%;
        text-align: center;

        &::after {
          content: none;
        }
      }
    }
  }
}
</style>