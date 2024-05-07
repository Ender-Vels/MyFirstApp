<template>
<div class="info">
  <div class="info_Logo_logo">
    <img src="../assets/Logo.svg" alt="">
  </div>
  <!--Card Blocks-->
  <div class="info_card1">
    <div class="info_card_property1">
      <div class="ellipse1">

      </div>
      <div class="property">
        <p>
          Ми використовуємо самі новітні технології, для якісної роботи з своїми клієнтами, та виконання їх замовлень.
          Тільки нові, та найкращі послуги!
        </p>
      </div>
    </div>
  </div>

  <div class="info_card2">
    <div class="info_card_property2">
      <div class="ellipse2">

      </div>
      <div class="property">
        <p>
          Вислухаємо кожне ваше питання, та проблему. Найдемо спільне рішення, ще на етапі обговорення ТЗ.
        </p>
      </div>
    </div>
  </div>

  <div class="info_card3">
    <div class="info_card_property3">
      <div class="ellipse3">

      </div>
      <div class="property">
        <p>
          Вислухаємо кожне ваше питання, та проблему. Найдемо спільне рішення, ще на етапі обговорення ТЗ.
        </p>
      </div>
    </div>
  </div>

  <div class="info_card4">
    <div class="info_card_property4">
      <div class="ellipse4">

      </div>
      <div class="property">
        <p>
          Зробимо все в найкоротші сроки! Наші Працівники перевірені спеціалістами нашого відділу, та навчені працювати швидко
        </p>
      </div>
    </div>
  </div>

</div>
</template>


<script >

</script>


//135,424 mm -height
//209,564 mm - width

<style>
.info{
  display: flex;
  height: 1290px;
  width: 1350px;
  justify-content: center;
  align-items: center;
  position: relative;
  font-style: italic;
  background-color: #faf9f9;
  margin: 0px auto;
}
.info_Logo_logo{
  height: 300px;
  align-items: center;
}
.info_Logo_logo img{
  height: 260px;
}

@keyframes move {
100%{
  offset-distance: 100%;
}
}

.info_card_property1{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 200px;
  height: 200px;
  font-size: 15px;
  padding: 30px 20px;
  background-color: antiquewhite;
  border-radius: 15px;
}


.ellipse1{
  width: 50px;
  height: 50px;
  background-color: brown;
  border-radius: 60px;
  margin: 0px auto;

}
.property{
  margin: 15px;
}
.info_card1{
  top: 200px;
  left: 250px;
  position: absolute;
  offset-path: path("m825.7,400.14c0,220.72-184.73,399.64-412.6,399.64S.5,620.86.5,400.14,185.23.5,413.1.5s412.6,178.92,412.6,399.64");
  offset-rotate: 0deg;
  animation: move 25s linear infinite;
}


.info_card_property2{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 200px;
  height: 200px;
  font-size: 15px;
  padding: 30px 20px;
  background-color: #d6d45a;
  border-radius: 15px;
}
.ellipse2{
  width: 50px;
  height: 50px;
  background-color: #97ec01;
  border-radius: 60px;
  margin: 0px auto;

}
.property{
  margin: 15px;
}
.info_card2{
  top: 200px;
  left: 250px;
  position: absolute;
  offset-path: path("m2.63,359.28C23.76,157.76,199.47.5,413.1.5c227.87,0,412.6,178.92,412.6,399.64s-184.73,399.64-412.6,399.64S.5,620.86.5,400.14c0-13.79.72-27.43,2.13-40.86");
  offset-rotate: 0deg;
  animation: move 25s linear infinite;
}



.info_card_property3{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 200px;
  height: 200px;
  font-size: 15px;
  padding: 30px 20px;
  background-color: #6978f4;
  border-radius: 15px;

}
.ellipse3{
  width: 50px;
  height: 50px;
  background-color: #12d6c0;
  border-radius: 60px;
  margin: 0px auto;

}
.property{
  margin: 15px;
}
.info_card3{

  position: absolute;
  top: 200px;
  left: 250px;
  offset-path: path("m413.1,799.78C185.23,799.78.5,620.86.5,400.14S185.23.5,413.1.5s412.6,178.92,412.6,399.64-184.73,399.64-412.6,399.64");
  offset-rotate:0deg;
  animation: move 25s linear infinite;
}



.info_card_property4{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 200px;
  height: 200px;
  font-size: 15px;
  padding: 30px 20px;
  background-color: #e16711;
  border-radius: 15px;
}
.ellipse4{
  width: 50px;
  height: 50px;
  background-color: #7309a6;
  border-radius: 60px;
  margin: 0px auto;

}
.property{
  margin: 15px;
}
.info_card4{
  left:200px;
  top: 200px;
  position: absolute;
  offset-path: path("m413.1.5c227.87,0,412.6,178.92,412.6,399.64s-184.73,399.64-412.6,399.64S.5,620.86.5,400.14,185.23.5,413.1.5");
  offset-rotate:0deg;
  animation: move 25s linear infinite;
}




</style>