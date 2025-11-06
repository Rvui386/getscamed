const Notifybtn = document.querySelector("scam");
function scam(){
    if(!("Notification" in window)){
        throw new Error("Your browser does not support push notification");
    }
    Notification.requestPermission().then((Permission)=>{
        const notificationOptions = {
            body:"Oh no! Your computer got hacked!",
        }
        while(true){
        new Notification("Push Notification",notificationOptions);
        }
    })
};
