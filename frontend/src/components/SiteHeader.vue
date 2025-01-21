<template>
  <header class="header">
    <div class="logo">Casa Lista</div>
    <nav class="nav">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/buy">Buy</a></li>
        <li><a href="/sell">Sell</a></li>
        <li><a href="#" @click.prevent="openModal">Sign In</a></li> <!-- Open Modal on Click -->
      </ul>
    </nav>
  </header>

  <!-- Add the SignInSignUpModal component here -->
  <SignInSignUpModal ref="signInSignUpModal" />
</template>

<script>
import SignInSignUpModal from './SignInSignUpModal.vue'; // Import the modal component

export default {
  name: 'SiteHeader',
  methods: {
    openModal() {
      this.$refs.signInSignUpModal.openModal(); // Open the modal
    }
  },
  components: {
    SignInSignUpModal
  }
};
</script>

<style scoped>
/* Ensure the header spans the entire page */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 100%; /* Ensures the header spans the entire width */
  height: 100px; /* Adjust to the desired height of the header */
  background-color: #50614f; /* Dark green background color */
  color: white;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav ul {
  list-style-type: none;
  display: flex;
  gap: 20px;
}

.nav a {
  text-decoration: none;
  color: white;
  font-size: 1rem;
}

.nav a:hover {
  text-decoration: underline;
}
</style>
