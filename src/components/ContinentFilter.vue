<template>
  <div class="continent-filter">
    <label for="continent">Continent:</label>
    <select id="continent" @change="filterByContinent">
      <option value="">All</option>
      <option
        v-for="continent in continents"
        :key="continent.id"
        :value="continent.id"
      >
        {{ continent.name }}
      </option>
    </select>
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
