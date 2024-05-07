<template>
<div class="home">
  <div class="home_Slide">
  <SliderCarusel  :slideDatas="slideData"/>
  </div>
  <div class="home_info">
  <InfoBlock/>
  </div>
</div>
</template>


<script >

import {defineComponent} from "vue";
import SliderCarusel from "@/components/SliderCarusel.vue";
import InfoBlock from "@/components/InfoBlock.vue";
export default defineComponent({
  components: {SliderCarusel,InfoBlock},
  data(){
    return{
      slideData:[

        {
          id:1,
          item:require(`../assets/Slider/slide.jpg`),
          title:'Висока якість роботи, Та дбайливе відношення до запиту клієнта'
        },
        {
          id:2,
          item:require(`../assets/Slider/slide1.jpg`),
          title:'Радісна посмішка нашого клієнта, для нас саме головне'
        },
        {
          id:3,
          item:require(`../assets/Slider/slide2.jpg`),
          title:'Високий рівень програмування наших співробітників. Досвід роботи в багатьох проектах, перевіриний часом'
        },
        {
          id:4,
          item:require(`../assets/Slider/slide3.png`),
          title:''
        },

      ],

    }
  }
})
</script>



<style>
.home_Slide{
  max-width: 1350px;
  margin: 0px auto;
}
.home_info{
  position: relative;
}

</style>