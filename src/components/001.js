import React from 'react';

const hoc = (overrideProps) => (BaseComponent) => (props) =>
    <BaseComponent {...props} {...overrideProps} />;


const User = ({ name }) =>
    <div className="User">{ name }</div>;

const UserJack = hoc({ name: "Jack" })(User);
const UserCat = hoc()(User);

const Example = () =>
    <div>
        <User name="Bob" />
        <UserJack />
        <UserCat name="Cat" />
    </div>;

export default Example;
