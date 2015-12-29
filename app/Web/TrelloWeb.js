(function(window) {
    var trelloWeb = function() {
    }

    function updateCardInformation(cartaoAtual, successCallback) {
        window.BO.TrelloCardBO.prototype.CardInformation(cartaoAtual, successCallback);
    }
    function setStatusCard() {
        var strDate = $("#inputDate").val();
        var strTime = $("#inputTime").val();
        if ($("#btnText").text() === " Iniciar")
            window.BO.TrelloCardBO.prototype.StartCard(strDate, strTime);
        else
            window.BO.TrelloCardBO.prototype.StopCard(strDate, strTime);
        
        updateCardInformation(cartaoAtual);
    }
    function updateStatusCard(cardAtual) {
        if (cardAtual.started.get()) {
            $("#btTeste")[0].children[1].textContent= " Parar";
        } else {
            $("#btTeste")[0].children[1].textContent =" Iniciar";
        }
    }
    function updateStatusButton() {
        updateCardInformation(cartaoAtual, function() {
            updateStatusCard(cartaoAtual);
        });
    }
    function closeWindow() {
        var container = $(".pop-over.is-shown");
        var element = document.getElementById("CalendarMenu");
        container.removeClass("is-shown");
        element.remove();
    }
    function configureCalendar() {
        var picker = new Pikaday(
        {
            field: document.getElementById("inputDate"),
            firstDay: 1,
            minDate: new Date(2005, 0, 1),
            maxDate: new Date(2025, 12, 31),
            yearRange: [2005, 2025],
            bound: false,
            format: "DD/MM/YYYY",
            container: document.getElementById("calendar"),
            i18n: {
                previousMonth: "Mês Anterior",
                nextMonth: "Próximo Mês",
                months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
                weekdays: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
                weekdaysShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"]
            }
        });
        $("#btnok").click(function () {
            setStatusCard();
            closeWindow();
        });
        $("#btnCancelar").click(function () {
            closeWindow();
        });
        $("#btnCloseTitle").click(function () {
            closeWindow();
        });
        return picker;
    }
    function mountWindowCalendar(button) {
        var strWindow = "<div id=\"CalendarMenu\" data-reactid=\".1\">" +
            "<div class=\"pop-over-content js-pop-over-content u-fancy-scrollbar js-tab-parent\" data-reactid=\".1.1.0\" style=\"max-height: 875px;\">" +
            "<div data-reactid=\".1.1.0.$view580\">" +
            "<div id=\"formCalendar\" class=\"dpicker-widget u-clearfix\">" +
            "<div class=\"pop-over-header js-pop-over-header\" data-reactid=\".3.0\">" +
            "   <span class=\"pop-over-header-title\" data-reactid=\".3.0.0\">Data/Hora do Inicio/Fim da Atividade</span>" +
            "   <a id=\"btnCloseTitle\" href=\"#\" class=\"pop-over-header-close-btn icon-sm icon-close\" data-reactid=\".3.0.1\"></a>" +
            "</div>" +
            "<div class=\"datepicker-select u-clearfix\">" +
            "   <div class=\"datepicker-select-date\">" +
            "       <label class=\"datepicker-select-label\">Data" +
            "           <input id=\"inputDate\" class=\"datepicker-select-input js-dpicker-date-input js-autofocus\" type=\"text\" placeholder=\"Inserir data\" tabindex=\"101\">" +
            "       </label>" +
            "   </div>" +
            "   <div class=\"datepicker-select-time\">" +
            "       <label class=\"datepicker-select-label\">Hora" +
            "           <input id=\"inputTime\" class=\"datepicker-select-input js-dpicker-time-input\" type=\"text\" placeholder=\"Inserir hora\" tabindex=\"102\">" +
            "       </label>" +
            "   </div>" +
            "</div>" +
            "<div id=\"calendar\" class=\"pickers js-dpicker-cal\">" +
            "</div>" +
            "<div class=\"datepicker-confirm-btns\">" +
            "   <input id=\"btnok\" class=\"primary wide confirm\" type=\"button\" value=\"Salvar\" tabindex=\"103\">" +
            "   <button id=\"btnCancelar\" class=\"negate remove-date\" type=\"button\" tabindex=\"104\">Cancelar</button>" +
            " </div>" +
            "</div>" +
            " </div>" +
            " </div>" +
            "</div>";
        $(".pop-over").empty();
        $(".pop-over").append(strWindow);
        var postions = button.getBoundingClientRect();
        $(".pop-over").css("top", postions.top + postions.height + 5);
        $(".pop-over").css("left", postions.left);
        $(".pop-over").addClass("is-shown");
    }
    function showMenuDataHora(button) {
        mountWindowCalendar(button);
        configureCalendar();
        $("#inputDate").val(moment().format("DD/MM/YYYY"));
        $("#inputTime").val(moment().format("HH:mm"));
    }
    function mountToolBar() {
        var trelloBar = new window.TrelloUI.TrelloToolBar(null, "Integração", $(".window-sidebar")[0]);
        trelloBar.AddButton("btTeste","Iniciar", showMenuDataHora);
    }
    trelloWeb.prototype.UpdateStatusButton = updateStatusButton;
    trelloWeb.prototype.AddToolBar = function() {
        mountToolBar();
        updateCardInformation(cartaoAtual, function (cartaoAtualizado) {
            cartaoAtual = cartaoAtualizado;
            updateStatusCard(cartaoAtualizado);
        });
    }
    window.TrelloWeb = trelloWeb;
})(window);
