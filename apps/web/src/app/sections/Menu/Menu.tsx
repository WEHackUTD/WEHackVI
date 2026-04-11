import React from 'react'
import './Menu.css'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/shadcn/ui/table";

function Menu() {
  return (
    <div className="mt-36 px-5 pb-40">
      <div className='flex justify-center items-center mb-10'>
        <img
          className="h-auto md:px-0"
          src={"img/static/images/menu.png"}
          alt={"Dallas' Largest Inclusive Hackathon"}
        />
      </div>

      <div className="flex flex-col flex-wrap justify-center gap-y-5 gap-x-5 lg:px-24">
        {/* SATURDAY LUNCH */}
        <div className="flex flex-col flex-start menu-card rounded-[1.5rem] py-10 md:px-10 h-auto gap-y-5">
          <h1 className='menu-heading text-center md:text-left text-2xl px-5 lg:px-0'>
            Saturday Lunch: Madina Halal Grill
          </h1>

          <div className="flex flex-col gap-y-1">
            <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-start">
              <h2 className="text-xl">Falafel Wrap</h2>
              <div className="flex flex-row flex-wrap items-center gap-x-1">
                <p className="menu-chip border border-b-1 border-[#7bd051] px-2 rounded-[10rem] mt-1">
                  Vegan
                </p>
                <p className="menu-chip border border-b-1 border-[#c9d5e3] px-2 rounded-[10rem] mt-1">
                  Vegetarian
                </p>
              </div>
            </div>
            <p className="menu-note text-sm">
              Contains: Soy, Wheat
            </p>
          </div>

          <div className="flex flex-col gap-y-1">
            <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-start">
              <h2 className="text-xl">Chicken Wrap</h2>
              <div className="flex flex-row items-center gap-x-1">
                <p className="menu-chip border border-b-1 border-[#D1F4F3] px-2 rounded-[10rem] mt-1">
                  Non-Vegetarian
                </p>
              </div>
            </div>
            <p className="menu-note text-sm">
              Contains: Soy, Wheat
            </p>
          </div>

          <div className="flex flex-col gap-y-1">
            <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-start">
              <h2 className="text-xl">Falafel over Rice</h2>
              <div className="flex flex-row items-center gap-x-1">
                <p className="menu-chip border border-b-1 border-[#FFCB86] px-2 rounded-[10rem] mt-1">
                  Gluten-Free
                </p>
              </div>
            </div>
            <p className="menu-note text-sm">
              Contains: Soy
            </p>
          </div>
        </div>

        {/* SATURDAY DINNER */}
        <div className="flex flex-col flex-start menu-card rounded-[1.5rem] py-10 md:px-10 h-auto gap-y-5">
          <h1 className='menu-heading text-center md:text-left text-2xl px-5 lg:px-0'>
            Saturday Dinner: Rodeo Goat + Olive Burger
          </h1>

          <div className="flex flex-col gap-y-1">
            <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-start">
              <h2 className="text-xl">Chaca Oaxaga</h2>
              <p className="menu-chip border border-b-1 border-[#D1F4F3] px-2 rounded-[10rem] mt-1">
                Non-Vegetarian
              </p>
            </div>
            <p className="menu-note text-sm">
              Contains: Milk, Soy, Wheat
            </p>
          </div>

          <div className="flex flex-col gap-y-1">
            <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-start">
              <h2 className="text-xl">D.C.C. Burger</h2>
              <div className="flex flex-row items-center gap-x-1">
                <p className="menu-chip border border-b-1 border-[#c9d5e3] px-2 rounded-[10rem] mt-1">
                  Vegetarian
                </p>
              </div>
            </div>
            <p className="menu-note text-sm">
              Contains: Milk, Soy, Wheat, Egg
            </p>
          </div>

          <div className="flex flex-col gap-y-1">
            <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-start">
              <h2 className="text-xl">D.C.C. Burger</h2>
              <div className="flex flex-row items-center gap-x-1">
                <p className="menu-chip border border-b-1 border-[#D1F4F3] px-2 rounded-[10rem] mt-1">
                  Gluten-free
                </p>
              </div>
            </div>
            <p className="menu-note text-sm">
              Contains: Milk, Soy, Egg
            </p>
          </div>

          <div className="flex flex-col gap-y-1">
            <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-start">
              <h2 className="text-xl">D.C.C. Burger</h2>
              <p className="menu-chip border border-b-1 border-[#7bd051] px-2 rounded-[10rem] mt-1">
                Vegan
              </p>
            </div>
            <p className="menu-note text-sm">
              Contains: Soy, Wheat
            </p>
          </div>

          <div className="flex flex-col gap-y-1">
            <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-start">
              <h2 className="text-xl">Cheeseburger</h2>
              <div className="flex flex-row items-center gap-x-1">
                <p className="menu-chip border border-b-1 border-[#FFCB86] px-2 rounded-[10rem] mt-1">
                  Halal
                </p>
              </div>
            </div>
            <p className="menu-note text-sm">
              Contains: Milk, Soy, Wheat
            </p>
          </div>
        </div>

        {/* MIDNIGHT SNACK */}
        <div className="flex flex-col flex-start menu-card rounded-[1.5rem] py-10 md:px-10 h-auto gap-y-5">
          <h1 className='menu-heading text-center md:text-left text-2xl px-5 lg:px-0'>
            Midnight Snack: The Flour Shop + Reverie Bakeshop
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* LEFT HALF */}
            <div className="flex flex-col gap-y-5">
              <div className="flex flex-col gap-y-1">
                <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-start">
                  <h2 className="text-xl">Creme Brulee</h2>
                  <div className="flex flex-row items-center gap-x-1">
                    <p className="menu-chip border border-b-1 border-[#c9d5e3] px-2 rounded-[10rem] mt-1">Vegetarian</p>
                  </div>
                </div>
                <p className="menu-note text-sm">
                  Contains: Milk, Soy, Wheat, Egg
                </p>
              </div>

              <div className="flex flex-col gap-y-1">
                <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-start">
                  <h2 className="text-xl">Banana Split</h2>
                  <div className="flex flex-row items-center gap-x-1">
                    <p className="menu-chip border border-b-1 border-[#c9d5e3] px-2 rounded-[10rem] mt-1">Vegetarian</p>
                  </div>
                </div>
                <p className="menu-note text-sm">
                  Contains: Milk, Soy, Wheat, Egg
                </p>
              </div>

              <div className="flex flex-col gap-y-1">
                <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-start">
                  <h2 className="text-xl">Peach Cobbler</h2>
                  <div className="flex flex-row items-center gap-x-1">
                    <p className="menu-chip border border-b-1 border-[#c9d5e3] px-2 rounded-[10rem] mt-1">Vegetarian</p>
                  </div>
                </div>
                <p className="menu-note text-sm">
                  Contains: Milk, Soy, Wheat, Egg
                </p>
              </div>

              <div className="flex flex-col gap-y-1">
                <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-start">
                  <h2 className="text-xl">Smores Please</h2>
                  <div className="flex flex-row items-center gap-x-1">
                    <p className="menu-chip border border-b-1 border-[#c9d5e3] px-2 rounded-[10rem] mt-1">Vegetarian</p>
                  </div>
                </div>
                <p className="menu-note text-sm">
                  Contains: Milk, Soy, Wheat, Egg
                </p>
              </div>

              <div className="flex flex-col gap-y-1">
                <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-start">
                  <h2 className="text-xl">Wedding Cake</h2>
                  <div className="flex flex-row items-center gap-x-1">
                    <p className="menu-chip border border-b-1 border-[#c9d5e3] px-2 rounded-[10rem] mt-1">Vegetarian</p>
                  </div>
                </div>
                <p className="menu-note text-sm">
                  Contains: Milk, Soy, Wheat, Egg
                </p>
              </div>

              <div className="flex flex-col gap-y-1">
                <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-start">
                  <h2 className="text-xl">Carrot</h2>
                  <div className="flex flex-row items-center gap-x-1">
                    <p className="menu-chip border border-b-1 border-[#c9d5e3] px-2 rounded-[10rem] mt-1">Vegetarian</p>
                  </div>
                </div>
                <p className="menu-note text-sm">
                  Contains: Milk, Soy, Wheat, Egg
                </p>
              </div>

              <div className="flex flex-col gap-y-1">
                <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-start">
                  <h2 className="text-xl">Black Forest</h2>
                  <div className="flex flex-row items-center gap-x-1">
                    <p className="menu-chip border border-b-1 border-[#c9d5e3] px-2 rounded-[10rem] mt-1">Vegetarian</p>
                  </div>
                </div>
                <p className="menu-note text-sm">
                  Contains: Milk, Soy, Wheat, Egg
                </p>
              </div>
            </div>

            {/* RIGHT HALF */}
            <div className="flex flex-col gap-y-5">
              <div className="flex flex-col gap-y-1">
                <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-start">
                  <h2 className="text-xl">Raspberry Almond</h2>
                  <div className="flex flex-row items-center gap-x-1">
                    <p className="menu-chip border border-b-1 border-[#D1F4F3] px-2 rounded-[10rem] mt-1">
                      Gluten-free
                    </p>
                <p className="menu-chip border border-b-1 border-[#7bd051] px-2 rounded-[10rem] mt-1">
                      Vegan
                    </p>
                  </div>
                </div>
                <p className="menu-note text-sm">
                  Contains: Soy
                </p>
              </div>

              <div className="flex flex-col gap-y-1">
                <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-start">
                  <h2 className="text-xl">Honee Cream Cheese</h2>
                  <div className="flex flex-row items-center gap-x-1">
                    <p className="menu-chip border border-b-1 border-[#D1F4F3] px-2 rounded-[10rem] mt-1">
                      Gluten-free
                    </p>
                    <p className="menu-chip border border-b-1 border-[#7bd051] px-2 rounded-[10rem] mt-1">
                      Vegan
                    </p>
                  </div>
                </div>
                <p className="menu-note text-sm">
                  Contains: Soy
                </p>
              </div>

              <div className="flex flex-col gap-y-1">
                <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-start">
                  <h2 className="text-xl">German Chocolate</h2>
                  <div className="flex flex-row items-center gap-x-1">
                    <p className="menu-chip border border-b-1 border-[#D1F4F3] px-2 rounded-[10rem] mt-1">
                      Gluten-free
                    </p>
                    <p className="menu-chip border border-b-1 border-[#7bd051] px-2 rounded-[10rem] mt-1">
                      Vegan
                    </p>
                  </div>
                </div>
                <p className="menu-note text-sm">
                  Contains: Milk, Soy
                </p>
              </div>

              <div className="flex flex-col gap-y-1">
                <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-start">
                  <h2 className="text-xl">S&apos;mores</h2>
                  <div className="flex flex-row items-center gap-x-1">
                    <p className="menu-chip border border-b-1 border-[#D1F4F3] px-2 rounded-[10rem] mt-1">
                      Gluten-free
                    </p>
                    <p className="menu-chip border border-b-1 border-[#7bd051] px-2 rounded-[10rem] mt-1">
                      Vegan
                    </p>
                  </div>
                </div>
                <p className="menu-note text-sm">
                  Contains: Soy
                </p>
              </div>

              <div className="flex flex-col gap-y-1">
                <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-start">
                  <h2 className="text-xl">Chocolate Lavender</h2>
                  <div className="flex flex-row items-center gap-x-1">
                    <p className="menu-chip border border-b-1 border-[#D1F4F3] px-2 rounded-[10rem] mt-1">
                      Gluten-free
                    </p>
                    <p className="menu-chip border border-b-1 border-[#7bd051] px-2 rounded-[10rem] mt-1">
                      Vegan
                    </p>
                  </div>
                </div>
                <p className="menu-note text-sm">
                  Contains: Soy
                </p>
              </div>

              <div className="flex flex-col gap-y-1">
                <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-start">
                  <h2 className="text-xl">Marble</h2>
                  <div className="flex flex-row items-center gap-x-1">
                    <p className="menu-chip border border-b-1 border-[#D1F4F3] px-2 rounded-[10rem] mt-1">
                      Gluten-free
                    </p>
                    <p className="menu-chip border border-b-1 border-[#7bd051] px-2 rounded-[10rem] mt-1">
                      Vegan
                    </p>
                  </div>
                </div>
                <p className="menu-note text-sm">
                  Contains: Soy
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SUNDAY BREAKFAST */}
        <div className="flex flex-col flex-start menu-card rounded-[1.5rem] py-10 md:px-10 h-auto gap-y-5">
          <h1 className='menu-heading text-center md:text-left text-2xl px-5 lg:px-0'>
            Sunday Breakfast: Tous Les Jours, Reverie Bakeshop, Chic Coffee Cart
          </h1>

          <div className="flex flex-col gap-y-1">
            <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-start">
              <h2 className="text-xl">Caramel Almond Pastry</h2>
              <div className="flex flex-row items-center gap-x-1">
                <p className="menu-chip border border-b-1 border-[#c9d5e3] px-2 rounded-[10rem] mt-1">Vegetarian</p>
              </div>
            </div>
            <p className="menu-note text-sm">
              Contains: Milk, Soy, Egg
            </p>
          </div>

          <div className="flex flex-col gap-y-1">
            <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-start">
              <h2 className="text-xl">Curry Croquette</h2>
              <div className="flex flex-row items-center gap-x-1">
                <p className="menu-chip border border-b-1 border-[#c9d5e3] px-2 rounded-[10rem] mt-1">Vegetarian</p>
              </div>
            </div>
            <p className="menu-note text-sm">
              Contains: Milk, Soy, Egg
            </p>
          </div>

          <div className="flex flex-col gap-y-1">
            <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-start">
              <h2 className="text-xl">Spinach Feta Danish</h2>
              <div className="flex flex-row items-center gap-x-1">
                <p className="menu-chip border border-b-1 border-[#c9d5e3] px-2 rounded-[10rem] mt-1">Vegetarian</p>
              </div>
            </div>
            <p className="menu-note text-sm">
              Contains: Milk, Soy, Egg
            </p>
          </div>

          <div className="flex flex-col gap-y-1">
            <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-start">
              <h2 className="text-xl">Strawberry Croissant</h2>
              <div className="flex flex-row items-center gap-x-1">
                <p className="menu-chip border border-b-1 border-[#c9d5e3] px-2 rounded-[10rem] mt-1">Vegetarian</p>
              </div>
            </div>
            <p className="menu-note text-sm">
              Contains: Milk, Soy, Egg
            </p>
          </div>

          <div className="flex flex-col gap-y-1">
            <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-start">
              <h2 className="text-xl">Kimchi Croquette</h2>
              <div className="flex flex-row items-center gap-x-1">
                <p className="menu-chip border border-b-1 border-[#c9d5e3] px-2 rounded-[10rem] mt-1">Vegetarian</p>
              </div>
            </div>
            <p className="menu-note text-sm">
              Contains: Milk, Soy, Egg
            </p>
          </div>

          <div className="flex flex-col gap-y-1">
            <div className="flex flex-col flex-wrap md:flex-row gap-y-1 gap-x-3 items-start">
              <h2 className="text-xl text-center lg:text-left px-2 lg:px-0">
                Assorted Sweet Breakfast Tray
              </h2>
              <div className="flex flex-row items-center gap-x-1">
                <p className="menu-chip border border-b-1 border-[#D1F4F3] px-2 rounded-[10rem] mt-1">
                  Gluten-free
                </p>
                <p className="menu-chip border border-b-1 border-[#7bd051] px-2 rounded-[10rem] mt-1">
                  Vegan
                </p>
              </div>
            </div>
            <p className="menu-note text-sm">
              Contains: Soy
            </p>
          </div>
        </div>

        {/* SUNDAY LUNCH */}
        <div className="flex flex-col flex-start menu-card rounded-[1.5rem] py-10 md:px-10 h-auto gap-y-5">
          <h1 className='menu-heading text-center md:text-left text-2xl px-5 lg:px-0'>
            Sunday Lunch: Zalat Pizza + Sauce Bros Pizza
          </h1>

          <div className="flex flex-col gap-y-1">
            <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-start">
              <h2 className="text-xl">Naga Habanero Mushroom</h2>
              <div className="flex flex-row items-center gap-x-1">
                <p className="menu-chip border border-b-1 border-[#c9d5e3] px-2 rounded-[10rem] mt-1">Vegetarian</p>
              </div>
            </div>
            <p className="menu-note text-sm">
              Contains: Milk, Soy
            </p>
          </div>

          <div className="flex flex-col gap-y-1">
            <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-start">
              <h2 className="text-xl">Naga Habanero Chicken</h2>
              <div className="flex flex-row items-center gap-x-1">
                <p className="menu-chip border border-b-1 border-[#D1F4F3] px-2 rounded-[10rem] mt-1">
                  Non-Vegetarian
                </p>
              </div>
            </div>
            <p className="menu-note text-sm">
              Contains: Milk, Soy
            </p>
          </div>

          <div className="flex flex-col gap-y-1">
            <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-start">
              <h2 className="text-xl">Pizza</h2>
              <div className="flex flex-row items-center gap-x-1">
                <p className="menu-chip border border-b-1 border-[#D1F4F3] px-2 rounded-[10rem] mt-1">
                  Gluten-free
                </p>
                <p className="menu-chip border border-b-1 border-[#7bd051] px-2 rounded-[10rem] mt-1">
                  Vegan
                </p>
              </div>
            </div>
            <p className="menu-note text-sm">
              Contains: Soy
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
