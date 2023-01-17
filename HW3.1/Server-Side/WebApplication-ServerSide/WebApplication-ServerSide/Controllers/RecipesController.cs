using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using KitchenDataBase;

namespace WebApplication_ServerSide.Controllers
{
    //[EnableCors]
    public class RecipesController : ApiController
    {
        public IEnumerable<Recipe> Get()
        {
            using (KitchenEntities db = new KitchenEntities())
            {
                return db.Recipes.ToList();
            }
        }
        //public Recipe Get(int id)
        //{
        //    using (KitchenEntities db = new KitchenEntities())
        //    {
        //        return db.Recipes.FirstOrDefault(x => x.Id == id);
        //    }
        //}
    }
}
