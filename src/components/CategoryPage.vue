<template>
  <div class="category">
    <div class="category_filter">
        <div class="category_filter_box">
          <select name="Choose Type" v-model="type">
            <option value="" selected>Виберіть Тип</option>
            <option value="FrontEnd" >FrontEnd</option>
            <option value="BackEnd">BackEnd</option>
            <option value="FullStack">FullStack</option>

          </select>
          <div v-if="type==='FrontEnd'">
          <select name="Choose lang" v-model="lang">
              <option value="">Мова або фреймворк</option>
              <option value="Javascript">Javascript</option>
              <option value="Swift">Swift</option>
              <option value="React">React</option>
              <option value="Angular">Angular</option>
              <option value="Vue">Vue</option>
              <option value="Django">Django</option>
          </select>
          </div>
          <div v-else-if="type==='BackEnd'">
            <select name="Choose lang" v-model="lang">
              <option value="">Мова або фреймворк</option>
              <option value="PHP">PHP</option>
              <option value="C#">C#</option>
              <option value="PERL">PERL</option>
              <option value="Asp.Net">Asp.Net</option>
              <option value="Python">Python</option>
              <option value="Java">Java</option>
              <option value="Node.js">Node.js</option>
              <option value="SQL">SQL</option>
              <option value="Rust">Rust</option>
            </select >
          </div>
          <div v-else-if="type==='FullStack'">
            <select name="Choose lang" v-model="lang">
              <option value="">Мова або фреймворк</option>
              <option value="PHP">PHP</option>
              <option value="C#">C#</option>
              <option value="PERL">PERL</option>
              <option value="Asp.Net">Asp.Net</option>
              <option value="Python">Python</option>
              <option value="Java">Java</option>
              <option value="Node.js">Node.js</option>
              <option value="SQL">SQL</option>
              <option value="Rust">Rust</option>
              <option value="Javascript">Javascript</option>
              <option value="Swift">Swift</option>
              <option value="React">React</option>
              <option value="Angular">Angular</option>
              <option value="Vue">Vue</option>
              <option value="Django">Django</option>
            </select>
          </div>
          <div v-else>
            <select name="Choose lang"  v-model="lang">
              <option value="">Мова або фреймворк</option>
              <option value="PHP">PHP</option>
              <option value="C#">C#</option>
              <option value="PERL">PERL</option>
              <option value="Asp.Net">Asp.Net</option>
              <option value="Python">Python</option>
              <option value="Java">Java</option>
              <option value="Node.js">Node.js</option>
              <option value="SQL">SQL</option>
              <option value="Rust">Rust</option>
              <option value="Javascript">Javascript</option>
              <option value="Swift">Swift</option>
              <option value="React">React</option>
              <option value="Angular">Angular</option>
              <option value="Vue">Vue</option>
              <option value="Django">Django</option>
            </select>
          </div>
        </div>
    </div>
    <div class="category_cards">
      <CardWork :dataCard="DataCards" :type="type" :lang="lang" />

    </div>
  </div>


</template>



<script>

import CardWork from "@/components/CardWork.vue";
import dataCards from "@/DataBase/db.js"
export default {
  components:{
    CardWork,
  },
  data(){
    return{
      type:'',
      lang:'',
      DataCards:null,
    }
  },
  created() {
    if(dataCards){
      this.DataCards=dataCards
    }
  }


}



</script>

<style>
.category{
  max-width: 1366px;
  margin:0 auto;

}
.category_filter{
  background-color: #f1f1f1;
}
.category_filter_box{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.category_filter_box select{
 position: relative;
  padding: 10px;
  font-size: 20px;
  background-color: #f1f1f1;
  border: none;
  cursor:pointer;
  margin: 5px;
  color: #787373;
  outline: none;

}
.category_filter_box select:hover{
  background-color: #dfdede;
  border-radius: 5px;
}
.notTechno{
  display: flex;
  max-width: 300px;
}
.notTechno p{
  font-size: 20px ;
  color: #787373;
}
.notTechno input{
  margin-top: 5px;
  font-size: 20px;
  background: none;
  border: none;
  color: #787373;
}
.messengerPut input{
  font-size: 20px;
  border:none;
  padding:10px;
  color: #787373;
  border-radius: 5px;
}
</style>