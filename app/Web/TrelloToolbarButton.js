
window.TrelloUI = window.TrelloUI || {};
(function (window) {
    var trelloToolbarButton = function (id, titulo) {
        var self = this;
        this.Id = id;
        this.Titulo = titulo;
    }
    trelloToolbarButton.prototype.GetHtmlButton = function () {
        return "<div class=\"u-clearfix\"> <a id=\"" + this.Id + "\" class=\"button-link\" href=\"#\">" +
            "<span class=\"icon-sm icon-clock\"></span> <span id=\"btnText\">" + this.Titulo + "</span></a>" +
            "</div>";
    }
    window.TrelloUI.TrelloToolBarButton = trelloToolbarButton;
})(window)