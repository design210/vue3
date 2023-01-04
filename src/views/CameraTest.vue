<template>
  <div>
    <!-- <input
      type="file"
      accept="image/*"
      capture="camera"
    /> -->
    <video
      ref="video"
      @canplay="initCanvas()"
    >stream</video>
    <button @click="takePicture">
      click
    </button>
    <canvas
      ref="canvas"
      style="display:none"
    ></canvas>
    <img :src="imgUrl" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      video: null,
      canvas: null,
      imgUrl:null,
    };
  },
  mounted() {
    this.video = this.$refs.video;
    this.canvas = this.$refs.canvas;
    this.startCapture();
  },
  methods: {
    startCapture() {
      navigator.mediaDevices.getUserMedia({ video: true, audio:false }).then(stream => {
        this.video.srcObject = stream;
        this.video.play();
      }).catch(error => console.log(error));
    },
    takePicture(){
      let context = this.canvas.getContext("2d").drawImage(this.video, 0, 0, this.video.videoWidth, this.video.videoHeight);
      this.imgUrl = this.canvas.toDataURL('image/png');
    },
    initCanvas(){
      this.canvas.setAttribute('width', this.video.videoWidth);
      this.canvas.setAttribute('height', this.video.videoHeight);
    }
  }
};
</script>

<style>
    #camera {
        text-align: center;
        color: #2c3e50;
    }
    #video {
        background-color: #000000;
    }
    #canvas {
        display: none;
    }
    li {
        display: inline;
        padding: 5px;
    }
</style>