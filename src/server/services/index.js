import firebase from '../../db'

//Creates new post
export const createNewPost = (post) => new Promise(
    (resolve, reject) => {
        firebase.ref('/posts').push(
            {
                message: post.message,
                author: post.author,
                creationDate: new Date().toString(),
                rates: 0
            }
        ).then(() => resolve())
            .catch(() => reject())
    }
)

//Get all posts inside db
export const getAllPosts = () => new Promise(
    resolve => {
        firebase.ref('/posts/').once('value', snap => resolve(snap.val()))
    }
)

//Find post and update him
export const ratePost = (postId) => new Promise(
    (resolve, reject) => {
        getPostById(postId)
            .then(res => {
                firebase.ref(`/posts/${postId}`)
                    .update({ rates: 1 + res.rates })
                    .then(() => resolve())
                    .catch(() => reject())
            })
            .catch(() => reject())
    }
)

//Find post by id
const getPostById = (postId) => new Promise(
    (resolve, reject) => {
        firebase.ref(`/posts/${postId}`)
            .once('value', snap => resolve(snap.val()))
            .catch(() => reject())
    }
)