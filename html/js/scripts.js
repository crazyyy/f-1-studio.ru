!function(t,e,n,i){function o(e,n){var a=this;"object"==typeof n&&(delete n.refresh,delete n.render,t.extend(this,n)),this.$element=t(e),!this.imageSrc&&this.$element.is("img")&&(this.imageSrc=this.$element.attr("src"));var s=(this.position+"").toLowerCase().match(/\S+/g)||[];return s.length<1&&s.push("center"),1==s.length&&s.push(s[0]),("top"==s[0]||"bottom"==s[0]||"left"==s[1]||"right"==s[1])&&(s=[s[1],s[0]]),this.positionX!=i&&(s[0]=this.positionX.toLowerCase()),this.positionY!=i&&(s[1]=this.positionY.toLowerCase()),a.positionX=s[0],a.positionY=s[1],"left"!=this.positionX&&"right"!=this.positionX&&(this.positionX=isNaN(parseInt(this.positionX))?"center":parseInt(this.positionX)),"top"!=this.positionY&&"bottom"!=this.positionY&&(this.positionY=isNaN(parseInt(this.positionY))?"center":parseInt(this.positionY)),this.position=this.positionX+(isNaN(this.positionX)?"":"px")+" "+this.positionY+(isNaN(this.positionY)?"":"px"),navigator.userAgent.match(/(iPod|iPhone|iPad)/)?(this.iosFix&&!this.$element.is("img")&&this.$element.css({backgroundImage:"url("+this.imageSrc+")",backgroundSize:"cover",backgroundPosition:this.position}),this):navigator.userAgent.match(/(Android)/)?(this.androidFix&&!this.$element.is("img")&&this.$element.css({backgroundImage:"url("+this.imageSrc+")",backgroundSize:"cover",backgroundPosition:this.position}),this):(this.$mirror=t("<div />").prependTo("body"),this.$slider=t("<img />").prependTo(this.$mirror),this.$mirror.addClass("parallax-mirror").css({visibility:"hidden",zIndex:this.zIndex,position:"fixed",top:0,left:0,overflow:"hidden"}),this.$slider.addClass("parallax-slider").one("load",function(){a.naturalHeight&&a.naturalWidth||(a.naturalHeight=this.naturalHeight||this.height||1,a.naturalWidth=this.naturalWidth||this.width||1),a.aspectRatio=a.naturalWidth/a.naturalHeight,o.isSetup||o.setup(),o.sliders.push(a),o.isFresh=!1,o.requestRender()}),this.$slider[0].src=this.imageSrc,void((this.naturalHeight&&this.naturalWidth||this.$slider[0].complete)&&this.$slider.trigger("load")))}function a(i){return this.each(function(){var a=t(this),s="object"==typeof i&&i;this==e||this==n||a.is("body")?o.configure(s):a.data("px.parallax")||(s=t.extend({},a.data(),s),a.data("px.parallax",new o(this,s))),"string"==typeof i&&o[i]()})}!function(){for(var t=0,n=["ms","moz","webkit","o"],i=0;i<n.length&&!e.requestAnimationFrame;++i)e.requestAnimationFrame=e[n[i]+"RequestAnimationFrame"],e.cancelAnimationFrame=e[n[i]+"CancelAnimationFrame"]||e[n[i]+"CancelRequestAnimationFrame"];e.requestAnimationFrame||(e.requestAnimationFrame=function(n){var i=(new Date).getTime(),o=Math.max(0,16-(i-t)),a=e.setTimeout(function(){n(i+o)},o);return t=i+o,a}),e.cancelAnimationFrame||(e.cancelAnimationFrame=function(t){clearTimeout(t)})}(),t.extend(o.prototype,{speed:.2,bleed:0,zIndex:-100,iosFix:!0,androidFix:!0,position:"center",overScrollFix:!1,refresh:function(){this.boxWidth=this.$element.outerWidth(),this.boxHeight=this.$element.outerHeight()+2*this.bleed,this.boxOffsetTop=this.$element.offset().top-this.bleed,this.boxOffsetLeft=this.$element.offset().left,this.boxOffsetBottom=this.boxOffsetTop+this.boxHeight;var t=o.winHeight,e=o.docHeight,n=Math.min(this.boxOffsetTop,e-t),i=Math.max(this.boxOffsetTop+this.boxHeight-t,0),a=this.boxHeight+(n-i)*(1-this.speed)|0,s=(this.boxOffsetTop-n)*(1-this.speed)|0;if(a*this.aspectRatio>=this.boxWidth){this.imageWidth=a*this.aspectRatio|0,this.imageHeight=a,this.offsetBaseTop=s;var c=this.imageWidth-this.boxWidth;this.offsetLeft="left"==this.positionX?0:"right"==this.positionX?-c:isNaN(this.positionX)?-c/2|0:Math.max(this.positionX,-c)}else{this.imageWidth=this.boxWidth,this.imageHeight=this.boxWidth/this.aspectRatio|0,this.offsetLeft=0;var c=this.imageHeight-a;this.offsetBaseTop="top"==this.positionY?s:"bottom"==this.positionY?s-c:isNaN(this.positionY)?s-c/2|0:s+Math.max(this.positionY,-c)}},render:function(){var t=o.scrollTop,e=o.scrollLeft,n=this.overScrollFix?o.overScroll:0,i=t+o.winHeight;this.visibility=this.boxOffsetBottom>t&&this.boxOffsetTop<i?"visible":"hidden",this.mirrorTop=this.boxOffsetTop-t,this.mirrorLeft=this.boxOffsetLeft-e,this.offsetTop=this.offsetBaseTop-this.mirrorTop*(1-this.speed),this.$mirror.css({transform:"translate3d(0px, 0px, 0px)",visibility:this.visibility,top:this.mirrorTop-n,left:this.mirrorLeft,height:this.boxHeight,width:this.boxWidth}),this.$slider.css({transform:"translate3d(0px, 0px, 0px)",position:"absolute",top:this.offsetTop,left:this.offsetLeft,height:this.imageHeight,width:this.imageWidth,maxWidth:"none"})}}),t.extend(o,{scrollTop:0,scrollLeft:0,winHeight:0,winWidth:0,docHeight:1<<30,docWidth:1<<30,sliders:[],isReady:!1,isFresh:!1,isBusy:!1,setup:function(){if(!this.isReady){var i=t(n),a=t(e);a.on("scroll.px.parallax load.px.parallax",function(){var t=o.docHeight-o.winHeight,e=o.docWidth-o.winWidth;o.scrollTop=Math.max(0,Math.min(t,a.scrollTop())),o.scrollLeft=Math.max(0,Math.min(e,a.scrollLeft())),o.overScroll=Math.max(a.scrollTop()-t,Math.min(a.scrollTop(),0)),o.requestRender()}).on("resize.px.parallax load.px.parallax",function(){o.winHeight=a.height(),o.winWidth=a.width(),o.docHeight=i.height(),o.docWidth=i.width(),o.isFresh=!1,o.requestRender()}),this.isReady=!0}},configure:function(e){"object"==typeof e&&(delete e.refresh,delete e.render,t.extend(this.prototype,e))},refresh:function(){t.each(this.sliders,function(){this.refresh()}),this.isFresh=!0},render:function(){this.isFresh||this.refresh(),t.each(this.sliders,function(){this.render()})},requestRender:function(){var t=this;this.isBusy||(this.isBusy=!0,e.requestAnimationFrame(function(){t.render(),t.isBusy=!1}))}});var s=t.fn.parallax;t.fn.parallax=a,t.fn.parallax.Constructor=o,t.fn.parallax.noConflict=function(){return t.fn.parallax=s,this},t(n).on("ready.px.parallax.data-api",function(){t('[data-parallax="scroll"]').parallax()})}(jQuery,window,document),function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t){var e,n,i=[],o=t(document),a=navigator.userAgent.toLowerCase(),s=t(window),c=[],r=null,l=/msie/.test(a)&&!/opera/.test(a),h=/opera/.test(a);e=l&&/msie 6./.test(a)&&"object"!=typeof window.XMLHttpRequest,n=l&&/msie 7.0/.test(a),t.modal=function(e,n){return t.modal.impl.init(e,n)},t.modal.close=function(){t.modal.impl.close()},t.modal.focus=function(e){t.modal.impl.focus(e)},t.modal.setContainerDimensions=function(){t.modal.impl.setContainerDimensions()},t.modal.setPosition=function(){t.modal.impl.setPosition()},t.modal.update=function(e,n){t.modal.impl.update(e,n)},t.fn.modal=function(e){return t.modal.impl.init(this,e)},t.modal.defaults={appendTo:"body",focus:!0,opacity:50,overlayId:"simplemodal-overlay",overlayCss:{},containerId:"simplemodal-container",containerCss:{},dataId:"simplemodal-data",dataCss:{},minHeight:null,minWidth:null,maxHeight:null,maxWidth:null,autoResize:!1,autoPosition:!0,zIndex:1e3,close:!0,closeHTML:'<a class="modalCloseImg" title="Close"></a>',closeClass:"simplemodal-close",escClose:!0,overlayClose:!1,fixed:!0,position:null,persist:!1,modal:!0,onOpen:null,onShow:null,onClose:null},t.modal.impl={d:{},init:function(e,n){if(this.d.data)return!1;if(r=l&&!t.support.boxModel,this.o=t.extend({},t.modal.defaults,n),this.zIndex=this.o.zIndex,this.occb=!1,"object"==typeof e)e=e instanceof t?e:t(e),this.d.placeholder=!1,0<e.parent().parent().size()&&(e.before(t("<span></span>").attr("id","simplemodal-placeholder").css({display:"none"})),this.d.placeholder=!0,this.display=e.css("display"),!this.o.persist)&&(this.d.orig=e.clone(!0));else{if("string"!=typeof e&&"number"!=typeof e)return alert("SimpleModal Error: Unsupported data type: "+typeof e),this;e=t("<div></div>").html(e)}return this.create(e),this.open(),t.isFunction(this.o.onShow)&&this.o.onShow.apply(this,[this.d]),this},create:function(n){this.getDimensions(),this.o.modal&&e&&(this.d.iframe=t('<iframe src="javascript:false;"></iframe>').css(t.extend(this.o.iframeCss,{display:"none",opacity:0,position:"fixed",height:c[0],width:c[1],zIndex:this.o.zIndex,top:0,left:0})).appendTo(this.o.appendTo)),this.d.overlay=t("<div></div>").attr("id",this.o.overlayId).addClass("simplemodal-overlay").css(t.extend(this.o.overlayCss,{display:"none",opacity:this.o.opacity/100,height:this.o.modal?i[0]:0,width:this.o.modal?i[1]:0,position:"fixed",left:0,top:0,zIndex:this.o.zIndex+1})).appendTo(this.o.appendTo),this.d.container=t("<div></div>").attr("id",this.o.containerId).addClass("simplemodal-container").css(t.extend({position:this.o.fixed?"fixed":"absolute"},this.o.containerCss,{display:"none",zIndex:this.o.zIndex+2})).append(this.o.close&&this.o.closeHTML?t(this.o.closeHTML).addClass(this.o.closeClass):"").appendTo(this.o.appendTo),this.d.wrap=t("<div></div>").attr("tabIndex",-1).addClass("simplemodal-wrap").css({height:"100%",outline:0,width:"100%"}).appendTo(this.d.container),this.d.data=n.attr("id",n.attr("id")||this.o.dataId).addClass("simplemodal-data").css(t.extend(this.o.dataCss,{display:"none"})).appendTo("body"),this.setContainerDimensions(),this.d.data.appendTo(this.d.wrap),(e||r)&&this.fixIE()},bindEvents:function(){var n=this;t("."+n.o.closeClass).bind("click.simplemodal",function(t){t.preventDefault(),n.close()}),n.o.modal&&n.o.close&&n.o.overlayClose&&n.d.overlay.bind("click.simplemodal",function(t){t.preventDefault(),n.close()}),o.bind("keydown.simplemodal",function(t){n.o.modal&&9===t.keyCode?n.watchTab(t):n.o.close&&n.o.escClose&&27===t.keyCode&&(t.preventDefault(),n.close())}),s.bind("resize.simplemodal orientationchange.simplemodal",function(){n.getDimensions(),n.o.autoResize?n.setContainerDimensions():n.o.autoPosition&&n.setPosition(),e||r?n.fixIE():n.o.modal&&(n.d.iframe&&n.d.iframe.css({height:c[0],width:c[1]}),n.d.overlay.css({height:i[0],width:i[1]}))})},unbindEvents:function(){t("."+this.o.closeClass).unbind("click.simplemodal"),o.unbind("keydown.simplemodal"),s.unbind(".simplemodal"),this.d.overlay.unbind("click.simplemodal")},fixIE:function(){var e=this.o.position;t.each([this.d.iframe||null,this.o.modal?this.d.overlay:null,"fixed"===this.d.container.css("position")?this.d.container:null],function(t,n){if(n){var i=n[0].style;if(i.position="absolute",2>t)i.removeExpression("height"),i.removeExpression("width"),i.setExpression("height",'document.body.scrollHeight > document.body.clientHeight ? document.body.scrollHeight : document.body.clientHeight + "px"'),i.setExpression("width",'document.body.scrollWidth > document.body.clientWidth ? document.body.scrollWidth : document.body.clientWidth + "px"');else{var o,a;e&&e.constructor===Array?(o=e[0]?"number"==typeof e[0]?e[0].toString():e[0].replace(/px/,""):n.css("top").replace(/px/,""),o=-1===o.indexOf("%")?o+' + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"':parseInt(o.replace(/%/,""))+' * ((document.documentElement.clientHeight || document.body.clientHeight) / 100) + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"',e[1]&&(a="number"==typeof e[1]?e[1].toString():e[1].replace(/px/,""),a=-1===a.indexOf("%")?a+' + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"':parseInt(a.replace(/%/,""))+' * ((document.documentElement.clientWidth || document.body.clientWidth) / 100) + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"')):(o='(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"',a='(document.documentElement.clientWidth || document.body.clientWidth) / 2 - (this.offsetWidth / 2) + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"'),i.removeExpression("top"),i.removeExpression("left"),i.setExpression("top",o),i.setExpression("left",a)}}})},focus:function(e){var n=this,e=e&&-1!==t.inArray(e,["first","last"])?e:"first",i=t(":input:enabled:visible:"+e,n.d.wrap);setTimeout(function(){0<i.length?i.focus():n.d.wrap.focus()},10)},getDimensions:function(){var t="undefined"==typeof window.innerHeight?s.height():window.innerHeight;i=[o.height(),o.width()],c=[t,s.width()]},getVal:function(t,e){return t?"number"==typeof t?t:"auto"===t?0:0<t.indexOf("%")?parseInt(t.replace(/%/,""))/100*("h"===e?c[0]:c[1]):parseInt(t.replace(/px/,"")):null},update:function(t,e){return this.d.data?(this.d.origHeight=this.getVal(t,"h"),this.d.origWidth=this.getVal(e,"w"),this.d.data.hide(),t&&this.d.container.css("height",t),e&&this.d.container.css("width",e),this.setContainerDimensions(),this.d.data.show(),this.o.focus&&this.focus(),this.unbindEvents(),void this.bindEvents()):!1},setContainerDimensions:function(){var t=e||n,i=this.d.origHeight?this.d.origHeight:h?this.d.container.height():this.getVal(t?this.d.container[0].currentStyle.height:this.d.container.css("height"),"h"),t=this.d.origWidth?this.d.origWidth:h?this.d.container.width():this.getVal(t?this.d.container[0].currentStyle.width:this.d.container.css("width"),"w"),o=this.d.data.outerHeight(!0),a=this.d.data.outerWidth(!0);this.d.origHeight=this.d.origHeight||i,this.d.origWidth=this.d.origWidth||t;var s=this.o.maxHeight?this.getVal(this.o.maxHeight,"h"):null,r=this.o.maxWidth?this.getVal(this.o.maxWidth,"w"):null,s=s&&s<c[0]?s:c[0],r=r&&r<c[1]?r:c[1],l=this.o.minHeight?this.getVal(this.o.minHeight,"h"):"auto",i=i?this.o.autoResize&&i>s?s:l>i?l:i:o?o>s?s:this.o.minHeight&&"auto"!==l&&l>o?l:o:l,s=this.o.minWidth?this.getVal(this.o.minWidth,"w"):"auto",t=t?this.o.autoResize&&t>r?r:s>t?s:t:a?a>r?r:this.o.minWidth&&"auto"!==s&&s>a?s:a:s;this.d.container.css({height:i,width:t}),this.d.wrap.css({overflow:o>i||a>t?"auto":"visible"}),this.o.autoPosition&&this.setPosition()},setPosition:function(){var t,e;t=c[0]/2-this.d.container.outerHeight(!0)/2,e=c[1]/2-this.d.container.outerWidth(!0)/2;var n="fixed"!==this.d.container.css("position")?s.scrollTop():0;this.o.position&&"[object Array]"===Object.prototype.toString.call(this.o.position)?(t=n+(this.o.position[0]||t),e=this.o.position[1]||e):t=n+t,this.d.container.css({left:e,top:t})},watchTab:function(e){0<t(e.target).parents(".simplemodal-container").length?(this.inputs=t(":input:enabled:visible:first, :input:enabled:visible:last",this.d.data[0]),(!e.shiftKey&&e.target===this.inputs[this.inputs.length-1]||e.shiftKey&&e.target===this.inputs[0]||0===this.inputs.length)&&(e.preventDefault(),this.focus(e.shiftKey?"last":"first"))):(e.preventDefault(),this.focus())},open:function(){this.d.iframe&&this.d.iframe.show(),t.isFunction(this.o.onOpen)?this.o.onOpen.apply(this,[this.d]):(this.d.overlay.show(),this.d.container.show(),this.d.data.show()),this.o.focus&&this.focus(),this.bindEvents()},close:function(){if(!this.d.data)return!1;if(this.unbindEvents(),t.isFunction(this.o.onClose)&&!this.occb)this.occb=!0,this.o.onClose.apply(this,[this.d]);else{if(this.d.placeholder){var e=t("#simplemodal-placeholder");this.o.persist?e.replaceWith(this.d.data.removeClass("simplemodal-data").css("display",this.display)):(this.d.data.hide().remove(),e.replaceWith(this.d.orig))}else this.d.data.hide().remove();this.d.container.hide().remove(),this.d.overlay.hide(),this.d.iframe&&this.d.iframe.hide().remove(),this.d.overlay.remove(),this.d={}}}}}),$(".landform").on("submit",function(t){t.preventDefault(),$(this).addClass("current-form");var e=($(this),$.trim($(".current-form input[name=email]").val())),n=$.trim($(".current-form input[name=name]").val()),i=$(this).serializeArray(),o=$(this).attr("action"),a=$(".current-form .thanx"),s=$(".current-form input[name=name]"),c=$(".current-form input[name=email]"),r=$(".current-form .message");$(r).fadeIn(200),null!=n&&0==n.length?($(r).addClass("message-err").html("Укажите своё имя"),$(s).addClass("input-error"),event.preventDefault()):null!=e&&0==e.length?($(s).removeClass("input-error"),$(r).addClass("message-err").html("Укажите почту"),$(c).addClass("input-error"),event.preventDefault()):($(c).removeClass("input-error"),$.ajax({url:o,type:"POST",data:i,beforeSend:function(){$(r).html("Отправляем...")},success:function(t){$(r).addClass("message-ok"),$(r).html("Успешно отправилось!"),$(r).fadeOut(1500),$(a).fadeIn(1500)}})),$(this).removeClass("current-form")}),jQuery(function(t){var e={message:null,init:function(){t(".recall").click(function(n){n.preventDefault(),t.get("data/recall.php",function(n){t(n).modal({closeHTML:"<a href='#' title='Close' class='modal-close'>x</a>",autoPosition:!0,overlayId:"contact-overlay",containerId:"contact-container",onOpen:e.open,onShow:e.show,onClose:e.close})})})},open:function(e){var n=370,i=t("#contact-container .contact-title").html();t("#contact-container .contact-title").html("Loading..."),e.overlay.fadeIn(200,function(){e.container.fadeIn(200,function(){e.data.fadeIn(200,function(){t("#contact-container .contact-content").animate({height:n},function(){t("#contact-container .contact-title").html(i),t("#contact-container form").fadeIn(200,function(){t("#contact-container #contact-name").focus(),t("#contact-container .contact-cc").click(function(){var e=t("#contact-container #contact-cc");e.is(":checked")?e.attr("checked",""):e.attr("checked","checked")})})})})})})},show:function(n){t("#contact-container .contact-send").click(function(n){if(n.preventDefault(),e.validate()){var i=t("#contact-container .contact-message");i.fadeOut(function(){i.removeClass("contact-error").empty()}),t("#contact-container .contact-title").html("Sending..."),t("#contact-container form").fadeOut(200),t("#contact-container .contact-content").animate({height:"260px"},function(){t("#contact-container .contact-loading").fadeIn(200,function(){t.ajax({url:"data/recall.php",data:t("#contact-container form").serialize()+"&action=send",type:"post",cache:!1,dataType:"html",success:function(e){t("#contact-container .contact-loading").fadeOut(200,function(){t("#contact-container .contact-title").html("Thank you!"),i.html(e).fadeIn(200)})},error:e.error})})})}else if(t("#contact-container .contact-message:visible").length>0){var i=t("#contact-container .contact-message div");i.fadeOut(200,function(){i.empty(),e.showError(),i.fadeIn(200)})}else t("#contact-container .contact-message").animate({height:"1px"},e.showError)})},close:function(e){t("#contact-container .contact-message").fadeOut(),t("#contact-container .contact-title").html("Goodbye..."),t("#contact-container form").fadeOut(200),t("#contact-container .contact-content").animate({height:40},function(){e.data.fadeOut(200,function(){e.container.fadeOut(200,function(){e.overlay.fadeOut(200,function(){t.modal.close()})})})})},error:function(t){alert(t.statusText)},validate:function(){e.message="",t("#contact-container #contact-name").val()||(e.message+="Укажите Ваше Имя. ");var n=t("#contact-container #contact-email").val();n?e.validateEmail(n)||(e.message+="Email is invalid. "):e.message+="Email is required. ",t("#contact-container #contact-message").val()||(e.message+="Message is required.");var i=t("#contact-container .contact-phone").val().length;return console.log(i),(!t("#contact-container .contact-phone").val()||15>i)&&(e.message+="Укажите Ваш телефон."),e.message.length>0?!1:!0},validateEmail:function(t){var e=t.lastIndexOf("@");if(1>e||e+1===t.length)return!1;if(/(\.{2,})/.test(t))return!1;var n=t.substring(0,e),i=t.substring(e+1);return n.length<1||n.length>64||i.length<4||i.length>255?!1:/(^\.|\.$)/.test(n)||/(^\.|\.$)/.test(i)?!1:(/^"(.+)"$/.test(n)||/^[-a-zA-Z0-9!#$%*\/?|^{}`~&'+=_\.]*$/.test(n))&&/^[-a-zA-Z0-9\.]*$/.test(i)&&-1!==i.indexOf(".")?!0:!1},showError:function(){t("#contact-container .contact-message").html(t('<div class="contact-error"></div>').append(e.message)).fadeIn(200)}};e.init()}),jQuery(function(t){var e={message:null,init:function(){t(".catalog-slides-container button").click(function(n){n.preventDefault(),t.get("data/action.php",function(n){t(n).modal({closeHTML:"<a href='#' title='Close' class='modal-close'>x</a>",autoPosition:!0,overlayId:"contact-overlay",containerId:"contact-container",onOpen:e.open,onShow:e.show,onClose:e.close})})})},open:function(e){var n=370,i=t("#contact-container .contact-title").html();t("#contact-container .contact-title").html("Loading..."),e.overlay.fadeIn(200,function(){e.container.fadeIn(200,function(){e.data.fadeIn(200,function(){t("#contact-container .contact-content").animate({height:n},function(){t("#contact-container .contact-title").html(i),t("#contact-container form").fadeIn(200,function(){t("#contact-container #contact-name").focus(),t("#contact-container .contact-cc").click(function(){var e=t("#contact-container #contact-cc");e.is(":checked")?e.attr("checked",""):e.attr("checked","checked")})})})})})})},show:function(n){t("#contact-container .contact-send").click(function(n){if(n.preventDefault(),e.validate()){var i=t("#contact-container .contact-message");i.fadeOut(function(){i.removeClass("contact-error").empty()}),t("#contact-container .contact-title").html("Sending..."),t("#contact-container form").fadeOut(200),t("#contact-container .contact-content").animate({height:"260px"},function(){t("#contact-container .contact-loading").fadeIn(200,function(){t.ajax({url:"data/action.php",data:t("#contact-container form").serialize()+"&action=send",type:"post",cache:!1,dataType:"html",success:function(e){t("#contact-container .contact-loading").fadeOut(200,function(){t("#contact-container .contact-title").html("Thank you!"),i.html(e).fadeIn(200)})},error:e.error})})})}else if(t("#contact-container .contact-message:visible").length>0){var i=t("#contact-container .contact-message div");i.fadeOut(200,function(){i.empty(),e.showError(),i.fadeIn(200)})}else t("#contact-container .contact-message").animate({height:"1px"},e.showError)})},close:function(e){t("#contact-container .contact-message").fadeOut(),t("#contact-container .contact-title").html("Goodbye..."),t("#contact-container form").fadeOut(200),t("#contact-container .contact-content").animate({height:40},function(){e.data.fadeOut(200,function(){e.container.fadeOut(200,function(){e.overlay.fadeOut(200,function(){t.modal.close()})})})})},error:function(t){alert(t.statusText)},validate:function(){e.message="",t("#contact-container #contact-name").val()||(e.message+="Укажите Ваше Имя. ");var n=t("#contact-container #contact-email").val();n?e.validateEmail(n)||(e.message+="Email is invalid. "):e.message+="Email is required. ",t("#contact-container #contact-message").val()||(e.message+="Message is required.");var i=t("#contact-container .contact-phone").val().length;return console.log(i),(!t("#contact-container .contact-phone").val()||15>i)&&(e.message+="Укажите Ваш телефон."),e.message.length>0?!1:!0},validateEmail:function(t){var e=t.lastIndexOf("@");if(1>e||e+1===t.length)return!1;if(/(\.{2,})/.test(t))return!1;var n=t.substring(0,e),i=t.substring(e+1);return n.length<1||n.length>64||i.length<4||i.length>255?!1:/(^\.|\.$)/.test(n)||/(^\.|\.$)/.test(i)?!1:(/^"(.+)"$/.test(n)||/^[-a-zA-Z0-9!#$%*\/?|^{}`~&'+=_\.]*$/.test(n))&&/^[-a-zA-Z0-9\.]*$/.test(i)&&-1!==i.indexOf(".")?!0:!1},showError:function(){t("#contact-container .contact-message").html(t('<div class="contact-error"></div>').append(e.message)).fadeIn(200)}};e.init()}),jQuery(function(t){var e={message:null,init:function(){t(".need-consultation button").click(function(n){n.preventDefault(),t.get("data/consult.php",function(n){t(n).modal({closeHTML:"<a href='#' title='Close' class='modal-close'>x</a>",autoPosition:!0,overlayId:"contact-overlay",containerId:"contact-container",onOpen:e.open,onShow:e.show,onClose:e.close})})})},open:function(e){var n=410,i=t("#contact-container .contact-title").html();t("#contact-container .contact-title").html("Loading..."),e.overlay.fadeIn(200,function(){e.container.fadeIn(200,function(){e.data.fadeIn(200,function(){t("#contact-container .contact-content").animate({height:n},function(){t("#contact-container .contact-title").html(i),t("#contact-container form").fadeIn(200,function(){t("#contact-container #contact-name").focus(),t("#contact-container .contact-cc").click(function(){var e=t("#contact-container #contact-cc");e.is(":checked")?e.attr("checked",""):e.attr("checked","checked")})})})})})})},show:function(n){t("#contact-container .contact-send").click(function(n){if(n.preventDefault(),e.validate()){var i=t("#contact-container .contact-message");i.fadeOut(function(){i.removeClass("contact-error").empty()}),t("#contact-container .contact-title").html("Sending..."),t("#contact-container form").fadeOut(200),t("#contact-container .contact-content").animate({height:"260px"},function(){t("#contact-container .contact-loading").fadeIn(200,function(){t.ajax({url:"data/consult.php",data:t("#contact-container form").serialize()+"&action=send",type:"post",cache:!1,dataType:"html",success:function(e){t("#contact-container .contact-loading").fadeOut(200,function(){t("#contact-container .contact-title").html("Thank you!"),i.html(e).fadeIn(200)})},error:e.error})})})}else if(t("#contact-container .contact-message:visible").length>0){var i=t("#contact-container .contact-message div");i.fadeOut(200,function(){i.empty(),e.showError(),i.fadeIn(200)})}else t("#contact-container .contact-message").animate({height:"1px"},e.showError)})},close:function(e){t("#contact-container .contact-message").fadeOut(),t("#contact-container .contact-title").html("Goodbye..."),t("#contact-container form").fadeOut(200),t("#contact-container .contact-content").animate({height:40},function(){e.data.fadeOut(200,function(){e.container.fadeOut(200,function(){e.overlay.fadeOut(200,function(){t.modal.close()})})})})},error:function(t){alert(t.statusText)},validate:function(){e.message="",t("#contact-container #contact-name").val()||(e.message+="Укажите Ваше Имя. ");var n=t("#contact-container #contact-email").val();n?e.validateEmail(n)||(e.message+="Email is invalid. "):e.message+="Email is required. ",t("#contact-container #contact-message").val()||(e.message+="Message is required.");var i=t("#contact-container .contact-phone").val().length;return console.log(i),(!t("#contact-container .contact-phone").val()||15>i)&&(e.message+="Укажите Ваш телефон."),e.message.length>0?!1:!0},validateEmail:function(t){var e=t.lastIndexOf("@");if(1>e||e+1===t.length)return!1;if(/(\.{2,})/.test(t))return!1;var n=t.substring(0,e),i=t.substring(e+1);return n.length<1||n.length>64||i.length<4||i.length>255?!1:/(^\.|\.$)/.test(n)||/(^\.|\.$)/.test(i)?!1:(/^"(.+)"$/.test(n)||/^[-a-zA-Z0-9!#$%*\/?|^{}`~&'+=_\.]*$/.test(n))&&/^[-a-zA-Z0-9\.]*$/.test(i)&&-1!==i.indexOf(".")?!0:!1},showError:function(){t("#contact-container .contact-message").html(t('<div class="contact-error"></div>').append(e.message)).fadeIn(200)}};e.init()});