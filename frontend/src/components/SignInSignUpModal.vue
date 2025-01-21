<template>
    <div v-if="isVisible" class="modal-overlay" @click.self="closeModal">
      <div class="modal">
        <button class="close-btn" @click="closeModal">X</button>
        <div class="form-container">
          <div v-if="isSignUp" class="sign-up">
            <h2>Sign Up</h2>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button @click="submitSignUp">Sign Up</button>
            <p>Already have an account? <a href="#" @click="toggleForm">Sign In</a></p>
          </div>
          <div v-else class="sign-in">
            <h2>Sign In</h2>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button @click="submitSignIn">Sign In</button>
            <p>Don't have an account? <a href="#" @click="toggleForm">Sign Up</a></p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SignInSignUpModal',
    data() {
      return {
        isVisible: false,
        isSignUp: false,
      };
    },
    methods: {
      openModal() {
        this.isVisible = true;
      },
      closeModal() {
        this.isVisible = false;
      },
      toggleForm() {
        this.isSignUp = !this.isSignUp;
      },
      submitSignUp() {
        // Handle sign-up logic here
        console.log("Submitting sign-up");
      },
      submitSignIn() {
        // Handle sign-in logic here
        console.log("Submitting sign-in");
      },
    },
  };
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .modal {
    background: white;
    padding: 2.5rem;
    border-radius: 20px;
    width: 350px; /* Increased width */
    position: relative;
    max-height: 90vh; /* Prevents overflow */
    overflow-y: auto;
  }
  
  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  }
  
  .form-container input {
    width: 100%;
    padding: 0.8rem;
    margin: 0.8rem 0; /* Increased margin for spacing */
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  
  .form-container button {
    width: 100%;
    padding: 0.9rem; /* Increased padding */
    background-color: #50614f;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 1.2rem; /* Increased top margin */
  }
  
  .form-container p {
    text-align: center;
    margin-top: 1rem;
  }
  
  .form-container a {
    color: #50614f;
  }
  </style>
  