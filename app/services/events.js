const getHeaders = () => {
    var headers = new Headers();
    headers.append('authorization', 'Bearer lM46zizypO9aNLJ4JcE_mJWoofTi6jw5V5jTInadLX51SQ9V8FrkpLkgQg0JNGJoxa1nhHZsDeqIeOosGc8G9xZDlIF7C_vG4jG84X-EmEiv17Gd6uuW6A1uGZwTh4H8A4iFwoaiidk5hXbBJ7mJpHyK3jm_XXU3JB2i2lpuwmIxF3Re0h9bRx6DhCE9qH9-F-lIbYkrTYz6dcdC9gc68iVwqGMufB15nZX1N1SKRdYQusJQAlSV9mtcLmLOulGnYcFmk4xiwTp0wXM-RH1msdxpl5R8mG-Bk9-poGKdmW8_a7isWond_AswksKWth7TMVAB9MPOYBanHg_xZ9uaFciptwcj3O01MFz6qtH83YQh3TQaJyEiHTDK2z7EG3G3eRkAyZkOORHmzwuWof7nj__-Pf08T7r7OjdFhaQR4n-xtV9Y1H_uUp4eEtmP4-CqAv8zqF4-gVfeikBIqQfOTOqAuxNqgJPaXod_JNzy1HxR3h0AcH09wHN9znthjS_NEekAneEXnTHcIEAojh4Ys6-y5Ny9e5mWHx-E4rXu1fjpo8FxNygJczaVh6NPUOZdTRx2CA');
    headers.append('Content-Type', 'application/json');
    return headers;
}

export const fetchEvents = () => {
    return fetch('https://a.sparxo.com/1/members/current/events', { method: 'GET', headers: getHeaders() })
        .then(response =>
            response.json().then(json => {
                if (!response.ok) {
                    return { error: json.message };
                }
                var events = json.result.map(e => ({ id: e.id, name: e.name, description: e.long_description, imageUrl: combineImageUrl(e.image_url, e.image_crop_info) }));
                return { events };
            })
        ).catch(error =>({error: error.message}));
}

const combineImageUrl = (imageUrl, imageCropInfo) => {
    if (imageCropInfo.x1 === 0 && imageCropInfo.y1 === 0 && imageCropInfo.x2 === 0 && imageCropInfo.y2) {
        return imageUrl;
    }
    return imageUrl + '?maxwidth=3200&maxheight=3200&crop=(' + imageCropInfo.x1 + ',' + imageCropInfo.y1 + ',' + imageCropInfo.x2 + ',' + imageCropInfo.y2 + ')';
}