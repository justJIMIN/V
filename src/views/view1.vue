<template>
  <div class="home-page">
     <div class="container-fluid">
      <div class="row">
        <sidenav2 msg="Welcome to Your Vue.js App"/>
        <contents2 msg="Welcome to Your Vue.js App"/>
      </div>
    </div>
  </div>
</template>

<script>
import contents2 from '@/components/contents2.vue';
import sidenav2 from '@/components/sidenav2.vue';
export default {
  name: 'home-page',
  components: {
    contents2,
    sidenav2,
  },
  methods:{
    fnSubPage() {
      this.$router.push('/view1')
    }
  }
};
</script>
