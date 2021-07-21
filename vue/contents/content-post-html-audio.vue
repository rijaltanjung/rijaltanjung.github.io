<template>
  <div>
    <h1>HTML &ltaudio> Tag</h1>
    <p>Contoh:</p>
    <pre><code class="language-html">&ltaudio controls&gt
  &ltsource src="horse.ogg" type="audio/ogg"&gt
  &ltsource src="horse.mp3" type="audio/mpeg"&gt
  Browser anda tidak mendukung tag audio.
&lt/audio&gt</code></pre>
    <audio controls controlsList="nodownload">
      <source src="https://freesound.org/data/previews/59/59569_571436-lq.mp3" type="audio/ogg">
      Browser anda tidak mendukung tag audio.
    </audio>
    <br/>
    <hr class="mb-4">
    <h1>Definisi dan Penggunaan</h1>
    <p>Tag <code>&ltaudio></code> pada HTML digunakan untuk melekatkan (embed) konten audio pada
    sebuah dokumen HTML, seperti musik ataupun streaming audio.
    </p>
    <p>Tag <code>&ltaudio></code> bisa memiliki satu atau lebih tag <code>&ltsource></code> dengan sumber audio yang
      berbeda-beda. Browser akan secara otomatis memilih sumber pertama yang format audionya telah di dukung oleh
      browser. Perlu dicatat, bahwa tidak semua format audio bisa di gunakan sebagai sumber audio.</p>

    <p>Ada 3 format audio yang didukung oleh browser pada HTML: MP3, WAV, dan OGG. Berikut ini adalah penjelasanya.</p>

    <table class="table table-striped table-hover table-bordered">
      <tbody>
      <tr>
        <th style="width:25%">Browser</th>
        <th style="width:25%">MP3</th>
        <th style="width:25%">WAV</th>
        <th style="width:25%">OGG</th>
      </tr>
      <tr>
        <td>Edge / IE</td>
        <td>YES</td>
        <td>YES*</td>
        <td>YES*</td>
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
      </tbody>
    </table>
    <p>*Dari Edge 79</p>
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

    <h1>Atribut</h1>
    <p>Berikut ini adalah atribut yang dapat digunakan dalam elemen <code>&ltaudio&gt</code></p>
    <table class="table table-striped table-hover table-bordered">
      <tbody><tr>
        <th style="width:20%">Atribut</th>
        <th style="width:20%">Nilai</th>
        <th style="width:50%">Deskripsi</th>
      </tr>
      <tr>
        <td><code>autoplay</code></td>
        <td>autoplay</td>
        <td>Menentukan apakah audio akan otomatis diputar setelah halaman dimuat dan file audio telah diunduh/siap.</td>
      </tr>
      <tr>
        <td><code>controls</code></td>
        <td>controls</td>
        <td>Menentukan apakah kontrol audio harus ditampilkan (seperti tombol putar/jeda dll).</td>
      </tr>
      <tr>
        <td><code>loop</code></td>
        <td>loop</td>
        <td>Menentukan apakah audio akan diputar ulang setiap kali selesai.</td>
      </tr>
      <tr>
        <td><code>muted</code></td>
        <td>muted</td>
        <td>Menentukan apakah output audio dari video harus dibisukan.</td>
      </tr>
      <tr>
        <td><code>src</code></td>
        <td><i>URL</i></td>
        <td>Menentukan URL file audio.</td>
      </tr>
      </tbody></table>


    <p>Sumber: <a href="https://www.w3schools.com/tags/tag_audio.asp" target="_blank">w3schools.com</a></p>
  </div>
</template>

<script>
module.exports = {
  name: "content-post-html-audio",
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