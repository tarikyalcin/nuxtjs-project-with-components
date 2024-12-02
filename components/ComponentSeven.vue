<template>

<div class="son-bloglar">
  <div class="baslik">
    <h3>Blog'dan Son Yazılar</h3>
  </div>
  <div class="box">
    <ul>
      <li v-for="(blog, index) in latestBlogs" :key="index">
        <h4>{{ blog.title }}</h4>
        <small><i>{{ blog.date }}</i></small>
      </li>
    </ul>
  </div>
</div>
  



</template>


<style>
  .son-bloglar { 
    width: 30%;
    padding: 10px;
  }

  .box {
    border: 1px solid #add;
  }

  h3 {

  }





</style>

<script setup>
// Blogları seç
const blogCards = document.querySelectorAll(".blog-card");

// Verileri al
const blogs = Array.from(blogCards).map((card) => {
  const title = card.querySelector("h2").innerText.trim(); // Başlık
  const date = card.querySelector(".date").innerText.trim(); // Tarih
  return { title, date };
});

// Son 3 blogu seç
const latestBlogs = blogs.slice(0, 3);
</script>

<script>
  export default {
    name: 'ComponentSeven',
  };
</script>
  