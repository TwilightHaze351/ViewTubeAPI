using System.ComponentModel.DataAnnotations;

public class LoginModel
{
    [Required]
    public required string UserName { get; set; }

    [Required]
    [DataType(DataType.Password)]
    public required string Password { get; set; }
}
