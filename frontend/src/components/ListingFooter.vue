<template>
    <div class="listing-footer">
      <div class="footer-content">
        <span class="footer-text">Casa Lista</span>
        <span class="copyright">&copy; 2025 Casa Lista. All rights reserved.</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ListingFooter",
  };
  </script>
  
  <style scoped>
  .listing-footer {
    width: 100%;
    background-color: #15221a;
    color: white;
    padding: 20px 0;
    position: fixed;
    bottom: 0;
    left: 0;
    text-align: center;
    font-family: 'CoFo Sans', sans-serif;

  }
  
  .footer-content {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    font-family: 'CoFo Sans', sans-serif;

  }
  
  .footer-text {
    font-size: 1.2rem;
    font-weight: bold;
    font-family: 'CoFo Sans', sans-serif;

  }
  
  .copyright {
    font-size: 0.9rem;
    font-family: 'CoFo Sans', sans-serif;

  }
  </style>
  