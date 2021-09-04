import React from 'react';

const Loader = (props) => {

    return (
        <div >
            <div class="ui active inverted dimmer">
                <div class="ui big text loader">
                    {props.message}
                </div>
            </div>
            <p></p>
        </div>
    );

};

Loader.defaultProps = {
    message: 'Loading...'
};

export default Loader;