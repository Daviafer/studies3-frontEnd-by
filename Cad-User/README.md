### Processo do projeto:
Na pasta backend:
- npm init -y   = será criado o package.json
- npm i --save json-server@0.13.0 -E    = definindo dependência do json. -E = salvar diretamente no package.json.
- "scripts": { "start": "json-server --watch db.json --port 3001" },    =  alterar no package.json pra ficar monitorando o arquivo db.json na porta 3001
- npm start   = iniciando 