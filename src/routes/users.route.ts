import { NextFunction, Request, Response, Router } from 'express';
import StatusCode from 'http-status-codes';

//configuração de rotas
const usersRoute = Router();

usersRoute.get('/users', (req:Request, res: Response, next: NextFunction) => {
    const users = [{ userName: 'Daniel'}];
    res.status(StatusCode.OK).send(users);
});

usersRoute.get('/users/:uuid', (req: Request<{uuid: string}>, res: Response, Next: NextFunction) => {
    const uuid = req.params.uuid;
    res.status(StatusCode.OK).send({uuid});
});

usersRoute.post('/users', (req: Request, res: Response, Next: NextFunction) => {
    const newUser = req.body;

    console.log(req.body);

    res.status(StatusCode.CREATED).send(newUser);
});

usersRoute.put('/users/:uuid', (req: Request<{uuid: string}>, res:Response, next:NextFunction) =>{
    const uuid = req.params.uuid;
    res.status(StatusCode.OK).send({uuid});
})

usersRoute.delete('/users/:uuid', (req: Request<{uuid: string}>, res:Response, next:NextFunction) => {
    res.sendStatus(StatusCode.OK);
});

export default usersRoute;