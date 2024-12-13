<template>
  <div>
      <div class="top-buttons-left">
      <button @click="navigateTo('blog')">Blog</button>
      <button @click="navigateTo('help')">Yardım</button>
    </div>

  
    <div class="top-buttons-right">
      <button @click="navigateTo('language')">English</button>
      <button @click="navigateTo('instagram')">
        <img src="/public/images/insta.png" alt="Instagram" />
      </button>
      <button @click="navigateTo('twitter')">
        <img src="/public/images/x.png" alt="Twitter" />
      </button>
    </div>




    <div class="carousel-container">
    
      <button class="arrow left" @click="prevImage">❮</button>


      <div class="carousel" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <img v-for="(image, index) in images" :key="index" :src="image" alt="Carousel Image" />
      </div>


      <button class="arrow right" @click="nextImage">❯</button>
    </div>



    <div class="campaign-banner">
      <img src="public/images/kampanyalar.jpg" alt="Kampanyalar" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Slider",
  data() {
    return {
      images: [
        "/images/image1.jpg",
        "/images/image2.jpg",
        "/images/image3.jpg",
        "/images/image4.jpg",
        "/images/image5.jpg",
        "/images/image6.jpg",
        "/images/image7.jpg",
        "/images/image8.jpg",
      ] as string[], // Resimler dizi olarak
      currentIndex: 0 as number, // currentIndex bir sayı olarak
      autoSlideInterval: null as NodeJS.Timeout | null, 
    };
  },
  mounted() {
    this.startAutoSlide();
  },
  beforeUnmount() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  },
  methods: {
    nextImage(): void {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prevImage(): void {
      this.currentIndex =
        (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    startAutoSlide(): void {
      this.autoSlideInterval = setInterval(() => {
        this.nextImage();
      }, 5000); // 5 sn
    },
    navigateTo(destination: string): void {
      switch (destination) {
        case "blog":
          window.location.href = "/blog";
          break;
        case "help":
          window.location.href = "/help";
          break;
        case "language":
          window.location.href = "/language";
          break;
        case "instagram":
          window.open("https://instagram.com", "_blank");
          break;
        case "twitter":
          window.open("https://twitter.com", "_blank");
          break;
        default:
          break;
      }
    },
  },
});
</script>

<style scoped>

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


.top-buttons-left {
  margin-top: 52px;
  margin-left: 620px;
  position: fixed;
  top: 0;
  left: 0;
  padding: 10px;
  display: flex;
  gap: 20px;
  z-index: 1000;
}


.top-buttons-right {
  margin-top: 45px;
  margin-right: 285px;
  position: fixed;
  top: 0;
  right: 0;
  padding: 10px;
  display: flex;
  gap: 20px;
  z-index: 1000;
}

/* Butonlar */
.top-buttons-left button,
.top-buttons-right button {
  padding: 8px 12px;
  background-color: transparent;
  color: rgb(0, 0, 0); 
  border: 2px solid black;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.top-buttons-left button:hover,
.top-buttons-right button:hover {
  background-color: #00000000;
  color: #0a0a0a; 
}

/* insta twiter fotosunun Boyutları */
.top-buttons-left img,
.top-buttons-right img {
  width: 18px;
  height: 18px;
  filter: invert(1);
}



.carousel-container {
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 80px auto 20px;
  overflow: hidden;
  border-radius: 8px;
}


.carousel {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel img {
  width: 100%;
  flex-shrink: 0;
  height: auto;
  display: block;
}


.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2rem;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
}

.arrow.left {
  left: 10px;
}

.arrow.right {
  right: 10px;
}


.campaign-banner {
  margin-top: 20px;
  text-align: center;
}

.campaign-banner img {
  max-width: 54%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
