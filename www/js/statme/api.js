(function(window){
  window.STATME.API = function(){
    
    var statmeEndpoint = 'http://statme';
    var apiEndpoint = statmeEndpoint + '/api';
    
    var request = function(type, url, data, callback){
      
      var ajaxRequest = $("body").data('ajaxRequest');
      
      if(ajaxRequest && typeof(ajaxRequest.abort) == 'function')
      {
        ajaxRequest.abort();
      }
    
      var target = url + "?callback=?";
     
      ajaxRequest = jQuery.ajax({
        type: type.toUpperCase(),
        dataType: "jsonp",
        url: target,
        data: data,
        error: function(jqXHR, textStatus, errorThrown){
          alert(textStatus);
        },
        success : callback
      });
      
      $("body").data('ajaxRequest', ajaxRequest);
    };
    
    return {
      call: function(method, path, params, callback){
        var params = params || {};
      
        if (typeof callback !== 'function') {
          throw ('Invalid callback parameter passed to ApiServer.call(). Only a function is allowed.');
        }
      
        var url = apiEndpoint + path;
        
        request(method, url, params, callback);
      },
      
      login: function(login, password, callback, fields){
        var url = statmeEndpoint + '/login/api';
        
        var fields = fields || '';
        
        var params = {
          login: login,
          password: password,
          fields : fields
        }
        
        request('POST', url, params, callback);
      }
    };
  };
})(window);