describe("$flash", function() {
  var rootScope;
  var flash;
  var $injector = angular.injector(['ng', 'Notification']);

  beforeEach(function(){
    $injector.invoke(function($rootScope, $flash){
      rootScope = $rootScope;
      flash = $flash;
    });
  });

  it("should emit event:ngNotification",function(){
    spyOn(rootScope, '$emit').andCallThrough();
    flash.notify('info', 'message', 'element', 'callback');

    expect(rootScope.$emit).toHaveBeenCalledWith('event:ngNotification',
      {level: 'info', message: 'message', element: 'element', callback: 'callback'});
  });

 
});



describe("ngNotice", function() {
  var rootScope;
  var compile;
  var $injector = angular.injector(['ng', 'Notification']);

  beforeEach(function(){
    $injector.invoke(function($rootScope, $compile){
      rootScope = $rootScope;
      compile = $compile;
    });
  });


  it('should set ng-notice attribute to default when has no value',function(){
    element = '<div ng-notice></div>';
    element = compile(element)(rootScope);
    rootScope.$digest();
    expect(element.attr('ng-notice')).toEqual('default');
  });

  it('should not set ng-notice attribute when has a value',function(){
    element = '<div ng-notice="value"></div>';
    element = compile(element)(rootScope);
    rootScope.$digest();
    expect(element.attr('ng-notice')).toEqual('value');
  });



});
