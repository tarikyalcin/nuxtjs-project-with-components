<template>

<div class="nine">
  <div class="baslik">Sepetim</div>
  <div class="sepet-box">
    <img src="/images/sepet.jpg" alt="sepet">
    <p>Sepetiniz Boş</p>
    <button class="ana-sayfa">Ana Sayfaya Dön</button>
  </div>
</div>

</template>



<style>
  .baslik {
    margin-left: 100px;
    font-size: 20px;
  }
  .nine .sepet-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  }
  .nine .ana-sayfa {
  padding: 10px 20px;
  background-color: #931818;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  }
  

</style>





<script>
  export default {
    name: 'ComponentNine',
  };
</script>
  