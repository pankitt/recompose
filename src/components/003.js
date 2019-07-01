import React from 'react';
import { withState } from 'recompose';

const StatusList = () => // StatusList - текст который будет виден при клике на слово Active
    <div className="StatusList">
        <div>pending</div>
        <div>inactive</div>
        <div>active</div>
    </div>;

// Используем hoc withState,
// где первый аргумент isToggle — имя стейта, второй toggle - имя функции stateUpdater-а
// и третий аргумент initialState
const Status =  withState('isToggle', 'toggle', false)(
    ({ status, isToggle, toggle }) => // 'isToggle', 'toggle' доступны в качестве аргументов
    <span onClick={ () => toggle(!isToggle) }> {/* На event onClick обрабатываем стейт компонента */}
        { status }
        { isToggle && <StatusList /> }
    </span>
);

// Используем hoc withState,
// где первый аргумент isToggle — имя стейта, второй toggle - имя функции stateUpdater-а
// и третий аргумент initialState
const Tooltip =  withState('isToggle', 'toggle', false)(
    ({ text, children, isToggle, toggle }) => // 'isToggle', 'toggle' доступны в качестве аргументов
    <span>
      { isToggle && <div className="Tooltip">{ text }</div> }
        <span onMouseEnter={ () => toggle(true) } onMouseLeave={ () => toggle(false) }>{ children }</span>
        {/* На event-ы onMouseEnter, onMouseLeave обрабатываем стейт компонента */}
    </span>
);


const User = ({ name, status }) =>
    <div className="User">
        <Tooltip text="Cool Dude!">{ name }</Tooltip> -
        <Status status={ status } />
    </div>;

const Example = () =>
    <div>
        <User name="Tim" status="active" />
    </div>;

export default Example;