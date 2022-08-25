function checkPass1() {
    let resgister = document.getElementById("register_click");
    let a = document.getElementById("reg_username").value;
    let b = document.getElementById("reg_pass1").value;
    let c = document.getElementById("reg_pass2").value;
    if (a != "" && b != "")
        if (b == c)
        { 
            resgister.style.display = "none";
            alert("Đăng kí thành công!");
        }
        else 
        {  
            alert("Nhập lại mật khẩu không trùng");
            a = "";
            b = "";
            c = "";
        }
    else 
    {
        if (a == "")
            alert("Vui lòng nhập tên đăng kí");
        if (b == "")
            alert("Vui lòng nhập mật khẩu");
    }
}

function checkPass2() {
    let login = document.getElementById("login_click");
    let a = document.getElementById("log_username").value;
    let b = document.getElementById("log_pass1").value;
    if (a != "" && b != "")
        login.style.display = "none";
    else {
        if (a == "")
            alert("Bạn chưa nhập tên đăng nhập");
        if (b == "") 
            alert("Bạn chưa nhập mật khẩu");
    }
}

window.addEventListener("load", function() {
    //register and login
    let register = document.querySelector(".register>input");
    let showRegister = document.querySelector(".register>div");
    let login = document.querySelector(".login>input");
    let showLogin = document.querySelector(".login>div");
    let exit = document.querySelectorAll(".exit")
    register.addEventListener("click", function() {
        if (showLogin.style.display = "block")
            showLogin.style.display = "none";
        showRegister.style.display = "block";
    })

    login.addEventListener("click", function() {
        if (showRegister.style.display = "block")
            showRegister.style.display = "none";
        showLogin.style.display = "block";
    })

    for (let e of exit)
        e.addEventListener("click", function() {
            this.parentElement.parentElement.parentElement.style.display = "none";    
    })

    //slide-bar
    let icon = document.querySelector(".icon");
    let slideBar = document.querySelector(".slide_bar");
    let slideBarExit = document.querySelector(".slide_bar_exit")   
    icon.addEventListener("click", function() {
            slideBar.style.left = "0";
    })

    slideBarExit.addEventListener("click", function() {
        slideBar.style.left = "-300px";
    })

    //click-ouside
    document.addEventListener("click", function(event) {
        let selectBox = document.querySelector(".user");
        if (event.target.closest(".click_user")) 
            selectBox.style.display = "block";
        else
            selectBox.style.display = "none";
    })

    //slider
    let slider = document.querySelectorAll(".slider");
    for (let s of slider) {
        let sliderMain = s.querySelector(".slider-main");
        let sliderItems = s.querySelectorAll(".slider-item")
        let nextBtn = s.querySelector(".slider-next");
        let prevBtn = s.querySelector('.slider-prev');
        let sliderItemWidth = sliderItems[0].offsetWidth;
        let slidesLength = sliderItems.length;
        let positionX = 0;
        let index = 0;

        nextBtn.addEventListener("click", function() {
            handleChangeSlide(1);
        });

        prevBtn.addEventListener("click", function() {
            handleChangeSlide(-1);
        });

        function handleChangeSlide(direction)
        {
            if (direction === 1)
            {
                if (index >= slidesLength - 1) 
                {
                    index = slidesLength - 1;
                    return;
                }
                positionX = positionX - sliderItemWidth;
                sliderMain.style = `transform: translateX(${positionX}px)`;
                index++;
            }
            else if (direction === -1)
            {  
                if (index <= 0) 
                { 
                    index = 0;
                    return;
                };
                positionX = positionX + sliderItemWidth;
                sliderMain.style = `transform: translateX(${positionX}px)`;
                index--;
            }
        }
    }   

    //scroll
    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $(".go_to_top").fadeIn();
        } else {
            $(".go_to_top").fadeOut();
        }
    });

    $(".go_to_top").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 500);
    });

    //accordion
    let acc = document.querySelectorAll(".question > div:first-child");
    for (let a of acc)
    {
        a.addEventListener("click", function() {
            let panel = a.nextElementSibling;
            if (panel.style.maxHeight) {
                a.classList.remove("active");
                panel.classList.remove("active");
            } else {
                a.classList.toggle("active");
                a.firstChild.classList.toggle("active");
                panel.classList.toggle("active");
            }
        });
    }
    
    //search
    let arr = [];
    let idx = 0;
    let h2 = document.querySelectorAll("h2");
    for (let h of h2)
    {
        arr[idx] = h.innerText.toLowerCase();
        idx++;
    }
    $(".search input").keyup(function() {
        
        let t = $(this).val();
        let h ="";
        for (let a of arr)
            if (a.indexOf(t.toLowerCase()) >= 0)
                h += `<li>${a}</li>`;
        if (h !== "") {
            $(".search_box").html(h);
            $(".search_box").show();   
        }
        if ($(".search input").val() == "")
        {
            $(".search_box").hide();
        }
    });
    $(".search_box").on("click", "li", function() {
        let text = $(this).text();
        $(".search input").val(text);
        $(".search_box").hide();
    });

    //scroll to element
    $(".search i").click(function() {
        let v = $(".search input").val();
        for (let h of $("h2"))
        {
            if (h.innerText.toLowerCase() == v)
            {
                h.scrollIntoView({behavior:"smooth", block:"start"});
            }
        }
    })
});