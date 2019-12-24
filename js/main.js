

function menuResponsive() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
/*
theGallery("colores");
theGallery("geometria");
theGallery("texturas");
theGallery("merchandising");

function theGallery(section){
    var gallery = document.querySelector('#gallery-'+section);
    var getVal = function (elem, style) { return parseInt(window.getComputedStyle(elem).getPropertyValue(style)); };
    var getHeight = function (item) { return item.querySelector('.content').getBoundingClientRect().height; };
    var resizeAll = function () {
        var altura = getVal(gallery, 'grid-auto-rows');
        var gap = getVal(gallery, 'grid-row-gap');
        gallery.querySelectorAll('.gallery-item').forEach(function (item) {
            var el = item;
            el.style.gridRowEnd = "span " + Math.ceil((getHeight(item) + gap) / (altura + gap));
        });
    };
    gallery.querySelectorAll('img').forEach(function (item) {
        if (item.complete) {
            console.log(item.src);
        }
        else {
            item.addEventListener('load', function () {
                var altura = getVal(gallery, 'grid-auto-rows');
                var gap = getVal(gallery, 'grid-row-gap');
                var gitem = item.parentElement.parentElement;
                gitem.style.gridRowEnd = "span " + Math.ceil((getHeight(gitem) + gap) / (altura + gap));
            });
        }
    });
    window.addEventListener('resize', resizeAll);
    gallery.querySelectorAll('.gallery-item').forEach(function (item) {
        item.addEventListener('click', function () {        
            item.classList.toggle('full');        
        });
    });
    }


    !function(window){
        var $q = function(q, res){
              if (document.querySelectorAll) {
                res = document.querySelectorAll(q);
              } else {
                var d=document
                  , a=d.styleSheets[0] || d.createStyleSheet();
                a.addRule(q,'f:b');
                for(var l=d.all,b=0,c=[],f=l.length;b<f;b++)
                  l[b].currentStyle.f && c.push(l[b]);
      
                a.removeRule(0);
                res = c;
              }
              return res;
            }
          , addEventListener = function(evt, fn){
              window.addEventListener
                ? this.addEventListener(evt, fn, false)
                : (window.attachEvent)
                  ? this.attachEvent('on' + evt, fn)
                  : this['on' + evt] = fn;
            }
          , _has = function(obj, key) {
              return Object.prototype.hasOwnProperty.call(obj, key);
            }
          ;
      
        function loadImage (el, fn) {
          var img = new Image()
            , src = el.getAttribute('data-src');
          img.onload = function() {
            if (!! el.parent)
              el.parent.replaceChild(img, el)
            else
              el.src = src;
      
            fn? fn() : null;
          }
          img.src = src;
        }
      
        function elementInViewport(el) {
          var rect = el.getBoundingClientRect()
      
          return (
             rect.top    >= 0
          && rect.left   >= 0
          && rect.top <= (window.innerHeight || document.documentElement.clientHeight)
          )
        }
      
          var images = new Array()
            , query = $q('img.lazy')
            , processScroll = function(){
                for (var i = 0; i < images.length; i++) {
                  if (elementInViewport(images[i])) {
                    loadImage(images[i], function () {
                      images.splice(i, i);
                    });
                  }
                };
              }
            ;
          // Array.prototype.slice.call is not callable under our lovely IE8 
          for (var i = 0; i < query.length; i++) {
            images.push(query[i]);
          };
      
          processScroll();
          addEventListener('scroll',processScroll);
      
      }(this);*/