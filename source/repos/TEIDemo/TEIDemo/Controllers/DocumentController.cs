using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TEIDemo.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TEIDemo.Controllers
{

    [Route("api/[controller]")]
    public class DocumentController : Controller
    {

        private readonly DocumentContext _context;

        public DocumentController(DocumentContext context)
        {
            _context = context;

        }


        // GET: api/<controller>
        [HttpGet]
        public IEnumerable<Document> GetDocuments()
        {

            return _context.Documents;
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Document>> GetDocumentById(int id)
        {
            var document = await _context.Documents.FindAsync(id);

            if (document == null)
            {
                return NotFound();
            }

            return document;
        }

        // POST api/<controller>
        [HttpPost]
        public async Task<ActionResult<Document>> PostDocument([FromBody]Document document)
        {
            _context.Documents.Add(document);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDocumentById", new { id = document.Id }, document);
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDocument(int id, [FromBody]Document document)
        {

            if (id != document.Id)
            {
                return BadRequest();
            }

            _context.Entry(document).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDocument(int id)
        {
            var document = await _context.Documents.FindAsync(id);

            if (document == null)
            {
                return NotFound();
            }

            _context.Documents.Remove(document);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
