(function(){
  var header=document.querySelector("header"),root=document.documentElement;
  if(header){
    var base=window.devicePixelRatio||1;
    function update(){
      var vv=window.visualViewport,zoom=1;
      if(vv&&isFinite(vv.scale)&&vv.scale>0)zoom=vv.scale;
      else zoom=(window.devicePixelRatio||1)/base;
      if(!isFinite(zoom)||zoom<=0)zoom=1;
      var scale=1/zoom,h=header.offsetHeight||64;
      root.style.setProperty("--nav-scale",scale.toFixed(5));
      root.style.setProperty("--nav-width",(zoom*100).toFixed(3)+"%");
      root.style.setProperty("--nav-pad",(h*scale).toFixed(2)+"px");
    }
    update();
    window.addEventListener("resize",update);
    window.addEventListener("orientationchange",update);
    if(window.visualViewport)window.visualViewport.addEventListener("resize",update);
    if(document.fonts&&document.fonts.ready)document.fonts.ready.then(update);
  }
  var lb=document.getElementById("lb"),im=document.getElementById("lbi"),last=null;
  if(lb&&im){
    function close_(){lb.hidden=true;if(last)last.focus()}
    document.addEventListener("click",function(e){
      var b=e.target.closest&&e.target.closest(".zb");
      if(b){var t=b.querySelector("img");if(!t)return;last=b;im.src=t.src;im.alt=t.alt||"";lb.hidden=false;return}
      if(e.target===lb||e.target===im)close_();
    });
    document.addEventListener("keydown",function(e){if(e.key==="Escape"&&!lb.hidden)close_()});
  }
})();