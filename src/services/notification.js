import Icon from 'assets/icon.png'

export const displayNotification = (title, body) => {
  if (Notification.permission === 'granted') {
    navigator.serviceWorker.getRegistration().then((reg) => {
      const options = {
        body,
        icon: Icon,
        vibrate: [100, 50, 100],
        data: {
          dateOfArrival: Date.now(),
          primaryKey: 1
        }
      }
      reg.showNotification(title, options)
    })
  }
}
