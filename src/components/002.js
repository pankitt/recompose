import React from 'react';
import PropTypes from 'prop-types';
import { compose, setDisplayName, setPropTypes } from 'recompose';

const enhance = compose(
    setDisplayName('User'),
    setPropTypes({
        name: PropTypes.string.isRequired,
        status: PropTypes.string
    })
);

const User = enhance(({ name, status }) =>
    <div className="User">
        { name }: { status }
    </div>
);

//console.log(User.displayName); // displayName

const Example = () =>
    <User name="Tim" status="active" />;

export default Example;
