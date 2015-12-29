window.ViewModel = window.ViewModel || {};
   (function (window) {
       var cardViewModel = function (data) {
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
                   self.getOnlyValidComents(list);
                   return list.length > 0 && self.GetWorkPatern(msg) == "inicia";
               }

           }
       }
       function extractText(text, strRegex) {
           var reg = new RegExp(strRegex);
           var result = reg.exec(text);
           return result ? result[2] : "";
       }
       function getOnlyValidComents(list) {
           for (var i = list.length - 1; i >= 0; i--) {
               var msg = list[i].text;
               if ((msg == undefined) || (!this.GetWorkPatern(msg)))
                   list.splice(i, 1);
           }
       }
       cardViewModel.prototype.SetStatusCard = function () {
           if (this.commentList == undefined)
               return false;
           var list = cardViewModel.commentList;
           getOnlyValidComents(list);
           this.started = list.length > 0 && this.GetWorkPatern(msg) == "inicia";
       }
       cardViewModel.prototype.GetWorkPatern = function getWorkPatern(text) {
           return extractText(text, ">(\\s)*(para|inicia)");
       }
       window.ViewModel.CardViewModel = cardViewModel;
   })(window)