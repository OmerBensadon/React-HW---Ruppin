using KitchenDataBase;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using KitchenDataBase;

namespace WebApplication_ServerSide.Controllers
{
    public class IngredientsController : ApiController
    {
        public IEnumerable<Ingredient> Get()
        {
            using (KitchenEntities db = new KitchenEntities())
            {
                return db.Ingredients.ToList();
            }
        }
    }
}
