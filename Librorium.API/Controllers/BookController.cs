using Microsoft.AspNetCore.Mvc;

namespace Librorium.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BookController : ControllerBase
    {
        [HttpGet("/:id")]
        public Book GetById(int id)
        {
            return new Book
            {
                Id = id,
                Title = "Title",
                Author = "Author"
            };
        }
    }
}
