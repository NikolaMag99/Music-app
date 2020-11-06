<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <b-card bg-variant="dark" text-variant="white" title="Songs">
           <b-icon class="nota1" icon="music-note" font-scale="3"></b-icon>
          <router-link :to="{name: 'songs-create'}">
            <b-icon class="nota" icon="plus" font-scale="3.5"></b-icon>
          </router-link>

        <b-card columns>
          <div v-for="song in songs" :key="song.id">
            <v-layout>
              <v-flex xs3>
                <div class="song-title">
                  {{song.title}}
                </div>
                <div class="song-artist">
                  {{song.artist}}
                </div>
                <div class="song-ganre">
                  {{song.album}}
                </div>
                <br>
                <b-button
                  class ="dugme"
                  @click = "navigateTo({
                  name: 'song',
                  params: {
                    songId: song.id
                   }
                  })">
                  View
                </b-button>
              </v-flex>

              <v-flex xs3>
                <img class="album-image" :src="song.albumImageUrl" />
              </v-flex>
              <br> <br>  <br> <br>
            </v-layout>
          </div>
        </b-card>
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
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.songs = (await SongsService.index(value)).data
      }
    }
  }
  // async mounted () {
  //   this.songs = (await SongsService.index()).data
  // }
}
</script>

<style scoped>
.album-image {
  margin-right: 70px;
}
.dugme {
  margin-right: 10px;
}
.song-ganre {
color: black;
font-size: 16px;
}
.song-title {
  color: black;
  font-size: 24px;
}
.song-artist {
  color: black;
  font-size: 20px;
}
.nota1 {
  margin-right: -1200px;
  margin-bottom: 15px;
}
.nota {
  margin-right: 1155px;
}
.album-image {
  width: 20%;
}
</style>
