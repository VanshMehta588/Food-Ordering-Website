using Foodie.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace Foodie.Data
{
    public class FoodieDbContext : DbContext
    {
        public FoodieDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<MenuItem> MenuItems { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Admin> Admins { get; set; }

    }
}
