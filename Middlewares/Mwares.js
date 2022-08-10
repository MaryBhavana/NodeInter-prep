function Mware1(req,res,next){
      console.log("Example of middleware");
}
function Mware2() {
    console.log("Named export example");
}


module.export = {Mware1,Mware2}