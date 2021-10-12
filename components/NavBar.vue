<template>
  <nav class="nav">
    <Nuxt-Link to="/dashboard/vote" class="nav_link">
      <span class="nav_text">Vote</span>
    </Nuxt-Link>
    <Nuxt-Link to="/dashboard/vote/result" class="nav_link">
      <span class="nav_text">See Result</span>
    </Nuxt-Link>
    <Nuxt-Link to="/dashboard/vote/history" class="nav_link">
      <span class="nav_text">History</span>
    </Nuxt-Link>
  </nav>
</template>

<style scoped>
/* ------------ BOTTOM BAR ------------ */
.nav {
  box-shadow: -1px -8px 16px 5px rgba(20, 33, 61, 0.08);
  /* position: fixed;
  bottom: 0; */
  width: 80%;
  height: 100%;
  background-color: white;
  border-radius: 2rem;
  display: flex;
  overflow-x: auto;
  border: none;
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

  /* font-weight: 600; */
  color: var(--green-100);
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
}

a.nuxt-link-exact-active {
  color: var(--white);
  font-weight: 600;
  background-color: var(--green-100);
  border-radius: 2rem;
}
</style>
