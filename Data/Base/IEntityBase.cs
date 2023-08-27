namespace eTickets.Data.Base
{
    public interface IEntityBase
    {
        // Common properties for all entities (e.g., Id, DateCreated, DateModified, etc.)
        int Id { get; set; }
        
    }
}
