<script>
export default {
  props: {},

  data() {
    return {
      firstName: "John",
      lastName: "Doe",
      isActive: true,
      hasError: false,
      error: null,
      activeClass: "active",
      errorClass: "text-danger",
      activeColor: "red",
      fontSize: 30,
      styleObject: {
        color: "red",
        fontSize: "13px",
      },
      awesome: true,
      isShow: false,
      parentMessage: "Parent",
      items: [
        { message: "Foo1", id: "1" },
        { message: "Bar1", id: "2" },
      ],
      myObject: {
        title: "How to do lists in Vue",
        author: "Jane Doe",
        publishedAt: "2016-04-10",
      },
      numbers: [1, 2, 3, 4, 5],
    };
  },
  computed: {
    fullName: {
      // getter
      get() {
        return this.firstName + " " + this.lastName;
      },
      // setter
      set(newValue) {
        // Note: we are using destructuring assignment syntax here.
        [this.firstName, this.lastName] = newValue.split(" ");
      },
    },
    classObject() {
      return {
        active: this.isActive && !this.error,
        "text-danger": this.error === "fatal",
      };
    },
    evenNumbers() {
      return this.numbers.filter((n) => n % 2 === 0);
    },
  },

  methods: {
    dog() {
      return;
    },
  },
  created() {},
  unmounted() {},
  mounted() {
    console.log(`Exp1 component`);

    const parentMessage = "Parent";
    const items = [{ message: "Foo" }, { message: "Bar" }];

    items.forEach((item, index) => {
      // has access to outer scope `parentMessage`
      // but `item` and `index` are only available in here
      console.log(parentMessage, item.message, index);
    });
  },
};
</script>

<template>
  <p :class="$attrs.class">Hi!</p>
  <div :class="{ active: isActive }">aaa</div>
  <div class="static" :class="{ active: isActive, 'text-danger': hasError }">
    test text
  </div>
  <p class="text-danger">This text represents danger.</p>
  <div :class="classObject">
    bind to a computed property that returns an object
  </div>
  <div :class="[activeClass, errorClass]">Binding to Arrays</div>
  <div :class="[isActive ? activeClass : '', errorClass]">
    Binding to Arrays with toggle
  </div>
  <div :class="[{ active: isActive }, errorClass]">
    Binding to Arrays with toggle
  </div>
  <div :style="styleObject">Binding to Objects</div>
  <button @click="awesome = !awesome">Toggle</button>

  <h1 v-if="awesome">Vue is awesome!</h1>
  <h1 v-else>Oh no 😢</h1>

  <h1 v-show="isShow">Hello!</h1>

  <li v-for="item in items" :key="item.id">
    {{ item.message }}
  </li>
  <li v-for="(item, index) in items">
    {{ parentMessage }} - {{ index }} - {{ item.message }}
  </li>

  <div>destructuring function arguments</div>
  <li v-for="{ message } in items">
    {{ message }}
  </li>
  <!-- with index alias -->
  <li v-for="({ message }, index) in items">{{ message }} {{ index }}</li>

  <div>v-for with an Object</div>
  <ul>
    <li v-for="(value, key, index) in myObject">
      {{ index }}. {{ key }}: {{ value }}
    </li>
  </ul>

  <span v-for="n in 10">{{ n }}</span>

  <div>Displaying Filtered/Sorted Results</div>
  <li v-for="n in evenNumbers">{{ n }}</li>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
