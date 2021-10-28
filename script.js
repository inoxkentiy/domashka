let btn = document.querySelector("#btn");

btn.addEventListener('click', function () {
    $.ajax({
        url: "https://randomuser.me/api/",
        method: "get",
        success: function (response) {
            listDiv = $("#list")
            console.log(response)
            listDiv.append(` <div class="info_block">
            <p> Телефон пользователя: ${response.results[0].cell}</p>
            <p> Возраст пользователя: ${response.results[0].dob.age}</p>
            <p> Почта пользователя: ${response.results[0].email}</p>
            <p> Город пользователя: ${response.results[0].location.city}</p>
            <p> Юзернэйм пользователя: ${response.results[0].login.username}</p>
            <p> Полное имя пользователя: ${response.results[0].name.title} ${response.results[0].name.last} ${response.results[0].name.first}</p>
            <p> Адрес пользователя: ${response.results[0].location.street.name} ${response.results[0].location.street.number}</p>
            <p> Фотография пользователя: <img src="${response.results[0].picture.large}"></p>
        </div>`)

        },
        error: function (response) {
            console.log("ошибка!")
        }
    })
})