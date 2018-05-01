var currentUserMessages = require('./generated/currentuser_pb');
var currentUserService = require('./generated/currentuser_grpc_pb');
var modemMessages = require('./generated/modem_pb');
var modemService = require('./generated/modem_grpc_pb');

var grpc = require('grpc');

function main() {
  var meta = new grpc.Metadata();
  meta.add('authorization', 'bearer my-super-secret-token'); // use you real token when connecting to api.dev.hiber.global

//  var currentUserClient = new currentUserService.CurrentUserServiceClient('api.dev.hiber.global:443', grpc.credentials.createSsl());
  var currentUserClient = new currentUserService.CurrentUserServiceClient('localhost:9090', grpc.credentials.createInsecure());

  currentUserClient.currentUser(new currentUserMessages.CurrentUserRequest(), meta, function(err, response) {
    if (Boolean(err)) console.log(err);
    if (Boolean(response)) console.log('Current user:', response.getEmail());
  });

//  var modemClient = new modemService.ModemServiceClient('api.dev.hiber.global:443', grpc.credentials.createSsl());
  var modemClient = new modemService.ModemServiceClient('localhost:9090', grpc.credentials.createInsecure());

  modemClient.list(new modemMessages.ListModemsRequest(), meta, function(err, response) {
    if (Boolean(err)) console.log(err);
    if (Boolean(response)) console.log('Modems:', response.getModemsList());
  });
}

main();
