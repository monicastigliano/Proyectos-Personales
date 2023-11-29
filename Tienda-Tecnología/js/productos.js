const renderProductos = async () => {
    try{
      const response =  await fetch("productos.json")
      const data = await response.json()
      console.log(data)
      
      const renderCards = (array )=>{
        array.map((item) =>{
          const card = document.createElement('div')
          card.className = 'card'
          card.innerHTML = `
            <div class="envio-gratis">
              <img src="/css/inconos/delivery_icon.svg"     class="envio" alt="delivery" id="delivery">
              <span id="envio">envío gratis</span>
            </div>
            <div class="foto-producto">
            <img src="${item.imagen}"></img>
            </div>
            <div class="card-info">
              <h4>${item.nombre}</h4>
              <h3>"${item.marca}"</h3>
              <p>${item.descripcion}</p>
            </div>
            <span class="precio">$ ${item.precio}</span>
            <butttom class="btn-comprar">COMPRAR</butttom>
          `
            cards.append(card)
        })
      }

      // flitros*****************************

      const items_precio = document.getElementsByClassName("item-opciones-precio")
      const items_marca = document.getElementsByClassName("item-opciones-marca")
      const span_marca = document.getElementById("span_marca")
      const span_precio = document.getElementById("span_precio")


      const arrayIP = [...items_precio]
      const arrayM = [...items_marca]

      function renderPorPrecio(array){
        arrayIP.forEach(element => {
          let nuevoArray = []
          element.addEventListener('click', ()=>{
            down_precio.style.display = 'flex'
            up_precio.style.display = 'none'
            precio.style.display = "none"
            estado_arrow_precio = !estado_arrow_precio
            span_precio.innerHTML = element.innerHTML
            switch (element.innerHTML) {
              case 'All...':
                  nuevoArray = array.sort((a, b)=>{
                    
                    if (a.id_producto < b.id_producto) {
                      return -1;
                    }
                    if (a.id_producto > b.id_producto) {
                      return 1;
                    }
                    if (a.id_producto === b.id_producto)
                    return 0;
                  }
                )
                console.log(nuevoArray);
                cards.innerHTML = ''
                renderCards(nuevoArray)
                span_precio.innerHTML = 'Ordenar por...'
              break;
              case 'Más relevantes':
                nuevoArray = array.sort((a, b)=>{
                    if (a.destacado > b.destacado) {
                      return -1;
                    }
                    if (a.destacado < b.destacado) {
                      return 1;
                    }
                    if (a.destacado === b.destacado)
                    return 0;
                  })
                console.log(nuevoArray);
                cards.innerHTML = ''
                renderCards(nuevoArray)
                break;
              case 'Menor precio':
                nuevoArray = array.sort((a, b)=>{
                  
                    if (Number(a.precio) < Number(b.precio)) {
                      return -1;
                    }
                    if (Number(a.precio) > Number(b.precio)) {
                      return 1;
                    }
                    if (Number(a.precio) === Number(b.precio)) 
                    return 0;
                  }
                )
                console.log(nuevoArray);
                cards.innerHTML = ''
                renderCards(nuevoArray)
  
                break;
              case 'Mayor precio':
                nuevoArray = array.sort((a, b)=>{
                    if (Number(a.precio) > Number(b.precio)) {
                      return -1;
                    }
                    if (Number(a.precio) < Number(b.precio)) {
                      return 1;
                    }
                    if (Number(a.precio) === Number(b.precio)) 
                    return 0;
                  })
                console.log(nuevoArray);
                cards.innerHTML = ''
                renderCards(nuevoArray)
                break;
              default:
                break;
            }
            
          });
          })
      }
      renderPorPrecio(data)
      
      function renderPorMarca(array){
        arrayM.forEach(element => {
          let nuevoArrayM = []
          element.addEventListener('click', ()=>{
            span_marca.innerHTML = element.innerHTML
            down_marca.style.display = 'flex'
            up_marca.style.display = 'none'
            marca.style.display = "none"
            estado_arrow_marca = !estado_arrow_marca
            switch (element.innerHTML) {
              case 'All...':
                  nuevoArrayM = array.sort((a, b)=>{
                    if (a.id_producto < b.id_producto) {
                      return -1;
                    }
                    if (a.id_producto > b.id_producto) {
                      return 1;
                    }
                    if (a.id_producto === b.id_producto)
                    return 0;
                  }
                )
                cards.innerHTML = ''
                renderCards(nuevoArrayM)
                span_marca.innerHTML = 'Marca'
              break;
              case 'Julieta':
                nuevoArrayM = array.filter(el => el.marca.includes('Julieta'))
                console.log(nuevoArrayM);
                cards.innerHTML = ''
                renderCards(nuevoArrayM)
                break;
              case 'LG':
                nuevoArrayM = array.filter(el => el.marca.includes('LG'))
                console.log(nuevoArrayM);
                cards.innerHTML = ''
                renderCards(nuevoArrayM)
                break;
              case 'Sony':
                nuevoArrayM = array.filter(el => el.marca.includes('Sony'))
                console.log(nuevoArrayM);
                cards.innerHTML = ''
                renderCards(nuevoArrayM)
                break;
              case 'Intel':
                nuevoArrayM = array.filter(el => el.marca.includes('Intel'))
                console.log(nuevoArrayM);
                cards.innerHTML = ''
                renderCards(nuevoArrayM)
                break;
              case 'Square Enix':
                nuevoArrayM = array.filter(el => el.marca.includes('Square Enix'))
                console.log(nuevoArrayM);
                cards.innerHTML = ''
                renderCards(nuevoArrayM)
                break;
              case 'Grinch':
                nuevoArrayM = array.filter(el => el.marca.includes('Grinch'))
                console.log(nuevoArrayM);
                cards.innerHTML = ''
                renderCards(nuevoArrayM)
                break;
              case 'Olympus':
                nuevoArrayM = array.filter(el => el.marca.includes('Olympus'))
                console.log(nuevoArrayM);
                cards.innerHTML = ''
                renderCards(nuevoArrayM)
                break;
              case 'Panasonic':
                nuevoArrayM = array.filter(el => el.marca.includes('Panasonic'))
                console.log(nuevoArrayM);
                cards.innerHTML = ''
                renderCards(nuevoArrayM)
                break;
              case 'Ideon':
                nuevoArrayM = array.filter(el => el.marca.includes('Ideon'))
                console.log(nuevoArrayM);
                cards.innerHTML = ''
                renderCards(nuevoArrayM)
                break;
              case 'Canon':
                nuevoArrayM = array.filter(el => el.marca.includes('Canon'))
                console.log(nuevoArrayM);
                cards.innerHTML = ''
                renderCards(nuevoArrayM)
                break;
              case 'Creative':
                nuevoArrayM = array.filter(el => el.marca.includes('Creative'))
                console.log(nuevoArrayM);
                cards.innerHTML = ''
                renderCards(nuevoArrayM)
                break;
              

              default:
                break;
            }
            
          });
          })
      }  
      renderPorMarca(data)
      

      renderCards(data)

      lupa.addEventListener('click', (e)=>{
        e.stopPropagation()
        e.preventDefault()
        console.log('Click Lupa ' + input_busqueda.value.toLowerCase());
        filtrar_busqueda(input_busqueda.value.toLowerCase())
      })



      function  filtrar_busqueda(val){
        if(val === '' || val === undefined || val === null){  
          console.log('no existe')
        }
        else{
          let resultado = data.filter(el => el.nombre.toLowerCase().includes(val))
          console.log(resultado)
          if (resultado.length !== 0) {
            cards.innerHTML = ''
            renderCards(resultado)
        } else {
          cards.innerHTML = `<div class="card-sin-coincidencias" id="card-sin-coincidencias">
          <h1>No hay publicaciones que coincidan con tu búsqueda</h1>
        </div>`
        const card_sin_coincidencias = document.getElementById("card-sin-coincidencias")
        card_sin_coincidencias.style.display = "flex"  
        }
        }
      }}
    catch(err) {console.log(err)}
  }
renderProductos()

let estado_arrow_marca = false
let estado_arrow_precio = false



menu_precio.addEventListener('click', (e)=>{
  e.preventDefault()
  e.stopPropagation()
  if(estado_arrow_precio){
    down_precio.style.display = 'flex'
    up_precio.style.display = 'none'
    precio.style.display = "none"
  } else {
    down_precio.style.display = 'none'
    up_precio.style.display = 'flex'
    precio.style.display = "flex"
  }
  estado_arrow_precio = !estado_arrow_precio
})
menu_marca.addEventListener('click', (e)=>{
  e.preventDefault()
  e.stopPropagation()
  if(estado_arrow_marca){
    down_marca.style.display = 'flex'
    up_marca.style.display = 'none'
    marca.style.display = "none"
  } else {
    down_marca.style.display = 'none'
    up_marca.style.display = 'flex'
    marca.style.display = "flex"
  }
  estado_arrow_marca = !estado_arrow_marca
})




