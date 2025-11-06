const Notifybtn = document.querySelector("scam");
function scam(){
    while (true){
    if(!("Notification" in window)){
        throw new Error("Your browser does not support push notification");
    }
    Notification.requestPermission().then((Permission)=>{
        const notificationOptions = {
            body:"Oh no! Your computer got hacked by user 0xF89028!",
        }
        new Notification("Error:",notificationOptions);
    })
    };
};
