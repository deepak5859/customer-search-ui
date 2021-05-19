var app = angular.module("myApp", ["ngTable"]);
 
app.controller("customerController", function($scope, $http, $timeout, NgTableParams) {
    $scope.customerList = [];

    $scope.cname = function(string) {
        
        $http.get("http://localhost:8080/customer/list?searchKey=" + string).then(
            function successCallback(response) {
                $timeout(function() {
                    $scope.customerList = [];
                    $scope.customerList = response.data;
                })
                
            },
            function errorCallback(response) {
              console.log("Unable to perform get request");
            }
        );

        $scope.hidethis = false;
        var output = [];

        angular.forEach($scope.customerList, function(customer) {
            output.push(customer.firstname + ' ' + customer.lastname);
        });

        $scope.filterCustomer = output;
        $scope.tableParams = new NgTableParams({}, { dataset: $scope.customerList}); 
        
    };

    $scope.fillInputBox = function(string) {
        $scope.customer = string;
        $scope.hidethis = true;
    };
});