using System;

namespace TEIDemo.Models
{
    public class Document
    {
        public int Id { get; set; }
        public string DocName { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime UpdateDate { get; set; }
        public string Text { get; set; }
    }


}
