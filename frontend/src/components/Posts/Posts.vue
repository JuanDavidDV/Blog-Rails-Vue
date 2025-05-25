<template>
  <div>
    <h1 class="title">Posts</h1>
    <input type="text"
          v-model="title"
          placeholder="Title"
          class="title-input"
    />
    <input type="text"
          v-model="body"
          placeholder="Body"
          class="body-input"
    />
  </div>
</template>

<script setup>
  import "./Posts.css"
</script>
