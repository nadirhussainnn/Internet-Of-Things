const express = require("express");
const got=require('got')

const app = express();
var cors = require('cors')

app.use(cors());
app.use(express.json());

const PORT=5000;
const KEY=`UHXSCM81HU5K5WKK`;         //provide your ThingSpeak API Key here: 
                                      //This is mine and will not work for you


app.get("/api/sendToThingWorks",(req, resp)=>{

  // This is public API from my ThingSpeak Account
  //field1: temperature field
  //field2: Humidity field

  got.get(`https://api.thingspeak.com/update?api_key=${KEY}&field1=${78}`)
  .then(res => {

    console.log(res)

  })
  .catch(err => {
    console.log('Error: ', err.message);
  });

  resp.send(JSON.stringify("Posted temperature data to ThingWorks"));
  
})

app.listen(PORT, () => {
    console.log(`Server has started at port ${PORT}`);
});