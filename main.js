
function myf(){
    var s = document.getElementById("stockId").value;//获取搜索框中的值

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
var url;
var stockId;
var stockF;
if(localStorage.getItem('stockF')){
    $('#stockId').val(localStorage.getItem("stockId"));
    $('#stockF').val(localStorage.getItem("stockF"));
}

$('.btn').click(function(){
    $(this).text('loading...').attr('disabled', 'disabled');
    stockF=$('#stockF').val();
    if(stockF=="港股"){
        url="http://apis.baidu.com/apistore/stockservice/hkstock";
    }
    if(stockF=="美股"){
        url="http://apis.baidu.com/apistore/stockservice/usastock";
    }
    if(stockF=="股票"){
        url="http://apis.baidu.com/apistore/stockservice/stock";
    }
    stockId=$('#stockId').val();
    if(stockId==""){
        alert("股票代码不能为空");
        $('.btn').text("查询").removeAttr("disabled");
        return;
    }
    console.log(stockId);
    localStorage.setItem('stockId',stockId);
    localStorage.setItem('stockF',stockF);
    $.ajax({
        url:url,
        type:"GET",
        data:{
            'stockid':stockId,
            'list':1
        },
        headers:{
            'apikey':'2eae391e139639cc1fa9e11d39518c72'
        },
        success:success,
        error:function(err){
            alert(err.Msg)
        }

    })
})
function success(data){
    $('.btn').text("查询").removeAttr("disabled");
    console.log(data);
    if(data.retData.stockinfo[0].name==""){
        alert("请输入正确的股票代码");
        return;
    }
    var html="";
    for(var i in data.retData.stockinfo[0]){
        html+="<div><label>"+i+":"+"</label><span>"+data.retData.stockinfo[0][i]+"</span></div>"
    }
    $('#pageBox2').html(html);
    $('#pageBox2').css('display','block');

}


