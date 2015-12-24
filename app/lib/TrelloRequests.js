(function (window) {
    var trelloRequests = function () { }
    function authorizeRequest(successRequest) {
        Trello.authorize({
            type: "popup",
            scope: { read: true, write: true, account: false },
            name: "CoreDevExtension",
            success: successRequest

        });
    }
    trelloRequests.prototype.requestGet = function(argument, options, callback) {
        authorizeRequest(function() {
            Trello.get(argument, options, callback);
        });
    }
    trelloRequests.prototype.requestPost = function(argument, options, callback) {
        authorizeRequest(function() {
            Trello.post(argument, options, callback);
        });
    }
    trelloRequests.prototype.requestDelete = function(argument, options, callback) {
        authorizeRequest(function() {
            Trello.delete(argument, options, callback);
        });
    }
    trelloRequests.prototype.getCardId = function() {
        var pathparts = location.pathname.split('/');
        return pathparts[2];
    }

    window.TrelloRequests = trelloRequests;
})(window)