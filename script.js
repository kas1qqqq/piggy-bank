const myPiggy = {
  value: 0,
  addMoney: function (income) {
    return (this.value += income)
  },
}
// console.log(myPiggy.addMoney(100) + `${' Rest:'} ${myPiggy.value}`)
// console.log(myPiggy.addMoney(30) + `${' Rest:'} ${myPiggy.value}`)

let output = document.querySelector('#output')
let plus = document.querySelector('#plus')
let five = document.querySelector('#five')
let ten = document.querySelector('#ten')
let fiveteen = document.querySelector('#fiveteen')
let crack = document.querySelector('#crack')
let getMoney = document.querySelector('#getMoney')
let piggy = document.querySelector('.piggy-bank')
plus.onclick = () => {
  output.innerHTML = `${myPiggy.addMoney(1)} ${'$'}`
  getMoney.style.display = 'none'
  output.classList.remove('greenBtn')
  output.classList.add('stockBtn')
  plus.classList.add('animate__animated', 'animate__pulse')
  plus.addEventListener('animationend', () => {
    plus.classList.remove('animate__animated', 'animate__pulse')
  })
  output.classList.add('animate__animated', 'animate__bounceIn')
  output.addEventListener('animationend', () => {
    output.classList.remove('animate__animated', 'animate__bounceIn')
  })
}
minus.onclick = () => {
  output.innerHTML = `${myPiggy.addMoney(-1)} ${'$'}`
  getMoney.style.display = 'none'
  output.classList.remove('greenBtn')
  output.classList.add('stockBtn')
  minus.classList.add('animate__animated', 'animate__pulse')
  minus.addEventListener('animationend', () => {
    minus.classList.remove('animate__animated', 'animate__pulse')
  })
  output.classList.add('animate__animated', 'animate__bounceIn')
  output.addEventListener('animationend', () => {
    output.classList.remove('animate__animated', 'animate__bounceIn')
  })
}
five.onclick = () => {
  output.innerHTML = `${myPiggy.addMoney(5)} ${'$'}`
  getMoney.style.display = 'none'
  output.classList.add('greenBtn')
  five.classList.add('animate__animated', 'animate__pulse')
  five.addEventListener('animationend', () => {
    five.classList.remove('animate__animated', 'animate__pulse')
  })
  output.classList.add('animate__animated', 'animate__bounceIn')
  output.addEventListener('animationend', () => {
    output.classList.remove('animate__animated', 'animate__bounceIn')
  })
}
ten.onclick = () => {
  output.innerHTML = `${myPiggy.addMoney(10)} ${'$'}`
  getMoney.style.display = 'none'
  output.classList.add('greenBtn')
  ten.classList.add('animate__animated', 'animate__pulse')
  ten.addEventListener('animationend', () => {
    ten.classList.remove('animate__animated', 'animate__pulse')
  })
  output.classList.add('animate__animated', 'animate__bounceIn')
  output.addEventListener('animationend', () => {
    output.classList.remove('animate__animated', 'animate__bounceIn')
  })
}
fiveteen.onclick = () => {
  output.innerHTML = `${myPiggy.addMoney(15)} ${'$'}`
  getMoney.style.display = 'none'
  output.classList.add('greenBtn')
  fiveteen.classList.add('animate__animated', 'animate__pulse')
  fiveteen.addEventListener('animationend', () => {
    fiveteen.classList.remove('animate__animated', 'animate__pulse')
  })
  output.classList.add('animate__animated', 'animate__bounceIn')
  output.addEventListener('animationend', () => {
    output.classList.remove('animate__animated', 'animate__bounceIn')
  })
}
crack.onclick = () => {
  getMoney.style.display = 'block'
  getMoney.innerHTML = `${'You get:'} ${myPiggy.value} ${'$'}`
  output.innerHTML = myPiggy.value = 0
  piggy.classList.add(
    'animate__animated',
    'animate__headShake',
    'animate__fast'
  )
  piggy.addEventListener('animationend', () => {
    piggy.classList.remove(
      'animate__animated',
      'animate__headShake',
      'animate__fast'
    )
  })
  getMoney.classList.add(
    'animate__animated',
    'animate__bounceIn',
    'animate__fast'
  )
  getMoney.addEventListener('animationend', () => {
    getMoney.classList.remove(
      'animate__animated',
      'animate__bounceIn',
      'animate__fast'
    )
  })
}
