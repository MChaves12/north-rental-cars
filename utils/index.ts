export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': '2f98e5281bmsh08de9d3d6326391p159d40jsnbb02ba1ba38d',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars', {
        headers: headers,
    });

    const result = await response.json();

    return result;
}
