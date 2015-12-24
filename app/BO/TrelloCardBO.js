window.BO = window.BO || {};
(function (window) {
    var trelloCardBo = function () { }
    function getCardShortLik() {
        var pathparts = location.pathname.split("/");
        return pathparts[2];
    }
    trelloCardBo.prototype.CardInformation = function (cardViewModel, successCallback) {
        Data.TrelloCommentDataSource.prototype.List(getCardShortLik(), function(cardComment) {
            if (cardComment.length > 0) {
                cardViewModel.id = cardComment[0].card.id;
                cardViewModel.idShort = cardComment[0].card.idShort;
                cardViewModel.name = cardComment[0].card.name;
                cardViewModel.shortLink = cardComment[0].card.shortLink;
                cardViewModel.commentList = cardComment;
            } else
                cardViewModel = new ViewModel.CardViewModel();
            if (successCallback != undefined)
                successCallback(cardViewModel);
        });
    }
    trelloCardBo.prototype.StopCard = function(data, hora) {
        Data.TrelloCommentDataSource.prototype.Insert(getCardShortLik(), ">parar em " + data+" "+hora);
    }

    trelloCardBo.prototype.StartCard = function (data, hora) {
        Data.TrelloCommentDataSource.prototype.Insert(getCardShortLik(), ">iniciar em " + data + " " + hora);
    }

    window.BO.TrelloCardBO = trelloCardBo;
})(window)