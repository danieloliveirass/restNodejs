import express from 'express';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';

const app = express(); //instancia simples

//Configuração da aplicação
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//configuração de Rotas
app.use(statusRoute);
app.use(usersRoute);

/*
app.get('/status', (req: Request,res: Response,next: NextFunction) => {
    res.status(200).send({ foo: 'teste' });
}); //rota simples com calback na function 
*/

//Inicialização do servidor
app.listen(3000, () => {
    console.log('Aplicação rodando na pornta 3000!');
});// escute na porta 3000