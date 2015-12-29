var comentList = [];
var cartaoAtual = new window.ViewModel.CardViewModel();

var observableCommentStatus = new MutationObserver(function () {
    var interval = setTimeout(function () {
        window.BO.TrelloCardBO.prototype.CardInformation(cartaoAtual, function (cartaoAtualizado) {
            cartaoAtual = cartaoAtualizado;
            TrelloWeb.prototype.UpdateStatusButton(cartaoAtualizado);
        });
    }, 1000);

});


ob = new MutationObserver(function (objs) {
    var wasHidden = $.inArray("display: block", $.map(objs, function (o) { return o["oldValue"]; }).join().split(/;,? ?/)) != -1;
    if ($(".window").is(":visible") && wasHidden) {
        TrelloWeb.prototype.AddToolBar();
        observableCommentStatus.observe($(".js-list-actions")[0], { childList: true});
    } else if (wasHidden) {
        if (observableCommentStatus != undefined)
            observableCommentStatus.disconnect();
    }
});
ob.observe($(".window")[0], { attributes: true, attributeFilter: ["style"], attributeOldValue: true });



