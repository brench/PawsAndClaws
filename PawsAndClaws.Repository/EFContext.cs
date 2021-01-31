using Microsoft.EntityFrameworkCore;
using PawsAndClaws.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PawsAndClaws.Repository
{
    public class EFContext : DbContext, IEFContext
    {
        public EFContext(DbContextOptions<EFContext> options) : base(options)
        {
        }

        public virtual TEntity Add<TEntity>(TEntity entity) where TEntity : class
        {
            return this.Set<TEntity>().Add(entity)?.Entity;
        }

        public DbSet<Appointment> Appointments { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Appointment>().ToTable("Appointment");
        }
    }
}
