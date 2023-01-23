using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using KitchenDataBase;
using System.Text;


namespace WebApplication_ServerSide.Controllers
{
    public class IngredientsController : ApiController
    {
        ///api/Ingredients/
        public IEnumerable<Ingredient> Get()
        {
            using (KitchenEntities db = new KitchenEntities())
            {
                return db.Ingredients.ToList();
            }
        }
                public HttpResponseMessage Post([FromBody] Ingredient ingredient)
        {
            try
            {
                using (KitchenEntities db = new KitchenEntities())
                {
                    db.Ingredients.Add(ingredient);
                    db.SaveChanges();
                    //return Created(new Uri(Request.RequestUri.AbsolutePath+ingredient.Id), ingredient);

                    var message = Request.CreateResponse(HttpStatusCode.Created, ingredient);
                    message.Headers.Location = new Uri(Request.RequestUri + ingredient.Id.ToString());
                    return message;
                }
            }
            catch (Exception ex)
            {
                var r = Request.CreateResponse(HttpStatusCode.BadRequest);
                r.Content = new StringContent("Dude...I have no idle why your getting this error!", Encoding.UTF8, "text/plain");
                return r;
            }

        }
    }
}
