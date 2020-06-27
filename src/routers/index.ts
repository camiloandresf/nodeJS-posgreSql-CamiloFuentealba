import {Router} from 'express'
const router = Router();
import {getUsers, getUsersbyId, createUser,updateUsersbyId,deleteUsersbyId} from '../controllers/index.controller'

router.get('/users', getUsers)

router.get('/users/:id', getUsersbyId)
router.post('/users', createUser)
router.put('/users/:id', updateUsersbyId)
router.delete('/users/:id', deleteUsersbyId)

router.get('/test', (req, res) => res.send('test'))

export default router;