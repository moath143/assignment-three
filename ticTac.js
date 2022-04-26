



let tic = [
  ['x', 'o', 'm'],
  ['o', 'o', 'o'],
  ['n', 'o', 'x']
]

let elementArray = []
let x = 'x'

let checkElement = (ele) => {
  console.log(ele)
  ele.map((item, index) => {
    item === x ? console.log(item) : console.log('false')
  })

}


let whoWin = () => {
  for (let i = 0; i < tic.length; i++){
    // console.log(tic[i])
    elementArray = tic[0]
  }
}

whoWin()
checkElement(elementArray)


