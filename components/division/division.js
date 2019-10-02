const division = (x, y) => { return x / y }

const divide = new Vue({
  el: '#divide',
  data: {
    guest: 'Vijay',
    number1: 10,
    number2: 2
  },
  computed: {
    ans: function () {
      const i = parseInt(this.number1)
      const j = parseInt(this.number2)
      return `${this.guest}, your division is ${division(i, j)}.`
    }
  }
})