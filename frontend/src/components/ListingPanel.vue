<template>
    <div class="listings-panel">
      <h2>Listings</h2>
      <ul v-if="listings.length">
        <li v-for="listing in listings" :key="listing.id">
          <strong>{{ listing.name }}</strong> - {{ listing.price }} <br />
          <small>{{ listing.location }}</small>
        </li>
      </ul>
      <p v-else>No listings available</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      listings: {
        type: Array,
        default: () => [],
      },
    },
  };
  </script>
  
  <style scoped>
  .listings-panel {
    width: 40%;
    background-color: #f4f4f4;
    padding: 20px;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
    font-family: 'CoFo Sans', sans-serif;

  }
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background: #fff;
  }
  </style>
  