<template>
    
  <div class="eight">

    <div class="ayni-satir">

      <div class="uyelik">
        <div class="baslik"><h2>Üyelik</h2></div>
        <div class="box-renkli">
          <ul>
            <li><a href="#">Nasıl üye olurum?</a></li>
            <li><a href="#">Güvenli Ticaret Döngüsü</a></li>
            <li><a href="#">Kullanıcı Sözleşmesi</a></li>
            <li><a href="#">Gizlilik Politikası</a></li>
          </ul>
        </div>
      </div>

      <div class="alicilar">
        <div class="baslik"><h2>Alıcılar İçin</h2></div>
        <div class="box-renkli">
          <ul>
            <li><a href="#">Arama yapma, Ürün İnceleme</a></li>
            <li><a href="#">Kredi Kartı Güvenliği</a></li>
            <li><a href="#">Alış-Veriş Nasıl Gerçekleşiyor?</a></li>
            <li><a href="#">Teslimamt süresi nedir?</a></li>
          </ul>
        </div>
      </div>

      <div class="saticilar">
        <div class="baslik"><h2>Satıcılar İçin</h2></div>
        <div class="box-renkli">
          <ul>
            <li><a href="#">Satıcı Rehberi</a></li>
            <li><a href="#">Komisyon ve Ücretler</a></li>
            <li><a href="#">Satıcı Başarı Oranı ve Yorumlar</a></li>
            <li><a href="#">Elden satış imkanı var mı?</a></li>
          </ul>
        </div>
      </div>
    </div>


    <div class="sss">
      <div class="baslik"><h2>Sıkça Sorulan Sorular</h2></div>
      <div class="box">
        <ul>
          <li><a href="#">Sistem nasıl işliyor?</a></li>
          <li><a href="#">İstediğim ürünü nasıl alırım?</a></li>
          <li><a href="#">Teslimat süresi nedir?</a></li>
          <li><a href="#">Siparişimi nasıl takip edebilirim?</a></li>
          <li><a href="#">Ürün hakkında nasıl bilgi alırım?</a></li>
          <li><a href="#">Birden fazla satıcıdan ürün alırsam nasıl gönderilir?</a></li>
          <li><a href="#">Kargo birleştirme nedir?</a></li>
          <li><a href="#">Nasıl Ödeme Yapabilirim?</a></li>
          <li><a href="#">Kargo ücreti ne kadar?</a></li>
          <li><a href="#">Kondisyon yıldızları ne anlama geliyor?</a></li>
          <li><a href="#">Site yönetimine nasıl ulaşırım?</a></li>
        </ul>
      </div>
    </div>

  </div>

</template>

<style>
  .eight .ayni-satir {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }
  .box-renkli {
    background: #eee4cd;
    padding: 5px;
  }
  .eight h2 {
    color: #931818;
  }
  .eight li {
    color: #337ab7;
    padding-bottom: 5px;
  }
  .eight a {
    text-decoration: none;
    color: #337ab7;
  }
  .sss {
    width: 70%;
  }
  /*Burada yazılar 3 sütuna dağılmış, ekran küçülünce alt alta iniyor.
  Onu yapamadım*/
  @media (min-width: 1000px) {
    .sss {
      width: 100%;
    }
  }

</style>
  
  <script>
  export default {
    name: 'ComponentEight',
  };
  </script>
  