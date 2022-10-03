const sortGroupBy = require('./helper_function/groupbysort')
const inputArray = [
    {
        "id": 3,
        "sourceAccount": "A",
        "targetAccount": "B",
        "amount": 100,
        "category": "eating_out",
        "time": "2018-03-02T10:45:30.000Z"
    },
    {
        "id": 1,
        "sourceAccount": "A",
        "targetAccount": "B",
        "amount": 100,
        "category": "eating_out",
        "time": "2018-03-02T10:33:00.000Z"
    },
    {
        "id": 6,
        "sourceAccount": "A",
        "targetAccount": "C",
        "amount": 250,
        "category": "other",
        "time": "2018-03-02T10:33:05.000Z"
    },
    {
        "id": 4,
        "sourceAccount": "A",
        "targetAccount": "B",
        "amount": 100,
        "category": "eating_out",
        "time": "2018-03-02T10:36:00.000Z"
    },
    {
        "id": 2,
        "sourceAccount": "A",
        "targetAccount": "B",
        "amount": 100,
        "category": "eating_out",
        "time": "2018-03-02T10:33:50.000Z"
    },
    {
        "id": 5,
        "sourceAccount": "A",
        "targetAccount": "C",
        "amount": 250,
        "category": "other",
        "time": "2018-03-02T10:33:00.000Z"
    },
    {
        "id": 10,
        "sourceAccount": "A",
        "targetAccount": "B",
        "amount": 100,
        "category": "other_eat",
        "time": "2018-03-02T10:36:00.000Z"
    },
    {
        "id": 22,
        "sourceAccount": "A",
        "targetAccount": "B",
        "amount": 100,
        "category": "0ther_eat",
        "time": "2018-03-02T10:33:50.000Z"
    },
]
sortGroupBy(inputArray);