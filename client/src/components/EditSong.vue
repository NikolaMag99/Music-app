<template>
  <div>
    <b-card-group columns>
      <form>
        <div class="boks">
          <b-card bg-variant="dark" text-variant="white">
            <p class="h4 text-center mb-4">Songs Metadata</p>
            <label for="defaultFormLoginEmailEx" class="grey-text">Title</label>
            <input type="email" id="defaultFormLoginEmailEx" class="form-control" v-model = "song.title"/>
            <br/>
            <label for="defaultFormLoginEmailEx" class="grey-text">Artist</label>
            <input type="email" class="form-control" v-model = "song.artist"/>
            <br/>
            <label for="defaultFormLoginEmailEx" class="grey-text">Genre</label>
            <input type="email" class="form-control" v-model = "song.genre"/>
            <br/>
            <label for="defaultFormLoginEmailEx" class="grey-text">Album</label>
            <input type="email" class="form-control" v-model = "song.album"/>
            <br/>
            <label for="defaultFormLoginEmailEx" class="grey-text">Album Image Url</label>
            <input type="email" class="form-control" v-model = "song.albumImageUrl"/>
            <br/>
            <label for="defaultFormLoginEmailEx" class="grey-text">YouTube ID</label>
            <input type="email"  class="form-control" v-model = "song.youtubeId"/>
          </b-card>
        </div>
        <b-card class="boks2" bg-variant="dark" text-variant="white">
          <div>
            <label for="defaultFormLoginEmailEx" class="grey-text">Tab</label>
            <b-form-textarea
              id="textarea"
              v-model="song.tab"
              rows="3"
              class="teksPolje">
            </b-form-textarea >
            <label for="defaultFormLoginEmailEx" class="grey-text">Lyrics</label>
            <b-form-textarea
              id="textarea"
              v-model="song.lyrics"
              rows="3"
              class="teksPolje">
            </b-form-textarea>
          </div>
        </b-card>
        <br>
        <br>
        <b-button
          class ="dugme"
          @click = "save">
          Save Song
        </b-button >
      </form>
    </b-card-group>
  </div>
</template>

<script>
import Panel from './Panel'
import SongsService from '../services/SongsService'
export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      }
    }
  },
  methods: {
    async save () {
      const songId = this.$store.state.route.params.songId
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields!'
        return
      }
      try {
        await SongsService.put(this.song)
        this.$router.push({
          name: 'song',
          params: {
            songId: songId
          }
        })
      } catch (error) {
        console.log(error)
      }
    }
  },
  async mounted () {
    try {
      const songId = this.$store.state.route.params.songId
      this.song = (await SongsService.show(songId)).data
      await SongsService.show(this.song)
    } catch (error) {
      console.log(error)
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
.teksPolje {
  height: 250px;
}
.boks {
  margin-left: 200px;
}
.boks2 {
  margin-left: 300px;
  height: 630px;
  /*margin-right: 300px;*/
}

.dugme {
  margin-top: 700px;
  margin-left: -1100px;
}
</style>
