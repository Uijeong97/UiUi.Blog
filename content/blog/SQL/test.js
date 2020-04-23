submit = () => {
    var ans = new Array();
    for (var i = 0; i < 5; i++)
        ans.push($(`#n${i}`).val());
    console.log(ans)
    var ans = $('input:checkbox:checked')
    console.log(ans)
    $.ajax(
        'https://swmaestro-api.goorm.io/submit',
        {
            method: 'POST',
            data: {
                answers: JSON.stringify({ answers: ans })
            },
            success: function (data) {
                // Update Element
                if (data) {
                    console.log(data)
                } else {
                    console.log(data)
                }


            }
        },
    );
};