var express=require("express");
var bodyParser=require("body-parser")
var app=express();
//endpoint
app.get("/",function (req,res) {
    res.json({msg:"selamat datang"});
});
app.get("/intro",function (req,res) {
    res.json(["batagor","agsle","ronde","rujak"]);
});
app.get('/resep/:nama',function (req,res) {
    let namamenu=req.params.nama;
    res.json({informasi:namamenu});
});
app.get('/resep/:nama/:style',function (req,res) {
    let namamenu=req.params.nama;
    let stylemenu=req.params.style;
    res.json({informasi:namamenu,style:stylemenu});
});

app.get("/listall",function (req,res) {
    let jenis=req.query.jenis;
    let jumlah=parseInt(req.query.jumlah);
    res.json({jenisnya:jenis,jumlahnya:jumlah});
})


//post
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.post("/add",function (req,res) {
    let nmenu=req.body.newmenu;
    res.json({newmenuaded:nmenu});
});


app.listen(3000,()=>{
    console.log("server berjalan di log 3000");

});

//lagkah
//npm install express
//node server.js
//buka localhost:3000