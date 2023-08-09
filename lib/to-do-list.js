import { createApp } from "vue";

createApp({
  data() {
    return {
      todos: [
        { title: "Code a to-do list", done: false },
        { title: "Eat breakfast", done: true },
        { title: "Do some exercise", done: false },
        { title: "Water the plants", done: true }
      ],
      newTask: null
    }
  },
  methods: {
    addTask() {
      this.todos.push({title: this.newTask, done: false}) 
    },
    removeTask(index) {
      this.todos.splice(index, 1)
    }
  }
}).mount('#todosContainer');
