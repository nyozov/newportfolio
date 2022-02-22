

const navChange = (item, navigation, setNavigation) => {
  const newData = navigation.map(el => {
    if(el.name === item.name)
    return Object.assign({}, el, {current:true})
    return el
  })

  const newData2 = newData.map(el => {
    if (el.name !== item.name)
    return Object.assign({}, el, {current: false})
    return el
  })
  setNavigation(newData2)
}

export default navChange