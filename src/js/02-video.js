import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const CURRENT_TIME_KEY = 'videoplayer-current-time';

function saveCurrentTimeKey(timeKey) { 
    localStorage.setItem(CURRENT_TIME_KEY, timeKey);
};

player.on('timeupdate', throttle(() => {
    player.getCurrentTime().then((time) => {
        saveCurrentTimeKey(time);
    });
}, 1000));

const currentTimeKey = Number(localStorage.getItem(CURRENT_TIME_KEY)) || 0;

player.setCurrentTime(currentTimeKey);
