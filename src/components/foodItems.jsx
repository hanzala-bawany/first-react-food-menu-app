import { FoodItem } from './foodItem'
import './foodItems.css'
import { useState } from 'react'



export const FoodItems = () => {

    const [categories, setCategories] = useState(["all", "breakfast", "lunch", "dinner", "drinks", "brunch"])
    console.log(categories, "---> categories");

    const [selectedCategory, setSelectedCategory] = useState("all")
    console.log(selectedCategory, "--> selected category");

    const allFoodItems = [
        {
            imgUrl: "https://th.bing.com/th/id/R.d9ceb784842fc43b99c56839cf5605a8?rik=BF6lXSSwQVf4JA&pid=ImgRaw&r=0",
            itemName: "Club Sandwitch",
            itemDescn: "Club beef Sendwitch stew served with salet.",
            itemCutPrice: "480",
            itemPrice: "400",
            categery: "brunch"
        },
        {
            imgUrl: "https://tse2.mm.bing.net/th/id/OIP.wBu0Xsb774mtzvjhq1C3DgHaE8?rs=1&pid=ImgDetMain",
            itemName: "Nihari",
            itemDescn: "Slow-cooked beef stew served with naan.",
            itemCutPrice: "400",
            itemPrice: "320",
            categery: "lunch"
        },
        {
            imgUrl: "https://th.bing.com/th/id/OIP.ymXKUrPlGQ3CP_gslHtH1wFZC1?w=345&h=181&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
            itemName: "Haleem",
            itemDescn: "A thick, savory dish made with meat and grains.",
            itemCutPrice: "300",
            itemPrice: "220",
            categery: "lunch"
        },
        {
            imgUrl: "https://th.bing.com/th/id/OIP.tOH2rEsmILJeRBQBFfdIqgAAAA?w=239&h=180&c=7&r=0&o=5&cb=iwc1&dpr=1.5&pid=1.7",
            itemName: "Fizup next",
            itemDescn: "Lemon-lime flavored soda, crisp and clean.",
            itemCutPrice: "90",
            itemPrice: "70",
            categery: "drinks"
        },
        {
            imgUrl: "https://th.bing.com/th/id/OIP.m9YiCPQwgGNYtz6IbzobGgHaG1?w=260&h=240&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
            itemName: "Chicken kerhai",
            itemDescn: "Spicy chicken cooked in traditional karahi style.",
            itemCutPrice: "450",
            itemPrice: "360",
            categery: "dinner"
        },
        {
            imgUrl: "https://th.bing.com/th/id/OIP.0WX5EfX0WkSUjmdfO2MhWwHaHa?rs=1&pid=ImgDetMain",
            itemName: "Chapli Kebab",
            itemDescn: "Flat minced meat kebabs fried to perfection.",
            itemCutPrice: "250",
            itemPrice: "180",
            categery: "dinner"
        },
        {
            imgUrl: "https://th.bing.com/th/id/OIP.WrAOvoxSRA7nG2Gzu42pXwAAAA?w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
            itemName: "Seekh Kebab",
            itemDescn: "Spiced skewers of minced meat grilled to juicy tenderness.",
            itemCutPrice: "300",
            itemPrice: "240",
            categery: "dinner"
        },
        {
            imgUrl: "https://www.bing.com/th/id/OIP.gzfLita-jg6Uhv0TfA8RZgHaHa?w=106&h=106&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
            itemName: "Samosa",
            itemDescn: "Crispy pastry filled with spiced potatoes.",
            itemCutPrice: "100",
            itemPrice: "70",
            categery: "breakfast"
        },
        {
            imgUrl: "https://th.bing.com/th/id/OIP.0_uP_Xml3mfB6vkbyKAv-gHaF-?w=278&h=224&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
            itemName: "Gol Gappa",
            itemDescn: "Crunchy puris with spicy water and chickpeas.",
            itemCutPrice: "80",
            itemPrice: "50",
            categery: "dinner"
        },
        {
            imgUrl: "https://th.bing.com/th/id/R.560d17d46f18010f6110d97438d83a9c?rik=m72%2bEyoZwZl6ng&pid=ImgRaw&r=0",
            itemName: "Cola next",
            itemDescn: "Refreshing cola beverage with a bold taste.",
            itemCutPrice: "100",
            itemPrice: "80",
            categery: "drinks"
        },
        {
            imgUrl: "https://th.bing.com/th/id/OIP.n1Yp8ytTylrsFotpZX_oOAHaEK?w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
            itemName: "Chicken Shawarma",
            itemDescn: "Seasoned chicken wrapped in pita bread.",
            itemCutPrice: "350",
            itemPrice: "270",
            categery: "breakfast"
        },
        {
            imgUrl: "https://th.bing.com/th/id/OIP.9p3L5KEoQazWERUMZDhxWAHaFa?w=292&h=213&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
            itemName: "Chcken Tikka",
            itemDescn: "Carrot dessert rich with ghee, milk and nuts.",
            itemCutPrice: "250",
            itemPrice: "200",
            categery: "lunch"
        },
        {
            imgUrl: "https://tse3.mm.bing.net/th/id/OIP.R3TLiHxOqTQXNce6hYXwKAHaEK?cb=iwc1&rs=1&pid=ImgDetMain",
            itemName: "Pakola",
            itemDescn: "Classic fizzy cola drink served chilled.",
            itemCutPrice: "100",
            itemPrice: "80",
            categery: "drinks"
        }
    ];

    return (
        <>
            <div id='categories'>
                {
                    categories.map((category) => {
                        return <button style={
                            category === selectedCategory ? { textDecoration: "underline 4px #fbca2b" } : {}}
                            onClick={() => setSelectedCategory(category)} >{category}
                        </button>
                    })
                }
            </div>


            <div id="foodItems">
                {
                    allFoodItems.filter((foodItem) => {
                        if (foodItem.categery === selectedCategory || selectedCategory === "all") return foodItem
                    })
                        .map(({ imgUrl, itemName, itemDescn, itemCutPrice, itemPrice }) => {
                            return < FoodItem imgUrl={imgUrl} itemName={itemName} itemDescn={itemDescn} itemCutPrice={itemCutPrice} itemPrice={itemPrice} />
                        })
                }
            </div>
        </>
    )
}