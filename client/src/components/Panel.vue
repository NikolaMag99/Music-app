<template>
  <b-card bg-variant="dark" text-variant="white" title="Songs">
        {{title}}
    <b-card-text>
      {{title}}
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>

<style scoped>
</style>
