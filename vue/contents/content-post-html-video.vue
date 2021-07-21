<template>
  <div>
    <h1>HTML &ltvideo> Tag</h1>
    <p>Contoh:</p>
    <pre><code class="language-html">&ltvideo width="320" height="240" controls&gt
  &ltsource src="movie.mp4" type="video/mp4"&gt
  &ltsource src="movie.ogg" type="video/ogg"&gt
  Browser anda tidak mendukung tag video.
&lt/video&gt</code></pre>
    <video width="320" height="240" controls controlsList="nodownload">
      <source src="https://images.all-free-download.com/footage_preview/webm/horses_101.webm" type="video/webm">
      Browser anda tidak mendukung tag video.
    </video>
    <br/>
    <hr class="mb-4">
    <h1>Definisi dan Penggunaan</h1>
    <p>Tag <code>&ltvideo></code> pada HTML digunakan untuk melekatkan (embed) konten video pada
    sebuah dokumen HTML, seperti cuplikan film ataupun streaming video.
    </p>
    <p>Tag <code>&ltvideo></code> bisa memiliki satu atau lebih tag <code>&ltsource></code> dengan sumber video yang
      berbeda-beda. Browser akan secara otomatis memilih sumber pertama yang format videonya telah di dukung oleh
      browser. Perlu dicatat, bahwa tidak semua format video bisa di gunakan sebagai sumber video.</p>

    <p>Ada 3 format video yang didukung oleh browser pada HTML: MP4, WebM, dan OGG. Berikut ini adalah penjelasanya.</p>

    <table class="table table-striped table-hover table-bordered">
      <tbody>
      <tr>
        <th style="width:25%">Browser</th>
        <th style="width:25%">MP4</th>
        <th style="width:25%">WebM</th>
        <th style="width:25%">Ogg</th>
      </tr>
      <tr>
        <td>Edge</td>
        <td>YES</td>
        <td>YES</td>
        <td>YES</td>
      </tr>
      <tr>
        <td>Chrome</td>
        <td>YES</td>
        <td>YES</td>
        <td>YES</td>
      </tr>
      <tr>
        <td>Firefox</td>
        <td>YES</td>
        <td>YES</td>
        <td>YES</td>
      </tr>
      <tr>
        <td>Safari</td>
        <td>YES</td>
        <td>YES</td>
        <td>NO</td>
      </tr>
      <tr>
        <td>Opera</td>
        <td>YES</td>
        <td>YES</td>
        <td>YES</td>
      </tr>
      </tbody></table>
    <hr class="my-4">

    <h1>Dukungan Browser</h1>
    <p>Angka-angka dalam tabel menentukan versi pertama dari browser yang sepenuhnya mendukung elemen ini.</p>
    <table class="table table-striped table-hover table-bordered browserref">
      <tbody><tr>
        <th style="width:20%;font-size:16px;text-align:left;">Element</th>
        <th style="width:16%;" class="bsChrome" title="Chrome"></th>
        <th style="width:16%;" class="bsEdge" title="Internet Explorer / Edge"></th>
        <th style="width:16%;" class="bsFirefox" title="Firefox"></th>
        <th style="width:16%;" class="bsSafari" title="Safari"></th>
        <th style="width:16%;" class="bsOpera" title="Opera"></th>
      </tr>
      <tr>
        <td style="text-align:left;"><code>&lt;video&gt</code></td>
        <td>4.0</td>
        <td>9.0</td>
        <td>3.5</td>
        <td>3.1</td>
        <td>11.5</td>
      </tr>
      </tbody>
    </table>
    <hr class="my-4">

    <h1>Atribut Opsional</h1>
    <p>Berikut ini adalah atribut opsional yang dapat digunakan dalam elemen <code>&ltvideo&gt</code></p>
    <table class="table table-striped table-hover table-bordered">
      <tbody><tr>
        <th style="width:20%">Atribut</th>
        <th style="width:20%">Nilai</th>
        <th style="width:50%">Deskripsi</th>
      </tr>
      <tr>
        <td><code>autoplay</code></td>
        <td>autoplay</td>
        <td>Menentukan apakah video akan otomatis diputar setelah halaman dimuat dan file video telah diunduh/siap.</td>
      </tr>
      <tr>
        <td><code>controls</code></td>
        <td>controls</td>
        <td>Menentukan apakah kontrol video harus ditampilkan (seperti tombol putar/jeda dll).</td>
      </tr>
      <tr>
        <td><code>height</code></td>
        <td><i>pixels</i></td>
        <td>Mengatur tinggi dari pemutar video.</td>
      </tr>
      <tr>
        <td><code>loop</code></td>
        <td>loop</td>
        <td>Menentukan apakah video akan diputar ulang setiap kali selesai.</td>
      </tr>
      <tr>
        <td><code>muted</code></td>
        <td>muted</td>
        <td>Menentukan apakah output audio dari video harus dibisukan.</td>
      </tr>
      <tr>
        <td><code>poster</code></td>
        <td><em>URL</em></td>
        <td>Menentukan gambar yang akan ditampilkan saat video sedang diunduh, atau hingga pengguna menekan tombol putar.</td>
      </tr>
      <tr>
        <td><code>preload</code></td>
        <td>auto<br>
          metadata<br>
          none</td>
        <td>Menentukan apa dan bagaimana menurut pembuat web video harus dimuat saat halaman dimuat.</td>
      </tr>
      <tr>
        <td><code>src</code></td>
        <td><i>URL</i></td>
        <td>Menentukan URL file video.</td>
      </tr>
      <tr>
        <td><code>width</code></td>
        <td><i>pixels</i></td>
        <td>Mengatur lebar dari pemutar video.</td>
      </tr>
      </tbody></table>


    <p>Sumber: <a href="https://www.w3schools.com/tags/tag_video.asp" target="_blank">w3schools.com</a></p>
  </div>
</template>

<script>
module.exports = {
  name: "content-post-html-video",
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