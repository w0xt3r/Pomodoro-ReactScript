
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import App from './components/App';


declare let module: {hot: any};


const root = document.getElementById('root');

ReactDOM.render(
    <AppContainer style={{'background-color': '#fafafa'}}>
        <App/>
    </AppContainer>,
    root
);

if(module.hot) {
    module.hot.accept('./components/App', () => {

        const NewApp = require('./components/App').default;

        ReactDOM.render(
            <AppContainer>
                <NewApp/>
            </AppContainer>,
            root
        );
    });
}
