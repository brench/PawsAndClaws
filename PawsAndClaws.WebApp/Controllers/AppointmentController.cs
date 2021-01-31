using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PawsAndClaws.Entities;
using PawsAndClaws.Model;
using PawsAndClaws.Repository;

namespace PawsAndClaws.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AppointmentController : ControllerBase
    {
        private IAppointmentRepository _appointmentRepository;

        public AppointmentController(IAppointmentRepository appointmentRepository)
        {
            _appointmentRepository = appointmentRepository;
        }

        [HttpGet]
        public IEnumerable<Appointment> GetAll()
        {
            return _appointmentRepository.GetCurrentAppointments();
        }

        [HttpGet]
        [Route("{id}")]
        public Appointment GetById(int id)
        {
            return _appointmentRepository.GetByID(id);
        }

        [HttpPost]
        public async Task<IActionResult> Add(Appointment appointment)
        {
            await _appointmentRepository.Insert(appointment);

            return new ObjectResult(appointment)
            {
                StatusCode = (int)HttpStatusCode.Created
            };
        }

        [HttpPut]
        public async Task<IActionResult> Update(Appointment appointment)
        {
            await _appointmentRepository.Update(appointment);

            return new ObjectResult(appointment)
            {
                StatusCode = (int)HttpStatusCode.OK
            };
        }

        [HttpDelete]
        [Route("{id}")]
        public void Delete(int id)
        {
            _appointmentRepository.Delete(id);

            //return new ObjectResult(id)
            //{
            //    StatusCode = (int)HttpStatusCode.OK
            //};
        }
    }
}
