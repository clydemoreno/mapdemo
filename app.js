const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');


const dict = {};


const filter = 60;


app.get('/', (req, res) => {
    fs.readFile(__dirname + "/public/index.html", "utf8", function(err, data){
        if(err) throw err;
    
        // var resultArray = //do operation on data that generates say resultArray;
        // console.log(data);
        // let lat = 24.344;
        // let long = 131.036;
        // console.log(req.query);
        const lat = req.query.lat ? req.query.lat : 24.344;
        const long = req.query.long ? req.query.long : 131.036;
        const filter = req.query.secs;
        const coord = {
            lat: lat,
            long:long,
            time: new Date().getTime(),
            // filter: req.query.hours,
            valid: true,
            
        }

        if(!dict[JSON.stringify(req.query)])
            dict[JSON.stringify(req.query)] = coord;


        console.log("start");    

        for(var key in dict) {
            const value = dict[key];
            const currentTime = new Date().getTime();
            const diff = parseInt((currentTime - value.time) / 1000);
            const d = 
            dict[key].valid = diff < filter;
            console.log(`currentTime: ${currentTime} diff: ${diff} valid:${value.valid}`);

           
        }        



        console.log("end");    
        // for(let i = 0;i< dict.length;i++){
        //     console.log(dict[i]);
        // }

        const url = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCaNmA_zTtXnxzf1x9q1zJReIQTl6CasBs&callback=initMap";
        data = data.replace('#url#',url);
        data = data.replace('#lat#',lat);
        data = data.replace('#long#',long);
        data = data.replace('#coord#',JSON.stringify(dict));        



        
        res.send(data);
    });
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))