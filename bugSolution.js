```javascript
//Correct aggregation pipeline returning accurate results
db.collection.aggregate([
  {$match: { /* filter */ }},
  {$group: {_id: '$field', count: {$sum: 1}}},
  {$sort: {count: -1}},
  {$limit: 10}
])
```