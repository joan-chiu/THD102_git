$(function() {
  
    $.ajax({
        url: "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-007?Authorization=CWB-42202C07-5B65-4F72-A5F7-554E54C8000A&format=JSON&locationName=%E6%A1%83%E5%9C%92%E5%8D%80&elementName=T,Wx",
        type: "GET",
        dataType: "json",
        success: function(response) {
            console.log(response.records.locations[0].location[0]);

            console.log(response.records.locations[0].location[0].locationName);
            let path = response.records.locations[0].location[0]
            $('#city_name').html(response.records.locations[0].locationsName);
            $('#district').html(path.locationName);
            $('#tempture').html(path.weatherElement[0].time[0].elementValue[0].value + "&#176;");
            let j = 0;
            for(let i = 0; i < 10; i++){
                if(i % 2 == 0){ //只要偶數列 一天會有早晚兩個值 只抓一個值
                    let wx = path.weatherElement[1].time[i].elementValue[0].value;
                    if(wx.indexOf('晴') > -1 ){
                        $('.block').eq(j).find('img').attr('src','https://i.imgur.com/Shrg84B.png');
                    }
                    else if(wx.indexOf('雨') > -1){
                        $('.block').eq(j).find('img').attr('src','img/rain.png' );
                    }
                    else{
                        $('.block').eq(j).find('img').attr('src','https://i.imgur.com/BeWfUuG.png' );
                    }
                    $('.sub_tempture').eq(j).html(path.weatherElement[0].time[i].elementValue[0].value + "&#176;");
                    j++;
                }

            }
            // const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            // const html1 = `<div class="d-flex flex-column block"><small class="text-muted mb-0">`;
            // const html2 = `</small><div class="text-center"><img class="symbol-img" src="`;
            // const html3 = `"></div><h6><strong>`;
            // const html4 = `&#176;</strong></h6></div>`;
            // let week_html = '';
            // let tempture = response.records.locations[0].location[0].weatherElement[0].time[0].elementValue[0].value;
            // $('#city_name').html(response.records.locations[0].locationsName);
            // $('#district').html(response.records.locations[0].location[0].locationName);
            // $('#tempture').html(tempture + "&#176;");

            // let j = 0;
            // for (var i = 1; i < 10; i += 2) {
            //     let degree = response.records.locations[0].location[0].weatherElement[0].time[i].elementValue[0].value;
            //     console.log(degree);
            //     icon = (degree > 18) ? "https://i.imgur.com/Shrg84B.png" : "https://i.imgur.com/BeWfUuG.png";
            //     if (j < 5) {
            //         week_html = week_html + html1 + week[j] + html2 + icon
            //         week_html = week_html + html3 + degree + html4;
            //     }


            //     j++;
            // }
            // console.log(week_html);
            // $('#weekday').html(week_html);
        },

        error: function() {
            alert("ERROR!!!");
        }
    });
});