package main

import (
	"../common"
	"../hiber"
	"flag"
	"log"
)

func main() {
	organization := flag.String("organization", "", "please provide the organization for the user")
	name := flag.String("name", "", "please provide the name for the user")
	email := flag.String("email", "", "please provide the email for the user")
	password := flag.String("password", "", "please provide the password for the user")
	flag.Parse()

	conn, ctx := common.Connect()
	defer conn.Close()
	common.GetCurrentUser(conn, ctx)

	userClient := hiber.NewUserServiceClient(conn)
	user, err := userClient.CreateUser(ctx, &hiber.CreateUserRequest{
		Organization: *organization,
		Email:        *email,
		Name:         *name,
		Password:     *password,
	})

	if err != nil {
		log.Fatalf("Could not create user: %v", err)
	}

	log.Printf("Created user: %s", user.Email)
}
