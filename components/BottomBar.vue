<template>
  <nav class="nav">
    <Nuxt-Link to="/dashboard/vote" class="nav_link">
      <!-- <i class="uil uil-comment-alt-dots"></i> -->
      <i class="uil uil-vertical-distribute-bottom"></i>
      <span class="nav_text">Vote</span>
    </Nuxt-Link>
    <Nuxt-Link to="/dashboard" class="nav_link">
      <i class="uil uil-estate"></i>
      <span class="nav_text">Home</span>
    </Nuxt-Link>
    <Nuxt-Link to="/dashboard/profile" class="nav_link">
      <i class="uil uil-user"></i>
      <span class="nav_text">MyProfile</span>
    </Nuxt-Link>
  </nav>
</template>

<style scoped>
/* ------------ BOTTOM BAR ------------ */
.nav {
  box-shadow: -1px -8px 16px 5px rgba(20, 33, 61, 0.08);
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 4.5rem;
  background-color: white;
  border-radius: 2rem 2rem 0 0;
  display: flex;
  overflow-x: auto;
}

i.uil {
  font-size: 22px;
}

.nav_link {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  min-width: 50px;
  overflow: hidden;
  font-size: 16px;
  color: var(--gray-80);
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
}

a.nuxt-link-exact-active {
  color: var(--brown-80);
  font-weight: 600;
}
</style>
