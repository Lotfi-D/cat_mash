<template>
  <header class="bg-black text-white p-4 w-full z-10 font-bold">
    <div class="container flex items-center">
      <router-link to="/" class="flex items-center">
        <img
          src="../../public/static/cute_cat.png"
          alt="logo"
          style="width: 100px; max-height: 65px; object-fit: cover;"
        />
        <span>CAT MASH</span>
      </router-link>
      <nav class="ml-5 space-x-4 text-lg">
        <router-link to="/scores" class="">Scores</router-link>
      </nav>
    </div>
  </header>
</template>
