$(document).ready(function() {
});

/**
 * Fetch messages from URL
 * @param  {Function} callback          Callback function to be invoke on success
 * @param  {Function} failCallback      Callback function to be invoke on error 
 */
function fetchMessages(callback, failCallback) {
    //Use $.ajax, jQuery is already a dependency
};

/**
 * Show messages on page
 * @param  {Array} message Array of messages 
 */
function showMessages(message) {

};

/**
 * Post message to server
 * @param  {Object} message Message Object to be send to server
 */
function postMessage(message) {
    //Use $.ajax
    //Parse server only accept strings as post data. Use JSON.stringify
};

/**
 * Turn UNIX timestamp into contextual time, such as "2 days ago", or "5 minnutes age"
 * @param  {Number} timestamp UNIX timestamp
 * @return {String}           Context Time
 */
function dateToNow(timestamp) {
    //Research about moment.js. It is a library that help you with contextual time
};

