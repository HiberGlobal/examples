import grpc

import generated.currentuser_pb2
import generated.currentuser_pb2_grpc
import generated.modem_pb2
import generated.modem_pb2_grpc


def run():
    channel = grpc.insecure_channel('localhost:9090')
    # channel = grpc.secure_channel('api.dev.hiber.global:443', grpc.ssl_channel_credentials()) // use you real token when enabling this
    metadata = [('authorization', 'bearer my-super-secret-token')]
    currentUserStub = generated.currentuser_pb2_grpc.CurrentUserServiceStub(channel)
    print("Logged in as: " + currentUserStub.CurrentUser(request=generated.currentuser_pb2.CurrentUserRequest(),
                                                         metadata=metadata).email)

    modemStub = generated.modem_pb2_grpc.ModemServiceStub(channel)
    response = modemStub.List(request=generated.modem_pb2.ListModemsRequest(), metadata=metadata)
    print("First modem: " + next(iter(response.modems or []), None).number)


if __name__ == '__main__':
    run()
