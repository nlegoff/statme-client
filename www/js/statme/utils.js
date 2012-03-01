(function(window){
  window.STATME.UTILS = {
    ALERT: {
        error: function(msg, heading){
          var heading = heading || '';
          
          return '  <div class="alert alert-error alert-block">'
                  +   '<a class="close" data-dismiss="alert">X</a>'
                  +   '<h4 class="alert-heading">'
                  +     heading 
                  +   '</h4>'
                  +   msg
                  + '</div>'
        },
        warning: function(msg, heading){
          var heading = heading || '';
          
          return '  <div class="alert alert-block">'
                  +   '<a class="close" data-dismiss="alert">X</a>'
                  +   '<h4 class="alert-heading">'
                  +     heading 
                  +   '</h4>'
                  +   msg
                  + '</div>'
        },
        remove: function (scope){
          var scope = scope || $("body");
          $(".alert", scope).remove();
        }
      }
    };
})(window);


