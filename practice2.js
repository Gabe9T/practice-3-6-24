const algo = () => {
        let pattern = "";
        for (let i = 0; i < 8; i++) {
            let row = "0".repeat(i) + "1" + "0".repeat(7 - i);
            pattern += row + "\n";
        }
        return pattern;
    }
    
    console.log(generatePattern());