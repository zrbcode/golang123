import '~/styles/main.scss';
import '~/styles/article/articleDetail.scss';
import '~/js/common/default.js';
import Vue from 'vue';
import CommentsOfArticle from '~/js/components/article/CommentsOfArticle.vue';

import {
    registerDirective,
} from '~/js/utils/vue.js';

registerDirective(Vue);

new Vue({
    render: h => h(CommentsOfArticle),
}).$mount('#comments');

(function() {
    $('.meta-bottom .more-share').click(function() {
        var shareListPop = $('#shareListPop');
        shareListPop.show();
        var shareListPopWidth = shareListPop.width();
        var parentWidth = shareListPop.parent().width();
        var moreShareWidth = $(this).outerWidth();
        shareListPop.css({
            left: parentWidth - moreShareWidth / 2 - shareListPopWidth / 2,
            top: -shareListPop.height() - 2
        });
    });
}());