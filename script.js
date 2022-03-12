let app = document.querySelector('#root')
let logo = document.querySelector('#logo')
app.appendChild(logo)

let container = document.createElement('div')
container.setAttribute('class', 'container')
app.appendChild(container)
fetch('https://api.tvmaze.com/search/shows?q=home')

.then((res)=>{ return res.json()})
.then(data=>{
    // console.log(data)
    data.forEach((ele)=>{
        let card=document.createElement('div')
        card.setAttribute('class', 'card')
        container.appendChild(card)

        let photo = document.createElement('img')
        photo.src=ele.show.image.medium
        card.appendChild(photo)
        photo.setAttribute('class', 'image')

        let title = document.createElement('h1')
        title.textContent=(`Name : ${ele.show.name}`)
        card.appendChild(title)

        let description = document.createElement('p')
        description.textContent=(`Type : ${ele.show.type}`)
        card.appendChild(description)

        let time = document.createElement('p')
        time.textContent=(`Run Time : ${ele.show.runtime}`)
        card.appendChild(time)
        
        
    })
})
