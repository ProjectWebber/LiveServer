import NotificationItem from "./NotificationItem";

function NotificationContainer({containerID = "notificationContainer"}) {
	const notifications = []

	return (
		<section
			className="absolute top-0 left-0 flex flex-col items-end w-full h-full p-8 gap-2 z-50"
			key={containerID}
		>
			{notifications.map((notification) => {
				return (
					<NotificationItem
						id={notification.id}
						notificationType={notification.type}
						text={notification.text}
						icon={notification.icon}
						timeToClose={notification.timeToClose}
						key={notification.id}
					/>
				);
			})}
		</section>
	);
}

export default NotificationContainer;
