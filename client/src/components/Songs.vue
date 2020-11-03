<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <b-card bg-variant="dark" text-variant="white" title="Songs">
        <b-card-text>
          <div v-for="song in songs" :key="song.id">
            {{song.title}} -
            {{song.artist}} -
            {{song.album}}
          </div>
        </b-card-text>
      </b-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from './Panel'
import SongsService from '../services/SongsService'

export default {

  components: {
    Panel
  },
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
    this.songs = (await SongsService.index()).data
  }
}
</script>

<style scoped>
</style>
