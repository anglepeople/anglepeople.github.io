$(function(){
    //�ױ���չ��
    var onOff = true;
    $("#onOff").click(function() {
        if(onOff){
            $(".flink ").animate({height:43})
        }else {
            $(".flink ").animate({height:108})
        }
        onOff = !onOff;
    })
})
