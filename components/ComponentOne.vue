<template>
  <div>
    
    <header class="header">
      Aradığınız Kitabın Adresi 📚 İndirimler ve Kampanyalar 👍 18 Yıldır Güvenle
    </header>
    
    
    <div class="top-bar">

<div class="logo">
  <a href="#">
    <img src="/images/logo.svg" alt="Logo" />
  </a>
</div>


      <div class="search-bar">
        <input type="text" placeholder="Satışta olan 11.135.107 kitap içinde" />
        <button>
          <i class="search-icon">🔍</i>
        </button>
      </div>


      <div class="links">
        <a href="#">Yardım</a>
        <div class="dropdown">
          <a href="#">Kategoriler</a>
          <div class="dropdown-content">
            <div class="dropdown-item">
              <span>Kitaplar</span>
              <div class="sub-menu">
                <a href="#">Roman</a>
                <a href="#">Bilim</a>
                <a href="#">Sanat</a>
              </div>
            </div>
            <div class="dropdown-item">
              <span>Dergiler</span>
              <div class="sub-menu">
                <a href="#">Moda</a>
                <a href="#">Teknoloji</a>
                <a href="#">Sağlık</a>
              </div>
            </div>
            <div class="dropdown-item">
              <span>Koleksiyon & Efemera</span>
              <div class="sub-menu">
                <a href="#">Kartpostallar</a>
                <a href="#">Pul</a>
                <a href="#">Antika</a>
              </div>
            </div>
          </div>
        </div>
        <a href="#"><i class="profile-icon">👤</i> Bana Özel</a>
        <a href="#"><i class="cart-icon">🛒</i> Sepetim (0)</a>

      </div>
    </div>


    <div class="red-bar">
      <a href="#">Detaylı Ara</a>
      <span class="separator"></span>
      <a href="#">Kitaplar</a>
      <span class="separator"></span>
      <a href="#">Dergiler</a>
      <span class="separator"></span>
      <a href="#">Sanat & Koleksiyon</a>
      <span class="separator"></span>
      <a href="#">Blog</a>
      <span class="separator"></span>
      <a href="#">Kitap Satıcıları</a>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ComponentOne',
});
</script>

<style scoped>
.header {
  background-color: #c9a046;
  color: #fff; 
  text-align: center;
  padding: 10px 0; 
  font-size: 25px; 
}

.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 10px 20px;
  border-bottom: 1px solid #ddd;
}

.logo img {
  margin-right: 30px;
  width: 120px;
}

.search-bar {
  display: flex;
  align-items: center;
  flex-grow: 1;
  max-width: 600px;
}

.search-bar input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
}

.search-bar button {
  padding: 8px 10px;
  background-color: #333;
  border: 1px solid #333;
  border-radius: 0 4px 4px 0;
  color: white;
  cursor: pointer;
}

.links {
  margin-right: 80px;
  display: flex;
  align-items: center;
}

.links a {
  margin-left: 15px;
  text-decoration: none;
  color: #333;
  font-size: 14px;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown-item {
  padding: 12px 16px;
}

.dropdown-item .sub-menu a {
  display: block;
  padding: 8px 16px;
  text-decoration: none;
  color: #333;
}

.red-bar {
  background-color: #981515;
  color: white;
  text-align: center;
  padding: 10px 0;
}

.red-bar a {
  color: white;
  margin: 0 10px;
  text-decoration: none;
}

.separator {
  margin: 0 10px;
  border-right: 1px solid white;
  height: 20px;
}
</style>
