require.config({
    baseUrl: "",
    
    // alias libraries paths.  Must set 'angular'
    paths: {
        'angular': 'lib/angular.min',
        'angular-route': 'lib/angular-route.min',
        'angularAMD': 'lib/angularAMD.min',
        'bootstrap': 'lib/bootstrap/js/bootstrap.min',
        'directive': 'ui/directive/directive',
        'jQuery': 'lib/jquery-2.1.4.min',
        'app': 'app/app'
    },
    
    // Add angular modules that does not support AMD out of the box, put it in a shim
    shim: {
        'angularAMD': ['angular'],
        'angular-route': ['angular'],
        'bootstrap': ['jQuery'],
        'directive': ['angular', 'app'],
        'app': ['bootstrap']
    },
    
    // kick start application
    deps: ['app', 'directive']
});
    