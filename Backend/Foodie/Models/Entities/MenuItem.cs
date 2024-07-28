namespace Foodie.Models.Entities
{
    public class MenuItem
    {
        public int id { get; set; }

        public string? name { get; set; }

        public int? price { get; set; }

        public decimal? star { get; set; }

        public string? tags { get; set; }

        public string? imageUrl { get; set; }

        public string? cookTime { get; set; }

        public string? origins { get; set; }
    }
}