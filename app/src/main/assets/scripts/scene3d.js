let pic;
// make a btn for selecting pictures
let btn_select_pics = document.getElementById("select_pics_3d");
// make a btn for taking pictures
let btn_take_pics = document.getElementById("take_pics_3d");

let alertAlert = function(){
    alert('I was clicked');
}

// Add event listener for a click to go to Gallery or Files to select a picture
btn_select_pics.addEventListener('click', function(){
    pic = window.Android.pickupImage('99','99');
    // alert(pic);
    });

// Add event listener for a click to go to open camera
btn_take_pics.addEventListener('click', function(){
    // pic = window.Android.queryCamera('99','99');
    // alert();
    });


loadNewPicture(99,99,pic)

// invokeCamera, pickupImage, queryCamera
// createImageFile
// setItem
// getItem
// _uploadFile