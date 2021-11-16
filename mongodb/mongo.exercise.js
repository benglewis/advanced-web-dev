// התחלה

const rocketsSchema = {
    $jsonSchema: {
        required: [ "control surfaces", "propulsion types", "weight" ],
        properties: {
            "control surfaces": {
                type: "array",
                description: "must be less than 6 control surfaces",
                maxItems: 6
            },
            "propulsion types": {
                type: "array",
                description: "must be no more than 2 propulsion types",
                maxItems: 2
            },
            "weight": {
                bsonType: "double",
                maximum: 200000
            }
        }
    }
}

db.createCollection("ben", { validator: { ...rocketsSchema } } )

// יצירת נתונים

db.ben.insert({
    "control surfaces": [
        "A", "B", "C", "D"
    ],
    "propulsion types": [
        "liquid",
        "electromagnetic"
    ],
    "weight": 100000
})
db.ben.insert({
    "control surfaces": [
        "A", "B", "C", "D", "E", "F"
    ],
    "propulsion types": [
        "liquid",
        "solid"
    ],
    "weight": 200000
})
db.ben.insert({
    "control surfaces": [
        "A", "B", "C", "D", "E"
    ],
    "propulsion types": [
        "electromagnetic",
        "solid"
    ],
    "weight": 150000
})
db.ben.insert({
    "control surfaces": [
        "A", "B", "C", "D", "E", "F", "G"
    ],
    "propulsion types": [
        "liquid",
        "solid"
    ],
    "weight": 250000
})

// הארכת נתונים
db.ben.updateOne(
    {
        weight: 150000
    },
    {
        $set: {
            "propulsion types": ["antimatter"],
            weight: 20000
        }
    }
)
db.ben.deleteOne({
    "control surfaces": {
        $size: 5
    }
})

// אגרגציה
db.ben.aggregate({
    $group: {
        _id: "",
        totalWeight: {
            $sum: "$weight"
        }
    }
})

// Transactions
const session = db.getMongo().startSession()
session.startTransaction()
const ben = session.getDatabase("myFirstDatabase").ben
try {
    ben.updateMany(
        {
            weight: 100000
        },
        {
            $mul: {
                weight: 0.9
            }
        }
    )
    ben.updateMany(
        {
            weight: 200000
        },
        {
            $mul: {
                weight: 0.9
            }
        }
    )
} catch (error) {
    // Abort transaction on error
   session.abortTransaction();
   throw error;
}
session.commitTransaction();
session.endSession();