function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

function flip() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    const input = 'Files';
    let letter = Math.floor(Math.random() * 25);
    if (letter > 5) {
        result = input;
    }
    else if (letter == 0) {
        result = characters.charAt(Math.floor(Math.random() * charactersLength)) + input.substring(1, 5);
    } else if (letter == 5) {
        result = input.substring(0, 4) + characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    else {
        result = input.substring(0, letter) + characters.charAt(Math.floor(Math.random() * charactersLength)) + input.substring(letter + 1, 5);
    }
    return result;
}