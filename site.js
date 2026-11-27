(function(){
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