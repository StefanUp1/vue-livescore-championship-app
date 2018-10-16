<template>
  <div id="navigation">
    <div class="nav-button nav-button-left">
      <router-link to="/">Table</router-link>
    </div>
    <div class="nav-button nav-button-right">
      <router-link to="/today">Today</router-link>
    </div>
    <div class="nav-button nav-button-right">
      <router-link to="/fixtures">Fixtures</router-link>
    </div>
  </div>
</template>

<style scoped>
  #navigation {
    display: flex;
    justify-content: center;
  }

  .nav-button {
    text-align: center;
    width: 100%;
    padding: 50px 0;
    background-color: #17A2B8;
  }

  .nav-button a {
    color: #fff;
    font-size: 24px;
  }

</style>
