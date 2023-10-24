const urlViaCep = "https://viacep.com.br/ws"
const urlCepProfessor = 'http://172.16.35.155:3000/myceps';

async function cadastrar(e) {
    e.preventDefault();

    //preencimento de dados

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let cep = document.getElementById("cep").value;
    let endereco = document.getElementById("endereco").value;
    let numero = document.getElementById("numero").value;
    let cidade = document.getElementById("cidade").value;
    let estado = document.getElementById("estado").value;

    let objetoDados = {
        nome,
        email,
        cep,
        endereco,
        numero,
        cidade,
        estado
    };

    try {

        const promise = await fetch(`http://172.16.35.155:3000/contato`, {
            data: JSON.stringify(objetoDados),
            method: "post",
            headers: { "Content-type": "application/json" }
        });

        const dados = await promise.json();

    } catch (error) {

        console.log(error);

    }

    //validacao

}

async function buscarEndereco(cep) {
    const resource = `/${cep}/json/`
    console.log(`CEP: ${cep}`);

    console.log(resource);

    try {
        // const promise = await fetch(urlViaCep + resource);
        const promise = await fetch(`${urlCepProfessor}/${cep}`);

        const endereco = await promise.json();
        console.log(endereco);

        document.getElementById("endereco").value = endereco.logradouro
        document.getElementById("cidade").value = endereco.localidade
        document.getElementById("estado").value = endereco.uf
    } catch (error) {
        document.getElementById("not-found").innerText = error;
    }
}