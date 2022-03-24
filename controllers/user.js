const {response, request} = require('express');//só para facilitar a ajuda do Visual Studio

const userGet = (req = request, res = response) => {

    const {name, age, page = 1, limit} = req.query;

    res.json({
        msg: 'get API - controller',
        name,
        age,
        page,
        limit
    })
}

const userPost = (req = request, res = response) => {

    const {name, age} = req.body;

    res.json({
        msg: 'post API - controller',
        name,
        age
    })
}

const userPut = (req = request, res = response) => {

    const {id} = req.params;

    res.json({
        msg: 'put API - controller',
        id
    })
}

const userPatch = (req = request, res = response) => {
    res.json({
        msg: 'patch API - controller'
    })
}

const userDelete = (req = request, res = response) => {
    res.json({
        msg: 'delete API - controller'
    })
}


module.exports = {
    userGet,
    userPost,
    userPut,
    userDelete,
    userPatch
}