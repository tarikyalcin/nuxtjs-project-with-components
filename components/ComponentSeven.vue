<template>

<div class="side">
  <div class="son-bloglar">
    <div class="baslik"><h3>✏️ Blog'dan Son Yazılar</h3></div>
    <div class="box">
      <ul>
        <li v-for="(blog, index) in latestBlogs" :key="index">
          <a href="#"><h4>{{ blog.title }}</h4></a>
          <small><i>{{ blog.date }}</i></small>
        </li>
      </ul>
    </div>
  </div>

  <div class="rehber">
    <div class="baslik"><h3>ℹ️ İşlem Rehberi</h3></div>
    <div class="box">
      <ul>
        <li><a href="#">Sistem nasıl işliyor?</a></li>
        <li><a href="#">İstediğim ürünü nasıl alırım?</a></li>
        <li><a href="#">Nasıl ödeme yapabilirim?</a></li>
        <li><a href="#">Kargo ücreti ne kadar?</a></li>
        <li><a href="#">Teslimat süresi nedir?</a></li>
        <li><a href="#">Elden satış imkanı var mı?</a></li>
        <li><a href="#">Ürün hakkında nasıl bilgi alırım?</a></li>
        <li><a href="#">Siparişimi nasıl takip edebilirim?</a></li>
        <li><a href="#">Birden fazla satıcıdan ürün alırsam nasıl gönderilir?</a></li>
        <li><a href="#">Kargo birleştirme nedir?</a></li>
      </ul>
    </div>
  </div>
</div>

</template>

<style>
  .side { 
    width: 280px;
    padding: 10px;
  }
  .box {
    border: 1px solid #eee4cd;
    margin: 5px 10px;
  }
  a {
    text-decoration: none;
    color: #333;
  }
  h3 {
    color: #931818;
  }
  h4 {
    font-weight: 400;
    margin-bottom: 5px;
  }
  li {
    text-indent: 20px;
    margin: 5px;
    list-style-type: none;
    margin-left: -10px;
    margin-right: 20px;
  }

</style>

<script setup>

import { onMounted } from 'vue';
const latestBlogs = ref([]);

onMounted(() => {
  if (process.client) {
    const blogCards = document.querySelectorAll('.blog-card');
    const blogs = Array.from(blogCards).map((card) => {
      const title = card.querySelector('h2')?.innerText.trim() || 'Başlık bulunamadı'; 
      const date = card.querySelector('.date')?.innerText.trim() || 'Tarih bulunamadı';
      return { title, date };
    });

    latestBlogs.value = blogs.slice(0, 4);
  }
});

</script>

<script>
  export default {
    name: 'ComponentSeven',
  };
</script>
  