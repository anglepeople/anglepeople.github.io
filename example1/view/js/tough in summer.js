/**
 * Created by monologueH on 2017/7/31.
 */
//视频部分
var aVideo = zhn("#dogVideo");
var aPlayBtn = zhn("#playBtn");

aPlayBtn.onclick = function (){
    aVideo.play();
    aVideo.controls = "controls";
    aPlayBtn.style.display = "none";
    
}
//侧边导航部分
var oSn_oUl = zhn("#sideNav_ul");
var oSn_oLi = zhn("li",oSn_oUl);
var osn_oA = zhn("a",oSn_oUl);

function changeColor(m){
    window.location.href = "#firMD"+(m+1);
    for(i=0;i<osn_oA.length;i++){
        osn_oA[i].style.backgroundColor = "#459d36";
    }
    osn_oA[m].style.backgroundColor = "#00aabb";
}
for(j = 0;j <osn_oA.length;j++){
    osn_oA[j].index = j;
    osn_oA[j].onclick = function (){
        console.log(this.index);
        changeColor(this.index);
    }
}

/*
osn_oA[0].onclick = function (){
    window.location.href = "#firMD"+2;
}*/
