namespace ViewTubeAPI.Models
{
    public class Video
    {
        public int Id { get; set; }
        public required string Title { get; set; }
        public required string Description { get; set; }
        public required string Url { get; set; }
        public DateTime UploadDate { get; set; }
        // Additional properties like UserId, ViewCount, etc.
    }

}
