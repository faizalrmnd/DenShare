import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentMateries: '',
    materis: [
      {
        title: 'Problem Solving',
        intro: 'Dapat menyelesaikan masalah dalam kode, mengerti logic dasar problem solving',
        content: '<h1 class="m_-6763472911397849493page-title" style="font-variant-numeric: normal; font-variant-east-asian: normal; line-height: 1.25; color: rgb(48, 48, 48); font-size: 2rem; font-family: &quot;PT Sans&quot;, Helvetica, Arial, sans-serif; letter-spacing: -0.025rem;">Portfolio Week 5</h1><h2 id="m_-67634729113978494931-semantic-web" style="font-variant-numeric: normal; font-variant-east-asian: normal; line-height: 1.25; color: rgb(49, 49, 49); margin-top: 1rem; font-size: 1.5rem; font-family: &quot;PT Sans&quot;, Helvetica, Arial, sans-serif; letter-spacing: -0.025rem;">1. Semantic Web</h2><p style="font-variant-numeric: normal; font-variant-east-asian: normal; color: rgb(81, 81, 81); font-family: &quot;PT Serif&quot;, Georgia, &quot;Times New Roman&quot;, serif; font-size: 20px; line-height: 30px;">Buatlah sebuah halaman web statis menggunakan HTML, CSS, JavaScript. Kamu bebas menentukan tema dan desain halaman web yang ingin dibuat. Kamu juga boleh membuat desain sendiri atau meniru halaman web yang kamu suka.</p><p style="font-variant-numeric: normal; font-variant-east-asian: normal; color: rgb(81, 81, 81); font-family: &quot;PT Serif&quot;, Georgia, &quot;Times New Roman&quot;, serif; font-size: 20px; line-height: 30px;"><strong style="color: rgb(48, 48, 48);">INGAT!</strong><span class="m_-6763472911397849493Apple-converted-space">&nbsp;</span>cukup buat satu file<span class="m_-6763472911397849493Apple-converted-space">&nbsp;</span><code class="m_-6763472911397849493highlighter-rouge" style="font-family: Menlo, Monaco, &quot;Courier New&quot;, monospace; padding: 0.25em 0.5em; font-size: 17px; color: rgb(191, 97, 106); border-radius: 3px; background-color: rgb(249, 249, 249);">.html</code><span class="m_-6763472911397849493Apple-converted-space">&nbsp;</span>saja! setelah selesai, lakukan validasi kode html kalian apakah sudah mengikuti standar W3C</p><ul style="font-variant-numeric: normal; font-variant-east-asian: normal; color: rgb(81, 81, 81); font-family: &quot;PT Serif&quot;, Georgia, &quot;Times New Roman&quot;, serif; font-size: 20px; line-height: 30px;"><li style="margin-left: 15px;">Ikuti standard-standard penulisan markup HTML dari<span class="m_-6763472911397849493Apple-converted-space">&nbsp;</span><a href="https://www.w3.org/standards/semanticweb/" target="_blank" data-saferedirecturl="https://www.google.com/url?hl=en-GB&amp;q=https://www.w3.org/standards/semanticweb/&amp;source=gmail&amp;ust=1526035309086000&amp;usg=AFQjCNGeeBei_1nNj0JVC4KNlYRh-bvOLA" style="color: rgb(210, 132, 69);">W3C</a>.</li><li style="margin-left: 15px;">Setelah itu silakan validasi halaman web yang sudah kamu buat di<span class="m_-6763472911397849493Apple-converted-space">&nbsp;</span><a href="https://validator.w3.org/" target="_blank" data-saferedirecturl="https://www.google.com/url?hl=en-GB&amp;q=https://validator.w3.org/&amp;source=gmail&amp;ust=1526035309086000&amp;usg=AFQjCNEbTSth2g5fE_VJsqyFjuySW6gWOQ" style="color: rgb(210, 132, 69);">https://validator.w3.org/</a>.</li><li style="margin-left: 15px;">Hilangkan semua error, warning masih bisa ditoleransi, tapi usahakan minimalisir sebaik mungkin.</li></ul><hr style="font-variant-numeric: normal; font-variant-east-asian: normal; box-sizing: border-box; margin: 1.5rem 0px; border-top-color: rgb(238, 238, 238); border-bottom-style: solid; border-bottom-color: rgb(255, 255, 255); color: rgb(81, 81, 81); font-family: &quot;PT Serif&quot;, Georgia, &quot;Times New Roman&quot;, serif; font-size: 20px; line-height: 30px;"><h2 id="m_-67634729113978494932-to-do-fancy-rest-api-only" style="font-variant-numeric: normal; font-variant-east-asian: normal; line-height: 1.25; color: rgb(49, 49, 49); margin-top: 1rem; font-size: 1.5rem; font-family: &quot;PT Sans&quot;, Helvetica, Arial, sans-serif; letter-spacing: -0.025rem;">2. To Do Fancy (REST API only)</h2><p style="font-variant-numeric: normal; font-variant-east-asian: normal; color: rgb(81, 81, 81); font-family: &quot;PT Serif&quot;, Georgia, &quot;Times New Roman&quot;, serif; font-size: 20px; line-height: 30px;">Buatlah sebuah REST API untuk sebuah aplikasi To Do. Tujuan dari REST API To Do Fancy ini antara lain:</p><ul style="font-variant-numeric: normal; font-variant-east-asian: normal; color: rgb(81, 81, 81); font-family: &quot;PT Serif&quot;, Georgia, &quot;Times New Roman&quot;, serif; font-size: 20px; line-height: 30px;"><li style="margin-left: 15px;">CRUD To Do</li><li style="margin-left: 15px;">Sign-up dan Sign-in</li><li style="margin-left: 15px;">Authentication dan Authorization</li></ul><p style="font-variant-numeric: normal; font-variant-east-asian: normal; color: rgb(81, 81, 81); font-family: &quot;PT Serif&quot;, Georgia, &quot;Times New Roman&quot;, serif; font-size: 20px; line-height: 30px;">Pastikan REST API yang kamu buat memiliki mekanisme autentikasi dan autorisasi yang tepat sehingga data To Do hanya bisa diakses dan dimodifikasi oleh user yang membuat.</p><p style="font-variant-numeric: normal; font-variant-east-asian: normal; color: rgb(81, 81, 81); font-family: &quot;PT Serif&quot;, Georgia, &quot;Times New Roman&quot;, serif; font-size: 20px; line-height: 30px;">Tools yang digunakan:</p><ul style="font-variant-numeric: normal; font-variant-east-asian: normal; color: rgb(81, 81, 81); font-family: &quot;PT Serif&quot;, Georgia, &quot;Times New Roman&quot;, serif; font-size: 20px; line-height: 30px;"><li style="margin-left: 15px;">Express</li><li style="margin-left: 15px;">JWT</li><li style="margin-left: 15px;">Dotenv</li><li style="margin-left: 15px;">Mongoose</li><li style="margin-left: 15px;">Insomnia/Postman</li></ul><p style="font-variant-numeric: normal; font-variant-east-asian: normal; color: rgb(81, 81, 81); font-family: &quot;PT Serif&quot;, Georgia, &quot;Times New Roman&quot;, serif; font-size: 20px; line-height: 30px;">Kamu bebas menentukan skema untuk dokumen To Do dan dokumen User. Namun pada skema tersebut harus diperhatikan beberapa hal:</p><ul style="font-variant-numeric: normal; font-variant-east-asian: normal; color: rgb(81, 81, 81); font-family: &quot;PT Serif&quot;, Georgia, &quot;Times New Roman&quot;, serif; font-size: 20px; line-height: 30px;"><li style="margin-left: 15px;">terdapat<span class="m_-6763472911397849493Apple-converted-space">&nbsp;</span><em>timestamp</em><span class="m_-6763472911397849493Apple-converted-space">&nbsp;</span>berupa field<span class="m_-6763472911397849493Apple-converted-space">&nbsp;</span><code class="m_-6763472911397849493highlighter-rouge" style="font-family: Menlo, Monaco, &quot;Courier New&quot;, monospace; padding: 0.25em 0.5em; font-size: 17px; color: rgb(191, 97, 106); border-radius: 3px; background-color: rgb(249, 249, 249);">createdAt</code><span class="m_-6763472911397849493Apple-converted-space">&nbsp;</span>dan<span class="m_-6763472911397849493Apple-converted-space">&nbsp;</span><code class="m_-6763472911397849493highlighter-rouge" style="font-family: Menlo, Monaco, &quot;Courier New&quot;, monospace; padding: 0.25em 0.5em; font-size: 17px; color: rgb(191, 97, 106); border-radius: 3px; background-color: rgb(249, 249, 249);">updatedAt</code>(<wbr>diperbarui setiap update)</li><li style="margin-left: 15px;">username atau email harus unik</li><li style="margin-left: 15px;">password memiliki kriteria minimal seperti panjang minimum X karakter dan terdapat karakter angka</li></ul><h3 id="m_-6763472911397849493notes" style="font-variant-numeric: normal; font-variant-east-asian: normal; line-height: 1.25; color: rgb(49, 49, 49); margin-top: 1.5rem; font-size: 1.25rem; font-family: &quot;PT Sans&quot;, Helvetica, Arial, sans-serif; letter-spacing: -0.025rem;">NOTES</h3><p style="font-variant-numeric: normal; font-variant-east-asian: normal; color: rgb(81, 81, 81); font-family: &quot;PT Serif&quot;, Georgia, &quot;Times New Roman&quot;, serif; font-size: 20px; line-height: 30px;">REST API ini akan digunakan untuk aplikasi To Do Fancy pada portfolio berikutnya. Beri nama repositori untuk portfolio ini sebagai<span class="m_-6763472911397849493Apple-converted-space">&nbsp;</span><code class="m_-6763472911397849493highlighter-rouge" style="font-family: Menlo, Monaco, &quot;Courier New&quot;, monospace; padding: 0.25em 0.5em; font-size: 17px; color: rgb(191, 97, 106); border-radius: 3px; background-color: rgb(249, 249, 249);">todo-fancy</code><span class="m_-6763472911397849493Apple-converted-space">&nbsp;</span>dan pisahkan REST API ini ke dalam folder<code class="m_-6763472911397849493highlighter-rouge" style="font-family: Menlo, Monaco, &quot;Courier New&quot;, monospace; padding: 0.25em 0.5em; font-size: 17px; color: rgb(191, 97, 106); border-radius: 3px; background-color: rgb(249, 249, 249);">server</code>.</p><hr style="font-variant-numeric: normal; font-variant-east-asian: normal; box-sizing: border-box; margin: 1.5rem 0px; border-top-color: rgb(238, 238, 238); border-bottom-style: solid; border-bottom-color: rgb(255, 255, 255); color: rgb(81, 81, 81); font-family: &quot;PT Serif&quot;, Georgia, &quot;Times New Roman&quot;, serif; font-size: 20px; line-height: 30px;"><h2 id="m_-6763472911397849493ps" style="font-variant-numeric: normal; font-variant-east-asian: normal; line-height: 1.25; color: rgb(49, 49, 49); margin-top: 1rem; font-size: 1.5rem; font-family: &quot;PT Sans&quot;, Helvetica, Arial, sans-serif; letter-spacing: -0.025rem;">P.S</h2><p style="font-variant-numeric: normal; font-variant-east-asian: normal; color: rgb(81, 81, 81); font-family: &quot;PT Serif&quot;, Georgia, &quot;Times New Roman&quot;, serif; font-size: 20px; line-height: 30px;">Setiap tugas dibuat di repositori GitHub masing-masing. Pada hari senin minggu depan diharapkan kamu sudah menyelesaikan<em>Minimum Viable Product</em><span class="m_-6763472911397849493Apple-converted-space">&nbsp;</span>dari kedua tugas ini.</p>',
        phase: 'Phase 1',
        image: 'https://www.illumine.co.uk/wp-content/uploads/2016/01/Fotolia_76145133_XS.jpg'
      },
      {
        title: 'Roman Numerals',
        intro: 'Dapat mengkonversikan sebuah angka menjadi angka romawi',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure esse corporis inventore maiores repellendus repellat provident nesciunt praesentium aut, totam, facilis corrupti perspiciatis repudiandae? Nemo labore eveniet hic quod ab.',
        phase: 'Phase 1',
        image: 'https://www.wikihow.com/images/thumb/6/65/Use-Roman-Numerals-Step-1-Version-3.jpg/aid600223-v4-728px-Use-Roman-Numerals-Step-1-Version-3.jpg'
      },
      {
        title: 'Money Coins',
        intro: 'Dapat menyelesaikan masalah dalam kode, mengerti logic dasar problem solving',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure esse corporis inventore maiores repellendus repellat provident nesciunt praesentium aut, totam, facilis corrupti perspiciatis repudiandae? Nemo labore eveniet hic quod ab.',
        phase: 'Phase 1',
        image: 'https://img.etsystatic.com/il/56fb2c/812688327/il_340x270.812688327_n0jv.jpg?version=0'
      },
      {
        title: 'Roman Numerals Recursive',
        intro: 'Dapat menyelesaikan masalah dalam kode, mengerti logic dasar problem solving',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure esse corporis inventore maiores repellendus repellat provident nesciunt praesentium aut, totam, facilis corrupti perspiciatis repudiandae? Nemo labore eveniet hic quod ab.',
        phase: 'Phase 1',
        image: 'https://www.wikihow.com/images/thumb/6/65/Use-Roman-Numerals-Step-1-Version-3.jpg/aid600223-v4-728px-Use-Roman-Numerals-Step-1-Version-3.jpg'
      },
      {
        title: 'Money Coins',
        intro: 'Dapat menyelesaikan masalah dalam kode, mengerti logic dasar problem solving',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure esse corporis inventore maiores repellendus repellat provident nesciunt praesentium aut, totam, facilis corrupti perspiciatis repudiandae? Nemo labore eveniet hic quod ab.',
        phase: 'Phase 1',
        image: 'https://img.etsystatic.com/il/56fb2c/812688327/il_340x270.812688327_n0jv.jpg?version=0'
      },
      {
        title: 'Roman Numerals Recursive',
        intro: 'Dapat menyelesaikan masalah dalam kode, mengerti logic dasar problem solving',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure esse corporis inventore maiores repellendus repellat provident nesciunt praesentium aut, totam, facilis corrupti perspiciatis repudiandae? Nemo labore eveniet hic quod ab.',
        phase: 'Phase 1',
        image: 'https://www.wikihow.com/images/thumb/6/65/Use-Roman-Numerals-Step-1-Version-3.jpg/aid600223-v4-728px-Use-Roman-Numerals-Step-1-Version-3.jpg'
      },
      {
        title: 'Money Coins',
        intro: 'Dapat menyelesaikan masalah dalam kode, mengerti logic dasar problem solving',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure esse corporis inventore maiores repellendus repellat provident nesciunt praesentium aut, totam, facilis corrupti perspiciatis repudiandae? Nemo labore eveniet hic quod ab.',
        phase: 'Phase 1',
        image: 'https://img.etsystatic.com/il/56fb2c/812688327/il_340x270.812688327_n0jv.jpg?version=0'
      },
      {
        title: 'Roman Numerals Recursive',
        intro: 'Dapat menyelesaikan masalah dalam kode, mengerti logic dasar problem solving',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure esse corporis inventore maiores repellendus repellat provident nesciunt praesentium aut, totam, facilis corrupti perspiciatis repudiandae? Nemo labore eveniet hic quod ab.',
        phase: 'Phase 1',
        image: 'https://www.wikihow.com/images/thumb/6/65/Use-Roman-Numerals-Step-1-Version-3.jpg/aid600223-v4-728px-Use-Roman-Numerals-Step-1-Version-3.jpg'
      }
    ]
  },
  mutations: {
    currMateriMutation (state, payload) {
      console.log('mutation get payload => ', payload)
      state.currentMateries = payload
    }
  },
  actions: {
    currentMateri ({commit}, payload) {
      console.log('masuk action store')
      commit('currMateriMutation', payload)
    }
  }
})
