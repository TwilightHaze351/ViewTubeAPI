using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using ViewTubeAPI.Models;

namespace ViewTubeAPI.ViewTubeFrontend.src.Data
{
  public class AppDbContext : IdentityDbContext
  {
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }

    public DbSet<Video> Video { get; set; } = default!;
    public DbSet<Comment> Comment { get; set; } = default!;
    public DbSet<Account> Account { get; set; } = default!;
    public DbSet<User> User { get; set; } = default!;
    // Define other DbSets for your application, for example:
    // public DbSet<Video> Videos { get; set; }
  }
}
