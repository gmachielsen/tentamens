"use strict"




////// klanttable ////////

function sendKlant() {

  const klantnaam = document.getElementById('klantnaam').value;
  const newGuest = { klantnaam: klantnaam };

  const xhttp = new XMLHttpRequest();
  const url = 'http://localhost:3000/api/klant';

  xhttp.open("POST", url);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send(JSON.stringify(newGuest));

  xhttp.onreadystatechange = () => {
    if (xhttp.readyState === 4 && xhttp.status == 200) {
      getKlant();
    }
  }
}

function getKlanten() {
  document.getElementById('klanttable').innerHTML = "";

  const xhttp = new XMLHttpRequest();
  const url = 'http://localhost:3000/api/klant';

  xhttp.open('GET', url);
  xhttp.send();

  xhttp.onreadystatechange = (result) => {
    if (xhttp.readyState === 4 && xhttp.status === 200) {
      const jsonResult = JSON.parse(xhttp.responseText);
      jsonResult.forEach(element => {

        let table = document.getElementById('klanttable');
        let insertRow = table.insertRow();

        for (let key in element) {
          let cell = insertRow.insertCell();
          cell.innerHTML = element[key];
        }
      });
    }
  }
}

  function getKlantById() {
    const id = document.getElementById("KlantId").value;

    const xhttp = new XMLHttpRequest();
    const url = 'http://localhost:3000/api/klant/' + id;


    xhttp.open('GET', url);
    xhttp.send();
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4 && xhttp.status === 200) {
        const jsonResult = JSON.parse(xhttp.responseText);
        jsonResult.forEach(element => {
          let table = document.getElementById('klantByIdTable');
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
    const id = +document.getElementById("klantId").value;
    const xhttp = new XMLHttpRequest();
    const url = "http://localhost:3000/api/klant/" + id;
    console.log(url);

    xhttp.open("DELETE", url);
    console.log(url);
    xhttp.send();
    //reset contactinfos
  }

  function putKlantById() {
    const id = +document.getElementById('klantId1').value;
    const klantnaam = document.getElementById('klantnaam1').value;


    const newKlantById = {
      id: id,
      klantnaam: klantnaam
    }

    const xhttp = new XMLHttpRequest();
    const url = "http://localhost:3000/api/klant/" + id;

    xhttp.open("put", url);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify(newKlantById));
}



////////////////////// end klant ////////





/////////////////// Tocht /////////////////


function sendTocht() {

  const boot_id = document.getElementById('boot_id').value;
  const klantid = document.getElementById('klantid').value;
  const starttijd = document.getElementById('starttijd').value;
  const eindtijd = document.getElementById('eindtijd').value;

  const newTocht = { boot_id: boot_id, klantid: klantid, starttijd: starttijd, eindtijd: eindtijd };

  const xhttp = new XMLHttpRequest();
  const url = 'http://localhost:3000/api/klant';

  xhttp.open("POST", url);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send(JSON.stringify(newTocht));

  xhttp.onreadystatechange = () => {
    if (xhttp.readyState === 4 && xhttp.status == 200) {
      getKlant();
    }
  }
}

function getTochten() {
  document.getElementById('tochttable').innerHTML = "";

  const xhttp = new XMLHttpRequest();
  const url = 'http://localhost:3000/api/tocht';

  xhttp.open('GET', url);
  xhttp.send();

  xhttp.onreadystatechange = (result) => {
    if (xhttp.readyState === 4 && xhttp.status === 200) {
      const jsonResult = JSON.parse(xhttp.responseText);
      jsonResult.forEach(element => {

        let table = document.getElementById('tochttable');
        let insertRow = table.insertRow();

        for (let key in element) {
          let cell = insertRow.insertCell();
          cell.innerHTML = element[key];
        }
      });
    }
  }
}

  function getTochtById() {
    const id = document.getElementById("TochtId").value;

    const xhttp = new XMLHttpRequest();
    const url = 'http://localhost:3000/api/tocht/' + id;


    xhttp.open('GET', url);
    xhttp.send();
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4 && xhttp.status === 200) {
        const jsonResult = JSON.parse(xhttp.responseText);
        jsonResult.forEach(element => {
          let table = document.getElementById('tochtByIdTable');
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
  function deleteTochtById() {
    const id = +document.getElementById("tochtId").value;
    const xhttp = new XMLHttpRequest();
    const url = "http://localhost:3000/api/klant/" + id;
    console.log(url);

    xhttp.open("DELETE", url);
    console.log(url);
    xhttp.send();
    //reset contactinfos
  }

  function putTochtById() {

    const id = document.getElementById('boot_id1').value;
    const boot_id = document.getElementById('boot_id1').value;
    const klantid = document.getElementById('klantid1').value;
    const starttijd = document.getElementById('starttijd1').value;
    const eindtijd = document.getElementById('eindtijd1').value;

    const newTochtById = { id: id, boot_id: boot_id, klantid: klantid, starttijd: starttijd, eindtijd: eindtijd };


    const xhttp = new XMLHttpRequest();
    const url = "http://localhost:3000/api/tocht/" + id;

    xhttp.open("put", url);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify(newTochtById));
}


/////////////////////  einde tocht /////////////////////

/////////////    boot /////////////////
