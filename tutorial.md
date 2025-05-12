# Tutorial Progressivo: Criando um Recomendador de Filmes com p5.js 🎬

Este tutorial foi feito para alunos do 1º ano do ensino médio que estão começando na programação. Você vai desenvolver um projeto completo de recomendação de filmes utilizando **p5.js**, com base na idade e preferências de gênero (fantasia, aventura).

---

## 🚀 Etapa 0 – Acessando o Ambiente p5.js

### Objetivo:
Conhecer e acessar o ambiente de desenvolvimento online do p5.js.

### O que é p5.js?
O **p5.js** é uma biblioteca de JavaScript voltada para programação criativa. É muito usada para criar desenhos, animações e projetos interativos direto no navegador.

### Acessando o editor:
1. Vá para [https://editor.p5js.org](https://editor.p5js.org)
2. Clique em **Registrar-se** ou **Entrar**
3. Crie um novo projeto e renomeie como `recomendador-filmes`
4. O editor já começa com duas funções básicas:

```js
function setup() {
  // configurações iniciais, roda uma vez
}

function draw() {
  // desenha o que aparece na tela, roda o tempo todo
}
```

---

## 🧱 Etapa 1 – Criando a Tela

### Objetivo:
Exibir uma tela básica com `createCanvas`.

### Código:
```js
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
```

### Resultado Esperado:
Uma área cinza de 400x400 pixels no centro da tela.
---

## ⌨️ Etapa 2 – Campo de Idade e Primeira Recomendação

### Objetivo:
Adicionar um campo de entrada para idade e mostrar recomendações simples.

### Código:
```js
let campoIdade;

function setup() {
  createCanvas(400, 400);
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
    } else {
      return "As aventuras de Pi";
    }
  } else {
    return "A viagem de Chihiro";
  }
}
```

---

## ✅ Etapa 3 – Adicionando Preferência por Fantasia

### Objetivo:
Permitir que o usuário indique se gosta de fantasia.

### Código:
```js
let campoIdade;
let campoFantasia;

function setup() {
  createCanvas(400, 400);
  campoIdade = createInput("15");
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
    } else {
      if (gostoDeFantasia){
        return "As aventuras de Pi";
      } else {
        return "Depois da chuva";
      }
    }
  } else {
    if (gostoDeFantasia){
      return "A viagem de Chihiro";
    } else {
      return "O feitiço do tempo";
    }
  }
}
```

---

## 🎨 Etapa 4 – Melhorando a Aparência

### Objetivo:
Ampliar a tela, alinhar o texto, mudar fonte e fundo.

### Código:
```js
function setup() {
    createCanvas(800, 400);
    createSpan("Sua idade:");
    campoIdade = createInput("5");
    campoFantasia = createCheckbox(" Gosta de fantasia?");
}

function draw() {
    background("white");
    let idade = campoIdade.value();
    let gostaDeFantasia = campoFantasia.checked();
    let recomendacao = geraRecomendacao(idade, gostaDeFantasia);

    fill(color(76, 0, 115));
    textAlign(CENTER, CENTER);
    textSize(38);
    text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia) {
    if (idade >= 10) {
        if (idade >= 14) {
            return "O menino que descobriu o vento";
        } else {
            if (gostaDeFantasia) {
                return "As aventuras de pi";
            } else {
                return "Depois da chuva";
            }
        }
    } else {
        if (gostaDeFantasia) {
            return "A viagem de chihiro";
        } else {
            return "O feitiço do tempo";
        }
    }
}
```

---

## 🚀 Etapa 5 – Mais Gêneros e Estilização Final

### Objetivo:
Adicionar preferência por aventura e deixar a página com cara de aplicativo.

### Código:
```js
function setup() {
    createCanvas(800, 400);
    createElement("h2", "Recomendador de filmes");
    createSpan("Sua idade:");
    campoIdade = createInput("5");
    campoFantasia = createCheckbox(" Gosta de fantasia?");
    campoAventura = createCheckbox(" Gosta de aventura?");
}

function draw() {
    background("white");
    let idade = campoIdade.value();
    let gostaDeFantasia = campoFantasia.checked();
    let gostaAventura = campoAventura.checked();
    let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaAventura);

    fill(color(76, 0, 115));
    textAlign(CENTER, CENTER);
    textSize(38);
    text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "O menino que descobriu o vento";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Homem aranha: no aranhaverso";          
        } else {
         return "Ladrões de bicicleta";
        }
      } else {
        if (gostaDeFantasia) {
          return "As aventuras de pi";
        } else {
          return "Depois da chuva";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "A viagem de chihiro";
    } else {
      return "O feitiço do tempo";
    }
  }
}
```

### Estilo com CSS (em `style.css`)
```css
html, body {
  margin: 30px;
  background-color: rgb(221, 233, 251);
  font-family: Arial, sans-serif;
}
```

---

## 🎉 Parabéns!

Agora você tem um projeto completo com lógica, entrada de dados, estilização e personalização. Compartilhe com amigos e continue explorando o mundo da programação!
