require('./bootstrap');

let onlineUsersLength = 0;

window.Echo.join(`online`)
    .here((users) => {

        onlineUsersLength = users.length;

        if (onlineUsersLength > 1) {
            $('#no-online-users').css('display', 'none');
        }

        let userId = $('meta[name=user-id]').attr('content');

        users.forEach((user) => {
            if (user.id == userId) {
                return;
            }

        	$('#online-users').append(`<li class="list-group-item" id="user-${user.id}"><span class="dot"></span> ${user.name}</li>`);
        });
    })
    .joining((user) => {
        onlineUsersLength++;
        $('#no-online-users').css('display', 'none');
        $('#online-users').append(`<li class="list-group-item"id="user-${user.id}"><span class="dot"></span> ${user.name}</li>`);
    })
    .leaving((user) => {
        onlineUsersLength--;
        if(onlineUsersLength == 1) {
            $('#no-online-users').css('display', 'block');
        }
        $(`#user-${user.id}`).remove();
    });

$('#chat-text').keypress((e) => {
    if(e.which == 13) {
        e.preventDefault();
        let body = $(this).val();
        console.log(body)
    }
})