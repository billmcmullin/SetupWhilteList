/*
    This Javascript will automatically configure the DTP Enterprise Pack
    settings to be updated with the new Network configuration. 
*/
let request = require('request');
let Promise = require("bluebird");


module.exports = function(){
/*     request.put('http://' + dtpHostname + ':' + 
                        dtpEnterprisePackPort + 
                        updateNetwork, 
                        putNetworkOptions).then(); */
                        console.log("This came from the updateNetworkSettings.js");
                        return Promise.resolve();
}