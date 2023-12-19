<script>
export default {
  props: {},

  data() {
    return {
      textValue: "Initial Text",
      isChecked: true,
      selectedValue: "option1\n111",
      message: null,
      text: null,
      textAreaValue: null,
      selectedOption: "checked",
      checkedNames: [],
      selected: "A",
      options: [
        { text: "One", value: "A" },
        { text: "Two", value: "B" },
        { text: "Three", value: "C" },
      ],
      picked: null,
      toggle: null,
      first: "first",
      second: "second",
      pick: "picked",
    };
  },
  computed: {},

  methods: {},
  created() {},
  unmounted() {},
  mounted() {
    console.log(`Exp3 component`);
  },
};
</script>

<template>
  <h3>Form Input Bindings​</h3>
  <!-- <input :value="text" @input="(event) => (text = event.target.value)" /> -->
  <input v-model="text" placeholder="11" />

  <input v-model="textValue" placeholder="11" />
  <textarea v-model="textAreaValue"></textarea>

  <input type="checkbox" v-model="isChecked" />
  <input type="radio" value="option1" v-model="selectedOption" />

  <select v-model="selectedValue">
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
  </select>

  <!-- Initial value set in data option -->
  <input type="text" v-model="textValue" />

  <!-- Initial value set in data option -->
  <input type="checkbox" v-model="isChecked" />

  <!-- Initial value set in data option -->
  <select v-model="selectedValue">
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
  </select>

  <p>Message is: {{ message }}</p>
  <input v-model.number="message" placeholder="edit me" />
  <input :value="message" @input="(event) => (message = event.target.value)" />

  <span>Multiline message is:</span>
  <p style="white-space: pre-line">{{ message }}</p>
  <textarea v-model="message" placeholder="add multiple lines"></textarea>

  <textarea>{{ selectedValue }}</textarea>
  <textarea v-model="selectedValue"></textarea>

  <div>Checked names: {{ checkedNames }}</div>

  <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
  <label for="jack">Jack</label>

  <input type="checkbox" id="john" value="John" v-model="checkedNames" />
  <label for="john">John</label>

  <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
  <label for="mike">Mike</label>

  <select v-model="selected">
    <option v-for="option in options" :value="option.value">
      {{ option.text }}
    </option>
  </select>

  <div>Selected: {{ selected }}</div>

  <!-- `picked` is a string "a" when checked -->
  <input type="radio" v-model="picked" value="a" />

  <!-- `toggle` is either true or false -->
  <input type="checkbox" v-model="toggle" />

  <!-- `selected` is a string "abc" when the first option is selected -->
  <select v-model="selected">
    <option value="abc">ABC</option>
  </select>

  <input type="checkbox" v-model="toggle" true-value="yes" false-value="no" />

  <input type="radio" v-model="pick" :value="first" />
  <input type="radio" v-model="pick" :value="second" />
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
