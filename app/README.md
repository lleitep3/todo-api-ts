Playground Docker
===
# Objetivo
Containarizar minha aplicação.
# Roadmap
 - Entendendo o Docker:
  - Docker Engine;
  - Arquitetura do Docker;
  - Tecnologias que compõem o Docker;
 - Docker Commandline:
  - Baixando e utilizando uma imagem;
  - Rodando uma imagem no modo interativo;
  - Montando um volume;
  - Expondo uma porta;
 - Criando a sua imagem com `Dockerfile`:
  - Build da sua uma imagem;
  - Comandos : `FROM`, `RUN`, `ARG`,`ENV`, `ADD`, `WORKDIR` `CMD`, `ENTRYPOINT`;
  - Docker Hub;
 - Construindo com `docker-compose`:
  - Construindo seu ambiente;
  - Criando uma rede interna;

--------------------------------------------------------
### Pré-requisitos:
  - Conhecimentos básicos de linux
  - Conhecimentos básicos de bash command-line
  - Conhecimentos básicos de shell

--------------------------------------------------------
## 1 - Overview:
  - [Containers NÃO são VMs;](https://www.docker.com/resources/what-container)
  - [Docker Engine;](https://docs.docker.com/get-started/overview/#docker-engine)
  - [Arquitetura do Docker;](https://docs.docker.com/get-started/overview/#docker-architecture)
  - [Tecnologias que compõem o Docker;](https://docs.docker.com/get-started/overview/#the-underlying-technology)

--------------------------------------------------------
<!-- Docker_Commandline -->
## 2 - Docker Commandline:
  - Baixando e utilizando uma imagem;
  - Rodando uma imagem no modo interativo;
  - Montando um volume;
  - Expondo uma porta;

### Baixando e utilizando uma imagem;

**Verificando imagens locais**
```shell
$ docker images
$ docker images | grep 'node'
$ docker image rmi
```

**Baixar imagem:**
```shell
$ docker pull node:slim
```

**Rodar uma imagem:**
```shell
$ docker run node:slim
```


**Rodar uma imagem no modo interativo:**
```shell
$ docker run --name api-ts -it node:slim /bin/bash
```

**Rodar uma imagem no modo interativo com auto-remove:**
```shell
$ docker run --name my-api --rm -it node:slim /bin/bash
```

**Criando uma imagem e montando um volume:**
```shell
$ docker build -t image-api -v ${PWD}/api /app .
```

#### Referências:
  - [Command-line](https://docs.docker.com/engine/reference/commandline/docker/)

--------------------------------------------------------
## 3 - Dockerfile
  - Build da sua uma imagem;
  - Comandos : `FROM`, `RUN`, `ARG`,`ENV`, `ADD`, `WORKDIR` `CMD`, `ENTRYPOINT`;
  - Docker Hub;

**Criando uma imagem:**
```shell
$ docker build -t image-api .
```

**Criando uma imagem e montando um volume:**
```shell
$ docker build -t node-ts . --build-arg ENV='local'
  docker run -p 8000:8000 -v ${PWD}/api:/app  --rm -it --name minha-api-ts node-ts
```

#### Referências:
  - [CMD VS ENTRYPOINT](https://phoenixnap.com/kb/docker-cmd-vs-entrypoint)
  - [Docker and Node.js Best Practices](https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md)

--------------------------------------------------------
## 4 - Docker Compose (orquestrador de ambientes)
  - Comandos
  - Criando nosso ambiente

### Referências:
  - https://docs.docker.com/develop/develop-images/dockerfile_best-practices/

--------------------------------------------------------
### Comandos utilizados shell:
  - `touch` - *cria um arquivo vazio*
  - `mkdir` - *cria uma pasta*
  - `echo 'opa'` - *mostra uma string (como um console.log)*
  - `ls -la` - *lista os arquivos de uma pasta*
  - `pwd` - *mostra o path absoluto atual*
  - `${PWD}` - *variável de ambiente que com o valor do path absoluto atual*
  - `watch -n1 -e 'docker ps'` - *roda um comando a cada 1 segundo*
  - `chmod +x <caminho_do_arquivo>` - *altera a permissão de um arquivo para que ele seja executável*
  - `ln -s arquivo_origem link_destino` - *cria um link simbolico*

--------------------------------------------------------
### Tips to deep:
  - [Docker em 100 segundos](https://www.youtube.com/watch?v=Gjnup-PuquQ&list=PL0vfts4VzfNjTHIOupS8u9cxTYtz5RPYU)
  - [Docker Commands Cheat Sheet](https://phoenixnap.com/kb/list-of-docker-commands-cheat-sheet)
  - [Golden Image](https://blog.mycloudit.com/everything-you-need-to-know-about-golden-images)
  - [Curso de Shell Scripting](https://www.cursou.com.br/informatica/shell-scripting/)
  - [VSCode Remote develompent](https://github.com/Microsoft/vscode-remote-release)
  - [VSCode Remote development 2](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)
  - Sobre variações de imagens slim/alpine/...
    - [Alpine, Slim, Stretch, Buster, Jessie, Bullseye — What are the Differences in Docker Images?](https://medium.com/swlh/alpine-slim-stretch-buster-jessie-bullseye-bookworm-what-are-the-differences-in-docker-62171ed4531d)
    - [Um Mergulho em Imagens de Containers - Parte 1](https://blog.lsantos.dev/um-mergulho-em-imagens-de-containers-parte-1/)
    - [Um Mergulho em Imagens de Containers - Parte 2](https://blog.lsantos.dev/um-mergulho-em-imagens-de-containers-parte-2/)
