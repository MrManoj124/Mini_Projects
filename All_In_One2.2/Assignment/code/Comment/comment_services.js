const comments = require('./comment_db')
const users = require('../User/user_db')

function getComments(id)
{
    let result = []

    comments.forEach(comment => {
        if (comment.postId === id)
        {
            let commentator = users.find(user => user.id === comment.userId)
            result.push({
                comment: comment.content,
                commentator: commentator.fullName

            })
        }
    })

    return result;
}

module.exports = { getComments }