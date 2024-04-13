import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe#vimeo-player');
const player = new Player(iframe);

const timeFunction = data => {
    console.log(data);
};

player.on('timeupdate', throttle(timeFunction, 1000));