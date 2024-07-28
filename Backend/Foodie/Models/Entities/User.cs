namespace Foodie.Models.Entities
{
    public class User
    {
        public int id { get; set; }

        public string? username { get; set; }

        public string? email { get; set; }

        public string? number { get; set; }

        public string? password { get; set; }

        public string? imageUrl { get; set; }

        public string? flatno { get; set; }
        public string? street { get; set; }
        public string? city { get; set; }
        public int? zipCode { get; set; }
        public string? state { get; set; }

    }
}
