export const reformatCount = (starCount) => {
    let price = ""
    if (starCount.length > 3) {
        let k = 0;
        for (let i = starCount.length - 1; i >= 0; i--) {
            price = starCount.charAt(i) + price
            k++
            if ((i - starCount.length)  % 3 === 0) {
                price = " " + price
            }
        }
    } else {
        price = starCount
    }
    return price
}

export const add_notification = (head, text, type, addNotification) => {
    const id = Date.now()
    addNotification({
        id,
        head,
        text,
        type,
    })
}