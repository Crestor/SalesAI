// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

//$(function () {
//    var placeholderElement = $('#modal-placeholder');

//    $('button[data-toggle="ajax-modal"]').click(function (event) {
//        var url = $(this).data('url');
//        $.get(url).done(function (data) {
//            placeholderElement.html(data);
//            placeholderElement.find('.modal').modal('show');
//        });
//    });



//    placeholderElement.on('click', '[data-save="modal"]', function (event) {
//        event.preventDefault();

//        var form = $(this).parents('.modal').find('form');
//        var actionUrl = form.attr('action');
//        var dataToSend = form.serialize();

//        $.post(actionUrl, dataToSend).done(function (data) {
//            var newBody = $('.modal-body' );
//            placeholderElement.find('.modal-body').replaceWith(newBody);

//            var isValid = newBody.find('[name="IsValid"]').val() == 'True';
//            if (isValid) {
//                placeholderElement.find('.modal').modal('hide');
//            }
//        });
//    });

//    placeholderElement.on('click', '[data-dismiss="modal"]', function () {
//        placeholderElement.find('.modal').modal('hide');
//    });
//});

// script.js

//


function change() {
    let SelectOutcome = document.getElementById("Outcome").value;
    let checkoutbtn = document.getElementById("CustomerDetailsCheckoutBtn");

    // Check if the selected outcome is "Meeting"
    if (SelectOutcome === "Meeting") {
        checkoutbtn.style.display = "none"; // Hide the button if the outcome is "Meeting"
    } else {

        checkoutbtn.style.display = "block";
    }
    outcomes();
}



function outcomes() {

    let suboutcomes = document.getElementById("Outcome").value;
    let container = document.getElementById("hideValuesOnSelect");
    let reappointment = document.getElementById("ReAppointmentDiv");
    if (suboutcomes === "Meeting") {
        container.style.display = "block";
        reappointment.style.display = "none";

        let salutation = document.getElementById("Salutation").value;
        let customerName = document.getElementById("ContactPersonName").value;
        var ContactPerson=document.getElementById("ContactPerson").value = salutation + " " + customerName;

        //var ContactPerson = document.getElementById('ContactPerson').value;
        var CustomerName = document.getElementById('CustomerName').value;;
        var CustomerContactNumber = document.getElementById('CustomerContactNumber').value;
        //var CustomerGSTNumber = document.getElementById('CustomerGSTNumber').value;
        var CurrentLocation = document.getElementById('CurrLoc').value;
       

        var data = {
            CustomerName: CustomerName,
            ContactPerson: ContactPerson,
            CustomerContactNumber: CustomerContactNumber,
            CurrentLocation: CurrentLocation,
           // CustomerGSTNumber: CustomerGSTNumber,


        };
        $.ajax({
            type: "POST",
            url: "/Flow/UpdateNewCustomerMeetingDetails",
            data: data,
            success: function (response) {
                if (response.status) {

                 


                } else {
             

                    alert('Update failed Please refresh and Retry Again: ' + response.message);

                }
            },
            error: function (xhr, status, error) {
            

                console.error("Error: " + error);
                alert("An error occurred while updating the Route. " + xhr.responseText);
            }
        });



    } else if (suboutcomes === "No-Meeting") {

        reappointment.style.display = "block";
        container.style.display = "none";
    }
}



$(window).on('scroll', function (event) {
    if ($(this).scrollTop() > 600) {
        $('.back-to-top').fadeIn(200)
    } else {
        $('.back-to-top').fadeOut(200)
    }
});

//Animate the scroll to yop
$('.back-to-top').on('click', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: 0,
    }, 1500);
});



//Javascript for navigation bar , sidebar start

var x = window.matchMedia("(max-width: 414px)");

function SidebarBackgroundopen() {
    if (x) {
        const slide = document.querySelector(".slide");
        slide.style.display = "flex";
    }
    else {
        const sidebar = document.querySelector(".SidebarContainer");
        sidebar.style.display = "flex";
    }

}

function SidebarBackgroundclose() {
    if (x) {
        const slide = document.querySelector(".slide");
        slide.style.display = "none";
    }
    else {
        const sidebar = document.querySelector(".SidebarContainer");
        sidebar.style.display = "none";

    }
}
 
function shownotificationbar() {
    const notificationbar = document.querySelector(".notificationbar");
    notificationbar.style.display = "flex";
}
function closenotificationbar() {
    const notificationbar = document.querySelector(".notificationbar");
    notificationbar.style.display = "none";
}







// document.addEventListener("DOMContentLoaded", function ()) {

//     shownotificationbar();

// }

function dropdownOpen(event,Id2) {
    event.stopPropagation();
    /*let userPageList = document.getElementById(Id1);*/
    let insideList = document.getElementById(Id2);
  



    if (insideList.style.display === 'none' || insideList.style.display === '') {
       /* userPageList.style.display = 'block';*/

        insideList.style.display = 'block';


    } else {
        insideList.style.display = 'none';
    }


    document.querySelector("body").addEventListener("click", () => {
        insideList.style.display = 'none';
    });
    

}



function dropdownOpenDiv(event, Id2) {
    event.stopPropagation();
    /*let userPageList = document.getElementById(Id1);*/
    let insideList = document.getElementById(Id2);




    if (insideList.style.display === 'none' || insideList.style.display === '') {
        /* userPageList.style.display = 'block';*/

        insideList.style.display = 'block';


    } else {
        insideList.style.display = 'none';
    }



   


}


function datetime() {
    var abc = document.getElementById("ReAppointmentDate").value;
    console.log(abc);

    dt1 = new Date();
    dt2 = new Date(abc);
  
    if (dt2 < dt1) {
        alert("Wrong input enter time properly")

    }

    else {
        var x = diff_hours(dt1, dt2);
        var y = diff_minutes(dt1, dt2);
        //console.log(x);
        var z;
        z = x / 24;
        z = Math.abs(Math.round(z));
        x = x % 24;
        y = y % x;
        document.getElementById("abcd").innerHTML = `<p>${z} Days ${x} Hour and
	${y} Minutes for next meeting.
	</p>`;
        document.getElementById("abcd").style.color = "#30694F";
    }
}

function diff_hours(dt2, dt1) {

    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60);
    return Math.abs(Math.round(diff));

}

function diff_minutes(dt2, dt1) {

    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60);
    return Math.abs(Math.round(diff));

}



function GetDetails() {
    datetime();
    var date = document.getElementById("ReAppointmentDate").value;
    getTodayReappointments(date);
}


function getTodayReappointments(d) {

    $.noConflict();

    $.ajax({
        type: "GET",
        url: "/Flow/GetTodayAppointments",
        contentType: "application/json",
        data: { Date: d },
        success: function (receipts) {
            console.log("Success: ");

            let tableBody = document.getElementById("tbody");
            tableBody.innerHTML = "";
            $(receipts).each(function (index, item) {
                var seq = index + 1;


                const tr = document.createElement("tr");
                tr.innerHTML = `<td>${seq}</td>
                              <td>${new Date(item.reAppointmentDate).toLocaleDateString()}</td>
                                          <td>${item.appointmentTime.hour}:${item.appointmentTime.minute.toString().padStart(2, '0')}</td>
                                       <td>${item.customerName} </td>                                     
                                       <td>${item.area}</td>`;

                tableBody.appendChild(tr);
            });
            document.getElementById("DisplayRoutes").style.display = 'block';

        },
        error: function (xhr, status, error) {
            console.error("Error: " + error);
            console.log("Status: " + status);
            console.log("XHR: ", xhr);
            alert("An error occurred while fetching products. " + xhr.responseText);
        }
    });

}


