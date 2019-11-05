
//Work with Onclick event

var divOne = document.getElementById('divOne');
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');


btn1.onclick = function () {
    divOne.style.backgroundColor = 'green';
    divOne.style.borderRadius = '0%'

}
btn2.onclick = function () {
    divOne.style.backgroundColor = 'red';
    divOne.style.borderRadius = '50%';
}
 btn3.onclick = function () {
    divOne.style.backgroundColor = 'red';
    divOne.style.fontSize = '20px';
    divOne.style.fontFamily = 'Arial';
    divOne.style.color = 'green';
    divOne.style.paddingTop ='40px';

 }
 divOne.onmouseover = function () {
     divOne.style.backgroundColor = 'Blue';
     divOne.style.transition = 'all 2s';
     divOne.style.borderRadius = '0%';
     divOne.style.marginTop = '200px';
     divOne.style.transform = 'rotate(45deg)';

 }

//Make a dynamic image garlley

var mainImage = document.getElementById('mainImage');
var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
var img4 = document.getElementById('img4');
img1.onmouseover = function () {
    var changeImg = img1.getAttribute('src');
    mainImage.setAttribute('src', changeImg);
}

img2.onmouseover = function () {
    var changeImg = img2.getAttribute('src');
    mainImage.setAttribute('src', changeImg);
}

img3.onmouseover = function () {
    var changeImg = img3.getAttribute('src');
    mainImage.setAttribute('src', changeImg);
}

img4.onmouseover = function () {
    var changeImg = img4.getAttribute('src');
    mainImage.setAttribute('src', changeImg);
}

var ImgData = ['img/6.jpg','img/7.jpg','img/8.jpg','img/9.jpeg'];
var index = 0;
 function slideShow() {
     var mainImg = document.getElementById('mainImage');
     mainImg.setAttribute('src',ImgData[index]);
     index++;
     if(index >= ImgData.length){
         index = 0;
     }
 }
 setInterval(slideShow ,1000);

// jquery Add two value input by form

   $('.he ').text('hello Jquery')

$('#btn').click(function () {
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    $('#fullName').val(firstName+" "+lastName);

})

// jquery code for dynamic show input value

$('#firstName').keyup(function () {
    var firstName = $('#firstName').val();
    $('#f1').text(firstName);
})

$('#lastName').keyup(function () {
    var lastName = $('#lastName').val();
    $('#f2').text(lastName);
})
$('#firstName,#lastName').keyup(function () {
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    $('#f3').text(firstName + " " + lastName);
})

// jquery Code for Design a div

$('#btn').click(function () {
    $('.my-div'). slideUp(1000);
})
$('#btn1').click(function () {
    $('.my-div').slideDown(1000);
})
$('#btn2').click(function () {
    $('.my-div').slideToggle();
})

// jquery Code for Slide show

$('#slideShow div:gt(0)').hide();
setInterval(function () {
    $('#slideShow div:first ').fadeOut(2000).next().fadeIn(2000).end().appendTo('#slideShow')
},2000)