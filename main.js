
$(document).ready(function() {
$('.autoclose').on('hidden.bs.modal', function() {
var $this = $(this).find('iframe'),
    tempSrc = $this.attr('src');
$this.attr('src', "");
$this.attr('src', tempSrc);
});


});


$(function () {
    var $target = $(document.location.hash);
    if ($target.length !== 0) {
        $target.collapse('show');
    }
});