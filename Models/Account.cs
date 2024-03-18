namespace ViewTubeAPI.Models
{
    public class Account
    {
        public int AccountId { get; set; }
        public required string Username { get; set; }
        public required string Email { get; set; }
        public required string PasswordHash { get; set; }
        public DateTime DateCreated { get; set; }

        // Additional properties like Role, Status, etc., can be added here

        // Constructor
        public Account()
        {
            DateCreated = DateTime.UtcNow;
        }

        // You can add methods here related to account behavior, like password verification, account updates, etc.
    }

}
