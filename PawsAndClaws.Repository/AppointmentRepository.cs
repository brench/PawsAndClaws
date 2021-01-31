using PawsAndClaws.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PawsAndClaws.Repository
{
    public class AppointmentRepository : BaseRepository<Appointment>, IAppointmentRepository
    {
        public AppointmentRepository(EFContext context) : base(context)
        {

        }

        public IEnumerable<Appointment> GetCurrentAppointments()
        {
            return Get(a => a.Date.Date >= DateTime.Now.Date);

            // return _context.Appointments.Where(a => a.Date.Date >= DateTime.Now.Date);
        }
    }
}
