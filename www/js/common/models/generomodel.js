angular.module('entidadmodulo',[])

.factory('entiedadgenero',function(){
 function entiedadgenero(pid,pname,ppicture){
     this.id=pid;
     this.name=pname;
     this.picture=ppicture;     
 }
 entiedadgenero.build=function(data){
     if(!data)
     return null;
     //console.log(data.id,data.name,data.picture);
     
     return new entiedadgenero(data.id,data.name,data.picture);
     
     
 }

 entiedadgenero.prototype.toJson=function(){
     return angular.toJson(this);
 }

entiedadgenero.fromJsonBunch=function(data){
    if (angular.isArray(data)){
         return data.map(entiedadgenero.build).filter(Boolean);
    }
    return entiedadgenero.build(data);
}

return entiedadgenero;


})