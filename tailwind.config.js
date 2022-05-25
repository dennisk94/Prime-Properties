module.exports = {
  content: ['./public/*.html'],
  theme: {
    extend: {
      backgroundImage: {
        'locations': "linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url('/public/img/luxury.jpg')",
        'enquire': "linear-gradient( to left, rgb(209, 250, 229) 0%, rgb(16, 183, 127) 100%)"
      }
    },
  },
  plugins: [],
}
