function checkUser(userInput) {
    // data
    const users = [
        {
          firstName: 'Tony',
          email: 'tony@stark.com',
          password: 'iamironman'
        },
        {
          firstName: 'Steve',
          email: 'captain@hotmail.com',
          password: 'icandothisallday'
        },
        {
          firstName: 'Peter',
          email: 'peter@parker.com',
          password: 'enajyram'
        },
        {
          firstName: 'Natasha',
          email: 'natasha@gamil.com',
          password: '*parol#@$!'
        },
        {
          firstName: 'Nick',
          email: 'nick@shield.com',
          password: 'password'
        }
       ]

    // check if the user exist and correct
    const userResult = users.find( (account) =>
        account.email === userInput.email && account.password === userInput.password
    )

    return userResult

}

module.exports = checkUser
