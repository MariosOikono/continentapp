<template>
  <div class="population-filter">
    <label for="population">Population:</label>
    <select id="population" @change="filterByPopulation">
      <option value="">All</option>
      <option value="50">> 50</option>
      <option value="100">> 100</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "PopulationFilter",
  methods: {
    filterByPopulation(event) {
      this.$emit("filter-population", event.target.value);
    },
  },
};
</script>

<style scoped lang="scss">
.population-filter {
  width: 100%;
}
</style>
