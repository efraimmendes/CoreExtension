window.Models = window.Models || {};
(function (window) {
    var commentModel = function (data) {
        this.board = data.board;
        this.card = data.card;
        this.list = data.list;
        this.text = data.text;
        this.date = data.date;
        this.id = data.id;
        this.idMemberCreator = data.idMemberCreator;
        this.type = data.type;
    }
    window.Models.CommentModel = commentModel;
})(window);