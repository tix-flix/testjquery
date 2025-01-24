$.ajax({
    type: "GET",
    url: "/components/dataBase/services.json",
    success: function (response) {
        response.map(element => {
            let characterDiv = `
            <div class="contJs">
                <img class="imgjs" width="320" src="${element.image}">
                <div class="ss">
                    <h1 class="text">${element.name}</h1>
                    <h2 class="text">${element.price}</h2>
                </div>
            </div>`;

            $(".main__cont").append(characterDiv);
        });
    }
})
