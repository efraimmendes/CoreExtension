
window.TrelloUI = window.TrelloUI || {};
(function (window) {
    var self = this;
    this.Id = "";
    this.Titulo = "";
    var trelloToolbarButton = function(data) {
        self.Id = data ? data.Id : 0;
        self.Titulo = data ? data.Titulo : "";
        self.BtnHtml = data ? data.BtnHtml : "";
    }
    trelloToolbarButton.prototype.GetHtmlButton = function () {
        return "<div class=\"u-clearfix\"> <a id=\"" + self.Id + "\" class=\"button-link\" href=\"#\">" +
            "<span class=\"icon-sm icon-clock\"></span> <span id=\"btnText\">" + self.Titulo + "</span></a>" +
            "</div>";
    }
    window.TrelloUI.TrelloToolBarButton = trelloToolbarButton;
})(window)