alert("MEOW");
imgID = 1;

function nextImg(){
  img = document.getElementById("projects");
	if (imgID == 1) {
    img.innerHTML = '<img id="scratch-project" src="https://66.media.tumblr.com/e0b543cf376d7ad62f0ad660a70f9ae7/tumblr_puskds4ksa1vivqxao1_540.jpg" alt= "Here is a series of cat photos. Press the up arrow key and enter to go to the next photo.">';
    imgID = 2;
  }
    else if(imgID == 2){
      img.innerHTML = '<img id="scratch" src="https://66.media.tumblr.com/a347f6e83c19f4e4636307b8c46553f8/tumblr_pusoqaDrGr1vivqxao6_400.jpg" alt= "Gazpacho is a big fluffy cat. His tail, ears, and legs are dark. His body and paws are light. ">';
      imgID = 3

	} else if(imgID == 3){
    img.innerHTML = '<img id="scratch" src="https://66.media.tumblr.com/ca57361c16873a31921dee0123770183/tumblr_pusoqaDrGr1vivqxao1_540.jpg" alt = "He is very squishy and long">';
    imgID = 4

}else if(imgID == 4){
  img.innerHTML = '<img id="scratch" src="https://66.media.tumblr.com/f5d71f56a7cc41535f28b4a2a68dcfe8/tumblr_pusoqaDrGr1vivqxao2_400.jpg">';
  imgID = 5

}else if(imgID == 5){
  img.innerHTML = '<img id="scratch" src="https://66.media.tumblr.com/9e72c3d82a2e8737a4a4a5863f9c1688/tumblr_pusoqaDrGr1vivqxao3_400.jpg">';
  imgID = 6

}else if(imgID == 6){
  img.innerHTML = '<img id="scratch" src="https://66.media.tumblr.com/663cf1e0c96bd4d1a331f0808751efda/tumblr_pusoqaDrGr1vivqxao4_400.jpg">';
  imgID = 7

}else if(imgID == 7){
  img.innerHTML = '<img id="scratch" src="https://66.media.tumblr.com/a277ca8d2f4bf5637d89da54a14022d3/tumblr_pusoqaDrGr1vivqxao5_540.jpg">';
  imgID = 8

}

  else {
      img.innerHTML = '<img id="scratchproject" src="https://66.media.tumblr.com/3a04fdd41b175fe5ee33ef5c53203bc4/tumblr_puskds4ksa1vivqxao2_540.jpg">';
		    imgID = 1;
  }
}

function next() {
  img = document.getElementById("continue");
    nextImg()
}
