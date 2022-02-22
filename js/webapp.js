document.addEventListener('DOMContentLoaded', function() {
   const infoContainer = document.querySelector('#info-container')
   const infoURL = `http://localhost:3000/Information`
   fetch(`${infoURL}`)
    .then( response => response.json() )
    .then( infoData => infoData.forEach(function(info) {
      infoContainer.innerHTML += `
      <div id=${info.unqid}>
        <h2>${info.name}</h2>
        <p>${info.email}</p>
        <p>${info.gender}</p>
        <p>${info.status}</p>
        <button data-id="${info.id}" data-action="edit">Edit</button>
        <button data-id="${info.id}" data-action="delete">Delete</button>
      </div>`
    }))


    const infoForm = document.querySelector('#info-form')
    infoForm.addEventListener('submit', (e) => {
         e.preventDefault()

         console.log(e.target)
    })
    const unqidInput = infoForm.querySelector('#unqid').value
    const nameInput = infoForm.querySelector('#name').value
    const emailInput = infoForm.querySelector('#email').value
    const genderInput = infoForm.querySelector('#gender').value
    const statusInput = infoForm.querySelector('#status').value
    // let allBooks = []

    fetch(`${infoURL}`, {
          method: 'POST',
          body: JSON.stringify({
            unqid: unqidInput,
            name: nameInput,
            email: emailInput,
            gender: genderInput,
            status: statusInput
          }),
          headers: {
            'Content-Type': 'application/json'
          }


        })
    infoContainer.addEventListener('click', (e) => {
            if (e.target.dataset.action === 'edit') {
              console.log('you pressed edit')
            } else if (e.target.dataset.action === 'delete') {
              console.log('you pressed delete')
            }
          })

<!-- U part -->
      // fetch(`${infoURL}`)
      //     .then( response => response.json() )
      //     .then( infoData => infoData.forEach(function(info) {
      //       allInfos = infoData
      //       infoContainer.innerHTML += `
      //       <div id=info-${info.id}>
      //
      //     }))
      //
      // infoContainer.addEventListener('click', (e) => {
      //     if (e.target.dataset.action === 'edit') {
      //       const infoData = allInfos.find((info) => {
      //         return info.id == e.target.dataset.id
      //       })
      //       console.log(infoData)
      //
      //   })


<!-- D part -->
      // document.querySelector(`#info-${e.target.dataset.id}`).remove()
    // } else if (e.target.dataset.action === 'delete') {
    //       document.querySelector(`#book-${e.target.dataset.id}`).remove()
    //         fetch(`${bookURL}/${e.target.dataset.id}`, {
    //           method: 'DELETE',
    //           headers: {
    //             'Content-Type': 'application/json'
    //           }
    //         }).then( response => response.json())
    //       }


})
