<template>
  <div class="about">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-xs-12">
          <h3 class="title"> {{ currentMateries.title }} </h3>
          <div class="imagewrap">
            <img :src="currentMateries.image" alt="">
          </div>
          <p> {{ currentMateries.phase }} </p>
          <p> {{ currentMateries.content }} </p>
        </div>
      </div>
    </div>
    <!-- <h2 id="m_60723011321010255281-semantic-web" style="font-variant-numeric: normal; font-variant-east-asian: normal; line-height: 1.25; color: rgb(49, 49, 49); margin-top: 1rem; font-size: 1.5rem; font-family: &quot;PT Sans&quot;, Helvetica, Arial, sans-serif; letter-spacing: -0.025rem;">1. Semantic Web</h2><p style="font-variant-numeric: normal; font-variant-east-asian: normal; color: rgb(81, 81, 81); font-family: &quot;PT Serif&quot;, Georgia, &quot;Times New Roman&quot;, serif; font-size: 20px; line-height: 30px;">Buatlah sebuah halaman web statis menggunakan HTML, CSS, JavaScript. Kamu bebas menentukan tema dan desain halaman web yang ingin dibuat. Kamu juga boleh membuat desain sendiri atau meniru halaman web yang kamu suka.</p><p style="font-variant-numeric: normal; font-variant-east-asian: normal; color: rgb(81, 81, 81); font-family: &quot;PT Serif&quot;, Georgia, &quot;Times New Roman&quot;, serif; font-size: 20px; line-height: 30px;"><strong style="color: rgb(48, 48, 48);">INGAT!</strong><span class="m_6072301132101025528Apple-converted-space">&nbsp;</span>cukup buat satu file<span class="m_6072301132101025528Apple-converted-space">&nbsp;</span><code class="m_6072301132101025528highlighter-rouge" style="font-family: Menlo, Monaco, &quot;Courier New&quot;, monospace; padding: 0.25em 0.5em; font-size: 17px; color: rgb(191, 97, 106); border-radius: 3px; background-color: rgb(249, 249, 249);">.html</code><span class="m_6072301132101025528Apple-converted-space">&nbsp;</span>saja! setelah selesai, lakukan validasi kode html kalian apakah sudah mengikuti standar W3C</p><ul style="font-variant-numeric: normal; font-variant-east-asian: normal; color: rgb(81, 81, 81); font-family: &quot;PT Serif&quot;, Georgia, &quot;Times New Roman&quot;, serif; font-size: 20px; line-height: 30px;"><li style="margin-left: 15px;">Ikuti standard-standard penulisan markup HTML dari<span class="m_6072301132101025528Apple-converted-space">&nbsp;</span><a href="https://www.w3.org/standards/semanticweb/" target="_blank" data-saferedirecturl="https://www.google.com/url?hl=en-GB&amp;q=https://www.w3.org/standards/semanticweb/&amp;source=gmail&amp;ust=1525996038499000&amp;usg=AFQjCNHympSAORt6aoqBKRarVq09u0Yhag" style="color: rgb(210, 132, 69);">W3C</a>.</li><li style="margin-left: 15px;">Setelah itu silakan validasi halaman web yang sudah kamu buat di<span class="m_6072301132101025528Apple-converted-space">&nbsp;</span><a href="https://validator.w3.org/" target="_blank" data-saferedirecturl="https://www.google.com/url?hl=en-GB&amp;q=https://validator.w3.org/&amp;source=gmail&amp;ust=1525996038499000&amp;usg=AFQjCNG-O8ZqNWYS6wpq2AGm4XhlmwUd_g" style="color: rgb(210, 132, 69);">https://validator.w3.org/</a>.</li><li style="margin-left: 15px;">Hilangkan semua error, warning masih bisa ditoleransi, tapi usahakan minimalisir sebaik mungkin.</li></ul><hr style="font-variant-numeric: normal; font-variant-east-asian: normal; box-sizing: border-box; margin: 1.5rem 0px; border-top-color: rgb(238, 238, 238); border-bottom-style: solid; border-bottom-color: rgb(255, 255, 255); color: rgb(81, 81, 81); font-family: &quot;PT Serif&quot;, Georgia, &quot;Times New Roman&quot;, serif; font-size: 20px; line-height: 30px;"><h2 id="m_60723011321010255282-to-do-fancy-rest-api-only" style="font-variant-numeric: normal; font-variant-east-asian: normal; line-height: 1.25; color: rgb(49, 49, 49); margin-top: 1rem; font-size: 1.5rem; font-family: &quot;PT Sans&quot;, Helvetica, Arial, sans-serif; letter-spacing: -0.025rem;">2. To Do Fancy (REST API only)</h2><p style="font-variant-numeric: normal; font-variant-east-asian: normal; color: rgb(81, 81, 81); font-family: &quot;PT Serif&quot;, Georgia, &quot;Times New Roman&quot;, serif; font-size: 20px; line-height: 30px;">Buatlah sebuah REST API untuk sebuah aplikasi To Do. Tujuan dari REST API To Do Fancy ini antara lain:</p><ul style="font-variant-numeric: normal; font-variant-east-asian: normal; color: rgb(81, 81, 81); font-family: &quot;PT Serif&quot;, Georgia, &quot;Times New Roman&quot;, serif; font-size: 20px; line-height: 30px;"><li style="margin-left: 15px;">CRUD To Do</li><li style="margin-left: 15px;">Sign-up dan Sign-in</li><li style="margin-left: 15px;">Authentication dan Authorization</li></ul> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'detailmateri',
  computed: {
    ...mapState([
      'currentMateries'
    ])
  }
}
</script>

<style scoped>

@media only screen and (max-width: 375px) {
  .title {
    padding: 10px;
    font-size: 25px;
    font-weight: bold;
    color: grey !important;
  }
  .imagewrap {
    width: 100%;
    background: red;
    overflow: hidden;
  }
  img {
    width: 100% !important;
  }
}
/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 425px) {
  .title {
    padding: 10px;
    font-size: 25px;
    font-weight: bold;
    color: grey !important;
  }
  .imagewrap {
    width: 100%;
    background: red;
    overflow: hidden;
  }
  img {
    width: 100% !important;
  }
}
/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {

}
@media only screen and (min-width: 858px) {

}
/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .title {
    /* padding: 10px; */
    font-size: 25px;
    font-weight: bold;
    color: grey !important;
  }
  .imagewrap {
    width: 100%;
    height: 400px;
    background: red;
    overflow: hidden;
  }
  img {
    margin-top: -30%;
    width: 100% !important;
  }
}
/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1024px) {
  .title {
    /* padding: 10px; */
    font-size: 25px;
    font-weight: bold;
    color: grey !important;
  }
  .imagewrap {
    width: 100%;
    height: 400px;
    background: red;
    overflow: hidden;
  }
  img {
    margin-top: -30%;
    width: 100% !important;
  }
}
</style>
