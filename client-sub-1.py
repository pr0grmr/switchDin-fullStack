"""
Author : Harkaran Singh
Year : 2022
"""

# Importing Modules
import paho.mqtt.client as mqtt
from datetime import datetime


# MQTT Broker's Address (Local Host - Mosquitto Installed on Local Machine)
brokerAddress = "broker.hivemq.com"


def on_connect(client, userdata, flags, rc):
    """
    Call Back function when the client recieves a response from the broker.
    :param userdata: User Private Data
    :param client: The client which is connected to the Broker
    :param rc: Connection Result. {0: Successful, 1-5 Refused due to various reasons}
    """
    # If connected
    if rc == 0:
        print("Connected to Broker at " + brokerAddress)

    # If not connected
    else:
        print("Not connected | Received : " + rc)


def on_disconnect(client, userdata, flags, rc=0):
    """
    The Callback Function when the client disconnects from the Broker
    :param client: The client to be disconnected
    :param userdata: User Private Data
    :param rc: Disconnection Result.
    """
    print("Disconnected to Broker at " + brokerAddress)


def on_message(client, userdata, message):
    """
    The Callback Function when the client receives a message from a Broker
    :param client: The client which is receiving the data
    :param userdata: Private User Data
    :param message: An instance of MQTT Message (Class)
    """

    # Retrieving the message topic
    topic = message.topic

    # Retrieving and Decoding the Message Payload
    message = str(message.payload.decode("utf-8"))

    # Printing payload to console
    print(
        "Message Received on Topic : "
        + topic
        + " - "
        + message
        + " at "
        + str(datetime.now())
    )


# Creating a Client instance
subscriber_one = mqtt.Client("subscriber_one")

# Binding Call Back Function
subscriber_one.on_connect = on_connect
subscriber_one.on_disconnect = on_disconnect
subscriber_one.on_message = on_message

# Connecting client to broker
subscriber_one.connect(brokerAddress)

# Subscribing to Topic
subscriber_one.subscribe("switchDin/randomNumber")

# Run Client Loop
while True:
    subscriber_one.loop()
