document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    const drop_menu = document.querySelector(".dropdown-options");
    const dropdown_btn = document.querySelector(".dropdown-btn");
    const current_opt = document.querySelector(".current-option");
    const drop_btn_1 = document.querySelector(".btn-1");
    const drop_btn_2 = document.querySelector(".btn-2");
    const drop_btn_3 = document.querySelector(".btn-3");
    
    // dropdown_btn.addEventListener("click", function() {
    //     console.log(drop_menu.style.visibility);
    //     if (drop_menu.style.visibility === 'hidden') {
    //         drop_menu.style.visibility = 'visible';
    //     } else {
    //         drop_menu.style.visibility = 'hidden';
    //     }
    // });

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
});