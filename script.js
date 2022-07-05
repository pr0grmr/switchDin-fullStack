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
    console.log("onMessageArrived:" + message.payloadString);
    randomNumber = parseInt(message.payloadString)
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

function createAnimation() {

}