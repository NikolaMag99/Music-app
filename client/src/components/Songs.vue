<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <b-card bg-variant="dark" text-variant="white" title="Songs">
           <b-icon class="nota1" icon="music-note" font-scale="3"></b-icon>
          <router-link :to="{name: 'songs-create'}">
            <b-icon class="nota" icon="plus" font-scale="3.5"></b-icon>
          </router-link>

        <b-card-group columns>
          <div v-for="song in songs" :key="song.id">
            <v-layout>
              <v-flex xs6>
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
<!--                <v-btn-->
<!--                  class ="cyan"-->
<!--                  @click = "navigateTo({-->
<!--                  name: 'song',-->
<!--                  params: {-->
<!--                    songId: song.id-->
<!--                   }-->
<!--                  })">-->
<!--                  View-->
<!--                </v-btn>-->
              </v-flex>

              <v-flex xs6>
                <img class="album-image" :src="song.albumImageUrl" />

              </v-flex>
            </v-layout>
<!--            {{song.title}} - -->
<!--            {{song.artist}} - -->
<!--            {{song.album}}-->
          </div>
        </b-card-group>
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
  async mounted () {
    this.songs = (await SongsService.index()).data
  }
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
font-size: 16px;
}
.song-title {
  font-size: 24px;
}
.song-artist {
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
