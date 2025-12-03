export default async function page() {
    return(
        <div className="px-5 pb-40">

                <h1 className="mx-auto mt-20 w-full lg:px-24 text-5xl md:text-6xl font-black pb-10">Menu</h1>


        <div className="flex flex-col flex-wrap justify-center gap-y-5 gap-x-5 lg:px-24">
          {/* ROW ONE */}

          {/* SATURDAY LUNCH */}
          <div className="flex flex-col flex-start bg-[#1A1C28] border border-b-2 border-[#992444] rounded-[1.5rem] py-10 md:px-10 h-auto gap-y-5">
            <h1 className=' text-[#A6CDC4] text-center md:text-left text-2xl px-5 lg:px-0'>Saturday Lunch: UnbelievaBowl</h1>
              <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-center">
                <h2 className="text-xl">Teriyaki Chicken Bowl</h2>
                <p className="border border-b-1 border-[#A6CDC4] px-2 rounded-[10rem] mt-1">Gluten-free</p>
              </div>

            <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-center">
              <h2 className="text-xl">Tofu Teriyaki Bowl</h2>
              <div className="flex flex-row items-center gap-x-1">
                <p className="border border-b-1 border-[#A6CDC4] px-2 rounded-[10rem] mt-1">Gluten-free</p>
                <p className="border border-b-1 border-[#D09C51] px-2 rounded-[10rem] mt-1">Vegan</p>
                <p className="border border-b-1 border-[#992444] px-2 rounded-[10rem] mt-1">Vegetarian</p>
                <p className="border border-b-1 border-[#CCBA97] px-2 rounded-[10rem] mt-1">Halal</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-center">
              <h2 className="text-xl">Teriyaki Sauce</h2>
              <div className="flex flex-row items-center gap-x-1">
                <p className="border border-b-1 border-[#A6CDC4] px-2 rounded-[10rem] mt-1">Gluten-free</p>
                <p className="border border-b-1 border-[#D09C51] px-2 rounded-[10rem] mt-1">Vegan</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-center">
              <h2 className="text-xl">Spicy Mayo</h2>
              <p className="border border-b-1 border-[#A6CDC4] px-2 rounded-[10rem] mt-1">Gluten-free</p>
            </div>

            <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-center">
              <h2 className="text-xl">Sriracha Sauce</h2>
              <div className="flex flex-row items-center gap-x-1">
                <p className="border border-b-1 border-[#A6CDC4] px-2 rounded-[10rem] mt-1">Gluten-free</p>
                <p className="border border-b-1 border-[#D09C51] px-2 rounded-[10rem] mt-1">Vegan</p>
              </div>
            </div>
          </div>

          {/* SATURDAY DINNER */}
          <div className="flex flex-col flex-start bg-[#1A1C28] border border-b-2 border-[#992444] rounded-[1.5rem] py-10 md:px-10 h-auto gap-y-5">
            <h1 className=' text-[#A6CDC4] text-center md:text-left text-2xl px-5 lg:px-0'>Saturday Dinner: Cici’s + MOD Pizza</h1>
              <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-center">
                <h2 className="text-xl">Chicken Pizza</h2>
                {/* <p className="border border-b-1 border-[#A6CDC4] px-2 rounded-[10rem] mt-1">Gluten-free</p> */}
              </div>

            <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-center">
              <h2 className="text-xl">Veggie Pizza</h2>
              <div className="flex flex-row items-center gap-x-1">
                <p className="border border-b-1 border-[#992444] px-2 rounded-[10rem] mt-1">Vegetarian</p>
                <p className="border border-b-1 border-[#CCBA97] px-2 rounded-[10rem] mt-1">Halal</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-center">
              <h2 className="text-xl">MOD Olive Pizza</h2>
              <div className="flex flex-row items-center gap-x-1">
                <p className="border border-b-1 border-[#A6CDC4] px-2 rounded-[10rem] mt-1">Gluten-free</p>
                <p className="border border-b-1 border-[#D09C51] px-2 rounded-[10rem] mt-1">Vegan</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-center">
              <h2 className="text-xl">Spicy Mayo</h2>
              <p className="border border-b-1 border-[#A6CDC4] px-2 rounded-[10rem] mt-1">Gluten-free</p>
            </div>

            <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-center">
              <h2 className="text-xl">Sriracha Sauce</h2>
              <div className="flex flex-row items-center gap-x-1">
                <p className="border border-b-1 border-[#A6CDC4] px-2 rounded-[10rem] mt-1">Gluten-free</p>
                <p className="border border-b-1 border-[#D09C51] px-2 rounded-[10rem] mt-1">Vegan</p>
              </div>
            </div>
          </div>

          {/* MIDNIGHT SNACK */}
          <div className="flex flex-col flex-start bg-[#1A1C28] border border-b-2 border-[#992444] rounded-[1.5rem] py-10 md:px-10 h-auto gap-y-5 max-w-1/2">
            <h1 className=' text-[#A6CDC4] text-center md:text-left text-2xl px-5 lg:px-0'>Midnight Snack: Nikki’s Popcorn</h1>
              <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-center">
                <h2 className="text-xl">Buttery</h2>
                <div className="flex flex-row items-center gap-x-1">
                  <p className="border border-b-1 border-[#A6CDC4] px-2 rounded-[10rem] mt-1">Gluten-free</p>
                  <p className="border border-b-1 border-[#992444] px-2 rounded-[10rem] mt-1">Vegetarian</p>
                  <p className="border border-b-1 border-[#CCBA97] px-2 rounded-[10rem] mt-1">Halal</p>
                </div>
              </div>

            <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-center">
              <h2 className="text-xl">Kettle</h2>
              <div className="flex flex-row items-center gap-x-1">
                <p className="border border-b-1 border-[#A6CDC4] px-2 rounded-[10rem] mt-1">Gluten-free</p>
                <p className="border border-b-1 border-[#D09C51] px-2 rounded-[10rem] mt-1">Vegan</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-center">
              <h2 className="text-xl">Cinnamon Churro</h2>
              <div className="flex flex-row items-center gap-x-1">
                <p className="border border-b-1 border-[#A6CDC4] px-2 rounded-[10rem] mt-1">Gluten-free</p>
                <p className="border border-b-1 border-[#D09C51] px-2 rounded-[10rem] mt-1">Vegan</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-center">
              <h2 className="text-xl">Jalapeno Ranch</h2>
              <div className="flex flex-row items-center gap-x-1">
                  <p className="border border-b-1 border-[#A6CDC4] px-2 rounded-[10rem] mt-1">Gluten-free</p>
                  <p className="border border-b-1 border-[#992444] px-2 rounded-[10rem] mt-1">Vegetarian</p>
                  <p className="border border-b-1 border-[#CCBA97] px-2 rounded-[10rem] mt-1">Halal</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-center">
              <h2 className="text-xl">Sea Salt Caramel</h2>
              <div className="flex flex-row items-center gap-x-1">
                  <p className="border border-b-1 border-[#A6CDC4] px-2 rounded-[10rem] mt-1">Gluten-free</p>
                  <p className="border border-b-1 border-[#992444] px-2 rounded-[10rem] mt-1">Vegetarian</p>
                  <p className="border border-b-1 border-[#CCBA97] px-2 rounded-[10rem] mt-1">Halal</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-center">
              <h2 className="text-xl">Southwest Jalapeno</h2>
              <div className="flex flex-row items-center gap-x-1">
                  <p className="border border-b-1 border-[#A6CDC4] px-2 rounded-[10rem] mt-1">Gluten-free</p>
                  <p className="border border-b-1 border-[#992444] px-2 rounded-[10rem] mt-1">Vegetarian</p>
                  <p className="border border-b-1 border-[#CCBA97] px-2 rounded-[10rem] mt-1">Halal</p>
              </div>
            </div>
          </div>

          {/* SUNDAY BREAKFAST */}
          <div className="flex flex-col flex-start bg-[#1A1C28] border border-b-2 border-[#992444] rounded-[1.5rem] py-10 md:px-10 h-auto gap-y-5">
            <h1 className=' text-[#A6CDC4] text-center md:text-left text-2xl px-5 lg:px-0'>Sunday Breakfast: 85 Degrees, Reverie Bakeshop, Chic Coffee Events</h1>
              <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-center">
                <h2 className="text-xl">Chocolate Croissant</h2>
                <div className="flex flex-row items-center gap-x-1">
                  <p className="border border-b-1 border-[#992444] px-2 rounded-[10rem] mt-1">Vegetarian</p>
                  <p className="border border-b-1 border-[#CCBA97] px-2 rounded-[10rem] mt-1">Halal</p>
                </div>
              </div>

            <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-center">
              <h2 className="text-xl">White Chocolate Strawberry Bun</h2>
              <div className="flex flex-row items-center gap-x-1">
                <p className="border border-b-1 border-[#992444] px-2 rounded-[10rem] mt-1">Vegetarian</p>
                <p className="border border-b-1 border-[#CCBA97] px-2 rounded-[10rem] mt-1">Halal</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-center">
              <h2 className="text-xl">Matcha Choco Bun</h2>
              <div className="flex flex-row items-center gap-x-1">
                <p className="border border-b-1 border-[#992444] px-2 rounded-[10rem] mt-1">Vegetarian</p>
                <p className="border border-b-1 border-[#CCBA97] px-2 rounded-[10rem] mt-1">Halal</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-center">
              <h2 className="text-xl">Garlic Cheese</h2>
              <div className="flex flex-row items-center gap-x-1">
                  <p className="border border-b-1 border-[#992444] px-2 rounded-[10rem] mt-1">Vegetarian</p>
                  <p className="border border-b-1 border-[#CCBA97] px-2 rounded-[10rem] mt-1">Halal</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-center">
              <h2 className="text-xl">Jalapeno Cream Cheese</h2>
              <div className="flex flex-row items-center gap-x-1">
                  <p className="border border-b-1 border-[#992444] px-2 rounded-[10rem] mt-1">Vegetarian</p>
                  <p className="border border-b-1 border-[#CCBA97] px-2 rounded-[10rem] mt-1">Halal</p>
              </div>
            </div>

            <div className="flex flex-col flex-wrap md:flex-row gap-y-1 gap-x-3 items-center">
              <h2 className="text-xl text-center lg:text-left px-2 lg:px-0">Reverie Bakeshop: Sweet Breakfast Tray (Muffins/Donuts/Scones)</h2>
              <div className="flex flex-row items-center gap-x-1">
                  <p className="border border-b-1 border-[#A6CDC4] px-2 rounded-[10rem] mt-1">Gluten-free</p>
                  <p className="border border-b-1 border-[#D09C51] px-2 rounded-[10rem] mt-1">Vegan</p>
              </div>
            </div>

            <div className="flex flex-col flex-wrap gap-y-1 gap-x-3 items-center md:items-start">
              <h2 className="text-xl text-center lg:text-left px-2 lg:px-0">Chic Coffee Events</h2>
              <div className="flex flex-row flex-wrap items-center justify-center px-5 md:px-0 md:justify-start gap-x-1 gap-y-2">
                  <p className="border border-b-1 border-white px-2 rounded-[10rem] mt-1">Espresso</p>
                  <p className="border border-b-1 border-white px-2 rounded-[10rem] mt-1">Cafe Americano</p>
                  <p className="border border-b-1 border-white px-2 rounded-[10rem] mt-1">Cappuccino</p>
                  <p className="border border-b-1 border-white px-2 rounded-[10rem] mt-1">Café Latte</p>
                  <p className="border border-b-1 border-white px-2 rounded-[10rem] mt-1">Café Mocha</p>
                  <p className="border border-b-1 border-white px-2 rounded-[10rem] mt-1">Mochaccino</p>
                  <p className="border border-b-1 border-white px-2 rounded-[10rem] mt-1">Macchiato</p>
                  <p className="border border-b-1 border-white px-2 rounded-[10rem] mt-1">French Vanilla and whipped Hot Chocolate</p>
                  <p className="border border-b-1 border-white px-2 rounded-[10rem] mt-1">Assortment of teas</p>
                  <p className="border border-b-1 border-white px-2 rounded-[10rem] mt-1">Decaf options available</p>
                  
              </div>
              <p className="mt-3 px-5 md:px-0">
                    <b>Syrups:</b> Hazelnut, Amaretto, Caramel, Irish Cream, Chai, Cinnamon, Lavender 
                    <br></br>
                    <b>Sugar Free syrups:</b> Caramel and Vanilla
                    <br></br>
                    <b>Non-dairy milk options:</b> Almond and Oat milk</p>
            </div>
          </div>

          {/* SUNDAY LUNCH */}
          <div className="flex flex-col flex-start bg-[#1A1C28] border border-b-2 border-[#992444] rounded-[1.5rem] py-10 md:px-10 h-auto gap-y-5">
            <h1 className=' text-[#A6CDC4] text-center md:text-left text-2xl px-5 lg:px-0'>Sunday Lunch: Rusty Taco</h1>
              <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-center">
                <h2 className="text-xl">Chicken Fajita Taco</h2>
                <div className="flex flex-row items-center gap-x-1">
                  <p className="border border-b-1 border-[#A6CDC4] px-2 rounded-[10rem] mt-1">Gluten-free</p>
                </div>
              </div>

            <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-center">
              <h2 className="text-xl">Black Bean Taco</h2>
              <div className="flex flex-row items-center gap-x-1">
                <p className="border border-b-1 border-[#A6CDC4] px-2 rounded-[10rem] mt-1">Gluten-free</p>
                <p className="border border-b-1 border-[#992444] px-2 rounded-[10rem] mt-1">Vegetarian</p>
                <p className="border border-b-1 border-[#CCBA97] px-2 rounded-[10rem] mt-1">Halal</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-center">
              <h2 className="text-xl">Black Bean Taco with No Cheese</h2>
              <div className="flex flex-row items-center gap-x-1">
                <p className="border border-b-1 border-[#A6CDC4] px-2 rounded-[10rem] mt-1">Gluten-free</p>
                <p className="border border-b-1 border-[#D09C51] px-2 rounded-[10rem] mt-1">Vegan</p>
              </div>
            </div>
            
          </div>
          
        </div>

    </div>
    );
}