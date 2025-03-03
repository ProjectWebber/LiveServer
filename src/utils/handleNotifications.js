const notifications = [];

const addNotification = ({id, type, text, icon, timeToClose}) => {
    notifications.push({id, type, text, icon, timeToClose})
    console.log(notifications)
};
const removeNotification = ({id}) => notifications.filter((notification) => notification.id !== id);

export {notifications, addNotification, removeNotification}