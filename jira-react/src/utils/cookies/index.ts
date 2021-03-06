//程序代码
export function setCookie(name:string,value:string,time:string ='h24')
{
    var strsec = getsec(time);
    var exp = new Date();
    exp.setTime(exp.getTime() + strsec*1);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toUTCString();
}
//读取cookies
export function getCookie(name:string):string | null
{
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
 
    if(arr=document.cookie.match(reg))
 
        return unescape(arr[2]);
    else
        return null;
}
//删除cookies
export function delCookie(name:string)
{
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null)
        document.cookie= name + "="+cval+";expires="+exp.toUTCString();
}
export function getsec(str:string) :number
{
   var str1=Number(str.substring(1,str.length));
   var str2=str.substring(0,1);
   if (str2==="s")
   {
        return str1*1000;
   }
   else if (str2==="h")
   {
       return str1*60*60*1000;
   }
   else if (str2==="d")
   {
       return str1*24*60*60*1000;
   } else {
       throw new Error('设置cookies过期时间错误')
   }
}
//这是有设定过期时间的使用示例：
//s20是代表20秒
//h是指小时，如12小时则是：h12
//d是天数，30天则：d30
