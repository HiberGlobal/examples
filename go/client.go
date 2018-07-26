package main

import (
	"./hiber"
	"golang.org/x/net/context"
	"google.golang.org/grpc"
	metadata "google.golang.org/grpc/metadata"
	"log"
)

const (
	address = "localhost:9090"
	// address = "api.dev.hiber.global:443" // use a real token when calling the dev api
	token   = "my-super-secret-token"
)

func main() {
	conn, err := grpc.Dial(address, grpc.WithInsecure())
  // conn, err := grpc.Dial(address, grpc.WithTransportCredentials(credentials.NewClientTLSFromCert(nil, ""))) // use with api.dev.hiber.global
	if err != nil {
		log.Fatalf("Connection to server failed: %v", err)
	}
	defer conn.Close()

	ctx := metadata.NewOutgoingContext(context.Background(), metadata.New(map[string]string{"authorization": "bearer " + token}))

	currentUserClient := hiber.NewCurrentUserServiceClient(conn)
	currentUser, err := currentUserClient.CurrentUser(ctx, &hiber.CurrentUserRequest{})
	if err != nil {
		log.Fatalf("Could not get current user: %v", err)
	}

	log.Printf("Current user is: %s", currentUser.Email)

	modemClient := hiber.NewModemServiceClient(conn)
	modems, err := modemClient.List(ctx, &hiber.ListModemsRequest{})
	if err != nil {
		log.Fatalf("Could not get modems: %v", err)
	}

	log.Printf("Modems: %s", modems.Modems)
}
