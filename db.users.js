db.users.insertMany([
  {
  name:"John",
  lastname:"Doe",
  email:"john.doe@example.com",
  city:"Londres",
  contry:"inglaterra",
  salary: 3000,
  age: 35,
  height:190,
  weight: 190
},
{
  name:"Michael",
  lastname:"Johnson",
  email:"michael.johnson@example.com",
  city:"Paris",
  contry:"Francia",
  salary:4900,
  age:32,
  height:165,
  weight: 128
},
{
  name:"Manolo",
  lastname:"Franco",
  email:"",
  city:"Madrid",
  contry:"España",
  salary: 1800,
  age: 25,
  height: 153,
  weight: 120
},
{
  name:"Mike",
  lastname:"Smith",
  email:"mike.smith@example.com",
  city:"New York",
  contry:"EEUU",
  salary:5000,
  age:45,
  height:200,
  weight:220
},
{
  name:"Pedro",
  lastname:"Sanchez",
  email:"pedro.sanchez@example.com",
  city:"Ciudad de Mexico",
  contry:"Mexico",
  salary:1500,
  age:22,
  height:170,
  weight:130
},
{
  name:"Juan",
  lastname:"Gutierrez",
  email:"",
  city:"Barranquilla",
  contry:"Colombia",
  salary:6000,
  age:28,
  height:169,
  weight: 157
},
{
  name:"Mary",
  lastname:"Johnson",
  email:"mary.johnson@example.com",
  city:"Sidney",
  contry:"Australia",
  salary:8345,
  age:30,
  height:190,
  weight:180
},
{
  name:"Dina",
  lastname: "Molina",
  email:"dina.molina@example.com",
  city:"Toronto",
  contry:"Canada",
  salary:"6789",
  age:22,
  height:155,
  weight: 150
}
,    {
  name:"Francis",
  lastname:"Ford",
  email:"francis.ford@example.com",
  city:"Monaco",
  contry:"Italia",
  salary:7654,
  age:26,
  height:210,
  weight: 220
}
,    {
  name:"Ronald",
  lastname:"Garcia",
  email:"ronald.garcia@example.com",
  city:"Brasilia",
  contry:"Brasil",
  salary:700,
  age:18,
  height:160,
  weight:105
}
,    {
  name:"William",
  lastname:"Smith",
  email:"william.smith@example.com",
  city:"Buenos Aires",
  contry:"Argentino",
  salary:1500,
  age:20,
  height:200,
  weight: 300
}
,    {
  name:"Laura",
  lastname:"Fome",
  email:"laura.fome@example.com",
  city:"Santiago",
  contry:"Chile",
  salary:600,
  age:52,
  height:160,
  weight:230
}
,    {
  name:"Miranda",
  lastname:"Schmidt",
  email:"",
  city:"Berlin",
  contry:"Alemania",
  salary:6000,
  age:50,
  height:200,
  weight:150
},
{
  name:"Ahmad",
  lastname:"Daychoumm",
  email:"ahmad.daychoumm@example.com",
  city:"Deli",
  contry:"India",
  age:49,
  height:150,
  weight: 180
},
{
  name:"Catalina",
  lastname:"Plant",
  email:"catalina.plant@example.com",
  city:"moscu",
  contry:"Rusia",
  salary:1230,
  age:50,
  height: 234,
  weight:345
},
{
  name: "Catalina",
  lastname: "Plant",
  email: "catalina.plant@example.com",
  city: "New York",
  country: "USA",
  salary: 550,
  age: 30,
  height: 165,
  weight: 135
},
{
  name: "Juan",
  lastname: "González",
  email: "juan.gonzalez@example.com",
  city: "Madrid",
  country: "Spain",
  salary: 5000,
  age: 35,
  height: 175,
  weight: 160
},
{
  name: "Emily",
  lastname: "Smith",
  email: "emily.smith@example.com",
  city: "London",
  country: "Inglaterra",
  salary: 600,
  age: 28,
  height: 170,
  weight: 145
},
{
  name: "Carlos",
  lastname: "Rodríguez",
  email: "carlos.rodriguez@example.com",
  city: "Barcelona",
  country: "España",
  salary: 4800,
  age: 32,
  height: 180,
  weight: 170
},
{
  name: "Sophia",
  lastname: "Brown",
  email: "sophia.brown@example.com",
  city: "Toronto",
  country: "Canada",
  salary: 5500,
  age: 29,
  height: 168,
  weight: 140
},
{
  name: "Liam",
  lastname: "Wilson",
  email: "liam.wilson@example.com",
  city: "Sydney",
  country: "Australia",
  salary: 6200,
  age: 38,
  height: 183,
  weight: 180
},
{
  name: "Isabella",
  lastname: "Martinez",
  email: "isabella.martinez@example.com",
  city: "Ciudad de Mexico",
  country: "Mexico",
  salary: 5100,
  age: 31,
  height: 165,
  weight: 130
},
{
  name: "Oliver",
  lastname: "Anderson",
  email: "oliver.anderson@example.com",
  city: "Melbourne",
  country: "Australia",
  salary: 5900,
  age: 36,
  height: 175,
  weight: 160
},
{
  name: "Mia",
  lastname: "Lopez",
  email: "mia.lopez@example.com",
  city: "Los Angeles",
  country: "USA",
  salary: 5300,
  age: 33,
  height: 162,
  weight: 125
},
{
  name: "Jack",
  lastname: "White",
  email: "jack.white@example.com",
  city: "Vancouver",
  country: "Canada",
  salary: 570,
  age: 33,
  height: 162,
  weight: 125
}
])
//Ejercicio1 Traer todos los mayores de 18
db.users.find({ age : {$gt: 18}});

//Ejercicio2 Obtener todos los usuarios de londres o Paris
db.users.find({
  $or:[
    {city:{$eq:"Paris"}},
    {city:{$eq:"Londres"}}
  ]
})


//Ejercicio3 Traer los que ganen + 2000 y - 30 años
db.users.find({
  $and: [
      {salary:{$gt: 2000}},
      {age: {$lt: 30}}
  ]
})

//Ejercicio4 Obtener a todos los usuarios que sean de España y ganen más de $3000 al mes
db.users.find({
  $and: [
      {country:{$eq: "España"}},
      {salary:{$gt: 3000}}
  ]
})

//Ejercicio5 Obtener todos los usuarios que tengan entre 25 y 35 años.
db.users.find({
  $and: [
      {age:{$gte: 25}},
      {age:{$lte: 35}}
  ]
})

//Ejercicio6 Obtener a todos los usuarios que no sean de Estados Unidos.
db.users.find({country:{$ne: "USA"}})

//Ejercicio7 Obtener a todos los usuarios que sean de Londres y que ganen más de $2500 o que tengan más de 30 años. 
db.users.find({
  $and:[
      {city:{$eq: "Londres"}},
      
  ],
  $or:[
      {salary:{$gt:2500}},
      {age: {$gt: 30}}
  ]
})

//Ejercicio8 Obtener a todos los usuarios que sean de Australia y tengan un peso mayor a 140 libras.
db.users.find({
  $and:[
      {country:{$eq:"Australia"}},
      {weight:{$gt:140}}
  ]
})

//Ejercicio9 Obtener a todos los usuarios que no sean de Londres ni de París.
db.users.find({
  $and:[
      {city:{$ne:"Londres"}},
      {city:{$ne:"Paris"}}
  ]
})

//Ejercicio10 Obtener a todos los usuarios que ganen menos de $2000 al mes o que tengan más de 40 años.
db.users.find({
  $or:[
      {salary:{$lt:2000}},
      {age:{$gt:40}}
  ]
})

//Ejercicio11 Obtener a todos los usuarios que sean de Canadá y ganen más de $4000 al mes o que tengan una altura mayor a 180 cm.
db.users.find({
  $and: [
      {country: {$eq:"Canada"}}
  ],
  $or:[
      {height: {$gt:180}},
      {salary: {$gt:4000}}
  ]
})

//Ejercicio12 Obtener todos los usuarios que sean de Italia y tengan entre 20 y 30 años.
db.users.find({
  $and:[
      {country: {$eq: "Italia"}},
      {age: {$gte: 20}},
      {age:{$lte:30}}
  ]
})

//Ejercicio13 Obtener todos los usuarios que no tengan un correo electrónico registrado.
db.users.find({email: {$eq: ""}})

//Ejercicio14 Obtener todos los usuarios que sean de Francia y que su salario esté entre $3000 y $5000 al mes.
db.users.find({
  $and:[
      {country: {$eq: "Francia"}},
      {salary:{$gte: 3000}},
      {salary:{$lte: 5000}},
  ]
})

//Ejercicio15 Obtener todos los usuarios que sean de Brasil y que tengan un peso menor a 120 libras o más de 140 libras.
db.users.find({
  $and:[
      {country: {$eq: "Brasil"}}
  ],
  $or:[
      {weight:{$lt: 120}},
      {weight:{$gt: 140}}
  ]
})

//Ejercicio16 Obtener todos los usuarios que sean de Argentina o de Chile y que tengan una edad menor a 25 años.
db.users.find({
  $or:[
      {country:{$eq:"Argentino"}},
      {country:{$eq: "Chile"}}
  ],
  $and:[
      {age: {$lt:25}}
  ]
})

//Ejercicio17 Obtener a todos los usuarios que no sean de España ni de México y que ganen menos de $3000 al mes.
db.users.find({country:{$nin:["España","Mexico"]}, salary :{$lt:3000}
})

//Ejercicio18 Obtener todos los usuarios que sean de Alemania y que tengan un salario menor a $4000 o una edad mayor a 35 años.
db.users.find({
  $and:[
    {country:{$eq:"Alemania"}}
  ],
  $or:[
    {salario:{$lt:4000}},
    {age:{$gt: 35}}
  ]
})

//Ejercicio19 Obtener todos los usuarios que no sean de Colombia y que su altura sea menor a 170 cm.
db.users.find({country:{$nin:["Colombia"]}, height:{$lt:170}})

//Ejercicio20 Obtener todos los usuarios que sean de India y que no tengan un salario registrado.
db.users.find({
  $and:[
    {country:{$eq:"India"}}, 
    {salary:{$exists:false}}
  ]
})
