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
	token   = "my-super-secret-token"
)

func main() {
  // the mock server is http only, use https when connecting to https://dev.hiber.global
	conn, err := grpc.Dial(address, grpc.WithInsecure())
	if err != nil {
		log.Fatalf("Connection to server failed: %v", err)
	}
	defer conn.Close()

	ctx := metadata.NewOutgoingContext(context.Background(), metadata.New(map[string]string{"authorization": "bearer my-super-secret-token"}))

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
