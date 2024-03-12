fetch("data.json")
    .then((response) => response.json())
    .then((data) => populateList(data))
    .catch((error) => console.error("JSON yüklenirken hata oluştu: ", error));

function populateList(data) {
    let list = document.getElementById("list");
    let result = document.getElementById("result");
    let score = 0;
    data.forEach((item, index) => {
        let li = document.createElement("li");
        li.className = `flex justify-between rounded-lg ${getBackgroundColor(index)} p-4`;
        li.innerHTML = `
                        <div class="flex gap-2">
                            <img src="${item.icon}" alt="${item.category} icon" />
                            <span class="font-bold ${getTextColor(index)}">${item.category}</span>
                        </div>
                        <div class="font-extrabold text-neutral-dark-gray-blue/50"><span class="text-neutral-dark-gray-blue">${item.score}</span> / 100</div>
                    `;
        list.appendChild(li);
        score += item.score;
    });
    result.innerHTML = (score / data.length).toFixed(0);
}

function getBackgroundColor(index) {
    const colors = ["bg-primary-light-red/10", "bg-primary-orangey-yellow/10", "bg-primary-green-teal/10", "bg-primary-cobalt-blue/10"];
    return colors[index];
}

function getTextColor(index) {
    const colors = ["text-primary-light-red", "text-primary-orangey-yellow", "text-primary-green-teal", "text-primary-cobalt-blue"];
    return colors[index];
}
