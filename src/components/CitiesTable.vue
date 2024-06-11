<template>
  <div class="cities-table">
    <table>
      <thead>
        <tr>
          <th>City Name</th>
          <th>Continent</th>
          <th>Population (millions)</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="city in filteredCities" :key="city.id">
          <td>{{ city.name }}</td>
          <td>{{ city.continentName }}</td>
          <td>{{ city.population }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "CitiesTable",
  props: {
    filteredCities: {
      type: Array,
      default: () => [],
    },
  },
};

// .cities-table {
//   width: 100%;
//   border-collapse: collapse;
//   margin-top: 100px;
//   margin-left: 250px;
// }

// .cities-table th,
// .cities-table td {
//   border: 1px solid #ddd;
//   padding: 8px;
//   text-align: left;
// }

// .cities-table th {
//   background-color: #f2f2f2;
//   font-weight: bold;
// }
</script>

<style scoped lang="scss"></style>
