const express = require('express');
const app = express();
const port = 3000;

app.use('/', function(req, res, next) {
    let weight = req.query.weight;
    let height = req.query.height;
    let heightMeters = height/100;
    let totalMeters = heightMeters * heightMeters;
    
    let bmi = weight/totalMeters;
    let label;
    
    if(bmi >= 18.5 && bmi <= 24.9) {
        label = 'normal';
    }
    
    if(bmi > 24.9) {
        label = 'overweight';
    }
    
    if(bmi < 18.5) {
        label = 'overweight';
    }
    
    const response = {
        bmi : bmi,
        label : label
    };
    
    return res.json(response);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})