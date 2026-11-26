(function(){
  var header=document.querySelector("header"),root=document.documentElement;
  if(header){
    var vv=window.visualViewport,baseDpr=window.devicePixelRatio||1;
    var baseVv=(vv&&isFinite(vv.scale)&&vv.scale>0)?vv.scale:1;
    function update(){
      var dpr=window.devicePixelRatio||1;
      var vs=(vv&&isFinite(vv.scale)&&vv.scale>0)?vv.scale:1;
      var zoom=(dpr/baseDpr)*(vs/baseVv);
      if(!isFinite(zoom)||zoom<=0)zoom=1;
      root.style.setProperty("--nav-inv",(1/zoom).toFixed(5));
    }
    var pending=false;
    function schedule(){
      if(pending)return;
      pending=true;
      (window.requestAnimationFrame||function(f){setTimeout(f,16)})(function(){pending=false;update()});
    }
    update();
    window.addEventListener("resize",schedule);
    window.addEventListener("orientationchange",schedule);
    if(vv)vv.addEventListener("resize",schedule);
    if(document.fonts&&document.fonts.ready)document.fonts.ready.then(schedule);
    function watchDpr(){
      if(!window.matchMedia)return;
      var mq=window.matchMedia("(resolution: "+(window.devicePixelRatio||1)+"dppx)");
      function onChange(){schedule();watchDpr()}
      if(mq.addEventListener)mq.addEventListener("change",onChange,{once:true});
      else if(mq.addListener)mq.addListener(function once(){mq.removeListener(once);onChange()});
    }
    watchDpr();
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