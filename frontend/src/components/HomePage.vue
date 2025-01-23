<template>
  <div class="home">
    <SiteHeader />
    <div class="search-bar-container">
      <h1 class="title">Find Your Dream Home</h1>
      <input
        type="text"
        class="search-bar"
        v-model="searchQuery"
        placeholder="Search by address, zip code, or city"
        @keydown.enter="goToListings" />
      <button class="search-button" @click="goToListings">Search</button>  <!-- Trigger method on click -->
    </div>
  </div>
</template>

<script>
import SiteHeader from "./SiteHeader.vue";

export default {
  name: "HomePage",
  components: {
    SiteHeader,
  },
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    goToListings() {
      if (this.searchQuery.trim()) {
        this.$router.push({ name: "Listings", query: { search: this.searchQuery } });
      }
    },
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #f0fff4; /* Light green background */
  background-image: url(../assets/homePagePhoto.jpg); /* Use relative path from src/assets */
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  background-size: cover;

}

.search-bar-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
}

.title {
  font-size: 2.5rem;
  color: #50614f; /* Forest green */
  margin-bottom: 1rem;
}

.search-bar {
  width: 80%;
  max-width: 500px;
  padding: 0.8rem;
  border: 1px solid #50614f;
  border-radius: 5px;
  font-size: 1rem;
  margin-bottom: 1rem;
}

.search-button {
  background-color: #50614f;
  color: white;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.search-button:hover {
  background-color: #5060AA; /* Dark green */
}
</style>


