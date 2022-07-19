import express from 'express';
import bearerAuthenticationMiddleware from './middlewares/bearer-authentication.middleware';
import errorHandler from './middlewares/error-handler.middleware';
import authorizationRoute from './routes/authorization.route';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';

const app = express(); //instancia simples

//Configuração da aplicação
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//configuração de Rotas
app.use(statusRoute);
app.use( bearerAuthenticationMiddleware,usersRoute);
app.use(authorizationRoute);


// Configuração de Handlers de Erro
app.use(errorHandler);

//Inicialização do servidor
app.listen(3000, () => {
    console.log('Aplicação rodando na pornta 3000!');
});// escute na porta 3000