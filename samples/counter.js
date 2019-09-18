import reLiftHTML from '//unpkg.com/relift-html';

reLiftHTML({
  template: `Counting: {this.count}`,

  tagName: `my-counter`,

  data: {
    count: 0,
  },

  created() {
    this.data.count = this.prop.start || 0;

    setInterval(() => {
      this.data.count++;
    }, 1000);
  },
});
