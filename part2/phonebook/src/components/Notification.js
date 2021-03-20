import React from 'react';
import '../index.css'

export const ErrorNotification = ({ message }) => {
    if (!message) {
        return null
    }

    return (
        <div className="error">
          {message}
        </div>
    )
}

const Notification = ({ message }) => {
    if (!message) {
        return null
    }

    return (
        <div className="notification">
          {message}
        </div>
    )
}

export default Notification;
