<template>
  <div>
    <div class="form-floating">
      <input id="search" type="search" placeholder="Search..." class="form-control" autocomplete="off"
             v-model="filterKey">
      <label for="search">Search posts</label>
    </div>
    <div v-for="post in filteredPost" v-if="filteredPost.length > 0">
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
    <div class="post-preview text-center" v-if="filteredPost.length === 0">
      <main class="mb-4">
        <div class="container px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-md-10 col-lg-8 col-xl-7">
              <br>
              <div class="fw-normal">Oops, no single post found !</div>
            </div>
          </div>
        </div>
      </main>
    </div>

    <!-- Pager-->
    <div class="row">
      <div class="col-md-6 col-sm-12">
        <div class="d-flex justify-content-start mb-4"><button class="btn btn-primary text-uppercase" @click="newerPost" v-if="offset > 0">&#8592; Newer Posts</button></div>
      </div>
      <div class="col-md-6 col-sm-12">
        <div class="d-flex justify-content-end mb-4"><button class="btn btn-primary text-uppercase" @click="olderPost" v-if="filteredPost.length && filteredPost.length >= filteredPost.length+offset">Older Posts →</button></div>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  name: "content-index",
  computed: {
    filteredPost() {
      let posts = this.posts;
      const filterKey = this.filterKey;
      if (this.filterKey !== '') {
        posts = posts.filter(function (row) {
          return Object.keys(row).some(function (key) {
            return String(row[key]).toLowerCase().indexOf(filterKey) > -1
          })
        })
      }
      posts = posts.slice(this.offset, this.offset + this.perpage)
      return posts
    },
  },
  methods: {
    newerPost() {
      if (this.offset >= 4) {
        this.offset -= 4
      }
    },
    olderPost() {
      this.offset += 4;
    }
  },
  data() {
    return {
      perpage: 4,
      offset: 0,
      filterKey: '',
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
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>