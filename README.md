# ZaBank

O **ZaBank** é um banco digital inovador que oferece uma experiência bancária completa, simples, segura e focada no cliente. A proposta é simular um banco com o NuBank ou o Inter que possui conta e investimentos integrados em um único lugar, podendo criar conta fazer login, operações básicas de deposito / saque e editar seu avatar.

Ao entrar no site crie uma conta e aproveite!

## Como rodar a aplicação
Dentro da pasta do projeto, abra a pasta **api**. Nela rode:


```bat
npm run migrate
npm start
```
Pronto a api está disponível na porta 3333 e o front-end na porta 3000!

## Tecnologias
🎨 Utilizamos vanilla javascript e html/css puros para o front-end.

⚙️ No backend utilizamos [NodeJs](https://nodejs.org/en) com a biblioteca express para criar o servidor.

💾 Temos um banco de dados [SQLite](https://www.sqlite.org/) para guardar as informações.

🔑 Autenticação utilizando [Argon2](https://sierti.com.br/blog/argon2id-seguranca-senhas) para a criptografia de senhas.


## O que foi feito

**Alejandro** - *Conta bancaria:* Rotas de sacar e depositar (PUT) e buscar informações do usuário (GET)
**Eloiza** - *Investimentos:* Rotas de criar novo investimento (POST) e listar investimentos (GET)
**Everton** - *Landing page / perfil:* Rotas de login e criação de usuario (POST), editar avatar (PUT) e Deletar usuário (DELETE).