console.log("This is my script");

const submitBtn = document.getElementById('submitBtn');
const resultCont = document.getElementById('resultCont');

submitBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    console.log("Clicked!");
    resultCont.innerHTML = `<img width="123" src="loading.svg" alt="">`;
    const key = "ema_live_l0odf1eGfFKNJAwjurg3XLCSh89sN0jHWvTgpjMi";
    const email = document.getElementById("username").value;
    const url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
    
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const result = await res.json();
        let str = ``;
        for (const key of Object.keys(result)) {
            if (result[key] !== "" && result[key] !== " ") {
                str += `<div>${key}: ${result[key]}</div>`;
            }
        }
        console.log(str);
        resultCont.innerHTML = str;
    } catch (error) {
        console.error("Error fetching data:", error);
        resultCont.innerHTML = `<div style="color:red;">Error: ${error.message}</div>`;
    }
});
