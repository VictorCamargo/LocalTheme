/**
 * fastLiveFilter jQuery plugin 1.0.3
 * 
 * Copyright (c) 2011, Anthony Bush
 * License: <http://www.opensource.org/licenses/bsd-license.php>
 * Project Website: http://anthonybush.com/projects/jquery_fast_live_filter/
 **/
jQuery.fn.fastLiveFilter=function(e,t){t=t||{},e=jQuery(e);var a,n=this,i=t.timeout||0,o=t.callback||function(){},d=e.children(),r=d.length,s=r>0?d[0].style.display:"block";return o(r),n.on("change",function(){for(var e,t=n.val().toLowerCase(),a=0,i=0;r>i;i++)e=d[i],(e.textContent||e.innerText||"").toLowerCase().indexOf(t)>=0?("none"==e.style.display&&(e.style.display=s),a++):"none"!=e.style.display&&(e.style.display="none");return o(a),!1}).on("keydown",function(){clearTimeout(a),a=setTimeout(function(){n.change()},i)}),this};