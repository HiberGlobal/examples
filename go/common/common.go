package common

import (
	"../hiber"
	"flag"
	"golang.org/x/net/context"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"
	"google.golang.org/grpc/metadata"
	"log"
)

var address, token string
var insecure bool

func init() {
	flag.StringVar(&address, "address", "api.dev.hiber.global", "API url, default to api.dev.hiber.global")
	flag.StringVar(&token, "token", "", "your API token")
	flag.BoolVar(&insecure, "insecure", true, "whether to disable https (i.e. for the mock server)")
}

func GetCurrentUser(conn *grpc.ClientConn, ctx context.Context) *hiber.CurrentUser {
	currentUserClient := hiber.NewCurrentUserServiceClient(conn)
	currentUser, err := currentUserClient.CurrentUser(ctx, &hiber.CurrentUserRequest{})

	if err != nil {
		log.Fatalf("Could not get current user: %v", err)
	}

	log.Printf("Executing as user: %s", currentUser.Email)

	return currentUser
}

func Connect() (*grpc.ClientConn, context.Context) {
	var conn *grpc.ClientConn
	var err error
	if insecure {
		conn, err = grpc.Dial(address, grpc.WithInsecure())
	} else {
		conn, err = grpc.Dial(address+":443", grpc.WithTransportCredentials(credentials.NewClientTLSFromCert(nil, "")))
	}
	if err != nil {
		log.Fatalf("Connection to server failed: %v", err)
	}

	ctx := metadata.NewOutgoingContext(context.Background(), metadata.New(map[string]string{"authorization": "bearer " + token}))

	return conn, ctx
}
