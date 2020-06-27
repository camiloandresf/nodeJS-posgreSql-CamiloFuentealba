import {Request, Response} from 'express'
import {QueryResult} from 'pg'

import {pool} from '../database'

export const getUsers = async (req: Request, res: Response): Promise<Response> => {
    try{
    const response: QueryResult = await pool.query('SELECT * FROM users')
    return res.status(200).json(response.rows)
    }
    catch(e){
        return res.status(500).json('Internal Server error')
    }
}

export const getUsersbyId = async (req: Request, res: Response): Promise<Response> => {
    try{
        const id = parseInt(req.params.id)
    const response: QueryResult = await pool.query('SELECT * FROM users WHERE id = $1', [ id ]  );

    return res.status(200).json(response.rows)
    }
    catch(e){
        return res.status(500).json('user not exists')
    }
}

export const createUser = async (req: Request, res: Response): Promise<Response> => {
    try{
        const {name, age, username} = req.body
        const response: QueryResult = await pool.query('INSERT INTO users (name,age,username) VALUES($1, $2, $3)', [ name, age, username ])
        return res.status(200).json({
            message:'User created Successfully'
        })
    }
    catch(e){
        return res.status(500).json('Internal Server error')
    }
}

export const updateUsersbyId = async (req: Request, res: Response): Promise<Response> => {
    try{
        const id = parseInt(req.params.id);
        console.log(id);
        const {name, age, username} = req.body;
        console.log(name, age, username);
        const response: QueryResult = await pool.query('UPDATE users SET name= $1 , age= $2, username = $3 WHERE id = $4', [ name, age, username, id ])
        console.log(response);
    return res.status(200).json('User '+ id +' update Successfully')
    }
    catch(e){
        return res.status(500).json('user not exists')
    }
}
export const deleteUsersbyId = async (req: Request, res: Response): Promise<Response> => {
    try{
        const id = parseInt(req.params.id)
        await pool.query('DELETE FROM users WHERE id = $1', [ id ]  );

    return res.status(200).json('User '+ id +' deleted Successfully')
    }
    catch(e){
        return res.status(500).json('user not exists')
    }
}