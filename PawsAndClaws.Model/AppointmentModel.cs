using System;
using System.Collections.Generic;
using System.Text;

namespace PawsAndClaws.Model
{
    public class AppointmentModel
    {
        public int ID { get; set; }

        public string PetName { get; set; }

        public string PetOwnerFirstName { get; set; }

        public string PetOwnerLastName { get; set; }

        public string PetOwnerPhone { get; set; }

        public string Reason { get; set; }

        public DateTime Date { get; set; }
    }
}
