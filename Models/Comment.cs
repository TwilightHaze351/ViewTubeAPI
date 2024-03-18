namespace ViewTubeAPI.Models
{
    public class Comment
    {
        public int Id { get; set; }
        public required string Text { get; set; }
        public DateTime CreatedAt { get; set; }
        public int VideoId { get; set; }
        public required Video Video { get; set; }
        // Additional properties like UserId
    }

}
