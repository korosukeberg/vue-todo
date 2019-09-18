const vm = new Vue({
  el: "#app",
  data: {
    newItemTitle: "",
    items: [{ title: "項目1", isChecked: false }]
  },
  methods: {
    add: function() {
      if (!this.newItemTitle) {
        return;
      }
      this.items.push({
        title: this.newItemTitle,
        isChecked: false
      });
      this.newItemTitle = "";
    },
    clearCompleted: function() {
      for (i = 0; i < this.items.length; i++) {
        if (this.items[i].isChecked) {
          this.items.splice(i--, 1);
        }
      }
    },
    clearAll: function() {
      this.items = [];
    }
  }
});
