/**
 * Created by Administrator on 2017/1/29.
 */
function home($scope){

        new Swiper(".swiper-o", {
            /* Բ��*/
            pagination: ".home-box",
            /*��������*/
            direction: "horizontal",
            /* ����ѭ��*/
            loop: true,
            /*Բ��ɵ��*/
            paginationClickable: true,
            /*�Զ��ֲ�*/
            autoplay: 1000,
            /*�Ƿ���ָ����Ч��*/
            touchRatio: 1
        })
}

angular.module("myApp")
    .controller("home",home)