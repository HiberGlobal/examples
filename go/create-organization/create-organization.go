package main

import (
	"../common"
	"../hiber"
	"flag"
	"log"
)

func main() {
	var name, displayName, contactName, contactEmail string
	flag.StringVar(&name, "name", "", "name for the new organization, matching [a-z-_]+")
	flag.StringVar(&displayName, "display-name", "", "display name for the organization")
	isBusiness := flag.Bool("is-business", false, "whether the organization is a business")
	flag.StringVar(&contactName, "contact-name", "", "the name for the contact for the organization")
	flag.StringVar(&contactEmail, "contact-email", "", "the email for the contact for the organization")
	flag.Parse()

	conn, ctx := common.Connect()
	defer conn.Close()
	common.GetCurrentUser(conn, ctx)

	organizationClient := hiber.NewOrganizationServiceClient(conn)
	organization, err := organizationClient.Create(ctx, &hiber.CreateOrganizationRequest{
		NewOrganization: name,
		DisplayName:     displayName,
		IsBusiness:      *isBusiness,
		Contact: &hiber.Organization_Contact{
			Name:  contactName,
			Email: contactEmail,
		},
	})

	if err != nil {
		log.Fatalf("Could not create organization: %v", err)
	}

	log.Printf("Created organization: %s", organization.Organization)
}
