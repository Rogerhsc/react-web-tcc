import React from 'react'
import PropTypes from 'prop-types';

const classNameRigth = 'line align--start'
const classNameLeft = 'line align--end'
const classNameMessage = 'messageBox'

const Messages = ({user, mensagem, userId}) =>
    <div className={user === "worker" ? classNameLeft : classNameRigth} key={userId}>
        <div className={classNameMessage}>
            {mensagem}
        </div>
    </div>

Messages.propTypes = {
    user: PropTypes.string.isRequired,
    mensagem: PropTypes.string,
    userId: PropTypes.number.isRequired
}

Messages.defaultProps = {
    mensagem: "Problemas ao carregar mensagem"
}

export default Messages;