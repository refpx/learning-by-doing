package main

import (
	"context"
	"fmt"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/refpx/go-react-mongodb/models"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "3000"
	}

	app := fiber.New()

	client, err := mongo.Connect(context.TODO(), options.Client().ApplyURI("mongodb://localhost:27017/gomongodb"))
	if err != nil {
		panic(err)
	}

	app.Use(cors.New())

	app.Static("/", "./client/dist")

	app.Get("/users", func(c *fiber.Ctx) error {
		var users []models.User
		coll := client.Database("gomongodb").Collection("users")
		results, err := coll.Find(context.TODO(), bson.M{})
		if err != nil {
			panic(err)
		}
		for results.Next(context.TODO()) {
			var user models.User
			err := results.Decode(&user)
			if err != nil {
				panic(err)
			}
			users = append(users, user)
		}
		return c.JSON(&fiber.Map{
			"users": users,
		})
	})

	app.Post("/users", func(c *fiber.Ctx) error {
		var user models.User
		c.BodyParser(&user)

		coll := client.Database("gomongodb").Collection("users")
		result, err := coll.InsertOne(context.TODO(), bson.D{
			{Key: "name", Value: user.Name},
		})

		if err != nil {
			panic(err)
		}

		return c.JSON(&fiber.Map{
			"data": result,
		})
	})

	app.Listen(":" + port)
	fmt.Println("Server running on port 3000")
}
