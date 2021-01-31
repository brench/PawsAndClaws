using System;
using System.ComponentModel.DataAnnotations;

namespace PawsAndClaws.Entities
{
    public class Appointment
    {
        public int ID { get; set; }

        [Required]
        [MaxLength(50)]
        public string PetName { get; set; }

        [Required]
        [MaxLength(50)]
        public string PetOwnerFirstName { get; set; }

        [Required]
        [MaxLength(50)]
        public string PetOwnerLastName { get; set; }

        [Required]
        [MaxLength(50)]
        public string PetOwnerPhone { get; set; }

        [Required]
        [MaxLength(500)]
        public string Reason { get; set; }

        public DateTime Date { get; set; }
    }
}
