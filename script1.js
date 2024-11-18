function exibirInformacoes() {
    // Pegando os valores dos campos do formulário
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
  
    // Exibindo os valores nos spans da div de resultado
    document.getElementById("spanNome").textContent = `Nome: ${nome}`;
    document.getElementById("spanEmail").textContent = `Email: ${email}`;
    document.getElementById("spanTelefone").textContent = `Telefone: ${telefone}`;
    alert("Posso ajudar em mais Algo? ")  
}
  