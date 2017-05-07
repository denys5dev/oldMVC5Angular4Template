using System.Web.Mvc;

namespace Mvc01_angularcli.Areas.WriteOff
{
    public class WriteOffAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "WriteOff";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            //context.MapRoute(
            //    "WriteOff_default",
            //    "WriteOff/{controller}/{action}/{id}",
            //    new { action = "Index", id = UrlParameter.Optional }
            //);

          context.MapRoute(
              name: "spa-fallback",
              url: "WriteOff/{*url}",
              defaults: new { controller = "Home", action = "Index", Areas = "" }
          );
    }
    }
}