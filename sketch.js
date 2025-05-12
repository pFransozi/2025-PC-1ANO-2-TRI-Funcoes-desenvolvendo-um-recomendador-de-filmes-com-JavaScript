// fantasia, aventura, drama

// a viagem de chihiro, LIVRE, fantasia, aventura
// paddington, LIVRE, fantasia, aventura
// as aventuras de pi, 10, drama, fantasia, aventura
// depois da chuva, 10, drama
// guardiões da galáxia, 12, fantasia, aventura
// ladrões de bicicleta, 12, drama
// o menino que descobriu o vento, 14, drama

let campoIdade;
let campoFantasia;

function setup() {
  createCanvas(400, 400);
  //É importante notar que o valor “15” indica que sempre quando iniciar o projeto, o valor 15 será o primeiro valor iniciado e que depois nós podemos alterar.
  campoIdade = createInput("15");
  //Lembre-se sempre que criar um elemento de visualização gráfica, você pode utilizar uma variável para armazenar as informações. Normalmente, essa variável é global.
  campoFantasia = createCheckbox("Gosta de Fantaria?");
}

function draw() {
  background(220);
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia);
  text(recomendacao, width/2, height/2);
}


function geraRecomendacao(idade, gostoDeFantasia){
  if (idade >= 10){
    if (idade >= 14){
      return "O menino que descobriu o vento";
    }else{
      if (gostoDeFantasia){
        return "As aventuras de Pi";
      }else{
        return "Depois da chuva";
      }
    }
  }else{
    if (gostaDeFantasia){
      return "A viagem de Chihiro";
    }else{
      return "O feitiço do tempo";
    }
  }
}