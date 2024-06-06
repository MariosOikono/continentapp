<template>
  <div class="cities-overview">
    <div class="filters">
      <continent-filter
        @filter-continent="setContinentFilter"
        :continents="continents"
      />
      <population-filter @filter-population="setPopulationFilter" />
    </div>
    <cities-table :filteredCities="filteredCitiesWithContinentNames" />
  </div>
</template>

<script>
import CitiesTable from "@/components/CitiesTable";
import ContinentFilter from "@/components/ContinentFilter";
import PopulationFilter from "@/components/PopulationFilter";
import { getCitiesMockEndpoint } from "@/api/cities.api";
import { getContinentMockEndpoint } from "@/api/continent.api";

export default {
  name: "CitiesOverview",
  components: {
    CitiesTable,
    ContinentFilter,
    PopulationFilter,
  },
  data() {
    return {
      cities: [],
      continents: [],
      continentFilter: "",
      populationFilter: "",
    };
  },
  computed: {
    filteredCities() {
      return this.cities.filter((city) => {
        const matchesContinent = this.continentFilter
          ? city.continent === parseInt(this.continentFilter)
          : true;
        const matchesPopulation = this.populationFilter
          ? city.population > parseInt(this.populationFilter)
          : true;
        console.log(matchesContinent, matchesPopulation);
        return matchesContinent && matchesPopulation;
      });
    },
    filteredCitiesWithContinentNames() {
      return this.filteredCities.map((city) => {
        const continent = this.continents.find(
          (cont) => cont.id === city.continent
        );
        return {
          ...city,
          continentName: continent ? continent.name : "Unknown",
        };
      });
    },
  },
  methods: {
    setContinentFilter(continent) {
      this.continentFilter = continent;
    },
    setPopulationFilter(population) {
      this.populationFilter = population;
    },
  },
  async created() {
    try {
      const [cities, continents] = await Promise.all([
        getCitiesMockEndpoint(),
        getContinentMockEndpoint(),
      ]);
      this.cities = cities;
      this.continents = continents;
      continents.sort((a, b) => a.name.localeCompare(b.name));
      //users.sort((a, b) => a.firstname.localeCompare(b.firstname))
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
};
</script>

<style scoped lang="scss">
.cities-overview {
  padding: 20px;
}
.filters {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.filters > * {
  flex: 1;
}
</style>
