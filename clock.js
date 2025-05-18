 let clockInterval;
        const clock = document.getElementById('clock');
        const date = document.getElementById('date');
        const startBtn = document.getElementById('startBtn');
        const stopBtn = document.getElementById('stopBtn');

        function updateTime() {
            const now = new Date();
            
             const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');
            clock.textContent = `${hours}:${minutes}:${seconds}`;
           
            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            date.textContent = `${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}`;
        }

        startBtn.addEventListener('click', () => {
            if (!clockInterval) {
                updateTime();
                clockInterval = setInterval(updateTime, 1000);
                startBtn.disabled = true;
                stopBtn.disabled = false;
                document.querySelector('.clock-container').style.animation = 'glow 1s infinite alternate';
            }
        });

        stopBtn.addEventListener('click', () => {
            if (clockInterval) {
                clearInterval(clockInterval);
                clockInterval = null;
                startBtn.disabled = false;
                stopBtn.disabled = true;
                document.querySelector('.clock-container').style.animation = 'glow 2s infinite alternate';
            }
        });
        updateTime();