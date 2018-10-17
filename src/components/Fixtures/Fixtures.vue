<template>
  <div>
    <div class="row justify-content-md-center">
      <div class="col-xs-6">
        <span>From:</span>
        <datepicker v-model="fromDate" name="uniquename"></datepicker>
      </div>
      <div class="col-xs-6">
        To: <datepicker v-model="toDate" name="uniquename"></datepicker>
      </div>
    </div>

    <h1 v-if="noFixtures">No matches found. Please try diffrent date.</h1>
    <ul v-else class="list-group">
      <li v-if="fixture.match_status
 === 'FT' " class="list-group-item" v-for="fixture in fixtures">
        <span id="fixtureDate" class="timeDate">{{ fixture.match_date }}</span>
        <span class="badge badge-secondary info" data-toggle="tooltip" data-placement="top" title="Full Time">
          FT
        </span>
        <router-link :to="{name: 'singleFixture', params: {fixture: fixture}}">
          {{ fixture.match_hometeam_name }} {{ fixture.match_hometeam_score }} - {{ fixture.match_awayteam_score }} {{ fixture.match_awayteam_name }}
        </router-link>
      </li>

      <li v-else class="list-group-item">
        <span id="fixtureDate" class="timeDate">{{ fixture.match_date }}</span>
        <span id="fixtureTime" class="timeDate">{{ fixture.match_time }}h</span>
        {{ fixture.match_hometeam_name }} {{ fixture.match_hometeam_score }} - {{ fixture.match_awayteam_score }} {{ fixture.match_awayteam_name }}
      </li>

    </ul>
  </div>
</template>


<script>
  import moment from 'moment'
  import Datepicker from 'vuejs-datepicker'

  export default {
    components: {
      Datepicker
    },
    data() {
      return {
        fixtures: [],
        noFixtures: false,
        fromDate: moment().weekday(-4).format("YYYY-MM-DD"),
        toDate: moment().weekday(10).format("YYYY-MM-DD")
      }
    },
    computed: {
      fromDateFormated() {
        return moment(this.fromDate).format("YYYY-MM-DD")
      },
      toDateFormated() {
        return moment(this.toDate).format("YYYY-MM-DD")
      }
    },
    methods: {
      getFixtures() {
        fetch(`https://apifootball.com/api/?action=get_events&from=${this.fromDateFormated}&to=${this.toDateFormated}&league_id=63&APIkey=51d9ac8fbe11e79e2bcba99d48a61323f5ebf0a30b582607f9318f9d97236b2c`)
          .then(res => res.json())
          .then(data => {
            if (data.error) {
              this.fixtures = []
              this.noFixtures = true
            } else {
              this.noFixtures = false
              this.fixtures = []
              this.fixtures.push(...data)
            }
          })
          .catch(err => console.log(err))
      }
    },
    watch: {
      fromDate() {
        this.getFixtures()
      },
      toDate() {
        this.getFixtures()
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

  #fixtureDate {
    position: absolute;
    left: 10px;
  }

  #fixtureTime {
    position: absolute;
    left: 110px;
  }

  .vdp-datepicker {
    display: inline-block;
    margin: 20px 15px 20px 5px;
  }

  .info {
    position: absolute;
    left: 120px;
  }

</style>
