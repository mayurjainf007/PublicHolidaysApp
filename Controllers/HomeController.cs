using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PublicHolidaysApp.Models;
using PublicHolidaysApp.Services;

namespace PublicHolidaysApp.Controllers
{
    public class HomeController : Controller
    {
        private readonly IHolidaysApiService _holidaysApiService;

        public HomeController(IHolidaysApiService holidaysApiService)
        {
            _holidaysApiService = holidaysApiService;
        }

        // Part I – MVC View
        [HttpGet]
        public async Task<IActionResult> Index(string countryCode, int year)
        {
            List<HolidayModel> holidays = new List<HolidayModel>();

            if (!string.IsNullOrWhiteSpace(countryCode) && year > 0)
            {
                holidays = await _holidaysApiService.GetHolidays(countryCode, year);
            }

            return View(holidays);
        }

        // Part II – JSON endpoint for Ajax client
        [HttpGet]
        public async Task<IActionResult> GetHolidaysJson(string countryCode, int year)
        {
            if (string.IsNullOrWhiteSpace(countryCode) || year <= 0)
            {
                return BadRequest("countryCode and year are required.");
            }

            var holidays = await _holidaysApiService.GetHolidays(countryCode, year);
            return Json(holidays);
        }
    }
}
