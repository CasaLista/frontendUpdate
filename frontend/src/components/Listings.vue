<template>
    <div class="listings-container">
      <div class="map-container">
        <SiteHeader />
        <ListingFilters />
        <input type="text" v-model="searchQuery" placeholder="Enter a location" @keyup.enter="searchLocation" />
        <div ref="mapContainer" class="map"></div>
      </div>
      <div class="listings-panel">
        <h2>Listings</h2>
        <p>Not available</p>
      </div>
    </div>
  </template>
  
  <script>
  import mapboxgl from 'mapbox-gl';
  import SiteHeader from "./SiteHeader.vue";
  import { config } from '../../config';
import ListingFilters from './ListingFilters.vue';

  export default {
  components: {
    SiteHeader,
    ListingFilters,
  },
  data() {
    return {
      searchQuery: this.$route.query.search || '', // Get search query from URL
      map: null,
    };
  },
  watch: {
    '$route.query.search': function(newSearch) {
      this.searchQuery = newSearch; // Update searchQuery when it changes in the route
      this.searchLocation(); // Trigger the searchLocation method if needed
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

    // Perform location search if a query is provided in the URL when mounted
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
  }
  .map-container {
    position: relative;
    width: 60%;
    height: 100%;
  }
  .listings-panel {
    width: 40%;
    background-color: #f4f4f4;
    padding: 20px;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  }
  .map {
    width: 100%;
    height: calc(100% - 50px);
  }
  input {
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px;
    font-size: 16px;
    width: 300px;
    z-index: 1;
  }
  </style>
  