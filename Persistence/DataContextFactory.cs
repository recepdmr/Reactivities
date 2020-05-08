using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace Persistence
{
    public class DataContextFactory : IDesignTimeDbContextFactory<DataContext>
    {
        public DataContext CreateDbContext(string[] args)
        {
            var builder = new DbContextOptionsBuilder<DataContext>();
            var connectionString = "Data Source=Reactivities.db";
            builder.UseSqlite(connectionString);
            return new DataContext(builder.Options);
        }
    }
}