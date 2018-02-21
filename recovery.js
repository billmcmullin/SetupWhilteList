/*
    This Javascript will automatically configure the DTP Enterprise Pack
    to be on the whitelist for User's to acces.
*/
let Promise = require("bluebird");
let letiables = require('./letiables');
let request = Promise.promisify(require("request"));
let dtpSettings = require('./functions/updateDTPSettings');
let networkSettings = require("./functions/updateNetworkSettings");

request(letiables.requestPath)
        .then(function(results){
            //console.log(JSON.parse(results.body).dtp);
           dtpSettings().then(function(){   
            networkSettings();
           });
});