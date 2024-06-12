<template>
  <div class="continent-filter">
    <!-- <label for="continent">Continent:</label>
    <select id="continent" @change="filterByContinent">
      <option value="">All</option>
      <option
        v-for="continent in continents"
        :key="continent.id"
        :value="continent.id"
      >
        {{ continent.name }}
      </option>
    </select> -->
    <!-- <v-select
      label="Select"
      v-model="continentFilter"
      @change="filterByContinent"
    ></v-select> -->
    <v-select
      label="Select"
      :items="continents"
      item-text="name"
      item-value="id"
    ></v-select>
  </div>
</template>

<script>
export default {
  name: "ContinentFilter",
  props: {
    continents: {
      type: Array,
      default: () => [],
    },
  },
  mounted: function () {
    console.log(this.$props);
  },
  methods: {
    filterByContinent(event) {
      this.$emit("filter-continent", event.target.value);
    },
  },
};
</script>

<style scoped lang="scss">
.continent-filter {
  width: 50%;
}
</style>
