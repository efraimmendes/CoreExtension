window.Models = window.Models || {};
(function (window) {
    var cardModel = function(data) {
        this.id = data.id;
        this.idShort = data.idShort;
        this.name = data.name;
        this.shortLink = data.shortLink;
    }
    window.Models.CardModel = cardModel;
})(window)