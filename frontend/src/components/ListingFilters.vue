<template>
    <div class="listing-filters">
      <div class="filter-group">
        <label for="bedrooms">Bedrooms:</label>
        <select id="bedrooms" v-model="bedrooms">
          <option value="">Any</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
          <option value="4">4+</option>
          <option value="5">5+</option>
        </select>
      </div>
  
      <div class="filter-group">
        <label for="bathrooms">Bathrooms:</label>
        <select id="bathrooms" v-model="bathrooms">
          <option value="">Any</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
          <option value="4">4+</option>
          <option value="5">5+</option>
        </select>
      </div>
  
      <div class="filter-group">
        <label for="sqft">Square Footage:</label>
        <input
          type="number"
          id="sqft"
          v-model="sqft"
          placeholder="Min sqft"
        />
      </div>
  
      <div class="filter-group">
        <label for="price">Price Range:</label>
        <input
          type="number"
          id="price-min"
          v-model="priceMin"
          placeholder="Min price"
        />
        <input
          type="number"
          id="price-max"
          v-model="priceMax"
          placeholder="Max price"
        />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ListingFilters",
    data() {
      return {
        bedrooms: "",
        bathrooms: "",
        sqft: "",
        priceMin: "",
        priceMax: "",
      };
    },
    watch: {
      // Watch for changes to any of the filters and emit the updated filters
      bedrooms(newValue) {
        this.emitFilters();
      },
      bathrooms(newValue) {
        this.emitFilters();
      },
      sqft(newValue) {
        this.emitFilters();
      },
      priceMin(newValue) {
        this.emitFilters();
      },
      priceMax(newValue) {
        this.emitFilters();
      },
    },
    methods: {
      emitFilters() {
        // Emit the current filter values whenever they change
        this.$emit("apply-filters", {
          bedrooms: this.bedrooms,
          bathrooms: this.bathrooms,
          sqft: this.sqft,
          priceMin: this.priceMin,
          priceMax: this.priceMax,
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .listing-filters {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 15px;
    padding: 10px;
    background-color: #f4f4f4;
    border-radius: 8px;
    margin-top: 20px;
  }
  
  .filter-group {
    display: flex;
    align-items: center;
    gap: 8px;
    flex: 1;
    min-width: 120px;
  }
  
  label {
    font-size: 0.9rem;
    margin-right: 5px;
  }
  
  select,
  input {
    padding: 0.4rem;
    font-size: 0.85rem;
    border-radius: 4px;
    border: 1px solid #ccc;
    width: 100%;
    max-width: 120px;
    height: 28px;
  }
  
  button {
    background-color: #50614f;
    color: white;
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
    margin-top: 1rem;
  }
  
  button:hover {
    background-color: #4c5c45;
  }
  </style>
  