namespace ViewTubeAPI.Models
{
    public class Video
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Url { get; set; }
        public DateTime UploadDate { get; set; }
        // Additional properties like UserId, ViewCount, etc.
    }

}
