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
    <div className="mt-28 px-4 pb-28 sm:px-6 lg:px-24">
      <div className='flex justify-center items-center mb-10'>
        <img
          className="h-auto w-full max-w-3xl object-contain px-2 sm:px-0"
          src={"img/static/images/menu.png"}
          alt={"Dallas' Largest Inclusive Hackathon"}
        />
      </div>

      <div className="flex flex-col gap-5 lg:px-12">
        {/* SATURDAY LUNCH */}
        <div className="flex flex-col flex-start menu-card rounded-[1.5rem] py-8 px-5 sm:px-8 md:px-10 h-auto gap-y-5">
          <h1 className='menu-heading text-center md:text-left text-xl sm:text-2xl lg:text-3xl px-3 sm:px-0'>
            Saturday Lunch: Madina Halal Grill
          </h1>

          <div className="flex flex-col gap-y-1">
            <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-start">
              <h2 className="text-lg sm:text-xl">Falafel Wrap</h2>
              <div className="flex flex-row flex-wrap items-center gap-x-1 gap-y-1">
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
              <h2 className="text-lg sm:text-xl">Chicken Wrap</h2>
              <div className="flex flex-row flex-wrap items-center gap-x-1 gap-y-1">
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
              <h2 className="text-lg sm:text-xl">Falafel over Rice</h2>
              <div className="flex flex-row flex-wrap items-center gap-x-1 gap-y-1">
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
        <div className="flex flex-col flex-start menu-card rounded-[1.5rem] py-8 px-5 sm:px-8 md:px-10 h-auto gap-y-5">
          <h1 className='menu-heading text-center md:text-left text-xl sm:text-2xl lg:text-3xl px-3 sm:px-0'>
            Saturday Dinner: Rodeo Goat + Olive Burger
          </h1>

          <div className="flex flex-col gap-y-1">
            <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-start">
              <h2 className="text-lg sm:text-xl">Chaca Oaxaga</h2>
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
              <h2 className="text-lg sm:text-xl">D.C.C. Burger</h2>
              <div className="flex flex-row flex-wrap items-center gap-x-1 gap-y-1">
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
              <h2 className="text-lg sm:text-xl">D.C.C. Burger</h2>
              <div className="flex flex-row flex-wrap items-center gap-x-1 gap-y-1">
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
              <h2 className="text-lg sm:text-xl">D.C.C. Burger</h2>
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
              <h2 className="text-lg sm:text-xl">Cheeseburger</h2>
              <div className="flex flex-row flex-wrap items-center gap-x-1 gap-y-1">
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
        <div className="flex flex-col flex-start menu-card rounded-[1.5rem] py-8 px-5 sm:px-8 md:px-10 h-auto gap-y-5">
          <h1 className='menu-heading text-center md:text-left text-xl sm:text-2xl lg:text-3xl px-3 sm:px-0'>
            Midnight Snack: The Flour Shop + Reverie Bakeshop
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* LEFT HALF */}
            <div className="flex flex-col gap-y-5">
              <div className="flex flex-col gap-y-1">
                <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-start">
                  <h2 className="text-lg sm:text-xl">Creme Brulee</h2>
                  <div className="flex flex-row flex-wrap items-center gap-x-1 gap-y-1">
                    <p className="menu-chip border border-b-1 border-[#c9d5e3] px-2 rounded-[10rem] mt-1">Vegetarian</p>
                  </div>
                </div>
                <p className="menu-note text-sm">
                  Contains: Milk, Soy, Wheat, Egg
                </p>
              </div>

              <div className="flex flex-col gap-y-1">
                <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-start">
                  <h2 className="text-lg sm:text-xl">Banana Split</h2>
                  <div className="flex flex-row flex-wrap items-center gap-x-1 gap-y-1">
                    <p className="menu-chip border border-b-1 border-[#c9d5e3] px-2 rounded-[10rem] mt-1">Vegetarian</p>
                  </div>
                </div>
                <p className="menu-note text-sm">
                  Contains: Milk, Soy, Wheat, Egg
                </p>
              </div>

              <div className="flex flex-col gap-y-1">
                <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-start">
                  <h2 className="text-lg sm:text-xl">Peach Cobbler</h2>
                  <div className="flex flex-row flex-wrap items-center gap-x-1 gap-y-1">
                    <p className="menu-chip border border-b-1 border-[#c9d5e3] px-2 rounded-[10rem] mt-1">Vegetarian</p>
                  </div>
                </div>
                <p className="menu-note text-sm">
                  Contains: Milk, Soy, Wheat, Egg
                </p>
              </div>

              <div className="flex flex-col gap-y-1">
                <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-start">
                  <h2 className="text-lg sm:text-xl">Smores Please</h2>
                  <div className="flex flex-row flex-wrap items-center gap-x-1 gap-y-1">
                    <p className="menu-chip border border-b-1 border-[#c9d5e3] px-2 rounded-[10rem] mt-1">Vegetarian</p>
                  </div>
                </div>
                <p className="menu-note text-sm">
                  Contains: Milk, Soy, Wheat, Egg
                </p>
              </div>

              <div className="flex flex-col gap-y-1">
                <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-start">
                  <h2 className="text-lg sm:text-xl">Wedding Cake</h2>
                  <div className="flex flex-row flex-wrap items-center gap-x-1 gap-y-1">
                    <p className="menu-chip border border-b-1 border-[#c9d5e3] px-2 rounded-[10rem] mt-1">Vegetarian</p>
                  </div>
                </div>
                <p className="menu-note text-sm">
                  Contains: Milk, Soy, Wheat, Egg
                </p>
              </div>

              <div className="flex flex-col gap-y-1">
                <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-start">
                  <h2 className="text-lg sm:text-xl">Carrot</h2>
                  <div className="flex flex-row flex-wrap items-center gap-x-1 gap-y-1">
                    <p className="menu-chip border border-b-1 border-[#c9d5e3] px-2 rounded-[10rem] mt-1">Vegetarian</p>
                  </div>
                </div>
                <p className="menu-note text-sm">
                  Contains: Milk, Soy, Wheat, Egg
                </p>
              </div>

              <div className="flex flex-col gap-y-1">
                <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-start">
                  <h2 className="text-lg sm:text-xl">Black Forest</h2>
                  <div className="flex flex-row flex-wrap items-center gap-x-1 gap-y-1">
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
                  <h2 className="text-lg sm:text-xl">Raspberry Almond</h2>
                  <div className="flex flex-row flex-wrap items-center gap-x-1 gap-y-1">
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
                  <h2 className="text-lg sm:text-xl">Honee Cream Cheese</h2>
                  <div className="flex flex-row flex-wrap items-center gap-x-1 gap-y-1">
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
                  <h2 className="text-lg sm:text-xl">German Chocolate</h2>
                  <div className="flex flex-row flex-wrap items-center gap-x-1 gap-y-1">
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
                  <h2 className="text-lg sm:text-xl">S&apos;mores</h2>
                  <div className="flex flex-row flex-wrap items-center gap-x-1 gap-y-1">
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
                  <h2 className="text-lg sm:text-xl">Chocolate Lavender</h2>
                  <div className="flex flex-row flex-wrap items-center gap-x-1 gap-y-1">
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
                  <h2 className="text-lg sm:text-xl">Marble</h2>
                  <div className="flex flex-row flex-wrap items-center gap-x-1 gap-y-1">
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
        <div className="flex flex-col flex-start menu-card rounded-[1.5rem] py-8 px-5 sm:px-8 md:px-10 h-auto gap-y-5">
          <h1 className='menu-heading text-center md:text-left text-xl sm:text-2xl lg:text-3xl px-3 sm:px-0'>
            Sunday Breakfast: Tous Les Jours, Reverie Bakeshop, Chic Coffee Cart
          </h1>

          <div className="flex flex-col gap-y-1">
            <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-start">
              <h2 className="text-lg sm:text-xl">Caramel Almond Pastry</h2>
              <div className="flex flex-row flex-wrap items-center gap-x-1 gap-y-1">
                <p className="menu-chip border border-b-1 border-[#c9d5e3] px-2 rounded-[10rem] mt-1">Vegetarian</p>
              </div>
            </div>
            <p className="menu-note text-sm">
              Contains: Milk, Soy, Egg
            </p>
          </div>

          <div className="flex flex-col gap-y-1">
            <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-start">
              <h2 className="text-lg sm:text-xl">Curry Croquette</h2>
              <div className="flex flex-row flex-wrap items-center gap-x-1 gap-y-1">
                <p className="menu-chip border border-b-1 border-[#c9d5e3] px-2 rounded-[10rem] mt-1">Vegetarian</p>
              </div>
            </div>
            <p className="menu-note text-sm">
              Contains: Milk, Soy, Egg
            </p>
          </div>

          <div className="flex flex-col gap-y-1">
            <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-start">
              <h2 className="text-lg sm:text-xl">Spinach Feta Danish</h2>
              <div className="flex flex-row flex-wrap items-center gap-x-1 gap-y-1">
                <p className="menu-chip border border-b-1 border-[#c9d5e3] px-2 rounded-[10rem] mt-1">Vegetarian</p>
              </div>
            </div>
            <p className="menu-note text-sm">
              Contains: Milk, Soy, Egg
            </p>
          </div>

          <div className="flex flex-col gap-y-1">
            <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-start">
              <h2 className="text-lg sm:text-xl">Strawberry Croissant</h2>
              <div className="flex flex-row flex-wrap items-center gap-x-1 gap-y-1">
                <p className="menu-chip border border-b-1 border-[#c9d5e3] px-2 rounded-[10rem] mt-1">Vegetarian</p>
              </div>
            </div>
            <p className="menu-note text-sm">
              Contains: Milk, Soy, Egg
            </p>
          </div>

          <div className="flex flex-col gap-y-1">
            <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-start">
              <h2 className="text-lg sm:text-xl">Kimchi Croquette</h2>
              <div className="flex flex-row flex-wrap items-center gap-x-1 gap-y-1">
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
              <div className="flex flex-row flex-wrap items-center gap-x-1 gap-y-1">
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
        <div className="flex flex-col flex-start menu-card rounded-[1.5rem] py-8 px-5 sm:px-8 md:px-10 h-auto gap-y-5">
          <h1 className='menu-heading text-center md:text-left text-xl sm:text-2xl lg:text-3xl px-3 sm:px-0'>
            Sunday Lunch: Zalat Pizza + Sauce Bros Pizza
          </h1>

          <div className="flex flex-col gap-y-1">
            <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-start">
              <h2 className="text-lg sm:text-xl">Naga Habanero Mushroom</h2>
              <div className="flex flex-row flex-wrap items-center gap-x-1 gap-y-1">
                <p className="menu-chip border border-b-1 border-[#c9d5e3] px-2 rounded-[10rem] mt-1">Vegetarian</p>
              </div>
            </div>
            <p className="menu-note text-sm">
              Contains: Milk, Soy
            </p>
          </div>

          <div className="flex flex-col gap-y-1">
            <div className="flex flex-col md:flex-row gap-y-1 gap-x-3 items-start">
              <h2 className="text-lg sm:text-xl">Naga Habanero Chicken</h2>
              <div className="flex flex-row flex-wrap items-center gap-x-1 gap-y-1">
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
              <h2 className="text-lg sm:text-xl">Pizza</h2>
              <div className="flex flex-row flex-wrap items-center gap-x-1 gap-y-1">
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
