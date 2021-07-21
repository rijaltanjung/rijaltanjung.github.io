<template>
  <div>
    <h1>Form HTML</h1>
    <p>Form HTML digunakan untuk mengumpulkan input dari user. Sebuah input dari user seringkali dikirim ke server untuk diproses.</p>
    <p>Contoh:</p>
    <pre><code class="language-html">&ltform action="/proses.php"&gt
  &ltlabel for="fname"&gtNama Depan:&lt/label&gt&ltbr&gt
  &ltinput type="text" id="fname" name="fname" value="Toni"&gt&ltbr&gt
  &ltlabel for="lname"&gtNama Belakang:&lt/label&gt&ltbr&gt
  &ltinput type="text" id="lname" name="lname" value="Hawk"&gt&ltbr&gt&ltbr&gt
  &ltinput type="submit" value="Kirim"&gt
&lt/form&gt</code></pre>
    <p>Kode diatas akan menjadi seperti ini:</p>
    <form action="/proses.php">
      <label for="fname">Nama Depan:</label><br>
      <input type="text" id="fname" name="fname" value="Toni"><br>
      <label for="lname">Nama Belakang:</label><br>
      <input type="text" id="lname" name="lname" value="Hawk"><br><br>
      <input type="submit" value="Kirim">
    </form>
    <p>Jika kamu klik tombol "Kirim", maka form-data akan dikirim ke halaman <code>proses.php</code></p>
    <hr class="mb-4">

    <h1>Elemen &ltform&gt</h1>
    <p>Elemen <code>&ltform&gt</code> adalah wadah untuk berbagai jenis elemen input, seperti : field text, checkbox, radio, buttons, submit button, dan lain-lain.</p>
    <hr class="mb-4">

    <h1>Elemen &ltinput&gt</h1>
    <p>Elemen <code>&ltinput&gt</code> pada HTML adalah elemen form yang paling sering digunakan. Element <code>&ltinput&gt</code> dapat ditampilkan dengan berbagai cara, tergantung dari atribut <code>type</code>nya.</p>
    <p>Berikut adalah beberapa contohnya:</p>

    <table class="table table-bordered table-striped table-hover">
      <tbody><tr>
        <th style="width:250px">Type</th>
        <th>Deskripsi</th>
      </tr>
      <tr>
        <td>&lt;input type="text"&gt;</td>
        <td>Menampilkan sebaris field input text</td>
      </tr>
      <tr>
        <td>&lt;input type="radio"&gt;</td>
        <td>Menampilkan radio button (untuk memilih salah satu dari beberapa pilihan)</td>
      </tr>
      <tr>
        <td>&lt;input type="checkbox"&gt;</td>
        <td>Menampilkan checkbox (untuk memilih nol atau banyak dari pilihan)</td>
      </tr>
      <tr>
        <td>&lt;input type="submit"&gt;</td>
        <td>Menampilkan tombol submit (untuk mengirim form)</td>
      </tr>
      <tr>
        <td>&lt;input type="button"&gt;</td>
        <td>Menampilkan tombol yang dapat di klik</td>
      </tr>
      </tbody>
    </table>
    <hr class="mb-4">

    <h1>Field Text</h1>
    <p>Elemen <code>&ltinput type="text"&gt</code> mendefinisikan input field text sebaris pada sebuah form HTML.</p>
    <p>Sebagai contoh:</p>
    <pre><code class="language-html">&ltform action="/proses.php"&gt
  &ltlabel for="fname"&gtNama Depan:&lt/label&gt&ltbr&gt
  &ltinput type="text" id="fname" name="fname" value="Toni"&gt&ltbr&gt
  &ltlabel for="lname"&gtNama Belakang:&lt/label&gt&ltbr&gt
  &ltinput type="text" id="lname" name="lname" value="Hawk"&gt&ltbr&gt&ltbr&gt
&lt/form&gt</code></pre>
    <p>Kode diatas akan menjadi seperti ini:</p>
    <form>
      <label for="fname">Nama Depan:</label><br>
      <input type="text" id="fname" name="fname" value="Toni"><br>
      <label for="lname">Nama Belakang:</label><br>
      <input type="text" id="lname" name="lname" value="Hawk"><br><br>
    </form>
    <hr class="mb-4">

    <h1>Elemen &ltlabel&gt</h1>
    <p>Perhatikan penggunaan elemen <code>&ltlabel&gt</code> pada contoh diatas.</p>
    <p>Tag <code>&ltlabel&gt</code> mendefinisikan label untuk banyak bentuk elemen.</p>
    <p>Elemen <code>&ltlabel&gt</code> sangat berguna untuk pengguna yang menggunakan screen-reader (orang yang memiliki keterbatasan penglihatan). Sebab screen-reader akan membacakan dengan keras sebuah label ketika user fokus pada elemen tersebut.</p>
    <p>Elemen <code>&ltlabel&gt</code> juga membantu pengguna yang kesulitan mengklik daerah yang sangat kecil (seperti tombol radio dan checkbox), sebab ketika user mengklik text sebuah label, itu mengaktifkan tombol radio/checkbox.</p>
    <p>Atribut <code>for</code> dari sebuah tag label harus sama dengan <code>id</code> dari elemen <code>&ltinput&gt</code> untuk membuat mereka saling terkait.</p>

    <p>Sebagai contoh:</p>
    <pre><code class="language-html">&ltform&gt
  &ltlabel for="fname"&gtNama Depan:&lt/label&gt&ltbr&gt
  &ltinput type="text" id="fname" name="fname" value="Toni"&gt&ltbr&gt
&lt/form&gt</code></pre>
    <p>Kode diatas akan menjadi seperti ini:</p>
    <form>
      <label for="fname">Nama Depan:</label><br>
      <input type="text" id="fname" name="fname" value="Toni"><br>
      <label for="lname">Nama Belakang:</label><br>
      <input type="text" id="lname" name="lname" value="Hawk"><br><br>
    </form>
    <hr class="mb-4">

    <h1>Tombol Radio</h1>
    <p>Elemen <code>&ltinput type="radio"&gt</code> mendefinisikan sebuah tombol radio.</p>
    <p>Tombol radio memungkinkan pengguna memilih satu dari sejumlah pilihan yang disediakan</p>
    <p>Contoh:</p>
    <pre><code>&ltp&gtPilih bahasa pemrograman favorit anda:&lt/p&gt

&ltform&gt
  &ltinput type="radio" id="html" name="fav_language" value="HTML"&gt
  &ltlabel for="html"&gtHTML&lt/label&gt&ltbr&gt
  &ltinput type="radio" id="css" name="fav_language" value="CSS"&gt
  &ltlabel for="css"&gtCSS&lt/label&gt&ltbr&gt
  &ltinput type="radio" id="javascript" name="fav_language" value="JavaScript"&gt
  &ltlabel for="javascript"&gtJavaScript&lt/label&gt
&lt/form&gt</code></pre>
    <p>Dibawah ini adalah bagaimana code HTML diatas akan ditampilkan pada sebuah browser:</p>
    <p>Pilih bahasa pemrograman favorit anda:</p>

    <form>
      <input type="radio" id="html" name="fav_language" value="HTML">
      <label for="html">HTML</label><br>
      <input type="radio" id="css" name="fav_language" value="CSS">
      <label for="css">CSS</label><br>
      <input type="radio" id="javascript" name="fav_language" value="JavaScript">
      <label for="javascript">JavaScript</label>
    </form>
    <hr class="mb-4">

    <h1>Checkbox</h1>
    <p>Elemen <code>&ltinput type="checkbox"&gt</code> mendefinisikan sebuah checkbox.</p>
    <p>Checkbox memungkinkan pengguna untuk memilih nol atau banyak pilihan dari pilihan yang tersedia.</p>
    <pre><code>&ltform&gt
  &ltinput type="checkbox" id="vehicle1" name="vehicle1" value="Sepeda"&gt
  &ltlabel for="vehicle1"&gt Saya memiliki sebuah sepeda&lt/label&gt&ltbr&gt
  &ltinput type="checkbox" id="vehicle2" name="vehicle2" value="Mobil"&gt
  &ltlabel for="vehicle2"&gt Saya memiliki sebuah mobil&lt/label&gt&ltbr&gt
  &ltinput type="checkbox" id="vehicle3" name="vehicle3" value="Perahu"&gt
  &ltlabel for="vehicle3"&gt Saya memiliki sebuah perahu&lt/label&gt
&lt/form&gt</code></pre>
    <p>Dibawah ini adalah bagaimana code HTML diatas akan ditampilkan pada sebuah browser:</p>
    <form>
      <input type="checkbox" id="vehicle1" name="vehicle1" value="Sepeda">
      <label for="vehicle1"> Saya memiliki sebuah sepeda</label><br>
      <input type="checkbox" id="vehicle2" name="vehicle2" value="Mobil">
      <label for="vehicle2"> Saya memiliki sebuah mobil</label><br>
      <input type="checkbox" id="vehicle3" name="vehicle3" value="Perahu">
      <label for="vehicle3"> Saya memiliki sebuah perahu</label>
    </form>
    <hr class="mb-4">

    <h1>Tombol Submit</h1>
    <p>Elemen <code>&ltinput type="submit"&gt</code> mendefinisikan sebuah tombol untuk mengirim form-data ke halaman form-handler.</p>
    <p>Form-handler biasanya adalah sebuah file di server dengan skrip untuk memproses data input.</p>
    <p>Form-handler ditentukan dalam atribut <code>action</code> dalam tag <code>&ltform&gt</code>.</p>
    <pre><code>&ltform action="/proses.php"&gt
  &ltlabel for="fname"&gtNama Depan:&lt/label&gt&ltbr&gt
  &ltinput type="text" id="fname" name="fname" value="Toni"&gt&ltbr&gt
  &ltlabel for="lname"&gtNama Belakang:&lt/label&gt&ltbr&gt
  &ltinput type="text" id="lname" name="lname" value="Hawk"&gt&ltbr&gt&ltbr&gt
  &ltinput type="submit" value="Kirim"&gt
&lt/form&gt</code></pre>
    <p>Kode diatas akan menjadi seperti ini:</p>
    <form action="/proses.php">
      <label for="fname">Nama Depan:</label><br>
      <input type="text" id="fname" name="fname" value="Toni"><br>
      <label for="lname">Nama Belakang:</label><br>
      <input type="text" id="lname" name="lname" value="Hawk"><br><br>
      <input type="submit" value="Kirim">
    </form>
    <hr class="mb-4">

    <h1>Atribut Name untuk  &ltinput&gt</h1>
    <p>Perhatikan bahwa setiap field input harus memiliki atribut <code>name</code> yang akan dikirimkan.</p>
    <p>Jika atribut <code>name</code> dihilangkan, nilai field input tidak akan terkirim sama sekali.</p>


    <p>Sumber: <a href="https://www.w3schools.com/html/html_forms.asp" target="_blank">w3schools.com</a></p>
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