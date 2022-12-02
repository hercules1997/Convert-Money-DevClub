const button = document.getElementById("btn");
const select = document.getElementById("current-select");

const dolar = 5.19;
const euro = 5.46;
const bitcoin = 0.000011;
const cardano = 1.66;
const pesoChileno = 169.3;
const pesoColombiano = 913.7;

//**CONVERSÃO DOS VALORES */
const convertValues = () => {
    const input = document.getElementById("input-real").value;
    const realValueText = document.getElementById("real-value-text");
    const currencyValueText = document.getElementById("currency-value-text");

    realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(input);

    if (select.value === "US$ Dólar americano") {
        currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(input / dolar);
    }

    if (select.value === "Є Euro europeu") {
        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(input / euro);
    }

    if (select.value === "฿ Bitcoin") {
        currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
        }).format(bitcoin * input);
    }

    if (select.value === "Cardano") {
        currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "CAD",
        }).format(input / cardano);
    }

    if (select.value === "$ Peso Colombiano") {
        currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "COP",
        }).format(input * pesoColombiano);
    }

    if (select.value === "CLP$ Peso Chileno") {
        currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "CLP",
        }).format(input * pesoChileno);
    }
};

//*TROCAS DAS IMAGENS E TEXTOS */
const changeCurrency = () => {
    const currentName = document.getElementById("currency-name");
    const currentImg = document.getElementById("currency-img");

    if (select.value === "Є Euro europeu") {
        currentName.innerHTML = "Є Euro";
        currentImg.src = "./assets/img/euro.png";
    }

    if (select.value === "US$ Dólar americano") {
        currentName.innerHTML = "Dólar americano";
        currentImg.src = "./assets/img/eua.png";
    }

    if (select.value === "฿ Bitcoin") {
        currentName.innerHTML = "฿ Bitcoin";
        currentImg.src = "./assets/img/bitcoin.png";
    }

    if (select.value === "Cardano") {
        currentName.innerHTML = "Cardano";
        currentImg.src = "./assets/img/cad.png";
    }

    if (select.value === "$ Peso Colombiano") {
        currentName.innerHTML = "$ Peso Colombiano";
        currentImg.src = "./assets/img/colombia.png";
    }
    if (select.value === "CLP$ Peso Chileno") {
        currentName.innerHTML = "CLP$ Peso Chileno";
        currentImg.src = "./assets/img/chile.png";
    }
    convertValues();
};

button.addEventListener("click", convertValues);
select.addEventListener("change", changeCurrency);
