<div id="Level" class="div-container center">
   <div class="col-xs-12">
      <h1 id="level_header">Level Select</h1>
   </div>
   <div class="col-xs-12">
      <div>
         <button class="btn-primary btn-lvl" id="show_g1">1</button>
         <button class="btn-danger btn-lvl" id="show_g2">2</button>
         <button class="btn-danger btn-lvl" id="show_g3">3</button>
         <button class="btn-danger btn-lvl" id="show_g4">4</button>
         <button class="btn-danger btn-lvl" id="show_g5">5</button>
      </div>
      <div>
         <button class="btn-danger btn-lvl" id="show_g6">6</button>
         <button class="btn-danger btn-lvl" id="show_g7">7</button>
         <button class="btn-danger btn-lvl" id="show_g8">8</button>
         <button class="btn-danger btn-lvl" id="show_g9">9</button>
         <button class="btn-danger btn-lvl" id="show_g10">10</button>
      </div>
      <div>
         <button class="btn-danger btn-lvl" id="show_g11">11</button>
         <button class="btn-danger btn-lvl" id="show_g12">12</button>
         <button class="btn-danger btn-lvl" id="show_g13">13</button>
         <button class="btn-danger btn-lvl" id="show_g14">14</button>
         <button class="btn-danger btn-lvl" id="show_g15">15</button>
      </div>
      <div>
         
         <button class="btn-danger btn-lvl" id="show_g16">16</button>
         <button class="btn-danger btn-lvl" id="show_g17">17</button>
         <button class="btn-danger btn-lvl" id="show_g18">18</button>
         <button class="btn-danger btn-lvl" id="show_g19">19</button>
         <button class="btn-danger btn-lvl" id="show_g20">20</button>
      </div>
      <div>
         <button class="btn-danger btn-lvl" id="show_g21">21</button>
         <button class="btn-danger btn-lvl" id="show_g22">22</button>
         <button class="btn-danger btn-lvl" id="show_g23">23</button>
         <button class="btn-danger btn-lvl" id="show_g24">24</button>
         <button class="btn-danger btn-lvl" id="show_g25">25</button>
      </div>
   </div>
   <div class="col-xs-12 center"><button class="show_m btn-primary">Back</button></div>
</div>



<script>

$(document).ready(function(){
   //==========================================================
   //BUTTON LEVELS
   $("#show_g1").click(function(){
      if (unlock > 0) {
         mapLevel = 1;
         gameBool = true;
         pauseBool = false;
         reset();
         $("#Level").hide();
         $("#Game").show();
         addKeyListener();
      }
   });
   $("#show_g2").click(function(){
      if (unlock > 1) {
         mapLevel = 2;
         gameBool = true;
         pauseBool = false;
         reset();
         $("#Level").hide();
         $("#Game").show();
         addKeyListener();
      }
   });
   $("#show_g3").click(function(){
      if (unlock > 2) {
         mapLevel = 3;
         gameBool = true;
         pauseBool = false;
         reset();
         $("#Level").hide();
         $("#Game").show();
         addKeyListener();
      }
   });
   $("#show_g4").click(function(){
      if (unlock > 3) {
         mapLevel = 4;
         gameBool = true;
         pauseBool = false;
         reset();
         $("#Level").hide();
         $("#Game").show();
         addKeyListener();
      }
   });
   $("#show_g5").click(function(){
      if (unlock > 4) {
         mapLevel = 5;
         gameBool = true;
         pauseBool = false;
         reset();
         $("#Level").hide();
         $("#Game").show();
         addKeyListener();
      }
   });
   $("#show_g6").click(function(){
      if (unlock > 5) {
         mapLevel = 6;
         gameBool = true;
         pauseBool = false;
         reset();
         $("#Level").hide();
         $("#Game").show();
         addKeyListener();
      }
   });
   $("#show_g7").click(function(){
      if (unlock > 6) {
         mapLevel = 7;
         gameBool = true;
         pauseBool = false;
         reset();
         $("#Level").hide();
         $("#Game").show();
         addKeyListener();
      }
   });
   $("#show_g8").click(function(){
      if (unlock > 7) {
         mapLevel = 8;
         gameBool = true;
         pauseBool = false;
         reset();
         $("#Level").hide();
         $("#Game").show();
         addKeyListener();
      }
   });
   $("#show_g9").click(function(){
      if (unlock > 8) {
         mapLevel = 9;
         gameBool = true;
         pauseBool = false;
         reset();
         $("#Level").hide();
         $("#Game").show();
         addKeyListener();
      }
   });
   $("#show_g10").click(function(){
      if (unlock > 9) {
         mapLevel = 10;
         gameBool = true;
         pauseBool = false;
         reset();
         $("#Level").hide();
         $("#Game").show();
         addKeyListener();
      }
   });
   $("#show_g11").click(function(){
      if (unlock > 10) {
         mapLevel = 11;
         gameBool = true;
         pauseBool = false;
         reset();
         $("#Level").hide();
         $("#Game").show();
         addKeyListener();
      }
   });
   $("#show_g12").click(function(){
      if (unlock > 11) {
         mapLevel = 12;
         gameBool = true;
         pauseBool = false;
         reset();
         $("#Level").hide();
         $("#Game").show();
         addKeyListener();
      }
   });
   $("#show_g13").click(function(){
      if (unlock > 12) {
         mapLevel = 13;
         gameBool = true;
         pauseBool = false;
         reset();
         $("#Level").hide();
         $("#Game").show();
         addKeyListener();
      }
   });
   $("#show_g14").click(function(){
      if (unlock > 13) {
         mapLevel = 14;
         gameBool = true;
         pauseBool = false;
         reset();
         $("#Level").hide();
         $("#Game").show();
         addKeyListener();
      }
   });
   $("#show_g15").click(function(){
      if (unlock > 14) {
         mapLevel = 15;
         gameBool = true;
         pauseBool = false;
         reset();
         $("#Level").hide();
         $("#Game").show();
         addKeyListener();
      }
   });
   $("#show_g16").click(function(){
      if (unlock > 15) {
         mapLevel = 16;
         gameBool = true;
         pauseBool = false;
         reset();
         $("#Level").hide();
         $("#Game").show();
         addKeyListener();
      }
   });
   $("#show_g17").click(function(){
      if (unlock > 16) {
         mapLevel = 17;
         gameBool = true;
         pauseBool = false;
         reset();
         $("#Level").hide();
         $("#Game").show();
         addKeyListener();
      }
   });
   $("#show_g18").click(function(){
      if (unlock > 17) {
         mapLevel = 18;
         gameBool = true;
         pauseBool = false;
         reset();
         $("#Level").hide();
         $("#Game").show();
         addKeyListener();
      }
   });
   $("#show_g19").click(function(){
      if (unlock > 18) {
         mapLevel = 19;
         gameBool = true;
         pauseBool = false;
         reset();
         $("#Level").hide();
         $("#Game").show();
         addKeyListener();
      }
   });
   $("#show_g20").click(function(){
      if (unlock > 19) {
         mapLevel = 20;
         gameBool = true;
         pauseBool = false;
         reset();
         $("#Level").hide();
         $("#Game").show();
         addKeyListener();
      }
   });
   $("#show_g21").click(function(){
      if (unlock > 20) {
         mapLevel = 21;
         gameBool = true;
         pauseBool = false;
         reset();
         $("#Level").hide();
         $("#Game").show();
         addKeyListener();
      }
   });
   $("#show_g22").click(function(){
      if (unlock > 21) {
         mapLevel = 22;
         gameBool = true;
         pauseBool = false;
         reset();
         $("#Level").hide();
         $("#Game").show();
         addKeyListener();
      }
   });
   $("#show_g23").click(function(){
      if (unlock > 22) {
         mapLevel = 23;
         gameBool = true;
         pauseBool = false;
         reset();
         $("#Level").hide();
         $("#Game").show();
         addKeyListener();
      }
   });
   $("#show_g24").click(function(){
      if (unlock > 23) {
         mapLevel = 24;
         gameBool = true;
         pauseBool = false;
         reset();
         $("#Level").hide();
         $("#Game").show();
         addKeyListener();
      }
   });
   $("#show_g25").click(function(){
      if (unlock > 24) {
         mapLevel = 25;
         gameBool = true;
         pauseBool = false;
         reset();
         $("#Level").hide();
         $("#Game").show();
         addKeyListener();
      }
   });
});
</script>