/**
 * Created by Administrator on 2017/1/29.
 */
angular.module("myApp")
    .config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProcider){
        $stateProvider
            .state("home",{
                url: "/home",
                templateUrl: "views/home.html",
                controller: "home"
            })
            .state("login",{
                url: "/login",
                templateUrl: "views/login.html"
            })
            .state("register",{
                url: "/register",
                templateUrl: "views/register.html"
            })
        $urlRouterProcider
            .otherwise("home")
    }])
