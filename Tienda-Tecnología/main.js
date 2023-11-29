

let estado_menu = false
let estado_menu_desplegable = false
let estado_detalle_menu_desplegable = false

menu.addEventListener('mouseover', (e)=>{
  e.stopPropagation()
  e.preventDefault()
  menu_desplegable.style.display = "flex"
  detalle_menu_desplegable.style.display = "flex"
  estado_menu = !estado_menu
  })

  menu.addEventListener('click', (e)=>{
    e.stopPropagation()
    e.preventDefault()
    CerrarMenu()
  })
  
  function CerrarMenu (){
    menu_desplegable.style.display = "none"
    detalle_menu_desplegable.style.display = "none"
    estado_menu_desplegable = !estado_menu_desplegable
    if(estado_detalle_menu_desplegable)
      estado_detalle_menu_desplegable = false
    if(estado_menu)
      estado_menu = false
    
  }

  icono_stars.addEventListener('mouseover', (e)=>{
    e.stopPropagation()
    e.preventDefault()
    novedades_ofertas.style.zIndex = 9999
    novedades_ofertas.style.display = "flex"
    tv.style.display = "none"
    auricular.style.display = "none"
    videogame.style.display = "none"
    camara.style.display = "none"
    pc.style.display = "none"
  })
  icono_tv.addEventListener('mouseover', (e)=>{
    e.stopPropagation()
    e.preventDefault()
    tv.style.zIndex = 9999
    tv.style.display = "flex"
    novedades_ofertas.style.display = "none"
    auricular.style.display = "none"
    videogame.style.display = "none"
    camara.style.display = "none"
    pc.style.display = "none"
    })
  icono_auricular.addEventListener('mouseover', (e)=>{
    e.stopPropagation()
    e.preventDefault()
    auricular.style.zIndex = 9999
    auricular.style.display = "flex"
    novedades_ofertas.style.display = "none"
    tv.style.display = "none"
    videogame.style.display = "none"
    camara.style.display = "none"
    pc.style.display = "none"
  })
  icono_videogame.addEventListener('mouseover', (e)=>{
    e.stopPropagation()
    e.preventDefault()
    videogame.style.zIndex = 9999
    videogame.style.display = "flex"
    novedades_ofertas.style.display = "none"
    auricular.style.display = "none"
    tv.style.display = "none"
    camara.style.display = "none"
    pc.style.display = "none"
  })
  icono_camara.addEventListener('mouseover', (e)=>{
    e.stopPropagation()
    e.preventDefault()
    camara.style.zIndex = 9999 
    camara.style.display = "flex"
    novedades_ofertas.style.display = "none"
    auricular.style.display = "none"
    videogame.style.display = "none"
    tv.style.display = "none"
    pc.style.display = "none"
  })
  icono_pc.addEventListener('mouseover', (e)=>{
    e.stopPropagation()
    e.preventDefault()
    pc.style.zIndex = 9999 
    pc.style.display = "flex"
    camara.style.display = "none"
    novedades_ofertas.style.display = "none"
    auricular.style.display = "none"
    videogame.style.display = "none"
    tv.style.display = "none"
  })

  noved_ofer.addEventListener('click', (e)=>{
  e.stopPropagation()
  e.preventDefault()
  menu_desplegable.style.display = "none"
  detalle_menu_desplegable.style.display = "none"
  console.log('Novedades y Ofertas');
  CerrarMenu()
})
tv_1.addEventListener('click', (e)=>{
  e.stopPropagation()
  e.preventDefault()
  menu_desplegable.style.display = "none"
  detalle_menu_desplegable.style.display = "none"
  console.log('Televisores');
  CerrarMenu()
})
tv_2.addEventListener('click', (e)=>{
  e.stopPropagation()
  e.preventDefault()
  menu_desplegable.style.display = "none"
  detalle_menu_desplegable.style.display = "none"
  console.log('Home Theater');
  CerrarMenu()
})
auricular_1.addEventListener('click', (e)=>{
  e.stopPropagation()
  e.preventDefault()
  menu_desplegable.style.display = "none"
  detalle_menu_desplegable.style.display = "none"
  console.log('Sistema de audio');
  CerrarMenu()
})
auricular_2.addEventListener('click', (e)=>{
  e.stopPropagation()
  e.preventDefault()
  menu_desplegable.style.display = "none"
  detalle_menu_desplegable.style.display = "none"
  console.log('Parlantes inalambricos');
  CerrarMenu()
})
auricular_3.addEventListener('click', (e)=>{
  e.stopPropagation()
  e.preventDefault()
  menu_desplegable.style.display = "none"
  detalle_menu_desplegable.style.display = "none"
  console.log('Auriculares');
  CerrarMenu()
})
videogame_1.addEventListener('click', (e)=>{
  e.stopPropagation()
  e.preventDefault()
  menu_desplegable.style.display = "none"
  detalle_menu_desplegable.style.display = "none"
  console.log('Consolas');
  CerrarMenu()
})
videogame_2.addEventListener('click', (e)=>{
  e.stopPropagation()
  e.preventDefault()
  menu_desplegable.style.display = "none"
  detalle_menu_desplegable.style.display = "none"
  console.log('Accesorios para Playstation');
  CerrarMenu()
})
videogame_3.addEventListener('click', (e)=>{
  e.stopPropagation()
  e.preventDefault()
  menu_desplegable.style.display = "none"
  detalle_menu_desplegable.style.display = "none"
  console.log('Juegos');
  CerrarMenu()
})
camara_1.addEventListener('click', (e)=>{
  e.stopPropagation()
  e.preventDefault()
  menu_desplegable.style.display = "none"
  detalle_menu_desplegable.style.display = "none"
  console.log('Camaras con lentes intercambiables');
  CerrarMenu()
})
camara_2.addEventListener('click', (e)=>{
  e.stopPropagation()
  e.preventDefault()
  menu_desplegable.style.display = "none"
  detalle_menu_desplegable.style.display = "none"
  console.log('Lentes');
  CerrarMenu()
})
camara_3.addEventListener('click', (e)=>{
  e.stopPropagation()
  e.preventDefault()
  menu_desplegable.style.display = "none"
  detalle_menu_desplegable.style.display = "none"
  console.log('Accesorios');
  CerrarMenu()
})
camara_4.addEventListener('click', (e)=>{
  e.stopPropagation()
  e.preventDefault()
  menu_desplegable.style.display = "none"
  detalle_menu_desplegable.style.display = "none"
  console.log('Filmadoras');
  CerrarMenu()
})




