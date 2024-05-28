const headers = getAuthHeaders();

async function depositar() {
  const valor = parseInt(document.getElementById("inputDepositar").value);
  await axios.post(
    "http://localhost:3333/api/user/deposit",
    { value: valor },
    headers
  );

  document.getElementById("inputDepositar").value = null;
  getData();
}

async function sacar() {
  const valor = parseInt(document.getElementById("inputSacar").value);
  await axios
    .put(`http://localhost:3333/api/user/value/${valor}`, null, headers)
    .catch((err) => {
      toast(ToastTypes.ALERT, err.response.data.message);
    });

  document.getElementById("inputSacar").value = null;
  getData();
}

async function getData() {
  await axios
    .get("http://localhost:3333/api/myself", headers)
    .then((response) => {
      if (response.data.hasAccount == 0) window.location.href = '../user/index.html';
      document.getElementById("saldo").innerText = response.data.value;
    });
}

async function deletarConta() {
  await axios
    .delete("http://localhost:3333/api/user/account", headers)
    .then((response) => {
      window.location.href = '../user/index.html';
    });
}

getData();
