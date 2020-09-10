const express = require('express'); //const is a read-only field
const {ROUTE_CONSTANTS} = require('./helpers/route_constants');
const bodyParser = require('body-parser');
const asyncRequest = require('async-request');
const countryListUrl = 'https://restcountries.eu/rest/v2/all';

const app = express(); //initialize an express app 
//route, callback function

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get(ROUTE_CONSTANTS.DEFAULT, function(req, res){
    res.send("<h1> Welcome to Pega </h1>");
});

app.get(ROUTE_CONSTANTS.GET_LOGIN, function(req, res){
    res.sendFile(__dirname + '/pages/login.html');
});

app.get(ROUTE_CONSTANTS.GET_REGISTER, function(req, res){
    res.sendFile(__dirname + '/pages/register.html');
});

app.post(ROUTE_CONSTANTS.POST_REGISTER, function(req, res){
    console.log(req.body);
    res.send("Registered Successfully!!!");
});

app.post(ROUTE_CONSTANTS.POST_LOGIN, function(req, res){
  console.log(req.body);
  res.send("Login Successful");
});

app.get(ROUTE_CONSTANTS.GET_COUNTRIES, async function(req, res){
    const response = await asyncRequest(countryListUrl);
    res.json(response);
});



app.get(ROUTE_CONSTANTS.GET_PRODUCTS, function(req, res){
    const productsData = [
        {
          "_id": "5f5860e1a9eff57811c558e2",
          "index": 0,
          "guid": "7f65778b-e2bb-46e5-899e-352c1469b39a",
          "isActive": true,
          "balance": "$2,604.52",
          "picture": "http://placehold.it/32x32",
          "age": 29,
          "eyeColor": "green",
          "name": "Richards Sanford",
          "gender": "male",
          "company": "VISUALIX",
          "email": "richardssanford@visualix.com",
          "phone": "+1 (825) 515-3614",
          "address": "274 Maujer Street, Temperanceville, Nebraska, 9355",
          "about": "Incididunt sit anim ex in sit nisi qui nostrud enim. Voluptate esse laborum duis ex pariatur velit Lorem sint amet incididunt eu excepteur. Lorem consequat voluptate reprehenderit amet consectetur. Cillum qui nisi ut non. Ex voluptate ullamco eiusmod officia id excepteur nostrud elit velit commodo. Qui ut deserunt mollit ex reprehenderit aliquip pariatur adipisicing.\r\n",
          "registered": "2015-05-16T10:24:16 -06:-30",
          "latitude": 34.240833,
          "longitude": -14.123743,
          "tags": [
            "reprehenderit",
            "in",
            "incididunt",
            "reprehenderit",
            "quis",
            "anim",
            "duis"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Latasha Alvarez"
            },
            {
              "id": 1,
              "name": "Lauri Reed"
            },
            {
              "id": 2,
              "name": "Dorsey Houston"
            }
          ],
          "greeting": "Hello, Richards Sanford! You have 6 unread messages.",
          "favoriteFruit": "banana"
        },
        {
          "_id": "5f5860e1ca632a65a3a199fa",
          "index": 1,
          "guid": "e2dd8779-1747-4ecb-9aef-0bf71ffe374b",
          "isActive": false,
          "balance": "$3,811.47",
          "picture": "http://placehold.it/32x32",
          "age": 26,
          "eyeColor": "brown",
          "name": "Gray Wilkerson",
          "gender": "male",
          "company": "COMTENT",
          "email": "graywilkerson@comtent.com",
          "phone": "+1 (834) 435-2486",
          "address": "184 Metrotech Courtr, Haring, Florida, 2266",
          "about": "Dolor ipsum eiusmod quis labore excepteur eu voluptate laboris voluptate. Anim consequat reprehenderit incididunt culpa quis sit enim ad sint sunt incididunt. Aliqua ipsum cupidatat sit excepteur exercitation dolor ipsum sint veniam sit cupidatat.\r\n",
          "registered": "2019-04-25T02:01:16 -06:-30",
          "latitude": 22.278157,
          "longitude": -119.526938,
          "tags": [
            "reprehenderit",
            "veniam",
            "aliqua",
            "ullamco",
            "dolor",
            "tempor",
            "proident"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Winnie Cooley"
            },
            {
              "id": 1,
              "name": "Oneal Reyes"
            },
            {
              "id": 2,
              "name": "Maxine Graham"
            }
          ],
          "greeting": "Hello, Gray Wilkerson! You have 5 unread messages.",
          "favoriteFruit": "apple"
        },
        {
          "_id": "5f5860e16e04718fc9dde939",
          "index": 2,
          "guid": "982bf5b3-35f4-4eb6-927c-5ab12a2618b3",
          "isActive": true,
          "balance": "$3,038.07",
          "picture": "http://placehold.it/32x32",
          "age": 22,
          "eyeColor": "brown",
          "name": "Hayes Sykes",
          "gender": "male",
          "company": "PAPRIKUT",
          "email": "hayessykes@paprikut.com",
          "phone": "+1 (896) 474-2403",
          "address": "115 Oak Street, Maury, New York, 7282",
          "about": "Incididunt tempor eiusmod cupidatat elit qui consequat laborum ullamco qui exercitation incididunt laborum exercitation. Reprehenderit eu deserunt irure do adipisicing aliqua. Est cillum incididunt et non adipisicing nulla Lorem aliquip deserunt id est pariatur et. Pariatur non eu nulla qui elit occaecat.\r\n",
          "registered": "2016-12-11T04:09:00 -06:-30",
          "latitude": 7.514202,
          "longitude": 81.555988,
          "tags": [
            "labore",
            "duis",
            "aliqua",
            "incididunt",
            "in",
            "est",
            "cupidatat"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Marianne Hopper"
            },
            {
              "id": 1,
              "name": "Rollins Carson"
            },
            {
              "id": 2,
              "name": "Hull Hayes"
            }
          ],
          "greeting": "Hello, Hayes Sykes! You have 2 unread messages.",
          "favoriteFruit": "banana"
        },
        {
          "_id": "5f5860e11ca495098d3de17a",
          "index": 3,
          "guid": "cc7eabb4-8ed8-45e9-b6d0-d1b29cbfd0f1",
          "isActive": false,
          "balance": "$3,064.11",
          "picture": "http://placehold.it/32x32",
          "age": 31,
          "eyeColor": "blue",
          "name": "Middleton Chambers",
          "gender": "male",
          "company": "GALLAXIA",
          "email": "middletonchambers@gallaxia.com",
          "phone": "+1 (857) 508-3942",
          "address": "373 Fillmore Place, Vicksburg, Connecticut, 3566",
          "about": "Eu sit laborum ullamco do esse commodo consectetur tempor velit sunt nulla. Consectetur do Lorem quis proident adipisicing aliquip. Veniam esse culpa eiusmod cillum id est occaecat cillum reprehenderit ut.\r\n",
          "registered": "2018-06-24T03:30:45 -06:-30",
          "latitude": -9.499115,
          "longitude": 103.221276,
          "tags": [
            "labore",
            "cillum",
            "mollit",
            "exercitation",
            "enim",
            "labore",
            "fugiat"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Josie Mcclure"
            },
            {
              "id": 1,
              "name": "Jillian Ward"
            },
            {
              "id": 2,
              "name": "Lynda Edwards"
            }
          ],
          "greeting": "Hello, Middleton Chambers! You have 3 unread messages.",
          "favoriteFruit": "apple"
        },
        {
          "_id": "5f5860e113bc098b0e0d7d74",
          "index": 4,
          "guid": "903c9ae1-035f-4d18-9ff2-004c3859864b",
          "isActive": false,
          "balance": "$2,642.10",
          "picture": "http://placehold.it/32x32",
          "age": 38,
          "eyeColor": "green",
          "name": "Schneider Garner",
          "gender": "male",
          "company": "ZEAM",
          "email": "schneidergarner@zeam.com",
          "phone": "+1 (856) 552-3695",
          "address": "340 Beacon Court, Morriston, Federated States Of Micronesia, 7070",
          "about": "Consectetur fugiat qui est veniam ut sint enim id amet tempor laboris ut Lorem pariatur. Esse veniam nisi exercitation nostrud mollit id cupidatat laboris ea deserunt quis ea. Sunt minim sit proident reprehenderit mollit. Adipisicing ea anim veniam nisi labore. Ut id elit consectetur in non reprehenderit sint reprehenderit. Duis sit consequat laboris aute exercitation dolore Lorem exercitation. Culpa ad commodo aliqua officia aliqua ex sit adipisicing enim adipisicing nisi qui.\r\n",
          "registered": "2019-12-17T08:00:51 -06:-30",
          "latitude": 32.997083,
          "longitude": -44.296783,
          "tags": [
            "non",
            "do",
            "labore",
            "commodo",
            "Lorem",
            "veniam",
            "id"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Mcintyre Ayers"
            },
            {
              "id": 1,
              "name": "Duran Stevens"
            },
            {
              "id": 2,
              "name": "Berger Pugh"
            }
          ],
          "greeting": "Hello, Schneider Garner! You have 1 unread messages.",
          "favoriteFruit": "banana"
        },
        {
          "_id": "5f5860e1cd3c2e15a35c36a6",
          "index": 5,
          "guid": "9b299138-43dc-4ac7-a71d-36024aaed021",
          "isActive": false,
          "balance": "$3,151.84",
          "picture": "http://placehold.it/32x32",
          "age": 31,
          "eyeColor": "brown",
          "name": "Justine Stein",
          "gender": "female",
          "company": "SPLINX",
          "email": "justinestein@splinx.com",
          "phone": "+1 (864) 551-3401",
          "address": "596 Bills Place, Frank, South Dakota, 2902",
          "about": "Amet aliqua amet reprehenderit excepteur dolore culpa in consectetur tempor laborum. Et ea qui nostrud irure dolore ipsum fugiat aliquip velit. Incididunt veniam qui labore labore quis enim irure laboris sit est aute. Culpa culpa velit officia enim exercitation laborum enim laboris sint. Cillum laboris est sunt sunt elit pariatur dolore sint irure.\r\n",
          "registered": "2015-03-01T07:06:57 -06:-30",
          "latitude": -33.310184,
          "longitude": 24.177343,
          "tags": [
            "do",
            "ipsum",
            "magna",
            "aliquip",
            "anim",
            "id",
            "deserunt"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Ella Barron"
            },
            {
              "id": 1,
              "name": "Stewart Bentley"
            },
            {
              "id": 2,
              "name": "Evangeline Vance"
            }
          ],
          "greeting": "Hello, Justine Stein! You have 10 unread messages.",
          "favoriteFruit": "banana"
        }
      ]
    res.json(productsData)
});
app.listen(3000);