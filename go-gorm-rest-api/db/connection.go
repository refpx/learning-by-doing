package db

import (
	"log"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var (
	DSN = "host=localhost user=refpxuser password=refpxpassword dbname=gorm port=5432"
	DB  *gorm.DB
)

func DBConnection() {
	var error error
	DB, error = gorm.Open(postgres.Open(DSN), &gorm.Config{})
	if error != nil {
		log.Fatal(error)
	} else {
		log.Println("Database connection established")
	}
}
