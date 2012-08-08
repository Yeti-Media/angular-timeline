'use strict';

angular.module('Timeline', []).directive('ngTimeline', function() {
    return function(scope, element, attr){
       function updateTimeline(){
         if(element.attr('data-timelinetype') === 'append'){
           element.append(scope.$apply(attr.ngTimeline));
         } else {
           element.prepend(scope.$apply(attr.ngTimeline));
         }
       }
       function asyncUpdateTimeline(){    
         setTimeout(function() {
           updateTimeline();
           asyncUpdateTimeline();                 
         }, (1000 * parseInt(element.attr('data-refresh') || 1)));
       }
       asyncUpdateTimeline();
  };
});
