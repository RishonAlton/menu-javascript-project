const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      image: "./Images/Item-01.jpeg",
      description: `A perfect breakfast option, these healthy pancakes make for a perfect delight to satiate those cravings and kick start the day.`,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      image: "./Images/Item-02.jpeg",
      description: `Canadian cheese, caramelized onions and All-Canadian sauce on a brioche bun. Served with wavy-cut French fries.`,
    },
    {
      id: 3,
      title: "chocolate hazelnut milkshake",
      category: "shakes",
      price: 6.99,
      image: "./Images/Item-03.jpeg",
      description: `Blend of a creamy concoction with flavours of chocolate, cocoa powder and hazelnut. Garnished with hazelnuts, and chocolate shavings.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      image: "./Images/Item-04.jpeg",
      description: `An amazing breakfast option, this delicious item makes for a perfect delight to satiate those cravings and kick start the day.`,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      image: "./Images/Item-05.jpeg",
      description: `An Egg & A Burger? You'll be pleasantly surprised! This burger is topped with fried egg, melted Cheddar cheese & crispy bacon.`,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      image: "./Images/Item-06.jpeg",
      description: `Layers of creamy chocolate pudding, cream cheese fluff and whipped cream. Tantalize your tastebuds to this Heavenly Oreo Dream.`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      image: "./Images/Item-07.jpeg",
      description: `This is one of the most delicious foods we serve. Start your day with these crispy overflowing Bacon and enjoy its taste.`,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      image: "./Images/Item-08.jpeg",
      description: `This American Classic Burger is one of the best options for lunch and is rewarding to eat.`,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      image: "./Images/Item-09.jpeg",
      description: `Tired of being in quarantine? This shake is a perfect delight and is very refreshing.`,
    },
    {
      id: 10,
      title: "bison steak",
      category: "dinner",
      price: 22.99,
      image: "./Images/Item-10.jpeg",
      description: `Hungry but worried about gaining more fat? This Bison Steak is a healthy choice if you're looking to reduce your calorie or fat intake.`,
    },
]

const menuContainer = document.getElementById("menu-container")
const buttonsContainer = document.getElementById("buttons-container")

const displayMenu = (data) => {
  let menuItems = data.map(item => {
    return (
      `<section class="item-container">
      <img src=${item.image} alt=${item.title} class="images">
      <div class="info">
      <h5 class="title">${item.title}</h5>
      <h5 class="price">$ ${item.price}</h5>
      <hr />
      <p class="description">${item.description}</p>
      </div>
      </section>`
      )
    })
    menuItems = menuItems.join(" ")
    menuContainer.innerHTML = menuItems
  } 

  const displayButtons = () => {
    const categories = menu.reduce((values, item) => {
      if(!values.includes(item.category)) {
        values.push(item.category)
      }
      return values
    }, ["all"])
    let buttonItems = categories.map(category => {
      return (
        `<button class="category-button" data-id=${category}>${category}</button>`
      )
    })
    buttonItems = buttonItems.join(" ")
    buttonsContainer.innerHTML = buttonItems
    const categoryButtons = document.querySelectorAll(".category-button")
    categoryButtons.forEach(button => {
      button.addEventListener("click", (e) => {
        const category = e.currentTarget.dataset.id
        const filteredMenu = menu.filter(item => {
          if(item.category === category) {
            return item
          }
        })
      if(category === "all") {
        displayMenu(menu)
      }
      else {
        displayMenu(filteredMenu)
      }
    })
  })
}

window.addEventListener("DOMContentLoaded", () => {
  displayMenu(menu)
  displayButtons()
})