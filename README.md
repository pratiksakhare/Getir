# Getir
Test

Simple rest api for Getir Node.js Assignment - https://docs.google.com/document/d/15ye5-DhhWYye63XhS3EaaN_3PCviWf7OZy6uhZrhRww/

Run - `node app.js` to start node server

this will start server locally at 3000 port 

Curl for given rest api
`curl -d '{"startDate": "2016-01-26", "endDate": "2018-02-02", "minCount": 2700, "maxCount": 3000}' -H "Content-Type: application/json" -X POST http://localhost:3000/dbResults`
