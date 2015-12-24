window.ViewModel = window.ViewModel || {};
   (function (window) {
       var cardViewModel = function(data) {
           var self = this;
           this.id = data ? data.id : null;
           this.idShort = data ? data.idShort : null;
           this.shortLink = data ? data.shortLink : null;
           this.name = data ? data.name : null;
           this.commentList = data ? data.commentList : null;
           this.started = {
               get: function getStatusCard() {
                   if (self.commentList == undefined)
                       return false;
                   var list = self.commentList;
                   for (var i = list.length - 1; i >= 0; i--) {
                       var msg = list[i].text;
                       if ((msg == undefined) || (!msg.toLowerCase().startsWith(">iniciar") &&
                           !msg.toLowerCase().startsWith(">parar")))
                           list.splice(i, 1);
                   }
                   return list.length > 0 && list[0].text.startsWith(">iniciar");
               }

           }
       }
       window.ViewModel.CardViewModel = cardViewModel;
   })(window)