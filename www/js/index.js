
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function()
    {
        console.log("Passage dans onDeviceReady");
        
        app.receivedEvent('deviceready');
        //app.addToCal();
        
        var success = function(message) {
            alert(message);
        }

        var failure = function() {
            alert("Error calling Hello Plugin");
        }

        hello2.greet("World", success, failure);
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
    addToCal: function() {
            var startDate = new Date("February 24, 2015 8:00:00");
            var endDate = new Date("February 24, 2015 18:00:00");
            var notes = "Arrive on time, don't want to miss out (from Android)";
            var title = "PhoneGap Day";
            var location = "Amsterdam";
            var notes = "Arrive on time, don't want to miss out!";
            var success = function() { alert("Success"); };
            var error = function(message) { alert("Oopsie! " + message); };
            myfirstplugin1.createEvent(title, location, notes, startDate, endDate, success, error);
    }
};

app.initialize();
