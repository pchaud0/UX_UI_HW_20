//images
$("#pop").on("click", function() {
    $('#imagepreview').attr('src=images/persona.png', $('#imageresource').attr('src=images/persona.png')); // here asign the image to the modal when the user click the enlarge link
    $('#imagemodal').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
 });