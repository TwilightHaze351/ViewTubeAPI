using Microsoft.EntityFrameworkCore;
using ViewTubeAPI.Models;
namespace ViewTubeAPI.ViewTubeFrontend.src.Data;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

public class AppDbContext : IdentityDbContext
{
  public AppDbContext(DbContextOptions<AppDbContext> options)
      : base(options)
  {
  }

public DbSet<ViewTubeAPI.Models.Video> Video { get; set; } = default!;

public DbSet<ViewTubeAPI.Models.Comment> Comment { get; set; } = default!;

  // Define other DbSets for your application, for example:
  // public DbSet<Video> Videos { get; set; }
}
