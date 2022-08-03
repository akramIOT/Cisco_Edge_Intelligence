/**
* Custom Data Logic script to publish data periodically (every 1s) to cloud northbound  side
* Attribute values are updated in "output_data" object and on_time_trigger() will publish all received attribute changes in the last 1s
* Note: Update TOTAL_ATTRIBUTES and timer_count   could  be  updated  accordingly  as per  customer  requirements.
*/

var field_count = 0;
var timer_count = 0;
var TOTAL_ATTRIBUTES = 133;
var output_data = {};

function on_update() {
if (trigger.field_name) {//c1,c2,c3 ...c100
var attribute = new Object();
ts_epoch = Math.floor(new Date(trigger.timestamp).getTime());
attribute.ts = ts_epoch;
attribute.v = input[trigger.field_name];
 
// stores data is this format "{c1":{"ts":1658397469624,"v":1}
output_data[trigger.field_name] = attribute;
++field_count;
}
}

function on_time_trigger() {// 500ms .... 1sec
if (!field_count) { // no updates
return;
}

++timer_count;

if ((field_count >= TOTAL_ATTRIBUTES) || timer_count == 2) { // timer interval = 500ms, publish data every 1s
logger.info("Publishing data - field_count: ", field_count, ", timer_count: ", timer_count);
publish("output", output_data); // publish data
output_data = {};
field_count = 0;
timer_count = 0;
}
}
