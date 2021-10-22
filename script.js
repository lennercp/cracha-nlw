function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const socialName = li.getAttribute('class')
    li.firstElementChild.href = `https://${socialName}.com/${linksSocialMedia[socialName]}`
  }
}

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userImage.src = data.avatar_url

      userName.textContent = data.name

      userGithubAccount.href = data.html_url
      userGithubName.textContent = data.login

      userBio.textContent = data.bio
    })
}

const linksSocialMedia = {
  github: 'lennercp',
  youtube: '',
  facebook: 'lenner.coutinho',
  instagram: 'lenner_coutinho',
  twitter: 'LennerCoutinhoP'
}

changeSocialMediaLinks()

getGithubProfileInfos()
