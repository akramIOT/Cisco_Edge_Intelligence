# Cisco_EI_Custom Data Logic

[![published](https://static.production.devnetcloud.com/codeexchange/assets/images/devnet-published.svg)](https://developer.cisco.com/codeexchange/github/repo/akramIOT/Cisco_Edge_Intelligence)

Custom  Data Logic  Scripts for Customer and Partners Reference 

For Cisco Edge Intelligence Master  Reference ,kindly use this  template - https://developer.cisco.com/codeexchange/github/repo/nmanicka/edgeintelligence/

Cisco Edge Intelligence (EI) allows to extract, tranform, govern and deliver data from sensor devices to cloud/datacenter applications.

Cisco Edge Intelligence on DevNet - https://developer.cisco.com/edge-intelligence/

Using standard MQTT destination configuration in Cisco (Edge Intelligence) EI application, data can be forwarded to many data destinations like Azure IOT Hub, IBMS Watson, 3rd Party MQTT brokers, et al  etc.

![EI_2](https://user-images.githubusercontent.com/21118209/182686442-c69e2ae5-fd9a-4e0a-be18-7b0088af116a.png)

![EI_6](https://user-images.githubusercontent.com/21118209/182686907-7db10b10-b7e9-4181-b96a-450c16109c0d.jpg)

To Kickstart this project  you need access to the  following resources below. 

  1. Sensors/PLCs/Simulators - of type: MQTT, OPCUA, Modbus TCP/Serial, EIP/CIP, Serial etc  	
  2. Cisco Edge Intelligence (EI)
	- latest Cisco  EI/ Edge Software - SW packages can be downloaded from Cisco.com
	- Cloud Portal account - A valid account in Cisco EI cloud portal access in Cisco  IOTOD  (Operations Dashboard) 
  3. Knowledge of Cisco EI - docs @ https://developer.cisco.com/edge-intelligence/
  4. Data Destination  access /support for accounts in  Azure IOT Hub, 3rd Party MQTT Broker, IBM  Watson, Software  AG  Cumulocity.  
  5. Java script  and  Python modules: ssl, Mosquitto MQTT SDK, HivemQ SDK, paho-mqtt, json  etc
	
The following is a list of Data rules and  Config parameters available in the  Data rules which are supported in Cisco EI agent software
![IOT - AIML](https://user-images.githubusercontent.com/21118209/182680179-83895811-f09e-4c46-bfdc-05d2a751d398.jpeg)
![Connection Type](https://user-images.githubusercontent.com/21118209/182678873-23201e6f-9cb9-418b-b8bd-64be04ae10c6.jpeg)

Here is some sample illustration for receiving data (polling from source) from the different southbound connectors like OPCUA, Modbus, EI/CIP, Serial etc into the EMLcomponent (edge management link) of Edge Intelligence and then triggring the publish of  data  via MQTT PubSub mechanism to Azure IOT hub  (MQTT  Broker)on the  northbound side.  
![Arch](https://user-images.githubusercontent.com/21118209/182687128-6dd3dea6-dc60-4ade-aa8d-78535e541656.jpg)
