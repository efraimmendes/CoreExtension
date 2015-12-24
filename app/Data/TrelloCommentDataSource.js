window.Data = window.Data || {};
(function (window) {
    function trelloCommentDataSource() {
        this.commentList = [];
    };
    trelloCommentDataSource.prototype.List = function (shortlink, successCallback) {
        TrelloRequests.prototype.requestGet("/cards/" + shortlink + "/actions", { commentCard: "all" }, function (listComment) {
            this.commentList = listComment.map(function (comment) {
                var mappedModel = new Models.CommentModel(comment.data);
                mappedModel.board = new Models.BoardModel(comment.data.board);
                mappedModel.card = new Models.CardModel(comment.data.card);
                mappedModel.List = new Models.ColumnModel(comment.data.list);
                return mappedModel;
            });
            successCallback(this.commentList);
        });
    }

    trelloCommentDataSource.prototype.Insert = function (shortlink, comment) {
        TrelloRequests.prototype.requestPost("/cards/" + shortlink + "/actions/comments", { text: comment }, function (card) {
            }
        );
    }
    trelloCommentDataSource.prototype.Update = function (commentModel, comment) {
        TrelloRequests.requestPost("/cards/" + commentModel.card.idShort + "/actions/comments", { text: comment }, function (card) {
        }
        );
    }
    trelloCommentDataSource.prototype.Delete = function (cardId) {
        TrelloRequests.requestDelete("/cards/" + cardId + "/actions/comments", {}, function (card) {
        });
    }
    window.Data.TrelloCommentDataSource = trelloCommentDataSource;
})(window)