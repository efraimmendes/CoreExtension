(function (window) {
    function request(type, url, success, error) {
        $.ajax({
            url: url,
            type: type,
            async: false,
            contentType: 'application/json',
            data: JSON.stringify({
                code: code
            }),
            dataType: 'json',
            success: success,
            error: error
        });
    }
    var requestAjax = function () { }
    requestAjax.prototype.GET = function(url, success, error) {
        request("GET", url, success, error);
    };
    requestAjax.prototype.POST = function(url, success, error) {
        request("POST", url, success, error);
    };
    requestAjax.prototype.PUT = function(url, success, error) {
        request("PUT", url, success, error);
    };

    window.requestAjax = requestAjax;
})(window);