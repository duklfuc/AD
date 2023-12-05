//lấy/thiết lập 2 element
const output = document.querySelector('.output');
const message = document.querySelector('.message');

// thiết lập message bắt đầu, thời gian bắt đầu và tạo ô vuông 
message.textContent = "Press to Start";
const box = document.createElement('div');
const game = {
    time: 0,
    start: null
};
box.classList.add('box');
output.append(box);

// tạo vị trí ngẫu nhiên
function ranNum(max) {
    return Math.floor(Math.random()*max);
}

// load ô và lấy thời gian bắt đầu
function addBox() {
    message.textContent = "click it...";
    game.start = new Date().getTime();
    box.style.display = 'block';
    box.style.left = ranNum(450) + 'px';
    box.style.top = ranNum(450) + 'px';
}

// sự kiện click chuột và tính toán thời gian , hiển thị thông báo
box.addEventListener('click', () => {
    box.textContent = "";
    box.style.display = 'none';
    game.timer = setTimeout(addBox, ranNum(3000));
    if (!game.start) {
        message.textContent = 'Loading...';
    } else {
        const cur = new Date().getTime();
        const dur = (cur-game.start) / 1000;
        message.textContent = `It took ${dur} seconds to click`;
    }
}
);