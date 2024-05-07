<template>
<div class="modal">
  <div class="isAuthorization" v-if="isAuthorization">
  <div class="modal_container" >
      <form >
        <div class="modal_container_close"><button @click="CloseModal">X</button></div>
        <div class="dataContainer">
          <span>Email:</span>
          <input type="email">
        </div>
        <div class="dataContainer">
          <span>Пароль:</span>
          <input type="password">
        </div>
            <div class="forgetAuthorize">
              <button @click="ChooseModal">Немає аккаунту? Зареєструйся</button>
              <button @click="ForgetPass">Забули пароль?</button>
            </div>
        <div class="submit">
          <input type="submit" value="Авторизуватись">
        </div>

      </form>
  </div>
  </div>
<!--Forgoten-->


  <div class="isForgoten" v-else-if="isForget">
    <div class="modal_container" >
      <form>
        <div class="modal_container_close"><button @click="CloseModal">X</button></div>
        <div class="dataContainer">
          <span>Вкажіть Email для відновлення:</span>
          <input type="email">
        </div>
      </form>
    </div>
  </div>
<!--Register-->



  <div class="isRegister" v-else>
    <div class="modal_container" >
      <form >

        <div class="modal_container_close"><button @click="CloseModal">X</button></div>
        <div class="dataContainer">
          <span>Email:</span>
          <input type="email">
        </div>
        <div class="dataContainer">
          <span>Пароль:</span>
          <input type="password">
        </div>
        <div class="dataContainer">
          <span> Повтори пароль:</span>
          <input type="password">
        </div>
        <div class="dataContainer">
          <span> Ім'я:</span>
          <input type="text">
        </div>
        <div class="dataContainer">
          <span> Прізвище:</span>
          <input type="text">
        </div>
        <div class="dataContainer">
          <span> Дата народження:</span>
          <input type="date">
        </div>
        <div class="submit">
          <input type="submit" value="Авторизуватись">
        </div>

      </form>
    </div>
  </div>


</div>
</template>

<script>
export default {
  //TODO: Описав в забули пароль регыстрацію. Потрібно коректувати

  data(){
    return{
      isAuthorization:true,
      isForget:false,

    }
  },
  methods:{
    CloseModal(){
      let val=false
      this.$emit('CloseModal',val)
    },
    ChooseModal(){
      this.isAuthorization=!this.isAuthorization

    },
    ForgetPass(){
      this.isForget=!this.isForget
    }
  }
}
</script>



<style>
  .modal{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    overflow: auto;
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    z-index: 199;
  }
  @keyframes modal {
    0%{
      transform: scale(.2);
      opacity: 0;

      visibility: hidden;
    }
    100%{
      transform: scale(1);
      opacity: 1;
      visibility: visible;
    }
  }
  .modal_container{
    position: relative;
    display: flex;
    justify-content: center;
    width: 600px;

    background: linear-gradient(#0eb27d, #81b2a6);
    transition: all 1s linear ;
    animation: modal 1s linear;

  }


  .dataContainer{
    display:flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    font-size: 25px;
    margin-bottom: 5px;
  }
  .dataContainer input{
    font-size: 25px;
    margin: 10px;
    opacity: 0.5;
    border:none;
    padding: 5px;
    border-radius: 15px 20px;
    outline: none;

  }
  .submit{
    text-align: center;
    margin-top: 15px;

  }
  .submit input{
    font-size: 20px;
    margin-bottom: 20px;
    padding: 15px;
    background-color: #2cb31b;
    border:none;
    border-radius: 10px;

  }
  .modal_container_close{
    position: absolute;
    right: 0;
    margin-bottom: 10px;
  }
  .modal_container_close button{
    padding: 5px;
    text-align: center;
    font-weight: 800;
    color: #faf9f9;
    background: none;
    border: none;
    cursor: pointer;
  }

  .forgetAuthorize button{
    border: none;
    background: none;
    font-size: 20px;
    cursor: pointer;
    text-align: center;
    outline: none;
  }
  .forgetAuthorize{
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .forgetAuthorize button:hover{
    color: blue;
    transition: 1s linear;
    transform: scale(1.2);
  }

</style>