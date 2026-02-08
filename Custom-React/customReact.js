function customRender(reactElement,container){
    const domEle=document.createElement(reactElement.type)
    domEle.innerHTML=reactElement.children
    domEle.setAttribute('href',reactElement.props.href)
    domEle.setAttribute('target',reactElement.props.target)

    container.appendChild(domEle)  
}

const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children: 'click me to visit'
}

const mainContainer= document.querySelector('#root');
customRender(reactElement,mainContainer)