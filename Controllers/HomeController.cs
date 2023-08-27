using Microsoft.AspNetCore.Mvc;

namespace eTickets.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult AboutUs()
        {
            return View();
        }
        public IActionResult ContactUs()
        {
            return View();
        }
        public IActionResult Tickets()
        {
            return View();
        }
    }
}
