var myApp= angular.module('myApp');


myApp.controller('HomeController', ['$scope', function($scope){
    console.log('home controller');
}]);

myApp.controller('ContactController', ['$scope', function($scope){
    console.log('contract controller');
}]);

myApp.controller('AboutController', ['$scope', function($scope){
    console.log('about controller');
}]);

myApp.controller('ApprouteController',['$scope', function($scope){
    console.log('app route controller');
}]);

myApp.controller('LoginController',['$scope', function($scope){
    console.log('login controller');
}]);

myApp.controller('RegisterController',['$scope', function($scope){
    console.log('register controller');
    $scope.user={
        firstName:"",
        lastName:"",
        userName:"",
        password:""
    }
}]);

myApp.controller('EventController',['$scope', function($scope){
    console.log('Event controller');

}]);

myApp.controller('AppController',['$scope','SetArrays', function($scope,SetArrays){
    $scope.gameInfo = false;
    $scope.results = false;
    $scope.gameLength = null;
    $scope.percentage = 0;
    $scope.currentPlayer ='';
    $scope.shot = 1;
    $scope.end = 1;
    $scope.leadOverall = SetArrays.leadOverall;
    $scope.secondOverall = SetArrays.secondOverall;
    $scope.thirdOverall = SetArrays.thirdOverall;
    $scope.skipOverall = SetArrays.skipOverall;
    $scope.default = angular.copy($scope.currentShot);
    $scope.shotPercentage=0;
    $scope.event = {
        name: "",
        team: "",
        game: "",
        opponent: ""
    };
    $scope.team = {
        lead: "",
        second: "",
        third: "",
        skip: ""
    };
    $scope.currentShot = {
        type: "",
        typeSpecific: "",
        turn: "",
        area: "",
        weightHit: "",
        weightDraw:"",
        difficulty:"",
        score: 0
    };

    $scope.getPlayer = function(shot,team){
        switch (shot){
            case 1:
            case 2:
                $scope.currentPlayer = $scope.team.lead;
                break;
            case 3:
            case 4:
                $scope.currentPlayer = $scope.team.second;
                break;
            case 5:
            case 6:
                $scope.currentPlayer = $scope.team.third;
                break;
            case 7:
            case 8:
                $scope.currentPlayer = $scope.team.skip;
                break;
        }
        console.log($scope.currentPlayer)
    };


    $scope.addScore = function(score,player,shot){
        $scope.shotPercentage=(score/5)*100;
        console.log($scope.shotPercentage);
        switch(shot){
            case 1:
            case 2:
                SetArrays.leadOverall.push($scope.shotPercentage);
                if ($scope.currentShot.type =="hit"){
                    SetArrays.leadHits.push($scope.shotPercentage);
                } else if ($scope.currentShot.type == "draw"){
                    SetArrays.leadDraws.push($scope.shotPercentage);
                }
                if ($scope.currentShot.turn == "in"){
                    SetArrays.leadIn.push($scope.shotPercentage);
                } else if ($scope.currentShot.turn =="out"){
                    SetArrays.leadOut.push($scope.shotPercentage);
                }
                break;

            case 3:
            case 4:
                SetArrays.secondOverall.push($scope.shotPercentage);
                if ($scope.currentShot.type =="hit"){
                    SetArrays.secondHits.push($scope.shotPercentage);
                } else if ($scope.currentShot.type == "draw"){
                    SetArrays.secondDraws.push($scope.shotPercentage);
                }
                if ($scope.currentShot.turn == "in"){
                    SetArrays.secondIn.push($scope.shotPercentage);
                } else if ($scope.currentShot.turn =="out"){
                    SetArrays.secondOut.push($scope.shotPercentage);
                }
                break;
            case 5:
            case 6:
                SetArrays.thirdOverall.push($scope.shotPercentage);
                if ($scope.currentShot.type =="hit"){
                    SetArrays.thirdHits.push($scope.shotPercentage);
                } else if ($scope.currentShot.type == "draw"){
                    SetArrays.thirdDraws.push($scope.shotPercentage);
                }
                if ($scope.currentShot.turn == "in"){
                    SetArrays.thirdIn.push($scope.shotPercentage);
                } else if ($scope.currentShot.turn =="out"){
                    SetArrays.thirdOut.push($scope.shotPercentage);
                }

                break;
            case 7:
            case 8:
                SetArrays.skipOverall.push($scope.shotPercentage);
                if ($scope.currentShot.type =="hit"){
                    SetArrays.skipHits.push($scope.shotPercentage);
                } else if ($scope.currentShot.type == "draw"){
                    SetArrays.skipDraws.push($scope.shotPercentage);
                }
                if ($scope.currentShot.turn == "in"){
                    SetArrays.skipIn.push($scope.shotPercentage);
                } else if ($scope.currentShot.turn =="out"){
                    SetArrays.skipOut.push($scope.shotPercentage);
                }

        }
        if ($scope.shot < 8){
            $scope.shot ++;
        } else {
            $scope.shot=1;
            $scope.end++;
        }
        //if ($scope.end>$scope.gameLength){
        //    alert("the game is over");
        //
        //    $scope.results = !$scope.results;
        //    console.log($scope.leadOverall,$scope.secondOverall,$scope.thirdOverall,$scope.skipOverall);
        //    console.log(SetArrays.leadHits,SetArrays.leadDraws,SetArrays.leadIn,SetArrays.leadOut);
        //
        //}

        $scope.endGame = function(){
            $scope.results = !$scope.results
        };
        //console.log($scope.leadOverall);

    };
    $scope.submitGameInfo = function(){
        $scope.currentPlayer = $scope.team.lead;
        $scope.gameInfo= !$scope.gameInfo;

    };


    $scope.reset = function(){

        $scope.currentShot=angular.copy($scope.default);

    }
}]);

myApp.controller('ResultsController',['$scope', 'SetArrays', 'CalcPercentage', function($scope, SetArrays,CalcPercentage){
    console.log('results controller');
    $scope.leadOverall = SetArrays.leadOverall;
    $scope.secondOverall = SetArrays.secondOverall;
    $scope.thirdOverall = SetArrays.thirdOverall;
    $scope.skipOverall = SetArrays.skipOverall;
    $scope.leadHits = SetArrays.leadHits;
    $scope.secondHits =SetArrays.secondHits;
    $scope.thirdHits = SetArrays.thirdHits;
    $scope.skipHits = SetArrays.skipHits;
    $scope.leadDraws = SetArrays.leadDraws;
    $scope.secondDraws =SetArrays.secondDraws;
    $scope.thirdDraws = SetArrays.thirdDraws;
    $scope.skipDraws = SetArrays.skipDraws;
    $scope.leadIn = SetArrays.leadIn;
    $scope.secondIn =SetArrays.secondIn;
    $scope.thirdIn = SetArrays.thirdIn;
    $scope.skipIn = SetArrays.skipIn;
    $scope.leadOut = SetArrays.leadOut;
    $scope.secondOut =SetArrays.secondOut;
    $scope.thirdOut = SetArrays.thirdOut;
    $scope.skipOut = SetArrays.skipOut;
    $scope.leadData = [
        [CalcPercentage.findAvg(SetArrays.leadOverall),CalcPercentage.findAvg(SetArrays.leadHits),CalcPercentage.findAvg(SetArrays.leadDraws),CalcPercentage.findAvg(SetArrays.leadIn),CalcPercentage.findAvg(SetArrays.leadOut)],
        [91,91,91,93,87]
    ];
    $scope.secondData = [
        [CalcPercentage.findAvg(SetArrays.secondOverall),CalcPercentage.findAvg(SetArrays.secondHits),CalcPercentage.findAvg(SetArrays.secondDraws),CalcPercentage.findAvg(SetArrays.secondIn),CalcPercentage.findAvg(SetArrays.secondOut)],
        [88,88,88,90,86]

    ];
    $scope.thirdData = [
        [CalcPercentage.findAvg(SetArrays.thirdOverall),CalcPercentage.findAvg(SetArrays.thirdHits),CalcPercentage.findAvg(SetArrays.thirdDraws),CalcPercentage.findAvg(SetArrays.thirdIn),CalcPercentage.findAvg(SetArrays.thirdOut)],
        [86,86,86,88,84]

    ];
    $scope.skipData = [
        [CalcPercentage.findAvg(SetArrays.skipOverall),CalcPercentage.findAvg(SetArrays.skipHits),CalcPercentage.findAvg(SetArrays.skipDraws),CalcPercentage.findAvg(SetArrays.skipIn),CalcPercentage.findAvg(SetArrays.skipOut)],
        [84,84,84,84,84]

    ];



    $scope.someData =[
        [80,90,60,50,85],
        [90,90,90,90,90]
    ];
    $scope.series = ['Current Game','Goal'];
    $scope.labels = ['Total', 'In-Turn', 'Out-Turn', 'Draws', 'Hits'];
    var leadBarEl = angular.element(document.getElementById("leadBar"));
    var ctx = leadBarEl[0].getContext("2d");
    var leadBarEl = angular.element(document.getElementById("secondBar"));
    var ctx = leadBarEl[0].getContext("2d");
    var leadBarEl = angular.element(document.getElementById("thirdBar"));
    var ctx = leadBarEl[0].getContext("2d");
    var leadBarEl = angular.element(document.getElementById("skipBar"));
    var ctx = leadBarEl[0].getContext("2d");
    //var leadBarChart = new Chart(ctx).Bar($scope.someData);



    //console.log($scope.avg);
    console.log($scope.leadData);
    console.log($scope.secondData);
    console.log($scope.thirdData);
    console.log($scope.skipData);




    //console.log($scope.leadOverall,$scope.leadIn,$scope.leadOut,$scope.leadDraws,$scope.leadHits);
    //$scope.leadData = [CalcPercentage.findAvg(SetArrays.leadOverall),CalcPercentage.findAvg(SetArrays.leadIn),CalcPercentage.findAvg(SetArrays.leadOut),CalcPercentage.findAvg(SetArrays.leadDraws),CalcPercentage.findAvg(SetArrays.leadHits)];
    //console.log($scope.leadData);



}]);


myApp.factory('SetValues', function(){
    var leadOverall = null;

})

myApp.factory('SetArrays', function(){
    var leadOverall =[];
    var secondOverall = [];
    var thirdOverall = [];
    var skipOverall = [];

    var leadDraws =[];
    var secondDraws = [];
    var thirdDraws = [];
    var skipDraws = [];

    var leadHits =[];
    var secondHits = [];
    var thirdHits = [];
    var skipHits = [];

    var leadIn =[];
    var secondIn = [];
    var thirdIn = [];
    var skipIn = [];

    var leadOut =[];
    var secondOut = [];
    var thirdOut = [];
    var skipOut = [];


    return {
        leadOverall : leadOverall,
        secondOverall : secondOverall,
        thirdOverall : thirdOverall,
        skipOverall : skipOverall,
        leadDraws : leadDraws,
        secondDraws: secondDraws,
        thirdDraws : thirdDraws,
        skipDraws : skipDraws,
        leadHits : leadHits,
        secondHits : secondHits,
        thirdHits : thirdHits,
        skipHits : skipHits,
        leadIn : leadIn,
        secondIn : secondIn,
        thirdIn : thirdIn,
        skipIn : skipIn,
        leadOut : leadOut,
        secondOut : secondOut,
        thirdOut : thirdOut,
        skipOut : skipOut
    }
});

myApp.factory('CalcPercentage',function(){


    var findAvg = function(array){
        var sum = 0;
        var avg = 0;

        for (var i = 0; i<array.length; i++){
            sum = sum+array[i];
        }
        avg= sum/array.length;
        return avg;
    }

    return {
        findAvg : findAvg
    }


});

