!function(t,i,e,o){function n(i,e){var s=this;"object"==typeof e&&(delete e.refresh,delete e.render,t.extend(this,e)),this.$element=t(i),!this.imageSrc&&this.$element.is("img")&&(this.imageSrc=this.$element.attr("src"));var a=(this.position+"").toLowerCase().match(/\S+/g)||[];return a.length<1&&a.push("center"),1==a.length&&a.push(a[0]),("top"==a[0]||"bottom"==a[0]||"left"==a[1]||"right"==a[1])&&(a=[a[1],a[0]]),this.positionX!=o&&(a[0]=this.positionX.toLowerCase()),this.positionY!=o&&(a[1]=this.positionY.toLowerCase()),s.positionX=a[0],s.positionY=a[1],"left"!=this.positionX&&"right"!=this.positionX&&(this.positionX=isNaN(parseInt(this.positionX))?"center":parseInt(this.positionX)),"top"!=this.positionY&&"bottom"!=this.positionY&&(this.positionY=isNaN(parseInt(this.positionY))?"center":parseInt(this.positionY)),this.position=this.positionX+(isNaN(this.positionX)?"":"px")+" "+this.positionY+(isNaN(this.positionY)?"":"px"),navigator.userAgent.match(/(iPod|iPhone|iPad)/)?(this.iosFix&&!this.$element.is("img")&&this.$element.css({backgroundImage:"url("+this.imageSrc+")",backgroundSize:"cover",backgroundPosition:this.position}),this):navigator.userAgent.match(/(Android)/)?(this.androidFix&&!this.$element.is("img")&&this.$element.css({backgroundImage:"url("+this.imageSrc+")",backgroundSize:"cover",backgroundPosition:this.position}),this):(this.$mirror=t("<div />").prependTo("body"),this.$slider=t("<img />").prependTo(this.$mirror),this.$mirror.addClass("parallax-mirror").css({visibility:"hidden",zIndex:this.zIndex,position:"fixed",top:0,left:0,overflow:"hidden"}),this.$slider.addClass("parallax-slider").one("load",function(){s.naturalHeight&&s.naturalWidth||(s.naturalHeight=this.naturalHeight||this.height||1,s.naturalWidth=this.naturalWidth||this.width||1),s.aspectRatio=s.naturalWidth/s.naturalHeight,n.isSetup||n.setup(),n.sliders.push(s),n.isFresh=!1,n.requestRender()}),this.$slider[0].src=this.imageSrc,void((this.naturalHeight&&this.naturalWidth||this.$slider[0].complete)&&this.$slider.trigger("load")))}function s(o){return this.each(function(){var s=t(this),a="object"==typeof o&&o;this==i||this==e||s.is("body")?n.configure(a):s.data("px.parallax")||(a=t.extend({},s.data(),a),s.data("px.parallax",new n(this,a))),"string"==typeof o&&n[o]()})}!function(){for(var t=0,e=["ms","moz","webkit","o"],o=0;o<e.length&&!i.requestAnimationFrame;++o)i.requestAnimationFrame=i[e[o]+"RequestAnimationFrame"],i.cancelAnimationFrame=i[e[o]+"CancelAnimationFrame"]||i[e[o]+"CancelRequestAnimationFrame"];i.requestAnimationFrame||(i.requestAnimationFrame=function(e){var o=(new Date).getTime(),n=Math.max(0,16-(o-t)),s=i.setTimeout(function(){e(o+n)},n);return t=o+n,s}),i.cancelAnimationFrame||(i.cancelAnimationFrame=function(t){clearTimeout(t)})}(),t.extend(n.prototype,{speed:.2,bleed:0,zIndex:-100,iosFix:!0,androidFix:!0,position:"center",overScrollFix:!1,refresh:function(){this.boxWidth=this.$element.outerWidth(),this.boxHeight=this.$element.outerHeight()+2*this.bleed,this.boxOffsetTop=this.$element.offset().top-this.bleed,this.boxOffsetLeft=this.$element.offset().left,this.boxOffsetBottom=this.boxOffsetTop+this.boxHeight;var t=n.winHeight,i=n.docHeight,e=Math.min(this.boxOffsetTop,i-t),o=Math.max(this.boxOffsetTop+this.boxHeight-t,0),s=this.boxHeight+(e-o)*(1-this.speed)|0,a=(this.boxOffsetTop-e)*(1-this.speed)|0;if(s*this.aspectRatio>=this.boxWidth){this.imageWidth=s*this.aspectRatio|0,this.imageHeight=s,this.offsetBaseTop=a;var r=this.imageWidth-this.boxWidth;this.offsetLeft="left"==this.positionX?0:"right"==this.positionX?-r:isNaN(this.positionX)?-r/2|0:Math.max(this.positionX,-r)}else{this.imageWidth=this.boxWidth,this.imageHeight=this.boxWidth/this.aspectRatio|0,this.offsetLeft=0;var r=this.imageHeight-s;this.offsetBaseTop="top"==this.positionY?a:"bottom"==this.positionY?a-r:isNaN(this.positionY)?a-r/2|0:a+Math.max(this.positionY,-r)}},render:function(){var t=n.scrollTop,i=n.scrollLeft,e=this.overScrollFix?n.overScroll:0,o=t+n.winHeight;this.visibility=this.boxOffsetBottom>t&&this.boxOffsetTop<o?"visible":"hidden",this.mirrorTop=this.boxOffsetTop-t,this.mirrorLeft=this.boxOffsetLeft-i,this.offsetTop=this.offsetBaseTop-this.mirrorTop*(1-this.speed),this.$mirror.css({transform:"translate3d(0px, 0px, 0px)",visibility:this.visibility,top:this.mirrorTop-e,left:this.mirrorLeft,height:this.boxHeight,width:this.boxWidth}),this.$slider.css({transform:"translate3d(0px, 0px, 0px)",position:"absolute",top:this.offsetTop,left:this.offsetLeft,height:this.imageHeight,width:this.imageWidth,maxWidth:"none"})}}),t.extend(n,{scrollTop:0,scrollLeft:0,winHeight:0,winWidth:0,docHeight:1<<30,docWidth:1<<30,sliders:[],isReady:!1,isFresh:!1,isBusy:!1,setup:function(){if(!this.isReady){var o=t(e),s=t(i);s.on("scroll.px.parallax load.px.parallax",function(){var t=n.docHeight-n.winHeight,i=n.docWidth-n.winWidth;n.scrollTop=Math.max(0,Math.min(t,s.scrollTop())),n.scrollLeft=Math.max(0,Math.min(i,s.scrollLeft())),n.overScroll=Math.max(s.scrollTop()-t,Math.min(s.scrollTop(),0)),n.requestRender()}).on("resize.px.parallax load.px.parallax",function(){n.winHeight=s.height(),n.winWidth=s.width(),n.docHeight=o.height(),n.docWidth=o.width(),n.isFresh=!1,n.requestRender()}),this.isReady=!0}},configure:function(i){"object"==typeof i&&(delete i.refresh,delete i.render,t.extend(this.prototype,i))},refresh:function(){t.each(this.sliders,function(){this.refresh()}),this.isFresh=!0},render:function(){this.isFresh||this.refresh(),t.each(this.sliders,function(){this.render()})},requestRender:function(){var t=this;this.isBusy||(this.isBusy=!0,i.requestAnimationFrame(function(){t.render(),t.isBusy=!1}))}});var a=t.fn.parallax;t.fn.parallax=s,t.fn.parallax.Constructor=n,t.fn.parallax.noConflict=function(){return t.fn.parallax=a,this},t(e).on("ready.px.parallax.data-api",function(){t('[data-parallax="scroll"]').parallax()})}(jQuery,window,document),function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t){var i,e,o=[],n=t(document),s=navigator.userAgent.toLowerCase(),a=t(window),r=[],h=null,c=/msie/.test(s)&&!/opera/.test(s),l=/opera/.test(s);i=c&&/msie 6./.test(s)&&"object"!=typeof window.XMLHttpRequest,e=c&&/msie 7.0/.test(s),t.modal=function(i,e){return t.modal.impl.init(i,e)},t.modal.close=function(){t.modal.impl.close()},t.modal.focus=function(i){t.modal.impl.focus(i)},t.modal.setContainerDimensions=function(){t.modal.impl.setContainerDimensions()},t.modal.setPosition=function(){t.modal.impl.setPosition()},t.modal.update=function(i,e){t.modal.impl.update(i,e)},t.fn.modal=function(i){return t.modal.impl.init(this,i)},t.modal.defaults={appendTo:"body",focus:!0,opacity:50,overlayId:"simplemodal-overlay",overlayCss:{},containerId:"simplemodal-container",containerCss:{},dataId:"simplemodal-data",dataCss:{},minHeight:null,minWidth:null,maxHeight:null,maxWidth:null,autoResize:!1,autoPosition:!0,zIndex:1e3,close:!0,closeHTML:'<a class="modalCloseImg" title="Close"></a>',closeClass:"simplemodal-close",escClose:!0,overlayClose:!1,fixed:!0,position:null,persist:!1,modal:!0,onOpen:null,onShow:null,onClose:null},t.modal.impl={d:{},init:function(i,e){if(this.d.data)return!1;if(h=c&&!t.support.boxModel,this.o=t.extend({},t.modal.defaults,e),this.zIndex=this.o.zIndex,this.occb=!1,"object"==typeof i)i=i instanceof t?i:t(i),this.d.placeholder=!1,0<i.parent().parent().size()&&(i.before(t("<span></span>").attr("id","simplemodal-placeholder").css({display:"none"})),this.d.placeholder=!0,this.display=i.css("display"),!this.o.persist)&&(this.d.orig=i.clone(!0));else{if("string"!=typeof i&&"number"!=typeof i)return alert("SimpleModal Error: Unsupported data type: "+typeof i),this;i=t("<div></div>").html(i)}return this.create(i),this.open(),t.isFunction(this.o.onShow)&&this.o.onShow.apply(this,[this.d]),this},create:function(e){this.getDimensions(),this.o.modal&&i&&(this.d.iframe=t('<iframe src="javascript:false;"></iframe>').css(t.extend(this.o.iframeCss,{display:"none",opacity:0,position:"fixed",height:r[0],width:r[1],zIndex:this.o.zIndex,top:0,left:0})).appendTo(this.o.appendTo)),this.d.overlay=t("<div></div>").attr("id",this.o.overlayId).addClass("simplemodal-overlay").css(t.extend(this.o.overlayCss,{display:"none",opacity:this.o.opacity/100,height:this.o.modal?o[0]:0,width:this.o.modal?o[1]:0,position:"fixed",left:0,top:0,zIndex:this.o.zIndex+1})).appendTo(this.o.appendTo),this.d.container=t("<div></div>").attr("id",this.o.containerId).addClass("simplemodal-container").css(t.extend({position:this.o.fixed?"fixed":"absolute"},this.o.containerCss,{display:"none",zIndex:this.o.zIndex+2})).append(this.o.close&&this.o.closeHTML?t(this.o.closeHTML).addClass(this.o.closeClass):"").appendTo(this.o.appendTo),this.d.wrap=t("<div></div>").attr("tabIndex",-1).addClass("simplemodal-wrap").css({height:"100%",outline:0,width:"100%"}).appendTo(this.d.container),this.d.data=e.attr("id",e.attr("id")||this.o.dataId).addClass("simplemodal-data").css(t.extend(this.o.dataCss,{display:"none"})).appendTo("body"),this.setContainerDimensions(),this.d.data.appendTo(this.d.wrap),(i||h)&&this.fixIE()},bindEvents:function(){var e=this;t("."+e.o.closeClass).bind("click.simplemodal",function(t){t.preventDefault(),e.close()}),e.o.modal&&e.o.close&&e.o.overlayClose&&e.d.overlay.bind("click.simplemodal",function(t){t.preventDefault(),e.close()}),n.bind("keydown.simplemodal",function(t){e.o.modal&&9===t.keyCode?e.watchTab(t):e.o.close&&e.o.escClose&&27===t.keyCode&&(t.preventDefault(),e.close())}),a.bind("resize.simplemodal orientationchange.simplemodal",function(){e.getDimensions(),e.o.autoResize?e.setContainerDimensions():e.o.autoPosition&&e.setPosition(),i||h?e.fixIE():e.o.modal&&(e.d.iframe&&e.d.iframe.css({height:r[0],width:r[1]}),e.d.overlay.css({height:o[0],width:o[1]}))})},unbindEvents:function(){t("."+this.o.closeClass).unbind("click.simplemodal"),n.unbind("keydown.simplemodal"),a.unbind(".simplemodal"),this.d.overlay.unbind("click.simplemodal")},fixIE:function(){var i=this.o.position;t.each([this.d.iframe||null,this.o.modal?this.d.overlay:null,"fixed"===this.d.container.css("position")?this.d.container:null],function(t,e){if(e){var o=e[0].style;if(o.position="absolute",2>t)o.removeExpression("height"),o.removeExpression("width"),o.setExpression("height",'document.body.scrollHeight > document.body.clientHeight ? document.body.scrollHeight : document.body.clientHeight + "px"'),o.setExpression("width",'document.body.scrollWidth > document.body.clientWidth ? document.body.scrollWidth : document.body.clientWidth + "px"');else{var n,s;i&&i.constructor===Array?(n=i[0]?"number"==typeof i[0]?i[0].toString():i[0].replace(/px/,""):e.css("top").replace(/px/,""),n=-1===n.indexOf("%")?n+' + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"':parseInt(n.replace(/%/,""))+' * ((document.documentElement.clientHeight || document.body.clientHeight) / 100) + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"',i[1]&&(s="number"==typeof i[1]?i[1].toString():i[1].replace(/px/,""),s=-1===s.indexOf("%")?s+' + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"':parseInt(s.replace(/%/,""))+' * ((document.documentElement.clientWidth || document.body.clientWidth) / 100) + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"')):(n='(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"',s='(document.documentElement.clientWidth || document.body.clientWidth) / 2 - (this.offsetWidth / 2) + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"'),o.removeExpression("top"),o.removeExpression("left"),o.setExpression("top",n),o.setExpression("left",s)}}})},focus:function(i){var e=this,i=i&&-1!==t.inArray(i,["first","last"])?i:"first",o=t(":input:enabled:visible:"+i,e.d.wrap);setTimeout(function(){0<o.length?o.focus():e.d.wrap.focus()},10)},getDimensions:function(){var t="undefined"==typeof window.innerHeight?a.height():window.innerHeight;o=[n.height(),n.width()],r=[t,a.width()]},getVal:function(t,i){return t?"number"==typeof t?t:"auto"===t?0:0<t.indexOf("%")?parseInt(t.replace(/%/,""))/100*("h"===i?r[0]:r[1]):parseInt(t.replace(/px/,"")):null},update:function(t,i){return this.d.data?(this.d.origHeight=this.getVal(t,"h"),this.d.origWidth=this.getVal(i,"w"),this.d.data.hide(),t&&this.d.container.css("height",t),i&&this.d.container.css("width",i),this.setContainerDimensions(),this.d.data.show(),this.o.focus&&this.focus(),this.unbindEvents(),void this.bindEvents()):!1},setContainerDimensions:function(){var t=i||e,o=this.d.origHeight?this.d.origHeight:l?this.d.container.height():this.getVal(t?this.d.container[0].currentStyle.height:this.d.container.css("height"),"h"),t=this.d.origWidth?this.d.origWidth:l?this.d.container.width():this.getVal(t?this.d.container[0].currentStyle.width:this.d.container.css("width"),"w"),n=this.d.data.outerHeight(!0),s=this.d.data.outerWidth(!0);this.d.origHeight=this.d.origHeight||o,this.d.origWidth=this.d.origWidth||t;var a=this.o.maxHeight?this.getVal(this.o.maxHeight,"h"):null,h=this.o.maxWidth?this.getVal(this.o.maxWidth,"w"):null,a=a&&a<r[0]?a:r[0],h=h&&h<r[1]?h:r[1],c=this.o.minHeight?this.getVal(this.o.minHeight,"h"):"auto",o=o?this.o.autoResize&&o>a?a:c>o?c:o:n?n>a?a:this.o.minHeight&&"auto"!==c&&c>n?c:n:c,a=this.o.minWidth?this.getVal(this.o.minWidth,"w"):"auto",t=t?this.o.autoResize&&t>h?h:a>t?a:t:s?s>h?h:this.o.minWidth&&"auto"!==a&&a>s?a:s:a;this.d.container.css({height:o,width:t}),this.d.wrap.css({overflow:n>o||s>t?"auto":"visible"}),this.o.autoPosition&&this.setPosition()},setPosition:function(){var t,i;t=r[0]/2-this.d.container.outerHeight(!0)/2,i=r[1]/2-this.d.container.outerWidth(!0)/2;var e="fixed"!==this.d.container.css("position")?a.scrollTop():0;this.o.position&&"[object Array]"===Object.prototype.toString.call(this.o.position)?(t=e+(this.o.position[0]||t),i=this.o.position[1]||i):t=e+t,this.d.container.css({left:i,top:t})},watchTab:function(i){0<t(i.target).parents(".simplemodal-container").length?(this.inputs=t(":input:enabled:visible:first, :input:enabled:visible:last",this.d.data[0]),(!i.shiftKey&&i.target===this.inputs[this.inputs.length-1]||i.shiftKey&&i.target===this.inputs[0]||0===this.inputs.length)&&(i.preventDefault(),this.focus(i.shiftKey?"last":"first"))):(i.preventDefault(),this.focus())},open:function(){this.d.iframe&&this.d.iframe.show(),t.isFunction(this.o.onOpen)?this.o.onOpen.apply(this,[this.d]):(this.d.overlay.show(),this.d.container.show(),this.d.data.show()),this.o.focus&&this.focus(),this.bindEvents()},close:function(){if(!this.d.data)return!1;if(this.unbindEvents(),t.isFunction(this.o.onClose)&&!this.occb)this.occb=!0,this.o.onClose.apply(this,[this.d]);else{if(this.d.placeholder){var i=t("#simplemodal-placeholder");this.o.persist?i.replaceWith(this.d.data.removeClass("simplemodal-data").css("display",this.display)):(this.d.data.hide().remove(),i.replaceWith(this.d.orig))}else this.d.data.hide().remove();this.d.container.hide().remove(),this.d.overlay.hide(),this.d.iframe&&this.d.iframe.hide().remove(),this.d.overlay.remove(),this.d={}}}}}),$(".landform").on("submit",function(t){t.preventDefault(),$(this).addClass("current-form");var i=($(this),$.trim($(".current-form input[name=email]").val())),e=$.trim($(".current-form input[name=name]").val()),o=$(this).serializeArray(),n=$(this).attr("action"),s=$(".current-form .thanx"),a=$(".current-form input[name=name]"),r=$(".current-form input[name=email]"),h=$(".current-form .message");$(h).fadeIn(200),null!=e&&0==e.length?($(h).addClass("message-err").html("Укажите своё имя"),$(a).addClass("input-error"),event.preventDefault()):null!=i&&0==i.length?($(a).removeClass("input-error"),$(h).addClass("message-err").html("Укажите почту"),$(r).addClass("input-error"),event.preventDefault()):($(r).removeClass("input-error"),$.ajax({url:n,type:"POST",data:o,beforeSend:function(){$(h).html("Отправляем...")},success:function(t){$(h).addClass("message-ok"),$(h).html("Успешно отправилось!"),$(h).fadeOut(1500),$(s).fadeIn(1500)}})),$(this).removeClass("current-form")}),jQuery(function(t){var i={message:null,init:function(){t(".recall").click(function(e){e.preventDefault(),t.get("data/recall.php",function(e){t(e).modal({closeHTML:"<a href='#' title='Close' class='modal-close'>x</a>",autoPosition:!0,overlayId:"contact-overlay",containerId:"contact-container",onOpen:i.open,onShow:i.show,onClose:i.close})})})},open:function(i){var e=370,o=t("#contact-container .contact-title").html();t("#contact-container .contact-title").html("Loading..."),i.overlay.fadeIn(200,function(){i.container.fadeIn(200,function(){i.data.fadeIn(200,function(){t("#contact-container .contact-content").animate({height:e},function(){t("#contact-container .contact-title").html(o),t("#contact-container form").fadeIn(200,function(){t("#contact-container #contact-name").focus(),t("#contact-container .contact-cc").click(function(){var i=t("#contact-container #contact-cc");i.is(":checked")?i.attr("checked",""):i.attr("checked","checked")})})})})})})},show:function(e){t("#contact-container .contact-send").click(function(e){if(e.preventDefault(),i.validate()){var o=t("#contact-container .contact-message");o.fadeOut(function(){o.removeClass("contact-error").empty()}),t("#contact-container .contact-title").html("Sending..."),t("#contact-container form").fadeOut(200),t("#contact-container .contact-content").animate({height:"20px"},function(){t("#contact-container .contact-loading").fadeIn(200,function(){t.ajax({url:"data/recall.php",data:t("#contact-container form").serialize()+"&action=send",type:"post",cache:!1,dataType:"html",success:function(i){t("#contact-container .contact-loading").fadeOut(200,function(){t("#contact-container .contact-title").html("Thank you!"),o.html(i).fadeIn(200)})},error:i.error})})})}else if(t("#contact-container .contact-message:visible").length>0){var o=t("#contact-container .contact-message div");o.fadeOut(200,function(){o.empty(),i.showError(),o.fadeIn(200)})}else t("#contact-container .contact-message").animate({height:"1px"},i.showError)})},close:function(i){t("#contact-container .contact-message").fadeOut(),t("#contact-container .contact-title").html("Goodbye..."),t("#contact-container form").fadeOut(200),t("#contact-container .contact-content").animate({height:40},function(){i.data.fadeOut(200,function(){i.container.fadeOut(200,function(){i.overlay.fadeOut(200,function(){t.modal.close()})})})})},error:function(t){alert(t.statusText)},validate:function(){i.message="",t("#contact-container #contact-name").val()||(i.message+="Укажите Ваше Имя. ");var e=t("#contact-container #contact-email").val();e?i.validateEmail(e)||(i.message+="Email is invalid. "):i.message+="Email is required. ",t("#contact-container #contact-message").val()||(i.message+="Message is required.");var o=t("#contact-container .contact-phone").val().length;return console.log(o),t("#contact-container .contact-phone").val()||(i.message+="Укажите Ваш телефон."),i.message.length>0?!1:!0},validateEmail:function(t){var i=t.lastIndexOf("@");if(1>i||i+1===t.length)return!1;if(/(\.{2,})/.test(t))return!1;var e=t.substring(0,i),o=t.substring(i+1);return e.length<1||e.length>64||o.length<4||o.length>255?!1:/(^\.|\.$)/.test(e)||/(^\.|\.$)/.test(o)?!1:(/^"(.+)"$/.test(e)||/^[-a-zA-Z0-9!#$%*\/?|^{}`~&'+=_\.]*$/.test(e))&&/^[-a-zA-Z0-9\.]*$/.test(o)&&-1!==o.indexOf(".")?!0:!1},showError:function(){t("#contact-container .contact-message").html(t('<div class="contact-error"></div>').append(i.message)).fadeIn(200)}};i.init()});