using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PawsAndClaws.Repository
{
    public class DBInitializer
    {
        public static void Initialize(EFContext context)
        {
            context.Database.EnsureCreated();
        }
    }
}
