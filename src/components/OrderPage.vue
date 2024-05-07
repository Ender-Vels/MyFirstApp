<template>
<div class="order">
  <div class="order_content">
    <div class="order_content_logo">
      <img :src="card.img" alt="logo_lang">
    </div>
    <div class="order_content_title">
      <h1>{{card.name}}</h1>
    </div>
    <div class="order_content_description">
      <p>
        {{card.description}}
      </p>
    </div>
  </div>
</div>
  <div class="order_ordering">
    <div class="order_ordering_title">
        <h1>Готові Зробити замовлення на цій мові?</h1>
    </div>
    <div class="order_ordering_TakeTask">
      <select name="choose" v-model="choseTakeTask">
          <option value="" selected>Виберіть спосіб опису завдання</option>
          <option value="attach">Прикріпити файл</option>
          <option value="write">Описати завдання тут</option>
      </select>
      <!--Attach task File-->
      <div class="order_ordering_TakeTask_task" v-if="choseTakeTask=== 'attach' ">
           <div class="order_ordering_TakeTask_task_attach">
              <input type="file">
           </div>

        <div class="order_ordering_callback">
          <select name="chooseCallback"  v-model="chooseCallback">
            <option value="">Оберіть спосіб зв'язку</option>
            <option value="Email">Email</option>
            <option value="Telegram">Telegram</option>
            <option value="Viber">Viber</option>
            <option value="WatsApp">WatsApp</option>
            <option value="Instagram">Instagram</option>
            <option value="Signal">Signal</option>
          </select>

          <div class="order_ordering_callback_input" v-if="chooseCallback==='Email'">
            <input type="email" :placeholder="chooseCallback">
          </div>
          <div class="chooseCallback" v-else-if="chooseCallback!=='Email'&& chooseCallback!==''">
            <input type="text" :placeholder="chooseCallback" >
          </div>
        </div>
        <div class="ordering_submit">
        <button>Відправити Замовлення</button>
        </div>
      </div>

      <!--Write task-->
      <div class="order_ordering_TakeTask_taskWrite" v-else-if="choseTakeTask==='write'">
        <textarea>

        </textarea>
        <h3>Є фото чи модель майбутнього проекту?Прикріпіть його тут:</h3>
        <input type="file">

        <div class="order_ordering_callback">

          <select name="chooseCallback"  v-model="chooseCallback">
            <option value="">Оберіть спосіб зв'язку</option>
            <option value="Email">Email</option>
            <option value="Telegram">Telegram</option>
            <option value="Viber">Viber</option>
            <option value="WatsApp">WatsApp</option>
            <option value="Instagram">Instagram</option>
            <option value="Signal">Signal</option>
          </select>

          <div class="order_ordering_callback_input" v-if="chooseCallback==='Email'">
            <input type="email" :placeholder="chooseCallback">
          </div>
          <div class="chooseCallback" v-else-if="chooseCallback!=='Email'&& chooseCallback!==''">
            <input type="text" :placeholder="chooseCallback" >
          </div>

        </div>
          <button>Відправити Замовлення</button>
      </div>
    </div>
  </div>
</template>

<script>
//TODO: Почати клепати БД і бек
import dataCards from "@/DataBase/db.js"
export default {

 data(){
   return{
      card:null,
      choseTakeTask:'',
     chooseCallback:''
   }
 },
  created() {
   let card=dataCards.find(card=>card.id==this.$route.params.id)
    if(card){
      this.card=card
    }
  }
}
</script>



<style>
.order{
  display: flex;

  justify-content: center;
  max-width: 1366px;
  margin: 0 auto;
}
.order_content{
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-evenly;
  width: 1098px;
  margin: 25px;
  padding: 20px;
  background: #f1f1f1;
  border-radius: 15px 25px;
  border: 1px solid #e3e2e2;
  -webkit-box-shadow: 10px -1px 16px 17px rgba(227,226,226,1);
  -moz-box-shadow: 10px -1px 16px 17px rgba(227,226,226,1);
  box-shadow: 10px -1px 16px 17px rgba(227,226,226,1);



}
.order_content_logo img{
  height: 300px;
}
.order_content_description p{
  font-size: 20px;
  font-style: italic;
}
.order_content_description{
  margin-top: 20px;
}


.order_ordering{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
}
.order_ordering_title h1{
  font-size: 40px;
  font-style: italic;
}
.order_ordering_TakeTask{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 25px;
}
.order_ordering_TakeTask_task{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}
.order_ordering_TakeTask select{
  font-size: 20px;
  outline: none;
  padding: 10px;
  font-style: italic;
  border-radius: 10px;
  background-color: #f4f4f4;
  border: 2px solid #f4f4f4;
  cursor: pointer;
}

.order_ordering_TakeTask_taskWrite textarea{
  height: 300px;
  width: 800px;
  resize:none;
  font-size: 20px;
  font-weight: 400;

}
.order_ordering_TakeTask_taskWrite{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.order_ordering_TakeTask_taskWrite h3{
  margin: 25px;
}
.order_ordering_TakeTask_taskWrite input{
  font-size: 20px;
  margin: 20px;
}

.order_ordering_TakeTask_task_attach input{
  font-size: 20px;
  margin: 20px;
}
.ordering_submit button{
  font-size: 20px;
  border: 1px solid darkgreen;
  border-radius: 5px;
  background-color: #2cb31b;
  color:white;
  padding: 10px;
  cursor: pointer;
  margin: 20px;

}

.order_ordering_TakeTask_taskWrite button{
  text-align: center;
  font-size: 20px;
  border: 1px solid darkgreen;
  border-radius: 5px;
  background: #2cb31b;
  color:white;
  padding: 10px;
  cursor: pointer;
  margin: 20px;


}
.order_ordering_TakeTask_task button:hover{
  animation: animSuubm 10s infinite;

}

.order_ordering_TakeTask_taskWrite textarea{
  margin: 20px;
}



@keyframes animSuubm {

  20%{
    background: linear-gradient(wheat,grey);
    transition: all 6s linear;
  }
  40%{
    background: linear-gradient(#268fcf,grey);
    transition: all 6s linear;
  }
  60%{
    background: linear-gradient(#d3a027, #c55050);
    transition: all 6s linear;
  }
  80%{
    background: linear-gradient(#0b639f, #402cc8);
    transition: all 6s linear;
  }
  100%{
    background: linear-gradient(#cfa41a, #1a910d);
    transition: all 6s linear;
  }
}
</style>