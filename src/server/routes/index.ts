import { Router } from 'express';
import {StatusCodes} from 'http-status-codes';
import {CidadesController} from './../controllers';
import { server } from '../Server';


const router = Router();

router.get('/', (req, res) => { 
	return res.send('Olá, Dev!'); 
});

router.post('/cidades', 
	CidadesController.createBodyValidator,
	CidadesController.createQueryValidator,
	CidadesController.create);
    
        


export {router};