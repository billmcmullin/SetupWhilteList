/*
    This Javascript will automatically configure the DTP Enterprise Pack
    settings to be updated with the new DTP configuration. 
*/
let request = require('request');
let Promise = require("bluebird");


module.exports = function(){
    /*request.put('http://' + dtpHostname + ':' + 
                        dtpEnterprisePackPort + 
                        updateNetwork, 
                        putNetworkOptions).then(); */
                        console.log("This was from the updateDTPSettings.js");
                       return Promise.resolve();
                       
                        
}