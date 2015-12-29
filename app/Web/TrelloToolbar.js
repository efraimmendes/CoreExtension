window.TrelloUI = window.TrelloUI || {};
(function (window) {
    var self = this;
    this.Id = "";
    this.ListButton = [];
    var trelloToolbar = function (id, titulo, divInsertBefore) {
        self.ListButton = [];
        self.Id = id;
        var divId = id != null ? "id=" + id : "";
        var divH3 = titulo != null ? "<h3>" + titulo + "</h3>" : "";

        var strBar = "<div id=\"" + divId + "\" class=\"window-module u-clearfix\">" +
            divH3 +
            "<div id=\"toolbarButtonList\">"+
            "</div>";
        $(strBar).insertBefore(divInsertBefore.firstChild);
    }
    function renderizeButtons(callBackfunction) {
        $("#toolbarButtonList").empty();
        ListButton.forEach(function (item) {
            $("#toolbarButtonList").append(item.GetHtmlButton());
            $("#" + item.Id).click(function() { callBackfunction(this)});
        });
    }
    trelloToolbar.prototype.AddButton = function (idButton, titleButton, callBackfunction) {
        var btn = new window.TrelloUI.TrelloToolBarButton(idButton, titleButton);
        self.ListButton.push(btn);
        renderizeButtons(callBackfunction);
    }
    trelloToolbar.prototype.RemoveButton = function (toolbarButton) {
        self.ListButton.push(toolbarButton);
        renderizeButtons();
    }
    window.TrelloUI.TrelloToolBar = trelloToolbar;
})(window);

