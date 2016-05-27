<div id="Settings" class="div-container center">
   <div class="col-xs-12">
      <h1 id="settings_header">Settings</h1>
   </div>
   <div class="col-xs-12" id="checkbox_container">
      <button id="music" class="btn-primary">Turn Off Music</button>
      <button id="play" class="btn-primary">Turn On Music</button>
   </div>
   <div class="col-xs-12 center">
      <button class="btn-primary show_m">Back</button>
   </div>
</div>

<script>
$(document).ready(function(){
     $("#music").click(function() {
              themeSound.stop();
     });
     $("#play").click(function() {
              themeSound.play();
              themeSound.fade(0, 1, 2000);
     });
});
</script>