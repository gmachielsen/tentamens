  let api = "http://localhost:3000/api/boot/";

$(document).ready(function () {
    initDataTable();



    // $(".btn").click(function () {
    //     getData(api);
    // });

    $(".btn").ready(function () {
        getData(api);
    });

    $(".btn-warning").click(function () {
        clear();
    });
});

function initDataTable() {

    columns = [
        { "data": "id" },
        { "data": "naamboot" },
        { "data": "capacity" },
        { "data": "beschikbaar" },
        {
            "render": function (data, type, row, meta) {
                // data : data for the cell
                // type seems to be the class of the table (e.g. display)
                // row seems to be the per iteration object (in this case a user)
                return `<a onclick="remove(${row.id});" title="Remove this table"> <i class="fa fa-pencil-alt">XXX ${row.id}</i> </a>`;
                // return '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Add</button>';
            }
        },
    ];

    // he guys, this is a jQuery Plugin
    let dataTable = $('#dataTable').DataTable({
        "order": [[0, "asc"]],
        "columns": columns
    });

    $('#dataTable tbody').on('click', 'tr', function () { // means ... when I click on
        console.log("entering");

       var bootData = dataTable.row(this).data();

          console.log(bootData);


          const xhttp = new XMLHttpRequest();
          const url = 'http://localhost:3000/api/boot/' + bootData.id;

         xhttp.open('GET', url);
         xhttp.send();
          xhttp.onreadystatechange = () => {
            if (xhttp.readyState === 4 && xhttp.status === 200) {
              const jsonResult = JSON.parse(xhttp.responseText);
              console.log("=>");
              console.log(jsonResult);
        //
            }
          }
        // });function modal
        });
}

function clear() {
    $("#dataTable").DataTable().clear();
    $("#dataTable").DataTable().columns.adjust().draw();
}

function getData(api) {
    $.get(
        {
            url: api,
            dataType: "json",
            success: function (data) {
                if (data) {
                    $("#dataTable").DataTable().clear();
                    for(let i=0; i < data.length; i++) {
                      if (data[i].beschikbaar == 1) {
                      data[i].beschikbaar = 'beschikbaar';
                    }

                    else {
                      data[i].beschikbaar = 'in bedrijf'
                    }
                  }
                }
                    $("#dataTable").DataTable().rows.add(data);
                    $("#dataTable").DataTable().columns.adjust().draw();
                    console.log(data[0].beschikbaar);
            }
        }

    );
}




function getDataAlternate(api) {

    // asynchronous REST GET
    $.get(api, function (data) {

        if (data) {
            $("#dataTable").DataTable().clear();
            $("#dataTable").DataTable().rows.add(data);
            $("#dataTable").DataTable().columns.adjust().draw();
        }
    });
}


$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-body input').val(recipient)
})

$('modalDeleteAndUpdate').on('show.bs.modal', function modalDeleteAndUpdate (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-body input').val(recipient)
})




"use strict"
function sendBoot() {

  const naamboot = document.getElementById('naamboot').value;
  const capacity = document.getElementById('capaciteit').value;
  // const beschikbaar = document.getElementById('beschikbaar').value;

  const newBoot = { naamboot: naamboot, capacity: capacity };

  const xhttp = new XMLHttpRequest();
  const url = 'http://localhost:3000/api/boot';

  xhttp.open("POST", url);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send(JSON.stringify(newBoot));

  xhttp.onreadystatechange = () => {
    if (xhttp.readyState === 4 && xhttp.status == 200) {
      getData(api);
    }
  }
  $("#naamboot").val('');
  $("#capaciteit").val('');
}


  function getBootById() {
    const id = bootData.id;

    console.log(id);
    // const id = document.getElementById("bootId").value;

    const xhttp = new XMLHttpRequest();
    const url = 'http://localhost:3000/api/boot/' + id;


    xhttp.open('GET', url);
    xhttp.send();
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4 && xhttp.status === 200) {
        const jsonResult = JSON.parse(xhttp.responseText);
        jsonResult.forEach(element => {
          let table = document.getElementById('bootByIdTable');
          let insertRow = table.insertRow();

          for (let key in element) {
            let cell = insertRow.insertCell();
            cell.innerHTML = element[key];
          }
        });
      }
    }
  }
  //DELETE FUNCTION
  function deleteKlantById() {
    const id = +document.getElementById("bootId").value;
    const xhttp = new XMLHttpRequest();
    const url = "http://localhost:3000/api/boot/" + id;
    console.log(url);

    xhttp.open("DELETE", url);
    console.log(url);
    xhttp.send();
    //reset contactinfos
  }

  function putBootById() {
    const id = document.getElementById("bootId1").value;
    const naamboot = document.getElementById('naamboot1').value;
    const capacity = document.getElementById('capaciteit1').value;
    const beschikbaar = document.getElementById('beschikbaar1').value;

    const newBootById = { naamboot: naamboot, capacity: capacity, beschikbaar: beschikbaar };


    const xhttp = new XMLHttpRequest();
    const url = "http://localhost:3000/api/boot/" + id;

    xhttp.open("put", url);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify(newBootById));
}



















// function getBoten() {
//   document.getElementById('boottable').innerHTML = "";
//
//   const xhttp = new XMLHttpRequest();
//   const url = 'http://localhost:3000/api/boot';
//
//   xhttp.open('GET', url);
//   xhttp.send();
//
//   xhttp.onreadystatechange = (result) => {
//     if (xhttp.readyState === 4 && xhttp.status === 200) {
//       const jsonResult = JSON.parse(xhttp.responseText);
//       jsonResult.forEach(element => {
//
//         let table = document.getElementById('boottable');
//         let insertRow = table.insertRow();
//
//         for (let key in element) {
//           let cell = insertRow.insertCell();
//           cell.innerHTML = element[key];
//         }
//       });
//     }
//   }
// }



// $('#dataTable tbody').on('click', 'tr', function () { // means ... when I click on
//       var bootData = dataTable.row(this).data();
//       router.navigate(["boot", bootData.id]); // rloman aanpasen dat ik de router niet hoef door te geven.
//     });
