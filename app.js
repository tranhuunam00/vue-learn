const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    }
  },
  computed: {
    fullName() {
      if (!this.name) return ""
      return this.name + "NAM"
    }
  }, 
  watch: {
    counter(newValue) {
      console.log("-vao--");
      if(+newValue>50) this.counter = 0
    }
  }
});

app.mount('#events');
