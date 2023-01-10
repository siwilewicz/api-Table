// post code country info API 
$('#btnRunOne').click(function() {

    $.ajax({
        url: "libs/php/postCodeInfo.php",
        type: 'POST',
        dataType: 'json',
        data: {
            country: $('#selCountry').val()
        },
        success: function(result) {

            console.log(result);

            if (result.status.name == "ok") {

                $('#txtCountryCode').html(result['data'][0]['countryCode']);
                $('#txtNumPostalCodes').html(result['data'][0]['numPostalCodes']);
                $('#txtMinPostalCode').html(result['data'][0]['minPostalCode']);
                $('#txtMaxPostalCode').html(result['data'][0]['maxPostalCode']);

            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // your error code
        }
    }); 

});


// // second API 
$('#btnRunTwo').click(function() {

    $.ajax({
        url: "libs/php/childrenInfo.php",
        type: 'POST',
        dataType: 'json',
        data: {
            geonameId: $('#selReg').val()
        },
        success: function(result) {

            console.log(JSON.stringify(result));

            if (result.status.name == "ok") {

                $('#txtCountryCodeTwo').html(result['data'][0]['countryCode']);
                $('#txtGeonameId').html(result['data'][0]['geonameId']);
                $('#txtLat').html(result['data'][0]['lat']);
                $('#txtLng').html(result['data'][0]['lng']);

            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // your error code
        }
    }); 

});



// third API
$('#btnRunThree').click(function() {

    $.ajax({
        url: "libs/php/neighboursInfo.php",
        type: 'POST',
        dataType: 'json',
        data: {
            geonameId: $('#selNeighbour').val()
        },
        success: function(result) {

            console.log(JSON.stringify(result));

            if (result.status.name == "ok") {

                $('#txtToponymName').html(result['data'][0]['toponymName']);
                $('#txtGeonameIdTwo').html(result['data'][0]['geonameId']);
                $('#txtcountryCodeThree').html(result['data'][0]['countryCode']);
                $('#txtLatTwo').html(result['data'][0]['lat']);
                $('#txtLngTwo').html(result['data'][0]['lng']);

            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // your error code
        }
    }); 

});