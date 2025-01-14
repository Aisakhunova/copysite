jQuery(function($) {
    var $container = $('.sp-simpleportfolio-items');
    $(window).load(function() {
        var $sizer = $container.find('.shuffle__sizer');
        $container.shuffle({
            itemSelector: '.sp-simpleportfolio-item',
            sequentialFadeDelay: 150,
            sizer: $sizer
        });
    });
    $('.sp-simpleportfolio-filter li a').on('click', function(event) {
        event.preventDefault();



        var $self = $(this);
        var $this = $(this).parent();
        if ($this.hasClass('active')) {
            return;
        }

        $self.closest('ul').children().removeClass('active');
        $self.parent().addClass('active');
        $container.shuffle('shuffle', $this.data('group'));
        $container.shuffle('shuffle', $this.data('group'));
        console.log($this.data('group'))
    });

    $('.sp-simpleportfolio-filter li').eq(0).find('a').trigger('click')
});