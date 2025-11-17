using System.Collections.Generic;
using System.Threading.Tasks;
using PublicHolidaysApp.Models;

namespace PublicHolidaysApp.Services
{
    public interface IHolidaysApiService
    {
        Task<List<HolidayModel>> GetHolidays(string countryCode, int year);
    }
}
