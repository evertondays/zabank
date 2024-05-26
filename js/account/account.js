const headers = getAuthHeaders();

async function depositar() {
  const valor = parseInt(document.getElementById("inputDepositar").value);
  await axios.post(
    "http://localhost:3333/api/user/deposit",
    { value: valor },
    headers
  );
}

async function sacar() {
  const valor = parseInt(document.getElementById("inputSacar").value);
  await axios
    .post("http://localhost:3333/api/user/withdraw", { value: valor }, headers)
    .catch((err) => {
      toast(ToastTypes.ALERT, err.response.data.message);
    });
}

async function getData() {
  await axios
    .get("http://localhost:3333/api/myself", headers)
    .then((response) => {
      document.getElementById("saldo").innerText = response.data.value;
    });
}
getData();
