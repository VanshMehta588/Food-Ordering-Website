using Foodie.Data;
using Foodie.Models.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Foodie.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AdminController : Controller
    {
        private readonly FoodieDbContext foodieDbContext;

        public AdminController(FoodieDbContext foodieDbContext)
        {
            this.foodieDbContext = foodieDbContext;
        }

        [HttpGet]
            public async Task<IActionResult> GetAllAdmins()
        {
            var Admin = await foodieDbContext.Admins.ToListAsync();
            return Ok(Admin);
        }



        [HttpGet]
        [Route("{id}")]
        /// [ActionName("GetAdmin")]
        public async Task<IActionResult> GetAdmin([FromRoute] int id)
        {
            var Admin = await foodieDbContext.Admins.FirstOrDefaultAsync(x => x.id == id);
            if (Admin != null)
            {
                return Ok(Admin);
            }

            return NotFound("Admin Not Found");
        }


        [HttpGet]
        [Route("GetByEmail/{email}")]
        public async Task<IActionResult> GetAdminEmail([FromRoute] string email)
        {
            var Admin = await foodieDbContext.Admins.FirstOrDefaultAsync(x => x.email == email);
            if (Admin != null)
            {
                return Ok(Admin);
            }

            return NotFound("Admin Not Found");
        }

        [HttpPost("authenticate")]

        public async Task<IActionResult> Authenticate([FromBody] Admin admin)
        {
            if (admin == null)
            {
                return BadRequest();
            }
            var admins = await foodieDbContext.Admins.FirstOrDefaultAsync(x => x.email == admin.email && x.password == admin.password);

            if (admins == null)
            {
                return NotFound(new { Message = "Admin Not Found" });
            }
            return Ok(new
            {
                Message = "Login Successfully"
            });
        }

        [HttpPost("signup")]
        public async Task<IActionResult> AddAdmin([FromBody] Admin admin)
        {
            if (admin == null)
            {
                return BadRequest();
            }
            if (await CheckEmailExistAsync(admin.email))
            {
                return BadRequest(new { Message = "Email Not Found" });
            }
            await foodieDbContext.Admins.AddAsync(admin);
            await foodieDbContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetAdmin), new { id = admin.id }, admin);
        }

        private Task<bool> CheckEmailExistAsync(string mail)
            => foodieDbContext.Admins.AnyAsync(x => x.email == mail);

        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> UpdateAdmin([FromRoute] int id, [FromBody] Admin admin)
        {
            var existingadmin = await foodieDbContext.Admins.FirstOrDefaultAsync(x => x.id == id);
            if (existingadmin != null)
            {
                existingadmin.username = admin.username;
                existingadmin.email = admin.email;
                existingadmin.number = admin.number;
                existingadmin.password = admin.password;
                await foodieDbContext.SaveChangesAsync();
                return Ok(existingadmin);
            }
            return NotFound("Admin Not Found");
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> DeleteAdmin([FromRoute] int id)
        {
            var existingadmin = await foodieDbContext.Admins.FirstOrDefaultAsync(x => x.id == id);
            if (existingadmin != null)
            {
                foodieDbContext.Remove(existingadmin);
                await foodieDbContext.SaveChangesAsync();
                return Ok(existingadmin);
            }
            return NotFound("Admin Not Found");
        }



    }
}
