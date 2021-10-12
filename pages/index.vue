<template>
  <div text-center>
    <h1 class="bg-primary">Hello Nuxters! 👋</h1>
    <h6 class="m-2">Temporary Navigation - get Started</h6>
    <NuxtLink to="/get-started" class="btn m-2">get started</NuxtLink> <br />
    <NuxtLink to="/login" class="btn m-2">login</NuxtLink> <br />
    <NuxtLink to="/register" class="btn m-2">register</NuxtLink><br />
    <NuxtLink to="/password" class="btn m-2">forget password</NuxtLink>
    <br />
    <NuxtLink to="/password/new-pass" class="btn m-2">new password</NuxtLink
    ><br />
    <NuxtLink to="/dashboard" class="btn m-2">dashbord</NuxtLink><br />

    <!-- <get-started/> -->
  </div>
</template>

<script>
export default {
  layout: 'lay-bg',
}
</script>
