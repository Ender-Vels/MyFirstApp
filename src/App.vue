<template>
  <HeaderSite  @ShowModalsWindow="ShowModalses" />

  <ModalWindow v-if="isModalShow" @CloseModal="CloseModal"/>
  <router-view></router-view>
</template>

<script>


import HeaderSite from "@/components/HeaderSite.vue";
import {defineComponent} from "vue";
import ModalWindow from "@/components/ModalWindow.vue";

export default defineComponent( {
  //TODO: зробити футер
  //TODO: оживити весь навбар
  name: 'App',
  components: {
    ModalWindow,
    HeaderSite

  },
  data(){
    return{
      isModalShow:false
    }
  },
  methods:{
    ShowModalses(value){
        this.isModalShow=value
    },
    CloseModal(value){
      this.isModalShow=value
    }
  }

})
</script>

<style>
*{
  margin: 0;
  padding: 0;
}


</style>
