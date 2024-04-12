const accessKey = `gAG8gV7RLexkYX7qLlRwIbSLQT2-AKDVKrn3ZQ8JzjA`
const searchForm = document.querySelector('.search-form')
const searchBox = document.querySelector('.search-box')
const searchResult = document.querySelector('.search-result')
const showMoreBtn = document.querySelector('.show-more-btn')

const url = 'https://api.unsplash.com/search/photos?page=1&query=office&client_id=gAG8gV7RLexkYX7qLlRwIbSLQT2-AKDVKrn3ZQ8JzjA'

let keyword = ''
let page = 1

async function searchImages() {
  keyword = searchBox.value
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`

  const response = await fetch(url)
  const data = await response.json()

  console.log(data)

  data.results.forEach(photo => {
    const img = document.createElement('img')
    img.src = photo.urls.regular
    
    const imgLink = document.createElement('a')
    imgLink.href = photo.links.html
    imgLink.target = '_blank'

    imgLink.appendChild(img)
    searchResult.appendChild(imgLink)
  });

  showMoreBtn.style.display = 'block'
}

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  page = 1
  searchResult.innerHTML = ''
  searchImages();
})

showMoreBtn.addEventListener('click', () => {
  page++
  searchImages();
})