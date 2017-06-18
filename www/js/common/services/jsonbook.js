angular.module('jsonbookmodulo', ['entidadmodulo'])

    .factory('generoservicio', function ($http, $q, entiedadgenero) {
        var generoservicio = {};
        
        generoservicio.generos = [];
        //generoservicio.generoseleccionado = null;
        generoservicio.obtenergeneros = function () {
            var deferred = $q.defer();

            $http.get('http://api.deezer.com/genre', {}).then(
                function (response) {

                    generoservicio.generos = entiedadgenero.fromJsonBunch(response.data);

                   // console.log("LISTA DEL FAACOTYR: ", generoservicio.generos);

                    deferred.resolve(generoservicio.generos);
                    
                },
                function (error) {
                    deferred.reject();
                }
            );


            return deferred.promise;

        };
          //  console.log(generoservicio);

        return generoservicio;
    })