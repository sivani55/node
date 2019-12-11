

var express = require("express");
var mysql = require('mysql');
 var bodyParser = require('body-parser');
var cors = require('cors');
var connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'password',
    database:'sivani'

});
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })) 
app.use(cors());


  
connection.connect(function(error) {

    if(!error){
        console.log("Database is connected");
    }else{
        throw error;
    }
   
});
app.get("/",function(req,res){
    connection.query('select * from student',function(error,rows,fields){
        if(!error){
            //  res.send(rows);
             if (error) throw error;
             res.end(JSON.stringify(rows));
             console.log("result is", rows)
             console.log(">>>", fields);
             
        }else{
            console.log("error while performing query",error);
        }
    })

})
app.get("/getUserById/:id",function(req,res){
    connection.query('select * from student where id='+req.params.id,function(error,rows,fields){
    
            //  res.send(rows);
             if (error) throw error;
             res.end(JSON.stringify(rows));
             
             
        
    })

})

// app.post('/customer', function (req, res) {
//     var params  = req.body !==undefined ? req.body:{};
//     console.log(req.body);
//     console.log("INSERT INTO student VALUES ("+params.studentName+"," +params.age+ "')");

//         connection.query("INSERT INTO student VALUES ("+params.studentName+",'"+params.age+"')",function(error, results,fields){       
//          if (error) throw error;
//        res.end(JSON.stringify(results));
//  });
//  });
 app.post('/customer', function (req, res) {
     console.log('req>>>>',req)
    var params  = req.body;
    console.log(params);
    var query='insert into student values("'+params.studentName+'","'+params.age+'")';
    console.log(query)
     connection.query(query, function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
     });
 });
 app.put('/update', function (req, res) {
    connection.query('UPDATE `student` SET `studentName`=? ,`Email`=? , `age`=? , `gender`=?,`skill`=?, `status`="InActive" where `id`=?', [req.body.studentName,req.body.Email, req.body.age, req.body.gender,req.body.skill, req.body.id, req.body.status], function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
     });
 });
 app.put('/edit', function (req, res) {
    connection.query('UPDATE `student` SET `studentName`=? ,`Email`=? , `age`=? , `gender`=?,`skill`=?, `status`=? where `id`=?', [req.body.studentName,req.body.Email, req.body.age, req.body.gender,req.body.skill,req.body.status,req.body.id], function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
     });
 });


 app.get("/country",function(req,res){
    connection.query('select * from countries',function(error,rows,fields){
        if(!error){
            //  res.send(rows);
             if (error) throw error;
             res.end(JSON.stringify(rows));
             console.log("result is", rows)
             console.log(">>>", fields);
             
        }else{
            console.log("error while performing query",error);
        }
    })

})
app.get("/states/:id",function(req,res){
    connection.query('select * from statesdata where country_id='+req.params.id,function(error,rows,fields){
        if(!error){
            //  res.send(rows);
             if (error) throw error;
             res.end(JSON.stringify(rows));
             console.log("result is", rows)
             console.log(">>>", fields);
             
        }else{
            console.log("error while performing query",error);
        }
    })

})
app.get("/cities/:id",function(req,res){
    connection.query('select * from citiesdata where state_id='+req.params.id,function(error,rows,fields){
        if(!error){
            //  res.send(rows);
             if (error) throw error;
             res.end(JSON.stringify(rows));
             console.log("result is", rows)
             console.log(">>>", fields);
             
        }else{
            console.log("error while performing query",error);
        }
    })

})

// app.post('/account', function (req, res) {
//     console.log('req>>>>',req)
//    var params  = req.body;
//    console.log(params);
//    var query='insert into createaccount (`firstName`,`email`,`password`) values("'+params.firstName+'","'+params.email+'","'+params.password+'")';
//    console.log(query)
//     connection.query(query, function (error, results, fields) {
//       if (error) throw error;
//       res.end(JSON.stringify(results));
//     });
// });
app.post('/count', function (req, res) {
    // console.log('req>>>>',req)
   var params  = req.body;
   console.log(params);
   var query='select count(email) as count  from createaccount where email="'+params.email+'"';
   console.log(query)
    connection.query(query, function (error, results, fields) {
      if (error) throw error;
      console.log("count>>>",results[0]);
      console.log("count111>>>",results[0].count)
      let countValue = results[0].count;
      if(countValue > 0){
        //   console.log("error>>>",error.text);
         res.status(400).json({'status':400,'message':"Email Exists", "data" : results}); 
          res.end(results);

      }else{
        var query='insert into createaccount (`firstName`,`email`,`password`) values("'+params.firstName+'","'+params.email+'","'+params.password+'")';
        console.log(query) 
        connection.query(query, function (error, results, fields) {
            if (error) throw error;
             res.status(200).json({'status':200,'message':"data inserted!", "data" : results}); 
            res.end(JSON.stringify(results));
            
          });

    }
      
    //   res.end(JSON.stringify(results));
    
    });
});
app.post('/checkUser', function (req, res) {
    console.log('req>>>>',req)
   var params  = req.body;
   console.log(params);
   var query='select * from createaccount where `email`="'+params.email+'" and `password`="'+params.password+'"';
   console.log(query)
    connection.query(query, function (error, results, fields) {
      if (error) throw error;
      if(results.length !== 0)
      {
        res.status(200).json({"status":200,"message":"Logged in successfully","data":results})
        
        res.end();
        
      }else{
          res.status(200).json({"status":400,"message":"User does not exists","data":results})
          res.end();
          
      }
      console.log("result>>>>",results);
    });
});

app.listen(2000);