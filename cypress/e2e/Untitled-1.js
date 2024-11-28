var results = "10";

      for (let i = 0; i < 10; i++) {
        // Generate two random numbers between 1 and 100 (you can adjust the range as needed)
        var num1 = Math.floor(Math.random() * 100) + 1;
        var num2 = Math.floor(Math.random() * 100) + 1;

        // Perform the addition
        var sum = num1 + num2;

        // Append the current result to the results string
        results += "Generated numbers: " + num1 + " and " + num2 + " - The sum is: " + sum + "<br>";
        console.log(results)
      
      }