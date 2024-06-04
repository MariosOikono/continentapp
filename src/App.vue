<template>
  <div id="app">
    <cities-overview />
  </div>
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
