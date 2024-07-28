using Foodie.Data;
using Foodie.Models.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Runtime.InteropServices;

namespace Foodie.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private readonly FoodieDbContext foodieDbContext;

        public UserController(FoodieDbContext foodieDbContext)
        {
            this.foodieDbContext = foodieDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllUsers()
        {
            var User = await foodieDbContext.Users.ToListAsync();
            return Ok(User);
        }

        [HttpGet]
        [Route("{id}")]
       /// [ActionName("GetUser")]
        public async Task<IActionResult> GetUser([FromRoute] int id)
        {
            var User = await foodieDbContext.Users.FirstOrDefaultAsync(x => x.id == id);
            if (User != null)
            {
                return Ok(User);
            }

            return NotFound("User Not Found");
        }


        [HttpGet]
        [Route("GetByEmail/{email}")]
        public async Task<IActionResult> GetUserEmail([FromRoute] string email)
        {
            var User = await foodieDbContext.Users.FirstOrDefaultAsync(x => x.email == email);
            if (User != null)
            {
                return Ok(User);
            }

            return NotFound("User Not Found");
        }

        //[HttpPost]
        //public async Task<IActionResult> AddUser([FromBody] User user)
        //{

        //    await foodieDbContext.Users.AddAsync(user);
        //    await foodieDbContext.SaveChangesAsync();

        //   return CreatedAtAction(nameof(GetUser), new { id = user.id }, user);
        //}


        [HttpPost("authenticate")]

        public async Task<IActionResult> Authenticate([FromBody] User user)
        {
            if (user == null)
            {
                return BadRequest();
            }
            var users = await foodieDbContext.Users.FirstOrDefaultAsync(x => x.email == user.email && x.password == user.password);

            if (users == null)
            {
                return NotFound(new { Message = "User Not Found" });
            }
            return Ok(new
            {
                Message = "Login Successfully"
            });
        }

        [HttpPost("signup")]

        public async Task<IActionResult> AddUser([FromBody] User user)
        {
            if (user == null)
            {
                return BadRequest();
            }
            if (await CheckEmailExistAsync(user.email))
            {
                return BadRequest(new {Message = "Email Not Found"});
            }
            await foodieDbContext.Users.AddAsync(user);
            await foodieDbContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetUser), new { id = user.id }, user);
            //return Ok();
        }

        private Task<bool> CheckEmailExistAsync(string mail)
            =>foodieDbContext.Users.AnyAsync(x => x.email == mail);

        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> UpdateUser([FromRoute] int id, [FromBody] User user)
        {
            var existingUser = await foodieDbContext.Users.FirstOrDefaultAsync(x => x.id == id);
            if (existingUser != null)
            {
                existingUser.imageUrl = user.imageUrl;
                existingUser.username = user.username;
                existingUser.email = user.email;
                existingUser.number = user.number;
                existingUser.password = user.password;
                existingUser.flatno = user.flatno;
                existingUser.street = user.street;
                existingUser.city = user.city;
                existingUser.zipCode = user.zipCode;
                existingUser.state = user.state;

                await foodieDbContext.SaveChangesAsync();
                return Ok(existingUser);
            }
            return NotFound("User Not Found");
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> DeleteUser([FromRoute] int id)
        {
            var existingUser = await foodieDbContext.Users.FirstOrDefaultAsync(x => x.id == id);
            if (existingUser != null)
            {
                foodieDbContext.Remove(existingUser);
                await foodieDbContext.SaveChangesAsync();
                return Ok(existingUser);
            }
            return NotFound("User Not Found");
        }



    }
}
