var client;
var brokerAddress = "broker.hivemq.com";
var port = 8000;
var randomNumber = 0;

// CallBack function when client connects to broker
function onConnect() {
    console.log("Connected to Broker");

    // Subscribes to the random topic
    client.subscribe("switchDin/randomNumber")
}

// CallBack function when client disconnects from broker
function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
        console.log("onConnectionLost:" + responseObject.errorMessage);
    }
}

// CallBack function when client recieves a message from broker
function onMessageArrived(message) {
    console.log("Number Recieved:" + message.payloadString);
    randomNumber = JSON.parse(message.payloadString)
    createAnimation(parseInt(randomNumber))
    addToTable(parseInt(randomNumber))
}

// Function to connect to the broker
function brokerConnect() {

    // Create a new client instance
    client = new Paho.MQTT.Client(brokerAddress, port, "Client-1");

    // Set callback functions
    client.onConnectionLost = onConnectionLost;
    client.onMessageArrived = onMessageArrived;

    // connect the client
    client.connect({ onSuccess: onConnect });

}

// Funciton to create animation usinig velocityJS
function createAnimation(size) {
    $("#animate").velocity({ width: 100, height: size });
}

// Function to add value to history table : Source: https://www.geeksforgeeks.org/how-to-add-table-row-in-a-table-using-jquery/
function addToTable(size) {
    let currentTime = new Date().toLocaleString()
    $(document).ready(function () {

        markup = "<tr><td>"
            + currentTime + "</td><td>" + size + "</td></tr>";
        tableBody = $("table tbody");
        tableBody.append(markup);


    });
}