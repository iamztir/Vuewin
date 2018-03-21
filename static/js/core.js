var VUEWIN = (function(VUEWIN, $) {

    VUEWIN.init = function() {
        (function($) {
            $(function() {
                $(document).foundation({
                    abide: {
                        patterns: {
                            // YYYY-MM-DD HH:MM
                            datetime_simple: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31)) (0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9])(:[0-5][0-9])?$/,
                        }
                    },
                    topbar: {
                        mobile_show_parent_link: false
                    }
                });
            });
        }(jQuery));
    };

    /* CSRF */
    function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    VUEWIN.csrftoken = getCookie('csrftoken');

    return VUEWIN;

}(VUEWIN || {}, jQuery));

VUEWIN.init();
