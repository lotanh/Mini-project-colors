const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
];

const realTime = () => {
  const inputBar = document.getElementById('search')
  const typing = inputBar.value
  console.log(typing)
  let arrRobot = robots.filter(robot => {
    let name = robot.name.toLocaleLowerCase()
    let userName = robot.username.toLocaleLowerCase()
    let result = typing.toLowerCase()
    return (name.startsWith(result) || userName.startsWith(result) || result == robot.id)
  })
  createElements(arrRobot)
}

const createElements = (arr) => {
  const robotContainer = document.getElementById('robot-box')
  robotContainer.innerHTML = '';
  arr.forEach(item => {
    var div = document.createElement('div');
    var divImg = document.createElement('div');
    div.classList.add('robot-cont');
    divImg.classList.add('img-div')
    var robotImg = document.createElement('img');
    var robotName = document.createElement('h4');
    var robotEmail = document.createElement('p');
    robotImg.src = item.image
    robotImg.classList.add('img-robot');
    divImg.appendChild(robotImg);
    robotName.innerText = item.name;
    robotEmail.innerText = item.email;
    divImg.appendChild(robotImg);
    div.appendChild(divImg);
    div.appendChild(robotName);
    div.appendChild(robotEmail);
    robotContainer.appendChild(div)
  })
}
createElements(robots)




