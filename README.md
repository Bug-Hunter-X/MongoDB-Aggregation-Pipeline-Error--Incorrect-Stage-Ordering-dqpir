# MongoDB Aggregation Pipeline Error: Incorrect Stage Ordering
This repository demonstrates a common error in MongoDB aggregation pipelines: incorrect ordering of stages. The original code attempts to find the top 10 most frequent values of a field. Due to improper stage ordering, it produces inaccurate results. The corrected version showcases the correct order to obtain accurate results.

## Bug
The `bug.js` file shows the erroneous aggregation pipeline, resulting in a misordered top 10 list.  The issue is that the `$limit` operation is performed *before* the `$sort` operation, leading to incorrect results.

## Solution
The `bugSolution.js` file contains the corrected aggregation pipeline.  By placing `$sort` *before* `$limit`, the pipeline now accurately returns the top 10 most frequent values.