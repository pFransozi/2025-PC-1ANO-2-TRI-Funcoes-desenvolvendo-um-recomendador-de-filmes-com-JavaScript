// fantasia, aventura, drama

// a viagem de chihiro, LIVRE, fantasia, aventura
// paddington, LIVRE, fantasia, aventura
// as aventuras de pi, 10, drama, fantasia, aventura
// depois da chuva, 10, drama
// guardiões da galáxia, 12, fantasia, aventura
// ladrões de bicicleta, 12, drama
// o menino que descobriu o vento, 14, drama

let campoIdade;

function setup() {
  createCanvas(400, 400);
  //É importante notar que o valor “15” indica que sempre quando iniciar o projeto, o valor 15 será o primeiro valor iniciado e que depois nós podemos alterar.
  campoIdade = createInput("15");
}

function draw() {
  background(220);
  let idade = campoIdade.value();
  let recomendacao = geraRecomendacao(idade);
  text(recomendacao, width/2, height/2);
}


function geraRecomendacao(idade){
  if (idade >= 10){
    if (idade >= 14){
      return "O menino que descobriu o vento";
    }else{
      return "As aventuras de Pi";
    }
  }else{
    return "A viagem de Chihiro";
  }
}