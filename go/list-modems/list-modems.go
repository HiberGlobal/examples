package main

import (
	"../common"
	"../hiber"
	"flag"
	"log"
)

func main() {
	flag.Parse()

	conn, ctx := common.Connect()
	defer conn.Close()
	common.GetCurrentUser(conn, ctx)

	modemClient := hiber.NewModemServiceClient(conn)
	modems, err := modemClient.List(ctx, &hiber.ListModemsRequest{})
	if err != nil {
		log.Fatalf("Could not get modems: %v", err)
	}

	log.Printf("Modems: %s", modems.Modems)
}
