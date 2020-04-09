define([
    'jquery'
], function ($) {
    'use strict';

    return function (widget) {
        $.widget('mage.SwatchRenderer', widget, {
            _Rewind: function (controls) {
                controls.find('div[option-id], option[option-id]').removeClass('disabled').removeAttr('disabled');
                controls.find('div[option-empty], option[option-empty]')
                    .attr('disabled', true)
                    .addClass('disabled')
                    .attr('tabindex', '-1');
                this.helloWorld ()
            },
            helloWorld () {

                let list = $('.widget.block-products-list li');

                if (list.last().find($('[data-rendered]')).length) {
                    let arr = [],
                        maxHeight;

                    list.each(function () {
                        arr.push($(this).height());
                    });
                    maxHeight = Math.max(...arr);
                    list.height(maxHeight)
                }
            }
        });

        return $.mage.SwatchRenderer;
    }
});
