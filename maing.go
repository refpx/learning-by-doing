package main

import (
	"net/http"

	"github.com/gorilla/mux"
	"github.com/refpx/go-gorm-rest-api/routes"
)

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/", routes.HomeHandler)

	http.ListenAndServe(":8080", r)
}
