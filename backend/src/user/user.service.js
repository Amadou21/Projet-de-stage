const { UserModel } = require('./user.model');

const create = async (user) => {
    user = await UserModel.create(user);
    return user;
}

const findAll = async () => {
    const users = await UserModel.findAll();
    return users;
}

const findById = async (id) => {
    const user = await UserModel.findOne({ where: { idUser:id } });
    console.log({ user });
    return user;
}

const update = async (id, user) => {
    await UserModel.update(user, { where: { idUser: id } });
}

const destroy = async (id) => {
    await UserModel.destroy({ where: { idUser: id } });
}


module.exports = {
    findAll, findById, create, update, destroy
}