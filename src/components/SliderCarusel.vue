<template>
<div class="carousel">
  <Carousel :autoplay="7000" :wrap-around="true">
    <Slide v-for="slide in slideDatas" :key="slide.id">
      <div class="carousel__item">
        <img :src="slide.item"  alt="slide">
        <div class="carousel_title">
          <h1>{{slide.title}}</h1>
        </div>
      </div>
    </Slide>

    <template>
      <Pagination />
    </template>
  </Carousel>
</div>
</template>



<script>
import { Carousel, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
export default {
  components:{
    Carousel,Pagination,Slide
  },
  props:{
    slideDatas:Array
  },
  data(){
    return{

    }
  }
}
</script>



<style>
.carousel{
  margin-top: 2px;

}
.carousel__item img{
  width: 1350px;
  height: 768px;
}
.carousel__item{
  display: flex;
  position: relative;
  align-items: center;
}
.carousel_title{
  justify-content: center;
  position: absolute;
  bottom: 0;
  padding: 20px;
  background: linear-gradient(to right, transparent, mistyrose);
  width: 100%;
}


.carousel__item .carousel_title{
  bottom:-100px
}
.carousel__item:hover .carousel_title{
  transition: all 0.5s ease-out;
  bottom: 0px;
}
.carousel_title h1{
  font-size: 23px;
  text-align:center;
  color: #080b0b;
  font-style:italic;
}
</style>