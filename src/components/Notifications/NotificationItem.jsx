import PropTypes from "prop-types";
import { useEffect, useCallback } from "react";

function NotificationItem({id, text="placeholder", icon="", notificationType="", timeToClose=3000}) {

	const handleNotificationType = useCallback(() => {
		switch (notificationType) {
			case "success":
				return "notification-success"
			case "error":
				return "notification-error"
			default:
				return "";
		}
	}, [notificationType]);

	return (
		<>
			<div className={`notification ${handleNotificationType()}`} key={id}>
				{icon}
				<p>{text}</p>
			</div>
		</>
	);
}

NotificationItem.propTypes = {
	id: PropTypes.string.isRequired,
	text: PropTypes.node,
	icon: PropTypes.node,
	notificationType: PropTypes.string,
	timeToClose: PropTypes.number
};

export default NotificationItem;
