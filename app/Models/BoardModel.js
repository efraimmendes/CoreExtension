window.Models = window.Models || {};
(function (window) {
    var boardModel = function(data) {
        this.id = data.id;
        this.name = data.name;
        this.shortLink = data.shortLink;
    }
    window.Models.BoardModel = boardModel;
})(window)