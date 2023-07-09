export function generateRandomLatitude() {
    const minLatitude = 12.84;
    const maxLatitude = 13.088;

    const randomLatitude =
        Math.random() * (maxLatitude - minLatitude) + minLatitude;

    const roundedLatitude = Number(randomLatitude.toFixed(6));

    return roundedLatitude;
}

export function generateRandomLongitude() {
    const minLongitude = 77.47;
    const maxLongitude = 77.69;

    const randomLongitude =
        Math.random() * (maxLongitude - minLongitude) + minLongitude;

    const roundedLongitude = Number(randomLongitude.toFixed(6));

    return roundedLongitude;
}
