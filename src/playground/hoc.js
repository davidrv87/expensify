// Higher Order Component - A component that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = props => (
    <div>
        <h1>Info</h1>
        <p>Text: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return props => ( // Stateless React Component implicitely returned
        <div>
            {props.isAdmin && <p>This is private info, please do not share</p>}
            <WrappedComponent {...props} />
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return props => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props} />
            ) : (
                    <p>Please, authenticate first</p>
                )}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="These are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="These are the details" />, document.getElementById('app'));
