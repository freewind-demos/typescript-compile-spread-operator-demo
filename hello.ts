const users = [{
  name: 'typescript'
}]

const users2 = users.map(it => ({
  ...it,
  age: 100
}))

console.log(users2)
