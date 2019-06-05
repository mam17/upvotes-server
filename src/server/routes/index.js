import express from 'express'
import { createNewPost, getAllPosts, ratePost } from '../services'

const router = express.Router()

//ROUTER CONFIG
router.use(express.json({ type: '*/*' }))

//ROUTES
router.post('/posts/', (req, res) => {
    createNewPost(req.body)
        .then(result => res.status(200).send({ post: req.body, result }))
        .catch(() => res.status(200).send({ success: false }))

});

router.get('/posts/', (req, res) => {
    getAllPosts()
        .then(value => {
            let data = Object.keys(value).map(e => { return { id: e, post: value[e] } })
            //ORDENA POR DATA DE INCLUSAO!
            res.status(200).send(data.sort((a, b) => a.creationDate > b.creationDate ? -1 : 1))
        })
})

router.post('/posts/rate', (req, res) => {
    ratePost(req.query.id)
        .then(() => res.status(200).send({ success: true }))
        .catch(() => res.status(200).send({ success: false }))
})

export default router