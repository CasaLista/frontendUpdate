<template>
  <div class="listings-container">
    <div class="map-container">
      <SiteHeader />
      <ListingFilters />
      <input 
        type="text" 
        v-model="searchQuery" 
        placeholder="Enter a location" 
        @keyup.enter="searchLocation" 
      />
      <div ref="mapContainer" class="map"></div>
      <ListingFooter />
    </div>
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl';
import SiteHeader from "./SiteHeader.vue";
import ListingFilters from './ListingFilters.vue';
import ListingFooter from './ListingFooter.vue';

import { config } from '../../config';

export default {
  components: {
    SiteHeader,
    ListingFilters,
    ListingFooter,
  },
  data() {
    return {
      searchQuery: this.$route.query.search || '',
      map: null,
    };
  },
  watch: {
    '$route.query.search': function(newSearch) {
      this.searchQuery = newSearch;
      this.searchLocation();
    }
  },
  mounted() {
    mapboxgl.accessToken = config.mapboxAccessToken;
    this.map = new mapboxgl.Map({
      container: this.$refs.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-99.1332, 19.4326], // Default to Mexico City
      zoom: 12,
    });

    if (this.searchQuery) {
      this.searchLocation();
    }
  },
  methods: {
    searchLocation() {
      if (this.searchQuery) {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${this.searchQuery}.json?access_token=${mapboxgl.accessToken}`)
          .then(response => response.json())
          .then(data => {
            if (data.features.length) {
              const [lng, lat] = data.features[0].center;
              this.map.flyTo({ center: [lng, lat], zoom: 12 });
            }
          })
          .catch(error => console.error('Error fetching location:', error));
      }
    },
  },
};
</script>

<style scoped>
.listings-container {
  display: flex;
  width: 100%;
  height: 100vh;
  font-family: 'CoFo Sans', sans-serif;
}
.map-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  width: 60%;
  height: 100%;
}

input {
  padding: 10px;
  font-size: 16px;
  width: 200px;
  z-index: 1;
  margin-top: 10px;
  font-family: 'CoFo Sans', sans-serif;
}

.map {
  width: 100%;
  height: calc(100% - 50px);
}
</style>
