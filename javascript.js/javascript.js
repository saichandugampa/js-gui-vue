const multiply = (x, y) => { return x * y }

const multiplier = new Vue({
  el: '#multiplier',
  data: {
    guest: 'chandu',
    CountOfStories: 6,
    avgTaskPerStory: 3
  },
  computed: {
    answer: function () {
      const i = parseInt(this.CountOfStories)
      const j = parseInt(this.avgTaskPerStory)
      return `${this.guest}, your multiplication is ${multiply(i, j)}.`
    }
  }
})