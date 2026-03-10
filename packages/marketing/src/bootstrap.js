import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

const mount = (el) => {
    ReactDOM.render(
        <App />,
        el
    )
}

if(process.env.NODE_ENV === 'development'){
    const devRootEle = document.querySelector('#_marketing_dev-root');

    if(devRootEle){
        mount(devRootEle);
    }
}

export {mount};