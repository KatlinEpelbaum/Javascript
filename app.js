//Element Selection

//const h1Element = document.getElementsByTagName("h1");
//const h1Element = document.getElementById("title-with-id")
//const h1Element = document.getElementsByClassName("title-with-class")
//const h1Element = document.querySelector("#title-with-id")
//const h1Element = document.querySelectorAll ("h1")

//console.log(h1Element)


//Element creation

const paragraphElement = document.createElement("p");
paragraphElement.innerText = "Mis iganes siin võiks olla.";

const wrapper = document.querySelector(".wrapper");
wrapper.appendChild(paragraphElement);


//Exercise

const carsArray = [
    { make: "Toyota", model: "Camry", year: 2022, color: "Silver", views: 15000 },
    { make: "Honda", model: "Civic", year: 2023, color: "Blue", views: 12000 },
    { make: "Ford", model: "Fusion", year: 2021, color: "Black", views: 20000 },
    { make: "Chevrolet", model: "Malibu", year: 2022, color: "White", views: 18000 },
    { make: "Nissan", model: "Altima", year: 2023, color: "Gray", views: 16000 },
    { make: "Hyundai", model: "Sonata", year: 2021, color: "Red", views: 22000 },
    { make: "BMW", model: "3 Series", year: 2022, color: "Silver", views: 25000 },
    { make: "Mercedes-Benz", model: "C-Class", year: 2023, color: "Blue", views: 28000 },
    { make: "Audi", model: "A4", year: 2021, color: "Black", views: 30000 },
    { make: "Lexus", model: "ES", year: 2022, color: "White", views: 17000 },
    { make: "Kia", model: "Optima", year: 2023, color: "Gray", views: 19000 },
    { make: "Mazda", model: "6", year: 2021, color: "Red", views: 21000 },
    { make: "Volkswagen", model: "Passat", year: 2022, color: "Silver", views: 24000 },
    { make: "Subaru", model: "Legacy", year: 2023, color: "Blue", views: 27000 },
    { make: "Tesla", model: "Model 3", year: 2021, color: "Black", views: 32000 },
    { make: "Volvo", model: "S60", year: 2022, color: "White", views: 28000 },
    { make: "Chrysler", model: "300", year: 2023, color: "Gray", views: 22000 },
    { make: "Jaguar", model: "XE", year: 2021, color: "Red", views: 25000 },
    { make: "Lincoln", model: "MKZ", year: 2022, color: "Silver", views: 20000 },
    { make: "Buick", model: "Regal", year: 2023, color: "Blue", views: 18000 },
    { make: "Cadillac", model: "CTS", year: 2021, color: "Black", views: 21000 },
    { make: "Infiniti", model: "Q50", year: 2022, color: "White", views: 24000 },
    { make: "Acura", model: "TLX", year: 2023, color: "Gray", views: 27000 },
    { make: "Porsche", model: "Panamera", year: 2021, color: "Red", views: 30000 },
    { make: "Genesis", model: "G80", year: 2022, color: "Silver", views: 32000 },
    { make: "Land Rover", model: "Range Rover", year: 2023, color: "Blue", views: 35000 },
    { make: "Jeep", model: "Grand Cherokee", year: 2021, color: "Black", views: 28000 },
    { make: "Ford", model: "Explorer", year: 2022, color: "White", views: 26000 },
    { make: "Chevrolet", model: "Tahoe", year: 2023, color: "Gray", views: 30000 },
    { make: "GMC", model: "Yukon", year: 2021, color: "Red", views: 28000 },
    { make: "Dodge", model: "Durango", year: 2022, color: "Silver", views: 32000 }
  ];

  carsArray.forEach((car) => {
     const tableRowElement = document.createElement("tr")
     tableRowElement.innerHTML = "
            <td>${car.make}</td>
            <td>${car.model}</td>
            <td>${car.year}</td>
            <td>${car.color}</td>
            <td>${car.views}</td> 
        ";
    
  });