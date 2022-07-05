# SwitchDin Skills Test | MQTT Publish - Subscribe Implementation using Python  and JavaScript Animations

Repository to hold SwitchDin Skills Test | Implementation of a MQTT Publish Subscribe system with one Client which connects to the broker using web sockets over java script and animates a SVG rectangle.   
  

### Python Modules Required to run the program:  

- paho  

  

### Overview of Source Code:  

  `client-publisher.py` : This MQTT Client connects to the broker and publishes a Random Number between 1 and 100 at random intervals between 1 and 30 seconds to the topic `switchDin/randomNumber`  

 `client-sub-1.py` : This MQTT Client connects to the broker and retrieves the message sent on topic `switchDin/randomNumber` and then prints it out with a microsecond accurate timestamp.
  
  `index.html` : The HTML file for the Client which displays a SVG rectangle whose height is animated based on the random number received from the broker. 

`script.js` : The JavaScript function which is used to connect to the MQTT broker and animates a SVG rectangle in the DOM using velocityJS. Also, keeps history of all incoming values using timestamp (Appended to DOM using jQuery)

`style.css` : Cascading Style Sheet for the Web page.

### How to Run?  

- Ensure correct address of MQTT Broker added to each source code. Default value: `broker.hivemq.com`
- Run   `client-publisher.py` in a terminal after installing the modules listed above. 
- Open `index.html` in a web browser.

***The following is how the web-page should look like :***  
![enter image description here](https://i.imgur.com/L6Z18Rm.png)
