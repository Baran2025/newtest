function showText() {
    console.log("Fetching data...");
    fetch("sample.txt")
    .then((response) => {
        console.log("Response received:", response);
        return response.text();
    })
    .then((data) => {
        document.getElementById("output").innerHTML = data;
        console.log("Data displayed:", data);
    })
    .catch((error) => {
        console.log("Error fetching data:", error);
    });
}
