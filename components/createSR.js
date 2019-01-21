'use strict';

var Request = require("request");
 
module.exports = {
  metadata: () => ({
    name: 'createSR',
    properties: {
      human: { required: true, type: 'string' },
    },
    supportedActions: []
  }),
  invoke: (conversation, done) => {
    // perform conversation tasks.
    Request.post({
    "headers": { "Content-Type": "application/json",
	             
                 "Authorization":"Basic a2VsbHkud2lsc29uOk1ydjg4ODQ4"	
				 },
    "url": "https://ucf1-zfgl-fa-ext.oracledemos.com/crmRestApi/resources/11.13.18.05/serviceRequests",
    "body": JSON.stringify({
   
    "Title": "Loan process is pending more than 3 months",
    "ProblemDescription": "Error in loan processing"
 })
}, (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    console.log(body);
});
 
    done();
  }
};