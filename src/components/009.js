import React from 'react';

const ChatAPI = {
    subscribeToFriendStatus: () => true,
    unsubscribeFromFriendStatus: () => false,
};

class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isOnline: null };
    }

    componentDidMount() {
        ChatAPI.subscribeToFriendStatus(
            //this.props.friend.id,
            this.handleStatusChange
        );
    }

    componentWillUnmount() {
        ChatAPI.unsubscribeFromFriendStatus(
            //this.props.friend.id,
            this.handleStatusChange
        );
    }

    handleStatusChange = (status) => {
        this.setState({
            isOnline: status.isOnline
        });
    };

    render() {
        if (this.state.isOnline === null) {
            return 'Загрузка...';
        }
        return this.state.isOnline ? 'В сети' : 'Не в сети';
    }
}

export default Example;
