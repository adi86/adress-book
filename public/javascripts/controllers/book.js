adressBook.controller('bookController', function($scope, utils, adressBook){

    $scope.groups = {};

    $scope.getData = function(){
        adressBook.query(function(d){
            utils.groupify(d, $scope.groups);
        });
    };

    $scope.getData();

    $scope.removeContact = function(id){
        adressBook.remove({id: id}, function(){
            $scope.contactRemoved = true;
            $scope.groups = {};
            $scope.getData();
        })
    }

});


adressBook.controller('addBookController', function($scope, adressBook){
    $scope.addBook = function(){
        if($scope.addContact.$valid){
            var rec = new adressBook($scope.book);

            rec.$save(function(data){
                console.log('saved', data);

                $scope.userAdded = true;

            });
        }
    }
});