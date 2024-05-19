class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    checkAlarmExistence = (time) => {
        return this.alarmCollection.some((alarm) => alarm.time === time);
    }

    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        }

        if (this.checkAlarmExistence(time)) {
            console.warn('Уже присутствует звонок на это же время');
        }

        let alarmObject = {
            callback, 
            time, 
            canCall: true
        }

        this.alarmCollection.push(alarmObject);
        
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
    }

    getCurrentFormattedTime() {
        let currentDate = new Date()
        let currentHours = String(currentDate).split(' ')[4].split(':')[0];
        let currentMins = String(currentDate).split(' ')[4].split(':')[1];

        return `${currentHours}:${currentMins}`;
    }

    start() {
        if(this.intervalId !== null) {
            return;
        }

        function alarmsChecker() {
            this.alarmCollection.forEach(alarm => {
                let currentDate = new Date()
                let currentHours = String(currentDate).split(' ')[4].split(':')[0];
                let currentMins = String(currentDate).split(' ')[4].split(':')[1];
                let currentTime = `${currentHours}:${currentMins}`;
                
                if(alarm.time === currentTime && alarm.canCall) {
                    alarm.canCall = false;
                    alarm.callback();
                }
            })
        }

        this.intervalId = setInterval(alarmsChecker, 1000);
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(alarm => {
            alarm.canCall = true;
        })
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}