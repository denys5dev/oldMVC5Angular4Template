using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Mvc01_angularcli.Areas.WriteOff.Controllers
{
    public class HomeController : Controller
    {
        // GET: WriteOff/Home
        public ActionResult Index()
        {
            return View();
        }
    }
}