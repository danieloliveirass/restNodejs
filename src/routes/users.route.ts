import { NextFunction, Request, Response, Router } from 'express';
import StatusCode from 'http-status-codes';
import { DatabaseError } from 'pg';
import { nextTick } from 'process';
import userRepositoy from '../repositories/user.repositoy';

//configuração de rotas
const usersRoute = Router();

usersRoute.get('/users', async (req:Request, res: Response, next: NextFunction) => {
    const users = await userRepositoy.findAllUsers();
    res.status(StatusCode.OK).send(users);
});

usersRoute.get('/users/:uuid', async (req: Request<{uuid: string}>, res: Response, next: NextFunction) => {
    try {
        
        const uuid = req.params.uuid;
        const user = await userRepositoy.findById(uuid);
        res.status(StatusCode.OK).send(user);
    } catch(error){
        next(error);
    }
});

usersRoute.post('/users', async (req: Request, res: Response, Next: NextFunction) => {
    const newUser = req.body;

    const uuid = await userRepositoy.create(newUser);

    res.status(StatusCode.CREATED).send(uuid);
});

usersRoute.put('/users/:uuid', async (req: Request<{uuid: string}>, res:Response, next:NextFunction) =>{
    const uuid = req.params.uuid;
    const modifiedUser = req.body;
    
    await userRepositoy.update(modifiedUser);

    res.status(StatusCode.OK).send();
})

usersRoute.delete('/users/:uuid', async (req: Request<{uuid: string}>, res:Response, next:NextFunction) => {
    const uuid = req.params.uuid;
    await userRepositoy.remove(uuid);
    res.sendStatus(StatusCode.OK);
});

export default usersRoute;