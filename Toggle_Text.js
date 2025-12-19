const heading = document.getElementById("head");
const Toggle = document.getElementById("To");
Toggle.addEventListener("click", () => {
     if(heading.textContent==="OFF") {
         heading.textContent="ON"
     }
     else {
        heading.textContent = "OFF"
     }
})
