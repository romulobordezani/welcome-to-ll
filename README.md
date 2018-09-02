![](public/android-chrome-192x192.png?raw=true)

[READ-ME](README-EN.md) in english.

**Bem vindo ao L.L**. é um simples teste de código que lista CEPs num Mapa do Google usando React, Redux e serviços Jsonp.

Disponível em: https://romulobordezani.github.io/welcome-to-ll/
 
Por favor, experimente também num celular usando o Chrome para conferir as funcionalidades de PWA adicionadas.

# Funcionalidades
- **Progressive Web App**
- Modo Offline 
- Salva as últimas buscas no localStorage
- Animado 
- Responsivo
- Usa Function Generators* nas requisições assíncronas
- SASS, BEM e Flex Box para formatar
- Normalizado com Normalize.css
- Não usa material-ui para deixar o app mais leve
- Campos de texto com máscaras para prevenir erros ao digitar CEPs
- Airbnb e Prettier para garantir a qualidade do código (com regras para fazê-los coexistirem sem conflitos)
- Snapshots testing
- Deploy usando gh-pages

# O que ainda gostaria de fazer, porém, não há tempo suficiente
- Adicionar Docker e CI CD via gitlab, entregando numa instância de AWS
- Server Side Render usando [Next.js](https://nextjs.org/)
- Um **Back-end For Front-end** middleware usando Node.js e Express, capaz de servir usando GraphQL
- Mockar as requests usando [fetch-mock](https://www.npmjs.com/package/fetch-mock) pra conseguir uma cobertura de testes maior
- Aprimorar o Jest com o Enzyme pra conseguir uma cobertura de testes maior usando simulações de eventos de usuário

# Como Instalar
```bash
yarn install
```


# Como rodar
```bash
yarn start
```

Pode acessar localmente em: [http://localhost:3000/](http://localhost:3000/)


# Como testar
```bash
yarn test
```
Nota: em Macs, talvez seja necessário atualizar o watchman para suportar o Jest mais recente.
```bash
brew install watchman
```

# Como rodar apenas o es-lint
```bash
yarn run lint
```

# Como corrigir o código automaticamente via prettier 
```bash
yarn run prettify
```

# Como fazer deploy no Google Pages
```bash
yarn run deploy
```

Esse projeto partiu do [Create React App](https://github.com/facebookincubator/create-react-app) e o arquivo original de instruções do CRA foi mantido em [CRA_README.md](CRA_README.md)

