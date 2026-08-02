const users = require('./user_db')
const posts = require('../Post/post_db')
const comments = require('../Comment/comment_db')

function getUser(id)
{
	let result = users.find(user => user.id === id)
	let comments_by_this_user = comments.filter(comment => comment.userId === id)
	let number_of_comments_by_this_user = comments_by_this_user.length

	let posts_by_this_user = posts.filter(post => post.authorId === id)
	let number_of_posts_by_this_user = posts_by_this_user.length

	result.number_of_posts = number_of_posts_by_this_user
	result.number_of_comments = number_of_comments_by_this_user

	return result

}

module.exports = { getUser };