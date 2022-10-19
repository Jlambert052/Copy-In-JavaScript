
        let num = 0;

        const loaded = () => {
            let dispCtrl = document.getElementById("disp");
            dispCtrl.value = num;
            dispCtrl.style.textAlign = "center";
            
            dispCtrl.style.color = (num%2===0) ? "red" : "black";
            dispCtrl.style.fontWeight = (num%3===0) ? "bold" : "normal";
            dispCtrl.style.fontStyle = (num%5===0) ? "italic" : "normal";
        }
        const minus = () => {
            num --;
            loaded();
        }
        const plus = () => {
            num ++;
            loaded();
        }