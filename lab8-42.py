#Input name.
name = input("What is your name? ")

#Input price of the item and the discount percentage.
price = float(input("Enter price of item: "))
discount_percentage = float(input("Enter the discount percentage: "))

#Calculate the discount amount and the final sale price.
discount_amount = price * (discount_percentage / 100)
final_price = price - discount_amount

#Format for output.
output = f"""{name}, here are the results:
Original Item Price: ${price:10.2f}
Amount Discounted:   ${discount_amount:10.2f}
                      {'-' * 10}
Final Sale Price:    ${final_price:10.2f}"""

#Output the results.
print(output)






    <button onclick="callFunction()">Click Here</button>
    <p id = "paragraph1">Hi</p>
      <script>
      function callFunction() {
        document.getElementById("paragraph1").innerHTML="Hello, Javascript World!";
      }
      </script>
      
    
   
   
    <p id="demo"></p>

  <script>
    var x =  myFunction(4,3)
    document.getElementById("demo").innerHTML = x;

    function myFunction(a,b) {
      return a * b;
    }
  </script>
