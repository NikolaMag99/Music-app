<template>
  <b-container class="bv-example-row">
    <b-button
      class ="dugme"
    @click="navigateTo({
      name: 'song-edit',
      params: {
        songId: song.id
      }
    })">
      Edit Song
    </b-button >
    <b-row cols="2" class="gornji">
      <b-col><b-card bg-variant="dark" text-variant="black">
        <b-card columns>
          <v-layout>
            <v-flex xs3>
              <div class="song-title">
                {{song.title}}
              </div>
              <div class="song-artist">
                {{song.artist}}
              </div>
              <div class="song-ganre">
                {{song.genre}}
              </div>
              <br>
            </v-flex>
            <v-flex xs3>
              <img class="album-image" :src="song.albumImageUrl" />
            </v-flex>
            <br>
            <div class="song-album">
              {{song.album}}
            </div>
          </v-layout>
        </b-card>
      </b-card></b-col>
        <b-col><b-card bg-variant="dark" text-variant="black" class="gornjaDesno">
          <b-card columns class="gornjaDesnoTekst">
            <v-layout>
              <textarea v-model = "song.tab">
                <br>
              </textarea>
              <br>
            </v-layout>
          </b-card>
        </b-card></b-col>
    </b-row>
    <b-row class="donji">
        <b-col><b-card bg-variant="dark" text-variant="black">
          <b-card columns>
            <v-layout>
              <textarea v-model = "song.lyrics">
                <br>
              </textarea>
              <br>
            </v-layout>
          </b-card>
        </b-card></b-col>
      </b-row>
  </b-container>
</template>

<script>
import SongsService from '../services/SongsService'
import Panel from './Panel'
export default {
  components: {
    Panel
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  data () {
    return {
      song: {}
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
  }
}
</script>

<style scoped>
.dugme {
  margin-left: -305px;
}
.gornjaDesno {
  height: 862px;
}
.gornjaDesnoTekst {
  height: 820px;
}
.gornji {
  margin-left: -600px;
  width: 2000px;
}
.donji {
  margin-left: -600px;
  width: 2000px;
}
textarea {
  text-align: center;
  width: 100%;
  font-family: "Font Awesome\ 5 Free", sans-serif;
  border: none;
  height: 770px;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  padding: 40px;
}
.album-image {
  width: 70%;
}
.song-ganre {
  color: black;
  font-size: 19px;
}
.song-title {
  color: black;
  font-size: 28px;
}
.song-artist {
  color: black;
  font-size: 24px;
}
.song-album {
  color: black;
  font-size: 24px;
}
</style>
