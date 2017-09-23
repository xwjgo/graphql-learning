const express = require('express');
const graphql = require('graphql').graphql;
const bodyParser = require('body-parser');
const testSchema = require('./schema/test');

const app = express();
const port = 4000;

app.use(bodyParser.text({type: 'application/graphql'}));

app.post('/test', (req, res) => {
    graphql(testSchema, req.body)
        .then((result) => {
            res.json(result);
        });
});

app.listen(port, () => {
    console.log(`GraphQL listening at http://localhost:${port}`);
});