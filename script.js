document.getElementById("getDataBtn").addEventListener("click", async function() {
    const response = await fetch("http://localhost:5000/data");
    const data = await response.json();
    document.getElementById("result").innerText = data.message;
});