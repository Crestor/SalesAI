



function calculateDays() {
    const date1 = new Date(document.getElementById('date1').value);
    const date2 = new Date(document.getElementById('date2').value);


    if (isNaN(date1) || isNaN(date2) || date1 > date2) {
        document.getElementById('totalDays').innerHTML = "Please select valid dates.";
        return;
    }

    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    document.getElementById('totalDays').innerHTML = `Total days:  ${diffDays}`;
}

let savebtn = document.getElementById("save");
savebtn.addEventListener("click", (event) => {
    event.stopPropagation();
    let target = parseInt(document.getElementById("target").value);
    if (isNaN(target) || target < 0) {
        alert("Please enter a valid target amount.");
        return;
    }
    document.getElementById("totaltarget").innerText = 0;
    document.getElementById("standardPageTable").style.display = "block";
});

function remaining(event, id, id1) {
    let remain = parseInt(document.querySelector("#totaltarget").innerText);
    let userTarget = document.getElementById(id1);



    let finalTarget = parseInt(userTarget.value) + remain;
    console.log(finalTarget);
    document.querySelector("#totaltarget").innerText = finalTarget;



    //    ///update standard
    //    var territory = document.getElementById('Territory' + rowIndex);
    //    //var TerritoryName = PaymentModes.value;


    //    var username = document.getElementById('Usernmae' + rowIndex);
    //    var Usersname = PaymentsStatus.value;


    //    var Target= document.getElementById('Target' + rowIndex).value;
    //    var standard = {
    //        OrderID: OrderID,
    //        PaymentID: PaymentID,
    //        PaymentMode: paymentMode,
    //        PaymentStatus: paymentStatus,
    //        PaymentRecieved: paymentRecieved,
    //        BalanceAmount: balanceAmount,
    //        PaymentReference: billNo,
    //        customerName: customerName,
    //    };


    //    $.ajax({
    //        type: "POST",
    //        url: "/Order/UpdatePayment",
    //        data:standard,

    //        success: function (response) {
    //            alert("Payment updated successfully!");
    //            $('#PaymentTable').html(response.updatedTableHtml);

    //        },
    //        error: function (xhr, status, error) {
    //            console.error("Error: " + error);
    //            alert("An error occurred while updating the Payment. " + xhr.responseText);
    //        }
    //    });
    //}

}