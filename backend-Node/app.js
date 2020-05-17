var express = require('express')



var app = express()
var multer = require('multer')
var cors = require('cors')

var fs = require('fs')
const bodyParser = require('body-parser')

var upload = multer({ dest: '../Projekt-stronki/src/img/' })

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


var storage = multer.diskStorage({
  destination : function(req, file, cb){
    cb(null, '../Projekt-stronki/src/img/')
  },
  filename : function (req, file, cb){
    cb(null, Date.now() + '-' + file.originalname)
  }
})

var upload = multer({storage : storage}).single('file')

app.post('/products',(req, res, next)=> {
  res.json( 'This is CORS-enabled for all origins!')
})



app.post('/form/login', (req,res,next)=>{
  let login = req.body.login
  let password = req.body.password

  let content = fs.readFileSync("./json_data/mainData.json");
  let trueContent = JSON.parse(content)
  const userArray = trueContent.users

  let check = userArray.find(user=>{
    if(user.login === login && user.password === password){
      return user
    }
  })
  if(check != undefined){
    res.json(check)
  }
  else{
    res.json({msg : "nie znaleziono!"})
  }
  
})

app.post('/form/register', (req,res,next)=>{

  var newUser = {
    id : null,
    login : req.body.login,
    password : req.body.password,
    imie : req.body.imie,
    nazwisko : req.body.nazwisko,
    birth : req.body.birth,
    tech_words : [],
    completion : null,
    picture : null
  }

  

  fs.readFile("./json_data/mainData.json", 'utf8', (err, jsonString)=>{
    if(err){
      console.log(err)
      return
    }
    var userArray = JSON.parse(jsonString)
    var trueUserArray = userArray.users

    newUser.id = trueUserArray.length
    trueUserArray.push(newUser)
    var newUserArray = JSON.stringify({
      users : trueUserArray
    })



    fs.writeFile('./json_data/mainData.json', newUserArray, 'utf-8',(err)=>{
      if(err){
        console.log(err)
        res.json({msg : "not checked"})
      }
      res.json(newUser)
    })
  });
  
  
})


app.post('/profile/img', function (req, res, next) {
  
  upload(req,res, function (err) {
    if(err instanceof multer.MulterError){
      return res.status(500).json(err)
    }
    else if(err){
      return res.status(500).json(err)
    }
    return res.status(200).send(req.file)
  })
})

app.post('/profile/imgSet', (req,res,next)=>{
  next()

}, function(req,res,next){

  var given_id = req.body.id
  var given_filename = req.body.filename

fs.readFile("./json_data/mainData.json", 'utf8', (err, jsonString)=>{
  if(err){
    console.log(err)
    return
  }

  var userArray = JSON.parse(jsonString)
  var trueUserArray = userArray.users


  var new_user = {}

  for(i = 0; i<trueUserArray.length; i++){
    if(trueUserArray[i].id == given_id){
      new_user = trueUserArray[i]
    }
  }

  new_user.picture = given_filename
  trueUserArray.splice(trueUserArray.length -1,1, new_user)
  var newUserArray = JSON.stringify({
    users : trueUserArray
  })

  fs.writeFile('./json_data/mainData.json', newUserArray, 'utf-8',(err)=>{
      if(err){
        console.log(err)
        res.json({msg : "something wrent wrong"})
      }
      res.json(new_user)
    })

})
})


app.post("/addWord", (req,res,next)=>{

  const techword = req.body.techword
  var updatedUser = req.body.user
  

  fs.readFile("./json_data/mainData.json", 'utf8', (err, jsonString)=>{
    if(err){
      console.log(err)
      return
    }
    var userArray = JSON.parse(jsonString)
    var trueUserArray = userArray.users

    
    let updUser = trueUserArray.find((user)=>{
      if(user.password == updatedUser.password){
        return(user)
      }
    })
    updUser.tech_words.push(techword)

    trueUserArray.splice(updUser.id,1, updUser)

    var newUserArray = JSON.stringify({
      users : trueUserArray
    })

    fs.writeFile('./json_data/mainData.json', newUserArray, 'utf-8',(err)=>{
      if(err){
        console.log(err)
        res.json({msg : "not checked"})
      }
      res.json(updUser)
    })
  });

})


app.post("/profile/updateUser", (req,res,next)=>{
  next()
}, function(req,res,next){

  var toUpdateUser = {
    id : req.body.id,
    imie : req.body.imie,
    nazwisko : req.body.nazwisko,
    login : req.body.login,
    password : req.body.password,
    birth : req.body.birth,
    picture : req.body.picture,
    tech_words : req.body.tech_words,
    completion: req.body.completion,
  }

  fs.readFile("./json_data/mainData.json", 'utf8', (err, jsonString)=>{
    if(err){
      console.log(err)
      return
    }

    var userArray = JSON.parse(jsonString)
    var trueUserArray = userArray.users


    trueUserArray.splice(toUpdateUser.id,1, toUpdateUser)

    var newUserArray = JSON.stringify({
      users : trueUserArray
    })

    console.log(newUserArray)

    
    fs.writeFile('./json_data/mainData.json', newUserArray, 'utf-8',(err)=>{
      if(err){
        console.log(err)
        res.json({msg : "not checked"})
      }
      res.json(toUpdateUser)
    })

  })
  
})



app.listen(5000, function () {
  console.log('Listening...')
})

