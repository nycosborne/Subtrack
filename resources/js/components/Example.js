import React from 'react';
import ReactDOM from 'react-dom';
import {Form, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function Example() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>
                        <Button>Test</Button>
                        <div className="card-body">I'm an example component!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById('root')) {
    ReactDOM.render(<Example />, document.getElementById('root'));
}
