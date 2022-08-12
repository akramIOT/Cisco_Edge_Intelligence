# Cisco_EI_Custom Data Logic

[![published](https://static.production.devnetcloud.com/codeexchange/assets/images/devnet-published.svg)](https://developer.cisco.com/codeexchange/github/repo/akramIOT/Cisco_Edge_Intelligence)

Custom  Data Logic  Scripts for Customer and Partners Reference 

For Cisco Edge Intelligence Master  Reference ,kindly use this link below 

https://developer.cisco.com/codeexchange/github/repo/nmanicka/edgeintelligence/

Cisco Edge Intelligence (EI) allows to extract, tranform, govern and deliver data from sensor devices to cloud/datacenter applications.

Cisco Edge Intelligence on DevNet - https://developer.cisco.com/edge-intelligence/

Architecture of the  various IOT gateways connecting  via "Edge Intelligence" Software to the Northbound Microsoft IOT Azure Cloud.

![New Note](https://user-images.githubusercontent.com/21118209/184432998-af862669-ed9c-4242-b320-605ee9edb4c3.jpeg)

Using standard MQTT destination configuration in Cisco (Edge Intelligence) EI application, data can be forwarded to many data destinations like Azure IOT Hub, IBMS Watson, 3rd Party MQTT brokers, et al  etc.

![EI_2](https://user-images.githubusercontent.com/21118209/182686442-c69e2ae5-fd9a-4e0a-be18-7b0088af116a.png)

![EI_6](https://user-images.githubusercontent.com/21118209/182686907-7db10b10-b7e9-4181-b96a-450c16109c0d.jpg)

For a detailed list of  Steps on how  to use  VS Code IDE or  other  tools to  develop your own  Custom  Data Logic  script, kindly refer the link below.
https://marketplace.visualstudio.com/items?itemName=Cisco.iot-edge-intelligence

For a detailed list of  steps on how to use  Cisco EI dashboard on IOTOD (IOT Operations dashboard) to un-map the  Data rule which was previously mapped to EI agent and then create  a Custom data logic script which can be then mapped to EI agent, kindly refer link below for the self paced walkthrough of all the steps.

https://developer.cisco.com/docs/iotod/#!deploy-data-logic-in-cisco-ei

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


OUTPUT:
=======

Sample  Output of  the  JSON  data received on the  Northbound  Azure IOT Hub side by using  this  Customized  Data Logic script (.js) on the  Edge side. 

{
  "body": {
    "LT301B": {
      "ts": 1658850577965,
      "v": 55.234161376953125
    },
    "LZT101": {
      "ts": 1658850577965,
      "v": 61.486026763916016
    },
    "PZT2401": {
      "ts": 1658850577965,
      "v": 6.029730796813965
    },
    "TT303B": {
      "ts": 1658850577975,
      "v": -65.90711975097656
    },
    "TT501C": {
      "ts": 1658850577974,
      "v": -50.60000610351563
    }
  },
  "enqueuedTime": "Tue Jul 26 2022 11:49:40 GMT-0400 (Eastern Daylight Time)",
  "properties": {
    "deviceInfo": "{\"Region\":\"Europe\",\"Country\":\"Germany\",\"CustomerId\":\"XXXXX-XXXXX-XXXXXX-XXXXXX-XXXXXXX\",\"StationId\":\"aaaaaaaa-6000-6000-6000-000000000003\",\"StationName\":\"Liquind 6\"}"
  }
}


