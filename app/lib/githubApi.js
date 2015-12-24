(function (window) {
    var gitHubApi = function() {
        this.githubKey = "991ada870e8557798a7bb51a72e2a9b47a9a0c93";
    }
    gitHubApi.prototype.GitHubAuth = function() {
        requestAjax.POST("https://github-oauth-proxy.jit.su", function(data, textStatus, jqXHR) {}, function(jqXHR, textStatus, errorThrown) {}
        );
    };

    gitHubApi.prototype.GitListPullRequests = function (organizacao, repositorio) {
        requestAjax.GET("https://api.github.com/repos/" + organizacao + "/" + repositorio + "/pulls", function(data, textStatus, jqXHR) {
            var o = new window.PullRequestModel(data[0]);
            console.log(o);
        }, function(jqXHR, textStatus, errorThrown) {
            alert("github api error");
        });
    };
    window.gitHubApi = gitHubApi;
})(window)


