<template>
  <div class="table-responsive-sm">
    <table class="table table-success table-striped table-bordered">
      <thead>
        <tr>
          <th scope="col" data-toggle="tooltip" data-placement="top" title="Position">#</th>
          <th scope="col" data-toggle="tooltip" data-placement="top" title="Teams">Teams</th>
          <th scope="col" data-toggle="tooltip" data-placement="top" title="Games Played">GP</th>
          <th scope="col" data-toggle="tooltip" data-placement="top" title="Wins">W</th>
          <th scope="col" data-toggle="tooltip" data-placement="top" title="Draws">D</th>
          <th scope="col" data-toggle="tooltip" data-placement="top" title="Loses">L</th>
          <th scope="col" data-toggle="tooltip" data-placement="top" title="Goals For">GF</th>
          <th scope="col" data-toggle="tooltip" data-placement="top" title="Goals Against">GA</th>
          <th scope="col" data-toggle="tooltip" data-placement="top" title="Points">PTS</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="team in teams">
          <th scope="row">{{ team.overall_league_position }}</th>
          <th>{{ team.team_name }}</th>
          <td>{{ team.overall_league_payed}}</td>
          <td>{{ team.overall_league_W}}</td>
          <td>{{ team.overall_league_D }}</td>
          <td>{{ team.overall_league_L }}</td>
          <td>{{ team.overall_league_GF }}</td>
          <td>{{ team.overall_league_GA }}</td>
          <td>{{ team.overall_league_PTS}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        teams: []
      }
    },
    methods: {
      getStandings() {
        fetch('https://apifootball.com/api/?action=get_standings&league_id=63&APIkey=51d9ac8fbe11e79e2bcba99d48a61323f5ebf0a30b582607f9318f9d97236b2c')
          .then(res => res.json())
          .then(data => {
            this.teams.push(...data)
          })
      }
    },
    created() {
      this.getStandings()
    }
  }

</script>
