adressBook.factory('adressBook', function($resource){
    return $resource('/adressBook/:id', null, {
        'update': { method:'PUT' }
    });
}).factory('utils', function() {
    return {
        groupify : function(source, into) {
            var i, ch;
            for (i = source.length - 1; i >= 0; i--) {
                ch = source[i].name.charAt(0);
                into[ch] || (into[ch] = {
                    label: ch,
                    contactList: []
                });
                into[ch].contactList.push(source[i]);
            };
        }
    }
});