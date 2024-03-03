// This file is used in development environment

db = db.getSiblingDB('listo')

db.createUser({
	user: 'user_listo',
	pwd: 'password_listo',
	roles: [
		{
			role: 'readWrite',
			db: 'listo',
		},
	],
})

db.createCollection('Company')
