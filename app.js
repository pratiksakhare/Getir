let express = require('express');
let MongoClient = require('mongodb').MongoClient;
let mongoUrl = "mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getir-case-study?retryWrites=true";


let app = express();
app.listen(3000, () => console.log(`Server running on port 3000!`))

app.use(express.json());

app.post('/dbResults', (req, res) => {

    MongoClient.connect(mongoUrl, async function(err, db) {
        if (err) throw err;
        var dbo = db.db("getir-case-study");
        let dt1 = new Date(req.body.startDate + "T00:00:00.000Z");
        let dt2 = new Date(req.body.endDate + "T00:00:00.000Z");
        let minCount = req.body.minCount;
        let maxCount = req.body.maxCount;

        dbo.collection("records")
        .find({"createdAt":{$gte:dt1, $lt: dt2}})
        .toArray().then((results)=>{

            let filteredResults = []
            results.forEach(rec => {
                let sum = rec.counts.reduce((acc, x) => acc + x, 0);
                if (sum >= minCount && sum <= maxCount) {
                    filteredResults.push({
                        key : rec.key,
                        createdAt : rec.createdAt,
                        totalCount : sum
                    });
                }
            });

            res.json(filteredResults);

        });
    });
});