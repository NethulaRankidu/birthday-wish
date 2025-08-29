function start() {
    // Text in HTML
    var birthdayTitle = document.getElementById("birthdayHeading");
    var pfp = document.getElementById("birthdayPfp");
    var nameWithTitle = document.getElementById("birthdayName");
    var wish = document.getElementById("birthdayWish");
    var sender = document.getElementById("birthdaySender");
    var body = document.getElementById("body");

    // Assigning GET values
    const urlParams = new URLSearchParams(window.location.search);
    const birthday_title = urlParams.get('title');
    const profile_pic = urlParams.get('pfp');
    const name_with_title = urlParams.get('name');
    const birthday_wish = urlParams.get('wish');
    const wish_sender = urlParams.get('sender');
    const body_bg = urlParams.get('bg');

    // printing in console
    console.log(birthday_title);
    console.log(profile_pic);
    console.log(name_with_title);
    console.log(birthday_wish);
    console.log(wish_sender);
    console.log(body_bg);

    //default values to fallback
    const bdTitleDef = "Happy Birthday!";
    const pfpDef = "assets/placeholder-pfp.jpg";
    const nameDef = "Dear User!";
    const wishDef = "Happy birthday to the best friend anyone could ask for! May your day be as amazing as you are.";
    const senderDef = "From: Anon";
    const bodyBgDef = "background-image: url(assets/background.jpg)";

    if (birthday_title != null) {
        if (birthday_title.trim() === "") {
            birthdayTitle.innerHTML = bdTitleDef;
        }else{
            birthdayTitle.innerHTML = birthday_title;
        }
    } else {
        birthdayTitle.innerHTML = bdTitleDef;
    }

    if (profile_pic != null) {
        if (profile_pic.trim() === "") {
            pfp.src = pfpDef;
        }else{
            pfp.src = profile_pic;
        }
    } else {
        pfp.src = pfpDef;
    }

    if (name_with_title != null) {
        if (name_with_title.trim() === "") {
            nameWithTitle.innerHTML = nameDef;
        }else{
            nameWithTitle.innerHTML = name_with_title;
        }
    } else {
        nameWithTitle.innerHTML = nameDef;
    }

    if (birthday_wish != null) {
        if (birthday_wish.trim() === "") {
            wish.innerHTML = wishDef;
        }else{
            wish.innerHTML = birthday_wish;
        }
    } else {
        wish.innerHTML = wishDef;
    }

    if (wish_sender != null) {
        if (wish_sender.trim() === "") {
            sender.innerHTML = senderDef;
        }else{
            sender.innerHTML = wish_sender;
        }
        sender.innerHTML = wish_sender;
    } else {
        sender.innerHTML = senderDef;
    }

    if (body_bg != null) {
        if (wish_sender.trim() === "") {
            body.style = bodyBgDef;
        }else{
            body.style = "background-image: url("+ body_bg + ")";
        }
    } else {
        body.style = bodyBgDef;
    }
}