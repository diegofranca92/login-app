<template>
  <q-page class="flex flex-center">
    <q-btn push color="teal" label="Alterar Imagem" @click="refresh" />
    <q-img
      :src="url"
      spinner-color="white"
      style="height: 140px; max-width: 150px"
    />
    <q-card class="my-card">
      <q-card-section>
        <div class="my-8">
          <image-uploader
            :preview="true"
            :className="['fileinput', { 'fileinput--loaded': hasImage }]"
            capture="environment"
            :debug="1"
            doNotResize="gif"
            :autoRotate="true"
            outputFormat="verbose"
            @input="setImage"
          >
            <label for="fileInput" slot="upload-label">
              <figure push>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                >
                  <path
                    class="path1"
                    d="M9.5 19c0 3.59 2.91 6.5 6.5 6.5s6.5-2.91 6.5-6.5-2.91-6.5-6.5-6.5-6.5 2.91-6.5 6.5zM30 8h-7c-0.5-2-1-4-3-4h-8c-2 0-2.5 2-3 4h-7c-1.1 0-2 0.9-2 2v18c0 1.1 0.9 2 2 2h28c1.1 0 2-0.9 2-2v-18c0-1.1-0.9-2-2-2zM16 27.875c-4.902 0-8.875-3.973-8.875-8.875s3.973-8.875 8.875-8.875c4.902 0 8.875 3.973 8.875 8.875s-3.973 8.875-8.875 8.875zM30 14h-4v-2h4v2z"
                  ></path>
                </svg>
              </figure>
              <span class="upload-caption">{{
                hasImage ? "Replace" : "Click to upload"
              }}</span>
            </label>
          </image-uploader>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<style>
#fileInput {
  display: none;
}
</style>

<script>
export default {
  name: 'Home',
  data () {
    return {
      hasImage: false,
      image: null,
      url: 'https://placeimg.com/500/300/nature'
    }
  },
  methods: {
    setImage: function (output) {
      this.hasImage = true
      this.image = output
      console.log(this.image)
    },
    refresh () {
      this.url = 'https://placeimg.com/500/300/nature?t=' + Math.random()
    }
  }
}
</script>
