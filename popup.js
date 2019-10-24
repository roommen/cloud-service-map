$(function(){
    $('#name').keyup(function(){
        $('#hello').text('Hello, ' + $('#name').val());
    })
})
