$(function () {
    //Init scripts
    // console.log("Loaded !");

    //actNow-modal
    $('#actNow').on('change', function () {
        // alert('Model shown');
        if ($(this).val() > 0) {
            $('#actNow-modal').modal('show');
        }
    });

    //resource-modal
    $('.resourceLink').on('click', function (e) {
        $('#resource-modal').modal('show');
    });

    $('#resourceType').on('change', function (e) {
        // alert()
        $('.dummyList-one').toggle({ easing: 'swing' });
        $('.dummyList-two').toggle({ easing: 'swing' });
    });

    //Alert section, list-group behaviour
    $('#alerts-list a').on('click', function (e) {
        e.preventDefault()
        $(this).tab('show')
    })
})