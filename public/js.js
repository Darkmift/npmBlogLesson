var count = 1;
var globalData;

setTimeout(boop, 2000);

function boop() {
    $.get('http://localhost:3000/posts/', function(data) {
        globalData = data;
    }).done(function(data) {
        console.log(data);
        table = $('tbody');
        data.forEach(element => {
            table.append(
                $('<tr>').append(
                    $('<td>').text(element.from),
                    $('<td>').text(element.subject),
                    $('<td>').text(element.body).css({
                        "overflow": "scroll"
                    }),
                    $('<td>').text(element.date),
                ),
            );
            console.log(element.from);
        });
    });
}

$('#update').click(function() {
    setTimeout(boop, 2000)
});

// var nameStr = 'Name: ' + globalData.results[0].name.title + " " +
// globalData.results[0].name.first + " " + globalData.results[0].name.last;
// var addressStr = 'Address: ' + globalData.results[0].location.street;
// var phoneStr = 'phone: ' + globalData.results[0].phone;
// $('#name').text(nameStr.trim());
// $('#address').text(addressStr.trim());
// $('#phone').text(phoneStr.trim());
// saveToJson = {
// name: nameStr,
// address: addressStr,
// phone: phoneStr
// };