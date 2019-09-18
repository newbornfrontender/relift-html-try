import reLiftHTML from '//unpkg.com/relift-html';

reLiftHTML({
  el: `#if-else`,

  data: {
    count: 0,
  },

  created() {
    setInterval(() => {
      this.data.count++;
    }, 1000);
  },
});
