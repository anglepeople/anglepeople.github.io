/**
 * Created by monologueH on 2017/7/30.
 */
/*侧边栏部分*/
var aRtDog_li = zhn(".rtDog_li")[0];
var aLogin = zhn(".user_login")[0];
var aRtCart_li = zhn(".rtCart_li")[0];
var aRtCart = zhn(".rtCart")[0];
var aRtCart_box = zhn(".rtCart_box")[0];
var aRtCart_num = zhn(".rtCart_num")[0];
var aI = zhn("i",aRtCart_num)[0];
var artQues = zhn(".rtQues")[0];
var artQues_box = zhn(".rtQues_box")[0];
var artQues_li = zhn(".rtQues_li")[0];
var artOnline_Ques = zhn(".rtOnline_Ques")[0];
var artOrder_li = zhn(".rtOrder_li")[0];
var artOrder = zhn(".rtOrder")[0];
var artList = zhn(".rtList")[0];
var artHeart_li = zhn(".rtHeart_li")[0];
var artHeart_box = zhn(".rtHeart_box")[0];
var artHeart = zhn(".rtHeart")[0];
var artCode = zhn(".rtCode")[0];
var artCode_box = zhn(".rtCode_box")[0];
var artTop_box = zhn(".rtTop_box")[0];
var artDw_topBtn = zhn(".rtDw_topBtn")[0];



aRtDog_li.onmouseover = function (){
    aLogin.style.display = "block";
    this.style.background = 'url("img/bar_newhover.png") no-repeat -2px -238px';
    this.style.backgroundColor = "#555";

}
aRtDog_li.onmouseout = function (){
    aLogin.style.display = "none";
    this.style.background = 'url("img/bar_new.png") no-repeat -2px -238px' ;
}
aRtCart_li.onmouseover = function (){
    aRtCart_box.style.display = "block";
    aRtCart.style.background = 'url("img/bar_newhover.png") no-repeat -2px -272px';
    this.style.backgroundColor = "#555";
    aRtCart_num.style.color = "#fff";
    aI.style.background = "#fff";
}
aRtCart_li.onmouseout = function (){
    aRtCart_box.style.display = "none";
    aRtCart.style.background = 'url("img/bar_new.png") no-repeat -2px -272px';
    this.style.backgroundColor = "#444";
    aRtCart_num.style.color = "#a29894";
    aI.style.background = "#a29894";
}
artQues_li.onmouseover = function (){
    this.style.background = "#555";
    artOnline_Ques.style.color = "#fff";
    artQues.style.background = 'url("img/bar_newhover.png") no-repeat -0px -618px';
    artQues_box.style.display = "block";

}
artQues_li.onmouseout = function (){
    this.style.background = "#444";
    artOnline_Ques.style.color = "#a29894";
    artQues.style.background = 'url("img/bar_new.png") no-repeat -0px -618px';
    artQues_box.style.display = "none";
}
artOrder_li.onmouseover = function (){
    artList.style.background = 'url("img/bar_newhover.png") no-repeat -2px -306px';
    artList.style.backgroundColor = "#555";
    artOrder.style.display = "block";
}
artOrder_li.onmouseout = function (){
    artList.style.background = 'url("img/bar_new.png") no-repeat -2px -306px';
    artList.style.backgroundColor = "#444";
    artOrder.style.display = "none";
}
artHeart_li.onmouseover = function (){
    artHeart_box.style.display = "block";
    artHeart.style.background = 'url("img/bar_newhover.png") no-repeat -2px -375px';
    artHeart.style.backgroundColor = "#555";
}
artHeart_li.onmouseout = function (){
    artHeart_box.style.display = "none";
    artHeart.style.background = 'url("img/bar_new.png") no-repeat -2px -375px';
    artHeart.style.backgroundColor = "#444";
}
artCode.onmouseover = function (){
    artCode_box.style.display = "block";
}
artCode.onmouseout = function (){
    artCode_box.style.display = "none";
}
artDw_topBtn.onmouseover = function (){
    artTop_box.style.display = "block";
}
artDw_topBtn.onmouseout = function (){
    artTop_box.style.display = "none";
}



