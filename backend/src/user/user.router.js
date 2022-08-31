const { Router } = require('express');
const service = require('./user.service');

const path = '/users';

const create = async (req, res) => {
    let user = req.body;
    console.log({ user });
    user = await service.create(user);
    res.json(user);
}

const findAll = async (req, res) => {
    const users = await service.findAll();
    res.json(users);
}

const findById = async (req, res) => {
    const id = +req.params.id;
    const user = await service.findById(id);
    res.json(user);
}

const update = async (req, res) => {
    let user = req.body;
    const id = +req.params.id;
    //const _user = await service.update(id, user);
    user = await service.update(id, user);
    res.json(user);
}

const destroy = async (req, res) => {
    const id = +req.params.id;
    //const _user = await service.update(id, user);
    user = await service.destroy(id);
    res.json(user);
}

const addRoutes = (app) => {
    const router = Router();

    router.post('/', create)
    router.put('/:id', update)
    router.delete('/:id', destroy)
    router.get('/:id', findById)
    router.get('/', findAll)

    app.use(path, router);
}

module.exports = {
    addRoutes
}