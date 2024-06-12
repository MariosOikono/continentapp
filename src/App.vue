<template>
  <v-app>
    <cities-overview />
  </v-app>
</template>

<script>
import CitiesOverview from "@/views/CitiesOverview";

export default {
  name: "App",
  components: {
    CitiesOverview,
  },
};
</script>

<style lang="scss">
#app {
}
</style>
