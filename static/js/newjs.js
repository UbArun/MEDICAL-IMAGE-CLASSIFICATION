$(document).ready(function () {
    // Init
    $('.image-section').hide();
    $('.loader').hide();
    $('#result').hide();

    // Function to preview the uploaded image
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#imagePreview').attr('src', e.target.result);
                $('.image-section').removeClass('d-none').show();
            }
            reader.readAsDataURL(input.files[0]);
        }
    }

    // Event listener for file input change
    $("#imageUpload").change(function () {
        $('#result').text(''); 
        $('#result').hide(); 
        $('#btn-predict').show();
        readURL(this);
    });

    // Function to Predict
    $('#btn-predict').click(function () {
        var form_data = new FormData($('#upload-file')[0]);

        $(this).hide();
        $('.loader').show();

        $.ajax({
            type: 'POST',
            url: '/upload',
            data: form_data,
            contentType: false,
            cache: false,
            processData: false,
            async: true,
            success: function (data) {
                $('.loader').hide();
                $('#result').fadeIn(600);
                $('#result').text(' Result:  ' + data);
                console.log('Success!');
            },
        });
    });
});
