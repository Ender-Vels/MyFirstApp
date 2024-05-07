<template>
<div class="card">
  <div class="card_list" v-for="card in FilterType" :key="card.id">
      <div class="card_list_card">
        <div class="card_list_card_image">
          <img :src="card.img" alt="">
        </div>
        <div class="card_list_card_name">
          <span>{{card.name}}</span>
        </div>
        <div class="card_list_card_title">
          {{card.title}}
        </div>

            <RouterLink :to="`/category/${card.id}`">Обрати</RouterLink>

      </div>
  </div>
</div>

</template>

<script>
export default {
  props: {
    dataCard: Array,
    type:String,
    lang:String,

  },
  data() {
    return {}
  },
  computed: {
    FilterType() {
      return this.dataCard.filter(card => {
        if(this.type!== '') {
          if(card.type===this.type){
            return card
          }

        }
        else if(this.lang!==''){
          if(card.name===this.lang){
            return card
          }
        }
        else {
          return card
        }
      })

    },
  }
}
</script>



<style>
.card_list_card_image img{
  height: 100px;
}

.card{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;


}

.card_list_card{
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  font-size: 17px;
  font-style: italic;
  padding: 15px;
  margin: 20px;
  align-items: center;
  max-width: 300px;
  height: 600px;
  border: 1px solid #dad8d8;
  border-radius: 5px;


  -webkit-box-shadow: 6px 7px 16px -4px rgba(163,158,163,1);
  -moz-box-shadow: 6px 7px 16px -4px rgba(163,158,163,1);
  box-shadow: 6px 7px 16px -4px rgba(163,158,163,1);

}
.card_list_card:hover{
  transform: scale(1.3);
  opacity: 1;
  background: #cfc8c8;
  z-index: 19999;
  -webkit-box-shadow: 21px 3px 40px 4px rgba(163,158,163,1);
  -moz-box-shadow: 21px 3px 40px 4px rgba(163,158,163,1);
  box-shadow: 21px 3px 40px 4px rgba(163,158,163,1);
  cursor: pointer;
  transition: all 1s linear;
}
.card_list_card_title{
  margin: 15px;
}

.card_list_card a{
  color: white;
  background: #0eb27d;
  padding: 15px;
  font-size: 20px;
  margin: 10px;
  text-decoration: none;
  font-weight: 800  ;

}

</style>