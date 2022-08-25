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

    let value = document.querySelectorAll(".images img");
    let btn = document.querySelectorAll(".btn>div");

    for (let a of value) {
        if(a.getAttribute("alt") == "Ảnh") {
            a.parentElement.parentElement.style.display = "block";
        }
    }
    for (let b of btn) {
        b.addEventListener("click", function() {
            for (let v of value) {
                v.parentElement.parentElement.style.display = "none";
                if( b.innerText == v.getAttribute("alt")) {
                    v.parentElement.parentElement.style.display = "block";
                    b.style.backgroundColor = "#f59607";
                    if (b.innerText == "Video")
                        btn[0].style.backgroundColor = "#fff";
                    else
                        btn[1].style.backgroundColor = "#fff";
                } 
            }
        })
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

    //around
    let deg = 0;
    setInterval(function() {
        let circle = document.querySelector(".circle");
        let circle_content = document.querySelectorAll(".circle_content");
        circle.style.transform = `rotate(${deg}deg)`;
        for (let c of circle_content)
            c.style.transform = `rotate(-${deg}deg)`;
        console.log(circle.style.transform)
        deg++;
    }, 80);
    
});