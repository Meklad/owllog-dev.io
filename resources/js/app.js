require('./bootstrap');

window.Echo.join(`online`)
    .here((users) => {
        let userId = $('meta[name=user-id]').attr('content');
        users.forEach((user) => {
            if (user.id == userId) {
                return;
            }

        	$('#online-users').append(`<li class="list-group-item" id="user-${user.id}"><span class="dot"></span> ${user.name}</li>`);
        });
    })
    .joining((user) => {
        $('#online-users').append(`<li class="list-group-item"id="user-${user.id}"><span class="dot"></span> ${user.name}</li>`);
    })
    .leaving((user) => {
        $(`#user-${user.id}`).remove();
    });