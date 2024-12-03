<template>
  <div class="container">
    <h1 class="title">📚 Son Eklenenler</h1>
    <div class="book-grid">
      <div v-for="book in books" :key="book.id" class="book-item">
        <img :src="book.image" alt="Book Image" class="book-image" />
        <div class="book-info">
          <h3>{{ truncatedTitle(book.name) }}</h3> 
          <p class="author-price">
            <span class="author">{{ truncatedAuthor(book.author) }}</span> - <span class="price">{{ book.price }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface Book {
  id: number;
  name: string;
  author: string;
  price: string;
  image: string;
}

// Kitap verilerini tanımlıyoruz
const books = ref<Book[]>([
  { id: 1, name: 'Avrasyada Şamanlar', author: 'MIHALY HOPPAL', price: '90,00 ₺', image: '/images/books/AvrasyadaŞamanlar.jpg' },
  { id: 2, name: 'Bilişsel Davranış Terapisinde Bilinçli Uygulama', author: 'James F. Boswell', price: '459₺', image: '/images/books/BilişselDavranışlarTerapisindeBilinçliUygulama.jpg' },
  { id: 3, name: "BİRİNCİ DÜNYA SAVAŞI'NDA İSTANBUL'A YAPILAN HAVA SALDIRILARI", author: 'EMİN KURT - MESUT GÜVENBAŞ', price: '64₺', image: '/images/books/BirinciDünyaSavaşındaİstanbulaYapılanHavaSaldırıları.jpg' },
  { id: 4, name: 'DENİZLER ALTINDA YİRMİ BİN FERSAH', author: 'Jules Verne', price: '70₺', image: '/images/books/DenizlerAltındaYirmiBinFersah.jpg' },
  { id: 5, name: 'GÖNÜL SOHBETLERİ GÜLDESTESİ IV', author: 'FEYZİ HALICI, H. YURDABAK, A. SATOĞLU', price: '5₺', image: '/images/books/GönülSohbetleri.jpg' },
  { id: 6, name: 'Hükümdar ve Siyaset Kitabı', author: 'İbn Abdirabbih', price: '20₺', image: '/images/books/HükümdarVeSiyaset.jpg' },
  { id: 7, name: 'SAKIN BÜYÜME ÇOCUK', author: 'MUHANMET RECEPARAR', price: '40₺', image: '/images/books/SakınBüyümeÇocuk.jpg' },
  { id: 8, name: 'TARİHİ GERÇEKLER IŞIĞINDA BELGELERLE MUSTAFA KEMAL ATATÜRK', author: 'YUSUF KOÇ - ALİ KOÇ', price: '37₺', image: '/images/books/TarihiGerçeklerIşığındaMustafaKemalAtatürk.jpg' },
  { id: 9, name: 'THE ICE ROSE', author: 'EUROPE AFS', price: '14₺', image: '/images/books/TheIceRose.jpg' },
  { id: 10, name: 'TÜRKİYE TÜRKÇESİ GRAMERİ ŞEKİL BİLGİSİ ', author: 'ZEYNEP KORKMAZ', price: '65₺', image: '/images/books/TürkiyeTürkçesiGrameriŞekilBilgisi.jpg' },
  { id: 11, name: 'Yalnız Adamın Hayalleri', author: 'J.J RUSSEAU', price: '15₺', image: '/images/books/YalnızAdamınHayalleri.jpg' },
  { id: 12, name: 'YAZILAR YAZGILAR GİBİDİR SİLİNMEZ', author: 'TÜRKER GÖKSEL', price: '4,50₺', image: '/images/books/YazılarYazgılarGibidirSilinmez.jpg' }
])


const truncatedTitle = (title: string) => {
  return title.length > 20 ? title.slice(0, 20) + '...' : title;
}


const truncatedAuthor = (author: string) => {
  return author.length > 13 ? author.slice(0, 13) + '...' : author;
}
</script>

<style scoped>
.container {
  background-color: #faf7ec;
  padding: 10px;
  border-radius: 8px;
  max-width: 1000px;
  margin: auto;
}

.title {
  color: #931818;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 1.5rem;
}

.book-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

.book-item {
  text-align: center;
}

.book-image {
  width: 50%;
  height: auto;
  margin-bottom: 5px;
}

.book-info h3 {
  margin: 3px 0;
  font-size: 1rem;
  color: #23528e;
  white-space: nowrap; /* Tek satırda kalmasını sağlar */
  overflow: hidden;
  text-overflow: ellipsis; /* Uzun başlıklar için "..." */
}

.book-info p {
  margin: 0;
  font-size: 0.9rem;
}

.author-price {
  display: flex;
  justify-content: center;
  align-items: center;
}

.author {
  color: #acaaa3;
}

.price {
  color: black; 
}
</style>
