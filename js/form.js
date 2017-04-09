$('button').click(function() {
    location.href = "index.html";
});
$(function() {
    $("#client_phone").mask("(999) 999-99-99");
});

$(function() {
    $(':submit').click(sendForm);
});

function sendForm(e) {
  var form = document.querySelector('form');
  if (form.checkValidity()) {
        e.preventDefault();
        $.ajax({
                url: "https://formspree.io/alionka_g@mail.ru",
                method: "POST",
                data: {
                    name: $('#client_name').val(),
                    tel: $('#client_phone').val(),

                },
                dataType: "json"
            })
            .done(function() {
                $('form').html("Дякуємо!<br>Ми з Вами зв'яжемось у найкоротший термін");
            });
    }
}