document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    const drop_menu = document.querySelector(".dropdown-options");
    const dropdown_btn = document.querySelector(".dropdown-btn");
    const current_opt = document.querySelector(".current-option");
    const drop_btn_1 = document.querySelector(".btn-1");
    const drop_btn_2 = document.querySelector(".btn-2");
    const drop_btn_3 = document.querySelector(".btn-3");
    let search_bar_input = document.querySelector(".search_bar_input");
    const search_button = document.querySelector(".search-submit");
    let search_icon_image = document.getElementById("search-icon");
    const notif_btn = document.querySelector(".notification-btn");
    let notif_icon = document.querySelector(".notification-icon");
    let new_notif = true;
    let upgrade_img = document.querySelector(".upgrade-img");
    let prog_bar_one = document.querySelector(".bar1");
    let prog_bar_two = document.querySelector(".bar2");
    let prog_bar_three = document.querySelector(".bar3");

    function getRandomInt(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
    }

    prog_bar_one.style.width = `${getRandomInt(70,90)}%`;
    prog_bar_two.style.width = `${getRandomInt(45,75)}%`;
    prog_bar_three.style.width = `${getRandomInt(50,80)}%`;
    
    dropdown_btn.addEventListener("click", function() {
        if (drop_menu.style.height === '0px' || drop_menu.style.height === '') {
            drop_menu.style.height = drop_menu.scrollHeight + 'px'; // Smoothly expand to full height
        } else {
            drop_menu.style.height = '0px'; // Smoothly collapse
        }
    });

    drop_btn_1.addEventListener("click", function() {
        let temp = drop_btn_1.textContent;
        drop_btn_1.textContent = current_opt.textContent;
        current_opt.textContent = temp;
        drop_menu.style.height = '0px';
    });
    drop_btn_2.addEventListener("click", function() {
        let temp = drop_btn_2.textContent;
        drop_btn_2.textContent = current_opt.textContent;
        current_opt.textContent = temp;
        drop_menu.style.height = '0px';
    });
    drop_btn_3.addEventListener("click", function() {
        let temp = drop_btn_3.textContent;
        drop_btn_3.textContent = current_opt.textContent;
        current_opt.textContent = temp;
        drop_menu.style.height = '0px';
    });

    search_bar_input.addEventListener("focus", function() {
        search_icon_image.setAttribute("src", "assets/icons/search_bold_white.svg");
    })

    search_bar_input.addEventListener("blur", function() {
        search_icon_image.setAttribute("src", "assets/icons/search_bold_grey.svg");
    })

    search_bar_input.addEventListener("keydown", function(event) {
        if (event.code === "Enter") {
            setTimeout(() => {
                search_bar_input.value = '';
                search_bar_input.blur();
            }, 200);
        }
    });

    search_button.addEventListener("click", function() {
        search_bar_input.value = '';
        setTimeout(() => {
            search_button.blur();
        }, 100);
    })

    notif_btn.addEventListener("click", function() {
        if (new_notif) {
            notif_icon.setAttribute("src", "assets/icons/notification_icon_grey.svg");
            notif_icon.setAttribute("title", "No new notifications");
            new_notif = false;
            setTimeout(() => {
                notif_icon.setAttribute("src", "assets/icons/notification_icon_green.svg");
                notif_icon.setAttribute("title", "New Notification!");
                new_notif = true;
            }, 15000)
        }
    })

    upgrade_img.addEventListener("mousedown", function() {
        upgrade_img.setAttribute("src", "assets/icons/upgrade_pressed_crop.svg")
    })

    upgrade_img.addEventListener("mouseup", function() {
        upgrade_img.setAttribute("src", "assets/icons/upgrade_init_crop.svg")
    })

});