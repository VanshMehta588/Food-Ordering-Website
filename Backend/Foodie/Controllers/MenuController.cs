using Foodie.Data;
using Foodie.Models.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Foodie.Controllers
{
        [ApiController]
        [Route("api/[controller]")]
        public class MenuController : Controller
        {
            private readonly FoodieDbContext foodieDbContext;
            public MenuController(FoodieDbContext foodieDbContext)
            {
                this.foodieDbContext = foodieDbContext;
            }

            [HttpGet]
            public async Task<IActionResult> GetAllMenu()
            {
                var Menu = await foodieDbContext.MenuItems.ToListAsync();
                return Ok(Menu);
            }

            [HttpGet]
            [Route("{id}")]
            [ActionName("GetMenu")]
            public async Task<IActionResult> GetMenu([FromRoute] int id)
            {
                var Menus = await foodieDbContext.MenuItems.FirstOrDefaultAsync(x => x.id == id);
                if (Menus != null)
                {
                    return Ok(Menus);
                }

                return NotFound("Menu Not Found");
            }

            [HttpPost]
            public async Task<IActionResult> AddMenu([FromBody] MenuItem menu)
            {

            await foodieDbContext.MenuItems.AddAsync(menu);
            await foodieDbContext.SaveChangesAsync();

                return CreatedAtAction(nameof(GetMenu), new { id = menu.id }, menu);
            }

            [HttpPut]
            [Route("{id}")]
            public async Task<IActionResult> UpdateMenu([FromRoute] int id, [FromBody] MenuItem menu)
            {
                var existingmenu = await foodieDbContext.MenuItems.FirstOrDefaultAsync(x => x.id == id);
                if (existingmenu != null)
                {
                    existingmenu.name = menu.name;
                    existingmenu.price = menu.price;
                    existingmenu.star = menu.star;
                    existingmenu.tags = menu.tags;
                    existingmenu.imageUrl = menu.imageUrl;
                    existingmenu.cookTime = menu.cookTime;
                    existingmenu.origins = menu.origins;

                await foodieDbContext.SaveChangesAsync();
                    return Ok(existingmenu);
                }
                return NotFound("Menu Not Found");
            }

            [HttpDelete]
            [Route("{id}")]
            public async Task<IActionResult> DeleteMenu([FromRoute] int id)
            {
                var existingmenu = await foodieDbContext.MenuItems.FirstOrDefaultAsync(x => x.id == id);
                if (existingmenu != null)
                {
                foodieDbContext.Remove(existingmenu);
                await foodieDbContext.SaveChangesAsync();
                    return Ok(existingmenu);
                }
                return NotFound("Menu Not Found");
            }
        }
    }
