
    const elements=React.createElement('div',{id:'child'},
                    React.createElement('div',{id:'inner-child'},React.createElement('h1',{id:'heading'},"I am from react"))
                  )
    const root=ReactDOM.createRoot(document.getElementById('parent'))
    root.render(elements)
  
