function calcular() {
    const nome = document.getElementById("nome").value;
    const area = parseFloat(document.getElementById("area").value);
    const radiosServico = document.getElementsByName("tipo_serv");
    const radiosMensal = document.getElementsByName("serv_mensal");
  
    if (!nome || isNaN(area) || area <= 0) {
      alert("Preencha o nome e uma área válida.");
      return;
    }
  
    let tipoServico = null;
  
    for (const radio of radiosServico) {
      if (radio.checked) {
        tipoServico = radio.id; // usa o id para identificar o tipo de serviço
        break;
      }
    }
  
    if (tipoServico === null) {
      alert("Selecione um tipo de serviço.");
      return;
    }
  
    let mensalSelecionado = null;
    for (const radio of radiosMensal) {
      if (radio.checked) {
        mensalSelecionado = radio.value;
        break;
      }
    }
  
    if (mensalSelecionado === null) {
      alert("Informe se deseja serviço mensal.");
      return;
    }
  
    const valorBase = 10;
    let porcentagem = 0;
  
    // Aplica os acréscimos
    if (tipoServico === "poda") {
      porcentagem = 0.2;
    } else if (tipoServico === "corteGrama") {
      porcentagem = 0.5;
    } else if (tipoServico === "servCompleto") {
      porcentagem = 0.7; // 20% + 50%
    }
  
    const precoM2 = valorBase + (valorBase * porcentagem);
    let total = area * precoM2;
  
    if (mensalSelecionado === "simMensal") {
      total += 200; // adiciona valor fixo
    }
  
    const totalFormatado = total.toFixed(2).replace('.', ',');
  
    const tipoTexto = mensalSelecionado === "simMensal" ? "mensal" : "pontual";
  
    document.getElementById("resultado").innerText =
      `Olá ${nome}, o valor ${tipoTexto} do serviço é R$ ${totalFormatado}`;
  }
  