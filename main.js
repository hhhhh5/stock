/*
HCK 制作
*/
function myf(){
    var s = document.getElementById("gp").value;//获取搜索框中的值

    if(s.length!=0)
    {
        var reg = /^[\u4e00-\u9fa5^0-9]+$/;//只能输入中文和数字
        if(!reg.test(s))					//判断搜索框中是不是中文和数字
        {
            alert("请正确输入股票名或股票代码！")
        }
        else
        {

        }
    }
    else{
        alert("请输入股票名或股票代码！")
    }
}
