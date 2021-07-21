<template>
  <div>
    <h1>List HTML</h1>
    <p>List HTML memungkinkan developer web untuk mengelompokkan satu set item terkait kedalam sebuah daftar.</p>
    <p>Contoh:</p>
    <pre><code>&lth2&gtList HTML Tidak Berurutan&lt/h2&gt
&ltul&gt
  &ltli&gtKopi&lt/li&gt
  &ltli&gtTeh&lt/li&gt
  &ltli&gtSusu&lt/li&gt
&lt/ul&gt
      &lth2&gtList HTML Berurutan&lt/h2&gt
&ltol&gt
  &ltli&gtKopi&lt/li&gt
  &ltli&gtTeh&lt/li&gt
  &ltli&gtSusu&lt/li&gt
&lt/ol&gt
</code></pre>
    <p>Kode diatas akan menjadi seperti ini:</p>
    <h2>List HTML Tidak Berurutan</h2>
    <ul>
      <li>Kopi</li>
      <li>Teh</li>
      <li>Susu</li>
    </ul>

    <h2>List HTML Berurutan</h2>

    <ol>
      <li>Kopi</li>
      <li>Teh</li>
      <li>Susu</li>
    </ol>
    <hr class="mb-4">

    <h1>List HTML Tidak Berurutan</h1>

    <p>List tidak berurutan dimulai dengan tag <code>&ltul&gt</code>. Setiap item list dimulai dengan tag <code>&ltli&gt</code></p>
    <p>Item list akan ditandai dengan bullet (lingkaran hitam kecil) secara default.</p>
    <hr class="mb-4">

    <h1>List HTML Berurutan</h1>
    <p>List yang diurutkan dimulai dengan tag <code>&ltol&gt</code>. Setiap item daftar dimulai dengan tag <code>&ltli&gt</code>.</p>
    <p>Item list akan ditandai dengan angka secara default.</p>
    <hr class="mb-4">

    <h1>Tag List pada HTML</h1>
    <p>Berikut ini adalah daftar tag yang tersedia untuk membuat sebuah list pada HTML</p>
    <table class="table table-bordered table-striped table-hover">
      <tbody><tr>
        <th>Tag</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>&lt;ul&gt;</td>
        <td>Mendefinisikan list yang tidak memiliki urutan</td>
      </tr>
      <tr>
        <td>&lt;ol&gt;</td>
        <td>Mendefinisikan list yang memiliki urutan</td>
      </tr>
      <tr>
        <td>&lt;li&gt;</td>
        <td>Mendefinisikan item list</td>
      </tr>
      </tbody>
    </table>


    <p>Sumber: <a href="https://www.w3schools.com/html/html_lists.asp" target="_blank">w3schools.com</a></p>
  </div>
</template>

<script>
module.exports = {
  name: "content-post-html-form",
  mounted() {
    this.$hljs.highlightAll();
  }
}
</script>

<style scoped>
pre {
  border-radius: 8px;
}

table.browserref th {
  height: 44px;
  background-repeat: no-repeat;
  background-position: center center;
  color: #555555;
  padding: 11px 5px 11px 5px;
  vertical-align: middle;
}

table.browserref td {
  text-align: center;
  padding: 8px;
  vertical-align: top;
}

table.browserref .bsChrome {
  background-image: url("https://www.w3schools.com/images/compatible_chrome.gif");
}

table.browserref .bsEdge {
  background-image: url("https://www.w3schools.com/images/compatible_edge.png");
}

table.browserref .bsFirefox {
  background-image: url("https://www.w3schools.com/images/compatible_firefox.png");
}

table.browserref .bsSafari {
  background-image: url("https://www.w3schools.com/images/compatible_safari.gif");
}

table.browserref .bsOpera {
  background-image: url("https://www.w3schools.com/images/compatible_opera.gif");
}
</style>