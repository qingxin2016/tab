'use strict';

(function($){
    $.fn.mytab=function(options){
        
        var config=$.extend({
            key:'.tab-key',
            con:'.tab-con',
            classname:'active'
        },options);
        
        var setting=$.extend({},config,options);
        var action={
            change:function(){
                var index=$(this).index();
                $(this).addClass(setting.classname).siblings().removeClass(setting.classname);
                $(this).parent().parent().next().find('dd').eq(index).show().siblings().hide();
            },
            default:function(){
               $(setting.con).find('dd:first-child').show();
               $(setting.key).find('li:first-child').addClass(setting.classname);
            }
        };
        
        return this.each(function(){
            action.default();
            $(this).children(setting.key).find('li').click(action.change);
        });
    };
    
}(jQuery));

