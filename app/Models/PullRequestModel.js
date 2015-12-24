window.Models = window.Models || {};
(function (window) {
    var pullRequestModel = function(data) {
        this._links = data.links;
        this.assignee = data.assignee;
        this.body = data.body;
        this.closed_at = data.closed_at;
        this.comments_url = data.comments_url;
        this.commits_url = data.commits_url;
        this.diff_url = data.diff_url;
        this.id = data.id;
    }
    window.Models.PullRequestModel = pullRequestModel;
})(window)