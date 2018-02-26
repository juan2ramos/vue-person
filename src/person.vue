<template>
  <span>
    <figure>
      <img :src="person.picture.medium" alt="">
    </figure>
  {{person.name.first}}
  </span>
  </div>

</template>
<script>

  export default {
    props:{
      person: {type: Object, required: true}
    }
  }
</script>
