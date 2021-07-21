<template>
  <div>
    <div v-for="post in posts">
      <div class="post-preview">
        <router-link :to="`/${post.slug}`">
          <h2 class="post-title">{{ post.title }}</h2>
          <h3 class="post-subtitle" v-if="post.subtitle">{{ post.subtitle }}</h3>
        </router-link>
        <p class="post-meta">
          Posted by
          <a href="#!">{{ post.writer }}</a>
          on {{ post.datePosted }}
        </p>
      </div>
      <!-- Divider-->
      <hr class="my-4" />
    </div>

    <!-- Pager-->
    <div class="d-flex justify-content-end mb-4"><a class="btn btn-primary text-uppercase" href="#!">Older Posts →</a></div>
  </div>
</template>

<script>
module.exports = {
  name: "content-index",
  data() {
    return {
      posts: [
        {
          title: 'Belajar HTML: Cara Membuat List HTML',
          subtitle: 'List HTML memungkinkan developer web untuk mengelompokkan satu set item terkait dalam daftar',
          writer: 'Admin',
          datePosted: 'July 21, 2021',
          slug: 'membuat-list-html'
        },{
          title: 'Belajar HTML: Cara Membuat Form HTML',
          subtitle: 'Form HTML pada halaman website memungkinkan user untuk mengirim data ke server untuk di proses',
          writer: 'Admin',
          datePosted: 'July 21, 2021',
          slug: 'membuat-form-html'
        },{
          title: 'Belajar HTML: Cara Menambahkan Audio pada Halaman Website Anda',
          subtitle: 'Cara mudah menambahkan audio pada website',
          writer: 'Admin',
          datePosted: 'July 17, 2021',
          slug: 'menambahkan-audio-pada-html'
        },{
          title: 'Belajar HTML: Cara Menambahkan Video pada Website Anda',
          subtitle: 'Cara mudah menambahkan video pada halaman website',
          writer: 'Admin',
          datePosted: 'July 17, 2021',
          slug: 'menambahkan-video-pada-html'
        },
        {
          title: 'Man must explore, and this is exploration at its greatest',
          subtitle: 'Problems look mighty small from 150 miles up',
          writer: 'Admin',
          datePosted: 'July 17, 2021',
          slug: 'man-must-explore-and-this-is-exploration-at-its-greatest'
        },{
          title: 'I believe every human has a finite number of heartbeats. I don\'t intend to waste any of mine.',
          writer: 'Admin',
          datePosted: 'July 17, 2021',
          slug: 'man-must-explore-and-this-is-exploration-at-its-greatest'
        },{
          title: 'Science has not yet mastered prophecy',
          subtitle: 'We predict too much for the next year and yet far too little for the next ten.',
          writer: 'Admin',
          datePosted: 'July 17, 2021',
          slug: 'man-must-explore-and-this-is-exploration-at-its-greatest'
        },{
          title: 'Failure is not an option',
          subtitle: 'Many say exploration is part of our destiny, but it’s actually our duty to future generations.',
          writer: 'Admin',
          datePosted: 'July 17, 2021',
          slug: 'man-must-explore-and-this-is-exploration-at-its-greatest'
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>