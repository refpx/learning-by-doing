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

	r.HandleFunc("/users", routes.GetUsersHandler).Methods("GET")
	r.HandleFunc("/users", routes.PostUserHandler).Methods("POST")
	r.HandleFunc("/users/{id}", routes.GetUserHandler).Methods("GET")
	r.HandleFunc("/users/{id}", routes.DeleteUserHandler).Methods("DELETE")

	r.HandleFunc("/tasks", routes.GetTasksHandler).Methods("GET")
	r.HandleFunc("/tasks", routes.CreateTaskHandler).Methods("POST")
	r.HandleFunc("/tasks/{id}", routes.GetTaskHandler).Methods("GET")
	r.HandleFunc("/tasks/{id}", routes.DeleteTaskHandler).Methods("DELETE")

	http.ListenAndServe(":8080", r)
}
