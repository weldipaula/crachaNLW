// const socialLinks = document.getElementById('socialLinks')
const LinksSocialMedia = {
  github: 'weldipaula',
  youtube: 'c/RocketSeat',
  facebook: 'depaula1990',
  instagram: 'weldepaula',
  twitter: 'rocketseat'
}

function changeSocialMediaLink() {
  // of se refere ao ul no html que esta com id sociallinks
  // usando isso o for percorre de forma automatica
  // todos os item em ul, que são 4 neste caso
  for (let li of socialLinks.children) {
    //social recebe a classe do li no html
    const social = li.getAttribute('class')
    //troca os valores no html pelos dados dinamicos
    //o [0] é pq li tem 2 filhos, e quero pegar o href
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

//forma simplificada de acessar o ID do html
//sem utilizar getelementbyid ou similares
function trocaNome() {
  userName.textContent = 'welly'
}
// forma classica de acessar o html e realizar as alteraçoes
function trocaNomeClassic() {
  document.getElementById('userName').textContent = 'wellyngton'
}

//const wel = fetch('https://api.github.com/users/weldipaula', () => {})

// window.onload(trocaNome())
// window.onload(trocaNomeClassic())
//window.onload(changeSocialMediaLink())

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userAvatar.src = data.avatar_url
      userName.textContent = data.name
      userHtmlUrl.href = data.html_url
      userBio.textContent = data.bio
      userLogin.textContent = data.login
    })
}

getGithubProfileInfos()
