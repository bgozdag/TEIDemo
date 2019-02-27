using System;
using System.ComponentModel.DataAnnotations;

namespace TEIDemo.Models
{
    public class Document
    {
        public int Id { get; set; }
        [Required]
        public string DocName { get; set; }
        [Required]
        public DateTime CreateDate { get; set; }
        [Required]
        public DateTime UpdateDate { get; set; }
        public string Text { get; set; }
    }


}
