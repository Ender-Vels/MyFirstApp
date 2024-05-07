<template>
  <div class="head">
<div class="header">

 <div class="header_logo">
  <RouterLink to="/"><img src="../assets/Logo.svg" alt="Logo">
   <img src="../assets/Name.svg" alt="Name"></RouterLink>
 </div>

  <div class="header_search">
    <input type="search" placeholder="Що б ви хотіли Знайти?">
    <button ><img src="../assets/Search.svg" alt="пошук"> </button>
  </div>

  <div class="header_authorization" >
   <button class="header_authorization_elem" @click="ShowModal"><span>Авторизація</span>
     <img src="../assets/Login.svg" alt=""></button>
  </div>

</div>
    <div class="head_nav">
      <ul>
          <li> <RouterLink to="/">Головна</RouterLink></li>
          <li> <RouterLink to="/category">Категорії</RouterLink></li>
        <li>Про нас</li>
        <li>Контакти</li>
      </ul>
    </div>
  </div>

</template>


<script>

export default{
  components: {},

  data(){
    return{
      isModalShow:false
    }
  },
  methods:{
    ShowModal(){
      this.isModalShow=!this.isModalShow
      this.$emit('ShowModalsWindow',this.isModalShow)
      this.isModalShow=false
    }
  }

}
</script>



<style>
.header{
  display: flex;
  align-items: center;
  background-color: #81b2a6;
  justify-content: space-around;
}
.header_logo{
  display: flex;
  align-items: center;
  padding: 10px;



}
.header_logo img{
 height: 50px;
}
.header_search{
  display: flex;
  align-items: center;
  margin-right: 30px;
  border-radius: 25px;
  padding: 3px;
}
.header_search input {
  padding: 5px;
  border:none;
  border-radius: 10px 0px 0px 10px;
  font-size: 20px;

}
.header_search button{
  background-color: #438e7b;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 15px;
  padding-right: 15px;
  border: none;
  height: 32px;
  border-radius: 0px 10px 10px 0px;
  cursor: pointer;
}
.header_search img{
  height: 15px;
}
.header_authorization img{
  height: 40px;
  margin-left: 10px;
}
.header_authorization{
  display: flex;
  align-items: center;

}
.header_authorization button{
  border: none;
  background: none;
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
}
.header_authorization span{
  font-size: 20px;
  align-items: center;
}
.header_authorization:hover {
  transition: 80ms linear;
  padding: 4px ;
  background: linear-gradient(cyan, #28b310);
  border-radius: 10px 15px;

}


.head{
  display: flex;
  flex-direction: column;
  background-color: #81b2a6;
}
.head_nav ul{
  display: flex;
  justify-content: space-around;
  list-style: none;
  align-items: center;
}
.head_nav li{
  padding: 15px 30px;
  text-align: center;
  font-size: 20px;

}
.head_nav li:hover{
  background-color: #60af9c;
  cursor: pointer;
  color: aliceblue;
}
.head_nav a{
  color: black;
  text-decoration: none;
}
.head_nav a:hover{
  color: white;
  text-decoration: none;
}
</style>