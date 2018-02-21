/* 
    Letiables (Variable) list to use for tests.
    These are global variables used for testin. 
*/

let dtpHostname ="";                   //Name or IP of the DTP server 
let dtpPort ="8080";                                 //The Port DTP server is hosted on
let dtpMQTTPort ="1883";                             //The MQTT Port 
let dtpEnterprisePackPort ="8314";                   //The port for DTP Extension Designer
let dtpSettings ="/api/v1/settings";                 //The API path needed to acquire the settings
let updateDTP = dtpSettings + "/dtp ";               //The API path needed to update the settings
let updateNetwork = dtpSettings + "/network";
let requestPath = "http://" + dtpHostname + ":" + dtpEnterprisePackPort + dtpSettings

module.exports = {
    dtpHostname,
    dtpPort,
    dtpMQTTPort,
    dtpEnterprisePackPort,
    dtpSettings,
    updateDTP,
    updateNetwork,
    requestPath
}