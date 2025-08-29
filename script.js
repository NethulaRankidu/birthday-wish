function start() {
    // Collecting all the editing parts of HTML (editing through the GET)
    var birthdayTitle = document.getElementById("birthdayHeading");
    var pfp = document.getElementById("birthdayPfp");
    var nameWithTitle = document.getElementById("birthdayName");
    var wish = document.getElementById("birthdayWish");
    var sender = document.getElementById("birthdaySender");
    var body = document.getElementById("body");

    // Finding the GET parameters from the URL and assigning them
    const urlParams = new URLSearchParams(window.location.search);
    const birthday_title = urlParams.get('title');
    const profile_pic = urlParams.get('pfp');
    const name_with_title = urlParams.get('name');
    const birthday_wish = urlParams.get('wish');
    const wish_sender = urlParams.get('sender');
    const body_bg = urlParams.get('bg');
    console.log(birthday_title);
    console.log(profile_pic);
    console.log(name_with_title);
    console.log(birthday_wish);
    console.log(wish_sender);
    console.log(body_bg);

    if (birthday_title != null) {
        birthdayTitle.innerHTML = birthday_title;
    } else {
        birthdayTitle.innerHTML = "Happy Birthday!";
    }

    if (profile_pic != null) {
        pfp.src = profile_pic;
    } else {
        pfp.src = "assets/placeholder-pfp.jpg";
    }

    if (name_with_title != null) {
        nameWithTitle.innerHTML = name_with_title;
    } else {
        nameWithTitle.innerHTML = "Dear User!";
    }

    if (birthday_wish != null) {
        wish.innerHTML = birthday_wish;
    } else {
        wish.innerHTML = "Happy birthday to the best friend anyone could ask for! May your day be as amazing as you are.";
    }

    if (wish_sender != null) {
        sender.innerHTML = wish_sender;
    } else {
        sender.innerHTML = "From: Anon";
    }

    if (body_bg != null) {
        body.style = "background-image: url("+ body_bg + ")";
    } else {
        body.style = "background-image: url(assets/background.jpg)";
    }
}