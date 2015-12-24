window.Models = window.Models || {};
(function (window) {
    var columnModel = function(data) {
        this.id = data ? data.id : null;
        this.name = data ? data.name : null;
    }
    window.Models.ColumnModel = columnModel;
})(window)