const results = document.querySelector("#results");

async function asyncFetch(value) {
    console.log(value)
    const res = await fetch(`https://swapi.dev/api/${value}/`);
    const data = await res.json();
    displayResults(data, value);
}

function displayResults(data, value) {
    let output = "";
    // console.log(data);
    if (value === 'films') {
        data.results.forEach(item => {
            output += `
                    <div class="card p-3 m-3" style="opacity:.8">
                        <h4 class="card-title text-center">${item.title}</h4> 
                        <div class="card-content">
                            <span style="text-decoration:underline">Эпизод</span>: ${item.episode_id}<br> 

                            <span style="text-decoration:underline">Продюсер</span>: ${item.producer}<br> 
                            <span style="text-decoration:underline">Режиссер</span>: ${item.director}<br> 
                            <span style="text-decoration:underline">Дата выпуска</span>: ${item.release_date}<br> 
                            <p class=""text-center>${item.opening_crawl}</p>
                        </div>
                    </div>
                    `
        })
    }
    if (value === 'people') {
        data.results.forEach(item => {
            output += `
                    <div class="card p-3 m-3" style="opacity:.8">
                        <h4 class="card-title text-center">${item.name}</h4> 
                        <div class="card-content">
                            <span style="text-decoration:underline">Рост</span>: ${item.height}<br> 
                            <span style="text-decoration:underline">Год рождения</span>: ${item.birth_year}<br> 
                            <span style="text-decoration:underline">Цвет кожи</span>: ${item.skin_color}<br> 
                        </div>
                    </div>
                    `
        })
    }
    if (value === 'vehicles') {
        data.results.forEach(item => {
            output += `
                    <div class="card p-3 m-3" style="opacity:.8">
                        <h4 class="card-title text-center">${item.name}</h4> 
                        <div class="card-content">
                            <span style="text-decoration:underline">Грузоподъёмность</span>: ${item.capacity} кг<br> 
                            <span style="text-decoration:underline">Модель</span>: ${item.model}<br> 
                            <span style="text-decoration:underline">Производитель</span>: ${item.manufacturer}<br> 
                            <span style="text-decoration:underline">Класс транспортного средства</span>: ${item.vechicle_class}<br> 
                        </div>
                    </div>
                    `
        })
    }
    results.innerHTML = output;
}


document.querySelector("#films").addEventListener("click", e => {
    asyncFetch(e.target.value);
});

document.querySelector("#people").addEventListener("click", e => {
    asyncFetch(e.target.value);
});

document.querySelector("#vehicles").addEventListener("click", e => {
    asyncFetch(e.target.value);
});
