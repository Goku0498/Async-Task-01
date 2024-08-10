let cd = document.getElementById('countdown');

setTimeout(() => {
    cd.textContent = 10;
    setTimeout(() => {
        cd.textContent = 9;
        setTimeout(() => {
            cd.textContent = 8;
            setTimeout(() => {
                cd.textContent = 7;
                setTimeout(() => {
                    cd.textContent = 6;
                    setTimeout(() => {
                        cd.textContent = 5;
                        setTimeout(() => {
                            cd.textContent = 4;
                            setTimeout(() => {
                                cd.textContent = 3;
                                setTimeout(() => {
                                    cd.textContent = 2;
                                    setTimeout(() => {
                                        cd.textContent = 1;
                                        setTimeout(() => {
                                            cd.textContent = "Happy Independence Day";
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
