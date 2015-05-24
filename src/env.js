// Put your parse application keys here!
var APP_ID  = 'PUT YOUR APP ID HERE';
var API_KEY = 'PUT YOUR API KEY HERE';
 
$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader("X-Parse-Application-Id", APP_ID);
  jqXHR.setRequestHeader("X-Parse-REST-API-Key", API_KEY);
});
