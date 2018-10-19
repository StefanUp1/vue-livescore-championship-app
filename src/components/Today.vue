<template>
  <div>
    <h1>{{ todayDate }}</h1>

<!--
    <h1 v-if="noFixtures">
      No games today.
    </h1>
-->

    <ul class="list-group">
      <li v-if="fixture.match_live == 1" class="list-group-item" v-for="fixture in fixtures">
        <router-link :to="{name: 'singleFixture', params: {fixture: fixture}}">
          <span class="badge badge-secondary info">
            LIVE
          </span>
          {{ fixture.match_hometeam_name }} - {{ fixture.match_awayteam_name}}
        </router-link>
      </li>

      <li v-else class="list-group-item">
        <span class="info">
          {{ fixture.match_time }}h
        </span>
        {{ fixture.match_hometeam_name }} - {{ fixture.match_awayteam_name}}
      </li>
    </ul>

  </div>
</template>


<script>
  import moment from 'moment'

  export default {
    data() {
      return {
        fixtures: [],
        noFixtures: false,
        date: new Date()
      }
    },
    computed: {
      todayDate() {
        return moment(this.date).format("YYYY-MM-DD")
      }
    },
    methods: {
      getFixtures() {
        fetch(`https://apifootball.com/api/?action=get_events&from=${this.todayDate}&to=${this.todayDate}&league_id=63&APIkey=51d9ac8fbe11e79e2bcba99d48a61323f5ebf0a30b582607f9318f9d97236b2c`)
          .then(res => res.json())
          .then(data => {
            if (data.error) {
              this.noFixtures = true
              this.fixtures = []
            } else {
              this.noFixtures = false
              this.fixtures = []
              this.fixtures.push(...data)
            }
          })
      }
    },
    created() {
      this.getFixtures()
    }
  }

</script>

<style scoped>
  .list-group-item {
    position: relative;
  }

  .info {
    position: absolute;
    left: 10px;
  }

</style>
