angular.module('musicamodule', ['entidadmodulo', 'jsonbookmodulo'])

    .config(function ($stateProvider) {
        $stateProvider
            .state('app.genero', {
                url: '/genero',
                views: {
                    'content': {
                        templateUrl: 'js/app/musica/generos/genero.html',
                        controller: 'generocontroller',
                        resolve: {
                            
                            generos: function (generoservicio) {
                               console.log("LISTADO: RESOLVE: ", generoservicio.obtenergeneros());
                                return generoservicio.obtenergeneros();
                                
                            }
                            
                        }
                    }
                }
            })
            
            
            

    })
