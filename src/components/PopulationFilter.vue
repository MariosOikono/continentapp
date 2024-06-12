<template>
  <div class="population-filter">
    <!-- <label for="population">Population:</label> -->
    <!-- <select id="population" @change="filterByPopulation">
      <option value="">All</option>
      <option value="50">> 50</option>
      <option value="100">> 100</option>
    </select> -->
    <v-select
      v-model="selectedPopulation"
      label="Population"
      :items="options"
      @change="filterByPopulation"
    ></v-select>
  </div>
</template>

<script>
export default {
  name: "PopulationFilter",
  data() {
    return {
      // Array of options for the v-select
      options: [
        { text: "All", value: "" },
        { text: "> 50", value: 50 },
        { text: "> 100", value: 100 },
      ],
      selectedPopulation: "",
    };
  },
  props: {
    continents: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    filterByPopulation() {
      this.$emit("filter-population", this.selectedPopulation);
    },
  },
};
</script>

<style scoped lang="scss">
.population-filter {
  width: 50%;
}
</style>
