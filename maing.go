package main

import (
	"net/http"

	"github.com/gorilla/mux"
	"github.com/refpx/go-gorm-rest-api/db"
	"github.com/refpx/go-gorm-rest-api/models"
	"github.com/refpx/go-gorm-rest-api/routes"
)

func main() {
	db.DBConnection()
	db.DB.AutoMigrate(models.User{}, models.Task{})
	r := mux.NewRouter()
	r.HandleFunc("/", routes.HomeHandler)

	http.ListenAndServe(":8080", r)
}
